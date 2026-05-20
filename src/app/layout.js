import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const inter = Inter({
  subsets: ["latin"],
})


export const metadata = {
  title: "Drive Fleet",
  description: "Explore the Premium Cars",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
