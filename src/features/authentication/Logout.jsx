import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isPending } = useLogout();

  return (
<<<<<<< HEAD
    <ButtonIcon
      type="button"
      aria-label="Log out"
      title="Log out"
      disabled={isPending}
      onClick={logout}
    >
=======
    <ButtonIcon disabled={isPending} onClick={logout}>
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
      {!isPending ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
