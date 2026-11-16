
# Prerequisite Diagnostic and Repair Routes

## How to use this diagnostic

This is a routing tool, not an admissions test. Work for about fifty minutes
without a computer algebra system. Mark each item $S$ (secure), $P$ (partial),
or $N$ (not yet). Before reading the answer, identify the requested product:
calculation, proof, example, counterexample, or definition. A cluster of gaps
matters more than a total score.

Groups A–C support the opening group chapters. Group D supports rings and
fields. Group E diagnoses proof language used everywhere. A learner can begin
while repairing a few local gaps; widespread $N$ marks suggest taking the
listed preparatory routes first.

The fields chapters also assume basic linear algebra. Before Chapter 17,
check that you can explain why two coordinates in a basis give unique
representations and why a homogeneous system with more unknowns than
equations has a nonzero solution over a field. For example, in the basis
$(1,\sqrt2)$ of $\mathbb Q(\sqrt2)$ over $\mathbb Q$, the coordinates of
$3-2\sqrt2$ are $(3,-2)$. The equation $u+v+w=0$ has the nonzero solution
$(1,-1,0)$. If either step is unfamiliar, use
[Basis, Dimension, and Coordinates](../linear-algebra-structure-proofs/basis-dimension-coordinates.md)
and [Linear Maps, Isomorphism, Rank, and Nullity](../linear-algebra-structure-proofs/linear-maps-isomorphism-rank-nullity.md)
as repair resources.

## Group A: integers and modular arithmetic

### A1. Euclidean algorithm

Find $\gcd(84,30)$ and integers $u,v$ with $84u+30v=\gcd(84,30)$.

**Answer.** $84=2\cdot 30+24$, $30=1\cdot 24+6$, so the gcd is six. Back-substitution
gives $6=30-24=30-(84-2\cdot 30)=3\cdot 30-84$; take $u=-1,v=3$.

### A2. Solve a congruence

Solve $6x=9 (\bmod 15)$.

**Answer.** The gcd of six and fifteen is three, which divides nine. Divide
the entire congruence by three to obtain $2x=3 (\bmod 5)$. Since the inverse of
two modulo five is three, $x=4 (\bmod 5)$, giving three residue classes modulo
fifteen: $4,9,14$.

### A3. Find a unit

Which residue classes modulo ten are invertible?

**Answer.** A class is a unit exactly when its representative is coprime to
ten. The units are $[1],[3],[7],[9]$; their inverses are respectively
$[1],[7],[3],[9]$.

### A4. A failed cancellation

Why does $2x=2y (\bmod 6)$ not force $x=y (\bmod 6)$?

**Answer.** Two is not a unit modulo six. For example, $x=1,y=4$ gives equal
doubles modulo six but distinct residue classes.

**Repair route.** Review `divisibility-primes`, `modular-arithmetic`, and the
Euclidean algorithm. Aim to explain why a modular inverse exists exactly for a
coprime residue, not merely compute it.

## Group B: functions, sets, and relations

### B1. Injective, surjective, bijective

For $f:\mathbb{Z}\to \mathbb{Z}$, $f(n)=2n$, determine injectivity and surjectivity.

**Answer.** If $2m=2n$, integer cancellation gives $m=n$, so $f$ is injective.
Odd integers have no preimage, so it is not surjective and therefore not
bijective.

### B2. Image and inverse image

For the same $f$, find $f(\{-1,0,2\})$ and $f^{-1}(\{0,1,2,3\})$.

**Answer.** The image is $\{-2,0,4\}$. The inverse image consists of integers
whose doubles are in the target set, namely $\{0,1\}$. Inverse-image notation
does not require an inverse function.

### B3. Equivalence relation

Prove congruence modulo five is an equivalence relation on $\mathbb{Z}$.

**Answer.** Since five divides $a-a$, reflexivity holds. If five divides
$a-b$, it divides its negative $b-a$, giving symmetry. If it divides $a-b$
and $b-c$, it divides their sum $a-c$, giving transitivity.

### B4. Composition order

Let $f(x)=x+1$ and $g(x)=2x$. Compute $(f \circ g)(3)$ and $(g \circ f)(3)$.

**Answer.** $f(g(3))=7$, while $g(f(3))=8$. Composition need not commute;
later permutation products use a declared right-to-left convention.

