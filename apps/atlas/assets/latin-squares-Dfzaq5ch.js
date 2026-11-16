var e=`---
parent_id: book-mathematical-recreations-reader
chapter_id: latin-squares
title: "Latin Squares"
level: secondary
estimated_minutes: 170
license: CC BY-SA 4.0
---

# Latin Squares

A **Latin square** of order $n$ is an $n \\times n$ array in which each of the symbols $1,2,\\dots,n$ appears exactly once in each row and exactly once in each column. Unlike magic squares, there is no diagonal condition and no fixed relationship between the symbols and their positions. Latin squares encode balance and orthogonality, and they underlie the design of experiments, error-correcting codes, and the popular puzzle Sudoku.

## Worked example 1: definition and first examples

The smallest Latin squares are trivial. For $n=1$, the square is $(1)$. For $n=2$, there are two:

$$
\\begin{pmatrix}
1 & 2 \\\\
2 & 1
\\end{pmatrix}
\\qquad
\\begin{pmatrix}
2 & 1 \\\\
1 & 2
\\end{pmatrix}
$$

For $n=3$, there are $12$ Latin squares, but only one up to permutation of symbols, rows, and columns:

$$
\\begin{pmatrix}
1 & 2 & 3 \\\\
2 & 3 & 1 \\\\
3 & 1 & 2
\\end{pmatrix}
$$

A Latin square is **reduced** if its first row and first column are in natural order $1,2,\\dots,n$. The number of reduced Latin squares of order $n$ is:

- $n=1$: $1$
- $n=2$: $1$
- $n=3$: $1$
- $n=4$: $4$
- $n=5$: $56$

The total number of Latin squares of order $n$ is $n!(n-1)!$ times the number
of reduced squares. The normalisation is unique: first permute the $n$ columns
so that the first row is $1,2,\\ldots,n$, then permute rows $2,\\ldots,n$ so that
the first column is also $1,2,\\ldots,n$. These choices contribute $n!$ and
$(n-1)!$ possibilities in reverse; there is no third independent symbol factor.

## Worked example 2: orthogonal Latin squares

Two Latin squares $A$ and $B$ of order $n$ are **orthogonal** if, when superimposed, every ordered pair $(i,j)$ with $1 \\le i,j \\le n$ occurs exactly once. For $n=3$, the squares

$$
A = \\begin{pmatrix}
1 & 2 & 3 \\\\
2 & 3 & 1 \\\\
3 & 1 & 2
\\end{pmatrix},
\\qquad
B = \\begin{pmatrix}
1 & 2 & 3 \\\\
3 & 1 & 2 \\\\
2 & 3 & 1
\\end{pmatrix}
$$

are orthogonal: the superposition yields the nine distinct pairs $(1,1),(2,2),(3,3),(2,3),(3,1),(1,2),(3,2),(1,3),(2,1)$.

For $n\\ge2$, a set of mutually orthogonal Latin squares (MOLS) of order $n$
can contain at most $n-1$ squares. This bound is achieved when $n$ is a prime
power, by the finite-field construction; exercise 5 proves the prime case
directly using modular arithmetic. For $n=3$, the bound is 2 and the pair above
attains it. Order one is the trivial case and is excluded from this bound's
division by $n-1$.

**Proof of the bound.** Treat row, column, and the symbol in each of the $k$
squares as $k+2$ coordinate functions on the $n^2$ cells. Fix one cell $x$.
For each coordinate, exactly $n-1$ other cells share that coordinate value with
$x$. Two different coordinates cannot select the same other cell: row and
column identify a cell, row or column plus one Latin symbol identify a cell,
and two square symbols identify a cell by orthogonality. The resulting
$(k+2)(n-1)$ cells are therefore distinct and lie among the $n^2-1$ cells other
than $x$. Hence

\\[
  (k+2)(n-1)\\le n^2-1=(n+1)(n-1),
\\]

so $k\\le n-1$.

## Sudoku as a Latin square

A Sudoku puzzle is a $9 \\times 9$ Latin square with an additional constraint: each of the nine $3 \\times 3$ subgrids must also contain all digits $1$ through $9$. Felgenhauer and Jarvis's 2005 computer enumeration gives
$6\\,670\\,903\\,752\\,021\\,072\\,936\\,960$ completed Sudoku grids and records the
$5\\,524\\,751\\,496\\,156\\,892\\,842\\,531\\,225\\,600\\approx5.52475\\times10^{27}$
Latin squares of order $9$ used for comparison. Thus the Sudoku total is far
smaller than the unrestricted Latin-square total.

The extra subgrid condition is a region constraint on a Latin square. It does
not by itself make a Sudoku grid a Graeco-Latin square: that term requires two
orthogonal Latin squares whose superposition contains every ordered symbol pair.

## Euler's thirty-six officers problem

Euler's thirty-six officers problem asks for a pair of orthogonal Latin squares
of order $6$: one square assigns six ranks and the other six regiments, so every
rank-regiment pair occurs once. Tarry's 1901 *Le problème des 36 officiers*
proved that no such pair exists. Asking for six MOLS would be a much stronger and different statement;
indeed, any family of six would contain a pair.

Euler conjectured that no orthogonal pair exists when $n\\equiv2\\pmod4$.
Bose, Shrikhande, and Parker disproved that conjecture and completed the
existence result: a pair exists for every positive order except $2$ and $6$
(with order $1$ understood as the trivial case). Thus “not a prime power” is
not an obstruction; for example, order $10$ is not a prime power but does admit
an orthogonal pair.

## Common errors

- **Confusing Latin squares with magic squares.** A Latin square balances symbols within rows and columns; a magic square balances sums along rows, columns, and diagonals.
- **Assuming orthogonality is easy.** For $n=6$, no orthogonal pair exists; this is exceptional and took over a century to prove.
- **Ignoring the reduced normalisation.** Counting Latin squares requires care: permuting symbols, rows, and columns produces distinct squares but equivalent structures.
- **Treating Sudoku as a typical Latin square.** The subgrid constraint drastically reduces the solution space.

## Worked example: forced entries and contradictory clues

Consider a three-by-three Latin puzzle with symbols one, two and three.
Its first row reads one, blank, three; its second reads blank, three, one;
its third reads three, one, blank. Each row is missing just two, so placing
that symbol in its blank is forced. The completed rows are one-two-three,
two-three-one and three-one-two. Inspecting the columns confirms that each
also contains every symbol exactly once. Row completion supplied a candidate;
column verification established that it really is a Latin square.

Now change the lower-left clue from three to one while leaving the upper-left
clue as one. The first column then contains two fixed copies of one. No choices
for the blanks can remove that repetition. This altered puzzle has no solution,
even though its individual rows might still look locally repairable. A clue
cannot be treated as adjustable merely because it obstructs the desired answer.

For a larger partial square, a cell's candidates are symbols absent from both
its row and its column. A single candidate is forced, while no candidates
certifies failure for that partial assignment. Several candidates do not prove
that several completions exist: later constraints can eliminate all but one,
or all of them. This distinction between local permission and global completion
is the same reason a Sudoku solver must verify every relevant region rather
than filling rows independently. State which regions your puzzle requires;
Latin squares alone impose no extra Sudoku boxes.

## Exercises


### Exercise 1 {#latin-squares-ex-1}

**Explorer.** Write all reduced Latin squares of order $3$ and verify there is only one.

<details>
<summary>Hint 1</summary>

Inspect the centre after fixing the first row and column.

</details>

<details>
<summary>Hint 2</summary>

A centre 1 would force a repeated 3 in the last column.

</details>

<details>
<summary>Solution</summary>

A reduced square has first row $(1,2,3)$ and first column $(1,2,3)^T$.
   The centre cannot be 2 because its row already starts with 2. If it were
   1, the last entry of row 2 would be 3, repeating the 3 atop that column.
   Therefore the centre is 3. Row 2 is $(2,3,1)$ and row 3 is forced as
   $(3,1,2)$, proving that exactly one reduced square exists.

</details>

### Exercise 2 {#latin-squares-ex-2}

**Foundation.** Construct two orthogonal Latin squares of order $4$ and verify orthogonality by superposition.

<details>
<summary>Hint 1</summary>

Check each square's rows and columns separately.

</details>

<details>
<summary>Hint 2</summary>

   Then list pairs; Latin conditions alone do not prove orthogonality.

</details>

<details>
<summary>Solution</summary>

Using $\\mathbb{F}_4$ is one method; a direct construction is:

$$
A = \\begin{pmatrix}
1 & 2 & 3 & 4 \\\\
2 & 1 & 4 & 3 \\\\
3 & 4 & 1 & 2 \\\\
4 & 3 & 2 & 1
\\end{pmatrix},
\\qquad
B = \\begin{pmatrix}
1 & 2 & 3 & 4 \\\\
3 & 4 & 1 & 2 \\\\
4 & 3 & 2 & 1 \\\\
2 & 1 & 4 & 3
\\end{pmatrix}.
$$

Superposition yields $16$ distinct ordered pairs, confirming orthogonality.

</details>

### Exercise 3 {#latin-squares-ex-3}

**Secondary.** Prove that there are exactly $4$ reduced Latin squares of order $4$.

<details>
<summary>Hint 1</summary>

The second row begins with 2.

</details>

<details>
<summary>Hint 2</summary>

Enumerate its
   remaining three entries, excluding repeats in each column, before row 3.

</details>

<details>
<summary>Solution</summary>

In a reduced square the first row is $1234$ and the first column is $1234$.
   The second row begins with $2$; enumerating the permutations of $\\{1,3,4\\}$
   that avoid the symbol already at the top of each column leaves exactly
   $2143$, $2341$, and $2413$. Apply the same row and column test to the third
   row, which begins with $3$. The complete case table is

   | second row | admissible third row | forced fourth row |
   |---|---|---|
   | $2143$ | $3412$ | $4321$ |
   | $2143$ | $3421$ | $4312$ |
   | $2341$ | $3412$ | $4123$ |
   | $2413$ | $3142$ | $4321$ |

   In each line the fourth row is forced, column by column, to use the one
   missing symbol. Thus all four displayed arrays are Latin squares. Conversely,
   every reduced square must choose one of the three enumerated second rows and
   then one of the corresponding enumerated third rows in the table, so the
   list is exhaustive. Therefore there are exactly four reduced Latin squares
   of order $4$.

</details>

### Exercise 4 {#latin-squares-ex-4}

**Secondary.** A Sudoku grid is a $9 \\times 9$ Latin square with the additional subgrid constraint. Explain why the centre cell of a completed Sudoku grid is not constrained to any particular digit by symmetry alone.

<details>
<summary>Hint 1</summary>

Rename every digit by the same permutation.

</details>

<details>
<summary>Hint 2</summary>

A
   permutation can send the centre's current digit to any specified digit.

</details>

<details>
<summary>Solution</summary>

By symmetry, any permutation of the digits $1$ through $9$ transforms one completed Sudoku grid into another. Since all digits appear equally often in the centre position across all grids, no single digit is forced.

</details>

### Exercise 5 {#latin-squares-ex-5}

**Undergraduate.** Let $n$ be a prime. Construct $n-1$ mutually orthogonal Latin squares of order $n$ using the finite field $\\mathbb{F}_n$. Prove that they are pairwise orthogonal.

<details>
<summary>Hint 1</summary>

Solve two linear congruences for row and column indices.

</details>

<details>
<summary>Hint 2</summary>

Modulo a prime, every nonzero difference $k-l$ is invertible.

</details>

<details>
<summary>Solution</summary>

For prime $n$, label rows and columns by $0,1,\\dots,n-1$. For each $k \\in \\{1,\\dots,n-1\\}$, define $L_k(i,j) = ki+j \\pmod{n}$. Each $L_k$ is a Latin square because $ki+j \\equiv ki+j' \\pmod{n}$ implies $j \\equiv j'$, and $ki+j \\equiv ki'+j \\pmod{n}$ with $k \\neq 0$ implies $i \\equiv i'$. For $k \\neq l$, the pair $(L_k(i,j),L_l(i,j)) = (ki+j,li+j)$ determines $(i,j)$ uniquely because $ki+j \\equiv ki'+j'$ and $li+j \\equiv li'+j'$ imply $(k-l)i \\equiv (k-l)i'$, so $i \\equiv i'$ and then $j \\equiv j'$. Thus the squares are mutually orthogonal.

</details>

<a id="section-206-worked-example-3-balance-in-an-experiment"></a>
<a id="section-204-worked-example-3-balance-in-an-experiment"></a>
## Worked example 3: balance in an experiment

Suppose three plant varieties must each be used once in every row and column
of a $3\\times3$ plot. A Latin square assigns varieties while balancing the two
position directions. If three fertilizers must additionally be used once per
row and column, and every variety-fertilizer pair must occur once, an orthogonal
pair does exactly that. Interpret the first square above as varieties and the
second as fertilizers. There are nine cells and nine ordered treatment pairs,
each appearing once. Merely using two identical Latin squares would fail:
only pairs $(1,1),(2,2),(3,3)$ would occur, each three times.

This is a combinatorial balance statement. It does not prove that all
environmental effects vanish or provide a statistical analysis of measured
growth. The experiment still needs appropriate randomization and a model for
the scientific question. Recreational arrays provide a precise design component
without being a substitute for those other decisions.


<a id="section-154-complete-solutions"></a>
<a id="section-152-complete-solutions"></a>
## Complete solutions

[Exercise 1](#latin-squares-ex-1) · [Exercise 2](#latin-squares-ex-2) · [Exercise 3](#latin-squares-ex-3) · [Exercise 4](#latin-squares-ex-4) · [Exercise 5](#latin-squares-ex-5)

<a id="section-223-hints-for-exercises-1-5"></a>
<a id="section-221-hints-for-exercises-1-5"></a>
### Hints for exercises 1–5


[Exercise 1](#latin-squares-ex-1) · [Exercise 2](#latin-squares-ex-2) · [Exercise 3](#latin-squares-ex-3) · [Exercise 4](#latin-squares-ex-4) · [Exercise 5](#latin-squares-ex-5)

<a id="section-236-exercise-6-cyclic-squares-latin-squares-ex-6"></a>
<a id="section-234-exercise-6-cyclic-squares-latin-squares-ex-6"></a>
### Exercise 6: cyclic squares {#latin-squares-ex-6}

Prove that $L(i,j)=i+j\\pmod n$, for $0\\le i,j<n$, is a Latin square for
every positive integer $n$, even when $n$ is composite.

<details><summary>Hint 1</summary> Fix one index at a time.
</details>
<details><summary>Hint 2</summary> Addition by a fixed residue is reversible modulo any $n$.
</details>
<details><summary>Solution</summary> In row $i$, equality of two entries gives $i+j\\equiv i+j'$
and hence $j\\equiv j'$. The $n$ entries are therefore all residues exactly
once. The same subtraction works for columns. No multiplication inverse is
needed, so compositeness does not matter. For $n=1$ the one-entry array works.
</details>
<a id="section-250-exercise-7-why-nonzero-is-insufficient-latin-squares-ex"></a>
<a id="section-248-exercise-7-why-nonzero-is-insufficient-latin-squares-ex"></a>
### Exercise 7: why nonzero is insufficient {#latin-squares-ex-7}

For $n=4$, show that $L(i,j)=2i+j\\pmod4$ is not Latin. Identify the missing
hypothesis in a proposed extension of the prime construction.

<details><summary>Hint 1</summary> Compare rows 0 and 2.
</details>
<details><summary>Hint 2</summary> A nonzero residue need not be invertible modulo a composite number.
</details>
<details><summary>Solution</summary> At fixed $j$, rows 0 and 2 both have entry $j$, since
$2\\cdot2\\equiv0\\pmod4$. Columns thus repeat symbols. The prime proof used
that a nonzero coefficient has an inverse; 2 has no inverse modulo 4. This
does not rule out order-four MOLS using the genuine field with four elements,
whose multiplication differs from arithmetic modulo 4.
</details>
<a id="section-265-exercise-8-normalize-an-array-latin-squares-ex-8"></a>
<a id="section-263-exercise-8-normalize-an-array-latin-squares-ex-8"></a>
### Exercise 8: normalize an array {#latin-squares-ex-8}

Reduce the Latin square with rows $231,312,123$ using column permutations
followed by permutations of rows other than the first.

<details><summary>Hint 1</summary> Put old columns in the order 3,1,2.
</details>
<details><summary>Hint 2</summary> Then inspect the first column before exchanging any rows.
</details>
<details><summary>Solution</summary> The column permutation gives rows $123,231,312$. Its first
column is already $123$, so no row permutation is necessary. The reduced
square is the unique order-three example. Relabelling symbols is another
valid way to transform a Latin square, but is not an extra independent factor
in this particular reduction-and-counting argument.
</details>
<a id="section-280-exercise-9-build-a-sudoku-pattern-latin-squares-ex-9"></a>
<a id="section-278-exercise-9-build-a-sudoku-pattern-latin-squares-ex-9"></a>
### Exercise 9: build a Sudoku pattern {#latin-squares-ex-9}

Label rows and columns from 0 to 8. Prove that the entry
$1+(3r+\\lfloor r/3\\rfloor+c\\pmod9)$ gives a completed Sudoku grid.

<details><summary>Hint 1</summary> Its nine row shifts are $0,3,6,1,4,7,2,5,8$.
</details>
<details><summary>Hint 2</summary> In a block write $r=3a+u$ and $c=3b+v$, with $0\\le u,v<3$.
</details>
<details><summary>Solution</summary> Each row adds a constant to $c$, so it contains all residues.
The row shifts form a permutation of the residues, so each column does too.
Within a block the residue is $a+3b+3u+v\\pmod9$. The nine values $3u+v$
are precisely $0,\\ldots,8$, making every block valid. Adding 1 converts
residues into digits 1 through 9. This proves a construction, not a count of
all completed Sudoku grids.
</details>
<a id="section-296-exercise-10-six-team-scheduling-latin-squares-ex-10"></a>
<a id="section-294-exercise-10-six-team-scheduling-latin-squares-ex-10"></a>
### Exercise 10: six-team scheduling {#latin-squares-ex-10}

Construct a five-round round-robin schedule for teams $A,B,C,D,E,F$, with
each team playing once per round.

<details><summary>Hint 1</summary> Fix one team and rotate the other five around it.
</details>
<details><summary>Hint 2</summary> Verify the unordered pairs rather than using a Latin-square count.
</details>
<details><summary>Solution</summary> Use rounds
$(AF,BE,CD)$, $(AE,FD,BC)$, $(AD,EC,FB)$, $(AC,DB,EF)$,
$(AB,CF,DE)$. Each round uses all six teams once. The five pairs involving
$A$ are distinct. Among the others, the displayed list contains exactly
$BC,BD,BE,BF,CD,CE,CF,DE,DF,EF$, each once. Thus all fifteen unordered
pairs occur. No pair of orthogonal Latin squares of order six was required,
so the thirty-six-officers obstruction is irrelevant to this schedule.
</details>
<a id="section-313-project-design-a-tournament-schedule"></a>
<a id="section-311-project-design-a-tournament-schedule"></a>
## Project: design a tournament schedule

A round-robin tournament with $n$ teams requires $n-1$ rounds if $n$ is even, with each team playing once per round. Model this as a Latin square problem: rows are rounds, columns are teams, and entries are opponents. For $n=6$, construct a schedule and explain why the $n=6$ orthogonal obstruction does not prevent scheduling.

For a square model, append one extra row of self-opponents to the schedule's
$(n-1)\\times n$ table. Each column then contains every team label once.
Each round row is a permutation with no fixed point, and opponent assignments
are symmetric: if $A$ faces $B$, then $B$ faces $A$. These are extra scheduling
conditions, not consequences of an arbitrary Latin square.

<a id="section-323-summary"></a>
<a id="section-321-summary"></a>
## Summary

Latin conditions balance individual symbols; orthogonality balances ordered
pairs. Normalization gives a precise counting factor. Modular addition builds
Latin squares at every order, while the maximal orthogonal family requires
field inverses. Sudoku and round-robin schedules impose their own additional
constraints, which should be proved directly rather than inferred from a name.
`;export{e as default};