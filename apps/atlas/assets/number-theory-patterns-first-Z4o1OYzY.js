var e=`---
id: deep-dive-number-theory-patterns-first
title: "Remainders, Primes, and Secret-Making Patterns"
license: CC BY-SA 4.0
---

# Remainders, Primes, and Secret-Making Patterns

Number theory studies whole numbers by asking what divides what, which remainders are possible, and how multiplication hides structure. It begins with calculations you can do on a clock and reaches unsolved questions about primes and curves. This first encounter assumes only counting and addition. Every new symbol is explained when it appears.

## 1. Division has two outputs

Share 29 counters equally among 6 boxes. Each box receives 4 and 5 counters remain. We record

$$29 = 6\\cdot 4 + 5$$

The dot means multiplication. The number 4 is the **quotient** and 5 is the **remainder**. A valid remainder after division by 6 must be one of 0, 1, 2, 3, 4, 5. A remainder of 6 could be traded for one more complete box.

For any positive number m, every whole number a has exactly one expression

$a = mq + r$, where $0 \\le r < m$.

This is the division algorithm. Here “algorithm” does not mean a computer program only; it means a guaranteed finite procedure and the theorem that its output has the advertised properties.

Try negative numbers by demanding the same remainder range. Since

$$-17 = 5\\cdot (-4) + 3$$

the canonical remainder of −17 after division by 5 is 3, not −2. Both −2 and 3 differ by a multiple of 5, but only 3 lies in the chosen list 0 through 4.

## 2. Same place on a clock

On a 5-hour clock, 17 and 2 land at the same place. Their difference, 15, is built from complete groups of 5. We write

\\[
17\\equiv2\\pmod 5.
\\]

and read “17 is congruent to 2 modulo 5.” Definition:

\\(a\\equiv b\\pmod m\\) means that \\(a-b\\) is a multiple of \\(m\\).

Congruence is a relationship, not an approximate-equality sign. It permits addition and multiplication:

- if \\(a\\equiv b\\pmod m\\), then \\(a+c\\equiv b+c\\pmod m\\);
- if \\(a\\equiv b\\pmod m\\), then \\(ac\\equiv bc\\pmod m\\).

For example, \\(17\\equiv2\\pmod5\\), so
\\(17^2\\equiv2^2\\equiv4\\pmod5\\). The enormous square never needs to be
expanded.

Cancellation is more delicate. From
\\(2\\cdot1\\equiv2\\cdot4\\pmod6\\) we cannot cancel \\(2\\) and conclude
\\(1\\equiv4\\pmod6\\): the premise is true because \\(2\\) and \\(8\\) have the same
remainder \\(2\\), but the conclusion is false. Division by a number modulo
\\(m\\) is legal only when that number has a multiplicative inverse modulo \\(m\\).

## 3. Greatest common divisors as a game

A number d **divides** a when a is an exact multiple of d. We write $d | a$. The greatest positive number dividing both a and b is their greatest common divisor, written $\\gcd(a,b)$.

To find $\\gcd(84,30)$, subtracting 30 repeatedly from 84 would preserve common divisors. Division packages those subtractions:

$$84 = 2\\cdot 30 + 24$$

$$30 = 1\\cdot 24 + 6$$

$$24 = 4\\cdot 6 + 0$$

The last nonzero remainder is 6, so $\\gcd(84,30)=6$. Why? A number divides 84 and 30 exactly when it divides 30 and $84-2\\cdot 30=24$. The pair changes but its common divisors do not. Repeating reaches a pair whose answer is visible.

Work backwards:

$$6 = 30-24 = 30-(84-2\\cdot 30) = 3\\cdot 30-84$$

So the gcd is an integer combination of the inputs. This **Bézout
certificate** proves more than the answer \\(6\\). In particular, \\(a\\) has an
inverse modulo \\(m\\) exactly when \\(\\gcd(a,m)=1\\). If \\(ax+my=1\\), then
\\(ax\\equiv1\\pmod m\\), so \\(x\\) is the inverse.

Example: \\(3\\cdot5-2\\cdot7=1\\), hence \\(3\\) has inverse \\(5\\) modulo \\(7\\).
Indeed \\(3\\cdot5=15\\equiv1\\pmod7\\).

## 4. Primes are multiplicative atoms

A **prime** is a whole number greater than 1 whose only positive divisors are 1 and itself. The number 1 is not prime: making it prime would destroy the uniqueness of factorization because any product could acquire arbitrarily many factors of 1.

Every integer greater than 1 can be factored into primes, and the prime factors are unique apart from order. Thus

$$360 = 2^{3}\\cdot 3^{2}\\cdot 5$$

This is the fundamental theorem of arithmetic. Existence can be shown by repeatedly splitting a composite number. Uniqueness needs a deeper fact: if a prime p divides a product ab, then p divides a or p divides b.

Euclid’s famous argument proves there are infinitely many primes. If a proposed complete list were $p₁,\\ldots,pₖ$, form

$$N = p₁p₂\\cdot \\cdot \\cdot pₖ + 1$$

No listed prime divides N because division leaves remainder 1. Either N is prime or some prime factor of N is missing from the list. Notice the careful conclusion: the constructed N need not itself be prime.

## 5. Worked example: two clocks at once

**Worked example.**

Find a number x that satisfies

\\[
x\\equiv2\\pmod3,\\qquad x\\equiv3\\pmod5.
\\]

Numbers on the first clock are 2, 5, 8, 11, 14, … . The first one leaving remainder 3 modulo 5 is 8. Every answer is $8+15k$, so the combined condition is

\\[
x\\equiv8\\pmod{15}.
\\]

The **Chinese remainder theorem** says that when the moduli are coprime—their gcd is 1—every pair of residue demands has exactly one solution modulo their product.

Noncoprime clocks overlap. Consider

\\[
x\\equiv2\\pmod6,\\qquad x\\equiv5\\pmod9.
\\]

The moduli share gcd \\(3\\). The residues \\(2\\) and \\(5\\) agree modulo \\(3\\), so
a solution exists: \\(x\\equiv14\\pmod{18}\\). But

\\[
x\\equiv1\\pmod4,\\qquad x\\equiv2\\pmod6
\\]

has no solution, because the first demand makes x odd while the second makes x even. General rule: two congruences are compatible exactly when their residues agree modulo the gcd of their moduli. When compatible, answers repeat modulo the least common multiple, not always the product.

## 6. Equations whose answers must be whole numbers

An equation seeking integer solutions is called **Diophantine**. The equation

$$6x+9y=30$$

has solutions because $\\gcd(6,9)=3$ divides 30. Divide by 3: $2x+3y=10$. One solution is x=2, y=2. All integer solutions arise by moving

$x = 2+3t$, $y = 2-2t$

for an arbitrary integer t. Substitution verifies that the changes cancel.

Congruences can prove impossibility. A square has remainder only 0 or 1 modulo 4. Therefore $x^{2}+y^{2}=4k+3$ has no integer solutions: the sum of two residues chosen from {0,1} cannot be 3 modulo 4. This is a **local obstruction**. Passing every modular test does not automatically produce a global integer solution, but failing one test is decisive.

Pythagorean triples solve $x^{2}+y^{2}=z^{2}$. Starting with whole numbers m>n,

$x=m^{2}-n^{2}$, $y=2mn$, $z=m^{2}+n^{2}$

always works because expansion gives $(m^{2}-n^{2})^{2}+(2mn)^{2}=(m^{2}+n^{2})^{2}$. Extra parity and gcd conditions describe when this produces each primitive triple exactly once up to swapping legs.

## 7. Functions that listen to factors

Number theory studies functions whose input is a positive integer. Examples:

- $\\tau(n)$: number of positive divisors of n;
- $\\sigma(n)$: sum of positive divisors of n;
- $\\phi(n)$: count of numbers from 1 through n that are coprime to n.

For $12=2^{2}\\cdot 3$, a divisor chooses exponent 0, 1, or 2 for factor 2 and exponent 0 or 1 for factor 3. Therefore $\\tau(12)=(2+1)(1+1)=6$. The divisors are 1,2,3,4,6,12.

If gcd(a,b)=1, divisor choices for a and b are independent, so $\\tau(ab)=\\tau(a)\\tau(b)$. A function with this coprime-product property is called **multiplicative**. It need not satisfy the formula when inputs share primes: $\\tau(4)=3$, not $\\tau(2)\\tau(2)=4$.

## 8. A curve with arithmetic points

Over ordinary real numbers, an equation such as $y^{2}=x^{3}+2x+1$ draws a smooth curve. Modulo 5, it becomes a finite point puzzle. Try x=0: the right side is 1, so y=1 and y=4 work because both squares leave remainder 1. Try x=1: the right side is 4, so y=2 and y=3 work. Continuing gives six finite points, plus a special identity point written $𝒪$.

On a nonsingular cubic, a chord-and-tangent rule adds points and makes an abelian group. Over a finite field, division in the slope formula means multiplying by a modular inverse. The condition

\\[
4a^3+27b^2\\not\\equiv0\\pmod p
\\]

prevents a singular pinch where the usual elliptic-curve group law breaks.

This small calculation is a window into elliptic curves and arithmetic geometry, not a substitute for them. Questions about rational points, ranks, local conditions, and reductions connect algebra, geometry, and analysis. Some are settled by major theorems; others remain research problems.

## 9. Arithmetic is not yet security

RSA begins with two primes p and q and the product n=pq. A public exponent e is chosen invertible modulo $(p-1)(q-1)$; its inverse d is private in the toy description. A message number M is transformed to

\\[
C\\equiv M^e\\pmod n,\\qquad M\\equiv C^d\\pmod n.
\\]

For \\(p=11\\), \\(q=17\\), and \\(e=7\\), the totient is \\(160\\) and \\(d=23\\)
because \\(7\\cdot23=161\\equiv1\\pmod{160}\\). With \\(M=42\\), repeated squaring
gives \\(C=15\\) and decryption returns \\(42\\).

That arithmetic round trip is not a secure encryption scheme. Tiny primes are factorable at sight. Deterministic “textbook RSA” leaks equality and lacks the randomized encoding and validation demanded by real schemes. Secure cryptography specifies an adversary, allowed queries, a success event, randomness, encodings, key sizes, side-channel protections, and an implementation environment. Mathematics supplies components; a protocol and a security definition say what they are meant to achieve.

## Boundaries and common traps

- Congruence permits addition and multiplication, but cancellation requires an
  invertible factor modulo the chosen modulus.
- A probable-prime test supplies evidence under its stated error model; a
  primality certificate supplies a checkable proof.
- A formula seen in many numerical cases remains a conjecture until a proof
  covers every input in its domain.
- A group law on a cubic requires nonsingularity, and formulas may use different
  coordinates or exceptional cases.
- A correct modular round trip is an algebra check, not a security proof.
  Security also depends on randomness, encoding, adversary capabilities,
  parameters, and implementation.

## Practice experiments

<a id="deep-dive-number-theory-patterns-first-ex-1"></a>

### Exercise 1

1. Make a remainder table for squares modulo 8. Which remainders never occur?

<details>
<summary>Hint 1</summary>

Every integer is congruent to one of the eight residues from zero through seven.
</details>

<details>
<summary>Hint 2</summary>

Square those eight representatives and collect only their distinct remainders.
</details>

<details>
<summary>Solution</summary>

Squares of 0 through 7 have remainders 0,1,4,1,0,1,4,1. Only 0,1,4 occur.

</details>

<a id="deep-dive-number-theory-patterns-first-ex-2"></a>

### Exercise 2

2. Run Euclid’s algorithm on 91 and 35, then work backwards to express the gcd as a combination.

<details>
<summary>Hint 1</summary>

Write successive Euclidean divisions of 91 by 35 and then of each divisor by the remainder.
</details>

<details>
<summary>Hint 2</summary>

After finding the last nonzero remainder, substitute backward to express it using 91 and 35.
</details>

<details>
<summary>Solution</summary>

$91=2\\cdot 35+21$, $35=1\\cdot 21+14$, $21=1\\cdot 14+7$, $14=2\\cdot 7$. Thus gcd=7. Backwards, $7=21-14=2\\cdot 21-35=2\\cdot (91-2\\cdot 35)-35=2\\cdot 91-5\\cdot 35$.

</details>

### Further exercises

3. Solve \\(x\\equiv1\\pmod4\\), \\(x\\equiv3\\pmod6\\), or prove it impossible.
4. Decide whether $15x+21y=4$ has integer solutions.
5. Factor 72 and compute its number of divisors.
6. On \\(y^2\\equiv x^3+2x+1\\pmod5\\), list \\(y\\) values for every \\(x\\).

## Answers


3. The gcd is \\(2\\) and residues \\(1\\) and \\(3\\) agree modulo \\(2\\), so
   solutions exist. Testing gives \\(x=9\\); all are
   \\(x\\equiv9\\pmod{12}\\).
4. No. Every left-hand value is divisible by $\\gcd(15,21)=3$, but 4 is not.
5. $72=2^{3}\\cdot 3^{2}$, so a divisor has 4 choices for the exponent of 2 and 3 for the exponent of 3: $\\tau(72)=12$.
6. For x=0, y=1,4; x=1, y=2,3; x=2, none; x=3, y=2,3; x=4, none. With $𝒪$, the group has seven points.

## Continue

Open the live modular/RSA/curve workbench to inspect exact Euclidean, exponentiation, and point tables. Then take the standard course for proofs of unique factorization, CRT, Fermat and Euler theorems, quadratic residues, arithmetic functions, Diophantine methods, prime distribution, and cryptographic definitions.
`;export{e as default};