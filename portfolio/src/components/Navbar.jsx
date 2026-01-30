import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">SHIBIN's Portfolio</h1>

      <ul className="flex gap-6 text-sm font-medium">
        <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
        <li><Link to="/skills" className="hover:text-blue-400">Skills</Link></li>
        <li><Link to="/project" className="hover:text-blue-400">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
      </ul>
    </nav>
  );
}
