
# Analytic continuation

A Taylor series describes a function near one point. Its circle of convergence may stop before the function itself stops: another center can provide a new series that overlaps the first. Continuing through such overlaps extends a local formula. Yet a journey around a hole may return with a different value. Analytic continuation therefore combines rigid local uniqueness with a global question about paths.

Preparation: [Power series and analytic functions](power-series-analytic-functions.md), [Zeros, identity theorem, maximum modulus](zeros-identity-maximum-modulus.md), and [The Cauchy–Goursat theorem](cauchy-goursat.md). We use the identity theorem and elementary compactness of a parameter interval or square. A path in this chapter is continuous; it need not be differentiable because continuation depends on overlapping neighborhoods, not integration along the path. A homotopy with fixed endpoints keeps both endpoint values of the path unchanged throughout the deformation.

## Germs express local data
<a id="analytic-germs"></a>

**Definition 16.1 (Germ).** Two holomorphic functions defined near a point \(a\) have the same germ at \(a\) if they agree on some neighborhood of \(a\). A germ is the resulting equivalence class. Its value and all its derivatives at \(a\) are well-defined, and its convergent Taylor series determines it.

The neighborhood is part of a representative, not part of the germ itself. Restricting a representative to a smaller disk does not change the germ. This language lets us distinguish two statements which can otherwise sound alike: a formula is being extended to new points, and a local branch at an old point has changed after a circuit. The latter gives a different germ at the same point.

**Definition 16.2 (Continuation along a path).** Let \(\gamma:[0,1]\to D\) be a path in a domain and let \(s_0\) be a holomorphic germ at \(\gamma(0)\). A continuation along \(\gamma\) is a family of germs \(s_t\) at \(\gamma(t)\), starting at \(s_0\), such that for every \(t_0\) there is an interval \(I\) about \(t_0\) relative to \([0,1]\) and one holomorphic function on an open neighborhood of \(\gamma(I)\) whose germ at each \(\gamma(t)\), \(t\in I\), is \(s_t\).

This definition demands a single local representative over a short stretch, not arbitrary choices of a value at each point. Compactness gives a finite chain description: subdivide the parameter interval into finitely many short closed intervals, each lying in such a stretch, and choose an open disk around each successive image segment after further subdivision. The representative functions agree as germs at consecutive joining points. The identity theorem then gives agreement on the connected overlaps needed to pass between the disks.

**Proposition 16.3 (Uniqueness on a fixed path).** Two continuations along the same path with the same initial germ agree at every parameter value.

*Proof.* Cover the parameter interval by short stretches on which both families have representatives on disks around the image point, shrinking so both representatives are defined on a common disk for that stretch. On such a stretch, if the germs agree at one parameter, the representatives agree on a nonempty open subset of their common connected disk and hence throughout it by the identity theorem. Agreement therefore propagates to nearby parameters. Starting at zero and using a finite subdivision subordinate to these stretches propagates equality all the way to one. Equivalently the set of agreement parameters is relatively open and relatively closed, by the same local identity argument, and is nonempty. ∎

Thus continuation along a chosen path is unique if it exists. Existence is another question: a path may hit a genuine singularity. Neither the definition nor the uniqueness proposition promises continuation along every path in a proposed domain. That promise is an explicit hypothesis of monodromy below.

## Overlaps, chains, and moving paths
<a id="continuation-local-stability"></a>

**Lemma 16.4 (Stability under a small path perturbation).** Suppose a germ can be continued along \(\gamma:[0,1]\to D\). There is \(\varepsilon>0\) such that every path \(\eta\) in \(D\) with the same endpoints and \(\sup_t|\eta(t)-\gamma(t)|<\varepsilon\) admits continuation from the same germ and has the same final germ.

*Proof.* For each parameter \(t\), choose a disk \(B_t\subset D\) around \(\gamma(t)\) carrying a representative of the continuation over a short parameter neighborhood. Shrink the parameter neighborhood so its image has positive distance from the disk boundary. A finite subdivision can be chosen so every closed subinterval image lies in one of these smaller neighborhoods. Denote the corresponding representative disks and functions by \(B_j,f_j\). At each subdivision point, consecutive representatives have the same germ. Choose a small disk \(V_j\) about that image point inside \(B_j\cap B_{j+1}\) on which \(f_j=f_{j+1}\).

There are finitely many closed segment images and joining disks. Choose \(\varepsilon\) smaller than all their positive containment distances, and small enough that a perturbed joining point lies in \(V_j\). Then \(\eta\) travels inside \(B_j\) on the corresponding subinterval and switches representatives inside \(V_j\), where they agree. This defines a continuation along \(\eta\). Its initial and final endpoints are unchanged, so the first and last representatives give the original initial and final germs. Proposition 16.3 ensures these are the unique continuation germs along \(\eta\). ∎

