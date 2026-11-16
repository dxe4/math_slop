# 9. Riemann integration: agreement of every sample choice

## Purpose and prerequisites

An integral is a number forced by increasingly fine information about a bounded function. We will prove the Darboux criterion, exhibit broad integrable classes, and derive both forms of the Fundamental Theorem of Calculus (FTC). You need [completeness](completeness.md), [compactness](topology.md), [uniform continuity](uniform-continuity.md), and the Mean Value Theorem from [differentiation](differentiation.md). The definition of an integral here does **not** assume an antiderivative. A signed function may be negative, and a densely oscillating function may defeat every sample grid.

## Upper and lower sums

Let \(f:[a,b]\to\mathbb R\) be bounded, with \(a<b\). A partition is \(P=(a=x_0<x_1<\cdots <x_m=b)\). For \(I_i=[x_{i-1},x_i]\), put \(m_i=\inf_{I_i}f\), \(M_i=\sup_{I_i}f\), and \(\Delta x_i=x_i-x_{i-1}\). Completeness of \(\mathbb R\) and boundedness of \(f\) make these finite numbers. Define

\[
L(f,P)=\sum_{i=1}^m m_i\Delta x_i,
\qquad U(f,P)=\sum_{i=1}^m M_i\Delta x_i.
\]

The gap is \(U(f,P)-L(f,P)=\sum_i\operatorname{osc}(f,I_i)\Delta x_i\), where \(\operatorname{osc}(f,I)=\sup_I f-\inf_I f\). If a point \(c\) is inserted into a partition cell \([u,v]\), its old lower contribution \(m(v-u)\) is no greater than the two new lower contributions, because the new infima are at least \(m\). Similarly the new upper contributions are no greater than \(M(v-u)\). Repeating this argument shows that a refinement increases \(L\) and decreases \(U\).

For *any* partitions \(P,Q\), their union of endpoints is a common refinement \(R\). Thus \(L(f,P)\le L(f,R)\le U(f,R)\le U(f,Q)\). In particular, the lower integral \(\underline I=\sup_P L(f,P)\) and upper integral \(\overline I=\inf_P U(f,P)\) exist, are finite, and satisfy \(\underline I\le\overline I\).

**Definition and criterion.** The bounded function \(f\) is Riemann integrable on \([a,b]\) when \(\underline I=\overline I\). Their common value is \(\int_a^b f(x)\,dx\). Equivalently,

\[
\forall\varepsilon>0\quad\exists P\quad U(f,P)-L(f,P)<\varepsilon.
\]

**Proof of equivalence.** If the integrals agree at \(I\), choose \(P_1\) with \(L(f,P_1)>I-\varepsilon/2\) and \(P_2\) with \(U(f,P_2)<I+\varepsilon/2\). Their common refinement \(P\) has a gap less than \(\varepsilon\). Conversely, for any \(P\), \(L(f,P)\le\underline I\le\overline I\le U(f,P)\). Hence \(0\le\overline I-\underline I\le U(f,P)-L(f,P)\). Arbitrarily small gaps force equality. ∎

This proof explains the order of quantifiers. The partition may depend on \(\varepsilon\), but **every** possible sample value on each cell is controlled by its upper and lower bounds. A finite plot or one quadrature run cannot establish this condition.

## Tagged sums really converge to the Darboux value

A tagged sum chooses \(t_i\in I_i\) and sets \(S(f,P,t)=\sum_i f(t_i)\Delta x_i\). It always lies between \(L(f,P)\) and \(U(f,P)\). Thus if \(P\) has a small Darboux gap, every tagged sum on \(P\) or a refinement is close to the integral. The usual mesh-limit definition permits *any* sufficiently fine partition, whether or not it refines a chosen one. Here is the missing comparison.

Let \(|f|\le B\), and fix a partition \(P_0\) with \(r\) interior cut points. For another partition \(Q\), write \(R=P_0\cup Q\) and let \(\|Q\|\) be its largest cell width. Only cells of \(Q\) containing an interior cut of \(P_0\) can change their contribution on refining to \(R\); their total width is at most \(r\|Q\|\). An upper contribution can fall by at most \(2B\) times the cell width, and a lower contribution can rise by at most the same amount. Therefore

\[
U(f,Q)\le U(f,P_0)+2Br\|Q\|,
\qquad L(f,Q)\ge L(f,P_0)-2Br\|Q\|.
\]

If \(f\) is Darboux integrable, choose \(P_0\) with gap below \(\varepsilon/2\), then take \(\|Q\|\) small enough that \(2Br\|Q\|<\varepsilon/2\). Every tagged sum on \(Q\) is then within \(\varepsilon\) of the integral. Conversely, if all tagged sums for all sufficiently fine partitions approach one number, then on any such partition choose tags arbitrarily close to the cell suprema and, separately, to the cell infima. Because there are finitely many cells, the two tagged sums can be made arbitrarily close to \(U(f,P)\) and \(L(f,P)\). Their common-limit condition makes the gap arbitrarily small, so the Darboux criterion holds. This establishes equivalence with the familiar Riemann-sum definition, without silently restricting to one preferred sequence of partitions.

## Which functions pass the criterion?

