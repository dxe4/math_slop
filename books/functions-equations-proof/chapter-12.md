
# Uniform Convergence and Function Spaces

## Motivation: limits of functions

In **Power Series** we saw that convergent power series define continuous, differentiable functions. But not every limit of functions preserves these properties. Pointwise convergence---convergence at each individual point---is too weak even to guarantee continuity of the limit. **Uniform convergence** preserves continuity and, on a fixed compact interval, permits passage of a limit through a Riemann integral. Differentiation requires additional control, typically uniform convergence of the derivatives together with convergence at one point.

This chapter defines uniform convergence, proves the Weierstrass $M$-test, and establishes that the limit of a uniformly convergent sequence of continuous functions is continuous. We then introduce metric spaces of functions, laying groundwork for the study of operators and transforms in later chapters.

## Pointwise versus uniform convergence

**Definition 12.1 (Pointwise convergence).** A sequence of functions $f_{n}:D\to\mathbb{R}$ converges **pointwise** to $f:D\to\mathbb{R}$ if for every $x\in D$ and every $\varepsilon>0$, there exists $N$ such that $|f_{n}(x)-f(x)|<\varepsilon$ for all $n\ge N$.

**Definition 12.2 (Uniform convergence).** The sequence $f_{n}$ converges **uniformly** to $f$ on $D$ if for every $\varepsilon>0$, there exists $N$ such that $|f_{n}(x)-f(x)|<\varepsilon$ for all $n\ge N$ and **all** $x\in D$.

The crucial difference: in uniform convergence, $N$ depends only on $\varepsilon$, not on $x$.

**Example.** Let $f_{n}(x)=x^{n}$ on $[0,1]$. The pointwise limit is $f(x)=0$ for $x\in[0,1)$ and $f(1)=1$. Each $f_{n}$ is continuous, but $f$ is not. The convergence is not uniform: for every $n$, choosing $x_n=(3/4)^{1/n}<1$ gives $|f_n(x_n)-f(x_n)|=3/4$. Thus no single index works even for $\varepsilon=1/2$.

## The Weierstrass $M$-test

**Theorem 12.3 (Weierstrass $M$-test).** Let $\sum_{n=1}^{\infty}f_{n}(x)$ be a series of functions on $D$. If there exist constants $M_{n}\ge 0$ such that $|f_{n}(x)|\le M_{n}$ for all $x\in D$ and $\sum M_{n}$ converges, then $\sum f_{n}$ converges uniformly and absolutely on $D$.

**Proof.** For each $x$, $\sum|f_{n}(x)|$ converges by comparison with $\sum M_{n}$. Let $S(x)=\sum f_{n}(x)$. The remainder after $N$ terms satisfies

$$\Bigl|S(x)-\sum_{n=1}^{N}f_{n}(x)\Bigr|=\Bigl|\sum_{n=N+1}^{\infty}f_{n}(x)\Bigr|\le\sum_{n=N+1}^{\infty}M_{n}.$$

The right side is independent of $x$ and tends to $0$ as $N\to\infty$ because $\sum M_{n}$ converges. Hence the convergence is uniform. ∎

**Example.** The series $\sum_{n=1}^{\infty}\frac{\sin(nx)}{n^{2}}$ converges uniformly on $\mathbb{R}$ because $|\sin(nx)/n^{2}|\le 1/n^{2}$ and $\sum 1/n^{2}=\pi^{2}/6$ converges.

## Preservation of continuity

**Theorem 12.4 (Uniform limit theorem).** If $f_{n}\to f$ uniformly on $D$ and each $f_{n}$ is continuous at $x_{0}\in D$, then $f$ is continuous at $x_{0}$.

**Proof.** Let $\varepsilon>0$. Choose $N$ so that $|f_{N}(x)-f(x)|<\varepsilon/3$ for all $x\in D$. Since $f_{N}$ is continuous at $x_{0}$, there exists $\delta>0$ such that $|x-x_{0}|<\delta$ implies $|f_{N}(x)-f_{N}(x_{0})|<\varepsilon/3$. Then for $|x-x_{0}|<\delta$:

$$|f(x)-f(x_{0})|\le|f(x)-f_{N}(x)|+|f_{N}(x)-f_{N}(x_{0})|+|f_{N}(x_{0})-f(x_{0})|<\frac{\varepsilon}{3}+\frac{\varepsilon}{3}+\frac{\varepsilon}{3}=\varepsilon.$$

∎

## Spaces of continuous functions

**Definition 12.5 (Supremum norm).** For a bounded function $f:D\to\mathbb{R}$, define

$$\|f\|_{\infty}=\sup_{x\in D}|f(x)|.$$