The joining disks are the important detail. It is not enough that neighboring representatives happen to be defined on overlapping sets: their specific branches must agree on the portion through which the perturbed path passes. The identity theorem and a small equality disk make that agreement explicit.

**Theorem 16.5 (Homotopy invariance).** Suppose a germ at \(a\) admits continuation along every path in \(D\) starting at \(a\). If two such paths end at \(b\) and are homotopic in \(D\) with endpoints fixed, their final germs at \(b\) agree.

*Proof.* Write the homotopy as \(H(s,t)\), where \(t\) parametrizes each path and \(s\in[0,1]\) is the deformation parameter. For each \(s_0\), the path \(H(s_0,\cdot)\) has a continuation by hypothesis. Lemma 16.4 supplies an \(\varepsilon_{s_0}>0\) for it. Uniform continuity of \(H\) on the compact square implies that for all \(s\) sufficiently close to \(s_0\), the two paths are uniformly closer than that \(\varepsilon_{s_0}\). Their final germs therefore agree. The final germ as a function of \(s\) is locally constant. A locally constant function on the connected interval is constant: the set on which it equals its value at zero is both open and closed. Hence its values at zero and one agree. ∎

This proof uses no assertion that one finite chain works for every path in the homotopy. Each individual path supplies its own finite chain and its own permitted perturbation size. Compactness and local constancy then carry the endpoint germ across the deformation. It also makes clear why continuation along every relevant intermediate path must be available.

## Monodromy and a single-valued function
<a id="monodromy-simply-connected"></a>

**Theorem 16.6 (Monodromy theorem on a domain).** Let \(D\) be simply connected and let \(s\) be a holomorphic germ at \(a\in D\). If \(s\) can be continued along every path in \(D\) beginning at \(a\), there is a unique holomorphic function \(F\) on \(D\) whose germ at \(a\) is \(s\), and every such path continuation gives the germ of \(F\) at its endpoint.

*Proof.* Any two paths from \(a\) to \(b\) are homotopic with endpoints fixed in a simply connected domain. To see the usual reduction, follow the first path and the reverse of the second to make a loop, contract that loop, and retain the common endpoint portions; this gives a fixed-endpoint path homotopy. Theorem 16.5 makes the endpoint germ independent of the chosen path. Define \(F(b)\) as its value.

To prove holomorphy, choose a representative \(f_b\) of this germ on a disk \(B(b,r)\subset D\). First travel from \(a\) to \(b\), then continue along a straight segment inside that disk to \(c\). The function \(f_b\) supplies the latter continuation. Path independence makes \(F(c)=f_b(c)\) for all \(c\) in a smaller disk, so \(F\) is holomorphic near \(b\). Since \(b\) was arbitrary, \(F\) is holomorphic on \(D\). It agrees with the initial germ. Any other such function supplies continuation along every path and must agree by fixed-path uniqueness, proving uniqueness. ∎

The theorem does not say that every germ extends to every simply connected domain. The germ of \(1/(1-z)\) at zero cannot be continued through \(z=1\), even though the plane is simply connected. The hypothesis of continuation along every path fails. Nor does it say that continuation on a multiply connected domain must be multivalued: \(1/z\) itself is single-valued on the punctured plane. Simple connectedness is a sufficient condition eliminating path dependence once continuation exists.

**Proposition 16.7 (Continuation across a disk boundary point).** Let a Taylor series at \(a\) have finite radius \(R>0\). If its sum extends holomorphically to neighborhoods of every point of the circle \(|z-a|=R\), with agreement on the overlaps with the original disk, then the original radius was not maximal. Consequently at least one point of that circle obstructs direct holomorphic extension.

*Proof.* The boundary circle is compact, so finitely many extension neighborhoods cover it. Their functions agree where needed near the disk by the identity theorem; shrink to disks centered on the circle so overlaps meeting near the circle have connected intersections and meet the original disk. They then glue with the original function. The resulting open neighborhood of the closed radius-\(R\) disk contains a larger closed concentric disk by compactness and positive distance from its complement. Cauchy's Taylor theorem makes the original Taylor series converge on that larger disk, a contradiction. ∎

An obstructing point for one Taylor disk does not mean every point on its boundary is obstructing. For \(1/(1-z)\) centered at zero, only the point one is singular on the unit circle; continuation through a neighborhood of minus one is easy. This is the difference between the geometry of a single centered series and the domain of the continued function.

## Worked examples