**Continuous functions.** If \(f\) is continuous on \([a,b]\), the Extreme Value Theorem bounds it, and Heine–Cantor gives uniform continuity. Given \(\varepsilon>0\), choose \(\delta>0\) such that \(|s-t|<\delta\) implies \(|f(s)-f(t)|<\varepsilon/(2(b-a))\). Choose a partition with every width less than \(\delta\). On each cell, all function values differ by less than that amount; hence its oscillation is at most that amount. Summing yields \(U-L\le\varepsilon/2<\varepsilon\). Continuity at each point supplies the conclusion only after compactness gives one \(\delta\) for the whole interval.

**Bounded monotone functions.** If \(f\) is nondecreasing, use \(n\) equal cells of width \(h=(b-a)/n\). On each cell the infimum and supremum are its endpoint values, even at a jump. Therefore

\[
U-L=h\sum_{i=1}^{n}\bigl(f(x_i)-f(x_{i-1})\bigr)
=\frac{b-a}{n}\bigl(f(b)-f(a)\bigr)\longrightarrow0.
\]

The decreasing case follows by applying this to \(-f\). For instance, the step function equal to \(0\) on \([0,1/2)\) and \(1\) on \([1/2,1]\) is integrable, although it is discontinuous at \(1/2\). Uniform cells need not avoid the jump; their total uncertain width tends to zero.

**Changing finitely many values.** Suppose \(f\) is integrable, \(g\) is bounded, and \(g=f\) except at \(k\) points. Then \(g\) is integrable with the same integral. Let \(|f|,|g|\le B\). On any partition \(Q\), a modified point can belong to at most two closed cells. Therefore at most \(2k\) cells can have different tagged values for \(f\) and \(g\), and the two tagged sums differ by at most \(4Bk\|Q\|\). As \(\|Q\|\to0\), every tagged sum for \(f\) tends to its integral, so the same is true of every tagged sum for \(g\). The equivalence proved above gives the claim, including equality of the integrals. In particular, a function continuous on finitely many closed pieces except for finitely many assigned jump values is integrable, because each piece has a continuous extension and the pieces can be joined at their endpoints.

### Compact exceptional sets with arbitrarily short covers

The finite-change argument has a useful quantified extension. It is the *covering property*, not countability by itself, that controls the Darboux gap.

**Lemma 9.1 (Exceptional-set).** Let \(K\subseteq[a,b]\) be compact and suppose that, for every \(\lambda>0\), \(K\) has a finite cover by open intervals whose total length is below \(\lambda\). If \(f:[a,b]\to\mathbb R\) is bounded and continuous at every point of \([a,b]\setminus K\), then \(f\) is Riemann integrable.

**Proof.** Choose \(M\ge0\) with \(|f|\le M\), put \(B=\max(1,M)\), and fix \(\varepsilon>0\). Cover \(K\) by finitely many open intervals with total length below \(\varepsilon/(4B)\), intersect them with \([a,b]\), and merge overlaps. Let \(O\) be their union and put \(G=[a,b]\setminus O\). The set \(G\) is compact and contains no exceptional point, so \(f|_G\) is uniformly continuous. Choose \(\delta>0\) such that \(x,y\in G\) and \(|x-y|<\delta\) imply
\[
|f(x)-f(y)|<\frac{\varepsilon}{2(b-a)}.
\]
Use all endpoints of the finitely many component intervals of \(O\) as partition points, then subdivide every remaining component of \(G\) into cells shorter than \(\delta\). Call the **closures of the cover components** the bad cells; their endpoints can lie outside the open set \(O\), so it would be inaccurate to say that these closed partition cells lie inside \(O\). Their total length is still below \(\varepsilon/(4B)\), and their oscillations are at most \(2M\le2B\), so their contribution to \(U-L\) is below \(\varepsilon/2\). Every other cell lies in \(G\), where its oscillation is below \(\varepsilon/[2(b-a)]\); their total length is at most \(b-a\), so their contribution is below \(\varepsilon/2\). Hence \(U(f,P)-L(f,P)<\varepsilon\), and the Darboux criterion proves integrability. ∎

The compact set \(K=\{0\}\cup\{1/n:n\ge1\}\) has the required covers. Given \(\lambda>0\), choose \(N\) with \(1/N<\lambda/2\). The tail \(\{0\}\cup\{1/n:n\ge N\}\) lies in a one-sided interval of length below \(\lambda/2\), and the finite prefix can be covered by intervals of total length below \(\lambda/2\). Therefore the function equal to \(1\) on \(K\) and \(0\) elsewhere is integrable with integral zero. The lemma proves existence; the value follows because every lower sum is zero and the same covers make upper sums arbitrarily small. This example uses a particular compact countable set with an explicit finite-prefix/tail cover. It does **not** assert without proof that every countable set has the required finite covers.

**Predict before changing the control.** The next scene displays only four support points of the changed set \(\{1\}\cup\{1+1/n:n\ge1\}\) and a teal enclosure for an omitted tail. At the authored value \(c=1.2=1+1/5\), which points belong to the finite prefix, and what exact interval contains every omitted point with \(n\ge5\)? Arbitrary slider positions vary a candidate enclosure; only values tied to an integer cutoff represent that particular tail. If \(c=1+1/N<1.2\) with \(N>5\), the unshown points with indices \(n=5,\ldots,N-1\) are an additional finite-prefix block outside the smaller enclosure; they must be covered separately. The finite display illustrates the cover split and cannot prove the quantified statement for every tolerance.

