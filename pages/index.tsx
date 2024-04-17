import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="https://images.pexels.com/photos/9389356/pexels-photo-9389356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Our Mission" overTitle="">
            <p>
            At Haempstad Solutions Ltd, our mission is to empower our customers with the tools, materials, and expertise they need to turn their dreams into reality. We are committed to providing top-quality products, exceptional service, and expert guidance to help homeowners and contractors alike achieve their home improvement goals with confidence and ease.
            </p>
          </BasicSection>
          <BasicSection imageUrl="https://images.pexels.com/photos/8113779/pexels-photo-8113779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Our Vision" overTitle="" reversed>
            <p>
            Our vision at Haempstad Solutions Ltd is to be the premier destination for hardware and contracting services, known for our unwavering commitment to quality, innovation, and customer satisfaction. We strive to be a trusted partner in every step of our customers home improvement journey, inspiring creativity, fostering collaboration, and building lasting relationships within our community.
            </p>
           
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
