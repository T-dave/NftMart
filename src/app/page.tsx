import Image from "next/image";
import NavBar from "./components/navBar";
import Header from "./components/header";
import headerStyles from "./components/style/header.module.css"
import Auctions from "./components/auctions";
import Overline from "./components/overline";
import Overline2 from "./components/overline2";
import Overline3 from "./components/overline3";
import Stat from "./components/stat";
import BottomScroll from "./components/bottomScroll";
import Footer from "./components/footer";
import Sale from "./components/sale";

export default function Home() {
  return (
    <main>
      <div className={headerStyles.header}>
        <NavBar/>
        <Header/>
      </div>
      <Auctions/>
      <Overline/>
      <Sale/>
      <Overline2/>
      <Overline3 text = {"Most popular live auctions"}/>
      <Stat/>
      <BottomScroll/>
      <div className="px-20 py-10"><Footer/></div>
      </main>
  );
}
