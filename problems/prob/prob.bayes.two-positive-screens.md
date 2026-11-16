# Use conditional independence for two screens

*Hard · [Probability problems](index.md)*

A condition has prevalence $1/100$. Each screen is positive with probability $9/10$ if present and $1/10$ if absent. Two screens are independent conditional on presence and also independent conditional on absence. Given two positives, find the posterior probability of presence.

```answer
{"answer":{"kind":"rational","expected":{"numerator":9,"denominator":20},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The independence assumptions apply within each condition branch, not unconditionally.

</details>

<details>
<summary>Hint 2</summary>

Square the appropriate likelihood within each branch before applying Bayes.

</details>

<details>
<summary>Worked solution</summary>

Conditional independence multiplies the likelihoods separately for the two latent states.

1. Given presence, two positives have probability $(9/10)^2=81/100$. Given absence, they have probability $(1/10)^2=1/100$.
2. The corresponding joint masses are $81/10000$ and $99/10000$.
3. The posterior is $81/(81+99)=81/180=9/20$.
4. Using unconditional screen independence would change the model and is not justified.

</details>
