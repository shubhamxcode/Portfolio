import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function GdgNiet() {
  const tasks = [
    {
      text: "Led the development of the community website and implemented new features.",
      keywords: ["development", "community website", "implemented", "features"],
    },
    {
      text: "Conducted hands-on workshops on Frontend Development for 100+ student developers.",
      keywords: ["hands-on workshops", "Frontend Development", "100+ student developers"],
    },
    {
      text: "Organized weekly tech meetups and major events, managing all technical requirements.",
      keywords: ["weekly tech meetups", "major events", "technical requirements"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Technical Team Lead <span className="text-AAsecondary">@ GDG NIET</span>
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