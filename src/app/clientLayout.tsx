"use client";

import { Provider } from "react-redux";
import { store } from "@/app/store";
import { Footer, Header } from "@/app/components";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <div
        className={"flex flex-col items-center min-h-dvh w-full h-max relative"}
      >
        <Header />

        <main
          className={
            "flex justify-center flex-grow py-20 w-full overflow-x-hidden"
          }
        >
          <div className={"max-w-limitation w-full"}>{children}</div>
        </main>

        <Footer />
      </div>
    </Provider>
  );
}
