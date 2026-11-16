# Take a signed projection on a supplied unit direction

*Easy · [Geometry and trigonometry problems](index.md)*

Unit vector $u=(3/5,4/5)$ specifies an oriented line. Using signed projection $v\cdot u$, find the signed length of the projection of $v=(5,0)$ onto that direction.

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The direction is already normalized.

</details>

<details>
<summary>Hint 2</summary>

Use the supplied dot-product formula without taking an absolute value.

</details>

<details>
<summary>Worked solution</summary>

Project onto the specified oriented unit direction.

1. The projection coefficient is $(5,0)\cdot(3/5,4/5)$.
2. This equals $5(3/5)+0(4/5)=3$.
3. The positive sign means the projection points along $u$.

</details>
