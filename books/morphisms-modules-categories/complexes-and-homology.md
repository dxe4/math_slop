
# Complexes and Homology

A sequence with consecutive composites zero records candidates for exactness. Homology measures the difference between being killed by the next map and being produced by the previous one. Chain maps, homotopies and connecting maps make that measurement functorial and prepare the resolutions used to define derived functors.

Read [module classes](projective-injective-flat-modules.md) and [tensor/Hom](tensor-products-hom.md). R is an associative unital ring and all complexes here are complexes of left R-modules. The grading is homological: differentials lower degree. Cochain notation is introduced separately for injective resolutions. No spectral-sequence construction or abelian-category embedding theorem is assumed.

## 1. Cycles, boundaries and functorial homology

A chain complex C has modules C_n for integers n and maps d_n:C_n→C_(n−1) satisfying d_(n−1)d_n=0. Its cycles are Z_n(C)=ker d_n, and its boundaries B_n(C)=im d_(n+1). The composite equation places boundaries inside cycles, so H_n(C)=Z_n(C)/B_n(C) is defined. The complex is acyclic if every H_n is zero; this means exactness, not that every module is zero.

A chain map f:C→D has components f_n with d_D f_n=f_(n−1)d_C. It sends cycles to cycles by that equation, and boundaries to boundaries because f_n d_C=d_D f_(n+1). Thus it induces H_n(f)[c]=[f_n(c)]. Identities and composites induce the corresponding identities and composites on quotient classes. Homology is therefore a functor from complexes to modules in each degree.

**Worked example 4.1.** For a commutative ring, place multiplication by a in the two-term complex R→R in degrees one and zero. Its homology is the annihilator of a in degree one and R/(a) in degree zero. Over Z with a=n≠0, the first group vanishes and the second is Z/n. The commutativity assumption makes this multiplication a map of the left modules in the stated convention; for a noncommutative ring an arbitrary left multiplication need not be left linear.

An exact additive functor preserves homology. Exactness identifies the transformed kernels and images with the kernels and images of the transformed differentials, then identifies their quotient with the transformed quotient. All these maps are canonical factorisations, so the comparison H_n(FC)≅F(H_nC) is natural. A merely right-exact or left-exact functor need not preserve both steps.

## 2. Chain homotopies

A chain homotopy from g to f is a family h_n:C_n→D_(n+1) such that
$$f_n-g_n=d^D_{n+1}h_n+h_{n-1}d^C_n.$$
For a cycle c, the second term vanishes and the first is a boundary. Hence homotopic maps induce the same homology map.

Homotopy is an equivalence relation: zero gives reflexivity, negation symmetry, and addition transitivity. It is compatible with composition. If f−f′ has homotopy h and g−g′ has homotopy k, expand gf−g′f′ as g(f−f′)+(g−g′)f′. The resulting homotopy is the sum of g composed with h and k composed with f′, with the matching degree components. Thus complexes and chain maps modulo homotopy form a category, the homotopy category.

A homotopy equivalence is a pair of maps whose composites are homotopic to identities. It induces isomorphisms on homology. A quasi-isomorphism means only a chain map inducing isomorphisms on every homology module. The converse implication is not automatic.

A complex is contractible when its identity is homotopic to zero. Its homology vanishes, since identity and zero induce the same maps there. Contractibility includes an actual system of degree-raising maps satisfying dh+hd=id, stronger than acyclicity.

**Worked example 4.2.** The exact sequence 0→Z→Z→Z/2→0, with multiplication by two and reduction, can be viewed as an acyclic complex in degrees two, one and zero. It is not contractible. The degree-zero contraction equation would provide a section from Z/2 back to Z of reduction, impossible because Z has no nonzero two-torsion. Its map to the zero complex is consequently a quasi-isomorphism without being a homotopy equivalence.

## 3. The connecting map of a short exact sequence

