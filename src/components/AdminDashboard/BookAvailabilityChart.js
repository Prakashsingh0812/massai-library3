import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BookAvailabilityChart = () => {
  // Fetch books from the Redux store
  const books = useSelector((state) => state.books);

  // Prepare data for the chart
  const data = books.map((book) => ({
    name: book.title,
    Available: book.availableCopies,
    Total: book.totalCopies,
  }));

  return (
    <div>
      <h3>Book Availability Chart</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Available" fill="#82ca9d" />
          <Bar dataKey="Total" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BookAvailabilityChart;
