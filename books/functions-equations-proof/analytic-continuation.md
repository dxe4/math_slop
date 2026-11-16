
# Analytic Continuation

## Motivation: extending functions beyond their origins

Many important functions are first defined on a small domain. The geometric series $\sum z^{n}$ defines $(1-z)^{-1}$ only for $|z|<1$, yet the rational function $(1-z)^{-1}$ makes sense everywhere except $z=1$. The logarithm $\ln(1+z)=\sum (-1)^{n-1}z^{n}/n$ converges absolutely exactly for $|z|<1$, and conditionally for $|z|=1$ except $z=-1$ ([DLMF 4.6.1](https://dlmf.nist.gov/4.6.E1)). For each fixed admissible boundary point, the geometric partial sums of $(-z)^n$ have modulus at most $2/|1+z|$, so Dirichlet's test applies to $1/n\downarrow0$; absolute convergence fails there by the harmonic series. At $z=-1$ the series is the negative harmonic series, while for $|z|>1$ its terms do not tend to zero. The bound depends on $z$ and is not uniform near $-1$; boundary convergence alone does not enlarge the open disk where this power series defines a holomorphic function, but we would like a logarithm defined on the entire complex plane minus a branch cut. **Analytic continuation** is the systematic process of extending a function defined by a power series to a larger domain while preserving its analytic character.

This chapter introduces the uniqueness principle for analytic functions, explains how to continue along paths using overlapping disks of convergence, and discusses branch cuts and Riemann surfaces as the natural settings for multi-valued functions.

## The identity theorem

**Theorem 6.1 (Identity theorem).** Let $f$ and $g$ be holomorphic functions on a connected open set $\Omega\subseteq\mathbb{C}$. If the set $\{z\in\Omega:f(z)=g(z)\}$ has a limit point in $\Omega$, then $f(z)=g(z)$ for all $z\in\Omega$.

**Proof sketch.** The set of points where $f-g$ vanishes together with all its derivatives is both open (by the power series representation) and closed (by continuity) in $\Omega$. Since $\Omega$ is connected, this set is either empty or all of $\Omega$. A limit point of zeros guarantees that all derivatives vanish at that point, so the set is nonempty. ∎

**Corollary 6.2 (Uniqueness of analytic continuation).** If $f$ is holomorphic on a disk $D$ and $\tilde{f}$ is holomorphic on a connected open set $\Omega\supseteq D$, and if $\tilde{f}=f$ on $D$, then $\tilde{f}$ is the unique such extension to $\Omega$.

This corollary is the theoretical foundation of analytic continuation: there is at most one way to extend an analytic function.

## Continuation by overlapping disks

Suppose $f$ is given by a power series centered at $c_{0}$ with radius $R_{0}$. Choose a point $c_{1}$ inside the disk of convergence, with $|c_{1}-c_{0}|<R_{0}$. Since $f$ is holomorphic on the disk, its Taylor series at $c_{1}$,

$$\sum_{n=0}^{\infty}\frac{f^{(n)}(c_{1})}{n!}(z-c_{1})^{n},$$

converges at least on the largest disk centered at $c_{1}$ that stays inside the original disk. Often, however, the new radius $R_{1}$ exceeds the distance to the boundary of the original disk, thereby extending $f$ to a larger region.

**Example.** The geometric series $f(z)=\sum_{n=0}^{\infty}z^{n}$ converges for $|z|<1$ and equals $(1-z)^{-1}$ there. Re-expanding at $c_{1}=-1/2$ gives

$$f(z)=\frac{1}{3/2-(z+1/2)}=\frac{2}{3}\sum_{n=0}^{\infty}\left(\frac{2}{3}\left(z+\frac12\right)\right)^n.$$

This converges for $|z+1/2|<3/2$, the distance from the new center to the pole at $z=1$. The new disk contains points with $|z|>1$, so the re-expansion really does continue the original series beyond its initial disk.

## Branch cuts and the complex logarithm

The real logarithm $\ln:(0,\infty)\to\mathbb{R}$ is the inverse of $\exp:\mathbb{R}\to(0,\infty)$. On $\mathbb{C}$, the exponential function is periodic with period $2\pi i$, so it is not injective on any domain containing two points differing by $2\pi i$. Therefore no global inverse exists on $\mathbb{C}\setminus\{0\}$.

**Definition 6.3 (Branch of logarithm).** A **branch of the logarithm** on a connected open set $\Omega\subseteq\mathbb{C}\setminus\{0\}$ is a continuous function $L:\Omega\to\mathbb{C}$ such that $e^{L(z)}=z$ for all $z\in\Omega$.

The standard **principal branch** is defined on $\mathbb{C}\setminus(-\infty,0]$ by

$$\operatorname{Log}(z)=\ln|z|+i\operatorname{Arg}(z),$$

where $\operatorname{Arg}(z)\in(-\pi,\pi)$ is the principal argument. The **branch cut** $(-\infty,0]$ is removed to prevent discontinuity as the argument jumps by $2\pi$.

**Theorem 6.4 (Analyticity of the principal logarithm).** $\operatorname{Log}(z)$ is holomorphic on $\mathbb{C}\setminus(-\infty,0]$, and $\operatorname{Log}'(z)=1/z$.

**Proof.** The exponential is holomorphic and its derivative never vanishes. The complex inverse function theorem therefore gives a holomorphic local inverse near every point of its image. On the slit plane, that local inverse agrees with the continuous branch whose imaginary part lies in $(-\pi,\pi)$, so the principal logarithm is holomorphic. Differentiating the local inverse identity $e^{\operatorname{Log}(z)}=z$ now gives $z\operatorname{Log}'(z)=1$, hence $\operatorname{Log}'(z)=1/z$. ∎

## Riemann surfaces (informal overview)

A **Riemann surface** is a geometric construction that makes a multi-valued function single-valued by enlarging its domain. For the logarithm, the Riemann surface is an infinite spiral staircase: each level corresponds to a different integer multiple of $2\pi i$ in the imaginary part. As $z$ winds around the origin, one moves up or down the staircase rather than returning to the same point.

Riemann surfaces are beyond the scope of a full treatment here, but the idea motivates why branch cuts are necessary: they are artifacts of trying to represent a multi-valued function on a single copy of the plane.

## Common errors and how to avoid them

**Error: Assuming analytic continuation always exists.** Not every holomorphic function on a disk can be extended beyond its radius of convergence. The function $f(z)=\sum_{n=0}^{\infty}z^{n!}$ has the unit circle as a natural boundary: every point on $|z|=1$ is singular, and no continuation is possible.

**Error: Crossing branch cuts carelessly.** The identity $\operatorname{Log}(zw)=\operatorname{Log}z+\operatorname{Log}w$ holds for the principal branch only when the sum of principal arguments stays in $(-\pi,\pi)$. For $z=w=e^{3\pi i/4}$, both inputs and their product lie in the domain, but $\operatorname{Log}z+\operatorname{Log}w=3\pi i/2$, whereas $zw=-i$ and $\operatorname{Log}(zw)=-\pi i/2$.

**Error: Confusing analytic continuation with algebraic extension.** Analytic continuation preserves derivatives of all orders. Simply finding a formula that agrees on an interval is not enough; the extension must be complex differentiable.

## Practice exercises

### Exercise 1
Show that the function $f(z)=\sum_{n=0}^{\infty}z^{2^{n}}$ cannot be analytically continued past the unit circle.

**Solution.** Let $\zeta$ be a root of unity whose order is a power of $2$. Then $\zeta^{2^n}=1$ for every sufficiently large $n$. Along the radius $z=r\zeta$, the tail is therefore a sum of positive real terms $r^{2^n}$. Given any $M$, its first $M$ tail terms tend to $1$ as $r\uparrow1$, so $\operatorname{Re}f(r\zeta)\to+\infty$. Thus every such $\zeta$ is a boundary singularity. These roots are dense on the unit circle. If $f$ continued through any boundary point, it would be holomorphic on a neighborhood containing one of these dense singularities, a contradiction. Hence the unit circle is a natural boundary. ∎

### Exercise 2
Find the Taylor series of $f(z)=\frac{1}{z}$ centered at $z=1$, and determine its radius of convergence.

**Solution.** Write $\frac{1}{z}=\frac{1}{1+(z-1)}=\sum_{n=0}^{\infty}(-1)^{n}(z-1)^{n}$. This is a geometric series in $-(z-1)$, convergent when $|z-1|<1$. The radius is $1$, and the singularity at $z=0$ lies on the boundary. ∎

### Exercise 3
Verify that $\operatorname{Log}(e^{z})=z$ holds for the principal branch if and only if $\operatorname{Im}(z)\in(-\pi,\pi)$.

**Solution.** Write $z=x+iy$. If $y\in(-\pi,\pi)$, then $e^z$ is in the slit plane and its principal argument is $y$, so $\operatorname{Log}(e^z)=x+iy=z$. If $y=(2k+1)\pi$ for some integer $k$, then $e^z$ lies on the removed negative real axis and the left side is undefined. For every remaining $y$ outside $(-\pi,\pi)$, the principal argument is the representative of $y$ modulo $2\pi$ in $(-\pi,\pi)$ and is not equal to $y$. Thus the equality holds exactly on the stated open strip. ∎

### Exercise 4
Let $f(z)=\sum_{n=0}^{\infty}\frac{z^{n}}{n!}$. Explain why $f$ can be analytically continued to all of $\mathbb{C}$, and identify the continuation.

**Solution.** The series is the Taylor series of $e^{z}$ at $0$, with radius $R=\infty$. Since it converges everywhere, it already defines a holomorphic function on all of $\mathbb{C}$, so no further continuation is needed. The continuation is $e^{z}$ itself. ∎

### Exercise 5
Compute $\operatorname{Log}(i)$ and $\operatorname{Log}(-i)$. Then find the two one-sided limits of $\operatorname{Log}(-1+i\varepsilon)$ as $\varepsilon\to0^+$ and of $\operatorname{Log}(-1-i\varepsilon)$ as $\varepsilon\to0^+$.

**Solution.** We have $|i|=|-i|=1$, with principal arguments $\pi/2$ and $-\pi/2$, so $\operatorname{Log}(i)=i\pi/2$ and $\operatorname{Log}(-i)=-i\pi/2$. Approaching $-1$ from the upper half-plane makes the principal argument tend to $\pi$, while approaching from below makes it tend to $-\pi$. The limits are therefore $i\pi$ and $-i\pi$, respectively. The differing limits explain why the negative real axis is removed; $\operatorname{Log}(-1)$ itself is not defined for this branch. ∎

## Looking forward and back

This chapter showed how power series, developed in **Power Series**, can be extended beyond their original disks of convergence, provided the function is analytic. The uniqueness theorem guarantees that such extensions are unique when they exist. In the next chapter, **Special Functions**, we apply analytic continuation to define the gamma function, the Riemann zeta function, and other functions that arise naturally from differential equations and number theory.
