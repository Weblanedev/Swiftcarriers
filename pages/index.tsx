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
          name="Swiftcarriers Haulage Services Limited"
          content="Swiftcarriers Haulage Services Limited is a leading logistics company dedicated to providing efficient and reliable transportation solutions. With years of experience in the industry, we have built a reputation for excellence, ensuring timely delivery and the safe handling of goods. Our commitment to customer satisfaction and continuous improvement has positioned us as a trusted partner in the logistics sector."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <BasicSection imageUrl="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Our Mission" overTitle="">
            <p>
            Our mission is to deliver superior logistics solutions that exceed our customers{"'"} expectations. We strive to provide the highest level of service through innovation, technology, and a dedicated team of professionals. Our goal is to enhance the efficiency and reliability of our clients{"'"} supply chains, ensuring their success and growth.
            </p>
          </BasicSection>
          <BasicSection imageUrl="https://images.pexels.com/photos/4483774/pexels-photo-4483774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Our Vision" overTitle="" reversed>
            <p>
            Our vision is to be the foremost logistics provider, recognized for our unwavering commitment to excellence, sustainability, and customer-centric solutions. We aim to lead the industry in innovation and operational efficiency, setting new standards for logistics services worldwide.
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
