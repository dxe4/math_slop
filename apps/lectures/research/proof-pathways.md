# Proof pathways from domains and finite observations

These two workshops connect existing local lessons through new mathematical tasks. The first starts with real functions and follows a composed expression through cancellation, a principal square root, and a logarithm. The second starts with finite observations and asks which additional hypotheses certify a global topological conclusion. The proposed routes reuse the developed lessons; their new work is the transfer between them and the two capstones below.

Reading times are planning estimates. A gate is a diagnostic question with a worked answer and a route back to the relevant lesson, rather than an automatic judgment of proof mastery. Written responses should remain separate from exact arithmetic checks.

## Pathway one Keep the original domain

### Prerequisites and entry gates

The core route requires factoring a difference of squares, intervals, real principal square roots, positive arguments for the real logarithm, and the inverse relation between exp and log. Its final extension question also uses continuity and the fact that a sequence approaching a point must have function values approaching its value if an extension is continuous there. It does not require complex numbers or algebraic topology.

**Domain gate.** Find the natural real domain of u(x)=√(4−x²)/(x−1), and explain whether both square-root endpoints are included. The answer is [−2,1)∪(1,2]: the radicand requires −2≤x≤2, and the denominator excludes 1. A missing sign condition or endpoint belongs in the repair route below.

**Inverse gate.** For q(x)=(x+1)² on x≤−1, find its range and inverse. The range is [0,∞), and q⁻¹(y)=−1−√y for y≥0. The original restriction forces the negative branch; solving a quadratic without that restriction describes a different question.

### Local stops and learner actions

All listed HTML fragments were checked in the local files on 20 October 2026.

