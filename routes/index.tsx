import { Head } from "$fresh/runtime.ts";
import { Navbar } from "../components/Navbar/index.tsx";
import Search from "../islands/Search.tsx";

const APIKey = "2f15633c5f4de79696cd67b3a29d2f26";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.includes(query));
    return ctx.render({ results, query });
  },
};

export default function Home({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
      </Head>
      <div className="flex flex-col gap-y-[80px] p-4 bg-green-500 min-h-screen items-center">
        <Navbar />
        <div className="flex flex-col gap-y-[16px] font-inter items-center">
          <h1 className="text-lg text-violet-200 text-bold">WEATHER VERIFY</h1>
          <Search />
        </div>
        <p>
          {results.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </p>
      </div>
    </>
  );
}
