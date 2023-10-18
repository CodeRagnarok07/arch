const sizes = [
  16, 32, 57, 60, 70, 72, 76, 96, 114, 120, 128, 150, 152, 1800, 192, 310, 384,
  512, 9, 58, 80, 120, 152, 180, 1024, 10, 16, 24, 32, 48, 256, 24, 48, 192, 16,
  32, 64, 128, 256, 512, 1024, 16, 24, 48, 96, 62, 99, 173, 200,
];

function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  console.log(unique.sort());
}

removeDuplicates(sizes);
