import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
      toast.success("Account created successfully.");
    },
    onError: (err) => {
      if (err.message?.toLowerCase().includes("rate limit exceeded")) {
        toast.error(
          "Too many signup emails have been sent. Please wait before trying again, or contact the administrator to configure email delivery.",
          { duration: 7000 },
        );
        return;
      }

      toast.error(err.message || "Could not create account");
    },
  });

  return { signup, isPending };
}
