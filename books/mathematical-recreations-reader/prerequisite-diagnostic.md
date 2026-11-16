
# Prerequisite Diagnostic

This reader assumes comfort with whole-number arithmetic, simple fractions, and elementary geometry, plus willingness to write small tables, draw grids, and check cases systematically. The diagnostic below separates these skills and gives repair routes. It is not an exam; it is a self-check to guide efficient reading.

## What background is assumed

1. **Whole-number arithmetic and parity.** You should know even and odd, divisibility by $2$ and $3$, and the four operations on positive integers. You should be able to explain why the sum of two odd numbers is even.
2. **Simple fractions, ratios, and percentages.** You should read $3/4$ as three parts of four equal parts, compare fractions by a common denominator, and compute a simple probability such as "one favorable outcome out of six equally likely outcomes."
3. **Elementary geometric language.** Points, line segments, angles, polygons, area of a rectangle, and the Pythagorean theorem for right triangles. You should be comfortable drawing on squared paper.
4. **Willingness to experiment.** Many chapters ask you to record outcomes for small cases, look for a pattern, and then prove it covers every case. No prior proof course is required, but you should be ready to write a reason for every step.

## Self-diagnostic questions with answers

### Number sense and parity

**Question 1.** Explain why the sum of two odd integers is always even.

> **Answer.** Write the odd integers as $2k+1$ and $2m+1$. Their sum is $2k+2m+2 = 2(k+m+1)$, which is a multiple of $2$.

**Question 2.** A board has $7$ rows and $7$ columns, giving $49$ squares. A domino covers exactly two adjacent squares. Can the board be tiled by dominoes? Explain without drawing.

> **Answer.** Each domino covers two squares, so any tiled region must contain an even number of squares. $49$ is odd, so no tiling exists.

**Question 3.** Compute $2^{5}$ and $2^{6}$. Is $2^{10}$ closer to $1{,}000$ or $2{,}000$?

> **Answer.** $2^{5} = 32$ and $2^{6} = 64$. Then $2^{10} = 1{,}024$, which is closer to $1{,}000$.

### Fractions and probability

**Question 4.** Which is larger, $5/8$ or $2/3$? Justify by a common denominator.

> **Answer.** $2/3 = 16/24$ and $5/8 = 15/24$. Since $16 > 15$, we have $2/3 > 5/8$.

**Question 5.** A fair six-sided die is rolled once. What is the probability of rolling a number greater than $4$?

> **Answer.** The favorable outcomes are $5$ and $6$, so the probability is $2/6 = 1/3$.

### Geometry and coordinates

**Question 6.** A rectangle has side lengths $3$ and $4$. What is the length of its diagonal?

> **Answer.** By the Pythagorean theorem, the diagonal is $\sqrt{3^{2} + 4^{2}} = \sqrt{25} = 5$.

**Question 7.** A token starts at $(0,0)$ on a grid. Each move changes one coordinate by $1$. After exactly $3$ moves, how far from the origin can the token be? Give one example.

> **Answer.** The token can reach $(3,0)$, which has distance $3$ from the origin. It cannot be farther than $3$ because each move changes distance by at most $1$.

### Experiment and pattern

**Question 8.** List the first ten positive integers in binary.

> **Answer.** $1, 10, 11, 100, 101, 110, 111, 1000, 1001, 1010$.

**Question 9.** A heap contains $10$ counters. Two players alternately remove $1$, $2$, or $3$ counters. The player who takes the last counter wins. If you move first, what is your winning first move? Explain.

> **Answer.** Remove $2$ counters, leaving $8$. Whatever the opponent takes ($1$, $2$, or $3$), you can take enough to make the pair of moves sum to $4$, eventually leaving $4$ for the opponent, who leaves $1$, $2$, or $3$ for you to take on your final move. This is a classic take-away game analyzed by modular arithmetic.

## Scoring your diagnostic

- If you answered $8$–$9$ questions confidently and correctly, you have the background for the continuous route.
- If you answered $5$–$7$ correctly, read the relevant repair sections below, then proceed.
- If you answered fewer than $5$ correctly, work through the repair routes before the main chapters. The text will still be accessible, but the pace will be more comfortable with the gaps filled.

## Repair routes

### Number sense, parity, and modular arithmetic

- *Math Atlas: Winning with Invariants* — systematic introduction to invariants, parity arguments, and modular arithmetic for puzzles and games.
- *Math Atlas: The Working Mathematician's Toolkit* — proof techniques, induction, and basic number theory including divisibility and congruences.

### Fractions, ratios, and probability

- *Math Atlas: Algebra from Stories* — fractions, ratios, and proportional reasoning through contextual problems.
- *Math Atlas: Probability and Counting* — discrete probability, equally likely outcomes, and conditional reasoning.

### Geometry and coordinates

- *Math Atlas: Geometry by Construction* — ruler-and-compass constructions, area, and the Pythagorean theorem.
- *Math Atlas: The Working Mathematician's Toolkit* — coordinate geometry and vectors for grid-based arguments.

### Proof and reasoning

- *Math Atlas: The Working Mathematician's Toolkit* — writing proofs, using definitions precisely, and structuring arguments by cases.
- *Math Atlas: Winning with Invariants* — proof by invariant, strategy-stealing, and constructive existence arguments.

## What this reader does not assume

- **Calculus.** No derivatives or integrals are needed. Fractals introduces
  elementary sequence limits and geometric series locally; these passages may
  be read after the finite-stage constructions.
- **Linear algebra.** Matrices are mentioned only in the magic-squares and Latin-squares chapters, and the needed definitions are given there.
- **Programming.** Code appears in plain text for readability. No prior programming experience is required; programs use only basic loops and conditionals.
- **Advanced combinatorics.** Binomial coefficients and recurrence relations are introduced where they are needed.

## Access and reading support

- Use the notation guide for repeated reference; it is designed for lookup, not one-time reading.
- Work the exercises before reading solutions; the solutions show reasoning, not only answers.
- If a chapter feels syntactically dense, expand the compressed sentences into object-type, operation, quantifier, and convention before concluding that the mathematics is inaccessible.
