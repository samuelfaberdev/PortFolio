"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import { DATA } from "../utils/data";

export default function AboutSection() {
  const [tab, setTab] = useState("hardskills");

  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="w-full p-4 flex justify-between gap-32">
      <div className="w-2/6 rounded-lg">
        <Image
          className="rounded-3xl"
          src={"/images/bureau.jpg"}
          alt="Un bureau d'ordinateur"
          width={400}
          height={400}
        />
      </div>
      <article className="flex flex-col gap-4 w-4/6">
        <h2 className="text-4xl">A propos de moi</h2>
        <p>
          De formation initiale dans la maintenance industrielle puis
          biomédicales, ainsi que de nombreux autres métiers, j&apos;ai souhaité
          faire une reconversion dans le développement web.
        </p>
        <p>
          Dans cette section vous découvrirez mes diverses compétences acquises
          au fil de ma reconversion et de mon parcours professionnel, ainsi que
          mes différentes expériences dans le milieu du développement.
        </p>
        <div className="flex gap-4">
          <button
            className="font-bold"
            onClick={() => handleTabChange("hardskills")}
          >
            Hard Skills
            <p className={tab === "hardskills" ? "active" : "h-0.5"}></p>
          </button>

          <button
            className="font-bold"
            onClick={() => handleTabChange("softskills")}
          >
            Soft Skills
            <p className={tab === "softskills" ? "active" : "h-0.5"}></p>
          </button>

          <button
            className="font-bold"
            onClick={() => handleTabChange("education")}
          >
            Formations
            <p className={tab === "education" ? "active" : "h-0.5"}></p>
          </button>

          <button
            className="font-bold"
            onClick={() => handleTabChange("experiences")}
          >
            Experiences
            <p className={tab === "experiences" ? "active" : "h-0.5"}></p>
          </button>
        </div>
        <div>{DATA.find((t) => t.id === tab)?.content}</div>
      </article>
    </section>
  );
}
