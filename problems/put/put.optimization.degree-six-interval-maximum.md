# Reduce a symmetric interval optimization

*Medium · [Original Putnam-style training](index.md)*

Find the maximum of $x^2(1-x^2)^2$ for $-1\leq x\leq1$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":4,"denominator":27},"checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

Substitute t=x squared to remove the sign symmetry.

</details>

<details>
<summary>Hint 2</summary>

Compare the interior critical value with both endpoints of the new interval.

</details>

<details>
<summary>Worked solution</summary>

A symmetric degree-six expression becomes a cubic on a compact interval.

1. Let t=x^2, so 0&lt;=t&lt;=1 and the objective is g(t)=t(1-t)^2.
2. Its derivative is $(1-t)(1-3t)$, positive before 1/3 and negative after it in the interior.
3. The endpoints give zero and t=1/3 gives $4/27$, the attained maximum.

</details>
