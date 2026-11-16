# Information through a noisy bit channel

*Difficulty 4 of 5 · [Information, coding, and optimization](index.md) · exercise 2 of 4*

A uniformly random input bit passes through a channel that flips it independently with probability $0.1$. Compute $H(Y)$, $H(Y\mid X)$, and the mutual information $I(X;Y)$ in bits.

<details>
<summary>Hint 1</summary>

A symmetric channel preserves a uniform output distribution

</details>

<details>
<summary>Hint 2</summary>

$H(Y\mid X)$ is the binary entropy $h_2(0.1)$

</details>

<details>
<summary>Hint 3</summary>

Use $I(X;Y)=H(Y)-H(Y\mid X)$

</details>

<details>
<summary>Worked solution</summary>

Because the input is uniform and flips symmetrically, $P(Y=0)=P(Y=1)=1/2$, so $H(Y)=1$ bit. Given $X$, the output is correct with probability 0.9 and flipped with probability 0.1. Thus $H(Y\mid X)=h_2(0.1)=-0.1\log_2(0.1)-0.9\log_2(0.9)\approx 0.4690$ bit. Therefore $I(X;Y)=1-h_2(0.1)\approx 0.5310$ bit. This is less than one because observing $Y$ leaves uncertainty about whether a flip occurred.

**Answer.** $H(Y)=1$, $H(Y|X)\approx 0.4690$, and $I(X;Y)\approx 0.5310$ bit.

</details>

*Tags: mutual information, binary symmetric channel, conditional entropy*
