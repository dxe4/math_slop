# Optimise a divisor-count search over ordered prime exponents

*Hard · [Computational arithmetic problems](index.md)*

Find the least positive integer having exactly $48$ positive divisors.

```answer
{"answer":{"kind":"integer","expected":"2520","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

For a minimum, use consecutive primes and arrange their exponents in nonincreasing order.

</details>

<details>
<summary>Hint 2</summary>

Enumerate multiplicative partitions of $48$ into the factors $a_i+1$; bound large first factors before comparing the remaining candidates.

</details>

<details>
<summary>Worked solution</summary>

An exchange argument reduces an unbounded integer search to a finite partition optimisation.

1. Write $n=2^{a_1}3^{a_2}\cdots$ with $a_1\ge a_2\ge\cdots\ge1$: using larger primes or placing a larger exponent on a larger prime would increase $n$ without changing its divisor count.
2. The factors $a_i+1$ form a multiplicative partition of $48$. A largest factor at least $12$ gives either the single factor $48$ or at least $2^{11}\cdot3>2520$, so those cases cannot minimise.
3. The remaining partitions are $(8,6),(8,3,2),(6,4,2),(6,2,2,2),(4,4,3),(4,3,2,2),(3,2,2,2,2)$. Their minimal integers are respectively $31104,5760,4320,3360,5400,2520,4620$.
4. The smallest is $2^3 3^2 5\cdot7=2520$, whose divisor count is $4\cdot3\cdot2\cdot2=48$.

</details>
