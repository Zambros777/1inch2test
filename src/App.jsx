import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Swap from "./Swap";
import Footer from "./Footer";

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  const [content, setContent] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes("googlebot")) {
      setContent("Welcome Googlebot!");
    }
  }, []);

  return (
    <>
      {content ? (
        <div className="content-container">{content}</div>
      ) : (
        <div className="main-container">
          <Header
            walletAddress={walletAddress}
            setWalletAddress={setWalletAddress}
          />
          <Swap walletAddress={walletAddress} />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
