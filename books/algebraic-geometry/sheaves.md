
# Sheaves

A sheaf records objects on each open set, their restrictions, and the rule for assembling locally compatible data. Its stalks retain what happens near a point, while global sections can have an obstruction invisible on every individual neighborhood. We construct sheafification, prove the stalkwise exactness criterion and exhibit a concrete locally surjective map whose global sections are not surjective.

Read the regular-function constructions of Chapter 2, projective charts of Chapter 3, and the kernel/cokernel language of Homological Algebra's [abelian-category chapter](../morphisms-modules-categories/abelian-categories.md). Sheaves of sets, abelian groups, rings and modules will be distinguished. All spaces can be arbitrary topological spaces in the general definitions; classical algebraic varieties provide the main examples. The scheme chapter will change the underlying point space while using the same constructions.

## 1. Presheaves and the two gluing requirements

A presheaf $F$ assigns an object $F(U)$ to each open set and a restriction $F(U)\to F(V)$ for each inclusion $V\subseteq U$. Identity restrictions are identities, and successive restrictions equal direct restriction. For sets the objects are sets; for abelian groups or rings the restrictions are homomorphisms of that kind. A morphism of presheaves commutes with every restriction.

A sheaf has the following property for every open cover $U=\bigcup U_i$. If sections $s_i\in F(U_i)$ have equal restrictions to every overlap, there is exactly one $s\in F(U)$ restricting to all of them. The uniqueness part is locality: sections equal on a cover are equal. The existence part is gluing. The empty cover forces $F(\varnothing)$ to have one element for sets, and to be the zero group for abelian groups. For ring sheaves the corresponding empty section ring is the zero ring.

Regular functions on open algebraic sets form a sheaf $\mathcal O_X$: agreeing functions glue as functions, and each point retains a local quotient presentation from one member of the cover. Addition and multiplication are pointwise, so this is a sheaf of rings. The sheaf axiom adds information to its ring of global sections. Chapter 2's punctured-plane example already showed that equal global rings need not recover two nonaffine and affine spaces as the same geometry.

### Worked example 1: repair the constant presheaf

Fix an abelian group $M$. The presheaf assigning $M$ to each nonempty open, with identity restrictions, need not be a sheaf. On the disjoint union of two points, choose different values on the two singleton opens. Their overlap is empty, so they are compatible, but no single constant presheaf section has both restrictions. The sheaf of locally constant functions to the discrete group $M$ does glue and is the correct constant sheaf. On an irreducible Zariski space every nonempty open is connected, so such locally constant functions are constant there. The failure concerns the general presheaf construction, not an assertion that every particular space exhibits that disconnected cover.

## 2. Germs and stalks

The stalk $F_x$ is formed from pairs $(U,s)$ with $x\in U$ and $s\in F(U)$, identifying two pairs if their restrictions agree on some smaller neighborhood of $x$. This is the filtered colimit over neighborhoods, and its elements are germs. A germ is zero for an abelian presheaf exactly when its representative becomes zero on some smaller neighborhood. A sheaf section is determined by all its germs: equality of germs gives local equality around every point, then locality gives equality globally.

A sheaf morphism is an isomorphism if and only if all its stalk maps are isomorphisms. One direction follows by taking germs. Conversely, if two source sections have the same image, injectivity on germs makes their germs equal and locality makes the sections equal. For a target section, stalkwise surjectivity gives local preimages near every point. After shrinking, their images equal the given section; on overlaps the preimages have identical germs by injectivity and therefore agree by locality. They glue to the desired inverse image. This also proves that the inverse respects restrictions and the algebraic operations.

### Worked example 2: a germ is not merely a value

On the affine line at zero, the stalk of $\mathcal O$ is $k[t]_{(t)}$. A local quotient has denominator nonzero at zero, giving precisely that localization; principal neighborhoods form a basis, so every germ and every such fraction occur. Its residue map evaluates at zero. The germ of $t$ is nonzero but its value is zero, while $1/(1-t)$ is a valid germ though not a polynomial global section. Thus neither point values nor whole-space sections can be substituted for stalks. The stalk is a local ring, with maximal ideal the germs vanishing at the point.

More generally the affine stalk at a classical point is $A_{\mathfrak m_x}$. The principal-open section theorem gives $A_f$ on each neighborhood $D(f)$, and their directed union over $f(x)\ne0$ is exactly the localization at the complement of the maximal ideal. For reducible reduced sets it can have zero divisors, but its residue field is still $k$ at a classical point.

