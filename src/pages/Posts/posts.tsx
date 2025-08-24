import { useEffect, useState } from 'react';
import { getPosts } from '../../service/postsService.tsx';
import type { Post } from '../../types/index.ts';
import './Posts.scss';
import PostCard from '../../components/PostCard/PostCard.tsx';
import AddPostForm from '../../components/AddPostForm/AddPostForm.tsx';
import PostsSkeleton from '../../components/PostsSkeletons/PostsSkeleton.tsx';

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

    return (
        <div className="posts-container">
            <h1 className="posts-title">Posts</h1>
            <AddPostForm onPostCreated={fetchPosts} />
            {loading ? (
                <PostsSkeleton />
            ) : (
                <div className="posts-grid">
                    {posts.map((post) => (
                        <PostCard
                            key={post.id}
                            avatar={post.avatar}
                            name={post.name}
                            title={post.title}
                            content={post.content}
                            createdAt={post.createdAt}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PostsPage;
