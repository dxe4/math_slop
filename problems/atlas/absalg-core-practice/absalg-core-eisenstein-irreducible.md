# An Eisenstein irreducibility proof

*Difficulty 2 of 5 · [Abstract Algebra Core Practice](index.md) · exercise 4 of 12*

Prove that $f(x)=x^3-6x+3$ is irreducible over $\mathbb{Q}$ using Eisenstein's criterion. State the prime you use and verify all three hypotheses explicitly.

<details>
<summary>Hint 1</summary>

Look for a prime dividing the nonleading coefficients but not the leading coefficient.

</details>

<details>
<summary>Hint 2</summary>

Check that the prime squared does not divide the constant term.

</details>

<details>
<summary>Worked solution</summary>

Take $p=3$. The coefficients are $1,0,-6,3$. First, $3$ does not divide the leading coefficient $1$. Second, $3$ divides $0$, $-6$, and $3$. Third, $3^2=9$ does not divide the constant term $3$. All three Eisenstein hypotheses are satisfied, so $f$ is irreducible over $\mathbb{Q}$. (A reducible cubic would have a rational root; the rational-root candidates are $\pm 1,\pm 3$, none of which is a root, confirming irreducibility.)

**Answer.** Eisenstein at $p=3$: $3\nmid 1$, $3\mid 0,-6,3$, and $9\nmid 3$. Hence $x^3-6x+3$ is irreducible over $\mathbb{Q}$.

</details>

*Tags: polynomial-rings-factorization, irreducibility, eisenstein-criterion*
