# 7. Uniform continuity and extension from dense sets

## Purpose and prerequisites

You should distinguish two orders of quantifiers, prove a uniform continuity estimate, use compactness to obtain one tolerance for a whole domain, and extend a function uniquely from a dense set. You will also see why ordinary continuity can fail to preserve Cauchy sequences. This chapter uses [completeness](completeness.md), [compactness](topology.md), and [the sequential criterion for function limits](limits-continuity.md).

## The point that a tolerance may depend on

Continuity of \(f:D\to\mathbb R\) says
\[
\forall a\in D\ \forall\varepsilon>0\ \exists\delta>0\ \forall x\in D:
|x-a|<\delta\Longrightarrow |f(x)-f(a)|<\varepsilon.
\]
The choice of \(\delta\) can depend on both \(a\) and \(\varepsilon\).

The function is **uniformly continuous** on \(D\) if
\[
\forall\varepsilon>0\ \exists\delta>0\ \forall x,y\in D:
|x-y|<\delta\Longrightarrow |f(x)-f(y)|<\varepsilon.
\]
Here \(\delta\) may depend on \(\varepsilon\) and \(D\), but it must work simultaneously for all pairs of points. Uniform continuity therefore implies continuity.

For example, if \(|f(x)-f(y)|\leq L|x-y|\) on \(D\) for a finite \(L\geq0\), \(f\) is called **Lipschitz**. When \(L>0\), choose \(\delta=\varepsilon/L\); when \(L=0\), the function is constant and any positive \(\delta\) works. Thus every Lipschitz function is uniformly continuous.

These are properties of a function **on a specified domain**. A formula can
behave differently after its domain changes. We will test the square,
square-root, and reciprocal functions, separating a local continuity claim
from a tolerance that works simultaneously everywhere.

## A tolerance game: who chooses what, and when?

Think of the uniform definition as an order of choices. An examiner chooses an
output tolerance \(\varepsilon>0\). You must then choose **one** input tolerance
\(\delta>0\). Only afterwards does the examiner choose the two inputs anywhere
in \(D\). Your choice wins if every legal pair closer than \(\delta\) has output
gap below \(\varepsilon\). In ordinary continuity, the center is announced
before your choice of \(\delta\). Moving it afterwards changes the problem.

To refute uniform continuity, you need a strategy that defeats **every**
positive \(\delta\), using **one fixed** positive \(\varepsilon_0\):
\[
\exists\varepsilon_0>0\ \forall\delta>0\ \exists x,y\in D:
|x-y|<\delta\quad\text{and}\quad |f(x)-f(y)|\geq\varepsilon_0.
\]
The strict input inequality matters. Choosing points exactly \(\delta\) apart
does not refute an implication whose premise is \(|x-y|<\delta\).

In the argument below, write a prediction before opening each diagram.
The hint is optional. After exploring, compare the model reasoning with your
draft and revise it; ticking a criterion records your own judgment, not a
machine-checked proof. Each diagram can also be changed by editing its source.

