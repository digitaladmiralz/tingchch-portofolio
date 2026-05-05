import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

interface GiscusComment {
  isEnableReaction?: boolean;
}

const GISCUS_REPO = process.env.NEXT_PUBLIC_GISCUS_REPO;
const GISCUS_REPO_ID = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
const GISCUS_CATEGORY = process.env.NEXT_PUBLIC_GISCUS_CATEGORY ?? 'General';
const GISCUS_CATEGORY_ID = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

const GiscusComment = ({ isEnableReaction = false }: GiscusComment) => {
  const { theme } = useTheme();

  if (!GISCUS_REPO || !GISCUS_REPO_ID || !GISCUS_CATEGORY_ID) {
    return null;
  }

  return (
    <div className='mb-2 mt-5'>
      <Giscus
        repo={GISCUS_REPO as `${string}/${string}`}
        repoId={GISCUS_REPO_ID}
        category={GISCUS_CATEGORY}
        categoryId={GISCUS_CATEGORY_ID}
        mapping='pathname'
        reactionsEnabled={isEnableReaction ? '1' : '0'}
        emitMetadata='1'
        inputPosition='top'
        theme={theme === 'dark' ? 'transparent_dark' : 'light'}
        lang='en'
        loading='lazy'
      />
    </div>
  );
};

export default GiscusComment;
