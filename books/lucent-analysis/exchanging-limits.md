# 11. Exchanging limits, integrals, and derivatives

**Learning goals.** State sufficient hypotheses before interchanging two limits, prove when a uniform limit passes through a finite Riemann integral, distinguish the stronger derivative theorem, and establish the interior behavior of a power series while testing its endpoints separately. Prerequisites: [uniform convergence](uniform-convergence.md), the Darboux integral, the Mean Value Theorem, scalar series, and the previously constructed logarithm and exponential.

Expressions such as \(\lim_n\int f_n=\int\lim_n f_n\) describe two limiting processes. Equality is a theorem with hypotheses, not an algebraic convention. The width of the domain and the operation being passed through determine the needed control.

## Two limits near the same point

**Theorem 11.1 (Local interchange).** Let \(a\) be an accumulation point of \(D\subseteq\mathbb R\). Suppose \(L_n=\lim_{x\to a,\ x\in D}f_n(x)\) exists for every \(n\), and \(f_n\to f\) uniformly on one fixed punctured neighborhood
\[
E=D\cap\{x:0<|x-a|<\rho\}
\]
for some \(\rho>0\). Then \(L_n\) converges to a real number \(L\), \(\lim_{x\to a,\ x\in D}f(x)=L\), and
\[
\lim_{x\to a}\lim_{n\to\infty}f_n(x)
=\lim_{n\to\infty}\lim_{x\to a}f_n(x)=L.
\]
At an endpoint, \(x\to a\) means the appropriate relative one-sided limit. No value at \(a\) is assumed.

**Proof.** Uniform convergence makes \((f_n)\) uniformly Cauchy on \(E\). For \(m,n\) beyond its threshold, \(|f_m(x)-f_n(x)|<\varepsilon\) throughout \(E\); taking \(x\to a\) gives \(|L_m-L_n|\le\varepsilon\). Applying the threshold with \(\varepsilon/2\) proves \((L_n)\) is Cauchy, so completeness gives \(L_n\to L\). Given \(\varepsilon>0\), choose \(n\) large enough that \(\sup_E|f-f_n|<\varepsilon/3\) and \(|L_n-L|<\varepsilon/3\). The definition of \(L_n\) supplies \(\delta\in(0,\rho)\) with \(|f_n(x)-L_n|<\varepsilon/3\) for \(x\in D\) and \(0<|x-a|<\delta\). The three-term triangle inequality now gives \(|f(x)-L|<\varepsilon\). This proves the second limit and the equality.

For \(f_n(x)=x^n\) on \(D=[0,1)\) with \(a=1\), each inner limit \(\lim_{x\uparrow1}f_n(x)=1\). But the pointwise limit \(f\) is zero on \(D\), so \(\lim_{x\uparrow1}f(x)=0\). The two iterated limits are \(1\) and \(0\). The convergence is uniform on every \([0,r]\) with \(r<1\), but there is no *single* neighborhood touching \(1\) on which it is uniform. Interior compact control cannot be silently extended to an endpoint.

Uniformity is sufficient, not logically necessary for equality of two particular iterated limits. For example \(q_n(x)=nx/(1+n^2x^2)\) on \(D=(0,1)\) has both iterated limits at \(a=0\) equal to zero: for fixed \(n\), \(q_n(x)\to0\) as \(x\downarrow0\), and for fixed \(x>0\), \(q_n(x)\to0\) as \(n\to\infty\). Yet \(q_n(1/n)=1/2\) for \(n>1\), so convergence is not uniform on any fixed neighborhood of \(0\). A correct conclusion in one example does not make the invalid general rule true.

## A finite Riemann integral

**Theorem 11.2.** Let \(a<b\). If each \(f_n\) is Riemann integrable on \([a,b]\) and \(f_n\to f\) uniformly there, then \(f\) is Riemann integrable and
\[
\lim_{n\to\infty}\int_a^b f_n(x)\,dx
=\int_a^b f(x)\,dx.
\]

**Proof of existence.** Choose \(N\) with \(|f-f_N|<1\) everywhere. Since \(f_N\) is bounded, so is \(f\). Given \(\varepsilon>0\), put \(\eta=\varepsilon/[4(b-a)]\) and choose \(N\) with \(\|f-f_N\|_\infty<\eta\). On every subinterval of any partition \(P\), the supremum of \(f\) is at most the supremum of \(f_N\) plus \(\eta\), and its infimum is at least that of \(f_N\) minus \(\eta\). Therefore
\[
U(f,P)-L(f,P)
\le U(f_N,P)-L(f_N,P)+2\eta(b-a).
\]
Integrability of \(f_N\) supplies a partition with its gap \(<\varepsilon/2\); the displayed second term equals \(\varepsilon/2\). Their sum is therefore strictly below \(\varepsilon\). The Darboux criterion proves that \(f\) is integrable.

**Proof of convergence.** The integral inequality gives
\[
\left|\int_a^b f_n-\int_a^b f\right|
\le(b-a)\|f_n-f\|_\infty\longrightarrow0.
\]
The finite factor \(b-a\) is where the bounded interval enters. For a uniformly convergent series \(\sum u_k\) of integrable functions on \([a,b]\), apply the theorem to its partial sums. Finite linearity then yields
\[
\int_a^b\sum_{k=0}^{\infty}u_k(x)\,dx
=\sum_{k=0}^{\infty}\int_a^b u_k(x)\,dx.
\]
The M-test is one way to establish the needed uniform convergence; it is not a separate integration rule.

