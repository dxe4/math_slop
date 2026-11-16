# Mobius divisor cancellation

*Hard · [Original Putnam-style training](index.md)*

For the Möbius function $\mu$, prove $\sum_{d\mid n}\mu(d)=1$ if $n=1$ and $0$ if $n>1$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Only squarefree divisors contribute.

</details>

<details>
<summary>Hint 2</summary>

Index those divisors by subsets of the distinct prime factors of $n$.

</details>

<details>
<summary>Model proof</summary>

The sum is $\sum_{S\subseteq[r]}(-1)^{|S|}=(1-1)^r=0$.

1. If $n=1$, its only divisor is one and $\mu(1)=1$.
2. If $n>1$ has distinct prime factors $p_1,\ldots,p_r$, each contributing squarefree divisor corresponds to a subset $S\subseteq[r]$ and has Möbius value $(-1)^{|S|}$.
3. The sum is $\sum_{S\subseteq[r]}(-1)^{|S|}=(1-1)^r=0$.

**Self-assessment rubric**

- Handle n=1 and the Möbius convention.
- Index contributing squarefree divisors by prime-factor subsets.
- Apply the alternating subset sum for n&gt;1.

</details>
