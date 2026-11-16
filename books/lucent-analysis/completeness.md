# Order and completeness of the real numbers

The rational and real numbers support the same familiar arithmetic rules, but their order structures differ. Rational numbers leave gaps: no rational number has square two. Real analysis rests on a completeness axiom that rules out this kind of missing boundary. A drawn number line conveys the idea of a continuous line, but a drawing cannot establish the axiom or substitute for arguments using it.

## Bounds and extremal elements

Let \(A\subseteq\mathbb R\). A real number \(M\) is an **upper bound** for \(A\) if \(a\le M\) for every \(a\in A\). The set is bounded above when such an \(M\) exists. A maximum of \(A\) is an upper bound that also belongs to \(A\). An upper bound need not be attained, and when a maximum exists it is unique.

A number \(s\) is the **supremum** of \(A\), written \(\sup A\), if:

1. \(s\) is an upper bound for \(A\);
2. every upper bound \(M\) for \(A\) satisfies \(s\le M\).

Thus a supremum is the least upper bound. Similarly, \(m\) is a lower bound if \(m\le a\) for every \(a\in A\). The **infimum** \(\inf A\) is the greatest lower bound. A minimum is a lower bound belonging to the set. A set is bounded if it is bounded above and below.

For \(A=(0,1)\), \(\sup A=1\) and \(\inf A=0\), but \(A\) has neither a maximum nor a minimum. The set \((0,1]\) has maximum 1 and no minimum. These examples show why endpoint membership must be checked separately from bounds.

The empty set has every real number as an upper bound, but no least real upper bound: if \(s\) were least, \(s-1\) would be smaller. Accordingly, our real-valued supremum statements exclude empty sets.

## The completeness axiom

**Completeness axiom.** Every nonempty subset of \(\mathbb R\) that is bounded above has a supremum in \(\mathbb R\).

This is an assumption describing \(\mathbb R\), not a theorem deduced from a graph. It also yields infima: if \(A\) is nonempty and bounded below, then \(-A=\{-a:a\in A\}\) is nonempty and bounded above. The number \(-\sup(-A)\) is \(\inf A\), because reversing signs reverses every order inequality.

**Theorem 2.1: approximation of a supremum.** Let \(A\subseteq\mathbb R\) be nonempty, and let \(s\in\mathbb R\). Then \(s=\sup A\) if and only if \(s\) is an upper bound for \(A\) and, for every \(\varepsilon>0\), there exists \(a\in A\) such that \(s-\varepsilon<a\).

**Proof.** Suppose \(s=\sup A\). For \(\varepsilon>0\), the smaller number \(s-\varepsilon\) cannot be an upper bound, so some \(a\in A\) satisfies \(a>s-\varepsilon\). Conversely, assume both stated conditions, and let \(M\) be any upper bound. If \(M<s\), choose \(\varepsilon=s-M>0\). The approximation condition gives \(a\in A\) with \(a>s-\varepsilon=M\), contradicting the fact that \(M\) bounds \(A\). Therefore \(s\le M\), proving that \(s\) is the least upper bound. ∎

The witness \(a\) may depend on \(\varepsilon\). The theorem does not assert that a single element lies arbitrarily close to \(s\) unless \(s\) itself belongs to \(A\).

## The Archimedean property

**Theorem 2.2.** For every \(x\in\mathbb R\), there exists \(n\in\mathbb N\) such that \(n>x\).

**Proof.** Suppose instead that \(\mathbb N\) is bounded above. Since \(\mathbb N\) is nonempty, completeness supplies \(s=\sup\mathbb N\). By supremum approximation with \(\varepsilon=1\), there exists \(n\in\mathbb N\) such that \(n>s-1\). But \(n+1\in\mathbb N\) and \(n+1>s\), contradicting the upper-bound property of \(s\). Hence \(\mathbb N\) is unbounded above, which is exactly the asserted statement. ∎

**Consequence.** For every \(\varepsilon>0\), there exists \(n\in\mathbb N\) with \(0<1/n<\varepsilon\). Apply the theorem to \(x=1/\varepsilon\) and take reciprocals of positive quantities. This result will let us make errors as small as required in later limit arguments.

