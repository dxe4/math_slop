
# Degeneracy, Cycling and Bland's Rule


## A basis can change while the decision stays fixed

The simplex method moves between feasible bases. In a nondegenerate step that change also moves the decision vector and strictly improves the objective. At a degenerate vertex, several bases can describe the same point and an eligible pivot can have step length zero. This chapter explains why that distinction matters, what cycling actually repeats, and how a precise rule restores finite termination.

Required preparation is [standard form and basic feasible solutions](standard-form-basic-feasible-solutions.md) and [the simplex method](simplex-method.md). We use the maximisation convention
$$\max c^{\mathsf T}x,\qquad Ax=b,\quad x\ge0,$$
where A has full row rank m. A basis consists of m linearly independent columns. Nonbasic variables are set to zero and the basic values solve the corresponding square system. Variable indices are permanent names in a single fixed ordering.

**Definition 5.1 (Degenerate basic feasible solution).** A feasible basis is degenerate when at least one of its basic values is zero. Equivalently its represented feasible vector has fewer than m positive components. Degeneracy concerns the representation of a vertex in standard form; a nonzero diagonal pivot or a nonsingular basis does not rule it out.

Why is the component formulation equivalent? Nonbasic values are zero by definition. Every positive component must therefore be basic. There are m basic positions; fewer than m positive entries means one of those positions is zero, and conversely a zero basic position leaves at most m-1 positive entries. This simple observation lets us recognise degeneracy without confusing it with matrix singularity.

In an inequality formulation a vertex can have more active constraints than the dimension. Adding slacks turns those active inequalities into zero variables, explaining the connection. Redundant constraints can also create multiple descriptions. The correct calculation uses the actual full-row-rank standard form after any redundant rows have been identified; merely counting drawn boundary lines is unreliable.

## The ratio test with zero values included

Write a feasible dictionary as
$$x_B=\bar b-Dx_N,\qquad
z=z_0+\sum_{j\in N}\bar c_jx_j,$$
where $\bar b\ge0$. A nonbasic variable with $\bar c_j>0$ is eligible to enter. Increasing it to theta changes the basic values to $\bar b-\theta d$, where d is its dictionary column. The largest feasible step is
$$\theta_*=\min_{i:d_i>0}\frac{\bar b_i}{d_i},$$
if any positive component exists. Basic rows with $d_i\le0$ do not block the increase.

**Proposition 5.2 (When an improving pivot can stall).** If the minimum exists, it is zero exactly when some blocking row has $\bar b_i=0$. At a positive step the objective increases strictly by $\bar c_j\theta_*$. At a zero step the full decision vector is unchanged, although the basis can change.

*Proof.* Every candidate ratio is nonnegative. Its minimum is zero precisely when one has zero numerator, since all denominators used are positive. The objective change is the dictionary's linear change $\bar c_j\theta_*$. At zero the entering variable and every old basic value retain their old values; only which zero variable is called basic changes. A valid nonzero pivot exchanges independent columns, so the new basis can nevertheless be different. ∎

A zero step is feasible. Rejecting all such pivots can strand the algorithm at a nonoptimal degenerate basis. Conversely, repeatedly accepting arbitrary zero steps can fail to make progress. Neither “never pivot at zero” nor “every pivot improves the objective” is a correct general simplex rule.

If no $d_i$ is positive, the direction with entering component one, old basic components $-d$, and other nonbasic components zero is nonnegative and satisfies the homogeneous equations. It gives a feasible improving ray for every theta at least zero. An empty ratio-test list is therefore an unboundedness certificate under exact arithmetic and a feasible starting basis, not a reason to divide by a negative entry.

