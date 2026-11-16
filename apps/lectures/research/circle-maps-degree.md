# Circle maps: degree, composition, and extension

Research and instructor note, 20 October 2026. This is an introductory bridge
from the first three local homotopy lectures to degree arguments in the
existing topology text. It does not introduce a new claim that the collection
lacks degree: [topology Chapter 26](../../textbooks/topology/chapters/26-degree-intersection-lefschetz.qmd)
already treats degree, intersection, and Lefschetz theory at a more advanced
level. Here the task is to classify maps of one circle using continuous
angles, then apply the classification to composition and disk extension.

The [first lecture](../homotopy.html) develops winding and jointly continuous
homotopies. [Loops, words, and the torus](../loops-and-words.html) compares loop
classifications in different spaces. [Lift, return, choose a root](../lift-return-roots.html)
uses finite covers and endpoint compatibility. This note keeps that last
compatibility condition but changes the question: when are two entire
circle maps homotopic, and when can a boundary map extend over a disk?

## Learning work and prerequisites

Assume learners can work with integer powers on the unit circle, distinguish
the two parameters of a homotopy, and use the path- and homotopy-lifting
theorems for the angle covering. Quotient spaces can be introduced through
identifying the endpoints of an interval. No homology calculation is needed
for the proofs here.

The independent mathematical work is to:

- Recover a circle map's degree from an unwrapped angle, including maps that
  do not fix the point 1.
- Check a proposed homotopy on the whole parameter square and at the
  identified endpoints.
- Distinguish composition of functions from concatenation of based loops.
- Separate degree, number of preimages, surjectivity, injectivity, and
  homotopy equivalence.
- Construct an extension when degree vanishes, and prove its continuity at
  the disk's center.

The teaching design below is an original proposal, rather than an observed
learning result. A 75–90 minute meeting is a planning estimate for selected
tasks. Assign the full proof of composition and the general extension
argument separately if learners need time to establish the lifting and
quotient dependencies.

<a id="verified-primary-references-and-their-precise-roles"></a>
## Primary references and their precise roles

The following two author-hosted PDFs were opened and checked during this
note's development. There are no quotations or reproduced textbook
exercises in this note.

- [Hatcher, *Algebraic Topology*, Chapter 1](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf),
  printed pp. 29–30: the angle covering, path lifting, and the circle's
  fundamental group; pp. 60–61, Proposition 1.30: lifting a whole homotopy
  after its initial map has been lifted. These are the substantive lifting
  inputs to the elementary arguments below.
- [Hatcher, *Algebraic Topology*, Chapter 2, Section 2.2](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf),
  printed p. 134: degree defined through homology and its basic properties;
  pp. 136–137, Proposition 2.30 and Example 2.32: signed local degrees and
  circle power maps. This is a later connection, rather than a prerequisite
  definition for this lecture. We derive the circle calculations from
  continuous angles instead of assuming the homological construction.

The particular folds, exact preimage calculations, six changed tasks, and
proof sequence below are local constructions around this standard theory.
An instructor can connect them to homological degree afterward without
asking beginners to accept the higher-dimensional results in advance.

## Conventions: a map, a parametrization, and a lift

Write `I=[0,1]`, `S¹={z in C: |z|=1}`, and

```text
e(u)=exp(2πiu),             u in R,
p_m(z)=z^m,                m in Z.
```

Negative powers are continuous because the circle does not contain zero.
For a continuous map `f:S¹→S¹`, lift the path `s↦f(e(s))` to a continuous
real function `F:I→R`:

```text
e(F(s))=f(e(s)).
```

The lift's initial value must lie above `f(1)`. It need not be 0. Since
`e(0)=e(1)`, the difference `F(1)−F(0)` is an integer. Define

```text
deg f = F(1)−F(0).
```

Two possible lifts differ by a continuous integer-valued function on `I`.
That function is constant, so their endpoint differences agree. This proves
that the definition is independent of the choice of lift.

The map `s↦f(e(s))` is a loop based at `f(1)`, but the domain of `f` is the
circle itself. An **ordinary homotopy** between circle maps is a jointly
continuous `H:S¹×I→S¹` with prescribed initial and final maps. Its value at
input 1 may move. A **based homotopy** for maps fixing 1 additionally requires
`H(1,t)=1`. The classification proved next concerns ordinary homotopy; a
based version is available when its extra conditions are satisfied.

## The elementary classification, with its continuity dependencies

Let `m=deg f`. Define a formula on the square by

```text
Q(s,t)=e((1−t)F(s)+t m s).
```

It is jointly continuous. The exponent at `s=1` minus the exponent at `s=0`
is `(1−t)m+t m=m`, so `Q(0,t)=Q(1,t)` for every `t`. It therefore defines a
homotopy from `f` to `p_m` on the quotient circle.