## 3. Construct sheafification rather than just naming it

Given a presheaf $F$, define $F^{\mathrm{sh}}(U)$ to consist of families $(s_x)_{x\in U}$ with $s_x\in F_x$ such that near each point this family is represented by one actual section of $F$. Explicitly, there is a neighborhood $V$ and $s\in F(V)$ whose germ at every $y\in V$ is the prescribed $s_y$. Restriction forgets family entries outside the smaller open.

These locally represented families form a sheaf. Uniqueness is equality at every entry, and compatible families on a cover combine to a family on the union, with local representability inherited from a cover member. For abelian groups and rings the operations are defined on germs; common local representatives show the result is still locally represented. There is a natural map $F\to F^{\mathrm{sh}}$ sending a section to its family of germs.

This map induces an isomorphism on every stalk. Surjectivity follows because a locally represented family has an original presheaf representative near the selected point. If an original germ maps to zero, its family is zero on a neighborhood; in particular its germ at the selected point was already zero in the original stalk. The same argument applied to differences proves injectivity for groups, and to equal germs proves it for sets. Thus sheafification changes global and local-gluing behavior without changing any stalk.

It has the expected universal property. A presheaf map $F\to G$ with $G$ a sheaf sends local representatives of a family to sections of $G$. On overlaps their germs agree because they came from the same $F$-germ family. Sections of a sheaf are determined by germs, so they agree on those overlaps and glue uniquely. This gives a unique sheaf map $F^{\mathrm{sh}}\to G$ extending the original map. Uniqueness holds because every sheafified section has original representatives locally. This proves the adjunction to inclusion of sheaves, including how its extension is constructed.

## 4. Kernels, cokernels and local exactness

For sheaves of abelian groups, kernels are computed section by section: compatible sections in a pointwise kernel glue in the source, and their images remain zero by locality. A presheaf quotient of the target by the image need not already satisfy gluing. Its sheafification is the cokernel sheaf, by the universal property just proved. Image means the kernel of that cokernel, equivalently the sheafification of the pointwise image.

Stalks of these kernels and cokernels are the corresponding kernels and cokernels of the stalk maps. For a kernel, a germ mapping to zero can be represented in the kernel after shrinking. For a quotient, representatives and the relation of differing by an image are both finite local conditions, so they persist on a common smaller neighborhood. Sheafification preserves stalks, completing the cokernel assertion. The same reasoning shows filtered colimits of abelian groups preserve these finite exactness conditions: an element and a witness of its vanishing can be represented at one sufficiently late stage.

It follows that a sequence of sheaves of abelian groups or modules is exact if and only if every stalk sequence is exact. In particular a map is surjective as a sheaf map precisely when each target section has preimages locally near every point, possibly on a refined cover. It need not have a preimage on the whole original open. This is the meaning of sheaf surjectivity used below.

These constructions make sheaves of abelian groups an abelian category. The canonical coimage-to-image map has isomorphic stalks because ordinary abelian groups do; the stalk isomorphism criterion makes it a sheaf isomorphism. Sheaves of modules over a fixed ring sheaf work in the same way, with module operations checked locally. This argument proves the relevant structure rather than assuming that sectionwise surjectivity survived the gluing requirement.

Global sections preserve kernels and hence are left exact. The reason is concrete: the kernel section on the whole space is exactly a whole-space section whose image is zero. Cokernels and images involve sheafification and local lifting, so a corresponding right-exactness assertion needs a separate theorem and is false in general.

## 5. A line-sheaf construction on the projective line

On $\mathbb P^1$, use $U_0$ with coordinate $t=X_1/X_0$ and $U_1$ with coordinate $s=X_0/X_1$. Define $\mathcal O(d)$ by taking one copy of the regular-function sheaf on each chart and gluing section coefficients by

$$f_1(1/t)=t^{-d}f_0(t)$$

on the overlap. The transition factor is a unit there, and its inverse gives the reverse transition. On any open, compatible local coefficient functions define a section. The ordinary regular-function gluing axiom proves this is a sheaf, locally free of rank one. The integer $d$ labels the transition; the notation does not identify differently twisted sheaves as the same structured object.

A global section is a pair of polynomials satisfying that Laurent equality. If $d\ge0$, this is exactly a polynomial $f_0$ of degree at most $d$, with the second polynomial determined by reversal of coefficients. If $d<0$, the right side has only exponents at least $-d>0$ when nonzero, while the left side has only nonpositive exponents, leaving only zero. In particular