**Example 5.3 (A necessary zero pivot).** Consider
$$x+y+s_1=1,\qquad x+s_2=0,\qquad
\max(2x+y),\qquad x,y,s_1,s_2\ge0.$$
With basis $(s_1,s_2)$ the starting values are $(1,0)$. Entering x has column $(1,1)$ and ratios one and zero, so $s_2$ leaves with step zero. Solving the second row gives $x=-s_2$. Substitution into the first row and objective gives
$$s_1=1-y+s_2,\qquad z=y-2s_2.$$
Now y enters and $s_1$ leaves at step one. The solution is $x=0,y=1,s_1=s_2=0$, objective one. Feasibility already forces x to zero, and then y cannot exceed one, so this is globally optimal. The initial zero pivot changed the algebraic description enough to reveal the useful move.

## Multiple bases are not multiple solutions

**Example 5.4 (One vertex, two nonsingular bases).** Let
$$x_1+x_2+x_3=1,\qquad x_1+x_2+x_4=1,\qquad x\ge0.$$
At $(1,0,0,0)$, basis $\{1,3\}$ has columns $(1,1)^{\mathsf T}$ and $(1,0)^{\mathsf T}$, determinant minus one, and basic values $(1,0)$. Basis $\{1,4\}$ has determinant one and represents the same vector. Both bases are feasible and degenerate. The putative choice $\{1,2\}$ is not a basis because its two columns coincide.

This example separates three facts. A basic matrix can be perfectly nonsingular while a basic value is zero. Two feasible bases can represent the same vertex. Two different feasible vectors need not occur merely because a log shows two different basis index sets. Conversely, multiple optimal vertices concern a face of solutions, not just alternate bases at one point.

A basis log should therefore retain both its permanent column indices and the represented vector or basic values. A list of coordinates alone misses an algebraic cycle; a list of basis changes alone overstates geometric progress. The objective belongs beside both.

## Cycling and finite progress

**Definition 5.5 (Cycling).** A simplex run cycles if a feasible basis reappears after one or more pivots under the same fixed problem and selection rules. A deterministic rule then repeats the subsequent calculation. Repeated objective values alone are not cycling, and repeated points can occur through different bases without a repeated basis.

**Theorem 5.6 (Every improving-primal cycle is degenerate).** Suppose every entering variable has strictly positive reduced cost and ratio-test pivots preserve primal feasibility in exact arithmetic. If a basis repeats, every pivot between its two occurrences has zero step length.

*Proof.* The original basis determines the same basic vector and the same objective value at each occurrence. Every intermediate objective change is $\bar c_j\theta\ge0$, since $\bar c_j>0$ and $\theta\ge0$. Their sum is zero. A sum of finitely many nonnegative real numbers is zero only if each term is zero, and positive reduced cost then forces every theta to vanish. The preceding proposition makes each such step degenerate. ∎

**Corollary 5.7 (Finite termination without degeneracy).** If every feasible basis reached is nondegenerate, the exact primal simplex method with eligible positive reduced-cost entries cannot cycle and terminates after finitely many basis changes, at an optimum or with an improving ray.

*Proof.* Each completed ratio-test pivot has positive step and strictly increases the objective, so no basis can repeat. There are finitely many subsets of m columns, hence finitely many possible bases. A run cannot continue forever with distinct bases. The stopping alternatives are precisely no positive reduced cost, giving the dictionary upper-bound certificate, or an empty blocking set, giving the ray. ∎

This is finiteness, not a small polynomial bound on work. It counts bases without claiming that the finite number is manageable. Degeneracy removes its strict-progress argument, and examples exist in which other permitted pivot rules cycle. A repair needs an additional theorem about a specified rule; the fact that a problem has only finitely many bases does not alone prevent endlessly revisiting them.

## Bland's rule with the index convention exposed

