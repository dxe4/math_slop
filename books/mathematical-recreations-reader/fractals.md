
# Fractals

There is no single definition of **fractal** that covers every use of the word.
In this chapter it means a set produced by an iterative geometric rule and
having fine structure at arbitrarily small scales. Some examples are exactly
self-similar; others, such as the Mandelbrot boundary, are not. Fractals often
have a noninteger dimension, although noninteger dimension is neither required
nor sufficient as a universal definition.

<a id="section-10-worked-example-1-the-cantor-set"></a>
<a id="section-8-worked-example-1-the-cantor-set"></a>

## Worked example 1: the Cantor set

Begin with the unit interval $[0,1]$. Remove the open middle third $(1/3,2/3)$. From each remaining interval, remove the open middle third. Repeat forever. The **Cantor set** is what remains.

The Cantor set is uncountable, yet it has length zero: the total removed length is

$$\frac{1}{3} + \frac{2}{9} + \frac{4}{27} + \dots = \sum_{n=0}^{\infty} \frac{2^n}{3^{n+1}} = \frac{1/3}{1-2/3} = 1.$$

Its **Hausdorff dimension** is $\log 2/\log3\approx0.6309$. This value follows
from the self-similar dimension theorem under the separation condition, not
from the number of copies alone for arbitrary overlapping constructions. Below
we prove the corresponding box-counting dimension directly.

The uncountability claim also has an elementary proof. Map a binary sequence
$(b_1,b_2,\ldots)$ to $\sum_{j\ge1}2b_j3^{-j}$. Its ternary digits use
only 0 and 2, so it lies in every stage of the Cantor construction. Distinct
binary sequences first differing at position $j$ have images differing by at
least $2\cdot3^{-j}-\sum_{i>j}2\cdot3^{-i}=3^{-j}>0$. The map is injective.
There are uncountably many binary sequences: any proposed list misses the
sequence whose $j$th bit differs from the $j$th bit of its $j$th listed entry.
Thus zero total length does not imply that a set is finite or countable.

<a id="section-32-worked-example-2-the-koch-snowflake"></a>
<a id="section-30-worked-example-2-the-koch-snowflake"></a>

## Worked example 2: the Koch snowflake

Start with an equilateral triangle of side length one unit. On each edge, erect an outward-pointing equilateral triangle on the middle third, then remove the base. Repeat on every straight segment.

The perimeter grows without bound: after $n$ iterations, there are $3 \cdot 4^n$ edges, each of length $1/3^n$, so the perimeter is $3 \cdot (4/3)^n \to \infty$. Yet the area remains finite. The original area is $\sqrt{3}/4$. At step $n$, we add $3 \cdot 4^{n-1}$ triangles of side $1/3^n$, each with area $\sqrt{3}/4 \cdot (1/3^n)^2$. The total added area converges to a geometric series, and the limiting area is

$$\frac{2\sqrt{3}}{5} \approx 0.6928.$$

<a id="section-40-worked-example-3-the-sierpinski-triangle"></a>
<a id="section-38-worked-example-3-the-sierpinski-triangle"></a>

## Worked example 3: the Sierpinski triangle

Start with a solid equilateral triangle. Connect the midpoints of the sides and remove the central triangle. Repeat on each remaining triangle.

The Sierpinski triangle has area zero: at step $n$, the remaining area is $(3/4)^n$ times the original, which tends to $0$. Its Hausdorff dimension is $\log 3 / \log 2 \approx 1.585$. The set consists of three copies of itself, each scaled by $1/2$.

<a id="section-46-the-mandelbrot-set"></a>
<a id="section-44-the-mandelbrot-set"></a>

## The Mandelbrot set

The **Mandelbrot set** lives in the complex plane. For each complex number $c$, iterate $z_{n+1} = z_n^2 + c$ starting from $z_0 = 0$. If the sequence remains bounded, $c$ belongs to the Mandelbrot set.

A key fact for this orbit starting at zero is that if $|z_n|>2$ at any step,
the sequence escapes to infinity. To prove it, first suppose $|c|\le2$ and
$r=|z_n|>2$. The reverse triangle inequality gives
$|z_{n+1}|\ge r^2-2>r$. Once $r\ge r_0>2$, the ratio is at least
$r_0-2/r_0>1$, so the growth is unbounded. If $|c|>2$, then already
$|z_1|=|c|$, and for every later $r\ge|c|$ the ratio is at least
$r-|c|/r\ge|c|-1>1$. This proves escape and the containment of the
Mandelbrot set in $|c|\le2$. The escape criterion is a theorem for this
specified starting orbit; for arbitrary Julia initial points a safe general
escape radius must also account for $|c|$.

