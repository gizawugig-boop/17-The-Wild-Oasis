import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useLogin({ onEmailNotConfirmed } = {}) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err, variables) => {
      if (err.message?.toLowerCase().includes("email not confirmed")) {
        onEmailNotConfirmed?.(variables.email);
        toast.error("Enter the code sent to your email to verify your account.");
        return;
      }

      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isPending };
}
