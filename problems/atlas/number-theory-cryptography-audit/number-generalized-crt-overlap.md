# Compatible overlapping clocks

*Difficulty 3 of 5 · [Number theory and cryptography audit studio](index.md) · exercise 3 of 13*

Solve x congruent to 4 modulo 6 and x congruent to 10 modulo 15. Prove the complete answer and contrast it with the system obtained by replacing 10 with 11.

<details>
<summary>Hint 1</summary>

The compatibility test is equality modulo gcd(6,15)

</details>

<details>
<summary>Hint 2</summary>

Try $x=10$ before constructing a general formula

</details>

<details>
<summary>Hint 3</summary>

Uniqueness is modulo lcm(6,15), not the product

</details>

<details>
<summary>Worked solution</summary>

The gcd is 3. Since 4 and 10 are both 1 modulo 3, the two conditions are compatible. The integer 10 satisfies both, so every solution has x congruent to 10 modulo $lcm(6,15)=30$. To prove completeness, any two solutions differ by a multiple of both 6 and 15 and hence by a multiple of 30. Conversely, adding 30 preserves both residues. If the second residue is 11, then the two demands reduce modulo 3 to x congruent to 1 and x congruent to 2, so no solution exists. The familiar coprime CRT is the special case in which compatibility is automatic and lcm equals the product.

**Answer.** $x\equiv 10$ (mod 30). Replacing 10 by 11 makes the system inconsistent modulo $gcd(6,15)=3$.

</details>

*Tags: Chinese remainder theorem, compatibility, least common multiple*
