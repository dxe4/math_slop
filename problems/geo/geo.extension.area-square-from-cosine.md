# Recover squared area from a cosine

*Medium · [Geometry and trigonometry problems](index.md)*

The sides enclosing angle $A$ have lengths $8,6$, and $\cos A=1/4$, where $0<A<\pi$. Find the square $\Delta^2$ of the triangle area.

```answer
{"answer":{"kind":"integer","expected":"540","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Square $\Delta=(1/2)bc\sin A$.

</details>

<details>
<summary>Hint 2</summary>

Replace $\sin^2 A$ with $1-\cos^2 A$.

</details>

<details>
<summary>Worked solution</summary>

Work with squared area to avoid a radical.

1. The area formula gives $\Delta^2=(1/4)\cdot8^2\cdot6^2\sin^2 A$.
2. Here $\sin^2 A=1-1/16=15/16$.
3. Therefore $\Delta^2=(1/4)\cdot64\cdot36\cdot15/16=540$.

</details>
