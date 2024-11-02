FROM node:18-alpine AS base

# Step 1. Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
# Omit --production flag for TypeScript devDependencies
RUN npm install

COPY app ./app
COPY public ./public
COPY @types ./@types
COPY next.config.mjs .
COPY tsconfig.json .
COPY tailwind.config.ts .
COPY postcss.config.mjs .

# Environment variables must be present at build time
# https://github.com/vercel/next.js/discussions/14030
ARG RESEND_EMAIL
ENV RESEND_EMAIL=${RESEND_EMAIL}
ARG RESEND_API_KEY
ENV RESEND_API_KEY=${RESEND_API_KEY}
ARG NEXT_PUBLIC_CAPTCHA_SITE_KEY
ENV NEXT_PUBLIC_CAPTCHA_SITE_KEY=${NEXT_PUBLIC_CAPTCHA_SITE_KEY}
ARG CAPTCHA_SECRET_KEY
ENV CAPTCHA_SECRET_KEY=${CAPTCHA_SECRET_KEY}

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at build time
# ENV NEXT_TELEMETRY_DISABLED 1

# Build Next.js based on the preferred package manager
RUN npm run build

# Note: It is not necessary to add an intermediate step that does a full copy of `node_modules` here

# Step 2. Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Environment variables must be redefined at run time
ARG RESEND_EMAIL
ENV RESEND_EMAIL=${RESEND_EMAIL}
ARG RESEND_API_KEY
ENV RESEND_API_KEY=${RESEND_API_KEY}
ARG NEXT_PUBLIC_CAPTCHA_SITE_KEY
ENV NEXT_PUBLIC_CAPTCHA_SITE_KEY=${NEXT_PUBLIC_CAPTCHA_SITE_KEY}
ARG CAPTCHA_SECRET_KEY
ENV CAPTCHA_SECRET_KEY=${CAPTCHA_SECRET_KEY}

# Uncomment the following line to disable telemetry at run time
# ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us

CMD ["node", "server.js"]