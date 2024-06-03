import { useEffect, useState } from 'react';
import { StatsButtons } from 'shared/features/Article/ArticleStatsButtons/StatsButtons';
import type { Article as ArticleType } from '../../../../shared/types/article';
import styles from './post.module.css';

type ArticleProps = {
  id: number;
};

export const Article = ({ id }: ArticleProps) => {
  const [article, setArticle] = useState<ArticleType | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://0df6c884deaa53e2.mokky.dev/events/${id}`)
      .then(res => res.json())
      .then((articlesData: ArticleType) => {
        setArticle(articlesData);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [id]);

  if (!article || isLoading) return <>Loading...</>;

  return (
    <div className={styles.postCard}>
      <div className={styles.centeredContentWrapper}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span>{article.section}</span>
            <div className={styles.authorInfo}>
              <img src={article.authorAvatar} alt={`${article.authorName}'s Avatar`} className={styles.avatar} />
              <span>{article.authorName}</span>
            </div>
            <span>{article.publicationDate}</span>
          </div>
          {/* <div className={styles.headerRight}>
            <IconButton>...</IconButton>
          </div> */}
        </div>

        <h2>{article.title}</h2>
      </div>

      <div className={styles.coverImage}>
        <img src={article.coverImage} alt="Cover" />
      </div>

      <div className={styles.centeredContentWrapper}>{article.content}</div>
      <div className={styles.centeredContentWrapper}>
        <StatsButtons likes={article.likes} />
      </div>
    </div>
  );
};
