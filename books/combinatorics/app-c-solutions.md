# Appendix C — Additional selected solutions {#sec-comb-solutions}

## A bijection behind Pascal's identity

Count $k$-subsets of $[n]$ according to whether they contain $n$. Those that
omit $n$ are $k$-subsets of $[n-1]$; deleting $n$ from those that contain it
gives a $(k-1)$-subset of $[n-1]$. The two cases are disjoint and exhaustive,
so $\binom nk=\binom{n-1}k+\binom{n-1}{k-1}$.

## Derangements

For each position $i$, let $A_i$ be the permutations fixing $i$.
Inclusion–exclusion gives

$$
D_n=\sum_{j=0}^{n}(-1)^j\binom nj(n-j)!
=n!\sum_{j=0}^{n}\frac{(-1)^j}{j!}.
$$

The first form chooses fixed positions and permutes the rest; the second
cancels factorials. The nearest integer to $n!/e$ is $D_n$ for $n\ge1$.

## Prüfer decoding

Repeatedly join the smallest label absent from the remaining Prüfer sequence to
its first entry, delete that entry, and finally join the two labels left. At
each step the chosen label must be a leaf. Encoding the resulting tree removes
the same leaves in the same order, so encoding and decoding are inverse maps.
There are $n^{n-2}$ sequences of length $n-2$, hence that many labeled trees.

## Hall's obstruction

If a matching saturates every vertex of the left part, then the neighbors of
any subset $S$ must contain the distinct partners of all vertices in $S$;
therefore $|N(S)|\ge|S|$. The hard direction builds an augmenting structure or
uses induction. Checking degrees alone is insufficient because several
left-side vertices may all have the same small neighbor set.

## The first-moment argument

Let $X$ count forbidden features in a random object. If $\mathbb E[X]<1$, then
some outcome has $X=0$: otherwise the nonnegative integer $X$ would be at least
one everywhere and its expectation would be at least one. This proves
existence but usually does not identify an object or make one efficiently.

## Greedy optimization in a matroid