This consequence is a model of a quantified proof: the requested tolerance \(\varepsilon\) comes first, and the chosen integer may depend on it. Reversing those choices would assert that one integer works for every positive \(\varepsilon\), which is impossible.

**Density of the rationals.** If a < b, there is a rational q with a < q < b. Choose n ∈ ℕ with n(b−a) > 1. The Archimedean property and well-ordering give an integer m with na < m ≤ na+1: select the least integer strictly above na, after translating by a sufficiently large integer to use well-ordering of ℕ. Then a < m/n ≤ a+1/n < b. Every nontrivial interval also contains an irrational: choose rational q between a−√2 and b−√2, so q+√2 lies between a and b and is irrational. The workshop below constructs positive square roots from completeness without assuming continuity. Its construction with 2 in place of 3 supplies √2. The irrationality of √2 follows from the usual lowest-terms argument: p² = 2q² would force both p and q even. These density facts will explain examples invisible to finite sampling.

## Nested intervals: completeness as a construction tool

Suppose closed intervals \(I_n=[a_n,b_n]\) are nested (\(I_{n+1}\subseteq I_n\)) and their lengths \(b_n-a_n\) tend to zero. The left endpoints increase, the right endpoints decrease, and all lie in \(I_1\). Put \(c=\sup\{a_n:n\ge1\}\). Every \(b_n\) bounds *all* left endpoints: for \(k\ge n\), \(a_k\le b_k\le b_n\), and for \(k<n\), \(a_k\le a_n\le b_n\). Hence \(a_n\le c\le b_n\) for each \(n\). Thus \(c\) belongs to every interval. If \(d\) also belonged to all intervals, \(|c-d|\le b_n-a_n\) for every \(n\), forcing \(c=d\). We used completeness to make one real point from indefinitely refined constraints.

Do not transfer the statement unchanged to \(\mathbb Q\). Rational closed intervals in the rational subspace can shrink around \(\sqrt2\) and have empty intersection **in \(\mathbb Q\)**. The issue is the ambient space, not a failure to draw sufficiently many intervals.

## Reverse the argument: intervals recover a supremum

The nested-interval theorem is not just an application of completeness. In an Archimedean ordered field, it can serve as a *replacement axiom*. Suppose every nested family of nonempty closed bounded intervals whose lengths tend to zero has a common point. We can reconstruct the supremum of any nonempty bounded-above set \(A\) as follows.

Choose \(a\in A\), an upper bound \(u_0\), and put \(\ell_0=a-1\). The left endpoint is deliberately **not** an upper bound; \(a\) lies above it. At stage \(n\), let \(m_n=(\ell_n+u_n)/2\). If \(m_n\) bounds \(A\), keep \([\ell_n,m_n]\); otherwise keep \([m_n,u_n]\). Inductively, every retained left endpoint fails to bound \(A\), and every retained right endpoint bounds \(A\). The intervals are nested and have lengths \((u_0-\ell_0)/2^n\to0\). Their common point \(s\) exists by the assumed interval property.

Why is \(s\) an upper bound? If some \(a_*\in A\) satisfied \(a_*>s\), choose \(n\) with \(u_n-\ell_n<a_*-s\). Since \(s\ge\ell_n\), we have \(u_n\le s+(u_n-\ell_n)<a_*\), contradicting that \(u_n\) bounds \(A\). Why is it the *least* one? If an upper bound \(M<s\) existed, choose \(n\) with \(u_n-\ell_n<s-M\). Since \(s\le u_n\), we have \(\ell_n\ge s-(u_n-\ell_n)>M\). But an upper bound smaller than \(\ell_n\) would make \(\ell_n\) an upper bound too, contradicting its construction. Thus \(s=\sup A\).

This proof separates three jobs often compressed into one sentence: maintain the bounding invariant, obtain a point from nested intervals, and verify that the point has the *least-upper-bound* property. The rate \(2^{-n}\) only makes the intervals narrow; it does not by itself create a point in an incomplete number system.

