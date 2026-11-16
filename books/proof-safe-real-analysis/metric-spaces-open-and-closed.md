
# Metric Spaces, Open Sets, and Closed Sets

Distance lets analysis travel. Once convergence and continuity are written using a metric rather than subtraction, the same proofs can govern vectors, functions, sequences, probability distributions, and geometric shapes. But generalization removes familiar shortcuts. Closed and bounded no longer guarantees compactness, straight intervals disappear, and two different metrics may agree about convergence while assigning very different numerical distances.

This chapter builds a working language for that wider setting. Its main discipline is to separate:

- the numerical values of a metric;
- the open sets and convergent sequences that the metric generates;
- completeness and compactness, which are additional global properties.

The prerequisites are sequence limits, inequalities, and the completeness discussion in [Ordered Fields and the Architecture of the Real Numbers](ordered-fields-and-number-systems.md). The next chapter on compactness uses every distinction made here.

## 1. A metric is a contract for distinguishability

Let \(X\) be a set. A **metric** on \(X\) is a function

\[d:X\times X\to [0,\infty)\]

such that for every \(x,y,z\in X\):

1. \(d(x,y)=0\) exactly when \(x=y\);
2. \(d(x,y)=d(y,x)\);
3. \(d(x,z)\le d(x,y)+d(y,z)\).

The third condition is the **triangle inequality**. It says an indirect trip cannot be shorter than the direct distance in a way that violates the metric’s own scale.

A set with a chosen metric is a **metric space**, written \((X,d)\). The choice matters: the same underlying set can carry many metrics.

### Standard examples

On \(R^n\), the Euclidean metric is

\(d_2(x,y)=[\sum_{j=1}^n |x_j-y_j|^2]^{1/2}\).

Two other useful metrics are

\[d_1(x,y)=\sum|x_j-y_j|\]

and

\(d_\infty(x,y)=\max_j|x_j-y_j|\).

Their balls have different shapes—diamonds, spheres, and boxes—but in finite dimensions they generate the same open sets and the same convergent sequences.

On any set \(X\), the **discrete metric** is

\(d(x,y)=0 \text{ if } x=y, \text{ and } d(x,y)=1 \text{ otherwise}\).

Every singleton is an open ball of radius less than \(1\), so every subset is open. Every subset is also closed because its complement is open.

On the space \(C([0,1])\) of continuous real functions, the uniform metric is

\(d_\infty(f,g)=\max_{x\in [0,1]}|f(x)-g(x)|\).

The maximum exists by continuity and compactness of \([0,1]\). This metric measures worst-case error. The integral metric

\[d_1(f,g)=\int _0^1|f(x)-g(x)|dx\]

measures average absolute error. These metrics answer different questions and generate different convergence notions on many function spaces.

### A nonexample

On \(R\), the formula \(d(x,y)=|x-y|^2\) fails the triangle inequality. Indeed,

\(d(0,2)=4\),

while \(d(0,1)+d(1,2)=1+1=2\).

Nonnegativity, symmetry, and zero separation are not enough.

## 2. The reverse triangle inequality

The triangle inequality has a frequently used consequence:

\(|d(x,z)-d(y,z)|\le d(x,y)\).

To prove it, write

\(d(x,z)\le d(x,y)+d(y,z)\),

so \(d(x,z)-d(y,z)\le d(x,y)\). Swap \(x\) and \(y\) to obtain the opposite difference bound. Combining them gives the absolute value inequality.

This says distance to a fixed point is a Lipschitz function. Small movement of the input changes its distance from \(z\) by no more than the movement itself.

### Worked example 3 (uniqueness in a metric space)

### Worked use: uniqueness of limits

Suppose \(x_n\to x\) and \(x_n\to y\). Then

\(d(x,y)\le d(x,x_n)+d(x_n,y)\).

Both terms on the right tend to zero. Thus \(d(x,y)=0\), so \(x=y\). Limit uniqueness uses only the metric axioms, not completeness.

## 3. Open balls create local neighborhoods

For \(x\in X\) and \(r>0\), the **open ball** centered at \(x\) with radius \(r\) is

\(B_r(x)=\{y\in X:d(x,y)<r\}\).

A subset \(U\subseteq X\) is **open** when every point \(x\in U\) has some radius \(r>0\) with \(B_r(x)\subseteq U\).

