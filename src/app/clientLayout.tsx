"use client";

import { Provider } from "react-redux";
import { store } from "@/app/store";
import { Footer, Header } from "@/app/components";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  return (
    <Provider store={store}>
      <div
        className={"flex flex-col items-center min-h-dvh w-full h-max relative"}
      >
        <Header />

        <main
          className={`flex justify-center flex-grow ${isMainPage ? "" : "pt-20"} w-full overflow-x-hidden`}
        >
          {isMainPage ? (
            children
          ) : (
            <div className={"max-w-limitation w-full"}>{children}</div>
          )}
        </main>

        <Footer />
      </div>
    </Provider>
  );
}
