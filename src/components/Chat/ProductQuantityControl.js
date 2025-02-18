import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import add from '@/assets/home/svg/add.svg';
import minus from '@/assets/home/svg/minus.svg';
import remove from '@/assets/home/svg/delete.svg';
const styles = {
    imgSize: 'sm:w-[2rem] sm:h-[2rem]',
};
const ProductQuantityControl = ({ qty, }) => {
    return (_jsxs("div", { className: "flex items-center sm:gap-6 gap-3", children: [_jsxs("div", { className: "flex gap-4", children: [_jsx("button", { children: _jsx("img", { src: minus, alt: "minus", className: styles.imgSize }) }), _jsx("p", { className: "sm:text-xl text-xs sm:leading-[1.625rem] leading-4 font-normal font-roboto", children: qty }), _jsx("button", { children: _jsx("img", { src: add, alt: "add", className: styles.imgSize }) })] }), _jsx("button", { children: _jsx("img", { src: remove, alt: "remove", className: styles.imgSize }) })] }));
};
export default ProductQuantityControl;