The radius may depend on the point. Near the boundary of an interval, the available radius becomes smaller.

### Worked example: an open interval

In ordinary \(R\), let \(U=(a,b)\) and choose \(x\in U\). Set

\(r=\min(x-a,b-x)\).

Both quantities are positive. If \(|y-x|<r\), then

\(a\le x-r<y<x+r\le b\),

so \(y\in U\). Thus \((a,b)\) is open.

### Arbitrary unions and finite intersections

Any union of open sets is open. If a point lies in the union, it lies in at least one member and inherits that member’s ball.

A finite intersection of open sets is open. If \(x\) lies in \(U_1,\ldots,U_k\), choose a ball radius \(r_j\) inside each and take \(r=\min(r_1,\ldots,r_k)\).

An infinite intersection of open sets need not be open. In \(R\),

\(\bigcap_{n=1}^\infty(-1/n,1/n)=\{0\}\),

and \(\{0\}\) is not open in the usual metric. There is no smallest radius among infinitely many shrinking positive radii.

## 4. Closed sets keep their limits

A subset \(F\subseteq X\) is **closed** when its complement \(X\setminus F\) is open.

In metric spaces there is an equivalent sequential test:

**Sequential characterization of closedness.** A set \(F\) is closed exactly when every convergent sequence \((x_n)\) in \(F\) has its limit in \(F\).

### Closed implies sequentially closed

Suppose \(F\) is closed, \(x_n\in F\), and \(x_n\to x\). If \(x\notin F\), then \(x\) lies in the open complement. Some ball \(B_r(x)\) is disjoint from \(F\). But convergence eventually places \(x_n\) in that ball, contradicting \(x_n\in F\).

### Sequentially closed implies closed

Suppose \(F\) contains every limit of its sequences. Take \(x\notin F\). If no ball around \(x\) avoided \(F\), then for every natural \(n\) one could choose

\(x_n\in F\cap B_{1/n}(x)\).

This sequence would converge to \(x\), forcing \(x\in F\), a contradiction. Therefore some ball around each point outside \(F\) avoids \(F\); the complement is open.

The proof uses countable radii \(1/n\). In arbitrary topological spaces, sequences may not detect all closure behavior. Metric spaces have enough countable local structure for the equivalence.

### Open and closed are not opposites in ordinary language

A set may be both open and closed, or neither. The empty set and the entire space are always both. In the discrete metric, every subset is both. The interval \([0,1)\) is neither open nor closed in \(R\) with its usual metric.

The word **clopen** means both open and closed. Nontrivial clopen sets detect disconnectedness.

## 5. Interior, closure, and boundary

For \(A\subseteq X\):

- the **interior** \(A^\circ\) is the set of points possessing a ball contained in \(A\);
- the **closure** \(\operatorname{cl}(A)\) is the set of points whose every ball meets \(A\);
- the **boundary** \(\partial A\) is the set of points whose every ball meets both \(A\) and its complement.

These definitions imply

\[\partial A=\operatorname{cl}(A)\cap \operatorname{cl}(X\setminus A)\]

and

\(\operatorname{cl}(A)=A^\circ\cup \partial A\),

with the union disjoint.

The interior is the largest open subset of \(A\). The closure is the smallest closed set containing \(A\). The boundary records where membership cannot be decided from any local neighborhood.

### Worked example: rationals

In usual \(R\), let \(A=Q\). Rational and irrational density imply every interval meets both \(Q\) and \(R\setminus Q\). Therefore

\(Q^\circ=\varnothing\), \(\operatorname{cl}(Q)=R\), and \(\partial Q=R\).

The rationals are dense but contain no open interval.

### Sequential closure

In a metric space, \(x\in \operatorname{cl}(A)\) exactly when there is a sequence \((a_n)\) in \(A\) with \(a_n\to x\). If every ball meets \(A\), choose \(a_n\in A\cap B_{1/n}(x)\). Conversely, if such a sequence exists, every ball around \(x\) contains all sufficiently late \(a_n\) and hence meets \(A\).

## 6. Distance to a set

For nonempty \(A\subseteq X\), define

\(d(x,A)=\inf\{d(x,a):a\in A\}\).

This infimum always exists in \(R\) because the distance set is nonempty and bounded below by zero.

Distance zero does not always mean membership. In \(R\), if \(A=(0,1)\), then \(d(0,A)=0\) although \(0\notin A\). The correct statement is