For completeness, the relevant descent is joint, not a separate observation
for every time slice. The continuous surjection

```text
q:I×I→S¹×I,     q(s,t)=(e(s),t)
```

is a quotient map: its domain is compact and its codomain is Hausdorff, so
it is closed. The map `Q` is constant on the fibers of `q`; the quotient
property gives a continuous `H` with `H(e(s),t)=Q(s,t)`. Endpoint equality
and joint continuity together justify the descent.

This formula fixes the input basepoint throughout when `f(1)=1` and we
choose the lift with `F(0)=0`. Under those assumptions both endpoint
exponents remain integers. For a general map it is only an ordinary
homotopy: `H(1,t)=e((1−t)F(0))` may move. Subtracting a noninteger constant
from `F` would change `f`, rather than merely choosing another lift.

To prove the converse, suppose `H` is an ordinary homotopy between `f` and
`g`. Pull it back to the square as `B(s,t)=H(e(s),t)`. First lift its initial
path, then use the covering homotopy theorem to obtain a **jointly
continuous** lift `A:I×I→R` of all of `B`. Consequently

```text
d(t)=A(1,t)−A(0,t)
```

is continuous and integer-valued, since `B(1,t)=B(0,t)`. It is constant on
`I`. Its values at the two ends are `deg f` and `deg g`, so these agree.
Independently selecting an angle lift at each `t` would not establish the
continuity used in this argument.

We have proved both directions:

```text
f and g are ordinarily homotopic  ⇔  deg f=deg g.
```

In particular, degree zero is equivalent to being null-homotopic. This
classification is a theorem about maps into `S¹`, not a rule that one winding
number classifies loops in every target space.

## Two operations with two different arithmetic rules

For composition of maps, `g∘f` means apply `f` first and then `g`. Suppose
`deg f=m`, `deg g=n`. Extend an angle lift `G:I→R` of `g(e(s))` to all real
inputs by

```text
G(u+k)=G(u)+k n,       0≤u≤1, k in Z.
```

At the shared endpoints the definitions agree because `G(1)=G(0)+n`, so
the extension is continuous. It satisfies `e(G(x))=g(e(x))` and
`G(x+k)=G(x)+k n` for every real `x` and integer `k`, positive or negative.
The function `G(F(s))` lifts `(g∘f)(e(s))`. Its endpoint difference is

```text
G(F(1))−G(F(0)) = G(F(0)+m)−G(F(0)) = m n.
```

Thus **composition multiplies degree**. No assumption that either map
fixes 1 was needed.

Concatenation instead travels around one based loop and then another. For
loops `α,β:I→S¹` based at 1, take lifts `a,b` starting at 0. A lift of the
concatenation `α*β` is `a(2s)` on the first half and `a(1)+b(2s−1)` on the
second. It is continuous at the join and has endpoint difference
`a(1)+b(1)`. Thus **concatenation adds winding numbers**. Here the shared
basepoint is part of the construction.

For example, `p₂∘p₋₃=p₋₆` has degree `−6`. Concatenating the based loops
`s↦e(2s)` and `s↦e(−3s)` has winding `−1`. The operations even use their
inputs differently: composition feeds one output to the next function;
concatenation allocates successive time intervals to two traversals.

## Degree ±1 and what a folded map can do

If `f` is a homotopy equivalence with a homotopy inverse `g`, the composition
law and homotopy invariance give `(deg f)(deg g)=1`. The degrees are integers,
so `deg f` must be `+1` or `−1`.

Conversely, a degree-one map is homotopic to the identity; the identity
itself is then a homotopy inverse. A degree-minus-one map is homotopic to
complex conjugation `c(z)=z̄=p₋₁(z)`, and `c∘f` and `f∘c` both have degree
one. By the classification they are homotopic to the identity. Hence, for
continuous circle maps,

```text
f is a homotopy equivalence  ⇔  deg f is +1 or −1.
```

This says nothing by itself about injectivity. Consider the continuous
piecewise linear lift with vertices

```text
(0,0), (1/4,1/2), (1/2,0), (1,1),

F(s)=2s           for 0≤s≤1/4,
     1−2s        for 1/4≤s≤1/2,
     2s−1        for 1/2≤s≤1.
```

Let `f(e(s))=e(F(s))`. The endpoint difference is 1, so `f` is a homotopy
equivalence. It is not a homeomorphism: target turn `1/4` has three distinct
preimages, at domain turns `1/8`, `3/8`, and `5/8`. The local traversal
signs there are `+1,−1,+1`, whose sum is 1. The three preimages give a
concrete failure of injectivity, while the signed total agrees with degree.
They do not mean that its degree is 3.