## A moving triangle: three different guarantees

For integers \(n\ge2\), define on \([0,1]\)
\[
f_n(x)=\max(1-n|x-1/n|,0).
\]
Before opening a diagram, predict separately what happens to a fixed input, the largest error anywhere, and the total area. The question is whether these three observations support the same conclusion. This develops the moving-witness argument from [uniform convergence](uniform-convergence.md) into a test of both integral interchange and finite numerical evidence.

```visual-story
{
  "id": "moving-triangle-sampling",
  "title": "What can a grid say about a moving triangle?",
  "prompt": "Keep pointwise error, supremum error, and integral error separate. Save a prediction before each diagram, then compare and revise it using an exact argument.",
  "stages": [
    {
      "title": "Fix an input, then move the index",
      "body": "Use the unit-height family f_n on [0,1]. First fix a=1/4; then ask what changes when the input is chosen after n. The scene selects k=floor(n), so noninteger control entries still select an integer sequence term.",
      "question": "Prove the pointwise limit, including x=0. Does the moving input x_n=1/n change that limit, or test a different quantifier? Predict the supremum and integral before exploring.",
      "checkpoint": {
        "hint": "Find the interval where f_n is positive. A fixed positive input eventually lies to its right, while x_n=1/n follows its center.",
        "explanation": "At zero, f_n(0)=0 for every n. For fixed x>0, choose an integer N≥2 with N>2/x. Then n≥N implies x>2/n and f_n(x)=0, proving pointwise convergence to zero. But x_n=1/n lies in [0,1] and f_n(x_n)=1. Since 0≤f_n≤1, the supremum error is exactly 1 for every n, so convergence is not uniform: ε₀=1/2 defeats every proposed threshold using a later n and x_n. The graph is a triangle with base 2/n and height 1, so its integral is 1/n→0. Thus the integrals converge to the zero limit's integral even though the sufficient uniform-convergence theorem is unavailable.",
        "criteria": [
          "Checks zero separately and gives a threshold for each fixed positive input.",
          "Uses a legal moving input to negate the uniform quantifiers.",
          "Proves the supremum and area separately and treats uniformity as sufficient."
        ]
      },
      "transition": "none",
      "focus": ["line-rising", "line-falling", "point-witness", "point-observer"],
      "scene": [
        "scene \"A fixed observer and a moving peak\";",
        "domain 0 1;",
        "range -0.1 1.15;",
        "param n = 8 from 2 to 64;",
        "let k = floor(n);",
        "fn f(x) = (1-k*abs(x-1/k)+abs(1-k*abs(x-1/k)))/2;",
        "segment rising from (0,0) to (1/k,1) color blue;",
        "segment falling from (1/k,1) to (2/k,0) color blue;",
        "segment zero_tail from (2/k,0) to (1,0) color blue;",
        "point observer = (1/4,f(1/4)) color amber;",
        "point witness = (1/k,1) color rose;",
        "measure selected_index = k;",
        "measure fixed_input_value = f(1/4);",
        "measure supremum_error = 1;",
        "measure exact_integral = 1/k;"
      ]
    },
    {
      "title": "Keep one finite grid fixed",
      "body": "Sample only G_8={0,1/8,…,1}. The blue segments still pass through the exact triangle vertices; the amber points show the nine grid evaluations. Compare those two sources of visual information.",
      "question": "Find the first integer index after which every G_8 value is exactly zero. Generalize to G_m={j/m:0≤j≤m} and explain why zero sample error cannot certify small supremum error.",
      "checkpoint": {
        "hint": "The first positive grid node is 1/m. Equality with the right support endpoint already gives function value zero.",
        "explanation": "The function is positive exactly when 0<x<2/n. For n≥2m, every positive grid node is at least 1/m≥2/n, so all samples, including the zero endpoint, equal zero. Conversely, if 2≤n<2m, the node 1/m satisfies 0<1/m<2/n and has positive value. Thus n≥2m is the exact threshold, and for G_8 it is 16. Nevertheless f_n(1/n)=1, so the supremum error remains 1. More generally, for any fixed finite set S⊆[0,1] with a positive member, let d be its smallest positive member. For n≥2/d every sample is zero; if S contains only zero the conclusion already holds. This argument concerns a fixed finite set, not a grid refined with n.",
        "criteria": [
          "Includes the boundary case n=2m and obtains the threshold 16 for G_8.",
          "Distinguishes maximum sample error from the supremum on the whole interval.",
          "Explains why any fixed finite set eventually misses the positive support."
        ]
      },
      "transition": "reveal",
      "focus": ["line-rising", "line-falling", "point-grid1"],
      "scene": [
        "scene \"A finite grid and an exact unsampled witness\";",
        "domain 0 1;",
        "range -0.1 1.15;",
        "param n = 64 from 2 to 64;",
        "let k = floor(n);",
        "fn f(x) = (1-k*abs(x-1/k)+abs(1-k*abs(x-1/k)))/2;",
        "segment rising from (0,0) to (1/k,1) color blue;",
        "segment falling from (1/k,1) to (2/k,0) color blue;",
        "segment zero_tail from (2/k,0) to (1,0) color blue;",
        "point grid0 = (0,f(0)) color amber;",
        "point grid1 = (1/8,f(1/8)) color amber;",
        "point grid2 = (2/8,f(2/8)) color amber;",
        "point grid3 = (3/8,f(3/8)) color amber;",
        "point grid4 = (4/8,f(4/8)) color amber;",
        "point grid5 = (5/8,f(5/8)) color amber;",
        "point grid6 = (6/8,f(6/8)) color amber;",
        "point grid7 = (7/8,f(7/8)) color amber;",
        "point grid8 = (1,f(1)) color amber;",
        "point witness = (1/k,1) color rose;",
        "measure selected_index = k;",
        "measure first_grid_value = f(1/8);",
        "measure witness_value = f(1/k);",
        "measure exact_integral = 1/k;"
      ]
    },
    {
      "title": "Change the height before interchanging",
      "body": "Now define s_n=n f_n on the same interval. The support and the sampling nodes stay fixed for a chosen n; only the vertical scaling changes. The larger vertical range lets you inspect this new family.",
      "question": "Which pointwise and sampling arguments survive multiplication by n? Recompute the supremum and integral, then decide whether integrating the pointwise limit gives the limit of the integrals.",
      "checkpoint": {
        "hint": "Eventual exact zero survives any finite multiplier. Use the new triangle height rather than inferring area from width alone.",
        "explanation": "For each fixed x, f_n(x) is eventually exactly zero, so s_n(x)=n f_n(x) is eventually zero too. Thus the pointwise limit is again zero. The support is unchanged, so G_m again reports only zeros for n≥2m. But s_n(1/n)=n and 0≤s_n≤n, giving supremum n. Its exact triangular area is (1/2)(2/n)n=1 for every n. Hence lim_n ∫₀¹s_n=1 whereas ∫₀¹lim_n s_n=0. The fixed-grid guarantee is only about those finitely many values. Uniform convergence would control every input and justify finite-interval integral interchange; this family has no such control.",
        "criteria": [
          "Uses eventual exact zero, rather than the invalid rule n times a null sequence tends to zero.",
          "Recomputes both peak height and area after scaling.",
          "States the unequal integral limits and identifies the missing uniform hypothesis."
        ]
      },
      "transition": "camera",
      "focus": ["line-rising", "line-falling", "point-witness"],
      "scene": [
        "scene \"The same support can carry unit area\";",
        "domain 0 1;",
        "range -0.2 21;",
        "param n = 8 from 2 to 20;",
        "let k = floor(n);",
        "segment rising from (0,0) to (1/k,k) color blue;",
        "segment falling from (1/k,k) to (2/k,0) color blue;",
        "segment zero_tail from (2/k,0) to (1,0) color blue;",
        "point witness = (1/k,k) color rose;",
        "measure selected_index = k;",
        "measure supremum_error = k;",
        "measure exact_integral = 1;"
      ]
    }
  ]
}
```

