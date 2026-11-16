# Put each zeta claim on its honest side of the line

*Difficulty 4 of 5 · [Number theory and cryptography audit studio](index.md) · exercise 8 of 13*

Classify these claims as an identity on an initial domain, a proved theorem, or an open conjecture: (a) $\zeta(s)=\sum_{n=1}^{\infty}n^{-s}=\prod_p(1-p^{-s})^{-1}$ for $\operatorname{Re}(s)>1$; (b) $\pi(x)\sim x/\log x$; (c) every nontrivial zero of $\zeta$ has real part $1/2$. Explain why checking many zeros cannot prove (c).

<details>
<summary>Hint 1</summary>

Absolute convergence justifies rearranging the Euler product when $\operatorname{Re}(s)>1$

</details>

<details>
<summary>Hint 2</summary>

The prime number theorem is proved

</details>

<details>
<summary>Hint 3</summary>

A finite computation cannot exhaust an infinite set of zeros

</details>

<details>
<summary>Worked solution</summary>

Claim (a) is an identity on the absolutely convergent half-plane $\operatorname{Re}(s)>1$. Absolute convergence is essential for the straightforward product expansion and rearrangement; analytic continuation extends $\zeta$ beyond this initial series domain but does not make the original Dirichlet series converge everywhere. Claim (b) is the prime number theorem, a proved asymptotic theorem. Claim (c) is the Riemann hypothesis, still open. A computation verifying the first $N$ zeros, no matter how large finite $N$ is, leaves all later zeros unchecked and supplies no argument that a counterexample cannot occur. Numerical evidence can test implementations and guide conjecture, but it is not a proof of a universal infinite statement.

**Answer.** (a) convergent-domain identity, (b) proved prime number theorem, (c) open Riemann hypothesis; finite zero checks cannot establish an infinite universal claim.

</details>

*Tags: zeta function, prime number theorem, Riemann hypothesis, claim boundary*
