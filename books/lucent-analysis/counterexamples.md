# 12. Counterexamples, synthesis, and assessment

**Learning goals.** Identify exactly which hypothesis a theorem uses, construct examples that distinguish similar definitions, and write a connected proof using completeness, compactness, continuity, and uniform estimates. This chapter provides an additional written paper alongside the cumulative [foundations](analysis-i-synthesis.md), [real-functions](analysis-ii-synthesis.md), and [metric-continuation](analysis-iii-synthesis.md) examinations.

**Route release point.** Unit D uses only the boundedness, attainment, uniform-continuity, derivative, and integration cases and assessment Questions 1–3. The function-sequence paragraphs, visual investigation, worked stability theorem, and Questions 4–5 are released in Unit E after uniform convergence. This split prevents the studio from assigning its own later theorem as prior knowledge and does not add hours to the published route.

A counterexample is more than an unusual function. It is a precise response to a quantified claim. To refute “every continuous function on D is bounded,” choose one domain and one continuous function satisfying the premise but failing the conclusion. If D is a fixed compact set, no such example exists. Always write the domain as part of the example.

## A small collection with clear jobs

The function f(x) = 1/x on (0,1) is continuous but unbounded. The domain is bounded yet not compact. The function g(x) = x on (0,1) is bounded and continuous but does not attain its supremum. These distinguish boundedness from attainment; neither contradicts the Extreme Value Theorem.

The function |x| on R is continuous but not differentiable at zero. This prevents reversing the implication “differentiable implies continuous.” It does not show that continuous functions are usually nondifferentiable, nor does it replace a proof of a general theorem.

The function x² on R is continuous but not uniformly continuous. The sequences xₙ = n and yₙ = n+1/n approach each other, since |xₙ−yₙ| = 1/n → 0, but their output difference is 2+1/n². On every bounded closed interval the same function is uniformly continuous. The formula has not changed; the domain has.

The sequence xⁿ on [0,1] shows that a pointwise limit of continuous functions can be discontinuous. The moving peaks 1/(1+(x−n)²) on R show that a continuous pointwise limit still need not arise from uniform convergence. One counterexample disproves an implication, but its converse is a separate question.

## Visual investigation: smooth approximations, sharp limit

Consider fₙ(x) = sqrt(x²+1/n²) on [−2,2]. Each fₙ is smooth. Guess the limit and predict whether convergence is uniform before changing n.

```mathviz
scene "Smooth functions can converge uniformly to a corner";
domain -2 2;
range -0.2 2.5;
param n = 2 from 1 to 40;
fn f(x) = sqrt(x^2+1/(n^2));
fn g(x) = abs(x);
plot f color blue;
plot g color orange;
```

For every real x, 0 ≤ sqrt(x²+1/n²)−|x| ≤ 1/n, since sqrt(u²+v²) ≤ |u|+|v|. Equality holds at x = 0, so the supremum error is exactly 1/n. This proves uniform convergence to |x|, a function that is not differentiable at zero. Uniform convergence preserves continuity; it does not preserve differentiability. The picture suggests the corner, while the global bound and one-sided quotients establish the facts.

## Worked synthesis: stability of a minimum value

**Theorem 12.1.** Let K be a nonempty compact subset of R. If continuous functions fₙ: K → R converge uniformly to f, then their minimum values converge to the minimum value of f.

The uniform limit theorem gives continuity of f. The Extreme Value Theorem supplies minimizers cₙ for fₙ and c for f. Let Eₙ = sup on K of |fₙ−f|, which tends to zero. For all x in K, f(x)−Eₙ ≤ fₙ(x) ≤ f(x)+Eₙ. Taking minima gives min f−Eₙ ≤ min fₙ ≤ min f+Eₙ. Thus |min fₙ−min f| ≤ Eₙ → 0.

Minimum values converge, but selected minimizers need not. If every fₙ is the constant zero function on [0,1], we can choose cₙ alternately 0 and 1. Compactness does guarantee convergent subsequences of minimizers. If cₙⱼ → c*, then f(c*) = min f, by continuity and the uniform error bound. A unique minimizer would force the entire sequence to converge to it: any sequence remaining a fixed distance away would have a contradictory convergent subsequence.

## Untimed clinic: choose an error budget for an optimizer location

Release this clinic only in **Unit E after uniform convergence**. It is a separate, uncalibrated study session outside the existing paper and published route budget. The compact minimum-value theorem above remains the starting point. Now make a finite decision: how accurate must an objective and its solver be to certify a requested location?

