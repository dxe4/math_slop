
# Boosting: Weighted Errors, Margins and Surrogate Risk

Boosting repeatedly fits a binary rule to reweighted observations and combines the rules into a score. Its training guarantee is an exact potential calculation under a weak-learning assumption. A population guarantee needs a separate complexity or stability argument. This chapter proves both a finite-sample exponential training bound and a fixed-class margin certificate, then derives a population surrogate-to-classification comparison.

Labels and base predictions are minus one or plus one. The original base-rule class is fixed before an iid sample when generalization is discussed. The training-potential identities themselves are deterministic and do not require an iid sample. Preparation is exponential algebra, convexity, the Rademacher and margin chapters, and the distinction between empirical fit and learning.

## The weighted round and its domain

Start with equal probability weights on n training rows and cumulative score zero. At round t choose a base classifier with weighted error epsilon t. When that error lies strictly between zero and one half, assign coefficient
$$\alpha_t=\frac12\log\frac{1-\varepsilon_t}{\varepsilon_t}.$$
Update the cumulative score by adding alpha times the classifier, and multiply each row weight by exp of minus alpha times its signed prediction. Divide by the sum of updated weights to obtain the next probability distribution.

A zero weighted error is a perfect classifier on all positive-weight training rows and can trigger termination; the logarithmic formula would otherwise require an infinite coefficient. Error exactly one half gives coefficient zero and no progress. For error above one half, negating the classifier helps only if that negated rule is allowed. These cases are part of a total algorithm description rather than values to pass blindly into the formula.

The weak-learning assumption used below states that every generated round can supply a classifier with error at most one half minus a fixed gamma strictly between zero and one half. It is an assumption about the supplied rules under the changing weights. It does not follow from calling a procedure a weak learner, and it can fail on contradictory examples.

## The normalizer and an exact potential identity

At one round, correctly classified rows have signed prediction one and incorrect rows minus one. Their total weights are one minus epsilon and epsilon. Hence the normalizer is
$$Z_t=(1-\varepsilon_t)e^{-\alpha_t}
+\varepsilon_t e^{\alpha_t}
=2\sqrt{\varepsilon_t(1-\varepsilon_t)}.$$
The coefficient also minimizes this normalizer over real alpha: differentiating the two exponentials gives equality of the two terms, or arithmetic-geometric mean gives the same minimum. The positive coefficient corresponds to epsilon below one half.

Induction shows that the normalized row weights at the beginning of round t are proportional to exp of minus the signed cumulative score from the earlier rounds. At the first round this holds because all scores vanish. Multiplying by the next exponential and normalizing proves the induction step. Therefore the empirical exponential loss of the cumulative score F after T rounds equals
$$\frac1n\sum_i e^{-Y_iF_T(X_i)}=\prod_{t=1}^T Z_t.$$
Every training mistake has nonpositive signed score under a conservative tie convention and contributes at least one to this sum. The training classification-error fraction is consequently at most the product normalizer.

If every weighted error is at most one half minus gamma, each Z is at most the square root of one minus four gamma squared. The inequality one minus x at most exp of minus x gives
$$\widehat R_{01}(F_T)\le e^{-2\gamma^2T}.$$
This proves decreasing upper control on training error under the stated edge assumption. It is not a theorem that every possible weak-rule class can maintain that edge indefinitely.

### Worked example: one round redistributes the mass

With four equal-weight rows and exactly one wrong prediction, epsilon is one quarter, alpha is half log three and Z is square root three divided by two. After updating, the wrong row has weight one half and each correct row weight one sixth. The round has put equal total mass on the classifier's correct and incorrect sets.

The same rule now has weighted error one half, so repeating it would give zero coefficient rather than another positive edge. Further progress needs a rule that handles the newly emphasized examples differently. This exact calculation explains the reweighting without relying on a graph or an unperformed algorithm run.

### Worked example: a uniform edge gives a sufficient round count

For edge gamma equal to one tenth, the exponential error certificate is exp of minus T divided by fifty. To make it at most one hundredth requires T at least fifty log one hundred, rounded upward. This is a sufficient training-round count provided every one of those rounds meets the edge assumption. It neither estimates the actual error nor replaces the iid sample size in a generalization theorem.

## Normalized margins and a stronger training statement

