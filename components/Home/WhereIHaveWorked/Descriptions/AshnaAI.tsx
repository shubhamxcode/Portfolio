import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function AshnaAI() {
  const tasks = [
    {
      text: "Built and maintained an AI-powered platform with Next.js, TypeScript, and Tailwind CSS.",
      keywords: ["AI-powered platform", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      text: "Developed dynamic UI components, integrated RESTful APIs, and collaborated in an Agile workflow.",
      keywords: ["dynamic UI components", "RESTful APIs", "Agile workflow"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Developer Intern <span className="text-AAsecondary">@ AshnaAI</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">March 2025 - April 2025 (Remote, India)</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
} 