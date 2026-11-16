# The kernel is normal

*Medium · [Abstract algebra problems](index.md)*

For a group homomorphism $\varphi:G\to K$, prove that $\ker\varphi$ is a normal subgroup of $G$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

First establish the subgroup property, then examine conjugation.

</details>

<details>
<summary>Hint 2</summary>

Apply the homomorphism to a conjugate and use preservation of inverses.

</details>

<details>
<summary>Model proof</summary>

The identity image is preserved under subgroup operations and conjugation.

1. The identity lies in the kernel. If $x,y$ lie there, $\varphi(xy^{-1})=\varphi(x)\varphi(y)^{-1}=e$, so the kernel is a subgroup.
2. For $x\in\ker\varphi$ and $g\in G$, $\varphi(gxg^{-1})=\varphi(g)e\varphi(g)^{-1}=e$.
3. Thus conjugation by any group element sends kernel elements back into the kernel, proving normality.

**Self-assessment rubric**

- Prove the kernel is nonempty and closed under the subgroup criterion.
- Compute the image of an arbitrary conjugate in the correct multiplication order.
- Conclude invariance for every conjugating element, without a surjectivity assumption.

</details>
