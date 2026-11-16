# Real-functions practice assessment: worked solutions and marking

**Role:** solutions companion to the [independent assessment](analysis-ii-assessment.md). These are model arguments, not an automatic grading key for written proof. Award credit for any correct alternative that establishes the same obligations with justified hypotheses. The point divisions total 20 per problem, 100 overall.

## 1. Extension under a uniform modulus (20 points)

Choose any sequence \(x_k\in(0,1)\) with \(x_k\to0\). It is Cauchy, so
\[
|f(x_k)-f(x_j)|\le C|x_k-x_j|^\alpha\longrightarrow0
\quad\text{as }j,k\to\infty.
\]
Completeness of \(\mathbb R\) gives a finite limit \(L_0\). If \(y_k\to0\) is another interior sequence, then \(|f(x_k)-f(y_k)|\le C|x_k-y_k|^\alpha\to0\); thus both image sequences have the same limit. This independence is what turns a sequence calculation into an endpoint value. The same argument at \(1\) gives \(L_1\).

Define \(F=f\) on \((0,1)\), \(F(0)=L_0\), and \(F(1)=L_1\). For arbitrary \(x,y\in[0,1]\), choose interior sequences \(x_k\to x\) and \(y_k\to y\) (constant sequences are allowed for interior points). Passing to the limit in
\[
|f(x_k)-f(y_k)|\le C|x_k-y_k|^\alpha
\]
gives \(|F(x)-F(y)|\le C|x-y|^\alpha\). This estimate proves continuity of \(F\) at all points, including the new endpoints. Any other continuous extension agrees with \(F\) on the dense set \((0,1)\), so continuity forces the same two endpoint values; uniqueness follows. Plain continuity on \((0,1)\) is insufficient: \(f(x)=1/x\) is continuous there but has no finite continuous extension at zero.

**Point rubric:** 5 for endpoint Cauchy existence; 4 for sequence independence and definition; 5 for passing the estimate to all endpoint pairs and deriving continuity; 3 for uniqueness; 3 for the counterexample. A proof that checks only \(x_k=1/k\) cannot receive the independence points. Merely asserting “uniformly continuous functions extend” without showing why the present estimate supplies the theorem's hypotheses can receive some theorem-use credit but not the full construction credit.

## 2. FTC and approximation error (20 points)

The integrand \(h(t)=t^2/(1+t^2)\) is continuous on \([0,1]\). The first FTC gives \(G\) continuous on \([0,1]\) and
\[
G'(x)=\frac{x^2}{1+x^2}
\quad(0<x<1).
\]
On \([0,1]\), \(0\le h(x)\le1/2\), since \(2x^2\le1+x^2\) is equivalent to \(x^2\le1\). For \(0\le x<y\le1\), \(G\) is continuous on \([x,y]\) and differentiable inside. The Mean Value Theorem gives \(G(y)-G(x)=h(c)(y-x)\) for some \(c\in(x,y)\). Hence \(0\le G(y)-G(x)\le(y-x)/2\). This proves increasing (in fact strictly increasing for distinct nonnegative inputs) and \(1/2\)-Lipschitz behavior. We did not require a two-sided derivative at \(0\) or \(1\).

Since \(x^3/3=\int_0^x t^2\,dt\), linearity gives the **exact** error identity
\[
\frac{x^3}{3}-G(x)
=\int_0^x\left(t^2-\frac{t^2}{1+t^2}\right)dt
=\int_0^x\frac{t^4}{1+t^2}\,dt.
\]
For \(0\le t\le x\), \(0\le t^4/(1+t^2)\le t^4\); monotonicity of the integral therefore yields
\[
0\le\frac{x^3}{3}-G(x)\le\int_0^x t^4\,dt=\frac{x^5}{5}.
\]
At \(x=1/2\), the approximation is \(1/24\), and the certified absolute error is at most \((1/2)^5/5=1/160\). This is a bound, not an assertion that the actual error equals \(1/160\).

**Point rubric:** 4 for FTC with continuous integrand; 5 for monotonicity and the MVT Lipschitz argument; 7 for the exact error integral and bound; 2 for the value \(1/160\); 2 for endpoint care. A numerical quadrature estimate without a proof of its error earns no error-bound points.

## 3. Darboux oscillation (20 points)

At zero, \(|w(x)-w(0)|=|w(x)|=x\to0\), so \(w\) is continuous. At any \(c>0\), choose rational \(r_k\to c\) and irrational \(s_k\to c\). Then \(w(r_k)=r_k\to c\) and \(w(s_k)=-s_k\to-c\). Since \(c\ne-c\), no single limit exists there; \(w\) is discontinuous at every positive point.

