function Navbar({ cartCount, onCartOpen }) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/60 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">React + Tailwind</p>
          <h2 className="text-2xl font-bold text-ink">ShopCart</h2>
        </div>

        <button
          type="button"
          onClick={onCartOpen}
          className="flex items-center gap-3 rounded-full bg-sun px-5 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <span>Cart</span>
          <span className="rounded-full bg-white px-3 py-1 text-sm">{cartCount}</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
