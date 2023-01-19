import Header from "@/components/Header";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* I just dont want to change the Body's property so I use another div instead. */}
      <div className="fullPage">
        <Header />
      </div>
    </>
  );
}
