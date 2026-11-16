var e=`---
id: recipe-modular-rhythm-machines
title: "Modular Rhythm Machines: Even Pulses on a Circular Clock"
license: CC BY-SA 4.0
---

# Modular Rhythm Machines

**Before reading.** Read [Multiplication and Division](/resources/library:book-number-and-arithmetic:multiplication-division/).

How can $k$ pulses be spread as evenly as possible across $n$ time slots? This question turns rhythm into arithmetic on a circle. It also produces scheduling patterns, rotating duty cycles, and test sequences. No musical training is required: a pulse is 1, a rest is 0, and after slot $n-1$ we return to slot 0.

We will build a transparent generator, prove how many pulses it creates, diagnose when two patterns are merely rotations, and test what “even” can honestly mean when $k$ does not divide $n$.

## 1. A circular binary word

A pattern of length $n$ is a binary word

$x_{0}x_{1}\\ldots x_{n-1}$,

read cyclically. For $n=8$ and $k=3$, $10010010$ has pulses at slots 0, 3, and 6. Its circular gaps—the forward distances from one pulse to the next—are 3, 3, and 2. No three integers summing to 8 can be more equal than that: they must be two 3s and one 2.

Rotating a word changes its starting label but not its circular spacing. $10010010$, $00100101$, and other rotations describe the same unlabelled circular pattern. In a performance or schedule, however, slot 0 may be a meaningful downbeat or midnight, so keep the distinction explicit.

## 2. The floor-difference construction

For integers $0\\le k\\le n$, define

$x_j = floor((j+1)k/n) - \\lfloor jk/n\\rfloor$, for $j=0,\\ldots ,n-1$.

Because $(j+1)k/n - jk/n = k/n \\le 1$, each difference is 0 or 1. The construction emits a pulse whenever the steadily accumulating fraction crosses an integer.

\`\`\`js
function evenPulses(n, k) {
  if (!Number.isInteger(n) || n <= 0) throw new Error("n must be positive");
  if (!Number.isInteger(k) || k < 0 || k > n) throw new Error("need 0 <= k <= n");
  return Array.from({ length: n }, (_, j) =>
    Math.floor(((j + 1) * k) / n) - Math.floor((j * k) / n)
  );
}
\`\`\`

For $(n,k)=(8,3)$, this version gives $00100101$. Rotating it one slot to the right gives $10010010$. The different starting phase does not change its gap multiset.

The algorithm takes $Θ(n)$ time and $Θ(n)$ output space. Streaming one slot at a time uses constant working memory.

## 3. Why there are exactly k pulses

Sum the output bits:

$\\sum _{j=0}^{n-1} [floor((j+1)k/n)-\\lfloor jk/n\\rfloor]$.

Every interior term cancels with its negative neighbour. This **telescoping sum** leaves

$\\lfloor nk/n\\rfloor-\\lfloor 0\\rfloor=k$.

So the program never produces one pulse too many or too few. The proof also suggests a test: for every valid $n,k$, the returned array should be binary, have length $n$, and sum to $k$.

## 4. Why the gaps differ by at most one

Write Euclidean division

$n = qk + r$, with $0\\le r<k$.

If $k>0$, the $k$ circular gaps are positive integers summing to $n$. An ideally balanced collection must contain $k-r$ gaps of length $q$ and $r$ gaps of length $q+1$. Any pair differing by at least 2 could be made more equal by transferring one slot from the longer gap to the shorter.

The floor construction realizes exactly these two lengths. Consecutive pulse crossings occur when $jk/n$ passes successive integers; their slot indices are separated by either $\\lfloor n/k\\rfloor=q$ or $\\lceil n/k\\rceil=q+1$.

This is one precise meaning of “as even as possible.” It does not say all rhythmic perceptions or scheduling costs are captured by gap length. Accent, grouping, latency, and constraints may demand another objective.

## 5. Modular phase and rotation

To rotate a pattern by $s$ slots, use indices modulo $n$:

\`\`\`js
function rotate(pattern, s) {
  const n = pattern.length;
  return pattern.map((_, j) => pattern[(j - s + n) % n]);
}
\`\`\`

The expression $(j-s) \\pmod{n}$ wraps negative or oversized indices back around the circle. Rotation preserves pulse count and every circular gap. It does not preserve the labelled value at slot 0.

Two patterns can be tested for rotational equivalence by searching for one word inside two copies of the other:

\`\`\`js
function sameUpToRotation(a, b) {
  return a.length === b.length && (a.join("") + a.join("")).includes(b.join(""));
}
\`\`\`

This compact method takes up to quadratic time with a naive substring search. Linear-time string matching is possible, but for short rhythms inspectability may be more valuable than optimization.

## 6. Period collapse and the greatest common divisor

### Worked example: a repeated twelve-slot pattern

Sometimes a pattern repeats a shorter block. With 12 slots and 4 pulses, even spacing gives a pulse every 3 slots: $001001001001$, a 3-slot block repeated four times.

Let $d=gcd(n,k)$. Dividing both values by $d$ gives a primitive proportion $(n/d,k/d)$. The even pattern consists of $d$ repeats, up to rotation, of a length-$n/d$ pattern with $k/d$ pulses. When $gcd(n,k)=1$, the construction has no repetition forced by that shared divisor.

This is a mathematical claim about the binary pattern, not about whether a listener hears a shorter metre.

## 7. Layering cycles

Suppose one marker repeats every 3 slots and another every 4. Their joint configuration returns after $lcm(3,4)=12$ slots. More generally,

$lcm(a,b) = ab / gcd(a,b)$ for positive integers.

Use this to predict a composite loop length before simulating. For periods 6 and 8, the product 48 overcounts; $gcd(6,8)=2$, so the combined state repeats after 24 slots.

An implementation that runs for the product will still see a repeat, but it mistakes an upper bound for the least period.

## 8. A practical recipe

1. Choose $n$, the number of equal slots in one cycle.
2. Choose $k$, the pulse budget, and check $0\\le k\\le n$.
3. Generate the floor-difference word.
4. Rotate it to place a pulse or rest at a meaningful start.
5. List circular gaps and verify they are $\\lfloor n/k\\rfloor$ or $\\lceil n/k\\rceil$ when $k>0$.
6. Compute $gcd(n,k)$ to reveal repeated substructure.
7. If layering patterns, compute the least common multiple of their periods.
8. State which goal is being optimized. Even spacing is not the same as every artistic or engineering objective.

## Failure modes

- $k=0$ has no pulse gaps; do not divide by $k$.
- $k=n$ gives all pulses and circular gaps of 1.
- Linear gaps forget the wrap from the last pulse back to the first.
- Two rotated patterns may look different as strings but identical as unlabelled circles.
- Rounding pulse locations independently can create duplicates or the wrong count; floor differences avoid that.
- Floating-point multiplication can lose integer exactness for values beyond JavaScript’s safe integer range. Ordinary rhythm lengths are far below it; large scheduling problems should use integer recurrences or \`BigInt\`.

## Exercises with hints and complete solutions

### Exercise 1: Five in thirteen


Which gap lengths must an evenly spaced 5-pulse pattern in 13 slots use?

<details><summary>Hint 1</summary>

Divide the number of slots by the pulse count with remainder.

</details>
<details><summary>Hint 2</summary>

If all gaps are two or three, solve for how many of each sum to thirteen.

</details>
<details><summary>Solution</summary>

$13=2\\cdot 5+3$, so three gaps have length 3 and two have length 2.

</details>

### Exercise 2: Pulse proof


Generate $(n,k)=(5,2)$ by floor differences.

<details><summary>Hint 1</summary>

Write floors for j from zero through five.

</details>
<details><summary>Hint 2</summary>

Subtract consecutive floors, keeping the cyclic gap after the final pulse.

</details>
<details><summary>Solution</summary>

Differences of $\\lfloor 2j/5\\rfloor$ are $0,0,1,0,1$, summing to 2. Its circular pulse gaps are 2 and 3.

</details>

### Exercise 3: Rotation


Rotate $00100101$ two places right.

<details><summary>Hint 1</summary>

Move the last two symbols to the front.

</details>
<details><summary>Hint 2</summary>

Keep the internal order of both moved pieces.

</details>
<details><summary>Solution</summary>

The result is $01001001$ under the stated \`rotate\` convention. Rotating the original word by one slot right instead gives $10010010$; both retain gaps 3,3,2.

</details>

### Exercise 4: Composite period


Markers repeat every 10 and 15 slots. When does their combined state return?

<details><summary>Hint 1</summary>

The return time must be divisible by both periods.

</details>
<details><summary>Hint 2</summary>

Remove their common factor from the product.

</details>
<details><summary>Solution</summary>

$gcd(10,15)=5$, so $lcm=10\\cdot 15/5=30$ slots.

</details>

### Exercise 5: Counterexample to “all gaps equal”


Why can three pulses in eight slots not have equal integer gaps?

<details><summary>Hint 1</summary>

Circular gaps are positive integers adding to eight.

</details>
<details><summary>Hint 2</summary>

Equal gaps would require divisibility by three.

</details>
<details><summary>Solution</summary>

Equal gaps would each be $8/3$, not an integer number of slots. The best discrete balance uses floor and ceiling: 2,3,3.

</details>

## Continue

Modular arithmetic formalizes the circular clock. Fractions and ratios explain pulse density $k/n$. Sequences capture generated words. Combinatorics counts alternative patterns. Fourier methods later analyze their frequency content, while algorithms study generation and rotation matching.

The recipe’s broader lesson is that play becomes rigorous when “even” receives a definition, the construction exposes its state, and an invariant—exactly $k$ pulses—comes with a proof.
`;export{e as default};