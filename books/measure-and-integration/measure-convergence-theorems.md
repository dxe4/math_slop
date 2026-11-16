
# Monotone, Fatou, and Dominated Convergence

This chapter has moved from Real Analysis into the Measure and Integration primary with all original mathematical sections, exercise identities, hints, solutions and its project or investigation preserved. Read [The Lebesgue Integral](lebesgue-integral.md) first; every function under an integral remains subject to the stated measurability conventions.

Most serious uses of integration involve a limit: an infinite series, a parameter approaching a boundary, a numerical approximation, or a sequence of random variables. Pointwise convergence alone does not permit the limit to pass through an integral. Mass can grow, escape, concentrate, or oscillate even while every fixed point settles down.

Lebesgue integration was designed around monotone approximation. That design yields three central theorems:

- monotone convergence gives equality for increasing nonnegative sequences;
- Fatou's lemma gives a one-sided inequality for arbitrary nonnegative sequences;
- dominated convergence restores equality when a single integrable envelope controls every term.

The theorems form a selection guide, not interchangeable slogans.

Throughout, \((X,A,\mu)\) is a measure space and all functions are measurable as
extended-real-valued functions unless a stronger assumption is stated. A
statement that holds *almost everywhere* may fail on a null set that is fixed
for the sequence. Changing each function on the union of countably many null
sets causes no difficulty, because that union is still null. Integrals of
nonnegative functions are allowed to equal infinity. By contrast, an equality
involving the integral of a signed function is asserted only when the positive
and negative parts do not create the indeterminate expression \(\infty-\infty\).

This distinction is not bookkeeping. MCT, Fatou, and Tonelli live naturally in
the extended interval \([0,\infty]\); DCT and Fubini obtain finite quantities by
proving absolute integrability. When applying a theorem, first identify which
of those two worlds the argument occupies.

## 1. Pointwise convergence can lose mass

On \(R\), let

\(f_n=1_{[n,n+1]}\).

For each fixed \(x\), eventually the moving interval lies to the right, so \(f_n(x)\to 0\). Yet

\[\int f_n=1\]

for every \(n\), while the integral of the pointwise limit is zero. Mass escapes to infinity.

On \([0,1]\), let

\(g_n=n\,1_{(0,1/n)}\).

For every \(x>0\), \(g_n(x)\to 0\), and the value at zero can be assigned zero. Still \(\int g_n=1\). Mass concentrates into a shrinking neighborhood while height grows.

These examples identify two jobs a limit theorem may need: prevent escape across the domain and prevent concentration at increasingly high values.

A third obstruction is cancellation. On \([0,2\pi]\), the functions
\(h_n(x)=\sin(nx)\) have integral zero, but they do not converge pointwise at most
points. Their signed integrals conceal persistent absolute mass. On the other
hand, \((-1)^n\,1_{[0,1]}\) is bounded by an integrable function but has no pointwise
limit. Thus a good envelope controls size, not oscillation; DCT still needs
convergence almost everywhere (or a suitable replacement such as convergence
in measure plus an additional argument).

It is useful to separate four questions:

1. Does a pointwise or almost-everywhere limit exist?
2. Is mass controlled in height, in the tails of the space, or both?
3. Are negative values present, so cancellation must be controlled?
4. Is the desired conclusion an integral identity, \(L^1\) convergence, or only a
   one-sided estimate?

The hypotheses of the convergence theorems answer these questions in different
ways.

## 2. Monotone convergence theorem

**MCT.** If \(0\le f_1\le f_2\le \ldots\) are measurable and \(f_n(x)\uparrow f(x)\) almost everywhere, then

\(\int f_n\uparrow \int f\),

allowing the value \(\infty\).

The arrow \(\uparrow\) contains two assertions: the numerical sequence is increasing at
almost every point, and its supremum is \(f\) there. If monotonicity begins only
after one common index, discard those finitely many initial terms. Pointwise
eventual monotonicity with an index depending on \(x\) is not this reduction. If monotonicity fails on a null
set, redefine all functions there to be zero. Neither operation changes an
integral or its limit.

Monotonicity immediately gives \(\int f_n\le \int f\), so the limit \(L=\lim\int f_n\) exists and \(L\le \int f\).

For the reverse inequality, take a nonnegative simple function \(\varphi\le f\) and a number \(c\in (0,1)\). On each positive level set of \(\varphi\), the sets

\[E_n=\{x:f_n(x)\ge c\varphi(x)\}\]

increase to cover that level set up to the exceptional null set. Continuity from below makes the integrals of \(c\varphi\,1_{E_n}\) approach \(c\int \varphi\). Since \(f_n\ge c\varphi\,1_{E_n}\),

\(L\ge c\int \varphi\).

Take the supremum over simple \(\varphi\le f\), then let \(c\uparrow 1\), obtaining \(L\ge \int f\).

Here is the set-level detail hidden in that proof. If
\(\varphi=\sum_{j=1}^m a_j\,1_{A_j}\) with disjoint measurable \(A_j\) and \(a_j>0\), define
\(E_{n,j}=A_j\cap \{f_n\ge ca_j\}\). For each \(j\), the sets \(E_{n,j}\) increase and their
union agrees with \(A_j\) up to a null set, because \(f\ge a_j\) on \(A_j\). Hence
\(\mu(E_{n,j})\uparrow \mu(A_j)\). Summing the finitely many levels gives
\(\int c\varphi\,1_{E_n}\to c\int \varphi\). This is why the proof needs only continuity from below, not a
prior convergence theorem for arbitrary functions.

No integrable dominating function is required. Nonnegativity prevents cancellation, and monotonicity prevents mass from disappearing between stages.

