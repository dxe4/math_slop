
# Uniform Boundedness and Pointwise Limits of Operators

Suppose every vector survives an entire family of linear operations with a bounded output. Must one common bound control the operations themselves? For continuous linear maps on a Banach space the answer is yes. The pointwise bounds may depend on the vector and no formula for a common constant is supplied, yet completeness and linearity force such a constant to exist. This is the uniform boundedness principle, also called the Banach–Steinhaus theorem.

The required preparation is normed spaces, bounded linear operators, and the [Baire category theorem in Real Analysis](../proof-safe-real-analysis/baire-category.md). Baire is proved there once; this chapter uses it rather than repeating its nested-ball proof. The basic operator definitions are recalled below. No measure-theoretic result or Hahn–Banach extension is used in this chapter's proofs, although those subjects are prerequisites elsewhere in the full Functional Analysis route.

Our goal is to track the change in quantifiers. A pointwise bound says that for each vector there is a constant controlling every operator on that vector. An operator-norm bound says there is one constant controlling all unit vectors and all operators. Baire first turns the pointwise statement into a bound on one ball. Subtracting two points of that ball moves the estimate to zero, and homogeneity moves it to every vector.

## Operator norms and the quantifier problem

**Definition 4.1 (Bounded linear operator).** Let \(X,Y\) be real or complex normed spaces over the same scalar field. A linear map \(T:X\to Y\) is bounded if some finite \(C\) satisfies \(\|Tx\|_Y\le C\|x\|_X\) for every \(x\in X\). Its operator norm is
\[
 \|T\|=\sup_{\|x\|\le1}\|Tx\|.
\]
The space of these maps is \(\mathcal L(X,Y)\). A Banach space is a normed space complete for its norm metric.

Linearity converts continuity at zero into boundedness. Indeed if \(\|Tx\|<1\) whenever \(\|x\|<\delta\), rescale any nonzero \(x\) to \(\delta x/(2\|x\|)\), obtaining \(\|Tx\|\le2\|x\|/\delta\). Boundedness conversely gives Lipschitz continuity immediately. Thus the theorem concerns continuous linear maps, not arbitrary nonlinear operations.

Let \(\mathcal F\subseteq\mathcal L(X,Y)\). The pointwise assumption is
\[
 \forall x\in X\ \exists C_x<\infty\ \forall T\in\mathcal F:
 \quad\|Tx\|\le C_x.
\]
The desired conclusion is
\[
 \exists M<\infty\ \forall T\in\mathcal F\ \forall x\in X:
 \quad\|Tx\|\le M\|x\|.
\]
The family may be uncountable. The proof will use a countable collection of size thresholds, not a countable enumeration of the operators. This distinction is useful for applications indexed by a real parameter or by an arbitrary set of functionals.

A pointwise assumption on a dense subset alone is weaker and will not suffice. Density allows approximation, but without a uniform operator bound the approximation error can be magnified by a different amount for every member of the family. We will give both a counterexample and the additional condition that repairs this argument.

## The local-to-global proof

**Theorem 4.2 (Uniform boundedness).** Let \(X\) be a Banach space and \(Y\) a normed space. If \(\mathcal F\subseteq\mathcal L(X,Y)\) is pointwise bounded, then
\[
 \sup_{T\in\mathcal F}\|T\|<\infty.
\]
Completeness of \(Y\) is not required.

*Proof.* If the family is empty the conclusion is vacuous. Otherwise, for each positive integer \(m\), put
\[
 E_m=\{x\in X:\|Tx\|\le m\text{ for every }T\in\mathcal F\}.
\]
Each \(E_m\) is closed: for each fixed \(T\), continuity makes the inverse image of the closed radius-\(m\) ball closed, and any intersection of closed sets is closed. Pointwise boundedness says \(X=\bigcup_{m\ge1}E_m\). By Baire, some \(E_m\) has nonempty interior. Choose \(x_0\) and \(r>0\) such that \(B(x_0,r)\subseteq E_m\).

For \(\|h\|<r\), both \(x_0\) and \(x_0+h\) belong to that ball, so for every \(T\in\mathcal F\),
\[
 \|Th\|=\|T(x_0+h)-Tx_0\|\le2m.
\]
For \(x\ne0\), take \(h=rx/(2\|x\|)\), which has norm \(r/2\). Linearity gives
\[
 \|Tx\|\le\frac{4m}{r}\|x\|.
\]
The same estimate holds at zero. Thus every \(\|T\|\le4m/r\), as required. ∎

