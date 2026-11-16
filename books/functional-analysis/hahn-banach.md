
# The Hahn–Banach Theorem

A bounded linear functional on a subspace measures only part of a vector space. Can that measurement be extended to all vectors without increasing its amplification bound? Hahn–Banach says yes for scalar-valued bounded linear functionals. Its consequences are stronger than an extension statement: enough continuous functionals exist to detect each vector's norm, distinguish a point from a closed subspace, and embed a normed space isometrically into its bidual.

The preparation is [Normed and Banach Spaces](normed-banach-spaces.md), including quotient norms, and [Bounded Operators and Duals](bounded-operators-duals.md). Neither the space nor the subspace needs to be complete for the basic extension theorem. The proof uses Zorn's lemma as a set-theoretic choice principle: a partially ordered set in which every chain has an upper bound has a maximal element. We state that foundational input explicitly instead of disguising an infinite extension construction as a finite induction.

We first prove a real theorem dominated by a sublinear function. The one-new-direction calculation is the main mathematical step. Zorn then extends the domain maximally. The norm-preserving real and complex forms follow, with a separate argument needed to recover complex linearity and its exact norm bound.

## Domination by a sublinear function

**Definition 3.1 (Sublinear function).** On a real vector space, a finite-valued function \(p:X\to\mathbb R\) is sublinear if \(p(x+y)\le p(x)+p(y)\) and \(p(tx)=tp(x)\) for every \(t\ge0\). In particular \(p(0)=0\). It need not be symmetric or nonnegative; every norm multiplied by a nonnegative constant is an example.

**Lemma 3.2 (One-dimensional extension).** Let \(M\) be a real linear subspace, let \(f:M\to\mathbb R\) be linear with \(f(m)\le p(m)\), and let \(v\notin M\). There is a linear extension \(g:M+\mathbb Rv\to\mathbb R\) still satisfying \(g\le p\).

*Proof.* Every vector in the enlarged subspace has a unique representation \(m+tv\). An extension must have form \(g(m+tv)=f(m)+tc\) for one real number \(c\). For positive \(t\), domination is equivalent, after rescaling \(m\), to
\[
 c\le p(n+v)-f(n)\quad(n\in M).
\]
For negative \(t\), write \(t=-s\), \(s>0\), and obtain
\[
 c\ge f(m)-p(m-v)\quad(m\in M).
\]
All lower bounds are at most all upper bounds. Indeed, for any \(m,n\in M\),
\[
 f(m)+f(n)=f(m+n)\le p(m+n)
 \le p(m-v)+p(n+v).
\]
Rearranging gives the required comparison. The lower bounds have finite supremum bounded above by any upper bound, and the upper bounds have finite infimum bounded below by any lower bound. They are nonempty families of finite numbers, so choose \(c\) between their supremum and infimum. The two sign calculations prove domination for nonzero \(t\), and the original assumption proves it at \(t=0\). The proposed formula is linear and extends \(f\). ∎

There is generally an interval of admissible choices for \(c\), rather than a unique value. The lower and upper bounds come from different signs of the new coordinate. Checking only positive multiples would miss half the inequalities required for a real linear extension.

**Theorem 3.3 (Real Hahn–Banach domination).** Under the same assumptions on \(X,p,M,f\), there is a real linear extension \(F:X\to\mathbb R\) with \(F(x)\le p(x)\) for every \(x\in X\).

*Proof.* Consider all pairs \((N,g)\) with \(M\subseteq N\subseteq X\), \(N\) a linear subspace, and \(g\) a dominated linear extension of \(f\) on \(N\). Order them by extension. The original pair is a member. For a chain, take the union of the domains and use the compatible functional values there. The union is a linear subspace because any two of its vectors lie together in one of the chain's domains. The functional is well defined because comparable extensions agree, and linearity and domination hold on a domain containing any finitely many vectors needed to check them. Thus every chain has an upper bound.

Zorn's lemma gives a maximal pair. If its domain were not all of \(X\), select a vector outside it and apply Lemma 3.2 to obtain a strictly larger dominated extension. This contradicts maximality. Hence the maximal domain is \(X\), proving the theorem. ∎

