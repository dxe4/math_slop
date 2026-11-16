# Prove a uniform modulus without claiming a global Lipschitz bound

*Hard · [Real analysis](index.md)*

Prove $f(x)=\sqrt x$ is uniformly continuous on \[0,infinity) using \|sqrt(x)-sqrt(y)\|&lt;=sqrt(\|x-y\|). Derive that inequality and explain why no finite global Lipschitz constant exists.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Assume x&gt;=y and write x-y as a product of the root sum and root difference.

</details>

<details>
<summary>Hint 2</summary>

For the Lipschitz question, compare a small positive x with zero.

</details>

<details>
<summary>Model proof</summary>

A square-root modulus proves uniform continuity while allowing unbounded local slope near zero.

1. For x&gt;=y&gt;=0, x-y=(sqrt(x)-sqrt(y))(sqrt(x)+sqrt(y)) is at least (sqrt(x)-sqrt(y))^2. Symmetry gives the inequality for either order.
2. For epsilon&gt;0, choose delta=epsilon^2. Then input distance below delta forces output distance below epsilon, independently of x and y.
3. A Lipschitz bound against zero would require sqrt(x)&lt;=Kx for every positive x, or 1/sqrt(x)&lt;=K, impossible as x tends to zero.

**Self-assessment rubric**

- Derive the square-root distance inequality on the full nonnegative domain.
- Choose a positive radius depending only on tolerance.
- Refute a finite Lipschitz constant with small positive inputs.

</details>
