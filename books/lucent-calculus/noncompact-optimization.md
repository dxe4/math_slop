# 56. Global minima on a noncompact set

Primary companion: [Multivariable and Vector Calculus](#/books/calculus-multivariable), Euler’s L2–L3 book. Keep its chapter sequence for the main reading route and use this lesson for the stated investigation or proof connection.

**Calculus III continuation.** Prerequisites: [extrema and constraints](extrema-constraints.md), one-variable monotonicity, and the length of a planar vector. Plan two study sessions and a later retrieval attempt; these sessions are outside the published single-variable route and the existing timed papers. The question here comes before classifying a candidate: **what prevents nearly minimizing points from escaping to infinity?**

## Growth on lines can miss a curved escape

On the whole plane, consider the smooth family
\[
\begin{aligned}
F_\eta(x,y)&=\frac1{1+x^2}\\
&\quad+(y-x^2)^2+\eta x^2,\\
&\quad\eta\ge0.
\end{aligned}
\]
The domain is closed but unbounded. Its compactness cannot supply an extreme-value argument. First set \(\eta=0\). Is a check of every straight line enough to establish growth in every way of going to infinity?

The first diagram plots **objective value against a path parameter**, not a planar contour or a surface. The controls select lines \(y=mx+b\); the proof after the investigation also checks vertical lines. Save a prediction before revealing the graphs. A finite viewport can display only part of any escape.

```visual-story
{
  "id": "noncompact-confinement",
  "title": "Can a minimizing sequence escape the line checks?",
  "prompt": "Distinguish growth on one announced line from confinement of every low-value point. Predict, inspect, and revise the argument; a finite graph cannot certify an infinite tail.",
  "stages": [
    {
      "title": "Follow lines and then a curved path",
      "body": "Keep eta exactly zero. Compare the objective along (t,m*t+b) and (t,t²). Vary the line and move the selected nonnegative parameter T. These are objective-versus-parameter plots; their horizontal axis is t.",
      "question": "Prove what happens along every nonconstant affine line, including vertical lines. Does that settle the infimum on the whole plane? Find an escaping sequence and decide whether the infimum is attained.",
      "checkpoint": {
        "hint": "Write a general line as (p+u*t,q+v*t), with (u,v) not zero. Compare degrees in y−x². Then choose y=x² before sending x to infinity.",
        "explanation": "For a nonconstant line (p+ut,q+vt), if u≠0 then y−x² has leading term −u²t², so its square tends to infinity as |t|→infinity. If u=0, then v≠0 and its square grows quadratically. Every such line restriction grows at both ends. Yet F₀(n,n²)=1/(1+n²)→0 and the points escape to infinity. Since 1/(1+x²)>0 at every finite point and the other term is nonnegative, the global infimum is zero and is not attained. A radius that confines one line's low values need not confine low values in the whole plane.",
        "criteria": [
          "Requires a nonzero line direction and handles vertical lines.",
          "Proves growth for every fixed affine line rather than a list of sampled slopes.",
          "Gives an explicit escaping sequence and separates infimum from attained minimum."
        ]
      },
      "transition": "none",
      "focus": ["curve-line_value", "curve-escape_value", "point-escape"],
      "scene": [
        "scene \"Straight paths and a curved escape at eta zero\"; domain -4 4; range -0.2 8;",
        "param m=1 from -2 to 2; param b=0 from -2 to 2; param T=2 from 0 to 4;",
        "fn line_value(x)=1/(1+x^2)+(m*x+b-x^2)^2; fn escape_value(x)=1/(1+x^2);",
        "plot line_value color blue; plot escape_value color rose;",
        "point line_probe=(T,line_value(T)) color blue; point escape=(T,escape_value(T)) color rose;",
        "measure selected_parameter=T; measure line_objective=line_value(T); measure curved_objective=escape_value(T); measure curved_input_norm=sqrt(T^2+T^4); measure penalty=0;"
      ]
    },
    {
      "title": "Confine a nonempty sublevel set",
      "body": "Now eta is positive. Keep c≥1, so the origin belongs to the sublevel set F_eta≤c. The amber rectangle and blue parabolic corridor are necessary bounds; their intersection is an enclosure, not the exact sublevel set.",
      "question": "Derive bounds on x and y from F_eta≤c. Why is this sublevel set compact and nonempty? Explain why a minimum found there is also a minimum on the whole plane.",
      "checkpoint": {
        "hint": "Every summand is nonnegative. Bound eta*x² and (y−x²)² separately. Use F_eta(0,0)=1≤c, and compare points outside the sublevel set with a minimum inside it.",
        "explanation": "Because eta>0, F_eta≤c implies |x|≤sqrt(c/eta) and |y−x²|≤sqrt(c). Hence −sqrt(c)≤y≤c/eta+sqrt(c), and also |y|≤c/eta+sqrt(c). The sublevel set is bounded. It is closed by continuity, so it is compact in the plane, and it contains the origin because c≥1. Continuity gives a minimum there, with value at most c. Every point outside it has value strictly greater than c, so that minimum is global. The argument uses one nonempty compact sublevel set, not compactness of the entire plane. The displayed rectangle is a necessary enclosure; not every enclosed point has F_eta≤c.",
        "criteria": [
          "Uses positivity of eta only in the positive stage and obtains both coordinate bounds.",
          "Checks nonemptiness, closedness, and boundedness before invoking extreme values.",
          "Compares outside values and does not mistake an enclosure for the exact sublevel set."
        ]
      },
      "transition": "none",
      "focus": ["polygon-enclosure", "curve-lower", "curve-upper", "point-origin"],
      "scene": [
        "scene \"A rectangle confines a nonempty sublevel\"; domain -2.5 2.5; range -1.8 6;",
        "param eta=1 from 0.5 to 2; param c=1 from 1 to 2;",
        "let X=sqrt(c/eta); let S=sqrt(c); let Y=c/eta+S;",
        "polygon enclosure=(-X,-S),(X,-S),(X,Y),(-X,Y) color amber;",
        "fn lower(x)=x^2-S; fn upper(x)=x^2+S; plot lower color blue; plot upper color blue;",
        "point origin=(0,0) color rose;",
        "measure penalty=eta; measure sublevel_threshold=c; measure origin_objective=1; measure x_absolute_bound=X; measure y_lower_bound=-S; measure y_absolute_bound=Y;"
      ]
    },
    {
      "title": "Locate the minimum and its transition",
      "body": "For positive eta, minimize in y first and then let z=x²≥0. The graph shows the resulting objective along the parabolic valley, with both candidate x-coordinates marked. At eta=1 those markers coincide; count distinct plane points rather than drawn markers.",
      "question": "Derive every minimizer and the minimum value for eta>0. What happens exactly at eta=1? Why must eta=0 be treated separately from the positive-eta formula?",
      "checkpoint": {
        "hint": "For each fixed x, equality in the square term requires y=x². Differentiate q_eta(z)=1/(1+z)+eta*z on z≥0, and check its endpoint before solving q′=0.",
        "explanation": "For fixed x, the unique best y is x². The reduced derivative is q′(z)=eta−1/(1+z)² and increases strictly with z. For eta≥1 it is nonnegative on z≥0 and positive for z>0, so the unique minimum is z=0, giving the single point (0,0) and value 1, including eta=1. For 0<eta<1 the derivative changes from negative to positive at z=eta^(−1/2)−1. Thus the two distinct minimizers are (±sqrt(z),z), with minimum 2sqrt(eta)−eta. As eta approaches zero these points escape and their values approach zero; no finite minimizer survives at eta=0. Never substitute zero into eta^(−1/2).",
        "criteria": [
          "Justifies the reduction and checks z≥0 before accepting a stationary formula.",
          "Includes eta=1 in the unique-minimizer regime and checks its degenerate endpoint.",
          "Distinguishes two distinct positive-eta points, their escape, and the unattained zero case."
        ]
      },
      "transition": "none",
      "focus": ["curve-valley", "point-positive", "point-negative"],
      "scene": [
        "scene \"Minimizers split and escape as the penalty vanishes\"; domain -5 5; range -0.2 4;",
        "param eta=0.25 from 0.04 to 2;",
        "let raw=1/sqrt(eta)-1; let z=(raw+abs(raw))/2; let a=sqrt(z);",
        "fn valley(x)=1/(1+x^2)+eta*x^2; plot valley color blue;",
        "point positive=(a,valley(a)) color rose; point negative=(-a,valley(a)) color rose;",
        "measure penalty=eta; measure minimizing_x_squared=z; measure positive_x=a; measure minimizing_y=z; measure minimum_value=valley(a); measure origin_second_x_derivative=2*(eta-1);"
      ]
    }
  ]
}
```

## What the line test actually quantifies

The lines in the first scene omit the vertical case; the following proof does not. For
\[
\begin{gathered}
\ell(t)=(p+ut,q+vt),\\
(u,v)\ne(0,0),
\end{gathered}
\]
if \(u\ne0\), the polynomial \(q+vt-(p+ut)^2\) has degree two and nonzero leading coefficient \(-u^2\). Its square tends to infinity at both ends. If \(u=0\), then \(v\ne0\), and that polynomial is a nonconstant affine function, whose square also tends to infinity. All other terms of \(F_0\) are nonnegative.

**Coercivity** on a set \(D\subset\mathbb R^2\) means that for every real \(M\) there is a radius \(R>0\) such that
\[
\substack{p\in D\\ \|p\|>R}
\quad\Longrightarrow\quad f(p)>M.
\]
One radius must handle every point outside the ball. Equivalently, every sequence \(p_n\in D\) with \(\|p_n\|\to\infty\) has \(f(p_n)\to\infty\). If the radius statement failed, choose a point with norm greater than \(n\) and value at most the same failed threshold to produce a contradicting sequence. The forward implication follows immediately from the radius bound.

For \(F_0\), a line is announced before its tail bound is chosen. The sequence \(p_n=(n,n^2)\) defeats global coercivity: \(\|p_n\|\to\infty\), but \(F_0(p_n)=1/(1+n^2)\to0\). The curve remains in the narrowing low-value valley even while each fixed straight path eventually leaves it.

The nonzero direction matters: a constant map is not an escape along a line. No finite collection of displayed slopes or parameter values proves the universal statement, and even the proof for every genuine affine line does not prove coercivity.

## One compact sublevel is enough

For a function \(f:D\to\mathbb R\), its sublevel set at \(c\) is
\[
K_c=\{p\in D:f(p)\le c\}.
\]
Suppose \(f\) is continuous and **some** \(K_c\) is nonempty and compact as a subset of the plane. The extreme-value theorem gives a point \(p_*\in K_c\) with
\[
f(p_*)=\min_{p\in K_c}f(p)\le c.
\]
For \(p\notin K_c\), \(f(p)>c\ge f(p_*)\). This proves that \(p_*\) is a global minimizer on \(D\). An empty compact sublevel supplies no point to minimize over. We do not need every sublevel compact, nor do we need \(D\) itself compact.

Here is why the compactness step is available in the plane. For a sequence in a closed bounded subset of \(\mathbb R^2\), first extract a subsequence whose first coordinate converges by one-variable Bolzano–Weierstrass, then a further subsequence whose second coordinate converges. Both coordinates now converge; closedness retains the limit in the set. A continuous function therefore attains its minimum there by the usual convergent-subsequence proof of the extreme-value theorem.

If \(D\) is nonempty and closed, \(f\) is continuous, and \(f\) is coercive on \(D\), choose \(p_0\in D\) and \(c=f(p_0)\). The sublevel \(K_c\) contains \(p_0\), is closed by continuity and closedness of \(D\), and is bounded by coercivity with \(M=c\). It is compact, so the preceding argument gives a global minimum. Closedness must refer to the ambient plane: \(x^2+y^2\) is coercive on the open half-plane \(x>1\), but its infimum 1 is not attained there.

For our positive-penalty family, the more useful certificate is explicit. If \(F_\eta(x,y)\le c\), where \(\eta>0\) and \(c\ge1\), nonnegativity of all terms gives
\[
\begin{aligned}
|x|&\le\sqrt{c/\eta},\\
|y-x^2|&\le\sqrt c.
\end{aligned}
\]
Consequently,
\[
\begin{gathered}
-\sqrt c\le y\le c/\eta+\sqrt c,\\
|y|\le c/\eta+\sqrt c.
\end{gathered}
\]
Thus \(K_c\) is a nonempty closed bounded set. The rectangle in the scene uses the sharper lower bound on \(y\); it encloses the sublevel, rather than depicting it exactly. The argument also proves coercivity for each fixed \(\eta>0\): for any \(M\ge1\), the displayed bounds confine \(\{F_\eta\le M\}\) to a ball. For \(M<1\), use the same enclosure at level1. These radii may depend on \(\eta\); they are not uniform as \(\eta\downarrow0\).

The compact-sublevel and coercivity existence criteria can be compared with [Bertsekas, Nonlinear Programming, Appendix A, Definition A.4(d) and Proposition A.8](https://web.mit.edu/dimitrib/www/NLP_Appendixes_Refs.pdf), printed pages 754–756. That statement allows lower semicontinuity; this lesson uses the sufficient continuous case and proves it directly.

## Solve after establishing existence

For fixed \(x\), the square \((y-x^2)^2\) is minimized uniquely at \(y=x^2\). Put \(z=x^2\ge0\) and define
\[
q_\eta(z)=\frac1{1+z}+\eta z.
\]
For \(\eta>0\),
\[
\begin{aligned}
q_\eta'(z)&=\eta-\frac1{(1+z)^2},\\
q_\eta''(z)&=\frac2{(1+z)^3}>0.
\end{aligned}
\]
If \(\eta\ge1\), the derivative is nonnegative at zero and positive at every positive \(z\). The unique minimum is \(z=0\), hence \((x,y)=(0,0)\), with value 1. At \(\eta=1\) the derivative vanishes at the endpoint, but the same strict increase proves uniqueness. An exact check avoids relying on a nondegenerate Hessian:
\[
F_1(x,y)-1=(y-x^2)^2+\frac{x^4}{1+x^2}.
\]
Equality forces \(x=y=0\). The origin's Hessian is \(\operatorname{diag}(0,2)\); its local quadratic test was inconclusive, while the identity establishes a unique absolute minimum.

For \(0<\eta<1\), the unique zero of \(q_\eta'\) is
\[
z_\eta=\eta^{-1/2}-1>0.
\]
The derivative is negative below and positive above this point. Since the two real \(x\)-values with \(x^2=z_\eta\) are distinct, all minimizers and the minimum value are
\[
\begin{gathered}
(x,y)=(\pm\sqrt{z_\eta},z_\eta),\\
\min F_\eta=2\sqrt\eta-\eta.
\end{gathered}
\]
These points escape to infinity as \(\eta\downarrow0\). The minimum values tend to zero, but \(F_0\) never equals zero. A limit of minimum values need not be a minimum of the limiting function.

For example, \(\eta=1/4\) gives exactly \((\pm1,1)\) and minimum \(3/4\). At \(\eta=1/16\), the points are \((\pm\sqrt3,3)\) and the minimum is \(7/16\). At \(\eta=1\), there is one point, not two coincident minimizers.

## Notebook: zero is a mathematical case, not a division error

This notebook's unary slice function holds \(y=b\) fixed and evaluates the original objective at \((a,b)\). It also evaluates the original parabolic valley and its derivative at every permitted \(\eta\), **including zero**. The fourth output is the selected point's norm. The program does not evaluate the positive-\(\eta\) candidate formula at zero. Predict the derivative sign and whether the chosen point is minimizing before running.

```notebook
param eta=0.25 from 0 to 2;
param a=1 from -4 to 4;
param b=1 from -2 to 16;
fn slice(x)=1/(1+x^2)+(b-x^2)^2+eta*x^2;
fn valley(x)=1/(1+x^2)+eta*x^2;
show slice(a);
show valley(a);
show 2*a*(eta-1/(1+a^2)^2);
show sqrt(a^2+b^2);
table valley from 0 to 4 count 17;
```

Use \(\eta=1/4\), \(1\), and \(0\). For the first, compare \((a,b)=(1,1)\) with nearby points. At one, use the exact identity to justify uniqueness even though the \(x\)-quadratic term vanishes. At zero, increase \(a\) along \(b=a^2\): every computed value is positive, so write the sequence proof that identifies its unattained infimum.

**Edit the model:** in the slice function, replace the last term with eta*b^2, so it evaluates the penalty \(\eta y^2\) at the chosen point. Remove the old valley function, its output, the derivative output, and the table while auditing this changed model; retain the slice value and selected point's norm. Re-run at \(\eta=1/7\), \(a=1\), \(b=7/8\). Explain why the old valley \(y=x^2\) need not minimize the edited function for a fixed \(x\). Record and revise that explanation before consulting the changed-penalty solution below. Updating a function does not automatically derive a new minimizing curve or derivative formula.

## Independent task: move the penalty to another coordinate

```exercise
{
  "id": "calc3-noncompact-changed-penalty",
  "type": "written",
  "prompt": "Change the model to\n\\[\n\\begin{aligned}\nG_\\eta(x,y)&=\\frac1{1+x^2}\\\\\n&\\quad+(y-x^2)^2+\\eta y^2,\\\\\n&\\quad\\eta>0.\n\\end{aligned}\n\\]\n(a) Give explicit coordinate bounds on the nonempty sublevel \\(G_\\eta\\le c\\) for \\(c\\ge1\\), and prove a global minimum exists.\n\n(b) Complete the square in \\(y\\) before reducing to \\(z=x^2\\ge0\\). Prove that there are exactly two global minimizers for every positive eta, specifying their coordinates by the unique positive root of an equation. A radical formula is unnecessary.\n\n(c) For \\(\\eta=1/7\\), find both minimizers and the minimum exactly. Explain why copying the original family's \\(\\eta=1\\) transition or valley \\(y=x^2\\) gives a wrong answer.",
  "hints": [
    "Nonnegativity gives eta*y²≤c and |y−x²|≤sqrt(c). Bound x² by |y|+sqrt(c).",
    "With z=x², complete (y−z)²+eta*y² as a square centered at z/(1+eta).",
    "The reduced derivative is strictly increasing, negative at zero and eventually positive. For eta=1/7, test the rational root z=1."
  ],
  "rubric": [
    "Derives valid coordinate bounds and verifies nonemptiness and ambient closedness",
    "Completes the square and obtains the new minimizing curve",
    "Proves existence and uniqueness of the positive scalar root",
    "Accounts for both distinct plane minimizers and the exact special case",
    "Explains why the original penalty's parameter transition cannot be copied"
  ],
  "solution": "If \\(G_\\eta\\le c\\), then\n\\[\n\\begin{aligned}\n|y|&\\le\\sqrt{c/\\eta},\\\\\n|y-x^2|&\\le\\sqrt c.\n\\end{aligned}\n\\]\nThus \\(x^2\\le|y|+\\sqrt c\\), giving\n\\[\n|x|≤\\sqrt{\\sqrt{c/\\eta}+\\sqrt c}.\n\\]\nFor \\(c\\ge1\\), the sublevel contains the origin. It is closed by continuity and bounded by these inequalities, hence compact. Its minimum is global by comparison with outside values.\n\nPut \\(z=x^2\\) and \\(\\kappa=\\eta/(1+\\eta)>0\\). Completing the square gives\n\\[\n\\begin{aligned}\nG_\\eta&=(1+\\eta)\\left(y-\\frac z{1+\\eta}\\right)^2\\\\\n&\\quad+\\frac1{1+z}+\\kappa z^2.\n\\end{aligned}\n\\]\nFor fixed \\(z\\), the best \\(y\\) is \\(z/(1+\\eta)\\). The reduced function \\(\\phi(z)=1/(1+z)+\\kappa z^2\\) has\n\\[\n\\begin{aligned}\n\\phi'(z)&=-\\frac1{(1+z)^2}+2\\kappa z,\\\\\n\\phi''(z)&=\\frac2{(1+z)^3}+2\\kappa>0.\n\\end{aligned}\n\\]\nIts derivative starts at \\(-1\\) and tends to infinity, so it has exactly one positive zero \\(z_*\\). Equivalently,\n\\[\n2\\kappa z_*(1+z_*)^2=1.\n\\]\nThe two distinct minimizers are\n\\[\n\\left(\\pm\\sqrt{z_*},\\frac{z_*}{1+\\eta}\\right).\n\\]\nNo positive \\(\\eta\\) makes \\(z_*=0\\).\n\nAt \\(\\eta=1/7\\), we have \\(\\kappa=1/8\\), and \\(z_*=1\\) satisfies the equation. The points are \\((\\pm1,7/8)\\), with minimum \\(1/2+1/8=5/8\\). Moving the penalty changed the minimizing curve and removed the original positive threshold at \\(\\eta=1\\).",
  "transfer": "Change the valley as well: let\n\\[\n\\begin{aligned}\nH(x,y)&=\\frac1{1+x^2}\\\\\n&\\quad+(y-x^3)^2+\\frac1{11}y^2.\n\\end{aligned}\n\\]\nProve that a global minimum exists, find every minimizer and its exact value, and explain why the two minimizing y-coordinates now have opposite signs.",
  "transferSolution": "For \\(H\\le c\\) with \\(c\\ge1\\), we have \\(|y|\\le\\sqrt{11c}\\) and \\(|y-x^3|\\le\\sqrt c\\), so\n\\[\n|x|≤\\big(\\sqrt{11c}+\\sqrt c\\big)^{1/3}.\n\\]\nThe sublevel is nonempty, closed and bounded; its minimum is global. Completing the square gives\n\\[\n\\begin{aligned}\nH&=\\frac{12}{11}\\left(y-\\frac{11}{12}x^3\\right)^2\\\\\n&\\quad+\\frac1{1+x^2}+\\frac{x^6}{12}.\n\\end{aligned}\n\\]\nWith \\(z=x^2\\ge0\\), the reduced derivative is\n\\[\n-\\frac1{(1+z)^2}+\\frac{z^2}{4}.\n\\]\nIt is strictly increasing on \\(z\\ge0\\), since its derivative is \\(2/(1+z)^3+z/2>0\\), and vanishes at \\(z=1\\). Hence the only minimizers are \\((1,11/12)\\) and \\((-1,-11/12)\\), with minimum \\(1/2+1/12=7/12\\). The new minimizing curve is \\(y=(11/12)x^3\\), which preserves the sign of \\(x\\). Copying the parabolic valley would lose this change of geometry."
}
```

## Independent task: is coercivity necessary?

```exercise
{
  "id": "calc3-one-sublevel-suffices",
  "type": "written",
  "prompt": "On \\(\\mathbb R^2\\), consider\n\\[\nU(x,y)=\\frac{x^2}{1+x^2}+y^2,\n\\]\nprove that the level 1/2 sublevel is nonempty and compact. Decide whether U is coercive, and find all global minimizers. Explain how one compact sublevel can prove existence even when some larger sublevels are unbounded.",
  "hints": [
    "At level 1/2, each nonnegative term is at most 1/2; solve the inequality involving x².",
    "Test the escaping sequence (n,0) for coercivity, then inspect equality in the nonnegative summands."
  ],
  "rubric": [
    "Checks the chosen sublevel is nonempty, closed and bounded",
    "Uses an escaping sequence to decide coercivity",
    "Finds every equality case for the global lower bound",
    "Distinguishes one compact sublevel from compactness of all sublevels"
  ],
  "solution": "The origin belongs to the level 1/2 sublevel. On this set, the nonnegative terms give\n\\[\n\\begin{aligned}\n\\frac{x^2}{1+x^2}&\\le\\frac12,\\\\\ny^2&\\le\\frac12.\n\\end{aligned}\n\\]\nThe first inequality implies \\(|x|\\le1\\), and the second gives \\(|y|\\le1/\\sqrt2\\). Continuity makes the sublevel closed, so it is compact.\n\nYet \\(U(n,0)=n^2/(1+n^2)\\to1\\), not infinity, so \\(U\\) is not coercive. The level 1 sublevel contains the entire x-axis and is unbounded. The nonnegative formula gives the unique global minimum \\(0\\) at \\((0,0)\\). The compact level 1/2 sublevel already proves existence: outside it all values are greater than 1/2. Coercivity is sufficient, not necessary.",
  "transfer": "Replace U by\n\\[\nV(x,y)=\\frac1{1+x^2}+y^2.\n\\]\nFind its infimum and decide attainment. For every real threshold c, determine whether its sublevel is empty, compact and nonempty, or unbounded. Explain why the one-sublevel theorem does not supply a minimum.",
  "transferSolution": "Every finite point has V>0, and V(n,0)→0, so the infimum 0 is not attained.\n\nIf c≤0, the sublevel is empty. If c>0, sufficiently large |x| satisfy 1/(1+x²)≤c; all such (x,0) lie in it, so it is unbounded. There is no nonempty compact sublevel. Empty compact sets cannot provide a minimizer, while the nonempty sublevels fail boundedness."
}
```

**Delayed retrieval.** After another problem session, close this lesson and reconstruct the radius quantifiers, the compact-sublevel proof, and the exact \(\eta=1\) argument. Then solve the changed cubic-valley task without its model answer. A saved self-check records your comparison; a mathematical proof still needs your own verification or an instructor's review.
