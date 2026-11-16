# Use the acting coordinate in a semidirect multiplication

*Easy · [Abstract algebra problems](index.md)*

On C7 times C3 define $(u,i)(v,j)=(u+2^i v,\ i+j)$, reducing the first coordinate modulo seven and the second modulo three. Find (3,2)(4,1).

```answer
{"answer":{"kind":"vector","expected":["5","0"],"checker_scope":"Exact requested finite extension observation only; no splitting or classification proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The first actor exponent is two.

</details>

<details>
<summary>Hint 2</summary>

Reduce each coordinate in its own modulus.

</details>

<details>
<summary>Worked solution</summary>

Semidirect multiplication twists the second normal coordinate before adding.

1. Here 2^i=2^2=4 modulo seven.
2. The first coordinate is 3+4\*4=19, reducing to five modulo seven.
3. The second is 2+1=3, reducing to zero modulo three. Thus the product is \[5,0\].

</details>
