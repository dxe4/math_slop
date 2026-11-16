# Count primitive roots using a supplied cyclic-group formula

*Easy · [Computational arithmetic problems](index.md)*

For a prime p, the number of primitive roots modulo p is phi(p-1). Given $p=17$, find that number.

```answer
{"answer":{"kind":"integer","expected":"8","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Primitive roots generate the sixteen-element multiplicative group.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the totient of sixteen using its prime-power form.

</details>

<details>
<summary>Worked solution</summary>

Generators of a finite cyclic unit group are counted by the totient of its order.

1. The multiplicative group modulo seventeen has order sixteen.
2. The supplied formula gives phi(16)=16(1-1/2).
3. There are eight primitive-root residues.

</details>