\(d(x,A)=0\) exactly when \(x\in \operatorname{cl}(A)\).

The map \(x\mapsto d(x,A)\) is \(1\)-Lipschitz:

\(|d(x,A)-d(y,A)|\le d(x,y)\).

For any \(a\in A\), the triangle inequality gives

\(d(x,a)\le d(x,y)+d(y,a)\).

Taking infima over \(a\) yields \(d(x,A)\le d(x,y)+d(y,A)\). Swap \(x,y\) for the reverse bound.

### Closed sets as zero sets

If \(A\) is closed and nonempty, then

\(A=\{x:d(x,A)=0\}\).

Thus every closed set in a metric space is the zero set of a continuous real-valued function. This provides a useful bridge between geometry and functions.

## 7. Convergence depends on the metric

A sequence \((x_n)\) converges to \(x\) in \((X,d)\) when

\(\forall \varepsilon>0 \exists N \forall n\ge N: d(x_n,x)<\varepsilon\).

Change the metric and the statement may change.

In the discrete metric, convergence is eventual equality. Take \(\varepsilon=1/2\); eventually \(d(x_n,x)<1/2\), which forces \(x_n=x\). Conversely, an eventually constant sequence clearly converges.

On \(R^n\), however, the metrics \(d_1,d_2,d_\infty\) give the same convergent sequences because

\(d_\infty(x,y)\le d_2(x,y)\le d_1(x,y)\le n d_\infty(x,y)\).

Each metric bounds the others up to fixed positive constants. Epsilon choices can therefore be translated.

### Equivalent metrics

Metrics \(d\) and \(\rho\) are **topologically equivalent** when they generate the same open sets. A sufficient condition is the existence of constants \(c,C>0\) such that

\[c d(x,y)\le \rho(x,y)\le C d(x,y)\]

for all \(x,y\). Such metrics are often called Lipschitz equivalent. Topological equivalence can hold without global constants, so the sufficient condition is stronger than necessary.

Equivalent metrics agree about continuity, convergence, compactness, and connectedness. They need not agree about completeness unless the equivalence controls Cauchy behavior strongly enough. Uniform or Lipschitz equivalence does; mere topological equivalence need not.

## 8. Subspace metrics change which sets are open

If \((X,d)\) is a metric space and \(Y\subseteq X\), the restriction of \(d\) to \(Y\times Y\) is a metric on \(Y\). This is the **subspace metric**.

A set \(U\subseteq Y\) is open in \(Y\) exactly when \(U=Y\cap V\) for some open \(V\subseteq X\).

For example, \([0,1)\) is not open in \(R\), but it is open in the subspace \([0,2]\) because

\([0,1)=[0,2]\cap (-1,1)\).

Likewise, a set can be closed in a subspace without being closed in the ambient space. The interval \((0,1]\) is closed in \((0,2)\) because its subspace complement \((1,2)\) is open there.

Always name the ambient space when openness or closedness might be ambiguous.

## 9. Continuity is inverse-image preservation of openness

For metric spaces \((X,d_X)\) and \((Y,d_Y)\), a function \(f:X\to Y\) is continuous at \(x\) when

\(\forall \varepsilon>0 \exists \delta>0: d_X(x,z)<\delta \Rightarrow d_Y(f(x),f(z))<\varepsilon\).

It is continuous on \(X\) when it is continuous at every point.

Three characterizations are equivalent in metric spaces:

1. the epsilon-delta definition;
2. whenever \(x_n\to x\), we have \(f(x_n)\to f(x)\);
3. the inverse image of every open set in \(Y\) is open in \(X\).

The inverse-image form is especially portable because it speaks only about open sets. Images of open sets need not be open. The squaring map \(f:R\to R\), \(f(x)=x^2\), is continuous, but the image of open \((-1,1)\) is \([0,1)\), not open in \(R\).

### Lipschitz maps

If some \(L\ge 0\) satisfies

\[d_Y(f(x),f(z))\le L d_X(x,z)\]

for all \(x,z\), then \(f\) is **Lipschitz**. For \(L>0\), choose \(\delta=\varepsilon/L\); for \(L=0\), the function is constant. Lipschitz continuity is quantitative and uniform. Ordinary continuity need not supply one global \(L\).

