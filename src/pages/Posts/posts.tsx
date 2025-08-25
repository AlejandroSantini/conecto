import { useEffect, useState } from 'react';
import { getPosts } from '../../service/postsService.tsx';
import type { Post } from '../../types/index.ts';
import './Posts.scss';
import PostCard from '../../components/PostCard/PostCard.tsx';
import { useNavigate } from 'react-router-dom';
import AddPostForm from '../../components/AddPostForm/AddPostForm.tsx';
import PostsSkeleton from './PostsSkeletons/PostsSkeleton.tsx';

const PostsPage = () => {
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

    const navigate = useNavigate();

    return (
        <div className="posts-container">
            <AddPostForm onPostCreated={fetchPosts} />
            {loading ? (
                <PostsSkeleton />
            ) : (
                <div className="posts-grid">
                    {posts.map((post) => (
                        <div key={post.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/post/${post.id}`)}>
                            <PostCard
                                id={post.id}
                                avatar={post.avatar}
                                name={post.name}
                                title={post.title}
                                content={post.content}
                                createdAt={post.createdAt}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PostsPage;