**Definition 12.6 (Space $C([a,b])$).** Let $C([a,b])$ be the set of continuous real-valued functions on $[a,b]$, equipped with the metric $d(f,g)=\|f-g\|_{\infty}$.

**Theorem 12.7 (Completeness).** $C([a,b])$ is a complete metric space: every Cauchy sequence converges to a continuous function.

**Proof.** A Cauchy sequence in the supremum norm is uniformly Cauchy, hence converges uniformly to some function $f$. By the uniform limit theorem, $f$ is continuous. ∎

This completeness is fundamental: it guarantees that iterative methods for solving differential and integral equations converge to valid continuous solutions.

## Common errors and how to avoid them

**Error: Assuming pointwise limits preserve continuity.** The example $f_{n}(x)=x^{n}$ on $[0,1]$ is the canonical counterexample. Always check for uniform convergence before exchanging limits.

**Error: Confusing uniform convergence with absolute convergence.** A series can converge absolutely at each point without converging uniformly. Uniform convergence requires a uniform bound independent of $x$.

**Error: Applying the $M$-test when no uniform bound exists.** The $M$-test is sufficient but not necessary. If no dominating convergent series $\sum M_{n}$ exists, other tests (Abel, Dirichlet) may still establish uniform convergence.

## Practice exercises

### Exercise 1
Let $f_n(x)=\frac{nx}{1+nx}$. Prove that $f_n\to1$ uniformly on $[1,\infty)$ but not uniformly on $(0,\infty)$.

**Solution.** For each fixed $x>0$, $f_n(x)=1-\frac{1}{1+nx}\to1$. On $[1,\infty)$,

$$\sup_{x\ge1}|f_n(x)-1|=\sup_{x\ge1}\frac{1}{1+nx}=\frac{1}{1+n}\longrightarrow0,$$

so convergence is uniform there. On $(0,\infty)$ the error approaches $1$ as $x\downarrow0$, and hence $\sup_{x>0}|f_n(x)-1|=1$ for every $n$. Thus the convergence is not uniform on the larger domain. ∎

### Exercise 2
Show that $\sum_{n=1}^{\infty}\frac{x^{n}}{n^{2}}$ converges uniformly on $[-1,1]$.

**Solution.** For $x\in[-1,1]$, $|x^{n}/n^{2}|\le 1/n^{2}$. Since $\sum 1/n^{2}$ converges, the $M$-test applies with $M_{n}=1/n^{2}$. ∎

### Exercise 3
Let $f_{n}(x)=\frac{\sin(nx)}{n}$. Show that $f_{n}\to 0$ uniformly on $\mathbb{R}$, but $f_{n}'$ does not converge uniformly.

**Solution.** $|f_{n}(x)|\le 1/n\to 0$ uniformly. However, $f_{n}'(x)=\cos(nx)$, which oscillates and does not converge pointwise except at isolated points. In particular, $f_{n}'(0)=1$ for all $n$, so the limit function would need to satisfy $g(0)=1$, while $f_{n}'(\pi/n)=-1$. No uniform limit exists. ∎

### Exercise 4
Prove that the space $C([0,1])$ with the supremum metric is complete.

**Solution.** Let $(f_{n})$ be a Cauchy sequence in $C([0,1])$. For each $x$, $(f_{n}(x))$ is a Cauchy sequence in $\mathbb{R}$, hence converges to some $f(x)$. Given $\varepsilon>0$, choose $N$ so that $\|f_{m}-f_{n}\|_{\infty}<\varepsilon/2$ for $m,n\ge N$. Then for $n\ge N$ and any $x$, $|f_{n}(x)-f(x)|=\lim_{m\to\infty}|f_{n}(x)-f_{m}(x)|\le\varepsilon/2<\varepsilon$. Thus $f_{n}\to f$ uniformly, and $f$ is continuous by the uniform limit theorem. ∎

### Exercise 5
Show that $f(x)=\sum_{n=1}^{\infty}\frac{\cos(2^{n}x)}{2^{n}}$ is continuous on $\mathbb{R}$.

**Solution.** Each term satisfies $|\cos(2^{n}x)/2^{n}|\le 1/2^{n}$. Since $\sum 1/2^{n}=1$ converges, the $M$-test gives uniform convergence on $\mathbb{R}$. Each partial sum is continuous, so the uniform limit $f$ is continuous. ∎

## Looking forward and back

This chapter strengthened the analytic foundations laid in **Power Series** by introducing uniform convergence and function spaces. The completeness of $C([a,b])$ will be essential when we study integral equations and operator theory. In the next chapter, **Fourier Series and Transforms**, uniform convergence provides the justification for term-by-term integration of trigonometric series, while the function-space perspective reveals Fourier analysis as a study of orthogonal decompositions in Hilbert space.
