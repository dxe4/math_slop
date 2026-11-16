# One uniform coordinate below another

*Medium · [Probability problems](index.md)*

Independent $X,Y$ are uniform on $[0,1]$. Find $P(X<Y)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the ordering probability for the independent continuous uniform pair only."}}
```

<details>
<summary>Hint 1</summary>

The joint density is constant on the unit square.

</details>

<details>
<summary>Hint 2</summary>

The regions above and below the diagonal have equal area; justify why the diagonal contributes no probability.

</details>

<details>
<summary>Worked solution</summary>

Use symmetry of the joint square and its zero-area diagonal.

1. Independence gives joint density one on $[0,1]^2$.
2. The coordinate-swap map interchanges the regions $x<y$ and $y<x$, preserving area. Their excluded diagonal has area zero and therefore probability zero.
3. The two regions have equal probabilities whose sum is one, so $P(X<Y)=1/2$. Equivalently, $\int_0^1\int_0^y dx\,dy=1/2$.

That triangular region has area $1/2$, and the diagonal has zero probability.

</details>
