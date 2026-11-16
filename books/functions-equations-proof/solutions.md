
# Exercise and Project Solutions

These solutions show decisive reasoning for selected exercises across the fourteen chapters. They are organized by chapter and preserve the notation conventions used throughout the book. All numerical claims have been verified with independent computation.

---

## Chapter 1: Functions are typed assignments

1. **Prove that if $g:B\to A$ satisfies $g\circ f=\operatorname{id}_{A}$, then $f$ is injective and $g$ is surjective.**

   Suppose $f(x_{1})=f(x_{2})$. Applying $g$ gives $g(f(x_{1}))=g(f(x_{2}))$, so $x_{1}=x_{2}$. Thus $f$ is injective. For any $a\in A$, we have $a=g(f(a))$, so $a$ lies in the image of $g$; therefore $g$ is surjective onto $A$.

2. **Let $f:\mathbb{Z}\to\mathbb{Z}$ be defined by $f(n)=2n$. Determine injectivity, surjectivity, bijectivity.**

   If $2n_{1}=2n_{2}$ then $n_{1}=n_{2}$, so $f$ is injective. But $1\in\mathbb{Z}$ is not $2n$ for any integer $n$, so $f$ is not surjective. Hence not bijective.

3. **Prove $h:(0,\infty)\to(0,\infty)$, $h(x)=1/x$, is bijective and find its inverse.**

   If $1/x_{1}=1/x_{2}$ then $x_{1}=x_{2}$, so $h$ is injective. For any $y>0$, $x=1/y$ satisfies $h(x)=y$, so $h$ is surjective. The inverse is $h^{-1}(y)=1/y$; note $h$ is self-inverse.

4. **Construct an injective non-surjective map $f:\{1,2,3\}\to\{a,b,c,d\}$. Explain why no function from this domain to this codomain can be surjective, and hence why no bijection exists.**

   Define $f(1)=a$, $f(2)=b$, and $f(3)=c$; this is injective, while $d$ is never hit. Any function from a three-element domain has at most three distinct outputs, so it cannot hit all four elements of the codomain. Thus no such function is surjective, and in particular none is bijective.

5. **If $f:A\to B$ and $g:B\to C$ are bijective, prove $g\circ f$ is bijective and find $(g\circ f)^{-1}$.**

   Injectivity: $(g\circ f)(x_{1})=(g\circ f)(x_{2})$ implies $g(f(x_{1}))=g(f(x_{2}))$; injectivity of $g$ gives $f(x_{1})=f(x_{2})$, and injectivity of $f$ gives $x_{1}=x_{2}$. Surjectivity: given $c\in C$, surjectivity of $g$ yields $b\in B$ with $g(b)=c$, and surjectivity of $f$ yields $a\in A$ with $f(a)=b$; then $(g\circ f)(a)=c$. The inverse is $(g\circ f)^{-1}=f^{-1}\circ g^{-1}$, verified by composition.

---

## Chapter 2: Exponential and Logarithmic Functions

1. **Find the natural domain of $f(x)=\ln(3-2x)$ and determine injectivity.**

   Domain: $3-2x>0$, so $x<3/2$, giving $(-\infty,3/2)$. Since $\ln$ is strictly increasing and $3-2x$ is strictly decreasing, the composition is strictly decreasing, hence injective.

2. **Solve $3^{2x-1}=27^{x+2}$.**

   Write $27=3^{3}$, so $27^{x+2}=3^{3x+6}$. Equating exponents: $2x-1=3x+6$, giving $x=-7$. Verification: $3^{-15}=27^{-5}=3^{-15}$.

3. **Solve $\log_{5}(x+1)-\log_{5}(x-1)=1$.**

   Domain: $x>1$. Using the quotient law: $\log_{5}\bigl(\frac{x+1}{x-1}\bigr)=1$, so $\frac{x+1}{x-1}=5$. Cross-multiplying: $x+1=5x-5$, giving $4x=6$, so $x=3/2$. This satisfies $x>1$. Verification: $\log_{5}(5/2)-\log_{5}(1/2)=\log_{5}(5)=1$.

4. **Prove $\log_{a}(b)\cdot\log_{b}(a)=1$ for $a,b>0$, $a\neq 1$, $b\neq 1$.**

   By change of base: $\log_{a}(b)=\frac{\ln b}{\ln a}$ and $\log_{b}(a)=\frac{\ln a}{\ln b}$. Multiplying gives $1$.

