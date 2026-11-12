import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
<<<<<<< HEAD
      if (err.message?.toLowerCase().includes("email not confirmed")) {
        toast.error(
          "Please confirm your email address using the verification link we sent before logging in.",
        );
        return;
      }

=======
      console.log("ERROR", err);
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isPending };
}
