# Problem set D. Derivatives as global evidence

**Role:** independent problem set after [the differentiation recitation](differentiation-recitation.md). Suggested total: 50 points, ten per problem. Write proofs before opening hints. A formula for a derivative is only one line of a solution; explain the interval, the theorem's hypotheses, and why your conclusion follows. Each task has a saved attempt and a separate rubric. Reattempt Problems 2 and 5 after studying integration.

## 1. A lower change bound and an inverse

Let \(p(x)=x+x^5\) on \(\mathbb R\). Prove \(|p(y)-p(x)|\ge|y-x|\) for all \(x,y\). Deduce that \(p\) has a global inverse \(g\) and that \(g\) is Lipschitz with constant \(1\). Explain separately why \(p\) is onto; a lower change bound alone does not state that every output occurs.

## 2. An invalid intermediate-value proof

A classmate writes: “\(f'(-1)=-3\) and \(f'(1)=2\). Apply IVT to \(f'\), so \(f'(c)=0\) somewhere.” Identify the unsupported step. If \(f\) is differentiable on an open interval containing \([-1,1]\), repair the conclusion with a complete argument that does not assume \(f'\) is continuous.

## 3. A derivative with no local bound

Define \(r(0)=0\) and \(r(x)=x^2\sin(1/x^2)\) for \(x\ne0\). Prove \(r'(0)=0\), calculate \(r'(x)\) for \(x\ne0\), and prove that \(r'\) is unbounded on every interval around zero. Explain why this does not contradict the Mean Value Theorem or Darboux's theorem.

## 4. A one-sided Taylor estimate

Use Taylor's theorem at zero to approximate \(\sqrt{1+x}\) by \(1+x/2\) on \([0,1/4]\). Prove a uniform numerical upper bound for the absolute error, and prove the approximation is an overestimate for each \(x>0\) in the interval. State the derivative bound and interval used. A calculator comparison alone earns no proof credit.

## 5. A false uniqueness argument

A learner says: “\(h'(0)=0\), so \(h\) cannot be one-to-one near zero.” Give a counterexample that is one-to-one on all of \(\mathbb R\). Then state a useful sufficient derivative condition for a function to be one-to-one on an interval and prove it. Explain why the condition is sufficient rather than necessary.

**Delayed transfer:** When the same function later appears as an integrand, first decide whether differentiability matters for the existence of its Riemann integral. Do not assume a derivative formula answers an integrability question.

```exercise
{"id":"analysis-diff-pset-lowerbound","type":"written","prompt":"Submit Problem 1: prove the lower change bound for \\(p(x)=x+x^5\\), global invertibility, and the inverse's Lipschitz bound.","hints":["Use \\(p'(x)=1+5x^4\\ge1\\) in MVT, and treat the order of x and y carefully.","A continuous strictly increasing polynomial whose two tails tend to opposite infinities is onto. Translate the lower bound through inverse inputs."],"rubric":["Applies MVT on the interval between arbitrary x and y","Obtains |p(y)-p(x)|≥|y-x| from the derivative lower bound","Proves strict increase and onto using continuity and tail limits","For inverse inputs u,v, proves |g(u)-g(v)|≤|u-v|"],"solution":"For \\(x<y\\), MVT gives \\(p(y)-p(x)=p'(c)(y-x)\\ge y-x>0\\), since \\(p'(c)=1+5c^4\\ge1\\). Reversing x and y gives the absolute-value inequality for all pairs. Strict increase makes p injective. As \\(x\\to\\pm\\infty\\), \\(x+x^5\\to\\pm\\infty\\); continuity and IVT make p onto \\(\\mathbb R\\). Hence its global inverse g exists. Apply the proved inequality to \\(x=g(u),y=g(v)\\): \\(|u-v|=|p(g(u))-p(g(v))|\\ge|g(u)-g(v)|\\)."}
```

```exercise
{"id":"analysis-diff-pset-ivtrepair","type":"written","prompt":"Submit Problem 2: identify the gap in applying IVT to \\(f'\\) from the two slope values, then prove the intermediate zero using only valid hypotheses.","hints":["A derivative need not be continuous; look for a theorem that supplies the intermediate value property anyway.","For a direct proof, minimize \\(f(x)\\) on \\([-1,1]\\) after subtracting the target slope times x."],"rubric":["Identifies that continuity of f' was never given","States differentiability of f on an open interval containing [-1,1]","Correctly invokes Darboux or gives the auxiliary-extremum argument","Concludes a point strictly between -1 and 1 with zero derivative"],"solution":"IVT would require \\(f'\\) continuous, which differentiability of \\(f\\) does not imply. Darboux's theorem applies because \\(f\\) is differentiable on an open interval containing \\([-1,1]\\). Since \\(-3<0<2\\), it gives \\(c\\in(-1,1)\\) with \\(f'(c)=0\\). Directly, \\(f'(-1)<0\\) gives a nearby point to the right with lower f-value, while \\(f'(1)>0\\) gives a nearby point to the left with lower f-value. EVT puts a minimum inside \\((-1,1)\\), and Fermat gives its derivative zero."}
```

```exercise
{"id":"analysis-diff-pset-unbounded","type":"written","prompt":"Submit Problem 3: prove differentiability at zero, derive the off-zero derivative, and give an explicit sequence showing the derivative is unbounded near zero.","hints":["At zero, the quotient is \\(h\\sin(1/h^2)\\).","Take \\(x_n=(2\\pi n)^{-1/2}\\), making \\(\\cos(1/x_n^2)=1\\)."],"rubric":["Uses a squeeze estimate to obtain r'(0)=0","Computes r'(x)=2x sin(1/x²)-2 cos(1/x²)/x off zero","Shows r'(x_n)=-2/x_n→-∞ for an explicit x_n→0","Explains that MVT and Darboux require neither a bounded nor continuous derivative"],"solution":"The quotient at zero is \\(r(h)/h=h\\sin(1/h^2)\\), whose absolute value is at most \\(|h|\\), so \\(r'(0)=0\\). For \\(x\\ne0\\), product and chain rules give \\(r'(x)=2x\\sin(1/x^2)-2\\cos(1/x^2)/x\\). Let \\(x_n=1/\\sqrt{2\\pi n}\\). Then \\(x_n\\to0\\), \\(\\sin(1/x_n^2)=0\\), and \\(\\cos(1/x_n^2)=1\\), so \\(r'(x_n)=-2/x_n\\to-\\infty\\). Any neighborhood of zero contains a tail of this sequence. MVT concerns one slope on each finite interval, and Darboux concerns intermediate values; neither asserts boundedness of the derivative."}
```

```exercise
{"id":"analysis-diff-pset-sqrt","type":"written","prompt":"Submit Problem 4: certify the Taylor approximation \\(\\sqrt{1+x}\\approx1+x/2\\) on \\([0,1/4]\\) and prove the direction of its error.","hints":["Compute \\(f''(x)=-1/[4(1+x)^{3/2}]\\).","Taylor's remainder is f''(xi)x²/2 for some xi between 0 and x."],"rubric":["States f is twice differentiable on the required interval","Bounds |f''|≤1/4 there","Obtains |R_1(x)|≤x²/8≤1/128","Uses f''<0 and the Lagrange remainder to show 1+x/2 exceeds f(x) for x>0"],"solution":"The function \\(f(x)=\\sqrt{1+x}\\) has continuous derivatives on \\([0,1/4]\\), with \\(f(0)=1\\), \\(f'(0)=1/2\\), and \\(f''(t)=-1/[4(1+t)^{3/2}]\\). Thus \\(|f''(t)|\\le1/4\\) on the interval. Taylor with n=1 gives \\(f(x)=1+x/2+f''(\\xi)x^2/2\\) for some \\(0<\\xi<x\\) when x>0. Therefore \\(|f(x)-(1+x/2)|\\le x^2/8\\le1/128\\). Since \\(f''(\\xi)<0\\), the remainder is negative for x>0, so the linear approximation overestimates f."}
```

```exercise
{"id":"analysis-diff-pset-uniqueness","type":"written","prompt":"Submit Problem 5: disprove the claim that a zero derivative at one point prevents one-to-one behavior, then prove a sufficient derivative condition on an interval.","hints":["Try \\(h(x)=x^3\\) at zero.","If f'>0 throughout an interval, apply MVT to each ordered pair of distinct inputs."],"rubric":["Gives x³ or another globally injective function with derivative zero at a point","States a clear sufficient condition such as f'>0 throughout an interval plus needed regularity","Uses MVT to prove strict increase and hence injectivity","Explains why the counterexample shows this condition is not necessary"],"solution":"Take \\(h(x)=x^3\\). It is strictly increasing on \\(\\mathbb R\\), hence one-to-one, but \\(h'(0)=0\\). A sufficient condition is that f be continuous on each closed subinterval of an interval I, differentiable on its interior, and satisfy \\(f'(x)>0\\) at every interior point. For \\(u<v\\) in I, MVT gives \\(f(v)-f(u)=f'(c)(v-u)>0\\), so f is strictly increasing and injective. The function \\(x^3\\) is injective despite violating the everywhere-positive condition at zero, proving the condition is not necessary."}
```
