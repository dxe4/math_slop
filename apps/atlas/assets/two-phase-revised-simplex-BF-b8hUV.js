var e=`---
parent_id: book-linear-programming-optimisation
chapter_id: two-phase-revised-simplex
status: draft
title: "Two-Phase and Revised Simplex"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Two-Phase and Revised Simplex


## Finding a start and avoiding a full tableau

A simplex dictionary assumes a feasible basis is already known. That assumption is harmless for some slack-variable models and false for many equality systems. Two-phase simplex constructs the missing start, while revised simplex computes only the basis information needed for a pivot. The two ideas address different questions and can be combined.

Required preparation is [basic feasible solutions](standard-form-basic-feasible-solutions.md), [simplex dictionaries](simplex-method.md) and [degeneracy and Bland's rule](degeneracy-cycling-bland.md). Our original problem is
$$\\max c^{\\mathsf T}x,\\qquad Ax=b,\\quad x\\ge0.$$
We allow redundant rows during preprocessing, then retain a full-row-rank representation before ordinary revised pivots. Every row operation must also transform its right-hand side and any certificate mapping.

A feasible vector and a feasible basis are different inputs. A vector might have many positive entries and not be basic. Conversely an invertible submatrix might yield negative basic values. A starting procedure must produce both feasibility and independent basis columns, or explain mathematically why the original constraints have no feasible point.

## Phase I as an exact auxiliary problem

Multiply any equation with negative right-hand side by minus one, giving $\\widetilde A=D A$, $\\widetilde b=D b\\ge0$ with a diagonal sign matrix D. Add one nonnegative artificial variable for each row:
$$\\widetilde Ax+a=\\widetilde b,\\qquad x\\ge0,\\quad a\\ge0.$$
The artificial identity columns give the explicit feasible starting basis $x=0$, $a=\\widetilde b$.

**Definition 6.1 (Phase-I objective).** Phase I minimises the artificial sum
$\\rho=\\mathbf1^{\\mathsf T}a$, or equivalently maximises $-\\rho$. The artificial variables belong to an auxiliary problem, not to the original decision model. Their initial basic values may be zero, so anti-cycling rules are still relevant.

**Theorem 6.2 (The zero-artificial criterion).** The original equations have a nonnegative solution if and only if the Phase-I optimal value is zero. A strictly positive attained Phase-I value proves original infeasibility.

*Proof.* Every artificial vector is nonnegative, so $\\rho\\ge0$. An original feasible x gives the auxiliary feasible pair $(x,0)$, attaining zero and making zero the minimum. Conversely an auxiliary feasible pair with zero sum has every artificial component zero; its original variables solve $\\widetilde Ax=\\widetilde b$, hence $Ax=b$. A positive optimum excludes such a pair. ∎

An exact feasible-start simplex run with Bland's rule terminates on this auxiliary problem. Its minimisation objective is bounded below by zero, so it cannot have an improving unbounded minimisation ray. The cited finite-termination theorem therefore reaches an optimum. This supplies an attainment argument for the particular algorithmic construction, rather than relying on an unexplained assertion that every nonnegative objective reaches its infimum.

A floating-point artificial sum close to zero is evidence with a scale, not exact feasibility. Recompute $\\widetilde Ax-\\widetilde b$ after discarding artificial components. Tiny cancellation can hide a materially violated row, especially if units differ. An absolute threshold on the artificial sum also depends on row scaling: artificial entries have their rows' units, so meaningful numerical implementations scale the auxiliary model deliberately and preserve the original residuals.

**Example 6.3 (A complete feasible Phase I).** Consider
$$x_1+x_2=3,\\qquad x_1-x_2=1,\\qquad x\\ge0.$$
The artificial start is $(a_1,a_2)=(3,1)$ and
$$a_1=3-x_1-x_2,\\quad a_2=1-x_1+x_2,\\quad
-\\rho=-4+2x_1.$$
Enter $x_1$. The ratios are three and one, so $a_2$ leaves at one. Substitution gives
$$x_1=1+x_2-a_2,\\qquad
a_1=2-2x_2+a_2,\\qquad -\\rho=-2+2x_2-2a_2.$$
Next $x_2$ enters and $a_1$ leaves at one. The resulting original variables are $(2,1)$ and both artificials vanish. The remaining dictionary is
$$x_1=2-\\tfrac12a_1-\\tfrac12a_2,\\qquad
x_2=1-\\tfrac12a_1+\\tfrac12a_2.$$
Deleting artificial columns leaves a feasible original basis. If Phase II maximises $3x_1+2x_2$, the unique feasible original vector has value eight. Restoring that objective gives the correct original value; retaining $-\\rho$ would solve a different question.

## A positive Phase-I value produces a checkable contradiction

At an optimal Phase-I basis B, let $d_B$ denote the costs of its basic columns for maximising $-\\rho$; original columns cost zero and artificial columns cost minus one. Solve $B^{\\mathsf T}y=d_B$. Nonpositive reduced costs imply
$$\\widetilde A^{\\mathsf T}y\\ge0,\\qquad y\\ge-\\mathbf1.$$
The attained objective is
$$\\widetilde b^{\\mathsf T}y=d_B^{\\mathsf T}B^{-1}\\widetilde b=-\\rho_*.$$
If $\\rho_*>0$, a putative original feasible x would give
$\\widetilde b^{\\mathsf T}y=x^{\\mathsf T}\\widetilde A^{\\mathsf T}y\\ge0$, contradicting the negative value. Thus y is already an infeasibility certificate. This deduction uses the optimal dictionary's reduced costs and elementary signs; it does not assume the general Farkas theorem proved later.

To express the certificate in original row coordinates, use $y_{\\rm original}=D y$. Then $A^{\\mathsf T}y_{\\rm original}=\\widetilde A^{\\mathsf T}y$ and $b^{\\mathsf T}y_{\\rm original}=\\widetilde b^{\\mathsf T}y$. Retaining the row transformation is essential: a certificate paired with the wrong unflipped rows can have every sign reversed.

**Example 6.4 (An exact infeasibility certificate).** Let
$$x_1+x_2=1,\\qquad x_1+2x_2=3,\\qquad x\\ge0.$$
The auxiliary objective is $-\\rho=-4+2x_1+3x_2$. Enter $x_2$; the ratios are one and $3/2$, so $a_1$ leaves. The new dictionary gives
$$x_2=1-x_1-a_1,\\qquad a_2=1+x_1+2a_1,\\qquad
-\\rho=-1-x_1-3a_1.$$
It is optimal for Phase I and has $\\rho_*=1$. The basis $(x_2,a_2)$ has costs $(0,-1)$. Its dual equations give $y=(2,-1)$. Directly,
$$A^{\\mathsf T}y=(1,0)\\ge0,\\qquad b^{\\mathsf T}y=-1<0.$$
No nonnegative original x can satisfy the equations. This certificate is much stronger than saying a numerical starting routine failed.

## Removing zero artificial basics

Zero artificial values do not imply that every artificial column has left the basis. Degeneracy can leave one basic at zero when Phase I finishes. It must be removed or a redundant equation identified before Phase II.

**Proposition 6.5 (Zero-artificial basis exchange).** Suppose a zero-valued basic artificial has a nonzero coefficient in its canonical row under some nonbasic original column. Exchanging those two columns gives a nonsingular basis representing the same feasible original point.

*Proof.* The nonzero canonical coefficient is the pivot entry, so the exchanged square matrix is nonsingular. Set the entering original variable to zero and the leaving artificial to zero. All old basic values retain their values because the exchange occurs at the same point; hence nonnegativity and equations are preserved. This is a rebasising at zero, not an assertion of positive objective progress. ∎

If no original nonbasic coefficient is nonzero, the row also has zero coefficients in the other basic original columns, by canonical form. With the artificial zero and the other artificial columns removed or being removed, it expresses an original row dependence and can be dropped as redundant after recording the corresponding row combination. Its transformed right-hand side is zero at the feasible point. For full-row-rank original A this no-coefficient case cannot occur: an invertible row transformation would otherwise produce a zero row in the original-column matrix.

This cleanup distinguishes a redundant equation from an infeasible equation. A row equivalent to $0=0$ can be removed; one equivalent to $0=1$ is a contradiction. Dropping a troublesome row without its transformed RHS and dependence argument can turn an infeasible original model into a feasible different one.

## Revised simplex as basis linear algebra

A full tableau stores $B^{-1}A$, which can be dense even when A is sparse. Revised simplex instead stores or updates a factorisation of B and solves selected systems. It has the same exact mathematical pivot; it changes how the information is obtained.

**Definition 6.6 (Revised-simplex quantities).** For a feasible basis B, solve
$$B\\bar b=b,\\qquad B^{\\mathsf T}y=c_B.$$
For a candidate nonbasic column $a_j$, compute
$$\\bar c_j=c_j-a_j^{\\mathsf T}y,\\qquad Bd=a_j.$$
Then d is its dictionary column and y gives the current basis objective prices. Neither calculation requires forming the inverse explicitly.

**Proposition 6.7 (A revised pivot is the tableau pivot).** With those quantities, setting $x_j=\\theta$ and old basic values $\\bar b-\\theta d$ preserves the equality system, and its objective change is $\\theta\\bar c_j$.

*Proof.* The original rows become
$B(\\bar b-\\theta d)+a_j\\theta
=B\\bar b-\\theta Bd+a_j\\theta=b$.
The objective changes by
$\\theta(c_j-c_B^{\\mathsf T}d)$.
Since $c_B^{\\mathsf T}d=y^{\\mathsf T}Bd=y^{\\mathsf T}a_j$, this equals $\\theta\\bar c_j$. The usual nonnegative ratio test supplies the maximal feasible theta. ∎

**Example 6.8 (The running LP by solves).** For the book's running model,
$$A=\\begin{pmatrix}1&1&1&0\\\\2&1&0&1\\end{pmatrix},
\\quad b=(4,5),\\quad c=(3,2,0,0),$$
use basis $(x,s_1)$, whose matrix is
$B=\\begin{pmatrix}1&1\\\\2&0\\end{pmatrix}$.
Solving gives $\\bar b=(5/2,3/2)$ and $y=(0,3/2)$. For entering column $a_y=(1,1)$, the reduced cost is $2-3/2=1/2$, and $Bd=a_y$ gives $d=(1/2,1/2)$. The ratios are five and three, so $s_1$ leaves at theta three. The new values are $x=1,y=3$, objective nine.

The new basis gives prices $(1,1)$. Original resource loads are four and five, and the dual coefficient bounds are $(3,2)$, so primal and dual objectives both equal nine. Revised arithmetic recovered the same exact certificate as a tableau without storing every transformed column.

## Numerical work and termination contracts

Changing one column of B permits factor updates, but repeated updates accumulate error and may create fill. Periodically refactorising from the current original columns can restore a reliable basis representation. It does not change the intended basis. Choosing a singular or badly conditioned pivot is a different event and needs explicit failure handling.

Check three kinds of residual: $B\\bar b-b$, $B^{\\mathsf T}y-c_B$, and $Bd-a_j$. A tiny residual in one solve does not certify the others, and conditioning controls how they affect basic values and reduced-cost signs. Near zero, a sign decision can determine a different pivot path. Exact rational examples are useful because they expose the intended basis and objective independently of those arithmetic thresholds.

Phase II must restore the original c for every variable still present, recompute the basic objective and reduced costs, and prohibit artificial variables from returning. A finite penalty called big M is not a literal symbolic infinity. If too small it can permit positive artificial use in the optimum; if too large it worsens scaling. Two-phase simplex separates feasibility from preference and avoids requiring a guessed magnitude to dominate all possible original gains.

A reproducible calculation records the row signs and deletions, auxiliary objective, initial artificial basis, Phase-I optimum or contradiction vector, cleanup exchanges, Phase-II costs, basis indices and solve residuals. Report feasibility failure, optimality, an improving ray and a resource limit separately. The next [duality chapter](duality-theory.md) explains why the prices and bounds recovered here belong to a general primal–dual theorem.

## Reduced costs are signs with a numerical margin

The exact formula $\\bar c_j=c_j-a_j^{\\mathsf T}y$ compares two quantities that can nearly cancel. A computed positive value close to the accumulated rounding scale should be treated differently from a well-separated positive value. If a verified solve and dot-product bound give $\\bar c_j$ inside an interval, a positive lower endpoint certifies eligibility and a nonpositive upper endpoint certifies ineligibility. An interval crossing zero leaves the sign unresolved. This is a mathematical margin, whereas one fixed tolerance is an implementation policy whose units and scale must be supplied.

The ratio test has the same issue. A tiny positive pivot coefficient can create a very large ratio, while a small computed negative basic value may indicate a feasibility error rather than a permissible original state. Stable factorisation and residual recomputation help diagnose the arithmetic. They do not license replacing a negative basic value by zero without accounting for the resulting perturbation.

For a small exact teaching case, retain both the tableau dictionary and the revised solves. They provide two ways to inspect the same algebraic identities, though they are not independent models. A mismatch can locate an ordering, transpose or objective-reset error. Agreement confirms that finite case; the general equivalence is established by the revised-pivot proposition rather than the matching displays.

## Row scaling changes the Phase-I search, not its zero criterion

Artificial variables are measured in the units of the equations to which they are attached. Multiplying one equation by a positive factor changes the numerical meaning of its artificial variable. Consequently the positive value of a sum-of-artificials objective is not a formulation-independent physical measure of inconsistency. Its zero versus positive distinction, under an exactly solved auxiliary problem, is the property used for feasibility.

A weighted version makes the logic explicit. Assign every artificial coordinate a strictly positive weight and minimise the weighted sum over an auxiliary feasible set that represents the original equations. Nonnegativity proves that the objective is nonnegative. It is zero exactly when every artificial coordinate is zero, because a positive weight cannot hide a positive artificial value. Therefore an attained zero minimum has the same feasibility interpretation for every such choice of weights. A zero weight would invalidate the argument for that coordinate, and a negative weight would invalidate the lower bound.

**Worked example: inconsistent copies.** Suppose a nonnegative decision must equal both one and two. After any appropriate auxiliary construction, no point can have both artificial corrections zero. Scaling the second equation by one hundred changes the artificial amount needed to correct that row, and changes which violation a weighted minimum prefers. It cannot make the original two equalities consistent. An exact positive lower bound, accompanied by the auxiliary dual certificate, still proves infeasibility. The reported objective magnitude should be interpreted with its row scaling, not as an intrinsic distance between the two original physical statements.

Revised simplex introduces a second distinction: the mathematical basis matrix and its stored factorisation are different objects. Updating a factorisation is a way to apply the same inverse action economically. Recomputing the factorisation from the current basis changes no exact dictionary. In finite precision it can reduce accumulated solve error, but does not make an ill-conditioned basis well-conditioned. A reliable numerical account therefore separates an invalid basis, an inaccurate factorisation, and a genuinely sensitive linear solve.

Phase I ends with a feasibility decision about the original system. Phase II then restores the original costs and recomputes reduced costs for the cleaned basis. Artificial costs and their scaling have no authority to remain in the original economic objective. Keeping both objectives explicitly named prevents a successful auxiliary calculation from being mistaken for an optimum of the intended model.

## Exercises

### Exercise 1: Auxiliary start
<a id="two-phase-revised-simplex-ex-1"></a>

For equations $-x_1+x_2=-2$ and $x_1+3x_2=4$, construct the nonnegative artificial start.

<details>
<summary>Hint 1</summary>

**Hint.** Flip negative-right-hand-side rows.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Then use identity artificial columns.

</details>

<details>
<summary>Solution</summary>

**Solution.** Use $x_1-x_2+a_1=2$ and $x_1+3x_2+a_2=4$. With original variables zero, $(a_1,a_2)=(2,4)$ is the feasible artificial basis. The sign change must be retained when interpreting certificates.

</details>

### Exercise 2: Zero sum
<a id="two-phase-revised-simplex-ex-2"></a>

Why does $\\sum_i a_i=0$ imply every artificial value vanishes?

<details>
<summary>Hint 1</summary>

**Hint.** Every artificial variable is nonnegative.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A positive component would force a positive sum.

</details>

<details>
<summary>Solution</summary>

**Solution.** Nonnegative summands cannot cancel. If one were positive, the sum would be positive. Therefore each is zero and the remaining x satisfies the original equations exactly.

</details>

### Exercise 3: Positive sum certificate
<a id="two-phase-revised-simplex-ex-3"></a>

Check $y=(2,-1)$ for the infeasible worked system.

<details>
<summary>Hint 1</summary>

**Hint.** Multiply by the transpose of A.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Pair with b separately.

</details>

<details>
<summary>Solution</summary>

**Solution.** The products are $A^{\\mathsf T}y=(1,0)$ and $b^{\\mathsf T}y=-1$. A nonnegative feasible x would make $b^{\\mathsf T}y=x^{\\mathsf T}A^{\\mathsf T}y$ nonnegative, a contradiction.

</details>

### Exercise 4: Zero artificial cleanup
<a id="two-phase-revised-simplex-ex-4"></a>

Must a zero basic artificial be kept in Phase II?

<details>
<summary>Hint 1</summary>

**Hint.** A zero value and its basis membership are different facts.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Seek an original nonbasic pivot or a redundant row.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. Exchange it with an original column having a nonzero canonical coefficient while keeping the represented point fixed, or justify a redundant row if all such coefficients vanish. Deleting the variable without restoring a valid original basis is insufficient.

</details>

### Exercise 5: Reduced cost
<a id="two-phase-revised-simplex-ex-5"></a>

If $c_j=7$, $a_j=(2,1)$ and current y=(1,3), compute its maximisation reduced cost.

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate the price of its column.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Subtract that price from its direct objective coefficient.

</details>

<details>
<summary>Solution</summary>

**Solution.** The column price is $2+3=5$, so the reduced cost is two. It is eligible under a positive-reduced-cost primal rule, subject to the feasibility direction and ratio test.

</details>

### Exercise 6: Revised direction
<a id="two-phase-revised-simplex-ex-6"></a>

For $B=\\operatorname{diag}(2,4)$ and $a_j=(2,8)$, find d and the maximal step from basic values (3,5).

<details>
<summary>Hint 1</summary>

**Hint.** Solve Bd=a_j.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use the smaller blocking ratio.

</details>

<details>
<summary>Solution</summary>

**Solution.** The direction is $(1,2)$. The ratios are three and $5/2$, so the maximal step is $5/2$ and the second basic variable leaves.

</details>

### Exercise 7: Resetting the objective
<a id="two-phase-revised-simplex-ex-7"></a>

Why must Phase-II reduced costs be recomputed after Phase I?

<details>
<summary>Hint 1</summary>

**Hint.** The auxiliary and original objectives have different coefficients.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The same feasible basis can have a different improving direction.

</details>

<details>
<summary>Solution</summary>

**Solution.** Phase I optimises minus the artificial sum, not the original preference. Retain the feasible original basis but solve the basis-price equations with original basic costs and recompute every candidate reduced cost. Otherwise the run continues solving the auxiliary objective.

</details>

### Exercise 8: Finite big M
<a id="two-phase-revised-simplex-ex-8"></a>

Why is an unspecified huge penalty not an exact feasibility theorem?

<details>
<summary>Hint 1</summary>

**Hint.** A finite number is not symbolic infinity.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Its relation to all possible objective gains was not bounded.

</details>

<details>
<summary>Solution</summary>

**Solution.** A finite penalty may be outweighed by original gains, while excessively large coefficients worsen numerical scaling. Without a proved dominance threshold and arithmetic analysis it does not establish zero artificial use. Two phases make the feasibility objective explicit.

</details>

### Exercise 9: Row deletion
<a id="two-phase-revised-simplex-ex-9"></a>

Distinguish transformed rows $0=0$ and $0=2$ during preprocessing.

<details>
<summary>Hint 1</summary>

**Hint.** One is redundant and the other contradictory.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Check both coefficients and the transformed RHS.

</details>

<details>
<summary>Solution</summary>

**Solution.** The first imposes no restriction and can be removed with its dependence record. The second makes the system infeasible. Deleting both as zero-coefficient rows would change the mathematical model.

</details>

### Exercise 10: Certificates and tolerances
<a id="two-phase-revised-simplex-ex-10"></a>

A solver reports artificial sum 10^-10. What additional information is needed before treating the original model as feasible?

<details>
<summary>Hint 1</summary>

**Hint.** Inspect original residuals and nonnegativity.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** State row scales, arithmetic and the required tolerance.

</details>

<details>
<summary>Solution</summary>

**Solution.** Recompute Ax-b in the original units, inspect negative components, record row scaling and rounding allowances, and compare with a declared feasibility contract. A small auxiliary sum alone is not an exact zero certificate or a universal implementation tolerance.

</details>


## Sources

Bertsimas and Tsitsiklis, *Introduction to Linear Optimization* ([author's book page](https://www.mit.edu/~dbertsim/books.html)), is a comparison reference for simplex, duality and network optimisation. Matoušek and Gärtner, [Understanding and Using Linear Programming](https://doi.org/10.1007/978-3-540-30717-4), gives a complementary geometric treatment. The exposition, calculations and exercise solutions here are original; external results are identified where their full proofs are not supplied. The Bland termination theorem used to finish Phase I is cited in the preceding chapter. The feasibility criterion, contradiction certificate and revised-pivot identities are proved here; numerical factor-update stability is further reading, not inferred from these exact identities.

## Summary

Phase I introduces a feasible artificial basis and turns original feasibility into the zero-artificial criterion. A positive optimum supplies a checkable contradiction, while zero artificial basics require careful cleanup. Revised simplex obtains tableau directions and prices through basis solves, with the same exact pivot and separate numerical residuals. Phase II then optimises the original objective from a valid original basis.
`;export{e as default};