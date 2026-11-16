# Calculus I bridge. Building logarithms and exponentials without a circle of rules

**Place in the route:** after the definite integral and the Fundamental Theorem, before the full Calculus II integration strategy. The differentiation chapter used the familiar derivative formulas; this lesson now establishes one coherent foundation for them. Allow two lessons and a recitation. This is also preparation for the rigorous real-analysis construction, where the existence of the integral and inverse are proved in greater detail.

**Outcomes:** derive the logarithm and exponential rules from one starting definition; track the domain of real powers; derive the basic hyperbolic identities and derivatives; select between exact formulas and numerical evidence.

## Choose a starting point

Several introductions to \(e^x\) are valid, but mixing their conclusions without proving their connections is circular. Here we start with an integral that already exists: for \(x>0\), define

\[
L(x)=\int_1^x\frac{1}{t}\,dt.
\]

The integrand is continuous on every closed interval with positive endpoints. The FTC gives \(L'(x)=1/x>0\), so \(L\) is continuous and strictly increasing. We will *define* \(\ln x=L(x)\). We have not assumed that the integral is already the inverse of an exponential.

Why does the logarithm turn products into sums? For any fixed \(y>0\), the derivative with respect to \(x\) of \(L(xy)-L(x)\) is \(y/(xy)-1/x=0\). The mean value theorem makes this difference constant for \(x>0\). At \(x=1\), it equals \(L(y)\). Therefore

\[
\ln(xy)=\ln x+\ln y \qquad (x,y>0).
\]

This derivation also gives \(\ln1=0\), \(\ln(1/x)=-\ln x\), and \(\ln(x/y)=\ln x-\ln y\), each with positive inputs. Logarithm laws do not erase domain conditions: \(\ln(x^2)=2\ln|x|\) is valid for \(x\ne0\), whereas \(2\ln x\) is defined only for \(x>0\).

To show that \(L\) reaches every real value, note \(L(2)=\int_1^2 1/t\,dt\ge1/2>0\). The product law gives \(L(2^n)=nL(2)\to\infty\) and \(L(2^{-n})=-nL(2)\to-\infty\). Continuity and the intermediate value theorem fill every value between. Thus \(L:(0,\infty)\to\mathbb R\) is a bijection.

## Invert once, then derive the familiar rules

Define \(E:\mathbb R\to(0,\infty)\) to be the inverse of \(L\). Because \(L'(x)=1/x\ne0\), the inverse derivative theorem applies at every positive input:

\[
E'(u)=\frac{1}{L'(E(u))}=E(u).
\]

The inverse of \(L(xy)=L(x)+L(y)\) gives \(E(u+v)=E(u)E(v)\), while \(E(0)=1\). Define \(e=E(1)\); then \(E(u)\) is what we denote \(e^u\). This is a definition of the base, rather than an appeal to a graph whose slope is already known. Positive-base powers follow by \(a^u=E(u\ln a)\) for \(a>0\), giving

\[
\frac{d}{du}a^u=(\ln a)a^u,
\qquad
\frac{d}{dx}x^r=rx^{r-1}\quad(x>0,\ r\in\mathbb R).
\]

For integer \(r\), the power rule extends to negative \(x\) wherever \(x^r\) is defined, by algebra and the product/quotient rules. Some rational powers also extend to negative inputs, but the formula \(E(r\ln x)\) alone does not establish those branches. At \(x=0\), inspect the original function separately. For instance \(x^{1/3}\) is continuous at zero yet has no finite derivative there.

There is a second common start: define an exponential candidate by a convergent power series, derive its derivative and addition law, and then construct its inverse. That route needs theorems allowing differentiation and multiplication of series; they are developed later. Once a series-defined candidate \(S\) has been proved to satisfy \(S'=S\) and \(S(0)=1\), agreement is easy: because our integral-defined \(E\) is positive and satisfies the same equations, \((S/E)'=(S'E-SE')/E^2=0\). The mean value theorem and the value at zero give \(S/E=1\). We have used only the integral route here, so no unproved fact about a series is assumed in this proof.

### Worked decision: a variable base and a domain trap

For \(x>0\), let \(g(x)=x^x=E(x\ln x)\). The chain and product rules yield

\[
g'(x)=x^x(\ln x+1).
\]

Thus its only stationary point on \((0,\infty)\) is \(x=e^{-1}\). Since \(g'\) changes from negative to positive there, and \(x^x\to1\) as \(x\to0^+\) while \(x^x\to\infty\) as \(x\to\infty\), the point is a global minimum on the positive domain. Its value is \(e^{-1/e}\). The limit at zero is a boundary limit, not a value of this definition at zero. To justify it, write \(x\ln x=(\ln x)/(1/x)\), or substitute \(x=1/t\) and use \(\ln t/t\to0\). The latter limit follows, for example, from \(\ln t\le2\sqrt t\) for \(t\ge1\), obtained by integrating \(1/s\le1/\sqrt s\).

```mathviz
scene "A variable power has a positive domain";
domain 0.05 2.5;
range 0 5;
param a = 0.367879441 from 0.08 to 2.3;
fn power(x) = exp(x*ln(x));
fn slope(x) = power(x)*(ln(x)+1);
plot power color blue;
tangent power at a;
```

**Predict:** can \(x^x\) have a global minimum on \(x>0\) even though the interval is open? **Explore:** move \(a\) across \(e^{-1}\) and examine the tangent. **Explain:** the sign of \(\ln x+1\), together with both boundary limits, proves the conclusion; the sampled tangent does not. **Transfer:** replace the exponent \(x\) by \(2x\), derive the new stationary input, and explain whether the minimum value is the old minimum squared.

## Hyperbolic functions follow from the exponential

Define \(\sinh x=(e^x-e^{-x})/2\) and \(\cosh x=(e^x+e^{-x})/2\). The product identity \(e^xe^{-x}=1\) gives

\[
\cosh^2x-\sinh^2x=1,
\qquad (\sinh x)'=\cosh x,
\qquad (\cosh x)'=\sinh x.
\]

The signs differ from the circular identity \(\cos^2x+\sin^2x=1\). Here \(\cosh x\ge1\) by the arithmetic-geometric mean inequality and \(\sinh\) is strictly increasing because \(\cosh>0\). Also \(\cosh\) is even and \(\sinh\) odd. These properties follow from definitions, not from how a plot happens to look.

The quotient \(\tanh x=\sinh x/\cosh x\) is defined for every real \(x\). The quotient rule and the identity yield \((\tanh x)'=1/\cosh^2x=1-\tanh^2x\), with range \((-1,1)\). A frequent error is to substitute \(\tanh' x=\cosh x\) by analogy with \(\sinh\); the derivative of a quotient must include both terms.

**Worked inverse.** Since \(\sinh\) is strictly increasing and unbounded in both directions, it has an inverse on \(\mathbb R\). Solving \(y=(z-z^{-1})/2\) with \(z=e^x>0\) gives \(z=y+\sqrt{1+y^2}\), hence

\[
\operatorname{arsinh}y=\ln\!\left(y+\sqrt{1+y^2}\right),
\qquad
\frac{d}{dy}\operatorname{arsinh}y=\frac{1}{\sqrt{1+y^2}}.
\]

The logarithm's argument stays positive even when \(y<0\), because \(\sqrt{1+y^2}>|y|\). For the derivative, the inverse rule gives \(1/\cosh(\operatorname{arsinh}y)\), and the identity makes its denominator \(\sqrt{1+y^2}\). Check the same result by differentiating the logarithmic formula.

```mathviz
scene "Hyperbolic height and its rate";
domain -2 2;
range -4 5;
param a = 0.8 from -1.7 to 1.7;
fn sh(x) = (exp(x)-exp(-x))/2;
fn ch(x) = (exp(x)+exp(-x))/2;
plot sh color blue;
plot ch color amber;
tangent sh at a;
```

**Predict:** what is the slope of \(\sinh\) at zero, and why can it never become negative? **Explore:** compare tangent slopes with the amber curve at the same inputs. **Explain:** differentiation and positivity of \(\cosh\) prove the relationship. **Transfer:** draw \(\tanh\) and its derivative, using explicit exponential expressions if needed; explain why their outputs have different ranges.

## Try the reasoning before a solution

1. Prove \(\ln(1/x)=-\ln x\) with the product identity, then explain why \(\ln(-x)\) is meaningful only if \(x<0\). What is the derivative of \(\ln|x|\) on the two connected components of its domain?
2. Differentiate \(3^{x^2}\) and \(x^{\sqrt{x}}\), stating the positive-domain requirement for the latter. Why do the expressions have different outer derivatives?
3. Decide whether \(\int_0^1 1/x\,dx\) may be used to define \(\ln0\). Explain with an endpoint limit rather than a picture.
4. Prove \(\cosh x\ge1\) and determine all equality cases. Then find every stationary point of \(\cosh x\) and justify its global minimum.
5. Differentiate \(\ln(\cosh x)\) and \(\operatorname{arsinh}x\). Find an antiderivative of \(1/\sqrt{1+x^2}\) without a trigonometric substitution.
6. A peer claims \(\ln(x+y)=\ln x+\ln y\) whenever both inputs are positive. Give a numerical counterexample and identify the correct operation that becomes addition.

```exercise
{"id":"calc-log-foundation-proof","type":"written","prompt":"Using \\(L(x)=\\int_1^x dt/t\\), prove \\(L(xy)=L(x)+L(y)\\) for \\(x,y>0\\). Explain why a derivative-zero argument applies on this domain.","hints":["Fix y and differentiate L(xy)-L(x) with respect to x.","The difference is constant on the interval (0,infinity); evaluate it at x=1."],"rubric":["States x,y>0 and FTC differentiability","Computes derivative y/(xy)-1/x=0","Uses the mean value theorem on the connected positive interval","Evaluates the constant at x=1"],"solution":"For fixed \\(y>0\\), \\(H(x)=L(xy)-L(x)\\) is differentiable on \\((0,\\infty)\\). FTC and chain rule give \\(H\\prime(x)=y/(xy)-1/x=0\\). The MVT makes \\(H\\) constant on that connected interval. Since \\(H(1)=L(y)-L(1)=L(y)\\), we obtain \\(L(xy)=L(x)+L(y)\\)."}
```

<details><summary>Solutions and checks for 1–6</summary>

1. \(\ln x+\ln(1/x)=\ln1=0\). The real logarithm of \(-x\) requires \(-x>0\), hence \(x<0\). For \(x>0\), \((\ln|x|)'=1/x\); for \(x<0\), \(\ln|x|=\ln(-x)\) and the chain rule gives \((-1)/(-x)=1/x\). Nothing is defined at zero.
2. \((3^{x^2})'=3^{x^2}(\ln3)(2x)\), for all real \(x\). For \(x>0\), write \(x^{\sqrt x}=\exp(\sqrt x\ln x)\); its derivative is \(x^{\sqrt x}[\ln x/(2\sqrt x)+1/\sqrt x]\). The first expression has constant base and variable exponent; the second has both varying.
3. The integrand is undefined at zero, so the expression is an improper integral \(\lim_{a\downarrow0}\int_a^1(1/x)dx=\lim_{a\downarrow0}(-\ln a)=+\infty\). There is no real \(\ln0\). The limit of \(\ln x\) as \(x\downarrow0\) is \(-\infty\).
4. \(e^x,e^{-x}>0\) have product one, so their arithmetic mean is at least their geometric mean one. Equality holds only when \(e^x=e^{-x}\), namely \(x=0\). Also \(\cosh'=\sinh\), negative left of zero and positive right of it; the global minimum is one at zero.
5. \((\ln\cosh x)'=\sinh x/\cosh x=\tanh x\). The inverse calculation above gives \((\operatorname{arsinh}x)'=1/\sqrt{1+x^2}\), so \(\int dx/\sqrt{1+x^2}=\operatorname{arsinh}x+C\) on \(\mathbb R\).
6. At \(x=y=1\), the left side is \(\ln2>0\), while the right side is zero. Multiplication is converted to addition: \(\ln(xy)=\ln x+\ln y\).

</details>

**Later retrieval:** without reopening this proof, reconstruct the three links \(\ln'\to\exp'\to(a^x)'\); mark the exact point where FTC, inverse differentiation, and the chain rule enter.
