import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/app/Pages/home/page"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-slate-200 flex justify-center items-center">
      <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
      </div>
    </div>
  ),
});
const page = () => {
  return (
    <>
      <div style={{ display: "none" }}>
        <script src="/_next/static/chunks/pages/home/page.js" defer></script>
      </div>
      <Home />
      {/* <ShopPage/> */}
    </>
  );
};

export default page;
