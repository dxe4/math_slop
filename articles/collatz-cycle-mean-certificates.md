
# Maximum Cycle Means with Exact Potential Certificates
<a id="sec-collatz-ergodic-optimization"></a>

A finite weighted graph admits short rational upper-bound witnesses whose telescoping inequalities certify its extremal cycle average.

## Preparation and source scope

This L4 article assumes the map conventions and proof language of the
[Collatz elective](#/books/collatz-conjecture/index) and the relevant finite-model
foundations of the [Collatz Research Toolkit](#/books/collatz-research-toolkit/index).
The preparation is named in the native prerequisite metadata; the discussion
below isolates one method rather than rebuilding the entire research course.

This is an abridged adaptation of [the retained source chapter](#/books/collatz-conjecture/36-ergodic-optimization).
The original formulas, worked material, exercise solutions and section anchors
remain at that source. No new mathematics, execution, empirical result or
independent review is claimed by the adaptation. The classical conjecture remains
open in the dated record used by the source; this article presents no proof of it.

## Weighted directed graphs

Let a finite directed graph have edge weights $w(e)$. Assume for this
asymptotic statement that the graph has a directed cycle; an acyclic finite
graph has no infinite walk. For a path
$e_0,\ldots,e_{n-1}$, its mean is

$$
\frac1n\sum_{i=0}^{n-1}w(e_i).
$$

The maximum asymptotic path mean equals the maximum mean over directed cycles.
To see the upper bound, decompose a long path into a simple prefix plus cycles.
The prefix has bounded length, so its contribution vanishes; no cycle exceeds
the maximum cycle mean. Repeating a maximising cycle gives the lower bound.

Thus

$$
\beta_G
=\max_{\text{cycles }C}
\frac{\sum_{e\in C}w(e)}{|C|}.
$$

This finite theorem requires no probability.

## Karp's algorithm {#sec-collatz-karp-formula}

Let a nonempty finite directed graph have $n$ vertices and real edge weights.
A walk may repeat vertices. Define $D_k(v)$ as the maximum weight of a walk
of exactly $k$ edges ending at $v$, **with any starting vertex allowed**.
Thus $D_0(v)=0$ for every vertex. If no such walk exists, write
$D_k(v)=-\infty$. Dynamic programming gives

$$
D_{k+1}(v)=\max_{u\to v}\{D_k(u)+w(u,v)\},
$$

where an empty maximum is $-\infty$. There is no extra source edge in a
walk's length, and $n$ counts only the original vertices. Connecting an
auxiliary source by zero edges is at most an initialization device; counting
those edges would change these definitions.

For a graph containing a directed cycle, the all-start form of Karp's
characterization is

$$
\beta_G=
\max_{\substack{v\\D_n(v)>-\infty}}
\ \min_{\substack{0\le k<n\\D_k(v)>-\infty}}
\frac{D_n(v)-D_k(v)}{n-k}. \tag{36.1}
$$

In particular, the minimum **includes $k=n-1$**. No subtraction of two infinite
values is performed. The inner index set is nonempty because $D_0(v)=0$.
If every $D_n(v)=-\infty$, the graph has no cycle: an $n$-edge walk would repeat
a vertex, while a cycle could be repeated to make such a walk.

Karp's original fixed-source theorem is stated on strongly connected graphs
[source bibliography](#/books/collatz-conjecture/d-bibliography). The all-start convention used here also works
on disconnected graphs; the following proof supplies that extension rather
than silently changing the initialization.

### Proof for the all-start convention

Assume there is a cycle, and let $\beta_G$ be its maximum cycle mean. Subtract
$\beta_G$ from every edge weight. Each $k$-edge walk weight decreases by
$k\beta_G$, so each quotient in (36.1) decreases by $\beta_G$. It suffices
to prove that the displayed maximum is zero for the normalized graph.

Every closed walk now has nonpositive weight: decompose it into simple
cycles, each with mean at most zero. Removing such cycles from any walk
preserves its ending vertex and can only increase its weight. The remaining
simple walk, permitted by the all-start convention, has fewer than $n$ edges. Therefore

$$
H(v):=\max_{0\le k<n}D_k(v)
$$

is the maximum weight of any walk ending at $v$, and $D_n(v)\le H(v)$.
Whenever $D_n(v)$ is finite, some finite $D_k(v)\ge D_n(v)$ with $k<n$.
Hence its inner minimum in (36.1) is at most zero.

Appending an edge to a walk attaining $H(u)$ gives

$$
H(v)\ge H(u)+w(u,v).
$$

Choose a cycle of mean zero, which exists by the definition of $\beta_G$.
Summing these inequalities around it forces equality on every edge of the
cycle. Take a walk of length $k<n$ attaining $H(v)$ at one of its vertices.
Extend it by $n-k$ edges along that cycle to a vertex $z$. Equality on the
cycle gives a walk of length $n$ and weight $H(z)$. Thus $D_n(z)=H(z)$,
and every finite quotient for $z$ is nonnegative. The outer maximum is at
least zero and at most zero, proving (36.1). Undoing normalization proves
the stated formula.

For a singleton with selfloops, $n=1$ and the sole index $k=0$ returns the
largest loop weight. A singleton without a loop has no cycle. These cases
must not be lost by using the empty range $k<n-1$.

The same proof produces an upper-bound witness after $\beta_G$ is computed:

$$
H_\beta(v)=
\max_{\substack{0\le k<n\\D_k(v)>-\infty}}
\bigl(D_k(v)-k\beta_G\bigr),
\qquad h(v)=-H_\beta(v).
$$

Then $w(u,v)+h(v)-h(u)\le\beta_G$ on every edge. A checker can verify
these edge inequalities without trusting the dynamic program.

With rational weights, every comparison can be exact. For logarithmic
weights, certified rational intervals give upper-bound graphs. A strictly
negative certified upper bound already establishes negativity. An exact
optimum or an attaining optimizer additionally needs a matching lower witness;
a strictly positive lower witness establishes positivity.

## Dual certificates and subactions

Suppose there is a function $h$ on graph vertices and a number $\beta$ such
that every edge $u\to v$ satisfies

$$
w(u,v)+h(v)-h(u)\le\beta.
$$

Summing along a path telescopes:

$$
\sum_{i=0}^{n-1}w(e_i)
\le n\beta+h(v_0)-h(v_n).
$$

On a cycle the $h$ terms cancel, so every cycle mean is at most $\beta$.
If one cycle has equality on every edge, it attains the bound. The pair
$(h,\beta)$ is a compact independently checkable certificate.

In dynamic programming, $h$ resembles a Bellman potential. In ergodic
optimisation it is called a **subaction**.

## Infinite-state obstacles

Finite truncation of an infinite graph can:

- delete outgoing edges and artificially lower the optimum;
- reflect edges at a boundary and create artificial cycles;
- merge states that need different future information;
- retain symbolic cycles with no integer realisation.

To transfer a bound, prove a **finite-memory theorem**: the chosen state records
enough information that every integer orbit projects to a graph path and every
edge weight bounds the exact observable. A one-way projection can still give
an upper bound; equality needs a lifting argument.

The noncompactness of positive integers also blocks a simple invariant-measure
maximiser. A divergent orbit might generate no probability limit even if its
time averages have subsequential behaviour.

## A certified workflow

1. Define the map and observable exactly.
2. Define graph states and prove the projection property.
3. Bound any difference between exact and edge observables.
4. Compute a maximum cycle mean with rational or interval arithmetic.
5. emit a cycle plus a potential certificate;
6. independently check every edge inequality;
7. test integer realisability through the affine cycle equation;
8. state whether the result is finite, asymptotic symbolic, or transferred to
   integer orbits.

> **Optimising a model does not find a Collatz counterexample**
>
> A high-growth parity cycle can fail integrality, positivity, or residue
> compatibility. Conversely, ruling out positive cycles in a finite automaton
> does not rule out unrepresented long excursions.

## Worked certificate on a three-state graph

Consider vertices $A,B,C$ and the six directed edges

| edge | weight |
|:---|---:|
| $A\to B$ | $2$ |
| $B\to A$ | $0$ |
| $B\to C$ | $1$ |
| $C\to B$ | $-1$ |
| $C\to A$ | $1$ |
| $A\to C$ | $0$ |

The two-edge cycles have means $1$, $0$, and $1/2$. The cycle

$$
A\to B\to C\to A
$$

has mean $(2+1+1)/3=4/3$. Listing these obvious cycles suggests that $4/3$ is
maximal, but a certificate removes the need to trust an incomplete list.

Set

$$
\beta=\frac43,
\qquad
h(A)=0,
\quad h(B)=-\frac23,
\quad h(C)=-\frac13.
$$

On the proposed maximizing cycle,

$$
2+h(B)-h(A)
=1+h(C)-h(B)
=1+h(A)-h(C)
=\frac43.
$$

For the other three edges, the reduced weights are respectively

$$
\frac23,
\qquad
-\frac43,
\qquad
-\frac13,
$$

all at most $4/3$. Summing the edge inequalities around any closed walk makes
the potential terms cancel. Every closed walk therefore has mean at most
$4/3$, and the displayed three-cycle attains it. The rational tuple

$$
(\beta,h(A),h(B),h(C))
=\left(\frac43,0,-\frac23,-\frac13\right)
$$

is an exact certificate that a tiny independent checker can verify.


## What the potential proves

The potential is an upper-bound witness on the declared finite graph. Its edge inequalities can be added along any walk; at most the initial and final potential values survive. On a closed walk both endpoint values coincide. A cycle attaining the bound supplies a matching lower witness, so upper and lower bounds meet exactly. This is why verifying the tuple is conceptually simpler than trusting every internal choice of an optimisation algorithm.

Finite graphs have bounded potentials simply because their vertex sets are finite. For long nonclosed walks, dividing the endpoint correction by the walk length makes it vanish, so the same certificate controls asymptotic averages of all graph paths. An infinite state space would require a separate bound on the endpoint terms. Likewise, a graph used as an abstraction of integer dynamics needs a proved projection carrying every relevant arithmetic transition to an edge with a sound weight. Neither requirement is supplied by merely drawing a residue graph.

A positive cycle mean in a coarse graph can reflect an impossible combination of arithmetic branches; a negative upper bound can be useful only when omitted or overflow edges have been handled soundly. The exact cycle equation and residue constraints remain separate obligations. The retained source develops those interpretation limits in greater detail.

## Exercises

### Exercise 1
<a id="deep-dive-collatz-cycle-mean-certificates-ex-1"></a>

A graph has edges $A\to B$ of weight three, $B\to A$ of weight negative one, and self-loops of weight zero at each vertex. Prove its maximum cycle mean is one using a potential.

<details>
<summary>Hint 1</summary>

Try a potential difference making the two nonloop reduced weights equal.

</details>
<details>
<summary>Hint 2</summary>

Set the potential at A to zero and at B to negative two.

</details>
<details>
<summary>Solution</summary>

Choose $\beta=1$, $h(A)=0$, $h(B)=-2$. The reduced weights on the two cross edges are $3-2=1$ and $-1+2=1$. Each loop has reduced weight zero, also at most one. Summing around any closed walk proves mean at most one. The two-edge cycle has total weight two and length two, attaining one. The matching upper and lower witnesses establish exact optimality without relying on an incomplete list of cycles.

</details>

### Exercise 2
<a id="deep-dive-collatz-cycle-mean-certificates-ex-2"></a>

In the all-start Karp formula, explain what happens for a single vertex with a loop of weight negative two and for a single vertex with no loop.

<details>
<summary>Hint 1</summary>

The inner minimum must include the index zero when the vertex count is one.

</details>
<details>
<summary>Hint 2</summary>

Do not subtract infinite values in the acyclic case.

</details>
<details>
<summary>Solution</summary>

With a loop, $D_0=0$ and $D_1=-2$, so the sole quotient is negative two, the correct maximum cycle mean. Omitting the last permitted index would leave an empty minimum and lose this case. Without a loop there is no one-edge walk, so $D_1=-\infty$ and no vertex enters the outer maximum. The graph is acyclic and has no cycle mean to report. These are graph statements; neither outcome asserts anything about a positive Collatz orbit without a sound arithmetic interpretation.

</details>

## Continue with the full argument

Return to the [research toolkit](#/books/collatz-research-toolkit/index) for the surrounding definitions and transfer questions, and to the retained source for longer derivations and additional exercises. The distinction between a theorem in a declared model and a universal statement about positive integers remains part of every conclusion.