The displayed signs refer to this noncritical target value and the three
linear branches. At a turning value, preimages can merge and a branch's
nonzero slope test ceases to apply. A signed-count illustration for this
piecewise linear example is not a definition that automatically applies
to every continuous map or every target point.

The explicit homotopy

```text
H(e(s),t)=e((1−t)F(s)+t s)
```

deforms this fold to the identity and fixes 1. The straight segments are
taken between real lifted angles, not between two points in the target
plane. Straight interpolation in the plane need not remain on `S¹`.

## Degree zero can still cover the entire target

Let the triangular lift have vertices `(0,0),(1/2,1),(1,0)`:

```text
T(s)=2s          for 0≤s≤1/2,
     2−2s       for 1/2≤s≤1.

τ(e(s))=e(T(s)).
```

Its endpoint difference is zero. Its first branch nevertheless visits every
point of the target circle. Hence `τ` is surjective and null-homotopic. For
target turn `1/4`, the two preimages are `1/8` and `7/8` with signs `+1` and
`−1`, summing to zero. The based null-homotopy is
`H(e(s),t)=e((1−t)T(s))`.

Nonzero degree does imply surjectivity: if a map omits a target point,
choose a continuous angle on the circle with that point removed. The
resulting lift has equal endpoints, so degree is zero. The triangular map
shows why the converse fails. A drawing of the image alone cannot measure
degree; the identity and this triangular map have the same image.

## Extending the boundary map over the disk

An extension of `f:S¹→S¹` is a continuous `E:D²→S¹` whose restriction to
the unit boundary is `f`. The disk is the domain; the target is still the
circle. Mapping through the target's interior is not allowed.

If an extension exists, `H(z,t)=E((1−t)z)` is a jointly continuous homotopy
from `f` to the constant `E(0)`. Therefore `deg f=0`.

For the converse, choose a lift `F` of a degree-zero map, so
`F(1)=F(0)=a`. Define

```text
E(r e(s)) = e(a+r(F(s)−a)),       0<r≤1,
E(0)      = e(a).
```

Equal endpoints of `F` make this independent of which endpoint represents
the angular seam. It is continuous away from the center by quotient descent
on each closed annulus. At the center, boundedness of the continuous `F`
on `I` gives the uniform estimate

```text
|E(r e(s))−e(a)| ≤ 2πr max_{u in I}|F(u)−a| → 0.
```

It is consequently continuous on the disk and agrees with `f` at `r=1`.
We have proved

```text
f extends continuously D²→S¹  ⇔  deg f=0.
```

For the triangular map, `a=0` and the formula is particularly concrete:

```text
E(r e(s))=e(r T(s)),       E(0)=1.
```

Since `0≤T(s)≤1`, the center estimate reduces to
`|E(r e(s))−1|≤2πr`. The degree-one fold cannot extend to a circle-valued
map on the disk, even though it has folds and is not a homeomorphism.

## Six changed tasks, hints, and worked answers

Use a written prediction before revealing the corresponding drawing or
computed degree. These tasks change hypotheses or operations rather than
asking for the repetition of one power-map calculation.

### 1. Rotate the image and watch the basepoint

**Task.** Let `f(e(s))=e(2s+1/3)`. Find its degree and an ordinary homotopy
to `p₂`. Does that formula fix input 1? Can a different lift start at 0?

**Hint.** Compare `F(1)` and `F(0)` before trying to normalize either.

**Answer.** The degree is `(2+1/3)−1/3=2`. The homotopy
`H(e(s),t)=e(2s+(1−t)/3)` descends and reaches `p₂`. Its value at input 1
is `e((1−t)/3)`, which moves. No lift of the original map starts at 0,
because `f(1)=e(1/3)≠1`. Changing a lift by an integer preserves the map;
subtracting `1/3` does not.

### 2. Fold once, then remove the fold

**Task.** For the three-branch `F` above, find every preimage of target turn
`1/4`, attach signs, and compute degree from endpoints. Construct a based
homotopy to the identity. Explain why the map is not a homeomorphism.

**Hint.** Solve `F(s)=1/4` branch by branch; its range makes the other
integer translates irrelevant for this target.

**Answer.** The preimages are `1/8,3/8,5/8`, with signs `+1,−1,+1`.
The endpoint difference is `1−0=1`, agreeing with the signed sum.
`H(e(s),t)=e((1−t)F(s)+ts)` is jointly continuous and descends because its
endpoint exponent difference is always 1. Both endpoint values are 1, so
it is based. The three distinct preimages disprove injectivity and hence
disprove being a homeomorphism. They do not obstruct a homotopy equivalence.

### 3. Replace composition with concatenation

**Task.** Compare `p₂∘p₋₃` with concatenation of the based loops
`α(s)=e(2s)` and `β(s)=e(−3s)`. Give lifts and explain the different answers.

