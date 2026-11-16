# Reject a homomorphic section by generator order

*Easy · [Abstract algebra problems](index.md)*

Let pi:C9 to C3 be reduction modulo three in additive notation. How many group homomorphisms s:C3 to C9 satisfy $pi\circ s$ equal to the identity on C3?

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Exact requested finite extension observation only; no splitting or classification proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

A homomorphism must send the generator to an element killed by three.

</details>

<details>
<summary>Hint 2</summary>

A section must send it to an element congruent to one modulo three.

</details>

<details>
<summary>Worked solution</summary>

A quotient map may have set-theoretic sections but no homomorphic section.

1. The elements of C9 killed by three are 0,3,6.
2. All reduce to zero modulo three, whereas a section must send the class of one to a residue reducing to one.
3. No homomorphism can satisfy both conditions, so the count is zero.

</details>
