# Quartic parameter integral and its derivative

*Hard · [Original Putnam-style training](index.md)*

For $a>-1$ set $Q_a(x)=x^4+2ax^2+1$. Prove that both improper integrals $I(a)=\int_0^\infty Q_a(x)^{-1}\,dx$ and $J(a)=\int_0^\infty x^2Q_a(x)^{-2}\,dx$ converge, find exact formulas for both, and justify $I'(a)=-2J(a)$ without assuming differentiation under the integral sign.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

First use $x\mapsto1/x$ to express $I(a)$ with numerator $x^2$, then add the two representations.

</details>

<details>
<summary>Hint 2</summary>

For the sum, try $u=x-1/x$. To obtain $J(a)$, find an integrable bound for the parameter derivative on each compact subset of $(-1,\infty)$.

</details>

<details>
<summary>Model proof</summary>

Reciprocal symmetry creates the numerator for $u=x-1/x$; a uniform bound on compact parameter intervals then legitimizes differentiating the exact formula.

1. Write $Q_a(x)=(x^2-1)^2+2(a+1)x^2>0$ for $x>0$. Near $0$ the integrands are bounded, while at infinity they are respectively $O(x^{-4})$ and $O(x^{-6})$; hence both improper integrals converge. Under $x=1/t$, with finite limits taken before the improper limit, $I(a)=\int_0^\infty x^2/Q_a(x)\,dx$.
2. Adding the two representations gives $2I(a)=\int_0^\infty(1+x^2)/Q_a(x)\,dx$. Set $u=x-1/x$, increasing from $-\infty$ to $\infty$; then $du=(1+x^{-2})dx$ and $Q_a(x)=x^2[u^2+2(a+1)]$. Consequently $2I(a)=\int_{-\infty}^{\infty}du/[u^2+2(a+1)]=\pi/\sqrt{2(a+1)}$, so $I(a)=\pi/[2\sqrt{2(a+1)}]$.
3. Fix compact $K\subset(-1,\infty)$ and put $a_0=\min K$. From $2x^2\le1+x^4$ follows $Q_a(x)\ge c(1+x^4)$ for $a\in K$, where $c=\min(1,1+a_0)>0$. Thus $|\partial_a Q_a(x)^{-1}|=2x^2/Q_a(x)^2\le2c^{-2}x^2/(1+x^4)^2$, integrable on $(0,\infty)$. Dominated differentiation yields $I'(a)=-2J(a)$. Differentiating the exact $I(a)$ gives $J(a)=\pi/[8\sqrt2\,(a+1)^{3/2}]$.

**Self-assessment rubric**

- Use $a>-1$ to prove positivity and convergence at both endpoints for $I$ and $J$.
- Apply reciprocal substitution with correct improper limits.
- Use $u=x-1/x$ to evaluate the combined integral and derive $I(a)$.
- Give an integrable bound uniform on compact parameter intervals, then derive $J(a)$.

</details>
