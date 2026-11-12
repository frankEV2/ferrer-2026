/* Les peces del ferrer — contingut dels tutorials (català i castellà).
   PER ACTUALITZAR-LOS: només cal editar aquest fitxer. Cada tutorial té capítols; cada capítol, seccions.
   Camps d'una secció (tots opcionals menys «h»):
     h = títol · p = per a què serveix · w = on es troba · s = passos numerats · l = llista de punts · c = precaucions
   Dins dels textos, **text** es mostra com un botó o nom de la pantalla. No facis servir fletxes ni símbols
   especials (→ ✓ ★): el PDF només admet lletres llatines. Si afegeixes una funció a l'app, afegeix-la als dos
   idiomes (ca i es) i, si cal, als dos tutorials.
   Estructura: TUTORIALS.ui[idioma], TUTORIALS.books[editor|family][idioma]. */
window.TUTORIALS = {
ui: {
  ca: {
    menu:'Tutorials', lang:'Idioma del tutorial', pick:'Tria el tutorial', toc:'Índex', pdf:'Descarregar PDF', pdfBusy:'Preparant el PDF…',
    pdfDone:'PDF llest', save:'Descarregar el PDF', share:'Compartir o desar…', saved:'PDF descarregat',
    why:'Per a què serveix', where:'On és', steps:'Pas a pas', care:'Precaucions', points:'Punts clau', chapter:'Capítol', page:'Pàgina',
    cover:'Guia de l\'aplicació', edition:'Edició del', index:'Índex', err:'No s\'ha pogut generar el PDF. La primera vegada cal connexió a internet.',
    open:'Obre tot', close:'Tanca tot', back:'Torna a l\'índex', foot:'LES PECES DEL FERRER · ANTONI MAS CASTELLTORT', ed:'Editor', fam:'Família'
  },
  es: {
    menu:'Tutoriales', lang:'Idioma del tutorial', pick:'Elige el tutorial', toc:'Índice', pdf:'Descargar PDF', pdfBusy:'Preparando el PDF…',
    pdfDone:'PDF listo', save:'Descargar el PDF', share:'Compartir o guardar…', saved:'PDF descargado',
    why:'Para qué sirve', where:'Dónde está', steps:'Paso a paso', care:'Precauciones', points:'Puntos clave', chapter:'Capítulo', page:'Página',
    cover:'Guía de la aplicación', edition:'Edición del', index:'Índice', err:'No se ha podido generar el PDF. La primera vez hace falta conexión a internet.',
    open:'Abrir todo', close:'Cerrar todo', back:'Volver al índice', foot:'LAS PIEZAS DEL HERRERO · ANTONI MAS CASTELLTORT', ed:'Editor', fam:'Familia'
  }
},
books: {

/* ====================================================================== EDITOR ====== */
editor: {
ca: {
  name:'Tutorial de l\'editor', title:'Guia completa de l\'editor', sub:'Les peces del ferrer',
  intro:'Aquesta guia explica, pas a pas, les eines que té l\'editor: consultar el catàleg, crear i corregir fitxes, gestionar fotografies, codis QR, inventari, històries i còpies de seguretat. Només descriu funcions que existeixen a l\'aplicació.',
  chapters:[
  { t:'Accés i permisos', secs:[
    { h:'Entrar com a editor', p:'Identificar-te perquè l\'aplicació et deixi modificar el catàleg.', w:'Pantalla de portada, botó **Accedir al catàleg**.',
      s:['Obre l\'adreça de la web i toca **Accedir al catàleg**.','Tria **Accés d\'editor**.','Escriu el teu nom (queda registrat a l\'historial de canvis) i la contrasenya d\'editor.','Toca **Entrar**. Si t\'has equivocat de tipus d\'accés, toca **Enrere**.'],
      c:['No comparteixis la contrasenya d\'editor: qui la tingui pot modificar i eliminar peces.'] },
    { h:'Els tres nivells d\'accés', p:'Saber qui pot veure i fer què.', w:'Pantalla d\'entrada.',
      l:['**Veure el catàleg** (sense contrasenya): visitant. Veu fotos, títols, dates, tècnica i història, però no la ubicació, la propietat, les observacions ni la situació.','**Accés de lectura (família)**: consulta tot el catàleg amb contrasenya, sense poder editar, crear ni eliminar. Pot proposar històries i enviar suggeriments.','**Accés d\'editor**: tot el que explica aquesta guia.'] },
    { h:'Tancar la sessió', p:'Sortir de l\'aplicació, sobretot en dispositius compartits.', w:'Final de la pàgina, botó **Tancar sessió**.',
      s:['Baixa fins al final de la pàgina (pots usar el botó de la fletxa avall).','Toca **Tancar sessió**.'] }
  ]},
  { t:'Pantalla principal i navegació', secs:[
    { h:'La capçalera', p:'Veure d\'un cop d\'ull l\'estat del catàleg i trobar peces.', w:'Part superior de la pàgina.',
      l:['El punt al costat del títol indica l\'estat de la sincronització.','La barra fina mostra el percentatge de peces mostrades que ja estan documentades.','Sota hi ha el cercador, el desplegable de filtre, **Filtres**, **Vista** i el botó per escanejar un codi QR.','Les pestanyes **Totes**, **Escultures**, **Figures festives** i **Ceptres** separen el catàleg per categories.'],
      c:['Abans d\'operacions delicades (protegir dades, restaurar còpies) espera que l\'indicador de sincronització estigui en verd.'] },
    { h:'Menú del peu de pàgina', p:'Accedir a les eines que no són a la capçalera.', w:'Final de la pàgina.',
      l:['**Suggeriments**: formulari per enviar una proposta.','**Consulta**: Cronologia, Estadístiques, Control de QR, Mapa de les obres, Biografia de l\'autor i Tutorials.','**Documentació i exportació**: Catàleg en PDF, Imprimir catàleg, Etiquetes QR, Còpia de seguretat i, només per a l\'editor, Exportar Excel, Importar Excel i Restaurar còpia.','**Administració** (només editor): Suggeriments rebuts, Històries pendents, Revisió d\'inventari, Préstecs i conservació, Dades internes i Registre de canvis.','**Preferències**, **Instal·lar l\'aplicació** i **Tancar sessió**.','Els botons de fletxa a la vora de la pantalla porten al principi o al final de la pàgina.'] }
  ]},
  { t:'El catàleg i les vistes', secs:[
    { h:'Canviar la vista del catàleg', p:'Veure les peces com més t\'convingui: fotos grans o una llista compacta.', w:'Botó **Vista**, sota el cercador.',
      s:['Toca **Vista**.','Tria una de les sis vistes: icones molt grans, grans, mitjanes, mosaic, llista o detalls.'],
      l:['Les obres destacades i les preferides apareixen en seccions pròpies a sobre del catàleg.'] },
    { h:'Obrir una fitxa i passar d\'una a una altra', p:'Consultar totes les dades d\'una peça.', w:'Tocant qualsevol targeta.',
      s:['Toca la targeta de la peça: s\'obre la fitxa.','Fes servir **Anterior** i **Següent** per moure\'t per les peces que es mostren (segons cerca i filtres).','Toca **Fitxa completa** per veure la foto en gran, les fotos de detall i la història de la peça.','Toca **Tanca** per tornar al catàleg.'],
      l:['A la fitxa també hi ha **Compartir** (envia o copia l\'enllaç de la peça) i, si la peça té adreça o enllaç, **Com arribar-hi** (Google Maps) i **Àudio de la peça**.'] }
  ]},
  { t:'Cerca i filtres', secs:[
    { h:'Cercador', p:'Trobar peces escrivint part del títol, autor, material o ubicació.', w:'Caixa de cerca a la capçalera.',
      s:['Escriu al quadre de cerca: la llista es filtra mentre escrius.','Esborra el text per tornar a veure-ho tot.'] },
    { h:'Filtre ràpid i panell Filtres', p:'Limitar el catàleg per estat o per dades concretes.', w:'Desplegable al costat del cercador i botó **Filtres**.',
      s:['Al desplegable tria: Totes, Pendents de completar, Ja documentades, Sense foto, Preferides, Amb etiqueta QR o Sense etiqueta QR.','Toca **Filtres** per obrir el panell: els botons d\'estat mostren quantes peces hi ha a cada grup.','Al mateix panell pots filtrar per sèrie, conservació, ubicació, situació i per any (des de / fins a).','Un comptador mostra quantes peces compleixen els filtres. Torna a triar «Totes» per treure\'ls.'],
      l:['Els filtres d\'ubicació i situació només els veuen els comptes amb contrasenya.'] }
  ]},
  { t:'Crear i editar fitxes', secs:[
    { h:'Afegir una peça nova', p:'Donar d\'alta una escultura a l\'inventari.', w:'Botó rodó **+** a la vora de la pantalla.',
      s:['Toca el botó **+**: s\'obre «Nova peça».','Escriu el número d\'inventari (**Núm.**) i omple els camps que coneguis: títol, autor, sèrie, tipus, any, tècnica, dimensions, conservació, situació, ubicació, lloc per veure-la, propietat, enllaç d\'àudio o vídeo, observacions i història.','Si vols, afegeix la fotografia (vegeu el capítol de fotografies).','Toca **Desa**.'],
      c:['El número d\'inventari identifica la peça i no es pot canviar després; revisa\'l abans de desar.','Els camps que escriguis mostren suggeriments dels valors que ja existeixen (autor, sèrie, tipus, tècnica, ubicació i propietat): triar-los evita variants del mateix nom.'] },
    { h:'Editar una fitxa', p:'Corregir o completar les dades d\'una peça.', w:'Fitxa de la peça, botó **Edita** (a dalt a la dreta).',
      s:['Obre la fitxa de la peça.','Toca **Edita**.','Canvia els camps necessaris. El camp **Valor / assegurança** només el veu l\'editor.','Toca **Desa**.'],
      l:['Cada canvi queda registrat a l\'historial amb el teu nom, i es pot desfer (vegeu el capítol de l\'historial).'] },
    { h:'Eliminar una peça', p:'Retirar de l\'inventari una fitxa que no ha de ser-hi.', w:'Final del formulari d\'edició, botó **Elimina aquesta peça**.',
      s:['Obre la fitxa en mode **Edita**.','Toca **Elimina aquesta peça** i després **Elimina** per confirmar (o **Cancel·la**).'],
      c:['La peça s\'amaga de l\'inventari; es pot recuperar des de l\'historial de canvis.'] }
  ]},
  { t:'Fotografies', secs:[
    { h:'Fotografia principal', p:'Posar o canviar la imatge que representa la peça.', w:'Formulari d\'edició de la fitxa.',
      s:['Obre la fitxa amb **Edita** (o crea una peça nova).','Toca **Fer foto** per usar la càmera del dispositiu o **Triar de la galeria** per escollir una imatge existent.','Revisa la vista prèvia i toca **Desa**.','Per treure-la, toca **Treure la fotografia** i desa.'] },
    { h:'Fotos de detall i del procés', p:'Afegir més imatges de la mateixa peça (fins a 6).', w:'Secció «Fotos de detall i del procés» del formulari.',
      s:['A la fitxa en mode **Edita**, toca **+ Afegeix fotos** i tria una o diverses imatges.','Toca **Desa**.'],
      l:['A la fitxa, les miniatures permeten canviar la foto gran, i tocant la foto s\'obre el visor amb zoom.'],
      c:['Les fotos es desen dins de la base de dades: fes servir imatges de mida raonable.'] }
  ]},
  { t:'Sèries, categories i obres destacades', secs:[
    { h:'Sèries i categories', p:'Agrupar les peces en col·leccions i en grans famílies.', w:'Camps **Sèrie / col·lecció** i **Tipus** de la fitxa; pestanyes de categories a la capçalera.',
      l:['La **sèrie** és un text lliure; serveix per filtrar al panell **Filtres**.','Les categories (**Escultures**, **Figures festives**, **Ceptres**) no es trien a mà: l\'aplicació les dedueix del text de **Tipus** i **Sèrie** (si hi surt «ceptre» és Ceptres; «festiu» o «bestiari», Figures festives; la resta, Escultures).'],
      c:['Escriu sempre igual el nom d\'una sèrie o d\'un tipus; si no, es comptarà com una de diferent.'] },
    { h:'Marcar una obra destacada', p:'Fer que una peça surti a la secció d\'obres destacades.', w:'Fitxa de la peça, botó **Destacar**.',
      s:['Obre la fitxa de la peça.','Toca **Destacar**; el botó passa a **Destacada**.','Per treure-la, toca-la un altre cop.'] }
  ]},
  { t:'Ubicació, propietat i dades internes', secs:[
    { h:'Ubicació, situació i propietat', p:'Saber on és cada peça, en quin estat d\'ús i de qui és.', w:'Camps **Ubicació actual**, **Situació** (al taller, exposada, cedida, venuda, magatzem, obra pública), **Propietat** i **Lloc per veure-la**.',
      s:['Obre la fitxa en mode **Edita**.','Omple els camps. El camp **Lloc per veure-la** (adreça o poble) activa el botó **Com arribar-hi** a la fitxa.','Toca **Desa**.'],
      l:['El **Mapa de les obres** (menú **Consulta**) mostra les peces que tenen lloc.'] },
    { h:'Protegir les dades internes', p:'Que ningú sense contrasenya pugui llegir la ubicació, la propietat, les observacions ni la situació.', w:'**Administració > Dades internes**.',
      s:['Obre **Administració > Dades internes** i llegeix els comptadors.','Si la pantalla diu que encara no es pot activar, cal publicar abans les regles de Firestore a la consola de Firebase.','Toca el botó de protecció i, quan ho demani, torna-hi a tocar per confirmar.'],
      c:['Abans de canviar res es descarrega una còpia de seguretat completa. Cal connexió i que no hi hagi canvis pendents de sincronitzar.','Aquest procés s\'ha de fer abans de publicar les regles que obren el catàleg públic.'] }
  ]},
  { t:'Edició múltiple', secs:[
    { h:'Canviar un camp de moltes peces alhora', p:'Estalviar feina quan cal posar el mateix valor a diverses peces (autor, sèrie, tipus, any, tècnica, conservació, situació, ubicació, propietat).', w:'Panell **Filtres > Selecció múltiple**.',
      s:['Toca **Filtres** i després **Selecció múltiple**.','Toca les targetes de les peces (o **Totes**). Un comptador mostra quantes n\'has marcat.','Toca **Edita…**.','Omple només els camps que vulguis canviar; els que deixis en blanc no es toquen.','Confirma. Surt un avís amb quantes peces han canviat.','Per sortir sense canviar res, toca la **X** de la barra de selecció.'],
      c:['Revisa el nombre de peces seleccionades abans d\'aplicar el canvi. Si t\'equivoques, el podràs desfer des de l\'historial.'] }
  ]},
  { t:'Codis QR i «QR generat»', secs:[
    { h:'Veure, imprimir i descarregar el QR d\'una peça', p:'Tenir l\'etiqueta QR que porta cap a la fitxa pública de la peça.', w:'Fitxa de la peça, botó **Codi QR**.',
      s:['Obre la fitxa i toca **Codi QR**.','Revisa el codi i l\'adreça que mostra.','Toca **Imprimir etiqueta** o **Descarregar PNG**.','Toca **Tornar a la fitxa** per sortir.'],
      l:['Qui escaneja el QR veu només la fitxa pública d\'aquella peça, sense contrasenya i sense poder modificar res.'] },
    { h:'Marcar «QR generat»', p:'Portar el control de quines peces ja tenen l\'etiqueta feta i quines estan pendents.', w:'Pantalla **Codi QR** de cada peça; també a la icona QR de les targetes.',
      s:['Obre **Codi QR** a la fitxa.','Toca el botó **QR generat / QR pendent** per canviar l\'estat; es guarda a l\'instant.','També pots tocar la icona QR d\'una targeta del catàleg (apareix en passar-hi el ratolí; al mòbil sempre és visible).'],
      l:['Marcar-ho és una anotació manual: no depèn d\'haver imprès o descarregat el QR, que són accions independents.','El mateix estat es veu a la fitxa, a les targetes, als filtres **Amb QR** / **Sense QR** i a **Control de QR**.','Els usuaris de lectura només el poden consultar.'] },
    { h:'Control de QR', p:'Veure d\'un sol cop quines peces tenen el QR generat i quines estan pendents.', w:'Peu de pàgina > **Consulta** > **Control de QR**.',
      s:['Obre **Control de QR**: dalt hi ha els comptadors de total, generats i pendents.','Escriu al cercador un nom o un número d\'inventari, o tria **Totes**, **Generats** o **Pendents**.','Toca l\'estat d\'una fila (**Generat** / **Pendent**) per canviar-lo.','Toca la resta de la fila per obrir la fitxa de la peça.'] },
    { h:'Etiquetes QR i escàner', p:'Imprimir moltes etiquetes alhora i obrir una peça escanejant-ne el QR.', w:'**Documentació i exportació > Etiquetes QR** i botó d\'escàner a la capçalera.',
      s:['Toca **Etiquetes QR** per preparar les etiquetes de les peces (si són més de 12, demana confirmació) i imprimeix-les.','Per obrir una peça des del seu QR, toca el botó d\'escàner de la capçalera i apunta la càmera.'],
      c:['Imprimir les etiquetes no marca les peces com a «QR generat»: cal marcar-ho a mà.'] }
  ]},
  { t:'Inventari: revisió, préstecs i restauracions', secs:[
    { h:'Revisió d\'inventari', p:'Comprovar peça a peça que existeix i és al seu lloc.', w:'**Administració > Revisió d\'inventari**, i secció «Revisió d\'inventari» de cada fitxa.',
      s:['Obre **Revisió d\'inventari**: veuràs les peces verificades, absents, prestades i pendents, amb el percentatge revisat.','A cada peça pendent toca el botó de verificada o el d\'absent. També pots marcar l\'estat des de la fitxa: **Verificada**, **Absent** o **Prestada**.','Toca **Imprimir informe** o **Exportar CSV** per obtenir el resultat.','Toca **Comença una revisió nova** per tornar a deixar totes les peces pendents.'],
      c:['Una revisió nova torna a deixar totes les peces com a pendents; demana confirmació.'] },
    { h:'Préstecs', p:'Registrar a qui s\'ha deixat una peça i quan ha de tornar.', w:'Secció «Préstecs» de la fitxa; resum a **Administració > Préstecs i conservació**.',
      s:['A la fitxa, obre **+ Registra un préstec**.','Escriu destinatari, data de sortida, retorn previst i notes, i toca **Desa el préstec**.','Quan torni, toca **Marca com a retornat**.'],
      l:['Al resum veuràs els préstecs actius i els vençuts. En entrar, l\'app avisa dels préstecs vençuts o a punt de vèncer.'] },
    { h:'Restauració i conservació', p:'Deixar constància de les intervencions i planificar la propera revisió.', w:'Secció «Restauració i conservació» de la fitxa.',
      s:['A la fitxa, obre **+ Registra una intervenció**.','Tria la data i el tipus (neteja, tractament antioxidant, soldadura, pintura, revisió de conservació, altres), qui l\'ha feta i una descripció.','Indica la data de la **Propera revisió** i toca **Desa la intervenció**.'],
      l:['Les revisions properes o endarrerides apareixen a **Préstecs i conservació**.'] }
  ]},
  { t:'Històries, suggeriments i documents', secs:[
    { h:'Històries de cada peça', p:'Guardar anècdotes, autoria, encàrrecs o comentaris sobre una peça.', w:'Secció «Històries» de la fitxa.',
      s:['A la fitxa, obre **+ Afegeix una història, anècdota o comentari**.','Tria el tipus, escriu el text i qui ho explica.','Toca **Publica**: com a editor es publica directament.'],
      l:['Pots eliminar una història amb **Elimina**.'] },
    { h:'Històries pendents d\'aprovar', p:'Revisar les històries que proposa la família abans que es vegin.', w:'**Administració > Històries pendents**.',
      s:['Obre **Històries pendents**.','Llegeix cada proposta i toca **Aprova** per publicar-la o **Rebutja** per descartar-la.'],
      c:['Només es publica el que aproves.'] },
    { h:'Suggeriments rebuts', p:'Gestionar els suggeriments enviats des del peu de pàgina.', w:'**Administració > Suggeriments rebuts**.',
      s:['Obre **Suggeriments rebuts**; filtra per Pendents, Revisats, Resolts o Tots.','Canvia l\'estat de cada suggeriment o elimina\'l.'] },
    { h:'Documents privats', p:'Adjuntar certificats, factures o taxacions que només veu l\'editor.', w:'Secció «Documents privats» de la fitxa.',
      s:['A la fitxa, obre **+ Adjunta un document**.','Tria el tipus (certificat, factura, taxació, altres), un nom opcional i el fitxer (PDF o imatge, màxim 700 KB).','Toca **Desa el document**.'],
      c:['Els documents i el camp Valor / assegurança són privats: només l\'editor els veu.'] }
  ]},
  { t:'Favorits', secs:[
    { h:'Marcar peces preferides', p:'Tenir a mà les peces que consultes més sovint.', w:'Icona del cor a cada targeta.',
      s:['Toca el cor d\'una targeta (apareix en passar-hi el ratolí; al mòbil sempre és visible).','Les peces preferides surten a la secció **Preferides** i es poden filtrar amb **Preferides**.'],
      c:['Les preferides es guarden en aquest dispositiu i no es copien a les còpies de seguretat.'] }
  ]},
  { t:'Còpies de seguretat, Excel i PDF', secs:[
    { h:'Còpia de seguretat completa', p:'Tenir un fitxer amb tot el catàleg per si cal recuperar-lo.', w:'**Documentació i exportació > Còpia de seguretat**.',
      s:['Toca **Còpia de seguretat** i espera que es prepari.','Desa el fitxer en un lloc segur.'],
      l:['Inclou fitxes, fotos (també les de detall), valoracions i assegurances, historial, préstecs, restauracions, documents, històries, suggeriments i revisió d\'inventari. No inclou els comptes d\'accés ni les preferides.'] },
    { h:'Restaurar una còpia', p:'Recuperar dades d\'una còpia anterior.', w:'**Documentació i exportació > Restaurar còpia** (editor).',
      s:['Toca **Restaurar còpia** i tria el fitxer de la còpia.','Confirma quan ho demani.'],
      c:['Restaurar una còpia mai elimina escultures. Fes abans una còpia nova.'] },
    { h:'Exportar i importar Excel', p:'Treballar l\'inventari en un full de càlcul.', w:'**Documentació i exportació > Exportar Excel / Importar Excel** (editor).',
      s:['**Exportar Excel** descarrega el full «Inventari».','**Importar Excel** carrega un Excel amb el format de l\'inventari; l\'identificador de cada fila és el número.'],
      c:['Importar un Excel mai elimina escultures. Fes abans una còpia de seguretat.'] },
    { h:'Catàleg en PDF i impressió', p:'Obtenir un document del catàleg per guardar-lo o imprimir-lo.', w:'**Documentació i exportació > Catàleg en PDF** i **Imprimir catàleg**.',
      s:['Aplica els filtres si només vols algunes peces (el PDF recull les peces que es veuen).','Toca **Catàleg en PDF**; al mòbil pots compartir-lo o desar-lo a Fitxers.'],
      c:['El catàleg en PDF no inclou la ubicació ni la propietat.'] }
  ]},
  { t:'Historial de canvis i desfer', secs:[
    { h:'Registre de canvis', p:'Saber qui ha canviat què i quan, i desfer errors.', w:'**Administració > Registre de canvis**.',
      s:['Obre **Registre de canvis**: veus els últims 150 registres.','A un registre que es pugui desfer, toca **Desfés aquest canvi** i, a l\'avís, torna-hi a tocar per confirmar.'],
      l:['Es poden desfer edicions, i també recuperar una fitxa eliminada o amagar-ne una de creada per error.'],
      c:['L\'historial té una opció per esborrar-ne tots els registres: demana escriure ESBORRA i és definitiva. No la facis servir si no cal.'] }
  ]},
  { t:'Cronologia, estadístiques i mapa', secs:[
    { h:'Eines de consulta', p:'Veure el catàleg des d\'altres angles.', w:'Peu de pàgina > **Consulta**.',
      l:['**Cronologia**: les obres ordenades per any.','**Estadístiques**: peces per sèrie, dècada, estat de conservació, tècnica i situació.','**Mapa de les obres**: les peces que tenen lloc.','**Biografia de l\'autor**: biografia i vídeos.'] }
  ]},
  { t:'Preferències, instal·lació i sense connexió', secs:[
    { h:'Preferències', p:'Adaptar l\'aplicació a aquest dispositiu.', w:'Peu de pàgina > **Preferències**.',
      s:['Tria idioma (Català o Castellano), aparença (automàtica, clara o fosca), mida de la lletra, efectes de forja i so d\'enclusa.'],
      c:['Canviar l\'idioma recarrega l\'aplicació. Les preferències es desen en aquest dispositiu.'] },
    { h:'Instal·lar al mòbil i treballar sense connexió', p:'Fer servir l\'aplicació com una app i no perdre canvis si falla la xarxa.', w:'Peu de pàgina > **Instal·lar l\'aplicació**.',
      s:['Toca **Instal·lar l\'aplicació** (si el navegador ho permet) i segueix les instruccions que apareguin.'],
      l:['Els canvis es guarden al dispositiu i es sincronitzen amb el núvol quan hi ha connexió.'] }
  ]}
  ]
},

es: {
  name:'Tutorial del editor', title:'Guía completa del editor', sub:'Las piezas del herrero',
  intro:'Esta guía explica, paso a paso, las herramientas del editor: consultar el catálogo, crear y corregir fichas, gestionar fotografías, códigos QR, inventario, historias y copias de seguridad. Solo describe funciones que existen en la aplicación.',
  chapters:[
  { t:'Acceso y permisos', secs:[
    { h:'Entrar como editor', p:'Identificarte para que la aplicación te deje modificar el catálogo.', w:'Pantalla de portada, botón **Accedir al catàleg** (Acceder al catálogo).',
      s:['Abre la dirección de la web y toca **Acceder al catálogo**.','Elige **Acceso de editor**.','Escribe tu nombre (queda registrado en el historial de cambios) y la contraseña de editor.','Toca **Entrar**. Si te has equivocado de tipo de acceso, toca **Atrás**.'],
      c:['No compartas la contraseña de editor: quien la tenga puede modificar y eliminar piezas.'] },
    { h:'Los tres niveles de acceso', p:'Saber quién puede ver y hacer qué.', w:'Pantalla de entrada.',
      l:['**Ver el catálogo** (sin contraseña): visitante. Ve fotos, títulos, fechas, técnica e historia, pero no la ubicación, la propiedad, las observaciones ni la situación.','**Acceso de lectura (familia)**: consulta todo el catálogo con contraseña, sin poder editar, crear ni eliminar. Puede proponer historias y enviar sugerencias.','**Acceso de editor**: todo lo que explica esta guía.'] },
    { h:'Cerrar la sesión', p:'Salir de la aplicación, sobre todo en dispositivos compartidos.', w:'Final de la página, botón **Cerrar sesión**.',
      s:['Baja hasta el final de la página (puedes usar el botón de la flecha hacia abajo).','Toca **Cerrar sesión**.'] }
  ]},
  { t:'Pantalla principal y navegación', secs:[
    { h:'La cabecera', p:'Ver de un vistazo el estado del catálogo y encontrar piezas.', w:'Parte superior de la página.',
      l:['El punto junto al título indica el estado de la sincronización.','La barra fina muestra el porcentaje de piezas mostradas que ya están documentadas.','Debajo están el buscador, el desplegable de filtro, **Filtros**, **Vista** y el botón para escanear un código QR.','Las pestañas **Todas**, **Esculturas**, **Figuras festivas** y **Cetros** separan el catálogo por categorías.'],
      c:['Antes de operaciones delicadas (proteger datos, restaurar copias) espera a que el indicador de sincronización esté en verde.'] },
    { h:'Menú del pie de página', p:'Acceder a las herramientas que no están en la cabecera.', w:'Final de la página.',
      l:['**Sugerencias**: formulario para enviar una propuesta.','**Consulta**: Cronología, Estadísticas, Control de QR, Mapa de las obras, Biografía del autor y Tutoriales.','**Documentación y exportación**: Catálogo en PDF, Imprimir catálogo, Etiquetas QR, Copia de seguridad y, solo para el editor, Exportar Excel, Importar Excel y Restaurar copia.','**Administración** (solo editor): Sugerencias recibidas, Historias pendientes, Revisión de inventario, Préstamos y conservación, Datos internos y Registro de cambios.','**Preferencias**, **Instalar la aplicación** y **Cerrar sesión**.','Los botones de flecha del borde de la pantalla llevan al principio o al final de la página.'] }
  ]},
  { t:'El catálogo y las vistas', secs:[
    { h:'Cambiar la vista del catálogo', p:'Ver las piezas como más te convenga: fotos grandes o una lista compacta.', w:'Botón **Vista**, bajo el buscador.',
      s:['Toca **Vista**.','Elige una de las seis vistas: iconos muy grandes, grandes, medianos, mosaico, lista o detalles.'],
      l:['Las obras destacadas y las favoritas aparecen en secciones propias encima del catálogo.'] },
    { h:'Abrir una ficha y pasar de una a otra', p:'Consultar todos los datos de una pieza.', w:'Tocando cualquier tarjeta.',
      s:['Toca la tarjeta de la pieza: se abre la ficha.','Usa **Anterior** y **Siguiente** para moverte por las piezas que se muestran (según búsqueda y filtros).','Toca **Ficha completa** para ver la foto en grande, las fotos de detalle y la historia de la pieza.','Toca **Cerrar** para volver al catálogo.'],
      l:['En la ficha también hay **Compartir** (envía o copia el enlace de la pieza) y, si la pieza tiene dirección o enlace, **Cómo llegar** (Google Maps) y **Audio de la pieza**.'] }
  ]},
  { t:'Búsqueda y filtros', secs:[
    { h:'Buscador', p:'Encontrar piezas escribiendo parte del título, autor, material o ubicación.', w:'Caja de búsqueda en la cabecera.',
      s:['Escribe en el cuadro de búsqueda: la lista se filtra mientras escribes.','Borra el texto para volver a verlo todo.'] },
    { h:'Filtro rápido y panel Filtros', p:'Limitar el catálogo por estado o por datos concretos.', w:'Desplegable junto al buscador y botón **Filtros**.',
      s:['En el desplegable elige: Todas, Pendientes de completar, Ya documentadas, Sin foto, Favoritas, Con etiqueta QR o Sin etiqueta QR.','Toca **Filtros** para abrir el panel: los botones de estado muestran cuántas piezas hay en cada grupo.','En el mismo panel puedes filtrar por serie, conservación, ubicación, situación y por año (desde / hasta).','Un contador muestra cuántas piezas cumplen los filtros. Vuelve a elegir «Todas» para quitarlos.'],
      l:['Los filtros de ubicación y situación solo los ven las cuentas con contraseña.'] }
  ]},
  { t:'Crear y editar fichas', secs:[
    { h:'Añadir una pieza nueva', p:'Dar de alta una escultura en el inventario.', w:'Botón redondo **+** en el borde de la pantalla.',
      s:['Toca el botón **+**: se abre «Nueva pieza».','Escribe el número de inventario (**Núm.**) y rellena los campos que conozcas: título, autor, serie, tipo, año, técnica, dimensiones, conservación, situación, ubicación, lugar para verla, propiedad, enlace de audio o vídeo, observaciones e historia.','Si quieres, añade la fotografía (ver el capítulo de fotografías).','Toca **Guardar**.'],
      c:['El número de inventario identifica la pieza y no se puede cambiar después; revísalo antes de guardar.','Los campos que escribas muestran sugerencias de los valores que ya existen (autor, serie, tipo, técnica, ubicación y propiedad): elegirlos evita variantes del mismo nombre.'] },
    { h:'Editar una ficha', p:'Corregir o completar los datos de una pieza.', w:'Ficha de la pieza, botón **Editar** (arriba a la derecha).',
      s:['Abre la ficha de la pieza.','Toca **Editar**.','Cambia los campos necesarios. El campo **Valor / seguro** solo lo ve el editor.','Toca **Guardar**.'],
      l:['Cada cambio queda registrado en el historial con tu nombre y se puede deshacer (ver el capítulo del historial).'] },
    { h:'Eliminar una pieza', p:'Retirar del inventario una ficha que no debe estar.', w:'Final del formulario de edición, botón **Eliminar esta pieza**.',
      s:['Abre la ficha en modo **Editar**.','Toca **Eliminar esta pieza** y luego **Eliminar** para confirmar (o **Cancelar**).'],
      c:['La pieza se oculta del inventario; se puede recuperar desde el historial de cambios.'] }
  ]},
  { t:'Fotografías', secs:[
    { h:'Fotografía principal', p:'Poner o cambiar la imagen que representa la pieza.', w:'Formulario de edición de la ficha.',
      s:['Abre la ficha con **Editar** (o crea una pieza nueva).','Toca **Hacer foto** para usar la cámara del dispositivo o **Elegir de la galería** para escoger una imagen existente.','Revisa la vista previa y toca **Guardar**.','Para quitarla, toca **Quitar la fotografía** y guarda.'] },
    { h:'Fotos de detalle y del proceso', p:'Añadir más imágenes de la misma pieza (hasta 6).', w:'Sección «Fotos de detalle y del proceso» del formulario.',
      s:['En la ficha en modo **Editar**, toca **+ Añadir fotos** y elige una o varias imágenes.','Toca **Guardar**.'],
      l:['En la ficha, las miniaturas permiten cambiar la foto grande, y al tocar la foto se abre el visor con zoom.'],
      c:['Las fotos se guardan dentro de la base de datos: usa imágenes de tamaño razonable.'] }
  ]},
  { t:'Series, categorías y obras destacadas', secs:[
    { h:'Series y categorías', p:'Agrupar las piezas en colecciones y en grandes familias.', w:'Campos **Serie / colección** y **Tipo** de la ficha; pestañas de categorías en la cabecera.',
      l:['La **serie** es un texto libre; sirve para filtrar en el panel **Filtros**.','Las categorías (**Esculturas**, **Figuras festivas**, **Cetros**) no se eligen a mano: la aplicación las deduce del texto de **Tipo** y **Serie** (si aparece «ceptre» es Cetros; «festiu» o «bestiari», Figuras festivas; el resto, Esculturas).'],
      c:['Escribe siempre igual el nombre de una serie o de un tipo; si no, se contará como una distinta.'] },
    { h:'Marcar una obra destacada', p:'Hacer que una pieza aparezca en la sección de obras destacadas.', w:'Ficha de la pieza, botón **Destacar**.',
      s:['Abre la ficha de la pieza.','Toca **Destacar**; el botón pasa a **Destacada**.','Para quitarla, tócala otra vez.'] }
  ]},
  { t:'Ubicación, propiedad y datos internos', secs:[
    { h:'Ubicación, situación y propiedad', p:'Saber dónde está cada pieza, en qué situación y de quién es.', w:'Campos **Ubicación actual**, **Situación** (en el taller, expuesta, cedida, vendida, almacén, obra pública), **Propiedad** y **Lugar para verla**.',
      s:['Abre la ficha en modo **Editar**.','Rellena los campos. El campo **Lugar para verla** (dirección o pueblo) activa el botón **Cómo llegar** en la ficha.','Toca **Guardar**.'],
      l:['El **Mapa de las obras** (menú **Consulta**) muestra las piezas que tienen lugar.'] },
    { h:'Proteger los datos internos', p:'Que nadie sin contraseña pueda leer la ubicación, la propiedad, las observaciones ni la situación.', w:'**Administración > Datos internos**.',
      s:['Abre **Administración > Datos internos** y lee los contadores.','Si la pantalla dice que todavía no se puede activar, hay que publicar antes las reglas de Firestore en la consola de Firebase.','Toca el botón de protección y, cuando lo pida, vuelve a tocarlo para confirmar.'],
      c:['Antes de cambiar nada se descarga una copia de seguridad completa. Hace falta conexión y que no haya cambios pendientes de sincronizar.','Este proceso debe hacerse antes de publicar las reglas que abren el catálogo público.'] }
  ]},
  { t:'Edición múltiple', secs:[
    { h:'Cambiar un campo de muchas piezas a la vez', p:'Ahorrar trabajo cuando hay que poner el mismo valor en varias piezas (autor, serie, tipo, año, técnica, conservación, situación, ubicación, propiedad).', w:'Panel **Filtros > Selección múltiple**.',
      s:['Toca **Filtros** y luego **Selección múltiple**.','Toca las tarjetas de las piezas (o **Todas**). Un contador muestra cuántas has marcado.','Toca **Editar…**.','Rellena solo los campos que quieras cambiar; los que dejes en blanco no se tocan.','Confirma. Sale un aviso con cuántas piezas han cambiado.','Para salir sin cambiar nada, toca la **X** de la barra de selección.'],
      c:['Revisa el número de piezas seleccionadas antes de aplicar el cambio. Si te equivocas, podrás deshacerlo desde el historial.'] }
  ]},
  { t:'Códigos QR y «QR generado»', secs:[
    { h:'Ver, imprimir y descargar el QR de una pieza', p:'Tener la etiqueta QR que lleva a la ficha pública de la pieza.', w:'Ficha de la pieza, botón **Código QR**.',
      s:['Abre la ficha y toca **Código QR**.','Revisa el código y la dirección que muestra.','Toca **Imprimir etiqueta** o **Descargar PNG**.','Toca **Volver a la ficha** para salir.'],
      l:['Quien escanea el QR ve solo la ficha pública de esa pieza, sin contraseña y sin poder modificar nada.'] },
    { h:'Marcar «QR generado»', p:'Llevar el control de qué piezas ya tienen la etiqueta hecha y cuáles están pendientes.', w:'Pantalla **Código QR** de cada pieza; también en el icono QR de las tarjetas.',
      s:['Abre **Código QR** en la ficha.','Toca el botón **QR generado / QR pendiente** para cambiar el estado; se guarda al instante.','También puedes tocar el icono QR de una tarjeta del catálogo (aparece al pasar el ratón; en el móvil siempre es visible).'],
      l:['Marcarlo es una anotación manual: no depende de haber impreso o descargado el QR, que son acciones independientes.','El mismo estado se ve en la ficha, en las tarjetas, en los filtros **Con QR** / **Sin QR** y en **Control de QR**.','Los usuarios de lectura solo pueden consultarlo.'] },
    { h:'Control de QR', p:'Ver de una vez qué piezas tienen el QR generado y cuáles están pendientes.', w:'Pie de página > **Consulta** > **Control de QR**.',
      s:['Abre **Control de QR**: arriba están los contadores de total, generados y pendientes.','Escribe en el buscador un nombre o un número de inventario, o elige **Todas**, **Generados** o **Pendientes**.','Toca el estado de una fila (**Generado** / **Pendiente**) para cambiarlo.','Toca el resto de la fila para abrir la ficha de la pieza.'] },
    { h:'Etiquetas QR y escáner', p:'Imprimir muchas etiquetas a la vez y abrir una pieza escaneando su QR.', w:'**Documentación y exportación > Etiquetas QR** y botón de escáner en la cabecera.',
      s:['Toca **Etiquetas QR** para preparar las etiquetas de las piezas (si son más de 12, pide confirmación) e imprímelas.','Para abrir una pieza desde su QR, toca el botón de escáner de la cabecera y apunta la cámara.'],
      c:['Imprimir las etiquetas no marca las piezas como «QR generado»: hay que marcarlo a mano.'] }
  ]},
  { t:'Inventario: revisión, préstamos y restauraciones', secs:[
    { h:'Revisión de inventario', p:'Comprobar pieza a pieza que existe y está en su sitio.', w:'**Administración > Revisión de inventario**, y sección «Revisión de inventario» de cada ficha.',
      s:['Abre **Revisión de inventario**: verás las piezas verificadas, ausentes, prestadas y pendientes, con el porcentaje revisado.','En cada pieza pendiente toca el botón de verificada o el de ausente. También puedes marcar el estado desde la ficha: **Verificada**, **Ausente** o **Prestada**.','Toca **Imprimir informe** o **Exportar CSV** para obtener el resultado.','Toca **Empezar una revisión nueva** para dejar de nuevo todas las piezas pendientes.'],
      c:['Una revisión nueva deja todas las piezas como pendientes; pide confirmación.'] },
    { h:'Préstamos', p:'Registrar a quién se ha prestado una pieza y cuándo debe volver.', w:'Sección «Préstamos» de la ficha; resumen en **Administración > Préstamos y conservación**.',
      s:['En la ficha, abre **+ Registrar un préstamo**.','Escribe destinatario, fecha de salida, devolución prevista y notas, y toca **Guardar el préstamo**.','Cuando vuelva, toca **Marcar como devuelto**.'],
      l:['En el resumen verás los préstamos activos y los vencidos. Al entrar, la app avisa de los préstamos vencidos o a punto de vencer.'] },
    { h:'Restauración y conservación', p:'Dejar constancia de las intervenciones y planificar la próxima revisión.', w:'Sección «Restauración y conservación» de la ficha.',
      s:['En la ficha, abre **+ Registrar una intervención**.','Elige la fecha y el tipo (limpieza, tratamiento antioxidante, soldadura, pintura, revisión de conservación, otros), quién la ha hecho y una descripción.','Indica la fecha de la **Próxima revisión** y toca **Guardar la intervención**.'],
      l:['Las revisiones próximas o atrasadas aparecen en **Préstamos y conservación**.'] }
  ]},
  { t:'Historias, sugerencias y documentos', secs:[
    { h:'Historias de cada pieza', p:'Guardar anécdotas, autoría, encargos o comentarios sobre una pieza.', w:'Sección «Historias» de la ficha.',
      s:['En la ficha, abre **+ Añadir una historia, anécdota o comentario**.','Elige el tipo, escribe el texto y quién lo cuenta.','Toca **Publicar**: como editor se publica directamente.'],
      l:['Puedes eliminar una historia con **Eliminar**.'] },
    { h:'Historias pendientes de aprobar', p:'Revisar las historias que propone la familia antes de que se vean.', w:'**Administración > Historias pendientes**.',
      s:['Abre **Historias pendientes**.','Lee cada propuesta y toca **Aprobar** para publicarla o **Rechazar** para descartarla.'],
      c:['Solo se publica lo que apruebas.'] },
    { h:'Sugerencias recibidas', p:'Gestionar las sugerencias enviadas desde el pie de página.', w:'**Administración > Sugerencias recibidas**.',
      s:['Abre **Sugerencias recibidas**; filtra por Pendientes, Revisadas, Resueltas o Todas.','Cambia el estado de cada sugerencia o elimínala.'] },
    { h:'Documentos privados', p:'Adjuntar certificados, facturas o tasaciones que solo ve el editor.', w:'Sección «Documentos privados» de la ficha.',
      s:['En la ficha, abre **+ Adjuntar un documento**.','Elige el tipo (certificado, factura, tasación, otros), un nombre opcional y el archivo (PDF o imagen, máximo 700 KB).','Toca **Guardar el documento**.'],
      c:['Los documentos y el campo Valor / seguro son privados: solo el editor los ve.'] }
  ]},
  { t:'Favoritos', secs:[
    { h:'Marcar piezas favoritas', p:'Tener a mano las piezas que consultas más a menudo.', w:'Icono del corazón en cada tarjeta.',
      s:['Toca el corazón de una tarjeta (aparece al pasar el ratón; en el móvil siempre es visible).','Las piezas favoritas salen en la sección **Favoritas** y se pueden filtrar con **Favoritas**.'],
      c:['Las favoritas se guardan en este dispositivo y no se incluyen en las copias de seguridad.'] }
  ]},
  { t:'Copias de seguridad, Excel y PDF', secs:[
    { h:'Copia de seguridad completa', p:'Tener un archivo con todo el catálogo por si hay que recuperarlo.', w:'**Documentación y exportación > Copia de seguridad**.',
      s:['Toca **Copia de seguridad** y espera a que se prepare.','Guarda el archivo en un lugar seguro.'],
      l:['Incluye fichas, fotos (también las de detalle), valoraciones y seguros, historial, préstamos, restauraciones, documentos, historias, sugerencias y revisión de inventario. No incluye las cuentas de acceso ni las favoritas.'] },
    { h:'Restaurar una copia', p:'Recuperar datos de una copia anterior.', w:'**Documentación y exportación > Restaurar copia** (editor).',
      s:['Toca **Restaurar copia** y elige el archivo de la copia.','Confirma cuando lo pida.'],
      c:['Restaurar una copia nunca elimina esculturas. Haz antes una copia nueva.'] },
    { h:'Exportar e importar Excel', p:'Trabajar el inventario en una hoja de cálculo.', w:'**Documentación y exportación > Exportar Excel / Importar Excel** (editor).',
      s:['**Exportar Excel** descarga la hoja «Inventari».','**Importar Excel** carga un Excel con el formato del inventario; el identificador de cada fila es el número.'],
      c:['Importar un Excel nunca elimina esculturas. Haz antes una copia de seguridad.'] },
    { h:'Catálogo en PDF e impresión', p:'Obtener un documento del catálogo para guardarlo o imprimirlo.', w:'**Documentación y exportación > Catálogo en PDF** e **Imprimir catálogo**.',
      s:['Aplica los filtros si solo quieres algunas piezas (el PDF recoge las piezas que se ven).','Toca **Catálogo en PDF**; en el móvil puedes compartirlo o guardarlo en Archivos.'],
      c:['El catálogo en PDF no incluye la ubicación ni la propiedad.'] }
  ]},
  { t:'Historial de cambios y deshacer', secs:[
    { h:'Registro de cambios', p:'Saber quién ha cambiado qué y cuándo, y deshacer errores.', w:'**Administración > Registro de cambios**.',
      s:['Abre **Registro de cambios**: ves los últimos 150 registros.','En un registro que se pueda deshacer, toca **Deshacer este cambio** y, en el aviso, vuelve a tocar para confirmar.'],
      l:['Se pueden deshacer ediciones, y también recuperar una ficha eliminada u ocultar una creada por error.'],
      c:['El historial tiene una opción para borrar todos los registros: pide escribir ESBORRA y es definitiva. No la uses si no es necesario.'] }
  ]},
  { t:'Cronología, estadísticas y mapa', secs:[
    { h:'Herramientas de consulta', p:'Ver el catálogo desde otros ángulos.', w:'Pie de página > **Consulta**.',
      l:['**Cronología**: las obras ordenadas por año.','**Estadísticas**: piezas por serie, década, estado de conservación, técnica y situación.','**Mapa de las obras**: las piezas que tienen lugar.','**Biografía del autor**: biografía y vídeos.'] }
  ]},
  { t:'Preferencias, instalación y sin conexión', secs:[
    { h:'Preferencias', p:'Adaptar la aplicación a este dispositivo.', w:'Pie de página > **Preferencias**.',
      s:['Elige idioma (Català o Castellano), apariencia (automática, clara u oscura), tamaño de la letra, efectos de forja y sonido de yunque.'],
      c:['Cambiar el idioma recarga la aplicación. Las preferencias se guardan en este dispositivo.'] },
    { h:'Instalar en el móvil y trabajar sin conexión', p:'Usar la aplicación como una app y no perder cambios si falla la red.', w:'Pie de página > **Instalar la aplicación**.',
      s:['Toca **Instalar la aplicación** (si el navegador lo permite) y sigue las instrucciones que aparezcan.'],
      l:['Los cambios se guardan en el dispositivo y se sincronizan con la nube cuando hay conexión.'] }
  ]}
  ]
}
},

/* ====================================================================== FAMILIA ====== */
family: {
ca: {
  name:'Tutorial per a la família', title:'Guia d\'usuari per a la família', sub:'Les peces del ferrer',
  intro:'Aquesta guia és per als familiars que entren amb el compte de lectura. Hi trobaràs, de manera senzilla, què pots mirar i què pots aportar. Amb aquest compte pots consultar tot el catàleg, però no pots canviar ni esborrar les fitxes: això només ho fa l\'editor.',
  chapters:[
  { t:'Entrar a l\'aplicació', secs:[
    { h:'Com entrar', p:'Accedir al catàleg amb el compte de lectura.', w:'Pantalla de portada.',
      s:['Obre l\'adreça de la web i toca **Accedir al catàleg**.','Toca **Accés de lectura (família)**.','Escriu el teu nom i la contrasenya que t\'hagin donat.','Toca **Entrar**.'],
      l:['El teu nom queda anotat quan proposes una història.','Sense contrasenya (**Veure el catàleg**) només es veuen fotos, títols, dates, tècnica i història; amb el compte de lectura es veu també on és cada peça i de qui és.'],
      c:['No donis la contrasenya a persones que no siguin de la família.'] },
    { h:'Tancar la sessió', p:'Sortir de l\'aplicació, sobretot si el dispositiu no és teu.', w:'Final de la pàgina, botó **Tancar sessió**.',
      s:['Baixa fins al final de la pàgina.','Toca **Tancar sessió**.'] }
  ]},
  { t:'Mirar les escultures', secs:[
    { h:'Veure una fitxa', p:'Conèixer les dades i la fotografia d\'una escultura.', w:'Qualsevol targeta del catàleg.',
      s:['Toca la targeta de l\'escultura: s\'obre la fitxa.','Per passar a la peça anterior o següent, toca **Anterior** o **Següent**.','Toca **Fitxa completa** per veure la foto en gran, les fotos de detall i la història.','Toca **Tanca** per tornar al catàleg.'],
      l:['Si una peça té adreça, el botó **Com arribar-hi** obre Google Maps.','Si té enllaç d\'àudio o vídeo, hi ha el botó **Àudio de la peça**.','**Compartir** envia o copia l\'enllaç de la peça perquè altres persones la vegin.'] },
    { h:'Veure les fotografies', p:'Mirar les imatges de la peça amb més detall.', w:'Fitxa de la peça.',
      s:['A la fitxa, toca una de les miniatures per canviar la foto gran.','Toca la foto gran per veure-la a pantalla completa amb zoom.'] },
    { h:'Canviar la vista', p:'Veure les escultures com et resulti més còmode.', w:'Botó **Vista**, sota el cercador.',
      s:['Toca **Vista**.','Tria entre icones molt grans, grans, mitjanes, mosaic, llista o detalls.'] }
  ]},
  { t:'Buscar i filtrar', secs:[
    { h:'Buscar una escultura', p:'Trobar-ne una escrivint un títol, un material, un autor o una ubicació.', w:'Caixa de cerca de la part de dalt.',
      s:['Escriu al quadre de cerca.','Les peces es van filtrant mentre escrius.','Esborra el text per tornar a veure-les totes.'] },
    { h:'Filtrar', p:'Veure només un grup de peces.', w:'Desplegable al costat del cercador i botó **Filtres**.',
      s:['Al desplegable pots triar: Totes, Pendents de completar, Ja documentades, Sense foto, Preferides, Amb etiqueta QR o Sense etiqueta QR.','Toca **Filtres** per afinar per sèrie, estat de conservació, ubicació, situació i anys.'],
      l:['Les pestanyes **Escultures**, **Figures festives** i **Ceptres** mostren cada família per separat.'] }
  ]},
  { t:'Peces preferides', secs:[
    { h:'Marcar i trobar les preferides', p:'Guardar les peces que t\'agraden perquè sigui fàcil tornar-hi.', w:'Cor a cada targeta.',
      s:['Toca el cor d\'una targeta (al mòbil sempre es veu; a l\'ordinador surt quan hi passes el ratolí).','Les teves preferides apareixen a la secció **Preferides** i al filtre **Preferides**.'],
      c:['Les preferides es guarden en aquest aparell, no en altres. Si canvies de mòbil, no hi seran.'] }
  ]},
  { t:'Codis QR', secs:[
    { h:'Veure el codi QR d\'una peça', p:'Tenir el codi QR que porta a la fitxa pública de la peça.', w:'Fitxa de la peça, botó **Codi QR**.',
      s:['Obre la fitxa i toca **Codi QR**.','Si el vols, toca **Imprimir etiqueta** o **Descarregar PNG**.','Toca **Tornar a la fitxa** per sortir.'],
      l:['Qui escaneja el QR veu només la fitxa pública d\'aquella peça, sense contrasenya i sense poder modificar res.'] },
    { h:'Saber si el QR ja està generat', p:'Consultar si l\'etiqueta d\'una peça ja s\'ha fet o està pendent.', w:'Pantalla **Codi QR** de la peça i **Consulta > Control de QR**.',
      s:['A la pantalla **Codi QR** hi surt «QR generat» o «QR pendent».','A **Consulta > Control de QR** hi ha el llistat de totes les peces, amb cercador i filtres Totes, Generats i Pendents.'],
      c:['Amb el compte de lectura només es pot consultar; l\'estat només el canvia l\'editor.'] },
    { h:'Escanejar un codi QR', p:'Obrir una escultura apuntant-hi la càmera.', w:'Botó d\'escàner de la part de dalt.',
      s:['Toca el botó d\'escàner.','Apunta la càmera al QR de l\'etiqueta.'] }
  ]},
  { t:'Històries i suggeriments', secs:[
    { h:'Llegir les històries d\'una peça', p:'Conèixer anècdotes i detalls que explica la gent.', w:'Fitxa de la peça, secció «Històries».',
      s:['Obre la fitxa i baixa fins a «Històries».'] },
    { h:'Proposar una història', p:'Aportar una anècdota, l\'autoria, un encàrrec o un comentari sobre una peça.', w:'Fitxa de la peça, **+ Afegeix una història, anècdota o comentari**.',
      s:['Obre la fitxa i toca **+ Afegeix una història, anècdota o comentari**.','Tria el tipus (anècdota, autoria, encàrrec o comentari).','Escriu el text i, a «Qui ho explica», el teu nom.','Toca **Envia**.'],
      c:['La història no es publica a l\'instant: l\'editor la revisa abans.','Un cop enviada, no la pots corregir; si cal, envia\'n una altra.'] },
    { h:'Enviar un suggeriment', p:'Proposar una millora, una correcció o una escultura nova.', w:'Final de la pàgina, secció **Suggeriments**.',
      s:['Baixa fins a **Suggeriments** i obre-ho.','Escriu el missatge (mínim 10 caràcters) i, si vols, el teu nom.','Toca **Enviar suggeriment**. Surt un missatge de confirmació.'],
      l:['L\'editor els revisarà i valorarà incorporar-los al catàleg.'] }
  ]},
  { t:'Altres eines de consulta', secs:[
    { h:'Cronologia, estadístiques i mapa', p:'Veure l\'obra des d\'altres punts de vista.', w:'Final de la pàgina > **Consulta**.',
      l:['**Cronologia**: les obres ordenades per any.','**Estadístiques**: quantes peces hi ha per sèrie, dècada, estat, tècnica i situació.','**Mapa de les obres**: on es poden veure.','**Biografia de l\'autor**: la seva vida i obra, amb vídeos.'] },
    { h:'Catàleg en PDF i còpia de les dades', p:'Guardar o imprimir el catàleg.', w:'Final de la pàgina > **Documentació i exportació**.',
      s:['**Catàleg en PDF** o **Imprimir catàleg** recullen les peces que es veuen a la pantalla.','**Còpia de seguretat** descarrega les dades que el teu compte pot veure.'],
      c:['El PDF no inclou la ubicació ni la propietat.'] }
  ]},
  { t:'Personalitzar l\'aplicació', secs:[
    { h:'Preferències', p:'Fer l\'aplicació més còmoda de llegir.', w:'Final de la pàgina > **Preferències**.',
      s:['Tria l\'idioma (Català o Castellano), l\'aparença clara o fosca, la mida de la lletra i els efectes.'],
      c:['Canviar l\'idioma torna a carregar l\'aplicació.'] },
    { h:'Instal·lar-la al mòbil', p:'Tenir-la a la pantalla d\'inici com una app.', w:'Final de la pàgina > **Instal·lar l\'aplicació**.',
      s:['Toca **Instal·lar l\'aplicació** i segueix les instruccions.'] }
  ]},
  { t:'Què no es pot fer amb el compte de lectura', secs:[
    { h:'Resum de permisos', p:'Saber què depèn de l\'editor.',
      l:['**No** es poden crear, editar ni eliminar peces ni canviar-ne les fotos.','**No** es poden canviar els estats del QR (generat o pendent).','**No** hi ha accés a l\'administració, a l\'historial ni a les dades privades (valor, documents, préstecs).','**Sí** es poden consultar les peces, buscar, filtrar, marcar preferides, veure els QR, proposar històries i enviar suggeriments.'] }
  ]}
  ]
},

es: {
  name:'Tutorial para la familia', title:'Guía de usuario para la familia', sub:'Las piezas del herrero',
  intro:'Esta guía es para los familiares que entran con la cuenta de lectura. Encontrarás, de forma sencilla, lo que puedes mirar y lo que puedes aportar. Con esta cuenta puedes consultar todo el catálogo, pero no puedes cambiar ni borrar las fichas: eso solo lo hace el editor.',
  chapters:[
  { t:'Entrar en la aplicación', secs:[
    { h:'Cómo entrar', p:'Acceder al catálogo con la cuenta de lectura.', w:'Pantalla de portada.',
      s:['Abre la dirección de la web y toca **Acceder al catálogo**.','Toca **Acceso de lectura (familia)**.','Escribe tu nombre y la contraseña que te hayan dado.','Toca **Entrar**.'],
      l:['Tu nombre queda anotado cuando propones una historia.','Sin contraseña (**Ver el catálogo**) solo se ven fotos, títulos, fechas, técnica e historia; con la cuenta de lectura se ve también dónde está cada pieza y de quién es.'],
      c:['No des la contraseña a personas que no sean de la familia.'] },
    { h:'Cerrar la sesión', p:'Salir de la aplicación, sobre todo si el dispositivo no es tuyo.', w:'Final de la página, botón **Cerrar sesión**.',
      s:['Baja hasta el final de la página.','Toca **Cerrar sesión**.'] }
  ]},
  { t:'Mirar las esculturas', secs:[
    { h:'Ver una ficha', p:'Conocer los datos y la fotografía de una escultura.', w:'Cualquier tarjeta del catálogo.',
      s:['Toca la tarjeta de la escultura: se abre la ficha.','Para pasar a la pieza anterior o siguiente, toca **Anterior** o **Siguiente**.','Toca **Ficha completa** para ver la foto en grande, las fotos de detalle y la historia.','Toca **Cerrar** para volver al catálogo.'],
      l:['Si una pieza tiene dirección, el botón **Cómo llegar** abre Google Maps.','Si tiene enlace de audio o vídeo, aparece el botón **Audio de la pieza**.','**Compartir** envía o copia el enlace de la pieza para que otras personas la vean.'] },
    { h:'Ver las fotografías', p:'Mirar las imágenes de la pieza con más detalle.', w:'Ficha de la pieza.',
      s:['En la ficha, toca una de las miniaturas para cambiar la foto grande.','Toca la foto grande para verla a pantalla completa con zoom.'] },
    { h:'Cambiar la vista', p:'Ver las esculturas como te resulte más cómodo.', w:'Botón **Vista**, bajo el buscador.',
      s:['Toca **Vista**.','Elige entre iconos muy grandes, grandes, medianos, mosaico, lista o detalles.'] }
  ]},
  { t:'Buscar y filtrar', secs:[
    { h:'Buscar una escultura', p:'Encontrar una escribiendo un título, un material, un autor o una ubicación.', w:'Caja de búsqueda de la parte de arriba.',
      s:['Escribe en el cuadro de búsqueda.','Las piezas se van filtrando mientras escribes.','Borra el texto para volver a verlas todas.'] },
    { h:'Filtrar', p:'Ver solo un grupo de piezas.', w:'Desplegable junto al buscador y botón **Filtros**.',
      s:['En el desplegable puedes elegir: Todas, Pendientes de completar, Ya documentadas, Sin foto, Favoritas, Con etiqueta QR o Sin etiqueta QR.','Toca **Filtros** para afinar por serie, estado de conservación, ubicación, situación y años.'],
      l:['Las pestañas **Esculturas**, **Figuras festivas** y **Cetros** muestran cada familia por separado.'] }
  ]},
  { t:'Piezas favoritas', secs:[
    { h:'Marcar y encontrar las favoritas', p:'Guardar las piezas que te gustan para volver a ellas fácilmente.', w:'Corazón en cada tarjeta.',
      s:['Toca el corazón de una tarjeta (en el móvil siempre se ve; en el ordenador sale al pasar el ratón).','Tus favoritas aparecen en la sección **Favoritas** y en el filtro **Favoritas**.'],
      c:['Las favoritas se guardan en este aparato, no en otros. Si cambias de móvil, no estarán.'] }
  ]},
  { t:'Códigos QR', secs:[
    { h:'Ver el código QR de una pieza', p:'Tener el código QR que lleva a la ficha pública de la pieza.', w:'Ficha de la pieza, botón **Código QR**.',
      s:['Abre la ficha y toca **Código QR**.','Si lo quieres, toca **Imprimir etiqueta** o **Descargar PNG**.','Toca **Volver a la ficha** para salir.'],
      l:['Quien escanea el QR ve solo la ficha pública de esa pieza, sin contraseña y sin poder modificar nada.'] },
    { h:'Saber si el QR ya está generado', p:'Consultar si la etiqueta de una pieza ya se ha hecho o está pendiente.', w:'Pantalla **Código QR** de la pieza y **Consulta > Control de QR**.',
      s:['En la pantalla **Código QR** aparece «QR generado» o «QR pendiente».','En **Consulta > Control de QR** está el listado de todas las piezas, con buscador y filtros Todas, Generados y Pendientes.'],
      c:['Con la cuenta de lectura solo se puede consultar; el estado solo lo cambia el editor.'] },
    { h:'Escanear un código QR', p:'Abrir una escultura apuntándole la cámara.', w:'Botón de escáner de la parte de arriba.',
      s:['Toca el botón de escáner.','Apunta la cámara al QR de la etiqueta.'] }
  ]},
  { t:'Historias y sugerencias', secs:[
    { h:'Leer las historias de una pieza', p:'Conocer anécdotas y detalles que cuenta la gente.', w:'Ficha de la pieza, sección «Historias».',
      s:['Abre la ficha y baja hasta «Historias».'] },
    { h:'Proponer una historia', p:'Aportar una anécdota, la autoría, un encargo o un comentario sobre una pieza.', w:'Ficha de la pieza, **+ Añadir una historia, anécdota o comentario**.',
      s:['Abre la ficha y toca **+ Añadir una historia, anécdota o comentario**.','Elige el tipo (anécdota, autoría, encargo o comentario).','Escribe el texto y, en «Quién lo cuenta», tu nombre.','Toca **Enviar**.'],
      c:['La historia no se publica al instante: el editor la revisa antes.','Una vez enviada, no puedes corregirla; si hace falta, envía otra.'] },
    { h:'Enviar una sugerencia', p:'Proponer una mejora, una corrección o una escultura nueva.', w:'Final de la página, sección **Sugerencias**.',
      s:['Baja hasta **Sugerencias** y ábrelo.','Escribe el mensaje (mínimo 10 caracteres) y, si quieres, tu nombre.','Toca **Enviar sugerencia**. Sale un mensaje de confirmación.'],
      l:['El editor las revisará y valorará incorporarlas al catálogo.'] }
  ]},
  { t:'Otras herramientas de consulta', secs:[
    { h:'Cronología, estadísticas y mapa', p:'Ver la obra desde otros puntos de vista.', w:'Final de la página > **Consulta**.',
      l:['**Cronología**: las obras ordenadas por año.','**Estadísticas**: cuántas piezas hay por serie, década, estado, técnica y situación.','**Mapa de las obras**: dónde se pueden ver.','**Biografía del autor**: su vida y obra, con vídeos.'] },
    { h:'Catálogo en PDF y copia de los datos', p:'Guardar o imprimir el catálogo.', w:'Final de la página > **Documentación y exportación**.',
      s:['**Catálogo en PDF** o **Imprimir catálogo** recogen las piezas que se ven en la pantalla.','**Copia de seguridad** descarga los datos que tu cuenta puede ver.'],
      c:['El PDF no incluye la ubicación ni la propiedad.'] }
  ]},
  { t:'Personalizar la aplicación', secs:[
    { h:'Preferencias', p:'Hacer la aplicación más cómoda de leer.', w:'Final de la página > **Preferencias**.',
      s:['Elige el idioma (Català o Castellano), la apariencia clara u oscura, el tamaño de la letra y los efectos.'],
      c:['Cambiar el idioma vuelve a cargar la aplicación.'] },
    { h:'Instalarla en el móvil', p:'Tenerla en la pantalla de inicio como una app.', w:'Final de la página > **Instalar la aplicación**.',
      s:['Toca **Instalar la aplicación** y sigue las instrucciones.'] }
  ]},
  { t:'Qué no se puede hacer con la cuenta de lectura', secs:[
    { h:'Resumen de permisos', p:'Saber qué depende del editor.',
      l:['**No** se pueden crear, editar ni eliminar piezas ni cambiar sus fotos.','**No** se pueden cambiar los estados del QR (generado o pendiente).','**No** hay acceso a la administración, al historial ni a los datos privados (valor, documentos, préstamos).','**Sí** se pueden consultar las piezas, buscar, filtrar, marcar favoritas, ver los QR, proponer historias y enviar sugerencias.'] }
  ]}
  ]
}
}
}
};
