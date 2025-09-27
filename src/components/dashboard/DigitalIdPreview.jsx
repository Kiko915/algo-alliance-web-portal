"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export function DigitalIdPreview({ name, memberId }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const onDownload = () => {
    // Placeholder for generating/downloading an ID card
    alert("Download ID clicked (placeholder)");
  };

  return (
    <Card className="rounded-xl shadow">
      <CardHeader>
        <CardTitle className="text-base">Digital ID</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border bg-white p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage alt={name} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-gray-900">{name}</p>
                <p className="text-xs text-gray-500">{memberId}</p>
              </div>
            </div>
            {/* QR placeholder */}
            <div className="h-16 w-16 rounded bg-gray-200 grid grid-cols-4 grid-rows-4 overflow-hidden">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className={(i + Math.floor(i / 4)) % 2 === 0 ? "bg-gray-300" : "bg-gray-100"} />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onDownload}>Download ID</Button>
      </CardFooter>
    </Card>
  );
}