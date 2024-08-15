import { useEffect, useState } from "react";
import { axiosCommon } from "../hooks/useAxiosCommon";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log(`Fetching products for page ${currentPage}`);
        const response = await axiosCommon.get('/products', {
          params: {
            page: currentPage,
            limit: productsPerPage,
          },
        });
        const data = response.data;
        console.log('Products fetched:', data);
        setProducts(data.products);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1 className="text-lg my-10 md:text-3xl lg:text-4xl text-center font-bold">
        Our Products
      </h1>

      
      <p>Search Products By Name</p>

      {products?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 md:gap-10 gap-4">
            {products.map((product) => (
              <div key={product.name} className="card card-compact bg-base-300 lg:w-72 xl:w-80 md:w-60 w-52 shadow-xl">
                <figure>
                  <img src={product?.productImage} alt={product.name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p>{product.description}</p>
                  <div className="flex text-base">
                    <p><span className="font-semibold">Price:</span> {product?.price}$</p>
                    <p><span className="font-semibold">Ratings:</span> {product?.ratings}</p>
                  </div>
                  <button className="btn bg-pink-600 hover:bg-pink-700 text-black">buy now</button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-44 mx-auto mb-5 justify-center mt-8">
            <button
              className="btn mr-4"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <div className="join">
              {[...Array(totalPages)].map((_, index) => (
                <input
                  key={index + 1}
                  className="join-item btn btn-square"
                  type="radio"
                  name="options"
                  aria-label={`Page ${index + 1}`}
                  checked={currentPage === index + 1}
                  onChange={() => handlePageChange(index + 1)}
                />
              ))}
            </div>
            <button
              className="btn ml-4"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductPage;
