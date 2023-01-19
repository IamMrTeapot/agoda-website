import style from "@/styles/Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header_left}>Left side</div>
      <div className={style.header_right}>right side</div>
    </div>
  );
};

export default Header;
