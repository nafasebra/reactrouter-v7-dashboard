import { useState } from "react";
import Sidebar from "~/components/Sidebar";
import Navbar from "~/components/Navbar";

function ParentLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <section className="lg:flex">
        <Sidebar isToggled={isMenuOpen} />
        <main className="flex-1 bg-gray-100 p-6 min-h-screen">
          {children}
        </main>
      </section>
    </>
  );
}

export default ParentLayout;
