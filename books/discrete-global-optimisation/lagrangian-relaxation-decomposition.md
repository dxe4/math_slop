
# Lagrangian Relaxation and Decomposition {#section-1-lagrangian-relaxation-and-decomposition}

A coupling constraint can turn several easy discrete choices into one difficult problem. Lagrangian relaxation prices that coupling and returns the remaining choices to their separate blocks. The prices produce valid bounds even when the selected block solutions violate the original coupling. Whether those bounds meet the integer optimum is another question.

Assume linear-programming duality, convex subgradients and integer formulations. Begin with a maximization convention and a finite nonempty local set X. The local set may itself be a product of block choices, each retaining integrality. Finite sets keep every subproblem maximum attained; bounded compact local sets with a suitable continuous objective give a related extension, but an unbounded local domain needs explicit finiteness conditions.

<a id="section-5-relax-the-coupling-while-retaining-the-local-set"></a>
## Relax the coupling while retaining the local set {#section-7-relax-the-coupling-while-retaining-the-local-set}

Consider maximizing cᵀx over x∈X with Ax≤b. For a nonnegative multiplier vector λ, define
$$L(x,\lambda)=c^Tx+\lambda^T(b-Ax),\qquad
\theta(\lambda)=\max_{x\in X}L(x,\lambda).$$
At an original feasible point, the added term is nonnegative. Therefore θ(λ) is an upper bound on the original maximum for every λ≥0. The Lagrangian dual minimizes θ over those multipliers. This sign convention differs from the minimization convention in the convex book, where a dual feasible value is a lower bound. Derive the direction from the feasible inequality rather than recalling a price slogan.

For an equality coupling, the corresponding multiplier is unrestricted because the added residual vanishes on feasible points regardless of its sign. The same weak-bound proof applies. Constraints kept inside X are not relaxed: their local oracle must still return a point obeying them exactly or with the declared certified semantics.

The bound can be useful even when its maximizing x violates Ax≤b. Such a point is a witness for the relaxed subproblem, not an original incumbent. Conversely an original feasible x with value matching θ(λ) certifies optimality through two inequalities. Feasibility plus equality of these values is enough; no general strong-duality theorem is needed for that individual certificate.

<a id="section-16-convex-price-geometry-and-a-subgradient"></a>
## Convex price geometry and a subgradient {#section-18-convex-price-geometry-and-a-subgradient}

The function θ is a maximum of finitely many affine functions of λ, hence finite, convex and piecewise linear. If xλ attains the maximum at λ, the vector g=b−Axλ is a subgradient. Indeed evaluating the later price η at the same local point gives
$$\theta(\eta)\ge L(x_\lambda,\eta)
=\theta(\lambda)+(b-Ax_\lambda)^T(\eta-\lambda).$$
A projected subgradient step for minimizing the bound is consequently
$$\lambda^+=\bigl[\lambda+\alpha(Ax_\lambda-b)\bigr]_+.$$
A violated resource raises its price; excess slack tends to lower it. The selected local maximizer can change discontinuously at a price where several affine pieces tie. An oracle tie rule changes the chosen subgradient and iterates, but not the convex function or its weak-bound interpretation.

The nonsmooth convergence theorem applies to these price steps under its stated distance and subgradient bounds. A finite X makes all vectors b−Ax bounded, but a usable quantitative rate still requires an allowance on the distance to a dual minimizer and the specified step schedule. Convergence of the best price bound to the dual optimum does not remove an intrinsic gap between that optimum and the original integer problem.

<a id="section-27-worked-example-1-a-dual-gap-remains-at-the-best-price"></a>
## Worked example 1: a dual gap remains at the best price {#section-29-worked-example-1-a-dual-gap-remains-at-the-best-price}

Maximize x+y over binary x,y with 2x+2y≤3. The integer optimum is one. Relaxing the single coupling gives
$$\theta(\lambda)=3\lambda+2\max(0,1-2\lambda),\qquad\lambda\ge0.$$
Up to λ=1/2 this is 2−λ; afterward it is 3λ. Its minimum is 3/2 at λ=1/2. Every price bound remains at least one half above the integer optimum. More accurate subgradient optimization cannot close that structural gap.

