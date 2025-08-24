
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSinglePost, getComments, deleteComment } from '../../service/postsService';
import type { Post, Comment } from '../../types';
import PostDetailCard from './PostDetailCard/PostDetailCard';
import CommentForm from '../../components/AddCommentForm/AddCommentForm';
import CommentCard from '../../components/CommentCard/CommentCard';
import PostDetailSkeleton from './PostDetailSkeleton/PostDetailSkeleton';
import './PostDetail.scss';

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  // const [commentLoading, setCommentLoading] = useState(false);

  useEffect(() => {
    if (postId) {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const postData = await getSinglePost(postId!);
      setPost(postData);

      const commentsData = await getComments(postId!);
      setComments(commentsData);
    } catch (error) {
      alert(error);
      console.error('Error fetching post or comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    if (!window.confirm('¿Eliminar este comentario?')) return;
    try {
      await deleteComment(postId!, commentId);
      setComments(prev => prev.filter(c => c.id !== commentId));
    } catch (error) {
      alert(error);
    }
  };

  if (loading || !post) return <PostDetailSkeleton />;

  return (
    <div className="post-detail">
      <div className="detail-header-bar">
        <button className="back-btn" onClick={() => navigate(-1)} title="Volver">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
      </div>
      <PostDetailCard post={post} />
      <div className="comments-section">
        <h3>Comentarios</h3>
        {postId && (
          <CommentForm postId={postId} onCommented={fetchData} />
        )}
        <div className="comments-list">
          {comments.length === 0 ? (
            <p className="no-comments">No hay comentarios aún.</p>
          ) : (
            comments.map(comment => (
              <CommentCard key={comment.id} comment={comment} onDelete={handleDeleteComment} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
