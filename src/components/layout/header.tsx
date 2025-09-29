import Link from 'next/link';
import MobileNav from './mobile-nav';
import MainNav from './main-nav';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-headline text-2xl font-bold tracking-wider pl-4">APTLY DRESSED</span>
          </Link>
        </div>
        
        <div className="hidden flex-1 items-center justify-center md:flex">
            <MainNav />
        </div>

        <div className="flex items-center justify-end md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
