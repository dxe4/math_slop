# Recover a primitive right triangle

*Medium · [Original olympiad-style problems](index.md)*

A primitive integer right triangle has hypotenuse $13$. You may use the primitive parametrization $m^2-n^2,2mn,m^2+n^2$ with $m>n\ge1$ coprime and of opposite parity. Enter its two legs in increasing order.

```answer
{"answer":{"kind":"vector","expected":["5","12"],"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The parameter equation is $m^2+n^2=13$.

</details>

<details>
<summary>Hint 2</summary>

The smaller parameter is at most two; use that bound to find the only admissible square pair.

</details>

<details>
<summary>Worked solution</summary>

Select and verify the unique parameter pair.

1. Because $m>n$, $2n^2<13$, so $n=1$ or $2$.
2. The first gives $m^2=12$, impossible. The second gives $m=3$, with the required coprimality and parity.
3. The legs are $9-4=5$ and $2\cdot3\cdot2=12$. The supplied parametrization proves completeness.

</details>
