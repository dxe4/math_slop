# Force one chosen integer to divide another

*Hard · [Combinatorics](index.md)*

For $n\ge1$, prove that any selection of $n+1$ distinct integers from $\{1,2,\ldots,2n\}$ contains two distinct numbers such that one divides the other.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Partition the integers by a feature unchanged when a number is multiplied by a power of two.

</details>

<details>
<summary>Hint 2</summary>

Repeatedly remove factors of two; count the possible odd parts and compare two numbers with the same odd part.

</details>

<details>
<summary>Model proof</summary>

Odd-part classes convert divisibility into a pigeonhole argument.

1. Every positive integer in the range has a unique form $2^a m$ with $m$ odd and $a\ge0$.
2. There are only $n$ possible odd parts in the range, namely $1,3,\ldots,2n-1$.
3. Among $n+1$ chosen numbers, two share an odd part: write them as $2^a m$ and $2^b m$.
4. They are distinct, so $a\ne b$. Taking $a<b$, the second is $2^{b-a}$ times the first, proving the divisibility claim.

**Self-assessment rubric**

- Use the unique odd-part decomposition of each chosen integer.
- Count at most the specified number of odd-part classes.
- Obtain two distinct chosen numbers in the same class.
- Order their exponents and exhibit the integer quotient.

</details>
