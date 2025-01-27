import { Roboto_Mono } from "next/font/google";
import "./globals.css";


const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Graphique, NITT",
  description: "Graphic design club of NITT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
