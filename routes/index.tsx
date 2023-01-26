import { Head } from "$fresh/runtime.ts";
import { Navbar } from "../components/Navbar/index.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div className="p-4 flex flex-col gap-y-[80px] mx-auto max-w-screen-md">
        <Navbar />
        <div className="flex flex-col gap-y-[16px]">
          <h1>Orange</h1>
          <p>
            Welcome to orange. The website of ours favorite arts.
          </p>
        </div>
      </div>
    </>
  );
}