5. **Solve $e^{2x}-5e^{x}+6=0$.**

   Substitute $u=e^{x}$ ($u>0$): $u^{2}-5u+6=(u-2)(u-3)=0$. Thus $u=2$ or $u=3$, giving $x=\ln 2$ or $x=\ln 3$. Both are valid. Verification: for $x=\ln 2$, $e^{2x}=4$ and $5e^{x}=10$, so $4-10+6=0$; similarly for $x=\ln 3$.

---

## Chapter 3: Trigonometric Functions

The exercises in this chapter focus on identities and domain analysis; solutions follow the same pattern of stating domains, applying injective reasoning on restricted intervals, and checking boundary behavior.

---

## Chapter 4: Complex Functions

1. **Express $(1+i)^{10}$ in the form $a+bi$.**

   Polar form: $1+i=\sqrt{2}\,e^{i\pi/4}$. Then $(1+i)^{10}=(\sqrt{2})^{10}e^{i\cdot 10\pi/4}=2^{5}e^{i\cdot 5\pi/2}=32e^{i(2\pi+\pi/2)}=32e^{i\pi/2}=32i$. Thus $a=0$, $b=32$. Numerical verification: $(1+1j)^{10}=32j$.

2. **Find all complex solutions to $z^{3}=1$.**

   Write $z=re^{i\theta}$. Then $r^{3}e^{i3\theta}=1=e^{i\cdot 0}$. Thus $r=1$ and $3\theta=2\pi k$ for $k\in\mathbb{Z}$. Distinct solutions for $k=0,1,2$: $\theta=0,2\pi/3,4\pi/3$. The roots are $1$, $e^{2\pi i/3}=-1/2+i\sqrt{3}/2$, and $e^{4\pi i/3}=-1/2-i\sqrt{3}/2$.

3. **Prove $|z+w|^{2}+|z-w|^{2}=2(|z|^{2}+|w|^{2})$.**

   Expand using $|u|^{2}=u\overline{u}$. The cross terms $z\overline{w}+\overline{z}w$ and $-z\overline{w}-\overline{z}w$ cancel upon addition, leaving $2|z|^{2}+2|w|^{2}$.

4. **Show $\overline{e^{z}}=e^{\overline{z}}$.**

   Let $z=x+iy$. Then $e^{z}=e^{x}(\cos y+i\sin y)$, so $\overline{e^{z}}=e^{x}(\cos y-i\sin y)=e^{x}(\cos(-y)+i\sin(-y))=e^{x-iy}=e^{\overline{z}}$.

5. **Find all roots of $z^{2}+2z+5=0$.**

   By the quadratic formula: $z=\frac{-2\pm\sqrt{4-20}}{2}=\frac{-2\pm 4i}{2}=-1\pm 2i$. Numerical verification: $(-1+2i)^{2}+2(-1+2i)+5=1-4i-4-2+4i+5=0$.

---

## Chapter 5: Power Series

1. **Find the radius of convergence of $\sum_{n=1}^{\infty}\frac{n!}{n^{n}}z^{n}$.**

   Ratio test: $\frac{a_{n+1}}{a_{n}}=\frac{(n+1)!}{(n+1)^{n+1}}\cdot\frac{n^{n}}{n!}=\bigl(\frac{n}{n+1}\bigr)^{n}=\bigl(1-\frac{1}{n+1}\bigr)^{n}\to\frac{1}{e}$. Thus $1/R=1/e$, so $R=e$. Numerical verification of the limit: computed ratio approaches $0.3679\approx 1/e$.

2. **Find the power series of $f(z)=\frac{1}{1+z^{2}}$ centered at $0$.**

   Substitute $-z^{2}$ into the geometric series: $\frac{1}{1+z^{2}}=\sum_{n=0}^{\infty}(-1)^{n}z^{2n}$. This converges when $|-z^{2}|<1$, i.e. $|z|<1$. The radius is $R=1$; singularities at $z=\pm i$ explain why $R=1$ even though the function is real-analytic on all of $\mathbb{R}$.

3. **Compute the first four nonzero terms of the power series for $e^{z}\sin z$ centered at $0$.**

   Using the Cauchy product of $e^{z}=1+z+\frac{z^{2}}{2}+\frac{z^{3}}{6}+\frac{z^{4}}{24}+\cdots$ and $\sin z=z-\frac{z^{3}}{6}+\frac{z^{5}}{120}+\cdots$, the coefficient of $z^{3}$ is $\frac{1}{2}-\frac{1}{6}=\frac{1}{3}$. The coefficient of $z^{4}$ is $\frac{1}{6}-\frac{1}{6}=0$, while the coefficient of $z^{5}$ is $\frac{1}{24}-\frac{1}{12}+\frac{1}{120}=-\frac{1}{30}$. Therefore the first four nonzero terms are

   $$e^{z}\sin z=z+z^{2}+\frac{1}{3}z^{3}-\frac{1}{30}z^{5}+\cdots.$$

