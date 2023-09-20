import Image from "next/image";
import Images from "./Images";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div id="footer-main">
          <div id="footer-image-div">
            <div id="footer-image-container">
              <Image
                src={Images[0].ItemImageSrc[0].toString()}
                alt="Image"
                layout="fill"
              />
            </div>
            <div id="footer-image-container">
              <Image
                src={Images[1].ItemImageSrc[0].toString()}
                alt="Image"
                layout="fill"
              />
            </div>
            <div id="footer-image-container">
              <Image
                src={Images[2].ItemImageSrc[0].toString()}
                alt="Image"
                layout="fill"
              />
            </div>
            <div id="footer-image-container">
              <Image
                src={Images[3].ItemImageSrc[0].toString()}
                alt="Image"
                layout="fill"
              />
            </div>
          </div>
        <div id="footer-links">
          <span>Home</span>
          <Link href={"/Pages/Shop_Page"}>Shop</Link>
          <span>Categories</span>
          <span>About</span>
        </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
