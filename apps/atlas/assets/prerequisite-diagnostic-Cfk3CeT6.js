var e=`---
parent_id: book-probabilistic-graphical-models
matter_id: prerequisite-diagnostic
title: "Prerequisite Diagnostic"
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic

## Conditional probability and support

If a finite joint table has zero probability for an observed event, can its conditional law be computed by the usual ratio? No: the denominator is zero. A different noisy observation model can make the event possible, but that changes the model. Review finite conditional probability before working with evidence factors and messages.

## A shared latent variable

Two fair-marginal alarms are independent given a hidden fair bit, with conditional success probabilities one quarter and three quarters. Are they marginally independent? Their simultaneous-success probability is five sixteenths, exceeding one quarter, so no. Summing out shared latent information can create dependence between observed variables.

## Gaussian conditioning

A centred Gaussian pair has unit marginal variances and correlation rho with magnitude below one. What is its second-coordinate conditional law given the first value a? It is normal with mean rho times a and variance one minus rho squared. Complete the quadratic density or subtract the uncorrelated Gaussian residual. At singular endpoints an ordinary positive density argument needs modification.

## Matrix blocks

Does deleting rows and columns of a precision matrix give the precision of the marginal retained vector? Generally no. It gives the conditional precision given removed coordinates. The marginal precision is a Schur complement. Review block elimination before Chapter 5 if these operations are unfamiliar.

## Likelihood and a parameter distribution

A model normalizes data probabilities for each fixed parameter. Does its likelihood necessarily sum to one across parameter values? No. A prior and evidence normalisation give a Bayesian posterior. The distinction matters when fitting parameters and then conditioning latent states on their fitted values.

## Relative entropy

Why is expected log loss minimized at the true finite distribution? Its excess relative to the truth is divergence from the true law to the prediction, which is nonnegative by Jensen or the log inequality. A zero predicted mass at a positive-probability event gives infinite expected log loss. The direction of divergence is part of the claim.
`;export{e as default};