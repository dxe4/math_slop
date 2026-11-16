# Symmetric diagonal square factor

*Hard · [Original Putnam-style training](index.md)*

If $F\in\mathbb R[x,y]$ is symmetric, $F(x,y)=F(y,x)$, and $F(t,t)=0$ for every real $t$, prove $(x-y)^2$ divides $F(x,y)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

First use polynomial division to get one factor $x-y$.

</details>

<details>
<summary>Hint 2</summary>

Symmetry turns the quotient into an antisymmetric polynomial, which vanishes on the diagonal.

</details>

<details>
<summary>Model proof</summary>

Setting $x=y=t$ gives $G(t,t)=0$. The same division argument yields $(x-y)\mid G$, so $(x-y)^2\mid F$.

1. Treat $F$ as a polynomial in $x$ over $\mathbb R[y]$. Division by the monic $x-y$ gives $F=(x-y)G+R(y)$; evaluating $x=y=t$ shows $R(t)=0$ for every $t$, hence $R=0$.
2. Now $F(y,x)=F(x,y)$ implies $(y-x)G(y,x)=(x-y)G(x,y)$, hence $G(y,x)=-G(x,y)$ as polynomial identities.
3. Setting $x=y=t$ gives $G(t,t)=0$. The same division argument yields $(x-y)\mid G$, so $(x-y)^2\mid F$.

**Self-assessment rubric**

- Use polynomial division and diagonal vanishing to obtain x−y as a factor.
- Use symmetry to prove the quotient changes sign under swapping variables.
- Show the quotient vanishes on the diagonal and extract a second x−y factor.

</details>