The factor four is an artifact of choosing a strict interior radius; the theorem's content is existence of a finite constant. Baire does not identify which threshold has interior or how large its interior ball is. In a concrete problem an explicit bound derived from the formulas may be much sharper and more informative.

The proof separates three ingredients. Closedness comes from continuity of each operator. Existence of one interior ball comes from completeness through Baire. Transporting a bound from that ball to a homogeneous estimate comes from linearity. Removing any one of these ingredients requires another argument; a similar-looking statement for arbitrary functions does not follow automatically.

**Corollary 4.3 (Locally uniform control in the input).** Under the theorem's assumptions, for every bounded set \(B\subseteq X\), the union \(\{Tx:T\in\mathcal F,x\in B\}\) is bounded in \(Y\).

*Proof.* Let \(M\) be the common operator bound and \(R=\sup_{x\in B}\|x\|<\infty\). Every output norm is at most \(MR\). ∎

This does not say that images of bounded sets are relatively compact. Boundedness and compactness are distinct even in a Banach space: the unit vectors of an infinite-dimensional sequence space can remain pairwise separated while all have norm one.

## Worked examples and the completeness boundary

**Worked example 4.4 (Coordinate maps on a complete sequence space).** On \(\ell^2\), let \(T_n(x)=a_nx_n\), where \((a_n)\) is a scalar sequence. Each \(T_n\) is bounded with norm \(|a_n|\), since \(|x_n|\le\|x\|_2\) and equality is attained on the corresponding unit vector. The uniform boundedness theorem says that if \(\sup_n|a_nx_n|<\infty\) for every \(x\in\ell^2\), then \(\sup_n|a_n|<\infty\).

For \(a_n=n\), we can see the obstruction explicitly. Define \(x_{2^k}=k/2^k\) for \(k\ge1\) and all other coordinates zero. The sum of squares \(\sum k^2/4^k\) converges by a geometric comparison, so \(x\in\ell^2\), but \(T_{2^k}(x)=k\) is unbounded. Testing only finitely supported vectors would have missed this vector entirely.

**Worked example 4.5 (A dense incomplete domain gives the wrong answer).** Let \(c_{00}\) be the space of finitely supported sequences with the supremum norm. Define \(S_n(x)=nx_n\). For each fixed \(x\), only finitely many outputs are nonzero, so \(\sup_n|S_nx|<\infty\). Each operator is bounded with norm \(n\), so their norms are unbounded.

There is no contradiction because \(c_{00}\) is not complete. The finite truncations of the sequence \((1/n)\) form a Cauchy sequence in the supremum norm whose limit is not finitely supported. The complete space \(c_0\), consisting of all sequences tending to zero, contains \(c_{00}\) densely. On \(c_0\) the same family is no longer pointwise bounded: for \(x_n=1/\sqrt n\), the outputs are \(\sqrt n\). Completing the space introduces precisely the sort of vector that exposes the family.

