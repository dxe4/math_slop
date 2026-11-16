# Multiplicative structure of the four-element field

*Difficulty 2 of 5 · [Abstract Algebra Core Practice](index.md) · exercise 5 of 12*

Construct $\mathbb{F}_4$ as $\mathbb{F}_2[x]/(x^2+x+1)$ and let $\alpha$ be the class of $x$. Compute the multiplicative order of $\alpha+1$, verify that every nonzero element is a power of it, and conclude that $\mathbb{F}_4^{\times}$ is cyclic.

<details>
<summary>Hint 1</summary>

Use the relation $\alpha^2=\alpha+1$ to reduce powers.

</details>

<details>
<summary>Hint 2</summary>

The multiplicative group has order $4-1=3$, which is prime.

</details>

<details>
<summary>Worked solution</summary>

The polynomial $x^2+x+1$ evaluates to $1$ at both $0$ and $1$ in $\mathbb{F}_2$. A quadratic with no root is irreducible, so $\mathbb{F}_2[x]/(x^2+x+1)$ is a field. Polynomial division gives four distinct classes $0,1,\alpha,\alpha+1$, where $\alpha$ is the class of $x$. In characteristic $2$, $\alpha^2=\alpha+1$. Put $u=\alpha+1$; it is neither $0$ nor $1$ because the four classes are distinct. Then $u^2=\alpha^2+1=\alpha$ and $u^3=\alpha(\alpha+1)=\alpha^2+\alpha=1$. As $u\ne1$ and $u^3=1$, its order is $3$. Its powers $1,u,u^2$ are precisely the three nonzero elements, so $\mathbb{F}_4^{\times}$ is cyclic.

**Answer.** $(\alpha+1)^2=\alpha$ and $(\alpha+1)^3=1$, so $\alpha+1$ has order $3$ and generates $\mathbb{F}_4^{\times}\cong C_3$.

</details>

*Tags: fields-extensions, finite-fields, cyclic-groups, field-arithmetic*
