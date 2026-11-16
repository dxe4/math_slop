
# Exercise Program, Part II: Chapters 9–16

This supplement supplies 117 new exercises for the second half of *Discrete
Mathematics: Proof, Counting, and Structure*. Every exercise states its own
hypotheses and is followed by a complete solution. The difficulty labels are
guides rather than prerequisites: introductory problems isolate one idea,
intermediate problems combine two ideas, and advanced problems require a proof,
counterexample, or independently checkable certificate.

## Allocation and balance

| Chapter | Topic | Introductory | Intermediate | Advanced | Total |
|---:|---|---:|---:|---:|---:|
| 9 | Quotients, Canonical Representatives, and Well-Defined Operations | 5 | 5 | 5 | 15 |
| 10 | Finite Orders, Lattice Representation, and Möbius Inversion | 5 | 5 | 5 | 15 |
| 11 | Advanced Enumeration, Integer Partitions, and Coefficient Methods | 5 | 5 | 5 | 15 |
| 12 | Graph Decompositions, Orientations, and Structural Certificates | 5 | 5 | 5 | 15 |
| 13 | Finite Designs, Incidence Counting, and Set Systems | 5 | 5 | 4 | 14 |
| 14 | Matroid Independence and the Greedy Exchange Bridge | 5 | 4 | 5 | 14 |
| 15 | Exact Small Computation, Experiments, and Claim Boundaries | 4 | 5 | 5 | 14 |
| 16 | Cumulative Projects, Proof Repair, and Solution Strategies | 5 | 5 | 5 | 15 |
| **Total** |  | **39** | **39** | **39** | **117** |

The exercises numbered 1–117 here are distinct from the chapter exercises.
Descriptions of diagrams are given as incidence lists, tables, or ordered
pairs, so no solution depends on sight alone.

## Chapter 9: Quotients, Canonical Representatives, and Well-Defined Operations

### DM-SP2-E001 — Equality of congruence classes (introductory)

On the integers define $a \sim b$ when $5$ divides $a-b$. Prove that $[12]=[2]$
and that $[12]\ne [3]$ without listing either infinite class.

<details>
<summary>Hint 1</summary>

Translate equality of classes into a statement about their representatives.

</details>

<details>
<summary>Hint 2</summary>

Apply divisibility by five to each difference separately; an inequality of classes also needs a reason.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E001 — Solution

Since $12-2=10$ is divisible by $5$, the class-equality theorem
gives $[12]=[2]$. Since $12-3=9$ is not divisible by $5$, $12$ is not equivalent
to $3$, and the same theorem gives $[12]\ne [3]$. Membership of one chosen
representative therefore decides each equality; listing the classes is
unnecessary.

</details>

### DM-SP2-E002 — Quotient-map fibers (introductory)

Let $q:X\to X/\sim$ be the quotient map for an equivalence relation. Prove that the
fiber $q^{-1}(\{[x]\})$ is exactly $[x]$.

<details>
<summary>Hint 1</summary>

Start with an arbitrary element of the inverse image and unpack the definition of the quotient map.

</details>

<details>
<summary>Hint 2</summary>

Relate equality of its image class with $[x]$ to the defining membership condition for $[x]$.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E002 — Solution

An element $y$ lies in the fiber precisely when $q(y)=[x]$, that
is, when $[y]=[x]$. Class equality is equivalent to $y\sim x$, which is precisely
the condition $y\in [x]$. Thus the two sets have the same members.

</details>

### DM-SP2-E003 — A failed equivalence relation (introductory)

On $Z$, declare $a R b$ when $|a-b|\le 1$. Identify exactly which equivalence
axiom fails and give a smallest nonnegative certificate.

<details>
<summary>Hint 1</summary>

Check reflexivity, symmetry and transitivity separately before looking for a counterexample.

</details>

<details>
<summary>Hint 2</summary>

For transitivity, try a chain of two successive steps of distance one; compare the distance between its endpoints.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E003 — Solution

Reflexivity holds because $|a-a|=0$; symmetry holds because
$|a-b|=|b-a|$. Transitivity fails: $0R1$ and $1R2$, but $|0-2|=2$, so $0$ is
not related to $2$. The ordered triple $(0,1,2)$ is a certificate checkable by
three integer subtractions.

</details>

### DM-SP2-E004 — Canonical residues (introductory)

For a fixed integer $n\ge 2$, show that every congruence class modulo $n$ contains
exactly one member of $\{0,1,\ldots,n-1\}$.

<details>
<summary>Hint 1</summary>

Use division with remainder to produce a representative in the prescribed range.

</details>

<details>
<summary>Hint 2</summary>

For uniqueness, bound the absolute difference of two representatives in that range and compare it with the smallest nonzero multiple of $n$.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E004 — Solution

Division with remainder writes every integer $a$ uniquely as
$a=qn+r$, with $0\le r<n$; hence $a\sim r$, proving existence. If $r,s$ in the stated
set are congruent, then $n$ divides $r-s$, while $|r-s|<n$. The only such
multiple is zero, so $r=s$. This proves uniqueness.

</details>

### DM-SP2-E005 — Counting a quotient (introductory)

Let $X=\{0,1\}^{4}$, and identify two strings when they have the same number of
ones. Determine $|X/\sim |$ and name one canonical representative per class.

<details>
<summary>Hint 1</summary>

Find the possible values of the number of ones, rather than enumerating all strings.

</details>

<details>
<summary>Hint 2</summary>

For each possible weight, place all its ones before all its zeros; explain why equal weights, and only equal weights, give one class.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E005 — Solution

A four-bit string has weight $k\in \{0,1,2,3,4\}$, and equal weight is
an equivalence relation. Thus there are five classes. One canonical choice for
weight $k$ is the string consisting of $k$ ones followed by $4-k$ zeros:
$0000,1000,1100,1110,1111$. Different listed strings have different weights,
and every string shares its weight with exactly one of them.

</details>

### DM-SP2-E006 — Descending a parity function (intermediate)

On $Z$ use congruence modulo $6$. Decide whether each formula defines a
function on classes: (a) $F([a])=(-1)^{a}$; (b) $G([a])=a^{2}$ as an integer.

<details>
<summary>Hint 1</summary>

Compare the outputs when a representative $a$ is replaced by $a+6t$.

</details>

<details>
<summary>Hint 2</summary>

Parity depends only on the difference being even. For the integer-valued square, try two small representatives of one class and compare the actual integers.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E006 — Solution

If $a\equiv b (mod 6)$, then $a-b$ is even, so $a,b$ have the same
parity and $(-1)^{a}=(-1)^{b}$; hence $F$ is well defined. Formula $G$ is not: the
equal class representatives $0$ and $6$ give $0^{2}=0$ and $6^{2}=36$. The issue is
not whether the formula can be evaluated, but whether every representative of
one class gives the same codomain value.

</details>

### DM-SP2-E007 — An induced operation (intermediate)

For congruence modulo $n\ge 2$, define $[a]\oplus[b]=[a+b]$. Prove that this binary
operation is well defined.

<details>
<summary>Hint 1</summary>

Replace both inputs by equivalent representatives, not just one of them.

</details>

<details>
<summary>Hint 2</summary>

Subtract the two proposed sums and express that difference using the two differences already known to be divisible by $n$.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E007 — Solution

Choose other representatives $a'\sim a$ and $b'\sim b$. Then $n$ divides
both $a'-a$ and $b'-b$, hence divides their sum
$(a'+b')-(a+b)$. Therefore $[a'+b']=[a+b]$. Since simultaneous replacement of
both representatives leaves the output class unchanged, $\oplus$ is well defined.

</details>

### DM-SP2-E008 — Factorization through a quotient (intermediate)

Let $f:X\to Y$ be constant on every equivalence class of $\sim$. Construct the unique
map $\bar f:X/\sim \to Y$ satisfying $f=\bar f∘q$, and prove uniqueness.

<details>
<summary>Hint 1</summary>

The factorization equation forces the value of the new map on every class represented by $x$.

</details>

<details>
<summary>Hint 2</summary>

Use constancy on classes to justify that forced value, then use surjectivity of $q$ to show there is no freedom left.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E008 — Solution