## 10. Cauchy sequences and complete spaces

A sequence \((x_n)\) is **Cauchy** when

\(\forall \varepsilon>0 \exists N \forall m,n\ge N: d(x_m,x_n)<\varepsilon\).

Every convergent sequence is Cauchy by the triangle inequality. The converse defines completeness.

A metric space is **complete** when every Cauchy sequence converges to a point of the space.

Usual \(R^n\) is complete. The open interval \((0,1)\) is not complete with its ordinary subspace metric: \(x_n=1/(n+1)\) is Cauchy but its only possible real limit is \(0\), outside the space.

### Closed subsets of complete spaces

If \(F\) is closed in a complete metric space \(X\), then \(F\) is complete with the subspace metric. A Cauchy sequence in \(F\) is Cauchy in \(X\), so it converges to some \(x\in X\). Closedness keeps that limit in \(F\).

Conversely, a complete subspace of a metric space is closed in the ambient space. If \(x\in \operatorname{cl}(F)\), choose \(x_n\in F\) converging to \(x\). Then \((x_n)\) is Cauchy in \(F\), so it converges in \(F\) to some \(y\). Limit uniqueness in \(X\) gives \(x=y\in F\).

The ambient space need not be complete for this converse.

## 11. Boundedness is metric-dependent

A set \(A\subseteq X\) is **bounded** when it lies inside some ball: there are \(x\in X\) and \(R>0\) with \(A\subseteq B_R(x)\).

Unlike openness, boundedness is not purely topological. On \(R\), define

\(\rho(x,y)=|\arctan x-\arctan y|\).

This metric generates the usual topology because \(\arctan\) is a homeomorphism from \(R\) onto \((-\pi/2,\pi/2)\). Yet the entire real line is bounded under \(\rho\), since every distance is less than \(\pi\), while it is unbounded under the usual metric.

This is one reason “closed and bounded” cannot serve as a universal definition of compactness. Compactness is topological; boundedness depends on the metric’s scale.

## 12. Product metrics encode several coordinates

Given metric spaces \((X,d_X)\) and \((Y,d_Y)\), their Cartesian product can use

\[d_{\max}((x,y),(x',y'))=\max(d_X(x,x'),d_Y(y,y'))\]

or

\(d_{\mathrm{sum}}((x,y),(x',y'))=d_X(x,x')+d_Y(y,y')\).

Both are metrics and generate the product topology for a finite product. A sequence \((x_n,y_n)\) converges to \((x,y)\) exactly when each coordinate converges.

For countably many coordinates, a naive infinite sum of coordinate distances may diverge. A bounded weighted metric such as

\[d(x,y)=\sum_{k=1}^\infty 2^{-k} \min(1,d_k(x_k,y_k))\]

is used instead. The weights make the series converge, and truncation by \(1\) prevents one coordinate’s large scale from overwhelming the construction.

This is an early example of designing a metric to encode the convergence notion a problem needs.

## 13. A failure atlas

| Tempting claim | Failure or repair |
| --- | --- |
| Every distance-looking formula is a metric | \(|x-y|^2\) fails the triangle inequality |
| Open means “contains no boundary points” | Boundary is defined relative to an ambient space; \(X\) itself is open and may have empty boundary in itself |
| Closed means bounded | \([0,\infty)\) is closed and unbounded in \(R\) |
| A set cannot be both open and closed | \(\varnothing\), \(X\), and every subset of a discrete space are clopen |
| Distance zero from a set means membership | It means membership in the closure; use closedness to recover membership |
| Same open sets means same numerical geometry | Equivalent metrics can have very different distances and bounded sets |
| Every Cauchy sequence converges | Only in a complete space |
| Closed and bounded means compact in every metric space | This is special to finite-dimensional Euclidean settings |
| Continuous maps send open sets to open sets | They pull open sets back to open sets |

## 14. Exercises

### ANA-CH05-E001 — Exercise 1: verify a metric

Prove that \(d(x,y)=|x-y|/(1+|x-y|)\) is a metric on \(R\).

<details><summary>Hint 1</summary>

View the proposed distance as phi of ordinary distance, with phi(t)=t/(1+t).

</details>

<details><summary>Hint 2</summary>

Show phi is increasing and subadditive; compute phi(a)+phi(b)-phi(a+b).

</details>

### ANA-CH05-E002 — Exercise 2: find the failed axiom

