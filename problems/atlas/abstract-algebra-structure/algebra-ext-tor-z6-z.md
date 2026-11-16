# Ext and Tor see different parts of one map

*Difficulty 5 of 5 · [Abstract algebra through structure-preserving maps](index.md) · exercise 6 of 7*

Use the free resolution $0\to\mathbb{Z}\xrightarrow{\times 6}\mathbb{Z}\to\mathbb{Z}/6\mathbb{Z}\to 0$ to compute $\operatorname{Ext}^1_{\mathbb{Z}}(\mathbb{Z}/6\mathbb{Z},\mathbb{Z})$ and $\operatorname{Tor}^{\mathbb{Z}}_1(\mathbb{Z}/6\mathbb{Z},\mathbb{Z})$. Explain why the answers differ.

<details>
<summary>Hint 1</summary>

After Hom_Z(-,Z), identify Hom_Z(Z,Z) with Z

</details>

<details>
<summary>Hint 2</summary>

After tensoring with Z, the relevant map is again multiplication by 6

</details>

<details>
<summary>Hint 3</summary>

$Ext^1$ is a cokernel here, while Tor₁ is a kernel

</details>

<details>
<summary>Worked solution</summary>

Applying $\operatorname{Hom}_{\mathbb{Z}}(-,\mathbb{Z})$ to the two free modules produces $\mathbb{Z}\xrightarrow{\times 6}\mathbb{Z}$ in cochain degrees zero and one. Its degree-one cohomology is the cokernel $\mathbb{Z}/6\mathbb{Z}$, so $\operatorname{Ext}^1_{\mathbb{Z}}(\mathbb{Z}/6\mathbb{Z},\mathbb{Z})\cong\mathbb{Z}/6\mathbb{Z}$. Tensoring the resolution with $\mathbb{Z}$ produces $\mathbb{Z}\xrightarrow{\times 6}\mathbb{Z}$ in chain degrees one and zero. Its degree-one homology is the kernel of multiplication by 6, which is zero because $\mathbb{Z}$ is torsion-free. Hence $\operatorname{Tor}^{\mathbb{Z}}_1(\mathbb{Z}/6\mathbb{Z},\mathbb{Z})=0$. The groups differ because Ext takes the quotient by the image in this calculation, whereas Tor takes the subgroup killed by the map; cokernel and kernel measure different failures of exactness.

**Answer.** $\operatorname{Ext}^1_{\mathbb{Z}}(\mathbb{Z}/6\mathbb{Z},\mathbb{Z})\cong\mathbb{Z}/6\mathbb{Z}$, while $\operatorname{Tor}^{\mathbb{Z}}_1(\mathbb{Z}/6\mathbb{Z},\mathbb{Z})=0$.

</details>

*Tags: Ext, Tor, projective resolution*