Let A be the sum of the positive coefficients and form normalized score f equal to F divided by A. It is a convex combination of base predictions and lies between minus one and one. For a fixed positive margin theta, any row whose normalized signed score is at most theta has exponential-loss contribution at least exp of minus theta A. Thus
$$\frac1n\sum_i{\bf1}_{\{Y_if(X_i)\le\theta\}}
\le e^{\theta A}\prod_t Z_t.$$
This bound explains why training error and the normalized margin distribution are related but different summaries. Multiplying all coefficients by a common positive constant leaves the normalized score unchanged.

The edge assumption yields an explicit positive margin range too. Put a equal to half log of one plus twice gamma divided by one minus twice gamma. Every coefficient is at least a. Also the normalizer equals one over hyperbolic cosine of alpha. The ratio log hyperbolic cosine of alpha divided by alpha increases for positive alpha: its derivative has numerator alpha times hyperbolic tangent minus log hyperbolic cosine, whose derivative is alpha divided by hyperbolic cosine squared and is nonnegative. Its value tends to zero at zero.

Consequently each negative log normalizer is at least r times alpha, where r equals log hyperbolic cosine of a divided by a and is positive. The displayed margin fraction is at most exp of minus r minus theta times A, with parentheses around the difference: $\exp\{-(r-\theta)A\}$. For theta strictly below r, and A at least T a, it decays exponentially in T. This is a full empirical margin result under the same persistent-edge condition, not an assertion about an arbitrary noisy sample.

## A fixed-class population margin certificate

The convex hull of a fixed score class has the same empirical Rademacher complexity as the original class. For each sign vector, a linear signed sum at a convex combination cannot exceed the supremum over its members; inclusion gives the reverse inequality. This equality holds before averaging the signs.

Apply the ramp loss at a fixed positive theta to the signed normalized score. Sign multiplication by the observed labels preserves the law of the independent Rademacher signs. Lipschitz contraction and the empirical-complexity theorem therefore give, simultaneously over every convex combination of the fixed base class,
$$R_{01}(f)\le\frac1n\sum_i\phi_\theta(Y_if(X_i))
+\frac{2\widehat{\mathfrak R}_S(H)}{\theta}
+3\sqrt{\frac{\log(3/\delta)}{2n}}.$$
For a finite base class of size M, its evaluation vectors have norm at most square root n, so complexity is at most the square root of twice log M divided by n. This supplies a fully proved finite-base-class certificate.

The ensemble can be selected adaptively from training because the theorem covered the entire fixed convex hull. The number of boosting rounds does not appear as a separate parameter count in this particular class bound. It still affects training margins, computation and possibly other algorithm-dependent quantities. Adding new base features after seeing assessment outcomes changes the original class and requires its own accounting. Selecting theta from a prespecified grid uses the simultaneous margin-scale allocation proved earlier.

## Exponential loss has a precise conditional target

At conditional success probability eta strictly between zero and one, the exponential risk of a real score s is
$$L_\eta(s)=\eta e^{-s}+(1-\eta)e^s.$$
Its minimum is twice the square root of eta times one minus eta by arithmetic-geometric mean, attained when the two terms are equal. The optimal score is half the log posterior odds. At eta zero or one the infimum is zero, approached by an infinite signed score rather than attained by a finite one.

This establishes a population surrogate target. Minimizing empirical exponential loss over a chosen ensemble is another optimization problem, and its score need not equal the population log odds without generalization and approximation conditions. A decreasing training product alone cannot identify conditional probabilities.

## A complete surrogate-to-classification regret bound

Let the classification decision be the sign of s, predicting plus at zero. Conditional classification regret relative to a Bayes decision is absolute value of twice eta minus one when the decision is wrong and zero otherwise. On a wrong side, the best possible exponential risk is at least one, its value at score zero: the unconstrained optimum lies on the other side and convexity makes the wrong-side infimum occur at the boundary.

The conditional exponential excess is therefore at least
$$1-2\sqrt{\eta(1-\eta)}
=1-\sqrt{1-(2\eta-1)^2}
\ge\frac12(2\eta-1)^2.$$
The final inequality follows by squaring or from square-root concavity. Thus squared conditional classification regret is at most twice conditional exponential excess. Integrate, then use Cauchy–Schwarz to obtain
$$R_{01}(s)-R_{01}^*
\le\sqrt{2\{R_{\exp}(s)-R_{\exp}^*\}}.$$
The exponential infimum is the expected pointwise value above; finite surrogate risk supplies the required integrability. This is a one-way population comparison, not equality of losses or a finite-sample statement by itself.