```visual-story
{
  "id": "uniform-tolerance-game",
  "title": "Can one tolerance work everywhere?",
  "prompt": "Keep track of the input gap, the output gap, and the order in which the choices are made. A finite diagram suggests a strategy; your inequalities must establish it.",
  "stages": [
    {
      "title": "Move the pair, keep its spacing",
      "body": "For the square function, start with inputs a and a + 0.1. Predict what moving the pair to the right will do to the output gap. The amber segment records the input gap; the violet segment records the output gap.",
      "question": "With h = 0.1 fixed, does changing a change the output gap? Derive an expression before exploring. Does a large gap for this one h already refute uniform continuity?",
      "checkpoint": {
        "hint": "Expand (a+h)²−a². Then read the universal quantifier over delta in the negated definition.",
        "explanation": "The gap is \\(2ah+h^2\\), so at h = 0.1 it is \\(0.2a+0.01\\). It grows with a even though the input spacing stays fixed. This one spacing does **not** refute uniform continuity: perhaps a smaller delta would work. We must construct a violating pair for every proposed delta, with one output threshold held fixed.",
        "criteria": ["Computes 2ah + h², including the h² term.", "Distinguishes one failed spacing from failure for every proposed tolerance."]
      },
      "transition": "none",
      "focus": ["line-input_gap", "line-output_gap"],
      "scene": [
        "scene \"A fixed spacing at a moving center\"; domain 0 4; range -0.6 17;",
        "param a=0.5 from 0.2 to 3.5; let h=0.1; let b=a+h;",
        "fn f(x)=x^2; plot f color blue;",
        "point first=(a,f(a)) color blue; point second=(b,f(b)) color violet;",
        "segment input_gap from (a,-0.3) to (b,-0.3) color amber;",
        "segment output_gap from (b,f(a)) to (b,f(b)) color violet;",
        "measure input_distance=h; measure output_distance=f(b)-f(a);"
      ]
    },
    {
      "title": "Let the center escape",
      "body": "Now shrink h and move the center to a = 1/h. The frame changes: the horizontal axis is displacement t from a, and the vertical axis is f(a+t)−f(a). This keeps the two gaps visible even while a escapes beyond any fixed screen.",
      "question": "As h tends to zero, does the output gap tend to zero? Compute it exactly. Why does the translated frame show the same mathematical failure as the original parabola?",
      "checkpoint": {
        "hint": "Substitute a = 1/h into 2ah+h²; do not estimate a and h separately.",
        "explanation": "The input gap is h and the output gap is \\(2(1/h)h+h^2=2+h^2\\), which tends to 2. Translation subtracts the same a from both input coordinates and the same f(a) from both output coordinates, so both distances are unchanged. The plotted residual is evaluated as \\(2at+t^2\\) to avoid subtracting two large nearly equal squares. Finite floating-point values illustrate the identity; the identity proves the limiting claim.",
        "criteria": ["Shows h → 0 while the output gap stays at least 2.", "Explains why translating coordinates preserves both gaps."]
      },
      "transition": "camera",
      "focus": ["line-input_gap", "line-output_gap", "point-second"],
      "scene": [
        "scene \"Displacement from the moving center\"; domain -0.02 0.55; range -0.3 2.6;",
        "param h=0.2 from 0.02 to 0.5; let a=1/h;",
        "fn residual(x)=2*a*x+x^2; plot residual color blue;",
        "point first=(0,0) color blue; point second=(h,residual(h)) color violet;",
        "segment input_gap from (0,-0.15) to (h,-0.15) color amber;",
        "segment output_gap from (h,0) to (h,residual(h)) color violet;",
        "measure center=a; measure input_distance=h; measure output_distance=residual(h);",
        "# Horizontal: displacement t from a. Vertical: change f(a+t)-f(a)."
      ]
    },
    {
      "title": "Defeat any proposed delta",
      "body": "The examiner fixes epsilon = 1. You can change the proposed delta; the construction responds with h = delta/2, a = 1/h, and b = a+h. Decide whether this is a legal strategy for every positive delta, beyond the range of the slider.",
      "question": "Give the full quantified refutation. Which choices depend on delta, which must not, and where do you obtain the strict inequality in the input gap?",
      "checkpoint": {
        "hint": "Begin: Fix epsilon₀ = 1. Let delta > 0 be arbitrary. Then check both inequalities for the constructed pair.",
        "explanation": "Fix \\(\\varepsilon_0=1\\). For any \\(\\delta>0\\), set \\(h=\\delta/2\\), \\(a=1/h\\), and \\(b=a+h\\). Both points belong to the real line, \\(|b-a|=h<\\delta\\), and \\(|b^2-a^2|=2+h^2\\geq2>1\\). The points may depend on delta; epsilon₀ does not. This works algebraically for every positive delta. The limited slider is an illustration of the strategy, not a restriction on the proof.",
        "criteria": ["Fixes one positive epsilon before considering delta.", "Constructs legal inputs with distance strictly below delta.", "Proves a fixed lower bound for the output gap for every delta."]
      },
      "transition": "indicate",
      "focus": ["line-output_gap", "line-input_gap"],
      "scene": [
        "scene \"A response to every proposed tolerance\"; domain -0.02 0.55; range -0.3 2.6;",
        "param d=0.1 from 0.01 to 1; let h=d/2; let a=1/h;",
        "fn residual(x)=2*a*x+x^2; plot residual color blue;",
        "point first=(0,0) color blue; point second=(h,residual(h)) color violet;",
        "segment input_gap from (0,-0.15) to (h,-0.15) color amber;",
        "segment output_gap from (h,0) to (h,residual(h)) color violet;",
        "measure proposed_delta=d; measure input_distance=h; measure output_distance=residual(h);",
        "# Horizontal: t, displacement from a. Vertical: f(a+t)-f(a). Epsilon is fixed at 1."
      ]
    },
    {
      "title": "Repair the domain",
      "body": "Restrict the square function to [−M,M]. The scene shows a difficult pair near M. Try to design one tolerance from epsilon and M before revealing the diagram; it must handle negative inputs and all other pairs as well.",
      "question": "Find a delta that works for every pair in [−M,M]. Why is checking the displayed pair alone insufficient, and why may your delta depend on M?",
      "checkpoint": {
        "hint": "Factor x²−y², and bound |x+y| using membership in the specified domain.",
        "explanation": "For all x,y in [−M,M], \\(|x^2-y^2|=|x-y||x+y|\\leq2M|x-y|\\). With M > 0, choose \\(\\delta=\\varepsilon/(2M)\\). Then \\(|x-y|<\\delta\\) implies an output gap strictly below epsilon. M describes the domain fixed before the tolerance is chosen, so this dependence is allowed. The plot checks one pair; the domain-wide estimate handles every pair, including pairs of different signs. As M grows without bound this sufficient delta shrinks, consistent with the earlier counterexample.",
        "criteria": ["Bounds |x+y| for all pairs, not only those drawn.", "Chooses delta from epsilon and the fixed domain, independently of x and y."]
      },
      "transition": "camera",
      "focus": ["line-output_gap", "point-second"],
      "scene": [
        "scene \"A bounded domain supplies one tolerance\"; domain -4.2 4.2; range -1 18;",
        "param M=2 from 1 to 4; param eps=0.5 from 0.1 to 1;",
        "let d=eps/(2*M); let a=M-d/2; let b=M;",
        "fn f(x)=x^2; plot f color blue;",
        "point first=(a,f(a)) color blue; point second=(b,f(b)) color violet;",
        "segment input_gap from (a,-0.5) to (b,-0.5) color amber;",
        "segment output_gap from (b,f(a)) to (b,f(b)) color violet;",
        "measure common_delta=d; measure output_distance=f(b)-f(a); measure output_tolerance=eps;",
        "# The full parabola is context; the proof concerns only inputs in [-M,M]. The displayed pair has spacing delta/2."
      ]
    },
    {
      "title": "Allow steepness, keep a modulus",
      "body": "Change the function to square root on [0, infinity). The secant from zero becomes very steep. Test whether this rules out uniform continuity, or only a stronger property. The control fraction keeps the input gap strictly below the candidate delta.",
      "question": "Can square root be uniformly continuous without any global Lipschitz constant? Give a tolerance for all pairs and a separate argument about the secant from zero.",
      "checkpoint": {
        "hint": "For x ≥ y ≥ 0, compare (√x−√y)² with x−y. For Lipschitz continuity, set y = 0.",
        "explanation": "For x ≥ y, \\(x-y=(\\sqrt{x}-\\sqrt{y})(\\sqrt{x}+\\sqrt{y})\\geq(\\sqrt{x}-\\sqrt{y})^2\\); interchange x,y for the other case. Thus \\(|\\sqrt{x}-\\sqrt{y}|\\leq\\sqrt{|x-y|}\\), and \\(\\delta=\\varepsilon^2\\) works everywhere. But the secant slope from 0 to h is \\(1/\\sqrt{h}\\), unbounded as h decreases to zero. This disproves the existence of a finite Lipschitz constant. An unbounded derivative or secant slope alone does not refute uniform continuity.",
        "criteria": ["Proves the square-root estimate for arbitrary nonnegative inputs.", "Uses delta = epsilon² and distinguishes it from a linear Lipschitz estimate.", "Shows why slopes from zero have no finite common bound."]
      },
      "transition": "camera",
      "focus": ["curve-f", "line-chord", "point-second"],
      "scene": [
        "scene \"A nonlinear modulus still works\"; domain -0.05 1.1; range -0.2 1.2;",
        "param eps=0.5 from 0.1 to 1; param fraction=0.8 from 0.1 to 0.99;",
        "let d=eps^2; let h=fraction*d; fn f(x)=sqrt(x); plot f color blue;",
        "point first=(0,0) color blue; point second=(h,f(h)) color violet;",
        "segment chord from (0,0) to (h,f(h)) color teal;",
        "segment input_gap from (0,-0.1) to (h,-0.1) color amber;",
        "segment output_gap from (h,0) to (h,f(h)) color violet;",
        "measure common_delta=d; measure input_distance=h; measure output_distance=f(h); measure secant_slope=1/sqrt(h);"
      ]
    },
    {
      "title": "Find a different failure mechanism",
      "body": "For 1/x on (0,1), the problematic pairs approach a missing endpoint instead of escaping to infinity. Use x = 1/n and y = 1/(n+1), with n at least 2. The narrow spacing may become hard to see; use the readouts and then an exact calculation.",
      "question": "Show that the reciprocal function fails uniform continuity using these pairs. If instead the domain is [c,infinity) for fixed c > 0, can you repair the claim? Give an explicit delta.",
      "checkpoint": {
        "hint": "Compute both differences by subtracting fractions. On [c,infinity), bound the product xy from below.",
        "explanation": "On (0,1), the input gap is \\(1/(n(n+1))\\to0\\) and the output gap is exactly 1. Fix epsilon₀ = 1/2; for any delta > 0 take an integer \\(n>\\max(1,1/\\sqrt{\\delta})\\). This is a violating pair. On [c,infinity), \\(|1/x-1/y|=|x-y|/(xy)\\leq|x-y|/c^2\\), so \\(\\delta=\\varepsilon c^2\\) works. The repair is a positive distance from the singularity, even though the repaired domain is unbounded.",
        "criteria": ["Keeps both reciprocal inputs in (0,1) and proves a vanishing gap.", "Uses an output threshold independent of n or delta.", "Derives a common tolerance on [c,infinity) rather than invoking compactness there."]
      },
      "transition": "camera",
      "focus": ["line-output_gap", "point-first", "point-second"],
      "scene": [
        "scene \"Paired inputs approach a missing endpoint\"; domain 0 1; range -1 26;",
        "param n=4 from 2 to 24; let left=1/(n+1); let right=1/n;",
        "fn f(x)=1/x; plot f color blue;",
        "point first=(left,f(left)) color blue; point second=(right,f(right)) color violet;",
        "segment input_gap from (left,-0.5) to (right,-0.5) color amber;",
        "segment output_gap from (right,f(right)) to (right,f(left)) color violet;",
        "measure input_distance=right-left; measure output_distance=f(left)-f(right);",
        "# Zero is outside the domain. Integer n supplies the proof sequence."
      ]
    }
  ]
}
```

