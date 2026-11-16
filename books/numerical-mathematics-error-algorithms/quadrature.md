
# Quadrature: Newton–Cotes, Romberg, and Gauss

## An integral, a finite rule, and an error statement

A quadrature rule replaces an integral by a finite weighted sum of function values. Three questions must remain separate. Which polynomials does the rule integrate exactly? Under what regularity does its error decrease as resolution increases? How do errors in the supplied values and the accumulation affect the result? Exactness answers the first question, but cannot answer the other two by itself.

This chapter develops interpolatory Newton–Cotes rules, extrapolation through Romberg's table, and Gaussian quadrature. It proves their basic exactness and stability facts, derives several error bounds, and distinguishes an adaptive indicator from a guaranteed error bound. Required preparation is integration, Taylor's theorem, polynomial interpolation, and finite-dimensional orthogonality. The earlier [Numerical Differentiation and Quadrature](differentiation-quadrature.md) chapter retains the original brief bridge; this chapter supplies the separate detailed integration route.

Unless a weight is introduced, the target is $I(f)=\int_a^b f(x)\,dx$ with $a<b$. The nodes, weights, and interval are mathematical inputs. Rounding in them is additional to any rounding in the evaluations of $f$.

## Interpolatory rules and exactness

**Definition 8.1 (Quadrature and degree of exactness).** A rule has the form $Q(f)=\sum_{i=1}^m w_i f(x_i)$. It is exact through degree $d$ if $Q(p)=I(p)$ for every polynomial of degree at most $d$. Its degree of exactness is the largest such $d$, when one exists.

Linearity means it suffices to check a polynomial basis, such as $1,x,\ldots,x^d$. Checking just one cubic is not a proof of degree-three exactness. A change of interval also changes weights: under $x=c+st$, the Jacobian factor $s$ must be included.

For distinct nodes, integrate their Lagrange interpolant. Since $p(x)=\sum_i f(x_i)\ell_i(x)$, the resulting weights are $w_i=\int_a^b\ell_i(x)\,dx$. Every polynomial in the interpolating space is reproduced exactly, so $m$ nodes immediately give degree at least $m-1$. Additional symmetry can increase it. Choosing equally spaced nodes gives Newton–Cotes rules; choosing free nodes to exploit orthogonality leads to Gauss rules.

The one-panel midpoint rule is $(b-a)f((a+b)/2)$. Although based on one value, it integrates linear functions exactly because their odd part about the midpoint has zero integral. The trapezoidal rule is $(b-a)(f(a)+f(b))/2$, obtained by integrating the endpoint line. It is also exact through degree one, but generally gives a different value from the midpoint rule.

With midpoint $c=(a+b)/2$ and half-width $h=(b-a)/2$, integrating the quadratic interpolant gives Simpson's rule
\[
S(f)=\frac h3[f(c-h)+4f(c)+f(c+h)].
\]
It is exact through degree two by construction. The cubic term about $c$ is odd and both its integral and symmetric weighted sum vanish, so it is exact through degree three.

**Example 8.2 (Exactness and error on a quadratic).** On $[0,1]$, the integral of $x^2$ is $1/3$. The one-panel midpoint value is $1/4$, the trapezoid value is $1/2$, and Simpson's value is $(0+4(1/4)+1)/6=1/3$. Midpoint underestimates this convex function and trapezoid overestimates it. Simpson is exact because the target lies in its polynomial exactness class. These conclusions concern exact values and exact arithmetic, before a numerical error budget is added.

## Error bounds with their signs

**Theorem 8.3 (Trapezoidal error identity).** If $f\in C^2[a,b]$, then
\[
I(f)-T(f)=-\frac12\int_a^b(x-a)(b-x)f''(x)\,dx.
\]
Consequently $|I-T|\le (b-a)^3\|f''\|_\infty/12$, and for some $\xi\in[a,b]$ the error equals $-(b-a)^3f''(\xi)/12$.