For each formula on \(R\), determine whether it is a metric and identify a failed axiom if not: (a) \(|x-y|\); (b) \(|x-y|^{1/2}\); (c) \(|x-y|^3\); (d) \(|x^2-y^2|\).

<details><summary>Hint 1</summary>

Test separation using opposite points and triangle inequalities using three ordered points.

</details>

<details><summary>Hint 2</summary>

For the square-root case use sqrt(u+v) at most sqrt(u)+sqrt(v); for the cube try 0,1,2.

</details>

### ANA-CH05-E003 — Exercise 3: reverse triangle inequality

Derive \(|d(x,z)-d(y,z)|\le d(x,y)\) and use it to prove \(x\mapsto d(x,z)\) is continuous.

<details><summary>Hint 1</summary>

Write the triangle inequality twice with x and y interchanged.

</details>

<details><summary>Hint 2</summary>

The two one-sided bounds combine into the absolute inequality and a Lipschitz estimate.

</details>

### ANA-CH05-E004 — Exercise 4: balls in the discrete metric

Describe \(B_r(x)\) for \(0<r\le 1\) and for \(r>1\) in the discrete metric.

<details><summary>Hint 1</summary>

Remember an open ball uses a strict distance inequality.

</details>

<details><summary>Hint 2</summary>

Every distinct point has distance exactly one, including when the radius itself is one.

</details>

### ANA-CH05-E005 — Exercise 5: infinite intersection

Find a countable family of open dense subsets of \(R\) whose intersection is not open but remains dense.

<details><summary>Hint 1</summary>

Remove one rational point at a time.

</details>

<details><summary>Hint 2</summary>

Enumerate the rationals and intersect their open dense complements.

</details>

### ANA-CH05-E006 — Exercise 6: sequential closedness

Use sequences to prove \([a,\infty)\) is closed in \(R\).

<details><summary>Hint 1</summary>

Suppose a sequence in the ray had a limit strictly below a.

</details>

<details><summary>Hint 2</summary>

Take half the gap from that limit to a as a tolerance to contradict eventual membership in the ray.

</details>

### ANA-CH05-E007 — Exercise 7: closure arithmetic

Prove \(\operatorname{cl}(A\cup B)=\operatorname{cl}(A)\cup \operatorname{cl}(B)\). Give an example showing that closure does not generally commute with an infinite union.

<details><summary>Hint 1</summary>

Use monotonicity of closure for one inclusion.

</details>

<details><summary>Hint 2</summary>

For the other, the finite union of the two closures is closed; for failure with infinite unions use singletons tending to zero.

</details>

### ANA-CH05-E008 — Exercise 8: boundary computation

Find the interior, closure, and boundary in \(R\) of \(A=\{1/n:n\in N\}\).

<details><summary>Hint 1</summary>

Find the only new accumulation point of the reciprocal sequence.

</details>

<details><summary>Hint 2</summary>

Use empty interior and the identity boundary equals closure minus interior.

</details>

### ANA-CH05-E009 — Exercise 9: distance to an interval

Compute \(d(x,[a,b])\) explicitly for real \(a\le b\).

<details><summary>Hint 1</summary>

Separate x below, inside, and above the interval.

</details>

<details><summary>Hint 2</summary>

For each exterior region the closer endpoint realizes the infimum distance.

</details>

### ANA-CH05-E010 — Exercise 10: subspace openness

Let \(Y=[0,1)\cup [2,3]\) with the ordinary subspace metric. Show that \([0,1)\) is both open and closed in \(Y\), but is neither open nor closed in \(R\).

<details><summary>Hint 1</summary>

Express each component as the intersection of Y with an ambient open interval.

</details>

<details><summary>Hint 2</summary>

Then check ambient openness at zero and ambient closedness at the missing endpoint one.

</details>

### ANA-CH05-E011 — Exercise 11: equivalent finite-dimensional metrics

Prove \(\lVert v\rVert_\infty\le \lVert v\rVert_2\le \sqrt{n}\lVert v\rVert_\infty\) on \(R^n\), and deduce that the two metrics have the same convergent sequences.

<details><summary>Hint 1</summary>

Compare the largest coordinate square with the sum of all coordinate squares.

</details>

<details><summary>Hint 2</summary>

Bound each summand above by the maximum square; apply the two inequalities to difference vectors.

