const str = 'cost is $2345.87';
const costMatch = str.match(/\$([\d\.]+)/);
const cost = costMatch[1];
console.log(costMatch);
/**
 [
  '$2345.87',
  '2345.87',
  index: 8,
  input: 'cost is $2345.87',
  groups: undefined
]
 */
console.log(cost);