export function Navbar() {
  return (
    <div className="flex flex-row justify-between w-full items-center">
      <img
        src="/orangeLogo.svg"
        class="w-12 h-12"
        alt="the orange logo: a simple orange"
      />
      <div class="flex flex-row gap-x-[8px]">
        <div className="flex flex-col gap-y-[4px] hover:cursor-pointer">
          <p className="text-black hover:text-orange-500 transition-all">
            Movies!
          </p>
        </div>
      </div>
    </div>
  );
}