Full scanning compares bases, so its maximum-weight-basis guarantee allows
negative real weights. The complete proof in [Section 14.5.1](20-matroids.md#sec-comb-greedy-prefix) shows
that the greedy set saturates every ordered prefix rank. A telescoping weight
identity then compares it with any basis: equal final cardinalities cancel
the possibly negative last coefficient. This supplies the invariant needed
to justify an exchange sketch.

For optimization over all independent sets, nonnegative weights suffice
for a universal full-scan guarantee; with signed weights, omit negative elements or choose
the best accepted prefix including the empty set. The constructive converse
in [Section 14.5.2](20-matroids.md#sec-comb-greedy-converse) explains why hereditary independence alone
cannot supply either universal guarantee.

## Catalan singularity transfer

The binary-tree equation $C=1+zC^2$ has two algebraic roots. Only
$(1-\sqrt{1-4z})/(2z)$ has a removable value one at the origin. Its first
singularity is the square-root branch point $z=1/4$. The local term
$-(1-4z)^{1/2}/(2z)$ produces the factor $4^n n^{-3/2}/\sqrt\pi$ after the
transfer theorem is applied with its analytic-continuation hypotheses.

## The Laplacian kernel

For any vector $x$, the energy is a sum of nonnegative edge terms
$(x_u-x_v)^2$. It is zero exactly when the endpoint values agree across every
edge, hence exactly when $x$ is constant on each connected component. Component
indicators form a basis of the kernel, so the multiplicity of eigenvalue zero
equals the component count.

## A hypergraph cover from a maximal matching

Take a maximal matching $M$ in an $r$-uniform hypergraph and let $C$ be the
union of its edges. If an edge avoided $C$, it could be added to $M$, contrary
to maximality. Thus $C$ is a transversal and $|C|=r|M|$. Taking $M$ maximum
also gives $\nu\le\tau\le r\nu$.

## Additive energy

Let $r_s$ count ordered pairs from $A^2$ summing to $s$. Then
$\sum_s r_s=|A|^2$ and $E(A)=\sum_s r_s^2$. Cauchy–Schwarz over the
$|A+A|$ nonzero coordinates gives
$|A|^4\le |A+A|E(A)$. High collision count therefore forces high energy or,
equivalently, small support forces the second moment upward.

## Standard-simplex lattice points

A point in $t\Delta_d$ is a nonnegative integer tuple with sum at most $t$.
Add one nonnegative slack coordinate to make the sum exactly $t$. Stars and
bars then gives $\binom{t+d}{d}$ solutions, which is visibly a degree-$d$
polynomial in $t$.

## Triangle traces

The diagonal entry $(A^3)_{vv}$ counts closed three-step walks starting at
$v$. In a simple graph each such walk traverses the three edges of a triangle.
Every triangle is counted at each of its three vertices and in two directions,
so its total contribution is six and the triangle count is
$\operatorname{tr}(A^3)/6$.

<!-- uni-34-matching-flow-answers:start -->
## Matching and flow: complete answers {#sec-comb-matching-flow-answers}

These answers accompany the
[original exercises](14-matching-flows.md#exercises) and the
[changed tasks](14-matching-flows.md#sec-comb-matching-flow-tasks).
A numerical optimum is supported by a matching, cut, cover, or proof;
it is not inferred from a search result alone.

### Original Exercise 1: a Hall obstruction beyond degree checks {#sec-comb-matching-original-1}

Let $L=\{a,b,c,d,e\}$ and $R=\{1,2,3,4,5\}$. Join each of
$a,b,c$ to both $1,2$, and each of $d,e$ to all of $3,4,5$.
The parts have equal size. Every vertex has degree at least two:
$a,b,c$ have degree two, $d,e$ degree three, $1,2$ degree three,
and $3,4,5$ degree two. But $S=\{a,b,c\}$ has
$N(S)=\{1,2\}$, so $|N(S)|=2<3=|S|$.
No matching can saturate $L$, because three distinct partners for $S$
would have to lie in a two-element set. Thus the global subset condition
detects an obstruction missed by those individual degree checks.

### Original Exercise 2: flip the path {#sec-comb-matching-original-2}

In the [worked matching](14-matching-flows.md#sec-comb-matching-worked),
$M=\{a1,c2\}$ leaves $b$ and $3$ exposed. The path
$b,1,a,2,c,3$ alternates outside/inside/outside/inside/outside $M$.
Remove $a1,c2$, insert $b1,a2,c3$, and obtain
$M'=\{b1,a2,c3\}$. Each left and right vertex appears exactly once,
so this is a matching. Its size is three rather than two, and no
matching can exceed the number of left vertices, namely three.

### Original Exercise 3: a matching-to-flow reduction {#sec-comb-matching-original-3}

For an explicit instance, take $L=\{a,b\}$, $R=\{1,2,3\}$, and
compatibility edges $a1,a2,b1$. Add $s,t$ and unit-capacity arcs
$sa,sb,a1,a2,b1,1t,2t,3t$. Sending one unit on $s,a,2,t$
and one on $s,b,1,t$ respects all capacities and conserves flow at
$a,b,1,2,3$; its value is two. It represents matching $\{a2,b1\}$.
The cut $\{s\}$ has capacity two, so the flow and matching are maximum.
In general the same construction uses one unit-capacity arc per
compatibility edge and per left/source or right/sink connection.

### Original Exercise 4: every cut bounds every flow {#sec-comb-matching-original-4}

Fix $S$ containing $s$ but not $t$. At each $v\in S$, subtract incoming
flow from outgoing flow and sum. An arc internal to $S$ contributes once
with each sign and cancels. Every $v\in S\setminus\{s\}$ has net outflow
zero by conservation, so the sum is $|f|$. The surviving terms give

$$
|f|=\sum_{a\in A^+(S)}f(a)-\sum_{a\in A^-(S)}f(a)
\le\sum_{a\in A^+(S)}c(a)=c(S).
$$

The inequality uses $f(a)\le c(a)$ on forward arcs and $f(a)\ge0$
on backward arcs. It remains valid when arcs enter the source, leave
the sink, occur in parallel, or have opposite original orientations.

### Original Exercise 5: extract pairs from integral unit flow {#sec-comb-matching-original-5}

In the layered network $s\to L\to R\to t$, every integral arc flow is
zero or one. Conservation at a left vertex says that the sum of flows
on its compatibility arcs equals its source-arc flow, which is at most
one. Conservation at a right vertex bounds its total compatibility
inflow by its sink-arc capacity one. Thus two compatibility arcs
carrying one cannot share an endpoint. They form a matching.
Summing conservation over all left vertices shows that the number of
these arcs equals the flow value. Conversely a matching produces that
many unit paths, proving equality of the two optima.

### Original Exercise 6: a maximal greedy matching need not be maximum {#sec-comb-matching-original-6}

With edges $a1,a2,b1$, greedy selection of $a1$ leaves no edge that
can be added: $a2$ meets $a$, and $b1$ meets $1$. Hence $\{a1\}$
is maximal. But $\{a2,b1\}$ is a matching of size two, which is maximum
since there are only two left vertices. The path $b,1,a,2$ augments
the greedy matching by cancelling $a1$ and adding $b1,a2$.
Maximality prevents a one-edge addition; it does not forbid a rerouting.

### Answer A: tight-set induction and augmentation agree {#sec-comb-matching-answer-a}

Take $S=\{a,b\}$. Its neighborhood is $\{1,2\}$, so it is nonempty,
proper, and tight. The induced graph on $S,\{1,2\}$ is complete
bipartite. Its empty subset has zero neighbors, each singleton has two,
and the pair has two, so all Hall inequalities hold. Match $a1,b2$.

Deleting $S$ and its neighbors leaves $c$ adjacent to $3$ and $d$
adjacent to $3,4$. The subsets of the remaining left part are empty,
$\{c\}$, $\{d\}$, and $\{c,d\}$, whose neighbor counts are respectively
$0,1,2,2$. All meet Hall's inequality, and $c3,d4$ is a matching.
Together these give $\{a1,b2,c3,d4\}$, saturating $L$.

Independently, the stated $M=\{a2,c3,d4\}$ exposes $b$ and $1$.
The path $b,2,a,1$ alternates with respect to $M$.
Remove $a2$ and add $b2,a1$; keep $c3,d4$.
This yields the same size-four matching. Four left vertices bound every
matching by four, proving maximal cardinality.
[Return to Task A](14-matching-flows.md#sec-comb-matching-task-a).

### Answer B: a five-edge optimum with an obstruction {#sec-comb-matching-answer-b}

Every left vertex has three neighbors. Vertices $1,2,3$ have degree four;
vertices $4,5,6$ have degree two. Thus all vertices have degree at least
two, and both parts have size six. Nevertheless

$$
S=\{a,b,c,d\},\qquad N(S)=\{1,2,3\}
$$

violates Hall's inequality. At most three of $a,b,c,d$ can be matched;
at most the other two left vertices $e,f$ can be matched in addition.
Hence every matching has size at most five.

The matching $\{a1,b2,c3,e4,f5\}$ has size five, attaining that bound.
A second certificate is the vertex cover $\{1,2,3,e,f\}$:
each edge from $a,b,c,d$ meets one of $1,2,3$, and each other edge
meets $e$ or $f$. Any matching uses distinct vertices of a vertex
cover on its distinct edges, so its size cannot exceed this cover's
size five. Both certificates agree.
[Return to Task B](14-matching-flows.md#sec-comb-matching-task-b).

### Answer C: cancelling an arc and certifying value seven {#sec-comb-matching-answer-c}

The initial two-unit path gives
$f(sp)=f(pq)=f(qr)=f(rt)=2$, with all other original flows zero.
The residual direction $q\to p$ contains the backward copy of $pq$
with capacity two, and separately the forward copy of $qp$ with
capacity one. Use the backward copy of $pq$ in the path
$s,q,p,r,t$. Its residual capacities are $3,2,3,3$, so its bottleneck
is two. After this augmentation,

$$
f(sp)=2,\quad f(sq)=2,\quad f(pq)=f(qp)=0,\quad
f(pr)=2,\quad f(qr)=2,\quad f(rt)=4,
$$

and $f(pt)=f(qt)=0$. Its value is four. Then augment along
$s,p,r,t$ by one, $s,p,t$ by one, and $s,q,t$ by one.
The final flows are

| Arc | $sp$ | $sq$ | $pq$ | $qp$ | $pr$ | $qr$ | $rt$ | $pt$ | $qt$ |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Flow | 4 | 3 | 0 | 0 | 3 | 2 | 5 | 1 | 1 |

Every entry lies between zero and its capacity. Conservation is
$4=3+1$ at $p$, $3=2+1$ at $q$, and $3+2=5$ at $r$.
The flow value is $4+3=7$. The cut $\{s\}$ has capacity $4+3=7$,
so no larger flow exists. Equivalently, the cut
$\{s,p,q,r\}$ has capacity $5+1+1=7$.

The cancelling residual copy changes $f(pq)$ downward; the original
forward arc $qp$ would change $f(qp)$ upward instead.
Its capacity one neither limits nor authorizes a two-unit change to
$f(pq)$. The chosen labeled update leaves $f(qp)=0$ throughout.
[Return to Task C](14-matching-flows.md#sec-comb-matching-task-c).

### Answer D: rational units, a common irrational factor, and arbitrary reals {#sec-comb-matching-answer-d}

Dividing the capacities by six divides the displayed feasible flow and
its matching cut by six. Their common value is $7/6$, so that is the
optimum. The factor $D=6$ clears the denominators. From zero, every
full-bottleneck augmentation is a positive multiple of $1/6$.
The source cut bounds the value by $7/6$, so there are at most seven
augmentations, regardless of which simple positive-residual path is
selected at each step.

Multiplying the original capacities by $\sqrt2$ multiplies the same
flow and cut certificates by $\sqrt2$, giving optimum $7\sqrt2$.
These capacities are not integers, so one should not cite an
integer-valued-flow invariant in the unscaled units. But all capacities
are integer multiples of the common positive unit $\sqrt2$.
Starting from zero, residual capacities and bottleneck augmentations
remain integer multiples of that unit. Every increase is at least
$\sqrt2$, while the value is at most $7\sqrt2$; again at most seven
augmentations are possible. Equivalently, divide by $\sqrt2$ first
and apply the integer theorem. Irrationality alone does not force
nontermination.

For arbitrary finite nonnegative real capacities with no common positive
unit making all capacities integer multiples, this discrete lower bound
on each increase is not supplied. The compactness argument still proves
that a maximum flow exists; augmentation at a maximum is impossible,
so the residual reachable set yields an equal-capacity minimum cut.
It does not prove that an arbitrary sequence of full-bottleneck
augmentations reaches that maximum in finitely many steps.
[Return to Task D](14-matching-flows.md#sec-comb-matching-task-d).

### Answer E: the odd cycle is outside the symmetric-difference cycle claim {#sec-comb-matching-answer-e}

The matchings $M=\{ab,de\}$ and $N=\{bc,ad,ef\}$ have no common edges.
Their symmetric difference is the single path

$$
c,\ b,\ a,\ d,\ e,\ f.
$$

Its edges occur in the order $N,M,N,M,N$. The endpoints $c,f$ are
exposed in $M$, so it is an $M$-augmenting path. Flipping removes
$ab,de$ and inserts $bc,ad,ef$, yielding $N$ of size three.
All six vertices are matched. Every matching has at most $6/2=3$
edges, so $N$ is maximum.

The original graph contains the triangle $a,b,c,a$, but its edge $ca$
belongs to neither matching. It is absent from $M\triangle N$.
Berge's alternating-cycle argument concerns components of
$M\triangle N$, not every cycle of $G$. A triangle also prevents a
bipartition: after putting $a$ on one side, both $b$ and $c$ would
have to lie on the other side despite the edge $bc$. Thus Hall's
bipartite theorem does not apply to this graph, while Berge's lemma
does.
[Return to Task E](14-matching-flows.md#sec-comb-matching-task-e).
<!-- uni-34-matching-flow-answers:end -->

## Complete primary-route solution index {#sec-comb-primary-solutions}

The sixteen primary chapters each provide ten supported exercises. Every link
below opens the question together with two staged hints and a complete solution.
The full solutions sit beside their own statements so that the hypotheses,
object conventions, and notation remain visible while you read the argument.
The additional selected solutions above are retained, including their original
anchors and specialist investigations; they supplement this complete index.

Use the first hint to choose the finite set, decomposition, or invariant. If
that is insufficient, the second hint identifies the key equation or
construction. Before opening a solution, write down what you tried and the
point at which it stopped. After reading, reconstruct the proof with the
reveal closed and check an edge case. A numerical agreement in one finite
instance does not replace the universal argument, and a solution that relies
on a hypothesis should explain where that hypothesis enters.

### 1. Counting, binomials, and multinomials

[1.1](01-counting-structure.md#comb-counting-structure-ex-1) · [1.2](01-counting-structure.md#comb-counting-structure-ex-2) · [1.3](01-counting-structure.md#comb-counting-structure-ex-3) · [1.4](01-counting-structure.md#comb-counting-structure-ex-4) · [1.5](01-counting-structure.md#comb-counting-structure-ex-5) · [1.6](01-counting-structure.md#comb-counting-structure-ex-6) · [1.7](01-counting-structure.md#comb-counting-structure-ex-7) · [1.8](01-counting-structure.md#comb-counting-structure-ex-8) · [1.9](01-counting-structure.md#comb-counting-structure-ex-9) · [1.10](01-counting-structure.md#comb-counting-structure-ex-10)

### 2. Pigeonhole and double counting

[2.1](03-pigeonhole-double-counting.md#comb-pigeonhole-double-counting-ex-1) · [2.2](03-pigeonhole-double-counting.md#comb-pigeonhole-double-counting-ex-2) · [2.3](03-pigeonhole-double-counting.md#comb-pigeonhole-double-counting-ex-3) · [2.4](03-pigeonhole-double-counting.md#comb-pigeonhole-double-counting-ex-4) · [2.5](03-pigeonhole-double-counting.md#comb-pigeonhole-double-counting-ex-5) · [2.6](03-pigeonhole-double-counting.md#comb-pigeonhole-double-counting-ex-6) · [2.7](03-pigeonhole-double-counting.md#comb-pigeonhole-double-counting-ex-7) · [2.8](03-pigeonhole-double-counting.md#comb-pigeonhole-double-counting-ex-8) · [2.9](03-pigeonhole-double-counting.md#comb-pigeonhole-double-counting-ex-9) · [2.10](03-pigeonhole-double-counting.md#comb-pigeonhole-double-counting-ex-10)

### 3. Inclusion–exclusion and Möbius inversion

[3.1](04-inclusion-exclusion-mobius.md#comb-inclusion-exclusion-mobius-ex-1) · [3.2](04-inclusion-exclusion-mobius.md#comb-inclusion-exclusion-mobius-ex-2) · [3.3](04-inclusion-exclusion-mobius.md#comb-inclusion-exclusion-mobius-ex-3) · [3.4](04-inclusion-exclusion-mobius.md#comb-inclusion-exclusion-mobius-ex-4) · [3.5](04-inclusion-exclusion-mobius.md#comb-inclusion-exclusion-mobius-ex-5) · [3.6](04-inclusion-exclusion-mobius.md#comb-inclusion-exclusion-mobius-ex-6) · [3.7](04-inclusion-exclusion-mobius.md#comb-inclusion-exclusion-mobius-ex-7) · [3.8](04-inclusion-exclusion-mobius.md#comb-inclusion-exclusion-mobius-ex-8) · [3.9](04-inclusion-exclusion-mobius.md#comb-inclusion-exclusion-mobius-ex-9) · [3.10](04-inclusion-exclusion-mobius.md#comb-inclusion-exclusion-mobius-ex-10)

### 4. Recurrences

[4.1](05-recurrences.md#comb-recurrences-ex-1) · [4.2](05-recurrences.md#comb-recurrences-ex-2) · [4.3](05-recurrences.md#comb-recurrences-ex-3) · [4.4](05-recurrences.md#comb-recurrences-ex-4) · [4.5](05-recurrences.md#comb-recurrences-ex-5) · [4.6](05-recurrences.md#comb-recurrences-ex-6) · [4.7](05-recurrences.md#comb-recurrences-ex-7) · [4.8](05-recurrences.md#comb-recurrences-ex-8) · [4.9](05-recurrences.md#comb-recurrences-ex-9) · [4.10](05-recurrences.md#comb-recurrences-ex-10)

### 5. Ordinary generating functions

[5.1](06-ordinary-generating-functions.md#comb-ordinary-generating-functions-ex-1) · [5.2](06-ordinary-generating-functions.md#comb-ordinary-generating-functions-ex-2) · [5.3](06-ordinary-generating-functions.md#comb-ordinary-generating-functions-ex-3) · [5.4](06-ordinary-generating-functions.md#comb-ordinary-generating-functions-ex-4) · [5.5](06-ordinary-generating-functions.md#comb-ordinary-generating-functions-ex-5) · [5.6](06-ordinary-generating-functions.md#comb-ordinary-generating-functions-ex-6) · [5.7](06-ordinary-generating-functions.md#comb-ordinary-generating-functions-ex-7) · [5.8](06-ordinary-generating-functions.md#comb-ordinary-generating-functions-ex-8) · [5.9](06-ordinary-generating-functions.md#comb-ordinary-generating-functions-ex-9) · [5.10](06-ordinary-generating-functions.md#comb-ordinary-generating-functions-ex-10)

### 6. Exponential generating functions

[6.1](07-exponential-generating-functions.md#comb-exponential-generating-functions-ex-1) · [6.2](07-exponential-generating-functions.md#comb-exponential-generating-functions-ex-2) · [6.3](07-exponential-generating-functions.md#comb-exponential-generating-functions-ex-3) · [6.4](07-exponential-generating-functions.md#comb-exponential-generating-functions-ex-4) · [6.5](07-exponential-generating-functions.md#comb-exponential-generating-functions-ex-5) · [6.6](07-exponential-generating-functions.md#comb-exponential-generating-functions-ex-6) · [6.7](07-exponential-generating-functions.md#comb-exponential-generating-functions-ex-7) · [6.8](07-exponential-generating-functions.md#comb-exponential-generating-functions-ex-8) · [6.9](07-exponential-generating-functions.md#comb-exponential-generating-functions-ex-9) · [6.10](07-exponential-generating-functions.md#comb-exponential-generating-functions-ex-10)

### 7. Asymptotic enumeration

[7.1](08-asymptotic-enumeration.md#comb-asymptotic-enumeration-ex-1) · [7.2](08-asymptotic-enumeration.md#comb-asymptotic-enumeration-ex-2) · [7.3](08-asymptotic-enumeration.md#comb-asymptotic-enumeration-ex-3) · [7.4](08-asymptotic-enumeration.md#comb-asymptotic-enumeration-ex-4) · [7.5](08-asymptotic-enumeration.md#comb-asymptotic-enumeration-ex-5) · [7.6](08-asymptotic-enumeration.md#comb-asymptotic-enumeration-ex-6) · [7.7](08-asymptotic-enumeration.md#comb-asymptotic-enumeration-ex-7) · [7.8](08-asymptotic-enumeration.md#comb-asymptotic-enumeration-ex-8) · [7.9](08-asymptotic-enumeration.md#comb-asymptotic-enumeration-ex-9) · [7.10](08-asymptotic-enumeration.md#comb-asymptotic-enumeration-ex-10)

### 8. Partitions and tableaux

[8.1](09-partitions-tableaux.md#comb-partitions-tableaux-ex-1) · [8.2](09-partitions-tableaux.md#comb-partitions-tableaux-ex-2) · [8.3](09-partitions-tableaux.md#comb-partitions-tableaux-ex-3) · [8.4](09-partitions-tableaux.md#comb-partitions-tableaux-ex-4) · [8.5](09-partitions-tableaux.md#comb-partitions-tableaux-ex-5) · [8.6](09-partitions-tableaux.md#comb-partitions-tableaux-ex-6) · [8.7](09-partitions-tableaux.md#comb-partitions-tableaux-ex-7) · [8.8](09-partitions-tableaux.md#comb-partitions-tableaux-ex-8) · [8.9](09-partitions-tableaux.md#comb-partitions-tableaux-ex-9) · [8.10](09-partitions-tableaux.md#comb-partitions-tableaux-ex-10)

### 9. Posets and lattices

[9.1](10-posets-lattices.md#comb-posets-lattices-ex-1) · [9.2](10-posets-lattices.md#comb-posets-lattices-ex-2) · [9.3](10-posets-lattices.md#comb-posets-lattices-ex-3) · [9.4](10-posets-lattices.md#comb-posets-lattices-ex-4) · [9.5](10-posets-lattices.md#comb-posets-lattices-ex-5) · [9.6](10-posets-lattices.md#comb-posets-lattices-ex-6) · [9.7](10-posets-lattices.md#comb-posets-lattices-ex-7) · [9.8](10-posets-lattices.md#comb-posets-lattices-ex-8) · [9.9](10-posets-lattices.md#comb-posets-lattices-ex-9) · [9.10](10-posets-lattices.md#comb-posets-lattices-ex-10)

### 10. Extremal combinatorics

[10.1](16-extremal-combinatorics.md#comb-extremal-combinatorics-ex-1) · [10.2](16-extremal-combinatorics.md#comb-extremal-combinatorics-ex-2) · [10.3](16-extremal-combinatorics.md#comb-extremal-combinatorics-ex-3) · [10.4](16-extremal-combinatorics.md#comb-extremal-combinatorics-ex-4) · [10.5](16-extremal-combinatorics.md#comb-extremal-combinatorics-ex-5) · [10.6](16-extremal-combinatorics.md#comb-extremal-combinatorics-ex-6) · [10.7](16-extremal-combinatorics.md#comb-extremal-combinatorics-ex-7) · [10.8](16-extremal-combinatorics.md#comb-extremal-combinatorics-ex-8) · [10.9](16-extremal-combinatorics.md#comb-extremal-combinatorics-ex-9) · [10.10](16-extremal-combinatorics.md#comb-extremal-combinatorics-ex-10)

### 11. Ramsey theory

[11.1](17-ramsey-theory.md#comb-ramsey-theory-ex-1) · [11.2](17-ramsey-theory.md#comb-ramsey-theory-ex-2) · [11.3](17-ramsey-theory.md#comb-ramsey-theory-ex-3) · [11.4](17-ramsey-theory.md#comb-ramsey-theory-ex-4) · [11.5](17-ramsey-theory.md#comb-ramsey-theory-ex-5) · [11.6](17-ramsey-theory.md#comb-ramsey-theory-ex-6) · [11.7](17-ramsey-theory.md#comb-ramsey-theory-ex-7) · [11.8](17-ramsey-theory.md#comb-ramsey-theory-ex-8) · [11.9](17-ramsey-theory.md#comb-ramsey-theory-ex-9) · [11.10](17-ramsey-theory.md#comb-ramsey-theory-ex-10)

### 12. The probabilistic method

[12.1](18-probabilistic-method.md#comb-probabilistic-method-ex-1) · [12.2](18-probabilistic-method.md#comb-probabilistic-method-ex-2) · [12.3](18-probabilistic-method.md#comb-probabilistic-method-ex-3) · [12.4](18-probabilistic-method.md#comb-probabilistic-method-ex-4) · [12.5](18-probabilistic-method.md#comb-probabilistic-method-ex-5) · [12.6](18-probabilistic-method.md#comb-probabilistic-method-ex-6) · [12.7](18-probabilistic-method.md#comb-probabilistic-method-ex-7) · [12.8](18-probabilistic-method.md#comb-probabilistic-method-ex-8) · [12.9](18-probabilistic-method.md#comb-probabilistic-method-ex-9) · [12.10](18-probabilistic-method.md#comb-probabilistic-method-ex-10)

### 13. Designs and codes

[13.1](19-designs-codes.md#comb-designs-codes-ex-1) · [13.2](19-designs-codes.md#comb-designs-codes-ex-2) · [13.3](19-designs-codes.md#comb-designs-codes-ex-3) · [13.4](19-designs-codes.md#comb-designs-codes-ex-4) · [13.5](19-designs-codes.md#comb-designs-codes-ex-5) · [13.6](19-designs-codes.md#comb-designs-codes-ex-6) · [13.7](19-designs-codes.md#comb-designs-codes-ex-7) · [13.8](19-designs-codes.md#comb-designs-codes-ex-8) · [13.9](19-designs-codes.md#comb-designs-codes-ex-9) · [13.10](19-designs-codes.md#comb-designs-codes-ex-10)

### 14. Matroids

[14.1](20-matroids.md#comb-matroids-ex-1) · [14.2](20-matroids.md#comb-matroids-ex-2) · [14.3](20-matroids.md#comb-matroids-ex-3) · [14.4](20-matroids.md#comb-matroids-ex-4) · [14.5](20-matroids.md#comb-matroids-ex-5) · [14.6](20-matroids.md#comb-matroids-ex-6) · [14.7](20-matroids.md#comb-matroids-ex-7) · [14.8](20-matroids.md#comb-matroids-ex-8) · [14.9](20-matroids.md#comb-matroids-ex-9) · [14.10](20-matroids.md#comb-matroids-ex-10)

### 15. Algebraic enumeration

[15.1](21-algebraic-enumerative.md#comb-algebraic-enumerative-ex-1) · [15.2](21-algebraic-enumerative.md#comb-algebraic-enumerative-ex-2) · [15.3](21-algebraic-enumerative.md#comb-algebraic-enumerative-ex-3) · [15.4](21-algebraic-enumerative.md#comb-algebraic-enumerative-ex-4) · [15.5](21-algebraic-enumerative.md#comb-algebraic-enumerative-ex-5) · [15.6](21-algebraic-enumerative.md#comb-algebraic-enumerative-ex-6) · [15.7](21-algebraic-enumerative.md#comb-algebraic-enumerative-ex-7) · [15.8](21-algebraic-enumerative.md#comb-algebraic-enumerative-ex-8) · [15.9](21-algebraic-enumerative.md#comb-algebraic-enumerative-ex-9) · [15.10](21-algebraic-enumerative.md#comb-algebraic-enumerative-ex-10)

### 16. Algorithms and random structures

[16.1](22-algorithms-random-structures.md#comb-algorithms-random-structures-ex-1) · [16.2](22-algorithms-random-structures.md#comb-algorithms-random-structures-ex-2) · [16.3](22-algorithms-random-structures.md#comb-algorithms-random-structures-ex-3) · [16.4](22-algorithms-random-structures.md#comb-algorithms-random-structures-ex-4) · [16.5](22-algorithms-random-structures.md#comb-algorithms-random-structures-ex-5) · [16.6](22-algorithms-random-structures.md#comb-algorithms-random-structures-ex-6) · [16.7](22-algorithms-random-structures.md#comb-algorithms-random-structures-ex-7) · [16.8](22-algorithms-random-structures.md#comb-algorithms-random-structures-ex-8) · [16.9](22-algorithms-random-structures.md#comb-algorithms-random-structures-ex-9) · [16.10](22-algorithms-random-structures.md#comb-algorithms-random-structures-ex-10)

### What the solutions establish

The counting solutions specify whether order, labels, repetition, or symmetry
are part of the record. Generating-function solutions distinguish formal
coefficient identities from analytic limits. Existence arguments say which
finite probability space, forbidden configuration, or exchange property is
being used. In asymptotic questions, a bound and an equivalence are different
conclusions. In algorithms, counting all encodings and sampling all objects
uniformly are different tasks. These distinctions are part of a complete
solution rather than optional commentary.

When your answer differs, compare the mathematical models before comparing
arithmetic. A committee with a designated chair is not just a committee; a
necklace up to rotations is not a bracelet up to reflections; and a
maximum-weight basis is not always a maximum-weight independent set when
weights may be negative. Several exercises deliberately expose those changes
of task. Their solutions explain the changed hypotheses and retain the
corresponding original investigations.

## Summary of the answer references {#sec-comb-solutions-summary}

All 160 primary-route questions have a local first hint, second hint, and full
solution. This appendix supplies a complete route into those explanations
while preserving the earlier selected proofs and advanced worked material.
A useful final check is to state the method, its hypotheses, and one reason a
nearby tempting argument would fail.
