import { Fragment } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function LearnPage() {
  return (
    <Fragment>
      <Header />
      <div className="container mx-auto px-4">
        <div className="mt-8">
          <h1 className="text-4xl font-bold">Learn Web Development</h1>
          <p className="mt-4 text-lg">Find resources, tutorials, and more to help you become a web development pro.</p>
          <div className="mt-8">
            <Link href="/"><a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back to Home</a></Link>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}