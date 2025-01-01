import { useState } from "react";
import Sidebar from "~/components/Sidebar";
import Navbar from "~/components/Navbar";

export function Welcome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <section className="lg:flex h-screen">
        <Sidebar isToggled={isMenuOpen} />
        <main className="flex-1 bg-gray-100 p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Name</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Email</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 border-b border-gray-300">John Doe</td>
                  <td className="px-6 py-4 border-b border-gray-300">john@example.com</td>
                  <td className="px-6 py-4 border-b border-gray-300">Admin</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gray-300">Jane Smith</td>
                  <td className="px-6 py-4 border-b border-gray-300">jane@example.com</td>
                  <td className="px-6 py-4 border-b border-gray-300">User</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </section>
    </>
  );
}

