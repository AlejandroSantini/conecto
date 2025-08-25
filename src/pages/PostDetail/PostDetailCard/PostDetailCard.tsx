import './PostDetailCard.scss';
import type { Post } from '../../../types';
import { deletePost } from '../../../service/postsService';
import { useNavigate } from 'react-router-dom';
import DeleteButton from '../../../components/DeleteButton/DeleteButton';

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
      console.error('Error deleting post:', error);
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
        <DeleteButton onClick={handleDeletePost} />
      </div>
      <div className="content">{post.content}</div>
    </div>
  );
};

export default PostDetailCard;
