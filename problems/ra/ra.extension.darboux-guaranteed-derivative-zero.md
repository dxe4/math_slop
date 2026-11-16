# Use the derivative intermediate-value theorem without assuming continuity

*Easy · [Real analysis](index.md)*

A differentiable function on an open interval containing \[1,3\] satisfies f'(1)=-2 and f'(3)=4. Darboux's theorem says derivatives have the intermediate-value property. What minimum number of distinct zeros of $f'$ in (1,3) does this guarantee?

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested derivative quantity or guaranteed bound only; no full analytic argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Zero lies strictly between the two supplied derivative values.

</details>

<details>
<summary>Hint 2</summary>

The question asks for a guaranteed minimum, not the total possible count.

</details>

<details>
<summary>Worked solution</summary>

A derivative can have intermediate values even when it is not continuous.

1. The endpoint derivative values have opposite signs.
2. Darboux's theorem therefore gives at least one c in (1,3) with fprime(c)=0.
3. Only one distinct zero is guaranteed; for example a linear derivative crossing zero once shows no larger minimum follows.

</details>
