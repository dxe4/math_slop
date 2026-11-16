# Character table of the symmetric group S₃

*Difficulty 3 of 5 · [Abstract Algebra Core Practice](index.md) · exercise 9 of 12*

Construct the ordinary complex character table of $S_3$. Identify the conjugacy classes, the irreducible representations (trivial, sign, and the standard $2$-dimensional representation), and verify orthogonality of the rows with respect to the class-size weighted inner product.

<details>
<summary>Hint 1</summary>

The conjugacy classes are determined by cycle type: $1$, $(12)$, $(123)$.

</details>

<details>
<summary>Hint 2</summary>

The standard representation is the sum-zero plane $\{(z_1,z_2,z_3)\in\mathbb{C}^3:z_1+z_2+z_3=0\}$ under coordinate permutations.

</details>

<details>
<summary>Hint 3</summary>

Use the normalized inner product $\langle\chi,\psi\rangle=\frac16\sum_C |C|\chi(g_C)\overline{\psi(g_C)}$.

</details>

<details>
<summary>Worked solution</summary>

Work over $\mathbb{C}$. The conjugacy classes represented by $e,(12),(123)$ have sizes $1,3,2$. The permutation representation on $\mathbb{C}^3$ has character $(3,1,0)$. Its constant line is trivial, so the complementary sum-zero plane has character $(2,0,-1)$. In the array, columns follow that class order; $|C|$ lists class sizes, and the remaining rows are the trivial, sign, and standard characters: $\begin{array}{c|ccc} & e & (12) & (123)\\ |C| & 1 & 3 & 2\\ \chi_{\mathrm{triv}} & 1 & 1 & 1\\ \chi_{\mathrm{sgn}} & 1 & -1 & 1\\ \chi_{\mathrm{std}} & 2 & 0 & -1\end{array}$. The normalized inner product is $\langle\chi,\psi\rangle=\frac16\sum_C |C|\chi(g_C)\overline{\psi(g_C)}$. The three weighted squared norms are $1+3+2=6$, $1+3+2=6$, and $4+0+2=6$. The distinct weighted products are $1-3+2=0$ (trivial/sign), $2+0-2=0$ (trivial/standard), and $2+0-2=0$ (sign/standard). After division by $6$ the rows are orthonormal. By the character norm criterion each is irreducible; since $1^2+1^2+2^2=6=|S_3|$, the degree-sum criterion makes the list complete.

**Answer.** The character table has rows $[1,1,1]$, $[1,-1,1]$, $[2,0,-1]$ on classes of sizes $1,3,2$; all orthogonality relations hold and $1^2+1^2+2^2=6$.

</details>

*Tags: representation-theory, finite-group-characters, symmetric-group, character-table*