## Exercises

1. Find \(\sup A\), \(\inf A\), and any maximum or minimum for \(A=\{1/n:n\in\mathbb N\}\). Justify the infimum.
2. Let \(A\subseteq\mathbb R\) be nonempty and bounded above, and \(c\in\mathbb R\). Prove \(\sup\{a+c:a\in A\}=\sup A+c\).
3. Show that a nonempty finite subset of \(\mathbb R\) has a maximum and therefore a supremum belonging to the set.
4. Let \(I_n=[a_n,b_n]\) be nested closed intervals in \(\mathbb R\). If their lengths do **not** tend to zero, does their intersection still have to be nonempty? Prove your answer; identify which part of the theorem above needs the length condition.
5. For nonempty bounded-above \(A,B\subseteq\mathbb R\), prove \(\sup(A\cup B)=\max(\sup A,\sup B)\). Explain why replacing the union by the intersection would change the answer.
6. Give nested nonempty *open* intervals whose lengths tend to zero but whose intersection is empty. Identify the exact hypothesis this tests.
7. Let \(A\subseteq[0,\infty)\) be nonempty and bounded. Prove \(\sup\{a^2:a\in A\}=(\sup A)^2\) without assuming \(\sup A\in A\). Give a counterexample if the nonnegative restriction is removed.
8. Starting from the supremum axiom, prove that every increasing bounded-above sequence of real numbers converges. Explain precisely where monotonicity enters and why boundedness alone is not enough.

<details>
<summary>Hints</summary>

1. Use the Archimedean consequence to rule out positive lower bounds.
2. Translate upper bounds in both directions.
3. Induct on the number of elements.
4. Use the supremum of the left endpoints again. Think about whether uniqueness is the only part that needs shrinking lengths.
5. A common upper bound must bound both sets. For the intersection, try overlapping intervals before writing a formula.
6. Begin with \((0,1/n)\) and ask whether any positive point survives every stage.
7. Squares preserve order only for nonnegative numbers. Approximate the supremum from below and factor a difference of squares.
8. Apply the approximation property to the set of sequence values; then trap the entire tail.

</details>

<details>
<summary>Solutions</summary>

1. The supremum and maximum are 1. Zero is a lower bound. If \(b>0\), some \(1/n<b\), so \(b\) is not a lower bound. Hence the infimum is 0, which is not attained; there is no minimum.
2. Write \(s=\sup A\). Every \(a+c\le s+c\). If \(M\) bounds the translated set, then \(M-c\) bounds \(A\), so \(s\le M-c\) and \(s+c\le M\). This proves leastness.
3. A singleton has its sole element as maximum. If k elements have maximum m, adjoining a new element a gives maximum max(m,a). Induction covers every nonempty finite set. A maximum is automatically its set's least upper bound.
4. Yes: the same supremum argument puts \(c=\sup_n a_n\) inside every interval without using the length condition. Shrinking lengths are needed only for uniqueness. For example every \(I_n=[0,1]\) gives intersection \([0,1]\), not a singleton.
5. Write \(\alpha=\sup A\), \(\beta=\sup B\), and \(m=\max(\alpha,\beta)\). The number \(m\) bounds the union. Any upper bound for the union bounds both \(A\) and \(B\), so it is at least \(\alpha\) and \(\beta\), hence at least \(m\). For intersections there is no formula from the two suprema alone: take \(A=(0,1)\cup(2,3)\) and \(B=(0,1)\cup(4,5)\). Their intersection is \((0,1)\), with supremum 1, although \(\sup A=3\) and \(\sup B=5\).
6. The intervals \(I_n=(0,1/n)\) are nonempty, nested, and have length \(1/n\to0\), but no \(x>0\) lies below \(1/n\) for every \(n\), while \(0\) is excluded from every interval. Thus \(\bigcap_n I_n=\varnothing\). Closedness is essential to the nested-interval conclusion.
7. Let \(s=\sup A\ge0\). Since \(0\le a\le s\), every \(a^2\le s^2\), so \(s^2\) is an upper bound. If \(s=0\), nonemptiness forces \(A=\{0\}\), and the claim is immediate. If \(s>0\) and \(M<s^2\), choose \(0<h<\min(s,(s^2-M)/(2s+1))\) and set \(t=s-h\). Then \(0<t<s\) and \(t^2>s^2-h(2s+1)>M\). Supremum approximation gives \(a\in A\) with \(a>t\), so \(a^2>t^2>M\). Thus \(s^2\) is least. Without the restriction take \(A=(-2,-1)\): its squared values have supremum 4, whereas \((\sup A)^2=1\).
8. Let \(L=\sup\{a_n:n\ge1\}\). Given \(\varepsilon>0\), some \(a_N>L-\varepsilon\). Monotonicity makes every \(a_n\) for \(n\ge N\) satisfy \(L-\varepsilon<a_N\le a_n\le L\), so \(a_n\to L\). Without monotonicity, the bounded sequence \((-1)^n\) need not converge. The next chapter develops this theorem and its consequences.

