"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center animate-fade-in">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
            404
          </h1>
          <div className="text-6xl animate-bounce mt-4">🔍</div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track!
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/">
            <Button
              size="lg"
              className="w-full flex items-center justify-center gap-2">
              <Home className="h-5 w-5" />
              Go to Homepage
            </Button>
          </Link>

          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="w-full flex items-center justify-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </Button>
        </div>

        {/* Fun animation */}
        <div className="mt-12 flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
