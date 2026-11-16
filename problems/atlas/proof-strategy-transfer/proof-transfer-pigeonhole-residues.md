# Transfer pigeonholes to divisibility

*Difficulty 2 of 5 · [Transferable proof strategies](index.md) · exercise 3 of 4*

Prove that among any n+1 integers, where $n\ge 1$, there are two distinct chosen integers whose difference is divisible by n.

<details>
<summary>Hint 1</summary>

Use the n possible residue classes modulo n as boxes

</details>

<details>
<summary>Hint 2</summary>

Equal residues have a difference congruent to zero

</details>

<details>
<summary>Worked solution</summary>

Assign each of the n+1 chosen integers to its residue class modulo n. There are only n residue classes, namely 0 through n-1. By the pigeonhole principle, two distinct chosen integers a and b occupy the same class. Thus $a\equiv b$ (mod n), so $a-b\equiv 0$ (mod n), which means n divides a-b. The argument concerns two selected occurrences; their numerical values could coincide, in which case the difference zero is still divisible by n.

**Answer.** Two integers share a residue modulo n, so their difference is divisible by n.

</details>

*Tags: pigeonhole principle, residue class, divisibility*
