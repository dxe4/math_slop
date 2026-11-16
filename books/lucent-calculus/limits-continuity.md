# 1. Limits and continuity

If cancelling a factor or solving \(|x-a|<r\) feels unfamiliar, review the [algebra and functions refresher](../lucent-refresher/algebra-functions.md). Allow two study sessions, including written problems.

## Why approaching is a mathematical operation

A measurement can have a predictable nearby behavior even when the measurement at one particular input is missing. Consider g(x)=(x²−1)/(x−1). At x=1 its formula divides by zero. At every other input, factoring gives g(x)=x+1. Inputs close to 1 therefore produce outputs close to 2. The missing value does not prevent us from describing this behavior.

We write lim(x→a) f(x)=L when f(x) approaches L as x approaches a through the function's domain, excluding a itself. We require allowed inputs arbitrarily close to a; otherwise there is no nearby behavior to describe. For our usual interior-point examples, inputs approach from both sides. The left-hand and right-hand limits must agree for a two-sided limit to exist. At a domain endpoint we explicitly use the appropriate one-sided limit.

Three questions must stay separate: Is f(a) defined? Does the limit exist? If both exist, are they equal? Changing one isolated value cannot change a limit there, although it can change continuity. A limit also does not describe a process that eventually reaches a final input: there is no smallest positive distance from a real number.

## Worked example 1: repairing a removable gap

For x≠1, cancellation gives

(x²−1)/(x−1) = (x−1)(x+1)/(x−1) = x+1.

Therefore lim(x→1) g(x)=2. The cancellation was legal because limit calculations examine x≠1. It did not make the original quotient defined at 1. To construct a continuous extension, define G(x)=g(x) for x≠1 and G(1)=2. Choosing G(1)=7 instead would leave the same limit but create a mismatch at the point.

Limit laws explain the final substitution: sums and products of functions with finite limits have the corresponding sums and products as limits. A quotient also does, provided the denominator's limit is nonzero. The symbol 0/0 is an indication that this quotient law cannot be applied; it is not a number or a limit result.

## Worked example 2: rationalisation reveals the limit

For x≥−1 and x≠0, multiply numerator and denominator by the conjugate:

(√(1+x)−1)/x = [(1+x)−1]/[x(√(1+x)+1)] = 1/(√(1+x)+1).

The last expression has limit 1/2 at zero. Its denominator tends to 2, so the quotient law now applies. This method preserves values on a punctured neighbourhood; it does not assert that the two displayed formulas have identical domains everywhere.

A useful calculation routine is: identify the domain, try a justified substitution, inspect any failed hypothesis, transform the expression on nearby allowed inputs, and then state the limit. Numerical tables can suggest which transformation to seek, but rounding can conceal cancellation near zero.

## Why the limit laws are trustworthy

The algebraic rules for limits are theorems about *error*, not permissions to substitute blindly. To see the mechanism, suppose \(f(x)\to A\) and \(g(x)\to B\) as \(x\to a\). For a sum,

\[
|(f(x)+g(x))-(A+B)|\le |f(x)-A|+|g(x)-B|.
\]

Given an output tolerance \(\varepsilon\), use the two limit statements with \(\varepsilon/2\), then take the smaller of their input radii. Both errors are controlled at the same input. The product requires one extra step: a convergent function is bounded near the point. Choose a radius on which \(|f(x)-A|<1\), so \(|f(x)|\le |A|+1=M\). Then

\[
|f(x)g(x)-AB|\le |f(x)|\,|g(x)-B|+|B|\,|f(x)-A|
\le M|g(x)-B|+|B|\,|f(x)-A|.
\]

Make the first error smaller than \(\varepsilon/(2M)\) and the second smaller than \(\varepsilon/[2(|B|+1)]\). The minimum of those radii and the boundedness radius works. For a quotient, the denominator must also stay away from zero: if \(B\ne0\), require \(|g(x)-B|<|B|/2\), which forces \(|g(x)|>|B|/2\). This explains the nonzero-denominator hypothesis.

An apparent \(0/0\) does not determine a limit. At zero, \(x/x\to1\), \(x^2/x\to0\), and \(|x|/x\) has no two-sided limit. In each case the numerator and denominator approach zero. The nearby *relationship* between them decides the outcome.

## Precision: who chooses epsilon and delta?

The precise definition is:

