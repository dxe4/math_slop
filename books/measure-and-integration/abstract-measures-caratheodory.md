
# Abstract Measure Spaces and Carathéodory Extension

The Euclidean construction began with the volumes of boxes and admitted sets that split every outer measure correctly. The same method works when elementary pieces are intervals carrying a nonuniform mass, cylinders describing finitely many observations, or rectangles in a product space. The geometry of those pieces matters when specifying their sizes. Once their sizes satisfy the correct countable consistency condition, the extension argument is abstract.

This chapter proves that argument and separates three questions. Does an assignment on elementary sets respect countable decomposition? Does it extend to a measure? Is its extension uniquely determined on the generated sigma algebra? The first question concerns a premeasure, the second uses the Carathéodory construction proved in [chapter 2](outer-measure-and-measurability.md), and the third requires a separate uniqueness argument. Sigma finiteness plays a decisive role in that last argument. It does not mean that all sets are finite, and it is not a substitute for the finite total measure used in Egorov's theorem.

## Elementary families and premeasures

**Definition 9.1 (Ring and semiring).** A ring of sets \(\mathcal R\) contains the empty set and is closed under finite unions and differences. It is therefore closed under finite intersections. An algebra is a ring containing the whole space. A semiring \(\mathcal S\) contains the empty set, is closed under intersections, and has the property that the difference of two members is a finite disjoint union of members.

Bounded half-open intervals \((a,b]\) form a semiring on the line, with the empty interval included. Their finite disjoint unions form a ring, but not an algebra on the whole line because no bounded union equals the line. Half-open boxes form the analogous semiring in Euclidean space. The choice of which endpoints belong to a piece ensures that partitions can be made disjoint without charging an endpoint twice.

Every finite union of semiring sets can be written as a finite disjoint union of such sets. Start with the first set and repeatedly subtract all previously used pieces from the next set; the difference property gives a finite disjoint decomposition at each step. The resulting finite disjoint unions form a ring. This observation lets elementary size assignments be specified on simple pieces rather than on every possible union separately.

**Definition 9.2 (Premeasure).** A premeasure on a ring is a map \(p:\mathcal R\to[0,\infty]\), with \(p(\varnothing)=0\), satisfying
\[
 p(A)=\sum_{n=1}^{\infty}p(A_n)
\]
whenever the \(A_n\) are pairwise disjoint members of the ring and their union \(A\) also belongs to the ring. On a semiring the same definition is used when the pieces and their union are semiring members.

The qualification about the union is essential. A ring is generally not closed under countable unions, so a premeasure cannot yet assign a value to every countable union. The condition says that every countable decomposition whose total is already admitted must agree with the assigned size of that total.

A semiring premeasure extends uniquely to its generated ring by adding the sizes in a finite disjoint representation. To see independence of representation, intersect the pieces of one representation with those of another. These intersections refine both into the same finite array of semiring pieces, and finite additivity gives the same sum. For countable additivity on the ring, write every member of a disjoint ring decomposition as a finite union of semiring pieces. Intersect those pieces with each member of a finite semiring representation of the total set. For each fixed piece of the total, semiring countable additivity applies; summing over the finitely many total pieces and grouping nonnegative terms proves the ring identity. No signed rearrangement or undefined subtraction is involved.

Finite additivity by itself does not suffice. On the algebra of finite or cofinite subsets of the positive integers, assign zero to finite sets and one to cofinite sets. The assignment is finitely additive, but every singleton has size zero while their countable union has size one. It cannot be the restriction of any countably additive measure. Before invoking an extension theorem, the countable compatibility must be established on the elementary family.

## The outer measure associated with a premeasure

For an arbitrary subset \(E\subset X\), define
\[
 p^*(E)=\inf\left\{\sum_{n=1}^{\infty}p(R_n):
 E\subseteq\bigcup_nR_n,\ R_n\in\mathcal R\right\}.
\]
The infimum of the empty collection of costs is infinity. Thus an uncovered part of the ambient space causes no ambiguity; it simply receives infinite outer measure. Empty sets can be covered by empty ring members, at zero cost.

