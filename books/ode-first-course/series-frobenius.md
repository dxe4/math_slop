
# Series Solutions and the Frobenius Method

A differential equation can determine a function even when familiar closed forms do not. A power series turns that determination into a recurrence for coefficients. The method has two distinct stages: find the candidate coefficients, then prove that the series converges and that its derivatives satisfy the equation. Formal coefficient matching alone completes only the first stage.

At an ordinary point we seek an ordinary Taylor series. At a regular singular point the coefficient of the highest derivative vanishes in a controlled way, and a factor \(x^r\) may be necessary. Repeated or integer-separated exponents can also create logarithms. The Frobenius method is therefore a local structure theorem, with hypotheses and alternatives, rather than a promise that every equation has two ordinary power-series solutions.

**Preparation.** Use the [power-series material in Calculus, Chapter 17](../../apps/calculus/index.html#chapter/17), especially absolute convergence and termwise differentiation inside a radius, and [Second-Order Linear Equations](second-order-linear-equations.md), including reduction of order and IVP uniqueness. We work near zero after translating the independent variable. A real analytic coefficient means one represented by a convergent real power series on some interval about zero.

## 1. Ordinary points and coefficient bookkeeping

An equation \(a(x)y''+b(x)y'+c(x)y=g(x)\) has an ordinary point at zero if its normalized coefficients \(p=b/a,q=c/a,f=g/a\) are analytic there. In particular the leading coefficient is nonzero there in the usual analytic-coefficient setting.

Write \(y=\sum_{n=0}^\infty a_nx^n\). Its derivative candidates are
\[
y'=\sum_{n=0}^\infty(n+1)a_{n+1}x^n,\qquad
y''=\sum_{n=0}^\infty(n+2)(n+1)a_{n+2}x^n.
\]
Index shifts make every coefficient refer to the same power. Products with analytic coefficients are Cauchy products, valid after convergence is established on a smaller interior interval.

For \(y''=xy\), coefficient matching gives
\[
a_2=0,\qquad
(n+2)(n+1)a_{n+2}=a_{n-1}\quad(n\ge1).
\]
The initial data determine \(a_0=y(0)\) and \(a_1=y'(0)\). All later coefficients follow. The recurrence splits into classes of indices modulo three, a structural feature of the multiplication by x rather than a mysterious numerical pattern.

**Worked Example 9.1 (a convergent ordinary-point solution).** Take \(y''=xy\), \(y(0)=1,y'(0)=0\). The recurrence gives
\[
y=1+\frac{x^3}{6}+\frac{x^6}{180}+\frac{x^9}{12960}+\cdots.
\]
More precisely, only \(a_{3j}\) are nonzero and
\(a_{3j}=a_{3j-3}/[(3j)(3j-1)]\).
For a fixed absolute input R, the ratio of consecutive nonzero absolute terms is \(R^3/[(3j)(3j-1)]\), tending to zero. The series converges absolutely for every x. Its differentiated series do too, since the additional polynomial factors in j do not overcome that quadratic denominator. Termwise differentiation therefore proves the equation. The first coefficients verify the data, and regular IVP uniqueness identifies the series with the required solution.

## 2. Why analytic coefficients give actual solutions

**Theorem 9.1 (ordinary-point series).** If p,q,f have convergent power series for \(|x|<R\), with R>0, then \(y''+py'+qy=f\) has a convergent power-series solution near zero for every prescribed \(y(0),y'(0)\).

**Proof.** Write \(p=\sum p_kx^k\), and similarly for q,f. Matching the coefficient of \(x^n\) gives
\[
(n+2)(n+1)a_{n+2}
=f_n-\sum_{k=0}^np_k(n-k+1)a_{n-k+1}
-\sum_{k=0}^nq_ka_{n-k}.
\]
Thus the coefficients exist uniquely once \(a_0,a_1\) are fixed. Choose \(0<\rho<R\). Absolute convergence at \(\rho\) implies a constant M bounds all \(|p_k|\rho^k,|q_k|\rho^k,|f_k|\rho^k\).

Choose S>\(1/\rho\). Suppose earlier coefficients satisfy \(|a_j|\le C S^j\), with C≥1. Divide the recurrence bound by \(C S^{n+2}\). Its right side is at most
\[
\frac{1}{(n+1)(n+2)}
\left[\frac{M}{S^2}
+\frac{M(n+1)}S\sum_{k=0}^{\infty}(\rho S)^{-k}
+\frac{M}{S^2}\sum_{k=0}^{\infty}(\rho S)^{-k}\right].
\]
The first term uses \((\rho S)^{-n}\le1\). This whole bound tends to zero as n grows, independently of C. Choose N after which it is at most one. Now choose C large enough to bound the finitely many recursively determined coefficients through index N+2. Induction proves \(|a_j|\le CS^j\) for every j. Consequently the series and its first two derivative series converge uniformly on every \(|x|\le r<1/S\), by comparison with geometric series times powers of j. Termwise operations and the recurrence prove the equation, and the initial coefficients give the data. \(\square\)

This proof provides a positive local radius and is sufficient for the existence claim. Applying it with successively larger interior coefficient radii can sharpen the result, but identifying a nearest singularity in the complex plane is a further topic. A real graph alone does not establish the radius of a Taylor expansion.

The coefficient bound is a majorant argument: a simple convergent numerical series controls a less transparent function series. Its purpose is to turn a recurrence from formal algebra into a legitimate differentiable solution. In explicit examples, a ratio test can be simpler; the general proof explains why analyticity is a useful hypothesis.

## 3. Regular singular points

For the normalized homogeneous equation \(y''+P(x)y'+Q(x)y=0\), zero is a regular singular point when at least one of P,Q is singular at zero and
\[
p(x)=xP(x),\qquad q(x)=x^2Q(x)
\]
extend analytically across zero. We therefore write
\[
x^2y''+xp(x)y'+q(x)y=0,
\]
where p,q are analytic near zero. The displayed form also accommodates ordinary points when both normalized coefficients are analytic. Classification must always be made from the normalized coefficients, not just from the appearance of a vanishing leading factor; the theorem below applies to this wider displayed form as well.

A Frobenius candidate on x>0 is
\[
y=x^r\sum_{n=0}^\infty a_nx^n,\qquad a_0\ne0.
\]
Positive x gives an unambiguous real power \(x^r=e^{r\log x}\). Negative x is a separate interval, with \((-x)^r\) and the transformed coefficients if needed. A singular point is not an ordinary initial-data point; specifying y and y' there may be meaningless or incompatible with a solution.

Substitution gives the indicial polynomial
\[
I(r)=r(r-1)+p_0r+q_0.
\]
The coefficient of the lowest power is \(I(r)a_0\), so r must be a root. Higher coefficients satisfy
\[
I(r+n)a_n=
-\sum_{k=1}^n\bigl[p_k(r+n-k)+q_k\bigr]a_{n-k}.
\]
A zero denominator at a positive n is the exact place where a smaller-root pure-power construction can fail. It is not a small numerical denominator to be ignored.

## 4. A Frobenius theorem with convergence and logarithms

**Theorem 9.2 (real indicial roots).** Suppose p,q are real analytic near zero and I has real roots \(r_1\ge r_2\). On some interval \(0<x<\varepsilon\) there is a fundamental pair with the following forms.

The larger-root solution is \(y_1=x^{r_1}A(x)\), with A analytic and A(0)=1. If \(r_1-r_2\) is not an integer, a second solution is \(x^{r_2}B(x)\) with analytic B and B(0) nonzero. If the roots coincide, a second solution has form \(y_1\log x+x^{r_1}B(x)\), after a constant scaling. If \(d=r_1-r_2\) is a positive integer, a second solution has form \(x^{r_2}B(x)+C y_1\log x\), with analytic B and B(0) nonzero. In the last case C may be zero or nonzero.

**Proof.** For r=\(r_1\), the recurrence denominator is
\(I(r_1+n)=n(n+r_1-r_2)\), nonzero for every positive integer n. Set \(a_0=1\). Choose a coefficient bound \(|p_k|,|q_k|\le M\rho^{-k}\) for some positive \(\rho\). With S>\(1/\rho\), an induction hypothesis \(|a_j|\le CS^j\) bounds the recurrence, after division by \(CS^n\), by
\[
\frac{M(n+|r_1|+1)}{|I(r_1+n)|}
\sum_{k=1}^{\infty}(\rho S)^{-k}.
\]
This tends to zero because the denominator grows quadratically and the numerator linearly. Choose a threshold after which it is at most one, then choose C to cover the finitely many earlier coefficients. The same induction as in Theorem 9.1 proves convergence and convergence of derivatives on a smaller positive interval. The coefficient identities then prove the equation. Since A(0)=1, shrink that interval so A has no zeros.

Reduction of order gives a second solution
\[
y_2=y_1\int \frac{\exp(-\int P)}{y_1^2}\,dx.
\]
Write \(P=p_0/x+(p(x)-p_0)/x\). The latter summand is analytic. Thus the integrand has the form \(x^{-p_0-2r_1}E(x)=x^{-d-1}E(x)\), where E is analytic and E(0)=1. Here the root-sum identity \(r_1+r_2=1-p_0\) was used. Analyticity of E follows from the convergent-series rules for an exponential and the reciprocal square of the nonvanishing A.

Expand \(E=\sum e_nx^n\). If d is not an integer, integrate each term as \(e_nx^{n-d}/(n-d)\). The resulting series converges on a smaller positive interval: its coefficients have the same exponential bound, since \(|n-d|\) is bounded away from zero and grows for large n. Multiplication by \(x^{r_1}A\) gives \(x^{r_2}B\), with B(0)=-1/d, nonzero.

If d=0, the constant term integrates to \(\log x\), and all positive powers integrate to analytic terms. This gives the repeated-root form. If d is a positive integer, the term n=d integrates to \(e_d\log x\); all others produce \(x^{-d}\) times an analytic series. Its constant term is \(-1/d\), so B(0) is nonzero. The logarithmic coefficient may vanish when \(e_d=0\). All integrations are justified by uniform convergence on compact subintervals of the positive interval. Finally the reduction-of-order Wronskian is \(\exp(-\int P)\ne0\), proving independence and hence completeness of the pair on that interval. \(\square\)

The proof states a real-root theorem deliberately. Complex indicial roots lead to oscillation in \(\log x\), rather than an ordering into larger and smaller real roots. Complex power-series theory can extend the theorem, but it is unnecessary for the real-root applications developed here. The Euler example below shows the simplest complex-root phenomenon directly.

**Worked Example 9.2 (a repeated indicial root).** For \(x^2y''+xy'=0\) on x>0, p=1,q=0 and \(I(r)=r^2\). One solution is 1. Reduction of order gives \(y_2=\int x^{-1}\,dx=\log x\). Direct differentiation verifies both, and their Wronskian \(1/x\) is nonzero. Thus \(A+B\log x\) is the full solution. The repeated root does not give two copies of the constant function.

**Worked Example 9.3 (an integer gap can force a logarithm).** Consider \(xy''-y=0\) on x>0, or \(x^2y''-xy=0\). Here p=0,q=-x and \(I(r)=r(r-1)\), with roots 1 and 0. For the larger root, the recurrence is \(n(n+1)a_n=a_{n-1}\), giving
\[
y_1=x(1+x/2+x^2/12+\cdots).
\]
Theorem 9.2 proves convergence. If the smaller root r=0 had a pure-power solution with \(a_0\ne0\), the coefficient of x would give \(0\cdot a_1=a_0\), impossible. Thus its second solution cannot be a pure Frobenius power series. In the reduction formula, \(1/y_1^2=x^{-2}(1-x+\cdots)\); the \(-x^{-1}\) term integrates to \(-\log x\), producing a nonzero logarithmic contribution. This is a specific obstruction, not merely a warning about possible resonance.

**Worked Example 9.4 (a harmless integer gap).** For \(x^2y''-2y=0\), the indicial roots are 2 and -1, separated by the integer 3. Direct substitution gives the pair \(x^2,x^{-1}\), with nonzero Wronskian -3. No logarithm is required. Compare this with the previous example: an integer gap permits a logarithm but does not force one.

## 5. Reading a singular solution responsibly

A convergent series need not extend to the singular endpoint with finite value or derivative. The factor \(x^r\) or a logarithm can dominate its behavior there. Boundary conditions at a singular endpoint require limits and appropriate admissibility criteria, not a routine substitution of zero into a normalized equation.

For the Euler equation \(x^2y''+xy'+y=0\), set t=\(\log x\) and \(Y(t)=y(e^t)\). Then \(xy'=Y'\) and \(x^2y''=Y''-Y'\), giving \(Y''+Y=0\). Thus the real solutions are \(A\cos(\log x)+B\sin(\log x)\). They oscillate infinitely often near zero. The indicial roots are ±i, but this derivation uses only the chain rule and the constant-coefficient theory.

Finite truncation is another separate question. A short recurrence may suggest a useful approximation, but its accuracy needs a tail estimate on a stated interval. Substituting a truncated polynomial into the ODE computes a residual, not automatically an error bound for the true solution. Stability or a variation-of-parameters estimate is needed to turn that residual into a trajectory error certificate.

## Exercises

### Exercise 9.1 {#series-frobenius-ex-1}

Find the recurrence for \(y''+y=0\) about zero.

<details><summary>Hint 1</summary>

Align both series at power n.

</details>
<details><summary>Hint 2</summary>

The second derivative coefficient is \((n+2)(n+1)a_{n+2}\).

</details>
<details><summary>Solution</summary>

Matching gives \(a_{n+2}=-a_n/[(n+2)(n+1)]\). The arbitrary a₀,a₁ generate cosine and sine series, which converge for every x by the factorial ratio test and recover all IVP solutions.

</details>

### Exercise 9.2 {#series-frobenius-ex-2}

For \(y''=xy\), find coefficients through degree four with y(0)=0,y'(0)=1.

<details><summary>Hint 1</summary>

Start from a₀=0,a₁=1.

</details>
<details><summary>Hint 2</summary>

The constant coefficient gives a₂=0 before the shifted recurrence begins.

</details>
<details><summary>Solution</summary>

We obtain a₂=0,a₃=a₀/6=0,a₄=a₁/12=1/12. Hence the beginning is \(y=x+x^4/12+\cdots\). These coefficients describe a candidate; the ordinary-point theorem justifies its local convergence and equation.

</details>

### Exercise 9.3 {#series-frobenius-ex-3}

Classify zero for \(y''+y=0\) and for \(x^2y''+xy'+y=0\).

<details><summary>Hint 1</summary>

Inspect normalized derivative coefficients.

</details>
<details><summary>Hint 2</summary>

Multiply the normalized first-derivative coefficient by x and the value coefficient by x² for the singular test.

</details>
<details><summary>Solution</summary>

The first equation is ordinary. In the second, P=1/x,Q=1/x² are singular, but xP=1 and x²Q=1 are analytic, so zero is regular singular.

</details>

### Exercise 9.4 {#series-frobenius-ex-4}

Find the indicial polynomial of \(x^2y''+3xy'+2y=0\).

<details><summary>Hint 1</summary>

Here p₀=3,q₀=2.

</details>
<details><summary>Hint 2</summary>

Insert them into \(r(r-1)+p_0r+q_0\).

</details>
<details><summary>Solution</summary>

The polynomial is \(r^2+2r+2\), with nonreal roots -1±i. The real-root theorem does not apply. Direct logarithmic change of variable gives solutions \(x^{-1}\cos(\log x)\) and \(x^{-1}\sin(\log x)\).

</details>

### Exercise 9.5 {#series-frobenius-ex-5}

Solve \(x^2y''-6y=0\) on x>0.

<details><summary>Hint 1</summary>

Try \(x^r\).

</details>
<details><summary>Hint 2</summary>

The indicial roots solve \(r(r-1)=6\).

</details>
<details><summary>Solution</summary>

The roots are 3 and -2. The pair \(x^3,x^{-2}\) has Wronskian -5, nonzero, so all solutions are \(Ax^3+Bx^{-2}\). This integer-gap case has no logarithm.

</details>

### Exercise 9.6 {#series-frobenius-ex-6}

Solve \(x^2y''-xy'+y=0\) on x>0.

<details><summary>Hint 1</summary>

The indicial polynomial is a square.

</details>
<details><summary>Hint 2</summary>

Use reduction of order from y₁=x.

</details>
<details><summary>Solution</summary>

The polynomial is \((r-1)^2\). Since P=-1/x, the reduction integrand is x/x²=1/x. Therefore the pair is x and \(x\log x\), and all solutions are \(Ax+Bx\log x\).

</details>

### Exercise 9.7 {#series-frobenius-ex-7}

Why is zero not regular singular for \(x^3y''+y=0\)?

<details><summary>Hint 1</summary>

Normalize away from zero.

</details>
<details><summary>Hint 2</summary>

Compute x² times the normalized value coefficient.

</details>
<details><summary>Solution</summary>

Here Q=1/x³, so x²Q=1/x does not extend analytically across zero. The point is singular but not regular singular. Frobenius theorem's hypotheses fail; that failure alone does not prove no other useful solution representation exists.

</details>

### Exercise 9.8 {#series-frobenius-ex-8}

Derive the larger-root recurrence for \(xy''-y=0\), with leading coefficient a₀=1.

<details><summary>Hint 1</summary>

Write the equation as \(x^2y''-xy=0\).

</details>
<details><summary>Hint 2</summary>

Use r=1 and shift the -xy series by one index.

</details>
<details><summary>Solution</summary>

The coefficient equation is \(n(n+1)a_n=a_{n-1}\) for n≥1. Thus \(a_n=1/[n!(n+1)!]\), giving \(y=x\sum_{n\ge0}x^n/[n!(n+1)!]\). A ratio test confirms convergence for every real x of this analytic factor.

</details>

### Exercise 9.9 {#series-frobenius-ex-9}

Explain why matching every formal coefficient does not alone prove that a candidate solves an ODE.

<details><summary>Hint 1</summary>

A formal series need not define a function.

</details>
<details><summary>Hint 2</summary>

The derivative and product operations also require convergence justification.

</details>
<details><summary>Solution</summary>

If the series diverges, it has no ordinary sum to differentiate. Even after pointwise convergence, termwise derivative operations need appropriate interior convergence. A coefficient majorant or an explicit ratio estimate provides convergent derivative series; only then do the coefficient identities imply the differential equation.

</details>

### Exercise 9.10 {#series-frobenius-ex-10}

Show that \(x^2y''+xy'+y=0\) becomes \(Y''+Y=0\) under t=log x.

<details><summary>Hint 1</summary>

Write \(Y(t)=y(e^t)\).

</details>
<details><summary>Hint 2</summary>

Differentiate once and twice using the chain rule.

</details>
<details><summary>Solution</summary>

We obtain \(Y'=xy'\) and \(Y''=xy'+x²y''\). Substitution makes the original left side \(Y''+Y\). Thus \(y=A\cos(\log x)+B\sin(\log x)\) on x>0.

</details>

### Exercise 9.11 {#series-frobenius-ex-11}

Can a nonzero solution \(A+B\log x\) always be assigned finite value and derivative at zero?

<details><summary>Hint 1</summary>

Separate B=0 from B≠0.

</details>
<details><summary>Hint 2</summary>

The derivative of the logarithmic term is B/x.

</details>
<details><summary>Solution</summary>

If B≠0, both the logarithmic value and derivative fail to have finite limits at zero. If B=0, the constant solution extends with derivative zero. Singular-endpoint admissibility therefore excludes some members of the two-parameter positive-interval family.

</details>

### Exercise 9.12 {#series-frobenius-ex-12}

In the reduction-of-order proof, why can an integer indicial gap produce a logarithm, and why need it not?

<details><summary>Hint 1</summary>

The integrand is \(x^{-d-1}E(x)\).

</details>
<details><summary>Hint 2</summary>

Inspect the coefficient of x^-1.

</details>
<details><summary>Solution</summary>

For positive integer d, the term e_d x^d in E produces e_d/x after multiplication. Its antiderivative is e_d log x. If e_d=0, that logarithm is absent. The other terms integrate to powers, giving the analytic-factor contribution. Thus integer separation permits but does not universally force a logarithmic second solution.

</details>

## Sources

Original exposition developed from the unchanged Calculus chapter 27 series preview. Jiří Lebl's [Singular points and the method of Frobenius](https://www.jirka.org/diffyqs/html/frobenius_section.html) supplies an author-written reference for the alternatives. This chapter proves a real-indicial-root local theorem with coefficient convergence and reduction of order; a full complex-analytic continuation theory is outside its scope.

## Summary

Power-series methods require both coefficient equations and convergence of the resulting function and derivative series. Ordinary analytic coefficients give locally convergent IVP expansions. At regular singular points, an indicial equation determines possible leading powers. The larger real root always gives a convergent Frobenius solution, while reduction of order explains noninteger gaps, repeated roots and the possible logarithms of integer gaps. Singular endpoint data and truncation errors need separate arguments. The next chapter changes representation again, using a transform to encode time differentiation algebraically.
