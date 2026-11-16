# Positive multiplicative classification

*Hard · [Original Putnam-style training](index.md)*

If continuous $f:(0,\infty)\to(0,\infty)$ satisfies $f(xy)=f(x)f(y)$, prove $f(x)=x^c$ for some real $c$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Compose $f$ with the exponential map and take a logarithm.

</details>

<details>
<summary>Hint 2</summary>

The transformed function is continuous and additive on all of $\mathbb R$.

</details>

<details>
<summary>Model proof</summary>

For $x=e^t$, $f(x)=e^{g(t)}=e^{ct}=x^c$. Direct substitution verifies every such function.

1. Define $g(t)=\log f(e^t)$; positivity makes the logarithm defined and continuity of $f$ makes $g$ continuous.
2. $g(s+t)=\log f(e^se^t)=\log[f(e^s)f(e^t)]=g(s)+g(t)$, so continuous additivity gives $g(t)=ct$.
3. For $x=e^t$, $f(x)=e^{g(t)}=e^{ct}=x^c$. Direct substitution verifies every such function.

**Self-assessment rubric**

- Define a continuous logarithmic transform on the additive real line.
- Verify additivity from multiplicativity and solve by continuity.
- Return to x&gt;0 and verify the power-function family.

</details>
