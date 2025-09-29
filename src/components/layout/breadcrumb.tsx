'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Fragment } from 'react';

// A simple function to capitalize the first letter of a string.
const capitalize = (s: string) => {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ');
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment);

  if (pathSegments.length === 0) {
    return null; // Don't show breadcrumbs on the home page
  }

  return (
    <nav aria-label="Breadcrumb">
      <ol className="container mx-auto flex items-center space-x-2 px-4 py-3 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <Fragment key={href}>
              <li>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li>
                {isLast ? (
                  <span className="font-medium text-foreground">
                    {capitalize(segment)}
                  </span>
                ) : (
                  <Link href={href} className="hover:text-primary transition-colors">
                    {capitalize(segment)}
                  </Link>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
