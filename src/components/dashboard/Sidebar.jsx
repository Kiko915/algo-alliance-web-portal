import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Megaphone,
  Calendar,
  BookOpen,
  IdCard,
  Inbox
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { 
    href: "/dashboard", 
    label: "Dashboard", 
    icon: LayoutDashboard 
  },
  { 
    href: "/dashboard/announcements", 
    label: "Announcements", 
    icon: Megaphone 
  },
  { 
    href: "/events", 
    label: "Events", 
    icon: Calendar,
    comingSoon: true
  },
  { 
    href: "/resources", 
    label: "Resources", 
    icon: BookOpen,
    comingSoon: true
  },
  { 
    href: "/digital-id", 
    label: "Digital ID", 
    icon: IdCard 
  },
  {
    href: "/dashboard/inbox",
    label: "Inbox",
    comingSoon: true,
    icon: Inbox
  }
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Image
                    src="/logo/algoalliance_symbol_primary.png"
                    alt="Algorithmic Alliance Logo"
                    width={32}
                    height={32}
                    className="size-8 object-contain"
                  />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Algorithmic Alliance</span>
                  <span className="text-xs text-muted-foreground">Member Portal</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href} className={item.comingSoon ? "pointer-events-none" : ""}>
                      <item.icon />
                      <span>{item.label}</span>
                      {item.comingSoon && (
                        <Badge variant="secondary" className="ml-auto text-xs">
                          Coming Soon
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}