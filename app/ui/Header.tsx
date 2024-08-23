import { Suspense } from "react";
import { IoMenu } from "react-icons/io5";

import Logo from "@/app/ui/Logo";
import Search from "@/app/ui/Search";
import HeaderNav from "@/app/ui/HeaderNav";
import CartButton from "@/app/ui/cart/CartButton";
import AccountButton from "@/app/ui/account/AccountButton";

export default function Header() {
  return (
    <header className="grid grid-cols-[0.6fr_0.4fr] md:grid-cols-[auto_1fr_auto] xl:grid-cols-[auto_1fr_auto_auto] items-center gap-6 md:gap-y-8 max-width mx-auto padding-x py-5">
      <Logo />

      <div className="col-start-[-2] flex items-end gap-6 justify-self-end">
        <CartButton />
        <AccountButton />
      </div>

      <Suspense>
        <Search placeholder="Search products..." />
      </Suspense>

      <HeaderNav />

      <button className="justify-self-end md:hidden">
        <IoMenu className="h-10 w-10 text-primary" />
      </button>
    </header>
  );
}
