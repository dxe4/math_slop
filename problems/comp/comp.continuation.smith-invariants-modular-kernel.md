# Combine integer invariant factors with a finite congruence-kernel count

*Hard · [Computational arithmetic problems](index.md)*

Let $A=\begin{pmatrix}2&4&6\\0&6&12\\0&0&30\end{pmatrix}$. Return $[d_1,d_2,d_3,N]$, where $d_1\mid d_2\mid d_3$ are its positive Smith invariant factors and $N$ counts vectors $x\in(\mathbb Z/60\mathbb Z)^3$ satisfying $Ax=0$. You may use that $d_1$ is the entry gcd, $d_1d_2$ the gcd of $2\times2$ minors, and $d_1d_2d_3=|\det A|$; unimodular row and column operations are invertible modulo $60$.

```answer
{"answer":{"kind":"vector","expected":["2","6","30","360"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Compute determinantal divisors in increasing size, rather than reading the diagonal as a Smith form automatically.

</details>

<details>
<summary>Hint 2</summary>

After diagonal reduction, count each scalar congruence independently, including its nonunit multiplicity.

</details>

<details>
<summary>Worked solution</summary>

Determinantal divisors encode the integer reduction, which then decomposes the finite kernel.

1. The entry gcd is $2$. The nonzero $2\times2$ minors are $12,24,12,60,120,180$, with gcd $12$.
2. The determinant is $360$, so $d_1=2$, $d_2=12/2=6$ and $d_3=360/12=30$, in the required divisibility order.
3. Unimodular transformations biject the congruence solutions with those of the diagonal system $2y_1=6y_2=30y_3=0\pmod{60}$.
4. A scalar multiplier $d$ has $\gcd(d,60)$ kernel residues. Thus $N=2\cdot6\cdot30=360$ and the output is $[2,6,30,360]$.

</details>
