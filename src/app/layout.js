import "./globals.css";
import Sidebar from "./sidebar/sidebar";

export const metadata = {
  title: "Customer App",
  description: "Customer Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <main className="ml-64 w-full p-8 bg-gray-50 min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
