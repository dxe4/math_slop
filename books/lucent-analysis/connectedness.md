# Connectedness and why intermediate values appear

Compactness prevents escape. **Connectedness** prevents a set from being torn into two relatively open pieces. These properties do different work: \([0,1]\cup[2,3]\) is compact but disconnected, while \(\mathbb R\) is connected but not compact.

For \(A\subseteq\mathbb R\), a subset \(U\subseteq A\) is **open relative to \(A\)** when \(U=A\cap V\) for an open \(V\subseteq\mathbb R\). The set \(A\) is connected if it cannot be written as \(U\cup V\) with \(U,V\) disjoint, nonempty, and relatively open in \(A\). Equivalently, only \(\varnothing\) and \(A\) are both open and closed relative to \(A\). The word *relative* is essential.

## What a separation really says

The phrase “relatively open” does not mean “open in the whole real line.” In \(A=[0,1]\), the set \([0,1/2)\) is open relative to \(A\), because it equals \(A\cap(-1,1/2)\), despite containing its left endpoint. Its complement \([1/2,1]\) is closed relative to \(A\). That division is **not** a separation: the right piece is not relatively open at \(1/2\).

By contrast, take \(A=[0,1]\cup[2,3]\). The two pieces \([0,1]\) and \([2,3]\) are relatively open in \(A\): intersect \(A\) with \((-\infty,3/2)\) and \((3/2,\infty)\). They are also relatively closed, because each is the other's complement in \(A\). The missing interval between 1 and 2 leaves room to separate them without cutting through either piece.

Here is the promised equivalence with **clopen** sets. If \(A=U\cup V\) is a separation, then \(V=A\setminus U\). Since \(V\) is relatively open, \(U\) is relatively closed as well as open. Conversely, if a nonempty proper \(U\subset A\) is both relatively open and relatively closed, then \(U\) and \(A\setminus U\) form a separation. This proof is only a few lines, but it prevents a common logical error: one open subset alone does not make a space disconnected.

## Intervals cannot be separated

**Theorem 33.1.** A subset of \(\mathbb R\) is connected exactly when it is an interval, counting a singleton and the empty set as intervals.

**Proof, interval direction.** Suppose an interval \(I\) has a separation \(C\cup(I\setminus C)\). Choose \(a\in C\), \(b\in I\setminus C\); exchange the pieces if needed so \(a<b\). Let \(s=\sup(C\cap[a,b])\). Completeness gives \(s\in[a,b]\). Since \(C\) is closed relative to \(I\), a sequence in \(C\cap[a,b]\) approaching \(s\) shows \(s\in C\); in particular \(s\ne b\). Since \(C\) is open relative to \(I\), some \(\delta>0\) satisfies \(I\cap(s-\delta,s+\delta)\subseteq C\). The interval property puts a point of \(I\) strictly between \(s\) and \(\min(b,s+\delta)\), contradicting the definition of \(s\). No separation exists.

**Proof, converse.** If \(A\) is not an interval, there are \(x<z<y\) with \(x,y\in A\) and \(z\notin A\). The nonempty sets \(A\cap(-\infty,z)\) and \(A\cap(z,\infty)\) are disjoint, relatively open, and cover \(A\). Therefore \(A\) is disconnected. ∎

The first direction uses completeness. In the subspace \(\mathbb Q\), the rational points in \([0,2]\) split into the points below and above \(\sqrt2\). Both pieces are relatively open and nonempty because the cut point is absent. They are dense near that cut, but density does not join the pieces.

**Read the supremum step carefully.** The set \(C\cap[a,b]\) is nonempty because it contains \(a\), and \(b\) bounds it. Supremum approximation produces points of \(C\) arbitrarily close to \(s\) from below; relative closedness keeps their limit in \(C\). Relative openness then forces *some* points to the right of \(s\) into \(C\), contradicting that \(s\) was the upper boundary. Completeness supplies the candidate boundary; openness and closedness make the candidate impossible. A drawing of a solid interval suggests this argument but cannot replace any of those three steps.

## Continuous maps preserve connectedness

If \(f:A\to\mathbb R\) is continuous and \(A\) connected, then \(f(A)\) is connected. To prove this rather than infer it from a picture, suppose \(f(A)=U\cup V\) were a separation. The inverse images \(f^{-1}(U)\) and \(f^{-1}(V)\) are relatively open in \(A\), because continuity pulls back relatively open target sets to relatively open domain sets. Both are nonempty: \(U,V\subseteq f(A)\), so every point of either piece has a preimage. They are disjoint and cover \(A\), contradicting connectedness.