</details>

## Workshop: find the boundary without assuming it is attained

Let \(E=\{x\in\mathbb R:x\ge0\text{ and }x^2<3\}\). We know \(E\) is nonempty (1 belongs) and bounded above (2 bounds it). Completeness therefore gives \(s=\sup E\). We can identify \(s\) without presuming that \(E\) has a largest member.

We now identify \(s\) using only inequalities, avoiding an appeal to continuity that has not yet been established from the ordered-field axioms. Since \(1\in E\), we have \(s\ge1\). If \(s^2<3\), choose

\[
0<h<\min\!\left(1,\frac{3-s^2}{2s+1}\right).
\]

Then \((s+h)^2=s^2+2sh+h^2<s^2+h(2s+1)<3\), so \(s+h\in E\). This contradicts the fact that \(s\) bounds \(E\). If instead \(s^2>3\), choose

\[
0<h<\min\!\left(\frac{s}{2},\frac{s^2-3}{2s}\right).
\]

Now \(s-h>0\) and \((s-h)^2=s^2-2sh+h^2>3\). Every \(x\in E\) must satisfy \(x<s-h\): otherwise \(x\ge s-h>0\) would imply \(x^2\ge(s-h)^2>3\). Hence \(s-h\) would be an upper bound smaller than \(s\), another contradiction. The only remaining case is \(s^2=3\). We have *constructed* the positive square root from completeness rather than assuming it exists.

The rationals fail at exactly this step. The set of nonnegative rationals \(q\) with \(q^2<3\) is bounded above *in \(\mathbb Q\)*, but has no rational supremum: a rational candidate either has square less than 3 and can be increased, or has square greater than 3 and can be decreased. The missing case \(q^2=3\) cannot occur for rational \(q\): if \(p^2=3r^2\) in lowest terms, residue classes modulo 3 show 3 divides \(p\), then substitution shows 3 divides \(r\), a contradiction. Completeness is the engine that turns a set of approximations into a boundary in the ambient number system.

The nested-interval construction reappears in the countability lesson: one interval at stage \(n\) excludes the \(n\)th entry of a proposed list of all reals. The common point exists by the argument above and defeats the whole list, rather than merely its first few entries.

### Visual argument: a bracket is an invariant, not a pixel

Each stage starts at the specified bisection endpoints. The controls let you
inspect other brackets whose endpoint signs remain valid. Moving an endpoint
independently does not perform a bisection step: the stated nesting and width
formulas describe the authored sequence of defaults, not arbitrary slider
changes.

