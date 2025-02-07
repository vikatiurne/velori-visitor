import add from '@/assets/home/svg/add.svg';
import minus from '@/assets/home/svg/minus.svg';
import remove from '@/assets/home/svg/delete.svg';

interface ProductQuantityControlProps {
  qty: number;
}

const styles = {
  imgSize: 'sm:w-[2rem] sm:h-[2rem]',
};

const ProductQuantityControl: React.FC<ProductQuantityControlProps> = ({
  qty,
}) => {
  return (
    <div className="flex items-center sm:gap-6 gap-3">
      <div className="flex gap-4">
        <button>
          <img src={minus} alt="minus" className={styles.imgSize} />
        </button>
        <p className="sm:text-xl text-xs sm:leading-[1.625rem] leading-4 font-normal font-roboto">
          {qty}
        </p>
        <button>
          <img src={add} alt="add" className={styles.imgSize} />
        </button>
      </div>
      <button>
        <img src={remove} alt="remove" className={styles.imgSize} />
      </button>
    </div>
  );
};

export default ProductQuantityControl;