Monotonicity follows because every cover of a larger set covers a smaller one. For countable subadditivity, if the sum of the outer measures is finite, choose a cover of the \(j\)-th set costing at most its outer measure plus \(\varepsilon 2^{-j}\). Combining all these countably many covers gives a cover of the union. Let \(\varepsilon\) decrease to zero. If the sum is infinite, the subadditivity inequality holds automatically. Hence \(p^*\) is an outer measure.

**Lemma 9.3 (Agreement and measurable elementary sets).** For every \(R\in\mathcal R\), one has \(p^*(R)=p(R)\), and \(R\) is Carathéodory measurable for \(p^*\).

*Proof.* Covering \(R\) by itself gives the upper bound. If \(R\subseteq\bigcup_nR_n\), disjointize the sets \(R\cap R_n\) in their listed order. The resulting ring pieces \(D_n\) are disjoint and have union \(R\), so
\[
 p(R)=\sum_np(D_n)\le\sum_np(R_n).
\]
Taking the infimum gives the reverse bound, including when \(p(R)=\infty\).

For measurability, fix an arbitrary \(T\subset X\). Each ring cover \((R_n)\) of \(T\) splits into ring covers of \(T\cap R\) and \(T\setminus R\). Finite additivity gives
\[
 \sum_np(R_n)=\sum_np(R_n\cap R)+\sum_np(R_n\setminus R)
 \ge p^*(T\cap R)+p^*(T\setminus R).
\]
Taking the infimum over covers gives the Carathéodory inequality in one direction; outer subadditivity gives the other. If there is no cover, or every cover has infinite cost, the same lower inequality remains valid in the extended nonnegative numbers. ∎

**Theorem 9.4 (Carathéodory extension).** Every premeasure on a ring extends to a measure on its generated sigma algebra. In fact the outer measure construction gives a complete measure on a possibly larger sigma algebra of Carathéodory measurable sets.

*Proof.* Chapter 2 proves that the Carathéodory measurable sets form a sigma algebra and that an outer measure restricted to them is countably additive and complete. The lemma places every ring member in that sigma algebra. Therefore its generated sigma algebra lies there too, and restriction gives the desired extension. Agreement on the ring is the first half of the lemma. ∎

This theorem proves existence without sigma finiteness. It constructs a particular extension and also specifies a complete domain on which that extension is defined. It does not assert that every possible extension to the generated sigma algebra is the same, nor that the generated sigma algebra itself is complete. The Borel sigma algebra and its Lebesgue completion already supplied an example of the second distinction.

## Why agreement on generators can determine a measure

We need a set-theoretic tool before proving uniqueness. A **pi system** is a family closed under finite intersections. A **lambda system**, also called a Dynkin system, contains the whole space, is closed under complements, and is closed under countable disjoint unions.

**Lemma 9.5 (Pi–lambda theorem).** If a lambda system contains a pi system \(\mathcal P\) that contains the whole space, it contains \(\sigma(\mathcal P)\).

*Proof.* Let \(\mathcal D\) be the smallest lambda system containing \(\mathcal P\). A lambda system is closed under the difference \(B\setminus A\) of two of its members when \(A\subseteq B\): take the complement of the disjoint union \(A\cup B^c\). It is also closed under increasing countable unions, by disjointizing successive differences.

Fix \(A\in\mathcal P\). The sets \(B\) for which \(A\cap B\in\mathcal D\) form a lambda system. For complements use the nested difference \(A\setminus(A\cap B)\); for disjoint unions intersect each disjoint piece with \(A\). This lambda system contains \(\mathcal P\), because \(\mathcal P\) is closed under intersections. It therefore contains \(\mathcal D\). We have proved intersection closure when one factor belongs to \(\mathcal P\) and the other to \(\mathcal D\).

