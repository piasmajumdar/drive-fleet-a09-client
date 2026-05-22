import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bounce, ToastContainer } from "react-toastify";
import NextThemeProvider from "@/providers/NextThemeProvider";

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
      // data-theme="dark"
      className={`${inter.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <NextThemeProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </NextThemeProvider>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
