# A probable-prime pass versus a factor certificate

*Difficulty 4 of 5 · [Number theory and cryptography audit studio](index.md) · exercise 13 of 13*

Show that the composite number 341 passes the base-2 Fermat congruence, then give a compact, independently checkable compositeness certificate. Explain why one probable-prime pass and one factor have different logical force.

<details>
<summary>Hint 1</summary>

$341=11\cdot 31$

</details>

<details>
<summary>Hint 2</summary>

2 to the tenth is 1024, which is 1 modulo 341

</details>

<details>
<summary>Hint 3</summary>

A verifier can multiply the proposed factors exactly

</details>

<details>
<summary>Worked solution</summary>

The factorization $341=11\cdot31$ already proves compositeness. Yet $2^{10}=1024=3\cdot341+1$, so $2^{340}=(2^{10})^{34}\equiv1\pmod{341}$. Therefore 341 passes the base-2 Fermat test despite being composite: it is a pseudoprime to that base. A single passed probable-prime condition only says that this particular witness did not expose compositeness; the test may have liar bases. By contrast, the nontrivial factor 11 is a deterministic certificate: verify $1<11<341$ and $11\cdot31=341$. Stronger randomized tests can bound error after independently chosen bases under their exact theorem, but a bound is still not the same artifact as an explicit factor or a verified primality certificate.

**Answer.** $2^340\equiv 1$ (mod 341), but $341=11\cdot 31$ is an exact compositeness certificate; passing one base is not proof of primality.

</details>

*Tags: primality testing, pseudoprime, factorization, certificate*
