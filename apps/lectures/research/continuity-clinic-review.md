# Optional homotopy clinic: derivation and numerical limits

Entry: [the optional clinic](../homotopy.html#continuity-clinic).

## The learning question

A valid endpoint-fixed slice is not enough to establish a homotopy. The definition requires continuity of the map on the entire product. The clinic asks readers to predict what happens near a moving peak, compare a fixed sampling grid with the full maximum, prove failure at one point, and construct a valid replacement with the same boundary maps. It adds an estimated 10–15 minutes to the original lecture; the 75–90 minute core route excludes it. These are planning estimates without learner-pilot results.

The target is the real line. The plotted graph uses the horizontal coordinate for the input and the vertical coordinate for a scalar output. It is not a planar drawing of a target-space loop. Every slice is a based loop with both endpoint values zero; this example does not claim that such loops cannot contract.

## Exact construction

For s,t in [0,1], define

```text
F(s,t) = (1-s)st/(s²+t²),  if (s,t) ≠ (0,0),
F(0,0) = 0.
```

For each fixed positive t, the denominator stays positive, so the s-slice is continuous. The t=0 slice is identically zero. For each fixed positive s, continuity in t follows from the same argument; the s=0 slice is zero. Both endpoint values F(0,t) and F(1,t) are zero. Thus the family is separately continuous and satisfies the required endpoint and boundary-map conditions.

But F(r,r)=(1-r)/2 approaches 1/2 as r decreases to zero. The origin's value is zero. An exact epsilon–delta disproof fixes epsilon=1/4: for any delta>0 choose r=min(delta/4,1/4). Then sqrt(2)r<delta and F(r,r)>=3/8>epsilon. The failure concerns the whole family even while the selected t=0 slice is perfectly continuous.

Set g(s)=F(s,1) and K(s,t)=t g(s). Its denominator s²+1 never vanishes. Products and quotients of continuous functions establish joint continuity; the endpoint values remain zero. Both families start at the zero map and end at g. K supplies a valid homotopy between those same maps.

## Full maximum versus sampled maximum

For t>0, differentiating F in s gives a numerator proportional to

```text
t²(1-2s) - s².
```

It changes sign once on [0,1]. The maximizing input and value are

```text
s*(t) = t/(sqrt(1+t²)+t),
max_s F(s,t) = 1/[2(sqrt(1+t²)+t)].
```

The maximum tends to 1/2 although the location tends to zero. At t=0 every input is a maximizer, so the interface hides the unique-peak marker. For the repaired family, the peak stays at 1/(sqrt(2)+1), and its maximum is t/[2(sqrt(2)+1)], which tends to zero.

On the eleven fixed inputs s=j/10, every positive input satisfies F(s,t)<=(1-s)t/s<=9t. The sampled maximum tends to zero. It provides no bound on the full maximum. Joint continuity on the compact parameter square would imply uniform continuity and uniform approach to the zero slice; this is a necessary consequence, not a claim that arbitrary pointwise convergence proves joint continuity.

The display marks readouts as rounded. For instance a full maximum slightly below 1/2 may round to 0.500000. Exact formulas and proofs establish strict inequalities. Zoom changes the horizontal window only; the vertical scale stays [0,0.6]. Fixed grid samples remain the original inputs, including when they lie outside the zoomed window.

<a id="implementation-checks-and-review"></a>
## Numerical model and interpretation

The numeric formula evaluates the ratio of the smaller nonnegative coordinate
to the larger, avoiding underflow from squaring extremely small inputs. A
separate branch handles the origin. Drawing points include the analytic peak,
uniform samples and points near the moving scale. These finite illustrations
accompany the exact boundary maps, epsilon–delta witness, extrema, derivative
identities, finite-grid bound and repaired family's uniform bound. They do not
establish continuity by sampling.

The [model](../model.js) supplies the finite calculation. Read the written
argument before interpreting a tiny or rounded displayed value. The lecture
PDFs contain selected examples and tasks; saved private notes stay in your browser.

## Primary mathematical sources and attribution

- [Hatcher, *Algebraic Topology*, Chapter 1, pp. 25–26](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf): path homotopy is a continuous map on the product, with endpoint conditions. This supports the requirement being investigated.
- [Ciesielski and Rodríguez-Vidanes, *Linearly Continuous Maps Discontinuous on the Graphs of Twice Differentiable Functions*, introduction](https://community.wvu.edu/~kciesiel/ProfessionalStuff/prepF/160.LinCon%26D2_PAMSaccepted.pdf): presents the classical separately continuous quotient xy/(x²+y²). The factor (1-s), loop boundary conditions, repair, extremum derivation, teaching tasks, and interface here are original adaptations. The paper is cited for the underlying counterexample, not for those adaptations or an educational-effect claim.

The lecture’s construction and diagrams are original; these references supply the mathematical background.

Use the lecture’s exact formulas and proofs alongside its numerical illustration.
