import PlantList from "./PlantList.tsx";
import PlantForm from "./PlantForm.tsx";
import { useState } from "react";
import { Panel, Tab, TabBar } from "./TabBarCompound.tsx";

export default function App() {
  return (
    <div className={"AppContainer"}>
      <TabBar>
        <Tab tabId="liste" >Pflanzen Liste</Tab>
        <Tab tabId="form" >Pflanze anlegen</Tab>

        <Panel tabId="liste" >
          <PlantList />
        </Panel>

        <Panel tabId="form" >
          <PlantForm />
        </Panel>
      </TabBar>
    </div>
  );
}
