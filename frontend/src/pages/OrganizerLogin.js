import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faLock } from "@fortawesome/free-solid-svg-icons";

const OrgLogin = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  // Set initial positioning with a delay to let the component mount first
  useEffect(() => {
    setAnimationClass("animated-signin");
  }, []);

  const toggleSignIn = () => {
    setAnimationClass("animated-signin");
    setIsSignUp(false);
  };

  const toggleSignUp = () => {
    setAnimationClass("animated-signup");
    setIsSignUp(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., API call)
    
    // Change this line to redirect to host.html instead of /home
    window.location.href = '/host.html';
    // Remove or comment out the React Router navigation 
    // navigate("/home");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Perform sign-up logic here (e.g., API call)
    // After successful sign-up, redirect to host.html
    window.location.href = '/host.html';
    // Remove or comment out the React Router navigation
    // navigate("/home");
  };

  return (
    <div className={`wrapper ${animationClass}`}>
      <div className="form-container sign-up">
        <form onSubmit={handleSignUp}>
          <h2>Sign up as<br /> an Organizer!</h2>
          <div className="form-group">
            <input type="text" required />
            <FontAwesomeIcon icon={faUser} className="icon" />
            <label>username</label>
          </div>
          <div className="form-group">
            <input type="email" required />
            <FontAwesomeIcon icon={faAt} className="icon" />
            <label>email</label>
          </div>
          <div className="form-group">
            <input type="password" required />
            <FontAwesomeIcon icon={faLock} className="icon" />
            <label>password</label>
          </div>
          <div className="form-group">
            <input type="password" required />
            <FontAwesomeIcon icon={faLock} className="icon" />
            <label>confirm password</label>
          </div>
          <button type="submit" className="btn">sign up</button>
          <div className="link">
            <p>You already have an account? <span onClick={toggleSignIn} className="signin-link">sign in</span></p>
          </div>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleLogin}>
          <h2>Welcome back!</h2>
          <div className="form-group">
            <input type="text" required />
            <FontAwesomeIcon icon={faUser} className="icon" />
            <label>username</label>
          </div>
          <div className="form-group">
            <input type="password" required />
            <FontAwesomeIcon icon={faLock} className="icon" />
            <label>password</label>
          </div>
          <div className="forgot-pass">
            <a href="#">forgot password?</a>
          </div>
          <button type="submit" className="btn">login</button>
          <div className="link">
            <p>Don't have an account? <span onClick={toggleSignUp} className="signup-link">sign up</span></p>
          </div>
        </form>
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        :root {
          --mainColor: rgb(0, 0, 0);
          --whiteColor: rgb(255, 255, 255);
          --titleColor: #000000;
          --labelColor: #000000;
        }

        html {
          font-size: 62.5%;
          scroll-behavior: smooth;
        }

        body {
          background: linear-gradient(to right, rgb(0, 0, 0), var(--mainColor));
          font-weight: 400;
          min-height: 100vh;
          display: grid;
          place-content: center;
          overflow: hidden;
        }

        .wrapper {
          position: relative;
          width: 35rem;
          height: 50rem;
          margin: 0 auto;
        }

        @media (min-width: 540px) {
          .wrapper {
            width: 40rem;
          }
        }

        .wrapper .form-container {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background-color: var(--whiteColor);
          border-radius: 0.5rem;
          box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
        }

        .wrapper .form-container.sign-up {
          transform: rotate(7deg);
        }

        .wrapper .form-container.sign-in {
          transform: rotate(0deg);
          z-index: 1;
        }

        .wrapper .form-container form h2 {
          font-size: 3rem;
          text-align: center;
          text-transform: capitalize;
          color: var(--titleColor);
        }

        .wrapper .form-container form .form-group {
          position: relative;
          width: 32rem;
          margin: 3rem 0;
        }

        .wrapper .form-container form .form-group .icon,
        .wrapper .form-container form .form-group label {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.6rem;
          text-transform: capitalize;
          color: var(--labelColor);
          padding: 0 0.5rem;
          pointer-events: none;
          transition: all 0.5s ease;
        }

        .wrapper .form-container form .form-group .icon {
          left: 0.5rem;
        }

        .wrapper .form-container form .form-group label {
          left: 2.5rem;
        }

        .wrapper .form-container form .form-group input {
          width: 100%;
          height: 4rem;
          padding: 0 1rem;
          border-radius: 0.5rem;
          border: none;
          outline: none;
          border: 0.1rem solid var(--labelColor);
          font-size: 1.6rem;
          color: var(--labelColor);
          background: transparent;
        }

        form .form-group input:focus ~ label,
        form .form-group input:valid ~ label,
        form .form-group input:focus ~ .icon,
        form .form-group input:valid ~ .icon {
          top: 0 !important;
          font-size: 1.2rem !important;
          background-color: var(--whiteColor);
        }

        .wrapper .form-container form .forgot-pass {
          margin: -1.5rem 0 1.5rem;
        }

        .wrapper .form-container form .forgot-pass a {
          color: var(--labelColor);
          text-decoration: none;
          font-size: 1.4rem;
          text-transform: capitalize;
          transition: all 0.5s ease;
        }

        .wrapper .form-container form .forgot-pass a:hover {
          color: var(--mainColor);
        }

        .wrapper .form-container form .btn {
          background: linear-gradient(to right, hsla(25, 75.00%, 47.10%, 0.72), var(--mainColor));
          color: var(--whiteColor);
          text-transform: capitalize;
          width: 100%;
          height: 4rem;
          font-size: 1.6rem;
          font-weight: 500;
          outline: none;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.4);
        }

        .wrapper .form-container form .link {
          text-align: center;
          font-size: 1.4rem;
          color: var(--labelColor);
          margin: 2.5rem 0;
        }

        .wrapper .form-container form .link p {
          color: var(--labelColor);
        }

        .wrapper .form-container form .link p span {
          text-transform: capitalize;
          color: var(--mainColor);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.5s ease;
          cursor: pointer;
        }

        .wrapper .form-container form .link p span:hover {
          color: #da4453;
        }

        .wrapper.animated-signin .form-container.sign-in {
          animation: signin-flip 1s ease-in-out forwards;
        }

        @keyframes signin-flip {
          0% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(-50rem) scale(1.1);
          }

          100% {
            transform: translateX(0) rotate(0deg) scale(1);
            z-index: 1;
          }
        }

        .wrapper.animated-signin .form-container.sign-up {
          animation: rotatecard-signin 0.7s ease-in-out forwards;
          z-index: 0;
        }

        @keyframes rotatecard-signin {
          0% {
            transform: rotate(0deg);
            z-index: 1;
          }

          100% {
            transform: rotate(7deg);
            z-index: 0;
          }
        }

        .wrapper.animated-signup .form-container.sign-up {
          animation: signup-flip 1s ease-in-out forwards;
        }

        @keyframes signup-flip {
          0% {
            transform: translateX(0) rotate(7deg);
            z-index: 0;
          }

          50% {
            transform: translateX(50rem) scale(1.1);
          }

          100% {
            transform: translateX(0) rotate(0deg) scale(1);
            z-index: 1;
          }
        }

        .wrapper.animated-signup .form-container.sign-in {
          animation: rotatecard-signup 0.7s ease-in-out forwards;
          animation-delay: 0.5s;
        }

        @keyframes rotatecard-signup {
          0% {
            transform: rotate(0deg);
            z-index: 1;
          }

          100% {
            transform: rotate(7deg);
            z-index: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default OrgLogin;