import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Home, LayoutDashboard } from "lucide-react";

export const metadata = {
    title: "404 Not Found - Algorithmic Alliance Club Portal",
    description: "The page you are looking for does not exist. Return to the home page or dashboard.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2837BD] rounded-lg mb-8">
          <Image
            src="/logo/algoalliance_symbol_primary.png"
            alt="Algorithmic Alliance Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain brightness-0 invert"
          />
        </div>
        
        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">404</h1>
          <p className="text-slate-600 dark:text-slate-400">Page not found</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-[#2837BD] hover:bg-[#1e2a9a] text-white">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="border-[#2837BD] text-[#2837BD] hover:bg-[#2837BD] hover:text-white">
            <Link href="/dashboard">
              <LayoutDashboard className="w-4 h-4 mr-2" />
              Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}