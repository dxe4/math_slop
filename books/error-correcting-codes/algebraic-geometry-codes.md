
# Algebraic-geometry Codes: A First Look

Preparation is finite fields and evaluation codes, together with the smooth-curve divisor and Riemann–Roch statements introduced explicitly below. This is an L4 first look: geometric input theorems are named, and all coding deductions from them are proved.

## Why curves enter coding theory

Reed–Solomon codes evaluate low-degree polynomials at distinct field points. Algebraic-geometry codes replace the projective line by a more general smooth curve and replace polynomial degree by a divisor controlling poles. The code remains an evaluation subspace; geometry supplies its dimension and zero-count bounds.

This is a first look with a clearly stated geometric boundary. Preparation is finite fields, polynomial evaluation, divisors on a smooth projective curve and the Riemann–Roch theorem stated below. The [algebraic-geometry orientation](../../articles/algebraic-geometry-orientation.md) supplies context, not a proof of that graduate theorem.

We prove the coding deductions in full, including evaluation kernels, designed distance, residue duality and an explicit elliptic example. Riemann–Roch, degree of a principal divisor, the genus formula for a smooth plane cubic and the global residue theorem are named geometric inputs, not results purportedly proved by a few coding equations.

## Curves, places and pole constraints

Let $X$ be a smooth projective geometrically integral curve over $\mathbb F_q$, with function field $\mathbb F_q(X)$ and genus $g$. A closed point $P$ has degree equal to its residue-field degree over $\mathbb F_q$. A rational point has degree one.

A divisor is a finite sum $G=\sum_Pm_PP$ with integer coefficients. Its degree is $\sum_Pm_P\deg P$. It is effective if all coefficients are nonnegative. For nonzero rational $f$, the principal divisor $(f)$ records zero orders positively and pole orders negatively.

The geometric degree theorem is $\deg(f)=0$: total zero degree equals total pole degree. Define
$$
L(G)=\{0\}\cup\{f\in\mathbb F_q(X)^\times:(f)+G\ge0\},
\qquad \ell(G)=\dim_{\mathbb F_q}L(G).
$$
Positive coefficients of $G$ permit poles, while negative coefficients impose zeros. If $\deg G<0$, then $L(G)=0$, since a nonzero member would make an effective divisor of negative degree.

The inequalities concern every closed point, not only the selected rational evaluation points. A function cannot hide additional poles outside the listed positions and remain in the same space.

## The imported Riemann–Roch input

A nonzero rational differential has a divisor $K$ of degree $2g-2$, called a canonical divisor. Riemann–Roch states
$$
\ell(G)-\ell(K-G)=\deg G+1-g
$$
for every divisor $G$ on the stated smooth projective curve.

It immediately gives $\ell(G)\ge\deg G+1-g$. If $\deg G>2g-2$, then $\deg(K-G)<0$, so $\ell(K-G)=0$ and
$$
\ell(G)=\deg G+1-g.
$$
These are deductions from the theorem and the negative-degree observation. They do not assert that a basis can be computed from degree alone; the actual function field and pole conditions still matter.

The hypotheses of smoothness, projectivity and geometric integrality prevent singular local behaviour or disconnected components from being silently inserted into this formulation. Singular models can sometimes be normalised, but their divisor theory must then be taken on the appropriate smooth curve.

## Evaluation codes and their exact dimension

Choose distinct rational points $P_1,\ldots,P_n$ and put $D=P_1+\cdots+P_n$. Require the support of $G$ to avoid these points. Then every $f\in L(G)$ is regular at them and has a well-defined value in $\mathbb F_q$.

Define
$$
C_L(D,G)=\{(f(P_1),\ldots,f(P_n)):f\in L(G)\}.
$$
It is linear. Its evaluation kernel consists exactly of functions also vanishing at every $P_i$, which is $L(G-D)$. Therefore
$$
k=\ell(G)-\ell(G-D).
$$
This exact formula holds before any degree simplification.

If $\deg G<n$, the divisor $G-D$ has negative degree and its space is zero. Evaluation is injective, so $k=\ell(G)\ge\deg G+1-g$. In the window $2g-2<\deg G<n$, dimension is exactly $\deg G+1-g$.

Dropping the upper inequality can introduce a nontrivial kernel. A formula obtained under injective evaluation cannot be applied unchanged when the permitted pole degree reaches the block length.

