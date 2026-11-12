import { useState } from "react";
import styled from "styled-components";
import Modal from "../ui/Modal";
import LoginForm from "../features/authentication/LoginForm";
import SignupForm from "../features/authentication/SignupForm";
import VerifyEmailForm from "../features/authentication/VerifyEmailForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(0, 48rem);
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  width: 100%;
  padding: 3.2rem 1.6rem;
  background-color: var(--color-grey-50);

  @media (max-width: 480px) {
    gap: 2rem;
    padding: 2rem 0;
  }
`;

const ModePrompt = styled.p`
  text-align: center;
  font-size: 1.4rem;
`;

const ModeToggle = styled.button`
  border: none;
  background: none;
  color: var(--color-brand-600);
  font: inherit;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: var(--color-brand-700);
    text-decoration: underline;
  }
`;

function Login() {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState("");
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);

  function handleSignupSuccess({ email, requiresVerification }) {
    setIsSigningUp(false);
    if (!requiresVerification) return;

    setVerificationEmail(email);
    setIsVerificationOpen(true);
  }

  function handleEmailNotConfirmed(email) {
    setVerificationEmail(email);
    setIsVerificationOpen(true);
  }

  return (
    <>
      <LoginLayout>
        <Logo />
        <Heading as="h4">
          {isSigningUp ? "Create your account" : "Log in to your account"}
        </Heading>
        {isSigningUp ? (
          <>
            <SignupForm
              onCancel={() => setIsSigningUp(false)}
              onSignupSuccess={handleSignupSuccess}
            />
            <ModePrompt>
              Already have an account?{" "}
              <ModeToggle type="button" onClick={() => setIsSigningUp(false)}>
                Log in
              </ModeToggle>
            </ModePrompt>
          </>
        ) : (
          <>
            <LoginForm onEmailNotConfirmed={handleEmailNotConfirmed} />
            <ModePrompt>
              Don&apos;t have an account?{" "}
              <ModeToggle type="button" onClick={() => setIsSigningUp(true)}>
                Sign up
              </ModeToggle>
            </ModePrompt>
          </>
        )}
      </LoginLayout>
      <Modal>
        <Modal.Window
          name="verify-email"
          size="small"
          isOpen={isVerificationOpen}
          onClose={() => setIsVerificationOpen(false)}
        >
          <VerifyEmailForm email={verificationEmail} />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default Login;
