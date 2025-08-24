import './PostDetailCard.scss';
import type { Post } from '../../../types';
import { deletePost } from '../../../service/postsService';
import { useNavigate } from 'react-router-dom';

interface PostDetailCardProps {
  post: Post;
}

const PostDetailCard = ({ post }: PostDetailCardProps) => {
  const navigate = useNavigate();

  const handleDeletePost = async () => {
    if (!window.confirm('¿Seguro que quieres eliminar este post?')) return;
    try {
      await deletePost(post.id);
      navigate('/');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="post-detail-card">
      <div className="header">
        <img className="avatar" src={post.avatar} alt={post.name} />
        <div className="info">
          <h2 className="title">{post.title}</h2>
          <span className="author">{post.name}</span>
          <span className="date">{new Date(post.createdAt).toLocaleString()}</span>
        </div>
        <button className="delete-btn" onClick={handleDeletePost} title="Eliminar post">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6m5 0V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
        </button>
      </div>
      <div className="content">{post.content}</div>
    </div>
  );
};

export default PostDetailCard;
