# Add disjoint event probabilities

*Easy · [Probability problems](index.md)*

Three pairwise disjoint events $A,B,C$ have probabilities $1/6$, $1/3$ and $1/4$, respectively. Find $P(A\cup B\cup C)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":4},"checker_scope":"Checks the exact probability under the stated disjointness assumption only."}}
```

<details>
<summary>Hint 1</summary>

Pairwise disjoint events cannot occur together.

</details>

<details>
<summary>Hint 2</summary>

Use probability additivity on their union and combine the fractions with a common denominator.

</details>

<details>
<summary>Worked solution</summary>

No intersection correction is needed for disjoint events.

1. Pairwise disjointness makes every outcome appear in at most one of the three events.
2. Finite additivity therefore gives $P(A\cup B\cup C)=1/6+1/3+1/4$.
3. Writing these as $2/12+4/12+3/12$ gives $9/12=3/4$.

Additivity for disjoint events gives $1/6+1/3+1/4=9/12=3/4$.

</details>
