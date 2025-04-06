import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/app/ClientLayout";
import { SITE_NAME } from "@/constants";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "AI-crafted photos that look stunning, professional, and sell more.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