A finite exact computation, or a rigorous error bound proving $|z_n|>2$, certifies nonmembership.
A floating-point estimate alone need not be an escape certificate. Failure to cross
after a million steps does not certify boundedness for all future steps. Boundary
pictures should distinguish a finite iteration cutoff from exact membership. Miniature copies and filaments are mathematical
features studied with further complex-dynamics tools; their exact structure is
not proved by inspecting a finite image.

The **Julia set** for a fixed $c$ is the boundary between points whose orbits escape and those that remain bounded. Julia sets are connected when $c$ is in the Mandelbrot set, and disconnected (dust-like) otherwise.

<a id="section-70-the-dragon-curve"></a>
<a id="section-68-the-dragon-curve"></a>

## The dragon curve

The **dragon curve** comes from paperfolding. Fold a strip in half repeatedly,
always folding the right end over the left. Unfold so each crease is
$90^\circ$; the left/right turns follow the **regular paperfolding sequence**.

The sequence begins $1,1,-1,1,1,-1,-1,1,\ldots$, where 1 means left and
$-1$ means right. It is generated by
$S_{n+1}=S_n,1,-S_n^{\rm rev}$. The suitably rescaled limiting dragon has
positive area and may touch itself. Finite polygonal approximations and their
limit should not be described as filling the entire plane or as having no
self-contact. Those geometric limit properties require a separate argument;
the recursion alone specifies the turn words used in this chapter.

<a id="section-84-fractal-dimension"></a>
<a id="section-82-fractal-dimension"></a>

## Fractal dimension

The **box-counting dimension** of a set is defined as follows. Cover the set with boxes of side $\epsilon$ and let $N(\epsilon)$ be the minimum number needed. Then

$$\dim = \lim_{\epsilon \to 0} \frac{\log N(\epsilon)}{\log(1/\epsilon)}.$$

When the limit does not exist, the corresponding lower and upper limits define
lower and upper box dimensions. The covering boxes and their boundary convention
can change exact finite counts without changing these limiting exponents.

For the Cantor set at scale $\epsilon=3^{-n}$, its $2^n$ stage intervals
give an upper bound $N(\epsilon)\le2^n$. They are separated by gaps of at
least $3^{-n}$. An interval of that length meets at most two stage intervals,
so covering a chosen Cantor endpoint in each requires at least $2^{n-1}$
covering intervals. Hence
$2^{n-1}\le N(3^{-n})\le2^n$. Taking logarithms and dividing by
$n\log3$ makes the factor 2 disappear in the limit. If
$3^{-(n+1)}<\epsilon\le3^{-n}$, monotonicity places $N(\epsilon)$ between
the counts at these consecutive scales; the ratio of $n$ and $n+1$ tends to
one. Thus the full box-counting limit is $\log2/\log3$.

For the Sierpinski triangle, $3^n$ triangular cells of side $2^{-n}$ give
upper and lower covering counts within fixed constant factors of $3^n$:
each cell fits in a bounded number of boxes at that scale, and a box intersects
only a bounded number of cells in the triangular lattice. This yields
$\log3/\log2$. Equating the similarity exponent with Hausdorff dimension
uses the standard separated self-similar-set theorem. It is a stated further
theorem here, rather than a proof obtained just by writing $N=r^d$.

<a id="section-113-common-errors"></a>
<a id="section-111-common-errors"></a>

## Common errors

- **Confusing fractal dimension with topological dimension.** The Cantor set has topological dimension $0$ but fractal dimension $0.63$.
- **Assuming all fractals are self-similar.** Some fractals, like the boundary of the Mandelbrot set, are not strictly self-similar.
- **Computing dimension from a finite approximation.** The limit definition requires arbitrarily small scales.
- **Confusing the Mandelbrot and Julia sets.** The Mandelbrot set parameterises Julia sets; they are different objects.

<a id="section-120-worked-example-a-finite-stage-has-a-different-small-sca"></a>
<a id="section-118-worked-example-a-finite-stage-has-a-different-small-sca"></a>

## Worked example: a finite stage has a different small-scale dimension

Stop the Cantor construction after a fixed number of stages. What remains
is a finite union of closed intervals, each with positive length. Viewed at
scales much smaller than those intervals, covering one interval requires a
number of equal small boxes proportional to its length divided by the box
width. The finite-stage set therefore has box-counting dimension one, just
as a single interval does. Empty gaps do not change that small-scale exponent
when at least one whole interval remains.

