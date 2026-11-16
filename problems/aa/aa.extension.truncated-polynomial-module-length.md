# Read composition length from a one-dimensional filtration

*Easy · [Abstract algebra problems](index.md)*

As a k\[t\]-module, $M=k[t]/(t^4)$ has filtration M containing tM containing t^2M containing t^3M containing0, with each successive quotient one-dimensional over k. Find its composition length.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact requested module invariant only; no homological or Noetherian theorem is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Length counts simple successive factors, not the number of submodules displayed.

</details>

<details>
<summary>Hint 2</summary>

There are four nonzero quotient steps.

</details>

<details>
<summary>Worked solution</summary>

A filtration with simple factors records module length.

1. The successive factors are M/tM,tM/t^2M,t^2M/t^3M,t^3M.
2. Each is a copy of the simple module k\[t\]/(t), hence has length one.
3. Their total length is four.

</details>
