
# Auditable Learning: Optimization, Generalization, and Identification

<!-- euler-course-route -->

## Current course route

Follow the [current chapter syllabus](#/courses/atlas-data-learning-advanced), based on [Statistical Learning: Risk, Capacity, and Generalization](#/books/statistical-learning-generalization). Its chapters, exercises and preparation links form the present course route.

Preparation courses: [Statistics II: statistical inference](#/courses/course-statistical-inference) · [Linear algebra II](#/courses/atlas-linear-algebra-standard) · [Probability with proofs](#/courses/atlas-probability-processes-standard).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A low training loss answers a computational question about a specified table and objective. A replay receipt answers a question about an execution. A generalization theorem needs a sampling law. A Gaussian posterior needs a joint probability model. A causal effect needs an intervention model and identifying information. These statements can support one investigation, but none supplies the assumptions of the others.

This advanced course teaches the full selected advanced data scope: **optimization and differentiation, generalization, structured conditional models, and causal/design issues**. Its cumulative project completes **Capstone project 2: an auditable finite learning study** in the native optimization/backpropagation reference. The existing scalar ML projects supply public fixtures and algebraic preparation. The new work is their derivative/replay experiment and its joint generalization, conditioning and identification audit, with a changed study and a later public reconstruction. There is no new collected dataset, recruited learner, grade or unseen evaluation. Study time depends on the selected reading, attempts and corrections. The source books remain working editions; this course does not qualify their entire graduate programmes or the separate differentiation-engine capstone.

## Readiness and prerequisite repair

Bring proof-based finite probability, conditional expectation, elementary mathematical statistics, differentiable maps and chain rules, shaped linear algebra, positive definiteness and convex quadratic optimization. To reconstruct the executable reference, also bring JavaScript arrays, functions, immutable records and JSON; the mathematical portfolio can be written using the exact tables, but a claim that you replayed the program requires your actual run and receipt. The code runs locally under Node with its built-in crypto module. It performs bounded in-memory calculations and prints one JSON receipt; it does not access a network or learner store.

The [entry data course](#/courses/atlas-data-prediction-entry) repairs rows, feature availability, affine versus linear maps and finite expected loss. The [mathematical ML course](#/courses/atlas-mathematics-for-machine-learning), especially its **Ten assigned problem sets and preparation** and three **ML-FIN** capstones, supplies the scalar risk and training/selection/freeze preparation. Those earlier tasks are preparation here, not completion of this advanced course.

Attempt this diagnostic before comparing its key. (1) For $q=a^2+a$ and $L=q^3$, find $L'(2)$ and name both paths from a to q. (2) If an objective uses half the mean of three squared residuals, what denominator multiplies their sum? (3) In a joint zero-mean Gaussian law with covariance blocks A,c,d, which system is solved for the conditional mean and which quantity is subtracted from d for its latent variance? (4) Can a candidate list redesigned from assessment outcomes use a fixed-list Hoeffding union bound merely by counting the final list? (5) If Z=U and Y=U observationally, has the effect of setting Z been determined?

**Full diagnostic key and repair.** (1) $q=6$, the arriving adjoint is $3q^2=108$, and the square and identity paths contribute $432$ and $108$, total **540**. Add path contributions; overwriting one loses a term. (2) The denominator is **6**; the slope penalty has its separately declared factor. Replicating all rows doubles numerator and denominator, leaving the mean gradient unchanged. (3) Solve $A\alpha=y$ for mean $c^T\alpha$, and $A\beta=c$ for variance $d-c^T\beta$, assuming A positive definite and a valid joint Gaussian covariance. (4) **No**: the list must be independent of the assessment sample, or a different argument must control the adaptive search. (5) **No**: a model with Y=U under interventions and one with Y=Z have the same observed diagonal table but different causal effects. Detailed repairs are taught below.

If 1–2 failed, work the reverse-mode and project-reference keys in the next table before the trainer. If 3 failed, first solve two real equations by elimination, then read the Gaussian-conditioning worked examples and distinguish latent from observation noise. If 4 failed, reconstruct the union bound event by event. If 5 failed, start with the observational-equivalence construction below before choosing a regression algorithm. Passing this diagnostic does not establish readiness for unrestricted graduate theory.

## Native assignments and complete-key addresses

Keep first answers and compare the exact numbered keys below. All destinations are native Atlas item/chapter addresses. These are selected assignments, not instructions to finish entire books.

| Work | Native source and assigned questions | Full key and purpose |
| --- | --- | --- |
| D1: derivative | [Reverse-Mode Adjoint Backpropagation](../books/optimization-backprop-from-scratch/reverse-mode-adjoint-backprop.md), **Exercises** 1, 2, 9, 10, 19 | Same chapter **Full solutions** 1,2,9,10,19: respectively derivative 540; adjoints (64,32); ReLU kink versus centered difference; freeze a dropout realization; JVP/VJP scalar duality. |
| D2: objective and certificate | [Projects, Solutions, Notation, and Reference Back Matter](../books/optimization-backprop-from-scratch/projects-solutions-reference.md), **Exercises** 3,4,11,12,13,14,16,17 | Same chapter **Full solutions** with the same numbers: batch pullbacks; replication; derivative of a wrong objective; ridge minimizer 2/3 and objective 1/9; changed penalty minimizer 1/3; solve-error bound 1/1000; complete state; test tuning changes its role. Read its six contracts and **Capstone project 2** in full. |
| D3: replay | [Training Pipelines and Reproducible Computation](../books/optimization-backprop-from-scratch/training-pipelines-reproducibility.md), **Exercises** 6,7,9,15,16 | Same chapter **Full solutions** 6,7,9,15,16: inductive restart equivalence; omitted momentum; case-weighted mean 1.2 versus equal-batch 1.5; schema/digest/commit; compare every subsequent transition. The separate restartable-trainer project has additional requirements; our completed native assignment is Capstone project 2 above. |
| G1: generalization | [Uniform Convergence for a Finite Class](../books/statistical-learning-generalization/uniform-convergence-finite-class.md), **Practice exercises** 1–3; [Approximation, Estimation, and Optimization](../books/statistical-learning-generalization/approximation-estimation-optimization.md), **Practice exercises** 1 and 3 | Adjacent **Solution.** paragraphs for each number: sufficient n=415; simultaneous rather than pointwise assessment; two-class price; excess within-class risk at most 2ε; a train–test gap does not identify its cause. |
| G2: assessment design | [Regularization and Model Selection](../books/statistical-learning-generalization/regularization-and-model-selection.md), **Practice exercises** 1–3 | Adjacent solutions: fit scaling inside each training fold; nested selection assesses the whole smaller-training-size procedure; hold out hospitals for new-hospital transfer. |
| S1: structured conditioning | [Conditioning a Gaussian Process](../books/structured-probabilistic-learning/conditioning-a-gaussian-process.md), **Practice exercises** 4.1–4.3; [Numerical Conditioning Is Part of Inference](../books/structured-probabilistic-learning/numerical-conditioning-is-part-of-inference.md), **Practice exercises** 6.2 and 6.3 | Adjacent solutions: min-kernel mean 3 and latent variance 1/2; fixed-model variance reduction; add new-observation noise once; reported jitter increases variance; Cholesky log determinant. |
| S2: graphs and identification | [Directed Graphical Models](../books/structured-probabilistic-learning/directed-graphical-models.md), **Practice exercises** 7.2–7.4; [Estimands, Identification, and Design](../books/principles-statistical-inference/estimands-identification-and-design.md), **12. Exercises with complete solutions**, 10,13,14,15 | Adjacent solutions: collider opening and blocking; recruitment selection; observational equivalence; disjoint-neighborhood impossibility proof; randomization expectation; association is not an effect; positivity failure. |
| C1: causal design | [Randomized Experiments and Causal Contrasts](../books/principles-statistical-inference/randomized-experiments-and-causal-contrasts.md), **14. Exercises with complete solutions**, 2,3,4,17,20 | Adjacent solutions: inclusion probability m/N; unbiased treated mean; assignment alone is random; post-treatment adjustment can change the target; randomization does not provide population transport. |

No matrix-computation manuscript is used as a prerequisite here. Each selected native question has its complete public key in the named source. Their public support and any earlier exposure must be disclosed in the cumulative portfolios.

## Optimization model, derivatives and exact finite ledger

We reuse the original 18 **synthetic, hand-chosen, dimensionless** rows. The three tasks remain separate; a C or R row never enlarges the P training sample. Row IDs also define groups: each represents one teaching unit observed once, so no group is split across roles. There is no time series or claimed IID sample. For this exercise the input is available at prediction time, the target follows it, no entries are missing, and no rows are excluded. For a real application, group and time assignments would have to be redesigned for its actual use.

| Task | Split | Row ID | x | y |
| --- | --- | --- | ---: | ---: |
| P | train | P1 | -1 | -1 |
| P | train | P2 | 0 | 0 |
| P | train | P3 | 1 | 1 |
| P | validation | P4 | 2 | 1 |
| P | test | P5 | 3 | 2 |
| P | test | P6 | -3 | -2 |
| C | train | C1 | -1 | 1 |
| C | train | C2 | 0 | 2 |
| C | train | C3 | 1 | 3 |
| C | validation | C4 | 2 | 4 |
| C | test | C5 | 3 | 5 |
| C | test | C6 | -3 | -1 |
| R | train | R1 | -2 | -1 |
| R | train | R2 | 0 | 1 |
| R | train | R3 | 2 | 3 |
| R | validation | R4 | 4 | 3 |
| R | test | R5 | 6 | 4 |
| R | test | R6 | -6 | -2 |

For every comparison set, residual means **prediction minus target**, RSS is the sum of residual squares, and MSE is RSS divided by that set's count. This resets the opposite residual convention used in the entry seedling course. The objective is

$$F_\lambda(b,w)=\frac1{2n}\sum_{i\in\mathrm{train}}(b+wx_i-y_i)^2+\frac\lambda2w^2,\qquad n=3.$$

In P, b is fixed at zero; in C,R it is fitted and unpenalized. The candidate λ sets are P,C: {0,1/3}; R: {0,8/3}. Select by validation MSE, breaking ties toward the smaller λ, then freeze without refitting. Report the training-mean baseline separately; it is not a selection candidate. Public test values cannot become unseen by being covered on screen.

The batch X has shape 3×1; prediction and residual are length 3; (b,w) are scalar coordinates. Differentiating the stated numerator gives $g_b=n^{-1}\sum r_i$ when b is fitted and $g_w=n^{-1}\sum x_ir_i+\lambda w$. The arriving cotangent of each half-square is r_i/n. The feature mean fitted from training x values is zero in all three cases. With A=mean(x²), c=mean(xy), the raw slope derivative is $(A+\lambda)w-c$. Here (A,c) is (2/3,2/3) for P,C and (8/3,8/3) for R. The intercept derivative is b−2 in C and b−1 in R. The centered Hessian is diagonal with entries 1 (when present) and A+λ>0. Thus stationarity gives a unique global minimizer for these stated coefficient coordinates.

For fixed scale s∈{1,2}, fit μ=mean training x=0 and use z=s(x−μ). Write the predictor as b+vz, with v=w/s. To preserve the original penalty, use **λ_z=s²λ**, so λ_z v²/2=λw²/2. Consequently $g_v=s g_w$ and $H_{vv}=s^2(A+\lambda)$. Both scales describe the same fitted functions; they are a coordinate-invariance experiment, not extra independent models or samples. The transform receipt records μ,s and the fitting row IDs. Keeping λ numerically unchanged at s=2 changes the raw estimator; for P at λ=1/3 it gives raw slope 8/9 rather than 2/3.

| Case | Model | b | w | Train MSE | Validation MSE | Test MSE |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| P | baseline | 0 | 0 | 2/3 | 1 | 4 |
| P | lambda=0 | 0 | 1 | 0 | 1 | 1 |
| P | lambda=1/3 | 0 | 2/3 | 2/27 | 1/9 | 0 |
| C | baseline | 2 | 0 | 2/3 | 4 | 9 |
| C | lambda=0 | 2 | 1 | 0 | 0 | 0 |
| C | lambda=1/3 | 2 | 2/3 | 2/27 | 4/9 | 1 |
| R | baseline | 1 | 0 | 8/3 | 4 | 9 |
| R | lambda=0 | 1 | 1 | 0 | 4 | 9 |
| R | lambda=8/3 | 1 | 1/2 | 2/3 | 0 | 0 |

The selected (P,C,R) λ values are (1/3,0,8/3). Their test RSS values are all zero, each divided by 2; this is an exact property of deliberately chosen public rows. It is not a population study. Baseline test RSS values are (8,18,18). For P's selected rule, training residuals (1/3,0,−1/3) have RSS 2/9, MSE 2/27 and half-MSE 1/27; penalty 2/27 yields F=1/9. C's selected objective is zero; R's selected half-MSE and penalty are both 1/3, yielding F=2/3. Every quantity here is dimensionless; physical rescaling would require a unit-bearing penalty.

**Derivative certificate.** At P, λ=1/3, $F(w)=w^2/2-2w/3+1/3$. At w=0 and h=1/2, F(h)=1/8 and F(−h)=19/24, so their difference divided by 2h is −2/3, exactly F′(0). For any quadratic the centered difference is exact in real arithmetic at every nonzero h; floating cancellation remains. The reference reports h=10⁻¹,…,10⁻⁷ and all errors, with atol=10⁻⁷ and rtol=10⁻⁷ declared in advance. It does not widen tolerances or make claims about arbitrary nonlinear losses.

**Replay certificate.** The primary λ=1/3 raw-coordinate momentum update is $m^+=m/2+(w-2/3)$, $w^+=w-m^+/2$. Starting (w,m)=(0,0), the four after-update states are (1/3,−2/3), (2/3,−2/3), (5/6,−1/3), (5/6,0). Objectives are 1/6,1/9,1/8,1/8. Momentum need not decrease F every step. At step 2, preserving w but dropping momentum gives next w=2/3 instead of 5/6. Restore every replay-relevant state field and compare each next transition, not merely the final fitted model. The reference takes one exact-quadratic Newton correction after its four warmup steps; this makes the final fit seed-independent while leaving genuinely different warmup trajectories.

## Generalization with a named repetition law

Let S consist of n IID observations from a named law P. Let H contain M predictors fixed independently of S, and let every loss lie in [0,1]. Hoeffding's inequality, imported from the native source, bounds a fixed predictor's deviation probability by $2e^{-2n\varepsilon^2}$. The event that at least one predictor exceeds ε is a union of M such events, so

$$P\{\sup_{h\in H}|\widehat R_S(h)-R_P(h)|>\varepsilon\}\le 2M e^{-2n\varepsilon^2}.$$

Choose n≥log(2M/δ)/(2ε²), rounded up. Conditional on an independent training sample, this also covers a finite candidate list fitted on that training sample, because the assessment sample retains its IID law and the list is then fixed. Selection among that list using S is covered by the simultaneous event. Redesigning the list from S is a different procedure.

On the uniform event, an approximate empirical minimizer with gap ε_opt satisfies

$$R_P(\widehat h)\le\widehat R_S(\widehat h)+\varepsilon\le\widehat R_S(h_H)+\varepsilon_{\rm opt}+\varepsilon\le R_P(h_H)+\varepsilon_{\rm opt}+2\varepsilon.$$

If a population minimizer in H is not attained, compare an η-minimizer and let η decrease to zero. Approximation error relative to a larger decision class remains separate. A small optimization residual alone supplies neither ε nor the approximation term.

**Primary theorem card.** Prespecify four functions {0,x,2x/3,1+x/2}, an independent hypothetical IID assessment sample, and clipped squared loss $\ell(h,(x,y))=\min\{1,(h(x)-y)^2\}$. With M=4, ε=1/4 and δ=1/8, a sufficient sample size is $n\ge8\log64$, hence **34**. At n=34, the failure upper bound is $8e^{-34/8}\le1/8$; n=33 does not meet this sufficient inequality. This is a planning theorem, not a claim that our 18 hand-chosen rows were sampled that way. The bound concerns clipped loss. The ridge optimizer minimizes a different, unbounded squared-loss objective and is not automatically an approximate clipped-loss empirical minimizer.

**Changed theorem card.** For M=8 with the same ε,δ, the sufficient size is $n\ge8\log128$, hence **39**. Counting only the four reported predictors after adapting their definitions to assessment outcomes does not justify M=4. Unrestricted squared loss also violates the boundedness hypothesis. Clipping changes the evaluated loss; merely clipping a plotted score cannot retrofit the theorem to an unclipped risk.

**Return theorem card.** Under a separate explicit finite law Y∼Bernoulli(1/2), take H={constant 0,constant 1}, 0–1 loss and n=4 IID labels. Both population risks are 1/2. Exactly 2 of the 16 equally likely label strings have uniform empirical deviation at least 1/2: 0000 and 1111. Its exact probability is **1/8**. Hoeffding plus union bounds this **at-least** event by $4e^{-2}$; it is a valid loose bound, not the exact probability. The source's strict-greater event at ε=1/2 has probability zero; keep the event inequality explicit. The 34/39-row planning inequalities and the four-label enumeration answer different questions.

## Structured conditioning and numerical sensitivity

A kernel specifies covariance, not a causal mechanism. Use the actual min-kernel exercise $k(x,z)=\min(x,z)$ on nonnegative inputs, zero prior mean, observations f(1)=2,f(3)=4 and target f(2). Its finite joint Gaussian model has K=[[1,1],[1,3]], c=(1,2), d=2. Increments of the Brownian covariance make it positive semidefinite; here K has positive leading entry and determinant 2, so it is positive definite. For any positive-definite observation covariance A, solve Aα=y and Aβ=c. The latent posterior is Normal(cᵀα,d−cᵀβ). For a new independent observation noise variance ν, add ν once to the latent variance.

| Conditioning card | A11 | A12 | A22 | α1 | α2 | β1 | β2 | Mean | Latent variance | New-observation variance |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| P: noiseless | 1 | 1 | 3 | 1 | 1 | 1/2 | 1/2 | 3 | 1/2 | 1/2 |
| C: noise variance 1 | 2 | 1 | 4 | 4/7 | 6/7 | 2/7 | 3/7 | 16/7 | 6/7 | 13/7 |
| R: noise 0, reported training jitter 1 | 2 | 1 | 4 | 4/7 | 6/7 | 2/7 | 3/7 | 16/7 | 6/7 | 6/7 |

For P, Aα=(2,4) and Aβ=(1,2), so mean=1+2=3 and variance=2−(1/2+1)=1/2. Cholesky uses L=[[1,0],[1,√2]]: two triangular solves reproduce these results without an explicit inverse. For C, determinant 7 gives the displayed solutions and variance 2−8/7=6/7; a new noisy observation has variance 6/7+1=13/7. The changed outcomes y are the same numerical observations; their likelihood and interpretation change under the declared noise model.

R uses the same training covariance numbers as C but calls the added unit a reported jitter perturbation while the target observation noise remains zero. It computes the displayed approximation to the original noiseless posterior, or equivalently exact conditioning under a modified model with unit training-only noise. It is **not** the original noiseless posterior and does not justify adding a unit to the future observation variance. Modeling interpretation and numerical stabilization must both be reported. A unit of jitter is deliberately substantial on this kernel scale.

The original K has eigenvalues 2±√2, so its 2-norm condition number is (2+√2)/(2−√2)=3+2√2. Adding I changes it to (3+√2)/(3−√2)=(11+6√2)/7. A more stable solve can still describe a different posterior. With fixed kernel and positive observation noise, cᵀA⁻¹c≥0, so latent variance cannot exceed the prior d; equality holds exactly when c=0. This does not compare models with refitted hyperparameters. In physical units, K,A and variances have squared-response units; means and y have response units. This fixture uses dimensionless coordinates.

## Identification, intervention and selection

Prediction concerns an observation law. Identification asks whether all states producing that same law agree on the target. If two states have identical complete observation laws for every sample size but different targets, every statistic has the same distribution under both; it cannot converge into two disjoint neighborhoods of the different targets. More repetitions from that same law cannot fix the missing information.

**Primary observational pair.** Let U be a fair binary variable and treatment Z=U. In model M0 set Y(z)=U for both interventions. In model M1 set Y(z)=z. Under the observational assignment, both generate (Z,Y)=(0,0),(1,1), each with probability 1/2. Predicting Y=Z is perfect in both. Yet E[Y(1)−Y(0)] is 0 in M0 and 1 in M1. These are two authored probability models, not people or collected records.

| Model | U | P(U) | Observed Z | Y(0) | Y(1) | Observed Y |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| M0 | 0 | 1/2 | 0 | 0 | 0 | 0 |
| M0 | 1 | 1/2 | 1 | 1 | 1 | 1 |
| M1 | 0 | 1/2 | 0 | 0 | 1 | 0 |
| M1 | 1 | 1/2 | 1 | 0 | 1 | 1 |

With binary outcomes and only this observational law, the ATE can range from 0 to 1 by varying the two unobserved counterfactual outcomes. The endpoints above attain the limits. The conditional assignment has no overlap given U: P(Z=1|U=0)=0 and P(Z=1|U=1)=1. Fitting a smoother predictor cannot create the absent treatment states.

**Changed design repair.** Now stipulate Z is assigned by a new fair coin independent of U, with the same stable treatment versions, consistency and no interference. In M0, all four (Z,Y) cells have probability 1/4. In M1, only (0,0),(1,1) occur, with probability 1/2 each. The experimental observation laws now differ. Under this randomized law, E[Y|Z=1]−E[Y|Z=0] identifies 0 or 1 respectively. Randomization has created the missing variation; it has not made every individual counterfactual observable or supplied population transport.

For a finite experimental population, complete randomization of m of N units gives E[Z_i]=m/N. Then E[m⁻¹ΣZ_iY_i(1)]=N⁻¹ΣY_i(1); the analogous control identity proves difference-in-means design-unbiased. Indicators need not be independent: their sum is fixed. Stable outcomes and the actual assignment mechanism are the hypotheses. This is an assignment-law theorem, separate from the IID learning bound.

**Return selection repair.** For independent fair indicators B,C, retain a record only when R=1[B∨C]. Before selection, all four (B,C) cells have probability 1/4. After selection, (0,1),(1,0),(1,1) each has probability 1/3, while (0,0) has zero probability. Thus E[B|R]=E[C|R]=2/3 and E[BC|R]=1/3, so covariance is **−1/9**. Conditioning on a collider has created dependence. For independent probabilities p,q strictly between zero and one, writing r=p+q−pq gives covariance −pq(1−p)(1−q)/r²<0. The graph permits this effect; the calculation establishes it for these parameters. Conditioning on selection or a post-treatment variable is not a universal confounding repair.

## DATA-ADV-P — Cumulative primary study and full model

Produce a single portfolio completing the native **Capstone project 2** on P rows. State its ten acceptance components explicitly: evidence; immutable fixture; train-only pipeline; objective; mathematical anchors; reproducible computation; full predetermined variation; four failure injections; evaluation ledger; claim ladder. Use the five keyed initializations, both scales and both λ values in the reference. Keep the baseline and the exact linear fit; three training rows do not justify adding a tiny network. Attach the primary theorem, P conditioning and observational-equivalence cards. Explain which objects are shared algebra and which are separate hypothetical laws.

**Complete public model.** Evidence and fixture are the P rows and fixed roles above, with no missingness or exclusions, normalized units, and no population claim. The identity of each unit fixes its split. Fit μ=0 on P1–P3; scale s is predetermined. The loss numerator is RSS, its objective denominator is 6, and its evaluation denominator is each split's own count. Baseline c=0; candidates w=1 and 2/3 have validation MSE 1 and 1/9. Freeze λ=1/3,b=0,w=2/3. Train/validation/test MSEs are 2/27,1/9,0; test residuals are (0,0). The derivative, shape, conditioning and four-state replay certificates above provide mathematical anchors. The executable reference below prints all 20 P cells, their complete warmup and Newton traces, snapshots and comparison outcomes; do not replace them with the best seed.

The four distinct failures have distinct repairs. **Leakage:** a transformed predictor that receives the target y as an available feature has zero displayed loss, but violates the availability ledger; remove y. **Unstable formula:** for the constant-baseline calculation only, express the same P training targets in the shifted coordinate y′=y+10⁸. Their constant baseline is 10⁸ and their true MSE remains 2/3. Computing it as mean(y′²)−mean(y′)² loses the small variance through floating cancellation and gives 0 in the reference arithmetic; directly averaging centered residual squares retains 2/3. This is a coordinate stress on the same rows, not another dataset. **Missing state:** deleting the step-2 momentum either fails the checkpoint schema or, if deliberately zero-filled, changes the next w from 5/6 to 2/3; restore the complete state. **Unsupported shift:** replace only P5's response 2 with −2, retaining the frozen prediction 2; its squared loss becomes 16 and the two-row test MSE becomes 8. This is a declared stress law, not the original test result or a refitting instruction. An additional logistic primitive check keeps the stable loss finite at logits ±1000.

The generalization card gives n=34 only under its independent IID, finite-list and clipped-loss hypotheses; none is supplied by the P fixture. The GP card gives a model-conditional mean 3 and latent variance 1/2 for its own min-kernel observations, not a confidence interval for the ridge predictor. The causal pair gives observationally indistinguishable ATEs 0 and 1; a perfect predictor does not identify a treatment effect. These three cards are evidence categories within one audit, not pooled observations or three interchangeable uncertainty measures.

**Deployment and decision boundary.** Deployment would require a target law and a defensible link from these features, availability times and support to that law; none is supplied. No actions, costs, resource budget or intervention-benefit model is supplied either, so low prediction loss selects no decision policy. This completes the claim ladder: exact derivative algebra; bounded floating computation/replay; named-row held-out loss; conditional sampling theorem; unsupported deployment link; unidentified causal effect; and absent decision contract. Keep the same deployment and decision boundary in C and R.

## DATA-ADV-C — Changed study and complete repair

Start a new portfolio on C rows with fitted unpenalized intercept. Repeat all 20 seed/scale/λ cells. Compare exact gradient, mean-denominator and coordinate-penalty behavior with P. Change the theorem card to M=8, the GP card to unit physical observation noise and the causal card to randomized treatment. Diagnose why keeping the primary winning penalty or using the same assessment data for adaptive redesign would break the protocol. Keep first, comparison and revised writing separate.

**Complete public model.** Training means are x̄=0,ȳ=2. The objective is $F=\frac12(b-2)^2+\frac13(w-1)^2+\frac\lambda2w^2$. Gradients are b−2 and (2/3)(w−1)+λw, with positive diagonal Hessian. Candidates (b,w)=(2,1),(2,2/3) give validation MSE 0 and 4/9, so λ=0 wins. Freeze 2+x: test residuals (0,0), train/validation/test MSE all zero. The baseline has MSE (2/3,4,9); the positive-penalty candidate has (2/27,4/9,1). Penalizing b at λ=1/3 would instead give b=3/2, solving a different objective. A passed finite-difference check would not rescue that objective error.

Scale s=2 requires v=w/2 and λ_z=4λ for function equivalence. Seed variation affects the printed warmup, while the diagonal Newton correction reaches the same exact optimum; this does not estimate real-data sampling variability. The reference preserves all C traces and replays each from its full checkpoint. The wrong mean/sum gradient and omitted momentum are retained as failing controls rather than hidden by the exact final solver.

The changed generalization sufficient n is 39, for a prespecified eight-function class and clipped loss; adaptively redefining eight functions from assessment outcomes still fails the independence hypothesis. The changed GP mean is 16/7, latent variance 6/7 and new-observation variance 13/7; the noise is added once at prediction. In the randomized causal comparison, M0's four observation cells are equal and M1's two diagonal cells have mass 1/2. Randomization distinguishes the laws and identifies their respective ATEs, under the explicit design assumptions. Stable predictive fit, numerical conditioning, causal identification and external validity remain separate judgments.

## DATA-ADV-R — Later public reconstruction and full model

At a later sitting of your choice, use R rows, their original candidate grid and the complete reference. Record the actual date and which P/C/native models and code you have seen. This is a public reconstruction; dates and self-declarations cannot certify a delay, independent work or retention. Recompute the 20 R cells and their full traces. Use the four-label exact probability card, the reported-jitter conditioning card and the collider-selection card. Explain one repair that must change the data design rather than the optimizer.

**Complete public model.** The training means are x̄=0,ȳ=1, and A=c=8/3. The objective is $F=\frac12(b-1)^2+\frac43(w-1)^2+\frac\lambda2w^2$. Gradients are b−1 and (8/3)(w−1)+λw. Candidates have (b,w)=(1,1),(1,1/2); validation MSEs are 4 and 0. Freeze λ=8/3,b=1,w=1/2. Its test predictions (4,−2) match R5,R6, and its training MSE is 2/3. Both comparison test MSEs are 9. The selected objective is 2/3, with half-MSE and penalty 1/3 each. In these higher-curvature cases the fixed momentum warmup can increase loss sharply. The reference keeps such trajectories, tests finite values, and applies its declared exact quadratic correction; it does not mislabel the warmup as monotone descent or a general nonconvex solver.

For x′=2x the penalty coefficient must multiply by four to preserve the raw objective. In the return theorem card the exact at-least-1/2 deviation probability is 1/8 over all 16 label strings; a loose theorem bound and an exact finite probability are different objects. In the return GP card training jitter changes the posterior to mean 16/7, latent variance 6/7, while zero future observation noise leaves prediction variance 6/7. Numerical stabilization does not preserve the original noiseless answer (3,1/2). Collider recruitment yields covariance −1/9, so conditioning on the selected sample cannot be treated as random sampling from the original independent law. Collecting the missing treatment states or changing assignment can repair causal identification; taking more optimizer steps cannot.

## Bounded derivative and replay reference

Save the following listing as `data-learning-replay.mjs` and run `node data-learning-replay.mjs`. It prints every one of the 3×5×2×2=**60** cells, baseline and candidate metrics, all after-transition states and checkpoint receipts. Seeds −2,−1,0,1,2 are semantic initialization keys, with initial raw slope seed/2 and fitted intercept seed/2; they are not independent data samples. Full batches have fixed order and no random draws, dropout or normalization state. The seed and cursor ledger explicitly says so. The coordinate scale experiment preserves the raw objective; it does not perform scale selection. Within each case, validation alone selects λ and nothing is refit. The code models a complete in-memory checkpoint commit, with a schema and SHA-256 payload integrity check; it makes no filesystem durability claim.

```javascript
import { createHash } from 'node:crypto';
const sha = value => createHash('sha256').update(value).digest('hex');
const fail = (ok, message) => { if (!ok) throw new Error(message); };
const close = (a,b) => Math.abs(a-b)<=1e-7+1e-7*Math.max(Math.abs(a),Math.abs(b));
const cases = [
  {id:'P',affine:false,lambdas:[0,1/3],rows:[['P1','train',-1,-1],['P2','train',0,0],['P3','train',1,1],['P4','validation',2,1],['P5','test',3,2],['P6','test',-3,-2]]},
  {id:'C',affine:true,lambdas:[0,1/3],rows:[['C1','train',-1,1],['C2','train',0,2],['C3','train',1,3],['C4','validation',2,4],['C5','test',3,5],['C6','test',-3,-1]]},
  {id:'R',affine:true,lambdas:[0,8/3],rows:[['R1','train',-2,-1],['R2','train',0,1],['R3','train',2,3],['R4','validation',4,3],['R5','test',6,4],['R6','test',-6,-2]]}
];
const fixtureDigest=sha(JSON.stringify(cases));
const seeds=[-2,-1,0,1,2],scales=[1,2];
function setup(c,seed,scale,lambda){
  const train=c.rows.filter(r=>r[1]==='train'),n=train.length;
  const mu=train.reduce((a,r)=>a+r[2],0)/n;
  fail(mu===0,'this centered reference requires training mean zero');
  const A=train.reduce((a,r)=>a+r[2]*r[2],0)/n;
  const cross=train.reduce((a,r)=>a+r[2]*r[3],0)/n;
  const targetMean=train.reduce((a,r)=>a+r[3],0)/n;
  return {version:1,fixtureDigest,caseId:c.id,affine:c.affine,seed,scale,lambda,lambdaZ:scale*scale*lambda,mu,fitRows:train.map(r=>r[0]),order:train.map(r=>r[0]),random:'none; semantic initialization only',A,cross,targetMean,n,step:0,next:'momentum',b:c.affine?seed/2:0,v:seed/(2*scale),mb:0,mv:0,rate:0.5,beta:0.5,arithmetic:'ECMAScript Number; fixed loops'};
}
function objective(c,s,b=s.b,v=s.v){
  const train=c.rows.filter(r=>r[1]==='train');
  const numerator=train.reduce((a,r)=>a+(b+v*s.scale*(r[2]-s.mu)-r[3])**2,0);
  return {numerator,denominator:2*train.length,mean:numerator/train.length,penalty:s.lambdaZ*v*v/2,value:numerator/(2*train.length)+s.lambdaZ*v*v/2};
}
function gradient(c,s){
  let gb=0,gv=0;
  for(const r of c.rows)if(r[1]==='train'){
    const z=s.scale*(r[2]-s.mu),residual=s.b+s.v*z-r[3];
    gb+=residual/s.n;gv+=z*residual/s.n;
  }
  return {b:s.affine?gb:0,v:gv+s.lambdaZ*s.v};
}
function transition(c,input){
  const s=structuredClone(input),g=gradient(c,s);
  if(s.step<4){
    s.mb=s.beta*s.mb+g.b;s.mv=s.beta*s.mv+g.v;
    if(s.affine)s.b-=s.rate*s.mb;
    s.v-=s.rate*s.mv/(s.scale*s.scale);
  }else if(s.step===4){
    if(s.affine)s.b-=g.b;
    s.v-=g.v/(s.scale*s.scale*(s.A+s.lambda));
  }else throw new Error('bounded reference has exactly five transitions');
  s.step++;s.next=s.step<4?'momentum':s.step===4?'newton':'done';
  fail([s.b,s.v,s.mb,s.mv].every(Number.isFinite),'nonfinite state');
  return s;
}
const fields=Object.keys(setup(cases[0],0,1,1/3)).sort();
function pack(s){const payload=JSON.stringify(s);return JSON.stringify({payload,digest:sha(payload)});}
function unpack(bytes,expected){
  const outer=JSON.parse(bytes);fail(typeof outer.payload==='string'&&outer.digest===sha(outer.payload),'checkpoint digest');
  const s=JSON.parse(outer.payload);
  fail(JSON.stringify(Object.keys(s).sort())===JSON.stringify(fields),'checkpoint fields');
  fail(s.version===1&&s.fixtureDigest===fixtureDigest,'checkpoint fixture/version');
  for(const key of ['caseId','affine','seed','scale','lambda','lambdaZ','mu','A','cross','targetMean','n','rate','beta','arithmetic','random'])fail(s[key]===expected[key],'checkpoint config '+key);
  for(const key of ['fitRows','order'])fail(JSON.stringify(s[key])===JSON.stringify(expected[key]),'checkpoint rows '+key);
  fail(Number.isInteger(s.step)&&s.step>=0&&s.step<=5,'checkpoint step');
  fail(s.next===(s.step<4?'momentum':s.step===4?'newton':'done'),'checkpoint next transition');
  fail([s.b,s.v,s.mb,s.mv].every(Number.isFinite),'checkpoint numeric state');return s;
}
function rejected(action){try{action();return false;}catch{return true;}}
function metrics(c,b,w,roles=['train','validation','test']){return roles.map(role=>{
  const rows=c.rows.filter(r=>r[1]===role),numerator=rows.reduce((a,r)=>a+(b+w*r[2]-r[3])**2,0);
  return {role,numerator,denominator:rows.length,mse:numerator/rows.length};
});}
const cells=[];
for(const c of cases)for(const seed of seeds)for(const scale of scales)for(const lambda of c.lambdas){
  const initial=setup(c,seed,scale,lambda);let state=initial;const trace=[];
  for(let i=0;i<2;i++){state=transition(c,state);trace.push({state,loss:objective(c,state)});}
  const committed=pack(state),pending=pack({...state,step:3,next:'momentum'});
  fail(unpack(committed,initial).step===2,'interruption preserves prior committed checkpoint');
  fail(pending!==committed,'pending and committed snapshots differ');
  let restored=unpack(committed,initial);const replay=[];
  while(state.step<5){
    state=transition(c,state);restored=transition(c,restored);
    const exact=JSON.stringify(state)===JSON.stringify(restored);
    fail(exact,'transition replay mismatch');
    replay.push({step:state.step,bitwise:exact,numeric:close(state.b,restored.b)&&close(state.v,restored.v)});
    trace.push({state,loss:objective(c,state)});
  }
  const optimumW=initial.cross/(initial.A+lambda),optimumB=c.affine?initial.targetMean:0;
  fail(close(state.v*scale,optimumW)&&close(state.b,optimumB),'quadratic minimizer');
  const g=gradient(c,state);fail(close(g.b,0)&&close(g.v,0),'stationarity');
  const metricsFinal=metrics(c,state.b,state.v*scale,['train','validation']);
  cells.push({caseId:c.id,seed,scale,lambda,b:state.b,w:state.v*scale,lambdaZ:state.lambdaZ,transform:{mu:state.mu,scale,fitRows:state.fitRows},checkpoint:committed,trace,replay,metrics:metricsFinal});
}
const selection=cases.map(c=>{
  const models=cells.filter(r=>r.caseId===c.id&&r.seed===0&&r.scale===1).sort((a,b)=>a.metrics[1].mse-b.metrics[1].mse||a.lambda-b.lambda);
  const winner=models[0];
  const frozen={caseId:c.id,lambda:winner.lambda,b:winner.b,w:winner.w,frozen:true};
  return {...frozen,baseline:metrics(c,c.rows.filter(r=>r[1]==='train').reduce((a,r)=>a+r[3],0)/3,0),candidates:models.map(r=>({lambda:r.lambda,metrics:metrics(c,r.b,r.w)}))};
});
// Test arithmetic starts only after each case's winner has been fixed above.
for(const cell of cells){const c=cases.find(c=>c.id===cell.caseId);cell.metrics=metrics(c,cell.b,cell.w);}
const p=cases[0],anchor=setup(p,0,1,1/3);let anchorState=anchor;const anchorTrace=[];
for(let i=0;i<4;i++){anchorState=transition(p,anchorState);anchorTrace.push({w:anchorState.v,m:anchorState.mv,F:objective(p,anchorState).value});}
const checkpoint2=JSON.parse(cells.find(r=>r.caseId==='P'&&r.seed===0&&r.scale===1&&r.lambda===1/3).checkpoint).payload;
const saved=JSON.parse(checkpoint2),omitted={...saved};delete omitted.mv;
const omissionsRejected=rejected(()=>unpack(pack(omitted),anchor));
const zeroFilled=transition(p,{...saved,mv:0}),full=transition(p,saved);
const corruptRejected=rejected(()=>unpack(pack(saved).replace('momentum','MomENTUM'),anchor));
const changedFixtureRejected=rejected(()=>unpack(pack({...saved,fixtureDigest:'changed'}),anchor));
const wrongNextRejected=rejected(()=>unpack(pack({...saved,next:'done'}),anchor));
fail(omissionsRejected&&corruptRejected&&changedFixtureRejected&&wrongNextRejected,'checkpoint negative controls');
fail(!close(full.v,zeroFilled.v),'zero-filled momentum must mismatch next transition');
const stepGrid=Array.from({length:7},(_,i)=>10**(-i-1));
const derivative=stepGrid.map(h=>{
  const numerical=(objective(p,anchor,0,h).value-objective(p,anchor,0,-h).value)/(2*h);
  return {h,analytic:-2/3,numerical,error:Math.abs(numerical+2/3),pass:close(numerical,-2/3)};
});fail(derivative.every(r=>r.pass),'predeclared derivative grid');
const softplus=a=>Math.max(a,0)+Math.log1p(Math.exp(-Math.abs(a)));
const logistic=[[-1000,1],[1000,0]].map(([a,y])=>({a,y,stable:softplus(a)-y*a}));
const naive=-Math.log(1/(1+Math.exp(1000)));
fail(logistic.every(r=>r.stable===1000)&&!Number.isFinite(naive),'stable logistic negative control');
const shiftedTargets=p.rows.filter(r=>r[1]==='train').map(r=>1e8+r[3]);
const shiftedMean=shiftedTargets.reduce((a,y)=>a+y,0)/3;
const unstableMSE=shiftedTargets.reduce((a,y)=>a+y*y,0)/3-shiftedMean**2;
const centeredMSE=shiftedTargets.reduce((a,y)=>a+(y-shiftedMean)**2,0)/3;
fail(unstableMSE===0&&centeredMSE===2/3,'uncentered loss cancellation control');
const checkFeatures=features=>fail(features.every(f=>f.available==='prediction'),'feature unavailable at prediction');
checkFeatures([{id:'x',available:'prediction'}]);
const leakageRejected=rejected(()=>checkFeatures([{id:'x',available:'prediction'},{id:'y',available:'after-outcome'}]));
const leakageMSE=p.rows.filter(r=>r[1]==='test').reduce((a,r)=>a+(r[3]-r[3])**2,0)/2;
const stress={...p,rows:p.rows.map(r=>r[0]==='P5'?[r[0],r[1],r[2],-2]:r)};
const stressMSE=metrics(stress,0,2/3).find(r=>r.role==='test').mse;
const sumGradient=p.rows.filter(r=>r[1]==='train').reduce((a,r)=>a-r[2]*r[3],0);
fail(leakageRejected&&stressMSE===8,'availability and declared shift controls');
const controls={omissionsRejected,corruptRejected,changedFixtureRejected,wrongNextRejected,zeroFilledNextW:zeroFilled.v,fullNextW:full.v,unstableLogisticDetected:!Number.isFinite(naive),lossCancellation:{unstableMSE,centeredMSE,offset:1e8},leakage:{apparentMSE:leakageMSE,availableAtPrediction:false,rejected:leakageRejected},shift:{row:'P5',observed:-2,predicted:2,square:16,testMSE:stressMSE},wrongScaleRawSlope:(2/3)/(2/3+(1/3)/4),wrongSumGradient:sumGradient,meanGradient:sumGradient/3};
fail(cells.length===60,'complete predetermined grid');
console.log(JSON.stringify({scope:'fixed public ML rows; exact quadratic endpoint; no sampling/causal claim',fixtureDigest,seeds,scales,cells,selection,anchorTrace,derivative,logistic,controls}));
```

The reference's digest is computed over the complete literal case configuration, including original rows, roles and grids. The checkpoint records that digest, full configuration, fitted transform and its row lineage, case/seed, full-batch order, explicit absence of random streams, parameters, both momentum buffers, schedule, arithmetic, step and next transition. SHA-256 detects accidental changes; it is not authentication of an untrusted file. The in-memory pending/committed distinction demonstrates interruption before commit without claiming disk atomicity. Complete-state equality plus deterministic transition proves restart equality by induction; the receipt compares every resumed transition. The separate original pipeline trainer's filesystem and shuffle project is not silently awarded here.

The compact exact ledger above covers every final grid cell by its (case,λ) row: both coordinate scales and all five seeds have that endpoint. The code additionally reports every individual trajectory and checkpoint, including warmup increases. Its claimed relation is bitwise JSON equality within one fixed arithmetic path and the independently checked mixed tolerance; cross-machine bitwise agreement is not promised. A failure should preserve its error text, expected quantity and observed receipt. Do not claim a program run from reading this listing.

## Feedback, portfolio and scope boundary

For each DATA-ADV-P/C/R keep separately dated `first.txt`, `comparison.txt` and `revised.txt` files with the task ID in each filename. Preserve the first attempt before opening the public model, record prior key/code/help exposure, and write a correction naming the failed equation or assumption. Use new version names when revising again. Keep actual reference stdout only when you run it, label platform/arithmetic and command, and retain the full 60-cell receipt rather than only winners. Ordinary editable files and dates are learner-managed records, not automatic immutable history or verified delay. Shared notes may hold a reflection; study checkmarks and public model comparisons confer no grade.

| Missing or wrong evidence | Targeted repair | Completion evidence |
| --- | --- | --- |
| Gradient agrees with differences but uses wrong rows or reduction | Rebuild the evidence/objective card; distinguish RSS/6 from MSE and preserve mean under row replication | Correct numerator, denominator, shape and derivative, plus the deliberately wrong sum-gradient control |
| Final models match but replay diverges | Compare step 3 after the step-2 checkpoint; restore momentum, transform and next transition | Every intermediate resumed state agrees, and omitted-field/corrupt/config/next controls fail distinctly |
| Scale 2 changes the intended fit | Reparameterize w=sv and transform λ_z=s²λ | Same raw function across scales; wrong-penalty slope 8/9 retained as a counterexample |
| Claims an IID bound for public squared-loss rows | Name the independent sample, fixed candidate class and bounded loss, or withdraw the bound | Union proof, n=34 and changed n=39, with the clipped/unclipped distinction |
| Calls jitter harmless noise or adds it twice | State training covariance separately from target observation noise | All three conditioning cards, solve residuals and distinct latent/observation variances |
| Treats perfect prediction as a causal effect | Exhibit the two identical observational laws with ATE 0 and 1; state the randomization repair | Correct counterfactual table, assignment expectation proof and transport limit |
| Conditions on every available variable | Recompute the collider table and its −1/9 covariance | Explain which path selection opens and which design would answer the actual target |

Capstone completion requires actual successful execution of the bounded reference, including the full seeded grid and checkpoint/restart comparisons. Save the listing as `data-learning-replay.mjs`, run `node data-learning-replay.mjs > DATA-ADV-execution-receipt.json`, and retain the actual complete JSON stdout receipt with your command, date, Node version and platform/arithmetic. The receipt must contain all 60 cells (20 each for P,C,R), all five initialization keys, both scales and both penalties per case, complete traces/checkpoints, every resumed-transition comparison, the derivative grid and all failure-control results. Each portfolio must identify its own 20-cell subset and interpret its replay and failure controls; the later public reconstruction must retain its actual later execution receipt. An honest non-run declaration records **pending computation**, not capstone completion. Hand calculations, the supplied public models and another person's run cannot replace your execution receipt. Complete the cumulative audit only when all three portfolios also contain their finite derivations, theorem hypotheses and changed proof, conditional model and causal/design boundary. The supplied code and public models make the assignment reviewable; they do not themselves show that a learner executed, understood or independently produced them. Wider infinite-class theory, high-dimensional inference, approximate graphical inference and the full differentiation-engine project need their own courses. This selected advanced course supports the stated scope while preserving those limits.
