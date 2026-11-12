<<<<<<< HEAD
import styled from "styled-components";
=======
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DashboardFilter from "../features/dashboard/DashboardFilter";

<<<<<<< HEAD
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
=======
function Dashboard() {
  return (
    <>
      <Row $type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
