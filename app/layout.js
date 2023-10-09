
import "./globals.css";
import { Raleway } from "next/font/google";
import Navigator from "./Components/Navigator";
import Footer from "@/app/Components/Footer";

export const metadata = {
  title: 'SUI DHAGA'
}

const raleway = Raleway({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "400", "700"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className} suppressHydrationWarning>
        <Navigator />
        {children}
        <Footer /> 
      </body>
    </html>
  );
}