## Designed distance by divisor degree

Let $m=\deg G<n$ and consider a nonzero evaluation word from $f$. If it has zeros at a subset of $z$ evaluation points, then
$$
(f)+G-\sum_{\text{those points}}P_i
$$
is effective. Taking degrees gives $m-z\ge0$, hence $z\le m$ and
$$
d(C_L(D,G))\ge n-m.
$$
This is the designed distance. It is a lower bound, not automatically equality.

In the Riemann–Roch dimension window, Singleton also gives $d\le n-k+1=n-m+g$. Thus the gap between the designed bound and the Singleton ceiling is at most the genus. For genus zero, the bounds coincide; for positive genus, an explicit witness or sharper argument is needed to identify true distance.

The degree proof works with nonrational zero points too because their degrees are counted positively. Only the selected rational zeros contribute directly to codeword zero coordinates.

## The projective line recovers Reed–Solomon

Take $X=\mathbb P^1$ with coordinate $x$, point at infinity $\infty$, and $G=m\infty$ for $0\le m<n$. A rational function with no finite poles is a polynomial, and its pole order at infinity is its degree. Hence $L(m\infty)$ consists exactly of polynomials of degree at most $m$.

Evaluating at $n$ distinct finite field points gives the ordinary Reed–Solomon code with $k=m+1$ and distance $n-m$. This can also be proved directly by the polynomial root bound; the curve language packages the same calculation as divisor degree.

A higher-genus curve can have more rational evaluation points than the affine field line, but its dimension pays the genus term. Merely drawing a more complicated curve does not establish a better rate-distance tradeoff.

## Differential codes and residue orthogonality

Let $\Omega(H)$ be the vector space of rational differentials $\omega$ with $(\omega)\ge H$, together with zero. Define
$$
C_\Omega(D,G)=
\{(\operatorname{res}_{P_1}\omega,\ldots,
\operatorname{res}_{P_n}\omega):\omega\in\Omega(G-D)\}.
$$
At each $P_i$, these differentials have at most a simple pole because the local coefficient of $G-D$ is minus one.

For $f\in L(G)$ and such $\omega$, the product satisfies $(f\omega)\ge-D$. It has no poles outside the selected rational points and only simple poles there. Local expansion gives $\operatorname{res}_{P_i}(f\omega)=f(P_i)\operatorname{res}_{P_i}\omega$.

The global residue theorem says that the sum of residues, with residue-field traces at nonrational points, is zero. Here all possible poles are the rational $P_i$, so it becomes
$$
\sum_if(P_i)\operatorname{res}_{P_i}\omega=0.
$$
Thus $C_\Omega(D,G)\subseteq C_L(D,G)^\perp$.

## Proving equality of the dual codes

At a point where $\omega$ has at most a simple pole, zero residue means the simple-pole coefficient vanishes and the differential is regular. Therefore the residue map’s kernel on $\Omega(G-D)$ is exactly $\Omega(G)$.

Writing every rational differential as $f\eta$ for a fixed nonzero differential with divisor $K$ gives $\dim\Omega(H)=\ell(K-H)$. Hence the residue code dimension is
$$
\ell(K-G+D)-\ell(K-G).
$$
Apply Riemann–Roch to $G-D$ and $G$. The difference simplifies to
$$
n-\ell(G)+\ell(G-D)=n-k.
$$
The contained residue code therefore has exactly the dual dimension, proving
$$
C_\Omega(D,G)=C_L(D,G)^\perp.
$$

There is also a designed dual-distance bound. If a nonzero residue word has support size $w$, its representing differential is regular at the other selected points, so $(\omega)\ge G-\sum_{\text{support}}P_i$. Taking degrees gives $2g-2\ge m-w$, hence $w\ge m-2g+2$. This is useful when the right side is positive.

## A concrete elliptic evaluation code

Over $\mathbb F_5$, consider the smooth projective completion of
$$
y^2=x^3+x+1.
$$
The discriminant is nonzero since $4+27=31\ne0$ modulo five. The geometric genus theorem for a smooth plane cubic gives $g=1$. Let $O$ be its point at infinity.

Its finite points can be counted directly: for $x=0,2,3$, the right side is one, giving $y=\pm1$; for $x=4$, it is four, giving $y=\pm2$; for $x=1$, it is three, a nonsquare. Thus there are eight finite rational points plus $O$.