</details>

### ANA-CH05-E012 — Exercise 12: topological but not Lipschitz equivalence

Show that the usual metric and \(\rho(x,y)=|\arctan x-\arctan y|\) generate the same open sets on \(R\), but cannot satisfy \(c|x-y|\le \rho(x,y)\) for a fixed \(c>0\).

<details><summary>Hint 1</summary>

Use arctan as a homeomorphism onto its open interval image.

</details>

<details><summary>Hint 2</summary>

For failure of a global lower Lipschitz bound, fix one point at zero and let the other tend to infinity.

</details>

### ANA-CH05-E013 — Exercise 13: continuity by sequences

Prove that \(f(x)=x^2\) is continuous using only the sequential characterization and algebra of limits.

<details><summary>Hint 1</summary>

Take an arbitrary convergent input sequence.

</details>

<details><summary>Hint 2</summary>

Factor the output difference or apply the product limit law, using boundedness of the input sequence if estimating directly.

</details>

### ANA-CH05-E014 — Exercise 14: image need not preserve closedness

Give a continuous function and a closed set whose image is not closed.

<details><summary>Hint 1</summary>

Use a continuous function with a missing boundary value in its range.

</details>

<details><summary>Hint 2</summary>

The exponential maps the closed domain R onto an interval whose endpoint zero is absent.

</details>

### ANA-CH05-E015 — Exercise 15: complete subspace

Prove the integers \(Z\) are complete with the ordinary metric, both directly and as a closed subspace of \(R\).

<details><summary>Hint 1</summary>

Use a Cauchy tolerance smaller than the distance between distinct integers.

</details>

<details><summary>Hint 2</summary>

For the second proof, identify the integer complement as a union of open intervals.

</details>

### ANA-CH05-E016 — Exercise 16: an incomplete function space

Let \(P([0,1])\) be the polynomial functions with the uniform metric. Explain why it is not complete by considering polynomial approximations to a continuous nonpolynomial function.

<details><summary>Hint 1</summary>

Choose a continuous function that cannot be a polynomial.

</details>

<details><summary>Hint 2</summary>

Uniform polynomial approximants to a function with a corner form a Cauchy sequence whose only possible limit lies outside the space.

</details>

### ANA-CH05-E017 — Exercise 17: product convergence

Prove convergence in the max product metric is equivalent to coordinatewise convergence.

<details><summary>Hint 1</summary>

Each coordinate distance is bounded above by the product maximum.

</details>

<details><summary>Hint 2</summary>

For the reverse implication, combine the two coordinate thresholds by taking their maximum.

</details>

### ANA-CH05-E018 — Exercise 18: design a metric

On the set of all infinite binary sequences, define

\(d(x,y)=0\) if \(x=y\), and \(d(x,y)=2^{-k}\) if \(k\) is the first coordinate where they differ. Prove this is a metric and describe convergence.

<details><summary>Hint 1</summary>

Translate a small distance into agreement on a long initial block.

</details>

<details><summary>Hint 2</summary>

Common initial agreement for x,y and y,z gives common agreement for x,z, yielding the stronger ultrametric inequality.

</details>

## 15. Complete solutions

<details><summary>Solution</summary>

### ANA-CH05-E001 — Solution 1

Nonnegativity, symmetry, and zero separation are immediate. Let \(f(t)=t/(1+t)\) for \(t\ge 0\). Since ordinary distance obeys \(|x-z|\le |x-y|+|y-z|\), it is enough to show \(f(a+b)\le f(a)+f(b)\). Direct subtraction gives

\(a/(1+a)+b/(1+b)-(a+b)/(1+a+b)=ab(2+a+b)/[(1+a)(1+b)(1+a+b)]\ge 0\).

Thus the triangle inequality holds.

</details>

<details><summary>Solution</summary>

### ANA-CH05-E002 — Solution 2

(a) is the usual metric. (b) is a metric: from \(|x-z|\le |x-y|+|y-z|\) and \(\sqrt{u+v}\le \sqrt{u}+\sqrt{v}\), the triangle inequality follows. (c) fails: \(d(0,2)=8>1+1=d(0,1)+d(1,2)\). (d) fails zero separation because \(d(1,-1)=0\) although the points differ.

</details>

<details><summary>Solution</summary>

### ANA-CH05-E003 — Solution 3

