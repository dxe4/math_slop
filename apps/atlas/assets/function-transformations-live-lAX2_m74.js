var e=`---
id: visual-lab-function-transformations
title: "Function Transformation Observatory"
level: secondary
estimated_minutes: 120
license: CC BY-SA 4.0
---

# Function Transformation Observatory

This live Canvas instrument studies one template:

$f(x)=a\\cdot g(x-h)+k$.

Choose a parent function $g$, change the parameters, and compare the graph with an exact feature statement and numerical table. Nothing moves by itself. The point is to predict, test, and explain—not to watch animation.

The four parent families are:

| Family | Parent $g(x)$ | Defining feature |
|---|---|---|
| Quadratic | $x^{2}$ | smooth vertex, symmetric axis |
| Absolute value | $|x|$ | corner and two linear rays |
| Reciprocal | $1/x$ | excluded input and two branches |
| Exponential | $2^{x}$ | positive multiplicative growth |

## 1. Read the transformation in computational order

At input $x$, the instrument performs:

1. subtract $h$;
2. evaluate the parent rule $g$;
3. multiply the output by $a$;
4. add $k$.

For a quadratic with $a=2,h=3,k=-1$, input 5 gives

$2(5-3)^{2}-1=2\\cdot 4-1=7$.

The graph’s vertex is $(3,-1)$. Horizontal shifts feel backward because $x-h$ reaches the parent anchor 0 when $x=h$. Use this anchor test instead of relying on memory.

The multiplier $a$ scales vertical distances from $y=k$. If $|a|>1$, the graph looks vertically stretched; if $0<|a|<1$, compressed. A negative $a$ reflects parent outputs before the vertical shift. The value $a=0$ is allowed deliberately: it collapses most families to a constant and exposes which domain restrictions were inherited from the written rule.

## 2. First experiment: watch two roots merge

Choose **Quadratic** and set $a=1,h=2,k=-4$. Predict roots from

$(x-2)^{2}-4=0$.

The square must equal 4, so $x=0$ or $4$. The coral markers and table should agree.

Now raise $k$ toward 0 while leaving $a,h$ fixed:

- at $k<0$, $-k/a>0$: two roots $h\\pm \\sqrt{-k/a}$;
- at $k=0$: one double root at $h$;
- at $k>0$, $-k/a<0$: no real root.

This transition is often hidden by symbol manipulation. The exact root equation and the graph say the same thing: an upward bowl cuts, touches, or misses the axis according to the vertex height.

Reverse $a$ to a negative value and repeat. Now the bowl opens down, and real roots require $k\\ge 0$. A rule such as “negative k means two roots” is false without considering the sign of $a$; the invariant test is $-k/a$.

### Checkpoint

Set $a=0$. The instrument reports a constant range $\\{k\\}$ and no distinguished axis of symmetry. If also $k=0$, every real input is a root. This case is not quadratic, so a formula that divides by $a$ does not apply.

## 3. Second experiment: square versus absolute distance

Choose **Absolute value**, $a=2,h=1,k=-6$. The root equation is

$2|x-1|-6=0$, so $|x-1|=3$.

The roots are three units from 1: −2 and 4. Do not take $\\sqrt{3}$. The distance itself equals 3; square roots belong to the quadratic family.

Compare the quadratic with the same parameters. There the equation is $(x-1)^{2}=3$, giving $1\\pm \\sqrt{3}$. The two graphs share symmetry and a central feature but have different local shapes and root laws.

Use the probe at inputs equally spaced around $h$. In both families, outputs at $h-d$ and $h+d$ match. That table symmetry is an algebraic invariant:

$|-d|=|d|$ and $(-d)^{2}=d^{2}$.

## 4. Third experiment: hole or vertical asymptote?

Choose **Reciprocal**, $a=2,h=1,k=-2$. The rule is

$f(x)=2/(x-1)-2$.

Input 1 is excluded. For nonzero $a$, values grow without bound near it, so $x=1$ is a vertical asymptote. The horizontal asymptote is $y=-2$, because $2/(x-1)$ approaches zero as $|x|$ grows.

The root satisfies

$2/(x-1)=2$,

so $x=2$. More generally, for nonzero $a,k$, the root is $h-a/k$. When $k=0$, no finite input is a root: the graph approaches the x-axis but never reaches it.

Now set $a=0$ while keeping $h=1,k=-2$. The written rule is

$0/(x-1)-2$.

It is still undefined at $x=1$, but equals −2 everywhere else. Values no longer become unbounded, so the vertical asymptote has become a **hole** in a constant line. Probe $x=1$; the table says “undefined.” Probe nearby values; they say −2. This boundary experiment prevents the false shortcut “denominator zero always means vertical asymptote.”

The horizontal feature remains the line $y=k$, which the allowed points now occupy exactly. The original domain is part of the function even when cancellation-like simplification changes its appearance.

## 5. Fourth experiment: an exponential root

Choose **Exponential**, $a=1,h=0,k=-2$. Then

$2^{x}-2=0$,

so the root is 1. Raise $k$ to 1. The equation would require $2^{x}=-1$, impossible because every real base-2 power is positive. The graph remains above its horizontal asymptote $y=1$.

In general, for nonzero $a$,

$a\\cdot 2^{x-h}+k=0$

has a root only when $-k/a>0$, and then

$x=h+log_{2}(-k/a)$.

There can be at most one root because the exponential is strictly monotone; multiplying by a negative number reverses monotonic direction but does not create repeated outputs.

Move $h$ by 1. Because the input is an exponent, a horizontal shift also changes which $x$ reaches each output. The anchor at $x=h$ has value $a+k$ because $2^{0}=1$.

## 6. Visual marks and their text equivalents

The Canvas uses redundant encodings:

- cyan solid curve: sampled function rule;
- coral dots: finite real roots;
- gold dashed lines: asymptotes;
- gold probe point and coral dashed probe line: chosen input/output;
- numeric feature list: domain, range, roots, vertex/corner/anchor, and asymptotes;
- data table: exact evaluations near the probe and $h$.

Colour is never the only carrier: dots, solid/dashed line styles, text labels, and table rows repeat the information.

If Canvas 2D is unavailable, controls and all exact text/table outputs remain. The graph is evidence and orientation; the table and formulas are the nonvisual experimental route.

Keyboard use: focus the Canvas, use left/right arrows for probe steps of 0.1, add Shift for steps of 1, Home for zero, and R to reset. Native sliders also accept arrow, Page Up/Down, Home, and End according to browser behavior. There is no autoplay or animated interpolation, so the full experiment is available with reduced-motion preferences.

## 7. The sampling algorithm

The displayed curve is generated from the same evaluator as the table:

\`\`\`text
procedure draw_function(model, x_min, x_max, number_of_samples):
    drawing_segment := false
    for j from 0 through number_of_samples:
        x := x_min + j/number_of_samples · (x_max − x_min)
        y := evaluate(model, x)
        if y is undefined, outside the padded window, or jumps across most of the view:
            drawing_segment := false
        else if drawing_segment is false:
            move drawing pen to (x,y)
            drawing_segment := true
        else:
            draw line to (x,y)
\`\`\`

The discontinuity guard matters. A naïve polyline may join a large negative value just left of a reciprocal pole to a large positive value just right of it, drawing a false vertical stroke. Restarting the segment after undefined or a huge jump prevents that visual lie.

With $N$ samples, rendering uses time proportional to $N$ and stores constant state beyond the browser’s path representation. Root formulas and feature classification take constant time for these four families. Sampling cannot prove a root or asymptote: it may miss a feature between samples. The exact analysis is therefore computed separately.

## 8. Derive every root rule

Complete the table without looking, then check it in the instrument:

| Family | Root equation | Existence condition | Root(s) |
|---|---|---|---|
| $a(x-h)^{2}+k$ | $(x-h)^{2}=-k/a$ | $a\\ne 0$, $-k/a\\ge 0$ | $h\\pm \\sqrt{-k/a}$; merge when zero |
| $a|x-h|+k$ | $|x-h|=-k/a$ | $a\\ne 0$, $-k/a\\ge 0$ | $h\\pm (-k/a)$; merge when zero |
| $a/(x-h)+k$ | $a/(x-h)=-k$ | $a\\ne 0$, $k\\ne 0$ | $h-a/k$ |
| $a2^{x-h}+k$ | $2^{x-h}=-k/a$ | $a\\ne 0$, $-k/a>0$ | $h+log_{2}(-k/a)$ |

For the $\\pm$ rows, when the distance is zero the two expressions denote the same single root. Then audit $a=0$ separately; division by $a$ has hidden that boundary.

## 9. Challenge experiments

1. Make a quadratic with vertex $(-2,3)$ and no real roots. Give two possible values of $a$ and explain which orientations work.
2. Make an absolute-value graph with roots −5 and 1 and corner output −3. Determine $h$ and one possible $a$.
3. Make a reciprocal graph with vertical asymptote 2, horizontal asymptote 4, and root 1. Solve for $a$.
4. Make an exponential with horizontal asymptote −3, anchor $(2,1)$, and identify its root.
5. Find two different families and parameter states that agree at the probe inputs −1,0,1 as closely as possible. Explain why three sampled values do not establish equal functions.
6. For each family, predict the range when $a>0$, $a<0$, and $a=0$.

## Solutions

1. Set $h=-2,k=3$. An upward quadratic ($a>0$) has minimum 3 and no roots; for example $a=1$ or 4. A negative $a$ opens downward and eventually crosses the axis, so it has two roots.
2. The roots’ midpoint is $h=(-5+1)/2=-2$, and their distance from the corner is 3. With $k=-3$, root condition $|x+2|=-k/a=3$ gives $a=1$.
3. Set $h=2,k=4$. Root formula $1=2-a/4$ gives $a=4$. The rule is $4/(x-2)+4$.
4. Set $h=2,k=-3$. Anchor output is $a+k=1$, so $a=4$. Root solves $4\\cdot 2^{x-2}=3$, hence $x=2+log_{2}(3/4)\\approx 1.585$.
5. Many approximations are possible. Agreement at finitely many inputs is evidence only at those inputs; different families have different global shape, domains, or asymptotes.
6. Quadratic and absolute ranges are $[k,\\infty )$ for $a>0$, $(-\\infty ,k]$ for $a<0$, and $\\{k\\}$ for zero. Reciprocal range is all real outputs except $k$ when $a\\ne 0$, and $\\{k\\}$ when zero (with one domain hole). Exponential range is $(k,\\infty )$ for positive $a$, $(-\\infty ,k)$ for negative $a$, and $\\{k\\}$ for zero.

## Field report

Save or share four states, one per family. For each record the formula, domain, range, root calculation, invariant feature, and one parameter boundary where the family changes character. Include at least one state where the visual intuition could mislead—an off-screen root, a hole rather than a pole, or a constant degeneration. A strong report explains why the mathematical feature exists, not merely where the Canvas drew it.
`;export{e as default};