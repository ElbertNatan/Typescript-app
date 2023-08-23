function combine(n1: number | string, n2: number | string, resultType: string) {
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultType === "as-number"
  )
    return +n1 + +n2;
  else return n1.toString() + n2.toString();
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combineNames = combine("Max", "Ana", "as-text");
console.log(combineNames);
