# Countability: size without length

**Prerequisites.** Sets, functions, induction, and completeness. **Outcomes.** Construct enumerations, prove that an interval and the set of infinite binary strings cannot be enumerated, separate density from cardinality, and use countability to analyze jumps of a monotone function.

An infinite list can contain every rational in an interval and still omit real numbers. Density describes *where* members occur; cardinality describes whether sets can be paired by a bijection. The distinction matters whenever a theorem quantifies over all real inputs.

## A list is a function

A set \(A\) is **countable** if it is finite or there is a surjection \(\mathbb N\to A\). Repeated entries can be deleted to obtain a bijection with \(\mathbb N\) when \(A\) is infinite. A subset of a countable set is countable: scan a list of the larger set and retain members of the subset when they first appear. “I can write many examples” is not a countability proof.

The positive lattice \(\mathbb N^2\) is countable. Traverse pairs \((i,j)\) by increasing \(i+j\), and within each finite diagonal by increasing \(i\). Every pair eventually appears. The integers are countable by the list \(0,1,-1,2,-2,\ldots\). Consequently a countable union \(\bigcup_{i\ge1}A_i\) of countable sets is countable: list each \(A_i\) as \(a_{i1},a_{i2},\ldots\), traverse the pairs \((i,j)\), and skip missing entries and repeats. This construction requires a chosen list for each \(A_i\); for these explicit sets the lists are available.

Every rational is \(p/q\) with \(p\in\mathbb Z\) and \(q\in\mathbb N\). Enumerate \(\mathbb Z\times\mathbb N\) using the lattice construction and output \(p/q\), discarding repeats such as \(1/2=2/4\). Thus \(\mathbb Q\) is countable even though every nonempty open interval contains a rational. Countability and density coexist.

## Why no list contains an interval

Suppose \(x_1,x_2,\ldots\) lists every point of \([0,1]\). Begin with \(I_0=[0,1]\). If \(I_{n-1}=[a,b]\), consider its disjoint closed outer thirds

\[
L=[a,a+(b-a)/3],\qquad R=[b-(b-a)/3,b].
\]

At most one contains \(x_n\). Choose the other as \(I_n\). This gives nonempty nested closed intervals with lengths \(3^{-n}\), and \(x_n\notin I_n\). Let \(a_n,b_n\) be their endpoints. The \(a_n\) increase and are bounded; put \(c=\sup_n a_n\). Every \(b_n\) bounds all the \(a_k\), so \(a_n\le c\le b_n\) for each \(n\). Thus \(c\in I_n\) for every \(n\). Since \(b_n-a_n\to0\), this common point is unique. But \(c\ne x_n\) for every \(n\), contradicting the claimed list. Completeness turns the nested approximations into a real point.

Using disjoint thirds avoids decimal-expansion ambiguity. The choice excludes the \(n\)th proposed point even when it lies at an endpoint.

### Make one choice, then justify infinitely many

The diagram shows **one** step of the construction. The violet bar is the current interval \([a,b]\); the teal and amber bars are its disjoint closed outer thirds. The rose line marks the next proposed list member \(q\). Predict which child can be retained before changing \(q\). Then move \(a\) and \(b\), keeping \(a<b\), and test a point on a child endpoint. The vertical positions merely separate the bars; only the horizontal coordinate represents a real number.

```mathviz
scene "One proposed point cannot block both outer thirds";
domain -0.05 1.05;
range 0 3;
param a = 0 from 0 to 0.49;
param b = 1 from 0.51 to 1;
param q = 0.5 from 0 to 1;
polygon current = (a,2.1), (b,2.1), (b,2.38), (a,2.38) color violet;
polygon left = (a,1.05), (a+(b-a)/3,1.05), (a+(b-a)/3,1.35), (a,1.35) color teal;
polygon right = (b-(b-a)/3,1.05), (b,1.05), (b,1.35), (b-(b-a)/3,1.35) color amber;
segment proposed from (q,0.75) to (q,2.55) color rose;
point list_member = (q,2.24) color rose;
```

The middle third is a gap, so the closed outer thirds do not share an endpoint. If \(q\) lies in one outer third, retain the other. If it lies in the middle gap or outside \([a,b]\), either child works. The controls show that *this finite decision* is possible; they cannot show that infinitely many decisions have a common point. The supremum argument in the proof does that work.

