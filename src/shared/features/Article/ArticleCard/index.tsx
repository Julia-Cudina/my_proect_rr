import avatar from 'assets/images/avatar.jpg';
import coverImg from 'assets/images/cover4.webp';
import { Article } from '../../../types/article';
import { StatsButtons } from '../ArticleStatsButtons/StatsButtons';
import s from './post.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from 'router/routes';

type PostCardProps = {
  postData: Article;
  // one: string;
  // two: string;
};

export const PostCard = (props: PostCardProps) => {
  const { postData } = props;

  return (
    <div className={s.postCard}>
      <div className={s.header}>
        <div className={s.headerLeft}>
          <span>{postData.section}</span>
          <div className={s.authorInfo}>
            <img src={avatar} alt="avatar" className={s.avatar} />
            <span>{postData.authorName}</span>
          </div>
          <span>{postData.publicationDate}</span>
        </div>
        <div className={s.headerRight}>
          <button className={s.moreOptionsButton}>Подписаться</button>
        </div>
      </div>

      <Link to={`${ROUTES.ARTICLE}/${postData.id}`}>
      <h2>{postData.title}</h2>
      </Link>

      <div className={s.coverImage}>
        <img src={coverImg} alt="cover" />
      </div>

      <StatsButtons likes={postData.likes} />
    </div>
  );
};