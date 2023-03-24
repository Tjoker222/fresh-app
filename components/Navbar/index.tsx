export function Navbar() {
  return (
    <div className="flex flex-row justify-start w-full items-center px-[25rem]">
      <div className="flex flex-row gap-x-[1rem] items-center">
        <p className="font-inter text-white">Made in Fre$h</p>
        <img
          src="/logo.svg"
          class="w-12 h-12"
          alt="the orange logo: a simple orange"
        />
      </div>
    </div>
  );
}
