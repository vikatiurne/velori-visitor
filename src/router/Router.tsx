import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home/Home'));
const ChatPage = lazy(() => import('@/pages/Chat/ChatPage'));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
};

export default Router;
