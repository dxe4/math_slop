
# Why Measure? Length, Countability, and Reliable Limits

An integral is useful because it converts a complicated function into a quantity while respecting approximation. The Riemann integral does this well for continuous functions on compact intervals, but its geometry is tied to subdivisions of the input interval. When a function is discontinuous on a dense set, or when a sequence concentrates its mass in smaller and smaller regions, the Riemann viewpoint can make the relevant limiting structure hard to see. Measure theory begins by asking which sets have a size, then uses that size to build a more flexible integral.

This is an L4 route. The required preparation is Euler's [Real Analysis](#/books/proof-safe-real-analysis) through sequences, series, metric compactness, Riemann integration, uniform convergence and power series. In particular, the [Riemann integration chapter](../proof-safe-real-analysis/riemann-integration.md) supplies Darboux sums and the [uniform convergence chapter](../proof-safe-real-analysis/uniform-convergence.md) supplies the distinction between pointwise and uniform limits. The retained [outer-measure reading](outer-measure-and-measurability.md) is the transferred construction developed next in this book.

The question for this chapter is precise: what properties should a notion of size have if it is to interact reliably with countable limiting operations? We will define a sigma algebra and a measure, prove the first consequences of countable additivity, compare counting, point-mass and length models, and identify exactly which operations require finite total size. We do not assume that every subset of the real line can be assigned a length. The construction and its domain of measurable sets come in the next chapters.

## A Riemann obstruction that suggests a new geometry

Consider the function \(f:[0,1]\to\mathbb R\) equal to one at rational inputs and zero at irrational inputs. Every interval of positive length contains both kinds of point. Thus every lower Darboux sum is zero and every upper Darboux sum is one. The Riemann integral does not exist.

Yet the values where \(f=1\) occur at only countably many points. If each point has length zero, and if countable unions of zero-length sets still have length zero, then those exceptional inputs ought not affect an integral based on length. This suggests grouping inputs according to their function values and the sizes of their level sets, rather than demanding a small oscillation on every short input interval.

This intuition needs two qualifications. First, countable additivity is a theorem-like axiom with content; it cannot be replaced by finite additivity and then used for infinitely many points. Second, the rationals being dense does not make them large in measure. Density concerns which open intervals they meet. Measure concerns assigned size. Those notions answer different questions, so there is no contradiction in a dense set having measure zero.

**Worked example 1.1 (Covering a countable set cheaply).** List a countable subset of the line as \(A=\{a_1,a_2,\ldots\}\). Given \(\varepsilon>0\), surround \(a_n\) by an open interval of length \(\varepsilon/2^{n+1}\). Their union covers \(A\), and the sum of their lengths is \(\varepsilon/2<\varepsilon\). No single interval needs contain the whole set, and the intervals need not be disjoint.

This computation will imply zero outer measure once outer measure is defined through interval coverings. At present it is a certificate about a cover with arbitrarily small total length. It does not prove that every dense subset has measure zero: the whole interval is also dense in itself and cannot be covered with arbitrarily small total interval length. Countability supplies the list and the summable budget; density supplies neither.

## Which sets are admitted?

**Definition 1.2 (Sigma algebra).** Let \(X\) be a set. A sigma algebra \(\Sigma\) on \(X\) is a collection of subsets containing \(X\), closed under complements relative to \(X\), and closed under countable unions. The pair \((X,\Sigma)\) is a measurable space, and members of \(\Sigma\) are called measurable sets.

The empty set belongs to \(\Sigma\), since it is the complement of \(X\). De Morgan's identity then gives closure under countable intersections. Differences of measurable sets are measurable because \(A\setminus B=A\cap B^c\). Finite unions are countable unions with empty sets appended, so they are included as well.

A sigma algebra need not contain every subset of \(X\). At one extreme \(\{\varnothing,X\}\) is a sigma algebra; at the other extreme the full power set \(\mathcal P(X)\) is one. Between them, the admitted sets describe the events or regions whose sizes the theory is prepared to discuss.

**Definition 1.3 (Generated sigma algebra).** If \(\mathcal G\) is any family of subsets of \(X\), its generated sigma algebra \(\sigma(\mathcal G)\) is the intersection of all sigma algebras containing \(\mathcal G\).

