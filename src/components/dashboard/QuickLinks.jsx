import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { BookOpen, User, ExternalLink, ArrowRight } from "lucide-react";

export function QuickLinks() {
  const quickLinks = [
    {
      href: "/resources",
      label: "Resources",
      description: "Access learning materials and documentation",
      icon: BookOpen,
      variant: "outline",
      className: "hover:bg-blue-100"
    },
    {
      href: "/profile",
      label: "Update Profile",
      description: "Manage your account settings and information",
      icon: User,
      variant: "outline",
      className: "hover:bg-blue-100"
    }
  ];

  return (
    <Card className="rounded-xl shadow">
      <CardHeader>
        <CardTitle className="text-base">Quick Links</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {quickLinks.map((link) => (
            <Button
              key={link.href}
              variant={link.variant}
              asChild
              className={`w-full h-auto p-4 justify-start ${link.className}`}
            >
              <Link href={link.href} className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <link.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-medium">{link.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {link.description}
                  </div>
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}