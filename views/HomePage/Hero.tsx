import NextLink from 'next/link';
import Image from "next/image";
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <HeroWrapper>
      <Contents>
        <Heading>Welcome to Swiftcarriers Haulage Services Limited</Heading>
        <Description>
        Swiftcarriers Haulage Services Limited is a leading logistics company dedicated to providing efficient and reliable transportation solutions. With years of experience in the industry, we have built a reputation for excellence, ensuring timely delivery and the safe handling of goods. Our commitment to customer satisfaction and continuous improvement has positioned us as a trusted partner in the logistics sector. </Description>
        <CustomButtonGroup>
          <Button onClick={() => setIsModalOpened(true)}>
            Subscribe to the newsletter <span>&rarr;</span>
          </Button>
          <NextLink href="/services" passHref>
            <Button transparent>
            Services <span>&rarr;</span>
            </Button>
          </NextLink>
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
      <Image
          src={"https://images.pexels.com/photos/2449454/pexels-photo-2449454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          width={550}
          height={550}
          alt="features"
          className="w-full rounded-xl"
        />
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 6.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
