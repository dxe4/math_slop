# Compactness, total boundedness, and completeness

**Prerequisites.** Metric spaces and real-line compactness. **Outcome.** Prove a metric-space compactness criterion and identify the missing property in examples.

“Closed and bounded” characterizes compact subsets of \(\mathbb R\) because bounded intervals have a strong finite-cover property. In an arbitrary metric space, ordinary boundedness only says that one sufficiently large ball covers the set. **Total boundedness** says that for every \(\varepsilon>0\), finitely many \(\varepsilon\)-balls cover it. The second statement controls all scales.

For a metric space \(X\), compact means every open cover of \(X\) has a finite subcover; sequentially compact means every sequence in \(X\) has a convergent subsequence whose limit lies in \(X\).

## Session 1: one large ball is not enough

To see the quantifiers, fix \(\varepsilon>0\). Total boundedness asks for a *finite list* \(c_1,\ldots,c_N\in X\) with \(X=\bigcup_{j=1}^{N}B(c_j,\varepsilon)\); the list may depend on \(\varepsilon\). It does not require the same number of balls at every scale. In \([0,1]\), divide the interval into finitely many pieces shorter than \(\varepsilon\) and choose one center in each piece. The construction works at every positive scale.

For an infinite discrete space, choose \(\varepsilon=1/2\). Every ball is a singleton, so a finite list covers only finitely many points. One failing scale disproves total boundedness. Yet the whole space lies in a radius-2 ball around any one point. This is the precise difference between bounded and totally bounded.

An open cover has a different quantifier: it presents *arbitrary* open sets of potentially unrelated sizes, and compactness must extract finitely many of those very sets. A finite \(\varepsilon\)-ball cover cannot alone solve an arbitrary open-cover problem until we know a common scale \(\delta\) whose balls fit inside members of that cover. The last implication below constructs that scale.

## The metric compactness criterion

**Theorem 35.1.** For a metric space \(X\), these are equivalent:

1. \(X\) is compact.
2. \(X\) is sequentially compact.
3. \(X\) is complete and totally bounded.

**Compact implies sequentially compact.** Suppose a sequence has no convergent subsequence. For every \(x\in X\), some ball about \(x\) contains only finitely many *indices* of the sequence. Otherwise each radius \(1/k\) ball about \(x\) would contain infinitely many indices, allowing an increasing-index subsequence converging to \(x\). These balls cover \(X\); finitely many of them cannot contain all infinitely many sequence indices. Contradiction.

Here “indices” matters: the sequence might repeat a value. If every small ball around \(x\) held infinitely many terms, choose index \(n_k>n_{k-1}\) inside \(B(x,1/k)\). That subsequence converges. Negating this construction gives one ball around each \(x\) that holds only finitely many indices, and a finite subcover would hold only finitely many indices altogether.

**Sequentially compact implies complete and totally bounded.** A Cauchy sequence has a convergent subsequence by sequential compactness; the whole Cauchy sequence shares that limit, by the triangle inequality. If \(X\) were not totally bounded, some \(\varepsilon>0\) would permit a greedy sequence with \(d(x_i,x_j)\ge\varepsilon\) for all distinct \(i,j\). No subsequence could converge, another contradiction.

**Complete and totally bounded implies sequentially compact.** Given a sequence, cover \(X\) by finitely many balls of radius \(1/2\); one contains infinitely many sequence indices. Within those selected indices choose an infinite group in one ball of radius \(1/3\), and continue with radii \(1/k\), always selecting increasing indices. Choose the \(k\)th term from the \(k\)th nested infinite group beyond the previous index. All sufficiently late chosen terms lie in one radius-\(1/k\) ball, so their mutual distances are below \(2/k\). The diagonal subsequence is Cauchy and converges by completeness.

The centers of successive balls need not converge and the balls need not be nested. What is nested is the infinite *set of allowed indices*. At stage \(k\), finitely many radius-\(1/k\) balls cover the terms whose indices survived stage \(k-1\); at least one contains infinitely many of them. This is a repeated finite-choice argument. Once the subsequence is Cauchy, completeness supplies its limit *in* \(X\).

**Sequentially compact implies compact.** Let \(\mathcal U\) be an open cover. There is a number \(\delta>0\) such that every ball \(B(x,\delta)\) is contained in some member of \(\mathcal U\). If not, choose \(x_n\) whose \(1/n\)-ball fits in no member. A convergent subsequence tends to \(x\), and an open cover member containing \(x\) contains a ball \(B(x,r)\). For large subsequence indices, \(d(x_n,x)+1/n<r\), forcing \(B(x_n,1/n)\) inside that member, contradiction. Now total boundedness supplies finitely many balls of radius \(\delta\) covering \(X\); select one cover member containing each ball. These finitely many members cover \(X\). ∎

The \(\delta\) is often called a *Lebesgue number* for the cover. The contradiction chooses \(1/n\) because a scale tending to zero eventually fits inside the open member containing the subsequential limit. The centers in the finite \(\delta\)-ball cover come from total boundedness, already proved from sequential compactness. This closes the loop back to the original open-cover definition without assuming that definition and the sequence definition agree.

The argument is longer than the real-line Heine–Borel slogan because it identifies the property that replaces order and bounded intervals.

## Three failures at three different steps

\((0,1)\) with usual distance is totally bounded but incomplete: \(1/n\), for \(n\ge2\), approaches 0 outside the space. Infinite discrete \(X\) is complete and bounded but not totally bounded: radius-\(1/2\) balls are singletons. The whole real line is complete but not totally bounded: no finite collection of radius-1 balls covers it. By contrast \([0,1]\) is complete and totally bounded, hence compact.

The continuous-function space \(C([0,1])\) with \(d_\infty\) is complete. To see why, a sup-norm Cauchy sequence converges uniformly pointwise to a function \(f\); the uniform limit of continuous functions is continuous, and the same Cauchy estimate gives \(\|f_n-f\|_\infty\to0\). Yet its unit ball is not totally bounded. Choose triangular continuous spikes of height 1 supported on pairwise disjoint subintervals of \((0,1)\). Any two spikes have sup distance 1, so no finite radius-\(1/3\) ball cover exists. A bounded set of functions can contain arbitrarily many distinct shapes.