The proof asserts existence and does not prescribe a computable formula for a general infinite-dimensional extension. It also explains why extending along finitely many basis vectors is not the full argument when the algebraic dimension may be infinite.

## Norm-preserving real and complex extension

**Corollary 3.4 (Real norm-preserving extension).** If \(M\) is any subspace of a real normed space and \(f\in M^*\), there is \(F\in X^*\) extending it with \(\|F\|=\|f\|\).

*Proof.* Put \(C=\|f\|\) and \(p(x)=C\|x\|\). The domination theorem gives a linear extension with \(F(x)\le C\|x\|\). Apply it to \(-x\): \(-F(x)\le C\|x\|\). Thus \(|F(x)|\le C\|x\|\), so \(\|F\|\le C\). Restricting to the subspace gives \(\|F\|\ge\|f\|=C\), yielding equality. If the original norm is zero, the same argument gives the zero extension. ∎

Closedness of \(M\) is not needed. A bounded functional already extends uniquely to its closure by taking scalar limits; Hahn–Banach extends beyond that closure, where choices can become nonunique.

**Theorem 3.5 (Complex norm-preserving extension).** The same norm-preserving extension holds for complex normed spaces and complex-linear bounded functionals.

*Proof.* Regard \(X\) temporarily as a real vector space. Let \(u=\operatorname{Re}f\) on \(M\), so \(|u(m)|\le C\|m\|\), where \(C=\|f\|\). The real domination argument with \(p(x)=C\|x\|\) supplies real-linear \(U:X\to\mathbb R\) extending \(u\), with \(|U(x)|\le C\|x\|\). Define
\[
 F(x)=U(x)-iU(ix).
\]
It is real-linear, and
\(F(ix)=U(ix)+iU(x)=iF(x)\). Real linearity plus this identity proves complex linearity. On \(M\), writing \(f(m)=a+ib\) gives \(u(m)=a\), \(u(im)=-b\); hence \(F(m)=a+ib=f(m)\).

A direct triangle inequality would give only the poor bound \(2C\). Instead, for any \(x\) with \(F(x)\ne0\), choose a unit complex scalar \(\lambda\) such that \(\lambda F(x)=|F(x)|\). Complex linearity yields
\[
 |F(x)|=\operatorname{Re}F(\lambda x)=U(\lambda x)
 \le C\|\lambda x\|=C\|x\|.
\]
The bound is immediate if \(F(x)=0\). Thus \(\|F\|\le C\), and restriction again proves the reverse inequality. ∎

The real part of a complex functional alone is not complex linear. The formula for \(F\) reconstructs its imaginary part using multiplication by \(i\). The phase choice is then what restores the exact norm, rather than a factor-two estimate that would fail the theorem's conclusion.

## Norms and closed subspaces detected by functionals

**Corollary 3.6 (Norming functional).** For every nonzero \(x\in X\), there is \(\phi\in X^*\) with \(\|\phi\|=1\) and \(\phi(x)=\|x\|\). Consequently
\[
 \|x\|=\sup_{\|\phi\|\le1}|\phi(x)|.
\]

*Proof.* On the one-dimensional subspace generated by \(x\), define \(f(\alpha x)=\alpha\|x\|\). Its norm is one. Extend it norm preservingly over the underlying field. The resulting functional attains the claimed value. For any other unit-ball functional, the defining norm inequality gives \(|\phi(x)|\le\|x\|\), proving the supremum equality. At zero that equality holds directly. ∎

This does not say that every functional attains its own norm on the unit ball of \(X\). The two optimization statements fix different objects: here a vector is fixed and a functional is selected; the nonattainment examples in the preceding chapter fix a functional and vary vectors.

**Theorem 3.7 (Separation from a closed subspace).** Let \(M\) be a closed subspace and \(x\notin M\). With \(d=\operatorname{dist}(x,M)>0\), there is \(\phi\in X^*\) such that
\[
 \|\phi\|=1,\quad \phi|_M=0,\quad \phi(x)=d.
\]

