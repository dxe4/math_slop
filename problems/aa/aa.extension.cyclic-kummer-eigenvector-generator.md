# Extract a radical generator by a character projector

*Hard · [Abstract algebra problems](index.md)*

Suppose $\operatorname{char}K\nmid n$, $K$ contains a primitive $n$th root $\zeta$, and $L/K$ is cyclic Galois of degree $n$ with generator $\sigma$. Construct $\alpha\ne0$ with $\sigma(\alpha)=\zeta\alpha$ and prove $L=K(\alpha)$ and $\alpha^n\in K$. Conversely prove that an irreducible $X^n-a$ over such a field defines a cyclic Galois extension. You may use independence of field automorphisms.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Use the nonzero projector-like sum $sumzeta^{-i}sigma^i$.

</details>

<details>
<summary>Hint 2</summary>

Distinct powers of $zeta$ determine the orbit size, while the converse splits all roots inside the radical field.

</details>

<details>
<summary>Model proof</summary>

A character-weighted sum produces an eigenvector with a full Galois orbit.

1. The operator $T=\sum_{i=0}^{n-1}\zeta^{-i}\sigma^i$ is nonzero by automorphism independence. Choose $c$ such that $\alpha=T(c)\ne0$. Reindexing gives $\sigma(\alpha)=\zeta\alpha$.
2. The conjugates $\zeta^j\alpha$ are all distinct. Thus $\alpha$ has degree $n$, generates $L$, and $\alpha^n$ is fixed by $\sigma$.
3. Conversely irreducibility gives degree $n$, and the roots $\zeta^j\alpha$ all lie in $K(\alpha)$ and are distinct. The map $\alpha\mapsto\zeta\alpha$ is an automorphism of order $n$, so the splitting extension is cyclic.

**Self-assessment rubric**

- Use automorphism independence to obtain a nonzero character-weighted eigenvector.
- Derive a full orbit and a base-field nth power from the primitive eigenvalue.
- Prove that irreducibility and the roots-of-unity hypothesis give the cyclic converse.

</details>
