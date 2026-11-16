# Control every root of a derivative perturbation

*Hard · [Original olympiad-style problems](index.md)*

Let P be a monic real polynomial with n distinct real roots, and let $\lambda\ne0$ be real. Prove $P+\lambda P^\prime$ has n distinct real roots. Locate one in every consecutive root gap and the remaining root on the appropriate outer side.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

At each root of P, the perturbed value is lambda times the derivative, whose signs alternate.

</details>

<details>
<summary>Hint 2</summary>

Compare the leading sign at the appropriate infinity with the value at the nearest extreme root.

</details>

<details>
<summary>Model proof</summary>

Use endpoint signs and the degree bound to prove an exact interlacing pattern.

1. Order the roots as $r_1<\cdots<r_n$. The derivative at $r_i$ is the product of $r_i-r_j$ over other roots, with sign $(-1)^{n-i}$.
2. Thus perturbed values at consecutive roots have opposite signs. The intermediate value theorem gives a root in each open gap.
3. For positive lambda, the value at the leftmost root has sign $(-1)^{n-1}$, opposite the monic degree-n sign at negative infinity, giving an additional root to the left. For negative lambda, the value at the rightmost root is negative while the value at positive infinity is positive, giving one to the right.
4. There are now n distinct real roots in disjoint intervals. Degree n excludes any others and makes each one simple, since multiplicities already total at least n. The n=1 case has no inner gaps and the same outer argument.

**Self-assessment rubric**

- Compute all derivative signs at simple real roots.
- Apply continuity to each disjoint gap.
- Use the correct outer side for each sign of lambda.
- Prove exactness and simplicity, including degree one.

</details>
