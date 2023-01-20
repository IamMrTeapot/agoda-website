import Banner from "@/components/Banner";
import Contents from "@/components/Contents";
import Header from "@/components/Header";
import NavSearch from "@/components/NavSearch";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* I just dont want to change the Body's property so I use another div instead. */}
      <div className="fullPage">
        <Header />
        <Banner />
        <NavSearch />
        <Contents />
      </div>
    </>
  );
}