**Definition 5.8 (Bland's least-index rule).** Choose the eligible entering variable with the smallest permanent index. Among all rows attaining the minimum ratio, choose the leaving basic variable with the smallest permanent index. Compare variable names, not row positions or positions inside a current basis array.

**Theorem 5.9 (Bland's finite-termination result; cited).** For a finite standard-form LP, exact primal simplex using this entering rule and this leaving tie rule never repeats a feasible basis. Starting from a feasible basis, it therefore terminates finitely at an optimum or detects an improving ray.

The anti-cycling proof is a cited result of Bland's primary paper, section 1. The degeneracy and strict-progress proofs above do not establish it. In particular, “the smallest index decreases every step” is not a valid proof: variables can leave and reenter, and no such scalar monotonicity was shown. The theorem depends on the two choices together, including zero-ratio ties.

**Example 5.10 (Bland can take a zero step when a larger-cost choice moves).** Consider the dictionary
$$x_4=-x_1+2x_2,\qquad
x_5=2-x_1-x_2,\qquad z=3x_1+5x_2.$$
The nonbasic variables are $x_1,x_2$ and the starting basic values are zero and two. Bland chooses $x_1$, since one is the smaller eligible index. Its two blocking ratios are zero and two, so $x_4$ leaves at zero. The new dictionary is
$$x_1=2x_2-x_4,\qquad x_5=2-3x_2+x_4,\qquad
z=11x_2-3x_4.$$
Next $x_2$ enters and $x_5$ leaves at $2/3$, giving $(x_1,x_2)=(4/3,2/3)$ and value $22/3$. Solving for the new basis shows reduced cost $2/3$ for $x_4$. It enters to value four while $x_1$ falls to zero, reaching $(x_1,x_2)=(0,2)$ and objective ten.

Choosing the largest reduced cost at the original basis would enter $x_2$ immediately. Its only blocking row is $x_5$, giving theta two, $x_4=4$ and objective ten in one pivot. Substitution then gives $z=10-2x_1-5x_5$, proving optimality. Thus an anti-cycling guarantee is not a claim that Bland uses the fewest pivots on each instance.

## Exact rules, numerical tolerances and perturbations

A mathematical comparison of fractions can be performed by cross multiplication when denominators are positive. With rational input this permits exact tie detection. Floating-point code instead needs declared tolerances, scaling and a policy for tiny pivot entries. Replacing every small positive reduced cost by zero or treating almost equal ratios as equal changes the executed rule. Bland's exact theorem cannot automatically certify that changed process.

Use independent feasibility and objective checks after a pivot. A negative basic value created by rounding may require repair, refactorisation or a different numerical step policy; it should not be silently called a feasible zero. A repeated basis detected in a finite log is useful evidence of a specific run, while absence of a repeat so far proves no universal termination theorem.

Lexicographic perturbation is another established anti-cycling strategy. It compares vectors of symbolic infinitesimals rather than adding one arbitrary tiny machine number to every right-hand side. Its full proof and perturbation convention are further reading. A fixed numerical perturbation solves a nearby but changed problem and can alter which optimum is selected; retain the original problem for final feasibility and objective certification.

For a learner implementation, return a semantic stop reason: optimal dictionary, feasible improving ray, invalid basis, numerical feasibility failure or resource limit. A pivot cap is a work budget, not mathematical evidence of optimality. A basis signature must use sorted permanent indices so a harmless change in row presentation does not disguise a repeat. None of these diagnostics replaces the theorem, but they make the stated algorithm inspectable.

## A reproducible Bland step

~~~text
choose entering j with smallest permanent index among reduced_cost[j] > 0
if no j exists: return optimal dictionary
form d = inverse_basis_action(column[j])
collect rows with d[i] > 0
if none exist: return feasible improving ray
find smallest ratio basic_value[i] / d[i]
among its tied rows, leave the smallest-index basic variable
pivot and independently recompute feasibility
~~~

Applied to the last worked dictionary, the expected first exchange is entering $x_1$, leaving $x_4$, theta zero. This output is derived algebraically; it is not a record of an executed program. The next chapter explains how a feasible starting basis is constructed and how revised simplex obtains the same dictionary information by solves.

## Degeneracy depends on the formulation as well as the point

A repeated or redundant inequality can create zero slack coordinates without changing the original feasible decisions. For example, the interval $0\le x\le1$ may be represented using the single upper row, or using two identical copies of it. At the upper endpoint both copied slacks vanish, and a basis description has more zero components than the simpler representation. The interval and its endpoints have not changed. The additional algebraic degeneracy is a property of the extended system.

Removing redundant rows can therefore simplify the basis structure, but it must preserve the right-hand-side consistency and the original inequality domains. One should not delete an active row merely because it is active alongside another: two geometrically distinct constraints can be needed to determine a vertex. Linear dependence of coefficient rows is also insufficient to establish redundancy for inequalities; their orientations and constants matter.

This observation explains why two correct solvers can take different numbers of zero-length pivots on equivalent formulations. Their bases live in different coordinate extensions. Compare the reconstructed original decision, objective, and mathematical certificates before comparing pivot logs. Bland's theorem applies to a specified finite formulation with permanent indices. It promises termination there; it does not identify a formulation-independent measure of progress or make all redundant descriptions equally efficient.

## Exercises

### Exercise 1: Degenerate basis
<a id="degeneracy-cycling-bland-ex-1"></a>

A rank-three standard-form basis represents a feasible vector with exactly two positive components. Is it degenerate?

<details>
<summary>Hint 1</summary>

**Hint.** Only basic positions can be positive.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare the positive count with the basis size.

</details>

<details>
<summary>Solution</summary>

**Solution.** Yes. Three positions are basic and at most two are positive, so a basic value is zero. The basis matrix may still be nonsingular; degeneracy is about the values, not loss of column independence.

</details>

### Exercise 2: Zero ratio
<a id="degeneracy-cycling-bland-ex-2"></a>

For basic values $(0,4)$ and entering column $(2,1)$, find the maximal step and leaving row.

<details>
<summary>Hint 1</summary>

**Hint.** Use only positive direction components.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Take the minimum of the two nonnegative ratios.

</details>

<details>
<summary>Solution</summary>

**Solution.** The ratios are zero and four, so theta is zero and the first row blocks. This is a feasible degenerate pivot if its column exchange is valid.

</details>

### Exercise 3: No blocking row
<a id="degeneracy-cycling-bland-ex-3"></a>

What does an entering column $d=(-1,0,-2)$ imply when its reduced cost is positive?

<details>
<summary>Hint 1</summary>

**Hint.** Increasing the variable changes basics by minus d.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Check all nonnegativity inequalities.

</details>

<details>
<summary>Solution</summary>

**Solution.** All basic values stay unchanged or increase for every nonnegative step. The associated standard-form direction is nonnegative and has positive objective gain, so it certifies an unbounded improving ray from the feasible start.

</details>

### Exercise 4: Permanent indices
<a id="degeneracy-cycling-bland-ex-4"></a>

Two minimum-ratio rows contain basic variables x8 and x3, in row positions one and two. Which leaves under Bland?

<details>
<summary>Hint 1</summary>

**Hint.** The rule compares variable indices.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Row order is a presentation choice.

</details>

<details>
<summary>Solution</summary>

**Solution.** Variable x3 leaves, regardless of its row position. Choosing the first displayed row would implement another tie rule and would not be Bland's stated algorithm.

</details>

### Exercise 5: Necessary zero pivot
<a id="degeneracy-cycling-bland-ex-5"></a>

In the first worked problem, why is the initial dictionary not optimal even though x is forced to remain zero?

<details>
<summary>Hint 1</summary>

**Hint.** Inspect the other eligible variable.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The optimum is determined by y once x is fixed.

</details>

<details>
<summary>Solution</summary>

**Solution.** The y reduced cost is positive and y can increase from zero to one. A zero pivot in x is permitted but not an optimality certificate. The original feasible set has x=0 and $0\le y\le1$, so its optimum value is one.

</details>

### Exercise 6: Objective repetition
<a id="degeneracy-cycling-bland-ex-6"></a>

Why is a constant objective value over several pivots insufficient to prove cycling?

<details>
<summary>Hint 1</summary>

**Hint.** Cycling repeats a basis.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Degenerate exchanges can traverse several different bases.

</details>

<details>
<summary>Solution</summary>

**Solution.** Several distinct bases can represent the same point and objective without any basis yet repeating. To identify a cycle retain permanent basis signatures and find an actual repeated one under the fixed problem and rule.

</details>

### Exercise 7: Cycle implication
<a id="degeneracy-cycling-bland-ex-7"></a>

Suppose a purported cycle contains one step with reduced cost 2 and theta=1/4. Explain the contradiction.

<details>
<summary>Hint 1</summary>

**Hint.** Its objective gain is positive.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** All other eligible primal gains are nonnegative.

</details>

<details>
<summary>Solution</summary>

**Solution.** That step gains one half. The remaining steps cannot decrease the objective, so the run cannot return to the same basis and objective. At least one logged claim or sign convention is inconsistent.

</details>

### Exercise 8: Alternative bases
<a id="degeneracy-cycling-bland-ex-8"></a>

In the two-equation example, why is the set {1,2} invalid while {1,3} is a basis?

<details>
<summary>Hint 1</summary>

**Hint.** Write the corresponding columns.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare determinants.

</details>

<details>
<summary>Solution</summary>

**Solution.** Columns one and two are both $(1,1)$, hence dependent. Columns one and three form determinant minus one, so they are independent and represent the stated degenerate feasible point.

</details>

### Exercise 9: Finiteness versus speed
<a id="degeneracy-cycling-bland-ex-9"></a>

Does Bland's theorem prove a polynomial iteration bound?

<details>
<summary>Hint 1</summary>

**Hint.** Read the theorem's conclusion.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Finitely many possible bases may still be very numerous.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. The theorem excludes repeated bases and establishes finite termination, but supplies no polynomial bound here. A method can be finite and still require many pivots on a family of inputs.

</details>

### Exercise 10: Floating comparison
<a id="degeneracy-cycling-bland-ex-10"></a>

Why is adding one fixed tiny decimal to every RHS different from symbolic lexicographic perturbation?

<details>
<summary>Hint 1</summary>

**Hint.** Symbolic infinitesimals have an ordered hierarchy.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A fixed decimal changes the actual feasible set.

</details>

<details>
<summary>Solution</summary>

**Solution.** Equal numerical perturbations have no lexicographic hierarchy and can introduce new ties or alter feasibility and the optimum. Symbolic perturbation uses a precise formal comparison theorem; a numerical perturbation requires a separate nearby-problem and final original-data audit.

</details>


## Sources

Bertsimas and Tsitsiklis, *Introduction to Linear Optimization* ([author's book page](https://www.mit.edu/~dbertsim/books.html)), is a comparison reference for simplex, duality and network optimisation. Matoušek and Gärtner, [Understanding and Using Linear Programming](https://doi.org/10.1007/978-3-540-30717-4), gives a complementary geometric treatment. The exposition, calculations and exercise solutions here are original; external results are identified where their full proofs are not supplied. Bland, [New Finite Pivoting Rules for the Simplex Method](https://doi.org/10.1287/moor.2.2.103), section 1, is the primary source for the least-index anti-cycling theorem. Its full proof is an external dependency explicitly distinguished from the elementary finiteness arguments proved here.

## Summary

Degeneracy lets a valid pivot change a basis without moving the decision. The ratio test identifies zero steps, and objective monotonicity proves every improving-primal cycle consists of them. Nondegenerate iteration terminates by strict progress; Bland's cited theorem restores finiteness through exact permanent-index rules. Numerical tolerances and symbolic perturbations require their own contracts. Two-phase simplex next supplies a starting feasible basis.
