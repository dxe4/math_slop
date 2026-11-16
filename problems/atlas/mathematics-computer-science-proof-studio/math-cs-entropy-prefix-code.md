# Entropy and a concrete prefix code

*Difficulty 4 of 5 · [Mathematics for computer science proof and counterexample studio](index.md) · exercise 6 of 15*

A source emits A,B,C,D with probabilities 1/2,1/4,1/8,1/8. Compute entropy. Give a binary prefix code with expected length equal to entropy and verify the Kraft sum.

<details>
<summary>Hint 1</summary>

Use lengths 1, 2, 3, 3

</details>

<details>
<summary>Hint 2</summary>

One possible code is 0, 10, 110, 111

</details>

<details>
<summary>Hint 3</summary>

Compute $\sum_i2^{-\ell_i}$

</details>

<details>
<summary>Worked solution</summary>

Entropy is $-[\frac12\log_2(\frac12)+\frac14\log_2(\frac14)+2\cdot\frac18\log_2(\frac18)]=\frac74$ bits. Code $A=0$, $B=10$, $C=110$, $D=111$ is prefix-free because no complete codeword begins another. Expected length is $(1/2)1+(1/4)2+(1/8)3+(1/8)3=7/4$ bits. The Kraft sum is $2^{-1}+2^{-2}+2^{-3}+2^{-3}=1$. Equality here reflects a complete binary code whose dyadic probabilities exactly match lengths; the conclusion depends on the stated source probabilities.

**Answer.** $H=7/4$ bits; code 0,10,110,111 has expected length 7/4 and Kraft sum 1.

</details>

*Tags: information theory, entropy, prefix code, Kraft inequality*