Take any partition \(P\) of \([0,1]\) and refine it by adding \(1/2\), obtaining \(P'\). Refinement cannot increase \(U-L\), so \(U(w,P)-L(w,P)\ge U(w,P')-L(w,P')\). On every subinterval \([u,v]\) of \(P'\) lying in \([1/2,1]\), density of rational and irrational numbers gives
\[
\sup_{[u,v]}w=v,\qquad \inf_{[u,v]}w=-v.
\]
The subinterval's contribution to \(U-L\) is \(2v(v-u)\ge v-u\), because \(v\ge1/2\). Summing these contributions across \([1/2,1]\) gives at least \(1/2\). Contributions from the other subintervals are nonnegative. Thus **every** partition satisfies
\[
U(w,P)-L(w,P)\ge\frac12.
\]
The Darboux criterion cannot be met for any \(\varepsilon<1/2\), so \(w\) is not Riemann integrable.

**Point rubric:** 5 for the exact continuity set; 4 for density and local suprema/infima; 7 for the partition-independent gap, including the refinement direction; 4 for the Darboux conclusion. Computing a gap only for equal-width partitions leaves open the possibility of a better partition and is incomplete.

## 4. A nonuniform peak with a vanishing area (20 points)

For \(0<x<1\), \(n^2x^n\to0\) because a fixed geometric factor beats a quadratic factor. Also \(H_n(0)=H_n(1)=0\). The pointwise limit on the whole closed interval is therefore zero.

In the interior,
\[
H_n'(x)=n^2x^{n-1}(1-x)\bigl(n-(n+2)x\bigr).
\]
The factors outside the final parenthesis are positive. Thus \(H_n\) increases until \(x_n=n/(n+2)\) and decreases afterward; endpoints have value zero, so \(x_n\) is the global maximizer. Its height is
\[
H_n(x_n)
=\frac{4n^2}{(n+2)^2}\left(\frac{n}{n+2}\right)^n
\longrightarrow4e^{-2}>0,
\]
using \((1+2/n)^n\to e^2\). The moving values disprove uniform convergence to zero.

Expand the square and integrate powers:
\[
\int_0^1 H_n(x)\,dx
=n^2\left(\frac1{n+1}-\frac2{n+2}+\frac1{n+3}\right)
=\frac{2n^2}{(n+1)(n+2)(n+3)}
\longrightarrow0.
\]
The zero pointwise limit also has integral zero. Equality of these two integral limits occurs here despite nonuniform convergence. The uniform-limit integral theorem is a sufficient route to equality, not a necessary condition.

**Point rubric:** 4 for the pointwise limit at interior and endpoints; 6 for the critical point and positive limiting height; 5 for the exact integral and limit; 3 for the moving-witness nonuniformity conclusion; 2 for the correct logical status of the interchange theorem. A plot of a narrow peak is not a substitute for its exact height.

## 5. Interior power-series operations and endpoint tests (20 points)

For \(|x|<1\),
\[
\left|\frac{x^{2n+1}}{2n+1}\right|
\le |x|^{2n+1},
\]
so the series converges absolutely. For \(|x|>1\), the term magnitudes \(|x|^{2n+1}/(2n+1)\) do not tend to zero. Hence the radius in \(x\) is \(R=1\). On every \([-r,r]\) with \(0<r<1\), the derivative terms are \(x^{2n}\) and satisfy \(|x^{2n}|\le r^{2n}\). The geometric majorant proves uniform convergence of the derivative series there. The partial sums vanish at \(x=0\), so the differentiation theorem applies and gives
\[
P'(x)=\sum_{n=0}^{\infty}x^{2n}=\frac1{1-x^2}
\quad(-1<x<1).
\]

On this interval, \(1/(1-x^2)=\tfrac12[1/(1+x)+1/(1-x)]\). The previously established logarithm has derivative \(1/u\) for \(u>0\), so an antiderivative is
\[
\frac12\bigl(\log(1+x)-\log(1-x)\bigr).
\]
Both this expression and \(P\) are zero at \(x=0\). Their derivatives agree on the connected interval, so the Mean Value Theorem makes them equal:
\[
P(x)=\frac12\log\frac{1+x}{1-x},
\qquad -1<x<1.
\]
At \(x=1\), the series is \(\sum_{n=0}^{\infty}1/(2n+1)\), which diverges because \(1/(2n+1)\ge1/[2(n+1)]\). At \(x=-1\), every term is its negative, so it diverges to \(-\infty\). The compact-interior differentiation theorem gives no endpoint conclusion; both endpoints were tested directly.

**Point rubric:** 4 for radius and interior convergence; 5 for the uniform derivative majorant on each compact interior interval; 5 for the derivative and logarithmic antiderivative with \(P(0)=0\); 4 for both endpoint tests; 2 for the domain distinction. Formal termwise differentiation without a uniform derivative argument is incomplete.

## Revision check

Reopen an answer from the independent paper and mark the first line where a theorem's domain or hypothesis was missing. Repair that line and the consequences after it. A final formula that happens to match a model solution does not repair an invalid exchange of limits.
