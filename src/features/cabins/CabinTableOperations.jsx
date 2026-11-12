<<<<<<< HEAD
import styled from "styled-components";
=======
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

<<<<<<< HEAD
const CabinOperations = styled(TableOperations)`
  min-width: 0;

  @media (max-width: 640px) {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;

    & > div,
    & > select {
      width: 100%;
      min-width: 0;
    }

    & > div {
      display: flex;
    }

    & > div > button {
      flex: 1;
      white-space: nowrap;
    }
  }

  @media (max-width: 380px) {
    & > div {
      flex-direction: column;
      align-items: stretch;
    }

    & > div > button {
      width: 100%;
      text-align: left;
    }
  }
`;

function CabinTableOperations() {
  return (
    <CabinOperations>
=======
function CabinTableOperations() {
  return (
    <TableOperations>
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price (low first)" },
          { value: "regularPrice-desc", label: "Sort by price (high first)" },
          { value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
          { value: "maxCapacity-desc", label: "Sort by capacity (high first)" },
        ]}
      />
<<<<<<< HEAD
    </CabinOperations>
=======
    </TableOperations>
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
  );
}

export default CabinTableOperations;