```mathviz
scene "A finite prefix and an enclosed omitted tail";
domain 0.9 2.1;
range -0.1 2.2;
param c = 1.2 from 1.1 to 1.5;
fn zero(x) = 0;
plot zero color amber as baseline;
polygon tail_enclosure = (1,0), (c,0), (c,c), (1,1) color teal;
point prefix_1 = (2,2) color rose;
point prefix_2 = (1.5,1.5) color rose;
point prefix_3 = (1.3333333333333333,1.3333333333333333) color rose;
point prefix_4 = (1.25,1.25) color rose;
measure tail_width = c-1;
```

At \(c=6/5\), the four rose points correspond to \(n=1,2,3,4\); every omitted support point with \(n\ge5\), together with its limiting point \(1\), lies over \([1,6/5]\). At a smaller cutoff \(c=1+1/N\), \(N>5\), the fixed drawing still omits the finite points indexed \(5\) through \(N-1\), which lie outside \([1,c]\). A proof for a requested Darboux tolerance must cover that additional finite prefix as well as make the tail interval and all finite-prefix cells small enough. The editable polygon is an enclosure, not a rendering of infinitely many points.

### A dense set of discontinuities that still integrates

Let \(T(x)=0\) at irrational points of \([0,1]\), and \(T(p/q)=1/q\) when \(p/q\) is rational in lowest terms with \(q>0\). Every interval contains an irrational, so every lower sum is zero. Given \(\varepsilon>0\), choose \(N\) with \(1/N<\varepsilon/2\). Only finitely many rationals in \([0,1]\) have reduced denominator less than \(N\). Enclose them in finitely many small partition cells of total length less than \(\varepsilon/2\). Choose the **interior cuts** outside that finite set; the fixed endpoints \(0\) and \(1\) are covered by one-sided boundary cells. On every remaining closed cell \(T\le1/N\), whereas on the exceptional cells \(T\le1\). Thus \(U(T,P)<\varepsilon/2+1/N<\varepsilon\). The criterion proves \(\int_0^1T=0\).

To check the promised contrast, \(T\) is discontinuous at every rational \(p/q\): irrational inputs can approach it while their outputs stay zero, different from \(T(p/q)=1/q\). At an irrational \(z\), given \(\varepsilon>0\), choose \(N\) with \(1/N<\varepsilon\). The finitely many rationals of denominator below \(N\) have positive distance from \(z\); choose a neighborhood of \(z\) avoiding them. Inside that neighborhood every rational output is at most \(1/N\), and every irrational output is zero, so \(|T(x)-T(z)|<\varepsilon\). Thus \(T\) is continuous at every irrational. Its discontinuity set is dense, yet its large values occur only at finitely many points for each fixed threshold; that is why the Darboux gap can shrink.

### A function that fails on every interval

Let \(D(x)=1\) for rational \(x\in[0,1]\) and \(D(x)=0\) for irrational \(x\). Both kinds of point are dense. Every nontrivial partition cell has infimum \(0\) and supremum \(1\), so \(L(D,P)=0\) and \(U(D,P)=1\) for **every** \(P\). It is not Riemann integrable. No finite rational-looking sample can settle this all-points claim. The contrast with \(T\) is a partition argument, not a picture.

## Integral rules and their proof obligations

Use \(\int_a^a f=0\) and \(\int_b^a f=-\int_a^b f\) once the increasing-direction integral exists. The following rules apply to Riemann-integrable functions on the indicated closed intervals.

* If \(f,g\) are integrable, so are \(f+g\) and \(cf\), and the integral is linear. On each cell, \(\operatorname{osc}(f+g)\le\operatorname{osc}(f)+\operatorname{osc}(g)\). Combine small-gap partitions by a common refinement. Scaling multiplies the gap by \(|c|\); tagged-sum identities then pass to the integral.
* If \(f,g\) are integrable and bounded by \(A,B\) in absolute value, then \(fg\) is integrable, since \(\operatorname{osc}(fg,I)\le A\operatorname{osc}(g,I)+B\operatorname{osc}(f,I)\) on each cell. This matters when we multiply a substituted rate by a derivative.
* If \(f\le g\), then \(\int_a^b f\le\int_a^b g\), because lower and upper sums of \(f\) do not exceed the corresponding sums of \(g\). Consequently \(|\int_a^b f|\le(b-a)\sup|f|\).
* If \(a<c<b\), then \(f\) is integrable on \([a,b]\) exactly when its restrictions to \([a,c]\) and \([c,b]\) are integrable, and \(\int_a^b f=\int_a^c f+\int_c^b f\). For the forward direction, insert \(c\) in a small-gap partition; each side's nonnegative gap is at most the total gap. For the reverse direction, join small-gap partitions of the two sides. The identity follows from the corresponding finite-sum identity.

These arguments also justify the estimate \(|\int_x^y f|\le M|y-x|\) when \(|f|\le M\), in either orientation. The rule is useful before an antiderivative is known.

## Investigation: samples and bounds for \(x^2\)

