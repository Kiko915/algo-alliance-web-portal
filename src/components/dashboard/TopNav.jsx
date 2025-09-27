"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TopNav({ user }) {
  const initials = useMemo(() => getInitials(user.name), [user.name]);

  return (
    <div className="flex items-center justify-end gap-3 ml-auto">
      {/* Profile avatar */}
      <Link href="/profile" className="block">
        <Avatar className="h-8 w-8">
          <AvatarImage alt={user.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
}