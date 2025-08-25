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
        </div>
    </div>
);

export default PostDetailSkeleton;