For every ε>0 there exists δ>0 such that, for every x in the domain, 0<|x−a|<δ implies |f(x)−L|<ε.

Epsilon is a requested output tolerance. Delta is your promised input tolerance. The request arrives first; your delta may depend on epsilon and the point a, but cannot depend on whichever x is subsequently tested. The strict inequality 0<|x−a| excludes the point itself. One successful epsilon is insufficient: the promise must work for every positive accuracy request.

For f(x)=3x+2 at a=1, the target is 5. Given ε>0, choose δ=ε/3. If 0<|x−1|<δ, then |f(x)−5|=3|x−1|<3δ=ε. This is a complete proof because it starts with an arbitrary request and ends with the required bound.

### Visual laboratory 1: choosing a tolerance

This argument turns the order of the quantifiers into an adversarial construction. Advance only after recording what the current picture does and does not establish.

```visual-story
{
  "id": "epsilon-delta-as-a-guarantee",
  "title": "Build a guarantee that survives every nearby input",
  "prompt": "An opponent requests an output accuracy and then chooses an input. Your single delta must defeat every permitted choice, not merely the samples shown on the curve.",
  "stages": [
    {
      "title": "Locate the claim",
      "body": "The curve follows x² away from x=1, and the target (1,1) is marked. Decide which nearby inputs a limit statement inspects before assigning any special value at the centre.",
      "question": "Why would changing the value at x=1 leave this limit claim unchanged?",
      "checkpoint": {
        "hint": "Read the strict condition 0<|x−1|: which input is deliberately omitted?",
        "explanation": "A limit at 1 concerns values f(x) for inputs with 0<|x−1|<δ. The condition excludes x=1, so changing only f(1) changes neither those nearby values nor whether they can be forced close to 1. It can change continuity, because continuity additionally requires f(1) to exist and equal the limit.",
        "criteria": [
          "Uses the punctured-neighbourhood condition 0<|x−1|.",
          "Separates the nearby limit from the value at x=1.",
          "Notes that the changed point value can affect continuity."
        ]
      },
      "transition": "none",
      "focus": ["point-target"],
      "scene": [
        "scene \"1. A limit concerns a punctured neighbourhood\";",
        "domain -0.5 2.5;",
        "range -0.5 6;",
        "fn f(x) = x^2;",
        "plot f color blue;",
        "point target = (1,1);"
      ]
    },
    {
      "title": "Let a candidate fail",
      "body": "An opponent requests epsilon=0.5, and the proposed reply is delta=0.5. Test an input strictly inside that punctured interval rather than using either boundary.",
      "question": "Give one exact x with 0<|x−1|<0.5 whose output misses the band; avoid using the excluded boundary x=1.5.",
      "checkpoint": {
        "hint": "Try x=7/5 and compare both |x−1| and |x²−1| with 1/2.",
        "explanation": "Take x=7/5. Then 0<|7/5−1|=2/5<1/2, so the input is permitted. But |(7/5)²−1|=|49/25−25/25|=24/25>1/2, so its output lies outside the requested band. A single permitted witness disproves this candidate delta; friendly samples cannot repair it.",
        "criteria": [
          "Chooses a witness strictly inside the input interval.",
          "Computes both the input distance and output error exactly.",
          "Explains why one violating input defeats a universal guarantee."
        ]
      },
      "transition": "reveal",
      "focus": ["band-window_input", "band-window_output"],
      "scene": [
        "scene \"2. One counterexample defeats a candidate delta\";",
        "domain -0.5 2.5;",
        "range -0.5 6;",
        "param eps = 0.5 from 0.05 to 1.5;",
        "param d = 0.5 from 0.01 to 0.7;",
        "fn f(x) = x^2;",
        "plot f color blue;",
        "epsilon_delta f at 1 limit 1 epsilon eps delta d as window;"
      ]
    },
    {
      "title": "Find a sufficient radius",
      "body": "Keep epsilon=0.5 and shrink the candidate radius to delta=0.15. Inspect the rendered window, then decide what a finite drawing can establish about every real input in it.",
      "question": "Which sentence would be invalid: ‘the graph suggests this delta works’ or ‘the graph proves this delta works for every real x’—and why?",
      "checkpoint": {
        "hint": "Separate sampled evidence from an inequality that applies to an arbitrary permitted x.",
        "explanation": "The invalid sentence is ‘the graph proves this delta works for every real x.’ The renderer checks only finitely many samples. Here an independent bound does certify the choice: if |x−1|<3/20, then |x+1|<43/20, so |x²−1|< (3/20)(43/20)=129/400<1/2. The picture motivates the claim; the inequality covers every permitted x.",
        "criteria": [
          "Identifies finite sampling as evidence rather than a universal proof.",
          "States that a proof must handle an arbitrary permitted x.",
          "Uses an exact inequality, not pixel agreement, to certify the radius."
        ]
      },
      "transition": "transform",
      "focus": ["band-window_input", "band-window_output"],
      "scene": [
        "scene \"3. A successful picture asks for a proof\";",
        "domain -0.5 2.5;",
        "range -0.5 6;",
        "param eps = 0.5 from 0.05 to 1.5;",
        "param d = 0.15 from 0.01 to 0.7;",
        "fn f(x) = x^2;",
        "plot f color blue;",
        "epsilon_delta f at 1 limit 1 epsilon eps delta d as window;"
      ]
    },
    {
      "title": "Turn the picture into a bound",
      "body": "For an arbitrary positive epsilon, factor the output error into an input distance and a factor that still depends on x. Build one radius that controls both parts.",
      "question": "Derive a sufficient delta and state the choices in their legal order: who chooses epsilon, when is delta fixed, and who chooses x afterward?",
      "checkpoint": {
        "hint": "First impose |x−1|<1 to bound |x+1|, then combine that restriction with the accuracy request.",
        "explanation": "The opponent first chooses an arbitrary ε>0. We then fix δ=min(1,ε/3), before x is chosen. If the opponent subsequently chooses any x with 0<|x−1|<δ, the restriction δ≤1 gives |x+1|≤|x−1|+2<3. Therefore |x²−1|=|x−1||x+1|<3δ≤ε. The two entries in the minimum serve different jobs: one bounds the local factor and the other meets the requested accuracy.",
        "criteria": [
          "Chooses δ only after an arbitrary ε is given.",
          "Derives |x+1|<3 from the local restriction.",
          "Uses δ=min(1,ε/3) to finish the strict error bound.",
          "Keeps δ independent of the later choice of x."
        ]
      },
      "transition": "indicate",
      "focus": ["band-window_input", "band-window_output"],
      "scene": [
        "scene \"4. The algebra supplies the universal guarantee\";",
        "domain -0.5 2.5;",
        "range -0.5 6;",
        "param eps = 0.3 from 0.05 to 1.5;",
        "param d = 0.1 from 0.01 to 0.7;",
        "fn f(x) = x^2;",
        "plot f color blue;",
        "epsilon_delta f at 1 limit 1 epsilon eps delta d as window;"
      ]
    },
    {
      "title": "Transfer the mechanism",
      "body": "Move the centre to a=2 and the target to 4. Rebuild the argument rather than copying the constant from the proof at a=1.",
      "question": "Choose delta and write the full implication from 0<|x−2|<delta to |x²−4|<epsilon. Where is each part of the minimum used?",
      "checkpoint": {
        "hint": "Factor x²−4 and first use a radius of 1 to control the factor |x+2|.",
        "explanation": "Given ε>0, choose δ=min(1,ε/5). If 0<|x−2|<δ, then |x+2|=|(x−2)+4|≤|x−2|+4<5 because δ≤1. Hence |x²−4|=|x−2||x+2|<5δ≤ε. The radius 1 supplies the local bound 5; the radius ε/5 supplies the requested error. The centre changes the constant, while the quantifier order and factor-bound mechanism remain the same.",
        "criteria": [
          "Factors the output error as |x−2||x+2|.",
          "Derives the local bound |x+2|<5.",
          "Chooses δ=min(1,ε/5) and completes the implication.",
          "Explains the distinct purpose of both restrictions."
        ]
      },
      "transition": "transform",
      "focus": ["band-window_input", "band-window_output"],
      "scene": [
        "scene \"5. A changed centre tests the proof architecture\";",
        "domain 0 4;",
        "range -0.5 9;",
        "param eps = 0.5 from 0.05 to 1.5;",
        "param d = 0.1 from 0.01 to 0.7;",
        "fn f(x) = x^2;",
        "plot f color blue;",
        "epsilon_delta f at 2 limit 4 epsilon eps delta d as window;"
      ]
    }
  ]
}
```

