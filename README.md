


## Laagdrempelig-zoeken - Readme

<img width="947" alt="image" src="https://github.com/rvdegroen/OBA-project/assets/90154152/38ee2950-9612-433f-8924-751fe57c25d7">

## Table of Contents

- [Over het project](#over-het-project)
- [Demo](#demo)
- [Deelnemers](#deelnemers)
- [Installaties](#installaties)
  - [Repository clone](#repository-clone)
  - [Npm install](#npm-install)
  - [.env](#env)
  - [Applicatie runnen](#applicatie-runnen)
- [Packages geïnstalleerd](#packages-geïnstalleerd)
- [Licentie](#licentie)
- [Productbiografie](#productbiografie)
- [Design rationale](#design-rationale)

## Over het project
Dit project gaat over het creëren van een webinterface voor de OBA waar bezoekers in gewone mensentaal hun vraag kunnen stellen (NLP) en vervolgens de relevante materialen/antwoorden (NER) uit de OBA-API kunnen halen. De webinterface is afgestemd op natuurlijke conversatie (chat, WhatsApp, etc.) en is gericht op gebruikers van de OBA-website die in begrijpelijke taal antwoorden willen krijgen op hun vraag. Het doel en de taak van dit project is om de user experience en user flow te verbeteren voor mensen met een digitale achterstand die op de OBA-website komen om bijvoorbeeld te zoeken naar cursussen, activiteiten, boeken, enz.

## Demo📷
Bekijk de demo van het project op: [https://oba-catalogus.adaptable.app/](https://oba-catalogus.adaptable.app/)

## Deelnemers
- [@rvdegroen](https://github.com/rvdegroen)
- [@whtneyas](https://github.com/Whtneyas)

## Installaties
### Repository clone
Om het project te gebruiken moet je eerst clonen aan je computer met:

```
git clone https://github.com/rvdegroen/OBA-project.git
```

### Npm install
Om de benodigde packages te installeren, gebruik je de volgende regel code:

```
npm install
```

### .env
Je hebt een `.env`-bestand nodig om de applicatie te gebruiken. Neem contact op met de OBA voor de API-key.

### Applicatie runnen
Om de applicatie te starten, typ je de volgende code in de terminal:

```
npm run dev
```

## Packages geïnstalleerd
- Ejs
- Express
- Nodemon
- axios
- .env
- nodemon

## Licentie 
Dit project valt onder de MIT-licentie.

## Productbiografie
Bekijk onze individuele productbiografieën via de volgende linkjes:
- Whitney: [Productbiografie](https://cypress-television-56d.notion.site/Productbiografie-4248856803614d9ead5d29b9522b4ef3?pvs=4)
- Roshnie: [Productbiografie](https://www.dropbox.com/scl/fi/wujkk18ke502nmjy

# Design rationale

Wij hebben als groep een design rationale gemaakt. Deze kan je vinden op de volgende link: 

 https://www.dropbox.com/scl/fi/9h787yko3atj6t267nhl1/Design-Rationale-_-OBA-Project.paper?dl=0&rlkey=jtvw7swgmgudjv76n0okkrj58


 ## Herkansing 

Feedback beoordeling/ checklist

We hebben waardevolle feedback ontvangen om individueel aan een volgende iteratie te werken. Hieronder volgt een gedetailleerde lijst van de ontvangen feedbackpunten:

- [X] Aantrekkelijke interface en zero state: Hoewel de interface een aantrekkelijk design heeft, functioneert de interactie niet overal even goed. We moeten ervoor zorgen dat de gebruikerservaring consistent en vloeiend is op alle interactiepunten.

- [x] Formulier submit niet (geen form): Het indienen van het formulier werkt momenteel niet omdat er geen form-element is geïmplementeerd. We moeten ervoor zorgen dat de gebruiker de ingevulde gegevens succesvol kan verzenden.

- [X] Links met meest gestelde vragen werken niet: De links naar de meest gestelde vragen leiden momenteel niet naar de juiste informatie. We moeten ervoor zorgen dat deze links correct functioneren en de gebruiker naar relevante informatie leiden.

- [x] Leuke toepassing van de dialoog, alleen de esc-toets werkt niet? Hoewel de dialoogfunctionaliteit een leuke toevoeging is, is er momenteel een probleem met het gebruik van de 'esc'-toets om de dialoog te sluiten. Dit moet worden opgelost om een vlotte interactie te garanderen.

- [x] Geen goede interface-oplossing voor het tonen van zoekresultaten zonder afbeeldingen: In situaties waarin er geen afbeeldingen beschikbaar zijn voor zoekresultaten, ontbreekt momenteel een geschikte interface-oplossing. We moeten een alternatieve weergave of indicatie implementeren om gebruikers te informeren wanneer er geen afbeeldingen beschikbaar zijn.

- []x Veel bugs: Er zijn meerdere bugs en fouten ontdekt in de applicatie. We moeten grondig testen en alle geïdentificeerde bugs oplossen om de stabiliteit en functionaliteit te verbeteren.

- [X] De chat is onnavolgbaar: De chatfunctionaliteit is momenteel verwarrend en moeilijk te volgen. We moeten de chatinterface verduidelijken en ervoor zorgen dat gebruikers de conversatie gemakkelijk kunnen begrijpen.

- [x] Het werkt niet goed op verschillende schermformaten en de interface is slordig: De applicatie reageert niet goed op verschillende schermformaten en de algehele interface ziet er slordig uit. We moeten een responsieve lay-out implementeren en de interface optimaliseren voor een consistente en professionele uitstraling.

- [ ] De algehele presentatie mist context en uitleg: De huidige presentatie van het project mist context en duidelijke uitleg. Het is belangrijk dat we de nodige documentatie toevoegen om de beoordelaars een goed inzicht te geven in de functionaliteit en doelstellingen van de applicatie.

- [X] Maak een volgende versie die wel goed functioneert: Om aan de gestelde eisen te voldoen, moeten we individueel werken aan een volgende iteratie van de applicatie. Elk teamlid zal verantwoordelijk zijn voor het implementeren van verbeteringen op basis van de ontvangen feedback, zodat we een goed functionerende versie kunnen presenteren.


