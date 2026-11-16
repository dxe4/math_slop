var e=`---
id: course-data-learning-specialist
title: "Learning Guarantees and Sparse Inference: Identification Before Certification"
level: graduate
status: beta
estimated_minutes: null
license: CC BY-SA 4.0
---

# Learning Guarantees and Sparse Inference: Identification Before Certification

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](/courses/atlas-data-learning-specialist/) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Auditable Learning: Optimization, Generalization, and Identification](/courses/atlas-data-learning-advanced/) · [Statistics II: statistical inference](/courses/course-statistical-inference/).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A predictor can fit every printed row while its population guarantee fails. A sparse coefficient can be uniquely identified while a particular penalty fails to recover it. A noise bound can certify prediction error without certifying the selected support. This course develops the proofs needed to keep those statements separate, and then makes them meet in one cumulative investigation.

The selected specialist programme covers mathematical ML, high-dimensional inference and learning theory: finite-class risk, dependence and adaptive assessment; VC and Rademacher capacity; algorithmic stability and online regret; sparse identification, nullspace geometry and noisy Lasso guarantees. The new high-dimensional material is proved here, including failure cases and a fixed n=7,p=8 noisy study. Results are stated for general n,p where proved; the small examples expose the same structural issues without pretending that a four-coordinate enumeration is a theorem about every high-dimensional model. Neural-network generalization, optimal minimax rates, unknown-noise tuning and general dependent-process theory need further study.

Use [Auditable Learning](#/item/course-data-learning-advanced) as the advanced predecessor. Its optimization, structured conditioning and causal-design work retains its own task identities; this course does not repeat its trainer as specialist work. The [learning-theory book](#/item/book-statistical-learning-generalization) remains a working edition. Study time depends on the selected reading, attempts and corrections. The required bounded JavaScript certificate below needs Node.js and elementary array/function/JSON skills, in addition to the mathematical preparation. It runs locally, has no dependencies, and produces a receipt for public teaching inputs. Its execution is required work, alongside the proofs. Public models, optional source audits and a study mark do not provide unseen assessment, qualified marking or human validation.

## Readiness and exact repairs

Bring finite probability, expectation, independent samples, conditional arguments, proof by contradiction, shaped matrix multiplication, kernel/rank reasoning, Cauchy–Schwarz, convexity and elementary differentiation. Measure theory is not an entry requirement for the finite-probability lane. Continuous extensions require the measurability/integrability assumptions stated at their point of use. The local proofs below define the new sparsity and subgradient concepts.

Attempt the six questions before opening their key.

1. If Y is Bernoulli(1/2), compare the variance of the mean of four independent copies with the mean of four repetitions of the same Y.
2. Find the kernel of B=[[1,0,1],[0,1,1]]. Can Bβ determine every three-coordinate β?
3. Prove |a+b|≥|a|−|b|. Which q satisfy |t|≥qt for every real t?
4. A centered variable has MGF at most exp(u²/32) for every real u. Give a two-sided tail bound at t=1/2 by optimizing exponential Markov.
5. Twenty final predictors were redesigned after seeing assessment outcomes. Does a fixed-class bound with M=20 follow merely from that count?
6. What must a program check before using an n×p array X and a length-p vector β? Is a finite dictionary search a proof over all real coefficients?

**Complete diagnostic key.** (1) Independent mean variance is (1/4)/4=1/16; repeated mean is Y itself, variance 1/4. Independence enters the covariance terms. (2) Solving v1+v3=v2+v3=0 gives v=t(−1,−1,1). Thus β and β+v have the same observation; full identification fails. (3) Triangle inequality gives |a|≤|a+b|+|b|. The second assertion holds exactly for q∈[−1,1]: inspect positive and negative t. These are the subgradients of absolute value at zero. (4) The proxy is v=1/16 since exp(vu²/2)=exp(u²/32). Exponential Markov gives exp(−ut+vu²/2), minimized at u=t/v=8. A union of upper/lower tails gives 2exp(−t²/(2v))=2exp(−2), capped at 1 when necessary. (5) No. Cover the entire prespecified class, prove a valid adaptive theorem, or use independent assessment conditional on the constructed predictor. (6) Require finite real entries, exactly n equally long rows, length p, valid bounds and intended units. A finite search concerns only its specified dictionary; a separate kernel/convexity proof is needed for real coefficients.

**Repair sequence.** For 1, read [Exponential Moments and Concentration](#/item/book-probability-models-proofs?chapter=exponential-concentration), §10 and §12 Exercise16 with its **Solution**, then reproduce the two variances above. For 4, read its §§1–3, do §12 Exercises1–4 and compare every adjacent solution; for 5, do its Exercises17,19,20 and compare their complete solutions. The exact primary clinic in §13 follows those repairs. For 2, carry out the displayed two-equation elimination, then verify Bv=0 and (β+v)−β=v; the identification proof below expands this into the sparse criterion. For 3, work the inequality and the three cases t>0,t<0,t=0 above, then derive the one-coordinate threshold rule below. For 6, read the reference's validation and rejection paths before running it; reconstruct a two-row matrix product by hand. Repeat the failed question with Y Bernoulli(1/4), B's last column changed to (2,2), q=−1/2, or proxy1/8 as appropriate. The changed answers are repeated variance3/16 versus independent3/64; kernel t(−2,−2,1); q valid; two-sided bound2exp(−1), respectively.

## Ordered native work and complete feedback

Do these selections in order. Keep the exact source address and question number in your worksheet. Every assigned question below has its full solution in the named native chapter; a short answer or the topic map is not the feedback assignment.

| Order and ID | Exact source task | Complete key and required comparison |
| --- | --- | --- |
| DL-S1 | [Exponential Moments and Concentration](#/item/book-probability-models-proofs?chapter=exponential-concentration), §12 Exercises1–4,16,17,19,20 | Each adjacent **Solution**: exponential Markov, optimized sub-Gaussian tails, the exercise's MGF calculations; repeated-variable sum, overlapping union, conditional MGF iteration and adaptive-list boundary. Compare the exponent, inequality direction and independence step, not only a decimal. |
| DL-S2 | Same chapter, **§13 Investigation: uniform generalization over a finite model library**, all four numbered tasks | Its **Complete worked solution** supplies the uniform event, ERM excess bound, sufficient sample formula and n=2120. Reconstruct this actual completed clinic as the first component of P. |
| DL-S3 | [Uniform Convergence for a Finite Class](#/item/book-statistical-learning-generalization?chapter=uniform-convergence-finite-class), **Practice exercises1–3** | Adjacent **Solution** paragraphs: n=415; simultaneous assessment for the prespecified50; ratio sqrt(log(4/δ)/log(2/δ)). Keep deviation versus excess-risk targets separate. |
| DL-S4 | [VC Dimension](#/item/book-statistical-learning-generalization?chapter=vc-dimension), **Practice exercises1–3** | Adjacent solutions: rectangle VC dimension4 with diamond witnesses/extreme-point obstruction; sum21700; raw parameter count supplies no such lower bound. Read its fixed-class/IID/binary-loss hypotheses and the explicit imported Sauer–Shelah and VC theorems. |
| DL-S5 | [Rademacher Complexity](#/item/book-statistical-learning-generalization?chapter=rademacher-complexity), **Practice exercises1–3** | Adjacent solutions: Cauchy–Schwarz and aligned vector (include v=0); exact2/3 on (−1,0,1), versus looser2/√3; empirical zero does not remove sampling or concentration obligations. |
| DL-S6 | [Stability](#/item/book-statistical-learning-generalization?chapter=stability), **Practice exercises1–3** | Adjacent solutions: certified bound0.125; RKHS convex/Lipschitz/strong-convexity conditions; constant-zero algorithm with β=0 although its surrounding class has infinite VC dimension. Use the chapter's replacement-one convention. |
| DL-S7 | [Online Learning](#/item/book-statistical-learning-generalization?chapter=online-learning), **Practice exercises1–3** | Adjacent solutions: comparator loss can remain1; a one-sided bound gives limsup average regret≤0, not convergence; an online-to-batch argument needs additional assumptions. Keep those distinctions when reconstructing Hedge below. |

The existing mathematical-ML course's ML-PS and finite ridge projects remain prior preparation. None of their hand-chosen rows becomes an IID population sample through reuse here. The selected source results that are imported, rather than proved here, are Hoeffding's lemma/inequality, Sauer–Shelah and the stated general VC/concentration results. The finite proofs and additional sparse theorems below have their own complete arguments.

## Finite-class primary and changed sampling laws

**Reuse the completed primary, DL-S2.** H has m fixed rules, n IID observations and losses in [0,1]. For each h, Hoeffding gives P(|Rhat(h)−R(h)|>ε)≤2exp(−2nε²). Union over the entire fixed H gives failure at most2m exp(−2nε²). On the complementary simultaneous event, an exact empirical minimizer satisfies

$$R(\\widehat h)\\le\\widehat R(\\widehat h)+\\varepsilon\\le\\widehat R(h_\\star)+\\varepsilon\\le R(h_\\star)+2\\varepsilon.$$

Thus excess at most η with confidence1−δ follows from n≥2log(2m/δ)/η², rounded up. For the actual source inputs m=1000,δ=0.05,η=0.10, the sufficient value is **2120**, not212 samples and not a necessary lower bound. Approximate empirical optimization with additive gap a adds a to the excess bound. This is a reconstruction of the existing four-task clinic, not a newly discovered theorem.

**Changed design: replicated blocks.** Let g IID blocks U1,…,Ug each supply r identical observations; total rows n=gr. Every loss average over rows is exactly the average over the g blocks. Apply the finite-class theorem to the g independent block losses, giving deviation sqrt(log(2m/δ)/(2g)). Substituting gr in the denominator would count repetitions as information. For equal replication this is an exact algebraic reduction. Unequal weights need a different weighted calculation; arbitrary time dependence is not covered.

For the printed loss law H={constant0,constant1}, Y Bernoulli(1/2), 0–1 loss, both risks are1/2. With four independent labels, the event sup|Rhat−R|≥1/2 occurs only at0000 or1111, probability2/16=1/8. With two independent labels each repeated twice, the distinct samples are0000,0011,1100,1111, each probability1/4. The same event has probability1/2. For the source's strict event >1/2 it is zero in both experiments. State the event inequality when comparing a tail bound with enumeration.

**Adaptive return: a memorizer.** X is uniform on {0,1,2,3}, Y=0 deterministically, and two training inputs are drawn independently with replacement. After seeing them define hS(x)=0 at an observed input and1 elsewhere. Training loss is0. If k distinct inputs occurred, population risk is (4−k)/4. Four of16 ordered training samples have k=1 and risk3/4; twelve have k=2 and risk1/2. Expected population risk is9/16. Calling the final list “one fixed predictor” and applying a fixed-one bound on its training sample is invalid. The full class of16 binary functions was fixed in advance and can be covered with M=16, though its small-sample bound may be vacuous. Alternatively, freeze hS and obtain a new independent IID assessment sample. Conditional on S, its assessment loss has the named Bernoulli risk and the fixed-one Hoeffding calculation is legitimate. With ε=1/4,δ=1/8, that deviation planning rule needs ceil(8log16)=23 independent assessment rows; covering the full16 on a common IID assessment sample needs ceil(8log256)=45. These are sufficient sample sizes for deviation, not guarantees of low actual risk.

## Capacity and algorithm-dependent guarantees

A literal class count is only one route. This section supplies the additional proof obligations used in our portfolios; it does not replace a general learning-theory text.

**Finite symmetrization, fully reconstructed.** Let F be a finite class of functions into [0,1], fixed independently of IID S=(Z1,…,Zn), and S′ an independent copy. For fixed S, Jensen's inequality for the maximum gives

$$\\sup_f(Pf-P_nf)\\le\\mathbb E_{S'}\\sup_f(P'_nf-P_nf).$$

Take expectations. Independent pairs (Zi,Zi′) have the same joint law after any coordinatewise exchange. Averaging over independent signs σi therefore leaves this expectation unchanged:

$$\\mathbb E\\sup_f\\frac1n\\sum_i(f(Z'_i)-f(Z_i))=\\mathbb E\\sup_f\\frac1n\\sum_i\\sigma_i(f(Z'_i)-f(Z_i)).$$

For each realization, sup(Af+Bf)≤sup Af+sup Bf. Splitting the primed and unprimed sums and using symmetry of −σ gives

$$\\mathbb E\\sup_f(Pf-P_nf)\\le2\\mathfrak R_n(F),\\quad\\mathfrak R_n(F)=\\mathbb E_{S,\\sigma}\\sup_f n^{-1}\\sum_i\\sigma_if(Z_i).$$

Finiteness removes supremum measurability and interchange difficulties; boundedness makes these expectations finite. This is an expected one-sided result. A high-probability two-sided loss statement needs its own concentration/version and cannot be assembled from unrelated constants. The native linear-score proof uses the Euclidean dual norm and cancellation of independent sign cross-terms; changing from score class to 0–1 loss needs additional justification.

For F={x↦ax:|a|≤2}, fixed S=(−1,0,1), the empirical complexity is (2/3)E|σ3−σ1|=2/3. There are eight sign triples: four have σ1=σ3 and value0; four have unequal endpoints and value4/3 after the supremum/division. Their mean is2/3. This finite calculation is about a real-valued score class. It is not a classification error guarantee.

**Replacement stability and the expected gap.** Let S^(i) replace row i by an independent Zi′. Assume |ℓ(A(S),z)−ℓ(A(S^(i)),z)|≤β for all neighboring samples and all z, and integrability. Swapping Zi and Zi′ gives Eℓ(A(S^(i)),Zi′)=Eℓ(A(S),Zi). Hence the expected population-minus-empirical gap is

$$\\frac1n\\sum_i\\mathbb E[\\ell(A(S),Z'_i)-\\ell(A(S^{(i)}),Z'_i)]\\le\\beta.$$

This averaged identity needs no symmetry of A; each coordinate is accounted for. It is an expectation bound, not a high-probability certificate and not a bound on absolute prediction loss. A constant-zero algorithm is β=0 even in the class of all binary functions: low sensitivity and low best-achievable risk are different questions. The native strongly-convex regularization proof additionally uses convex/Lipschitz losses, existence and the exact penalty normalization.

**Hedge with a complete potential argument.** Fix M≥2 experts, η>0, losses ℓti∈[0,1], initial weights1, pt normalized before round t, and update w(t+1)i=wti exp(−ηℓti). Full information reveals all expert losses after prediction. Put Lt=Σi ptiℓti and Wt=Σi wti. Hoeffding's lemma applied to a draw from pt gives log(W(t+1)/Wt)≤−ηLt+η²/8. This holds for every realized bounded loss vector, including one chosen from past history. Summing and comparing W(T+1) with any one expert's weight gives

$$-\\eta\\sum_t\\ell_{ti}-\\log M\\le\\log\\frac{W_{T+1}}{W_1}\\le-\\eta\\sum_tL_t+T\\eta^2/8,$$

so regret≤log(M)/η+Tη/8. This sharper constant and the native looser η²/2 version are both valid with their own stated choices. Our finite replay uses η=log2, so a unit loss halves a weight. In four rounds with expert losses (0,1),(1,0),(0,1),(1,0), the pre-round probabilities for expert1 are1/2,2/3,1/2,2/3; learner losses are1/2,2/3,1/2,2/3. Total7/3, best fixed loss2, regret1/3. This is mixed expected loss per round; an actually sampled expert would add sampling randomness. Neither this regret nor the stability identity is a substitute for the sparse inference theorem below.

## High-dimensional identification and exact sparse recovery

Let X be a fixed n×p real matrix, y=Xβ and support(β)={j:βj≠0}. A vector is s-sparse if its support has at most s coordinates. When p>n the full kernel is nontrivial, so unrestricted coefficients are not identified by exact noiseless measurements.

**Sparse identification theorem.** Every s-sparse coefficient is uniquely identified among s-sparse vectors if and only if ker X contains no nonzero vector supported on at most2s coordinates. Forward: the difference of two observationally identical s-sparse vectors is a 2s-sparse kernel vector. Reverse necessity: split any such nonzero vector v into two disjoint pieces vA,vB, each with at most s coordinates; set β=vA,β′=−vB. Then β−β′=v, so Xβ=Xβ′ although β≠β′. This proves both directions. It does not assert that an efficient algorithm recovers the identified coefficient.

**The strict nullspace property (NSP).** Basis pursuit minimizes ||b||1 subject to Xb=y. It recovers every coefficient with support at most s uniquely if and only if, for every nonzero v∈ker X and every S of size≤s,

$$\\|v_S\\|_1<\\|v_{S^c}\\|_1.$$

Sufficiency: if β is supported on S, then ||β+v||1≥||β||1−||vS||1+||vSc||1>||β||1 for every other feasible point. Necessity: if the inequality fails, choose β=−vS. The alternative β+v=vSc has norm no larger, so β is not the unique minimum. A weak ≤ condition allows ties. This proof concerns all real coefficients, unlike a finite dictionary search.

Our printed P matrix A=[I3|−1] has kernel t(1,1,1,1). No nonzero kernel vector has support≤2, and each singleton has |t|<3|t|: every1-sparse coefficient is identified and uniquely recovered by basis pursuit. For y=(1,0,0), every feasible coefficient is (1+t,t,t,t). Its norm |1+t|+3|t| has its unique minimum1 at t=0. For2-sparse work the conclusions change. β=(1,1,0,0) and β′=(0,0,−1,−1) have the same y=(1,1,0). The full feasible line has minimum norm2 throughout −1≤t≤0 in (1+t,1+t,t,t). Identification and unique basis-pursuit recovery both fail at this larger sparsity.

The changed matrix B=[I3|e1] has kernel t(−1,0,0,1). The two1-sparse vectors e1 and e4 produce the same observation. Their distance is√2. For any estimate b from that same y, triangle inequality implies max(||b−e1||2,||b−e4||2)≥√2/2. Under any common additive-noise law the complete observation distributions also agree for these two states. No estimator using that observation can distinguish them; a penalty selecting one is an added convention, not recovered information. Basis pursuit has the full continuum (1−t,0,0,t),0≤t≤1, of norm1 minima.

The return matrix C=[I3|−(1/4)1] has kernel t(1,1,1,4). Every two columns remain independent, so1-sparse identification survives. But for S={4},4>3 violates NSP. For true β=e4 and y=(−1/4,−1/4,−1/4), unweighted basis pursuit chooses (−1/4,−1/4,−1/4,0), norm3/4 rather than the true norm1. To prove uniqueness, parametrize all feasible points as (u/4,u/4,u/4,1+u). The objective3|u|/4+|1+u| decreases to u=−1 and increases afterwards. An invariant penalty ||b1:3||1+|b4|/4 restores the original coordinate geometry: write θ4=b4/4, so Cb=Aθ. Its weighted nullspace magnitudes are equal and strict singleton NSP returns. The unique weighted solution is e4, weighted norm1/4. A coordinate change without its matching penalty changes the estimator.

One more distinction matters: A's singleton strict NSP does **not** establish the Lasso cone-3 condition below. Its kernel vector has off-support l1 exactly3 times on-support l1. It lies on the cone boundary, so the corresponding restricted eigenvalue is zero. Exact noiseless recovery and that particular noisy guarantee have different hypotheses.

## Noisy sparse inference and a proved guarantee

Take a fixed real X, y=Xβ*+ε, support S of size s≥1, λ>0, and any minimizer

$$\\widehat\\beta\\in\\arg\\min_b\\left\\{\\frac{\\|y-Xb\\|_2^2}{2n}+\\lambda\\|b\\|_1\\right\\}.$$

A minimizer exists: the continuous objective tends to infinity with ||b||1 because λ>0. Let Δ=βhat−β*, Q=||XΔ||2²/n. Assume the actual score event ||Xᵀε/n||∞≤λ/2 and a support-specific restricted eigenvalue bound

$$\\frac{\\|Xv\\|_2}{\\sqrt n}\\ge\\kappa\\|v_S\\|_2\\quad\\text{whenever }\\|v_{S^c}\\|_1\\le3\\|v_S\\|_1,\\qquad\\kappa>0.$$

**Complete deterministic proof.** Comparing the objective at βhat and β*, expanding the square and canceling ||ε||2²/(2n) yields

$$\\frac Q2\\le\\frac{\\varepsilon^TX\\Delta}{n}+\\lambda(\\|\\beta^*\\|_1-\\|\\beta^*+\\Delta\\|_1)\\le\\frac\\lambda2\\|\\Delta\\|_1+\\lambda(\\|\\Delta_S\\|_1-\\|\\Delta_{S^c}\\|_1).$$

Multiply by2 and rearrange:

$$Q+\\lambda\\|\\Delta_{S^c}\\|_1\\le3\\lambda\\|\\Delta_S\\|_1\\le3\\lambda\\sqrt{s}\\|\\Delta_S\\|_2.$$

Since Q≥0, Δ is in the cone. If ΔS=0 this already gives Δ=0. Otherwise combine Q≥κ²||ΔS||2² with the last display and divide, obtaining

$$\\|\\Delta_S\\|_2\\le\\frac{3\\lambda\\sqrt s}{\\kappa^2},\\qquad Q\\le\\frac{9\\lambda^2s}{\\kappa^2},\\qquad\\|\\Delta\\|_1\\le\\frac{12\\lambda s}{\\kappa^2}.$$

The last step uses ||Δ||1≤4||ΔS||1≤4√s||ΔS||2. These bounds hold for every minimizer on the stated event. They bound prediction on this fixed design and coefficient l1 error. They do not prove exact support recovery, a new-design risk bound, unbiasedness, a confidence interval, or a full coefficient l2 rate from this support-only RE assumption.

**Where probability enters.** Suppose εi are independent centered sub-Gaussian variables with common proxy σ²>0, and maxj||Xj||2²/n≤1. Independence gives each score coordinate proxy at mostσ²/n. Exponential Markov followed by a union over both tails and p coordinates gives

$$P\\{\\|X^T\\varepsilon/n\\|_\\infty>\\lambda/2\\}\\le2p\\exp\\{-n\\lambda^2/(8\\sigma^2)\\}.$$

Choosing λ=2σsqrt(2log(2p/δ)/n),0<δ<1, gives failure at mostδ. Independence is across noise rows; score coordinates may be dependent. A fixed design or conditioning on an independent design is essential to this calculation. Correlated errors, design selected from these errors, larger column norms or unknown σ need a new argument. The p-dependence is logarithmic in the score threshold, while sparse geometry is carried by κ and s. If s log(p/δ)/n is small but κ collapses, the printed rate still does not become small.

**A positive-RE high-dimensional case.** X=[I7|−1] is7×8; S={8}. On its cone Σj≤7|vj|≤3|v8|, so |Σi(Xv)i|≥7|v8|−Σj≤7|vj|≥4|v8|. Cauchy–Schwarz gives ||Xv||2/√7≥(4/7)|v8|. Thus κ=4/7 is a certified lower bound for this named support and cone. It is not an optimal global RE constant or a certificate for larger supports. All column norms divided by√7 are at most1.

The printed β*=2e8, ε=(1/8,−1/8,0,0,0,0,0), λ=1/4 give score norm1/56≤λ/2=1/8. The candidate βhat=(7/4)e8 has residual **prediction minus observation** r=(1/8,3/8,1/4,1/4,1/4,1/4,1/4). The smooth gradient Xᵀr/7 has first seven coordinates r/7 and last−1/4. For b8>0 the l1 subgradient is+1; for the zero coordinates any value in[−1,1] is allowed. Thus gradient+λq=0 with q8=1 and qj=−rj/(7λ), proving global optimality by convexity. The inactive inequalities are strict. If another minimum existed, strict convexity in Xb forces the same fitted vector; a supporting-subgradient equality at an inactive coordinate with |qj|<1 forces that coordinate zero. The remaining coordinate is then fixed. Hence this candidate is the unique minimizer.

Here Δ=−e8/4, Q=1/16 and ||Δ||1=1/4. The proved upper bounds are9λ²/κ²=441/256 and12λ/κ²=147/16. Their looseness is visible and acceptable; no numerical claim of optimal constants is made. This noise vector is a stipulated teaching input, not an observed random sample. The deterministic event is checked exactly. The separate sub-Gaussian planning formula requires its own named noise law before a confidence statement can be made.

**Support needs more information.** In the sequence model z=θ*+e, minimize (1/2)||z−b||2²+λ||b||1. Coordinatewise subgradient conditions give b_j=sign(zj)max(|zj|−λ,0), taking sign(0)=0. This is a separate orthogonal model with this normalization, not the7×8 design above. If ||e||∞≤t, λ≥t, and every nonzero |θ*j|>λ+t, zero coordinates remain zero and every active coordinate retains its sign. Proof: an inactive |zj|≤t≤λ is thresholded to zero; an active coordinate has |zj|≥|θ*j|−t>λ and cannot cross zero. Prediction-error bounds alone do not give that beta-min condition. In C's printed sequence, a noise coordinate−3/8 exceeds λ=1/4 and becomes a false positive−1/8. In R a true signal1/8 belowλ disappears even with zero noise. No theorem here declares variable selection valid from a small training error.

## Fixed inputs and complete comparison ledgers

All quantities below are dimensionless, synthetic teaching specifications. No sampling law is inferred from a printed row. The two label experiments and adaptive experiment have their explicit laws above. Matrix/sequence cards are deterministic. Each P,C,R is a separate task, and its rows do not enlarge another task's sample.

For recovery use the finite comparison alphabet G={−1,−1/2,−1/4,0,1/4,1/2,1}. The program searches G⁴ only. The all-real proofs above are required independently. w4 is the fourth-coordinate weight in the comparison weighted l1 penalty; the first three weights are1.

| Case | Row | x1 | x2 | x3 | x4 | y | w4 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| P | 1 | 1 | 0 | 0 | -1 | 1 | 1 |
| P | 2 | 0 | 1 | 0 | -1 | 0 | 1 |
| P | 3 | 0 | 0 | 1 | -1 | 0 | 1 |
| C | 1 | 1 | 0 | 0 | 1 | 1 | 1 |
| C | 2 | 0 | 1 | 0 | 0 | 0 | 1 |
| C | 3 | 0 | 0 | 1 | 0 | 0 | 1 |
| R | 1 | 1 | 0 | 0 | -1/4 | -1/4 | 1/4 |
| R | 2 | 0 | 1 | 0 | -1/4 | -1/4 | 1/4 |
| R | 3 | 0 | 0 | 1 | -1/4 | -1/4 | 1/4 |

| Case | Dictionary fiber count | Minimum l1 | All dictionary l1 minimizers | Minimum weighted l1 | All dictionary weighted minimizers |
| --- | --- | --- | --- | --- | --- |
| P | 3 | 1 | (1,0,0,0) | 1 | (1,0,0,0) |
| C | 3 | 1 | (0,0,0,1);(1/2,0,0,1/2);(1,0,0,0) | 1 | (0,0,0,1);(1/2,0,0,1/2);(1,0,0,0) |
| R | 3 | 3/4 | (-1/4,-1/4,-1/4,0) | 1/4 | (0,0,0,1) |

For the noisy design, Xij=1 if j=i≤7, X_i8=−1, and all other entries0. β*=2e8, λ=1/4. The y and noise columns determine the model, and residual always means Xβhat−y.

| i | y | epsilon | Residual at 7e8/4 |
| --- | --- | --- | --- |
| 1 | -15/8 | 1/8 | 1/8 |
| 2 | -17/8 | -1/8 | 3/8 |
| 3 | -2 | 0 | 1/4 |
| 4 | -2 | 0 | 1/4 |
| 5 | -2 | 0 | 1/4 |
| 6 | -2 | 0 | 1/4 |
| 7 | -2 | 0 | 1/4 |

The sequence cards use λ=1/4 and squared coefficient error Σj(bj−θ*j)². They are not additional samples from the7×8 study.

| Case | theta | noise | z | Threshold estimate | Squared error | False positive coordinates | False negative coordinates |
| --- | --- | --- | --- | --- | --- | --- | --- |
| P | 2,0,0,0 | 1/8,1/8,0,0 | 17/8,1/8,0,0 | 15/8,0,0,0 | 1/64 | none | none |
| C | 2,0,0,0 | 0,1/8,-3/8,0 | 2,1/8,-3/8,0 | 7/4,0,-1/8,0 | 5/64 | 3 | none |
| R | 1/8,0,0,0 | 0,0,0,0 | 1/8,0,0,0 | 0,0,0,0 | 1/64 | none | 1 |

The full-information Hedge replay uses η=log2 and weights initially(1,1).

| Round | Expert1 loss | Expert2 loss | Pre-round p1 | Mixed loss |
| --- | --- | --- | --- | --- |
| 1 | 0 | 1 | 1/2 | 1/2 |
| 2 | 1 | 0 | 2/3 | 2/3 |
| 3 | 0 | 1 | 1/2 | 1/2 |
| 4 | 1 | 0 | 2/3 | 2/3 |

## DATA-SPEC-P — Primary investigation

Complete DL-S1–7 and keep their first answers, comparison with source solutions and revisions. P is a sustained proof/certificate investigation, not a multiple-choice check.

1. Reconstruct all four parts of the actual §13 finite-model-library clinic, including the event, ERM step, excess target and n=2120. Explain why ML's earlier unbounded squared loss does not automatically meet this theorem. Enumerate the four-label IID event with its exact ≥ convention.
2. Reconstruct finite symmetrization, the exact eight-sign Rademacher calculation, replacement expected-gap proof and Hedge potential proof. Give the correct source-work comparisons for VC rectangle shattering and the returned constant-zero algorithm. Reproduce all four Hedge rows and its regret.
3. For P's recovery matrix, derive its entire real kernel, prove1-sparse identification and strict NSP, solve the real y=(1,0,0) problem, and exhibit the2-sparse failure at y=(1,1,0). Explain why this matrix supplies no positive singleton cone-3 constant.
4. Prove the local deterministic Lasso theorem, including the cone and every constant. For the7×8 card, prove κ≥4/7 on the named support, check y=Xβ*+ε, score event, all eight KKT coordinates, uniqueness, Q and l1 error and their bounds. Separate the deterministic certificate from the hypothetical sub-Gaussian probability statement.
5. Prove the threshold/support proposition and reproduce sequence P. Then run the complete reference below. Save the program, its original input and its stdout; compare every computed branch with the printed tables and the mathematical proofs. Run the negative-λ and malformed-row checks described below and retain the thrown-error text. Supply a claim ledger with columns **claim; target; law/design; assumptions; proved/imported/computed; support used; limitation**. It must include the finite-class theorem, the matrix identification result, Lasso bound and a rejected support/causal/deployment claim.

## DATA-SPEC-P — Complete model

The clinic yields simultaneous deviation εn=sqrt(log(2m/δ)/(2n)), exact-ERM excess≤2εn, and sufficient n≥2log(2m/δ)/η². At the source values 2m/δ=40000 and the rounded sufficient count is2120. These are [0,1]-loss IID statements; an unclipped squared-loss objective lacks that range without extra information. Among the sixteen four-label IID strings, exactly0000 and1111 have all labels equal; two of16 give the ≥1/2 event, while the strict > event is empty.

The symmetrization proof needs the independent ghost sample and pair exchanges before splitting the supremum; final-class counting cannot replace either step. Its one-sided expectation result is at most2Rn. Rademacher endpoints agree for four sign triples (value0) and disagree for four(value4/3), mean2/3. The rectangle VC proof uses the four diamond vertices for the lower bound and at most four extreme-point witnesses among any five for the upper bound. The constant-zero algorithm has replacement stability0 even though its surrounding full class shatters every finite set. Its expected gap is0 under an IID law; its actual risk need not be0. Hedge's pre-round weights are(1,1),(1,1/2),(1/2,1/2),(1/2,1/4). The printed probabilities and mixed losses follow; final weights(1/4,1/4), expert totals(2,2), learner total7/3 and regret1/3. The potential proof bounds mixed loss, with separate assumptions needed for sampled-expert deviations or online-to-batch conversion.

For A, solving Xv=0 forces v1=v2=v3=v4. Nonzero kernel support is4, excluding differences of two1-sparse states. For a singleton, kernel l1 masses are|t| and3|t|; strict NSP proves all-real recovery. On P's y, objective |1+t|+3|t| equals **−1−4t** for t≤−1, **1−2t** on[−1,0], and **1+4t** for t≥0. These agree at endpoints and prove the unique minimum1 at t=0. For y=(1,1,0), the line(1+t,1+t,t,t) has objective2 on[−1,0]; its two endpoints are the displayed2-sparse states. A's null vector also satisfies the cone3 equality off=3on, making any positive cone-3 RE claim false.

For the separate7×8 study the summed-coordinate proof gives κ≥4/7. The score has first seven εi/7 and last−Σεi/7=0; max1/56. At βhat=7e8/4, the residual table is exact. First-coordinate gradient is1/56, second3/56, other five1/28; each has magnitude<1/4. The eighth is−1/4. Set q1=−1/14,q2=−3/14,q3:7=−1/7,q8=1. Gradient+λq=0, so convex subgradient optimality holds. Strict inactive subgradients and strict convexity of squared loss in the fitted vector give uniqueness as explained above. Δ8=−1/4, Q=1/16, l1=1/4. Substituting s=1,λ=1/4,κ²=16/49 gives bounds441/256 and147/16. The actual errors meet these loose bounds. The noise is stipulated, so this is a deterministic event check; independence/sub-Gaussian assumptions were not observed. A separate planned law could use the union bound stated in the theorem, with its own σ and λ.

Sequence P has t=1/8,λ=1/4 and active magnitude2>3/8. Thresholding z=(17/8,1/8,0,0) gives(15/8,0,0,0), squared error1/64, and the support/sign proposition applies. It supplies neither a confidence interval for2 nor evidence of an effect.

An adequate ledger describes finite-class excess as a proved consequence of imported Hoeffding under fixed H/IID/bounded loss; sparse identification as a local all-real kernel theorem on a fixed matrix; the Lasso result as a local conditional deterministic theorem with a separately proved noise probability calculation; and the reference output as a computed check of its exact finite input. “Correct support for any small-error Lasso fit” is rejected because beta-min and further selection assumptions are absent. “A causal effect of x” is rejected because none of these matrices defines an intervention or identifies its response. Your actual stdout/error messages are the execution record; the public models here cannot stand in for that record.

## DATA-SPEC-C — Changed dependence and failed identification

After P, close its model while attempting C and declare any support you reopen.

1. Replace the four IID labels by two IID blocks repeated twice. Enumerate every distinct sample with probabilities, recompute the ≥1/2 event and derive the g-block theorem for general equal r. Compare with P without treating n=4 as four independent units. Explain why a union bound itself does not require independent predictors.
2. Replace A by B, with the same P observation y=(1,0,0). Prove that1-sparse identification now fails, derive the entire real l1-minimizing set and the√2/2 worst-state lower bound. Explain why more optimizer iterations or repeated copies of those same rows repair neither fact.
3. Reproduce sequence C, identify the failed hypothesis in the support proposition and give the exact false positive and squared error. Explain why the general cone/RE error theorem would still need its own score/design checks; sequence C is not an instance of the7×8 card.
4. Rerun the actual reference on the original packet and extract its C branches. Change the first recovery row to length3 and demonstrate rejection. Then change the7×8 candidate-generating noise to (2,−2,0,0,0,0,0), update y consistently, and show that the program rejects its proposed single-support candidate when the inactive KKT check fails. Calculate one offending gradient by hand. The rejection is a valid result; do not suppress it or loosen tolerance. Submit a revised claim ledger and a one-page referee-style comparison of which P hypotheses were preserved, replaced or broken. This is your own analysis, not an actual referee report or review decision.

## DATA-SPEC-C — Complete model

The block strings0000,0011,1100,1111 each have probability1/4. Only the first/last have empirical mean0 or1, giving probability1/2 rather than1/8. Every row mean equals (ℓ(U1)+ℓ(U2))/2, so g=2 controls the concentration exponent. More generally equal replication cancels from numerator/denominator: empirical risk=(1/g)Σbℓ(h,Ub). Apply Hoeffding to g independent bounded block losses and union over the fixed class. Candidate loss events can overlap arbitrarily; the union inequality P(∪Ah)≤ΣP(Ah) never uses independence among h. Dependence across sampled rows is the broken factorization.

Bv=0 forces v2=v3=0,v1=−v4. For y=e1 the entire feasible set is(1−t,0,0,t). Its norm is|1−t|+|t|:1 on[0,1], greater outside. In particular e1,e4 are distinct1-sparse states with identical observations, and any common additive-noise law preserves that distributional equality. Their separation√2 and triangle inequality imply at least one error≥√2/2. Repeating the same linear equations adds no rank or distinguishing information. A deterministic rule choosing e1 has simply chosen one of two indistinguishable possibilities.

Sequence C thresholds(2,1/8,−3/8,0) to(7/4,0,−1/8,0). Squared coefficient error is(−1/4)²+(−1/8)²=5/64. Coordinate3 is a false positive because its true value0 receives noise−3/8, exceedingλ=1/4; the assumption λ≥||e||∞ fails. Its small numerical error does not establish correct support. The old7×8 RE proof has not been refuted: a different model and a missing hypothesis are being tested.

The malformed recovery row violates the3×4 shape contract and must throw. With changed7×8 noise(2,−2,0,0,0,0,0), y becomes(0,−4,−2,−2,−2,−2,−2); its mean stays−2. The proposed7e8/4 candidate has residual(−7/4,9/4,1/4,1/4,1/4,1/4,1/4). The second inactive gradient is(9/4)/7=9/28>λ=1/4. No subgradient in[−1,1] cancels it, so the candidate certificate must reject. Its score norm is2/7>λ/2 as well. This does not prove the objective lacks a minimizer; it proves the program's stated single-support candidate is not certified. Solving general Lasso is outside this bounded reference.

The comparison should preserve bounded losses/fixed two rules and matrix arithmetic, replace independent rows by independent blocks, and break both B's sparse identification and sequence C's noise-threshold condition. It must not treat the failed KKT candidate as an executed optimizer result. A complete corrected ledger records the actual thrown errors and retains P's earlier version.

## DATA-SPEC-R — Public return, adaptivity and changed geometry

After an intervening piece of mathematical work, record its actual date and identity, then attempt R. A self-reported return date is not a verified delay. Public models remain available and all prior exposure must be declared.

1. For the memorizer law, enumerate all16 ordered training samples; give the multiplicities for one/two distinct inputs, empirical/population risks and expected population risk. Identify exactly why “M=1” on training data fails. Give two valid assessment repairs and derive their sufficient23/45-row deviation counts with the stated ε,δ. Explain what neither repair says about low absolute risk.
2. Reconstruct the finite symmetrization and replacement expected-gap proofs from their assumptions. Give an example of an algorithm with stability0 but risk1, and explain why a one-sided regret upper bound cannot force average regret to converge to0. Compare all three target quantities: expected gap, population risk and regret.
3. Use C's return matrix (the card labeled R) with its printed y. Prove1-sparse identification, unweighted basis-pursuit failure/unique solution and the weighted repair. Include the exact coordinate transformation and a proof over all real feasible coefficients. State why finite dictionary output alone is insufficient.
4. Reproduce sequence R and explain the beta-min failure even with noise0. Run the complete reference from a fresh saved copy with the original packet, retain its receipt and separately execute the three rejection checks from P/C. Reconstruct your claim ledger without overwriting earlier first/comparison/revised files. Finish with one answerable next investigation, a preregistered finite test/proof plan and an explicit open boundary; do not label a question open in the literature merely because you have not solved it.

## DATA-SPEC-R — Complete model

Four diagonal ordered input pairs have one distinct input; the other twelve have two. Each row has probability1/16. The complete model is:

| First draw | Second draw | Distinct inputs | Empirical risk | Population risk |
| --- | --- | --- | --- | --- |
| 0 | 0 | 1 | 0 | 3/4 |
| 0 | 1 | 2 | 0 | 1/2 |
| 0 | 2 | 2 | 0 | 1/2 |
| 0 | 3 | 2 | 0 | 1/2 |
| 1 | 0 | 2 | 0 | 1/2 |
| 1 | 1 | 1 | 0 | 3/4 |
| 1 | 2 | 2 | 0 | 1/2 |
| 1 | 3 | 2 | 0 | 1/2 |
| 2 | 0 | 2 | 0 | 1/2 |
| 2 | 1 | 2 | 0 | 1/2 |
| 2 | 2 | 1 | 0 | 3/4 |
| 2 | 3 | 2 | 0 | 1/2 |
| 3 | 0 | 2 | 0 | 1/2 |
| 3 | 1 | 2 | 0 | 1/2 |
| 3 | 2 | 2 | 0 | 1/2 |
| 3 | 3 | 1 | 0 | 3/4 |

Their risks are3/4 and1/2, training risk0 in every case, and the mean population risk is(4·3/4+12·1/2)/16=9/16. The selected function changes with S, so the final singleton is not fixed independently of that training sample. Cover the full16-function class on an applicable IID sample, or freeze the trained function and obtain independent IID assessment. Conditional on training, the latter function is fixed. With deviation1/4,δ=1/8, the sufficient requirements are n≥8log16 and n≥8log256, rounded to23 and45. These estimate the frozen function's risk or simultaneously control a list; they do not make a risk of1/2 into a good predictor.

Symmetrization requires bounded finite fixed F, an independent ghost sample, pair exchange and two suprema; it yields an expected one-sided uniform deviation bound. Replacement stability requires its all-neighbor loss bound and integrability, and averaging the swap identity yields expected gap≤β. If Y=1 deterministically, an algorithm always predicting0 is perfectly stable yet has0–1 population risk1, with empirical risk1 and gap0. Regret compares cumulative loss with the best fixed comparator. An adaptive sequence of actions can outperform every fixed comparator, so a one-sided upper bound only gives limsup≤0 for average regret and cannot supply a matching lower bound. These targets concern different operations and probability structures.

For the R matrix, kernel t(1,1,1,4) has support4, excluding two-coordinate differences, so every1-sparse state is identified within that class. For β=e4 the whole feasible line is(u/4,u/4,u/4,1+u). Unweighted norm is−1−7u/4 for u≤−1,1+u/4 on[−1,0], and1+7u/4 for u≥0. Its unique minimum at u=−1 is3/4, giving(−1/4,−1/4,−1/4,0), a3-sparse alternative. Identification among1-sparse states did not require the l1 optimizer to search only that class. For weighted norm, use θ=(b1,b2,b3,b4/4): R's matrix times b equals Aθ and the weighted objective is||θ||1. A's singleton NSP proves the unique weighted solution b=e4, objective1/4. Directly, the weighted line objective3|u|/4+|1+u|/4 has unique minimum at u=0. The finite G⁴ search displays these solutions but omits most real points; the line proof closes that gap.

Sequence R has true signal1/8,noise0,λ=1/4. Thresholding returns0 and squared error1/64, a false negative at coordinate1. The sufficient beta-min condition would require1/8>1/4, which fails. The programme therefore retains both a positive support proposition and an exact failure outside it.

One bounded next investigation is: for Xd=[Id|−1] and target support{d+1}, which d permit a positive cone-3 constant? Preregister the integer range d=1,…,10, the exact cone inequality and candidate kernel witness. A complete mathematical answer is already derivable: kernel is span(1,…,1); for d≤3 it lies in the cone, so κ=0; for d>3 the summed-coordinate proof gives κ≥(d−3)/d>0. A finite test over vectors would only corroborate examples. A further question about minimax risk for growing dimensions and non-Gaussian dependent noise needs a specified model class, loss and lower-bound method; this course neither resolves it nor asserts it is a new open research problem.

## Complete bounded executable reference

Save the following **entire** block as \`data-specialist-reference.mjs\` and run \`node data-specialist-reference.mjs\` with an installed Node.js20.19 or newer. Save the stdout as a dated text receipt, along with the exact saved code. There is no package installation, randomness, network request or learner-store access. The input packet is a machine-readable copy of the printed cards; compare it with them before execution. The bounds prevent accidentally turning this teaching enumerator into an unrestricted search. Numbers used for exact dictionary equality are dyadic fractions. Floating comparisons in KKT use a declared absolute tolerance1e−12 only; this does not change the mathematical inequalities in the proofs.

The program enumerates label/sign laws, G⁴ fibers, and the fixed Hedge replay. For the7×8 card it constructs a single-support candidate and checks **every** KKT coordinate; it is a certificate for that candidate, not a general Lasso solver. Its rejection on changed noise is an assigned result. The sequence branch solves its separate orthogonal objective by the proved coordinate rule. No source or theorem proof is delegated to software.

\`\`\`javascript
// BEGIN INPUT
const packet = {
  "laws": {"iidRows":4,"blocks":2,"repeats":2,"domain":4,"adaptiveRows":2,"radSample":[-1,0,1],"radB":2},
  "alphabet": [-1,-0.5,-0.25,0,0.25,0.5,1],
  "recovery": [
    {"id":"P","X":[[1,0,0,-1],[0,1,0,-1],[0,0,1,-1]],"y":[1,0,0],"weights":[1,1,1,1]},
    {"id":"C","X":[[1,0,0,1],[0,1,0,0],[0,0,1,0]],"y":[1,0,0],"weights":[1,1,1,1]},
    {"id":"R","X":[[1,0,0,-0.25],[0,1,0,-0.25],[0,0,1,-0.25]],"y":[-0.25,-0.25,-0.25],"weights":[1,1,1,0.25]}
  ],
  "noisy": {
    "X":[[1,0,0,0,0,0,0,-1],[0,1,0,0,0,0,0,-1],[0,0,1,0,0,0,0,-1],[0,0,0,1,0,0,0,-1],[0,0,0,0,1,0,0,-1],[0,0,0,0,0,1,0,-1],[0,0,0,0,0,0,1,-1]],
    "truth":[0,0,0,0,0,0,0,2],"noise":[0.125,-0.125,0,0,0,0,0],"y":[-1.875,-2.125,-2,-2,-2,-2,-2],"lambda":0.25
  },
  "sequences": [
    {"id":"P","truth":[2,0,0,0],"noise":[0.125,0.125,0,0],"lambda":0.25},
    {"id":"C","truth":[2,0,0,0],"noise":[0,0.125,-0.375,0],"lambda":0.25},
    {"id":"R","truth":[0.125,0,0,0],"noise":[0,0,0,0],"lambda":0.25}
  ],
  "expertLosses": [[0,1],[1,0],[0,1],[1,0]]
};
// END INPUT
function audit(input) {
  const check = (condition, message) => { if (!condition) throw new Error('DATA-SPEC: ' + message); };
  const finite = value => typeof value === 'number' && Number.isFinite(value) && Math.abs(value) <= 16;
  const vector = (v, n, name) => check(Array.isArray(v) && v.length === n && v.every(finite), name + ' vector');
  const matrix = (X, n, p, name) => { check(Array.isArray(X) && X.length === n, name + ' rows'); X.forEach(row => vector(row, p, name)); };
  const integer = (v, low, high, name) => check(Number.isInteger(v) && v >= low && v <= high, name + ' bound');
  const positive = (v, name) => check(finite(v) && v > 0, name + ' positive');
  const dot = (a, b) => a.reduce((sum, value, j) => sum + value * b[j], 0);
  const multiply = (X, b) => X.map(row => dot(row, b));
  const norm1 = b => b.reduce((sum, value) => sum + Math.abs(value), 0);
  const squares = b => dot(b, b);
  const words = (alphabet, n) => {
    check(alphabet.length ** n <= 4096, 'enumeration budget');
    let result = [[]];
    for (let i = 0; i < n; i++) result = result.flatMap(prefix => alphabet.map(value => [...prefix, value]));
    return result;
  };
  check(input && typeof input === 'object' && !Array.isArray(input), 'input object');
  const law = input.laws;
  check(law && typeof law === 'object', 'laws object');
  integer(law.iidRows, 1, 8, 'IID rows'); integer(law.blocks, 1, 8, 'blocks'); integer(law.repeats, 1, 8, 'repeats');
  integer(law.domain, 1, 8, 'domain'); integer(law.adaptiveRows, 1, 4, 'adaptive rows');
  check(Array.isArray(law.radSample) && law.radSample.length >= 1 && law.radSample.length <= 8 && law.radSample.every(finite), 'Rademacher sample');
  positive(law.radB, 'Rademacher radius');
  const event = labels => Math.abs(labels.reduce((a,b) => a+b, 0) / labels.length - 0.5) >= 0.5;
  const iid = words([0,1], law.iidRows), blocks = words([0,1], law.blocks);
  const blockRows = blocks.map(labels => labels.flatMap(y => Array(law.repeats).fill(y)));
  const probability = samples => { const extreme = samples.filter(event).length; return {extreme,total:samples.length,probability:extreme/samples.length}; };
  const domain = Array.from({length:law.domain}, (_,j) => j);
  const samples = words(domain, law.adaptiveRows);
  const histogram = new Map(); const adaptiveSamples = []; let riskSum = 0;
  for (const sample of samples) {
    const distinct = new Set(sample).size, risk = 1 - distinct / law.domain;
    riskSum += risk; adaptiveSamples.push({sample,distinct,empiricalRisk:0,risk});
    if (!histogram.has(distinct)) histogram.set(distinct, {distinct,risk,count:0});
    histogram.get(distinct).count++;
  }
  const signs = words([-1,1], law.radSample.length);
  const radTerms = signs.map(sign => law.radB * Math.abs(dot(sign,law.radSample)) / law.radSample.length);
  const laws = {iid:probability(iid),blocks:probability(blockRows),adaptive:{total:samples.length,samples:adaptiveSamples,histogram:[...histogram.values()].sort((a,b)=>a.distinct-b.distinct),expectedRisk:riskSum/samples.length},rademacher:{terms:radTerms,value:radTerms.reduce((a,b)=>a+b,0)/signs.length}};
  check(Array.isArray(input.alphabet) && input.alphabet.length >= 1 && input.alphabet.length <= 7 && input.alphabet.every(finite), 'dictionary alphabet');
  check(new Set(input.alphabet).size === input.alphabet.length, 'unique alphabet');
  check(Array.isArray(input.recovery) && input.recovery.length === 3, 'recovery cards');
  const dictionary = words(input.alphabet, 4);
  const recovery = input.recovery.map((card, index) => {
    check(card && card.id === ['P','C','R'][index], 'recovery identity');
    matrix(card.X,3,4,'recovery'); vector(card.y,3,'recovery target'); vector(card.weights,4,'weights');
    card.weights.forEach(value => positive(value,'weight'));
    const fiber = dictionary.filter(b => multiply(card.X,b).every((value,i) => value === card.y[i]));
    check(fiber.length > 0, 'nonempty dictionary fiber');
    const weighted = b => b.reduce((sum,value,j)=>sum+card.weights[j]*Math.abs(value),0);
    const minimumL1 = Math.min(...fiber.map(norm1)), minimumWeighted = Math.min(...fiber.map(weighted));
    return {id:card.id,fiberCount:fiber.length,minimumL1,unweightedMinimizers:fiber.filter(b=>norm1(b)===minimumL1),minimumWeighted,weightedMinimizers:fiber.filter(b=>weighted(b)===minimumWeighted)};
  });
  const N = input.noisy;
  check(N && typeof N === 'object', 'noisy card');
  matrix(N.X,7,8,'noisy'); vector(N.y,7,'noisy target'); vector(N.noise,7,'noise'); vector(N.truth,8,'truth'); positive(N.lambda,'lambda');
  N.X.forEach((row,i) => row.forEach((value,j) => check(value === (j === 7 ? -1 : +(i===j)), 'fixed noisy design')));
  check(N.truth.slice(0,7).every(value=>value===0), 'named support');
  const trueFit = multiply(N.X,N.truth);
  check(trueFit.every((value,i)=>value+N.noise[i]===N.y[i]), 'noise equation');
  const candidate = Array(8).fill(0);
  candidate[7] = -N.y.reduce((a,b)=>a+b,0)/7-N.lambda;
  check(candidate[7] > 0, 'positive candidate branch');
  const residual = multiply(N.X,candidate).map((value,i)=>value-N.y[i]);
  const gradient = Array.from({length:8},(_,j)=>N.X.reduce((sum,row,i)=>sum+row[j]*residual[i],0)/7);
  const tolerance = 1e-12;
  check(gradient.slice(0,7).every(value=>Math.abs(value)<=N.lambda+tolerance) && Math.abs(gradient[7]+N.lambda)<=tolerance, 'candidate KKT');
  const score = Array.from({length:8},(_,j)=>N.X.reduce((sum,row,i)=>sum+row[j]*N.noise[i],0)/7);
  const error = candidate.map((value,j)=>value-N.truth[j]);
  const kappa = 4/7;
  const noisy = {candidate,residual,gradient,scoreMax:Math.max(...score.map(Math.abs)),scoreEvent:Math.max(...score.map(Math.abs))<=N.lambda/2,predictionError:squares(multiply(N.X,error))/7,l1Error:norm1(error),predictionBound:9*N.lambda*N.lambda/(kappa*kappa),l1Bound:12*N.lambda/(kappa*kappa)};
  check(Array.isArray(input.sequences) && input.sequences.length === 3, 'sequence cards');
  const sequences = input.sequences.map((card,index)=>{
    check(card && card.id === ['P','C','R'][index], 'sequence identity'); vector(card.truth,4,'sequence truth'); vector(card.noise,4,'sequence noise'); positive(card.lambda,'sequence lambda');
    const z = card.truth.map((value,j)=>value+card.noise[j]);
    const estimate = z.map(value=>Math.sign(value)*Math.max(Math.abs(value)-card.lambda,0));
    const falsePositive = [], falseNegative = [];
    estimate.forEach((value,j)=>{if(value!==0 && card.truth[j]===0)falsePositive.push(j+1);if(value===0 && card.truth[j]!==0)falseNegative.push(j+1);});
    return {id:card.id,z,estimate,squaredError:squares(estimate.map((value,j)=>value-card.truth[j])),falsePositive,falseNegative};
  });
  check(Array.isArray(input.expertLosses) && input.expertLosses.length >= 1 && input.expertLosses.length <= 8, 'expert rounds');
  input.expertLosses.forEach(row=>{vector(row,2,'expert losses');check(row.every(value=>value===0 || value===1),'binary expert losses');});
  let weights = [1,1], cumulative = [0,0], learner = 0;
  const rounds = input.expertLosses.map(loss=>{
    const p = weights.map(value=>value/(weights[0]+weights[1])), mixedLoss = dot(p,loss);
    learner += mixedLoss; cumulative = cumulative.map((value,j)=>value+loss[j]);
    weights = weights.map((value,j)=>value*2**(-loss[j]));
    return {p1:p[0],mixedLoss};
  });
  const hedge = {rounds,learner,expertTotals:cumulative,regret:learner-Math.min(...cumulative),weights};
  return {version:1,laws,recovery,noisy,sequences,hedge};
}
console.log(JSON.stringify(audit(packet)));
\`\`\`

The complete expected mathematical output is given by the ledgers and models above: IID probability1/8, block probability1/2, adaptive histogram(4 at3/4,12 at1/2) and mean9/16; Rademacher terms0,4/3,0,4/3,4/3,0,4/3,0 in the program's lexicographic sign order and mean2/3; recovery fiber counts3,3,3 and all minima printed; noisy candidate7e8/4, residual and gradients printed, score1/56, event true, Q=1/16,l1=1/4,bounds441/256 and147/16; all three threshold estimates/error/support rows; Hedge total7/3, expert totals(2,2), regret1/3 and final weights(1/4,1/4). JSON uses decimal numbers, so thirds and sevenths have floating representations. Compare these with tolerance1e−12; retain the exact fractions in the worksheet. This expected ledger is a mathematical model, not a statement that you ran the program.

**Required rejection experiments.** Work on separate saved copies. Set the noisy card's λ to−1/4: validation must throw \`DATA-SPEC: lambda positive\`. Delete the fourth entry of P's first recovery row: it must throw \`DATA-SPEC: recovery vector\`. Change noisy noise to[2,−2,0,0,0,0,0] and y to[0,−4,−2,−2,−2,−2,−2]: it must throw \`DATA-SPEC: candidate KKT\`. Keep the original packet unchanged for final reproduction. These are deliberately invalid input/certificate cases; reporting the actual rejection is successful work.

## Rubric, repair and source comparison

Use this100-point public rubric separately on each P,C,R portfolio. It supports self-review only. A number is not qualified marking, and reading a public model changes what your record can claim.

| Criterion | Points | Complete evidence | Repair if missing |
| --- | --- | --- | --- |
| Learning law and target | 20 | Correct IID/block/adaptive law, exact event or risk table, valid theorem/conditioning step and target-specific limitation. | Rebuild every equally likely string or ordered input pair; identify the actual independent units and the event inequality. Repeat with a different block count before revising. |
| General theory reconstruction | 20 | Assumptions and logical steps for the assigned symmetrization/stability/Hedge work, with source-number comparisons and no conflated gap/risk/regret. | Write each expectation with its variables; make the ghost sample or swap explicit; reconstruct one potential inequality. Use DL-S4–7 keys and disclose opening them. |
| Identification and recovery | 20 | Entire real kernel/feasible line, correct sparsity quantifier, NSP or its failure and all-real minimum/ambiguity proof. | Substitute the kernel into Xv, split a2s support, and draw a sign-interval table for the l1 objective. Separate finite search from the line proof. |
| Noise and inference | 20 | P's complete cone/RE/KKT/bound proof; C/R's exact changed-noise or support-failure analysis and relevant preserved theorem conditions. | Expand the objective with1/(2n), restore the factor2 before deriving the cone, check every KKT coordinate, and state the missing beta-min/noise assumption. |
| Execution, comparison and records | 20 | Actual unedited code/input/stdout, all three required rejections, complete seven-column claim ledger, declared help, dated first/comparison/revised files. | Reproduce from the original packet, retain actual errors, compare each branch with its printed input, then correct the ledger without overwriting the first attempt. |

Award0 for no evidence; roughly half the row's points for correct fragments with a missing necessary hypothesis/proof or incomplete outputs; full points only for all its evidence. When a criterion contains several tasks, distribute its points equally among them and round only the total. A theorem applied with a false sampling law, an unidentified coefficient reported as identified, an omitted real-valued proof replaced by the dictionary search, or invented execution cannot earn full points in that criterion. These are repair triggers, not a passing threshold or academic grade.

For P, the general-theory row includes all four proofs/calculations named in task2; the noise row includes the deterministic theorem and positive7×8 certificate. For C, compare the earlier theory assumptions explicitly and reconstruct the equal-replication argument; its noise row includes threshold C and failed-KKT derivation. For R, the general-theory row includes both reconstructed expectation proofs and the gap/risk/regret comparison; the noise row includes beta-min failure and the preserved/missing probability assumptions. The complete models provide positive solutions and rejected claims for every task. If a revised answer still lacks a required assumption, repeat that repair and retain another dated version; accumulating a self-score does not remove a mathematical gap.

## Dated work, recovery and continuing specialist study

Use learner-owned ordinary files as described in the [worksheet portfolio guide](/guide/learner-records/#keep-a-worksheet-portfolio). For each task keep \`DATA-SPEC-P-YYYY-MM-DD-first.md\`, \`-comparison.md\` and \`-revised.md\`, substituting C or R. Use your actual date, a time suffix if needed to avoid collision, source/question IDs, help opened, exact input version, run command and program/stdout filenames. Do not overwrite an existing file. Copy each new answer into a fresh file deliberately; these files are not automatically immutable, backed up, graded or retained by the browser. Keep a second learner-controlled backup of your small work files and verify reopening it. Never copy a project tree or import someone else's notes into yours.

In the comparison file quote only your own errors and record the relevant public model location; preserve the initial text. The revised file states which inference changed and why. For return work record the intervening task and actual time, without claiming a verified delay or concealed support. If a file is lost, recover from your own backup into a fresh dated file, record what was recovered and retain both versions when there is a conflict. Shared course notes are one mutable string and study checkmarks are self-report; neither preserves these worksheets or demonstrates independent performance.

A continuing investigation should choose an estimand/loss, class of designs, noise/dependence law and computational budget before comparing methods. Derive at least one upper guarantee and one failure or lower-bound construction, then ask what assumptions connect them. The d-simplex question in R is closed by its supplied proof. The programme's broader questions—sharp minimax constants, adaptive noise/design interactions and general deep-learning guarantees—remain outside this completed selection. A proposed literature question needs a fresh primary-source search before any novelty claim. Optional human supervision must be arranged separately; none is advertised or claimed here.

## Primary-source provenance and rights

The native sources and complete-key addresses above are the required locally readable teaching. New proofs, tables, variants and the bounded program are authored for this course under CC BY-SA4.0. No complete article/PDF, publisher figure or external dataset is bundled. Optional audit links do not become imported trusted note destinations or required downloads.

Two primary sources were inspected on4 November2026. Bickel, Ritov and Tsybakov, *Simultaneous analysis of Lasso and Dantzig selector*, *Annals of Statistics*37(4)(2009),1705–1732, [DOI10.1214/08-AOS620](https://doi.org/10.1214/08-AOS620), [author-hosted text](https://www.stat.berkeley.edu/users/bickel/BickelRitovTsybakov2009aos.pdf), §3 RE definition and §7 Theorem7.2, motivate comparison with our local cone theorem. Their Gaussian/global-RE result has its own normalization/constants. Our support-specific deterministic proof is stated independently above. The article carries its publisher copyright; no reuse licence is asserted.

Bousquet and Elisseeff, *Stability and Generalization*, *JMLR*2(2002),499–526, [journal record and article](https://jmlr.org/papers/v2/bousquet02a.html), Definition6 and Lemma7, provide the historical convention comparison. Their deletion stability differs from the replacement-one convention here; translating via two deletions changes constants. Our averaged replacement proof is complete locally. The article retains its own rights. No human source review, empirical learning benefit, private participant data or publication novelty is claimed.
`;export{e as default};