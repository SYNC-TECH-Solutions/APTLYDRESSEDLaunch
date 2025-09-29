import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary/50 py-6 text-secondary-foreground">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Aptly Dressed. An affiliate marketing partner.</p>
        <p>
          Powered by{' '}
          <Link
            href="https://synctech.ie"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            SYNC TECH
          </Link>
        </p>
      </div>
    </footer>
  );
}
