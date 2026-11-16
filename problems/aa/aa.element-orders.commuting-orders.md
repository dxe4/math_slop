# Determine an order from two power constraints

*Hard · [Abstract algebra problems](index.md)*

Let commuting group elements $a,b$ have orders $4$ and $6$ respectively. Find the order of $ab$.

```answer
{"answer":{"kind":"integer","expected":12,"checker_scope":"Exact stated finite group or ring answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Commutativity allows a power of the product to be separated into two powers.

</details>

<details>
<summary>Hint 2</summary>

Bound the order using a common multiple, then use two smaller powers to rule out every proper divisor.

</details>

<details>
<summary>Worked solution</summary>

Combine a divisibility upper bound with powers that remain nontrivial.

1. Commutativity gives $(ab)^{12}=a^{12}b^{12}=e$, so the order divides $12$.
2. But $(ab)^6=a^6b^6=a^2\ne e$, since $a$ has order $4$.
3. Also $(ab)^4=a^4b^4=b^4\ne e$, since $b$ has order $6$.
4. Every proper divisor of $12$ divides either $6$ or $4$, and those two power computations rule all of them out.
5. The order is therefore exactly $12$.

</details>
