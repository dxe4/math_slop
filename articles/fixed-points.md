
# Fixed Points: One Idea Across Mathematics

**Before reading.** Read [Functions, Domains, and Graphs](../books/algebra-and-functions/functions-domain-graphs.md) and [Limits and Rates of Change: A First Look](../books/precalculus/limits-rates-preview.md). These are preparation for the ideas used below.

A fixed point of a map \(f:X\to X\) is an element \(x^\ast\) with
\(f(x^\ast)=x^\ast\). The definition is tiny; its reach includes equations,
recursive algorithms, differential equations, games, geometry, semantics, and
existence theorems.

## Equations are fixed-point problems

Solving $g(x)=0$ is equivalent to finding a fixed point of many maps, for example $f(x)=x-g(x)$. The choice of rearrangement matters computationally.

For $x^{2}=2$, possible iterations include

$$x_{n+1}=2/x_{n}$$

and

$$x_{n+1}=(x_{n}+2/x_{n})/2$$

Both have $\sqrt{2}$ as a fixed point, but the first oscillates: applying it twice returns the starting value. The second is Newton’s method and converges rapidly from positive starts.

## Local stability

Suppose \(f\) is differentiable and \(f(x^\ast)=x^\ast\). For a small error
\(e_n=x_n-x^\ast\), linearization gives

\[
e_{n+1}\approx f'(x^\ast)e_n.
\]

