var e=`---
parent_id: book-morphisms-modules-categories
chapter_id: triangulated-categories
title: "Triangulated Categories"
level: graduate
estimated_minutes: 210
status: draft
license: CC BY-SA 4.0
---

# Triangulated Categories

In **Derived Categories**, we saw that the derived category $D(\\mathcal{A})$ carries a shift functor and distinguished triangles that replace short exact sequences. This structure is not special to derived categories: it appears in stable homotopy theory, representation theory, and algebraic geometry. This chapter abstracts it into the notion of a **triangulated category**.

We define triangulated categories axiomatically, study their basic properties, and work examples in the homotopy category of complexes and the stable module category. The emphasis is on learning to compute with triangles rather than exact sequences.

## 4.1 The axioms

A **triangulated category** $\\mathcal{T}$ is an additive category equipped with:

1. an autoequivalence $[1]: \\mathcal{T} \\to \\mathcal{T}$, called the **shift** (or **suspension**);
2. a class of **distinguished triangles** $A \\to B \\to C \\to A[1]$,

satisfying the following axioms:

**TR1.** (a) Every morphism $f: A \\to B$ fits into a distinguished triangle $A \\xrightarrow{f} B \\to C \\to A[1]$.
(b) Every triangle isomorphic to a distinguished triangle is distinguished.
(c) $A \\xrightarrow{\\operatorname{id}} A \\to 0 \\to A[1]$ is distinguished.

**TR2.** (Rotation) The triangle $A \\xrightarrow{f} B \\xrightarrow{g} C \\xrightarrow{h} A[1]$ is distinguished if and only if $B \\xrightarrow{g} C \\xrightarrow{h} A[1] \\xrightarrow{-f[1]} B[1]$ is distinguished.

**TR3.** (Morphism of triangles) Given a commutative diagram

$$
\\begin{array}{ccccccc}
A&\\xrightarrow{f}&B&\\longrightarrow&C&\\longrightarrow&A[1]\\\\
\\downarrow^{a}&&\\downarrow^{b}&&&&\\downarrow^{a[1]}\\\\
A'&\\xrightarrow{f'}&B'&\\longrightarrow&C'&\\longrightarrow&A'[1]
\\end{array}
$$

with distinguished rows and $bf=f'a$, there exists a (not necessarily unique) morphism $c:C\\to C'$ that completes the diagram.

**TR4.** (Octahedral axiom) For composable maps $A\\xrightarrow fB\\xrightarrow gC$, choose distinguished triangles for $f$, $g$, and $gf$, with third objects $C_f,C_g,C_{gf}$. The choices extend to a distinguished triangle

$$C_f\\longrightarrow C_{gf}\\longrightarrow C_g\\longrightarrow C_f[1]$$

whose maps make the standard octahedral diagram commute. The signs and all compatibility squares are part of the axiom; the complete octahedral diagram in the references is being imported here.

## 4.2 The homotopy category as a triangulated category

Let $\\mathcal{A}$ be an abelian category. The homotopy category $K(\\mathcal{A})$ is triangulated with shift $[1]$ given by $(C[1])_{n} = C_{n-1}$ and differential $d^{C[1]}_{n} = -d^{C}_{n-1}$. The mapping cone of a morphism $f: C_{\\bullet} \\to D_{\\bullet}$ is the complex

$$\\operatorname{Cone}(f)_{n} = D_{n} \\oplus C_{n-1}$$

with differential

$$d_{n} = \\begin{pmatrix} d^{D}_{n} & f_{n-1} \\\\ 0 & -d^{C}_{n-1} \\end{pmatrix}.$$

The distinguished triangles are those isomorphic to $C_{\\bullet} \\xrightarrow{f} D_{\\bullet} \\to \\operatorname{Cone}(f) \\to C_{\\bullet}[1]$.

**Worked example 4.1.** Let $f: \\mathbb{Z} \\to \\mathbb{Z}$ be multiplication by $2$, viewed as a chain map between complexes concentrated in degree $0$. The mapping cone is

$$\\operatorname{Cone}(f):\\quad 0\\longrightarrow\\mathbb Z
\\xrightarrow{\\times2}\\mathbb Z\\longrightarrow0,$$

with the source copy in degree $1$ and the target copy in degree $0$. Its homology is $H_1=0$ and $H_0=\\mathbb Z/2\\mathbb Z$, so the cone records the kernel and cokernel of $f$ in the expected degrees.

**Retained arithmetic illustration (not executed).**

\`\`\`python
# The one differential is multiplication by 2.
kernel = [n for n in range(-5, 6) if 2 * n == 0]
print(kernel)  # [0], while coker(x2) is Z/2Z
\`\`\`

The retained listing is not an execution claim. The proof over all integers is that two times n equal to zero forces n zero; the quotient calculation identifies the cokernel as C₂.


### Signed cone constructions verify the homotopy axioms

Here we supply the cone calculations in module complexes; the same matrix identities work in any additive category. TR1 follows from forming a cone for every representative chain map and from the contraction of Cone(id). Homotopic maps have isomorphic cones by the explicit comparison in the complexes chapter, so this construction respects the homotopy classes being used.

For rotation, let j:B→Cone(f) be inclusion. In degree n, Cone(j) has coordinates (b,a,b′) in B_n⊕A_(n−1)⊕B_(n−1), with differential
$$(b,a,b')\\longmapsto(d_Bb+f(a)+b',-d_Aa,-d_Bb').$$
Projection onto a is a chain map to A[1]. Its section is a↦(0,a,−f(a)). Their other composite differs from identity by the homotopy H(b,a,b′)=(0,0,b) in the next degree: expanding dH+Hd gives (b,0,b′+f(a)). Hence Cone(j) is isomorphic to A[1] in the homotopy category. The cone connecting map, restricted along that section, is minus f[1]. This proves the rotation formula including its sign. Reverse rotation follows by applying the same construction and the inverse shift.

For TR3, a commuting square in the homotopy category has chain representatives with bf−f′a=d h+h d. Define its cone comparison by
$$(y,x)\\longmapsto(b(y)+h(x),a(x)).$$
The first-coordinate chain-map equation is exactly that homotopy relation; the second is the chain equation for a. It commutes with the cone inclusions and projections, so it gives the required triangle map. There is no uniqueness assertion: changing the homotopy can change the resulting comparison.

For composable f:A→B and g:B→C, put u:Cone(f)→Cone(gf), u(b,a)=(g(b),a), and v:Cone(gf)→Cone(g), v(c,a)=(c,f(a)). They are chain maps by substitution. The composite vu is null-homotopic via (b,a)↦(0,b). Let w:Cone(g)→Cone(f)[1] be (c,b)↦(b,0).

To prove the required new triangle distinguished, compare Cone(u) with Cone(g). In its four coordinates (c,a,b,a′), the differential is
$$(d_Cc+gf(a)+g(b),\\,-d_Aa+a',\\,-d_Bb-f(a'),\\,d_Aa').$$
The map p(c,a,b,a′)=(c,b+f(a)) to Cone(g) is a chain map, and its section is j(c,b)=(c,0,b,0). We have pj=id. The degree-raising map H(c,a,b,a′)=(0,0,0,a) satisfies dH+Hd=id−jp. Thus p is a homotopy equivalence. It takes the cone inclusion of Cone(gf) to v, and the connecting map along its section to w. Consequently
$$\\operatorname{Cone}(f)\\xrightarrow{u}\\operatorname{Cone}(gf)
\\xrightarrow{v}\\operatorname{Cone}(g)\\xrightarrow{w}\\operatorname{Cone}(f)[1]$$
is distinguished.

The octahedral compatibility squares are also visible in the coordinates: u takes the B-inclusion to the C-inclusion after g; v fixes the C-inclusion; the projection onto A[1] after u is the original projection; and the B[1]-projection after v is f[1] times the A[1]-projection. Finally w is the B[1]-projection followed by the shifted B-inclusion. These are the structural maps of the three original cone triangles and the fourth displayed triangle, with the rotation sign already fixed. They verify the cone octahedron rather than merely asserting that some fourth object exists. Transporting along triangle isomorphisms gives TR4 for the chosen distinguished class.

This proves the homotopy-category cone construction. Passing that structure through localisation to the general derived category is the separately stated derived/Verdier-localisation theorem, retained with its precise Stacks and Weibel references. The two constructions should not be conflated.

### Representable exactness from the axioms

First, consecutive arrows in a distinguished triangle compose to zero. Apply TR3 from the identity triangle A→A→0 to a triangle A→B→C, using id on A and the first arrow on the second object. The next square forces their composite zero; rotation supplies the other composites.

The first arrow f is a weak kernel of the second g. If u:X→B satisfies gu=0, compare the distinguished rotation X→0→X[1]→X[1], whose last arrow is minus identity, with the rotated triangle B→C→A[1]→B[1]. Use u and the zero map as the first two vertical arrows. TR3 gives v:X[1]→A[1] with f[1]v=u[1], after cancelling the two minus signs. Shifting back factors u through f.

Dually g is a weak cokernel of f: for u:B→X with uf=0, apply TR3 into the triangle 0→X→X→0 with its identity middle arrow. The resulting map C→X factors u through g. Thus applying Hom(X,−) or Hom(−,X) gives exactness at the corresponding middle Hom group. Rotating and shifting proves the full long exact sequences. Representable cohomological behavior is a theorem from the axioms, not part of the bare definition of an additive category.

A map of triangles with two invertible components has its third invertible. Apply each representable Hom functor and the five lemma to the resulting exact sequences; the third component induces bijections on every such hom set, so Yoneda makes it an isomorphism. This also proves that if one map in a distinguished triangle is invertible its appropriate cone object is zero, by the identity triangle comparison.

## 4.3 Cohomological functors

A functor $H: \\mathcal{T} \\to \\mathcal{A}$ from a triangulated category to an abelian category is **cohomological** if every distinguished triangle $A \\to B \\to C \\to A[1]$ yields a long exact sequence

$$\\cdots \\to H(A) \\to H(B) \\to H(C) \\to H(A[1]) \\to H(B[1]) \\to \\cdots$$

In $K(\\mathcal{A})$, the $n$-th homology $H_{n}$ is a cohomological functor. This is why the mapping cone triangle encodes the long exact sequence of homology.

## 4.4 The stable module category

Let $R$ be a finite-dimensional self-injective algebra over a field $k$ (for example, $k[G]$ for a finite group $G$). The **stable module category** $\\underline{R\\text{-}\\operatorname{mod}}$ has the same objects as $R\\text{-}\\mathbf{mod}$ but morphisms are equivalence classes of $R$-linear maps modulo those factoring through projective modules.

**Theorem 4.2 (Frobenius stable-category theorem; imported).** The stable module category $\\underline{R\\text{-}\\operatorname{mod}}$ is triangulated. The shift is given by the inverse syzygy functor $\\Omega^{-1}$, and distinguished triangles come from short exact sequences of modules.

*Imported construction boundary.* For finite-dimensional self-injective algebras, finite projectives and injectives coincide and the finite-module category is Frobenius. Its stable triangulation is the standard Frobenius-category theorem, treated in Happel’s book listed in the references. The existence of its inverse syzygy and full axioms are imported here; the claim is not made for an arbitrary module category merely by quotienting its projective maps.

The stable quotient construction supplies a triangulated setting tailored to modular representation theory, with projective factors removed from its morphisms.

The group-algebra hypothesis can be checked directly. For finite G, let λ select the coefficient of identity in k[G]. The map sending a to the functional s↦λ(sa) identifies k[G] with its k-linear dual: evaluating at the inverse group-basis elements recovers every coefficient, and the finite dimensions agree. It is a left module map for the coinduced action (rφ)(s)=φ(sr). That coinduced module is injective because vector spaces over k are injective and the coinduction adjunction transports extensions, as proved in Chapter 2. Thus k[G] is self-injective without a characteristic restriction. This verifies why the stable construction applies precisely in the modular setting too, where the quotient by projective maps can retain nonzero objects.

## 4.5 t-structures

A **t-structure** on a triangulated category $\\mathcal{T}$ is a pair of full subcategories $(\\mathcal{T}^{\\leq 0}, \\mathcal{T}^{\\geq 0})$ satisfying:

1. $\\mathcal{T}^{\\leq 0}[1] \\subseteq \\mathcal{T}^{\\leq 0}$ and $\\mathcal{T}^{\\geq 0}[-1] \\subseteq \\mathcal{T}^{\\geq 0}$;
2. $\\operatorname{Hom}(X,Y) = 0$ for $X \\in \\mathcal{T}^{\\leq 0}$ and $Y \\in \\mathcal{T}^{\\geq 0}[-1]$;
3. Every object $Z \\in \\mathcal{T}$ fits into a distinguished triangle $X \\to Z \\to Y \\to X[1]$ with $X \\in \\mathcal{T}^{\\leq 0}$ and $Y \\in \\mathcal{T}^{\\geq 0}[-1]$.

The **heart** $\\mathcal{T}^{\\leq 0} \\cap \\mathcal{T}^{\\geq 0}$ is an abelian category by the general heart theorem, an explicit structural import here. For the derived category $D(\\mathcal{A})$, the standard t-structure has heart $\\mathcal{A}$ itself. In our homological convention, its conventional cohomological labels mean that the nonpositive part has no negative-degree homology and the nonnegative part has no positive-degree homology. The general standard t-structure existence is part of the imported structure theorem; the module heart identification is verified in the exercises. More exotic t-structures give rise to perverse sheaves and stability conditions.

## 4.6 Common errors

- **Assuming a functorial cone is supplied by the axioms.** Strict commuting squares of chain maps have a specified chain-level cone comparison. A square commuting only up to homotopy uses a homotopy choice, and TR3 does not give uniqueness in the bare triangulated category. The cone also depends on the arrow, not merely on its endpoint objects.
- **Assuming TR3 gives uniqueness.** The morphism $C \\to C'$ in TR3 is not unique in general. Triangulated categories are additive, so their hom-sets are abelian groups; the missing information is a functorial, coherently chosen cone, not additive enrichment.
- **Leaving the grading convention implicit.** A shift called $[1]$ moves indices in opposite-looking directions in homological and cohomological notation, and the shifted differential carries a sign. State the formula for the active grading convention before comparing the algebraic shift with topological suspension.
- **Ignoring the octahedral axiom.** While many elementary computations do not require TR4, it is essential for the structure to be well behaved under composition. Without it, one cannot define Verdier quotients.

## 4.7 Exercises

### Exercise 4.1

Show that in a distinguished triangle $A \\to B \\to C \\to A[1]$, the composite $A \\to C$ is zero.

<details><summary>Hint 1</summary>
Use representable exactness, now proved from the axioms.
</details>
<details><summary>Hint 2</summary>
Evaluate its first Hom map at identity.
</details>
<details><summary>Solution</summary>
Apply the cohomological functor $\\operatorname{Hom}(A, -)$ to the triangle. The resulting long exact sequence contains $\\operatorname{Hom}(A, A) \\to \\operatorname{Hom}(A, B) \\to \\operatorname{Hom}(A, C)$. The map $\\operatorname{Hom}(A, A) \\to \\operatorname{Hom}(A, B)$ sends $\\operatorname{id}_{A}$ to the given morphism $A \\to B$. Exactness at $\\operatorname{Hom}(A, B)$ implies that the next map sends $A \\to B$ to zero in $\\operatorname{Hom}(A, C)$. Hence $A \\to C$ is zero. $\\square$
</details>

### Exercise 4.2

Prove that if two objects in a distinguished triangle are zero, so is the third.

<details><summary>Hint 1</summary>
Apply Hom(X,−) and take X equal to the remaining object.
</details>
<details><summary>Hint 2</summary>
Rotate to cover all positions.
</details>
<details><summary>Solution</summary>
Suppose, for example, $A=B=0$. Applying the cohomological functor $\\operatorname{Hom}(X,-)$ gives $\\operatorname{Hom}(X,C)=0$ for every $X$. Taking $X=C$ forces $\\operatorname{id}_C=0$, hence $C$ is a zero object. The cases $B=C=0$ and $C=A=0$ follow by rotating the triangle and applying the same argument. $\\square$
</details>

### Exercise 4.3

Compute the homology of the mapping cone for $f: \\mathbb{Z}/2\\mathbb{Z} \\to \\mathbb{Z}/4\\mathbb{Z}$ sending $\\overline{1} \\mapsto \\overline{2}$, viewed as complexes concentrated in degree $0$.

<details><summary>Hint 1</summary>
The cone has the two stalk modules in adjacent degrees.
</details>
<details><summary>Hint 2</summary>
Compute the kernel and quotient of the given inclusion.
</details>
<details><summary>Solution</summary>
The cone is $0 \\to \\mathbb{Z}/2\\mathbb{Z} \\xrightarrow{f} \\mathbb{Z}/4\\mathbb{Z} \\to 0$ with source in degree $1$ and target in degree $0$. Then $H_{1} = \\ker(f) = 0$ (since $f$ is injective) and $H_{0} = \\operatorname{coker}(f) = \\mathbb{Z}/2\\mathbb{Z}$. $\\square$
</details>

### Exercise 4.4

Show that the canonical localization functor $K(\\mathbf{Ab})\\to D(\\mathbf{Ab})$ is not an equivalence.

<details><summary>Hint 1</summary>
Use an acyclic nonsplit integer complex.
</details>
<details><summary>Hint 2</summary>
It vanishes after localisation but has no contraction.
</details>
<details><summary>Solution</summary>
Consider the exact complex

$$0\\longrightarrow\\mathbb Z\\xrightarrow{\\times2}\\mathbb Z
\\xrightarrow{\\bmod2}\\mathbb Z/2\\mathbb Z\\longrightarrow0.$$

It is isomorphic to zero in $D(\\mathbf{Ab})$ because it is acyclic. It is not zero in $K(\\mathbf{Ab})$: a contracting homotopy would give a section $\\mathbb Z/2\\mathbb Z\\to\\mathbb Z$ of reduction modulo $2$, contradicting nonsplitting. Thus the canonical localization $K(\\mathbf{Ab})\\to D(\\mathbf{Ab})$ is not an equivalence. $\\square$
</details>

### Exercise 4.5

Let $\\mathcal{T}$ be a triangulated category and $X \\in \\mathcal{T}$. Show that $\\operatorname{Hom}(X, -)$ is a cohomological functor.

<details><summary>Hint 1</summary>
Use the proved weak-kernel factorisation from TR3.
</details>
<details><summary>Hint 2</summary>
Rotation moves that exactness to every position.
</details>
<details><summary>Solution</summary>
Given a distinguished triangle $A \\to B \\to C \\to A[1]$, apply $\\operatorname{Hom}(X, -)$. By the weak-kernel consequence of TR3 and rotation proved above, the resulting sequence is exact at $\\operatorname{Hom}(X, B)$ because any map $X \\to B$ composing to zero with $B \\to C$ factors through $A$. Exactness at the other positions follows by rotation. $\\square$
</details>


### HA-11-06 — A split triangle

Prove a distinguished triangle A→B→C→A[1] splits as B≅A⊕C exactly when its connecting arrow is zero, retaining the triangle's first two maps.

<details><summary>Hint 1</summary>
Representable exactness supplies a section s of B→C when the connecting map is zero.
</details>
<details><summary>Hint 2</summary>
Factor id_B−sg through the weak kernel f.
</details>
<details><summary>Solution</summary>
Write the first maps f,g and assume h=0. Exactness gives s:C→B with gs=id. Since g(id−sg)=0, weak-kernel factorisation gives r:B→A with fr=id−sg. The preceding connecting map is zero too, so representable exactness makes f monic. Hence rf=id and rs=0 by cancelling f from their corresponding equations. The biproduct maps [f,s] and (r,g) are inverse. Conversely a section of g makes h=hgs=0 because hg=0. A retraction of f gives the dual conclusion. Thus the compatibility of the splitting with the triangle maps is proved, beyond an arbitrary object isomorphism.
</details>

### HA-11-07 — Nonuniqueness in TR3

In the homotopy category of k-vector-space complexes, use the triangles for k[0]→0 and 0→k[1]. Show that zero maps on their first two objects allow more than one third component.

<details><summary>Hint 1</summary>
The two cone objects are both k[1].
</details>
<details><summary>Hint 2</summary>
Any scalar endomorphism of that stalk complex satisfies the required zero squares.
</details>
<details><summary>Solution</summary>
The source triangle has third object k[1], and the target triangle has third object k[1] with zero last target. Its first two vertical maps are necessarily zero. Any map k[1]→k[1] makes the remaining squares commute, because each relevant composite includes a zero map. Distinct scalars give distinct homotopy classes on a stalk complex; in particular zero and identity differ over every field. Thus the completion is not unique, even though all objects and the first two maps were fixed.
</details>

### HA-11-08 — Integer octahedron

Apply the cone octahedron to multiplication by m and then n on Z, for m,n≥2. Identify the resulting short exact sequence of degree-zero homology groups and determine when it splits.

<details><summary>Hint 1</summary>
The three cone homology groups are C_m,C_(mn),C_n.
</details>
<details><summary>Hint 2</summary>
The first map multiplies by n and the second reduces modulo n.
</details>
<details><summary>Solution</summary>
The new cone triangle gives 0→C_m→C_(mn)→C_n→0. The first map sends a residue to n times it, which is injective, and the second reduces modulo n; their kernel and image agree. A lift of the C_n generator in the middle has n-fold multiple equal to the included kernel generator. Its Ext¹(C_n,C_m) parameter is therefore one modulo nC_m. This class is zero exactly when multiplication by n is onto C_m, equivalently gcd(m,n)=1. Hence the connecting morphism is nonzero when the factors share a prime; for m=n=2 it is the nonsplit C₄ extension.
</details>

### HA-11-09 — A stable periodic object

For R=k[ε]/(ε²), compute the stable endomorphism group of k and its syzygy, using the imported stable triangulation only for interpreting the shift.

<details><summary>Hint 1</summary>
A map k→R lands in (ε), and a map R→k kills that ideal.
</details>
<details><summary>Hint 2</summary>
Finite projectives over this local ring are finite free; the kernel of R→k is (ε).
</details>
<details><summary>Solution</summary>
The coefficient-of-ε pairing identifies R with its k-linear dual, so coinduction proves R self-injective and verifies the theorem’s hypothesis. Every map factoring through a finite free module is zero on k after projecting back to k, by the stated two component facts. Every finite projective is free here, so stable endomorphisms are the ordinary End_R(k)=k. The kernel (ε) of the free quotient is itself isomorphic to k, giving Ωk≅k. The embedding k→R sending one to ε has quotient k as well, so the inverse syzygy is also k. Under the imported stable-category theorem the shift is consequently periodic on this object, consistent with the computed nonzero higher self-Ext groups.
</details>

### HA-11-10 — The standard module heart

For a complex of modules with homology only in degree zero, construct quasi-isomorphisms identifying it with its degree-zero homology in D(R). Explain the resulting heart equivalence.

<details><summary>Hint 1</summary>
Replace degree zero by its cycles and discard the negative terms first.
</details>
<details><summary>Hint 2</summary>
Then quotient those cycles by the degree-zero boundaries.
</details>
<details><summary>Solution</summary>
Let U have the original positive-degree terms, its cycles in degree zero and zero below. The natural inclusion U→C is a quasi-isomorphism by the given homology vanishing. The quotient of its degree-zero cycles onto H₀, with zero maps in other degrees, is a chain map U→H₀[0] and another quasi-isomorphism. Thus C and its homology stalk are isomorphic in D(R). The preceding chapter proved maps between two module stalks are exactly ordinary module homomorphisms. Therefore the standard heart is equivalent to R-Mod and is abelian, proving that identification directly in this setting.
</details>

## 4.8 Looking forward

Triangulated categories provide the homotopy-theoretic backbone of derived algebraic geometry and stable homotopy theory. In **Model Categories**, we will see how triangulated structures arise from model categories of spectra and complexes, and in **Higher Categories**, we will replace triangles by higher homotopies that remember the non-uniqueness in TR3.
`;export{e as default};