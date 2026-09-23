'use client';

import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('@/page-builder/home-page'), {
  loading: () => <> Loading...</>,
});

function Home() {
  return <HomePage />;
}

export default Home;
