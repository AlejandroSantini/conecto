import CommentForm from '../../../components/AddCommentForm/AddCommentForm';
import CommentCard from '../../../components/CommentCard/CommentCard';
import type { Comment } from '../../../types';
import './CommentsSection.scss';

interface CommentsSectionProps {
    postId: string;
    comments: Comment[];
    onCommented: () => void;
    onDelete: (commentId: string) => void;
}

const CommentsSection = ({ postId, comments, onCommented, onDelete }: CommentsSectionProps) => (
    <div className="comments-section">
        <h3>Comentarios</h3>
        <CommentForm postId={postId} onCommented={onCommented} />
        <div className="comments-list">
            {comments.length === 0 ? (
                <p className="no-comments">No hay comentarios aún.</p>
            ) : (
                comments.map((comment) => (
                    <CommentCard key={comment.id} comment={comment} onDelete={onDelete} />
                ))
            )}
        </div>
    </div>
);

export default CommentsSection;
