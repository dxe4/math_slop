# Find full support without an absolutely continuous difference law

*Hard · [Probability problems](index.md)*

Let $C=\sum_{n\ge1}2B_n/3^n$ for independent fair bits, and let $C^{\prime}$ be an independent copy. Prove that $C$ has a non-atomic singular law, while $D=C-C^{\prime}$ has support exactly $[-1,1]$ and still does not have an absolutely continuous law. You may use the Riemann--Lebesgue lemma for integrable densities, but must derive the relevant characteristic-function nondecay and support statements.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Ternary cylinder intervals control atoms and Lebesgue measure. Balanced ternary differences control the support.

</details>

<details>
<summary>Hint 2</summary>

Use the independence product for the characteristic function and inspect frequencies rescaled by powers of three.

</details>

<details>
<summary>Model proof</summary>

Taking a difference fills every support gap without eliminating the arithmetic Fourier obstruction.

1. After $m$ digits, $C$ lies in the union of $2^m$ closed ternary cylinder intervals of length $3^{-m}$. Their total length is $(2/3)^m\to0$, so the limiting Cantor support has Lebesgue measure zero. Each cylinder has probability $2^{-m}$; a point is covered by at most two cylinders at a fixed level, so its mass is at most $2^{1-m}\to0$. Thus the law is singular and non-atomic.
2. The support of $D$ is contained in $[-1,1]$. Every point there has a balanced expansion $x=\sum_{n\ge1}2d_n/3^n$ with $d_n\in\{-1,0,1\}$: choose the first digit so that the remainder lies in $[-1/3,1/3]$ and iterate after multiplying by three. This is possible because the three first-digit intervals cover $[-1,1]$.
3. Each finite difference-digit pattern has positive probability: $B_n-B_n^{\prime}$ has probabilities $1/4,1/2,1/4$. Matching the first $m$ digits to the expansion makes the difference from $x$ at most $2\cdot3^{-m}$. Every neighbourhood of every $x\in[-1,1]$ therefore has positive probability, proving the exact support.
4. Independence and bounded convergence for partial sums give $\phi_D(t)=|\phi_C(t)|^2=\prod_{n\ge1}\cos^2(t/3^n)$. At $t_k=2\pi3^k$, the first $k$ factors are one, and the remaining product is the same constant $a=\prod_{j\ge1}\cos^2(2\pi/3^j)>0$. No factor vanishes, and the tail product is positive because $\sum_j[1-\cos^2(2\pi/3^j)]<\infty$.
5. Thus $\phi_D(t_k)=a$ at frequencies tending to infinity. An absolutely continuous probability law would have an integrable density and a characteristic function tending to zero by Riemann--Lebesgue, contradiction. Full support alone therefore supplies no density conclusion.

**Self-assessment rubric**

- Prove both zero Lebesgue measure of the support and absence of atoms.
- Construct balanced expansions and positive-probability cylinder neighbourhoods.
- Derive the product and prove the nonzero constant along rescaled frequencies.
- Apply the Fourier lemma only to the asserted absolute-continuity question.

</details>