A sufficient delta need not be the largest possible delta. For epsilon=0.5 at a=1, the largest symmetric radius is √1.5−1, limited by the steeper right side. The proof choice epsilon/3 is smaller because it trades sharpness for a reusable bound. The later tolerance challenge asks for both kinds of reasoning.

## When limits fail, and when bounds succeed

For floor(x), the greatest integer at most x, inputs immediately left of zero have value −1; inputs immediately right have value 0. Unequal one-sided limits prevent a two-sided limit. For 1/x, the two sides become unbounded with opposite signs. Writing a limit of +∞ describes unbounded growth, not a finite real limit. For sin(1/x), values continue oscillating between −1 and 1 near zero. A small viewing window does not remove that behavior.

### Visual laboratory 2: a jump cannot be repaired by zooming

**Predict.** Someone proposes lim(x→0) floor(x)=0 because floor(0)=0. Which side of zero challenges the claim?

```mathviz
scene "A point value cannot repair unequal one-sided limits";
domain -1.2 1.2;
range -1.5 1.5;
param eps = 0.4 from 0.1 to 0.9;
param d = 0.4 from 0.02 to 0.9;
fn f(x) = floor(x);
plot f color violet;
epsilon_delta f at 0 limit 0 epsilon eps delta d;
```

**Explore.** Keep eps below 1 and shrink d. Inspect inputs to the left. Any apparent connecting stroke at the jump comes from sampling and is not part of the mathematical graph.

