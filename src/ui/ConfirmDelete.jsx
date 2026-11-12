import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
<<<<<<< HEAD
  width: min(40rem, calc(100vw - 8rem));
=======
  width: 40rem;
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
<<<<<<< HEAD

  @media (max-width: 480px) {
    width: min(40rem, calc(100vw - 5.6rem));

    & div {
      flex-wrap: wrap;
    }
  }
=======
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>
      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
