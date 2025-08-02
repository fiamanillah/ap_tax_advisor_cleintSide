"use client";
import Icon from "@/components/Shared/Icon";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function GoBack() {
  const router = useRouter();

  return (
    <Button
      className="absolute top-8 left-8"
      variant="ghost"
      onClick={() => router.back()}
    >
      <Icon src="/icons/back.svg" className="h-8 w-8" />
    </Button>
  );
}