### Example 16.8: Continuing a logarithm around zero

Begin with the germ of the real-normalized logarithm at one. Along \(\gamma(t)=e^{2\pi it}\), choose a continuously varying argument \(2\pi t\). Local logarithms with that argument supply a continuation, whose final value is \(2\pi i\), not zero. The derivative remains \(1/z\) throughout. Repeating the loop \(n\) times adds \(2\pi i n\); reversing it subtracts \(2\pi i\).

The punctured plane permits continuation along every path but is not simply connected. The final germ therefore depends on the path class. The function \(e^{\log z}\), in contrast, returns unchanged: exponentiation identifies values differing by \(2\pi i\). This distinguishes continuation of a branch from continuation of a single-valued expression built from that branch.

### Example 16.9: A square root changes sign

Start with the square-root germ taking value one at one. Along the same unit circle choose \(e^{\pi it}\) as its continuing value. At the endpoint the value is minus one. A second loop restores one. The two final germs are genuinely different because their values differ, though their squares agree everywhere.

On the slit plane \(D=\mathbb C\setminus(-\infty,0]\), choosing \(-\pi<\arg z<\pi\) gives the single-valued function \(\sqrt{|z|}e^{i\arg z/2}\). Its local derivatives agree with those of the original germ wherever they overlap. The slit domain prevents the nontrivial loop and makes the branch single-valued.

### Example 16.10: A Taylor circle is not a natural boundary

The series \(\sum_{n\ge0}z^n\) converges for \(|z|<1\), with sum \(1/(1-z)\). At the point \(-1\), expand using \(z=-1+w\):
\[
\frac1{1-z}=\frac1{2-w}=\frac12\sum_{n\ge0}(w/2)^n,
\qquad |w|<2.
\]
This new disk includes points outside the original unit disk. On their overlap the sums agree algebraically, hence by uniqueness they represent continuation of the same germ.

At one no holomorphic extension is possible: if a holomorphic \(F\) there agreed with the rational function nearby, then \((1-z)F(z)=1\) on a punctured neighborhood and by continuity also at one, giving zero equal to one. Thus the finite Taylor radius is explained by a specific singularity, while continuation in other directions remains available.

## Exercises

### Exercise 16.1
<a id="analytic-continuation-ex-1"></a>
Show that two holomorphic germs at a point are equal exactly when all their Taylor coefficients there agree.
<details><summary>Hint 1</summary>
Equal germs give equal derivatives on a common neighborhood.
</details>
<details><summary>Hint 2</summary>
For the converse use the convergent Taylor expansions in a common small disk.
</details>
<details><summary>Solution</summary>
If representatives agree locally, all derivatives at the point agree. Conversely each representative equals its Taylor series in some disk. In the smaller common disk the identical coefficients give identical sums, so the representatives agree there and define the same germ.
</details>

### Exercise 16.2
<a id="analytic-continuation-ex-2"></a>
Compute the final value of the logarithm germ at one after a path making three counterclockwise circuits of zero.
<details><summary>Hint 1</summary>
Lift the argument continuously rather than reducing it to a principal interval.
</details>
<details><summary>Hint 2</summary>
Each circuit increases the argument by \(2\pi\).
</details>
<details><summary>Solution</summary>
The continuous argument increases from zero to \(6\pi\), while the modulus returns to one. The final logarithm value is \(6\pi i\). The final germ differs from the original by that constant, consistent with both having derivative \(1/z\).
</details>

### Exercise 16.3
<a id="analytic-continuation-ex-3"></a>
For the germ \(z^{1/m}\) equal to one at one, determine the effect of one positive loop about zero and the number of loops needed to return, where \(m\ge2\) is an integer.
<details><summary>Hint 1</summary>
Divide the lifted argument by \(m\).
</details>
<details><summary>Hint 2</summary>
The endpoint factor is an \(m\)th root of unity.
</details>
<details><summary>Solution</summary>
One circuit multiplies the value by \(e^{2\pi i/m}\). After \(k\) circuits the factor is \(e^{2\pi ik/m}\), equal to one exactly when \(m\) divides \(k\). Thus the first positive return occurs after \(m\) loops. The same factor multiplies the local germ, not just its base value.
</details>

### Exercise 16.4
<a id="analytic-continuation-ex-4"></a>
Explain why the germ of \(1/z\) at one does not satisfy the monodromy existence hypothesis on the whole plane.
<details><summary>Hint 1</summary>
Choose a path ending at zero.
</details>
<details><summary>Hint 2</summary>
A terminal holomorphic representative would make \(zF(z)=1\) extend to zero.
</details>
<details><summary>Solution</summary>
Continuation toward zero must agree with \(1/z\) on the nonzero portion by the identity theorem. A holomorphic endpoint representative \(F\) would satisfy \(zF(z)=1\) nearby away from zero, and continuity would imply \(0=1\) at zero. Thus continuation along a path reaching zero is impossible.
</details>

