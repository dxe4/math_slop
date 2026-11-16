# Normalization and Hellinger geometry of a DQM path

*Medium · [Statistics and probability](index.md)*

Let probability densities $p_t$ satisfy $\sqrt{p_t}=q_0+\tfrac12t\ell q_0+r_t$, where $q_0=\sqrt{p_0}$, $\ell\in L^2(P_0)$, and $\|r_t\|_{L^2(dx)}=o(|t|)$ as $t\to0$ through an open interval. Using normalization and Hilbert inner products, prove $E_0\ell=0$ and $t^{-2}\int(\sqrt{p_t}-\sqrt{p_0})^2dx\to E_0\ell^2/4$. State the convention for the Hellinger quantity used here.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Graduate derivation and personal task-specific rubric reflection only; no automatic proof verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Expand the squared norm of the perturbed square-root density and use that both densities integrate to one.

</details>

<details>
<summary>Hint 2</summary>

For the distance limit, divide the square-root difference by the path parameter before taking its norm.

</details>

<details>
<summary>Model proof</summary>

The unit sphere of square-root densities forces the score to be tangent to normalization.

1. Put $d_t=\sqrt{p_t}-q_0=\tfrac12t\ell q_0+r_t$. Its norm is $O(|t|)$ and $2\langle q_0,d_t\rangle=tE_0\ell+o(|t|)$ by Cauchy–Schwarz and $\|q_0\|_2=1$.
2. Normalization gives $0=\|q_0+d_t\|_2^2-\|q_0\|_2^2=2\langle q_0,d_t\rangle+\|d_t\|_2^2$. Dividing by $t$ and taking the two-sided limit yields $E_0\ell=0$.
3. Also $d_t/t\to\ell q_0/2$ in $L^2$, so continuity of the norm gives $\|d_t\|_2^2/t^2\to E_0\ell^2/4$.
4. The displayed Hellinger squared quantity is the unhalved integral of the squared square-root difference. A definition including a factor $1/2$ would halve the limiting constant.

**Self-assessment rubric**

- Expand normalized square-root densities with a controlled remainder.
- Deduce the zero-mean score condition.
- Derive the distance limit and specify its normalization.

</details>
