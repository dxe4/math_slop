
# Notation and Conventions

This guide is designed for repeated reference. It records notation used across chapters, indexing conventions, and ambiguity policies that keep arguments precise.

## Numbers, sets, and arithmetic

- $\mathbb{N}$: the natural numbers $\{1, 2, 3, \dots\}$. When $0$ is included, the text says so explicitly.
- $\mathbb{Z}$: the integers.
- $\mathbb{Q}$: the rational numbers.
- $\mathbb{R}$: the real numbers.
- $\mathbb{Z}/n\mathbb{Z}$: the ring of integers modulo $n$. Elements are residue classes $[a]_{n}$; when context is clear we write $a \pmod{n}$.
- $a \mid b$: $a$ divides $b$; there exists an integer $k$ with $b = ak$.
- $\gcd(a,b)$: the greatest common divisor of $a$ and $b$.
- $a \bmod b$, for $b\ne0$: the remainder when $a$ is divided by $b$, with $0 \leq a \bmod b < |b|$.
- $\lfloor x \rfloor$: the greatest integer less than or equal to $x$.
- $\lceil x \rceil$: the least integer greater than or equal to $x$.
- $\binom{n}{k}$: the binomial coefficient, equal to $\frac{n!}{k!(n-k)!}$ for $0 \leq k \leq n$.

## Parity and modular arithmetic

- Parity means evenness or oddness. The parity of an integer $n$ is $n \bmod 2$.
- $a \equiv b \pmod{m}$ means $m \mid (a-b)$.
- Invariants are often stated as "$X \pmod{m}$ is invariant under the allowed moves."

## Graph notation

- Unless stated otherwise, a graph $G = (V, E)$ is finite and undirected, with vertex set $V$ and edge set $E$.
- An edge between vertices $u$ and $v$ is written $\{u,v\}$ or $uv$ when unambiguous.
- $\deg(v)$: the degree of vertex $v$, the number of incident edge-ends; each loop contributes two.
- A path is a sequence of distinct vertices $v_{1}, v_{2}, \dots, v_{k}$ with $\{v_{i}, v_{i+1}\} \in E$ for each $i$.
- A cycle is a path with $k \geq 3$ and an additional edge $\{v_{k}, v_{1}\}$.
- A graph is connected if there is a path between every pair of vertices.
- An Eulerian trail is a trail that uses every edge exactly once. A finite connected graph has an Eulerian trail if and only if it has $0$ or $2$ vertices of odd degree.

## Combinatorial game notation

- A position is winning (an $\mathcal{N}$-position, Next player wins) or losing (a $\mathcal{P}$-position, Previous player wins).
- The mex (minimum excluded value) of a set $S$ of nonnegative integers is the least nonnegative integer not in $S$.
- The Sprague–Grundy value (or Grundy value) of a position is $\operatorname{mex}\{g(p') : p' \text{ is an option of } p\}$.
- The Grundy value of a sum of independent games is the bitwise XOR of the component Grundy values.

## Probability notation

- $P(A)$: the probability of event $A$.
- $P(A \mid B)$: the conditional probability of $A$ given $B$.
- Events $A$ and $B$ are independent when $P(A \cap B) = P(A)P(B)$.
- $\mathbb{E}[X]$: the expected value of random variable $X$.

## Geometric notation

- Grid cells use $(\text{row}, \text{column})$, with row $1$ at the top and column $1$ at the left unless stated otherwise.
- $|AB|$: the length of segment $AB$.
- $\angle ABC$: the angle with vertex at $B$ formed by rays $BA$ and $BC$.
- Polyominoes are edge-connected sets of grid squares.

## Encoding and combinatorics notation

- $\binom{n}{k}$: number of $k$-element subsets of an $n$-element set.
- $n!$: factorial, $n! = n \cdot (n-1) \cdots 1$ for $n \geq 1$, with $0! = 1$.
- A permutation of $\{1,2,\dots,n\}$ is a bijection $\sigma : \{1,2,\dots,n\} \to \{1,2,\dots,n\}$.
- The sign of a permutation is $(-1)^{\text{number of transpositions}}$.

## Indexing and ambiguity policies

- Sums and products use inclusive bounds unless stated otherwise: $\sum_{i=1}^{n} a_{i} = a_{1} + a_{2} + \dots + a_{n}$.
- Modular arithmetic: when we write $a = b \pmod{n}$ in a calculation, we mean $a$ and $b$ are congruent modulo $n$; when we write $a \bmod n$ we mean the unique remainder in $\{0,1,\dots,n-1\}$.
- Graph drawings are labeled so that no argument depends solely on spatial placement or color.
- "Adjacent" for grid squares means sharing an edge, not merely a corner, unless stated otherwise.
- "Random" means uniformly at random over the stated finite set unless a distribution is specified.

## Accessibility and notation policy

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Tables and diagrams are accompanied by exact descriptions of rows, columns, or relations. Plain-source formulas use readable tokens such as $\leq$, $\to$, and $\cong$ when a specialized glyph would otherwise be the only carrier of meaning.

## Citation policy for contributors

Paraphrase sources and cite the job they perform. Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard. Direct quotations require exact locators and license or fair-use review. When sources disagree, record the disagreement. When provenance is unknown, label it unknown rather than inventing a clean lineage.
