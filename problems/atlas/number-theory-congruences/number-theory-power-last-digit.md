# A huge power's last digit

*Difficulty 2 of 5 · [Number theory through divisibility](index.md) · exercise 2 of 4*

Find the last decimal digit of $7^{222}$ without evaluating the power. Justify why the pattern you use continues indefinitely.

<details>
<summary>Hint 1</summary>

Compute powers of 7 modulo 10 until a residue repeats

</details>

<details>
<summary>Hint 2</summary>

Reduce 222 modulo the cycle length

</details>

<details>
<summary>Worked solution</summary>

Modulo $10$, successive powers have residues $7, 9, 3, 1$. Multiplying the residue $1$ by $7$ restarts the same sequence, so the cycle has length $4$ and repeats by compatibility of multiplication with congruence. Since $222=4\cdot55+2$, the exponent occupies the second position of the cycle. That residue is $9$, so $7^{222}$ ends in $9$.

**Answer.** $9$.

</details>

*Tags: modular arithmetic, cyclic pattern, powers*
