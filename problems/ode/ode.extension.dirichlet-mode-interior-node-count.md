# Count interior nodes without counting prescribed endpoint zeros

*Easy · [Differential equations problems](index.md)*

The fourth Dirichlet eigenmode of $-y''=\lambda y$ on \[0,pi\] is y(t)=sin(4t). How many distinct zeros lie strictly inside the interval?

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact requested spectral quantity or trial bound only; no general spectral proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Exclude the two boundary zeros.

</details>

<details>
<summary>Hint 2</summary>

List the multiples of pi/4 lying strictly between zero and pi.

</details>

<details>
<summary>Worked solution</summary>

Nodal counts distinguish interior sign changes from fixed boundary values.

1. The zeros occur at t=k\*pi/4.
2. The interior choices are k=1,2,3.
3. There are three distinct interior zeros.

</details>
