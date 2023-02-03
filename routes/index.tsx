import { Head } from "$fresh/runtime.ts";
import { Navbar } from "../components/Navbar/index.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div className="flex flex-col gap-y-[80px] p-4 bg-green-500 min-h-screen items-center">
        <Navbar />
        <div className="flex flex-col gap-y-[16px] font-inter">
          <h1 className="text-lg text-violet-200 text-bold">FRESH</h1>
          <p>
            Welcome to a website made in fresh.
          </p>
        </div>
      </div>
    </>
  );
}