**Worked example 4.6 (Polynomial difference quotients).** Let \(X\) be the polynomials on \([0,1]\) with the supremum norm, and for \(n\ge2\) define
\[
 T_n(p)=n[p(1)-p(1-1/n)].
\]
Each is a bounded linear functional, with norm at most \(2n\). For a fixed polynomial, the difference quotients converge to \(p'(1)\), so they are pointwise bounded. Nevertheless their norms are unbounded. Choose \(p(x)=x^n\), whose norm is one. Then
\[
 T_n(p)=n[1-(1-1/n)^n]\ge n(1-e^{-1}),
\]
since \(1-t\le e^{-t}\) for real \(t\). The lower bound tends to infinity.

The polynomial normed space is incomplete: polynomials can converge uniformly to a continuous nonpolynomial, such as their partial exponential series on this interval. The example shows that pointwise convergence on a dense collection of very smooth inputs does not bound operator norms. The failure concerns the domain's completeness, not a lack of linearity or continuity of the individual operators.

## Pointwise limits of bounded operators

**Theorem 4.7 (Bounded pointwise limit).** Let \(X\) be Banach and \(Y\) normed. Suppose \(T_n\in\mathcal L(X,Y)\) and for every \(x\in X\) the sequence \(T_nx\) converges in \(Y\) to a value \(Tx\). Then \(T\) is linear and bounded, and \(\sup_n\|T_n\|<\infty\).

*Proof.* A convergent sequence in a normed space is bounded, so the family \(\{T_n\}\) is pointwise bounded. Theorem 4.2 supplies a common norm bound \(M\). Taking limits in \(T_n(\alpha x+\beta y)=\alpha T_nx+\beta T_ny\) proves linearity of \(T\). Taking the limit in \(\|T_nx\|\le M\|x\|\) gives \(\|Tx\|\le M\|x\|\), since the norm is continuous. ∎

The hypothesis already states that each limit lies in \(Y\). If we knew only that each sequence was Cauchy, completeness of \(Y\) would be needed to construct a limit there. The uniform boundedness step itself uses only completeness of the input space.

Pointwise operator convergence is often called strong operator convergence. It does not imply operator-norm convergence. A single input vector may have increasingly small tails even while a different unit vector at each stage exposes a fixed operator error. Quantifiers again distinguish the assertions.

**Worked example 4.8 (Strong convergence without norm convergence).** On \(\ell^2\), let \(P_n\) retain the first \(n\) coordinates and set the others to zero. For every fixed \(x\),
\[
 \|P_nx-x\|_2^2=\sum_{k>n}|x_k|^2\longrightarrow0.
\]
Thus \(P_n\) converges strongly to the identity. But \(\|I-P_n\|=1\) for every \(n\): the upper bound follows from deleting coordinates, and the lower bound is attained at the \((n+1)\)-st unit vector. No unit-ball uniform convergence takes place.

## When a dense set is enough

**Theorem 4.9 (Dense-set convergence criterion).** Let \(X\) be a normed space, \(Y\) a Banach space, and \(T_n\in\mathcal L(X,Y)\) with \(\sup_n\|T_n\|\le M<\infty\). Suppose \(T_nd\) converges for every \(d\) in a dense subset \(D\subseteq X\). Then \(T_nx\) converges for every \(x\in X\), and the limit defines a bounded linear operator of norm at most \(M\).

*Proof.* Fix \(x\) and \(\varepsilon>0\). Choose \(d\in D\) with \(\|x-d\|<\varepsilon/[4(M+1)]\). For any indices \(n,k\),
\[
 \|T_nx-T_kx\|
 \le2M\|x-d\|+\|T_nd-T_kd\|.
\]
The first term is below \(\varepsilon/2\). Since the sequence at \(d\) converges, its pairwise differences are below \(\varepsilon/2\) for sufficiently large \(n,k\). Thus \((T_nx)\) is Cauchy. Completeness of \(Y\) gives its limit. Passing to limits proves linearity and the norm bound exactly as in Theorem 4.7. ∎

Here completeness of \(X\) is unnecessary because the uniform norm bound was assumed instead of deduced by Baire. Completeness of \(Y\) has a different role: it turns Cauchy output sequences into actual output vectors. Remembering which space must be complete is more useful than memorizing the names of the theorems.

For approximation schemes this criterion is particularly practical. Prove a uniform stability estimate, show convergence on a dense family where formulas are simple, and use the displayed three-term bound to pass to arbitrary inputs. Proving convergence on smooth or finite inputs before obtaining stability reverses the logical dependence and can reproduce the polynomial counterexample.

## Unbounded families fail on many vectors

**Theorem 4.10 (A residual set of divergent outputs).** Let \(X\) be Banach and \(\mathcal F\subseteq\mathcal L(X,Y)\). If the operator norms are unbounded, then
\[
 G=\{x:\sup_{T\in\mathcal F}\|Tx\|=\infty\}
\]
is a dense countable intersection of open sets.

*Proof.* Form the closed sets \(E_m\) from Theorem 4.2 without assuming their union covers \(X\). If any \(E_m\) had interior, the same subtraction and rescaling argument would give a common operator norm bound, contradicting the hypothesis. Thus each \(E_m\) has empty interior, so its complement is open and dense. Their countable intersection is dense by Baire. A point belongs to that intersection exactly when no integer bound controls all its outputs, which is the definition of \(G\). ∎

This strengthens the bare contrapositive: unbounded operator norms force more than one badly behaved input. They force a comeagre set of them. The assertion concerns Baire category, not measure. No probability distribution was specified, so “almost every input” in a measure-theoretic sense would be an additional, unjustified claim.

## Separate continuity becomes a bilinear bound

The principle also turns two separate continuity assumptions into a joint estimate. Let X be Banach, Y and Z normed spaces, and B:X×Y→Z bilinear. Suppose for every fixed y the map x↦B(x,y) is bounded, and for every fixed x the map y↦B(x,y) is bounded. Then there is one finite C such that ||B(x,y)||≤C||x||||y|| for all x,y. Notice that only X needs completeness for this proof.

For each y with ||y||≤1 define Ty(x)=B(x,y). Each Ty is a bounded operator on X by the first assumption. For a fixed x, the second assumption bounds sup_{||y||≤1}||Tyx|| by the operator norm of B(x,·), a finite number depending on x. The family {Ty:||y||≤1} is therefore pointwise bounded. Uniform boundedness supplies C=sup||Ty||<∞. This gives the estimate for unit-ball y, and homogeneity gives it for every nonzero y; zero y is immediate.

The estimate implies joint continuity. If x approaches x0 and y approaches y0, write B(x,y)−B(x0,y0)=B(x−x0,y)+B(x0,y−y0). Its norm is at most C||x−x0||||y||+C||x0||||y−y0||, tending to zero because convergent y are bounded. Thus continuity in each variable, plus the Banach hypothesis and bilinearity, has controlled simultaneous perturbations.

The canonical evaluation map B(x,φ)=φ(x) on X×X* already has the direct bound |φ(x)|≤||φ||||x||. The abstract argument is useful when such a common constant is not evident but separate estimates are. It applies equally to real and complex bilinear maps; for a sesquilinear map, fixing one variable and using conjugate homogeneity gives the same norm argument with the scalar conjugations recorded.

A related warning concerns coefficient formulas. If B(x,y)=Σanxnyn is proposed on ℓ2×ℓ2, bounded coefficients give a bilinear bound by Cauchy–Schwarz. If the positive coefficients an are unbounded, choose a subsequence anj≥j² and vectors with both selected coordinates 1/j. Both vectors lie in ℓ2, but the corresponding nonnegative terms are at least one, so the series does not converge. A formula that works for finitely supported vectors has not automatically defined a separately continuous map on every input. The uniform boundedness argument starts only after those domain and continuity hypotheses have been established.

## Exercises

### Exercise 4.1 {#uniform-boundedness-ex-1}

Show that \(\|T\|=\sup_{\|x\|=1}\|Tx\|\) when \(X\ne\{0\}\), and explain the zero-space exception.

<details><summary>Hint 1</summary>
Rescale each nonzero vector of norm below one.
</details>
<details><summary>Hint 2</summary>
The zero vector contributes only zero output.
</details>
<details><summary>Solution</summary>
The unit sphere lies in the unit ball, giving one inequality. For \(0<\|x\|\le1\), linearity gives \(\|Tx\|=\|x\|\|T(x/\|x\|)\|\), bounded by the sphere supremum. At zero the output is zero. Thus the reverse inequality holds. For the zero space the sphere is empty, while the operator norm is defined by the ball \(\{0\}\) and equals zero, so it is preferable to keep the unit-ball definition without an empty-supremum convention.
</details>

### Exercise 4.2 {#uniform-boundedness-ex-2}

Why is each \(E_m\) in Theorem 4.2 closed even if the family is uncountable?

<details><summary>Hint 1</summary>
Write it as an intersection of inverse images of closed balls.
</details>
<details><summary>Hint 2</summary>
Topological closure under intersections has no countability restriction.
</details>
<details><summary>Solution</summary>
For each \(T\), the set \(\{x:\|Tx\|\le m\}\) is closed by continuity. The set \(E_m\) is the intersection of these closed sets over all members of the family. An arbitrary intersection of closed sets is closed because its complement is an arbitrary union of open sets. Baire is applied to the countable thresholds \(m\), not to an enumeration of the operators.
</details>

### Exercise 4.3 {#uniform-boundedness-ex-3}

Suppose \(\|Tx\|\le b\) for every \(T\in\mathcal F\) and every \(x\in B(a,r)\). Derive a common bound for the operator norms.

<details><summary>Hint 1</summary>
Subtract the values at \(a+h\) and \(a\).
</details>
<details><summary>Hint 2</summary>
Choose \(h=rx/(2\|x\|)\) for nonzero \(x\).
</details>
<details><summary>Solution</summary>
For \(\|h\|<r\), both points lie in the ball, so \(\|Th\|\le2b\). Substituting the chosen \(h\) and rescaling gives \(\|Tx\|\le4b\|x\|/r\). Thus \(\|T\|\le4b/r\) uniformly. If \(b=0\), the same calculation shows every operator is zero. No completeness is needed for this local-to-global algebra once the ball bound is supplied.
</details>

### Exercise 4.4 {#uniform-boundedness-ex-4}

On \(\ell^2\), prove that \(T_n(x)=n x_n\) has norm \(n\) and exhibit one input with unbounded outputs.

<details><summary>Hint 1</summary>
Use the coordinate unit vector for the lower bound.
</details>
<details><summary>Hint 2</summary>
Place a rapidly decaying sequence on indices \(2^k\).
</details>
<details><summary>Solution</summary>
The inequality \(|nx_n|\le n\|x\|_2\) gives norm at most \(n\), and equality holds on the \(n\)-th unit vector. Set \(x_{2^k}=k/2^k\) and all other coordinates zero. Its square sum \(\sum k^2/4^k\) converges, so it belongs to \(\ell^2\), while \(T_{2^k}x=k\). This explicitly confirms failure of the pointwise premise for the unbounded-norm family.
</details>

### Exercise 4.5 {#uniform-boundedness-ex-5}

Show that pointwise boundedness on a dense subset of a Banach space need not imply a common operator norm bound.

<details><summary>Hint 1</summary>
Use \(c_{00}\) as a dense subset of \(c_0\).
</details>
<details><summary>Hint 2</summary>
The maps \(x\mapsto nx_n\) are bounded individually on the full space.
</details>
<details><summary>Solution</summary>
On the Banach space \(c_0\) with supremum norm, define \(T_nx=nx_n\). Their norms are \(n\), while for each finitely supported \(x\) only finitely many outputs are nonzero. The finitely supported sequences are dense because truncation approximates any sequence tending to zero uniformly. Thus the pointwise bound holds on a dense subset, but the norm conclusion fails. Baire requires pointwise boundedness on the entire Banach domain.
</details>

### Exercise 4.6 {#uniform-boundedness-ex-6}

For the coordinate projections \(P_n\) on \(\ell^2\), prove \(\|P_n\|=1\) and \(P_nx\to x\) for every \(x\).

<details><summary>Hint 1</summary>
Deleting coordinates cannot increase the square norm.
</details>
<details><summary>Hint 2</summary>
The discarded tail of a convergent nonnegative series tends to zero.
</details>
<details><summary>Solution</summary>
We have \(\|P_nx\|_2^2=\sum_{k\le n}|x_k|^2\le\|x\|_2^2\), so the norm is at most one; equality is attained at the first unit vector. The error square is \(\sum_{k>n}|x_k|^2\to0\), proving strong convergence to the identity. Since \(\|I-P_n\|=1\), this does not establish operator-norm convergence.
</details>

### Exercise 4.7 {#uniform-boundedness-ex-7}

If \(T_n\to T\) strongly on a Banach space, must \(\|T_n-T\|\to0\)? Must \(\|T_n\|\) remain bounded?

<details><summary>Hint 1</summary>
The projections supply a counterexample to the first claim.
</details>
<details><summary>Hint 2</summary>
Apply uniform boundedness to the sequence for the second claim.
</details>
<details><summary>Solution</summary>
Norm convergence need not hold: \(P_n\to I\) strongly on \(\ell^2\), while \(\|P_n-I\|=1\). However strong convergence makes every output sequence convergent and therefore bounded. Uniform boundedness gives \(\sup_n\|T_n\|<\infty\). The first statement has a supremum over unit inputs inside a limit; the second only bounds that supremum uniformly, which is weaker.
</details>

### Exercise 4.8 {#uniform-boundedness-ex-8}

Prove the dense-set criterion when the convergence set \(D\) is not assumed to be a linear subspace.

<details><summary>Hint 1</summary>
Inspect where density is used in the proof.
</details>
<details><summary>Hint 2</summary>
Linearity of the final limit comes from the operators after convergence is established everywhere.
</details>
<details><summary>Solution</summary>
For each target \(x\), the proof only selects one nearby \(d\in D\) and uses convergence at that point. It never adds or rescales elements of \(D\). Thus density alone supplies the Cauchy estimate and completeness supplies convergence at every \(x\). Once all these limits exist, taking limits in the operators' linearity identities proves the limit operator linear. No algebraic closure of \(D\) is needed.
</details>

### Exercise 4.9 {#uniform-boundedness-ex-9}

Suppose \(T_n\to T\) strongly and \(x_n\to x\) in a Banach domain. Prove \(T_nx_n\to Tx\).

<details><summary>Hint 1</summary>
Split the error through \(T_nx\).
</details>
<details><summary>Hint 2</summary>
Uniform boundedness controls the varying-input error.
</details>
<details><summary>Solution</summary>
Theorem 4.7 gives \(M=\sup_n\|T_n\|<\infty\). Then \(\|T_nx_n-Tx\|\le M\|x_n-x\|+\|T_nx-Tx\|\). The first term tends to zero by input convergence and the second by strong convergence at the fixed input \(x\). Merely knowing convergence at fixed inputs would not directly handle \(x_n\); the uniform norm estimate is the necessary bridge.
</details>

### Exercise 4.10 {#uniform-boundedness-ex-10}

If a family of bounded operators on a Banach space has unbounded norms, prove that every nonempty open ball contains an input with unbounded outputs.

<details><summary>Hint 1</summary>
Use the residual-set conclusion of Theorem 4.10.
</details>
<details><summary>Hint 2</summary>
Density means intersection with every nonempty open set.
</details>
<details><summary>Solution</summary>
The complements of the closed threshold sets are open and dense because any threshold interior would bound all operator norms. Baire makes their intersection dense. This intersection is exactly the inputs with unbounded output supremum. Every nonempty open ball therefore meets it. The conclusion concerns category and gives no claim about a probability of drawing such an input.
</details>

### Exercise 4.11 {#uniform-boundedness-ex-11}

Explain precisely why completeness of the codomain is unnecessary in Theorem 4.2 but necessary in the Cauchy-output step of Theorem 4.9.

<details><summary>Hint 1</summary>
The Baire sets live in the domain.
</details>
<details><summary>Hint 2</summary>
A Cauchy sequence in an incomplete target can converge only in its completion.
</details>
<details><summary>Solution</summary>
Uniform boundedness uses closedness of inverse images of norm balls and Baire completeness of the input domain; it constructs a numerical estimate and no new vector in the target. The dense-set criterion first proves output sequences Cauchy, then requires their limits to belong to \(Y\). Completeness of \(Y\) supplies that existence. Without it the estimate alone can put the limit in the completion rather than in the stated target space.
</details>

### Exercise 4.12 {#uniform-boundedness-ex-12}

Suppose \(X\) is Banach, \(T_n\in\mathcal L(X,Y)\), and \(\sum_n\|T_nx\|<\infty\) for every \(x\). Prove that the partial-sum operators \(S_N=\sum_{n\le N}T_n\) have uniformly bounded norms. Does the premise force \(\sum_n\|T_n\|<\infty\)?

<details><summary>Hint 1</summary>
For each fixed input, the triangle inequality bounds all partial sums.
</details>
<details><summary>Hint 2</summary>
For the converse use coordinate functionals on \(\ell^1\).
</details>
<details><summary>Solution</summary>
For fixed \(x\), \(\|S_Nx\|\le\sum_n\|T_nx\|<\infty\), so uniform boundedness applied to \(S_N\) gives \(\sup_N\|S_N\|<\infty\). The operator-norm series need not converge. On \(X=\ell^1\), let \(T_nx=x_n\) with scalar target. Then \(\sum_n|T_nx|=\|x\|_1<\infty\) for every input, but every \(\|T_n\|=1\), so the norm series diverges. Pointwise absolute summability and summability in operator norm are distinct.
</details>

## Sources and scope

This is original exposition and exercise development for the commissioned Functional Analysis book. Its Baire input is proved in the linked Euler Real Analysis chapter. The local Quarto Banach-pillars and Baire/Ascoli chapters are source lineage; the syllabus benchmarks are John Conway, *A Course in Functional Analysis*, and Haim Brezis, *Functional Analysis, Sobolev Spaces and Partial Differential Equations*. No external exercises are copied. This chapter does not prove the open mapping theorem, Hahn–Banach or weak compactness; each has separate hypotheses and a separate place in the course.

## Summary

Completeness yields an interior bound through Baire, and linearity turns that bound into one common operator norm estimate. Pointwise limits of bounded operators are consequently bounded when the input is Banach. Strong convergence still differs from norm convergence, and a dense convergence set requires uniform stability before approximation can pass to all inputs. Unbounded norms even force a residual family of badly behaved inputs. The next Banach-space pillar turns surjectivity into openness and relates closed graphs to continuity.
