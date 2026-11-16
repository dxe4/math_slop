
# Riesz Representation and Radon Measures

A positive linear rule for integrating continuous test functions already contains the information of a measure. Riesz representation recovers that measure and explains why continuous functions are sufficient to identify it. The topology supplies compact cutoffs and partitions of unity. Positivity supplies local bounds, and a covering construction supplies countable additivity.

We give a complete proof on a **locally compact second-countable metric space** \(X\). This includes Euclidean spaces, their open subsets, compact metric spaces and countable discrete spaces. The metric and countability hypotheses are retained throughout the proof; the theorem on arbitrary locally compact Hausdorff spaces requires a more general topological construction. We do not infer sigma compactness from metrizability alone. The retained Quarto Radon-measures source develops the wider topological conventions; the present authored route makes its own scope explicit.

Our positive Radon measures are Borel measures finite on compact sets, outer regular on Borel sets and inner regular there by compact sets. Under the hypotheses here this strong inner-regularity convention follows from the construction. The signed representation at the end concerns finite real signed Radon measures. Preparations are metric topology, the Carathéodory construction and [signed measures](signed-measures-radon-nikodym.md).

## Compact cutoffs and local control

A metric space is locally compact if every input has an open neighbourhood with compact closure. A countable base allows us to select countably many such neighbourhoods covering \(X\): choose base members with compact closure inside the available neighbourhoods. Finite unions of their compact closures form an increasing compact exhaustion \(K_n\uparrow X\). This is the sigma-compactness that will later supply finite-measure localization.

Write \(C_c(X)\) for the real continuous functions with compact support, where support is the closure of the nonzero set. If \(K\subset U\), with \(K\) compact and \(U\) open, there is \(\phi\in C_c(X)\) with \(0\le\phi\le1\), \(\phi=1\) on \(K\) and support inside \(U\). Indeed choose finitely many relatively compact neighbourhoods whose closures lie inside \(U\) and whose union \(V\) contains \(K\). A metric cutoff is
\[
 \phi(x)=\frac{d(x,X\setminus V)}{d(x,X\setminus V)+d(x,K)}.
\]
The denominator is positive because the disjoint closed sets include a compact set. The support is contained in the compact closure of \(V\). If \(K\) is empty choose zero; if \(V=X\) and the space is compact choose one. These cases avoid treating distance to an empty set as a finite scalar.

**Lemma 13.1 (Finite compact partition).** If a compact set \(K\) is covered by finitely many open sets \(U_i\), there are nonnegative \(\chi_i\in C_c(U_i)\) whose sum equals one on \(K\) and is at most one everywhere.

*Proof.* First shrink a finite neighbourhood cover of \(K\) so that each member has compact closure inside one of the \(U_i\). Combine the closures assigned to each index, obtaining compact sets \(F_i\subset U_i\) whose union covers \(K\). Choose compact cutoffs \(\psi_i\) supported in \(U_i\) and equal to one on \(F_i\). Their sum \(s\) is positive on a neighbourhood of \(K\). Choose a further compact cutoff \(\eta\), equal to one on \(K\), supported inside \(\{s>0\}\). Put \(\chi_i=\eta\psi_i/s\) where \(s>0\), and zero elsewhere. These functions are continuous, since the compact support of \(\eta\) stays inside that open set. They have the asserted supports and sum \(\eta\). ∎

Let \(L:C_c(X)\to\mathbb R\) be linear and positive: \(L(f)\ge0\) whenever \(f\ge0\). It is automatically bounded on functions supported in any fixed compact \(K\). Take a cutoff \(\psi=1\) there; the inequalities \(-\|f\|_\infty\psi\le f\le\|f\|_\infty\psi\) give \(|L(f)|\le L(\psi)\|f\|_\infty\). This is a local bound. A single bound for all supports would impose finiteness of the total measure, which we are not assuming yet.

## From test functions to outer measure

For open \(U\subset X\), define
\[
 q(U)=\sup\{L(\phi):\phi\in C_c(X),\ 0\le\phi\le1,
 \operatorname{supp}\phi\subset U\}.
\]
The empty supremum contains the zero function and has value zero. Values may be infinite. Monotonicity is immediate. If \(U\subset\bigcup_iU_i\) is a countable open cover, take a permitted \(\phi\) and use a finite subcover of its compact support. A compact partition gives \(\phi=\sum_i\phi\chi_i\), with each product permitted for its corresponding open set. Positivity and linearity give \(L(\phi)\le\sum_iq(U_i)\). Taking the supremum proves countable subadditivity on open covers.

