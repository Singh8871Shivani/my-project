// import React, { useContext } from 'react';
// import { WishlistContext } from './WishlistContext'; 
// import Navbar from './Navbar';
// import Footer from './Footer';

// const Wishlist = () => {
//   const { wishlistItems, removeFromWishlist } = useContext(WishlistContext); 

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <Navbar/>
//       <h1 className="text-3xl font-bold text-center mb-6">Your Wishlist</h1>
//       <div className="grid grid-cols-1 gap-4">
//         {wishlistItems.length > 0 ? (
//           wishlistItems.map((item) => (
//             <div key={item.id} className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg">
//               <span className="font-semibold">{item.name}</span>
//               <button
//                 onClick={() => removeFromWishlist(item.id)}
//                 className="text-red-600 font-bold hover:text-red-800"
//               >
//                 Remove
//               </button>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">Your wishlist is empty!</p>
//         )}
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default Wishlist;
import React, { useContext } from 'react';
import { WishlistContext } from './WishlistContext';
import Navbar from './Navbar';
import Footer from './Footer';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar />
      <h1 className="text-3xl font-bold text-center mb-6">Your Wishlist</h1>
      <div className="grid grid-cols-1 gap-4">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <div key={item.id} className="flex flex-col bg-white shadow-md p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="font-semibold text-xl">{item.name}</h2>
                  <p className="text-gray-600">{item.title}</p>
                  <p className="text-gray-800 font-bold">Price: ${item.price}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => alert(`Donating for ${item.name}`)} // Replace with actual donate function
                  className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
                >
                  Donate
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your wishlist is empty!</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