Let 0→A→B→C→0 be a short exact sequence of complexes, meaning that every degree sequence is exact and the maps i,p are chain maps.

**Theorem 4.3.** There is a natural long exact sequence
$$\cdots\to H_n(A)\xrightarrow{i_*}H_n(B)\xrightarrow{p_*}H_n(C)
\xrightarrow{\delta}H_{n-1}(A)\to\cdots.$$

*Proof.* Given a cycle c∈C_n, choose a lift b∈B_n. Its differential has zero image in C, so db=i(a) for a unique a∈A_(n−1). Injectivity of i and d²=0 show da=0. Define δ[c]=[a].

Changing b by i(a′) changes a by da′, hence not its class. Changing c by a boundary dc′ permits changing b by db′ for a lift b′ of c′; this does not change db. Together these checks prove representative independence. Choosing sum and scalar multiples of lifts shows the resulting map is R-linear, although a choice of lifts was not required to be linear.

For exactness at H_n(B), suppose p(b)=dc′ for a cycle b. Lift c′ to b′; then b−db′ is i(a) for a cycle a. Thus [b] comes from H_n(A). The reverse containment follows from pi=0.

For exactness at H_n(C), if δ[c]=0, the constructed a equals da′. Then b−i(a′) is a cycle lifting c, placing [c] in the image of p_*. Conversely a cycle lift makes δ zero.

For exactness at H_(n−1)(A), if i(a)=db, then p(b) is a cycle and its connecting class is [a]. Conversely every connecting class has image a boundary in B by construction. These checks cover all positions and prove exactness. Finally a map of short exact sequences sends a chosen lift b to a valid lift in the second sequence and sends its a to the corresponding a. Hence the connecting maps commute with those induced maps, proving naturality. ∎

The construction preserves signs because the differential lowers degree and the equation was db=i(a). A cochain convention or a different sign in a later cone must be carried consistently through its own connecting-map formula.

## 4. Shifts and mapping cones

Define the shift C[1] by C[1]_n=C_(n−1) and differential minus the old differential. Its homology is H_(n−1)(C), since signs do not change kernels or images. The minus sign is needed for the following cone convention.

For a chain map f:C→D, define
$$\operatorname{Cone}(f)_n=D_n\oplus C_{n-1},\qquad
\partial(d,c)=(d_Dd+f(c),-d_Cc).$$
Applying this differential twice gives first component d_Df(c)−f(d_Cc)=0 and second component d_C²c=0. Thus it is a complex. There is a degreewise split short exact sequence
$$0\longrightarrow D\longrightarrow\operatorname{Cone}(f)
\longrightarrow C[1]\longrightarrow0,$$
with inclusion into the first coordinate and projection to the second. The ordinary coordinate splitting need not be a chain splitting.

Its connecting map on homology is f_*: a cycle c in the shifted complex lifts to (0,c), whose differential is (f(c),0). Thus the long exact sequence reads
$$\cdots\to H_n(C)\xrightarrow{f_*}H_n(D)\to H_n(\operatorname{Cone}f)
\to H_{n-1}(C)\xrightarrow{f_*}H_{n-1}(D)\to\cdots.$$
Consequently f is a quasi-isomorphism exactly when its cone is acyclic. If the cone groups vanish, exactness makes both adjacent f_* maps bijective. Conversely bijectivity of those maps makes the intervening cone group zero by exactness.

**Worked example 4.4.** The cone of identity is contractible. Define h_n(x,y)=(0,x) in the next cone degree. Then ∂h(x,y)=(x,−dx), while h∂(x,y)=(0,dx+y). Their sum is (x,y), giving the contraction explicitly. This checks the sign convention and gives an exact homotopy witness rather than only acyclicity from the long exact sequence.

## 5. Boundedness and a free acyclic counterexample

