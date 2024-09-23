import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const GenreDistributionChart = () => {
  // Fetch books from the Redux store
  const books = useSelector((state) => state.books);

  // Calculate the distribution of genres
  const genreCount = books.reduce((acc, book) => {
    acc[book.genre] = (acc[book.genre] || 0) + 1;
    return acc;
  }, {});

  // Prepare data for the chart
  const data = Object.keys(genreCount).map((genre) => ({
    name: genre,
    value: genreCount[genre],
  }));

  // Define colors for different genres
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#D0ED57', '#8884D8'];

  return (
    <div>
      <h3>Genre Distribution Chart</h3>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}`}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GenreDistributionChart;
