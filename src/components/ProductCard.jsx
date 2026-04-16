function ProductCard({ product, onAddToCart }) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] bg-white p-5 shadow-soft transition hover:-translate-y-1">
      <div className="flex h-56 items-center justify-center rounded-2xl bg-slate-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full max-h-44 w-full object-contain"
        />
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          {product.category}
        </p>
        <h3 className="mt-3 min-h-14 text-lg font-semibold text-ink">{product.title}</h3>
        <p className="mt-4 text-2xl font-bold text-ink">${product.price}</p>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="mt-5 rounded-full bg-ink px-4 py-3 font-semibold text-white transition hover:bg-slate-700"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
