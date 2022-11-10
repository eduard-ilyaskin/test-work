import { TabsContext } from "./context";

export function Tabs({ value, onChange, children }) {
  return (
    <TabsContext.Provider value={{ value, onChange }}>
      <div className="flex gap-1">{children}</div>
    </TabsContext.Provider>
  );
}

export { Tab } from "./Tab";
