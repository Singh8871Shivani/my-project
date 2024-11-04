import React, { useContext } from 'react';
import { WishlistContext } from './WishlistContext';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const ItemComponent = ({ item }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);

  const toggleWishlist = () => {
    if (isInWishlist(item)) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item);
    }
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="font-semibold text-xl">{item.name}</h2>
      <p className="text-gray-600">{item.title}</p>
      <p className="text-gray-800 font-bold">Price: ${item.price}</p>

      {/* Wishlist Heart Icon */}
      <button onClick={toggleWishlist} className="text-red-600 mt-4">
        {isInWishlist(item) ? (
          <AiFillHeart className="w-6 h-6" /> // Filled heart icon
        ) : (
          <AiOutlineHeart className="w-6 h-6" /> // Outline heart icon
        )}
      </button>
    </div>
  );
};

export default ItemComponent;
