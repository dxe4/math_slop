var e=`---
id: deep-dive-collatz-two-adic-coding
title: "2-adic Coding and the Positive-Integer Boundary"
license: CC BY-SA 4.0
---

# 2-adic Coding and the Positive-Integer Boundary
<a id="sec-two-adic-extension"></a>

Shared low bits define an exact geometry and parity conjugacy, while density and measure show why that extension does not settle positive-integer growth.

## Preparation and source scope

This L4 article assumes the map conventions and proof language of the
[Collatz elective](/textbooks/collatz_conjecture/_output/) and the relevant finite-model
foundations of the [Collatz Research Toolkit](/textbooks/collatz_research_toolkit/_output/).
The preparation is named in the native prerequisite metadata; the discussion
below isolates one method rather than rebuilding the entire research course.

This is an abridged adaptation of [the retained source chapter](/textbooks/collatz_conjecture/_output/chapters/24-two-adic-extension.html).
The original formulas, worked material, exercise solutions and section anchors
remain at that source. No new mathematics, execution, empirical result or
independent review is claimed by the adaptation. The classical conjecture remains
open in the dated record used by the source; this article presents no proof of it.

## Motivation: distance measured by shared low bits

Ordinary absolute value calls two numbers close when their difference is small.
For parity and residues modulo powers of two, a different geometry is natural:
two integers are close when their difference is divisible by a large power of
2. Completing the integers in this geometry produces the **2-adic integers**
$\\mathbb Z_2$.

The shortcut Collatz map extends continuously to this compact space, and parity
itineraries become coordinates. This yields a beautiful exact conjugacy with a
binary shift. It does not solve the positive-integer conjecture, because ordinary
positive integers form a very special measure-zero subset of the larger space.

## Constructing the 2-adic integers

For nonzero integer $m$, define

$$
|m|_2=2^{-\\nu_2(m)},
\\qquad |0|_2=0.
$$

Then $d_2(x,y)=|x-y|_2$ is a metric. The more trailing binary digits $x$ and $y$
share, the closer they are. It satisfies the strong triangle inequality

$$
|x+z|_2\\le\\max(|x|_2,|z|_2).
$$

One construction of $\\mathbb Z_2$ is by compatible residues

$$
x_k\\pmod{2^k},
\\qquad x_{k+1}\\equiv x_k\\pmod{2^k}.
$$

Each level chooses one more low binary digit. Equivalently, a 2-adic integer has
an infinite expansion to the left,

$$
x=b_0+b_1 2+b_2 2^2+\\cdots,
\\qquad b_i\\in\\{0,1\\}.
$$

The series converges 2-adically because $|2^k|_2=2^{-k}\\to0$.

**Worked example: $-1$.** The ordinary positive integers
$1,3,7,15,\\ldots,2^k-1$ grow without bound in the usual metric. Yet

$$
(2^k-1)-(-1)=2^k,
$$

so their 2-adic distance to $-1$ is $2^{-k}\\to0$. Therefore

$$
-1=1+2+4+8+\\cdots
$$

in $\\mathbb Z_2$. There is no contradiction: convergence depends on the metric.



A large ordinary difference may be a tiny 2-adic difference, as the exact error calculation demonstrates.

## Extending the shortcut map continuously

Define on ordinary integers

$$
T(x)=
\\begin{cases}
x/2,&x\\equiv0\\pmod2,\\\\
(3x+1)/2,&x\\equiv1\\pmod2.
\\end{cases}
$$

Even and odd 2-adic integers are the two clopen residue classes modulo 2. On the
even class, $x/2$ is a 2-adic integer; on the odd class, $3x+1$ is divisible by
2. Each affine branch is continuous, and the domains are disjoint open-and-closed
sets, so $T:\\mathbb Z_2\\to\\mathbb Z_2$ is continuous.

Continuity has a concrete finite form: to determine the first $k$ low bits of
$T(x)$, it is enough to know finitely many low bits of $x$. Because division by
2 discards one bit, $k+1$ input bits suffice for one step.

## Parity-vector conjugacy and the shift

Let $t_j(x)=T^{\\circ j}(x)\\bmod2$ be the parity itinerary and define

$$
Q(x)=\\sum_{j=0}^{\\infty}t_j(x)2^j\\in\\mathbb Z_2.
$$

The finite parity coding theorem from The toolkit chapter on finite residue automata says that, at every depth $k$,
starting residues modulo $2^k$ correspond bijectively to parity prefixes of
length $k$. Passing through all compatible levels makes $Q$ a homeomorphism of
$\\mathbb Z_2$.

Define the 2-adic left shift

$$
\\sigma(y)=\\frac{y-(y\\bmod2)}2,
$$

which discards the lowest binary digit. Removing the first parity symbol of an
orbit gives the exact **conjugacy equation**

$$
Q(T(x))=\\sigma(Q(x)). \\tag{24.1}
$$

Thus the 2-adic shortcut system and the one-sided binary shift are the same
topological dynamical system after the coordinate change $Q$. This classical
perspective is part of the established 3x+1 literature [source bibliography](/textbooks/collatz_conjecture/_output/chapters/d-bibliography.html).

## Periodic 2-adic points

Under the shift, a periodic binary block repeated forever is a periodic 2-adic
point. Conjugacy carries it to a periodic point of $T$. Consequently the 2-adic
map has many periodic points, including points that are not positive integers.

For instance, $x=-1$ is odd and

$$
T(-1)=\\frac{-3+1}{2}=-1.
$$

It is a 2-adic fixed point with parity itinerary \`111...\`. Its existence says
nothing adverse about the positive conjecture because $-1$ is outside the
positive domain.

A repeated block $w$ of length $p$ represents a rational 2-adic number whose
denominator divides $2^p-1$, an odd integer. Applying $Q^{-1}$ yields a periodic
2-adic Collatz point. Determining which such points are positive ordinary integers
is an additional arithmetic restriction.
## Positive integers inside the 2-adic space

Every residue class modulo $2^k$ contains a positive integer, so the positive
integers are dense in $\\mathbb Z_2$. Density means every 2-adic neighborhood
contains one; it does not mean positive integers occupy positive Haar measure.
They are countable, and each singleton has Haar measure zero, so their union has
measure zero.

This pair of facts is easy to misread:

- **topological density:** positive integers approximate every 2-adic point at
  any fixed finite precision;
- **measure zero:** a Haar-random 2-adic integer is almost surely not a positive
  integer.

If a property holds throughout a nonempty open set $U$, it cannot fail at
every point of a dense set $D$: by definition $U\\cap D\\ne\\varnothing$.
In particular, the complement of an open dense set cannot itself be dense.
This differs from an almost-everywhere statement, whose exceptional set can
be dense. The distinction can be proved and computed explicitly here.

## Density, category, and small open covers {#sec-collatz-density-category}

Let $D=\\{1,2,3,\\ldots\\}\\subset\\mathbb Z_2$. Each singleton is closed
and has empty interior, since every basic residue ball contains more than
one point. Thus $D$ is **meagre**, meaning a countable union of nowhere
dense sets. Its complement

$$
G=\\mathbb Z_2\\setminus D
=\\bigcap_{j\\ge1}\\bigl(\\mathbb Z_2\\setminus\\{j\\}\\bigr)
$$

is a countable intersection of open dense sets, called a dense
$G_\\delta$ set. Baire's theorem says such an intersection is dense in a
complete metric space such as $\\mathbb Z_2$ [source bibliography](/textbooks/collatz_conjecture/_output/chapters/d-bibliography.html). Here it also has Haar measure one, because $D$ has measure
zero. Yet $G$ contains no positive integer and has empty interior: every
nonempty open ball contains a member of $D$. In particular, $G$ is not
open. The property “belongs to $G$” holds on a dense $G_\\delta$ set of
full measure while failing at every positive integer. Replacing
“dense $G_\\delta$” by “open dense” in that statement would be false.

### Open dense sets can have small Haar measure

Normalized Haar measure assigns each cylinder $a+2^d\\mathbb Z_2$ the
mass $2^{-d}$: its $2^d$ translates partition $\\mathbb Z_2$ into equal
pieces [source bibliography](/textbooks/collatz_conjecture/_output/chapters/d-bibliography.html). For an integer $s\\ge1$, put

$$
O_s=\\bigcup_{j\\ge1}\\bigl(j+2^{j+s}\\mathbb Z_2\\bigr),\\qquad
K_s=\\mathbb Z_2\\setminus O_s.
$$

Every cylinder is open and contains its positive integer center $j$.
Consequently $O_s$ is open and contains $D$, so it is dense. Countable
subadditivity gives

$$
\\mu(O_s)\\le\\sum_{j\\ge1}2^{-(j+s)}=2^{-s},\\qquad
\\mu(K_s)\\ge1-2^{-s}.
$$

Because $O_s$ is dense, the closed set $K_s$ has empty interior and is
nowhere dense. It contains no positive integer. Taking larger $s$ gives
closed nowhere dense sets with measure as close to one as desired, still
missing all positive integers. Topological and measure-theoretic sizes
therefore answer different questions.

## Why 2-adic typicality does not settle ordinary growth

Equation (24.1) makes parity digits of a Haar-random 2-adic input behave like
independent fair bits. It is an exact measure-theoretic statement in that space.
Ordinary size, however, is not continuous in the 2-adic metric. Two numbers can
be 2-adically close while their usual magnitudes differ enormously, as the exact power-of-two difference demonstrates.

The classical conjecture asks whether positive integer orbits reach an ordinary
small value, specifically 1. Haar-typical shift behavior does not control that
archimedean magnitude on a measure-zero subset. The 2-adic theory explains parity
coding perfectly while leaving the crucial size question open.

> **Pitfall clinic**
>
> - The identity $1+2+4+\\cdots=-1$ is 2-adic, not an ordinary real series sum.
> - Dense does not mean large in measure.
> - Haar-almost every 2-adic point says nothing automatically about positive
>   integers.
> - Parity conjugacy controls symbols; it does not preserve ordinary magnitude.
> - Extra 2-adic cycles are not positive Collatz counterexamples.

## Exercises

### Exercise 1
<a id="deep-dive-collatz-two-adic-coding-ex-1"></a>

Prove that the sequence $2^k-1$ converges to negative one in the 2-adic metric while being unbounded in the ordinary metric.

<details>
<summary>Hint 1</summary>

Subtract the proposed 2-adic limit.

</details>
<details>
<summary>Hint 2</summary>

A difference divisible by a high power of two has small 2-adic absolute value.

</details>
<details>
<summary>Solution</summary>

The difference from negative one is $2^k$, whose 2-adic absolute value is $2^{-k}$ and tends to zero. Ordinarily, $2^k-1$ exceeds every fixed real bound for large enough $k$, so it is unbounded. Convergence is relative to a metric; no ordinary convergent-series claim follows from the 2-adic expansion. The argument uses an exact expression for the error and therefore covers every term, not merely a displayed prefix.

</details>

### Exercise 2
<a id="deep-dive-collatz-two-adic-coding-ex-2"></a>

For $s\\geq1$, prove that the union $O_s$ defined above is open, dense and has Haar measure at most $2^{-s}$. Explain why its complement contains no positive integer.

<details>
<summary>Hint 1</summary>

Every listed cylinder contains its centre.

</details>
<details>
<summary>Hint 2</summary>

Use the geometric sum and the density of positive integers.

</details>
<details>
<summary>Solution</summary>

Each cylinder is open and contains its positive centre $j$, so the union is open and contains every positive integer. Since positive integers meet every basic residue ball, the union is dense. Countable subadditivity bounds its measure by $\\sum_{j\\geq1}2^{-(j+s)}=2^{-s}$. Every positive integer lies in the union, so none lies in its complement. The complement is closed with empty interior because the union is dense. A large measure for that complement therefore gives no positive-integer member or orbit conclusion.

</details>

## Continue with the full argument

Return to the [research toolkit](/textbooks/collatz_research_toolkit/_output/) for the surrounding definitions and transfer questions, and to the retained source for longer derivations and additional exercises. The distinction between a theorem in a declared model and a universal statement about positive integers remains part of every conclusion.
`;export{e as default};