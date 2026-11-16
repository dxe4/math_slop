# An indicator after a parity observation

*Easy · [Probability problems](index.md)*

Let $D$ be a fair six-sided die and $\mathcal G=\sigma(\{D\text{ is even}\})$. What value does $E[\mathbf1_{\{D=6\}}\mid\mathcal G]$ take on even outcomes?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Checks the conditional indicator mean on the even cell only."}}
```

<details>
<summary>Hint 1</summary>

Within the even cell, identify the conditional distribution of the die.

</details>

<details>
<summary>Hint 2</summary>

The indicator mean equals the conditional probability of its value-one event.

</details>

<details>
<summary>Worked solution</summary>

Average a zero-one variable over the observed parity cell.

1. The even cell is $\{2,4,6\}$ and has probability $1/2$.
2. Given that cell, each of its three faces has probability $1/3$; the indicator is one only at face six.
3. Thus the conditional mean is $1/3$ throughout the even cell. It is zero on the odd cell, although that value is not requested.

One of the three equally likely even faces contributes one, giving $1/3$.

</details>
