var e=`---
id: visual-lab-metric-projection
title: "Transport the Metric Before Projecting"
level: undergraduate
estimated_minutes: 90
license: CC BY-SA 4.0
---

# Transport the metric before projecting

A nearest point depends on a notion of distance. Changing the coordinates of a physical problem should preserve that nearest point, provided you also carry its distance rule into the new coordinates. Replacing the distance rule is a different mathematical problem. This workshop makes the distinction visible through an orthogonal projection whose coordinate matrix is not symmetric.

You need matrix multiplication, bases and coordinate conversion from [Units 3–4 of the linear algebra course](#/item/course-linear-algebra-standard), and inner products and orthogonal projection from Unit 6. The essential projection arguments are repeated where needed. Work over $\\mathbb R$ throughout; no calculus is required, including in the polynomial experiment. Plan 20 minutes for predictions and the instrument, 25 for the proofs, and 45 for the exercises. Write what you intend to preserve before changing a basis or a metric.

## Guided investigation

In the physical plane with its ordinary Euclidean distance, project onto the horizontal axis:

$$\\Pi(x,y)=(x,0),\\qquad \\Pi=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}.$$

Now describe the plane using the basis $(1,0),(s,1)$, with column matrix

$$
P_s=\\begin{pmatrix}1&s\\\\0&1\\end{pmatrix},\\qquad
\\begin{pmatrix}x\\\\y\\end{pmatrix}=P_sc,
\\qquad c=\\begin{pmatrix}x-sy\\\\y\\end{pmatrix}.
$$

The shear parameter $s$ may be any real number. Predict the projection of the physical point $(0,1)$ when $s=1$. Should changing its coordinate description change the nearest physical point?

Open [the live workshop](#/labs?lab=visual-lab-metric-projection). Its bounded half-integer shear and integer physical-input controls select examples. You can choose the transported metric or ordinary coefficient geometry and audit two candidate projector matrices. A second experiment uses polynomial sample values and a proposed scalar coefficient. All essential results appear in text, exact formulas, and tables. Native controls and keyboard-scrollable regions support the interaction without animation. Optional notes remain only while the workshop is mounted; copy them to retain them.

Following the same physical projection through the coordinate conversions gives

$$
M_s=P_s^{-1}\\Pi P_s=\\begin{pmatrix}1&s\\\\0&0\\end{pmatrix}.
$$

This array is nonsymmetric when $s\\ne0$. That observation alone does not establish whether the physical operation stopped being orthogonal projection. To answer, first determine what physical distance looks like in these coordinates.

## Carry the inner product with the coordinates

For coordinate columns $c,d$, the physical inner product becomes

$$
(P_sc)^T(P_sd)=c^TG_sd,\\qquad
G_s=P_s^TP_s=\\begin{pmatrix}1&s\\\\s&1+s^2\\end{pmatrix}.
$$

The matrix $G_s$ is called the Gram matrix of the chosen basis. Its squared norm is

$$\\|c\\|_{G_s}^2=(c_1+sc_2)^2+c_2^2.$$

This is positive for every nonzero $c$: if both squares vanish, $c_2=0$ and then $c_1=0$. Thus $G_s$ defines an inner product for every real shear. No rounding threshold or numerical positivity test is needed.

Projecting a coordinate vector $c$ onto the coordinate horizontal axis means finding the best $(a,0)$. In the transported metric,

$$
\\|c-(a,0)\\|_{G_s}^2
=(c_1+sc_2-a)^2+c_2^2.
$$

The unique minimizing coefficient is $a=c_1+sc_2$, exactly the first coordinate of $M_sc$. Reconstructing gives $P_sM_sc=\\Pi P_sc$, so this is the original physical nearest point for every input.

If you instead declare the coordinate metric to be the identity, the cost becomes $(c_1-a)^2+c_2^2$. Its minimizer is $a=c_1$, with projector

$$E=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}.$$

Both calculations are correct for their declared metrics. Using $E$ in sheared coordinates generally changes the physical nearest-point problem. Decide whether you intend to preserve the original geometry or deliberately adopt another one.

At $s=1$, the physical input $(0,1)$ has coordinates $c=(-1,1)$. The transported projection is $M_1c=0$. The coefficient-Euclidean projection is $Ec=(-1,0)$, representing the physical point $(-1,0)$. Their squared physical errors are 1 and 2. Their squared coefficient-Euclidean errors are 2 and 1. A smaller number in a different loss does not demonstrate improvement in the original problem.

## Certify the projector for every input

Both candidates satisfy $K^2=K$ and have the coordinate horizontal axis as their image. Idempotence says applying the map twice changes nothing after the first application. It does not specify perpendicularity.

For a symmetric positive-definite metric $H$, a matrix $K$ is self-adjoint when

$$K^TH=HK.$$

Together with $K^2=K$, this certifies orthogonal projection onto its image. Indeed, if $u=Kz$ is in the image, then

$$
\\langle c-Kc,u\\rangle_H
=(c-Kc)^THKz
=(c-Kc)^TK^THz
=(Kc-K^2c)^THz=0.
$$

The residual is perpendicular to every image vector. Conversely, an orthogonal projector has this self-adjointness identity, by decomposing inputs into image and perpendicular components. Its nearest-point property follows from the perpendicular decomposition of any competing error.

For the shear family, exact multiplication gives

$$M_s^2=M_s,\\qquad M_s^TG_s=G_sM_s.$$

These are whole-matrix identities for all real $s$. In the identity metric, $E$ passes the corresponding tests. The other combinations fail self-adjointness when $s\\ne0$. At $s=0$, the matrices and metrics coincide; recognize this boundary instead of forcing a failure verdict.

A zero input makes every linear candidate return zero. An input already on the horizontal axis also makes these two candidates agree. Neither probe can establish a universal rule. Inspect the entire difference $K^TH-HK$, then use its entries or the cost formula to explain a counterexample. The instrument's bounded examples illustrate these algebraic statements; they do not replace their all-real proofs.

## Change the vector space and its geometry

Consider formal polynomials $P_2(\\mathbb R)$ of degree at most two. Define

$$\\langle p,q\\rangle=p(-1)q(-1)+p(0)q(0)+p(1)q(1).$$

Predict the nearest multiple of $1+x$ to $x^2$. Write your prediction before using either polynomial geometry in the instrument. A polynomial coefficient list and a list of sampled values are different records; ordinary Euclidean distance between coefficients is one possible geometry, while the displayed sample rule declares another.

The sample rule is positive definite on this domain. If $p=a+bx+cx^2$ has zero squared norm, its three sampled values vanish. The value at zero gives $a=0$; the values at $1$ and $-1$ give $b+c=0$ and $-b+c=0$, forcing $b=c=0$. Therefore only the zero polynomial has zero norm. This proof uses the degree bound and real arithmetic.

In monomial coefficient coordinates its Gram matrix is

$$H=\\begin{pmatrix}3&0&2\\\\0&2&0\\\\2&0&2\\end{pmatrix}.$$

For example, the off-diagonal entry $\\langle1,x^2\\rangle=2$ shows why these coefficient axes are not perpendicular in the declared geometry. Consequently the coefficient projection onto $(1,1,0)$ cannot silently substitute for projection onto $1+x$ in the sample norm.

## The adjoint needs normalization to give a projection

Let $J:\\mathbb R\\to P_2(\\mathbb R)$ send $a$ to $a(1+x)$, using the ordinary metric on its one-dimensional domain. Its vector matrix is $j=(1,1,0)^T$. Its metric adjoint satisfies

$$J^\\dagger=j^TH=(3,2,2),\\qquad J^\\dagger J=5.$$

The adjoint takes a polynomial vector and measures its inner product with $1+x$. It is neither an inverse nor automatically the best coefficient. Since $1+x$ has squared norm 5, divide by 5 to obtain that coefficient. The full projector is

$$
R=J(J^\\dagger J)^{-1}J^\\dagger
=\\frac15\\begin{pmatrix}3&2&2\\\\3&2&2\\\\0&0&0\\end{pmatrix}.
$$

It satisfies $R^2=R$ and $R^TH=HR$ for every polynomial coefficient column. Applied to $x^2$, it gives $\\frac25(1+x)$. Independently, evaluate the error at the three sample points:

$$
\\|x^2-a(1+x)\\|_H^2
=1+a^2+(1-2a)^2
=\\frac65+5\\left(a-\\frac25\\right)^2.
$$

This proves the unique minimizing coefficient and squared error without relying on a matrix recipe. Coefficient-Euclidean geometry gives coefficient zero instead; its squared error in the declared sample geometry is 2. Using $JJ^\\dagger$ without normalization gives coefficient 2 and sample squared error 14. Each calculation must name both its geometry and the role of its map.

An optional connection with the [dual-coordinate workshop](#/item/visual-lab-dual-coordinates) can be stated precisely. For a real coordinate map $M$ between spaces with Gram matrices $G_V,G_W$, an output vector first defines an output functional through $G_W$. The algebraic transpose pulls that functional back; $G_V^{-1}$ converts it into an input vector. The adjoint matrix $N$ therefore satisfies

$$G_VN=M^TG_W,\\qquad N=G_V^{-1}M^TG_W.$$

This follows from the defining identity $\\langle Mc,d\\rangle_W=\\langle c,Nd\\rangle_V$ for every $c,d$. It explains the Gram factors; no inner product was needed for the algebraic transpose itself.

## Exercises

Attempt all six before reading their solutions.

1. **Change the shear and input.** Take $s=-1/2$ and physical input $(2,-2)$. Find its coordinates, the two projected physical points, and their squared physical errors. Which candidate preserves the original Euclidean problem? **Hint:** convert the input with $P_s^{-1}$ before applying either coordinate matrix.
2. **Audit every geometry choice.** For each pair $(H,K)=(G_s,M_s),(G_s,E),(I,M_s),(I,E)$, determine when $K$ is an $H$-orthogonal projector. Explain why agreement at zero, at $(1,0)$ in coordinates, or at shear zero cannot settle all other cases. **Hint:** compute $K^TH-HK$.
3. **Change the polynomial target.** For arbitrary $p=a+bx+cx^2$, find its nearest multiple of $1+x$ in the sample norm. Check your answer on $p=1-2x+x^2$. Explain why applying $J^\\dagger$ alone is insufficient. **Hint:** distinguish a coefficient from a polynomial and remember $J^\\dagger J$.
4. **Change the target line.** In the same sampled space, project $x$ onto $\\operatorname{span}(1-x)$. Find the minimizing coefficient and complete squared-error formula. **Hint:** use the three sample values of both polynomials.
5. **Change the domain.** Extend the same sample rule to $P_3(\\mathbb R)$. Does it remain an inner product? Does the nearest multiple of $1+x$ to $x^2$ lose its unique coefficient? Next enlarge the target to $\\operatorname{span}(1+x,x^3-x)$ and find every minimizer. What values can these approximants take at 2? **Hint:** separate invisible directions in the ambient space from invisible directions inside the target.
6. **Deliberately change the metric.** Give the samples at $-1,0,1$ weights $1,1,2$ respectively. Find the nearest multiple of $1+x$ to $x^2$, its minimum weighted squared error, and the new Gram matrix. **Hint:** write the weighted scalar cost before forming matrices.

## Solutions

### Exercise 1

The coordinate column is $(1,-2)$, since $x-sy=2-1=1$. Applying $M_{-1/2}$ gives $(2,0)$, representing physical $(2,0)$. Applying $E$ gives $(1,0)$, representing physical $(1,0)$. Their squared physical errors are 4 and 5. The transported calculation preserves the original nearest point. The squared coefficient-Euclidean errors are instead 5 and 4, confirming that the competing geometry changed what was minimized.

### Exercise 2

Both candidates are idempotent with the required image. The self-adjointness differences, in the listed order, are

$$
0,\\qquad
\\begin{pmatrix}0&s\\\\-s&0\\end{pmatrix},\\qquad
\\begin{pmatrix}0&-s\\\\s&0\\end{pmatrix},\\qquad0.
$$

Thus $M_s$ is always orthogonal for $G_s$, and $E$ always for $I$. The crossed choices work exactly when $s=0$. Both candidates return zero at zero and fix $(1,0)$, so those input probes cannot distinguish them. At shear zero they are the same matrix for every probe, but that special case does not prove interchangeability for nonzero shears.

### Exercise 3

The coefficient is $\\alpha=(3a+2b+2c)/5$, and the nearest polynomial is $\\alpha(1+x)$. This follows from $J^\\dagger p=3a+2b+2c$ followed by division by $J^\\dagger J=5$. For $p=1-2x+x^2$, the coefficient is $1/5$. The unnormalized adjoint gives 1, which measures an inner product without accounting for the target direction's squared length.

### Exercise 4

The samples of $x$ are $(-1,0,1)$, and those of $1-x$ are $(2,1,0)$. Thus

$$
\\|x-a(1-x)\\|_H^2=(-1-2a)^2+a^2+1
=\\frac65+5\\left(a+\\frac25\\right)^2.
$$

The nearest polynomial is $-\\frac25(1-x)$. This line's adjoint row is $(3,-2,2)$, rather than the row for $1+x$; the geometry remains fixed while the target changes.

### Exercise 5

The nonzero polynomial $q=x^3-x$ has zero samples, so the form is degenerate on $P_3$ and is not an inner product. Nevertheless, the cost restricted to multiples of $1+x$ remains $6/5+5(a-2/5)^2$. That coefficient is still unique because this particular target line contains no nonzero invisible polynomial.

In the enlarged target, every $a(1+x)+tq$ has the same samples as $a(1+x)$. Therefore all and only the minimizers are

$$\\frac25(1+x)+t(x^3-x),\\qquad t\\in\\mathbb R.$$

Their value at 2 is $6/5+6t$, which ranges over all real numbers despite identical sampled errors. A certificate about these three measurements does not control an unsampled value.

### Exercise 6

The new cost is

$$1+a^2+2(1-2a)^2=\\frac{11}{9}+9\\left(a-\\frac49\\right)^2.$$

Thus the nearest polynomial is $\\frac49(1+x)$ with minimum weighted squared error $11/9$. Its Gram matrix and line adjoint are

$$
H_w=\\begin{pmatrix}4&1&3\\\\1&3&1\\\\3&1&3\\end{pmatrix},
\\qquad J^\\dagger_w=(5,4,4),\\qquad J^\\dagger_wJ=9.
$$

The coefficient $4/9$ agrees with the scalar minimization. This deliberately changes the geometric importance of one observation. Comparing $11/9$ with $6/5$ does not compare two errors under the same loss.

## Sources and continuation

[Axler, *Linear Algebra Done Right*, Sections 6C and 7A](https://linear.axler.net/LADR4e.pdf) develops orthogonal projection and the adjoint; Theorem 7.9 explicitly requires orthonormal bases for the conjugate-transpose matrix rule. [Narcowich's coordinate-Gram and projection assignments](https://people.tamu.edu/~f-narcowich/m641/f13/m641f13_hw.html) connect transported coordinate geometry to Gram systems.

[Wolfram's Projection documentation](https://reference.wolfram.com/language/ref/Projection.html) allows an explicit inner-product function in \`Projection[u,v,f]\`. That makes the geometry an input to the computation. For the shear example, supplying the real function $f(a,b)=a^TG_sb$ expresses the transported problem; using the ordinary dot product expresses coefficient geometry. The workshop embeds no Mathematica runtime and makes no claim to have executed those commands.

Continue to the Atlas [inner-product chapter](#/item/book-linear-algebra-structure-proofs?chapter=inner-products-orthogonal-decomposition) for Gram systems and the [adjoint chapter](#/item/book-linear-algebra-structure-proofs?chapter=adjoints-unitary-positive-operators) for the general theory. Preserve the distinction that drove every calculation here: a coordinate change transports a fixed physical question, while a metric replacement specifies another question.
`;export{e as default};