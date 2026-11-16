# Sources for fitted predictive checks and conditional calibration

## Posterior replication and interpretation

[Andrew Gelman, Xiao-Li Meng and Hal Stern, Posterior predictive assessment of model fitness via realized discrepancies](https://sites.stat.columbia.edu/gelman/research/published/A6n41.pdf), Statistica Sinica 6 (1996), 733–807. The inspected author PDF has 76 pages including discussion. Section 2.1, printed pages 737–738, equations 2–5, defines posterior predictive reference distributions and allows auxiliary statistics to be held fixed. This supplies the replication framework; the Bernoulli fixtures here are local constructions.

[Andrew Gelman, Two simple examples for understanding posterior p-values whose distributions are far from uniform](https://sites.stat.columbia.edu/gelman/research/published/ppc_understand3.pdf), Electronic Journal of Statistics 7 (2013), 2595–2602, DOI 10.1214/13-EJS854. The inspected author PDF has eight pages. Section 3, printed pages 2597–2598, distinguishes a posterior predictive event probability from a statistic with uniform sampling distribution. The examples and discussion emphasize purpose when judging a diagnostic. We do not infer that all such tails are conservative at every fixed parameter or that nonuniformity invalidates their event-probability interpretation.

## Sufficient-total conditioning and error control

[M. J. Bayarri and James O. Berger, P Values for Composite Null Models](https://sta702-f23.github.io/website/reading/Bayarri-Berger-2000.pdf), Journal of the American Statistical Association 95 (2000), 1127–1142. The inspected university-course copy of the published paper has 17 PDF pages including its cover; [Berger's Duke author page](https://www2.stat.duke.edu/~berger/papers/98-40.html) also identifies the work. Printed page 1127, equation 3, describes sufficient-statistic similar p-values; printed page 1128, equations 6–7, defines posterior predictive checking. Printed pages 1130–1132, equations 10–13, and the conclusion on page 1140 place similar p-values within the general $U$-conditional predictive class. Our sufficient-total calculation is that elementary special case. It does not implement the paper's particular conditional-MLE choice or partial-posterior method. The finite discrete weak-tail inequality is proved locally rather than inferred from a continuous-uniformity theorem.

Will Fithian's Berkeley Stat 210A university notes on [sufficiency](https://stat210a.berkeley.edu/fall-2025/reader/sufficiency.html), [conditional testing](https://stat210a.berkeley.edu/fall-2025/reader/testing-nuisance.html#conditional-testing), and [super-uniformity](https://stat210a.berkeley.edu/fall-2025/reader/testing-interpretation.html#super-uniformity) support the parameter-free conditional-reference and repeated-sampling frameworks. The lesson supplies its own finite counting proof, including the discrete and degenerate cases.

## Local constructions and course boundary

The two-by-two Bernoulli example, nine-pair tables, full sixteen-dataset fitted-tail law, fixed-parameter versus prior-averaged comparison, randomized-tail calculations, and changed three-and-seven task are derived locally. Their numerical identities are not examples attributed to these papers. The changed task requires a new proportion contrast and new event enumeration, and lies outside the explorer.

The existing [model-checking chapter](../../books/bayesian/10_model_checking.md) already explains posterior replication and nonuniform predictive tails; the [robustness chapter](../../books/bayesian/11_robustness.md) and the course's calibration material develop other calibration questions. This companion derives the sampling law of a data-dependent fitted check rather than introducing PPC or simulation-based calibration again. Study progression is unpiloted; these mathematical references do not establish instructional effectiveness.

## Optional exact Wolfram Language recipe

[Wolfram Research, Beta documentation](https://reference.wolfram.com/language/ref/Beta.html), Basic Examples and Function Representations, documents exact evaluations and the Euler beta function. The following optional recipe expresses the two main reference probabilities as finite exact sums. It is supplied for independent symbolic checking; it is **not a record of Mathematica execution**.

```text
{
 Sum[
  If[Abs[x - z] >= 2,
   Binomial[2, x] Binomial[2, z] *
    Beta[3 + x + z, 7 - x - z]/Beta[3, 3], 0],
  {x, 0, 2}, {z, 0, 2}],
 Sum[
  If[Abs[2*x - 2] >= 2,
   Binomial[2, x] Binomial[2, 2 - x]/Binomial[4, 2], 0],
  {x, 0, 2}]
}
```

The expected exact result is `{2/21, 1/3}`. No software is required to reproduce the factorial calculations in the lesson and answers.

Primary passages inspected 2026-10-20.
