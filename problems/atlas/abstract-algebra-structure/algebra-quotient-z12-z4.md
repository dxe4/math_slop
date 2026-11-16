# A quotient found from a homomorphism

*Difficulty 3 of 5 · [Abstract algebra through structure-preserving maps](index.md) · exercise 1 of 7*

Define $\varphi:\mathbb{Z}/12\mathbb{Z}\to\mathbb{Z}/4\mathbb{Z}$ by $\varphi([a]_{12})=[a]_4$. Prove the map is well defined and a surjective homomorphism, compute its kernel, and identify the quotient $(\mathbb{Z}/12\mathbb{Z})/\ker\varphi$.

<details>
<summary>Hint 1</summary>

If a-b is divisible by 12, it is divisible by 4

</details>

<details>
<summary>Hint 2</summary>

List the residue classes modulo 12 that reduce to 0 modulo 4

</details>

<details>
<summary>Hint 3</summary>

Use the first isomorphism theorem only after checking the map

</details>

<details>
<summary>Worked solution</summary>

If $[a]_{12}=[b]_{12}$, then 12 divides $a-b$, so 4 divides $a-b$ and $[a]_4=[b]_4$; hence $\varphi$ is well defined. Reduction preserves addition, so $\varphi([a]+[b])=[a+b]_4=[a]_4+[b]_4$. Every class modulo 4 is hit by the same integer representative, so $\varphi$ is surjective. Its kernel consists of the classes divisible by 4: $\{[0]_{12},[4]_{12},[8]_{12}\}=\langle[4]_{12}\rangle$. The first isomorphism theorem now gives $(\mathbb{Z}/12\mathbb{Z})/\ker\varphi\cong\operatorname{im}\varphi=\mathbb{Z}/4\mathbb{Z}$. The quotient has four cosets, consistent with $12/3=4$.

**Answer.** $\ker\varphi=\{[0]_{12},[4]_{12},[8]_{12}\}$, and $(\mathbb{Z}/12\mathbb{Z})/\ker\varphi\cong\mathbb{Z}/4\mathbb{Z}$.

</details>

*Tags: homomorphism, kernel, quotient group*
