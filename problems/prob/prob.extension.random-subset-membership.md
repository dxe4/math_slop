# Membership in a uniform random subset

*Medium · [Probability problems](index.md)*

Select a subset uniformly from the eight subsets of $\{a,b,c\}$. Find the probability that the selected subset contains $a$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the exact membership probability under uniform subset selection only."}}
```

<details>
<summary>Hint 1</summary>

Compare subsets that contain $a$ with subsets that do not.

</details>

<details>
<summary>Hint 2</summary>

Adding or removing $a$ pairs one subset of each type without changing its other elements.

</details>

<details>
<summary>Worked solution</summary>

Toggling membership of one element gives a probability-preserving pairing.

1. The subsets containing $a$ are $\{a\},\{a,b\},\{a,c\},\{a,b,c\}$.
2. There are four such subsets among the eight equally likely subsets; toggling $a$ pairs them bijectively with the other four.
3. The required probability is $4/8=1/2$; the empty subset is included in the full sample space.

Four of the eight subsets contain $a$, paired with the others by toggling $a$, so the probability is $1/2$.

</details>
