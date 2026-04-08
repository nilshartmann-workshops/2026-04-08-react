# TabBar – Variante 3: Compound Components (Context)

## Dateien

- `src/components/TabBarCompound.tsx` (neu anlegen)
- `src/components/App.tsx`

## Aufgabe

Implementiere eine dritte Variante der `TabBar` als **Compound Component** mit React Context.

Der Unterschied zu den vorherigen Varianten: `Tab` und `Panel` brauchen **keine** `activeTabId`- oder `onTabChange`-Props mehr. Sie lesen diese Werte direkt aus einem React Context heraus.

- `TabBarCompound` erstellt einen Context und stellt `activeTabId` sowie `onTabChange` darin bereit
- `Tab` und `Panel` konsumieren den Context mit `useContext`
- Das Ergebnis ist die sauberste Konsumenten-API der drei Varianten – keine Props müssen "durchgereicht" werden

Das gewünschte Ergebnis in `App.tsx`:

```tsx
<TabBarCompound>
  <Tab tabId="list">Pflanzen</Tab>
  <Tab tabId="form">Neue Pflanze</Tab>
  <Panel tabId="list"><PlantList /></Panel>
  <Panel tabId="form"><PlantForm /></Panel>
</TabBarCompound>
```

## Schritte

1. Kopiere `TabBarRenderProp.tsx` nach `TabBarCompound.tsx` als Ausgangsbasis
2. Erstelle einen Context mit `createContext` – der Context-Wert soll `activeTabId` und `onTabChange` enthalten
3. Implementiere `TabBarCompound`: verwalte `activeTabId` intern per `useState` und umschließe `children` mit dem `Context.Provider`
4. Passe `Tab` und `Panel` an: entferne `activeTabId`/`onTabChange` aus den Props und lese diese Werte stattdessen aus dem Context mit `useContext`
5. Ersetze in `App.tsx` die bisherige `TabBarRenderProp`-Verwendung durch `TabBarCompound`

**Hinweis:** Es ist eine gute Praxis, einen eigenen kleinen Hook zu schreiben (z.B. `useTabBar()`), der `useContext` aufruft und einen Fehler wirft, wenn er außerhalb des Providers verwendet wird. Das macht Fehler leichter erkennbar.

## Material

- React
  - `createContext` und `useContext`: https://react.dev/learn/passing-data-deeply-with-context
  - Context mit TypeScript: https://react.dev/learn/passing-data-deeply-with-context#use-cases-for-context
- TypeScript
  - Generics bei `createContext<T>`: https://www.typescriptlang.org/docs/handbook/2/generics.html

--------------------------
```typescript jsx
src/components/TabBarCompound.tsx

import { ReactNode } from "react";

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

// todo: Definiere einen Typ für den Context-Wert
//   - activeTabId: string
//   - onTabChange: Funktion die eine tabId entgegennimmt
type TabBarContextValue = {};

// todo: Erstelle den Context mit createContext
//   - Erlaubte Werte: TabBarContextValue | null
//   - null ist der initiale Wert (kein aktiver Tab außerhalb von TabBarCompound)
//   -

/**
* Interner Hook für Tab und Panel.
* Wirft einen Fehler, wenn er außerhalb von TabBarCompound verwendet wird
*  (also wenn useContext null oder undefined zurückliefert)
   */
   function useTabBar() {}

type TabBarCompoundProps = {
children: ReactNode;
};

/**
* TabBarCompound
*
* Äußerer Container der Tab-Navigation.
* Verwaltet den aktiven Tab-Zustand und stellt ihn über einen Context bereit.
  */
  export function TabBarCompound({ children }: TabBarCompoundProps) {
  // todo:
  // - Lege einen internen State für activeTabId an
  // - Umschließe children mit <TabBarContext.Provider value={...}>

return <div className="TabBar">{children}</div>;
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
  // todo: Lese activeTabId und onTabChange aus dem Context (useTabBar)
  const activeTabId = "todo: aus dem context lesen";
  const onTabChange: any = null; // todo: onTabChange aus dem Context verwenden ('any' entfernen)

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
  // todo: Lese activeTabId aus dem Context
  const activeTabId = "todo!";

if (activeTabId !== tabId) {
return null;
}

return <div className="TabPanel">{children}</div>;
}

```
