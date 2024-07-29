"use client";
import { useEffect } from "react";
import IntersectionNode from "@/lib/intersectionNode";

export default function Home() {
  useEffect(() => {
    const sectionsDom = document.getElementsByTagName("section");
    const observer = new IntersectionNode();
    observer.create({
      nodes: sectionsDom,
      change: (entry) => {
        entry.classList.add("progressive-display");
      },
    });
    observer.init();
  }, []);

  return (
    <>
      <section className="opacity-0">
        <div className="title" style={{ margin: "20% 0 1.5rem" }}>
          <h4>Hi, my name is</h4>
        </div>
        <div className="title">
          <h1>Liu Taiqiang,</h1>
        </div>
        <div className="title">
          <h2>I am studying technology here.</h2>
        </div>
      </section>
      <section className="opacity-0 pt-24">
        <h1>About me.</h1>
      </section>
      <section className="opacity-0 pt-24">
        <h1>Work experience.</h1>
      </section>
    </>
  );
}
