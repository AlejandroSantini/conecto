import { deletePost } from '../../../service/postsService';
import DeleteButton from '../../../components/DeleteButton/DeleteButton';
import './PostCard.scss';

type PostCardProps = {
    id: string;
    avatar: string;
    name: string;
    title: string;
    content: string;
    createdAt: string;
    onDeleted?: () => void;
};

const PostCard = ({ id, avatar, name, title, content, createdAt, onDeleted }: PostCardProps) => {
    
    const handleDelete = async (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!window.confirm('¿Seguro que quieres eliminar este post?')) return;

        try {
            await deletePost(id);
            
            if (onDeleted) onDeleted();
        } catch (error) {
            alert(error);
            console.error('Error deleting post:', error);
        }
    };

    return (
        <div className="card">
            <div className="header">
                <div className="header-left">
                    <img className="avatar" src={avatar} alt={name} />
                    <div className="author-container">
                        <span className="author">{name}</span>
                        <span className="date">{new Date(createdAt).toLocaleString()}</span>
                    </div>
                </div>
                <DeleteButton onClick={handleDelete} />
            </div>
            <h3 className="title">{title}</h3>
            <div className="content">
                <p>{content}</p>
            </div>
        </div>
    );
};

export default PostCard;