For disjoint open sets, the reverse inequality holds as well. Finitely many permitted test functions supported in different sets have sum between zero and one and supported in their union. Taking their independent suprema gives superadditivity for finite subfamilies, and then for the countable sum. Together with subadditivity, this proves additivity on disjoint open families.

Define, for arbitrary subsets,
\[
 \mu^*(A)=\inf\{q(U):A\subset U,\ U\text{ open}\}.
\]
The usual open-envelope argument makes this an outer measure: for a countable family of finite total outer measure, choose open envelopes with a summable error budget and use the open-cover bound. If that total is infinite the inequality is automatic. On open sets \(\mu^*(U)=q(U)\), by monotonicity and the option of taking \(U\) itself as envelope.

This outer measure has an additional metric property. If two sets have positive distance, disjoint open neighbourhoods around them can be intersected with any common open envelope. Additivity on disjoint opens then gives
\[
 \mu^*(A\cup B)=\mu^*(A)+\mu^*(B)
 \qquad\text{when }d(A,B)>0.
\]
The reverse inequality is ordinary outer subadditivity. The equality is called metric additivity.

## Why all Borel sets are admitted

**Lemma 13.2 (Metric outer measures admit Borel sets).** Every closed set is Carathéodory measurable for a metric outer measure, so every Borel set is measurable.

*Proof.* Fix a closed set \(F\) and an arbitrary \(T\) with finite outer measure. Set \(T_n=\{x\in T:d(x,F)\ge1/n\}\). The sets \(T\cap F\) and \(T_n\) have positive distance, so
\[
 \mu^*(T)\ge\mu^*(T\cap F)+\mu^*(T_n).
\]
We must account for the layer approaching \(F\), without invoking continuity of outer measure on arbitrary sets. Put \(C_n=T_{n+1}\setminus T_n\). Any finite collection of alternate layers is pairwise separated by positive distances: the distance-to-\(F\) function is one-Lipschitz and the corresponding distance ranges have gaps. Metric additivity bounds the sum of their outer measures by \(\mu^*(T)\). Apply this separately to odd and even layers. Thus \(\sum_n\mu^*(C_n)<\infty\).

For every \(N\), the set \(T\setminus F\) is covered by \(T_N\) and the layers with indices at least \(N\). Subadditivity yields \(\mu^*(T\setminus F)\le\mu^*(T_N)+\sum_{n\ge N}\mu^*(C_n)\). The tail tends to zero. Combining the two bounds proves the Carathéodory lower inequality for \(F\). If \(\mu^*(T)=\infty\), that lower inequality is automatic; subadditivity supplies the other direction in every case. The Carathéodory measurable sets form a sigma algebra, so containing closed sets implies containing all Borel sets. ∎

Let \(\mu\) be the restriction of \(\mu^*\) to Borel sets. Compact sets have finite measure. To see this, enclose a compact \(K\) in a relatively compact open \(V\), and choose \(\psi=1\) on its compact closure. Every permitted test function for \(V\) is at most \(\psi\), so \(q(V)\le L(\psi)<\infty\). This proves both compact finiteness and local finiteness.

Outer regularity follows directly from the open-envelope definition. For inner regularity on an open set, any permitted \(\phi\) with support \(K\) satisfies \(L(\phi)\le\mu(K)\): it is permitted in every open neighbourhood of \(K\), and one takes the infimum of their values. Consequently
\[
 \mu(U)=q(U)=\sup_{K\subset U,\ K\text{ compact}}\mu(K).
\]
The opposite inequality follows simply from monotonicity.

To obtain inner regularity on all Borel sets, first let \(A\) have finite measure. A compact exhaustion makes \(\mu(A\setminus K_n)\to0\). Outer approximate \(K_n\setminus A\) by an open \(W\) with mass arbitrarily close to that finite mass. The compact set \(K_n\setminus W\) lies inside \(A\), and the lost part inside \(K_n\) has small measure by finite subtraction. Combining the two errors gives compact inner approximation of \(A\). For an infinite-measure set, its intersections with exhaustion compacts have finite measures increasing to infinity. Inner approximate those finite pieces to obtain compact subsets with arbitrarily large mass. Thus \(\mu\) is Radon in the stated convention.

