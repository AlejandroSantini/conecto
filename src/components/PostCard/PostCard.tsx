import './PostCard.scss';

type PostCardProps = {
    avatar: string;
    name: string;
    title: string;
    content: string;
    createdAt: string;
};

const PostCard = ({ avatar, name, title, content, createdAt }: PostCardProps) => (
    <div className="card">
        <img className="avatar" src={avatar} alt={name} />
        <div className="content">
            <h3>{title}</h3>
            <p>{content}</p>
            <div className="footer">
                <span className="author">By: {name}</span>
                <span className="date">{new Date(createdAt).toLocaleString()}</span>
            </div>
        </div>
    </div>
);

export default PostCard;
