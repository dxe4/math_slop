var e=`---
parent_id: book-numerical-mathematics-optimization-by-structure
chapter_id: automatic-differentiation-systems
title: "Automatic Differentiation and Linearized Systems"
level: advanced-undergraduate
estimated_minutes: 190
license: CC BY-SA 4.0
---

# Automatic Differentiation and Linearized Systems

## Purpose and local prerequisites

Optimization algorithms consume derivatives, but a returned derivative is only
as meaningful as the executed program, its differentiability, and its numerical
stability. This chapter assumes multivariable calculus, matrix transposes,
linear solves, and the gradient/Newton chapter. It develops automatic
differentiation (AD) as exact chain-rule accumulation on a computational graph,
then connects it to implicit and adjoint differentiation through linearized
systems.

AD is neither symbolic simplification nor finite differencing. In exact
arithmetic it differentiates the sequence of elementary operations actually
executed. In floating point it evaluates the derivative program with rounding,
and it does not prove that the program represents the intended mathematical
objective.

## Computational graphs

Represent a straight-line scalar program by intermediate values

\\(v_k=\\phi_k(v_{i_1},...,v_{i_r})\\),

where every parent index is smaller than \\(k\\). Inputs are source nodes and outputs
are selected terminal nodes. Local derivatives of each elementary operation
compose by the chain rule.

Consider

\\(f(x,y)=(xy+\\sin x)^{2}\\).

A graph is

\\(v_1=x\\), \\(v_2=y\\), \\(v_3=v_1 v_2\\), \\(v_4=\\sin v_1\\),
\\(v_5=v_3+v_4\\), \\(v_6=v_5^{2}\\).

The graph matters because it makes reuse explicit. If \\(v_5\\) occurs twice in an
expanded expression, AD accumulates both derivative paths into the same node.

## Forward mode and Jacobian-vector products

Associate with each primal value \\(v_k\\) a tangent \\(\\dot{v_k}\\), the directional
derivative in an input direction \\(s\\). For multiplication and sine,

\\(\\dot{v_3}=\\dot{v_1} v_2+v_1 \\dot{v_2}\\),

\\(\\dot{v_4}=\\cos(v_1) \\dot{v_1}\\).

Continuing through the graph yields \\(\\dot{f}=J_f(x)s\\). One forward sweep computes
a **Jacobian-vector product** (JVP) without forming the full Jacobian.

For the example, choose input direction \\((\\dot{x},\\dot{y})=(1,0)\\). Then

\\(\\dot{v_5}=y+\\cos x\\),

\\(\\dot{f}=2(xy+\\sin x)(y+\\cos x)\\),

which is \\(\\partial f/\\partial x\\). Direction \\((0,1)\\) gives
\\(\\partial f/\\partial y=2(xy+\\sin x)x\\).

If a map has few inputs and many outputs, one forward sweep per input basis
direction can be efficient. For a single requested direction, the JVP usually
costs only a modest constant multiple of evaluating the primal graph.

## Reverse mode and vector-Jacobian products

Reverse mode associates an adjoint

\\(\\bar{v_k} = \\partial output/\\partial v_k\\)

with each node for a scalar output. Seed \\(\\bar{v_6}=1\\) and traverse nodes in
reverse topological order. Each node sends its current adjoint to its parents:

\\(\\bar{v_5} += 2v_5 \\bar{v_6}\\),

\\(\\bar{v_3} += \\bar{v_5}\\), \\(\\bar{v_4} += \\bar{v_5}\\),

\\(\\bar{v_1} += v_2 \\bar{v_3}\\), \\(\\bar{v_2} += v_1 \\bar{v_3}\\),

\\(\\bar{v_1} += \\cos(v_1) \\bar{v_4}\\).

The two contributions to \\(\\bar{v_1}\\) must be accumulated, not overwritten. At
the end, \\((\\bar{v_1},\\bar{v_2})=\\nabla f\\).

For a vector output \\(F:\\mathbb{R}^{n}\\to \\mathbb{R}^{m}\\), seeding an output cotangent \\(w\\) computes the
**vector-Jacobian product** (VJP) \\(w^{\\mathsf T} J_F\\). Reverse mode is attractive when a
small number of scalar outputs depend on many inputs. It trades arithmetic for
storage or recomputation: primal values needed by local derivatives must be
available during the reverse sweep.

### Complexity statement with boundaries

For a straight-line scalar program of \\(L\\) elementary operations whose local
derivatives have bounded constant cost, one reverse sweep computes the full
input gradient in \\(\\mathcal{O}(L)\\) arithmetic, up to a method-dependent constant. This is
not a constant-memory theorem. Storing all intermediates uses \\(\\mathcal{O}(L)\\) memory;
checkpointing stores selected states and recomputes others. Dynamic control
flow, sparse data structures, and expensive primitives change the accounting.

## A worked reverse sweep

Evaluate the example at \\((x,y)=(0,3)\\). The primal values are

\\(v_3=0\\), \\(v_4=0\\), \\(v_5=0\\), \\(f=0\\).

The first reverse update gives \\(\\bar{v_5}=2v_5=0\\), so every input adjoint is zero.
Thus the gradient is \\((0,0)\\). This is correct even though the inner function
\\(xy+\\sin x\\) has gradient \\((4,0)\\) there: squaring a zero inner value makes the
outer derivative zero.

At \\((x,y)=(1,2)\\), let \\(s=2+\\sin 1\\). Reverse accumulation gives

\\(\\partial f/\\partial x=2s(2+\\cos 1)\\),

\\(\\partial f/\\partial y=2s\\).

Computing both through one reverse sweep illustrates the many-input,
one-output advantage. A numerical audit should also compare
\\(\\nabla f^{\\mathsf T} d\\) with a directional change for several \\(d\\), not merely print the
gradient components.

## Branches, loops, and nonsmooth points

AD differentiates the branch that executes. For

\\(f(x)=\\lvert x\\rvert\\), implemented as \`x>=0 ? x : -x\`,

the returned derivative is one on the positive branch and negative one on the
negative branch. At zero the mathematical derivative does not exist, yet an
implementation may return one because the comparison chose that branch. That
number is a branch derivative, not a proof of differentiability.

A loop with data-dependent iteration count creates a piecewise computational
map. Differentiating through the executed iterations answers “how does this
finite trace change while the trace remains the same?” It may not equal the
derivative of the converged mathematical solution, particularly near a stopping
boundary. One can instead differentiate the defining optimality or residual
equations when their hypotheses hold.

Operations such as sorting, indexing by an argmax, clipping, and early exit are
also nonsmooth or discontinuous at boundaries. A custom derivative rule must be
mathematically justified and tested; it is not made correct by registering it
with an AD system.

## Implicit differentiation

Suppose \\(F(x,p)=0\\), where \\(x \\in \\mathbb{R}^{n}\\) is determined by parameter \\(p \\in \\mathbb{R}^{r}\\).

**Theorem (local implicit derivative).** If \\(F\\) is continuously differentiable
near \\((x_0,p_0)\\), \\(F(x_0,p_0)=0\\), and the square Jacobian \\(F_x(x_0,p_0)\\) is
nonsingular, then locally there is a differentiable solution \\(x(p)\\) and

\\(F_x x_p + F_p=0\\), hence \\(x_p=-F_x^{-1}F_p\\).

The equation is a linear solve, not an instruction to form an inverse. If
\\(F_x\\) is singular or badly conditioned, the solution map may fail to be unique
or its derivative may be highly sensitive.

### Parameter-dependent linear system

For

\\(A(p)x(p)=b(p)\\),

differentiation in one parameter direction gives

\\(A x'=b'-A'x\\).

Reuse a stable factorization or iterative solve for \\(A\\). The derivative residual
must be checked just as in a primal solve.

**Worked example.** Let

\\(A(p)=\\begin{bmatrix}p & 1 \\\\ 0 & 2\\end{bmatrix}\\), \\(b=(3,2)^{\\mathsf T}\\), with \\(p>0\\).

The solution is \\(x_2=1\\), \\(x_1=2/p\\). At \\(p=2\\), \\(x=(1,1)\\). Since
\\(A'=\\begin{bmatrix}1 & 0 \\\\ 0 & 0\\end{bmatrix}\\) and \\(b'=0\\), the derivative equation is

\\(A x'=(-1,0)^{\\mathsf T}\\).

It gives \\(x_2'=0\\), \\(x_1'=-1/2\\), matching the analytic derivative of \\(2/p\\) at
two. Solving the primal system to low accuracy and then treating its derivative
as exact would contaminate the right-hand side \\(-A'x\\).

## Adjoint differentiation through a solve

Suppose the final scalar quantity is \\(\\phi(x(p),p)\\). Forming every column of
\\(x_p\\) is expensive when \\(p\\) has many components. Define the adjoint \\(\\lambda\\) by

\\(A^{\\mathsf T} \\lambda = \\nabla_x \\phi\\).

Then

\\(d \\phi/dp = \\partial \\phi/\\partial p + \\lambda^{\\mathsf T}(b_p-A_p x)\\)

componentwise in the parameters. One transpose solve replaces one primal
sensitivity solve per parameter.

For the worked system, let \\(\\phi=x_1+x_2\\). At \\(p=2\\), solve

\\(A^{\\mathsf T} \\lambda=(1,1)^{\\mathsf T}\\).

This gives \\(\\lambda=(1/2,1/4)^{\\mathsf T}\\). Because \\(\\phi\\) has no explicit \\(p\\) dependence,

\\(\\phi'=-\\lambda^{\\mathsf T} A'x=-1/2\\),

the same result as summing the components of \\(x'\\).

The adjoint formula inherits the primal model, solve accuracy, and
conditioning. If the primal equation has multiple solutions, choosing one
without a differentiable selection rule makes the derivative ambiguous.

## Linearized optimization systems

At a smooth unconstrained stationary point, \\(\\nabla_x f(x,p)=0\\). Implicit
differentiation uses the Hessian as \\(F_x\\). If the Hessian is nonsingular, local
sensitivity solves

\\(\\nabla^{2}_{xx} f x_p = -\\nabla^{2}_{xp} f\\).

For constrained problems, differentiating the KKT equations produces a saddle
point system. This requires a stable active set, a constraint qualification,
and an appropriate second-order nonsingularity condition. At an active-set
change, the solution map can be only piecewise differentiable.

“Differentiate through the optimizer” is therefore a theorem-backed operation
only after existence, local uniqueness, and regularity are checked. Unrolling a
fixed number of iterations differentiates a different finite algorithm.

## Second derivatives without full Hessians

Newton–Krylov methods often need \\(H v\\) rather than the full Hessian. A
forward-over-reverse construction differentiates the reverse gradient in
direction \\(v\\); reverse-over-forward is another option. Both exploit AD
composition.

For scalar \\(f\\), the directional identity

\\(d/dt \\nabla f(x+tv)|_{t=0}=H(x)v\\)

defines the target. Symmetry of a smooth exact Hessian gives an audit:
\\(u^{\\mathsf T} Hv\\) should agree with \\(v^{\\mathsf T} Hu\\) within justified numerical error. Agreement
does not prove the objective is twice differentiable, but disagreement exposes
an implementation or tolerance problem.

## Derivative verification

For direction \\(d\\), compare the AD directional derivative \\(g^{\\mathsf T} d\\) with

\\([f(x+h d)-f(x)]/h\\).

As \\(h\\) decreases, truncation error initially shrinks while cancellation and
roundoff eventually grow. Expect a range of agreement, not indefinite
improvement. A centered difference has \\(\\mathcal{O}(h^{2})\\) truncation under sufficient
smoothness but costs two evaluations.

Complex-step checking can avoid subtraction for programs that extend
analytically to complex inputs:

\\(\\partial f/\\partial x_j \\approx Im f(x+i h e_j)/h\\).

It fails for nonanalytic operations, real-only branches, absolute values, and
code that discards imaginary parts. It is a specialized audit, not a universal
replacement.

Check multiple random but reproducible directions, coordinate extremes,
branches, and scaling regimes. Directional agreement tests the whole gradient
at lower cost than one finite difference per coordinate.

## Failure diagnostics

- Overwriting rather than accumulating reverse adjoints at a reused node.
- Calling an executed branch derivative the derivative at a kink.
- Differentiating an iteration cap and claiming the derivative of the exact
  fixed point.
- Forming \\(A^{-1}\\) explicitly in an implicit derivative.
- Ignoring primal and adjoint solve residuals.
- Comparing derivatives only at one comfortable scale or direction.
- Treating a custom primitive's hand-written VJP as trusted without an
  independent JVP/finite-difference identity.
- Assuming reverse mode is cheap in memory because it is cheap in arithmetic.

## Practice with full solutions

**1. JVP.** For \\(F(x,y)=(xy, x^{2}+y)\\), compute \\(J_F(x,y)(a,b)\\) without writing
the Jacobian first.

**Solution.** Differentiate each computational expression in direction
\\((a,b)\\). The product tangent is \\(ay+xb\\). The second component tangent is
\\(2xa+b\\). Therefore the JVP is \\((ay+xb,2xa+b)\\). Writing the Jacobian afterward
confirms it: \\(\\begin{bmatrix}y & x \\\\ 2x & 1\\end{bmatrix}(a,b)^{\\mathsf T}\\).

**2. VJP.** For the same \\(F\\), compute the row product \\((r,s) J_F\\) as input adjoints. This online prompt correction leaves the retained draft PDF unchanged.

**Solution.** Seed output adjoints \\(r\\) for \\(xy\\) and \\(s\\) for \\(x^{2}+y\\). The input
\\(x\\) receives \\(ry\\) from the product and \\(2sx\\) from the square; \\(y\\) receives
\\(rx\\) from the product and \\(s\\) from the linear term. The VJP is
\\((ry+2sx,rx+s)\\).

**3. Implicit scalar derivative.** A positive solution satisfies
\\(x^{2}+p x-1=0\\). Find \\(dx/dp\\) where the implicit theorem applies.

**Solution.** Let \\(F=x^{2}+px-1\\). Then \\(F_x=2x+p\\) and \\(F_p=x\\). If
\\(2x+p\\ne 0\\), the theorem gives
\\(dx/dp=-x/(2x+p)\\). The denominator is precisely the local regularity and
conditioning scale. At a multiple root it vanishes and this derivative formula
is not justified.

**4. Branch audit.** A program returns \\(\\max(x,0)^{2}\\). What derivative should be
expected at negative, positive, and zero inputs?

**Solution.** For \\(x<0\\), the program is locally constant zero, so the derivative
is zero. For \\(x>0\\), it is \\(x^{2}\\), so the derivative is \\(2x\\). At zero, the
mathematical function is actually differentiable with derivative zero even
though \\(\\max\\) alone is nonsmooth: both one-sided quotients for the squared
function tend to zero. An AD branch rule may still need care at the comparison,
but zero is the correct derivative of the composite. This example shows that a
nonsmooth primitive can occur inside a smooth composite.

## Bounded project/investigation (Chapter 7): differentiate a solve two ways

Implement or hand-audit a small parameterized nonsingular system \\(A(p)x=b(p)\\)
with at least three parameters and scalar output \\(\\phi=c^{\\mathsf T} x\\). Compute the
gradient first with one tangent solve per parameter and then with one adjoint
solve. Record primal residual, every tangent residual, adjoint residual, and
directional finite-difference comparisons over a geometric sequence of \\(h\\).

**Solution blueprint.** Derive \\(A x_j'=b_j'-A_j'x\\) for each parameter. Solve
\\(A^{\\mathsf T} \\lambda=c\\), then form
\\(\\phi_j'=\\lambda^{\\mathsf T}(b_j'-A_j'x)\\). The two gradients should agree to the scale
predicted by solve residuals and conditioning. A finite-difference error curve
should fall and then flatten or rise. Perturb \\(A\\) toward singularity and explain
why all methods become sensitive even if their algebra remains correct. The
project is complete only when the report separates derivative-formula error,
linear-solve error, finite-difference truncation, and input perturbation.

## Connections and summary

Backward, the gradient/Newton chapter supplies the derivative consumers and
globalization safeguards. Forward, the KKT chapter turns regular constrained
systems into implicit derivatives, while certificate chapters require primal
and adjoint residuals rather than trusting a tape.

Use forward mode for JVPs, reverse mode for VJPs, and implicit or adjoint solves
when a converged state is defined by equations. In every case, differentiate the
declared target, state regularity, audit branches, and carry numerical solve
error into the final derivative claim.
`;export{e as default};