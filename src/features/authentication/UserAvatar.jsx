import styled from "styled-components";
import { useUser } from "./useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
<<<<<<< HEAD
  width: 3.6rem;
  flex: 0 0 3.6rem;
=======
  width: 4rem;
  width: 3.6rem;
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserAvatar() {
  const { user } = useUser();
<<<<<<< HEAD
  const { fullName, avatar } = user.user_metadata || {};
  const displayName = fullName || user.email || "User";
=======
  const { fullName, avatar } = user.user_metadata;
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad

  return (
    <StyledUserAvatar>
      <Avatar
        src={avatar || "default-user.jpg"}
<<<<<<< HEAD
        alt={`Avatar of ${displayName}`}
      />
      <span>{displayName}</span>
=======
        alt={`Avatar of ${fullName}`}
      />
      <span>{fullName}</span>
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
    </StyledUserAvatar>
  );
}

export default UserAvatar;
