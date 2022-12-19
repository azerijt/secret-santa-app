const names = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// Function to shuffle array
const shuffleNames = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const randomNames = shuffleNames(names);

// Match each person with the next one, folding over at the end
const pairs = randomNames.map((name, index) => {
  return {
    name: name,
    recipient: randomNames[index + 1] || randomNames[0],
  }
});

console.log(matches);
