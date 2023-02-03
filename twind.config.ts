import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";
import { theme } from "./lib/design/theme.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      ...theme,
    },
  },
  preflight: {
    // Import external stylesheet
    "@import": `url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap')`,
    // Declare font face
    "@font-face": [
      {
        fontFamily: "Inter",
        fontWeight: "400",
        src: 'url(/fonts/inter/400-regular.woff) format("woff")',
      },
      {
        fontFamily: "Inter",
        fontWeight: "500",
        src: 'url(/fonts/inter/500-medium.woff) format("woff")',
      },
    ],
  },
} as Options;
