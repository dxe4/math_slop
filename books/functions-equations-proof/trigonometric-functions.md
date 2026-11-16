
# Trigonometric Functions

## Motivation: cycles and periodicity

Many natural phenomena repeat: the seasons, the motion of a pendulum, alternating current in electrical circuits, and the oscillation of a spring. Trigonometric functions provide the mathematical language for periodic behavior. Unlike the exponential function, which is monotone and therefore injective on its entire domain, the sine and cosine functions oscillate forever. Their periodicity makes them indispensable for modeling waves, but it also means they are not globally invertible.

This chapter defines the six standard trigonometric functions on the real line, proves their periodicity and symmetry properties, and studies the domain restrictions needed to define inverse trigonometric functions. We work from the unit-circle definition because it is valid for all real inputs and makes the geometric meaning transparent.

## The unit-circle definitions

Consider the unit circle $x^{2}+y^{2}=1$ in the Cartesian plane. Starting from the point $(1,0)$, traverse the circle counterclockwise through an arc of signed length $\theta$. The terminal point has coordinates $(\cos\theta,\sin\theta)$.

**Definition 3.1 (Cosine and sine).** For any real $\theta$, $\cos\theta$ and $\sin\theta$ are the $x$- and $y$-coordinates of the point on the unit circle reached by traversing an arc of length $\theta$ from $(1,0)$.

**Definition 3.2 (Tangent, cotangent, secant, cosecant).**

$$\tan\theta=\frac{\sin\theta}{\cos\theta},\qquad \cot\theta=\frac{\cos\theta}{\sin\theta},$$

$$\sec\theta=\frac{1}{\cos\theta},\qquad \csc\theta=\frac{1}{\sin\theta},$$

where each is defined only when its denominator is nonzero.

## Periodicity and symmetry

**Theorem 3.3 (Periodicity).** For all $\theta\in\mathbb{R}$,

$$\sin(\theta+2\pi)=\sin\theta\quad\text{and}\quad\cos(\theta+2\pi)=\cos\theta.$$

Consequently, both functions have period $2\pi$.

**Proof.** Adding $2\pi$ to the arc length corresponds to one full counterclockwise revolution of the unit circle, returning to the same point. Hence the coordinates are unchanged. ∎

**Theorem 3.4 (Even and odd).** For all $\theta\in\mathbb{R}$,

$$\cos(-\theta)=\cos\theta\qquad\text{(even)}$$

and

$$\sin(-\theta)=-\sin\theta\qquad\text{(odd)}.$$

**Proof.** Traversing $-\theta$ is the clockwise arc of length $|\theta|$, which reflects the terminal point across the $x$-axis. The $x$-coordinate is preserved, and the $y$-coordinate changes sign. ∎

**Theorem 3.5 (Pythagorean identity).** For all $\theta\in\mathbb{R}$,

$$\cos^{2}\theta+\sin^{2}\theta=1.$$

**Proof.** The point $(\cos\theta,\sin\theta)$ lies on the unit circle $x^{2}+y^{2}=1$ by definition. ∎

## Key values and the addition formulas

From the unit circle and special triangles, we obtain:

| $\theta$ | $0$ | $\pi/6$ | $\pi/4$ | $\pi/3$ | $\pi/2$ |
|---|---|---|---|---|---|
| $\sin\theta$ | $0$ | $1/2$ | $\sqrt{2}/2$ | $\sqrt{3}/2$ | $1$ |
| $\cos\theta$ | $1$ | $\sqrt{3}/2$ | $\sqrt{2}/2$ | $1/2$ | $0$ |

**Theorem 3.6 (Addition formulas).** For all $\alpha,\beta\in\mathbb{R}$:

$$\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta,$$

$$\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta.$$

These are proved by rotating the plane and comparing coordinates, or by using Euler's formula $e^{i\theta}=\cos\theta+i\sin\theta$ (which we treat in **Complex Functions**).

From the addition formulas follow the double-angle formulas:

$$\sin(2\theta)=2\sin\theta\cos\theta,$$

$$\cos(2\theta)=\cos^{2}\theta-\sin^{2}\theta=2\cos^{2}\theta-1=1-2\sin^{2}\theta.$$

## Inverse trigonometric functions

Because sine and cosine are periodic, they are not injective on $\mathbb{R}$. To obtain inverses, we restrict to intervals where they are strictly monotone.

**Definition 3.7 (Arcsine).** The function $\sin:[-\pi/2,\pi/2]\to[-1,1]$ is strictly increasing and bijective. Its inverse is

$$\arcsin:[-1,1]\to[-\pi/2,\pi/2],$$

satisfying $\sin(\arcsin x)=x$ for $x\in[-1,1]$ and $\arcsin(\sin\theta)=\theta$ for $\theta\in[-\pi/2,\pi/2]$.

**Definition 3.8 (Arccosine).** The function $\cos:[0,\pi]\to[-1,1]$ is strictly decreasing and bijective. Its inverse is

$$\arccos:[-1,1]\to[0,\pi].$$

**Definition 3.9 (Arctangent).** The function $\tan:(-\pi/2,\pi/2)\to\mathbb{R}$ is strictly increasing and bijective. Its inverse is

