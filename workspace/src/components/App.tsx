import { Panel, Tab, TabBar } from "./TabBar.tsx";
import PlantList from "./PlantList.tsx";
import PlantForm from "./PlantForm.tsx";
import { Fragment, ReactNode, useState } from "react";

export default function App() {

  // Render Props

  return (
    <div className={"AppContainer"}>
      <TabBar>
        {(activeTabId, onTabChange ) => {
          return <>
          <Tab tabId="liste" activeTabId={activeTabId} onTabChange={onTabChange}>Pflanzen Liste</Tab>
          <Tab tabId="form" activeTabId={activeTabId} onTabChange={onTabChange}>Pflanze anlegen</Tab>

          <Panel tabId="liste" activeTabId={activeTabId}>
            <PlantList />
          </Panel>

          <Panel tabId="form" activeTabId={activeTabId}>
            <PlantForm />
          </Panel>
        </>
    }}
    </TabBar>

    </div>
  );
}
