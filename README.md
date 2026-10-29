[README.md](https://github.com/user-attachments/files/34128185/README.md)
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
- **Catàleg en PDF** de les peces que es veuen en pantalla.
- **Com arribar-hi** (enllaç a Google Maps) i enllaç a àudio o vídeo, per a les peces que en tinguin.
- **Edició múltiple**: canviar un camp (autor, sèrie, ubicació…) de moltes peces alhora.
- **Historial de canvis** amb possibilitat de desfer.
- **Dos nivells d'accés**: editor (pot modificar) i només lectura.
- **Funciona sense connexió** i es pot instal·lar al mòbil com una app (PWA).
- **Exportació** a CSV i a còpia de seguretat JSON, i importació de la còpia.
- Secció **Coneix l'autor**, amb biografia i vídeo.

## Com es fa servir

1. Obre l'adreça de la web i toca **Entrar**.
2. Escriu el teu nom (queda registrat a l'historial) i la contrasenya que t'hagin donat.
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

## Actualitzar la web

1. A GitHub, **Add file → Upload files**.
2. Arrossega els fitxers que han canviat (si un fitxer té el mateix nom que un altre, el substitueix).
3. **Commit changes** i espera un parell de minuts.
4. Si es canvia alguna cosa de l'aplicació, cal pujar també `service-worker.js` perquè els mòbils detectin la versió nova.

## Privacitat i seguretat

- Les fitxes i les fotografies viuen a Firebase i només es poden veure entrant amb contrasenya, llevat de la fitxa individual que s'obre amb un QR.
- Les dades de valor o assegurança es guarden a part i només les veu l'editor.
- La web porta una marca perquè els cercadors no l'indexin.
- No s'han de pujar mai a aquest repositori contrasenyes, còpies de seguretat ni fitxers amb dades de les peces.

## Crèdits

- Fotografia de la portada: © Rafael López-Monné / Tarragona Turisme.
- Text biogràfic de l'autor: [Viquipèdia](https://ca.wikipedia.org/wiki/Antoni_Mas_Castelltort), sota llicència CC BY-SA.
- Vídeo *El ferrer del meu poble*, a [Vimeo](https://vimeo.com/542240274).
