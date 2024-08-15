
// import { useEffect, useState } from "react";
// import { axiosCommon } from "../hooks/useAxiosCommon";

// const ProductPage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axiosCommon.get('/products');
//         // response.json() করার দরকার নেই, axios এর response থেকে সরাসরি data পাবেন
//         const data = response.data;
//         setProducts(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchProducts(); // ফাংশনটি কল করা হচ্ছে
//   }, []);

//   return (
//     <div>
// 		<h1 className="text-lg md:text-3xl lg:text-4xl text-center font-bold ">Our Products</h1>
// 		{products?.length > 0 ? (
//         products.map((product) => (
//           <div key={product.name} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2">
// 			<div className="card card-compact bg-base-100 w-96 shadow-xl">
//   <figure>
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">Shoes!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
            
//           </div>
//         ))
//       ) : (
//         <p>No products found</p>
//       )}
//     </div>
//   );
// };

// export default ProductPage;
import { useEffect, useState } from "react";
import { axiosCommon } from "../hooks/useAxiosCommon";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosCommon.get('/products');
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-lg md:text-3xl lg:text-4xl text-center font-bold">
        Our Products
      </h1>
      {products?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"> {/* Grid container */}
          {products.map((product) => (
            <div key={product.name} className="card card-compact bg-base-300 w-96 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt={product.name} // make sure to use the product name as alt text
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2> {/* Use product name */}
                <p>{product.description}</p> {/* Use product description */}
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductPage;
