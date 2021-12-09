import { Form, Input, FormOffer, SubminButton } from '../../styles/FormStyles';
import Link from 'next/link';

export default function Register(): JSX.Element {
  return (
    <>
      <Form>
        <Input placeholder='E-mail'></Input>
        <Input placeholder='Login'></Input>
        <Input placeholder='Password'></Input>
        <SubminButton>Register</SubminButton>
      </Form>
      <FormOffer>
        Already have account?
        <Link href='/login'>
          <a> Login</a>
        </Link>
      </FormOffer>
    </>
  );
}
