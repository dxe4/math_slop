var e=`---
parent_id: book-functions-equations-proof
chapter_id: dynamical-systems
title: "Dynamical Systems"
level: undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Dynamical Systems

## Motivation: when exact solutions fail

Most differential equations cannot be solved in closed form. Even simple-looking nonlinear equations such as the pendulum equation $\\theta''+\\sin\\theta=0$ resist elementary integration. Yet we still need to understand their behavior: Do solutions settle to equilibrium? Do they oscillate? Do small changes in initial conditions lead to wildly different outcomes?

**Dynamical systems theory** addresses these questions through qualitative analysis: equilibria, stability, phase portraits, and bifurcations. This chapter introduces these concepts for autonomous systems of first-order equations, with emphasis on linearization near equilibria and the classification of two-dimensional linear systems.

## Autonomous systems and equilibria

**Definition 10.1 (Autonomous system).** An autonomous system of first-order ODEs has the form

$$\\frac{d\\mathbf{x}}{dt}=\\mathbf{f}(\\mathbf{x}),$$

where $\\mathbf{x}\\in\\mathbb{R}^{n}$ and $\\mathbf{f}:\\mathbb{R}^{n}\\to\\mathbb{R}^{n}$ is a smooth vector field.

**Definition 10.2 (Equilibrium).** A point $\\mathbf{x}^{*}$ is an **equilibrium** (or **fixed point** or **critical point**) if $\\mathbf{f}(\\mathbf{x}^{*})=\\mathbf{0}$.

At an equilibrium, the constant function $\\mathbf{x}(t)=\\mathbf{x}^{*}$ is a solution. The question is whether nearby solutions approach it, recede from it, or orbit around it.

## Linear systems in two dimensions

Consider the linear system

$$\\frac{d}{dt}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=A\\mathbf{x}.$$

The origin is always an equilibrium. Its stability is determined by the eigenvalues of $A$.

Let $\\tau=\\operatorname{tr}(A)=a+d$ and $\\Delta=\\det(A)=ad-bc$. The characteristic equation is $\\lambda^{2}-\\tau\\lambda+\\Delta=0$, with roots

$$\\lambda=\\frac{\\tau\\pm\\sqrt{\\tau^{2}-4\\Delta}}{2}.$$

**Classification:**

| Region | Eigenvalues | Type | Stability |
|---|---|---|---|
| $\\Delta<0$ | real, opposite signs | saddle | unstable |
| $0<\\Delta<\\tau^{2}/4$, $\\tau<0$ | real, both negative | stable node | asymptotically stable |
| $0<\\Delta<\\tau^{2}/4$, $\\tau>0$ | real, both positive | unstable node | unstable |
| $\\Delta>\\tau^{2}/4$, $\\tau<0$ | complex, negative real part | stable spiral | asymptotically stable |
| $\\Delta>\\tau^{2}/4$, $\\tau>0$ | complex, positive real part | unstable spiral | unstable |
| $\\Delta>0$, $\\tau=0$ | purely imaginary | center | stable but not asymptotically |
| $\\Delta=\\tau^{2}/4$, $\\tau<0$ | repeated negative | proper or improper stable node | asymptotically stable |
| $\\Delta=\\tau^{2}/4$, $\\tau>0$ | repeated positive | proper or improper unstable node | unstable |
| $\\Delta=0$, $\\tau<0$ | one zero, one negative | line of equilibria after a linear change | stable, not asymptotically |
| $\\Delta=0$, $\\tau>0$ | one zero, one positive | line of equilibria after a linear change | unstable |
| $\\Delta=\\tau=0$ | both zero | zero matrix or nonzero nilpotent | stable if $A=0$; unstable if $A\\ne0$ |

**Theorem 10.3 (Stability for linear systems).** If all eigenvalues of $A$ have negative real part, the origin is asymptotically stable: every solution tends to $\\mathbf{0}$ as $t\\to\\infty$. If any eigenvalue has positive real part, the origin is unstable.

## Linearization and the Hartman-Grobman theorem

For a nonlinear system $\\mathbf{x}'=\\mathbf{f}(\\mathbf{x})$ with equilibrium $\\mathbf{x}^{*}$, define the **Jacobian matrix**

$$J_{ij}=\\frac{\\partial f_{i}}{\\partial x_{j}}(\\mathbf{x}^{*}).$$

**Theorem 10.4 (Hartman-Grobman, informal statement).** If $\\mathbf{x}^{*}$ is a hyperbolic equilibrium (no eigenvalue of $J$ has zero real part), then the phase portrait of the nonlinear system near $\\mathbf{x}^{*}$ is topologically equivalent to that of the linearized system $\\mathbf{x}'=J\\mathbf{x}$.

This justifies using linear stability analysis locally, provided no eigenvalue lies on the imaginary axis. The precise hypotheses, the definition of local topological conjugacy for flows, and a proof are imported from Perko, *Differential Equations and Dynamical Systems*, 3rd ed., §2.8; the sentence above remains an orientation-level formulation.

**Example.** Analyze the equilibria of $x'=x(1-x-y)$, $y'=y(1-2x-y)$.

Equilibria satisfy $x(1-x-y)=0$ and $y(1-2x-y)=0$.

- $(0,0)$: Jacobian $J=\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}$, eigenvalues $1,1$. Unstable node.
- $(1,0)$: $J=\\begin{pmatrix}-1&-1\\\\0&-1\\end{pmatrix}$, eigenvalues $-1,-1$. Stable node.
- $(0,1)$: $J=\\begin{pmatrix}0&0\\\\-2&-1\\end{pmatrix}$, with eigenvalues $0$ and $-1$. This equilibrium is non-hyperbolic, so the Hartman-Grobman theorem and the linear classification do not decide its nonlinear stability.

The coexistence equilibrium $(1-x-y=0,1-2x-y=0)$ gives $x=0,y=1$, already found. No other equilibria exist in the first quadrant. ∎

## Common errors and how to avoid them

**Error: Applying linearization at non-hyperbolic equilibria.** If an eigenvalue has zero real part, the Hartman-Grobman theorem does not apply, and nonlinear terms can qualitatively change the behavior. Center manifolds or Lyapunov functions are needed instead.

**Error: Confusing stability with boundedness.** A center is stable (solutions stay nearby) but not asymptotically stable (they do not converge). A saddle is unstable even though some trajectories approach the equilibrium.

**Error: Ignoring the domain of the model.** In population models, negative populations are meaningless. Equilibria outside the biologically relevant region should be noted but not treated as physically meaningful attractors.

## Practice exercises

### Exercise 1
Classify the equilibrium $(0,0)$ for $x'=2x+y$, $y'=x+2y$.

**Solution.** Matrix $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$. Trace $\\tau=4$, determinant $\\Delta=3$. Since $\\tau^{2}-4\\Delta=16-12=4>0$, eigenvalues are real: $\\lambda=(4\\pm 2)/2$, so $\\lambda=3,1$. Both positive, so $(0,0)$ is an unstable node. ∎

### Exercise 2
Classify the equilibrium $(0,0)$ for $x'=-x+2y$, $y'=-2x-y$.

**Solution.** Matrix $A=\\begin{pmatrix}-1&2\\\\-2&-1\\end{pmatrix}$. Trace $\\tau=-2$, determinant $\\Delta=5$. Since $\\tau^{2}-4\\Delta=4-20=-16<0$, eigenvalues are complex: $\\lambda=(-2\\pm 4i)/2=-1\\pm 2i$. Negative real part, so $(0,0)$ is a stable spiral. ∎

### Exercise 3
Find and classify all equilibria of $x'=x(3-x-2y)$, $y'=y(2-x-y)$.

**Solution.** Equilibria: $(0,0)$, $(3,0)$, $(0,2)$, and solving $3-x-2y=0$, $2-x-y=0$ gives $x=1$, $y=1$.

- $(0,0)$: $J=\\begin{pmatrix}3&0\\\\0&2\\end{pmatrix}$, eigenvalues $3,2$. Unstable node.
- $(3,0)$: $J=\\begin{pmatrix}-3&-6\\\\0&-1\\end{pmatrix}$, eigenvalues $-3,-1$. Stable node.
- $(0,2)$: $J=\\begin{pmatrix}-1&0\\\\-2&-2\\end{pmatrix}$, eigenvalues $-1,-2$. Stable node.
- $(1,1)$: $J=\\begin{pmatrix}-1&-2\\\\-1&-1\\end{pmatrix}$, trace $-2$, determinant $-1$. Saddle (unstable). ∎

### Exercise 4
Show that $V(x,y)=x^{2}+y^{2}$ is a Lyapunov function for $x'=-x+y^{2}$, $y'=-y-xy$ at $(0,0)$, and conclude stability.

**Solution.** Along trajectories, $\\dot{V}=2xx'+2yy'=2x(-x+y^{2})+2y(-y-xy)=-2x^{2}+2xy^{2}-2y^{2}-2xy^{2}=-2(x^{2}+y^{2})=-2V$. Since $\\dot{V}<0$ for all $(x,y)\\neq(0,0)$, $V$ is a strict Lyapunov function, and $(0,0)$ is asymptotically stable. ∎

### Exercise 5
For the linear system $x'=y$, $y'=-x$, sketch the phase portrait and classify the equilibrium.

**Solution.** Matrix $A=\\begin{pmatrix}0&1\\\\-1&0\\end{pmatrix}$. Trace $\\tau=0$, determinant $\\Delta=1$. Eigenvalues: $\\lambda=\\pm i$. The equilibrium $(0,0)$ is a center. Solutions satisfy $x''=-x$, so $x(t)=C\\cos t+D\\sin t$ and $y(t)=-C\\sin t+D\\cos t$. Trajectories are circles $x^{2}+y^{2}=C^{2}+D^{2}$. The origin is stable but not asymptotically stable. ∎

## Looking forward and back

This chapter introduced qualitative methods for differential equations, complementing the exact solution techniques of **Differential Equations**. The classification of linear equilibria by eigenvalues, and the linearization principle for nonlinear systems, are foundational tools. In the next chapter, **Project: Prove a New Result**, you will apply these techniques---together with the proof-building skills developed throughout this book---to formulate and prove a theorem about a dynamical system of your choice. The project asks you to state hypotheses precisely, verify them on examples, and construct a rigorous argument.
`;export{e as default};