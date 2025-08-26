import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './pages/Posts/Posts';
import PostDetail from './pages/PostDetail/PostDetail';
import Layout from './pages/Layout/Layout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Posts />} />
                    <Route path="/post/:postId" element={<PostDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
