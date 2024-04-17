import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata = {
  title: "라이브러리 테스트: Clerk",
  description: "beyond.ZERO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="ko">
        <body className="bg-white">{children}</body>
      </html>
    </ClerkProvider>
  );
}
