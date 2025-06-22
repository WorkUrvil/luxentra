import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata = {
  title: "Luxentra - Premium Tech Accessories",
  description: "Elevating Your Tech Experience with Premium Accessories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {/* Navigation */}
        <Navbar />
        {/* Main Content */}
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