*Proof.* The quotient \(X/M\) is normed and the coset \(q=x+M\) has norm \(d>0\). Corollary 3.6 gives a norm-one functional \(\psi\) on that quotient with \(\psi(q)=d\). Let \(\pi:X\to X/M\) be the quotient map and \(\phi=\psi\circ\pi\). Since \(\|\pi y\|\le\|y\|\), its norm is at most one; it vanishes on \(M\) and has the required value at \(x\).

To prove its norm is exactly one, choose \(m_n\in M\) with \(\|x-m_n\|\to d\). Then \(\phi(x-m_n)=d\), so \(\|\phi\|\ge d/\|x-m_n\|\to1\). Together with the upper bound this proves equality. No nearest point of \(M\) was assumed to exist. ∎

**Worked example 3.8 (Distance realized as a measurement).** In \(\mathbb R^2\) with Euclidean norm let \(M\) be the horizontal axis and \(x=(a,b)\) with \(b\ne0\). The distance is \(|b|\). The functional \(\phi(s,t)=\operatorname{sgn}(b)t\) has norm one, vanishes on \(M\), and gives \(\phi(x)=|b|\). This finite-dimensional formula illustrates the quotient construction. In a general Banach space the same separating value exists even if a closest representative of the coset is unavailable.

Taking the closure if necessary gives a useful characterization: a vector belongs to \(\overline M\) exactly when every continuous functional vanishing on \(M\) also vanishes on that vector. One direction follows from continuity; the other follows by separating a point outside the closed subspace \(\overline M\). Thus dual measurements recover closed linear structure even when a coordinate basis is unavailable.

## Extensions can be nonunique and nonconstructive

**Worked example 3.9 (Many norm-preserving extensions).** On \(X=\mathbb R^2\) with norm \(\|(s,t)\|_1=|s|+|t|\), define \(f(s,0)=s\) on the horizontal axis. For every \(c\in[-1,1]\), the functional \(F_c(s,t)=s+ct\) extends \(f\). It has norm one because \(|s+ct|\le|s|+|t|\), with equality at \((1,0)\). The different coefficients give different extensions of the same norm.

For the Euclidean norm, by contrast, the extension \(s+ct\) has norm \(\sqrt{1+c^2}\). Keeping norm one forces \(c=0\). Hahn–Banach promises existence across both geometries and does not promise uniqueness. Even when an extension happens to be unique in one problem, that uniqueness needs its own geometric argument.

**Worked example 3.10 (A functional beyond summable coordinate weights).** Work over real scalars. Let \(c\subseteq\ell^\infty\) be the subspace of convergent sequences. The limit map \(f(x)=\lim_nx_n\) is linear, bounded with norm one, and sends the all-ones sequence to one. Hahn–Banach extends it to a norm-one real functional \(F\) on all of \(\ell^\infty\).

Every coordinate unit vector has limit zero, so \(F(e_n)=0\) for all \(n\), while \(F(1,1,\ldots)=1\). This functional cannot be represented as \(F(x)=\sum a_nx_n\) with \(a\in\ell^1\): coordinate tests would force all \(a_n=0\), contradicting its value on the constant sequence. The complete dual of \(\ell^\infty\) is therefore larger than the obvious summable-coordinate family.

This extension is not automatically shift invariant. Calling it a shift-invariant Banach limit would claim an extra property not established by this norm-preserving extension argument. Positivity in the real case does follow: for \(x\ge0\), \(M=\|x\|_\infty>0\) gives \(\|1-x/M\|_\infty\le1\), so \(|1-F(x)/M|\le1\), implying \(F(x)\ge0\). At \(x=0\) positivity is immediate.

## Closed hyperplanes are exactly continuous kernels

A nonzero scalar functional has an algebraic kernel of codimension one. Indeed choose \(x_0\) with \(\phi(x_0)=1\); then every vector decomposes uniquely as \(\phi(x)x_0+m\), with \(m\in\ker\phi\). Continuity makes that kernel closed, but the converse also holds and gives a useful geometric norm formula.

