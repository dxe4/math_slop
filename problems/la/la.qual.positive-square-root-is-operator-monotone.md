# Prove the positive square-root order theorem

*Hard · [Linear algebra problems](index.md)*

For real symmetric positive definite A and B with $A\le B$ in quadratic-form order, prove $A^{1/2}\le B^{1/2}$. Derive a convergent integral formula from scalar spectral calculus, and give positive definite A&lt;=B for which $A^2\nleq B^2$. Preparation: finite spectral calculus and improper scalar integration.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

First prove positive inversion reverses order by normalizing one matrix to the identity.

</details>

<details>
<summary>Hint 2</summary>

Use $\sqrt x=\pi^{-1}\int_0^\infty t^{-1/2}x/(t+x)\,dt$ and compare the resolvents under the integral.

</details>

<details>
<summary>Model proof</summary>

A positive resolvent integral proves an order property that arbitrary powers do not share.

1. If $0<C\le D$, normalize by $C^{-1/2}$ to obtain $E=C^{-1/2}DC^{-1/2}\ge I$. Its spectral inverse is at most I, so $D^{-1}=C^{-1/2}E^{-1}C^{-1/2}\le C^{-1}$.
2. For positive scalar x, substituting $t=xu$ and then $u=v^2$ gives $\int_0^\infty t^{-1/2}x/(t+x)\,dt=\pi\sqrt x$. Apply this identity on an orthonormal eigenbasis to get the matrix formula. Its norm integral converges: the integrand is bounded by a constant times $t^{-1/2}$ near zero and $t^{-3/2}$ near infinity.
3. For each t&gt;0, inverse order gives $(tI+A)^{-1}\ge(tI+B)^{-1}$. Hence $A(tI+A)^{-1}=I-t(tI+A)^{-1}\le I-t(tI+B)^{-1}$. Integrating its quadratic-form inequality with positive weight proves the square-root order.
4. In contrast take $A=\operatorname{diag}(2,1)$ and $B=\begin{pmatrix}3&1\\1&2\end{pmatrix}$. Both are positive definite and $B-A$ is the positive semidefinite all-ones matrix. But $B^2-A^2=\begin{pmatrix}6&5\\5&4\end{pmatrix}$ has negative value minus four on $(4,-5)^T$, so squaring does not preserve the order.

**Self-assessment rubric**

- Prove the order reversal of positive inversion by congruence and spectral calculus.
- Derive the scalar normalization and justify convergence of the finite matrix integral.
- Compare the resolvent functions and integrate their form inequalities.
- Verify positive definiteness, the initial order and a negative squared-order witness.

</details>