MCT also yields a standard construction principle. If a nonnegative function
\(f\) is approximated from below by simple functions \(s_n\uparrow f\), then its integral is
the increasing limit of the explicitly computable numbers \(\int s_n\). Similarly,
if \(f=\sum u_k\) with \(u_k\ge 0\), truncating either the number of summands or their
heights produces legitimate monotone approximations. In both cases the limit
may be infinite; this is a conclusion, not a failure of the theorem.

### A useful signed corollary

Suppose \(f_n\uparrow f\) almost everywhere and there is an integrable function \(h\) with
\(f_n\ge h\) for every \(n\). Then \(f_n-h\uparrow f-h\) and the differences are nonnegative.
MCT therefore gives

\(\int f_n\to \int f\),

where all displayed integrals are well defined and the limit may be \(\infty\). This
“MCT after shifting” is often the right tool when an increasing sequence is not
itself nonnegative. A lower bound depending on \(n\) is not sufficient.

## 3. Infinite sums and Tonelli's nonnegative principle

For nonnegative measurable functions \(u_k\), the partial sums

\[S_n=\sum_{k=1}^n u_k\]

increase to \(S=\sum_{k=1}^\infty u_k\). MCT gives

\(\int \sum_{k=1}^\infty u_k=\sum_{k=1}^\infty\int u_k\),

with infinity allowed.

Taking \(u_k=1_{E_k}\) yields

\(\int \sum 1_{E_k}=\sum\mu(E_k)\).

The pointwise sum counts memberships. If the total measure sum is finite, the counting function is finite almost everywhere, which is another proof of the first Borel–Cantelli lemma.

Tonelli's theorem is the two-variable version: a nonnegative measurable function may be integrated in either order, and both iterated integrals equal the product-space integral, even if the common value is infinite.

More precisely, for sigma-finite measure spaces in the usual product-measure
construction and \(u:X\times Y\to [0,\infty]\) measurable,

\[\int _{X\times Y}u d(\mu\times \nu)=\int _X(\int _Y u(x,y)d\nu(y))d\mu(x)\]

and symmetrically in the other order. The inner integrals are measurable
extended-real-valued functions. Tonelli is safe precisely because no
subtraction occurs. If its conclusion is finite, one learns after the fact
that the relevant slices are integrable almost everywhere.

### Worked example: a nonnegative kernel series

For \(0<r<1\), define \(u_k(x)=r^k x^k\) on \([0,1]\). Since every term is
nonnegative, MCT permits

\(\int _0^1 \sum_{k=0}^\infty r^k x^k dx=\sum_{k=0}^\infty r^k/(k+1)\).

The pointwise sum is \(1/(1-rx)\), so this also proves

\(\int _0^1 1/(1-rx)dx=\sum_{k=0}^\infty r^k/(k+1)\).

No uniform-convergence argument is needed. The equality remains justified
solely by nonnegativity even in variants where the common value is infinite.

## 4. Fatou's lemma

**Fatou.** For nonnegative measurable functions \((f_n)\),

\(\int \liminf_{n\to \infty}f_n\le \liminf_{n\to \infty}\int f_n\).

Define tail infima

\(g_N=\inf_{n\ge N}f_n\).

Then \(g_N\uparrow \liminf f_n\). MCT gives

\(\int \liminf f_n=\lim_N\int g_N\).

Since \(g_N\le f_n\) for every \(n\ge N\),

\(\int g_N\le \inf_{n\ge N}\int f_n\).

Let \(N\to \infty\).

There is a small extended-real subtlety in the last line. For fixed \(N\), the
inequality holds for every \(n\ge N\), hence it holds for the infimum of those
integrals. The increasing limit of the tail infima is, by definition, the
liminf. Nothing requires the numerical sequence \(\int f_n\) to converge.

Fatou says limiting lower mass cannot exceed the lower limiting masses of the approximations. The inequality can be strict when mass escapes, as for \(1_{[n,n+1]}\).

Fatou is most effective when read as a stability principle for lower bounds.
For example, if \(\int f_n\le C\) for nonnegative \(f_n\) and \(f_n\to f\) almost everywhere,
then \(\int f\le C\); the limit is automatically integrable when \(C<\infty\). The lemma does
not supply an upper bound on \(\limsup\int f_n\), which is exactly where escaping or
concentrating mass can hide.

### Fatou with an integrable lower bound

If \(f_n\ge h\) for one integrable \(h\), apply ordinary Fatou to \(f_n-h\ge 0\). Since
\(\liminf(f_n-h)=\liminf f_n-h\), one obtains the generalized form

\(\int \liminf f_n\le \liminf\int f_n\).

All terms are meaningful because the common integrable lower bound controls the
negative parts. Without such control the displayed inequality can contain
undefined signed integrals. This shifted version is often used for variational
problems, where energies have a uniform lower bound but are not nonnegative.

### When does equality hold?

Fatou becomes an equality under additional control, but equality is not built
into the lemma. A practical proof strategy is to obtain the lower estimate from
Fatou and an upper estimate by applying Fatou to a nonnegative complementary
sequence such as \(g-f_n\). DCT packages exactly this two-sided argument.

## 5. Dominated convergence theorem

**DCT.** Suppose \(f_n\to f\) almost everywhere and there is an integrable \(g\ge 0\) such that

\[|f_n|\le g\]

almost everywhere for every \(n\). Then \(f\) is integrable and

\(\int |f_n-f|\to 0\).

Consequently,

\(\int f_n\to \int f\).

The conclusion has two layers. First, \(\int |f_n-f|\to 0\), so the convergence occurs
in the norm of \(L^1\). Second,

\(|\int f_n-\int f|\le \int |f_n-f|\),

which gives convergence of the signed integrals. Proving only the second claim
throws away useful information.

The domination passes to the limit, giving \(|f|\le g\). Apply Fatou to the nonnegative functions

\(2g-|f_n-f|\).

Their pointwise limit is \(2g\), and their integrals are finite. Fatou gives

\(2\int g\le \liminf[2\int g-\int |f_n-f|]\).

