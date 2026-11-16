var e=`---
parent_id: book-optimization-backprop-from-scratch
chapter_id: reverse-mode-adjoint-backprop
title: "Reverse-Mode Automatic Differentiation and Backpropagation"
level: undergraduate
estimated_minutes: 175
license: CC BY-SA 4.0
---

# Reverse-Mode Automatic Differentiation and Backpropagation

## Purpose and prerequisites

This chapter assumes differentials, Jacobian products, and batch matrix rules. It derives reverse-mode automatic differentiation as dynamic programming on a directed acyclic computation graph. “Backpropagation” is reverse mode applied to a network loss; it is not a separate chain rule.

Baydin, Pearlmutter, Radul, and Siskind survey this algorithmic relationship; Griewank and Walther give the technical reverse-accumulation treatment. These are scope references rather than single-inventor priority claims; see the bibliography.

By the end, you should be able to prove branch accumulation, trace a dense network backward, specify a scalar reference engine, design gradient checks, and distinguish a correct program derivative from evidence that the intended model is correct.

## Programs as directed acyclic graphs

A straight-line numerical program creates values $v_{1},\\ldots ,v_{N}$. Each noninput value is

$v_{k}=\\phi _{k}(v_{p_{1}},…,v_{p_{r}})$,

where every parent index is smaller than $k$. Inputs and parameters are source nodes; a scalar loss $L$ is the sink.

The forward pass evaluates nodes in topological order and saves values required by local derivative rules. The reverse pass associates each node with an **adjoint**

$\\bar{v}_{k}=\\partial L/\\partial v_{k}$

for scalar nodes, or the matching array cotangent for array nodes.

If a child $v_{j}$ depends on $v_{k}$, the chain rule contributes

$\\bar{v}_{k} += (\\partial v_{j}/\\partial v_{k})^{\\top} \\bar{v}_{j}$.

For scalars the transpose is invisible. For arrays it is the local VJP.

## Why branches must accumulate

Suppose

$q=a^{2}+a$, $L=q^{3}$.

The value $a$ reaches $q$ along two edges: through the square and through the identity. First

$\\overline{q}=3q^{2}$.

Then the square path contributes $2a \\overline{q}$ to $\\overline{a}$, while the identity path contributes $\\overline{q}$. Therefore

$\\overline{a}=(2a+1)3q^{2}$.

Overwriting instead of adding loses a path. In graph language, the derivative of the loss with respect to a node is the sum over all immediate children:

$\\bar{v}_{k}=\\sum_{j\\colon k\\to j} (D_{k} \\phi _{j})^{\\top} \\bar{v}_{j}$.

### Path-sum interpretation

For a scalar acyclic graph, repeated chain rules express $\\partial L/\\partial a$ as a sum over every directed path from $a$ to $L$ of the product of local derivatives along that path. Reverse accumulation computes this sum without enumerating paths. Shared subgraphs can create exponentially many paths, while dynamic programming visits each edge once.

## Correctness invariant

Process nodes in reverse topological order. Immediately before node $v_{k}$ is processed, all its descendants have already propagated their contributions, so $\\bar{v}_{k}$ equals the total derivative of $L$ with respect to $v_{k}$ for the evaluated graph.

**Proof by reverse induction.** At the sink, seed $\\overline{L}=1$, which is $\\partial L/\\partial L$. Assume every node later than $k$ in reverse processing has a correct adjoint when processed. Every path from $v_{k}$ to $L$ begins with one child $v_{j}$. When child $j$ is processed, its correct adjoint is multiplied by the local derivative with respect to $v_{k}$ and added. By the time $k$ is reached, all children have been processed and every first-edge contribution is present exactly once. Their sum is the multivariable chain rule for $\\partial L/\\partial v_{k}$. The induction reaches all ancestors.

The proof needs an acyclic graph and a reverse topological schedule. A recursive program with loops can be differentiated after its executed iterations are unrolled, but memory, mutation, and stopping behavior require additional semantics.

## Worked scalar graph

Let input $x=2$, parameters $w=0.5$, $b=0$, target $y=0$, and

$u=wx+b$, $z=\\tanh\\left(u\\right)$, $L=(\\frac{1}{2})(z-y)^{2}$.

Forward values are

$u=1$, $z\\approx 0.761594$, $L\\approx 0.290013$.

Reverse:

$\\overline{L}=1$,

$\\overline{z}=z-y\\approx 0.761594$,

$\\overline{u}=\\overline{z}(1-z^{2})\\approx 0.31985$,

$\\overline{w}=\\overline{u} x\\approx 0.63970$,

$\\overline{b}=\\overline{u}\\approx 0.31985$,

$\\overline{x}=\\overline{u} w\\approx 0.15993$.

These are derivatives at one input and parameter state. A negative gradient step in $w,b$ decreases this one smooth loss for sufficiently small step size; it says nothing yet about a data population.

## A scalar reference engine

A minimal educational node stores a value, accumulated adjoint, parent edges, and a local backward closure:

\`\`\`text
Node:
    value: finite real
    adjoint: real initially 0
    parents: list of Nodes
    pullback: procedure using saved forward values

add(a,b):
    out.value = a.value + b.value
    out.parents = [a,b]
    out.pullback =:
        a.adjoint += out.adjoint
        b.adjoint += out.adjoint
    return out

multiply(a,b):
    out.value = a.value * b.value
    out.parents = [a,b]
    out.pullback =:
        a.adjoint += b.value * out.adjoint
        b.adjoint += a.value * out.adjoint
    return out

backward(loss):
    order = topological_ancestors(loss)
    for node in order:
        node.adjoint = 0
    loss.adjoint = 1
    for node in reverse(order):
        node.pullback()
\`\`\`

The engine should reject nonfinite forward values, detect cycles or prohibit their construction, visit shared ancestors once, and reset every reachable adjoint before a new backward pass. Deliberate gradient accumulation must preserve earlier **leaf** gradients while resetting intermediate adjoints before each traversal, or equivalently combine loss seeds and traverse once. Reusing intermediate adjoints does not merely add another derivative: it propagates old downstream contributions again and overcounts deeper graphs.

### Topological traversal

A depth-first traversal marks nodes temporarily while exploring and permanently when finished. Encountering a temporary node exposes a cycle. Append a node only after all parents have been visited. This produces parent-before-child forward order; reverse it for pullbacks.

Object identity matters. Two distinct nodes with equal numerical values are not the same graph node. Deduplicating by value would merge unrelated computations.

## Dense network backpropagation

Take a row batch $X\\in \\mathbb{R}^{n\\times d}$ and one hidden layer:

$Z=XW^{\\top}+1b^{\\top}$,

$H=\\sigma (Z)$,

$o=Hv+c1\\in \\mathbb{R}^n$,

$L=(1/(2n))\\lVert o-y\\rVert^{2}$.

Shapes are

$W\\colon m\\times d$, $b\\colon m$, $Z,H\\colon n\\times m$, $v\\colon m$, $c\\colon scalar$.

Define the output cotangent

$g=(o-y)/n\\in \\mathbb{R}^n$.

Then reverse rules give

$\\nabla _{v} L=H^{\\top}g$,

$\\partial L/\\partial c=1^{\\top}g$,

$G_{H}=gv^{\\top}$,

$\\Delta =G_{H}\\odot \\sigma '(Z)$,

$\\nabla _{W} L=\\Delta ^{\\top}X$,

$\\nabla _{b} L=\\Delta ^{\\top}1$,

$\\nabla _{X} L=\\Delta W$.

### Index derivation for one weight

For hidden unit $k$ and input feature $j$,

$\\partial L/\\partial W_{kj}=\\sum_{i} (\\partial L/\\partial o_{i})(\\partial o_{i}/\\partial H_{ik})(\\partial H_{ik}/\\partial Z_{ik})(\\partial Z_{ik}/\\partial W_{kj})$.

The four factors are $g_{i}$, $v_{k}$, $\\sigma '(Z_{ik})$, and $X_{ij}$. Therefore

$\\partial L/\\partial W_{kj}=\\sum_{i} \\Delta _{ik}X_{ij}$,

which is entry $(k,j)$ of $\\Delta ^{\\top}X$. The matrix formula is a compressed index sum, not magic.

## Forward mode, reverse mode, and cost

Forward mode attaches a tangent $\\dot{v}_{k}$ to each value and propagates JVPs from one chosen input direction. One pass gives the directional derivative of every output with respect to that direction.

Reverse mode attaches cotangents and propagates from one chosen output weighting. One pass gives the derivative of that scalar output combination with respect to every input ancestor.

If a program costs $C$ elementary operations, either mode often costs a modest multiple of $C$ for one product, though constants and memory differ. To recover a dense $m\\times d$ Jacobian by forward mode can require $d$ seeded passes; reverse mode can require $m$. Sparse structure, batching, checkpointing, and primitive rules change the practical choice.

Reverse mode saves forward intermediates needed later, so memory can be proportional to the executed graph. **Checkpointing** stores selected states and recomputes missing segments during reverse, trading extra computation for memory. Recomputations must be deterministic or must replay the same random choices.

## Mutation, randomness, and control flow

An in-place update can overwrite a value needed by a pullback. Either save the old value, make the operation's backward rule independent of it, or use immutable functional semantics. “The array has the right current value” is not sufficient if the derivative needs its previous state.

For random operations, distinguish:

- a fixed realized draw treated as an input to a deterministic graph;
- a reparameterized random value, such as $z=\\mu +\\sigma \\varepsilon$ with stored $\\varepsilon$;
- a discrete draw whose pathwise derivative is unavailable;
- differentiation of an expectation, which needs conditions justifying interchange or a different estimator.

An \`if\` statement differentiates the executed branch locally. Near a branch boundary, a small perturbation may execute another graph. A loop stopped by a tolerance similarly has a piecewise-constant iteration count with discontinuities. The program derivative is conditional on the trace unless the control decision is modeled explicitly.

## Stop-gradient and graph boundaries

A **stop-gradient** operation returns the same numerical value while declaring a zero pullback. If $s=\\operatorname{stop}(x)$ and $L=xs$, then at $x=3$ the forward value is $L=9$, but the program derivative is $dL/dx=s=3$, not 6. Treating $s$ as an ordinary alias silently differentiates a different program.

Stop-gradient is useful for targets, alternating updates, and estimators whose derivation intentionally holds a quantity fixed. It must be visible in the mathematical specification. “The values match” cannot detect the boundary; a graph or derivative contract can.

### Worked diamond with an inactive edge

Let $u=x^{2}$, $v=\\operatorname{stop}(x)$, and $L=uv$. The executed arithmetic equals $x^{3}$, but the declared graph derivative is $2xv=2x^{2}$; the edge from $v$ to $x$ carries no cotangent. At $x=2$, reverse mode gives 8 rather than the ordinary derivative 12 of the algebraically simplified expression. Algebraic rewrites are derivative-preserving only when they preserve graph semantics.

## Custom primitives and pullback tests

A custom primitive needs a forward domain, saved-value policy, and VJP for every differentiable input. Consider $solve(A,b)=x$ with invertible $A$, so $Ax=b$. Differentiating gives

$A dx+dA x=db$, hence $dx=A^{-1}(db-dA x)$.

For arriving cotangent $g_{x}$, solve $A^{\\top}q=g_{x}$. Then

$dL=q^{\\top}db-q^{\\top}dA x$,

so $g_{b}=q$ and $G_{A}=-qx^{\\top}$. The pullback should solve a transposed system; explicitly forming $A^{-1}$ is unnecessary and usually less stable.

Test a primitive at three levels: verify its forward residual ($\\lVert Ax-b\\rVert$ here), verify the adjoint identity against a JVP, and compare scalarized directional derivatives at well-conditioned points. A passing finite difference cannot repair an inaccurate forward solve; both residual and derivative tolerances belong in the receipt.

## Checkpointing as part of reproducibility

For a chain of $N$ operations, storing every activation uses $O(N)$ value memory and minimal recomputation. Storing only endpoints may use little memory but require extensive replay. A checkpoint schedule chooses intermediate states to retain. Replay must restore random draws, data order, mutable state, and numerical mode; otherwise the reverse pass differentiates a different execution.

An audit record therefore includes checkpoint and random-state policies when either can alter arithmetic. Mathematically equivalent recomputation can still differ by floating rounding, so tolerances must reflect the actual schedule.

## Gradient verification

For parameter vector $\\theta$ and normalized direction $v$, compare the analytic directional derivative

$g_{A}=\\nabla L(\\theta )^{\\top}v$

with centered differences

$g_{N}(h)=[L(\\theta +hv)-L(\\theta -hv)]/(2h)$.

For a sufficiently smooth loss, truncation error is $O(h^{2})$. Floating subtraction error grows as $h$ becomes tiny. Test a geometric sequence such as $10^{-1},…,10^{-7}$ and look for a region where error falls near quadratically before flattening or rising.

Use coordinate directions and several deterministic random directions. A single direction can be orthogonal to an incorrect component. Check multiple parameter points, avoid kinks unless testing their conventions, and compare forward and reverse products through

$u^{\\top}(Jv)=(u^{\\top}J)v$.

### Relative comparison

A stable scale is

$err=\\lvert g_{A}-g_{N}\\rvert/\\max\\left(1,\\lvert g_{A}\\rvert,\\lvert g_{N}\\rvert\\right)$.

Pure relative error is misleading when both derivatives are near zero. A passing tolerance depends on arithmetic, depth, and conditioning; record the entire step-size curve rather than one chosen number.

### Complex-step boundary

For an analytic real program extended consistently to complex inputs,

$f'(x)\\approx Im f(x+ih)/h$

avoids subtractive cancellation. It is not valid through absolute values, comparisons, conjugation conventions, clipping, or code that discards imaginary components. It is a specialized test, not a universal replacement.

## Correct derivative, wrong objective

Automatic differentiation verifies neither:

- that labels and features implement the learning contract;
- that the loss reflects the decision cost;
- that train/test information is separated;
- that units and reductions are correct;
- that a stochastic estimator targets the intended expectation;
- that a low empirical risk generalizes;
- that an association is causal.

It differentiates the executed arithmetic. A beautifully correct gradient of a leaked objective remains a leaked gradient.

## Failure modes and diagnostics

- **Overwrite instead of accumulate:** test a diamond-shaped graph.
- **Stale adjoints:** run backward twice with an explicit reset test.
- **Wrong broadcast reduction:** use unequal dimensions and hand-computed row sums.
- **Wrong saved activation:** test at asymmetric nonzero values.
- **Mean/sum mismatch:** repeat identical examples and check whether gradient scale changes as declared.
- **Mutation:** compare an immutable reference implementation.
- **Kink crossing:** run one-sided changes and log active branches.
- **Nonfinite forward value:** fail at the first operation, not several layers later.
- **Silent graph disconnection:** verify every intended parameter has a path to loss; a zero gradient can also be mathematically legitimate.

## A solve primitive: tangent and adjoint records

The derivative of a solved state is distinct from the derivative of a fixed finite iteration trace. Suppose $A(p)x(p)=b(p)$, with continuously differentiable data and nonsingular $A(p)$ near the parameter value under study. Differentiating in a direction gives
$$
A\\dot x=\\dot b-\\dot A x.
$$
For a scalar output $\\phi(x,p)$, solve $A^T\\lambda=\\nabla_x\\phi$. Substitution yields
$$
\\dot\\phi=\\partial_p\\phi[\\dot p]+\\lambda^T(\\dot b-\\dot A x).
$$
This is a linear solve and a transpose solve, rather than a request to form an inverse. The transpose equation is the pullback of the solve primitive. It requires the same declared solution branch and primal state used by the forward computation. Chapter 19 develops general implicit differentiation and its regularity hypotheses.

**Worked example (a preserved parameter-dependent system).** Let
$$
A(p)=\\begin{pmatrix}p&1\\\\0&2\\end{pmatrix},\\qquad b=(3,2)^T,\\qquad p>0.
$$
The primal equations give $x_2=1$ and $x_1=2/p$. At $p=2$, $x=(1,1)^T$. With unit parameter direction, $\\dot A=\\left(\\begin{smallmatrix}1&0\\\\0&0\\end{smallmatrix}\\right)$ and $\\dot b=0$, so $A\\dot x=(-1,0)^T$. Back-substitution gives $\\dot x=(-1/2,0)^T$.

For $\\phi=x_1+x_2$, the adjoint equations at $p=2$ are $2\\lambda_1=1$ and $\\lambda_1+2\\lambda_2=1$, giving $\\lambda=(1/2,1/4)^T$. Hence $\\dot\\phi=-\\lambda^T\\dot A x=-1/2$, agreeing with the tangent calculation. The coefficient $1/p$ exposes the approach to singularity as $p$ tends to zero; exact derivative identities do not supply uniform conditioning there.

**Worked example (the shared square revisited).** For $f=(xy+\\sin x)^2$, seed $\\bar f=1$. Then $\\bar s=2s$, $\\bar u=\\bar v=2s$, so $\\bar x=2s(y+\\cos x)$ and $\\bar y=2sx$. At $(0,3)$ both vanish; at $(1,2)$ they are $2(2+\\sin1)(2+\\cos1)$ and $2(2+\\sin1)$. Both uses of $x$ must contribute to its adjoint. Overwriting one contribution loses either the product path or the sine path.

**Preserved practice (JVP and VJP).** For $F(x,y)=(xy,x^2+y)$, derive $DF(x,y)[a,b]$ and its transpose action on output cotangent $(r,s)$.

<details>
<summary>Hint 1</summary>

Differentiate each primitive expression before collecting terms.

</details>
<details>
<summary>Hint 2</summary>

Use $(r,s)\\cdot DF[a,b]$ to identify the coefficient of each input direction.

</details>
<details>
<summary>Full solution</summary>

The JVP is $(ay+xb,2xa+b)$. Its scalar pairing with $(r,s)$ is $a(ry+2sx)+b(rx+s)$. Thus the input cotangent is $(ry+2sx,rx+s)$; these are the contributions accumulated by reverse mode.

</details>

**Preserved practice (implicit root).** A positive root satisfies $x^2+px-1=0$. Determine its derivative and state its regularity condition.

<details>
<summary>Hint 1</summary>

Differentiate the defining equation including both occurrences of the parameter-dependent root.

</details>
<details>
<summary>Hint 2</summary>

Collect all terms containing $x'$ before dividing.

</details>
<details>
<summary>Full solution</summary>

Differentiation gives $(2x+p)x'+x=0$, so $x'=-x/(2x+p)$ whenever $2x+p\\ne0$. The implicit function theorem applies because the defining polynomial is continuously differentiable and its derivative with respect to $x$ is nonzero. A zero denominator would require a separate analysis rather than division by zero.

</details>

**Preserved practice (a smooth composite of a nonsmooth primitive).** Is $g(x)=\\max(x,0)^2$ differentiable at zero?

<details>
<summary>Hint 1</summary>

Evaluate the difference quotient on both sides.

</details>
<details>
<summary>Hint 2</summary>

The square changes the limiting slope of the positive branch.

</details>
<details>
<summary>Full solution</summary>

For $x<0$, $g=0$ and $g'=0$; for $x>0$, $g=x^2$ and $g'=2x$. At zero, $g(h)/h$ equals zero for negative $h$ and $h$ for positive $h$, and both tend to zero. Thus the composite has derivative zero although the inner maximum alone does not. A primitive's nonsmoothness cannot by itself settle differentiability of the complete expression.

</details>

**Investigation (differentiate a solve two ways).** For a small nonsingular matrix with three parameters and output $c^Tx$, compare one tangent solve per parameter with one adjoint solve. Keep the primal, tangent and adjoint residuals distinct.

<details>
<summary>Hint 1</summary>

Write $A x'_j=b'_j-A'_jx$ for each coordinate direction.

</details>
<details>
<summary>Hint 2</summary>

Pair each right-hand side with the solution of $A^T\\lambda=c$.

</details>
<details>
<summary>Solution and reporting requirements</summary>

The tangent estimate is $c^Tx'_j$; the adjoint expression is $\\lambda^T(b'_j-A'_jx)$. Exact agreement follows by replacing $c$ with $A^T\\lambda$. In floating arithmetic their discrepancy also contains the effects of primal and derivative solve errors. Varying the matrix toward singularity should be interpreted through these residuals and conditioning. A finite-difference comparison introduces an additional truncation and rounding error; it cannot erase the solve error. Report each effect separately and state the local nonsingularity assumption.

</details>

## Exercises

1. For $q=a^{2}+a$ and $L=q^{3}$, evaluate $dL/da$ at $a=2$ by branch accumulation and direct differentiation.
2. Draw the graph for $L=(ab+a)^{2}$ and compute adjoints at $a=2,b=3$.
3. Explain why reverse topological order is necessary. Give a graph where processing a parent too early loses a contribution.
4. Derive all gradients for the one-hidden-layer batch model in the chapter when $\\sigma$ is the identity.
5. If the batch objective changes from mean squared loss to summed squared loss, how do parameter gradients change?
6. A shared parameter appears in two layers. How should its adjoint be handled?
7. A scalar engine deduplicates nodes by numerical value. Give a counterexample.
8. Centered differences at decreasing steps give errors $10^{-2},10^{-4},10^{-6},10^{-5},10^{-3}$. Interpret the pattern.
9. Why might a gradient check fail at $\\operatorname{ReLU}(0)$ even when the engine follows its documented convention?
10. A dropout mask is resampled independently at $\\theta +h$ and $\\theta -h$. Diagnose the gradient-check problem and repair it.
11. Compare the number of seeded passes needed to recover a dense Jacobian for $f\\colon \\mathbb{R}^{1000}\\to \\mathbb{R}^{2}$ by pure forward and reverse modes.
12. List four distinct facts not established by a passing gradient suite.
13. For $s=\\operatorname{stop}(x)$ and $L=xs$, compute the program derivative at $x=3$ and compare it with the derivative of the simplified expression $x^{2}$.
14. In $u=x^{2}$, $v=\\operatorname{stop}(x)$, $L=uv$, compute every nonzero adjoint at $x=2$.
15. Derive the pullback of $x=A^{-1}b$ from $Ax=b$, giving cotangents for both $A$ and $b$ without forming an inverse.
16. For scalar $x=b/a$ with $a$ nonzero, specialize the linear-solve pullback and compare with direct differentiation.
17. Explain why recomputing dropout during checkpoint replay with a fresh mask gives an invalid pullback even if both masks have the same distribution.
18. A parameter has no graph path to the loss. What adjoint should it receive, and what two qualitatively different diagnoses should be considered?
19. Design an adjoint-identity test for a custom map $f\\colon \\mathbb{R}^d \\to \\mathbb{R}^m$ using one tangent $v$ and one cotangent $u$. State the scalar equality and what a failure localizes.
20. Let $u=x^{2}$ and $L=u^{2}$ at $x=1$. After one backward pass, a user reseeds $\\overline{L}=1$ and traverses again without clearing any adjoints. Compute $\\overline{u}$ and $\\overline{x}$ after each pass. Compare the result with the intended accumulation of two copies of $dL/dx$, and state a correct accumulation procedure.

## Full solutions

1. At $a=2$, $q=6$ and $\\overline{q}=3q^{2}=108$. The square branch contributes $2a \\overline{q}=432$; the identity contributes 108; total is 540. Directly, $L=(a^{2}+a)^{3}$, so $L'=3(a^{2}+a)^{2}(2a+1)=3\\cdot 36\\cdot 5=540$.
2. Let $u=ab$, $q=u+a$, $L=q^{2}$. Forward gives $u=6$, $q=8$, $L=64$. Reverse: $\\overline{q}=2q=16$; $\\overline{u}=16$ and the direct addition gives $\\overline{a}+=16$. From multiplication, $\\overline{a}+=b \\overline{u}=48$ and $\\overline{b}+=a \\overline{u}=32$. Thus $\\overline{a}=64$, $\\overline{b}=32$.
3. In the diamond $a\\to u$, $a\\to v$, and $u,v\\to L$, processing $a$ after only $u$ has propagated misses the path through $v$. Reverse topological order guarantees all children of a node have sent contributions before its pullback is used.
4. With identity activation, $\\Delta =G_{H}=gv^{\\top}$. The remaining formulas stay $\\nabla _{v}=H^{\\top}g$, $\\partial L/\\partial c=1^{\\top}g$, $\\nabla _{W}=\\Delta ^{\\top}X$, $\\nabla _{b}=\\Delta ^{\\top}1$, and $\\nabla _{X}=\\Delta W$. Since $H=Z$, no activation values are needed for a derivative.
5. They are multiplied by $n$ because the output cotangent becomes $o-y$ rather than $(o-y)/n$, assuming every other term and penalty convention is unchanged.
6. It is one graph node or one logical parameter receiving contributions from every use. Its adjoint is the sum of all paths. Separate storage can be used only if gradients are explicitly reduced back to the shared parameter before the update.
7. Let independent inputs $a=2$ and $b=2$ feed $L=a^{2}+3b$. They have equal values but derivatives 4 and 3. Merging them by value produces the wrong graph and cannot represent separate perturbations.
8. The first three points show the expected decrease, plausibly second order; then floating error or other numerical noise dominates. The middle minimum near $10^{-6}$ is the useful region. A single smallest step would have looked worse and might cause a false failure.
9. The classical derivative is undefined. Centered differences cross two branches and tend toward $\\frac{1}{2}$, while the engine may choose backward derivative 0 or 1. The test must avoid the kink or compare documented one-sided/subgradient behavior.
10. The two evaluations are different random functions, so their difference contains mask noise divided by $2h$. Freeze and reuse the same mask or random stream for both perturbations, treating the draw as a fixed graph input. Testing an expectation requires a separate estimator analysis.
11. Forward mode needs up to 1000 basis tangents; reverse mode needs two output cotangent seeds. If only one scalar combination of the outputs is needed, reverse needs one. Actual performance also depends on sparsity and memory.
12. Examples include correctness of the task definition, absence of leakage, appropriateness of the loss, validity of units, generalization to a population, calibration, robustness to shift, and causal or decision value. The suite tests derivative implementation only for the exercised traces and inputs.
13. The stop node contributes no derivative, so $dL/dx=s=3$. Simplifying values gives $x^{2}$, whose ordinary derivative is $2x=6$. The discrepancy is intentional: stop-gradient changes derivative semantics without changing forward values.
14. Forward values are $u=4$, $v=2$, $L=8$. Seed $\\overline{L}=1$; then $\\overline{u}=v=2$ and $\\overline{v}=u=4$. Through $u=x^{2}$, $\\overline{x}=2x \\overline{u}=8$. The stop node sends zero to $x$, so its received adjoint does not add another contribution.
15. From $A dx+dA x=db$, obtain $dx=A^{-1}(db-dA x)$. Let $q$ solve $A^{\\top}q=g_{x}$. Then $g_{x}^{\\top}dx=q^{\\top}db-q^{\\top}dA x=<q,db>+<-qx^{\\top},dA>_{F}$. Hence $g_{b}=q$ and $G_{A}=-qx^{\\top}$.
16. Here $A=[a]$, $b=[b]$, $x=b/a$, and $q=g_{x}/a$. Therefore $g_{b}=g_{x}/a$ and $g_{a}=-qx=-g_{x}b/a^{2}$, matching direct differentiation of $g_{x}(b/a)$ for a fixed arriving cotangent.
17. The pullback must differentiate the realized forward trace. A fresh mask defines a different function and associates cotangents with activations not used to produce the loss. Equal distribution does not imply equal sample path. Save or deterministically replay the original mask.
18. Mathematically its adjoint is zero. This may be legitimate—an inactive optional branch or parameter intentionally excluded from the objective—or it may reveal accidental detachment, wrong wiring, or unused state. Inspect reachability before interpreting zero as convergence.
19. Compute the JVP $J_{f}(x)v$ and VJP $J_{f}(x)^{\\top}u$, then compare $u^{\\top}[J_{f}(x)v]=[J_{f}(x)^{\\top}u]^{\\top}v$. Failure localizes an inconsistency between the two product implementations or their forward traces, though agreement alone does not prove both correct.
20. One pass gives $\\overline{u}=2u=2$ and $\\overline{x}=2x\\,\\overline{u}=4$. On the second traversal, reseeding $\\overline{L}=1$ adds another 2 to the uncleared $\\overline{u}$, making it 4; propagating that whole value adds 8 to the existing $\\overline{x}$, making 12. Two copies of the true derivative should total only $4+4=8$. Correct accumulation resets all intermediate adjoints before each traversal and adds only the newly computed leaf gradients to an external accumulator, or seeds the sum of the two losses and performs one reverse traversal.

## Project checkpoint

Implement or formally specify the scalar engine, including cycle detection, graph-identity deduplication, adjoint reset, finite checks, and a diamond-graph test. Then hand-trace the tiny dense batch network. Chapter 10 uses these trusted derivatives inside a step-size theorem and separates optimization progress from model evidence.
`;export{e as default};