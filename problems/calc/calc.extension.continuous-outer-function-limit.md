# Pass a limit through a continuous outer function

*Easy · [Calculus](index.md)*

If f(x)→0 as x→a, find $\lim_{x\to a}\cos(f(x))$. Use continuity of cosine.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The inner output tends to zero.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the continuous outer function at that limiting input.

</details>

<details>
<summary>Worked solution</summary>

Continuity permits composing an existing finite limit.

1. Cosine is continuous at zero.
2. Thus cos(f(x)) tends to cos 0.
3. The limit is 1.

</details>
