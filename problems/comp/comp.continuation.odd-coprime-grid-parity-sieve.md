# Count coprime pairs after imposing a parity sublattice

*Hard · [Computational arithmetic problems](index.md)*

How many ordered pairs $(a,b)$ satisfy $1\le a,b\le40$, $a+b$ even, and $\gcd(a,b)=1$?

```answer
{"answer":{"kind":"integer","expected":"317","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

The parity condition and coprimality together force both coordinates to be odd.

</details>

<details>
<summary>Hint 2</summary>

Below an odd denominator, pair a reduced numerator with its complement to count odd reduced numerators.

</details>

<details>
<summary>Worked solution</summary>

A parity-restricted totient sieve counts the triangular half of the grid and then restores symmetry.

1. Equal parity with gcd one excludes two even coordinates, so only the odd integers $1,3,\ldots,39$ occur.
2. For odd $b>1$, the reduced residues $a$ and $b-a$ have opposite parity. Exactly $\varphi(b)/2$ odd numerators lie below $b$.
3. The totients at $1,3,\ldots,39$ are $1,2,4,6,6,10,12,8,16,18,12,22,20,18,28,30,20,24,36,24$, summing to $317$.
4. Counting the lower triangle, its reflection and the sole coprime diagonal pair $(1,1)$ gives $2(317-1)/2+1=317$.

</details>