Here are three actual choices for a hypothetical proposed list beginning \(x_1=1/2,\ x_2=1/9,\ x_3=1/4\). At each stage we choose a child that excludes that stage's point:

| Stage | Current interval | Proposed point | Retained interval |
| --- | --- | --- | --- |
| 1 | \([0,1]\) | \(1/2\), in the middle gap | \([0,1/3]\) |
| 2 | \([0,1/3]\) | \(1/9\), in the left child | \([2/9,1/3]\) |
| 3 | \([2/9,1/3]\) | \(1/4\), in the left child | \([8/27,1/3]\) |

These three lines exclude only three entries. At stage \(n\) the same rule excludes \(x_n\), the interval length is \(3^{-n}\), and the intervals remain nested. Those three facts, together with completeness, turn a finite recipe into the contradiction for **every** proposed infinite list.

```exercise
{"id":"analysis-cardinality-nested-construction","type":"written","prompt":"Starting with I₀=[0,1] and proposed entries x₁=1/2, x₂=1/9, x₃=1/4, verify the three retained intervals in the table. Explain why an endpoint belongs to a closed outer third, why the other third still avoids it, and then prove that the infinite construction defeats any proposed enumeration of [0,1]. Do not infer the infinite result from the three plotted steps.","hints":["For [a,b], write the left child [a,a+(b−a)/3] and right child [b−(b−a)/3,b].","At stage n, the length is 3^(−n); use c=sup of the left endpoints to establish a common point."],"rubric":["Computes [0,1/3], [2/9,1/3], and [8/27,1/3] correctly","Handles closed-child endpoints by using disjoint outer thirds","Shows the intervals are nested, nonempty, and shrink to length zero","Uses completeness to obtain a common real point","Explains why that point differs from every xₙ and why a finite picture is insufficient"],"solution":"At stage 1, 1/2 lies in the middle gap, so retain [0,1/3]. Its outer thirds are [0,1/9] and [2/9,1/3]; x₂=1/9 belongs to the first closed child, so retain [2/9,1/3]. That interval's outer thirds are [2/9,7/27] and [8/27,1/3]. Since 1/4 lies in the first, retain [8/27,1/3]. A child endpoint belongs to its own closed child but not the other, because the children are separated by an open middle gap. For an arbitrary proposed enumeration, repeat this rule at every n. The resulting nonempty closed intervals nest and have lengths 3^(−n). Their left endpoints increase to c by completeness, and every right endpoint bounds c from above, so c belongs to every interval. Stage n excludes xₙ from Iₙ, hence c≠xₙ for all n. Three visible steps cannot justify the infinitely many exclusions or existence of their common point.","transfer":"Changed endpoint case: take x₁=1/3, x₂=2/3, x₃=1. At each stage retain the outer third that excludes the current point. Find I₁,I₂,I₃ exactly. What would fail if you used two closed halves that shared their midpoint instead of disjoint outer thirds?","transferSolution":"The first point 1/3 is in the closed left third of [0,1], so I₁=[2/3,1]. The second point 2/3 is in the closed left third of I₁, so I₂=[8/9,1]. The third point 1 is in its closed right third, so I₃=[8/9,25/27]. Two closed halves share their midpoint; if the proposed point were that midpoint, both children would contain it and neither would be a valid retained interval. Disjoint outer thirds avoid that defect."}
```

## Binary strings and the difference between a list and its limits

There are countably many **finite** strings of zeroes and ones: for each length \(m\) there are \(2^m\) strings, and a countable union of finite sets can be listed by length. There are uncountably many **infinite** binary strings. If \(s_1,s_2,\ldots\) were a complete list, define \(d_n=1-s_n(n)\), the opposite of the \(n\)th digit in the \(n\)th listed string. The new infinite string \(d\) differs from \(s_n\) at position \(n\) for every \(n\). This is the diagonal argument, and it also proves that the power set \(\mathcal P(\mathbb N)\) is uncountable: identify a binary string with the set of positions where it has digit 1.

