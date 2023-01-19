import style from "@/styles/Header.module.css";
import Image from "next/image";
import img from "@/public/agoda_logo_cropped.jpg";

const Header = () => {
  return (
    // flexbox with justify content : space-between
    <div className={style.header}>
      {/* Header left */}
      <div className={style.header_left}>
        <Image src={img} alt="agoda logo" height={40} placeholder="blur" />
      </div>
      {/* Header right */}
      <div className={style.header_right}>right side</div>
    </div>
  );
};

export default Header;