## From a successful strategy to a modulus

A useful way to record uniform control is an estimate
\[
|f(x)-f(y)|\leq\omega(|x-y|),\qquad \omega(t)\longrightarrow0
\quad\text{as }t\downarrow0.
\]
Here a **modulus of continuity** is a nonnegative, nondecreasing function
\(\omega\), with \(\omega(0)=0\) and that right-hand limit. The estimate must
hold for all inputs in the stated domain. Given \(\varepsilon\), choose
\(\delta\) so that \(0\leq t<\delta\) implies \(\omega(t)<\varepsilon\).
This turns one global estimate into every tolerance required by the definition.

| Function and domain | A valid modulus | A sufficient delta | What the domain contributes |
| --- | --- | --- | --- |
| Square on [−M,M], M > 0 | 2Mt | ε/(2M) | A bound for the sum of the inputs |
| Square root on [0,∞) | √t | ε² | Nonnegative inputs, not a finite upper bound |
| Reciprocal on [c,∞), c > 0 | t/c² | εc² | A positive lower bound for their product |

**Worked transfer: composition.** Suppose \(f:D\to E\) has modulus
\(\omega_f\), and \(g:E\to\mathbb R\) has modulus \(\omega_g\). Monotonicity
of \(\omega_g\) gives
\[
|g(f(x))-g(f(y))|\leq\omega_g(|f(x)-f(y)|)
\leq\omega_g(\omega_f(|x-y|)).
\]
Both moduli tend to zero at zero, so their composition does too. For example,
\(g(u)=\sqrt u\) on nonnegative inputs and \(f(x)=|x|\) on the real line give
the global estimate \(|\sqrt{|x|}-\sqrt{|y|}|\leq\sqrt{|x-y|}\).
The intermediate range matters: composing with \(1/u\) requires separate
control if the inner values approach zero.

