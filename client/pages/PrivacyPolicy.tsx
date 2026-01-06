import { useParams } from "react-router-dom";
import { policies } from "@/data/policies";
import React from "react";

export default function PrivacyPolicy() {
  const { appName, section = "privacy" } = useParams<{
    appName?: string;
    section?: string;
  }>();

  // Return blank for no app name
  if (!appName) {
    return <div className="p-8">No app specified</div>;
  }

  const policy = policies[appName];

  // Blank if app not found
  if (!policy) {
    return <div className="p-8">App not found</div>;
  }

  const currentSection = policy.sections[section];

  // Blank if section not found
  if (!currentSection) {
    return <div className="p-8">Section not found</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {renderMarkdown(currentSection.content)}
    </div>
  );
}

// Render markdown content as React components
function renderMarkdown(markdown: string) {
  const lines = markdown.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];
  let listType: "ul" | "ol" | null = null;

  const flushList = () => {
    if (currentList.length > 0) {
      if (listType === "ol") {
        elements.push(
          <ol key={`list-${elements.length}`} className="mb-4 ml-6 space-y-2 list-decimal">
            {currentList.map((item, idx) => (
              <li key={idx} className="text-foreground/80 dark:text-slate-300">
                {item}
              </li>
            ))}
          </ol>
        );
      } else {
        elements.push(
          <ul key={`list-${elements.length}`} className="mb-4 ml-6 space-y-2 list-disc">
            {currentList.map((item, idx) => (
              <li key={idx} className="text-foreground/80 dark:text-slate-300">
                {item}
              </li>
            ))}
          </ul>
        );
      }
      currentList = [];
      listType = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines
    if (!trimmed) {
      flushList();
      continue;
    }

    // Headers
    if (trimmed.startsWith("# ")) {
      flushList();
      const text = trimmed.replace(/^#+\s/, "");
      elements.push(
        <h1 key={`h1-${i}`} className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-6 mt-8">
          {text}
        </h1>
      );
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushList();
      const text = trimmed.replace(/^#+\s/, "");
      elements.push(
        <h2 key={`h2-${i}`} className="text-2xl font-bold text-foreground dark:text-white mb-4 mt-8">
          {text}
        </h2>
      );
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushList();
      const text = trimmed.replace(/^#+\s/, "");
      elements.push(
        <h3 key={`h3-${i}`} className="text-xl font-bold text-foreground dark:text-white mb-3 mt-6">
          {text}
        </h3>
      );
      continue;
    }

    // Unordered lists
    if (trimmed.startsWith("- ")) {
      if (listType !== "ul") {
        flushList();
        listType = "ul";
      }
      currentList.push(trimmed.substring(2));
      continue;
    }

    // Ordered lists
    if (/^\d+\.\s/.test(trimmed)) {
      if (listType !== "ol") {
        flushList();
        listType = "ol";
      }
      currentList.push(trimmed.replace(/^\d+\.\s/, ""));
      continue;
    }

    // Regular paragraph
    flushList();
    elements.push(
      <p key={`p-${i}`} className="text-foreground/80 dark:text-slate-300 mb-4 leading-relaxed">
        {trimmed}
      </p>
    );
  }

  flushList();
  return elements;
}
