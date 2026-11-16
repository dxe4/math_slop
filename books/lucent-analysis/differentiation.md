# 8. Differentiation: slopes, intermediate values, and error

## Purpose and prerequisites

A derivative describes a local linear approximation. This chapter asks how much that local information determines about a function on an interval. You will prove Rolle's and the Mean Value Theorem (MVT), show that *every derivative has the intermediate value property*, and use a complete Taylor remainder argument to certify approximations. The proof depends on the Extreme Value Theorem and Intermediate Value Theorem in [continuity](limits-continuity.md), plus [compactness](topology.md) and [uniform continuity](uniform-continuity.md). Differentiation rules for elementary functions may be used after they have been proved from limits in calculus; no rule below depends on the integral developed in [Riemann integration](integration.md).

## A derivative is more than a computed expression

At an interior point \(a\) of the domain, \(f\) is differentiable if the finite limit

\[
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}
\]

exists. Equivalently, there is a remainder \(r(h)\) with \(r(h)/h\to0\) such that \(f(a+h)=f(a)+f'(a)h+r(h)\). Thus differentiability implies continuity at \(a\). The converse fails: \(|x|\) is continuous at zero, but its quotient is \(1\) for \(h>0\) and \(-1\) for \(h<0\). At an interval endpoint a derivative, when needed, has a separate one-sided definition.

For \(f(x)=x^2\), the quotient at \(a\) is \(2a+h\). Hence \(f'(a)=2a\), and the tangent approximation \(a^2+2a(x-a)\) has **exact** error \((x-a)^2\). This calculation proves more than the appearance of a plotted tangent.

```mathviz
scene "Secants approaching a tangent";
domain -2 3;
range -2 9;
param a = 1 from -1 to 2;
param h = 0.7 from 0.02 to 1.5;
fn f(x) = x^2;
plot f color blue;
secant f at a step h;
tangent f at a;
```

Reduce \(h\) and compare the lines. The display samples positive increments; the formula \(2a+h\) handles both signs and all sufficiently small increments.

Two rules illustrate why domain checks belong in a differentiation proof. If \(f,g\) are differentiable at \(a\), write their increments as \(f(a+h)=f(a)+f'(a)h+o(h)\) and likewise for \(g\). Multiplying gives \((fg)'(a)=f'(a)g(a)+f(a)g'(a)\); the product of the two increments is \(O(h^2)=o(h)\). If \(g(a)\ne0\), continuity keeps \(g\ne0\) nearby, and

\[
\frac{1/g(a+h)-1/g(a)}{h}
=-\frac{g(a+h)-g(a)}{h\,g(a+h)g(a)}
\longrightarrow-\frac{g'(a)}{g(a)^2}.
\]

This proves the reciprocal and quotient rules on their actual domains. For a composition, let \(k=g(a+h)-g(a)\). The differentiability statement \(f(g(a)+k)=f(g(a))+f'(g(a))k+o(k)\), together with \(k=g'(a)h+o(h)\), gives \((f\circ g)'(a)=f'(g(a))g'(a)\). This remains valid if \(k=0\) for some \(h\), since the remainder can be defined as zero there.

## Extrema lead to the Mean Value Theorem

**Theorem 8.1 (Fermat's).** If \(f\) has a local maximum or minimum at an interior point \(c\) and is differentiable there, then \(f'(c)=0\). At a maximum, the quotient for small positive \(h\) is nonpositive and for small negative \(h\) is nonnegative. If both sides have one common limit, that limit is zero. Apply this to \(-f\) for a minimum. The claim says nothing about a maximum at an endpoint: \(f(x)=x\) maximizes on \([0,1]\) at \(1\) and has slope \(1\).

**Theorem 8.2 (Rolle's).** Suppose \(a<b\), \(f\) is continuous on \([a,b]\), differentiable on \((a,b)\), and \(f(a)=f(b)\). Then some \(c\in(a,b)\) has \(f'(c)=0\).

**Proof.** By the Extreme Value Theorem, \(f\) attains a maximum and minimum. If their values agree, \(f\) is constant. Otherwise one extreme value differs from the common endpoint value, so that extremum occurs in \((a,b)\). Fermat's theorem applies there. ∎

**Mean Value Theorem.** If \(f\) is continuous on \([a,b]\) and differentiable on \((a,b)\), there exists \(c\in(a,b)\) with

\[
f(b)-f(a)=f'(c)(b-a).
\]

**Proof.** Let \(m=(f(b)-f(a))/(b-a)\) and \(g(x)=f(x)-m(x-a)\). The hypotheses pass to \(g\), and \(g(a)=g(b)\). Rolle gives \(g'(c)=0\), hence \(f'(c)=m\). ∎

The closed-interval continuity hypothesis cannot simply be dropped. Define \(f(0)=1\) and \(f(x)=x\) for \(0<x\le1\). Then \(f(1)-f(0)=0\), yet \(f'=1\) everywhere in \((0,1)\). If differentiability is dropped, \(|x|\) on \([-1,1]\) has equal endpoints and no interior zero derivative. These examples identify the separate work done by the two hypotheses.

**Consequences.** Apply MVT on every \([x,y]\) contained in an interval \(I\). If \(f'=0\) throughout its interior, \(f\) is constant on \(I\). If \(f'\ge0\), then \(f\) is nondecreasing; if \(f'>0\), it is strictly increasing. If \(|f'|\le M\), then \(|f(y)-f(x)|\le M|y-x|\), so \(f\) is Lipschitz and uniformly continuous. On a disconnected domain the conclusion can fail across components: the function equal to \(0\) on \((-2,-1)\) and \(1\) on \((1,2)\) has zero derivative everywhere in its domain but is not constant.

### Worked proof: uniqueness without solving an equation

Suppose \(p(x)=x^3+2x-7\). It is continuous, \(p(1)=-4\), and \(p(2)=5\), so IVT gives a root in \((1,2)\). Since \(p'(x)=3x^2+2>0\), MVT makes \(p\) strictly increasing on all of \(\mathbb R\); hence this root is the only real root. The existence step and uniqueness step use different theorems. A solver's single displayed root would establish neither claim.

### Guided decision: which theorem actually applies?

A colleague argues that \(f(x)=|x|\) has a zero derivative somewhere in \((-1,1)\) because \(f(-1)=f(1)\). The endpoint equality is correct. Locate the precise failed hypothesis, then replace \(f\) by \(x^2\) and find the point Rolle guarantees. If instead the function is \(x\) on \([0,1]\), explain why its maximum does not invoke Fermat's theorem. In each case, check where differentiability or interiority is required before looking for a formula.

## Darboux's theorem: derivatives cannot jump

A derivative need not be continuous, but it must attain every value between any two of its values.

**Theorem 8.3 (Darboux's).** Let \(f\) be differentiable on an open interval \(I\). If \(u<v\) are in \(I\) and \(\lambda\) lies strictly between \(f'(u)\) and \(f'(v)\), then there is \(c\in(u,v)\) with \(f'(c)=\lambda\).

**Proof.** First suppose \(f'(u)<\lambda<f'(v)\). Set \(g(x)=f(x)-\lambda x\) on \([u,v]\). Differentiability makes \(g\) continuous there, so the Extreme Value Theorem gives a minimum. Since \(g'(u)<0\), the definition of the derivative provides a sufficiently small \(h>0\) for which \((g(u+h)-g(u))/h<0\); thus \(g(u+h)<g(u)\), and \(u\) cannot be a minimum. Since \(g'(v)>0\), for a sufficiently small \(h<0\) we have \((g(v+h)-g(v))/h>0\). Multiplying by negative \(h\) shows \(g(v+h)<g(v)\), so \(v\) cannot be a minimum either. Therefore a minimum lies at some \(c\in(u,v)\). Fermat gives \(g'(c)=0\), or \(f'(c)=\lambda\). If \(f'(u)>\lambda>f'(v)\), apply the same argument to \(-f\) and \(-\lambda\). Endpoint values of \(\lambda\) are already attained at \(u\) or \(v\). ∎

The proof does **not** apply IVT to \(f'\): continuity of \(f'\) was never assumed. It applies the Extreme Value Theorem to the continuous auxiliary function \(f-\lambda x\). In particular, a function with derivative equal to \(-1\) to the left of a point and \(1\) to the right cannot be differentiable throughout an interval containing that point unless intermediate derivative values occur somewhere. The corner \(|x|\) escapes the conclusion because it is not differentiable at zero.

### A discontinuous derivative

Set \(q(0)=0\) and \(q(x)=x^2\sin(1/x)\) for \(x\ne0\). At zero,

\[
\left|\frac{q(h)-q(0)}{h}\right|=|h\sin(1/h)|\le|h|\longrightarrow0,
\]

so \(q'(0)=0\). Away from zero the ordinary rules give \(q'(x)=2x\sin(1/x)-\cos(1/x)\). Along \(x_n=1/(2\pi n)\), this tends to \(-1\); along \(y_n=1/((2n+1)\pi)\), it tends to \(1\). Thus \(q'\) is discontinuous at zero, while Darboux says it still takes all intermediate values on appropriate intervals. “Derivative” and “continuous derivative” are distinct properties.

## Taylor's theorem with a certified remainder

Fix a nonnegative integer \(n\) and distinct points \(a,x\) in an interval. Assume \(f,f',\ldots,f^{(n)}\) are continuous on the closed segment joining \(a\) and \(x\), with endpoint derivatives interpreted from inside that segment, and \(f^{(n+1)}\) exists on its interior. Define

\[
P_n(t)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(t-a)^k.
\]

**Taylor's theorem (Lagrange remainder).** For some \(\xi\) strictly between \(a\) and \(x\),

\[
f(x)=P_n(x)+\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}.
\]

**Proof.** Choose \(A=(f(x)-P_n(x))/(x-a)^{n+1}\), and put \(H(t)=f(t)-P_n(t)-A(t-a)^{n+1}\). Then \(H(x)=0\), while \(H(a)=H'(a)=\cdots=H^{(n)}(a)=0\). Rolle's theorem on the segment between \(a\) and \(x\) gives a point \(c_1\) between them with \(H'(c_1)=0\), because \(H(a)=H(x)=0\). Apply Rolle again to \(H'\) between \(a\) and \(c_1\), using \(H'(a)=0\), to get \(H''(c_2)=0\). Continue: at stage \(j\), \(H^{(j)}\) is continuous on the smaller closed segment and differentiable inside, and its two endpoint values are zero. After \(n+1\) applications we obtain \(H^{(n+1)}(\xi)=0\). Since the \((n+1)\)-st derivative of \(P_n\) is zero and that of \(A(t-a)^{n+1}\) is \(A(n+1)!\), we get \(A=f^{(n+1)}(\xi)/(n+1)!\). This works in either order of \(a\) and \(x\). ∎

If \(|f^{(n+1)}(t)|\le M\) between \(a\) and \(x\), then

\[
|f(x)-P_n(x)|\le \frac{M|x-a|^{n+1}}{(n+1)!}.
\]

For \(n=0\), this is exactly the MVT estimate. A Taylor polynomial by itself proposes an approximation; this bound certifies its accuracy under an explicit derivative hypothesis.

### Worked error budget: a rational function

On \([0,1/4]\), let \(f(t)=1/(1-t)\). Its quadratic Taylor polynomial at zero is \(P_2(t)=1+t+t^2\), and \(f^{(3)}(t)=6/(1-t)^4\). On this interval \(|f^{(3)}|\le6(4/3)^4\), so at \(t=1/4\) Taylor's theorem gives

\[
|f(1/4)-P_2(1/4)|\le (4/3)^4(1/4)^3=4/81.
\]

The exact geometric identity is sharper: \(1/(1-t)-(1+t+t^2)=t^3/(1-t)\), yielding an exact error \(1/48\) at \(t=1/4\). The certified Taylor bound is valid but need not be optimal. If an error budget is \(1/100\), the quadratic certificate is insufficient and the exact error also exceeds the budget; one must increase the degree or change the approximation point.

### Smoothness still does not imply a Taylor representation

After the exponential is constructed from the integral in the next analysis unit, define \(s(x)=e^{-1/x^2}\) for \(x\ne0\) and \(s(0)=0\). Here is the needed limit estimate rather than an appeal to vague “rapid decay.” For any integer \(m\ge0\), set \(t=1/x^2\), and choose an integer \(N>m/2\). Taylor's theorem for the now-constructed exponential at zero has a positive remainder for \(t\ge0\), so \(e^t\ge t^N/N!\). Consequently \(0\le t^{m/2}e^{-t}\le N!t^{m/2-N}\to0\). Thus \(|x|^{-m}e^{-1/x^2}\to0\). Differentiating away from zero repeatedly produces a polynomial in \(1/x\) times \(e^{-1/x^2}\). Inductively, if \(s^{(k)}(0)=0\), its difference quotient at zero is such a polynomial times \(e^{-1/h^2}\) divided by \(h\), and the just-proved estimate sends it to zero. The base case follows from the same estimate. Hence every derivative exists at zero and \(s^{(k)}(0)=0\) for all \(k\). Every Taylor polynomial at zero is identically zero, but \(s(x)>0\) for \(x\ne0\). Taylor's finite-order theorem is not contradicted: its remainder tends to zero at each fixed order, but equality with the *infinite* Taylor series would require a further limit of remainders as \(n\to\infty\). This example is a forward application; none of the proofs above uses the exponential.

## A local inverse and its hypotheses

Suppose \(f\) is continuously differentiable on an open interval around \(a\) and \(f'(a)\ne0\). Continuity of \(f'\) keeps its sign on a smaller interval, so MVT makes \(f\) strictly monotone there. By continuity and IVT its image is an interval and the restricted inverse \(g\) is continuous at \(f(a)\): points of the image approaching \(f(a)\) cannot have preimages staying outside a fixed neighborhood of \(a\), by strict monotonicity and the endpoint values of that neighborhood. For \(y=f(x)\ne f(a)\),

\[
\frac{g(y)-g(f(a))}{y-f(a)}=\frac{x-a}{f(x)-f(a)}
\longrightarrow\frac1{f'(a)}.
\]

Thus \(g'(f(a))=1/f'(a)\). The requirement \(f'(a)\ne0\) matters: \(f(x)=x^3\) has an inverse, but its inverse has no finite derivative at zero. Also, existence of a nonzero derivative at a single point does not by itself justify the nearby monotonicity step; the continuity assumption on \(f'\) supplied that step.

## Independent practice: choose, prove, and test the hypotheses

Attempt each problem before opening its hints. For a written proof, use the rubric to check your own argument, then revise it. A correct theorem name without its hypotheses is incomplete. The last two tasks transfer the chapter's methods to unfamiliar constructions.

```exercise
{"id":"analysis-mvt-hypotheses","type":"choice","prompt":"A learner applies Rolle to \\(f(x)=|x|\\) on \\([-1,1]\\). Which diagnosis is complete?","options":[{"label":"It fails because the endpoints have different values.","correct":false,"feedback":"Both endpoint values equal 1."},{"label":"It fails because the function is not differentiable at the interior point 0.","correct":true,"feedback":"Correct. Continuity and equal endpoint values hold, but the interior differentiability hypothesis fails."},{"label":"It fails because a maximum occurs at an endpoint.","correct":false,"feedback":"Rolle allows endpoint extrema; the theorem would still find an interior stationary point if all its hypotheses held."}],"hints":["List continuity, interior differentiability, and \\(f(-1)=f(1)\\) separately."],"solution":"The function is continuous on \\([-1,1]\\) and has equal endpoint values, but at zero the right difference quotient is 1 and the left quotient is -1. Therefore it is not differentiable on \\((-1,1)\\), and Rolle does not apply."}
```

```exercise
{"id":"analysis-mvt-strict","type":"written","prompt":"Suppose \\(f\\) is continuous on \\([a,b]\\), differentiable on \\((a,b)\\), \\(f'(x)\\ge0\\) everywhere inside, and \\(f'(x)>0\\) except at finitely many interior points. Prove \\(f\\) is strictly increasing. Explain why the one-line claim 'MVT gives a point with positive derivative' is incomplete.","hints":["First use MVT only to prove nondecreasing.","If two distinct points had the same function value, what would nondecreasingness force on the entire interval between them?"],"rubric":["Uses MVT with its interval hypotheses to obtain nondecreasingness","Shows equal endpoint values at two distinct inputs would make the function constant between them","Finds a point in that open interval outside the finite exceptional set","Explains why an arbitrary MVT point might be one of the exceptional points"],"solution":"For \\(u<v\\) in \\([a,b]\\), MVT on \\([u,v]\\) gives \\(f(v)-f(u)=f'(c)(v-u)\\ge0\\), so \\(f\\) is nondecreasing. If \\(f(u)=f(v)\\), then \\(f(u)\\le f(t)\\le f(v)\\) for every \\(t\\in[u,v]\\), so \\(f\\) is constant there. Its derivative would be zero at every interior point of this interval. But an open interval contains a point outside any finite exceptional set, where the derivative is positive. Contradiction. MVT by itself may select an exceptional zero-derivative point, so strictness requires this second argument."}
```

```exercise
{"id":"analysis-darboux-no-jump","type":"written","prompt":"Can a differentiable \\(f:\\mathbb R\\to\\mathbb R\\) satisfy \\(f'(x)=-2\\) for every \\(x<0\\) and \\(f'(x)=3\\) for every \\(x>0\\), with any chosen value of \\(f'(0)\\)? Give a theorem-based proof and a direct proof using MVT/continuity.","hints":["Darboux applied across zero requires every slope between -2 and 3.","On each half-line, MVT makes \\(f(x)+2x\\) or \\(f(x)-3x\\) constant; continuity at zero then determines the constants."],"rubric":["Uses Darboux on an interval crossing zero and identifies an omitted slope","Handles any possible assigned derivative at zero rather than one case","Derives the two linear half-line formulas from MVT","Uses continuity at zero and unequal one-sided quotients for an independent contradiction"],"solution":"Choose any \\(u<0<v\\). Darboux says \\(f'\\) assumes every value in \\((-2,3)\\) on \\((u,v)\\). Since all nonzero points have derivative either -2 or 3, only the single point 0 could supply such values, which is impossible. Directly, MVT makes \\(f(x)=-2x+C_-\\) for \\(x<0\\) and \\(f(x)=3x+C_+\\) for \\(x>0\\). Differentiability implies continuity at zero, so \\(C_-=C_+=f(0)\\). The difference quotient at zero tends to -2 from the left and 3 from the right, so no derivative exists there."}
```

```exercise
{"id":"analysis-taylor-rational","type":"written","prompt":"For \\(f(x)=1/(1+x)\\) and \\(x=1/10\\), derive the degree-\\(n\\) Taylor polynomial at zero and its exact remainder. Find the least \\(n\\ge0\\) making the absolute error strictly below \\(10^{-4}\\). Also give a valid Lagrange-remainder bound for the same \\(n\\).","hints":["Multiply \\(1-x+x^2-\\cdots+(-x)^n\\) by \\(1+x\\).","For the Lagrange bound, \\(|f^{(n+1)}(t)|=(n+1)!/(1+t)^{n+2}\\le(n+1)!\\) on \\([0,1/10]\\)."],"rubric":["Derives the alternating polynomial and exact remainder with its sign","Finds the least degree n=3 by checking n=2 and n=3","States derivative and interval hypotheses for Taylor's theorem","Produces the valid, possibly weaker Lagrange bound at n=3"],"solution":"The finite geometric identity gives \\(P_n(x)=\\sum_{k=0}^n(-x)^k\\) and \\(f(x)-P_n(x)=(-x)^{n+1}/(1+x)\\). At \\(x=1/10\\), the error is \\(10^{-(n+1)}/1.1\\): for \\(n=2\\) it is \\(1/1100>10^{-4}\\), while for \\(n=3\\) it is \\(1/11000<10^{-4}\\). Earlier degrees have larger errors, so 3 is least. On \\([0,1/10]\\), \\(f^{(4)}(t)=24/(1+t)^5\\) exists and is bounded by 24. Taylor's Lagrange formula gives \\(|R_3|\\le24(1/10)^4/4!=10^{-4}\\), a valid bound that alone does not certify the requested strict inequality; the exact identity does."}
```

```exercise
{"id":"analysis-inverse-derivative","type":"written","prompt":"Let \\(p(x)=x+x^3\\). Prove it has a global inverse and compute that inverse's derivative at \\(p(1)\\). Then explain why the same inverse-derivative calculation is invalid for \\(q(x)=x^3\\) at zero even though \\(q\\) has an inverse.","hints":["MVT turns \\(p'(x)=1+3x^2>0\\) into strict increase; check both tails for surjectivity.","For \\(q^{-1}(y)=y^{1/3}\\), inspect its quotient at zero."],"rubric":["Proves strict monotonicity and surjectivity of p","Identifies p(1)=2 and p'(1)=4","Uses inverse derivative theorem with its nonzero-slope hypothesis to obtain 1/4","Explains that q'(0)=0 and the inverse quotient has no finite limit"],"solution":"The polynomial \\(p\\) is continuous and \\(p'(x)=1+3x^2>0\\); MVT makes it strictly increasing. Since \\(p(x)\\to\\pm\\infty\\) as \\(x\\to\\pm\\infty\\), IVT makes it onto \\(\\mathbb R\\), so it has an inverse. At \\(x=1\\), \\(p(1)=2\\) and \\(p'(1)=4\\), giving \\((p^{-1})'(2)=1/4\\). The function \\(q(x)=x^3\\) is also strictly increasing and onto, but \\(q'(0)=0\\). Its inverse quotient at zero is \\(y^{1/3}/y=1/|y|^{2/3}\\), which diverges, so it has no finite derivative there."}
```

```exercise
{"id":"analysis-derivative-oscillation","type":"written","prompt":"Define \\(r(0)=0\\) and \\(r(x)=x^2\\sin(1/x)\\) for \\(x\\ne0\\). Prove \\(r'(0)=0\\), find \\(r'(x)\\) away from zero, and exhibit two sequences approaching zero along which the derivative has different limits. State why this does not violate Darboux's theorem.","hints":["Bound the zero difference quotient by \\(|h|\\).","Choose reciprocals of even and odd multiples of \\(\\pi\\) so the sine term vanishes."],"rubric":["Uses the difference quotient rather than substituting into the derivative formula at zero","Computes the off-zero derivative correctly","Gives two explicit approaching sequences and their derivative limits","Distinguishes derivative continuity from the intermediate value property"],"solution":"At zero, \\(|[r(h)-r(0)]/h|=|h\\sin(1/h)|\\le|h|\\to0\\). For \\(x\\ne0\\), \\(r'(x)=2x\\sin(1/x)-\\cos(1/x)\\). Along \\(x_n=1/(2\\pi n)\\), the derivative is -1; along \\(y_n=1/((2n+1)\\pi)\\), it is 1. So \\(r'\\) is discontinuous at zero. Darboux requires intermediate values between derivative values on an interval, not convergence of all derivative values to \\(r'(0)\\); the oscillating derivative does take intermediate values."}
```

## Later retrieval

In the cumulative analysis assessment, return to these ideas without the theorem named: decide whether a proposed derivative can omit an interval of slopes, and certify a numerical approximation by a stated derivative bound. A convincing answer must identify the relevant interval and each required hypothesis before calculating.
