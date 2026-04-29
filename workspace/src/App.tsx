import PlantForm from "./plant-form/PlantForm.tsx";
import { Panel, Tab, TabBar } from "./shared/TabBarCompound.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";
import PlantList from "./plant-liste/PlantList.tsx";

export default function App() {
  return (
    <div className={"AppContainer"}>
      <TabBar>
        <Tab tabId="liste" >Pflanzen Liste</Tab>
        <Tab tabId="form" >Pflanze anlegen</Tab>

        <ErrorBoundary fallback={<div>ERROR!!!!!</div>}>
          <Panel tabId="liste" >
              <PlantList />
          </Panel>

          <Panel tabId="form" >
            <PlantForm />
          </Panel>

        </ErrorBoundary>
      </TabBar>


      <ReactQueryDevtools />
    </div>
  );
}
