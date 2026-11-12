import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address.",
      );
    },
    onError: (err) => {
      toast.error(err.message || "Could not create account");
    },
  });

  return { signup, isPending };
}
