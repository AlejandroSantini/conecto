import CommentForm from './AddCommentForm/AddCommentForm';
import CommentCard from './CommentCard/CommentCard';
import CommentsSkeleton from '../../../components/Skeletons/CommentsSkeleton/CommentsSkeleton';
import type { Comment } from '../../../types/posts';
import './CommentsSection.scss';

interface CommentsSectionProps {
    postId: string;
    comments: Comment[];
    onCommented: () => void;
    onDelete: (commentId: string) => void;
    loading: boolean;
}

const CommentsSection = ({
    postId,
    comments,
    onCommented,
    onDelete,
    loading,
}: CommentsSectionProps) => (
    <div className="comments-section">
        <h3>Comentarios</h3>
        <CommentForm postId={postId} onCommented={onCommented} loading={loading} />
        <div className="comments-list">
            {loading ? (
                <CommentsSkeleton />
            ) : comments?.length === 0 ? (
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
