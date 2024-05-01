import Footer from "../components/Footer";

export default function DefaultLayout({ children }) {
  return (
    <div className="w-screen flex flex-col items-center px-4 md:px-8 lg:px-24 gap-12 md:gap-20 lg:gap-32 py-4 mt-12  md:mt-28 lg:mt-24 ">
      {children}
      <Footer />
    </div>
  );
}