At the minimizing price every binary pair ties in the local problem because its penalized coefficient is zero. Choosing a feasible pair with one selected variable gives original value one, still below the price bound. Choosing both gives an infeasible relaxed point. A tie in the local oracle therefore does not imply that a clever selection must recover a zero-gap integer optimizer.

<a id="section-35-the-best-bound-solves-a-convexified-coupling-problem"></a>
## The best bound solves a convexified coupling problem {#section-37-the-best-bound-solves-a-convexified-coupling-problem}

Enumerate X as points v₁ through vN. Replace selection of one point by convex weights pr≥0 summing to one, and impose AΣprvr≤b. This finite linear program maximizes Σprcᵀvr over conv X with the coupling retained. If it is feasible, its finite optimum is an upper bound on the original integer optimum.

Its dual has λ≥0 and an unrestricted scalar α with
$$\alpha\ge c^Tv_r+\lambda^T(b-Av_r)\quad\text{for every }r,$$
and minimizes α. This follows either by the finite LP Lagrangian or by introducing α as the upper envelope of all price affine functions. Minimizing α at fixed λ gives θ(λ), so linear-programming strong duality identifies the best Lagrangian bound with the convexified coupling optimum.

The result explains both success and failure. If the convexified coupled problem has an original feasible optimizer, the price bound can be exact. Otherwise the convexification has admitted combinations that no single integer selection realizes. The gap is not an arithmetic defect or a failure of the dual algorithm. Which constraints remain in X determines the convexification and therefore the strength of the bound.

Averaging local oracle outputs can approximate those convex combinations. Their weighted resource use can satisfy the coupling even when individual outputs violate it. Such an average is not automatically integer. A separate recovery or construction procedure must return an original feasible point before its value is called an incumbent.

<a id="section-47-worked-example-2-an-interval-of-exact-supporting-prices"></a>
## Worked example 2: an interval of exact supporting prices {#section-49-worked-example-2-an-interval-of-exact-supporting-prices}

Maximize 5x+4y over binary variables with x+y≤1. The price bound is
$$\theta(\lambda)=\lambda+\max(0,5-\lambda)+\max(0,4-\lambda).$$
Every price between four and five gives value five. At λ=9/2 the unique local choices are x=1,y=0, which satisfy the coupling tightly and have original value five. The price upper bound and feasible point agree, proving optimality. The primal optimizer is unique, while the supporting price is not.

At an endpoint price a local block can tie, so another oracle selection can be infeasible or slack. The existence of an exact price certificate does not mean every maximizer of the relaxed subproblem is an original optimizer. Complementarity and original feasibility still identify which recovered selection supplies the matching witness.

<a id="section-55-block-decomposition-and-an-exact-small-bound"></a>
## Block decomposition and an exact small bound {#section-57-block-decomposition-and-an-exact-small-bound}

If X is a product of local sets Xk, the objective and coupling separate as sums over blocks. The bound becomes bᵀλ plus the sum of local maxima of (ck−Akᵀλ)ᵀxk. The coupling is replaced by prices, so blocks can be solved independently at a fixed price. The value is a valid global upper bound only when every local maximum is resolved or bounded in the correct direction.

A merely feasible local solution gives a lower value for that local maximization, which may underestimate θ and cease to be an upper bound on the original problem. Exactness of the local domain and the status of the local objective are therefore indispensable. Parallel evaluation changes the work organization, not this logical requirement.

<a id="section-61-worked-example-3-two-finite-choice-blocks"></a>
### Worked example 3: two finite choice blocks {#section-63-worked-example-3-two-finite-choice-blocks}

The first block offers cost/reward choices (0,0), (2,5), (3,6). The second offers (0,0), (2,4), (3,7). Total cost may not exceed four, and one choice is made in each block. The best integer combination selects the two cost-two choices, reward nine. The other feasible nonzero choices give at most seven or six when taken alone.

At price λ=7/3 the first block chooses cost two with adjusted reward one third. The second ties its zero choice and cost-three choice, both with adjusted reward zero. Adding the capacity term gives price bound 28/3+1/3=29/3. The convexified problem attains that value by taking the first block's cost-two choice and mixing the second block's cost-three choice with weight two thirds and zero with weight one third. Total average cost is four and reward is 5+14/3.

