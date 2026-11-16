# Detect terminating expansions after cancellation

*Hard · [Computational arithmetic problems](index.md)*

Find the sum of all integers $k$ with $1\leq k\leq999$ for which the rational $k/1000$ has a terminating base-twelve expansion.

```answer
{"answer":{"kind":"integer","expected":"3500","checker_scope":"Exact requested integer or rational only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

A reduced rational terminates in a base exactly when its denominator divides a power of that base.

</details>

<details>
<summary>Hint 2</summary>

The prime factor five must disappear completely from the reduced denominator.

</details>

<details>
<summary>Worked solution</summary>

Termination depends on the denominator after reducing the fraction.

1. The denominator is $1000=2^3\cdot5^3$, whereas powers of twelve contain only primes two and three.
2. Thus all three factors of five must cancel, which is equivalent to $125\mid k$. This condition is also sufficient because the remaining denominator is a power of two.
3. The allowed numerators are $125,250,\ldots,875$, with sum $125(1+\cdots+7)=3500$.

</details>
