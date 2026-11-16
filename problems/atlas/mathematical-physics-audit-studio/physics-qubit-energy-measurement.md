# Energy statistics of a qubit

*Difficulty 3 of 5 · [Mathematical physics audit studio](index.md) · exercise 5 of 10*

Let $H$ have orthonormal eigenstates $|+\rangle,|-\rangle$ with energies $+\varepsilon/2$ and $-\varepsilon/2$. For $|\psi\rangle=(\sqrt{3}/2)|+\rangle+(i/2)|-\rangle$, compute both outcome probabilities, expected energy, and energy variance. Explain why multiplying $|\psi\rangle$ by a global phase changes none of them.

<details>
<summary>Hint 1</summary>

Square the moduli of the amplitudes

</details>

<details>
<summary>Hint 2</summary>

Use $\mathbb{E}[H^2]=\varepsilon^2/4$ because both squared eigenvalues agree

</details>

<details>
<summary>Hint 3</summary>

A global phase cancels in every inner-product probability

</details>

<details>
<summary>Worked solution</summary>

The probabilities are $p(+)=3/4$ and $p(-)=1/4$. Thus $\langle H\rangle=(3/4)(\varepsilon/2)+(1/4)(-\varepsilon/2)=\varepsilon/4$. Both outcomes have $H^2=\varepsilon^2/4$, so $\langle H^2\rangle=\varepsilon^2/4$ and $\operatorname{Var}(H)=\varepsilon^2/4-(\varepsilon/4)^2=3\varepsilon^2/16$. Replacing $|\psi\rangle$ by $e^{i\alpha}|\psi\rangle$ multiplies every amplitude by the same unit-modulus factor, leaving squared moduli and expectation values unchanged. This finite-dimensional Hamiltonian is Hermitian and hence self-adjoint on the whole space; unbounded differential Hamiltonians require a domain audit.

**Answer.** Probabilities are $3/4$ and $1/4$, mean energy $\varepsilon/4$, and variance $3\varepsilon^2/16$; global phase cancels from all probabilities.

</details>

*Tags: quantum mechanics, Born rule, variance*
