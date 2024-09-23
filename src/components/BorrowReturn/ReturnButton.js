import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBookAvailability } from '../../redux/bookReducer';
import { db } from '../../services/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const ReturnButton = ({ bookId }) => {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books.find((b) => b.id === bookId));
  const user = useSelector((state) => state.user);

  // Handle book returning logic
  const handleReturn = async () => {
    if (user) {
      try {
        // Update the Firestore document
        const bookRef = doc(db, 'books', bookId);
        await updateDoc(bookRef, {
          availableCopies: book.availableCopies + 1,
        });

        // Dispatch action to update the Redux store
        dispatch(updateBookAvailability(bookId, book.availableCopies + 1));

        alert(`You have returned the book: ${book.title}`);
      } catch (error) {
        console.error('Error returning book:', error);
      }
    } else {
      alert('User not logged in');
    }
  };

  return <button onClick={handleReturn}>Return Book</button>;
};

export default ReturnButton;
