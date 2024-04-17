import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import NextImage from 'next/image';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: 'https://th.bing.com/th/id/OIP.vBW_lFzbDKE6m1ohw1F2OgHaFf?rs=1&pid=ImgDetMain',
    title: 'Non Adjusting wrench.',
    // description: 'Professional installation services for plumbing fixtures, water heaters, water filtration systems, electrical wiring, lighting fixtures, outlets, switches, and more.',
      price: '30'
  },
  {
    imageUrl: 'https://th.bing.com/th/id/OIP.3Lu-pghAgpM7vpf_PCqfhAHaEw?rs=1&pid=ImgDetMain',
    title: 'Self Adjusting wrench',
    // description: 'Replacement of old or outdated fixtures with new, efficient models to enhance functionality and aesthetics while improving water conservation.',
      price: '55'
  },
  {
    imageUrl: 'https://th.bing.com/th?id=OIF.DCRXjjOfL%2b8Hd4%2bcTYgr6Q&rs=1&pid=ImgDetMain',
    title: 'Compression sleeve puller',
    // description: 'Installation of traditional tank-style water heaters, tankless water heaters, and heat pump water heaters to provide reliable hot water supply for your home or business.',
      price: '42'
  },
  {
    imageUrl: 'https://images.pexels.com/photos/4792511/pexels-photo-4792511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Screw Driver set',
    // description: 'Detection and repair of hidden leaks in plumbing pipes using advanced leak detection technology and non-invasive methods to minimize disruption to your property.',
      price: '185'
  },
  {
    imageUrl: 'https://th.bing.com/th/id/OIP.MtHO3gcXCMjzL0BSBr3k4QHaE8?rs=1&pid=ImgDetMain',
    title: 'Drain Plunger',
    // description: 'Professional drain cleaning services to remove clogs, blockages, and buildup from drains, sewer lines, and drainpipes using hydro-jetting, snaking, and other specialized equipment.',
      price: '9'
  },
  {
    imageUrl: 'https://th.bing.com/th/id/OIP._7wQk1TedaUH69C5qJz6ngHaFj?rs=1&pid=ImgDetMain',
    title: 'Plumbing Trap',
    // description: 'Installation of sump pumps and backup sump pumps to prevent basement flooding and protect your property from water damage during heavy rainfall or groundwater infiltration.',
    price: '300'
  },
];

export default function PricingPage() {
  return (
    <Page title="Products" description="Our experienced team of contractors deals in a variety of products.">
      <Wrapper>
      <ImageContainer>
        <NextImage src={"https://images.pexels.com/photos/14845870/pexels-photo-14845870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={"IMage"} layout="fill" objectFit="cover" />
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