Such sigma algebras exist because \(\mathcal P(X)\) is one. Their intersection is a sigma algebra: complements and countable unions of sets belonging to every member still belong to every member. It is therefore the smallest sigma algebra containing \(\mathcal G\). This construction gives a precise meaning to “start with simple regions and admit every set forced by countable operations” without pretending that one finite round of operations finishes the process.

On a metric space the sigma algebra generated by open sets is the **Borel sigma algebra**. On the real line it is also generated by open intervals. Every open subset of the line is a countable union of intervals with rational endpoints contained in it: at each point choose a small interval inside the open set, then choose rational endpoints around that point inside that interval. The collection of all rational endpoint pairs is countable. Hence open intervals generate every open set, and the two generated sigma algebras agree.

This argument uses countability twice, once in the available rational pairs and once in the sigma-algebra closure rule. An uncountable union of measurable sets is not automatically measurable merely because each member is. For example every subset of the line is a union of its singleton points, but the Borel definition does not authorize arbitrary unions of those points.

## Countable additivity and its first consequences

**Definition 1.4 (Measure).** A measure on \((X,\Sigma)\) is a function \(\mu:\Sigma\to[0,\infty]\) such that \(\mu(\varnothing)=0\) and, for every pairwise disjoint sequence \((E_n)\) of measurable sets,
\[
 \mu\left(\bigcup_{n=1}^{\infty}E_n\right)
 =\sum_{n=1}^{\infty}\mu(E_n).
\]
The triple \((X,\Sigma,\mu)\) is a measure space. It is a probability space when \(\mu(X)=1\), and a finite measure space when \(\mu(X)<\infty\).

The infinite sum is the increasing limit of finite partial sums of nonnegative numbers, so there is no issue of rearranging positive and negative contributions. Infinity is permitted as a size. Arithmetic involving it must remain legitimate: we may add nonnegative infinite values, but we may not subtract \(\infty-\infty\).

**Proposition 1.5 (Monotonicity and subadditivity).** If \(A\subseteq B\) are measurable, then \(\mu(A)\le\mu(B)\). For any sequence of measurable sets,
\[
 \mu\left(\bigcup_n E_n\right)\le\sum_n\mu(E_n).
\]
If \(A\subseteq B\) and \(\mu(A)<\infty\), then \(\mu(B\setminus A)=\mu(B)-\mu(A)\), where subtraction of a finite quantity from infinity is interpreted as infinity.

*Proof.* Decompose \(B\) into the disjoint union \(A\cup(B\setminus A)\). Finite additivity, obtained by appending empty sets to the measure axiom, gives \(\mu(B)=\mu(A)+\mu(B\setminus A)\), proving monotonicity and the stated subtraction when it is defined. For the union, replace the sequence by disjoint pieces
\[
 F_1=E_1,\qquad F_n=E_n\setminus\bigcup_{k<n}E_k.
\]
The pieces are measurable, disjoint, have the same union, and satisfy \(F_n\subseteq E_n\). Countable additivity followed by monotonicity proves the inequality. ∎

Disjointization is a basic construction worth remembering. It keeps the union but assigns every point to its first occurrence. The countable union can then be measured by the axiom, while overlap is removed without an unjustified inclusion–exclusion formula involving infinite quantities.

## Three measures with different meanings

