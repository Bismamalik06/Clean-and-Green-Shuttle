"use client";

import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <Button
      variant="default"
      size="default"
      onClick={() => router.back()}
      className={cn("gap-2 font-bold shadow-md transition-transform duration-200 hover:scale-105", className)}
    >
      <MoveLeft className="h-4 w-4" />
      Back
    </Button>
  );
}
