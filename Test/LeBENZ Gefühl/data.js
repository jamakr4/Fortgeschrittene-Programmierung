const topbar =` 
<nav class="navbar bg-body-tertiary" data-bs-theme="dark">
<div class="container-fluid">
  <a class="navbar-brand" href="index.html">
    <img src="Media/favicon.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
    LeBENZ-Gefühl
  </a>
</div>
</nav>
`


const sidebar =`
   <br>
   <h3>Seitenleiste</h3>
   <form>
       <div class="mb-3">
         <label for="exampleInputEmail1" class="form-label">Email Adresse</label>
         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
       </div>
       <div class="mb-3">
         <label for="exampleInputPassword1" class="form-label">Passwort</label>
         <input type="password" class="form-control" id="exampleInputPassword1">
       </div>
       <button type="submit" class="btn btn-primary">Einloggen</button>
     </form>

     <br>

<form class="d-flex" role="search">
   <input class="form-control me-2" type="search" placeholder="Suchen" aria-label="Search">
   <button class="btn btn-outline-success" type="submit">Suchen</button>
 </form>

 <br>

 <div class="dropdown">
   <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
     Monatsliste
   </button>
   <ul class="dropdown-menu">
     <li><button class="dropdown-item" type="button">Januar</button></li>
     <li><button class="dropdown-item" type="button">Februar</button></li>
     <li><button class="dropdown-item" type="button">März</button></li>
     <li><button class="dropdown-item" type="button">April</button></li>
     <li><button class="dropdown-item" type="button">Mai</button></li>
     <li><button class="dropdown-item" type="button">Juni</button></li>
     <li><button class="dropdown-item" type="button">Juli</button></li>
     <li><button class="dropdown-item" type="button">August</button></li>
     <li><button class="dropdown-item" type="button">September</button></li>
     <li><button class="dropdown-item" type="button">Oktober</button></li>
     <li><button class="dropdown-item" type="button">November</button></li>
     <li><button class="dropdown-item" type="button">Dezember</button></li>
   </ul>
 </div>

<br>

 <div>
   <h5>Tag Cloud:
   <a href="tagliste.html"> #div</a> |
   <a href="tagliste.html">#tutorial</a> |
   <a href="tagliste.html">#coding</a></a></h5> 
</div>
   `;



   const footer =`
   <a href="impressum.html">Impressum</a>
   <a href="kontakt.html">Kontakt</a>
   `;


   
var artikel = {
id:``,
ueberschrift:"",
datum:"",
autor:"",
teaser:"",
text:"",
tags:[],
}