$$\Gamma(\mathbb P^1,\mathcal O(-1))=0,\qquad
\Gamma(\mathbb P^1,\mathcal O)=k.$$

This is a direct chart calculation, independent of any cohomology theorem. Locally both sheaves are copies of $\mathcal O$, while the transition changes their possible global sections.

### Worked example 3: a surjection with no global lift of one

Multiplication by the homogeneous coordinates gives

$$\mathcal O(-1)\oplus\mathcal O(-1)
\xrightarrow{(X_0,X_1)}\mathcal O.$$

On $U_0$ it sends coefficient pairs $(a,b)$ to $a+tb$, so the first component lifts every local function. On $U_1$ it is $(a,b)\mapsto sa+b$, so the second component lifts every local function. These formulas match the transitions and prove surjectivity on stalks.

The induced global map is nevertheless $0\oplus0\to k$, not surjective. In particular the global section one has local lifts that cannot be chosen as a single global pair. Its kernel is $\mathcal O(-2)$, mapped by $(-X_1,X_0)$: on $U_0$ the formula is $h\mapsto(-th,h)$, which parametrizes exactly the kernel of $a+tb$; on $U_1$ it is $h\mapsto(-h,sh)$, matching both kernel and transition. Thus

$$0\to\mathcal O(-2)\to\mathcal O(-1)^2\to\mathcal O\to0$$

is a proved short exact sheaf sequence whose global sections fail right exactness. A later cohomology calculation will identify the resulting obstruction group. Its need is already visible from this actual sequence, rather than from an unexplained appeal to higher functors.

## 6. Direct and inverse images have different constructions

For a continuous map $f:X\to Y$, define $(f_*F)(U)=F(f^{-1}U)$. Inverse images of covers and intersections respect the required set identities, so the sheaf axiom for $F$ proves the direct image is a sheaf. This is a direct image of sheaves, not a direct image assertion about closed sets.

For a sheaf $G$ on $Y$, first assign to an open $V\subseteq X$ the colimit of $G(U)$ over target opens with $V\subseteq f^{-1}U$, using restrictions as the opens shrink. Sheafify this presheaf to obtain $f^{-1}G$. Its stalk at $x$ is canonically $G_{f(x)}$: a local representative near the target point defines an inverse-image germ, and continuity allows its source neighborhood to be restricted into that target neighborhood. These assignments are inverse on germs.

There is an adjunction $f^{-1}\dashv f_*$. A map $G\to f_*F$ sends a target representative on $U$ to a section on $f^{-1}U$, hence supplies a presheaf map on inverse-image representatives, which extends uniquely through sheafification. Conversely a map $f^{-1}G\to F$ is evaluated on the inverse-image representative of each target section to give its direct-image section. The two constructions preserve restrictions and undo one another, proving the adjunction explicitly.

For ring sheaves, a ringed-space morphism additionally specifies $f^{-1}\mathcal O_Y\to\mathcal O_X$. A locally ringed space has local stalk rings and such a morphism must give local homomorphisms on stalks, meaning maximal ideals pull back to maximal ideals. For classical varieties a regular map supplies this structure: pulling back a germ vanishing at the target point yields a germ vanishing at its source point, while a nonvanishing germ remains a local unit.

For a module sheaf $M$, the module pullback is

$$f^*M=\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}M,$$

with tensor products sheafified from local tensors. Its stalk is the corresponding tensor product of stalk modules. This follows by representing each finite tensor and relation on one common neighborhood; sheafification leaves that stalk unchanged. The formula distinguishes inverse-image sheaves from extension of scalars. A flatness hypothesis is needed when claiming the tensor pullback preserves all exact sequences.

## 7. Worked example: module pullback can lose injectivity

Let the point inclusion $i:\{0\}\to\mathbb A^1$ carry its usual ringed-space map. The inverse-image ring on that point is the stalk $R=k[t]_{(t)}$, while the point's structure ring is its residue field $k=R/(t)$. The difference between inverse image and extension of scalars is therefore visible even on a one-point source.

Multiplication by $t$ gives an injective map $\mathcal O_{\mathbb A^1}\to\mathcal O_{\mathbb A^1}$, because every local ring of the line is a domain and $t$ is nonzero in it. Its cokernel is the skyscraper sheaf at zero with value $k$: at zero the cokernel stalk is $R/(t)$; away from zero, $t$ is a unit and the stalk is zero. The skyscraper assigns $k$ to an open containing zero and zero to other opens, with the evident restrictions, and its sheaf axiom follows directly by gluing the unique value at that point.

