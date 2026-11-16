# Prime and maximal ideal criteria

*Difficulty 1 of 5 · [Abstract Algebra Core Practice](index.md) · exercise 1 of 12*

Let $R$ be a commutative ring with identity and $I$ a proper ideal. Prove that $I$ is prime iff $R/I$ is an integral domain, and that $I$ is maximal iff $R/I$ is a field. Conclude that every maximal ideal is prime.

<details>
<summary>Hint 1</summary>

For prime, translate the definition through coset multiplication.

</details>

<details>
<summary>Hint 2</summary>

For maximal, use that an ideal strictly containing $M$ must contain $1$.

</details>

<details>
<summary>Hint 3</summary>

Every field is a domain, but not conversely.

</details>

<details>
<summary>Worked solution</summary>

Suppose $I$ is prime. If $(a+I)(b+I)=I$ in $R/I$, then $ab\in I$, so $a\in I$ or $b\in I$; hence $R/I$ has no zero divisors and is a domain. Conversely, if $R/I$ is a domain and $ab\in I$, then $(a+I)(b+I)=I$ forces $a+I=I$ or $b+I=I$, so $a\in I$ or $b\in I$. Now suppose $M$ is maximal and $a\notin M$. Then $M+(a)=R$, so $1=m+ra$ for some $m\in M$, $r\in R$. Modulo $M$ this gives $(r+M)(a+M)=1+M$, so every nonzero coset is invertible and $R/M$ is a field. Conversely, if $R/M$ is a field, its only ideals are $0$ and itself; ideal correspondence leaves no ideal strictly between $M$ and $R$, so $M$ is maximal. Since every field is an integral domain, every maximal ideal is prime. The converse fails: $(0)$ in $\mathbb{Z}$ is prime but not maximal.

**Answer.** $I$ prime $\Leftrightarrow$ $R/I$ a domain; $I$ maximal $\Leftrightarrow$ $R/I$ a field; maximal implies prime.

</details>

*Tags: rings-ideals, commutative-algebra, prime-ideals, maximal-ideals, quotient-rings*
