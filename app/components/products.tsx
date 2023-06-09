import Image from "next/image";
import ProductImg from '../../public/product.jpg'
import Link from "next/link";

const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 299,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: "./../../public/product.jpg",
    },
    {
      id: 2,
      name: 'Product 2',
      price: 399,
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: "./../../public/product.jpg"
    },
    {
        id: 3,
        name: 'Product 3',
        price: 499,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: "./../../public/product.jpg",
      },
      {
        id: 4,
        name: 'Product 4',
        price: 399,
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: "./../../public/product.jpg"
      },
    // Add more product objects as needed
  ];
  
  const ProductSection = () => {
    return (
      <section>
        <h3 className="text-black text-center pt-8 text-4xl font-extralight" >Latest Products</h3>
        <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <Link href={'/product'}>
              <Image
                className="w-full h-48 object-cover mb-4 hover:opacity-70"
                src={ProductImg}
                alt={product.name}
                width={200}
                height={20}
              />
            </Link>
            <Link href={'/product'}>
              <h2 className="hover:underline text-xl font-semibold mb-2 text-gray-900">{product.name}</h2>
            </Link>
              <p className="text-gray-600 mb-2">₹{product.price.toFixed(2)}</p>
              <p className="text-gray-800">{product.description}</p>
            </div>
          ))}
        </div>
        </div>
      </section>
    );
  };
  
  export default ProductSection;
  