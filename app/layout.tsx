// Le vrai layout (avec <html lang>) est dans app/[locale]/layout.tsx :
// celui-ci ne sert qu'à satisfaire Next.js.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
