
# Structural Counting: Bijections, Recurrences, and Generating Functions

<!-- euler-course-route -->

## Current course route

Use the [course page](#/courses/atlas-structural-counting) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

Counting is rarely about listing faster. The durable move is to represent the same finite objects in a form where multiplication, recursion, algebra, or probability exposes their structure. This course develops a compact workflow and proves why it works.

## Route, prerequisites, and starting check

Allow six meetings of about 75 minutes: three for Sections 1–3, two for Sections 4–7, and one for the investigations and cumulative assessment below. The course assumes binomial coefficients, finite probability, and induction. [Proof Foundations](#/courses/atlas-proof-foundations) is the repair route for quantified arguments; [Discrete Structures Studio](#/courses/atlas-discrete-mathematics-structures) supplies a longer continuation.

Before beginning, answer three questions.

1. Are the strings AB and BA different objects in the problem you are considering?
2. Why is $\binom{8}{3}$ inappropriate for choosing three people if one chosen person must also be assigned chair?
3. If two cases share an object, what goes wrong when their counts are added?

The intended answers are: order is part of the object only when the specification says it is; assigning a role requires further information, such as choosing the chair after the committee; and an object in both cases is counted twice. If any answer is unclear, write a set of five concrete objects and classify them before using formulas. Counting begins with an unambiguous object class.

## 1. Define the objects before counting them

Specify whether order matters, repetition is allowed, objects are labeled, and symmetries identify arrangements. “Choose three digits” could mean a set, an ordered string, a multiset, or a number whose first digit cannot be zero.

The product rule applies when every object is built by a sequence of independent choices with fixed branch counts. The sum rule applies to disjoint cases. If cases overlap, summing double-counts.

### Worked example: strings with prescribed symbols

How many length-eight strings contain exactly three $A$s, two $B$s, and three $C$s? Choose the $A$ positions, then the $B$ positions:

$\binom{8}{3}\binom{5}{2}=56\cdot10=560$.

Equivalently, arrange eight labeled placeholders and quotient permutations of identical symbols:

$8!/(3!2!3!)=560$.

The equality is a bijective statement: both formulas count the same position assignments.

## 2. Bijections transport a count

A bijection pairs every object in class $A$ with exactly one in class $B$. It proves $|A|=|B|$ without evaluating either side directly.

The identity

$\binom{n}{k}=\binom{n}{n-k}$

maps a $k$-element subset to its complement. More subtly,

$\sum_k \binom{r}{k}\binom{s}{n-k}=\binom{r+s}{n}$.

To prove it, split a population into groups of sizes $r$ and $s$. Count $n$-person committees directly on the right, or condition on choosing $k$ from the first group on the left.

A valid bijection needs an inverse or a convincing uniqueness argument. A many-to-one encoding proves at most an inequality unless fiber sizes are controlled.

## 3. Correct overlap with inclusion–exclusion

For finite sets $A$ and $B$,

$|A\cup B|=|A|+|B|-|A\cap B|$.

For many sets,

$\left|\bigcup_i A_i\right|
=\sum_i|A_i|
-\sum_{i<j}|A_i\cap A_j|
+\sum_{i<j<k}|A_i\cap A_j\cap A_k|
-\cdots.$

An element lying in exactly $m$ sets receives total coefficient

$\binom{m}{1}-\binom{m}{2}+\ldots +(-1)^{m+1}\binom{m}{m}=1$,

because $(1-1)^m=0$. That coefficient calculation is the proof.

### Worked example: onto functions

Count functions from a four-element labeled domain onto three labeled targets. There are $3^4$ functions. Let $A_j$ be functions missing target $j$. Each $|A_j|=2^4$; each pairwise intersection has $1^4$ function; missing all targets is impossible. Hence

$3^4-\binom{3}{1}2^4+\binom{3}{2}1^4=81-48+3=36$.

The alternating signs are not optional bookkeeping; they repair repeated subtraction.

## 4. Recurrences describe the first decision

Let $a_n$ count tilings of a $1\times n$ board using squares of length one and dominoes of length two. Inspect the leftmost tile:

- a square leaves a tiling of length $n-1$;
- a domino leaves one of length $n-2$.

The cases are disjoint and exhaustive, so

$a_n=a_{n-1}+a_{n-2}$, with $a_0=1$, $a_1=1$.

Thus $a_n$ is the shifted Fibonacci sequence. The empty tiling $a_0=1$ is essential: it makes a final domino a valid construction.

Dynamic programming is the recurrence made executable:

```text
tilings(n):
    if n = 0: return 1
    previous_previous <- 1
    previous <- 1
    for length from 2 through n:
        current <- previous + previous_previous
        previous_previous <- previous
        previous <- current
    return previous
```

This uses $\Theta(n)$ additions and constant auxiliary memory. Its integer bit cost grows as answers acquire more digits, a detail hidden by the unit-cost arithmetic model.

## 5. Generating functions turn recurrence into algebra

Define the ordinary generating function

$A(x)=\sum_{n\ge 0} a_n x^n$.

Multiply the recurrence by $x^n$ and sum for $n\ge 2$:

$A(x)-a_0-a_1x = x(A(x)-a_0)+x^2 A(x)$.

With $a_0=a_1=1$, rearrange:

$A(x)=1/(1-x-x^2)$.

This formal power series packages every count into one algebraic object. Factoring the denominator yields a closed form; multiplying generating functions combines independent sizes by convolution.

For example,

$(1+x+x^2+\ldots )^3=1/(1-x)^3$

counts triples $(u,v,w)$ of nonnegative integers by total $u+v+w$. The coefficient of $x^n$ is $\binom{n+2}{2}$, the stars-and-bars count.

Convergence is not needed for formal coefficient manipulation. Analytic conclusions about growth do require a domain and justification.

## 6. Double counting creates identities and bounds

Count incidences $(v,e)$ where vertex $v$ touches edge $e$ in a finite undirected graph. Summing over edges gives $2|E|$; summing over vertices gives $\sum_v\deg(v)$. Therefore

$\sum_v\deg(v)=2|E|$.

As a consequence, the number of odd-degree vertices is even. This is a structural theorem extracted from two views of the same set.

Double counting also proves averages. If the average degree is $2|E|/|V|$, at least one vertex has degree at least that average and at least one has degree at most it.

## 7. Probability can prove existence

Choose an object randomly. If the expected number $\mathbb E[X]$ of defects is below one and $X$ is a nonnegative integer, some outcome must have zero defects; otherwise every outcome would have $X\ge1$ and the expectation would be at least one.

### Worked coloring bound

Color each vertex of a graph independently red or blue. An edge is monochromatic with probability $1/2$. If the graph has $m$ edges and $X$ counts monochromatic edges, linearity of expectation gives

$\mathbb E[X]=m/2$,

without requiring edge indicators to be independent. Therefore some two-coloring has at most $m/2$ monochromatic edges, equivalently a cut crossing at least $m/2$ edges.

This proves existence and suggests a randomized algorithm. It does not by itself identify the best cut or guarantee one run beats the expectation.

## Choosing a method

```text
if objects decompose into disjoint choices: use sum/product rules
if another class is easier: seek a bijection
if forbidden properties overlap: use inclusion-exclusion
if removing a first component leaves a smaller instance: derive a recurrence
if sizes combine by convolution: use a generating function
if one incidence has two natural owners: double-count
if explicit construction is hard: randomize and bound bad events
```

## Failure modes

- Treating indistinguishable objects as labeled introduces factorial overcounts.
- Dividing by a symmetry-group size fails when different objects have different stabilizers.
- Recurrence cases must be both exhaustive and disjoint.
- Initial conditions encode combinatorial meaning; guessing them breaks the sequence.
- Inclusion–exclusion becomes expensive when intersections have no uniform structure.
- Generating-function algebra can be formally valid while an analytic substitution is not.
- Linearity of expectation never requires independence, but multiplying probabilities usually does.

## Exercises

1. Count length-six binary strings with exactly two ones.
2. How many integers from $1$ through $100$ are divisible by $2$ or $5$?
3. Derive a recurrence for binary strings of length $n$ with no consecutive ones.
4. Find the coefficient of $x^7$ in $(1+x+x^2+\ldots )^3$.
5. A graph has 15 edges. What cut size does the random-coloring argument guarantee?

## Answers

1. Choose the one positions: $\binom{6}{2}=15$.
2. $50+20-10=60$ by inclusion–exclusion.
3. If the first bit is $0$, append any valid length $n-1$ string; if it is $1$, the next is $0$, leaving length $n-2$. Thus $a_n=a_{n-1}+a_{n-2}$ with $a_0=1,a_1=2$.
4. $\binom{9}{2}=36$.
5. At least $\lceil 15/2\rceil=8$, because some integer cut size is at least the expectation $7.5$.

## Investigation 1 — Derangements by inclusion–exclusion

A derangement of $\{1,\ldots,n\}$ is a permutation with no fixed point. Let $D_n$ be the number of derangements. Begin with all $n!$ permutations. For each position $i$, let $A_i$ be the set of permutations fixing $i$. If a chosen set of $k$ positions must be fixed, the remaining $n-k$ symbols can be permuted in $(n-k)!$ ways. Inclusion–exclusion therefore gives

$$
D_n=\sum_{k=0}^{n}(-1)^k\binom nk(n-k)!
=n!\sum_{k=0}^{n}\frac{(-1)^k}{k!}.
$$

For $n=4$ this is

$$D_4=24-4\cdot6+6\cdot2-4\cdot1+1=9.$$

The alternating expression has a probabilistic interpretation. If a permutation is chosen uniformly, the probability of no fixed points is

$$\frac{D_n}{n!}=\sum_{k=0}^{n}\frac{(-1)^k}{k!},$$

which approaches $e^{-1}$. The exact count came from finite inclusion–exclusion; the limiting probability additionally uses convergence of the exponential series. Keep those two claims separate.

### A second derivation gives a recurrence

Focus on where a derangement sends 1. Suppose $1$ is sent to $j\ne1$. There are $n-1$ choices for $j$. If $j$ is sent back to 1, the remaining $n-2$ elements form a derangement, giving $D_{n-2}$ possibilities. If $j$ is not sent to 1, deleting 1 from its cycle and redirecting the element that pointed to 1 so that it points to $j$ gives a derangement of the other $n-1$ elements. This construction is reversible and gives $D_{n-1}$ possibilities. Hence

$$D_n=(n-1)(D_{n-1}+D_{n-2}),\qquad D_0=1,\quad D_1=0.$$

Check $D_4=3(D_3+D_2)=3(2+1)=9$. The agreement of two methods is a useful error check, while the bijective construction is what proves the recurrence.

**Try it.** Use both formulas to compute $D_5$. Inclusion–exclusion gives $120-120+60-20+5-1=44$; the recurrence gives $4(9+2)=44$. If the two answers differ, inspect the signs in inclusion–exclusion and the initial value $D_0=1$.

## Investigation 2 — Catalan structure from the first return

A balanced-parenthesis word with $n$ pairs has the same number of opening and closing symbols, and no initial segment has more closings than openings. Let $C_n$ count these words. For example, $C_0=1$, $C_1=1$, and $C_2=2$.

Every nonempty balanced word has a unique decomposition into an opening parenthesis, a balanced word $A$, the matching closing parenthesis, and a balanced word $B$. If $A$ has $k$ pairs, then $B$ has $n-k$ pairs when the whole word has $n+1$ pairs. The unique decomposition proves

$$C_{n+1}=\sum_{k=0}^{n}C_kC_{n-k}.$$

This is a convolution, so introduce $C(x)=\sum_{n\ge0}C_nx^n$. Multiplying the recurrence by $x^{n+1}$ and summing gives

$$C(x)-1=xC(x)^2.$$

Solving the quadratic formally yields

$$C(x)=\frac{1-\sqrt{1-4x}}{2x}.$$

The minus sign is forced because $C(0)=1$ as a formal power series; the other algebraic branch has a pole at zero. Expanding gives

$$C_n=\frac{1}{n+1}\binom{2n}{n}.$$

Deriving that coefficient formula from the binomial series is an analytic or formal-power-series step beyond the recurrence. Even without it, the recurrence computes exact values $1,1,2,5,14,\ldots$ and explains why the same numbers count rooted binary trees, noncrossing matchings, and lattice paths that never fall below the axis: each family admits a corresponding first-return decomposition.

**Boundary check.** The total number of words with $n$ openings and $n$ closings is $\binom{2n}{n}$, but many violate the prefix condition. Dividing by $n+1$ is a theorem requiring a bijection or coefficient derivation; it is not justified merely because the first few quotients happen to be integers.

## Cumulative assessment with feedback

1. Count six-letter strings over $\{A,B,C\}$ in which every symbol appears at least once.
2. Find a recurrence for length-$n$ binary strings containing no adjacent ones, and compute the count at $n=5$.
3. Prove $\sum_{k=0}^{n}\binom nk=2^n$ by a bijection or a direct counting argument.
4. How many circular arrangements of four distinct people are there when rotations are identified but reflections remain different?
5. A random permutation of four elements has $X$ fixed points. Find $\mathbb E[X]$ without listing all permutations.
6. Explain why simply dividing a raw count by a symmetry-group size can fail.

**Solutions.** (1) There are $3^6$ strings in total. Subtract the three sets missing one specified symbol, add back the three constant strings counted in pairwise intersections, and note that no string uses zero symbols: $3^6-3\cdot2^6+3=540$. (2) Let $a_n$ be the count. A valid string ends in 0, after any valid length-$n-1$ prefix, or in 01, after any valid length-$n-2$ prefix. Thus $a_n=a_{n-1}+a_{n-2}$ with $a_0=1,a_1=2$, giving $a_5=13$. (3) Both sides count subsets of an $n$-element set: the left groups them by size, and the right makes an include/exclude choice for every element. (4) Fix one person to remove rotational duplication, then permute the remaining three: $3!=6$. (5) Write $X=\sum_{i=1}^4 I_i$, where $I_i$ records whether $i$ is fixed. Each has expectation $1/4$, so $\mathbb E[X]=1$; independence is unnecessary. (6) Different objects may have different stabilizers and therefore different orbit sizes. Burnside's lemma or an orbit-by-orbit argument is needed unless the action is free.

If 1 was difficult, label the forbidden sets before applying inclusion–exclusion. If 2 was difficult, classify by a unique first or last piece. If 4 and 6 conflict in your mind, notice that rotations act freely on arrangements of distinct people seated in distinct positions, while colorings may have nontrivial rotational symmetry.

## Capstone — count one family three ways

Choose a finite family indexed by size, such as restricted strings, lattice
paths, tilings, set partitions, or bounded-degree trees. Submit:

1. a precise definition, including whether labels, order, and symmetry matter;
2. exact counts for the first six meaningful sizes;
3. a recurrence derived from a unique structural decomposition;
4. either a bijection or an inclusion–exclusion derivation;
5. a generating function whose coefficients agree with the recurrence;
6. a small exact program that checks only the stated finite range;
7. one nearby family for which one of your methods fails, with the failed
   hypothesis identified.

Score the project out of 24: 4 points for definitions, 5 for the decomposition
and recurrence, 4 for the second method, 4 for the generating function, 3 for
the exact check, 2 for the boundary example, and 2 for exposition. Agreement
of three numerical lists is evidence; the reversible arguments establish the
general count.

## Connections

Continue to [Group Actions](../articles/group-actions-counting.md) when symmetry creates unequal orbit sizes and to [Discrete Structures Studio](#/courses/atlas-discrete-mathematics-structures) for graph theory, extremal methods, matroids, and a larger proof portfolio. A later course in probability can deepen the probabilistic method, while algorithms and complexity turn recurrences into executable procedures with explicit cost.
