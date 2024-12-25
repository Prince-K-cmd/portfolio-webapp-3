"use client";

import { useState, useEffect, memo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language: string;
  className?: string;
  "aria-label"?: string;
}

export const CodeBlock = memo(
  ({ code, language, className, "aria-label": ariaLabel }: CodeBlockProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
      <div
        className={`code-block-container ${className}`}
        aria-label={ariaLabel}
      >
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            background: "transparent",
            padding: "1rem",
            borderRadius: "0.5rem",
            fontSize: "0.8rem",
            overflowX: "auto",
          }}
          codeTagProps={{
            style: {
              fontFamily: "var(--font-mono)",
            },
          }}
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    );
  }
);

CodeBlock.displayName = "CodeBlock";