**Explain.** For every 0<δ≤0.9, choose x=−δ/2. Then 0<|x|<δ, but |floor(x)−0|=1. For larger delta, the same failure occurs using x=−min(δ/2,1/2). Thus the requested output tolerance ε=1/2 can never be met.

**Transfer.** Would changing only floor(0) to −1 create a two-sided limit? Explain using the right-hand behavior.

The squeeze theorem supplies a different strategy. If g(x)≤f(x)≤h(x) near a, and both bounding functions tend to L, then f tends to L. To justify it, make both bounds lie inside (L−ε,L+ε); their shared input neighbourhood also traps f there.

### Visual laboratory 3: shrinking amplitude defeats oscillation

**Predict.** The function sin(1/x) has no limit at zero. Does multiplying by x change that conclusion?

```mathviz
scene "Oscillation inside a shrinking envelope";
domain -1 1;
range -1.1 1.1;
param k = 1 from 0.5 to 6;
fn f(x) = x*sin(k/x);
fn upper(x) = abs(x);
fn lower(x) = -abs(x);
plot f color blue;
plot upper color amber;
plot lower color amber;
```

**Explore.** Increase k to create more oscillations. Check whether any plotted value escapes the envelope. The function is undefined at x=0, even if pixels make the curve look connected there.

**Explain.** Since |sin(k/x)|≤1, we have |x sin(k/x)|≤|x|. Taking δ=ε proves the limit is zero for every fixed allowed k. Rapid oscillations may be missed by sampling, but the exact envelope remains valid.

**Transfer.** Replace x*sin(k/x) with x^2*sin(k/x) in the editor and the envelopes with x^2 and -x^2. What delta proves the new limit?

## Continuity and existence

Continuity at a means f(a) exists and lim(x→a) f(x)=f(a). At closed-interval endpoints use one-sided continuity. Polynomials are continuous everywhere; rational functions are continuous wherever their denominator is nonzero. Compositions preserve continuity when the inner output belongs to the outer function's domain. These statements justify many substitutions that otherwise look like guesses.

The intermediate value theorem states: if f is continuous on [a,b], every value between f(a) and f(b) occurs somewhere on that interval. For f(x)=x³+x−1, f(0)=−1 and f(1)=1; hence a root lies in (0,1). The theorem establishes existence, not uniqueness or a formula. It does not apply to 1/x on [−1,1], because continuity fails at zero. A graph that jumps over a value is not a counterexample to a theorem whose assumptions it violates.

### From existence to a certified approximation

For \(f(x)=x^3+x-1\), the sign change brackets a root. Let \(a_0=0\) and \(b_0=1\). At stage \(n\), set \(m_n=(a_n+b_n)/2\); retain the half whose endpoint values have opposite signs. If \(f(m_n)=0\), we are done. Otherwise continuity and the intermediate value theorem keep at least one root in every retained interval. After \(n\) bisections its length is \(2^{-n}\), so the midpoint is within \(2^{-(n+1)}\) of *some* root. This is a certified error bound, unlike reading pixels from a plot.

