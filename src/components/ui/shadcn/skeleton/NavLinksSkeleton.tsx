import { Skeleton } from "@/components/ui/shadcn/skeleton/skeleton";

export const NavLinksSkeleton = () => {
  return (
    <ul className="flex gap-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <li key={index}>
          <Skeleton className="h-5 w-20 bg-zinc-300" />
        </li>
      ))}
    </ul>
  );
};
