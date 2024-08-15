
import { useEffect, useState } from "react";
import { axiosCommon } from "../hooks/useAxiosCommon";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosCommon.get('/products');
        // response.json() করার দরকার নেই, axios এর response থেকে সরাসরি data পাবেন
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts(); // ফাংশনটি কল করা হচ্ছে
  }, []);

  return (
    <div>
      {products.length}
    </div>
  );
};

export default ProductPage;
