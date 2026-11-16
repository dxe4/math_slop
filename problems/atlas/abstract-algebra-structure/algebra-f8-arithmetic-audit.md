# Compute exactly in an eight-element field

*Difficulty 4 of 5 · [Abstract algebra through structure-preserving maps](index.md) · exercise 3 of 7*

Over $\mathbb{F}_2$ let $f(x)=x^3+x+1$ and let $\alpha$ be the class of $x$ in $\mathbb{F}_2[x]/(f)$. Prove the quotient is a field, reduce $(\alpha^2+1)(\alpha+1)$, and find $(\alpha+1)^{-1}$.

<details>
<summary>Hint 1</summary>

A cubic over a field is reducible exactly when it has a root

</details>

<details>
<summary>Hint 2</summary>

Check $f$ at $0$ and $1$

</details>

<details>
<summary>Hint 3</summary>

Use $\alpha^3=\alpha+1$ and remember that addition equals subtraction in characteristic two

</details>

<details>
<summary>Worked solution</summary>

The only possible roots in $\mathbb{F}_2$ are $0$ and $1$. We have $f(0)=1$ and $f(1)=1+1+1=1$, so $f$ has no root. A reducible cubic over a field has a linear factor and hence a root, so $f$ is irreducible and the quotient is a field with $2^3=8$ elements. The relation $f(\alpha)=0$ gives $\alpha^3=\alpha+1$. Expanding, $(\alpha^2+1)(\alpha+1)=\alpha^3+\alpha^2+\alpha+1=(\alpha+1)+\alpha^2+\alpha+1=\alpha^2$. Also $(\alpha+1)(\alpha^2+\alpha)=\alpha^3+\alpha=(\alpha+1)+\alpha=1$, so $(\alpha+1)^{-1}=\alpha^2+\alpha$.

**Answer.** The quotient is $\mathbb{F}_8$; the product is $\alpha^2$, and $(\alpha+1)^{-1}=\alpha^2+\alpha$.

</details>

*Tags: finite field, polynomial reduction, inverse*
