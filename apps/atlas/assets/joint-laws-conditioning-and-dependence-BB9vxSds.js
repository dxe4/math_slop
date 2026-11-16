var e=`---
parent_id: book-probability-models-proofs
chapter_id: joint-laws-conditioning-and-dependence
title: "Joint Laws, Conditional Laws, and Dependence"
level: advanced-undergraduate
estimated_minutes: 250
license: CC BY-SA 4.0
---

# Joint Laws, Conditional Laws, and Dependence

Marginal laws describe coordinates one at a time; a joint law describes what can happen together. The distinction is decisive: marginals do not determine dependence, and most questions about sums, comparisons, prediction, or shared risk need the joint model. This chapter develops discrete and continuous joint laws, conditional laws, convolution, Jacobian transformations, and several ways to detect false independence claims.

## 1. Joint laws and marginals

For random variables $X,Y$, the joint law is the pushforward under $\\omega ↦(X(\\omega ),Y(\\omega ))$. In a countable model its mass function is

$p_{X,Y}(x,y)=\\mathbb{P}(X=x,Y=y)$.

The marginals are obtained by summing:

$p_{X}(x)=\\sum_{y} p_{X,Y}(x,y)$, $p_{Y}(y)=\\sum_{x} p_{X,Y}(x,y)$.

A proposed table must be nonnegative and total one. Row and column sums are consequences, not additional freely chosen probabilities.

For an absolutely continuous pair, a joint density $f_{X,Y}\\ge 0$ integrates to one, and probabilities are double integrals over regions. Marginal densities satisfy

$f_{X}(x)=\\int f_{X,Y}(x,y)dy$.

A joint density is sufficient but not necessary. If $Y=X$ with continuous $X$, the joint law lies on the diagonal, a planar set of area zero, and has no ordinary two-dimensional density.

### Worked triangular support

Let $f(x,y)=2$ on $0<y<x<1$ and zero elsewhere. Its integral is $2$ times triangle area $1/2$, hence one. For $0<x<1$, $f_{X}(x)=\\int_{0}^{x}2dy=2x$; for $0<y<1$, $f_{Y}(y)=\\int_{y}^{1}2dx=2(1-y)$. The support inequalities control the integration limits.

## 2. Conditional laws

In the discrete case, when $p_{X}(x)>0$,

$p_{Y \\mid X}(y \\mid x)=p_{X,Y}(x,y)/p_{X}(x)$.

In the density case, where $f_{X}(x)>0$,

$f_{Y \\mid X}(y \\mid x)=f_{X,Y}(x,y)/f_{X}(x)$.

The latter is not elementary conditioning on the usually null event $\\{X=x\\}$. It is a version of a regular conditional density. Values at marginal-null $x$ are not identified by the joint law. Standard Borel target spaces admit regular conditional probabilities, but an arbitrary measurable space may not; this is Durrett, *Probability: Theory and Examples*, official Version 5, Theorem 4.1.17, pp. 214--215. Theorem 4.1.18, pp. 215--216, supplies the measurable version indexed by a conditioning variable. The ratio notation must not hide either the existence theorem or its almost-everywhere uniqueness boundary.

For the triangular density, $f_{Y \\mid X}(y \\mid x)=1/x$ on $0<y<x$: conditional on $X=x$, $Y$ is uniform on $(0,x)$.

## 3. Independence is factorisation

Variables $X,Y$ are independent exactly when their joint law is the product of their marginals. For masses this is

$p_{X,Y}(x,y)=p_{X}(x)p_{Y}(y)$ for all $x,y$;

for densities, factorisation almost everywhere is sufficient and necessary when a joint density exists.

Rectangular support alone does not prove independence. Conversely, a density formula that factorises on a nonrectangular support does not: the support indicator is part of the density. Under independence, $g(X)$ and $h(Y)$ are independent for measurable $g,h$.

### Same marginals, different sums

Let $X$ be symmetric $\\pm 1$. If $Y=X$, then $X+Y$ is $\\pm 2$. If $Y=-X$, the sum is always zero. If $Y$ is an independent copy, the sum has masses $1/4,1/2,1/4$ at $-2,0,2$. Every construction has the same two marginals.

## 4. Sums and convolution

For independent integer-valued variables,

$p_{X+Y}(s)=\\sum_{x} p_{X}(x)p_{Y}(s-x)$.

For independent variables with densities,

$f_{X+Y}(s)=\\int f_{X}(x)f_{Y}(s-x)dx$.

The integration range is where both factors are supported. If $X,Y$ are independent uniform $(0,1)$, then the allowed $x$ satisfy $0<x<1$ and $0<s-x<1$. The interval length is $s$ for $0<s<1$ and $2-s$ for $1\\le s<2$, producing the triangular density. Blindly integrating from zero to one would miss the changing support.

Without independence, integrate the joint density along the line: $f_{X+Y}(s)=\\int f_{X,Y}(x,s-x)dx$ when justified.

## 5. Transforming random vectors

Let $T:D\\to \\mathbb{R}^{2}$ be one-to-one, differentiable, with differentiable inverse and nonzero Jacobian on the relevant region. If $(U,V)=T(X,Y)$, then

$f_{U,V}(u,v)=f_{X,Y}(T^{-1}(u,v)) \\lvert \\det D T^{-1}(u,v)\\rvert$

on $T(D)$. Equivalently divide by $\\lvert \\det DT\\rvert$ at the inverse point. Absolute value is required because densities are nonnegative.

For a many-to-one transformation, partition into injective branches and sum branch contributions. This branch formula requires the critical set and branch boundaries to have zero input probability. A smooth map can have a critical set of positive measure; collapsed positive-probability regions can then create atoms or other singular components that must be computed from the pushforward law rather than discarded.

### Worked ratio transformation

For positive $X,Y$, set $U=X+Y$, $V=X/(X+Y)$. Then $x=uv$, $y=u(1-v)$, with support $u>0$, $0<v<1$; the inverse Jacobian has absolute determinant $u$. Hence

$f_{U,V}(u,v)=u f_{X,Y}(uv,u(1-v))$.

If $X,Y$ are independent gamma variables with a common rate, this expression factorises into a gamma law for $U$ and beta law for $V$, proving independence of total and proportion.

## 6. Dependence summaries and their limits

The joint CDF $F(x,y)=\\mathbb{P}(X\\le x,Y\\le y)$ always determines the joint law. Covariance, correlation, rank correlation, or a few joint moments generally do not. Zero covariance need not mean independence: for $X$ uniform on $[-1,1]$ and $Y=X^{2}$, one has $\\mathbb{E}[XY]=\\mathbb{E}[X^3]=0$ although $Y$ is a nonconstant function of $X$.

Fréchet bounds constrain a joint CDF with given marginals:

$\\max(0,F_{X}(x)+F_{Y}(y)-1)\\le F(x,y)\\le \\min(F_{X}(x),F_{Y}(y))$.

They follow from the union bound and monotonicity. A copula packages dependence after marginal scales are removed; for continuous marginals, $C(u,v)=F(F_{X}^{-1}(u),F_{Y}^{-1}(v))$. This chapter uses the idea as a boundary marker rather than developing full copula theory.

## 7. Audit checklist

1. Is a joint support region stated before marginalisation or transformation?
2. Do joint masses/densities normalize?
3. Is independence assumed, proved by factorisation, or merely guessed?
4. Are conditional ratios used only where marginal denominators are positive?
5. Does a transformation include every inverse branch and the absolute Jacobian?
6. Is a lower-dimensional singular component being mistaken for a planar density?
7. Does a dependence summary support the strength of the conclusion?

## Conditional kernels and further worked models

**Definition 7.1 (Conditional probability kernel).** For real-valued $X,Y$, a conditional kernel $K(x,B)$ assigns a probability measure in the Borel set $B$ for each $x$, is Borel measurable as a function of $x$ for each fixed $B$, and satisfies
$P(X\\in A,Y\\in B)=\\int_AK(x,B)\\,P_X(dx)$
for all Borel sets $A,B$.

The integral identity, rather than an event ratio at a null point, connects the conditional family with the joint law. A kernel can be changed on a $P_X$-null set of input values while preserving the identity. For real targets, existence is a standard regular conditional distribution theorem cited above; it is not asserted for every arbitrary measurable target.

**Proposition 7.2 (Density disintegration).** Suppose a nonnegative joint density $f$ integrates to one. Define $f_X(x)=\\int f(x,y)\\,dy$. At values where $0<f_X(x)<\\infty$, let $K(x,B)=\\int_B f(x,y)/f_X(x)\\,dy$. Assign any fixed probability measure at the exceptional values. Then this defines a conditional kernel up to a marginal-null modification.

*Proof.* Tonelli shows that the marginal is measurable and integrates to one, so values where it is infinite form a Lebesgue-null set. The set where it is zero has zero marginal mass by definition. On the remaining values, the quotient is nonnegative and integrates to one in $y$. Measurability follows from measurability of nonnegative parameter integrals. Finally,
$\\int_AK(x,B)f_X(x)\\,dx=\\int_A\\int_Bf(x,y)\\,dy\\,dx$.
The omitted zero-density slices contribute zero because a nonnegative function with integral zero vanishes almost everywhere on that slice. This equals the joint rectangle probability. ∎

The density is itself defined only almost everywhere, so a displayed pointwise quotient selects a version. If an application insists on a conditional law at a particular numerical value, a continuous version or another explicit convention must be supplied. The integral identity alone does not make every selected null value canonical.

For suitable continuous densities this quotient agrees with conditioning on narrowing intervals around $x$. Both numerator and denominator then shrink proportionally to the interval width, and continuity identifies their ratio. That is a further local-limit argument with hypotheses; it is not the elementary division of two singleton probabilities.

### Worked Example 7.3: uniform marginals with a changing conditional law

For a fixed real parameter $\\theta$ with $|\\theta|\\le1$, define on the unit square
$f(x,y)=1+\\theta(2x-1)(2y-1)$.
The product inside the correction lies between minus one and one, so the density is nonnegative. Integrating either centered factor across its full unit interval gives zero. Both marginal densities are therefore one, and the total joint integral is one.

For $0<x<1$, the conditional density of $Y$ is
$1+\\theta(2x-1)(2y-1)$ on $0<y<1$.
Its mean is
$1/2+\\theta(2x-1)/6$,
because $\\int_0^1y(2y-1)\\,dy=1/6$. Thus the conditional law depends on the observed coordinate whenever $\\theta\\ne0$, despite the two unchanged uniform marginals and rectangular support.

The product moment is
$E[XY]=1/4+\\theta[\\int_0^1x(2x-1)\\,dx]^2=1/4+\\theta/36$.
Consequently the covariance is $\\theta/36$. Independence holds at $\\theta=0$. For nonzero $\\theta$, one can refute it either by the varying conditional mean or by the failure of the full density to equal the product of its marginals.

As an event-level check,
$P(X>1/2,Y>1/2)=1/4+\\theta/16$.
The correction follows from two integrals of the centered factor over the upper half interval, each equal to one quarter. A single parameter therefore changes joint tail probabilities while leaving every marginal interval probability fixed. This is a useful counterexample whenever a rectangular support or familiar marginal histogram is offered as proof of independence.

### Worked Example 7.4: gamma total and beta proportion, with constants

Let $X,Y$ be independent gamma variables of shapes $\\alpha,\\beta>0$ and common rate $\\lambda>0$. Put $S=X+Y$ and $V=X/(X+Y)$. Positivity gives $s>0$ and $0<v<1$, and the inverse is $(x,y)=(sv,s(1-v))$ with absolute Jacobian $s$.

Substituting into the joint density gives
$f_{S,V}(s,v)=\\lambda^{\\alpha+\\beta}s^{\\alpha+\\beta-1}e^{-\\lambda s}v^{\\alpha-1}(1-v)^{\\beta-1}/[\\Gamma(\\alpha)\\Gamma(\\beta)]$.

To identify the normalizing factors without a circular argument, start from the product integral defining $\\Gamma(\\alpha)\\Gamma(\\beta)$. Tonelli permits the nonnegative double integral; the same sum-proportion substitution with rate one changes it into $\\Gamma(\\alpha+\\beta)B(\\alpha,\\beta)$. Hence
$B(\\alpha,\\beta)=\\Gamma(\\alpha)\\Gamma(\\beta)/\\Gamma(\\alpha+\\beta)$.
This proves the identity used to separate the density.

The density now factors into the gamma density of shape $\\alpha+\\beta$ and rate $\\lambda$ for $S$, and the beta density of shapes $\\alpha,\\beta$ for $V$. Its support is a product, and both factors normalize. Therefore $S$ and $V$ are independent.

For the concrete choice $\\alpha=2,\\beta=1,\\lambda=1$, the total density is $s^2e^{-s}/2$, and the proportion density is $2v$. Thus the fraction contributed by the first component exceeds one half with probability $3/4$, independently of which positive total interval is observed. These statements concern a proportion and a total; the original components remain dependent after conditioning on their sum.

If the two original rates differ, an extra exponential factor involving both $s$ and $v$ remains. In general it prevents factorisation, so the common-rate assumption is essential rather than cosmetic.

### Worked Example 7.5: a joint law with both planar and diagonal mass

Choose a Bernoulli selector $B$ with success probability $\\eta\\in(0,1)$, independently of independent uniforms $U,V$ on $(0,1)$. Set $X=U$, and set $Y=U$ when $B=1$ and $Y=V$ otherwise.

Both marginals are uniform: conditioning on the selector either reproduces the same uniform coordinate or uses an independent uniform copy. The joint law, however, gives mass $\\eta$ to the diagonal because independent uniforms agree with probability zero. A planar density can describe only the remaining mass $1-\\eta$. No ordinary two-dimensional density represents the entire law.

For $0\\le t\\le1$, total probability gives
$P(\\max(X,Y)\\le t)=\\eta t+(1-\\eta)t^2$.
The agreement branch contributes a single uniform threshold event, while the independent branch contributes a product. The sum distribution is likewise a mixture: with weight $\\eta$ it is uniform on $(0,2)$, and with weight $1-\\eta$ it has the independent triangular density.

This shows another useful distinction. The derived sum has an ordinary one-dimensional density even though its input joint law has a singular component. A transformation can spread diagonal mass across a line of output values. Whether a density exists must be checked in the dimension and space of the quantity actually being described.

The covariance is $\\eta/12$, since $E[XY]=\\eta/3+(1-\\eta)/4$ and both means are one half. It records the strength of one linear feature of this mixture but does not by itself describe the diagonal mass or establish a general dependence model.

## How joint identities extend beyond rectangles

The conditional kernel identity and independence criterion are initially checked on rectangles because rectangles separate the two coordinates. To conclude equality for every Borel subset of the plane, one uses a uniqueness theorem for probability measures agreeing on a generating intersection-stable class. Rectangles form such a class, and the usual pi-lambda theorem provides the extension.

This measure-theoretic uniqueness result is a cited foundational tool here, rather than a claim that finitely many table checks prove every continuous identity. In a finite table, summing singleton cells proves all event identities directly. In an infinite Borel space, the generating-class theorem supplies the missing extension step.

The distinction also explains why checking one covariance or a few moments is insufficient. Those checks compare a small family of integrals rather than a generating family of event probabilities. Even matching infinitely many moments needs a determinacy theorem in general. The definition of independence remains equality of the joint law with the product law.

## 8. Exercises with complete solutions

### 1. Complete a joint table

**Exercise 7.1**
<a id="joint-laws-conditioning-and-dependence-ex-1"></a>

A binary table has masses $p(0,0)=0.2$, $p(0,1)=0.3$, $p(1,0)=0.1$. Find the remaining mass.

<details>
<summary>Hint 1</summary>

Use total mass one for the four binary cells.

</details>
<details>
<summary>Hint 2</summary>

Subtract the three supplied nonnegative masses.

</details>
<details>
<summary>Solution</summary>

**Solution.** Total mass one forces $p(1,1)=1-0.6=0.4$, which is nonnegative.


</details>

### 2. Marginals from the table

**Exercise 7.2**
<a id="joint-laws-conditioning-and-dependence-ex-2"></a>

Find both marginals in Exercise 1.

<details>
<summary>Hint 1</summary>

Add across rows for X and down columns for Y.

</details>
<details>
<summary>Hint 2</summary>

Keep the coordinate order consistent with the table entries.

</details>
<details>
<summary>Solution</summary>

**Solution.** Row sums give $\\mathbb{P}(X=0)=0.5$, $\\mathbb{P}(X=1)=0.5$; column sums give $\\mathbb{P}(Y=0)=0.3$, $\\mathbb{P}(Y=1)=0.7$.


</details>

### 3. Test independence

**Exercise 7.3**
<a id="joint-laws-conditioning-and-dependence-ex-3"></a>

Are the variables in Exercise 1 independent?

<details>
<summary>Hint 1</summary>

One failed product equality is enough to refute independence.

</details>
<details>
<summary>Hint 2</summary>

Compare the first joint cell with its row total times column total.

</details>
<details>
<summary>Solution</summary>

**Solution.** Independence would give $\\mathbb{P}(X=0,Y=0)=0.5\\cdot 0.3=0.15$, not $0.2$; therefore no.


</details>

### 4. A conditional mass

**Exercise 7.4**
<a id="joint-laws-conditioning-and-dependence-ex-4"></a>

For that table, find $\\mathbb{P}(Y=1 \\mid X=1)$.

<details>
<summary>Hint 1</summary>

Use the row with X equal to one as the new reference population.

</details>
<details>
<summary>Hint 2</summary>

Divide the requested cell mass by that positive row total.

</details>
<details>
<summary>Solution</summary>

**Solution.** Divide the joint mass $0.4$ by row mass $0.5$, obtaining $0.8$.


</details>

### 5. Normalise a triangular density

**Exercise 7.5**
<a id="joint-laws-conditioning-and-dependence-ex-5"></a>

Find $c$ if $f(x,y)=c$ on $0<y<x<2$.

<details>
<summary>Hint 1</summary>

Compute the triangle area from its support inequalities.

</details>
<details>
<summary>Hint 2</summary>

A constant density times that area must equal one.

</details>
<details>
<summary>Solution</summary>

**Solution.** The triangle has area $2$, so $2c=1$ and $c=1/2$.


</details>

### 6. Marginalise it

**Exercise 7.6**
<a id="joint-laws-conditioning-and-dependence-ex-6"></a>

Find $f_{X}$ for Exercise 5.

<details>
<summary>Hint 1</summary>

For fixed x, identify the permitted y interval.

</details>
<details>
<summary>Hint 2</summary>

Integrate the constant density across that interval only.

</details>
<details>
<summary>Solution</summary>

**Solution.** For $0<x<2$, integrate $y$ from zero to $x$: $f_{X}(x)=\\int_{0}^{x}(1/2)dy=x/2$; it is zero otherwise.


</details>

### 7. Conditional density

**Exercise 7.7**
<a id="joint-laws-conditioning-and-dependence-ex-7"></a>

Find $f_{Y \\mid X}(y \\mid x)$ in Exercise 5.

<details>
<summary>Hint 1</summary>

Use the positive marginal density from Exercise 6.

</details>
<details>
<summary>Hint 2</summary>

Normalise the fixed-x slice and state its conditional support.

</details>
<details>
<summary>Solution</summary>

**Solution.** Divide $(1/2)$ by $x/2$, giving $1/x$ for $0<y<x$, as required for a uniform conditional law.


</details>

### 8. Diagonal singularity

**Exercise 7.8**
<a id="joint-laws-conditioning-and-dependence-ex-8"></a>

If $Y=X$ and $X$ is continuous, explain why no two-dimensional joint density exists.

<details>
<summary>Hint 1</summary>

The whole joint probability is carried by the diagonal.

</details>
<details>
<summary>Hint 2</summary>

A planar density gives zero mass to a planar null set.

</details>
<details>
<summary>Solution</summary>

**Solution.** The diagonal has planar Lebesgue measure zero but joint probability one. An ordinary density assigns zero probability to every planar null set, contradiction.


</details>

### 9. Discrete convolution

**Exercise 7.9**
<a id="joint-laws-conditioning-and-dependence-ex-9"></a>

If independent $X,Y$ are Bernoulli with parameters $p,q$, find the mass of their sum.

<details>
<summary>Hint 1</summary>

List the zero, one and two output possibilities.

</details>
<details>
<summary>Hint 2</summary>

The middle value combines two disjoint input pairs.

</details>
<details>
<summary>Solution</summary>

**Solution.** Convolution gives masses $(1-p)(1-q)$ at zero, $p(1-q)+(1-p)q$ at one, and $pq$ at two.


</details>

### 10. Uniform convolution

**Exercise 7.10**
<a id="joint-laws-conditioning-and-dependence-ex-10"></a>

Derive the density of the sum of two independent uniform $(0,1)$ variables.

<details>
<summary>Hint 1</summary>

Solve both unit-interval support inequalities for the convolution variable.

</details>
<details>
<summary>Hint 2</summary>

The overlap length changes when the sum passes one.

</details>
<details>
<summary>Solution</summary>

**Solution.** The convolution integral equals the length of $(0,1)\\cap (s-1,s)$: it is $s$ for $0<s<1$, $2-s$ for $1\\le s<2$, and zero otherwise.


</details>

### 11. Dependence changes a sum

**Exercise 7.11**
<a id="joint-laws-conditioning-and-dependence-ex-11"></a>

Let uniform $(0,1)$ $X$ satisfy $Y=1-X$. Find $X+Y$.

<details>
<summary>Hint 1</summary>

Substitute the specified relation directly.

</details>
<details>
<summary>Hint 2</summary>

The independent convolution hypothesis is absent.

</details>
<details>
<summary>Solution</summary>

**Solution.** It equals one almost surely, not the triangular law. Matching uniform marginals do not justify convolution.


</details>

### 12. Product support factorisation trap

**Exercise 7.12**
<a id="joint-laws-conditioning-and-dependence-ex-12"></a>

Why does $f(x,y)=2e^{-x}e^{-y}\\mathbf{1}_{0<x<y}$ not prove independence?

<details>
<summary>Hint 1</summary>

The displayed exponential factors are only part of the full density.

</details>
<details>
<summary>Hint 2</summary>

The triangular indicator cannot be split into separate coordinate factors.

</details>
<details>
<summary>Solution</summary>

**Solution.** The support indicator $\\mathbf{1}_{x<y}$ does not factor into a function of $x$ times a function of $y$; the full joint density therefore does not factor.


</details>

### 13. Fréchet upper bound

**Exercise 7.13**
<a id="joint-laws-conditioning-and-dependence-ex-13"></a>

Prove $F(x,y)\\le \\min(F_{X}(x),F_{Y}(y))$.

<details>
<summary>Hint 1</summary>

The joint lower-left event is contained in both marginal events.

</details>
<details>
<summary>Hint 2</summary>

Apply monotonicity to each inclusion.

</details>
<details>
<summary>Solution</summary>

**Solution.** Event $\\{X\\le x,Y\\le y\\}$ is contained in each marginal event, so monotonicity gives both bounds.


</details>

### 14. Fréchet lower bound

**Exercise 7.14**
<a id="joint-laws-conditioning-and-dependence-ex-14"></a>

Prove the lower bound.

<details>
<summary>Hint 1</summary>

Apply inclusion–exclusion to the two marginal events.

</details>
<details>
<summary>Hint 2</summary>

Their union probability is at most one, and joint mass is nonnegative.

</details>
<details>
<summary>Solution</summary>

**Solution.** For $A=\\{X\\le x\\}$, $B=\\{Y\\le y\\}$, the union bound gives $1\\ge \\mathbb{P}(A\\cup B)=\\mathbb{P}(A)+\\mathbb{P}(B)-\\mathbb{P}(A\\cap B)$. Rearrange and combine with nonnegativity.


</details>

### 15. Linear transformation Jacobian

**Exercise 7.15**
<a id="joint-laws-conditioning-and-dependence-ex-15"></a>

Set $U=X+Y$, $V=X-Y$. Find the absolute inverse Jacobian.

<details>
<summary>Hint 1</summary>

Solve the two linear equations for x and y.

</details>
<details>
<summary>Hint 2</summary>

Take the absolute determinant of the inverse derivative matrix.

</details>
<details>
<summary>Solution</summary>

**Solution.** $x=(u+v)/2$, $y=(u-v)/2$; the inverse derivative determinant is $-1/2$, so its absolute value is $1/2$.


</details>

### 16. Ratio support

**Exercise 7.16**
<a id="joint-laws-conditioning-and-dependence-ex-16"></a>

For positive $X,Y$, give the support of $U=X+Y$, $V=X/(X+Y)$.

<details>
<summary>Hint 1</summary>

A positive part is strictly smaller than the positive total.

</details>
<details>
<summary>Hint 2</summary>

Check the converse through the inverse formulas.

</details>
<details>
<summary>Solution</summary>

**Solution.** Positivity makes $u>0$; since $0<X<X+Y$, $0<v<1$. Conversely $x=uv,y=u(1-v)$ are positive there.


</details>

### 17. Many-to-one branches

**Exercise 7.17**
<a id="joint-laws-conditioning-and-dependence-ex-17"></a>

If $U=X^{2}$, why must a density formula usually have two contributions?

<details>
<summary>Hint 1</summary>

Solve the squaring equation at a positive output.

</details>
<details>
<summary>Hint 2</summary>

Each permitted sign has its own transported density contribution.

</details>
<details>
<summary>Solution</summary>

**Solution.** For $u>0$, inverse points are $\\sqrt{u}$ and $-\\sqrt{u}$. Each transports probability with derivative magnitude $1/(2\\sqrt{u})$; omitting one loses its mass.


</details>

### 18. Zero covariance dependence

**Exercise 7.18**
<a id="joint-laws-conditioning-and-dependence-ex-18"></a>

Let $X$ be uniform on $\\{-1,0,1\\}$ and $Y=X^{2}$. Verify covariance zero.

<details>
<summary>Hint 1</summary>

Use symmetry for the first and third moments.

</details>
<details>
<summary>Hint 2</summary>

The product XY is the cube of X.

</details>
<details>
<summary>Solution</summary>

**Solution.** Symmetry gives $\\mathbb{E}[X]=0$ and $\\mathbb{E}[XY]=\\mathbb{E}[X^{3}]=0$; hence covariance is zero. Dependence is exact because $Y$ is a function of $X$.


</details>

### 19. Functions preserve independence

**Exercise 7.19**
<a id="joint-laws-conditioning-and-dependence-ex-19"></a>

Prove measurable $g(X),h(Y)$ are independent when $X,Y$ are.

<details>
<summary>Hint 1</summary>

Write transformed value events as preimages.

</details>
<details>
<summary>Hint 2</summary>

Those preimages are governed by the original independence relation.

</details>
<details>
<summary>Solution</summary>

**Solution.** Preimages $\\{g(X)\\in A\\}$ and $\\{h(Y)\\in B\\}$ belong respectively to $\\sigma (X)$ and $\\sigma (Y)$. Independence of these sigma-algebras factorises every such pair.


</details>

### 20. Conditional-null audit

**Exercise 7.20**
<a id="joint-laws-conditioning-and-dependence-ex-20"></a>

In a continuous model, why is the elementary ratio $\\mathbb{P}(Y\\in B,X=x)/\\mathbb{P}(X=x)$ unusable?

<details>
<summary>Hint 1</summary>

The singleton conditioning event is usually null.

</details>
<details>
<summary>Hint 2</summary>

Conditional density versions are defined by integral identities instead of dividing zeros.

</details>
<details>
<summary>Solution</summary>

**Solution.** Both numerator and denominator are typically zero. A conditional density or regular conditional distribution supplies a version via disintegration, not by evaluating $0/0$.


</details>

## 9. Investigation: three couplings

Construct three joint laws with uniform $(0,1)$ marginals: independence, perfect agreement, and perfect opposition. Compare the laws of $X+Y$ and $\\max(X,Y)$.

**Worked solution.** Let $U$ be uniform $(0,1)$. For independence take $X=U$ and an independent uniform $V$ as $Y$; the sum has the triangular density above, while $\\mathbb{P}(\\max\\le t)=t^{2}$ for $0\\le t\\le 1$. For agreement take $(X,Y)=(U,U)$; the sum $2U$ is uniform $(0,2)$ with density $1/2$, and $\\max=U$ has CDF $t$. For opposition take $(X,Y)=(U,1-U)$; the sum is identically one, and

$\\max(U,1-U)\\le t$

requires $1-t\\le U\\le t$, which has probability $0$ below $1/2$ and $2t-1$ for $1/2\\le t\\le 1$. All six marginals are uniform, yet the derived quantities differ. A dependency-free numerical audit can generate a table of empirical CDF errors, but the formulas above are the proof and the table is only an implementation check.

## Sources

For the measure-theoretic existence statements and conditional expectation, see Rick Durrett, *Probability: Theory and Examples*, [official Version 5](https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf), section 4.1. Its Theorems 4.1.17–4.1.18 are the regular conditional distribution results cited above. The finite-partition examples and additional arguments here are original developments.

## 10. Summary and forward route

Joint laws determine what coordinates can do together. Marginalisation discards dependence; conditional laws recover local distributions relative to information. Independence is product factorisation, convolution is its sum-law consequence, and Jacobian formulas transport densities only after support and inverse branches are controlled. Singular joint laws show why density notation is not universal.

The next chapter, [Expectation, Integration, and Moments](#/item/book-probability-models-proofs?chapter=expectation-integration-and-moments), turns laws into integrals and develops the convergence licences needed for infinite operations.
`;export{e as default};