var e=`---
parent_id: book-algebraic-topology-chains-spaces
chapter_id: the-functorial-bargain
title: "The Functorial Bargain"
level: graduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# The Functorial Bargain

## Why algebraic topology exists

Topology studies spaces up to continuous deformation. Two spaces are homeomorphic when there exists a continuous bijection with continuous inverse. They are **homotopy equivalent** when there are maps $f:X\\to Y$ and $g:Y\\to X$ such that $g\\circ f\\simeq\\operatorname{id}_X$ and $f\\circ g\\simeq\\operatorname{id}_Y$. Homeomorphism is strict; homotopy equivalence is generous. For example, an annulus deformation retracts onto its core circle, so the annulus and circle are homotopy equivalent even though they are not homeomorphic.

The problem is that direct comparison of spaces is hard. Deciding whether two given CW complexes are homotopy equivalent is algorithmically undecidable in general. Algebraic topology escapes this impasse by translating geometric questions into algebraic ones. The translation is never free: information is lost, but what remains is computable and structurally rich.

## Functors: the basic pattern

A **functor** $F$ from topological spaces to some algebraic category assigns to each space $X$ an object $F(X)$ and to each continuous map $f:X \\to Y$ a morphism $F(f):F(X) \\to F(Y)$ such that

$$F(\\operatorname{id}_X)=\\operatorname{id}_{F(X)}, \\qquad F(g \\circ f)=F(g) \\circ F(f).$$

The first condition says the identity map induces the identity morphism; the second says composition is preserved. These two axioms are deceptively powerful. They imply that every commutative diagram of spaces yields a commutative diagram of algebraic objects, and that isomorphisms of spaces induce isomorphisms of invariants.

A **homotopy invariant** functor satisfies the additional property

$$f \\simeq g \\quad \\Longrightarrow \\quad F(f)=F(g).$$

If two maps are homotopic---connected by a continuous family of maps $H:X \\times [0,1] \\to Y$ with $H(-,0)=f$ and $H(-,1)=g$---then they induce the same algebraic map. Consequently, a homotopy equivalence $X \\simeq Y$ induces an isomorphism $F(X) \\cong F(Y)$.

## What functoriality buys you

Functoriality prevents arbitrary choices from contaminating calculations. Consider a retraction $r:X \\to A$ onto a subspace $A \\subseteq X$, so that $r \\circ i = \\operatorname{id}_A$ where $i:A \\to X$ is inclusion. Applying any functor $F$ gives

$$F(r) \\circ F(i) = \\operatorname{id}_{F(A)}.$$

Therefore $F(i)$ is injective and $F(r)$ is surjective in any algebraic category where these notions make sense. If $F(A)$ is nonzero and $F(X)=0$, no such retraction can exist. Taking reduced homology gives the standard proof that there is no retraction from $D^n$ onto $S^{n-1}$ for $n\\ge1$: $\\widetilde H_{n-1}(S^{n-1})\\cong\\mathbb Z$ while every reduced homology group of $D^n$ vanishes, so the induced inclusion cannot be injective.

Similarly, if $X$ deformation retracts onto $A$, then $i$ is a homotopy equivalence, so $F(i)$ is an isomorphism for every homotopy invariant functor. The punctured plane $\\mathbb C\\setminus\\{0\\}$ deformation retracts radially onto $S^1$, so every homotopy invariant of the punctured plane equals that of the circle.

## The invariants of this book

This book develops four main families of invariants, each with distinct strengths and blind spots.

**The fundamental group** $\\pi_1(X,x_0)$ records based loops up to homotopy. It is a group, typically nonabelian, and detects one-dimensional holes. It misses higher-dimensional features: $\\pi_1(S^n)=0$ for $n \\geq 2$, even though $S^n$ is far from contractible.

**Homology** $H_*(X;R)$ linearizes topology. It assigns a graded module over a coefficient ring $R$, is always abelian, and detects holes in every dimension. Its computational accessibility comes at a cost: it cannot distinguish spaces with the same linearized data. The wedge $S^1 \\vee S^1 \\vee S^2$ and the torus $T^2$ have isomorphic homology groups over $\\mathbb{Z}$, yet they are not homotopy equivalent.

**Cohomology** $H^*(X;R)$ is the dual theory, but its real power lies in the **cup product**, which makes $H^*(X;R)$ a graded ring. The ring structure can distinguish spaces that homology groups alone cannot. The torus and the wedge $S^1 \\vee S^1 \\vee S^2$ have isomorphic cohomology groups but non-isomorphic cup products.

**Exact sequences** are not invariants of a single space but organizational tools. A long exact sequence relates the homology of a space, a subspace, and the quotient. It converts geometric constructions---attaching cells, taking suspensions, decomposing into subspaces---into algebraic constraints.

## No invariant is complete

No functor developed in this book is complete for all spaces. Homology deliberately linearizes; the fundamental group retains noncommutativity but only sees one-dimensional loops; cohomology products recover interactions that additive groups miss, yet still fail to detect all distinctions. Higher homotopy groups $\\pi_n(X)$ for $n \\geq 2$ capture more information but are notoriously difficult to compute. The separate Advanced Algebraic Topology readings introduce stable homotopy, generalized cohomology theories, and spectra; they are continuations rather than prerequisites for this core.

The honest attitude is to treat each invariant as a probe. A space is understood not by a single number or group but by the pattern of its values across multiple functors, together with the natural transformations that relate them.

## Common errors

**Error: assuming familiar algebraic invariants imply homeomorphism.** The lens spaces $L(7,1)$ and $L(7,2)$ have isomorphic homology and fundamental group but are not homeomorphic; Reidemeister torsion distinguishes their homeomorphism types. In fact these two lens spaces are homotopy equivalent, so no homotopy-invariant cohomology operation can distinguish them.

**Error: forgetting basepoints.** The fundamental group $\\pi_1(X,x_0)$ depends on the basepoint $x_0$. In a path-connected space, different basepoints yield isomorphic groups, but the isomorphism is not canonical: it depends on a chosen path and is only well-defined up to conjugation. For unbased maps, one must track how basepoints move.

**Error: conflating homotopy equivalence with homeomorphism.** The topologist's sine curve is not path-connected, yet its cone is contractible. Homotopy equivalence is a much coarser relation, and invariants that are only homotopy invariant cannot detect pathologies that homeomorphism would catch.

## Worked example: the circle

Let $S^1 = \\{z \\in \\mathbb{C} : |z|=1\\}$ and consider the covering map $p:\\mathbb{R} \\to S^1$ given by $p(t)=e^{2\\pi i t}$. The real line is contractible, so its homotopy invariants agree with those of a point. Thus its fundamental group and reduced homology vanish, while $H_0(\\mathbb R;\\mathbb Z)\\cong\\mathbb Z$. Yet $S^1$ is not contractible. The covering map is the key to computing its invariants.

For the fundamental group, lift a loop $\\gamma:[0,1] \\to S^1$ based at $1$ to a path $\\tilde{\\gamma}:[0,1] \\to \\mathbb{R}$ starting at $0$. The endpoint $\\tilde{\\gamma}(1)$ is an integer $n \\in \\mathbb{Z}$, and this integer depends only on the homotopy class of $\\gamma$. Concatenation of loops corresponds to addition of endpoints. Every integer occurs, and if the endpoint is $0$, the lifted loop contracts in $\\mathbb R$ by a based homotopy whose projection contracts $\\gamma$ in $S^1$. The endpoint map is therefore an isomorphism

$$\\pi_1(S^1,1) \\cong \\mathbb{Z}.$$

For homology, the cellular chain complex of $S^1$ with one 0-cell and one 1-cell has zero differential, so

$$H_0(S^1;\\mathbb{Z}) \\cong \\mathbb{Z}, \\qquad H_1(S^1;\\mathbb{Z}) \\cong \\mathbb{Z},$$

and $H_k(S^1;\\mathbb{Z})=0$ for $k \\geq 2$. The Hurewicz theorem confirms that the abelianization of $\\pi_1(S^1)$ is $H_1(S^1)$, consistent with $\\mathbb{Z}^{\\mathrm{ab}}=\\mathbb{Z}$.

## Definitions and results: keeping the objects and arrows together

A category consists of objects, a set of arrows between each specified pair of objects, identity arrows, and associative composition. For the category of topological spaces the arrows are continuous maps. In the based category an object is a pair consisting of a space and a chosen point, and arrows must preserve the chosen point. The distinction matters before any invariant is calculated. A continuous map between spaces need not define a map between two particular based objects if it takes the chosen point to the wrong place.

**Definition 1.1 (Natural transformation).** For functors $F,G$ with the same source and target categories, a natural transformation $\\eta:F\\Rightarrow G$ assigns an arrow $\\eta_X:F(X)\\to G(X)$ to every object, satisfying $G(f)\\eta_X=\\eta_YF(f)$ for every arrow $f:X\\to Y$. An individual isomorphism between two groups says little about maps involving them. A natural isomorphism makes a compatible choice for all such maps simultaneously.

This distinction will explain the word “nonnatural” in the coefficient theorems. A short exact sequence can split for every space considered individually even when there is no rule for choosing those splittings compatible with every continuous map. Existence of a choice and existence of a natural choice are different assertions. This chapter uses only elementary examples of that distinction; no theorem about derived functors is being assumed.

**Result 1.2 (Inverses and retracts are preserved).** Every covariant functor takes an isomorphism to an isomorphism. It also takes an equation $ri=1$ to the equation $F(r)F(i)=1$.

*Proof.* If $f:X\\to Y$ has inverse $g$, the two equations $gf=1_X$ and $fg=1_Y$ become $F(g)F(f)=1_{F(X)}$ and $F(f)F(g)=1_{F(Y)}$. These are the definition of an inverse in the target category. The retract assertion is precisely composition preservation followed by identity preservation. For a functor into groups, if $F(i)(a)=F(i)(b)$, apply $F(r)$ to conclude $a=b$, so $F(i)$ is injective. Every $c\\in F(A)$ equals $F(r)(F(i)(c))$, proving surjectivity of $F(r)$. These last two statements use elements of groups; in an arbitrary category the equation itself is the appropriate conclusion. ∎

The converse is generally unavailable. A map whose induced homomorphism is an isomorphism for one selected invariant need not be a homeomorphism or a homotopy equivalence. The unique map from a nonempty contractible interval to a point already gives a simple counterexample to the homeomorphism claim: all its homotopy invariants agree, but its point fibers are not singletons. Stronger converse theorems need a class of spaces and a specified family of invariants, not just confidence in an example.

**Definition 1.3 (The homotopy category).** Keep topological spaces as objects and replace each continuous map by its unbased homotopy class. Compose classes by composing representatives. This construction is legitimate because composition respects homotopy. If $f_0\\simeq f_1$ through $H$ and $g_0\\simeq g_1$ through $K$, first compose $H$ with $g_0$, then compose $K$ with $f_1$, and join the resulting homotopies by rescaling their time coordinates. The closed-set pasting lemma makes the joined map continuous. Its endpoints are $g_0f_0$ and $g_1f_1$.

**Result 1.4 (The precise bargain).** A homotopy-invariant covariant functor factors uniquely through the homotopy category. In that category a homotopy equivalence is exactly an isomorphism.

*Proof.* Send an arrow class $[f]$ to $F(f)$. Homotopy invariance makes this independent of representative, and the original functor identities supply identity and composition preservation. There is no alternative definition on an arrow class because the quotient sends $f$ to $[f]$. Finally $[g][f]=[1_X]$ and $[f][g]=[1_Y]$ say exactly that the two composites are homotopic to the appropriate identities. These are the defining equations of a homotopy equivalence. ∎

There is also a based homotopy category, where the basepoint stays fixed during every homotopy. Fundamental groups are homotopy invariant there. In the unbased category the induced map on fundamental groups requires a connecting path and is generally determined only up to conjugation. This is a reason to state the source category, not a defect to be repaired by suppressing the basepoint.

## Worked example 2: a deformation that stays inside its domain

Let $A=\\{z\\in\\mathbb C:1\\le |z|\\le 2\\}$, and let $C=\\{z:|z|=1\\}$. Define $r(z)=z/|z|$ and let $i:C\\hookrightarrow A$ be inclusion. The denominator is nonzero throughout $A$, so $r$ is continuous. Moreover $ri=1_C$. The formula

$$H(z,t)=\\bigl((1-t)|z|+t\\bigr)\\frac z{|z|}$$

has modulus between one and two for every allowed parameter. It begins at $z$, ends at $ir(z)$, and fixes every point of $C$ at all times. Therefore $C$ is a strong deformation retract of $A$. Every homotopy-invariant functor sends $i$ and $r$ to inverse isomorphisms. The identity map of $A$ is not literally $ir$: a point of modulus two moves. The inverse equations belong to the homotopy category, which is exactly where they are needed.

This calculation is also a domain check. The same radial formula cannot be extended to the origin while retaining a retraction to $C$. Division by the modulus would fail there, and the no-retraction theorem proved later shows that the missing formula cannot be replaced by some clever continuous choice on the disk.

## Worked example 3: one direction of information is enough for an obstruction

Assume the sphere calculation $\\widetilde H_{n-1}(S^{n-1};\\mathbb Z)=\\mathbb Z$ and the vanishing of reduced homology of the disk, established in the homology chapters. Suppose a continuous map $r:D^n\\to S^{n-1}$ fixed every boundary point, where $n\\ge1$. If $i$ is boundary inclusion, then $ri=1$. On reduced homology this would give a composite

$$\\mathbb Z\\xrightarrow{i_*}0\\xrightarrow{r_*}\\mathbb Z$$

that is the identity. The composite is zero, so applying it to $1$ gives both zero and one, a contradiction. This works even for $n=1$: the boundary is two points and reduced zeroth homology is the group that detects their separation. Ordinary zeroth homology of both a connected disk and a point is nonzero, so dropping the word “reduced” would obscure the obstruction.

We have not assumed that homology classifies disks or spheres. The single functorial equation already forbids the proposed map. Algebraic topology often succeeds in this one-sided way: it disproves an existence claim without completely classifying either object.

## Reading computations without circularity

The circle computation above previews results proved in the lifting chapter and the cellular chapter. A preview is not a second independent proof of those inputs. If the goal is to establish that the circle is not contractible from first principles, first prove unique lifting by evenly covered arcs, then identify the fundamental group by lifted endpoints. Do not use a supposed knowledge of the fundamental group to justify the lifting theorem that is being used to compute it.

Similarly, the statement that a finite graph becomes a wedge of circles after a spanning tree is collapsed depends on a homotopy-extension argument or an equivalent edge-path proof. Counting the surviving edges explains the rank once that reduction is justified; counting alone is not the topological theorem. The CW chapter makes the attachment hypotheses explicit, and the based-group chapter supplies a covering-tree interpretation.

The undecidability and lens-space observations in this opening chapter are classical comparison results, cited through the references below, not local proofs or required inputs. Their purpose is to limit what a proposed invariant could reasonably promise. The rest of the core builds positive tools whose proofs and domain of application are supplied within the route.

When comparing answers, keep coefficients, basepoints and arrows visible. An abstract statement that two groups are isomorphic can be sufficient to distinguish two spaces when their groups are not isomorphic. When groups are isomorphic, however, the actual homomorphism induced by a particular map can contain additional information: multiplication by two on the integers is not invertible even though its domain and codomain are the same abstract group. Naturality is a method for retaining that information through several steps of a construction.

## Practice exercises

### Exercise 1.1
<a id="the-functorial-bargain-ex-1"></a>

Let $A\\subseteq X$. Show that if $\\widetilde H_k(X;\\mathbb Z)=0$ but $\\widetilde H_k(A;\\mathbb Z)\\ne0$ for some $k$, then no retraction $r:X\\to A$ can exist.

<details><summary>Hint 1</summary>

Write the equation satisfied by a retraction.

</details>
<details><summary>Hint 2</summary>

Apply the reduced homology functor to that equation.

</details>
<details><summary>Full solution</summary>

**Solution.** If such a retraction existed, with $i:A\\to X$ the inclusion, then $r_*\\circ i_*=\\operatorname{id}_{\\widetilde H_k(A)}$. But $i_*$ factors through $\\widetilde H_k(X)=0$, so the composite is zero, contradicting the identity on the nonzero group $\\widetilde H_k(A)$. $\\square$

</details>

### Exercise 1.2
<a id="the-functorial-bargain-ex-2"></a>

Show that if $f:X \\to Y$ is a homotopy equivalence and $F$ is a homotopy invariant functor, then $F(f)$ is an isomorphism.

<details><summary>Hint 1</summary>

Choose a homotopy inverse of the given map.

</details>
<details><summary>Hint 2</summary>

Use homotopy invariance on both composites.

</details>
<details><summary>Full solution</summary>

**Solution.** By definition of homotopy equivalence, there exists $g:Y \\to X$ with $f \\circ g \\simeq \\operatorname{id}_Y$ and $g \\circ f \\simeq \\operatorname{id}_X$. Applying $F$ and using homotopy invariance,

$$F(f) \\circ F(g) = F(f \\circ g) = F(\\operatorname{id}_Y) = \\operatorname{id}_{F(Y)},$$

and similarly $F(g) \\circ F(f) = \\operatorname{id}_{F(X)}$. Thus $F(f)$ is invertible with inverse $F(g)$. $\\square$

</details>

### Exercise 1.3
<a id="the-functorial-bargain-ex-3"></a>

Give an example of two spaces with isomorphic homology groups but non-isomorphic fundamental groups.

<details><summary>Hint 1</summary>

Compare a torus with a wedge that has the same cell counts.

</details>
<details><summary>Hint 2</summary>

Ask whether the resulting fundamental groups are abelian.

</details>
<details><summary>Full solution</summary>

**Solution.** Take $X=S^1 \\vee S^1 \\vee S^2$ and $Y=T^2$. Over $\\mathbb{Z}$, both have $H_0=\\mathbb{Z}$, $H_1=\\mathbb{Z}^2$, $H_2=\\mathbb{Z}$, and zero otherwise. However, $\\pi_1(X) \\cong \\mathbb{Z} * \\mathbb{Z}$, the free group on two generators, which is nonabelian, while $\\pi_1(Y) \\cong \\mathbb{Z}^2$ is abelian. The distinction is visible in the fundamental group and, as we shall see in the chapter on cohomology and products, in the cup product structure of cohomology. $\\square$

</details>

### Exercise 1.4
<a id="the-functorial-bargain-ex-4"></a>

Let $F$ be a functor from spaces to sets that is not homotopy invariant. Give an example showing that $F$ need not send homotopy equivalences to bijections.

<details><summary>Hint 1</summary>

Consider a functor that remembers every point.

</details>
<details><summary>Hint 2</summary>

Compare a contractible interval and a one-point space.

</details>
<details><summary>Full solution</summary>

**Solution.** Let $F(X)$ be the underlying set of $X$, and $F(f)=f$ on points. This is a functor to the category of sets. The spaces $[0,1]$ and $\\{0\\}$ are homotopy equivalent, but $F([0,1])$ is uncountable while $F(\\{0\\})$ has one element, so $F$ does not send the homotopy equivalence to a bijection. $\\square$

</details>

### Exercise 1.5
<a id="the-functorial-bargain-ex-5"></a>

A map $f:X\\to Y$ has a left inverse $r:Y\\to X$. Prove that $F(f)$ is injective for every functor to groups.

<details><summary>Hint 1</summary>

Use composition preservation.

</details>
<details><summary>Hint 2</summary>

Apply $F(r)$ to an equality of two images.

</details>
<details><summary>Full solution</summary>

The equation $rf=1_X$ gives $F(r)F(f)=1_{F(X)}$. If $F(f)(a)=F(f)(b)$, applying $F(r)$ gives $a=b$. This uses a left inverse, not merely the existence of some isomorphism between the groups.

</details>

### Exercise 1.6
<a id="the-functorial-bargain-ex-6"></a>

Explain why a constant map from a circle to itself cannot be homotopic to the identity, using the circle fundamental-group computation.

<details><summary>Hint 1</summary>

Calculate the two induced homomorphisms.

</details>
<details><summary>Hint 2</summary>

One homomorphism kills the generator and the other preserves it.

</details>
<details><summary>Full solution</summary>

On $\\pi_1(S^1)\\cong\\mathbb Z$, the identity induces multiplication by one and a constant based map induces zero. Based homotopic maps induce the same homomorphism. For an unbased homotopy the possible conjugation is trivial because this group is abelian, so the obstruction still applies.

</details>

### Exercise 1.7
<a id="the-functorial-bargain-ex-7"></a>

Show that $\\pi_0$, interpreted as the set of path components, is a homotopy-invariant functor to sets.

<details><summary>Hint 1</summary>

Follow a path under a continuous map.

</details>
<details><summary>Hint 2</summary>

A homotopy gives a path between the images of each point.

</details>
<details><summary>Full solution</summary>

Continuous maps take path components into path components and therefore induce functions on component sets, preserving identity and composition. If $H$ joins $f$ to $g$, the path $t\\mapsto H(x,t)$ puts $f(x)$ and $g(x)$ in the same component for every $x$. Hence the component functions agree.

</details>

### Exercise 1.8
<a id="the-functorial-bargain-ex-8"></a>

If $F$ is contravariant and $ri=1_A$, write the induced retract equation and identify the injective and surjective maps when its values are groups.

<details><summary>Hint 1</summary>

Contravariance reverses the order of composition.

</details>
<details><summary>Hint 2</summary>

The map with a left inverse is injective.

</details>
<details><summary>Full solution</summary>

The equation becomes $F(i)F(r)=1_{F(A)}$. Thus $F(r):F(A)\\to F(X)$ is injective and $F(i):F(X)\\to F(A)$ is surjective. For cohomology this explains why the inclusion of a retract induces a surjection, the reverse of the homology statement.

</details>

### Exercise 1.9
<a id="the-functorial-bargain-ex-9"></a>

Prove that homotopy equivalence is transitive.

<details><summary>Hint 1</summary>

Compose proposed equivalences and their homotopy inverses.

</details>
<details><summary>Hint 2</summary>

Compose the two known homotopies with continuous maps.

</details>
<details><summary>Full solution</summary>

If $f:X\\to Y$ and $u:Y\\to Z$ have homotopy inverses $g$ and $v$, then $gv$ is a homotopy inverse of $uf$. Indeed $gvuf\\simeq gf\\simeq1_X$ and $ufgv\\simeq uv\\simeq1_Z$. Composition and pasting of homotopies justify each step.

</details>

### Exercise 1.10
<a id="the-functorial-bargain-ex-10"></a>

A continuous map induces an isomorphism on one chosen homology group. Does this establish a homotopy equivalence? Give a counterexample.

<details><summary>Hint 1</summary>

Choose zeroth homology.

</details>
<details><summary>Hint 2</summary>

Every map between nonempty path-connected spaces induces an isomorphism on integral zeroth homology.

</details>
<details><summary>Full solution</summary>

The map $S^1\\to\\{*\\}$ induces an isomorphism on $H_0$, since both groups are $\\mathbb Z$ and the component generator maps to the component generator. It is not a homotopy equivalence, since the circle has nontrivial fundamental group while the point does not. A single invariant in a single degree cannot supply the missing converse.

</details>

## Sources

This chapter develops original explanations and exercises around standard functorial arguments. Allen Hatcher, [*Algebraic Topology*, Chapters 0–1](https://pi.math.cornell.edu/~hatcher/AT/ATchapters.html), supplies the comparison framework for homotopy types and fundamental groups; his discussions of lens spaces and undecidability concern the classical boundary observations, not additional prerequisites. J. P. May, [*A Concise Course in Algebraic Topology*, Chapters 1–2](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf), is an alternative treatment of categorical language. No exercise sequence or proof wording is reproduced from those sources.

## Summary

A functor preserves identities, composites, inverses and retract equations. Homotopy invariance allows it to descend to the homotopy category, where homotopy equivalences become isomorphisms. These implications provide obstructions without promising a converse classification. Basepoints, coefficient choices and naturality specify what information a computation retains. Continue with [homotopy and homotopy equivalence](homotopy-loops-and-deformation.md), then construct the fundamental group with these conventions exposed.
`;export{e as default};