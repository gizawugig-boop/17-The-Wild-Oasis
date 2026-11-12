import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { verifySignupOtp } from "../../services/apiAuth";

export function useVerifyEmail() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: verifyEmail, isPending } = useMutation({
    mutationFn: verifySignupOtp,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["user"], user);
      toast.success("Email verified. You are now signed in.");
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      toast.error(error.message || "Could not verify your email.");
    },
  });

  return { verifyEmail, isPending };
}
