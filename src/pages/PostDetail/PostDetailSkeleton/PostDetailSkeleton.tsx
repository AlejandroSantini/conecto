import './PostDetailSkeleton.scss';

const PostDetailSkeleton = () => (
  <div className="post-detail-skeleton">
    <div className="post-detail-card-skeleton">
      <div className="header">
        <div className="avatar-skeleton" />
        <div className="info">
          <div className="title-skeleton" />
          <div className="author-skeleton" />
          <div className="date-skeleton" />
        </div>
      </div>
      <div className="content-skeleton" />
    </div>
    <div className="comments-section-skeleton">
      <div className="comment-title-skeleton" />
      {[...Array(3)].map((_, i) => (
        <div className="comment-card-skeleton" key={i}>
          <div className="avatar-skeleton" />
          <div className="comment-content-skeleton">
            <div className="author-skeleton" />
            <div className="date-skeleton" />
            <div className="text-skeleton" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PostDetailSkeleton;
