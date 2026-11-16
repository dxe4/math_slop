# Detect injectivity through a kernel

*Medium · [Abstract algebra problems](index.md)*

Prove that a group homomorphism $\varphi:G\to K$ is injective if and only if $\ker\varphi=\{e_G\}$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Prove the two logical directions separately.

</details>

<details>
<summary>Hint 2</summary>

For the converse, turn equality of two images into an element whose image is the identity.

</details>

<details>
<summary>Model proof</summary>

Equality of images is measured by a quotient element in the kernel.

1. If $\varphi$ is injective and $x\in\ker\varphi$, then $\varphi(x)=e_K=\varphi(e_G)$, hence $x=e_G$.
2. Conversely, assume the kernel is trivial and $\varphi(x)=\varphi(y)$. Then $\varphi(y^{-1}x)=\varphi(y)^{-1}\varphi(x)=e_K$.
3. Triviality of the kernel gives $y^{-1}x=e_G$, so $x=y$. This is injectivity.

**Self-assessment rubric**

- Use injectivity to identify every kernel element with the identity.
- Convert equality of images into a kernel condition.
- Use the trivial kernel to prove equality of the original elements.

</details>
