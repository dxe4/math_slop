# Derangement inclusion exclusion

*Hard · [Original Putnam-style training](index.md)*

Prove the number $D_n$ of derangements of $n$ labels is $n!\sum_{k=0}^n(-1)^k/k!$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Let $E_i$ be the permutations fixing label $i$.

</details>

<details>
<summary>Hint 2</summary>

For each $k$-element set of fixed labels, count the unrestricted permutations left.

</details>

<details>
<summary>Model proof</summary>

Since $\binom nk(n-k)!=n!/k!$, factoring out $n!$ yields the stated formula.

1. There are $n!$ total permutations, and for a specified set of $k$ labels fixed, $(n-k)!$ permutations remain.
2. Inclusion–exclusion gives $D_n=\sum_{k=0}^n(-1)^k\binom nk(n-k)!$.
3. Since $\binom nk(n-k)!=n!/k!$, factoring out $n!$ yields the stated formula.

**Self-assessment rubric**

- Define fixed-point events and count permutations fixing a chosen k-set.
- Apply inclusion–exclusion across all fixed labels.
- Simplify binomial-factorial terms to n!/k!.

</details>