The limiting Cantor set has dimension log two divided by log three instead.
There is no contradiction. In the finite-stage question, first fix the stage
and then let the observation scale shrink without bound. In the limiting-set
question, the construction has no final surviving intervals of positive
length. Interchanging those two limiting procedures changes the object being
measured.

A computer picture must stop at some stage and some pixel width. Over a
chosen range of intermediate scales it can illustrate the two-for-three
covering pattern, but sufficiently fine observation of its finite geometric
approximation eventually sees intervals, or sees only discrete pixels.
Neither behaviour determines the infinite set's dimension without the written
covering argument. When presenting a numerical dimension estimate, state the
construction stage and the range of box widths; those are part of the
experiment rather than invisible substitutes for an infinite limit.

<a id="section-146-exercises"></a>
<a id="section-144-exercises"></a>

## Exercises


### Exercise 1 {#fractals-ex-1}

**Explorer.** After three iterations of the Cantor construction, what is the total length of the remaining intervals?

<details>
<summary>Hint 1</summary>

Each stage doubles the interval count.

</details>

<details>
<summary>Hint 2</summary>

Each
   surviving interval has one third its former length.

</details>

<details>
<summary>Solution</summary>

After three iterations, the remaining intervals are $[0,1/27]$, $[2/27,1/9]$, $[2/9,7/27]$, $[8/27,1/3]$, $[2/3,19/27]$, $[20/27,7/9]$, $[8/9,25/27]$, $[26/27,1]$. There are $8$ intervals, each of length $1/27$, so the total length is $8/27$.

</details>

### Exercise 2 {#fractals-ex-2}

**Foundation.** Prove that the area of the Koch snowflake is finite by summing the geometric series of added triangle areas.

<details>
<summary>Hint 1</summary>

Triangle areas scale as side length squared.

</details>

<details>
<summary>Hint 2</summary>

The
   ratio between consecutive added total areas is $4/9$.

</details>

<details>
<summary>Solution</summary>

The original triangle has area $A_0 = \sqrt{3}/4$. At step $n$, we add $3 \cdot 4^{n-1}$ triangles of side $3^{-n}$, each with area $A_0 \cdot 9^{-n}$. The total area is

$$A = A_0 + \sum_{n=1}^{\infty} 3 \cdot 4^{n-1} \cdot A_0 \cdot 9^{-n} = A_0 \left(1 + \frac{3}{4} \sum_{n=1}^{\infty} \left(\frac{4}{9}\right)^n \right) = A_0 \left(1 + \frac{3}{4} \cdot \frac{4/9}{1-4/9}\right) = A_0 \cdot \frac{8}{5} = \frac{2\sqrt{3}}{5}.$$

</details>

### Exercise 3 {#fractals-ex-3}

**Secondary.** Compute the Hausdorff dimension of the Sierpinski carpet: start with a square, divide it into nine equal squares, and remove the centre one. Repeat on each remaining square.

<details>
<summary>Hint 1</summary>

Count the retained subsquares.

</details>

<details>
<summary>Hint 2</summary>

Use the separated
   self-similar dimension theorem, stating that dependency.

</details>

<details>
<summary>Solution</summary>

