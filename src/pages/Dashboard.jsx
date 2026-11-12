import styled from "styled-components";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DashboardFilter from "../features/dashboard/DashboardFilter";

const DashboardHeader = styled(Row)`
  min-width: 0;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
  }
`;

function Dashboard() {
  return (
    <>
      <DashboardHeader $type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </DashboardHeader>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