Weak duality and this convexified feasible point prove that 29/3 is the best price bound, not merely the value at a convenient price. Its gap above the integer optimum nine is two thirds. The example displays the local solutions, the global coupling and the fractional mixture responsible for the gap.

<a id="section-69-dantzig-wolfe-columns-and-the-missing-column-obligation"></a>
## Dantzig–Wolfe columns and the missing-column obligation {#section-71-dantzig-wolfe-columns-and-the-missing-column-obligation}

Represent each block by convex weights over its local choices. The full master LP has one sum-to-one equation per block and the shared resource inequalities. Its objective is the weighted sum of all block rewards. This is the product convexification described above, potentially with an enormous number of columns.

A restricted master contains only a subset of those columns. For maximization its feasible set is smaller than the full master's, so its optimum is a lower bound on the full relaxation maximum. It is not automatically an upper bound on the original integer optimum. Some original integer selections may use omitted columns, so even comparing the restricted master with an integer incumbent needs this distinction.

The restricted dual gives resource prices λ and a block scalar αk. Full dual feasibility requires αk to bound every local adjusted reward, not just those of stored columns. Pricing maximizes that adjusted reward over the complete local set. A value above αk supplies a missing improving column. If every block oracle proves no such violation, the restricted solution is full-master optimal under the LP hypotheses.

Heuristic pricing can discover useful columns but failure to find one does not certify full dual feasibility. To obtain an upper bound before exact column exhaustion, use valid upper bounds on the local pricing maxima in bᵀλ plus their sum. This is a Lagrangian certificate independent of whether the corresponding maximizing columns were explicitly stored. The discovery mechanism and the proof bound need not use identical information, but their directions must agree.

<a id="section-79-a-minimization-benders-example-with-explicit-recourse"></a>
## A minimization Benders example with explicit recourse {#section-81-a-minimization-benders-example-with-explicit-recourse}

This section deliberately switches to minimization. Let binary z incur cost z, and let continuous recourse y minimize y under y≥3−2z and y≥0. Its value is Q(z)=max(0,3−2z). The full objective is z+Q(z).

The recourse dual chooses π between zero and one and maximizes π(3−2z). Thus any such π gives the globally valid lower affine bound Q(z)≥π(3−2z). The two endpoint multipliers yield cuts t≥0 and t≥3−2z. A master minimizing z+t with both cuts and binary z is exact for this recourse function. It gives z=1,t=1 and value two, compared with value three at z=0.

This is the Benders pattern: a master proposes the complicating variable and a continuous subproblem returns value-function cuts. With only some cuts, the minimizing master supplies a lower bound; evaluating feasible recourse at a chosen z supplies an upper bound. Those directions are opposite to the maximizing column-generation discussion. In a larger model, recourse infeasibility needs its own feasibility cut or certificate, not an invented finite value.

The supporting cuts use convex continuous recourse and its dual theorem. Replacing that recourse by an integer subproblem can make the value function nonconvex, so the same dual cuts may only relax it. A generalized decomposition must specify which additional logic restores exactness. Naming an algorithm after Benders does not eliminate the hypothesis difference.

<a id="section-89-what-a-decomposition-report-should-retain"></a>
## What a decomposition report should retain {#section-91-what-a-decomposition-report-should-retain}

Name the relaxed constraints and the complete local domains. Give multiplier signs and original units, block optimum or bound statuses, the assembled global bound and an independently feasible original incumbent. If columns or cuts are incomplete, state which missing-family obligations remain. Resource limits on local solves should return unresolved contributions or conservative bounds, not silently substitute feasible local objectives for maxima.

Price convergence, master-LP convergence, integer recovery and original optimality are separate milestones. A useful decomposition can substantially narrow the original bound interval while leaving a provable convexification gap. That is a valid outcome when the gap and its interpretation are retained. Branching or additional valid inequalities can then address the remaining discrete alternatives.

<a id="section-95-exercises-with-staged-hints-and-full-solutions"></a>
## Exercises with staged hints and full solutions {#section-97-exercises-with-staged-hints-and-full-solutions}

