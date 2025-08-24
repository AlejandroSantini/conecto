
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { getSinglePost, getComments, createComment, deleteComment } from '../../service/postsService';
import type { Post, Comment } from '../../types';
import PostDetailCard from './PostDetailCard/PostDetailCard';
import './PostDetail.scss';

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [commentLoading, setCommentLoading] = useState(false);
  const { register, handleSubmit, reset, formState } = useForm<{ comment: string }>({ mode: 'onChange' });

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

  const onSubmitComment = async (data: { comment: string }) => {
    setCommentLoading(true);
    try {
      await createComment(postId!, {
        name: 'Anon',
        content: data.comment,
        createdAt: new Date().toISOString(),
        parentId: postId!,
      });
      reset();
      fetchData();
    } catch (error) {
      alert(error);
    } finally {
      setCommentLoading(false);
    }
  };

  if (loading || !post) return <div className="post-detail">Cargando...</div>;

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
        <form className="comment-form" onSubmit={handleSubmit(onSubmitComment)}>
          <textarea
            placeholder="Escribe un comentario..."
            {...register('comment', { required: true, minLength: 1 })}
            disabled={commentLoading}
          />
          <button type="submit" disabled={commentLoading || !formState.isValid}>
            Comentar
          </button>
        </form>
        <div className="comments-list">
          {comments.length === 0 ? (
            <p className="no-comments">No hay comentarios aún.</p>
          ) : (
            comments.map(comment => (
              <div className="comment-card" key={comment.id}>
                <img className="avatar" src={comment.avatar} alt={comment.name} />
                <div className="comment-content">
                  <span className="author">{comment.name}</span>
                  <span className="date">{new Date(comment.createdAt).toLocaleString()}</span>
                  <p>{comment.content}</p>
                </div>
                <button className="delete-comment-btn" onClick={() => handleDeleteComment(comment.id)} title="Eliminar comentario">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6m5 0V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
