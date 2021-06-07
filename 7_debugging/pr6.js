const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];
  // var newSpecies;
  let newSpecies;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}

// On line 15, newSpecies was hoisted to the top of the program. Because of this, it was actually
// not being re-declared and initialized with undefined on each iteration. This meant that
// on an iteration where `thisSpecies` is "not transformable", the value that newSpecies had
// from the previous iteration remained and since it is a truthy value, it gets output to the
// again.