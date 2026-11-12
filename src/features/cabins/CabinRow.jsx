import styled from "styled-components";

import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { formatCurrency } from "../../utils/helpers";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

<<<<<<< HEAD
const CabinImageLink = styled(Link)`
  display: block;
  width: fit-content;
  border-radius: var(--border-radius-sm);

  &:focus-visible {
    outline: 2px solid var(--color-brand-600);
    outline-offset: 3px;
  }
`;

const CabinTableRow = styled(Table.Row)`
  @media (max-width: 768px) {
    position: relative;

    & > :last-child {
      position: absolute;
      top: 0.8rem;
      right: 1.6rem;
      z-index: 1;
    }

    & > :last-child button {
      transform: none;
    }
  }
`;

=======
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
<<<<<<< HEAD
    <CabinTableRow>
      <CabinImageLink
        to={`/cabins/${cabinId}`}
        aria-label={`View ${name} cabin details`}
      >
        <Img src={image} alt={name} />
      </CabinImageLink>
=======
    <Table.Row>
      <Img src={image} />
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />

            <Menus.List id={cabinId}>
              <Menus.Button
                icon={<HiSquare2Stack />}
                onClick={handleDuplicate}
                disabled={isCreating}
              >
                Duplicate
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabins"
                disabled={isDeleting}
                onConfirm={() => deleteCabin(cabinId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
<<<<<<< HEAD
    </CabinTableRow>
=======
    </Table.Row>
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
  );
}

export default CabinRow;