A complex of projectives that is acyclic and zero below some degree is contractible. At its first possible nonzero degree a surjection from the next module onto that module splits, since the target is projective. Its kernel is then a summand of a projective and projective. Continue upward: at each step the cycles are projective and the next surjection onto them splits. These splittings decompose each module into its cycles and the preceding cycles, and define a contraction sending the first component into the chosen next splitting. The equation dh+hd=id follows on those two components.

**Worked example 4.5.** Boundedness cannot be dropped. Let R=k[ε]/(ε²), and take a copy of R in every integer degree, with all differentials multiplication by ε. The kernel and image of that multiplication are both the ideal (ε), so the complex is acyclic. Every term is free. Nevertheless it is not contractible: each R-linear map R→R is multiplication by its value at one, and any expression dh+hd has image in the proper ideal (ε). It cannot equal identity on R. Thus an unbounded acyclic complex of free modules need not have a contraction.

This counterexample specifies the grading range as part of the mathematical object. Truncating it changes the cycles at the new end and destroys acyclicity there. One cannot retain the unbounded exactness calculation while silently replacing it by a bounded complex.

## 6. Resolutions and the next derived calculation

A projective resolution of M is an augmented sequence of projectives P_n for n≥0, with arrows lowering degree, exact when followed by P₀→M→0. Without the augmentation, it is a complex with H₀≅M and higher homology zero. The free-kernel construction in Chapter 2 supplies one for every module.

An injective resolution uses cochain indexing: 0→M→I⁰→I¹→⋯ is exact with differentials increasing degree. Its unaugmented cohomology is M in degree zero and zero in positive degree. It can be converted to homological notation by placing Iⁿ in degree minus n, but the convention must be stated before using signs. The repeated embedding-of-cokernel construction supplies its existence.

For Z/n, the two-term free resolution has multiplication by n from degree one to zero. Tensoring it with Z/n makes the differential zero, so its degree-one homology becomes Z/n, although the original degree-one homology was zero. This new homology measures a failure of tensor exactness and motivates Tor. Defining that invariant requires proving that a different projective resolution gives the same answer; the later comparison theorem supplies precisely that missing independence argument.

Homology commutes with arbitrary set-indexed direct sums of module complexes. A vector in such a sum has only finitely many nonzero coordinates. It is a cycle exactly when each coordinate is a cycle, giving the direct sum of cycle modules. A finite-support family of boundaries has a preimage in the direct sum by choosing a preimage in each of its finitely many nonzero coordinates. Hence the boundary module is also the direct sum of the coordinate boundary modules. Quotienting yields the claimed canonical homology isomorphism. This argument does not impose a uniform degree bound on all summands, and it does not replace a direct sum totalisation by a product totalisation. Those are different complex constructions when infinitely many terms occur in one degree, a distinction needed later for unbounded double complexes.

## 7. Exercises

### HA-04-01 — Homology of a two-term complex

For R=Z/6 and differential multiplication by two from degree one to zero, compute both homology groups.

<details><summary>Hint 1</summary>
Find the kernel and image of that multiplication inside the six residues.
</details>
<details><summary>Hint 2</summary>
There is no incoming differential in degree one.
</details>
<details><summary>Solution</summary>
The degree-one cycles are zero and three, and there are no degree-one boundaries, so H₁ is C₂. The image in degree zero is {0,2,4}; quotienting Z/6 by it gives C₂, so H₀ is C₂ as well. All other degrees vanish. This explicitly separates a differential's kernel from its cokernel even when the two happen to have the same abstract order.
</details>

### HA-04-02 — Maps on boundaries

Prove a chain map sends boundaries to boundaries and explain why this is necessary for its homology map.

<details><summary>Hint 1</summary>
Write a boundary as dc.
</details>
<details><summary>Hint 2</summary>
Use the chain-map equation before passing to quotient classes.
</details>
<details><summary>Solution</summary>
For a boundary d_Cc in degree n, the chain-map equation gives f_n(d_Cc)=d_Df_(n+1)(c), a boundary in D. Thus two cycles differing by a boundary have images differing by a boundary. Together with preservation of cycles, this proves the quotient formula for H_n(f) is well-defined. Preserving cycles alone would not suffice to define a map on their quotient by boundaries.
</details>

