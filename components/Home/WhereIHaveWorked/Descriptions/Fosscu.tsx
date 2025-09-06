import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Fosscu() {
  const tasks = [
    {
      text: "Delivered hands-on tech talks and workshops focused on practical development skills.",
      keywords: ["hands-on tech talks", "workshops", "practical development skills"],
    },
    {
      text: "Organized weekly meetups and sessions, managing event logistics and content.",
      keywords: ["weekly meetups", "event logistics", "content management"],
    },
    {
      text: "Mentored students on open-source contributions with code reviews and workflow training.",
      keywords: ["Mentored students", "open-source contributions", "code reviews", "workflow training"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Technical Community Lead <span className="text-AAsecondary">@ FOSSCU</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Community Leadership Role</span>
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