*Proof.* Put $k(x)=(x-a)(b-x)$. It vanishes at both endpoints, $k'(a)=b-a$, $k'(b)=-(b-a)$, and $k''=-2$. Integrating twice by parts gives
\[
\int_a^b kf''=(b-a)[f(a)+f(b)]-2I(f)=2T(f)-2I(f).
\]
This proves the identity. The kernel is nonnegative and has integral $(b-a)^3/6$, giving the bound. Its weighted average of the continuous function $f''$ lies between the minimum and maximum of $f''$, and the intermediate value theorem supplies the stated $\xi$. ∎

If $f''\ge0$, the error $I-T$ is nonpositive, consistent with the secant lying above the graph. A sign check is useful because reversing the convention from exact-minus-rule to rule-minus-exact reverses every displayed error sign.

For midpoint quadrature, Taylor expansion at the midpoint cancels the linear term on integration. The remainder bound $|f(x)-f(c)-f'(c)(x-c)|\le M_2(x-c)^2/2$ gives $|I-M|\le M_2(b-a)^3/24$. The rule therefore has the same second-order composite scaling as trapezoid, with a different constant.

**Corollary 8.4 (Composite trapezoid).** Divide $[a,b]$ into $n$ equal intervals of width $h$. If $|f''|\le M_2$ throughout, then
\[
|I-T_n|\le\frac{(b-a)h^2M_2}{12}.
\]

*Proof.* Apply the one-panel bound on every interval and add the absolute errors. There are $n$ intervals, and $nh=b-a$. ∎

On a nonuniform partition, the corresponding bound is $\sum_i M_{2,i}h_i^3/12$ with a valid derivative bound on each cell. A claimed global tolerance needs the sum of local budgets, rather than repeating the full global tolerance independently on every cell.

For composite Simpson with an even number $n$ of equal subintervals, the sharp standard bound is $(b-a)h^4M_4/180$ when $f\in C^4$ and $|f^{(4)}|\le M_4$. That precise constant is cited to NIST DLMF §3.5. A short Taylor proof already establishes fourth order with a looser constant: on each two-subinterval panel, subtract the cubic Taylor polynomial at its midpoint. Its integral remainder is bounded by $M_4h^5/60$, and the Simpson remainder by $M_4h^5/36$. Their sum is $2M_4h^5/45$. Adding $n/2$ panels gives $(b-a)M_4h^4/45$. This proves the order without claiming the sharper constant has been derived by that coarse estimate.

## Romberg extrapolation is conditional algebra

Suppose the composite trapezoidal estimates have an even-power expansion
\[
T(h)=I+c_2h^2+c_4h^4+\cdots+c_{2r}h^{2r}+O(h^{2r+2}).
\]
The expansion requires suitable smoothness and endpoint control; it does not follow from the second-derivative bound alone. Under this assumption, $(4T(h/2)-T(h))/3$ cancels the leading $h^2$ term. Repeating the cancellation gives
\[
R_{k,0}=T_{2^k},\qquad
R_{k,j}=R_{k,j-1}+
\frac{R_{k,j-1}-R_{k-1,j-1}}{4^j-1},\quad1\le j\le k.
\]
At level $j$, the leading assumed power scales by $4^{-j}$ under step halving, so direct substitution proves its cancellation. The validity of the expansion and the algebraic cancellation are separate obligations. Euler–Maclaurin theory supplies wider sufficient conditions, cited in the quadrature reference rather than proved here.

**Example 8.5 (A complete small Romberg table).** For $f(x)=x^4$ on $[0,1]$, the exact trapezoid estimates and extrapolations are
\[
\begin{array}{c|ccc}
k&R_{k,0}&R_{k,1}&R_{k,2}\\ \hline
0&1/2&&\\
1&9/32&5/24&\\
2&113/512&77/384&1/5
\end{array}
\]
For example $R_{1,1}=(4(9/32)-1/2)/3=5/24$, and $R_{2,2}=(16(77/384)-5/24)/15=1/5$. The final value equals the exact integral. This polynomial has only finitely many nonzero error terms in the relevant expansion; the example is not a proof of convergence for every nonsmooth target.

The following pseudocode specifies finite work. For this example, $K=2$ gives the displayed table.

