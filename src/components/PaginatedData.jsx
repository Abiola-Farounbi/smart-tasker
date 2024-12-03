import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const PaginatedData = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const limit = 9; // Number of items per page
  
    useEffect(() => {
      const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        
        try {
          const skip = (page - 1) * limit;
          const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
          
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          
          const data = await response.json();
          
          setProducts(data.products);
          setTotalProducts(data.total);
        } catch (err) {
          setError(err.message);
          console.error('Error fetching products:', err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, [page]);
  
    const totalPages = Math.ceil(totalProducts / limit);
  
    if (loading) {
      return (
        <div className="p-4 text-center">
          <p>Loading products...</p>
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="p-4 text-red-500">
          <p>Error: {error}</p>
        </div>
      );
    }
  
    return (
      <div className="p-4">
        <h2 className="text-xl mb-4">Product Catalog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(product => (
            <div 
              key={product.id} 
              className="border p-4 rounded-lg shadow-md"
            >
              <h3 className="font-bold text-lg">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="font-semibold text-green-600">${product.price}</span>
                <span className="text-sm text-gray-500">Stock: {product.stock}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center items-center mt-4 space-x-4">
          <button 
            onClick={() => setPage(prev => Math.max(1, prev - 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-purple-500 text-white rounded disabled:opacity-50"
          >
            <ChevronLeft size={20} />
          </button>
          
          <span className="text-gray-700">
            Page {page} of {totalPages}
          </span>
          
          <button 
            onClick={() => setPage(prev => Math.min(totalPages, prev + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-purple-500 text-white rounded disabled:opacity-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    );
  };
  
export default PaginatedData;