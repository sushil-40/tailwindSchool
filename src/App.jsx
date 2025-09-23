import "./App.css";
import UserCard from "./components/Challenge/UserCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaTwitter,
  FaShare,
  FaRegComment,
} from "react-icons/fa";
import { FcLike } from "react-icons/fc";
function App() {
  const userData = {
    name: "CodingLab",
    role: "YouTuber & Blogger",
    profileImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop",
    socialMedia: [
      {
        name: "facebook",
        icon: FaFacebook,
        className: "text-blue-600 hover:text-blue-800",
      },
      {
        name: "instagram",
        icon: FaInstagramSquare,
        className: "text-pink-500 hover:text-pink-700",
      },
      {
        name: "youtube",
        icon: FaYoutube,
        className: "text-red-600 hover:text-red-800",
      },
      {
        name: "twitter",
        icon: FaTwitter,
        className: "text-sky-500 hover:text-sky-700",
      },
    ],
    stats: [
      { name: "like", icon: FcLike, count: 60.4, className: "text-red-500" },
      {
        name: "comment",
        icon: FaRegComment,
        count: 20,
        className: "text-blue-500",
      },
      {
        name: "share",
        icon: FaShare,
        count: 12.4,
        className: "text-green-500",
      },
    ],
    buttons: [
      { label: "Subscribe", onClick: () => alert("Subscribed!") },
      { label: "Message", onClick: () => alert("Message sent!") },
    ],
  };

  return (
    <>
      <Header />
      <UserCard user={userData} />

      <Hero />
      <Footer />
    </>
  );
}

export default App;
