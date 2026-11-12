<<<<<<< HEAD
import styled from "styled-components";
=======
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import Heading from "../ui/Heading";
import Menus from "../ui/Menus";
import Row from "../ui/Row";

<<<<<<< HEAD
const CabinsHeader = styled(Row)`
  min-width: 0;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1.6rem;

    & h1 {
      font-size: 2.4rem;
    }
  }
`;

function Cabins() {
  return (
    <Menus>
      <CabinsHeader $type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </CabinsHeader>
=======
function Cabins() {
  return (
    <Menus>
      <Row $type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </Menus>
  );
}

export default Cabins;
