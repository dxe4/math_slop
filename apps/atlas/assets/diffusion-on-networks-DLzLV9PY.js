var e=`---
id: course-diffusion-on-networks
title: "Diffusion on Networks: Laplacians, Spectra, and Spreading"
level: advanced-undergraduate
estimated_minutes: 170
license: CC BY-SA 4.0
---

# Diffusion on Networks: Laplacians, Spectra, and Spreading

<!-- euler-course-route -->

## Current course route

Use the [course page](/courses/atlas-diffusion-on-networks/) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

Heat spreads through neighboring material, opinions update through contacts, and a random walker moves along edges. These processes share an operator: the graph Laplacian. This course derives network diffusion, solves a three-node example exactly, then distinguishes conservative diffusion from epidemic-like amplification.

## 1. Graph model, assumptions, and units

Let an undirected weighted graph have \\(n\\) vertices and symmetric weights
\\(w_{ij}\\ge 0\\). A zero weight means no direct edge. Treat weights as
dimensionless connection strengths for now. Define weighted degree

\\[
d_i=\\sum_j w_{ij},
\\]

adjacency matrix $W=(w_{ij})$, degree matrix
$D=\\operatorname{diag}(d_i)$, and combinatorial Laplacian

$L=D-W$.

Let \\(x_i(t)\\) be an amount or concentration at node \\(i\\). If \\(x\\) is
measured in kilograms and time in seconds, choose diffusion rate \\(\\kappa\\) in
\\(\\mathrm{s}^{-1}\\). Assume flow along edge \\((i,j)\\) is proportional to the
difference \\(x_i-x_j\\), with no capacity limits or delays. Then

\\[
\\frac{dx_i}{dt}=\\kappa\\sum_j w_{ij}(x_j-x_i).
\\]

In vector form,

\\[
\\frac{dx}{dt}=-\\kappa Lx.
\\]

If edge weights carry physical conductance units, move those units into $W$ and adjust $\\kappa$; only the product must give amount per time. State the convention rather than assuming every network weight is comparable.

## 2. Conservation and smoothing

Every row sum of \\(L\\) is zero, so \\(L\\mathbf 1=0\\). Symmetry also gives
\\(\\mathbf 1^{\\mathsf T}L=0\\). Therefore

\\[
\\frac{d}{dt}\\left(\\mathbf 1^{\\mathsf T}x\\right)
=-\\kappa\\mathbf 1^{\\mathsf T}Lx=0.
\\]

Total amount is conserved. The mean
\\(\\bar x=n^{-1}\\sum_i x_i\\) remains constant.

The quadratic form is

\\[
x^{\\mathsf T}Lx
=\\frac12\\sum_{i,j}w_{ij}(x_i-x_j)^2\\ge0.
\\]

Thus \\(L\\) is positive semidefinite. For disagreement energy
\\(E=\\frac12\\lVert x-\\bar{x}\\mathbf 1\\rVert^2\\),

\\[
\\frac{dE}{dt}=-\\kappa x^{\\mathsf T}Lx\\le0.
\\]

Diffusion reduces differences but does not create or destroy the conserved amount. Equality can persist between disconnected components because each component has its own constant mode.

## 3. The spectrum separates time scales

Because $L$ is real symmetric, it has orthonormal eigenvectors $v_j$ with real eigenvalues

\\[
0=\\lambda_1\\le\\lambda_2\\le\\cdots\\le\\lambda_n.
\\]

Expand $x(0)=\\sum_j a_j v_j$. The exact solution is

\\[
x(t)=\\sum_j a_j\\exp(-\\kappa\\lambda_jt)v_j.
\\]

The zero modes persist; positive modes decay. The number of zero eigenvalues
equals the number of connected components. For a connected graph,
\\(\\lambda_2>0\\); it is the algebraic connectivity. The slowest nonconstant
component decays like \\(\\exp(-\\kappa\\lambda_2t)\\), so a small \\(\\lambda_2\\)
signals a bottleneck and slow global mixing.

This statement concerns asymptotic linear diffusion. It does not say one eigenvalue summarizes every nonlinear or directed process on the graph.

## 4. Worked example: a three-node path

Take nodes \`1--2--3\` with unit edge weights. Then

\\[
L=\\begin{pmatrix}
1&-1&0\\\\
-1&2&-1\\\\
0&-1&1
\\end{pmatrix}.
\\]

Its eigenvalues are $0,1,3$, with corresponding orthogonal directions proportional to

$(1,1,1)$, $(1,0,-1)$, and $(1,-2,1)$.

Start with one unit at node 1 and none elsewhere: $x(0)=(1,0,0)^T$. Resolving into modes gives

\\[
x_1(t)=\\frac13+\\frac12e^{-\\kappa t}+\\frac16e^{-3\\kappa t},
\\]

\\[
x_2(t)=\\frac13-\\frac13e^{-3\\kappa t},
\\]

\\[
x_3(t)=\\frac13-\\frac12e^{-\\kappa t}+\\frac16e^{-3\\kappa t}.
\\]

At \\(t=0\\) these yield \\((1,0,0)\\). Their sum is always one. As \\(t\\) tends
to infinity, all approach \\(1/3\\). If
$\\kappa=0.5\\ \\mathrm{min}^{-1}$, the slow mode has e-folding time
$1/\\kappa=2\\ \\mathrm{min}$, while the fast mode has e-folding time
$1/(3\\kappa)=2/3\\ \\mathrm{min}$.

## 5. Continuous diffusion versus a random walk

A discrete-time random walker at node $i$ may choose neighbor $j$ with probability

\\[
P_{ij}=\\frac{w_{ij}}{d_i}.
\\]

\\(P=D^{-1}W\\) is row-stochastic when every degree is positive. If \\(p_k\\) is
a column distribution, its update is

\\[
p_{k+1}=P^{\\mathsf T}p_k.
\\]

Unlike conservative amount diffusion $-Lx$, this walk generally approaches a degree-weighted stationary distribution on a connected non-bipartite undirected graph:

\\[
\\pi_i=\\frac{d_i}{\\sum_j d_j}.
\\]

The distinction comes from normalization by departure degree. A bipartite walk can alternate forever; adding a probability of staying put makes it aperiodic. Directed graphs need separate treatment because symmetry, orthogonal eigenvectors, and detailed balance can fail.

## 6. Normalized Laplacians answer a different question

Two common normalized operators are

\\[
L_{\\mathrm{rw}}=I-D^{-1}W,\\qquad
L_{\\mathrm{sym}}=I-D^{-1/2}WD^{-1/2}.
\\]

They account for degree when comparing nodes. \\(L_{\\mathrm{sym}}\\) is symmetric
and similar to \\(L_{\\mathrm{rw}}\\) when degrees are positive, so they share
eigenvalues. Use combinatorial \\(L\\) for equal-node capacity diffusion under the
stated flux law; use a normalized form when transition fractions or
degree-relative comparisons match the mechanism. Choosing an operator because
it is fashionable rather than mechanistically justified changes the model.

## 7. A different process: network epidemic amplification

Let $q_i(t)$ approximate the probability or fraction infectious at node $i$ in a mean-field susceptible-infectious-susceptible model. One common closure is

\\[
\\frac{dq_i}{dt}
=\\beta(1-q_i)\\sum_j W_{ij}q_j-\\gamma q_i,
\\]

where $\\beta$ and $\\gamma$ have units inverse time if $W$ is dimensionless. Near the disease-free state, terms quadratic in $q$ are negligible:

\\[
\\frac{dq}{dt}\\approx(\\beta W-\\gamma I)q.
\\]

Early growth is possible in this linearization when

$\\beta \\rho(W)>\\gamma$,

where $\\rho(W)$ is the largest eigenvalue. Equivalently $(\\beta/\\gamma)\\rho(W)>1$.

This is not conservative diffusion: infection can reproduce and removal destroys infectious state. It is also an approximation. Node states are correlated in an exact stochastic epidemic, especially on clustered or small networks; the mean-field closure can give a biased threshold.

### Worked threshold example

For the three-node path, adjacency eigenvalues are
\\(\\sqrt{2},0,-\\sqrt{2}\\), so \\(\\rho(W)=\\sqrt{2}\\). With
\\(\\beta=0.4\\ \\mathrm{day}^{-1}\\) and
\\(\\gamma=0.5\\ \\mathrm{day}^{-1}\\),

\\[
\\frac{\\beta}{\\gamma}\\rho(W)=0.8\\sqrt{2}\\approx1.13>1.
\\]

The linearized mean-field system has a growing direction even though $\\beta/\\gamma<1$. Network structure changes the comparison. This calculation is an early-growth diagnostic, not a prevalence forecast.

## 8. Accessible diagram description

Draw three circles in a row joined by two lines. Node 1 begins with a tall textured bar labelled $1 unit$; nodes 2 and 3 begin at zero. Below, three later-time snapshots show the bars becoming closer to equal while their printed values always sum to one. A second diagram uses arrows branching from an infectious node and a separate removal arrow to emphasize that epidemic spread can increase or remove infectious amount, unlike conservative diffusion. Labels and hatch patterns carry all meaning without color.

## 9. Failure modes and modeling cautions

- A network snapshot may omit, aggregate, or mismeasure contacts; spectrum accuracy cannot repair data bias.
- Edge direction, duration, timing, and type may matter more than a static weight.
- High degree does not automatically mean high causal influence; degree can be a consequence of the process being studied.
- Comparing Laplacian eigenvalues across differently weighted or sized graphs requires a declared normalization.
- A disconnected graph has multiple conserved component means, not one global consensus value.
- Explicit time stepping for $x'=-\\kappa Lx$ can become unstable if the step is too large relative to $\\kappa\\lambda_{\\max}$.
- Mean-field epidemic probabilities ignore dependencies between neighboring states.
- Removing nodes based on a fitted centrality can trigger adaptation and change the network itself.

## Exercises

1. Compute $L$ for two vertices joined by an edge of weight $w$ and find its eigenvalues.
2. Prove total amount is conserved for symmetric $W$ by summing the component equations edge by edge.
3. For the three-node path solution, evaluate the limit as $t$ tends to infinity.
4. Find the stationary random-walk distribution on the three-node path.
5. A connected graph has \\(\\lambda_2=0.05\\) and
   \\(\\kappa=2\\ \\mathrm{hour}^{-1}\\). What is the slow-mode e-folding time?
6. In the linearized SIS model, find the threshold value of \\(\\beta\\) when
   \\(\\rho(W)=4\\) and \\(\\gamma=0.6\\ \\mathrm{day}^{-1}\\).

## Worked solutions

1. \\(L=\\begin{pmatrix}w&-w\\\\-w&w\\end{pmatrix}\\). The constant vector has
   eigenvalue zero and \\((1,-1)\\) has eigenvalue \\(2w\\).
2. For every undirected edge, node \\(i\\) receives
   \\(\\kappa w_{ij}(x_j-x_i)\\) and node \\(j\\) receives its negative. Pairwise
   contributions cancel.
3. Both exponentials vanish, leaving $(1/3,1/3,1/3)$.
4. Degrees are $(1,2,1)$ with total four, so $\\pi=(1/4,1/2,1/4)$. The ordinary walk is periodic on this bipartite graph, so distributions may alternate rather than converge even though $\\pi$ is stationary.
5. The decay rate is
   \\(\\kappa\\lambda_2=0.1\\ \\mathrm{hour}^{-1}\\), so the e-folding time is
   \\(10\\) hours.
6. Growth begins in the linearization when \\(\\beta\\rho(W)>\\gamma\\); equality
   gives \\(\\beta=0.6/4=0.15\\ \\mathrm{day}^{-1}\\).

## Final task: bottleneck, normalization, and mechanism

Construct two weighted graphs on the same six vertices: one well connected and
one formed by joining two dense triples with a weak edge. For each graph:

1. state what vertices, weights, state values, and time units mean;
2. compute \\(L\\), verify symmetry and zero row sums, and find its eigenvalues;
3. evolve the same nonuniform initial amount under
   \\(x'(t)=-\\kappa Lx(t)\\);
4. tabulate total amount and disagreement energy at five times;
5. compare the observed slow decay with \\(\\kappa\\lambda_2\\);
6. compute the random-walk stationary distribution and explain why it differs
   from the consensus state;
7. change to either a normalized Laplacian or the SIS linearization and justify
   the change of mechanism;
8. include one disconnected or periodic counterexample.

**Rubric.** Operator and units count for 20%; spectral calculation for 20%;
conservation and energy checks for 20%; mechanism comparison for 20%;
counterexample and claim boundary for 10%; accessible tables and reproducible
computation for 10%. A smooth animation without numerical invariants and an
operator justification is incomplete.

## Connections and computational ladder

The course combines **graph theory**, **eigenvalues**, **ordinary differential
equations**, **probability distributions**, and **network science**. It leads to
**spectral graph theory**, **epidemiology**, graph signal processing, community
detection, and control on networks. A programmable companion should accept an
edge list, report components and units, animate both \\(-Lx\\) and a random walk
without conflating them, expose eigenmodes as tables, and test conservation
numerically. A later visual lab can let learners add one bottleneck edge and
observe how \\(\\lambda_2\\) and mixing time change together.
`;export{e as default};