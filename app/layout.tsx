import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Switch card</title>
        <link rel="icon" type="image/x-icon" href="/favicon.io" />
        <meta name="description" content="Switch card" />
      </head>
      <body
        className={inter.className}
        style={{ padding: "0px", margin: "0px" }}
      >
        {children}
      </body>
    </html>
  );
}
