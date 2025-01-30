"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link, { LinkProps } from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/utils/hooks";
import { blockNavigation } from "@/app/utils/NavigationState";

interface DelayedLinkProps
  extends LinkProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const DelayedLink = ({ href, children, ...props }: DelayedLinkProps) => {
  const router = useRouter();

  const pathname = usePathname();

  const [pendingPath, setPendingPath] = useState<string | null>(null);

  const isNavigationAllowed = useAppSelector(
    (state) => state.navigation?.isNavigationAllowed,
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === href) return;

    const hrefString = typeof href === "string" ? href : href.toString();

    history.replaceState(null, "", hrefString);

    setPendingPath(hrefString);
  };

  useEffect(() => {
    let timeout;

    if (pendingPath && isNavigationAllowed) {
      timeout = setTimeout(() => {
        router.push(pendingPath);
        setPendingPath(null);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isNavigationAllowed, pendingPath, router]);

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};
