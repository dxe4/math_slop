# Cubic forward difference value

*Medium · [Original Putnam-style training](index.md)*

A polynomial $P$ satisfies $P(x+1)-P(x)=3x^2+3x+1$ for every real $x$, and $P(0)=2$. Find $P(4)$.

```answer
{"answer":{"kind":"integer","expected":"66","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Recognize the right side as a difference of cubes.

</details>

<details>
<summary>Hint 2</summary>

Subtract the known cubic solution and inspect the remaining periodic polynomial.

</details>

<details>
<summary>Worked solution</summary>

$P(4)=4^3+2=66$.

1. $(x+1)^3-x^3=3x^2+3x+1$, so $Q(x)=P(x)-x^3$ obeys $Q(x+1)=Q(x)$.
2. A periodic polynomial is constant: a positive-degree polynomial has an unbounded leading term along integers. Hence $Q(x)=Q(0)=2$.
3. $P(4)=4^3+2=66$.

</details>