Use all eight finite points for $D$ and $G=3O$. At infinity, local coordinates $u=X/Y$, $v=Z/Y$ satisfy $v=u^3+uv^2+v^3$. The parameter $u$ has order one and $v$ order three, so $x=u/v$ has pole order two and $y=1/v$ pole order three.

The functions $1,x,y$ lie in $L(3O)$ and are independent by their distinct pole orders. Riemann–Roch gives dimension three, so they form a basis. Evaluation gives length eight, dimension three and distance at least five.

The function $y-1$ vanishes at exactly $(0,1),(2,1),(3,1)$ among these points, since $x^3+x=x(x^2+1)=0$ has those three roots. Its word has weight five. Thus the code has exact parameters $[8,3,5]$, proved without enumerating all 125 words.

## Families, algorithms and the first-look boundary

If a family has genus-to-length ratio approaching $\gamma$ and one can choose pole degree near $\alpha n$ in the valid dimension window, the bounds suggest rate at least $\alpha-\gamma$ and relative distance at least $1-\alpha$. A useful asymptotic claim requires actual curve families with enough rational points and divisors; the inequalities alone do not construct them.

Similarly, dimension and distance do not supply an efficient general decoder. The usual unique-correction radius follows from minimum distance, but efficient geometric decoders require more structure and algorithms beyond this first look.

The content boundary is therefore explicit: the imported curve theorems supply geometric facts, and the chapter proves how they produce codes and their duals. It does not claim to prove Riemann–Roch, construct optimal curve towers or execute a geometric decoder.

## Coordinate multipliers and the dual convention

Nonzero field multipliers can be added to an evaluation code exactly as for generalised Reed–Solomon codes. If $a=(a_1,\ldots,a_n)$ has no zero entry, let $aC$ be the code obtained by multiplying coordinate $i$ by $a_i$. This is an invertible linear map preserving every word’s zero pattern, so dimension and minimum distance remain unchanged.

Its dual is $a^{-1}C^\perp$, where inverses are taken coordinatewise. Indeed the pairing of $ac$ with $a^{-1}d$ is exactly the pairing of $c$ with $d$. Containment follows, and equal dimensions prove equality. For an evaluation curve code, the residue description therefore gains the inverse multipliers.

These factors matter when comparing displayed parity-check matrices. Two authors can use the same curve, divisor and evaluation points while choosing different nonzero coordinate normalisations. Their literal checks then differ in a predictable way; omitting inverse multipliers can make an otherwise correct residue argument annihilate the wrong displayed code.

## Worked example 12.1: Genus-zero parameters

Choose six distinct finite points over $\mathbb F_7$ and $G=2\infty$ on the projective line. The function space has basis $1,x,x^2$, so dimension is three. The divisor bound gives distance at least four, and a quadratic with roots at two chosen points gives a word of weight four. Thus this is $[6,3,4]$, exactly the Reed–Solomon case of the curve construction.

## Worked example 12.2: A dimension window with a genus cost

Suppose a smooth genus-two curve has twelve selected rational points and a disjoint divisor of degree seven. Since $2g-2=2<7<12$, Riemann–Roch and injectivity give $k=7+1-2=6$. Designed distance is at least five and Singleton at most seven. The information supplied does not determine whether true distance is five, six or seven; a witness or additional curve argument is needed. The example is conditional on the declared curve and divisor existing.

## Worked example 12.3: The elliptic dual

For the explicit $[8,3,5]$ elliptic code, $g=1$ and $m=3$. The residue dual has dimension $8-3=5$ and designed distance at least $3-2+2=3$. This yields parameters $[8,5,d^\perp\ge3]$. The primal weight-five witness does not establish exact dual distance; the dual bound remains honestly a lower bound unless another word or matching obstruction is supplied.

## Linearly equivalent divisors give scaled evaluation codes

Write $G^{\prime}=G+(u)$ for divisors differing by the principal divisor of a nonzero rational function, and suppose both supports avoid the evaluation points. Multiplying a function in the space of the second divisor by that rational function places it in the space of the first. The divisor inequalities verify this directly, and multiplication by the reciprocal gives the inverse map.

