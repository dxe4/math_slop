
# Fractals by Iteration

**Before reading.** Read [Powers and Roots](../books/number-and-arithmetic/powers-roots.md) and [Coordinates: Lines, Distance and Circles](../books/euclidean-geometry-trigonometry/coordinates-lines-distance-circles.md). These are preparation for the ideas used below.

Fractals are often introduced as intricate pictures. The more durable idea is a relationship between **rule**, **iteration**, and **scale**. A tiny repeated instruction can create structure at many magnifications; computation lets us explore it, while definitions and proofs tell us which features survive beyond the pixels.

This gentle deep dive builds two families from scratch: a self-similar triangle and the Mandelbrot escape process. It assumes functions, powers, and coordinate geometry but no calculus or complex analysis.

## 1. Exact self-similarity: the triangle that keeps its holes


**Worked example.**
Begin with a filled equilateral triangle. Replace it by three half-size copies: bottom-left, bottom-right, and top. Repeat the replacement on every retained triangle.

At stage $n$:

- there are $3^{n}$ small triangles;
- each has side length $(1/2)^{n}$ times the original;
- each has area $(1/4)^{n}$ times the original;
- total retained area is $(3/4)^{n}$ times the original.

The first three claims follow by multiplying the same factor at each stage. For total area, multiply number by individual area:

$$3^{n} \cdot 4^{-n} = (3/4)^{n}$$

Since $(3/4)^{n} \to 0$, the limiting set has area zero even though it contains infinitely many points and spans the original triangle. “Large in extent” and “large in area” are different measurements.

### A dimension derived from scaling

The shape is made of $N=3$ copies, each scaled by $s=1/2$. A similarity dimension $d$ is chosen so that $N s^{d} = 1$. Thus

$3(1/2)^{d} = 1$, so $d = \log 3 / \log 2 \approx 1.585$.

This calculation is exact for the ideal self-similar construction under suitable non-overlap conditions. It is not a universal recipe for every rough dataset. A coastline observed over finitely many scales may yield an empirical scaling exponent, not an exact self-similar dimension.

## 2. Address code: a finite algorithm for an infinite object

Each retained triangle has an address: a word over $\{L,R,T\}$ naming the chosen subtriangle at every stage. An infinite address identifies a limiting point (with some boundary points having more than one address).

```js
function trianglePoint(address) {
  let x = 0, y = 0, scale = 1;
  for (const letter of address) {
    scale /= 2;
    if (letter === "R") x += scale;
    if (letter === "T") { x += scale / 2; y += scale * Math.sqrt(3) / 2; }
  }
  return [x, y];
}
```

After $n$ letters, the returned point is within distance at most $2^{-n}$ times a fixed constant of the infinite-address point. The unresolved tail is trapped inside one stage-$n$ triangle. This is a genuine error bound: more address symbols guarantee geometrically smaller uncertainty.

The algorithm uses $\Theta(n)$ time and constant extra space. Drawing every stage-$n$ triangle separately instead takes $\Theta(3^{n})$ objects, so address sampling can be vastly cheaper when only representative points are required.

## 3. Iterating a function instead of copying a shape

Given a function $f$, iteration means

$x₀$ given, $x₁=f(x₀)$, $x₂=f(x₁)$, and generally $x_{n+1}=f(x_{n})$.

The logistic-map lab does this on real numbers. For the Mandelbrot family, use pairs $(x,y)$ representing a point $z=x+iy$, and choose a parameter $c=a+ib$. Starting from $z₀=0$, repeat

$$z_{n+1}=z_{n}^{2}+c$$

Pair arithmetic avoids requiring prior complex-number knowledge. If $z=(x,y)$, then

$$z^{2}+c = (x^{2}-y^{2}+a, 2xy+b)$$

The Mandelbrot set consists of parameters $c$ for which this orbit remains bounded forever.

## 4. Escape-time computation

We cannot run forever. We can, however, prove a one-sided test: once $|z_{n}|>2$, the orbit escapes to infinity. For parameters usually plotted near the set, the inequality

$$|z^{2}+c| \ge |z|^{2}-|c|$$

shows that beyond an escape radius, magnitude keeps growing. The standard radius 2 is sufficient for the Mandelbrot iteration.

```js
function escapeTime(a, b, limit = 200) {
  let x = 0, y = 0;
  for (let n = 0; n < limit; n += 1) {
    const nextX = x * x - y * y + a;
    y = 2 * x * y + b;
    x = nextX;
    if (x * x + y * y > 4) return n + 1;
  }
  return null; // did not escape within the budget
}
```

Returning an integer proves that the sampled parameter is outside the set: the orbit exceeded radius 2. Returning `null` does **not** prove membership. It means only that no escape was observed within `limit` iterations. A point just outside the boundary can linger for a very long time.

