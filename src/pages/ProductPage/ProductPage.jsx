

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ProductPage = () => {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [brand, setBrand] = useState("");
//   const [category, setCategory] = useState("");
//   const [priceRange, setPriceRange] = useState("");
//   const [sortBy, setSortBy] = useState("date"); // Default sort by date
//   const [sortOrder, setSortOrder] = useState("desc"); // Default sort order
//   const productsPerPage = 10;

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         console.log(`Fetching products for page ${currentPage} with query "${searchQuery}"`);
//         const response = await axios.get('http://localhost:5000/products', {
//           params: {
//             page: currentPage,
//             limit: productsPerPage,
//             search: searchQuery,
//             brand: brand,
//             category: category,
//             priceRange: priceRange,
//             sortBy: sortBy,
//             sortOrder: sortOrder
//           },
//         });
//         const data = response.data;
//         console.log('Products fetched:', data);
//         setProducts(data.products);
//         setTotalPages(data.totalPages);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, [currentPage, searchQuery, brand, category, priceRange]);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleSearch = () => {
//     setCurrentPage(1); // Reset to the first page on search or filter
//   };

//   const handleSortChange = (e) => {
//     const [sortByValue, sortOrderValue] = e.target.value.split(":");
//     setSortBy(sortByValue);
//     setSortOrder(sortOrderValue);
//   };
//   return (
//     <div>
//       <h1 className="text-lg my-10 md:text-3xl lg:text-4xl text-center font-bold">
//         Our Products
//       </h1>

//       {/* Filter Section */}
//       <div className="filters mb-10">
//         <p className="text-base md:text-2xl lg:text-3xl font-semibold">Filter Products</p>
        
//         <div className="filter-item mb-5">
//           <label className="label">Brand Name</label>
//           <select
//             className="select select-bordered w-full"
//             value={brand}
//             onChange={(e) => setBrand(e.target.value)}
//           >
//             <option value="">All Brands</option>
//             <option value="TechBrand">TechBrand</option>
//             <option value="SoundMaster">SoundMaster</option>
//             <option value="VisionTech">VisionTech</option>
//             <option value="CompTech">CompTech</option>
//             <option value="SecureHome">SecureHome</option>
//           </select>
//         </div>
        
//         <div className="filter-item mb-5">
//           <label className="label">Category Name</label>
//           <select
//             className="select select-bordered w-full"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="">All Categories</option>
//             <option value="Electronics">Electronics</option>
//             <option value="Computers">Computers</option>
//             <option value="Wearables">Wearables</option>
//             <option value="Audio">Audio</option>
//             <option value="Security">Security</option>
//           </select>
//         </div>
        
//         <div className="filter-item mb-5">
//           <label className="label">Price Range</label>
//           <select
//             className="select select-bordered w-full"
//             value={priceRange}
//             onChange={(e) => setPriceRange(e.target.value)}
//           >
//             <option value="">All Prices</option>
//             <option value="0-100">0$ - 100$</option>
//             <option value="101-200">101$ - 200$</option>
//             <option value="201-300">201$ - 300$</option>
//           </select>
//         </div>
        
//         <button className="btn bg-blue-500 hover:bg-blue-600 text-white mt-4" onClick={handleSearch}>
//           Apply Filters
//         </button>
//       </div>



//       <div className="filter-item mb-5">
//           <label className="label">Sort By</label>
//           <select
//             className="select select-bordered w-full"
//             onChange={handleSortChange}
//           >
//             <option value="date:desc">Date Added: Newest First</option>
//             <option value="date:asc">Date Added: Oldest First</option>
//             <option value="price:asc">Price: Low to High</option>
//             <option value="price:desc">Price: High to Low</option>
//           </select>
//         </div>










//       {/* Search Implementing */}
//       <p className="text-base md:text-2xl lg:text-3xl font-semibold">Search Products By Name</p>
//       <div className="join mb-10 mt-5">
//         <input
//           className="input input-bordered join-item"
//           placeholder="Search"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button
//           className="btn join-item rounded-r-full"
//           onClick={handleSearch}
//         >
//           Search
//         </button>
//       </div>

//       {products?.length > 0 ? (
//         <>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 md:gap-10 gap-4">
//             {products.map((product) => (
//               <div key={product._id} className="card card-compact bg-base-300 lg:w-72 xl:w-80 md:w-60 w-52 shadow-xl">
//                 <figure>
//                   <img src={product?.productImage} alt={product.productName} />
//                 </figure>
//                 <div className="card-body">
//                   <h2 className="card-title">{product?.productName}</h2>
//                   <p>{product?.description}</p>
                
//                     <p><span className="font-semibold">Brand Name:</span> {product?.brandName}</p>
//                     <p><span className="font-semibold">Category:</span> {product?.category}</p>
                 
//                   <div className="flex text-base">
//                     <p><span className="font-semibold">Price:</span> {product?.price}$</p>
//                     <p><span className="font-semibold">Ratings:</span> {product?.ratings}</p>
//                   </div>
//                   <button className="btn bg-pink-600 hover:bg-pink-700 text-white">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </>
//       ) : (
//         <p>No products found.</p>
//       )}

//       {/* Pagination */}
//       <div className="pagination mt-10">
//         <button
//           className="btn mr-5 text-white bg-sky-600 hover:bg-sky-700"
//           onClick={handlePreviousPage}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
        
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             className={`btn mx-2 ${currentPage === i + 1 ? 'bg-red-600 text-white' : 'bg-gray-200 text-black'}`}
//             onClick={() => handlePageChange(i + 1)}
//           >
//             {i + 1}
//           </button>
//         ))}
        
//         <button
//           className="btn text-white bg-sky-600 hover:bg-sky-700"
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductPage; 
import  { useEffect, useState } from "react";
import axios from "axios";


const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const productsPerPage = 10;

  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://job-task-server-seven-theta.vercel.app/products', {
          params: {
            page: currentPage,
            limit: productsPerPage,
            search: searchQuery,
            brand: brand,
            category: category,
            priceRange: priceRange,
            sortBy: sortBy,
            sortOrder: sortOrder
          },
        });
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [currentPage, searchQuery, brand, category, priceRange, sortBy, sortOrder]);

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

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    const [sortByValue, sortOrderValue] = e.target.value.split(":");
    setSortBy(sortByValue);
    setSortOrder(sortOrderValue);
  };

  return (
    <div>
      <h1 className="text-lg my-10 md:text-3xl lg:text-4xl text-center font-bold">Our Products</h1>

      <div className="filters mb-10">
        <p className="text-base md:text-2xl lg:text-3xl font-semibold">Filter Products</p>
        
        <div className="filter-item mb-5">
          <label className="label">Brand Name</label>
          <select
            className="select select-bordered w-full"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">All Brands</option>
            <option value="TechBrand">TechBrand</option>
            <option value="SoundMaster">SoundMaster</option>
            <option value="VisionTech">VisionTech</option>
            <option value="CompTech">CompTech</option>
            <option value="SecureHome">SecureHome</option>
          </select>
        </div>
        
        <div className="filter-item mb-5">
          <label className="label">Category Name</label>
          <select
            className="select select-bordered w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Computers">Computers</option>
            <option value="Wearables">Wearables</option>
            <option value="Audio">Audio</option>
            <option value="Security">Security</option>
          </select>
        </div>
        
        <div className="filter-item mb-5">
          <label className="label">Price Range</label>
          <select
            className="select select-bordered w-full"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">All Prices</option>
            <option value="0-100">0$ - 100$</option>
            <option value="101-200">101$ - 200$</option>
            <option value="201-300">201$ - 300$</option>
          </select>
        </div>
        
        <button className="btn bg-blue-500 hover:bg-blue-600 text-white mt-4" onClick={handleSearch}>
          Apply Filters
        </button>
      </div>

      <div className="filter-item mb-5">
        <label className="label text-base md:text-2xl lg:text-3xl font-semibold">Sort By</label>
        <select
          className="select select-bordered w-full"
          onChange={handleSortChange}
        >
          <option value="date:desc">Date Added: Newest First</option>
          <option value="date:asc">Date Added: Oldest First</option>
          <option value="price:asc">Price: Low to High</option>
          <option value="price:desc">Price: High to Low</option>
        </select>
      </div>

      <p className="text-base md:text-2xl lg:text-3xl font-semibold">Search Products By Name</p>
      <div className="join mb-10 mt-5">
        <input
          className="input input-bordered join-item"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="btn join-item rounded-r-full"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {products?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 md:gap-10 gap-4">
          {products.map((product) => (
            <div key={product._id} className="card card-compact bg-base-300 lg:w-72 xl:w-[350px] md:w-64 w-60 shadow-xl">
              <figure>
                <img src={product?.productImage} alt={product.productName} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product?.productName}</h2>
                <p>{product?.description}</p>
                <p><span className="font-semibold">Brand Name:</span> {product?.brandName}</p>
                <p><span className="font-semibold">Category:</span> {product?.category}</p>
               
                <div className="flex text-base">
                  <p><span className="font-semibold">Price:</span> {product?.price}$</p>
                  <p><span className="font-semibold">Ratings:</span> {product?.ratings}</p>
                </div>
                <button className="btn bg-pink-600 hover:bg-pink-700 text-white">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}

      <div className="pagination mt-10 mb-10">
        <button
          className="btn mr-5 text-white bg-sky-600 hover:bg-sky-700"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`btn mx-2 ${currentPage === i + 1 ? 'bg-red-600 text-white' : 'bg-gray-200 text-black'}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        
        <button
          className="btn text-white bg-sky-600 hover:bg-sky-700"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
