# Separate a repeated factor from a distinct field factor

*Medium · [Abstract algebra problems](index.md)*

Let $R=F_2[x]/(x^2(x+1))$. Enter \[size of the nilradical,size of R divided by its nilradical\].

```answer
{"answer":{"kind":"vector","expected":["2","4"],"checker_scope":"Exact requested finite ring invariant only; no radical or classification proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The factors x^2 and x+1 are relatively prime.

</details>

<details>
<summary>Hint 2</summary>

In F2\[x\]/(x^2), the nilpotents are precisely0 and x.

</details>

<details>
<summary>Worked solution</summary>

A primary factor carries the nilpotents while the distinct factor supplies another residue field.

1. The Chinese remainder theorem gives R isomorphic to F2\[x\]/(x^2) times F2.
2. The first factor has nilradical{0,x}, and the field factor has only zero nilpotent. Thus the product nilradical has two elements.
3. The whole ring has2^3=8 elements, so its quotient by that radical has8/2=4 elements, giving\[2,4\].

</details>