$$\arctan:\mathbb{R}\to(-\pi/2,\pi/2).$$

**Common error.** Writing $\arcsin(\sin\theta)=\theta$ for all $\theta$ is false. For example, $\sin(3\pi/4)=\sqrt{2}/2$, but $\arcsin(\sqrt{2}/2)=\pi/4$, not $3\pi/4$. The identity holds only when $\theta$ lies in the principal range $[-\pi/2,\pi/2]$.

## Solving trigonometric equations

**Example.** Solve $\sin\theta=1/2$ for $\theta\in[0,2\pi)$.

The principal solution is $\theta=\pi/6$. Because sine is positive in the first and second quadrants, the second solution is $\theta=\pi-\pi/6=5\pi/6$. The full set of real solutions is $\pi/6+2\pi k$ and $5\pi/6+2\pi k$ for $k\in\mathbb{Z}$.

**Example.** Solve $2\cos^{2}\theta-\cos\theta-1=0$ for $\theta\in[0,2\pi)$.

Substitute $u=\cos\theta$. Then $2u^{2}-u-1=0$, which factors as $(2u+1)(u-1)=0$. Thus $u=1$ or $u=-1/2$.

- If $\cos\theta=1$, then $\theta=0$.
- If $\cos\theta=-1/2$, then $\theta=2\pi/3$ or $\theta=4\pi/3$.

The solution set is $\{0,2\pi/3,4\pi/3\}$.

## Common errors and how to avoid them

**Error: Ignoring periodicity.** A trigonometric equation typically has infinitely many solutions. Always describe the general solution before restricting to an interval.

**Error: Dividing by a trigonometric expression that might be zero.** When solving $\sin\theta\cos\theta=\sin\theta$, moving $\sin\theta$ to one side and factoring gives $\sin\theta(\cos\theta-1)=0$. Dividing by $\sin\theta$ would lose the solutions where $\sin\theta=0$.

**Error: Using inverse trig functions outside their domains.** $\arcsin(2)$ is undefined because $2\notin[-1,1]$. When an equation produces such a value, it has no real solution.

## Practice exercises

### Exercise 1
Find all $\theta\in[0,2\pi)$ such that $\tan\theta=\sqrt{3}$.

**Solution.** Since $\tan(\pi/3)=\sqrt{3}$ and tangent has period $\pi$, the solutions in $[0,2\pi)$ are $\theta=\pi/3$ and $\theta=\pi/3+\pi=4\pi/3$. ∎

### Exercise 2
Prove that $\arcsin(x)+\arccos(x)=\pi/2$ for all $x\in[-1,1]$.

**Solution.** Let $\theta=\arcsin(x)$, so $\sin\theta=x$ and $\theta\in[-\pi/2,\pi/2]$. Then $\cos(\pi/2-\theta)=\sin\theta=x$. Since $\pi/2-\theta\in[0,\pi]$, which is the range of $\arccos$, we have $\arccos(x)=\pi/2-\theta=\pi/2-\arcsin(x)$. Rearranging gives the result. ∎

### Exercise 3
Solve $\sin(2\theta)=\cos\theta$ for $\theta\in[0,2\pi)$.

**Solution.** Using the double-angle formula, $2\sin\theta\cos\theta=\cos\theta$. Rearranging: $\cos\theta(2\sin\theta-1)=0$. Thus $\cos\theta=0$ or $\sin\theta=1/2$. In $[0,2\pi)$, $\cos\theta=0$ gives $\theta=\pi/2,3\pi/2$, and $\sin\theta=1/2$ gives $\theta=\pi/6,5\pi/6$. The solution set is $\{\pi/6,\pi/2,5\pi/6,3\pi/2\}$. ∎

### Exercise 4
Find the natural domain of $f(x)=\arcsin(2x-1)$.

**Solution.** The arcsine function requires its argument in $[-1,1]$. Thus $-1\le 2x-1\le 1$, which gives $0\le 2x\le 2$, so $0\le x\le 1$. The domain is $[0,1]$. ∎

### Exercise 5
Simplify $\tan(\arccos(x))$ for $x\in(-1,1)$, and state the sign unambiguously.

**Solution.** Let $\theta=\arccos(x)$, so $\cos\theta=x$ and $\theta\in(0,\pi)$. Then $\sin\theta=\sqrt{1-x^{2}}$ (positive because $\theta\in(0,\pi)$). Hence $\tan\theta=\frac{\sin\theta}{\cos\theta}=\frac{\sqrt{1-x^{2}}}{x}$. For $x>0$ this is positive; for $x<0$ it is negative. At $x=0$, $\arccos(0)=\pi/2$ and tangent is undefined. ∎

## Looking forward and back

This chapter studied periodic functions and the domain restrictions required to make them invertible. The techniques of domain analysis and inverse-function construction, introduced in **Functions are typed assignments** and applied to exponentials in **Exponential and Logarithmic Functions**, reappear here in a more intricate setting because periodicity destroys global injectivity. In the next chapter, **Complex Functions**, we extend sine and cosine to complex arguments via Euler's formula, where their periodicity takes on a new form and the connections between exponential and trigonometric functions become fully transparent.
