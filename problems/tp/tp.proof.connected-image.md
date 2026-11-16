# A continuous image of a connected space is connected

*Medium · [Topology problems](index.md)*

If $X$ is connected and $f:X\to Y$ is continuous, prove that the subspace $f(X)$ is connected.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Assume the image has a separation by two nonempty relative open sets.

</details>

<details>
<summary>Hint 2</summary>

Pull both parts back and check disjointness, nonemptiness and coverage in the domain.

</details>

<details>
<summary>Model proof</summary>

A separation of the image would produce a separation of the connected domain.

1. Suppose $f(X)=U\cup V$ with $U,V$ disjoint nonempty relatively open sets. Write them as intersections with ambient open sets in $Y$.
2. The preimages $f^{-1}(U)$ and $f^{-1}(V)$ are open in $X$, disjoint, and cover $X$. They are nonempty because every point of the image has a preimage.
3. This is a separation of $X$, contradicting connectedness. Therefore the image has no such separation and is connected.

**Self-assessment rubric**

- Use a separation in the relative topology of the image.
- Check openness, nonemptiness, disjointness and coverage of both preimages.
- Contradict connectedness of the domain and conclude for the image.

</details>