Define $\bar f([x])=f(x)$. If $[x]=[x']$, then $x\sim x'$, and the
hypothesis gives $f(x)=f(x')$; thus the definition is well defined. Moreover,
$(\bar f∘q)(x)=\bar f([x])=f(x)$. If $g∘q=f$, then surjectivity of $q$ and
$g([x])=g(q(x))=f(x)=\bar f([x])$ force $g=\bar f$. This is both construction
and uniqueness.

</details>

### DM-SP2-E009 — Rotation classes of four-bit strings (intermediate)

Let cyclic rotation act on strings in $\{0,1\}^{4}$. List all quotient classes and
choose the lexicographically least string as canonical representative.

<details>
<summary>Hint 1</summary>

Separate strings by their number of ones, which rotation preserves.

</details>

<details>
<summary>Hint 2</summary>

Within weight two, distinguish adjacent ones from alternating ones. Rotate each remaining candidate fully and check that the disjoint class sizes exhaust sixteen strings.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E009 — Solution

The six classes are $\{0000\}$, $\{1111\}$,
$\{0001,0010,0100,1000\}$, $\{0111,1110,1101,1011\}$,
$\{0011,0110,1100,1001\}$, and $\{0101,1010\}$. Their least representatives are
$0000,1111,0001,0111,0011,0101$. The class sizes sum to
$1+1+4+4+4+2=16$, so the disjoint rotation lists exhaust every four-bit string.

</details>

### DM-SP2-E010 — Mutual reachability quotient (intermediate)

The directed graph has vertices $\{a,b,c,d\}$ and arcs
$a\to b,b\to a,b\to c,c\to d,d\to c$. Quotient by mutual reachability, list the classes, and
list the arcs between distinct quotient vertices.

<details>
<summary>Hint 1</summary>

Determine which pairs admit paths in both directions; a one-way connecting arc does not merge classes.

</details>

<details>
<summary>Hint 2</summary>

Once the classes are known, retain an arc between two distinct classes exactly when some original arc crosses between them in that direction.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E010 — Solution

Vertices $a,b$ reach each other, as do $c,d$. The only cross arc
goes from the first pair toward the second, and there is no return path.
Therefore the classes are $A=\{a,b\}$ and $C=\{c,d\}$. The quotient has the single
arc $A\to C$ between distinct vertices. The explicit class and arc lists fully
specify the quotient without a picture.

</details>

### DM-SP2-E011 — A polynomial quotient (advanced)

On $R[x]$, define $p\sim q$ iff $p(1)=q(1)$. Prove addition and multiplication of
classes are well defined, and identify the resulting quotient with $R$.

<details>
<summary>Hint 1</summary>

Evaluate sums and products at one before passing to classes.

</details>

<details>
<summary>Hint 2</summary>

Consider the evaluation map on classes. Constant polynomials help with surjectivity; the definition of equivalence helps with injectivity.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E011 — Solution

Equality of evaluations is an equivalence relation. If
$p\sim p'$ and $q\sim q'$, then
$(p+q)(1)=p(1)+q(1)=p'(1)+q'(1)=(p'+q')(1)$ and similarly
$(pq)(1)=p(1)q(1)=p'(1)q'(1)$. Thus both operations descend. The map
$\Phi([p])=p(1)$ is well defined and preserves them. It is surjective because the
constant polynomial $c$ maps to $c$, and injective because equal images are the
definition of $\sim$. Hence it is an operation-preserving bijection with $R$.

</details>

### DM-SP2-E012 — Why arbitrary representatives fail (advanced)

On $R^{2}\setminus \{(0,0)\}$, define $(x,y)\sim (x',y')$ iff there exists a nonzero real
$t$ such that $(x',y')=(tx,ty)$.
Show that $H([(x,y)])=x+y$ is not well defined, but the predicate
$P([(x,y)])$ meaning “$xy>0$” is well defined.

<details>
<summary>Hint 1</summary>

Apply a nonzero scaling factor to the proposed numerical value and to the product separately.

</details>

<details>
<summary>Hint 2</summary>

A numerical value must remain equal, whereas a predicate only needs its truth value preserved. Track the sign of the square of the scaling factor.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E012 — Solution

The equivalent pairs $(1,1)$ and $(2,2)$ yield sums $2$ and $4$,
so $H$ fails. For the predicate, replacing $(x,y)$ by $(tx,ty)$ replaces the
product by $t^{2}xy$. Since $t^{2}>0$, the sign of the product does not change.
Thus all representatives give the same truth value. This contrasts invariant
information with scale-dependent information.

</details>

### DM-SP2-E013 — Quotient in stages (advanced)

On $Z$, let $a\sim b$ mean $a\equiv b (mod 12)$. Map $[a]_{12}$ to $[a]_{3}$. Prove the map
is well defined and determine every fiber.

<details>
<summary>Hint 1</summary>

Check which divisibility implication is needed when a modulo-twelve representative is changed.

</details>

<details>
<summary>Hint 2</summary>

For each canonical residue modulo three, collect the residues from zero through eleven that reduce to it. Fibers contain classes, not individual integers.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E013 — Solution

Congruence modulo $12$ implies congruence modulo $3$, so the map
is well defined. For $r\in \{0,1,2\}$, its fiber consists of the four modulo-12
classes whose canonical residues equal $r$ modulo $3$:
$r=0:\{[0],[3],[6],[9]\}$, $r=1:\{[1],[4],[7],[10]\}$, and
$r=2:\{[2],[5],[8],[11]\}$. The lists are disjoint and contain all twelve domain
classes, certifying completeness.

</details>

### DM-SP2-E014 — No equivariant canonical choice (advanced)

On the two-element set $\{0,1\}$, identify $0\sim 1$. Let the swap $s$ interchange
the two elements. Prove there is no representative-selection map
$c:X/\sim \to X$ with $q∘c=id$ and $s(c(C))=c(C)$ for the sole class $C$.

<details>
<summary>Hint 1</summary>

The quotient has only one class, so a representative-selection map has just one value to choose.

</details>

<details>
<summary>Hint 2</summary>

The symmetry condition requires that chosen element to be fixed by the swap. Examine the possible fixed points of that permutation.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E014 — Solution

A section $c$ must choose either $0$ or $1$ from $C$. But the swap
fixes neither: $s(0)=1$ and $s(1)=0$. Hence $s(c(C))\ne c(C)$ for either possible
choice. Canonical representatives may exist after imposing an order, but no
choice here is invariant under every symmetry of the original data.

</details>

### DM-SP2-E015 — Universal test for descended predicates (advanced)

Let $P$ be a predicate on $X$. Prove that a predicate $\widetilde P$ on $X/\sim$
with $P(x)\Longleftrightarrow \widetilde P([x])$ exists exactly when $P$ is constant on classes.

<details>
<summary>Hint 1</summary>

Treat necessity and sufficiency as separate implications.

</details>

<details>
<summary>Hint 2</summary>

For necessity compare equivalent elements' common class. For sufficiency try assigning a class the truth value at one representative and identify what guarantees independence of that choice.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E015 — Solution

If $\widetilde P$ exists and $x\sim y$, then $[x]=[y]$, so
$P(x)\Longleftrightarrow \widetilde P([x])=\widetilde P([y])\Longleftrightarrow P(y)$; hence constancy is necessary.
Conversely, if $P$ is constant on classes, define $\widetilde P([x])$ to have
the truth value $P(x)$. Constancy makes this independent of the representative,
so it is well defined and has the required equivalence. This gives both
directions, not merely a sufficient test.

</details>

## Chapter 10: Finite Orders, Lattice Representation, and Möbius Inversion

### DM-SP2-E016 — Divisibility order (introductory)

On $\{1,2,3,6\}$, order elements by divisibility. List all cover relations and
identify the least and greatest elements.

<details>
<summary>Hint 1</summary>

A cover is a divisibility relation with no allowed intermediate element.

</details>

<details>
<summary>Hint 2</summary>

Check the comparable pairs against the four-element ground set; numerical size alone does not establish a cover.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E016 — Solution

The covers are $1\prec2$, $1\prec3$, $2\prec6$, and $3\prec6$. Although $1$
divides $6$, it is not covered by $6$ because $2$ and $3$ lie strictly between.
The least element is $1$, which divides every element, and the greatest is $6$,
which every element divides. This cover list is a complete textual Hasse
description.

</details>

### DM-SP2-E017 — Ideals of a fork (introductory)

Let $a<c$ and $b<c$, with $a,b$ incomparable. List every order ideal.

<details>
<summary>Hint 1</summary>

Split ideals into those containing $c$ and those not containing it.

</details>

<details>
<summary>Hint 2</summary>

Downward closure forces all predecessors of any included element. Apply that rule to $c$, then inspect subsets of the minimal elements.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E017 — Solution

The ideals are $\varnothing,\{a\},\{b\},\{a,b\},\{a,b,c\}$. A set containing $c$
must contain both predecessors, while any subset of the two minimal elements is
downward closed. These two cases are exhaustive, so there are five ideals. In
the ideal lattice, $\{a\}$ and $\{b\}$ are incomparable and join to $\{a,b\}$.

</details>

### DM-SP2-E018 — Meets and joins of subsets (introductory)

In the inclusion poset $P(\{1,2,3\})$, compute the meet and join of
$A=\{1,2\}$ and $B=\{2,3\}$ and justify the operations.

<details>
<summary>Hint 1</summary>

Translate lower and upper bounds into containment conditions.

</details>

<details>
<summary>Hint 2</summary>

Seek a common lower bound containing every other common lower bound, then use the dual property for a common upper bound.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E018 — Solution

The meet is $A\cap B=\{2\}$: it is contained in both, and every common
lower bound is contained in their intersection. The join is
$A\cup B=\{1,2,3\}$: it contains both, and every common upper bound contains their
union. Hence intersection and union realize greatest lower and least upper
bounds in every power-set lattice.

</details>

### DM-SP2-E019 — Möbius values on a diamond (introductory)

Let $0<a<1$ and $0<b<1$, with $a,b$ incomparable. Compute $\mu(x,y)$ on every
interval.

<details>
<summary>Hint 1</summary>

Begin with the diagonal values and then intervals with no interior elements.

</details>

<details>
<summary>Hint 2</summary>

For the whole interval use $\mu(0,1)=-\sum_{0\le z<1}\mu(0,z)$, and list all comparable pairs so none are omitted.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E019 — Solution

Diagonal values are one. Every cover has value minus one, so
$\mu(0,a)=\mu(0,b)=\mu(a,1)=\mu(b,1)=-1$. Finally
$$\mu(0,1)=-(\mu(0,0)+\mu(0,a)+\mu(0,b))=-(1-1-1)=1$$
These nine comparable-pair values—the four diagonals, four covers, and whole
interval—form the complete table.

</details>

### DM-SP2-E020 — Two disjoint chains (introductory)

Let a poset consist only of $a<c$ and $b<d$. How many linear extensions does it
have?

<details>
<summary>Hint 1</summary>

Keep the internal order of each chain fixed and choose where one chain sits.

</details>

<details>
<summary>Hint 2</summary>

Choose positions for the first chain; explain why the other positions then determine the entire extension uniquely.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E020 — Solution

Choose the two of four positions occupied by $a,c$; their order
is then forced, and the remaining positions receive $b,d$ in forced order.
Thus there are $\binom{4}{2}=6$ extensions. Explicitly they correspond bijectively to
the six two-position choices, so no compatible total order is missed or counted
twice.

</details>

### DM-SP2-E021 — A poset that is not a lattice (intermediate)

Let $P=\{a,b,c\}$ with only $a<c$ and $b<c$ besides reflexivity. Prove that $P$ is
not a lattice.

<details>
<summary>Hint 1</summary>

A lattice needs both a greatest lower bound and a least upper bound for every pair.

</details>

<details>
<summary>Hint 2</summary>

Investigate the two incomparable minimal elements and list their common lower bounds before asking for a greatest one.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E021 — Solution

The pair $a,b$ has common upper bound $c$, so its join is $c$.
However, it has no common lower bound at all: neither $a\le b$ nor $b\le a$, and
there is no fourth element. Therefore $a\land b$ does not exist. A lattice requires
both operations for every pair, so this single missing meet is a complete
countercertificate.

</details>

### DM-SP2-E022 — A nondistributive certificate (intermediate)

Consider the five-element lattice with bottom $0$, top $1$, and three mutually
incomparable elements $a,b,c$ strictly between them. Show distributivity fails.

<details>
<summary>Hint 1</summary>

Evaluate a distributive identity on the three distinct middle elements.

</details>

<details>
<summary>Hint 2</summary>

First determine the meet and join of two distinct middle elements, then compare the two sides of the identity using those operations.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E022 — Solution

Distinct middle elements meet at $0$ and join at $1$. Therefore
$a\land (b\lor c)=a\land 1=a$, while
$(a\land b)\lor (a\land c)=0\lor 0=0$. Since $a\ne 0$, the distributive identity fails. The named
elements and these operation values form a checkable certificate without a
diagram.

</details>

### DM-SP2-E023 — Ideals form a distributive lattice (intermediate)

For any finite poset $P$, prove that the order ideals, ordered by inclusion,
have meet $I\cap J$ and join $I\cup J$, and are distributive.

<details>
<summary>Hint 1</summary>

First show that the proposed meet and join still belong to the family of ideals.

</details>

<details>
<summary>Hint 2</summary>

Check downward closure element by element for both operations; after establishing their bound properties, use the corresponding distributive identities for sets.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E023 — Solution

Intersections and unions of downward-closed sets are
downward-closed, so both are ideals. Under inclusion, their universal
properties make them respectively meet and join. Set operations satisfy
$I\cap (J\cup K)=(I\cap J)\cup (I\cap K)$ and its dual. Hence the ideal lattice is distributive.
Finiteness is not needed for this proof, but ensures the lattice is finite in
the chapter's setting.

</details>

### DM-SP2-E024 — Boolean inversion (intermediate)

Suppose functions on subsets of $\{1,2,3\}$ satisfy
$g(S)=\sum_{T\subseteq S}f(T)$. Express $f(\{1,2,3\})$ in terms of $g$.

<details>
<summary>Hint 1</summary>

Invert the cumulative subset sum using the Boolean-lattice Möbius function.

</details>

<details>
<summary>Hint 2</summary>

Group the subsets by how many elements they omit from $\{1,2,3\}$; these groups determine the alternating signs in the expansion.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E024 — Solution

Boolean-lattice inversion has
$\mu(T,S)=(-1)^{|S\setminus T|}$. Therefore
$$f(123)=g(123)-g(12)-g(13)-g(23)+g(1)+g(2)+g(3)-g(\varnothing)$$
The alternating signs depend on the number of omitted elements. Substitution
of each $g(U)=\sum_{T\subseteq U}f(T)$ cancels every proper-subset term and leaves only
$f(123)$, independently checking the formula.

</details>

### DM-SP2-E025 — Divisor-poset computation (intermediate)

In the divisibility poset on the divisors of $12$, compute $\mu(1,d)$ for every
$d|12$ directly from the recurrence.

<details>
<summary>Hint 1</summary>

Process divisors in an order where every proper divisor has already been processed.

</details>

<details>
<summary>Hint 2</summary>

For each endpoint $d>1$, negate the sum over its proper divisors. Include $1$ in every such sum.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E025 — Solution

In divisor order, the sequence is
$\mu(1,1)=1$, $\mu(1,2)=\mu(1,3)=-1$,
$$\mu(1,4)=-(1-1)=0$$
$\mu(1,6)=-(1-1-1)=1$, and
$\mu(1,12)=-(1-1-1+0+1)=0$, where each sum ranges over proper divisors of the
endpoint. Thus for $d=1,2,3,4,6,12$, the values are $1,-1,-1,0,1,0$.

</details>

### DM-SP2-E026 — Product intervals (advanced)

For finite posets $P,Q$, prove
$\mu_{P\times Q}((p,q),(p',q'))=\mu_{P}(p,p')\mu_{Q}(q,q')$ whenever both coordinates are
ordered.

<details>
<summary>Hint 1</summary>

To identify a Möbius function, verify its defining convolution identity.

</details>

<details>
<summary>Hint 2</summary>

Sum the proposed product over a product interval and factor the finite double sum into one sum for each coordinate.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E026 — Solution

Let the right-hand side be $m$. Its convolution with the zeta
function over a product interval factors:
$\sum_{p\le r\le p', q\le s\le q'} \mu_{P}(p,r)\mu_{Q}(q,s)$ equals
$$(\sum_{p\le r\le p'}\mu_{P}(p,r))(\sum_{q\le s\le q'}\mu_{Q}(q,s))$$
Each factor is $1$ when its endpoints agree and $0$ otherwise. Their product is
the identity delta on $P\times Q$. Since the Möbius function is the unique convolution
inverse of zeta, $m$ is the required function.

</details>

### DM-SP2-E027 — Möbius sum over atoms (advanced)

Let a finite poset interval $[0,x]$ have exactly $r$ atoms and no elements
strictly between an atom and $x$. Assume $x$ is neither $0$ nor an atom.
Compute $\mu(0,x)$.

<details>
<summary>Hint 1</summary>

Determine which elements can occur strictly below $x$ before applying the recurrence.

</details>

<details>
<summary>Hint 2</summary>

In a finite interval, every nonzero element has an atom below it. Combine that fact with the hypothesis excluding elements between an atom and $x$.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E027 — Solution

The elements below $x$ are exactly $0$ and the $r$ atoms. Each
atom $a$ covers $0$, so $\mu(0,a)=-1$. The recurrence gives
$$\mu(0,x)=-(\mu(0,0)+\sum_{a} \mu(0,a))=-(1-r)=r-1$$
Indeed, any nonzero $y<x$ has an atom below it: in the finite nonempty set of
nonzero elements at most $y$, choose a minimal one. The hypothesis then forces
$y$ itself to be that atom. Thus there are no unlisted lower elements. Without
the hypothesis, their Möbius contributions would also enter the sum.

</details>

### DM-SP2-E028 — Recovering exact maxima from cumulative data (advanced)

Let $P$ be a finite poset. Suppose $G(x)$ counts objects whose label is at most
$x$, and $F(x)$ counts objects whose label is exactly $x$. Derive a formula for
$F$ and explain why it works even when labels are incomparable.

<details>
<summary>Hint 1</summary>

Express a cumulative count as a sum of exact counts over the lower interval.

</details>

<details>
<summary>Hint 2</summary>

Apply poset inversion to that sum and observe that no step requires comparing two labels that are incomparable.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E028 — Solution

Every object counted by $G(x)$ has a unique exact label $y\le x$, so
$G(x)=\sum_{y\le x}F(y)$. Möbius inversion gives
$F(x)=\sum_{y\le x}\mu(y,x)G(y)$. No total ordering is used: the sum ranges over the
finite lower interval, and zeta–Möbius convolution cancels every contribution
whose exact label is a proper predecessor of $x$. Incomparability merely means
some labels never enter the same lower interval.

</details>

### DM-SP2-E029 — Representation by join-irreducibles (advanced)

Let $L$ be a finite distributive lattice and $J$ its nonzero join-irreducible
elements. For $x\in L$, put $\phi(x)=\{j\in J:j\le x\}$. Prove that $\phi$ preserves meets and
joins.

<details>
<summary>Hint 1</summary>

Meet preservation follows directly from the condition defining a lower bound.

</details>

<details>
<summary>Hint 2</summary>

For joins, prove a join-irreducible $j$ below $x\lor y$ lies below one summand: distribute $j\land(x\lor y)$ and use irreducibility.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E029 — Solution

Directly, $j\le x\land y$ iff $j\le x$ and $j\le y$, so
$\phi(x\land y)=\phi(x)\cap \phi(y)$. In a distributive lattice, a join-irreducible $j$ is
join-prime: if $j\le x\lor y$, then
$j=j\land (x\lor y)=(j\land x)\lor (j\land y)$; irreducibility forces $j=j\land x$ or $j=j\land y$, hence
$j\le x$ or $j\le y$. The converse is immediate, yielding
$$\phi(x\lor y)=\phi(x)\cup \phi(y)$$

</details>

### DM-SP2-E030 — Matrix certificate for inversion (advanced)

Choose any linear extension $x_{1},\ldots,x_{n}$ of a finite poset. Let $Z_{ij}=1$ if
$x_{i}\le x_{j}$ and $0$ otherwise. Prove $Z$ is invertible over the integers and
identify its inverse entries.

<details>
<summary>Hint 1</summary>

Use the linear extension to locate every nonzero entry relative to the diagonal.

</details>

<details>
<summary>Hint 2</summary>

After establishing integral invertibility, multiply $Z$ by the matrix of comparable-pair Möbius values and interpret each entry as an interval sum.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E030 — Solution

A linear extension ensures $x_{i}\le x_{j}$ only when $i\le j$; therefore
$Z$ is upper triangular. Reflexivity puts $1$ on every diagonal entry, so its
determinant is $1$, proving integral invertibility. Define
$M_{ij}=\mu(x_{i},x_{j})$ when $x_{i}\le x_{j}$, and $0$ otherwise. Then
$(MZ)_{ij}=\sum_{x_{i}\le x_{k}\le x_{j}}\mu(x_{i},x_{k})=\delta_{ij}$. Thus $M=Z^{-1}$; the same
convolution also gives $ZM=I$.

</details>

## Chapter 11: Advanced Enumeration, Integer Partitions, and Coefficient Methods

### DM-SP2-E031 — Compositions with a fixed length (introductory)

How many compositions of $12$ into exactly four positive parts are there?

<details>
<summary>Hint 1</summary>

Model a composition as consecutive nonempty blocks of twelve identical marks.

</details>

<details>
<summary>Hint 2</summary>

Choose separator gaps between marks. Count how many separators are needed and explain why end gaps or repeated gaps would violate positivity.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E031 — Solution

Write $12$ identical marks in a row and choose three of the eleven
internal gaps for separators. Each choice produces four nonempty consecutive
blocks and hence one ordered four-part composition, reversibly. The count is
$\binom{11}{3}=165$. Positivity is why separators cannot occupy end gaps or coincide.

</details>

### DM-SP2-E032 — A conjugate partition (introductory)

Find the conjugate of the partition $(5,3,3,1)$ and verify that conjugation
preserves total size.

<details>
<summary>Hint 1</summary>

The $j$th part of the conjugate counts original parts of size at least $j$.

</details>

<details>
<summary>Hint 2</summary>

Compute those counts until the largest original part is reached; explain preservation of size by counting the same diagram's cells in two ways.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E032 — Solution

Column heights are the numbers of parts at least $j$. They are
$4,3,3,1,1$, so the conjugate is $(4,3,3,1,1)$. The original size is
$5+3+3+1=12$; the conjugate size is $4+3+3+1+1=12$. Both count the same cells,
once by rows and once by columns, which explains the equality without relying
on the arithmetic check.

</details>

### DM-SP2-E033 — Restricted-part generating function (introductory)

Write a generating function whose coefficient of $x^{n}$ counts partitions of
$n$ using only parts $1,3,4$, with part $3$ used at most twice.

<details>
<summary>Hint 1</summary>

Choose a separate multiplicity factor for each allowed part size.

</details>

<details>
<summary>Hint 2</summary>

Unrestricted multiplicities give geometric series; the cap on threes truncates just that factor. Multiply because the multiplicities determine the partition.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E033 — Solution

Parts $1$ and $4$ may occur with arbitrary multiplicity, giving
factors $(1-x)^{-1}$ and $(1-x^{4})^{-1}$. The allowed multiplicities of $3$ are
zero, one, or two, giving $1+x^{3}+x^{6}$. Thus the function is
$(1+x^{3}+x^{6})/((1-x)(1-x^{4}))$. Choosing a monomial from each factor uniquely
chooses all multiplicities.

</details>

### DM-SP2-E034 — Exactly three parts (introductory)

List all partitions of $8$ into exactly three positive parts.

<details>
<summary>Hint 1</summary>

Write each partition in nonincreasing order to avoid counting reorderings.

</details>

<details>
<summary>Hint 2</summary>

Fix its largest part, then solve for the other two positive parts with the required ordering; bound the possible largest part first.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E034 — Solution

In decreasing order they are
$6+1+1$, $5+2+1$, $4+3+1$, $4+2+2$, and $3+3+2$.
For completeness, the largest part can be $6,5,4,3$; solving the remaining
two-part partition in nonincreasing order gives respectively one, one, two,
and one choices. A largest part below $3$ cannot sum to $8$ with three parts.

</details>

### DM-SP2-E035 — A coefficient extraction (introductory)

Find $[x^{7}](1+x+x^{2})^{3}$ by interpreting the factors, not by expanding the
entire polynomial.

<details>
<summary>Hint 1</summary>

A monomial choice from each factor corresponds to three selected exponents.

</details>

<details>
<summary>Hint 2</summary>

Before enumerating those exponent triples, compare the requested total exponent with the largest total the three factors can produce.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E035 — Solution

The coefficient counts triples $(a,b,c)\in \{0,1,2\}^{3}$ with
$a+b+c=7$. The maximum sum is $6$, so no such triple exists and the coefficient
is $0$. This boundary check is often faster and safer than multiplication.

</details>

### DM-SP2-E036 — Lower-bounded compositions (intermediate)

Count ordered five-tuples of integers $(x_{1},\ldots,x_{5})$ satisfying
$x_{1}+⋯+x_{5}=23$ and $x_{i}\ge 2$.

<details>
<summary>Hint 1</summary>

Remove the lower bound by shifting every coordinate by the same amount.

</details>

<details>
<summary>Hint 2</summary>

Find the new total after the shift, apply stars and bars to nonnegative coordinates, and explain why shifting back is a bijection.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E036 — Solution

Put $y_{i}=x_{i}-2\ge 0$. Then $\sum y_{i}=13$. Stars and bars gives
$\binom{13+5-1}{5-1}=\binom{17}{4}=2380$. The shift is a bijection: adding two to each
nonnegative solution returns exactly one permitted tuple, so no inclusion–
exclusion correction is needed.

</details>

### DM-SP2-E037 — Parts confined to an interval (intermediate)

Count partitions of $10$ whose parts all belong to $\{2,3,4\}$, and give both a
coefficient expression and a complete list.

<details>
<summary>Hint 1</summary>

Represent a partition by the multiplicities of twos, threes and fours.

</details>

<details>
<summary>Hint 2</summary>

Fix the number of fours, then solve the remaining equation in twos and threes. Use the same multiplicities to write the generating product.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E037 — Solution

The coefficient expression is
$[x^{10}]((1-x^{2})(1-x^{3})(1-x^{4}))^{-1}$. The five partitions are
$2+2+2+2+2$, $3+3+2+2$, $4+2+2+2$, $4+3+3$, and $4+4+2$.
For completeness, fix the number $c=0,1,2$ of fours and solve
$2a+3b=10-4c$; the respective solution counts are two, two, and one. No larger
$c$ is possible.

</details>

### DM-SP2-E038 — Bounded multiplicities (intermediate)

Compute the number of partitions of $10$ in which every part occurs at most
twice, by giving a finite coefficient formula suitable for exact computation.

<details>
<summary>Hint 1</summary>

For each possible part size, allow exactly three multiplicity choices.

</details>

<details>
<summary>Hint 2</summary>

Only sizes up to ten affect the requested coefficient. A table indexed by processed part size and remaining total can extract the finite product exactly.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E038 — Solution

Parts greater than $10$ cannot contribute, so the answer is
$[x^{10}]\prod_{j=1}^{10}(1+x^{j}+x^{2j})$. A dynamic coefficient update gives
$p_{j}(n)=p_{j-1}(n)+p_{j-1}(n-j)+p_{j-1}(n-2j)$, with
$p_{0}(0)=1$, $p_{0}(n)=0$ for $n>0$, and negative arguments zero.
Evaluating this table yields $22$. The recurrence is also a reproducible
certificate: each term records multiplicity zero, one, or two of part $j$.

</details>

### DM-SP2-E039 — A two-variable marker (intermediate)

Give a bivariate generating function for partitions in which $x$ marks total
size and $u$ marks number of parts. Explain how to extract partitions of $9$
with four parts.

<details>
<summary>Hint 1</summary>

A part of size $j$ contributes one unit to the number-of-parts statistic and $j$ units to size.

</details>

<details>
<summary>Hint 2</summary>

Give multiplicity $m$ its corresponding monomial in both variables, then identify which two exponents must be extracted and why only finitely many factors matter.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E039 — Solution

For part size $j$, choosing multiplicity $m$ contributes
$u^{m} x^{jm}$, hence the factor $(1-ux^{j})^{-1}$. The product
$\prod_{j\ge 1}(1-ux^{j})^{-1}$ marks both statistics. The desired number is the
coefficient $[u^{4}x^{9}]$. Only factors $j\le 9$ and multiplicities $m\le 4$ can affect
it, so the extraction is finite despite the formal infinite product.

</details>

### DM-SP2-E040 — Rectangle recurrence (intermediate)

Let $R(a,b;n)$ count partitions of $n\ge 0$ whose diagram fits in an $a\times b$
rectangle. With $R(a,b;t)=0$ for $t<0$, prove
$R(a,b;n)=R(a,b-1;n)+R(a-1,b;n-b)$ for $a,b\ge 1$, and state the zero-dimension
base convention.

<details>
<summary>Hint 1</summary>

Use the rectangle convention of at most $a$ parts, each at most $b$.

</details>

<details>
<summary>Hint 2</summary>

Separate partitions according to whether a part equal to $b$ occurs. Remove one such part in that case, and consider the empty partition for zero dimensions.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E040 — Solution

Use the convention “at most $a$ parts, each at most $b$.” Split
according to whether a partition contains a part equal to $b$. If not, every
part is at most $b-1$, giving $R(a,b-1;n)$. If so, remove one such part; the
remainder partitions $n-b$ into at most $a-1$ parts, each at most $b$, giving
$R(a-1,b;n-b)$. Adding the disjoint, exhaustive cases proves the formula.
For either zero dimension, only the empty partition fits: thus
$R(0,b;0)=R(a,0;0)=1$ and $R(0,b;n)=R(a,0;n)=0$ for $n>0$.

</details>

### DM-SP2-E041 — A partition identity by shifting (advanced)

For integers $n\ge k\ge 0$, prove that the number of partitions of $n$ into exactly
$k$ positive parts
equals the number of partitions of $n-k$ into at most $k$ parts.

<details>
<summary>Hint 1</summary>

Try subtracting the same small quantity from each of the exactly $k$ positive parts.

</details>

<details>
<summary>Hint 2</summary>

Zeros may appear after subtraction; for the inverse, pad with zeros before adding back. Handle $k=0$ separately.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E041 — Solution

From an exactly-$k$ partition
$\lambda_{1}\ge ⋯\ge \lambda_{k}\ge 1$, subtract one from every part. The resulting nonnegative weakly
decreasing sequence sums to $n-k$; delete trailing zeros to obtain at most $k$
positive parts. Conversely, pad such a partition with zeros to length $k$ and
add one to each entry. These operations are inverse, establishing a bijection,
including $n=k$. When $k=0$, each side contains the empty partition if $n=0$
and is empty if $n>0$, so the boundary case also agrees.

</details>

### DM-SP2-E042 — Root-of-unity parity filter (advanced)

For nonnegative integer weights $w_{1},\ldots,w_{m}$, prove that the generating
polynomial for subsets of even cardinality, counted by total weight, is
$$(\prod(1+x^{w_{i}})+\prod(1-x^{w_{i}}))/2$$

<details>
<summary>Hint 1</summary>

Introduce an extra variable marking the cardinality of a chosen subset.

</details>

<details>
<summary>Hint 2</summary>

Evaluate that variable at $1$ and $-1$ and inspect the coefficient multiplier for a subset of even or odd size.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E042 — Solution

Introduce $u$ to mark cardinality:
$F(u,x)=\prod_{i=1}^{m}(1+u x^{w_{i}})$. A subset of size $k$ contributes
$u^{k} x^{weight}$. Then $(F(1,x)+F(-1,x))/2$ multiplies its coefficient by
$(1+(-1)^{k})/2$, which is one for even $k$ and zero for odd $k$. Substituting
the two values of $u$ gives the claimed expression.

</details>

### DM-SP2-E043 — Inclusion–exclusion for capped allocations (advanced)

Count solutions of $x_{1}+x_{2}+x_{3}+x_{4}=18$ with integers $0\le x_{i}\le 6$.

<details>
<summary>Hint 1</summary>

Begin with unrestricted nonnegative solutions, and declare a coordinate bad when it exceeds its cap.

</details>

<details>
<summary>Hint 2</summary>

For a prescribed set of bad coordinates subtract seven from each; determine how many simultaneous violations the total can support before applying inclusion–exclusion.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E043 — Solution

Without caps there are $\binom{21}{3}$. If a specified coordinate is at
least $7$, subtract $7$; there are $\binom{14}{3}$ solutions. For two specified
coordinates at least $7$, there are $\binom{7}{3}$. Three violations require residual
sum $-3$ and are impossible. Hence the count is
$$\binom{21}{3}-4\binom{14}{3}+\binom{4}{2}\binom{7}{3}=1330-1456+210=84$$
The binomial factor chooses the violating coordinates.

</details>

### DM-SP2-E044 — Multinomial coefficient with a score (advanced)

Strings of length $12$ over $\{A,B,C\}$ assign scores $0,1,3$ respectively.
Find a coefficient expression and an explicit finite sum for strings of score
$$15$$

<details>
<summary>Hint 1</summary>

Treat the choices at each position as a generating polynomial with the given scores.

</details>

<details>
<summary>Hint 2</summary>

For the finite sum, fix the number of $C$ symbols, derive the other two multiplicities from length and score, and impose nonnegativity before using multinomial coefficients.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E044 — Solution

Each position contributes $1+x+x^{3}$, so the answer is
$[x^{15}](1+x+x^{3})^{12}$. If there are $c$ copies of $C$, then there are
$b=15-3c$ copies of $B$ and $a=12-b-c=2c-3$ copies of $A$. Nonnegativity gives
$c=2,3,4,5$. Therefore the explicit answer is
$$\sum_{c=2}^{5} 12!/((2c-3)!(15-3c)!c!) = 47652$$
Each term chooses positions with the stated multiplicities.

</details>

### DM-SP2-E045 — Proving a dynamic program exact (advanced)

Consider the update $D[0]=1$, all other entries zero, and for each allowed part
$j=1,\ldots,m$, perform $D[n]←D[n]+D[n-j]$ for $n=j,\ldots,N$ in increasing order.
Prove the final $D[n]$ counts partitions of $n$ with parts at most $m$.

<details>
<summary>Hint 1</summary>

State an invariant after processing all part sizes below $j$.

</details>

<details>
<summary>Hint 2</summary>

During the increasing scan, distinguish the old value at $n$ from the already updated value at $n-j$. Explain which counts use zero or at least one copy of $j$.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E045 — Solution

Induct on processed part sizes. Before processing $j$, let
$D[n]$ count partitions using parts at most $j-1$. During the increasing scan,
the current $D[n-j]$ already counts partitions using parts up to $j$, including
any number of $j$'s. Appending one $j$ bijects those with partitions of $n$
whose number of $j$'s is positive. The old $D[n]$ counts those using none.
These cases are disjoint and exhaustive, proving the invariant and final claim.

</details>

## Chapter 12: Graph Decompositions, Orientations, and Structural Certificates

Throughout this section graphs are finite. Undirected graphs are simple unless
parallel edges are explicitly mentioned.

### DM-SP2-E046 — Bridges in a named graph (introductory)

The graph has vertices $\{1,2,3,4,5,6,7\}$ and edges
$\{12,23,31,34,45,56,64,67\}$. Identify every bridge and justify the answer.

<details>
<summary>Hint 1</summary>

An edge on a cycle has an alternate route between its endpoints.

</details>

<details>
<summary>Hint 2</summary>

Identify the explicitly listed cycles first, then examine deletion of each remaining edge and specify the vertex sets it separates.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E046 — Solution

Edges $12,23,31$ lie on one triangle and $45,56,64$ on another,
so none of those six is a bridge. Deleting $34$ separates the two triangle
regions, while deleting $67$ isolates vertex $7$. Thus exactly $34$ and $67$
are bridges. The edge and cycle lists are a complete text alternative to a
drawing.

</details>

### DM-SP2-E047 — Articulation vertices (introductory)

For the graph of Exercise 46, identify all articulation vertices.

<details>
<summary>Hint 1</summary>

Remove one named vertex at a time and ask whether the number of components increases.

</details>

<details>
<summary>Hint 2</summary>

Use the attachments between the two triangles and the pendant vertex to focus the search, but also explain why the other vertices fail the criterion.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E047 — Solution

Removing $3$ separates $\{1,2\}$ from the rest. Removing $4$
separates the first triangle from $\{5,6,7\}$, and removing $6$ isolates $7$.
Removing $1,2,5$, or $7$ leaves a connected graph. Hence the articulation
vertices are exactly $3,4,6$.

</details>

### DM-SP2-E048 — Degeneracy of a cycle (introductory)

Prove that the cycle $C_{n}$, for $n\ge 3$, is $2$-degenerate but not
$1$-degenerate.

<details>
<summary>Hint 1</summary>

The definition of degeneracy quantifies over every nonempty subgraph.

</details>

<details>
<summary>Hint 2</summary>

Use the cycle's maximum degree for one bound and its own minimum degree to rule out a smaller degeneracy.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E048 — Solution

Every nonempty subgraph of a cycle has a vertex of degree at most
$2$, so it is $2$-degenerate. The full cycle has minimum degree $2$; therefore
it has no vertex of degree at most $1$, violating the defining condition for
$1$-degeneracy. Both bounds are needed to establish the exact degeneracy.

</details>

### DM-SP2-E049 — Balancing a four-edge path (introductory)

Orient the path with edges $12,23,34,45$ so every vertex has indegree and
outdegree differing by at most one. Give the arc list.

<details>
<summary>Hint 1</summary>

Try orienting the edges consistently along the path.

</details>

<details>
<summary>Hint 2</summary>

Check entering and leaving counts separately at internal vertices and at the two endpoints; the endpoint condition allows a difference of one.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E049 — Solution

Orient consecutively $1\to 2$, $2\to 3$, $3\to 4$, $4\to 5$. Each internal
vertex has one entering and one leaving arc. Vertex $1$ has difference one and
vertex $5$ has difference one in the opposite direction. Thus the arc list is
a certificate meeting the required inequality at all five vertices.

</details>

### DM-SP2-E050 — Checking a topological order (introductory)

A digraph has arcs $a\to c,b\to c,b\to d,c\to e,d\to e$. Decide whether
$(b,a,d,c,e)$ is a topological order.

<details>
<summary>Hint 1</summary>

Assign each vertex its position in the proposed ordering.

</details>

<details>
<summary>Hint 2</summary>

For each listed arc compare its tail's position with its head's position. A single backward arc would disqualify the order.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E050 — Solution

In the proposed order, $a$ precedes $c$, $b$ precedes both $c$
and $d$, and $c,d$ both precede $e$. Every listed arc therefore points forward,
so the order is topological. Checking all five arcs supplies a complete
certificate; reachability pairs need not be checked separately.

</details>

### DM-SP2-E051 — Constructing the bridge tree (intermediate)

Let a connected graph consist of cycles on vertex sets $\{a,b,c\}$ and $\{d,e,f\}$,
plus edges $cd$, $fg$, and $gh$. Contract each maximal subgraph containing no
bridge. List the resulting bridge-tree vertices and edges.

<details>
<summary>Hint 1</summary>

Find the edges whose deletion disconnects the graph before performing any contraction.

</details>

<details>
<summary>Hint 2</summary>

Remove those edges conceptually and list all resulting connected components, including singleton components; then translate each removed edge to an edge between components.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E051 — Solution

The two cycles form blocks $A=\{a,b,c\}$ and $D=\{d,e,f\}$; the
remaining singleton blocks are $G=\{g\}$ and $H=\{h\}$. The bridges are $cd,fg,gh$,
so contraction yields vertices $A,D,G,H$ and edges $AD,DG,GH$. This is a path,
hence a tree. The listed partition and edge set specify the contracted object
without a picture.

</details>

### DM-SP2-E052 — A low-link bridge test (intermediate)

In a depth-first search tree rooted at $r$, a tree edge $p\to v$ has discovery
times $\operatorname{disc}(p)=4$, $\operatorname{disc}(v)=7$, and $\operatorname{low}(v)=4$. Is the underlying undirected
edge $pv$ a bridge? State the exact test.

<details>
<summary>Hint 1</summary>

Recall that the bridge criterion uses a strict inequality between a child's low-link value and its parent's discovery time.

</details>

<details>
<summary>Hint 2</summary>

Interpret equality as a route from the child's subtree back to the parent. Decide whether that route survives deletion of the tree edge.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E052 — Solution

A DFS tree edge $pv$ is a bridge exactly when
$\operatorname{low}(v)>\operatorname{disc}(p)$. Here $\operatorname{low}(v)=\operatorname{disc}(p)=4$, so it is not a bridge. Equality
means the subtree of $v$ has a back edge reaching $p$ (or an ancestor with the
same minimum time), providing an alternate route after deletion of $pv$.

</details>

### DM-SP2-E053 — Degeneracy coloring certificate (intermediate)

Prove every $k$-degenerate graph is $(k+1)$-colorable, and specify a certificate
that a verifier can check in linear time given adjacency lists.

<details>
<summary>Hint 1</summary>

Delete a vertex of degree at most $k$ repeatedly, using degeneracy again on the remaining graph.

</details>

<details>
<summary>Hint 2</summary>

Color in reverse deletion order. A certificate should let a verifier check later-neighbor counts and the final edge constraints with adjacency-list scans.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E053 — Solution

Repeatedly delete a vertex of current degree at most $k$, recording
the deletion order. Reinsert vertices in reverse order. At insertion, at most
$k$ already colored neighbors forbid colors, so one of $k+1$ colors remains.
A certificate consists of the deletion order and final colors. A verifier
checks each vertex's later-neighbor count is at most $k$, then checks endpoints
of every edge have different colors; both scans are linear in vertices plus
edges.

</details>

### DM-SP2-E054 — Two ways to reject acyclicity (intermediate)

The arcs are $1\to 2,2\to 3,3\to 1,3\to 4$. Give both a directed-cycle certificate and a
failed-topological-order argument.

<details>
<summary>Hint 1</summary>

Find a sequence of listed arcs that returns to its starting vertex.

</details>

<details>
<summary>Hint 2</summary>

A hypothetical topological order must place every successive vertex of that cycle later than its predecessor; combine those strict inequalities.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E054 — Solution

The arcs $1\to 2,2\to 3,3\to 1$ form a directed cycle. If a topological
order existed, those arcs would force $1$ before $2$, $2$ before $3$, and $3$
before $1$; transitivity would put $1$ strictly before itself, impossible. The
fourth arc is irrelevant. The ordered cycle $(1,2,3,1)$ is the shorter
machine-checkable certificate.

</details>

### DM-SP2-E055 — A two-step center in a tournament (intermediate)

Prove every finite tournament has a vertex from which every other vertex is
reachable by a directed path of length at most two.

<details>
<summary>Hint 1</summary>

Choose a vertex of maximum outdegree and consider a vertex it does not beat directly.

</details>

<details>
<summary>Hint 2</summary>

If no outneighbor of the chosen vertex beats that target either, compare the target's outdegree with the maximal one.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E055 — Solution

Choose a vertex $v$ of maximum outdegree. A vertex $x$ not already
reached by $v\to x$ must satisfy $x\to v$. If no outneighbor $y$ of $v$ had $y\to x$,
then $x$ would beat $v$ and every outneighbor of $v$, giving $x$ strictly larger
outdegree than $v$. This contradicts maximality. Hence some $y$ gives
$v\to y\to x$. Thus $v$ reaches every vertex in at most two steps.

</details>

### DM-SP2-E056 — A strong orientation certificate (advanced)

Give a strongly connected orientation of $K_{2,3}$ with parts $\{a,b\}$ and
$\{1,2,3\}$, and justify strong connectivity from an arc list.

<details>
<summary>Hint 1</summary>

Start by orienting a four-cycle through both vertices of the size-two part.

</details>

<details>
<summary>Hint 2</summary>

Attach the remaining vertex with an incoming arc from that directed cycle and an outgoing arc back to it; account for all edges.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E056 — Solution

Use arcs
$a\to 1,1\to b,b\to 2,2\to a,a\to 3,3\to b$. The first four form the directed cycle
$a\to 1\to b\to 2\to a$, so its four vertices mutually reach one another. Vertex $3$ is
reached from the cycle through $a\to 3$, and it reaches the cycle through $3\to b$.
Therefore every ordered pair of vertices is connected by a directed path. The
arc list accounts for all six edges of $K_{2,3}$.

</details>

### DM-SP2-E057 — Orienting a cycle decomposition strongly (advanced)

Suppose a connected graph is built from one cycle by repeatedly adjoining a
path whose endpoints are already present but whose internal vertices are new.
Prove it has a strongly connected orientation.

<details>
<summary>Hint 1</summary>

Use induction on the number of adjoined paths, beginning with a cyclic orientation of the initial cycle.

</details>

<details>
<summary>Hint 2</summary>

Orient the next path consistently from one old endpoint to the other. Use old strong connectivity to build paths into and out of every new internal vertex.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E057 — Solution

Orient the initial cycle cyclically, making it strongly connected.
Inductively, assume the old graph is strongly connected and a new path has
endpoints $u,v$. Orient the path from $u$ to $v$. Each new internal vertex can
reach $v$ along the path and then every old vertex; every old vertex can reach
$u$ and then the new vertex along the path. Paths between old vertices remain.
Thus strong connectivity persists after every adjoining step.

</details>

### DM-SP2-E058 — Cut characterization of strong connectivity (advanced)

Prove a digraph $D$ is strongly connected exactly when every nonempty proper
vertex set $S$ has both an arc leaving $S$ and an arc entering $S$.

<details>
<summary>Hint 1</summary>

For necessity, follow paths between a vertex in $S$ and one outside it in both directions.

</details>

<details>
<summary>Hint 2</summary>

For sufficiency, if one vertex cannot reach another, consider the full set reachable from the first vertex and examine its outgoing arcs.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E058 — Solution

If $D$ is strong, choose $s\in S,t\notin S$; an $s$–$t$ path has a first
leaving arc, and a $t$–$s$ path has a first entering arc. Conversely, if $D$ is
not strong, choose $s,t$ with no $s$–$t$ path and let $R$ be the vertices
reachable from $s$. Then $R$ is nonempty and proper, and no arc leaves it,
because such an arc would extend a reachability path. This contradicts the cut
condition, proving the equivalence.

</details>

### DM-SP2-E059 — Balanced orientation by an Euler tour (advanced)

Prove every finite undirected graph has an orientation satisfying
$|out(v)-in(v)|\le 1$ at every vertex.

<details>
<summary>Hint 1</summary>

Odd degrees prevent an Euler circuit, so first change their parities using auxiliary edges.

</details>

<details>
<summary>Hint 2</summary>

Pair odd-degree vertices within each component, orient an Euler circuit in the augmented multigraph, then track the imbalance caused by deleting each auxiliary edge.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E059 — Solution

In each connected component, pair its odd-degree vertices
arbitrarily and add one auxiliary edge per pair, producing an even-degree
multigraph. Take an Euler circuit and orient each traversed edge forward. At
every vertex the augmented indegree equals augmented outdegree. Delete the
auxiliary edges. Removing none leaves difference zero; removing one incident
auxiliary edge changes the difference by exactly one. Since each odd vertex was
paired once, every original vertex has imbalance at most one.

</details>

### DM-SP2-E060 — Auditing a decomposition certificate (advanced)

A proposed bridge decomposition supplies a vertex partition into blocks, a list
of claimed bridges, and a tree on the blocks. State local checks that together
certify correctness, assuming the original connected graph is given by an edge
list.

<details>
<summary>Hint 1</summary>

Separate the proposed certificate into partition correctness, internal block structure and the graph of crossing edges.

</details>

<details>
<summary>Hint 2</summary>

Check all original edges are accounted for, each block is connected and bridge-free, and the crossing graph is a tree with the correct edge multiplicities.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E060 — Solution

Check the blocks are nonempty, disjoint, and cover all vertices.
For each claimed bridge, verify its endpoints lie in distinct blocks; verify
every other edge stays within one block. Check every block-induced subgraph is
connected and contains no bridge, using a DFS certificate or deletion paths.
Finally check the block graph contains exactly the claimed crossing edges and
is connected with one fewer edge than vertices. These checks prove every
crossing edge is a bridge and every maximal bridge-free region is represented.

</details>

## Chapter 13: Finite Designs, Incidence Counting, and Set Systems

### DM-SP2-E061 — Incidence degrees (introductory)

For point set $\{1,2,3,4\}$ and blocks $\{12,13,14,234\}$, compute every point
degree and every pair concurrence.

<details>
<summary>Hint 1</summary>

Make a table with one row per point and one column per listed block.

</details>

<details>
<summary>Hint 2</summary>

Row sums count point degrees. For each pair of distinct rows count the columns containing both, remembering that a triple contains three distinct pairs.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E061 — Solution

Point degrees are $r_{1}=3$ and $r_{2}=r_{3}=r_{4}=2$. Pair
concurrences are $\lambda_{12}=\lambda_{13}=\lambda_{14}=1$ and
$\lambda_{23}=\lambda_{24}=\lambda_{34}=1$, since the latter three pairs occur inside $234$.
Thus every pair has concurrence one even though block sizes and point degrees
are not constant. This distinguishes pair balance from being a $2$-design.

</details>

### DM-SP2-E062 — Parameter necessity (introductory)

Could a $2-(10,3,2)$ design exist? Use the standard parameter equations.

<details>
<summary>Hint 1</summary>

Use the replication equation before the total-incidence equation.

</details>

<details>
<summary>Hint 2</summary>

Check that each derived parameter is integral, and distinguish absence of a divisibility obstruction from a construction proving existence.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E062 — Solution

The replication number would satisfy
$r(k-1)=\lambda(v-1)$, hence $2r=18$ and $r=9$. Then
$bk=vr$ gives $3b=90$, so $b=30$. Both are integers, so the equations do not
rule out existence. They are necessary, not sufficient; therefore the correct
conclusion is “parameter-feasible by these tests,” not “exists.”

</details>

### DM-SP2-E063 — An impossible parameter set (introductory)

Show that no $2-(8,3,1)$ design exists.

<details>
<summary>Hint 1</summary>

Count blocks through a fixed point using the replication equation.

</details>

<details>
<summary>Hint 2</summary>

The resulting number must be an integer because it counts actual blocks. Look for a divisibility obstruction before attempting a construction.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E063 — Solution

The replication equation gives
$r(3-1)=1(8-1)$, so $2r=7$, impossible for integer $r$. Since $r$ counts blocks
through a point, it must be integral. This divisibility failure alone is a
complete nonexistence certificate.

</details>

### DM-SP2-E064 — Complements of blocks (introductory)

On a six-point set, a block family consists of six blocks of size two and each
point occurs in exactly two blocks. After complementing every block, determine
the new block size and replication number.

<details>
<summary>Hint 1</summary>

A point appears in a complemented block precisely when it was absent from the original block.

</details>

<details>
<summary>Hint 2</summary>

Use the total number of blocks for the new replication count and the size of the point set for the new block size.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E064 — Solution

Every complement has size $6-2=4$. A point belongs to a
complement exactly when it did not belong to the original block. There are six
blocks total and it originally occurred twice, so it occurs $6-2=4$ times in
the complemented family. Hence $k'=4$ and $r'=4$; no pair-balance assumption is
needed.

</details>

### DM-SP2-E065 — A pair packing bound (introductory)

At most how many triples can a pair packing on seven points contain if no pair
appears twice?

<details>
<summary>Hint 1</summary>

Count available pairs in the whole point set and pairs consumed by one triple.

</details>

<details>
<summary>Hint 2</summary>

No pair can be consumed by two blocks. Turn this into an inequality, while distinguishing an upper bound from an attained maximum.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E065 — Solution

Each triple contains $\binom{3}{2}=3$ pairs, and the seven-point set has
$\binom{7}{2}=21$ pairs. Since different blocks consume disjoint pairs, $3b\le 21$, so
$b\le 7$. This is only an upper bound until a seven-block construction is
exhibited.

</details>

### DM-SP2-E066 — Deriving the design equations (intermediate)

In a $2-(v,k,\lambda)$ design, prove $r(k-1)=\lambda(v-1)$ and $bk=vr$.

<details>
<summary>Hint 1</summary>

For the first equation, fix a point and count incidences involving one further point and a block containing both.

</details>

<details>
<summary>Hint 2</summary>

For the second, count all point–block incidences once by points and once by blocks; make explicit the choices counted on each side.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E066 — Solution

Fix a point $x$ and count ordered incidences $(y,B)$ with
$y\ne x$ and $\{x,y\}\subseteq B$. Each of the $r$ blocks through $x$ offers $k-1$ choices,
while each of $v-1$ points $y$ shares exactly $\lambda$ blocks with $x$; hence the
first identity. Counting all point–block incidences gives $vr$ by points and
$bk$ by blocks, proving the second.

</details>

### DM-SP2-E067 — Auditing the seven triples (intermediate)

On points $Z_{7}$, take blocks $\{i,i+1,i+3\}$ modulo $7$ for $i\in Z_{7}$. Prove every
unordered pair occurs exactly once.

<details>
<summary>Hint 1</summary>

Translation preserves ordered differences modulo seven.

</details>

<details>
<summary>Hint 2</summary>

Compute the six ordered differences in the base triple; use uniqueness of each nonzero difference to show that a given ordered pair selects exactly one translate.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E067 — Solution

There are seven blocks and each contains three pairs, so there
are $21=\binom{7}{2}$ pair incidences. It remains to show no pair repeats. Differences
among $\{0,1,3\}$ are $\pm1,\pm2,\pm3$, every nonzero residue modulo $7$ exactly once
as an ordered difference. Translation preserves differences, so for every
ordered pair of distinct points there is exactly one translated block
containing it in the appropriate positions. Hence every unordered pair occurs
once.

</details>

### DM-SP2-E068 — A three-design consequence (intermediate)

In a $3-(v,k,\lambda)$ design, derive the number $\lambda_{2}$ of blocks containing any fixed
pair.

<details>
<summary>Hint 1</summary>

Fix the pair and count choices of a third point together with a block containing all three.

</details>

<details>
<summary>Hint 2</summary>

Count first by blocks through the pair and then by possible third points; the former offers $k-2$ choices per block.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E068 — Solution

Fix a pair $\{x,y\}$ and count pairs $(z,B)$ where
$z\notin \{x,y\}$ and $\{x,y,z\}\subseteq B$. Every block through $\{x,y\}$ supplies $k-2$ choices
for $z$, giving $\lambda_{2}(k-2)$. Each of the $v-2$ choices of $z$ lies with the pair
in exactly $\lambda$ blocks, giving $\lambda(v-2)$. Therefore
$\lambda_{2}=\lambda(v-2)/(k-2)$, an integer necessary condition.

</details>

### DM-SP2-E069 — Incidence-matrix identities (intermediate)

Let $N$ be the $v\times b$ incidence matrix of a $2-(v,k,\lambda)$ design. Prove
$$NN^{T}=(r-\lambda)I+\lambda J$$

<details>
<summary>Hint 1</summary>

Interpret an entry of the matrix product as a dot product of two incidence rows.

</details>

<details>
<summary>Hint 2</summary>

Treat equal row indices and distinct row indices separately, then compare with the diagonal and off-diagonal entries of the proposed matrix.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E069 — Solution

Entry $(x,y)$ of $NN^{T}$ is the dot product of incidence rows,
hence the number of blocks containing both points. It equals $r$ when $x=y$
and $\lambda$ when $x\ne y$. The matrix $(r-\lambda)I+\lambda J$ has diagonal
$r-\lambda+\lambda=r$ and off-diagonal $\lambda$, so the matrices agree entrywise. This identity
is also a numerical alternative to the incidence picture.

</details>

### DM-SP2-E070 — Resolvable pair blocks (intermediate)

Partition all two-element subsets of $\{1,2,3,4\}$ into parallel classes, where a
parallel class partitions the point set.

<details>
<summary>Hint 1</summary>

In each parallel class, pair the point $1$ with one of the other points.

</details>

<details>
<summary>Hint 2</summary>

The remaining two points must form the other block of that class. Check that the resulting classes use every pair exactly once.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E070 — Solution

The three classes are
$\{12,34\}$, $\{13,24\}$, and $\{14,23\}$. Within each class the two blocks are
disjoint and cover all four points. Across the classes, the six listed pairs
are all distinct and exhaust $\binom{4}{2}=6$ pairs. Thus this is a complete
resolution, specified entirely as incidence lists.

</details>

### DM-SP2-E071 — Constant intersections in a symmetric design (advanced)

Assume a nontrivial $2-(v,k,\lambda)$ design ($1<k<v$) has $b=v$ and distinct blocks.
Prove any two distinct blocks meet in exactly $\lambda$ points.

<details>
<summary>Hint 1</summary>

First use $b=v$ in the incidence equation to relate replication to block size.

</details>

<details>
<summary>Hint 2</summary>

The matrix identity for $NN^T$ makes the square incidence matrix invertible. Compare its action on the all-ones line and its orthogonal complement to obtain the corresponding identity for $N^TN$.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E071 — Solution

From $bk=vr$ and $b=v$, we obtain $r=k$. Thus
$NN^{T}=(k-\lambda)I+\lambda J$, which is nonsingular because its eigenvalues
$k-\lambda>0$ and $k-\lambda+\lambda v>0$. Hence square $N$ is invertible. Both $N$ and $N^{T}$
send the all-ones vector to $k$ times itself. On its orthogonal complement,
$NN^{T}=(k-\lambda)I$, so the square invertible map $N/\sqrt{k-\lambda}$ is orthogonal there;
hence $N^{T}N=(k-\lambda)I$ there too. On the all-ones line both sides of
$N^{T}N=(k-\lambda)I+\lambda J$ act by $k^{2}=k-\lambda+\lambda v$, using
$k(k-1)=\lambda(v-1)$. Thus the identity holds. Its off-diagonal entries count block
intersections, so each is $\lambda$.

</details>

### DM-SP2-E072 — Fisher-type rank bound (advanced)

Prove that a nontrivial $2-(v,k,\lambda)$ design ($1<k<v$) has at least $v$ blocks.

<details>
<summary>Hint 1</summary>

Use the incidence identity to study the rank of $NN^T$.

</details>

<details>
<summary>Hint 2</summary>

The parameter equation makes $r-\lambda$ positive under nontriviality. Evaluate the associated quadratic form, then compare the rank of $N$ with its number of columns.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E072 — Solution

Its incidence matrix satisfies
$NN^{T}=(r-\lambda)I+\lambda J$. Here
$r-\lambda=\lambda(v-k)/(k-1)>0$. Therefore $NN^{T}$ is positive definite: for nonzero $x$,
$x^{T}NN^{T}x=(r-\lambda)\lVert x\rVert^{2}+\lambda(\sum x_{i})^{2}>0$. Hence $NN^{T}$ has rank $v$, so $N$ has
rank $v$. A $v\times b$ matrix cannot have rank exceeding $b$; consequently $b\ge v$.

</details>

### DM-SP2-E073 — Antichain bound via maximal chains (advanced)

Let $A$ be an antichain of subsets of $[n]$. Prove
$\sum_{S\in A} 1/\binom{n}{|S|}\le 1$ by counting maximal chains.

<details>
<summary>Hint 1</summary>

Encode a maximal chain by the order in which elements enter it.

</details>

<details>
<summary>Hint 2</summary>

Count chains through a fixed $k$-element set by ordering elements before and after that set is reached. Use the antichain condition to bound the total number of such incidences.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E073 — Solution

There are $n!$ maximal chains, one for each order in which
elements are inserted. A fixed $k$-set lies in $k!(n-k)!$ such chains. Since a
chain contains at most one member of an antichain, counting incidences
$(S,chain)$ gives
$\sum_{S\in A}|S|!(n-|S|)!\le n!$. Divide by $n!$ and use
$|S|!(n-|S|)!/n! = 1/\binom{n}{|S|}$ to obtain the inequality.

</details>

### DM-SP2-E074 — A relabeling certificate (advanced)

Two set systems on point sets $X,Y$ are isomorphic if a bijection $\pi:X\to Y$
sends their block multisets onto one another. Explain a complete certificate and
verification procedure, including repeated blocks.

<details>
<summary>Hint 1</summary>

An isomorphism certificate must specify the image of every point, not just matching numerical invariants.

</details>

<details>
<summary>Hint 2</summary>

After checking bijectivity, compare the entire lists of image blocks and target blocks in canonical order; keep repeated occurrences when comparing those lists.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E074 — Solution

The certificate is the table of values of $\pi$. Verify every
point of $Y$ appears exactly once, proving bijectivity. For each block $B$ of
the first system, sort the image set $\pi(B)$ into a canonical tuple. Sort the
entire resulting tuple list and compare it, with multiplicities, to the sorted
canonical block list of the second system. Equality proves the image block
multisets coincide; inequality supplies a specific missing or overrepresented
block. No drawing or heuristic invariant is used.

</details>

## Chapter 14: Matroid Independence and the Greedy Exchange Bridge

### DM-SP2-E075 — Auditing heredity (introductory)

On $E=\{1,2,3,4,5\}$, let $I$ consist of every subset of $\{1,2,3\}$ and every
subset of $\{4,5\}$. Prove $(E,I)$ is an independence system.

<details>
<summary>Hint 1</summary>

An independence system must contain the empty set and be closed under taking subsets.

</details>

<details>
<summary>Hint 2</summary>

For any listed independent set, choose which of the two displayed parts contains it, then check that every subset stays inside that same part.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E075 — Solution

The empty set is a subset of both displayed parts. If an
independent set lies inside $\{1,2,3\}$, each of its subsets does too; the same is
true inside $\{4,5\}$. Hence every subset of every member of $I$ remains in $I$,
proving heredity. Sets that mix the two parts are deliberately absent.

</details>

### DM-SP2-E076 — Heredity without augmentation (introductory)

For the system in Exercise 75, show augmentation fails.

<details>
<summary>Hint 1</summary>

Look for two independent sets from different displayed parts with unequal sizes.

</details>

<details>
<summary>Hint 2</summary>

For the smaller set, inspect every possible extension by an element of the larger set. Mixing the parts violates the family's defining rule.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E076 — Solution

Take $A=\{4,5\}$ and $B=\{1,2,3\}$. Both belong to $I$ and
$|A|=2<3=|B|$. For every $e\in B$, the set $A\cup \{e\}$ mixes the two parts and hence
is absent from $I$. Thus no element of $B\setminus A$ augments $A$; the pair and these
three failed extensions form a complete countercertificate.

</details>

### DM-SP2-E077 — Forests in a small multigraph (introductory)

A multigraph has a loop $\ell$ at $u$, two parallel edges $e,f$ between $u,v$,
and an edge $g$ between $v,w$. Use the convention that a loop is a one-edge
cycle and a parallel pair is a two-edge cycle. List its maximal cycle-free edge
sets.

<details>
<summary>Hint 1</summary>

Apply the stated cycle conventions before listing maximal sets.

</details>

<details>
<summary>Hint 2</summary>

A cycle-free set cannot use the loop or both parallel edges. Determine which other edges can always be added, so that your list records maximality as well as acyclicity.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E077 — Solution

A loop is already a cycle, so no cycle-free set contains $\ell$.
The two parallel edges together form a two-edge cycle, so at most one of $e,f$
may be chosen. Edge $g$ creates no cycle with either one alone. Therefore the
maximal cycle-free sets are exactly $\{e,g\}$ and $\{f,g\}$. The endpoint and edge
lists make the conclusion checkable without a drawing.

</details>

### DM-SP2-E078 — Partition capacities (introductory)

Partition $E=A\cup B$ with $|A|=4,|B|=5$, and impose capacities two on $A$ and one
on $B$. What is the maximum independent-set size, and how many bases exist?

<details>
<summary>Hint 1</summary>

The capacities supply an upper bound on total size; check it is attainable in both parts simultaneously.

</details>

<details>
<summary>Hint 2</summary>

A basis must saturate each capacity here. Count the choices in the two disjoint parts independently.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E078 — Solution

An independent set uses at most two elements of $A$ and at most
one of $B$, so the maximum size is $3$, attained because both parts have enough
elements. Every basis chooses exactly two from $A$ and one from $B$, giving
$\binom{4}{2}\binom{5}{1}=6\cdot 5=30$ bases.

</details>

### DM-SP2-E079 — Graphic independence (introductory)

In the graph with edges $\{12,23,31,34\}$, decide whether each set is graphic-
matroid independent: $A=\{12,23,34\}$ and $B=\{12,23,31\}$.

<details>
<summary>Hint 1</summary>

Graphic independence means the selected edge set contains no cycle.

</details>

<details>
<summary>Hint 2</summary>

Trace the edges in each proposed set: a path and a closed triangular walk have different consequences for independence.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E079 — Solution

Set $A$ forms the path $1-2-3-4$, so it has no cycle and is
independent. Set $B$ consists of all three edges of the triangle
$1-2-3-1$, so it contains a cycle and is dependent. The edge lists themselves
are textual certificates.

</details>

### DM-SP2-E080 — Augmentation for a partition matroid (intermediate)

Prove that sets respecting capacities $|I\cap E_{j}|\le c_{j}$ for a partition
$E=E_{1}⊔⋯⊔E_{m}$ satisfy augmentation.

<details>
<summary>Hint 1</summary>

Compare the numbers of elements of $A$ and $B$ in each part of the partition.

</details>

<details>
<summary>Hint 2</summary>

If $A$ is smaller in total, one part must have a smaller $A$-count. Choose an element of $B$ missing from $A$ there and check its capacity after insertion.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E080 — Solution

Let independent $A,B$ satisfy $|A|<|B|$. Summing their counts
over parts shows some $j$ has $|A\cap E_{j}|<|B\cap E_{j}|$. Choose
$e\in (B\cap E_{j})\setminus A$. Then the count in part $j$ increases by one but is at most
$|B\cap E_{j}|\le c_{j}$; all other part counts remain unchanged. Hence $A\cup \{e\}$ is
independent, proving augmentation.

</details>

### DM-SP2-E081 — Augmentation for forests (intermediate)

Let $A,B$ be forests in the same finite graph with $|A|<|B|$. Prove some edge
$e\in B\setminus A$ can be added to $A$ without creating a cycle.

<details>
<summary>Hint 1</summary>

Consider the connected components of the forest formed by $A$.

</details>

<details>
<summary>Hint 2</summary>

If every $B$-edge stayed inside one such component, bound the number of $B$-edges in each component using acyclicity, then sum and compare with $\lvert A\rvert$.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E081 — Solution

The forest $(V,A)$ has $|V|-|A|$ connected components, while
$(V,B)$ has fewer because $|B|>|A|$. If every edge of $B$ had both endpoints
inside one component of $(V,A)$, then each component's restriction of $B$ would
be a forest and contain at most one fewer edge than its number of vertices.
Summing would give $|B|\le |A|$, contradiction. Hence some $e\in B\setminus A$ joins two
different $A$-components. Adding it cannot create a cycle, proving augmentation.

</details>

### DM-SP2-E082 — Greedy in a uniform matroid (intermediate)

Let $U_{k,n}$ have real element weights. Prove descending-weight greedy returns
a maximum-weight basis, including ties.

<details>
<summary>Hint 1</summary>

In a uniform matroid every set of at most $k$ elements is independent.

</details>

<details>
<summary>Hint 2</summary>

Compare the $i$th-largest weight in an arbitrary basis with the $i$th weight accepted by greedy. Equality of weights should cause no difficulty in the summed inequality.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E082 — Solution

Every basis has exactly $k$ elements. Greedy accepts the first
$k$ elements in a nonincreasing weight order, since every set of size at most
$k$ is independent. If their weights are $w_{1}\ge ⋯\ge w_{k}$, any other $k$-set's
$i$th-largest weight is at most $w_{i}$; summing proves its total is no larger.
Arbitrary deterministic tie-breaking changes the chosen basis but not its
weight.

</details>

### DM-SP2-E083 — Restriction preserves augmentation (intermediate)

If $(E,I)$ is a matroid and $S\subseteq E$, prove
$(S,\{I\in I:I\subseteq S\})$ is a matroid.

<details>
<summary>Hint 1</summary>

Check the three matroid axioms for the restricted ground set separately.

</details>

<details>
<summary>Hint 2</summary>

The original augmentation element lies in $B\setminus A$; explain why that fact keeps it inside $S$ as well as preserving independence.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E083 — Solution

The empty set is retained, and heredity is inherited because a
subset of an independent subset of $S$ remains both independent and inside
$S$. For independent $A,B\subseteq S$ with $|A|<|B|$, augmentation in the original
matroid supplies $e\in B\setminus A$ with $A\cup \{e\}\in I$. Since $e\in B\subseteq S$, the augmented set
also belongs to the restricted family. Thus all axioms persist.

</details>

### DM-SP2-E084 — Greedy theorem by exchange (advanced)

Prove descending-weight greedy produces a maximum-weight basis of a matroid,
assuming all bases have the same finite cardinality.

<details>
<summary>Hint 1</summary>

Maintain an optimal basis containing the greedy prefix, extending that prefix one selected element at a time.

</details>

<details>
<summary>Hint 2</summary>

If the next greedy element is absent, exchange it for an element outside the prefix while retaining a basis. That exchanged element was feasible at the greedy choice, so compare their weights.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E084 — Solution

Let greedy choose $g_{1},\ldots,g_{r}$, and let $B$ be an optimal basis.
Inductively construct an optimal basis containing $g_{1},\ldots,g_{i}$. If $g_{i}$ is
already present, do nothing. Otherwise, basis exchange supplies
$b\in B\setminus \{g_{1},\ldots,g_{i-1}\}$ such that replacing $b$ by $g_{i}$ gives a basis. At the
moment $g_{i}$ was chosen, $b$ was feasible with the greedy prefix, so
$w(g_{i})\ge w(b)$. Replacement cannot lower weight; optimality means it remains
optimal. At $i=r$, the greedy basis itself is optimal.

</details>

### DM-SP2-E085 — Extracting a greedy-failure weight function (advanced)

Let a hereditary independence system violate augmentation: independent
$A,B$ satisfy $|A|<|B|$ and $A\cup \{e\}$ is dependent for every $e\in B\setminus A$. Construct
weights for which descending greedy can return a nonmaximum independent set.

<details>
<summary>Hint 1</summary>

Give all elements of $A$ a slight priority over those of $B\setminus A$.

</details>

<details>
<summary>Hint 2</summary>

Choose the priority bonus small enough that the larger cardinality of $B$ outweighs all bonuses earned by greedy; give other elements zero weight and use heredity to justify later rejections.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E085 — Solution

Give elements of $A$ weight $1+\varepsilon$, elements of $B\setminus A$ weight $1$,
and all others weight $0$, where $0<\varepsilon<( |B|-|A|)/|A|$ (if $A=\varnothing$, augmentation
cannot fail). With ties arranged so $A$ is scanned first, greedy accepts all of
$A$ and then rejects every member of $B\setminus A$; later zero-weight additions do not
improve its positive total $|A|(1+\varepsilon)$. Independent set $B$ has weight at least
$|B|>|A|(1+\varepsilon)$, so greedy is not optimal.

</details>

### DM-SP2-E086 — Negative weights and bases (advanced)

Give a matroid and weights where a maximum-weight independent set is not a
basis, and explain how to adapt greedy.

<details>
<summary>Hint 1</summary>

For optimization over arbitrary independent sets, adding a feasible negative-weight element may reduce the objective.

</details>

<details>
<summary>Hint 2</summary>

Try a small uniform matroid with one positive weight and the remaining weights negative; compare the best basis with a smaller independent set before adapting the stopping rule.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E086 — Solution

In $U_{2,3}$ on $\{a,b,c\}$, give weights $3,-1,-2$. Every basis
has two elements, and the best basis $\{a,b\}$ has weight $2$; the independent
singleton $\{a\}$ has weight $3$, so an optimum independent set need not be a
basis. To maximize over all independent sets, descending greedy should accept a
feasible element only when its weight is positive (zero may be accepted without
changing value). The basis theorem alone does not license forcing negative
elements into the solution.

</details>

### DM-SP2-E087 — Greedy separates over graph components (advanced)

Let a weighted graph have connected components $G_{1},\ldots,G_{s}$. Fix one total edge
order that is nonincreasing by weight, including a deterministic tie rule; each
component run uses the restriction of this same order. Prove that cycle-
rejecting greedy returns the union of the separately computed component trees,
and that this union is a maximum-weight spanning forest.

<details>
<summary>Hint 1</summary>

The fixed total order ensures that global and component scans see a component's edges in the same order.

</details>

<details>
<summary>Hint 2</summary>

Cycle creation depends only on edges within that component. After comparing the scans, write a spanning forest's weight as the sum of its component-tree weights.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E087 — Solution

An edge lies in one component, and whether accepting it creates a
cycle depends only on previously accepted edges of that component. Thus the
global scan interleaves, without changing, the separate component scans; its
output is their union. Graphic independence is a matroid, so greedy gives a
maximum-weight basis in each component. Every spanning forest is a disjoint
union of one spanning tree per component, and its weight is the sum of their
weights. Componentwise optimality therefore proves global optimality.

</details>

### DM-SP2-E088 — When a graphic matroid is almost free (advanced)

Let $G$ be a connected simple graph with $m\ge 3$ edges. Prove its forest family
is the uniform family $U_{m-1,m}$ exactly when $G$ is the cycle $C_{m}$.

<details>
<summary>Hint 1</summary>

For one direction, inspect all proper edge subsets of a cycle.

</details>

<details>
<summary>Hint 2</summary>

Conversely, the full dependent set contains a cycle. If an edge lay outside that cycle, what would the cycle say about independence of proper subsets?

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E088 — Solution

If $G=C_{m}$, every proper edge subset is acyclic, while the full
edge set is the cycle; these are exactly the sets of size at most $m-1$.
Conversely, suppose the forest family is $U_{m-1,m}$. The full edge set is
dependent, so it contains a cycle $C$. If any edge lay outside $C$, then
$E(C)$ would be a proper dependent subset, contradicting uniform independence
of every proper subset. Hence every edge lies on $C$. Connectivity and
simplicity leave no additional vertices or edges, so $G=C_{m}$.

</details>

## Chapter 15: Exact Small Computation, Experiments, and Claim Boundaries

### DM-SP2-E089 — Complete mixed-radix enumeration (introductory)

Prove that nested loops $0\le a\le 2$, $0\le b\le 3$, $0\le c\le 1$ enumerate every capped
triple exactly once, and give a single integer code from $0$ through $23$.

<details>
<summary>Hint 1</summary>

Use place values whose bases match the numbers of choices for the loop indices.

</details>

<details>
<summary>Hint 2</summary>

Put the three-valued digit in the units place, then use factors three and twelve for the next places. Recover the indices by quotient and remainder to prove uniqueness.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E089 — Solution

The loop ranges are precisely the Cartesian product, so each
triple occurs at its unique three loop indices. Encode it by
$\operatorname{code}=a+3b+12c$. Division by $12$, then by $3$, recovers uniquely
$c=\lfloor \operatorname{code}/12\rfloor$, $b=\lfloor (\operatorname{code}-12c)/3\rfloor$, and the remainder $a$. Thus the code is a
bijection with $0,\ldots,23$, independently certifying coverage and uniqueness.

</details>

### DM-SP2-E090 — Exact rational comparison (introductory)

Without decimals, decide whether $355/113 < 22/7$ and provide an integer
certificate.

<details>
<summary>Hint 1</summary>

Both denominators are positive, so multiply the comparison by their product.

</details>

<details>
<summary>Hint 2</summary>

Compare the two integer cross-products exactly and record their difference as a certificate, without rounding either rational.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E090 — Solution

Denominators are positive, so cross multiplication preserves the
inequality. Compute $355\cdot 7=2485$ and $22\cdot 113=2486$. Since $2485<2486$, the
proposed inequality is true. The integer products give the exact margin one;
rounded decimal displays could conceal it.

</details>

### DM-SP2-E091 — Labeled graph encoding (introductory)

How many loopless directed graphs are there on fixed vertex set $[4]$? Explain
an exact bit-mask representation.

<details>
<summary>Hint 1</summary>

A possible arc is an ordered pair of distinct vertices.

</details>

<details>
<summary>Hint 2</summary>

Choose a fixed ordering of all possible arcs and assign one presence bit to each; opposite arcs require different bits.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E091 — Solution

There are $4\cdot 3=12$ possible ordered arcs $(u,v)$ with $u\ne v$, each
independently absent or present, so there are $2^{12}=4096$ digraphs. Fix a
lexicographic list of the twelve ordered pairs and assign one bit to each. The
resulting 12-bit mask records exactly one arc set; opposite arcs use distinct
bits.

</details>

### DM-SP2-E092 — Checking an optimization certificate (introductory)

For weights $(4,7,2,6)$ on four items, a program claims subset $\{2,4\}$ has
weight $13$ and is feasible under the rule “no consecutive indices.” Audit the
claim.

<details>
<summary>Hint 1</summary>

Audit the numerical objective and the feasibility rule as two separate claims.

</details>

<details>
<summary>Hint 2</summary>

Check differences between selected indices, then distinguish the conclusion supplied by a feasible example from the additional evidence required for optimality.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E092 — Solution

The weight is $7+6=13$. Indices $2$ and $4$ differ by two, so
they are not consecutive; no other selected pair exists. Thus the subset and
value are feasible and correctly evaluated. This certifies the reported lower
bound $\operatorname{OPT}\ge 13$, but not global optimality; an upper bound or exhaustive search
is still required.

</details>

### DM-SP2-E093 — Safe branch-and-bound pruning (intermediate)

In a maximum-weight subset search with nonnegative remaining weights, a node
has current value $c$ and undecided weights $w_{i}$. Prove
$U=c+\sum w_{i}$ is a valid upper bound and that pruning when $U\le L$ is safe for an
incumbent value $L$.

<details>
<summary>Hint 1</summary>

Every completion selects some subset of the undecided items.

</details>

<details>
<summary>Hint 2</summary>

Nonnegativity lets the sum of all remaining weights bound any such subset sum. Compare that upper bound with an already feasible incumbent and note what happens in an equality case.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E093 — Solution

Any completion keeps the current choices and can add at most all
remaining weights, so its value is at most $U$; feasibility restrictions can
only reduce it. If $U\le L$, no completion can exceed the already feasible
incumbent of value $L$. Deleting that search subtree therefore cannot remove a
strictly better solution. The argument relies on nonnegative undecided weights;
with signed weights use the sum of positive ones.

</details>

### DM-SP2-E094 — Dynamic-programming invariant (intermediate)

For the subtraction game with legal moves $\{2,5\}$, define $W[n]=false$ for
$n=0,1$ and, for $n\ge 2$, let $W[n]=true$ iff some legal $m\le n$ has
$W[n-m]=false$. Prove $W[n]$ correctly classifies winning positions.

<details>
<summary>Hint 1</summary>

Use induction on heap size, since each legal move decreases it.

</details>

<details>
<summary>Hint 2</summary>

Separate the existence of a move to a losing position from the case where every move goes to a winning one; verify both no-move base positions.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E094 — Solution

Induct on $n$. From a position of size $n$, every move reaches a
smaller position, already correctly classified. If some move reaches a losing
position, the current player chooses it and wins. If none does, every legal
move gives the opponent a winning position, so the current player loses. The
bases $0,1$ have no legal move and are losing. This proves the recurrence and
every computed table entry.

</details>

### DM-SP2-E095 — Exchange-axiom checker (intermediate)

Give finite pseudocode that decides whether an explicitly listed hereditary
family $I\subseteq 2^{E}$ satisfies augmentation, and state a countercertificate on
failure.

<details>
<summary>Hint 1</summary>

Translate the universal quantifiers in augmentation into finite loops over the explicitly listed family.

</details>

<details>
<summary>Hint 2</summary>

For each smaller–larger pair, search all possible augmenting elements. On failure retain both sets and enough membership information to check every attempted extension.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E095 — Solution

For every ordered pair $(A,B)\in I\times I$ with $|A|<|B|$, scan
$e\in B\setminus A$; accept the pair if some $A\cup \{e\}$ belongs to a hash set containing $I$.
If none does, output $(A,B)$ and the list of failed extensions. If all pairs
pass, accept. Exhausting all relevant ordered pairs is exactly the universal
quantifier in augmentation. The failure output is checked by cardinalities,
membership of $A,B$, and lookup of each extension.

</details>

### DM-SP2-E096 — What a bounded graph census proves (intermediate)

A correct program checks every labeled graph on at most eight vertices and
finds property $P$. State the strongest justified universal claim and two
claims it does not justify.

<details>
<summary>Hint 1</summary>

State the exact universe and size range traversed by the program.

</details>

<details>
<summary>Hint 2</summary>

Identify which objects larger than the bound, or with different edge conventions, never entered the enumeration; those absences limit the quantifiers in the conclusion.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E096 — Solution

It proves: “Every labeled simple graph with at most eight
vertices has $P$,” provided encoding, coverage, and predicate implementation
are verified. It does not prove that every finite graph has $P$, because larger
orders were absent. It also does not prove a statement about multigraphs or
directed graphs, because those objects were outside the enumerated universe.
The report must name its model and bound.

</details>

### DM-SP2-E097 — Reproducible enumeration ledger (intermediate)

Specify a minimal ledger for an exhaustive computation of stable sets in a
given graph that another implementation can audit.

<details>
<summary>Hint 1</summary>

Another implementation needs both the mathematical graph and an unambiguous description of the search space.

</details>

<details>
<summary>Hint 2</summary>

Include how masks become subsets, how feasibility and value are evaluated, how coverage is counted, and which optimum is reported when ties occur.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E097 — Solution

Record the ordered vertex list and edge list; the subset encoding
and exact loop range $0,\ldots,2^{n}-1$; the feasibility predicate (“reject if any
listed edge has both endpoint bits set”); the objective arithmetic; tie policy;
counts of masks examined and feasible masks; optimum value; and every optimal
mask or a declared canonical one. Include program version and an input hash.
These fields distinguish mathematical specification, coverage, result, and
provenance.

</details>

### DM-SP2-E098 — Gray-code update invariant (advanced)

Successive $n$-bit Gray codes differ in one bit. Describe and prove an invariant
that maintains subset weight using one addition or subtraction per step.

<details>
<summary>Hint 1</summary>

Write the maintained value explicitly as the sum of weights of the current mask's selected elements.

</details>

<details>
<summary>Hint 2</summary>

Only one membership changes at a Gray-code step. Check the two flip directions separately, starting from the empty mask.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E098 — Solution

Store current mask $S$ and exact value
$v=\sum_{i\in S}w_{i}$. Initially both are empty and zero. If the next Gray mask flips
bit $j$ from zero to one, insert $j$ and set $v←v+w_{j}$; if it flips one to zero,
delete $j$ and set $v←v-w_{j}$. In either case the updated sum differs from the
old one by exactly the changed element's contribution. Induction over the Gray
sequence proves the invariant at every mask.

</details>

### DM-SP2-E099 — Smallest-counterexample search boundary (advanced)

A program searches objects by increasing size and outputs a counterexample at
size $n$. What must be verified before calling it a smallest counterexample?

<details>
<summary>Hint 1</summary>

Finding a counterexample establishes existence; minimality also depends on everything searched earlier.

</details>

<details>
<summary>Hint 2</summary>

Check coverage at every smaller size and correctness of the failure predicate. If using isomorphism representatives, justify both coverage of classes and invariance of the property.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E099 — Solution

Verify exhaustive, duplicate-tolerant coverage of every object in
the declared model at each size below $n$; exact evaluation of the claimed
property; absence of earlier failures; and validity of the output object and
its failing witness. If isomorphic representatives replace labeled objects,
also verify every isomorphism class is represented and the property is
isomorphism invariant. Only then does increasing-size order establish
minimality; finding one failure establishes merely existence.

</details>

### DM-SP2-E100 — Agreement is not proof (advanced)

Explain why two programs returning the same integer need not prove it correct,
and give an independence protocol that strengthens confidence.

<details>
<summary>Hint 1</summary>

List assumptions or implementation components two programs might share despite being separate executables.

</details>

<details>
<summary>Hint 2</summary>

Design the comparison so that specification, encodings and algorithms receive independent scrutiny; include exact hand cases and certificates rather than relying solely on equal totals.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E100 — Solution

The programs may share a mistaken specification, encoding,
library, test data, or copied routine; equal outputs can therefore reproduce the
same defect. Stronger evidence uses independently written implementations with
different encodings or algorithms, a separately stated mathematical
specification, exact small hand cases, coverage counters, and checkable
certificates. Even then agreement is validation evidence unless every logical
step and implementation correspondence is proved; it is not automatically a
theorem.

</details>

### DM-SP2-E101 — Canonical masks under relabeling (advanced)

For a labeled graph on $[n]$, define its canonical edge mask as the least mask
among all $n!$ vertex relabelings. Prove two graphs are isomorphic exactly when
their canonical masks agree.

<details>
<summary>Hint 1</summary>

Think of all relabelings as a permutation orbit of edge masks.

</details>

<details>
<summary>Hint 2</summary>

Isomorphic graphs have the same orbit. In the converse direction, compose the relabelings sending the two graphs to a common minimum mask.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E101 — Solution

Isomorphic graphs have the same orbit under all permutations, so
their sets of relabeled masks—and hence minima—agree. Conversely, if canonical
masks agree, some permutation sends each graph to that common labeled graph.
Composing one permutation with the inverse of the other gives an isomorphism
between the original graphs. Exhausting all permutations is expensive but
finite and mathematically exact.

</details>

### DM-SP2-E102 — Verifying a pruned search (advanced)

A search tree report records at each closed node either a complete feasible
object, an infeasibility witness, or an upper bound not exceeding the incumbent.
Prove that, if every child partition is exhaustive, the final incumbent is
optimal.

<details>
<summary>Hint 1</summary>

Associate each search node with the set of completions represented below it.

</details>

<details>
<summary>Hint 2</summary>

Induct upward from closed nodes. Treat evaluated, infeasible and bound-closed cases separately, and use exhaustive child partitions to pass the claim to their parent.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E102 — Solution

Induct upward through the tree. A complete-object leaf contributes
its evaluated value. An infeasible leaf contributes no candidate. A bound-
closed node contains no candidate better than the incumbent by validity of its
upper bound. At a branched node, exhaustive children cover every completion,
and the induction hypothesis accounts for each child. Thus every root
completion is either evaluated, impossible, or bounded by the incumbent. Since
the incumbent is feasible, it is globally optimal.

</details>

## Chapter 16: Cumulative Projects, Proof Repair, and Solution Strategies

### DM-SP2-E103 — Negating a quantified claim (introductory)

Negate precisely: “For every finite graph $G$, there exists a vertex $v$ such
that every neighbor of $v$ has degree at least two.”

<details>
<summary>Hint 1</summary>

Rewrite the neighbor condition as a quantified implication before negating.

</details>

<details>
<summary>Hint 2</summary>

Reverse each quantifier in order and negate the final degree inequality; check carefully what the existential neighbor requires at an isolated vertex.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E103 — Solution

The negation is: “There exists a finite graph $G$ such that for
every vertex $v$, there exists a neighbor of $v$ whose degree is less than
two.” Each quantifier reverses and the final predicate is negated. Notice that
the negation itself forces every vertex to have a neighbor; replacing “there
exists a neighbor” by “not every neighbor” without handling empty neighborhoods
would conceal this point.

</details>

### DM-SP2-E104 — Two inclusions, one equality (introductory)

Prove for arbitrary sets $A,B,C$ that
$$A\setminus (B\cup C)=(A\setminus B)\cap (A\setminus C)$$

<details>
<summary>Hint 1</summary>

Translate membership in each side into logical conditions on an arbitrary element.

</details>

<details>
<summary>Hint 2</summary>

Expand both set difference and union. Prove each inclusion using the same membership conditions, keeping the requirement of membership in $A$ explicit.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E104 — Solution

If $x\in A\setminus (B\cup C)$, then $x\in A$, $x\notin B$, and $x\notin C$; hence it lies in
both $A\setminus B$ and $A\setminus C$. Conversely, membership in their intersection gives
$x\in A$, $x\notin B$, and $x\notin C$, so $x\notin B\cup C$ and thus $x\in A\setminus (B\cup C)$. The two inclusions
prove equality for arbitrary elements.

</details>

### DM-SP2-E105 — Repairing an induction base (introductory)

A recurrence is $a_{n}=a_{n-1}+2n$ for $n\ge 1$. A proposed proof claims
$a_{n}=n(n+1)$ for all $n\ge 0$ but omits $a_{0}$. Determine the necessary initial
value and prove the repaired statement.

<details>
<summary>Hint 1</summary>

The claimed formula must also hold at $n=0$, which constrains the missing initial value.

</details>

<details>
<summary>Hint 2</summary>

After repairing the base, substitute the claimed formula for $a_{n-1}$ into the recurrence and simplify; explain why the recurrence alone leaves a constant undetermined.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E105 — Solution

Substituting $n=0$ requires $a_{0}=0$. With that initial value, the
base holds. If $a_{n-1}=(n-1)n$, then
$a_{n}=(n-1)n+2n=n(n+1)$. Induction proves the formula for all $n\ge 0$. Without the
initial value, the recurrence admits a one-parameter family and the conclusion
is underdetermined.

</details>

### DM-SP2-E106 — Counterexample before proof (introductory)

Disprove “Every relation that is reflexive and symmetric is transitive,” using
the smallest possible set size.

<details>
<summary>Hint 1</summary>

A failure of transitivity needs two composable related pairs and a missing endpoint pair.

</details>

<details>
<summary>Hint 2</summary>

Try a reflexive symmetric chain on three distinct elements. To prove minimality, classify which cross pairs a reflexive symmetric relation can have on a two-element set.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E106 — Solution

Sizes zero and one are insufficient because every relation that
is reflexive there is automatically transitive. Two elements are also
insufficient: a reflexive symmetric relation either contains neither cross pair,
producing equality, or both, producing the universal relation; both are
transitive. On $\{1,2,3\}$, take all
loops and pairs $1R2,2R1,2R3,3R2$, but omit $1R3,3R1$. It is reflexive and
symmetric, while $1R2$ and $2R3$ but not $1R3$, so transitivity fails. Thus
three is minimal.

</details>

### DM-SP2-E107 — Testing an invariant (introductory)

In a game, a move replaces an integer pair $(a,b)$ by $(a+b,b)$ or $(a,a+b)$.
Decide whether parity of $a+b$ is invariant, and whether $\gcd(a,b)$ is invariant.

<details>
<summary>Hint 1</summary>

Check each proposed invariant under both legal move formulas.

</details>

<details>
<summary>Hint 2</summary>

A small pair can disprove preservation of parity. For gcd, compare common divisors before and after adding one coordinate to the other.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E107 — Solution

Parity of the sum is not invariant: $(1,1)$ has even sum, while
the first move gives $(2,1)$ with odd sum. The gcd is invariant because
$\gcd(a+b,b)=\gcd(a,b)$ and $\gcd(a,a+b)=\gcd(a,b)$ by the Euclidean algorithm.
Both move types have been checked, so the gcd claim covers every legal move.

</details>

### DM-SP2-E108 — Auditing a path bijection (intermediate)

Give a bijection between words with three $E$ symbols and two $N$ symbols and
lattice paths from $(0,0)$ to $(3,2)$ using east and north unit steps. Verify
both inverse compositions.

<details>
<summary>Hint 1</summary>

Translate each symbol into its corresponding unit step in the same order.

</details>

<details>
<summary>Hint 2</summary>

Define the reverse translation on paths, then verify separately that translating and reading returns the original word and that reading and translating returns the original path.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E108 — Solution

Read a word left to right, taking an east step for $E$ and a north
step for $N$. Its three east and two north steps end at $(3,2)$. Conversely,
read a permitted path's successive steps and write their symbols. Translating a
word and reading the resulting path returns every original symbol; reading a
path and translating returns every original step. Thus the maps are inverse,
and there are $\binom{5}{2}=10$ objects on each side.

</details>

### DM-SP2-E109 — Solving and checking a recurrence (intermediate)

Solve $a_{n}=3a_{n-1}+2$ for $n\ge 1$ with $a_{0}=4$, and verify the formula by
substitution.

<details>
<summary>Hint 1</summary>

Seek a constant shift of $a_n$ that removes the additive term from the recurrence.

</details>

<details>
<summary>Hint 2</summary>

Solve the fixed-point equation for the shift, use the initial value in the resulting geometric sequence, then substitute back into both the base and recurrence.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E109 — Solution

Shift by the fixed point: put $b_{n}=a_{n}+1$. Then
$b_{n}=3b_{n-1}$ and $b_{0}=5$, so $b_{n}=5\cdot 3^{n}$ and
$a_{n}=5\cdot 3^{n}-1$. It has initial value $4$. Moreover,
$3a_{n-1}+2=3(5\cdot 3^{n-1}-1)+2=5\cdot 3^{n}-1=a_{n}$, verifying both the recurrence and
base.

</details>

### DM-SP2-E110 — Bound plus construction (intermediate)

Prove a simple graph on $n\ge 2$ vertices with no path of length two has at most
$\lfloor n/2\rfloor$ edges, and show the bound is attainable.

<details>
<summary>Hint 1</summary>

Two edges incident to the same vertex would supply the forbidden path.

</details>

<details>
<summary>Hint 2</summary>

Use the resulting restriction on shared endpoints to bound the edge count. For sharpness construct edges on disjoint vertex pairs, treating odd $n$ as well as even $n$.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E110 — Solution

If two edges shared a vertex, their other endpoints together
with the shared vertex would form a length-two path. Therefore all edges are
vertex-disjoint: they form a matching. Each consumes two vertices, so $2|E|\le n$
and $|E|\le \lfloor n/2\rfloor$. Pair vertices arbitrarily and add one edge per pair; this
matching has $\lfloor n/2\rfloor$ edges and no length-two path, proving equality is attainable.

</details>

### DM-SP2-E111 — First moment with a claim boundary (intermediate)

For integers $n\ge 1$ and $0\le k\le n$, choose a uniformly random $k$-subset of $[n]$.
For fixed $A\subseteq [n]$ of size $a$, compute the expected value of $|S\cap A|$ and state
one conclusion expectation alone does justify.

<details>
<summary>Hint 1</summary>

Write the intersection size as a sum of indicators for individual points of $A$.

</details>

<details>
<summary>Hint 2</summary>

Use symmetry to obtain each inclusion probability and then linearity. For the conclusion, compare a finite average with the minimum and maximum of the averaged values.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E111 — Solution

Let $I_{i}$ indicate $i\in S$ for $i\in A$. Symmetry gives
$E[I_{i}]=k/n$; linearity yields $E|S\cap A|=ak/n$ without independence. Therefore at
least one $k$-subset has intersection size at most $ak/n$, and at least one has
size at least $ak/n$ (with integer rounding as appropriate), since an average
cannot lie below every value or above every value. Expectation alone does not
say most subsets are near that value.

</details>

### DM-SP2-E112 — A quotient and an operation (intermediate)

Let finite strings be equivalent when one can be obtained from the other by a
cyclic rotation. Decide whether concatenation $[u][v]\mapsto [uv]$ is well defined.

<details>
<summary>Hint 1</summary>

Replace representatives by rotations before concatenating, and compare the resulting rotation classes.

</details>

<details>
<summary>Hint 2</summary>

Search among two short binary words; an initial candidate may still yield rotated outputs. An alternating output and a nonalternating output can help distinguish the classes.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E112 — Solution

It is not. We have $u=01\sim 10=u'$ and take $v=0$. Concatenation
gives $uv=010$ and $u'v=100$; these actually are rotations, so this attempted
witness fails. Take instead $u=01\sim 10$ and $v=01\sim 10$. Representatives $01,01$
give $0101$, whereas $01,10$ give $0110$. Their rotation classes are
$\{0101,1010\}$ and $\{0110,1100,1001,0011\}$, disjoint. Thus the formula depends
on representatives and is not well defined.

</details>

### DM-SP2-E113 — Möbius synthesis on divisors (advanced)

For every positive integer $n$, let $G(n)=2^{n}$ count binary strings in cyclic
positions $0,\ldots,n-1$, and let $F(n)$ count those with exact fundamental period
$n$. Derive $F(n)$ from $G$ on the divisor poset and compute $F(6)$.

<details>
<summary>Hint 1</summary>

Group length-$n$ strings by their unique least period, which divides $n$.

</details>

<details>
<summary>Hint 2</summary>

Identify a string of least period $d$ with the repetition of a length-$d$ fundamental block, then invert the divisor sum and evaluate the intervals for divisors of six.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E113 — Solution

Every length-$n$ string has a unique least period $d|n$, so
$G(n)=\sum_{d|n}F(d)$. Divisor-poset inversion gives
$F(n)=\sum_{d|n}\mu(d,n)G(d)$, where this interval Möbius value equals the
number-theoretic $\mu(n/d)$. Thus
$F(6)=2^{6}-2^{3}-2^{2}+2^{1}=64-8-4+2=54$, using the square-free divisors of six with
alternating signs. The uniqueness of least period licenses the initial sum.

</details>

### DM-SP2-E114 — Graphs and incidence synthesis (advanced)

Let blocks be the edge sets of the triangles in a finite simple graph $G$. Prove that these
blocks form a pair packing on the edge set of $G$ exactly when no two distinct
triangles share two edges. Then simplify the graph condition.

<details>
<summary>Hint 1</summary>

Distinguish points of the set system from vertices of the original graph: here a point is a graph edge.

</details>

<details>
<summary>Hint 2</summary>

Pair packing restricts intersections of triangle edge sets. Ask whether two shared graph edges can belong to distinct simple triangles, considering adjacent and disjoint edges.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E114 — Solution

A “point” of the set system is an edge of $G$; a pair of points is
a pair of graph edges. Pair packing means no such pair lies in two triangle
blocks, exactly the stated condition. But two distinct simple triangles cannot
share two edges: two adjacent shared edges determine their three vertices and
therefore the third edge, making the triangles identical. Two disjoint shared
edges cannot both lie in a triangle. Hence the triangle blocks of every simple
graph automatically form a pair packing on its edge set.

</details>

### DM-SP2-E115 — Matroid computation with a certificate (advanced)

For a finite independence oracle and integer weights, specify an output
certificate for maximum-weight basis that can be checked using the oracle and a
recorded greedy trace.

<details>
<summary>Hint 1</summary>

A greedy trace must show the weighted order, every acceptance decision and the final maximal independent set.

</details>

<details>
<summary>Hint 2</summary>

Oracle answers certify the execution, but the greedy theorem also requires a matroid. State how that structural premise is established before concluding optimality.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E115 — Solution

Record a nonincreasing weighted element order, every prefix's
accepted set, each oracle answer for $I\cup \{e\}$, and the final basis $B$. A verifier
checks ordering, reissues the oracle queries, confirms the trace, and verifies
maximality or rank. Mathematical optimality follows from the matroid greedy
exchange theorem once the oracle family is known to be a matroid. If that fact
is not trusted, also supply an independently checked representation or a finite
augmentation audit; the trace alone certifies execution, not the matroid axiom.

</details>

### DM-SP2-E116 — Repairing a false extremal claim (advanced)

The claim “Every graph with average degree at least two contains two
edge-disjoint cycles” is false. Give a counterexample and repair it to a true
conclusion that follows from the same hypothesis.

<details>
<summary>Hint 1</summary>

Test the multiplicity claim on a graph that itself consists of a single cycle.

</details>

<details>
<summary>Hint 2</summary>

For a repaired conclusion, compare the edge count of a forest with its number of vertices and use the average-degree formula.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E116 — Solution

A single cycle $C_{n}$ has average degree exactly two but contains
only one cycle, so cannot contain two edge-disjoint cycles. A true repair is:
every finite simple graph with average degree at least two contains a cycle.
Indeed, if it were a forest with $c\ge 1$ components, then
$|E|=|V|-c<|V|$, so its average degree $2|E|/|V|<2$, contradiction. The repair
weakens only the unsupported multiplicity conclusion.

</details>

### DM-SP2-E117 — A complete proof portfolio audit (advanced)

A report claims a finite extremal value based on a construction, an exhaustive
program, and a short proof. Give a checklist that distinguishes lower bound,
upper bound, computation boundary, and reproducibility, then explain when
equality is established.

<details>
<summary>Hint 1</summary>

For a maximization problem, identify which part of the report proves a lower bound and which proves an upper bound.

</details>

<details>
<summary>Hint 2</summary>

Check that both bounds concern precisely the same universe. Include coverage, pruning and reproducibility assumptions before deciding whether their numerical values establish equality.

</details>

<details>
<summary>Solution</summary>

#### DM-SP2-E117 — Solution

Check the construction belongs to the declared universe and has
the claimed value; this proves a lower bound for maximization. Check the proof
or exhaustive certificate covers every allowed object and bounds its value;
this proves an upper bound. Record object model, size limits, encodings,
arithmetic, pruning arguments, hashes, and independently checkable witnesses,
so the computational boundary and rerun protocol are explicit. Diagnose any
assumption used only by one side. Equality is established precisely when the
feasible construction's value equals a valid universal upper bound over the
same universe; agreement of outputs without those two inequalities is
insufficient.

</details>

## Completion audit

This file contains Exercises 1–117 exactly once. Chapters 9–12 receive fifteen
problems each, Chapters 13–15 receive fourteen each, and Chapter 16 receives
fifteen. Across the entire supplement there are thirty-nine introductory,
thirty-nine intermediate, and thirty-nine advanced exercises, each paired with
one substantive solution.