| Stop | Local entry | Mathematical action to bring back to the workshop |
| --- | --- | --- |
| Name the function | [Calculus Chapter 1 on domains](../../calculus/reading/chapter-01.html#chapter-01-lesson-3) | Answer the domain gate with both original restrictions before simplifying. Classify a rewrite as equality on a common domain, restriction, or extension. |
| Preserve an excluded input | [Conditions cancellation](../../conditions/index.html#cancel), with [Task 1](../../conditions/index.html#task-1) and [Task 2](../../conditions/index.html#task-2) if needed | Solve the two displayed equations and explain why cancellation does not supply the missing function value. Separate solving an equation from assigning a continuous extension. |
| Preserve a sign | [Conditions squaring](../../conditions/index.html#square) and [Task 3](../../conditions/index.html#task-3) | Write the condition that makes the reverse implication valid. Give an original-equation substitution that rejects the extraneous candidates. |
| Select a branch | [Calculus inverse restrictions](../../calculus/reading/chapter-01.html#chapter-01-lesson-6) | Answer the inverse gate and write both composition identities with their domains. |
| Preserve the real logarithm domain | [Conditions logarithms](../../conditions/index.html#log) and [Task 6](../../conditions/index.html#task-6) | Compare “each argument positive” with “their product positive.” Explain why equal values on the original domain need not make two natural-domain functions equal. |

For a learner who already passes both gates, use the existing Conditions arguments as a short retrieval check and proceed to the new capstone. Requiring completion of all existing practice would repeat material instead of diagnosing the relevant gap.

### New capstone A composed expression with two different missing points

All functions are real-valued. Let

G(x)=log(√(((x²−4)/(x−2))²))

on its **original natural real domain**, before any cancellation.

1. Determine that domain from the operations in their original order.
2. Compare G with A(x)=log(x+2) and B(x)=log|x+2|, each on its own natural real domain. Identify equal values on shared inputs, lost inputs, and added inputs separately.
3. Solve G(x)=c for every real c, preserving every original restriction.
4. Decide whether G admits a finite continuous extension at 2 and at −2. Give a limit or a sequence argument for each answer.

Suggested hints should reveal one action at a time: record the denominator restriction; determine when the logarithm's argument is positive; replace √u² by |u|; only then cancel on the recorded domain. A final hint can ask which candidate equals the originally excluded point 2.

### Verified solution

The quotient requires x≠2. Its square has a nonnegative real square root wherever the quotient exists. The logarithm further requires that root to be strictly positive, so the quotient must be nonzero. Its zero at x=−2 is therefore also excluded. Thus

D_G=ℝ∖{−2,2}.

For x∈D_G, cancellation gives (x²−4)/(x−2)=x+2, and the principal-root identity gives

G(x)=log|x+2|.

The absolute value must be retained when x<−2. The natural domain of A is (−2,∞). It loses all original inputs x<−2 **and adds x=2**, where A(2)=log4 but G is undefined. On D_G∩D_A=(−2,2)∪(2,∞), their values agree. Thus A on its full natural domain is neither simply a restriction nor simply an extension of G.

The natural domain of B is ℝ∖{−2}. It agrees with G throughout D_G and additionally assigns B(2)=log4. Consequently B is an extension of G. Restricting B to D_G gives exactly G. Neither A nor B supplies a value at −2.

The logarithm is injective on positive arguments, and exp(c)>0, so

G(x)=c ⇔ |x+2|=exp(c), with x∈D_G.

The two algebraic candidates are −2+exp(c) and −2−exp(c). Neither can equal −2. The second is always less than −2 and is admissible. The first equals 2 precisely when c=log4. The complete solution set is therefore

- {−2+exp(c), −2−exp(c)} if c≠log4;
- {−6} if c=log4.

There is a unique continuous extension at 2, with assigned value log4, because G equals log|x+2| on a deleted neighborhood of 2 and that latter formula is continuous there. At −2, take x_n=−2+exp(−n), n≥1. These are allowed inputs tending to −2, while G(x_n)=−n. No finite value assigned at −2 can make an extension continuous.

The proof uses factorization, domain intersection, √u²=|u| for real u, the real log and exp inverse identities, and continuity. A cancellation alone proves neither the solution classification nor either extension claim.

### Optional continuation to continuous choices

This continuation needs complex circle notation, continuity, and the winding preparation named in [Lift return choose a root](../lift-return-roots.html#question). Use [Homotopy 1 on winding](../homotopy.html#winding) to repair that prerequisite; Homotopy 2 on free words is not required for this branch question.

At the [principal selector clinic](../lift-return-roots.html#selector-clinic), ask the learner to write the actual composition equation satisfied by h(z)=z. It satisfies h(z)²=f₂(z)=z², rather than h(z)²=z. Therefore it is a root of a composite power map, not a global inverse of squaring on the circle. Then complete [Root Task 5](../lift-return-roots.html#root-task-5), contrasting the existing continuous roots with the discontinuous principal selector. The connection with the real route is checking the function, domain, and equation being claimed. The complex obstruction also requires the new continuity and endpoint arguments; a real absolute-value identity does not prove it.

## Pathway two Turn finite observations into a global guarantee

### Prerequisites and entry gates

This route requires vectors in ℝ², complex circle notation, continuity, the triangle inequality, and winding invariance. A Lipschitz bound is supplied as an assumption; learners must use it for every pair of inputs rather than estimate it from the same finite observations. The final root classification uses the general-map result in the third homotopy lecture.

**Inequality gate.** Derive ||u||≥||v||−||u−v|| from the triangle inequality. Then explain why ||u−v||<||v|| proves u≠0. The triangle inequality applied to v=u+(v−u) supplies both statements.

**Global-choice gate.** For a nonvanishing continuous f:S¹→ℂ with winding k, state the conditions for a continuous nth root on S¹ and a continuous logarithm on S¹. They are n dividing k, and k=0, respectively. A root or logarithm along an interval is a different problem because its endpoint values need not agree.

### Local stops and learner actions

| Stop | Local entry | Mathematical action to bring back to the workshop |
| --- | --- | --- |
| Reject a formula with an exact witness | [Homotopy 1 obstruction](../homotopy.html#hole) | Compute C(1/2,1/2)=0. Say precisely why this rejects that family and why it does not yet exclude every possible contraction. |
| Separate samples from all inputs | [Joint continuity clinic](../homotopy.html#continuity-clinic) | Compare the clinic's exact diagonal witness with the fixed-grid readout. Write the finite statement the readout establishes and the universal statement it does not establish. |
| Add a quantitative bridge | [Lucent exchanging limits source](../../lucent/courses/analysis/11-exchanging-limits.md) | In “A moving triangle: three different guarantees,” compare the zero sampled maximum with the full maximum. Reconstruct the proved bound using a shared Lipschitz constant and the grid covering radius. Do not repeat the lesson's narrow-hill capstone. |
| Transfer a bound into an allowed deformation | [Homotopy 1 path construction](../homotopy.html#paths) and [winding argument](../homotopy.html#winding) | Use the inequality gate to state a sufficient condition that keeps a straight blend of two curves away from 0. Distinguish a closed free loop homotopy from one fixing its basepoint. |
| Translate winding into existence | [Roots of general maps](../lift-return-roots.html#general-maps) | State which root and logarithm functions exist on the parameter circle, rather than only along its interval parametrization. |

Lucent's rendered local route is `../../grraphics_maths/web/#/course/analysis/exchanging-limits` when its reader is running. Its application assigns headings IDs of the form `lesson-part-N`; the saved exercise keys are not stable heading fragments. The source link above remains inspectable without claiming that a raw Markdown file is the rendered lesson.

### New capstone Certified samples of an unobserved loop

Let γ:[0,1]→ℂ be an unknown continuous curve with γ(0)=γ(1). Identifying the endpoints makes it a map f:S¹→ℂ. Do not assume at the outset that γ avoids 0.

Assume the following are **proved or independently certified**, rather than guessed from a plot:

||γ(s)−γ(t)||≤16|s−t| for every s,t∈[0,1],

||γ(j/16)−v_j||≤1/100 for j=0,…,16,

where v_j=exp(πij/4).

Let P be the known piecewise linear reference curve joining v_j in parameter order. It traces a regular octagon twice counterclockwise. It is not the unobserved γ, and the displayed reference vertices are not exact observations of γ.

1. Prove that γ avoids 0 at every parameter value using the assumptions above.
2. Construct a valid loop homotopy between P and γ and determine whether it is based or free.
3. Find the winding of f. Determine the number of continuous square roots of f on S¹, whether a continuous fourth root exists there, and whether a continuous logarithm exists there.
4. Remove the Lipschitz hypothesis while keeping the same certified data. Even with zero sample error, exhibit two continuous nonvanishing loops whose samples are exactly v_j and whose windings differ. Explain how their global-choice conclusions differ.

### Verified finite certificate

On a cell [a,a+h], h=1/16, write u=(s−a)/h. Let Q linearly interpolate the actual, unobserved endpoint values γ(a) and γ(a+h). This auxiliary polygon is distinct from the known reference P. The Lipschitz condition gives

||γ(s)−Q(s)||
≤(1−u)||γ(s)−γ(a)||+u||γ(s)−γ(a+h)||
≤2Lhu(1−u)≤Lh/2=1/2.

Convex interpolation of the two certified endpoint errors gives ||Q(s)−P(s)||≤1/100. Hence

||γ−P||∞≤51/100.

Every reference chord has endpoints on S¹ separated by π/4. Its midpoint has the smallest modulus on that chord, equal to

c=cos(π/8)=√(2+√2)/2.

Consequently ||P(s)||≥c for every s. Since c>51/100, the reverse triangle inequality yields

||γ(s)||≥c−51/100>0.

For H(s,τ)=(1−τ)P(s)+τγ(s), the same argument gives

||H(s,τ)||≥||P(s)||−τ||γ(s)−P(s)||≥c−51/100>0.

Both P and γ are closed, so H(0,τ)=H(1,τ) for every τ. Their starting values need not be equal: γ(0) is only known to be within 1/100 of 1. H is therefore a **free loop homotopy**, not generally a homotopy fixing the basepoint 1.

A continuous argument along the successive reference chords advances by π/4 on each cell, for total change 4π. Thus wind(P)=2. Winding is invariant under a nonvanishing free loop homotopy, using the continuously lifted endpoint-angle difference. Therefore wind(f)=2.

By the general-map criterion there are exactly two continuous square roots on the parameter circle, each with winding 1. They need not be the specific functions ±z, because f is unknown and need not equal z². There is no continuous fourth root, since 4 does not divide 2, and no continuous logarithm, since 2≠0. On the interval alone, γ has roots of every positive order and a logarithm; the obstruction here is endpoint agreement on S¹.

### An exact counterexample without the Lipschitz hypothesis

Define γ̃(s)=exp(iφ(s)), where

φ(s)=−60πs for 0≤s≤1/16,

φ(s)=4πs−4π for 1/16≤s≤1.

At s=1/16 both formulas give −15π/4, so φ is continuous. At s=0 and s=1 its value is 0, making γ̃ a closed loop with a continuous real angle that returns exactly to its initial value. Its winding is zero.

For j≥1, φ(j/16)=πj/4−4π, so γ̃(j/16)=v_j. The j=0 sample is also exact. The known reference loop P and γ̃ therefore have identical exact nodal values v_j, but windings 2 and 0. This does not assert that the original unknown γ had exactly those nodal values; both examples fit the stated certified observations. The curve γ̃ stays on the unit circle. It fails the bound 16 even without using derivatives: γ̃(0)=1 and γ̃(1/120)=−i, so their distance is √2, larger than 16/120=2/15.

The function iφ has matching endpoints and defines a continuous logarithm on the parameter circle. For every positive integer n, exp(iφ/n) also has matching endpoints and supplies a continuous nth root there. This explicit witness shows why the finite observations alone do not determine the winding or the global-choice conclusions.

### Varying the available certificate

An optional control can vary the *assumed certified bounds* to integer L∈[13,40] and error E/100 for integer E∈[0,50]. The reference curve P remains fixed. A control does not reveal or reconstruct the unknown γ, nor establish that a proposed Lipschitz constant is true. Under those hypotheses the same proof gives

B=L/32+E/100=(25L+8E)/800,

||γ−P||∞≤B.

The displayed conclusion is certified only when B<c. If B≥c, this argument is **inconclusive**. It does not prove that γ crosses 0, changes winding, or lacks roots. For example, the true curve exp(4πis) is nonvanishing with winding 2 and meets the reference samples exactly, even when a loose supplied bound makes this certificate fail.

Use an exact algebraic comparison for B=p/q≥0, q>0. If 2p²≤q², then B≤1/√2<c and certification succeeds. Otherwise 4p²−2q² is positive, and

B<c ⇔ (4p²−2q²)²<2q⁴.

The positivity branch is necessary before squaring. The defaults L=16,E=1 give B=51/100 and succeed. L=29,E=0 gives B=29/32 and succeeds; L=30,E=0 gives 15/16 and leaves this certificate inconclusive. These changes test whether a stated bound is sufficient, not whether the reference polygon's winding changed.

## Teaching choices and their evidence

These are specific applications of primary learning research, not measured outcomes for either workshop.

| Learner action | Research connection and limit |
| --- | --- |
| Put two proposed simplifications beside the original function and classify what each preserves. | Rittle-Johnson and Star's experiment randomly assigned 70 seventh-grade students to compare equation-solving methods or study them sequentially. Comparison improved procedural knowledge and flexibility, with comparable conceptual gains. This supports trying explicit comparisons; it does not establish the effectiveness of comparing invalid domain claims or transferring to topology. [Original study](https://doi.org/10.1037/0022-0663.99.3.561). |
| Explain why each hypothesis permits the next step, rather than merely copying the final formula. | Chi and colleagues analyzed self-explanation while students studied mechanics examples. More successful learners linked steps to principles and conditions. This was an observational protocol analysis in mechanics, so it motivates the prompts without showing that adding a text box causes mathematical understanding. [Primary paper](https://onlinelibrary.wiley.com/doi/10.1207/s15516709cog1302_1). |
| Choose a strategy: reject with a witness, or certify with a bound and an invariant. | Weber's exploratory proof study identified strategic knowledge beyond possession of facts. The route makes the choice of strategy explicit; the study does not estimate this workshop's effect. [Primary abstract](https://link.springer.com/article/10.1023/A:1015535614355). |
| Reconstruct the domain ledger or the certificate chain later with the worked solution closed. | Roediger and Karpicke found delayed-recall benefits of retrieval practice with prose materials. A later reconstruction is an application to mathematical reasoning, not an established proof-learning effect or an optimal review schedule. [Primary study abstract](https://www.psychologicalscience.org/journals/psychological-science/j.1467-9280.2006.01693.x/). |

The existing [pedagogy synthesis](pedagogy-and-homotopy.md) contains the broader evidence review. These pathways need review of independent written work to evaluate learning; notes, arithmetic checks, and route completion do not by themselves establish proof mastery.

## Short rubric and proof dependencies

Score the dimensions separately; a correct final value cannot compensate for a missing mathematical condition.

| Dimension | Domain capstone | Finite-observation capstone |
| --- | --- | --- |
| Domain and object | States D_G, D_A, D_B and the exact equality/restriction/extension relation, including A's added point 2. | Separates γ, Q, and P; states that roots and logarithms are sought on the parameter circle. |
| Hypothesis | Uses nonzero denominator, positive log argument, and the principal-root convention at the step where each is needed. | Uses a certified Lipschitz constant and certified nodal errors, rather than treating them as measurements from the plot. |
| Quantifier and case coverage | Solves for every real c, including c=log4, and treats both missing points separately. | Proves the bound for every cell and every parameter; treats failed certification as inconclusive. |
| Justification | Gives reversible steps on the recorded domain and a valid continuity/sequence argument. | Derives the interpolation and error bounds, proves homotopy avoidance and closure, and invokes the named winding/root results correctly. |

A simple 0–2 scale per dimension can distinguish absent/incorrect reasoning, a correct idea with a material gap, and a complete argument. Arithmetic and writing should be reviewed within each dimension, not converted into an automatic proof score.

The domain proof depends only on the elementary facts stated above. The finite proof additionally depends on winding invariance for free loop homotopies and the general-map root criterion developed in the linked lectures. Those results ultimately use angle lifting and the quotient-circle endpoint condition. The capstone proves the error estimate and its topological transfer; it does not reprove covering-space theory.

<a id="duplication-audit-and-scope"></a>
## Related reading and scope

The existing Conditions tasks already develop single-operation cancellation, squaring, real-logarithm domains, and parameter cases. The new domain capstone composes those operations and makes the same naive rewrite both discard allowed inputs and add a forbidden one.

The existing homotopy clinic and Lucent lesson already develop fixed-grid failure, moving triangles, and a Lipschitz bridge. Lucent's compactness and contraction lessons, and the Fredholm certificate investigation, also supply substantial shared-modulus and residual work. Repeating those examples would add little to a short route. The new finite capstone instead transfers certified observations of an unknown curve to a free homotopy, winding, and continuous-choice conclusions. The twice-traversed reference polygon and the explicit zero-winding curve with identical exact samples were not present in the selected route materials.

The [implemented pathways](../proof-pathways.html) include both routes,
existing-entry links, the stated gates, staged hints, full proofs, and ungraded
written responses. The certificate controls report assumptions, B, and the
exact comparison, showing P and a proved error tube rather than an invented
observed γ. The domain controls probe G=log b for eight positive integer values;
the written solution classifies all real c.

<a id="implementation-review-and-actual-validation"></a>
## Finite model and reading scope

The domain controls offer eight declared cases. The certificate controls offer
1,428 settings: the exact comparison certifies 463 and leaves 965 inconclusive.
An inconclusive setting does not prove the opposite claim. Keep the written
free-homotopy and parameter-circle conditions, strict comparison and original
curve assumptions when interpreting the result.

The [learner PDF](../artifacts/proof-pathways-learner.pdf) has five pages and the
[instructor PDF](../artifacts/proof-pathways-instructor.pdf) seven. The learner's
three worked arguments remain closed; the instructor version includes the
arguments and preparation reminders. Private notes remain in your browser.
