# Reduce derivative coefficients in the field characteristic

*Easy · [Abstract algebra problems](index.md)*

Over F3, find the formal derivative of $x^9+2x^3+x$. Enter its constant value as a canonical residue.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested polynomial invariant only; no irreducibility or algebraic-geometry proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The usual formal derivative rule still applies.

</details>

<details>
<summary>Hint 2</summary>

Reduce its integer coefficients modulo three.

</details>

<details>
<summary>Worked solution</summary>

Characteristic can erase high-degree derivative terms.

1. The integer formal derivative expression is9x^8+6x^2+1.
2. Both nine and six are zero in F3.
3. Thus the derivative is the constant one.

</details>
