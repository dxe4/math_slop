# Refute an infinite geometric formula at the boundary

*Hard · [Calculus](index.md)*

Explain why the ordinary series $\sum_{k=0}^{\infty}(-1)^k$ does not equal 1/2 under the usual definition of an infinite sum. Give its partial sums and identify the missing geometric-series hypothesis.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

An infinite sum is a limit of finite partial sums.

</details>

<details>
<summary>Hint 2</summary>

The usual geometric limit requires absolute ratio below one.

</details>

<details>
<summary>Model proof</summary>

A finite algebraic expression does not establish convergence when the remainder power does not vanish.

1. The successive partial sums beginning with one term are 1,0,1,0,..., so they have no real limit.
2. Also the terms themselves do not tend to zero, a necessary condition for convergence.
3. The infinite geometric formula requires \|r\|&lt;1, whereas here \|r\|=1. Substituting r=-1 into that formula does not define the ordinary sum.

**Self-assessment rubric**

- Compute the two alternating partial-sum values.
- Explain failure of a limit under the ordinary sum definition.
- Identify the missing ratio hypothesis rather than merely apply the formula.

</details>
