import type { Metadata } from "next";
import {Poppins } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { Providers as ReactQueryProvider } from "@/providers/reactQuery-provider";
import { Footer, Header } from "@/shared/layout";
import "@/shared/scss/index.scss";


const poppinps = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pharma UZ",
  description: "PHARMA UZ",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${poppinps.className}`}
        suppressHydrationWarning
      >
        <ReactQueryProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            {children}
            <Footer/>
          </NextIntlClientProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
