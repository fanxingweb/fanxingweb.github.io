'use client'
import { useEffect } from "react";

export default function ServerToClientCode() {
  function copyCodeToClipboard(element) {
    const code = element.nextElementSibling.textContent;
    navigator.clipboard
      .writeText(code)
      .then(() => {
        console.log("Text copied to clipboard");
        element.textContent = "Copied!";
        setTimeout(() => (element.textContent = "Copy"), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text to clipboard: ", err);
      });
  }

  useEffect(() => {
    document.querySelectorAll(".copy-button").forEach((button) => {
      button.addEventListener("click", () => copyCodeToClipboard(button));
    });
    
    return () => {
      document.querySelectorAll(".copy-button").forEach((button) => {
        button.removeEventListener("click", () => copyCodeToClipboard(button));
      });
    };
  }, []);

  return null
}
