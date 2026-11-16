
# Continuity, Derivatives, and Hypothesis Audits

The current route develops differentiation after the preceding continuity chapter. The former continuity sections 1–4 now point to their complete development in the preceding chapter; the primary differentiation arguments begin in Section 5 and are completed by the labeled proof supplement below. Every existing exercise and worked answer retains its identity.

Calculus theorems often appear as familiar formulas: a function crosses intermediate heights, reaches an extreme, or has a tangent parallel to a secant. Real analysis treats each as a conditional contract. The conclusion is reliable only because specific assumptions rule out specific failures.

This chapter assumes sequence limits, elementary derivatives, and the compactness of closed bounded intervals. Review [Sequences and Compactness](sequences-compactness.md) if the extreme value theorem or uniform continuity is unfamiliar.

## 1. Continuity is local control

The definition, complete quadratic estimate and local bounding method are developed in [Continuity and Uniform Control](continuity-and-uniform-continuity.md#1-continuity-transports-closeness-at-a-point).

## 2. The sequential criterion

The full equivalence, its quantified negation and the retained sign-function witness are in [the continuity chapter](continuity-and-uniform-continuity.md#2-negating-continuity-produces-a-bad-sequence).

## 3. Intermediate values require a connected route

The interval-image theorem, connectedness hypothesis and original bisection example now belong to [the continuity chapter](continuity-and-uniform-continuity.md#continuous-interval-images-and-bisection).

## 4. Extreme values need compactness

The complete compact-domain proof and all three original failure cases now appear in [the continuity chapter](continuity-and-uniform-continuity.md#extreme-values-and-their-failure-boundaries).


## 5. Derivatives are stronger local promises

The derivative of \(f\) at an interior point \(a\) is the limit

\(f'(a)=\lim(h\to 0) [f(a+h)-f(a)]/h\),

when that finite limit exists. Differentiability implies continuity. Indeed,

\(f(a+h)-f(a) = ([f(a+h)-f(a)]/h) h\).

As \(h\to 0\), the quotient tends to \(f'(a)\) and \(h\to 0\), so the product tends to zero.

The converse fails. The absolute-value function is continuous at \(0\), but its difference quotient is \(1\) for positive \(h\) and \(-1\) for negative \(h\), so no two-sided derivative exists. A graph with a visible corner is helpful, but the two one-sided sequences of quotients are the proof.

Differentiability does not mean the derivative is continuous. For

\(f(x)=x^2 \sin(1/x)\) when \(x\ne 0\), with \(f(0)=0\),

the derivative at \(0\) is \(0\), but for \(x\ne 0\), \(f'(x)=2x \sin(1/x)-\cos(1/x)\), which oscillates near zero. Keep “differentiable” and “continuously differentiable” as distinct hypotheses.

## 6. Rolle and the mean value theorem

**Theorem 9.7 (Rolle's).** If \(a<b\), \(f\) is continuous on \([a,b]\), differentiable on \((a,b)\), and \(f(a)=f(b)\), then some \(c\in (a,b)\) has \(f'(c)=0\).

The extreme value theorem supplies a maximum and minimum. If both equal the common endpoint value, \(f\) is constant and every interior derivative is zero. Otherwise a non-endpoint extreme exists; Fermat's theorem says the derivative at an interior local extreme is zero.

**Theorem 9.8 (Mean value).** If \(a<b\), \(f\) is continuous on \([a,b]\), and differentiable on \((a,b)\), then some \(c\in (a,b)\) satisfies

\(f'(c)=[f(b)-f(a)]/(b-a)\).

Subtract the secant line from \(f\). The resulting auxiliary function has equal endpoint values, so Rolle's theorem supplies the desired point.

The endpoint continuity and interior differentiability have different jobs. For

\(f(x)=\sqrt{x}\) on \([0,1]\), the derivative is unbounded near \(0\), but the function is continuous at the endpoint and differentiable on \((0,1)\), so the mean value theorem applies. It finds \(c=1/4\) because \(f'(c)=1/(2\sqrt{c})=1\), matching the secant slope.

If continuity at an endpoint is dropped, define \(f(0)=1\) and \(f(x)=x\) for \(x\in (0,1]\). The secant slope from \(0\) to \(1\) is zero, while the derivative inside is always one. The conclusion fails exactly where the hypothesis does.

## 7. Consequences with domain conditions

If \(f'=0\) throughout an interval, then \(f\) is constant there. For any \(x<y\), the mean value theorem gives \(f(y)-f(x)=f'(c)(y-x)=0\).

The interval condition matters. On \(E=(-2,-1)\cup (1,2)\), define \(f=0\) on the left component and \(f=1\) on the right. The derivative is zero at every point of \(E\), but the function has two different constants because no interval inside the domain connects the components.

Similarly, if \(f'\ge 0\) throughout an interval, then \(f\) is nondecreasing; if \(f'>0\), it is strictly increasing. These statements compare two points by applying the mean value theorem on the entire segment between them.

If \(|f'(x)|\le M\) on an interval and the theorem's continuity conditions hold, then

\(|f(x)-f(y)|\le M|x-y|\).

This is a **Lipschitz bound**. It gives uniform continuity with an explicit choice \(\delta=\varepsilon/M\) when \(M>0\). More importantly in applications, it converts input uncertainty into output uncertainty.

**Worked Example 9.9 (Worked error bound).** On \([0,1]\), \(f(x)=e^x\) has derivative at most \(e\). If an input is recorded with absolute error no greater than \(0.002\), the output error is at most \(0.002e<0.00544\). This guarantee uses the whole derivative bound, not only a tangent approximation at one point.

## 8. Taylor's theorem is not an infinite-series license

If \(f\) has \(n+1\) derivatives on an interval between \(a\) and \(x\), Taylor's theorem gives

\(f(x)=\sum_{k=0}^n f^{(k)}(a)(x-a)^k/k! + R_n(x)\),

with a remainder such as \(R_n(x)=f^{(n+1)}(\xi)(x-a)^{n+1}/(n+1)!\) for some intermediate \(\xi\), under the standard hypotheses.

The finite formula and remainder estimate are the theorem. Concluding that the infinite Taylor series equals \(f\) requires proving \(R_n(x)\to 0\). Smoothness alone is insufficient: there are infinitely differentiable functions whose Taylor series at a point does not recover the function away from that point.

For \(e^x\) on \([0,1]\), the derivatives are bounded by \(e\), so the degree-\(n\) remainder satisfies \(|R_n(x)|\le e/(n+1)!\), which tends to zero. Here the infinite expansion is justified by a quantitative bound.

## 9. A theorem audit template

For any calculus theorem, build four lines:

1. **Claim:** state the exact conclusion, including where the special point lies.
2. **Hypotheses:** list domain shape, endpoint behavior, and interior regularity separately.
3. **Mechanism:** name where each hypothesis enters the proof.
4. **Failure tests:** remove one assumption at a time and construct a counterexample.

For the mean value theorem, compactness of \([a,b]\) supports Rolle's theorem through extrema, continuity includes the endpoints, differentiability supplies Fermat's theorem in the interior, and the interval connects the two endpoints. This is more durable than memorizing a picture of a secant and a tangent.

## 10. Common errors

- **A sign change always gives a root.** Continuity on a connected interval is indispensable.
- **Continuous on a bounded domain means a maximum exists.** The domain must be compact, not merely bounded.
- **Differentiable means continuously differentiable.** Derivatives may be discontinuous.
- **Derivative zero everywhere means globally constant on any domain.** The conclusion holds on each interval component.
- **The mean value point is unique.** The theorem promises at least one point, often many.
- **Taylor polynomials automatically converge to the function.** The remainder must be controlled.
- **A local tangent estimate is a global error bound.** A uniform derivative or remainder bound is needed.


## Differentiation proofs for the current route

The former continuity development has moved to the preceding chapter, with its original section anchors retained above as destination pointers. The primary work here begins with finite derivatives and the exact roles of interval hypotheses. Superscripts in parentheses, such as $f^{(k)}$, denote derivative order rather than an ordinary power.

**Definition 9.1 (Interior derivative).** For a real function on an open interval and a point $a$ of that interval, the derivative is the finite limit of $[f(a+h)-f(a)]/h$ as nonzero $h$ tends to zero. A derivative on a closed interval means an interior derivative unless an endpoint's one-sided derivative is explicitly named.

**Theorem 9.2 (Algebra and chain rule).** If $f,g$ are differentiable at $a$, then their sum and product are differentiable there, with derivatives $f'(a)+g'(a)$ and $f'(a)g(a)+f(a)g'(a)$. If $g(a)\ne0$, the quotient is defined in a sufficiently small legal neighbourhood and differentiable at $a$, with derivative $[f'(a)g(a)-f(a)g'(a)]/g(a)^2$. If $f$ is differentiable at $a$ and $h$ is differentiable at $f(a)$, with the composition locally defined, then $(h\circ f)'(a)=h'(f(a))f'(a)$.

*Proof.* Write each differentiable function as its base value plus its derivative times the increment plus an $o(|t|)$ error. Adding the two expansions proves the sum rule. Multiplication gives the stated linear term; products involving two increment-sized factors are $O(t^2)$, hence $o(|t|)$. For a reciprocal, continuity of $g$ and $g(a)\ne0$ keep $g(a+t)$ away from zero, and
$$\frac{1/g(a+t)-1/g(a)}t
=-\frac{[g(a+t)-g(a)]/t}{g(a+t)g(a)}
\longrightarrow-\frac{g'(a)}{g(a)^2}.$$
The quotient follows by the product rule. For composition, express
$$h(f(a)+u)=h(f(a))+h'(f(a))u+u\varepsilon(u),$$
where $\varepsilon(u)\to0$ and set $\varepsilon(0)=0$. The inner displacement $u=f(a+t)-f(a)$ is $O(|t|)$ and tends to zero. Substituting its derivative expansion makes the remainder $o(|t|)$, including increments with $u=0$. This proves the chain rule without dividing by an inner displacement that might vanish. ∎

**Theorem 9.3 (Fermat and Rolle).** An interior local extremum of a differentiable real function has derivative zero. If $a<b$, $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a)=f(b)$, then some $c\in(a,b)$ satisfies $f'(c)=0$.

*Proof.* At a local maximum, sufficiently small positive difference quotients are nonpositive and sufficiently small negative ones are nonnegative. Their common finite limit must therefore be zero. A local minimum follows by replacing $f$ with $-f$. For Rolle, compactness and continuity supply a maximum and minimum on $[a,b]$. If the function is constant, every interior point works. Otherwise some value differs from the common endpoint value, so either the maximum or minimum is attained in the interior. Apply the first assertion there. ∎

**Theorem 9.4 (Mean value and Cauchy mean value).** For continuous $f$ on $[a,b]$, differentiable on $(a,b)$ with $a<b$, some $c\in(a,b)$ satisfies $f(b)-f(a)=f'(c)(b-a)$. If $g$ has the same regularity, some possibly different $c\in(a,b)$ satisfies
$$f'(c)[g(b)-g(a)]=g'(c)[f(b)-f(a)].$$

*Proof.* Subtract from $f$ its secant line. The resulting function has equal endpoint values, so Rolle gives the first identity. For the second, apply Rolle to
$$H(t)=[f(b)-f(a)][g(t)-g(a)]-[g(b)-g(a)][f(t)-f(a)],$$
whose endpoint values are both zero. Its derivative vanishes at the required point, giving the displayed equality. No division was used. A ratio version additionally needs the relevant denominator to be nonzero; if $g'$ never vanishes, the first mean value theorem also gives $g(b)\ne g(a)$. ∎

**Theorem 9.5 (Darboux property of derivatives).** If $f$ is differentiable on an open interval, $x<y$ are points in it, and $\lambda$ lies strictly between $f'(x)$ and $f'(y)$, then $f'(c)=\lambda$ for some $c\in(x,y)$.

*Proof.* First assume $f'(x)<\lambda<f'(y)$ and put $H(t)=f(t)-\lambda t$ on $[x,y]$. Its derivative is negative at $x$ and positive at $y$. The derivative definition gives a point just to the right of $x$ where $H$ is smaller than $H(x)$, and a point just to the left of $y$ where it is smaller than $H(y)$. Thus neither endpoint minimizes the continuous function on this compact interval. An attained minimum lies at an interior point $c$, where Fermat gives $H'(c)=0$ and hence $f'(c)=\lambda$. If the derivative inequalities are reversed, apply the proved case to $-f$ and $-\lambda$. ∎

This is the precise input to Exercise ANA-CH10-E016. The derivative need not be continuous, but it cannot omit an intermediate value between two values it assumes. Oscillations and jumps are therefore different kinds of discontinuity. The oscillatory derivatives already displayed in the chapter are compatible with Darboux's property.

**Theorem 9.6 (A precise finite Taylor theorem).** Suppose $n\ge0$, $f$ has continuous derivatives through order $n$ on the closed interval joining distinct $a,x$, and has derivative of order $n+1$ at every interior point. Endpoint derivatives through order $n$ are understood as continuous one-sided extensions. Then for some $\xi$ strictly between $a,x$,
$$f(x)=\sum_{j=0}^{n}\frac{f^{(j)}(a)}{j!}(x-a)^j+
\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}.$$

*Proof.* Let $P$ be the displayed Taylor polynomial and put $R=f(x)-P(x)$. The function
$$H(t)=f(t)-P(t)-R\left(\frac{t-a}{x-a}\right)^{n+1}$$
vanishes at $a,x$, and its derivatives through order $n$ vanish at $a$. Repeated Rolle applications yield a zero of $H^{(n+1)}$ in the interior: after the first application, $H'$ has an interior zero and, when $n\ge1$, its endpoint value at $a$ is zero; repeat on the interval between those two zeros. The stated continuity and differentiability assumptions make every application legal, also when $x<a$. At the last point $\xi$,
$$0=f^{(n+1)}(\xi)-R\frac{(n+1)!}{(x-a)^{n+1}},$$
which gives the formula. For $n=0$ this is exactly one Rolle application. ∎

Finite Taylor theory supplies an error expression. It becomes an infinite expansion only after an independent argument makes the remainder tend to zero. The next Taylor chapter develops sharper remainder estimates and convexity, while the present proof fixes the hypotheses needed by the numerical examples already retained here.



**Worked Example 9.7 (An inequality certified by an intermediate derivative).** Apply the mean value theorem to $f(t)=\log t$ on $[1,2]$. Continuity holds at both positive endpoints and the derivative $1/t$ exists inside. Some $c\in(1,2)$ satisfies $\log2=1/c$, so $1/2<\log2<1$. This gives strict numerical bounds without estimating a graph or relying on a decimal expansion. The theorem does not generally make its intermediate point explicit; here the identity additionally describes it as $c=1/\log2$.

**Worked Example 9.8 (Intermediate derivative values amid oscillation).** Let $f(0)=0$ and $f(t)=t^2\sin(1/t)$ for $t\ne0$. The zero-point difference quotient is bounded by $|t|$, so $f'(0)=0$. At positive points $u_j=1/(2\pi j)$, the derivative formula gives $f'(u_j)=-1$, while at $v_j=1/((2j+1)\pi)$ it gives $f'(v_j)=1$. Both sequences approach zero, so the derivative is not continuous there. Nevertheless Darboux's theorem on the interval between $v_j$ and $u_j$ guarantees every value between minus one and one, such as one half. Discontinuity of a derivative does not permit a jump across intermediate values.


## 11. Exercises with worked answers

### ANA-CH10-E001 — Exercise 1: continuity estimate

Prove \(f(x)=1/x\) is continuous at an arbitrary \(a\ne 0\) with an explicit \(\delta\).


<details>
<summary>Hint 1</summary>

Keep the denominator away from zero before estimating the difference of reciprocals.

</details>
<details>
<summary>Hint 2</summary>

Impose input distance below half the magnitude of the base point, then budget the remaining linear factor.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH10-E001 — Worked answer

First require \(|x-a|<|a|/2\), which gives \(|x|>|a|/2\). Then

\(|1/x-1/a|=|x-a|/(|x||a|)<2|x-a|/|a|^2\).

Given \(\varepsilon>0\), choose \(\delta=\min(|a|/2, \varepsilon|a|^2/2)\). The two bounds then give output error below \(\varepsilon\).


</details>

### ANA-CH10-E002 — Exercise 2: locate but do not solve

Show \(x^5+x=3\) has exactly one real solution.


<details>
<summary>Hint 1</summary>

Separate existence of a root from uniqueness.

</details>
<details>
<summary>Hint 2</summary>

Use a sign-changing interval for the first part and a strictly positive derivative for the second.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH10-E002 — Worked answer

Let \(f(x)=x^5+x-3\). It is continuous, with \(f(1)=-1\) and \(f(2)=31\), so the intermediate value theorem gives a root in \((1,2)\). Its derivative is \(5x^4+1>0\) everywhere, so the mean value theorem implies \(f\) is strictly increasing. Therefore there can be at most one root, and the existing root is unique.


</details>

### ANA-CH10-E003 — Exercise 3: audit an endpoint failure

Give a function differentiable on \((0,1)\) with derivative always zero that is not constant on \([0,1]\).


<details>
<summary>Hint 1</summary>

Change an endpoint value while leaving the entire open-interval formula constant.

</details>
<details>
<summary>Hint 2</summary>

The mean value theorem needs continuity at the endpoints it compares.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH10-E003 — Worked answer

Define \(f(x)=0\) for \(0\le x<1\) and \(f(1)=1\). On \((0,1)\), the derivative is zero. The function is not continuous at the right endpoint, so the mean value theorem cannot compare \(0\) and \(1\); the function is not constant on the closed interval.


</details>

### ANA-CH10-E004 — Exercise 4: Lipschitz control

Suppose \(f\) is differentiable on \(R\) and \(|f'|\le 0.4\). Prove the equation \(f(x)=x\) has at most one solution.


<details>
<summary>Hint 1</summary>

Compare two presumed fixed points using the derivative-induced Lipschitz bound.

</details>
<details>
<summary>Hint 2</summary>

Substitute the fixed-point equalities so the same distance occurs on both sides with factor less than one.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH10-E004 — Worked answer

If \(f(x)=x\) and \(f(y)=y\), then the Lipschitz estimate gives \(|x-y|=|f(x)-f(y)|\le 0.4|x-y|\). This forces \(|x-y|=0\), so \(x=y\). That argument proves uniqueness only, but the stated hypotheses also give existence. Let \(h(x)=f(x)-x\) and \(c=f(0)\). The Lipschitz bound gives \(h(x)\le c-0.6x\) for \(x>0\), so \(h\) is negative for sufficiently large positive \(x\); for \(x<0\), it gives \(h(x)\ge c-0.6x\), so \(h\) is positive for sufficiently large negative \(x\). Continuity and the intermediate value theorem give a zero of \(h\). Hence \(f(x)=x\) has exactly one solution. Equivalently, this is the contraction theorem on the complete space \(R\).


</details>

### ANA-CH10-E005 — Exercise 5: Taylor remainder

Bound the error when approximating \(\sin x\) on \([-0.2,0.2]\) by \(x\).


<details>
<summary>Hint 1</summary>

Use a Taylor degree whose even coefficient vanishes at zero.

</details>
<details>
<summary>Hint 2</summary>

The third derivative of sine has magnitude at most one throughout the interval.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH10-E005 — Worked answer

Taylor's theorem through degree two has polynomial \(x\) because the constant and quadratic coefficients vanish. The third derivative has absolute value at most one, so \(|\sin x-x|\le |x|^3/6\le 0.2^3/6\approx 0.00134\).


</details>

### ANA-CH10-E006 — Exercise 6: prove the sequential criterion

In metric spaces, prove that \(f\) is continuous at \(a\) exactly when every sequence \(x_n\to a\) satisfies \(f(x_n)\to f(a)\).


<details>
<summary>Hint 1</summary>

Prove the forward implication directly from the two definitions.

</details>
<details>
<summary>Hint 2</summary>

For the converse, negate continuity and choose a bad input within distance one over the index.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH10-E006 — Worked answer

If \(f\) is continuous and \(x_n\to a\), let \(\varepsilon>0\). Continuity supplies \(\delta>0\) such that \(d(x,a)<\delta\) implies \(d(f(x),f(a))<\varepsilon\). Sequence convergence supplies \(N\) such that \(n\ge N\) implies \(d(x_n,a)<\delta\), giving the desired image convergence.

Conversely, suppose \(f\) is not continuous at \(a\). Then some \(\varepsilon_0>0\) defeats every \(\delta>0\). For each \(n\), use \(\delta=1/n\) to choose \(x_n\) with \(d(x_n,a)<1/n\) but \(d(f(x_n),f(a))\ge \varepsilon_0\). Then \(x_n\to a\) while the images do not converge to \(f(a)\), contradicting the sequential property. The constructed sequence packages the negation of continuity.


</details>

### ANA-CH10-E007 — Exercise 7: composition preserves continuity

Let \(f:X\to Y\) be continuous at \(a\) and \(g:Y\to Z\) continuous at \(f(a)\). Prove \(g\circ f\) is continuous at \(a\), with the order of tolerance choices explicit.


<details>
<summary>Hint 1</summary>

Request an intermediate output tolerance from the outer function first.

</details>
<details>
<summary>Hint 2</summary>

Use that tolerance as the input to continuity of the inner function.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH10-E007 — Worked answer

Given \(\varepsilon>0\), continuity of \(g\) at \(f(a)\) supplies \(\eta>0\) such that \(d_Y(y,f(a))<\eta\) implies \(d_Z(g(y),g(f(a)))<\varepsilon\). Now continuity of \(f\) at \(a\), requested at tolerance \(\eta\), supplies \(\delta>0\) such that \(d_X(x,a)<\delta\) implies \(d_Y(f(x),f(a))<\eta\). Chaining the implications gives the \(\varepsilon\) conclusion. Choosing \(\delta\) before obtaining the intermediate tolerance \(\eta\) would reverse the permitted dependence.


</details>

### ANA-CH10-E008 — Exercise 8: a globally uniform square-root estimate

Prove \(f(x)=\sqrt{x}\) is uniformly continuous on \([0,\infty)\) even though its derivative is unbounded near zero.


<details>
<summary>Hint 1</summary>

Seek an inequality between the difference of square roots and the square root of the input difference.

</details>
<details>
<summary>Hint 2</summary>

Square the nonnegative output difference after ordering the inputs.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH10-E008 — Worked answer

For \(x,y\ge 0\), assume without loss of generality \(x\ge y\). Then

\((\sqrt{x}-\sqrt{y})^2=x+y-2\sqrt{xy}\le x-y\),

because \(y\le \sqrt{xy}\) when \(x\ge y\). Hence \(|\sqrt{x}-\sqrt{y}|\le \sqrt{|x-y|}\). Given \(\varepsilon>0\), choose \(\delta=\varepsilon^2\). If \(|x-y|<\delta\), the output distance is below \(\varepsilon\). The derivative-bound test is sufficient for uniform continuity, not necessary.


</details>

### ANA-CH10-E009 — Exercise 9: derivatives, when they exist, are unique

Suppose the difference quotient of \(f\) at \(a\) is claimed to converge to both \(L\) and \(M\). Prove \(L=M\).


<details>
<summary>Hint 1</summary>

Treat the difference quotient as one function with two alleged limits.

</details>
<details>
<summary>Hint 2</summary>

Use a tolerance smaller than half the distance between the proposed limits and apply the triangle inequality.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH10-E009 — Worked answer

The derivative is the limit, as \(h\to 0\) through nonzero values, of the single function \(q(h)=(f(a+h)-f(a))/h\). Limits in \(R\) are unique. Explicitly, if \(L\ne M\), take \(\varepsilon=|L-M|/3\); for sufficiently small nonzero \(h\), both \(|q(h)-L|<\varepsilon\) and \(|q(h)-M|<\varepsilon\), so \(|L-M|<2|L-M|/3\), a contradiction.


</details>

### ANA-CH10-E010 — Exercise 10: continuity without differentiability

Prove \(f(x)=|x|\) is continuous at \(0\) but not differentiable there.


<details>
<summary>Hint 1</summary>

Continuity compares values, whereas differentiability compares a value difference divided by its signed input change.

</details>
<details>
<summary>Hint 2</summary>

Evaluate the quotient on positive and negative increments separately.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH10-E010 — Worked answer

Since \(||x|-0|=|x|\), the choice \(\delta=\varepsilon\) proves continuity. The difference quotient at zero is \(|h|/h\), equal to \(1\) for positive \(h\) and \(-1\) for negative \(h\). The two one-sided limits disagree, so the derivative does not exist. A sharp corner is compatible with continuity because continuity controls function values, not their ratios to input increments.


</details>

### ANA-CH10-E011 — Exercise 11: Fermat's theorem and an endpoint boundary

Prove that if \(f\) has a local maximum at an interior point \(c\) and is differentiable there, then \(f'(c)=0\). Give an endpoint counterexample.


<details>
<summary>Hint 1</summary>

At an interior maximum, the numerator of each nearby difference quotient is nonpositive.

</details>
<details>
<summary>Hint 2</summary>

Division by a negative increment reverses the sign; the common limit must satisfy both sign restrictions.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH10-E011 — Worked answer

For small \(h>0\), local maximality gives \(f(c+h)-f(c)\le 0\), so the right difference quotients are nonpositive. For small \(h<0\), the numerator is still nonpositive but division by negative \(h\) makes the quotient nonnegative. If the common two-sided limit exists, it is both at most and at least zero, hence zero. On \([0,1]\), \(f(x)=x\) attains its maximum at the endpoint \(1\) while \(f'(1)=1\) in the ambient formula. Interior location is essential.


</details>

### ANA-CH10-E012 — Exercise 12: audit every Rolle hypothesis

Give separate examples showing failure of Rolle's conclusion when (a) endpoint equality is removed, (b) continuity on the closed interval is removed, or (c) differentiability inside is removed.


<details>
<summary>Hint 1</summary>

Remove one assumption at a time while keeping the other two.

</details>
<details>
<summary>Hint 2</summary>

A nonconstant line, an altered endpoint, and an absolute-value corner test the three different failures.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH10-E012 — Worked answer

(a) On \([0,1]\), \(f(x)=x\) is continuous and differentiable but has unequal endpoint values and derivative constantly one. (b) Define \(f(0)=f(1)=0\) and \(f(x)=x\) for \(0<x<1\); the function is differentiable inside with derivative one but is discontinuous at \(1\), and no interior derivative is zero. (c) On \([-1,1]\), \(f(x)=|x|\) is continuous with equal endpoint values, but is not differentiable at zero; wherever its derivative exists it is \(-1\) or \(1\). Each example removes one load-bearing hypothesis.


</details>

### ANA-CH10-E013 — Exercise 13: derivative bounds imply Lipschitz control

Let \(f\) be continuous on \([a,b]\), differentiable on \((a,b)\), and satisfy \(|f'(x)|\le M\). Prove \(|f(x)-f(y)|\le M|x-y|\) for all \(x,y\in [a,b]\).


<details>
<summary>Hint 1</summary>

Apply the mean value theorem on the subinterval between the two selected inputs.

</details>
<details>
<summary>Hint 2</summary>

Take absolute values only after identifying the intermediate derivative.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH10-E013 — Worked answer

If \(x=y\) the statement is immediate. Otherwise assume \(x<y\). Apply the mean value theorem on \([x,y]\); some \(c\in (x,y)\) satisfies \(f(y)-f(x)=f'(c)(y-x)\). Taking absolute values gives \(|f(y)-f(x)|\le M|y-x|\). The theorem requires continuity at the selected subinterval endpoints, which follows from continuity on \([a,b]\).


</details>

### ANA-CH10-E014 — Exercise 14: zero derivative needs a connected domain

Prove that \(f'=0\) on an interval forces \(f\) to be constant. Then give a counterexample on a disconnected domain.


<details>
<summary>Hint 1</summary>

The segment between any two interval points stays in the domain.

</details>
<details>
<summary>Hint 2</summary>

Contrast this with two components assigned different constant values.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH10-E014 — Worked answer

For any \(x<y\) in the interval, the whole segment \([x,y]\) lies in the domain. The mean value theorem supplies \(c\in (x,y)\) with \(f(y)-f(x)=f'(c)(y-x)=0\), so all values agree. On \((-2,-1)\cup (1,2)\), define \(f=0\) on the left component and \(f=1\) on the right. Its derivative is zero at every domain point, yet it is not globally constant. Connectedness permits local derivative information to propagate between arbitrary points.


</details>

### ANA-CH10-E015 — Exercise 15: positive derivative and strict increase

Assume \(f\) is continuous on an interval and differentiable in its interior with \(f'(x)>0\) everywhere inside. Prove \(f\) is strictly increasing. What weaker conclusion follows from \(f'\ge 0\)?


<details>
<summary>Hint 1</summary>

Write the output difference as an intermediate derivative times a positive input difference.

</details>
<details>
<summary>Hint 2</summary>

Replace strict positivity by nonnegativity to see precisely which conclusion weakens.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH10-E015 — Worked answer

For \(x<y\), the mean value theorem gives \(f(y)-f(x)=f'(c)(y-x)>0\), so \(f(y)>f(x)\). If only \(f'\ge 0\), the same equation yields \(f(y)\ge f(x)\), so \(f\) is nondecreasing but may have constant subintervals. For example, a differentiable function that is constant on \([0,1]\) and then increases smoothly satisfies the weak conclusion without strict increase.


</details>

### ANA-CH10-E016 — Exercise 16: derivatives cannot jump over values

Explain why no differentiable function on \((-1,1)\) can have derivative \(-1\) at every negative point and derivative \(1\) at every positive point while having any derivative value at zero.


<details>
<summary>Hint 1</summary>

A derivative has an intermediate-value property even when it is not continuous.

</details>
<details>
<summary>Hint 2</summary>

One value assigned at zero cannot supply every value strictly between the two claimed side values.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH10-E016 — Worked answer

Derivatives have the Darboux, or intermediate-value, property. Taking one negative and one positive point, the derivative values are \(-1\) and \(1\), so every intermediate value—particularly \(0\)—must occur between them. The proposed derivative has no zero value away from zero. If its value at zero is set to zero, apply the same argument on an interval from a negative point to a small positive point while demanding all intermediate derivative values, such as \(1/2\); those are still absent. Thus the jump profile cannot be a derivative. The function \(|x|\) fails instead by having no derivative at the jump point.


</details>

### ANA-CH10-E017 — Exercise 17: a certified exponential approximation

Use Taylor's theorem to approximate \(e^{0.1}\) by \(1+0.1+0.1^2/2\) and give a rigorous error bound.


<details>
<summary>Hint 1</summary>

Expand about zero through degree two and retain the Lagrange remainder.

</details>
<details>
<summary>Hint 2</summary>

Bound the third derivative on the entire segment from zero to the evaluation point.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH10-E017 — Worked answer

Taylor's theorem through degree two gives

\[e^x=1+x+x^2/2+e^\xi x^3/6\]

for some \(\xi\) between \(0\) and \(x\). With \(x=0.1\), \(e^\xi\le e^{0.1}<1.106\) (a coarser certified bound such as \(e^{0.1}<2\) also suffices). Therefore the error is below \(1.106\cdot 0.001/6<0.000185\). The approximation is \(1.105\), so the theorem certifies \(e^{0.1}\) within \(0.000185\) of that value.


</details>

### ANA-CH10-E018 — Exercise 18: asymptotic remainder versus error budget

The statement \(\sin x=x-x^3/6+o(x^3)\) is proposed near zero. Explain what it says, identify the corrected small-order term, and give a usable bound from Taylor's theorem.


<details>
<summary>Hint 1</summary>

Compare the sine function with the cubic polynomial using a higher Taylor degree whose next even coefficient is zero.

</details>
<details>
<summary>Hint 2</summary>

A fifth-derivative bound gives a numerical estimate stronger than the little-order statement.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH10-E018 — Worked answer

The displayed claim is not sharp: after subtracting \(x-x^3/6\), the remainder is of order \(x^5\), hence \(o(x^3)\), so it is true but discards useful information. Taylor's theorem through degree four has the same polynomial because the even derivatives at zero vanish. Since the fifth derivative of sine has absolute value at most one,

\(|\sin x-(x-x^3/6)|\le |x|^5/120\).

The little-\(o\) statement says the remainder divided by \(x^3\) tends to zero; it does not alone tell how small \(x\) must be for a requested decimal error. The explicit fifth-order bound does.


</details>

### ANA-CH10-E019 — Exercise 19: differentiability does not imply continuous derivative

Define \(f(0)=0\) and \(f(x)=x^2 \sin(1/x^2)\) for \(x\ne 0\). Prove \(f\) is differentiable at zero and show its derivative is not continuous there.


<details>
<summary>Hint 1</summary>

At zero, estimate the difference quotient directly without differentiating the oscillating formula there.

</details>
<details>
<summary>Hint 2</summary>

Away from zero apply the chain rule, then choose points where the cosine factor equals one.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH10-E019 — Worked answer

At zero the difference quotient is \(h \sin(1/h^2)\), whose absolute value is at most \(|h|\), so it tends to zero and \(f'(0)=0\). For \(x\ne 0\), the product and chain rules give

\(f'(x)=2x \sin(1/x^2)-2x^{-1} \cos(1/x^2)\).

Along points with \(1/x^2=2\pi k\), the cosine term equals one and the derivative has magnitude growing like \(2/|x|\). Thus \(f'(x)\) does not approach \(0=f'(0)\) and is unbounded near zero. Differentiability is a pointwise first-order property; continuity of the derivative is extra regularity.


</details>

### ANA-CH10-E020 — Exercise 20: a complete theorem audit

Let \(g(x)=x^{2/3}\) on \([-1,1]\). Determine continuity, differentiability, extrema, and whether Rolle's theorem applies. Explain how this one example blocks an invalid proof.


<details>
<summary>Hint 1</summary>

Check interior differentiability separately from continuity and endpoint equality.

</details>
<details>
<summary>Hint 2</summary>

The two-sided quotient at zero exposes why the interior minimum need not have a horizontal tangent.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH10-E020 — Worked answer

The function is continuous on the whole interval and has equal endpoint values \(g(-1)=g(1)=1\). It has a minimum \(0\) at the interior point zero. For \(x>0\), \(g'(x)=(2/3)x^{-1/3}>0\); for \(x<0\), \(g'(x)=-(2/3)(-x)^{-1/3}<0\). At zero the quotient \(g(h)/h\) has unbounded one-sided behavior, so no finite derivative exists. Rolle's theorem does not apply because interior differentiability fails, and indeed there is no point where the existing derivative equals zero. An argument using only continuity and endpoint equality to assert a horizontal tangent has silently omitted the differentiability hypothesis.


</details>

## 12. Continue the route

The later chapter, [Uniform Convergence and Limit Interchange](uniform-convergence.md), asks when continuity, integration, and differentiation survive a limit of functions. Its proofs reuse compactness, derivative bounds, and the same quantifier ledger developed here.

Return to the [book overview](#/books/proof-safe-real-analysis) for a compact theorem-and-counterexample index.

## Sources and retained provenance

Primary author-text further reading: Jiří Lebl, [Basic Analysis, Chapter 4, The Derivative](https://www.jirka.org/ra/html/der_chapter.html), and [§4.3, Taylor’s theorem](https://www.jirka.org/ra/html/sec_taylor.html). The additional labeled proofs and worked examples above are original exposition; the retained earlier-edition mathematical content and exercise answers remain in this source.

## Summary

The derivative is a finite difference-quotient limit, stronger than continuity but weaker than continuous differentiability. Algebra and composition rules require legal local domains. Fermat, Rolle and the mean value theorem explain how interior slopes control output changes on a whole interval, while Darboux shows why derivatives cannot jump over intermediate values. Endpoint continuity, interval structure and finite Taylor remainder hypotheses remain separate obligations. The next Taylor chapter sharpens local approximation and connects derivative information to convexity.