**A tempting false rule.** Products of uniformly continuous functions need
not be uniformly continuous on an unbounded domain: multiply the identity by
itself on the real line. A correct rule includes boundedness. If \(|f|\leq A\)
and \(|g|\leq B\), then
\[
|f(x)g(x)-f(y)g(y)|
\leq A|g(x)-g(y)|+B|f(x)-f(y)|.
\]
Choose tolerances making the two terms less than \(\varepsilon/2\) (a zero
bound means the corresponding function is identically zero), then take the
smaller input tolerance. This proof shows precisely where boundedness enters.

## Compactness gives a common tolerance

**Theorem 7.1 (Heine–Cantor).** If \(K\subseteq\mathbb R\) is compact and \(f:K\to\mathbb R\) is continuous, then \(f\) is uniformly continuous on \(K\).

**Proof.** Suppose uniform continuity fails. Negating the definition gives \(\varepsilon_0>0\) such that, for every \(\delta>0\), there are \(x,y\in K\) with \(|x-y|<\delta\) but \(|f(x)-f(y)|\geq\varepsilon_0\). For \(\delta=1/n\), choose \(x_n,y_n\) with those properties.

Compactness supplies a subsequence \(x_{n_k}\to c\in K\). The triangle inequality gives
\[
|y_{n_k}-c|\leq|y_{n_k}-x_{n_k}|+|x_{n_k}-c|\to0,
\]
so \(y_{n_k}\to c\) as well. Continuity at \(c\) implies both \(f(x_{n_k})\) and \(f(y_{n_k})\) tend to \(f(c)\). Their difference therefore tends to zero, contradicting its lower bound \(\varepsilon_0\). \(\square\)

Notice that the proof selects a subsequence of the paired inputs; both members retain the same indices. Extracting unrelated subsequences would lose the estimate connecting the pairs. Compactness is sufficient, not necessary: f(x) = x is uniformly continuous on ℝ.

## Detecting failure with paired sequences

**Sequential test.** A function \(f:D\to\mathbb R\) is uniformly continuous exactly when every two sequences \(x_n,y_n\in D\) satisfying \(|x_n-y_n|\to0\) also satisfy \(|f(x_n)-f(y_n)|\to0\).

In the forward direction, use the common \(\delta\) for a given \(\varepsilon\), then wait until all pairs have input distance below it. Conversely, if uniform continuity fails, negating its quantifiers gives one \(\varepsilon_0>0\) such that for every \(n\) there are \(x_n,y_n\in D\) with \(|x_n-y_n|<1/n\) and \(|f(x_n)-f(y_n)|\geq\varepsilon_0\). Those sequences violate the proposed criterion. Notice that neither individual sequence must converge. For \(x^2\) on \(\mathbb R\), both sequences escape to infinity; requiring a common limit would miss the failure.

