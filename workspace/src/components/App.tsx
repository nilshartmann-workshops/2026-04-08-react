import { Panel, Tab, TabBar } from "./TabBar.tsx";
import PlantList from "./PlantList.tsx";
import PlantForm from "./PlantForm.tsx";
import { useState } from "react";

export default function App() {
  const [tabId, setTabId] = useState("liste");
  return (
    <div className={"AppContainer"}>
      <TabBar>
        <Tab tabId="liste" activeTabId={tabId} onTabChange={(tabId) => setTabId(tabId)}>Pflanzen Liste</Tab>
        <Tab tabId="form" activeTabId={tabId} onTabChange={(tabId) => setTabId(tabId)}>Pflanze anlegen</Tab>

        <Panel tabId="liste" activeTabId={tabId}>
          <PlantList />
        </Panel>

        <Panel tabId="form" activeTabId={tabId}>
          <PlantForm />
        </Panel>
      </TabBar>
    </div>
  );
}