## Recovering the functional

**Theorem 13.3 (Positive Riesz representation).** Every positive linear functional on \(C_c(X)\) is integration against a unique positive Radon measure on the stated locally compact second-countable metric space.

*Proof.* The construction has supplied the measure. We prove \(L(f)=\int f\,d\mu\) first for nonnegative \(f\in C_c(X)\). Put \(K=\operatorname{supp}f\), of finite measure, choose \(\delta>0\), and take an integer \(N\) with \(N\delta\ge\|f\|_\infty\). The open sets \(U_j=\{f>j\delta\}\), for \(1\le j\le N\), have finite measure. For each choose permitted \(\phi_j\) whose functional value approaches \(\mu(U_j)\). Since \(\delta\sum_{j=1}^N\phi_j\le f\), positivity and independent approximation give
\[
 \delta\sum_{j=1}^N\mu(U_j)\le L(f).
\]
Pointwise, \(f\le\delta1_K+\delta\sum_{j=1}^N1_{U_j}\). Thus \(\int f-\delta\mu(K)\le L(f)\).

For the reverse bound decompose
\[
 f=\delta\sum_{j=0}^{N-1}\theta_j,
 \qquad \theta_j=\min(1,\max(0,f/\delta-j)).
\]
The first term has support in \(K\) and functional value at most \(\mu(K)\). For \(j\ge1\), its support is compact and contained in \(\{f>(j-1)\delta\}\), so its functional value is at most that open set's measure. The resulting upper step sum is pointwise at most \(f+2\delta1_K\). Therefore \(L(f)\le\int f+2\delta\mu(K)\). Let \(\delta\downarrow0\). Real functions follow by splitting into their nonnegative continuous parts.

If another Radon measure represents \(L\), its value on every open set is the same test-function supremum \(q(U)\). The upper inequality follows by support containment; the lower follows by inner approximation by a compact set and a cutoff equal to one there. Outer regularity then identifies its value on every Borel set. This proves uniqueness. ∎

This proof supplies the measure rather than appealing to it inside an integral notation. Compact cutoffs determine open masses; metric additivity admits Borel sets; regularity identifies the domain; the two finite step comparisons recover the original functional. Each ingredient has a different responsibility.

**Worked example 13.4 (Evaluation).** For a fixed \(a\in X\), the functional \(L(f)=f(a)\) is positive. For an open set containing \(a\), a cutoff taking value one there shows \(q(U)=1\); for an open set not containing \(a\), all permitted functions vanish there and \(q(U)=0\). The representing measure is therefore \(\delta_a\). This measure is Radon: compact approximation of a set containing the atom needs only the singleton, and an open neighbourhood avoiding the atom handles sets not containing it.

**Worked example 13.5 (Local finiteness without finite total mass).** On the discrete space \(\mathbb N\), \(C_c\) consists of finitely supported sequences. The positive functional \(L(f)=\sum_nf(n)\) is represented by counting measure. It is bounded on each fixed compact support, because compact subsets of this discrete space are finite. There is no bound \(|L(f)|\le C\|f\|_\infty\) independent of support: take the indicator of the first \(N\) points. This separates the positive \(C_c\) theorem from the finite-measure theorem below.

## Finite signed measures and the dual of \(C_0\)

The space \(C_0(X)\) consists of continuous functions vanishing at infinity: each superlevel set \(\{|f|\ge\varepsilon\}\) is compact for positive \(\varepsilon\). It is a Banach space in the supremum norm, since uniform limits preserve both continuity and this compact-superlevel condition. Compactly supported functions are dense. Choose a cutoff equal to one on the compact \(\{|f|\ge\varepsilon\}\), multiply it by \(f\), and the uniform error is at most \(\varepsilon\).

A positive functional on \(C_c\) extends boundedly to \(C_0\) exactly when its representing measure has finite total mass. One direction is the bound by total mass. Conversely a global norm bound gives \(q(X)\le\|L\|\), so the measure is finite. For a finite positive measure the functional norm equals its total mass, using inner compact approximation and cutoffs approaching that mass.

