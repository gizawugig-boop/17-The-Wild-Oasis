import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { HiOutlineXMark } from "react-icons/hi2";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 2.4rem 1.6rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: min(28rem, 80vw);
  height: 100vh;
  transform: translateX(${(props) => (props.$isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;
  border-right: none;
  box-shadow: var(--shadow-lg);
  z-index: 1002;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: var(--color-grey-300) transparent;

  @media (min-width: 1025px) {
    position: sticky;
    top: 0;
    transform: none;
    width: auto;
    height: 100%;
    min-height: 0;
    border-right: 1px solid var(--color-grey-100);
    box-shadow: none;
    padding: 3.2rem 2.4rem;
  }
`;

const SidebarTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SidebarToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.6rem;
  height: 3.6rem;
  border: 1px solid var(--color-grey-200);
  border-radius: 50%;
  background-color: transparent;
  color: var(--color-grey-700);

  @media (min-width: 1025px) {
    display: none;
  }
`;

function Sidebar({ isOpen, onClose, onToggleSidebar }) {
  return (
    <StyledSidebar $isOpen={isOpen}>
      <SidebarTop>
        <Logo />
        <SidebarToggleButton
          onClick={onToggleSidebar}
          aria-label="Toggle navigation menu"
        >
          <HiOutlineXMark />
        </SidebarToggleButton>
      </SidebarTop>
      <MainNav onClose={onClose} />
    </StyledSidebar>
  );
}

export default Sidebar;
