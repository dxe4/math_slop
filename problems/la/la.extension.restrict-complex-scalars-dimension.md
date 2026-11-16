# Restrict a complex vector space to real scalars

*Easy · [Linear algebra problems](index.md)*

All spaces are finite-dimensional over the stated field. Regard $\mathbb C^2$ as a real vector space by restricting scalar multiplication. Find its real dimension.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Each complex coordinate has an independent real and imaginary part.

</details>

<details>
<summary>Hint 2</summary>

An explicit real basis separates those two parts in both coordinates.

</details>

<details>
<summary>Worked solution</summary>

Changing scalar field changes the basis count.

1. The vectors $(1,0),(i,0),(0,1),(0,i)$ span using real coefficients.
2. An equality of their real linear combination to zero forces both real and imaginary components in each coordinate to vanish.
3. They are therefore a real basis, giving dimension four.

</details>
