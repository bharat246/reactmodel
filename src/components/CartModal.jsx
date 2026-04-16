function CartModal({ cartItems, isOpen, onClose, onRemoveFromCart }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-slate-950/60 px-4 py-8">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-soft">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">Your Cart</p>
            <h3 className="mt-1 text-2xl font-bold text-ink">Items in cart: {cartItems.length}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
          >
            Close
          </button>
        </div>

        <div className="max-h-[65vh] overflow-y-auto px-6 py-5">
          {cartItems.length === 0 ? (
            <div className="rounded-3xl bg-slate-50 p-10 text-center">
              <p className="text-lg font-semibold text-ink">Your cart is empty.</p>
              <p className="mt-2 text-sm text-slate-500">Add some products to see them here.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 p-4 shadow-sm sm:flex-row sm:items-center"
                >
                  <div className="flex h-24 w-full items-center justify-center rounded-2xl bg-slate-50 p-3 sm:w-24">
                    <img src={item.image} alt={item.title} className="h-full w-full object-contain" />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-ink">{item.title}</h4>
                    <p className="mt-2 text-sm text-slate-500">{item.category}</p>
                    <p className="mt-3 text-lg font-bold text-ink">${item.price}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemoveFromCart(item.id)}
                    className="rounded-full bg-red-500 px-4 py-3 font-semibold text-white transition hover:bg-red-600"
                  >
                    Remove from Cart
                  </button>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartModal;
