# 19. Networks, equilibrium, and Markov chains

**Learning goals.** Build incidence and Laplacian matrices, interpret quadratic energy, count connected components using a nullspace, and distinguish stationarity from convergence in a Markov chain. Prerequisites: nullspaces, eigenvalues, orthogonality, and quadratic forms. Allow two study sessions: one for networks and one for probability.

A network converts local interactions into a global linear operator. A resistor compares the voltages at its endpoints; a migration model moves population between regions. The same matrix ideas describe both, but their conventions matter. This chapter uses undirected graphs for energy and **column vectors of probabilities** for Markov chains.

## From edges to an operator

Consider an undirected graph with n vertices and m edges. Give each edge an arbitrary orientation. Its incidence matrix B has m rows and n columns: the row for i → j has −1 in column i, +1 in column j, and zeros elsewhere. For a vector x of vertex potentials, (Bx)ₑ = xⱼ−xᵢ is an edge difference.

Assign strictly positive edge weights wₑ and let W = diag(w₁,…,wₘ). The weighted Laplacian is L = BᵀWB. Then

xᵀLx = (Bx)ᵀW(Bx) = Σₑ wₑ(xⱼ−xᵢ)² ≥ 0.

This is graph energy; in an electrical interpretation it is dissipated power with conductance weights. Some optimization texts define their objective as half this quantity. Reversing an orientation negates a row of B and leaves L unchanged. L has weighted degrees on its diagonal and negative edge weights off its diagonal.

**Worked example: three vertices.** For the path 1—2—3 with unit weights,

B = [[−1,1,0],[0,−1,1]], and L = [[1,−1,0],[−1,2,−1],[0,−1,1]].

At x = (2,1,−1), Bx = (−1,−2), Lx = (1,1,−2), and xᵀLx = 5. Adding 100 to every potential changes neither edge difference nor energy. Absolute voltage requires a reference; the interactions determine differences.

**Theorem and proof.** If a graph has c connected components, dim ker L = c. Indeed, Lx = 0 implies xᵀLx = 0. Every nonnegative term in the energy sum must vanish, so x has equal values across every edge, hence across every path. It is constant on each component. Conversely, a vector constant on each component satisfies Bx = 0 and therefore Lx = 0. The c component-indicator vectors form a basis. In particular, a connected graph has ker L = span{(1,…,1)} and rank n−1.

This is already a theorem in arbitrary dimension; a picture of three vertices is an instance, not the scope of the result.

## Visual laboratory: differences determine energy

The horizontal coordinate labels a vertex; its height is its potential. Sloping edges represent differences, not physical wire geometry.

```mathviz
scene "Potential differences on a three-vertex path";
domain -3 3;
range -4 4;
coordinates equal;
param a = 2 from -2 to 2;
param b = 1 from -2 to 2;
param c = -1 from -2 to 2;
param shift = 0 from -2 to 2;
point left = (-2,a+shift) color teal;
point middle = (0,b+shift) color amber;
point right = (2,c+shift) color rose;
segment first from (-2,a+shift) to (0,b+shift) color blue;
segment second from (0,b+shift) to (2,c+shift) color blue;
```

**Predict →** Which changes affect E = (b−a)²+(c−b)²? **Manipulate →** Move `shift`, then move only `b`; find the minimizing middle height with endpoints fixed. **Explain →** Differentiate E with respect to b to obtain b = (a+c)/2. Why does translating all heights have no effect? **Transfer →** Edit the script to add a fourth point and edge. Derive the new energy and the equations for two unknown interior heights before experimenting.

The equation Lx = f is solvable precisely when f sums to zero on each connected component, because a symmetric matrix has image equal to its kernel's orthogonal complement. For a connected graph, fixing one reference potential removes the constant ambiguity. Alternatively, the constraint Σxᵢ = 0 selects a unique representative. Forgetting this constraint can make a perfectly valid physical problem appear to have a singular “failure.”

## Probability moves by columns

A **column-stochastic matrix** P has nonnegative entries and each column sums to one. Pᵢⱼ is the probability of moving from state j to state i. If p is a probability column vector, the update is pₖ₊₁ = Ppₖ. Nonnegativity persists and 1ᵀPp = 1ᵀp = 1. A stationary distribution π satisfies Pπ = π, π ≥ 0, and 1ᵀπ = 1.

**Worked example: two regions.** Suppose 20% leave region 1 for region 2 each year, while 10% move back. Then P = [[0.8,0.1],[0.2,0.9]]. Writing pₖ for the probability of region 1 gives pₖ₊₁ = 0.1+0.7pₖ. Solving p = 0.1+0.7p yields π = (1/3,2/3). Subtraction gives the exact error recurrence pₖ−1/3 = 0.7ᵏ(p₀−1/3), so every initial distribution converges. After ten steps the error is about 2.8% of its initial magnitude.

For n states, a finite chain is **irreducible** when every state can reach every other through positive-probability transitions. A state's period is the greatest common divisor of its possible positive return times; an irreducible chain is **aperiodic** if that period is one. A self-loop at any state suffices for aperiodicity in an irreducible chain.

**Theorem 19.3 (Finite-chain convergence).** An irreducible finite stochastic matrix has a unique strictly positive stationary distribution. If it is also aperiodic, Pᵏp → π for every initial distribution. We use this theorem here without proving the general spectral result. The two-state calculation proves a special case completely.

