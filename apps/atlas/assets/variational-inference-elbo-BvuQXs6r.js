var e=`---
parent_id: book-probabilistic-graphical-models
chapter_id: variational-inference-elbo
title: "Variational Inference and the ELBO"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Variational Inference and the ELBO

## A restricted probability family changes the inference problem

Exact elimination can be too costly for the chosen graph and state cardinalities. Variational inference replaces a difficult target distribution by a member of a tractable family, selected by an optimisation criterion. The target remains the specified posterior. Restricting the approximating family does not change that target; it introduces an approximation that must be distinguished from numerical optimisation error and from model misspecification.

This chapter expands the variational section and Ising exercise of the retained [Exact and Approximate Inference](../structured-probabilistic-learning/exact-and-approximate-inference.md). The old exercise and its solution remain intact. We derive the evidence lower bound, coordinate updates and their actual convergence conclusions, then compare a Gaussian product approximation with exact conditional calculations.

For the finite-state derivations let $w(z)=p(y,z)$ be a nonnegative joint weight at the fixed observations, with finite positive sum $Z=p(y)$. The posterior is $p_*(z)=w(z)/Z$. An approximating distribution q must have total mass one. Use zero times log zero equal to zero. If q assigns positive mass to a zero-weight configuration, its reverse relative entropy is infinite and its lower bound is minus infinity. Such support incompatibility is a mathematical fact rather than an optimisation inconvenience to be hidden.

## The exact ELBO identity

**Definition 8.1 (Evidence lower bound).** Define the evidence lower bound by
$$
\\mathcal L(q)=\\sum_zq(z)\\log w(z)-\\sum_zq(z)\\log q(z).
$$
**Proposition 8.2 (Exact evidence-divergence identity).** For any support-compatible q, substituting the normalised posterior gives
$$
\\log Z=\\mathcal L(q)+D(q\\|p_*).
$$
This is an algebraic identity, not an approximation. Relative entropy is nonnegative by the log inequality or Jensen, so the bound is at most log evidence. Equality holds exactly when q is the posterior. If the approximation family excludes that posterior, the best bound is strictly below log evidence whenever a minimizer exists with positive divergence.

Jensen gives another proof of the lower bound. Under q, the expectation of the importance ratio w over q is the total weight on q's support, at most Z. The expected log ratio is the lower bound, which does not exceed the log of that expectation. This proof also reveals why ignoring posterior mass outside the support of q need not be penalized as severely as assigning q mass where the target is zero. The direction of relative entropy matters.

For continuous latent variables, replace the sums by integrals with respect to a specified common dominating measure. The identity requires the corresponding absolute-continuity and integrability conditions, or a careful extended-integral interpretation. One cannot subtract two independently infinite entropy terms and call their difference a finite lower bound. The Gaussian calculations below have finite moments and log densities, so their integrals are legitimate.

## Product mean field and coordinate optimization

**Proposition 8.3 (Exact mean-field coordinate update).** Take a product family $q(z)=\\prod_jq_j(z_j)$ and assume for now that w is strictly positive on the finite state space. Hold every factor except one fixed. Terms not depending on the chosen factor are constants. The relevant part of the objective is
$$
\\sum_{z_j}q_j(z_j)h_j(z_j)-\\sum_{z_j}q_j(z_j)\\log q_j(z_j),\\qquad
h_j(z_j)=E_{q_{-j}}\\log w(z).
$$
Normalize $r_j(z_j)\\propto\\exp h_j(z_j)$. The displayed objective is its log normalizer minus $D(q_j\\|r_j)$. Therefore the unique coordinate maximizer is r j, and the improvement from replacing the old coordinate by it is exactly $D(q_j^{\\mathrm{old}}\\|r_j)$. This proves both the update equation and monotonicity for an exact coordinate step.

The expectation is of the log joint, not the log of its expectation. Interchanging them would give a different update. Factors in the log joint that omit the chosen variable contribute constants and can be discarded from its normalised update. Graph structure therefore makes the coordinate computation local in the model's factor scopes, although the resulting approximating independence is a restriction imposed by q rather than a property proved for the posterior.

If zeros occur in w, expected log weights can be minus infinity for some coordinate values. A coordinate update can still be derived on its feasible support when its normalizer is positive and finite, but deterministic constraints can make a fully factorized family incapable of covering multiple posterior configurations coherently. Structured variational families can retain blocks or dependencies to handle such cases. Strict positivity in the finite theorem above is a deliberate simplifying assumption, not a conclusion about arbitrary constrained graphs.

## What exact coordinate ascent converges to

Every exact step increases or preserves the lower bound, and the bound is bounded above by log evidence. Hence the sequence of objective values converges. This alone does not establish convergence of the parameter sequence, global optimality, or equality with the posterior.

There is a useful stronger finite-state conclusion under the strict positivity assumed above. The finitely many log weights have common finite upper and lower bounds. Each coordinate update therefore assigns every state probability bounded away from zero by a fixed positive constant depending on these bounds and its cardinality. After one complete sweep, all iterates lie in a compact interior subset of the product simplices. The update maps and the objective are continuous there.

Consider a cluster point of the complete-sweep iterates. The objective difference across the next sweep tends to zero because the objective sequence converges. Continuity makes that same sweep have zero total improvement at the cluster point. Each coordinate improvement is nonnegative and equals a relative entropy, so every coordinate update must leave its factor unchanged. The cluster point is coordinate-stationary. This argument establishes a statement about cluster points, without claiming there is only one or that it is a global maximum. Initialization can select different stationary points.

Approximate coordinate expectations, damped steps, stochastic gradients and numerical solvers have different iteration guarantees. A familiar algorithm name does not transfer this exact-step proof to them. In particular a small numerical change in the objective does not upper-bound the gap to the unrestricted posterior or even the best member of the family.

## Worked example 1: mean field can break a true symmetry

**Example 8.4 (mean field can break a true symmetry).** For two signs with posterior proportional to $\\exp(Jx_1x_2)$ and positive J, parameterize each independent approximate sign by its mean m one or m two. The product objective is the coupling J times their product plus the sum of their binary entropies, minus any observation-independent normalising convention. Coordinate maximization gives
$$
m_1=\\tanh(Jm_2),\\qquad m_2=\\tanh(Jm_1).
$$
At a fixed point strict monotonicity forces the two means to be equal: if the first were larger, applying the two equations would reverse that inequality and contradict it. At J equal to two, the common mean solves $m=\\tanh(2m)$. Zero is a solution. On the positive half-interval the difference between the right side and m has positive derivative at zero, strictly decreasing derivative, and negative value at one. It therefore has exactly one positive root. Odd symmetry gives exactly one negative root as well, approximately plus and minus .9575 as in the retained solution.

The exact posterior has zero singleton means by simultaneous sign-flip symmetry. The two nonzero variational solutions select one of the two preferred aligned configurations and do not preserve that symmetry. The zero fixed point remains unchanged under exact zero initialization, even though it is unstable to generic small same-sign perturbations of the coordinate iteration. A stationary solution is therefore neither automatically globally optimal nor automatically qualitatively faithful to the target.

## Worked example 2: reverse-KL Gaussian mean field underestimates marginal variance

**Example 8.5 (reverse-KL Gaussian mean field underestimates marginal variance).** Let the target be a nonsingular Gaussian with mean mu and precision Q, and restrict q to independent Gaussian coordinates with means m and positive variances d i. Direct Gaussian integration gives
$$
D(q\\|p_*)=\\frac12\\{\\operatorname{tr}(QD)+(m-\\mu)^TQ(m-\\mu)-d+\\log\\det\\Sigma-\\log\\det D\\},
$$
where D is the diagonal variance matrix and d the dimension. Positive definiteness makes the mean term uniquely smallest at m equal to mu. Each variance term is $Q_{ii}d_i-\\log d_i$, uniquely minimized at $d_i=1/Q_{ii}$. This proves the optimum within the stated product-Gaussian family.

For a two-coordinate target with unit marginal variances and correlation rho of magnitude less than one, both approximate variances are one minus rho squared. The actual marginal variances remain one. Thus reverse-KL mean field reproduces the mean but uses the smaller conditional variances, discarding correlated uncertainty. Its divergence gap is minus one half log one minus rho squared, which grows without bound as absolute correlation approaches one.

This is an explicit example, not a theorem that every variational family always underestimates every variance. Another family or objective can behave differently. Nor does matching the target mean imply correct decisions for every loss, tail probability or correlated event. State which posterior functional is being approximated and assess the approximation for that functional.

## Structured approximations and exact families

A product over larger blocks can represent dependencies within each block. If one family contains another, its optimal lower bound is at least as large, since it optimizes over more distributions. That comparison assumes the global optimum in each family; an inferior numerical local optimum in the larger family can yield a smaller achieved bound.

If the variational family contains the true posterior, the global optimum has zero divergence and the method is exact as a variational characterization. Whether an algorithm finds it is still a separate question. Tree-structured variational distributions can be evaluated using the same exact message passing developed in Chapter 6, allowing a richer tractable family than independent coordinates. The factorization of q should be written separately from the factorization of the target.

An expectation parameterization can make an entropy expression simpler without making the global product-family problem convex. The Ising example already exhibits multiple stationary points. Convexity in one coordinate, or strict concavity of its individual update, does not imply joint concavity in all coordinates. That logical distinction is the difference between a coordinate optimum and an unrestricted solution.

## Worked example 3: a support constraint creates a finite approximation gap

**Example 8.6 (a support constraint creates a finite approximation gap).** Let the target put equal mass on the two equal-bit configurations and zero on the unequal ones. A product distribution assigning positive probability to both values of each coordinate necessarily puts positive mass on an unequal configuration, giving infinite reverse relative entropy. A feasible finite-divergence product must instead concentrate on one of the two equal configurations.

Either point mass has divergence log two from the target, so the best product lower bound is log evidence minus log two. The full correlated target would attain equality, and a single two-variable variational block can represent it. This example shows a family-level obstruction before any optimisation starts. Adding a tiny positive target probability to forbidden states changes the model and the finite objective landscape; it is not merely a way to evaluate the original infinite divergence.

## Forward and reverse divergence answer different approximation questions

Minimizing $D(p_*\\|q)$ over a product family gives the product of the target marginals, provided the cross-entropy terms are well defined. Expand the divergence: its q-dependent part is the sum of expectations under each target marginal of minus log q j. Each is minimized at that target marginal by nonnegativity of relative entropy. This forward-divergence product therefore matches all singleton marginals, unlike the reverse-divergence optimum in the correlated Gaussian example.

The forward objective can be difficult because it requires expectations under the target that inference was meant to compute. Reverse divergence leads to tractable expectations under q and an evidence lower bound, which explains its popularity, but tractability does not make the two objectives equivalent. Neither direction supplies a universal guarantee for all downstream decisions.

The achieved lower bound can compare two approximations to the same evidence with the same model and base measure. Comparing bounds from different models is more delicate: unequal variational gaps can reverse their evidence ordering. A larger bound for one model does not prove that its exact evidence exceeds another's unless additional upper or gap information supports that conclusion.

## Optimization error, approximation error and modelling error

An exact maximizer of the restricted objective still leaves family approximation error unless the posterior belongs to that family. An imperfect optimizer adds another discrepancy. Both are conditional on the chosen joint model. Changing the graph, likelihood, prior or observation mechanism changes the target and is a third issue rather than another optimisation tolerance.

Useful checks therefore ask distinct questions: whether the update algebra is correct for the stated family, whether the achieved point satisfies the intended optimisation criterion, how key expectations differ from a richer or exact reference when one is available, and how conclusions change under plausible model alternatives. A converged lower bound answers at most part of that list. In the next chapters, sampling and latent-variable learning offer different tools, with their own assumptions and limits.

## Exercises

<a id="variational-inference-elbo-ex-1"></a>

### Exercise 1

Derive the ELBO identity by substituting the posterior normalisation.

<details><summary>Hint 1</summary>

Write log posterior as log weight minus log evidence.

</details>

<details><summary>Hint 2</summary>

Expand the definition of relative entropy.

</details>

<details><summary>Full solution</summary>

The divergence is the q-expectation of log q minus log weight plus log evidence. Since q sums to one, the last term is exactly log evidence. Rearranging yields log evidence equal to the lower bound plus divergence. This requires q to respect target support and the terms to be finite or interpreted consistently; assigning q mass to target zeros gives infinite divergence.

</details>

<a id="variational-inference-elbo-ex-2"></a>

### Exercise 2

When does the lower bound equal log evidence?

<details><summary>Hint 1</summary>

Use the equality condition for relative entropy.

</details>

<details><summary>Hint 2</summary>

Compare q with the full posterior.

</details>

<details><summary>Full solution</summary>

The difference is the nonnegative relative entropy from q to the posterior. It is zero exactly when the two probabilities agree. A restricted family that excludes the posterior cannot attain equality. Reaching a stationary point of its objective does not establish that equality or even the best bound available in the family.

</details>

<a id="variational-inference-elbo-ex-3"></a>

### Exercise 3

Why is the coordinate update an exponential of an expected log weight?

<details><summary>Hint 1</summary>

Hold other factors fixed in the objective.

</details>

<details><summary>Hint 2</summary>

Rewrite the resulting entropy-regularized linear objective as minus a divergence.

</details>

<details><summary>Full solution</summary>

With the other factors fixed, the log-weight term is linear in the chosen factor with coefficient equal to its expected log weight under the others. Adding that factor entropy gives a log normalizer minus divergence to the normalised exponential coefficient. The divergence is uniquely minimized at that normalised exponential. Taking log after an expectation would be a different coefficient and does not follow from this objective.

</details>

<a id="variational-inference-elbo-ex-4"></a>

### Exercise 4

What convergence is guaranteed just by monotonicity and an upper bound?

<details><summary>Hint 1</summary>

Apply monotone convergence for a bounded sequence of real objective values.

</details>

<details><summary>Hint 2</summary>

Do not replace objective values by parameters.

</details>

<details><summary>Full solution</summary>

The scalar lower-bound values converge because they increase and never exceed log evidence. This alone says nothing about uniqueness or convergence of the parameter sequence, global optimality, or the gap to the target posterior. Additional finite positive-state continuity gives coordinate-stationary cluster points, as proved in the chapter, which is still a weaker conclusion than global exactness.

</details>

<a id="variational-inference-elbo-ex-5"></a>

### Exercise 5

Why are the finite positive-state update factors uniformly away from zero?

<details><summary>Hint 1</summary>

Bound every log weight between its global finite minimum and maximum.

</details>

<details><summary>Hint 2</summary>

Bound the exponential normalizer by cardinality times its largest term.

</details>

<details><summary>Full solution</summary>

Each expected log weight lies between those same finite bounds. Its exponential is therefore bounded below by the exponential minimum, while the coordinate normalizer is bounded above by its state count times the exponential maximum. Their ratio supplies one positive lower bound for every updated coordinate probability. This supports compactness inside the simplex after a full sweep.

</details>

<a id="variational-inference-elbo-ex-6"></a>

### Exercise 6

For a correlated unit-variance Gaussian pair, find the reverse-KL product-Gaussian variances.

<details><summary>Hint 1</summary>

The optimal variance is inverse diagonal precision.

</details>

<details><summary>Hint 2</summary>

Invert the two-by-two target covariance.

</details>

<details><summary>Full solution</summary>

The target precision diagonal is $1/(1-\\rho^2)$. Thus each approximate independent variance is $1-\\rho^2$, while each true marginal variance is one. The approximation matches the target mean but discards correlation and reduces those variances. Positive definiteness requires absolute rho strictly below one; the singular endpoint is outside this derivation.

</details>

<a id="variational-inference-elbo-ex-7"></a>

### Exercise 7

Why does the equal-bit target force a feasible reverse-KL product to be a point mass?

<details><summary>Hint 1</summary>

Any positive probabilities for both values create unequal pairs.

</details>

<details><summary>Hint 2</summary>

Target zeros prohibit positive approximate mass there.

</details>

<details><summary>Full solution</summary>

If both product coordinates are nondegenerate, both unequal configurations have positive approximate probability. Even if only one coordinate is nondegenerate, it creates one forbidden unequal pair. To respect the target support, both must be deterministic at the same bit value. Either permitted point mass has divergence log two from the fair equal-bit target, proving the unavoidable product-family gap.

</details>

<a id="variational-inference-elbo-ex-8"></a>

### Exercise 8

Derive the forward-divergence optimum over products.

<details><summary>Hint 1</summary>

Expand the q-dependent cross-entropy.

</details>

<details><summary>Hint 2</summary>

Each term depends only on one target marginal.

</details>

<details><summary>Full solution</summary>

The q-dependent objective is the sum over coordinates of the target-marginal expectation of minus log q j. Each term equals that marginal entropy plus divergence from the marginal to q j. Nonnegativity minimizes it at the true marginal. Their product is therefore the forward-divergence optimum, under the stated integrability conditions, and differs in general from reverse-KL mean field.

</details>

<a id="variational-inference-elbo-ex-9"></a>

### Exercise 9

Why can a richer variational family achieve a worse reported bound in practice?

<details><summary>Hint 1</summary>

Distinguish its optimal bound from a computed local solution.

</details>

<details><summary>Hint 2</summary>

Containment compares global optima only.

</details>

<details><summary>Full solution</summary>

A larger family contains every distribution in the smaller one, so its global maximum cannot be worse. A numerical algorithm can nevertheless stop at an inferior local point or use an inaccurate objective evaluation. Its achieved value need not reach even the best smaller-family value. The family comparison is mathematical; the solver output requires its own optimisation assessment.

</details>

<a id="variational-inference-elbo-ex-10"></a>

### Exercise 10

Does a larger ELBO across two models prove larger exact evidence?

<details><summary>Hint 1</summary>

Each model has its own nonnegative variational gap.

</details>

<details><summary>Hint 2</summary>

Those gaps need not be equal.

</details>

<details><summary>Full solution</summary>

Each exact log evidence equals its bound plus its own divergence gap. A model with a lower achieved bound may have a much larger gap and a larger exact evidence. Without upper bounds or controlled gaps, ordering the lower bounds alone does not order the exact evidences. Using the same approximation method does not make their gaps identical.

</details>
`;export{e as default};