For this particular function there is exactly one root, because \(x^3+x\) is strictly increasing: for \(y>x\),

\[
(y^3+y)-(x^3+x)=(y-x)(y^2+xy+x^2+1)>0.
\]

The factor in parentheses is positive since \(y^2+xy+x^2=(x+y/2)^2+3y^2/4\ge0\). We have proved existence with continuity and uniqueness with order; they are different claims. After ten bisections, the midpoint error is at most \(1/2048\), whether or not we know a decimal expansion of the root.

**Explore the proof's hypotheses.** Move the two endpoints in this figure. The colored interval is a valid *bracket* only while \(a<b\) and \(f(a)f(b)\le0\). A displayed crossing cannot certify a bracket after those conditions are lost.

```mathviz
scene "A moving bracket for a continuous root";
domain -0.2 1.2;
range -1.2 1.2;
param a = 0 from 0 to 1;
param b = 1 from 0 to 1;
fn f(x) = x^3+x-1;
fn zero(x) = 0;
plot f color blue;
plot zero color amber;
point left = (a,f(a)) color rose;
point right = (b,f(b)) color teal;
segment bracket from (a,0) to (b,0) color violet;
```

Before using the next slider position, record the endpoint signs and predict whether the intermediate value theorem still applies. Then choose an interval that does *not* bracket a root and explain why the same drawing no longer supports the claim. In the source editor, replace \(f\) by \(x^2-1/4\); find two different sign-changing brackets and decide what uniqueness statement survives.

## A bridge to analysis: limits through sequences

A sequence can expose behavior that a finite graph conceals. Let \(a\) be an accumulation point of the domain \(D\). The **sequential criterion** says that \(\lim_{x\to a}f(x)=L\) exactly when *every* sequence \(x_n\in D\setminus\{a\}\) with \(x_n\to a\) also satisfies \(f(x_n)\to L\).

For the forward direction, start with an arbitrary output tolerance \(\varepsilon\). The function limit gives a radius \(\delta\). Since \(x_n\to a\), all sufficiently late terms lie within that radius; their outputs then lie within \(\varepsilon\) of \(L\). For the reverse direction, suppose the function limit fails. Negating the definition gives one \(\varepsilon_0>0\) such that every radius contains an allowed \(x\) with \(|f(x)-L|\ge\varepsilon_0\). Choose such an \(x_n\) inside radius \(1/n\). Then \(x_n\to a\), but \(f(x_n)\) never enters the \(\varepsilon_0\)-band. This contradicts the sequence condition.

The word *every* matters. To disprove a proposed limit it is enough to find one bad sequence. For \(f(x)=\sin(1/x)\) at zero, take

\[
x_n=\frac{1}{\pi/2+2\pi n},
\qquad
y_n=\frac{1}{3\pi/2+2\pi n}.
\]

Both positive sequences approach zero, but \(f(x_n)=1\) and \(f(y_n)=-1\). No real number can be the limit. By contrast, \(x\sin(1/x)\to0\): the bound \(|x\sin(1/x)|\le|x|\) controls *every* nearby input, including ones no plotted or chosen sequence happens to contain.

## Practice: calculation, explanation, proof, and modelling