~~~text
INPUT: f on [a,b], nonnegative integer K
R[0,0] := (b-a)*(f(a)+f(b))/2
for k := 1 through K:
    h := (b-a)/2^k
    new_sum := sum f(a+(2*j+1)*h), j=0 through 2^(k-1)-1
    R[k,0] := R[k-1,0]/2 + h*new_sum
    for j := 1 through k:
        R[k,j] := R[k,j-1] + (R[k,j-1]-R[k-1,j-1])/(4^j-1)
OUTPUT: table R
~~~

Reusing old samples gives $2^K+1$ distinct nodes, assuming no loss of representable separation. Exhausting a chosen $K$ or evaluation budget is not a proof that an error tolerance was achieved. If extrapolated differences stagnate or alternate irregularly, the asymptotic model may be absent or arithmetic may dominate.

## Why Gaussian nodes double polynomial exactness

Now let $w$ be integrable and positive almost everywhere on $[a,b]$. Define $\langle p,q\rangle_w=\int_a^b p(x)q(x)w(x)\,dx$. Positivity makes this an inner product on polynomials. There is a unique monic orthogonal polynomial $\pi_n$ of degree $n$: subtract from $x^n$ its orthogonal projection onto degrees at most $n-1$.

**Lemma 8.6 (Orthogonal roots).** The polynomial $\pi_n$ has $n$ distinct roots in $(a,b)$.

*Proof.* Let $r_1,\ldots,r_k$ be its distinct roots where its sign changes inside $(a,b)$, and put $q(x)=\prod_{j=1}^k(x-r_j)$. The product $\pi_nq$ has one constant sign on the interval except at its finitely many zeros: every interior sign change has been cancelled, while even-multiplicity or exterior roots cause no remaining change. It is not identically zero, so its weighted integral is nonzero. If $k<n$, this contradicts orthogonality of $\pi_n$ to $q$. Thus $k=n$. The degree allows no additional roots or multiplicities, proving that all $n$ roots are simple and interior. ∎

**Theorem 8.7 (Gaussian exactness and positive weights).** Use the roots $x_i$ of $\pi_n$ as nodes and weights $\alpha_i=\int_a^b\ell_i(x)w(x)\,dx$. Then the rule integrates every polynomial of degree at most $2n-1$ exactly, and every $\alpha_i$ is positive.

*Proof.* Divide any such polynomial as $p=q\pi_n+r$, with both $\deg q$ and $\deg r$ at most $n-1$. Orthogonality gives $\int q\pi_nw=0$. The node values of $p$ equal those of $r$, and the interpolatory rule is exact for $r$, so its result equals $\int rw=\int pw$. For positivity, apply this exactness to $\ell_i^2$, whose degree is at most $2n-2$. Its rule value is $\alpha_i$, while its integral is strictly positive because $\ell_i$ is a nonzero polynomial and $w>0$ almost everywhere. ∎

No rule using these $n$ real nodes can be exact through degree $2n$: the polynomial $\prod_i(x-x_i)^2$ has positive weighted integral and vanishes at every node. This proves an optimal degree ceiling, not an error guarantee for arbitrary nonpolynomial functions.

The positive weights also control value noise. Their sum is $\int_a^bw$, by constant exactness. If every node value has absolute error at most $\eta$, the rule changes by at most $\eta\int_a^bw$. In contrast, a rule with negative weights has the general bound $\eta\sum_i|\alpha_i|$, which can exceed that measure. Node and weight computation errors still need their own bounds.

**Example 8.8 (The two-node Gauss–Legendre rule).** For unit weight on $[-1,1]$, the monic degree-two orthogonal polynomial is $x^2-1/3$. Its roots are $\pm1/\sqrt3$. Symmetry and constant exactness give weights one each. The rule integrates $1,x,x^2,x^3$ as $2,0,2/3,0$, exactly their integrals. For $x^4$ it gives $2/9$, while the exact integral is $2/5$; the error is $8/45$. It is an excellent degree-three rule, not an exact integration rule for all polynomials.

## Remainders, adaptivity, and difficult inputs

