# Determine a squared bisector length

*Medium · [Geometry and trigonometry problems](index.md)*

In triangle $ABC$, $AB=12$, $AC=8$ and $BC=10$. The internal bisector from $A$ has length $\ell$. Find $\ell^2$.

```answer
{"answer":{"kind":"integer","expected":"72","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

First use the angle-bisector theorem to find both pieces of $BC$.

</details>

<details>
<summary>Hint 2</summary>

For bisector foot $D$, Stewart gives $AC^2BD+AB^2DC=BC(\ell^2+BD\cdot DC)$.

</details>

<details>
<summary>Worked solution</summary>

Find the side split, then apply Stewart to the bisecting cevian.

1. Let the bisector meet $BC$ at $D$. The angle-bisector theorem gives $BD:DC=12:8=3:2$, so $BD=6$, $DC=4$.
2. Stewart gives $8^2\cdot6+12^2\cdot4=10(\ell^2+6\cdot4)$.
3. The left side is $384+576=960$, so $\ell^2+24=96$.
4. Thus $\ell^2=72$. The strict triangle inequalities hold, so all lengths and internal divisions used are well defined.

</details>