Use a **nonempty common domain** \(D\), real-valued objectives \(f,\widetilde f\) on \(D\), and a finite attained minimum \(m=f(x_*)\). Assume finite numbers \(\varepsilon,\delta\ge0\), with
\[
\|\widetilde f-f\|_{\infty,D}\le\varepsilon.
\]
A supplied point \(\widehat x\in D\) must satisfy
\[
\widetilde f(\widehat x)\le\inf_D\widetilde f+\delta.
\]
This is a premise to verify or obtain from a solver certificate. It is not a consequence of choosing a tolerance control. Finite uniform error on this same domain keeps \(\inf_D\widetilde f\) finite. An exact minimizer of the approximate objective need not exist; when \(\delta=0\), its existence is part of supplying such a point.

```visual-story
{
  "id": "optimizer-location-confinement",
  "title": "How small must an objective error be to locate its optimizer?",
  "prompt": "Choose a requested location tolerance, verify a supplied solver point, then decide which compactness and growth hypotheses make the error certificate valid.",
  "stages": [
    {
      "title": "Choose a location budget",
      "body": "Work on the common domain \\(D=[-1,1]\\). Let \\(T_h(x)=(h-|x-h|)_+\\), where \\(s_+=\\max(s,0)\\), and set \\(g_h(x)=x^2-2hT_h(x)\\), with \\(0\\le h\\le1/2\\). The amber strip marks the requested distance \\(r\\) from the limit optimizer. The trial point \\(q\\) is supplied; verify its solver tolerance before using any location certificate. The solver control records \\(\\delta\\).",
      "question": "Fix r and delta first. Prove the uniform objective error and exact minimum of g_h. Is q really a delta-approximate minimizer? Choose h so the combined error budget certifies |q|<r. If the certificate fails, does that prove q is too far away?",
      "checkpoint": {
        "hint": "On \\([0,h]\\), complete the square in \\(x^2-2hx\\); on \\([h,2h]\\), inspect \\(x^2+2hx-4h^2\\). The solver premise compares \\(g_h(q)\\) with its true minimum. The limit's value gap at distance \\(r\\) is \\(r^2\\).",
        "explanation": "For \\(h>0\\), the tent is supported on \\([0,2h]\\) and has maximum \\(h\\), so\n\\[\n\\|g_h-x^2\\|_{\\infty,D}=2h^2.\n\\]\nOn \\([0,h]\\),\n\\[\ng_h(x)=(x-h)^2-h^2.\n\\]\nIt decreases to \\(-h^2\\); on \\([h,2h]\\), its derivative is \\(2x+2h>0\\). Outside the support it is nonnegative. Thus its unique minimizer is \\(h\\), with value \\(-h^2\\). At \\(h=0\\), the tent term vanishes exactly and the unique minimizer is zero.\n\nThe supplied point satisfies the solver premise only if\n\\[\ng_h(q)+h^2\\le\\delta.\n\\]\nWith \\(\\varepsilon=2h^2\\), the combined budget is\n\\[\nB=2\\varepsilon+\\delta=4h^2+\\delta.\n\\]\nSince \\(r\\le1\\), \\(B<r^2\\) gives both confinement to the level-one set and separation from every \\(|x|\\ge r\\). If \\(\\delta<r^2\\), choose\n\\[\nh<\\tfrac12\\sqrt{r^2-\\delta}\n\\]\nwithin the permitted interval. If \\(\\delta\\ge r^2\\), this budget supplies no such strict certificate.\n\nAt the defaults, the solver residual is \\(0.0084\\le0.01\\), and \\(B=0.05<0.16=r^2\\). The trial point is certified within the target. A failed sufficient inequality leaves the location undecided; it does not prove the point is outside.\n\nFor the exact optimizer, \\(\\delta=0\\), its displacement is \\(h\\) while the objective error is \\(2h^2\\). This shows a square-root order can be necessary over these perturbations. It does not establish an optimal constant.",
        "criteria": [
          "Proves the exact uniform error and unique minimum, including h=0.",
          "Checks the supplied point's approximate-optimality premise.",
          "Chooses h from the requested r and delta in the legal order.",
          "Distinguishes a sufficient certificate from a necessary location test."
        ]
      },
      "scene": "scene \"Objective error, solver tolerance and a requested location\";\ndomain -1 1; range -0.6 1.1;\nparam h=0.1 from 0 to 0.5; param q=0.12 from -1 to 1;\nparam solver=0.01 from 0 to 1; param r=0.4 from 0.05 to 1;\nfn tent(x)=(h-abs(x-h)+abs(h-abs(x-h)))/2;\nfn base(x)=x^2; fn model(x)=x^2-2*h*tent(x);\nplot base color blue; plot model color teal;\npolygon target_strip=(-r,-0.6),(r,-0.6),(r,1.1),(-r,1.1) color amber;\npoint limit_minimum=(0,0) color blue; point model_minimum=(h,-h^2) color rose;\npoint supplied=(q,model(q)) color teal;\nmeasure uniform_error=2*h^2; measure solver_residual=model(q)+h^2;\nmeasure solver_assumption_margin=solver-(model(q)+h^2);\nmeasure combined_budget=4*h^2+solver; measure confinement_margin=1-(4*h^2+solver);\nmeasure separation_gap=r^2; measure certificate_margin=r^2-(4*h^2+solver);\nmeasure point_distance=abs(q); measure actual_target_margin=r-abs(q);",
      "focus": [
        "curve-base",
        "curve-model",
        "point-model_minimum",
        "point-supplied"
      ]
    },
    {
      "title": "Test uniform convergence on the whole line",
      "body": "Now change the common domain to \\(\\mathbb R\\). Define \\(f(x)=x^2/(1+x^4)\\) and \\(f_n(x)=\\min\\{f(x),(x-n)^2-1/n\\}\\), for integers \\(n\\ge4\\). The same formulas also make sense for real translations; the control explores those translations. The graph has a finite viewport, while the norm statement concerns every real input.",
      "question": "Find each exact optimizer and prove a uniform error bound on all of R. Do the unique attained minimum of f and compact minimum-level set {0} force the optimizer locations to converge? Identify precisely what level-set slack is missing.",
      "checkpoint": {
        "hint": "Use \\(0\\le f\\le1/2\\). If the quadratic well changes the value, its input lies within one of the translation center. Bound \\(f(x)\\) there by \\(1/x^2\\). Compare the minimum-level set with a strictly higher sublevel.",
        "explanation": "The limit has its unique minimum zero at the origin. For every \\(x\\ne n\\), both \\(f(x)\\ge0\\) and \\((x-n)^2-1/n>-1/n\\); at \\(n\\), the second term equals \\(-1/n\\). Hence \\(f_n\\) has unique minimizer \\(n\\) and minimum \\(-1/n\\).\n\nIf the well changes \\(f\\), then\n\\[\n\\begin{gathered}\n(x-n)^2<f(x)+1/n\\\\\n\\le3/4.\n\\end{gathered}\n\\]\nThus \\(|x-n|<1\\), so \\(x>n-1>0\\). On the modified region,\n\\[\nf(x)\\le1/x^2\\le1/(n-1)^2.\n\\]\nElsewhere the error is zero. Therefore\n\\[\n\\begin{gathered}\n\\|f_n-f\\|_{\\infty,\\mathbb R}\\\\\n\\le1/n+1/(n-1)^2\\\\\n\\longrightarrow0.\n\\end{gathered}\n\\]\nEach function is continuous because the minimum of two continuous functions is continuous.\n\nMinimum values converge, but the unique optimizer \\(n\\) escapes. The set \\(\\{f\\le0\\}=\\{0\\}\\) is compact. Every positive sublevel is unbounded, because \\(f(x)\\to0\\) at infinity. A compact sublevel at the minimum proves existence, yet supplies no positive slack to confine perturbation minimizers. Local quadratic behavior near zero also cannot control these distant points.",
        "criteria": [
          "Proves all optimizer and minimum-value claims globally.",
          "Bounds the error on the entire declared common domain.",
          "Separates the compact minimum level from a positive sublevel.",
          "Explains why a finite picture or local growth near zero cannot supply global confinement."
        ]
      },
      "scene": "scene \"Uniformly small objective changes and an escaping unique optimizer\";\ndomain -2 22; range -0.35 0.7;\nparam n=4 from 4 to 20;\nfn base(x)=x^2/(1+x^4); fn well(x)=(x-n)^2-1/n;\nfn model(x)=(base(x)+well(x)-abs(base(x)-well(x)))/2;\nplot base color blue; plot model color teal;\npoint limit_minimum=(0,0) color blue; point model_minimum=(n,-1/n) color rose;\nmeasure certified_uniform_error=1/n+1/(n-1)^2;\nmeasure error_at_optimizer=base(n)+1/n;\nmeasure optimizer_distance=n; measure minimum_value=-1/n;\nmeasure limit_value_at_optimizer=base(n); measure limit_minimum_value=0;",
      "focus": [
        "curve-base",
        "curve-model",
        "point-limit_minimum",
        "point-model_minimum"
      ]
    },
    {
      "title": "Use confinement before the separation gap",
      "body": "Use \\(f(x)=x^2/(1+x^2)\\) on the common domain \\(\\mathbb R\\), with unique minimum zero. For this test the approximate objective is exactly \\(f\\), so any displayed finite \\(\\varepsilon\\ge0\\) is a valid uniform upper bound. The supplied point \\(q\\) meets its solver premise only when \\(f(q)\\le\\delta\\). The amber strip marks the compact sublevel \\(K=\\{f\\le\\alpha\\}\\); the teal lines mark the requested radius \\(r\\). The err and solver controls record \\(\\varepsilon\\) and \\(\\delta\\).",
      "question": "Derive the compact sublevel radius and its separation gap, including the empty outside-region case. Why must B first confine the point to K? Test alpha=0.2,r=1,q=2,epsilon=0,delta=0.8: could a gap computed only inside K certify that distant point?",
      "checkpoint": {
        "hint": "Solve \\(x^2/(1+x^2)\\le\\alpha\\), where \\(0<\\alpha<1\\). If \\(r\\) exceeds the sublevel radius, the region in \\(K\\) with \\(|x|\\ge r\\) is empty. The general criterion must check both its confinement and separation parts.",
        "explanation": "The compact sublevel is\n\\[\n\\begin{gathered}\nK=[-A,A],\\\\\nA=\\sqrt{\\alpha/(1-\\alpha)}.\n\\end{gathered}\n\\]\nWhen \\(0<r\\le A\\), monotonicity in \\(|x|\\) gives\n\\[\n\\gamma(r)=r^2/(1+r^2)>0.\n\\]\nFor \\(r>A\\), the outside region in \\(K\\) is empty; take \\(\\gamma(r)=+\\infty\\). Thus the combined threshold can be computed without an infinite readout as\n\\[\n\\min\\{\\alpha,\\ r^2/(1+r^2)\\}.\n\\]\nIf \\(B=2\\varepsilon+\\delta\\) is strictly below it, the point first enters \\(K\\) and then lies within \\(r\\). The solver premise must also hold.\n\nIn the requested test, \\(A=1/2<r\\), so the separation region in \\(K\\) is empty and its gap is \\(+\\infty\\). Yet \\(B=0.8>\\alpha\\), and \\(q=2\\) lies outside both \\(K\\) and the target. The solver premise is valid: \\(f(2)=0.8=\\delta\\). The gap alone was inapplicable because confinement failed.\n\nAt the authored defaults, the supplied point does meet the solver premise, and \\(B=0.07<0.2\\) certifies \\(|q|<1\\). The positive strict sublevel works despite the full domain being noncompact and the objective not being coercive.",
        "criteria": [
          "Derives the strict compact sublevel and both separation-gap cases.",
          "Checks the supplied point's solver premise.",
          "Combines confinement and separation rather than using a gap alone.",
          "Distinguishes a valid sufficient certificate from an actual distance observation."
        ]
      },
      "scene": "scene \"A strict compact sublevel and two required error checks\";\ndomain -4 4; range -0.1 1.1;\nparam alpha=0.2 from 0.05 to 0.8; param r=1 from 0.1 to 3;\nparam q=0.2 from -3 to 3; param err=0.01 from 0 to 0.1;\nparam solver=0.05 from 0 to 1;\nlet a=sqrt(alpha/(1-alpha)); let budget=2*err+solver;\nfn base(x)=x^2/(1+x^2);\nlet gap=r^2/(1+r^2); let threshold=(alpha+gap-abs(alpha-gap))/2;\nplot base color blue;\npolygon compact_strip=(-a,-0.1),(a,-0.1),(a,1.1),(-a,1.1) color amber;\nsegment left_target from (-r,-0.1) to (-r,1.1) color teal;\nsegment right_target from (r,-0.1) to (r,1.1) color teal;\npoint limit_minimum=(0,0) color blue; point supplied=(q,base(q)) color rose;\nmeasure solver_residual=base(q); measure solver_assumption_margin=solver-base(q);\nmeasure combined_budget=budget; measure compact_sublevel_radius=a;\nmeasure separation_region_margin=a-r; measure gap_at_target=gap;\nmeasure combined_threshold=threshold; measure certificate_margin=threshold-budget;\nmeasure actual_target_margin=r-abs(q);",
      "focus": [
        "curve-base",
        "polygon-compact_strip",
        "point-supplied"
      ]
    }
  ]
}
```

