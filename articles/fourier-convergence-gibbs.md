
# Convergence and Gibbs

A Fourier sum can converge at every fixed point and still have peaks near a jump whose excess height does not vanish. There is no contradiction: the peak moves as the number of retained modes increases. A convergence statement must say which points remain fixed and which error measure it controls.

This **Years 2–3 (L3)** orientation assumes [Fourier coefficients](#/articles/fourier-coefficients), definite integrals and the distinction between pointwise and uniform convergence. The [Real Analysis sequences and compactness chapter](#/books/proof-safe-real-analysis/sequences-compactness) supplies preparation in limits. The primary [Dirichlet chapter](#/books/fourier-analysis/dirichlet-kernel-pointwise-convergence) and [Gibbs chapter](#/books/fourier-analysis/gibbs-phenomenon) own the full convergence and moving-profile proofs. Here we explain their precise statements and the mechanism connecting them.

## State a class where the theorem applies

Let $f$ have period $2\pi$ and be continuously differentiable on finitely many pieces, with finite one-sided limits of both $f$ and its derivative at the piece endpoints. We call this class piecewise $C^1$. Arbitrary bounded assignments at the finitely many breakpoints are allowed.

Using the normalized coefficients from the first article, write

$$S_Nf(x)=\sum_{n=-N}^N\widehat f(n)e^{inx}.$$

Dirichlet's theorem for this class says

$$S_Nf(x)\longrightarrow \frac{f(x+)+f(x-)}2.$$

At an ordinary continuity point, this is $f(x)$. At a jump, it is the average of the two neighbouring limits, regardless of the isolated assigned value. Changing finitely many point values leaves every coefficient integral unchanged, so those assignments cannot control the limit.

These hypotheses are part of the theorem. A claim about every continuous or every integrable periodic function would need a different argument and may be false for the convergence mode asserted.

## The kernel explains the jump average

A finite geometric sum gives

$$D_N(t)=\sum_{n=-N}^Ne^{int}
=\frac{\sin((N+1/2)t)}{\sin(t/2)},$$

with its continuous value $2N+1$ at zero. Substituting the finite sum in the coefficient integral gives

$$S_Nf(x)=\frac1{2\pi}\int_{-\pi}^{\pi}f(x-t)D_N(t)\,dt.$$

The kernel is even and its normalized integral is one. It is not nonnegative: already $D_1(\pi)=-1$. Thus this formula is a signed average and need not stay in the range of $f$.

To see the convergence mechanism, put $m=(f(x+)+f(x-))/2$. Evenness combines the error into

$$S_Nf(x)-m=\frac1{2\pi}\int_0^\pi
\frac{f(x+t)+f(x-t)-2m}{\sin(t/2)}
\sin((N+1/2)t)\,dt.$$

The numerator is $O(t)$ near zero by the one-sided derivative bounds, while the denominator is comparable to $t$. The quotient therefore extends to a bounded Riemann-integrable function. The Riemann–Lebesgue oscillatory-integral lemma makes its integral against the increasingly rapid sine tend to zero. The primary chapter proves that lemma by approximation with finite step functions; this is a named input here, rather than an application of dominated convergence to a sine that has no pointwise limit.

## Worked example: a square wave

Let $f=1$ on $(0,\pi)$ and $f=-1$ on $(-\pi,0)$, extended periodically. Set its breakpoint values to zero. Oddness eliminates the mean and cosine terms. For positive $n$ the sine coefficient is

$$b_n=\frac2\pi\int_0^\pi\sin(nx)\,dx
=\frac{2(1-(-1)^n)}{\pi n}.$$

Consequently

$$S_Nf(x)=\frac4\pi\sum_{\substack{1\le n\le N\\n\text{ odd}}}\frac{\sin(nx)}n.$$

At zero every sum is zero, agreeing with the neighbouring average. At every fixed $x\in(0,\pi)$ the theorem gives limit one. The periodic endpoint has another jump, so it must also be handled using its two sides.

The upward jump at zero has size $J=2$ and midpoint $M=0$. The more precise Gibbs theorem says, with $k_N=N+1/2$ and fixed real $y$,

$$S_Nf(y/k_N)\longrightarrow \frac2\pi\operatorname{Si}(y),
\qquad \operatorname{Si}(y)=\int_0^y\frac{\sin s}{s}\,ds.$$

At $y=\pi$, this limit is $1+2\gamma$, where

$$\gamma=\frac{\operatorname{Si}(\pi)}\pi-\frac12\approx0.08949.$$

Thus points $x_N=\pi/k_N$ approach the jump while their values approach about $1.17898$. The excess is approximately $8.949\%$ of the full jump two, rather than of the upper level one. The point is moving; the fixed-point theorem never asserted convergence along that sequence.

## General jumps and the missing uniform conclusion

For any jump in the stated piecewise $C^1$ class, write $J=f(x_0+)-f(x_0-)$ and $M=(f(x_0+)+f(x_0-))/2$. The primary profile theorem gives

$$S_Nf\left(x_0+\frac{y}{k_N}\right)
\longrightarrow M+\frac J\pi\operatorname{Si}(y),$$

uniformly for $y$ in each fixed bounded interval. Its proof subtracts a canonical sawtooth with the same jump. That sawtooth's scaled Fourier sums are Riemann sums for the sine integral; the remainder is locally continuous and converges uniformly near the selected point.

On each closed arc staying a positive distance from all jumps, the primary Dirichlet theorem gives uniform convergence. Across a genuine jump, uniform reconstruction is impossible: every partial sum is continuous, and a uniform limit of continuous functions would be continuous.

A region of width proportional to $1/N$ can retain a bounded nonzero error height while its square-integral error contribution tends to zero. This explains compatibility with mean-square convergence; the global mean-square theorem still needs its own density argument.

## Exercises

### Exercise 1
<a id="deep-dive-fourier-convergence-gibbs-ex-1"></a>
At a jump from two to eight, calculate the fixed jump-point limit and the limiting value of the profile at $y=\pi$. What changes if the author assigns the value $100$ exactly at the jump?

<details><summary>Hint 1</summary>
The midpoint and the full jump are different numbers.
</details>
<details><summary>Hint 2</summary>
Use $M+(J/\pi)\operatorname{Si}(\pi)=f_++J\gamma$.
</details>
<details><summary>Solution</summary>
Here $M=5$ and $J=6$. The fixed jump-point limit is five. The moving-profile value tends to $8+6\gamma$, approximately $8.53694$. Assigning $100$ at the jump changes no coefficient and neither limit. It does make pointwise recovery of that assigned value fail there, as the theorem already specifies. The fractional excess is measured against six, the full jump.
</details>

### Exercise 2
<a id="deep-dive-fourier-convergence-gibbs-ex-2"></a>
Why can a continuous periodic piecewise $C^1$ function with corners converge uniformly under these partial sums, while a two-level square wave cannot? Does the existence of a corner alone imply Gibbs overshoot of nonvanishing height?

<details><summary>Hint 1</summary>
Distinguish a jump in the function from a jump in its derivative.
</details>
<details><summary>Hint 2</summary>
Apply the primary local uniform theorem to the whole circle when the jump set of the function is empty.
</details>
<details><summary>Solution</summary>
The specified continuous piecewise $C^1$ function has no jumps in its values. The primary uniform theorem therefore applies on the full compact circle, even when its derivative has finitely many jumps. A square wave has unequal one-sided values, so no choice of its isolated breakpoint assignments makes it continuous; a uniform limit of its continuous partial sums is impossible. A corner alone has jump size $J=0$ in the function and supplies no nonzero Gibbs height of the stated jump-profile kind. The value discontinuity, rather than a visual sharpness label, controls that theorem.
</details>

The [DFT article](#/articles/fourier-discrete-transform-fft) distinguishes this truncation phenomenon from sampling aliasing. The existing [Hilbert–Fourier companion](#/articles/hilbert-fourier-geometry) develops the broader approximation viewpoint.

*Source provenance: original Euler orientation exposition and exercises, linked to the source-owned Dirichlet and Gibbs chapters, whose proved theorems are explicitly identified above. CC BY-SA 4.0. Draft; no independent review is claimed.*