### Exercise 16.5
<a id="analytic-continuation-ex-5"></a>
Continue \(1/(1-z)\) from zero by a Taylor expansion centered at \(i\), and give its radius.
<details><summary>Hint 1</summary>
Write \(z=i+w\).
</details>
<details><summary>Hint 2</summary>
Use a geometric series with denominator \(1-i-w\).
</details>
<details><summary>Solution</summary>
The expansion is \((1-i)^{-1}\sum_{n\ge0}[w/(1-i)]^n\), converging for \(|w|<|1-i|=\sqrt2\). It agrees with the rational function and therefore with the original germ on the overlap. The pole at one is exactly at that radius and prevents a larger centered convergence disk.
</details>

### Exercise 16.6
<a id="analytic-continuation-ex-6"></a>
If two global holomorphic functions on a connected domain extend the same germ, prove they are equal.
<details><summary>Hint 1</summary>
The germ gives equality on a nonempty open neighborhood.
</details>
<details><summary>Hint 2</summary>
Apply the identity theorem to their difference.
</details>
<details><summary>Solution</summary>
Their difference is holomorphic and vanishes on an open set, which has accumulation points in the domain. The identity theorem makes the difference identically zero. Connectedness matters because unrelated components could carry independent functions.
</details>

### Exercise 16.7
<a id="analytic-continuation-ex-7"></a>
Explain why overlapping continuation formulas must agree on the relevant connected overlap, not merely take the same value at one point.
<details><summary>Hint 1</summary>
Equal values do not imply equal germs.
</details>
<details><summary>Hint 2</summary>
Compare \(z\) and \(2z\) at zero.
</details>
<details><summary>Solution</summary>
The functions \(z\) and \(2z\) take the same value at zero but have different derivatives and different germs. Continuation requires equality on a neighborhood of a joining point, after which the identity theorem extends equality through a connected overlap. A single matched value supplies no such uniqueness.
</details>