### Choose a tolerance before choosing the function

The [uniform-continuity lesson](uniform-continuity.md) moved the two input
points after the tolerance was chosen. A family introduces one more choice:
**when is the function announced?** Let
\[
r_n(x)=\min(nx,1),\qquad x\in[0,1],\quad n\in\mathbb N,
\quad\mathbb N=\{1,2,\ldots\}.
\]
Each ramp is continuous, has height at most one, and has a finite Lipschitz
constant. These statements do not yet give one tolerance for all the ramps.

A family \(\mathcal F\) is **uniformly equicontinuous** on \(D\) when
\[
\forall\varepsilon>0\ \exists\delta>0\ \forall f\in\mathcal F
\ \forall x,y\in D:\quad
|x-y|<\delta\Longrightarrow |f(x)-f(y)|<\varepsilon.
\]
The tolerance is chosen before both the function and its inputs. Saying that
every member is uniformly continuous instead permits
\(\forall f\ \forall\varepsilon\ \exists\delta\): that tolerance may depend
on the member. A finite family can use the minimum of finitely many member
tolerances; an infinite family needs a new argument. The infinite minimum
may be zero.

At a point \(c\), *equicontinuity* asks for one tolerance for all members
with one input fixed at \(c\); the tolerance may depend on \(c\). We use the
stronger, domain-wide definition above here. On a compact domain,
equicontinuity at every point implies uniform equicontinuity, but compactness
does not manufacture even pointwise equicontinuity from individual continuity.
The following ramp family already fails at zero.

Write an argument before each reveal. The displayed segments pass through the
actual ramp corner, rather than relying on a plotting grid to find it. Changing
a control tests a finite value; your quantified construction must work beyond
the control's range.

```visual-story
{
  "id": "family-tolerance-order",
  "title": "Who chooses the function, and when?",
  "prompt": "Separate a tolerance for one announced function from a tolerance that must survive a later choice of function. Save a prediction, inspect the exact corner and gaps, then revise the quantified argument.",
  "stages": [
    {
      "title": "Announce one ramp first",
      "body": "Choose the integer ramp index k=floor(n) first, then choose an output tolerance. The marked pair is zero and a nearby positive input. All ramps stay between zero and one on the same compact interval.",
      "question": "For an announced k, derive a delta from epsilon and k that handles every pair in [0,1]. What dependence is allowed? Does seeing every displayed ramp succeed prove one tolerance works for the infinite family?",
      "checkpoint": {
        "hint": "The map u↦min(u,1) never increases distances. First prove |r_k(x)−r_k(y)|≤k|x−y|, including pairs on opposite sides of the corner.",
        "explanation": "If both inputs are below 1/k, the output gap is k times their spacing; if both are above, the gap is zero. If x≤1/k≤y, then r_k(y)−r_k(x)=1−kx≤k(y−x). Reversing x,y covers the other order. Thus δ=ε/k works for every pair, and the displayed pair has gap h=δ/2 and output gap ε/2. Dependence on k is allowed because k was announced first. The choices ε/k shrink to zero with k: checking finitely many announced members does not supply one positive tolerance for every possible later member.",
        "criteria": ["Proves the Lipschitz inequality across the corner as well as within each segment.", "States that the individual tolerance may depend on the announced member.", "Does not infer a family-wide tolerance from finitely many successful members."]
      },
      "transition": "none",
      "focus": ["line-rising", "line-output_gap", "point-second"],
      "scene": [
        "scene \"One announced ramp has its own tolerance\"; domain 0 1; range -0.15 1.15;",
        "param n = 4 from 1 to 16; param eps = 0.4 from 0.1 to 1; let k = floor(n);",
        "let d = eps/k; let h = d/2; fn r(x) = (k*x+1-abs(k*x-1))/2;",
        "segment rising from (0,0) to (1/k,1) color blue; segment plateau from (1/k,1) to (1,1) color blue;",
        "point first = (0,0) color blue; point second = (h,r(h)) color rose;",
        "segment input_gap from (0,-0.08) to (h,-0.08) color amber; segment output_gap from (h,0) to (h,r(h)) color rose;",
        "measure selected_index = k; measure member_delta = d; measure input_distance = h; measure output_distance = r(h); measure output_tolerance = eps;"
      ]
    },
    {
      "title": "Announce delta before the ramp",
      "body": "The examiner fixes epsilon₀=1/2. You propose delta; only then may the examiner choose the ramp index and the positive input. The response uses h=min(delta/2,1/2) and k=ceil(1/h). Only delta is an independent control.",
      "question": "Does this response defeat every positive delta? Check membership in the domain, the strict input inequality, and a fixed output gap. Explain why compactness of [0,1] and the common height bound do not settle the family claim.",
      "checkpoint": {
        "hint": "Prove h<delta separately when delta≤1 and when delta>1. Then use k≥1/h before evaluating the clipped ramp.",
        "explanation": "Fix ε₀=1/2 before considering delta. For any δ>0 put h=min(δ/2,1/2), x=0, y=h, and k=⌈1/h⌉. Then 0<h≤1/2, so both inputs are legal. If δ≤1 then h=δ/2<δ; if δ>1 then h=1/2<δ. Also kh≥1, so r_k(h)=1 while r_k(0)=0. The output gap is exactly 1>ε₀, independent of delta. This refutes even equicontinuity at zero. Heine–Cantor applies to each fixed continuous member on the compact domain; it does not move the member choice after delta. The family has compact input domain and uniformly bounded height, yet no common tolerance.",
        "criteria": ["Fixes epsilon₀ independently of delta and the ramp index.", "Constructs a legal integer index after every proposed positive delta.", "Checks a strictly smaller input gap and an output gap equal to one.", "Distinguishes compactness of the domain from compactness of a family in the sup metric."]
      },
      "transition": "indicate",
      "focus": ["line-rising", "line-output_gap", "point-second"],
      "scene": [
        "scene \"A later ramp defeats the proposed family tolerance\"; domain 0 1; range -0.15 1.15;",
        "param d = 0.1 from 0.01 to 2; let h = d/(1+d+abs(d-1)); let k = ceil(1/h);",
        "fn r(x) = (k*x+1-abs(k*x-1))/2;",
        "segment rising from (0,0) to (1/k,1) color blue; segment plateau from (1/k,1) to (1,1) color blue;",
        "point first = (0,0) color blue; point second = (h,r(h)) color rose;",
        "segment input_gap from (0,-0.08) to (h,-0.08) color amber; segment output_gap from (h,0) to (h,r(h)) color rose;",
        "measure proposed_delta = d; measure selected_index = k; measure input_distance = h; measure output_distance = r(h); measure fixed_epsilon = 0.5;",
        "# For d>0, d/(1+d+abs(d-1)) equals min(d/2,1/2), with less subtraction cancellation. The slider is finite; the proof covers every real delta > 0."
      ]
    },
    {
      "title": "Restrict the choices before delta",
      "body": "Now announce a finite upper bound N=floor(cap) for the index before proposing a tolerance. The member control selects k between 1 and N, including both endpoints. The input and output gaps belong to that selected member; the final readout is a family-wide bound.",
      "question": "Find one delta from epsilon and N that works even when k and both inputs are chosen later. What changes if N is allowed to grow after your delta? Is the selected member's output gap the same quantity as the proof bound?",
      "checkpoint": {
        "hint": "Use |r_k(x)−r_k(y)|≤k|x−y|≤N|x−y|. Keep the bound N distinct from the later member k.",
        "explanation": "Once N is fixed, δ=ε/N works for every k≤N and every legal pair: |r_k(x)−r_k(y)|≤N|x−y|<Nδ=ε. In the scene h=δ/2; the selected gap is kh=kε/(2N), while the family bound Nh=ε/2 controls every eligible member. They coincide only at k=N. If N can grow after delta, this argument has changed its order of choices and gives no positive tolerance for the full infinite family. More generally any family with one finite Lipschitz constant L has a common linear modulus Lt; individual constants without a common bound do not provide that certificate.",
        "criteria": ["Chooses delta using only epsilon and the already fixed index bound.", "Checks all eligible members and all input pairs using one inequality.", "Distinguishes the selected gap from its family-wide upper bound."]
      },
      "transition": "reveal",
      "focus": ["line-output_gap", "point-second"],
      "scene": [
        "scene \"A fixed index budget supplies one certificate\"; domain 0 1; range -0.15 1.15;",
        "param cap = 8 from 1 to 32; param member = 0.5 from 0 to 1; param eps = 0.4 from 0.1 to 1;",
        "let bound = floor(cap); let k = 1+floor((bound-1)*member); let d = eps/bound; let h = d/2;",
        "fn r(x) = (k*x+1-abs(k*x-1))/2;",
        "segment rising from (0,0) to (1/k,1) color blue; segment plateau from (1/k,1) to (1,1) color blue;",
        "point first = (0,0) color blue; point second = (h,r(h)) color rose;",
        "segment input_gap from (0,-0.08) to (h,-0.08) color amber; segment output_gap from (h,0) to (h,r(h)) color rose;",
        "measure index_bound = bound; measure selected_index = k; measure common_delta = d; measure input_distance = h; measure selected_gap = r(h); measure family_bound = bound*h; measure output_tolerance = eps;"
      ]
    }
  ]
}
```

