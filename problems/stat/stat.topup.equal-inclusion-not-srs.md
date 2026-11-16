# Distinguish equal inclusion chances from simple random sampling

*Medium · [Statistics and probability](index.md)*

A school has $8$ classes of $20$ pupils. One class is chosen uniformly and all its pupils are sampled. Which conclusion follows? Choices: Every pupil has inclusion probability 1/8, but this is a cluster sample, not a simple random sample of twenty pupils.; Equal pupil inclusion probabilities make all twenty-pupil subsets equally likely.; This design automatically guarantees biased estimates of every pupil characteristic.; Equal pupil inclusion chances imply pupils are selected independently.

**Options**

1. Every pupil has inclusion probability 1/8, but this is a cluster sample, not a simple random sample of twenty pupils.
2. Equal pupil inclusion probabilities make all twenty-pupil subsets equally likely.
3. This design automatically guarantees biased estimates of every pupil characteristic.
4. Equal pupil inclusion chances imply pupils are selected independently.

```answer
{"answer":{"kind":"multiple_choice","expected":"cluster_not_srs","checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."},"options":["cluster_not_srs","marginals_force_srs","all_estimates_biased","independent_pupil_selection"]}
```

<details>
<summary>Hint 1</summary>

Calculate one pupil inclusion chance from its class chance.

</details>

<details>
<summary>Hint 2</summary>

Ask whether a set containing pupils from different classes can be selected.

</details>

<details>
<summary>Worked solution</summary>

Equal marginal chances do not specify the joint sampling design.

1. A pupil is selected exactly when its class is selected, with probability one eighth.
2. Only the eight complete-class subsets can occur, while a twenty-pupil subset spanning classes has probability zero.
3. Thus this is cluster sampling rather than simple random sampling of twenty pupils; that distinction alone does not prove every estimator biased.

</details>