Triangle inequality gives \(d(x,z)-d(y,z)\le d(x,y)\); swapping \(x,y\) gives the negative bound. Hence the absolute inequality. If \(x_n\to x\), then

\(|d(x_n,z)-d(x,z)|\le d(x_n,x)\to 0\),

so distance to \(z\) is sequentially continuous and therefore continuous.

</details>

<details><summary>Solution</summary>

### ANA-CH05-E004 — Solution 4

If \(0<r\le 1\), the strict inequality \(d(x,y)<r\) excludes every \(y\ne x\), so \(B_r(x)=\{x\}\). If \(r>1\), every point has distance at most \(1\) from \(x\), so \(B_r(x)=X\).

</details>

<details><summary>Solution</summary>

### ANA-CH05-E005 — Solution 5

Let \(U_n=R\setminus\{q_n\}\), where \((q_n)\) lists the rationals. Each \(U_n\) is open and dense. Their intersection is \(R\setminus Q\), the irrationals. This set is dense but not open because every interval contains rationals.

</details>

<details><summary>Solution</summary>

### ANA-CH05-E006 — Solution 6

Let \(x_n\ge a\) and \(x_n\to x\). If \(x<a\), set \(\varepsilon=(a-x)/2>0\). Eventually \(|x_n-x|<\varepsilon\), which gives \(x_n<x+\varepsilon=(a+x)/2<a\), contradicting \(x_n\ge a\). Hence \(x\ge a\), so the limit remains in the set.

</details>

<details><summary>Solution</summary>

### ANA-CH05-E007 — Solution 7

Both \(\operatorname{cl}(A)\cup \operatorname{cl}(B)\) and \(\operatorname{cl}(A\cup B)\) contain \(A\cup B\). The former is a finite union of closed sets, hence closed, so minimality of closure gives \(\operatorname{cl}(A\cup B)\subseteq \operatorname{cl}(A)\cup \operatorname{cl}(B)\). Monotonicity gives the reverse inclusion. For an infinite union, take \(A_n=\{1/n\}\). Each is closed, so the union of closures is \(\{1/n:n\in N\}\), while the closure of the union also contains \(0\).

</details>

<details><summary>Solution</summary>

### ANA-CH05-E008 — Solution 8

The interior is empty because no interval lies inside the countable isolated set. Its closure is \(A\cup \{0\}\): the sequence \(1/n\) tends to \(0\), while any point outside this set has positive distance from the finitely many terms above a small threshold and from the tail near zero. Because the interior is empty, the boundary equals the closure, \(A\cup \{0\}\).

</details>

<details><summary>Solution</summary>

### ANA-CH05-E009 — Solution 9

If \(x<a\), the nearest point is \(a\), so \(d(x,[a,b])=a-x\). If \(a\le x\le b\), the distance is \(0\). If \(x>b\), it is \(x-b\). Thus

\(d(x,[a,b])=\max(a-x,0,x-b)\).

</details>

<details><summary>Solution</summary>

### ANA-CH05-E010 — Solution 10

Inside \(Y\), the set \([0,1)\) equals \(Y\cap (-1,3/2)\), so it is open. Its complement relative to \(Y\) is \([2,3]=Y\cap (3/2,4)\), which is also open in \(Y\); therefore \([0,1)\) is closed in \(Y\). In \(R\), it contains \(0\) without a ball around \(0\), so it is not open; it omits the limit \(1\) of points from the set, so it is not closed.

</details>

<details><summary>Solution</summary>

### ANA-CH05-E011 — Solution 11

Every coordinate satisfies \(|v_j|\le \lVert v\rVert_\infty\), so

\(\lVert v\rVert_2^2=\sum|v_j|^2\le n\lVert v\rVert_\infty^2\).

Also the maximum coordinate square is one term in the sum, so \(\lVert v\rVert_\infty\le \lVert v\rVert_2\). If \(\lVert x_k-x\rVert_\infty\to 0\), the upper bound gives \(\lVert x_k-x\rVert_2\to 0\); if the Euclidean distance tends to zero, the lower bound gives uniform-coordinate distance tending to zero.

</details>

<details><summary>Solution</summary>

### ANA-CH05-E012 — Solution 12