Pullback to the point sends each structure module to $k$ and sends multiplication by $t$ to the zero map, since $t$ has residue zero. Thus an originally injective sheaf map becomes $k\xrightarrow{0}k$, which is not injective. This is an explicit failure of left exactness for module pullback. Inverse image alone preserved the local module over $R$; tensoring with its residue field introduced the failure. The example identifies both the scalar change and the missing flatness hypothesis rather than attributing the phenomenon to an unspecified global obstruction.

## Exercises

### AG08-01. Separate locality and gluing

On a two-point discrete space, explain exactly why the constant presheaf fails to be a sheaf when its value group has two distinct elements.

**Hint 1.** Cover by the two singleton opens.

**Hint 2.** Agreement on the empty overlap imposes no equality between the two chosen elements.

<details><summary>Full solution</summary>

Choose different values on the two singletons. Their restrictions to the empty set agree, but no element of the constant presheaf on the union restricts to those different values, since both restrictions are identity maps. Existence of a glued section fails. Locally constant functions repair the problem by permitting a separate constant on each connected component, and their uniqueness follows from equality of point values.

</details>

### AG08-02. A zero germ

State and prove the criterion for a representative section to have zero germ at a point.

**Hint 1.** Compare its pair with the zero representative in the stalk equivalence relation.

**Hint 2.** The comparison is allowed after shrinking the neighborhood.

<details><summary>Full solution</summary>

The two pairs represent the same germ exactly when their restrictions agree on some smaller neighborhood containing the point. For the zero pair this says the section restricts to zero there. It need not have been zero on the full original open. This local witness is what turns stalkwise kernel membership into an actual kernel section after restriction.

</details>

### AG08-03. Germ versus residue value

In the stalk of the affine line at zero, compare the germ of $t$, its residue value and its inverse.

**Hint 1.** The stalk is $k[t]_{(t)}$.

**Hint 2.** Units are exactly fractions with nonzero value at zero.

<details><summary>Full solution</summary>

The germ of $t$ is nonzero in this domain, but its residue is zero. It belongs to the maximal ideal and has no inverse in the stalk, although it is invertible on the punctured open. Thus evaluating a germ forgets local information, and inverting a function changes the domain. The germ-to-value map is the residue homomorphism, not an identification of the two rings.

</details>

### AG08-04. Sheafification preserves stalks

Prove surjectivity of $F_x\to F_x^{\mathrm{sh}}$ using the locally represented-family construction.

**Hint 1.** A sheafified section near $x$ has an original representative on a smaller neighborhood.

**Hint 2.** Take its original germ at $x$.

<details><summary>Full solution</summary>

By local representability, a family section has near $x$ the germ family of some $s\in F(V)$. The image of the germ of $s$ is exactly the germ of the given family. Hence the stalk map is onto. If two original germs have the same image, their entries at $x$ agree already in the original stalk, proving injectivity as well. The construction changes gluing without adding new stalk elements.

</details>

### AG08-05. A stalkwise inverse

Explain the gluing step that turns a stalkwise isomorphism of sheaves into a whole-sheaf isomorphism.

**Hint 1.** Stalkwise surjectivity gives local lifts of a target section.

**Hint 2.** Stalkwise injectivity forces any two such lifts to agree on their overlap.

<details><summary>Full solution</summary>

Shrink each local lift until its image is the desired target section. On an overlap the difference maps to zero and has zero stalk everywhere by injectivity; locality makes that difference zero. The lifts therefore glue uniquely. Their images glue to the original section, giving the inverse on each open. Uniqueness ensures compatibility with restrictions and operations, so it is an inverse sheaf morphism.

</details>

### AG08-06. A cokernel is local

Why is the pointwise presheaf quotient sheafified in the construction of a cokernel?

**Hint 1.** A local target class may have no global representative modulo the image on its original open.

**Hint 2.** Use the universal property for maps into a sheaf annihilating the image.

<details><summary>Full solution</summary>

The quotient presheaf has the algebraic cokernel universal property among presheaves but may fail the sheaf gluing axiom. Any map to a sheaf killing the original map factors through this quotient and then uniquely through its sheafification. That gives the cokernel among sheaves. Its stalk is unchanged by sheafification and is the ordinary stalk cokernel, explaining why exactness is stalkwise while whole-open quotient values can differ.

</details>

### AG08-07. Compute a twisted global section space