**Intermediate Value Theorem, interval form.** If \(I\subseteq\mathbb R\) is an interval and \(f:I\to\mathbb R\) is continuous, then \(f(I)\) is an interval. In particular, if \(a,b\in I\) and \(f(a)<t<f(b)\), there is \(c\in I\) with \(f(c)=t\). The interval need not be closed or bounded for this conclusion. We used two results in sequence: intervals are connected, then continuous images preserve connectedness. The usual textbook version with \(I=[a,b]\) follows immediately.

The theorem asserts existence, not uniqueness. For \(f(x)=x^3-3x\) on \([-2,2]\), the target value 0 occurs at \(x=-\sqrt3,0,\sqrt3\). It also does not say the image is closed. The next example shows why connectedness and compactness should not be conflated.

Do not transfer every set property this way. A continuous image of a closed set need not be closed: \(f(x)=1/(1+x^2)\) maps closed \(\mathbb R\) onto \((0,1]\). It is connected, as required, but not closed. A continuous image of a *compact* set is compact; that is a different theorem with a stronger hypothesis.

## The hypotheses have different failure modes

First keep continuity but remove connectedness. On \(D=[-1,0)\cup(0,1]\), the function \(f(x)=1/x\) is continuous at every point of its domain. Yet \(f(D)=(-\infty,-1]\cup[1,\infty)\) omits every value between \(-1\) and 1. No intermediate-value conclusion applies across the missing input \(0\). Restricting a function to a smaller domain can destroy the connectedness needed by the theorem without changing the function's local continuity at any remaining point.

Next keep the interval but remove continuity. Define \(g(x)=0\) for \(x<0\) and \(g(x)=1\) for \(x\ge0\). The domain \([-1,1]\) is connected, but \(g([-1,1])=\{0,1\}\) is disconnected. The jump is precisely where the inverse-image proof breaks: the preimage of a relatively open piece of the image need not be open in the domain.

There is a subtler converse trap. A function can take every intermediate value without being continuous. Set \(h(0)=0\) and \(h(x)=\sin(1/x)\) for \(x\ne0\). Every interval **not** containing zero has an interval image by ordinary continuity. Every nondegenerate interval containing zero contains points arbitrarily close to zero on at least one side, where \(\sin(1/x)\) takes every value in \([-1,1]\); its whole image is exactly \([-1,1]\). Thus \(h\) has the intermediate-value property on every interval, but it is discontinuous at zero: sequences with reciprocal phases \(\pi/2+2\pi n\) and \(3\pi/2+2\pi n\) give output limits 1 and \(-1\). The intermediate-value property is a consequence of continuity, not a characterization of it.

### Visual laboratory: motion through values is not the same as continuity

**Predict.** The blue function below is \(\sin(k/x)\) away from zero, with a separately assigned point at \((0,0)\). Will increasing \(k\) remove the discontinuity? Will a finite-resolution plot show every oscillation?

The scene language plots the off-zero formula and draws the rose point as a separate marker for the mathematical assignment \(h(0)=0\); the marker does not fill the formula's domain hole by itself.

```mathviz
scene "Intermediate values without a limit";
domain -1 1;
range -1.2 1.2;
param k = 1 from 0.5 to 5;
fn h(x) = sin(k/x);
plot h color blue;
point assigned = (0,0) color rose;
```

**Explore.** Increase \(k\), then edit the assignment point to \((0,1)\) in the source. The nearby oscillation is unchanged because changing one function value cannot change its punctured limit. The isolated point describes a chosen value at zero; it is not a bridge between the two plotted branches.

**Explain.** For any fixed \(k>0\), two sequences approaching zero make \(\sin(k/x)\) equal 1 and \(-1\). No continuity assignment at zero can reconcile them. Yet arbitrarily close to zero the function attains every value in \([-1,1]\), so the interval-image statement still holds. Sampling may miss many turns; the exact phase argument establishes the claim.

**Transfer.** Replace the formula by \(x\sin(k/x)\) and assign zero at the origin. The bound \(|x\sin(k/x)|\le|x|\) now proves continuity at zero. State why the same edited plot has a stronger theorem behind it than a visual impression of shrinking oscillations.

## Problems for independent proof

