# Homology of an explicit chain complex

*Difficulty 5 of 5 · [Abstract Algebra Core Practice](index.md) · exercise 12 of 12*

Consider the chain complex of abelian groups $C_2\xrightarrow{d_2} C_1\xrightarrow{d_1} C_0$ where $C_2=\mathbb{Z}$, $C_1=\mathbb{Z}\oplus\mathbb{Z}$, $C_0=\mathbb{Z}$, and the differentials are $d_2(a)=(2a,-2a)$ and $d_1(b,c)=b+c$. Compute $H_2=\ker d_2$, $H_1=\ker d_1/\operatorname{im} d_2$, and $H_0=C_0/\operatorname{im} d_1$, giving each homology group up to isomorphism.

<details>
<summary>Hint 1</summary>

For $H_1$, describe $\ker d_1$ as all pairs $(t,-t)$, then quotient by the image of $d_2$.

</details>

<details>
<summary>Hint 2</summary>

Observe that $(t,-t)=(2a,-2a)$ exactly when $t$ is even.

</details>

<details>
<summary>Hint 3</summary>

For $H_0$, check whether $d_1$ is surjective.

</details>

<details>
<summary>Worked solution</summary>

First, $d_2(a)=(2a,-2a)=0$ iff $a=0$, so $\ker d_2=\{0\}$ and $H_2=0$. Next, $\ker d_1=\{(b,c)\in\mathbb{Z}^2:b+c=0\}=\{(t,-t):t\in\mathbb{Z}\}\cong\mathbb{Z}$. The image of $d_2$ is $\{(2a,-2a):a\in\mathbb{Z}\}=\{(2t,-2t):t\in\mathbb{Z}\}\cong 2\mathbb{Z}$ inside this kernel. The quotient $H_1=\ker d_1/\operatorname{im} d_2$ is therefore $\mathbb{Z}/2\mathbb{Z}$: the cosets are represented by $(0,0)$ and $(1,-1)$, and $2(1,-1)=(2,-2)\in\operatorname{im} d_2$. Finally, $d_1(b,c)=b+c$ can produce any integer (take $b=n$, $c=0$), so $\operatorname{im} d_1=\mathbb{Z}=C_0$, and $H_0=\mathbb{Z}/\mathbb{Z}=0$. In summary, $H_2=0$, $H_1\cong\mathbb{Z}/2\mathbb{Z}$, $H_0=0$.

**Answer.** $H_2=0$, $H_1\cong\mathbb{Z}/2\mathbb{Z}$, $H_0=0$.

</details>

*Tags: chain-complexes-homology, homological-algebra, abelian-groups, exact-sequences*
