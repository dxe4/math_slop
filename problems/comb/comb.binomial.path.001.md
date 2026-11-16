# Two powers from four factors

*Medium · [Combinatorics](index.md)*

Find the coefficient of $x^{2}$ in the finite polynomial $(1+2x)^4$.

```answer
{"answer":{"kind":"integer","expected":24,"checker_scope":"Exact finite structured answer for calculate-weighted-binomial-coefficient; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Exactly two factors must supply $2x$.

</details>

<details>
<summary>Hint 2</summary>

Count their positions and multiply by the weight from those two choices.

</details>

<details>
<summary>Worked solution</summary>

Count positions and scalar weights together.

1. There are $C(4,2)=6$ choices of contributing factors.
2. Each contributes $2^{2}=4$, giving coefficient $6\times 4=24$.

</details>