1. Evaluate lim(x→2) (x²−4)/(x−2). State whether the original function has a value at 2.
2. Evaluate lim(x→0) (√(4+x)−2)/x. Identify the nearby domain restrictions.
3. A function equals x² for x≠2 and equals c at 2. Find its limit there and the unique c making it continuous.
4. Prove lim(x→−1) (4x−3)=−7 directly from the epsilon–delta definition.
5. Complete the proof that lim(x→2) x²=4, with an explicit delta for every epsilon.
6. Use comparison to prove lim(x→0) x² cos(1/x)=0. Explain why substitution into the original formula fails.
7. A continuous sensor calibration has C(0)=−2 and C(4)=6. What can you guarantee about a reading of 3? Can you guarantee it occurs exactly once?
8. Decide whether lim(x→0) |x|/x exists. Give both one-sided limits and explain why redefining its value at zero cannot help.
9. Design a failed limit test: for floor(x) at zero and proposed limit −1, choose one fixed epsilon and, for every delta, an input that violates the definition.
10. Prove from the definition that \(\lim_{x\to2}(x^2+3x)=10\). Give one explicit \(\delta(\varepsilon)\), not merely a calculation with limit laws.
11. Suppose \(f\) is continuous on \([0,1]\), \(f(0)<0<f(1)\), and a bisection method has performed seven steps. Give the current interval length and the largest possible error of its midpoint as a root approximation. Explain why uniqueness was not needed.
12. Find two sequences of nonzero inputs approaching zero that disprove \(\lim_{x\to0}\cos(1/x)=1\). Explain why checking only the sequence \(1/(2\pi n)\) would be inconclusive.
13. Let \(f(x)=x^2\) for \(x\ne1\), but \(f(1)=9\). Is \(f\) continuous at 1? Does \(x_n\to1\) by itself ensure \(f(x_n)\to1\) when terms are allowed to equal 1? State the missing condition in the sequential criterion.

<details>
<summary>First hints: choose a strategy</summary>

1. Factor a difference of squares.
2. Multiply by the conjugate; keep track of where cancellation is valid.
3. A limit ignores the value at the point.
4. Simplify the output error before choosing delta.
5. Bound the extra factor after factoring x²−4.
6. The absolute value of cosine never exceeds 1.
7. Verify every hypothesis of the intermediate value theorem.
8. Remove the absolute value separately on each side.
9. The right side of the jump is the obstruction this time.
10. Factor \(x^2+3x-10=(x-2)(x+5)\) and first impose \(|x-2|<1\).
11. Bisection halves the interval on each step. The midpoint is at most half an interval length from any enclosed point.
12. Choose phases at which cosine equals \(1\) and \(-1\).
13. The definition of a function limit excludes the point itself; continuity includes it.

</details>

<details>
<summary>Second hints: the key step</summary>

1. The quotient agrees with x+2 away from 2.
2. The transformed denominator is √(4+x)+2.
3. Compute the limit of x² as x approaches 2.
4. The output error is 4|x+1|.
5. Under |x−2|<1, we have |x+2|<5.
6. Require |x|²<ε.
7. Three lies between −2 and 6; continuity says nothing about oscillation.
8. For x<0 the quotient is −1; for x>0 it is 1.
9. Try ε=1/2 and a positive x smaller than both delta and 1.
10. Under \(|x-2|<1\), the factor \(|x+5|\) is less than 8.
11. Distinguish a bracket for *at least one* root from a proof of *exactly one* root.
12. Try reciprocal inputs \(1/(2\pi n)\) and \(1/((2n+1)\pi)\), with \(n\ge1\).
13. A sequence testing a punctured limit must remain in the punctured domain.

</details>

<details>
<summary>Fully worked solutions</summary>

1. For x≠2, (x²−4)/(x−2)=x+2, whose limit at 2 is 4. The original quotient is undefined at 2; the limit does not assign a value there.
2. For x≥−4 and x≠0, rationalisation gives 1/(√(4+x)+2). Near zero its denominator is positive and tends to 4, so the limit is 1/4.
3. On every punctured neighbourhood the function agrees with x², so the limit is 4. Continuity additionally requires c=4. Any other c changes the value but not the limit.
4. Given ε>0, choose δ=ε/4. Whenever 0<|x+1|<δ, |(4x−3)+7|=4|x+1|<4δ=ε. This proves the requested statement.
5. Given ε>0, choose δ=min(1,ε/5). Then 0<|x−2|<δ implies 1<x<3, hence |x+2|<5. Therefore |x²−4|=|x−2||x+2|<5|x−2|<5δ≤ε.
6. For x≠0, |x² cos(1/x)|≤x². Given ε>0 choose δ=√ε; then 0<|x|<δ implies the output error is at most x²<ε. Substitution would require evaluating 1/0, which is undefined.
7. Because C is continuous on [0,4] and −2<3<6, at least one input t in (0,4) has C(t)=3. There may be several such inputs if the calibration rises and falls. Uniqueness requires additional information, such as strict monotonicity.
8. The left limit is −1 and the right limit is 1, so no two-sided limit exists. Any assigned value at zero is excluded by the punctured-neighbourhood condition and cannot make the side limits agree.
9. Fix ε=1/2. For any δ>0 take x=min(δ/2,1/2). Then 0<x<δ, x<1, and floor(x)=0. Thus |floor(x)−(−1)|=1≥ε. This violates the claimed limit for every delta.
10. Given \(\varepsilon>0\), choose \(\delta=\min(1,\varepsilon/8)\). If \(0<|x-2|<\delta\), then \(1<x<3\), so \(|x+5|<8\). Hence \(|x^2+3x-10|=|x-2||x+5|<8\delta\le\varepsilon\).
11. The interval length is \(2^{-7}=1/128\); its midpoint is within \(2^{-8}=1/256\) of any root it contains. Continuity and opposite endpoint signs keep at least one root inside each retained half. Several roots might remain; the distance estimate still holds for each enclosed root.
12. Let \(x_n=1/(2\pi n)\) and \(y_n=1/((2n+1)\pi)\). Both tend to zero, but \(\cos(1/x_n)=1\) and \(\cos(1/y_n)=-1\). One favourable sequence cannot verify a universal limit condition; the second one disproves the proposed limit.
13. The function limit is 1, while the value at 1 is 9, so \(f\) is discontinuous there. A sequence constantly equal to 1 has outputs constantly 9. Finitely many visits to 1 would not affect a sequence limit, but infinitely many can obstruct convergence to 1. The sequential criterion for a punctured limit requires \(x_n\ne1\) for every \(n\) (or at least eventually); the sequential criterion for continuity allows \(x_n=1\).