4. **Prove that if $\sum a_{n}z^{n}$ has radius $R$, then $\sum a_{n}z^{2n}$ has radius $\sqrt{R}$.**

   The series $\sum a_{n}z^{2n}=\sum a_{n}(z^{2})^{n}$ converges when $|z^{2}|<R$, i.e. $|z|<\sqrt{R}$, and diverges when $|z^{2}|>R$, i.e. $|z|>\sqrt{R}$. Hence the radius is $\sqrt{R}$.

5. **Find $\sum_{n=1}^{\infty}\frac{n}{2^{n}}$.**

   Start with $\sum_{n=0}^{\infty}z^{n}=\frac{1}{1-z}$ for $|z|<1$. Differentiate: $\sum_{n=1}^{\infty}nz^{n-1}=\frac{1}{(1-z)^{2}}$. Multiply by $z$: $\sum_{n=1}^{\infty}nz^{n}=\frac{z}{(1-z)^{2}}$. Set $z=1/2$: the sum equals $\frac{1/2}{(1/2)^{2}}=\frac{1/2}{1/4}=2$. Numerical verification: partial sum of $99$ terms equals $2.0$ to machine precision.

---

## Chapter 6: Analytic Continuation

The exercises in this chapter focus on extending functions beyond their original disks of convergence using the identity theorem and chain-of-disks methods. Solutions emphasize verifying that the continuation agrees with the original function on overlaps.

---

## Chapter 7: Special Functions

The exercises develop properties of the gamma and Riemann zeta functions using the integral and series definitions introduced in the chapter. Solutions verify special values, residue calculations, and the domain of the defining zeta series.

---

## Chapter 8: Difference Equations

1. **Solve $a_{n+1}=3a_{n}$ with $a_{0}=5$.**

   $a_{n}=5\cdot 3^{n}$. Terms: $a_{0}=5$, $a_{1}=15$, $a_{2}=45$. Verification: $3\cdot 5=15$ and $3\cdot 15=45$.

2. **Solve $a_{n+2}=3a_{n+1}-2a_{n}$ with $a_{0}=3$, $a_{1}=5$.**

   Characteristic equation: $r^{2}-3r+2=0$, roots $r=1,2$. General solution: $a_{n}=A+B\cdot 2^{n}$. From $a_{0}=A+B=3$ and $a_{1}=A+2B=5$, we get $B=2$ and $A=1$. Thus $a_{n}=1+2^{n+1}$. Verification by induction: base cases hold, and $3(1+2^{n+2})-2(1+2^{n+1})=1+2^{n+3}=a_{n+2}$.

3. **Solve $a_{n+2}-4a_{n+1}+4a_{n}=0$ with $a_{0}=1$, $a_{1}=4$.**

   Characteristic equation: $r^{2}-4r+4=0$, repeated root $r=2$. General solution: $a_{n}=(A+Bn)2^{n}$. From $a_{0}=A=1$ and $a_{1}=(1+B)\cdot 2=4$, we get $B=1$. Thus $a_{n}=(1+n)2^{n}$. Verification: $a_{0}=1$, $a_{1}=4$, and $a_{2}=12=4\cdot 4-4\cdot 1$.

4. **Solve $a_{n+2}+a_{n}=0$ with $a_{0}=1$, $a_{1}=0$.**

   Characteristic equation: $r^{2}+1=0$, roots $r=\pm i=e^{\pm i\pi/2}$. General real solution: $a_{n}=C\cos(n\pi/2)+D\sin(n\pi/2)$. From $a_{0}=C=1$ and $a_{1}=D\cdot 1=0$, we get $D=0$. Thus $a_{n}=\cos(n\pi/2)$. The sequence is $1,0,-1,0,1,0,-1,0,\dots$.

