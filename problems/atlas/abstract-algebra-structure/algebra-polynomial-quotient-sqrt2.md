# A field quotient and an explicit inverse

*Difficulty 4 of 5 · [Abstract algebra through structure-preserving maps](index.md) · exercise 2 of 7*

Let $K=\mathbb{Q}[x]/(x^2-2)$ and let $\beta$ be the class of $x$. Prove $K$ is a field and find the inverse of $\beta+1$. State where irreducibility is used.

<details>
<summary>Hint 1</summary>

A reducible quadratic over a field has a root in that field

</details>

<details>
<summary>Hint 2</summary>

Use the relation $\beta^2=2$

</details>

<details>
<summary>Hint 3</summary>

Try multiplying $\beta+1$ by $\beta-1$

</details>

<details>
<summary>Worked solution</summary>

The polynomial $x^2-2$ has no rational root: if a rational number squared to $2$, writing it in lowest terms gives the standard parity contradiction, or the rational-root theorem leaves only $\pm1,\pm2$ to check. A degree-two polynomial over $\mathbb{Q}$ with no root is irreducible. Therefore $(x^2-2)$ is maximal in $\mathbb{Q}[x]$, so the quotient $K$ is a field. In $K$, $\beta^2=2$, and $(\beta+1)(\beta-1)=\beta^2-1=2-1=1$. Thus $(\beta+1)^{-1}=\beta-1$. Irreducibility is what makes every nonzero class invertible; the displayed calculation then constructs this particular inverse.

**Answer.** $K$ is a field because $x^2-2$ is irreducible over $\mathbb{Q}$, and $(\beta+1)^{-1}=\beta-1$.

</details>

*Tags: quotient ring, irreducible polynomial, field extension*