<a id="section-97-exercise-1-derive-the-upper-bound-sign"></a>
### Exercise 1: derive the upper-bound sign {#section-99-exercise-1-derive-the-upper-bound-sign}

For maximization with Ax≤b and λ≥0, explain why cᵀx+λᵀ(b−Ax) is at least cᵀx on every feasible x.

<details>
<summary>Hint 1</summary>

The residual and multiplier are componentwise nonnegative.
</details>
<details>
<summary>Hint 2</summary>

The local maximum can only increase the displayed value further.
</details>
<details>
<summary>Full solution</summary>

Their inner product is nonnegative, so the Lagrangian is no smaller than the feasible objective. Maximizing it over X includes every original feasible point, giving an upper bound. Changing to a negative multiplier without changing the inequality convention would lose that proof.
</details>

<a id="section-117-exercise-2-a-price-subgradient"></a>
### Exercise 2: a price subgradient {#section-119-exercise-2-a-price-subgradient}

At a maximizing local solution with resource use six and capacity four, give the scalar subgradient and projected price step.

<details>
<summary>Hint 1</summary>

The subgradient of θ is capacity minus use.
</details>
<details>
<summary>Hint 2</summary>

Minimizing θ moves opposite that subgradient.
</details>
<details>
<summary>Full solution</summary>

The subgradient is minus two, so λ⁺=max(0,λ+2α). The violation raises the price. This is a subgradient of the bound function, not a derivative of the integer optimum with respect to capacity. At a local tie, another maximizing selection may give another valid subgradient.
</details>

<a id="section-137-exercise-3-prove-the-simple-dual-gap"></a>
### Exercise 3: prove the simple dual gap {#section-139-exercise-3-prove-the-simple-dual-gap}

Minimize θ(λ)=3λ+2max(0,1−2λ) over λ≥0 and compare with the binary optimum of x+y under 2x+2y≤3.

<details>
<summary>Hint 1</summary>

Split at λ=1/2.
</details>
<details>
<summary>Hint 2</summary>

The first piece decreases and the second increases.
</details>
<details>
<summary>Full solution</summary>

The pieces are 2−λ up to one half and 3λ afterward, meeting at 3/2. The integer optimum is one because both variables cannot be one. Thus the best price bound has gap one half. No further precision in the dual minimization can improve this family below its exact minimum.
</details>

<a id="section-157-exercise-4-a-matching-original-witness"></a>
### Exercise 4: a matching original witness {#section-159-exercise-4-a-matching-original-witness}

If an original feasible maximizing point has value nine and a valid Lagrangian bound is nine, what follows about both values?

<details>
<summary>Hint 1</summary>

Place the original optimum between the two.
</details>
<details>
<summary>Hint 2</summary>

The upper and lower bounds coincide.
</details>
<details>
<summary>Full solution</summary>

The original optimum equals nine and the feasible point is optimal. The price also minimizes the bound family because every member is at least the original optimum. This individual certificate needs genuine local upper bounds and original feasibility, not a separate general zero-gap theorem.
</details>

<a id="section-177-exercise-5-equality-coupling"></a>
### Exercise 5: equality coupling {#section-179-exercise-5-equality-coupling}

Why can a Lagrange multiplier for Ax=b have either sign in the maximizing relaxation?

<details>
<summary>Hint 1</summary>

The residual is exactly zero at every original feasible point.
</details>
<details>
<summary>Hint 2</summary>

Its product with any finite multiplier is therefore zero.
</details>
<details>
<summary>Full solution</summary>

The added equality term neither increases nor decreases any feasible objective regardless of multiplier sign. Taking the maximum over the enlarged local set still yields an upper bound. Nonnegativity was needed for the inequality slack, not for an equality residual.
</details>

<a id="section-197-exercise-6-a-local-feasible-value-has-the-wrong-role"></a>
### Exercise 6: a local feasible value has the wrong role {#section-199-exercise-6-a-local-feasible-value-has-the-wrong-role}

A block maximization is stopped with feasible adjusted reward seven and a valid upper bound ten. Which value can safely assemble the global Lagrangian upper bound?

<details>
<summary>Hint 1</summary>

The unknown block maximum lies between those values.
</details>
<details>
<summary>Hint 2</summary>

