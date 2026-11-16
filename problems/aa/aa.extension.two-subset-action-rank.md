# Classify stabilizer orbits by intersection size

*Medium · [Abstract algebra problems](index.md)*

S5 acts on the two-element subsets of {1,2,3,4,5}. Its rank is the number of orbits of the stabilizer of {1,2} on all two-element subsets. Find this action rank $r$.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact requested finite action quantity only; no general action proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The stabilizer permutes {1,2} and its three-element complement separately.

</details>

<details>
<summary>Hint 2</summary>

The intersection size with {1,2} is invariant and takes three possible values.

</details>

<details>
<summary>Worked solution</summary>

The intersection statistic gives complete stabilizer-orbit labels.

1. The setwise stabilizer is S2 times S3, acting separately on the marked pair and its complement.
2. Two subsets with the same intersection size with {1,2} are carried to each other by those independent permutations.
3. The possible intersection sizes are zero, one and two, all attained. Thus there are three orbits and the rank is three.

</details>
