# An even square has an even root

*Difficulty 2 of 5 · [Proof foundations](index.md) · exercise 2 of 5*

Prove: if $n$ is an integer and $n^2$ is even, then $n$ is even. State which proof strategy you use.

<details>
<summary>Hint 1</summary>

The contrapositive is simpler

</details>

<details>
<summary>Hint 2</summary>

Write an odd integer as $2k + 1$

</details>

<details>
<summary>Worked solution</summary>

Prove the contrapositive: if $n$ is odd, then $n^2$ is odd. For odd $n$ there is an integer $k$ with $n = 2k + 1$. Then $n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$. Because $2k^2 + 2k$ is an integer, $n^2$ is odd. The contrapositive is equivalent to the original implication, so an even $n^2$ forces $n$ to be even.

**Answer.** Use contraposition; $(2k + 1)^2 = 2(2k^2 + 2k) + 1$ is odd.

</details>

*Tags: contrapositive, parity*
