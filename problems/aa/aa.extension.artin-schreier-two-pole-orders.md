# Separate two additive radical classes by their pole orders

*Medium · [Abstract algebra problems](index.md)*

Let $K=\mathbf F_3(t)$, $u^3-u=t$, and $v^3-v=t^2$. You may use the Artin–Schreier degree formula: $r$ independent classes in $K/\{h^3-h:h\in K\}$ give a compositum of degree $3^r$. Determine $[K(u,v):K]$, proving independence of the two displayed classes.

```answer
{"answer":{"kind":"integer","expected":9,"checker_scope":"Only the requested exact invariant is checked; no written proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

A pole of $h^3-h$ has order divisible by three.

</details>

<details>
<summary>Hint 2</summary>

Analyze a nonzero $mathbf F_3$-linear combination of $t$ and $t^2$ at infinity.

</details>

<details>
<summary>Worked solution</summary>

A pole-order obstruction rules out every nonzero additive relation.

1. If $h$ has a pole of order $m>0$, then $h^3-h$ has pole order $3m$, since its two terms have different pole orders.
2. A nonzero $at+bt^2$, with $a,b\in\mathbf F_3$, has its only pole at infinity, of order $1$ or $2$. It cannot equal $h^3-h$: any finite pole of $h$ would also persist, and its infinite pole order would be divisible by three.
3. The two classes are independent, and the given formula gives degree $9$.

</details>
