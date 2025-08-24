import { deletePost } from '../../service/postsService';
import DeleteButton from '../DeleteButton/DeleteButton';
import './PostCard.scss';

type PostCardProps = {
    id: string;
    avatar: string;
    name: string;
    title: string;
    content: string;
    createdAt: string;
};
const handleDeletePost = async (id: string) => {
    if (!window.confirm('¿Seguro que quieres eliminar este post?')) return;
    try {
        await deletePost(id);
    } catch (error) {
        alert(error);
        console.error('Error deleting post:', error);
    }
};

const PostCard = ({ id, avatar, name, title, content, createdAt }: PostCardProps) => (
    <div className="card">
        <div className="header">
            <img className="avatar" src={avatar} alt={name} />
            <h3>{title}</h3>
            <DeleteButton onClick={() => handleDeletePost(id)} />
        </div>
        <div className="content">
            <p>{content}</p>
            <div className="footer">
                <span className="author">By: {name}</span>
                <span className="date">{new Date(createdAt).toLocaleString()}</span>
            </div>
        </div>
    </div>
);

export default PostCard;
