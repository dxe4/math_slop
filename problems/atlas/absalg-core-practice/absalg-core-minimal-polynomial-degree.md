# Degree of a biquadratic extension

*Difficulty 3 of 5 · [Abstract Algebra Core Practice](index.md) · exercise 6 of 12*

Let $\alpha=\sqrt{2}+\sqrt{3}$. Prove that the minimal polynomial of $\alpha$ over $\mathbb{Q}$ has degree $4$ by showing $\sqrt{3}\notin\mathbb{Q}(\sqrt{2})$ and applying the tower law.

<details>
<summary>Hint 1</summary>

First show $[\mathbb{Q}(\sqrt{2}):\mathbb{Q}]=2$.

</details>

<details>
<summary>Hint 2</summary>

Assume $\sqrt{3}=a+b\sqrt{2}$ with $a,b\in\mathbb{Q}$ and derive a contradiction by squaring.

</details>

<details>
<summary>Hint 3</summary>

Conclude $[\mathbb{Q}(\sqrt{2},\sqrt{3}):\mathbb{Q}]=4$ and relate this to $\alpha$.

</details>

<details>
<summary>Worked solution</summary>

The polynomial $x^2-2$ is irreducible over $\mathbb{Q}$ (no rational square equals $2$), so $[\mathbb{Q}(\sqrt{2}):\mathbb{Q}]=2$. Suppose $\sqrt{3}\in\mathbb{Q}(\sqrt{2})$, so $\sqrt{3}=a+b\sqrt{2}$ with $a,b\in\mathbb{Q}$. Squaring gives $3=a^2+2b^2+2ab\sqrt{2}$. Since $\{1,\sqrt{2}\}$ is a basis, $2ab=0$. If $b=0$, then $a^2=3$, impossible in $\mathbb{Q}$. If $a=0$, then $2b^2=3$, so $b^2=3/2$, also impossible because $3/2$ is not a rational square (prime $3$ has odd exponent in its factorization). Hence $\sqrt{3}\notin\mathbb{Q}(\sqrt{2})$, and $x^2-3$ remains irreducible over $\mathbb{Q}(\sqrt{2})$. The tower law gives $[\mathbb{Q}(\sqrt{2},\sqrt{3}):\mathbb{Q}]=2\cdot 2=4$. Since $\alpha^{-1}=\sqrt{3}-\sqrt{2}$, we recover $\sqrt{2}=(\alpha-\alpha^{-1})/2$ and $\sqrt{3}=(\alpha+\alpha^{-1})/2$ inside $\mathbb{Q}(\alpha)$, so $\mathbb{Q}(\alpha)=\mathbb{Q}(\sqrt{2},\sqrt{3})$. Therefore $[\mathbb{Q}(\alpha):\mathbb{Q}]=4$, and the minimal polynomial of $\alpha$ has degree $4$.

**Answer.** $[\mathbb{Q}(\sqrt{2},\sqrt{3}):\mathbb{Q}]=4$, and since $\mathbb{Q}(\alpha)=\mathbb{Q}(\sqrt{2},\sqrt{3})$, the minimal polynomial of $\alpha$ over $\mathbb{Q}$ has degree $4$.

</details>

*Tags: fields-extensions, minimal-polynomials, tower-law, quadratic-extensions*
