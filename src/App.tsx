import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostsPage from './pages/Posts/Posts';
import PostDetail from './pages/PostDetails/PostDetails';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PostsPage />} />
                <Route path="/post/:postId" element={<PostDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
