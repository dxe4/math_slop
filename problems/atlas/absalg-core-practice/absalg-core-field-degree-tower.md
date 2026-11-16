# Tower law for field extensions

*Difficulty 2 of 5 · [Abstract Algebra Core Practice](index.md) · exercise 2 of 12*

Let $F\subseteq K\subseteq E$ be fields with $[K:F]=m$ and $[E:K]=n$ finite. Prove that $[E:F]=mn$ by exhibiting an explicit $F$-basis of $E$ from bases of $K$ and $E$ over their respective lower fields.

<details>
<summary>Hint 1</summary>

Take an $F$-basis $\{u_i\}$ of $K$ and a $K$-basis $\{v_j\}$ of $E$.

</details>

<details>
<summary>Hint 2</summary>

Show $\{u_i v_j\}$ spans $E$ over $F$ by expanding twice.

</details>

<details>
<summary>Hint 3</summary>

Prove independence by using independence of the $v_j$ over $K$ first.

</details>

<details>
<summary>Worked solution</summary>

Let $\{u_1,\dots,u_m\}$ be an $F$-basis of $K$ and $\{v_1,\dots,v_n\}$ a $K$-basis of $E$. For any $z\in E$, write $z=\sum_{j=1}^n k_j v_j$ with $k_j\in K$, then expand each $k_j=\sum_{i=1}^m a_{ij} u_i$ with $a_{ij}\in F$. Substituting gives $z=\sum_{i,j} a_{ij} u_i v_j$, so the products span. For independence, suppose $\sum_j(\sum_i a_{ij} u_i)v_j=0$. Since the $v_j$ are independent over $K$, each inner sum $\sum_i a_{ij} u_i=0$. Since the $u_i$ are independent over $F$, every $a_{ij}=0$. Thus the $mn$ products form a basis and $[E:F]=mn$.

**Answer.** The products $\{u_i v_j\}$ form an $F$-basis of $E$, giving $[E:F]=[E:K][K:F]$.

</details>

*Tags: fields-extensions, tower-law, vector-spaces, basis*
