import styled from "styled-components";

export const FormWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 450px;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 10px;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.darkGrey} inset !important;
    box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.darkGrey} inset !important;
  }
  input:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) =>
      theme.colors.lightGrey} !important;
  }
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
  background-color: ${({ theme }) => theme.colors.darkGrey};
  margin: 15px 0;
  border-radius: 10px;
  outline: none;
  color: ${({ theme }) => theme.colors.lightGrey};
  border: 1px solid
    ${({ error, theme }) => (error ? theme.colors.red : theme.colors.lightBlue)}; // dc143c 7289da
  transition: 0.3s ease border-color;

  &::placeholder {
    font-size: 12px;
  }

  &:placeholder-shown {
    border-color: ${({ error, theme }) =>
      error ? theme.colors.red : theme.colors.darkGrey};
  }
`;

export const InputError = styled.p`
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  bottom: -6px;
  left: 5px;
  color: ${({ theme }) => theme.colors.red};
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
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.semiDarkBlue};
  cursor: pointer;
`;

export const FormOffer = styled.p`
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 14px;
  a {
    color: ${({ theme }) => theme.colors.lightBlue};
  }
`;
