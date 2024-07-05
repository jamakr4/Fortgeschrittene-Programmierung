var http = require("http");
var express = require("express");
const { stringify } = require("querystring");
var app = express();
var server = http.createServer(app);
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

const articles = [
    {
        id:`1`,
        ueberschrift:"Die W205 C-Klasse: Eine Ikone der Eleganz und Leistung",
        datum:"12.4.2024",
        autor:"ChatGPT",
        teaser:"Entdecken Sie die nächste Evolutionsstufe der W205 C-Klasse - ein Symbol für Luxus und Innovation. In unserem bevorstehenden Artikel tauchen wir ein in die Welt dieses modernen Klassikers und beleuchten seine bahnbrechenden Technologien, sein elegantes Design und sein dynamisches Fahrerlebnis. Erfahren Sie, wie die W205 C-Klasse die Grenzen des Luxus im Automobilbereich neu definiert und ihre führende Position in der Premium-Limousinenklasse behauptet.",
        text:"Die Mercedes-Benz C-Klasse ist seit jeher ein Synonym für luxuriöse Performance und zeitlose Eleganz. Die W205-Generation, die 2014 eingeführt wurde, setzt diese Tradition fort und definiert sie neu. Mit ihrer dynamischen Ästhetik, hochmodernen Technologien und leistungsstarken Antrieben ist die W205 C-Klasse eine Ikone auf den Straßen und ein Maßstab für ihre Klasse. Das Design der W205 C-Klasse ist eine perfekte Mischung aus Stil und Substanz. Ihre markanten Linien und muskulösen Proportionen verleihen ihr eine sportliche Präsenz, während die sorgfältig gestalteten Details und hochwertigen Materialien eine Aura von Raffinesse und Luxus schaffen. Ob Limousine, Coupé, Cabriolet oder Kombi - jedes Modell strahlt eine zeitlose Eleganz aus, die Blicke auf sich zieht und einen bleibenden Eindruck hinterlässt. Unter der Haube bietet die W205 C-Klasse eine breite Palette von leistungsstarken Motoren, die ein beeindruckendes Fahrerlebnis garantieren. Von sparsamen Dieselmotoren bis hin zu leistungsstarken Benzinaggregaten ist für jeden Geschmack und Fahrstil etwas dabei. Modernste Technologien wie der 4MATIC Allradantrieb und das AGILITY CONTROL-Fahrwerk sorgen für eine optimale Performance und ein unvergleichliches Fahrgefühl, egal ob auf kurvigen Landstraßen oder auf der Autobahn. Im Innenraum bietet die W205 C-Klasse eine luxuriöse und komfortable Umgebung, die jeden Fahrer und Insassen verwöhnt. Hochwertige Materialien, feinste Handwerkskunst und innovative Technologien schaffen eine Atmosphäre von Exklusivität und Entspannung. Mit Features wie dem COMAND Infotainment-System, dem Head-Up Display und den modernen Fahrerassistenzsystemen ist die W205 C-Klasse nicht nur ein Auto, sondern ein Ort, an dem man sich zuhause fühlt. Insgesamt verkörpert die W205 C-Klasse das Beste aus zwei Welten: die Performance und Dynamik eines Sportwagens und den Komfort und die Raffinesse einer Luxuslimousine. Mit ihrem zeitlosen Design, ihrer beeindruckenden Leistung und ihrem luxuriösen Interieur setzt sie weiterhin Maßstäbe in ihrer Klasse und bleibt eine Ikone der Automobilbranche.",
        tags: ["c-klasse", "w205","Mercedes"]
    },

    {   id:`2`,
        ueberschrift:"Der Mercedes-Benz W204: Eine Ikone des Stils und der Innovation",
        datum:"2.3.2024",
        autor:"ChatGPT",
        teaser:"Tauchen Sie ein in die zeitlose Eleganz und die faszinierende Performance der W204 C-Klasse. In unserem bevorstehenden Artikel erkunden wir die unverwechselbare DNA dieses ikonischen Modells, das einen perfekten Mix aus Stil, Komfort und Fahrspaß bietet. Erfahren Sie, wie die W204 C-Klasse die Standards für Limousinen in ihrer Klasse setzte und bis heute ihre einzigartige Präsenz auf der Straße bewahrt.",
        text:"Der Mercedes-Benz W204, eingeführt im Jahr 2007, ist eine wahre Legende in der Automobilwelt. Als Teil der C-Klasse von Mercedes-Benz verkörpert der W204 die perfekte Mischung aus Eleganz, Leistung und Technologie. Von seinem markanten Design bis zu seinen leistungsstarken Antrieben hat der W204 die Messlatte in seinem Segment immer höher gelegt. Das Design des W204 ist ein Meisterwerk der Eleganz und des Stils. Mit seinen klaren Linien, muskulösen Proportionen und dynamischen Details strahlt er eine zeitlose Schönheit aus, die auch nach Jahren noch beeindruckt. Ob Limousine, Kombi oder Coupé - jede Variante des W204 verkörpert die DNA von Mercedes-Benz und lässt die Herzen der Autofans höherschlagen. Unter der Haube bietet der W204 eine breite Palette von Motoren, die für eine beeindruckende Leistung und Fahrerlebnis sorgen. Von sparsamen Dieselmotoren bis hin zu leistungsstarken Benzinaggregaten ist für jeden Fahrstil und jede Anforderung etwas dabei. Dank modernster Technologien wie dem 4MATIC Allradantrieb und dem AGILITY CONTROL-Fahrwerk bietet der W204 eine herausragende Fahrperformance und Agilität, die ihn zu",
        tags:["c-klasse", "w204", "Mercedes"],
        },

    {
      id:`3`,
      ueberschrift:"Die Mercedes-Benz W222 S-Klasse Coupé: Eleganz und Luxus in Perfektion",
      datum:"8.1.2024",
      autor:"ChatGPT",
      teaser:"Entdecken Sie die Verkörperung von Luxus und Eleganz - das W222 S-Klasse Coupé. In unserem bevorstehenden Artikel tauchen wir ein in die Welt dieses einzigartigen Fahrzeugs, das nicht nur durch sein atemberaubendes Design und seine innovative Technologie besticht, sondern auch durch seinen unvergleichlichen Komfort und seine Fahrleistung. Erfahren Sie, wie das S-Klasse Coupé die Grenzen des Luxusautomobilbaus neu definiert und eine neue Ära des Fahrens einläutet.",
      text:"Das Mercedes-Benz S-Klasse Coupé der Baureihe W222 verkörpert die Essenz von Luxus und Eleganz auf höchstem Niveau. Seit seiner Einführung hat es die Maßstäbe für automobile Exzellenz neu definiert und begeistert mit seinem unvergleichlichen Design, seiner innovativen Technologie und seinem überragenden Komfort. Das Design des S-Klasse Coupés ist eine harmonische Verbindung aus kraftvollen Linien und sanften Kurven, die eine einzigartige Präsenz auf der Straße schaffen. Die markante Frontpartie mit dem ikonischen Kühlergrill und den schlanken LED-Scheinwerfern verleiht dem Fahrzeug einen souveränen Ausdruck, während die fließende Silhouette und die muskulösen Proportionen eine zeitlose Eleganz ausstrahlen. Im Inneren des S-Klasse Coupés erwartet die Insassen eine luxuriöse und komfortable Umgebung, die keine Wünsche offen lässt. Feinste Materialien wie edles Holz, hochwertiges Leder und gebürstetes Metall schaffen eine Atmosphäre von Exklusivität und Raffinesse. Die Sitze bieten nicht nur unübertroffenen Komfort, sondern sind auch mit einer Vielzahl von Funktionen ausgestattet, die das Fahrerlebnis noch angenehmer machen. Neben seinem beeindruckenden Design und seinem luxuriösen Interieur ist das S-Klasse Coupé auch technologisch führend. Innovative Features wie das COMAND Infotainment-System, das Burmester Surround-Soundsystem und die neuesten Fahrerassistenzsysteme sorgen für Unterhaltung, Sicherheit und Komfort auf höchstem Niveau. Unter der Motorhaube bietet das S-Klasse Coupé eine beeindruckende Auswahl an leistungsstarken Motoren, die eine dynamische Performance und eine sanfte Fahrt garantieren. Vom kraftvollen V8-Biturbo bis zum umweltfreundlichen Hybridantrieb ist für jeden Geschmack und Fahrstil etwas dabei. Insgesamt verkörpert das Mercedes-Benz S-Klasse Coupé der Baureihe W222 die Quintessenz von Luxus und bietet eine unvergleichliche Kombination aus Stil, Technologie und Komfort. Es ist mehr als nur ein Auto - es ist eine Aussage über höchsten Anspruch und erstklassige Qualität.",
      tags:["s-klasse", "w222","Mercedes"],
      },
      {
      
      id:`4`,
      ueberschrift:"AMG GT R Pro: Die ultimative Rennmaschine von Mercedes-AMG",
      datum:"1.1.2024",
      autor:"ChatGPT",
      teaser:"Der Mercedes-AMG GT R Pro ist mehr als nur ein Sportwagen. Er ist das Ergebnis der unermüdlichen Suche nach Höchstleistung und Präzision auf der Rennstrecke. Mit seinem aggressiven Design, seinem leistungsstarken Motor und seiner präzisen Fahrwerksabstimmung verkörpert der AMG GT R Pro das ultimative Fahrerlebnis für Motorsport-Enthusiasten und Performance-Liebhaber.",
      text:"Das Design des AMG GT R Pro ist eine Hommage an den Motorsport. Jedes Detail wurde sorgfältig entwickelt, um maximale Leistung und optimale Aerodynamik zu gewährleisten. Die markante Frontschürze mit dem großen Kühlergrill und den seitlichen Lufteinlässen verbessert nicht nur die Kühlung des Motors, sondern erhöht auch den Anpressdruck an der Vorderachse für verbesserte Traktion und Handling. Am Heck sorgt der imposante Heckflügel für zusätzlichen Abtrieb und Stabilität bei hohen Geschwindigkeiten. Unter der Motorhaube des AMG GT R Pro verbirgt sich ein leistungsstarker 4,0-Liter-V8-Biturbo-Motor, der eine beeindruckende Leistung von über 580 PS und ein maximales Drehmoment von 700 Nm liefert. Diese immense Kraft wird über ein präzises 7-Gang-Getriebe mit Doppelkupplung an die Hinterräder geleitet, was eine atemberaubende Beschleunigung und ein unvergleichliches Fahrerlebnis ermöglicht. Der AMG GT R Pro sprintet in nur wenigen Sekunden von 0 auf 100 km/h und erreicht eine Höchstgeschwindigkeit von über 300 km/h. Das Fahrwerk des AMG GT R Pro wurde für maximale Performance auf der Rennstrecke entwickelt. Die adaptive Sportfederung und das aktive Hinterachslenksystem sorgen für eine präzise Fahrwerksabstimmung und ein agiles Handling in jeder Fahrsituation. Das Ergebnis ist ein Fahrzeug, das sich präzise lenken lässt und eine unvergleichliche Fahrstabilität bietet, selbst bei extremen Kurvenfahrten und hohen Geschwindigkeiten. Der AMG GT R Pro ist nicht nur ein Meisterwerk der Ingenieurskunst, sondern auch ein Technologievorreiter. Mit modernsten Fahrerassistenzsystemen wie dem adaptiven Bremsassistenten und dem aktiven Spurhalteassistenten bietet er ein Höchstmaß an Sicherheit und Komfort. Darüber hinaus verfügt er über ein hochmodernes Infotainmentsystem mit einem großen Touchscreen-Display und umfangreichen Konnektivitätsfunktionen. Der Mercedes-AMG GT R Pro ist mehr als nur ein Sportwagen – er ist eine echte Rennmaschine, die für die Rennstrecke geboren wurde. Mit seinem aggressiven Design, seinem leistungsstarken Motor und seiner präzisen Fahrwerksabstimmung setzt er neue Maßstäbe in Sachen Performance und Fahrspaß. Für jeden, der das ultimative Fahrerlebnis sucht, ist der AMG GT R Pro die perfekte Wahl.",
      tags:["AMG", "GT-R", "Coupe"],
      },

    {
      id:`5`,
      ueberschrift:"Der EQS: Eine Revolution in der Elektromobilität",
      datum:"12.12.2023",
      autor:"ChatGPT",
      teaser:"Mit dem EQS hat Mercedes-Benz einen neuen Meilenstein in der Welt der Elektromobilität gesetzt. Als erstes vollelektrisches Luxusfahrzeug der Marke bietet der EQS nicht nur eine emissionsfreie Fahrt, sondern setzt auch neue Maßstäbe in Sachen Komfort, Leistung und Innovation.",
      text:"Das Design des EQS verkörpert die Vision von Mercedes-Benz für die Zukunft der Mobilität. Mit seiner fließenden Silhouette, dem markanten Frontgrill und den futuristischen Lichtelementen strahlt der EQS Eleganz und Modernität aus. Jedes Detail wurde sorgfältig gestaltet, um eine optimale Aerodynamik und Effizienz zu gewährleisten, ohne dabei den luxuriösen Charakter des Fahrzeugs zu beeinträchtigen. Unter der Haube des EQS steckt eine leistungsstarke Elektroantriebstechnologie, die eine beeindruckende Beschleunigung und eine großzügige Reichweite bietet. Mit einer Vielzahl von Batterieoptionen und Ladetechnologien können Fahrer ihren EQS individuell an ihre Bedürfnisse anpassen und von einer nahtlosen und bequemen Ladeerfahrung profitieren. Der EQS ist nicht nur ein Auto, sondern ein mobiles Technologiezentrum. Mit dem revolutionären MBUX Hyperscreen, einem nahtlosen und hochauflösenden Display, das das gesamte Armaturenbrett umfasst, setzt der EQS neue Maßstäbe in Sachen Infotainment und Bedienkomfort. Darüber hinaus bietet das Fahrzeug eine Vielzahl von Assistenzsystemen und Konnektivitätsfunktionen, die das Fahrerlebnis sicherer, komfortabler und unterhaltsamer machen. Als Teil seiner Nachhaltigkeitsstrategie hat Mercedes-Benz den EQS unter Berücksichtigung von Umweltaspekten und Ressourcenschonung entwickelt. Von der Produktion bis zum Recycling wurde jeder Schritt des Produktionsprozesses darauf ausgerichtet, die Umweltbelastung zu minimieren und einen positiven Beitrag zum Klimaschutz zu leisten. Der EQS verkörpert die Zukunft der Elektromobilität und steht für die Vision von Mercedes-Benz, nachhaltige und luxuriöse Fahrzeuge zu entwickeln, die die Bedürfnisse und Erwartungen der Kunden übertreffen. Mit seiner einzigartigen Kombination aus Design, Leistung und Technologie setzt der EQS neue Maßstäbe und definiert die Standards für die Mobilität von morgen neu.",
      tags:["EQ", "Elektro", "EQS", "s-klasse"],
      }
    ]

    app.get('/:articles/:id?', function(req, res) {
        var requestType = req.params.articles;
        var id = req.params.id;
      
        if (requestType === "articles") 
            {
          if (id) //Wenn ID vorhanden
            {
            let article = articles.find(article => article.id.toString() === id);

            if (article) //Wenn Artikel zur ID exisiert
                {
              res.contentType("application/json");
              res.status(200).send(JSON.stringify(article));
            } 
            else //Wenn es keinen Artikel zur ID gibt
            {
              res.contentType("text/html");
              res.status(404).send("Error: Article not found");
            }
          } 
          else // Keine Id --> Alles zurück geben
          {
            res.contentType("application/json");
            res.status(200).send(JSON.stringify(articles));
          }
        } 
        else // Falsche Route
        {
          res.contentType("text/html");
          res.status(404).send("Error: Route not found");
        }

});