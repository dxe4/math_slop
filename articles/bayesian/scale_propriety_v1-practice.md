# Practice with scale priors and normalization

Keep population location zero and observation-noise variance one unless a task explicitly changes them. State the measure for every density. Derive the likelihood or an integral comparison before using a numerical answer.

## 1 Change the data and inspect both endpoints

Three groups give $y=(-1,0,2)$. Write their integrated likelihood as a function of $\tau$. Determine all real powers $k$ for which a prior kernel $\tau^k$ yields a proper posterior. For the constant-in-scale prior, determine whether $E(\tau\mid y)$ and $E(\tau^2\mid y)$ exist. Explain whether the nonzero observed spread changes the lower-end failure of the log-uniform prior.

## 2 Complete a cutoff calculation

Return to the two-zero-observation fixture. Use a log-uniform prior on $[10^{-4},1]$. Derive $Z$, $\Pr(\tau>0.1\mid y)$, $E(\tau^2\mid y)$ and $E(w\mid y)$. Report six-decimal approximations and retain the formulas. Give the variances of a new group's latent effect, an existing group's latent effect, and a future noisy reading in each case. Explain why none of these variances alone supplies an exact 95% Normal prediction interval.

## 3 Distinguish a finite prior from an improper limit

For the same fixture and fixed upper bound one, prove that $\Pr(\tau>\delta\mid y)\to0$ as $\epsilon\downarrow0$ for every fixed $0<\delta<1$. Derive the finite prior's $E(\tau^2)$ before observing any data and its limit. Explain both statements: every finite-cutoff posterior is proper, but the limiting positive-line kernel is improper. If the support is enlarged to include zero, what type of limiting distribution is possible?

## 4 Compare a different proper prior

Use a Uniform$(0,1)$ prior in scale for the two-zero fixture. Normalize its posterior, derive $E(\tau^2\mid y)$ and $E(w\mid y)$ by integration, and derive the prior-predictive and posterior-predictive variance for a noisy reading in a new group. Contrast with task 2. Why is selecting the smaller posterior variance not a general method for choosing a prior?

## 5 More groups and a proper heavy tail

Four groups all give zero. Use the improper constant-in-scale prior on the entire positive line. Derive the normalized posterior density; show that $E(\tau)=2/\pi$, $E(\tau^2)=1$, and $\Pr(\tau>1)=1/2-1/\pi$. Which positive moments exist? Explain why the corresponding new-group predictive distribution has finite variance but is not established to be Normal. Then replace the observations by $(-1,-1,1,1)$: which propriety and moment conclusions remain valid without evaluating a new normalizer?

## 6 Units and a misleading report

The known observation-noise standard deviation is now two physical units. Two observations are zero and the log-uniform physical-scale prior is $\tau\in[0.02,2]$. Standardize the model, find $\Pr(\tau>0.2\mid y)$ by comparison with the unit-noise fixture, and express the new-group predictive observation variance in physical units. What changes if a program keeps the numeric cutoff $0.01$ after changing physical units instead of transforming it?

A separate analyst proposes an unbounded log-uniform prior and reports four stable-looking chains that were actually constrained to $[10^{-6},1]$. They say more draws make this the exact posterior of the unbounded model. Write a short correction naming the fitted model, its normalization status, the unbounded model's failure, and one meaningful sensitivity calculation. No unseen traces or diagnostics are supplied; do not invent them.
