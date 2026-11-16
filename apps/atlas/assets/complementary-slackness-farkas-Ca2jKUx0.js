var e=`---
parent_id: book-linear-programming-optimisation
chapter_id: complementary-slackness-farkas
title: "Complementary Slackness and Farkas' Lemma"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Complementary Slackness and Farkas' Lemma

A duality gap is a sum of nonnegative terms. That elementary observation identifies which constraints can be loose at an optimum and which variables can be positive. A different certificate, supplied by Farkas' lemma, proves that a system has no feasible point at all. These certificates answer different questions: complementarity presupposes feasibility of a pair, while an infeasibility multiplier rules out every proposed primal point.

Read [duality theory](duality-theory.md), especially the proved finite-cone separation lemma. We continue with exact real data and explicitly state whether variables are free or nonnegative. A change in those domains changes the certificate's coefficient conditions.

## Complementarity in standard form

**Definition 8.1 (Dual slack and complementarity).** For the pair
$$
\\max c^Tx,\\quad Ax=b,\\quad x\\ge0,
\\qquad
\\min b^Ty,\\quad A^Ty\\ge c,
$$
the dual slack is $s=A^Ty-c\\ge0$. A feasible pair is complementary when $x_js_j=0$ for every $j$.

**Theorem 8.2 (Complementary-slackness characterisation).** A primal-feasible $x$ and dual-feasible $y$ are both optimal if and only if they are complementary.

*Proof.* The gap is
$$
b^Ty-c^Tx=x^T(A^Ty-c)=\\sum_jx_js_j.
$$
Every summand is nonnegative. Thus the gap is zero exactly when every product vanishes. Zero gap gives optimality by weak duality. Conversely, if both vectors are optimal, strong duality gives equality of their values, so the sum and hence every product is zero. $\\square$

The hypotheses are indispensable. A pair of infeasible vectors can satisfy coordinatewise zero products without being meaningful optimisation solutions. Likewise, small complementarity products do not repair a large equality residual or a violated dual inequality.

A positive primal variable forces its dual slack to zero. A positive dual slack forces the corresponding primal variable to zero. The converse statements fail: both factors can be zero. No assertion that every optimal pair has exactly one positive factor in each coordinate is being made.

## Inequality constraints have two kinds of slack

For
$$
\\max\\{c^Tx:Gx\\le h,\\ x\\ge0\\},
\\qquad
\\min\\{h^Ty:G^Ty\\ge c,\\ y\\ge0\\},
$$
write the primal slack $p=h-Gx\\ge0$ and dual slack $s=G^Ty-c\\ge0$. Then
$$
h^Ty-c^Tx=y^Tp+x^Ts.
$$
The proof adds and subtracts $y^TGx$. The same nonnegative-sum argument gives complementarity conditions
$$
y_i(h_i-g_i^Tx)=0\\quad\\text{for each row }i,
\\qquad
x_j((G^Ty)_j-c_j)=0\\quad\\text{for each variable }j.
$$
These conditions can reconstruct an optimiser when some positive variables or multipliers are known. They must still be checked against every feasibility inequality.

**Example 8.3 (Recovering the matching solutions).** For the running resource model, the dual feasible point $(u,v)=(1,1)$ has both multipliers positive. Complementarity therefore forces
$x+y=4$ and $2x+y=5$, giving $x=1,y=3$. These coordinates are nonnegative and feasible, so the reconstructed pair is optimal.

Conversely, start from the primal optimum $(1,3)$. Both coordinates are positive, so dual complementarity forces
$u+2v=3$ and $u+v=2$. Solving gives $u=v=1$, which is dual feasible. Both calculations use positivity to turn selected inequalities into equalities, and then verify the remaining signs. Omitting that final verification could produce a formally solved but infeasible pair.

**Example 8.4 (Unused capacity and nonunique prices).** Maximise $x$ subject to $x\\le1$, $x\\le3$, $x\\ge0$. The dual is minimise $u+3v$ subject to $u+v\\ge1$, $u,v\\ge0$. At $x=1$, the second slack is2, forcing $v=0$. Since $x>0$, the dual inequality is tight, so $u=1$. Thus the unused row has zero multiplier.

Now replace the second bound by $x\\le1$, duplicating the first. The optimum is still $x=1$, but every $u,v\\ge0$ with $u+v=1$ is dual optimal. Both constraints are tight, yet either multiplier may be zero. Tightness does not force a positive price, and duplicate descriptions can make multiplier vectors nonunique without changing the original feasible set.

The distinction is useful in sensitivity analysis. An unused resource can have zero value for small changes in a particular region, but changes large enough to alter the active set can have a different effect. Complementarity is an exact optimal-pair relation, not an unlimited extrapolation rule.

## Farkas' alternative for nonnegative equations

**Theorem 8.5 (Farkas' lemma).** For $A\\in\\mathbb R^{m\\times n}$ and $b\\in\\mathbb R^m$, exactly one of the following systems is feasible:
$$
Ax=b,\\quad x\\ge0;
$$
$$
A^Ty\\ge0,\\quad b^Ty<0,\\quad y\\in\\mathbb R^m.
$$

*Proof.* If both were feasible, then
$b^Ty=x^TA^Ty\\ge0$, contradicting the strict inequality. If the first is infeasible, then $b$ lies outside the cone generated by the columns of $A$. That cone is finitely generated and closed by Lemma 7.5. Lemma 7.6 supplies $y$ nonnegative on every cone vector but negative on $b$. In particular its inner product with each column is nonnegative, which is exactly $A^Ty\\ge0$. Thus the second system is feasible. $\\square$

The second system is a finite witness of infeasibility. It does not require searching through all $x$. Its verification consists of a matrix-vector product, a scalar product, and sign checks. The strict negativity of $b^Ty$ distinguishes an actual contradiction from a supporting inequality that merely touches the cone.

Rank conditions are unnecessary. Zero columns, redundant rows, and inconsistent dependent rows are included. If $b=0$, the first system always has $x=0$, so no certificate with $b^Ty<0$ exists. A zero vector $y$ never proves infeasibility.

**Example 8.6 (A short infeasibility witness).** Take
$$
A=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix},
\\qquad b=(0,1)^T.
$$
The equations require $x_2=1$ and $x_1+x_2=0$, incompatible with $x_1\\ge0$. The vector $y=(1,-1)^T$ satisfies $A^Ty=(1,0)^T\\ge0$ and $b^Ty=-1<0$. Its weighted equation says $x_1=-1$, giving the same contradiction. The certificate identifies the reason without any objective function.

Scaling $y$ by a positive scalar preserves both certificate signs. A normalisation, such as $\\|y\\|_1=1$, can improve comparisons between displayed certificates, but is a convention rather than part of the theorem.

## Free variables change the coefficient condition

**Theorem 8.7 (Inequality alternative with free variables).** Exactly one of
$$
Gx\\le h,\\qquad x\\in\\mathbb R^n,
$$
and
$$
y\\ge0,\\qquad G^Ty=0,\\qquad h^Ty<0
$$
is feasible.

*Proof.* Write $x=u-v$ with $u,v\\ge0$ and add slack $w\\ge0$. The first system is equivalent to
$Gu-Gv+w=h$. Apply Theorem 8.5 to the column matrix $(G,-G,I)$. Its certificate requires $G^Ty\\ge0$, $-G^Ty\\ge0$, and $y\\ge0$. The first two inequalities are exactly $G^Ty=0$. The scalar contradiction is $h^Ty<0$. The transformation is feasible in both directions, so the alternatives are exactly those stated. $\\square$

If the original $x$ is restricted to $x\\ge0$, the matrix is instead $(G,I)$ and the certificate requires $G^Ty\\ge0$, not equality. Nonnegative variables allow a nonnegative weighted coefficient row to give a contradiction; free variables can make a nonzero coefficient expression arbitrarily negative, so exact cancellation is necessary.

**Example 8.8 (Adding inequalities to obtain impossibility).** Consider free $x,y$ with
$$
x+y\\le1,\\qquad -x-y\\le-2.
$$
Multipliers $(1,1)$ are nonnegative, cancel both variable coefficients, and give right-hand side $-1$. The aggregate is $0\\le-1$, impossible. If the second right-hand side were $-1$, the aggregate would be $0\\le0$, which is true and proves nothing; indeed every point on $x+y=1$ would be feasible.

This strictness is often lost when approximate routines report a tiny negative number. Whether it is genuinely negative depends on the arithmetic error and input uncertainty. A certificate is only as strong as its verified sign margin.

## From infeasibility to optimisation

To prove that a proposed upper value $\\gamma$ is impossible to exceed, one can append the desired strict improvement to the original constraints and seek a contradiction. Care is needed because Theorem 8.7 concerns non-strict inequalities; a strict objective requirement should not be silently replaced by a non-strict one at the same value. A dual feasible vector supplies the simpler direct bound $c^Tx\\le b^Ty$.

For a numerical target $\\gamma$ strictly above a certified optimum bound, appending $c^Tx\\ge\\gamma$ creates a non-strict infeasible system, and Farkas gives a certificate. The difference between “no value above the optimum” and “no value at least a strictly larger target” is logically small but mathematically important.

Conversely, feasibility can be formulated as an optimisation problem with a nonnegative artificial violation objective. Phase I minimises the total artificial variable amount. A zero optimum with all required artificial variables removed supplies feasibility; a positive certified minimum proves infeasibility. Chapter6 gives the basis details. Farkas explains why an algebraic witness exists when the original system cannot be solved.

## Approximate certificates and explicit margins

For an exact system of free-variable inequalities, a certificate needs exact coefficient cancellation. A small residual in $G^Ty$ is not enough if $x$ is unbounded: an arbitrarily large coordinate could overwhelm the negative right-hand-side margin. Component bounds permit a quantitative replacement.

Suppose a nonnegative multiplier vector gives aggregate $a^Tx\\le\\beta$, and known domain bounds are $|x_j|\\le U_j$. Then $a^Tx\\ge-\\sum_j|a_j|U_j$. Therefore
$$
\\beta<-\\sum_j|a_j|U_j
$$
is a valid contradiction. The coefficient residual is now controlled by the finite domain instead of being ignored. If coefficients or products are rounded, use rigorous upper bounds for the residual contribution and a rigorous upper bound on $\\beta$ before asserting the strict inequality.

**Example 8.9 (A robust contradiction margin).** Suppose the aggregate has $a=(10^{-6},-2\\times10^{-6})$, $\\beta=-0.01$, and $|x_1|,|x_2|\\le100$. Its left-hand side is at least $-0.0003$, while its required upper bound is $-0.01$. Since $-0.01<-0.0003$, no point in that box can satisfy the aggregate. Without the box, the same nonzero coefficient row would not prove infeasibility.

For the exact cancellation in Example 8.8, perturb each right-hand side by at most $\\epsilon$ while keeping the coefficient rows fixed. The aggregate right-hand side is at most $-1+2\\epsilon$, still strictly negative when $\\epsilon<1/2$. This is an explicit data-uncertainty margin. It should not be claimed if the coefficient cancellation is also uncertain without bounding that error.

Complementarity and Farkas' lemma turn solver output into statements that can be checked independently of a particular pivot history. Their power comes from precise domains, signs, and strictness, all of which must survive any numerical or modelling transformation.

## A certificate margin under uncertain input

A Farkas multiplier can sometimes certify not just one input but a whole uncertainty box. Suppose $A^Ty\\ge0$ and $b^Ty<0$ are exact, and perturbations satisfy
$|\\Delta A_{ij}|\\le\\eta$ and $\\|\\Delta b\\|_\\infty\\le\\epsilon$. Then
$$
|(\\Delta A^Ty)_j|\\le\\eta\\|y\\|_1,\\qquad
|\\Delta b^Ty|\\le\\epsilon\\|y\\|_1,
$$
by the triangle inequality. Consequently the same $y$ certifies infeasibility of every perturbed nonnegative system if
$$
(A^Ty)_j\\ge\\eta\\|y\\|_1\\ \\text{for all }j,
\\qquad b^Ty+\\epsilon\\|y\\|_1<0.
$$
Indeed, the first condition preserves every nonnegative coefficient product and the second preserves the strict contradictory right-hand-side sign. Applying Farkas to each perturbed system proves the conclusion.

With coefficients fixed, the allowable right-hand-side radius is therefore
$\\epsilon<-b^Ty/\\|y\\|_1$. This ratio is unchanged by positive rescaling of the certificate. The raw magnitude of $b^Ty$ alone is not comparable across differently scaled multiplier vectors.

If some coefficient products are exactly zero, an arbitrary positive coefficient uncertainty radius may destroy this particular witness. That does not prove that nearby systems become feasible; another certificate might work. It identifies the limit of the stated witness. For free-variable alternatives, uncertain exact cancellation requires even more care, or explicit finite variable bounds as in the preceding example. A robust conclusion must preserve every hypothesis, not only a visibly negative scalar.

## A short contradictory subsystem always exists

For free decisions in a finite system of inequalities, Farkas' lemma gives a particularly useful sparsity conclusion. If a system in $n$ variables is infeasible, some subset of at most $n+1$ of its inequalities is already infeasible. This is a finite-dimensional statement about the exact inequalities, including their right-hand sides. It does not say that every infeasible subset has that size or that the smallest contradictory subset is unique.

To prove it, take a certificate with nonnegative multipliers, zero weighted coefficient vector, and strictly negative weighted right-hand side. Divide by the magnitude of that negative scalar, so that the weighted right-hand side becomes minus one. The augmented vector consisting of $n$ zeros followed by minus one is then a nonnegative combination of the augmented constraint rows. These rows are vectors in a space of dimension $n+1$.

Apply the independent-support conic representation argument from the duality chapter. If the used augmented rows are dependent, subtract a suitable multiple of a dependence from the positive coefficients until at least one becomes zero, keeping all coefficients nonnegative and preserving the represented augmented vector. Repeating leaves an independent set of at most $n+1$ rows. Their nonnegative weighted sum still reads zero less than or equal to minus one, so those rows alone contradict one another. This proves the claim without requiring a general infinite-set intersection theorem.

**Worked example: three half-planes.** In two free variables, consider the constraints that the first variable is nonnegative, the second is nonnegative, and their sum is at most minus one. Write the first two with negative coefficient rows and zero right-hand sides. Adding all three rows cancels both coefficients and gives the impossible inequality zero less than or equal to minus one. Every pair is feasible: for the pair omitting the first nonnegativity row, choose the first variable minus one and the second zero; the opposite choice works when omitting the second row; the two nonnegativity rows meet at the origin. Thus all three rows are needed here, attaining the bound for two variables.

One must include variable-domain restrictions in this bookkeeping. If a decision is declared nonnegative outside the displayed inequality list, that declaration is itself an inequality in the free-variable formulation. Counting only the displayed resource rows and ignoring the domain would misstate the subsystem bound. Equalities may be represented by two opposing inequalities, or treated through a separate elimination argument with the remaining dimension explicitly stated.

A short certificate is valuable for explaining a modelling contradiction. It identifies a sufficient conflicting group, such as a minimum production requirement, a material balance, and an insufficient capacity. It does not prove that deleting any one of these rows repairs the whole original model: other contradictory groups may remain. Nor does the elimination argument minimise the support; it only bounds it. Finding a preferred explanation, perhaps weighted by which assumptions can be changed, is a further decision problem.

Finally, numerical support reduction must preserve the strict contradiction margin. An exact zero multiplier can be removed freely. Dropping a merely small multiplier changes both the weighted coefficients and the right-hand side, and may destroy exact cancellation. The boxed residual argument earlier in this chapter gives one route to a valid approximate replacement when finite bounds are available. Otherwise retain the original exact support or report the reduction as a candidate explanation rather than a certified subsystem.

## Exercises

### Exercise 8.1 — Complementarity check
<a id="complementary-slackness-farkas-ex-1"></a>

For $\\max x_1+x_2$ subject to $x_1+x_2\\le2$, $x\\ge0$, check primal $(1,1)$ and dual multiplier1.

<details>
<summary>Hint 1</summary>

**Hint.** Write both slacks.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compute the objective gap.

</details>
<details>
<summary>Solution</summary>

**Solution.** The primal slack is0 and both dual variable slacks are $1-1=0$. The pair is feasible and complementary, with equal value2, so both are optimal.

</details>

### Exercise 8.2 — A necessary domain check
<a id="complementary-slackness-farkas-ex-2"></a>

Why does $x_js_j=0$ without primal and dual feasibility not establish optimality?

<details>
<summary>Hint 1</summary>

**Hint.** The gap proof needs nonnegative terms and the equality equations.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Construct an infeasible proposed vector.

</details>
<details>
<summary>Solution</summary>

**Solution.** For maximise x subject to $0\\le x\\le1$, propose x=2 and multiplier1. The dual slack is zero, so the product vanishes, but x violates the primal bound. Complementarity products alone do not prove feasibility or optimality.

</details>

### Exercise 8.3 — Slack and price
<a id="complementary-slackness-farkas-ex-3"></a>

In Example 8.4, explain why the second multiplier is zero when the second bound is3.

<details>
<summary>Hint 1</summary>

**Hint.** Use its positive primal slack.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Each gap summand must vanish.

</details>
<details>
<summary>Solution</summary>

**Solution.** At x=1 the second slack is2. Its contribution is2v, which must be zero in a feasible optimal pair. Since2 is positive, v=0. Tight rows do not yield the converse implication.

</details>

### Exercise 8.4 — A Farkas witness
<a id="complementary-slackness-farkas-ex-4"></a>

Show infeasibility of $x_1+x_2=-1$ with x≥0 by giving the theorem's multiplier.

<details>
<summary>Hint 1</summary>

**Hint.** There is one equality row.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A positive scalar suffices.

</details>
<details>
<summary>Solution</summary>

**Solution.** Take y=1. Then Aᵀy=(1,1)≥0 and bᵀy=-1<0. The weighted equality would equate a nonnegative sum to a negative number, impossible.

</details>

### Exercise 8.5 — Zero right-hand side
<a id="complementary-slackness-farkas-ex-5"></a>

Explain why no Farkas infeasibility witness exists for Ax=0,x≥0.

<details>
<summary>Hint 1</summary>

**Hint.** Exhibit a feasible point.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Check the strict scalar condition.

</details>
<details>
<summary>Solution</summary>

**Solution.** The point x=0 is feasible for every A. Also bᵀy=0 for every y, so the certificate's strict negative inequality cannot hold. This is consistent with exclusivity.

</details>

### Exercise 8.6 — Free versus nonnegative
<a id="complementary-slackness-farkas-ex-6"></a>

Derive the Farkas certificate for Gx≤h when x≥0, and contrast it with free x.

<details>
<summary>Hint 1</summary>

**Hint.** Add nonnegative slack.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Only a free split supplies both G and -G columns.

</details>
<details>
<summary>Solution</summary>

**Solution.** The nonnegative formulation is Gx+w=h, so the alternative has y≥0,Gᵀy≥0,hᵀy<0. For free x, splitting x=u-v adds both coefficient signs and forces Gᵀy=0. Equality of the aggregate coefficient row is not required in the nonnegative case.

</details>

### Exercise 8.7 — Strictness matters
<a id="complementary-slackness-farkas-ex-7"></a>

For x≤1 and -x≤-1, test multipliers(1,1). Why is this no infeasibility proof?

<details>
<summary>Hint 1</summary>

**Hint.** Add the two rows.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Find a feasible point.

</details>
<details>
<summary>Solution</summary>

**Solution.** The aggregate is0≤0, not a contradiction. The multiplier is nonnegative and cancels coefficients but has right-hand side zero, failing strict negativity. The point x=1 is feasible.

</details>

### Exercise 8.8 — A boxed residual certificate
<a id="complementary-slackness-farkas-ex-8"></a>

An aggregate is $0.002x_1-0.001x_2\\le-1$, with |x1|≤100,|x2|≤200. Prove infeasibility.

<details>
<summary>Hint 1</summary>

**Hint.** Bound the smallest possible left-hand side.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare it with -1.

</details>
<details>
<summary>Solution</summary>

**Solution.** The left-hand side is at least $-0.002(100)-0.001(200)=-0.4$. It cannot be at most -1. The finite bounds turn the nonzero coefficient residual into a valid contradiction.

</details>

### Exercise 8.9 — Recovering a dual pair
<a id="complementary-slackness-farkas-ex-9"></a>

For the running model's primal optimum(1,3), use complementarity to find its dual multipliers.

<details>
<summary>Hint 1</summary>

**Hint.** Both decision coordinates are positive.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Solve the two tight dual inequalities.

</details>
<details>
<summary>Solution</summary>

**Solution.** Complementarity gives u+2v=3 and u+v=2, so v=1,u=1. They are nonnegative, hence dual feasible. Their value4+5=9 matches the primal value and proves the certificate.

</details>

### Exercise 8.10 — Right-hand-side robustness
<a id="complementary-slackness-farkas-ex-10"></a>

The cancelled aggregate in Example 8.8 has RHS -1. If each of its two right-hand sides changes by at most0.1, does its certificate remain valid? State the fixed-data assumption.

<details>
<summary>Hint 1</summary>

**Hint.** Maximise the possible RHS increase.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The coefficient cancellation must remain exact.

</details>
<details>
<summary>Solution</summary>

**Solution.** The new aggregate RHS is at most -1+0.2=-0.8<0, so the contradiction remains. This assumes the coefficient rows are unchanged and the same nonnegative multipliers still cancel them; uncertain coefficients require an additional bound.

</details>

## Sources

- Dimitris Bertsimas and John N. Tsitsiklis, *Introduction to Linear Optimization*, Athena Scientific, 1997. [Author book listing](https://web.mit.edu/jnt/www/home.html) and [MIT course reading guide](https://ocw.mit.edu/courses/15-093j-optimization-methods-fall-2009/pages/readings/).
- Jiří Matoušek and Bernd Gärtner, [Understanding and Using Linear Programming](https://doi.org/10.1007/978-3-540-30717-4), Springer, 2007.

The exposition, proofs, and examples are original to Euler. The references provide further reading; no external text or exercise collection is reproduced.

## Summary

Complementary slackness characterises optimal feasible pairs through a nonnegative gap decomposition. Farkas' alternatives provide finite infeasibility witnesses, with coefficient conditions determined by variable domains. Strict contradiction margins and residual bounds matter in numerical certificates. Sensitivity analysis next studies how these certificates and their values change as the data move.
`;export{e as default};