The exact argument supplies three separate answers. Each \(f_n\) is continuous and piecewise affine, hence Riemann integrable. Since \(f_n(0)=0\) and every fixed \(x>0\) lies beyond \(2/n\) eventually, \(f_n\to0\) pointwise. But the legal input \(x_n=1/n\) satisfies \(f_n(x_n)=1\), while \(0\le f_n\le1\), so \(\|f_n\|_\infty=1\): convergence is not uniform. The base \(2/n\) and height \(1\) give \(\int_0^1f_n=1/n\to0\). Thus uniform convergence is a sufficient condition for finite-integral interchange, not a necessary condition in each particular example. For \(s_n=n f_n\), the same eventual-zero proof gives pointwise zero, but \(\|s_n\|_\infty=n\) and \(\int_0^1s_n=1\). The interchange fails in that changed case.

### Notebook: when two resolutions agree

Save a prediction for the nine endpoint values, the two midpoint sums, and the witness value at the authored \(n=64\). The notebook uses \(\max(t,0)=(t+|t|)/2\). Its scalar calculations, table, and midpoint sums are floating-point computations; the formulas in the preceding proof are exact. The scene draws authored segments through the exact vertices rather than hoping a sampled plot hits the peak.

```notebook
param n = 64 from 2 to 64;
let k = floor(n);
fn f(x) = (1-k*abs(x-1/k)+abs(1-k*abs(x-1/k)))/2;
table f from 0 to 1 count 9;
integrate f from 0 to 1 count 8 as coarse;
integrate f from 0 to 1 count 16 as fine;
show coarse;
show fine;
show f(1/k);
show 1/k;
```

At \(n=64\), both midpoint sums are zero, but the integral is \(1/64\) and the supremum is \(1\). For \(M\) equal cells the first midpoint is \(1/(2M)\). Every midpoint value is zero when \(n\ge4M\), including equality, so agreement of the 8- and 16-cell answers supplies no error certificate. Set \(n=16\) and compare again, then reset \(n=64\). Add `fn s(x) = k*f(x);` after the definition of `f`, change the table and both integral commands to use `s`, and replace the last two readouts by `show s(1/k);` and `show 1;`. The two sums still agree at zero while the true integral is \(1\). Save your first explanation draft, then revise it to state exactly what the agreement establishes.