**Theorem 13.6 (Real signed representation).** Every bounded real linear functional \(L\) on \(C_0(X)\) is represented by a unique finite real signed Radon measure \(\eta\), and \(\|L\|=|\eta|(X)\).

*Proof.* For \(f\ge0\) in \(C_0\), define
\[
 L^+(f)=\sup\{L(g):g\in C_0,\ 0\le g\le f\}.
\]
It is nonnegative and bounded above by \(\|L\|\|f\|_\infty\). It is additive on the positive cone. One inequality follows by adding two separately admitted functions. For the other, if \(0\le g\le f_1+f_2\), split it as \(g_i=gf_i/(f_1+f_2)\), taking value zero where the denominator vanishes. The bounds \(0\le g_i\le f_i\) prove continuity there and vanishing at infinity. This gives the reverse inequality. Positive homogeneity is immediate. Extend \(L^+\) linearly by differences of positive functions; cone additivity makes this independent of representation. It is positive and bounded. The functional \(L^-=L^+-L\) is positive and bounded too.

The positive theorem represents their restrictions to \(C_c\) by finite Radon measures \(\alpha,\beta\). Their difference \(\eta\) represents \(L\) on \(C_c\), and density extends the equality to \(C_0\). Finite signed Borel measures here have Radon Jordan parts. Indeed every open subset of this space has a compact exhaustion of its own, giving compact inner approximation for any finite Borel measure. Complements and finiteness give outer approximation of closed sets; compact truncation and the open/closed approximation sigma-algebra argument from the preceding chapter then give both regularities for all Borel sets. Uniqueness follows because equality on tests determines signed measures: their positive-minus-positive representations give equal positive integrals after placing terms on opposite sides, and positive Riesz uniqueness applies.

The inequality \(\|L\|\le|\eta|(X)\) is the variation bound. For the reverse choose disjoint compact subsets of a Hahn positive and negative set carrying all but an arbitrarily small amount of their Jordan masses. Disjoint relatively compact neighbourhoods and cutoffs give a function with supremum norm at most one, equal to one on the positive compact and minus one on the negative compact. Its integral approaches \(|\eta|(X)\); the uncontrolled complement contributes at worst its small variation mass. Hence \(\|L\|\ge|\eta|(X)\). ∎

This is a real theorem. Complex functionals have a corresponding complex-measure representation, but their polar decomposition requires an additional argument; no complex variation identity is being inferred from the real Hahn partition here.

**Worked example 13.7 (A signed evaluation rule).** On the line, \(L(f)=f(0)-f(1)\) is represented by \(\delta_0-\delta_1\). Its norm is two. The upper bound follows from the triangle inequality. For equality choose a continuous compactly supported function taking values one and minus one at the two points with absolute value at most one everywhere. A piecewise linear function with compact support provides such a test. The total signed mass is zero, while the norm detects the variation two.

## What continuous tests detect at infinity

For locally finite measures, convergence against every \(C_c\) test is called vague convergence. The atoms \(\delta_{1/n}\) converge vaguely to \(\delta_0\) by continuity of each test function. In contrast \(\delta_n\) converge vaguely to zero on the line: every compact support eventually misses the atom. All their total masses remain one. The total-mass function is not a compactly supported test on this space, so there is no contradiction.

Even testing against every \(C_0\) function still makes \(\delta_n\) converge to zero, because such functions vanish at infinity. Probability convergence tested against all bounded continuous functions is stronger here: the constant function one prevents a probability sequence from converging to the zero measure in that sense. One must state the test class when discussing measure convergence. Riesz identifies measures from exact equality on all tests; it does not assert that convergence in a smaller test class preserves mass at infinity.

## Exercises with hints and complete solutions

### MEASURE-RADON-E001 — Sigma compactness needs countability

Prove the compact-exhaustion assertion for a locally compact second-countable metric space. Give a locally compact metric space that is not sigma compact.

**Hint 1.** Select relatively compact members from a countable base.

**Hint 2.** An uncountable discrete space has only finite compact subsets.

**Solution.** Every input lies in a base member whose closure is compact, after shrinking its locally compact neighbourhood. There are countably many such base members; their compact closures cover the space. Finite unions give an increasing compact exhaustion. An uncountable set with the discrete metric is locally compact, but every compact subset is finite, so no countable union of compact sets covers it. Metrizability alone therefore does not supply the exhaustion.