### Two objective errors and one solver error

The supplied-point condition and uniform bound give
\[
\begin{gathered}
f(\widehat x)\le\widetilde f(\widehat x)+\varepsilon\\
\le\inf_D\widetilde f+\delta+\varepsilon\\
\le\widetilde f(x_*)+\delta+\varepsilon\\
\le m+2\varepsilon+\delta.
\end{gathered}
\]
Thus define the finite combined budget
\[
B=2\varepsilon+\delta.
\]
A global sup-norm claim is about every input in \(D\); a finite plot or a sample maximum cannot establish it. The objective value bound alone does not locate the supplied point.

### First confine the point, then use a separation gap

Assume \(x_*\) is the unique minimizer, \(f\) is continuous on \(D\), and for some supplied \(\alpha>0\),
\[
K=\{x\in D:f(x)\le m+\alpha\}
\]
is compact. If \(B<\alpha\), the preceding bound puts \(\widehat x\) in \(K\). This strict level above the minimum adds confinement that a merely compact minimum-level set may lack.

For a requested \(r>0\), consider
\[
E_r=\{x\in K:|x-x_*|\ge r\}.
\]
If \(E_r\) is nonempty, it is compact and continuity supplies a minimum. Uniqueness excludes value \(m\), so
\[
\gamma(r)=\min_{E_r}(f-m)>0.
\]
If \(E_r\) is empty, set \(\gamma(r)=+\infty\). The complete sufficient certificate is
\[
\begin{gathered}
B<\min\{\alpha,\gamma(r)\}\\
\Longrightarrow |\widehat x-x_*|<r.
\end{gathered}
\]
Indeed, the first threshold puts the point in \(K\); a point in \(E_r\) would then have value gap at least \(\gamma(r)>B\), a contradiction. A gap computed only inside \(K\) cannot confine a point not yet known to be there.

