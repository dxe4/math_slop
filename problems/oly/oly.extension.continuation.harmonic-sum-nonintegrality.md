# Use a unique maximal power of two in a harmonic sum

*Hard · [Original olympiad-style problems](index.md)*

For every integer $n>1$, prove $1+1/2+\cdots+1/n$ is not an integer.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Multiply by the least common multiple of $1,\ldots,n$.

</details>

<details>
<summary>Hint 2</summary>

If $2^a\le n<2^{a+1}$, exactly one denominator has maximal two-adic order $a$.

</details>

<details>
<summary>Model proof</summary>

Find a parity obstruction after clearing denominators.

1. Let $L$ be the least common multiple and choose $a$ with $2^a\le n<2^{a+1}$. Since $n>1$, $a\ge1$ and the exact power of two dividing $L$ is $2^a$.
2. The only number between one and $n$ with that maximal two-adic order is $2^a$ itself: the next positive odd multiple would exceed $2^{a+1}$.
3. Thus $L/(2^a)$ is odd, while every other $L/k$ is even. The numerator of the cleared harmonic sum is odd.
4. If the sum were an integer, that odd numerator would be divisible by the even number $L$, impossible. Hence no such sum is integral.

**Self-assessment rubric**

- Identify the exact maximal power of two in the common denominator.
- Prove uniqueness of the denominator attaining that power.
- Compare the odd cleared numerator with the even common denominator.

</details>
