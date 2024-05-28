import LikeIcon from 'assets/icons/heart.svg';
import ViewIcon from 'assets/icons/eye.svg';
import CommentIcon from 'assets/icons/comment.svg'
import BookmarkIcon from 'assets/icons/bookmark.svg'
import { useState } from 'react';
import { IconButton } from '../../../components/IconButton';
import s from './post.module.css';

type StatsButtonProps = {
  likes: number;
};

export const StatsButtons = (props: StatsButtonProps) => {
  const [likes, setLikes,] = useState(props.likes);
  const [views, setViews] = useState(props.likes);
  const [comments, setСomments] = useState(props.likes);
  const [bookmarks, setBookmarks] = useState(props.likes);


  const onLikeClick = () => {
    setLikes(likes + 1); 
  };

  const onClick = () => {
    setViews(views + 1); 
  };

  const onCommentClick = () => {
    setСomments(comments + 1); 
  };

  const onBookmarkClick = () => {
    setBookmarks(bookmarks + 1); 
  };

  return (
    <div className={s.stats}>
      <IconButton icon={<ViewIcon color="black"/>} onClick={onClick}>
        {views}</IconButton>
      <IconButton icon={<LikeIcon color="red" />} onClick={onLikeClick}>
        {likes}
      </IconButton>
      <IconButton icon={<CommentIcon color="black"/>} onClick={onCommentClick}>
        {comments}
        </IconButton>
      <IconButton icon={<BookmarkIcon color="black"/>} onClick={onBookmarkClick}>
        {bookmarks}
        </IconButton>
    </div>
  );
};
