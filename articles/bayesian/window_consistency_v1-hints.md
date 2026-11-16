# Hints for reporting window practice

Attempt [practice](./window_consistency_v1-practice.md) before opening a hint. These starting points keep the full calculations on the separate [worked answers](./window_consistency_v1-answers.md) page.

## 1 Finish the half-day calculation

Separate $E[\operatorname{Var}(Y\mid\Lambda)]$ from $\operatorname{Var}[E(Y\mid\Lambda)]$. For distinct intervals only a latent quantity shared between them contributes covariance. For a conditional allocation multiply the two marginal PMFs when they are independent, then divide by the PMF of their sum. For A instead condition on its shared rate before allocating the known total.

## 2 Prove a merge identity rather than matching moments

Given the latent quantities, the PGF of independent Poisson counts is the exponential of a sum. Ask whether to integrate that sum once or to take a product of separate Gamma integrals. Setting two arguments equal combines the associated counts. A reporting subcell inside an original B cell does not receive a new rate merely because it received a new row.

## 3 Forecast after an observed zero

A first-half zero contributes likelihood $e^{-\Lambda/2}$ to A's shared-rate density. Multiply this by the prior density and inspect the power of $\Lambda$ and coefficient in its exponential. For an independent latent increment or independent next-cell rate, that likelihood has no next-interval latent variable in it. Compute the second-half zero probability as a Gamma Laplace transform, with the appropriate exposure.

## 4 Refine the report while keeping the target fixed

For $n$ equal reset cells, each exposure is $1/n$ and each Gamma rate keeps the original shape and rate. Multiply their one-cell PGFs, then take logarithms before sending $n$ to infinity. C changes the shape of an integrated-intensity increment with its duration. A fixed original B day instead makes every reporting subcell depend on that day's one latent rate.

## 5 Transfer to unequal thirds and changed hyperparameters

Use the general moment identities without imposing equal lengths. A's conditional allocation has fixed duration shares; C's rising-factor shapes are proportional to those lengths. For B, cancel only factors that do not depend on the allocation. Enumerate the four possible first-cell counts and normalize their positive weights. Different NB success probabilities obstruct the common-$p$ beta-binomial cancellation.

## 6 Change the scientific unit and the meaning of an event

For the two-day total, A has exposure two applied to one rate, B adds two independent daily NB counts, and C has integrated-intensity shape proportional to duration two. Daily agreement need not determine within-day allocations. In C's logarithmic PGF, use $-\log(1-x)=\sum_{k\ge1}x^k/k$ and identify coefficients of $(z^k-1)$. A batch larger than one is possible at its first-order rate in a short interval. For A, expand the conditional Poisson probability before averaging its finite Gamma moments.
