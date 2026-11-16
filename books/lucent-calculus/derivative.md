# 2. The derivative as a local rate

**Prerequisites:** limits from both sides, continuity, function domains, and expansion of squares and cubes.

**Learning outcomes:** derive a derivative from its definition; translate between rates, units, and tangent slopes; interpret differentiability as a local linear model; recognize corners and vertical tangents; and explain what numerical differentiation can and cannot establish.

## A rate over an interval becomes a rate at a point

Suppose s(t) gives a vehicle's position in metres after t seconds. The difference s(t+h)−s(t) measures displacement; dividing by h gives average velocity over the interval between t and t+h. Position and velocity are different quantities: a vehicle can be far from its starting point while moving slowly, or close to its starting point while moving quickly.

For a function defined near an interior point a, its derivative is the finite limit

f′(a) = lim(h→0) [f(a+h)−f(a)]/h,

when this limit exists. The fraction is a difference quotient, defined only for h≠0. Both positive and negative h must lead to the same result. At an endpoint one can define a one-sided derivative, but it should be identified explicitly. Saying “put h=0” in the quotient is not differentiation: it creates an undefined expression before the limit has been evaluated.

Geometrically, the quotient is the slope of a secant through (a,f(a)) and (a+h,f(a+h)). If the slopes have a finite limit, the tangent line is

y = f(a)+f′(a)(x−a).

A tangent describes local agreement. It may cross the curve, and it may meet the curve again elsewhere. The familiar idea of a line that “touches exactly once” is not a reliable definition.

### Guided visual argument: invent the tangent instead of receiving it

Advance one stage at a time. Each stage keeps the quadratic and viewing window fixed while adding only the object needed for the next inference. Write an answer before continuing; the final stage changes the point so that copying the first numerical pattern is not enough.

