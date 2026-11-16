var e=`---
parent_id: book-numerical-mathematics-error-algorithms
chapter_id: orthogonal-minimax-approximation
title: "Orthogonal, Weighted, and Minimax Approximation"
level: advanced-undergraduate
status: draft
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Orthogonal, Weighted, and Minimax Approximation

## Purpose and local prerequisites

Interpolation forces agreement at selected nodes. Approximation instead chooses
a function from a finite family to make an error small under a declared measure.
This chapter assumes polynomial interpolation, elementary integration, vectors, and inner products. It develops discrete least squares as well as continuous approximation. All intervals used for polynomial equioscillation satisfy $a<b$. It develops two complementary geometries:

- an inner-product norm measures average squared error and leads to orthogonal
  projection;
- the uniform norm measures the worst pointwise error and leads to minimax
  approximation and alternation.

Neither objective is universally “best.” A small average error can conceal a
large localized miss. A small maximum error may spend effort where the
application assigns little weight. The norm is part of the mathematical
problem, not a decoration added after computing coefficients.

## Weighted inner products and norms

Let \\(w\\) be integrable on \\([a,b]\\), with \\(w(x)>0\\) almost everywhere. For real
continuous functions define

\\(\\langle f,g\\rangle_w = \\int_a^b f(x)g(x)w(x) dx\\)

and \\(\\lVert f\\rVert_{2,w}=\\sqrt{\\langle f,f\\rangle_w}\\). Positivity almost everywhere matters: it makes
zero norm imply that a continuous function is identically zero. If a weight
vanishes on an entire subinterval, functions differing only there cannot be
distinguished by this expression.

Functions \\(\\phi_0,\\ldots,\\phi_n\\) are orthogonal when
\\(\\langle \\phi_i,\\phi_j\\rangle_w=0\\) for \\(i\\ne j\\). They are orthonormal when their squared norms are
also one. Orthogonality converts a coupled least-squares system into independent
coefficient calculations.

## Projection theorem in a finite-dimensional space

Let \\(V=\\operatorname{span}\\{\\phi_0,\\ldots,\\phi_n\\}\\) inside an inner-product space. The best
least-squares approximation \\(p \\in V\\) is characterized by

\\(\\langle f-p,v\\rangle_w=0\\) for every \\(v \\in V\\).

**Theorem 5.2 (orthogonal projection).** If \\(V\\) is finite dimensional, then for each
\\(f\\) there is a unique \\(p \\in V\\) satisfying the orthogonality equations, and this
\\(p\\) uniquely minimizes \\(\\lVert f-v\\rVert_{2,w}\\) over \\(v \\in V\\).

**Proof.** Choose a basis and solve the Gram system

\\(G c=d\\), where \\(G_{ij}=\\langle \\phi_j,\\phi_i\\rangle_w\\) and \\(d_i=\\langle f,\\phi_i\\rangle_w\\).

For nonzero coefficient vector \\(z\\),
\\(z^{\\mathsf T} G z=\\lVert \\sum_j z_j \\phi_j\\rVert^{2}>0\\); hence \\(G\\) is positive definite and the
coefficients exist uniquely. For any \\(v \\in V\\), write

\\(f-v=(f-p)+(p-v)\\).

The two terms are orthogonal, so the Pythagorean identity gives

\\(\\lVert f-v\\rVert^{2}=\\lVert f-p\\rVert^{2}+\\lVert p-v\\rVert^{2}\\).

The second term is nonnegative and vanishes only when \\(v=p\\). This proves unique
optimality.

If the basis is orthogonal, the coefficients are simply

\\(c_k=\\langle f,\\phi_k\\rangle_w/\\langle \\phi_k,\\phi_k\\rangle_w\\).

This formula is both a theorem and an algorithmic hint. Computing inner
products inaccurately or evaluating a high-degree expansion in an unstable way
can still spoil the projection.

### Worked example: project \\(x^{2}\\) onto lines

**Example 5.0 (Projecting a quadratic onto lines).**

Use weight one on \\([-1,1]\\) and \\(V=\\operatorname{span}\\{1,x\\}\\). Write \\(p(x)=a+bx\\). Orthogonality
requires

\\(\\int_{-1}^{1} (x^{2}-a-bx) dx=0\\),

\\(\\int_{-1}^{1} x(x^{2}-a-bx) dx=0\\).

Odd integrands vanish. The first equation gives \\(2/3-2a=0\\), so \\(a=1/3\\).
The second gives \\(-b \\int_{-1}^{1} x^{2} dx=0\\), so \\(b=0\\). Thus the best
least-squares line is the constant \\(1/3\\).

The residual \\(x^{2}-1/3\\) is orthogonal to both basis functions. Its maximum
absolute error is \\(2/3\\) at the endpoints, which reminds us that least squares
did not optimize the worst pointwise miss.

## Classical orthogonal polynomial families

Applying Gram–Schmidt to \\(1,x,x^{2},\\ldots\\) produces orthogonal polynomials, but the
monomial basis can be numerically poor. Classical families supply recurrences
and known weights:

- Legendre polynomials are orthogonal on \\([-1,1]\\) with weight one;
- Chebyshev polynomials \\(T_k(x)=\\cos(k \\arccos x)\\) are orthogonal with weight
  \\(1/\\sqrt{1-x^{2}}\\);
- other weights emphasize endpoints, half-lines, or nonnegative axes.

The three-term recurrence

\\(T_{k+1}(x)=2xT_k(x)-T_{k-1}(x)\\), with \\(T_0=1\\), \\(T_1=x\\),

evaluates the family without forming monomial coefficients. For a whole series,
Clenshaw's backward recurrence is the analogue of Horner evaluation and often
has better numerical behavior than expanding into powers.

**Conditioning distinction.** An orthogonal basis makes the exact Gram matrix
diagonal under its matching inner product. If the needed integrals are replaced
by a sampled rule, the discrete Gram matrix need not be exactly diagonal.
Aliasing, quadrature error, and scaling must be audited separately.

## Truncation, coefficient decay, and what it proves

An orthogonal expansion has coefficients \\(c_k\\). Truncating after degree \\(n\\)
gives the best projection in the chosen subspace. Smoothness often produces
rapid coefficient decay; singularities or corners slow it. Observed decay is a
diagnostic, not automatically a rigorous tail bound. A valid bound needs a
theorem connecting the function class to coefficient decay or a verified
estimate for the omitted tail.

A suspicious pattern is decay to a plateau near the arithmetic noise floor.
Keeping more terms can then fit quadrature or rounding noise rather than the
function. Compare coefficients under increased quadrature resolution and
precision before interpreting them as mathematical structure.

## Uniform approximation

For continuous \\(f\\) on \\([a,b]\\), define

\\(\\lVert f\\rVert_\\infty=\\max_{x \\in [a,b]} \\lvert f(x)\\rvert\\).

The maximum exists by compactness and continuity. A degree-\\(n\\) minimax
polynomial minimizes \\(\\lVert f-p\\rVert_\\infty\\) over all polynomials of degree at most
\\(n\\).

**Theorem 5.3 (Existence).** For continuous \\(f\\) on a compact interval, a best uniform
polynomial of degree at most \\(n\\) exists.

**Reason.** Any candidate worse than zero can be discarded, so restrict to a
bounded error sublevel set. Evaluation at \\(n+1\\) distinct points controls the
finite coefficient vector, making the relevant coefficient set bounded. A
convergent subsequence then has a polynomial limit, and the uniform norm is
continuous in the coefficients. Compactness of the interval and finite
dimension are material hypotheses.

Uniqueness follows from the alternation theorem below. For more general
approximation families, existence or uniqueness can fail.

## Alternation theorem

**Theorem 5.5 (polynomial equioscillation; necessity cited).** Let \\(f\\) be continuous on \\([a,b]\\).
A polynomial \\(p_{*}\\) of degree at most \\(n\\) is the unique best uniform
approximation if and only if there are \\(n+2\\) ordered points

\\(a\\le x_0<x_1<\\ldots<x_{n+1}\\le b\\)

at which the error \\(e=f-p_{*}\\) takes alternating values \\(\\sigma(-1)^i E\\), where
\\(\\sigma\\) is \\(1\\) or \\(-1\\) and \\(E=\\lVert e\\rVert_\\infty\\).

The necessity direction is the deep part: if the extremes do not alternate
enough, a degree-\\(n\\) perturbation can reduce the largest error. The sufficiency
direction is short and reveals the certificate.

**Proof of sufficiency.** Suppose another degree-\\(n\\) polynomial \\(q\\) has smaller
uniform error. At each alternating point, \\(q-p_{*}\\) must have the same sign as
\\(e(x_i)\\): otherwise subtracting \\(q-p_{*}\\) would not move the magnitude strictly
below \\(E\\). Therefore \\(q-p_{*}\\) alternates sign between each adjacent pair. It has
at least \\(n+1\\) distinct zeros, impossible for a nonzero polynomial of degree at
most \\(n\\). The zero polynomial also cannot give strictly smaller error. Hence no
better \\(q\\) exists. Uniqueness requires an additional weak-sign argument, supplied below; it does not follow by simply treating weak signs as strict sign changes.

### Worked example: the best line for \\(x^{2}\\)

**Example 5.5 (The uniform best line for a quadratic).**

On \\([-1,1]\\), symmetry suggests the best line has zero slope. More rigorously, if
\\(a+bx\\) is best, averaging it with its reflection \\(a-bx\\) gives the constant \\(a\\)
and cannot increase the uniform error by convexity of the norm. Seek a constant
\\(a\\). The endpoint error is \\(1-a\\); the center error is \\(-a\\). Balancing their
magnitudes gives \\(1-a=a\\), hence \\(a=1/2\\).

The error \\(x^{2}-1/2\\) equals \\(+1/2\\) at \\(-1\\), \\(-1/2\\) at zero, and \\(+1/2\\) at one.
These are three alternating extremes, exactly \\(n+2\\) for degree \\(n=1\\).
Therefore the best uniform line is \\(1/2\\), with error \\(1/2\\). Compare this with
the least-squares constant \\(1/3\\): different norms answer different questions.

## Chebyshev's monic minimax property

For \\(n\\ge 1\\), \\(T_n\\) has leading coefficient \\(2^{n-1}\\) and satisfies
\\(\\lvert T_n(x)\\rvert\\le 1\\) on \\([-1,1]\\). Therefore

\\(2^{1-n}T_n(x)\\)

is monic and has uniform norm \\(2^{1-n}\\). It is the unique monic degree-\\(n\\)
polynomial of smallest uniform norm.

To see the certificate, note that \\(T_n\\) alternates between \\(+1\\) and \\(-1\\) at the
\\(n+1\\) extrema \\(\\cos(k \\pi/n)\\). If another monic polynomial had smaller norm, their
difference would have degree at most \\(n-1\\) but would need at least \\(n\\) zeros by
the alternating-sign argument. This is impossible. The result explains why
Chebyshev geometry controls interpolation products and why equally spaced
high-degree interpolation can be fragile.

## Weighted and relative objectives

A weighted uniform objective has the form

\\(\\max_x \\omega(x)\\lvert f(x)-p(x)\\rvert\\),

with positive weight \\(\\omega\\). A weight can emphasize a region or approximate a
relative error. If \\(\\omega=1/\\lvert f\\rvert\\), zeros of \\(f\\) cause singular behavior; a
relative objective must specify a safe scale such as
\\(\\max(\\lvert f(x)\\rvert,\\tau)\\). Choosing \\(\\tau\\) changes the problem and must be reported.

Weights derived from data density answer an average-frequency question, not
necessarily a safety-critical worst-case question. Unit changes can also alter
an unscaled objective. Normalize only after declaring which physical or
mathematical errors should be comparable.

## From alternation to computation

The Remez exchange idea begins with \\(n+2\\) candidate points, solves for a
polynomial and alternating error level, locates larger extrema of the residual,
and exchanges points. Under suitable conditions it converges to the minimax
solution. A program needs safeguards:

- extrema must be searched reliably rather than on one coarse plotting grid;
- nearly duplicate exchange points make the linear system ill conditioned;
- termination must compare a verified or carefully bounded upper error with
  the alternating lower certificate;
- nonsmooth targets and finite precision can make apparent extrema unstable.

A sampled maximum is a lower bound on the continuous maximum, not an upper
bound. Missing a narrow peak can produce false confidence.

## Failure diagnostics

- **Interpolation called best approximation:** node agreement says nothing
  about optimality in an unspecified norm.
- **Normal equations in a poor basis:** squaring the condition number can erase
  the theoretical benefit of least squares.
- **Tiny high-order coefficients:** their significance depends on basis,
  scaling, and coefficient-computation error.
- **Alternating values seen on a plot:** the theorem requires global magnitude
  control and ordered extremes, not pixels that look even.
- **Relative error near a zero:** dividing by the target creates a singular
  objective unless a convention is stated.
- **Chebyshev is always best:** Chebyshev points and bases solve specific
  polynomial problems; other domains, weights, regularity, and objectives need
  different structure.

## Discrete least squares: existence, normal equations, and rank

**Theorem 5.1 (Weighted normal equations).** Let $A\\in\\mathbb R^{m\\times p}$, let $y\\in\\mathbb R^m$, and let $W$ be diagonal with strictly positive entries. A coefficient vector $c$ minimizes $\\|W^{1/2}(Ac-y)\\|_2^2$ if and only if
\\[
A^{\\mathsf T}WA\\,c=A^{\\mathsf T}Wy.
\\]
A minimizer always exists. It is unique exactly when the columns of $A$ are linearly independent.

*Proof.* For any direction $h$, differentiation of the objective along $c+th$ gives derivative $2h^{\\mathsf T}A^{\\mathsf T}W(Ac-y)$ at $t=0$. A minimum therefore satisfies the normal equations. Conversely, if they hold, expansion gives
\\[
\\|W^{1/2}(A(c+h)-y)\\|_2^2
=\\|W^{1/2}(Ac-y)\\|_2^2+\\|W^{1/2}Ah\\|_2^2,
\\]
because the cross term vanishes. Hence such a vector is optimal. Existence follows by projecting $W^{1/2}y$ onto the finite-dimensional column space of $W^{1/2}A$, whose projection theorem was proved above. The projected vector is the image of at least one coefficient vector. If $A$ has full column rank, the final squared term is positive for every nonzero $h$, giving uniqueness. If $A$ is rank deficient, any nonzero null vector can be added to a minimizer without changing its fitted values, so coefficients are not unique. ∎

The theorem distinguishes a unique fitted vector from unique coefficients. Positive weights do not repair linearly dependent model columns. They change the norm of the residual, and therefore the fitted vector, while a statistical interpretation of those weights requires a separate uncertainty model.

**Example 5.2 (A weighted line fit).** Fit $a+bx$ to $(0,0),(1,1),(2,0)$ with weights $1,2,1$. The weighted normal system is
\\[
\\begin{pmatrix}4&4\\\\4&6\\end{pmatrix}\\binom ab=\\binom22.
\\]
Subtracting the first equation from the second gives $2b=0$, hence $b=0$ and $a=1/2$. The data-minus-fit residual is $(-1/2,1/2,-1/2)$. Its weighted sum is zero, and its weighted dot product with the abscissas is also zero. The minimized weighted squared residual is $1$. Removing the doubled middle weight would give a different fit; an objective's weighting is mathematical input.

**Example 5.3 (Coefficients can be nonunique).** Let $A=\\begin{pmatrix}1&2\\\\2&4\\end{pmatrix}$ and $y=(1,0)^{\\mathsf T}$. Every fitted vector is $z(1,2)^{\\mathsf T}$, where $z=c_1+2c_2$. Projection onto that direction gives $z=[(1,2)y]/5=1/5$. Thus the fitted vector $(1/5,2/5)$ is unique, but every coefficient vector satisfying $c_1+2c_2=1/5$ is optimal. The minimum-Euclidean-norm choice is $(1/25,2/25)$: it lies along $(1,2)$ and meets the constraint. Choosing that coefficient convention does not turn the model into a full-rank one.

## Why normal equations can be the wrong numerical route

For full-column-rank $A=U\\Sigma V^{\\mathsf T}$, the eigenvalues of $A^{\\mathsf T}A$ are the squared singular values. Consequently
\\[
\\kappa_2(A^{\\mathsf T}A)=\\frac{\\sigma_{\\max}^2}{\\sigma_{\\min}^2}
=\\kappa_2(A)^2.
\\]
This is an exact conditioning identity, not a claim that every computation loses exactly twice as many digits. Forming the product adds rounding, and a nearly singular product can conceal a direction that the original matrix still resolves.

With a thin QR factorization $A=QR$, $Q^{\\mathsf T}Q=I$ and nonsingular upper-triangular $R$, the least-squares equations reduce to $Rc=Q^{\\mathsf T}y$. Indeed decompose $y=QQ^{\\mathsf T}y+(I-QQ^{\\mathsf T})y$. The residual has orthogonal components $Q(Rc-Q^{\\mathsf T}y)$ and $-(I-QQ^{\\mathsf T})y$, so its squared norm is minimized by setting the first to zero. Householder QR uses this geometry without explicitly constructing $A^{\\mathsf T}A$.

For fixed full-rank $A$, perturbing $y$ by $\\Delta y$ changes coefficients by $A^\\dagger\\Delta y$, where $A^\\dagger=(A^{\\mathsf T}A)^{-1}A^{\\mathsf T}$. The SVD gives $\\|A^\\dagger\\|_2=1/\\sigma_{\\min}(A)$, so $\\|\\Delta c\\|_2\\le\\|\\Delta y\\|_2/\\sigma_{\\min}$. Fitted values change by the orthogonal projector $QQ^{\\mathsf T}\\Delta y$, whose norm is at most $\\|\\Delta y\\|_2$. Sensitive coefficients can coexist with comparatively stable fitted values. Perturbing $A$ as well is a different analysis and is not covered by this fixed-design bound.

## A complete uniqueness argument for an alternating certificate

The strict sign-change argument above proves that no strictly better polynomial exists. Uniqueness also needs care, because an equally good competitor gives weak signs, not strict signs.

**Lemma 5.4 (Weak alternation forces equality).** Suppose $x_0<\\cdots<x_{n+1}$ and a polynomial $h$ of degree at most $n$ has weakly alternating signs there: $\\sigma(-1)^ih(x_i)\\ge0$ for all $i$, with fixed $\\sigma\\in\\{1,-1\\}$. Then $h$ is identically zero.

*Proof.* Interpolate $h$ using these $n+2$ nodes in the degree-at-most-$n+1$ Lagrange formula. Its $x^{n+1}$ coefficient is zero, giving
\\[
\\sum_{i=0}^{n+1}\\frac{h(x_i)}{\\prod_{j\\ne i}(x_i-x_j)}=0.
\\]
The denominator has sign $(-1)^{n+1-i}$. The assumed signs therefore make all nonzero summands have the same sign $\\sigma(-1)^{n+1}$. Their sum can vanish only if every summand vanishes. Thus $h$ has $n+2$ distinct zeros despite degree at most $n$, forcing $h=0$. ∎

If $p_*$ has error $E>0$ at the alternating extremes and $q$ has error at most $E$, then $h=q-p_*$ has precisely those weak signs: at a positive extreme $q-p_*\\ge0$, and at a negative extreme $q-p_*\\le0$. The lemma forces $q=p_*$. If $E=0$, any best approximant equals the target directly. This completes the sufficiency-and-uniqueness argument. Necessity of an alternating set remains an explicitly cited part of the general equioscillation theorem, not proved by this sign argument.

The same reasoning supplies uniqueness in the monic Chebyshev result: minimizing the norm of a monic degree-$n$ polynomial is equivalent to approximating $x^n$ by degree-at-most-$n-1$ polynomials. Its $n+1$ alternating extremes are the number required by that degree class. A finite grid showing alternating values supplies a certificate only after a genuine upper bound on the error throughout the interval is established.
## Practice with full solutions

### Exercise 5.1
<a id="orthogonal-minimax-approximation-ex-1"></a>

**Projection coefficient.**

Project \\(f(x)=x^{3}\\) onto
\\(\\operatorname{span}\\{1,x\\}\\) on \\([-1,1]\\) with weight one.

<details>
<summary>Hint 1</summary>

Use odd/even symmetry to eliminate one coefficient.

</details>
<details>
<summary>Hint 2</summary>

Divide the $x^4$ integral by the $x^2$ integral.

</details>
<details>
<summary>Solution</summary>

**Solution.** Odd/even symmetry makes \\(\\langle x^{3},1\\rangle=0\\), so the constant coefficient
is zero. The coefficient of \\(x\\) is
\\(\\langle x^{3},x\\rangle/\\langle x,x\\rangle=(\\int_{-1}^{1} x^{4} dx)/(\\int_{-1}^{1} x^{2} dx)=(2/5)/(2/3)=3/5\\).
Thus \\(p(x)=3x/5\\). The residual is orthogonal to both one and \\(x\\), which directly
checks the calculation.

</details>

### Exercise 5.2
<a id="orthogonal-minimax-approximation-ex-2"></a>

**Best constant in uniform norm.**

Let a continuous function have minimum
\\(m\\) and maximum \\(M\\) on a compact interval. Find its best constant uniform
approximation.

<details>
<summary>Hint 1</summary>

Any candidate constant must accommodate both attained extreme values.

</details>
<details>
<summary>Hint 2</summary>

Balance the two endpoint errors of the function's range.

</details>
<details>
<summary>Solution</summary>

**Solution.** For a constant \\(c\\), the maximum error is at least
\\(\\max(\\lvert M-c\\rvert,\\lvert m-c\\rvert)\\), because the function attains both endpoint values of its
range. Conversely every value of the function lies between \\(m\\) and \\(M\\), so
this maximum is the exact uniform error. The triangle inequality gives
\\(\\lvert M-c\\rvert+\\lvert c-m\\rvert\\ge M-m\\), and therefore the larger endpoint error is at least
\\((M-m)/2\\). At \\(c=(M+m)/2\\) both errors equal \\((M-m)/2\\), so this lower bound is
attained and the constant is optimal. The result needs the extrema to exist;
continuity on a compact interval supplies them.

</details>

### Exercise 5.3
<a id="orthogonal-minimax-approximation-ex-3"></a>

**Orthogonal residual identity.**

If \\(p\\) is the projection of \\(f\\) onto \\(V\\)
and \\(q \\in V\\), prove \\(\\lVert f-q\\rVert^{2}-\\lVert f-p\\rVert^{2}=\\lVert p-q\\rVert^{2}\\).

<details>
<summary>Hint 1</summary>

Decompose the error through the projection.

</details>
<details>
<summary>Hint 2</summary>

The cross term vanishes by orthogonality.

</details>
<details>
<summary>Solution</summary>

**Solution.** Write \\(f-q=(f-p)+(p-q)\\). The first term is orthogonal to every
element of \\(V\\), including \\(p-q\\). Expanding the squared norm cancels the cross
term and yields the identity. It is stronger than merely saying that \\(p\\) is
best: it quantifies the excess squared error of any competitor.

</details>

### Exercise 5.4
<a id="orthogonal-minimax-approximation-ex-4"></a>

**A false sampled certificate.**

Explain why checking
\\(\\lvert f(x_j)-p(x_j)\\rvert\\le 10^{-6}\\) at 1000 equally spaced points does not prove a uniform
error bound for every continuous \\(f\\).

<details>
<summary>Hint 1</summary>

Continuous functions need not have a known common derivative bound.

</details>
<details>
<summary>Hint 2</summary>

Imagine a narrow continuous peak between sample nodes.

</details>
<details>
<summary>Solution</summary>

**Solution.** A continuous residual can contain a narrow peak between adjacent
samples while remaining small at all sample points. Without a derivative,
modulus-of-continuity, interval, or structural bound, finite samples give only
information at those points. The observed maximum is a lower bound on the true
maximum. Increasing the number of samples reduces spacing but does not change
the logical gap for the class of all continuous functions.

</details>

### Exercise 5.5
<a id="orthogonal-minimax-approximation-ex-5"></a>

**Derive weighted normal equations.**

For a diagonal positive matrix $W$, derive the stationarity equations for $\\|W^{1/2}(Ac-y)\\|_2^2$.

<details>
<summary>Hint 1</summary>

Perturb the coefficient vector by $th$.

</details>
<details>
<summary>Hint 2</summary>

The coefficient of $t$ must vanish for every direction $h$.

</details>
<details>
<summary>Solution</summary>

**Solution.** Expansion gives directional derivative $2h^{\\mathsf T}A^{\\mathsf T}W(Ac-y)$. It vanishes for every $h$ exactly when $A^{\\mathsf T}WA c=A^{\\mathsf T}Wy$. The quadratic expansion in Theorem 5.1 proves this stationarity condition is also sufficient, without requiring full rank for optimality.

</details>

### Exercise 5.6
<a id="orthogonal-minimax-approximation-ex-6"></a>

**Conditioning a squared system.**

If a full-column-rank design has $\\kappa_2(A)=10^4$, find the exact condition number of its normal matrix.

<details>
<summary>Hint 1</summary>

Use the singular values of $A$.

</details>
<details>
<summary>Hint 2</summary>

The normal matrix has squared singular values as eigenvalues.

</details>
<details>
<summary>Solution</summary>

**Solution.** The condition number is $\\kappa_2(A)^2=10^8$. This warns about explicitly forming normal equations. It does not by itself compute a forward error, which also depends on data, arithmetic, and the solver.

</details>

### Exercise 5.7
<a id="orthogonal-minimax-approximation-ex-7"></a>

**A rank-deficient fit.**

For $A=\\begin{pmatrix}1&2\\\\2&4\\end{pmatrix}$ and $y=(1,0)^{\\mathsf T}$, describe all least-squares coefficient vectors.

<details>
<summary>Hint 1</summary>

Every fitted vector is $(c_1+2c_2)(1,2)^{\\mathsf T}$.

</details>
<details>
<summary>Hint 2</summary>

Project $y$ onto $(1,2)$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The optimal multiplier is $[(1,2)\\cdot(1,0)]/5=1/5$. Hence every pair with $c_1+2c_2=1/5$ is optimal and gives fitted vector $(1/5,2/5)$. The residual $(4/5,-2/5)$ is orthogonal to $(1,2)$, verifying the result.

</details>

### Exercise 5.8
<a id="orthogonal-minimax-approximation-ex-8"></a>

**An exact Chebyshev minimax polynomial.**

Find the monic degree-three polynomial of smallest uniform norm on $[-1,1]$ and its norm.

<details>
<summary>Hint 1</summary>

The leading coefficient of $T_3=4x^3-3x$ is four.

</details>
<details>
<summary>Hint 2</summary>

Scale the Chebyshev polynomial to make its leading coefficient one.

</details>
<details>
<summary>Solution</summary>

**Solution.** The answer is $x^3-3x/4=T_3/4$, with uniform norm $1/4$. Its four alternating extrema supply the monic minimax certificate, and the uniqueness argument in the chapter makes it the unique optimum in the monic class.

</details>

### Exercise 5.9
<a id="orthogonal-minimax-approximation-ex-9"></a>

**A zero in a relative objective.**

Why does minimizing $\\max_{[-1,1]}|f-p|/|f|$ require an additional convention for $f(x)=x$? What does replacing the denominator by $\\max(|f|,\\tau)$ do?

<details>
<summary>Hint 1</summary>

Inspect the denominator at zero.

</details>
<details>
<summary>Hint 2</summary>

A positive floor changes the objective near the target zero.

</details>
<details>
<summary>Solution</summary>

**Solution.** The original ratio is undefined at zero, even if numerator and denominator both vanish there. A positive $\\tau$ defines a finite scale and yields a different weighted uniform problem, with small-target errors measured relative to $\\tau$. The choice must be stated because it changes which errors are emphasized.

</details>

### Exercise 5.10
<a id="orthogonal-minimax-approximation-ex-10"></a>

**Fixed-design coefficient sensitivity.**

For a full-column-rank design with $\\sigma_{\\min}(A)=0.1$, bound the coefficient change caused by $\\|\\Delta y\\|_2\\le0.003$ when $A$ is unchanged.

<details>
<summary>Hint 1</summary>

The coefficient change is $A^\\dagger\\Delta y$.

</details>
<details>
<summary>Hint 2</summary>

The inverse singular scale is ten.

</details>
<details>
<summary>Solution</summary>

**Solution.** The change is at most $\\|A^\\dagger\\|_2\\|\\Delta y\\|_2\\le10(0.003)=0.03$. The fitted-value change is at most $0.003$ because it is an orthogonal projection. Neither statement includes uncertainty in the design matrix.

</details>


<a id="connections-and-summary"></a>
## Connections

Backward, the interpolation chapter supplies node geometry, splines, and
least-squares motivation. This chapter replaces node agreement by an explicit
norm and derives two exact certificates: orthogonality for squared error and
alternation for uniform error. Forward, the spectral-approximation prospectus
will connect coefficient decay to regularity and fast transforms, while the
quadrature chapter explains how coefficient integrals are approximated.

Before accepting an approximation, state the space, norm, weight, coefficient
algorithm, continuous-versus-sampled error distinction, and the theorem that
turns a diagnostic into a bound.

<a id="source-and-verification-note"></a>
## Sources

The earlier Euler chapter's projection and minimax examples, proofs, and four complete exercise solutions are retained. Further reading: Åke Björck, [Numerical Methods for Least Squares Problems](https://epubs.siam.org/doi/book/10.1137/1.9781611971484), SIAM, 1996; NIST [DLMF §3.11](https://dlmf.nist.gov/3.11); and Lloyd N. Trefethen, [Approximation Theory and Approximation Practice, extended edition](https://epubs.siam.org/doi/book/10.1137/1.9781611975949), SIAM, 2019, Chapter 10 for the cited full equioscillation characterization. The chapter proves its normal-equation, projection, and uniqueness claims directly. The original references to Cheney and Rivlin are retained as further reading without inventing a printing-specific locator. Links consulted 13 November 2026. Original Euler prose is licensed CC BY-SA 4.0.

## Summary

Least squares is a projection problem in a specified weighted norm. Normal equations characterize every minimizer, while full column rank is what makes coefficients unique. QR preserves the geometry without squaring the design's condition number through an explicitly formed normal matrix. Uniform approximation uses a different certificate: alternating extremes. The sign argument proves optimality, and a separate weak-sign interpolation identity proves uniqueness; the necessity part of the general theorem is cited. Weights, rank thresholds, sampling, and coefficient errors remain part of the problem specification.
`;export{e as default};