### Worked example: contradictory duplicate labels violate weak learning

Suppose two equal-weight training rows have identical inputs and opposite labels. Any deterministic base classifier gives them the same prediction, so its weighted error is one half. No positive edge exists on this initial distribution. The exponential bound's premise therefore fails, regardless of how many rounds are requested.

A positive-penalty convex method may still return a compromise score, but it cannot create a strict separator for these observed constraints. Population noise and contradictory records are reasons to examine the weak-learning assumption rather than interpret failure of that assumption as a refutation of the potential identity.

The chapter's guarantees are therefore separate but connected: exact training algebra, an empirical margin consequence, a population complexity certificate and a population surrogate regret inequality. Each can be used only with the experiment and class conditions proved for it.

## The row-weight change has an exact relative-entropy meaning

At an interior weighted round every training row has positive weight before and after the update. The logarithm of the new-to-old weight ratio is minus alpha times that row's signed prediction minus log Z. Under the new distribution the weighted error of this same classifier equals one half, as the normalizer calculation shows. Its mean signed prediction is therefore zero. Taking the new-weight expectation proves
$$\operatorname{KL}(D_{t+1}\|D_t)=-\log Z_t.$$
This gives another exact interpretation of progress: the decrease in log empirical exponential loss equals the divergence from the old row allocation to the new one.

Reversing the divergence uses the old mean signed prediction, equal to one minus twice epsilon. It yields
$$\operatorname{KL}(D_t\|D_{t+1})
=\alpha_t(1-2\varepsilon_t)+\log Z_t.$$
Both expressions are nonnegative, as relative entropy requires, but they generally differ. This asymmetry is a useful reminder that divergence is not a distance with interchangeable arguments.

Summing the first identity gives total log-potential decrease, not divergence between the final and initial row distributions. Relative entropy does not obey an additive path-length identity. The interpretation also concerns probability weights on the finite training rows. It does not make those weights the scientific target population, a posterior over hypotheses or a sampling distribution of independent new observations.

The original row distribution is uniform, while later allocations can concentrate on examples that remain difficult under the current ensemble. Those examples might be useful boundary cases, mislabeled records or genuine irreducible noise. The weight identity itself does not decide which explanation is true. It quantifies a computational fitting allocation under the supplied labels; a population interpretation still needs the class and observation assumptions stated earlier.

These entropy formulas apply to the finite interior update. At zero error the declared termination rule avoids an infinite coefficient, and at error one half both distributions agree and both divergences vanish. Thus the endpoint cases match the algorithm's explicit domain rather than being hidden in a limiting numerical evaluation. The potential and relative-entropy identities describe training progress, while margins and surrogate regret connect it to population guarantees under their separate assumptions. The next chapter, PAC-Bayes, assigns probability weights to predictors using a fixed prior, rather than reweighting training rows.

## Exercises

<a id="boosting-ex-1"></a>

### Exercise 1

Derive the optimal normalizer for one weighted round.

<details><summary>Hint 1</summary>

Split the weight into correct and incorrect sets.

</details>

<details><summary>Hint 2</summary>

Balance their two exponential terms.

</details>

<details><summary>Full solution</summary>

The sum is $(1-\varepsilon)e^{-\alpha}+\varepsilon e^\alpha$. Its two terms are equal at $\alpha=\frac12\log((1-\varepsilon)/\varepsilon)$, giving $2\sqrt{\varepsilon(1-\varepsilon)}$. This is finite for interior epsilon.

</details>

<a id="boosting-ex-2"></a>

### Exercise 2

Prove the cumulative exponential-loss product identity.

<details><summary>Hint 1</summary>

Use induction for the normalized row weights.

</details>

<details><summary>Hint 2</summary>

Each new normalizer multiplies the previous unnormalized average.

</details>

<details><summary>Full solution</summary>

The row weight before a round is proportional to $e^{-Y_iF_{t-1}(X_i)}$. Updating multiplies this by $e^{-\alpha_tY_ih_t(X_i)}$. Its normalizer is the ratio of the new and old empirical exponential averages. Multiplying these ratios telescopes from initial average one to the final product.

</details>

<a id="boosting-ex-3"></a>

### Exercise 3

Why does exponential loss upper-bound training classification error?

<details><summary>Hint 1</summary>

