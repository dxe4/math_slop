# Functions and mathematical models {#sec-functions}

Calculus begins before any limit is taken. It begins when we decide which quantities vary, which are held fixed, and how one quantity depends on another. A formula is one representation of that dependence, but tables, graphs, verbal rules, and algorithms can define functions too. In this chapter we develop the habits that make later calculus meaningful: attend to domains, units, scale, and assumptions.

## Functions as relationships

A **function** $f$ from a domain $D$ to a codomain $C$ assigns each input $x\in D$ exactly one output $f(x)\in C$. The range is the set of outputs actually attained. “Exactly one” does not mean that different inputs must have different outputs; $f(x)=x^2$ sends both $2$ and $-2$ to $4$.

The domain is mathematical information, not fine print. The rule $A(r)=\pi r^2$ is algebraically meaningful for negative $r$, but a model of the area of a physical disk uses $r\geq 0$. The rule $P(t)=120e^{0.03t}$ has units of organisms if $t$ is measured in years; the exponent $0.03t$ must be dimensionless, so $0.03$ has units per year.

Representations answer different questions. A formula supports symbolic transformation, a table displays measured values, and a graph reveals shape. A verbal description preserves context that may be lost in notation. Strong modeling moves among all four.

<div class="callout callout-note">
<p class="callout-title">Definition: average rate of change</p>

For $a\ne b$, the average rate of change of $f$ on $[a,b]$ is
$$
\frac{f(b)-f(a)}{b-a}.
$$
It is the slope of the secant line and has output-units per input-unit.

</div>

**Worked example.** A reservoir contains $V(t)=600-18t+0.6t^2$ cubic metres after $t$ hours, for $0\leq t\leq 10$. From hour $2$ to hour $5$, the average rate is
$$
\frac{V(5)-V(2)}{5-2}=\frac{525-566.4}{3}=-13.8
$$
cubic metres per hour. The negative sign says volume decreased; it does not mean that a negative amount of water exists.

## Families and transformations

Several families recur throughout calculus. Polynomials are defined everywhere and are locally smooth. Rational functions can have holes or vertical asymptotes where their denominators vanish. Exponential functions turn equal input increments into equal multiplicative factors. Logarithms invert exponentials and convert multiplication into addition. Trigonometric functions model periodicity, while inverse trigonometric functions recover angles on restricted domains.

Starting from $y=f(x)$, the graph of $y=A f(B(x-h))+k$ is shifted by $(h,k)$, scaled vertically by $A$, and scaled horizontally by a factor $1/|B|$; negative factors reflect it. Read transformations from the inside outward but verify with anchor points. For example, $g(x)=2\sin(3x)-1$ has amplitude $2$, midline $-1$, and period $2\pi/3$.

A piecewise rule is still one function if it assigns one value at each permitted input. Piecewise models are essential when policies, forces, or costs change regime. An implicit equation such as $x^2+y^2=25$ describes a relation rather than a global function $y=f(x)$, though each semicircle can be written as a function.

## Composition and inverse

The composition $(f\circ g)(x)=f(g(x))$ represents a pipeline: first $g$, then $f$. Its domain contains only inputs for which $g(x)$ is defined and lands in the domain of $f$. If $g(t)$ converts time to temperature and $f(T)$ converts temperature to reaction rate, then $f(g(t))$ gives rate over time.

A function has an inverse on a domain precisely when it is one-to-one there. Restricting $x^2$ to $[0,\infty)$ produces the inverse $\sqrt{x}$. Inverse notation is easy to misuse: $f^{-1}(x)$ means the inverse function, not $1/f(x)$.

## Modeling as a cycle

A useful model is not simply a formula that fits a few points. Use this cycle:

1. identify a question and quantities, including units;
2. state assumptions and choose a family of relationships;
3. estimate parameters from data or physical laws;
4. calculate predictions and compare them with observations;
5. revise the assumptions or restrict the model's domain.

**Worked example: linear or exponential?** Suppose a culture has populations $200$, $242$, and $293$ at equally spaced times. Differences are $42$ and $51$, not constant, while ratios are approximately $1.21$ in both intervals. An exponential model $P(t)=200(1.21)^t$ is plausible. It predicts $P(3)\approx354$. This is an inference, not a law: nutrient limits will eventually undermine unbounded growth.

Dimensional analysis catches mistakes before arithmetic does. In the drag model $F=cv^2$, if force has units $ML/T^2$ and velocity has units $L/T$, then $c$ must have units $M/L$. Adding $v$ to $v^2$ would be meaningless unless coefficients supply compatible dimensions.

