import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";
import { useVerifyEmail } from "./useVerifyEmail";

const Description = styled.p`
  margin: 0.8rem 0 2.4rem;
  color: var(--color-grey-600);
  text-align: center;
`;

function VerifyEmailForm({ email = "", onCloseModal }) {
  const { verifyEmail, isPending } = useVerifyEmail();
  const { register, handleSubmit, setValue, formState } = useForm({
    defaultValues: { email, token: "" },
  });

  useEffect(() => {
    if (email) setValue("email", email);
  }, [email, setValue]);

  function onSubmit({ email: submittedEmail, token }) {
    verifyEmail(
      { email: submittedEmail.trim(), token: token.trim() },
      { onSuccess: onCloseModal },
    );
  }

  return (
    <>
      <Heading as="h2">Verify your email</Heading>
      <Description>
        Enter the verification code we sent to your email address.
      </Description>
      <Form $type="modal" onSubmit={handleSubmit(onSubmit)}>
        <FormRowVertical label="Email address" error={formState.errors.email?.message}>
          <Input
            type="email"
            autoComplete="email"
            disabled={isPending}
            {...register("email", {
              required: "Enter the email address you signed up with",
            })}
          />
        </FormRowVertical>
        <FormRowVertical label="Verification code" error={formState.errors.token?.message}>
          <Input
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={10}
            disabled={isPending}
            {...register("token", {
              required: "Enter the verification code",
              pattern: {
                value: /^\d{6,10}$/,
                message: "Enter the numeric code from your email",
              },
            })}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button size="large" disabled={isPending}>
            {isPending ? <SpinnerMini /> : "Verify email"}
          </Button>
        </FormRowVertical>
      </Form>
    </>
  );
}

export default VerifyEmailForm;
