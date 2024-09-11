import { Suspense } from "react";

import Logo from "@/components/Logo";
import Search from "@/components/Search";
import HeaderNav from "@/components/HeaderNav";
import CartButton from "@/components/cart/CartButton";
import AccountButton from "@/components/account/AccountButton";

import ButtonOpenMobileNav from "@/components/ButtonOpenMobileNav";

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

      <ButtonOpenMobileNav />
    </header>
  );
}
