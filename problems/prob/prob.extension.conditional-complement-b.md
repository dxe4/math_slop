# Complement within the observed event

*Easy · [Probability problems](index.md)*

Suppose $P(B)>0$ and $P(A\mid B)=2/5$. Find $P(A^c\mid B)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":5},"checker_scope":"Checks the conditional complement probability only."}}
```

<details>
<summary>Hint 1</summary>

After conditioning on $B$, the two possibilities are still $A$ and its complement.

</details>

<details>
<summary>Hint 2</summary>

Their intersections with $B$ partition $B$; divide that additive identity by $P(B)$.

</details>

<details>
<summary>Worked solution</summary>

Use complementarity inside the conditional probability space.

1. The events $A\cap B$ and $A^c\cap B$ are disjoint and their union is $B$.
2. Dividing their probability sum by $P(B)>0$ gives $P(A\mid B)+P(A^c\mid B)=1$.
3. Consequently $P(A^c\mid B)=1-2/5=3/5$. The observation remains $B$ throughout; it is not replaced by $B^c$.

The remaining conditional mass is $1-2/5=3/5$.

</details>
