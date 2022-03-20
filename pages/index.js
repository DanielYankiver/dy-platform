import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-gray-900 w-full h-screen text-white">
      <Header />
      <div>Should this just be the about section?</div>
    </div>
  );
}
