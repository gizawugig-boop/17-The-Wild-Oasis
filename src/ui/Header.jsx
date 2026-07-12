import styled from "styled-components";
import { HiOutlineBars3 } from "react-icons/hi2";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2.4rem;

  @media (max-width: 1068px) {
    padding: 1.2rem 1.6rem;
    justify-content: space-between;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border: 1px solid var(--color-grey-200);
  border-radius: 50%;
  background-color: transparent;

  @media (max-width: 1024px) {
    display: inline-flex;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  margin-left: auto;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

function Header({ onToggleSidebar }) {
  return (
    <StyledHeader>
      <MobileMenuButton
        onClick={onToggleSidebar}
        aria-label="Toggle navigation menu"
      >
        <HiOutlineBars3 />
      </MobileMenuButton>

      <HeaderActions>
        <UserAvatar />
        <HeaderMenu />
      </HeaderActions>
    </StyledHeader>
  );
}

export default Header;