```visual-story
{
  "id": "completeness-nested-brackets",
  "title": "Finite bisection narrows a bracket; completeness supplies its limit",
  "prompt": "Construct the positive solution of x² = 3 without assuming that it already exists. At every finite stage, separate the endpoint invariant from the eventual existence claim.",
  "stages": [
    {
      "title": "Establish the first invariant",
      "body": "Begin with the two authored endpoints and decide their logical roles before opening the diagram. The residual curve is only a finite rendering; the inequalities must certify the bracket.",
      "question": "Verify 1² < 3 < 2². Why do these inequalities give a lower non-upper bound and an upper bound for E = {x ≥ 0 : x² < 3}?",
      "checkpoint": {
        "hint": "Membership of 1 in E is not enough: exhibit a larger member of E to show that 1 is not an upper bound. Then use monotonicity of squaring on nonnegative inputs to show that 2 bounds every member.",
        "explanation": "We have 1²−3=−2<0 and 2²−3=1>0. Since 1∈E, and for example 3/2∈E lies above 1, the endpoint 1 is not an upper bound. More generally, a negative residual at a nonnegative endpoint shows membership, not by itself failure to be an upper bound; the larger member 3/2 supplies that conclusion here. If x∈E and x≥2, then nonnegative order gives x²≥4>3, a contradiction. Hence every x∈E has x<2, so 2 is an upper bound. The bracket records these order facts; sampled pixels do not prove them.",
        "criteria": [
          "Computes both endpoint residuals exactly.",
          "Distinguishes membership in E from failure to be an upper bound.",
          "Uses nonnegative order to prove that 2 bounds every member of E."
        ]
      },
      "transition": "none",
      "focus": ["curve-residual_curve", "point-lower", "point-upper", "line-chosen"],
      "scene": [
        "scene \"An initial square-root bracket\";",
        "domain 1 2;",
        "range -2.2 1.2;",
        "param a = 1 from 1 to 1.6;",
        "param b = 2 from 1.75 to 2;",
        "fn f(x) = x^2-3;",
        "fn zero(x) = 0;",
        "measure bracket_width = b-a;",
        "plot f color blue as residual_curve;",
        "plot zero color amber as axis_curve;",
        "point lower = (a,f(a)) color rose;",
        "point upper = (b,f(b)) color teal;",
        "segment chosen from (a,0) to (b,0) color violet;"
      ]
    },
    {
      "title": "Classify the first midpoint",
      "body": "Test the midpoint of the current bracket. Decide which endpoint it may replace from the definition of E, not from the apparent height of the plotted point.",
      "question": "Compute 1.5²−3. Which logical test, rather than the residual's drawn height, determines that [1.5,2] is the retained half?",
      "checkpoint": {
        "hint": "Compute (3/2)²−3, then ask whether 3/2 belongs to E and whether a known member of E lies above it.",
        "explanation": "The exact residual is (3/2)²−3=9/4−12/4=−3/4. Thus 3/2∈E. It is also not an upper bound because, for example, 5/3∈E and 5/3>3/2. The old right endpoint 2 remains an upper bound, so the retained half is [3/2,2]. It is nested in [1,2], has half the width, and preserves the non-upper/upper endpoint roles.",
        "criteria": [
          "Computes the residual as −3/4.",
          "Justifies the non-upper role rather than inferring it only from a plotted sign.",
          "States the retained interval and both endpoint roles."
        ]
      },
      "transition": "transform",
      "focus": ["point-lower", "point-upper", "line-chosen"],
      "scene": [
        "scene \"The first retained half\";",
        "domain 1 2;",
        "range -2.2 1.2;",
        "param a = 1.5 from 1 to 1.7;",
        "param b = 2 from 1.75 to 2;",
        "fn f(x) = x^2-3;",
        "fn zero(x) = 0;",
        "measure bracket_width = b-a;",
        "plot f color blue as residual_curve;",
        "plot zero color amber as axis_curve;",
        "point lower = (a,f(a)) color rose;",
        "point upper = (b,f(b)) color teal;",
        "segment chosen from (a,0) to (b,0) color violet;"
      ]
    },
    {
      "title": "Preserve the invariant again",
      "body": "Make a second midpoint decision, then formulate an induction that covers every later decision, including the possibility that a midpoint is the boundary itself.",
      "question": "State an induction hypothesis for stage n and prove that either midpoint decision preserves all three facts: nesting, endpoint roles, and halved width.",
      "checkpoint": {
        "hint": "Use m=(aₙ+bₙ)/2. Split into m²<3 and m²≥3 so the equality branch is not omitted.",
        "explanation": "At the authored midpoint, (7/4)²−3=49/16−48/16=1/16>0, so 7/4 is an upper bound: if x∈E and x≥7/4, then x²≥49/16>3. Retain [3/2,7/4]. Inductively assume aₙ is not an upper bound, bₙ is an upper bound, and bₙ−aₙ=2⁻ⁿ for the initial width one. Put m=(aₙ+bₙ)/2. If m²<3, choose 0<h<min(1,(3−m²)/(2m+1)); then (m+h)²<3, so m+h∈E and m is not an upper bound. Retain [m,bₙ]. If m²≥3, including equality, every x∈E satisfies x<m, so m is an upper bound; retain [aₙ,m]. Either interval is nested and has width (bₙ−aₙ)/2=2⁻(ⁿ⁺¹).",
        "criteria": [
          "Computes the authored residual as 1/16 and retains [3/2,7/4].",
          "States the endpoint-role, nesting, and width induction hypothesis.",
          "Handles m²=3 inside the upper-bound branch.",
          "Proves the retained width is halved."
        ]
      },
      "transition": "transform",
      "focus": ["point-lower", "point-upper", "line-chosen"],
      "scene": [
        "scene \"The second retained half\";",
        "domain 1 2;",
        "range -2.2 1.2;",
        "param a = 1.5 from 1.4 to 1.7;",
        "param b = 1.75 from 1.74 to 1.9;",
        "fn f(x) = x^2-3;",
        "fn zero(x) = 0;",
        "measure bracket_width = b-a;",
        "plot f color blue as residual_curve;",
        "plot zero color amber as axis_curve;",
        "point lower = (a,f(a)) color rose;",
        "point upper = (b,f(b)) color teal;",
        "segment chosen from (a,0) to (b,0) color violet;"
      ]
    },
    {
      "title": "Name the missing infinite step",
      "body": "The authored scene shows a late finite bracket. Separate what its width certifies from the theorem needed to obtain one point satisfying every future constraint.",
      "question": "Using c = sup{aₙ}, prove aₙ ≤ c ≤ bₙ for every n. Which part proves existence, and which use of shrinking widths proves uniqueness?",
      "checkpoint": {
        "hint": "For fixed n, split a left endpoint aₖ into k<n and k≥n to prove aₖ≤bₙ before invoking the supremum.",
        "explanation": "The displayed interval [1.71875,1.734375] has width 0.015625=1/64, but this finite fact creates no infinite intersection. Completeness gives c=sup{aₙ}, because the left endpoints form a nonempty set bounded by b₁. Fix n. If k<n, nesting gives aₖ≤aₙ≤bₙ; if k≥n, nesting gives aₖ≤bₖ≤bₙ. Thus bₙ bounds every left endpoint, so aₙ≤c≤bₙ. This is the existence step: c lies in every bracket. If d also lies in every bracket, then |c−d|≤bₙ−aₙ=2⁻ⁿ for every n, and the Archimedean property forces c=d. Shrinking width proves uniqueness, not existence.",
        "criteria": [
          "Proves each bₙ bounds every left endpoint using both index cases.",
          "Identifies completeness as the source of c.",
          "Derives aₙ≤c≤bₙ for every n.",
          "Uses widths tending to zero only for uniqueness."
        ]
      },
      "transition": "indicate",
      "focus": ["line-chosen"],
      "scene": [
        "scene \"A narrow finite bracket is not the infinite conclusion\";",
        "domain 1.68 1.77;",
        "range -0.18 0.14;",
        "param a = 1.71875 from 1.7 to 1.725;",
        "param b = 1.734375 from 1.733 to 1.75;",
        "fn f(x) = x^2-3;",
        "fn zero(x) = 0;",
        "measure bracket_width = b-a;",
        "plot f color blue as residual_curve;",
        "plot zero color amber as axis_curve;",
        "point lower = (a,f(a)) color rose;",
        "point upper = (b,f(b)) color teal;",
        "segment chosen from (a,0) to (b,0) color violet;"
      ]
    },
    {
      "title": "Change the target and the ambient field",
      "body": "Change the target to x²=2 and start from the current bracket [5/4,3/2]. Run the same finite midpoint test, then audit which infinite statement depends on the ambient ordered field.",
      "question": "Classify the midpoint 1.375 and give the next bracket. Then identify the exact sentence in the ℝ proof that becomes false when every interval is interpreted inside ℚ.",
      "checkpoint": {
        "hint": "Write 1.375 as 11/8, compute its residual exactly, and distinguish finite rational arithmetic from the existence of a rational supremum.",
        "explanation": "The midpoint is 11/8 and (11/8)²−2=121/64−128/64=−7/64<0. Hence it has the lower endpoint role, while 3/2 remains an upper bound, so the next bracket is [11/8,3/2]. Every finite midpoint, endpoint classification, nesting statement, and width calculation remains valid in ℚ. The failed sentence is ‘define c=sup{aₙ} in the ambient field’, equivalently the nested-interval existence assertion. A common rational point would have square 2, but no rational does. Finite bisection therefore survives while the completeness-based infinite conclusion fails.",
        "criteria": [
          "Computes the changed residual as −7/64.",
          "Retains [11/8,3/2] with the correct endpoint roles.",
          "Lists the finite statements that remain valid over the rationals.",
          "Locates the failure at rational supremum or nested-interval existence."
        ]
      },
      "transition": "camera",
      "focus": ["curve-residual_curve", "point-lower", "point-upper", "line-chosen"],
      "scene": [
        "scene \"The same finite construction for square root two\";",
        "domain 1 2;",
        "range -1.2 2.2;",
        "param a = 1.25 from 1 to 1.4;",
        "param b = 1.5 from 1.42 to 2;",
        "fn f(x) = x^2-2;",
        "fn zero(x) = 0;",
        "measure bracket_width = b-a;",
        "plot f color blue as residual_curve;",
        "plot zero color amber as axis_curve;",
        "point lower = (a,f(a)) color rose;",
        "point upper = (b,f(b)) color teal;",
        "segment chosen from (a,0) to (b,0) color violet;"
      ]
    }
  ]
}
```

