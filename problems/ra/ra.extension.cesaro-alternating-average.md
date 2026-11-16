# Average an oscillating sequence rather than its limits

*Easy · [Real analysis](index.md)*

Let $a_n=(-1)^n$. Find the limit of its arithmetic means (a\_1+...+a\_N)/N as N tends to infinity.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Exact requested asymptotic observation only; no full convergence argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The partial sum is zero or negative one.

</details>

<details>
<summary>Hint 2</summary>

Divide this uniformly bounded numerator by N.

</details>

<details>
<summary>Worked solution</summary>

Arithmetic averaging can converge even when the individual terms do not.

1. Adjacent terms cancel in pairs.
2. For even N the sum is zero; for odd N it is negative one.
3. Thus the mean has absolute value at most 1/N and tends to zero.

</details>
