import Header from "@/components/Header";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="fullPage">
        <Header />
      </div>
    </>
  );
}
