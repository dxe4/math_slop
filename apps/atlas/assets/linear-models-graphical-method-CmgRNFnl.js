var e=`---
parent_id: book-linear-programming-optimisation
chapter_id: linear-models-graphical-method
title: "Linear Models and the Graphical Method"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Linear Models and the Graphical Method

An optimisation problem asks for a best choice among permitted choices. Before asking an algorithm for an answer, we must specify what a choice means, which restrictions are mathematical assumptions, and how two permitted choices are compared. Linear programming is a particularly useful setting because its constraints and objective combine variables by addition and multiplication by fixed coefficients. Its geometry supports exact certificates: a feasible point proves that a target is achievable, while a suitable combination of constraints can prove that no better target is achievable.

This chapter begins with two variables so that algebra and geometry can be checked together. The pictures one might draw are guides to the argument; the inequalities establish the feasible set, and an explicit upper or lower bound establishes optimality. Later chapters extend those arguments to arbitrary finite dimension and derive the simplex method and duality from them.

## Preparation, variables, and units

You need equations of lines, inequalities, elementary matrix notation, and direct proofs. [Lucent's systems and elimination lesson](/lucent/#/course/linear-algebra/systems-elimination) supplies the required algebra. The book's later nonlinear comparison uses [multivariable derivatives](/lucent/#/course/calculus/gradient-chain-levels), but no differentiation is needed to solve the models here.

A decision variable is a quantity chosen by the model. A parameter is a quantity held fixed for the particular problem. The distinction is mathematical: a coefficient may vary between scenarios while remaining a constant within each optimisation. For instance, $3x+2y$ is linear in $x,y$ when 3 and 2 are fixed. An expression $px$ is linear in $x$ when $p$ is given, but is not linear in the joint decision $(p,x)$.

Units belong in the formulation. If $x$ counts units of one activity and $y$ counts units of another, an inequality $x+y\\le4$ assumes that both use one unit of the same resource per activity unit. If the activities use different amounts, those coefficients must appear explicitly. Converting hours to minutes multiplies the whole resource row, including its right-hand side, by60. Changing only one coefficient changes the mathematical model.

**Definition 1.1 (Linear programme).** A finite-dimensional linear programme has decision vector $x\\in\\mathbb R^n$, an objective $c^Tx$ to maximise or minimise, and finitely many affine equality or inequality constraints. Each coefficient and right-hand side is fixed real data. The feasible set consists of the points satisfying every constraint. Nonnegativity, upper bounds, and free-variable declarations are part of those constraints.

An affine objective $c^Tx+\\gamma$ is also permitted: its constant changes the reported value but not which feasible points are best. Strict inequalities are not included in this definition. The distinction matters for attainment: minimising $x$ over $x>0$ has infimum zero but no minimiser, whereas $x\\ge0$ includes an optimal point.

## Four questions that should be separated

First, is the model feasible? A point satisfying some of the inequalities does not answer this: every equality, inequality, and domain restriction must be checked. An inconsistent subset already proves the whole model infeasible.

Second, if feasible, is the objective bounded in the requested direction? A feasible set can extend indefinitely while a particular objective remains bounded. The word “unbounded” should therefore identify whether it describes the set or the objective.

Third, if a finite bound exists, is it attained? For the closed polyhedral problems studied later, finite optimum attainment will be proved. It should not be imported into unrelated models containing open domains or nonlinear restrictions.

Fourth, is the optimiser unique? A unique objective value can be achieved by many points. The numerical value and the set of choices attaining it are different outputs.

**Proposition 1.2 (Convexity).** A linear programme's feasible set is convex: if $u,v$ are feasible and $0\\le t\\le1$, then $tu+(1-t)v$ is feasible.

*Proof.* For any row $a^Tx\\le b$,
$a^T(tu+(1-t)v)=t a^Tu+(1-t)a^Tv\\le tb+(1-t)b=b$.
For an equality, the same calculation gives equality. Nonnegativity is preserved coordinate by coordinate. Every constraint is therefore satisfied. $\\square$

This proof explains an important modelling restriction. A requirement that an activity be either absent or run at full capacity is not generally a linear-programming domain. Its two permitted endpoints can have an impermissible midpoint. Integer programming handles such discrete choices, and chapter 14 will distinguish the integer problem from its continuous relaxation.

## A graphical calculation with a complete certificate

**Example 1.3 (Two activities and two resources).** Let $x,y$ be nonnegative activity levels. Maximise
$$
3x+2y
$$
subject to
$$
x+y\\le4,\\qquad 2x+y\\le5.
$$
The boundary lines intersect where subtracting the first equation from the second gives $x=1$, and then $y=3$. Their axis intersections yield the feasible corner candidates
$(0,0),(5/2,0),(1,3),(0,4)$.
The corresponding objective values are $0,15/2,9,8$.

A drawing suggests $(1,3)$ is optimal, but we can prove it without assuming that the candidate list is complete. Add the two resource inequalities:
$$
3x+2y=(x+y)+(2x+y)\\le4+5=9.
$$
The feasible point $(1,3)$ attains9, so9 is the global maximum. Equality requires both resource inequalities to be tight. Their unique intersection is $(1,3)$, proving uniqueness as well.

The nonnegative weights in that constraint combination are essential. Multiplying an inequality by a negative number reverses its direction; adding it without that reversal would not produce an upper bound. The later duality chapters organise exactly these weighted-constraint arguments.

The slacks are $s_1=4-x-y$ and $s_2=5-2x-y$. They measure unused resource in the row's units and are nonnegative at feasible points. At the optimum both are zero. That fact is a feature of this instance, not a universal rule that every optimal constraint must be tight.

## Minimisation uses the opposite bound direction

**Example 1.4 (Two requirements).** Minimise $4x+3y$ subject to
$$
x+y\\ge4,\\qquad 2x+y\\ge5,\\qquad x,y\\ge0.
$$
The boundary intersection is again $(1,3)$, with cost13. The feasible axis corners are $(4,0)$, with cost16, and $(0,5)$, with cost15. The feasible set is unbounded: increasing $x$ sufficiently preserves both requirements.

Multiply the first requirement by2 and add the second:
$$
4x+3y=2(x+y)+(2x+y)\\ge2(4)+5=13.
$$
Thus every feasible point costs at least13, and $(1,3)$ attains the lower bound. Both positive weights force equality in both requirements at an optimum, proving uniqueness. The same algebraic pattern that gave an upper bound for maximisation gives a lower bound for minimisation when the constraint directions are appropriate.

A resource capacity and a minimum requirement therefore have different meanings. Writing a minimum requirement with $\\le$ can produce a cheap solution that violates the intended task. A solver may correctly solve that wrong formulation, so formulation checks precede numerical accuracy checks.

## What a graphical method actually establishes

For a two-variable inequality $a x+b y\\le d$, the boundary is a line when $(a,b)\\ne(0,0)$. Determine the permitted half-plane by substituting a point not on the line. If $a=b=0$, there is no boundary line: the constraint is either always true or immediately inconsistent, depending on $d$.

To find candidate corners, intersect pairs of boundary lines, then test each intersection against every inequality. A boundary intersection outside the feasible set is not a feasible corner. Parallel boundaries may have no intersection or may coincide; neither case supports division by a zero determinant.

**Theorem 1.5 (Finite-hull objective bound).** If $P=\\operatorname{conv}\\{v_1,\\ldots,v_k\\}$ is the convex hull of finitely many points, then
$$
\\max_{x\\in P}c^Tx=\\max_{1\\le i\\le k}c^Tv_i.
$$
The analogous minimum statement also holds.

*Proof.* Every $x\\in P$ has a representation $x=\\sum_i\\theta_i v_i$ with $\\theta_i\\ge0$ and $\\sum_i\\theta_i=1$. Hence $c^Tx=\\sum_i\\theta_i c^Tv_i$ cannot exceed the largest listed value or fall below the smallest. A listed point attaining each extreme belongs to $P$, so both bounds are attained. $\\square$

This theorem states its representation hypothesis. The next chapter proves the relation between bounded polyhedra and their vertices, thereby justifying systematic corner methods beyond a particular sketch. We have already proved the two worked optima by certificates, so their correctness does not depend on an unproved visual assumption.

If two distinct feasible points attain the same optimum, their entire joining segment does too, by linearity. An objective line parallel to a feasible edge can therefore produce infinitely many optimisers. Parallelism alone is insufficient: the edge must actually be the best supporting edge in the requested direction.

## Unbounded sets and unbounded objectives

**Example 1.6 (One region, two different optimisation conclusions).** Consider
$$
P=\\{(x,y):x\\ge0,\\ 0\\le y\\le1\\}.
$$
The points $(t,0)$ are feasible for every $t\\ge0$, so $P$ is unbounded. Maximising $x$ is also unbounded above because its values are $t$. Maximising $y$, however, has finite maximum1, attained at every $(t,1)$ with $t\\ge0$. Minimising $x+y$ has unique minimiser $(0,0)$ and value zero.

The example shows why a software or written report must state the objective. It also distinguishes an unbounded family of optimal points from an objective that has no finite upper bound. These are different phenomena and require different certificates.

An improving ray supplies one useful certificate. If $x_0$ is feasible and $x_0+td$ remains feasible for every $t\\ge0$, with $c^Td>0$, then a maximisation objective is unbounded. For inequalities $Ax\\le b$, the conditions $Ax_0\\le b$ and $Ad\\le0$ suffice; also check every variable bound. For minimisation, an improving ray has $c^Td<0$. A direction with zero objective change shows only a flat feasible direction, not objective unboundedness.

## Equivalent formulations and changes of question

**Definition 1.7 (Equivalent formulation).** Two formulations are equivalent for a stated optimisation task when a specified correspondence maps feasible choices to feasible choices, preserves the relevant objective values, and allows an optimum or unboundedness certificate to be interpreted back in the original variables. An extension can have several representations of the same original choice, so equivalence need not mean a one-to-one coordinate map.

Introducing a slack $s=b-a^Tx\\ge0$ replaces $a^Tx\\le b$ by $a^Tx+s=b$ without changing the original choices. Conversely the equality and $s\\ge0$ imply the original inequality. This short two-direction proof should accompany less familiar reformulations.

A free variable can be represented as $x=u-v$ with $u,v\\ge0$. Every real $x$ has such a representation, for example using its positive and negative parts, but the representation is not unique: adding the same nonnegative number to both $u$ and $v$ leaves $x$ unchanged. The lifted variables are computational devices, not additional physical decisions.

**Example 1.8 (Relaxation changes the permitted decisions).** Suppose two indivisible choices satisfy
$$
2x+2y\\le3,\\qquad x,y\\in\\{0,1\\},
$$
and the objective is maximise $x+y$. The integer optimum is1: choosing both violates the capacity, while either single choice is feasible. Replacing the binary restrictions by $0\\le x,y\\le1$ permits $(1,1/2)$, with value $3/2$. The resource inequality proves that no relaxed value exceeds $3/2$, so this is the relaxed optimum.

The relaxation gives an upper bound on the integer maximisation value, because it enlarges the feasible set. It is not an equivalent formulation and does not authorize taking half of an indivisible choice. Rounding a relaxed optimum may destroy feasibility or optimality; such an operation needs its own argument.

## A reliable modelling workflow

Write variable definitions and units first. State whether levels are divisible, nonnegative, bounded, or free. Translate each verbal restriction separately, explaining its direction. Then check a simple admissible choice, a simple forbidden choice, and any zero or limiting cases. These checks expose sign and unit mistakes, though they do not replace a proof that the formulation represents the intended choices.

After solving, substitute the proposed point into every original constraint. Report the objective with its units and provide a bound, ray, or infeasibility argument supporting the conclusion. If a numerical routine returns an approximate point, distinguish a tolerance-based feasibility check from exact feasibility. A tiny violation may matter when the mathematical requirement is hard, or may reflect uncertain input; that interpretation belongs to the model.

Finally, say what is not represented. Linear coefficients assume proportionality over the declared range. Fixed setup costs, products of decisions, and economies of scale usually need additional variables or a different problem class. A careful linear model is valuable because its assumptions are explicit, not because every decision problem is linear.

## Absolute deviations can still have a linear model

A nonlinear-looking objective can sometimes be represented by extra linear inequalities. Suppose given real data $a_i\\in\\mathbb R^n,b_i$ define residuals $r_i=a_i^Tx-b_i$, and the task is to minimise $\\sum_i|r_i|$ over a polyhedral domain for $x$. Introduce variables $t_i$ and minimise $\\sum_i t_i$ subject to
$$
t_i\\ge a_i^Tx-b_i,\\qquad
t_i\\ge-(a_i^Tx-b_i).
$$
These inequalities imply $t_i\\ge|r_i|\\ge0$, so explicit nonnegativity of $t_i$ is redundant but harmless.

For every admissible $x$, choosing $t_i=|r_i|$ is feasible and makes the extended objective equal the intended objective. Conversely, every extended feasible point has objective at least $\\sum_i|r_i|$ at its projected $x$. Thus the two problems have the same infimum, and any attained extended optimum projects to an original optimum. At an optimum, each $t_i$ must equal $|r_i|$, because otherwise decreasing it to that value preserves feasibility and strictly lowers the sum.

This argument proves the formulation by two inequalities and an attaining choice. It does not say that the graph $t_i=|r_i|$ itself is an affine set. The epigraph inequalities are sufficient because minimisation pushes the auxiliary variables down. Maximising the same auxiliary sum without upper bounds would be unbounded and would not represent maximisation of the absolute residuals. The direction of optimisation is part of the reformulation proof.

No statistical interpretation follows automatically. Whether absolute deviations are suitable for a measured application depends on its noise and loss assumptions; the linear-programming argument establishes only the mathematical equivalence of the stated objectives.

## Exercises

### Exercise 1.1 — Checking feasibility
<a id="linear-models-graphical-method-ex-1"></a>

For Example 1.3, test $(2,1)$ and $(2,2)$ against every constraint and give both objective values.

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate both resource rows.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** An objective value does not establish feasibility.

</details>
<details>
<summary>Solution</summary>

**Solution.** At $(2,1)$ the row values are3 and5, so it is feasible with value8. At $(2,2)$ the second row is6>5, so it is infeasible even though its objective value is10. An infeasible high value is not an achievable bound.

</details>

### Exercise 1.2 — A weighted certificate
<a id="linear-models-graphical-method-ex-2"></a>

Maximise $2x+y$ over $x+y\\le3$, $x\\le2$, $x,y\\ge0$. Prove the optimum.

<details>
<summary>Hint 1</summary>

**Hint.** Add the two upper bounds.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Find a point attaining equality in both.

</details>
<details>
<summary>Solution</summary>

**Solution.** Adding gives $2x+y\\le5$. The point $(2,1)$ satisfies both constraints tightly and attains5. Equality forces $x=2$ and $x+y=3$, so the optimiser is unique.

</details>

### Exercise 1.3 — A minimisation certificate
<a id="linear-models-graphical-method-ex-3"></a>

Minimise $x+2y$ subject to $x+y\\ge3$, $y\\ge1$, $x,y\\ge0$.

<details>
<summary>Hint 1</summary>

**Hint.** Combine the two lower bounds.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Check whether their equality point is nonnegative.

</details>
<details>
<summary>Solution</summary>

**Solution.** The objective is $(x+y)+y\\ge3+1=4$. Equality is attained at $(2,1)$, which is feasible. Both lower bounds must be equalities for any optimum, hence that point is unique.

</details>

### Exercise 1.4 — An inconsistent model
<a id="linear-models-graphical-method-ex-4"></a>

Show that $x+y\\le1$ and $x+y\\ge2$ cannot hold simultaneously.

<details>
<summary>Hint 1</summary>

**Hint.** Compare their bounds on the same expression.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** No variable sign assumption is needed.

</details>
<details>
<summary>Solution</summary>

**Solution.** A point satisfying both would imply $2\\le x+y\\le1$, which is impossible. Equivalently, subtracting the first upper bound from the second requirement gives $0\\ge1$. The system is infeasible regardless of the objective.

</details>

### Exercise 1.5 — A flat optimum
<a id="linear-models-graphical-method-ex-5"></a>

Maximise $x+y$ over $x,y\\ge0$, $x+y\\le4$. Describe every optimiser.

<details>
<summary>Hint 1</summary>

**Hint.** The sole resource row is already an objective bound.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Find all feasible points attaining that bound.

</details>
<details>
<summary>Solution</summary>

**Solution.** The maximum is4, and the optimal set is the entire segment $\\{(t,4-t):0\\le t\\le4\\}$. The value is unique as a number, but the decision is not unique.

</details>

### Exercise 1.6 — A nonlinearity test
<a id="linear-models-graphical-method-ex-6"></a>

Explain why $xy\\le1$ with $x,y\\ge0$ is not a linear-programming constraint, and show its feasible set is not convex.

<details>
<summary>Hint 1</summary>

**Hint.** Use two feasible points with reversed coordinates.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Test their midpoint.

</details>
<details>
<summary>Solution</summary>

**Solution.** The product involves two decisions. Points $(2,1/2)$ and $(1/2,2)$ satisfy it, but their midpoint $(5/4,5/4)$ has product $25/16>1$. Thus the set is not convex and cannot equal an intersection of affine half-spaces.

</details>

### Exercise 1.7 — A slack correspondence
<a id="linear-models-graphical-method-ex-7"></a>

Prove that $2x-y\\le7$ is equivalent to existence of $s\\ge0$ with $2x-y+s=7$.

<details>
<summary>Hint 1</summary>

**Hint.** Define the slack from a feasible original point.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Read the inequality back from the equality.

</details>
<details>
<summary>Solution</summary>

**Solution.** Given the inequality, set $s=7-2x+y\\ge0$. Conversely the equality gives $2x-y=7-s\\le7$. The original feasible choices are exactly the projection of the extended feasible choices.

</details>

### Exercise 1.8 — Changing units
<a id="linear-models-graphical-method-ex-8"></a>

A resource row is $2x+3y\\le5$ in hours. Rewrite it in minutes and explain why $120x+180y\\le5$ is wrong.

<details>
<summary>Hint 1</summary>

**Hint.** Convert the right-hand side too.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Every term in a sum must have the same units.

</details>
<details>
<summary>Solution</summary>

**Solution.** The equivalent minute row is $120x+180y\\le300$. Keeping5 on the right changes the capacity from five hours to five minutes and therefore changes the feasible set.

</details>

### Exercise 1.9 — An improving ray
<a id="linear-models-graphical-method-ex-9"></a>

For $P=\\{x,y\\ge0:x-y\\le1\\}$, show that maximising $x+y$ is unbounded.

<details>
<summary>Hint 1</summary>

**Hint.** Start at the origin.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Increase both coordinates equally.

</details>
<details>
<summary>Solution</summary>

**Solution.** The origin is feasible and $(t,t)$ satisfies $x-y=0\\le1$ for every $t\\ge0$. Its objective is $2t\\to\\infty$. Thus the feasible ray proves unboundedness of this objective.

</details>

### Exercise 1.10 — Relaxation direction
<a id="linear-models-graphical-method-ex-10"></a>

Explain which bound a continuous relaxation supplies for an integer minimisation problem, and whether feasibility of the relaxation proves integer feasibility.

<details>
<summary>Hint 1</summary>

**Hint.** Compare the feasible sets.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use an equation that admits a fractional point only.

</details>
<details>
<summary>Solution</summary>

**Solution.** The enlarged relaxed set can only decrease the minimum, so its finite optimum is a lower bound for the integer optimum. Relaxed feasibility does not prove integer feasibility: $2x=1$, $x\\in\\mathbb Z$ is infeasible, while its real relaxation has $x=1/2$.

</details>

## Sources

- Dimitris Bertsimas and John N. Tsitsiklis, *Introduction to Linear Optimization*, Athena Scientific, 1997. [Author book listing](https://web.mit.edu/jnt/www/home.html) and [MIT course reading guide](https://ocw.mit.edu/courses/15-093j-optimization-methods-fall-2009/pages/readings/).
- Jiří Matoušek and Bernd Gärtner, [Understanding and Using Linear Programming](https://doi.org/10.1007/978-3-540-30717-4), Springer, 2007.

The exposition, proofs, and examples are original to Euler. The references provide further reading; no external text or exercise collection is reproduced.

## Summary

A linear model states decisions, domains, units, affine constraints, and an objective. Feasibility, boundedness, attainment, and uniqueness are separate questions. Worked constraint combinations provide global upper or lower certificates, while improving rays establish objective unboundedness. The next chapter develops the polyhedral geometry that justifies vertex methods.
`;export{e as default};