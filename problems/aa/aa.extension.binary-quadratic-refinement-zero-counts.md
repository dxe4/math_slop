# Compare two square maps on an elementary abelian quotient

*Medium · [Abstract algebra problems](index.md)*

On F2^2 define $q_D(a,b)=ab$ and q\_Q(a,b)=a+b+ab. Enter the numbers of zeros of q\_D and q\_Q respectively, counting (0,0). These model the square maps in two central extensions by C2.

```answer
{"answer":{"kind":"vector","expected":["3","1"],"checker_scope":"Exact requested finite extension observation only; no splitting or classification proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

There are only four input vectors, but evaluate the sum in F2.

</details>

<details>
<summary>Hint 2</summary>

The zero vector is part of both counts.

</details>

<details>
<summary>Worked solution</summary>

Square-map refinements can distinguish groups with the same alternating commutator form.

1. For q\_D, the values at (0,0),(1,0),(0,1),(1,1) are 0,0,0,1, giving three zeros.
2. For q\_Q, the respective values modulo two are 0,1,1,1, giving only one zero.
3. Thus the ordered counts are \[3,1\].

</details>
