export function Navbar() {
  const navLinks = [
    { name: "Docs" },
    { name: "Showcase" },
    { name: "Components" },
    { name: "Discord" },
  ];
  return (
    <div className="flex flex-row justify-between w-full items-center px-[25rem]">
      <div className="flex flex-row gap-x-[1rem] items-center">
        <p className="font-inter text-white">Made in Fre$h</p>
        <img
          src="/logo.svg"
          class="w-12 h-12"
          alt="the orange logo: a simple orange"
        />
      </div>
      <div className=" flex flex-row gap-x-lg">
        {navLinks.map((nav) => (
          <div className="group flex flex-col gap-y-[0.05rem] hover:cursor-pointer">
            <p className="font-inter text-black">{nav.name}</p>
            <div className="w-0 group-hover:w-full h-[0.01rem] bg-black ease-in duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
