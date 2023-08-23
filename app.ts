type Combinable = number | string;
type typeAlias = "as-number" | "as-text";

function combine(n1: Combinable, n2: Combinable, resultType: typeAlias) {
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