**Proposition 3.10a (Kernel criterion).** A nonzero linear functional \(\phi\) on a normed space is bounded if and only if its kernel is closed. If \(\phi(x_0)=1\) and the kernel is closed, then
\[
 \|\phi\|=\frac1{\operatorname{dist}(x_0,\ker\phi)}.
\]

*Proof.* A bounded functional is continuous, so its kernel is the inverse image of the closed scalar set zero. Conversely suppose the kernel is closed. Its distance \(d\) from \(x_0\) is positive. For any \(x\) with \(a=\phi(x)\ne0\), the vector \(x/a-x_0\) belongs to the kernel. Therefore \(\|x\|/|a|=\|x/a\|\ge d\), giving \(|\phi(x)|\le\|x\|/d\). The same inequality holds when \(a=0\), proving boundedness. To see equality of the norm, choose \(m_n\) in the kernel with \(\|x_0-m_n\|\to d\). Their functional values are all one, so the ratios \(1/\|x_0-m_n\|\) approach \(1/d\), proving the reverse bound. ∎

This criterion does not require completeness. It connects algebraic codimension to a metric question: can the affine level set \(\phi=1\) approach zero arbitrarily closely? If it can, no finite norm bound exists. If its distance is positive, that distance determines the exact amplification constant. A Hamel-basis linear functional need not have a closed kernel; purely algebraic construction therefore does not establish continuity.

For a proper closed subspace of larger codimension, Hahn–Banach supplies multiple functionals whose kernels contain it. The intersection characterization above combines those measurements to recover precisely the subspace. One functional separates a chosen outside point; the whole annihilator detects every outside point without requiring a finite coordinate list.

## Dual operators and the bidual

**Corollary 3.11 (Exact dual operator norm).** For every bounded operator \(T:X\to Y\), its dual operator satisfies \(\|T^*\|=\|T\|\).

*Proof.* The preceding chapter proved the upper bound. Fix a unit-ball vector \(x\). If \(Tx\ne0\), choose \(\phi\in Y^*\) of norm one with \(\phi(Tx)=\|Tx\|\). Then \(\|T^*\|\ge\|T^*\phi\|\ge|(T^*\phi)(x)|=\|Tx\|\). The same inequality is trivial if \(Tx=0\). Taking the supremum over unit-ball vectors gives the reverse bound. ∎

**Definition 3.12 (Canonical bidual embedding).** The map \(J:X\to X^{**}\) is defined by \((Jx)(\phi)=\phi(x)\). It is linear over the underlying field, and each \(Jx\) is bounded because \(|\phi(x)|\le\|\phi\|\|x\|\).

Corollary 3.6 gives \(\|Jx\|=\|x\|\), so \(J\) is an isometry and is injective. If \(X\) is Banach its image is closed in the bidual, since an isometric image of a complete space is complete and a complete subspace of a metric space is closed. Surjectivity is a separate condition, called reflexivity, studied with weak topologies later. An isometric embedding alone does not prove it.

## Quotient measurements and annihilators

Let M be a closed linear subspace of a normed space X, and let Q:X→X/M be the quotient map. Its annihilator is M-perp={φ∈X*:φ(m)=0 for all m∈M}. The dual of the quotient is canonically isometric to this annihilator. More precisely, composition ψ↦ψ∘Q is a linear bijection from (X/M)* onto M-perp and preserves norms.

A quotient functional clearly pulls back to a functional vanishing on M. Its bound gives |ψ(Qx)|≤||ψ||||Qx||≤||ψ||||x||, so the pullback norm is at most ||ψ||. Conversely let φ vanish on M. Define ψ(x+M)=φ(x). The value is independent of representative because differences lie in M. For every m∈M, |ψ(x+M)|=|φ(x−m)|≤||φ||||x−m||. Taking the infimum over m bounds it by ||φ||||x+M||, proving continuity and the opposite norm estimate. These constructions are inverse, and applying both inequalities gives equality of norms.

