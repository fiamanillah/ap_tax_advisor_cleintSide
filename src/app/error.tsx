"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center animate-fade-in">
        <div className="mb-6">
          <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4 animate-bounce" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Oops! Something went wrong
          </h1>
          <p className="text-gray-600">
            We encountered an unexpected error. Don&apos;t worry, our team has
            been notified.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={reset}
            className="w-full flex items-center justify-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>

          <Button
            variant="outline"
            onClick={() => (window.location.href = "/")}
            className="w-full flex items-center justify-center gap-2">
            <Home className="h-4 w-4" />
            Go to Homepage
          </Button>
        </div>

        {process.env.NODE_ENV === "development" && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
              Error Details (Development Only)
            </summary>
            <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
