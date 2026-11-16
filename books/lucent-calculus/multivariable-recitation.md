# Recitation C3. Choose the right local or global question

Primary companion: [Multivariable and Vector Calculus](#/books/calculus-multivariable), Euler’s L2–L3 book. Keep its chapter sequence for the main reading route and use this lesson for the stated investigation or proof connection.

**Role:** guided recitation after [functions of several variables](multivariable-differentiation.md), [total differentiability](total-differentiability.md), and [gradient geometry](gradient-chain-levels.md), before the constrained-optimization set. Work each prompt before opening its answer. The goal is to decide whether a picture suggests a limit, a derivative, a directional rate, or a global conclusion. Those are different claims.

## Board 1: a narrow ridge hidden from straight paths

Define \(F(0,0)=0\) and \(F(x,y)=x^2y/(x^4+y^2)\) away from the origin. The denominators \(x^4\) and \(y^2\) are comparable when \(y\) has the same order as \(x^2\). Before testing that curve, predict what ordinary straight-line slices will report.

For \(y=mx\) with fixed \(m\ne0\),

\[
F(x,mx)=\frac{mx^3}{x^4+m^2x^2}
=\frac{mx}{x^2+m^2}\longrightarrow0.
\]

On the horizontal and vertical axes \(F=0\). Thus **every line through the origin** reports the same limiting value zero. This is still not a proof of a two-variable limit. Try the curved path \(y=x^2\): \(F(x,x^2)=x^4/(2x^4)=1/2\) for nonzero \(x\). The function is discontinuous at the origin. A finite-resolution surface can miss the narrowing ridge; the denominator tells us where to look. The counterexample also trains a useful method: balance competing terms before choosing an adversarial path.

```exercise
{"id":"calc3-recitation-ridge","type":"written","prompt":"A classmate checked y=mx for every real m and both axes, obtaining limit zero. Explain why that does not prove continuity of F at the origin, and give a path whose formula is suggested by the denominator.","hints":["Set the two denominator terms x⁴ and y² to the same order.","Check y=x² for nonzero x and compare with the stated value at the origin."],"rubric":["Correctly distinguishes all straight lines from all approaches","Derives the curved path y=x² from term balance","Computes F(x,x²)=1/2","States that continuity fails at the origin"],"solution":"Every fixed line reports zero, but the limit definition quantifies over all domain points near the origin. Matching x⁴ with y² suggests y=x². Along this path F=x⁴/(x⁴+x⁴)=1/2 at each nonzero x, whereas F(0,0)=0. The path tends to the origin, so the two-variable limit cannot be zero and continuity fails."}
```

**Changed case:** replace the numerator \(x^2y\) by \(x^3y\). On \(y=x^2\) the value is \(x/2\to0\). Is this one successful path enough? No. Use \(|x^3y|/(x^4+y^2)\leq |x|/2\), because \(2|x^2y|\leq x^4+y^2\), to prove the full limit. The new factor \(|x|\) gives a uniform bound.

## Board 2: a zero directional rate with a real change

Return to the surface and contour investigation in [the gradient lesson](gradient-chain-levels.md). At \((1,\tfrac12)\) for \(f=x^2+2y^2\), a tangent direction is \((1,-1)\). The path \((1+t,\tfrac12-t)\) has velocity \((1,-1)\), so the chain rule gives zero rate at \(t=0\). But exact substitution gives \(f=\tfrac32+3t^2\). What changes if we instead walk on the *curved* level set \(x^2+2y^2=\tfrac32\)? Along that curve \(f\) stays exactly \(\tfrac32\). A tangent line and a level curve meet to first order; they do not coincide globally.

```exercise
{"id":"calc3-recitation-tangent","type":"written","prompt":"At (1,1/2) for f=x²+2y², explain why the direction (1,−1) has zero first-order rate but the straight motion (1+t,1/2−t) is not a level path. Give the first nonzero change term.","hints":["Compute ∇f at the point.","Expand f along the given straight path rather than reasoning from the drawing."],"rubric":["Finds ∇f=(2,2) and dot product zero","Computes f(1+t,1/2−t)=3/2+3t²","Distinguishes a tangent line from a curve staying on f=3/2","Interprets zero instantaneous rate correctly"],"solution":"The gradient (2,2) is orthogonal to the velocity (1,−1), hence the instantaneous rate is zero. Exact composition gives 3/2+3t², which exceeds 3/2 for every nonzero t. The straight tangent shares the contour's first-order direction but has a positive second-order departure."}
```

## Board 3: which candidates have we forgotten?

Consider \(G=x^2+y^2-2x-4y\) on the closed rectangle \([0,2]\times[0,1]\). A student solves \(\nabla G=0\) and gets \((1,2)\), then calls it the minimum. The point is not feasible. Another student evaluates only four corners and misses the minimum at \((1,1)\) on the top edge. The proper workflow is: state compactness and continuity; seek interior stationary points within the set; restrict to each boundary segment; inspect corners; compare actual objective values. Here the minimum is \(-4\) at \((1,1)\), while the maximum \(0\) occurs at \((0,0)\) and \((2,0)\). [The constrained-extrema lesson](extrema-constraints.md) gives the full edge calculations.

**Now change the domain:** use the *unit disk* \(x^2+y^2\leq1\), with the same objective. Complete the square \(G=(x-1)^2+(y-2)^2-5\). The target \((1,2)\) is outside the disk, so the closest and farthest feasible points lie on the circle along the line from the origin to \((1,2)\). Their coordinates are \(\pm(1,2)/\sqrt5\), with distances to \((1,2)\) equal to \(\sqrt5\mp1\). Thus

\[
G_{\min}=(\sqrt5-1)^2-5=1-2\sqrt5,\qquad
G_{\max}=(\sqrt5+1)^2-5=1+2\sqrt5.
\]

The nearest/farthest argument uses the triangle inequality and its equality cases. A multiplier calculation is another check, but the geometry explains the answer more directly. The disk includes its boundary, so the extrema are attained.

```exercise
{"id":"calc3-recitation-feasible","type":"written","prompt":"For G=x²+y²−2x−4y on the closed unit disk, justify why the two points ±(1,2)/√5 are the absolute extrema. State what compactness contributes and why the unconstrained stationary point is irrelevant.","hints":["Complete the square around (1,2).","Use the triangle inequality to bound distance from a point of length at most 1 to a point of length √5."],"rubric":["Completes square correctly","Uses norm bounds √5−1≤distance≤√5+1 and equality cases","Gives both extremal values 1∓2√5","States continuity/compactness guarantee attainment and (1,2) is infeasible"],"solution":"G=||p−(1,2)||²−5. For ||p||≤1, the reverse and ordinary triangle inequalities give √5−1≤||p−(1,2)||≤√5+1. Equality is attained at p=(1,2)/√5 and p=−(1,2)/√5 respectively. Squaring and subtracting 5 gives 1−2√5 and 1+2√5. The closed disk is compact and G continuous, so extrema exist; (1,2) has norm √5>1 and is infeasible."}
```

## Board 4: which convexity does the certificate need?

Allow a separate study session for this board; its timing remains uncalibrated. The earlier boards distinguish a local observation from a global claim. Now keep the objective fixed while changing the set of permitted competitors. Retrieve existence from [the noncompact optimization lesson](noncompact-optimization.md); here the new decisions concern certificates, uniqueness, and relaxation.

Let \(F_a(x,y)=(x-a)^2+y^2\). Its Hessian is \(2I\) **everywhere**, not only at a candidate. We will first use \(0\le a\le1\); the endpoint cases matter. A finite drawing cannot check a condition quantified over every feasible competitor.

```visual-story
{
  "id": "convex-feasible-segments",
  "title": "Can a gradient test reject a true global minimum?",
  "prompt": "Keep one strictly convex objective while changing the feasible geometry. Prove a certificate, test a purported rejection, then audit what convex relaxation changes.",
  "stages": [
    {
      "title": "Certify a minimum on a half-plane",
      "body": "Let \\(0\\le a\\le1\\) and \\(F_a(x,y)=(x-a)^2+y^2\\). The feasible set is \\(H=\\{x\\ge1\\}\\), with candidate \\(p=(1,0)\\) and competitor \\(q=(1+u,v)\\), where \\(u\\ge0\\). The shaded patch is the visible part of an unbounded half-plane. The gradient arrow is drawn at scale \\(0.3\\).",
      "question": "Prove that p is the unique global minimum on H. Why is the whole segment from p to every feasible q feasible? Can a nonzero gradient be consistent with this boundary minimum?",
      "checkpoint": {
        "hint": "Expand \\(F_a(q)-F_a(p)\\) into the gradient product and a squared displacement. Use \\(q_x-1=u\\ge0\\) and \\(1-a\\ge0\\), rather than a finite set of probes.",
        "explanation": "The exact difference is\n\\[\n\\begin{gathered}\nF_a(q)-F_a(p)\\\\\n=2(1-a)u+u^2+v^2.\n\\end{gathered}\n\\]\nThe first term is \\(\\nabla F_a(p)\\cdot(q-p)\\). It is nonnegative, and the squared displacement is positive unless \\(q=p\\). Thus \\(p\\) is the unique global minimum.\n\nThe connecting segment has \\(x=1+tu\\ge1\\) for every \\(0\\le t\\le1\\). Feasibility is what makes its initial direction available in a necessary-condition proof. For \\(a<1\\), the gradient is nonzero, yet it points toward increasing feasible \\(x\\). At \\(a=1\\), it is zero; the squared displacement still proves uniqueness.",
        "criteria": [
          "Proves the inequality for every feasible competitor, not only plotted probes.",
          "Checks the whole connecting segment stays feasible.",
          "Allows a boundary optimum with a nonzero gradient and includes the endpoint a=1."
        ]
      },
      "transition": "none",
      "focus": [
        "polygon-halfplane",
        "line-feasible_segment",
        "arrow-gradient",
        "point-candidate"
      ],
      "scene": [
        "scene \"A feasible segment supplies a valid certificate\"; domain -2.5 3; range -1.6 1.6;",
        "param a=0.5 from 0 to 1; param u=0.75 from 0 to 1.5; param v=0.5 from -1 to 1;",
        "polygon halfplane=(1,-1.6),(3,-1.6),(3,1.6),(1,1.6) color amber;",
        "point center=(a,0) color blue; point candidate=(1,0) color rose; point competitor=(1+u,v) color teal;",
        "segment feasible_segment from (1,0) to (1+u,v) color teal; arrow gradient from (1,0) to (1+0.6*(1-a),0) color rose;",
        "measure candidate_value=(1-a)^2; measure objective_gap=2*(1-a)*u+u^2+v^2; measure gradient_product=2*(1-a)*u; measure squared_displacement=u^2+v^2; measure competitor_feasibility=u; measure gradient_norm=2*(1-a);"
      ]
    },
    {
      "title": "Add a second feasible component",
      "body": "Change only the set to \\(D=\\{|x|\\ge1\\}\\). Keep \\(0\\le a\\le1\\), \\(p=(1,0)\\), and take \\(q=(-1,0)\\). Both endpoints are feasible. Move the point \\(r_t=(1-t)p+tq\\) along their chord. The shaded patches show the two unbounded half-planes. The gradient arrow uses the same scale \\(0.3\\).",
      "question": "Can the negative gradient product discard p? Establish the actual global minima, including a=0 and a=1. Identify exactly which step of a feasible-segment argument fails.",
      "checkpoint": {
        "hint": "Minimize on each half-plane separately. Their best values are \\((1-a)^2\\) and \\((1+a)^2\\). A gradient product is a first-order term; compare it with the exact total change and check \\(|1-2t|\\ge1\\).",
        "explanation": "On the right half-plane, the preceding proof gives the unique minimizer \\(p\\). On the left, the unique minimizer is \\(q\\). Their value gap is \\(4a\\). At \\(a=0\\) both minimize; for \\(0<a\\le1\\), \\(p\\) is the unique global minimum.\n\nFor this feasible competitor,\n\\[\n\\begin{gathered}\n\\nabla F_a(p)\\cdot(q-p)\\\\\n=-4(1-a).\n\\end{gathered}\n\\]\nIt is negative whenever \\(a<1\\), even when the minimum is unique. The exact total change is\n\\[\n\\begin{gathered}\nF_a(q)-F_a(p)\\\\\n=-4(1-a)+4=4a.\n\\end{gathered}\n\\]\nThe positive quadratic remainder can outweigh the negative first-order term.\n\nFor every \\(0<t<1\\), the chord point has \\(|1-2t|<1\\) and is infeasible. There is no feasible initial segment toward \\(q\\) to differentiate. At \\(a=1\\), the gradient product is zero and the certificate succeeds again. Nonconvexity does not force failure in every case.",
        "criteria": [
          "Distinguishes a negative first-order term from the actual finite objective difference.",
          "Includes the two-minimizer a=0 case and unique-minimizer positive cases.",
          "Checks initial-segment feasibility before using necessity.",
          "Does not infer that every nonconvex problem has multiple minima or a failed certificate."
        ]
      },
      "transition": "none",
      "focus": [
        "polygon-left",
        "polygon-right",
        "line-chord",
        "point-chord_point"
      ],
      "scene": [
        "scene \"A true unique minimum can fail the gradient inequality\"; domain -2.5 2.5; range -1.4 1.4;",
        "param a=0.5 from 0 to 1; param t=0.25 from 0 to 1; let r=1-2*t;",
        "polygon left=(-2.5,-1.4),(-1,-1.4),(-1,1.4),(-2.5,1.4) color amber; polygon right=(1,-1.4),(2.5,-1.4),(2.5,1.4),(1,1.4) color amber;",
        "segment chord from (1,0) to (-1,0) color teal; arrow gradient from (1,0) to (1+0.6*(1-a),0) color rose;",
        "point candidate=(1,0) color rose; point competitor=(-1,0) color teal; point chord_point=(r,0) color blue;",
        "measure candidate_value=(1-a)^2; measure competitor_value=(1+a)^2; measure objective_gap=4*a; measure gradient_product=-4*(1-a); measure squared_displacement=4; measure chord_constraint_margin=abs(r)-1; measure chord_objective=(r-a)^2;"
      ]
    },
    {
      "title": "Audit a convex relaxation",
      "body": "Replace \\(D\\) by its convex hull. The filled patch now represents the whole plane within the viewport; the blue lines remember the original gap boundaries. The objective is unchanged. The marked relaxed minimizer is \\(c=(a,0)\\).",
      "question": "Prove that the convex hull is the whole plane. Is its zero-valued minimizer an answer to the original problem? State when the relaxed answer is feasible and what its value supplies when it is not.",
      "checkpoint": {
        "hint": "For any point with \\(-1<x<1\\), use the same-height endpoints \\((-1,y)\\) and \\((1,y)\\). The relaxed objective is a squared distance, so it vanishes only at its center. Check \\(|a|\\ge1\\) before accepting that point for the original set.",
        "explanation": "A point in the gap is a convex combination of \\((-1,y)\\) and \\((1,y)\\), with weights \\((1-x)/2\\) and \\((1+x)/2\\). Points outside the gap already belong to \\(D\\), so its convex hull is \\(\\mathbb R^2\\).\n\nThe relaxed problem has the unique minimizer \\((a,0)\\), value \\(0\\). For \\(0\\le a<1\\) that point is infeasible for the original problem, whose minimum is \\((1-a)^2\\). The relaxed value supplies a lower bound, not an original feasible optimizer. At \\(a=1\\), both problems have the same minimizer and value.\n\nA point must be feasible before any gradient certificate can certify it for that problem. Convexifying the set changes the problem; it is not a rewriting of the original constraint.",
        "criteria": [
          "Proves the convex-hull claim beyond the displayed horizontal chord.",
          "Checks feasibility of the relaxed minimizer in the original set.",
          "Treats the relaxed value as a lower bound when the minimizer is infeasible.",
          "Includes the endpoint at which the relaxed and original answers agree."
        ]
      },
      "transition": "none",
      "focus": [
        "polygon-relaxation",
        "point-relaxed",
        "line-old_left",
        "line-old_right"
      ],
      "scene": [
        "scene \"Filling the gap changes the optimization problem\"; domain -2.5 2.5; range -1.4 1.4;",
        "param a=0.5 from 0 to 1;",
        "polygon relaxation=(-2.5,-1.4),(2.5,-1.4),(2.5,1.4),(-2.5,1.4) color amber;",
        "segment old_left from (-1,-1.4) to (-1,1.4) color blue; segment old_right from (1,-1.4) to (1,1.4) color blue;",
        "point original_left=(-1,0) color teal; point original_right=(1,0) color teal; point relaxed=(a,0) color rose;",
        "measure original_minimum=(1-a)^2; measure relaxed_minimum=0; measure relaxation_gap=(1-a)^2; measure original_feasibility_margin=abs(a)-1; measure left_blend_weight=(1-a)/2; measure relaxed_gradient_norm=0;"
      ]
    }
  ]
}
```

### Separate the two proof directions

A set \(D\) is **convex** if every segment between two of its points stays in \(D\). For \(p,q\) in a convex domain \(U\) and \(0\le t\le1\), write \(z_t=(1-t)p+tq\). A function \(f\) on \(U\) is convex when
\[
f(z_t)\le(1-t)f(p)+tf(q).
\]
It is **strictly convex** when the inequality is strict for distinct \(p,q\) and \(0<t<1\). These are different hypotheses: one concerns which points are allowed; the other compares their function values.

For our quadratic, expansion gives
\[
\begin{aligned}
F_a(z_t)&=(1-t)F_a(p)+tF_a(q)\\
&\quad-t(1-t)\|p-q\|^2.
\end{aligned}
\]
Thus \(F_a\) is strictly convex on the plane. Restricting the feasible set does not change that ambient identity, but it can remove the intermediate point \(z_t\).

**Sufficiency uses the objective.** Suppose \(f\) is differentiable on an open convex set \(U\), is convex there, and \(D\subset U\). Fix \(p,q\in U\) and define \(h(t)=f(p+t(q-p))\). The chord inequality gives, for \(0<t\le1\),
\[
h(1)-h(0)\ge\frac{h(t)-h(0)}t.
\]
Let \(t\downarrow0\). Differentiability gives the supporting-plane bound
\[
f(q)\ge f(p)+\nabla f(p)\cdot(q-p).
\]
Consequently, if \(p\in D\) and, for every \(q\in D\),
\[
\nabla f(p)\cdot(q-p)\ge0,
\]
then \(p\) is a global minimizer on \(D\). This direction works on **any** feasible subset of \(U\), including nonconvex ones. Its hypothesis is a universal inequality, not success at a finite list of competitors.

**Necessity uses feasible segments.** Suppose instead that \(p\) is a local minimizer on \(D\), \(f\) is differentiable near \(p\), and every segment from \(p\) to a feasible \(q\) stays in \(D\). The corresponding \(h(t)\) is at least \(h(0)\) for sufficiently small positive \(t\), so
\[
h'(0)=\nabla f(p)\cdot(q-p)\ge0.
\]
This argument does not need convexity of \(f\). A convex feasible set guarantees the needed segments. The argument actually uses only each initial segment near \(p\); convexity of the whole set is a convenient sufficient guarantee, not a logically necessary property at every individual minimizer.

With both a convex objective and a convex feasible set, the gradient inequality is necessary and sufficient for a feasible point to be globally minimizing. With only an ambient convex objective, it remains sufficient, but failure cannot automatically discard a candidate. The union and annulus examples enact precisely that failure of the converse.

### Strict convexity says at most one, on a convex feasible set

If two distinct feasible points \(p,q\) both had the minimum value \(m\), their midpoint would be feasible when \(D\) is convex. Strict convexity would give
\[
f\left(\frac{p+q}2\right)<\frac{f(p)+f(q)}2=m,
\]
a contradiction. This proves **at most one** minimizer. It does not prove attainment; use an existence argument such as [a nonempty compact sublevel](noncompact-optimization.md#one-compact-sublevel-is-enough).

On \(D=\{|x|\ge1\}\), the midpoint of \((1,0)\) and \((-1,0)\) is missing. For \(a=0\), these are the two minima despite strict ambient convexity. For \(0<a\le1\), comparison of the two components gives the unique minimum \((1,0)\). Thus nonconvexity does not force multiplicity either. For negative \(a\), reflect across the \(y\)-axis; when \(|a|\ge1\), the center \((a,0)\) is itself feasible and uniquely gives value zero.

Compare the proof directions with [Boyd and Vandenberghe, Convex Optimization](https://www.seas.ucla.edu/~vandenbe/cvxbook/bv_cvxbook.pdf), Sections 3.1.3 and 4.2.1–4.2.3, printed pages 69–71 and 137–140. Their combined optimality theorem includes both convexities. The separate roles of those assumptions and the examples here are derived above.

### Notebook: inspect the full difference before rejecting a candidate

The notebook holds \(p=(1,0)\) and \(q=(-1,0)\); its unary function evaluates their horizontal objective slice. Predict all six outputs at \(a=1/2,t=1/4\) before running. The gradient product and the full change have different meanings.

```notebook
param a=0.5 from 0 to 1;
param t=0.25 from 0 to 1;
let p=1;
let q=-1;
let r=(1-t)*p+t*q;
fn f(x)=(x-a)^2;
diff f as df;
show f(q)-f(p);
show df(p)*(q-p);
show (q-p)^2;
show f(q)-f(p)-df(p)*(q-p)-(q-p)^2;
show abs(r)-1;
show f(r)-f(p);
```

The first three outputs form the exact quadratic identity; the fourth is its computed residual. The last two test whether the chord point is permitted and whether its objective is lower than the candidate's. A negative value of \(|r|-1\) puts the point in the excluded gap.

Compare \(a=0,1/2,1\), then compare \(t=0,1/4,1\). Explain the two endpoints separately. **Source edit:** change the competitor to q=-2. Both endpoints remain feasible, but the chord still crosses the gap. Derive the new full difference, gradient product, and remainder at \(a=1/2\) before rerunning; the identity must still hold. Save an explanation before revising it. Neither a successful finite identity check nor a negative derivative replaces the written feasibility argument.

### Independent task: a connected feasible set with a hole

```exercise
{
  "id": "calc3-convex-annulus-certificate",
  "type": "written",
  "prompt": "Independent changed geometry. Let\n\\[\nA=\\{(x,y):1\\le x^2+y^2\\le4\\}\n\\]\nand minimize\n\\[\n\\begin{aligned}\nG(x,y)&=\\left(x-\\frac3{10}\\right)^2\\\\\n&\\quad+\\left(y-\\frac25\\right)^2.\n\\end{aligned}\n\\]\n(a) Prove that the feasible set is compact and connected, but not convex. Find every global minimizer and the exact minimum using a distance inequality and its equality case.\n\n(b) At your minimizing point \\(p\\), take \\(q=-p\\). Compute the global gradient product and the exact objective difference. Does the gradient inequality provide a necessary rejection test here? Inspect the segment, rather than attributing the result to disconnected components.\n\n(c) Fill the hole, changing feasibility to \\(x^2+y^2\\le4\\). Find its minimum and explain exactly which old answer and certificate can be reused.",
  "hints": [
    "The objective is squared distance from \\(c=(3/10,2/5)\\), with \\(\\|c\\|=1/2\\). Use the reverse triangle inequality and determine when equality holds.",
    "At the nearest inner-circle point, \\(p=2c\\). Compute \\(\\nabla G(p)=2(p-c)\\). The segment toward its antipode is \\((1-2t)p\\).",
    "The filled disk contains the objective's center. A relaxation may add the very point at which the objective vanishes."
  ],
  "rubric": [
    "Establishes compactness and connectedness separately from convexity.",
    "Proves the global bound and every equality case.",
    "Computes the negative gradient product and reconciles it with the actual objective gap.",
    "Identifies the infeasible initial segment on a connected feasible set.",
    "Audits the changed filled-disk problem and the changed anisotropic objective."
  ],
  "solution": "The annulus is closed and bounded, hence compact. It is connected: any point can move radially to the unit circle while staying in the annulus, then follow that circle, then move radially to any target point. But the midpoint of antipodal inner-circle points is the origin, outside \\(A\\), so the set is not convex.\n\nPut \\(c=(3/10,2/5)\\), so \\(\\|c\\|=1/2\\). For every \\(z\\in A\\),\n\\[\n\\begin{aligned}\n\\|z-c\\|&\\ge\\|z\\|-\\|c\\|\\\\\n&\\ge\\frac12.\n\\end{aligned}\n\\]\nEquality requires \\(\\|z\\|=1\\) and the same direction as the nonzero vector \\(c\\). Thus the unique minimizer is\n\\[\n\\begin{gathered}\np=\\left(\\frac35,\\frac45\\right),\\\\\n\\min_A G=\\frac14.\n\\end{gathered}\n\\]\nThe direction equality follows from equality in Cauchy–Schwarz when expanding squared distance; there is no second antipodal equality case.\n\nNow \\(q=-p\\) is feasible and \\(\\nabla G(p)=p\\). Hence\n\\[\n\\nabla G(p)\\cdot(q-p)=-2.\n\\]\nNevertheless,\n\\[\nG(q)-G(p)=\\frac94-\\frac14=2.\n\\]\nThe exact squared-distance identity gives \\(2=-2+4\\): the negative gradient term is followed by the squared displacement. For every \\(0<t<1\\), the segment has norm \\(|1-2t|<1\\) and enters the hole. The necessary-condition segment proof is unavailable, although \\(p\\) is the unique global minimum. Connectedness did not supply convexity.\n\nOn the filled radius-two disk, the center \\(c\\) is feasible. It is the unique minimizer, with value \\(0\\) and gradient \\(0\\). The old minimum \\(1/4\\) and old optimizer are no longer optimal. The relaxed minimum is a lower bound for the annulus problem; its optimizer lies in the annulus's missing hole.",
  "transfer": "Keep the annulus \\(A\\), but replace the objective by\n\\[\nW(x,y)=x^2+4y^2.\n\\]\nFind every global minimizer and its value without copying a radial projection formula. Then choose two minimizing points and test the global gradient inequality between them. Explain how the answer is consistent with the positive-definite ambient Hessian.",
  "transferSolution": "For every point of the annulus,\n\\[\nW=(x^2+y^2)+3y^2\\ge1.\n\\]\nEquality requires \\(x^2+y^2=1\\) and \\(y=0\\). Thus the only minimizers are \\((1,0)\\) and \\((-1,0)\\), with value \\(1\\).\n\nAt \\(p=(1,0)\\), \\(\\nabla W(p)=(2,0)\\). For \\(q=(-1,0)\\),\n\\[\n\\nabla W(p)\\cdot(q-p)=-4.\n\\]\nThe actual objective gap is zero; the positive quadratic remainder cancels that linear term. The ambient Hessian is \\(\\operatorname{diag}(2,8)\\) everywhere, so \\(W\\) is strictly convex on the plane. The annulus is not a convex feasible set, and the midpoint of these two minimizers is infeasible. The at-most-one theorem therefore does not apply."
}
```

**Delayed retrieval.** In a later session, state which hypothesis belongs to each proof direction, then solve the changed anisotropic objective without its model answer. Retrieve the budget-triangle problem in the [Calculus III synthesis paper](calculus-iii-synthesis.md): identify where its convex feasible set supplies uniqueness, separately from its attainment and candidate calculations.

**After the recitation:** write a three-sentence method choice for each board: what observation suggests a conjecture, what exact calculation decides it, and which assumption made that calculation legal. Use this as a checklist when solving the independent set.
