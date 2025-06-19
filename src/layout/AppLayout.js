import Header from "./Header";
import Footer from "./Footer";

function Applayout({ children }) {
  return (
    <>
      <Header />
      <div className="container mt-4">
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Applayout;