```exercise
{"id":"analysis-completeness-bisection","type":"written","prompt":"Let A={x∈ℝ:x≥0 and x²<2}. Start with a non-upper bound ℓ₀=0 and upper bound u₀=2. Bisect as in the interval-to-supremum proof. State and prove the endpoint invariant, give the interval width and midpoint error after n bisections, and identify exactly where completeness enters. Do not assume √2 exists at the start.","hints":["At each step classify the midpoint as an upper bound or not; this classification preserves the invariant by definition.","Nested closed intervals need a common real point. Width control alone does not supply one."],"rubric":["States that each left endpoint is not an upper bound and each right endpoint is an upper bound","Shows the midpoint choice preserves both endpoint properties and nesting","Computes width 2^(1−n) and midpoint error at most 2^(−n) relative to the common point","Uses the nested-interval property or supremum axiom to obtain the real point","Explains why no prior assumption of √2 is needed"],"solution":"The initial left endpoint 0 is not an upper bound because 1∈A; 2 is an upper bound because any x≥2 has x²≥4>2. At each step, if the midpoint bounds A, retain it as the right endpoint; otherwise retain it as the left endpoint. Thus the interval nests and the endpoint invariant persists. After n bisections its width is 2/2^n=2^(1−n). Completeness, through the nested-interval theorem, supplies a common real point s. Since s lies in each interval, its distance from each midpoint is at most half the interval width, 2^(−n). The workshop's explicit inequality argument then proves s²=2, so the notation √2 is justified only afterward.","transfer":"Repeat the same rational-endpoint bisection while treating A as a subset of ℚ and demanding a common point in ℚ. Which finite-stage statements remain valid, and which infinite-stage conclusion fails?","transferSolution":"Every finite midpoint remains rational; the endpoint classification, nesting, and width formula all remain valid. The infinite-stage claim that the intervals have a common rational point fails. Their unique common point in ℝ has square 2, which no rational number can have, so ℚ lacks the required completeness property."}
```