Continuity can be weakened to **lower semicontinuity** for the compact-minimum step: every sublevel set is closed relative to \(D\). On a nonempty compact \(E_r\), nested nonempty sublevels approaching its finite infimum have a common point by compactness, so the infimum is attained. Uniqueness then makes the gap positive. Compactness, this regularity, and uniqueness each have a role; uniqueness alone does not imply a positive gap on a noncompact region.

The [noncompact existence lesson](../lucent-calculus/noncompact-optimization.md#one-compact-sublevel-is-enough) needs one nonempty compact sublevel, which may be exactly the minimum level. The escaping example shows why perturbation confinement asks for positive level slack. On a fixed compact domain, take \(K=D\) directly, recovering the qualitative theorem already proved above with a finite tolerance decision.

### A supplied growth bound gives a rate

If a coefficient \(a>0\) and exponent \(s>0\) are supplied with
\[
f(x)-m\ge a|x-x_*|^s\qquad(x\in K),
\]
then, after \(B<\alpha\) has confined the point,
\[
|\widehat x-x_*|\le(B/a)^{1/s}.
\]
For \(s=2\) this is a square-root bound; for \(s=4\), a fourth-root bound. Strict convexity alone does not supply a positive quadratic coefficient: \(x^4\) is strictly convex, but \(x^4/x^2=x^2\to0\) near zero. For a twice continuously differentiable function at an interior stationary minimum, a positive Hessian lower bound throughout a convex region containing the compared points supplies quadratic growth there. That is an additional hypothesis; the coefficient must be justified.

For primary comparisons, van de Geer's [Mathematical Statistics, Section 6.3.1](https://stat.ethz.ch/~geer/mathstat.pdf), printed page 107, separates uniform objective control from a separated minimum and uses two uniform-error terms. Boyd and Vandenberghe's [Convex Optimization, inequality (9.8)](https://www.seas.ucla.edu/~vandenbe/cvxbook/bv_cvxbook.pdf), printed page 459, derives a quadratic lower bound under an explicit positive Hessian bound. The deterministic certificates and examples here are proved directly; no statistical convergence result is required.

### Unary notebook: verify the supplied point before trusting a radius

Predict all eight outputs at the defaults. The solver-assumption margin must be nonnegative; the strict certificate margin must be positive. The final displayed radius uses the supplied quadratic growth of the limit \(x^2\). If the premise fails, that number alone certifies no point.

```notebook
param h=0.1 from 0 to 0.5;
param q=0.12 from -1 to 1;
param delta=0.01 from 0 to 1;
param r=0.4 from 0.05 to 1;
fn tent(x)=(h-abs(x-h)+abs(h-abs(x-h)))/2;
fn objective(x)=x^2-2*h*tent(x);
let minimum=-h^2;
let epsilon=2*h^2;
let budget=2*epsilon+delta;
show epsilon;
show objective(q)-minimum;
show delta-(objective(q)-minimum);
show budget;
show r^2-budget;
show abs(q);
show r-abs(q);
show sqrt(budget);
```

The default outputs are \(0.02,0.0084,0.0016,0.05,0.11,0.12,0.28,\sqrt{0.05}\). First change \(h\) to \(0.2\), retaining the supplied point and other budgets. Its solver premise remains valid, but the strict location certificate fails while the actual point stays within the target. Then check \(h=q=\delta=0\): the program is defined and reports zero objective and solver error.

**Change the model after attempting the independent task.** Replace the objective by \(x^4-4h^3T_h(x)\), its minimum by \(-3h^4\), and its uniform error by \(4h^4\). Replace the target gap by \(r^4\) and the last radius by \(B^{1/4}\). Keep the solver-residual check. Editing only the power of \(x\) would not derive the new minimum or error budget. The independent proof below decides which edits are justified.

### Independent task: change the flatness and derive a new budget

```exercise
{
  "id": "analysis-location-quartic-budget",
  "type": "written",
  "prompt": "Independent changed flatness. On \\(D=[-1,1]\\), for \\(0\\le h\\le1/2\\), let\n\\[\n\\begin{gathered}\nT_h(x)=(h-|x-h|)_+,\\\\\nG_h(x)=x^4-4h^3T_h(x).\n\\end{gathered}\n\\]\n(a) Find every global minimizer and value, including \\(h=0\\). Prove the exact sup-norm error from \\(x^4\\). Use the branches or one-sided monotonicity; the tent has a corner.\n\n(b) A supplied \\(q\\in D\\) satisfies\n\\[\nG_h(q)\\le\\inf_DG_h+\\delta,\n\\]\nwith finite \\(\\delta\\ge0\\). For a requested \\(0<r\\le1\\), derive a sufficient condition on \\(h,\\delta\\) that certifies \\(|q|<r\\). Give the legal order of choices and explain what happens if the solver tolerance already exhausts the target gap.\n\n(c) Use \\(h=1/10,\\ q=3/25,\\ \\delta=1/1000,\\ r=1/4\\). Verify the solver premise and the strict location certificate exactly. Does changing \\(h\\) to \\(3/20\\) make a failed certificate a proof that this \\(q\\) is outside the target?\n\n(d) Show why the fourth-root order cannot generally be replaced by a square-root order for this limit objective. Distinguish an order statement from an optimal-constant claim.",
  "hints": [
    "On \\([0,h]\\), \\(G_h=x^4-4h^3x\\); on \\([h,2h]\\), \\(G_h=x^4+4h^3x-8h^4\\). Check signs of the derivatives on the open pieces, not a nonexistent two-sided derivative at the corner.",
    "The exact error is determined by the tent height. Apply \\(B=2\\varepsilon+\\delta\\) to the limit gap \\(r^4\\).",
    "For the requested \\(q\\), \\(T_h(q)=2h-q\\) at \\(h=1/10\\), but \\(T_h(q)=q\\) at \\(h=3/20\\). The solver premise must be checked again."
  ],
  "rubric": [
    "Proves the unique minimizer/value and exact sup error, treating h=0 separately.",
    "Uses branch or one-sided reasoning at the corner.",
    "Derives the finite location budget and correct order of choices.",
    "Checks the supplied solver premise and both parameter cases with exact arithmetic.",
    "Derives the changed rate order without claiming an optimal constant or inferring quadratic growth from strict convexity."
  ],
  "solution": "For \\(h>0\\), the tent is supported on \\([0,2h]\\), with maximum \\(h\\). Thus\n\\[\n\\|G_h-x^4\\|_{\\infty,D}=4h^4.\n\\]\nOn \\([0,h]\\), the derivative of the branch is \\(4(x^3-h^3)<0\\) for \\(x<h\\). On \\([h,2h]\\), the derivative is \\(4x^3+4h^3>0\\). Outside that support, \\(G_h=x^4\\ge0\\). Hence the unique minimum is at \\(h\\), with value \\(-3h^4\\). Its left and right derivatives at \\(h>0\\) are \\(0\\) and \\(8h^3\\); a two-sided derivative there does not exist. At \\(h=0\\), the perturbation vanishes exactly and \\(x^4\\) has unique minimum zero at zero.\n\nThe limit's gap at distance \\(r\\) is \\(r^4\\), while\n\\[\nB=8h^4+\\delta.\n\\]\nFor \\(r\\le1\\), \\(B<r^4\\le1\\) includes confinement to the compact level-one set. If \\(\\delta<r^4\\), a sufficient choice is\n\\[\nh<\\left(\\frac{r^4-\\delta}{8}\\right)^{1/4}\n\\]\nwithin the permitted interval. Choose \\(r\\), obtain a solver-tolerance budget \\(\\delta\\), and then choose the objective-error parameter \\(h\\). If \\(\\delta\\ge r^4\\), this bound supplies no strict location certificate, even at zero objective error. The supplied-point premise remains essential.\n\nAt \\(h=1/10\\) and \\(q=3/25\\), \\(T_h(q)=2/25\\). Direct substitution gives\n\\[\n\\begin{gathered}\nG_h(q)+3h^4\\\\\n=\\frac{1171}{6250000}<\\frac1{1000}.\n\\end{gathered}\n\\]\nThus the solver premise is valid. The budget and gap satisfy\n\\[\nB=\\frac9{5000}<\\frac1{256}=r^4.\n\\]\nThe point is certified within \\(r\\).\n\nAt \\(h=3/20\\), \\(q<h\\), so \\(T_h(q)=q\\). The solver residual becomes\n\\[\n\\begin{gathered}\nG_h(q)+3h^4\\\\\n=\\frac{10611}{100000000}<\\frac1{1000}.\n\\end{gathered}\n\\]\nBut\n\\[\nB=\\frac{101}{20000}>\\frac1{256}.\n\\]\nThe sufficient certificate fails, while the actual distance is still \\(3/25<1/4\\). Failure did not refute the location.\n\nFor the exact optimizer, \\(\\delta=0\\), the displacement is \\(h\\) and the objective error is \\(4h^4\\). Its ratio to the square root of that error is \\(1/(2h)\\), which diverges as \\(h\\downarrow0\\). A square-root order is therefore unavailable uniformly over this family. The fourth-root order matches the supplied growth \\(x^4=|x|^4\\). These examples establish orders, not optimal constants.",
  "transfer": "Change the common domain in the escaping-well example to one fixed interval \\([-R,R]\\), \\(R>0\\), before choosing the sequence index. Give an explicit threshold after which every restricted objective equals its limit and identify its minimizer. Explain why letting the interval grow with the index would be a different assertion.",
  "transferSolution": "The modification region is contained in \\((n-1,n+1)\\). Fix \\(R\\) first. For every integer \\(n\\ge4\\) with \\(n>R+1\\), that region misses \\([-R,R]\\), so \\(f_n=f\\) everywhere on this common interval. Every sufficiently late restricted problem has the unique minimizer zero and minimum zero. Equality \\(n=R+1\\), when it is an allowed index, also works because modification requires the strict inequality \\(|x-n|<1\\).\n\nAn interval depending on \\(n\\), for example one containing \\(n\\), does not provide this fixed common compact domain. It can continue to include the moving well. The order “fix the domain, then choose the threshold” is part of the theorem."
}
```

**Delayed retrieval.** Without the models, start with a requested \(r\) and explain the order of the solver, objective, confinement and separation choices. Give one valid supplied point for which a sufficient certificate fails. Then explain why a compact minimum-level set and a local quadratic approximation cannot prevent the escaping-well construction.

## Practice exercises

1. Give a differentiable function with an unbounded derivative on an open bounded interval. State its domain explicitly.
2. Prove that uniform convergence of bounded functions implies the limit is bounded. Must the whole family share a single bound?
3. Suppose continuous fₙ converge uniformly to f on [0,1], and fₙ(xₙ) = 0. If xₙ → x, prove f(x) = 0.
4. Explain why finitely many slider positions cannot prove a quantified claim about every n or every real x. Give an example from this course where resolution hides the obstruction.

<details><summary>Practice hints</summary>

1. Consider a reciprocal. 2. Control the tail by one uniform approximation, then handle finitely many early terms. 3. Add and subtract f(xₙ). 4. Look for moving or narrowing features.

</details>

<details><summary>Practice solutions</summary>

1. f(x) = 1/x on (0,1) has derivative −1/x², which is unbounded. No endpoint continuity was assumed.
2. Choose N with sup |f_N−f| < 1; then |f| ≤ sup |f_N|+1. Uniform convergence bounds all sufficiently late fₙ by sup |f|+1. Each of the finitely many earlier functions is bounded, so the maximum of these finitely many bounds and the tail bound controls the entire family.
3. |f(x)| ≤ |f(x)−f(xₙ)|+|f(xₙ)−fₙ(xₙ)|. The first term tends to zero by continuity of f, the second by uniform convergence. Therefore f(x) = 0.
4. A finite test checks only finitely many instances. For xⁿ near 1 or the shrinking triangular spikes, a problematic input changes with n and can fall between samples. An exact inequality or quantified construction controls the missing cases.

</details>

## Additional written assessment

Allow 150 minutes. Attempt without the solutions. You may use theorems proved in the course if you state their hypotheses and explain why they hold. Each question is worth 20 points; reasoning matters more than a plausible conclusion.

1. Let A be nonempty and bounded above and s = sup A. Prove there is a sequence aₙ in A converging to s. Must aₙ be monotone? Give a construction making it monotone if desired.
2. Prove every continuous f: [0,1] → R is bounded, using Bolzano–Weierstrass and sequential continuity. Explain precisely why replacing [0,1] by (0,1) breaks the argument.
3. Let f be continuous on [a,b], differentiable on (a,b), and satisfy |f′(x)| ≤ M there. Prove f is Lipschitz and hence uniformly continuous. Explain whether continuity of f′ is needed.
4. For fₙ(x) = xⁿ on [0,1], find the pointwise limit, disprove uniform convergence, and calculate lim ∫₀¹ fₙ. Compare with the Riemann integral of the pointwise limit. Explain why equality of these integrals does not establish uniform convergence.
5. Suppose fₙ are continuously differentiable on [0,1], fₙ(0) → A, and fₙ′ → g uniformly. Prove convergence of fₙ, identify its limit and derivative, and identify the failure in the claim that uniform convergence of fₙ alone would suffice.

**Rubric for each question.** Award 4 points for accurate definitions and hypotheses, 10 for the central proof, 4 for the requested qualification or counterexample, and 2 for a clear conclusion with notation defined. A plotted example earns no proof points on its own. A correct idea with an unresolved quantifier gap earns partial central-proof credit. An unjustified exchange of limits loses the steps that depend on it.

<details><summary>Assessment solutions and marking guidance</summary>

1. For each n choose aₙ in A with s−1/n < aₙ ≤ s, using the characterization of the supremum. The squeeze estimate proves convergence. The chosen values need not be monotone: A = [0,1] and aₙ = 1−cₙ/n with cₙ alternating 1/4 and 3/4 give a valid nonmonotone choice. To enforce monotonicity put bₙ = max(a₁,…,aₙ); this maximum is one of the chosen elements, hence belongs to A, and 0 ≤ s−bₙ ≤ s−aₙ → 0. Look for the actual existence argument, not “choose the closest element.”
2. If unbounded, select xₙ with |f(xₙ)| > n. Bolzano–Weierstrass gives a subsequence xₙⱼ → x in [0,1]; continuity gives f(xₙⱼ) → f(x), contradicting unbounded absolute values. On (0,1), the subsequence can converge to an endpoint outside the domain, where continuity is unavailable. The function 1/x witnesses failure.
3. For x < y, the Mean Value Theorem on [x,y] gives |f(y)−f(x)| ≤ M|y−x|. If M > 0 take δ = ε/M; if M = 0 the function is constant and any positive δ works. Continuity of the derivative is unnecessary. Require endpoint continuity when invoking the theorem on intervals touching a or b.
4. The limit is zero except for value 1 at x = 1. The inputs xₙ = (1/2)^(1/n) give error 1/2. FTC yields ∫₀¹ xⁿ = 1/(n+1) → 0. The limit function has integral zero: isolate the endpoint in a final partition interval of arbitrarily small length, giving lower sum zero and arbitrarily small upper sum. Uniform convergence is sufficient for the exchange theorem, not necessary, so equal integrals do not prove it.
5. The uniform limit g is continuous. Define f(x) = A+∫₀ˣ g. FTC gives f′ = g and |fₙ(x)−f(x)| ≤ |fₙ(0)−A|+sup |fₙ′−g| for all x in [0,1], proving uniform convergence. The example sin(nx)/n converges uniformly to zero but its derivatives equal 1 at zero, so differentiation cannot pass through that limit. Credit the continuity and FTC checks as well as the estimate.

</details>

## Where this paper ends

This paper tests several foundations of one-variable calculus and ways their justifications can fail. The later metric-space and approximation units extend the course; measure and Lebesgue integration and functional analysis remain further study. Rewrite one proof here without notes, exchange it with a reader, and repair every unstated dependency they find. Mathematical fluency includes that revision process.