This description gives an exact dual expression for distance. The norming-functional consequence of Hahn–Banach, applied in X/M, says that the quotient norm of x+M equals the supremum of |ψ(x+M)| over quotient functionals of norm at most one. Pulling them back yields dist(x,M)=sup{|φ(x)|:φ∈M-perp,||φ||≤1}. Thus distance from a closed subspace is the largest discrepancy detected by a normalized measurement that ignores that subspace. The supremum statement and the earlier separating functional agree, including attainment by a chosen norming functional when x is outside M.

For a concrete example take X=c0 with supremum norm and M the sequences whose first r coordinates vanish. The quotient norm is the maximum magnitude of those first r coordinates: every representative shares them, and subtracting the remaining tail realizes that lower bound. Its dual is the r-dimensional ℓ1 space, represented by functionals Σ_{j≤r}ajxj with norm Σ|aj|. These are precisely the bounded functionals on c0 vanishing on M. The abstract quotient identification reproduces this coordinate calculation without choosing a complement in advance.

Closedness matters. If M is not closed, the quotient infimum is only a seminorm and points in the closure of M can have zero distance without belonging to M. Continuous annihilating measurements cannot distinguish M from its closure. One should therefore either pass to the closed quotient or state explicitly that one is using a seminormed algebraic quotient. Hahn–Banach detects closed linear geometry; it does not turn every algebraic distinction into a positive metric separation.

## Exercises

### Exercise 3.1 {#hahn-banach-ex-1}

Verify that \(p(x)=C\|x\|\), with \(C\ge0\), is sublinear and explain why domination of a real linear functional by it controls both signs.

<details><summary>Hint 1</summary>
Use the norm axioms for positive homogeneity and subadditivity.
</details>
<details><summary>Hint 2</summary>
Apply the domination inequality at \(-x\).
</details>
<details><summary>Solution</summary>
The norm axioms give \(p(x+y)\le p(x)+p(y)\) and \(p(tx)=tp(x)\) for \(t\ge0\). If \(F(x)\le C\|x\|\), linearity gives \(-F(x)=F(-x)\le C\|-x\|=C\|x\|\). Hence \(|F(x)|\le C\|x\|\). The second sign is essential to pass from one-sided domination to a norm bound.
</details>

### Exercise 3.2 {#hahn-banach-ex-2}

In Lemma 3.2, prove directly that every lower bound is at most every upper bound.

<details><summary>Hint 1</summary>
Use domination on \(m+n\in M\).
</details>
<details><summary>Hint 2</summary>
Write \(m+n=(m-v)+(n+v)\).
</details>
<details><summary>Solution</summary>
Linearity and domination give \(f(m)+f(n)=f(m+n)\le p(m+n)\). Subadditivity gives \(p(m+n)\le p(m-v)+p(n+v)\). Rearranging yields \(f(m)-p(m-v)\le p(n+v)-f(n)\), exactly the comparison required. Since it holds for every pair, the interval of possible new functional values is nonempty.
</details>

### Exercise 3.3 {#hahn-banach-ex-3}

Why is the union of a chain of compatible dominated extensions again a linear dominated extension?

<details><summary>Hint 1</summary>
Any two chain domains are comparable by inclusion.
</details>
<details><summary>Hint 2</summary>
Put all vectors in a single domain before checking a finite linear identity.
</details>
<details><summary>Solution</summary>
Each pair of vectors from the union lies in one of the two comparable domains containing them. Therefore its sum and scalar multiples lie in that domain and in the union. The function values agree on overlaps because the pairs are ordered by extension. A finite linear relation can thus be checked inside one chain member, proving linearity; domination holds for each vector in any domain containing it. This supplies the upper bound required by Zorn's lemma.
</details>

### Exercise 3.4 {#hahn-banach-ex-4}

For a real-linear functional \(U\) on a complex vector space, show that \(F(x)=U(x)-iU(ix)\) is complex linear.

