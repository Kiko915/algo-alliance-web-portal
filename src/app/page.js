import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto grid h-[1080px] max-h-screen grid-cols-1 md:grid-cols-2">
        {/* Left: Banner */}
        <div className="relative overflow-hidden">
          <Image
            src="/aa-portal-banner.png"
            alt="Algo Alliance Portal banner"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Right: Flat content */}
        <div className="flex items-center justify-center px-8 py-12">
          <section className="w-full max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Algorithmic Alliance Club Portal</h1>
            <p className="mt-3 text-base text-muted-foreground">
              Welcome to the Algorithmic Alliance Club Portal — your gateway to events, resources, and community tools for members.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" variant="default" className="sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/login" aria-label="Log in to the Algorithmic Alliance Club Portal">Log in</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="sm:w-auto">
                <Link href="/signup" aria-label="Register for the Algorithmic Alliance Club Portal">Register</Link>
              </Button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Already an Algo Alliance member but do not have an account?
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