- If \(|f'(x^\ast)|<1\), errors shrink locally: the fixed point is attracting.
- If \(|f'(x^\ast)|>1\), errors grow: it is repelling.
- If \(|f'(x^\ast)|=1\), the linear test is inconclusive.

This explains why algebraically equivalent iterations behave differently.

### Cobweb geometry

Plot $y=f(x)$ and $y=x$. Starting at $x_{n}$, move vertically to the graph, then horizontally to the diagonal. The resulting staircase shows convergence, oscillation, or escape. An intersection is a fixed point.

## The contraction mapping theorem

Let $(X,d)$ be a complete metric space. Suppose some $0\le q<1$ satisfies

$$d(f(x),f(y))\le q d(x,y)$$

for all $x,y$. Then:

1. \(f\) has exactly one fixed point \(x^\ast\);
2. from any starting point, \(x_{n+1}=f(x_n)\) converges to \(x^\ast\);
3. errors admit computable geometric bounds.

### Why existence follows

Successive gaps shrink:

$$d(x_{n+1},x_{n})\le q^{n} d(x_{1},x_{0})$$

For $m>n$, the triangle inequality bounds

$$d(x_{m},x_{n})\le [q^{n}/(1-q)]d(x_{1},x_{0})$$

Thus the iterates are Cauchy. Completeness supplies a limit \(x^\ast\).
Continuity of a contraction gives \(f(x^\ast)=x^\ast\).

### Why uniqueness follows

If \(x^\ast\) and \(y^\ast\) were fixed,

\[
d(x^\ast,y^\ast)
=d(f(x^\ast),f(y^\ast))
\le q\,d(x^\ast,y^\ast).
\]

Since $q<1$, the distance must be zero.

### An error bound

After computing two successive iterates,

\[
d(x_n,x^\ast)\le\frac{q}{1-q}d(x_n,x_{n-1}).
\]

This turns a theoretical theorem into a stopping rule.

## Differential equations

An initial-value problem

$$y'(t)=F(t,y(t)), y(0)=y₀$$

is equivalent to the integral equation

$$y(t)=y₀+\int_{0}^{t}F(s,y(s))ds$$

Define an operator $T$ on functions by the right side. A solution is a fixed point $T(y)=y$. On a sufficiently short interval, if $F$ is Lipschitz in $y$, $T$ is a contraction under an appropriate norm. The contraction theorem then proves existence, uniqueness, and convergence of Picard iteration.

This is a recurring research pattern: translate the object sought into a fixed point of an operator, then choose a space and metric making that operator contractive or compact.

## Dynamic equilibria

For a continuous-time system \(x'=F(x)\), an equilibrium satisfies
\(F(x^\ast)=0\). The time-\(t\) flow map leaves it fixed. Stability is
governed locally by derivatives or eigenvalues.

For logistic growth $x'=rx(1-x/K)$, equilibria are $0$ and $K$. For $r>0$, small positive perturbations away from 0 grow, so 0 is unstable. Perturbations around $K$ are pushed back, so $K$ is stable.

For discrete dynamics $x_{n+1}=f(x_{n})$, the derivative criterion applies directly. In higher dimensions, eigenvalues of the Jacobian replace $f'$: magnitudes below one suggest attraction for a discrete map.

## Brouwer: existence without an algorithm

Brouwer’s fixed-point theorem says every continuous map from a closed ball in
\(\mathbb R^n\) to itself has a fixed point. In one dimension, if
\(f:[0,1]\to[0,1]\), let \(g(x)=f(x)-x\). Then \(g(0)\ge0\) and
\(g(1)\le0\); continuity and the intermediate value theorem produce a zero.

In higher dimensions the theorem is deeper. Unlike contraction mapping, Brouwer gives neither uniqueness nor a simple convergent iteration. It is an existence theorem driven by topology.

The familiar “stir coffee and some particle ends where it started” slogan hides assumptions: continuity and mapping the region to itself.

## Nash equilibrium

In a finite game, a mixed strategy assigns probabilities to actions. Given everyone else’s strategies, each player has a set of best responses. A Nash equilibrium is a joint strategy that is a fixed point of the best-response correspondence: every player’s strategy is already a best response.

Nash’s existence theorem uses a fixed-point theorem on a compact convex strategy space. Existence does not imply uniqueness, fairness, stability under learning, or ease of computation.

## Fixed points in programs

Recursive definitions describe an object in terms of itself. Semantics can interpret recursion as a fixed point of an operator on possible meanings.

For factorial,

$$fact(n)=1 if n=0, otherwise n\cdot fact(n-1)$$

The desired function is fixed by the operator that transforms any candidate function $h$ into the right-hand rule using $h$. Order-theoretic fixed-point theorems select least solutions under conditions of monotonicity and completeness.

## Failure modes

- **Self-map missing:** $f$ may send points outside the proposed space.
- **Incomplete space:** a Cauchy iteration may converge to a missing boundary point.
- **No contraction:** iteration can still converge, but the theorem no longer guarantees it.
- **Local versus global:** $|f'(x*)|<1$ only controls nearby starts.
- **Existence versus computation:** topological theorems may assert a point without locating it efficiently.
- **Nonuniqueness:** different fixed points can encode genuinely different equilibria.

## A worked convergence certificate

**Worked example.**

Use $f(x)=\cos x$ on $[0,1]$. It maps the interval to itself. Since $|f'(x)|=|\sin x|\le \sin 1<1$, it is a contraction with $q=\sin 1$. Therefore exactly one fixed point exists and every start in $[0,1]$ converges under $x_{n+1}=\cos x_{n}$.

This point solves $\cos x=x$, approximately $0.739085\ldots$. The proof establishes more than a decimal approximation: existence, uniqueness, an algorithm, and an error guarantee.

For a numerical certificate with a sharper constant, restrict to
\([0.68,0.78]\). Cosine maps this interval into itself because its image lies
between \(\cos(0.78)\approx0.7109\) and
\(\cos(0.68)\approx0.7776\). On the interval,
\(|f'(x)|=|\sin x|\le\sin(0.78)<0.704\). Starting at \(x_0=0.75\), the first
five iterates are approximately

\[
0.731689,\ 0.744047,\ 0.735734,\ 0.741339,\ 0.737565.
\]

The last gap is below \(0.003774\), so the a posteriori contraction bound gives

\[
|x_5-x^\ast|
\le\frac{0.704}{1-0.704}(0.003774)
<0.009.
\]

The decimal iterates suggest the location; the invariant interval and
contraction estimate certify existence, uniqueness, convergence, and a stated
error bound.

## Exercises

<a id="deep-dive-fixed-points-ex-1"></a>

### Exercise 1

1. Show $f(x)=(x+3/x)/2$ has positive fixed point $\sqrt{3}$ and compute $f'(\sqrt{3})$.

<details>
<summary>Hint 1</summary>

A fixed point must satisfy the equation f(x) equals x on the positive domain.
</details>

<details>
<summary>Hint 2</summary>

Solve that equation and then differentiate the update map at its positive solution.
</details>

<details>
<summary>Solution</summary>

For $x>0$, the equation $(x+3/x)/2=x$ is equivalent to $x^2=3$, so the unique positive fixed point is $\sqrt3$. Differentiating gives $f\prime(x)=(1-3/x^2)/2$, hence $f\prime(\sqrt3)=0$. This explains rapid local error reduction; it alone is not a global convergence proof.

</details>

<a id="deep-dive-fixed-points-ex-2"></a>

### Exercise 2

2. Determine stability of fixed points of $f(x)=2x(1-x)$.

<details>
<summary>Hint 1</summary>

Find all solutions of two x times one minus x equals x before judging stability.
</details>

<details>
<summary>Hint 2</summary>

Evaluate the derivative at each fixed point and compare its absolute value with one.
</details>

<details>
<summary>Solution</summary>

The equation $2x(1-x)=x$ becomes $x(1-2x)=0$, so the fixed points are $0$ and $1/2$. Since $f\prime(x)=2-4x$, their derivative magnitudes are $2$ and $0$. The first repels nearby points and the second attracts nearby points; this is a local classification.

</details>

### Further exercises

3. Explain why $f(x)=x+1$ has no fixed point on the real line and identify which Brouwer hypothesis fails on $[0,1]$.
4. Prove a contraction cannot have two fixed points.
5. Rewrite $y'=y, y(0)=1$ as a fixed-point equation on functions and compute three Picard iterates starting from $y₀(t)=1$.

Answers:

(3) it does not map $[0,1]$ into itself; (4) use the uniqueness inequality above; (5) iterates $1$, $1+t$, $1+t+t^{2}/2$, then $1+t+t^{2}/2+t^{3}/6$, revealing the exponential series.


