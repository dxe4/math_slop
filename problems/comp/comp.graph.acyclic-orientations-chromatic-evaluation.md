# Read an orientation count from a negative chromatic argument

*Easy · [Computational arithmetic problems](index.md)*

Use the theorem that the number of acyclic orientations of G is $|P_G(-1)|$. For C4 its chromatic polynomial is (q-1)^4+(q-1). Find the number of acyclic orientations.

```answer
{"answer":{"kind":"integer","expected":"14","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Substitute negative one before taking the absolute value.

</details>

<details>
<summary>Hint 2</summary>

The additive correction term is negative at that argument.

</details>

<details>
<summary>Worked solution</summary>

A negative polynomial evaluation encodes an orientation count.

1. At q=-1 the polynomial value is (-2)^4+(-2)=16-2=14.
2. Its absolute value is fourteen.
3. As a direct interpretation, a four-cycle has sixteen edge orientations and only its two consistently directed cycles are cyclic, again leaving fourteen.

</details>
