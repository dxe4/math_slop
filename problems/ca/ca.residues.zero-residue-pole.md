# A pole with zero residue

*Medium · [Complex analysis problems](index.md)*

Find the residue of $\sin z/z^3$ at $z=0$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Exact requested complex value, polynomial, set or normalized contour value only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Expand the sine series far enough to see the possible inverse first power.

</details>

<details>
<summary>Hint 2</summary>

A genuine pole can have a vanishing residue.

</details>

<details>
<summary>Worked solution</summary>

Parity of the sine series removes the inverse first-power term.

1. $\sin z=z-z^3/6+z^5/120-\cdots$.
2. After division by $z^3$, the expansion is $z^{-2}-1/6+z^2/120-\cdots$.
3. There is no $z^{-1}$ term, so the residue is $0$, despite the second-order pole.

</details>
