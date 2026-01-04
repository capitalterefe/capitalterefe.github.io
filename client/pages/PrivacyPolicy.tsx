import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { policies } from "@/data/policies";
import { ChevronRight } from "lucide-react";
import React from "react";

export default function PrivacyPolicy() {
  const { appName, section = "privacy" } = useParams<{
    appName?: string;
    section?: string;
  }>();

  // Redirect if no app name
  if (!appName) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 py-20 bg-white dark:bg-slate-900">
          <div className="container">
            <h1 className="text-3xl font-bold text-foreground dark:text-white mb-8">
              Privacy Policies
            </h1>
            <p className="text-foreground/70 dark:text-slate-400 mb-8">
              Select an application to view its privacy policy:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.values(policies).map((policy) => (
                <Link
                  key={policy.id}
                  to={`/privacy/${policy.id}/privacy`}
                  className="p-6 border border-border dark:border-slate-700 rounded-lg hover:border-primary dark:hover:border-primary transition"
                >
                  <h2 className="text-xl font-bold text-foreground dark:text-white mb-2">
                    {policy.name}
                  </h2>
                  <p className="text-sm text-foreground/60 dark:text-slate-400">
                    View privacy policy and terms
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const policy = policies[appName];

  // 404 if app not found
  if (!policy) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 py-20 bg-white dark:bg-slate-900">
          <div className="container text-center">
            <h1 className="text-3xl font-bold text-foreground dark:text-white mb-4">
              Application Not Found
            </h1>
            <p className="text-foreground/70 dark:text-slate-400 mb-8">
              The application "{appName}" does not have a privacy policy available.
            </p>
            <Link
              to="/privacy"
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-opacity-90 transition"
            >
              View All Policies
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const currentSection = policy.sections[section];

  // 404 if section not found
  if (!currentSection) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 py-20 bg-white dark:bg-slate-900">
          <div className="container text-center">
            <h1 className="text-3xl font-bold text-foreground dark:text-white mb-4">
              Section Not Found
            </h1>
            <p className="text-foreground/70 dark:text-slate-400 mb-8">
              The section "{section}" is not available for {policy.name}.
            </p>
            <Link
              to={`/privacy/${appName}/privacy`}
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-opacity-90 transition"
            >
              Back to Privacy Policy
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white dark:bg-slate-900 border-b border-border dark:border-slate-800 py-4">
        <div className="container text-sm text-foreground/60 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Link to="/privacy" className="hover:text-primary transition">
              Policies
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>{policy.name}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground dark:text-white">{currentSection.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white dark:bg-slate-900 py-12 md:py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-sm font-bold text-foreground dark:text-white uppercase mb-4">
                {policy.name}
              </h3>
              <nav className="space-y-2">
                {Object.entries(policy.sections).map(([key, sec]) => (
                  <Link
                    key={key}
                    to={`/privacy/${appName}/${key}`}
                    className={`block px-4 py-2 rounded transition ${
                      section === key
                        ? "bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary border-l-2 border-primary"
                        : "text-foreground/70 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                    }`}
                  >
                    {sec.title}
                  </Link>
                ))}
              </nav>

              {/* Other Apps */}
              {Object.values(policies).length > 1 && (
                <div className="mt-8 pt-8 border-t border-border dark:border-slate-700">
                  <h3 className="text-sm font-bold text-foreground dark:text-white uppercase mb-4">
                    Other Apps
                  </h3>
                  <nav className="space-y-2">
                    {Object.values(policies)
                      .filter((p) => p.id !== appName)
                      .map((p) => (
                        <Link
                          key={p.id}
                          to={`/privacy/${p.id}/privacy`}
                          className="block px-4 py-2 text-foreground/70 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition rounded"
                        >
                          {p.name}
                        </Link>
                      ))}
                  </nav>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="max-w-none space-y-6">
              {renderMarkdown(currentSection.content)}
            </div>

            {/* Footer Info */}
            <div className="mt-12 pt-8 border-t border-border dark:border-slate-700">
              <p className="text-sm text-foreground/60 dark:text-slate-400">
                <strong>App Version:</strong> {policy.version} <br />
                <strong>Last Updated:</strong> {policy.lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
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
      const ListTag = listType === "ol" ? "ol" : "ul";
      elements.push(
        <ListTag key={`list-${elements.length}`} className="mb-4 ml-6 space-y-2">
          {currentList.map((item, idx) => (
            <li key={idx} className="text-foreground/80 dark:text-slate-300">
              {item}
            </li>
          ))}
        </ListTag>
      );
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
