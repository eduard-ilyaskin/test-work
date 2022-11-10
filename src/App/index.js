import { Layout } from "../Components/Layout";

import { ActiveCodeSection } from "./ActiveCodeSection";
import { CreditStatusSection } from "./CreditStatusSection";

export default function App() {
  return (
    <Layout>
      <ActiveCodeSection />
      <CreditStatusSection />
    </Layout>
  );
}