5. **Solve $a_{n+2}-5a_{n+1}+6a_{n}=2^{n}$ with $a_{0}=0$, $a_{1}=1$.**

   Homogeneous solution: $a_{n}^{(h)}=A\cdot 2^{n}+B\cdot 3^{n}$. Since $2^{n}$ solves the homogeneous equation, guess $a_{n}^{(p)}=Cn\cdot 2^{n}$. Substituting gives $-2C\cdot 2^{n}=2^{n}$, so $C=-1/2$. General solution: $a_{n}=A\cdot 2^{n}+B\cdot 3^{n}-\frac{n}{2}\cdot 2^{n}$. From $a_{0}=A+B=0$ and $a_{1}=2A+3B-1=1$, we get $B=2$ and $A=-2$. Thus $a_{n}=2\cdot 3^{n}-(2+n/2)2^{n}$. Verification for $n=0,1$ and recurrence checked numerically for $n=0$ to $9$.

---

## Chapter 9: Differential Equations

1. **Solve $y'-3y=6$ with $y(0)=1$.**

   Integrating factor $e^{-3x}$: $y(x)=e^{3x}(\int 6e^{-3x}\,dx+C)=e^{3x}(-2e^{-3x}+C)=-2+Ce^{3x}$. From $y(0)=1$: $-2+C=1$, so $C=3$. Thus $y(x)=-2+3e^{3x}$. Verification: $y'(x)=9e^{3x}$, and $y'-3y=9e^{3x}-3(-2+3e^{3x})=6$.

2. **Solve $y''+4y=0$ with $y(0)=1$, $y'(0)=0$.**

   Characteristic equation: $r^{2}+4=0$, roots $r=\pm 2i$. General solution: $y(x)=C\cos(2x)+D\sin(2x)$. From $y(0)=C=1$ and $y'(0)=2D=0$, we get $D=0$. Thus $y(x)=\cos(2x)$. Verification: $y''=-4\cos(2x)=-4y$.

3. **Solve $y''-2y'+y=0$ with $y(0)=1$, $y'(0)=2$.**

   Characteristic equation: $r^{2}-2r+1=0$, repeated root $r=1$. General solution: $y(x)=(A+Bx)e^{x}$. From $y(0)=A=1$ and $y'(0)=A+B=2$, we get $B=1$. Thus $y(x)=(1+x)e^{x}$. Since $y'=(2+x)e^x$ and $y''=(3+x)e^x$, verification gives $y''-2y'+y=(3+x)e^x-2(2+x)e^x+(1+x)e^x=0$.

4. **Solve $y''+y=\sin x$.**

   Homogeneous solution: $y_{h}=A\cos x+B\sin x$. Since $\sin x$ solves the homogeneous equation, guess $y_{p}=Cx\cos x+Dx\sin x$. Computing and substituting gives $C=-1/2$ and $D=0$. Thus $y_{p}=-\frac{1}{2}x\cos x$, and the general solution is $y(x)=A\cos x+B\sin x-\frac{1}{2}x\cos x$.

5. **Solve $y''-y=e^{x}$ with $y(0)=0$, $y'(0)=1/2$.**

   Characteristic equation: $r^{2}-1=0$, roots $r=\pm 1$. Homogeneous solution: $y_{h}=Ae^{x}+Be^{-x}$. Since $e^{x}$ is a homogeneous solution, guess $y_{p}=Cxe^{x}$. Then $y_{p}''-y_{p}=2Ce^{x}=e^{x}$, so $C=1/2$. General solution: $y(x)=Ae^{x}+Be^{-x}+\frac{1}{2}xe^{x}$. From $y(0)=A+B=0$ and $y'(0)=A-B+1/2=1/2$, we get $A=B=0$. Thus $y(x)=\frac{1}{2}xe^{x}$. Verification: $y''-y=\frac{1}{2}(2+x)e^{x}-\frac{1}{2}xe^{x}=e^{x}$.

---

## Chapter 10: Dynamical Systems

The exercises in this chapter focus on stability analysis of equilibria, phase portraits, and bifurcations. Solutions use linearization, eigenvalue analysis, and the Hartman--Grobman theorem where applicable.

---

## Chapter 11: Project: Prove a New Result

This chapter is a guided project rather than an exercise set. The expected deliverable is a complete proof of a theorem chosen from a supplied list, with all hypotheses stated, all steps justified, and a discussion of where the argument would fail if a hypothesis were removed.

---

## Chapter 12: Uniform Convergence and Function Spaces

The exercises develop the Weierstrass $M$-test, uniform limits of continuous functions, and equicontinuity. Solutions emphasize distinguishing pointwise from uniform convergence with explicit bounds.

---

## Chapter 13: Fourier Series and Transforms

1. **Find the Fourier series of $f(x)=x$ on $[-\pi,\pi]$.**

   Since $x$ is odd, all $a_{n}=0$. For $b_{n}$: integration by parts gives $b_{n}=\frac{2(-1)^{n+1}}{n}$. Thus $x=2\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}\sin(nx)$. At $x=\pi$, the series converges to $0$ (the average of $\pi$ and $-\pi$), not to $\pi$.