Now fix \(B\in\mathcal D\) and apply the same argument to the sets \(A\) for which \(A\cap B\in\mathcal D\). They form a lambda system and, by the preceding paragraph, contain \(\mathcal P\). Thus they contain \(\mathcal D\). Consequently \(\mathcal D\) is closed under intersections. Complements and intersections give finite unions, and disjointization then gives all countable unions. It is a sigma algebra containing \(\mathcal P\), which proves the claim. ∎

**Theorem 9.6 (Sigma-finite uniqueness).** Suppose a ring premeasure admits a countable cover \(X=\bigcup_jR_j\) by ring members with \(p(R_j)<\infty\). There is exactly one measure on \(\sigma(\mathcal R)\) agreeing with the premeasure.

*Proof.* Existence is already proved. Let \(\mu,\nu\) be two extensions. Replace the covering sets by disjoint ring pieces \(D_j=R_j\setminus\bigcup_{i<j}R_i\). For fixed \(j\), the finite measures
\[
 E\longmapsto\mu(E\cap D_j),\qquad
 E\longmapsto\nu(E\cap D_j)
\]
agree on the ring and on the whole space. The sets on which they agree form a lambda system: complement closure follows by subtracting from their equal finite total masses, and disjoint-union closure follows from countable additivity. The ring together with the whole space is a pi system generating \(\sigma(\mathcal R)\). The pi–lambda lemma gives agreement on that sigma algebra for each \(j\). Sum over the disjoint covering pieces to obtain \(\mu(E)=\nu(E)\) for every generated measurable set. ∎

Notice that the finite-mass pieces are known from the premeasure. It would not be enough merely to announce that some unrelated extension happens to be sigma finite, without relating its finite pieces to the family on which agreement is known. The proof must be able to localize both measures to the same admitted sets.

**Worked example 9.7 (Failure of uniqueness without finite pieces).** On the ring of finite unions of bounded half-open intervals, put \(p(\varnothing)=0\) and \(p(R)=\infty\) for every nonempty member. This is a premeasure: in a disjoint decomposition of a nonempty member, at least one piece is nonempty, so both sides of the identity are infinite. There is no countable cover by finite-mass ring members.

Counting measure on the Borel sets extends this assignment, since every nonempty interval contains infinitely many points. Another extension assigns zero to every countable Borel set and infinity to every uncountable Borel set. This is countably additive: a countable union of countable sets remains countable, while a union that is uncountable must have an uncountable member, in which case both sides have value infinity. These extensions differ on a singleton, where their values are one and zero. The outer measure constructed above gives yet another extension, assigning infinity to every nonempty set. Thus existence alone does not supply uniqueness, even for familiar elementary intervals.

## Completing a measure and remembering the domain

Given a measure \(\mu\) on \(\Sigma\), its completion admits every set that differs from a member of \(\Sigma\) by a subset of a measurable null set. More explicitly, take all \(E\subset X\) for which
\[
 E\mathbin{\triangle}B\subseteq Z,
 \qquad B,Z\in\Sigma,\quad\mu(Z)=0,
\]
and define \(\bar\mu(E)=\mu(B)\). The value is independent of the choice: if two such representations exist, their measurable representatives differ only inside the union of two measurable null sets, so their measures agree by monotonicity and finite additivity.

This class is a sigma algebra. Complements preserve the same symmetric-difference inclusion, and a countable union differs from the union of the representatives only inside the union of the null sets. For disjoint completed sets choose representatives \(B_n\), discard their combined null exceptional set, and disjointize the representatives. The disjointized representatives still differ from the original completed sets only on a null set. Countable additivity of \(\mu\) then proves countable additivity of \(\bar\mu\). Every subset of a completed null set is contained in a measurable null set from the original space, so the result is complete.

