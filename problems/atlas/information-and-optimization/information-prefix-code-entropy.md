# Entropy matched by a prefix code

*Difficulty 3 of 5 · [Information, coding, and optimization](index.md) · exercise 1 of 4*

A source emits A, B, C, D with probabilities 1/2, 1/4, 1/8, 1/8. Compute its entropy in bits and construct a binary prefix code whose expected length equals the entropy.

<details>
<summary>Hint 1</summary>

Each contribution is $p\log_2(1/p)$

</details>

<details>
<summary>Hint 2</summary>

Try codeword lengths $1,2,3,3$

</details>

<details>
<summary>Worked solution</summary>

The entropy is $H=(1/2)\cdot 1+(1/4)\cdot 2+(1/8)\cdot 3+(1/8)\cdot 3=1/2+1/2+3/8+3/8=7/4$ bits. One prefix code is $A=0$, $B=10$, $C=110$, $D=111$. No codeword is a prefix of another. Its expected length is $(1/2)\cdot 1+(1/4)\cdot 2+(1/8)\cdot 3+(1/8)\cdot 3=7/4$ bits, exactly H because all probabilities are negative powers of two matched to their ideal lengths.

**Answer.** Entropy 7/4 bits; for example $A=0$, $B=10$, $C=110$, $D=111$ has expected length 7/4.

</details>

*Tags: entropy, prefix code, expected length*
