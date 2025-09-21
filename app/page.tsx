import { Fragment } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <div className="container mx-auto px-4">
        <div className="mt-8">
          <h1 className="text-4xl font-bold">Welcome to Webcraft</h1>
          <p className="mt-4 text-lg">Learn how to create stunning websites with modern technologies.</p>
          <div className="mt-8">
            <Link href="/learn"><a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start Learning</a></Link>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}