**Proof debrief.** Negating uniform equicontinuity gives
\[
\exists\varepsilon_0>0\ \forall\delta>0\ \exists f\in\mathcal F
\ \exists x,y\in D:\quad
|x-y|<\delta\ \text{ and }\ |f(x)-f(y)|\ge\varepsilon_0.
\]
The ramp construction satisfies exactly this order. Equivalently, take the
members \(r_n\) and the paired inputs \(0,1/n\): their spacing tends to zero
while their output gap stays one. This is a statement about a changing member,
not a refutation of uniform continuity for any fixed \(r_n\).

### Notebook: a successful finite prefix is a different claim

Predict the three output gaps before running. The first two calculations use
one fixed input gap for the finite prefix \(1\le n\le N\); the third lets the
examiner select a later member. The expression
\(\min(u,1)=(u+1-|u-1|)/2\) is used because the notebook accepts unary
functions. Read the floating-point values beside the exact argument.

```notebook
param cap = 8 from 1 to 32;
param eps = 0.4 from 0.1 to 1;
let budget = floor(cap);
let d = eps/budget;
let h = d/2;
fn gap(x) = (x*h+1-abs(x*h-1))/2;
show d;
show gap(1);
show gap(budget);
show gap(ceil(1/h));
table gap from 1 to 64 count 64;
```

At the defaults, \(\delta=1/20\), \(h=1/40\), the first member's output
gap is \(1/40\), the eighth member's is \(1/5\), and member 40 has gap one.
The certificate for members 1 through 8 remains correct; member 40 was outside
that claim. Change the notebook to use \(h=\delta/3\), then predict which
member first gives output gap one. Explain why shrinking a proposed tolerance
still permits a later adversarial member. Save the first explanation before
revising it. The finite table neither proves nor refutes the infinite-family
claim without the construction \(n=\lceil1/h\rceil\).

```exercise
{"id":"analysis-family-order-diagnostic","type":"choice","prompt":"Each ramp r_n is uniformly continuous on [0,1], and all its values lie in [0,1]. Which argument establishes one tolerance for the entire infinite family?","options":[{"label":"Heine–Cantor applies to each member, so the same delta works for all members.","correct":false,"feedback":"Heine–Cantor permits dependence on the fixed function. The family definition places every member after delta."},{"label":"Take the smallest positive tolerance among the first thousand members.","correct":false,"feedback":"That works for that finite prefix. A later member can still require a smaller scale."},{"label":"Neither argument does: fix epsilon₀=1/2, then choose h=min(delta/2,1/2) and n=ceil(1/h) after any proposed delta.","correct":true,"feedback":"The legal pair 0,h is strictly closer than delta, while r_n(h)−r_n(0)=1. It defeats every proposed family tolerance."}],"hints":["Mark whether the function is chosen before or after delta in each argument."]}
```

