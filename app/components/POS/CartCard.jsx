"use client";

import { Trash2, Minus, Plus, ShoppingCart, User, Banknote, Check } from "lucide-react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRouter } from "next/navigation";

export default function CartCard({ cart, removeItem, increaseQty, decreaseQty }) {
  const router = useRouter();
  const cartWithQty = cart.map((item) => ({ ...item, qty: item.qty || 1 }));

  const subtotal = cartWithQty.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.12;
  const total = subtotal + tax;

  // ---------------- HANDLE PRINT BILL ----------------
  const handlePrintBill = () => {
    if (cartWithQty.length === 0) return;
    localStorage.setItem("printCart", JSON.stringify(cartWithQty));
    router.push("/Print"); // Navigate to PrintBill page
  };

  return (
    <div className="space-y-4 flex flex-col h-full w-full">
      <div className="rounded-xl shadow-xl bg-gradient-to-br from-white to-slate-50 flex flex-col mt-5 min-h-[65vh]">
        {/* Header */}
        <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-t-lg">
          <div className="font-semibold flex items-center justify-between">
            <span className="flex items-center">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Cart ({cart.length})
            </span>
            {cart.length > 0 && (
              <button
                className="px-3 h-8 rounded-md text-xs hover:bg-white/20"
                onClick={() => removeItem("all")}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-slate-400">
              <ShoppingCart className="w-16 h-16 mb-4" />
              <p className="text-lg">Cart is empty</p>
              <p className="text-sm">Add products to start</p>
            </div>
          ) : (
            <div className="space-y-3">
              {cartWithQty.map((item, index) => (
                <div key={item._id || item.id || index} className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-slate-900 text-sm">{item.name}</h4>
                    <button
                      onClick={() => removeItem(index)}
                      className="text-red-500 hover:bg-red-50 h-6 w-6 rounded-md flex items-center justify-center"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => decreaseQty(item._id || item.id)}
                        className="border border-gray-300 rounded-md h-7 w-7 flex items-center justify-center hover:bg-slate-100"
                      >
                        <Minus className="w-3 h-3 text-gray-400" />
                      </button>

                      <span className="w-8 text-center font-semibold text-slate-600">{item.qty}</span>

                      <button
                        onClick={() => increaseQty(item._id || item.id)}
                        className="border border-gray-300 rounded-md h-7 w-7 flex items-center justify-center hover:bg-slate-100"
                      >
                        <Plus className="w-3 h-3 text-gray-400" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-slate-500">Rs.{item.price.toFixed(2)} each</p>
                      <p className="font-bold text-teal-600">Rs.{(item.qty * item.price).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-slate-200 p-4 space-y-2 bg-slate-50">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Subtotal</span>
              <span className="font-medium">Rs.{subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Tax</span>
              <span className="font-medium">Rs.{tax.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-lg font-bold pt-2 border-t border-slate-300">
              <span>Total</span>
              <span className="text-teal-600">Rs.{total.toFixed(2)}</span>
            </div>

            <button
              className="w-full h-12 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-md font-semibold flex items-center justify-center mt-3 shadow-lg hover:opacity-90"
              onClick={handlePrintBill}
            >
              <Check className="w-5 h-5 mr-2" /> Print Bill
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
