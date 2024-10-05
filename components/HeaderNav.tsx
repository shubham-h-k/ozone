import NavLinks from "@/components/NavLinks";

export default function HeaderNav() {
  return (
    <nav className="col-span-full hidden md:flex gap-10 justify-self-center text-sm font-bold  xl:col-span-1 xl:col-start-2 xl:row-start-1 xl:translate-x-[10%]">
      <ul className="flex gap-6">
        <NavLinks />
      </ul>
    </nav>
  );
}
