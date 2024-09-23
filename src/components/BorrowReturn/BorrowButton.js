import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBookAvailability } from '../../redux/bookReducer';
import { db } from '../../services/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const BorrowButton = ({ bookId }) => {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books.find((b) => b.id === bookId));
  const user = useSelector((state) => state.user);

  // Handle book borrowing logic
  const handleBorrow = async () => {
    if (book.availableCopies > 0 && user) {
      try {
        // Update the Firestore document
        const bookRef = doc(db, 'books', bookId);
        await updateDoc(bookRef, {
          availableCopies: book.availableCopies - 1,
        });

        // Dispatch action to update the Redux store
        dispatch(updateBookAvailability(bookId, book.availableCopies - 1));

        alert(`You have borrowed the book: ${book.title}`);
      } catch (error) {
        console.error('Error borrowing book:', error);
      }
    } else {
      alert('No copies available or user not logged in');
    }
  };

  return (
    <button onClick={handleBorrow} disabled={book.availableCopies === 0}>
      {book.availableCopies > 0 ? 'Borrow Book' : 'Out of Stock'}
    </button>
  );
};

export default BorrowButton;
