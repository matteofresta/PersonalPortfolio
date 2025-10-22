import { NavLinksSkeleton } from "@/components/ui/shadcn/skeleton/NavLinksSkeleton.tsx";

const skeletonVariants = {
  NavLinks: <NavLinksSkeleton />,
};

type SkeletonVariant = keyof typeof skeletonVariants;

export const LoadingSkeleton = ({ variant }: { variant: SkeletonVariant }) => {
  return skeletonVariants[variant] || null;
};