Completion is a change of measurable domain, not a change of the old integrals. Any nonnegative completed-measurable function has an original-measurable representative equal to it almost everywhere: approximate it by a sequence of completed-measurable simple functions, replace each of their finitely many level sets by original-measurable representatives, and remove the countable union of the null discrepancies. The resulting pointwise limit is original-measurable and agrees almost everywhere. Integrals of the two representatives are equal. This observation is useful when a construction is first made on Borel functions and later used with Lebesgue-measurable representatives.

## Stieltjes measures from increasing functions

**Theorem 9.8 (Lebesgue–Stieltjes construction).** Let \(F:\mathbb R\to\mathbb R\) be nondecreasing and right continuous. There is a unique Borel measure \(\mu_F\), finite on bounded intervals, such that
\[
 \mu_F((a,b])=F(b)-F(a),\qquad a<b.
\]

*Proof.* The formula defines a finitely additive assignment on the interval semiring by telescoping adjacent increments. We prove the required countable additivity rather than assuming it from monotonicity. Suppose \((a,b]\) is covered by intervals \((a_n,b_n]\). Given \(\varepsilon>0\), right continuity allows choices \(\eta_n>0\) with
\[
 F(b_n+\eta_n)-F(b_n)<\varepsilon2^{-n}.
\]
For \(0<\delta<b-a\), the open intervals \((a_n,b_n+\eta_n)\) cover the compact set \([a+\delta,b]\). Choose a finite subcover. Its corresponding half-open intervals also cover \((a+\delta,b]\). Finite additivity and monotonicity on the generated ring give
\[
 F(b)-F(a+\delta)
 \le\sum_n\bigl(F(b_n)-F(a_n)\bigr)+\varepsilon.
\]
Let \(\delta\downarrow0\), using right continuity at \(a\), and then let \(\varepsilon\downarrow0\). This is countable subadditivity for interval covers. If the covering intervals are disjoint and have union \((a,b]\), finite additivity gives the reverse inequality for every finite subsum. Taking the supremum of these subsums proves the premeasure identity. Extend first to the ring and then to the Borel sigma algebra. Bounded intervals have finite increments and countably cover the line, so uniqueness follows from theorem 9.6. ∎

For this proof the finite ring assignment is legitimate before countable additivity: two finite interval representations are refined by their finite set of endpoints, and telescoping gives agreement. The compact-cover argument is the additional step that supplies countable consistency. Right continuity enters at a specific endpoint, and cannot be omitted merely because an increasing function has one-sided limits.

**Worked example 9.9 (An atom and an endpoint convention).** Set \(F(x)=1\) for \(x\ge0\) and \(F(x)=0\) for \(x<0\). The increment is one exactly when \(a<0\le b\). Hence the resulting measure is the unit point mass at zero. The right-closed interval convention is consistent with the right-continuous choice of \(F\). If instead one took the increasing function equal to zero for \(x\le0\) and one for \(x>0\), the formula would give mass one to every \((0,1/n]\), although those sets decrease to the empty set. A finite measure cannot do that. This diagnoses the failure before any extension is attempted.

In general, continuity from above on a bounded containing interval gives
\[
 \mu_F(\{x\})=F(x)-F(x-),
\]
where the left limit exists by monotonicity. Consequently continuity of \(F\) is equivalent to absence of point masses. It does not imply that \(\mu_F\) has a density with respect to length: the Cantor distribution function yields a continuous measure supported on a length-zero set. The distinction between absence of atoms and absolute continuity will be developed in the Radon–Nikodym and differentiation chapters.

**Worked example 9.10 (A mixture of length and an atom).** Let \(F(x)=2x+3\,1_{[1,\infty)}(x)\). Its Stieltjes measure is \(2m+3\delta_1\), since both measures give every \((a,b]\) the value \(2(b-a)+3\,1_{\{a<1\le b\}}\), and sigma-finite uniqueness applies. Thus \(\mu_F((0,1])=5\), while \(\mu_F((1,2])=2\). Translating an interval can change its mass even when its length stays fixed. For a continuous compactly supported function \(h\), simple approximation gives \(\int h\,d\mu_F=2\int h\,dm+3h(1)\). The identity first holds for indicators, then for simple functions and nonnegative limits, and finally for integrable signed functions.

