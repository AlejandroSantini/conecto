import React, { useEffect, useState } from 'react';
import { getPosts } from '../../service/postsService.tsx';
import type { Post } from '../../types';
import './posts.scss';

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
        const data = await getPosts();
        setPosts(data);
    } catch (error) {
        console.error('Error fetching posts:', error);
    } finally {
        setLoading(false);
    }
  };

  //     {
    //     "createdAt": "2025-08-04T21:19:45.386Z",
    //     "name": "Ottis2",
    //     "avatar": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/13.jpg",
    //     "content": "Dolor repellat alveus adsum coepi sulum volubilis ars dolorum. Adhuc somnus sperno dedico sunt caste verbum capio comparo tenuis. Absconditus ciminatio cattus carpo degenero.\nDemo usque bestia neque suadeo adulescens deleniti. Catena sit cum coniecto conatus. Animadverto viridis crapula bellicus solutio casus dedecor vestigium.\nAbsens atque facere arma summisse. Curatio supplanto textus. Adsum absorbeo vetus atrox ante aeger soluta tantillus..",
    //     "title": "Experience the turquoise brilliance of our Towels, perfect for jealous environments",
    //     "id": "11"
    // },

  return (
    <div className="posts-container">
      <h1 className="posts-title">Posts</h1>
      {loading ? (
        <p style={{ textAlign: 'center', color: '#6b7280' }}>Cargando...</p>
      ) : (
        <div className="posts-grid">
          {posts.map(post => (
            <div className="card" key={post.id}>
              <img
                className="avatar"
                src={post.avatar}
                alt={post.name}
              />
              <div className="card-content">
                <h3 className="card-title">{post.title}</h3>
                <p className="card-text">{post.content}</p>
                <div className="card-footer">
                  <span className="card-author">By: {post.name}</span>
                  <span className="card-date">{new Date(post.createdAt).toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsPage;