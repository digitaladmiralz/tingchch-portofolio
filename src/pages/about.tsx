import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { PERSON_NAME } from '@/common/constant/personal';
import About from '@/modules/about';

const PAGE_TITLE = 'About';
const PAGE_DESCRIPTION =
  'Background in U.S. architectural delivery, fully remote work from Taipei, and how I collaborate on BIM and 3D.';

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} – ${PERSON_NAME}`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <About />
      </Container>
    </>
  );
};

export default AboutPage;
