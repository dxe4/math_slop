# Determine when a continuous equilibrium admits delayed departure

*Hard · [Differential equations problems](index.md)*

For p&gt;0 define F(0)=0 and $F(y)=y(\log(1/y))^p$ for 0&lt;y&lt;e^(-1). Consider nonnegative forward solutions of y'=F(y) starting at zero, up to their first value e^(-1). Prove delayed positive departure is possible exactly when p&gt;1. Give the departure formula when p=2.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A positive branch has elapsed time equal to the integral of 1/F from zero to its current state.

</details>

<details>
<summary>Hint 2</summary>

Use u=log(1/y) to decide whether that integral is finite.

</details>

<details>
<summary>Model proof</summary>

The reciprocal-speed integral decides whether the zero state can be left in finite time.

1. For a branch that becomes positive after a waiting time T, separation gives t-T=integral from 0 to y(t) of ds/\[s\*(log(1/s))^p\]. With u=log(1/s), this is integral from log(1/y(t)) to infinity of u^(-p) du.
2. This integral is finite exactly for p&gt;1. If p&lt;=1 and any positive state were reached from zero, separate between that state and earlier positive states and let those states decrease to zero; the required elapsed time would be infinite, a contradiction.
3. For p&gt;1 the inverse of the finite integral gives a positive branch which may be joined to the zero branch after any T. Its derivative tends to F(0)=0, so the join is C^1. For p=2 the integral is 1/log(1/y), yielding y(t)=exp(-1/(t-T)) for 0&lt;t-T&lt;1, with y=0 for t&lt;=T.

**Self-assessment rubric**

- Derive the elapsed-time integral and its logarithmic substitution.
- Rule out any finite-time departure when the integral diverges.
- Construct the finite-integral branch and justify its differentiable join, including p=2.

</details>
