# Splitting and inertia in the Gaussian integers

*Difficulty 4 of 5 · [Number theory and cryptography audit studio](index.md) · exercise 7 of 13*

In $\mathbb{Z}[i]$, factor 5 into nonunits and prove that the rational prime 3 does not factor into two nonunits. Use the norm and do not assume unique factorization as a black box.

<details>
<summary>Hint 1</summary>

$5=(2+i)(2-i)$

</details>

<details>
<summary>Hint 2</summary>

$N(a+bi)=a^2+b^2$

</details>

<details>
<summary>Hint 3</summary>

A nontrivial factorization of 3 would require a factor of norm 3

</details>

<details>
<summary>Worked solution</summary>

The identity $5=(2+i)(2-i)$ is immediate, and each factor has norm $2^2+1^2=5$, so neither is a unit. Thus 5 splits in $\mathbb{Z}[i]$. Suppose $3=\alpha\beta$ with both factors nonunits. Norms multiply to $N(3)=9$, while every nonunit has norm at least 2. The only possible positive norm pair is 3 and 3. But a Gaussian integer of norm 3 would require integers $a,b$ with $a^2+b^2=3$. Squares modulo 4 are 0 or 1, so their sum cannot be 3 modulo 4. Hence no such factor exists and 3 is irreducible; in the Euclidean domain $\mathbb{Z}[i]$, irreducible elements are prime. The final implication uses the Euclidean-domain property, while the norm argument itself already rules out a nontrivial factorization.

**Answer.** $5=(2+i)(2-i)$ splits; 3 has no nonunit factor because $a^2+b^2=3$ has no integer solution, so 3 is irreducible (and prime in Z[i]).

</details>

*Tags: Gaussian integers, norm, prime splitting*
