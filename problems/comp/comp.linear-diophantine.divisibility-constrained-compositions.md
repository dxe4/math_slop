# Count compositions with coordinate restrictions

*Hard · [Computational arithmetic problems](index.md)*

How many nonnegative integer triples $(x,y,z)$ satisfy $x+y+z=100$, with $x$ even and $y$ divisible by three?

```answer
{"answer":{"kind":"integer","expected":"884","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Write the restricted coordinates as multiples of their divisors.

</details>

<details>
<summary>Hint 2</summary>

Fix the multiple of three and split its parity when summing the possible even coordinate.

</details>

<details>
<summary>Worked solution</summary>

The restrictions reduce the count to a two-variable weighted composition.

1. Write $x=2a$, $y=3b$; then $z=100-2a-3b\geq0$. For each $0\leq b\leq33$, there are $\lfloor(100-3b)/2\rfloor+1$ choices of $a$.
2. Even $b=2j$, $0\leq j\leq16$, gives $51-3j$ choices, totaling $459$. Odd $b=2j+1$ over the same $j$ range gives $49-3j$, totaling $425$.
3. The full count is $459+425=884$.

</details>