A standard Gaussian remainder under $f\in C^{2n}[a,b]$ is
\[
I_w(f)-Q(f)=\frac{f^{(2n)}(\xi)}{(2n)!}
\int_a^b\pi_n(x)^2w(x)\,dx
\]
for some $\xi\in[a,b]$. Here is the reasoning. Hermite interpolation at the Gaussian nodes chooses a degree-at-most-$2n-1$ polynomial matching both values and first derivatives. Existence and uniqueness follow from linear algebra: the homogeneous conditions would give $n$ double roots to a polynomial of degree below $2n$, forcing the zero polynomial, so the linear map between two $2n$-dimensional spaces is invertible. The repeated-Rolle argument, counting each matched value-and-derivative as a double zero, bounds its remainder between the minimum and maximum of $f^{(2n)}$ times $\pi_n^2/(2n)!$. The rule sees identical nodal values for the function and interpolant, and integrates the interpolant exactly. Integrating the remainder bounds and using continuity of $f^{(2n)}$ produces the displayed intermediate derivative value. Thus the formula requires high smoothness throughout the interval; it cannot be applied across an integrable singularity merely because the integral exists.

For the two-node example, $\int_{-1}^1(x^2-1/3)^2dx=8/45$, so the derivative factor is $f^{(4)}(\xi)/135$. At $f=x^4$, this gives $24/135=8/45$, matching the exact discrepancy.

Adaptive integration compares estimates over a panel and its children, allocating smaller local budgets as the interval is subdivided. Such a difference is an indicator under a smooth error model. Both rules can miss the same spike or alias. If a finite set of sampled nodes is $z_1,\ldots,z_m$, the nonnegative polynomial $C\prod_i(x-z_i)^2$ vanishes at all of them while having a positive integral that can be made arbitrarily large by increasing $C$. This proves why sample agreement alone cannot guarantee all continuous, or even all polynomial, targets without regularity bounds.

An endpoint singularity requires an improper-integral or transformed problem. A discontinuity may require splitting at a known location. An infinite tail requires its own truncation bound. A highly oscillatory phase can be misread by an ordinary grid. These cases are developed in [Singular, Oscillatory, and High-Dimensional Integration](difficult-integrals-high-dimension.md); none is repaired by quoting a smooth Newton–Cotes or Gaussian order outside its assumptions.

## From polynomial approximation to a rigorous integral bound

Positive quadrature weights provide a useful bridge from approximation theory to integration. Let the weight function have finite total mass $W$, and suppose a rule has positive weights summing to that mass. If it is exact on a polynomial $p$, then adding and subtracting $p$ inside both the integral and the quadrature expression gives

$$
|I_w(f)-Q(f)|\le |I_w(f-p)|+|Q(f-p)|\le 2W\|f-p\|_\infty.
$$

The first inequality is just linearity and exactness; the second uses positivity twice. Taking the infimum over all polynomials within the rule's exactness range produces an error bound in terms of best uniform approximation. It requires continuity of the target, not the many derivatives used by the classical Gaussian remainder formula. A rate still requires a theorem controlling that approximation error for the stated function class.

For example, suppose a continuous target on the unit interval is known to lie within one thousandth of a particular cubic polynomial everywhere. A positive rule exact through degree three then has integration error at most two thousandths. The bound follows even if the target has a corner and no fourth derivative. The hypothesis is a uniform approximation bound over the entire interval; agreement with the cubic at finitely many nodes is insufficient.

For a rule with signed weights, the analogous proof replaces the second copy of $W$ by the sum of absolute weights. This explains why formal polynomial exactness and stability under perturbed values are separate properties. A high-order rule with large cancelling coefficients can magnify data error even when its polynomial remainder is small. When comparing quadrature formulas, record their exactness space, their coefficient norm, and the regularity information used to control what remains outside that space.

## Exercises

### Exercise 8.1
<a id="quadrature-ex-1"></a>

For $x^2$ on $[0,1]$, compute one-panel midpoint and trapezoid estimates and compare their signs of error.

<details><summary>Hint 1</summary>

The exact integral is $1/3$.

</details>
<details><summary>Hint 2</summary>

Midpoint samples $1/2$, while trapezoid samples zero and one.