### HA-04-03 — Homotopy gives the same map

For homotopic f,g and a cycle c, show their images represent the same homology class.

<details><summary>Hint 1</summary>
Insert dc=0 into the homotopy equation.
</details>
<details><summary>Hint 2</summary>
The remaining difference is an explicit boundary.
</details>
<details><summary>Solution</summary>
The equation gives f(c)−g(c)=d h(c)+h(dc)=d h(c). Therefore their difference lies in the boundary subgroup, making their classes equal. This works for every cycle and degree, so the induced homology maps agree. It does not say the chain maps are literally equal; the homotopy records how their differences become boundaries.
</details>

### HA-04-04 — Connecting-map independence

In the long exact sequence construction, replace a lift b by b+i(a′). Determine the change in the connecting representative.

<details><summary>Hint 1</summary>
Differentiate the new lift.
</details>
<details><summary>Hint 2</summary>
Use that i is a chain map and injective.
</details>
<details><summary>Solution</summary>
The new differential is db+i(da′)=i(a+da′), so the new connecting representative is a+da′. It differs by a boundary in A and hence gives the same homology class. Injectivity makes that representative uniquely identified once db is specified. Together with the separate check for changing the cycle by a boundary, this establishes independence from both choices in the construction.
</details>

### HA-04-05 — A concrete connecting isomorphism

Use the short exact sequence of complexes 0→Z[0]→B→C→0 where B has Z→Z by identity in degrees one and zero, and C is its quotient by the degree-zero copy. Compute the connecting map.

<details><summary>Hint 1</summary>
The quotient C has Z only in degree one.
</details>
<details><summary>Hint 2</summary>
Lift its generator to degree one of B and differentiate.
</details>
<details><summary>Solution</summary>
The degree-one quotient generator lifts to one in B₁. Its differential is one in B₀, identified with the generator of the subcomplex Z[0]. Thus δ:H₁(C)→H₀(Z[0]) is identity under these identifications. The middle complex B is contractible and has zero homology, so the long exact sequence correctly makes this connecting map an isomorphism. Its positive sign follows from the declared lifting convention.
</details>

### HA-04-06 — Cone signs

Verify the square of the cone differential is zero, and identify where the chain-map condition is used.

<details><summary>Hint 1</summary>
Apply the differential twice to (d,c).
</details>
<details><summary>Hint 2</summary>
The two mixed terms need opposite signs.
</details>
<details><summary>Solution</summary>
The second application has first component d_D²d+d_Df(c)−f(d_Cc) and second component d_C²c. The squared differentials vanish by the complex axioms, while d_Df=f d_C cancels the mixed terms. Without the minus sign in the second cone coordinate, those terms would add instead. Thus the cone convention is fixed by both the chain-map equation and the chosen shift sign.
</details>

### HA-04-07 — Cone of zero

Describe the cone of the zero map C→D and compute its homology in terms of C and D.

<details><summary>Hint 1</summary>
The mixed f-term in the differential disappears.
</details>
<details><summary>Hint 2</summary>
The result is a direct sum with the shifted complex.
</details>
<details><summary>Solution</summary>
The cone is D⊕C[1] as a complex, with differential acting separately as d_D and minus d_C. Kernels and images decompose componentwise, so its degree-n homology is H_n(D)⊕H_(n−1)(C). This is an actual direct-sum decomposition of complexes in this zero-map case. For a nonzero f, the mixed term can prevent such a decomposition even though the underlying degree modules still have that direct-sum form.
</details>

### HA-04-08 — Homotopic cone maps

If f−g=dh+hd, verify that (d,c)↦(d+h(c),c) defines a chain isomorphism Cone(f)→Cone(g), with the appropriate shifted degree on h.

