# A strict deterministic threshold

*Easy · [Probability problems](index.md)*

For the deterministic sequence $X_n=1/n$, what is the smallest positive integer $n$ satisfying $|X_n|<1/4$?

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Checks the smallest integer satisfying this deterministic strict inequality only; no probabilistic convergence evidence is inferred."}}
```

<details>
<summary>Hint 1</summary>

All terms are positive, so the absolute value can be removed.

</details>

<details>
<summary>Hint 2</summary>

Multiplication by positive denominators turns the condition into a strict lower bound on the integer index.

</details>

<details>
<summary>Worked solution</summary>

Respect the strict inequality at the boundary index.

1. For positive integer $n$, $|X_n|=1/n$.
2. The inequality $1/n<1/4$ is equivalent to $n>4$ because both denominators are positive.
3. The smallest such integer is five. At four the value equals the threshold and therefore fails the strict condition.

The first admissible index is five.

</details>