This forces \(\limsup\int |f_n-f|\le 0\), proving \(L^1\) convergence.

An equivalent proof exposes the two Fatou inequalities. Fatou applied to
\(f_n+g\ge 0\) gives \(\int f+\int g\le \liminf(\int f_n+\int g)\), while applying it to
\(g-f_n\ge 0\) gives \(\int g-\int f\le \liminf(\int g-\int f_n)\). The latter rearranges to
\(\limsup\int f_n\le \int f\); together the bounds squeeze the integrals. The proof through
\(|f_n-f|\) is stronger because it also controls absolute error.

The envelope \(g\) does three jobs: it is independent of \(n\), integrable over the whole domain, and large enough almost everywhere. A different bound \(g_n\) for each term is not domination.

The exceptional null sets in domination may initially depend on \(n\). Their
countable union is null, so outside one common null set all inequalities hold at
once. Passing to the pointwise limit then gives \(|f|\le g\). This explains why DCT
is naturally phrased for sequences; uncountable parameter families require a
little more care when choosing common exceptional sets.

### Truncation as a route to domination

When no obvious envelope is available, split the problem with the continuous
clipping map \(T_M(u)=\max(-M,\min(u,M))\). If \(f_n\to f\) pointwise, then
\(T_M(f_n)\to T_M(f)\) pointwise, including at the threshold values. On a
finite-measure space the clipped functions have the integrable envelope \(M\).
Moreover \(|f_n-T_M(f_n)|\le |f_n|\,1_{\{|f_n|>M\}}\), so a uniformly small tail
integral controls the discarded error. DCT handles the clipped part and the
tail height is afterward sent to infinity. This is the central idea
behind uniform integrability and Vitali's theorem.

## 6. Bounded convergence on finite measure spaces

If \(\mu(X)<\infty\), \(f_n\to f\) almost everywhere, and \(|f_n|\le M\) for one finite constant, then DCT applies with \(g=M\,1_X\). Hence

\(\int f_n\to \int f\).

Finite measure is essential. On \(R\), the constant envelope 1 is not integrable, and the translating indicators \(1_{[n,n+1]}\) satisfy \(|f_n|\le 1\) but their integrals do not approach zero.

On a probability space, \(\mu(X)=1\), so a common boundedness condition automatically supplies an integrable envelope.

The same estimate gives a quantitative statement. If \(|f_n-f|\le a_n\) almost
everywhere on a finite-measure space, where \(a_n\to 0\), then

\(\lVert f_n-f\rVert_1\le a_n \mu(X)\).

Thus uniform convergence implies \(L^1\) convergence at a controlled rate. DCT is
more flexible: it allows pointwise rather than uniform convergence, but usually
does not by itself produce a numerical convergence rate.

## 7. Parameter limits under an integral

Suppose \(f_t(x)\to f_{t_0}(x)\) almost everywhere as \(t\to t_0\), and all nearby functions satisfy \(|f_t(x)|\le g(x)\) for one integrable \(g\). A sequential form of DCT shows

\(\lim_{t\to t_0}\int f_t=\int f_{t_0}\).

To make “nearby” precise, require a radius \(\delta>0\) such that the bound holds
whenever \(|t-t_0|<\delta\). For any sequence \(t_n\to t_0\), discard finitely many terms
so that they lie in this neighborhood, then apply DCT. In metric parameter
spaces, sequential continuity is equivalent to continuity.

### Worked example

For \(t\ge 0\), consider

\(F(t)=\int _0^\infty e^{-x}\cos(tx)dx\).

As \(t\to t_0\), the integrand converges pointwise, and

\(|e^{-x}\cos(tx)|\le e^{-x}\),

whose integral is 1. Thus \(F\) is continuous in \(t\) before any explicit evaluation.

Parameter continuity can therefore be established structurally rather than by first finding a closed form.

As a useful refinement, on a compact parameter set \(K\) one can sometimes find
one envelope valid for every \(t\in K\). The same argument proves continuity at all
points of \(K\). It does not automatically prove uniform convergence for some
external approximation index; that requires an estimate uniform in both the
parameter and the index.

## 8. Differentiation under the integral sign

Let

\(F(t)=\int f(t,x)d\mu(x)\).

The derivative is the limit of difference quotients

\(q_h(x)=[f(t+h,x)-f(t,x)]/h\).

If \(q_h(x)\to \partial _t f(t,x)\) almost everywhere and there is an integrable \(g\) dominating \(|q_h|\) for all sufficiently small \(h\), DCT gives

