import AnimatedLogo from "@/components/ui/animated-logo";

export default function HomeLoading() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* YouTube-like top loading bar - Primary focus */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-red-500 via-blue-500 to-green-500 animate-loading-bar shadow-sm"></div>
      </div>

      {/* Secondary YouTube-style loading bar */}
      <div className="fixed top-1 left-0 w-full h-0.5 bg-transparent z-40 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60"
          style={{
            animation: "loading-bar 2.5s ease-in-out infinite",
            animationDelay: "0.3s",
          }}></div>
      </div>

      {/* Subtle background overlay with minimal content */}
      <div className="fixed inset-0 bg-white/80 backdrop-blur-[0.5px] z-30 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-6 opacity-40">
          {/* Small centered logo */}
          <div className="transform scale-75">
            <AnimatedLogo />
          </div>

          {/* Minimal loading indicator */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}></div>
            <div
              className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}></div>
          </div>

          {/* Subtle loading text */}
          <p className="text-gray-500 text-sm font-medium animate-pulse">
            Loading...
          </p>
        </div>
      </div>

      {/* Page skeleton preview (YouTube-style) */}
      <div className="opacity-20 pointer-events-none">
        {/* Header skeleton */}
        <div className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="flex space-x-6">
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-18 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Content skeleton */}
        <div className="container mx-auto px-4 py-16">
          <div className="space-y-4">
            <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-10 w-32 bg-gray-200 rounded animate-pulse mt-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