At every evaluation point, the connecting rational function has order zero because both divisors have coefficient zero there. Its value is therefore finite and nonzero. The two evaluation codes consequently differ by multiplying each coordinate by the reciprocal of that value.

Dimensions and Hamming distances agree, since the map is an invertible nonzero coordinate scaling. The literal sets of displayed coordinate words need not agree. Thus a divisor-class statement can preserve code parameters while still changing the concrete generator and parity-check conventions.

On the projective line, take the original pole divisor to be a multiple of infinity and choose a finite point outside the evaluation set. The corresponding multiple of that finite point is linearly equivalent, using the matching power of the coordinate minus that point.

Its functions can be written as degree-bounded polynomials divided by that power. At the selected evaluation locations, the denominator is nonzero and becomes a coordinate multiplier. This recovers a generalised Reed–Solomon description from a different pole convention.

The support condition is material. If the connecting function has a zero or pole at an evaluation point, its value is not a permitted nonzero scaling and the simple comparison fails. One must first choose a legitimate divisor representative or change the evaluation construction.

Likewise, linear equivalence does not construct a suitable representative with every desired avoidance property without an additional approximation theorem. The present argument is conditional on the two stated disjoint supports and proves exactly the resulting code relation.

This is another example of separating intrinsic geometry from displayed learner data. A mathematically equivalent coordinate model may preserve dimensions and distance, while source identities and literal coordinate meanings still require an explicit mapping rather than silent replacement.

## Increasing a divisor makes a nested family with a controlled dimension

Let the evaluation sites remain fixed and disjoint from two divisors G and G plus P, where P is a rational point outside the evaluation set. The pole constraint for G is stronger, so its Riemann–Roch space is contained in the space for G plus P. Evaluation therefore gives nested codes. If the degree of G is at least twice the genus minus one, the imported nonspecial Riemann–Roch dimension formula applies to both spaces and their dimensions differ by one.

If the larger divisor degree remains below the number of evaluation sites, both evaluation maps are injective by the zero-count argument. The code dimensions then also differ by one. Their designed-distance bounds differ by one in the opposite direction. These are actual inclusion and dimension statements, while the exact minimum distances can exceed the designed bounds. Below the nonspecial degree range, increasing the divisor need not increase dimension at every step, so the same one-dimensional conclusion would need a separate calculation. This distinction keeps a geometric dimension theorem's hypotheses visible in the code-parameter tradeoff.

## Exercises

### Exercise 12.1
<a id="algebraic-geometry-codes-ex-1"></a>

Why is evaluation well-defined when divisor and evaluation supports are disjoint?

<details>
<summary>Hint 1</summary>

The divisor coefficient at each selected point is zero.

</details>
<details>
<summary>Hint 2</summary>

A member of $L(G)$ cannot have a negative order there.

</details>
<details>
<summary>Solution</summary>

The condition $(f)+G\ge0$ gives $\operatorname{ord}_{P_i}f\ge0$. Thus $f$ is regular at the point and has a residue-field value. Rationality makes that residue field $\mathbb F_q$, matching the code alphabet.

</details>

### Exercise 12.2
<a id="algebraic-geometry-codes-ex-2"></a>

Prove the evaluation kernel is $L(G-D)$.

<details>
<summary>Hint 1</summary>

Zero value at a regular rational point means positive order.

</details>
<details>
<summary>Hint 2</summary>

Impose that condition at every selected point.

</details>
<details>
<summary>Solution</summary>

A function in the kernel is regular and vanishes at each $P_i$, so its order there is at least one. This is precisely $(f)+G-D\ge0$, with the same constraints elsewhere. The converse follows by evaluating those forced zeros.

</details>

### Exercise 12.3
<a id="algebraic-geometry-codes-ex-3"></a>

Why does degree below block length imply injective evaluation?

<details>
<summary>Hint 1</summary>

The kernel divisor has negative degree.

</details>
<details>
<summary>Hint 2</summary>

No nonzero function can make it effective.

</details>
<details>
<summary>Solution</summary>

$\deg(G-D)=m-n<0$. If a nonzero function lay in its space, its principal divisor plus $G-D$ would be effective of that negative degree, impossible because principal divisors have degree zero. Hence the kernel vanishes.

</details>

### Exercise 12.4
<a id="algebraic-geometry-codes-ex-4"></a>

Derive the designed distance without assuming genus zero.

