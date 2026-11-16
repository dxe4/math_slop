# Permutation cycle length uniform

*Hard · [Original Putnam-style training](index.md)*

For a uniform random permutation of $[n]$, prove the length of the cycle containing label $1$ is uniform on $\{1,\ldots,n\}$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Fix a possible cycle length $k$ and choose the other cycle members.

</details>

<details>
<summary>Hint 2</summary>

Order that cycle and permute all remaining labels.

</details>

<details>
<summary>Model proof</summary>

The product is $(n-1)!$, independent of $k$. Dividing by $n!$ gives probability $1/n$ for every length.

1. To make the cycle containing $1$ have length $k$, choose its other $k-1$ labels in $\binom{n-1}{k-1}$ ways.
2. With $1$ fixed as the first written cycle symbol, the chosen labels have $(k-1)!$ cyclic orders; the other $n-k$ labels form any permutation in $(n-k)!$ ways.
3. The product is $(n-1)!$, independent of $k$. Dividing by $n!$ gives probability $1/n$ for every length.

**Self-assessment rubric**

- Choose the other k−1 members of the cycle containing label one.
- Count cyclic arrangements and arbitrary permutations of remaining labels.
- Simplify to (n−1)!/n!=1/n for every k.

</details>
