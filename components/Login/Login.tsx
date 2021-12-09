import {
  Form,
  Input,
  FormOffer,
  SubminButton,
} from '../../styles/FormStyles';
import Link from 'next/link';

interface iLogin {}

export default function Login(): JSX.Element {
  return (
    <>
      <Form>
        <Input placeholder='Login'></Input>
        <Input placeholder='Password'></Input>
        <SubminButton>Login</SubminButton>
      </Form>
      <FormOffer>
        Still not registered?
        <Link href='/register'>
          <a> Join us!</a>
        </Link>
      </FormOffer>
    </>
  );
}
