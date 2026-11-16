# Separate two cubic radical classes by valuations

*Medium · [Abstract algebra problems](index.md)*

Let $K=\mathbf Q(\zeta_3)$ and $L=K(\sqrt[3]{2},\sqrt[3]{3})$. You may use the Kummer degree formula: adjoining cube roots of classes spanning dimension $r$ in $K^\times/(K^\times)^3$ gives degree $3^r$. Show the two displayed classes are independent and give $[L:K]$.

```answer
{"answer":{"kind":"integer","expected":9,"checker_scope":"Only the requested exact invariant is checked; no written proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

If $2^a3^b$ is a cube, apply a valuation above each rational prime.

</details>

<details>
<summary>Hint 2</summary>

The ramification indices above $2$ and $3$ are respectively $1$ and $2$.

</details>

<details>
<summary>Worked solution</summary>

Valuations detect nontrivial cube classes without choosing numerical radical approximations.

1. Take $a,b\in\{0,1,2\}$ and suppose $2^a3^b=c^3$ in $K$. At a prime above $2$, its normalized valuation gives $a\equiv0\pmod3$.
2. At the ramified prime above $3$, the valuation gives $2b\equiv0\pmod3$, hence $b=0$. The needed ramification facts follow from the discriminant $-3$ of $K$.
3. Both classes are therefore independent. Their span has dimension $2$, and the given formula yields $[L:K]=3^2=9$.

</details>
