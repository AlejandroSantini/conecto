import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSinglePost, getComments, deleteComment } from '../../service/postsService';
import type { Post, Comment } from '../../types';
import PostDetailCard from './PostDetailCard/PostDetailCard';
import CommentsSection from './CommentsSection/CommentsSection';
import PostDetailSkeleton from './PostDetailSkeleton/PostDetailSkeleton';
import DetailHeaderBar from '../../components/BackHeaderBar/BackHeaderBar';
import './PostDetails.scss';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (postId) {
            fetchPost();
        }
    }, []);

    const fetchPost = async () => {
        setLoading(true);
        try {
            const postData = await getSinglePost(postId!);
            setPost(postData);

            fetchComments();
        } catch (error) {
            alert(error);
            console.error('Error fetching post:', error);
            setLoading(false);
        }
    };

    const fetchComments = async () => {
        setLoading(true);
        try {
            const commentsData = await getComments(postId!);
            setComments(commentsData);
        } catch (error) {
            console.error('Error fetching comments:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteComment = async (commentId: string) => {
        if (!window.confirm('¿Eliminar este comentario?')) return;
        try {
            await deleteComment(postId!, commentId);
            setComments((prev) => prev.filter((c) => c.id !== commentId));
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="post-detail">
            <DetailHeaderBar />
            {loading || !post ? (
                <PostDetailSkeleton />
            ) : (
                <>
                    <PostDetailCard post={post} />
                    {postId && (
                        <CommentsSection
                            postId={postId}
                            comments={comments}
                            onCommented={fetchComments}
                            onDelete={handleDeleteComment}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default PostDetail;
