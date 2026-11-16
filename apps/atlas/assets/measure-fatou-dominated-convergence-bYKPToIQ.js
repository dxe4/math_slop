var e=`---
id: deep-dive-measure-fatou-dominated-convergence
title: "Fatou and dominated convergence"
license: CC BY-SA 4.0
---

# Fatou and dominated convergence

A sequence of functions may tend to zero at every input while each function keeps total integral one. Pointwise limits describe fixed locations; an integral also records mass that can concentrate or move away. Fatou's lemma gives a one-sided limit inequality for nonnegative functions. Dominated convergence gives equality of limiting integrals when a single integrable envelope controls the sequence.

This **Years 2–3 (L3)** orientation assumes [Sigma-algebras and measures](/articles/measure-sigma-algebras-measures/) and the distinction between pointwise and uniform convergence from [Uniform Convergence](/books/proof-safe-real-analysis/uniform-convergence/). We state the integral input explicitly, derive the two limit principles from it, and examine their hypotheses. [Why Measure?](/books/measure-and-integration/why-measure/) opens the primary book route; its later integral-construction chapters remain to be written. The retained [measure-convergence reading](/books/proof-safe-real-analysis/measure-convergence-theorems/) supplies a longer available continuation.

## The integral input and the meaning of almost everywhere

Work on a measure space $(X,\\Sigma,\\mu)$. All functions in the statements below are measurable: for every real threshold t, the set of inputs where the function exceeds t belongs to the specified sigma-algebra. For nonnegative functions, their Lebesgue integral is allowed to be infinite. An integrable real function has finite integral of its absolute value, so its ordinary signed integral is a finite number.

We use the elementary order and linearity properties of the integral, and this named input:

**Monotone convergence theorem.** If $0\\le h_k\\le h_{k+1}$ and $h_k(x)\\to h(x)$, then $\\int h_k\\,d\\mu\\to\\int h\\,d\\mu$, with infinity allowed.

The construction of the nonnegative integral and the proof of this input belong to the full integration theory, rather than being assumed to follow from the Riemann definition. The short [Integrating by sorting heights](/articles/real-lebesgue-layer-cake/) window explains the nonnegative viewpoint at its stated later level.

“Almost everywhere” means outside a measurable set of measure zero. Integrals ignore changes on such a set. In an almost-everywhere convergence argument, we can set all functions to zero on the common exceptional measurable null set and work pointwise elsewhere. The assumptions still require measurability; the phrase does not grant arbitrary functions an integral.

## Fatou: a lower bound survives nonnegative limits

For nonnegative measurable $f_n$, Fatou's lemma states

$$\\int\\liminf_{n\\to\\infty}f_n\\,d\\mu\\le\\liminf_{n\\to\\infty}\\int f_n\\,d\\mu.$$

Here $\\liminf f_n$ is calculated pointwise. To derive the lemma, put $h_k(x)=\\inf_{n\\ge k}f_n(x)$. Countable infima of measurable functions are measurable; the tail infima increase with $k$, and their limit is $\\liminf f_n$.

For every $n\\ge k$, $h_k\\le f_n$, so order preservation gives

$$\\int h_k\\,d\\mu\\le\\inf_{n\\ge k}\\int f_n\\,d\\mu.$$

Apply monotone convergence on the left and the definition of numerical liminf on the right. This proves the displayed Fatou inequality. Nonnegativity keeps all quantities meaningful without subtracting infinities. The result does not promise the reverse inequality.

## Domination supplies the other direction

Suppose $f_n\\to f$ almost everywhere and there is one nonnegative integrable function $g$ with $|f_n|\\le g$ almost everywhere for every $n$. Taking a countable union of the exceptional null sets gives one common exceptional set. Outside it, $|f|\\le g$ too. Thus all $f_n$ and $f$ are integrable.

Apply Fatou to the nonnegative functions $g+f_n$. Since their pointwise limit is $g+f$, finite-integral linearity gives

$$\\int f\\,d\\mu\\le\\liminf_n\\int f_n\\,d\\mu.$$

Indeed, subtract the same finite quantity $\\int g$ from both sides of Fatou's inequality. Apply Fatou again to $g-f_n$ to obtain

$$\\limsup_n\\int f_n\\,d\\mu\\le\\int f\\,d\\mu.$$

The integrals are bounded in absolute value by the finite number $\\int g$, so no infinite subtraction is hidden. Liminf is always at most limsup. Both must equal $\\int f$, proving the **dominated convergence theorem**:

$$\\int f_n\\,d\\mu\\longrightarrow\\int f\\,d\\mu.$$

The envelope is one function independent of $n$, and its integral must be finite. Separate bounds for each member of the sequence are not this hypothesis.

## Worked example: powers on a finite interval

On $[0,1]$ with length measure, take $f_n(x)=x^n$. For every $x<1$, the powers tend to zero; at one they remain one. Hence $f_n\\to0$ almost everywhere. The endpoint is a singleton of length zero.

The constant envelope $g=1$ is integrable on this interval and bounds every $|f_n|$. Dominated convergence therefore gives $\\int_0^1x^n\\,dx\\to0$. The familiar exact calculation agrees:

$$\\int_0^1x^n\\,dx=\\frac1{n+1}\\longrightarrow0.$$

Uniform convergence to zero fails, because the supremum of $x^n$ is always one. The integral theorem needs its domination and almost-everywhere hypotheses, not uniform convergence. If we describe the pointwise limit as zero below one and one at one, its integral is still zero, since changing the value at that endpoint does not change the integral.

## A narrowing spike marks the missing hypothesis

On the same interval, let $s_n=n\\,\\mathbf1_{(0,1/n)}$. Every fixed positive input eventually lies outside its support, and its value at zero is always zero. Thus $s_n\\to0$ pointwise everywhere, while

$$\\int_0^1s_n\\,dx=n\\cdot\\frac1n=1.$$

The narrowing width and increasing height preserve area. Fatou permits this: its inequality reads $0\\le1$. Dominated convergence cannot be applied, and the theorem itself shows that no common integrable envelope can bound this sequence almost everywhere. If one existed, the already-proved conclusion would force the integrals to tend to zero, contradicting their exact value one.

For the longer explanation of this distinction, see [When may a limit pass through an integral?](/articles/real-dominated-convergence/). Its spike picture illustrates the failure; the hypotheses above explain it.

## Exercises

### Exercise 1
<a id="deep-dive-measure-fatou-dominated-convergence-ex-1"></a>
For $s_n$ above, compute the two sides of Fatou's inequality. Why is the bound $|s_n|\\le n$ insufficient for dominated convergence, even though each constant function $n$ is integrable on $[0,1]$?

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Separate the pointwise liminf from the liminf of the numerical integrals.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The theorem requires the same envelope for every index.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The pointwise liminf is zero, so its integral is zero. Every integral of $s_n$ equals one, so the numerical liminf is one. Fatou gives the strict inequality $0<1$. The proposed bound changes with $n$ and therefore does not supply a single integrable dominating function. Individual integrability of each bound does not replace that requirement.
</details>

### Exercise 2
<a id="deep-dive-measure-fatou-dominated-convergence-ex-2"></a>
On $[0,\\infty)$ with length measure, let $f_n=\\mathbf1_{[n,n+1)}$ for positive integers $n$. Show that $f_n\\to0$ pointwise and $|f_n|\\le1$, yet their integrals do not tend to zero. Identify the missing domination condition.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
For a fixed input, only finitely many of these moving intervals can contain it.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Check the integral of the common bound on the whole, unbounded measure space.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
A fixed input eventually lies below the moving interval, so the pointwise limit is zero. Each interval has length one and hence $\\int f_n=1$. Although one is a common pointwise bound, it has infinite integral on $[0,\\infty)$ and is not an integrable envelope. No other integrable envelope can dominate all the functions: outside a countable union of exceptional null sets it would have to be at least one on $[1,\\infty)$, again giving infinite integral. A uniform numerical height bound suffices only with appropriate finite-measure control, which is absent here.
</details>

## Continue into the book

Fatou preserves a nonnegative lower-limit inequality. A single integrable envelope allows Fatou to be used on both sides and gives dominated convergence. Neither pointwise convergence nor bounded heights alone supplies that envelope. Start the primary route at [Why Measure?](/books/measure-and-integration/why-measure/) and use the retained [Measure Convergence Theorems chapter](/books/proof-safe-real-analysis/measure-convergence-theorems/) for further available development.
`;export{e as default};