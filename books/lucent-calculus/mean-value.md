# 4. Mean values and the shape of a function

**Prerequisites:** continuity on a closed interval and derivative rules. Allow two study sessions: one for proofs and experiments, another for problems.

**Outcomes:** justify global conclusions from local derivatives; audit theorem hypotheses; distinguish stationary points, extrema, and inflections; turn derivative bounds into error guarantees.

## Why local slopes tell a global story

A traveller's position increases by 120 kilometres in two hours. The average velocity is 60 kilometres per hour. If position is continuous throughout and differentiable between endpoints, must the instantaneous velocity equal 60 somewhere? Yes. This concerns signed velocity; average speed calculated from total distance is a different quantity when the traveller reverses direction.

The bridge from an instantaneous derivative to an interval-wide change is the **mean value theorem**. A picture suggests the bridge; the proof explains why it cannot fail under its hypotheses.

## Rolle's theorem and the mean value theorem

The **extreme value theorem** states that a continuous real-valued function on a closed bounded interval attains an absolute maximum and an absolute minimum. We use this existence result in the proof below; the real-analysis course proves it from compactness.

**Theorem 4.1 (Rolle's).** Suppose a < b, f is continuous on [a,b], differentiable on (a,b), and f(a)=f(b). Then some c in (a,b) satisfies f′(c)=0.

First recall **Fermat's stationary-point theorem**. At a differentiable interior local maximum c, difference quotients with positive increments are nonpositive, while those with negative increments are nonnegative. Their common limit must be zero. The minimum case reverses the inequalities.

To prove Rolle's theorem, continuity and compactness give an attained maximum and minimum. If f is constant, every interior derivative is zero. Otherwise some value differs from the common endpoint value. A larger value forces an absolute maximum into the interior; a smaller value forces an absolute minimum there. Fermat's theorem finishes the proof.

**Mean value theorem (MVT).** If a < b, f is continuous on [a,b] and differentiable on (a,b), then some c in (a,b) satisfies

f′(c) = [f(b)−f(a)]/(b−a).

Write m=[f(b)−f(a)]/(b−a) and subtract the secant line:

g(x)=f(x)−f(a)−m(x−a).

The function g inherits continuity and differentiability, and g(a)=g(b)=0. Rolle's theorem supplies c with 0=g′(c)=f′(c)−m. Thus the tangent at c is parallel to the endpoint secant. The theorem guarantees existence, not uniqueness or a formula for c.

The result also guides an optimization model: if a differentiable objective has derivative strictly positive throughout a feasible interval, any later feasible choice has larger value. A stationary point outside that interval cannot be selected. The [road-and-field recitation](calculus-i-ii-recitation.md) uses this distinction to compare an interior solution with a physical boundary. Its route sketch is a modeling assumption; its global conclusion follows from the derivative and the feasible set.

Each hypothesis matters. For |x| on [−1,1], the secant slope is zero but every existing derivative is ±1: the corner violates interior differentiability. For f(x)=x on [0,1) with f(1)=2, the secant slope is 2 but the interior derivative is always 1: endpoint continuity fails. Endpoint differentiability, however, is unnecessary.

## Consequences: growth, error, and shape

Suppose f is differentiable on an interval I. Pick any u<v in I. The MVT gives

f(v)−f(u)=f′(c)(v−u).

Because v−u>0, the change has the sign of the intermediate derivative. Therefore f′>0 throughout I implies strict increase; f′≥0 implies nondecrease. Reverse signs for decrease. A derivative identically zero implies a constant function. Continuity at included endpoints extends these conclusions to them. A disconnected domain does not support this argument across a gap.

If |f′|≤M on (a,b), with continuity on [a,b], then

|f(b)−f(a)|≤M|b−a|.

This controls accumulated change without locating c. Its units agree: output per input, multiplied by input, gives output.

A two-sided derivative bound retains direction as well as magnitude. Suppose $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and

\[
m\le f'(x)\le M\qquad(a<x<b).
\]

For any $u<v$ in $[a,b]$, the restriction of $f$ to $[u,v]$ satisfies the MVT hypotheses. Thus some $c$ in $(u,v)$ obeys

\[
f(v)-f(u)=f'(c)(v-u).
\]

Because $v-u>0$, multiplying the derivative bounds preserves their order:

\[
m(v-u)\le f(v)-f(u)\le M(v-u). \tag{1}
\]

Continuity at included endpoints, differentiability between them, and a connected interval are all doing work here. If $m>0$, (1) gives more than monotonicity: distinct inputs have outputs separated by at least $m$ times their input distance. Consequently $f$ is injective, and on its range the inverse satisfies

\[
|f^{-1}(y_2)-f^{-1}(y_1)|\le \frac{1}{m}|y_2-y_1|.
\]

**Worked quantitative use.** Let $f(x)=x^3+x$ on $[-2,2]$. Since $f'(x)=3x^2+1$,

\[
1\le f'(x)\le 13
\]

throughout the interval. Therefore, whenever $-2\le u<v\le2$,

\[
v-u\le f(v)-f(u)\le13(v-u).
\]

The lower bound proves strict increase and hence injectivity without solving $f(u)=f(v)$. It also says that an output change smaller than η can come only from an input change smaller than η under the inverse. The upper bound prevents the output from separating faster than thirteen times the input distance. These are interval-wide guarantees; the derivative values at just the endpoints would not suffice.

For continuous f on [a,b], absolute extrema occur among endpoints and interior **critical points**: domain points where f′=0 or f′ does not exist. Compare function values at all candidates. Where the derivative changes from positive to negative, the first derivative test gives a local maximum; negative to positive gives a local minimum. A zero derivative without a sign change need not give either.

Concavity describes changing slopes, not whether f itself rises. Geometrically, an upward-concave graph lies below its chords; a downward-concave graph lies above them. For differentiable f, upward concavity corresponds to a nondecreasing derivative; downward concavity corresponds to a nonincreasing derivative. If f is twice differentiable on an interval, f″≥0 guarantees upward concavity, and f″≤0 guarantees downward concavity. An **inflection point** is a point of continuity where concavity changes. Solving f″=0 alone proves nothing.

For f twice differentiable near c with f′(c)=0, the second derivative test gives a strict local minimum if f″(c)>0, and a strict local maximum if f″(c)<0. A zero second derivative is inconclusive; use a sign chart or the definition.

## Three worked examples

**1. Find every MVT point.** For f(x)=x² on [1,3], polynomial continuity and differentiability satisfy the hypotheses. The secant slope is (9−1)/2=4. Solving 2c=4 gives c=2, strictly between the endpoints. The calculation and interval check both matter.

**2. Read a cubic completely.** Let f(x)=x³−3x on [−2,2]. Its derivative 3(x−1)(x+1) has signs +, −, + on the intervals separated by −1 and 1. Thus −1 is a local maximum and 1 a local minimum. The candidate values are f(−2)=−2, f(−1)=2, f(1)=−2, and f(2)=2. The absolute maximum is 2 at −1 and 2; the absolute minimum is −2 at −2 and 1. Because f″(x)=6x changes sign at zero, (0,0) is an inflection point. It is not stationary: f′(0)=−3.

**3. Certify a numerical change.** Without evaluating √4.04, bound its difference from 2. On [4,4.04], the derivative of √x is 1/(2√x), positive and at most 1/4. The MVT gives 0<√4.04−2≤0.04/4=0.01. Hence 2<√4.04≤2.01. The strict lower bound follows from monotonicity; the upper bound is a guarantee, not a decimal approximation.

## Visual laboratory 1: how many matching tangents?

**Predict.** For x³ on [−0.5,0.5], do you expect one matching tangent or two? Must either point be the midpoint?

```mathviz
scene "Locate the mean-value points";
domain -2 2;
range -8 8;
param a = -0.5 from -1.5 to 1;
param c = 0.3 from -1.5 to 2;
fn f(x) = x^3;
plot f color blue;
secant f at a step 1;
tangent f at c;
```

**Explore.** Hold a at −0.5 and move c until the tangent appears parallel to the secant. Search both sides of zero. Repeat at a=0 and a=−1. A matching slope counts only when a<c<a+1.

**Explain.** The secant slope is 3a²+3a+1, so candidates satisfy 3c²=3a²+3a+1. At a=−0.5, both c=±1/√12 qualify. At a=0, only c=1/√3 qualifies. Exact algebra establishes equality; numerical tangents make apparent parallelism approximate.

**Transfer.** Replace x³ with x². Derive the matching point for [a,a+1] and explain uniqueness. The answer is c=a+1/2 because 2c=2a+1 and the derivative is injective.

## Visual laboratory 2: every chord inherits the derivative bounds

**Predict.** For $f(x)=x^3+x$, can a secant with both endpoints in $[-2,2]$ have slope below 1 or above 13? State which theorem turns the derivative bounds into a statement about the whole chord.

```mathviz
scene "Derivative bounds control every chord";
domain -2.2 2.2;
range -12 12;
param a = -0.75 from -1.5 to 1.5;
param h = 0.5 from 0.1 to 0.5;
fn f(x) = x^3+x;
let average_rate = (f(a+h)-f(a))/h;
measure chord_slope = average_rate;
measure lower_derivative_bound = 1;
measure upper_derivative_bound = 13;
plot f color blue;
secant f at a step h as controlled_chord;
```

**Explore.** Move $a$ through its range and test both boundary values of $h$. The controls keep $a$ and $a+h$ inside $[-2,2]$. Record the smallest and largest displayed chord slopes, but do not mistake that finite search for the proof of (1).

**Explain.** The exact readout is

\[
\frac{f(a+h)-f(a)}h=3a^2+3ah+h^2+1.
\]

The MVT supplies some $c$ in $(a,a+h)$ for which this equals $f'(c)=3c^2+1$. Since every such $c$ lies in $[-2,2]$, the chord slope is between 1 and 13. The theorem certifies every legal control value at once; the sampled curve and slider positions illustrate it.

**Transfer.** Change the function to $x^3-3x$ and derive a valid pair of global derivative bounds on $[-2,2]$. Decide whether those bounds certify injectivity. Then use the derivative sign changes to explain why failure of the certificate is genuine in this case.

## Visual laboratory 3: when turning points disappear

**Predict.** In f(x)=x³−3kx, what happens to the local maximum and minimum as k decreases through zero?

```mathviz
scene "Function shape and derivative sign";
domain -2 2;
range -16 16;
param k = 1 from -1 to 2;
param t = 0 from -2 to 2;
fn f(x) = x^3-3*k*x;
fn slope(x) = 3*x^2-3*k;
plot f color blue;
plot slope color teal;
tangent f at t;
```

**Explore.** Try k=1, 0.25, 0, and −1. Move t across each zero of the teal derivative curve. Compare its sign with the blue curve's direction. The curves share axes, though their vertical quantities have different meanings.

**Explain.** For k>0, derivative zeros ±√k surround a decreasing interval; elsewhere f increases. At k=0, x³ remains strictly increasing despite its zero derivative at zero. For k<0, the derivative is everywhere positive. Since f″=6x, the origin remains an inflection point throughout.

**Transfer.** Edit f to x⁴ and slope to 4*x³. Explain why the origin is a minimum without an inflection: f″=12x² never changes sign. Update both formulas together when changing models.

## Exercises

1. Find all MVT points for x³ on [−1,1]. State the hypotheses.
2. Explain why |x| on [−1,1] contradicts neither Rolle's theorem nor Fermat's theorem.
3. Find the absolute extrema of x⁴−2x² on [−2,1]. Identify its interior local extrema.
4. Prove that x³+x−1 has exactly one real zero.
5. A temperature T is continuous on [10,10.2], differentiable inside, and |T′|≤0.03 degrees per minute. If T(10)=18, bound T(10.2).
6. Give a differentiable function on a disconnected open domain with derivative zero everywhere that is not constant. Identify the failed proof step.
7. Classify zero for x³ and x⁴ as a stationary point, local extremum, and inflection point. Explain why f″(0)=0 does not decide the classification.
8. Prove that two differentiable functions with equal derivatives on an interval differ by a constant. What changes if their values agree at one point?

<details>
<summary>First hints: choose a tool</summary>

1. Compare the endpoint secant with the derivative.
2. Check each theorem's requirements at the origin.
3. Include endpoints and derivative zeros.
4. Separate existence from uniqueness.
5. Bound the change before adding the initial temperature.
6. Use two disjoint intervals.
7. Test derivative signs on either side of zero.
8. Differentiate the difference.

</details>

<details>
<summary>Second hints: make the next step</summary>

1. Solve 3c²=1, then check the interval.
2. The derivative at the minimum does not exist.
3. Factor f′ as 4x(x−1)(x+1).
4. Evaluate at 0 and 1; inspect 3x²+1.
5. Multiply 0.03 by 0.2.
6. Assign different constants on the two components.
7. The second derivatives are 6x and 12x².
8. Apply the MVT between arbitrary points.

</details>

<details>
<summary>Full solutions</summary>

1. The polynomial is continuous on [−1,1] and differentiable on (−1,1). Its secant slope is (1−(−1))/2=1. Thus c=±1/√3; both lie in (−1,1), exhausting the solutions of 3c²=1.

2. Rolle requires differentiability throughout (−1,1), which fails at zero. Fermat requires differentiability at the interior extremum, which also fails. The one-sided derivatives are −1 and 1; there is no common derivative to set equal to zero.

3. Candidates −2, −1, 0, 1 give values 8, −1, 0, −1. The absolute maximum is 8 at −2; the absolute minimum is −1 at −1 and 1. Derivative signs on (−2,−1), (−1,0), (0,1) are −, +, −. Thus the interior local minimum occurs at x=−1, and the interior local maximum at x=0.

4. Polynomial continuity and values −1 at 0 and 1 at 1 give a zero in (0,1) by the intermediate value theorem. Since 3x²+1>0 everywhere, the MVT gives strict increase on ℝ, preventing two distinct zeros.

5. The bound gives |T(10.2)−18|≤0.006. Therefore 17.994≤T(10.2)≤18.006 degrees. A magnitude bound alone supplies no direction of change.

6. On D=(−2,−1)∪(1,2), set f=0 on the first component and f=1 on the second. Every point has a neighbourhood where f is constant, so f′=0 throughout D. For points in different components, the connecting interval is not contained in the domain; the MVT cannot apply.

7. Both are stationary. For x³, the derivative 3x² is positive off zero, so there is no extremum; 6x changes sign, giving an inflection. For x⁴, nonnegativity gives a strict local minimum; 12x² has no sign change, so there is no inflection. Their shared value f″(0)=0 distinguishes none of these behaviors.

8. Put h=f−g, so h′=0. For any u<v in the interval, the MVT gives h(v)−h(u)=h′(c)(v−u)=0. Thus h is constant. Agreement at one point makes this constant zero, so f=g throughout.

</details>

## Saved theorem audit and quantitative transfer

The next diagnostic treats a theorem hypothesis as part of the conclusion, not as a preamble to skip.

```exercise
{"id":"calc-mvt-hypothesis-audit","type":"choice","prompt":"Which audit correctly explains why one MVT-style argument fails in each case: (i) |x| on [−1,1], (ii) f(x)=x on [0,1) but f(1)=2, and (iii) a function that is constant with different values on (−2,−1) and (1,2)?","options":[{"label":"(i) lacks interior differentiability; (ii) lacks continuity at an endpoint; (iii) has no connected interval joining the two components.","correct":true,"feedback":"Correct. Each failed conclusion is paired with the precise missing MVT hypothesis."},{"label":"All three fail because their derivatives are unbounded.","correct":false,"feedback":"The existing derivatives are bounded in these examples. The obstructions are a corner, an endpoint jump, and a disconnected domain."},{"label":"(i) lacks continuity; (ii) lacks interior differentiability; (iii) fails only because the endpoint values are unequal.","correct":false,"feedback":"|x| is continuous, the second function has derivative 1 throughout (0,1), and unequal endpoint values do not obstruct the MVT. Recheck where each hypothesis is required."}],"hints":["List continuity on the closed interval, differentiability on the open interval, and the requirement that the whole connecting interval lie in the domain."]}
```

```exercise
{"id":"calc-mvt-two-sided-bound","type":"written","prompt":"Let g be continuous on [0,4], differentiable on (0,4), with g(0)=−1 and 2≤g′(x)≤5. Prove that g has exactly one zero r, and locate r in a numerical interval forced only by these derivative bounds. State where each MVT and IVT hypothesis is used.","hints":["Apply the two-sided bound first from 0 to 1 to obtain a sign change.","At a zero r, compare g(r)−g(0)=1 with both 2r and 5r.","Use the positive lower derivative bound to rule out two zeros."],"rubric":["Derives 2(v−u)≤g(v)−g(u)≤5(v−u) for u<v","Uses continuity and endpoint signs to prove existence of a zero","Uses the positive lower bound to prove injectivity and uniqueness","Derives 1/5≤r≤1/2 exactly","Identifies the closed-interval continuity, open-interval differentiability, and connected-interval hypotheses"],"solution":"For 0≤u<v≤4, the MVT on [u,v] gives g(v)−g(u)=g′(c)(v−u), hence 2(v−u)≤g(v)−g(u)≤5(v−u). Taking u=0 and v=1 gives 1≤g(1)≤4, while g(0)=−1, so continuity on [0,1] and the IVT give a zero r in (0,1). The lower bound makes every change over u<v strictly positive, so g is injective and the zero is unique. At the zero, g(r)−g(0)=1; applying the bound from 0 to r gives 2r≤1≤5r, hence 1/5≤r≤1/2. Continuity is needed at the endpoints for the IVT and MVT restrictions, differentiability is needed between each pair, and the connected interval ensures those restrictions stay inside the domain.","transfer":"Changed assumption: h(x)=x³ on [−1,1] satisfies 0≤h′(x)≤3 but has no positive lower derivative bound. Determine which conclusions of the preceding argument still follow from those bounds, prove that no fixed m>0 can satisfy m(v−u)≤h(v)−h(u) for every u<v, and decide separately whether h is injective.","transferSolution":"The upper derivative bound gives |h(v)−h(u)|≤3|v−u|, and the lower bound 0 gives nondecrease, but it supplies neither a positive output-separation estimate nor inverse Lipschitz control. For u=−ε and v=ε, the secant slope is [ε³−(−ε³)]/(2ε)=ε², which is smaller than any proposed m>0 when ε is sufficiently small. Nevertheless h is injective: for u<v, v³−u³=(v−u)(v²+uv+u²)>0. Thus loss of the positive-bound certificate does not by itself prove loss of injectivity."}
```

## Further study

For additional theorem practice, consult [MIT 18.01SC, Unit 2 Part C](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-2-applications-of-differentiation/part-c-mean-value-theorem-antiderivatives-and-differential-equations/), especially Sessions 34–35. Another textbook presentation and exercises appear in [OpenStax §4.4](https://openstax.org/books/calculus-volume-1/pages/4-4-the-mean-value-theorem) and [§4.5](https://openstax.org/books/calculus-volume-1/pages/4-5-derivatives-and-the-shape-of-a-graph). These are supplementary resources; this chapter's explanations, experiments, and exercises are original.
