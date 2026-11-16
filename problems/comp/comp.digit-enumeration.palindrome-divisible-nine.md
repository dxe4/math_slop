# Count long palindromes using residue balance

*Hard · [Computational arithmetic problems](index.md)*

How many $12$-digit decimal palindromes are divisible by nine? The leading digit is nonzero.

```answer
{"answer":{"kind":"integer","expected":"100000","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

The first six digits determine the palindrome.

</details>

<details>
<summary>Hint 2</summary>

Divisibility by nine depends on twice the sum of those six digits; vary the leading digit after fixing the other five.

</details>

<details>
<summary>Worked solution</summary>

The nonzero leading digits give exactly one representative of each residue modulo nine.

1. Write the first six digits as $a,b,c,d,e,f$, where $a\in\{1,\ldots,9\}$ and the others lie in $\{0,\ldots,9\}$. The full digit sum is $2(a+b+c+d+e+f)$.
2. Since two is invertible modulo nine, divisibility requires $a+b+c+d+e+f\equiv0\pmod9$. For every choice of the last five digits exactly one allowed $a$ satisfies this.
3. There are $10^5=100000$ choices of those five digits, so the count is $100000$.

</details>
