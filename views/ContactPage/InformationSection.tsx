import styled from 'styled-components';

export default function InformationSection() {
  return (
    <Wrapper>
      <h3>Contact Info</h3>
      <p>
        <span>Email:</span> operations@swiftcarriers.ng
      </p>
      <p>
        <span>Phone:</span> +234-908-560-3575
      </p>
      <p>
        <span>Location:</span> 5, Odebiyi Street, Off Haruna Road, Ogba, Lagos State, Nigeria

      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    margin-top: 20px;
    color: rgba(var(--text), 0.7);
  }

  span {
    opacity: 1;
    color: rgba(var(--text), 1);
  }
`;
