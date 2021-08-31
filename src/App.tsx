import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard/index';

import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal/index';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsTransactionNewModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsTransactionNewModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsTransactionNewModalOpen(false);
  }
  
  return (
    <TransactionsProvider>

      <GlobalStyle />
      
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />

    </TransactionsProvider>
  );
}

export default App;
