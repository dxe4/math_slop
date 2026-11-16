# Count a divisibility-constrained digit family with a leading restriction

*Hard · [Computational arithmetic problems](index.md)*

How many six-digit decimal integers use only the digits $0,1,2$ and are divisible by $9$? Leading zeros are forbidden.

```answer
{"answer":{"kind":"integer","expected":"45","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Use digit sums to identify which multiple of $9$ is possible, then count coefficient patterns.

</details>

<details>
<summary>Hint 2</summary>

First count all length-six strings with the desired sum, and subtract the strings whose first digit is zero.

</details>

<details>
<summary>Worked solution</summary>

A digit generating polynomial handles both the divisibility filter and the forbidden leading state.

1. The digit sum lies between $1$ and $12$, so divisibility by $9$ requires sum exactly $9$.
2. The coefficient of $x^9$ in $(1+x+x^2)^6$ equals the coefficient of $x^3$ by reversing each digit $d\mapsto2-d$. Sum $3$ comes from three ones in $\binom63=20$ ways or one two and one one in $6\cdot5=30$ ways.
3. With a leading zero, the remaining five digits must sum to $9$. Reversal gives sum $1$, possible in five ways.
4. The required count is $20+30-5=45$.

</details>