The binary-string proof and nested-interval proof use the same quantifier pattern: **given any proposed list**, construct one object outside it. They do not claim to produce a fixed real number absent from every possible list. For real numbers, a binary expansion can represent the same value in two ways, so the interval proof above uses closed thirds and completeness to avoid that encoding issue.

## A less obvious consequence

An integer-coefficient polynomial \(p(x)=c_0+c_1x+\cdots+c_dx^d\) is specified by a finite tuple of integers. Such tuples form a countable union of countable sets, so there are countably many nonzero integer polynomials. A nonzero polynomial of degree \(d\) has at most \(d\) distinct roots: factor out one linear term at each distinct root and use induction on degree. Thus every polynomial contributes only finitely many real roots. Algebraic real numbers form a countable set. Because \([0,1]\) is uncountable, transcendental real numbers exist. This proves existence without naming one; it does not make them easy to calculate.

### Application: a monotone function can jump densely

**Theorem.** A nondecreasing real function on an interval has at most countably many discontinuities in its interior.

For an interior point \(x\), monotonicity gives the one-sided limits
\(f(x-)=\sup_{t<x}f(t)\) and \(f(x+)=\inf_{t>x}f(t)\), with \(f(x-)\le f(x)\le f(x+)\). If \(f\) is discontinuous at \(x\), the open **jump interval** \((f(x-),f(x+))\) is nonempty. If \(x<y\), monotonicity forces \(f(x+)\le f(y-)\), so their jump intervals are disjoint. Choose one rational number inside each jump interval. Different discontinuities receive different rationals, giving an injection into countable \(\mathbb Q\). This proof uses *density* to find a rational in each gap and *countability* to bound how many gaps there can be.

The conclusion does **not** say the discontinuities must be isolated. Enumerate the rationals in \((0,1)\) as \(q_1,q_2,\ldots\), and define

$$
g(x)=\sum_{n=1}^{\infty}2^{-n}\mathbf 1_{\{x\ge q_n\}},\qquad 0\le x\le1.
$$

The sum is well-defined because its nonnegative terms total at most \(1\). At \(q_k\), the \(k\)th summand alone jumps by \(2^{-k}\), while all other summands are nondecreasing, so \(g\) is discontinuous there. At an irrational \(x\), choose \(N\) with \(\sum_{n>N}2^{-n}<\varepsilon\). The finitely many points \(q_1,\ldots,q_N\) have a positive minimum distance from \(x\), so sufficiently close \(y\) leaves their indicator values unchanged. The remaining tail changes by at most \(\varepsilon\), proving continuity at \(x\). Thus this monotone function is discontinuous at **every rational** in \((0,1)\) and continuous at every irrational there.

The next finite model has three step contributions, at \(1/4\), \(r\), and \(3/4\). Move the red jump \(r\), predict where the graph stays flat, and check what happens when \(r=1/4\) makes two contributions jump at the same place. It illustrates how steps add, but no finite plot can display the dense infinite set of jumps in \(g\).

```mathviz
scene "A finite step model for dense rational jumps";
domain 0 1;
range -0.1 1;
param r = 0.5 from 0.1 to 0.9;
fn finite_jumps(x) = 0.5*floor((x-r)+1)+0.25*floor(x+0.75)+0.125*floor(x+0.25);
plot finite_jumps color teal;
point moving_jump = (r,finite_jumps(r)) color rose;
```

**Challenge.** Replace \(2^{-n}\) by \(3^{-n}\). Prove again that the resulting function is discontinuous exactly at the rationals in \((0,1)\), and find its total change over \([0,1]\). Merely looking at three steps does not prove the assertion about all rationals.

<details><summary>Hint and worked check</summary>

Split the sum into its first \(N\) terms and a uniformly small tail. At irrational \(x\), choose a neighborhood avoiding the finitely many first \(N\) rationals. The remaining terms change by at most \(\sum_{n>N}3^{-n}=1/(2\cdot3^N)\). At a rational \(q_k\), the \(k\)th term jumps by \(3^{-k}\), with no cancellation because all terms are nondecreasing. Since every \(q_n\in(0,1)\), the total change from \(0\) to \(1\) is \(\sum_{n\ge1}3^{-n}=1/2\).

</details>

## Repair a tempting argument