**Hint.** One construction multiplies angle inputs; the other offsets the
second lifted path by the first path's endpoint.

**Answer.** Composition is `p₋₆`, with lift `−6s` and degree `−6`.
A lift of `α*β` is `4s` for `0≤s≤1/2` and `2−3(2s−1)=5−6s` for
`1/2≤s≤1`. The pieces meet at 2 and the final value is `−1`; winding is
therefore `−1`. Using multiplication for the second operation would change
the mathematical construction.

### 4. Ask for an inverse only up to homotopy

**Task.** Which of `p₂`, conjugation, and the degree-one fold are homotopy
equivalences? Exhibit homotopy inverses where they exist, and give an
obstruction otherwise. Distinguish this from a pointwise inverse.

**Hint.** The product of the two integer degrees must be 1.

**Answer.** `p₂` is not a homotopy equivalence: no integer multiplied by 2
is 1. Conjugation is its own pointwise inverse and its own homotopy inverse.
The fold is a homotopy equivalence, with the identity map as a homotopy
inverse because both compositions equal the fold and the fold is homotopic
to the identity. It has no pointwise inverse, since it is not injective.

### 5. Keep the image, change the degree

**Task.** Compare the identity with the triangular map `τ`. Do they have
the same image, degree, and ordinary homotopy class? Give an explicit
contraction for `τ` and identify the target throughout it.

**Hint.** A full forward traversal followed by a full reverse traversal
still visits every target point.

**Answer.** Both images are `S¹`. Their degrees are 1 and 0 respectively,
so they are not homotopic. The formula `e((1−t)T(s))` contracts `τ` to 1
inside `S¹`. The intermediate images need not remain the full circle;
surjectivity is not required of the intermediate maps.

### 6. Fill the domain, preserve the target

**Task.** Decide whether the triangular map and the degree-one fold extend
continuously over `D²` with target `S¹`. When possible, give a formula and
check the seam, the boundary, and the center. Does the same obstruction
apply if the target is changed to `D²`?

**Hint.** A radial formula is not complete until its value at the center
is independent of angle and its convergence there is uniform.

**Answer.** The triangular map extends by `E(r e(s))=e(rT(s))`, `E(0)=1`.
The seam agrees because `T(0)=T(1)=0`; the outer boundary is `τ`; and the
bound `|E−1|≤2πr` proves center continuity. The fold cannot extend with
circle target, because an extension would force its degree 1 to be zero.
With disk target, every continuous circle-valued boundary map extends by
`E(rz)=r f(z)` and `E(0)=0`; the uniform bound `|E(rz)|=r` proves continuity
at the center. Changing the target changes the obstruction.

## Suggested teaching sequence and representation limits

Allow roughly 10 minutes to contrast a circle map with its parameter loop,
15 for a degree prediction and the fold, 15–20 for the classification proof,
10 for composition versus concatenation, 10 for homotopy equivalence, and
15–25 for selected changed tasks and disk extension. These allocations are
an unpiloted estimate, not a measured completion time or a promise that
every proof and all six tasks fit one meeting.

In a drawing of a lift, the horizontal coordinate is the domain turn `s`
and the vertical coordinate is a real output angle in turns. It is not the
image of the map inside the complex plane. Integer-separated heights give
the same target point. The endpoint difference records degree even when
the plotted line reverses direction.

In paired domain/target circles, repeated visits to a target location must
be distinguished by domain parameter or a separate lift trace. Coincident
target dots alone hide multiplicity and orientation. A finite trace or a
slider can illustrate the exact piecewise formulas; it cannot prove joint
continuity, rule out every other preimage of an arbitrary map, or establish
the impossibility of all disk extensions.

A disk illustration must identify which disk is the domain. For a
circle-valued extension its output remains on the boundary circle; it does
not fill the target's interior. At radius zero all domain angles denote one
point. A plot that assigns distinct center outputs for different angles
would depict an invalid extension.

If a computational interface is used, reserve the theorem's claims for the
proved setting. Exact piecewise linear angle computations, continuous
trigonometric drawings, and written proof attempts are different forms of
evidence. A stored prediction or a correct computed degree does not assess
the correctness of a learner's proof or establish learning gains.

<a id="review-and-implementation-status"></a>
## Model and proof scope

The six tasks in this instructor note form a further transfer set; the reader
has its own six numbered exercises. The [finite degree model](../degree-model.js)
illustrates those settings. Its calculations accompany the written proofs of
joint quotient descent, based and free homotopy, whole-homotopy lifting,
integer-seam extension for positive and negative degrees, composition and
concatenation, equivalence, signed preimages and continuity at a disk's centre.
Use the hypotheses of the corresponding proof when changing a setting.