Using the two-chart transition, compute $\Gamma(\mathbb P^1,\mathcal O(2))$ and $\Gamma(\mathbb P^1,\mathcal O(-2))$.

**Hint 1.** The relation is $f_1(1/t)=t^{-d}f_0(t)$.

**Hint 2.** Compare the allowed Laurent exponents on both sides.

<details><summary>Full solution</summary>

For $d=2$, $f_0$ can have degrees zero through two and no higher, giving basis $1,t,t^2$ and dimension three. The other chart is determined. For $d=-2$, the right side has exponents at least two if $f_0$ is nonzero, while the left has only nonpositive exponents; hence both vanish. Local rank one does not force a nonzero global section.

</details>

### AG08-08. A local lift of one

Give lifts of one under $(X_0,X_1):\mathcal O(-1)^2\to\mathcal O$ on both standard charts.

**Hint 1.** On the first chart the formula is $a+tb$.

**Hint 2.** On the second it is $sa+b$.

<details><summary>Full solution</summary>

Use coefficient pair $(1,0)$ on $U_0$ and $(0,1)$ on $U_1$. Each maps to one under its local formula. They do not give a global pair because their twisted transition requirements do not match. Indeed the global source is zero, while the target has global section one. This explicitly proves failure of right exactness of global sections without questioning sheaf surjectivity.

</details>

### AG08-09. Verify the kernel twist

Check that $(-X_1,X_0)$ identifies $\mathcal O(-2)$ with the kernel of the preceding map.

**Hint 1.** On $U_0$ solve $a+tb=0$.

**Hint 2.** Compare the resulting generator with the second chart's generator.

<details><summary>Full solution</summary>

The first chart kernel is generated by $(-t,1)$, and the second by $(-1,s)$. Multiplication by the corresponding homogeneous coordinates produces exactly those expressions. Their coefficient relation on the overlap is the $d=-2$ transition, so the local identifications glue. Each is injective with exactly the required image, proving the full short exact sequence rather than just the zero composite.

</details>

### AG08-10. Direct image glues

Prove $f_*F$ is a sheaf for any continuous map and any sheaf $F$.

**Hint 1.** Pull an open cover backward to a cover of its inverse image.

**Hint 2.** Inverse images commute with intersections.

<details><summary>Full solution</summary>

Compatible sections over $f^{-1}U_i$ agree on $f^{-1}(U_i\cap U_j)$. The sheaf axiom of $F$ glues them uniquely over $f^{-1}U$, which is exactly a section of $f_*F$ over $U$. Restrictions are the original restrictions of $F$, so the construction is compatible with every smaller open. Only continuity and the sheaf axiom were used.

</details>

### AG08-11. Inverse image stalk

Describe the two directions of the canonical identification $(f^{-1}G)_x=G_{f(x)}$.

**Hint 1.** A target germ has a representative near $f(x)$.

**Hint 2.** A source-neighborhood inverse-image representative must come from a target open containing its image point.

<details><summary>Full solution</summary>

A target section near $f(x)$ gives an inverse-image section on its inverse image and hence a germ at $x$. Conversely a presheaf representative of an inverse-image germ uses a target open containing $f(x)$, so gives its target germ. Shrinking target or source representatives yields the same equivalence classes, and sheafification preserves the source stalk. These maps are inverse and natural under sheaf morphisms.

</details>

### AG08-12. Inverse image versus module pullback

Explain the extra tensor factor in $f^*M$ and its stalk formula.

**Hint 1.** The inverse-image module initially has scalars in $f^{-1}\mathcal O_Y$.

**Hint 2.** Extension of scalars uses the given map to $\mathcal O_X$.

<details><summary>Full solution</summary>

The sheaf $f^{-1}M$ is a module over the inverse-image ring sheaf, which need not be the source structure ring. Tensoring with $\mathcal O_X$ extends scalars through the ringed-space map. On stalks the result is $\mathcal O_{X,x}\otimes_{\mathcal O_{Y,f(x)}}M_{f(x)}$. Finite tensor representatives and relations can be realized on common neighborhoods, proving the formula. Full exactness would require a flatness condition on that scalar extension.

</details>

## Closing summary

Sheafification is constructed from locally represented germs and preserves stalks. Kernels, cokernels and image sheaves give an abelian category with stalkwise exactness, while the explicit twisted sequence shows why global sections are only left exact. Direct image, inverse image and module pullback have distinct formulas and a proved adjunction. These tools prepare the locally ringed spaces used to define schemes next.
