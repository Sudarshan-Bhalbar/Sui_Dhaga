import Image from "next/image";
import Images from "./Images";
import Link from "next/link";
import Styles from "@/app/Styles/footer.module.css";

const Footer = () => {
  return (
    <>
      <div id={Styles.footer}>
        <div id={Styles.footer_main}>
          <div id={Styles.footer_image_div}>
            <div id={Styles.footer_image_container}>
              <Image
                src={Images[0].ItemImageSrc[0].toString()}
                alt="Image"
                layout="fill"
              />
            </div>
            <div id={Styles.footer_image_container}>
              <Image
                src={Images[1].ItemImageSrc[0].toString()}
                alt="Image"
                layout="fill"
              />
            </div>
            <div id={Styles.footer_image_container}>
              <Image
                src={Images[2].ItemImageSrc[0].toString()}
                alt="Image"
                layout="fill"
              />
            </div>
            <div id={Styles.footer_image_container}>
              <Image
                src={Images[3].ItemImageSrc[0].toString()}
                alt="Image"
                layout="fill"
              />
            </div>
          </div>
        <div id={Styles.footer_links}>
          <Link href={"/"}>Home</Link>
          <Link href={"/Pages/Shop_Page"}>Shop</Link>
          <Link href={"/Pages/Categories"}>Categories</Link>
          <Link href={"/Pages/About"}>About</Link>
        </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
