# Combine gcd fibres with prime-power multiplicativity

*Medium · [Computational arithmetic problems](index.md)*

Compute $\sum_{k=1}^{84}\gcd(k,84)^2$. You may use that exactly $\varphi(N/d)$ residues $1\le k\le N$ have $\gcd(k,N)=d$ when $d\mid N$.

```answer
{"answer":{"kind":"integer","expected":"13310","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Partition the range by the value of $\gcd(k,84)$ before squaring it.

</details>

<details>
<summary>Hint 2</summary>

The divisor sum factors across the coprime prime-power factors of $84$.

</details>

<details>
<summary>Worked solution</summary>

Gcd fibres turn a residue loop into a multiplicative divisor computation.

1. The supplied fibre count gives $\sum_{d\mid84}d^2\varphi(84/d)$.
2. Since $84=4\cdot3\cdot7$ with coprime factors, the sum factors into the corresponding sums for $4,3,7$.
3. These are $\varphi(4)+4\varphi(2)+16\varphi(1)=22$, $\varphi(3)+9\varphi(1)=11$, and $\varphi(7)+49\varphi(1)=55$.
4. Multiplication gives $22\cdot11\cdot55=13310$.

</details>
