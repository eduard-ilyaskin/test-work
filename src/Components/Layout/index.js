import { Footer } from "../Footer";
import { Header } from "../Header";

export function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="my-20">{children}</main>
      <Footer />
    </>
  );
}
