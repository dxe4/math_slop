
# Counting Parity Languages Without Inferring Termination
<a id="sec-collatz-analytic-combinatorics"></a>

A recurrence and generating function count binary words avoiding adjacent ones, while affine thresholds show what a language count omits.

## Preparation and source scope

This L4 article assumes the map conventions and proof language of the
[Collatz elective](#/books/collatz-conjecture/index) and the relevant finite-model
foundations of the [Collatz Research Toolkit](#/books/collatz-research-toolkit/index).
The preparation is named in the native prerequisite metadata; the discussion
below isolates one method rather than rebuilding the entire research course.

This is an abridged adaptation of [the retained source chapter](#/books/collatz-conjecture/40-analytic-combinatorics).
The original formulas, worked material, exercise solutions and section anchors
remain at that source. No new mathematics, execution, empirical result or
independent review is claimed by the adaptation. The classical conjecture remains
open in the dated record used by the source; this article presents no proof of it.

> **Convention used throughout**
>
> The shortcut map is
> $$
> S(n)=\begin{cases}
> n/2,&n\text{ even},\\
> (3n+1)/2,&n\text{ odd}.
> \end{cases}
> $$
> The symbol `1` records an odd input to a shortcut step. Under this convention,
> word `101` is realised by $n\equiv1\pmod8$; for example
> $1\to2\to1\to2$. The start $5$ instead begins `100`.

## Counting before formulas

Suppose $a_n$ is the number of words of length $n$ satisfying a rule. Direct
enumeration lists all $2^n$ binary words and tests them. It is exact, but it
hides structure and doubles the candidate set whenever $n$ increases.

A **recurrence** computes a later count from earlier counts. Consider words that
avoid `11`. Any valid nonempty word ends in zero or one. Appending zero to any
valid word preserves validity. If a valid word ends in one, its preceding symbol
must be zero, unless its length is one. Removing the final block `01` leaves an
arbitrary shorter valid word. Therefore

$$
a_n=a_{n-1}+a_{n-2}\qquad(n\ge2),
$$

with $a_0=1$ for the empty word and $a_1=2$ for `0` and `1`. Thus

$$
1,2,3,5,8,13,21,34,55,\ldots
$$

are shifted Fibonacci numbers: $a_n=F_{n+2}$ when $F_0=0,F_1=1$.

A nonexample clarifies the logic. The rule “the word is the prefix of the orbit
of one fixed positive integer” generally does not lead to this recurrence. A
fixed orbit supplies one word at each length, and its next symbol is determined
arithmetically. The Fibonacci recurrence counts all formal words satisfying a
local language rule, not successive prefixes sampled from one trajectory.

## Generating functions as ledgers

The **ordinary generating function** of $(a_n)$ is a formal power series

$$
A(z)=\sum_{n\ge0}a_nz^n.
$$

At first, $z$ is a bookkeeping symbol: the coefficient of $z^n$ stores the
length-$n$ count. Multiply the recurrence by $z^n$ and sum over $n\ge2$:

$$
\sum_{n\ge2}a_nz^n
=z\sum_{n\ge2}a_{n-1}z^{n-1}
+z^2\sum_{n\ge2}a_{n-2}z^{n-2}.
$$

The left side is $A(z)-1-2z$. The two right sums are
$z(A(z)-1)$ and $z^2A(z)$. Rearranging gives

$$
A(z)=\frac{1+z}{1-z-z^2}.
$$

This rational expression is not an approximation. Expanding it formally
reproduces every integer coefficient. It also reveals the characteristic
equation $r^2=r+1$, whose positive root

$$
\varphi=\frac{1+\sqrt5}{2}
$$

controls exponential growth. The second root has absolute value below one, and
the exact Fibonacci formula yields

$$
a_n=F_{n+2}\sim\frac{\varphi^{n+2}}{\sqrt5}.
$$

The symbol $\sim$ means the ratio of the two sides tends to one. It does not
mean equality at finite $n$.

## Marking odd branches

One count is too coarse for Collatz multipliers. Introduce a second marker $u$:

$$
P_n(u)=\sum_{\substack{|w|=n\\w\text{ avoids `11`}}}u^{o(w)}.
$$

The coefficient of $u^k$ counts valid words with exactly $k$ odd symbols.
Repeating the final-symbol decomposition gives

$$
P_n(u)=P_{n-1}(u)+uP_{n-2}(u),
$$

with $P_0(u)=1$ and $P_1(u)=1+u$. Consequently the bivariate generating
function is

$$
P(z,u)=\sum_{n\ge0}P_n(u)z^n
=\frac{1+uz}{1-z-uz^2}.
$$

There is also a direct coefficient proof. To place $k$ ones with no adjacency
among $n$ positions, first reserve the $k-1$ zeros required between consecutive
ones. The remaining $n-(2k-1)$ zeros may be placed in the $k+1$ gaps before,
between, and after the ones. Equivalently, shift the chosen one-positions
$i_1<\cdots<i_k$ to $j_r=i_r-(r-1)$. This gives an ordinary $k$-subset of
$\{1,\ldots,n-k+1\}$. Hence

$$
[u^k]P_n(u)=\binom{n-k+1}{k}.
$$

For $n=8$, the values for $k=0,1,2,3,4$ are

$$
1,\ 8,\ 21,\ 20,\ 5,
$$

and their \sum is $55=F_{10}$.

## Complete case study: language count to residue count

Chapter 21's finite parity coding theorem says that the map

$$
r\pmod{2^n}\longmapsto
(S^0(r)\bmod2,\ldots,S^{n-1}(r)\bmod2)
$$

is a bijection. Therefore exactly $F_{n+2}$ residues modulo $2^n$ have a
length-$n$ prefix avoiding consecutive odd branches. More finely, exactly

$$
\binom{n-k+1}{k}
$$

residues have such a prefix with $k$ odd steps. This is an exact finite theorem,
not a random model.

For a word with $k$ ones, Chapter 4 gives

$$
S^n(x)=\frac{3^kx+b(w)}{2^n},
\qquad b(w)\ge0.
$$

Avoiding `11` forces $k\le\lceil n/2\rceil$. For $n\ge5$,

$$
\frac{3^k}{2^n}
\le\frac{3^{\lceil n/2\rceil}}{2^n}<1.
$$

For odd $n=2m+1$, the upper bound is $3^{m+1}/2^{2m+1}$; increasing $m$ by
one multiplies it by $3/4$, and at $n=5$ it is $27/32$. The even case is
smaller. Thus, for each such word, every sufficiently large positive start in
its compatible residue class descends below its start at the declared time
$n$.

The word “eventually” is essential. Descent at time $n$ requires

$$
(2^n-3^k)x>b(w).
$$

The exact threshold is

$$
x>\frac{b(w)}{2^n-3^k}.
$$

Every smaller positive representative in the compatible residue class must be
checked separately. A subunit slope is not permission to discard the additive
term.

## Prefix-free descent languages

A set of words is **prefix free** when no listed word is the beginning of
another. A certified word of length $d$ represents one residue cylinder of
weight $2^{-d}$. For a finite prefix-free set $\mathcal C$, the Kraft sum is

$$
K(\mathcal C)=\sum_{w\in\mathcal C}2^{-|w|}.
$$

If $K=1$, the cylinders cover every infinite binary sequence and, after
refinement to the maximum depth, every residue class. If $K<1$, the missing
weight measures unresolved cylinders, not counterexamples.

Generating functions can count certified and unresolved words by depth, but a
counting identity cannot establish the descent label. Each accepted word needs
an affine certificate, its compatible residue, its threshold, and coverage of
small exceptions. An automaton accepting a large fraction of prefixes may still
leave one compatible infinite path. Universal convergence cannot discard that
path merely because its relative frequency is zero.

### A complete symbolic cover that is not a descent cover

The four words

$$
\mathcal C=\{0,10,110,111\}
$$

are prefix free. Their weights add to

$$
\frac12+\frac14+\frac18+\frac18=1.
$$

Every infinite binary sequence begins with exactly one member of
$\mathcal C$: either its first bit is zero; its first two bits are `10`; or its
first two bits are `11`, after which the third bit selects `110` or `111`.
Thus this is a complete symbolic cover.

It is not a complete descent certificate. Word `0` maps $x$ to $x/2$, and word
`10` maps $x$ to $(3x+1)/4$, so they descend for the appropriate positive
starts apart from the known small equality at one. But

$$
S^3(x)=\frac{9x+5}{8}
$$

on `110`, while `111` has still larger slope. Those leaves rise at the declared
horizon. A Kraft sum verifies coverage, not the arithmetic label attached to
each leaf. A genuine sieve would expand the unresolved leaves and retain the
already certified leaves.

This example supplies a useful two-column checker. The symbolic column verifies
prefix freeness and Kraft equality. The arithmetic column recomputes every
affine map and descent range. Acceptance requires both columns.

## Theorem-scope and failure audit

- The recurrence, rational generating function, coefficient formula, and
  residue counts are exact theorems.
- Dominant-root asymptotics describe the number of formal prefixes in the
  declared language.
- A finite automaton describes only the memory encoded in its states.
- A subunit affine slope leaves an explicit additive threshold.
- A finite prefix-free Kraft sum of one already proves complete symbolic coverage; arithmetic descent coverage additionally requires
  valid leaf descent certificates, their thresholds, and all small exceptions resolved.
- Large language growth does not prove that the inverse component of one covers
  all positive integers.
- No finite automaton is known to recognize exactly the positive starts whose
  classical Collatz orbit reaches one.

The chapter therefore adds an exact counting method, not a claimed solution of
the conjecture.


## Exercises

### Exercise 1
<a id="deep-dive-collatz-parity-language-counting-ex-1"></a>

Count length-five binary words with no adjacent ones, both by the recurrence and by summing odd-count layers.

<details>
<summary>Hint 1</summary>

Begin with the empty-word and one-letter counts.

</details>

<details>
<summary>Hint 2</summary>

For exactly $k$ ones, shift successive positions by zero, one, two, and so on.

</details>

<details>
<summary>Solution</summary>

The recurrence gives counts one, two, three, five, eight, thirteen at lengths zero through five. By layers, the allowed values of $k$ are zero through three, giving $\binom60+\binom51+\binom42+\binom33=1+5+6+1=13$. The position shift is a bijection between nonadjacent selected positions and ordinary subsets, so the layer sum has no omissions or double counting. This counts formal words, not consecutive prefixes drawn from a single fixed orbit.

</details>

### Exercise 2
<a id="deep-dive-collatz-parity-language-counting-ex-2"></a>

Explain why a prefix-free collection of parity cylinders covering every binary sequence is not automatically a certificate that every positive start descends.

<details>
<summary>Hint 1</summary>

A language describes branch choices, not just a multiplicative coefficient.

</details>

<details>
<summary>Hint 2</summary>

Each chosen word needs its compatible residue and strict affine inequality.

</details>

<details>
<summary>Solution</summary>

For each word, the exact iterate has form $(3^kx+b)/2^h$ on its compatible residue class. Descent requires $(2^h-3^k)x>b$, with admissibility and any threshold checked for every covered integer lift. A symbolic cover alone does not supply those inequalities. A cylinder can include starts for which its iterate increases, even if its word looks typical under a model. Prefix-freeness prevents overlap of chosen symbolic prefixes; it is a different property from arithmetic descent or a well-founded continuation argument.

</details>

## Continue with the full argument

Return to the [research toolkit](#/books/collatz-research-toolkit/index) for the surrounding definitions and transfer questions, and to the retained source for longer derivations and additional exercises. The distinction between a theorem in a declared model and a universal statement about positive integers remains part of every conclusion.
