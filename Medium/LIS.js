function LongestIncreasingSequence(arr) { 
  if (arr.length === 1) {
    return 1;
  }
  let sequences = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let sequence = [arr[i]];
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] > sequence[sequence.length-1]) {
        sequence.push(arr[j]);
      }
    }
    sequences.push(sequence);
  }
  console.log(sequences, 'sequences');
  let lengths = sequences.map(sequence => sequence.length);

  return Math.max(...lengths);
}

console.log(LongestIncreasingSequence([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]));