A finite grid controls a supremum only with additional information between its nodes. For example, if \(h\) has a **proved** Lipschitz constant \(L\) and a grid has covering radius \(r\) (every input is within \(r\) of a node), then
\[
\|h\|_\infty\le\max_{q\text{ a grid node}}|h(q)|+Lr.
\]
Choose a nearby node and apply the triangle inequality to prove this bound. For \(G_m\), \(r=1/(2m)\). The triangle \(f_n\) has slopes \(n\) and \(-n\), hence Lipschitz constant \(n\); its bound is sample error plus \(n/(2m)\), which does not shrink on a fixed grid. A claimed common Lipschitz constant cannot be inferred from these samples. The [independent narrow-hill task](#independent-practice-and-transfer) below asks whether the mechanism survives when no triangle or eventual exact-zero argument is available.

```exercise
{"id":"analysis-exchange-grid-diagnostic","type":"choice","prompt":"At n=64 the 8-cell and 16-cell midpoint sums of s_n=n f_n both equal zero. Which conclusion is justified?","options":[{"label":"The integral is zero because the two resolutions agree.","correct":false,"feedback":"Both fixed grids miss the positive support. The exact triangle still has area one."},{"label":"Only those sampled values are zero; a global or integral error bound needs more information.","correct":true,"feedback":"Agreement is a finite observation. Here the exact witness has height 64 and the exact area is one."},{"label":"The pointwise zero limit makes convergence uniform.","correct":false,"feedback":"The moving input 1/n has s_n(1/n)=n, so no threshold controls every input."},{"label":"Integral interchange must fail for every nonuniform sequence.","correct":false,"feedback":"For the original f_n, the integral is 1/n and tends to zero despite nonuniform convergence. Uniformity is sufficient, not necessary."}],"hints":["Compare both sampled sums with the exact base-times-height calculation."],"solution":"The second statement is justified. The samples miss the spike, while a separate exact calculation gives integral one. A verified regularity bound can connect samples to unsampled values; grid agreement alone cannot."}
```

## A longer interval changes the theorem

Even **uniform** convergence does not by itself justify an improper integral over an unbounded interval. Define \(v_n(x)=1/n\) for \(0\le x\le n\) and \(v_n(x)=0\) for \(x>n\). Then \(\|v_n\|_{\infty,[0,\infty)}=1/n\to0\), while \(\int_0^\infty v_n=1\) for every \(n\), and the zero limit has integral zero. Each \(v_n\) is Riemann integrable on finite intervals and has an improper integral. The estimate on \([0,B]\) is \(B/n\); no finite bound survives after \(B\to\infty\). A valid replacement would need separate control of the tails \(\int_B^\infty f_n\), uniformly in \(n\), along with finite-interval convergence.

### A positive improper-integral replacement

**Theorem 11.3 (Uniform-tail).** Let \(f_n:[0,\infty)\to\mathbb R\) be Riemann integrable on every finite interval, and suppose each improper integral \(\int_0^\infty f_n\) exists. Assume:

1. \(f_n\to f\) uniformly on every fixed interval \([0,B]\);
2. the absolute tails are uniformly small:
   \[
   \forall\eta>0\ \exists B>0\ \forall n\ge1:
   \int_B^\infty |f_n(x)|\,dx<\eta.
   \]

Then \(f\) is absolutely improperly integrable and
\[
\int_0^\infty f_n(x)\,dx\longrightarrow\int_0^\infty f(x)\,dx.
\]

**Proof.** Fix \(C>0\). Local uniform convergence on \([0,C]\), together with finite-interval integrability of every \(f_n\), makes \(f\) Riemann integrable there by the finite theorem. It also gives
\[
\bigl\||f_n|-|f|\bigr\|_{\infty,[0,C]}
\le \|f_n-f\|_{\infty,[0,C]}\longrightarrow0,
\]
so the finite theorem applied to the absolute values yields
\[
\int_B^C|f|
=\lim_{n\to\infty}\int_B^C|f_n|
\quad(0\le B<C).
\]
Here finite-interval integrability of \(|f_n|\) follows from
\(\operatorname{osc}(|f_n|,I)\le\operatorname{osc}(f_n,I)\).

Given \(\eta>0\), choose \(B\) from the uniform-tail hypothesis. For every \(C>B\),
\[
\int_B^C|f|
=\lim_n\int_B^C|f_n|
\le\eta.
\]
Thus the increasing partial integrals \(\int_0^C|f|\) are bounded above by
\(\int_0^B|f|+\eta\), so they have a finite limit. This proves absolute improper integrability of \(f\); it is the improper Cauchy step, not a conclusion from local uniformity alone.

Finally fix \(\varepsilon>0\), use the tail hypothesis with \(\eta=\varepsilon/4\), and keep its \(B\). The argument above also gives \(\int_B^\infty|f|\le\varepsilon/4\). Local uniform convergence on this one \([0,B]\) makes
\[
\int_0^B|f_n-f|
\le B\|f_n-f\|_{\infty,[0,B]}<\varepsilon/4
\]
for all sufficiently large \(n\) (with the case \(B=0\) immediate). Therefore
\[
\left|\int_0^\infty f_n-\int_0^\infty f\right|
\le\int_0^B|f_n-f|+\int_B^\infty|f_n|+\int_B^\infty|f|
<\frac{3\varepsilon}{4}<\varepsilon.
\]
Local uniformity controlled the finite interval, uniform absolute tails produced the limit integral and both tail estimates, and finite-interval integrability licensed every displayed integral. ∎

## Differentiation needs control of derivatives

Uniform convergence of functions alone is insufficient. On \(\mathbb R\), \(f_n(x)=\sin(nx)/n\) converges uniformly to zero, yet \(f_n'(0)=1\) for all \(n\), while the derivative of the limit is zero. Conversely, derivatives alone cannot control additive constants: \(f_n(x)=n\) has \(f_n'=0\) but has no finite pointwise limit.

**Theorem 11.4 (Differentiation).** Let each \(f_n\) be continuous on \([a,b]\) and differentiable on \((a,b)\). Suppose \(f_n'\to g\) uniformly on \((a,b)\), and \(f_n(c)\) converges for one \(c\in[a,b]\). Then \(f_n\) converges uniformly on \([a,b]\) to a function \(f\), and \(f'(x)=g(x)\) for all \(x\in(a,b)\). We do not assume the derivatives are continuous; the conclusion concerns interior derivatives.

**Proof of uniform convergence.** Apply the Mean Value Theorem to \(f_n-f_m\) between \(c\) and any \(x\in[a,b]\):
\[
|f_n(x)-f_m(x)|
\le |f_n(c)-f_m(c)|+(b-a)\sup_{t\in(a,b)}|f_n'(t)-f_m'(t)|.
\]
The scalar values at \(c\) are Cauchy, and uniform convergence of the derivatives makes the second term uniformly small. Thus \((f_n)\) is uniformly Cauchy on \([a,b]\), and completeness gives a uniform limit \(f\). The continuity theorem gives continuity of \(f\).

**Proof of the derivative claim.** Write \(d_n=\sup_{(a,b)}|f_n'-g|\to0\). For any \(m\), the Mean Value Theorem gives
\[
|(f_n-f_m)(y)-(f_n-f_m)(x)|
\le(d_n+d_m)|y-x|
\quad(x,y\in[a,b]).
\]
Let \(m\to\infty\) to obtain \(|(f_n-f)(y)-(f_n-f)(x)|\le d_n|y-x|\). For interior \(x\) and sufficiently small nonzero \(h\), divide by \(|h|\):
\[
\left|\frac{f(x+h)-f(x)}h-g(x)\right|
\le d_n+
\left|\frac{f_n(x+h)-f_n(x)}h-f_n'(x)\right|
+d_n.
\]
First choose \(n\) with \(2d_n\) small; then let \(h\to0\) for this fixed differentiable \(f_n\). The difference quotient tends to \(g(x)\). This order of choices is why uniform control of derivatives works.

For a series of differentiable functions \(\sum_{k=0}^{\infty}u_k\), apply the theorem to partial sums. It is enough that \(\sum u_k(c)\) converges at one point and \(\sum u_k'\) converges uniformly on \((a,b)\); then the original series converges uniformly on \([a,b]\) and its derivative is \(\sum u_k'\) in the interior. Requiring convergence of the derivative series alone omits the additive constant.

## Power series: the interior is controlled, endpoints are separate

For \(\sum_{n=0}^{\infty}a_n(x-c)^n\), define \(R\in[0,\infty]\) as the supremum of radii \(r\ge0\) for which \(\sum_n|a_n|r^n\) converges. At \(r=0\), the series consists of \(a_0\); \(R=0\) leaves no open interior interval.

Suppose \(R>0\) and \(0\le r<R\). Choose \(s\) with \(r<s<R\) for which the series converges absolutely at radius \(s\); such an \(s\) exists by the definition of the supremum and downward closure of absolute convergence. The terms \(|a_n|s^n\) are bounded by some \(M\). For \(|x-c|\le r\),
\[
|a_n(x-c)^n|\le M(r/s)^n.
\]
The geometric majorant and the M-test give absolute, uniform convergence on every closed interval \([c-r,c+r]\). If \(|x-c|>R\) and the series converged there, its terms would be bounded, and the same comparison would force absolute convergence at every smaller positive radius, including one greater than \(R\), a contradiction. Thus the series diverges outside its radius. No conclusion about either endpoint \(c\pm R\) follows from this argument.

For \(0<r<s<R\), the derivative terms have the majorant
\[
|n a_n(x-c)^{n-1}|
\le \frac{M}{s}\,n(r/s)^{n-1}
\quad(|x-c|\le r).
\]
The numerical series on the right converges, so the derivative series converges uniformly on \([c-r,c+r]\). The partial sums all take value \(a_0\) at \(c\); the differentiation theorem proves
\[
\frac{d}{dx}\sum_{n=0}^{\infty}a_n(x-c)^n
=\sum_{n=1}^{\infty}n a_n(x-c)^{n-1}
\quad(|x-c|<R).
\]
For any fixed \([u,v]\subset(c-R,c+R)\), uniform convergence also gives termwise integration by the finite-interval theorem. The center \(c\) is included in every compact symmetric interval; to cover a given interior point, take \(r>|x-c|\). The proofs give **local uniformity** on the open interval, which is different from uniform convergence on the entire open interval.

**Worked example 1.** \(\sum_{n=0}^{\infty}x^n\) has \(R=1\) and sum \((1-x)^{-1}\) for \(|x|<1\). The derivative series \(\sum_{n=1}^{\infty}n x^{n-1}\) converges uniformly on every \([-r,r]\) with \(r<1\) and equals \((1-x)^{-2}\) there. At \(x=1\), the original terms do not tend to zero; at \(x=-1\), they oscillate. Neither endpoint belongs to the convergence set.

**Worked example 2.** \(F(x)=\sum_{n=1}^{\infty}x^n/n^2\) has \(R=1\), and the M-test with \(1/n^2\) gives uniform convergence even on \([-1,1]\). Thus \(F\) is continuous at both endpoints. In the interior \(F'(x)=\sum_{n=1}^{\infty}x^{n-1}/n\). As \(x\uparrow1\), this derivative tends to \(+\infty\): any prescribed finite harmonic partial sum is eventually a lower bound. The Mean Value Theorem then makes \([F(1)-F(x)]/(1-x)\to+\infty\). Thus \(F\) has no finite left derivative at \(1\). Uniform convergence of the original series at an endpoint does not permit termwise differentiation there.

## Guided decisions

1. A proposed proof writes \(\int_0^\infty f_n\to\int_0^\infty f\) because \(\|f_n-f\|_\infty\to0\). Locate the exact line of the finite-interval proof that fails.
2. A student knows only \(f_n'(x)\to g(x)\) for each \(x\) and \(f_n(0)\to A\). Can the differentiation theorem be invoked?
3. A power series converges at both endpoints. Does that alone make its differentiated series converge at both endpoints?

<details><summary>Decision feedback</summary>

1. The bound multiplies the supremum error by \(b-a\). On \([0,\infty)\), no finite length controls the full integral. The family \(v_n\) has unit integral despite uniform convergence to zero.
2. No. Pointwise derivative convergence does not supply the common bound used in the Mean Value Theorem step. Uniform convergence of derivatives on the interval is the hypothesis.
3. No. \(F(x)=\sum x^n/n^2\) converges at \(x=1\), but its formal derivative there would have harmonic terms \(1/n\). Only interior compact intervals are covered automatically.

</details>

```exercise
{"id":"analysis-exchange-improper-diagnostic","type":"choice","prompt":"Which hypothesis package guarantees convergence of improper integrals on [0,∞) by the theorem just proved?","options":[{"label":"Uniform convergence on every [0,B], local Riemann integrability, and uniformly small absolute tails.","correct":true,"feedback":"Local uniformity controls the finite part, while one tail bound works for the whole family and produces an integrable limit."},{"label":"Uniform convergence on all of [0,∞), with no tail condition.","correct":false,"feedback":"The escaping blocks v_n converge uniformly to zero but all have integral one."},{"label":"Uniform convergence on every [0,B], with no information beyond B.","correct":false,"feedback":"Mass can escape to infinity; local conclusions do not control an improper tail."},{"label":"Equality of the two iterated point limits, with no uniformity.","correct":false,"feedback":"Equal iterated limits can occur without uniform convergence and do not control any integral tail."}],"hints":["Locate separately the finite-interval estimate and the two improper-tail terms in the three-part split."],"solution":"The first package matches every step of the proof. Each rejected package omits the uniform absolute-tail estimate that prevents mass from escaping to infinity."}
```

## Independent practice and transfer

Write a proof before using the notebook. A computation can expose a wrong prediction but cannot certify a limit or an integral.

```exercise
{"id":"analysis-exchange-uniform-tail-transfer","type":"written","prompt":"For positive integers n and x≥0, let f_n(x)=e^(−x)(1+sin(nx)/n). Prove the improper integrals converge to 1 by verifying the uniform-tail theorem. Do not evaluate the oscillatory integral ∫e^(−x)sin(nx) dx.","hints":["The difference from e^(−x) is at most e^(−x)/n on the whole half-line.","Use |1+sin(nx)/n|≤2 and integrate the exponential tail."],"rubric":["Establishes local Riemann integrability and existence of the improper integrals","Proves local or global uniform convergence to e^(−x)","Supplies a tail bound uniform in n","Uses the theorem with every hypothesis identified","Bounds the integral error by 1/n without evaluating the oscillatory integral"],"solution":"Each f_n is continuous on [0,∞), hence locally Riemann integrable. Also |f_n(x)|≤e^(−x)(1+1/n)≤2e^(−x), so each improper integral converges absolutely and ∫_B^∞|f_n|≤2e^(−B), uniformly in n. Moreover |f_n(x)−e^(−x)|≤e^(−x)/n≤1/n, so convergence is uniform on the whole half-line and in particular on every [0,B]. The uniform-tail theorem applies and gives ∫_0^∞f_n→∫_0^∞e^(−x)dx=1. Directly, |∫_0^∞f_n−1|≤(1/n)∫_0^∞e^(−x)dx=1/n. No value of the oscillatory integral was used.","transfer":"Changed case: replace sin(nx)/n by sin(nx)/√n. Prove the same conclusion and state the changed quantitative error bound.","transferSolution":"The bounds become |f_n−e^(−x)|≤e^(−x)/√n and |f_n|≤2e^(−x). Thus the same uniform tail works, the theorem applies, and the integral error is at most 1/√n."}
```

```exercise
{"id":"analysis-exchange-narrow-hill","type":"written","prompt":"Independent transfer: for integers \\(n\\ge2\\), let \\(H_n(x)=n^2x(1-x)^n\\) on \\([0,1]\\). Determine its pointwise limit, locate and estimate its maximum, and compute the limit of its integrals. Explain why a fixed finite midpoint sum tends to zero. Are its interior samples eventually exactly zero, as for the triangle? State which finite-integral theorem is unavailable and why.","hints":["First separate the endpoint cases from a fixed interior input. For \\(0<r<1\\), the ratio of consecutive terms of \\(n^2r^n\\) tends to \\(r\\), so these terms eventually decay geometrically.","Next differentiate to locate the peak. For the integral, substitute \\(u=1-x\\) and integrate the two resulting powers; the graph is not a triangle.","Finally fix the midpoint grid before letting \\(n\\) grow. There are finitely many positive interior sample values: each tends to zero, but none becomes exactly zero."],"rubric":["Proves pointwise convergence, including both endpoints","Uses a legal moving maximum to decide uniform convergence","Computes an exact integral before passing to its limit","Distinguishes sample values tending to zero from eventual exact zeros","Explains the order of the grid and sequence limits","Identifies the missing uniform hypothesis without treating it as necessary for every equality"],"solution":"Both endpoint values are zero. At a fixed \\(0<x<1\\), put \\(r=1-x\\in(0,1)\\). The ratio \\(r(1+1/n)^2\\) of consecutive \\(n^2r^n\\) terms is eventually bounded by a number below one, so \\(H_n(x)\\to0\\). Differentiation gives\n\\[\n\\begin{aligned}\nH_n'(x)&=n^2(1-x)^{n-1}\\\\\n&\\quad\\cdot(1-(n+1)x).\n\\end{aligned}\n\\] Thus the maximum occurs at \\(x_n=1/(n+1)\\), where\n\\[\n\\begin{aligned}\nH_n(x_n)&=n\\left(\\frac{n}{n+1}\\right)^{n+1}\\\\\n&\\sim\\frac ne.\n\\end{aligned}\n\\]\nSubstitution \\(u=1-x\\) gives\n\\[\n\\begin{aligned}\n\\int_0^1H_n&=\\frac{n^2}{(n+1)(n+2)}\\\\\n&\\longrightarrow1.\n\\end{aligned}\n\\]\nEvery term is continuous and integrable, but convergence is not uniform because the maxima grow. At each fixed midpoint node \\(x\\in(0,1)\\), \\(H_n(x)>0\\) for every finite \\(n\\), while \\(H_n(x)\\to0\\). A fixed finite weighted sum therefore tends to zero; unlike the triangle it is never exactly zero in exact arithmetic. Floating-point underflow may display zero, which is a computational event. Refining the grid for each fixed function and then taking the sequence limit gives one; taking the sequence limit on a fixed grid first gives zero. Uniform convergence is the missing sufficient hypothesis of the finite-integral theorem.","transfer":"Change the exponent: let \\(K_n(x)=n^2x(1-x)^{n^2}\\) on \\([0,1]\\). Prove pointwise convergence, decide uniform convergence, and determine whether its integrals converge to the integral of its limit. Explain whether a correct interchange conclusion now certifies uniform convergence.","transferSolution":"Apply the same calculation with \\(m=n^2\\): \\(K_n(x)=mx(1-x)^m\\). At each fixed interior point geometric decay beats \\(m\\), and the endpoint values are zero. The maximum is at \\(x_n=1/(n^2+1)\\), with value\n\\[\n\\begin{aligned}\n\\|K_n\\|_\\infty&=\\left(\\frac{n^2}{n^2+1}\\right)^{n^2+1}\\\\\n&\\longrightarrow e^{-1}.\n\\end{aligned}\n\\]\nThus the convergence is not uniform. But\n\\[\n\\begin{aligned}\n\\int_0^1K_n&=\\frac{n^2}{(n^2+1)(n^2+2)}\\\\\n&\\longrightarrow0.\n\\end{aligned}\n\\]\nThe integral limits agree despite nonuniform convergence, as in the unit-height triangle. That equality does not imply the sufficient uniform hypothesis. A fixed midpoint sum tends to zero, with strictly positive exact sample values at every finite index."}
```

Try the same family computationally after saving a prediction for each integral. The program binds the two approximate midpoint results so they can be compared after changing \(n\). Use integer values of \(n\); even a dense plot can miss the peak near \(1/(n+1)\).

```notebook
param n = 100 from 2 to 500;
fn hill(x) = n^2*x*(1-x)^n;
integrate hill from 0 to 1 count 16 as coarse;
integrate hill from 0 to 1 count 256 as fine;
show coarse;
show fine;
plot hill from 0 to 1;
```

```exercise
{"id":"analysis-exchange-derivative-repair","type":"written","prompt":"Let f_n(x)=sqrt(x^2+1/n) on [-1,1]. Find the uniform limit. Compute the pointwise limit of f_n' on (-1,1), decide whether the derivative convergence is uniform, and explain why differentiating the function limit at zero fails. Identify the failed hypothesis in the differentiation theorem.","hints":["Compare sqrt(x^2+1/n) with |x| without squaring an inequality in the wrong direction.","Each derivative is continuous, but inspect the pointwise derivative limit at zero and on either side."],"rubric":["Proves a uniform error bound for f_n to |x|","Computes f_n'(x)=x/sqrt(x^2+1/n)","Shows derivative convergence is not uniform by continuity or a moving witness","Explains |x| has unequal one-sided derivatives at zero","Names uniform derivative convergence as the missing hypothesis"],"solution":"The inequality 0<=sqrt(x^2+1/n)-|x|<=1/sqrt(n) follows from sqrt(A+B)<=sqrt(A)+sqrt(B), so f_n converges uniformly to |x|. Differentiation gives f_n'(x)=x/sqrt(x^2+1/n). For fixed x>0 this tends to 1, for fixed x<0 to -1, and at x=0 it is 0. This pointwise limit is discontinuous at zero, whereas every f_n' is continuous; uniform convergence of derivatives on (-1,1) would give a continuous limit there, so it cannot hold. The limit |x| is not differentiable at zero because its right and left difference quotients are 1 and -1. The differentiation theorem requires uniform derivative convergence."}
```

```exercise
{"id":"analysis-exchange-power-endpoints","type":"written","prompt":"Consider P(x)=sum_(n=1)^infinity (-1)^(n-1)(x-2)^n/n. Find its radius and decide convergence at x=1 and x=3 separately. Is convergence uniform on [2,3]? Justify your answer without extending an interior-radius theorem to an endpoint.","hints":["At distance 1 from the center, substitute each endpoint before applying a scalar-series test.","For x in [2,3], put t=x-2 and use an alternating remainder estimate uniform in t."],"rubric":["Establishes radius 1 with a geometric comparison inside and divergence outside","Finds divergence at x=1 and conditional convergence at x=3","Proves uniform convergence on [2,3] using a bound independent of x","Distinguishes this endpoint argument from compact-uniform convergence only inside the radius"],"solution":"For |x-2|<1, absolute convergence follows from sum |x-2|^n/n; for |x-2|>1 the terms fail to tend to zero, so R=1. At x=1 the terms equal -1/n and the series diverges. At x=3 the terms are (-1)^(n-1)/n, so the alternating harmonic series converges conditionally. For x in [2,3], t=x-2 lies in [0,1], and t^n/n decreases to zero in n. The alternating remainder after N terms has magnitude at most t^(N+1)/(N+1)<=1/(N+1), uniformly in t. Thus P converges uniformly on [2,3], including its convergent endpoint. The general interior theorem alone does not give that endpoint result."}
```

```exercise
{"id":"analysis-exchange-double-limit","type":"written","prompt":"On \\((0,1)\\), let \\(q_n(x)=nx e^{-nx}\\). Calculate the two iterated limits \\(\\lim_{x\\downarrow0}\\lim_n q_n(x)\\) and \\(\\lim_n\\lim_{x\\downarrow0}q_n(x)\\). Is convergence to the pointwise limit uniform on any \\((0,r)\\) with \\(r>0\\)? Explain why this example does not contradict the local interchange theorem.","hints":["Keep \\(x>0\\) fixed for the \\(n\\)-limit and \\(n\\) fixed for the \\(x\\)-limit.","The input \\(x_n=1/n\\) lies in every fixed \\((0,r)\\) for sufficiently large \\(n\\)."],"rubric":["Computes both iterated limits as zero with the correct order","Uses x_n=1/n to disprove uniform convergence on every fixed neighborhood","States that the theorem gives a sufficient condition, not a necessary one","Does not infer uniformity merely from equal limits"],"solution":"For fixed \\(x>0\\), put \\(t=nx\\to\\infty\\); then \\(t e^{-t}\\to0\\), so the pointwise limit is zero and its limit as \\(x\\downarrow0\\) is zero. For fixed \\(n\\), \\(nx e^{-nx}\\to0\\) as \\(x\\downarrow0\\), so the opposite iterated limit is also zero. For any \\(r>0\\), eventually \\(1/n\\in(0,r)\\), and \\(q_n(1/n)=e^{-1}\\); convergence is not uniform there. The local interchange theorem guarantees equality under uniformity but does not say equality is impossible without it.","transfer":"Changed case: let \\(p_n(x)=x e^{-nx}\\) on \\((0,1)\\). Prove uniform convergence to zero and compare the two iterated limits at zero.","transferSolution":"For \\(n\\ge2\\), differentiation gives the maximum at \\(x=1/n\\), with value \\(1/(en)\\to0\\); thus convergence is uniform on \\((0,1)\\). For fixed \\(n\\), \\(p_n(x)\\to0\\) as \\(x\\downarrow0\\), and the pointwise limit is zero, so both iterated limits are zero. The local theorem now applies."}
```

**Later retrieval.** In a cumulative problem, suppose a series is known to converge uniformly on every \([-r,r]\), \(r<1\). Before passing a limit through a derivative, an integral on \([-1,1]\), or an \(x\uparrow1\) limit, state which *different* domain and hypothesis each operation needs. Use \(F(x)=\sum x^n/n^2\) and \(x^n\) as tests of any proposed shortcut.

For a primary mathematical reference, compare Jiří Lebl's [pointwise and uniform convergence](https://www.jirka.org/ra/html/sec_puconv.html) and [limits, integrals, and derivatives](https://www.jirka.org/ra/html/sec_liminter.html). The prediction, worked argument, and independent transfer follow the instructional principles of combining graphical and verbal representations, asking for explanations, and alternating worked examples with problems in the [IES practice guide on organizing instruction](https://ies.ed.gov/ncee/wwc/PracticeGuide/1). These references informed the original activity; they do not establish its learning effectiveness.
