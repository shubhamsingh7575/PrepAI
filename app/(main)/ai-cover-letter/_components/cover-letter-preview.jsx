"use client";

import ReactMarkdown from "react-markdown";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function CoverLetterPreview({ content }) {
  if (!content) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-muted-foreground">No content available</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="markdown-content space-y-4 text-foreground">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-3xl font-bold mb-4 mt-6" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-2xl font-bold mb-3 mt-5" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-xl font-semibold mb-2 mt-4" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="mb-4 leading-7" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="ml-4" {...props} />
              ),
              strong: ({ node, ...props }) => (
                <strong className="font-bold" {...props} />
              ),
              em: ({ node, ...props }) => (
                <em className="italic" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a className="text-primary underline hover:text-primary/80" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote className="border-l-4 border-muted-foreground pl-4 italic my-4" {...props} />
              ),
              code: ({ node, ...props }) => (
                <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono" {...props} />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </CardContent>
    </Card>
  );
}