**Repair route.** Use `sets-relations`, `functions`, and
`function-composition-inverses`. Practice keeping domains and codomains in the
name of a map.

## Group C: algebraic manipulation

### C1. Polynomial division

Divide $x^3-1$ by $x-1$.

**Answer.** $x^3-1=(x-1)(x^2+x+1)$, so the quotient is $x^2+x+1$ with
remainder zero.

### C2. A coefficient-domain audit

Is $x^2+1$ reducible?

**Answer.** The question is incomplete until the coefficient system is named.
Over $\mathbb{R}$, $x^2+1$ has no real root and a quadratic with no root is irreducible.
Over $\mathbb{C}[x]$ it factors as $(x-i)(x+i)$. Over $\mathbb{F}_{2}[x]$ it equals $(x+1)^2$.
The coefficient domain must be declared before answering.

### C3. Matrices over integers

Which integer $2\times 2$ matrices have integer inverses?

**Answer.** Exactly those with determinant $\pm 1$. The adjugate formula then
has integer entries; conversely determinants multiply, so an integer inverse
forces the determinant to be a unit of $\mathbb{Z}$.

### C4. Solve a linear system

Solve $x+y=5$, $x-y=1$ over $\mathbb{Q}$.

**Answer.** Adding gives $2x=6$, so $x=3$; then $y=2$. Over a ring in which two
is not invertible, the same manipulation would require a new audit.

**Repair route.** Review `polynomials`, `factoring`, and `matrices`. Always name
the coefficient ring before dividing or factoring.

## Group D: structural previews

### D1. Closure

Is the set of odd integers closed under addition? Under multiplication?

**Answer.** It is not closed under addition because $1+1=2$ is even. It is
closed under multiplication because a product $(2a+1)(2b+1)$ is odd.

### D2. Symmetries of a triangle

How many reversible rigid motions preserve an equilateral triangle?

**Answer.** Three rotations and three reflections give six. Composition of
motions is associative, the do-nothing motion is an identity, and every motion
has an inverse; these form the first nonabelian group of the book.

### D3. Quotient intuition

What information does reducing an integer modulo four retain?

**Answer.** It retains the remainder class and forgets the exact multiple of
four. Integers differing by a multiple of four become the same quotient
element. Addition and multiplication remain well-defined because congruence is
compatible with both operations.

### D4. Root-generated fields

Why does adjoining $\sqrt{2}$ to $\mathbb{Q}$ also adjoin $-\sqrt{2}$ and
$1/(1+\sqrt{2})$?

**Answer.** A field is closed under additive inverses and inverses of nonzero
elements. Indeed $1/(1+\sqrt{2})=\sqrt{2}-1$, found by rationalizing.

## Group E: proof language

### E1. Negate a statement

Negate: “For every integer $n$, there is an integer $m$ with $m>n$.”

**Answer.** “There exists an integer $n$ such that for every integer $m$,
$m\le n$.” Quantifiers reverse and the strict inequality is negated.

### E2. Prove a set equality

Prove $A \cap (B \cup C)=(A \cap B) \cup (A \cap C)$.

**Answer.** An element lies in the left side exactly when it is in $A$ and in
at least one of $B,C$; this is equivalent to being in both $A,B$ or in both
$A,C$, exactly membership in the right side. The equivalence proves both
containments.

### E3. Refute a universal claim

Refute: every subgroup of a group is normal.

**Answer.** In $S_3$, the subgroup $\{e,(12)\}$ is not normal because conjugating
$(12)$ by $(123)$ gives a different transposition. One verified counterexample
refutes a universal statement.

### E4. Locate a converse

From $P\Longrightarrow Q$, what can be concluded when $Q$ is true?

**Answer.** Nothing about $P$ without the converse $Q\Longrightarrow P$. Affirming the
consequent is invalid. When $Q$ is false, the contrapositive does permit
concluding that $P$ is false.

## Routing the result

- Weakness concentrated in A: repair divisibility and modular arithmetic.
- Weakness in B: repair functions, relations, and composition before quotients.
- Weakness in C: repair polynomial and matrix manipulation, with domains named.
- Weakness in D only: begin Chapter 1; these ideas are taught from first principles.
- Weakness in E: work through `logic-proofs` alongside Chapters 1–3.

Revisit the diagnostic after Chapter 6. The goal is not memorized answers but
the ability to name the legal step and the hypothesis supporting it.
