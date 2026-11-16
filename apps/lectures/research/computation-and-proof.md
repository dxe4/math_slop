# Symbolic computation and mathematical proof

Source access date: 2026-10-20.

A computer algebra system can expose a missing hypothesis, produce an exact counterexample, or reduce a parameter problem to a few cases. The educational task is to connect that result to the original mathematical statement. A useful lesson asks the learner to predict a result, specify the domain, examine the computation, and then justify a conclusion that survives a changed problem. Six original investigations below develop that practice across calculus, linear algebra and analysis.

These are optional Wolfram Language companions to complete mathematical activities. The Wolfram snippets have **not been executed here**; the expected mathematical outcomes follow from the arguments given below, independently of a particular output format. The small Python examples use only the standard library. Each investigation also has a written route requiring no software or paid license. Run Wolfram examples in a fresh kernel, record `$Version`, and retain any messages alongside the output.

## Choose a command for the mathematical question

`Reduce[statement, variables, Reals]` describes solutions with equations, inequalities and logical conditions. Its domain argument matters: an equation over the reals asks a different question from the same equation over the complexes. Put the original exclusions into the statement even when an algebraic rewrite hides them. [Wolfram Reduce documentation](https://reference.wolfram.com/language/ref/Reduce.html).

`Resolve` attempts to eliminate quantifiers. A completely quantified polynomial statement over the reals is a particularly useful classroom example because its logical structure remains visible in the input. Read a resulting truth value as an answer to that encoded statement, then check that the encoding expresses the intended theorem. [Wolfram Resolve documentation](https://reference.wolfram.com/language/ref/Resolve.html).

`FindInstance` asks for a witness satisfying a statement; use the negation of a conjecture to seek a counterexample. The documentation describes exact results for exact symbolic input, with the default `WorkingPrecision -> Infinity`; a finite precision setting can instead produce approximate solutions. Inspect the returned representation and substitute any proposed witness into the original conditions. A small numerical residual alone does not prove equality. The particular witness is not guaranteed, and an unevaluated expression or an interrupted computation does not establish nonexistence. [Wolfram FindInstance documentation](https://reference.wolfram.com/language/ref/FindInstance.html).

`Refine` and `FullSimplify` use assumptions to rewrite expressions. Their role differs from classifying every parameter case. State assumptions locally, and distinguish “this expression simplifies under these conditions” from “these conditions are all necessary and sufficient.” `Assuming` supplies `$Assumptions` to functions that consult that setting; it does not turn every subsequent operation into a universal theorem under an invisible hypothesis. [Refine](https://reference.wolfram.com/language/ref/Refine.html), [FullSimplify](https://reference.wolfram.com/language/ref/FullSimplify.html), [Assuming](https://reference.wolfram.com/language/ref/Assuming.html).

For every saved computation, keep four items together: the original question, the domain and arithmetic, the input with its output or messages, and a written interpretation. This small record makes a result reviewable after the notebook state has changed.

## 1 Exact input changes a finite difference experiment

**Predict.** For the derivative of $f(x)=x^2$ at $1$, should making a positive step smaller always improve a forward difference? First answer in exact real arithmetic, then for a calculation using ordinary machine numbers.

The exact difference quotient is

\[
D(h)=\frac{(1+h)^2-1}{h}=2+h,\qquad h\ne0.
\]

For positive $h$, its absolute error relative to $f'(1)=2$ is exactly $h$. That conclusion concerns exact arithmetic. In binary64 arithmetic, sufficiently small $h$ can disappear when added to $1$; subsequent subtraction then produces zero. Driscoll and Braun explain finite floating point spacing and the different effects of mathematically equivalent computational paths. [Floating point numbers](https://fncbook.com/floating-point/), [stability](https://fncbook.com/stability/).

```wolfram
ClearAll[h];
FullSimplify[((1 + h)^2 - 1)/h, Assumptions -> h != 0]
With[{h = 1/10^20}, ((1 + h)^2 - 1)/h]
With[{h = 10.^-20}, ((1. + h)^2 - 1.)/h]
N[1 + 1/10^20, 60]
SetPrecision[1. + 10.^-20, 60]
```

The exact second expression is $2+10^{-20}$. Compare the machine calculation with it, without treating more printed digits as restored information. Increasing a stored number's precision exposes its existing binary representation and eventually pads it; it cannot reconstruct an increment already lost. Starting from exact input and then requesting a numerical approximation is a different operation. [Wolfram SetPrecision documentation](https://reference.wolfram.com/language/ref/SetPrecision.html).

The following no-license experiment records the distinction directly:

```python
from fractions import Fraction

h = Fraction(1, 10**20)
exact = ((1 + h)**2 - 1) / h
machine = ((1.0 + float(h))**2 - 1.0) / float(h)
print(exact == 2 + h, machine, float(1 + h) == 1.0)
# True 0.0 True
```

A rational constructed from integers is exact. By contrast, `Fraction(0.1)` records the already rounded binary float; it differs from `Fraction(1, 10)` by $1/180143985094819840$. A finite binary fraction has denominator a power of two, which explains why $1/10$ cannot have an exact finite binary representation. Wolfram likewise distinguishes exact rational numbers from approximate real input. [Wolfram Rational documentation](https://reference.wolfram.com/language/ref/Rational.html).

**Explain and transfer.** For $f(x)=x^3$ at $1$, derive the exact forward quotient before running anything. It is $3+3h+h^2$. The centered quotient is $3+h^2$, so its exact truncation error is smaller for sufficiently small positive $h$. Does that prove it wins for every machine step? Explain why cancellation still needs examination. This is a useful companion to the [calculus integer input checks](../../calculus/extensions/integer-checkpoints/README.md): agreement after rounding cannot certify an exact equality or an exact integer.

## 2 A branch assumption can change a limit

**Predict.** Is $\sqrt{x^2}=x$ valid for every real $x$? What would that rewrite imply about

\[
q(x)=\frac{\sqrt{x^2}-x}{x},\qquad x\in\mathbb R\setminus\{0\}?
\]

For real $x$, the principal square root is nonnegative. Both $\sqrt{x^2}$ and $|x|$ are nonnegative numbers with square $x^2$, so they agree. Thus $q(x)=0$ when $x>0$, whereas $q(x)=-2$ when $x<0$. The one-sided limits differ; the two-sided limit at zero does not exist.

```wolfram
ClearAll[x];
Refine[Sqrt[x^2], Assumptions -> Element[x, Reals]]
Reduce[Sqrt[x^2] == x, x, Reals]
FindInstance[Sqrt[x^2] != x, x, Reals]
FullSimplify[(Sqrt[x^2] - x)/x, Assumptions -> x > 0]
FullSimplify[(Sqrt[x^2] - x)/x, Assumptions -> x < 0]
```

The equality holds exactly for $x\ge0$. Any negative real witness refutes the unrestricted claim; $x=-1$ is an independently checkable example. Choosing a positive assumption merely selects the positive half of the original question. It cannot justify discarding the negative half of a two-sided limit.

`PowerExpand` is especially instructive here: its default transformations can disregard branch issues and need not preserve values everywhere. Its assumptions option changes that behavior. Use it as an object of investigation rather than an unexplained shortcut for proving identities. [Wolfram PowerExpand documentation](https://reference.wolfram.com/language/ref/PowerExpand.html).

The complex question requires a further change of meaning. With the principal square root convention, $\sqrt{(-i)^2}=\sqrt{-1}=i\ne-i$. Consequently a real absolute value explanation does not establish the corresponding complex identity. Write which convention and domain the computation uses before interpreting it.

**Independent changed task.** Find the left and right derivatives of $g(x)=\sqrt{(x-2)^2}$ at $2$, and classify every real solution of $g(x)=x-2$. The derivatives are $-1$ and $1$; the equality holds for $x\ge2$. Explain why the formula obtained under $x>2$ cannot prove differentiability at the boundary. This extends the existing [symbolic algebra workflow](../../atlas/content/deep-dives/symbolic-algebra-forms-workflow.md) from a domain reminder into a calculus consequence.

## 3 Cancellation preserves values on a recorded domain

**Predict.** Solve the original equation

\[
\frac{x^2-1}{x-1}=2.
\]

The original domain excludes $1$. On that domain, cancellation gives $x+1=2$, whose sole candidate is $1$. The candidate is excluded, so the original equation has no solution. Nevertheless the limit of the original quotient as $x\to1$ is $2$. A solution value, a missing function value and a limit answer three different questions.

```wolfram
ClearAll[x, a];
Reduce[x != 1 && (x^2 - 1)/(x - 1) == 2, x, Reals]
Reduce[x + 1 == 2, x, Reals]
Reduce[x != a && (x^2 - a^2)/(x - a) == 2, x, Reals]
```

The last line makes the issue depend on a parameter. On $x\ne a$, the equation is $x+a=2$, giving $x=2-a$. This is admissible exactly when $2-a\ne a$, or $a\ne1$. At $a=1$, there is no solution. The complete answer needs both the formula and its parameter restriction.

A software expression may simplify before a later function receives it. Wolfram's `FunctionDomain` documentation explicitly notes that evaluation can cancel singularities and alter the represented domain. Thus asking for the domain of an already simplified expression cannot recover every restriction of the original problem. Keep the exclusion separately, as the snippets do. [Wolfram FunctionDomain documentation](https://reference.wolfram.com/language/ref/FunctionDomain.html).

**Written reconstruction.** Factor the numerator and list the forbidden inputs before any cancellation. Substitute the candidate into that list, then into the original equation if it remains admissible. This is a complete no-software solution, including the exceptional parameter.

**Independent changed task.** Classify

\[
\frac{x^2-a^2}{x-a}=b
\]

for real $a,b$. The candidate is $x=b-a$, admitted exactly when $b\ne2a$; otherwise there is no solution. Explain why the excluded case does not produce infinitely many solutions. Use a second task with numerator $(x-a)^2$ and right side zero: again the only cancelled candidate is forbidden. These comparisons fit the existing algebra workflow without adding a duplicate introduction to factoring.

## 4 An integration condition belongs to the answer

**Predict.** Does the expression $1/(a+1)$ give $\int_0^1x^a\,dx$ for every real $a\ne-1$? Try $a=-2$ before using a symbolic integrator: a positive integrand cannot have a negative integral.

At the problematic endpoint, use the improper integral definition, with $0<r<1$. For $a\ne-1$,

\[
\int_r^1x^a\,dx=\frac{1-r^{a+1}}{a+1}.
\]

When $a>-1$, $r^{a+1}\to0$, giving $1/(a+1)$. At $a=-1$, the truncated integral is $-\log r\to+\infty$. When $a<-1$, the displayed truncated expression also tends to $+\infty$. Therefore the improper integral is finite **exactly when $a>-1$**. Lebl develops improper integrals through limits of integrals on ordinary intervals; that definition supplies the needed test rather than formal endpoint substitution into an antiderivative. [Basic Analysis on improper integrals](https://jirilebl.github.io/ra/html/sec_impropriemann.html).

```wolfram
ClearAll[x, a, r];
Integrate[x^a, {x, 0, 1},
  Assumptions -> Element[a, Reals], GenerateConditions -> True]
Integrate[x^-2, {x, r, 1}, Assumptions -> 0 < r < 1]
```

Read the parameter condition with the formula. The documented `GenerateConditions` option controls whether convergence conditions are generated; suppressing them does not extend a formula to divergent cases. In particular, evaluating the rational expression $1/(a+1)$ at $a=-2$ gives $-1$, but that is not the value of this improper integral. [Wolfram Integrate documentation](https://reference.wolfram.com/language/ref/Integrate.html).

**Independent changed task.** Determine when $\int_0^1x^a\log x\,dx$ is finite, and evaluate it without assuming that differentiation under the integral sign is allowed. Integration by parts on $[r,1]$, followed by the limit, gives $-1/(a+1)^2$ for $a>-1$. The boundary term tends to zero because $r^{a+1}\log r\to0$. At $a\le-1$, the integral diverges to $-\infty$; the substitution $u=-\log x$ makes this a tail of $-u e^{-(a+1)u}$. The changed task tests an endpoint argument, not recall of the original formula.

## 5 A parameter can change rank and consistency

**Predict.** Two equations in three unknowns often have a free variable. Must they always have a solution? Consider

\[
x+y+z=1,\qquad x+a y+z=2.
\]

Subtract the first equation from the second to obtain $(a-1)y=1$. If $a\ne1$, every solution is

\[
(x,y,z)=\left(\frac{a-2}{a-1}-t,\frac1{a-1},t\right),
\qquad t\in\mathbb R.
\]

The matrix has rank $2$, and its kernel is spanned by $(-1,0,1)$. The solution set is a translate of that one-dimensional kernel. At $a=1$, the coefficient matrix has rank $1$, but the augmented matrix has rank $2$: the equations demand both $x+y+z=1$ and $x+y+z=2$. There is no solution. MIT's elimination sequence supplies a useful conceptual background: a pivot calculation should explain what the matrix says about solutions. [MIT elimination with matrices](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/ax-b-and-the-four-subspaces/elimination-with-matrices/).

```wolfram
ClearAll[x, y, z, a];
Reduce[x + y + z == 1 && x + a y + z == 2,
  {x, y, z}, Reals]
Resolve[Exists[{x, y, z},
  x + y + z == 1 && x + a y + z == 2], Reals]
FindInstance[a == 1 && x + y + z == 1 && x + a y + z == 2,
  {a, x, y, z}, Reals]
```

The existence condition is $a\ne1$. A formula involving $1/(a-1)$ signals a case to inspect; substituting the exceptional parameter into that formula is not a substitute for returning to the original system.

An exact reconstruction for selected rational inputs is available in ordinary Python:

```python
from fractions import Fraction as Q

for a in [Q(0), Q(1, 2), Q(2), Q(7, 3)]:
    for t in [Q(-2), Q(0), Q(3, 5)]:
        y, z = 1 / (a - 1), t
        x = (a - 2) / (a - 1) - t
        assert x + y + z == 1 and x + a*y + z == 2
```

Those twelve exact substitutions check the implementation of the formula on those inputs. The subtraction argument establishes the complete classification.

**Independent changed task.** Replace the second right side by $1$. If $a\ne1$, the solutions are $(1-t,0,t)$, a line. At $a=1$, the solutions form the plane $x+y+z=1$, with two free parameters. The coefficient rank drops in both investigations, but the outcomes differ because the augmented systems differ. This is a natural follow-up to the [linear maps and rank–nullity course](../../atlas/content/courses/linear-algebra-standard.md), where identifying the map and its domain makes a matrix calculation interpretable.

## 6 Quantifier order decides who chooses a tolerance

**Predict.** Each function $f_a(x)=ax$, $a>0$, is uniformly continuous on $[0,1]$. Is there one input tolerance that works for all positive slopes at a fixed output tolerance? A slider showing a finite selection of slopes cannot settle this unbounded-family question.

Let $h=|x-y|\in(0,1]$. Every such distance occurs in the interval, and the output distance is $ah$. For each fixed $a>0$ and $\varepsilon>0$, choose $\delta=\varepsilon/a$. Then $h<\delta$ implies $ah<\varepsilon$. Here $\delta$ is allowed to depend on $a$.

Compare two precisely encoded statements:

```wolfram
ClearAll[a, eps, delta, h, perFunction, wholeFamily];
perFunction = ForAll[a, a > 0,
  ForAll[eps, eps > 0,
    Exists[delta, delta > 0 &&
      ForAll[h, 0 < h <= 1 && h < delta, a h < eps]]]];
wholeFamily = ForAll[eps, eps > 0,
  Exists[delta, delta > 0 &&
    ForAll[{a, h}, a > 0 && 0 < h <= 1 && h < delta,
      a h < eps]]];
{Resolve[perFunction, Reals], Resolve[wholeFamily, Reals]}
```

Their mathematical truth values are respectively true and false. For the second, fix $\varepsilon=1/2$. Against any proposed $\delta>0$, choose $h=\min(\delta/2,1/2)$ and then $a=1/h$. The input distance is positive, at most $1$, and below $\delta$, while $ah=1>\varepsilon$. This supplies a counterexample for every attempted common tolerance.

The second statement asks for uniform equicontinuity of the family. Its failure does not contradict the uniform continuity of each member, and it is a different question from uniform convergence of a sequence. Lebl's definition of uniform continuity helps establish the original order of choices before a family parameter is added. [Basic Analysis on uniform continuity](https://jirilebl.github.io/ra/html/sec_unifcont.html).

**Independent changed task.** Restrict $0<a\le M$, with fixed $M>0$, and replace $ax$ by $ax^2$. Since $|ax^2-ay^2|=a|x-y|(x+y)\le2M|x-y|$, a common $\delta=\varepsilon/(2M)$ works. Removing the upper bound on $a$ breaks common control again: choose $x=0,y=h$, and $a=1/h^2$. This extends the [analysis investigations on exchanging limits](../../lucent/courses/analysis/11-exchanging-limits.md) with a short problem about the order of choices, rather than another animation of the same sequence.

## Use the investigations to assess reasoning

Select two investigations for a first session, then return to their changed tasks later without showing the original code. Before execution, require a prediction with its domain. After execution, ask the learner to identify a condition that the output depends on, give a written reason for it, and test an independently chosen case. Permit revisions while retaining the original prediction so the change in reasoning is visible.

A useful assessment prompt is: “Which exact statement does this computation support, and what argument connects it to the problem?” Accept equivalent mathematics expressed without the named software. Assess the domain restrictions, the treatment of exceptional cases and the proof or counterexample separately from command syntax. A learner who can reproduce a simplification but cannot explain an excluded point has not yet completed the mathematical task.

For implementation in this collection, reuse the existing notes, prediction and print conventions. Bundle the original formulas, assumptions and complete worked outcomes in the static lesson. Keep live CAS execution optional, and label a saved result as saved output. These investigations specify mathematical activities and transfer questions; their effectiveness with learners still calls for observation of learner work.
