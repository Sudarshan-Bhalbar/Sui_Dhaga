import Styles from "@/app/Styles/sidebar.module.css";

const SideBar = () => {
  return (
    <div id={Styles.sidebar_wraper}>
      <div id={Styles.main_circle}>
        <div id={Styles.stripe}></div>
      </div>
    </div>
  );
};

export default SideBar;
