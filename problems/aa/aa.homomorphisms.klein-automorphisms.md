# Count automorphisms of a Klein four group

*Hard · [Abstract algebra problems](index.md)*

How many group automorphisms does the additive group $(\mathbb Z/2\mathbb Z)^2$ have?

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Choose the images of a generating pair, preserving their independence.

</details>

<details>
<summary>Hint 2</summary>

The first image can be any nonzero vector; the second must lie outside its span.

</details>

<details>
<summary>Worked solution</summary>

An automorphism is determined by an ordered basis of the two-dimensional binary vector space.

1. Let $e_1,e_2$ be the standard basis. An additive homomorphism is determined by their two images because all coefficients are in $\mathbb F_2$.
2. For invertibility, choose the image of $e_1$ from the three nonzero vectors.
3. The span of that image has two elements, so two of the four vectors remain available as the independent image of $e_2$.
4. Each such ordered independent pair extends uniquely to an automorphism.
5. The count is $3\cdot2=6$.

</details>
