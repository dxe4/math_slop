# Sharp Simpson error and equality cases

*Hard · [Original Putnam-style training](index.md)*

For real $f\in C^4[0,1]$, let $S(f)=[f(0)+4f(1/2)+f(1)]/6$. Prove the sharp inequality $\left|\int_0^1f(x)\,dx-S(f)\right|\le\|f^{(4)}\|_\infty/2880$ and characterize all functions attaining equality.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

The error functional vanishes on cubics. Express $f$ as its cubic Taylor polynomial plus an integral of $(x-t)_+^3/6$ against $f^{(4)}(t)$.

</details>

<details>
<summary>Hint 2</summary>

Compute the resulting kernel for $0\le t\le1/2$; reflection gives the other half. Its sign controls the bound and equality.

</details>

<details>
<summary>Model proof</summary>

A signed Peano kernel yields the exact Simpson error; its integral fixes the best constant, and strict sign in the interior determines equality cases.

1. Let $L(f)=\int_0^1f(x)\,dx-S(f)$. Direct evaluation on $1,x,x^2,x^3$ gives $L(p)=0$ for every cubic $p$. Taylor's integral formula gives $f(x)=p_3(x)+\int_0^1(x-t)_+^3 f^{(4)}(t)\,dt/6$. Continuity on the compact integration region justifies the interchange, so $L(f)=\int_0^1K(t)f^{(4)}(t)\,dt$, where $K(t)=L((x-t)_+^3/6)$.
2. For $0\le t\le1/2$, direct integration gives $K(t)=(1-t)^4/24-[4(1/2-t)^3+(1-t)^3]/36=t^3(3t-2)/72$. Symmetry of $L$ under $x\mapsto1-x$, together with its vanishing on cubics, gives $K(t)=K(1-t)$ on the other half. Hence $K(t)<0$ for $0<t<1$, and $\int_0^1|K(t)|\,dt=-2\int_0^{1/2}t^3(3t-2)\,dt/72=1/2880$.
3. Therefore $|L(f)|\le\|f^{(4)}\|_\infty/2880$. For $f(x)=x^4$, $L(f)=1/5-5/24=-1/120$ and $\|f^{(4)}\|_\infty=24$, so equality holds and the constant is sharp. Since $K$ has strict sign in the interior and $f^{(4)}$ is continuous, equality occurs exactly when $f^{(4)}$ is constant, including zero; equivalently $f(x)=cx^4+p_3(x)$ for real $c$ and a polynomial $p_3$ of degree at most three.

**Self-assessment rubric**

- Verify that Simpson error vanishes on all cubic polynomials.
- Justify the integral remainder and derive the signed kernel representation.
- Compute the reflected kernel, establish its sign, and integrate its absolute value to $1/2880$.
- Prove quartic sharpness and characterize equality from strict kernel sign and continuity.

</details>
