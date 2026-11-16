# Triangle mixed moment

*Medium · [Original Putnam-style training](index.md)*

Evaluate $\int_0^1\int_0^{1-x}xy\,dy\,dx$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":24},"checker_scope":"Checks only the exact bounded result; derivation and domain assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The domain is the triangle $x\ge0,y\ge0,x+y\le1$.

</details>

<details>
<summary>Hint 2</summary>

Integrate in $y$ first, then expand a single polynomial.

</details>

<details>
<summary>Worked solution</summary>

Termwise evaluation gives $\frac12(1/2-2/3+1/4)=1/24$.

1. For fixed $x\in[0,1]$, the inner integral is $x(1-x)^2/2$.
2. Therefore the value is $\frac12\int_0^1(x-2x^2+x^3)dx$.
3. Termwise evaluation gives $\frac12(1/2-2/3+1/4)=1/24$.

</details>
