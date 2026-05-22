//Ülesanne 10
//Toote objekt
//Loo toote jaoks objekt ‘toode‘, mis sisaldab vähemalt 3 omadust (nimetus, hind, kogus)
//Kuva objekti omadused konsoolis
//Lisa meetodid ja kuva konsoolis:
//  toote koguhind
//  muudab toote kogust
//  kuvab objekti sisu, kasutades sõne malli

let toode = {
  nimetus: "sai",
  hind: 3,
  kogus: 2022,

  koguhind: function() {
    return this.hind * this.kogus;
  }
};
console.log(toode)
console.log(toode.nimetus)
console.log(toode.koguhind()) 

// ostukorv

//let toode = {
  //nimetus: "sai",
  //hind: 3,
  //kogus: 2022,

  //koguhind: function() {
    //return this.hind * this.kogus;
//  }
//};

const ostukorv = {
    tooted: [
        { nimi:'Piim', hind:3.60, kogus:2 },
        { nimi:'Leib', hind:2.00, kogus:1 },
        { nimi:'Munad', hind:1.50, kogus:6 },
        { nimi:'Juust', hind:4.20, kogus:1 },
        { nimi:'Tomatid', hind:2.30, kogus:3 },
     ],
    kogusisu: function () {
        return this.tooted[0].nimi;
    }
};

//console.log(toode)
//console.log(toode.nimetus)
//console.log(toode.koguhind()) 

console.log(ostukorv)

//meetod
//console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus`)