</details>

## Tolerance challenge: an opponent chooses the input

Return to f(x)=x² near a=1. Let ε=0.5. You choose δ>0 first; then an opponent may choose **any** x with 0<|x−1|<δ. If your radius is too large, a failed input is not hard to construct. On the right, write x=1+t with 0<t<δ. The output error is x²−1=2t+t². It exceeds ε as soon as t>√(1+ε)−1. Thus the largest valid symmetric radius for this ε is √1.5−1≈0.22474487. Equality is valid because the input condition uses t<δ, not t≤δ.

For a proposed δ above that threshold, choose t halfway between the threshold and δ, then x=1+t. This input lies inside your chosen neighborhood and produces an error greater than ε. For δ at or below the threshold, the right side is controlled; the left side gives |(1−t)²−1|=|−2t+t²|, which is no larger on the relevant range. This exact boundary is useful for understanding the game. In a proof exercise, the simpler conservative δ=min(1,ε/3) is often preferable because its algebra works for every ε>0 without solving a quadratic.

```exercise
{"id":"calc-epsilon-radius","type":"numeric","prompt":"For f(x)=x² at a=1 and ε=0.5, enter the largest valid symmetric δ to four decimal places.","answer":0.2247448714,"tolerance":0.0001,"hints":["On the right set x=1+t and solve 2t+t²=0.5.","The positive root is √1.5−1."],"feedback":"A radius above √1.5−1 admits a right-hand input whose output error exceeds 0.5; a smaller radius may work but is not largest."}
```

```exercise
{"id":"calc-epsilon-repair","type":"written","prompt":"Repair this proposed limit proof: ‘Given ε>0 and x close to 1, choose δ=ε/|x+1|. Then |x²−1|<ε.’ Explain the quantifier error and provide one δ that works for every allowed x.","hints":["The choice of δ must come before the opponent chooses x.","First require |x−1|<1 to bound |x+1|."],"rubric":["Identifies that δ illegally depends on the later chosen input x","Bounds |x+1| by 3 in a fixed neighborhood","Chooses δ=min(1,ε/3) or another valid x-independent radius","Shows the final strict inequality for all permitted x"],"solution":"δ cannot depend on the x tested after δ is chosen. Given ε>0, set δ=min(1,ε/3). If 0<|x−1|<δ, then |x+1|<3 and |x²−1|=|x−1||x+1|<3δ≤ε. The same δ works for every permitted x."}
```

**Readiness check:** explain the order “every epsilon, some delta, every nearby input” without looking above. Then solve one algebraic limit and one existence question while stating the relevant hypotheses.

**Further reading:** [OpenStax Calculus Volume 1, chapter 2](https://openstax.org/books/calculus-volume-1/pages/2-introduction) offers another treatment of limits and continuity. [MIT 18.01SC](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/) provides a university course sequence and additional practice. This chapter's explanations, investigations, and exercises are original.
