import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartModal from './components/CartModal';

const PRODUCTS_API = 'https://fakestoreapi.com/products';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError('');

        const response = await fetch(PRODUCTS_API);
        if (!response.ok) {
          throw new Error('Unable to fetch products right now.');
        }

        const data = await response.json();
        setProducts(data);
      } catch (fetchError) {
        setError(fetchError.message || 'Something went wrong while loading products.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const isAlreadyInCart = cartItems.some((item) => item.id === product.id);

    if (isAlreadyInCart) {
      window.alert('Item already added to the cart');
      return;
    }

    setCartItems((currentItems) => [...currentItems, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-sand text-ink">
      <Navbar cartCount={cartItems.length} onCartOpen={() => setIsCartOpen(true)} />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-10 rounded-[2rem] bg-gradient-to-r from-ink to-slate-700 px-6 py-10 text-white shadow-soft sm:px-10">
          <p className="text-sm uppercase tracking-[0.35em] text-sun">Fake Store Collection</p>
          <h1 className="mt-4 max-w-2xl text-3xl font-bold sm:text-5xl">
            Add products to your cart through a clean modal-based shopping flow.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-200 sm:text-base">
            Browse products, add them instantly, and manage your cart without leaving the page.
          </p>
        </section>

        {isLoading && (
          <div className="rounded-3xl bg-white p-10 text-center shadow-soft">
            <p className="text-lg font-medium">Loading products...</p>
          </div>
        )}

        {error && !isLoading && (
          <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-center text-red-700 shadow-soft">
            <p className="text-lg font-semibold">Failed to load products</p>
            <p className="mt-2 text-sm">{error}</p>
          </div>
        )}

        {!isLoading && !error && (
          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
            ))}
          </section>
        )}
      </main>

      <CartModal
        cartItems={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
}

export default App;
