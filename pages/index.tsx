import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { useAppSelector } from '../hooks/redux';

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

  return (
    <div>
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </p>
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </p>
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        <Link href="/1">
          <a>Profile</a>
        </Link>
      </p>
    </div>
  );
};

export default Home;
