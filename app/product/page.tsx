'use client'
import Image from 'next/image';
import ProductImg1 from '../../public/product.jpg';
import ProductImg2 from '../../public/product2.webp'
import { SetStateAction, useState } from 'react';



function ProductPage () {
    const [selectedImage, setSelectedImage] = useState<number>(0);
    const [quantity, setQuantity] = useState(1);



    // Mock product data (replace with your actual product data)
    const product = {
        id: 1,
        name: 'Designer 3D Photo Frame',
        price: 29.99,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        images: [
            ProductImg1,
            ProductImg2,
        ],
    };

    const handleImageClick = (index : number) => {
        setSelectedImage(index);
      };
    
    const handleContactClick = () => {
        const message = `I'm interested in the product: ${product.name} - Price: ₹${product.price.toFixed(
            2
        )}`;
        const whatsappUrl = `https://wa.me/+917000770007?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappUrl;
    };

    return (
        <div className="w-screen min-h-screen bg-white mx-auto py-8 px-4">
        <div className='lg:w-9/12 lg:mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="mb-8">
            <Image
              style={{height: '400px',width: '500px'}}
              src={product.images[selectedImage]}
              alt={product.name}
              height={500}
              width={500}
            />
            <div className="flex flex-wrap justify-start gap-2 mt-4">
              {product.images.map((image, index) => (
                <Image
                  key={index}
                  className={`w-full h-auto cursor-pointer border ${
                    index === selectedImage ? 'border-blue-500' : 'border-gray-300'
                  }`}
                  src={image}
                  alt={`Product ${index + 1}`}
                  style={{width: '100px',height: '100px'}}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900">{product.name}</h1>
            <p className="text-xl text-gray-800 mb-4">${product.price.toFixed(2)}</p>
            <p className="text-lg text-gray-800 mb-4">{product.description}</p>
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="mr-2 text-lg text-gray-800">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                className="w-16 py-1 px-2 border border-gray-300 rounded text-gray-900"
                value={quantity}
                onChange={(e) => setQuantity(!(quantity < 1) ? Number.parseInt(e.target.value ) : 1)}
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={handleContactClick}
            >
              Contact regarding this product
            </button>
          </div>
        </div>
        <div className='flex text-gray-800 flex-col'>
            <h3 className='font-bold text-xl underline underline-offset-4 mt-10 md:mt-0'>Description</h3>
            <div className='mt-10'>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Recusandae animi molestias fuga voluptatibus distinctio corporis 
                    facere eaque, eos deserunt, asperiores molestiae voluptates provident 
                    rem expedita sint vitae quidem odio architecto.
                </p>
                <h4 className='font-bold mt-5'>About the Product</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <h4 className='font-bold mt-5'>Features</h4>
                <ul className='list-disc list-inside'>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                </ul>
                <h4 className='font-bold mt-5'>Size</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    50x50 cm
                </p>
                
            </div>
        </div>
        </div>
      </div> 
    );
};

export default ProductPage;
