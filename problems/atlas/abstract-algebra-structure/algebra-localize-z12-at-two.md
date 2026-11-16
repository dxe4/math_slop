# Localization kills exactly the two-primary torsion

*Difficulty 5 of 5 · [Abstract algebra through structure-preserving maps](index.md) · exercise 5 of 7*

Let $R=Z/12Z$ and let S be the multiplicative set of powers of the class [2]. Determine the kernel of $R\to S^{-1}R$ and prove that $S^{-1}R$ is isomorphic to F₃.

<details>
<summary>Hint 1</summary>

A class r maps to zero exactly when some power of 2 annihilates it modulo 12

</details>

<details>
<summary>Hint 2</summary>

A power of 2 supplies no factor of 3

</details>

<details>
<summary>Hint 3</summary>

Reduction modulo 3 sends every member of S to a unit

</details>

<details>
<summary>Worked solution</summary>

A class [r] maps to zero exactly when $2^k$ r is divisible by 12 for some $k\ge 0$. Since no power of 2 contains a factor of 3, this requires 3|r. Conversely, if $r=3t$ then $2^2r=12t$, so every multiple of 3 is killed. Thus the kernel is {0,3,6,9}. Reduction modulo 3 defines a surjective ring map $R\to F_3$ with exactly this kernel. Every power of [2] maps to either 1 or 2 in F₃ and is therefore a unit, so the universal property gives $S^{-1}R\to F_3$. Explicitly, $[r]/[2]^k$ maps to $[r]\cdot [2]^{-k}$ modulo 3. If this image is zero, then 3|r, so $[r]/1=0$ in the localization and therefore $[r]/[2]^k=0$. The induced map is injective as well as surjective, hence an isomorphism. Equivalently, localization removes the factor Z/4Z from the Chinese-remainder decomposition Z/12Z≅Z/4Z×Z/3Z.

**Answer.** The kernel is {0,3,6,9}, and $S^{-1}(Z/12Z)≅F_3$.

</details>

*Tags: localization, kernel, Chinese remainder theorem*