### MEASURE-RADON-E002 — Local positivity bounds

For a positive \(L\) on \(C_c\), prove the supremum-norm bound on functions supported in a fixed compact set, including signed functions.

**Hint 1.** Choose a nonnegative cutoff equal to one on the compact set.

**Hint 2.** Bound the function above and below by scalar multiples of that cutoff.

**Solution.** If \(\psi=1\) on \(K\), then \(-\|f\|_\infty\psi\le f\le\|f\|_\infty\psi\) for every function supported there. Positivity applied to both differences gives \(-\|f\|_\infty L(\psi)\le L(f)\le\|f\|_\infty L(\psi)\). Thus \(|L(f)|\le L(\psi)\|f\|_\infty\), with a constant depending on the compact support.

### MEASURE-RADON-E003 — Why supports enter the open supremum

Explain why demanding support inside \(U\) is stronger than merely demanding that a continuous test vanish outside \(U\). Give an example.

**Hint 1.** Support includes limit points of nonzero inputs.

**Hint 2.** Use a function positive throughout an interval and zero at its boundary.

**Solution.** On the line let \(\phi(x)=\max(0,1-x^2)\). It vanishes outside \((-1,1)\), but its support is \([-1,1]\), which is not contained in that open set. The support condition provides room for compact cutoffs and subordinate partitions. The boundary values alone do not give that room.

### MEASURE-RADON-E004 — Disjoint open additivity

Prove the superadditive inequality \(q(\bigcup_iU_i)\ge\sum_iq(U_i)\) for disjoint open sets.

**Hint 1.** Add finitely many permitted test functions with disjoint supports.

**Hint 2.** First take the independent finite suprema, then the supremum over the number of terms.

**Solution.** The sum of finitely many such tests lies between zero and one and has compact support in the union, so its functional value is bounded by \(q\) of the union. Linearity gives the sum of their values. Taking the supremum for each of the finitely many tests gives the finite sum of open masses, with arbitrarily large finite values handled by approximation if one mass is infinite. Taking all finite initial sums gives the full nonnegative series inequality.

### MEASURE-RADON-E005 — Separating atoms by continuous tests

If \(a\ne b\) in \(X\), prove that evaluation at \(a\) and evaluation at \(b\) are different functionals on \(C_c\).

**Hint 1.** Choose a relatively compact neighbourhood of one point excluding the other.

**Hint 2.** Place a cutoff equal to one at that point inside the neighbourhood.

**Solution.** The metric separates the points by disjoint small neighbourhoods; local compactness permits a relatively compact one around \(a\) avoiding \(b\). A compact cutoff there equals one at \(a\) and zero at \(b\). Its two evaluation values differ. Thus the test class distinguishes the two Dirac measures exactly as representation uniqueness requires.

### MEASURE-RADON-E006 — Dense compactly supported functions

Prove density of \(C_c\) in \(C_0\) using cutoffs, rather than assuming a globally bounded support for the original function.

**Hint 1.** The region where the absolute value is at least \(\varepsilon\) is compact.

**Hint 2.** Multiply the original function by a cutoff equal to one on that region.

**Solution.** Let \(K=\{|f|\ge\varepsilon\}\), choose \(0\le\phi\le1\) compactly supported with value one on \(K\), and put \(g=\phi f\). On \(K\) the error is zero; elsewhere its magnitude is at most \(|f|<\varepsilon\). Thus \(g\in C_c\) and \(\|f-g\|_\infty\le\varepsilon\). An empty \(K\) is handled by choosing zero.

### MEASURE-RADON-E007 — Weighted atoms

For \(L(f)=\sum_{n\ge1}2^{-n}f(1/n)\) on the line, identify the Radon measure and the norm of its extension to \(C_0\).

**Hint 1.** The absolute sum is bounded by the supremum norm.

**Hint 2.** A compact cutoff can be one on all the atomic locations.

**Solution.** The measure is \(\sum_{n\ge1}2^{-n}\delta_{1/n}\), a finite positive Borel measure of mass one and therefore Radon here. The functional has norm at most one by the geometric sum. A cutoff equal to one on \([0,1]\) gives value one, so the norm is exactly one. The accumulation point zero does not need an atom to make the measure regular.

### MEASURE-RADON-E008 — A divergent local assignment