</details>
<details><summary>Solution</summary>

Midpoint gives $1/4$, below the integral, while trapezoid gives $1/2$, above it. Their exact-minus-rule errors are $1/12$ and $-1/6$, respectively. Convexity predicts those signs, providing a check independent of decimal arithmetic.

</details>

### Exercise 8.2
<a id="quadrature-ex-2"></a>

Compute composite trapezoid with four panels for $x^2$ on $[0,1]$ and its exact error.

<details><summary>Hint 1</summary>

The samples are $0,1/16,1/4,9/16,1$.

</details>
<details><summary>Hint 2</summary>

Multiply the half-endpoint-plus-interior sum by $h=1/4$.

</details>
<details><summary>Solution</summary>

The estimate is $(1/4)[1/2+1/16+1/4+9/16]=11/32$. Its exact-minus-rule error is $1/3-11/32=-1/96$. This equals the composite error expression with constant second derivative two and step $1/4$.

</details>

### Exercise 8.3
<a id="quadrature-ex-3"></a>

Verify Simpson exactness through degree three on $[-1,1]$ using a basis.

<details><summary>Hint 1</summary>

Check $1,x,x^2,x^3$, rather than only the odd cubic.

</details>
<details><summary>Hint 2</summary>

The weights are $1/3,4/3,1/3$ at $-1,0,1$.

</details>
<details><summary>Solution</summary>

The rule gives two for the constant, zero for $x$, $2/3$ for $x^2$, and zero for $x^3$. These equal the exact integrals of that basis. Linearity therefore proves exactness for every polynomial of degree at most three.

</details>

### Exercise 8.4
<a id="quadrature-ex-4"></a>

Bound composite trapezoid error for $e^x$ on $[0,1]$ with ten equal panels.

<details><summary>Hint 1</summary>

Its second derivative is bounded by $e$ throughout the interval.

</details>
<details><summary>Hint 2</summary>

Use $(b-a)h^2M_2/12$.

</details>
<details><summary>Solution</summary>

With $h=1/10$, the error magnitude is at most $e/(12\cdot100)=e/1200$. The estimate is an overestimate because $f''>0$, so exact-minus-rule error is nonpositive. This bound assumes exact node values and separately controlled arithmetic.

</details>

### Exercise 8.5
<a id="quadrature-ex-5"></a>

Use $T_1=1/2$ and $T_2=3/8$ for $x^2$ on $[0,1]$ to compute one Romberg extrapolation.

<details><summary>Hint 1</summary>

Cancel the second-order term under step halving.

</details>
<details><summary>Hint 2</summary>

Use $(4T_2-T_1)/3$.

</details>
<details><summary>Solution</summary>

The extrapolation is $[4(3/8)-1/2]/3=1/3$, the exact integral. For a quadratic the relevant trapezoid error is a pure $h^2$ term, so the cancellation is exact. A general nonsmooth target need not have that expansion.

</details>

### Exercise 8.6
<a id="quadrature-ex-6"></a>

Map the two-node Gauss–Legendre rule to $[0,1]$ and use it to integrate $x^3$.

<details><summary>Hint 1</summary>

Use $x=(1+t)/2$, including the Jacobian.

</details>
<details><summary>Hint 2</summary>

The nodes are $(1\pm1/\sqrt3)/2$ and each weight is $1/2$.

</details>
<details><summary>Solution</summary>

Let $r=1/\sqrt3$. The result is $\tfrac12[((1-r)/2)^3+((1+r)/2)^3]=(1+3r^2)/8=1/4$. This equals the exact integral. The weight factor $1/2$ comes from the change of variables and is essential.

</details>

### Exercise 8.7
<a id="quadrature-ex-7"></a>

Find the two-node Gauss–Legendre error for $x^4$ on $[-1,1]$.

<details><summary>Hint 1</summary>

Both node fourth powers equal $1/9$.

</details>
<details><summary>Hint 2</summary>

Compare the sum with the exact integral $2/5$.

</details>
<details><summary>Solution</summary>

