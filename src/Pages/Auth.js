import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ErrorModal from "../Components/Modals/ErrorModal";
import { useLoginContext } from "../Contexts/LoginContext";
import loginImg from "../Images/login.svg";

function Auth() {
  const email = useRef(null);
  const password = useRef(null);
  const history = useHistory();

  const { login, setIsLoggedIn } = useLoginContext();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email.current.value && password.current.value) {
      try {
        await login(email.current.value, password.current.value);
        setIsLoggedIn(true);
        history.push("/");
      } catch {}
    }
  };

  return (
    <Wrapper>
      <ErrorModal />
      <div className="img_container">
        <img src={loginImg} alt="" />
      </div>
      <div className="login_container">
        <div>
          <h2>Welcome back!</h2>
          <form>
            <input
              className="credentials"
              type="email"
              placeholder="Enter your email"
              ref={email}
            />
            <input
              className="credentials"
              type="password"
              placeholder="Enter your password"
              ref={password}
            />
            <div className="flex">
              <div className="remember">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe"> Remember me?</label>
              </div>
              <a href="/password-reset">forgot password?</a>
            </div>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default Auth;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr;
  overflow: hidden;
  position: relative;

  .img_container {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      padding: 0 3rem;
    }
  }

  .login_container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.secondary};
    color: white;

    h2 {
      text-align: center;
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
    }

    .credentials {
      width: 100%;
      padding: 0.75rem 1.25rem;
      margin: 0.5rem 0;

      &:focus {
        outline-color: ${(props) => props.theme.primary};
        border-color: transparent;
      }
    }

    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .remember {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      white-space: nowrap;
    }

    a {
      color: ${(props) => props.theme.primary};
      text-decoration: underline;

      &:hover {
        color: ${(props) => props.theme.primaryHover};
      }
    }

    button {
      width: 100%;
      padding: 0.75rem 1.25rem;
      margin: 1rem 0;
      border: transparent;
      background-color: ${(props) => props.theme.primary};
      font-size: 1rem;
      font-weight: 500;
      color: white;
      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.primaryHover};
      }
    }
  }
`;