Why does \(L(f)=\sum_{n\ge1}f(1/n)\) fail to define a finite real positive functional on all \(C_c(\mathbb R)\)?

**Hint 1.** Choose a test equal to one near zero.

**Hint 2.** Compare with compact finiteness of a proposed representing measure.

**Solution.** A compactly supported continuous test equal to one on \([0,1]\) makes every term one, so the sum is infinite and is not a real functional value. The proposed counting assignment has infinite mass on the compact set of atomic locations together with its limit point, violating compact finiteness. Accumulating atoms must have summable weights locally for this construction to define a Radon functional.

### MEASURE-RADON-E009 — A functional positive part

For \(L(f)=f(a)-f(b)\), with distinct points, compute \(L^+(f)\) for nonnegative \(f\) and identify its measure.

**Hint 1.** Every admitted \(g\) has \(g(a)\le f(a)\) and \(g(b)\ge0\).

**Hint 2.** Multiply \(f\) by a continuous cutoff equal to one at \(a\) and zero at \(b\).

**Solution.** The upper bound is \(L(g)\le f(a)\). A cutoff \(\phi\) separating the two points gives \(g=f\phi\), with \(0\le g\le f\), \(g(a)=f(a)\) and \(g(b)=0\). Thus the supremum equals \(f(a)\), and the positive functional part is integration against \(\delta_a\). Its negative part is integration against \(\delta_b\), consistent with Jordan decomposition.

### MEASURE-RADON-E010 — Mass escaping from compact tests

Show that \(\delta_n\) tend to zero against \(C_c(\mathbb R)\) and against \(C_0(\mathbb R)\), but not against all bounded continuous functions.

**Hint 1.** Compact support eventually misses the integer atom.

**Hint 2.** A function vanishing at infinity tends to zero along the integers; a constant function does not.

**Solution.** For a compactly supported test, its value at \(n\) is eventually zero. For a \(C_0\) test, those values tend to zero by the definition of vanishing at infinity. Thus both integral limits are zero. The bounded continuous test one has integral one for every atom and integral zero for the zero measure, so convergence against all bounded continuous functions fails. The test class determines whether mass at infinity is visible.

### MEASURE-RADON-E011 — A signed norm

For distinct real points \(a_1,\ldots,a_k\) and real coefficients \(c_j\), prove that the norm of \(L(f)=\sum_jc_jf(a_j)\) on \(C_0\) is \(\sum_j|c_j|\).

**Hint 1.** The triangle inequality gives one direction.

**Hint 2.** Choose disjoint compactly supported cutoffs and assign each the sign of its coefficient.

**Solution.** For \(\|f\|_\infty\le1\), the absolute functional value is at most \(\sum_j|c_j|\). Finitely many distinct points admit disjoint relatively compact neighbourhoods and cutoffs \(\phi_j\) taking value one at their respective points. The function \(f=\sum_j\operatorname{sgn}(c_j)\phi_j\) has supremum norm at most one and functional value exactly that sum. Hence the bound is attained.

### MEASURE-RADON-E012 — Identifying measures from tests

Suppose two positive Radon measures on \(X\) have equal integrals for all \(C_c\) functions. Prove their equality without assuming their total masses are finite.

**Hint 1.** Use compact cutoffs to identify their common supremum on each open set.

**Hint 2.** Outer regularity then identifies every Borel value.

**Solution.** For an open set \(U\), the supremum of the common test integrals over functions between zero and one supported there equals each measure of \(U\). One inequality is support containment; for the other choose a compact subset carrying nearly any prescribed finite amount of its open mass and a cutoff equal to one there. This includes infinite open masses by arbitrary finite approximation. Thus the measures agree on opens. Taking the infimum over open supersets of a Borel set gives equality there by outer regularity, with infinite values allowed.

## Summary

On a locally compact second-countable metric space, positive continuous-test integration rules determine Radon measures. Compact cutoffs provide local bounds and partitions; open test suprema give a metric outer measure; its Carathéodory domain contains the Borel sets. Two step comparisons recover every test integral, and regularity gives uniqueness. Bounded functionals on \(C_0\) correspond to finite signed Radon measures, with norm equal to variation. The distinction between \(C_c\), \(C_0\) and bounded continuous tests matters for convergence and for mass escaping to infinity. The topological hypotheses and test class are part of each theorem.
