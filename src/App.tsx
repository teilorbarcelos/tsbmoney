import { useState } from "react";
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsContext } from "./contexts/TransactionsContext";
import { GlobalStyle } from "./styles/global"

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  return (
    <TransactionsContext.Provider value={[]}>
      <Header setModalOpen={setIsNewTransactionModalOpen} />
      <Dashboard />

      <NewTransactionModal
        isNewTransactionModalOpen={isNewTransactionModalOpen}
        setIsNewTransactionModalOpen={setIsNewTransactionModalOpen}
      // updateList={}
      />

      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}
