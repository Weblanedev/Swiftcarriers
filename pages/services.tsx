import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import NextImage from 'next/image';
import { media } from 'utils/media';

const FEATURES = [
  {
    // imageUrl: '/grid-icons/asset-1.svg',
    title: 'Plumbing and Electrical Installations.',
    description:
      'Professional installation services for plumbing fixtures, water heaters, water filtration systems, electrical wiring, lighting fixtures, outlets, switches, and more.',
      price: '130'
  },
  {
    // imageUrl: '/grid-icons/asset-2.svg',
    title: 'Fixture Installation and Replacement.',
    description:
      'Replacement of old or outdated fixtures with new, efficient models to enhance functionality and aesthetics while improving water conservation.',
      price: '300'
  },
  {
    // imageUrl: '/grid-icons/asset-3.svg',
    title: 'Water Heater Installation and Repair',
    description:
      'Installation of traditional tank-style water heaters, tankless water heaters, and heat pump water heaters to provide reliable hot water supply for your home or business.',
      price: '215'
  },
  {
    // imageUrl: '/grid-icons/asset-4.svg',
    title: 'Pipe Leak Detection and Repairs',
    description:
      'Detection and repair of hidden leaks in plumbing pipes using advanced leak detection technology and non-invasive methods to minimize disruption to your property.',
      price: '115'
  },
  {
    // imageUrl: '/grid-icons/asset-5.svg',
    title: 'Drain Cleaning and Unclogging',
    description:
      'Professional drain cleaning services to remove clogs, blockages, and buildup from drains, sewer lines, and drainpipes using hydro-jetting, snaking, and other specialized equipment.',
      price: '342'
  },
  {
    // imageUrl: '/grid-icons/asset-6.svg',
    title: 'Sump Pump Installation and Maintenance',
    description:
      'Installation of sump pumps and backup sump pumps to prevent basement flooding and protect your property from water damage during heavy rainfall or groundwater infiltration.',
  },
];

export default function FeaturesPage() {
  return (
    <Page title="Services" description="In addition to our wide selection of hardware products, we offer professional contracting services to help you bring your vision to life. Our experienced team of contractors specializes in a variety of services.">
      <Wrapper>
      <ImageContainer>
        <NextImage src={"https://images.pexels.com/photos/7616004/pexels-photo-7616004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={"IMage"} layout="fill" objectFit="cover" />
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