<details><summary>Hint 1</summary>
First check real linearity and the effect of multiplying the input by \(i\).
</details>
<details><summary>Hint 2</summary>
Every complex scalar is a real linear combination of one and \(i\).
</details>
<details><summary>Solution</summary>
Real linearity is immediate from that of \(U\). Also \(F(ix)=U(ix)-iU(-x)=U(ix)+iU(x)=iF(x)\). For \(\lambda=a+ib\) with real \(a,b\), real linearity gives \(F(\lambda x)=aF(x)+bF(ix)=(a+ib)F(x)\). Thus \(F\) is complex linear. A general real-linear \(U\) itself need not have this property.
</details>

### Exercise 3.5 {#hahn-banach-ex-5}

Explain why the complex norm estimate uses a phase choice instead of adding two real bounds.

<details><summary>Hint 1</summary>
A triangle estimate would produce the constant \(2C\).
</details>
<details><summary>Hint 2</summary>
Rotate the functional value onto the nonnegative real axis.
</details>
<details><summary>Solution</summary>
The separate estimates on \(U(x)\) and \(U(ix)\) give only \(|F(x)|\le2C\|x\|\), which does not preserve the original norm. Once complex linearity is proved, choose \(|\lambda|=1\) with \(\lambda F(x)=|F(x)|\). Then \(|F(x)|=\operatorname{Re}F(\lambda x)=U(\lambda x)\le C\|\lambda x\|=C\|x\|\). The norm is preserved exactly.
</details>

### Exercise 3.6 {#hahn-banach-ex-6}

Prove that continuous functionals separate distinct vectors of a normed space.

<details><summary>Hint 1</summary>
Apply the norming-functional result to their nonzero difference.
</details>
<details><summary>Hint 2</summary>
A nonzero difference in functional values means the original values differ.
</details>
<details><summary>Solution</summary>
For \(x\ne y\), the vector \(x-y\) is nonzero. Choose \(\phi\) of norm one with \(\phi(x-y)=\|x-y\|>0\). Linearity gives \(\phi(x)-\phi(y)=\|x-y\|\ne0\). Thus the functional distinguishes the vectors. Completeness is not needed for this application of Hahn–Banach.
</details>

### Exercise 3.7 {#hahn-banach-ex-7}

If a continuous functional vanishes on a subspace \(M\), prove it vanishes on \(\overline M\). Show the converse separation statement for a point outside that closure.

<details><summary>Hint 1</summary>
Approximate a closure point by a sequence in \(M\).
</details>
<details><summary>Hint 2</summary>
Apply the closed-subspace separation theorem to \(\overline M\).
</details>
<details><summary>Solution</summary>
If \(m_n\in M\) converge to \(x\in\overline M\), continuity gives \(\phi(x)=\lim\phi(m_n)=0\). Conversely, if \(x\notin\overline M\), Theorem 3.7 supplies a functional zero on the closed subspace \(\overline M\) but with positive value at \(x\). It is in particular zero on \(M\). Therefore the common kernel of all annihilating continuous functionals is exactly \(\overline M\).
</details>

### Exercise 3.8 {#hahn-banach-ex-8}

In \(\mathbb R^2\) with the one-norm, find every norm-one extension of \(f(s,0)=s\).

<details><summary>Hint 1</summary>
Every linear extension has form \(s+ct\).
</details>
<details><summary>Hint 2</summary>
Its norm relative to the one-norm is \(\max(1,|c|)\).
</details>
<details><summary>Solution</summary>
The formula for any extension is \(F_c(s,t)=s+ct\). The estimate \(|s+ct|\le\max(1,|c|)(|s|+|t|)\) gives an upper bound, and coordinate vectors attain one and \(|c|\), proving equality. Therefore its norm is one exactly for \(|c|\le1\). This explicitly displays nonuniqueness while keeping the original subspace norm unchanged.
</details>

### Exercise 3.9 {#hahn-banach-ex-9}

Show that a norm-preserving extension of the real sequence-limit functional on \(c\) vanishes on \(c_0\), takes value one on the constant sequence one, and cannot have summable coordinate coefficients.

