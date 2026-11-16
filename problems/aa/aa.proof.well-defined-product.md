# Build the quotient group operation

*Hard · [Abstract algebra problems](index.md)*

Let $N$ be a normal subgroup of $G$. Prove that $(gN)(hN)=ghN$ is well-defined and makes the left cosets into a group.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Write alternative representatives by multiplying the chosen representatives on the right by elements of the subgroup.

</details>

<details>
<summary>Hint 2</summary>

Move the intervening subgroup element past the second representative by conjugation, using normality.

</details>

<details>
<summary>Model proof</summary>

Normality is exactly what makes the product independent of representatives.

1. If $gN=g^{\prime} N$ and $hN=h^{\prime} N$, write $g^{\prime}=gn_1$ and $h^{\prime}=hn_2$ with $n_1,n_2\in N$.
2. Then $g^{\prime} h^{\prime}=gn_1hn_2=gh(h^{-1}n_1h)n_2$. Normality places $h^{-1}n_1h$ in $N$, so the last two factors have product in $N$.
3. Therefore $g^{\prime} h^{\prime} N=ghN$, proving independence of both representatives.
4. Associativity follows from that in $G$: both parenthesizations of three cosets yield the coset of the threefold product.
5. The identity is $N=eN$, and the inverse of $gN$ is $g^{-1}N$. Thus all group axioms hold.

**Self-assessment rubric**

- Express both alternative representatives using subgroup elements.
- Use the conjugated subgroup element to establish well-definedness.
- Verify associativity of the induced operation.
- Identify and verify the quotient identity and inverses.

</details>
