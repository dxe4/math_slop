# Count every division including the terminal one

*Hard · [Number theory](index.md)*

Run the ordinary Euclidean algorithm on $377,144$. Count division equations, including the final division with zero remainder.

```answer
{"answer":{"kind":"integer","expected":"11","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Write each equation before replacing the pair.

</details>

<details>
<summary>Hint 2</summary>

A quotient-one step still counts, and so does the zero-remainder step.

</details>

<details>
<summary>Worked solution</summary>

A clear stopping convention determines the division count.

1. The first four equations are $377=2(144)+89$, $144=89+55$, $89=55+34$, and $55=34+21$.
2. The next four are $34=21+13$, $21=13+8$, $13=8+5$, and $8=5+3$.
3. The final three are $5=3+2$, $3=2+1$, and $2=2(1)+0$. There are eleven equations including the terminal one.

</details>
