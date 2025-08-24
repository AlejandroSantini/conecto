import './PostsSkeleton.scss';

const PostsSkeleton = () => {
    return (
        <div className="posts-grid">
            {[...Array(3)].map((_, i) => (
                <div className="card skeleton" key={i}>
                    <div className="avatar-skeleton" />
                    <div className="content-skeleton">
                        <div className="title-skeleton" />
                        <div className="text-skeleton" />
                        <div className="text-skeleton short" />
                        <div className="footer-skeleton" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostsSkeleton;
