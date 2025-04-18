import { useEffect, useState } from "react";
import "./styles.css";
import festivalData from "./data/festivalData";
import BuyTickets from "./components/BuyTickets";
import Footer from "./components/Footer";
import PosterSection from "./components/PosterSection";

export default function App() {
  const [festivals, setFestivals] = useState({
    firstDay: festivalData.filter((fest) => fest.date === "1 Haziran"),
    secondDay: festivalData.filter((fest) => fest.date === "2 Haziran"),
    thirdDay: festivalData.filter((fest) => fest.date === "3 Haziran"),
  });

  return (
    <div className="wrapper">
      <h1>Festival</h1>

      <PosterSection date="1 Haziran" festivalData={festivals.firstDay} />

      <PosterSection date="2 Haziran" festivalData={festivals.secondDay} />

      <PosterSection date="3 Haziran" festivalData={festivals.thirdDay} />

      <BuyTickets />
      <Footer />
    </div>
  );
}
