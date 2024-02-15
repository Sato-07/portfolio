import "./globals.css";
// import { Inter } from "next/font/google";
import Theming from "@/components/providers/Theme";
// import UiProvider from "@/components/providers/UiProvider";

import HeaderPage from "@/app/Header/Header/Page.jsx";
import Footer from "@/app/components/Footer.jsx";

// const inter = Inter({ subsets: ["latin"] });

// import { Inter } from "next/font/google";

// const font = Inter({
//   subsets: ["latin"],
//   weight: ["400", "600", "100"],
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Forevrsmart</title>
        <link rel="icon" type="image/png" href="/logo.png" />
      </head>
      <body>
        {/* <body className={`${font.className} `}> */}
        <Theming>
          <HeaderPage />
          {children}
          <Footer />
        </Theming>
      </body>
    </html>
  );
}
