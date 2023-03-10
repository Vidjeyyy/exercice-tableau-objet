

/* ---------------   constante pour les exercices  -------------------- */

const listeAnimaux = ['caniche', 'persan', 'canari', 'saumon'];

const animaux = [
  {
    famille: 'chien',
    patte: 4,
    poils: true,
    race: 'caniche',
  },

  {
    famille: 'chat',
    patte: 4,
    poils: true,
    race: 'persan',
  },

  {
    famille: 'oiseau',
    patte: 2,
    poils: false,
    race: 'canari',
  },

  {
    famille: 'poisson',
    patte: 0,
    poils: false,
    race: 'saumon',
  },
];

/* ---------------   EXERCICE 1  -------------------- */

for (i = 0; i < animaux.length; i++) {
  console.log("JE suis un " + animaux[i].race + ", je possede " + animaux[i].patte + (animaux[i].patte === 4
    ? " pattes et j'ai des poils"
    : (animaux[i].patte === 2 ? " pattes et j'ai des plumes" : " pattes et j'ai des ecailles"))
  );
}



/* ---------------   BONUS  -------------------- */

const animaux2 = [
  {
    famille: 'chien',
    patte: 4,
    poils: true,
    race: 'dalmatien',
  },

  {
    famille: 'chien',
    patte: 4,
    poils: true,
    race: 'dobermann',
  },

  {
    famille: 'chat',
    patte: 4,
    poils: true,
    race: 'siberien',
  },

  {
    famille: 'chat',
    patte: 4,
    poils: true,
    race: 'chartreux',
  },

  {
    famille: 'oiseau',
    patte: 2,
    poils: false,
    race: 'rouge gorge',
  },
  {
    famille: 'oiseau',
    patte: 2,
    poils: false,
    race: 'perroquet',
  },
  {
    famille: 'oiseau',
    patte: 2,
    poils: false,
    race: 'faisan',
  },

  {
    famille: 'poisson',
    patte: 0,
    poils: false,
    race: 'thon',
  },
  {
    famille: 'poisson',
    patte: 0,
    poils: false,
    race: 'bar',
  },
];


function f(parametre) {
  for (i = 0; i < parametre.length; i++) {
    console.log("JE suis un " + parametre[i].race + ", je possede " + parametre[i].patte + (parametre[i].patte === 4
      ? " pattes et j'ai des poils"
      : (parametre[i].patte === 2 ? " pattes et j'ai des plumes" : " pattes et j'ai des ecailles"))
    );
  }
}
