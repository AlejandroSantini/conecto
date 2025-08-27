import DeleteButton from '../../../../components/DeleteButton/DeleteButton';
import CommentButton from '../../../../components/CommentButton/CommentButton';
import type { Comment } from '../../../../types/posts';
import './CommentCard.scss';

interface CommentCardProps {
    comment: Comment;
    onDelete: (id: string) => void;
    onReply?: (id: string) => void;
}

const CommentCard = ({ comment, onDelete, onReply }: CommentCardProps) => (
    <div className="comment-card">
        <div className="header">
            <div className="header-left">
                <img className="avatar" src={comment.avatar} alt={comment.name} />
                <div className="author-container">
                    <span className="author">{comment.name}</span>
                    <span className="date">{new Date(comment.createdAt).toLocaleString()}</span>
                </div>
            </div>
            <DeleteButton onClick={() => onDelete(comment.id)} />
        </div>
        <div className="comment-content">
            <p>{comment.content}</p>
        </div>
        <CommentButton
            onClick={() => onReply && onReply(comment.id)}
        />
    </div>
);

export default CommentCard;
