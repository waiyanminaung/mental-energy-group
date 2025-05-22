import "../../../public/css/main.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MainRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