The Sierpinski carpet is the invariant compact set of eight similarities of ratio $1/3$. For the open unit square $O$, their images are the eight retained open subsquares: they lie in $O$ and are pairwise disjoint. Thus the open-set condition holds, even though the closed copies can meet on boundaries. The self-similar dimension theorem ([Hutchinson, §§5.2–5.3](https://maths-people.anu.edu.au/~john/Assets/Research%20Papers/fractals_self-similarity.pdf)) therefore identifies its Hausdorff dimension with the unique $d$ satisfying $8(1/3)^d=1$, namely $d=\log8/\log3\approx1.8928$. This invokes that theorem, not a proof from copy counts alone.

</details>

### Exercise 4 {#fractals-ex-4}

**Secondary.** For the Mandelbrot iteration $z_{n+1} = z_n^2 + c$ with $c = 0.25$, show that $z_n$ converges to $1/2$. What happens for $c = 0.26$?

<details>
<summary>Hint 1</summary>

At $c=1/4$, compare each iterate with $1/2$.

</details>

<details>
<summary>Hint 2</summary>

At
   $c=0.26$, write the increment as $(z_n-1/2)^2+0.01$.

</details>

<details>
<summary>Solution</summary>

For $c=0.25$, let $z_n = 1/2 - \epsilon_n$. Starting from
   $z_0=0$, we have $0\le z_n<1/2$, and
   $\epsilon_{n+1}=\epsilon_n-\epsilon_n^2$ stays nonnegative and decreases.
   Its limit $L$ satisfies $L=L-L^2$, hence $L=0$ and $z_n\to1/2$.
   For $c=0.26$,
   $z_{n+1}-z_n=(z_n-1/2)^2+0.01>0$, so the real orbit is strictly
   increasing. If it were bounded it would converge to a real fixed point, but
   $z=z^2+0.26$ has discriminant $1-1.04<0$. Hence it is unbounded and, being
   increasing, tends to $+\infty$.

</details>

### Exercise 5 {#fractals-ex-5}

**Undergraduate.** Prove that the regular paperfolding sequence is not
   eventually periodic. (Hint: prove that its term $a_j$ is $1$ when the odd
   part of $j$ is $1$ modulo $4$, and $-1$ when it is $3$ modulo $4$.)

<details>
<summary>Hint 1</summary>

Remove powers of 2 from the index.

</details>

<details>
<summary>Hint 2</summary>

Write an
   alleged period as $2^qu$ with $u$ odd and compare large selected indices.

</details>

<details>
<summary>Solution</summary>

Index from $1$ and let $S_0$ be empty, so $S_n$ has length $2^n-1$. We prove the odd-part formula by induction: $a_j=1$ for odd part $1\pmod4$, and $a_j=-1$ for odd part $3\pmod4$. It holds for $S_1=(1)$. In $S_{n+1}=S_n,1,-S_n^{\rm rev}$, the left block keeps its indices and the middle index $2^n$ has odd part one. A right-block index $j$ reflects to $h=2^{n+1}-j$ in the left block. Write $j=2^r u$ with $u$ odd; here $r<n$, so $h=2^r(2^{n+1-r}-u)$ has odd part $-u\pmod4$. The predicted signs at $j$ and $h$ are opposite, exactly matching the negated reversal. This proves the formula at every finite stage and hence at every index of the infinite sequence. Suppose the sequence were eventually periodic with
   period $p=2^q u$, where $u$ is odd. Choose $m\ge q+2$ so large that all
   indices below are beyond the alleged preperiod. If $u\equiv3\pmod4$, compare
   $j=2^m$ and $j+p$: their odd parts are respectively $1$ and $3$ modulo $4$,
   so their terms differ. If $u\equiv1\pmod4$, compare $j=3\cdot2^m$ and
   $j+p$: their odd parts are respectively $3$ and $1$ modulo $4$, so again
   their terms differ. Both cases contradict period $p$.

</details>

<a id="section-156-complete-solutions"></a>
<a id="section-154-complete-solutions"></a>
## Complete solutions

[Exercise 1](#fractals-ex-1) · [Exercise 2](#fractals-ex-2) · [Exercise 3](#fractals-ex-3) · [Exercise 4](#fractals-ex-4) · [Exercise 5](#fractals-ex-5)

<a id="section-186-hints-for-exercises-1-5"></a>
<a id="section-184-hints-for-exercises-1-5"></a>
### Hints for exercises 1–5


[Exercise 1](#fractals-ex-1) · [Exercise 2](#fractals-ex-2) · [Exercise 3](#fractals-ex-3) · [Exercise 4](#fractals-ex-4) · [Exercise 5](#fractals-ex-5)

<a id="section-199-exercise-6-a-cantor-address-fractals-ex-6"></a>
<a id="section-197-exercise-6-a-cantor-address-fractals-ex-6"></a>
### Exercise 6: a Cantor address {#fractals-ex-6}

Map the repeating binary sequence $101010\ldots$ to a Cantor-set point using
the ternary map above, and find its value as a rational number.

<details><summary>Hint 1</summary> Its ternary expansion is $0.202020\ldots$.
</details>
<details><summary>Hint 2</summary> Sum $2/3+2/27+2/243+\cdots$.
</details>
<details><summary>Solution</summary> This is a geometric series with first term $2/3$ and ratio
$1/9$, giving $(2/3)/(1-1/9)=3/4$. The ternary address contains no digit 1,
so it belongs to every surviving stage and hence to the Cantor set.
</details>
<a id="section-212-exercise-7-perimeter-versus-area-fractals-ex-7"></a>
<a id="section-210-exercise-7-perimeter-versus-area-fractals-ex-7"></a>
### Exercise 7: perimeter versus area {#fractals-ex-7}

For the unit-side Koch snowflake, find the perimeter after two stages and the
area added at the first stage. Why can perimeter diverge while area stays finite?

<details><summary>Hint 1</summary> Length scales by $4/3$ at each replacement.
</details>
<details><summary>Hint 2</summary> Added areas have a geometric ratio smaller than one.
</details>
<details><summary>Solution</summary> The perimeter is $3(4/3)^2=16/3$. The first stage adds three
triangles of side $1/3$, for area $3(\sqrt3/4)/9=\sqrt3/12$.
Perimeter grows by a factor greater than one, while successive added total
areas shrink by $4/9$. Different quantities obey different recurrences; there
is no contradiction in their divergent and convergent limits.
</details>
<a id="section-227-exercise-8-exact-bounded-orbits-fractals-ex-8"></a>
<a id="section-225-exercise-8-exact-bounded-orbits-fractals-ex-8"></a>
### Exercise 8: exact bounded orbits {#fractals-ex-8}

Show directly that $c=0$ and $c=-1$ belong to the Mandelbrot set.

<details><summary>Hint 1</summary> Start each recurrence at zero.
</details>
<details><summary>Hint 2</summary> Look for a fixed point or a short repeating cycle.
</details>
<details><summary>Solution</summary> For $c=0$, every iterate is zero. For $c=-1$, the orbit is
$0,-1,0,-1,\ldots$, since $0^2-1=-1$ and $(-1)^2-1=0$. Both are bounded
for every iteration by an exact recurrence proof, rather than by stopping a
numerical experiment after a fixed number of steps.
</details>
<a id="section-240-exercise-9-overlapping-copies-fractals-ex-9"></a>
<a id="section-238-exercise-9-overlapping-copies-fractals-ex-9"></a>
### Exercise 9: overlapping copies {#fractals-ex-9}

A set is written as the union of two identical copies of itself with scale
factor 1. Does the equation “two copies” determine a nontrivial dimension?

<details><summary>Hint 1</summary> Duplicate descriptions do not create new points.
</details>
<details><summary>Hint 2</summary> Identify why the separated-copy theorem cannot apply.
</details>
<details><summary>Solution</summary> Any set equals its union with itself, so the description puts
no constraint on its dimension. The copies coincide and the scale factor is
not a contraction. Neither the separation nor the contraction hypotheses of
the self-similar dimension theorem hold. Counting labelled copies without
checking their geometry is therefore insufficient.
</details>
<a id="section-255-exercise-10-a-finite-picture-s-dimension-fractals-ex-10"></a>
<a id="section-253-exercise-10-a-finite-picture-s-dimension-fractals-ex-10"></a>
### Exercise 10: a finite picture's dimension {#fractals-ex-10}

Compare a finite set of image pixels, represented by their centre points, with
the ideal limiting Cantor set. What is the box dimension of the finite point set?

<details><summary>Hint 1</summary> There is a positive minimum distance between distinct points.
</details>
<details><summary>Hint 2</summary> Below that scale, the number of boxes needed is bounded.
</details>
<details><summary>Solution</summary> A nonempty finite set with $m$ points requires at most $m$
boxes at every scale. Thus $0\le\log N(\epsilon)/\log(1/\epsilon)
\le\log m/\log(1/\epsilon)\to0$. Its box dimension is zero. An ideal
Cantor set has exponent $\log2/\log3$. A finite image can suggest scaling
over available scales but cannot itself possess the infinite set's limit.
</details>
<a id="section-270-project-explore-the-mandelbrot-boundary"></a>
<a id="section-268-project-explore-the-mandelbrot-boundary"></a>
## Project: explore the Mandelbrot boundary

Write a program producing a finite escape-time approximation on $[-2,1]\times[-1.5,1.5]$ in the complex plane, initially using a $600\times600$ grid of pixel centres and at most 500 iterations per point from $z_0=0$. Report the arithmetic precision. Colour detected escapes by their iteration count and label all remaining points “unresolved at this cutoff,” not members. Floating-point detections are numerical estimates unless supported by rigorous error bounds. Choose and record a smaller rectangular window, its grid resolution and cutoff for a zoom. Report approximate locations and scales of apparent miniature features without claiming the finite image computes the exact set or proves self-similarity.

<a id="section-274-summary"></a>
<a id="section-272-summary"></a>
## Summary

Iterative counts distinguish finite stages from limiting sets. Geometric series
explain zero area and finite snowflake area; addresses explain uncountability.
Box dimension is a covering limit, and identifying it with Hausdorff dimension
needs additional hypotheses. An escape certificate is conclusive, whereas a
finite nonescaping orbit display is not a universal boundedness proof.
