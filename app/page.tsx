'use client';

import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('@/page-builder/home-page'), {
  loading: () => <> Loading...</>,
});

/** Renders the dynamically loaded home page, including its loading fallback. */
function Home() {
  return <HomePage />;
}

export default Home;
