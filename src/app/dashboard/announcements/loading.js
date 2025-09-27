import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="text-center space-y-4 p-6">
        {/* Loading GIF Container */}
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="/aa_loader_gif.gif"
              alt="Loading..."
              width={70}
              height={70}
              priority
              unoptimized
            />
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-900">Loading Announcements</h3>
          <p className="text-sm text-gray-600">
            Fetching the latest announcements...
          </p>
        </div>
      </div>
    </div>
  );
}