import { Panel, Tab, TabBar } from "./TabBar.tsx";
import PlantList from "./PlantList.tsx";
import PlantForm from "./PlantForm.tsx";
import { ReactNode, useState } from "react";

type TabDescription = Array<{
  title: string;
  component: ReactNode
}>

export default function App() {
  const [tabId, setTabId] = useState("liste");

  const tabDescription = [
    {title: "Pflanzen", icon: <Icon />,  component: <PlantList />},
    {title: "Pflanze hinzufügen", component: <PlantForm />},
  ];

  return (
    <div className={"AppContainer"}>
      <TabBar>
        <Tab tabId="liste" activeTabId={tabId} onTabChange={(tabId) => setTabId(tabId)}>Pflanzen Liste </Tab>
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

type TabBarNeuProps = {
  descriptions: TabDescription[]
}

function DefaultTabBar({descriptions}: TabBarNeuProps) {

  <TabBar>
    {descriptions.map(x => <Tab />
    {descriptions.map(x => <Panel />
  </TabBar>

}
