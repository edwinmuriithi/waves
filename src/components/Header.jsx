import Banner from "./shared/Banner";
import PageHeader from "./shared/Header";

const Navbar = () => {
  return (
    <div className="absolute top-0 z-50 w-full">
      {/* Top Contact Bar */}
      <Banner />

      {/* Main Navbar */}
      <PageHeader />
    </div>
  );
};

export default Navbar;
