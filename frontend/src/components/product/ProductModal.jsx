import React from 'react';
import { Dialog } from '@headlessui/react';
import { IoMdClose } from 'react-icons/io';

const ProductModal = ({ isOpen, onClose, product }) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />

      {/* Centered Modal */}
      <Dialog.Panel className="relative bg-white rounded-xl p-6 w-full max-w-md mx-auto shadow-2xl z-50">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
        >
          <IoMdClose />
        </button>

        {/* Product Info */}
        <div className="text-center mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-contain rounded-lg mx-auto mb-2"
          />
          <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
          <p className="text-sm text-gray-500">{product.brand}</p>
        </div>

        {/* Variants */}
        <div className="space-y-3 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 pr-1">
          {product.variants?.map((variant, index) => (
            <div
              key={index}
              className="flex justify-between items-center border border-gray-200 rounded-lg p-3 hover:shadow"
            >
              <div>
                <p className="text-sm font-semibold text-gray-800">{variant.size}</p>
                <p className="text-xs text-gray-400 line-through">₹{variant.original_price}</p>
                <p className="text-green-600 font-bold text-base">₹{variant.discounted_price}</p>
                {variant.offer && (
                  <p className="text-xs text-orange-500 mt-1">
                    Save ₹{variant.savings} ({variant.offer})
                  </p>
                )}
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                Add
              </button>
            </div>
          ))}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default ProductModal;
