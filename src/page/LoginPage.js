import { signIn } from "../util/WalletUtil";

const LoginPage = () => {
  const loginButtonHandler = () => {
    signIn();
  };
  return (
    <div>
      LoginPage
      <button onClick={loginButtonHandler}>로그인</button>
    </div>
  );
};

export default LoginPage;
