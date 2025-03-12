"use client";

import { Provider } from "react-redux";
import { store } from "@/app/store";
import { CustomCursor, Footer, Header, Loader } from "@/app/components";
import React from "react";
import { usePathname } from "next/navigation";
import useLenis from "@/app/hooks/useLenis";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  useLenis(false);

  return (
    <Provider store={store}>
      <div
        className={`flex flex-col items-center ${isMainPage ? "" : "bg-black"} min-h-dvh w-full h-max relative`}
      >
        <Header />

        <CustomCursor />

        <Loader />

        <main className={`flex justify-center flex-grow w-full`}>
          {children}
        </main>

        <Footer />
      </div>
    </Provider>
  );
}
