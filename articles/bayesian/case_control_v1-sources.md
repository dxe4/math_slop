# Sources for fixed outcome sampling and compatible priors

## Core selection and odds

[William Fithian and Trevor Hastie, Local case-control sampling: Efficient subsampling in imbalanced data sets](https://arxiv.org/pdf/1306.3706), Annals of Statistics 42 (2014), 1693–1724. The inspected author PDF has 34 pages. Section 2, PDF page 6, equations 7–10, derives the selected distribution and conditional log-odds shift. Section 2.2, PDF pages 8–9, distinguishes that probability identity from logistic coefficient behavior under misspecification. These passages support the selection-law framework, rather than the numerical construction here.

The existing [binary-outcome chapter](../../books/bayesian/08_glm.md) develops odds, population probability contrasts, noncollapsibility and causal limitations. This additive companion addresses a different data design: outcome totals are fixed, source prevalence is not identified by those totals, and posterior equivalence for an association depends on compatible priors. The engineering labels describe association only.

## Local constructions and study scope

The known probability table, fixed-quota count example, Beta summaries, explicit Gamma coupling, changed-count task and persistent characteristic-dependent ticket selector are derived locally. Their exact numerical results are not taken from either paper. The Gamma construction supplies a direct proof for the stated compatible-prior example; a mismatch obtained by changing only one coordinate prior does not imply that half priors can never be compatible.

Source probability weights are distinct from the later observed characteristic counts. Within-stratum observations use a with-replacement or superpopulation model. The study-time estimates and task progression are unpiloted; these references do not establish instructional effectiveness for this companion.

## Optional compatible priors and symbolic checks

[Simon P. J. Byrne and A. Philip Dawid, Retrospective-prospective symmetry in the likelihood and Bayesian analysis of case-control studies](https://discovery.ucl.ac.uk/id/eprint/1348504/1/Biometrika-2014-Byrne-189-204.pdf), Biometrika 101 (2014), 189–204. The inspected author PDF has 16 pages. Theorem 2 and its discussion, printed pages 194–195, give sufficient conditions for equal posterior odds-ratio laws using a strong hyper Markov joint prior and its induced coordinate priors. Example 7, printed page 196, treats Dirichlet laws for finite tables. The discussion explicitly does not establish an unrestricted converse. These results concern the specified odds-ratio parameter, not equality of full source-population posteriors.

[Wolfram Research, BetaPrimeDistribution documentation](https://reference.wolfram.com/language/ref/BetaPrimeDistribution.html), Properties and Relations, gives Beta-to-odds transformations and a representation through ratios of independent Gamma variables. It also documents `Mean`. For the core posterior, the $a$ odds have BetaPrime$(16,7)$ law and the $b$ inverse odds have BetaPrime$(7,6)$ law, independently. The following optional Wolfram Language verification recipe has expected exact result $56/15$:

```text
Mean[BetaPrimeDistribution[16, 7]] *
  Mean[BetaPrimeDistribution[7, 6]]
```

This is a supplied symbolic-check recipe, not a record of local Mathematica execution. The exact Beta integrals are derived in the lesson and worked answers.

Primary passages inspected 2026-10-20.
