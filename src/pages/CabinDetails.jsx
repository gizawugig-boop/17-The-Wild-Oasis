import { Link, useNavigate, useParams } from "react-router-dom";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import styled from "styled-components";
import ConfirmDelete from "../ui/ConfirmDelete";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import { useCreateCabin } from "../features/cabins/useCreateCabin";
import { useDeleteCabin } from "../features/cabins/useDeleteCabin";
import { useCabins } from "../features/cabins/useCabins";
import ButtonText from "../ui/ButtonText";
import Heading from "../ui/Heading";
import Menus from "../ui/Menus";
import Modal from "../ui/Modal";
import Spinner from "../ui/Spinner";
import { formatCurrency } from "../utils/helpers";

const Page = styled.div`
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
`;

const BackLink = styled(ButtonText)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
`;

const CabinActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  margin-top: 1.6rem;
  padding: 1.2rem 1.6rem;
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-0);

  @media (max-width: 480px) {
    padding: 1rem 1.2rem;
  }
`;

const DetailsMenu = styled.div`
  flex: 0 0 auto;

  & button {
    transform: none;
  }
`;

const CabinCard = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(28rem, 0.85fr);
  overflow: hidden;
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);

  @media (max-width: 720px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const CabinImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  min-height: 42rem;
  object-fit: cover;

  @media (max-width: 720px) {
    height: auto;
    min-height: 0;
    max-height: 42rem;
    aspect-ratio: 4 / 3;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 3.2rem;

  @media (max-width: 480px) {
    gap: 1.8rem;
    padding: 2rem;
  }
`;

const Description = styled.p`
  color: var(--color-grey-600);
  line-height: 1.7;
  overflow-wrap: anywhere;
`;

const DetailsList = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.6rem;
  margin-top: auto;
`;

const Detail = styled.div`
  min-width: 0;
  padding: 1.4rem;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-50);
`;

const Label = styled.dt`
  margin-bottom: 0.4rem;
  color: var(--color-grey-500);
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

const Value = styled.dd`
  font-size: 1.6rem;
  font-weight: 600;
  overflow-wrap: anywhere;
`;

const Message = styled.p`
  padding: 2.4rem;
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-0);
`;

function CabinDetails() {
  const { cabinId } = useParams();
  const { cabins, isPending, error } = useCabins();
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();
  const navigate = useNavigate();

  if (isPending) return <Spinner />;

  if (error) {
    return (
      <Page>
        <BackLink as={Link} to="/cabins">
          &larr; Back to cabins
        </BackLink>
        <Message>Could not load this cabin. Please try again.</Message>
      </Page>
    );
  }

  const cabin = cabins?.find((item) => String(item.id) === cabinId);

  if (!cabin) {
    return (
      <Page>
        <BackLink as={Link} to="/cabins">
          &larr; Back to cabins
        </BackLink>
        <Message>This cabin could not be found.</Message>
      </Page>
    );
  }

  return (
    <Menus>
      <Page>
        <CabinCard>
          <CabinImage src={cabin.image} alt={cabin.name} />
          <Details>
            <Heading as="h1">{cabin.name}</Heading>
            <Description>
              {cabin.description ||
                "No description is available for this cabin."}
            </Description>
            <DetailsList>
              <Detail>
                <Label>Capacity</Label>
                <Value>{cabin.maxCapacity} guests</Value>
              </Detail>
              <Detail>
                <Label>Price per night</Label>
                <Value>{formatCurrency(cabin.regularPrice)}</Value>
              </Detail>
              <Detail>
                <Label>Discount</Label>
                <Value>
                  {cabin.discount ? formatCurrency(cabin.discount) : "None"}
                </Value>
              </Detail>
            </DetailsList>
          </Details>
        </CabinCard>

        <CabinActions>
          <BackLink as={Link} to="/cabins">
            &larr; Back to cabins
          </BackLink>
          <DetailsMenu>
            <Modal>
              <Menus.Menu>
                <Menus.Toggle id={`cabin-${cabin.id}`} />
                <Menus.List id={`cabin-${cabin.id}`}>
                  <Menus.Button
                    icon={<HiSquare2Stack />}
                    onClick={() =>
                      createCabin({
                        name: `Copy of ${cabin.name}`,
                        maxCapacity: cabin.maxCapacity,
                        regularPrice: cabin.regularPrice,
                        discount: cabin.discount,
                        image: cabin.image,
                        description: cabin.description,
                      })
                    }
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
                    resourceName="cabin"
                    disabled={isDeleting}
                    onConfirm={() =>
                      deleteCabin(cabin.id, {
                        onSuccess: () =>
                          navigate("/cabins", { replace: true }),
                      })
                    }
                  />
                </Modal.Window>
              </Menus.Menu>
            </Modal>
          </DetailsMenu>
        </CabinActions>
      </Page>
    </Menus>
  );
}

export default CabinDetails;