### Exercise 16.8
<a id="analytic-continuation-ex-8"></a>
Show that the germ \(\log z\) normalized at one becomes single-valued on the right half-plane.
<details><summary>Hint 1</summary>
Choose an angle in \((-\pi/2,\pi/2)\).
</details>
<details><summary>Hint 2</summary>
Combine it with \(\log|z|\) and verify derivative \(1/z\).
</details>
<details><summary>Solution</summary>
The function \(L(x+iy)=\tfrac12\log(x^2+y^2)+i\arctan(y/x)\) is defined for \(x>0\). Its partial derivatives satisfy Cauchy–Riemann and give \(L'=1/z\); \(L(1)=0\). It therefore extends the initial germ to the whole right half-plane and supplies its continuation along every path there.
</details>

### Exercise 16.9
<a id="analytic-continuation-ex-9"></a>
Can a germ have two different continuations along the same path under Definition 16.2? Can it have different final germs along different paths?
<details><summary>Hint 1</summary>
Separate fixed-path uniqueness from homotopy invariance.
</details>
<details><summary>Hint 2</summary>
Use the logarithm around a hole for the second question.
</details>
<details><summary>Solution</summary>
Fixed-path uniqueness excludes two continuations along one path. Different paths can give different final germs: the logarithm at one returns to zero along the constant path and to \(2\pi i\) after one positive circuit of zero. Those paths are not homotopic with endpoints fixed in the punctured plane.
</details>

### Exercise 16.10
<a id="analytic-continuation-ex-10"></a>
Explain why the monodromy proof must establish that the endpoint assignment is holomorphic, even after proving path independence.
<details><summary>Hint 1</summary>
A pointwise assignment of values is not automatically regular.
</details>
<details><summary>Hint 2</summary>
Append short straight segments inside a representative disk.
</details>
<details><summary>Solution</summary>
Path independence only makes \(F(b)\) well-defined. To prove regularity, take the endpoint germ's representative on a small disk and append segments from its center. Their continuations are represented by that same holomorphic function. Independence then identifies \(F\) with it throughout a smaller disk. This local identification proves holomorphy everywhere.
</details>

### Exercise 16.11
<a id="analytic-continuation-ex-11"></a>
Give a single-valued holomorphic function on a multiply connected domain, showing simple connectedness is not necessary for every individual germ to extend.
<details><summary>Hint 1</summary>
Use the punctured plane.
</details>
<details><summary>Hint 2</summary>
An integer inverse power needs no branch choice.
</details>
<details><summary>Solution</summary>
The function \(1/z\) is single-valued and holomorphic on the punctured plane, which is not simply connected. Any of its germs extends globally there. Simple connectedness in monodromy is a sufficient condition for all continuable germs to be path-independent, not a necessary condition for a particular function.
</details>

### Exercise 16.12
<a id="analytic-continuation-ex-12"></a>
If a Taylor series has infinite radius of convergence, explain why its germ has continuation along every path in the plane and no monodromy.
<details><summary>Hint 1</summary>
Its sum is already one entire function.
</details>
<details><summary>Hint 2</summary>
Restrict that function to neighborhoods along any path.
</details>
<details><summary>Solution</summary>
The globally convergent power series defines an entire function. Its restrictions provide a continuation along every path, and fixed-path uniqueness forces any other continuation to agree with those restrictions. Thus every return to a base point yields the same germ. Monodromy's hypotheses and conclusion are realized directly.
</details>

## Worked example: two recenterings of one rational germ

Begin with the germ at zero represented by \(F(z)=1/(1-z)\). Its geometric Taylor series converges on \(|z|<1\). To move the center to \(a=-1/2\), write \(z=a+w\) and obtain
\[
 F(z)=\frac{1}{3/2-w}=\frac23\sum_{n=0}^\infty(2w/3)^n,
 \qquad |w|<3/2.
\]
This second disk reaches beyond the first disk in the negative real direction. On their overlap both series equal the same rational expression, so they represent one continuation, with no arbitrary branch choice. A further center can be chosen inside the second disk, and a finite chain of such disks reaches any point of \(\mathbb C\setminus\{1\}\) along a path avoiding one. The formula's pole at one prevents continuation through that point, but no loop around it changes the value of the rational germ.

This example separates two obstructions. A finite Taylor radius may reflect a singularity at one boundary point of a disk, yet recentering can pass through other boundary points. Conversely, a function such as the logarithm can admit continuation along every path of the punctured plane while still returning with a different germ after a loop. Recentring addresses local reach; monodromy addresses path dependence. A picture of overlapping disks can suggest the construction, but the identity theorem on overlaps supplies the actual uniqueness.

## Source of the path-existence hypothesis

Suppose a germ is given by \(1/(1-z)\) at zero and the proposed domain is all of \(\mathbb C\). The straight path from zero to two passes through one. There is no holomorphic representative at one agreeing with the rational function on a punctured neighborhood, because \((1-z)F(z)=1\) there would force \(0=1\) at one by continuity. The monodromy theorem cannot be invoked on the plane despite its simple connectedness: continuation along every path is false. If the domain is changed to \(\mathbb C\setminus\{1\}\), continuation along every path exists and is single-valued, even though that domain is not simply connected. The theorem gives sufficient hypotheses, not an equivalence between topology and continuation.

## What uniqueness does and does not construct

Suppose two chains of holomorphic disks start from the same germ and follow the same fixed path. At each consecutive overlap, the representatives agree near one joining point; the identity theorem makes them agree throughout the relevant connected overlap. Repeating this finite argument forces the same endpoint germ. The proof is a uniqueness argument: it says what happens *if* each chain exists. It cannot extend the germ across a pole. For the rational germ \(1/(1-z)\), a disk centered at one cannot carry a matching holomorphic representative because multiplying by \(1-z\) would give the contradictory equation zero equals one at the center.

This distinction matters in computational recentering. A Taylor polynomial may approximate the current germ accurately inside a smaller disk, but numerical agreement of finitely many coefficients or sampled values does not certify an analytic continuation to a new disk. One needs convergence there and equality on an open overlap. If both convergent series are known to represent the same holomorphic function on that overlap, coefficient uniqueness and the identity theorem then secure the passage. The analytic statement concerns exact functions and open neighborhoods, not an observed pattern in truncated coefficients.

## Sources

Original exposition and exercises. For continuation by germs and the monodromy theorem, see Jiří Lebl's author-hosted [Guide to Cultivating Complex Analysis](https://www.jirka.org/ca/), Chapter 10. The proof here explicitly assumes continuation along every path in the domain; it does not infer existence merely from simple connectedness.

## Summary

A germ records a holomorphic function near one point. Overlapping representatives continue it uniquely along a fixed path. A finite-chain perturbation argument makes endpoint germs invariant under fixed-endpoint homotopies. With continuation along every path, simple connectedness then produces one global holomorphic function. Holes can create branch changes, while genuine singularities can block continuation entirely. The next chapter constructs global functions with prescribed zeros and principal parts on the plane.