Irreducibility alone does not promise convergence. For P = [[0,1],[1,0]], π = (1/2,1/2) is unique, but (1,0) alternates forever with (0,1). The eigenvalue −1 preserves oscillation. Conversely, the identity matrix has every distribution stationary. Existence, uniqueness, and attraction are distinct questions.

## Visual laboratory: attraction or alternation?

Here a is the probability of leaving state 1 and b the probability of leaving state 2. The blue map is p ↦ b+(1−a−b)p; the amber diagonal marks fixed points. The rose point records consecutive probabilities (pₙ,pₙ₊₁).

```mathviz
scene "A Markov map and its iterates";
domain 0 1;
range 0 1;
coordinates equal;
param a = 0.2 from 0.05 to 1;
param b = 0.1 from 0.05 to 1;
param p = 1 from 0 to 1;
param n = 1 from 1 to 20;
fn identity(x) = x;
fn update(x) = b+(1-a-b)*x;
plot identity color amber;
plot update color blue;
point stationary = (b/(a+b),b/(a+b)) color teal;
point iterate = (b/(a+b)+(1-a-b)^floor(n)*(p-b/(a+b)),b/(a+b)+(1-a-b)^(floor(n)+1)*(p-b/(a+b))) color rose;
```

**Predict →** Will approach alternate when a+b > 1? **Manipulate →** Increase `n`, compare a=b=0.2 with a=b=0.8, then set a=b=1. **Explain →** Derive the multiplier 1−a−b and explain both its sign and magnitude. `floor(n)` makes the experiment discrete. **Transfer →** Add a small self-loop by changing the periodic example to a=b=0.95; estimate how many steps reduce error by a factor of ten using logarithms.

For a connected undirected graph with positive degrees, a random walk has P = AD⁻¹, where A is weighted adjacency and D the degree diagonal. Its stationary probabilities are πᵢ = dᵢ/Σdⱼ, since A1 = D1. This connects network geometry with probability in any finite dimension. A bipartite graph without self-loops can still have period two; replacing P by (I+P)/2 makes the walk lazy and removes that obstruction.

## Exercises

1. **Foundation.** Reverse both orientations in the three-vertex example. Compute the new B and explain why L is unchanged.
2. **Foundation.** A four-vertex graph has edges 1—2 and 3—4. Give a basis for ker L and its rank.
3. **Core.** Minimize (b−2)²+3(−1−b)² over b. Interpret the weighted average.
4. **Core.** Solve Lx = (1,0,−1) for the three-vertex path with Σxᵢ=0. Why is Lx=(1,0,0) impossible?
5. **Core.** For P=[[0.7,0.2],[0.3,0.8]], find π and an exact formula for pₖ starting from p₀=(1,0).
6. **Core.** Find the stationary distribution of the unit-weight path 1—2—3. Explain why a walk starting at vertex 2 does not converge.
7. **Stretch.** Prove that adding laziness, Q=(I+P)/2, preserves every stationary distribution. Explain the aperiodicity conclusion for irreducible P.
8. **Stretch.** Prove that solutions of x′=−Lx preserve their mean and have nonincreasing graph energy. For a connected graph, use an orthonormal eigenbasis to identify their limit.

9. **Core.** A three-vertex path has conductance two on 1—2 and one on 2—3. Solve Lx=(−2,1,1) with ground x₁=0. Verify the missing grounded equation and calculate xᵀLx.
10. **Stretch.** Prove every eigenvalue λ of a column-stochastic matrix satisfies |λ|≤1, allowing complex eigenvectors. If Pᵐ has all entries at least η>0, show any eigenvalue λ≠1 satisfies |λ|ᵐ≤1−nη. Use the sum of the eigenvector's coordinates to identify the appropriate subspace.

<details><summary>Hints</summary>

1. Multiplying a row by −1 squares away in BᵀB. 2. Use component indicators. 3. Set the derivative to zero. 4. The endpoint equations determine differences. 5. Write a scalar recurrence for state 1. 6. Degrees are 1,2,1; track the two sides of the bipartition. 7. Expand Qπ and inspect its diagonal. 8. Use L1=0, symmetry, and nonnegative eigenvalues.


9. **Hint 1.** The weighted Laplacian has rows (2,−2,0), (−2,3,−1), (0,−1,1). **Hint 2.** Start with x₃−x₂=1, then use the middle equation; the forcing sums to zero.
10. **Hint 1.** The complex ℓ¹ norm obeys ‖Pz‖₁≤‖z‖₁ by the triangle inequality and unit column sums. **Hint 2.** For λ≠1, the relation 1ᵀPv=λ1ᵀv forces 1ᵀv=0; then use the positive-power contraction.

</details>

<details><summary>Full solutions</summary>

