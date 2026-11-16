# Average a partition conditional mean

*Easy · [Probability problems](index.md)*

On a uniform four-point space, $X$ has values $1,3,5,7$. Conditioning on the cells $\{1,2\},\{3,4\}$ gives the cell means $2,6$, respectively. What is the expectation of this conditional-mean random variable?

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Checks the expectation of the supplied two-valued conditional mean only."}}
```

<details>
<summary>Hint 1</summary>

Determine the probability weight of each cell.

</details>

<details>
<summary>Hint 2</summary>

Average the supplied cell means using those weights, rather than adding them without weights.

</details>

<details>
<summary>Worked solution</summary>

Conditional means are averaged with cell probabilities.

1. Each cell contains two of four equally likely outcomes, so has probability $1/2$.
2. The conditional-mean variable therefore equals two and six with probabilities $1/2$ each.
3. Its mean is $(1/2)2+(1/2)6=4$, also equal to the original mean $(1+3+5+7)/4$ as the tower property predicts.

The weighted average is four.

</details>
