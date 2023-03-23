import { HandlerContext } from "$fresh/server.ts";

const APIKey = "a571e8330d1a405bbf4abb549965e80e";

export const handler: Handlers = {
  async GET(req) {
    const geoCoding = `https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=${APIKey}&include=minutely`;
    const resp = await fetch(geoCoding);
    if (resp.status === 404) {
      return new Response(null);
    }
    const user = await resp.json();
    console.log(user);
    return new Response(user);
  },
};