<details>
<summary>Hint 1</summary>

Count zeros at the selected rational points.

</details>
<details>
<summary>Hint 2</summary>

Subtract those points from $(f)+G$.

</details>
<details>
<summary>Solution</summary>

If the evaluation word has $z$ zero coordinates, the displayed effective divisor after subtracting those zeros has degree $m-z$. Nonnegativity gives $z\le m$, so weight is at least $n-m$. No genus-zero specialisation is used.

</details>

### Exercise 12.5
<a id="algebraic-geometry-codes-ex-5"></a>

State the dimension conditions in the exact Riemann–Roch window.

<details>
<summary>Hint 1</summary>

One inequality removes the correction term.

</details>
<details>
<summary>Hint 2</summary>

The other removes the evaluation kernel.

</details>
<details>
<summary>Solution</summary>

The conditions are $2g-2<m<n$. The first gives $\ell(K-G)=0$ and $\ell(G)=m+1-g$; the second gives $\ell(G-D)=0$. Together they make code dimension exactly $m+1-g$.

</details>

### Exercise 12.6
<a id="algebraic-geometry-codes-ex-6"></a>

Why does zero residue remove a permitted simple pole?

<details>
<summary>Hint 1</summary>

Write the local Laurent differential expansion.

</details>
<details>
<summary>Hint 2</summary>

Only its coefficient of the inverse parameter can be singular.

</details>
<details>
<summary>Solution</summary>

With at most a simple pole, the local form is $(a_{-1}t^{-1}+a_0+\cdots)dt$. The residue is $a_{-1}$. If it is zero, no negative-power term remains and the differential is regular. Higher permitted pole orders would require more conditions.

</details>

### Exercise 12.7
<a id="algebraic-geometry-codes-ex-7"></a>

Explain the residue-duality inner product.

<details>
<summary>Hint 1</summary>

Multiply the evaluation function and differential.

</details>
<details>
<summary>Hint 2</summary>

Apply the global residue theorem to their only possible poles.

</details>
<details>
<summary>Solution</summary>

The product has no poles outside $D$ and at most simple poles at its rational points. Its residue there is the function value times the differential residue. Summing gives zero, exactly the coordinate inner product, so the residue code lies in the evaluation dual.

</details>

### Exercise 12.8
<a id="algebraic-geometry-codes-ex-8"></a>

Why is containment enough after the dimension calculation?

<details>
<summary>Hint 1</summary>

The actual dual has dimension $n-k$.

</details>
<details>
<summary>Hint 2</summary>

The residue map has the same image dimension.

</details>
<details>
<summary>Solution</summary>

Two finite-dimensional subspaces with one contained in the other and equal dimension must coincide. Riemann–Roch computes residue image dimension as $n-k$, so the previously proved containment becomes equality.

</details>

### Exercise 12.9
<a id="algebraic-geometry-codes-ex-9"></a>

For the explicit elliptic example, prove true distance is five.

<details>
<summary>Hint 1</summary>

The divisor theorem gives the lower bound.

</details>
<details>
<summary>Hint 2</summary>

Use the three rational zeros of $y-1$.

</details>
<details>
<summary>Solution</summary>

Length eight and pole degree three give distance at least five. The function $y-1$ vanishes at exactly the three listed selected points and is nonzero elsewhere in the evaluation set, giving weight five. This supplies the matching upper witness.

</details>

### Exercise 12.10
<a id="algebraic-geometry-codes-ex-10"></a>

Why do the family inequalities not themselves prove a better asymptotic code family?

<details>
<summary>Hint 1</summary>

They presume curves with sufficiently many rational points.

</details>
<details>
<summary>Hint 2</summary>

That geometric existence is an additional theorem.

</details>
<details>
<summary>Solution</summary>

A useful rate-distance tradeoff needs a sequence of actual curves, rational evaluation sets and suitable divisors controlling genus relative to length. The formulas merely translate those inputs into code bounds. Without constructing or invoking such a family, no asymptotic improvement follows.

</details>

## Summary

Divisor-constrained evaluation has kernel $L(G-D)$, giving exact dimension and a designed-distance bound. Riemann–Roch and global residues, explicitly imported geometric inputs, yield the dimension window and residue duality. The projective line recovers Reed–Solomon, and a hand-derived elliptic example gives exact $[8,3,5]$ parameters.