A student says: “The rationals are dense, so every irrational is a limit of rationals. Therefore there are just as many rationals as reals.” The first sentence is true: for each \(n\), choose a rational within \(1/n\) of the irrational. The conclusion does not follow. A *sequence* of rationals is a new object; an enumeration of individual rationals is not an enumeration of all possible limits of rational sequences.

```exercise
{"id":"analysis-cardinality-diagonal","type":"choice","prompt":"In the nested-interval proof, why does the common point c differ from every listed xₙ?","options":[{"label":"For each n, c belongs to Iₙ and xₙ does not.","correct":true,"feedback":"The stage-n exclusion is permanent because all later intervals remain inside Iₙ."},{"label":"The intervals become too short to contain listed points.","correct":false,"feedback":"Small intervals can contain listed points; a specific point is excluded at each stage."},{"label":"The rationals are countable.","correct":false,"feedback":"That fact alone does not defeat a proposed list of real points."}],"hints":["Track what the nth choice guarantees about Iₙ and all later intervals."]}
```

**Independent transfer.** Prove that \(\mathbb Q\cap(0,1)\) is countable and dense in \((0,1)\), then explain why deleting all rational points from \((0,1)\) leaves an uncountable set. Do not argue from a picture of the number line.

<details><summary>Worked solution</summary>

\(\mathbb Q\cap(0,1)\) is a subset of countable \(\mathbb Q\), hence countable. For \(0<a<b<1\), choose \(n\) so large that \(n(b-a)>1\), then an integer \(m\) with \(na<m<nb\); \(m/n\) establishes density. If the irrational remainder were countable too, its union with the rational part would enumerate \((0,1)\). The same nested-interval proof works inside a closed subinterval of \((0,1)\), so \((0,1)\) is uncountable. Contradiction.

</details>

## Further practice

1. Show that the set of all open intervals with **rational** endpoints is countable. Does this imply that there are only countably many open subsets of \(\mathbb R\)? Explain.
2. Prove that every nonempty open interval contains uncountably many irrational numbers. State exactly where the interval uncountability theorem and countable-union closure enter.
3. Prove that the finite subsets of \(\mathbb N\) form a countable set, but all subsets of \(\mathbb N\) do not. Identify the false step in “a subset is just a list of its elements, and lists are countable.”
4. Prove that any collection of pairwise disjoint nonempty open intervals in \(\mathbb R\) is countable. Give a rule that assigns each interval a **different** rational without assuming an arbitrary choice.

<details><summary>Hints</summary>

1. An interval is determined by a pair in \(\mathbb Q^2\). Open sets can be unions of many such basic intervals; compare with the binary-string argument.
2. An affine map takes \((0,1)\) bijectively to the given interval. Split its points into rational and irrational parts.
3. List finite subsets by their size and then list increasing finite tuples. An arbitrary subset needs an infinite membership sequence.
4. Fix one enumeration of \(\mathbb Q\). In each interval take the first rational in that enumeration which belongs to it.

</details>

<details><summary>Worked solutions</summary>

1. The set \(\{(p,q)\in\mathbb Q^2:p<q\}\) is a subset of countable \(\mathbb Q^2\), and \((p,q)\) determines one interval, so these intervals are countable. The conclusion about all open sets is false. For every \(S\subseteq\mathbb N\), let \(U_S=\bigcup_{n\in S}(n,n+1/3)\). Different subsets give different open sets, and \(\mathcal P(\mathbb N)\) is uncountable.
2. The affine bijection \(t\mapsto a+(b-a)t\) makes \((a,b)\) uncountable. Its rational part is countable as a subset of \(\mathbb Q\). If its irrational part were also countable, their union would make the whole interval countable, a contradiction.
3. For each \(k\), increasing \(k\)-tuples of naturals form a subset of \(\mathbb N^k\), which is countable by repeated pairing. The union over \(k\ge0\) is therefore countable. All subsets correspond to **infinite** membership strings, which are uncountable by diagonalization. The false claim confuses finite lists with the set of all infinite lists.
4. Fix an enumeration \(q_1,q_2,\ldots\) of \(\mathbb Q\). Each nonempty open interval contains a rational, so assign to it the least-indexed \(q_j\) it contains. Disjoint intervals cannot receive the same rational. This injection into \(\mathbb Q\) proves countability and specifies the choices.

</details>
