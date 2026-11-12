<<<<<<< HEAD
import { createContext, useContext, useLayoutEffect, useState } from "react";
=======
import { createContext, useContext, useState } from "react";
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;
<<<<<<< HEAD
  z-index: 1100;
  min-width: 18rem;
  max-width: calc(100vw - 1.6rem);
  max-height: calc(100vh - 1.6rem);
  overflow-y: auto;
=======

>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${({ $position }) => $position.x}px;
  top: ${({ $position }) => $position.y}px;
<<<<<<< HEAD

  @supports (height: 100dvh) {
    max-height: calc(100dvh - 1.6rem);
  }
=======
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
<<<<<<< HEAD
      x: Math.max(8, window.innerWidth - rect.right),
      y: rect.bottom + 8,
      anchorTop: rect.top,
      anchorBottom: rect.bottom,
=======
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}

function List({ id, children }) {
<<<<<<< HEAD
  const { openId, position, close, setPosition } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  useLayoutEffect(() => {
    if (openId !== id || !position || !ref.current) return;

    const menuHeight = ref.current.getBoundingClientRect().height;
    const viewportHeight = document.documentElement.clientHeight;
    const spacing = 8;
    const fitsBelow =
      position.anchorBottom + spacing + menuHeight <= viewportHeight - spacing;
    const nextY = fitsBelow
      ? position.anchorBottom + spacing
      : Math.max(spacing, position.anchorTop - menuHeight - spacing);

    if (Math.abs(position.y - nextY) > 1) {
      setPosition((current) =>
        current ? { ...current, y: nextY } : current,
      );
    }
  }, [id, openId, position, setPosition, ref]);

=======
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
  if (openId !== id) return null;

  return createPortal(
    <StyledList $position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body,
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
