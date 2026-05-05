import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import { SITE_DISPLAY_NAME } from '@/common/constant/personal';
import Home from '@/modules/home';

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo title={SITE_DISPLAY_NAME} />
      <Container data-aos='fade-up'>
        <Home />
      </Container>
    </>
  );
};

export default HomePage;