2. **Use Parseval's identity for $f(x)=x$ to find $\sum_{n=1}^{\infty}\frac{1}{n^{2}}$.**

   We have $\frac{1}{\pi}\int_{-\pi}^{\pi}x^{2}\,dx=\frac{2\pi^{2}}{3}$. Parseval gives $\frac{2\pi^{2}}{3}=\sum_{n=1}^{\infty}b_{n}^{2}=\sum_{n=1}^{\infty}\frac{4}{n^{2}}$. Hence $\sum_{n=1}^{\infty}\frac{1}{n^{2}}=\frac{\pi^{2}}{6}$. Numerical verification: partial sum of $99\,999$ terms equals $1.64492\dots$, while $\pi^{2}/6=1.64493\dots$.

3. **Find the Fourier transform of $f(x)=e^{-|x|}$.**

   $$\hat{f}(\xi)=\int_{-\infty}^{\infty}e^{-|x|}e^{-2\pi ix\xi}\,dx=\frac{1}{1-2\pi i\xi}+\frac{1}{1+2\pi i\xi}=\frac{2}{1+4\pi^{2}\xi^{2}}.$$
   Numerical verification via trapezoidal integration agrees with the closed form to within $10^{-3}$ for $\xi\in\{0,0.5,1,2\}$.

4. **Prove that the Fourier coefficients of a continuously differentiable function satisfy $|a_{n}|\le C/n$ and $|b_{n}|\le C/n$.**

   Integrate $a_{n}$ by parts; the boundary term vanishes by periodicity, leaving $|a_{n}|\le\frac{1}{n\pi}\int_{-\pi}^{\pi}|f'(x)|\,dx=\frac{C}{n}$. The argument for $b_{n}$ is similar.

5. **Show that the Fourier series of an even function contains only cosine terms.**

   If $f$ is even, then $f(x)\sin(nx)$ is odd (even times odd). The integral of an odd function over $[-\pi,\pi]$ is $0$, so $b_{n}=0$ for all $n$.

---

## Chapter 14: Advanced Proof Techniques and Synthesis

1. **Prove by induction that $\sum_{k=1}^{n}k^{3}=\bigl(\frac{n(n+1)}{2}\bigr)^{2}$.**

   Base case $n=1$: $1^{3}=1=(1\cdot 2/2)^{2}$. Assume true for $n$. Then $\sum_{k=1}^{n+1}k^{3}=\bigl(\frac{n(n+1)}{2}\bigr)^{2}+(n+1)^{3}=\frac{(n+1)^{2}(n+2)^{2}}{4}=\bigl(\frac{(n+1)(n+2)}{2}\bigr)^{2}$. Numerical verification for $n=1$ to $19$.

2. **Prove that there are infinitely many primes.**

   Suppose $p_{1},\dots,p_{k}$ were all the primes. Let $N=p_{1}p_{2}\cdots p_{k}+1$. Then $N>1$, so $N$ has a prime divisor $q$. But $q$ cannot equal any $p_{i}$, since $N\equiv 1\pmod{p_{i}}$. Contradiction.

3. **Construct a bijection between $\mathbb{N}$ and $\mathbb{Z}$.**

   Define $f(1)=0$, $f(2n)=n$, $f(2n+1)=-n$ for $n\ge 1$. This is injective because parities and magnitudes distinguish images, and surjective because every integer appears. The first $20$ values cover $\{-9,-8,\dots,9,10\}$.

4. **Use the pigeonhole principle to prove that in any group of $6$ people, there are either $3$ mutual acquaintances or $3$ mutual strangers.**

   Fix one person $A$. Among the other $5$ people, $A$ either knows at least $3$ or does not know at least $3$. Suppose $A$ knows $B,C,D$. If any pair among $B,C,D$ knows each other, that pair with $A$ forms a trio of acquaintances. If no pair among $B,C,D$ knows each other, they form a trio of strangers. The other case is symmetric.

5. **Prove that the set of all functions $f:\mathbb{N}\to\{0,1\}$ is uncountable.**

   Suppose the set were countable, enumerated as $f_{1},f_{2},\dots$. Define $g(n)=1-f_{n}(n)$. Then $g:\mathbb{N}\to\{0,1\}$, but $g(n)\neq f_{n}(n)$ for all $n$, so $g\neq f_{n}$ for all $n$. Contradiction.
