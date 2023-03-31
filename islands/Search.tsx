import { useState } from "preact/hooks";
import { Input } from "../components/Input.tsx";

interface SearchProps {
  start: number;
}

export default function Search(props: SearchProps) {
  const [count, setCount] = useState(props.start);
  return (
    <form className="flex flex-row sm:p-4 p-2 outline-none rounded-[1rem] sm:w-[30rem] font-inter bg-white items-center">
      <Input type="text" name="q" placeholder="Type the place in english" />
      <button type="submit">
        <i class="ph-bold ph-magnifying-glass" />
      </button>
    </form>
  );
}
