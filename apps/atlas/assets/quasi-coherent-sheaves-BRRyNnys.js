var e=`---
parent_id: book-algebraic-geometry
chapter_id: quasi-coherent-sheaves
title: "Quasi-Coherent Sheaves"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Quasi-Coherent Sheaves

A quasi-coherent sheaf is locally the geometric form of a module. On an affine scheme, that local condition recovers one global module exactly. We prove the equivalence, explain its finiteness and vector-bundle forms, and construct divisor line bundles on smooth curves. The final extension lemma supplies the finite twisted presentations needed for projective cohomology.

Read Chapters 8–11 on module sheaves, affine schemes, gluing and finite morphisms. Rings are arbitrary unless Noetherianity is stated. The projective curve sections use the smooth integral projective curve hypotheses of Chapter 6, including its valuation and principal-divisor degree theorem. The local projectivity criterion used below is proved in Homological Algebra's [module-class chapter](../morphisms-modules-categories/projective-injective-flat-modules.md), with finite presentation and no hidden Noetherian assumption.

## 1. Turn a module into a sheaf

For an $A$-module $M$, assign $M_f$ to $D(f)\\subseteq\\operatorname{Spec}A$. The scalar rings are $A_f$, and the localization maps give compatible restrictions. The denominator-gluing proof of Chapter 9 works verbatim for module elements: choose common denominator powers, multiply the compatibility differences by enough annihilating powers, and use a combination $\\sum c_i g_i^N=1$ on a finite principal cover. Both uniqueness and existence use only module operations. This gives the associated sheaf $\\widetilde M$, with

$$\\Gamma(D(f),\\widetilde M)=M_f,\\qquad
(\\widetilde M)_{\\mathfrak p}=M_{\\mathfrak p}.$$

A module map localizes to a sheaf map. The functor is exact because module localization is exact and exactness of sheaves is detected on stalks. Tensor products satisfy $\\widetilde M\\otimes\\widetilde N\\cong\\widetilde{M\\otimes_A N}$: localization commutes with tensor products, and the induced maps have isomorphic stalks. Finite direct sums and the structure module $\\widetilde A=\\mathcal O$ are included.

A sheaf is quasi-coherent if it is isomorphic to such an associated module sheaf on an affine open neighborhood of every point. This is a local module description, not a claim that sections on arbitrary opens are free or finite. No finiteness requirement belongs to quasi-coherence itself.

## 2. Prove affine reconstruction from global sections

Let $F$ be quasi-coherent on $X=\\operatorname{Spec}A$. Choose a finite principal cover $U_i=D(g_i)$ on which it has associated-module descriptions. Such a cover exists: the common-principal-neighborhood argument of Chapter 10 refines its original affine neighborhoods, and quasi-compactness selects finitely many. Put $M_i=\\Gamma(U_i,F)$.

The sheaf axiom identifies $M=\\Gamma(X,F)$ with the kernel of the difference map

$$\\prod_i M_i\\longrightarrow\\prod_{i,j}\\Gamma(U_i\\cap U_j,F).$$

The products are finite, and the overlap modules are the appropriate localizations of $M_i$. Localizing this kernel at any $f\\in A$ commutes with finite products and kernels because localization is exact. The resulting kernel is exactly the matching-section formula for the cover $D(f)\\cap U_i$ of $D(f)$. Thus

$$M_f\\cong\\Gamma(D(f),F)$$

compatibly with all restrictions. The canonical map $\\widetilde M\\to F$ is therefore an isomorphism on a principal basis, hence a sheaf isomorphism.

A map $\\widetilde M\\to\\widetilde N$ is determined by its global map $M\\to N$. On $D(f)$, linearity forces the element $m/f^r$ to map to the corresponding fraction of its global image. Conversely every module map gives those local maps. Consequently $A$-modules and quasi-coherent sheaves on its affine scheme are equivalent categories, with global sections inverse to association. In particular global sections are exact on quasi-coherent sheaves on an affine, while Chapter 8's counterexample still refutes exactness for unrestricted sheaves on a projective space.

Kernels and cokernels of quasi-coherent sheaf maps remain quasi-coherent on any scheme: on each affine chart the map is a module map and its kernel and cokernel are associated module sheaves by exactness. This argument is local and does not assume Noetherianity. It also identifies the exact sequences meant when using quasi-coherent modules later.

## 3. Finite generation, coherence and local freeness

Finite generation and finite presentation are local module conditions. On an affine scheme, a finite principal cover with finitely generated local modules implies the global module finitely generated. Lift finitely many localized generators to global numerators and take their finite span $N$. The quotient $M/N$ localizes to zero on the cover, so is zero by localization detection. For finite presentation, apply this same argument to the kernel of a finite free presentation after the module generators have been chosen. Its localized kernels are finitely generated, hence so is the global kernel. These proofs make the finite-cover step explicit.

A coherent module sheaf is locally finitely generated and has locally finitely generated kernels for maps from finite free module sheaves. Over a Noetherian ring, finite modules have that property because submodules of finite free modules are finitely generated. Thus on a locally Noetherian scheme coherence is equivalent to local finite generation. Outside that setting the distinction matters: for $A=k[x_1,x_2,\\ldots]$, the cyclic module $A/(x_1,x_2,\\ldots)$ is finite but not coherent, since the kernel of its natural map from $A$ is not finitely generated.

A finite locally free sheaf, or vector bundle in the module-sheaf sense, is locally a finite free structure module. Its rank is locally constant and may differ on open-and-closed components. On an affine scheme it corresponds exactly to a finite projective module. One direction is the prepared finite-projective local-freeness theorem. For the converse the finite-cover argument gives a finitely presented module; its local freeness and that theorem's local projectivity criterion give projectivity. The finite-presentation hypothesis has therefore been verified, rather than omitted from the criterion.

### Worked example 1: finite torsion is not a vector bundle

The module $k[t]/(t^2)$ gives a coherent sheaf on the affine line supported at zero. Its local length there is two and its generic stalk is zero. It is not locally free at zero: a nonzero free module over the domain $k[t]_{(t)}$ cannot be annihilated by $t^2$, while a rank-zero free module would be zero. Its fiber after tensoring with the residue field is only one-dimensional. Length, fiber dimension and bundle rank are therefore distinct numbers with different definitions.

## 4. Pullback and affine direct image

For $A\\to B$, pullback of $\\widetilde M$ is the associated $B$-module sheaf of $B\\otimes_A M$, by the tensor/stalk formula of Chapter 8. It is quasi-coherent. Tensor pullback is right exact; flatness gives full exactness, and the residue-point counterexample already proved the missing hypothesis cannot be suppressed.

For an affine morphism, direct image preserves quasi-coherence. On a target affine $\\operatorname{Spec}A$ its inverse image is $\\operatorname{Spec}B$, and write the source sheaf as $\\widetilde N$. On $D(a)$, its direct-image sections are $N_{\\varphi(a)}$, exactly the localization of the underlying $A$-module $N$. Affine reconstruction identifies that direct image with the associated restriction-of-scalars module. Restriction of scalars is exact, so affine direct image is exact on quasi-coherent sheaves. This proof does not claim exactness on all sheaves of abelian groups.

Closed immersions are affine, completing a useful global consequence of their local quotient definition. Their kernel ideal sheaf is quasi-coherent because on every quotient chart it is the associated ideal module. On an affine target it is therefore $\\widetilde I$ for the global ideal $I$. The closed scheme and $\\operatorname{Spec}(A/I)$ have the same local quotient structure on that cover, so the gluing uniqueness theorem identifies them. Thus the inverse image of any affine target open is the quotient affine scheme. The preceding direct-image result now applies to all closed immersions.

For a closed immersion, direct image is additionally exact on arbitrary abelian sheaves: at a source point its stalk is the original stalk, and outside the closed support a disjoint neighborhood gives zero. Exactness follows stalkwise. This stronger assertion uses the closed support; it is not the earlier incorrect statement that direct images of arbitrary open inclusions preserve all exact sequences.

## 5. Divisors construct line bundles on a smooth curve

Let $C$ be the smooth integral projective curve of Chapter 6, and let $D=\\sum n_P[P]$. Define $\\mathcal O_C(D)$ on an open by rational functions satisfying $v_P(f)+n_P\\ge0$ at all closed points of that open, together with zero. Rational functions are identified on their common dense domains; the generic stalk is the function field. These conditions are local and glue, so define a module sheaf.

Near $P$, choose a uniformizer $\\pi$ and remove the other finitely many support points and any other zeros or poles of that parameter. Then $\\pi^{-n_P}$ generates this module over $\\mathcal O_C$ on the remaining neighborhood, by the valuation-ring criterion. Thus it is a locally free rank-one sheaf, called a line bundle or invertible sheaf. Its global sections are exactly $L(D)$, with the sign convention already proved in Chapter 6. Multiplying local generators gives

$$\\mathcal O(D)\\otimes\\mathcal O(E)\\cong\\mathcal O(D+E),
\\qquad\\mathcal O(D)^\\vee\\cong\\mathcal O(-D).$$

Every line bundle on $C$ arises this way. Choose a nonzero vector $s$ in its one-dimensional generic fiber. On a local frame write $s=f_i e_i$ with $f_i\\in k(C)^\\times$. The orders $v_P(f_i)$ are independent of frame because changing a frame multiplies by a unit. They have finite support: a finite trivializing cover suffices by quasi-compactness, and each rational coefficient has only finitely many zeros and poles. Call the resulting divisor $D$.

Multiplication by $s$ gives $\\mathcal O(D)\\to L$. In a local frame the valuation inequality is exactly that the product coefficient is regular; multiplying the local generator by $s$ gives a unit times the frame. Hence the map is an isomorphism at every stalk and globally. Changing $s$ by a rational function changes $D$ by its principal divisor. Conversely an isomorphism between two divisor sheaves acts on generic fibers by multiplication by some $h\\in k(C)^\\times$; the local lattices force $D-E=\\operatorname{div}(h)$. This proves

$$\\operatorname{Pic}(C)\\cong\\operatorname{Div}(C)/\\{\\text{principal divisors}\\},$$

where the left side is line-bundle isomorphism classes under tensor product. The degree theorem of Chapter 6 therefore defines degree of a line bundle, independent of its rational section.

## 6. Worked examples: the line and a cubic

### Worked example 2: classify the projective-line bundles

On $\\mathbb P^1$, every divisor class is $d[\\infty]$ by Chapter 6. The local frame at infinity is $s^{-d}=t^d$, while the affine-line frame is one. Their coefficient transition is exactly that defining $\\mathcal O(d)$ in Chapter 8. Thus every line bundle on the projective line is one of those twists, and their distinct degrees show none is isomorphic to another. Its global sections have dimension $d+1$ for nonnegative $d$ and zero for negative $d$.

### Worked example 3: compute sections on a cubic

For the nonsingular irreducible short-model cubic of Chapter 6, let $O$ be infinity. A function regular away from $O$ belongs to its affine coordinate ring, so has the unique form $P(x)+yQ(x)$ by division by the monic quadratic equation in $y$. The pole orders of its two nonzero leading terms are $2\\deg P$ and $3+2\\deg Q$. One is even and the other odd, so they cannot cancel. Lower terms have strictly smaller pole orders.

Consequently $L(O)$ has basis one, $L(2O)$ has basis $1,x$, and $L(3O)$ has basis $1,x,y$. These are exact calculations of global line-sheaf sections, using the proved pole orders and affine reconstruction. They are not inferred from an as-yet-unproved genus-one Riemann–Roch formula. Local rank one is compatible with these different global dimensions, and tensor powers change the permitted pole bound.

For any line bundle $L$ and point $P$, there is an exact sheaf sequence

$$0\\to L(-P)\\to L\\to i_*(L_P/\\mathfrak m_PL_P)\\to0.$$

At $P$ it is the uniformizer inclusion of a rank-one local free module into itself and its one-dimensional residue quotient. Away from $P$ it is an isomorphism followed by zero. This proves exactness by stalks. Global sections need not surject onto that last one-dimensional space; Chapter 8 already explains the possible gluing obstruction. This sequence will compute Euler-characteristic changes after cohomology is developed.

## 7. Extend sections after projective twisting

Let $X$ be a closed subscheme of projective space over a Noetherian ring, with standard affine charts $U_i=D_+(X_i)$, and let $F$ be quasi-coherent. A section on $U_i$ extends to a global section after multiplication by a sufficiently high power of $X_i$ and the matching twist. We prove the assertion with the twist included.

On $U_j$, write $a=X_i/X_j$. The given section on $U_i\\cap U_j=D(a)\\subseteq U_j$ is a localization of the chart module. Multiplication by $a^N$ therefore extends it to $U_j$ for sufficiently large $N$. There are finitely many charts, so choose a common $N$ and regard these local extensions as sections of $F(N)$ using frame $X_j^N$. On $U_i$ they equal $X_i^N$ times the original section.

On each chart overlap the two extensions agree after inverting $X_i$, since both came from that section. Their difference is therefore annihilated by a power of the local $X_i$ ratio. The overlap is affine principal in a chart, so its module localization criterion supplies such a power. There are finitely many overlaps, so one common extra power works. Multiplying every local section by this further global $X_i$ power, with the corresponding extra twist, makes them agree on all overlaps. They glue to the required global section. Zero divisors were handled by annihilating powers, rather than by cancellation.

If $F$ is coherent, its modules on the finitely many Noetherian charts have finite generating lists. Extend each generator by this lemma. Each extension supplies a map $\\mathcal O_X(-d_j)\\to F$, and their finite direct sum is surjective because on its original chart the chosen coordinate is invertible and the original generators are recovered. Thus

$$\\bigoplus_{j=1}^r\\mathcal O_X(-d_j)\\twoheadrightarrow F.$$

The kernel is coherent on this Noetherian scheme. Repeating gives as many finite initial steps of a twisted-free resolution as needed; no finite resolution length has been asserted without a homological theorem. Tensoring by a twist is exact because that sheaf is locally free. The next chapter will use finitely many of these steps, together with a proved cohomological degree bound, to establish projective finiteness and Serre vanishing.

## 8. Finite curve direct images are vector bundles

For a finite map from our smooth integral curve to the projective line, the direct image of a line bundle is locally free. Over an affine base chart its module is finite, because the curve algebra is finite and the line bundle module is finite projective over it. It is torsion-free over the PID $k[t]$: a nonzero base polynomial remains nonzero in the curve field and cannot annihilate a locally free module over its domain charts. A finite torsion-free module over that PID is free by the prepared module structure theorem.

Its rank is the function-field degree, since after passing to the fraction field the line bundle has dimension one over the finite curve field. The same calculation works at infinity. This proves the vector-bundle direct-image input used in the later curve duality argument; it does not yet identify the dual bundle or claim a trace formula without the required local different calculation.

## Exercises

### AG12-01. A module stalk

For $M=A/I$, compute the stalks and principal-open sections of its associated sheaf.

**Hint 1.** Localization is exact on the quotient presentation.

**Hint 2.** Localize both the ring and ideal at the same multiplicative set.

<details><summary>Full solution</summary>

On $D(f)$ the module is $A_f/IA_f$, and at a prime it is $A_{\\mathfrak p}/IA_{\\mathfrak p}$. If the ideal becomes the unit ideal, that stalk is zero. These formulas follow by exact localization and are compatible with restrictions, so they identify the associated quotient sheaf. No radicalization occurs; nilpotent quotient information remains present.

</details>

### AG12-02. Affine global sections are exact here

Explain why the projective failure of right exactness does not contradict exactness on affine quasi-coherent sheaves.

**Hint 1.** The affine equivalence is with all modules over one ring.

**Hint 2.** Both the space and the sheaf class are hypotheses of the assertion.

<details><summary>Full solution</summary>

On an affine scheme, every quasi-coherent sheaf is associated to its global module, and association is exact by localization. The inverse global-section functor is therefore exact on those sheaves. Chapter 8's twisted sequence lives on the projective line, so it violates the affine-space hypothesis. It also does not justify right exactness for arbitrary sheaves on an affine; that broader statement has not been proved.

</details>

### AG12-03. Finite generation descends on a finite cover

Describe the numerator construction proving that $M$ is finite if its localizations on a finite principal cover are finite.

**Hint 1.** Lift each finite localized generator to a global numerator.

**Hint 2.** The quotient by all selected numerators is locally zero on the cover.

<details><summary>Full solution</summary>

Choose finitely many numerators for a generating list in every chart, and let $N$ be their global span. Denominator factors are units on the chart, so $N_f=M_f$ there. Thus $(M/N)_f=0$ on the cover. Localization detection makes the quotient zero, proving $M=N$. The finiteness of the cover is exactly what makes the combined numerator list finite.

</details>

### AG12-04. Finite need not be coherent

Justify the noncoherence of the cyclic module over the infinitely generated polynomial ring used in Section 3.

**Hint 1.** Its presentation from a rank-one free module has the ideal of all variables as kernel.

**Hint 2.** A finite list of polynomials involves only finitely many variables.

<details><summary>Full solution</summary>

The kernel is $(x_1,x_2,\\ldots)$. If finitely many members generated it, all their monomials would involve only finitely many variables. Sending those variables to zero while leaving a later variable free would kill every proposed generator but not that later variable. Hence the kernel is not finite, and the cyclic module is not coherent. The module itself still has one generator; Noetherianity was the missing finiteness premise.

</details>

### AG12-05. Torsion versus a bundle

Compare the generic rank, fiber dimension and length at zero of the sheaf associated to $k[t]/(t^2)$.

**Hint 1.** Tensor once with the fraction field and once with the residue field.

**Hint 2.** Length retains both powers below the squared relation.

<details><summary>Full solution</summary>

Its generic stalk is zero, so generic rank is zero. Its residue fiber at zero is $k$, of dimension one. Its local ring module at zero has basis one and $t$, so length two. It is not locally free there, since a positive-rank free module over the local domain has no such torsion and rank zero would be the zero module. Each number measures a different operation.

</details>

### AG12-06. Pull back an affine module

For $A\\to B$, identify the module underlying pullback of $\\widetilde M$ and state its exactness limitation.

**Hint 1.** Use extension of scalars.

**Hint 2.** Tensor is right exact, and flatness is the condition for preserving injections.

<details><summary>Full solution</summary>

The result is $\\widetilde{B\\otimes_A M}$ on the source affine. The stalk formula and localization of tensors give the natural identification. Right exactness is the ordinary tensor theorem. If $B$ is flat it is exact; without flatness the residue-point multiplication example loses injectivity. The inverse-image sheaf and the scalar-extended module pullback should not be identified before this tensor step.

</details>

### AG12-07. Divisor-sheaf signs

If $D$ has coefficient $m$ at a point, give a local generator of $\\mathcal O(D)$ and verify its allowed order bound.

**Hint 1.** A section must have valuation at least minus $m$.

**Hint 2.** A uniformizer has value one.

<details><summary>Full solution</summary>

The generator is $\\pi^{-m}$. Multiplying it by any local regular function gives order at least minus $m$, and every rational function with that bound becomes regular after multiplication by $\\pi^m$. Thus it is precisely the local rank-one lattice. Positive divisor coefficients allow poles; negative ones impose zeros. The sign is the same as the previously defined $L(D)$ global inequality.

</details>

### AG12-08. Recover a divisor from a line bundle

Why is the order of a nonzero rational section independent of the chosen local frame?

**Hint 1.** Two frames differ by a local unit.

**Hint 2.** Units have valuation zero.

<details><summary>Full solution</summary>

Writing the section as $f e=f' e'$ with $e'=u e$ gives $f=f'u$. The unit $u$ has order zero, so the two coefficient orders agree. A finite trivializing cover and finite divisors of the rational coefficients give finite support. These orders therefore define the divisor used to identify the line bundle with $\\mathcal O(D)$, rather than a chart-dependent list.

</details>

### AG12-09. Classify line bundles on the projective line

Combine the divisor correspondence with the degree calculation to identify its Picard group.

**Hint 1.** Every divisor is equivalent to its degree times infinity.

**Hint 2.** Principal divisors have degree zero.

<details><summary>Full solution</summary>

Every line bundle is $\\mathcal O(D)$, and Chapter 6 makes $D$ equivalent to $d[\\infty]$ for its degree. These sheaves are the twists $\\mathcal O(d)$ by their chart transition. Different degrees cannot become principal-equivalent because principal degree is zero. Tensor product adds degrees, so the Picard group is the additive group of integers. The proof includes both existence and uniqueness of the integer invariant.

</details>

### AG12-10. Cubic function spaces

Using the exact pole orders, compute the bases of $L(2O)$ and $L(3O)$ on the nonsingular cubic of Section 6.

**Hint 1.** Write each affine regular function uniquely as $P(x)+yQ(x)$.

**Hint 2.** Its two leading possible pole orders have opposite parity.

<details><summary>Full solution</summary>

The order bound two permits $P$ of degree at most one and forces $Q=0$, giving basis $1,x$. Bound three permits the same $P$ and a constant $Q$, giving basis $1,x,y$. Opposite parity prevents cancellation between the two leading parts, so no omitted higher term can satisfy the bound. These are direct calculations without a genus formula or Riemann–Roch input.

</details>

### AG12-11. A point quotient sequence

Verify the short exact sequence for $L(-P)\\subseteq L$ on a smooth curve and state what global sections alone cannot conclude.

**Hint 1.** At $P$ it is multiplication by a uniformizer in a rank-one module.

**Hint 2.** The residue quotient has dimension one, but local surjectivity need not give global surjectivity.

<details><summary>Full solution</summary>

At $P$ the quotient is $L_P/\\mathfrak m_PL_P$, one-dimensional over $k$, and away from $P$ the two line sheaves agree. Stalkwise exactness proves the sequence. Applying global sections gives an injective left part but need not realize every residue coefficient at $P$. A cohomological obstruction can remain, so the two global section dimensions differ by at most one rather than automatically by exactly one.

</details>

### AG12-12. Why a twist makes sections extend

Identify the two denominator-clearing stages in the projective extension lemma.

**Hint 1.** First extend the section into each individual chart.

**Hint 2.** Then kill the finitely many overlap differences before gluing.

<details><summary>Full solution</summary>

A sufficiently high local coordinate power clears the localization denominator on each chart, giving provisional sections of a common twist. Their differences vanish after inverting the original coordinate, so a further power annihilates each difference on its affine overlap. Finitely many charts and overlaps give common exponents. Multiplication by that additional global coordinate power makes every overlap equality exact, allowing sheaf gluing. This is why merely clearing one displayed fraction is not the complete proof.

</details>

## Closing summary

Associated modules and affine global sections are exact inverse equivalences for quasi-coherent sheaves. Coherence and finite local freeness have their stated finiteness hypotheses, affine direct image is exact on this class, and divisor lattices classify line bundles on smooth curves. Explicit projective twisting extends chart sections and yields finite twisted presentations. These algebraic and local facts prepare the cohomological finiteness and Riemann–Roch proofs without assuming those conclusions in advance.
`;export{e as default};