### A compact family from one shared modulus

Now impose control on how every function changes, not only on its height:
\[
\mathcal K=\{f\in C([0,1]): |f(x)|\le1\text{ and }
|f(x)-f(y)|\le|x-y|\text{ for all }x,y\in[0,1]\}.
\]
We prove \(\mathcal K\) compact in the sup metric by the complete-plus-totally-bounded criterion.

**Closedness and completeness.** Suppose \(f_j\in\mathcal K\) and
\(\|f_j-f\|_\infty\to0\) for some \(f\in C([0,1])\). For every \(x,y\),
\[
|f(x)|\le |f(x)-f_j(x)|+|f_j(x)|,
\]
so letting \(j\to\infty\) gives \(|f(x)|\le1\). Similarly,
\[
|f(x)-f(y)|
\le2\|f-f_j\|_\infty+|f_j(x)-f_j(y)|
\le2\|f-f_j\|_\infty+|x-y|,
\]
and the limit gives the common Lipschitz bound. Thus \(\mathcal K\) is closed in the complete space \(C([0,1])\), hence is complete.

**Constructing a finite net.** Fix \(\varepsilon>0\). Choose an integer \(m\) with \(1/m<\varepsilon/4\), and split the bounded value interval \([-1,1]\) into finitely many bins of width \(\delta<\varepsilon/2\). Record, for each \(f\in\mathcal K\), the bin containing each of the finitely many node values
\[
f(0),f(1/m),\ldots,f(1).
\]
There are only finitely many possible signatures. From each *occupied* signature choose one representative \(g\in\mathcal K\); this point matters, because centers of a total-boundedness cover must lie in the metric space.

If \(f\) and \(g\) have the same signature, choose for \(x\in[0,1]\) a mesh node \(x_i\) with \(|x-x_i|\le1/m\). Their shared Lipschitz constant and shared value bin give
\[
|f(x)-g(x)|
\le |f(x)-f(x_i)|+|f(x_i)-g(x_i)|+|g(x_i)-g(x)|
\le \frac2m+\delta<\varepsilon.
\]
Thus the finitely many selected representatives form an \(\varepsilon\)-net for \(\mathcal K\). The family is totally bounded and complete, so it is compact.

The following editable schematic fixes mesh width \(h=0.1\) and illustrates the **node-distance consequence** that a shared value-bin signature would provide: at each marked node, the two displayed values differ by less than the chosen width \(\delta\). It does not draw a particular partition of \([-1,1]\), so it does not assert that the displayed values occupy the same bin for an unstated choice of bin boundaries. Move \(u\) only within the cell \([0.4,0.5]\). The three highlighted links encode vertical value differences in the triangle-inequality route; their slanted Euclidean lengths are not the quantities being bounded:
\[
|f(u)-g(u)|\le |f(u)-f(0.4)|+|f(0.4)-g(0.4)|+|g(0.4)-g(u)|.
\]
The readout \(2h+\delta\) is the family-wide proof bound, not the much smaller value of this one example. In the proof above, sharing an explicitly fixed bin implies the displayed node-distance inequality; the converse need not hold across a bin boundary. The eleven samples cannot certify all functions in \(\mathcal K\); the shared Lipschitz inequality controls both unsampled terms for every member of the family.

```mathviz
scene "Three links control the gap between mesh nodes";
domain 0 1;
range -0.8 0.8;
param bin_width = 0.2 from 0.05 to 0.29;
param u = 0.45 from 0.4 to 0.5;
let h = 0.1;
fn representative(x) = 0.5*x-0.25;
fn companion(x) = representative(x)+bin_width*(0.5+0.4*(x-0.5));
plot representative color blue;
plot companion color amber;
point mesh_0 = (0,representative(0)) color rose;
point mesh_1 = (0.1,representative(0.1)) color rose;
point mesh_2 = (0.2,representative(0.2)) color rose;
point mesh_3 = (0.3,representative(0.3)) color rose;
point mesh_4 = (0.4,representative(0.4)) color rose;
point mesh_5 = (0.5,representative(0.5)) color rose;
point mesh_6 = (0.6,representative(0.6)) color rose;
point mesh_7 = (0.7,representative(0.7)) color rose;
point mesh_8 = (0.8,representative(0.8)) color rose;
point mesh_9 = (0.9,representative(0.9)) color rose;
point mesh_10 = (1,representative(1)) color rose;
point f_input = (u,representative(u)) color blue;
point f_node = (0.4,representative(0.4)) color blue;
point g_node = (0.4,companion(0.4)) color amber;
point g_input = (u,companion(u)) color amber;
segment first_unsampled_term from (u,representative(u)) to (0.4,representative(0.4)) color blue;
segment node_bin_term from (0.4,representative(0.4)) to (0.4,companion(0.4)) color rose;
segment second_unsampled_term from (0.4,companion(0.4)) to (u,companion(u)) color amber;
measure mesh_width = h;
measure value_bin_width = bin_width;
measure first_term = abs(representative(u)-representative(0.4));
measure node_term = abs(representative(0.4)-companion(0.4));
measure third_term = abs(companion(0.4)-companion(u));
measure proof_bound = 2*h+bin_width;
```

### Why compact families must have a common tolerance

The shared-modulus proof above shows sufficiency for the specified closed,
height-bounded Lipschitz family. There is also a useful **necessary** condition:
every compact subset \(\mathcal F\) of \(C([0,1])\), with the sup metric, is
uniformly equicontinuous. It identifies exactly why the bounded ramp family
cannot itself be compact in that metric.

**Proof.** The empty family is immediate. Otherwise fix \(\varepsilon>0\).
Compactness gives a finite \(\varepsilon/3\)-net
\(g_1,\ldots,g_m\in\mathcal F\). Each representative is continuous on the
compact input interval, so Heine–Cantor gives \(\delta_i>0\) such that
\(|g_i(x)-g_i(y)|<\varepsilon/3\) when \(|x-y|<\delta_i\).
Choose \(\delta=\min_i\delta_i>0\), before choosing \(f\in\mathcal F\).
Choose its representative with \(\|f-g_i\|_\infty<\varepsilon/3\). For
\(|x-y|<\delta\),
\[
\begin{aligned}
|f(x)-f(y)|&\le |f(x)-g_i(x)|+|g_i(x)-g_i(y)|\\
&\quad+|g_i(y)-f(y)|<\varepsilon.
\end{aligned}
\]
This one tolerance handles every member and pair. The finite minimum is
legitimate because compactness first reduced the family to finitely many
representatives. Taking the minimum of infinitely many arbitrary individual
tolerances would skip that step. \(\square\)

