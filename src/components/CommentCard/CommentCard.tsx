import type { Comment } from '../../types';
import DeleteButton from '../DeleteButton/DeleteButton';
import './CommentCard.scss';

interface CommentCardProps {
    comment: Comment;
    onDelete: (id: string) => void;
}

const CommentCard = ({ comment, onDelete }: CommentCardProps) => (
    <div className="comment-card">
        <img className="avatar" src={comment.avatar} alt={comment.name} />
        <div className="comment-content">
            <span className="author">{comment.name}</span>
            <span className="date">{new Date(comment.createdAt).toLocaleString()}</span>
            <p>{comment.content}</p>
        </div>
        <DeleteButton onClick={() => onDelete(comment.id)} />
    </div>
);

export default CommentCard;