Every error has nonpositive signed score.

</details>

<details><summary>Hint 2</summary>

Its exponential contribution is at least one.

</details>

<details><summary>Full solution</summary>

For a genuine misclassification, the signed score is nonpositive and exp of its negative is at least one. At a correctly classified tie the exponential may still contribute one, which is conservative. Summing indicators and dividing by n proves the upper bound.

</details>

<a id="boosting-ex-4"></a>

### Exercise 4

State what to do at weighted error zero or one half.

<details><summary>Hint 1</summary>

The logarithmic coefficient has different endpoint behavior.

</details>

<details><summary>Hint 2</summary>

A perfect rule need not be assigned an infinite stored coefficient.

</details>

<details><summary>Full solution</summary>

Zero error permits termination on the positive-weight training support; the formula would otherwise diverge. At one half, coefficient zero produces no progress. A total algorithm must declare these cases rather than evaluate the interior formula blindly.

</details>

<a id="boosting-ex-5"></a>

### Exercise 5

Compute the next error of the same base rule after its optimal interior update.

<details><summary>Hint 1</summary>

Its erroneous set receives epsilon times exp alpha before normalization.

</details>

<details><summary>Hint 2</summary>

At the optimal alpha the correct and wrong masses match.

</details>

<details><summary>Full solution</summary>

The next wrong mass is one half, as is the total correct mass. Repeating that identical rule therefore gives no new positive edge. Reweighting seeks a rule that improves on the emphasized distribution, not repeated multiplication of one rule indefinitely.

</details>

<a id="boosting-ex-6"></a>

### Exercise 6

Prove convex-hull preservation of empirical score complexity.

<details><summary>Hint 1</summary>

The signed evaluation sum is linear in mixing weights.

</details>

<details><summary>Hint 2</summary>

A convex average cannot exceed its largest constituent value.

</details>

<details><summary>Full solution</summary>

For every sign vector, the supremum over convex combinations equals the supremum over original members. Taking sign expectation preserves equality. A nonlinear loss is handled afterward through the stated Lipschitz contraction, not by treating its values as linear combinations automatically.

</details>

<a id="boosting-ex-7"></a>

### Exercise 7

Derive the empirical normalized-margin tail bound.

<details><summary>Hint 1</summary>

On a small-margin row the unnormalized score is at most theta A.

</details>

<details><summary>Hint 2</summary>

Apply Markov’s elementary indicator comparison to its exponential.

</details>

<details><summary>Full solution</summary>

The small-margin indicator is at most exp of theta A times exp of minus the signed cumulative score. Averaging gives the factor exp theta A times the product normalizer. A positive theta and coefficient normalization are part of the definition.

</details>

<a id="boosting-ex-8"></a>

### Exercise 8

Find the conditional optimal exponential score at eta equal to four fifths.

<details><summary>Hint 1</summary>

Use half the log odds.

</details>

<details><summary>Hint 2</summary>

The odds are four.

</details>

<details><summary>Full solution</summary>

The score is $\frac12\log4=\log2$. The two risk terms are $(4/5)/2=2/5$ and $(1/5)2=2/5$, giving minimum conditional exponential risk four fifths. The Bayes classification decision is positive.

</details>

<a id="boosting-ex-9"></a>

### Exercise 9

Explain the last step of the surrogate regret inequality.

<details><summary>Hint 1</summary>

First bound squared conditional classification regret.

</details>

<details><summary>Hint 2</summary>

Then integrate and apply Cauchy–Schwarz.

</details>

<details><summary>Full solution</summary>

Wrong-side conditional excess gives the square bound by twice exponential excess. Correct-side classification regret is zero. The mean classification regret is at most the square root of its second moment, giving the square root of twice the integrated exponential excess. This requires a finite surrogate risk or an extended trivial bound.

</details>

<a id="boosting-ex-10"></a>

### Exercise 10

Does persistent training edge alone establish a population strong-learning guarantee?

<details><summary>Hint 1</summary>

The product identity is deterministic on observed rows.

</details>

<details><summary>Hint 2</summary>

A sampling and complexity bridge is still needed.

</details>

<details><summary>Full solution</summary>

No. Persistent edge yields training error and margin statements. Population performance additionally needs an iid or other declared observation model and a valid class or algorithm theorem. The fixed-base-class margin certificate supplies one such bridge under its explicit assumptions; the training score alone does not.

</details>
