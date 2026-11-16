
# Normed and Banach Spaces

In finite-dimensional calculus, a sequence of vectors converges when each coordinate converges, and closed bounded sets are compact. Spaces of functions retain some of this geometry but lose some of its most convenient consequences. A Cauchy sequence may converge to a function outside the proposed space. Two natural norms can produce different convergence. Even the closed unit ball of a complete space can contain no convergent subsequence from a given infinite sequence.

Functional analysis begins by naming those distinctions precisely. A norm measures linear displacement. Completeness makes limits stay in the space. Compactness is stronger and requires its own mechanism. The aim of this chapter is to construct the standard examples and prove their completeness, explain finite-dimensional norm equivalence, build Banach quotients, and show why infinite-dimensional unit balls behave differently.

Preparation is the Euler [Real Analysis](#/books/proof-safe-real-analysis) route, especially [metric spaces](../proof-safe-real-analysis/metric-spaces-open-and-closed.md), [uniform convergence](../proof-safe-real-analysis/uniform-convergence.md), and [complete spaces](../proof-safe-real-analysis/fixed-points-and-complete-spaces.md). The full L4 book also assumes the first seven chapters of Measure and Integration when discussing measure-based function spaces; this opening chapter proves its sequence and continuous-function examples directly, so no unconstructed Lebesgue integral enters those proofs.

## A norm must respect the linear structure

**Definition 1.1 (Normed space).** A norm on a real or complex vector space \(X\) is a function \(\|\cdot\|:X\to[0,\infty)\) such that
\[
 \|x\|=0\iff x=0,\qquad
 \|\lambda x\|=|\lambda|\|x\|,\qquad
 \|x+y\|\le\|x\|+\|y\|.
\]
A normed space carries the metric \(d(x,y)=\|x-y\|\). A Banach space is a normed space complete for this metric.

The triangle inequality implies \(|\|x\|-\|y\||\le\|x-y\|\), so the norm is a continuous real function. Addition is jointly continuous because its output error is bounded by the sum of input errors. Scalar multiplication is continuous because convergent scalar and vector sequences are bounded, allowing a product difference to be split into two controlled terms.

For example, on \(\mathbb R^n\) or \(\mathbb C^n\), the norms
\[
 \|x\|_1=\sum_{j=1}^n|x_j|,\quad
 \|x\|_2=\left(\sum_{j=1}^n|x_j|^2\right)^{1/2},\quad
 \|x\|_\infty=\max_j|x_j|
\]
measure total coordinate size, Euclidean length and largest coordinate size. The Euclidean triangle inequality follows from Cauchy–Schwarz; the other two follow by summing or maximizing coordinate triangle inequalities.

**Worked example 1.2 (Explicit equivalent norms).** In two dimensions,
\[
 \|x\|_\infty\le\|x\|_2\le\sqrt2\|x\|_\infty,
 \qquad \|x\|_2\le\|x\|_1\le\sqrt2\|x\|_2.
\]
The first pair follows by bounding each square by the maximum square and summing two terms. For the second, expanding the square of the sum gives the lower bound, and Cauchy–Schwarz gives the upper bound. The constants are sharp: coordinate vectors give equality in some bounds, while vectors with equal coordinate moduli give equality in the others. Thus convergence in any one of these norms is convergence in all of them, although the numerical lengths can differ.

A **seminorm** satisfies homogeneity and the triangle inequality but may vanish at nonzero vectors. For differentiable functions on an interval, \(p(f)=\sup|f'|\) is a seminorm that vanishes on every constant. Adding \(|f(a)|\) can remove that degeneracy on a suitable function space. Which vectors have zero size is part of the definition, not a detail to overlook.

## Closed subspaces and complete limits

**Proposition 1.3 (Closed-subspace criterion).** A linear subspace \(M\) of a Banach space, with the inherited norm, is Banach if and only if it is closed.

*Proof.* If \(M\) is closed, a Cauchy sequence in it converges in the ambient Banach space, and closedness puts that limit back in \(M\). Conversely, if \(M\) is complete and \(x\) lies in its ambient closure, choose \(m_n\in M\) with \(\|m_n-x\|<1/n\). This is a Cauchy sequence in \(M\), so it converges there to \(m\in M\). Uniqueness of an ambient metric limit gives \(x=m\), proving closedness. ∎

**Theorem 1.4 (Continuous functions with the uniform norm).** If \(K\) is a nonempty compact metric space, the space \(C(K)\) of continuous scalar functions, with norm \(\|f\|_\infty=\sup_{x\in K}|f(x)|\), is Banach.

*Proof.* Each norm is finite by compactness and continuity. Let \((f_n)\) be Cauchy in this norm. For every \(x\), the scalar sequence \((f_n(x))\) is Cauchy and has a limit \(f(x)\). Given \(\varepsilon>0\), choose \(N\) so \(|f_n(x)-f_m(x)|<\varepsilon\) for every \(x\) whenever \(n,m\ge N\). Passing \(m\to\infty\) pointwise yields \(|f_n(x)-f(x)|\le\varepsilon\) for every \(x\). Thus \(f_n\to f\) uniformly. Uniform limits of continuous functions are continuous, so \(f\in C(K)\), and the same bound proves convergence in the stated norm. ∎

**Worked example 1.5 (Boundary conditions as a closed subspace).** In \(C([0,1])\), let \(M=\{f:f(0)=f(1)=0\}\). It is linear. If \(f_n\in M\) converge uniformly to \(f\), evaluation at either endpoint passes to the limit, so \(f(0)=f(1)=0\). Thus it is closed and is Banach by Proposition 1.3. The conclusion depends on the chosen topology: a convergence notion that ignored endpoint values would require a different argument and possibly a different state space.

The polynomials on \([0,1]\) with the same supremum norm are not complete. The partial sums of the exponential series converge uniformly there to \(e^x\), hence are Cauchy. Their limit is not a polynomial: a polynomial has a sufficiently high derivative identically zero, whereas every derivative of \(e^x\) equals \(e^x\). This gives a concrete missing limit without an appeal to all continuous functions being polynomial limits.

## Sequence spaces and a complete-series criterion

**Definition 1.6 (Sequence spaces).** The space \(\ell^\infty\) consists of bounded scalar sequences with supremum norm. The space \(c_0\) consists of sequences tending to zero, with that inherited norm. The spaces \(\ell^1\) and \(\ell^2\) consist respectively of sequences with \(\sum|x_j|<\infty\) and \(\sum|x_j|^2<\infty\), with the corresponding sum and square-sum norms.

**Theorem 1.7 (Completeness of the basic sequence spaces).** These four spaces are Banach.

*Proof.* For a Cauchy sequence \((x^{(n)})\) in \(\ell^\infty\), each coordinate has a scalar limit \(x_j\). The Cauchy estimate passes coordinatewise to give \(\sup_j|x_j^{(n)}-x_j|\le\varepsilon\) eventually. The limit is bounded because one fixed bounded \(x^{(n)}\) plus that uniform error bounds it. Hence convergence takes place in \(\ell^\infty\). The subspace \(c_0\) is closed: approximate a uniform limit by one sequence whose tail is small, then add the uniform error. Thus it too is complete.

For \(p=1\) or \(p=2\), let \((x^{(n)})\) be Cauchy in \(\ell^p\). Coordinate limits again exist because each coordinate error is bounded by the norm error. Fix \(\varepsilon>0\) and choose \(N\) so \(\|x^{(n)}-x^{(m)}\|_p<\varepsilon\) for \(n,m\ge N\). For any finite coordinate cutoff \(J\), pass \(m\to\infty\) in the finite sum to obtain
\[
 \sum_{j\le J}|x_j^{(n)}-x_j|^p\le\varepsilon^p.
\]
Taking the supremum over finite cutoffs proves that the difference sequence belongs to \(\ell^p\) and has norm at most \(\varepsilon\). Since \(x^{(n)}\in\ell^p\), their sum gives \(x\in\ell^p\); the finite-dimensional triangle inequality passes to increasing partial sums to justify this step for \(p=2\), and summation does so for \(p=1\). Therefore convergence occurs in the required norm. ∎

**Proposition 1.8 (Absolutely summable series criterion).** A normed space is Banach exactly when every series \(\sum x_n\) with \(\sum\|x_n\|<\infty\) converges in the space.

*Proof.* In a Banach space the partial sums are Cauchy because their differences are bounded by tails of the scalar norm series. Conversely let every such series converge and let \((y_n)\) be Cauchy. Choose a subsequence \(y_{n_k}\) with \(\|y_{n_{k+1}}-y_{n_k}\|\le2^{-k}\). The series of differences converges by assumption, so its telescoping partial sums show that this subsequence converges. A Cauchy sequence with a convergent subsequence converges to the same limit: put a general late term near a late subsequence term, then near its limit. Thus the space is complete. ∎

## Finite-dimensional norms agree; infinite-dimensional norms need not

**Definition 1.9 (Equivalent norms).** Two norms on one vector space are equivalent if positive finite constants \(c,C\) satisfy \(c\|x\|_a\le\|x\|_b\le C\|x\|_a\) for every vector. They then have the same convergent sequences, Cauchy sequences and open sets.

**Theorem 1.10 (Finite-dimensional norm equivalence).** Every norm on a finite-dimensional real or complex vector space is equivalent to its coordinate Euclidean norm. Such a space is Banach, and its closed bounded sets are compact.

*Proof.* Choose a basis \(e_1,\ldots,e_n\). Triangle inequality gives
\(\|\sum a_je_j\|\le\sum|a_j|\|e_j\|\le C|a|_2\), with a finite \(C\). The reverse triangle inequality then shows this norm is continuous as a function of the Euclidean coordinates. On the Euclidean unit sphere, a compact set, it has a positive minimum \(c\): attainment gives a point, and a zero minimum would make a nonzero coordinate vector have zero norm. Homogeneity yields \(\|\sum a_je_j\|\ge c|a|_2\).

A Cauchy sequence in the given norm is Cauchy in Euclidean coordinates, so it converges there and hence in the given norm by equivalence. Closed and bounded sets are also closed and bounded in Euclidean coordinates; Heine–Borel gives compactness, which the equivalent topology preserves. ∎

**Worked example 1.11 (Constants that grow with dimension).** On finitely supported sequences, compare the supremum and square-sum norms. The vector \(v^{(n)}\) with its first \(n\) entries equal to one and the rest zero has \(\|v^{(n)}\|_\infty=1\) but \(\|v^{(n)}\|_2=\sqrt n\). Hence no single finite \(C\) can make \(\|x\|_2\le C\|x\|_\infty\) for every finitely supported vector. On each fixed finite-dimensional coordinate subspace such a constant exists, but it depends on dimension. Finite-dimensional equivalence therefore does not pass to a union of increasing subspaces with one uniform constant.

## Quotients preserve completeness when the subspace is closed

Let \(M\) be a linear subspace of \(X\). A coset is \(x+M=\{x+m:m\in M\}\). Define
\[
 \|x+M\|_{X/M}=\inf_{m\in M}\|x-m\|.
\]
The value is independent of the representative because translating \(x\) by an element of \(M\) only reindexes the infimum.

**Theorem 1.12 (Banach quotient).** If \(M\) is closed, the formula is a norm on \(X/M\). If \(X\) is Banach as well, the quotient is Banach.

*Proof.* Homogeneity follows by rescaling the subspace; at scalar zero it is immediate. For triangle inequality choose representatives within any positive tolerance of their infima, add them, and then let the tolerance tend to zero. Zero quotient norm means \(x\) lies in the closure of \(M\); closedness then gives \(x\in M\), the zero coset. This also shows why closedness is essential.

For completeness, take a Cauchy sequence of cosets \(q_n\). Select a subsequence \(q_{n_k}\) with \(\|q_{n_{k+1}}-q_{n_k}\|<2^{-k}\). Choose a representative \(d_k\in X\) of each difference with \(\|d_k\|<2^{1-k}\), using the infimum definition. Choose one representative \(x_1\) of \(q_{n_1}\), and put \(x_{k+1}=x_k+d_k\). Then \(x_k\) represents \(q_{n_k}\), and the series of differences has summable norms. It converges in \(X\), say \(x_k\to x\). The quotient estimate \(\|x_k+M-(x+M)\|\le\|x_k-x\|\) gives convergence of the coset subsequence. The full quotient Cauchy sequence then converges by the usual subsequence argument. ∎

The infimum need not be attained. The quotient construction only needs representatives arbitrarily close to the best distance; assuming the existence of a nearest point would import an additional geometric property, true for Hilbert closed subspaces but false in general Banach spaces.

## A separated sequence inside the unit ball

**Lemma 1.13 (Riesz separation lemma).** If \(M\) is a proper closed linear subspace of a normed space and \(0<\alpha<1\), there is a unit vector \(x\) with \(\operatorname{dist}(x,M)>\alpha\).

*Proof.* Choose \(y\notin M\). Closedness gives \(d=\operatorname{dist}(y,M)>0\). By the infimum property choose \(m_0\in M\) with \(\|y-m_0\|<d/\alpha\). Put \(x=(y-m_0)/\|y-m_0\|\). For any \(m\in M\), linearity of the subspace gives
\[
 \|x-m\|=\frac{\|y-[m_0+\|y-m_0\|m]\|}{\|y-m_0\|}
 \ge\frac d{\|y-m_0\|}>\alpha.
\]
Taking the infimum proves the claim. ∎

**Theorem 1.14 (Unit-ball compactness criterion).** A normed space has compact closed unit ball exactly when it is finite dimensional.

*Proof.* Finite dimension was covered by Theorem 1.10. If the space is infinite dimensional, choose one unit vector. Its span is closed: a convergent sequence in any finite-dimensional subspace has Cauchy coordinates by norm equivalence and hence a limit in that subspace. Apply Riesz's lemma with \(\alpha=1/2\) to choose a second unit vector separated by more than \(1/2\) from that span. Continue with the span of all vectors already chosen. The resulting unit vectors have pairwise distances greater than \(1/2\), so no subsequence is Cauchy. A compact metric set is sequentially compact, giving a contradiction. ∎

Completeness does not rescue the closed bounded criterion in infinite dimensions. Banach spaces supply limits for Cauchy sequences; the constructed sequence never becomes Cauchy. Later compactness theorems must therefore add specific structure, such as equicontinuity, compact operators or weak topologies.

## The completion and its universal property

Every normed space has a Banach completion, and the construction records exactly which new limits have been added. Let C be the vector space of norm-Cauchy sequences in X. Identify sequences (xn) and (yn) when ||xn−yn|| tends to zero. Addition and scalar multiplication respect this relation by the triangle inequality. Define the norm of a class to be lim||xn||; the limit exists because the reverse triangle inequality makes these real numbers Cauchy, and equivalent sequences give the same limit. Zero norm means equivalence to the zero sequence, so this is a genuine norm on the quotient.

Embed X by constant sequences. The embedding is linear and isometric. Its image is dense: for a class represented by xn, the constant class xn has distance lim_m||xn−xm|| from it, tending to zero as n grows. The added points are therefore limits forced by the original norm rather than independent arbitrary coordinates.

The quotient is complete. Given a Cauchy sequence of classes zn, choose xn in X whose embedded constant class is within 1/n of zn. The triangle inequality makes the embedded xn Cauchy, hence xn is Cauchy in X and represents a class z. The density calculation shows embedded xn tends to z, and its distance to zn tends to zero, so zn tends to z. This proves completeness without presupposing that X itself contains the required limits.

A useful uniqueness statement is stronger than a mere isomorphism assertion. If i:X→Y is an isometric embedding with dense image in a Banach space Y, send the completion class of xn to lim i(xn). Completeness gives the limit, the isometry makes it independent of representative, and its norm equals the class norm. Density makes the resulting isometry onto Y: approximate any y by i(xn), which is necessarily Cauchy. It is the unique continuous extension of i because two continuous maps agreeing on a dense set agree everywhere.

For example, completing finitely supported sequences in the square norm gives ℓ2: coordinate truncations are dense there, and the sequence-space theorem proves its completeness. Completing polynomials on [0,1] in the uniform norm gives C[0,1], using the polynomial density theorem in Real Analysis. Completing the same polynomials in a square-integral norm gives a different space. Thus the original algebraic vector set does not determine its completion without a specified norm.

This construction underlies the Fourier square-norm chapters and their distinction between continuous representatives and completed elements. It also explains why an incomplete model can be useful: one may start with elementary objects, prove stable estimates there and extend bounded operations to the completion. The extension requires the stability estimate; the existence of a completion alone does not extend an arbitrary unbounded operation.

## Exercises

### Exercise 1.1 {#normed-banach-spaces-ex-1}

Prove the reverse triangle inequality for an arbitrary norm.

<details><summary>Hint 1</summary>
Write \(x=(x-y)+y\).
</details>
<details><summary>Hint 2</summary>
Interchange \(x\) and \(y\) for the other sign.
</details>
<details><summary>Solution</summary>
Triangle inequality gives \(\|x\|-\|y\|\le\|x-y\|\). Interchanging the vectors gives \(\|y\|-\|x\|\le\|x-y\|\), since \(\|y-x\|=\|x-y\|\). Together these are \(|\|x\|-\|y\||\le\|x-y\|\). In particular norm convergence of vectors implies convergence of their numerical norms.
</details>

### Exercise 1.2 {#normed-banach-spaces-ex-2}

On \(C^1([0,1])\), prove that \(p(f)=\sup|f'|\) is a seminorm but not a norm. Show \(|f(0)|+p(f)\) is a norm.

<details><summary>Hint 1</summary>
Constants identify the missing definiteness.
</details>
<details><summary>Hint 2</summary>
A zero derivative on the interval makes a function constant.
</details>
<details><summary>Solution</summary>
Homogeneity and triangle inequality follow from differentiation and the supremum inequalities. Every nonzero constant has zero seminorm, so definiteness fails. For the augmented expression, zero value forces both \(f(0)=0\) and \(f'=0\). The mean value theorem then gives \(f=0\) on the interval. The other norm axioms are inherited by addition, proving the claim.
</details>

### Exercise 1.3 {#normed-banach-spaces-ex-3}

Prove \(c_0\) is closed in \(\ell^\infty\).

<details><summary>Hint 1</summary>
Approximate the candidate limit uniformly by one member of \(c_0\).
</details>
<details><summary>Hint 2</summary>
Then choose a coordinate tail where that member is small.
</details>
<details><summary>Solution</summary>
If \(x^{(n)}\to x\) uniformly and each \(x^{(n)}\to0\) in its coordinate index, fix \(\varepsilon>0\). Choose \(n\) with \(\|x-x^{(n)}\|_\infty<\varepsilon/2\), then \(J\) such that \(|x_j^{(n)}|<\varepsilon/2\) for \(j\ge J\). The triangle inequality gives \(|x_j|<\varepsilon\) on that tail. Thus \(x\in c_0\), proving closedness.
</details>

### Exercise 1.4 {#normed-banach-spaces-ex-4}

Show that finitely supported sequences are dense in \(c_0\) but are not dense in \(\ell^\infty\), with the supremum norm.

<details><summary>Hint 1</summary>
Truncate a sequence that tends to zero.
</details>
<details><summary>Hint 2</summary>
For failure in \(\ell^\infty\), use the constant sequence one.
</details>
<details><summary>Solution</summary>
For \(x\in c_0\), truncating after \(N\) gives supremum error \(\sup_{j>N}|x_j|\to0\). Thus finite sequences are dense there. But any finitely supported sequence differs from the all-ones sequence by exactly one on every sufficiently large coordinate, so their supremum distance is at least one. It cannot approximate that bounded sequence, proving non-density in \(\ell^\infty\).
</details>

### Exercise 1.5 {#normed-banach-spaces-ex-5}

Prove that equivalent norms give the same Cauchy sequences and preserve completeness.

<details><summary>Hint 1</summary>
Apply both norm inequalities to differences of sequence terms.
</details>
<details><summary>Hint 2</summary>
The same inequalities also identify the limit in either norm.
</details>
<details><summary>Solution</summary>
If \(c\|x\|_a\le\|x\|_b\le C\|x\|_a\), then Cauchy estimates in norm \(a\) imply those in norm \(b\) after dividing the desired tolerance by \(C\), and conversely use \(c\). If one norm is complete, the shared Cauchy sequence has a limit in that norm; the comparison inequalities make it converge to the same vector in the other norm. Thus completeness is preserved.
</details>

### Exercise 1.6 {#normed-banach-spaces-ex-6}

Prove every finite-dimensional subspace of a normed space is closed, without assuming the ambient space complete.

<details><summary>Hint 1</summary>
Norm equivalence makes Cauchy vectors have Cauchy coordinates in the subspace basis.
</details>
<details><summary>Hint 2</summary>
The scalar coordinates have limits even if the whole ambient space is incomplete.
</details>
<details><summary>Solution</summary>
Let \(x_n\) in the finite-dimensional subspace converge in the ambient norm to \(x\). They are Cauchy. By the lower norm-equivalence bound their basis coordinate vectors are Cauchy in a finite-dimensional scalar space, hence converge to coordinates defining \(y\) in the subspace. The upper bound gives \(x_n\to y\) in the ambient norm. Uniqueness of limits gives \(x=y\), so the subspace contains all its ambient limits and is closed.
</details>

### Exercise 1.7 {#normed-banach-spaces-ex-7}

In \(C([0,1])\), show that \(M=\{f:\int_0^1f(t)dt=0\}\) is a closed Banach subspace.

<details><summary>Hint 1</summary>
The integral difference is bounded by the uniform norm difference.
</details>
<details><summary>Hint 2</summary>
Use the closed-subspace criterion after proving closedness.
</details>
<details><summary>Solution</summary>
Linearity of the Riemann integral gives a subspace. If \(f_n\in M\) converge uniformly to \(f\), then \(|\int f-\int f_n|\le\|f-f_n\|_\infty\to0\). Hence \(\int f=0\) and \(M\) is closed. Since \(C([0,1])\) is Banach, its closed subspace is Banach. No Lebesgue integral is required for these continuous functions.
</details>

### Exercise 1.8 {#normed-banach-spaces-ex-8}

If \(M\) is not closed, show that the quotient formula can assign zero to a nonzero coset.

<details><summary>Hint 1</summary>
Choose a point in the closure of \(M\) but outside \(M\).
</details>
<details><summary>Hint 2</summary>
Its distance to \(M\) is zero although its coset is not the zero coset.
</details>
<details><summary>Solution</summary>
Choose \(x\in\overline M\setminus M\). For every positive tolerance some \(m\in M\) lies within it of \(x\), so \(\inf_m\|x-m\|=0\). But \(x+M\ne M\) because \(x\notin M\). The quotient formula is therefore only a seminorm in this situation, and definiteness fails. Passing to the closure of the subspace would change the quotient and must be stated explicitly.
</details>

### Exercise 1.9 {#normed-banach-spaces-ex-9}

Compute the quotient norm in \(\mathbb R^2/\operatorname{span}(1,0)\) when the ambient norm is Euclidean.

<details><summary>Hint 1</summary>
Represent a coset by \((a,b)\) and vary the first coordinate.
</details>
<details><summary>Hint 2</summary>
The smallest possible Euclidean length has first coordinate zero.
</details>
<details><summary>Solution</summary>
The coset contains \((a-t,b)\) for every real \(t\). Its norm is the infimum of \(\sqrt{(a-t)^2+b^2}\), attained at \(t=a\) and equal to \(|b|\). Thus the quotient is isometric to the real line through the second coordinate. This finite-dimensional example has an attained infimum; general quotient definitions do not assume attainment.
</details>

### Exercise 1.10 {#normed-banach-spaces-ex-10}

Show directly that the unit vectors in \(\ell^2\) have no norm-convergent subsequence.

<details><summary>Hint 1</summary>
Compute the distance between two distinct unit vectors.
</details>
<details><summary>Hint 2</summary>
Every convergent sequence is Cauchy.
</details>
<details><summary>Solution</summary>
For distinct indices \(j,k\), the difference has two nonzero coordinates, one and minus one, so \(\|e_j-e_k\|_2=\sqrt2\). No subsequence can be Cauchy because its distinct terms retain that distance. Therefore no subsequence converges in norm. The vectors all lie in the closed unit ball of the Banach space \(\ell^2\), showing closed and bounded is insufficient for compactness.
</details>

### Exercise 1.11 {#normed-banach-spaces-ex-11}

If \(\sum\|x_n\|<\infty\) in a Banach space, prove that every permutation of the vector series converges to the same sum.

<details><summary>Hint 1</summary>
Choose a finite initial set with small total norm outside it.
</details>
<details><summary>Hint 2</summary>
Every sufficiently long permuted partial sum contains that entire finite set.
</details>
<details><summary>Solution</summary>
Given \(\varepsilon>0\), choose \(N\) with \(\sum_{n>N}\|x_n\|<\varepsilon\). A sufficiently long partial sum of any permutation contains all indices \(1,\ldots,N\). Its difference from the original series sum consists only of omitted terms with indices above \(N\), whose total norm is at most that tail sum. This follows first for finite differences and then by convergence of the absolute series. Thus the permuted partial sums converge to the same sum. Absolute norm summability supplies the estimate; conditional vector series need not have this property.
</details>

### Exercise 1.12 {#normed-banach-spaces-ex-12}

Why can the compact-unit-ball proof choose a new separated vector at every finite stage? Explain both properness and closedness of the previously chosen span.

<details><summary>Hint 1</summary>
An infinite-dimensional space is not spanned by finitely many vectors.
</details>
<details><summary>Hint 2</summary>
Use finite-dimensional subspace closedness before applying Riesz's lemma.
</details>
<details><summary>Solution</summary>
At stage \(n\), the previous vectors span a finite-dimensional subspace \(M_n\). It is proper because otherwise the whole space would be finite dimensional. It is closed by the finite-dimensional norm-equivalence argument. Thus both hypotheses of Riesz's lemma hold, and a unit vector can be chosen at distance greater than one half from the entire span. Since every earlier vector belongs to that span, all new pairwise distances have the required lower bound.
</details>

## Sources and scope

This is original exposition and supported exercise development. The local source lineage is the retained Real Analysis Lp/Banach chapter and the Quarto functional-analysis introduction. The book benchmarks are Conway and Brezis. Completeness of general measure-based Lp spaces belongs to Measure and Integration; the present chapter proves only the sequence and continuous-function models used here. No nearest-point theorem or weak compactness theorem is inferred from the Banach property.

## Summary

A norm supplies a linear metric, and completeness keeps Cauchy limits inside the space. Continuous-function and sequence examples are Banach by explicit limit constructions; closed subspaces and closed quotients preserve completeness. All finite-dimensional norms are equivalent, but no dimension-independent comparison or closed-bounded compactness survives automatically in infinite dimensions. The next chapter uses these spaces as domains and targets of bounded linear operators and introduces their dual spaces.
