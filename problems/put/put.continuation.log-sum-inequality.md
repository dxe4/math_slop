# Log sum inequality

*Hard · [Original Putnam-style training](index.md)*

For positive numbers $a_i,b_i$, let $A=\sum_i a_i$ and $B=\sum_i b_i$. Prove $\sum_i a_i\log(a_i/b_i)\ge A\log(A/B)$, with equality condition.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Normalize both sequences into probability weights.

</details>

<details>
<summary>Hint 2</summary>

Apply $\log t\le t-1$ to the reciprocal likelihood ratios.

</details>

<details>
<summary>Model proof</summary>

Therefore the difference is nonnegative. Equality in $\log t\le t-1$ requires $q_i/p_i=1$ for every $i$, i.e. $a_i/A=b_i/B$ throughout.

1. Let $p_i=a_i/A$ and $q_i=b_i/B$, so both positive sequences sum to one. The requested difference is $A\sum_i p_i\log(p_i/q_i)$.
2. Using $\log(q_i/p_i)\le q_i/p_i-1$ and multiplying by $p_i$ gives $\sum_i p_i\log(q_i/p_i)\le\sum_i(q_i-p_i)=0$.
3. Therefore the difference is nonnegative. Equality in $\log t\le t-1$ requires $q_i/p_i=1$ for every $i$, i.e. $a_i/A=b_i/B$ throughout.

**Self-assessment rubric**

- Normalize a\_i and b\_i to probability vectors and rewrite the discrepancy.
- Apply log t≤t−1 to each normalized reciprocal ratio.
- Sum the inequalities and identify proportionality as the equality condition.

</details>
