import AnimatedLogo from "@/components/ui/animated-logo";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* YouTube-like top loading bar - Purple theme for global */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-purple-500 via-violet-600 to-purple-700 animate-loading-bar shadow-sm"></div>
      </div>

      {/* Secondary loading indicator */}
      <div className="fixed top-1 left-0 w-full h-0.5 bg-transparent z-40 overflow-hidden">
        <div className="h-full bg-purple-400 opacity-50 animate-youtube-progress"></div>
      </div>

      {/* Minimal loading content */}
      <div className="fixed inset-0 bg-white/70 backdrop-blur-[0.5px] z-30 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4 opacity-60">
          <div className="transform scale-60">
            <AnimatedLogo />
          </div>
          <p className="text-purple-600 text-sm font-medium animate-pulse">
            Loading AP Tax Advisor...
          </p>
        </div>
      </div>

      {/* Page skeleton */}
      <div className="opacity-15 pointer-events-none">
        <div className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="flex space-x-6">
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-18 bg-purple-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-16">
          <div className="space-y-4">
            <div className="h-8 w-3/4 bg-purple-200 rounded animate-pulse"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
