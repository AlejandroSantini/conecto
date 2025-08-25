import './CommentsSkeleton.scss';

const CommentsSkeleton = () => (
    <div className="comments-section-skeleton">
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
);

export default CommentsSkeleton;
