# Count both logarithmic branches before summing

*Medium · [Original olympiad-style problems](index.md)*

For $x>0$, $x\ne1$, solve $\log_2x+\log_x2=5/2$. Find the sum of $\log_2x$ over all distinct real solutions, as a rational number.

```answer
{"answer":{"kind":"rational","expected":{"numerator":5,"denominator":2},"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Put $t=\log_2x$, which is nonzero, and use the reciprocal-base identity.

</details>

<details>
<summary>Hint 2</summary>

The resulting quadratic has two distinct real roots; each corresponds to exactly one positive input.

</details>

<details>
<summary>Worked solution</summary>

Use a bijective logarithmic substitution with its excluded value.

1. The equation is $t+1/t=5/2$, hence $2t^2-5t+2=(2t-1)(t-2)=0$.
2. The roots are $t=1/2,2$, both nonzero, giving distinct valid inputs $\sqrt2,4$.
3. The requested sum is $1/2+2=5/2$. The answer concerns logarithms, so no unsupported radical entry is requested.

</details>
