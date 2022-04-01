import React, { useState } from "react";
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloeseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }
  
  return (
    <>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <Modal 
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloeseNewTransactionModal}
        >
            <h2>cadastro</h2>
        </Modal>
        <GlobalStyle />
    </>
  );
}