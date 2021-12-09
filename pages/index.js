import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 style={{ 'text-align': 'center' }}>
        <Link href='/login'>
          <a>Login</a>
        </Link>
        <h1 style={{ 'text-align': 'center' }}>
          <Link href='/register'>
            <a>Register</a>
          </Link>
        </h1>
      </h1>
    </div>
  );
}
