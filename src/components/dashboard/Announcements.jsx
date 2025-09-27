import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Megaphone } from "lucide-react";

export function AnnouncementsWidget({ items }) {
  return (
    <Card className="rounded-xl shadow">
      <CardHeader>
        <CardTitle className="text-base">Latest Announcements</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.length === 0 ? (
          <div className="text-center py-8">
            <div className="p-3 bg-gray-50 rounded-full w-fit mx-auto mb-4">
              <Megaphone className="h-8 w-8 text-gray-300" />
            </div>
            <p className="text-sm font-medium text-gray-900 mb-2">No announcements yet</p>
            <p className="text-xs text-gray-500 mb-4">
              New announcements will appear here when available
            </p>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/announcements" className="text-blue-600 hover:text-blue-700">
                Go to Announcements
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        ) : (
          items.slice(0, 5).map((a, idx) => (
            <div key={a.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">{a.title}</p>
                <span className="text-xs text-gray-500">{a.date}</span>
              </div>
              {idx !== Math.min(items.length, 5) - 1 && <Separator />}
            </div>
          ))
        )}
        
        {items.length > 0 && (
          <div className="pt-2 border-t">
            <Button variant="ghost" size="sm" asChild className="w-full justify-between">
              <Link href="/dashboard/announcements">
                View All Announcements
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}