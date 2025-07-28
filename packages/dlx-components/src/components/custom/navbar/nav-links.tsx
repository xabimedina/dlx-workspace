import { cn } from "@/lib/utils";

interface NavLinksProps {
  isMobile?: boolean;
  children?: React.ReactNode;
}

export function NavLinks({ isMobile = false, children }: NavLinksProps) {
  return (
    <div
      className={cn(
        "flex items-baseline font-semibold",
        isMobile ? "flex-col gap-6 text-2xl" : "flex-row space-x-1 text-md"
      )}
    >
      {children}
    </div>
  );
}
