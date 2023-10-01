import Styles from "@/app/Styles/loader.module.css";

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center align-middle">
      <div className={Styles.wrapper}>
        <div className={Styles.circle}></div>
        <div className={Styles.circle}></div>
        <div className={Styles.circle}></div>
        <div className={Styles.shadow}></div>
        <div className={Styles.shadow}></div>
        <div className={Styles.shadow}></div>
      </div>
    </div>
  );
};

export default Loader;
