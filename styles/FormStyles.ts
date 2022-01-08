import styled from 'styled-components';

export const Form = styled.form`
  width: 450px;
  padding: 15px;
  background-color: #36393f;
  border-radius: 10px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

interface IInput {
  error: boolean;
}

export const Input = styled.input<IInput>`
  min-width: 100%;
  padding: 9px 12px;
  background-color: #303339;
  margin: 15px 0;
  border-radius: 10px;
  outline: none;
  color: #ccc;
  border: 1px solid ${({ error }) => (error ? "#dc143c" : "#7289da")}; // dc143c 7289da
  transition: 0.3s ease all;

  &::placeholder {
    font-size: 12px;
  }

  &:placeholder-shown {
    border-color: #2c2e33;
  }
`;

export const InputError = styled.p`
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  bottom: -6px;
  left: 5px;
  color: #dc143c;
`;

export const SubminButton = styled.button`
  margin-top: 15px;
  min-width: 100%;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #7289da;
  cursor: pointer;
`;

export const FormOffer = styled.a`
  margin-top: 15px;
  color: #ccc;
  font-size: 14px;
  a {
    color: #7289da;
  }
`;
