import Link from 'next/link';
import React from 'react';

const Home: React.FC = (): JSX.Element => {
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
