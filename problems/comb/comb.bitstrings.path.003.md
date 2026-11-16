# Paths and words share position choices

*Medium · [Combinatorics](index.md)*

A lattice path from $(0,0)$ to $(3,2)$ uses only unit east and north steps. Encode east by $0$ and north by $1$. Count distinct step-order paths and length-five binary words with exactly two $1s$. Enter paths and words.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"paths":10,"words":10},"checker_scope":"Two exact finite counts; the learner has not supplied an independently checked proof of bijectivity."}}
```

<details>
<summary>Hint 1</summary>

Every path has three E steps and two N steps.

</details>

<details>
<summary>Hint 2</summary>

Choose the two positions for N, equivalently the two $1$ positions.

</details>

<details>
<summary>Worked solution</summary>

A reversible encoding transfers a finite count.

1. There are $C(5,2)=10$ choices of the two N positions.
2. The reversible encoding gives one word per path, so both counts are $10$.

</details>
