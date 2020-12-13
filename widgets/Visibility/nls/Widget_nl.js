// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"dgrid/extensions/nls/pagination":{status:"${start} - ${end} van ${total} resultaten",gotoFirst:"Ga naar eerste pagina",gotoNext:"Ga naar volgende pagina",gotoPrev:"Ga naar vorige pagina",gotoLast:"Ga naar laatste pagina",gotoPage:"Ga naar pagina",jumpPage:"Spring naar pagina",rowsPerPage:"Number of rows per page",_localized:{}},"esri/layers/vectorTiles/nls/common":{_localized:{}},"esri/dijit/analysis/nls/DataStoreSelect":{relationalDS:"Relationeel",spatialDS:"Tijdruimtelijk",agsDataStore:"ArcGIS Data Store",
bdfsTemplates:"Big Data File Share Output templates",_localized:{}},"esri/dijit/analysis/nls/BrowseLayerMixin":{defaultAnaysisLayerTitle:"Kies analyselaag Levende Atlas",customAnalysisLayerTitle:"Analyselaag kiezen",searchPlaceholderText:"Analyselagen Levende Atlas zoeken",searchCustomPlaceholderText:"Analyselagen zoeken",mainActionTitle:"Selecteren",customActionName:"Selecteren en toevoegen aan kaart",customeSectionName:"Analyselagen Levende Atlas",Categories:"Categorie\u00ebn",boundaries:"Grenzen",
places:"Plaatsen",boundariesAndPlaces:"Grenzen en plaatsen",hexbins:"Hexbins",transportation:"Transport",point:"Puntlagen",line:"Polylijnlagen",polygon:"Polygoonlagen",pointFilterName:"Punt",lineFilterName:"Polylijn",polygonFilterName:"Vlak",multiPointFilterName:"Multi-punten",geometryFilterName:"Geometrie",featureLayerName:"Objectlaag",tableLayerName:"Tabel",itemTypeFilterName:"Itemtype",instantFilterName:"Direct",intervalFilterName:"Interval",timeFilterName:"Tijd",edit:"Bewerken",boundaryLayers:"Grenslagen van Esri",
customAnalysisGroupName:"Analysegroep van de organisatie",_localized:{}},"widgets/Visibility/nls/strings":{_widgetLabel:"Zichtbaarheid",observerLocation:"Observeerderlocatie",formatIconTooltip:"Invoerformaat",addPointToolTip:"Observeerderlocatie toevoegen",fieldOfView:"Blikveld",useMilsText:"Gebruik mil voor hoeken",observerHeight:"Observeerderhoogte",minObsDistance:"Min. observeerbare afstand",maxObsDistance:"Max. observeerbare afstand",taskURLError:"Het widgetconfiguratiebestand bevat een URL die niet bereikbaar is. Controleer bij uw systeembeheerder",
taskURLInvalid:"De geoprocessingtaak die met deze widget geconfigureerd werd, is niet geldig. Controleer bij uw systeembeheerder",viewshedError:"Er is een fout opgetreden tijdens het maken van de zichtbaarheid. Zorg ervoor dat uw observeerderlocatie binnen de extent van uw hoogteoppervlak valt.\x3c/p\x3e",validationError:"\x3cp\x3eHet zichtbaarheidcreatieformulier heeft ontbrekende of ongeldige parameters, Zorg ervoor dat:\x3c/p\x3e\x3cul\x3e\x3cli\x3eEr een observeerderlocatie ingesteld is.\x3c/li\x3e\x3cli\x3eHet Blikveld van observeerder niet 0 is.\x3c/li\x3e\x3cli\x3eDe observeerderhoogte een geldige waarde bevat.\x3c/li\x3e\x3cli\x3eDe min. en max. observeerbare afstanden geldigen waarden bevatten.\x3c/li\x3e\x3c/ul\x3e",
comfirmInputNotation:"Bevestig inputnotatie",notationsMatch:"notaties gevonden die overeenstemmen met uw input. Bevestig welke u wenst te gebruiken:",createBtn:"Maken",clearBtn:"Annuleren",setCoordFormat:"Co\u00f6rdinaatindelingtekst",prefixNumbers:'Voeg "+/-" prefix toe aan positieve en negatieve cijfers',parseCoordinatesError:"Kan co\u00f6rdinaten niet parsen. Controleer uw input.",cancelBtn:"Afbreken",applyBtn:"Toepassen",invalidMessage:"Voer een numerieke waarde in.",observerRangeMessage:"Ongeldige observeerderhoogte",
minimumRangeMessage:"Ongeldig minimaal observeerbaar bereik",maximumRangeMessage:"Het maximaal waarneembare bereik moet groter zijn dan het minimum waarneembare bereik en mag niet meer zijn dan ${limit} ${units}.",portalURLError:"De URL van uw ArcGIS Online-organisatie of Portal for ArcGIS is niet geconfigureerd. Vraag uw systeembeheerder om meer informatie",privilegeError:'Uw gebruikersrol kan geen analyse uitvoeren. Om de analyse te kunnen uitvoeren, moet de beheerder van uw organisatie u bepaalde a href\x3d"http://doc.arcgis.com/en/arcgis-online/reference/roles.htm" target\x3d"_blank"\x3emachtigingen\x3c/a\x3e verlenen.',
noServiceError:"Hoogte-analyseservice niet beschikbaar. Controleer uw ArcGIS Online-organisatie of Portal voor ArcGIS-configuraties.",pointToolTooltip:"Klik om een waarnemerlocatie toe te voegen",degreesLabel:"graden",milsLabel:"mijl",DD:"DD",DDM:"DDM",DMS:"DMS",DDRev:"DDRev",DDMRev:"DDMRev",DMSRev:"DMSRev",USNG:"USNG",MGRS:"MGRS",UTM_H:"UTM (H)",UTM:"UTM",GARS:"GARS",GEOREF:"GEOREF",DDLatLongNotation:"Decimale graden - Breedtegraad/Lengtegraad",DDLongLatNotation:"Decimale graden - Lengtegraad/Breedtegraad",
DDMLatLongNotation:"Graden decimale minuten - Breedtegraad/Lengtegraad",DDMLongLatNotation:"Graden decimale minuten - Lengtegraad/Breedtegraad",DMSLatLongNotation:"Graden decimale seconden - Breedtegraad/Lengtegraad",DMSLongLatNotation:"Graden decimale seconden - Lengtegraad/Breedtegraad",GARSNotation:"GARS",GEOREFNotation:"GEOREF",MGRSNotation:"MGRS",USNGNotation:"USNG",UTMBandNotation:"UTM - Band Letter",UTMHemNotation:"UTM - Hemisfeer (N/S)",mainPageTitle:"Radiale gezichtslijn",resultsTitle:"Resultaten",
publishBtnLabel:"Publiceren",layerName:"Gepubliceerde laagnaam",invalidLayerName:"Laagnaam mag alleen alfanumerieke tekens en onderstrepingstekens bevatten",back:"Achterkant",publishingFailedLayerExists:"Publiceren mislukt: u hebt al een featureservice met de naam {0}. Kies een andere naam.",checkService:"Controleer service: {0}",createService:"Maak service: {0}",unableToCreate:"Niet mogelijk om te maken: {0}",addToDefinition:"Voeg toe aan definitie: {0}",successfullyPublished:"Succesvolle publicatie weblaag{0}Beheer de weblaag",
userRole:"Kan service niet maken omdat de gebruiker niet gemachtigd is",publishToNewLayer:"Resultaten publiceren naar een nieuwe feature layer",missingLayerNameMessage:"U moet een geldige laagnaam invoeren voordat u kunt publiceren",layerNameExists:"Laagnaam bestaat al. Gebruik een andere laagnaam.",regionTypeLabel:"Regiotype",centerPointLabel:"Middenpunt",observationHeightLabel:"Observatiehoogte",heightUnitLabel:"Hoogte-eenheid",minObservationDistanceLabel:"MinObservatieafstand",maxObservationDistance:"MaxObservatieafstand",
distanceUnitLabel:"Afstandseenheid",fovstartAngleLabel:"FOV Starthoek",fovEndAngleLabel:"FOV Eindhoek",andleUnitsLabel:"Hoekeenheden",visibleSectionLabel:"Zichtbare sectie",nonVisibleSectionLabel:"Onzichtbare sectie",visibleSectionButtonLabel:"Instellingen zichtbare sectie configureren",nonVisibleSectionButtonLabel:"Instellingen onzichtbare sectie configureren",transparency:"Transparant",outline:"Omtreklijn",fill:"Vullen (kleur wordt alleen toegepast als stijl ingesteld is al solid)",style:"Stijll",
colorPicker:"Kleurenkiezer",lineStyles:{esriSLSDash:"Streep",esriSLSDashDot:"Streep punt",esriSLSDashDotDot:"Streep punt punt",esriSLSDot:"Punt",esriSLSLongDash:"Lange streep",esriSLSLongDashDot:"Lange streep punt",esriSLSNull:"Null",esriSLSShortDash:"Korte streep",esriSLSShortDashDot:"Korte streep punt",esriSLSShortDashDotDot:"Korte streep punt punt",esriSLSShortDot:"Korte punt",esriSLSSolid:"Ononderbroken"},fillStyles:{esriSFSBackwardDiagonal:"Achterwaarts",esriSFSCross:"Kruis",esriSFSDiagonalCross:"Diagonaal",
esriSFSForwardDiagonal:"Voorwaarts",esriSFSHorizontal:"Horizontaal",esriSFSNull:"Null",esriSFSSolid:"Ononderbroken",esriSFSVertical:"Verticaal"},settingsTitle:"Instellingen",_localized:{}}});