
# Algebraic Geometry Without False Shortcuts

**Before reading.** Read [Rings and Ideals](../books/commutative-algebra/rings-and-ideals.md), [Prime Ideals and the Spectrum](../books/commutative-algebra/prime-ideals-spectrum.md), [Modules and Exact Sequences](../books/commutative-algebra/modules-exact-sequences.md) and [Abelian Categories](../books/morphisms-modules-categories/abelian-categories.md). These are preparation for the ideas used below.

Algebraic geometry studies polynomial equations by turning geometry into commutative algebra and then recovering geometry locally. Pictures of curves are valuable, but they can hide the base field, multiplicity, nilpotents, singularities, and arithmetic fibers. This orientation builds the first dictionary and marks the boundary between affine varieties and schemes.

Honest prerequisites are rings, ideals, quotient rings, localization, modules, field extensions, and comfort with contravariant functors. Point-set topology helps with sheaves but does not replace commutative algebra. The [abstract-algebra course](#/courses/atlas-abstract-algebra-proof) and [prime-ideal/localization deep dive](prime-ideals-localization.md) are direct repairs.

## 1. Points depend on the field

For a field $k$ and polynomials $S\subseteq k[x₁,\ldots,x_{n}]$, define

$$V(S)=\{a\in k^{n} : f(a)=0 \text{ for every } f\in S\}$$

The same formula produces different point sets over different fields. The equation $x^{2}+y^{2}+1=0$ has no real points, but it has complex points. The polynomial $x^{2}-2$ has no rational roots and two real roots. Algebraic geometry must name its base field.

For $X\subseteq k^{n}$, define the ideal of functions vanishing on it:

$$I(X)=\{f\in k[x₁,\ldots,x_{n}] : f(a)=0 \text{ for every } a\in X\}$$

These operations reverse inclusion: more equations mean fewer points, while more points mean fewer universally vanishing polynomials.

An affine algebraic set has **coordinate ring**

$$k[X]=k[x₁,\ldots,x_{n}]/I(X)$$

Elements are polynomial functions on $X$, with two polynomials identified when their difference vanishes everywhere on $X$. This function ring differs in general from the **equation ring** $k[x_1,\ldots,x_n]/J$ for chosen equations $J$; the latter defines the affine scheme $\operatorname{Spec}(k[x_1,\ldots,x_n]/J)$ introduced below. From Section 2 onward, classical-variety coordinate-ring identifications assume $k$ is algebraically closed unless a different field hypothesis or a scheme-theoretic setting is explicitly stated; comparisons of rational points over named fields retain their stated fields.

## 2. Nullstellensatz, hypotheses included

For any ideal $J$, every polynomial in its radical $\sqrt{J}$ vanishes on $V(J)$, because $f^{m}\in J$ implies $f(a)^{m}=0$. The strong Hilbert Nullstellensatz gives the converse when $k$ is algebraically closed:

$I(V(J))=\sqrt{J}$ for $J\subseteq k[x₁,\ldots,x_{n}]$.

The algebraically closed hypothesis matters. Over $R$, the ideal $(x^{2}+1)$ has empty real zero set, so $I(V(x^{2}+1))=I(\varnothing)=R[x]$, not the radical proper ideal $(x^{2}+1)$.

Consequently, over algebraically closed $k$, affine algebraic sets correspond contravariantly to radical ideals. Irreducible algebraic sets correspond to prime ideals. Closed points correspond to maximal ideals $(x₁-a₁,\ldots,x_{n}-a_{n})$ by the weak Nullstellensatz.

This dictionary already explains why radicalization loses multiplicity. Ideals $(x)$ and $(x^{2})$ define the same set of classical points but different quotient rings. Schemes retain the second object’s nilpotent class of $x$.

## 3. Zariski topology is coarse on purpose

Declare algebraic sets $V(J)$ closed. The identities

$V(\sum J_\alpha)=\cap V(J_\alpha)$ and $V(IJ)=V(I\cap J)=V(I)\cup V(J)$

give a topology. Over an infinite field, every nonempty Zariski-open subset of the affine line is the complement of finitely many points. It is much coarser than the Euclidean topology.

For infinite $k$, the classical point set $A^1(k)$ is irreducible in its Zariski topology and has polynomial-function ring $k[x]$. Over $\mathbf F_2$, the two rational points are individually closed and the function ring is $\mathbf F_2[x]/(x^2-x)\cong\mathbf F_2\times\mathbf F_2$. Separately, the affine scheme $\operatorname{Spec}k[x]$ is irreducible for every field because $k[x]$ is a domain. Irreducibility means that a nonempty space cannot be the union of two proper closed subsets; equivalently, any two nonempty open subsets intersect.

For $xy=0$ in $A^{2}$, the set is the union of the two coordinate axes because

$$V(xy)=V(x)\cup V(y)$$

For every field, the equation ring $A=k[x,y]/(xy)$ defines a scheme with two irreducible components: the images of $(x)$ and $(y)$ are its two minimal primes. The components meet at the singular origin. Under the classical algebraically closed convention, $A$ is also the polynomial-function ring of this point set; that identification need not hold over a finite field. In general, $\operatorname{Spec}R$ is irreducible exactly when its nilradical $\sqrt{(0)}$ is prime; the domain criterion is equivalent only when $R$ is reduced.

## 4. Polynomial maps reverse to ring maps

A morphism of affine algebraic sets $f:X\to Y$ is given by polynomial coordinate functions. It induces a pullback

$f*:k[Y]\to k[X]$, $g\mapsto g∘f$.

Composition reverses: $(g∘f)*=f*∘g*$. Affine geometry is contravariantly equivalent to the appropriate category of finitely generated reduced $k$-algebras when the variety conventions and algebraically closed field are fixed.

**Worked example.** **Worked isomorphism.** The parabola $Y=V(y-x^{2})$ has coordinate ring

$$k[x,y]/(y-x^{2})\simeq k[t]$$

The map $A^{1}\to Y$, $t\mapsto (t,t^{2})$, has inverse given by projecting to $x$. Thus the parabola is isomorphic to the affine line as an algebraic variety, even though its Euclidean embedding bends.

**Nonexample.** A bijective morphism need not be an isomorphism. Over an algebraically closed field $k$, the cusp map $t\mapsto (t^{2},t^{3})$ is a bijection on points onto $y^{2}=x^{3}$ in every characteristic, but its inverse is not regular at the cusp. Coordinate rings reveal the failure: $k[t^{2},t^{3}]$ is a proper subring of $k[t]$.

## 5. Localization is the algebra of zooming in

For $f\in A$, localize to $A_{f}=A[1/f]$, allowing denominators that are powers of $f$. Geometrically this corresponds to the principal open set

$$D(f)=\{p\in \operatorname{Spec} A : f\notin p\}$$

At a prime ideal $p$, the local ring $A_{p}$ inverts every element outside $p$. It records functions defined near the point represented by $p$, and has unique maximal ideal $pA_{p}$.

For the affine line at a $k$-rational point $a$, the local ring $k[x]_{(x-a)}$ consists of fractions $g(x)/h(x)$ with $h(a)\ne0$. This differs from $k[x]_{x-a}=k[x,1/(x-a)]$, which inverts powers of $x-a$ and describes $D(x-a)$, removing the point $a$. The function $1/(x-b)$ is regular near $a$ when $a\ne b$, while $1/(x-a)$ is not. This is an online notation correction.

Local properties translate into local-ring statements. A point on an affine variety is nonsingular when its local ring has the expected regularity; for a hypersurface, the Jacobian criterion applies under appropriate field/perfection hypotheses. For $F=y^{2}-x^{3}$, both partial derivatives vanish at $(0,0)$, exposing the cusp singularity (with characteristic caveats).

## 6. Why prime spectra add points

For a commutative ring $A$, $\operatorname{Spec} A$ is the set of prime ideals with closed sets

$$V(J)=\{p : J\subseteq p\}$$

Maximal ideals often look like classical points, while nonmaximal primes encode generic points of irreducible subspaces. In $\operatorname{Spec} k[x]$, the zero ideal is the generic point of the entire affine line: its closure is all of $\operatorname{Spec} k[x]$.

For $\operatorname{Spec} Z$, points are $(0)$ and the prime ideals $(p)$ for rational primes $p$. It is an arithmetic curve: the closed points correspond to reductions modulo primes, while $(0)$ is generic. This object is not the graph of integers on a number line.

A ring homomorphism $\phi:A\to B$ induces $\operatorname{Spec} B\to \operatorname{Spec} A$ by inverse image of prime ideals. The inverse image of a prime is prime; the inverse image of a maximal ideal need not be maximal. This is one reason schemes use all prime ideals.

## 7. A scheme is a locally ringed space

The topological space $\operatorname{Spec} A$ alone is insufficient. The **structure sheaf** $O$ assigns rings of regular functions to open sets, with restriction maps, and its stalk at $p$ is $A_{p}$. An affine scheme is $(\operatorname{Spec} A,O)$. A scheme is a locally ringed space covered by open subsets isomorphic to affine schemes.

A **sheaf** obeys two principles for an open cover $\{U_{i}\}$:

1. local sections that agree on overlaps glue to a global section;
2. that global section is unique.

A presheaf has restriction maps but may fail gluing. The sheaf condition is local-to-global bookkeeping, not a decorative extra layer.

Morphisms of schemes include a continuous map and a compatible morphism of sheaves that induces local homomorphisms on stalks. A continuous map of spectra alone is not a scheme morphism.

## 8. Nilpotents and infinitesimal directions

Compare $\operatorname{Spec} k[x]/(x)$ and $\operatorname{Spec} k[x]/(x^{2})$. They have the same one-point underlying topological space, because every prime contains the nilpotent class of $x$. Their structure sheaves differ: in the second ring, $x$ is nonzero but $x^{2}=0$.

This nilpotent remembers a first-order thickening. For dual numbers $k[\varepsilon]/(\varepsilon^{2})$, a map into an affine variety based at a point encodes a tangent vector. Substituting $a+\varepsilon v$ into a polynomial yields

$$f(a+\varepsilon v)=f(a)+\varepsilon\cdot df_{a}(v)$$

because higher powers of $\varepsilon$ vanish. Thus infinitesimal algebra recovers differential information without an analytic limit.

Nilpotents are indispensable in deformation theory and intersection multiplicity. Reducing every scheme at the outset discards precisely the data those theories study.

## 9. Projective geometry fixes directions at infinity

Projective $n$-space $P^{n}(k)$ consists of one-dimensional subspaces of $k^{n+1}$, written homogeneous coordinates $[x₀:\ldots:x_{n}]$, not all zero, modulo common nonzero scaling. Polynomial equations must be homogeneous to be well-defined under scaling.

The affine chart $x₀\ne 0$ identifies with $A^{n}$ using coordinates $x_{i}/x₀$. Other charts include directions at infinity. The affine curves $y=mx+b$ with a fixed slope meet the line at infinity at a shared projective point, restoring intersections that escape in affine geometry.

Bézout’s theorem, in a basic plane form, says two projective plane curves over an algebraically closed field with no common component meet in $de$ points counted with intersection multiplicity, where $d,e$ are their degrees. Each phrase is necessary: projective closure, algebraic closure, multiplicity, and absence of a common component.

Projective schemes arise as $\operatorname{Proj}$ of graded rings, not simply as $\operatorname{Spec}$ with an extra point. Line bundles and homogeneous coordinate rings organize projective embeddings.

## 10. Dimension and fibers

Krull dimension is the supremum of lengths of chains of prime ideals. The ring $k[x₁,\ldots,x_{n}]$ has dimension $n$. For a finitely generated domain over a field, dimension agrees with transcendence degree of its fraction field.

A morphism $X\to S$ can be studied fiber by fiber. For $\operatorname{Spec} Z[x]/(x^{2}-2)\to \operatorname{Spec} Z$, the fiber over prime $p$ is obtained by tensoring with $F_{p}$, giving $F_{p}[x]/(x^{2}-2)$. Its factorization pattern changes with $p$; over the generic point it is $Q[x]/(x^{2}-2)$. Arithmetic geometry treats geometry and number theory within one family.

Fiber dimension, flatness, smoothness, and properness govern how families vary. “The fibers look the same in examples” is not a substitute for flatness or smoothness. Properness plays a role analogous to compactness but is defined through a universal mapping property; over complex numbers, proper algebraic varieties have compact analytic spaces, under standard finite-type hypotheses.

## 11. Sheaf cohomology: boundary of this orientation

Global sections can lose exactness: locally solvable data may fail to glue globally. Derived functors of global sections produce sheaf cohomology $H^{i}(X,F)$, measuring these obstructions.

For a projective variety, coherent sheaf cohomology is finite-dimensional over the base field under standard noetherian hypotheses. Line-bundle sections encode maps to projective space and divisors. Čech cohomology can compute sheaf cohomology for suitable covers and acyclicity conditions; without them, a naive cover calculation need not be the derived invariant.

Schemes, sheaves, and cohomology do not follow merely by replacing open balls with Zariski opens. A full course must prove the sheaf construction on $\operatorname{Spec}$, the equivalence between modules and quasi-coherent sheaves on affines, gluing, separatedness, base change, and cohomological tools.

## 12. Worked boundary checks

### A. Same points, different scheme

Why can no point-set invariant distinguish $\operatorname{Spec} k[x]/(x)$ from $\operatorname{Spec} k[x]/(x^{2})$?

**Answer.** Their underlying spaces both have one prime and the same topology. The distinction is in rings of sections: the second contains a nonzero nilpotent. One must use the structure sheaf or a functor sensitive to it.

### B. Reducibility

Distinguish the rational-point set $V_k(xy)\subseteq k^2$ from the affine scheme $\operatorname{Spec}A$ for $A=k[x,y]/(xy)$. For every field identify the scheme's irreducible components; for $k=\mathbf F_2$ identify the point-set components and its ring of polynomial functions.

**Answer.** Every prime containing $xy$ contains $x$ or $y$. The ideals $(x)$ and $(y)$ are prime and incomparable, since their quotients are polynomial rings in one variable, so their images in $A$ are exactly the minimal primes and define the scheme's two irreducible components over every field. For $k=\mathbf F_2$, the rational-point set is $X=\{(0,0),(1,0),(0,1)\}$. Each singleton is closed, so its three irreducible components are these points, not the two axes. Its vanishing ideal is $(xy,x^2-x,y^2-y)$; reduction gives the unique form $a+bx+cy$, whose values on the three points determine $a,b,c$. Evaluation therefore identifies $\mathbf F_2[X]$ with $\mathbf F_2^3$, whereas the equation ring $A$ has only the relation $xy=0$. This distinction does not discard the generic points or nilpotents of a scheme.

### C. Tangent space at a cusp

For $F=y^{2}-x^{3}$ over characteristic not $2$ or $3$, compute the Zariski tangent space at the origin.

**Answer.** The linearized equation is $F_{x}(0,0)u+F_{y}(0,0)v=0$. Both derivatives $-3x^{2}$ and $2y$ vanish there, so every $(u,v)$ satisfies it. The tangent space has dimension two, larger than the curve’s dimension one, certifying singularity. In small characteristics, restate the Jacobian criterion carefully.

### D. Contravariance

The map $f:A^{1}\to A^{1}$, $t\mapsto t^{2}$, induces which ring map?

**Answer.** If $x$ is the coordinate on the target and $t$ on the source, pullback sends $x\mapsto t^{2}$, extending to $k[x]\to k[t]$. Geometry goes source-to-target while functions pull target-to-source.

## Practice checkpoints

<a id="deep-dive-algebraic-geometry-orientation-ex-1"></a>

### Exercise 1

1. Compare \(V(x^2+1)\) over \(\mathbb R\) and over \(\mathbb C\). Which claim
   changes with the base field?

<details>
<summary>Hint 1</summary>

Solve the same polynomial equation separately in the two named base fields.
</details>

<details>
<summary>Hint 2</summary>

A real square cannot be negative; complex roots may exist. State which zero-set claim changes.
</details>

<details>
<summary>Solution</summary>

The real zero set is empty, while the complex zero set has
the two points \(x=\pm i\); equations do not determine a point set until the
field is stated.

</details>

<a id="deep-dive-algebraic-geometry-orientation-ex-2"></a>

### Exercise 2

2. In \(\operatorname{Spec}k[x,y]\), what does the basic open set \(D(x)\)
   mean, and what is its coordinate ring?

<details>
<summary>Hint 1</summary>

A basic open D(x) retains precisely the primes where x does not vanish.
</details>

<details>
<summary>Hint 2</summary>

In the corresponding ring of functions, make x invertible by allowing powers of x in denominators.
</details>

<details>
<summary>Solution</summary>

\(D(x)\) consists of primes not containing \(x\), and its
ring is \(k[x,y]_x\), where powers of \(x\) are invertible.

</details>

### Further exercises

3. List the prime ideals of \(k[\varepsilon]/(\varepsilon^2)\). Why does the
   answer fail to capture the nilpotent direction?
4. Over a field \(k\) of characteristic not \(2\), are \([1:2:3]\) and \([2:4:6]\) different points of projective plane?
   State the restriction on the scaling factor.

**Solutions.**

(3) The only prime
is \((\varepsilon)\), so the underlying topological space is one point; the
structure sheaf retains the nonzero nilpotent. (4) The scalar \(2\) is nonzero in \(k\), so they are the same point
because projective coordinates are identified under multiplication by a
nonzero scalar. Scaling by zero is forbidden because projective coordinates
cannot all vanish.


## Reading route

First master prime ideals, localization, integral dependence, tensor products, and exact sequences. Then study affine schemes and sheaves before projective schemes, divisors, smoothness, and cohomology. Continue toward algebraic curves, intersection theory, moduli, arithmetic geometry, derived algebraic geometry, or birational geometry only with their prerequisites visible. The point is not to make the subject sound easy; it is to make the first difficult steps exact and navigable.