Before changing \(n\), predict how left, midpoint, and right rectangles for \(x^2\) on \([0,1]\) compare. The midpoint height is neither the minimum nor maximum on a cell. For equal cells monotonicity gives

\[
U-L=\frac1n\sum_{i=1}^{n}\left[\left(\frac in\right)^2-\left(\frac{i-1}{n}\right)^2\right]=\frac1n.
\]

This exact telescoping gap controls every tagged rule as \(n\) grows. Record a prediction, then use the scene as a check on the direction of the estimates; do not infer the all-partitions result from pixels.

```mathviz
scene "From rectangle estimates to an integral";
domain 0 1;
range 0 1.2;
param n = 8 from 2 to 64;
fn f(x) = x^2;
plot f color blue;
riemann f from 0 to 1 count n;
```

## The Fundamental Theorem: local rate and total change

For an integrable \(f:[a,b]\to\mathbb R\), set \(F(x)=\int_a^x f(t)\,dt\). The integral estimate gives \(|F(y)-F(x)|\le M|y-x|\) for \(M=\sup|f|\). Thus \(F\) is continuous everywhere on \([a,b]\), whether or not \(f\) is continuous.

**FTC I (differentiation of accumulation).** If \(f\) is integrable on \([a,b]\) and continuous at an interior point \(x\), then \(F'(x)=f(x)\). If \(f\) is continuous on all of \([a,b]\), this holds at every interior point, with one-sided derivatives at the endpoints.

**Proof.** For nonzero \(h\) with \(x+h\in[a,b]\), interval additivity and orientation give

\[
\frac{F(x+h)-F(x)}h-f(x)
=\frac1h\int_x^{x+h}\bigl(f(t)-f(x)\bigr)\,dt.
\]

The absolute value is at most \(\sup_{t\text{ between }x\text{ and }x+h}|f(t)-f(x)|\). Continuity at \(x\) makes this supremum tend to zero. The proof works for positive and negative \(h\); it does not require a derivative of \(f\). ∎

**FTC II (evaluation).** Suppose \(f\) is Riemann integrable on \([a,b]\), and \(G\) is continuous on \([a,b]\), differentiable on \((a,b)\), with \(G'=f\) there. Then

\[
\int_a^b f(t)\,dt=G(b)-G(a).
\]

**Proof.** On each cell \([x_{i-1},x_i]\) of any partition, MVT supplies \(c_i\in(x_{i-1},x_i)\) such that \(G(x_i)-G(x_{i-1})=f(c_i)\Delta x_i\). Summing telescopes to \(G(b)-G(a)=S(f,P,c)\). Since \(f\) is integrable, all sufficiently fine tagged sums approach its integral. Hence the constant left side equals the integral. ∎

When \(f\) is continuous, an alternative proof uses FTC I: both \(G\) and \(F\) have derivative \(f\), so MVT makes \(G-F\) constant. The stronger statement above shows exactly which extra assumption is needed when \(f\) is discontinuous: its integral must exist. It is incorrect to use an antiderivative as the *definition* of the Riemann integral, or to assume every bounded function has one.

### Worked contrast at a discontinuity

Let \(v(t)=-1\) for \(t<0\), \(v(t)=1\) for \(t\ge0\), on \([-1,1]\), and \(V(x)=\int_0^x v(t)\,dt\). The step function is integrable. Direct interval calculations give \(V(x)=|x|\). Hence \(V\) is continuous but has left derivative \(-1\) and right derivative \(1\) at zero; FTC I does not claim \(V'(0)=v(0)\), because \(v\) is discontinuous there. At all nonzero points the local continuity hypothesis holds and \(V'=v\).

### Substitution as a consequence, with orientation

Let \(g:[\alpha,\beta]\to J\) be continuously differentiable, and let \(f:J\to\mathbb R\) be continuous on an **open** interval \(J\) containing the image of \(g\). FTC I provides an antiderivative \(F(u)=\int_{u_0}^{u}f(s)\,ds\) for a fixed \(u_0\in J\). The chain rule gives \((F\circ g)'(t)=f(g(t))g'(t)\). This integrand is continuous, so FTC II yields

\[
\int_\alpha^\beta f(g(t))g'(t)\,dt
=\int_{g(\alpha)}^{g(\beta)} f(u)\,du.
\]

No monotonicity of \(g\) is needed: reversing direction is handled by oriented integrals. For example, with \(g(t)=t^2\) on \([-1,1]\) and \(f(u)=1\), the left integral is \(\int_{-1}^1 2t\,dt=0\), matching the right integral from \(1\) to \(1\). Splitting into monotone branches is essential only if one tries to reinterpret the substitution as unsigned area.

## Constructing logarithms and exponentials without circular rules

The integrand \(1/t\) is continuous on every compact positive interval. We can therefore define, for \(x>0\),

\[
\log x=\int_1^x\frac{dt}{t}.
\]

This is a *definition* based on the Riemann integral already constructed. FTC I gives \((\log x)'=1/x\), so \(\log\) is continuous and strictly increasing on \((0,\infty)\). Also \(\log1=0\). We now prove the multiplication law, rather than use it to justify the derivative. Fix \(a>0\) and set \(H(b)=\log(ab)-\log b\) for \(b>0\). The chain rule and the derivative just proved give \(H'(b)=a/(ab)-1/b=0\). MVT makes \(H\) constant, and \(H(1)=\log a\). Hence \(\log(ab)=\log a+\log b\) for all positive \(a,b\).

The number \(c=\log2\) is positive: \(1/t\ge1/2\) on \([1,2]\), so \(c\ge1/2\). The multiplication law gives \(\log(2^n)=nc\to\infty\) and \(\log(2^{-n})=-nc\to-\infty\). Since \(\log\) is continuous and strictly increasing, IVT now shows its range is all of \(\mathbb R\). Define \(\exp:\mathbb R\to(0,\infty)\) to be its inverse. The local inverse theorem applies at every positive input because \((\log x)'=1/x\ne0\), so

\[
\exp'(y)=\frac1{\log'(\exp y)}=\exp y.
\]

Moreover \(\exp0=1\), and the multiplication law plus injectivity gives \(\exp(x+y)=\exp x\,\exp y\). We may now define \(x^r=\exp(r\log x)\) for \(x>0\) and real \(r\), and derive \((x^r)'=r x^{r-1}\) by the chain rule. This order avoids assuming a derivative of \(\log\) or \(\exp\) while defining the very functions to which that rule would apply. It also supplies the exponential used in the smooth nonanalytic example in [differentiation](differentiation.md).

## Infinite intervals and singular endpoints

The Riemann definition above requires a bounded function on a compact interval. A different, limiting definition is needed when the interval or integrand is unbounded. If \(f\) is integrable on every \([a,R]\) with \(R>a\), define

\[
\int_a^\infty f(x)\,dx
=\lim_{R\to\infty}\int_a^R f(x)\,dx
\]

only when the limit exists as a finite real number. For a singular left endpoint, require integrability on each \([a+\delta,b]\) and take \(\lim_{\delta\downarrow0}\int_{a+\delta}^b f\). At an interior singularity \(c\), define \(\int_a^b f\) only when the separate limits from \(a\) to \(c\) and from \(c\) to \(b\) both converge. A symmetric cancellation is a principal value, not convergence of the improper integral: \(\int_{-1}^{-\delta}1/x\,dx+\int_\delta^1 1/x\,dx=0\) for every \(\delta>0\), while the two one-sided terms diverge to \(-\infty\) and \(+\infty\).

For nonnegative functions, comparison has a short proof. If \(0\le f\le g\) on a tail and \(\int_a^\infty g\) converges, then the partial integrals of \(f\) increase with \(R\) and are bounded above by a fixed initial contribution plus the convergent tail integral of \(g\). The monotone convergence principle for real numbers gives a finite limit. Conversely, if the partial integrals of \(f\) are unbounded, those of \(g\) are unbounded. The same argument applies near a singular endpoint with its cutoff moving toward that endpoint. The inequality must be between **nonnegative** functions on the relevant tail; cancellation requires a different argument.

As a benchmark, for real \(p\), the power rule and the newly constructed logarithm give

\[
\int_1^R x^{-p}\,dx=
\begin{cases}
\dfrac{R^{1-p}-1}{1-p},&p\ne1,\\[4pt]
\log R,&p=1.
\end{cases}
\]

Thus \(\int_1^\infty x^{-p}\,dx\) converges exactly for \(p>1\). The cutoff calculation from \(\delta\) to \(1\) similarly shows \(\int_0^1x^{-p}\,dx\) converges exactly for \(p<1\). An integrand can be unbounded and have a convergent improper integral, as \(x^{-1/2}\) does near zero; it is still not Riemann integrable on \([0,1]\) under our bounded-function definition.

### The integral-series comparison

If \(h:[1,\infty)\to[0,\infty)\) is continuous and nonincreasing, then for each integer \(n\ge1\), \(h(n+1)\le\int_n^{n+1}h(x)\,dx\le h(n)\). Adding cells gives

\[
\int_1^{N+1}h(x)\,dx
\le\sum_{n=1}^{N}h(n)
\le h(1)+\int_1^N h(x)\,dx.
\]

Both the partial sums and partial integrals are nondecreasing, so these inequalities show that \(\sum_{n=1}^\infty h(n)\) converges exactly when \(\int_1^\infty h(x)\,dx\) converges. For \(h(x)=1/x\), the integral is \(\log R\to\infty\), proving harmonic-series divergence; for \(h(x)=1/x^2\), the integral is finite, proving convergence of the square-reciprocal series. The monotonicity hypothesis controls each rectangle, and dropping it would invalidate the displayed inequalities.

## Independent practice: partitions before antiderivatives

For each task, first choose whether the issue is existence, value, or differentiability of an accumulation function. Open the staged hints only after writing that choice. Record a proof before comparing the solution and rubric; the exercise tool saves self-review, not an automatic proof judgement.

```exercise
{"id":"analysis-integral-darboux-choice","type":"choice","prompt":"A bounded \\(f\\) has one partition \\(P\\) with \\(U(f,P)-L(f,P)=0.01\\). Which conclusion is justified?","options":[{"label":"The integral exists because the gap is small.","correct":false,"feedback":"One fixed positive gap cannot satisfy the every-epsilon criterion."},{"label":"Every tagged sum on this partition lies in an interval of width 0.01; integrability still needs arbitrarily small gaps.","correct":true,"feedback":"Correct. A finite tolerance is evidence for that tolerance, not the limiting criterion."},{"label":"The integral cannot exist because the gap is nonzero.","correct":false,"feedback":"Integrable nonconstant functions often have nonzero gaps on finite partitions."}],"hints":["Compare the statement with \\(\\forall\\varepsilon>0\\,\\exists P\\) in the criterion."],"solution":"The gap confines every tagged sum on \\(P\\) between two bounds separated by 0.01. The Darboux criterion requires a possibly different partition for every positive epsilon, including epsilon much smaller than 0.01. One positive gap neither proves nor disproves integrability."}
```

```exercise
{"id":"analysis-integral-xdirichlet","type":"written","prompt":"On \\([0,1]\\), let \\(h(x)=x\\) if \\(x\\) is rational and \\(h(x)=0\\) if \\(x\\) is irrational. Prove \\(h\\) is not Riemann integrable, even though \\(h\\) is continuous at zero. Calculate its lower integral and upper integral.","hints":["Every cell has an irrational, so its infimum is zero.","On a cell \\([u,v]\\), rationals approach \\(v\\), so the supremum is \\(v\\), even if \\(v\\) itself is irrational."],"rubric":["Proves continuity at zero using |h(x)|≤x","Finds infimum 0 and supremum equal to the right endpoint on every cell","Shows upper sums can approach 1/2 but never below the integral of x","Concludes lower integral 0 and upper integral 1/2, so no Riemann integral"],"solution":"Since \\(|h(x)-h(0)|\\le x\\) for \\(x\\ge0\\), \\(h\\) is continuous at zero. On each cell \\([u,v]\\), density of irrationals gives infimum 0, while rational points arbitrarily near \\(v\\) give supremum \\(v\\). Thus every lower sum is 0. The upper sum is \\(\\sum_i x_i\\Delta x_i\\), the right-endpoint sum for \\(x\\). Since \\(x\\) is integrable with integral 1/2 (by FTC II using \\(G=x^2/2\\), or by direct upper/lower sums), the infimum of these upper sums is 1/2; equivalently their difference from 1/2 is \\(\\frac12\\sum_i(\\Delta x_i)^2\\), which tends to zero on uniform partitions and is nonnegative. The two Darboux integrals differ, so \\(h\\) is not integrable."}
```

```exercise
{"id":"analysis-integral-sequence-spikes","type":"written","prompt":"Define \\(s(x)=1\\) when \\(x=1/n\\) for some positive integer \\(n\\), and \\(s(x)=0\\) otherwise on \\([0,1]\\). Prove directly with Darboux sums that \\(s\\) is integrable and find its integral. A classmate says 'it has infinitely many discontinuities, so it cannot be integrable'; locate the failure in that reasoning.","hints":["Every cell contains a point outside the countable spike set, so lower sums vanish.","Separate the finitely many spikes with n<N from the tail. Choose a short cutoff c strictly greater than 1/N so the spike at 1/N stays inside the short first cell."],"rubric":["Establishes all lower sums are zero","For any epsilon, selects N so the tail lies in a short initial interval","Covers finitely many remaining spikes by cells of arbitrarily small total length","Concludes upper sums can be arbitrarily small and explains why infinitely many discontinuities are compatible with integrability"],"solution":"The spike set consists of rational points, so every nontrivial interval contains an irrational and every lower sum is zero. Given \\(\\varepsilon>0\\), choose \\(N\\ge2\\) so large that \\(1/N<\\varepsilon/2\\). Choose a nonspike cutoff \\(c\\) with \\(1/N<c<\\min(1/(N-1),\\varepsilon/2)\\). All spikes \\(1/n\\) with \\(n\\ge N\\) then lie strictly inside \\([0,c]\\) except possibly zero, which is not a spike. Enclose each of the finitely many remaining spikes \\(1,1/2,\\ldots,1/(N-1)\\) in one-sided or interior partition cells of total length less than \\(\\varepsilon/2\\), choosing interior cuts away from spike points. All other closed cells have supremum zero, while covered cells have supremum at most 1. Hence \\(U(s,P)<c+\\varepsilon/2<\\varepsilon\\), and the integral is zero. Infinitely many discontinuities are compatible with a vanishing Darboux gap when the cells that can contain large oscillation have arbitrarily small total length."}
```

The first problem concentrates its tail at the endpoint \(0\). The next shifts the accumulation point into the interval and changes the spike values, forcing an interior tail cell and a separate comparison with dense oscillation.

```exercise
{"id":"analysis-integral-shifted-support","type":"written","prompt":"On [0,2], let S={1}∪{1+1/n:n≥1}, and define f(x)=x for x∈S and f(x)=0 otherwise. Prove directly with Darboux sums that f is integrable with integral zero. Your partition must separate a finite prefix from a quantified tail; a finite display of support points is not a proof. Then contrast this with g(x)=x for rational x and 0 for irrational x on [0,2].","hints":["The complement of S is dense, so all lower sums vanish.","Put the accumulation point 1 in the interior of one short bad cell [1−d,c]; a cell ending at 1 would still contain f(1)=1.","For g, every cell [u,v] has infimum 0 and supremum v."],"rubric":["Establishes all lower sums of f are zero","Chooses an integer cutoff and encloses 1 and the entire infinite tail in one short interior cell","Covers the finite prefix, including the endpoint 2, with cells of controlled total length","Uses |f|≤2 to make the upper sum arbitrarily small and concludes integral zero","Computes lower integral 0 and upper integral 2 for the rational contrast"],"solution":"The complement of S is dense, so every nontrivial partition cell contains a zero of f and every lower sum is zero. Given ε>0, choose N≥2 with 1/N<ε/16. Choose c∉S with 1+1/N<c<min(1+1/(N−1),1+ε/8), and choose d∈(0,1) with d<ε/8. Then 1 and every 1+1/n with n≥N lie in the single interior cell [1−d,c], whose length is below ε/4. Enclose each of the finitely many remaining points 1+1/n, n<N, in disjoint partition cells of total length below ε/4, using a one-sided boundary cell for the point 2. Choose all other cuts outside S. Since 0≤f≤2, only these bad cells contribute and U(f,P)<2(ε/4+ε/4)=ε. Thus f is integrable and its integral is zero. For g, density of irrationals gives cell infimum zero, while rationals approaching a cell's right endpoint v give supremum v. Hence the lower integral is zero and the upper integral equals ∫_0^2 x dx=2, so g is not integrable. The number of discontinuities is not decisive; the Darboux oscillation carried by every partition is.","transfer":"Replace the values x on S by any assigned values with absolute value at most M, still zero off S. Prove with the same interior tail cell and finite-prefix cells that the integral is zero, and identify where boundedness is used.","transferSolution":"Use [1−d,c] for the accumulation point and tail, and cover the finite prefix—including a one-sided cell at 2—with cells whose total length can be made arbitrarily small. Outside their closures the function is zero. On a bad cell both infimum and supremum lie between −M and M, so its contribution to the Darboux gap is at most 2M times its length; its upper and lower contributions are separately bounded in absolute value by M times its length. Sending the total bad-cell length to zero makes both Darboux integrals zero. Boundedness supplies this common oscillation budget; without it the compact-interval Riemann definition is not even satisfied."}
```

```exercise
{"id":"analysis-ftc-point-spike","type":"written","prompt":"Let \\(f(x)=x\\) for \\(x\\ne0\\) and \\(f(0)=5\\) on \\([-1,1]\\), and let \\(F(x)=\\int_0^x f(t)\\,dt\\). Prove \\(f\\) is integrable, find \\(F\\), and compare \\(F'(0)\\) with \\(f(0)\\). Explain exactly which FTC I hypothesis is missing at zero.","hints":["Changing a function at one point does not change its Riemann integral.","Calculate \\(\\int_0^x t\\,dt\\) in both orientations."],"rubric":["Justifies integrability by a finite point change or a direct partition argument","Computes F(x)=x²/2 for all x in the interval","Finds F'(0)=0 and f(0)=5","States that pointwise continuity of f at zero is the missing FTC I hypothesis"],"solution":"The continuous function \\(t\\mapsto t\\) is integrable, and changing its value only at zero preserves integrability and every integral value. Thus \\(F(x)=\\int_0^x t\\,dt=x^2/2\\), including negative \\(x\\) by orientation. Its derivative at zero is \\(\\lim_{h\\to0}(h^2/2)/h=0\\), while \\(f(0)=5\\). FTC I only asserts \\(F'(x)=f(x)\\) where \\(f\\) is continuous at \\(x\\); here \\(\\lim_{x\\to0}f(x)=0\\ne f(0)\\)."}
```

```exercise
{"id":"analysis-ftc-evaluation-proof","type":"written","prompt":"A proposed proof says: 'Since \\(G'=f\\), the integral \\(\\int_a^b f\\) exists and equals \\(G(b)-G(a)\\).' Repair the statement and proof using tagged sums. In your answer distinguish existence of an antiderivative from the Riemann integrability assumption.","hints":["State the closed-interval continuity and interior differentiability assumptions on G, plus integrability of f.","Apply MVT separately on every partition cell, then use the mesh limit of tagged sums."],"rubric":["States f must be Riemann integrable on [a,b] for this FTC II form","States G is continuous on [a,b] and differentiable on (a,b) with G'=f there","Uses MVT on each cell to express each increment as a tagged term","Telescopes and passes to the integral using integrability rather than assuming existence"],"solution":"Assume \\(f\\) is Riemann integrable on \\([a,b]\\), and \\(G\\) is continuous on \\([a,b]\\), differentiable on \\((a,b)\\), with \\(G'=f\\) there. For a partition, MVT on each cell gives \\(G(x_i)-G(x_{i-1})=f(c_i)(x_i-x_{i-1})\\) for an interior tag \\(c_i\\). Summing yields \\(G(b)-G(a)=\\sum_i f(c_i)\\Delta x_i\\). Integrability says all such tagged sums tend to \\(\\int_a^b f\\) as mesh tends to zero. Hence the equality follows. The equation \\(G'=f\\) alone does not supply the integrability needed to identify a Riemann integral."}
```

```exercise
{"id":"analysis-substitution-turn","type":"written","prompt":"Let \\(g(t)=t^2-1\\) on \\([-1,1]\\) and \\(f(u)=u^2\\). Evaluate \\(\\int_{-1}^1 f(g(t))g'(t)\\,dt\\) by substitution. Then evaluate the two halves separately and explain why an unsigned-area interpretation would be wrong.","hints":["The composed integrand is \\(2t(t^2-1)^2\\), which changes sign at zero.","The image travels from 0 down to -1 and back to 0."],"rubric":["Checks continuity and C1 hypotheses for substitution","Uses oriented endpoints g(-1)=g(1)=0 to obtain total zero","Computes each half as -1/3 and +1/3","Explains cancellation from reversed traversal rather than treating both halves as positive area"],"solution":"The polynomial \\(g\\) is \\(C^1\\) and \\(f\\) is continuous. Substitution gives \\(\\int_{-1}^1 f(g(t))g'(t)dt=\\int_{g(-1)}^{g(1)}u^2du=\\int_0^0u^2du=0\\). On \\([-1,0]\\), \\(g\\) runs from 0 to -1, so the integral is \\(\\int_0^{-1}u^2du=-1/3\\). On \\([0,1]\\), it runs from -1 to 0 and gives \\(+1/3\\). The factors \\(g'\\) carry orientation; replacing them by absolute values would compute a different quantity."}
```

```exercise
{"id":"analysis-log-tangent","type":"written","prompt":"Using the integral definition \\(\\log x=\\int_1^x dt/t\\), prove \\(\\log x\\le x-1\\) for every \\(x>0\\), with equality only at 1. State why differentiating \\(\\log\\) is licensed at this point in the course.","hints":["Let \\(H(x)=x-1-\\log x\\). Its derivative changes sign at 1.","FTC I gives \\((\\log x)'=1/x\\) because \\(1/t\\) is continuous on every compact positive interval."],"rubric":["Cites the integral construction and FTC I for the log derivative","Computes H'(x)=1-1/x","Shows H decreases toward 1 and increases after 1","Uses H(1)=0 and strict sign to obtain the inequality and equality case"],"solution":"The function \\(1/t\\) is continuous on each compact interval inside \\((0,\\infty)\\), so the integral definition and FTC I give \\((\\log x)'=1/x\\). Set \\(H(x)=x-1-\\log x\\). Then \\(H'(x)=1-1/x<0\\) on \\((0,1)\\), equals zero at 1, and is positive on \\((1,\\infty)\\). By MVT, H strictly decreases up to 1 and strictly increases after it. Since \\(H(1)=0\\), H is nonnegative, and equality holds only at 1. No logarithm differentiation rule was assumed before the integral construction."}
```

```exercise
{"id":"analysis-improper-two-ends","type":"written","prompt":"Without finding an antiderivative, decide whether \\(\\int_0^\\infty [x^2+\\sqrt{x}]^{-1}\\,dx\\) converges. Treat zero and infinity as separate limits, with explicit comparisons valid on each range.","hints":["On \\((0,1]\\), the denominator is at least \\(\\sqrt{x}\\).","On \\([1,\\infty)\\), the denominator is at least \\(x^2\\)."],"rubric":["Splits the integral at a finite positive point","Uses 0≤f(x)≤x^{-1/2} near zero","Uses 0≤f(x)≤x^{-2} on the infinite tail","Invokes the two convergent power integrals to conclude both separate limits exist"],"solution":"The integrand is nonnegative and continuous on each compact subinterval of \\((0,\\infty)\\). For \\(0<x\\le1\\), \\(0\\le1/(x^2+\\sqrt{x})\\le x^{-1/2}\\), whose improper integral near zero is 2. For \\(x\\ge1\\), \\(0\\le1/(x^2+\\sqrt{x})\\le x^{-2}\\), whose integral from 1 to infinity is 1. The nonnegative comparison theorem gives a finite limit at zero and a finite limit at infinity separately; their sum is the convergent improper integral."}
```

```exercise
{"id":"analysis-integral-exception-diagnostic","type":"choice","prompt":"Which observation can by itself begin a valid Darboux proof for a bounded function with infinitely many discontinuities?","options":[{"label":"For every tolerance, all cells with substantial oscillation can be confined to intervals of sufficiently small total length.","correct":true,"feedback":"This is the quantified mechanism: bounded oscillation times controlled total length makes the Darboux gap small."},{"label":"A plotted grid misses almost all discontinuities.","correct":false,"feedback":"A finite grid says nothing about suprema and infima over every point of a cell."},{"label":"The discontinuity set is infinite, so integrability fails.","correct":false,"feedback":"The compact reciprocal spike set is infinite but can be enclosed by arbitrarily short finite covers."},{"label":"The discontinuity set is countable, so integrability follows without another argument.","correct":false,"feedback":"Countability alone has not supplied the finite interval covers or an oscillation budget required by this Darboux proof."}],"hints":["Ask which statement directly bounds the sum of cell oscillation times cell width."],"solution":"Only the first statement gives the needed quantitative route to U(f,P)−L(f,P)<ε. The other statements confuse finite sampling or cardinality with the size of the oscillation contribution."}
```

## Later retrieval

In the cumulative assessment, expect a bounded function for which a plot suggests an answer but a partition argument decides whether the integral exists. Explain the Darboux gap first; if an antiderivative is then used, cite FTC II with its independent integrability hypothesis.
