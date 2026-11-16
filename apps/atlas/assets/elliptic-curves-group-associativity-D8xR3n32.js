var e=`---
parent_id: book-algebraic-analytic-number-theory
chapter_id: elliptic-curves-group-associativity
title: "Elliptic Curves: Group Law and Associativity"
level: graduate
estimated_minutes: 285
license: CC BY-SA 4.0
---

# Elliptic Curves: Group Law and Associativity {#section-1-elliptic-curves-group-law-and-associativity}

An elliptic curve is a nonsingular genus-one curve with a chosen point. In short Weierstrass form it supports explicit chord-and-tangent arithmetic, yet its rational points encode deep global information. Finite-field counting, rational finite generation, descent bounds, and open rank conjectures must be kept distinct.

This chapter assumes fields, valuations, and basic polynomial algebra. It develops the group formulas for the stated short model over characteristic other than two, exact finite-field arithmetic, reduction, the Mordell-Weil theorem, descent architecture, and the status of Birch and Swinnerton-Dyer.

This current primary preserves the earlier model equations, small-characteristic
correction, examples and original exercise identities while adding staged support
and a divisor-theoretic associativity proof. The [exact retained seed](retained-seeds/elliptic-curves-group-descent.md)
is unchanged and keeps its original parent metadata. The original number-theory
resource and learner notes remain independent. Hasse, modularity and the general
BSD claims in the retained survey are named external theorem boundaries here;
associativity is proved below from the explicitly imported Riemann–Roch input,
and the separate descent chapter supplies its own finite-generation proof.

Numbered chapter references inside preserved passages use the original book’s
numbering. Current semantic links identify the preparation and continuation.
The current arithmetic continuations are [Mordell–Weil](mordell-weil-descent.md) and [Modular L-functions](l-functions-modular-forms.md).

<a id="section-18-1-nonsingular-cubic-and-the-identity"></a>
## 1. Nonsingular cubic and the identity {#section-20-1-nonsingular-cubic-and-the-identity}

Over a field $K$ of characteristic not $2$, consider

$E:y^{2}=x^{3}+Ax+B$.

It is nonsingular exactly when

$4A^{3}+27B^{2} \\ne 0$.

Add one point at infinity $O$. This point is the group identity. The inverse of $(x,y)$ is $(x,-y)$. A vertical line through a point and its inverse meets the projective cubic at $O$.

A singular cubic may still have a parametrization or an operation on part of the curve, but it is not an elliptic curve under this definition.

**Short-model characteristic boundary and proof.** The statement concerns the displayed short equation; in characteristic three it is not a claim that every elliptic curve can be put in that form. Its projective equation is
$$F(X,Y,Z)=Y^2Z-X^3-AXZ^2-BZ^3=0.$$
At the only point with Z=0, namely O=[0:1:0], the derivative F_Z is one, so that point is nonsingular. On the affine chart, singularity requires y=0, 3x²+A=0 and x³+Ax+B=0 over an algebraic closure.

In characteristic three, the second condition is A=0. If A=0, the polynomial x³+B has a root over the closure and gives a singular point. If A≠0, no affine singular point exists. The discriminant factor reduces to A³, so its nonvanishing criterion is exactly A≠0. Over F_3 the singular root is already rational because x³=x for every residue.

In characteristic other than two or three, a singular root r gives A=−3r² and B=2r³, hence 4A³+27B²=0. Conversely, if that expression vanishes and A=0, then B=0 and r=0 is singular. If A≠0, put r=−3B/(2A); substitution gives 3r²+A=0 and B=2r³, proving singularity. This establishes the criterion in every stated characteristic.

The chord calculation uses Vieta for a monic cubic and remains valid in characteristic three. For a nonvertical tangent, implicit differentiation gives slope (3x²+A)/(2y), which there becomes A/(2y); two is invertible and y≠0 is still the exact denominator hypothesis. Inverse pairs and y=0 are handled before division. Thus the finite F_3 example below lies within the same proved short-model scope. Associativity remains the general elliptic-curve group theorem mentioned after the formulas, rather than a consequence of checking a few sums.


<a id="section-43-2-addition-formulas"></a>
## 2. Addition formulas {#section-45-2-addition-formulas}

For distinct affine points $P=(x_{1},y_{1})$, $Q=(x_{2},y_{2})$ with $x_{1}\\ne x_{2}$, put

$\\lambda=(y_{2}-y_{1})/(x_{2}-x_{1})$.

For doubling with $y_{1}\\ne 0$, put

$\\lambda=(3x_{1}^{2}+A)/(2y_{1})$.

Then

$x_{3}=\\lambda^{2}-x_{1}-x_{2}$,

$y_{3}=\\lambda(x_{1}-x_{3})-y_{1}$.

The sum is $(x_{3},y_{3})$. If $x_{1}=x_{2}$ and $y_{1}=-y_{2}$, the sum is $O$; a point with $y=0$ doubles to $O$.

These formulas follow by substituting the line into the cubic. The third intersection has x-coordinate determined by Vieta; reflection across the x-axis gives the group sum. Associativity is true but not evident from the formulas; it follows from divisor theory or a longer algebraic verification.

<a id="section-63-3-exact-finite-field-arithmetic"></a>
## 3. Exact finite-field arithmetic {#section-65-3-exact-finite-field-arithmetic}

Over $\\mathbb{F}_{p}$, every division in the formulas means multiplication by a modular inverse. Inputs and outputs are residue classes. Before adding, verify the discriminant is nonzero and each affine point satisfies the curve equation.

<a id="section-67-worked-example-finite-field-addition"></a>
### Worked example: finite-field addition {#section-69-worked-example-finite-field-addition}

On $E:y^{2}=x^{3}+2x+1$ over $\\mathbb{F}_{5}$, take $P=(0,1)$. For doubling,

$\\lambda=(2)/(2)=1$.

Thus $x_{3}=1$, $y_{3}=1(0-1)-1=-2\\equiv 3$, so $2P=(1,3)$. Substitution gives $3^{2}\\equiv 4$ and $1+2+1=4$.

Repeated addition yields order seven for $P$, and in fact the curve has seven points.

<a id="section-77-4-counting-points-and-hasse-s-theorem"></a>
## 4. Counting points and Hasse's theorem {#section-79-4-counting-points-and-hasse-s-theorem}

For each $x \\in \\mathbb{F}_{p}$, the right side has zero, one, or two square roots; add $O$. Direct enumeration is exact for small $p$.

**Theorem 13.1 (Hasse's).** For an elliptic curve over $\\mathbb{F}_{q}$,

$\\lvert \\#E(\\mathbb{F}_{q})-(q+1)\\rvert\\le 2\\sqrt{q}$.

This is a proved theorem. It constrains counts but does not identify the group structure. A finite abelian group $E(\\mathbb{F}_{q})$ is a product of at most two cyclic groups, with additional divisibility constraints.

<a id="section-87-5-scalar-multiplication"></a>
## 5. Scalar multiplication {#section-89-5-scalar-multiplication}

Double-and-add computes $[n]P$ from the binary expansion of $n$ in $\\mathcal{O}(\\log n)$ group operations. Negative scalars use $[-n]P=-[n]P$; $[0]P=O$.

The algorithm's correctness follows from the invariant that the accumulator plus the remaining weighted base equals the target scalar multiple. Constant-time behavior is a separate implementation property; ordinary branching on secret bits can leak information.

<a id="section-93-6-rational-points-and-mordell-weil"></a>
## 6. Rational points and Mordell-Weil {#section-95-6-rational-points-and-mordell-weil}

**Theorem 13.2 (Mordell-Weil).** For a number field $K$, the group $E(K)$ is finitely generated:

$E(K)\\cong E(K)_{\\mathrm{tors}}\\times\\mathbb{Z}^{r}$.

The finite torsion subgroup and nonnegative integer rank $r$ are distinct invariants. Finite generation does not give generators automatically. Over $Q$, torsion is strongly constrained and can be computed; rank determination can be difficult.

Reduction modulo a prime of good reduction maps rational torsion injectively into $E(\\mathbb{F}_{p})$ for primes not dividing its order. Comparing several finite group orders bounds possible torsion.

<a id="section-103-7-descent-and-selmer-bounds"></a>
## 7. Descent and Selmer bounds {#section-105-7-descent-and-selmer-bounds}

For an integer $m\\ge2$, multiplication by $m$ gives a finite quotient $E(Q)/mE(Q)$. An $m$-descent maps its classes into explicitly described covering curves with local conditions. The computable $m$-Selmer group contains the image and therefore gives an upper bound on rank. At $m=1$ the quotient is trivial and supplies no rank bound; $m=0$ is not a descent modulus and $E(Q)/0E(Q)=E(Q)$ need not be finite.

The gap is measured by the $m$-torsion of the Tate-Shafarevich group: locally soluble coverings may lack rational points. Thus a Selmer upper bound is not automatically an exact rank. Finding enough independent rational points supplies a lower bound; equality proves the rank.

<a id="section-109-8-heights-and-generators"></a>
## 8. Heights and generators {#section-111-8-heights-and-generators}

For $P=(x(P),y(P))$ with $x(P)=a/b$ in lowest terms, let $h_x(P)=\\log\\max(|a|,|b|)$ be the logarithmic height of the $x$-coordinate. The canonical height satisfies

\\[\\widehat{h}([n]P)=n^{2} \\widehat{h}(P)\\]

and $\\widehat h(P)-\\tfrac12 h_x(P)$ is bounded on a fixed curve. Naming this normalization avoids the common factor-of-two ambiguity in phrases such as “the naive height.” The canonical height turns the free part into a positive-definite quadratic lattice, supporting independence tests and finite searches once bounds are proved.

<a id="section-117-9-l-functions-and-open-status"></a>
## 9. L-functions and open status {#section-119-9-l-functions-and-open-status}

An elliptic curve over $Q$ has an $L$-function assembled from point counts at good primes and corrected local factors at bad primes. Modularity supplies analytic continuation and a functional equation.

The Birch and Swinnerton-Dyer conjecture predicts that the order of vanishing at $s=1$ equals the algebraic rank and relates the leading coefficient to arithmetic invariants. The general conjecture remains open. Important cases are proved, but a numerical zero estimate is not a universal rank certificate.

<a id="section-123-exercises-with-complete-solutions"></a>
## Project: finite curves and rational-status audit {#section-467-project-finite-curves-and-rational-status-audit}

Build an exact finite-field curve explorer for primes below $200$: reject singular inputs, enumerate points, implement every exceptional group-law branch, verify associativity exhaustively for small curves, and compare counts with Hasse. For three rational curves, separately document known points, torsion evidence from good reductions, rank lower and upper bounds, and whether equality is actually certified. Never infer rational rank from finite-field counts alone.

<a id="section-469-chapter-summary"></a>
## The point at infinity makes the geometric rule precise {#section-474-the-point-at-infinity-makes-the-geometric-rule-precise}

The affine equation omits an essential point. Introduce homogeneous coordinates $[X:Y:Z]$, where multiplying all three coordinates by the same nonzero field element does not change the point. The affine chart $Z\\ne0$ uses $x=X/Z$, $y=Y/Z$. Homogenizing a Weierstrass equation produces a degree-three equation; on $Z=0$ it forces $X=0$, leaving the unique point $O=[0:1:0]$. The derivative with respect to $Z$ at this point is nonzero, so $O$ itself is nonsingular.

The line at infinity meets the cubic three times at $O$ when multiplicity is counted. This makes $O$ a flex, the correct origin for the chord-and-tangent construction. A line through two points has a third intersection, possibly coinciding with one of them. The sum is the inverse of that third intersection. When two inputs approach the same point, the tangent replaces the secant; when a vertical line occurs, the intersection at infinity supplies the exceptional result. These are parts of the operation, not failures to be patched by dividing by zero.

Nonsingularity matters because a tangent must be well-defined and the elliptic curve must have the stated geometric structure. On the cusp $y^2=x^3$, both affine partial derivatives vanish at $(0,0)$. The short-form discriminant test catches this example, but checking one pictured tangent would not establish nonsingularity of an arbitrary cubic.

Associativity requires a theorem beyond the Vieta calculation. For a nonsingular projective Weierstrass cubic over a field, with this point $O$, the chord-and-tangent operation makes its rational points an abelian group. This includes characteristics $2$ and $3$ when the general equation is used. An explicit all-characteristic algebraic treatment is [Angdinata–Xu, §2.3 and Proposition 7](https://arxiv.org/pdf/2302.10640). The theorem is imported here; small finite tables below check an implementation, not its universal proof.

The divisor interpretation explains why associativity is natural: the point $P$ corresponds to the degree-zero class of $P-O$, and geometric addition agrees with addition of those classes. Developing divisors and their equivalence is a further prerequisite, so this explanation is a conceptual link rather than a disguised proof. It also clarifies why the origin and the ambient nonsingular curve are hypotheses of the group theorem.

<a id="section-484-general-weierstrass-arithmetic-includes-the-small-chara"></a>
## General Weierstrass arithmetic includes the small characteristics {#section-486-general-weierstrass-arithmetic-includes-the-small-chara}

To retain every prime in the original project, use
$$
y^2+a_1xy+a_3y=x^3+a_2x^2+a_4x+a_6.
$$
The coefficients belong to the field. Completing the square would divide by $2$, so it is not a valid way to remove $a_1,a_3$ in characteristic $2$. Removing the quadratic term similarly needs a characteristic audit. The five-coefficient equation avoids both restrictions.

For a fixed $x$, the two roots in $y$ have sum $-a_1x-a_3$. Consequently the general inverse is
$$
-(x,y)=(x,-y-a_1x-a_3).
$$
This specializes to the earlier reflection $(x,-y)$ when $a_1=a_3=0$. Applying the short inverse to an unrelated general model can therefore produce an off-curve point or the wrong group element.

For a nonvertical line $y=\\lambda x+\\nu$, substitution makes the coefficient of $x^2$ in the intersection cubic equal to $a_2-\\lambda^2-a_1\\lambda$. Vieta gives
$$
x_3=\\lambda^2+a_1\\lambda-a_2-x_1-x_2,\\qquad
y_3=-(\\lambda+a_1)x_3-\\nu-a_3.
$$
The second formula negates the third intersection using the general inverse. For distinct abscissae, $\\lambda=(y_2-y_1)/(x_2-x_1)$ and $\\nu=y_1-\\lambda x_1$.

For doubling, implicit differentiation of the polynomial gives
$$
\\lambda=\\frac{3x_1^2+2a_2x_1+a_4-a_1y_1}
 {2y_1+a_1x_1+a_3},
$$
when its denominator is nonzero. This formal polynomial derivative works in every characteristic; coefficients such as $2$ and $3$ are interpreted in the field. It is not differentiation of a numerical graph.

These formulas need a complete branch order. An identity input returns the other point. Two points with the same $x$ are either equal or general inverses, since they solve the same quadratic in $y$. An inverse pair returns $O$, including a point equal to its own inverse. Otherwise equal points use the tangent with nonzero denominator; unequal abscissae use the secant. This accounts for every pair of valid points. In particular, $y=0$ alone is not the general criterion for doubling to $O$; the criterion is $2y+a_1x+a_3=0$.

The reference implementation checks field, discriminant and membership before applying any branch. A denominator that should be invertible but is not signals an invalid field/model/input contract. In a prime field a nonzero denominator always has an inverse. Over a composite residue ring the same assertion fails, so merely replacing the modulus without checking primality would not implement this group law.

<a id="section-516-exact-discriminants-and-a-characteristic-two-worked-cyc"></a>
## Exact discriminants and a characteristic-two worked cycle {#section-518-exact-discriminants-and-a-characteristic-two-worked-cyc}

**Worked example: the four-point general Weierstrass cycle.**

For the general equation, define
$$
\\begin{aligned}
b_2&=a_1^2+4a_2,&b_4&=a_1a_3+2a_4,\\\\
b_6&=a_3^2+4a_6,&
b_8&=a_1^2a_6+4a_2a_6-a_1a_3a_4+a_2a_3^2-a_4^2.
\\end{aligned}
$$
Then
$$
\\Delta=-b_2^2b_8-8b_4^3-27b_6^2+9b_2b_4b_6.
$$
The arbitrary-field criterion is $\\Delta\\ne0$. This is the discriminant polynomial itself, with no division by $1728$; such a division could be meaningless in characteristics $2$ or $3$. The criterion is imported from [Milne, II, Theorem 2.4](https://www.jmilne.org/math/Books/EC2.pdf). The formula can be checked in exact integer arithmetic before reducing modulo a prime.

For the integral model $y^2+y=x^3-x$, the coefficients are $(0,0,1,-1,0)$. They give $b_2=0,b_4=-2,b_6=1,b_8=-1$, hence $\\Delta=64-27=37$. Its reduction is nonsingular at $2$ and $3$, but singular at $37$. Rejecting the reduction at $37$ says something about this particular model; it does not remove that prime from the explorer's general field capability.

Over $\\mathbb F_2$, both $x=0,1$ make $x^3-x=0$, and both $y=0,1$ make $y^2+y=0$. There are four affine points and $O$. Put $P=(0,0)$. Its inverse is $(0,1)$, and its tangent denominator is $1$, not zero. The tangent slope is $-1=1$, giving $2P=(1,0)$. Further additions give
$$
3P=(1,1),\\qquad4P=(0,1),\\qquad5P=O.
$$
For example, joining $(1,0)$ to $(0,0)$ has slope zero, so the sum has $x=-1=1$ and $y=-1=1$. The inverse-pair branch then closes the cycle. Thus a point with $y=0$ can have order five in characteristic two; the earlier short-form doubling exception was correctly restricted to its own model.

Over $\\mathbb F_3$, every $x$ again makes $x^3-x=0$, and $y^2+y=0$ has exactly the roots $0,2$. There are six affine points and $O$. These direct small cases are useful independent expectations for the implementation. They do not claim that all prime-range results have been observed.

<a id="section-544-point-counts-hasse-comparisons-and-the-scope-of-finite-"></a>
## Point counts, Hasse comparisons, and the scope of finite checks {#section-546-point-counts-hasse-comparisons-and-the-scope-of-finite-}

Enumeration over $\\mathbb F_p$ is a finite certificate when every pair of canonical residues is considered. For each $x=0,\\ldots,p-1$, test every $y=0,\\ldots,p-1$ in the general equation, retain exactly the valid pairs, and add $O$ once. This works uniformly at $2$ and $3$, without assuming that a quadratic has two distinct roots or that a square-root routine applies to the model.

If the point count is $N$, Hasse's bound can be checked without a floating square root:
$$
(N-p-1)^2\\le4p.
$$
This is equivalent to the usual inequality because both sides before squaring are nonnegative. It is a useful independent constraint, but not a complete count verifier. Many wrong counts lie inside the interval. Exact completeness comes from the exhaustive residue scan or a separately proved counting method.

The imported Hasse theorem applies to elliptic curves over every finite field, not just to the short equation in characteristic greater than three; see [Sutherland, Lecture 7, Theorem 7.3](https://math.mit.edu/classes/18.783/2025/LectureNotes7.pdf). A singular reduction does not satisfy its elliptic hypothesis and should be rejected before that comparison. A count accidentally satisfying the inequality cannot repair a singular model.

To check associativity on one enumerated curve, compare $(P+Q)+R$ and $P+(Q+R)$ for every ordered triple of its points, including $O$. The finite statement has exactly $N^3$ comparisons. It covers inverse pairs, tangents and identity intermediates automatically, while explicit branch fixtures help diagnose failures. A successful table proves the implementation agrees on that finite set under the audited enumeration; it does not prove associativity on all fields or on larger untested curves.

The supplied reference declares exhaustive associativity only at the small primes $2,3,5,7$ for its chosen model. Point enumeration and Hasse checks retain the full primes-below-$200$ scope. Stating these two ranges separately is essential: a complete scan of all points is quadratic in $p$, whereas all ordered triples can be much larger. There is no need to pretend that the original project demanded every triple at every prime.

An off-curve input must be rejected even if the formulas return two residues. The output of an algebraic expression is not automatically a point in the intended group. Likewise a singular model, a composite modulus or a malformed point representation changes the mathematical problem before an addition is attempted.

<a id="section-562-binary-scalar-multiplication-has-a-group-invariant"></a>
## Binary scalar multiplication has a group invariant {#section-564-binary-scalar-multiplication-has-a-group-invariant}

For $n\\ge0$, maintain an accumulator $R$, a current base $B$, and a remaining integer $k$ with
$$
R+[k]B=[n]P.
$$
Initially take $R=O$, $B=P$, $k=n$. If $k=2j$, replace $(B,k)$ by $(2B,j)$ and leave $R$ fixed. If $k=2j+1$, first replace $R$ by $R+B$, then replace $(B,k)$ by $(2B,j)$. Associativity and the integer rules for repeated addition preserve the displayed identity in both cases. At $k=0$ it reads $R=[n]P$.

Every step halves a positive remaining integer, so termination is immediate from its binary length. There are at most one doubling and one accumulator addition per bit; the exact implementation counter should say whether identity additions and the last unused doubling are counted. These are group-operation counts, not measured processor instructions or bit costs. Inversions and finite-field multiplications have their own costs.

For a negative scalar use $[n]P=-[-n]P$, with the model's actual inverse formula. Zero returns $O$, and a nonzero scalar can also return $O$ when the point has finite order. Such a result is not a division error or a failed computation. For the five-point cycle above, $[5]P=O$ and $[-1]P=(0,1)$.

An independent bounded check may form the same scalar multiple by repeated addition. That is slower for a large scalar, but for a declared small range it uses a different control path from binary expansion. A verifier that simply calls the producer's scalar routine again has not supplied this independence. Both routines still use the same mathematically reviewed group primitive; the scope of independence should be stated rather than exaggerated.

This proof also exposes the security boundary. The ordinary bit loop branches on $k$ and may perform a different number of additions for different scalars. Correctness of its group invariant says nothing about timing leakage. Educational exact arithmetic can be correct within its field and scalar bounds while lacking the platform, encoding and side-channel properties required of a cryptographic implementation.

<a id="section-578-good-reduction-bounds-torsion-one-prime-component-at-a-"></a>
## Good reduction bounds torsion one prime component at a time {#section-580-good-reduction-bounds-torsion-one-prime-component-at-a-}

A rational torsion point reduces injectively at a good prime $p$ when its order is prime to $p$. The restriction cannot be dropped from a simple count argument. To bound the whole torsion subgroup, fix a prime $\\ell$ dividing its order and use good reductions at primes different from $\\ell$. The $\\ell$-primary subgroup then injects into those finite groups, so its order divides their $\\ell$-parts. Treating each $\\ell$ separately avoids silently using a theorem on the excluded $p$-primary part.

For $y^2=x^3-x$, the discriminant is $64$, so $3$ and $5$ are good. Modulo $3$, each of the three abscissae makes the right side zero, giving three affine points and $O$, hence count four. Modulo $5$, the numbers of ordinates at $x=0,1,2,3,4$ are $1,1,2,2,1$, hence count eight after adding $O$. The visible rational points $(-1,0),(0,0),(1,0)$ each have order two. Together with $O$ they already give four torsion points.

No odd primary component can survive both counts. For $\\ell=3$, use the count at $5$; for $\\ell=5$, use the count at $3$; for other odd $\\ell$, either count excludes it. The $2$-primary part injects at both odd primes and has order at most four. Thus the torsion subgroup is exactly $(\\mathbb Z/2\\mathbb Z)^2$, independently of any rank assertion.

For $y^2+y=x^3-x$, the good counts at $2,3$ are $5,7$. Components at primes other than $2,3$ must divide both coprime numbers. The $2$-primary part is excluded by the odd count seven at $3$, and the $3$-primary part by count five at $2$. Thus rational torsion is trivial. The rational point $(0,0)\\ne O$ is therefore nontorsion and proves rank at least one.

None of this supplies a rank upper bound. Reducing an infinite-order point gives a finite-order point because the target group is finite. Consequently the orders of those reductions cannot be substituted for the order over $\\mathbb Q$, and a large finite point count cannot certify a large rational rank. The reduction theorem concerns torsion precisely because a kernel can contain nontorsion points.

The prime-to-characteristic injection theorem is an import; the componentwise deductions and residue counts here are explicit. They show how a small collection of finite certificates can settle torsion while leaving the free part of the Mordell–Weil group untouched.

<a id="section-592-rank-bounds-require-both-a-free-part-witness-and-a-desc"></a>
## Rank bounds require both a free-part witness and a descent bound {#section-594-rank-bounds-require-both-a-free-part-witness-and-a-desc}

Write $E(\\mathbb Q)\\cong T\\oplus\\mathbb Z^r$ as in Mordell–Weil. For $m\\ge2$,
$$
|E(\\mathbb Q)/mE(\\mathbb Q)|=|T/mT|\\,m^r.
$$
The free coordinates contribute $m$ residue classes each, while multiplication by $m$ on the finite torsion group need not be onto. This elementary decomposition explains why a descent calculation must include torsion information.

For a prime $\\ell$, the quotient is a vector space over $\\mathbb F_\\ell$, of dimension $r+t_\\ell$, where $t_\\ell=\\dim_{\\mathbb F_\\ell}E(\\mathbb Q)[\\ell]$. On a finite group, the kernel and cokernel of multiplication by $\\ell$ have the same order, which identifies this torsion contribution. The Selmer exact sequence adds a further term:
$$
0\\longrightarrow E(\\mathbb Q)/\\ell E(\\mathbb Q)
\\longrightarrow \\operatorname{Sel}_\\ell(E/\\mathbb Q)
\\longrightarrow \\operatorname{Sha}(E/\\mathbb Q)[\\ell]\\longrightarrow0.
$$
If the Selmer dimension is $s$, then $r\\le s-t_\\ell$. Equality needs the gap term to vanish or an independent matching lower bound. The existence and finiteness behind this sequence are imported from [Milne, IV, equation (29) and Theorem 3.1](https://www.jmilne.org/math/Books/EC2.pdf). No field called $\\mathbb F_m$ is assumed when $m$ is composite; the order formula remains the appropriate statement there.

On the lower-bound side, a nonidentity point on a torsion-free group gives rank at least one. Two distinct nontorsion points need not give rank two: $P$ and $[2]P$ are distinct but dependent. One must rule out all nontrivial integer relations modulo torsion. A published Mordell–Weil basis is an imported independence statement, stronger than simply checking the coordinates in the equation.

Canonical heights offer another route when accompanied by rigorous bounds. With the chapter's half-$h_x$ normalization, define the bilinear pairing by
$$
\\langle P,Q\\rangle=
\\frac{\\widehat h(P+Q)-\\widehat h(P)-\\widehat h(Q)}2.
$$
Then $\\langle P,P\\rangle=\\widehat h(P)$, and on the free part the pairing is positive definite. A positive determinant of a rigorously bounded two-point Gram matrix proves independence. Rounded displayed heights without error control do not establish that determinant's sign.

A rank certificate should therefore state the source and hypotheses of its upper bound, the independent evidence for its lower bound, and whether they match. Analytic vanishing estimates, a list of small points and finite reduction counts are different inputs. The ledgers below keep these roles visible and identify imported classifications explicitly.

<a id="section-619-exercises-general-negation-and-quantitative-selmer-boun"></a>
## Associativity from divisor classes, with the imported input named {#section-939-associativity-from-divisor-classes-with-the-imported-in}

The earlier formulas are efficient, but checking a few finite sums does not
prove associativity over a field. Here is a proof for every smooth
projective genus-one curve with a chosen point O. It uses Riemann–Roch
for smooth projective curves as an explicit algebraic-geometry input. That
theorem is not being claimed as a newly proved number-theory lemma.
The precise input is

$$\\ell(D)-\\ell(K_C-D)=\\deg D+1-g,$$

where D is a divisor, K-C a canonical divisor, g the genus and
L(D) the space of rational functions whose divisor plus D is effective,
with zero included. We also use the basic divisor facts that a principal
divisor has degree zero and that a regular function on a projective
geometrically integral curve is constant. These are stated curve-theory
inputs. An official primary reference is Sutherland's
[Riemann–Roch lecture](https://math.mit.edu/classes/18.782/2023sp/LectureNotes22.pdf),
Theorem 22.21. The argument below deduces the group theorem from that
input; it does not hide associativity inside an unproved group-law assertion. The Euler continuation on [curve Riemann–Roch](../algebraic-geometry/riemann-roch-curves.md) develops that geometric input; it remains an explicit prerequisite theorem for this argument.

Work first over an algebraic closure. A divisor is a finite integer formal
sum of points. Effective means all its coefficients are nonnegative, and
degree is their sum here. Divisors of degree zero form an abelian group
under formal addition. Quotienting by principal divisors gives Pic-zero,
an abelian group with associativity already inherited from addition of
integer coefficients. No chord operation has been used to define this group.

On a genus-one curve a nonzero regular differential has no zeros. Its
canonical divisor is effective of degree twice the genus minus two, namely
zero, so every coefficient is zero. Thus the canonical divisor class is
trivial. Riemann–Roch now says that L(D) has dimension exactly one for
every degree-one divisor D: the correction space L(minus D) is zero,
because its defining effective divisor would otherwise have negative degree.
This is the only dimension consequence required for the bijection below.
It is valid for degree-one divisors not initially effective as well as
for divisors consisting of a single point.

Map a point P to the class of P minus O. This map is injective.
If P and Q had the same image with P different from Q, a rational
function with divisor P minus Q would be nonconstant and would have
only a simple pole at Q. It and the constant function would be two
independent members of L(Q), contradicting its dimension one. The map is
surjective too. Given a degree-zero divisor D, the space L(D+O)
has dimension one, so it contains a nonzero function f. The effective
divisor div(f)+D+O has degree one and is therefore one point P.
Consequently D represents P minus O. This proves a bijection between
points and Pic-zero, with O corresponding to its identity.

Transport addition across this bijection. Existence and uniqueness of the
representing point give a binary operation, and associativity, commutativity,
identity and inverses follow from the corresponding group properties in
Pic-zero. In particular, for any three points, both parenthesized sums
have class [P-O]+[Q-O]+[R-O]. Injectivity forces those two points
to agree, including configurations where an intermediate sum equals O.
There is no excluded generic case left to recover by a numerical check.

To identify this operation with the chord formulas, consider the projective
Weierstrass cubic. The line at infinity cuts it at O with multiplicity
three. For the short model this follows directly on the Y-equal-one
chart: with u=X/Y and v=Z/Y, the equation is

$$v=u^3+Auv^2+Bv^3.$$

The coefficient of v in the linearization at O is one, so u is
a local parameter and v has leading term u cubed. For a general
Weierstrass equation the extra terms change the units and higher terms,
but the same equation has v times a unit equal to u cubed plus
higher terms, so its order remains three.

If a line cuts the cubic at P,Q,R with intersection multiplicity,
the rational function given by that line divided by the line at infinity
has divisor P+Q+R minus three O. This can be checked by restricting
the linear equation to the curve: its zero orders are exactly the
intersection multiplicities, and the denominator has the just-computed
order three at O. Hence the sum of the three point classes is zero.
A vertical line gives Q plus its Weierstrass inverse plus O, so the
usual inverse point corresponds exactly to the negative divisor class.
The point obtained by reflecting the third chord intersection is therefore
the sum transported from Pic-zero. Tangencies count the repeated point
with its multiplicity, and a vertical tangent gives twice a two-torsion
point and O. The tangent at O has triple intersection O and gives
O plus O equal to O. This proves that the complete geometric rule,
including every exceptional branch, is the associative group operation.

For points rational over the original field, the third intersection and
its reflected point remain rational. For a nonvertical chord this follows
by substituting the field-defined line in the cubic and dividing out the
two known roots, with repeated roots for tangency. The remaining linear
factor has coefficients in the field. Vertical and infinity branches are
already field-defined. Thus rational points form a subgroup of the group
over the algebraic closure, inheriting its associativity. This avoids
an unproved descent statement about Galois-invariant divisor classes.

For completeness, the short nonsingular cubic in characteristic different
from two really has genus one. The differential dx divided by two y
is regular and nonzero wherever y is nonzero. At a point with y zero,
nonsingularity makes the derivative of the cubic in x nonzero, and the
same form is dy divided by that derivative, again regular and nonzero.
At O the expansions x=u to minus two times a unit and y=u to
minus three times a unit give the differential minus du times a unit.
It therefore has no zero or pole anywhere. Every other regular differential
is a rational-function multiple of it; that multiple has no poles and
is constant by projectivity. The space of regular differentials is
one-dimensional, proving the genus claim in this model. The leading
coefficient minus two is nonzero also in characteristic three, so the
proof preserves the earlier valid characteristic-three short-model scope.
For general small-characteristic Weierstrass equations the standard smooth
plane-cubic genus-one theorem is the named geometric input; the
Pic-zero associativity argument itself is characteristic-independent.

**Worked example: the three visible two-torsion points.** On the nonsingular
curve y squared equals x cubed minus x in characteristic different from
two, the affine points with y zero have x-values zero, one and minus
one. Each equals its inverse and has order two. The horizontal line
y zero cuts the cubic in exactly those three points, so their divisor
classes sum to zero. It follows that the sum of the points at zero
and one is the point at minus one. This agrees with the chord slope
zero and the formula for the third x-coordinate. The divisor argument
also explains why reparenthesizing sums of these points cannot create a
contradictory table: all operations take place in the same abelian
Pic-zero group, not in independently guessed coordinate cases.

<a id="section-1060-summary-and-next-connection"></a>

## Summary

<a id="section-471-chapter-summary"></a>
Nonsingular cubics with a chosen infinity point form groups with explicit formulas. Finite fields permit exact enumeration and Hasse bounds; number fields give finitely generated Mordell-Weil groups. Descent computes upper bounds through local coverings, heights control the free lattice, and BSD's general rank formula remains conjectural.
<a id="section-472-the-point-at-infinity-makes-the-geometric-rule-precise"></a>

<a id="section-1062-summary-and-next-connection"></a>
The nonsingularity and small-characteristic boundaries in the retained
manuscript remain intact. Riemann–Roch is now explicitly named as the
curve-theory input, and its degree-one consequence gives a bijection with
Pic-zero. Line divisors identify the transported associative group operation
with every chord, tangent, inverse and infinity branch of the Weierstrass
formulas. Finite-field calculations illustrate that operation; they do not
prove its universal associativity. The separate Mordell–Weil chapter will
combine finite-support arithmetic and height descent to prove finite
generation over number fields.

## Exercises {#section-125-exercises-with-complete-solutions}

### Exercise 1: Singularity test {#elliptic-curves-group-associativity-ex-1}

Is $y^{2}=x^{3}$ elliptic in short form?

<details>
<summary>Hint 1</summary>
Differentiate the affine defining equation at the origin.
</details>
<details>
<summary>Hint 2</summary>
Both partial derivatives vanish there, matching the zero discriminant expression.
</details>
<details>
<summary>Solution</summary>
No. $A=B=0$, so the discriminant expression vanishes; $(0,0)$ is singular.
</details>

### Exercise 2: Membership {#elliptic-curves-group-associativity-ex-2}

Is $(1,2)$ on $y^{2}=x^{3}+2x+1$ over $\\mathbb{F}_{5}$?

<details>
<summary>Hint 1</summary>
Reduce both coordinate squares and the cubic expression modulo five.
</details>
<details>
<summary>Hint 2</summary>
Each side has residue four.
</details>
<details>
<summary>Solution</summary>
Left side is $4$; right side is $1+2+1=4$, so yes.
</details>

### Exercise 3: Inverse {#elliptic-curves-group-associativity-ex-3}

What is the inverse of $(1,2)$ over $\\mathbb{F}_{5}$?

<details>
<summary>Hint 1</summary>
In this short model, negation keeps x and changes the sign of y.
</details>
<details>
<summary>Hint 2</summary>
Reduce minus two modulo five.
</details>
<details>
<summary>Solution</summary>
$(1,-2)=(1,3)$.
</details>

### Exercise 4: Vertical addition {#elliptic-curves-group-associativity-ex-4}

Compute $(1,2)+(1,3)$ over $\\mathbb{F}_{5}$.

<details>
<summary>Hint 1</summary>
The two points have the same x-coordinate and opposite y-coordinates.
</details>
<details>
<summary>Hint 2</summary>
Handle the vertical branch before attempting a slope division.
</details>
<details>
<summary>Solution</summary>
They are inverses with a vertical joining line, so the sum is $O$.
</details>

### Exercise 5: Doubling {#elliptic-curves-group-associativity-ex-5}

Verify the chapter's computation of $2(0,1)$.

<details>
<summary>Hint 1</summary>
Use the tangent slope with the curve coefficient A equal to two.
</details>
<details>
<summary>Hint 2</summary>
At x zero,y one, the slope is one modulo five.
</details>
<details>
<summary>Solution</summary>
The slope is $(3*0^{2}+2)/(2*1)=1$; formulas give $(1,3)$, which lies on the curve.
</details>

### Exercise 6: Add distinct points {#elliptic-curves-group-associativity-ex-6}

On the same curve, compute $(0,1)+(1,3)$.

<details>
<summary>Hint 1</summary>
The x-coordinates differ, so the chord formula applies.
</details>
<details>
<summary>Hint 2</summary>
The slope is two and the computed x-coordinate must be reduced modulo five.
</details>
<details>
<summary>Solution</summary>
Slope is $2$. Then $x_{3}=4-0-1=3$, $y_{3}=2(0-3)-1=-7\\equiv 3$; the sum is $(3,3)$.
</details>

### Exercise 7: Tangent vertical {#elliptic-curves-group-associativity-ex-7}

What is $2P$ when affine $P$ has $y=0$?

<details>
<summary>Hint 1</summary>
A point with y zero equals its inverse in this characteristic.
</details>
<details>
<summary>Hint 2</summary>
The vertical tangent rule sends its double to the point at infinity.
</details>
<details>
<summary>Solution</summary>
The tangent is vertical, so its third projective intersection is $O$; equivalently $P=-P$, hence $2P=O$.
</details>

### Exercise 8: Enumerate a tiny curve {#elliptic-curves-group-associativity-ex-8}

Count $y^{2}=x^{3}+x$ over $\\mathbb{F}_{3}$.

<details>
<summary>Hint 1</summary>
List the quadratic residues of the three-element field.
</details>
<details>
<summary>Hint 2</summary>
For x zero,one,two the right sides have residues zero,two,one; add the infinity point.
</details>
<details>
<summary>Solution</summary>
For $x=0$, RHS $0$ gives one y; $x=1$ gives $2$, no square; $x=2$ gives $8+2=10\\equiv 1$, two y. Add $O$: total four.
</details>

### Exercise 9: Hasse check {#elliptic-curves-group-associativity-ex-9}

Does the count four in Exercise 8 satisfy Hasse?

<details>
<summary>Hint 1</summary>
The reference center of the Hasse interval is q plus one.
</details>
<details>
<summary>Hint 2</summary>
The computed count equals that center exactly, so the deviation vanishes.
</details>
<details>
<summary>Solution</summary>
$q+1=4$, so deviation is zero, below $2\\sqrt{3}$.
</details>

### Exercise 10: Binary scalar {#elliptic-curves-group-associativity-ex-10}

Outline computation of $[13]P$.

<details>
<summary>Hint 1</summary>
Write thirteen in binary or as a sum of powers of two.
</details>
<details>
<summary>Hint 2</summary>
Compute one doubling ladder and reuse its entries rather than adding P thirteen times.
</details>
<details>
<summary>Solution</summary>
Since $13=8+4+1$, successive doublings compute $2P,4P,8P$; add $8P+4P+P$, with identity and exceptional cases handled by the group law.
</details>

### Exercise 11: Negative scalar {#elliptic-curves-group-associativity-ex-11}

Express $[-5]P$.

<details>
<summary>Hint 1</summary>
Use compatibility of integer multiplication with inversion in the group.
</details>
<details>
<summary>Hint 2</summary>
Negate the five-fold multiple, or multiply the inverse point by five.
</details>
<details>
<summary>Solution</summary>
Compute $[5]P$ then apply the model’s inverse: $(x,y)\\mapsto(x,-y-a_1x-a_3)$ on a general Weierstrass model, and $(x,-y)$ on a short model; this equals $[5](-P)$.
</details>

### Exercise 12: Group order bound {#elliptic-curves-group-associativity-ex-12}

For $q=101$, give Hasse's integer interval.

<details>
<summary>Hint 1</summary>
The count is an integer in the real Hasse interval.
</details>
<details>
<summary>Hint 2</summary>
Twenty is less than twice square root one hundred one, which is less than twenty-one.
</details>
<details>
<summary>Solution</summary>
$q+1=102$, $2\\sqrt{101}$ is just over $20$, so the integer count lies from $82$ through $122$.
</details>

### Exercise 13: Torsion reduction {#elliptic-curves-group-associativity-ex-13}

If good reductions have group orders $12$ and $20$, what can be said about rational torsion order away from those residue characteristics?

<details>
<summary>Hint 1</summary>
Work with torsion components prime to the reduction characteristics.
</details>
<details>
<summary>Hint 2</summary>
An injective reduction places their orders as divisors of both finite group orders.
</details>
<details>
<summary>Solution</summary>
It divides both counts, hence divides $\\gcd(12,20)=4$, subject to the stated prime-to-characteristic injection conditions.
</details>

### Exercise 14: Rank zero {#elliptic-curves-group-associativity-ex-14}

What does rank zero mean?

<details>
<summary>Hint 1</summary>
Use the decomposition into a finite torsion part and a free part.
</details>
<details>
<summary>Hint 2</summary>
Rank zero removes the free part; it does not remove the identity or torsion points.
</details>
<details>
<summary>Solution</summary>
$E(Q)$ consists only of its finite torsion subgroup; it does not mean the curve has no rational points because $O$ and possible torsion remain.
</details>

### Exercise 15: Independent points {#elliptic-curves-group-associativity-ex-15}

What does finding two independent nontorsion points prove?

<details>
<summary>Hint 1</summary>
Independent nontorsion points generate a free subgroup of the asserted rank.
</details>
<details>
<summary>Hint 2</summary>
A rank lower bound does not exclude additional independent points.
</details>
<details>
<summary>Solution</summary>
It proves rank at least two. An upper bound is needed to prove equality.
</details>

### Exercise 16: Selmer gap {#elliptic-curves-group-associativity-ex-16}

Why may a 2-Selmer dimension overestimate rank?

<details>
<summary>Hint 1</summary>
Separate the rational-point quotient, torsion contribution and possible locally soluble covering classes.
</details>
<details>
<summary>Hint 2</summary>
The Selmer group gives an upper bound because the Tate–Shafarevich contribution can be nonzero.
</details>
<details>
<summary>Solution</summary>
It also contains information from locally soluble coverings without rational points, measured by Tate-Shafarevich 2-torsion, plus known torsion contributions.
</details>

### Exercise 17: Height scaling {#elliptic-curves-group-associativity-ex-17}

If $\\widehat{h}(P)=3$, compute $\\widehat{h}([5]P)$.

<details>
<summary>Hint 1</summary>
The canonical height is quadratic in integer scalar multiplication.
</details>
<details>
<summary>Hint 2</summary>
Multiply the original value by five squared.
</details>
<details>
<summary>Solution</summary>
It is $5^{2}*3=75$.
</details>

### Exercise 18: Good-reduction boundary {#elliptic-curves-group-associativity-ex-18}

Why avoid primes dividing the discriminant in the simple reduction argument?

<details>
<summary>Hint 1</summary>
Check whether the discriminant remains a unit at the reduction prime.
</details>
<details>
<summary>Hint 2</summary>
A singular reduction no longer lies under the same smooth elliptic-group injection theorem.
</details>
<details>
<summary>Solution</summary>
The reduced cubic becomes singular, so the elliptic group and torsion-injection theorem require modified treatment.
</details>

### Exercise 19: BSD status {#elliptic-curves-group-associativity-ex-19}

Is equality of analytic and algebraic rank proved for every elliptic curve over $Q$?

<details>
<summary>Hint 1</summary>
Distinguish the universal rank equality from the proved special cases.
</details>
<details>
<summary>Hint 2</summary>
A finite collection of analytic estimates cannot certify the assertion for every rational elliptic curve.
</details>
<details>
<summary>Solution</summary>
No. It is the general rank assertion of BSD and remains open, though significant cases are known.
</details>

### Exercise 20: Arithmetic versus security {#elliptic-curves-group-associativity-ex-20}

Does fast scalar multiplication prove elliptic-curve cryptography secure?

<details>
<summary>Hint 1</summary>
Separate correctness and speed of the group operation from hardness of reversing scalar multiplication.
</details>
<details>
<summary>Hint 2</summary>
A security statement additionally requires the specified subgroup,protocol and adversarial assumptions.
</details>
<details>
<summary>Solution</summary>
No. Security also needs a hard-problem assumption in a validated subgroup, parameters, protocols, randomness, encodings, implementation protections, and a named adversarial game.
</details>

<a id="section-465-project-finite-curves-and-rational-status-audit"></a>

<a id="section-621-exercises-general-negation-and-quantitative-selmer-boun"></a>
### -Infinity. NTP-21-E21: a nonzero mixed coefficient over F2 {#section-623-ntp-21-e21-a-nonzero-mixed-coefficient-over-f2}

On $y^2+xy=x^3+1$ over $\\mathbb F_2$, list all points, find the inverse of $(1,0)$ and compute its double. Explain why negating only $y$ would be wrong.

<details>
<summary>Hint 1</summary>
The general Weierstrass inverse includes the mixed coefficient, even when the characteristic is two.
</details>
<details>
<summary>Hint 2</summary>
Enumerate x zero and one, use inverse y mapped to minus y minus x, and apply the nonzero tangent-denominator branch at (one,zero).
</details>

<a id="section-634-ntp-21-e22-subtract-the-torsion-contribution"></a>
### -Infinity. NTP-21-E22: subtract the torsion contribution {#section-636-ntp-21-e22-subtract-the-torsion-contribution}

Suppose a rigorous $2$-Selmer computation has dimension $5$ and $E(\\mathbb Q)[2]$ has dimension $2$. What follows if three independent nontorsion rational points have been proved? What follows if only two have been proved? State which hypotheses make the conclusions valid.

<details>
<summary>Hint 1</summary>
Subtract the rational two-torsion dimension from the rigorous Selmer upper bound.
</details>
<details>
<summary>Hint 2</summary>
Compare that rank upper bound with the number of points whose nontorsion independence has actually been proved.
</details>

<a id="section-647-solutions-general-negation-and-quantitative-selmer-boun"></a>

## Solutions: general negation and quantitative Selmer bounds {#section-649-solutions-general-negation-and-quantitative-selmer-boun}

<a id="section-649-ntp-21-e21-a-nonzero-mixed-coefficient-over-f2-solution"></a>
### NTP-21-E21: a nonzero mixed coefficient over F2 — solution {#section-651-ntp-21-e21-a-nonzero-mixed-coefficient-over-f2-solution}

<details>
<summary>Solution</summary>
The points are $O,(0,1),(1,0),(1,1)$. At $x=0$ the equation requires $y=1$; at $x=1$ both values work. The general inverse gives $-(1,0)=(1,1)$, whereas changing only $y$ would incorrectly return $(1,0)$. Doubling has denominator $2y+x=1$ and numerator $3x^2-y=1$ modulo $2$, so $\\lambda=1$, $x_3=1+1-2=0$ and $y_3=1(1-0)-0-0=1$. Thus $2(1,0)=(0,1)$. The latter is self-inverse and doubles to $O$.
</details>

<a id="section-656-ntp-21-e22-subtract-the-torsion-contribution-solution"></a>
### NTP-21-E22: subtract the torsion contribution — solution {#section-658-ntp-21-e22-subtract-the-torsion-contribution-solution}

<details>
<summary>Solution</summary>
The rank upper bound is $5-2=3$. Three genuinely independent nontorsion points give the matching lower bound $3$, hence rank exactly $3$. With only two such points, the justified interval is $2\\le r\\le3$ and equality is not determined. The Selmer and torsion dimensions must refer to the same curve and prime $2$, the computations must be valid upper-bound evidence, and the claimed point independence must be proved. This conclusion does not assert that the entire Tate–Shafarevich group vanishes.
</details>

<a id="section-663-solutions-complete-finite-explorer-and-three-rational-l"></a>

## Solutions: complete finite explorer and three rational ledgers {#section-665-solutions-complete-finite-explorer-and-three-rational-l}

The original project is preserved, including primes below $200$, every group-law branch, a declared exhaustive small-curve associativity scope, Hasse comparison and three separate rational evidence ledgers. The next listing is the actual no-I/O explorer component, supplied unexecuted. It uses the general five-coefficient equation, so characteristics $2$ and $3$ are supported directly.

Its full prime-range model uses $y^2+y=x^3-x$ with integer discriminant $37$. Every prime $2\\le p<200$ is considered: reduction at $37$ is explicitly reported singular and the constructor also rejects it; every other prime receives a full exact point enumeration and an integer Hasse check. The field itself is still supported at $37$ for nonsingular coefficient choices. All ordered associativity triples are checked only for this model at $p=2,3,5,7$, where the hand counts are $5,7,8,9$ and the comparison counts are $125,343,512,729$.

An additional mixed-coefficient fixture at $p=2$ uses $(a_1,a_2,a_3,a_4,a_6)=(1,0,0,0,1)$, with discriminant $-433$. Its points are $O,(0,1),(1,0),(1,1)$ and its group is the four-cycle generated by $(1,0)$. The supplied all-pairs table and all $64$ ordered triples exercise the nonzero $a_1$ terms. This is additional bounded coverage, not an assertion that every coefficient tuple has been tested. Singular models, composite fields, off-curve inputs, noncanonical coordinates, boolean coefficients and out-of-range scalars have explicit rejection fixtures.

<a id="section-671-ledger-one-rank-zero-with-visible-rational-torsion"></a>
### Ledger one: rank zero with visible rational torsion {#section-673-ledger-one-rank-zero-with-visible-rational-torsion}

Take $E_0:y^2=x^3-x$, coefficients $(0,0,0,-1,0)$ and $\\Delta=64$. The rational points $O,(-1,0),(0,0),(1,0)$ form $(\\mathbb Z/2\\mathbb Z)^2$. The hand reduction counts are four at $3$ and eight at $5$, with the componentwise torsion argument given in the exposition. Thus the torsion classification is proved here from those imported reduction hypotheses.

For rank, the elementary lower bound is $0$. The upper bound $0$ is imported from the published classification for **Cremona 32a2**, whose model is exactly this coefficient list, in the author's [curve and generator data](https://johncremona.github.io/ecdata/). It follows that $r=0$. This is an externally classified rank equality, not a new descent computation or an inference from the two finite counts. Rank zero still leaves the four rational torsion points.

<a id="section-677-ledger-two-a-proved-nontorsion-point-and-a-matching-ext"></a>
### Ledger two: a proved nontorsion point and a matching external upper bound {#section-679-ledger-two-a-proved-nontorsion-point-and-a-matching-ext}

Take $E_1:y^2+y=x^3-x$, coefficients $(0,0,1,-1,0)$ and $\\Delta=37$. The point $P=(0,0)$ is rational by direct substitution. Good reduction counts five at $2$ and seven at $3$ prove that rational torsion is trivial, by treating the primary components separately. Hence $P\\ne O$ is nontorsion and gives the local lower bound $r\\ge1$.

The primary [37.a1 data](https://www.lmfdb.org/EllipticCurve/Q/data/37.a1) lists this model, $P$ as a generator and rank bounds $[1,1]$. The upper bound $1$ is therefore explicitly imported. Together with the lower bound, it certifies rank one. The quoted algebraic rank bounds are the evidence used here; the separately stored analytic rank is not substituted for them.

<a id="section-683-ledger-three-independence-is-stronger-than-two-distinct"></a>
### Ledger three: independence is stronger than two distinct points {#section-685-ledger-three-independence-is-stronger-than-two-distinct}

Take $E_2:y^2+y=x^3+x^2-2x$, coefficients $(0,1,1,-2,0)$ and $\\Delta=389$. Both $P=(0,0)$ and $Q=(1,0)$ lie on the equation. The hand reduction counts at $2,3,5$ are $5,6,9$. For each prime component of rational torsion, at least one good reduction of different characteristic excludes it; thus torsion is trivial.

The primary [389.a1 data](https://www.lmfdb.org/EllipticCurve/Q/data/389.a1) records the generator pair and rank bounds $[2,2]$. Cremona's generator-file documentation states that the listed Mordell–Weil generators were checked to generate. Independence and the upper bound are imported classification evidence here; merely checking that $P,Q$ are distinct on-curve points would not prove independence. With that evidence, lower and upper bounds both equal $2$, so the actual rank is certified as two.

For a meaningful changed-case audit, restrict the evidence ledger to the single point $P$, trivial torsion and the external upper bound two. Those retained inputs prove only $1\\le r\\le2$ and do not certify equality. Restoring the published basis and matching bounds closes that gap. This describes an incomplete evidence set on a curve whose actual rank is known; it does not pretend that 389.a1 has an open rank.

<a id="section-691-reproduction-and-rubric-for-the-original-explorer-proje"></a>
### Reproduction and rubric for the original explorer project {#section-693-reproduction-and-rubric-for-the-original-explorer-proje}

Reproduce the exact listing by calling its zero-argument $reference\\_model()$, then compare the complete prime coverage, returned point lists, singular record, finite addition tables, stated triple counts and all hand/rejection fixtures. The full range output remains unobserved in this source bundle. The three rational ledgers are separate from that program: their points and finite reductions have explicit checks, while rank upper bounds and a basis are named external data.

A complete submission retains the original prime range including $2,3$, validates a prime field and nonsingular model, checks both inputs before identity returns, and handles identity, inverse, tangent and secant cases. It states exactly which associativity triples were exhausted and applies Hasse only after nonsingularity. Unsupported branches, an off-curve result or a singular model cannot be hidden in a successful count table.

For the rational component, require three model-specific ledgers with rational points, good-prime torsion evidence, separate rank lower and upper sources and an explicit equality status. Finite point counts never serve as rank evidence. Imported data must be labeled as such, and a partial ledger must not acquire the conclusion of a stronger unpublished computation. These criteria distinguish the mathematical conclusions supported by each calculation.

<a id="section-699-solutions-general-finite-field-explorer-listing"></a>

## Solutions: general finite-field explorer listing {#section-701-solutions-general-finite-field-explorer-listing}

Materialize this exact included source as weierstrass_reference.py. It has no imports or input/output side effects; the caller uses reference_model for the full declared model. All execution remains outstanding.

\`\`\`python
def _require(condition, message="invalid finite-curve input"):
    if not condition:
        raise ValueError(message)

def is_prime(p):
    if type(p) is not int or not 2 <= p < 200:
        return False
    d = 2
    while d * d <= p:
        if p % d == 0:
            return False
        d += 1
    return True

def _coefficients(values):
    _require(type(values) in (list, tuple) and len(values) == 5,
             "five Weierstrass coefficients required")
    _require(all(type(v) is int and abs(v) <= 10**6 for v in values),
             "integer coefficient representatives bounded by 10^6 required")
    return tuple(values)

def discriminant(coefficients):
    a1, a2, a3, a4, a6 = _coefficients(coefficients)
    b2 = a1 * a1 + 4 * a2
    b4 = a1 * a3 + 2 * a4
    b6 = a3 * a3 + 4 * a6
    b8 = a1 * a1 * a6 + 4 * a2 * a6 - a1 * a3 * a4 + a2 * a3 * a3 - a4 * a4
    return -b2 * b2 * b8 - 8 * b4**3 - 27 * b6 * b6 + 9 * b2 * b4 * b6

def _tick(counter, key):
    if counter is not None:
        _require(type(counter) is dict and
                 all(type(v) is int and v >= 0 for v in counter.values()),
                 "counter must contain nonnegative integers")
        counter[key] = counter.get(key, 0) + 1

def _key(P):
    return None if P is None else tuple(P)

class Curve:
    def __init__(self, p, coefficients):
        _require(is_prime(p), "prime field 2 <= p < 200 required")
        raw = _coefficients(coefficients)
        self.p = p
        self.a = tuple(v % p for v in raw)
        self.delta = discriminant(self.a) % p
        _require(self.delta != 0, "singular Weierstrass model")

    def contains(self, P):
        if P is None:
            return True
        if type(P) not in (list, tuple) or len(P) != 2:
            return False
        if any(type(v) is not int or not 0 <= v < self.p for v in P):
            return False
        x, y = P
        a1, a2, a3, a4, a6 = self.a
        return (y * y + a1 * x * y + a3 * y
                - x**3 - a2 * x * x - a4 * x - a6) % self.p == 0

    def point(self, P):
        _require(self.contains(P), "noncanonical or off-curve point")
        return None if P is None else list(P)

    def neg(self, P):
        P = self.point(P)
        if P is None:
            return None
        x, y = P
        a1, unused_a2, a3, unused_a4, unused_a6 = self.a
        return [x, (-y - a1 * x - a3) % self.p]

    def add(self, P, Q, counter=None):
        P, Q = self.point(P), self.point(Q)
        _tick(counter, "group_additions")
        if P is None or Q is None:
            _tick(counter, "identity")
            return Q if P is None else P
        p = self.p
        a1, a2, a3, a4, unused_a6 = self.a
        x1, y1 = P
        x2, y2 = Q
        if x1 == x2 and (y1 + y2 + a1 * x1 + a3) % p == 0:
            _tick(counter, "vertical_tangent" if P == Q else "inverse")
            return None
        if x1 == x2:
            _require(P == Q, "same-x points must coincide or be inverses")
            numerator = 3 * x1 * x1 + 2 * a2 * x1 + a4 - a1 * y1
            denominator = (2 * y1 + a1 * x1 + a3) % p
            branch = "tangent"
        else:
            numerator, denominator = y2 - y1, (x2 - x1) % p
            branch = "chord"
        _require(denominator != 0, "unhandled zero denominator")
        slope = numerator * pow(denominator, p - 2, p) % p
        _tick(counter, "inversions")
        _tick(counter, branch)
        x3 = (slope * slope + a1 * slope - a2 - x1 - x2) % p
        y3 = (slope * (x1 - x3) - y1 - a1 * x3 - a3) % p
        return self.point([x3, y3])

    def scalar(self, k, P, counter=None):
        _require(type(k) is int and -1024 <= k <= 1024,
                 "integer scalar bounded by 1024 required")
        P = self.point(P)
        if k < 0:
            P = self.neg(P)
        n, result, base = abs(k), None, P
        while n:
            if n % 2:
                result = self.add(result, base, counter)
            n //= 2
            if n:
                base = self.add(base, base, counter)
        return result

    def points(self):
        return [None] + [[x, y] for x in range(self.p) for y in range(self.p)
                         if self.contains([x, y])]

def validate_curve(p, coefficients):
    return Curve(p, coefficients)

def explore(p, coefficients, associativity=False):
    _require(type(associativity) is bool, "associativity flag must be boolean")
    C = Curve(p, coefficients)
    _require(not associativity or p <= 7,
             "exhaustive associativity is bounded to p <= 7")
    points = C.points()
    N = len(points)
    deviation = N - (p + 1)
    _require(deviation * deviation <= 4 * p, "Hasse bound failed")
    report = {
        "p": p, "coefficients": list(C.a), "delta": C.delta,
        "points": points, "count": N, "point_tests": p * p,
        "hasse": {"deviation": deviation, "square": deviation * deviation,
                  "bound": 4 * p},
        "associativity": None,
    }
    if associativity:
        index = {_key(P): i for i, P in enumerate(points)}
        counts = {}
        table = [[index[_key(C.add(P, Q, counts))] for Q in points] for P in points]
        for i in range(N):
            for j in range(N):
                for k in range(N):
                    _require(table[table[i][j]][k] == table[i][table[j][k]],
                             "finite associativity check failed")
        report["associativity"] = {
            "scope": "all ordered triples on this one finite curve",
            "pair_table": table, "ordered_triples": N**3,
            "counters": counts,
        }
    return report

def _rejects(thunk):
    try:
        thunk()
    except ValueError:
        return True
    raise ValueError("declared rejection fixture was accepted")

def reference_model():
    model = [0, 0, 1, -1, 0]
    _require(discriminant(model) == 37, "reference discriminant mismatch")
    records = []
    for p in range(2, 200):
        if not is_prime(p):
            continue
        if 37 % p == 0:
            records.append({"p": p, "status": "singular", "delta": 0})
        else:
            records.append({"p": p, "status": "nonsingular",
                            "exploration": explore(p, model, p <= 7)})
    C2, C3, C5, C7 = Curve(2, model), Curve(3, model), Curve(5, model), Curve(7, model)
    _require(C2.points() == [None, [0, 0], [0, 1], [1, 0], [1, 1]])
    _require(C3.points() == [None, [0, 0], [0, 2], [1, 0], [1, 2], [2, 0], [2, 2]])
    _require(C2.neg([0, 0]) == [0, 1] and C2.add([0, 0], [0, 0]) == [1, 0])
    _require(C3.add([0, 0], [0, 0]) == [1, 0])
    c2, c3 = {}, {}
    _require(C2.scalar(5, [0, 0], c2) is None and c2["group_additions"] == 4)
    _require(C3.scalar(7, [0, 0], c3) is None and c3["group_additions"] == 5)
    _require(C2.scalar(-1, [0, 0]) == [0, 1])
    _require(C5.add([2, 2], [2, 2]) is None)
    _require(len(C5.points()) == 8 and len(C7.points()) == 9)
    extra = []
    for coefficients, p, count in [
        ([0, 0, 0, -1, 0], 3, 4), ([0, 0, 0, -1, 0], 5, 8),
        ([0, 1, 1, -2, 0], 2, 5), ([0, 1, 1, -2, 0], 3, 6),
        ([0, 1, 1, -2, 0], 5, 9),
    ]:
        result = explore(p, coefficients)
        _require(result["count"] == count, "hand-derived reduction count mismatch")
        extra.append(result)
    a1_coefficients = [1, 0, 0, 0, 1]
    _require(discriminant(a1_coefficients) == -433)
    A1 = Curve(2, a1_coefficients)
    _require(A1.points() == [None, [0, 1], [1, 0], [1, 1]])
    _require(A1.neg([1, 0]) == [1, 1])
    _require(A1.add([1, 0], [1, 0]) == [0, 1])
    _require(A1.add([1, 1], [1, 1]) == [0, 1])
    _require(A1.add([0, 1], [0, 1]) is None)
    a1_fixture = explore(2, a1_coefficients, True)
    _require(a1_fixture["associativity"]["ordered_triples"] == 64)
    _require(a1_fixture["associativity"]["pair_table"] == [
        [0, 1, 2, 3], [1, 0, 3, 2], [2, 3, 1, 0], [3, 2, 0, 1],
    ])
    rejected = [
        lambda: Curve(4, model), lambda: Curve(True, model),
        lambda: Curve(2, [0, 0, 0, 0, 0]), lambda: Curve(37, model),
        lambda: C2.point([2, 0]), lambda: C3.point([0, 1]),
        lambda: C3.add(None, [0, 1]), lambda: C2.scalar(1025, [0, 0]),
        lambda: Curve(2, [False, 0, 1, -1, 0]),
    ]
    for thunk in rejected:
        _rejects(thunk)
    return {
        "model": model, "prime_range": [2, 200],
        "prime_records": records, "extra_reductions": extra,
        "a1_nonzero_fixture": a1_fixture,
        "scalar_fixtures": {"p2_order5_additions": c2,
                            "p3_order7_additions": c3},
        "rejection_fixtures": len(rejected),
        "execution_boundary": "data returned by this invocation only; no global associativity proof",
    }
\`\`\`

<a id="section-931-references-group-reduction-and-rational-evidence"></a>

## Sources: group, reduction and rational evidence {#section-933-references-group-reduction-and-rational-evidence}

General Weierstrass group formulas and the all-characteristic group theorem are checked against [Angdinata–Xu, §2.3 and Proposition 7](https://arxiv.org/pdf/2302.10640). The discriminant, prime-to-characteristic torsion reduction and Selmer interfaces are imported from [Milne, II, Theorem 2.4 and Corollary 4.2; IV, equation (29) and Theorem 3.1](https://www.jmilne.org/math/Books/EC2.pdf). [Sutherland, Lecture 7, Theorem 7.3](https://math.mit.edu/classes/18.783/2025/LectureNotes7.pdf) supplies Hasse's finite-field theorem.

The three rank classifications are primary published data, checked for this source review: [Cremona's database documentation](https://johncremona.github.io/ecdata/), its [allcurves file](https://raw.githubusercontent.com/JohnCremona/ecdata/master/allcurves/allcurves.00000-09999) and [allgens file](https://raw.githubusercontent.com/JohnCremona/ecdata/master/allgens/allgens.00000-09999), and the [37.a1](https://www.lmfdb.org/EllipticCurve/Q/data/37.a1) and [389.a1](https://www.lmfdb.org/EllipticCurve/Q/data/389.a1) underlying records. Database rank bounds, analytic rank and a manuscript's own finite computations remain different evidence. No program execution or new descent result is attributed to these citations.

<a id="section-937-associativity-from-divisor-classes-with-the-imported-in"></a>
`;export{e as default};