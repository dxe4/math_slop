# Infer which urn was selected

*Medium · [Probability problems](index.md)*

Urn $A$ is selected with probability $1/3$, otherwise urn $B$ is selected. $A$ contains three red and one blue ball; $B$ contains one red and three blue balls. One ball is drawn uniformly from the selected urn and is red. Find the probability that $A$ was selected.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":5},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The urn selection probabilities are unequal and must remain in both branches.

</details>

<details>
<summary>Hint 2</summary>

Multiply each prior by its red-draw probability, then normalize.

</details>

<details>
<summary>Worked solution</summary>

The observed colour reweights the prior urn selection.

1. The $A$-and-red probability is $(1/3)(3/4)=1/4$.
2. The $B$-and-red probability is $(2/3)(1/4)=1/6$, giving total red probability $5/12$.
3. The posterior for $A$ is $(1/4)/(5/12)=3/5$.

</details>
