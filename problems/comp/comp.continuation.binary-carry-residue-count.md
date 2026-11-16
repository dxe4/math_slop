# Combine a binomial valuation with a residue-aware bit count

*Hard · [Computational arithmetic problems](index.md)*

How many integers $0\le n<2^{10}$ satisfy $3\mid n$ and $v_2\!\binom{2n}{n}=4$? Here $v_2$ is the exponent of $2$ in a positive integer.

```answer
{"answer":{"kind":"integer","expected":"100","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Express factorial $2$-valuations through the number of ones in a binary expansion.

</details>

<details>
<summary>Hint 2</summary>

Among ten bit positions, split the positions by parity because $2^i\equiv(-1)^i\pmod3$.

</details>

<details>
<summary>Worked solution</summary>

A valuation identity turns the binomial condition into an exact-weight digit DP with a small residue state.

1. Legendre summation gives $v_2(n!)=n-s_2(n)$, where $s_2$ counts binary ones. Since $s_2(2n)=s_2(n)$, the required binomial valuation equals $s_2(n)$.
2. Thus exactly four of the ten bits must be one. Let $a$ of them occupy the five even positions and $b$ the five odd positions, so $a+b=4$.
3. Divisibility by $3$ requires $a-b\equiv0\pmod3$. Substituting $b=4-a$ gives $a\equiv2\pmod3$, whose only feasible value is $a=2$, hence $b=2$.
4. Choose two positions from each parity class independently: $\binom52\binom52=100$.

</details>
