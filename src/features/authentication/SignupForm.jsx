import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
<<<<<<< HEAD
import FormRowVertical from "../../ui/FormRowVertical";
=======
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

<<<<<<< HEAD
function SignupForm({ onCancel }) {
=======
function SignupForm() {
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
  const { signup, isPending } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
<<<<<<< HEAD
        onSuccess: () => {
          reset();
          onCancel?.();
        },
=======
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
        onSettled: () => reset(),
      },
    );
  }

<<<<<<< HEAD
  function handleCancel() {
    reset();
    onCancel?.();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Full name" error={errors?.fullName?.message}>
=======
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
        <Input
          type="text"
          id="fullName"
          disabled={isPending}
          {...register("fullName", { required: "This field is required" })}
        />
<<<<<<< HEAD
      </FormRowVertical>

      <FormRowVertical label="Email address" error={errors?.email?.message}>
=======
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
        <Input
          type="email"
          id="email"
          disabled={isPending}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
<<<<<<< HEAD
      </FormRowVertical>

      <FormRowVertical
=======
      </FormRow>

      <FormRow
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isPending}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
<<<<<<< HEAD
      </FormRowVertical>

      <FormRowVertical
        label="Repeat password"
        error={errors?.passwordConfirm?.message}
      >
=======
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isPending}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
<<<<<<< HEAD
      </FormRowVertical>

      <FormRow>
        <Button
          $variation="secondary"
          type="button"
          disabled={isPending}
          onClick={handleCancel}
        >
          {onCancel ? "Back to log in" : "Cancel"}
=======
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          $variation="secondary"
          type="reset"
          disabled={isPending}
          onClick={reset}
        >
          Cancel
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
        </Button>
        <Button disabled={isPending}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
