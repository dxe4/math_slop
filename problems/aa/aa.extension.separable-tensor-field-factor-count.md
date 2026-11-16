# Split a base-changed quadratic without identifying the tensor with a field

*Easy · [Abstract algebra problems](index.md)*

Let L=Q(sqrt2). Use $L\otimes_Q L\cong L[X]/(X^2-2)$. How many field factors occur in its product decomposition?

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact requested field invariant only; no separability or primitive-element proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Over L the quadratic has two distinct linear roots.

</details>

<details>
<summary>Hint 2</summary>

Apply the Chinese remainder theorem to the coprime factors.

</details>

<details>
<summary>Worked solution</summary>

A tensor product of fields can be a product rather than a field.

1. Over L, X^2-2=(X-sqrt2)\*(X+sqrt2).
2. The two linear factors are distinct and coprime in characteristic zero.
3. The quotient is L times L, so there are two field factors.

</details>
