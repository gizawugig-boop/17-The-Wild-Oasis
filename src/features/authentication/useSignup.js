<<<<<<< HEAD
import { useMutation, useQueryClient } from "@tanstack/react-query";
=======
import { useMutation } from "@tanstack/react-query";
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
<<<<<<< HEAD
  const queryClient = useQueryClient();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
=======
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address.",
      );
    },
<<<<<<< HEAD
    onError: (err) => {
      toast.error(err.message || "Could not create account");
    },
=======
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
  });

  return { signup, isPending };
}