let articles = [
    {
        id:`0`,
        ueberschrift:"Die W205 C-Klasse: Eine Ikone der Eleganz und Leistung",
        datum:"12.2.2024",
        autor:"ChatGPT",
        teaser:"Die W205 wird 10 Jahre alt",
        text:"Die Mercedes-Benz C-Klasse ist seit jeher ein Synonym für luxuriöse Performance und zeitlose Eleganz. Die W205-Generation, die 2014 eingeführt wurde, setzt diese Tradition fort und definiert sie neu. Mit ihrer dynamischen Ästhetik, hochmodernen Technologien und leistungsstarken Antrieben ist die W205 C-Klasse eine Ikone auf den Straßen und ein Maßstab für ihre Klasse. Das Design der W205 C-Klasse ist eine perfekte Mischung aus Stil und Substanz. Ihre markanten Linien und muskulösen Proportionen verleihen ihr eine sportliche Präsenz, während die sorgfältig gestalteten Details und hochwertigen Materialien eine Aura von Raffinesse und Luxus schaffen. Ob Limousine, Coupé, Cabriolet oder Kombi - jedes Modell strahlt eine zeitlose Eleganz aus, die Blicke auf sich zieht und einen bleibenden Eindruck hinterlässt. Unter der Haube bietet die W205 C-Klasse eine breite Palette von leistungsstarken Motoren, die ein beeindruckendes Fahrerlebnis garantieren. Von sparsamen Dieselmotoren bis hin zu leistungsstarken Benzinaggregaten ist für jeden Geschmack und Fahrstil etwas dabei. Modernste Technologien wie der 4MATIC Allradantrieb und das AGILITY CONTROL-Fahrwerk sorgen für eine optimale Performance und ein unvergleichliches Fahrgefühl, egal ob auf kurvigen Landstraßen oder auf der Autobahn. Im Innenraum bietet die W205 C-Klasse eine luxuriöse und komfortable Umgebung, die jeden Fahrer und Insassen verwöhnt. Hochwertige Materialien, feinste Handwerkskunst und innovative Technologien schaffen eine Atmosphäre von Exklusivität und Entspannung. Mit Features wie dem COMAND Infotainment-System, dem Head-Up Display und den modernen Fahrerassistenzsystemen ist die W205 C-Klasse nicht nur ein Auto, sondern ein Ort, an dem man sich zuhause fühlt. Insgesamt verkörpert die W205 C-Klasse das Beste aus zwei Welten: die Performance und Dynamik eines Sportwagens und den Komfort und die Raffinesse einer Luxuslimousine. Mit ihrem zeitlosen Design, ihrer beeindruckenden Leistung und ihrem luxuriösen Interieur setzt sie weiterhin Maßstäbe in ihrer Klasse und bleibt eine Ikone der Automobilbranche.",
        tags: ["c-klasse", " w205 "," Mercedes"]
    },

    {   id:`1`,
        ueberschrift:"Der Mercedes-Benz W204: Eine Ikone des Stils und der Innovation",
        datum:"2.3.2024",
        autor:"ChatGPT",
        teaser:"Der Stern unter den Sternen",
        text:"Der Mercedes-Benz W204, eingeführt im Jahr 2007, ist eine wahre Legende in der Automobilwelt. Als Teil der C-Klasse von Mercedes-Benz verkörpert der W204 die perfekte Mischung aus Eleganz, Leistung und Technologie. Von seinem markanten Design bis zu seinen leistungsstarken Antrieben hat der W204 die Messlatte in seinem Segment immer höher gelegt. Das Design des W204 ist ein Meisterwerk der Eleganz und des Stils. Mit seinen klaren Linien, muskulösen Proportionen und dynamischen Details strahlt er eine zeitlose Schönheit aus, die auch nach Jahren noch beeindruckt. Ob Limousine, Kombi oder Coupé - jede Variante des W204 verkörpert die DNA von Mercedes-Benz und lässt die Herzen der Autofans höherschlagen. Unter der Haube bietet der W204 eine breite Palette von Motoren, die für eine beeindruckende Leistung und Fahrerlebnis sorgen. Von sparsamen Dieselmotoren bis hin zu leistungsstarken Benzinaggregaten ist für jeden Fahrstil und jede Anforderung etwas dabei. Dank modernster Technologien wie dem 4MATIC Allradantrieb und dem AGILITY CONTROL-Fahrwerk bietet der W204 eine herausragende Fahrperformance und Agilität, die ihn zu",
        tags:["c-klasse", " w204", " Mercedes"],
        },

    {
      id:`2`,
      ueberschrift:"Die Mercedes-Benz W222 S-Klasse Coupé: Eleganz und Luxus in Perfektion",
      datum:"8.4.2024",
      autor:"ChatGPT",
      teaser:"Der Beste der Besten",
      text:"Das Mercedes-Benz S-Klasse Coupé der Baureihe W222 verkörpert die Essenz von Luxus und Eleganz auf höchstem Niveau. Seit seiner Einführung hat es die Maßstäbe für automobile Exzellenz neu definiert und begeistert mit seinem unvergleichlichen Design, seiner innovativen Technologie und seinem überragenden Komfort. Das Design des S-Klasse Coupés ist eine harmonische Verbindung aus kraftvollen Linien und sanften Kurven, die eine einzigartige Präsenz auf der Straße schaffen. Die markante Frontpartie mit dem ikonischen Kühlergrill und den schlanken LED-Scheinwerfern verleiht dem Fahrzeug einen souveränen Ausdruck, während die fließende Silhouette und die muskulösen Proportionen eine zeitlose Eleganz ausstrahlen. Im Inneren des S-Klasse Coupés erwartet die Insassen eine luxuriöse und komfortable Umgebung, die keine Wünsche offen lässt. Feinste Materialien wie edles Holz, hochwertiges Leder und gebürstetes Metall schaffen eine Atmosphäre von Exklusivität und Raffinesse. Die Sitze bieten nicht nur unübertroffenen Komfort, sondern sind auch mit einer Vielzahl von Funktionen ausgestattet, die das Fahrerlebnis noch angenehmer machen. Neben seinem beeindruckenden Design und seinem luxuriösen Interieur ist das S-Klasse Coupé auch technologisch führend. Innovative Features wie das COMAND Infotainment-System, das Burmester Surround-Soundsystem und die neuesten Fahrerassistenzsysteme sorgen für Unterhaltung, Sicherheit und Komfort auf höchstem Niveau. Unter der Motorhaube bietet das S-Klasse Coupé eine beeindruckende Auswahl an leistungsstarken Motoren, die eine dynamische Performance und eine sanfte Fahrt garantieren. Vom kraftvollen V8-Biturbo bis zum umweltfreundlichen Hybridantrieb ist für jeden Geschmack und Fahrstil etwas dabei. Insgesamt verkörpert das Mercedes-Benz S-Klasse Coupé der Baureihe W222 die Quintessenz von Luxus und bietet eine unvergleichliche Kombination aus Stil, Technologie und Komfort. Es ist mehr als nur ein Auto - es ist eine Aussage über höchsten Anspruch und erstklassige Qualität.",
      tags:["s-klasse", " w222"," Mercedes"],
      }
]