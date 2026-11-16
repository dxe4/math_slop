# Recover convergence from convergent means under monotonicity

*Medium · [Real analysis](index.md)*

Suppose a real sequence x\_n is nondecreasing and its arithmetic means $m_n=(x_1+\cdots+x_n)/n$ converge to a finite L. Prove x\_n tends to L. Explain why monotonicity cannot be omitted.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Bound x\_n using the later mean m\_(2n) and the first term.

</details>

<details>
<summary>Hint 2</summary>

After obtaining a finite monotone limit, verify that its averages have the same limit.

</details>

<details>
<summary>Model proof</summary>

Monotonicity prevents isolated large excursions from hiding in the averages.

1. Because the first n terms are at least x\_1 and the next n terms are at least x\_n, m\_(2n)&gt;=(x\_1+x\_n)/2. Thus x\_n&lt;=2\*m\_(2n)-x\_1, which is bounded above. Monotone convergence gives x\_n tending to some finite ell.
2. Averages of a convergent sequence have the same limit: for any tolerance, split the mean error into a finite beginning divided by n and a uniformly small tail. Hence m\_n tends to ell, so uniqueness of limits gives ell=L.
3. Without monotonicity, x\_n=(-1)^n has means tending to zero but no ordinary limit. Thus the added hypothesis performs essential work.

**Self-assessment rubric**

- Obtain an upper bound from later means with the finite lower tail handled.
- Justify the common limit of a convergent sequence and its means.
- Give a genuine failure after dropping monotonicity.

</details>
