# Read a strict ratio-test conclusion

*Easy · [Calculus](index.md)*

For a real series with nonzero late terms, $\lim|a_{n+1}/a_n|=2$. Does Σa\_n converge? Return {converges} or {diverges}.

```answer
{"answer":{"kind":"set","expected":["diverges"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The limiting magnitude ratio is greater than one.

</details>

<details>
<summary>Hint 2</summary>

Late term magnitudes grow rather than tending to zero.

</details>

<details>
<summary>Worked solution</summary>

A strict ratio above one violates the necessary term condition.

1. Eventually \|a\_{n+1}/a\_n\| exceeds a fixed number greater than one.
2. Thus the term magnitudes cannot tend to zero.
3. The series diverges, so return {diverges}.

</details>
