import styled from "styled-components";
import { Link } from "react-router-dom";

import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem minmax(0, 1fr) 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }

  @media (max-width: 640px) {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.8rem;
  }
`;

const GuestDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  min-width: 0;

  @media (max-width: 640px) {
    grid-column: 1 / -1;
    grid-row: 2;
  }
`;

const Guest = styled.div`
  font-weight: 500;
  min-width: 0;
  overflow-wrap: anywhere;
`;

const Status = styled.div`
  @media (max-width: 640px) {
    grid-column: 1;
  }
`;

const Nights = styled.div`
  @media (max-width: 640px) {
    grid-column: 1;
    grid-row: 3;
  }
`;

const Action = styled.div`
  @media (max-width: 640px) {
    grid-column: 2;
    grid-row: 1 / span 3;
    justify-self: end;
  }
`;

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <StyledTodayItem>
      <Status>
        {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
        {status === "checked-in" && <Tag type="blue">Departing</Tag>}
      </Status>
      <GuestDetails>
        <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
        <Guest>{guests.fullName}</Guest>
      </GuestDetails>
      <Nights>{numNights} nights</Nights>
      <Action>
        {status === "unconfirmed" && (
          <Button
            $size="small"
            $variation="primary"
            as={Link}
            to={`/checkin/${id}`}
          >
            Check in
          </Button>
        )}
        {status === "checked-in" && <CheckoutButton bookingId={id} />}
      </Action>
    </StyledTodayItem>
  );
}

export default TodayItem;