1. The new incidence matrix is [[1,−1,0],[0,1,−1]]=−B. Thus (−B)ᵀ(−B)=BᵀB=L. Reversing just one edge works by the same rowwise argument.
2. A basis is (1,1,0,0), (0,0,1,1). Therefore nullity is two and rank is 4−2=2.
3. The derivative is 2(b−2)+6(b+1)=8b+2, giving b=−1/4. The second derivative is 8>0, so this is the unique minimum. The value equals (1·2+3·(−1))/(1+3): the stronger edge draws the interior potential toward −1.
4. The endpoints give x₁−x₂=1 and x₃−x₂=−1. The mean constraint yields x₂=0, hence x=(1,0,−1). Every Lx sums to zero because 1ᵀL=0, whereas (1,0,0) sums to one.
5. State 1 satisfies qₖ₊₁=0.2+0.5qₖ. Its fixed value is 0.4, so π=(0.4,0.6) and pₖ=(0.4+0.6·0.5ᵏ,0.6−0.6·0.5ᵏ).
6. Normalized degrees give π=(1/4,1/2,1/4). Starting at vertex 2 produces (1/2,0,1/2) after one step and (0,1,0) after two; this repeats. A unique stationary distribution can coexist with periodic motion.
7. If Pπ=π, then Qπ=(π+π)/2=π. Conversely Qπ=π implies Pπ=π, so their stationary distributions coincide. All diagonal entries of Q are at least 1/2, and paths of P remain possible in Q. Thus irreducibility persists and every state has return time one; the finite-chain theorem gives convergence.
8. The mean derivative is −1ᵀLx/n=0. For E=xᵀLx, differentiation gives E′=−2xᵀL²x=−2‖Lx‖²≤0. Expand x(0)=Σcᵢvᵢ in an orthonormal eigenbasis. Each coefficient evolves as cᵢe^(−λᵢt). Connectedness gives one zero eigenvalue with eigenvector 1/√n and all others positive. The limit is therefore the constant vector equal to the initial mean.


9. The third equation gives x₃=x₂+1. With x₁=0, the middle equation is 3x₂−x₃=1, hence 2x₂−1=1 and x₂=1,x₃=2. The first equation is 2·0−2·1=−2, so it holds as well. The energy is 2(1−0)²+(2−1)²=3, also equal to xᵀ(−2,1,1)=3. Grounding selects one representative of the constant-shift family without changing voltage differences.
10. For any complex z, Σᵢ|ΣⱼPᵢⱼzⱼ|≤Σⱼ|zⱼ|ΣᵢPᵢⱼ=‖z‖₁. Apply this to a nonzero eigenvector to get |λ|≤1. If λ≠1, multiplying Pv=λv by 1ᵀ gives 1ᵀv=0. Write Pᵐ=η11ᵀ+δR, δ=1−nη, with column-stochastic R when δ>0. Then Pᵐv=δRv, so |λ|ᵐ‖v‖₁≤δ‖v‖₁. If δ=0, the first term annihilates v and λᵐv=0 directly, giving the same bound. Positivity of a power therefore excludes nonstationary eigenvalues on the unit circle.

</details>

## Optional clinic: certify a range and choose the conserved mean

This optional untimed continuation sits outside the chapter's original two-session allocation. Its completion time has not been calibrated. Use elementary differentiation as well as the chapter's nullspace and graph ideas. The original heat exercise is correct: here we prove a different certificate, then change the evolution law and determine which average survives.

Suppose three node values start at \((3/4,1,3/4)\). Must every value remain between \(3/4\) and \(1\)? If the values approach a common number, which average selects it? Write separate answers: an energy calculation, a range bound, a conserved average, and a convergence proof perform different jobs.

**Prediction before the proofs.** On the unit-weight path \(1\text{—}2\text{—}3\), let \(D=\operatorname{diag}(1,2,1)\). Compare the old equal-capacity law \(x'=-Lx\) with the new row-normalized law \(x'=-D^{-1}Lx\), using the same initial values \((3/4,1,3/4)\). The ordinary mean is \((x_1+x_2+x_3)/3\); the degree-weighted mean is \((x_1+2x_2+x_3)/4\). Before reading the proofs, record which of these four quantities you predict stays fixed: ordinary mean in the old law, degree-weighted mean in the old law, ordinary mean in the new law, degree-weighted mean in the new law. Predict whether either law can move a coordinate outside \([3/4,1]\). Write the matrix or derivative you would check to support each prediction, then revisit your answers after the development below.

### A range theorem with a complete contact argument

Use dimensionless time \(\theta\). All coordinates are commensurate scalar values with the same fixed value unit; they need not be probabilities. If physical time is \(t\), a declared reference time \(T_*\) gives \(\theta=t/T_*\). This common clock change does not alter the relative rates at different vertices.

