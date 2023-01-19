import style from "@/styles/Header.module.css";
import Image from "next/image";
import img from "@/public/agoda_logo_cropped.jpg";
import img2 from "@/public/cart_icon.png";
import img3 from "@/public/Bars.png";
import img4 from "@/public/Bars_hover.png";

const Header = () => {
  return (
    // flexbox with justify content : space-between
    <div className={style.header}>
      {/* Header left */}
      <div className={style.header_left}>
        <div className={style.flex}>
          <Image src={img} alt="agoda logo" height={40} placeholder="blur" />
          <div className={`${style.topic_container}`}>
            <ul>
              <li>Flight + Hotel</li>
              <li>Hotels & Homes</li>
              <li>Flights</li>
              <li>Coupons</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Header right */}
      <div className={style.header_right}>
        <div className={style.flex}>
          <div className={style.icon_container}>
            <Image src={img2} alt="cart logo" width={24} placeholder="blur" />
          </div>
          <div className={style.icon_container}>
            <Image src={img3} alt="more icon" width={24} placeholder="blur" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
