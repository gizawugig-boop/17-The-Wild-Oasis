import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto minmax(0, 1fr);
  height: 100vh;
  overflow: hidden;
  position: relative;

  @media (min-width: 1025px) {
    grid-template-columns: 26rem minmax(0, 1fr);
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 2.4rem 1.6rem 3.2rem;
  min-width: 0;
  min-height: 0;
  overflow-x: auto;
  overflow-y: auto;

  @media (min-width: 768px) {
    padding: 4rem 4.8rem 6.4rem;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const SidebarOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(17, 24, 39, 0.45);
  z-index: 1000;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;

  @media (min-width: 1025px) {
    display: none;
  }
`;

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <StyledAppLayout>
      <Header onToggleSidebar={() => setIsSidebarOpen((open) => !open)} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onToggleSidebar={() => setIsSidebarOpen((open) => !open)}
      />
      <SidebarOverlay
        $isOpen={isSidebarOpen}
        onClick={() => setIsSidebarOpen(false)}
      />

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
