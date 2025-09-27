import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center space-y-4 p-6">
        {/* Loading GIF Container */}
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="/aa_loader_gif.gif"
              alt="Loading..."
              width={80}
              height={80}
              priority
              unoptimized
            />
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-900">Loading Dashboard</h3>
          <p className="text-sm text-gray-600">
            Please wait while we prepare your content...
          </p>
        </div>
      </div>
    </div>
  );
}