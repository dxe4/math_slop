# Evaluate a refined approximation bound using the next partial quotient

*Easy · [Computational arithmetic problems](index.md)*

Use the convergent bound $|\alpha-p_n/q_n|<1/(a_{n+1}q_n^2)$. With q\_n=7 and a\_(n+1)=6, return the upper-bound fraction.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":294},"checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Square the denominator before multiplying by the next partial quotient.

</details>

<details>
<summary>Hint 2</summary>

This is a strict error bound, not an exact error value.

</details>

<details>
<summary>Worked solution</summary>

The next continued-fraction coefficient improves the general inverse-square bound.

1. The supplied denominator expression is 6 times 7 squared.
2. It equals 6 times 49, or 294.
3. The upper-bound fraction is 1/294; the actual approximation error is strictly smaller.

</details>