Nondimensionalization reveals governing ratios. If $t$ is compared with a characteristic time $T$, write $\tau=t/T$. Then behavior described in $\tau$ can apply across systems of different absolute duration.

<div class="callout callout-warning">
<p class="callout-title">Common pitfalls</p>

- A graphing window can hide zeros, oscillations, or asymptotes.
- A fitted formula outside the observed interval is an extrapolation, not a guaranteed prediction.
- Cancelling a factor may change the domain: $(x^2-1)/(x-1)=x+1$ only for $x\ne1$.
- Correlation between variables does not by itself establish causal dependence.

</div>

## Chapter laboratory: comparing growth

Compare $L(t)=1+0.7t$, $E(t)=e^{0.35t}$, and $Q(t)=1+0.4t+0.1t^2$. Near $t=0$, all begin at $1$, but their slopes and curvatures differ. Determine when each pair first crosses, if it does, and explain which measurements would distinguish the models. This laboratory anticipates derivatives: the initial slope and changing slope carry local signatures of each family.

## Visual checkpoint: one rule as a family of representations

<figure id="fig-calc-functions-family-map">
<img src="figures/foundation-function-families.png" alt="Coordinated plots of linear, quadratic, exponential, and reciprocal function families showing how parameter changes alter shape.">

<figcaption>

Figure 1.1: Several function families are compared through graphs and parameter changes.

</figcaption>
</figure>

[Figure 1.1](#fig-calc-functions-family-map) makes a function family visible, but each
curve still represents a rule with a domain and units. Use the graph to predict;
use the formula and data context to decide whether the model is meaningful.

<!-- inline-formula-code:start -->
## Formula and finite computation

A useful formula in this chapter is

$$
f(x)=x^3-3x
$$

The formula becomes a finite table before Plotnine maps columns to visual roles. The following standalone Python block expresses that finite rule with its inputs and stopping conditions visible.

```python
import numpy as np
import pandas as pd
from plotnine import aes, geom_line, ggplot, labs, theme_minimal

x = np.linspace(-2.0, 2.0, 401)
data = pd.DataFrame({"x": x, "f": x**3 - 3.0 * x})
plot = (
    ggplot(data, aes("x", "f"))
    + geom_line(color="#0072B2")
    + labs(title="f(x) = x³ − 3x", x="x", y="f(x)")
    + theme_minimal()
)
print(data.iloc[[0, 200, 400]])
```

**What the computation establishes.** The calculation checks a declared finite instance; the surrounding argument explains what is true beyond those inputs.
<!-- inline-formula-code:end -->

## Summary

A function couples a domain to a unique output for every permitted input. Models require units and assumptions, not only algebra. Average rate of change compares net output change with input change. Transformations, composition, and inversion organize complicated dependencies from simpler ones. The central modeling discipline is to interpret and test every result in context.

## Exercises

<div class="exercise" id="calculus-01-functions-models-ex-1">
<p class="exercise-title"><strong>Exercise 1</strong></p>

State the natural domain and units of $C(q)=1200+4.50q$ when $q$ is a number of manufactured items. Interpret its average rate from $q=100$ to $q=160$.

</div>

<div class="exercise" id="calculus-01-functions-models-ex-2">
<p class="exercise-title"><strong>Exercise 2</strong></p>

Describe the transformations from $y=\sqrt{x}$ to $y=-3\sqrt{x-2}+4$, and verify two anchor points.

</div>

<div class="exercise" id="calculus-01-functions-models-ex-3">
<p class="exercise-title"><strong>Exercise 3</strong></p>

Find the inverse of $f(x)=(2x-3)/(x+4)$ and state the excluded values in both domains.

</div>

<div class="exercise" id="calculus-01-functions-models-ex-4">
<p class="exercise-title"><strong>Exercise 4</strong></p>

A quantity rises by $8$ units each month. Another rises by $8\%$ each month. Write models with common initial value $50$ and compare after twelve months.

</div>

<div class="exercise" id="calculus-01-functions-models-ex-5">
<p class="exercise-title"><strong>Exercise 5</strong></p>

Explain why $\sqrt{x^2}=x$ is not an identity on all real numbers. Supply the correct statement.

</div>

<div class="exercise" id="calculus-01-functions-models-ex-6">
<p class="exercise-title"><strong>Exercise 6</strong></p>

**Challenge.** Use unit reasoning to infer the units of $G$ in $F=Gm_1m_2/r^2$.

</div>

<div class="exercise" id="calculus-01-functions-models-ex-7">
<p class="exercise-title"><strong>Exercise 7</strong></p>

**Project.** Find a small time series, compare a linear and exponential model, describe residual patterns, and name one reason neither model should be extrapolated indefinitely.

</div>
