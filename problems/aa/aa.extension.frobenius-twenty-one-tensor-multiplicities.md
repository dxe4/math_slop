# Multiply a nonabelian induced character using its restriction

*Medium · [Abstract algebra problems](index.md)*

Let $G=C_7\rtimes C_3=\langle a,b\mid a^7=b^3=1,\ bab^{-1}=a^2\rangle$. Its complex irreducibles are three linear characters $\lambda_0,\lambda_1,\lambda_2$ factoring through $G/C_7$, and two degree-three characters $\rho,\bar\rho$. The restriction of $\rho$ to $C_7$ is $\theta+\theta^2+\theta^4$, where $\theta(a)=e^{2\pi i/7}$; both degree-three characters vanish off $C_7$. Determine the multiplicities of these five irreducibles in $\rho\otimes\bar\rho$.

```answer
{"answer":{"kind":"vector","expected":["1","1","1","1","1"],"checker_scope":"Only the requested exact character invariant is checked; no written argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

On $C_7$, multiply the exponent sums and count all differences of $1,2,4$ modulo seven.

</details>

<details>
<summary>Hint 2</summary>

Each linear-character inner product can be computed on $C_7$, because the tensor character vanishes elsewhere.

</details>

<details>
<summary>Worked solution</summary>

Restriction arithmetic and one full-group inner product separate the linear constituents.

1. The nine differences of exponents in $\{1,2,4\}$ give zero three times and every nonzero residue once. Thus the restricted tensor character is $3\mathbf1+\sum_{j=1}^6\theta^j$.
2. Each linear character is trivial on $C_7$. Its full-group inner product with the tensor character is $\frac1{21}\sum_{g\in C_7}|\rho(g)|^2=\frac1{21}\cdot7\cdot3=1$.
3. The remaining restriction has each nontrivial $\theta^j$ once. Since the two degree-three restrictions partition these six characters, each degree-three constituent occurs once. All five multiplicities are $1$, and their dimensions sum to $9$.

</details>
