
# Notation and Conventions

This guide is designed for repeated reference. It records notation used across chapters, domain conventions, and policies for series, transforms, and special symbols.

## Numbers and sets

- $\mathbb{N}$: the natural numbers $\{1,2,3,\dots\}$. When $0$ is included, the text says so explicitly.
- $\mathbb{Z}$: the integers.
- $\mathbb{Q}$: the rational numbers.
- $\mathbb{R}$: the real numbers.
- $\mathbb{C}$: the complex numbers $\{a+bi:a,b\in\mathbb{R}\}$ with $i^{2}=-1$.
- $\mathbb{R}^{+}$: the positive real numbers $(0,\infty)$.
- $[a,b]$: the closed interval $\{x\in\mathbb{R}:a\le x\le b\}$.
- $(a,b)$: the open interval $\{x\in\mathbb{R}:a<x<b\}$.

## Functions

- $f:A\to B$: a function with domain $A$ and codomain $B$.
- $\operatorname{dom}(f)$: the domain of $f$.
- $\operatorname{im}(f)$ or $f(A)$: the image $\{f(a):a\in A\}$.
- $\operatorname{id}_{A}$: the identity function on $A$, defined by $\operatorname{id}_{A}(a)=a$.
- $g\circ f$: composition, defined by $(g\circ f)(x)=g(f(x))$ when the codomain of $f$ matches the domain of $g$.
- $f^{-1}$: the two-sided inverse of $f$, defined only when $f$ is bijective.
- $\operatorname{Re}(z)$: the real part of $z\in\mathbb{C}$.
- $\operatorname{Im}(z)$: the imaginary part of $z\in\mathbb{C}$.
- $\overline{z}$: the complex conjugate of $z$.
- $|z|$: the modulus $\sqrt{\operatorname{Re}(z)^{2}+\operatorname{Im}(z)^{2}}$.

## Series and sequences

- $\sum_{n=0}^{\infty}a_{n}$: an infinite series.
- $\sum_{n=0}^{\infty}a_{n}(z-c)^{n}$: a power series centered at $c$.
- $R$: the radius of convergence of a power series.
- $n!$: factorial, with $0!=1$ and $(n+1)!=(n+1)\cdot n!$.
- $\binom{n}{k}$: the binomial coefficient $\frac{n!}{k!(n-k)!}$.
- $\Gamma(s)$: the gamma function, extending factorial to complex $s$ with $\operatorname{Re}(s)>0$ via $\Gamma(s)=\int_{0}^{\infty}t^{s-1}e^{-t}\,dt$.

## Transforms

- $a_{n}$, $b_{n}$: Fourier coefficients for a function on $[-\pi,\pi]$.
- $\hat{f}(\xi)$: the Fourier transform of $f$, defined by $\hat{f}(\xi)=\int_{-\infty}^{\infty}f(x)e^{-2\pi ix\xi}\,dx$.
- $\mathcal{F}[f]$: alternative notation for the Fourier transform.

## Differential and difference equations

- $y'$, $y''$: first and second derivatives with respect to the independent variable.
- $y^{(n)}$: the $n$th derivative.
- $a_{n}$: the $n$th term of a sequence.
- $\Delta a_{n}=a_{n+1}-a_{n}$: the forward difference.

## Asymptotic and order notation

- $f(x)=O(g(x))$ as $x\to a$: there exists $C>0$ and a neighborhood of $a$ such that $|f(x)|\le C|g(x)|$.
- $f(x)=o(g(x))$ as $x\to a$: $\lim_{x\to a}\frac{f(x)}{g(x)}=0$.
- $f(x)\sim g(x)$ as $x\to a$: $\lim_{x\to a}\frac{f(x)}{g(x)}=1$.

## Special functions

- $\zeta(s)$: the Riemann zeta function, $\sum_{n=1}^{\infty}n^{-s}$ for $\operatorname{Re}(s)>1$.
- $\operatorname{Li}_{2}(z)$: the dilogarithm, $\sum_{n=1}^{\infty}\frac{z^{n}}{n^{2}}$ for $|z|\le 1$.
- $J_{\nu}(z)$: the Bessel function of the first kind of order $\nu$.

## Domain and indexing conventions

- The independent variable for real functions is usually $x$ or $t$; for complex functions, $z$ or $w$; for sequences, $n$ or $k$.
- Summation indices run over $\mathbb{N}\cup\{0\}$ unless stated otherwise.
- The principal branch of the complex logarithm, $\operatorname{Log}(z)$, is defined on $\mathbb{C}\setminus(-\infty,0]$ with $\operatorname{Log}(1)=0$ and imaginary part in $(-\pi,\pi)$.
- Fourier series are defined on $[-\pi,\pi]$ unless a different period is stated.

## Ambiguity policies

- A formula alone does not define a function; domain and codomain must be specified.
- $\sin^{2}x$ means $(\sin x)^{2}$, not $\sin(\sin x)$.
- Multi-character subscripts and superscripts are braced: $e^{2x}$ means $e^{(2x)}$, not $(e^{2})x$.
- The notation $f^{-1}(x)$ means the inverse function value when $f$ is bijective; it never means $1/f(x)$.

## Accessibility and notation policy

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Tables and diagrams are accompanied by exact descriptions of rows, columns, or relations. Plain-source formulas use readable tokens such as $\le$, $\to$, and $\cong$ when a specialized glyph would otherwise be the only carrier of meaning.
