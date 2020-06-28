export interface data {
  email: string;
  username: string;
  password: string;
  cpassword: string;
}

export interface Props {
  inputText: {
    email: string;
    username: string;
    password: string;
    cpassword: string;
  };
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorText: {
    emailError: string;
    usernameError: string;
    passwordError: string;
    confirmPasswordError: string;
  };
}

export interface authen {}

export interface signIn {
  email: string;
  password: string;
  error: string;
}
export interface signInProps {
  signInData: {
    email: string;
    password: string;
    error: string;
  };
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface errorState {
  emailError: string;
  usernameError: string;
  passwordError: string;
  confirmPasswordError: string;
}
