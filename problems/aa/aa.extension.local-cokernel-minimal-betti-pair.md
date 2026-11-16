# Verify injectivity before declaring a minimal free resolution

*Medium · [Abstract algebra problems](index.md)*

Over $R=k[x,y]_{(x,y)}$, let M be the cokernel of A=\[\[x,y\],\[0,x\]\] acting R^2 to R^2. Find \[beta\_0,beta\_1\] of its minimal free resolution. You may use that a finite free resolution over a local ring is minimal when every differential entry lies in the maximal ideal.

```answer
{"answer":{"kind":"vector","expected":["2","2"],"checker_scope":"Exact requested module invariant only; no homological or Noetherian theorem is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

First prove A is injective in this domain.

</details>

<details>
<summary>Hint 2</summary>

Then inspect its entries for minimality and read the two free ranks.

</details>

<details>
<summary>Worked solution</summary>

A presentation becomes a resolution only after its possible left kernel is controlled.

1. If A(a,b)=0, its second coordinate gives x\*b=0. Since R is a domain and x is nonzero, b=0; the first coordinate then gives a=0.
2. Thus0 to R^2 by A to R^2 to M to0 is a free resolution.
3. All four entries of A lie in the maximal ideal(x,y), so the stated criterion makes it minimal. The free ranks in degrees zero and one are both two, giving\[2,2\].

</details>