If an increasing right-continuous \(F\) tends to zero at negative infinity and to one at positive infinity, its Stieltjes measure has total mass one. Indeed the increments on \((-n,n]\) tend to one and these intervals increase to the line. Conversely, the distribution function \(F(x)=\mu(( -\infty,x])\) of a Borel probability measure is nondecreasing and right continuous by continuity from above, and has those endpoint limits. Its increments recover the measure on intervals; uniqueness recovers the measure everywhere on the Borel sigma algebra. Distribution functions therefore encode an entire one-dimensional probability law rather than merely its values on selected intervals.

## Transporting a measure by a map

If \(T:(X,\Sigma)\to(Y,\mathcal T)\) is measurable, define its pushforward by \((T_\#\mu)(B)=\mu(T^{-1}B)\). Preimages preserve complements and countable disjoint unions, so this is a measure on \(\mathcal T\). For a nonnegative measurable \(h\),
\[
 \int_Yh\,d(T_\#\mu)=\int_Xh\circ T\,d\mu.
\]
Prove the identity first for indicators by the definition, then for simple functions by finite sums, and then for nonnegative functions by monotone approximation. For an integrable real or complex function, apply the nonnegative identity to absolute values and components. This proof requires no differentiability or invertibility of the map.

When proposing a familiar formula for a transported measure, agreement on a suitable generating pi system and finite-measure localization is often the shortest rigorous identification. For instance, translating Lebesgue measure gives the same lengths to half-open intervals and has finite mass on bounded intervals. Uniqueness proves equality on all Borel sets. Extending that claim to completed domains requires checking null sets as well, rather than treating arbitrary images of measurable sets as automatically measurable. The Euclidean chapter supplied that additional check for the affine maps used there.

## Exercises with hints and complete solutions

### MEASURE-EXTENSION-E001 — Ring operations

Prove that a ring is closed under intersections and symmetric differences, and that its generated sigma algebra is unchanged by adjoining the whole space.

**Hint 1.** Write an intersection using two differences.

**Hint 2.** Every sigma algebra on the ambient space already contains that space.

**Solution.** One has \(A\cap B=A\setminus(A\setminus B)\) and \(A\triangle B=(A\setminus B)\cup(B\setminus A)\), so both belong to the ring. A sigma algebra containing the ring automatically contains the whole space. Thus the families of sigma algebras containing the ring and containing the ring together with the whole space are identical, and their intersections are equal.

### MEASURE-EXTENSION-E002 — Finite additivity is insufficient

Check finite additivity of the finite/cofinite assignment on \(\mathbb N\), and prove that no measure extends it.

**Hint 1.** Two disjoint cofinite sets cannot occur in an infinite space.

**Hint 2.** Decompose the whole space into its singleton sets.

**Solution.** Disjoint finite sets have finite union and total assigned mass zero. If one of two disjoint admitted sets is cofinite, the other is finite and their union is cofinite, giving total mass one. These cases prove finite additivity, and induction handles any finite disjoint list. But a measure extending the assignment would give each singleton mass zero, hence the whole countable space mass zero by countable additivity, contradicting its assigned mass one.

### MEASURE-EXTENSION-E003 — Why the outer measure agrees

Fill in the disjointization proof of \(p(R)\le\sum_np(R_n)\) when a ring set \(R\) is covered by ring sets \(R_n\).

**Hint 1.** Assign every point of \(R\) to the first covering set containing it.

**Hint 2.** Countable premeasure additivity applies because the union of the resulting pieces is the ring member \(R\).

**Solution.** Set \(D_n=(R\cap R_n)\setminus\bigcup_{i<n}R_i\). Each belongs to the ring, they are disjoint, and their union is \(R\). Premeasure additivity gives \(p(R)=\sum_np(D_n)\). Finite additivity implies monotonicity on the ring, since \(D_n\subset R_n\). Thus each summand is at most \(p(R_n)\), proving the desired inequality with infinite values allowed.

### MEASURE-EXTENSION-E004 — Finite-measure uniqueness

Let two finite measures agree on a pi system containing the whole space. Prove that they agree on its generated sigma algebra.

**Hint 1.** Study the class of sets where their values agree.

**Hint 2.** Complement closure requires their common total mass to be finite.

**Solution.** The agreement class contains the whole space and the given pi system. If a set belongs to it, subtract its common mass from the finite common total mass to obtain agreement on its complement. If disjoint sets belong to it, countable additivity gives agreement on their union. This is a lambda system, so the pi–lambda theorem proves the assertion. With infinite total mass the subtraction step is unavailable, which explains the localization in theorem 9.6.

### MEASURE-EXTENSION-E005 — A nonunique extension

Verify in detail that the two Borel measures of example 9.7 agree on all ring members, and find a third extension.

**Hint 1.** Every nonempty finite union of nondegenerate intervals is uncountable.

**Hint 2.** Consider the assignment infinity to every nonempty set.

**Solution.** Counting measure assigns infinity to every infinite set, hence to every nonempty ring member. The countable-zero/uncountable-infinity measure also assigns infinity to these members. They differ on every singleton. A third measure assigns zero to the empty set and infinity to every nonempty Borel set; a disjoint union is nonempty exactly when at least one member is nonempty, so countable additivity holds. It agrees with the premeasure and assigns infinity to singletons. This is the outer-measure extension in this example.

### MEASURE-EXTENSION-E006 — Null sets and completion

Show that completing a measure twice adds no further sets and changes no values.

**Hint 1.** A set of completed measure zero is contained in an original measurable null set.

**Hint 2.** Combine the null set from a second-stage discrepancy with the null set from its first-stage representative.

**Solution.** If a completed null set differs from an original measurable null representative only inside another original null set, their union is an original measurable null set containing it. A second completion admits a set differing from a completed-measurable set inside a subset of such a completed null set. Replace the completed-measurable set by its original representative and combine the two original null supersets. The new set was therefore already admitted by the first completion and has the same representative value. Thus completion is idempotent.

### MEASURE-EXTENSION-E007 — Right continuity is necessary

Suppose a locally finite measure satisfies \(\mu((a,b])=F(b)-F(a)\) for a real-valued increasing function \(F\). Prove that \(F\) is right continuous.

**Hint 1.** The intervals \((x,x+1/n]\) decrease to the empty set.

**Hint 2.** Their first member has finite measure.

**Solution.** Continuity from above gives \(F(x+1/n)-F(x)\to0\). For any positive \(h<1/n\), monotonicity gives \(0\le F(x+h)-F(x)\le F(x+1/n)-F(x)\). Therefore the right-hand limit equals \(F(x)\), proving right continuity at every real input. This is precisely the condition that fails in the left-continuous step example.

### MEASURE-EXTENSION-E008 — Atoms of a Stieltjes measure

Prove the singleton formula and compute the measure generated by \(F(x)=x+\sum_{j=1}^3c_j1_{[a_j,\infty)}(x)\), where \(c_j>0\).

**Hint 1.** Let left endpoints increase to the singleton input while the right endpoint remains fixed.

**Hint 2.** Identify a candidate measure on intervals, then use uniqueness.

**Solution.** The intervals \((x-1/n,x]\) decrease to \(\{x\}\) and have bounded finite masses. Their masses tend to \(F(x)-F(x-)\), proving the formula. The candidate \(m+\sum_jc_j\delta_{a_j}\) gives every \((a,b]\) the increment \(b-a+\sum_{a<a_j\le b}c_j\), exactly that of \(F\). Both measures are finite on bounded intervals, so uniqueness identifies them. If some locations coincide, their atomic masses add at that location.

### MEASURE-EXTENSION-E009 — Distribution functions

For a Borel probability measure, prove right continuity and both endpoint limits of its distribution function. Explain why the increments determine the measure.

**Hint 1.** Use decreasing right endpoints and increasing bounded intervals.

**Hint 2.** The total mass is finite, so continuity from above is available.

**Solution.** If \(x_n\downarrow x\), the sets \((-\infty,x_n]\) decrease to \((-\infty,x]\), so their probabilities converge. Monotonicity then gives right continuity for arbitrary right approaches. As \(x\to-\infty\), these sets decrease to the empty set, yielding limit zero; as \(x\to\infty\), they increase to the whole line, yielding limit one. Differences give masses of every half-open interval. Such intervals generate the Borel sigma algebra, and finite-measure uniqueness identifies the probability measure from these values.

### MEASURE-EXTENSION-E010 — A pushforward with two preimages

Let \(T(x)=x^2\) on \([-1,1]\), with Lebesgue measure there. Find the distribution function of \(T_\#m\), its total mass and its mass on \((a,b]\) for \(0\le a<b\le1\).

**Hint 1.** For \(0\le t\le1\), the preimage of \((-\infty,t]\) is \([-\sqrt t,\sqrt t]\).

**Hint 2.** The original measure is not normalized to a probability.

**Solution.** The distribution function is zero for \(t<0\), \(2\sqrt t\) for \(0\le t\le1\), and two for \(t>1\). The total mass is two. Consequently the interval mass is \(2(\sqrt b-\sqrt a)\). This follows directly from preimages and needs no differentiable change-of-variables theorem. Dividing the original measure by two would instead produce a probability with distribution function \(\sqrt t\) on the unit interval.

### MEASURE-EXTENSION-E011 — Adding a constant to the generator

If \(F\) and \(G\) are nondecreasing right-continuous real functions with the same Stieltjes measure, prove that \(F-G\) is constant. Prove the converse.

**Hint 1.** Equality of interval masses compares increments at any two inputs.

**Hint 2.** Constants cancel from every increment.

**Solution.** For \(a<b\), equality of measures gives \(F(b)-F(a)=G(b)-G(a)\). Thus \(F(b)-G(b)=F(a)-G(a)\), proving constancy on the whole line. Conversely adding a constant leaves every interval increment unchanged, and uniqueness of the locally finite extension gives the same Borel measure. A normalization such as the negative-infinity limit zero removes this freedom when a finite distribution function is intended.

### MEASURE-EXTENSION-E012 — Normalization on rational intervals

Suppose two Borel measures are finite on bounded intervals and agree on all half-open intervals with rational endpoints. Prove that they agree everywhere.

**Hint 1.** Finite unions of those intervals form a ring that countably covers the line.

**Hint 2.** Rational intervals generate all open sets and hence all Borel sets.

**Solution.** Intersections of rational half-open intervals remain of that form or empty. Refine finite unions by their finitely many endpoints to obtain disjoint rational interval representations, so agreement extends to their ring. The intervals \((-n,n]\) provide a common countable cover with finite masses. The generated sigma algebra is Borel: every open interval, and then every open set, is a countable union of contained rational half-open intervals. Apply sigma-finite uniqueness to this ring to identify the measures on every Borel set.

## Summary

A premeasure supplies countable consistency on elementary sets whose unions are already elementary. Covering by these sets produces an outer measure, and the Carathéodory criterion gives a complete measure extending the assignment. Uniqueness on the generated sigma algebra follows from the pi–lambda argument after localization to a common countable cover of finite premeasure. Without that hypothesis, even an interval assignment may have different extensions. Completion enlarges the measurable domain while preserving old values and almost everywhere integrals. Stieltjes measures show how increasing right-continuous functions encode interval masses, atoms and probability laws; pushforwards transport measures by measurable maps without differentiability assumptions.
