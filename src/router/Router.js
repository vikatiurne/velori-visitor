import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('@/pages/Home/Home'));
const ChatPage = lazy(() => import('@/pages/Chat/ChatPage'));
const Router = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/chat", element: _jsx(ChatPage, {}) })] }));
};
export default Router;
