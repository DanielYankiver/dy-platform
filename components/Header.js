import Link from "next/link";

export default function Header() {
  
  return (
    <nav className="text-gray-500 flex items-center flex-wrap bg-gray-800 p-3 ">
      <Link href="/">
        <a>
          <img src="/dy-logo.png" className="w-16 " />
        </a>
      </Link>
      <div className="m-2">About</div>
      <div className="m-2">Portfolio</div>
      <div className="m-2">Skills & Links</div>
      <div className="m-2">Contact</div>
      <button className="w-20 h-8 bg-gray-600 text-gray-900 absolute right-5 rounded-md">Resume</button>
    </nav>
  );
}