The function \(\arctan:R\to (-\pi/2,\pi/2)\) is a continuous strictly increasing bijection with continuous inverse \(\tan\), so pulling back ordinary interval neighborhoods gives the usual open sets. If \(c|x-y|\le \rho(x,y)\) held, take \(y=0\) and let \(x\to \infty\). The left side would be unbounded while \(\rho(x,0)<\pi/2\), impossible.

</details>

<details><summary>Solution</summary>

### ANA-CH05-E013 — Solution 13

If \(x_n\to x\), then convergent sequences are bounded, so \(|x_n|\le M\) eventually. Then

\(|x_n^2-x^2|=|x_n-x||x_n+x|\le |x_n-x|(M+|x|)\to 0\).

Thus \(x_n^2\to x^2\); sequential characterization gives continuity.

</details>

<details><summary>Solution</summary>

### ANA-CH05-E014 — Solution 14

Let \(f:R\to R\) be \(f(x)=e^x\), which is continuous. The set \(R\) is closed in itself, but its image \((0,\infty)\) is not closed in \(R\) because \(1/n\to 0\) with every \(1/n\) in the image and \(0\) outside it.

</details>

<details><summary>Solution</summary>

### ANA-CH05-E015 — Solution 15

Directly, a Cauchy sequence of integers is eventually constant: choose \(\varepsilon=1/2\); sufficiently late terms must have integer distance below \(1/2\), hence equal. It therefore converges to an integer. Alternatively, \(Z\) is closed in complete \(R\) because its complement is a union of open intervals \((n,n+1)\), so the closed-subspace theorem gives completeness.

</details>

<details><summary>Solution</summary>

### ANA-CH05-E016 — Solution 16

By polynomial approximation, there is a sequence of polynomials converging uniformly on \([0,1]\) to, for example, \(f(x)=|x-1/2|\). Uniform convergence makes the polynomial sequence Cauchy. Its only uniform limit is \(f\), which is continuous but not a polynomial because it is not differentiable at \(1/2\). Therefore the Cauchy sequence has no limit in the polynomial subspace. This argument uses the polynomial approximation theorem; the conclusion illustrates that a dense proper subspace of a complete space is incomplete.

</details>

<details><summary>Solution</summary>

### ANA-CH05-E017 — Solution 17

If \(d_{\max}((x_n,y_n),(x,y))\to 0\), then each coordinate distance is bounded above by the maximum and tends to zero. Conversely, if both coordinate distances tend to zero, then for any \(\varepsilon>0\) both are below \(\varepsilon\) eventually; after the larger of the two thresholds, their maximum is below \(\varepsilon\).

</details>

<details><summary>Solution</summary>

### ANA-CH05-E018 — Solution 18

Symmetry and zero separation are immediate. For three sequences \(x,y,z\), if \(x\) and \(y\) agree through coordinate \(m\) and \(y\) and \(z\) agree through coordinate \(m\), then \(x\) and \(z\) also agree through \(m\). In fact this yields the stronger ultrametric inequality

\(d(x,z)\le \max(d(x,y),d(y,z))\),

which implies the triangle inequality. A sequence \(x^{n}\) converges to \(x\) exactly when, for every fixed number of initial coordinates, all sufficiently late \(x^{n}\) agree with \(x\) on that initial block. Later coordinates may continue changing.

</details>

## 16. Chapter synthesis

A metric supplies quantitative neighborhoods. Open sets record which neighborhoods exist; closed sets retain sequential limits; closure collects every point that can be approximated; completeness guarantees that internally convergent behavior has somewhere to land.

The distinctions are as important as the definitions:

- equivalent metrics can share open sets while disagreeing about boundedness;
- closedness is relative to an ambient space;
- distance zero means closure membership, not necessarily membership;
- convergence implies Cauchy behavior everywhere, while the converse is a property of the space;
- compactness is stronger than closedness and boundedness outside special settings.

Continue to [Sequences, Subsequences, and Compactness](sequences-compactness.md) to see how local metric language produces finite subcovers, convergent subsequences, extrema, and uniform continuity.

## Summary

Metric axioms turn distance estimates into neighborhoods, continuity and Cauchy control. Open and closed sets are relative to their ambient space; closure retains every approximable point, and boundary records where interior membership fails to settle. Equivalent topologies preserve continuity and convergence while allowing different quantitative bounds. Completeness concerns the existence of limits for Cauchy sequences, whereas compactness will add finite-cover and subsequence control.