Let \(G\) be a finite constant real \(n\times n\) matrix, and let a \(C^1\) solution of \(x'=Gx\) be supplied on a declared finite interval \([0,T]\), \(T>0\). Assume

\[
g_{ij}\geq0\quad(i\ne j),
\qquad G\mathbf1=0.
\]

The second condition says that every row sums to zero. Together they give

\[
x_i'=\sum_{j\ne i}g_{ij}(x_j-x_i).
\]

Put \(m_0=\min_i x_i(0)\) and \(M_0=\max_i x_i(0)\). Then every coordinate remains in the initial range:

\[
m_0\leq x_i(\theta)\leq M_0
\quad(0\leq\theta\leq T).
\]

**Proof.** Fix \(\delta>0\) and put \(U_\delta(\theta)=M_0+\delta(1+\theta)\). Initially all coordinates lie strictly below this barrier. At a first contact \(x_i(\theta_*)=U_\delta(\theta_*)\), every other coordinate is at most the touching value. Hence \(x_i'(\theta_*)\leq0\). But \(x_i-U_\delta\), reaching zero from below for the first time, must have derivative at least zero, while its derivative is at most \(-\delta<0\). This contradiction also applies to contact at \(T\), using the left derivative there.

For the lower barrier \(L_\delta(\theta)=m_0-\delta(1+\theta)\), a first touching coordinate is at most every other coordinate, so \(x_i'\geq0\). The difference \(x_i-L_\delta\) first reaches zero from above and must have derivative at most zero; its derivative is instead at least \(\delta>0\). Let \(\delta\downarrow0\) in both strict bounds. This proves the claim. Repeating the argument from any starting time \(s\) proves that the coordinate maximum is nonincreasing and the minimum is nondecreasing. Merely observing a nonpositive derivative at a maximum, without resolving zero-derivative contact, would leave a gap in this proof.

The theorem allows negative initial values. It implies nonnegativity when \(m_0\geq0\), and a positive lower bound when all initial values are positive. It does not promise strict entry into the interior from boundary data. Constant data and the zero state remain constant. A zero generator row freezes that coordinate. The difference of two supplied solutions with the same initial state has initial range \([0,0]\); applying the theorem proves uniqueness on their common interval.

For necessity, make the additional assumption that a local \(C^1\) solution is supplied **from every initial state**, and require range preservation from all of them.

In particular, take \(\mathbf1\) and each \(e_j\). Initial data \(\mathbf1\) have singleton range and force \(G\mathbf1=0\). If \(g_{ij}<0\) for some \(i\ne j\), initial data \(e_j\) give \(x_i(0)=0\) and \(x_i'(0)=g_{ij}<0\), violating nonnegativity immediately. Thus both hypotheses are necessary under that additional supply-of-solutions assumption.

The theorem is conditional on a supplied solution. It neither constructs solutions for arbitrary generators nor proves their convergence. The explicit formulas later in this clinic supply global solutions and convergence for the particular models used.

### Right nullvectors describe equilibria; left nullvectors describe conservation

For a fixed vector \(w\),

\[
\frac{d}{d\theta}(w^Tx)=w^TGx.
\]

Therefore \(G^Tw=0\) makes \(w^Tx\) constant. Conversely, if local solutions are supplied from every initial basis state and this functional is conserved for all of them, its derivative at zero gives \(w^TG=0\). Solve a **left-null** problem to find conserved linear functionals.

In contrast, \(Gv=0\) is a **right-null** problem: it says that the state \(v\) is an equilibrium. The right equality \(G\mathbf1=0\) fixes constant states. Ordinary sum conservation needs the separate left equality \(\mathbf1^TG=0\). Symmetry made these agree in the original heat exercise; a changed generator need not be symmetric.

If a particular solution converges to \(c\mathbf1\), a conserved functional with \(w^T\mathbf1\ne0\) forces

\[
c=\frac{w^Tx(0)}{w^T\mathbf1}.
\]

This is the only possible consensus level, not a proof that consensus occurs. Positive normalized weights put that candidate level inside the initial range.

### Change the law, keeping the same state meaning and units

Let \(A=A^T\) be the weighted adjacency of a finite loopless undirected graph, with \(a_{ij}\geq0\) entrywise and positive degrees \(d_i=\sum_j a_{ij}\). Set

\[
D=\operatorname{diag}(d_i),\qquad L=D-A.
\]

The original equal-capacity heat law is \(x'=-Lx\). Keep Chapter 19's probability-column transition \(P=AD^{-1}\), and define a new **vertex-value** generator

\[
\begin{aligned}
G_{\rm rw}&=-D^{-1}L\\
&=D^{-1}A-I\\
&=P^T-I.
\end{aligned}
\]

Dividing each row by its own degree changes node rates; it is not a common time rescaling on an irregular graph. The coordinates still mean node values, with one common scale. In the new equation \(x'=G_{\rm rw}x\), off-diagonal entries are \(a_{ij}/d_i\geq0\) and rows sum to zero, so the range theorem applies. Also, with \(d=(d_1,\ldots,d_n)^T\),

\[
d^TG_{\rm rw}=-\mathbf1^TL=0.
\]

Thus the degree-weighted mean is conserved:

\[
\frac{d^Tx(\theta)}{\sum_i d_i}
=\frac{d^Tx(0)}{\sum_i d_i}.
\]

This uses the left nullspace to identify an observable of a changed evolution. The old degree-proportional stationary-probability calculation remains correct, but it describes a distribution, not node values approaching a common value. The conventions are:

| Law | State | Relevant conserved quantity |
| --- | --- | --- |
| \(p_{k+1}=Pp_k\) | Probability column | \(\mathbf1^Tp\) |
| \(x'=(P^T-I)x\) | Vertex-value column | \(d^Tx\) |
| \(p'=(P-I)p\) | Continuous-time probability column | \(\mathbf1^Tp\) |

The probability generator in the last row is \(G_{\rm rw}^T\); transposition changes which evolution is being studied. The existing lazy stochastic matrix \(Q=(I+P)/2\) is unchanged and is not this generator.

In a heat interpretation the old equation uses equal node capacities, while the new equation is \(Dx'=-Lx\). Interpreting \(d^Tx\) as total heat requires a justified capacity model proportional to degrees, compatible units, and a declared time scale. Algebra alone does not supply that physical assumption. On a regular graph \(D=dI\), normalization is just a common clock change and the two means agree.

Do not form \(D^{-1}\) at a zero degree. If isolated vertices are allowed, declare their values frozen separately; their initial values are additional invariants. In a disconnected graph the positive-degree component means are separately conserved. No consensus across components follows. The right kernel of \(G_{\rm rw}\) equals that of \(L\), since \(D\) is invertible on the positive-degree vertices.

Graph energy still decreases for the new law, but its derivative changes:

\[
E=x^TLx,
\]

\[
E'=-2(Lx)^TD^{-1}(Lx)\leq0.
\]

This follows by differentiating and using symmetry of \(L\) and \(D^{-1}\). It is not the old identity \(-2\|Lx\|_2^2\), and neither energy identity replaces the range proof.

### Revisit your prediction and compare the two three-path models

Return to the four-mean and range predictions you recorded before the proofs. Keep the unit-weight path \(1\text{—}2\text{—}3\) and initial values \((3/4,1,3/4)\) fixed in both laws. Before changing the control, compare your supporting matrix or derivative checks with the results above; use the display to revisit your predictions.

The horizontal positions are **categories**, not vertex positions or distances: column 1 is equal-capacity heat, and column 2 is row-normalized heat. The vertical coordinate uses the same node-value unit in both columns. Each vertical bar spans that model's current minimum and maximum. The short caps mark endpoint values: outer vertices 1 and 3 give the lower endpoint, and vertex 2 gives the upper endpoint. Two longer reference lines span both columns at the common **initial** ordinary mean \(5/6\) and initial degree-weighted mean \(7/8\). These are reference levels, not physical graph links or claims about which quantity is conserved. The four readouts are the **current** means; decide which stay at their initial reference levels.

```mathviz
scene "Two heat laws: ranges and conserved means";
domain 0.5 2.5;
range 0.7 1.05;
coordinates free;
param theta=0 from 0 to 2;
let old_outer=5/6-exp(-3*theta)/12;
let old_middle=5/6+exp(-3*theta)/6;
let new_outer=7/8-exp(-2*theta)/8;
let new_middle=7/8+exp(-2*theta)/8;
segment old_range from (1,old_outer) to (1,old_middle) color blue;
segment new_range from (2,new_outer) to (2,new_middle) color teal;
segment initial_mean_ref from (0.75,5/6) to (2.25,5/6) color amber;
segment initial_degree_ref from (0.75,7/8) to (2.25,7/8) color violet;
segment old_lower_cap from (0.92,old_outer) to (1.08,old_outer) color blue;
segment old_upper_cap from (0.92,old_middle) to (1.08,old_middle) color blue;
segment new_lower_cap from (1.92,new_outer) to (2.08,new_outer) color teal;
segment new_upper_cap from (1.92,new_middle) to (2.08,new_middle) color teal;
measure old_mean=(2*old_outer+old_middle)/3;
measure old_degree_mean=(old_outer+old_middle)/2;
measure new_mean=(2*new_outer+new_middle)/3;
measure new_degree_mean=(new_outer+new_middle)/2;

```

**Manipulate →** At \(\theta=0\), check the common initial range and all four mean readouts. Then move \(\theta\) toward 2 and revisit your predictions. For the exact paper checkpoint \(\theta=\ln2\), enter a decimal approximation such as `0.69314718056` in the time control. Which initial reference level lies outside each model's current range? **Explain →** Use the nested-range theorem to exclude that level for every later time and any possible later consensus. Identify the left-null vector for each conserved mean. Explain why a visually tiny bar is not a proof that its width is zero. **Transfer →** Complete the directed task below without a scene.

The display evaluates known closed forms numerically; it does not integrate an unknown graph system or prove an all-time statement. At large \(\theta\), short caps and reference lines may visually merge. The exact bar widths below remain positive at every finite time. Use the written formulas and proof for conservation, range, and limits.

### Exact solutions and a full answer to the prediction

For the normalized three-path,

\[
G_{\rm rw}=
\begin{pmatrix}-1&1&0\\1/2&-1&1/2\\0&1&-1\end{pmatrix}.
\]

Its right kernel contains \(\mathbf1\), and \((1,2,1)G_{\rm rw}=0\). For arbitrary real initial data \((u,v,w)\), put

\[
\mu=(u+2v+w)/4,
\]

\[
a=(u-w)/2,
\]

\[
b_{\rm rw}=(u-2v+w)/4.
\]

The solution is

\[
\begin{aligned}
x_1&=\mu+a e^{-\theta}+b_{\rm rw}e^{-2\theta},\\
x_2&=\mu-b_{\rm rw}e^{-2\theta},\\
x_3&=\mu-a e^{-\theta}+b_{\rm rw}e^{-2\theta}.
\end{aligned}
\]

To prove it, multiply \(G_{\rm rw}\) by \(\mathbf1,(1,0,-1),(1,-1,1)\). The products are those vectors times \(0,-1,-2\), respectively. Differentiating the displayed expression therefore gives the equation, and substituting \(\theta=0\) gives \((u,v,w)\). This supplies a global \(C^1\) solution for this actual model. Uniqueness follows by applying the range theorem to the difference of two solutions. The exponentials tend to zero, proving convergence to \(\mu\mathbf1\).

For comparison, the old equal-capacity law \(x'=-Lx\) on the same path has

\[
c=(u+v+w)/3,
\]

\[
b_{\rm old}=(u-2v+w)/6,
\]

\[
\begin{aligned}
x_1&=c+a e^{-\theta}+b_{\rm old}e^{-3\theta},\\
x_2&=c-2b_{\rm old}e^{-3\theta},\\
x_3&=c-a e^{-\theta}+b_{\rm old}e^{-3\theta}.
\end{aligned}
\]

Here the relevant eigenvectors are \(\mathbf1,(1,0,-1),(1,-2,1)\), with eigenvalues \(0,-1,-3\) for \(-L\). The same differentiation and initial-data check prove this formula and its limit \(c\mathbf1\). Both models preserve the initial coordinate range because each generator has nonnegative off-diagonal entries and zero row sums. Their different limiting means arise from different laws.

For \((u,v,w)=(3/4,1,3/4)\), the formulas reduce to

\[
\begin{aligned}
x_{1,\rm old}=x_{3,\rm old}&=5/6-e^{-3\theta}/12,\\
x_{2,\rm old}&=5/6+e^{-3\theta}/6,
\end{aligned}
\]

\[
\begin{aligned}
x_{1,\rm rw}=x_{3,\rm rw}&=7/8-e^{-2\theta}/8,\\
x_{2,\rm rw}&=7/8+e^{-2\theta}/8.
\end{aligned}
\]

The scene's four mean readouts have the exact values

\[
\text{old ordinary mean}=5/6,
\]

\[
\text{old degree mean}=5/6+e^{-3\theta}/24,
\]

\[
\begin{gathered}
\text{new ordinary mean}\\
=7/8-e^{-2\theta}/24,
\end{gathered}
\]

\[
\text{new degree mean}=7/8.
\]

Thus the old ordinary mean and new degree mean stay fixed. The old degree mean moves from \(7/8\) toward \(5/6\); the new ordinary mean moves from \(5/6\) toward \(7/8\). The normalized conserved total is \(x_1+2x_2+x_3=7/2\). The normalized initial derivative is \((1/4,-1/4,1/4)\), so its ordinary sum initially increases at rate \(1/4\).

At the exact checkpoint \(\theta=\ln2\), the answer is:

**Model: Equal capacity.**

| Quantity | Value |
| --- | --- |
| Minimum | \(79/96\) |
| Maximum | \(41/48\) |
| Ordinary mean | \(5/6\) |
| Degree mean | \(161/192\) |

**Model: Row normalized.**

| Quantity | Value |
| --- | --- |
| Minimum | \(27/32\) |
| Maximum | \(29/32\) |
| Ordinary mean | \(83/96\) |
| Degree mean | \(7/8\) |

This checkpoint gives an all-later exclusion certificate. The old maximum is \(41/48<7/8\), so the initial degree mean lies strictly above the old current range. The new minimum is \(27/32>5/6\), so the initial ordinary mean lies strictly below the new current range. The nested-range theorem keeps every later coordinate within its range at \(\ln2\). Each current ordinary or degree-weighted mean is a positive weighted average of those coordinates and also lies in that range. Thus the wrong mean cannot remain at or return to its initial value after this checkpoint; neither excluded reference level can be a later coordinate value or a possible consensus limit for that law. This conclusion uses an exact checkpoint and the theorem, not a visually estimated crossing or an assumption that range preservation proves convergence.

All four endpoint values lie in \([3/4,1]\). More generally the exact widths are

\[
\text{old width}=e^{-3\theta}/4,
\]

\[
\text{new width}=e^{-2\theta}/4.
\]

They are positive at every finite \(\theta\geq0\), tend to zero, and are consistent with the separate barrier proof. Range preservation alone would not prove these limits.

### Keep range, graph energy, and Euclidean norm separate

For the normalized principal example, graph energy is exactly

\[
\begin{aligned}
E&=(x_1-x_2)^2+(x_2-x_3)^2\\
&=e^{-4\theta}/8.
\end{aligned}
\]

It decreases, and the coordinate range contracts. But the Euclidean squared norm initially increases:

\[
\begin{gathered}
x(0)^Tx'(0)\\
=3/16-1/4+3/16\\
=1/8,
\end{gathered}
\]

\[
\left.(\|x\|_2^2)'\right|_{0}=2x(0)^Tx'(0)=1/4>0.
\]

This is compatible with a contracting range away from zero. The graph energy \(x^TLx\) measures differences between neighbors; the Euclidean squared norm \(x^Tx\) measures distance from the zero vector.

Conversely, norm decay alone does not preserve coordinate ranges. A two-coordinate family also studied in Chapter 20 contains

\[
A_{-1}=\begin{pmatrix}-1&-1\\0&-2\end{pmatrix}.
\]

For \(z'=A_{-1}z\), with coordinates \((p,q)\), direct differentiation gives

\[
\begin{aligned}
(p^2+q^2)'&=-2(p+q/2)^2\\
&\quad-(7/2)q^2\\
&\leq0.
\end{aligned}
\]

Yet from \(z(0)=(0,1)\) its exact solution is

\[
p=-e^{-\theta}(1-e^{-\theta}),\qquad q=e^{-2\theta}.
\]

For every \(\theta>0\), \(p<0\), outside the initial range \([0,1]\). You can verify the solution by differentiation, without reading ahead. Both range hypotheses fail: an off-diagonal entry is \(-1\), and \(A_{-1}\mathbf1=(-2,-2)^T\ne0\). The example rejects an inference from norm decay to range preservation; it does not isolate necessity of either hypothesis.

### Independent changed task: directed rates and a different conserved mean

Change both the graph and its rates. Let

\[
\widehat G=
\begin{pmatrix}-1&1&0\\0&-2&2\\3&0&-3\end{pmatrix},
\]

\[
x(0)=(1,0,0)^T.
\]

1. Prove that every coordinate of a supplied solution remains in \([0,1]\) on its declared interval. After constructing a global solution, explain why the bounds hold for all \(\theta\geq0\).
2. Find **all** conserved linear functionals and normalize the positive weights to sum to one. Find the right kernel and the only possible consensus level. Keep conservation separate from convergence.
3. Decide whether the ordinary mean is conserved, using column sums and the derivative at the given initial state. Test the tempting undirected-degree guess \((1,2,3)\).
4. Verify an explicit global solution and its limit. Explain whether an oscillating deviation from consensus forces a coordinate to become negative.

<details><summary>Hints for the directed task</summary>

1. Check off-diagonal signs and row sums; apply the strict barriers on each finite interval.
2. Solve \(w^T\widehat G=0\) for conserved weights and \(\widehat Gv=0\) for equilibria.
3. Compute \(\mathbf1^T\widehat G\) and \((1,2,3)\widehat G\).
4. Put \(\omega=\sqrt2\), \(r=(5,-6,-6)^T\), and \(s=(4,-18,15)^T\). Verify \(\widehat Gr=-3r+s\) and \(\widehat Gs=-2r-3s\). Use these identities to differentiate a damped sine/cosine expression. The characteristic polynomial is \(\lambda(\lambda^2+6\lambda+11)\), if that method helps.

</details>

<details><summary>Full reasoned answer to the directed task</summary>

**Range.** Every off-diagonal entry is nonnegative and each row sums to zero. The theorem therefore bounds every supplied solution by its initial range \([0,1]\) on each finite interval. A formula below supplies the global solution required to extend this conclusion to all nonnegative times.

**Conserved functionals and equilibria.** The left-null equations are

\[
-w_1+3w_3=0,
\]

\[
w_1-2w_2=0,
\]

\[
2w_2-3w_3=0.
\]

They give all left-null vectors as multiples of \((6,3,2)^T\). Thus every conserved linear functional is a scalar multiple of \(6x_1+3x_2+2x_3\), including the zero multiple. The normalized positive weights are

\[
\pi=(6,3,2)^T/11.
\]

The right-null equations force \(v_1=v_2=v_3\), so the right kernel is \(\operatorname{span}\{\mathbf1\}\). If this initial state converges to a constant, conservation forces its value to be \(6/11\). This identifies a candidate; it has not yet proved convergence.

**Ordinary mean and the wrong guess.** Column sums give

\[
\mathbf1^T\widehat G=(2,-1,-1),
\]

\[
(x_1+x_2+x_3)'=2x_1-x_2-x_3.
\]

At zero the sum derivative is 2 and the ordinary mean derivative is \(2/3\); ordinary mean is not conserved. The undirected-degree guess also fails explicitly:

\[
(1,2,3)\widehat G=(8,-3,-5)\ne0.
\]

**Global solution and convergence.** With the hint's \(\omega,r,s\), set

\[
\begin{aligned}
h(\theta)&=r\cos(\omega\theta)\\
&\quad+\frac{s}{\omega}\sin(\omega\theta),
\end{aligned}
\]

\[
x(\theta)=\frac6{11}\mathbf1+\frac{e^{-3\theta}}{11}h(\theta).
\]

At zero, \((6\mathbf1+r)/11=(1,0,0)^T\). Direct multiplication gives

\[
\widehat Gr=(-11,0,33)^T=-3r+s,
\]

\[
\begin{aligned}
\widehat Gs&=(-22,66,-33)^T\\
&=-2r-3s.
\end{aligned}
\]

Differentiating the expression has cosine coefficient \(-3r+s\) and sine coefficient

\[
-\omega r-3s/\omega=(-2r-3s)/\omega.
\]

These are precisely the coefficients obtained by applying \(\widehat G\), and \(\widehat G\mathbf1=0\). Thus the displayed expression is a global \(C^1\) solution. Applying the range theorem to differences proves uniqueness; applying it to this solution on every finite interval proves \(0\leq x_i(\theta)\leq1\) for all \(\theta\geq0\). The sine and cosine factors are bounded, while \(e^{-3\theta}\to0\), proving

\[
x(\theta)\longrightarrow(6/11)\mathbf1.
\]

A deviation from \(6/11\) may change sign while the coordinate itself stays in \([0,1]\). Oscillation around a positive consensus is compatible with the range certificate. Constant data, including the zero state, remain constant. This calculation proves convergence for this explicit model and initial state; it is not a general convergence theorem for directed generators.

Finally, \(p'=\widehat G^Tp\) would be a different probability-column evolution. It conserves \(\mathbf1^Tp\) and has stationary probability column \(\pi\), because \(\widehat G^T\pi=0\). Do not transfer that ordinary probability mass to the vertex-value equation without transposing the generator.

</details>

The range and left-null methods can also be compared with Stephen Boyd's [EE363 lecture on invariant sets, conservation, and dissipation](https://ee363.stanford.edu/archive/lectures/conserv.pdf), slides 11–4, 11–5, and 11–16. Fan Chung's [heat-kernel paper](https://fanchung.ucsd.edu/wp/heatpnas.pdf), preliminaries, uses row distributions with \(W=D^{-1}A\); transposing those distributions yields this chapter's probability-column convention. The barrier proof and explicit calculations above supply the claims used in this clinic.

## Core development: a positive power gives a proved convergence rate

The optional range and directed-conservation arguments are collected in [Inference from linear data](inference-linear-data.md). Here is an elementary finite-dimensional convergence theorem under an explicit positive-power hypothesis. It supplies both a proof of uniqueness and a quantitative rate. It does not replace the earlier distinction among stationarity, uniqueness and attraction.

For a real or complex vector z, define ‖z‖₁=Σ|zᵢ|. If P is column-stochastic, the triangle inequality gives ‖Pz‖₁≤‖z‖₁. Thus such matrices never enlarge this norm, even though they need not contract the ordinary Euclidean norm. The choice of norm matters to the statement.

**Theorem 19.1 (Positive-power mixing).** Let P be an n×n column-stochastic matrix. Suppose some integer m≥1 has Q=Pᵐ with all entries at least η>0. Then P has a unique stationary probability vector π, every component of π is positive, and Pᵏp tends to π for every probability vector p. Put δ=1−nη. For k=qm+r with q≥1 and 0≤r<m,

‖Pᵏp−π‖₁≤δ^q‖p−π‖₁.

*Proof.* Unit column sums give 0≤δ<1. If δ>0, write Q=η11ᵀ+δR, where R=(Q−η11ᵀ)/δ is again column-stochastic. For any zero-sum z, the first term annihilates it, so ‖Qz‖₁≤δ‖z‖₁. In particular Q contracts differences of probability vectors.

Choose one probability vector p and set pⱼ=Qʲp. Successive differences satisfy ‖pⱼ₊₁−pⱼ‖₁≤δʲ‖Qp−p‖₁. The finite-tail geometric bound makes this sequence Cauchy. Coordinatewise completeness of real numbers gives a limit π, and the closed probability simplex ensures π is still a probability vector. Matrix multiplication is continuous coordinatewise, so Qπ=π. Two stationary probability vectors for Q would have their distance bounded by δ times itself and hence must coincide.

Because P commutes with its power Q, the probability vector Pπ is another fixed vector of Q. Uniqueness gives Pπ=π. Also πᵢ=(Qπ)ᵢ≥ηΣπⱼ=η>0. Any P-stationary probability vector is Q-stationary, so uniqueness holds for P too. Finally, for k=qm+r, apply the zero-sum contraction q times and then the norm nonexpansion of Pʳ to obtain the displayed bound.

If δ=0, every column of Q equals the uniform vector u=(1/n)1. Thus Q sends every probability vector directly to u, which is its unique stationary vector. The same commuting argument shows Pu=u, so every trajectory is exactly u after m steps. The stated bound for q≥1 is then zero, as required. ∎

The proof uses a complete positive power as a sufficient hypothesis. The earlier finite irreducible/aperiodic theorem was explicitly cited; no missing spectral argument is concealed inside this elementary special case. When a positive power is available, the contraction gives information beyond mere eventual convergence.

### Worked example 3: a three-state chain with an exact rate

Let P=(1/2)I+(1/6)11ᵀ on three states. Its diagonal entries are 2/3 and off-diagonal entries 1/6, so every column sums to one. The uniform vector u=(1/3,1/3,1/3) is stationary. For any probability vector p,

Pp−u=(1/2)(p−u),

since 1ᵀp=1. Hence pₖ=u+2⁻ᵏ(p₀−u). Starting at e₁ gives pₖ=(1/3+(2/3)2⁻ᵏ,1/3−(1/3)2⁻ᵏ,1/3−(1/3)2⁻ᵏ). At the first step this is (2/3,1/6,1/6), agreeing with the first column of P.

Here η=1/6 and δ=1/2, and the theorem's ℓ¹ rate is exact rather than merely an upper bound. The two nonconstant directions have eigenvalue 1/2. There is no alternating sign, unlike the two-state swap. Every coordinate remains a probability, and the total stays one throughout.

## Why grounding a connected network gives a unique solve

**Proposition 19.2 (Grounded Laplacian).** For a connected undirected graph with positive conductances and at least two vertices, deleting one row and the matching column from its Laplacian gives a positive definite matrix.

*Proof.* Let vertex r be grounded. Extend any nonzero vector y on the other vertices to x by setting xᵣ=0. The grounded quadratic form is xᵀLx=Σwₑ(xⱼ−xᵢ)². If this vanished, connectedness would force x to be constant. Its grounded value would then force x=0, contradicting y≠0. Thus the grounded form is positive on every nonzero y, and symmetry makes the matrix positive definite. ∎

It follows that any forcing on the ungrounded vertices determines one grounded solution. For a balanced forcing on all vertices, the omitted equation then follows from the zero row sum and the other equations. Grounding removes the constant ambiguity; it does not manufacture a solution for an unbalanced total injection in the original closed network.

## Sources

These additional proofs and examples are original. Complementary primary teaching material is Gilbert Strang, MIT OpenCourseWare, [Markov Matrices; Fourier Series](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/least-squares-determinants-and-eigenvalues/markov-matrices-fourier-series/), consulted 13 November 2026. The retained earlier clinic includes its directed-conservation and range references.

## Summary

Incidence differences produce a symmetric positive semidefinite Laplacian whose kernel records connected components. Positive grounding gives a unique potential solve when the forcing contract is appropriate. Column-stochastic evolution preserves probability, but stationarity alone does not guarantee convergence. A strictly positive power supplies an explicit contraction proof, a unique positive stationary vector and a rate. Left nullvectors describe conserved quantities, while right nullvectors describe equilibria. These distinctions continue into continuous linear dynamics and the capstone.
