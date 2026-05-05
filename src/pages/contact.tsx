import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { PERSON_NAME } from '@/common/constant/personal';
import Contact from '@/modules/contact';

const PAGE_TITLE = 'Contact';
const PAGE_DESCRIPTION =
  'Fully remote from Taipei — architectural PM, BIM/3D support, and collaboration across time zones.';

const ContactPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} – ${PERSON_NAME}`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Contact />
      </Container>
    </>
  );
};

export default ContactPage;