This test is often the shortest way to refute uniform continuity. It is not enough to find one pair of nearby inputs with distinct outputs: the pair must be available at arbitrarily small input scales while the output gap stays above one fixed positive threshold.

**Recover the earlier strategy as sequences.** For the square function on the
real line, take \(x_n=n\) and \(y_n=n+1/n\). Their input gap is \(1/n\to0\),
but \(|x_n^2-y_n^2|=2+1/n^2\). This is the visual game's choice \(a=1/h\)
specialized to \(h=1/n\). The sequential and quantified proofs express the
same obstruction in different forms.

## Preserving Cauchy sequences

If f is uniformly continuous and (xₙ) is Cauchy in D, then (f(xₙ)) is Cauchy in ℝ. Given ε > 0, take the common δ from uniform continuity. The Cauchy property gives N such that m, n ≥ N imply |xₘ − xₙ| < δ; hence |f(xₘ) − f(xₙ)| < ε.

Ordinary continuity does not suffice. The sequence xₙ = 1/(n + 1) is Cauchy in (0, 1), but under the continuous function f(x) = 1/x its image is n + 1, which is not Cauchy. The missing endpoint allows the outputs to become unbounded. This example also proves that f is not uniformly continuous on (0, 1).

## The extension theorem

Let \(D\subseteq\mathbb R\) and let \(f:D\to\mathbb R\) be uniformly continuous. Write \(\overline D\) for the closure of \(D\). We can define a unique continuous function \(F:\overline D\to\mathbb R\) with \(F|_D=f\). In fact \(F\) is uniformly continuous.

**Construction.** For \(z\in\overline D\), choose a sequence \(x_n\in D\) with \(x_n\to z\). Such a sequence exists by the definition of closure. It is Cauchy. The preceding result makes \(f(x_n)\) Cauchy, and completeness of \(\mathbb R\) supplies its limit. Define
\[
F(z)=\lim_{n\to\infty}f(x_n).
\]
This definition must be independent of the chosen sequence. If \(y_n\to z\) is another sequence from \(D\), then \(|x_n-y_n|\leq|x_n-z|+|y_n-z|\to0\). The paired-sequence criterion makes \(f(x_n)-f(y_n)\to0\), so the two limits agree. For \(z\in D\), the constant sequence \(x_n=z\) gives \(F(z)=f(z)\).

**Uniform continuity of \(F\).** Given \(\varepsilon>0\), take a \(\delta>0\) from uniform continuity of \(f\) for error \(\varepsilon/2\). Suppose \(z,w\in\overline D\) and \(|z-w|<\delta/3\). Choose \(x,y\in D\) close enough to \(z,w\) that \(|x-z|,|y-w|<\delta/3\) and also \(|f(x)-F(z)|,|f(y)-F(w)|<\varepsilon/4\). The construction of \(F\) permits both requirements. Then \(|x-y|<\delta\), and
\[
|F(z)-F(w)|\leq |F(z)-f(x)|+|f(x)-f(y)|+|f(y)-F(w)|<\varepsilon.
\]
Thus \(F\) is uniformly continuous. If \(G\) is any continuous extension, take \(x_n\in D\) with \(x_n\to z\): continuity gives \(G(z)=\lim G(x_n)=\lim f(x_n)=F(z)\), proving uniqueness. The proof uses three distinct hypotheses: uniform continuity for Cauchy images and paired sequences, completeness for an output limit, and density of \(D\) in its closure for approximation.

**Worked example.** Set \(D=\mathbb Q\cap[0,1]\) and \(f(q)=q^2\). For \(p,q\in D\), \(|p^2-q^2|=|p-q||p+q|\leq2|p-q|\). Hence \(f\) is uniformly continuous, and the theorem gives a unique extension to \([0,1]\). If \(q_n\to x\), the same factorisation shows \(q_n^2\to x^2\), so \(F(x)=x^2\).

**A missing point that cannot be filled.** Let \(D=\mathbb Q\cap[1,2]\) and define \(h(q)=0\) if \(q^2<2\), \(h(q)=1\) if \(q^2>2\). No rational satisfies \(q^2=2\). Rational sequences approaching \(\sqrt2\) from either side have image limits \(0\) and \(1\). Therefore no continuous extension to \([1,2]\) exists, and the extension theorem shows \(h\) cannot be uniformly continuous on \(D\). This is a boundary obstruction even though the missing point lies in the middle of the interval.

On a bounded subset \(D\subseteq\mathbb R\), uniform continuity also forces bounded output. Divide a closed interval containing \(D\) into finitely many pieces shorter than the uniform \(\delta\) for \(\varepsilon=1\). Choose one point from each piece that meets \(D\). Every \(x\in D\) lies within \(\delta\) of one of these finitely many representatives, so \(|f(x)|\) is less than \(1\) plus one of finitely many numbers. This argument uses finite coverage of a bounded interval; on unbounded \(\mathbb R\), the identity function is uniformly continuous and unbounded.

## Write the experiment yourself

