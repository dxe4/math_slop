
# Modelling Case Studies and Checkable Decisions


## A result needs a model, a plan and a bound

An optimisation output becomes useful through an argument: the model states what is being chosen, a feasible plan can actually be implemented, a bound quantifies possible improvement, and sensitivity explains which assumptions could change the recommendation. This chapter combines those objects in small exact case studies. All numerical data are synthetic teaching data; none represents a measured organisation or an operational recommendation.

Required preparation is the preceding LP chapters, [KKT conditions](lagrange-multipliers-kkt.md), and elementary units and uncertainty. The complete [Optimization, Duality, and Certificates](../applied-modeling-proof-reference/optimization-duality-certificates.md) source remains available. Its projection, resource allocation, primal–dual, infeasibility, integrality and Pareto ideas are retained here in an original connected exposition. All eighteen original questions and their [complete solutions](../applied-modeling-proof-reference/optimization-duality-certificates.md#complete-solutions) remain at that source; its IDs and contents are unchanged.

**Definition 16.1 (Decision certificate).** A decision certificate identifies the exact objective and feasible set, an implementable feasible candidate, a valid bound for the same target, and the assumptions under which those statements hold. An exact optimum certificate is equality of feasible primal and dual bounds or another complete proof. A small numerical residual, a precise decimal display and a persuasive model interpretation are different kinds of evidence.

Before solving, state variable meanings, units, time horizon, continuous or indivisible status, permitted uncertainty and the origin of every coefficient. If x is batches per day and a row measures staff hours per day, its coefficients are staff hours per batch. Its dual price has objective units per staff hour. Mixing daily capacities and weekly outputs can produce an internally solved but meaningless LP.

The objective also needs a scope. A score combining cost, delay and emissions uses conversion weights chosen by the modeller. A theorem can establish the optimum of that score; it cannot decide that the chosen tradeoff represents all affected interests. Hard requirements and optional preferences should therefore be distinguished in the feasible set and objective.

## Case 1: a two-resource plan with a matching price certificate

**Example 16.2 (The seed's exact allocation certificate).** Consider the synthetic maximisation
$$\max 3x+2y,\qquad x+y\le4,\quad 2x+y\le6,\quad x,y\ge0.$$
Candidate $(2,2)$ uses both resources exactly and has value ten. Multipliers $(u,v)=(1,1)$ satisfy
$$u+2v=3,\qquad u+v=2,\qquad u,v\ge0,$$
so the dual value is $4u+6v=10$. Weak duality proves this plan globally optimal. This is the modelling seed's four-and-six instance; the main book's running four-and-five instance has a different optimum and must not be substituted silently.

Complementary slackness explains the two binding resource rows, since both prices are positive. Conversely, solving those two equalities gives the candidate, while nonnegativity verifies it. The certificate contains both the plan and its opposing bound; neither depends on trusting the method that discovered the pair.

Now replace the second capacity six by q. For $4\le q\le8$, the intersection is
$$x=q-4,\qquad y=8-q,$$
with objective $q+4$. The same dual prices give upper bound $4+q$, proving that formula throughout this interval. Thus the second price is exactly the local value slope one while this basis remains feasible. Below four, the preferred plan changes to $x=0,y=q$, value $2q$ for $0\le q\le4$. Above eight, the first resource limits the all-x plan $(4,0)$ and value twelve. The complete value curve changes slope at the switch points.

A multiplier is therefore a conditional marginal value inside the model. It is not a causal effect of changing an observed resource in a real organisation. A large finite change can cross a switch, and uncertain coefficients can move the switch itself. Report the parameter interval as part of the price statement.

## Case 2: projection and a nonlinear resource limit

**Proposition 16.3 (Projection certificate).** Let C be nonempty, closed and convex in finite-dimensional Euclidean space. The minimiser p of $\frac12\|x-a\|^2$ exists, is unique, and is characterised by
$$(p-a)^{\mathsf T}(z-p)\ge0\quad\text{for every }z\in C.$$

*Proof.* A minimising sequence can be restricted to a bounded distance sublevel, hence has a convergent subsequence whose limit lies in C by closedness. Continuity gives a minimum. Strict convexity on a convex set gives uniqueness. The derivative along every segment from p to z gives the necessary inequality. Conversely expand
$$\|a-z\|^2=\|a-p\|^2+\|z-p\|^2
-2(a-p)^{\mathsf T}(z-p)\ge\|a-p\|^2.$$
Thus the inequality proves optimality. ∎

For the nonnegative orthant, coordinates separate and $p_i=\max(a_i,0)$. In particular $a=(-2,3,-1)$ projects to $(0,3,0)$. This retains the seed's simple feasibility-repair example while making the closedness and existence assumptions explicit.

**Example 16.4 (A changing nonlinear resource price).** Minimise
$$(x-3)^2+(y-2)^2,\qquad x+y\le3.$$
The unconstrained point violates the resource limit. Stationarity on its binding line gives
$2(x-3)+\lambda=0$, $2(y-2)+\lambda=0$,
so $x-y=1$ and $(x,y)=(2,1)$, with $\lambda=2$. Convex KKT sufficiency proves the unique global minimum, value two.

If the resource bound becomes b, then for $b\le5$ the solution is
$((b+1)/2,(b-1)/2)$ and value $(5-b)^2/2$; above five the unconstrained point is feasible and the value is zero. These coordinates are unrestricted real variables in this case, as in the original model; adding nonnegative bounds for b below one would change the formula. At b equal to four, the value is one half, an improvement of 1.5 from b equal to three. The old multiplier predicts an improvement of about two for a one-unit increase, but only as a first-order local estimate. The exact curve explains the difference.

Strict convexity supplies uniqueness but not existence in every conceivable feasible domain. Minimising x on the open set $x>0$ has finite infimum zero and no minimiser. That is a nonclosed constrained problem, not a counterexample to finite attainment for an ordinary closed polyhedral LP. Domain and attainment statements belong beside the objective.

## Case 3: four activities, two criteria and an indivisible choice

**Example 16.5 (A complete synthetic planning table).** Choose nonnegative activities $x_1,x_2,x_3$ and a binary option $x_4\in\{0,1\}$. The three resource rows and profit coefficients are
$$
A=\begin{pmatrix}
1&1&1&1\\
2&1&1&2\\
0&0&1&1
\end{pmatrix},\qquad b=(4,6,1),\qquad c=(3,2,1,3).
$$
Maximise $c^{\mathsf T}x$ under $Ax\le b$. Resource units are synthetic hours in the first two rows and option capacity in the third. Profit is a synthetic credit score per planning interval. The second criterion is an emissions score $E=3x_1+x_2$.

Dual prices $(1,1,0)$ have coefficient bounds $(3,2,2,3)\ge c$ and objective ten. Plan $(2,2,0,0)$ is feasible and has profit ten, so the LP relaxation and integer model both have optimum ten. Plan $(1,2,0,1)$ also attains ten, with the binary option used. Their emissions are eight and five respectively.

The gap decomposition has coefficient slack one only on activity three. Every ten-profit solution must therefore have $x_3=0$; both positive resource prices also force the first two rows tight. Solving gives
$$x_1=2-x_4,\qquad x_2=2,\qquad0\le x_4\le1.$$
Along this complete optimal face, emissions equal $8-3x_4$. Minimising emissions subject to retaining profit ten selects $x_4=1$ and emissions five, which is implementable. This is a lexicographic second objective expressed as a separate optimisation, not an unexplained weighted score.

The primary additive integrality gap is zero for this instance. That fact does not mean every model with a binary variable has zero gap. Changing the third capacity to one half forces the binary option to zero, while the continuous relaxation can use one half. On the ten-profit face, integer emissions then equal eight and relaxed emissions can reach 6.5. The secondary minimisation gap is 1.5 under that explicit convention. Always say which objective and relaxation the gap concerns.

This case instantiates the seed's four-activity project with a complete exact certificate. A richer application would also need data evidence, costs for the option and any physical linking constraints. Those are model decisions, not quantities inferable from the synthetic LP.

## Infeasibility and unboundedness are different reports

The seed's Farkas example has $x\ge0$ and $x=-1$. With A equal to one, b equal to minus one and certificate y equal to one, $A^{\mathsf T}y\ge0$ while $b^{\mathsf T}y<0$. This is a finite contradiction to feasibility. A solver failure without such evidence need not mean the model is infeasible.

For an unbounded example, maximise $x+y$ subject to $x-y\le1$, $x,y\ge0$. The origin is feasible and direction $(1,1)$ preserves the inequality while increasing the objective by two per unit. The ray $(t,t)$ is therefore an exact unboundedness certificate. It may indicate a missing capacity in an intended application, but it correctly describes the written problem. Changing the model and repairing a software defect are different responses.

In the four-activity case, replacing the first capacity by minus one makes the model infeasible because its left side is nonnegative. After adding its nonnegative slack, the corresponding equality has nonnegative coefficients and negative RHS, so selecting that row is a direct Farkas certificate. The deliberately adverse case can be checked without running a solver or guessing from a numerical status string.

## Multiple objectives and unsupported alternatives

**Definition 16.6 (Pareto efficiency).** For minimising several criteria, a feasible point is efficient when no feasible alternative is no worse in every criterion and strictly better in at least one. Efficiency orders alternatives only partially; it does not choose the preferred tradeoff.

For minimising $(x,1-x)$ on $[0,1]$, every point is efficient: reducing either component increases the other. Positive weights produce efficient optima when they are attained. To prove it, an alternative dominating a weighted-sum optimum would strictly reduce the sum, since every weight is positive, a contradiction. Zero weights can permit ignoring improvements in an unweighted criterion.

In a nonconvex objective set, weighted sums can miss efficient points. Consider the three feasible criterion vectors $(0,2)$, $(1,3/2)$ and $(2,0)$. All are efficient. For the middle one to minimise a positive weighted sum, comparison with the first requires $w_1\le w_2/2$, while comparison with the third requires $w_1\ge3w_2/2$. These cannot both hold. A hard bound on one criterion can expose that middle alternative even though no positive weighting selects it.

A finite penalty is also not automatically a requirement. A forbidden violation remains permitted when it is merely expensive. For any chosen finite penalty, an alternative with sufficiently large objective savings can outweigh it unless a specific dominance bound is proved. Hard constraints express nonnegotiable requirements directly; soft penalties describe an explicit willingness to trade violation against something else.

## A perturbation audit for a fragile recommendation

Suppose $x+y\le1$, $x,y\ge0$, with uncertain profits $2+\delta$ and $2-\delta$, where $|\delta|\le0.1$. At positive delta the best pure allocation is all x, and at negative delta it is all y. The difference between those pure profits is $2|\delta|$. At zero, every fully used mixture is optimal, so tiny coefficient changes can move the chosen vector substantially while barely changing its value.

For a continuous robust plan, evaluate both interval endpoints. Its worst-case profit is
$$2(x+y)-0.1|x-y|.$$
The balanced mixture $(1/2,1/2)$ guarantees two. Averaging the two endpoint profit inequalities shows no feasible plan can guarantee more than $2(x+y)\le2$, so this robust plan is optimal. If the choice must be binary and only one activity can be selected, each pure option guarantees 1.9 instead. Robustness and implementability are separate changes in the model.

Box uncertainty can also be propagated through constraints. With nonnegative x and independent row-coefficient intervals, the worst left side uses every upper endpoint. Enforcing that upper-endpoint row against a lower guaranteed capacity gives a robust feasibility condition. Correlations between coefficients can make this box conservative; a statistical confidence interval supplies probabilistic coverage, not a certain parameter enclosure. State the uncertainty set and its interpretation before claiming robust feasibility.

## What to retain with the recommendation

The final record contains equations and units, exact or enclosed primal feasibility, integer checks where needed, a valid opposing bound, objective gap, active constraints and perturbation intervals. It identifies whether claims are exact, numerical, statistical or conditional on uncertain inputs. A model's value choices and unmeasured discrepancy remain visible rather than being folded into an unsupported error bar.

The original modelling source's eighteen exercises retain additional derivations: convex support and orthant projection; equality and inequality KKT; marginal values and multiplier rescaling; LP duality and complementary slackness; Farkas contradictions and improving rays; integrality gaps; Pareto alternatives; and reporting and perturbation audits. Their [questions](../applied-modeling-proof-reference/optimization-duality-certificates.md#exercises) and [complete solutions](../applied-modeling-proof-reference/optimization-duality-certificates.md#complete-solutions) remain paired in that source. The ten new exercises here use the connected cases above.

A trustworthy conclusion is narrow enough to be checked: this plan is feasible under these constraints, its value is within this proved gap, and these parameter changes preserve or alter the recommendation. Exact optimisation cannot prove that the chosen objective, feasible set or uncertain inputs are the right representation of the intended decision. It can make those assumptions explicit and their mathematical consequences inspectable.

## Exercises

### Exercise 1: Two-resource certificate
<a id="modelling-case-studies-ex-1"></a>

Verify the plan (2,2) and prices (1,1) in Case 1.

<details>
<summary>Hint 1</summary>

**Hint.** Check both resource loads.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare primal and dual objectives.

</details>

<details>
<summary>Solution</summary>

**Solution.** The loads are four and six and the objective is ten. Dual coefficient bounds equal $(3,2)$ and the dual objective is also ten, so weak duality proves optimality for this exact four-and-six model.

</details>

### Exercise 2: Capacity interval
<a id="modelling-case-studies-ex-2"></a>

For second capacity q=7 in Case 1, find the certified plan and value.

<details>
<summary>Hint 1</summary>

**Hint.** Use the two binding resource equations.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Check that q stays in the stated interval.

</details>

<details>
<summary>Solution</summary>

**Solution.** The plan is x=3,y=1, with value eleven. It is nonnegative, uses resources four and seven, and prices (1,1) give the matching upper bound eleven. The formula is justified on the interval from four to eight.

</details>

### Exercise 3: Nonlinear marginal change
<a id="modelling-case-studies-ex-3"></a>

Compare the exact value improvement from b=3 to b=4 in Case 2 with the old multiplier prediction.

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate the quadratic value curve.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A derivative is local.

</details>

<details>
<summary>Solution</summary>

**Solution.** The value falls from two to one half, an improvement of 1.5. The multiplier two at b=3 predicts about two for a unit change, but it varies along the interval. The exact curve, rather than an indefinitely extended derivative, gives the finite change.

</details>

### Exercise 4: Four-activity bound
<a id="modelling-case-studies-ex-4"></a>

Compute the dual coefficient slack for prices (1,1,0) and explain why x3 vanishes at profit ten.

<details>
<summary>Hint 1</summary>

**Hint.** Multiply the resource matrix transpose by the prices.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use the nonnegative gap decomposition.

</details>

<details>
<summary>Solution</summary>

**Solution.** The coefficient bound is $(3,2,2,3)$, so its slack over c is $(0,0,1,0)$. At zero objective gap the product of this positive third slack with x3 must be zero. Hence every ten-profit solution has x3=0.

</details>

### Exercise 5: Secondary objective
<a id="modelling-case-studies-ex-5"></a>

Minimise emissions on the ten-profit face of Case 3.

<details>
<summary>Hint 1</summary>

**Hint.** Use x1=2-x4 and x2=2.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Retain the binary option bounds.

</details>

<details>
<summary>Solution</summary>

**Solution.** Emissions are $8-3x_4$. They are smallest at x4=1, giving plan $(1,2,0,1)$ and emissions five. It ties the primary optimum and is implementable under the stated binary rule.

</details>

### Exercise 6: An infeasible variant
<a id="modelling-case-studies-ex-6"></a>

Why does changing the first capacity in Case 3 to -1 prove infeasibility?

<details>
<summary>Hint 1</summary>

**Hint.** Every variable and first-row coefficient is nonnegative.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Include the slack if writing standard form.

</details>

<details>
<summary>Solution</summary>

**Solution.** The first left-hand side cannot be negative, so it cannot be at most minus one. In standard form the row and its nonnegative slack equal minus one; choosing that row gives a Farkas contradiction with nonnegative transposed coefficients and negative RHS pairing.

</details>

### Exercise 7: An improving ray
<a id="modelling-case-studies-ex-7"></a>

Check direction (1,1) for max x+y subject to x-y<=1 and nonnegativity.

<details>
<summary>Hint 1</summary>

**Hint.** Its difference contribution is zero.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Its objective contribution is positive.

</details>

<details>
<summary>Solution</summary>

**Solution.** Starting at the origin, $(t,t)$ is nonnegative and has x-y=0<=1 for every t>=0. Its objective is 2t, so the written maximisation is unbounded.

</details>

### Exercise 8: Unsupported efficiency
<a id="modelling-case-studies-ex-8"></a>

Show why positive weights cannot select (1,3/2) over both (0,2) and (2,0).

<details>
<summary>Hint 1</summary>

**Hint.** Write one weighted inequality against each endpoint.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare the resulting bounds on w1/w2.

</details>

<details>
<summary>Solution</summary>

**Solution.** The first comparison requires $w_1\le w_2/2$ and the second $w_1\ge3w_2/2$. With positive w2 these are incompatible, although the middle point is Pareto efficient. Weighted sums can miss efficient nonconvex alternatives.

</details>

### Exercise 9: Robust mixture
<a id="modelling-case-studies-ex-9"></a>

Certify the worst-case profit of the balanced mixture in the uncertain two-activity model.

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate both endpoint profits.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use their average to bound any candidate.

</details>

<details>
<summary>Solution</summary>

**Solution.** At x=y=1/2 both endpoint profits equal two. Any robust guarantee cannot exceed the average endpoint payoff $2(x+y)\le2$, so the mixture is robust-optimal. A binary restriction changes the best guarantee to 1.9.

</details>

### Exercise 10: Scope of an exact answer
<a id="modelling-case-studies-ex-10"></a>

What does equality of exact primal and dual objectives leave unresolved in an application?

<details>
<summary>Hint 1</summary>

**Hint.** Name assumptions outside the mathematical LP.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Separate optimality, data and preferences.

</details>

<details>
<summary>Solution</summary>

**Solution.** It proves optimality for the written model and feasible sets. It does not prove the input data accurate, the physical or organisational model adequate, the objective weights justified, or the chosen plan stable under unanalysed changes. Those require separate evidence and scope statements.

</details>


## Sources

Bertsimas and Tsitsiklis, *Introduction to Linear Optimization* ([author's book page](https://www.mit.edu/~dbertsim/books.html)), is a comparison reference for simplex, duality and network optimisation. Matoušek and Gärtner, [Understanding and Using Linear Programming](https://doi.org/10.1007/978-3-540-30717-4), gives a complementary geometric treatment. The exposition, calculations and exercise solutions here are original; external results are identified where their full proofs are not supplied. The acknowledged seed is [Optimization, Duality, and Certificates](../applied-modeling-proof-reference/optimization-duality-certificates.md); all eighteen original questions and full solutions remain there. Its distinctive exact cases and mathematical distinctions are retained above, with the four-activity and robust-choice cases developed here. Projection and certificate arguments are proved directly, while the general LP and convex KKT theorems are supplied in the preceding chapters.

## Summary

An implementable recommendation pairs a feasible plan with a valid bound for the same model. Exact allocation prices, projection, nonlinear resource sensitivity and a four-activity case show how certificates work and how they change under perturbation. Integrality, multiple objectives and uncertainty alter the question rather than merely the solver. A final claim states the equations, units, objective gap and unresolved modelling assumptions together.
