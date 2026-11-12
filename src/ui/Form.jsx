import styled, { css } from "styled-components";

const Form = styled.form`
  ${({ $type = "regular" }) =>
    $type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
<<<<<<< HEAD

      @media (max-width: 480px) {
        padding: 1.6rem;
      }
=======
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
    `}

  ${({ $type }) =>
    $type === "modal" &&
    css`
<<<<<<< HEAD
      width: 100%;
      max-width: 80rem;
=======
      width: 80rem;
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
    `}

  overflow: hidden;
  font-size: 1.4rem;
`;

export default Form;