**Change the domain, then retrieve the proof.** The same infinite ramp family
becomes uniformly equicontinuous on \([d,1]\) for any fixed \(0<d\le1\).
Put \(M=\lceil1/d\rceil\). All members with \(n\ge M\) are identically one
on that domain, while the finitely many earlier members have Lipschitz
constants at most \(M-1\). Thus \(L=\max(1,M-1)\) is a safe common bound
and \(\delta=\varepsilon/L\) works, including \(d=1\). The obstruction was
the shared neighborhood of the endpoint zero; merely removing zero without
leaving a positive distance does not repair it. On \((0,1]\), use the positive
inputs \(x=1/(2n)\), \(y=1/n\): their gap tends to zero and their output gap
is \(1/2\). Fix \(\varepsilon_0=1/4\) to refute uniform equicontinuity
there.

**Do not replace the definition by a slope test.** A shared finite Lipschitz
constant is sufficient. Unbounded *minimal* Lipschitz constants do not by
themselves prove failure: the members' heights may shrink fast enough to give
one nonlinear modulus. The independent investigation below requires that
distinction. Compare the definitions and proof strategy with Jiří Lebl's
[author-written treatment of equicontinuity](https://www.jirka.org/ra/html/sec_arzelaascoli.html),
especially Definition 11.6.6 and Proposition 11.6.7. The ramp investigation
and its explicit response strategy are worked here; no general compactness
theorem for arbitrary function families is being assumed.

```exercise
{
  "id": "analysis-family-shrinking-height",
  "type": "written",
  "prompt": "Independent investigation. On \\([0,1]\\) let\n\\[\nq_n(x)=\\min(n^2x,1/n).\n\\]\n\nHere \\(n\\ge1\\) is an integer.\n\n(a) Prove that the smallest Lipschitz constant of \\(q_n\\) is \\(n^2\\).\n\n(b) Find one nonlinear modulus that works for the entire family, despite those unbounded constants.\n\n(c) Decide compactness in the sup metric of \\(Q=\\{q_n:n\\ge1\\}\\) and \\(Q_0=Q\\cup\\{0\\}\\), where \\(0\\) is the zero function. Prove your classifications, distinguishing a bounded family, a common modulus, and membership of a limit. Try the task before opening a hint.",
  "hints": [
    "For \\(h=|x-y|\\), prove the two bounds \\(|q_n(x)-q_n(y)|\\le n^2h\\) and \\(|q_n(x)-q_n(y)|\\le1/n\\). Split the indices at \\(n=h^{-1/3}\\), treating \\(h=0\\) separately.",
    "The corner is at \\(x=1/n^3\\). Use a short interval before the corner to show no smaller Lipschitz constant works.",
    "Compute \\(\\|q_n\\|_\\infty\\) exactly. To prove \\(Q_0\\) compact directly, take an open-cover member containing zero, put the tail inside its sup-ball, and cover the finitely many remaining members."
  ],
  "rubric": [
    "Proves the exact individual Lipschitz constants, rather than only an upper bound",
    "Derives a member-independent modulus and a valid delta",
    "Computes the uniform limit and checks whether it belongs to each set",
    "Proves compactness of Q₀ using an open cover or a justified sequence argument",
    "Proves noncompactness of Q using its excluded unique uniform limit",
    "Handles the changed affine family without conflating height and increment bounds"
  ],
  "solution": "The clipping inequality shows that \\(q_n\\) is \\(n^2\\)-Lipschitz.\nOn \\(0\\le x<y\\le1/n^3\\), equality holds, so \\(n^2\\) is the smallest Lipschitz constant.\n\nPut \\(h=|x-y|\\). If \\(h=0\\) the gap is zero. For \\(h>0\\), the output gap is at most each of \\(n^2h\\) and \\(1/n\\), by the slope and height bounds respectively.\nIf \\(n\\le h^{-1/3}\\), then \\(n^2h\\le h^{1/3}\\); if \\(n\\ge h^{-1/3}\\), then \\(1/n\\le h^{1/3}\\). Thus\n\\[\n|q_n(x)-q_n(y)|\\le h^{1/3}\n\\]\nfor every \\(n\\), and \\(\\delta=\\varepsilon^3\\) works for the whole family. The unbounded minimal linear constants therefore coexist with a common nonlinear modulus.\n\nSince \\(q_n\\) reaches its plateau on \\([0,1]\\), \\(\\|q_n\\|_\\infty=1/n\\), and \\(q_n\\to0\\) uniformly. None of these functions is identically zero. Consequently \\(Q\\) is not closed in \\(C([0,1])\\) and is not compact: a compact subset of a metric space is closed. Equivalently \\((q_n)\\) is Cauchy but has no limit in \\(Q\\).\n\nTo prove \\(Q_0\\) compact directly, take any open cover and select a member \\(U\\) containing zero. Some relative sup-ball \\(B(0,r)\\cap Q_0\\) lies in \\(U\\). For \\(n>1/r\\), \\(\\|q_n\\|_\\infty<r\\), so \\(U\\) covers that entire tail. Choose one cover member for each of the finitely many remaining \\(q_n\\). Together with \\(U\\), these form a finite subcover. A common modulus does not by itself guarantee that a family includes its limit.",
  "transfer": "Changed family: on \\([0,1]\\) let \\(G\\) be the family of all affine functions \\(x\\mapsto ax+b\\) with \\(|a|\\le2\\) and \\(b\\in\\mathbb R\\). Prove or refute uniform equicontinuity and compactness in the sup metric.\n\nThen replace the slope condition by \\(a\\in\\mathbb R\\) and the offset condition by \\(|b|\\le1\\). Does one common tolerance survive? Give explicit witnesses for failed claims.",
  "transferSolution": "For \\(G\\),\n\\[\n|a(x-y)|\\le2|x-y|,\n\\]\nso \\(\\delta=\\varepsilon/2\\) proves uniform equicontinuity regardless of the offsets. But \\(G\\) contains all constant functions \\(f_j(x)=j\\); distinct integer constants have sup distance at least one, so no finite radius-\\(1/3\\) ball cover can contain them. Thus \\(G\\) is not totally bounded and is not compact. Height control and increment control are different hypotheses.\n\nFor the second family choose \\(b=0\\), fix \\(\\varepsilon_0=1/2\\), and after any \\(\\delta>0\\) put\n\\[\n\\begin{aligned}\nh&=\\min(\\delta/2,1/2),\\\\\nx&=0,\\qquad y=h,\\qquad a=1/h.\n\\end{aligned}\n\\]\nThe input gap is strictly below \\(\\delta\\) and the output gap is exactly one. Allowing the slope to be chosen without a bound after delta destroys uniform equicontinuity, even though the offsets are bounded."
}
```

**Delayed retrieval, two study sessions later.** Without the diagram, write the
two quantifier orders and construct a ramp defeating an arbitrary proposed
delta. Then recover the common modulus for the shrinking-height family from
its two competing bounds. Explain why unbounded individual slopes answered
neither family question by themselves.

## Session 2: work the criterion in two unfamiliar spaces

Let \(K=\{0\}\cup\{1/n:n\ge1\}\) with ordinary distance. It is totally bounded because it lies in \([0,1]\), which has finite small-ball covers; equivalently, isolate a finite prefix and put the tail near 0. It is complete: if a Cauchy sequence of points in \(K\) converges in \(\mathbb R\), its real limit belongs to \(K\). To justify the last sentence, a nonzero limit \(a\) cannot be approached by infinitely many distinct reciprocals, since \(1/n\to0\); an eventual fixed reciprocal has limit in \(K\). Hence \(K\) is compact. Directly from sequences, any sequence in \(K\) either repeats one reciprocal infinitely often or has a subsequence of distinct reciprocals tending to 0.

Compare \(J=K\setminus\{0\}\). It is still totally bounded: every subset of a totally bounded space inherits finite covers after moving centers into the subset when needed. But \(1/n\) is a Cauchy sequence with no limit in \(J\), so \(J\) is not complete or compact. Adding just one missing point changes the existence conclusion. This is a more surgical comparison than contrasting a finite interval with the whole real line.

For the function-space claim above, a concrete family of spikes is useful. On disjoint intervals \(I_n=(2^{-(n+1)},2^{-n})\), let \(s_n\) be zero off \(I_n\), linear from zero at its left endpoint to one at its midpoint, then linear back to zero. Each \(s_n\) is continuous and has sup norm one. At the midpoint of \(I_n\), \(s_n=1\) and \(s_m=0\) for \(m\ne n\), hence \(d_\infty(s_n,s_m)=1\). A radius-\(1/3\) ball can hold at most one spike, by the triangle inequality; finitely many such balls cannot cover the unit ball. The point is not that the functions are unbounded; they all have the same uniform height.

**Checkpoint.** Which ingredient fails for \(J\), and which fails for the unit ball of \(C([0,1])\)? Both are bounded. A compactness argument that only mentions a bound on values has missed the finite-cover requirement at small scales.

```exercise
{"id":"analysis-compact-shared-modulus-diagnostic","type":"choice","prompt":"Why does 'every function in the sup-norm unit ball is uniformly continuous' not reproduce the finite-net proof for the compact family K?","options":[{"label":"Each function may require its own modulus; the mesh must work simultaneously for the whole family.","correct":true,"feedback":"The finite signature argument needs one mesh scale controlling both f and its chosen representative for every family member."},{"label":"Uniformly continuous functions are never bounded.","correct":false,"feedback":"Every member of the unit ball is bounded by definition; boundedness is not the missing property."},{"label":"A finite mesh automatically proves a shared modulus.","correct":false,"feedback":"Sampling finitely many curves cannot quantify over an entire function family."},{"label":"The sup metric ignores values between mesh nodes.","correct":false,"feedback":"The sup metric includes every input; the common modulus is precisely what controls the unsampled points."}],"hints":["Identify which two terms in |f(x)−g(x)| require the same mesh width for all f and g."],"solution":"The terms |f(x)−f(x_i)| and |g(x_i)−g(x)| need one node spacing that works for every possible family member. Individual moduli may deteriorate without bound, as the narrowing height-one spikes show."}
```

## Guided proof path: diagnose a half-open interval

Let \(Y=(0,1]\) with the usual distance. Work through the bounded decisions in order, saving each answer before opening its feedback. The last step is a written proof for self or instructor review; the choice checks only verify the intermediate decisions.

```exercise
{"id":"analysis-compact-path-criterion","type":"choice","prompt":"For \\(Y=(0,1]\\) with the usual distance, which general metric-space test will diagnose compactness using two separate properties?","options":[{"label":"Check total boundedness and completeness, then apply their equivalence with compactness.","correct":true,"feedback":"This test identifies the exact ingredient that can fail even for a bounded set."},{"label":"Check only that Y lies in a finite-radius ball.","correct":false,"feedback":"Ordinary boundedness controls one large scale, not finite covers at every scale or missing limits."},{"label":"Check only that Y has infinitely many points.","correct":false,"feedback":"Many infinite spaces are compact; cardinality alone does not decide it."}],"hints":["Use the theorem proved above, not a visual impression of the interval."]}
```

```exercise
{"id":"analysis-compact-path-net","type":"choice","prompt":"Which construction proves total boundedness of \\(Y\\) for every \\(\\varepsilon>0\\)?","options":[{"label":"Use the single center \\(1\\) with radius \\(1\\) for every \\(\\varepsilon\\).","correct":false,"feedback":"The radius must become arbitrarily small; this only proves ordinary boundedness."},{"label":"Choose integer \\(N>1/\\varepsilon\\) and centers \\(j/N\\) for \\(1\\le j\\le N\\); choose \\(j=\\lceil Nx\\rceil\\) for \\(x\\in Y\\).","correct":true,"feedback":"This gives \\(0\\le j/N-x<1/N<\\varepsilon\\), and all centers belong to \\(Y\\)."},{"label":"Use centers \\(0,1/N,\\ldots,1\\) without checking whether \\(0\\) belongs to \\(Y\\).","correct":false,"feedback":"A total-boundedness proof should provide centers in the metric space; the first option does so directly."}],"hints":["Partition \\((0,1]\\) into \\(N\\) cells whose length is less than \\(\\varepsilon\\)."]}
```

```exercise
{"id":"analysis-compact-path-witness","type":"choice","prompt":"Which sequence proves the remaining compactness hypothesis fails in \\(Y\\)?","options":[{"label":"The constant sequence \\(y_n=1\\) is Cauchy, so \\(Y\\) is incomplete.","correct":false,"feedback":"This sequence converges inside \\(Y\\)."},{"label":"The sequence alternating between \\(1\\) and \\(1/2\\) shows \\(Y\\) is incomplete.","correct":false,"feedback":"That sequence is not Cauchy; it cannot witness incompleteness."},{"label":"\\(y_n=1/n\\) is Cauchy, but its only real limit \\(0\\) is absent from \\(Y\\).","correct":true,"feedback":"It pinpoints incompleteness while leaving total boundedness intact."}],"hints":["A missing endpoint is useful only if a Cauchy sequence actually approaches it."]}
```

```exercise
{"id":"analysis-compact-path-synthesis","type":"written","prompt":"Assemble a proof that \\(Y=(0,1]\\) is totally bounded but not compact. Give either a failed open-cover argument or a direct sequence argument as a second route, and name the metric in every claim.","hints":["Use the finite \\(\\varepsilon\\)-net and the Cauchy witness from the preceding decisions.","For an open cover, try \\(U_m=Y\\cap(1/m,2)\\), \\(m\\ge2\\)."],"rubric":["Constructs finite ε-ball covers with centers in Y","Shows 1/n is Cauchy with no Y-limit","Invokes the compactness criterion with the failed hypothesis","Gives a valid second sequential or open-cover route"],"solution":"Fix \\(\\varepsilon>0\\) and choose integer \\(N>1/\\varepsilon\\). The centers \\(j/N\\in Y\\), \\(1\\le j\\le N\\), cover \\(Y\\) by \\(\\varepsilon\\)-balls: for \\(x\\in Y\\) choose \\(j=\\lceil Nx\\rceil\\), so \\(0\\le j/N-x<1/N<\\varepsilon\\). Thus \\(Y\\) is totally bounded. The sequence \\(1/n\\) is Cauchy under the usual distance and tends in \\(\\mathbb R\\) to \\(0\\notin Y\\), so \\(Y\\) is incomplete and hence not compact. Directly, \\(U_m=Y\\cap(1/m,2)\\), \\(m\\ge2\\), is an open cover: every \\(x>0\\) lies in some \\(U_m\\). A finite subfamily has a largest index \\(M\\) and its union misses every \\(x\\in Y\\) with \\(x\\le1/M\\).","transfer":"Keep the point set \\(Y\\) but change its metric to \\(\\rho(x,y)=|1/x-1/y|\\). Decide completeness, total boundedness, and compactness, and identify which earlier witness changes role.","transferSolution":"The map \\(\\phi:Y\\to[1,\\infty)\\), \\(\\phi(x)=1/x\\), is a bijective isometry. The image \\([1,\\infty)\\) is closed in complete \\(\\mathbb R\\), so \\((Y,\\rho)\\) is complete. It is not totally bounded: points \\(x_n=1/n\\) have \\(\\rho(x_m,x_n)=|m-n|\\ge1\\) for distinct integers, so radius-\\(1/3\\) balls cannot finitely cover them. Therefore it is not compact. The same \\(1/n\\) sequence is no longer Cauchy; the metric changed its role."}
```

```exercise
{"id":"analysis-metric-compact-triad","type":"choice","prompt":"Which extra property turns completeness into compactness in every metric space?","options":[{"label":"Total boundedness: finite ε-ball covers at every positive scale.","correct":true,"feedback":"Complete plus totally bounded is equivalent to metric compactness."},{"label":"One finite-radius ball containing the space.","correct":false,"feedback":"The infinite discrete metric is bounded and complete but not compact."},{"label":"Having infinitely many points.","correct":false,"feedback":"Finite and infinite spaces can both be compact."}],"hints":["Compare the infinite discrete example at ε=1/2."]}
```

```exercise
{"id":"analysis-compact-proof-step","type":"choice","prompt":"You have sequential compactness and an arbitrary open cover. What must be established before a finite small-ball cover yields a finite subcover of the given sets?","options":[{"label":"A common δ>0 such that every δ-ball fits inside some member of the cover.","correct":true,"feedback":"Then finite δ-balls can be assigned to finitely many original cover members."},{"label":"That one cover member contains all of X.","correct":false,"feedback":"Compact covers may need several members."},{"label":"That the cover itself consists only of balls with the same radius.","correct":false,"feedback":"The original cover is arbitrary; the common scale is derived from sequential compactness."}],"hints":["A ball cover and the original open cover are different collections."]}
```

```exercise
{"id":"analysis-compact-missing-limit","type":"written","prompt":"Analyze \\(J=\\{1/n:n\\ge1\\}\\) in the usual metric. Prove total boundedness directly, prove incompleteness, and construct an open cover of \\(J\\) with no finite subcover. State which implication of the compactness theorem each part illustrates.","hints":["For \\(\\varepsilon>0\\), put all sufficiently late points in one \\(\\varepsilon\\)-ball centered at a reciprocal; cover the finite prefix individually.","Isolate each reciprocal by a small relatively open neighborhood."],"rubric":["Constructs a finite ε-cover with centers in J","Uses 1/n as a Cauchy sequence missing its limit","Gives a valid relative-open cover with no finite subcover","Connects each failure to the compactness equivalence"],"solution":"Fix \\(\\varepsilon>0\\) and choose \\(N\\) with \\(1/N<\\varepsilon\\). For \\(n\\ge N\\), \\(|1/n-1/N|\\le1/N<\\varepsilon\\); cover the finite prefix separately. Thus \\(J\\) is totally bounded. The sequence \\(1/n\\) is Cauchy in \\(\\mathbb R\\) but has no limit in \\(J\\), so \\(J\\) is incomplete. Each \\(1/n\\) is isolated in \\(J\\): choose a radius less than half its distance to neighboring reciprocals. The singleton sets \\(\\{1/n\\}\\), relatively open in \\(J\\), cover \\(J\\), but no finite subfamily does. Total boundedness alone gives neither sequential nor open-cover compactness.","transfer":"For \\(K=J\\cup\\{0\\}\\), explain why the singleton cover no longer covers \\(K\\), then give a finite-subcover argument for a general open cover.","transferSolution":"The singleton cover omits \\(0\\). Any open-cover member \\(U\\) containing \\(0\\) contains all \\(1/n\\) beyond some \\(N\\), because \\(1/n\\to0\\). Choose one cover member for each of the finitely many remaining reciprocals. Together with \\(U\\), these cover \\(K\\)."}
```

```exercise
{"id":"analysis-compact-spikes","type":"written","prompt":"Construct infinitely many continuous functions in the sup-norm unit ball of \\(C([0,1])\\) that are pairwise distance \\(1\\). Use them to prove the unit ball is not totally bounded. Explain why completeness of \\(C([0,1])\\) does not rescue compactness.","hints":["Put height-one triangular spikes on pairwise disjoint intervals approaching \\(0\\).","A ball of radius less than \\(1/2\\) cannot contain two points at distance \\(1\\)."],"rubric":["Specifies continuous height-one spikes with disjoint supports","Shows every pair has sup distance one","Uses a fixed positive radius to disprove finite-ball covers","States that total boundedness, not completeness, is missing"],"solution":"On \\(I_n=(2^{-n-1},2^{-n})\\), let \\(s_n\\) rise linearly from \\(0\\) to \\(1\\) at the midpoint and fall linearly to \\(0\\), and set it to zero elsewhere. It is continuous with \\(\\|s_n\\|_\\infty=1\\). At the midpoint of \\(I_n\\), \\(s_n=1\\) and \\(s_m=0\\) for \\(m\\ne n\\), so \\(\\|s_n-s_m\\|_\\infty=1\\). Any radius-\\(1/3\\) ball contains at most one spike, since two points in it would be less than \\(2/3\\) apart. Thus no finite radius-\\(1/3\\) cover of the unit ball exists. The ambient function space is complete, but its unit ball lacks total boundedness."}
```

The spike family fails because its individual Lipschitz constants have no common bound. The next problem reverses that mechanism: a shared Hölder modulus supplies one mesh scale for the whole family, while removing the shared constant brings the spikes back.

```exercise
{"id":"analysis-compact-holder-family","type":"written","prompt":"In the sup metric, let H={f∈C([0,1]): |f|≤1 and |f(x)−f(y)|≤2√|x−y| for all x,y}. Prove H is compact by adapting the occupied-signature finite-net construction. Then prove compactness fails if the shared Hölder condition is replaced by 'each f is Lipschitz with some unrestricted constant depending on f'.","hints":["First show H is closed in C([0,1]).","For a mesh of width h and value bins of width delta, bound two between-node terms by 2√h each.","Use height-one triangular spikes with disjoint shrinking supports for the failure case."],"rubric":["Proves H is closed and therefore complete","Chooses a finite mesh and finitely many value signatures","Selects centers from occupied signatures inside H","Derives the uniform bound 4√h+delta","Constructs individually Lipschitz height-one spikes that are pairwise sup distance one"],"solution":"If f_j∈H converge uniformly to f, continuity passes to f, the bound |f|≤1 passes to the limit, and |f(x)−f(y)|≤2||f−f_j||∞+2√|x−y| gives the shared Hölder condition after j→∞. Thus H is closed in complete C([0,1]). Given ε>0, choose a uniform mesh with width h<ε²/64, so 4√h<ε/2, and divide [−1,1] into finitely many bins of width delta<ε/2. Record every function's node-value bins and choose one representative in H from each occupied signature. If f and g share a signature, a node x_i within h of x gives |f(x)−g(x)|≤2√h+delta+2√h<ε. Hence H is totally bounded and complete, so compact. For the failed variant, put continuous height-one triangular spikes on pairwise disjoint intervals (2^(−n−1),2^(−n)). Each spike is Lipschitz with a finite constant determined by its width, but those constants are unbounded. At the nth peak it differs from every other spike by one, so the family has pairwise sup distance one and admits no finite radius-1/3 cover.","transfer":"For fixed C>0 and 0<α≤1, prove compactness of the family |f|≤1, |f(x)−f(y)|≤C|x−y|^α, and give an explicit mesh inequality sufficient for an ε-net.","transferSolution":"Uniform limits preserve the bound and shared Hölder inequality, so the family is complete. If h is the mesh width and delta the value-bin width, same-signature functions satisfy ||f−g||∞≤2C h^α+delta. Choose delta<ε/2 and h<(ε/(4C))^(1/α); finitely many occupied signatures then give a finite ε-net. Complete plus totally bounded implies compact."}
```

**Independent transfer.** Let \(F\) be a closed subset of a compact metric space \(X\). Prove \(F\) compact in two ways: by open covers and by sequences. Say explicitly where closedness enters. Then test the claim after deleting “closed” using a real interval.

<details><summary>Worked solution</summary>

Given an open cover of \(F\) by sets open in \(X\), adjoin \(X\setminus F\), open by closedness, to cover \(X\). Compactness supplies a finite cover; remove \(X\setminus F\) if present. Sequentially, any sequence in \(F\) has a subsequence converging in \(X\); closedness puts its limit in \(F\). These arguments also work for relative-open covers after replacing each relative member by an ambient open set. Without closedness, \(F=(0,1)\subset[0,1]\) is not compact because \(1/n\) for \(n\ge2\) converges only to 0 outside \(F\).

</details>
