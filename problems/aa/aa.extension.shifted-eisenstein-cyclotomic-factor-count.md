# Use a translation to reveal an irreducibility criterion

*Medium · [Abstract algebra problems](index.md)*

Find the number of nonconstant irreducible factors of $x^4+1$ in Q\[x\], counted with multiplicity. Use a suitable translation and Eisenstein's criterion.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested polynomial invariant only; no irreducibility or algebraic-geometry proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Replace x by x+1.

</details>

<details>
<summary>Hint 2</summary>

Inspect the prime two, including its square at the constant coefficient.

</details>

<details>
<summary>Worked solution</summary>

Translation preserves rational factorization while changing divisibility patterns.

1. The translated polynomial is x^4+4x^3+6x^2+4x+2.
2. Every nonleading coefficient is divisible by two, the leading coefficient is not, and the constant term is not divisible by four. Eisenstein makes the translated polynomial irreducible over Q.
3. The substitution x maps to x+1 is a ring automorphism, so x^4+1 is itself irreducible and has one nonconstant irreducible factor.

</details>