\(F'(t)=\int \partial _t f(t,x)d\mu(x)\).

This is a theorem about a fixed parameter value \(t\). A convenient local
version assumes:

- for almost every \(x\), the map \(s\mapsto f(s,x)\) is differentiable on an open
  interval around \(t\);
- for each such \(s\), the function \(x\mapsto f(s,x)\) is measurable;
- \(f(t,x)\) is integrable; and
- there is \(g\in L^1\) with \(|\partial _s f(s,x)|\le g(x)\) throughout that interval, outside
  one null set.

For small nonzero \(h\), the one-variable mean value theorem gives
\(|q_h(x)|\le g(x)\) almost everywhere. DCT then proves both the existence of the
derivative of \(F\) and the formula above. Merely knowing that every derivative
is integrable separately is insufficient; the difference quotients need one
common local envelope.

A common sufficient condition is an integrable bound on \(|\partial _t f(s,x)|\) for \(s\) near \(t\); the mean value theorem then dominates the difference quotients.

### Worked example

Let

\(F(t)=\int _0^\infty e^{-x}\sin(tx)dx\).

The partial derivative is \(xe^{-x}\cos(tx)\), dominated by \(xe^{-x}\), which is integrable. Thus

\(F'(t)=\int _0^\infty xe^{-x}\cos(tx)dx\).

The derivative envelope differs from the envelope used merely for continuity.

### A failure diagnostic

Consider \(F(t)=\int _0^1 1_{(0,t)}(x)dx=t\) for \(0<t<1\). For almost every fixed \(x\),
the map \(t\mapsto 1_{(0,t)}(x)\) is locally constant except at \(t=x\), so its pointwise
derivative is zero for almost every \(x\). Nevertheless \(F'(t)=1\). The tempting
identity \(F'=\int \partial _t f=0\) fails because the difference quotients concentrate near
the moving boundary and have no common integrable envelope. Differentiation
under an integral sign must control difference quotients, not merely calculate
a pointwise derivative.

## 9. Fubini and absolute integrability

For signed measurable \(f(x,y)\), Fubini's theorem assumes

\(\int |f|d(\mu\times \nu)<\infty\).

Then almost every slice is integrable, both iterated integrals exist, and

\(\int f d(\mu\times \nu)=\int [\int f(x,y)d\nu(y)]d\mu(x)=\int [\int f(x,y)d\mu(x)]d\nu(y)\).

The proof applies Tonelli to \(f^+\) and \(f^-\), whose integrals are finite under absolute integrability, then subtracts.

There are two distinct conclusions to verify. Tonelli applied to \(|f|\) says

\(\int _X[\int _Y|f(x,y)|d\nu(y)]d\mu(x)<\infty\).

Therefore the inner absolute integral is finite for almost every \(x\), so the
corresponding signed slice integral exists there. The same is true in the other
order. Only after this slice-integrability step is it legitimate to split into
positive and negative parts and identify the iterated integrals.

Without nonnegativity or absolute integrability, iterated integrals can disagree or one can fail to exist. This is the continuous counterpart of conditionally convergent double series.

A safe workflow is therefore: use Tonelli on \(|f|\); show the resulting number
is finite; conclude Fubini for \(f\). Writing “by Fubini” before checking
\(\int |f|<\infty\) reverses the logical order. For a nonnegative \(f\), use Tonelli directly
and do not claim finiteness unless it has actually been proved.

### Series as product-space integrals

On an arbitrary measure space, MCT applied directly to the partial sums of the
nonnegative functions \(|u_k|\) says

\(\int _X \sum_k|u_k(x)|d\mu(x)=\sum_k\int _X|u_k(x)|d\mu(x)\).

If the right side is finite, the series converges absolutely almost everywhere,
its sum is integrable, and DCT applied to its partial sums justifies term-by-term
integration. When \(X\) is sigma-finite, equipping the positive integers with
counting measure gives the same statement as Tonelli/Fubini on \(N\times X\).
The direct MCT/DCT proof does not need that product-space hypothesis.

## 10. Modes of convergence are not interchangeable

For the differences and convergence modes in this section, the functions and
their stated limit are finite almost everywhere; representatives may be changed
on one common null set. This prevents undefined expressions such as
\(\infty-\infty\) in \(|f_n-f|\) and in Egorov's theorem.

Several notions occur:

- \(f_n\to f\) **almost everywhere**: pointwise outside one null set;
- \(f_n\to f\) **in measure**: for every \(\varepsilon>0\), \(\mu(|f_n-f|>\varepsilon)\to 0\);
- \(f_n\to f\) in \(L^1\): \(\int |f_n-f|\to 0\);
- uniform convergence: \(\sup|f_n-f|\to 0\).

On a finite measure space, uniform convergence implies \(L^1\) convergence, which implies convergence in measure. Almost-everywhere convergence does not generally imply \(L^1\) convergence, as concentrating spikes show.

Convergence in \(L^1\) need not imply convergence almost everywhere for the whole
sequence. On \([0,1]\), enumerate indicators of successively finer dyadic
intervals in typewriter order:

\(1_{[0,1/2)}, 1_{[1/2,1)}, 1_{[0,1/4)}, \ldots, 1_{[3/4,1)}, \ldots\).

The \(L^1\) norms tend to zero because interval lengths tend to zero, but at every
non-dyadic point the values equal one once in each block and zero many other
times. Thus the full sequence has no pointwise limit. An almost-everywhere
convergent subsequence does exist.

Convergence in measure implies the existence of an almost-everywhere convergent subsequence. Almost-everywhere convergence on a finite measure space implies convergence in measure. On infinite measure spaces the latter can fail: \(1_{[n,\infty)}\) converges pointwise to zero, but every difference set has infinite measure.

For the subsequence claim, choose indices \(n_k\) so that

\(\mu(|f_{n_k}-f|>2^{-k})<2^{-k}\).

The sum of these exceptional measures is finite. The first Borel–Cantelli
lemma says almost every point belongs to only finitely many exceptional sets;
therefore \(|f_{n_k}(x)-f(x)|\le 2^{-k}\) eventually, proving almost-everywhere
convergence.

For the finite-measure converse, suppose \(f_n\to f\) almost everywhere. For fixed
\(\varepsilon>0\), the indicators \(1_{|f_n-f|>\varepsilon}\) converge almost everywhere to zero and
are dominated by \(1_X\in L^1\). DCT makes their integrals—the measures of the
exceptional sets—tend to zero. This short proof pinpoints exactly where finite
measure is used.

### Almost uniform convergence

Egorov's theorem adds a geometric interpretation. If \(\mu(X)<\infty\) and
\(f_n\to f\) almost everywhere, then for every \(\eta>0\) there is a measurable set
\(E\) with \(\mu(E)<\eta\) such that \(f_n\to f\) uniformly on \(X\setminus E\). The theorem does not
give uniform convergence on all of \(X\), and the discarded set may depend on
\(\eta\). Egorov controls where convergence is slow; it does not control the height
of the functions on the discarded set. That missing height control is why
almost-everywhere convergence alone still need not imply \(L^1\) convergence.

## 11. Uniform integrability blocks concentration

A family \(F\subseteq L^1\) is **uniformly integrable** if high values and small sets carry uniformly little integral mass. One common finite-measure formulation requires

\(\lim_{M\to \infty} \sup_{f\in F} \int _{|f|>M}|f|=0\).

On a finite-measure space this tail condition implies a uniform \(L^1\) bound:
for a fixed sufficiently large \(M\),

\[\int |f|\le M\mu(X)+\int _{|f|>M}|f|\]

uniformly over the family. It also implies uniform absolute continuity of the
integrals. Indeed, for a measurable \(E\),

\(\int _E|f|\le M\mu(E)+\int _{|f|>M}|f|\).

First choose \(M\) to make the second term uniformly small, then choose \(\mu(E)\)
small enough for the first. Conversely, a uniform \(L^1\) bound together with
uniform absolute continuity gives the tail condition by applying it to
\(E=\{|f|>M\}\) and using Markov's inequality. These equivalences must be adjusted
on infinite-measure spaces, where bounded functions can occupy larger and
larger regions.

The spikes \(n\,1_{(0,1/n)}\) fail: for any fixed \(M\), sufficiently large \(n\) have their entire mass 1 above \(M\).

Domination by one integrable \(g\) implies uniform integrability. A deeper theorem says convergence in measure plus uniform integrability yields \(L^1\) convergence under suitable finite-measure hypotheses. This generalizes DCT by replacing a pointwise envelope with a family-level no-concentration condition.

To verify the domination claim, if \(|f|\le g\), then on \(\{|f|>M\}\) one has
\(g>M\), and hence

\(\int _{|f|>M}|f|\le \int _{g>M}g\to 0\).

The final limit follows from DCT applied to \(g\,1_{\{g>M\}}\). Thus one envelope is a
strong, easily checked certificate of uniform integrability.

**Theorem 6.1 (Vitali convergence, finite-measure form).** If \(f_n\to f\) in measure and
the family \(\{f_n:n\ge 1\}\) is uniformly integrable, then \(f\in L^1\) and
\(\lVert f_n-f\rVert_1\to 0\).

Here is the mechanism of the proof. Every subsequence has a further subsequence
converging almost everywhere to \(f\). Fatou and the uniform \(L^1\) bound show that
\(f\in L^1\). The enlarged family \(\{f_n\}\cup \{f\}\) is uniformly integrable. Fix a large
truncation height \(M\); outside the high-value sets, convergence in measure and
boundedness control the integral, while uniform integrability makes the
discarded high-value integrals uniformly small. This proves that each
subsequence has a further subsequence converging in \(L^1\). If the original
sequence failed to converge in \(L^1\), a subsequence with errors bounded below by
some positive number would contradict that fact.

Vitali handles families for which no single simple envelope exists. It still
requires both ingredients: convergence in measure controls the bulk, and
uniform integrability prevents concentration on exceptional sets. On an
infinite-measure space a further tightness condition may be needed to prevent
mass from escaping spatially.

### Scheffé's lemma: conservation of total mass

There is another useful route to \(L^1\) convergence. Suppose \(f_n\ge 0\), \(f\ge 0\),
\(f_n\to f\) almost everywhere, and all functions are integrable. If

\(\int f_n\to \int f\),

then \(\int |f_n-f|\to 0\). To prove this, observe that

\(|f_n-f|=f_n+f-2\min(f_n,f)\).

The functions \(\min(f_n,f)\) converge almost everywhere to \(f\) and are dominated
by the integrable function \(f\). DCT gives
\(\int \min(f_n,f)\to \int f\); the displayed identity then proves the claim.

This lemma is especially natural for probability densities. If every \(f_n\)
and \(f\) integrates to one, the mass-conservation hypothesis is automatic.
Almost-everywhere convergence of the densities therefore strengthens to
\(L^1\) convergence. Nonnegativity is essential to this clean argument; signed
functions may have positive and negative masses that cancel in their
integrals.

## 12. Reverse Fatou under an upper envelope

If \(f_n\le g\) for an integrable \(g\), and there is also an integrable lower bound
\(h\le f_n\) so all signed integrals below are finite, apply Fatou to \(g-f_n\ge 0\):

\(\int \liminf(g-f_n)\le \liminf\int (g-f_n)\).

Since \(\liminf(g-f_n)=g-\limsup f_n\), rearrangement gives

\(\limsup\int f_n\le \int \limsup f_n\).

Together with ordinary Fatou, matching liminf and limsup can prove integral convergence. This technique is useful when an upper envelope is natural but absolute domination is not stated directly.

The lower bound is not decorative. It guarantees integrability of every
\(f_n\); it also permits the generalized lower Fatou inequality by applying
ordinary Fatou to \(f_n-h\). If both bounds \(h\le f_n\le g\) are integrable and
\(f_n\to f\) almost everywhere, the two inequalities squeeze the integrals. This is
equivalent to DCT because \(|f_n|\le |h|+|g|\).

## 13. Local convergence plus uniform tail control

On an unbounded domain, a global envelope may be unavailable even though the
problem is well controlled on every bounded region. A localization argument
can separate ordinary convergence from escape to infinity.

Let \(B_R\) be an increasing family of measurable sets covering \(X\). Suppose
\(f_n\to f\) almost everywhere, DCT applies to \(f_n\,1_{B_R}\) for every fixed \(R\), and

\(\lim_{R\to \infty} \sup_n \int _{X\setminus B_R}|f_n|=0\).

Then \(f_n\to f\) in \(L^1\). For a fixed \(R\), local DCT gives

\(\int _{B_R}|f_n-f|\to 0\).

Fatou applied outside \(B_R\) gives

\(\int _{X\setminus B_R}|f|\le \liminf_n\int _{X\setminus B_R}|f_n|\).

Consequently, the two tail terms in

\[\lVert f_n-f\rVert_1\le \int _{B_R}|f_n-f|+\int _{X\setminus B_R}|f_n|+\int _{X\setminus B_R}|f|\]

are uniformly small when \(R\) is large, and the local term is small afterward
when \(n\) is large. The order of choices matters: choose the spatial cutoff
first, then the sequence index.

For functions on \(R^d\), one usually takes \(B_R=\{x:|x|\le R\}\). The condition says
that the family is **tight in integral mass**. The translating indicators
\(1_{[n,n+1]}\) satisfy perfect local convergence but fail this uniform tail test.
The concentrating spikes on \([0,1]\) have no spatial escape; instead they fail
uniform integrability. Tail tightness and uniform integrability therefore
control two genuinely different loss mechanisms.

## 14. A theorem-selection workflow

Before interchanging limit and integral, ask:

1. Are the functions nonnegative and increasing? Use MCT.
2. Are they merely nonnegative? Fatou gives a lower bound, not equality.
3. Is there one integrable absolute envelope? Use DCT.
4. Is the domain finite measure with one uniform scalar bound? Use bounded convergence.
5. Is the object a nonnegative double integral or series? Use Tonelli/MCT.
6. Is it signed? Prove absolute integrability before Fubini.
7. Is concentration possible? Test uniform integrability or construct spikes.
8. Is mass escaping on an unbounded domain? Inspect tails uniformly in the index.

Write the envelope and compute its integral. Saying “the terms are bounded” is incomplete unless the bound is common and integrable.

## 15. Misconceptions and boundaries

- **Pointwise convergence permits integral convergence.** Moving or concentrating mass disproves this.
- **Bounded functions are dominated.** The bound must be one integrable function; constants fail on infinite-measure domains.
- **Fatou proves equality.** It gives a one-sided inequality.
- **DCT only proves convergence of signed integrals.** It proves the stronger \(L^1\) convergence.
- **A separate integrable bound for each \(f_n\) is enough.** Domination requires one envelope for the whole sequence.
- **Nonnegative iterated integration needs finiteness.** Tonelli allows infinity.
- **Fubini is a formal change of order.** Signed functions require absolute integrability.
- **Almost-everywhere convergence and convergence in measure are identical.** Their relation depends partly on finiteness of the space, and subsequences matter.

## Exercises with complete solutions

### ANA-CH18-E001 — Exercise 1: MCT for indicators

If measurable \(E_n\uparrow E\), recover continuity from below using MCT.


<details>
<summary>Hint 1</summary>

Translate set inclusion and union into monotonicity and a limit of indicators.

</details>
<details>
<summary>Hint 2</summary>

The integral of each indicator is the measure of its set.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH18-E001 — Solution

The indicators satisfy \(1_{E_n}\uparrow 1_E\). MCT gives \(\mu(E_n)=\int 1_{E_n}\uparrow \int 1_E=\mu(E)\).


</details>

### ANA-CH18-E002 — Exercise 2: Sum-integral exchange

For nonnegative measurable \(u_n\), prove \(\int \sum u_n=\sum\int u_n\).


<details>
<summary>Hint 1</summary>

Use finite partial sums of the nonnegative functions.

</details>
<details>
<summary>Hint 2</summary>

They increase to the full series, so apply monotone convergence after finite additivity.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH18-E002 — Solution

The partial sums \(S_N=\sum_{n=1}^N u_n\) increase to the full sum. MCT gives \(\int S_N\uparrow \int \sum u_n\), while finite linearity gives \(\int S_N=\sum_{n=1}^N\int u_n\). Taking limits proves the identity.


</details>

### ANA-CH18-E003 — Exercise 3: Fatou on moving mass

Apply Fatou to \(f_n=1_{[n,n+1]}\).


<details>
<summary>Hint 1</summary>

Find the value at each fixed input once the moving interval has passed it.

</details>
<details>
<summary>Hint 2</summary>

Compare the integral of the pointwise lower limit with the constant term integrals; Fatou need not be equality.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH18-E003 — Solution

The pointwise liminf is zero, so the left side is zero. Every integral is one, so the right liminf is one. Fatou states \(0\le 1\), strictly; it does not assert equality.


</details>

### ANA-CH18-E004 — Exercise 4: Concentrating spike

For \(f_n=n\,1_{(0,1/n)}\), compute the pointwise almost-everywhere limit and integrals.


<details>
<summary>Hint 1</summary>

For a fixed positive input, the support eventually lies entirely to its left.

</details>
<details>
<summary>Hint 2</summary>

The spike height and support length have product one.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH18-E004 — Solution

For every \(x>0\), eventually \(x>1/n\), so \(f_n(x)=0\); the limit is zero almost everywhere. Yet \(\int f_n=n(1/n)=1\). Integral convergence fails.


</details>

### ANA-CH18-E005 — Exercise 5: No common integrable envelope

Explain why the spike sequence cannot be dominated by one integrable \(g\).


<details>
<summary>Hint 1</summary>

Assume a common integrable dominator exists and check the dominated-convergence hypotheses.

</details>
<details>
<summary>Hint 2</summary>

The already calculated term integrals would then have to approach the zero limit integral.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH18-E005 — Solution

If such \(g\) existed, DCT would imply \(\int f_n\to 0\), contradicting the constant integrals 1. More directly, domination forces \(g(x)\ge n\) for every \(n<1/x\), giving behavior comparable to \(1/x\) near zero, which is not integrable.


</details>

### ANA-CH18-E006 — Exercise 6: A DCT application

Compute \(\lim_n\int _0^1 x^n dx\) using DCT.


<details>
<summary>Hint 1</summary>

Locate the exceptional endpoint of the pointwise limit.

</details>
<details>
<summary>Hint 2</summary>

The constant function one is an integrable dominator on this finite interval.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH18-E006 — Solution

We have \(x^n\to 0\) for almost every \(x\in [0,1]\); the exceptional endpoint has measure zero. Also \(0\le x^n\le 1\), and 1 is integrable on \([0,1]\). DCT gives limit integral zero, agreeing with \(1/(n+1)\).


</details>

### ANA-CH18-E007 — Exercise 7: Audit a failed DCT argument

Someone claims that DCT proves
\(\int _0^\infty e^{-x}\sin(nx)dx\to 0\) because \(e^{-x}\) is an integrable envelope. Identify
the missing hypothesis. Does the claimed integral limit nevertheless hold?


<details>
<summary>Hint 1</summary>

An integrable envelope is only one of the dominated-convergence hypotheses.

</details>
<details>
<summary>Hint 2</summary>

The sine factors do not settle pointwise; direct integration can still establish the claimed numerical limit.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH18-E007 — Solution

Pointwise convergence of \(\sin(nx)\) does not exist for almost
every \(x\), so DCT cannot be invoked for the whole sequence. The envelope
\(e^{-x}\) is integrable, but domination alone is insufficient. The numerical
claim is still true for another reason: direct integration gives
\(\int _0^\infty e^{-x}\sin(nx)dx=n/(1+n^2)\to 0\). This example separates a true conclusion
from an invalid proof.


</details>

### ANA-CH18-E008 — Exercise 8: Parameter continuity

Prove \(F(t)=\int _0^1 1/(1+t x^2)dx\) is continuous for \(t\ge 0\).


<details>
<summary>Hint 1</summary>

Test continuity along an arbitrary parameter sequence converging to the chosen nonnegative parameter.

</details>
<details>
<summary>Hint 2</summary>

All integrands are bounded by one on the same finite interval.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH18-E008 — Solution

For \(t_n\to t\ge 0\), the integrands converge pointwise. They are bounded by 1 on \([0,1]\), an integrable envelope. DCT gives \(F(t_n)\to F(t)\), which is sequential continuity.


</details>

### ANA-CH18-E009 — Exercise 9: Differentiate a Laplace integral

Let \(F(t)=\int _0^\infty e^{-tx}h(x)dx\) for \(t>0\), with \(|h(x)|\le 1\). Fix
\(t\ge t_0>0\) and justify \(F'(t)=-\int _0^\infty xe^{-tx}h(x)dx\).


<details>
<summary>Hint 1</summary>

Control derivatives uniformly over a parameter neighbourhood bounded away from zero.

</details>
<details>
<summary>Hint 2</summary>

A mean-value estimate also dominates the difference quotients by an integrable exponential tail.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH18-E009 — Solution

Fix \(t\ge t_0\) and restrict \(s\) to a neighborhood with
\(s\ge t_0/2\). The partial derivative is \(-xe^{-sx}h(x)\) and has magnitude at most
\(xe^{-(t_0/2)x}\), whose integral is \(4/t_0^2\). By the mean value theorem, the
same function dominates difference quotients for sufficiently small
increments. DCT therefore permits differentiation and gives the stated
formula.


</details>

### ANA-CH18-E010 — Exercise 10: Bounded convergence

If \(\mu(X)=4\), \(|f_n|\le 3\), and \(f_n\to 0\) almost everywhere, show \(\int |f_n|\to 0\).


<details>
<summary>Hint 1</summary>

Apply dominated convergence to the absolute values.

</details>
<details>
<summary>Hint 2</summary>

A constant bound is integrable because the whole space has finite measure.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH18-E010 — Solution

The common envelope is \(3\cdot 1_X\), whose integral is \(12<\infty\). DCT applied to \(|f_n|\) gives the conclusion.


</details>

### ANA-CH18-E011 — Exercise 11: Why finite measure is used

Give a uniformly bounded pointwise-null sequence on \(R\) whose integrals stay one.


<details>
<summary>Hint 1</summary>

Move a unit-width indicator toward infinity.

</details>
<details>
<summary>Hint 2</summary>

The constant envelope has infinite integral on the real line.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH18-E011 — Solution

Take \(f_n=1_{[n,n+1]}\). It is bounded by 1 and converges pointwise to zero, but each integral is one. The constant envelope is not integrable on \(R\).


</details>

### ANA-CH18-E012 — Exercise 12: \(L^1\) implies convergence in measure

If \(\int |f_n-f|\to 0\), prove \(f_n\to f\) in measure.


<details>
<summary>Hint 1</summary>

Apply Markov to the nonnegative error.

</details>
<details>
<summary>Hint 2</summary>

For each positive tolerance, divide its integral by that fixed tolerance.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH18-E012 — Solution

Markov's inequality gives
\[\mu(|f_n-f|>\varepsilon)\le (1/\varepsilon)\int |f_n-f|\to 0\]
for every \(\varepsilon>0\).


</details>

### ANA-CH18-E013 — Exercise 13: Uniform implies \(L^1\) on finite measure

If \(\mu(X)<\infty\), each \(f_n\in L^1\), \(f\in L^1\), and \(f_n\to f\) uniformly, prove \(L^1\) convergence.


<details>
<summary>Hint 1</summary>

Compare total integral error with worst-case error times the domain measure.

</details>
<details>
<summary>Hint 2</summary>

The finite-measure factor is independent of the sequence index.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH18-E013 — Solution

We have
\(\int |f_n-f|\le \mu(X)\lVert f_n-f\rVert_\infty\),
and the uniform norm tends to zero.


</details>

### ANA-CH18-E014 — Exercise 14: Almost everywhere but not in measure on an infinite space

Show \(f_n=1_{[n,\infty)}\) converges pointwise to zero but not in measure on \(R\).


<details>
<summary>Hint 1</summary>

Follow a fixed point as the half-line endpoint increases.

</details>
<details>
<summary>Hint 2</summary>

For a tolerance below one, the error superlevel set remains an infinite-measure half-line.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH18-E014 — Solution

For every fixed \(x\), eventually \(n>x\), so \(f_n(x)=0\). But for \(\varepsilon=1/2\), the set \(\{f_n>\varepsilon\}=[n,\infty)\) has infinite measure for every \(n\), so its measure does not tend to zero.


</details>

### ANA-CH18-E015 — Exercise 15: Tonelli for a counting function

Let \(N(x)=\sum 1_{E_n}(x)\). Show \(\int N=\sum\mu(E_n)\).


<details>
<summary>Hint 1</summary>

Treat the counting function as the monotone limit of finite sums of indicators.

</details>
<details>
<summary>Hint 2</summary>

Each indicator integral is a set measure and nonnegativity prevents cancellation.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH18-E015 — Solution

All summands are nonnegative measurable. MCT or Tonelli permits exchange of the sum and integral, giving \(\int N=\sum\int 1_{E_n}=\sum\mu(E_n)\).


</details>

### ANA-CH18-E016 — Exercise 16: Fubini audit

What condition safely justifies swapping two integrals of a signed function?


<details>
<summary>Hint 1</summary>

Identify a finite integral controlling absolute mass on the product space.

</details>
<details>
<summary>Hint 2</summary>

Measurability and absolute integrability permit Fubini; conditional cancellation alone does not.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH18-E016 — Solution

Prove measurability and absolute integrability on the product space: \(\int |f|d(\mu\times \nu)<\infty\). Fubini then gives integrable slices almost everywhere and equality of both iterated integrals with the product integral.


</details>

### ANA-CH18-E017 — Exercise 17: Reverse Fatou

If \(0\le f_n\le g\) with integrable \(g\) and \(f_n\to f\) almost everywhere, combine Fatou and reverse Fatou to obtain integral convergence.


<details>
<summary>Hint 1</summary>

Use Fatou once on the original nonnegative sequence.

</details>
<details>
<summary>Hint 2</summary>

Apply it a second time to the nonnegative gaps below the common integrable envelope.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH18-E017 — Solution

Fatou gives \(\int f\le \liminf\int f_n\). Applying Fatou to \(g-f_n\) gives \(\limsup\int f_n\le \int f\). Thus liminf and limsup both equal \(\int f\), proving convergence. This is DCT in a nonnegative form.


</details>

### ANA-CH18-E018 — Exercise 18: Tail control under domination

If \(|f_n|\le g\in L^1(R)\), show tails are uniformly small: for every \(\varepsilon>0\), some \(R\) satisfies \(\int _{|x|>R}|f_n|<\varepsilon\) for all \(n\).


<details>
<summary>Hint 1</summary>

First make the tail of the common dominator small.

</details>
<details>
<summary>Hint 2</summary>

Its bound then works for every indexed function at once.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH18-E018 — Solution

Since \(g\) is integrable, \(\int _{|x|>R}g\to 0\) as \(R\to \infty\). Choose \(R\) making it below \(\varepsilon\); domination then gives the same bound for every \(f_n\).


</details>

### ANA-CH18-E019 — Exercise 19: Uniform integrability failure

Show \(f_n=n\,1_{(0,1/n)}\) is not uniformly integrable.


<details>
<summary>Hint 1</summary>

Inspect the integral carried by values above a fixed height threshold.

</details>
<details>
<summary>Hint 2</summary>

Choosing an index above that threshold leaves the entire unit spike mass in the high-value tail.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH18-E019 — Solution

Fix \(M\). For \(n>M\), the set \(\{f_n>M\}\) is \((0,1/n)\), and the integral of \(f_n\) over it is 1. Thus the supremum of high-value tail integrals never tends to zero as \(M\to \infty\).


</details>

### ANA-CH18-E020 — Exercise 20: Dominated series

Suppose \(\sum\int |u_n|<\infty\). Prove \(\sum u_n\) converges absolutely almost everywhere and may be integrated term by term.


<details>
<summary>Hint 1</summary>

Apply monotone convergence to the sum of absolute values.

</details>
<details>
<summary>Hint 2</summary>

Finite absolute integral gives almost-everywhere absolute summability and provides a dominator for the signed partial sums.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH18-E020 — Solution

MCT applied to the partial sums of \(\sum |u_n|\) gives
\(\int \sum|u_n|=\sum\int |u_n|<\infty\).
Therefore \(\sum|u_n(x)|<\infty\) almost everywhere; otherwise its integral would be
infinite. Hence \(\sum u_n\) converges absolutely almost everywhere. Its partial
sums are dominated in absolute value by the integrable function \(\sum|u_n|\), so
DCT gives convergence of their integrals to the integral of the pointwise sum.
Finite linearity then yields \(\int \sum u_n=\sum\int u_n\).


</details>

## ANA-CH18-I001 — Investigation: three ways mass defeats a limit

Construct three pointwise-convergent sequences representing escape to infinity, concentration into shrinking sets, and cancellation/oscillation. For each, calculate term integrals, the limit integral, and at least one of: tail mass, high-value mass, or absolute mass. Determine which of MCT, Fatou, DCT, bounded convergence, or uniform integrability applies, and explain exactly why every rejected theorem fails a stated hypothesis.

## Chapter synthesis

MCT follows the order built into the nonnegative integral. Fatou turns arbitrary nonnegative sequences into increasing tail infima. DCT uses an integrable envelope to rule out both escape and concentration, and it delivers the strong conclusion of \(L^1\) convergence.

Limit interchange is never a typographical maneuver. Identify sign, monotonicity, envelope, domain measure, and tail behavior first. The right theorem is the one whose hypotheses describe the mechanism preventing mass from disappearing.

## Summary

Monotone convergence uses increasing nonnegative approximations; Fatou supplies an inequality without demanding convergence; dominated convergence uses one integrable envelope to obtain integral and absolute-error convergence. Escape, concentration and oscillation show why pointwise behavior or domination alone may be insufficient. Parameter differentiation must dominate the actual difference quotients on a parameter neighbourhood. The retained Lp chapter organizes these integral estimates into normed function spaces.
