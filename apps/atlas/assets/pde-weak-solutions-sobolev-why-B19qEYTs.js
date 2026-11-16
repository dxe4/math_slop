var e=`---
id: deep-dive-pde-weak-solutions-sobolev-why
title: "Weak solutions and Sobolev spaces: why"
license: CC BY-SA 4.0
---

# Weak solutions and Sobolev spaces: why

The expression $-u''=f$ appears to demand two classical derivatives. Multiplying by a smooth test function and integrating by parts transfers one derivative away from the unknown. The resulting identity needs only one square-integrable derivative of $u$. That change makes room for corners and energy-norm limits while keeping an exact mathematical equation.

This **Year 4 / Master's (L4)** orientation assumes [Lebesgue Integration](/books/proof-safe-real-analysis/lebesgue-integration/), Cauchy–Schwarz and the completeness of square-integrable function spaces, with Hilbert preparation in [Hilbert Spaces](/books/functional-analysis/hilbert-spaces/). [Heat, wave and Laplace equations](/articles/pde-heat-wave-laplace-equations/) supplies the classical problem context. We work with real functions on intervals. The primary [Sobolev Spaces chapter](/books/pde-weak-theory-waves-patterns/sobolev-spaces/) proves the full space, trace and coercive-form results used in this introduction.

## Derivatives can be specified by integral identities

For a classical smooth solution of $-u''=f$ on an interval $I$, a smooth compactly supported test function $\\varphi$ gives

$$\\int_I u'\\varphi'\\,dx=\\int_I f\\varphi\\,dx.$$

Compact support places the test away from the interval's endpoints, so the integration by parts has no boundary term. The identity can remain meaningful when the unknown has no second classical derivative at every point.

First define its first derivative precisely. For $u,g\\in L^2(I)$, say that $g$ is the **weak derivative** of $u$ if

$$\\int_I u\\varphi'\\,dx=-\\int_I g\\varphi\\,dx\\quad\\text{for every }\\varphi\\in C_c^\\infty(I).$$

Here $C_c^\\infty(I)$ means smooth functions with compact support contained in the open interval. Equality is tested against every such function, rather than at selected sample points. A classical first derivative satisfies this identity by ordinary integration by parts.

Functions in $L^2$ are identified when they agree almost everywhere. Changing a value at one point does not alter this derivative identity. When a weak derivative exists in $L^2$, it is unique almost everywhere: the difference of two proposed derivatives pairs to zero with every smooth test. Density of these tests in $L^2$, a named analysis input, and Cauchy–Schwarz then make its squared norm zero.

## Worked example: the corner in absolute value

Let $u(x)=|x|$ on $I=(-1,1)$. Split its test integral at zero and integrate on the two sides:

$$\\int_{-1}^1|x|\\varphi'(x)\\,dx=-\\int_{-1}^1\\operatorname{sign}(x)\\varphi(x)\\,dx.$$

The exterior boundary terms vanish by compact support; the interface terms at zero vanish because $|x|$ has value zero there. Thus the weak derivative is $g(x)=\\operatorname{sign}(x)$ almost everywhere. Its chosen value at zero is irrelevant.

The function and derivative are square integrable:

$$\\int_{-1}^1|u|^2\\,dx=\\frac23,\\qquad\\int_{-1}^1|g|^2\\,dx=2.$$

So $u$ belongs to the Sobolev space $H^1(I)$, consisting of $L^2$ functions with an $L^2$ weak derivative. Its squared norm is $\\|u\\|_{H^1}^2=8/3$.

The corner has not vanished. A further integration gives $\\int\\operatorname{sign}(x)\\varphi'(x)\\,dx=-2\\varphi(0)$, so the second distributional derivative is the point mass $2\\delta_0$. In particular, the weak equation $-u''=0$ is false. An equation that holds classically away from one point can acquire a concentrated source when interpreted against all tests.

## Why the space behaves well under approximation

The norm $\\|u\\|_{H^1}^2=\\|u\\|_2^2+\\|u'\\|_2^2$ controls both values and weak derivatives. If $(u_n)$ is Cauchy in this norm, completeness of $L^2$ gives limits $u_n\\to u$ and $u_n'\\to g$ in $L^2$. For a fixed test, Cauchy–Schwarz permits taking limits in

$$\\int u_n\\varphi'=-\\int u_n'\\varphi.$$

The result is $\\int u\\varphi'=-\\int g\\varphi$, so $u\\in H^1$ with weak derivative $g$. Thus the space is complete. Controlling derivatives as well as values is what keeps the equation's derivative information in the limit.

The derivative term alone is not a norm on all of $H^1$: a nonzero constant has derivative zero. Boundary conditions matter. Define $H_0^1(I)$ as the closure of $C_c^\\infty(I)$ in the full norm. On a bounded interval its members have zero endpoint traces, and Poincaré's inequality makes the derivative norm equivalent to the full norm. The primary chapter proves these trace and Poincaré statements; an interior weak equation by itself does not supply boundary values.

## A weak boundary problem with a point load

The zero-boundary weak Poisson problem is to find $w\\in H_0^1(I)$ such that

$$\\int_I w'v'\\,dx=F(v)\\quad\\text{for every }v\\in H_0^1(I),$$

where $F$ is a bounded linear functional for the derivative norm. An $L^2$ source gives $F(v)=\\int fv$, but other bounded loads are possible.

On $(-1,1)$, take $F(v)=v(0)$, using the interval's continuous representative. The trace formula gives $v(0)=\\int_{-1}^0v'$, hence $|F(v)|\\le\\|v'\\|_2$. The tent function $w(x)=(1-|x|)/2$ has zero endpoints and belongs to $H_0^1$. Its piecewise constant derivative gives

$$\\int_{-1}^1w'v'=\\frac12[v(0)-v(-1)]-\\frac12[v(1)-v(0)]=v(0).$$

Thus it is an exact weak solution with a corner, representing $-w''=\\delta_0$. The interval representative and zero-trace characterisation used here are proved in the linked chapter. The point-evaluation bound is specific to this one-dimensional space; higher-dimensional point loads require a separate analysis.

Coercive-form existence theorems explain the general construction. Uniqueness in this example is already visible: subtract two solutions and test with their difference. Its derivative norm is zero, and Poincaré's inequality makes the difference zero in $H_0^1$. The chosen boundary space is an essential hypothesis.

## Exercises

### Exercise 1
<a id="deep-dive-pde-weak-solutions-sobolev-why-ex-1"></a>
On $(0,1)$, show that $u(x)=x$ satisfies $\\int u'\\varphi'=0$ for every compactly supported smooth test. Why does this not contradict uniqueness of the zero-boundary weak problem with zero source?

<details data-euler-reveal="hint"><summary>Hint 1</summary>
The ordinary derivative is constant, and the test vanishes near both endpoints.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Check the unknown's boundary-space membership, not just the interior equation.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Here $u'=1$, so $\\int_0^1u'\\varphi'=\\varphi(1)-\\varphi(0)=0$. The function satisfies the homogeneous interior distributional equation. But its endpoint traces are zero and one, so it is not in $H_0^1(0,1)$. The uniqueness theorem requires that zero-boundary membership. An interior equation alone does not impose it.
</details>

### Exercise 2
<a id="deep-dive-pde-weak-solutions-sobolev-why-ex-2"></a>
Let $s$ be zero for negative inputs and one for positive inputs on $(-1,1)$. Prove that $s$ has no $L^2$ weak derivative. Use a fixed smooth bump $\\psi$ supported in $(-1,1)$ with $\\psi(0)=1$ and tests $\\varphi_\\varepsilon(x)=\\psi(x/\\varepsilon)$ for $0<\\varepsilon<1$.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
The test identity for the step would force $\\int g\\varphi=\\varphi(0)$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The test's squared integral scales by $\\varepsilon$; apply Cauchy–Schwarz with a fixed alleged derivative.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Direct integration gives $\\int s\\varphi'=-\\varphi(0)$. If an $L^2$ weak derivative $g$ existed, then $\\int g\\varphi=\\varphi(0)$ for every test. The supplied tests have value one at zero and norm $\\|\\varphi_\\varepsilon\\|_2=\\sqrt\\varepsilon\\,\\|\\psi\\|_2$. Thus $1=|\\int g\\varphi_\\varepsilon|\\le\\|g\\|_2\\sqrt\\varepsilon\\,\\|\\psi\\|_2\\to0$, impossible. A jump therefore differs from the continuous corner in the worked example. Changing the value at the single jump point cannot change any of these integrals.
</details>

## Continue into the book

Weak derivatives retain differentiation through integral identities, and the Sobolev norm keeps that information stable under energy-norm limits. The function space and its boundary conditions remain part of the problem. Continue with [Sobolev Spaces: Derivatives, Boundaries and Weak Equations](/books/pde-weak-theory-waves-patterns/sobolev-spaces/) for full proofs of traces, Poincaré coercivity and the weak existence theorem, alongside the [classical PDE model chapter](/books/partial-differential-equations/classification-model-problems/) for the original boundary questions.
`;export{e as default};