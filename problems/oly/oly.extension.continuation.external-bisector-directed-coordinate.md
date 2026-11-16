# An external bisector on the extended base

*Medium · [Original olympiad-style problems](index.md)*

Let $B=(0,0)$ and $C=(5,0)$, and let $A$ lie above the axis with $AB=6$ and $AC=9$. The external angle bisector at $A$ meets the line $BC$ at $D$. Find the first coordinate of $D$.

```answer
{"answer":{"kind":"integer","expected":"-10","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The external bisector divides the opposite line externally in the ratio $AB:AC$.

</details>

<details>
<summary>Hint 2</summary>

Locate which exterior ray can have $BD/DC=2/3$ before solving an equation.

</details>

<details>
<summary>Worked solution</summary>

The smaller distance must be to $B$, so the intersection lies to the left of $B$.

1. The lengths satisfy the strict triangle inequalities, so the stipulated nondegenerate triangle exists. The external bisector is not parallel to $BC$ because $AB\ne AC$.
2. Its division ratio is $BD/DC=6/9=2/3$. An exterior point to the right of $C$ would instead have $BD>DC$, so write $D=(-t,0)$ with $t>0$.
3. Then $t/(t+5)=2/3$, giving $3t=2t+10$ and $t=10$. Thus the requested coordinate is $-10$.

</details>
