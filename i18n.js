/* Les peces del ferrer — traducció al castellà de la interfície.
   L'app està escrita en català; si a Preferències es tria «Castellano», aquest fitxer tradueix
   els textos de la interfície a mesura que apareixen. Mai toca el contingut que escriu l'usuari
   (títols, observacions, històries…). */
(function(){
"use strict";
if(!window.Prefs || window.Prefs.get().lang !== 'es') return;

var D = {
// portada i accés
"Accedir al catàleg":"Acceder al catálogo","Biografia de l'autor":"Biografía del autor","Accés privat":"Acceso privado",
"Catàleg de l'obra escultòrica en ferro i acer. Vila-seca, 1949.":"Catálogo de la obra escultórica en hierro y acero. Vila-seca, 1949.",
"Les peces":"Las piezas","del ferrer":"del herrero","Les peces del ferrer":"Las piezas del herrero",
"Seleccioneu el tipus d'accés":"Seleccione el tipo de acceso","Accés d'editor":"Acceso de editor","Accés de lectura":"Acceso de lectura","Veure el catàleg":"Ver el catálogo","Accés de lectura (família)":"Acceso de lectura (familia)",
"Sense contrasenya es poden veure les fotos, els títols, les dates, la tècnica i la història de cada peça. La família i l'editor hi entren amb la seva contrasenya i veuen també on és cada peça i de qui és.":"Sin contraseña se pueden ver las fotos, los títulos, las fechas, la técnica y la historia de cada pieza. La familia y el editor entran con su contraseña y ven también dónde está cada pieza y de quién es.",
"Visitant · Només consulta":"Visitante · Solo consulta","El catàleg públic encara no està disponible. Torna-ho a provar més tard.":"El catálogo público todavía no está disponible. Vuelve a probarlo más tarde.",
"L'accés de lectura permet consultar tot el catàleg, sense opció d'editar, crear ni eliminar. Cada accés té la seva contrasenya.":"El acceso de lectura permite consultar todo el catálogo, sin opción de editar, crear ni eliminar. Cada acceso tiene su contraseña.",
"Nom (opcional)":"Nombre (opcional)","Dades internes":"Datos internos",
"Nom (consta a l'historial)":"Nombre (consta en el historial)","Contrasenya":"Contraseña","Entrar":"Entrar","← Enrere":"← Atrás",
"Mostra la contrasenya":"Mostrar la contraseña","Amaga la contrasenya":"Ocultar la contraseña","Contrasenya incorrecta.":"Contraseña incorrecta.",
"Coneix l'autor":"Conoce al autor","← Tornar":"← Volver","Obre el vídeo a Vimeo ↗":"Abrir el vídeo en Vimeo ↗","Font:":"Fuente:",
// capçalera, cerca i filtres
"Cerca títol, autor, material, ubicació…":"Buscar título, autor, material, ubicación…","Vista":"Vista","Canvia la vista":"Cambiar la vista",
"Totes":"Todas","Pendents":"Pendientes","Documentades":"Documentadas","Sense foto":"Sin foto","❤️ Preferides":"❤️ Favoritas","Preferides":"Favoritas",
"Amb QR":"Con QR","Sense QR":"Sin QR","Selecció múltiple":"Selección múltiple","Totes les sèries":"Todas las series",
"Pendents de completar":"Pendientes de completar","Ja documentades":"Ya documentadas","Amb etiqueta QR":"Con etiqueta QR","Sense etiqueta QR":"Sin etiqueta QR",
"Cerca avançada":"Búsqueda avanzada","Sèrie":"Serie","Estat":"Estado","Ubicació":"Ubicación","Situació":"Situación","Any des de":"Año desde","Any fins a":"Año hasta",
"p. ex. 1980":"p. ej. 1980","p. ex. 2005":"p. ej. 2005","Neteja els filtres":"Limpiar los filtros","Escaneja un codi QR":"Escanear un código QR",
"Icones molt grans":"Iconos muy grandes","Icones grans":"Iconos grandes","Icones mitjanes":"Iconos medianos","Mosaic (petites)":"Mosaico (pequeños)","Llista":"Lista","Detalls":"Detalles",
"Sense títol":"Sin título","Per completar":"Por completar","Sense fotografia":"Sin fotografía","Carregant…":"Cargando…",
"Cap peça coincideix amb la cerca.":"Ninguna pieza coincide con la búsqueda.","Encara no hi ha peces.":"Todavía no hay piezas.",
"Afegeix a preferides":"Añadir a favoritas","Treu de preferides":"Quitar de favoritas","Afegir peça":"Añadir pieza","Etiqueta QR assignada":"Etiqueta QR asignada",
// peu
"Consulta":"Consulta","Cronologia":"Cronología","Estadístiques":"Estadísticas","Mapa de les obres":"Mapa de las obras","Registre de canvis":"Registro de cambios",
"Gestió":"Gestión","Revisió d'inventari":"Revisión de inventario","Préstecs i conservació":"Préstamos y conservación","Històries pendents":"Historias pendientes",
"Documentació i exportació":"Documentación y exportación","Catàleg en PDF":"Catálogo en PDF","Etiquetes QR":"Etiquetas QR","Exportar CSV":"Exportar CSV",
"Còpia de seguretat":"Copia de seguridad","Restaurar còpia":"Restaurar copia","Sessió":"Sesión","Preferències":"Preferencias",
"Instal·lar l'aplicació":"Instalar la aplicación","Tancar sessió":"Cerrar sesión","Només lectura":"Solo lectura",
"Els canvis es guarden al dispositiu i es sincronitzen amb el núvol quan hi ha connexió. Cada canvi queda registrat a l'historial.":"Los cambios se guardan en el dispositivo y se sincronizan con la nube cuando hay conexión. Cada cambio queda registrado en el historial.",
"Sincronitzat amb el núvol":"Sincronizado con la nube","Sincronitzant…":"Sincronizando…","Connectant amb el núvol…":"Conectando con la nube…","Connectant…":"Conectando…",
"Sense connexió: es mostren les dades desades.":"Sin conexión: se muestran los datos guardados.","Sense connexió: els canvis es sincronitzaran més tard.":"Sin conexión: los cambios se sincronizarán más tarde.",
// fitxa
"Tanca":"Cerrar","Edita":"Editar","Fitxa":"Ficha","Editar fitxa":"Editar ficha","Nova peça":"Nueva pieza","Fitxa completa":"Ficha completa",
"Com arribar-hi":"Cómo llegar","Àudio de la peça":"Audio de la pieza","Compartir":"Compartir","Codi QR":"Código QR","Anterior":"Anterior","Següent":"Siguiente",
"Observacions":"Observaciones","Títol de l'obra / tema":"Título de la obra / tema","Autor/a":"Autor/a","Sèrie / col·lecció":"Serie / colección","Tipus":"Tipo","Any":"Año",
"Tècnica / materials":"Técnica / materiales","Dimensions (alt/ample/fons)":"Dimensiones (alto/ancho/fondo)","Estat de conservació":"Estado de conservación",
"Ubicació actual":"Ubicación actual","Lloc per veure-la (adreça o poble, per al mapa)":"Lugar para verla (dirección o pueblo, para el mapa)","Propietat":"Propiedad",
"Enllaç d'àudio o vídeo (https://…)":"Enlace de audio o vídeo (https://…)","Història / introducció (fitxa completa)":"Historia / introducción (ficha completa)",
"Valor / assegurança":"Valor / seguro","(només editor)":"(solo editor)","(només el veu l'editor)":"(solo lo ve el editor)",
"Excel·lent":"Excelente","Bo":"Bueno","Regular":"Regular","Necessita restauració":"Necesita restauración","Greu":"Grave",
"Al taller":"En el taller","Exposada":"Expuesta","Cedida":"Cedida","Venuda":"Vendida","Magatzem":"Almacén","Obra pública":"Obra pública","Sense especificar":"Sin especificar",
"Fer foto":"Hacer foto","Triar de la galeria":"Elegir de la galería","Treure la fotografia":"Quitar la fotografía","Afegeix una fotografia de la peça":"Añade una fotografía de la pieza",
"Fotos de detall i del procés":"Fotos de detalle y del proceso","(fins a 6)":"(hasta 6)","+ Afegeix fotos":"+ Añadir fotos","Desa":"Guardar","Núm.":"Núm.",
"Elimina aquesta peça":"Eliminar esta pieza","Cancel·la":"Cancelar","Elimina":"Eliminar","Fitxa desada":"Ficha guardada","Cap canvi per desar":"Ningún cambio que guardar",
"Imprimir etiqueta":"Imprimir etiqueta","Descarregar PNG":"Descargar PNG","Tornar a la fitxa":"Volver a la ficha","Enllaç copiat":"Enlace copiado",
"Edició múltiple":"Edición múltiple","Edita…":"Editar…","No canviar":"No cambiar","— No canviar —":"— No cambiar —","Línia del temps":"Línea del tiempo","Sense data":"Sin fecha",
// historial
"Historial de canvis":"Historial de cambios","Nova":"Nueva","Edició":"Edición","Eliminada":"Eliminada","Desfet":"Deshecho","Importació":"Importación",
"Revisió":"Revisión","Préstec":"Préstamo","Restauració":"Restauración","Document":"Documento","Història":"Historia","Desfés aquest canvi":"Deshacer este cambio",
"Fitxa creada":"Ficha creada","Fitxa eliminada":"Ficha eliminada","Fotografia canviada":"Fotografía cambiada","Esborra tot l'historial":"Borrar todo el historial",
"Encara no hi ha cap canvi registrat.":"Todavía no hay ningún cambio registrado.",
// fase 2
"Revisió d'inventari ":"Revisión de inventario ","Verificada":"Verificada","Absent":"Ausente","Prestada":"Prestada","Pendent":"Pendiente",
"Verificades":"Verificadas","Absents":"Ausentes","Prestades":"Prestadas","Imprimir informe":"Imprimir informe","Comença una revisió nova":"Empezar una revisión nueva",
"Històries":"Historias","Préstecs":"Préstamos","Restauració i conservació":"Restauración y conservación","Documents privats":"Documentos privados",
"+ Afegeix una història, anècdota o comentari":"+ Añadir una historia, anécdota o comentario","Text":"Texto","Qui ho explica":"Quién lo cuenta",
"L'editor la revisarà abans de publicar-la.":"El editor la revisará antes de publicarla.","Publica":"Publicar","Envia":"Enviar",
"Anècdota":"Anécdota","Autoria":"Autoría","Encàrrec":"Encargo","Comentari":"Comentario","Aprova":"Aprobar","Rebutja":"Rechazar","Pendents d'aprovar":"Pendientes de aprobar",
"Encara no hi ha cap història d'aquesta peça.":"Todavía no hay ninguna historia de esta pieza.",
"+ Registra un préstec":"+ Registrar un préstamo","Destinatari":"Destinatario","Sortida":"Salida","Retorn previst":"Devolución prevista","Notes":"Notas",
"Desa el préstec":"Guardar el préstamo","Marca com a retornat":"Marcar como devuelto","Actiu":"Activo","Vençut":"Vencido","Aviat":"Pronto","Sense préstecs registrats.":"Sin préstamos registrados.",
"+ Registra una intervenció":"+ Registrar una intervención","Data":"Fecha","Qui l'ha feta":"Quién la ha hecho","Descripció (estat, oxidació, productes…)":"Descripción (estado, oxidación, productos…)",
"Propera revisió":"Próxima revisión","Desa la intervenció":"Guardar la intervención","Sense intervencions registrades.":"Sin intervenciones registradas.",
"Neteja":"Limpieza","Tractament antioxidant":"Tratamiento antioxidante","Soldadura / reparació":"Soldadura / reparación","Pintura / protecció":"Pintura / protección","Revisió de conservació":"Revisión de conservación","Altres":"Otros",
"+ Adjunta un document":"+ Adjuntar un documento","Nom":"Nombre","Opcional":"Opcional","Fitxer (PDF o imatge, màx. 700 KB)":"Archivo (PDF o imagen, máx. 700 KB)",
"Desa el document":"Guardar el documento","Descarrega":"Descargar","Sense documents adjunts.":"Sin documentos adjuntos.","Certificat":"Certificado","Factura":"Factura","Taxació":"Tasación",
"Préstecs actius":"Préstamos activos","Revisions de conservació":"Revisiones de conservación","Cap préstec actiu.":"Ningún préstamo activo.",
"Cap revisió prevista per als propers 30 dies.":"Ninguna revisión prevista para los próximos 30 días.","No hi ha cap història pendent d'aprovar.":"No hay ninguna historia pendiente de aprobar.",
"Història publicada":"Historia publicada","Història aprovada i publicada":"Historia aprobada y publicada","Història rebutjada":"Historia rechazada","Història eliminada":"Historia eliminada",
"Préstec registrat":"Préstamo registrado","Préstec marcat com a retornat":"Préstamo marcado como devuelto","Préstec eliminat":"Préstamo eliminado",
"Intervenció desada":"Intervención guardada","Intervenció eliminada":"Intervención eliminada","Document desat":"Documento guardado","Document eliminat":"Documento eliminado",
"Nova revisió iniciada":"Nueva revisión iniciada","Confirma":"Confirmar","Toca un altre cop per confirmar":"Toca otra vez para confirmar",
"Gràcies! L'editor la revisarà abans de publicar-la":"¡Gracias! El editor la revisará antes de publicarla","Escriu el text de la història":"Escribe el texto de la historia",
"Indica el destinatari":"Indica el destinatario","Indica la data":"Indica la fecha","Tria un fitxer":"Elige un archivo","El retorn no pot ser abans de la sortida":"La devolución no puede ser antes de la salida",
// fase 3
"Peces":"Piezas","Amb foto":"Con foto","Anys":"Años","Per sèrie":"Por serie","Per dècada":"Por década","Per estat de conservació":"Por estado de conservación",
"Per tècnica / material":"Por técnica / material","Per situació":"Por situación","Sense dades.":"Sin datos.","Mapa de les obres ":"Mapa de las obras ",
"Carregant el mapa…":"Cargando el mapa…","Sense localitzar":"Sin localizar","Idioma / Idioma":"Idioma","Aparença":"Apariencia","Automàtica":"Automática","Clara":"Clara","Fosca":"Oscura",
"Mida de la lletra":"Tamaño de la letra","Animacions i efectes de forja":"Animaciones y efectos de forja","Automàtiques":"Automáticas","Sempre":"Siempre","Reduïdes":"Reducidas",
"So d'enclusa en obrir una fitxa":"Sonido de yunque al abrir una ficha","Desactivat":"Desactivado","Activat":"Activado",
"Les preferències es desen en aquest dispositiu. «Automàtiques» redueix els efectes en mòbils i si el sistema demana menys moviment.":"Las preferencias se guardan en este dispositivo. «Automáticas» reduce los efectos en móviles y si el sistema pide menos movimiento.",
"Doble clic o pessic per ampliar":"Doble clic o pellizco para ampliar","Fotografia":"Fotografía",
"Apunta la càmera a l'etiqueta QR de la peça":"Apunta la cámara a la etiqueta QR de la pieza","Obrint la càmera…":"Abriendo la cámara…","Escàner de codis QR":"Escáner de códigos QR",
"Aquest codi QR no és d'una peça del catàleg":"Este código QR no es de una pieza del catálogo","Instal·la l'app":"Instala la app","Preparant la còpia…":"Preparando la copia…",
"Omple almenys un camp.":"Rellena al menos un campo.","Imprimir catàleg":"Imprimir catálogo","Preparant el PDF…":"Preparando el PDF…",
"Compartir o desar…":"Compartir o guardar…","Descarregar el PDF":"Descargar el PDF","Catàleg descarregat":"Catálogo descargado","Catàleg llest":"Catálogo listo","Catàleg en PDF ":"Catálogo en PDF ","Etiqueta QR desmarcada":"Etiqueta QR desmarcada",
// tutorials, control de QR i etiquetes que faltaven
"Tutorials":"Tutoriales","Filtres":"Filtros","Administració":"Administración","Escultures":"Esculturas","Ceptres":"Cetros","Figures festives":"Figuras festivas","Suggeriments":"Sugerencias","Suggeriments rebuts":"Sugerencias recibidas","Enviar suggeriment":"Enviar sugerencia",
"Control de QR":"Control de QR","Generats":"Generados","Pendent":"Pendiente","✓ Generat":"✓ Generado","✓ QR generat":"✓ QR generado","QR pendent":"QR pendiente","☑ QR generat · toca per canviar":"☑ QR generado · toca para cambiar","☐ QR pendent · toca per canviar":"☐ QR pendiente · toca para cambiar","Cerca per nom o número":"Busca por nombre o número","Cap peça coincideix.":"Ninguna pieza coincide.","Mostra el codi QR":"Muestra el código QR",
// indicador i selector de sessió
"Editor · Accés complet":"Editor · Acceso completo","Família · Accés limitat":"Familia · Acceso limitado","Catàleg · Només lectura":"Catálogo · Solo lectura","Sessió no identificada":"Sesión no identificada",
"Editor":"Editor","Família":"Familia","Catàleg":"Catálogo","Accés complet":"Acceso completo","Accés limitat":"Acceso limitado","Només lectura":"Solo lectura","Sessió activa":"Sesión activa","Què pot fer":"Qué puede hacer",
"Crear i editar peces, fotografies i fotos de detall.":"Crear y editar piezas, fotografías y fotos de detalle.",
"Gestionar l'inventari: ubicació, propietat, revisió, préstecs i restauracions.":"Gestionar el inventario: ubicación, propiedad, revisión, préstamos y restauraciones.",
"Marcar l'estat dels codis QR i imprimir etiquetes.":"Marcar el estado de los códigos QR e imprimir etiquetas.",
"Fer còpies de seguretat i importar o exportar Excel.":"Hacer copias de seguridad e importar o exportar Excel.",
"Administració: històries pendents, suggeriments, dades internes i registre de canvis.":"Administración: historias pendientes, sugerencias, datos internos y registro de cambios.",
"Consultar peces i fotografies, també la ubicació i la propietat.":"Consultar piezas y fotografías, también la ubicación y la propiedad.",
"Cercar, filtrar i marcar preferides.":"Buscar, filtrar y marcar favoritas.",
"Llegir històries i proposar-ne de noves (les aprova l'editor).":"Leer historias y proponer nuevas (las aprueba el editor).",
"Enviar suggeriments.":"Enviar sugerencias.",
"No pot crear, editar ni eliminar peces, ni accedir a l'administració.":"No puede crear, editar ni eliminar piezas, ni acceder a la administración.",
"Consultar el catàleg públic: fotos, títols, dates, tècnica i història.":"Consultar el catálogo público: fotos, títulos, fechas, técnica e historia.",
"Cercar, filtrar i veure fitxes i codis QR.":"Buscar, filtrar y ver fichas y códigos QR.",
"Sense ubicació, propietat ni observacions.":"Sin ubicación, propiedad ni observaciones.",
"Sense permís per modificar res ni proposar històries.":"Sin permiso para modificar nada ni proponer historias.",
"Hi ha canvis sense desar. Si canvies de sessió es perdran. Vols continuar?":"Hay cambios sin guardar. Si cambias de sesión se perderán. ¿Quieres continuar?",
"No s'ha pogut tancar la sessió":"No se ha podido cerrar la sesión",
};

// Fragments de textos dinàmics (s'apliquen dins del text, de més llarg a més curt)
var R = [
  [/peces documentades/g,'piezas documentadas'],[/ de (\d+) peces/g,' de $1 piezas'],[/\bresultats\b/g,'resultados'],[/\bresultat\b/g,'resultado'],
  [/\bsèries\b/g,'series'],[/\bsèrie\b/g,'serie'],[/seleccionades/g,'seleccionadas'],[/seleccionada/g,'seleccionada'],[/Aplica a /g,'Aplicar a '],
  [/\bpeces\b/g,'piezas'],[/\bpeça\b/g,'pieza'],[/Revisió iniciada el/g,'Revisión iniciada el'],[/Revisió en curs/g,'Revisión en curso'],
  [/Revisades (\d+) de (\d+)/g,'Revisadas $1 de $2'],[/Préstecs actius:/g,'Préstamos activos:'],[/ vençuts:/g,' vencidos:'],
  [/revisions de conservació en els propers 30 dies o endarrerides:/g,'revisiones de conservación en los próximos 30 días o atrasadas:'],
  [/Propera revisió:?/g,'Próxima revisión:'],[/\(endarrerida\)/g,'(atrasada)'],[/Endarrerida/g,'Atrasada'],[/Retornat /g,'Devuelto '],[/Retorn previst /g,'Devolución prevista '],
  [/Sortida /g,'Salida '],[/ · retorn /g,' · devolución '],[/ · sortida /g,' · salida '],[/ · última: /g,' · última: '],[/Pendents \(/g,'Pendientes ('],[/Absents \(/g,'Ausentes ('],[/Prestades \(/g,'Prestadas ('],
  [/No s'ha revisat en aquesta revisió/g,'No se ha revisado en esta revisión'],[/Situant les obres…/g,'Situando las obras…'],[/ ubicacions al mapa/g,' ubicaciones en el mapa'],[/ ubicació al mapa/g,' ubicación en el mapa'],
  [/sense localitzar/g,'sin localizar'],[/ de (\d+) peces amb aquesta dada/g,' de $1 piezas con este dato'],[/amb aquesta dada/g,'con este dato'],
  [/Es mostren les peces que tenen omplert el camp «Lloc per veure-la»\. Mapa © col·laboradors d'OpenStreetMap\./g,'Se muestran las piezas que tienen rellenado el campo «Lugar para verla». Mapa © colaboradores de OpenStreetMap.'],
  [/Avís:/g,'Aviso:'],[/préstecs? vençuts?/g,'préstamos vencidos'],[/a retornar aviat/g,'a devolver pronto'],[/revisions? de conservació endarrerides?/g,'revisiones de conservación atrasadas'],
  [/Preparant el PDF… fotos/g,'Preparando el PDF… fotos'],[/El catàleg està llest:/g,'El catálogo está listo:'],[/(\d+) pàgines/g,'$1 páginas'],[/ amb (\d+) obres? /g,' con $1 obras '],
  [/No inclou la ubicació ni la propietat de les /g,'No incluye la ubicación ni la propiedad de las '],
  [/Important…/g,'Importando…'],[/Importació acabada/g,'Importación terminada'],[/Restaurant /g,'Restaurando '],[/Còpia completa:/g,'Copia completa:'],
  [/fotos de detall\b/g,'fotos de detalle'],[/registres/g,'registros'],[/No s'ha trobat la peça/g,'No se ha encontrado la pieza'],
  [/Canvis aplicats a/g,'Cambios aplicados a'],[/Toca un altre cop/g,'Toca otra vez'],[/Peça eliminada \(recuperable des de l'historial\)/g,'Pieza eliminada (recuperable desde el historial)'],
  [/ · Editor$/g,' · Editor'],[/ · Només lectura$/g,' · Solo lectura'],[/Vista: /g,'Vista: '],[/Núm\. /g,'Núm. ']
];
function tr(s){
  if(!s) return s;
  var t = s.trim();
  if(!t) return s;
  if(D.hasOwnProperty(t)) return s.replace(t, D[t]);
  var o = applyR(s);
  // Una traducció ha de ser estable: si traduir el resultat el tornés a canviar, l'observador de
  // canvis entraria en un bucle infinit (la pàgina es penjaria). En aquest cas es deixa el text com estava.
  return applyR(o) === o ? o : s;
}
function applyR(s){
  for(var i=0;i<R.length;i++) s = s.replace(R[i][0], R[i][1]);
  return s;
}
window.tr = tr;
// Contingut de l'usuari: no es tradueix mai
var SKIP = '.tutwrap,.ctitle,.dtitle,.xtext,.dnotes,.frow .v,.tltx b,.tltx i,.hchg,.hpiece,.xitem>b,.stk,.cmeta,.cdet,.au-body,.qrurl,.leaflet-container,textarea,script,style,[contenteditable],.lmark';
function skip(el){ return !el || (el.closest && el.closest(SKIP)); }
function doNode(n){
  if(n.nodeType === 3){
    if(skip(n.parentElement)) return;
    var v = n.nodeValue, t = tr(v); if(t !== v) n.nodeValue = t;
    return;
  }
  if(n.nodeType !== 1 || skip(n)) return;
  ['placeholder','aria-label','title'].forEach(function(a){ var v = n.getAttribute && n.getAttribute(a); if(v){ var t = tr(v); if(t !== v) n.setAttribute(a, t); } });
  if(n.tagName === 'OPTION'){ var ov = n.textContent, ot = tr(ov); if(ot !== ov) n.textContent = ot; return; }
  var w = document.createTreeWalker(n, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT), x;
  while((x = w.nextNode())){
    if(x.nodeType === 1){ if(skip(x)) continue; ['placeholder','aria-label','title'].forEach(function(a){ var v = x.getAttribute(a); if(v){ var t = tr(v); if(t !== v) x.setAttribute(a, t); } }); }
    else if(!skip(x.parentElement)){ var v = x.nodeValue, t = tr(v); if(t !== v) x.nodeValue = t; }
  }
}
function run(){
  document.title = tr(document.title);
  doNode(document.body);
  new MutationObserver(function(ms){
    ms.forEach(function(m){
      if(m.type === 'characterData') doNode(m.target);
      else if(m.type === 'attributes') doNode(m.target);
      else m.addedNodes.forEach(doNode);
    });
  }).observe(document.body, {childList:true, subtree:true, characterData:true, attributes:true, attributeFilter:['placeholder','aria-label','title']});
  // quadres de diàleg del navegador
  var A = window.alert, C = window.confirm, P = window.prompt;
  window.alert = function(m){ return A.call(window, tr(String(m))); };
  window.confirm = function(m){ return C.call(window, tr(String(m))); };
  window.prompt = function(m, d){ return P.call(window, tr(String(m)), d); };
}
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
