# Find a polynomial map rank by module divisibility

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb Q$, T acts by multiplication by t on $V=\mathbb Q[t]/((t-1)^3(t+1))\oplus\mathbb Q[t]/((t-1)^2)$. Using the invariant-factor module viewpoint, find the rank of $(T-I)^2(T+I)$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested exact invariant or rational coordinate object is checked. Canonical-form reasoning and graduate preparation are not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

On a cyclic quotient by d, the kernel of multiplication by f has dimension degree gcd(d,f).

</details>

<details>
<summary>Hint 2</summary>

Compare the exponent of each prime polynomial in the two summands separately.

</details>

<details>
<summary>Worked solution</summary>

Polynomial rank is an annihilation calculation, not just evaluation on ordinary eigenvectors.

1. For a cyclic quotient by d, writing $g=\gcd(d,f)$ shows $d\mid fh$ exactly when $d/g\mid h$, so the multiplication kernel has dimension degree g.
2. On the first four-dimensional summand, $f=(t-1)^2(t+1)$ has gcd of degree three with its modulus, leaving rank one.
3. On the second two-dimensional summand, f is divisible by its entire modulus and acts as zero. Adding ranks gives one.

</details>
