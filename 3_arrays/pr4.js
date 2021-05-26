function concat(...args) {
  let newCollection = [];

  args.forEach(element => {
    if (Array.isArray(element)) {
      for(let index = 0; index < element.length; index += 1) {
        newCollection.push(element[index]);
      }
    } else {
      newCollection.push(element);
    }
  })

  return newCollection;
}

console.log(concat('a', 'b', 'c', [ 1, 2, 3 ], { a: 1, b: 2 })) // Output ['a', 'b', 'c', [ 1, 2, 3 ], { a: 1, b: 2 }]
