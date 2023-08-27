import Demographic from "@/components/Demographic";
import UserInfo from "@/components/UserInfo";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="grid place-items-center h-screen -mt-24">
      <p></p>
      {/* <UserInfo /> */}
      <Navbar />
      <Demographic />
    </div>
  );
}
