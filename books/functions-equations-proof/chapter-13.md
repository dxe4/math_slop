
# Fourier Series and Transforms

## Motivation: decomposing signals

A pure tone is a sinusoid. A musical chord is a superposition of sinusoids. The remarkable discovery of Joseph Fourier is that virtually any periodic function can be expressed as an infinite sum of sines and cosines, and that this decomposition reveals the function's essential frequency content. Fourier series solve differential equations, compress images, analyze signals, and underpin quantum mechanics.

This chapter defines Fourier series for periodic functions, states the Dirichlet convergence theorem with a proof boundary, explains the orthogonality and completeness ingredients behind Parseval's identity, and introduces the Fourier transform for nonperiodic functions.

## Fourier series on $[-\pi,\pi]$

**Definition 13.1 (Fourier series).** For an integrable function $f:[-\pi,\pi]\to\mathbb{R}$, the Fourier coefficients are

$$a_{n}=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\cos(nx)\,dx,\qquad b_{n}=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\sin(nx)\,dx$$

for $n\ge 0$ (with $b_{0}=0$). The **Fourier series** of $f$ is

$$\frac{a_{0}}{2}+\sum_{n=1}^{\infty}\bigl(a_{n}\cos(nx)+b_{n}\sin(nx)\bigr).$$

**Theorem 13.2 (Orthogonality).** For integers $m,n\ge 0$:

$$\int_{-\pi}^{\pi}\cos(mx)\cos(nx)\,dx=\begin{cases}0&m\neq n\\\pi&m=n\ge 1\\2\pi&m=n=0\end{cases}$$

For the sine family,

$$\int_{-\pi}^{\pi}\sin(mx)\sin(nx)\,dx=\begin{cases}\pi&m=n\ge1\\0&\text{otherwise},\end{cases}$$

and every mixed sine-cosine product integrates to $0$.

**Proof.** Use product-to-sum identities. For $m\neq n$,

$$\cos(mx)\cos(nx)=\frac{1}{2}\bigl(\cos((m-n)x)+\cos((m+n)x)\bigr),$$

and both terms integrate to $0$ over a full period. For $m=n\ge 1$, $\cos^{2}(nx)=\frac{1}{2}(1+\cos(2nx))$, which integrates to $\pi$. ∎

**Theorem 13.3 (Fourier coefficients are optimal).** If $f\in L^2[-\pi,\pi]$, then among all trigonometric polynomials of degree $N$, the partial sum $S_{N}(x)=\frac{a_{0}}{2}+\sum_{n=1}^{N}(a_{n}\cos(nx)+b_{n}\sin(nx))$ minimizes the $L^{2}$ error $\int_{-\pi}^{\pi}|f(x)-T_{N}(x)|^{2}\,dx$.

## Pointwise convergence

**Theorem 13.4 (Dirichlet).** If $f$ is piecewise smooth on $[-\pi,\pi]$ (continuous except finitely many jump discontinuities, with piecewise continuous derivative), then the Fourier series converges at every $x$ to

$$\frac{f(x^{+})+f(x^{-})}{2},$$

where $f(x^{\pm})$ are the right and left limits. At points of continuity, this equals $f(x)$.

We do not prove this fully here; the proof uses the Riemann-Lebesgue lemma and properties of the Dirichlet kernel.

## Parseval's identity

**Theorem 13.5 (Parseval).** If $f$ is square-integrable on $[-\pi,\pi]$, then

$$\frac{1}{\pi}\int_{-\pi}^{\pi}|f(x)|^{2}\,dx=\frac{a_{0}^{2}}{2}+\sum_{n=1}^{\infty}(a_{n}^{2}+b_{n}^{2}).$$

**Proof sketch.** Expand $\int|f-S_{N}|^{2}\ge 0$ using orthogonality; the cross terms vanish, leaving $\int|f|^{2}-\pi\bigl(\frac{a_{0}^{2}}{2}+\sum_{n=1}^{N}(a_{n}^{2}+b_{n}^{2})\bigr)\ge 0$. This shows the partial sums are bounded above by $\frac{1}{\pi}\int|f|^{2}$. A more delicate argument shows equality holds in the limit. ∎

## The Fourier transform

**Definition 13.6 (Fourier transform).** For $f:\mathbb{R}\to\mathbb{C}$ integrable, define

$$\hat{f}(\xi)=\int_{-\infty}^{\infty}f(x)e^{-2\pi ix\xi}\,dx.$$

**Theorem 13.7 (Inversion).** If $f$ and $\hat{f}$ are both integrable, then

$$f(x)=\int_{-\infty}^{\infty}\hat{f}(\xi)e^{2\pi ix\xi}\,d\xi$$

at points where $f$ is continuous.

**Theorem 13.8 (Plancherel).** The Fourier transform defined above on $L^1(\mathbb R)\cap L^2(\mathbb R)$ extends uniquely by $L^2$ continuity to a unitary operator on $L^2(\mathbb R)$. For that extension,

