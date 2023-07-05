import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import Header from "./components/header";
import "./App.css";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const loadProvider = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        if (provider) {
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          setAccount(address);
          const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
          const contract = new ethers.Contract(
            contractAddress,
            Upload.abi,
            signer
          );
          setContract(contract);
          setProvider(provider);
        } else {
          console.error("Metamask is not installed");
        }
      } catch (error) {
        console.error("Error loading provider:", error);
      }
    };

    loadProvider();
  }, []);

  return (
    <Router>
      {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract} />
      )}

      <div className="App">
        <Header />

        <p style={{ color: "blank" }}>
          {/* Account: {account ? account : "Not connected"} */}
        </p>

        <Routes>
          <Route
            path="/"
            element={
              <FileUpload
                account={account}
                provider={provider}
                contract={contract}
              />
            }
          />
          <Route
            path="/display"
            element={<Display contract={contract} account={account} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