```visual-story
{
  "id": "quadratic-secants-to-tangent",
  "title": "From a finite change to a local law",
  "prompt": "A tangent slope is not drawn first. Begin with a change you can calculate, shrink it from both directions, and decide what remains.",
  "stages": [
    {
      "title": "Start with a finite journey",
      "body": "The amber secant joins the points at x=a and x=a+h. At the authored settings a=1 and h=1, calculate its rise and run before treating the line as evidence.",
      "question": "What is this secant slope, and which two points determine it?",
      "checkpoint": {
        "hint": "Evaluate f at a=1 and a+h=2, then divide the change in height by the change in input.",
        "explanation": "The two points are (1,f(1))=(1,1) and (2,f(2))=(2,4). Their rise is 4−1=3 and their run is 2−1=1, so the secant slope is 3. This is an average rate over a finite interval, not yet the derivative at a=1.",
        "criteria": [
          "Identifies both points on the quadratic.",
          "Computes rise 3, run 1, and slope 3.",
          "Calls the result a finite secant or average rate."
        ]
      },
      "transition": "none",
      "focus": ["line-forward"],
      "scene": [
        "scene \"1. A finite change has an average slope\";",
        "domain -3 3;",
        "range -2 9;",
        "param a = 1 from -1.5 to 1.5;",
        "param h = 1 from 0.05 to 1.5;",
        "fn f(x) = x^2;",
        "plot f color blue;",
        "secant f at a step h as forward;"
      ]
    },
    {
      "title": "Expose the error term",
      "body": "Shorten the forward step to h=0.5. Expand the difference quotient before deciding which part can survive as the step tends to zero.",
      "question": "What exact formula does the secant quotient have for general a and h? At a=1 and h=0.5, which term is the finite-step error?",
      "checkpoint": {
        "hint": "Expand (a+h)²−a², factor out h, and only then cancel h≠0.",
        "explanation": "For h≠0, [(a+h)²−a²]/h=(2ah+h²)/h=2a+h. At a=1 and h=1/2 the slope is 5/2. The term 2a=2 is the candidate limiting rate and h=1/2 is the finite-step error. The algebra, rather than the apparent angle of the line, identifies the vanishing part.",
        "criteria": [
          "Expands and cancels only under the condition h≠0.",
          "Obtains the exact formula 2a+h.",
          "Separates the candidate limit 2a from the finite error h."
        ]
      },
      "transition": "transform",
      "focus": ["line-forward"],
      "scene": [
        "scene \"2. The finite error is visible\";",
        "domain -3 3;",
        "range -2 9;",
        "param a = 1 from -1.5 to 1.5;",
        "param h = 0.5 from 0.05 to 1.5;",
        "fn f(x) = x^2;",
        "plot f color blue;",
        "secant f at a step h as forward;"
      ]
    },
    {
      "title": "Approach from both sides",
      "body": "Add a secant whose signed step is −h while the control h remains positive. Compare both quotients with the same candidate local rate.",
      "question": "Derive both slopes. Which lies above the candidate, which lies below it, and why do they approach one number?",
      "checkpoint": {
        "hint": "Use the formula 2a+s once with s=h and once with s=−h.",
        "explanation": "The forward signed step h gives slope 2a+h, while the backward signed step −h gives 2a−h. Because h>0, the forward value lies h above 2a and the backward value lies h below it. Their separation is 2h, which tends to zero with h. Thus both one-sided families approach 2a; checking only the forward family would not establish a two-sided derivative.",
        "criteria": [
          "Derives the forward slope 2a+h and backward slope 2a−h.",
          "Orders both slopes correctly around 2a.",
          "Uses the separation 2h to explain the common limit.",
          "Recognises that a two-sided derivative requires both directions."
        ]
      },
      "transition": "compare",
      "focus": ["line-forward", "line-backward"],
      "scene": [
        "scene \"3. Two directions test one proposed slope\";",
        "domain -3 3;",
        "range -2 9;",
        "param a = 1 from -1.5 to 1.5;",
        "param h = 0.35 from 0.05 to 1.5;",
        "fn f(x) = x^2;",
        "plot f color blue;",
        "secant f at a step h as forward;",
        "secant f at a step (-h) as backward;"
      ]
    },
    {
      "title": "Name what survives",
      "body": "Reveal a violet candidate tangent, then vary h. Decide which numerical feature is unchanged and what exact limit calculation, independent of the drawing, justifies it.",
      "question": "What remains invariant as h changes, and which exact calculation justifies that invariance?",
      "checkpoint": {
        "hint": "Take the limit of the two exact secant formulas from the preceding stage.",
        "explanation": "At fixed a, both 2a+h and 2a−h tend to 2a as h tends to zero. Therefore the invariant local slope is 2a, and the tangent line is y=a²+2a(x−a). The finite secants move when h changes; the plotted tangent merely records the value proved by the quotient limit.",
        "criteria": [
          "Names 2a as the invariant limiting slope.",
          "Justifies it from both exact secant formulas.",
          "Distinguishes a fixed tangent slope from moving finite secant slopes.",
          "Does not treat the drawn tangent as proof of the limit."
        ]
      },
      "transition": "reveal",
      "focus": ["line-local_line"],
      "scene": [
        "scene \"4. The common limit becomes the tangent\";",
        "domain -3 3;",
        "range -2 9;",
        "param a = 1 from -1.5 to 1.5;",
        "param h = 0.2 from 0.05 to 1.5;",
        "fn f(x) = x^2;",
        "plot f color blue;",
        "secant f at a step h as forward;",
        "secant f at a step (-h) as backward;",
        "tangent f at a as local_line;"
      ]
    },
    {
      "title": "Change the case",
      "body": "Move the base point to a=−1 while keeping h=0.5. Predict the two finite slopes and the tangent slope from the quotient calculation before comparing the lines.",
      "question": "What are all three slopes at the authored settings? Why does the height f(−1)=1 not determine the sign of the derivative?",
      "checkpoint": {
        "hint": "Substitute a=−1 and h=1/2 into 2a+h, 2a−h, and 2a.",
        "explanation": "The forward slope is 2(−1)+1/2=−3/2, the backward slope is 2(−1)−1/2=−5/2, and the tangent slope is 2(−1)=−2. The function height f(−1)=1 is an output value; the derivative compares signed changes in output with signed changes in input. Positive height therefore places the point above the axis but says nothing by itself about whether the curve is rising or falling.",
        "criteria": [
          "Computes the slopes −3/2, −5/2, and −2 in the correct roles.",
          "Distinguishes function height from rate of change.",
          "Transfers the general formulas rather than inferring signs from the picture."
        ]
      },
      "transition": "transform",
      "focus": ["line-forward", "line-backward", "line-local_line"],
      "scene": [
        "scene \"5. A changed point tests the law\";",
        "domain -3 3;",
        "range -2 9;",
        "param a = -1 from -1.5 to 1.5;",
        "param h = 0.5 from 0.05 to 1.5;",
        "fn f(x) = x^2;",
        "plot f color blue;",
        "secant f at a step h as forward;",
        "secant f at a step (-h) as backward;",
        "tangent f at a as local_line;"
      ]
    }
  ]
}
```