The rule gives $2/9$, so exact-minus-rule error is $2/5-2/9=8/45$. The polynomial lies just beyond the degree-three exactness class. Its fourth derivative is 24, consistent with the remainder factor $24/135=8/45$.

</details>

### Exercise 8.8
<a id="quadrature-ex-8"></a>

Derive a deterministic quadrature value-error bound when every supplied sample has absolute error at most $\eta$. Explain the advantage of positive weights.

<details><summary>Hint 1</summary>

Apply the triangle inequality to the weighted errors.

</details>
<details><summary>Hint 2</summary>

Positive weights sum to the integral of the constant function when that function is integrated exactly.

</details>
<details><summary>Solution</summary>

The perturbation is bounded by $\eta\sum_i|w_i|$. If the weights are positive and the target measure is $w(x)\,dx$, this becomes $\eta\int_a^bw(x)\,dx$. Negative weights can make the absolute sum larger than the total measure, increasing noise amplification. This bound does not include errors in the nodes or weights themselves.

</details>

### Exercise 8.9
<a id="quadrature-ex-9"></a>

Construct a smooth function vanishing at any given finite list of sampled nodes but having a positive integral. What does it show about rule agreement?

<details><summary>Hint 1</summary>

Square a polynomial with those nodes as roots.

</details>
<details><summary>Hint 2</summary>

A positive scaling changes the integral while preserving every zero sample.

</details>
<details><summary>Solution</summary>

Use $f(x)=C\prod_i(x-z_i)^2$ on a nondegenerate interval with $C>0$. It is nonnegative, smooth, nonzero except at finitely many points, and has positive integral. Every sampled value is zero. Increasing $C$ makes the integral arbitrarily large while all those quadrature samples remain unchanged. Agreement of sampled rules cannot therefore be an unconditional error certificate over that unrestricted function class.

</details>

### Exercise 8.10
<a id="quadrature-ex-10"></a>

Prove that no quadrature rule using $n$ fixed real nodes can integrate every polynomial through degree $2n$ exactly for a weight positive almost everywhere.

<details><summary>Hint 1</summary>

Choose a degree-$2n$ polynomial that vanishes at all the nodes.

</details>
<details><summary>Hint 2</summary>

Use the square of the nodal polynomial and compare its rule value with its integral.

</details>
<details><summary>Solution</summary>

The polynomial $p(x)=\prod_{i=1}^n(x-x_i)^2$ has degree $2n$ and zero value at every node, so every such weighted-sample rule returns zero. Its weighted integral is positive because the polynomial is nonnegative and nonzero except at finitely many points and the weight is positive almost everywhere on the interval. Thus degree-$2n$ exactness is impossible. Gaussian degree $2n-1$ reaches the largest possible level for $n$ real nodes in this setting.

</details>

## Sources

The Newton–Cotes starting points and original examples remain in Euler's [Numerical Differentiation and Quadrature](differentiation-quadrature.md); this separate chapter develops that material without removing its source. Verified references are NIST [DLMF §3.5 Quadrature](https://dlmf.nist.gov/3.5), including the cited sharp composite Simpson constant and standard Romberg setting, and Endre Süli and David F. Mayers, [An Introduction to Numerical Analysis](https://www.cambridge.org/core/books/an-introduction-to-numerical-analysis/FD8BCAD7FE68002E2179DFF68B8B7237), Cambridge University Press, 2003. Polynomial exactness, the trapezoid identity, conditional extrapolation cancellation, Gaussian roots, and Gaussian weight positivity are proved here. Links consulted 13 November 2026. Original Euler prose is licensed CC BY-SA 4.0; no external prose or figures are reproduced.

## Summary

Quadrature exactness is a finite polynomial statement, while convergence and reliable tolerances require regularity and arithmetic assumptions. Integrating interpolants gives Newton–Cotes weights; the trapezoid identity proves its sign and error bound. Romberg cancels assumed even error powers, and Gaussian orthogonality gives degree $2n-1$ exactness with positive weights. Positivity controls sample noise, but adaptive agreement alone cannot exclude unseen features. Singularities, oscillation, tails, and high dimension need the separate analysis in the next chapter.
