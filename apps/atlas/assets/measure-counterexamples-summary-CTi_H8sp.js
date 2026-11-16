var e=`---
parent_id: book-measure-and-integration
chapter_id: measure-counterexamples-summary
title: "Counterexamples and Synthesis"
level: graduate
license: CC BY-SA 4.0
---

# Counterexamples and Synthesis

A failed conclusion is useful only when its failure can be assigned to a specific missing hypothesis. The same spike may defeat uniform convergence, integral convergence or compactness, but those conclusions ask different questions. Measure theory provides exact budgets for separating them: the height of an error, the size of its support, its high-value mass, its spatial tail and the reference measure's null sets.

This chapter collects the mechanisms developed throughout the book and uses them in complete comparison arguments. The opening retained sections come from the [Real Analysis counterexample atlas](../proof-safe-real-analysis/counterexample-atlas-and-capstones.md). Its original ANA-CH22 exercises remain there, including their optional continuation prompts and complete solutions. The new exercise family here belongs to the Measure book. The [Fourier summary](../fourier-analysis/back-matter/glossary-and-theorem-finder.md) receives the Fourier/Gibbs comparison and approximation capstone; coefficients, summation conventions and overshoot hypotheses remain part of that separate theory.

## 5. Concentrate mass to defeat dominated convergence

Set

\\(f_n=n\\,1_{(0,1/n)}\\).

The support shrinks to zero and the height grows to infinity. The sequence converges to zero almost everywhere but has integral one. No common integrable envelope exists, and the family is not uniformly integrable.

More generally, choose height \\(h_n\\) and support length \\(w_n\\). Then

\\(\\lVert f_n\\rVert_p^p=h_n^p w_n\\).

By tuning these two scales, one can make pointwise behavior, \\(L^p\\) norms, and integral mass follow different paths. Scale balancing is a systematic counterexample generator.

For the model \\(f_n=h_n\\,1_{(0,w_n)}\\), keep the ledger

\\(\\lVert f_n\\rVert_p=h_n w_n^{1/p}\\), \\(\\lVert f_n\\rVert_\\infty=h_n\\), and \\(\\int f_n=h_nw_n\\).

If the supports are nested and \\(w_n\\to 0\\), almost-everywhere convergence to zero follows regardless of the heights. Choosing \\(h_n=w_n^{-1}\\) preserves integral mass; choosing \\(h_n=w_n^{-1/p}\\) preserves the \\(L^p\\) norm. Thus one can prescribe the desired norm behavior before choosing numerical sequences.

Domination fails structurally. If an integrable \\(g\\) dominates \\(n\\,1_{(0,1/n)}\\), then at a small positive \\(x\\), integers \\(n\\) below \\(1/x\\) force \\(g(x)\\) to have size comparable to \\(1/x\\) near zero, which is not integrable. Uniform integrability names the missing family-level tail control without requiring one pointwise envelope.

## 7. Let average error vanish while preserving worst-case error

A bounded spike of height one and width \\(1/n\\) has \\(L^p\\) norm of order \\(n^{-1/p}\\) but supremum norm one. Thus it converges in every finite \\(L^p\\) while failing to converge uniformly.

Whenever one convergence mode is used to claim another, compute how error height and support measure combine.

For bounded error \\(e_n\\) supported on a set of measure \\(w_n\\),

\\(\\lVert e_n\\rVert_p\\le \\lVert e_n\\rVert_\\infty w_n^{1/p}\\).

This explains why a visible defect can disappear in every finite \\(L^p\\) norm. It gives no matching lower bound unless the error stays large on a known portion of the support. Sound examples specify both height and geometry instead of relying on a plot.

## 8. Change null sets to break pointwise regularity

On any bounded interval, the zero function and \\(1_Q\\) are equal almost
everywhere, so they represent the same \\(L^p\\) element and have the same
integrals. When interpreted on a fixed periodic interval, they also have the
same Fourier coefficients. Yet one is continuous everywhere and the other
nowhere.

This pattern refutes any claim that an almost-everywhere equivalence class carries canonical point values or continuity. It also explains why Sobolev and absolute-continuity theorems often assert existence of a special representative rather than a property of every representative.

Null sets are invisible to integration, not to topology.

There is no contradiction in saying that an \\(L^p\\) element has a continuous representative while another representative is nowhere continuous. “Has a continuous representative” is a property of the equivalence class; “this representative is continuous” concerns a selected function. When a theorem constructs a special version, uniqueness must use the appropriate sense—often everywhere among continuous representatives, but only almost everywhere among arbitrary measurable ones.

## A map of the hypotheses that actually act

| Proposed passage | Control required | Concrete failure mechanism |
|---|---|---|
| assign size to every subset of the line | a specified measurable domain | rational-translate selection |
| extend an elementary assignment | countable consistency on elementary unions | finite/cofinite assignment on the integers |
| identify extensions from generators | common finite-mass localization | nonempty intervals assigned infinite mass |
| turn almost everywhere convergence into almost uniform convergence | finite total measure | travelling unit intervals on the line |
| pass a limit through an integral | positivity, domination, or the appropriate uniform-integrability/tail conditions | concentration or escape |
| interchange signed product integrals | absolute integrability | the two-order cancellation example |
| infer a density from absolute continuity | sigma-finite reference measure in the stated theorem | length relative to uncountable counting measure |
| recover a BV function from its derivative | absolute continuity | an atom or a Cantor singular component |
| obtain uniform approximation by a concentrated kernel | suitable regularity of the input | a jump retains supremum error |
| preserve probability mass under compact tests | an additional no-escape condition | atoms moving to infinity |

The table is an index to proved statements, rather than a collection of replacement slogans. For each application identify the exact theorem, the measurable spaces, the relevant null sets and the target mode of convergence. A new condition is useful when it repairs the failed line in the proof. It need not be the only possible repair: nonnegative monotonicity and uniform integrability control different families.

## Uniform integrability can hold without a common envelope

**Worked example 16.1 (Disjoint harmonic mass).** On \\((0,1)\\), let \\(I_n=(2^{-n},2^{1-n})\\) and
\\[
 f_n=\\frac{2^n}{n}1_{I_n}.
\\]
The intervals are disjoint and have lengths \\(2^{-n}\\). Thus \\(\\|f_n\\|_1=1/n\\to0\\), and each input belongs to at most one support, so pointwise convergence to zero holds. The sequence is uniformly integrable. Directly, for any prescribed small error choose \\(N\\) large so that \\(1/n\\) is small for all \\(n>N\\), then choose a height exceeding the finitely many amplitudes with indices at most \\(N\\). Every remaining high-value integral is at most that small error.

There is nevertheless no common integrable nonnegative envelope. If \\(g\\ge f_n\\) almost everywhere for each \\(n\\), remove the countable union of exceptional null sets. On the disjoint intervals the lower bounds combine, giving
\\[
 \\int_0^1g\\ge\\sum_{n\\ge1}\\int_{I_n}f_n
 =\\sum_{n\\ge1}\\frac1n=\\infty.
\\]
This example distinguishes the sufficient domination condition in DCT from the family-level condition in Vitali. Replacing one by the other does not merely change terminology: the weaker family condition admits this sequence.

The heights grow, but that fact alone does not refute uniform integrability. What matters is integral mass above high thresholds. Conversely, a uniform bound on individual \\(L^1\\) norms alone does not establish uniform integrability: the nested unit-mass spikes in the transferred section have exactly that bound and fail the high-value condition. A family must be assessed by the definition relevant to its measure space.

## Spatial tightness and the global integral limit

On an infinite space, high-value control addresses concentration but can miss escape. The unit indicators \\(1_{[n,n+1]}\\) have no high-value mass above one; they still carry unit mass away from every fixed compact set. A different example, \\(n^{-1}1_{[0,n]}\\), tends uniformly to zero while its integral remains one. The mass spreads over a growing region instead of concentrating at high values.

Here is a precise repair on Euclidean space. Suppose \\(f_n\\in L^1(\\mathbb R^d)\\), their norms are uniformly bounded, they converge locally in measure to a finite measurable \\(f\\), and
\\[
 \\lim_{M\\to\\infty}\\sup_n\\int_{|f_n|>M}|f_n|=0,
 \\qquad
 \\lim_{R\\to\\infty}\\sup_n\\int_{|x|>R}|f_n(x)|\\,dx=0.
\\]
Then \\(f\\in L^1\\) and \\(\\|f_n-f\\|_1\\to0\\).

To prove this, select a subsequence with almost everywhere convergence on the whole space. Such a selection follows directly from local convergence: at stage \\(k\\), make the error region above \\(2^{-k}\\) inside the radius-\\(k\\) ball have measure below \\(2^{-k}\\). The summable-error argument ensures that almost every input eventually has error at most \\(2^{-k}\\), since it eventually belongs to those balls. Fatou gives integrability of \\(f\\) from the uniform norm bound. Applied outside any fixed ball along that subsequence, it also gives the same spatial tail bound for \\(f\\).

On each fixed ball, the high-value condition gives uniform integrability in the finite-measure sense. Local convergence in measure and finite-measure Vitali therefore give convergence in \\(L^1\\) on that ball for the entire original sequence. Choose the ball so both spatial tails are small, then choose the index so that the interior norm difference is small. Adding those three errors proves global norm convergence. No claim about the full sequence converging pointwise was needed.

Each assumption has a visible role. Local convergence identifies the candidate; the uniform integral bound makes it integrable; the high-value condition prevents concentration inside bounded regions; the spatial condition prevents escape or spreading outside them. On a finite-measure space there is no infinite spatial region to control, which is why the simpler Vitali theorem has fewer clauses.

## Why the measurable domain cannot be suppressed

**Worked example 16.2 (A rational-translate obstruction).** Partition \\([0,1]\\) by the relation that two inputs differ by a rational number, and choose one representative from each class. Call the selected set \\(V\\). The selection uses a choice of representatives; it is not an explicit Borel construction. Its distinct rational translates \\(V+q\\), for \\(q\\in\\mathbb Q\\cap[-1,1]\\), are disjoint. If two translated points agreed, their representatives would differ rationally and so be the same representative, forcing the translations to agree.

Their union covers \\([0,1]\\) and is contained in \\([-1,2]\\). If \\(V\\) were Lebesgue measurable and had zero measure, countable subadditivity and translation invariance would make that union null, contradicting its containing the unit interval. If its measure were positive, the countably many disjoint translates would have infinite total measure, contradicting containment in a bounded interval. Since \\(V\\subset[0,1]\\), its measure could not be infinite either. Thus it is not Lebesgue measurable.

This argument does not refute the measure axioms. It shows that those axioms, translation invariance and normalized interval length cannot all be retained while admitting every subset. The Carathéodory construction specifies the domain where the desired structure is coherent. Completion admits subsets of null sets, not arbitrary selections of representatives from every equivalence relation.

## The exponent and the ambient measure both matter

**Worked example 16.3 (Two different obstructions to norm inclusion).** On \\((0,1)\\), let \\(u(x)=x^{-1/3}\\). Its square has finite integral three, while its fourth power has infinite integral. Thus \\(u\\in L^2\\setminus L^4\\). On \\((1,\\infty)\\), let \\(v(x)=x^{-3/4}\\). Its square is integrable, with integral two, but its first power is not. Thus \\(v\\in L^2\\setminus L^1\\). The first example concerns a singularity on a finite domain; the second concerns a tail on an infinite domain.

On a finite-measure space, Hölder proves \\(L^q\\subset L^p\\) for \\(p<q\\), with \\(\\|f\\|_p\\le\\mu(X)^{1/p-1/q}\\|f\\|_q\\). The second example shows why that conclusion cannot be transferred to an infinite space. For the reverse inclusion, the first example already fails on a probability-sized interval. Placing these functions on disjoint regions of the line shows that neither of two unequal finite exponents generally contains the other on the whole line. The norms encode both local singularities and distant tails.

Reference measure also changes null sets. The zero function and a singleton indicator represent the same length-based \\(L^p\\) class, but not the same class for counting measure. The statement that a function vanishes almost everywhere always names, explicitly or through context, a particular measure. A derivative density similarly depends on its reference measure, as the mixed atomic example in chapter 11 demonstrated.

## Three notions of small error

For a concrete approximation, distinguish the following questions. Is the error small at almost every fixed input? Are fixed-height error regions small in measure? Is the integral of the error magnitude small? A fourth question, uniform error, takes the worst allowed input rather than an average. Chapter 8 supplied exact implications and counterexamples, including the typewriter sequence. Its finite \\(L^p\\) norm tends to zero while it fails pointwise convergence everywhere on its half-open domain. Norm convergence is not a hidden assertion about every original input.

Conversely, almost everywhere convergence can coexist with a fixed or growing norm. Nested spikes accomplish this by adjusting height against width. The support formula in the transferred section lets one prescribe a norm first, then choose the amplitude. For a sequence of functions with genuinely different domains, the ambient domain must also be fixed or connected by a specified extension map before any such convergence statement is meaningful.

Representative changes add another distinction. The integral and an \\(L^p\\) class ignore changes on null sets. A graph's continuity and the exact value of an endpoint increment do not. A continuous representative, when it exists on a full-support length domain, is unique among continuous representatives: a nonzero continuous difference would stay nonzero on an open ball of positive measure. Arbitrary measurable representatives are only unique almost everywhere. The choice of uniqueness language is part of the conclusion.

## Signed cancellation, differentiation and missing mass

The rearrangement construction also uses that individual terms tend to zero. Overshoots above and below a target then shrink, so the steered partial sums converge. In measure theory, Tonelli permits reordering nonnegative mass even when the total is infinite. Fubini permits signed reordering when absolute integrability makes both positive and negative masses finite. These hypotheses are precisely what prevent conditional cancellation.

The order-dependent product integral of chapter 10 is a joint version of that cancellation mechanism. Both one-dimensional orders exist, but the positive and negative product integrals are infinite. The expression has no defined signed product integral. An implementation or a formal manipulation that chooses one order has made an extra choice; it has not evaluated a common absolutely convergent object.

Differentiation can miss mass for another reason. The Stieltjes measure of a bounded-variation function has a density part and a singular part. Almost everywhere differentiation recovers the density, while a jump or a Cantor singular component contributes no derivative mass almost everywhere. Even continuity does not remove the Cantor remainder. Absolute continuity is the exact recovery class proved in chapter 12, and it also controls exact endpoint increments rather than only an almost everywhere equivalence class.

These failures have different repairs. Absolute integrability repairs signed order exchange. Absolute continuity repairs recovery of a primitive from its derivative. Uniform integrability repairs concentration in integral limits. The word absolute occurs in each phrase, but the mathematical conditions concern different objects. A correct proof identifies which object needs control and which theorem converts that control into the desired conclusion.

## Retained convergence capstone

### Capstone B: convergence tribunal

Build five sequences of functions exhibiting distinct relationships among pointwise, almost-everywhere, in-measure, \\(L^1\\), \\(L^2\\), and uniform convergence. Calculate every relevant norm or exceptional-set measure. Present the results as a matrix with proved yes/no entries; no cell may be justified only by a plot.

For the resulting matrix, label every row by its domain and measure. A statement on the unit interval cannot be copied into a row on the line without checking finiteness. In each negative entry give a moving input, a superlevel measure, an explicit norm, or a failed tail budget. In each positive entry name a theorem and verify its hypotheses. Keep the constructions separate long enough to see their mechanisms before combining them into one elaborate sequence.

## Exercises with hints and complete solutions

### MEASURE-SYNTHESIS-E001 — Uniform integrability without domination

For example 16.1, prove both uniform integrability and nonexistence of an integrable common envelope.

**Hint 1.** Discard finitely many amplitudes by choosing a sufficiently large height.

**Hint 2.** Disjoint supports turn a common envelope into a divergent harmonic lower bound.

**Solution.** Given \\(\\varepsilon>0\\), choose \\(N\\) with \\(1/n<\\varepsilon\\) for \\(n>N\\), and a height above all amplitudes in the first \\(N\\) functions. Every high-value integral is then zero for those first indices and at most \\(1/n<\\varepsilon\\) for later ones. A common envelope would have integral at least the sum of the integrals on the disjoint supports, namely \\(\\sum_n1/n=\\infty\\). The two claims follow directly from their definitions.

### MEASURE-SYNTHESIS-E002 — A prescribed norm threshold

For \\(f_n=n^\\alpha1_{(0,n^{-\\beta})}\\), \\(\\beta>0\\), determine convergence to zero in \\(L^p\\), in measure and almost everywhere.

**Hint 1.** Its finite norm is \\(n^{\\alpha-\\beta/p}\\).

**Hint 2.** Every fixed positive input eventually lies outside the shrinking support, and every fixed-height error region has measure at most its width.

**Solution.** Finite norm convergence holds exactly when \\(\\alpha<\\beta/p\\). At equality the norm is one and above it the norm diverges. Almost everywhere convergence to zero holds for every real \\(\\alpha\\), because the supports shrink to the endpoint. Convergence in measure also holds for every \\(\\alpha\\), since the region above any positive tolerance has measure at most \\(n^{-\\beta}\\to0\\). Thus the integral norm conclusion needs the amplitude-width comparison that the other two do not.

### MEASURE-SYNTHESIS-E003 — A spatial tail failure

For \\(f_n=n^{-1}1_{[0,n]}\\), show uniform convergence to zero and failure of uniform spatial \\(L^1\\) tightness.

**Hint 1.** Its supremum height is \\(1/n\\).

**Hint 2.** For any fixed radius, take an interval length much larger than that radius.

**Solution.** The supremum tends to zero, so the convergence is uniform. The total integral is one. Outside radius \\(R>0\\), its integral is \\((n-R)/n\\) for \\(n>R\\), whose supremum over indices is one. Consequently the spatial tail condition never becomes small, explaining why the global \\(L^1\\) conclusion fails despite uniform small height and absent high-value tails.

### MEASURE-SYNTHESIS-E004 — Finite total measure in Egorov

Use travelling unit intervals to disprove Egorov's conclusion on the line.

**Hint 1.** Choose a permitted discarded-measure budget below one.

**Hint 2.** No whole support can be removed within that budget, even up to a null set.

**Solution.** The indicators converge pointwise to zero. If an exceptional set has measure less than one, each support interval retains a subset of positive measure outside it. Thus every index has supremum error one on the remaining domain. Uniform convergence there fails. The finite-measure proof used continuity from above on tail unions; here those tail unions have infinite measure.

### MEASURE-SYNTHESIS-E005 — Product order exchange

For the array with \\(a_{m,m}=1\\), \\(a_{m,m+1}=-1\\), compute both iterated sums and the absolute sum.

**Hint 1.** Each row has two cancelling entries.

**Hint 2.** The first column has no preceding negative entry.

**Solution.** Every row sum is zero, giving row-first total zero. The first column sums to one and every later column to zero, giving column-first total one. The absolute sum is infinite because each row contributes two. Fubini for counting product measure requires absolute summability and therefore does not apply. Tonelli remains valid for the nonnegative absolute values, with infinite answer.

### MEASURE-SYNTHESIS-E006 — A reference measure changes equivalence

Compare zero and \\(1_{\\{0\\}}\\) in \\(L^p\\) for length, counting measure and \\(m+\\delta_0\\), for finite \\(p\\).

**Hint 1.** Compute the mass of the singleton for each reference.

**Hint 2.** The norm to the power \\(p\\) is exactly that mass.

**Solution.** The singleton has masses zero, one and one respectively. The difference norm is therefore zero for length and one for either of the other references. The functions represent the same length-based class and distinct classes for the other two measures. Equality almost everywhere is never independent of the stated reference measure.

### MEASURE-SYNTHESIS-E007 — Nonatomic is weaker than absolutely continuous

Explain why the Cantor Stieltjes probability has no atoms but has no length density.

**Hint 1.** The generating distribution function is continuous.

**Hint 2.** All its mass lies on a length-zero set.

**Solution.** Its singleton masses are the jumps of the continuous Cantor function, hence all zero. It is carried by the Cantor set, whose length is zero and whose probability is one. A measure with a length density must assign zero to every length-null set, so this probability cannot have such a density. Absence of singleton atoms does not eliminate continuous singular mass.

### MEASURE-SYNTHESIS-E008 — A derivative does not record every increment

Find a continuous bounded-variation function whose derivative is one almost everywhere but whose endpoint increase is two.

**Hint 1.** Add a singular continuous increase to the identity function.

**Hint 2.** The Cantor function has endpoint increase one and derivative zero almost everywhere.

**Solution.** Take \\(F(x)=x+C(x)\\) on \\([0,1]\\). It is continuous and increasing, hence has bounded variation two. Its derivative is one almost everywhere, while its endpoint increase is two. Its nonzero singular Stieltjes component prevents absolute continuity. The integral of the derivative recovers only the identity contribution.

### MEASURE-SYNTHESIS-E009 — Two norm-inclusion failures

Verify both power-function calculations in example 16.3 and explain why they address different ends of the domain.

**Hint 1.** At zero, integrability of \\(x^{-s}\\) requires \\(s<1\\).

**Hint 2.** At infinity, it requires \\(s>1\\).

**Solution.** On the unit interval, \\(\\int x^{-2/3}=3\\), whereas \\(\\int x^{-4/3}=\\infty\\). On the tail, \\(\\int_1^\\infty x^{-3/2}=2\\), whereas \\(\\int_1^\\infty x^{-3/4}=\\infty\\). The first singularity becomes worse as the norm exponent increases; the distant tail becomes easier as it increases. Finite measure removes the second geometry but not the first.

### MEASURE-SYNTHESIS-E010 — Continuous tests and lost mass

For \\(\\mu_n=\\delta_n\\) on the line, prove convergence against compactly supported tests and failure of total-mass convergence to the resulting limit.

**Hint 1.** Every fixed compact support eventually misses the atom.

**Hint 2.** Compare the constant-one integral with the compact-test limit measure.

**Solution.** Every compactly supported continuous test has eventually zero integral, so the vague limit is the zero measure. The masses of \\(\\mu_n\\) are all one, while the limit mass is zero. The constant-one function is not compactly supported on the line and is not controlled by this convergence. A no-escape assumption would be needed to preserve total mass.

### MEASURE-SYNTHESIS-E011 — Uniform integrability from a stronger norm

If \\(P\\) is a probability measure and \\(\\sup_nE|X_n|^q\\le C\\), \\(q>1\\), prove convergence of expectations whenever \\(X_n\\to X\\) in probability.

**Hint 1.** Bound the high-value first-moment tails by \\(M^{1-q}C\\).

**Hint 2.** Apply finite-measure Vitali and then the integral triangle inequality.

**Solution.** On \\(\\{|X_n|>M\\}\\), \\(|X_n|\\le M^{1-q}|X_n|^q\\), so the expected tail is at most \\(M^{1-q}C\\), uniformly in the index. This proves uniform integrability. Convergence in probability is convergence in measure, and Vitali yields \\(E|X_n-X|\\to0\\). Hence \\(|E[X_n]-E[X]|\\le E|X_n-X|\\to0\\), with integrability of the limit supplied by the theorem.

### MEASURE-SYNTHESIS-E012 — Design a complete failure certificate

Give one sequence where almost everywhere convergence holds but \\(L^1\\) convergence fails through concentration, and another where the failure is spatial escape. State exactly which condition in the global repair fails for each.

**Hint 1.** Use nested unit-mass spikes and translated unit indicators.

**Hint 2.** Compute high-value tails separately from spatial tails.

**Solution.** On the line, \\(f_n=n1_{(0,1/n)}\\) tends almost everywhere to zero and has norm one. It has tight spatial support, but for any fixed height large indices retain high-value integral one, so uniform integrability fails. For \\(g_n=1_{[n,n+1]}\\), almost everywhere convergence and norm one also hold. High-value tails vanish above height one, but for any fixed spatial radius some supports lie wholly outside it and carry mass one, so spatial tightness fails. The two sequences defeat different hypotheses despite sharing the same failed norm conclusion.

## Summary

Concentration, escape, cancellation, singular change and representative ambiguity are distinct failure mechanisms. Height and support formulas separate convergence modes; high-value and spatial tails separate concentration from lost mass at infinity. Countable consistency and sigma-finite localization govern extension and density representation, while absolute integrability governs signed interchange. Differentiation sees the density part of variation and misses singular change unless absolute continuity excludes it. Every repair must identify the space, measure, function class, convergence mode and exact hypothesis that acts in its proof.
`;export{e as default};