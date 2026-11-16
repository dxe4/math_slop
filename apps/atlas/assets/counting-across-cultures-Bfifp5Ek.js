var e=`---
id: deep-dive-counting-across-cultures
title: "Ways to Write Thirty-Seven: A Number-System Time Machine"
license: CC BY-SA 4.0
---

# Ways to Write Thirty-Seven

The number thirty-seven is not the marks used to write it. $37$, thirty-seven tally scratches, three bundles of ten and seven loose counters, and $100101₂$ can all name the same quantity. In the last writing, the small lowered 2 labels a base-two notation rather than part of the quantity. Every notation makes some operations easy and hides others.

This is a mathematical time machine rather than a parade of “primitive” systems leading inevitably to ours. Additive, place-value, decimal, vigesimal, and sexagesimal representations answered different practical needs. Living communities developed and used them; surviving objects show only part of that activity.

No prior mathematics is assumed. Paper counters are enough.

## Station 1: bundle by tens

Make 37 counters. Trade each group of ten for a card marked “ten.” You obtain three tens and seven ones:

$$37 = 3\\cdot 10 + 7$$

The centred dot means “multiply,” the plus sign means combine the two amounts, and the equals sign says the expressions on its two sides name the same amount.

Modern decimal notation stores the coefficients 3 and 7 in positions. The right position has value $10^{0}=1$; the next has value $10^{1}=10$. For 407,

Here a small raised number is an exponent: $10^{1}$ means one factor of 10, while the convention $10^{0}=1$ names the units place. We could avoid the shorthand and simply call the positions ones, tens, and hundreds.

$$407 = 4\\cdot 100 + 0\\cdot 10 + 7\\cdot 1$$

The middle zero is not “nothing happened.” It protects place: without it, $47$ names another number.

## Station 2: additive Egyptian numerals

An additive system can use a distinct sign for 1, 10, 100, and larger powers of ten. To represent 37, repeat the ten sign three times and the one sign seven times. Position need not determine value; the sign carries its value.

A modern text-only simulation writes

$$|\\lVert  \\rVert|| + \\cap \\cap \\cap$$

where each $|$ means one and each $\\cap$ means ten. The historical hieroglyphs were not these keyboard approximations. The [British Museum’s student resource](https://www.britishmuseum.org/learn/schools/ages-7-11/ancient-egypt/counting-ancient-egypt-challenge) shows object images and explains its powers-of-ten signs.

Addition is concrete: collect like signs, then exchange ten ones for one ten. To add 27 and 18, pool 15 one signs and three ten signs. Trade ten ones for a ten, leaving four tens and five ones: 45.

The system is not place value, but it still supports an exchange algorithm. The question “which notation is best?” is incomplete until we name the task, writing material, trained users, and desired operations.

## Station 3: Maya dots, bars, and a shell

Maya numeration is vigesimal—organized around powers of twenty. A dot represents 1, a bar 5, and a shell-shaped sign zero. The [Smithsonian National Museum of the American Indian](https://maya.nmai.si.edu/maya-sun/maya-math-game) presents this system in collaboration with its wider Living Maya Time project and connects it to market and calendar calculation.

Within one level, 17 is three bars plus two dots. For ordinary base-twenty place value, 37 is

$$1\\cdot 20 + 17$$

Write one dot in the twenties level and three bars plus two dots in the ones level. Levels are conventionally stacked rather than written left-to-right.

To convert a nonnegative number $N$ to base twenty:

1. divide $N$ by 20;
2. record the remainder as the current digit;
3. repeat with the quotient until it is zero.

For 437: $437 = 21\\cdot 20+17$, then $21=1\\cdot 20+1$, so

$$437 = 1\\cdot 20^{2} + 1\\cdot 20 + 17$$

The raised 2 means “multiply 20 by itself,” so $20^{2}=20\\cdot 20=400$.

Calendar inscriptions can use a modified positional structure in which one place is related to 18 twenties rather than another factor of 20. That boundary case warns us not to flatten every historical practice into a single classroom rule.

## Station 4: Babylonian base sixty

Sexagesimal place value uses powers of sixty. Our time and angle measures preserve useful traces: 60 seconds make a minute and 60 minutes make an hour; a degree divides into 60 minutes of arc.

In base sixty,

$$125 = 2\\cdot 60 + 5$$

which we can write textually as $(2,5)₆₀$. Likewise,

$$3,725 = 1\\cdot 60^{2} + 2\\cdot 60 + 5 = (1,2,5)₆₀$$

Early cuneiform notation did not always mark an absolute starting power or an internal empty place unambiguously. Context helped readers decide whether a sequence meant, for example, 62 or a scaled relative. A historical notation can be mathematically powerful and still depend on contextual interpretation.

Base sixty has many divisors: 2, 3, 4, 5, 6, and more. Fractions such as $1/2$, $1/3$, and $1/5$ have short sexagesimal expansions. In decimal, $1/3$ repeats forever; in base sixty it is exactly $0;20$, because $20/60=1/3$.

## Station 5: the many jobs of zero

Zero can mean at least three related things:

- an empty place in a numeral;
- a number that can enter arithmetic;
- a reference point or origin.

These roles did not appear once, fully formed, in one place. Placeholder conventions occurred in several traditions. The Bakhshali manuscript from South Asia contains written dots in numerical work, but historians dispute whether “placeholder only” describes their full mathematical role. Oxford’s Bodleian Libraries [announced radiocarbon dates](https://glam.web.ox.ac.uk/node/218481) for three birch-bark samples in 2017; a [peer-reviewed response](https://doi.org/10.18732/H2XT07) challenged the interpretation, and Oxford later published a [2024 report with determinations for five folios](https://ora.ox.ac.uk/objects/uuid%3A5a6d1dd7-f20c-4209-adb6-33849f5b08f4). Dating the bark does not by itself date the composition or settle how every mark functions. The changing evidence and disagreement belong in responsible history.

The mathematical distinction is easy to test. In $507$, zero is a placeholder. In $5+0=5$, it is the additive identity. On a temperature or coordinate scale, it is a chosen reference. One symbol can serve several structures.

## Worked construction: build a converter

**Worked example.**

This inspectable JavaScript converts a nonnegative safe integer into digits in any base from 2 through 60:

\`\`\`js
function digitsInBase(number, base) {
  if (!Number.isSafeInteger(number) || number < 0) throw new Error("nonnegative safe integer required");
  if (!Number.isInteger(base) || base < 2 || base > 60) throw new Error("base 2..60 required");
  if (number === 0) return [0];
  const digits = [];
  while (number > 0) {
    digits.push(number % base);
    number = Math.floor(number / base);
  }
  return digits.reverse();
}
\`\`\`

In JavaScript, $%$ returns the remainder after division, \`Math.floor\` discards the fractional part of a nonnegative quotient, and \`reverse\` puts the most valuable digit first.

### Why it works

At each loop, division gives $number = base\\cdot quotient + remainder$. The remainder is at least zero and smaller than the base; the compact comparison $0\\le remainder<base$ says exactly that. The remainder is the final digit. Repeating on the smaller quotient finds every earlier digit. The invariant is that the original number equals the unprocessed quotient times the current power of the base plus the value already recorded. The quotient eventually reaches zero, so the algorithm terminates.

For a number with $d$ base-$b$ digits, it performs $\\Theta(d)$ divisions and stores $\\Theta(d)$ digits. The capital theta notation means that work and storage grow in direct proportion to the digit count, up to constant factors.

## Practice games and challenges

### 1. Secret base

<a id="deep-dive-counting-across-cultures-ex-1"></a>

**Exercise 1.**

In an unknown place-value base, $23$ means decimal 17. Find the base. Write $23_{b}$ to label the unknown base $b$; it means two groups of size $b$, plus three ones.


<details>
<summary>Hint 1</summary>

In base b, the left digit of 23 counts groups of size b.
</details>
<details>
<summary>Hint 2</summary>

Translate the two-digit numeral into two groups of b plus three ones, then solve for b.
</details>
<details>
<summary>Solution</summary>

$23_{b} = 2b+3=17$. In words, two groups of the unknown size plus three ones make 17. Remove the three ones: two groups make 14. Split 14 into two equal groups, so each group has size 7 and $b=7$.

</details>

### 2. Maya-style grouping

<a id="deep-dive-counting-across-cultures-ex-2"></a>

**Exercise 2.**

Express decimal 73 in ordinary base twenty.


<details>
<summary>Hint 1</summary>

Separate the number into complete twenties and a remainder less than twenty.
</details>
<details>
<summary>Hint 2</summary>

Represent the quotient on the twenties level and the remainder with bars of five and dots of one.
</details>
<details>
<summary>Solution</summary>

$73=3\\cdot 20+13$. The twenties level has three dots; the ones level has two bars and three dots.

</details>

### 3. Sexagesimal fraction

Show that $0;15$ in base sixty equals $1/4$.

**Answer.** The first fractional place represents sixtieths, so $15/60=1/4$.

### 4. Missing zero

Why does a place-value system need a way to distinguish $4\\cdot 100+7$ from $4\\cdot 10+7$?

**Answer.** They are 407 and 47. If the empty tens place is invisible and no other spacing convention is reliable, the written sequences become ambiguous.

### 5. Invent, then audit

Invent symbols for 1, 5, and 25. Write 43 additively. What is awkward?

**Answer.** One representation uses one 25, three 5s, and three 1s. Addition is possible by pooling and exchanging, but multiplication and very large numbers may require many marks unless more symbols or positions are introduced.

## Source and uncertainty note

Object records tell us what survived, where it is held, and sometimes its material date. They do not automatically reveal every user, oral practice, or meaning. Modern labels such as “base twenty” help comparison but may not match historical actors’ own categories. Dates, transmission paths, and claims of “first” should remain revisable when new evidence or better interpretation appears.

Continue with historical number systems, arithmetic, modular arithmetic, and [Mathematics Across Worlds](#/item/course-mathematics-across-worlds). The lasting idea is mathematical: a numeral is an encoding, and encodings can be compared by their place rules, exchange rules, ambiguity, and supported algorithms.
`;export{e as default};