**Example 1.6 (Counting measure).** On \((X,\mathcal P(X))\), define \(\#E\) as the number of elements when \(E\) is finite, and as infinity otherwise. This is a measure. For disjoint sets with finite total cardinality, only finitely many points are present and counting adds exactly. If the union is infinite, either one piece is infinite or the finite cardinalities of the pieces have unbounded partial sums. In either case both sides of countable additivity are infinite.

Counting measure treats a single point as size one. It therefore gives a very different integration theory from length. Neither measure is intrinsically more correct: the question being modeled determines whether points should carry a positive cost.

**Example 1.7 (Dirac measure).** Fix \(a\in X\). On any sigma algebra, set \(\delta_a(E)=1\) if \(a\in E\), and zero otherwise. In a disjoint sequence, at most one member contains \(a\), proving countable additivity. The total mass is one. All the size is concentrated at one point, even if that point has zero length under a different measure.

**Example 1.8 (Weighted counting).** On \(X=\mathbb N\), let \(p_n\ge0\) and define \(\mu(E)=\sum_{n\in E}p_n\). Countable additivity follows by grouping nonnegative terms according to disjoint membership. More explicitly, either side is the supremum of sums over finitely many indices in the union; any finite selection occurs in finitely many pieces, and every finite selection from pieces lies in the union. These two bounds prove equality without assuming an unproved theorem about signed rearrangements. If \(p_n=2^{-n}\), then \(\mu(X)=1\).

**Worked example 1.9 (A probability measure with every point positive).** Take \(p_n=2^{-n}\). The even numbers have mass
\[
 \sum_{k=1}^{\infty}2^{-2k}=\sum_{k=1}^{\infty}4^{-k}=\frac13.
\]
The odd numbers therefore have mass \(2/3\), or the same result follows directly from their geometric sum. The tail \(\{n:n\ge N\}\) has mass \(2^{1-N}\), tending to zero. Under ordinary counting measure the same tails all have infinite mass. A set's size is not a property of its membership alone; it belongs to the specified measure space.

## Continuity under increasing and decreasing limits

**Theorem 1.10 (Continuity from below).** If \(E_n\subseteq E_{n+1}\) are measurable, then
\[
 \mu\left(\bigcup_n E_n\right)=\lim_n\mu(E_n).
\]
No finiteness assumption is required.

*Proof.* Let \(F_1=E_1\), \(F_n=E_n\setminus E_{n-1}\) for \(n\ge2\). The pieces are disjoint and their first \(N\) members have union \(E_N\). Thus \(\mu(E_N)=\sum_{n\le N}\mu(F_n)\). Countable additivity says the union's measure is the infinite sum of these same nonnegative quantities, defined as the limit of those partial sums. ∎

**Theorem 1.11 (Continuity from above).** Suppose \(E_{n+1}\subseteq E_n\) and \(\mu(E_1)<\infty\). Then
\[
 \mu\left(\bigcap_n E_n\right)=\lim_n\mu(E_n).
\]

*Proof.* The sets \(A_n=E_1\setminus E_n\) increase, with union \(E_1\setminus\bigcap_nE_n\). By continuity from below and the finite-subtraction rule,
\[
 \mu(E_1)-\mu\left(\bigcap_nE_n\right)
 =\lim_n[\mu(E_1)-\mu(E_n)].
\]
All values on the decreasing sequence are finite because they are bounded by \(\mu(E_1)\). Subtracting from that fixed finite value proves the claim. ∎

It suffices that one \(E_m\) has finite measure: discard the finitely many initial sets, which do not change the intersection or limiting sequence. The proof identifies the reason for the assumption. Without it the subtraction argument would involve infinity minus infinity, and the conclusion can actually fail.

**Worked example 1.12 (The missing finite-mass hypothesis).** On \(\mathbb N\) with counting measure, let \(E_n=\{n,n+1,\ldots\}\). The sets decrease and their intersection is empty: any fixed integer is eventually smaller than \(n\). Yet every \(E_n\) has infinite measure. The limiting measures are infinity, while the intersection has measure zero. Under the weighted probability measure from Worked example 1.9, the same decreasing sets have masses \(2^{1-n}\to0\), in agreement with Theorem 1.11. The sets did not change; the finite-mass hypothesis did.

## Null sets, almost everywhere, and completeness

**Definition 1.13 (Null and almost everywhere).** A measurable set \(N\) is null when \(\mu(N)=0\). A property holds almost everywhere if it holds outside some measurable null set. A measure space is complete if every subset of every measurable null set belongs to its sigma algebra.

Subsets that are measurable automatically have measure zero by monotonicity. Completeness supplies their measurability as well. This is a property of the pair of sigma algebra and measure, not the metric-space completeness of Cauchy sequences. The same word names different concepts, and neither follows from the other without a specific theorem.

**Proposition 1.14 (Countable exceptional sets).** A countable union of measurable null sets is measurable and null. Consequently countably many properties that each hold almost everywhere all hold simultaneously outside one null set.

*Proof.* Sigma-algebra closure gives measurability of the union. Subadditivity bounds its measure by a sum of zeros. Outside that union none of the individual exceptional events occurs, so all the properties hold. ∎

For a length measure satisfying the usual interval-length rule, every singleton must be null: place it inside an interval of arbitrarily small positive length and use monotonicity. Countable sets are then null by Proposition 1.14. This argument is conditional on a measure with that rule; the next chapters construct one. It is false for counting measure and false for the atom carrying Dirac mass.

An uncountable union of null sets need not be null. Under length, the interval \([0,1]\) is the union of its singleton points and has length one. There is no contradiction because countable subadditivity controls countable unions, not arbitrary ones. Almost-everywhere arguments that intersect exceptional sets indexed by every real parameter therefore need additional structure, such as a countable dense family plus continuity.

## The integral to come

The next step assigns an integral to a nonnegative simple function \(s=\sum_{j=1}^m a_j1_{E_j}\), with measurable disjoint sets \(E_j\) and coefficients \(a_j\ge0\), by weighting each value with the size of the set carrying it. A nonnegative measurable function will be approximated from below by such functions. This makes increasing limits part of the construction rather than an afterthought imposed on a Riemann sum.

The formula still needs independence from the chosen representation, and arbitrary measurable functions need a precise approximation theorem. We defer those proofs to their chapters rather than treating an intuitive sum as a finished definition. Signed functions need finite control of positive and negative parts before subtracting their integrals; otherwise infinity minus infinity returns in a new disguise.

The guiding distinction is between a definition that admits many functions and a convergence theorem that allows a chosen limit passage. A Lebesgue integral does not make every pointwise limit commute with integration. Increasing nonnegative sequences, integrable domination, and convergence in norm each have different hypotheses and consequences. The later convergence chapters will keep those separate.

## Exercises

### Exercise 1.1 {#why-measure-ex-1}

Prove that a sigma algebra is closed under countable intersections and under differences.

<details><summary>Hint 1</summary>
Use complements and De Morgan's identity.
</details>
<details><summary>Hint 2</summary>
Write a difference as an intersection with a complement.
</details>
<details><summary>Solution</summary>
For measurable \(E_n\), each \(E_n^c\) is measurable, so \(\bigcup_nE_n^c\) is measurable; its complement is \(\bigcap_nE_n\). Thus countable intersections are admitted. For measurable \(A,B\), the identity \(A\setminus B=A\cap B^c\) gives measurability of the difference. All complements are relative to the fixed ambient set \(X\).
</details>

### Exercise 1.2 {#why-measure-ex-2}

On an infinite countable set, the finite-or-cofinite subsets form an algebra. Show that they need not form a sigma algebra.

<details><summary>Hint 1</summary>
On \(\mathbb N\), each even singleton belongs to the family.
</details>
<details><summary>Hint 2</summary>
Their union and its complement are both infinite.
</details>
<details><summary>Solution</summary>
The family contains \(\mathbb N\), is closed under complements, and is closed under finite unions: a union containing a cofinite member is cofinite, and a finite union of finite sets is finite. But the countable union \(\bigcup_{k\ge1}\{2k\}\) is the even numbers. It is neither finite nor cofinite because the odd complement is infinite. Thus countable-union closure fails.
</details>

### Exercise 1.3 {#why-measure-ex-3}

For the probability weights \(p_n=2^{-n}\), find the measure of positive integers divisible by three.

<details><summary>Hint 1</summary>
The relevant weights are \(2^{-3k}\).
</details>
<details><summary>Hint 2</summary>
Sum a geometric series beginning at \(k=1\).
</details>
<details><summary>Solution</summary>
The mass is \(\sum_{k\ge1}8^{-k}=(1/8)/(1-1/8)=1/7\). Its complement has mass \(6/7\), since the total measure is one and disjoint finite subtraction is legitimate. This value is unrelated to the natural-density fraction one third; the measure was specified by nonuniform weights.
</details>

### Exercise 1.4 {#why-measure-ex-4}

Show that \(\delta_a+2\delta_b\), for distinct points \(a,b\), is a measure of total mass three on the full power set. Find its null sets.

<details><summary>Hint 1</summary>
Count how many of the distinguished points belong to a set.
</details>
<details><summary>Hint 2</summary>
Nonnegative linear combinations preserve countable additivity.
</details>
<details><summary>Solution</summary>
For disjoint \(E_n\), each distinguished point occurs in at most one member, so the weighted indicator sums add exactly; the empty set has value zero. The whole space contains both points and has mass \(1+2=3\). A set is null exactly when it contains neither point. Every subset of such a set is in the full power set and is null, so this measure space is complete.
</details>

### Exercise 1.5 {#why-measure-ex-5}

Prove \(\mu(A\cup B)+\mu(A\cap B)=\mu(A)+\mu(B)\) for measurable sets, allowing infinite values without subtracting them.

<details><summary>Hint 1</summary>
Split the union into the three disjoint membership regions.
</details>
<details><summary>Hint 2</summary>
Use only addition of nonnegative values.
</details>
<details><summary>Solution</summary>
Let \(C=A\setminus B\), \(D=B\setminus A\), \(E=A\cap B\). Finite additivity gives \(\mu(A\cup B)=\mu(C)+\mu(D)+\mu(E)\), \(\mu(A)=\mu(C)+\mu(E)\), and \(\mu(B)=\mu(D)+\mu(E)\). Adding \(\mu(E)\) to the first equality makes both desired sides the same sum. This remains valid when some terms are infinite because no undefined subtraction is performed.
</details>

### Exercise 1.6 {#why-measure-ex-6}

Suppose \(E_n\) increase to \(E\) and \(\mu(E_n)\le5\) for every \(n\). Prove \(\mu(E)\le5\). Does a uniform bound of five on arbitrary \(E_n\) imply the same bound for their union?

<details><summary>Hint 1</summary>
For an increasing sequence use continuity from below.
</details>
<details><summary>Hint 2</summary>
For the second question use distinct singleton sets with counting measure.
</details>
<details><summary>Solution</summary>
Continuity from below gives \(\mu(E)=\lim_n\mu(E_n)\le5\). Without increasing inclusion the conclusion fails: on \(\mathbb N\) with counting measure take \(E_n=\{n\}\). Each has measure one, but their union has infinite measure. Subadditivity gives an infinite upper bound in that example, not the uniform bound for one member.
</details>

### Exercise 1.7 {#why-measure-ex-7}

Show that continuity from above remains valid when only one member \(E_m\) of the decreasing sequence has finite measure.

<details><summary>Hint 1</summary>
Discard the first \(m-1\) sets.
</details>
<details><summary>Hint 2</summary>
Check explicitly that neither the intersection nor the limiting sequence changes.
</details>
<details><summary>Solution</summary>
Every later set is contained in \(E_m\), and every omitted earlier set contains \(E_m\). Thus \(\bigcap_{n\ge1}E_n=\bigcap_{n\ge m}E_n\). Removing finitely many terms does not change the limit of the decreasing numerical sequence. Apply Theorem 1.11 to the tail beginning at \(E_m\), whose first member has finite measure.
</details>

### Exercise 1.8 {#why-measure-ex-8}

Assuming a length measure with the interval-length rule exists, prove that every countable subset of the line is measurable and null.

<details><summary>Hint 1</summary>
The interval-length rule includes measurability of intervals; express a singleton as a countable intersection of intervals.
</details>
<details><summary>Hint 2</summary>
Bound its mass by intervals of arbitrarily small length, then use countable unions.
</details>
<details><summary>Solution</summary>
For \(a\in\mathbb R\), the singleton is the intersection of the measurable intervals \((a-1/n,a+1/n)\), so it is measurable. It lies in \((a-\varepsilon/2,a+\varepsilon/2)\), so its measure is at most \(\varepsilon\) for every positive \(\varepsilon\); hence it is zero. A countable set is a countable union of these measurable null singletons, so it is measurable and null. The interval rule already supplied the interval measurability needed for this argument.
</details>

### Exercise 1.9 {#why-measure-ex-9}

Suppose \(f_n=g_n\) almost everywhere for every positive integer \(n\), and both numerical sequences have limits at all points outside a null set. Prove the limits agree almost everywhere.

<details><summary>Hint 1</summary>
Gather all exceptional sets into one countable union.
</details>
<details><summary>Hint 2</summary>
Outside that union the two sequences agree term by term.
</details>
<details><summary>Solution</summary>
For each \(n\), select a measurable null set \(N_n\) outside which equality holds; let \(N_0\) contain points where a required limit fails. The set \(N=\bigcup_{n\ge0}N_n\) is measurable and null. At every point outside it, the two sequences agree at every index and both limits exist, so their limits are equal. Countability of the index family is essential to this direct exceptional-set argument.
</details>

### Exercise 1.10 {#why-measure-ex-10}

Let \(\nu\) be a nonnegative finitely additive set function with \(\nu(\varnothing)=0\). Assume it is continuous from below. Prove it is countably additive.

<details><summary>Hint 1</summary>
For disjoint \(E_n\), form the increasing finite unions.
</details>
<details><summary>Hint 2</summary>
Finite additivity gives each partial sum; continuity gives its limit.
</details>
<details><summary>Solution</summary>
Let \(F_N=\bigcup_{n\le N}E_n\). Finite additivity gives \(\nu(F_N)=\sum_{n\le N}\nu(E_n)\). The sets increase to \(\bigcup_nE_n\). Applying continuity from below gives the value on the union as the limit of those partial sums, which is exactly the nonnegative infinite sum in countable additivity. All sets are assumed to belong to the given sigma algebra.
</details>

### Exercise 1.11 {#why-measure-ex-11}

Give a measure space where a singleton is not null and a different measure space on the same underlying set where every singleton is null.

<details><summary>Hint 1</summary>
Use the real line as underlying set.
</details>
<details><summary>Hint 2</summary>
Counting measure and a length measure assign different sizes to points.
</details>
<details><summary>Solution</summary>
On \(\mathbb R\) with its full power set and counting measure, every singleton has measure one. On \(\mathbb R\) with the Lebesgue measurable sets and Lebesgue length, each singleton is measurable and null. The latter measure is constructed in the following chapters. The underlying points are the same, but both the sigma algebra and assigned size belong to the specification of a measure space.
</details>

### Exercise 1.12 {#why-measure-ex-12}

Suppose \(E_n\) are measurable and \(\sum_n\mu(E_n)<\infty\). Show that the set of points lying in infinitely many \(E_n\) is measurable and null.

<details><summary>Hint 1</summary>
Write the set as \(\bigcap_{N\ge1}\bigcup_{n\ge N}E_n\).
</details>
<details><summary>Hint 2</summary>
Each tail union bounds its measure, and the tail sums tend to zero.
</details>
<details><summary>Solution</summary>
The displayed countable intersection of countable unions is measurable. It is contained in every tail union, so monotonicity and subadditivity give its measure at most \(\sum_{n\ge N}\mu(E_n)\) for every \(N\). The tails of the convergent nonnegative series tend to zero; hence its measure is zero. No independence or probability normalization is needed. This estimate is the measure-theoretic first Borel–Cantelli argument.
</details>

## Sources and scope

This is original exposition and exercise development for the commissioned Measure and Integration primary. The local sources are the Euler real-analysis Riemann, uniform-convergence and retained measure chapters, together with the Atlas measure course. The syllabus benchmarks are Gerald Folland, *Real Analysis*, and Stein–Shakarchi, *Real Analysis*. No benchmark exercises are reproduced. Lebesgue measure is motivated here and constructed later; conditional examples using its interval rule are explicitly identified as such.

## Summary

A sigma algebra specifies admitted sets; a measure assigns nonnegative sizes through countable additivity. Disjointization yields monotonicity and subadditivity, and it proves continuity under increasing unions. Decreasing intersections require finite measure at some stage. Null sets support countable almost-everywhere arguments, while counting and point-mass examples show that nullity depends on the measure. The next chapter builds outer measure from coverings and identifies the measurability condition that turns a useful covering bound into a countably additive measure.
