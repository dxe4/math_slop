# A polynomial ring that is not Noetherian

*Difficulty 4 of 5 · [Abstract Algebra Core Practice](index.md) · exercise 11 of 12*

Let $k$ be a field and let $R=k[x_1,x_2,x_3,\dots]$ be the polynomial ring in infinitely many variables. Prove that $R$ is not Noetherian by exhibiting an infinite strictly ascending chain of ideals, and explain why this does not contradict Hilbert's basis theorem.

<details>
<summary>Hint 1</summary>

Consider the chain $(x_1)\subseteq (x_1,x_2)\subseteq (x_1,x_2,x_3)\subseteq\cdots$.

</details>

<details>
<summary>Hint 2</summary>

Show each inclusion is strict by finding an element in the larger ideal not in the smaller.

</details>

<details>
<summary>Hint 3</summary>

Recall that Hilbert's basis theorem requires the coefficient ring to be Noetherian and the variable set to be finite.

</details>

<details>
<summary>Worked solution</summary>

Let $I_n=(x_1,\dots,x_n)$. Clearly $I_n\subseteq I_{n+1}$. Evaluate $x_1,\dots,x_n$ at zero while fixing the other variables. This ring homomorphism kills $I_n$ but sends $x_{n+1}$ to the nonzero polynomial $x_{n+1}$; hence $x_{n+1}\notin I_n$ and every inclusion is strict. Equivalently, each monomial of an element of $I_n$ is divisible by at least one of $x_1,\dots,x_n$; it may also involve later variables. The infinite strict chain proves $R$ is not Noetherian. In fact, $J=(x_1,x_2,\dots)$ is not finitely generated. If polynomials $f_1,\dots,f_r$ generated $J$, choose $N$ at least every variable index appearing in them. Each $f_j\in J$ has zero constant term, so evaluation at $x_1=\cdots=x_N=0$ kills every $f_j$, yet it sends $x_{N+1}\in J$ to the nonzero polynomial $x_{N+1}$: a contradiction. Hilbert’s basis theorem says that $A[x]$ is Noetherian when $A$ is Noetherian. Iteration covers every finite number of variables, not infinitely many.

**Answer.** $(x_1)\subsetneq (x_1,x_2)\subsetneq (x_1,x_2,x_3)\subsetneq\cdots$ is an infinite ascending chain; Hilbert's basis theorem requires finitely many variables.

</details>

*Tags: noetherian-rings-modules, commutative-algebra, hilbert-basis-theorem, ascending-chain-condition*
