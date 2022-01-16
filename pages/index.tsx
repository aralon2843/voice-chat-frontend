import Router from 'next/router';
import React, { useEffect } from 'react';

const Home: React.FC = (): JSX.Element => {
  useEffect(() => {
    const ISSERVER = typeof window === 'undefined';
    if (!ISSERVER && localStorage.getItem('access_token')) {
      const currentUserId = localStorage.getItem('currentUserId');
      Router.push(`/${currentUserId}`);
    } else {
      Router.push('/login');
    }
  }, []);

  return <></>;
};

export default Home;
