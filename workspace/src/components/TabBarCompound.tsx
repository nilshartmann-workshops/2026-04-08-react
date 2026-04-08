import { createContext, ReactNode, useContext, useEffect, useState } from "react";

/**
 * TabBarCompound
 *
 * Verwendung (gewünschtes Ergebnis):
 *
 *   <TabBarCompound>
 *     <Tab tabId="list">Pflanzen</Tab>
 *     <Tab tabId="form">Neue Pflanze</Tab>
 *
 *     <Panel tabId="list">
 *       <PlantList />
 *     </Panel>
 *     <Panel tabId="form">
 *       <PlantForm />
 *     </Panel>
 *   </TabBarCompound>
 *
 * - ZIEL:
 *   - Tab und Panel brauchen keine activeTabId/onTabChange-Props mehr
 *   - Sie lesen diese Werte direkt aus einem React Context
 *   - TabBarCompound verwaltet den State und stellt ihn über den Context bereit
 * - TODO:
 *   - Definiere den Context-Typ und erstelle den Context
 *   - Implementiere TabBarCompound mit internem State und Context.Provider
 *   - Implementiere Tab und Panel so, dass sie den Context konsumieren
 */

type TabBarContextValue = {
  activeTabId: string;
  onTabChange(activeTabId: string): void
};

const TabBarContext = createContext<TabBarContextValue|null>(null);

// Custom Hook
function useTabBarContext() {
  const tabBarContext = useContext(TabBarContext)

  if (tabBarContext === null) {
    throw new Error("Invalid context usage");
  }

  return tabBarContext;
}

type TabBarCompoundProps = {
  children: ReactNode;
};

export function TabBar({ children }: TabBarCompoundProps) {

  const [tabId, setTabId] = useState("liste");
  //                        ^^^  Hook-Funktion

  const contextValue: TabBarContextValue = {
    activeTabId: tabId,
    onTabChange: setTabId
  }


  return <div className="TabBar">
    <TabBarContext value={contextValue}>{children}</TabBarContext>
  </div>;
}

type TabProps = {
  tabId: string;
  children: ReactNode;
};

/**
 * Tab
 *
 * Ein einzelner Tab-Button in der Navigationsleiste.
 * Liest activeTabId und onTabChange aus dem Context.
 */
export function Tab({ tabId, children }: TabProps) {

  const { activeTabId, onTabChange } = useTabBarContext();

  const isActive = activeTabId === tabId;

  return (
    <button
      onClick={() => onTabChange(tabId)}
      className={"Tab"}
      disabled={isActive}
    >
      {children}
    </button>
  );
}

type PanelProps = {
  tabId: string;
  children: ReactNode;
};

/**
 * Panel
 *
 * Inhalt der zu einem Tab gehört.
 * Liest activeTabId aus dem Context.
 */
export function Panel({ tabId, children }: PanelProps) {

  const ctx = useTabBarContext();

  if (ctx.activeTabId !== tabId) {
    return null;
  }

  return <div className="TabPanel">{children}</div>;
}
