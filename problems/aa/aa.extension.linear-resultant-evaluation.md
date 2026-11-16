# Evaluate a monic linear resultant directly

*Easy · [Abstract algebra problems](index.md)*

For a monic linear f=x-a, the resultant convention is $Res(f,g)=g(a)$. Find Res(x-2,x^2+1).

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Exact requested polynomial invariant only; no irreducibility or algebraic-geometry proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The single root of the first polynomial is two.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the second polynomial there.

</details>

<details>
<summary>Worked solution</summary>

A linear resultant is one exact root evaluation.

1. The first polynomial has the single root a=2.
2. The second polynomial at that root is2^2+1.
3. Thus the resultant is five.

</details>
