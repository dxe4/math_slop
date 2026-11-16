var e=`---
parent_id: book-advanced-algebraic-topology
chapter_id: fibrations-long-exact-sequence
title: "Fibrations and the Long Exact Sequence"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Fibrations and the Long Exact Sequence

## Fibrations

A map $p:E \\to B$ is a **fibration** if it satisfies the **homotopy lifting property**: for any space $X$, map $f:X \\to E$, and homotopy $H:X \\times [0,1] \\to B$ with $H(-,0)=p \\circ f$, there exists a lift $\\tilde{H}:X \\times [0,1] \\to E$ with $\\tilde{H}(-,0)=f$ and $p \\circ \\tilde{H}=H$.

Every covering space is a fibration with discrete fiber. More generally, every numerable fiber bundle is a fibration; this includes ordinary bundles over paracompact bases. Without numerability or a comparable hypothesis, local triviality alone does not supply the global homotopy lifting property used here. The **path-loop fibration** $\\Omega X \\to PX \\to X$ has total space $PX=\\{\\gamma:[0,1] \\to X \\mid \\gamma(0)=x_0\\}$, the contractible space of paths based at $x_0$, and fiber $\\Omega X=\\{\\gamma:[0,1] \\to X \\mid \\gamma(0)=\\gamma(1)=x_0\\}$, the loop space. The projection sends a path to its endpoint.

**Long exact sequence of a fibration.** For a fibration $p:E \\to B$ with fiber $F$ and $B$ path-connected, there is a long exact sequence

$$\\cdots \\to \\pi_{k+1}(B) \\to \\pi_k(F) \\to \\pi_k(E) \\to \\pi_k(B) \\to \\pi_{k-1}(F) \\to \\cdots.$$

For the path-loop fibration, contractibility gives $\\pi_k(X) \\cong \\pi_{k-1}(\\Omega X)$ in group degrees $k\\ge2$; the degree-one statement is the usual identification with loop-space components.

## Scope, basepoints and the relative lifting lemma

**L5.** Work in compactly generated Hausdorff spaces, with compact-open mapping spaces followed by compact generation. Choose $e_0\\in E$, put $b_0=p(e_0)$ and take the actual fiber $F=p^{-1}(b_0)$ with that basepoint. Homotopy groups always use these points and their path components. We use the Hurewicz homotopy lifting property in the definition above. A Serre fibration only requires disk lifting; that weaker hypothesis also suffices for the homotopy-group argument, but is not silently substituted for the all-space definition.

Here is the relative lifting fact needed below. For a finite CW pair $(X,A)$, a base homotopy on $X$ lifts with both its initial lift and an already compatible lift on $A$ prescribed. To prove it, attach the cells of $X\\setminus A$ in increasing dimension. On each cell cylinder $D^m\\times I$, the lift is already given on the bottom and side walls. This union is the cubical horn, all boundary faces except the open top. The ordinary lifting property extends a lift from that horn just as it does from the bottom alone, because the two pairs are homeomorphic.

For completeness, the horn homeomorphism is elementary rather than a general extension theorem. In coordinates $[-1,1]^m\\times[-1,1]$, let $r$ be the maximum absolute coordinate of $x\\in[-1,1]^m$. Parameterize bottom plus sides by $(2x,-1)$ when $r\\le1/2$ and by $(x/r,4r-3)$ when $r\\ge1/2$. The formulas agree on their seam and map the boundary of the parameter cube to the top rim. Parameterize top plus sides by reflecting the last coordinate in this formula. These two parameterizations give a compatible homeomorphism of the whole boundary sending the bottom face onto the horn and its complementary boundary disk onto the top face. Extend it through the cube by coning radially from the center. Pull back the prescribed base map and lift on the horn along that homeomorphism, apply ordinary disk homotopy lifting from the bottom, then push the lift forward. The case of a zero-dimensional cell is just path lifting. Cell-by-cell gluing proves the finite relative statement. The same horn argument permits an arbitrary additional parameter space, using the all-space lifting property with that parameter times the disk. No uniqueness of the resulting lift is asserted.

## Relative groups identify the connecting map

Use the cubical model for the relative group $\\pi_n(E,F,e_0)$, for $n\\ge2$. Its representatives map $I^{n-1}\\times I$ to $E$, send the bottom and side walls to $e_0$, and send the top face into $F$. Relative homotopies preserve those conditions. Restriction to the top gives the boundary map to $\\pi_{n-1}(F)$. Concatenation in a free horizontal cube coordinate gives the group law. These groups are abelian for $n\\ge3$, while the degree-two relative group need not be.

Projection gives a homomorphism
$$p_*:\\pi_n(E,F)\\longrightarrow\\pi_n(B),$$
because the entire boundary projects to $b_0$. It is surjective: represent a based sphere map by a cube in $B$, put the constant lift on its bottom and walls, and apply the horn lifting lemma. Its top lies in $F$, so the resulting lift represents a relative preimage.

It is also injective. Suppose a relative representative projects to a based nullhomotopy in $B$. Lift that nullhomotopy relative to the bottom and side walls, using the finite CW-pair lifting lemma and the given initial representative. Throughout, the top still projects to $b_0$ and therefore remains in $F$. At the final time the whole cube maps into $F$. Such a relative representative is null: compress its last cube coordinate toward the bottom, staying inside $F$ and fixing the bottom and walls. Thus the kernel is trivial. Since this is a group homomorphism, trivial kernel proves injectivity. This argument applies in degree two without assuming that its group is abelian.

Consequently the connecting homomorphism is the composite of the inverse relative isomorphism and the top-face restriction. Concretely, lift a based sphere cube with constant bottom and walls; the fiber-valued top face represents its connecting class. Independence of choices follows from the relative isomorphism, not from a false uniqueness claim for fibration lifts. The relative boundary commutes with maps of based pairs, so a commuting based map of fibrations gives a commuting connecting square as well.

## Exactness, with the actual gluing arguments

The relative sequence
$$\\pi_n(F)\\longrightarrow\\pi_n(E)\\longrightarrow\\pi_n(E,F)\\longrightarrow\\pi_{n-1}(F)\\longrightarrow\\pi_{n-1}(E)$$
is exact. Here are the needed geometric reasons. A fiber-valued sphere becomes relatively null by compressing it inside $F$, so its image dies in the relative group. Conversely, if an $E$-sphere is relatively null, its relative nullhomotopy can move the top face in $F$. That swept top face is a based sphere in $F$. The other boundary faces of the homotopy cube are constant or the original sphere. Reading the oriented boundary of that cube gives a based homotopy between the original sphere in $E$ and the included swept fiber sphere, with the orientation chosen consistently. One may shrink a collar of the constant faces to obtain the usual sphere representatives. Thus the kernel at $\\pi_n(E)$ is exactly the fiber image.

Next, a relative class in the image of an absolute $E$-sphere has constant top face, so its boundary vanishes. Conversely, if its top face is nullhomotopic in $F$, attach that nullhomotopy as a collar at the top. Reparameterizing the longer last interval back to the unit interval produces a representative whose entire boundary is constant, hence an absolute $E$-sphere. The original relative class is unchanged because the added collar stays in $F$. This proves exactness at the relative group.

Finally the top face of a relative cube is nullhomotopic in $E$, since the cube itself fills it with its other faces constant. Conversely any based nullhomotopy in $E$ of a fiber sphere is precisely such a relative cube, after choosing its sphere-cube coordinates. This proves exactness at $\\pi_{n-1}(F)$. These three gluing arguments, together with the isomorphism just established, give the long exact sequence of the fibration in every group degree. A basepoint component, rather than the entirety of a disconnected space, is understood whenever a positive homotopy group is taken.

The terminal segment involves pointed sets:
$$\\pi_1(E)\\longrightarrow\\pi_1(B)\\longrightarrow\\pi_0(F)\\longrightarrow\\pi_0(E)\\longrightarrow\\pi_0(B).$$
The connecting operation sends a loop to the component containing the endpoint of a lift starting at $e_0$. It need not be a homomorphism into a group, because $\\pi_0(F)$ is generally only a pointed set. Exactness there means that the preimage of the distinguished component is the preceding image. Additional information is naturally described by the path-transport action, not by calling every component set an abelian group.

One way to justify lift-choice independence at this endpoint is the homotopy fiber. It consists of pairs $(e,\\gamma)$, where $\\gamma$ is a path from $p(e)$ to $b_0$. Lifting all such paths simultaneously is permitted by the all-space lifting property. Send a pair to its lifted endpoint in $F$. The inclusion $F\\to\\operatorname{hofib}(p)$ uses constant paths. The lift of a constant path gives a homotopy on $F$ from the composite to its identity; in the other direction use the lifted point at time $t$ and the remaining path tail, reparameterized to the unit interval. This gives a homotopy from the homotopy-fiber identity to the other composite. Hence inclusion is a homotopy equivalence, without requiring that lifts of constant paths themselves be constant.

For any particular lifted loop, its lifted initial segments and the remaining loop tails give a path in the homotopy fiber from $(e_0,\\gamma)$ to its endpoint paired with a constant path. Different lifts therefore determine the same component of $F$. If that endpoint lies in the component of $e_0$, close the lifted path by a fiber path to obtain a loop in $E$ projecting to the original loop up to a constant terminal portion. Conversely any loop lifted from a loop in $E$ ends in that component. A fiber point belongs to the distinguished $E$-component exactly when a path from $e_0$ to it projects to a loop, proving the next exactness assertion too. If the base is path-connected, path lifting also makes every component of $E$ meet the chosen fiber.

## Worked example 2: the path-loop fibration is explicit

Let $PX$ consist of paths starting at $x_0$ and let the map evaluate their endpoint. For a family of starting paths $\\gamma$ and a base homotopy $b(t)$ beginning at $\\gamma(1)$, define the lifted endpoint path at time $t$ by
$$L_t(s)=\\begin{cases}\\gamma((1+t)s),&0\\le s\\le1/(1+t),\\\\ b((1+t)s-1),&1/(1+t)\\le s\\le1.\\end{cases}$$
The formulas agree at the moving seam because $\\gamma(1)=b(0)$. At time zero this is exactly the original path, and its endpoint at time $t$ is $b(t)$. The adjoint piecewise map is continuous, including at time zero, and the compact-open exponential law supplies continuity of the path family. This proves the full homotopy lifting property, not merely path lifting for individual curves.

The contraction $\\gamma(s)\\mapsto\\gamma((1-t)s)$ contracts $PX$ to the constant path. Thus the group-degree exact sequence identifies $\\pi_n(X)$ with $\\pi_{n-1}(\\Omega X)$ for $n\\ge2$. In degree one, components of the based loop space are precisely based loop homotopy classes; concatenation supplies their group structure. A disconnected loop space is therefore expected when the original space has nontrivial fundamental group. Contractibility of the total path space does not imply that the loop fiber is contractible.

## Worked example 3: the Hopf bundle and its group calculation

Write $S^3\\subset\\mathbb C^2$ and map $(z_0,z_1)$ to its complex line in $\\mathbb{CP}^1$. The fibers are precisely scalar multiples by unit complex numbers. In the chart with $z_0\\ne0$, use coordinate $w=z_1/z_0$ and section $(1,w)/\\sqrt{1+|w|^2}$. Multiplication by the circle then gives a local trivialization; the other chart has the corresponding formula. This proves local bundle structure. We import the standard numerable-bundle lifting theorem stated at the beginning: these bundles over the compact Hausdorff base are Hurewicz fibrations. The identification $\\mathbb{CP}^1\\cong S^2$ follows by the two affine charts or stereographic compactification.

For $j\\ge2$, $\\pi_j(S^1)=0$: the actual covering homotopy theorem lifts a based sphere map and its homotopies to the contractible universal cover $\\mathbb R$. The exact sequence therefore identifies $\\pi_j(S^3)$ with $\\pi_j(S^2)$ for $j\\ge3$. In degree three, the identification $\\pi_3(S^3)\\cong\\mathbb Z$ uses the degree theorem proved in the sphere chapter from its explicit homotopy-excision input. Hence the Hopf map generates $\\pi_3(S^2)$ after choosing orientations. In degree two the sequence instead gives $\\pi_2(S^2)\\cong\\pi_1(S^1)\\cong\\mathbb Z$, because $\\pi_2(S^3)$ and $\\pi_1(S^3)$ vanish by the cellular connectivity theorem. These separate degree ranges prevent an invalid substitution of the degree-one group of the circle into the higher-degree argument.

## What the retained Serre example imports

The finite-base cohomological Serre theorem used in the earlier projective-space example is a named additional input, not proved by the homotopy exact sequence. For a fibration of CW type over a finite simply connected CW base, it gives a first-quadrant spectral sequence with coefficients $H^q(F;R)$ and the skeletal filtration of $H^*(E;R)$. Finiteness of the base filtration supplies convergence in the sense of the next chapter. Its multiplicative version and differential derivation law are also imported for the ring computation. Nontrivial monodromy requires the corresponding local coefficient system; a constant coefficient formula cannot simply ignore it.

For that example use the standard CW structure of $\\mathbb{CP}^n$ with one cell in each even dimension from zero to $2n$, in particular its simple connectivity and finite dimension. Its additive cellular cohomology is independently available from that structure. The two-row Serre argument confirms the successive multiplication maps and the ring generator. The old illustrative calculation below is preserved with these inputs stated; it does not derive the general Serre theorem from the group exact sequence or from a blank page of bidegrees.

## Spectral sequences

A **spectral sequence** is a sequence of pages $(E_r,d_r)$ where each $E_r$ is a bigraded module and $d_r:E_r^{p,q} \\to E_r^{p+r,q-r+1}$ is a differential with $d_r^2=0$. The next page is the homology: $E_{r+1}=H(E_r,d_r)$.

Under suitable convergence hypotheses, a spectral sequence **converges** to a graded object associated to a filtration of some target module. The notation $E_2^{p,q} \\Rightarrow H^{p+q}$ means the limiting page $E_\\infty$ gives the successive quotients of a filtration on $H^*$.

**The Leray--Serre spectral sequence.** For a fibration $F \\to E \\to B$ with $B$ simply connected, there is a spectral sequence with

$$E_2^{p,q}=H^p(B;H^q(F;R)) \\Rightarrow H^{p+q}(E;R).$$

This is the primary computational tool for the cohomology of fiber bundles.

## Common errors

**Error: assuming a spectral sequence collapses to the answer.** Even when all differentials vanish, there may be nontrivial **extension problems**: the filtration on the target may not split, so $E_\\infty$ determines the target only up to extensions. For example, two successive quotients both isomorphic to $\\mathbb Z/2$ can assemble as either $\\mathbb Z/2\\oplus\\mathbb Z/2$ or $\\mathbb Z/4$.

**Error: confusing fibrations with fiber bundles.** Numerable fiber bundles are fibrations, but not every fibration is locally trivial. For computations, the Leray--Serre spectral sequence applies directly to fibrations under its stated base and coefficient hypotheses.

**Error: forgetting the simple connectivity hypothesis.** The displayed untwisted Leray–Serre formula requires trivial monodromy on $H^*(F)$, which holds when $B$ is simply connected. In general the theorem uses the monodromy local coefficient system; it does not require the base itself to be simply connected.

## Worked example: $H^*(\\mathbb{CP}^n)$ via the fibration $S^1 \\to S^{2n+1} \\to \\mathbb{CP}^n$

The Hopf fibration $S^1 \\to S^{2n+1} \\to \\mathbb{CP}^n$ has fiber $S^1$ and total space $S^{2n+1}$. The Serre spectral sequence has $E_2^{p,q}=H^p(\\mathbb{CP}^n;H^q(S^1;\\mathbb{Z}))$. Since $H^q(S^1)$ is $\\mathbb{Z}$ for $q=0,1$ and 0 otherwise, the $E_2$ page has only two rows.

The total space $S^{2n+1}$ has $H^k=0$ for $0<k<2n+1$. This forces all differentials to be zero except $d_2:E_2^{p,1} \\to E_2^{p+2,0}$, which must be an isomorphism for $p<2n$. Thus $H^p(\\mathbb{CP}^n;\\mathbb{Z}) \\cong \\mathbb{Z}$ for even $p$ between $0$ and $2n$, and 0 otherwise.

The multiplicative structure supplies more than these additive groups. Let $u\\in E_2^{0,1}$ generate $H^1(S^1;\\mathbb Z)$ and put $x=d_2(u)\\in E_2^{2,0}=H^2(\\mathbb{CP}^n;\\mathbb Z)$. The differential is a derivation, so for an even-degree base class $a$,

$$d_2(a\\,u)=a\\,d_2(u)=a\\,x.$$

Since the displayed $d_2$ maps are isomorphisms through total degree $2n$, successive multiplication by $x$ generates every even-degree group. The finite dimension of $\\mathbb{CP}^n$ gives $x^{n+1}=0$. Therefore the ring, not only its additive groups, is

$$H^*(\\mathbb{CP}^n;\\mathbb Z)\\cong\\mathbb Z[x]/(x^{n+1}),\\qquad |x|=2.$$

## Practice exercises

### Exercise 12.1

Compute $\\pi_3(S^2)$ using the Hopf fibration $S^1 \\to S^3 \\to S^2$.

<details><summary>Hint 1</summary>

Use the group-degree exact sequence and the higher homotopy groups of the circle.

</details>

<details><summary>Hint 2</summary>

Use the sphere chapter’s degree theorem identifying the third homotopy group of the three-sphere.

</details>

<details><summary>Full solution</summary>

**Solution.** The long exact sequence of homotopy groups gives $\\cdots \\to \\pi_3(S^1) \\to \\pi_3(S^3) \\to \\pi_3(S^2) \\to \\pi_2(S^1) \\to \\cdots$. Since $\\pi_3(S^1)=\\pi_2(S^1)=0$ and $\\pi_3(S^3)=\\mathbb{Z}$, we get $\\pi_3(S^2) \\cong \\mathbb{Z}$. The Hopf map $S^3 \\to S^2$ generates this group. $\\square$

</details>

### Exercise 12.2

Show that if $F \\to E \\to B$ is a fibration and $B$ is contractible, then $E \\simeq F$.

<details><summary>Hint 1</summary>

Lift a contraction of the base from the total-space identity.

</details>

<details><summary>Hint 2</summary>

The homotopy on the fiber need not be pointwise fixed throughout.

</details>

<details><summary>Full solution</summary>

**Solution.** Choose a contraction of $B$ to $b_0$. Lifting it from $\\operatorname{id}_E$ produces a map $r:E\\to F=p^{-1}(b_0)$ and a homotopy from $\\operatorname{id}_E$ to the composite $E\\xrightarrow{r}F\\hookrightarrow E$. For clarity, let $\\alpha(t)$ be the basepoint track of the chosen contraction. The composite $ri$ is fiber transport along that loop; reverse-path transport is its homotopy inverse, because the forward–reverse concatenation contracts relative endpoints and the parameterized horn lifting argument lifts that retracing homotopy. Thus $ri$ is a homotopy equivalence even without choosing a contraction that fixes the basepoint. Choose a homotopy inverse $s$ of $ri$. Then $r'=sr$ satisfies $r'i\\simeq\\operatorname{id}_F$. Also $i(ri)=iri\\simeq i$ follows from $ir\\simeq\\operatorname{id}_E$; composing with $s$ gives $is\\simeq i$, hence $ir'=isr\\simeq ir\\simeq\\operatorname{id}_E$. This gives the claimed two-sided inverse. Thus the fiber inclusion is a homotopy equivalence. The lift need not fix $F$ pointwise throughout, so it does not automatically give a deformation retraction. $\\square$

</details>

### Exercise 12.3

Prove that $\\pi_k(S^n)=0$ for $k<n$.

<details><summary>Hint 1</summary>

The decisive input is cellular approximation, not repeated loop notation.

</details>

<details><summary>Hint 2</summary>

A sphere below the target sphere dimension sees only its zero skeleton after approximation.

</details>

<details><summary>Full solution</summary>

**Solution.** Use the path-loop fibration $\\Omega S^n \\to PS^n \\to S^n$. The long exact sequence gives $\\pi_k(S^n) \\cong \\pi_{k-1}(\\Omega S^n)$. Iterating, $\\pi_k(S^n) \\cong \\pi_0(\\Omega^k S^n)$. For $k<n$, cellular approximation shows that every map $S^k \\to S^n$ is homotopic to a constant. The loop identities alone do not establish vanishing; cellular approximation is the named decisive input. $\\square$

</details>

### Exercise 12.4

Let $F$ and $B$ have finite-dimensional cohomology in each degree over a field $\\mathbb F$. Explain why the cohomological spectral sequence of the product fibration $F \\times B \\to B$ collapses at $E_2$.

<details><summary>Hint 1</summary>

Compare dimensions in each total degree over the field.

</details>

<details><summary>Hint 2</summary>

A nonzero differential strictly reduces the surviving total dimension.

</details>

<details><summary>Full solution</summary>

**Solution.** Over $\\mathbb F$, K\\"unneth gives

$$H^*(F\\times B;\\mathbb F)\\cong H^*(F;\\mathbb F)\\otimes_{\\mathbb F}H^*(B;\\mathbb F).$$

The $E_2$ page is the same bigraded vector space. Finite dimension in each total degree means any nonzero differential would strictly lower the total dimension available at $E_\\infty$, contradicting the K\\"unneth dimension of the abutment. Hence all differentials vanish. Over a field the resulting filtration splits as vector spaces, though not canonically as a filtered ring. Integral product formulas require Tor terms and are not covered by this argument. $\\square$

</details>

### Exercise 12.5

For the product fibration $F\\times B\\to B$ with its product basepoint, prove that every connecting homomorphism in group degrees vanishes.

<details><summary>Hint 1</summary>

A sphere cube in the base has a lift with constant fiber coordinate.

</details>

<details><summary>Hint 2</summary>

Its lifted top face is constant at the fiber basepoint.

</details>

<details><summary>Full solution</summary>

Given a based cube $b(x,t)$ in the base, lift it as $(f_0,b(x,t))$. Its bottom and walls are constant, and its top lies at $(f_0,b_0)$, so its connecting class is zero. The section $b\\mapsto(f_0,b)$ splits the projection on all based homotopy groups. In positive degrees the product formula identifies the sequence with inclusion and projection of the two factors, consistent with exactness and the zero connecting maps. This splitting is supplied by the product structure, not by exactness alone for an arbitrary fibration.

</details>

### Exercise 12.6

For the covering $p:S^1\\to S^1$, $p(z)=z^m$ with positive integer $m$, describe the terminal connecting map after labeling the fiber over one by residues modulo $m$.

<details><summary>Hint 1</summary>

Lift the loop of winding number $r$ beginning at one.

</details>

<details><summary>Hint 2</summary>

Its lift ends at $\\exp(2\\pi i r/m)$.

</details>

<details><summary>Full solution</summary>

A representative loop $\\exp(2\\pi i rt)$ lifts to $\\exp(2\\pi i rt/m)$. The connecting map therefore sends the integer $r$ to its residue modulo $m$. The preceding homomorphism on fundamental groups is multiplication by $m$, whose image is exactly the preimage of the distinguished residue zero. The fiber is discrete, so each of its points is a component. The identification with a residue group uses the chosen root labels; the general terminal sequence remains a sequence of pointed sets at that position.

</details>

### Exercise 12.7

Prove that a relative cube mapping entirely into $F$ represents zero in $\\pi_n(E,F)$ under the stated cubical convention.

<details><summary>Hint 1</summary>

Compress its last coordinate toward the bottom face.

</details>

<details><summary>Hint 2</summary>

The moving top face is allowed to remain anywhere in $F$.

</details>

<details><summary>Full solution</summary>

For a representative $f(x,t)$ use $f_s(x,t)=f(x,(1-s)t)$. The bottom and side walls remain constant at the basepoint. Because the entire original image is in $F$, the new top face also stays in $F$ for every $s$. At $s=1$ the whole cube is the constant bottom value. This is a valid relative nullhomotopy. Requiring the top face to remain fixed pointwise would define a different, overly restrictive equivalence and would invalidate the injectivity proof above.

</details>

### Exercise 12.8

Let $B$ be path-connected and let $E=B\\times\\{0,1\\}$ project to $B$. Is the connecting map from $\\pi_1(B)$ onto all components of its two-point fiber?

<details><summary>Hint 1</summary>

A continuous path cannot change the discrete coordinate.

</details>

<details><summary>Hint 2</summary>

The total space has two path components too.

</details>

<details><summary>Full solution</summary>

No. A lift starting in the zero sheet remains there, so every loop maps to the distinguished zero component of the fiber. The fiber component one maps to the other component of $E$, outside the kernel of the pointed-set map. Exactness is therefore satisfied. Path-connectedness of the base alone does not imply path-connectedness of the total space or surjectivity of this connecting operation. If the total space is path-connected, the kernel at the fiber component set becomes the whole set and then exactness does give that surjectivity.

</details>

### Exercise 12.9

For a commuting based map of fibrations, prove naturality of the connecting homomorphism without assuming lifts are unique.

<details><summary>Hint 1</summary>

Push a chosen lifted sphere cube forward by the total-space map.

</details>

<details><summary>Hint 2</summary>

The relative-group isomorphism makes the resulting boundary class independent of that lift choice.

</details>

<details><summary>Full solution</summary>

A lifted representative has constant bottom and walls and its top in the source fiber. Applying the based total-space map gives a lifted representative of the image base sphere, with its top equal to the image of the original fiber top. The two connecting composites therefore have representatives with exactly the same fiber map. The relative isomorphism already proves that changing the chosen lift does not change either homotopy class. Thus the square commutes without any pointwise uniqueness property for fibration lifts.

</details>

### Exercise 12.10

A spectral sequence has two surviving successive filtration quotients each isomorphic to $\\mathbb Z/2$, and all differentials vanish. Does that force the target group to be their direct sum?

<details><summary>Hint 1</summary>

Compare an order-four cyclic group with the elementary order-four group.

</details>

<details><summary>Hint 2</summary>

A subgroup of order two gives the required quotient in both examples.

</details>

<details><summary>Full solution</summary>

No. The filtration $0\\subset2\\mathbb Z/4\\subset\\mathbb Z/4$ has both quotients of order two, as does the filtration by one coordinate subgroup of $\\mathbb Z/2\\oplus\\mathbb Z/2$. Their associated graded groups agree, but one total group has an element of order four and the other does not. Collapse supplies the associated graded object; a splitting argument or additional structure is still needed to resolve the extension. Over a field finite vector-space filtrations split as vector spaces, but that does not automatically give a canonical multiplicative splitting.

</details>

## Looking forward

The next chapter constructs finite-filtered spectral sequences with a full page theorem and convergence proof. The later sphere, spectrum, obstruction, characteristic-class, local-system and bordism chapters have distinct hypotheses; none follows merely from the existence of this long exact sequence.
`;export{e as default};