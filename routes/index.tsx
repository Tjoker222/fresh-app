import { Head } from "$fresh/runtime.ts";
import { Navbar } from "../components/Navbar/index.tsx";
import Search from "../islands/Search.tsx";
import Preview from "../islands/Preview.tsx";

const APIKey = "f2ac32f228e24b49870223747232303";

const baseURL = "http://api.weatherapi.com/v1";
interface Data {
  results: {
    location: {
      name: string;
      region: string;
      country: string;
      localtime: string;
    };
    current: {
      temp_c: string;
      condition: {
        text: string;
        icon: string;
      };
      humidity: number;
      feelslike_c: number;
    };
  };
  queryLocation: string;
}

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const queryLocation = url.searchParams.get("q") || "";
    const weatherResponse = `${baseURL}/current.json?key=${APIKey}&q=${queryLocation}&aqi=no`;
    let results = [];
    if (queryLocation !== "") {
      const resp = await fetch(weatherResponse);
      if (resp.status === 404) {
        return new Response(null);
      }
      const res = await resp.json();
      results = res;
    }
    return ctx.render({ results, queryLocation });
  },
};

export default function Home({ data }: PageProps<Data>) {
  const { results, queryLocation } = data;
  return (
    <>
      <Head>
        <title>Weather Verify</title>
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
      </Head>
      <div className="flex flex-col gap-y-2xl p-4 bg-green-500 min-h-screen items-center">
        <Navbar />
        <div className="flex flex-col gap-y-base font-inter items-center">
          <h1 className="text-lg text-violet-200 text-bold">WEATHER VERIFY</h1>
          <Search />
        </div>
        <Preview data={results} />
      </div>
    </>
  );
}
