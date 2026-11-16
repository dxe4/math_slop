# Roots unity product general

*Hard · [Original Putnam-style training](index.md)*

For $n\ge2$ and a primitive $n$th root $\zeta$, prove $\prod_{k=1}^{n-1}(1-\zeta^k)=n$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Factor $(x^n-1)/(x-1)$ over the complex roots.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the quotient at $x=1$ using its geometric-sum form.

</details>

<details>
<summary>Model proof</summary>

Evaluating both polynomial identities at $x=1$ gives the product on the left and $n$ on the right.

1. The roots $1,\zeta,\ldots,\zeta^{n-1}$ are distinct, so $(x^n-1)/(x-1)=\prod_{k=1}^{n-1}(x-\zeta^k)$.
2. The same quotient is $1+x+\cdots+x^{n-1}$ by the finite geometric identity.
3. Evaluating both polynomial identities at $x=1$ gives the product on the left and $n$ on the right.

**Self-assessment rubric**

- Factor the geometric quotient over all nontrivial nth roots.
- Identify the same quotient as a finite geometric sum.
- Evaluate both polynomial expressions at one to get n.

</details>