1. Find a separation of \(S=(-2,-1]\cup[1,2)\) using relatively open subsets of \(S\). Are the pieces open in \(\mathbb R\)?
2. Prove directly that if \(A\) is connected and \(f:A\to\mathbb R\) is continuous, then \(f(A)\) cannot equal \((-\infty,0)\cup(0,\infty)\). State the missing condition if the image is only a subset of that union.
3. The domain \(D=(-1,0)\cup(0,1)\) is disconnected. Compute the image of \(f(x)=x^2\) on \(D\). Does a connected image imply a connected domain?
4. Prove that the continuous function \(f(x)=x^3-3x\) takes the value zero exactly three times on \([-2,2]\). Separate the argument establishing *at least one* zero from the algebra establishing *exactly three*.
5. For \(h(0)=0\) and \(h(x)=\sin(1/x)\) otherwise, prove that the image of every nondegenerate interval containing zero is \([-1,1]\). Then give two explicit sequences proving that \(h\) is not continuous at zero.

<details><summary>Hints for the independent problems</summary>

1. Find a number in the missing middle interval and intersect \(S\) with the open half-lines on either side.
2. A connected image is an interval; be careful about whether it contains values of both signs.
3. Squaring folds the two components onto each other.
4. Factor \(x^3-3x=x(x^2-3)\); then count which roots lie in the domain.
5. Any interval containing zero and another point contains a one-sided subinterval approaching zero. In that subinterval, reciprocal phases range through arbitrarily many full cycles.

</details>

<details><summary>Worked solutions to the independent problems</summary>

1. Let \(U=S\cap(-\infty,0)=(-2,-1]\) and \(V=S\cap(0,\infty)=[1,2)\). They are nonempty, disjoint, relatively open, and cover \(S\). Neither need be open in \(\mathbb R\): \(-1\in U\) and \(1\in V\) are included endpoints.
2. If \(f(A)\) contained both a negative and a positive value, the interval property would force it to contain zero, contradicting the proposed image. If all values have one sign, a connected image can certainly be a subset of \((-\infty,0)\cup(0,\infty)\); the assertion concerns equality to the disconnected union, or more generally containing both sides while omitting zero.
3. The image is \((0,1)\), an interval: every \(y\in(0,1)\) equals \(x^2\) for \(x=\sqrt y\in(0,1)\), and no other outputs occur. Connectedness of the image does not imply connectedness of the domain; a map can fold or collapse separate pieces.
4. The interval is connected and \(f\) continuous. Since \(f(-2)=-2<0<f(-1)=2\), the intermediate value theorem yields a root in \((-2,-1)\); it does not count all roots. The factorization \(x(x-\sqrt3)(x+\sqrt3)\) shows the complete zero set is \(\{-\sqrt3,0,\sqrt3\}\), all inside \([-2,2]\), so there are exactly three.
5. Let \(I\) contain zero and some other point. It contains either \((0,\eta)\) or \((-\eta,0)\) for some \(\eta>0\). On either one-sided interval \(1/x\) runs through arbitrarily long ranges, so \(\sin(1/x)\) attains every value in \([-1,1]\). All values of \(h\) are already in that range; hence \(h(I)=[-1,1]\). The sequences \(x_n=1/(\pi/2+2\pi n)\) and \(y_n=1/(3\pi/2+2\pi n)\) both approach zero, while \(h(x_n)=1\) and \(h(y_n)=-1\); no limit, and therefore no continuity at zero, is possible.

</details>

```exercise
{"id":"analysis-connected-rationals","type":"choice","prompt":"Why can the rational points in [0,2] be separated at √2?","options":[{"label":"√2 is absent, so below and above are relatively open pieces covering every rational point.","correct":true,"feedback":"The missing cut lets both nonempty pieces be open in the rational subspace."},{"label":"Because the rational set is unbounded.","correct":false,"feedback":"This particular set is bounded."},{"label":"Because no rational number lies near √2.","correct":false,"feedback":"Rationals lie arbitrarily close on both sides."}],"hints":["Check the ambient space and whether the cut point belongs to it."]}
```

**Independent transfer.** Decide whether \(S=\{0\}\cup(1,2)\) is connected, compact, both, or neither. Give a separation or an open-cover argument as appropriate. Then decide whether its image under the constant map \(f(x)=0\) is connected; explain why this does not imply \(S\) was connected.

<details><summary>Worked solution</summary>

\(S\cap(-1,1/2)=\{0\}\) and \(S\cap(1/2,3)=(1,2)\) form a separation, so \(S\) is disconnected. It is bounded but not closed: \(1+1/n\in S\) for \(n\ge2\) tends to \(1\notin S\). Hence it is not compact by Heine–Borel. Its constant image is the singleton \(\{0\}\), which is connected. The implication that continuous images of connected sets are connected cannot be reversed: a map can collapse distinct pieces to one point.

</details>
