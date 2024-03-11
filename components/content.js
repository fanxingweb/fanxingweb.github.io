"use client";
import { useEffect, useContext, useRef } from "react";
import cls from "classnames";
import { useSelectedLayoutSegments } from "next/navigation";
import { GlobalContext } from "@/components/globalContext";

const particle_theme_color = {
  dark: '224,224,224',
  light: '156,217,249'
}

export default function Content({ children }) {
  const { globalState } = useContext(GlobalContext);

  const segments = useSelectedLayoutSegments();
  const particleRef = useRef(null);

  useEffect(() => {
    if (particleRef.current) {
      particleRef.current.themeChange(particle_theme_color?.[globalState.theme]);
    } else {
      import("@/lib/bgParticle").then(({ default: BGParticle }) => {
        particleRef.current = new BGParticle("__next_background", particle_theme_color?.[globalState.theme] || particle_theme_color[1]);
        particleRef.current.init();
      });
    }
  }, [globalState.theme]);

  return (
    <>
      <main
        className={cls("flex flex-col items-center justify-between mt-20", {
          ["blog-wrapper"]: segments.length,
        })}
        style={{ minHeight: "calc(100vh - 10rem)" }}
      >
        {children}
      </main>
      <div
        id="__next_background"
        style={
          segments.length
            ? { position: "fixed", zIndex: -1 }
            : { display: "none" }
        }
      />
    </>
  );
}
