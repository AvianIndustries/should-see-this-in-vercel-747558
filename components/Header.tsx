import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/"><a className="text-2xl font-bold">Webcraft</a></Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/learn"><a className="hover:underline">Learn</a></Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}