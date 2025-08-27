import CommentForm from './AddCommentForm/AddCommentForm';
import CommentCard from './CommentCard/CommentCard';
import CommentsSkeleton from '../../../components/Skeletons/CommentsSkeleton/CommentsSkeleton';
import { useState } from 'react';
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
}: CommentsSectionProps) => {
    const [replyTo, setReplyTo] = useState<string | null>(null);

    const isRoot = (c: Comment) => !c.parentId;

    const renderComments = (parentId: string | null, level = 0) => {
        const items = comments.filter((c) => c.parentId === parentId);
        return items.map((comment) => (
            <div key={comment.id} style={{ marginLeft: level * 16 }}>
                <CommentCard comment={comment} onDelete={onDelete} onReply={() => setReplyTo(replyTo === comment.id ? null : comment.id)} />
                {replyTo === comment.id && (
                        <CommentForm
                            postId={postId}
                            parentId={comment.id}
                            onCommented={() => {
                                setReplyTo(null);
                                onCommented();
                            }}
                            loading={loading}
                        />
                )}
                {renderComments(comment.id, level + 1)}
            </div>
        ));
    };

    return (
        <div className="comments-section">
            <h3>Comentarios</h3>
            <CommentForm postId={postId} onCommented={onCommented} loading={loading} />
            <div className="comments-list">
                {loading ? (
                    <CommentsSkeleton />
                ) : comments?.length === 0 ? (
                    <p className="no-comments">No hay comentarios aún.</p>
                ) : (
                    comments.filter(isRoot).map((comment) => (
                        <div key={comment.id}>
                            <CommentCard comment={comment} onDelete={onDelete} onReply={() => setReplyTo(replyTo === comment.id ? null : comment.id)} />
                            {replyTo === comment.id && (
                                <div className="reply-form-container">
                                    <CommentForm
                                        postId={postId}
                                        parentId={comment.id}
                                        onCommented={() => {
                                            setReplyTo(null);
                                            onCommented();
                                        }}
                                        loading={loading}
                                    />
                                </div>
                            )}
                            {renderComments(comment.id, 1)}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CommentsSection;