## Worked example 1 debrief: the derivative of a square

Now compare the reasoning you recorded in the story. Let \(f(x)=x^2\). For \(h\ne0\), expand and cancel:

\[
\frac{(a+h)^2-a^2}{h}=\frac{2ah+h^2}{h}=2a+h.
\]

The limit as \(h\) approaches zero is \(2a\), so \(f'(a)=2a\) for every real \(a\). This calculation proves existence as well as producing a formula; it applies from either side because the same expression \(2a+h\) works for positive and negative \(h\).

At \(a=1\), secant slopes with \(h=1,0.5,0.1\) are \(3,2.5,2.1\). Negative steps \(-1,-0.5,-0.1\) give \(1,1.5,1.9\). Both lists approach \(2\). The tangent is \(y=1+2(x-1)=2x-1\). At \(a=-1\) the slope becomes \(-2\) even though \(f(-1)=1\): a positive value does not imply a positive rate.

This sequence is a visual derivation of one example, not the definition of a derivative. It deliberately preserves the same curve and axes so that a learner can track what changes. The exact quotient supplies the proof; the following laboratory lets you range over other points and then alter the function itself.

### Visual laboratory 1: approaching from both directions

**Predict.** At a=1, which of the forward and backward secants is steeper than the tangent? Will the same ordering hold at a=−1?

```mathviz
scene "Two-sided secants for a quadratic";
domain -3 3;
range -2 9;
param a = 1 from -1.5 to 1.5;
param h = 1 from 0.02 to 1.5;
fn f(x) = x^2;
plot f color blue;
secant f at a step h;
secant f at a step (-h);
tangent f at a;
```

**Explore.** Decrease h, then move a through zero. Record the two secant slopes and tangent slope for three values of a. The slider stays positive, while the second construction explicitly uses −h.

**Explain.** The forward slope is 2a+h and the backward slope is 2a−h. Their difference is 2h; both converge to 2a. The software's tangent is numerical, while the algebra supplies the exact derivative.

**Transfer.** Change the function to x^3 in the editor. At a=0, do the two secants still lie on opposite sides of the tangent slope? Calculate before trusting the picture: both slopes equal h².

## Worked example 2: reciprocal and domain

For f(x)=1/x and a≠0,

[1/(a+h)−1/a]/h = [a−(a+h)]/[a(a+h)h] = −1/[a(a+h)].

If |h|<|a|/2, then a+h is nonzero, so this transformation is valid in a whole punctured neighbourhood. Letting h approach zero gives f′(a)=−1/a². The domain restriction matters: there is no derivative at zero because the original function is not even defined there.

At a=2, f(2)=1/2 and f′(2)=−1/4. The tangent is y=1/2−(x−2)/4. It predicts f(2.1)≈0.475, while the exact value is 1/2.1≈0.47619. A tangent estimate is an approximation away from the point; the derivative definition does not promise exact agreement over a large interval.

## Differentiability means a good local linear model

The definition can be rearranged into

f(a+h) = f(a)+f′(a)h+r(h), where r(h)/h→0.

The remainder r(h) is smaller than the first-power scale h as h approaches zero. For x² it is exactly h², so r(h)/h=h→0. Merely requiring r(h)→0 would express a weaker idea: for |x| at zero, the approximation 0 has error |h|, which tends to zero but is not small relative to |h|.

To inspect local shape without letting everything collapse into a single pixel, introduce a scaled coordinate u and plot [f(a+hu)−f(a)]/h. The horizontal coordinate describes a displacement measured in units of h; the vertical coordinate uses the same scaling. For a differentiable function this approaches the line f′(a)u as h shrinks, for each fixed u.

### Visual laboratory 2: a curve becomes linear under magnification

**Predict.** For f(x)=x³ at a=1, what straight line should appear in the scaled coordinates? What changes at a=0?

```mathviz
scene "Magnify the local change instead of shrinking the picture";
domain -2 2;
range -15 15;
param a = 1 from -1.5 to 1.5;
param h = 0.5 from 0.02 to 1;
fn f(x) = x^3;
fn local(x) = (f(a+h*x)-f(a))/h;
fn linear(x) = 3*a^2*x;
plot local color blue;
plot linear color amber;
```

**Explore.** Compare h=1, h=0.2, and h=0.02 at a=1. Repeat at a=0. The plotted horizontal variable stands for u in the preceding explanation; the underlying input is a+hu.

**Explain.** Expansion gives 3a²u+3ahu²+h²u³. The last two terms vanish as h decreases while u remains fixed, leaving 3a²u. At a=0 the limiting line is horizontal although the original cubic continues increasing through the point.

**Transfer.** Replace the functions with f(x)=x^2 and linear(x)=2*a*x. Derive the remaining error in scaled coordinates and explain why halving h halves it at fixed u.

## Continuity is necessary but insufficient

If f is differentiable at a, then it is continuous there. For h≠0, write

f(a+h)−f(a) = h · [f(a+h)−f(a)]/h.

The second factor tends to the finite number f′(a), while h tends to zero; therefore the product tends to zero. The value at the point is already defined by the derivative hypothesis, so this is continuity. The argument is useful because it explains precisely why an infinite limiting slope does not count as a finite derivative.

The converse fails. For f(x)=|x| at zero, the quotient is |h|/h. It equals 1 on the right and −1 on the left. The function is continuous, but these slopes do not agree. For the real cube-root function, the quotient at zero is 1/|h|^(2/3), which grows without bound; its vertical tangent also gives no finite derivative. Corners and vertical tangents fail in different ways.

### Visual laboratory 3: a continuous corner resists a single tangent

**Predict.** Can a line of slope zero approximate both sides of |x| to first order at zero?

```mathviz
scene "A corner has incompatible one-sided slopes";
domain -2 2;
range -0.5 2.5;
param h = 0.8 from 0.02 to 1.8;
fn f(x) = abs(x);
plot f color violet;
secant f at 0 step h;
secant f at 0 step (-h);
```

**Explore.** Move h through its full range. Unlike the quadratic example, neither slope changes. Edit f(x) to abs(x)^2 and repeat.

**Explain.** For |x| the slopes remain 1 and −1; shrinking the interval cannot reconcile them. For |x|²=x² they become h and −h and converge to zero. Continuity alone says that heights agree, not that rates agree.

**Transfer.** Decide whether |x|³ is differentiable at zero. Use its difference quotient and bound its absolute value; do not infer differentiability solely from a smooth-looking plot.

## Worked example 3: interpreting measured motion

Let s(t)=5t²+2t metres. From t=1 to t=1.2, the average velocity is

[s(1.2)−s(1)]/0.2 = (9.6−7)/0.2 = 13 m/s.

Expanding a general quotient gives 10t+5h+2, so instantaneous velocity is v(t)=10t+2 m/s and v(1)=12 m/s. Differentiating velocity gives acceleration 10 m/s². Each derivative changes the units by another factor of inverse time. Velocity can be negative; speed is |v| and need not be differentiable when velocity changes sign.

Real measurements add another issue. Smaller h reduces the discrepancy between an average rate and a derivative, but dividing measurement errors by a smaller number can magnify noise. Numerical tools balance approximation error, rounding, and measurement quality. A screen displaying many decimal places is not evidence that all those digits are accurate.

## Practice: derive, interpret, and challenge

1. Derive the derivative of x³ at a using the definition. State where your result applies.
2. Derive the derivative of √x at a>0 by rationalising the difference quotient. What happens to the right-hand quotient at a=0?
3. Find the tangent to 1/x at x=−1, including the original function's domain.
4. For s(t)=5t²+2t, compute the average velocity from 1 to 1.1 and compare it with instantaneous velocity at 1. Explain the difference in words.
5. A differentiable function has f′(a)=0. Must a be a maximum or minimum? Supply examples that show what is and is not guaranteed.
6. Define f(x)=x² for x≠0 and f(0)=1. Can f be differentiable at zero? Give a short theorem-based answer and check the difference quotient.
7. Prove |x|³ is differentiable at zero and find the derivative. Does this example contradict the failure for |x|?
8. The two position measurements s(1)=7 and s(1.1)=8.25 each have uncertainty at most 0.01 m. Bound the uncertainty in their calculated average velocity. Why might making the time interval ten times shorter be unhelpful?
9. For f(x)=x² at a=2, compare the exact value f(2+h) with its tangent prediction. Find all nonzero h for which the absolute approximation error is below 0.01.

<details>
<summary>First hints: identify the mathematical object</summary>

1. Expand a cube before dividing by h.
2. Multiply the numerator and denominator by √(a+h)+√a.
3. You need both the height and slope at −1.
4. An interval average and a pointwise rate answer different questions.
5. Examine x², −x², and x³ at zero.
6. Differentiability implies continuity.
7. Divide |h|³ by h and estimate its magnitude.
8. The worst case has the two measurement errors with opposite signs.
9. Expand the square and subtract the linear terms.

</details>

<details>
<summary>Second hints: the decisive step</summary>

1. The quotient simplifies to 3a²+3ah+h².
2. The quotient becomes 1/(√(a+h)+√a).
3. The reciprocal has derivative −1/x² wherever x≠0.
4. The general forward quotient at t=1 is 12+5h.
5. A zero derivative guarantees a horizontal tangent, not a turning point.
6. Here [f(h)−f(0)]/h=(h²−1)/h.
7. The absolute value of the quotient is h².
8. Add the absolute error bounds before dividing by 0.1 seconds.
9. The remaining error is h², so solve h²<0.01.

</details>

<details>
<summary>Fully worked solutions</summary>

1. For h≠0, [(a+h)³−a³]/h=3a²+3ah+h². Taking the two-sided limit yields f′(a)=3a² for every real a.
2. For a>0 and sufficiently small h, rationalisation gives [√(a+h)−√a]/h=1/[√(a+h)+√a]. Its limit is 1/(2√a). At zero the right-hand quotient is √h/h=1/√h, which tends to +∞. Thus there is no finite right derivative at zero.
3. The domain is all real numbers except zero. At −1 the value is −1 and the derivative is −1, so the tangent is y=−1−(x+1)=−x−2.
4. The average velocity is (8.25−7)/0.1=12.5 m/s, whereas v(1)=12 m/s. The vehicle speeds up during this interval, so the interval average exceeds the velocity at its starting instant.
5. No. At zero, x² has a minimum, −x² has a maximum, and x³ has neither, although all three derivatives vanish there. The shared conclusion is a horizontal tangent, not any particular behavior on both sides.
6. The nearby limit is zero, but f(0)=1, so f is discontinuous and therefore not differentiable at zero. Directly, the quotient h−1/h has no finite two-sided limit; its dominant term has opposite unbounded behavior on the two sides.
7. Since |(|h|³/h)|=h² for h≠0, the difference quotient tends to zero by comparison. Hence f′(0)=0. The factor |h|² suppresses the incompatible signs that persist in the quotient for |x|; these are different functions.
8. The displacement error is at most 0.01+0.01=0.02 m. Dividing by 0.1 s gives a velocity uncertainty at most 0.2 m/s, so the reported average is 12.5±0.2 m/s. With the same position uncertainty and a 0.01 s interval, the bound becomes 2 m/s. A shorter interval can increase noise amplification even while reducing the mathematical averaging error.
9. The tangent prediction is 4+4h and the exact value is 4+4h+h², so the absolute error is h². The requirement h²<0.01 is equivalent to |h|<0.1; with h≠0, the allowed steps satisfy 0<|h|<0.1.

</details>

## Investigation: propose a local law, then try to break it

Consider f(x)=x³−2x at a=1. Before calculating, record a proposed slope m: which line mu should describe the rescaled change [f(1+hu)−f(1)]/h for −1≤u≤1 as h shrinks? The height f(1)=−1 is a different quantity from the slope. A guess of 3 uses the cubic's derivative but forgets the derivative of −2x.

For h≠0, expansion gives the exact identity

[f(1+hu)−f(1)]/h = u+3hu²+h²u³.

The proposed slope is therefore 1. On the entire displayed window |u|≤1, the discrepancy from the line u is at most 3|h|+h². This bound works simultaneously for every u in the window; a few plotted curves alone would show only sampled behavior.

```mathviz
scene "Choose a law for local change";
domain -1 1;
range -4 4;
param h = 0.5 from 0.02 to 1;
param m = 3 from -2 to 4;
fn f(x) = x^3-2*x;
fn local(x) = (f(1+h*x)-f(1))/h;
fn candidate(x) = m*x;
plot local color blue;
plot candidate color amber;
```

Set m to your prediction before decreasing h. If the graphs seem to meet at u=0 for every m, inspect u=1 as well: agreement at one point does not identify the law. At m=1 the exact bound above explains what the shrinking gap means. At m=3 a gap of about 2 remains near u=1 regardless of how small h becomes.

```notebook
let a = 1;
fn f(x) = x^3-2*x;
diff f as df;
show f(a);
show df(a);
plot f from -1 to 2;
```

The derivative output checks the proposed slope algebraically within the notebook's supported rules. The plot and any finite numeric table are investigations; the expansion proves the uniform bound on the chosen u-window.

```exercise
{"id":"calc-local-law-slope","type":"choice","prompt":"For f(x)=x³−2x at a=1, which candidate slope m matches the first-order local law?","options":[{"label":"m=3","correct":false,"feedback":"This differentiates x³ but omits the −2x term, whose slope is −2."},{"label":"m=−1","correct":false,"feedback":"This is f(1), the function's height, not its local rate."},{"label":"m=1","correct":true,"feedback":"Yes. Expanding the rescaled change gives u+3hu²+h²u³."}],"hints":["Expand f(1+h)−f(1) before dividing by h."]}
```

**Transfer: a corner.** Replace f by g(x)=|x| and a by zero. For every h>0, the rescaled change is |u|. No line mu can agree with it at both u=1 and u=−1: those inputs require m=1 and m=−1 respectively. Shrinking h cannot remove the incompatibility.

```exercise
{"id":"calc-corner-proof","type":"written","prompt":"A learner claims that g(x)=|x| has derivative zero at x=0 because its graph is symmetric. Repair the argument using two difference quotients, then explain why symmetry does not supply a tangent slope.","hints":["Calculate [g(h)−g(0)]/h separately for h>0 and h<0.","A derivative needs one finite limit from both sides."],"rubric":["Computes the right quotient as 1","Computes the left quotient as −1","States that the two-sided limit does not exist","Separates symmetry of heights from agreement of local rates"],"solution":"For h>0, |h|/h=1; for h<0, |h|/h=−1. These stay different however small |h| becomes, so the derivative at zero does not exist. Symmetry pairs equal heights at opposite inputs, but a tangent slope compares signed changes, so the paired secants have opposite slopes."}
```

**Readiness check:** derive one derivative without a memorised rule, explain why its units are correct, and give a continuous function that fails to have a finite derivative at a specified point.

**Further reading:** [OpenStax Calculus Volume 1, chapter 3](https://openstax.org/books/calculus-volume-1/pages/3-introduction) and the differentiation unit in [MIT 18.01SC](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/) supply additional reading and exercises. The exposition and investigations here are original.
