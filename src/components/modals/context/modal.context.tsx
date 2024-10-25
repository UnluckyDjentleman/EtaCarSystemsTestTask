import { createContext, ReactNode, useState } from "react";
import Assets from "../../../constants/types/assets";
import ModalAdd from "../modalAdd";
import ModalPortfolio from "../modalPortfolio";
import { createPortal } from "react-dom";
import Modal from "../../shared/modal";

const initialState = {
  viewModalList: () => {},
  viewCoinAddModal: (_: Assets) => {},
  closeModal: () => {},
};

export const ModalContext = createContext(initialState);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const [activeModal, setActiveModal] = useState<"addCoin" | "coinList" | null>(
    null,
  );
  const [activeCoin, setActiveCoin] = useState<Assets>();

  const contextVal = {
    viewModalList: () => {
      console.log("e");
      setIsOpen(true);
      setActiveModal("coinList");
    },
    viewCoinAddModal: (coin: Assets) => {
      console.log("a");
      setIsOpen(true);
      setActiveModal("addCoin");
      setActiveCoin(coin);
    },
    closeModal: () => {
      setIsOpen(false);
      setActiveModal(null);
    },
  };

  const getModal = () => {
    switch (activeModal) {
      case "addCoin":
        return <ModalAdd coin={activeCoin} />;
      case "coinList":
        return <ModalPortfolio />;
      default:
        return undefined;
    }
  };

  return (
    <ModalContext.Provider value={contextVal}>
      {children}
      {isOpen && createPortal(<Modal>{getModal()}</Modal>, document.body)}
    </ModalContext.Provider>
  );
};
