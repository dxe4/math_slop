# A reciprocity obstruction to a square

*Difficulty 4 of 5 · [Number theory and cryptography audit studio](index.md) · exercise 5 of 13*

Decide whether $x^2\equiv 7\pmod{11}$ without listing all eleven residues. Use the Legendre symbol and quadratic reciprocity, and state every hypothesis needed for the reciprocity step.

<details>
<summary>Hint 1</summary>

The primes 7 and 11 are distinct odd primes

</details>

<details>
<summary>Hint 2</summary>

Both are 3 modulo 4, so reciprocity introduces a minus sign

</details>

<details>
<summary>Hint 3</summary>

Reduce 11 modulo 7

</details>

<details>
<summary>Worked solution</summary>

For distinct odd primes $p$ and $q$, quadratic reciprocity says $\left(\frac{p}{q}\right)\left(\frac{q}{p}\right)=(-1)^{(p-1)(q-1)/4}$. Here both 7 and 11 are 3 modulo 4, so $\left(\frac{7}{11}\right)=-\left(\frac{11}{7}\right)$. Reduce 11 modulo 7 to get $\left(\frac{11}{7}\right)=\left(\frac{4}{7}\right)=1$ because $4=2^2$. Hence $\left(\frac{7}{11}\right)=-1$, so 7 is not a quadratic residue modulo 11 and the congruence has no solution. The Legendre-symbol conclusion also uses that 11 does not divide 7; a zero symbol would represent divisibility, not a nonsquare.

**Answer.** There is no solution: $\left(\frac{7}{11}\right)=-\left(\frac{11}{7}\right)=-\left(\frac{4}{7}\right)=-1$.

</details>

*Tags: quadratic reciprocity, Legendre symbol, quadratic residue*
