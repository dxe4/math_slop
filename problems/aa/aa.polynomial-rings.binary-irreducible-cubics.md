# Identify all monic irreducible binary cubics

*Medium · [Abstract algebra problems](index.md)*

Encode a monic cubic $c_0+c_1x+c_2x^2+x^3$ over $\mathbb F_2$ by the integer $c_0+2c_1+4c_2+8$. Find the set of codes of all irreducible monic cubics.

```answer
{"answer":{"kind":"set","expected":[11,13],"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

A cubic over a field is reducible exactly when it has a root in that field.

</details>

<details>
<summary>Hint 2</summary>

Test the two possible field elements and then translate the permitted coefficients into the stated codes.

</details>

<details>
<summary>Worked solution</summary>

Root exclusion classifies irreducible cubics over a two-element field.

1. A reducible cubic has a linear factor, so a binary cubic is irreducible precisely when neither $0$ nor $1$ is a root.
2. The value at zero forces $c_0=1$. Its value at one is then $c_1+c_2$, which must be $1$.
3. The coefficient pairs are $(c_1,c_2)=(1,0)$ and $(0,1)$. Their codes are $1+2+8=11$ and $1+4+8=13$. The answer is $\{11,13\}$.

</details>
