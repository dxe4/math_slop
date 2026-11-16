# Choose the geometrically admissible root

*Medium · [Geometry and trigonometry problems](index.md)*

A $10$ by $8$ rectangle has a uniform interior border of width $t$, leaving a nonempty rectangular hole. The border area is $32$. Find $t$, with $0<t<4$.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The hole dimensions are $10-2t$ and $8-2t$.

</details>

<details>
<summary>Hint 2</summary>

After solving the quadratic, apply the stated width domain.

</details>

<details>
<summary>Worked solution</summary>

Translate the area condition and reject the impossible root.

1. The area equation is $80-(10-2t)(8-2t)=32$.
2. Expansion gives $36t-4t^2=32$, or $t^2-9t+8=0$.
3. This factors as $(t-1)(t-8)=0$.
4. Only $t=1$ lies in $0<t<4$; $t=8$ cannot leave the stated hole.

</details>
