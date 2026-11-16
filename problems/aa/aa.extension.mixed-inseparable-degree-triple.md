# Separate total, separable and inseparable degrees

*Medium · [Abstract algebra problems](index.md)*

Over K=F3(t), let u be a root of $X^{12}-t$. Enter \[\[K(u):K\],separable degree,inseparable degree\]. Prove the polynomial is irreducible and count distinct conjugates.

```answer
{"answer":{"kind":"vector","expected":["12","4","3"],"checker_scope":"Exact requested field invariant only; no separability or primitive-element proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Eisenstein at t applies over the UFD F3\[t\].

</details>

<details>
<summary>Hint 2</summary>

In an algebraic closure the polynomial is a cube of a separable quartic.

</details>

<details>
<summary>Worked solution</summary>

One irreducible polynomial can combine separable and purely inseparable layers.

1. The polynomial is Eisenstein at the prime t of F3\[t\], so it is irreducible over F3(t) and has degree twelve.
2. Over an algebraic closure, X^12-t=(X^4-t^(1/3))^3. The quartic has four distinct roots: its derivative is X^3 in characteristic three, which shares no root with it because t is nonzero.
3. Thus there are four distinct conjugates. The separable degree is four and the inseparable degree is12/4=3, giving\[12,4,3\].

</details>
