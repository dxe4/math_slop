# Find a nondegenerate symmetric coefficient pairing

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb Q$, let $R=\mathbb Q[t]/(t^3-2)$. Define $B(f,g)$ as the coefficient of $t^2$ in the degree-below-three representative of fg. Give its Gram matrix on the ordered basis $(1,t,t^2)$.

```answer
{"answer":{"kind":"matrix","expected":[["0","0","1"],["0","1","0"],["1","0","0"]],"checker_scope":"Only the requested exact invariant or rational coordinate object is checked. Canonical-form reasoning and graduate preparation are not automatically certified.","rows":3,"columns":3}}
```

<details>
<summary>Hint 1</summary>

Reduce products using $t^3=2$.

</details>

<details>
<summary>Hint 2</summary>

The highest unreduced degree is four; list which products contain a quadratic term.

</details>

<details>
<summary>Worked solution</summary>

Multiplication followed by one coefficient functional gives a symmetric pairing.

1. The products $1\cdot t^2$ and $t\cdot t$ each have quadratic coefficient one.
2. The products $t^3=2$ and $t^4=2t$ have quadratic coefficient zero, as do products of degree below two.
3. Thus the Gram matrix is the reverse identity displayed above. Its determinant is minus one, so the pairing is nondegenerate even though it is not positive definite.

</details>