Underestimating one block can invalidate the total upper bound.
</details>
<details>
<summary>Full solution</summary>

Use ten, together with the other valid block upper bounds and the resource price term. Seven may underestimate the true local maximum and produce an invalid bound. It is useful as a discovered column or local candidate, but that discovery role does not change its mathematical bound direction.
</details>

<a id="section-217-exercise-7-a-restricted-maximizing-master"></a>
### Exercise 7: a restricted maximizing master {#section-219-exercise-7-a-restricted-maximizing-master}

Does the optimum of a restricted column master automatically upper-bound the original integer optimum?

<details>
<summary>Hint 1</summary>

Some original selections may use missing columns.
</details>
<details>
<summary>Hint 2</summary>

A restricted maximizing feasible set is smaller than the full relaxation.
</details>
<details>
<summary>Full solution</summary>

No. Its value is at most the full convexified relaxation value and can omit an original best selection. A full dual certificate requires checking every pricing domain or assembling conservative maxima bounds. Failure to find a new column heuristically does not prove those inequalities.
</details>

<a id="section-237-exercise-8-averaging-can-lose-integrality"></a>
### Exercise 8: averaging can lose integrality {#section-239-exercise-8-averaging-can-lose-integrality}

Average the binary points (1,0) and (1,1) with equal weights. Under capacity 2x+2y≤3, compare the average and its two source points.

<details>
<summary>Hint 1</summary>

The average is (1,1/2).
</details>
<details>
<summary>Hint 2</summary>

Its resource use is three but its second coordinate is fractional.
</details>
<details>
<summary>Full solution</summary>

The first source point is feasible with value one; the second violates capacity and has value two. Their average satisfies the coupling with objective three halves but is not binary. It is feasible for the convexified problem, explaining its bound without supplying an original incumbent.
</details>

<a id="section-257-exercise-9-benders-cuts-and-their-direction"></a>
### Exercise 9: Benders cuts and their direction {#section-259-exercise-9-benders-cuts-and-their-direction}

For Q(z)=max(0,3−2z), give the two endpoint dual cuts and solve min z+t with binary z and both cuts.

<details>
<summary>Hint 1</summary>

Use π=0 and π=1 in t≥π(3−2z).
</details>
<details>
<summary>Hint 2</summary>

Compare z=0,t=3 with z=1,t=1.
</details>
<details>
<summary>Full solution</summary>

The cuts are t≥0 and t≥3−2z. The two possible total values are three and two, so z=1 is optimal. With only some cuts, a minimizing master underestimates recourse and supplies a lower bound; feasible recourse supplies the upper bound. This convention must not be copied from the earlier maximizing master unchanged.
</details>

<a id="section-277-exercise-10-an-intrinsic-gap-versus-an-unfinished-solve"></a>
### Exercise 10: an intrinsic gap versus an unfinished solve {#section-279-exercise-10-an-intrinsic-gap-versus-an-unfinished-solve}

An exact Lagrangian dual has value 12, while an original feasible point has value ten. Can the difference be called an intrinsic integer gap without more evidence?

<details>
<summary>Hint 1</summary>

The original optimum may lie anywhere between the feasible value and the bound.
</details>
<details>
<summary>Hint 2</summary>

The incumbent might not yet be optimal.
</details>
<details>
<summary>Full solution</summary>

Only the interval from ten to twelve is certified. The intrinsic gap is the difference between twelve and the actual original optimum, which could be smaller than two or zero. A proved integer optimum is needed to identify that gap exactly. An exact dual solve does not automatically resolve the primal discrete recovery problem.
</details>

<a id="section-297-summary-and-continuation"></a>
## Summary and continuation {#section-299-summary-and-continuation}

Lagrangian prices preserve valid bounds while separating local choices. Their best bound equals a specified convexified coupling problem, so a discrete gap can remain even at exact dual optimality. Column generation and Benders cuts expose related master/subproblem structures with different bound directions. Keep local oracle status, missing columns, original recovery and final certificates separate.

Reading references: Wolsey, *Integer Programming* (1998), and Conforti, Cornuéjols and Zambelli, *Integer Programming* (2014), for decomposition developments. The finite duality and example calculations here are derived directly.