<details><summary>Hint 1</summary>
Both \(c_0\) and the constant sequence belong to \(c\).
</details>
<details><summary>Hint 2</summary>
Test any proposed coefficient representation on the coordinate unit vectors.
</details>
<details><summary>Solution</summary>
The extension agrees with the ordinary limit on \(c\), hence is zero on every sequence tending to zero and is one on the constant sequence. If it were \(\sum a_nx_n\) for some \(a\in\ell^1\), testing \(e_n\in c_0\) would give \(a_n=0\) for every \(n\). The resulting functional would be zero on the constant sequence, a contradiction. Hahn–Banach supplies functionals beyond that coordinate family.
</details>

### Exercise 3.10 {#hahn-banach-ex-10}

Let \(T:X\to Y\) be bounded. Complete the lower-bound argument proving \(\|T^*\|\ge\|T\|\), without assuming \(T\) attains its norm.

<details><summary>Hint 1</summary>
Choose unit-ball inputs whose outputs approximate the supremum.
</details>
<details><summary>Hint 2</summary>
Choose a separate norming functional for each nonzero output.
</details>
<details><summary>Solution</summary>
For any unit-ball input \(x\) with nonzero output, Hahn–Banach gives a unit functional \(\phi_x\) with \(\phi_x(Tx)=\|Tx\|\). Therefore \(\|T^*\|\ge\|T^*\phi_x\|\ge\|Tx\|\). This holds for all unit-ball inputs, including zero outputs trivially, so taking their supremum proves the claim. No single maximizing input or single functional for all outputs is required.
</details>

### Exercise 3.11 {#hahn-banach-ex-11}

Prove that the canonical map \(J:X\to X^{**}\) is an isometry and explain why this alone does not establish reflexivity.

<details><summary>Hint 1</summary>
Its norm is a supremum over the dual unit ball.
</details>
<details><summary>Hint 2</summary>
An isometric embedding is injective but need not be surjective.
</details>
<details><summary>Solution</summary>
By definition \(\|Jx\|=\sup_{\|\phi\|\le1}|\phi(x)|\). Corollary 3.6 makes this equal to \(\|x\|\), so \(J\) preserves norms and distances and has zero kernel. Reflexivity requires every element of the bidual to equal \(Jx\) for some \(x\). None of the displayed norm equalities gives that surjectivity. It is a separate property studied later.
</details>

### Exercise 3.12 {#hahn-banach-ex-12}

For nonzero \(x_0\), use a norming functional to construct a bounded projection onto \(\operatorname{span}\{x_0\}\) with norm one.

<details><summary>Hint 1</summary>
Choose \(\phi(x_0)=\|x_0\|\), \(\|\phi\|=1\).
</details>
<details><summary>Hint 2</summary>
Scale \(\phi(x)x_0\) by \(\|x_0\|\).
</details>
<details><summary>Solution</summary>
Define \(P(x)=\phi(x)x_0/\|x_0\|\). Its range lies in the stated span and it fixes \(x_0\), so \(P^2=P\). The norm bound \(\|Px\|=|\phi(x)|\le\|x\|\) gives \(\|P\|\le1\), while the fixed unit vector \(x_0/\|x_0\|\) gives the reverse inequality. This constructs a projection onto a one-dimensional subspace; it does not prove every closed subspace of a Banach space admits a bounded projection.
</details>

## Sources and scope

This is original exposition and supported exercise development. The local source lineage is the Quarto Banach-pillars chapter; the syllabus benchmarks are Conway and Brezis. Zorn's lemma is the explicit foundational choice principle used in the extension proof. The conclusions concern scalar-valued functionals, closed-subspace separation and dual norm detection. General convex-set separation, vector-valued extension, reflexivity and invariant Banach limits require further hypotheses or arguments and are not claimed here.

## Summary

One new real direction can be added because the lower and upper domination bounds are compatible. Zorn's lemma extends that construction to the whole space. A real-part reconstruction and phase estimate give the complex norm-preserving form. Norming functionals then detect vectors, separate closed subspaces, identify dual operator norms and embed the space isometrically into its bidual. The next chapter uses Baire category, rather than extension, to turn pointwise bounds on a family of operators into one uniform norm bound.
