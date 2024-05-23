import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import NextImage from 'next/image';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: 'https://images.pexels.com/photos/7843949/pexels-photo-7843949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Express Delivery',
    description:
      'Fast and reliable express delivery services for urgent shipments, ensuring quick turnaround times.',
      price: '150'
  },
  {
    imageUrl: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Freight Transportation',
    description:
      'Comprehensive freight services, including road, rail, air, and sea transportation, to ensure your goods reach their destination promptly and safely.',
      price: '500'
  },
  {
    imageUrl: 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Warehousing and Distribution',
    description:
      'State-of-the-art warehousing facilities and efficient distribution services to streamline your supply chain.',
      price: '200'
  },
  {
    imageUrl: 'https://images.pexels.com/photos/3057960/pexels-photo-3057960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Customs Brokerage',
    description:
      'Expert customs brokerage services to facilitate smooth and hassle-free international shipping.',
      price: '300'
  },
  {
    imageUrl: 'https://images.pexels.com/photos/5025669/pexels-photo-5025669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Supply Chain Solutions',
    description:
      'End-to-end supply chain management solutions designed to optimize efficiency and reduce costs.',
      price: '1000'
  },
  {
    imageUrl: 'https://images.pexels.com/photos/6169638/pexels-photo-6169638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'E-commerce Logistics',
    description:
      'Tailored logistics solutions for e-commerce businesses, including order fulfillment, inventory management, and last-mile delivery.',
      price: '250'
  },
];


export default function FeaturesPage() {
  return (
    <Page title="Services" description="In addition to our wide selection of hardware products, we offer professional contracting services to help you bring your vision to life. Our experienced team of contractors specializes in a variety of services.">
      <Wrapper>
      <ImageContainer>
        <NextImage src={"https://images.pexels.com/photos/6169002/pexels-photo-6169002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={"IMage"} layout="fill" objectFit="cover" />
      </ImageContainer>
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
const ImageContainer = styled.div`
  flex: 1;

  position: relative;
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;