// App.js
import React, { useState, useEffect} from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import Footer from './Footer'; // Import the Footer component
import './index.css';


function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch transactions from the JSON DB server
    fetch('http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addTransaction = (newTransaction) => {
    
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className='body'>
      <NavBar />
      <TransactionForm addTransaction={addTransaction} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TransactionTable transactions={transactions} searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default App;
