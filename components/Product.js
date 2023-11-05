import useToggle from "@/hooks/useToggle";
import Image from "next/image";
import Link from "next/link";

const Product = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="w-64 h-5/6 mr-20 shadow-lg p-4 rounded-lg  flex flex-col justify-between">
        <div className="h-60 relative w-full">
          <Image
            src={product.image[0]}
            alt={product.name}
            fill // Specify layout directly in the component
            className="rounded-lg"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
        </div>
        <button className="rounded-md shadow py-3 border border-transparent divide-x divide-gray-600 font-medium text-white bg-gray-900 hover:bg-gray-700 md:text-lg">
          <span className="mr-2">Cart+</span>
          <span className="pl-2"> $ {product.price}</span>
        </button>
      </div>
    </Link>
  );
};

export default Product;