The following program makes the reciprocal repair executable. `param` names a
quantity you choose; `let` names a quantity calculated from those choices;
`measure` displays a result. The source calls the input tolerance `d`.
Changing epsilon or c recomputes the candidate
tolerance, both points, and the output gap together. You can use the source
editor in the figure to change the model and export the resulting experiment.

```mathviz
scene "Build a uniform tolerance for the reciprocal";
domain 0.1 4; range -0.2 5;
param c=0.5 from 0.25 to 1;
param eps=0.5 from 0.1 to 1;
param position=2 from 1 to 3;
let d=eps*c^2;
let first_input=c*position;
let second_input=first_input+d/2;
fn f(x)=1/x;
plot f color blue;
point first=(first_input,f(first_input)) color blue;
point second=(second_input,f(second_input)) color violet;
segment output_gap from (second_input,f(second_input)) to (second_input,f(first_input)) color violet;
measure common_delta=d;
measure input_distance=second_input-first_input;
measure output_distance=abs(f(second_input)-f(first_input));
measure output_tolerance=eps;
# The proof concerns [c,infinity); the drawing shows only a finite part. Each pair is delta/2 apart.
```

**Authoring task.** Replace the function by \(f(x)=1/x^2\), retaining the domain
\([c,\infty)\). Derive a safe input tolerance `d` before changing its definition in the
source. Explain why changing only the plotted function would leave an
unjustified tolerance claim. Test the nearest permitted input, then a more
distant one. Your proof must also handle inputs beyond the displayed region.

<details><summary>A hint for the changed model</summary>

Factor \(x^2-y^2\) and write \((x+y)/(x^2y^2)\) as a sum of two fractions.
This avoids assuming a bound on x+y over an unbounded domain.

</details>

<details><summary>Derivation and source change</summary>

For x,y ≥ c,
\[
\left|\frac1{x^2}-\frac1{y^2}\right|
=|x-y|\left(\frac1{xy^2}+\frac1{x^2y}\right)
\leq\frac2{c^3}|x-y|.
\]
Change the two source lines to `fn f(x)=1/x^2;` and
`let d=eps*c^3/2;`. The new bound is independent of the pair's position.
Both input declarations and all measurements refer to those definitions, so
they update consistently. A taller range may help show the graph near small
c, but changing the viewing window has no effect on the proof.

</details>

## Proof clinic: preserving a quantitative estimate under extension

The extension theorem constructs values by taking limits; it can preserve a
useful inequality too. Suppose
\(|f(x)-f(y)|\leq L|x-y|\) on D. For z,w in its closure choose xₙ → z and
yₙ → w from D. The construction gives f(xₙ) → F(z) and f(yₙ) → F(w). Passing
to the limit in the **nonstrict** inequality yields
\[
|F(z)-F(w)|\leq L|z-w|.
\]
The same Lipschitz constant works on the closure. For a general continuous
modulus \(\omega\), exactly this argument gives
\(|F(z)-F(w)|\leq\omega(|z-w|)\). Continuity of the modulus at the relevant
distance justifies the right-hand limit; it should not be silently assumed for
an arbitrary bounding function.

Why not pass to the limit in a strict epsilon inequality and keep the strict
sign? Because numbers strictly smaller than epsilon can converge to epsilon.
This is why the earlier extension proof spends smaller error budgets before
taking limits or adding approximation errors. State the conclusion you need,
then leave enough room in the intermediate estimates to obtain it.

## Exercises

1. Prove that sin is uniformly continuous on ℝ, using the identity for a difference of sines and |sin t| ≤ |t|.
2. Prove that √x is uniformly continuous on [0, ∞), but is not Lipschitz there.
3. Give a direct pair-of-sequences proof that 1/x is not uniformly continuous on (0, 1).
4. Is every uniformly continuous function bounded? Give a justification.

<details><summary>Hints</summary>

1. Bound the cosine factor by 1. 2. Establish |√x − √y| ≤ √|x − y|, then compare x with zero. 3. Use 1/(n + 1) and 1/(n + 2). 4. Test the identity function on ℝ.

</details>

<details><summary>Solutions</summary>

1. The difference identity gives |sin x − sin y| ≤ 2|(x − y)/2| = |x − y|. Choose δ = ε.
2. For x ≥ y, (√x − √y)² ≤ x − y. Symmetry gives the stated estimate; δ = ε² works. A Lipschitz constant L would require √x ≤ Lx for every positive x, impossible as x approaches zero.
3. The input gap is 1/((n + 1)(n + 2)), tending to zero, while the output gap is exactly 1. This contradicts the uniform definition with ε = 1/2.
4. No. The function f(x) = x is Lipschitz with constant 1 on ℝ and is unbounded.

</details>

## Independent extension problems