<details><summary>Hint 1</summary>
For c∈C_(n−1), use h_(n−1)(c)∈D_n.
</details>
<details><summary>Hint 2</summary>
Compare the first coordinates after applying each differential.
</details>
<details><summary>Solution</summary>
The two first coordinates are d_Dd+d_Dh(c)+g(c) and d_Dd+f(c)−h(d_Cc). Their equality is exactly f−g=d_Dh+h d_C. The second coordinate is minus d_Cc in both routes. Thus the map is a chain map. Replacing h by minus h gives its inverse on the degreewise direct sums. Hence homotopic maps have isomorphic cones with these specified comparison arrows.
</details>

### HA-04-09 — Acyclic does not imply zero

Give an acyclic nonzero complex, then explain why that example alone need not disprove contractibility.

<details><summary>Hint 1</summary>
Take identity between two nonzero copies of R.
</details>
<details><summary>Hint 2</summary>
That two-term complex has an explicit contraction.
</details>
<details><summary>Solution</summary>
The complex R→R by identity has zero kernel and zero cokernel, hence is acyclic while its terms are nonzero. It is nevertheless contractible: the reverse identity in the one possible degree gives dh+hd=id. Thus nonzero terms separate acyclicity from the zero complex but do not separate it from contractibility. The nonsplit integer sequence or the unbounded dual-number complex supplies the stronger distinction.
</details>

### HA-04-10 — Unbounded free complex

For the dual-number example, prove that no contraction exists even if its degree-raising multipliers vary with degree.

<details><summary>Hint 1</summary>
Every module map R→R is multiplication by some element in this commutative ring.
</details>
<details><summary>Hint 2</summary>
Both terms of dh+hd still land in the same proper ideal.
</details>
<details><summary>Solution</summary>
Let the multiplier in degree n be b_n. The contraction equation at that degree would require εb_n+b_(n−1)ε=1. Its left side lies in (ε) for any two chosen multipliers, while one does not belong to that ideal. This contradiction applies degree by degree and is unaffected by varying the choices. The acyclicity proof remains valid because kernel and image of ε both equal (ε), so the obstruction is specifically to a contraction.
</details>

### HA-04-11 — Exact functors and homology

State the two submodule constructions that an exact functor must preserve to commute with homology, and explain the quotient step.

<details><summary>Hint 1</summary>
Homology is cycles modulo boundaries.
</details>
<details><summary>Hint 2</summary>
Use the exact sequences defining the differential's kernel, image and their quotient.
</details>
<details><summary>Solution</summary>
Exactness identifies the transformed cycle kernel with the cycle kernel after applying the functor, and identifies the transformed differential image with the new boundary image. Applying exactness to the short exact sequence from boundaries into cycles onto homology then identifies the quotient with the transformed homology object. A functor preserving only kernels or only cokernels cannot justify all three identifications. This explains the new positive homology appearing when the integer resolution is tensored with Z/n.
</details>

### HA-04-12 — Resolution conventions

For the free resolution of Z/n, specify the nonzero degrees, augmentation and homology before and after tensoring with Z/n.

<details><summary>Hint 1</summary>
The unaugmented complex has Z in degrees one and zero.
</details>
<details><summary>Hint 2</summary>
Multiplication by n becomes zero after tensoring.
</details>
<details><summary>Solution</summary>
The differential from degree one to zero is multiplication by n; the augmentation reduces the degree-zero Z modulo n. The augmented sequence is exact, while the unaugmented homology has H₀=Z/n and H₁=0. Tensoring the unaugmented complex with Z/n gives Z/n in both degrees and zero differential, so both H₀ and H₁ become Z/n. The later derived construction will prove independence from the chosen resolution before naming the degree-one result Tor.
</details>

## 8. Next connection

Complexes now have functorial homology, chain homotopy, connecting maps and signed cones. Abelian categories next separate the categorical exactness axioms from module elements, after which resolution comparison defines Tor and Ext with their independence proofs.
