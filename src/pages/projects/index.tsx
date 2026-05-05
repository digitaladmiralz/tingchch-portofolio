import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { getPortfolioProjects } from '@/common/constant/portfolio-projects';
import { PERSON_NAME } from '@/common/constant/personal';
import {
  getProjectAssetFolder,
  getProjectGalleryImages,
} from '@/common/libs/project-gallery';
import { ProjectItemProps } from '@/common/types/projects';
import Projects from '@/modules/projects';

interface ProjectsPageProps {
  projects: ProjectItemProps[];
}

const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION =
  'BIM, visualization, and design documentation—renderings, models, drawings, and presentation work.';

const ProjectsPage: NextPage<ProjectsPageProps> = ({ projects }) => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMore = () => setVisibleProjects((prev) => prev + 2);
  const hasMore = visibleProjects < projects.length;

  return (
    <>
      <NextSeo title={`${PAGE_TITLE} – ${PERSON_NAME}`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects
          projects={projects.slice(0, visibleProjects)}
          loadMore={loadMore}
          hasMore={hasMore}
        />
      </Container>
    </>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps<ProjectsPageProps> = async () => {
  const projects = getPortfolioProjects()
    .filter((p) => p.is_show)
    .map((p) => {
      const folder = getProjectAssetFolder(p);
      const gallery = getProjectGalleryImages(folder);
      const thumbnail = gallery.length > 0 ? gallery[0] : p.image;
      return { ...p, image: thumbnail };
    });

  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)),
    },
    revalidate: 60,
  };
};
