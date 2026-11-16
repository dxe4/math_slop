# Find degree and deck exponent of a non-diagonal torus covering

*Medium · [Topology problems](index.md)*

On $T^2=\mathbb R^2/\mathbb Z^2$ let p be induced by $A=\begin{pmatrix}2&1\\0&3\end{pmatrix}$. Return \[number of sheets, exponent of the deck group\] as a vector. The exponent is the least positive integer annihilating every deck transformation.

```answer
{"answer":{"kind":"vector","expected":["6","6"],"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The sheet number is the lattice index of A Z² in Z².

</details>

<details>
<summary>Hint 2</summary>

The quotient lattice has Smith invariants with product \|det A\| and first invariant the gcd of all entries.

</details>

<details>
<summary>Worked solution</summary>

The lattice quotient records both the size and the structure of the finite deck group.

1. The invertible real linear map A descends to a local homeomorphism of tori, with fiber represented by A⁻¹Z²/Z². Multiplication by A identifies this with Z²/AZ².
2. The determinant is 6. The gcd of the entries is 1, so the Smith invariants are 1 and 6. Thus the quotient, and hence the translation deck group, is cyclic of order 6.
3. There are 6 sheets and the exponent of the cyclic deck group is 6. The requested vector is \[6,6\].

</details>
