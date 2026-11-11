# Les peces del ferrer

Catàleg i inventari de l'obra escultòrica d'**Antoni Mas Castelltort**, ferrer i escultor de Vila-seca.

És una aplicació web per a ús familiar: permet consultar, documentar i compartir cada peça (fotografies, dades tècniques, història) des del mòbil, la tauleta o l'ordinador, amb els canvis sincronitzats entre tots els dispositius.

> **Accés privat.** L'aplicació demana contrasenya. Aquest repositori només conté el codi de la pàgina; les fitxes i les fotografies **no** hi són.

## Què fa

- **Catàleg visual** amb sis vistes, com l'Explorador de Windows: icones molt grans, grans, mitjanes, mosaic, llista i detalls.
- **Fitxa de cada peça**: fotografia, títol, any, tècnica, dimensions, estat de conservació, situació, ubicació i observacions.
- **Fitxa completa** amb la foto en gran, fotos de detall o del procés i un text amb la història de la peça.
- **Sèries o col·leccions**, amb filtre i cerca.
- **Codi QR per a cada peça**: qui l'escaneja veu només la fitxa d'aquella peça, sense contrasenya i sense poder modificar res. També es poden imprimir les etiquetes.
- **Línia del temps** de les obres per any.
- **Catàleg en PDF** de les peces que es veuen en pantalla: es descarrega com a fitxer (al mòbil es pot compartir o desar a Fitxers) o s'imprimeix des de l'ordinador. No inclou la ubicació ni la propietat.
- **Com arribar-hi** (enllaç a Google Maps) i enllaç a àudio o vídeo, per a les peces que en tinguin.
- **Edició múltiple**: canviar un camp (autor, sèrie, ubicació…) de moltes peces alhora.
- **Historial de canvis** amb possibilitat de desfer.
- **Tres nivells d'accés**: catàleg públic sense contrasenya (fotos, títols, dates, tècnica i història), lectura per a la família i editor, aquests dos amb la seva contrasenya.
- **Funciona sense connexió** i es pot instal·lar al mòbil com una app (PWA).
- **Exportació i importació** de l'inventari en Excel.
- Secció **Coneix l'autor**, amb biografia i vídeo.
- **Còpia de seguretat completa** (editor): fitxes, fotos, valoracions, historial, préstecs, restauracions, documents i històries; es pot restaurar.
- **Cerca avançada** per text, sèrie, any, estat, ubicació i situació, amb comptador de resultats.
- **Escàner QR** amb la càmera per obrir directament la fitxa d'una peça.
- **Revisió d'inventari**: peces verificades, absents o prestades, amb data i informe de pendents.
- **Préstecs** i **restauracions** amb avisos de retorns i de revisions de conservació.
- **Històries** de cada peça (des de l'accés de lectura se'n poden proposar; l'editor les aprova) i **documents privats** (certificats, factures, taxacions).
- **Estadístiques** per sèrie, dècada, estat, tècnica i situació, i **mapa** de les obres (Leaflet + OpenStreetMap).
- **Preferències**: català o castellà, aparença clara/fosca, mida de la lletra, efectes i so d'enclusa opcional.
- Ambient de **forja**: espurnes, resplendor, targetes amb relleu 3D, visor de fotos amb zoom (en mòbils els efectes es redueixen).

## Com es fa servir

1. Obre l'adreça de la web i toca **Entrar**.
2. Tria **Accés d'editor** o **Accés de lectura**, escriu el teu nom (queda registrat a l'historial) i la contrasenya que t'hagin donat.
3. Toca una peça per veure'n la fitxa. Els editors poden tocar **Edita** o el botó **+** per afegir-ne de noves.
4. Per instal·lar-la al mòbil, usa el botó **Instal·la l'app al mòbil** del final de la pàgina.

## Tecnologia

- HTML, CSS i JavaScript sense frameworks, en una sola pàgina (`index.html`).
- [Firebase](https://firebase.google.com/) (Firestore i Authentication) per guardar les dades i sincronitzar-les.
- [GitHub Pages](https://pages.github.com/) per publicar la web.
- Service worker i `manifest.json` per al mode sense connexió i la instal·lació.

## Fitxers

| Fitxer | Per a què serveix |
|---|---|
| `index.html` | L'aplicació sencera |
| `fitxa.html` | Fitxa pública d'una peça (la que s'obre amb el QR) |
| `firebase-bundle.js` | Connexió amb Firebase i generador de QR |
| `service-worker.js` | Mode sense connexió i actualitzacions |
| `manifest.json` | Dades per instal·lar l'app |
| `portada.jpg` | Fotografia de la portada |
| `icons/` | Icones de l'aplicació |
| `robots.txt` | Demana als cercadors que no la indexin |
| `forja.js` | Preferències i efectes visuals |
| `i18n.js` | Traducció de la interfície al castellà |
| `firestore.rules` | Regles de seguretat de Firestore (s'han de publicar a la consola de Firebase) |

## Actualitzar la web

1. A GitHub, **Add file → Upload files**.
2. Arrossega els fitxers que han canviat (si un fitxer té el mateix nom que un altre, el substitueix).
3. **Commit changes** i espera un parell de minuts.
4. Si es canvia alguna cosa de l'aplicació, cal pujar també `service-worker.js` perquè els mòbils detectin la versió nova.
5. Si canvia `firestore.rules`, pujar-lo a GitHub no n'hi ha prou: cal copiar-ne el contingut a Firebase Console → Firestore Database → Regles i publicar-lo.

## Privacitat i seguretat

- Les fitxes i les fotografies viuen a Firebase i només es poden veure entrant amb contrasenya, llevat de la fitxa individual que s'obre amb un QR.
- Sense contrasenya es pot veure el catàleg públic i la fitxa de cada QR. Proposar històries i enviar suggeriments demana sessió.
- Les dades de valor o assegurança es guarden a part i només les veu l'editor.
- La ubicació actual, la propietat, les observacions i la situació de cada peça es guarden a part: només es veuen amb contrasenya (editor o família), mai al catàleg públic. S'activa des d'**Administració → Dades internes**, i cal fer-ho **abans** de publicar les regles que obren el catàleg públic.
- Els comptes d'accés (`editor@escultures.app` i `lectura@escultures.app`) es creen a Firebase Console → Authentication. El registre de comptes nous ha d'estar desactivat.
- La web porta una marca perquè els cercadors no l'indexin.
- No s'han de pujar mai a aquest repositori contrasenyes, còpies de seguretat ni fitxers amb dades de les peces.

### Ordre per publicar canvis d'accés o de regles

1. Fer una **còpia de seguretat** des de l'app.
2. Crear el compte `lectura@escultures.app` (si encara no existeix) **abans** de publicar les regles.
3. Desactivar el registre de comptes nous (Authentication → Settings → User actions).
4. Pujar els fitxers a GitHub.
5. Publicar `firestore.rules` a Firebase Console.
6. A l'app, com a editor: **Administració → Dades internes** per protegir la ubicació i la propietat.

## Crèdits

- Fotografia de la portada: © Rafael López-Monné / Tarragona Turisme.
- Text biogràfic de l'autor: [Viquipèdia](https://ca.wikipedia.org/wiki/Antoni_Mas_Castelltort), sota llicència CC BY-SA.
- Vídeo *El ferrer del meu poble*, a [Vimeo](https://vimeo.com/542240274).
