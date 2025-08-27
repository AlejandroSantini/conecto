import { useEffect, useState } from 'react';
import { getPosts } from '../../service/postsService.tsx';
import { useNavigate } from 'react-router-dom';
import PostCard from './PostCard/PostCard.tsx';
import AddPostForm from './AddPostForm/AddPostForm.tsx';
import PostsSkeleton from '../../components/Skeletons/PostsSkeletons/PostsSkeleton.tsx';
import type { Post } from '../../types/posts.ts';
import './Posts.scss';

const PostsPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const data = await getPosts();

            const sorted = [...data].sort((a, b) => b.createdAt?.localeCompare(a.createdAt) ?? 0);

            setPosts(sorted);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };

    const deletePost = (postId: string) => {
        setPosts((prev) => prev.filter((p) => p.id !== postId));
    };

    return (
        <div className="posts-container">
            <AddPostForm onPostCreated={fetchPosts} loading={loading} />
            {loading ? (
                <PostsSkeleton />
            ) : (
                <div className="posts-grid">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            onClick={() => navigate(`/post/${post.id}`)}
                        >
                            <PostCard
                                id={post.id}
                                avatar={post.avatar}
                                name={post.name}
                                title={post.title}
                                content={post.content}
                                createdAt={post.createdAt}
                                onDeleted={() => deletePost(post.id)}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PostsPage;