```exercise
{"id":"analysis-completeness-cube-bisection","type":"written","prompt":"Let C={x∈ℝ:x≥0 and x³<2}. Starting from [1,2], construct rational bisection brackets for its boundary. Prove the endpoint invariant and shrinking-width formula, use completeness to obtain a real c, and prove c³=2 without invoking continuity. Then repeat the finite construction in ℚ and prove precisely why its infinite conclusion fails.","hints":["For c³<2, expand (c+h)³ and choose h≤1 from an explicit residual budget; for c³>2, compare (c−h)³ with c³−3c²h.","If p³=2q³ in lowest terms, parity forces both p and q to be even."],"rubric":["Maintains a non-upper rational left endpoint and a rational upper right endpoint","Proves nesting and width 2^(−n) after n bisections","Uses completeness, not finite width alone, to obtain c in every bracket and verifies c=sup C","Gives explicit perturbation inequalities ruling out c³<2 and c³>2","Proves cube root two is irrational and identifies the failed rational completeness step"],"solution":"Initially 1 belongs to C and is not an upper bound because (5/4)³<2, while 2 bounds C. For m=(a_n+b_n)/2, retain [m,b_n] if m is not an upper bound and [a_n,m] otherwise. Rational endpoints remain rational, the endpoint roles persist by construction, the brackets nest, and their width is 2^(−n). Completeness supplies a unique common real c. It is the supremum of C: if x∈C had x>c, a bracket narrower than x−c would have b_n<x, contradicting that b_n bounds C; if an upper bound M<c existed, a bracket narrower than c−M would have a_n>M, contradicting that a_n is not an upper bound. If c³<2, choose 0<h<min(1,(2−c³)/(3c²+3c+1)); then (c+h)³≤c³+h(3c²+3c+1)<2, contradicting that c bounds C. If c³>2, choose 0<h<min(c/2,(c³−2)/(3c²)); then (c−h)³=c³−3c²h+3ch²−h³>2, making c−h a smaller upper bound. Hence c³=2. Over ℚ every finite statement remains valid. If c=p/q in lowest terms satisfied c³=2, then p³=2q³ makes p even; writing p=2r gives q³=4r³, so q is even too, a contradiction. Thus the rational brackets have no common rational point: the failed step is existence of the supremum/common point in ℚ."}
```

