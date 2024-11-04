import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => {
    // Check if item is already in the wishlist
    if (!wishlistItems.some((wishlistItem) => wishlistItem.id === item.id)) {
      setWishlistItems((prevItems) => [...prevItems, item]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const isInWishlist = (item) => wishlistItems.some((wishlistItem) => wishlistItem.id === item.id);

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
