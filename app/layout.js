import "./globals.css";
import Header from "@/app/components/header/header";
import HeaderBackground from "@/app/components/header/headerBackground";
export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderBackground />
        <Header />
        {children}
      </body>
    </html>
  );
}
