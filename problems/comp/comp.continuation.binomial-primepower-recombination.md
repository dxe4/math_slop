# Strip prime factors before reducing a binomial coefficient modulo a composite

*Hard · [Computational arithmetic problems](index.md)*

Compute the least nonnegative residue of $\binom{30}{12}$ modulo $72$. Do not assume that denominator factors are invertible modulo $72$.

```answer
{"answer":{"kind":"integer","expected":"57","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Compute prime valuations separately for the $8$ and $9$ components, then use products with those prime factors removed.

</details>

<details>
<summary>Hint 2</summary>

Recombine the two residues only after restoring each removed prime power; ordinary cancellation across nonunits is invalid.

</details>

<details>
<summary>Worked solution</summary>

Unit factorial parts and valuations permit valid division separately at each prime power.

1. Write the binomial as the product of $19,\ldots,30$ divided by $12!$. Legendre sums give $v_2=26-16-10=0$ and $v_3=14-8-5=1$.
2. After removing all factors of $2$, the numerator residues modulo $8$ are $3,5,5,3,7,3,1,5,3,7,5,7$, with product $7$; the denominator odd parts also multiply to $7$. Thus the binomial is $1\pmod8$.
3. After removing all factors of $3$, the numerator unit residues modulo $9$ are $1,2,7,4,5,8,7,8,1,1,2,1$, with product $5$; the denominator unit parts multiply to $2$. The unit quotient is $5\cdot2^{-1}\equiv7$, so restoring $3^1$ gives $3\pmod9$.
4. Write $x=1+8k$. The congruence modulo $9$ gives $-k\equiv2$, hence $k\equiv7\pmod9$ and $x\equiv57\pmod{72}$.

</details>
