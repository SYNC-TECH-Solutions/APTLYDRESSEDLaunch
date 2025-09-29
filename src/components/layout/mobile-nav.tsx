'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import MainNav from './main-nav';

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="p-4">
          <Link href="/" className="mb-8 flex items-center space-x-2">
              <span className="font-headline text-2xl font-bold tracking-wider">APTLY DRESSED</span>
          </Link>
          <MainNav className="flex-col space-x-0 space-y-4 items-start" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
