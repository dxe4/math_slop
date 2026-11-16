var e=`---
id: deep-dive-pde-heat-maximum-principle
title: "The heat equation and the maximum principle"
license: CC BY-SA 4.0
---

# The heat equation and the maximum principle

A forward heat problem receives information from its initial state and spatial boundary. With positive diffusivity and no positive interior forcing, a classical temperature profile cannot rise above the largest value supplied on that past and lateral boundary. The maximum principle makes this statement precise and turns it into comparison and uniqueness arguments.

This **Years 2–3 (L3)** article assumes [Heat, wave and Laplace equations](/articles/pde-heat-wave-laplace-equations/), partial derivatives, and the compactness tools of [Sequences and Compactness](/books/proof-safe-real-analysis/sequences-compactness/). Its scope is a bounded spatial domain and classical solutions continuous through the boundary. The full [Heat Equation chapter](/books/partial-differential-equations/heat-equation/) treats further source estimates and whole-space constructions.

## The boundary of a forward question

Fix a nonempty bounded open set $\\Omega\\subseteq\\mathbb R^d$, a time $T>0$ and a constant $\\kappa>0$. Define the cylinder $Q=\\Omega\\times(0,T)$. Its parabolic boundary is

$$\\partial_pQ=(\\overline\\Omega\\times\\{0\\})\\cup(\\partial\\Omega\\times[0,T]).$$

It consists of the initial slice and the lateral spatial boundary, including their corners. Interior points of the final-time slice are excluded. A forward problem predicts those final values; they are not another freely chosen set of initial data.

Assume $u$ is continuous on $\\overline\\Omega\\times[0,T]$, twice continuously differentiable in space and once in time on the open cylinder, and satisfies

$$Lu:=u_t-\\kappa\\Delta u\\le0.$$

Such a function is a classical subsolution. Equality includes the homogeneous heat equation. Continuity on the compact closure ensures finite attained maxima; derivatives at the initial, final or lateral boundary are not assumed. No smoothness of the spatial boundary is needed for this argument.

## The maximum principle and its strict perturbation

**Theorem.** Under these assumptions,

$$u(x,t)\\le M:=\\max_{\\partial_pQ}u\\quad\\text{on }\\overline\\Omega\\times[0,T].$$

To prove it, first choose $\\varepsilon>0$ and put $v=u-\\varepsilon t$. Its operator value satisfies $Lv\\le-\\varepsilon$, a strict inequality. Fix a smaller final time $S$ with $0<S<T$, and take a maximum of $v$ on the compact cylinder ending at $S$.

If this maximum exceeded $M$, its spatial position would be inside $\\Omega$ and its time $t_0$ positive. On the initial and lateral pieces we have $v\\le u\\le M$. At the maximizing spatial point, every second coordinate derivative of $v$ is nonpositive, so $\\Delta v\\le0$.

The time derivative is nonnegative. If $t_0<S$, it is zero at an interior time maximum. If $t_0=S$, its left difference quotients are nonnegative because the value is at least those at all immediately preceding times. This derivative exists: $S<T$, so the point still lies at an interior time of the original cylinder. Hence $v_t-\\kappa\\Delta v\\ge0$, contradicting $Lv\\le-\\varepsilon$.

Therefore $v\\le M$ up to time $S$. For any $t<T$ choose a suitable $S\\ge t$ and obtain $u(x,t)\\le M+\\varepsilon t$. Let $\\varepsilon$ decrease to zero, then use continuity to include time $T$ and the spatial boundary. This proves the theorem without taking a derivative at the original final time.

The small subtraction supplies a genuine contradiction. Without it, the sign calculation at a maximum could give only $Lu\\ge0$ alongside $Lu\\le0$, which is compatible with equality. Positivity of $\\kappa$ also has a visible role: it makes the spatial maximum's Laplacian contribute the required nonnegative amount to $Lu$.

## Worked example: a decaying mode

On $0<x<\\pi$, let

$$u(x,t)=e^{-\\kappa t}\\sin x.$$

Its derivatives satisfy $u_t=-\\kappa u$ and $u_{xx}=-u$, so $Lu=0$. The lateral endpoint values are zero and the initial profile lies between zero and one. Applying the maximum principle to $u$ gives $u\\le1$; applying it to $-u$ gives $u\\ge0$.

The explicit formula gives the sharper maximum $e^{-\\kappa t}$ at each fixed positive time, attained at $x=\\pi/2$. The general principle supplied a bound from the prescribed data; the exact exponential rate came from the special solution formula. Neither calculation by itself constructs solutions for arbitrary boundary data on every domain.

## Comparison and uniqueness

If $Lu\\le Lv$ and $u\\le v$ on the parabolic boundary, apply the theorem to $u-v$. It is a classical subsolution with nonpositive boundary data, so $u\\le v$ everywhere.

In particular, two classical heat solutions with the same initial and lateral values have difference solving the homogeneous equation with zero parabolic-boundary data. Comparison applied to that difference and its negative forces equality throughout the cylinder. This is a uniqueness theorem for the stated class; existence requires a separate construction.

The same reasoning controls errors in data. If two solutions have the same source and their parabolic-boundary values differ by at most $\\delta$, their difference lies between $-\\delta$ and $\\delta$ everywhere. Thus the conclusion is also a stability estimate in the uniform norm.

## Forcing and unbounded domains change the premises

The inequality $Lu\\le0$ permits no positive interior source in this sign convention. For example, $u(x,t)=t\\sin x$ on the interval has zero initial and lateral values but positive interior values. Its operator is $(1+\\kappa t)\\sin x>0$, so it fails precisely that hypothesis.

On an unbounded spatial domain, the compact maximum argument also fails. Additional boundedness or growth control can restore suitable conclusions through barrier arguments, as developed in the book. The bounded-cylinder theorem does not silently quantify over those different settings.

All functions in this theorem have classical derivatives. Sobolev weak formulations and their comparison arguments require their own function-space hypotheses in the later weak-theory route.

## Exercises

### Exercise 1
<a id="deep-dive-pde-heat-maximum-principle-ex-1"></a>
Let $u,v$ satisfy the stated classical regularity on the same bounded cylinder, with $Lu=Lv$. Assume $|u-v|\\le1/10$ on the parabolic boundary. Prove the same bound throughout the closure and explain why it is not an existence proof.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Subtract the solutions and compare with the two constant functions.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Apply the maximum principle to both signs of the difference, after subtracting the permitted error.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Set $w=u-v$. Then $Lw=0$. Both $w-1/10$ and $-w-1/10$ have operator zero and nonpositive parabolic-boundary values. Their maximum bounds give $w\\le1/10$ and $-w\\le1/10$, hence $|u-v|\\le1/10$. The argument begins with two already-existing classical functions; it supplies no construction for arbitrary prescribed data, so it proves stability and uniqueness-type control rather than existence.
</details>

### Exercise 2
<a id="deep-dive-pde-heat-maximum-principle-ex-2"></a>
For $u(x,t)=t\\sin x$ on $(0,\\pi)\\times(0,T)$, verify zero initial and lateral data, positive interior values, and the exact sign of $Lu$. Which maximum-principle premise is missing?

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Compute the first time derivative and the second spatial derivative independently.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Check the subsolution sign in the theorem rather than assuming that every smooth function with zero boundary data satisfies its PDE premise.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
At time zero the function vanishes, and at either spatial endpoint sine vanishes for every time. For interior $x$ and positive time it is positive. Its derivatives are $u_t=\\sin x$ and $u_{xx}=-t\\sin x$, giving $Lu=(1+\\kappa t)\\sin x>0$. It is not a subsolution with $Lu\\le0$. The boundary and regularity conditions alone do not yield the theorem's bound when positive interior forcing is present.
</details>

## Continue into the book

The parabolic boundary, positive diffusivity and classical regularity make the maximum argument work. A strict time perturbation proves the bound, and differences turn it into comparison, uniqueness and data stability. Continue with [The Heat Equation and the Parabolic Maximum Principle](/books/partial-differential-equations/heat-equation/) for source estimates and explicit constructions, and [Classification and Model Problems](/books/partial-differential-equations/classification-model-problems/) for the distinction between forward diffusion, waves and equilibrium.
`;export{e as default};