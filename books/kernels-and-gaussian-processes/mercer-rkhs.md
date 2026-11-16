
# Mercer Expansions and Reproducing-Kernel Hilbert Spaces

## A deterministic function space associated with a kernel

A positive-semidefinite kernel has two complementary constructions. It can be a covariance for Gaussian coordinate laws, or it can define a deterministic Hilbert space of functions with continuous evaluation. This chapter builds the latter from the finite Gram condition. The later Gaussian-process chapters construct probability laws separately, so a function-space norm is not mistaken for a probability density on all paths.

The abstract construction requires elementary inner-product completion and Cauchy-Schwarz. The Mercer section additionally assumes a compact metric input space, a finite Borel measure with full support, and continuous kernel values. It uses the compact self-adjoint spectral theorem and Arzela-Ascoli as explicitly named analysis inputs, prepared in [Functional Analysis](#/books/functional-analysis) and [Real Analysis](#/books/proof-safe-real-analysis). The argument then proves the continuous uniform kernel expansion rather than inferring it from a merely square-integrable expansion.

**Theorem 3.1 (RKHS construction and uniqueness).** Every real positive-semidefinite kernel determines a reproducing-kernel Hilbert space by the following construction, uniquely under its natural function-preserving isometry. For an input x write $k_x(z)=k(z,x)$. On finite linear combinations of such sections define
$$
\left\langle\sum_i a_i k_{x_i},\sum_jb_j k_{z_j}\right\rangle
=\sum_{i,j}a_ib_jk(x_i,z_j).
$$
The form is nonnegative on the diagonal by kernel validity. Cauchy-Schwarz for this semidefinite form follows by requiring the quadratic form of one vector plus any real multiple of another to stay nonnegative. Zero-norm formal combinations consequently pair to zero with every section and evaluate to zero everywhere. Conversely a finite combination that is the zero function pairs to zero with every section and hence with itself. Thus the quotient by zero norm can be identified consistently with actual functions.

## Completing the space without losing evaluation

The defining inner product gives $f(x)=\langle f,k_x\rangle$ on the finite span. Cauchy-Schwarz therefore gives
$$
|f(x)|\le\|f\|\sqrt{k(x,x)}.
$$
Every norm-Cauchy sequence in that span is pointwise Cauchy at each input, so its completion defines a function by those limits. The limit evaluation is independent of the representative sequence because the same bound controls differences. It still equals the inner product with the section.

**Definition 3.2 (Reproducing-kernel Hilbert space).** A Hilbert space of real functions has reproducing kernel k when each section belongs to the space and inner product with that section evaluates the function at its input. The representation is injective: an element whose resulting function is zero has zero inner product with every section, and hence with their dense span, so it is the zero Hilbert element. We have constructed a reproducing-kernel Hilbert space, H, in which point evaluation is a bounded linear functional and k is its reproducing kernel. This is the Moore-Aronszajn construction with the quotient and completion steps explicit.

It is unique in its natural sense. In any other Hilbert function space with the same reproducing kernel, finite section combinations have exactly the displayed inner products. Their span is dense because a function orthogonal to every section vanishes at every input. The identity on finite combinations therefore extends to a unique isometric identification of the completed spaces. The kernel determines a Hilbert geometry, not just a list of convenient basis functions.

For a finite feature representation, redundant feature directions disappear in this construction. A function represented by several coefficient vectors receives the smallest compatible feature norm, rather than a separate norm for each representation. This connects the redundant-weight example in Chapter 1 to a genuine space of functions. It also explains why an arbitrary coefficient vector is not always uniquely determined by its represented function.

## Worked example 1: a two-point RKHS

**Example 3.3 (a two-point RKHS).** On a two-element input set use Gram matrix $K=\begin{pmatrix}1&r\\r&1\end{pmatrix}$ with absolute r below one. Every function is a vector of two values and has norm squared $f^TK^{-1}f$. Indeed writing the function as K times section coefficients gives its section norm as coefficient transpose K times coefficient, which reduces to that expression.

For the contrast function $(1,-1)$ the norm squared is $2/(1-r)$. As r approaches one, the kernel increasingly penalizes differences between the two values. At r equal to one the space collapses to constant functions and that contrast is excluded. This is not an infinite penalty computed from an ordinary inverse at the endpoint; the singular kernel defines a smaller function space by the quotient construction.

More generally on a finite set with a singular Gram matrix, the RKHS consists of vectors in its range and their norm is the minimum coefficient quadratic norm, expressible using its spectral pseudoinverse on that range. An arbitrary vector outside the range is not an RKHS function. The support restriction is part of the statement, unlike an unqualified replacement of inverses in a probability formula.

## Continuity and compact inclusion

Now assume a compact metric input space and continuous real kernel. The section map into H is norm-continuous because
$$
\|k_x-k_z\|_H^2=k(x,x)+k(z,z)-2k(x,z).
$$
Every RKHS function is continuous by its evaluation inner product. Moreover the unit ball is uniformly bounded by the maximum square root diagonal and uniformly equicontinuous by the section-difference bound. Arzela-Ascoli makes its image relatively compact in continuous functions under the uniform norm.

Let mu be a finite Borel measure assigning positive mass to every nonempty open set. Inclusion J from H into L2 of mu is bounded by the diagonal bound and total measure, and compact by the preceding uniform compactness. It is injective: a continuous function zero almost everywhere must be zero everywhere, since a nonzero value would remain bounded away from zero on a nonempty open neighborhood with positive measure.

The Hilbert adjoint J star exists by the Riesz representation theorem for bounded linear functionals. Define C equal to J star J on H. It is compact, self-adjoint and positive, and its kernel is trivial because its quadratic form is the squared L2 norm of J f. The kernel-section span is separable here: choose a countable dense input set and use section continuity to approximate every section. Thus the compact self-adjoint spectral theorem gives a finite or countable orthonormal basis e j of H with strictly positive eigenvalues lambda j. The zero kernel is the trivial empty-basis case.

## A full Mercer uniform expansion from that spectral input

**Theorem 3.4 (Mercer expansion).** Under the compact-metric, continuous-kernel and finite-full-support-measure assumptions of the preceding section, the positive eigenfunctions give the uniformly absolutely convergent expansion below. Put $\varphi_j=e_j/\sqrt{\lambda_j}$ as actual continuous functions. The eigenvector identity shows these are orthonormal in L2 of mu. The integral operator T with kernel k equals J J star: testing J star against a section gives its value as the integral of k times the input function. Hence T phi j equals lambda j times phi j. Its remaining L2 directions, if any, lie in the operator's null space; positive eigenfunctions need not span every L2 function.

Expand the section k x in the orthonormal H basis. Its coefficient at e j is e j at x by reproduction. Parseval gives
$$
k(x,z)=\sum_j e_j(x)e_j(z)=\sum_j\lambda_j\varphi_j(x)\varphi_j(z),\qquad
\sum_je_j(x)^2=k(x,x).
$$
The series is absolutely convergent at each pair by Cauchy-Schwarz. To strengthen it to uniform convergence, define the diagonal tail $r_N(x)=k(x,x)-\sum_{j\le N}e_j(x)^2$. It is continuous, nonnegative and decreases pointwise to zero. Dini's theorem on the compact input space gives uniform convergence of that diagonal tail. Dini's finite-cover proof follows by considering the increasing open sets where the tail is below a fixed epsilon; compactness selects one sufficiently late set covering the whole space.

For any two inputs the absolute series tail is bounded by the square root of the two diagonal tails. Their uniform disappearance therefore proves uniform absolute convergence of the Mercer expansion on the product space. This step is stronger than L2 spectral convergence and is why compactness and continuity were retained in the theorem's hypotheses.

Tonelli applied to the nonnegative diagonal terms gives $\sum_j\lambda_j=\int k(x,x)\,\mu(dx)$, finite by bounded diagonal and finite measure. A function with coefficients a j in the continuous eigenfunctions belongs to H precisely when $\sum_j a_j^2/\lambda_j$ is finite, and that sum is its squared norm. This follows by expressing it in the orthonormal H basis. Its partial sums converge uniformly as well, since the evaluation bound controls uniform error by its H-norm tail and the bounded diagonal.

## Worked example 2: the Brownian kernel as an energy space

**Example 3.5 (the Brownian kernel as an energy space).** For $k(x,z)=\min(x,z)$ on the unit interval, take the space of functions $f(x)=\int_0^xg(t)dt$ with g square-integrable. Its norm is the L2 norm of g. These are precisely absolutely continuous functions vanishing at zero with square-integrable derivative. The derivative map is an isometry onto L2, so this is a Hilbert space.

The section k x has derivative the indicator of the interval from zero to x. Its inner product with f is the integral of f derivative over that interval, exactly f at x. Thus this space has the stated reproducing kernel, and uniqueness identifies it with the abstract RKHS. The norm measures derivative energy, not the usual L2 size of function values. For example f equal to x has norm one, while a function with a jump is excluded by absolute continuity.

For Lebesgue mu, the positive integral-operator eigenfunctions are $\sqrt2\sin((j-1/2)\pi x)$ with eigenvalues $1/[(j-1/2)^2\pi^2]$. To derive them, write F equal to T phi. Differentiating its split integral gives F derivative equal to the integral of phi from x to one, and F second derivative equal to minus phi. The eigenrelation implies a sine differential equation with boundary conditions F at zero equal to zero and F derivative at one equal to zero. Those conditions give exactly the displayed frequencies and normalisation. The spectral argument above supplies their completeness for this operator.

## Worked example 3: a valid kernel need not approximate every function

**Example 3.6 (a valid kernel need not approximate every function).** For the constant kernel one on the unit interval with unit Lebesgue measure, H contains only constant functions, with norm equal to absolute constant value. The integral operator sends a function to its integral as a constant. It has one positive eigenvalue one with constant eigenfunction one, and a large null space of zero-mean L2 functions.

Mercer expansion is valid and finite here, yet H is not dense in continuous functions under the uniform norm or in all L2 functions. A kernel's validity and a spectral representation do not imply universality or characteristic distribution embeddings. Those stronger properties require separate conditions and return in later chapters.

## Finite spectral truncation and the appropriate norm

Keeping the first N Mercer terms gives another positive kernel and a finite-dimensional feature map with coordinates square root lambda j times phi j. The uniform covariance error tends to zero by the proof above. But a uniform kernel bound is not by itself a uniform relative error in every posterior quantity: an ill-conditioned observation solve can amplify perturbations. The numerical chapter will state such sensitivity explicitly.

For an H function, spectral coefficients with small eigenvalues are expensive in norm. This motivates regularisation and low-rank approximation, but it does not justify discarding every small empirical eigenvalue without considering noise, the target functional and the approximation criterion. Population integral-operator eigenvalues also differ from eigenvalues of one finite unscaled Gram matrix.

The representer theorem in the next chapter uses only the RKHS reproduction and orthogonal projection onto finitely many data sections. It does not require compact inputs, a measure mu, or Mercer theory. Those stronger hypotheses support this spectral description; they should not be attached unnecessarily to every kernel-learning problem.

## The reference measure changes the spectrum, not the RKHS

Mercer eigenvalues describe an integral operator involving the chosen reference measure. The kernel's reproducing space itself was constructed without that measure. On a two-point space with identity Gram matrix and measure weights p and one minus p, the integral operator has eigenvalues p and one minus p. Changing the positive weights changes that spectrum. Yet the RKHS still contains all two-value functions with the ordinary sum-of-squares norm. This separates population sampling geometry from the underlying evaluation geometry and explains why empirical Gram eigenvalues need a scaling convention before comparison with integral-operator eigenvalues.

## Exercises

<a id="mercer-rkhs-ex-1"></a>

### Exercise 1

Why must zero-norm formal section combinations be identified?

<details><summary>Hint 1</summary>

The initial Gram form can be semidefinite.

</details>

<details><summary>Hint 2</summary>

Cauchy-Schwarz makes them evaluate to zero everywhere.

</details>

<details><summary>Full solution</summary>

A nonzero formal coefficient list can represent the zero function and have zero quadratic norm. A Hilbert norm must identify such objects with zero. The semidefinite Cauchy-Schwarz inequality forces their inner product with every section to vanish, so the identification is consistent with point evaluation. Taking the quotient and then completion yields actual functions rather than multiple zero-norm copies.

</details>

<a id="mercer-rkhs-ex-2"></a>

### Exercise 2

Prove boundedness of evaluation in the constructed space.

<details><summary>Hint 1</summary>

Use reproduction on the finite span.

</details>

<details><summary>Hint 2</summary>

Extend by norm continuity.

</details>

<details><summary>Full solution</summary>

On a finite section combination, its value at x is its inner product with k x. Cauchy-Schwarz bounds it by the function norm times the section norm, whose square is k at the diagonal. The same bound makes evaluations converge along Cauchy sequences and extends to the completion. Thus each evaluation is a bounded linear functional.

</details>

<a id="mercer-rkhs-ex-3"></a>

### Exercise 3

Why is the RKHS with a given kernel unique up to the natural isometry?

<details><summary>Hint 1</summary>

Finite section inner products are forced by reproduction.

</details>

<details><summary>Hint 2</summary>

Their span is dense in any such space.

</details>

<details><summary>Full solution</summary>

The kernel fixes every inner product between finite section combinations. A function orthogonal to all sections is zero at every input and hence zero, so the span is dense. The identity on this shared span is an isometry and extends uniquely to the completions. The identification preserves the actual functions as well as their norms.

</details>

<a id="mercer-rkhs-ex-4"></a>

### Exercise 4

Compute the contrast norm in the two-point example.

<details><summary>Hint 1</summary>

Use the eigenvalue one minus r in the contrast direction.

</details>

<details><summary>Hint 2</summary>

The contrast vector has squared Euclidean length two.

</details>

<details><summary>Full solution</summary>

The inverse Gram quadratic form divides the contrast squared length by its Gram eigenvalue, giving $2/(1-r)$. At r equal to one that eigenvalue vanishes and the RKHS consists only of constant vectors, so the contrast is excluded. It should not be assigned a norm using an inverse that no longer exists.

</details>

<a id="mercer-rkhs-ex-5"></a>

### Exercise 5

Where is full support of mu used in the Mercer proof?

<details><summary>Hint 1</summary>

An RKHS function is continuous.

</details>

<details><summary>Hint 2</summary>

A nonzero continuous value persists on a nonempty open neighborhood.

</details>

<details><summary>Full solution</summary>

Full support gives that neighborhood positive measure, so a continuous function with zero L2 norm cannot be nonzero anywhere. This makes the inclusion J injective and the positive compact operator on H have trivial kernel. Without it, kernel directions invisible to the chosen measure could be missed by an almost-everywhere spectral description.

</details>

<a id="mercer-rkhs-ex-6"></a>

### Exercise 6

Why does L2 convergence alone not establish the uniform Mercer expansion?

<details><summary>Hint 1</summary>

L2 identifies functions only almost everywhere.

</details>

<details><summary>Hint 2</summary>

Use the diagonal tails and compactness for a stronger bound.

</details>

<details><summary>Full solution</summary>

L2 convergence does not control every input pair or uniform errors. Here Parseval supplies pointwise decreasing nonnegative diagonal tails, continuity makes them continuous, and compactness gives their uniform disappearance through Dini. Cauchy-Schwarz then bounds every absolute cross tail uniformly. These extra arguments establish the stronger conclusion rather than assuming it from the spectral theorem.

</details>

<a id="mercer-rkhs-ex-7"></a>

### Exercise 7

For the Brownian kernel, verify reproduction in its derivative-energy space.

<details><summary>Hint 1</summary>

The kernel section derivative is an interval indicator.

</details>

<details><summary>Hint 2</summary>

Integrate the function derivative against it.

</details>

<details><summary>Full solution</summary>

The inner product of f with k x is the integral from zero to x of its derivative, equal to f at x because f is absolutely continuous and vanishes at zero. The derivative map is an isometry from the function space onto L2, giving completeness. The uniqueness theorem therefore identifies this explicit energy space with the kernel RKHS.

</details>

<a id="mercer-rkhs-ex-8"></a>

### Exercise 8

Derive the Brownian-kernel eigenfunction boundary conditions.

<details><summary>Hint 1</summary>

Differentiate the integral operator after splitting at x.

</details>

<details><summary>Hint 2</summary>

Inspect the left value and right derivative.

</details>

<details><summary>Full solution</summary>

The operator value vanishes at zero. Its derivative is the integral of the input function from x to one and therefore vanishes at one. Its second derivative is minus the input. Under an eigenrelation these imply a sine equation with zero left value and zero right derivative, giving half-integer pi frequencies and the stated eigenvalues.

</details>

<a id="mercer-rkhs-ex-9"></a>

### Exercise 9

Why does the constant-kernel Mercer expansion not prove universality?

<details><summary>Hint 1</summary>

Its only positive eigenfunction is constant.

</details>

<details><summary>Hint 2</summary>

The operator has a nontrivial null space.

</details>

<details><summary>Full solution</summary>

The RKHS is one-dimensional and cannot approximate a nonconstant continuous function arbitrarily well. Zero-mean L2 functions lie outside its positive spectral span. Mercer describes the kernel and its associated space under its hypotheses; it does not guarantee that this space is dense in every larger function class.

</details>

<a id="mercer-rkhs-ex-10"></a>

### Exercise 10

Does the representer theorem require Mercer hypotheses?

<details><summary>Hint 1</summary>

Its argument uses a finite span of observed kernel sections.

</details>

<details><summary>Hint 2</summary>

Compactness and a reference measure are not involved.

</details>

<details><summary>Full solution</summary>

No. Orthogonal projection onto that finite-dimensional span and the reproducing identity suffice for the usual norm-regularised representer result. Mercer assumptions give a population spectral expansion useful for other purposes. Requiring them for every finite-data representer calculation would impose unnecessary restrictions on valid input sets and kernels.

</details>
