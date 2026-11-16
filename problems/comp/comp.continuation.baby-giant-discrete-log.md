# Find and certify the least exponent with a baby-step giant-step search

*Hard · [Computational arithmetic problems](index.md)*

Find the least integer $e\ge0$ satisfying $2^e\equiv3\pmod{101}$.

```answer
{"answer":{"kind":"integer","expected":"69","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Use blocks $e=10j+i$ with $0\le i<10$ rather than computing every power sequentially.

</details>

<details>
<summary>Hint 2</summary>

Compare a baby-step table of $2^i$ with giant values $3(2^{10})^{-j}$, stopping at the first matching block.

</details>

<details>
<summary>Worked solution</summary>

A collision between short and long exponent steps gives both an exponent and a minimality certificate.

1. The baby values for $i=0,\ldots,9$ are $1,2,4,8,16,32,64,27,54,7$ modulo $101$.
2. Since $2^{10}\equiv14$ and $14^{-1}\equiv65$, the giant values for $j=0,\ldots,6$ are $3,94,50,18,59,98,7$.
3. The first giant collision is at $j=6$, where the value $7$ matches only baby index $i=9$. It gives $e=10\cdot6+9=69$.
4. No earlier giant value is in the baby table, excluding every exponent below $60$; within the next block only index $9$ matches. Thus no smaller nonnegative exponent works.

</details>