For $P$ pixels and iteration cap $N$, worst-case time is $\Theta(PN)$ and storage can be $\Theta(1)$ beyond the output image. Zooming changes which parameters are sampled, not the per-pixel proof logic.

## 5. Precision is part of the experiment

Computers store approximations to most real coordinates. Near a complicated boundary, tiny rounding differences can send later iterates along visibly different paths. Increasing the iteration cap while keeping the same numeric precision can expose more rounding effects, not automatically reveal mathematical truth.

A responsible rendering records:

- the coordinate window;
- pixel resolution;
- iteration cap and escape radius;
- numeric representation;
- whether colour means escape time, smoothed escape time, or something else.

Colour bands are a visualization of an algorithmic statistic. They are not themselves parts of the mathematical set.

## 6. Two notions that should not be confused

**Self-similarity** means parts are exact or approximate scaled copies of a whole. The triangle construction has exact self-similarity.

**Sensitive dependence** means nearby initial conditions can separate rapidly under iteration. This is a dynamical property. A set can be self-similar without being the orbit of a chaotic system, and a chaotic system need not draw an exactly self-similar set.

Likewise, a jagged picture is not automatically a fractal. Pixel noise, aliasing, and poor interpolation can all make rough edges without a mathematical scaling law.

## 7. Experiments that can refute you

1. **Area conjecture.** Guess that the stage-$n$ triangle retains half its area. Calculate $(3/4)^{n}$; stage 2 retains $9/16$, already refuting the guess.
2. **Membership conjecture.** Treat every `null` from 50 iterations as membership. Re-run unresolved points at 5,000 iterations and search for a late escape.
3. **Scale conjecture.** Measure a dimension from only two pixel scales. Add smaller and larger scales; if the slope changes, one exponent does not describe the whole range.
4. **Symmetry conjecture.** The Mandelbrot set is symmetric across the real axis because conjugating every iterate conjugates the parameter. Test paired points $(a,b)$ and $(a,-b)$; a mismatch reveals a numerical or implementation bug.

## Worked exercises

### 1. Diameter warning

<a id="deep-dive-fractals-by-iteration-ex-1"></a>

**Exercise 1.**

Why does zero limiting area not imply zero diameter?


<details>
<summary>Hint 1</summary>

Area and diameter measure different features of a limiting set.
</details>
<details>
<summary>Hint 2</summary>

Track the original triangle’s farthest corners through the construction while the occupied area shrinks.
</details>
<details>
<summary>Solution</summary>

Every stage retains points at the original triangle’s far corners, so the maximum distance between retained points stays equal to the original side length. Area and diameter measure different aspects of size.

</details>

### 2. Another self-similar dimension

<a id="deep-dive-fractals-by-iteration-ex-2"></a>

**Exercise 2.**

A set consists of four non-overlapping copies scaled by $1/3$. Find its similarity dimension.


<details>
<summary>Hint 1</summary>

Self-similar dimension balances the number of copies against their scale factor.
</details>
<details>
<summary>Hint 2</summary>

Set four times one-third to the power d equal to one and solve using logarithms.
</details>
<details>
<summary>Solution</summary>

Solve $4(1/3)^{d}=1$, giving $d=\log 4/\log 3\approx1.262$.

</details>

### 3. A definite escape

For real $c=2$, compute the first three Mandelbrot iterates from 0.

**Answer.** $z₁=2$, $z₂=6$, $z₃=38$. At $z₂$, magnitude exceeds 2, so $c=2$ is outside the set. Later values confirm rather than create the conclusion.

### 4. Conjugate symmetry

Prove that parameters $a+ib$ and $a-ib$ have equal escape times in exact arithmetic.

**Answer.** If $w_{n}$ is the orbit for $c$, induction gives $conjugate(w_{n})$ as the orbit for $conjugate(c)$, because conjugation commutes with addition and multiplication. Conjugates have equal magnitude, so they cross the escape radius on the same iteration.

### 5. Observation versus proof

A point has not escaped after one million iterations. What may you conclude?

**Answer.** Only that this particular finite-precision computation observed no escape within its budget. It is strong numerical evidence in some contexts but is not, by itself, a proof of boundedness forever.

## Connections

- [Cellular Automata Rule Forge](../apps/atlas/index.html#/labs?lab=visual-lab-cellular-automata) produces exact discrete self-similarity under Rule 90.
- Functions and recurrence relations formalize repeated rules.
- Dynamical systems studies orbits, fixed points, periodic cycles, and stability.
- Complex analysis explains far more of quadratic iteration and its boundary.
- Computer graphics turns mathematical classification into pixels while tracking sampling and precision.

The central discipline is simple: say what is iterated, say what finite computation certifies, and never let a beautiful image claim more than the mathematics supports.