$$\int_{-\infty}^{\infty}|f(x)|^{2}\,dx=\int_{-\infty}^{\infty}|\hat{f}(\xi)|^{2}\,d\xi.$$

## Common errors and how to avoid them

**Error: Assuming Fourier series converge to $f(x)$ at discontinuities.** At a jump discontinuity, the series converges to the average of the left and right limits. This is the Gibbs phenomenon: near a jump, partial sums overshoot by about $9\%$ of the jump height.

**Error: Differentiating Fourier series term by term without justification.** Term-by-term differentiation is valid if the differentiated series converges uniformly, which requires stronger smoothness on $f$.

**Error: Confusing the Fourier transform conventions.** Different fields use different normalizations for the exponent and the $2\pi$ factor. Always state the convention being used.

## Practice exercises

### Exercise 1
Find the Fourier series of $f(x)=x$ on $[-\pi,\pi]$.

**Solution.** Since $x$ is odd, all $a_{n}=0$. For $b_{n}$:

$$b_{n}=\frac{1}{\pi}\int_{-\pi}^{\pi}x\sin(nx)\,dx=\frac{2}{\pi}\int_{0}^{\pi}x\sin(nx)\,dx=\frac{2}{\pi}\Bigl[-\frac{x\cos(nx)}{n}\Bigr]_{0}^{\pi}+\frac{2}{\pi n}\int_{0}^{\pi}\cos(nx)\,dx.$$

The second term is $0$. The first gives $-\frac{2\pi\cos(n\pi)}{n\pi}=\frac{2(-1)^{n+1}}{n}$. Thus

$$x=2\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}\sin(nx).$$

At $x=\pi$, the series converges to $0$ (the average of $\pi$ and $-\pi$), not to $\pi$. ∎

### Exercise 2
Use Parseval's identity for $f(x)=x$ to find $\sum_{n=1}^{\infty}\frac{1}{n^{2}}$.

**Solution.** We have $\frac{1}{\pi}\int_{-\pi}^{\pi}x^{2}\,dx=\frac{2\pi^{2}}{3}$. Parseval gives $\frac{2\pi^{2}}{3}=\sum_{n=1}^{\infty}b_{n}^{2}=\sum_{n=1}^{\infty}\frac{4}{n^{2}}$. Hence $\sum_{n=1}^{\infty}\frac{1}{n^{2}}=\frac{\pi^{2}}{6}$. ∎

### Exercise 3
Find the Fourier transform of $f(x)=e^{-|x|}$.

**Solution.**

$$\hat{f}(\xi)=\int_{-\infty}^{\infty}e^{-|x|}e^{-2\pi ix\xi}\,dx=\int_{-\infty}^{0}e^{x}e^{-2\pi ix\xi}\,dx+\int_{0}^{\infty}e^{-x}e^{-2\pi ix\xi}\,dx.$$

The first integral is $\int_{-\infty}^{0}e^{x(1-2\pi i\xi)}\,dx=\frac{1}{1-2\pi i\xi}$. The second is $\int_{0}^{\infty}e^{-x(1+2\pi i\xi)}\,dx=\frac{1}{1+2\pi i\xi}$. Adding:

$$\hat{f}(\xi)=\frac{1}{1-2\pi i\xi}+\frac{1}{1+2\pi i\xi}=\frac{2}{1+4\pi^{2}\xi^{2}}.$$

∎

### Exercise 4
Let $f\in C^1[-\pi,\pi]$ satisfy $f(-\pi)=f(\pi)$. Prove that its Fourier coefficients satisfy $|a_{n}|\le C/n$ and $|b_{n}|\le C/n$ for some constant $C$.

**Solution.** Integrate $a_{n}$ by parts:

$$a_{n}=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\cos(nx)\,dx=\frac{1}{n\pi}\Bigl[f(x)\sin(nx)\Bigr]_{-\pi}^{\pi}-\frac{1}{n\pi}\int_{-\pi}^{\pi}f'(x)\sin(nx)\,dx.$$

The boundary term vanishes by periodicity. Hence $|a_{n}|\le\frac{1}{n\pi}\int_{-\pi}^{\pi}|f'(x)|\,dx=\frac{C}{n}$. The argument for $b_{n}$ is similar. ∎

### Exercise 5
Show that the Fourier series of an even function contains only cosine terms.

**Solution.** If $f$ is even, then $f(x)\sin(nx)$ is odd (even times odd). The integral of an odd function over $[-\pi,\pi]$ is $0$, so $b_{n}=0$ for all $n$. ∎

## Looking forward and back

This chapter developed Fourier analysis as a tool for decomposing functions into frequency components. The orthogonality of trigonometric functions, used here, is a special case of the theory of orthogonal expansions in inner product spaces. In the final chapter, **Advanced Proof Techniques and Synthesis**, we revisit the proof techniques introduced throughout this book---induction, contradiction, construction, and exhaustion---and apply them to open problems and research directions in analysis and number theory.
