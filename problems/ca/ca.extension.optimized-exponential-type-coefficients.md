# Optimize the Cauchy radius instead of fixing it

*Hard · [Complex analysis problems](index.md)*

Suppose an entire f(z)=sum a\_n z^n satisfies $|f(z)|\le C e^{A|z|}$ with C&gt;0 and A&gt;0. Prove limsup as n tends to infinity of n\*\|a\_n\|^(1/n) is at most e\*A.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Treat the Cauchy radius as a variable depending on n.

</details>

<details>
<summary>Hint 2</summary>

Minimize A\*R-n\*log R for each positive index.

</details>

<details>
<summary>Model proof</summary>

The optimal expanding radius gives the exponential-type coefficient scale.

1. Cauchy's estimate gives \|a\_n\|&lt;=C\*exp(A\*R)/R^n for every R&gt;0.
2. For n&gt;=1, differentiation of A\*R-n\*log R gives the minimizing radius R=n/A. Substitution gives \|a\_n\|&lt;=C\*(e\*A/n)^n.
3. Taking nth roots and multiplying by n yields n\*\|a\_n\|^(1/n)&lt;=C^(1/n)\*e\*A. The factor C^(1/n) tends to one, proving the limsup bound.

**Self-assessment rubric**

- Keep the radius free in Cauchy's coefficient estimate.
- Choose and justify the minimizing radius for each index.
- Take the correct nth-root scaling and remove the constant factor.

</details>