```exercise
{"id":"analysis-uniform-sequence-test","type":"written","prompt":"Prove that sin(1/x) is not uniformly continuous on (0,1). Give two explicit sequences of legal inputs whose distance tends to zero while their output gap does not.","hints":["Choose inputs whose reciprocals differ by π and make sin equal 1 and −1.","For n≥1, consider reciprocals π/2+2πn and 3π/2+2πn."],"rubric":["Defines both sequences within (0,1) for n≥1","Shows their input distance tends to zero","Computes sine outputs 1 and −1","Invokes the paired-sequence criterion with a fixed output gap"],"solution":"Set xₙ=1/(π/2+2πn), yₙ=1/(3π/2+2πn), n≥1. Both lie in (0,1) and tend to zero, hence |xₙ−yₙ|→0. But sin(1/xₙ)=1 and sin(1/yₙ)=−1, so the output gap is 2 for every n. This violates the sequential criterion for uniform continuity. It also shows no continuous extension at zero exists."}
```

```exercise
{"id":"analysis-extension-unique","type":"written","prompt":"Let D=(0,1) without the point 1/2, and f(x)=x/(1+x) on D. Prove a uniform modulus, identify the unique extension to [0,1], and explain why continuity merely at each point of D would not by itself justify the extension.","hints":["Subtract the two fractions before estimating.","The missing input 1/2 and the endpoints are all approached by sequences from D."],"rubric":["Derives |f(x)−f(y)|=|x−y|/((1+x)(1+y))≤|x−y|","Chooses δ=ε for a uniform modulus","Gives F(x)=x/(1+x) on [0,1] and proves agreement or uniqueness","Explains that ordinary continuity need not control values near missing boundary points"],"solution":"For x,y∈D, |x/(1+x)−y/(1+y)|=|x−y|/((1+x)(1+y))≤|x−y|. Thus δ=ε works. The extension theorem gives a unique continuous extension to the closure [0,1]; direct limits identify it as F(x)=x/(1+x) at every point. Pointwise continuity on D would allow values to oscillate or diverge near 0, 1/2, or 1, so it is not enough for this conclusion."}
```

```exercise
{"id":"analysis-extension-false-proof","type":"written","prompt":"A student defines h(x)=−1 for x<0 and h(x)=1 for x>0 on D=(−1,0)∪(0,1), then argues h is continuous at every point of D and therefore has a continuous extension to [−1,1]. Repair the reasoning and identify the failed assumption.","hints":["Test a pair of inputs on opposite sides of the missing point.","Apply the extension theorem in its stated direction."],"rubric":["Acknowledges continuity at each point of D","Uses xₙ=−1/n and yₙ=1/n, with n≥2, or equivalent","Computes an output gap of 2 despite vanishing input gap","Concludes h is not uniformly continuous and no continuous extension at zero exists"],"solution":"The function is locally constant and hence continuous at every point of D. For n≥2 take xₙ=−1/n and yₙ=1/n. Their distance 2/n tends to zero, but |h(xₙ)−h(yₙ)|=2. So h is not uniformly continuous and fails the extension theorem's hypothesis. Any proposed value at zero would have to equal both one-sided limits −1 and 1, impossible."}
```

**Later retrieval.** On the next problem set, prove the extension theorem's well-definedness again using *interleaved* approximating sequences rather than paired terms. Check which part of completeness is being used.

## Transfer and proof repair

Try these without reopening the visual argument. The first changes the
logical claim, the second changes a boundary, and the third asks for a
partial converse. Save a first proof before opening the hints.

First, check two common mistakes. Choose the reasoning you would accept;
the feedback explains the specific logical issue in each alternative.

```exercise
{"id":"analysis-uniform-quantifier-diagnostic","type":"choice","prompt":"A proposed refutation uses |xₙ−yₙ|=1/n and |f(xₙ)−f(yₙ)|=1/√n. It declares epsilonₙ=1/(2√n), so every pair has output gap above epsilonₙ. Does this refute uniform continuity?","options":[{"label":"Yes: the input gap tends to zero and each output gap exceeds a positive tolerance.","correct":false,"feedback":"The tolerance changes with n and tends to zero. Failure requires one positive epsilon₀ that defeats every sufficiently small input scale; a changing positive threshold is insufficient."},{"label":"No: these output gaps tend to zero, so they do not violate the paired-sequence criterion.","correct":true,"feedback":"Correct. The same pairs satisfy the conclusion required by uniform continuity. This does not prove the function is uniformly continuous either: the criterion concerns every pair of sequences."},{"label":"No refutation is possible unless both input sequences converge to a point inside the domain.","correct":false,"feedback":"The paired-sequence criterion requires their mutual distance to vanish, not convergence of either sequence. For the square function the witnessing sequences escape to infinity."}],"hints":["Read the order of choices in the negated uniform definition. Does its output tolerance vary with the pair?"]}
```

