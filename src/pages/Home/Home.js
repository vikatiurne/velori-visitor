import { jsx as _jsx } from "react/jsx-runtime";
import HomeComponent from '@/components/Home/HomeComponent';
import Container from '@/hoc/Container/Container';
const Home = () => {
    return (_jsx(Container, { children: _jsx(HomeComponent, {}) }));
};
export default Home;
