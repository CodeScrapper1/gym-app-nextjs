import Banner from "@/components/home/Banner";
import LatestBlogs from "@/components/home/LatestBlogs";
import Serivces from "@/components/home/Serivces";
import TrailSession from "@/components/home/TrailSession";
export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
      <Serivces />
      <LatestBlogs />
      <TrailSession />
    </div>
  );
}