```exercise
{"id":"analysis-supremum-boundary","type":"choice","prompt":"A nonempty bounded subset A of ℝ has supremum s. Which conclusion always holds?","options":[{"label":"For each ε>0, some a∈A satisfies s−ε<a≤s.","correct":true,"feedback":"This is the approximation property of the least upper bound."},{"label":"The number s belongs to A.","correct":false,"feedback":"Open intervals have suprema without maximum elements."},{"label":"One a∈A satisfies s−ε<a for every ε>0.","correct":false,"feedback":"That would force a=s and need not hold; the witness may depend on ε."}],"hints":["Ask what would happen if s−ε were itself an upper bound."]}
```

```exercise
{"id":"analysis-supremum-proof","type":"written","prompt":"Let A,B be nonempty bounded subsets of ℝ. Prove sup(A+B)=sup A+sup B, where A+B={a+b:a∈A,b∈B}. Do not assume either supremum is attained.","hints":["The sum of the two suprema is an upper bound.","Use ε/2 to find one element from each set near its supremum."],"rubric":["Shows the proposed value is an upper bound","Uses supremum approximation separately in A and B","Constructs a sum within arbitrary ε of the proposed bound","Does not assume a maximum exists"],"solution":"Write α=sup A and β=sup B. For any a∈A,b∈B, a+b≤α+β, so α+β is an upper bound. Given ε>0, choose a∈A with a>α−ε/2 and b∈B with b>β−ε/2. Then a+b>α+β−ε. No smaller number can bound A+B, so its supremum is α+β."}
```
