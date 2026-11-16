# Pointwise convergence is not uniform convergence

*Difficulty 5 of 5 · [Analysis and linear algebra core practice](index.md) · exercise 12 of 12*

Let $f_n(x) = x^n$ on $[0, 1]$. Find the pointwise limit $f$, then prove that the convergence is not uniform. Explain why this shows the sup-norm distance $d_\infty(f_n, f)$ does not tend to zero, and what that means in the language of function spaces.

<details>
<summary>Hint 1</summary>

Treat $x = 1$ and $0 \le x < 1$ separately for the pointwise limit.

</details>

<details>
<summary>Hint 2</summary>

For uniformity, estimate $\sup_{x \in [0,1]} |f_n(x) - f(x)|$ from below by considering $x$ close to but below $1$.

</details>

<details>
<summary>Worked solution</summary>

For $0 \le x < 1$ the powers $x^n \to 0$, while at $x = 1$ every $f_n(1) = 1$. Hence the pointwise limit is $f(x) = 0$ on $[0, 1)$ and $f(1) = 1$. For uniform convergence, compute the sup-norm distance: $d_\infty(f_n, f) = \sup_{x \in [0,1]} |f_n(x) - f(x)| = \sup_{0 \le x < 1} x^n = 1$ for every $n$, because $x^n$ is continuous on $[0,1)$ with $x^n \to 1$ as $x \to 1^{-}$. The distance is constantly $1$ and does not tend to $0$, so the convergence is not uniform. In function-space language: the sequence $(f_n)$ does not converge to $f$ in the metric space $(C[0,1], d_\infty)$ — indeed $f \notin C[0,1]$, since the discontinuous limit cannot belong to the space of continuous functions, and this also proves that a pointwise limit of continuous functions need not be continuous. Uniform limits of continuous functions are continuous; this example shows that hypothesis cannot be dropped.

**Answer.** $f_n \to f$ pointwise with $f = 0$ on $[0,1)$, $f(1) = 1$; the convergence is not uniform because $d_\infty(f_n, f) = 1$ for all $n$.

</details>

*Tags: functional-analysis, uniform-convergence, proof*
