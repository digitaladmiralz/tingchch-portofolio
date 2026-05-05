import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import {
  getPortfolioProjectBySlug,
  getPortfolioProjectSlugs,
} from '@/common/constant/portfolio-projects';
import { PERSON_NAME } from '@/common/constant/personal';
import { getCanonicalSiteUrl } from '@/common/constant/site';
import {
  getProjectAssetFolder,
  getProjectGalleryImages,
} from '@/common/libs/project-gallery';
import { ProjectItemProps } from '@/common/types/projects';
import ProjectDetail from '@/modules/projects/components/ProjectDetail';

interface ProjectsDetailPageProps {
  project: ProjectItemProps;
}

const ProjectsDetailPage: NextPage<ProjectsDetailPageProps> = ({ project }) => {
  const PAGE_TITLE = project?.title;
  const PAGE_DESCRIPTION = project?.description;

  const canonicalUrl = `${getCanonicalSiteUrl()}/projects/${project?.slug}`;

  return (
    <>
      <NextSeo
        title={`${project?.title} – Project – ${PERSON_NAME}`}
        description={project?.description}
        canonical={canonicalUrl}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: project?.updated_at.toString(),
            modifiedTime: project?.updated_at.toString(),
            authors: [PERSON_NAME],
          },
          url: canonicalUrl,
          images: [
            {
              url: project?.image.startsWith('http')
                ? project.image
                : `${getCanonicalSiteUrl()}${project.image}`,
            },
          ],
          siteName: PERSON_NAME,
        }}
      />
      <Container data-aos='fade-up'>
        <BackButton url='/projects' />
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <ProjectDetail {...project} />
      </Container>
    </>
  );
};

export default ProjectsDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPortfolioProjectSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProjectsDetailPageProps> = async ({
  params,
}) => {
  const slug = String(params?.slug);
  const project = getPortfolioProjectBySlug(slug);

  if (!project) {
    return { notFound: true };
  }

  const folder = getProjectAssetFolder(project);
  const gallery = getProjectGalleryImages(folder);
  const projectWithGallery: ProjectItemProps = { ...project, gallery };

  return {
    props: {
      project: JSON.parse(JSON.stringify(projectWithGallery)),
    },
    revalidate: 60,
  };
};
