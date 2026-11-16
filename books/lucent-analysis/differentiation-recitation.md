# Recitation D. Choosing a derivative theorem

**Role:** guided recitation after [differentiation](differentiation.md). Work each decision before reading the resolution. The same symbol \(f'\) can invite several different questions: does the derivative exist, does it force a global change, must it attain an intermediate slope, or does it control an approximation error? The needed hypotheses differ.

## Case 1: a zero slope that a picture does not supply

Consider \(u(x)=x^2-2x\) on \([0,2]\). Its endpoint values agree. The values inside the interval are smaller, so the minimum occurs in the interior. The Rolle proof guarantees a point with zero derivative; direct calculation finds \(u'(x)=2x-2\), hence \(c=1\). Both routes agree, but the theorem route explains why some such point must exist before the formula is solved.

For a sharper trap, set \(w(0)=w(1)=0\) and \(w(x)=x+1\) for \(0<x<1\). Then \(w(0)=w(1)\) and the interior derivative is always \(1\), but \(w\) is discontinuous at both endpoints. A proof that checks only endpoint equality and an interior derivative formula misses precisely the closed-interval continuity requirement.

**Decision to make:** For a new function, list the domain, closed-interval continuity, open-interval differentiability, and endpoint relation before invoking Rolle. If only a bound \(|f'|\le M\) is known, the MVT estimate gives a global change bound without locating the exact \(c\).

## Case 2: an apparent jump in slope

Suppose measurements suggest slopes near \(-1\) on one side of zero and near \(1\) on the other. There are two logically different models. The corner \(|x|\) has no derivative at zero; Darboux makes no claim across the missing point. The function \(q(x)=x^2\sin(1/x)\) for \(x\ne0\), with \(q(0)=0\), has a derivative at every point and an oscillating derivative near zero. Its derivative is discontinuous, yet the intermediate slopes occur. To reject a proposed differentiable function whose derivative takes only \(-1\) and \(1\), apply Darboux to points with opposite values. Do not apply IVT directly to the derivative unless its continuity has been separately established.

Try this decision on a claim that \(f'\) takes the value \(0\) at \(-1\), value \(4\) at \(1\), and never takes \(2\). The point where \(f'=2\) is not found by calculation; its existence follows from the derivative's intermediate value property on \((-1,1)\).

## Case 3: the polynomial is not the error certificate

At \(x=1/4\), approximate \(r(x)=1/(1+x)\) by \(1-x\). The exact identity

\[
\frac1{1+x}-(1-x)=\frac{x^2}{1+x}
\]

shows an error of \(1/20\). Taylor's theorem with \(n=1\) also gives a valid bound: \(r''(t)=2/(1+t)^3\), so \(|r''(t)|\le2\) on \([0,1/4]\) and \(|R_1|\le(1/4)^2=1/16\). The bound is weaker but follows from a reusable derivative criterion. If a target accuracy were \(1/100\), neither calculation licenses the degree-one approximation. An error claim must name the interval on which the derivative bound holds.

**Recitation check:** State which evidence settles each claim: an endpoint relation, a derivative sign, an intermediate-slope theorem, or a remainder bound. The tasks below record your decision and ask you to revise it after seeing the rubric.

```exercise
{"id":"analysis-diff-recitation-choice","type":"choice","prompt":"A function is differentiable on an open interval and \\(f'(-1)=0\\), \\(f'(1)=4\\). Which theorem guarantees a point with derivative 2 without assuming \\(f'\\) is continuous?","options":[{"label":"The Intermediate Value Theorem applied directly to f'.","correct":false,"feedback":"Continuity of f' has not been given."},{"label":"Darboux's theorem applied to the derivative of f.","correct":true,"feedback":"Yes. Every derivative has the intermediate value property."},{"label":"Rolle's theorem applied to f.","correct":false,"feedback":"The endpoint values of f have not been specified."}],"hints":["Ask which theorem has the derivative's intermediate value property as its conclusion."],"solution":"Darboux's theorem uses differentiability of \\(f\\) on an interval and the values \\(f'(-1)=0\\), \\(f'(1)=4\\). Since 2 is between them, it supplies \\(c\\in(-1,1)\\) with \\(f'(c)=2\\). IVT cannot be applied directly to \\(f'\\) without continuity, and Rolle lacks equal endpoint values for \\(f\\)."}
```

```exercise
{"id":"analysis-diff-recitation-repair","type":"written","prompt":"The function \\(w(0)=w(1)=0\\), \\(w(x)=x+1\\) for \\(0<x<1\\), has equal endpoint values and derivative 1 in the interior. Write a two-sentence repair to the false claim that Rolle must give a zero derivative. Then give one continuous replacement on \\([0,1]\\) for which Rolle does apply.","hints":["Inspect limits of w as x approaches the endpoints from inside.","A nonconstant polynomial with equal endpoint values will work."],"rubric":["Identifies failure of continuity on the closed interval","Computes or states the relevant one-sided endpoint limits","Gives a continuous differentiable replacement with equal endpoint values","Locates or justifies an interior zero derivative for the replacement"],"solution":"As \\(x\\downarrow0\\), \\(w(x)\\to1\\ne w(0)=0\\), and as \\(x\\uparrow1\\), \\(w(x)\\to2\\ne w(1)=0\\); hence the closed-interval continuity hypothesis fails. Take \\(v(x)=x(1-x)\\). It is continuous on \\([0,1]\\), differentiable on \\((0,1)\\), and \\(v(0)=v(1)=0\\), so Rolle applies; indeed \\(v'(1/2)=0\\)."}
```
