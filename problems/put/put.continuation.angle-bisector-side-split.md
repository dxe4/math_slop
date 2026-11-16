# Angle bisector side split

*Medium · [Original Putnam-style training](index.md)*

In triangle $ABC$, $AB=6$, $AC=9$, $BC=10$, and the internal angle bisector at $A$ meets $BC$ at $D$. Find $BD$.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the angle-bisector ratio $BD/DC=AB/AC$.

</details>

<details>
<summary>Hint 2</summary>

Combine that ratio with $BD+DC=10$.

</details>

<details>
<summary>Worked solution</summary>

Thus $t=2$ and $BD=4$.

1. The angle-bisector theorem gives $BD/DC=6/9=2/3$.
2. Write $BD=2t$, $DC=3t$; their sum is $5t=10$.
3. Thus $t=2$ and $BD=4$.

</details>
