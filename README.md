# React Workshop

Dieses Repository enthält unseren Workspace, in dem wir während der React Schulung Übungen machen.

> [!IMPORTANT]  
> Bitte führe die Installationsanleitung unbedingt **einige Tage vor** dem Workshop aus, damit wir sicher sind,
> dass es keine (unlösbaren) technischen Probleme während der Schulung gibt.

# Technische Voraussetzungen

Für den Workshop brauchst du:

- **einen Editor oder eine IDE**
  - wenn du bei der Arbeit bereits eine IDE verwendest, die JavaScript- und TypeScript-Support bietet, kannst du diese auch im Workshop verwenden
    - abgesehen von JavaScript/TypeScript-Unterstützung gibt es keine weiteren Anforderungen an IDE/Editor
    - im würde nicht empfehlen, während der Schulung eine für dich neue IDE/Editor auszuprobieren, sondern deine bekannten Tools bereits JavaScript- und TypeScript-Support anbieten
  - bei JetBrain IDEs (IntelliJ oder Webstorm) bitte darauf achten, dass du eine **Version von mindestens 2025** verwendest (sonst funktioniert TypeScript nicht richtig)
  - in jedem Fall empfehle ich, in der IDE die **KI-Unterstützung auszuschalten** (Copilot, AI Assistant, etc.).
    - bei einer Schulung sind die die Vorschläge meistens eher irritierend denn hilfreich
    - außerdem ist der Sinn der Schulung ja gerade, dass wir Code selbst schreiben, um zu lernen, und uns den Code nicht schreiben lassen...
- **Node.js (mind. Version 24.x)**
  - wir benötigen mindestens die **Node.js-Version 24.x**. Das ist die aktuelle "long-term support" (LTS) Version von Node.js (also die aktuelle "stabile" Version).
    - Node.js kannst du hier für alle Betriebssystem runterladen und installieren: https://nodejs.org/en/download
    - Wenn Node.js bei dir installiert ist, kannst du mit `node -v` die Version ausgeben und überprüfen
  - enthalten in der Node.js-Installation ist der Node Package Manager (**npm**), den wir zur Installation der JavaScript Packages verwenden
    - Auch hier kannst du die installierte Version überprüfen: `npm -v` (bei mir zzt. 11.x)
- **einen Git-Client**
  - damit du das Repository klonen kannst
- **einen Webbrowser**
- **Intenetzugang und Berechtigungen**
  - Du musst auf deinem Computer mit npm Pakete installieren können (dürfen)
  - Du musst dieses Git Repository klonen können (dürfen)
  - Du musst auf deinem Computer Node.js ausführen können (dürfen)
  - Wenn du an der Schulung nicht in deiner "gewohnten" Umgebung teilnimmst, denk dran, zu prüfen, ob es **Einschränkungen bzgl. VPN, Firewall etc.** gibt
- **Weitere Informationen**
  - siehe Dokument [Vorbereitung auf das React-Seminar](https://gist.github.com/nilshartmann/6a581328d48540f2663541df9b3eca94)

# Installation

## Repository-Struktur

Nach dem Klonen des Repositories (s.u.) findest du zwei Verzeichnisse in dem geklonten Repository:

- `backend`: eine kleine, in Node.js geschriebene Anwendungen, die das Backend mit einer REST API für unsere Anwendung zur Verfügung stellt. In diesem Verzeichnis machen wir keine Änderungen, wir starten nur das Backend, das sich darin befindet.
- `workspace`: hierin befindet sich unsere React-Anwendung (bzw. der Ausgangspunkt davon). Hierin werden wir im wesentlichen Arbeiten und Übungen machen.

Wir arbeiten nur im Verzeichnis `workspace`. Deshalb bitte **nur dieses** Verzeichniss in deiner IDE öffnen (**nicht** das _ganze_ Repository)

- In IntelliJ oder Webstorm kannst du das `workspace`-Verzeichnis nach dem Klonen jeweils mit `File -> Open` auswählen und dann öffnen

> [!IMPORTANT]  
> Bitte führe die untenstehenden Schritte für alle drei Verzeichnisse **vor der Schulung** aus, damit wir sicher sind, dass alles bei der Schulung funktioniert.
> Gerade fehlende Berechtigungen, eingeschränkter Internet-Zugang (im Schulungsraum) etc. lassen sich während der Schulung meist nicht kurzfristig beheben.

## Schritt 1: Klonen des Repositories

- Bitte dieses Repository von GitHub klonen: https://github.com/nilshartmann-workshops/2026-04-08-react

## Schritt 2: Backend

- Im Verzeichnis `backend` die JavaScript Packages installieren:
  - ```bash
    cd backend
    npm install
    ```
- Dieses Verzeichnis brauchst du _nicht_ in deiner IDE zu öffnen, da wir hier keine Änderungen machen.

## Schritt 3: Frontend

- Im Verzeichnis `workspace` die Packages installieren:
  - ```bash
    cd workspace
    npm install
    ```
- Während der Schulung musst du dieses Verzeichnis in deiner IDE öffnen. Wir werden nur hier in diesem Verzeichnis arbeiten.

# Starten der React-Anwendung (zum Prüfen, ob alles funktioniert)

Nach der Installation der Packages prüfe bitte, ob die Installation geklappt hat und alles funktioniert.

## Schritt 1: Starten des Backends

- Während der Schulung benötigen wir das Backend, um daraus Daten zu lesen und zu schreiben (REST API)
- Das Backend läuft auf Port **7200**, d.h. dieser Port muss bei dir frei sein.
- Zum Starten im `backend`-Verzeichnis `npm start` verwenden
  - ```bash
      cd backend
      npm start
    ```
- Zum Testen kannst du im Browser (oder per curl, wget etc.) aufrufen: http://localhost:7200/api/plants
  - Es sollte eine Liste von JSON-Objekten zurückkommen.

### Schritt 2: Starten des Frontends

- Das Frontend läuft auf Port **3000**, d.h. dieser Port muss bei dir frei sein.
- Zum Starten im `workspace`-Verzeichnis `npm run dev` verwenden
  - ```bash
      cd workspace
      npm run dev
    ```
- Nun sollte eine leere Anwendung im Browser zu sehen sein, die den String "todo" ausgibt.

- Du kannst Backend und Frontend jetzt bis zur Schulung wieder beenden :-)

## Bei Fragen und Problemen

Wenn du Fragen oder Probleme bei der Installation hast, kannst du mich gerne kontakieren. Meine Kontaktdaten findest du hier: https://nilshartmann.net/kontakt

Ich wünsche dir viel Spaß und Erfolg bei unserem Workshop!