```exercise
{"id":"analysis-unbounded-slope-diagnostic","type":"choice","prompt":"A student sees increasingly steep secants for √x near zero and concludes it is not uniformly continuous on [0,∞). Which response repairs the argument?","options":[{"label":"The student is right: every uniformly continuous function has a bounded derivative.","correct":false,"feedback":"Uniform continuity does not require a linear error bound. Square root has the nonlinear modulus √t and the common tolerance delta=epsilon², despite unbounded secant slopes near zero."},{"label":"The slopes disprove Lipschitz continuity; the estimate |√x−√y|≤√|x−y| still proves uniform continuity.","correct":true,"feedback":"Correct. Unbounded ratios of output gap to input gap rule out one finite Lipschitz constant. Uniform continuity only asks that output gaps become small when input gaps become small, with any suitable dependence of delta on epsilon."},{"label":"Heine–Cantor proves uniform continuity because [0,∞) is closed.","correct":false,"feedback":"Heine–Cantor needs a compact domain, not closedness alone. This half-line is unbounded. The square-root estimate gives the needed global conclusion directly."}],"hints":["Separate a linear modulus Lt from a nonlinear modulus such as square root of t."]}
```

```exercise
{"id":"analysis-cauchy-preserving-converse","type":"written","prompt":"A student claims: if f sends every Cauchy sequence in its domain to a Cauchy sequence, then f is uniformly continuous. Refute the claim on the real line using f(x)=x². Explain why the paired-sequence test does not contradict your answer.","hints":["Every real Cauchy sequence converges to a real limit; apply continuity of the square function.","Are the sequences n and n+1/n themselves Cauchy?"],"rubric":["Uses completeness and continuity, or boundedness and factorization, to prove square preserves every Cauchy sequence","Gives close pairs n and n+1/n with output gap 2+1/n²","States that these two escaping sequences are not Cauchy","Distinguishes a Cauchy input sequence from two sequences whose mutual distance tends to zero"],"solution":"Every Cauchy sequence xₙ in ℝ converges to some a∈ℝ. Continuity gives xₙ²→a², hence the squared sequence is Cauchy. Nevertheless xₙ=n and yₙ=n+1/n have input difference 1/n and output difference 2+1/n², so square is not uniformly continuous. Neither escaping sequence is Cauchy. The paired-sequence criterion requires only their mutual distance to vanish, a condition much weaker than each sequence being Cauchy."}
```

```exercise
{"id":"analysis-extension-modulus-repair","type":"written","prompt":"Let D=ℚ∩[0,1] and suppose |f(p)−f(q)|≤3√|p−q| for all p,q∈D. Prove that f has a unique continuous extension to [0,1], prove that the same estimate holds for the extension, and give a uniform delta for epsilon. Identify the flaw in passing a strict inequality to a limit without reserving error room.","hints":["First choose delta from the given square-root bound and apply the extension theorem.","Approximate both real inputs by rational sequences with the same index."],"rubric":["Derives uniform continuity of f with delta=(epsilon/3)²","Uses density and completeness through the extension theorem","Passes to the limit in the nonstrict estimate for paired rational approximations","Explains that a sequence of numbers less than epsilon may converge to epsilon"],"solution":"Take δ=(ε/3)². If |p−q|<δ then |f(p)−f(q)|≤3√|p−q|<ε, so f is uniformly continuous. Density of D and the extension theorem give unique continuous F on [0,1]. For rational pₙ→x and qₙ→y, the inequality |f(pₙ)−f(qₙ)|≤3√|pₙ−qₙ| passes to |F(x)−F(y)|≤3√|x−y| by continuity of absolute value and square root. Thus the same δ works for F. A strict bound alone would yield only a nonstrict bound at the limit: for example ε(1−1/n)<ε tends to ε."}
```

```exercise
{"id":"analysis-bounded-cauchy-converse","type":"written","prompt":"Challenge. Let D be a bounded subset of ℝ, and suppose f:D→ℝ sends every Cauchy sequence in D to a Cauchy sequence. Prove that f is uniformly continuous. Your proof must allow the limit of an input subsequence to lie outside D.","hints":["Negate uniform continuity and choose paired inputs with distance below 1/n and one fixed positive output gap.","Extract a convergent subsequence of the first inputs by boundedness, keep the same indices for the second inputs, and interleave the two subsequences."],"rubric":["Constructs paired witnesses with one fixed positive output separation","Extracts xₙₖ→c using boundedness, without assuming c∈D","Shows yₙₖ→c and interleaves the two into a Cauchy sequence entirely in D","Uses the Cauchy image hypothesis to contradict the separation of adjacent output terms"],"solution":"If uniform continuity failed, choose ε₀>0 and xₙ,yₙ∈D with |xₙ−yₙ|<1/n and |f(xₙ)−f(yₙ)|≥ε₀. Boundedness and Bolzano–Weierstrass give xₙₖ→c∈ℝ, possibly outside D. The paired-distance estimate implies yₙₖ→c. Interleave z₂ₖ₋₁=xₙₖ and z₂ₖ=yₙₖ. Then zⱼ→c in ℝ, so (zⱼ) is a Cauchy sequence whose terms all belong to D. Its image must be Cauchy. But consecutive image terms f(xₙₖ),f(yₙₖ) remain at least ε₀ apart, a contradiction. No value f(c) is needed."}
```

**Delayed retrieval, two study sessions later.** On a blank page, draw the
implications between Lipschitz, uniformly continuous, continuous, and
Cauchy-sequence preserving. Label the ambient domain for each counterexample
you use. Then recover the bounded-domain converse above without rereading it.
