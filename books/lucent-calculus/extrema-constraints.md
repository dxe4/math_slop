# 52. Extrema, boundaries, and constrained choices

Primary companion: [Multivariable and Vector Calculus](#/books/calculus-multivariable), Euler’s L2–L3 book. Keep its chapter sequence for the main reading route and use this lesson for the stated investigation or proof connection.

**Calculus III · fourth lesson.** Prerequisites: Chapters 50–51, the one-variable extreme-value and mean-value theorems, and completing a square. Suggested study: three sessions plus the later problem set. A stationary equation generates candidates; a complete optimization argument decides which candidates matter, checks boundaries and regularity, and compares actual values.

## First ask where an extremum can occur

If \(f\) is differentiable on an open neighborhood of an interior local maximum or minimum \(p\), then \(\nabla f(p)=0\). Fix \(y\) and vary \(x\): the one-variable slice has an interior extremum, so its derivative \(f_x(p)=0\). Fix \(x\) to obtain \(f_y(p)=0\). This **necessary condition** does not classify the point. The origin is stationary for \(x^2+y^2\) (minimum), \(-x^2-y^2\) (maximum), \(x^2-y^2\) (saddle), and \(x^3\) (neither a maximum nor minimum).

If \(f\) is continuous on a **compact** feasible region \(D\subset\mathbb R^2\), the extreme-value theorem guarantees an absolute maximum and minimum. At an interior differentiable point, test \(\nabla f=0\). On a smooth boundary, restrict \(f\) to a parametrisation or use multipliers when the boundary is regular. Check corners, endpoints, and points where differentiability or the parametrisation fails. Finally compare the values of all viable candidates. Compactness guarantees existence, not the location or a formula.

## The second-order local test, with its real hypotheses

Suppose \(f\) has continuous second partials near a stationary point \(p\). With \(v=(h,k)\), Taylor's theorem gives

\[
f(p+v)-f(p)=\frac12\big(Ah^2+2Bhk+Ck^2\big)+o(\|v\|^2),
\quad
A=f_{xx}(p),\ B=f_{xy}(p),\ C=f_{yy}(p).
\]

The equality \(f_{xy}=f_{yx}\) follows under the stated continuity assumptions. Put \(D=AC-B^2\). If \(A>0,D>0\), then completing the square gives

\[
Ah^2+2Bhk+Ck^2
=A\left(h+\frac BA k\right)^2+\frac DA k^2>0
\quad\text{for every }(h,k)\ne(0,0).
\]

On the unit circle the continuous quadratic form has a positive minimum \(m\); scaling gives \(Q(v)\geq m\|v\|^2\). The \(o(\|v\|^2)\) remainder is smaller than \(m\|v\|^2/4\) for sufficiently small nonzero \(v\), proving a **strict local minimum**. If \(A<0,D>0\), apply the argument to \(-f\) for a strict local maximum. If \(D<0\), the quadratic form takes both signs along two directions, and the remainder cannot suppress those signs for sufficiently small steps: the point is a saddle. If \(D=0\), this test is inconclusive. None of these local conclusions alone is an absolute conclusion on a feasible region.

```mathviz
scene "Two slices can change classification";
domain -2 2;
range -4 4;
param k = 1 from -2 to 2;
fn east(x) = x^2;
fn north(x) = k*x^2;
plot east color teal;
plot north color rose;
```

The graphs show \(z=f(x,0)\) and \(z=f(0,y)\) for \(f(x,y)=x^2+ky^2\), each plotted against displacement along its own axis. **Predict:** what happens at \(k=0\)? **Explore:** compare positive, zero, and negative \(k\). **Explain:** \(D=4k\); the sign classifies \(k\ne0\). When \(k=0\), direct inspection shows a non-strict minimum along the entire line \(x=0\). **Transfer:** for \(x^2+y^4\) and \(x^2-y^4\), both have \(D=0\) at the origin, but the former has a strict minimum and the latter a saddle. The visual slices can prompt a conjecture; the signs of the full formulas settle it.

### Worked example: local classification versus global value

Let \(F(x,y)=x^2+xy+y^2-6x\). Solving \(F_x=2x+y-6=0\) and \(F_y=x+2y=0\) gives \(p=(4,-2)\). The Hessian has \(A=2,B=1,C=2,D=3>0\), so this is a strict local minimum. In fact, writing \(x=4+h,y=-2+k\) yields the exact identity

\[
F(x,y)=-12+h^2+hk+k^2.
\]

The quadratic form is positive except at \((h,k)=(0,0)\), so this is the **unique absolute minimum on all of \(\mathbb R^2\)**. The exact identity establishes the global claim; a local Hessian test alone would not.

## A compact region can put every optimum on its boundary

Minimise and maximise \(G(x,y)=x^2+y^2-2x-4y\) on \(D=[0,2]\times[0,1]\). The unconstrained stationary point \((1,2)\) lies outside \(D\), so it cannot decide the problem. In the interior \(G_y=2y-4<0\), so moving upward decreases \(G\). On the top edge \(y=1\), \(G(x,1)=x^2-2x-3=(x-1)^2-4\), with minimum \(-4\) at \((1,1)\) and edge maximum \(-3\) at its endpoints. On the bottom edge \(y=0\), \(G(x,0)=(x-1)^2-1\), with maximum \(0\) at \((0,0)\) and \((2,0)\). On the vertical edges, \(G(0,y)=y^2-4y\) and \(G(2,y)=y^2-4y\), each decreasing on \(0\leq y\leq1\), so their endpoints have already been checked. Thus the absolute minimum is \(-4\) and the absolute maximum is \(0\), attained at two corners. All four edge types and the corners have an explicit role in the argument.

Notice a shortcut: \(G=(x-1)^2+(y-2)^2-5\). The nearest point of the rectangle to \((1,2)\) is \((1,1)\); the farthest are the bottom corners. This geometric check agrees with the edge calculation. The algebraic edge method still matters when the feasible region has a curved or irregular boundary.

## Why Lagrange multipliers work

Suppose the feasible curve is \(g(x,y)=c\), where \(f,g\) are continuously differentiable near a candidate \(p\) and \(\nabla g(p)\ne0\). The implicit function theorem gives a local smooth curve through \(p\) with a nonzero tangent \(v\) perpendicular to \(\nabla g(p)\). At a local constrained extremum, the derivative of \(f\) along that curve is zero, so \(\nabla f(p)\cdot v=0\). In the plane the vectors perpendicular to the same nonzero tangent form one line; therefore

\[
\nabla f(p)=\lambda\nabla g(p),\qquad g(p)=c
\]

for some real \(\lambda\). The multiplier equations are **necessary under this regularity condition**. They do not automatically prove an extremum, find all boundary components, or cover singular points with \(\nabla g=0\).

### Worked ellipse: solve, then compare

Find extrema of \(f(x,y)=x+2y\) subject to \(g=x^2/4+y^2=1\). The constraint is a compact ellipse and \(\nabla g=(x/2,2y)\ne0\) on it. The equations \((1,2)=\lambda(x/2,2y)\) give \(x=2/\lambda\), \(y=1/\lambda\). Substitution into \(g=1\) yields \(2/\lambda^2=1\), so \(\lambda=\pm\sqrt2\). The candidate points are \((\sqrt2,1/\sqrt2)\) and \((-\sqrt2,-1/\sqrt2)\), with objective values \(\pm2\sqrt2\). Existence from compactness and the fact that all regular extrema satisfy the equations complete the argument. As a check, parametrise \(x=2\cos t,y=\sin t\): \(f=2(\cos t+\sin t)\), whose amplitude is \(2\sqrt2\).

### When the multiplier equations miss a real minimum

Let \(g(x,y)=x^2+y^2=0\) and minimise \(f(x,y)=x\). The feasible set is the singleton \(\{(0,0)\}\), so its minimum and maximum both equal zero. At that point \(\nabla g=(0,0)\), while \(\nabla f=(1,0)\); there is no \(\lambda\) satisfying \(\nabla f=\lambda\nabla g\). Nothing paradoxical happened: the regularity hypothesis failed. A richer singular example is the cusp \(y^2=x^3\), which forces \(x\geq0\). The objective \(x\) has a constrained minimum at the singular origin; away from it, examine the two smooth branches \(y=\pm x^{3/2}\). Treating all constraints as smooth curves can erase precisely the point of interest.

Even at a **regular** point, satisfying the multiplier equation does not establish an extremum. Take the constraint \(g(x,y)=y=0\) and objective \(f(x,y)=x^3\). The origin is regular because \(\nabla g=(0,1)\ne0\), and \(\nabla f(0,0)=(0,0)=0\cdot\nabla g(0,0)\). On the feasible line, however, \(f(x,0)=x^3\) changes sign at zero; the point is neither a constrained maximum nor a minimum. Multipliers generate candidates. Restriction to the feasible set and comparison of values decide them.

## A regular curve can have a degenerate defining expression

The singleton and cusp above have genuinely different geometry from a regular
curve. A separate danger is to describe an ordinary smooth curve by an equation
whose gradient loses the information the multiplier theorem needs. An equation
and its zero set are different objects.

Keep the objective \(f(x,y)=x\) and put
\[
g(x,y)=x^2+y^2-1,
\]
\[
h_\tau(x,y)=g(x,y)^3+\tau g(x,y).
\]
In this investigation \(\tau\ge0\). Identify the feasible set before opening a
diagram; do not infer it from contours sampled by a plotting program. The
drawing uses the circle's parameterization, and the exact factorization
establishes whether that curve is the full zero set of the chosen expression.

```visual-story
{
  "id": "constraint-representation-circle",
  "title": "The same circle, different multiplier equations",
  "prompt": "Identify the feasible set before differentiating its defining expression. Save a prediction at each stage, then explain which conclusion belongs to the set and which requires a regular representation.",
  "stages": [
    {
      "title": "Rescale the regular normal",
      "body": "Let \\(g=x^2+y^2-1\\), and use the family \\(h_\\tau\\) defined above with \\(\\tau>0\\). The blue curve is the unit circle, parameterized independently of \\(h_\\tau\\). The candidate \\(P=(1,0)\\) and objective \\(f=x\\) stay fixed. Both gradient arrows use the same quarter scale; the constant objective gradient is drawn at the origin.",
      "question": "Prove that h_tau=0 describes exactly this circle for every positive tau. Find all extrema of f, check qualification, and derive both multipliers before changing tau. Which quantities may change with the representation?",
      "checkpoint": {
        "hint": "Factor \\(h_\\tau=g(g^2+\\tau)\\). On \\(g=0\\), differentiate the composition before evaluating its gradient.",
        "explanation": "For \\(\\tau>0\\), the factor \\(g^2+\\tau\\) is positive everywhere, so \\(h_\\tau=0\\) if and only if \\(g=0\\). Hence the feasible circle and its absolute extrema remain fixed: \\(f\\) has maximum \\(1\\) at \\((1,0)\\) and minimum \\(-1\\) at \\((-1,0)\\), since \\(-1\\le x\\le1\\) with equality only there.\n\nOn the circle, the chain rule gives\n\\[\n\\nabla h_\\tau=2\\tau(x,y),\n\\]\nwhich never vanishes. Solving the multiplier equation gives the same two candidates, with\n\\[\n\\begin{aligned}\n\\lambda_{\\max}&=\\frac1{2\\tau},\\\\\n\\lambda_{\\min}&=-\\frac1{2\\tau}.\n\\end{aligned}\n\\]\nDecreasing \\(\\tau\\) shrinks this constraint's gradient and enlarges its multiplier; it changes neither the feasible set nor the objective values. The number \\(\\lambda\\) depends on the scale of the chosen constraint expression.",
        "criteria": [
          "Proves exact equality of feasible sets by factorization, rather than from the plotted circle.",
          "Checks a nonzero constraint gradient on every feasible point.",
          "Finds both extremal points and the two scaling-dependent multipliers."
        ]
      },
      "transition": "none",
      "focus": [
        "arrow-normal",
        "arrow-objective",
        "point-candidate"
      ],
      "scene": [
        "scene \"A regular constraint normal can change scale\"; domain -1.3 1.8; range -1.3 1.3; coordinates equal;",
        "param tau = 0.25 from 0.05 to 1;",
        "parametric feasible(x) = (cos(x),sin(x)) from 0 to 2*pi color blue;",
        "point candidate = (1,0) color rose; point minimum = (-1,0) color teal;",
        "vector objective = (0.25,0) color violet; arrow normal from (1,0) to (1+tau/2,0) color amber;",
        "measure constraint_value = 0; measure gradient_norm = 2*tau; measure maximum_value = 1; measure minimum_value = -1;",
        "measure maximum_multiplier = 1/(2*tau); measure minimum_multiplier = -1/(2*tau);",
        "# Blue: the common feasible circle. Both arrows show one quarter of a gradient; the constant objective gradient is drawn at the origin. P is the maximum candidate."
      ]
    },
    {
      "title": "Set the derivative factor to zero",
      "body": "At \\(\\tau=0\\), \\(h_0=g^3\\). The circle is again drawn from its independent parameterization. Move the point around it and try a multiplier. A zero gradient has no visible arrow; its norm and the full stationarity residual are listed explicitly.",
      "question": "Does the feasible set stop being a smooth circle at tau=0? Can any real multiplier solve the first-order equation at an actual optimum? Explain why this is different from the singleton and cusp examples above.",
      "checkpoint": {
        "hint": "The equation \\(g^3=0\\) still implies \\(g=0\\). Compute \\(\\nabla(g^3)\\) on that set, and compare it with the nonzero constant objective gradient.",
        "explanation": "The zero set remains exactly the same unit circle, a smooth geometric curve. But\n\\[\n\\nabla h_0=3g^2\\nabla g=0\n\\]\nat every feasible point. Since \\(\\nabla f=(1,0)\\), the multiplier equation becomes\n\\[\n(1,0)=\\lambda(0,0),\n\\]\nwhich has no solution for any real \\(\\lambda\\). Its residual norm is exactly one, including at the true maximum and minimum.\n\nThe theorem's hypothesis fails for this defining expression. It does not say that the geometric circle is singular or that the extrema disappeared. The parameterized circle or the regular equation \\(g=0\\) still supplies a valid route.",
        "criteria": [
          "Separates a smooth feasible circle from a degenerate defining expression.",
          "Proves the gradient vanishes at all feasible points, not only the selected one.",
          "Uses one algebraic obstruction for every possible multiplier.",
          "Retains and justifies the actual extrema independently of the failed equations."
        ]
      },
      "transition": "indicate",
      "focus": [
        "point-candidate",
        "arrow-objective"
      ],
      "scene": [
        "scene \"A degenerate expression for the same smooth circle\"; domain -1.3 1.8; range -1.3 1.3; coordinates equal;",
        "param turns = 0 from 0 to 1; param ell = 2 from -8 to 8;",
        "let px = cos(2*pi*turns); let py = sin(2*pi*turns);",
        "parametric feasible(x) = (cos(x),sin(x)) from 0 to 2*pi color blue;",
        "point candidate = (px,py) color rose; vector objective = (0.25,0) color violet;",
        "measure constraint_gradient_norm = 0; measure objective_gradient_norm = 1; measure trial_multiplier = ell; measure stationarity_residual_norm = 1; measure selected_objective = px;",
        "# Tau is exactly zero. The constraint gradient is zero at every circle point and has no nonzero arrow. The objective arrow is one quarter of (1,0), drawn at the origin."
      ]
    },
    {
      "title": "Repair the defining expression",
      "body": "Use \\(k_\\beta=g+\\beta g^3\\) with \\(\\beta\\ge0\\). The point \\(P=(1,0)\\) remains fixed; the amber probe may leave the circle. Compare changing the constraint value off the circle with changing the normal at \\(P\\).",
      "question": "Show why this nonlinear change preserves the feasible circle and a nonzero normal. Derive the multiplier at P. Does the success of this example mean every nonlinear rewriting is harmless, or that one local derivative test establishes global equality of zero sets?",
      "checkpoint": {
        "hint": "Factor \\(k_\\beta=g(1+\\beta g^2)\\). Then differentiate \\(u\\mapsto u+\\beta u^3\\) and evaluate its derivative at zero.",
        "explanation": "For \\(\\beta\\ge0\\), the factor \\(1+\\beta g^2\\) is positive everywhere, so \\(k_\\beta=0\\) if and only if \\(g=0\\), globally. The chain rule multiplies \\(\\nabla g\\) by \\(1+3\\beta g^2\\). On the circle this factor is one, so qualification holds and the multiplier at \\(P\\) is \\(1/2\\) for every \\(\\beta\\).\n\nValues at a probe off the circle can change even while the feasible set and its normal at \\(P\\) stay fixed. This example's global zero-set claim comes from its positive factor. In general, a nonzero derivative at the relevant zero protects only a sufficiently small neighborhood; another zero of the scalar rewriting may create an additional feasible component elsewhere.",
        "criteria": [
          "Proves global equality of zero sets using this example's positive factor.",
          "Computes the derivative factor at zero and the repaired multiplier.",
          "Distinguishes the local reparameterization criterion from an extra global claim."
        ]
      },
      "transition": "reveal",
      "focus": [
        "arrow-normal",
        "point-probe"
      ],
      "scene": [
        "scene \"A nonlinear regular repair keeps the same feasible circle\"; domain -1.3 1.8; range -1.3 1.3; coordinates equal;",
        "param beta = 1 from 0 to 4; param r = 0.8 from 0.6 to 1.4;",
        "let u = r^2-1;",
        "parametric feasible(x) = (cos(x),sin(x)) from 0 to 2*pi color blue;",
        "point candidate = (1,0) color rose; point probe = (r,0) color amber;",
        "vector objective = (0.25,0) color violet; arrow normal from (1,0) to (1.5,0) color teal;",
        "measure probe_g = u; measure probe_rewritten_value = u+beta*u^3; measure derivative_factor_at_zero = 1; measure gradient_norm_at_candidate = 2; measure maximum_multiplier = 0.5;",
        "# The probe is a free point and need not be feasible. Arrows are one quarter of their gradients; the constant objective gradient is drawn at the origin."
      ]
    }
  ]
}
```

### A local criterion for a safe rewriting

Let \(g\) be continuously differentiable near \(p\), with \(g(p)=0\) and
\(\nabla g(p)\ne0\). Suppose \(\phi\) is continuously differentiable near zero,
\(\phi(0)=0\), and \(\phi'(0)\ne0\). Define \(h=\phi\circ g\).

Then **near \(p\)** the equations \(h=0\) and \(g=0\) have the same solutions,
and \(h\) is also a regular defining expression there. To prove the first
claim, continuity of \(\phi'\) gives an interval about zero on which its
derivative keeps one nonzero sign. The mean value theorem makes \(\phi\)
strictly monotone on that interval, so its only zero there is zero. Continuity
of \(g\) gives a neighborhood of \(p\) whose \(g\)-values lie in that interval.
Within that neighborhood, \(\phi(g(x,y))=0\) if and only if \(g(x,y)=0\).
Shrink the neighborhood further so that \(\nabla g\ne0\) throughout it;
continuity of \(\nabla g\) and \(\nabla g(p)\ne0\) make this possible.

The chain rule gives, at a point of this common zero set,
\[
\nabla h=\phi'(0)\nabla g.
\]
Both gradients are nonzero. If a multiplier for the regular equation \(g=0\)
is \(\lambda_g\), the equivalent multiplier equation for \(h=0\) uses
\[
\lambda_h=\frac{\lambda_g}{\phi'(0)}.
\]
The stationary candidate and feasible geometry remain fixed; the multiplier
number changes with the expression's scale. A multiplier for an equality
constraint can have either sign.

This is a sufficient **local** criterion. It neither proves that an arbitrary
rewriting has no additional zero elsewhere nor says that derivative zero
changes the zero set. For example, \(\phi(u)=u^3\) has exactly the same single
zero but a vanishing derivative there; this is precisely the defective
representation at \(\tau=0\). Conversely, \(\phi(u)=u(u-1)\) has
\(\phi'(0)=-1\ne0\) but also the zero \(u=1\). For our \(g\), its global zero
set contains both
\[
x^2+y^2=1\quad\text{and}\quad x^2+y^2=2.
\]
Near any point of the first circle the local theorem works; globally the extra
circle changes the feasible set. A global equivalence requires a separate
zero-set argument, such as the positive factorizations in the story.

### Notebook: test a multiplier without dividing by zero

First predict the derivative at zero and the stationarity residual at the
maximum \(P=(1,0)\). In the table, the scalar input represents the constraint
value \(u=g(x,y)\), not a position on the plane. The residual is
\(1-2\lambda\phi_\tau'(0)\), the first component of
\(\nabla f-\lambda\nabla h_\tau\) at \(P\); its other component is zero.
It is a signed residual, so use its absolute value when discussing a norm.

```notebook
param tau = 0.25 from 0 to 1;
param ell = 2 from -8 to 8;
fn phi(x) = x^3+tau*x;
diff phi as slope;
table phi from -1 to 1 count 5;
show slope(0);
show 2*ell*slope(0);
show 1-2*ell*slope(0);
```

At the defaults, \(\phi_\tau'(0)=1/4\) and \(\lambda=2\) makes the residual
zero. Set \(\tau=1/8\) and predict a new multiplier before changing it. Then
set \(\tau=0\) and vary \(\lambda\): explain algebraically why no multiplier,
even outside the slider range, can cancel the residual. This program never
divides by \(\tau\); the zero case remains a legitimate computation.

Now edit the source to replace the cubic term by \(x^5\), and differentiate
again. Prove whether the feasible set and the gradient factor at zero change
for \(\tau\ge0\). The table is only five samples of a scalar function; the
factorization and the derivative calculation establish the claims for every
input. Save the first explanation before revising it.

```exercise
{"id":"calc3-representation-diagnostic","type":"choice","prompt":"For f=x, the equation (x²+y²−1)³=0 gives no solution to the multiplier equations. Which conclusion is justified?","options":[{"label":"The unit circle is singular, so it has no maximum or minimum of x.","correct":false,"feedback":"The feasible set is the ordinary unit circle and x attains ±1 there. A degenerate defining expression does not make that geometric curve singular."},{"label":"The equation's gradient vanishes on its zero set; a regular defining equation or parameterization repairs the method.","correct":true,"feedback":"The zero set remains g=0, but ∇(g³)=3g²∇g vanishes there. The regularity hypothesis fails for this expression, not for the existence of the extrema."},{"label":"A sufficiently large finite multiplier will recover the missing extrema at tau=0.","correct":false,"feedback":"Any real multiplier times the zero gradient is zero, while ∇f=(1,0). A limit of multipliers from positive tau is not a finite multiplier for the zero case."}],"hints":["Separate the geometric zero set from the gradient of its chosen equation."]}
```


```exercise
{
  "id": "calc3-parabola-representation",
  "type": "written",
  "prompt": "Independent repair. Minimize \\(f(x,y)=y\\) using each of the constraints\n\\[\ng(x,y)=y-x^2=0,\n\\]\n\\[\ng(x,y)^3=0.\n\\]\n\n(a) Identify each full feasible set and prove the absolute minimum, including uniqueness.\n\n(b) Compare the gradients and multiplier equations at the minimizing point. Decide whether a failed equation establishes that no optimum exists, and repair the method with a regular equation or parameterization.\n\n(c) For \\(h_\\tau=g^3+\\tau g\\), \\(\\tau>0\\), derive the multiplier at the minimizer and explain what happens at exactly \\(\\tau=0\\). State which claims are global and which rely on a derivative hypothesis.",
  "hints": [
    "Use \\(y=x^2\\) to prove a lower bound and its equality case. A parameterization is \\(t\\mapsto(t,t^2)\\).",
    "At the origin, compare \\(\\nabla f=(0,1)\\) with \\(\\nabla g=(-2x,1)\\) and \\(\\nabla(g^3)=3g^2\\nabla g\\).",
    "Factor \\(h_\\tau=g(g^2+\\tau)\\). First prove the feasible-set claim, then evaluate its gradient on the zero set. Do not divide by \\(\\tau\\) when it is zero."
  ],
  "rubric": [
    "Identifies exactly the same parabola for the first two constraints",
    "Proves a unique absolute minimum from a global bound and equality case",
    "Checks regularity and solves the valid multiplier equation",
    "Explains the missing multiplier for the cubic expression without discarding the actual optimum",
    "Repairs the method and handles positive tau separately from zero",
    "Tests the changed expression globally rather than extending a local theorem without justification"
  ],
  "solution": "Both real equations are equivalent to \\(g=0\\), so both feasible sets are \\(y=x^2\\). On this set \\(f=y=x^2\\ge0\\), with equality only at \\(x=0\\), hence at \\((0,0)\\). Thus the absolute minimum is zero and is unique. The set is unbounded, so compactness was not the reason for existence; the exact lower bound and equality case establish it.\n\nAt the minimizer,\n\\[\n\\nabla f=(0,1),\\qquad \\nabla g=(0,1).\n\\]\nThe regular equation therefore has multiplier \\(\\lambda_g=1\\). The cubic expression has gradient \\(3g^2\\nabla g=0\\) at every feasible point. Its multiplier equation would require \\((0,1)=\\lambda(0,0)\\), impossible for any real \\(\\lambda\\). That equation lies outside the theorem's hypotheses.\n\nA repair is to use \\(g=0\\), whose gradient \\((-2x,1)\\) is nonzero everywhere. Alternatively, restrict \\(f\\) to \\((t,t^2)\\), obtaining \\(t^2\\); its exact minimum is at \\(t=0\\). Repairing the equation changes neither the feasible set nor the objective.\n\nFor \\(\\tau>0\\), the factor \\(g^2+\\tau\\) is positive everywhere, so \\(h_\\tau=0\\) is globally equivalent to \\(g=0\\). On that set,\n\\[\n\\nabla h_\\tau=\\tau\\nabla g.\n\\]\nAt the minimizer the multiplier is \\(\\lambda_\\tau=1/\\tau\\). At exactly \\(\\tau=0\\) no finite multiplier exists, although the same optimum remains. The derivative criterion for a general scalar rewriting is local; the global equivalence in this particular family follows from its factorization.",
  "transfer": "Change the defining expression to\n\\[\nH=g(g+1).\n\\]\nIts scalar map has nonzero derivative at \\(g=0\\). Does the local rewriting criterion establish global equivalence with the original parabola? Identify the full new feasible set, minimize \\(y\\) on it, and find a valid multiplier at the new minimizer.",
  "transferSolution": "The scalar map \\(\\psi(u)=u(u+1)\\) has \\(\\psi(0)=0\\) and \\(\\psi'(0)=1\\ne0\\). Therefore the local criterion works near points of the original parabola. But the global zero set also includes \\(g=-1\\). In full,\n\\[\ny=x^2\\quad\\text{or}\\quad y=x^2-1.\n\\]\nThe minimum of \\(y\\) on the union is \\(-1\\), uniquely at \\((0,-1)\\), rather than the original value zero.\n\nSince \\(\\nabla H=(2g+1)\\nabla g\\), at the new minimizer \\(g=-1\\) and \\(\\nabla H=(0,-1)\\). The multiplier equation \\((0,1)=\\lambda(0,-1)\\) gives \\(\\lambda=-1\\). Qualification holds there. A nonzero derivative near one zero protects the local component; it does not remove other zeros or preserve the global optimization problem."
}
```

**Delayed retrieval, after the next problem session.** Without a diagram, give
one smooth geometric curve with two defining equations for which only one
satisfies the multiplier theorem's regularity hypothesis. Then give a scalar
rewriting with nonzero derivative at zero that adds another global feasible
component. In both examples, describe the set before differentiating.

The regularity requirement can be compared with [MIT's equality-constrained
optimization notes](https://web.mit.edu/14.102/www/notes/lecturenotes1007.pdf),
Theorem 178. The circle, rewriting criterion, and changed parabola arguments
above are derived here from factorization, the chain rule, and the mean value
theorem. No solver's success or failure replaces those hypothesis checks.

## Curvature along a feasible curve

A regular multiplier equation identifies a candidate but does not classify it.
The [gradient lesson](gradient-chain-levels.md) already distinguished a
straight tangent from a curved level path. Here that distinction changes an
optimization verdict. The constraint is regular throughout this investigation.

On the unit circle use
\[
f_\alpha(x,y)=y+\alpha x^2,\qquad P=(0,1),
\]
with \(\alpha\in\mathbb R\) and regular equation \(g=x^2+y^2-1=0\).
Compute both gradients at \(P\) before the first diagram. The circle is compact
and every objective continuous, so absolute extrema exist; existence alone
does not classify this particular candidate.
Write \(R_\alpha(u)\) for the objective change along the upper arc, measured
from its value at \(P\).

```visual-story
{
  "id": "constrained-curvature-circle",
  "title": "Which curvature belongs to a constrained candidate?",
  "prompt": "Compare a straight tangent with a feasible arc, then reason from the curve's actual objective values. Keep a second derivative, its Taylor coefficient, and a global comparison distinct.",
  "stages": [
    {
      "title": "Compare two paths with one tangent",
      "body": "Fix \\(\\alpha=1/4\\). The straight path is \\((u,1)\\); the feasible upper arc is \\((u,\\sqrt{1-u^2})\\). Both pass through \\(P=(0,1)\\) with velocity \\((1,0)\\) at zero. Horizontal plot coordinates are the parameter \\(u\\); vertical coordinates are objective changes from \\(f_\\alpha(P)\\), not positions on the circle.",
      "question": "Do the two paths give the same second-order change? Compute their constraint values and objective changes before exploring. Does positive curvature along the straight tangent establish a constrained minimum?",
      "checkpoint": {
        "hint": "The straight path has \\(g(u,1)=u^2\\). Rationalize \\(\\sqrt{1-u^2}-1\\) on the feasible arc.",
        "explanation": "The straight path leaves the feasible set whenever \\(u\\ne0\\): its constraint error is \\(u^2\\), and its objective change is \\(u^2/4>0\\).\n\nThe feasible arc's objective change is \\(u^2\\) times\n\\[\n\\frac14-\\frac1{1+\\sqrt{1-u^2}}.\n\\]\nFor \\(0<|u|<1\\), the reciprocal exceeds \\(1/2\\), so this change is negative. Thus \\(P\\) is a strict constrained local maximum although the straight tangent reports positive change. Equal first-order velocities do not force equal second-order changes.\n\nThe ordinary unconstrained Hessian test is already inapplicable because \\(\\nabla f_\\alpha(P)=(0,1)\\ne0\\). Even its tangent entry omits the feasible arc's acceleration. The exact inequalities, rather than the plot, establish the verdict.",
        "criteria": [
          "Checks which path remains feasible.",
          "Computes and compares both objective changes.",
          "Identifies why the unconstrained Hessian test does not apply.",
          "Uses a bound for every sufficiently close feasible point."
        ]
      },
      "transition": "none",
      "focus": [
        "curve-straight",
        "curve-feasible",
        "point-probe"
      ],
      "scene": [
        "scene \"A tangent and a feasible arc change the objective differently\"; domain -0.65 0.65; range -0.16 0.16;",
        "param h = 0.3 from 0.05 to 0.6; fn straight(x) = x^2/4; fn feasible(x) = x^2*(0.25-1/(1+sqrt(1-x^2)));",
        "plot straight color amber; plot feasible color blue; point probe = (h,feasible(h)) color rose; point tangent_probe = (h,straight(h)) color amber;",
        "measure input_displacement = h; measure straight_constraint_error = h^2; measure straight_objective_change = straight(h); measure feasible_objective_change = feasible(h);",
        "# Horizontal: local parameter u. Vertical: objective change from P. The straight tangent is not feasible away from P."
      ]
    },
    {
      "title": "Change the objective's quadratic term",
      "body": "Vary \\(\\alpha\\) while keeping the regular circle and candidate \\(P\\). Blue is the exact upper-arc objective change; amber is its quadratic approximation at zero. A probe records one finite displacement. Derive the local classification before interpreting that probe.",
      "question": "Find the multiplier and the second derivative along the feasible arc. For which alpha is P a strict local maximum or minimum? At alpha=0.51, compare h=0.05 and h=0.6: can opposite probe signs contradict a local classification?",
      "checkpoint": {
        "hint": "Use \\(R_\\alpha(u)/u^2\\) near zero. Distinguish the second derivative from the coefficient multiplying \\(u^2\\).",
        "explanation": "At \\(P\\), the gradients are \\(\\nabla g=(0,2)\\) and \\(\\nabla f_\\alpha=(0,1)\\), so the multiplier is \\(1/2\\). The quotient \\(R_\\alpha(u)/u^2\\) equals\n\\[\n\\alpha-\\frac1{1+\\sqrt{1-u^2}}.\n\\]\nAs \\(u\\to0\\), this tends to \\(\\alpha-1/2\\).\nThus the arc's second derivative is \\(2\\alpha-1\\), and its quadratic Taylor coefficient is \\(\\alpha-1/2\\). For \\(\\alpha<1/2\\), the quotient is negative near zero, proving a strict constrained local maximum. For \\(\\alpha>1/2\\), it is positive sufficiently near zero, proving a strict local minimum.\n\nAt \\(\\alpha=0.51\\), the requested small probe increases the objective and the large probe decreases it. A local minimum promises a suitable neighborhood, not the entire displayed arc. At equality the second derivative is zero and this test gives no verdict; use the next stage.",
        "criteria": [
          "Computes lambda=1/2 using the regular constraint.",
          "Separates second derivative 2alpha−1 from Taylor coefficient alpha−1/2.",
          "Justifies each strict local classification through a neighborhood.",
          "Does not replace a local theorem by one finite probe or the plotting window."
        ]
      },
      "transition": "reveal",
      "focus": [
        "curve-feasible",
        "curve-quadratic",
        "point-probe"
      ],
      "scene": [
        "scene \"Feasible curvature changes at a parameter threshold\"; domain -0.6 0.6; range -0.55 0.55;",
        "param alpha = 1 from -0.5 to 1.5; param h = 0.2 from 0.05 to 0.6;",
        "fn feasible(x) = x^2*(alpha-1/(1+sqrt(1-x^2))); fn quadratic(x) = (alpha-0.5)*x^2;",
        "plot feasible color blue; plot quadratic color amber; point probe = (h,feasible(h)) color rose;",
        "measure multiplier = 0.5; measure ambient_tangent_curvature = 2*alpha; measure constrained_tangent_curvature = 2*alpha-1;",
        "measure taylor_quadratic_coefficient = alpha-0.5; measure actual_arc_change = feasible(h); measure quadratic_prediction = quadratic(h);",
        "# Horizontal: local parameter u. Vertical: objective change. A local classification concerns a sufficiently small neighborhood, not every finite probe."
      ]
    },
    {
      "title": "Resolve the vanishing quadratic term",
      "body": "Set \\(\\alpha=1/2\\) exactly. The quadratic prediction is zero. Blue uses a rationalized formula for the actual upper-arc change. The final readout divides the change by \\(h^4\\), with \\(h>0\\). Predict a sign before revealing the plot.",
      "question": "Does a zero constrained second derivative mean no extremum, or only an inconclusive test? Find an exact identity valid on the entire circle and classify P globally. What does the fourth-order quotient detect?",
      "checkpoint": {
        "hint": "On the circle substitute \\(x^2=1-y^2\\) into \\(y+x^2/2-1\\), then complete the square. On the upper arc use \\(1-y=u^2/(1+y)\\).",
        "explanation": "On every point of the circle,\n\\[\nf_{1/2}(x,y)-1=-\\frac12(y-1)^2.\n\\]\nThis is nonpositive and is zero only when \\(y=1\\), forcing \\(x=0\\). Thus \\(P\\) is the unique absolute maximum, hence a strict constrained local maximum. The second-order test was inconclusive; the exact identity resolves it.\n\nOn the upper arc, the quotient \\(R_{1/2}(u)/u^4\\) equals\n\\[\n-\\frac1{2(1+\\sqrt{1-u^2})^2}.\n\\]\nIt tends to \\(-1/8\\), so the first nonzero change is fourth order and negative. The rationalized numerical formula avoids subtracting nearly equal heights. Its normalized quotient exposes the scale; algebra establishes the sign and the global conclusion.",
        "criteria": [
          "Labels the zero quadratic test inconclusive.",
          "Derives the identity on the entire circle, including its lower half.",
          "Checks equality and uniqueness of the absolute maximum.",
          "Separates the fourth-order limit from the vanished second derivative."
        ]
      },
      "transition": "indicate",
      "focus": [
        "curve-feasible",
        "point-probe"
      ],
      "scene": [
        "scene \"A zero quadratic term hides a strict global maximum\"; domain -0.6 0.6; range -0.03 0.002;",
        "param h = 0.2 from 0.05 to 0.6;",
        "fn feasible(x) = -x^4/(2*(1+sqrt(1-x^2))^2); fn quadratic(x) = 0;",
        "plot feasible color blue; plot quadratic color amber; point probe = (h,feasible(h)) color rose;",
        "measure second_derivative = 0; measure actual_arc_change = feasible(h); measure quadratic_prediction = 0; measure fourth_order_quotient = -1/(2*(1+sqrt(1-h^2))^2);",
        "# Alpha is exactly 1/2. Horizontal: upper-arc parameter u. Vertical: objective change. The normalized quotient illustrates the exact fourth-order argument."
      ]
    }
  ]
}
```

### Derive the constraint-curvature correction

Suppose \(f,g\) are \(C^2\) near a regular feasible point \(P\), with
\(\nabla f(P)=\lambda\nabla g(P)\). Fix this scalar \(\lambda\).
Let a \(C^2\) feasible curve satisfy \(r(0)=P\), and put \(v=r'(0)\).
Twice applying the chain rule gives
\[
\begin{aligned}
(f\circ r)''(0)&=v^{\mathsf T}H_f(P)v\\
&\quad+\nabla f(P)\cdot r''(0).
\end{aligned}
\]
Since \(g(r(t))=0\), the same calculation gives
\[
\begin{aligned}
0&=v^{\mathsf T}H_g(P)v\\
&\quad+\nabla g(P)\cdot r''(0).
\end{aligned}
\]
Subtract \(\lambda\) times the second identity from the first. The multiplier
equation cancels the acceleration term:
\[
H_L=H_f(P)-\lambda H_g(P),
\]
\[
(f\circ r)''(0)=v^{\mathsf T}H_Lv.
\]
Here \(H_f,H_g\) are the ambient Hessian matrices. The matrix \(H_L\)
is the Hessian in \(x,y\) of the **Lagrangian** \(L=f-\lambda g\), with
\(\lambda\) held fixed. Test this matrix on tangent directions; its signs
in arbitrary directions of the plane answer a different question.
No derivative of \(\lambda\) is involved.

For this family, \(\lambda=1/2\) and
\[
H_f-\lambda H_g
=\begin{pmatrix}2\alpha-1&0\\0&-1\end{pmatrix}.
\]
The tangent directions at \(P\) are \((s,0)\), so the relevant form is
\((2\alpha-1)s^2\). The upper arc parameter \(u=x\) has velocity \((1,0)\).
Its second derivative is \(2\alpha-1\), so the one-variable test supplies
the strict local classifications when this number is nonzero. Taylor's
factor \(1/2\) explains the coefficient \(\alpha-1/2\).

Use a regular local parameter: replacing \(u\) by \(t^3\) makes the velocity
zero at \(t=0\), and the composed second derivative is zero even when the
constrained curvature is nonzero. That is a stalled parameter, not a changed
classification. The upper-arc coordinate used here has nonzero velocity
and covers a neighborhood of \(P\) in the feasible circle.

Compare the mechanism with [EPFL's nonlinear-programming notes](https://www.epfl.ch/labs/la/wp-content/uploads/2018/08/ic-32_lectures-1-8.pdf),
Theorems 1.56 and 1.59. Those notes use \(L=f+\lambda g\);
our convention is \(L=f-\lambda g\). The cancellation identity and
the circle classifications are derived above.

### Notebook: compare quadratic and fourth-order evidence

Predict the sign and scale before running. At the default \(\alpha=1/2\),
the second derivative is zero, while the last quotient detects the next
nonzero order. The positive \(h\) range keeps both quotients defined.

```notebook
param alpha = 0.5 from -0.5 to 1.5;
param h = 0.2 from 0.05 to 0.6;
fn change(x) = x^2*(alpha-1/(1+sqrt(1-x^2)));
show 2*alpha-1;
show change(h);
show (alpha-0.5)*h^2;
show change(h)/h^2;
show change(h)/h^4;
table change from 0.05 to 0.6 count 12;
```

Compare \(\alpha=1/4\), \(1/2\), and \(1\). Then use \(\alpha=0.51\)
with \(h=0.05\) and \(h=0.6\). Explain why opposite signs at these probes
do not contradict a local minimum. At \(\alpha=1/2\), edit the change function
to the rationalized fourth-order formula from the story and compare again.
A small displayed difference does not determine an extremum without the
local bound or exact identity. Save the first explanation before revising it.


```exercise
{
  "id": "calc3-ellipse-constrained-curvature",
  "type": "written",
  "prompt": "Independent changed geometry. Let \\(a,b>0\\), and constrain\n\\[\ng(x,y)=\\frac{x^2}{a^2}+\\frac{y^2}{b^2}-1=0.\n\\]\nFor \\(f_\\alpha(x,y)=y+\\alpha x^2\\), study \\(P=(0,b)\\).\n\n(a) Check regularity, derive its multiplier, and compute the Lagrangian's tangent second derivative using the convention \\(L=f-\\lambda g\\).\n\n(b) Derive the parameter threshold separating a strict local maximum from a strict local minimum. Verify it independently by restricting to the upper ellipse arc.\n\n(c) At the threshold, resolve the vanishing quadratic test with an exact identity on the entire ellipse, including its equality case.\n\n(d) Use \\(a=2,b=3,\\alpha=1/2\\). Classify \\(P\\) and show whether it can be an absolute minimum. Explain why copying the unit circle's threshold would fail.",
  "hints": [
    "At \\(P\\), \\(\\nabla g=(0,2/b)\\). Use the multiplier equation before forming \\(H_f-\\lambda H_g\\).",
    "Near \\(P\\), use \\(y=b\\sqrt{1-x^2/a^2}\\), then rationalize the objective change before dividing by \\(x^2\\).",
    "At the derived threshold, substitute \\(x^2=a^2(1-y^2/b^2)\\) into the objective and complete a square in \\(y\\)."
  ],
  "rubric": [
    "Checks positive semiaxes and a nonzero constraint gradient",
    "Derives the multiplier and the tangent Lagrangian form with the correct sign convention",
    "Finds the geometry-dependent threshold and both strict local classifications",
    "Independently verifies the threshold through the feasible arc",
    "Resolves the degenerate case globally with a checked equality case",
    "Separates local and absolute conclusions in the specified ellipse and changed objective"
  ],
  "solution": "At \\(P\\), \\(\\nabla f_\\alpha=(0,1)\\) and \\(\\nabla g=(0,2/b)\\ne0\\), so \\(\\lambda=b/2\\). The tangent directions are horizontal. The tangent entry of the Lagrangian Hessian is\n\\[\n2\\alpha-\\frac{b}{a^2}.\n\\]\nThus the threshold is\n\\[\n\\alpha_*=\\frac{b}{2a^2}.\n\\]\nFor \\(\\alpha<\\alpha_*\\), the nonzero tangent second derivative is negative and \\(P\\) is a strict constrained local maximum. For \\(\\alpha>\\alpha_*\\), it is positive and \\(P\\) is a strict local minimum.\n\nFor an independent check, divide the upper-arc objective change by \\(x^2\\) and rationalize. The quotient is\n\\[\n\\alpha-\\frac{b/a^2}{1+\\sqrt{1-x^2/a^2}}.\n\\]\nIts limit is \\(\\alpha-b/(2a^2)\\), confirming both classifications and the factor two between the limit and second derivative.\n\nAt \\(\\alpha=\\alpha_*\\), the ellipse identity gives\n\\[\nf_{\\alpha_*}(x,y)-b=-\\frac{(y-b)^2}{2b}.\n\\]\nThis is nonpositive because \\(b>0\\). Equality forces \\(y=b\\) and then \\(x=0\\), so \\(P\\) is the unique absolute maximum. The quadratic test was inconclusive; the exact constraint identity decides.\n\nFor \\(a=2,b=3,\\alpha=1/2\\), the threshold is \\(3/8\\). The tangent second derivative is \\(1-3/4=1/4>0\\), so \\((0,3)\\) is a strict local minimum. It is not an absolute minimum: the feasible point \\((0,-3)\\) has objective \\(-3<3\\). At the same alpha the unit circle's north pole was the unique absolute maximum; the constraint geometry changes the threshold.",
  "transfer": "Keep the ellipse \\(x^2/4+y^2/9=1\\), but change the objective to\n\\[\nF(x,y)=y+x^4.\n\\]\nClassify \\(P=(0,3)\\) locally using a regular upper-arc parameter. Then decide whether it is an absolute maximum or minimum by exhibiting feasible comparison points. Distinguish the ambient Hessian's tangent entry from the constrained second derivative.",
  "transferSolution": "The ambient tangent Hessian entry at \\(P\\) is zero, but the constraint contributes curvature. The multiplier is still \\(3/2\\), so the tangent Lagrangian entry is \\(-3/4<0\\). Equivalently, on the upper arc,\n\\[\n\\frac{F(x,y(x))-3}{x^2}\\longrightarrow-\\frac38,\n\\]\nbecause \\(y(x)=3\\sqrt{1-x^2/4}\\) and the quartic term contributes \\(x^2\\) to that quotient. Thus \\(P\\) is a strict constrained local maximum.\n\nIt is neither an absolute maximum nor an absolute minimum. The feasible points \\((2,0)\\) and \\((0,-3)\\) have values \\(16>3\\) and \\(-3<3\\). The local argument controls a neighborhood of \\(P\\), while these global comparisons use other parts of the ellipse."
}
```

**Delayed retrieval, after another problem session.** Reconstruct the
acceleration-cancellation argument without looking at the matrix formula.
Then explain why a zero second derivative can arise from either a degenerate
quadratic test or a stalled parameter, and use a regular coordinate to decide
which situation is present.

Continue with [global minima on a noncompact set](noncompact-optimization.md)
to distinguish growth on every straight line from a compact-sublevel
certificate, and to follow minimizers that escape as a penalty vanishes.

## Method-selection studio

```exercise
{"id":"calc3-multiplier-singularity","type":"written","prompt":"A student solves (1,0)=lambda*(2x,2y) together with x²+y²=0, finds no solution, and concludes f(x,y)=x has no constrained minimum. Repair the reasoning. Then propose how to inspect a constraint with regular arcs and singular points.","hints":["Describe the feasible set before solving equations.","State the hypothesis under which the multiplier condition is necessary."],"rubric":["Identifies feasible set {(0,0)} and minimum value 0","Computes ∇g(0,0)=0 and explains failure of regularity","Explains multipliers are necessary only at regular local extrema","Proposes checking regular arcs, singular points, and endpoints separately"],"solution":"The equation x²+y²=0 over real numbers forces x=y=0. On this singleton, f=0 is both absolute minimum and maximum. At the feasible point ∇g=0, so the regularity condition of the Lagrange multiplier theorem fails and (1,0)=lambda*(0,0) has no solution. For a mixed constraint, solve the multiplier equations where ∇g≠0, inspect every point where ∇g=0 directly, include arc endpoints or boundary intersections, and compare objective values."}
```

1. Classify the origin for \(x^2+4y^2\), \(-x^2-y^2\), \(xy\), and \(x^4+y^4\). Show why the last case needs direct reasoning.
2. On the closed triangle \(x\geq0,y\geq0,x+y\leq2\), find the absolute extrema of \(f(x,y)=x^2+y^2-2x\). Identify every edge and vertex you checked.
3. For \(g(x,y)=x^2+y^2-1=0\), optimize \(f(x,y)=xy\) and verify by the inequality \(2|xy|\leq x^2+y^2\). Which proof more clearly establishes globality?

<details><summary>Answers and marking decisions</summary>

1. Hessian determinants are respectively \(16,4,-1,0\). They give strict minimum, strict maximum, saddle, and inconclusive. The last function is positive at every nonzero point and zero at the origin, so direct inspection proves a strict minimum.
2. Interior stationarity requires \(2x-2=0,2y=0\), so no interior point qualifies. On \(y=0\), \(f=(x-1)^2-1\) for \(0\leq x\leq2\): minimum \(-1\) at \((1,0)\), maximum \(0\) at endpoints. On \(x=0\), \(f=y^2\) for \(0\leq y\leq2\): minimum 0, maximum 4 at \((0,2)\). On \(x+y=2\), write \(y=2-x\): \(f=x^2+(2-x)^2-2x=2x^2-6x+4=2(x-\tfrac32)^2-\tfrac12\) for \(0\leq x\leq2\), with minimum \(-1/2\) at \((3/2,1/2)\), and endpoint values 4 and 0. Therefore absolute minimum is \(-1\) at \((1,0)\), maximum 4 at \((0,2)\).
3. On the unit circle, \(2|xy|\leq1\), so \(-1/2\leq xy\leq1/2\). Equality occurs where \(|x|=|y|=1/\sqrt2\); same signs give the maximum, opposite signs the minimum. Multipliers generate those four candidates; the inequality certifies global bounds immediately.

</details>

**Later retrieval:** In the Calculus III cumulative assessment, a model has a feasible boundary containing both a smooth arc and a singular point. Do not begin with \(\nabla f=\lambda\nabla g\); first partition the feasible set and state which candidate theorem applies to each part.
