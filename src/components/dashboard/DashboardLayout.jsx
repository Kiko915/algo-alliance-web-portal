import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "./Sidebar";
import { TopNav } from "./TopNav";
import packageJson from "../../../package.json";

export function DashboardLayout({ children, user }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex-1">
            <TopNav user={user} />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {children}
        </div>
        <footer className="border-t px-4 py-3">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Developed by AlgoWeb</span>
            <span>v{packageJson.version}</span>
          </div>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}