var e=`---
parent_id: book-measure-and-integration
chapter_id: signed-measures-radon-nikodym
title: "Signed Measures and Radon–Nikodym"
level: graduate
license: CC BY-SA 4.0
---

# Signed Measures and Radon–Nikodym

A measure may record mass without specifying a density. A point mass is the simplest example: no integrable function with respect to length can assign positive mass to a singleton. The Radon–Nikodym theorem identifies exactly when a density exists, relative to a chosen reference measure. The Lebesgue decomposition then separates a positive measure into a density part and a part carried by a reference-null set.

Signed measures introduce a second issue: positive and negative contributions may cancel on a set even when each contribution is substantial. Hahn and Jordan decompositions identify those contributions intrinsically. The total variation remembers their combined size. We first prove those results for finite real signed measures, then establish Radon–Nikodym and Lebesgue decomposition for sigma-finite positive measures. No general infinite signed expression involving an undefined infinity-minus-infinity is admitted.

The preparations are the integral, \\(L^2\\) completeness and the measure constructions of the preceding chapters. A short Hilbert-space argument is supplied here, so the density theorem does not require a prior functional analysis course. The [Functional Analysis Hilbert chapter](../functional-analysis/hilbert-spaces.md) develops the geometric argument in a broader setting.

## Positive and negative sets

A **finite real signed measure** on \\((X,\\Sigma)\\) is a real-valued countably additive function \\(\\eta\\) with \\(\\eta(\\varnothing)=0\\). Countable additivity means that for every disjoint measurable sequence the series of its values converges to the finite value on the union. We will prove that such a function necessarily has finite total variation; this is a consequence, not an extra hidden assumption.

A measurable set \\(P\\) is positive for \\(\\eta\\) when every measurable subset of \\(P\\) has nonnegative signed measure. A negative set is defined with the reversed inequality. Knowing only \\(\\eta(P)\\ge0\\) does not make \\(P\\) a positive set. Cancellation could conceal a negative subset. Countable unions of positive sets are positive: for any measurable subset of the union, partition it according to its first occurrence in the listed sets and use countable additivity on the resulting nonnegative pieces.

**Lemma 11.1 (Positive core).** If \\(\\eta(E)>0\\), there is a positive measurable \\(P\\subset E\\) with \\(\\eta(P)\\ge\\eta(E)\\).

*Proof.* At stage \\(n\\), repeatedly remove from the current remainder any measurable subset of signed measure less than \\(-1/n\\), until no such subset remains. This process must stop after finitely many removals at that stage. Otherwise it would produce disjoint sets whose signed measures are all less than \\(-1/n\\), contradicting countable additivity with a finite value on their union. Continue through all positive integer stages. All removed sets are disjoint and have negative signed measures; their countable union \\(N\\) therefore has a finite nonpositive value. Let \\(P=E\\setminus N\\).

If a measurable subset \\(B\\subset P\\) had negative signed measure, choose \\(n\\) with \\(\\eta(B)<-1/n\\). It would remain available at the end of stage \\(n\\), contrary to the stopping condition. Thus \\(P\\) is positive. Finally \\(\\eta(P)=\\eta(E)-\\eta(N)\\ge\\eta(E)\\), using only finite real subtraction. ∎

**Theorem 11.2 (Hahn decomposition).** There is a measurable partition \\(X=P\\cup N\\) into a positive set and a negative set.

*Proof.* Let \\(a\\) be the supremum of \\(\\eta(Q)\\) over positive measurable sets \\(Q\\), including the empty set. This supremum is finite. If it were infinite, choose positive \\(Q_j\\) with \\(\\eta(Q_j)>j\\). Their union is positive, and its finite signed measure would be at least \\(j\\) for every \\(j\\), a contradiction. Choose positive sets whose values approach \\(a\\), and let \\(P\\) be their union. Positivity gives \\(\\eta(P)\\ge a\\), while the definition of the supremum gives equality. If \\(N=X\\setminus P\\) had a measurable subset \\(E\\) of positive signed measure, the positive-core lemma would give a positive \\(Q\\subset E\\) with positive value. Then \\(P\\cup Q\\) would be positive with value greater than \\(a\\), a contradiction. Thus \\(N\\) is negative. ∎

The construction does not promise a unique partition. A set on which the signed measure vanishes on every measurable subset can be assigned to either side. The associated positive measures, however, will be unique.

## Jordan decomposition and total variation

Given a Hahn partition, set
\\[
 \\eta^+(E)=\\eta(E\\cap P),\\qquad
 \\eta^-(E)=-\\eta(E\\cap N).
\\]
They are finite positive measures, are carried by disjoint sets, and satisfy \\(\\eta=\\eta^+-\\eta^-\\). The decomposition is independent of the chosen Hahn partition. Indeed if \\(P',N'\\) is another partition, every measurable subset of \\(P\\cap N'\\) has both nonnegative and nonpositive signed measure, hence zero. The same holds on \\(N\\cap P'\\). Removing these discrepancy sets leaves identical contributions to either positive part and either negative part.

**Theorem 11.3 (Jordan decomposition).** The measures \\(\\eta^+,\\eta^-\\) are the unique mutually singular finite positive measures whose difference is \\(\\eta\\). For any representation \\(\\eta=\\alpha-\\beta\\) by finite positive measures,
\\[
 \\eta^+(E)\\le\\alpha(E),\\qquad \\eta^-(E)\\le\\beta(E).
\\]

*Proof.* The inequalities follow by evaluating on \\(E\\cap P\\) and \\(E\\cap N\\): for example \\(\\eta^+(E)=\\alpha(E\\cap P)-\\beta(E\\cap P)\\le\\alpha(E)\\). If \\(\\alpha,\\beta\\) are mutually singular, a set carrying \\(\\alpha\\) and its complementary set carrying \\(\\beta\\) form a Hahn partition. The independence just proved identifies their measures with \\(\\eta^+,\\eta^-\\). ∎

Define the total variation measure by \\(|\\eta|=\\eta^++\\eta^-\\). It is finite, which proves the promised boundedness of a finite real signed measure. It also has the intrinsic description
\\[
 |\\eta|(E)=\\sup\\left\\{\\sum_{j=1}^m|\\eta(E_j)|:
 E=\\bigcup_{j=1}^mE_j\\text{ measurably and disjointly}\\right\\}.
\\]
Every partition sum is at most the Jordan sum, by the triangle inequality. The partition into \\(E\\cap P\\) and \\(E\\cap N\\) attains that sum. In particular \\(|\\eta(E)|\\le|\\eta|(E)\\). The absolute value of the value on a set and the variation of that set are different quantities; only the second records cancellation within the set.

For \\(f\\in L^1(|\\eta|)\\), define \\(\\int f\\,d\\eta=\\int f\\,d\\eta^+-\\int f\\,d\\eta^-\\), with components for complex functions. Then \\(|\\int f\\,d\\eta|\\le\\int|f|\\,d|\\eta|\\). This follows first for simple functions from the variation bound, and then by \\(L^1\\) approximation. Integral identities for signed measures will always include that integrability condition when a signed subtraction is needed.

**Worked example 11.4 (Zero total value with positive variation).** On \\([-1,1]\\), put \\(\\eta(E)=\\int_Ex\\,dx\\). A Hahn partition is \\([0,1]\\) and \\([-1,0)\\). The positive density is \\(x1_{[0,1]}\\), the negative density is \\((-x)1_{[-1,0)}\\), and both have mass \\(1/2\\). Thus \\(\\eta([-1,1])=0\\), while \\(|\\eta|([-1,1])=\\int_{-1}^1|x|\\,dx=1\\). A total value of zero is not evidence that the signed measure vanishes on all subsets.

## The finite positive density theorem

For positive measures, write \\(\\nu\\ll\\mu\\) when every \\(\\mu\\)-null measurable set is \\(\\nu\\)-null. This is **absolute continuity of measures**. Write \\(\\nu\\perp\\mu\\) when there is a measurable \\(S\\) with \\(\\mu(S)=0\\) and \\(\\nu(X\\setminus S)=0\\). This is mutual singularity; the definition is symmetric because the two complementary carrying sets can be interchanged.

We need the real Hilbert representation fact: every continuous real linear functional \\(L\\) on a Hilbert space has the form \\(L(u)=\\langle u,g\\rangle\\). Here is the geometric proof. If \\(L\\ne0\\), its kernel is a closed subspace. For a point outside that kernel, a sequence minimizing distance to the kernel is Cauchy by the parallelogram identity, and completeness gives a closest point. Subtracting that closest point gives a nonzero vector \\(z\\) orthogonal to the kernel: minimizing the squared distance along any kernel vector forces its linear term to vanish. Every \\(u\\) differs from \\(L(u)z/L(z)\\) by a kernel vector. Therefore \\(g=L(z)z/\\|z\\|^2\\) represents \\(L\\). The zero functional is represented by zero. This uses the \\(L^2\\) completeness established in chapter 7, rather than assuming a representation theorem about measures.

**Theorem 11.5 (Finite Radon–Nikodym).** If \\(\\mu,\\nu\\) are finite positive measures and \\(\\nu\\ll\\mu\\), there is a nonnegative \\(h\\in L^1(\\mu)\\) with
\\[
 \\nu(E)=\\int_Eh\\,d\\mu\\qquad(E\\in\\Sigma).
\\]
It is unique up to equality \\(\\mu\\)-almost everywhere.

*Proof.* Set \\(\\lambda=\\mu+\\nu\\). On the real Hilbert space \\(L^2(\\lambda)\\), the functional \\(L(u)=\\int u\\,d\\nu\\) is well defined and bounded, because
\\[
 |L(u)|\\le\\nu(X)^{1/2}\\left(\\int|u|^2\\,d\\nu\\right)^{1/2}
 \\le\\nu(X)^{1/2}\\|u\\|_{L^2(\\lambda)}.
\\]
Let \\(g\\in L^2(\\lambda)\\) represent it. Indicators belong to this Hilbert space since \\(\\lambda\\) is finite, so \\(\\nu(E)=\\int_Eg\\,d\\lambda\\). The inequalities \\(0\\le\\nu(E)\\le\\lambda(E)\\) for every set force \\(0\\le g\\le1\\) almost everywhere. For example, a positive-measure set where \\(g<-1/n\\) would give a negative integral, and a set where \\(g>1+1/n\\) would contradict the upper bound. Modify \\(g\\) to lie in that range everywhere.

Subtracting finite values gives \\(\\mu(E)=\\int_E(1-g)\\,d\\lambda\\). On \\(S=\\{g=1\\}\\), this gives \\(\\mu(S)=0\\), so absolute continuity implies \\(\\nu(S)=0\\), and consequently \\(\\lambda(S)=0\\). Set \\(h=g/(1-g)\\) off \\(S\\) and zero on \\(S\\). The indicator identity for \\(\\mu\\), extended to nonnegative integrands by simple approximation, gives
\\[
 \\int_Eh\\,d\\mu
 =\\int_Eh(1-g)\\,d\\lambda
 =\\int_Eg\\,d\\lambda=\\nu(E).
\\]
Its total integral is \\(\\nu(X)<\\infty\\). If two densities existed, integrating their difference on the sets where one exceeds the other by more than \\(1/n\\) shows those sets are null. Their countable union proves uniqueness. ∎

The auxiliary density \\(g\\) is bounded because the dominating measure is \\(\\mu+\\nu\\). Dividing by \\(1-g\\) transfers the density back to \\(\\mu\\). Absolute continuity is used precisely to dispose of the set on which that denominator vanishes.

## Sigma-finite densities and decomposition

**Theorem 11.6 (Radon–Nikodym, sigma-finite form).** If \\(\\mu,\\nu\\) are sigma-finite positive measures with \\(\\nu\\ll\\mu\\), there is a nonnegative measurable density, finite \\(\\mu\\)-almost everywhere, such that \\(\\nu(E)=\\int_Eh\\,d\\mu\\) for every measurable set. It is unique almost everywhere.

*Proof.* Intersect finite-measure covers for the two measures and disjointize the resulting countable cover. This gives a measurable partition \\((D_j)\\) with both measures finite on every piece. Apply the finite theorem on each piece and paste its densities. Countable additivity and monotone convergence give the identity on arbitrary sets, including infinite-measure sets. Each pasted density is finite almost everywhere on its piece because it has finite integral there. Uniqueness follows piece by piece from the finite result, and the exceptional sets have a null countable union. ∎

The notation \\(h=d\\nu/d\\mu\\) denotes an almost everywhere class, not an everywhere specified ratio of values on points. A derivative may be unbounded, and its representative on a null set is irrelevant. For every nonnegative measurable \\(u\\), simple approximation gives the useful change-of-measure identity \\(\\int u\\,d\\nu=\\int uh\\,d\\mu\\). For signed or complex functions the identity holds whenever either corresponding absolute integral is finite; the nonnegative identity proves equality of those absolute integrals as well.

**Theorem 11.7 (Lebesgue decomposition).** For sigma-finite positive measures \\(\\mu,\\nu\\), there are unique positive measures \\(\\nu_a,\\nu_s\\) with \\(\\nu=\\nu_a+\\nu_s\\), \\(\\nu_a\\ll\\mu\\) and \\(\\nu_s\\perp\\mu\\). The absolutely continuous part has a Radon–Nikodym density.

*Proof.* First suppose both measures are finite. Repeat the Hilbert construction with \\(\\lambda=\\mu+\\nu\\); it did not use absolute continuity until the division step. We obtain \\(0\\le g\\le1\\), \\(d\\nu=g\\,d\\lambda\\) and \\(d\\mu=(1-g)\\,d\\lambda\\). On \\(S=\\{g=1\\}\\), \\(\\mu\\) vanishes. Let \\(\\nu_s\\) be \\(\\nu\\) restricted to \\(S\\), and \\(\\nu_a\\) its restriction to the complement. The latter has density \\(g/(1-g)\\) there, extended by zero on \\(S\\), by the same nonnegative weighted-integral computation. This proves existence in the finite case. Partition into common finite-measure pieces for the general case, and sum the two constructed parts. The countable union of their singular carrying sets is \\(\\mu\\)-null, so the singular part remains singular.

For uniqueness, take the union \\(N\\) of carrying null sets for two proposed singular parts. Both absolutely continuous parts vanish on \\(N\\), and both singular parts vanish off it. On any set \\(E\\), each absolutely continuous part must equal \\(\\nu(E\\setminus N)\\) and each singular part must equal \\(\\nu(E\\cap N)\\). This proves equality without subtracting possibly infinite values. The density statement follows from theorem 11.6, or directly from the finite constructions. ∎

**Worked example 11.8 (A density and a singular atom).** On the line let \\(\\nu=2m+3\\delta_1\\), the Stieltjes example from the preceding chapter. Relative to length, the absolutely continuous part is \\(2m\\), with density two. The singular part is \\(3\\delta_1\\), carried by the length-zero singleton. There is no single length density for all of \\(\\nu\\): such a density would assign zero to that singleton. Relative instead to \\(\\rho=m+\\delta_1\\), the whole measure has density two away from one and three at one. The reference measure is part of the statement of a density, rather than an optional label.

For a finite signed \\(\\eta\\), define \\(\\eta\\ll\\mu\\) to mean that it vanishes on every \\(\\mu\\)-null set. Its Jordan parts also vanish there. Indeed every measurable subset of such a null set is null, so the partition formula makes its variation zero. Applying Radon–Nikodym to the Jordan parts gives a unique real \\(f\\in L^1(\\mu)\\) with \\(\\eta(E)=\\int_Ef\\,d\\mu\\), provided \\(\\mu\\) is sigma finite. Conversely any such density defines a finite signed measure. Its Hahn partition is \\(\\{f\\ge0\\}\\) and \\(\\{f<0\\}\\), hence \\(|\\eta|(E)=\\int_E|f|\\,d\\mu\\). This also identifies the total variation norm with the \\(L^1\\) norm of the density.

## Changing reference measure and averaging information

If \\(\\lambda\\ll\\nu\\ll\\mu\\) are sigma-finite positive measures, the weighted-integral identity proves the chain rule
\\[
 \\frac{d\\lambda}{d\\mu}
 =\\frac{d\\lambda}{d\\nu}\\frac{d\\nu}{d\\mu}
 \\quad\\mu\\text{-almost everywhere}.
\\]
Choose representatives with product zero wherever \\(d\\nu/d\\mu=0\\); values of the first factor there do not matter. To prove the rule, integrate the proposed product over an arbitrary measurable set, changing measure once. The result is \\(\\lambda(E)\\), and uniqueness identifies the density. If \\(\\nu\\) and \\(\\mu\\) are equivalent, meaning absolutely continuous in both directions, then \\(d\\nu/d\\mu>0\\) almost everywhere for \\(\\mu\\), and \\(d\\mu/d\\nu\\) is its reciprocal almost everywhere for \\(\\nu\\). Positivity follows because a zero-density set is \\(\\nu\\)-null and hence \\(\\mu\\)-null.

**Worked example 11.9 (An unbounded reciprocal).** On \\((0,1)\\), let \\(d\\nu=2x\\,dx\\). The density is positive at every input, so \\(\\nu\\) and length are equivalent. The reciprocal density is \\(1/(2x)\\), unbounded near zero. Nevertheless its \\(\\nu\\)-integral is \\(\\int_0^1[1/(2x)]2x\\,dx=1\\), as required by the mass of length measure. Boundedness of a density and equivalence of measures are different conditions; the reciprocal identity concerns the appropriate weighted integral.

Radon–Nikodym also constructs conditional expectation. On a probability space, let \\(Z\\in L^1\\) be real valued and let \\(\\mathcal G\\) be a sub-sigma-algebra. For nonnegative \\(Z\\), the assignment \\(A\\mapsto\\int_AZ\\,dP\\), for \\(A\\in\\mathcal G\\), is a finite measure absolutely continuous with respect to \\(P|_{\\mathcal G}\\). Its density is a \\(\\mathcal G\\)-measurable function called \\(E[Z\\mid\\mathcal G]\\). Apply the signed density theorem to general integrable real \\(Z\\). Its defining property is equality of its integral with that of \\(Z\\) on every admitted \\(\\mathcal G\\)-event, and uniqueness is almost everywhere uniqueness.

This definition proves positivity and the integral-preserving property directly. It also gives \\(|E[Z\\mid\\mathcal G]|\\le E[|Z|\\mid\\mathcal G]\\): positivity applied to \\(|Z|+Z\\) and \\(|Z|-Z\\) bounds the signed conditional density between the positive and negative conditional densities of \\(|Z|\\). Integrating gives the \\(L^1\\) contraction. If \\(\\mathcal H\\subset\\mathcal G\\), the defining integral identities on \\(\\mathcal H\\)-events and uniqueness give the tower identity \\(E[E[Z\\mid\\mathcal G]\\mid\\mathcal H]=E[Z\\mid\\mathcal H]\\). These are consequences of a measure representation theorem, not assumptions about averaging.

For example, if \\(\\mathcal G\\) records only a finite measurable partition into cells of positive probability, the conditional expectation is constant on each cell, with value \\(\\int_AZ\\,dP/P(A)\\). This formula follows by testing the cell itself and its unions. Cells of zero probability may receive arbitrary finite values. It is the general theorem, rather than that finite formula, which handles information with infinitely many possible outcomes.

## A necessary hypothesis and an impossible density

The sigma-finiteness condition on the reference measure cannot simply be removed. On the Borel sets of \\([0,1]\\), let \\(\\mu\\) be counting measure and \\(\\nu\\) length measure. The only \\(\\mu\\)-null set is the empty set, so \\(\\nu\\ll\\mu\\). If a nonnegative density existed, evaluating it on each singleton would give \\(h(x)=\\nu(\\{x\\})=0\\) for every input. Its integral with respect to counting measure would then be zero, contradicting \\(\\nu([0,1])=1\\). Counting measure here is not sigma finite, as the product chapter already established. Absolute continuity alone records which sets are null; the representation theorem needs enough finite reference pieces to turn that information into a density.

## Exercises with hints and complete solutions

### MEASURE-RN-E001 — A positive set is more than a positive value

For \\(\\eta(E)=\\int_Ex\\,dx\\) on \\([-1,1]\\), find a set of positive signed value that is not a positive set.

**Hint 1.** Include a short negative interval and a longer positive interval.

**Hint 2.** Compare the two elementary quadratic integrals.

**Solution.** Take \\(E=[-1/2,1]\\). Its signed value is \\(1/2-1/8=3/8>0\\), but its subset \\([-1/2,0)\\) has value \\(-1/8\\). Hence it is not a positive set. A Hahn positive set requires every measurable subset to have nonnegative value, not merely the total.

### MEASURE-RN-E002 — Unions of positive sets

Prove that a countable union of positive sets is positive, even when the sets overlap.

**Hint 1.** Disjointize the listed sets in their order.

**Hint 2.** Partition an arbitrary measurable subset of their union using those disjoint pieces.

**Solution.** Put \\(D_j=P_j\\setminus\\bigcup_{i<j}P_i\\). These disjoint measurable sets cover the union and each is contained in a positive set. Any measurable \\(B\\) in the union splits as the disjoint union of \\(B\\cap D_j\\), each with nonnegative value. Countable additivity makes \\(\\eta(B)\\) their nonnegative sum, so the union is positive.

### MEASURE-RN-E003 — Variation on two atoms

Let \\(\\eta=2\\delta_a-3\\delta_b\\) for distinct points. Find its Jordan parts, total variation and total signed value. What changes if the points coincide?

**Hint 1.** Distinct atoms can be carried by disjoint sets.

**Hint 2.** Combine coefficients before taking variation when the locations coincide.

**Solution.** For distinct points the Jordan parts are \\(2\\delta_a\\) and \\(3\\delta_b\\), so \\(|\\eta|=2\\delta_a+3\\delta_b\\), total variation five, and total signed value minus one. If the points coincide, \\(\\eta=-\\delta_a\\), its positive part is zero and its negative part is \\(\\delta_a\\). Total variation is then one. The original two positive measures no longer form the Jordan decomposition because they are not mutually singular.

### MEASURE-RN-E004 — Minimal Jordan parts

Prove that if \\(\\eta=\\alpha-\\beta\\) for finite positive measures, then \\(|\\eta|(E)\\le\\alpha(E)+\\beta(E)\\).

**Hint 1.** Use the Hahn positive and negative subsets of \\(E\\).

**Hint 2.** The positive Jordan part is bounded by \\(\\alpha\\), and the negative part by \\(\\beta\\).

**Solution.** On \\(E\\cap P\\), \\(\\eta^+(E)=\\alpha(E\\cap P)-\\beta(E\\cap P)\\le\\alpha(E)\\). On \\(E\\cap N\\), \\(\\eta^-(E)=\\beta(E\\cap N)-\\alpha(E\\cap N)\\le\\beta(E)\\). Add these inequalities to obtain the variation bound. This also shows why a nonminimal positive-minus-positive representation can overestimate the actual variation.

### MEASURE-RN-E005 — Uniqueness of a density

Suppose nonnegative finite-almost-everywhere functions \\(f,g\\) represent the same sigma-finite measure relative to \\(\\mu\\). Prove their equality almost everywhere without subtracting infinite integrals.

**Hint 1.** Restrict to common finite-measure pieces on which both represented integrals are finite.

**Hint 2.** Within such a piece, test \\(\\{f>g+1/n\\}\\).

**Solution.** Use finite covers for the reference measure and represented measure, intersect and disjointize them as in theorem 11.6. On each piece both densities have finite integrals, so their difference is integrable. On the set where \\(f>g+1/n\\), equality of the finite integrals forces that set to have reference measure zero. Take the union over \\(n\\), reverse the roles of the functions and then take the union over the countable partition. This proves almost everywhere equality with no infinite subtraction.

### MEASURE-RN-E006 — A signed density and its variation

If \\(f\\in L^1(\\mu)\\) and \\(\\eta(E)=\\int_Ef\\,d\\mu\\), prove \\(|\\eta|(E)=\\int_E|f|\\,d\\mu\\).

**Hint 1.** The sign sets of \\(f\\) form a Hahn partition.

**Hint 2.** Identify the Jordan densities before adding them.

**Solution.** Every subset of \\(\\{f\\ge0\\}\\) has nonnegative integral and every subset of \\(\\{f<0\\}\\) has nonpositive integral. Thus these sets form a Hahn partition. The Jordan parts have densities \\(f^+\\) and \\(f^-\\). Their sum has density \\(f^++f^-=|f|\\), proving the formula for every measurable set.

### MEASURE-RN-E007 — A singular density cannot be nonzero

Show that a positive measure both absolutely continuous and singular relative to \\(\\mu\\) is zero.

**Hint 1.** Let \\(S\\) be a null set carrying the singular measure.

**Hint 2.** Absolute continuity controls the measure of \\(S\\), and singularity controls its complement.

**Solution.** Absolute continuity gives \\(\\nu(S)=0\\) because \\(\\mu(S)=0\\). Singularity gives \\(\\nu(X\\setminus S)=0\\). Additivity yields \\(\\nu(X)=0\\), and monotonicity yields zero on every measurable subset. This is the basic incompatibility underlying uniqueness of Lebesgue decomposition.

### MEASURE-RN-E008 — Choosing the reference measure

Relative to \\(\\rho=m+\\delta_0+\\delta_1\\) on the line, find the density of \\(\\eta(E)=\\int_Ee^{-|x|}\\,dx+2\\delta_0(E)-4\\delta_1(E)\\) and its variation.

**Hint 1.** Length gives zero mass to the two atomic locations.

**Hint 2.** Give the density its required point values at those locations.

**Solution.** The density is \\(e^{-|x|}\\) away from zero and one, with value two at zero and minus four at one. Integrating against \\(\\rho\\) produces exactly the stated continuous and atomic terms. The variation has density equal to its absolute value, hence is \\(e^{-|x|}m+2\\delta_0+4\\delta_1\\), of total mass eight because \\(\\int_{\\mathbb R}e^{-|x|}\\,dx=2\\).

### MEASURE-RN-E009 — A chain rule

On \\((0,1)\\), let \\(d\\nu=2x\\,dx\\) and \\(d\\lambda=3x^2\\,dx\\). Compute \\(d\\lambda/d\\nu\\) and verify the chain rule.

**Hint 1.** The reference density is strictly positive on this open interval.

**Hint 2.** Divide the two densities and verify by integration over an arbitrary set.

**Solution.** The derivative is \\(3x/2\\). For every measurable set \\(E\\), \\(\\int_E(3x/2)\\,d\\nu=\\int_E(3x/2)2x\\,dx=\\lambda(E)\\). Multiplying it by \\(d\\nu/dm=2x\\) gives \\(3x^2=d\\lambda/dm\\), the asserted chain rule. The computation is valid at every input in the open interval, and uniqueness supplies the almost everywhere formulation.

### MEASURE-RN-E010 — Conditional expectation on a partition

On \\([0,1]\\) with uniform probability, let \\(Z(x)=x\\) and let \\(\\mathcal G\\) be generated by the two halves. Find \\(E[Z\\mid\\mathcal G]\\) and verify the defining integral identities.

**Hint 1.** A \\(\\mathcal G\\)-measurable function is constant on each half, up to endpoint conventions.

**Hint 2.** Divide the integral of \\(x\\) on each cell by the probability of that cell.

**Solution.** The conditional density equals \\(1/4\\) on \\([0,1/2)\\) and \\(3/4\\) on \\([1/2,1]\\). Its integrals on the cells are \\(1/8\\) and \\(3/8\\), equal to the corresponding integrals of \\(x\\). These identities also hold on their union and the empty set, which are all \\(\\mathcal G\\)-events. Thus the function satisfies the defining property and is unique almost everywhere.

### MEASURE-RN-E011 — The tower identity

For sub-sigma-algebras \\(\\mathcal H\\subset\\mathcal G\\), prove the tower identity using only the defining integral property and uniqueness.

**Hint 1.** Test both candidate \\(\\mathcal H\\)-measurable functions on an arbitrary \\(\\mathcal H\\)-event.

**Hint 2.** Such an event is also in \\(\\mathcal G\\).

**Solution.** For \\(A\\in\\mathcal H\\), the integral of \\(E[E[Z\\mid\\mathcal G]\\mid\\mathcal H]\\) on \\(A\\) equals the integral of \\(E[Z\\mid\\mathcal G]\\) there, which equals the integral of \\(Z\\) because \\(A\\in\\mathcal G\\). The candidate is integrable and \\(\\mathcal H\\)-measurable by construction. It therefore has the defining property of \\(E[Z\\mid\\mathcal H]\\), and uniqueness proves equality almost everywhere.

### MEASURE-RN-E012 — No density against uncountable counting measure

Give the complete contradiction showing that length measure on \\([0,1]\\) has no density with respect to counting measure, despite absolute continuity.

**Hint 1.** The only counting-null set is empty.

**Hint 2.** Evaluate a proposed density on every singleton before integrating it on the whole interval.

**Solution.** Absolute continuity holds because a set with counting mass zero is empty and has length zero. If \\(h\\ge0\\) represented length, then \\(0=m(\\{x\\})=\\int_{\\{x\\}}h\\,d\\mu=h(x)\\) for every input. Hence \\(h\\) is identically zero and its total integral is zero, contradicting the interval's length one. The reference measure is not sigma finite, so the Radon–Nikodym theorem does not apply.

## Summary

Hahn decomposition isolates positive and negative regions of a finite real signed measure. Jordan decomposition and total variation are intrinsic, even when the regions themselves are not unique. For sigma-finite positive measures, absolute continuity is equivalent to representation by a nonnegative measurable density, and Lebesgue decomposition separates that density part from a singular part. The proof uses a bounded Hilbert-space density relative to the sum of two finite measures, followed by localization. Signed densities recover variation through their absolute values. Changing reference measure obeys a chain rule, and restricting integral information to a sub-sigma-algebra yields conditional expectation. All densities are almost everywhere classes relative to their stated reference measure.
`;export{e as default};