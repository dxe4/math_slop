
# Projective, Injective and Flat Modules

Vector-space exact sequences split, so lifting through a surjection and extending from a subspace are usually routine basis arguments. Over a ring, those properties distinguish special modules. Projectives lift maps, injectives extend them, and flat modules preserve injections after tensoring. We prove the existence results needed to build resolutions before using any derived functor.

Read [Modules over a Ring](modules-linear-algebra-over-a-ring.md), especially kernels, quotients and split exact sequences. Unless a commutative example is specified, R is any associative unital ring and modules are unital left R-modules. Tensor flatness of a left module is tested on right modules. The tensor construction receives its full development next; the definition here uses its balanced-map property and right exactness, both proved there. The set-indexed basis lifts, products and maximal extensions use ordinary choice.

## 1. Projective means lifting through every surjection

A module P is projective if every map f:P→B lifts through every surjection q:E→B: there is h:P→E with qh=f. The lift need not be unique. Equivalently the covariant Hom functor Hom_R(P,−) sends surjections to surjections; it is already left exact for every P, as the kernel factorisation proves.

**Theorem 2.1.** A module is projective exactly when it is a direct summand of a free module.

*Proof.* A free module lifts through q by choosing a preimage of the image of each basis vector and extending linearly. A summand P of a free module F also lifts: extend a map from P to F by composing with the projection F→P, lift that map, and restrict along P→F.

Conversely choose a free surjection F→P, for example with one generator for every element of P. Projectivity lifts id_P to a section. The splitting lemma gives F≅ker q⊕P, exhibiting P as a summand. ∎

Every module therefore has a surjection from a projective module. Repeating the construction on successive kernels gives an exact sequence of free modules ending at it. The next chapters organize this sequence as a resolution and explain which induced homology is independent of the choices.

**Worked example 2.2.** Z/nZ is not projective over Z for n≥2. A section of reduction Z→Z/nZ would send the class of one to an integer z killed by n and reducing to one. The only integer killed by n is zero, whose residue is not one. Thus that identity cannot lift. The obstruction concerns one explicit surjection, enough to disprove the universal lifting property.

Projective does not mean free. For R=k×k, the module eR with e=(1,0) is a summand of R, hence projective. It is nonzero over the first field factor and zero over the second. A nonzero free R-module has the same nonempty basis size over both factors, so eR is not free. This argument applies to arbitrary free basis sizes, not only finite ranks.

## 2. Finite projectives over a local ring

**Theorem 2.3.** A finitely generated projective module over a commutative local ring (R,𝔪,k) is free of finite rank. No Noetherian hypothesis is needed.

*Proof.* Lift a k-basis of P/𝔪P to elements of P. Their finite number follows from finite generation. Nakayama gives a surjection R^r→P, and projectivity splits it. Let K be its kernel. As a summand of finite free R^r, K is finitely generated: project the standard basis onto it.

Reducing the split decomposition modulo 𝔪 remains a direct sum. The chosen map k^r→P/𝔪P is an isomorphism, so K/𝔪K=0. Nakayama now gives K=0. Hence the original surjection is an isomorphism and the chosen lifts are a free basis. ∎

The second use of Nakayama depends on proving K finite. For an arbitrary finite module P without a splitting, a presentation kernel need not be finite over a non-Noetherian ring. The argument has supplied that finiteness through projectivity, rather than silently assuming it for every kernel.

## 3. Injective means extending from every submodule

A module I is injective if a map A→I extends across every inclusion A⊆B. Equivalently Hom_R(−,I) turns short exact sequences into exact sequences, with surjectivity at the last restriction map. The extension is generally not unique.

**Theorem 2.4 (Baer's criterion).** I is injective exactly when every homomorphism from a left ideal J⊆R into I extends to R.

*Proof.* Necessity is a special case of the definition. Conversely fix f:A→I for A⊆B. Order its extensions to submodules C between A and B by further extension. Chains have upper bounds given by the union of their domains and compatible maps, so Zorn gives a maximal extension g:C→I.

If b∈B is outside C, let J={r∈R:rb∈C}, a left ideal. The map r↦g(rb) is R-linear on J, so the assumed condition extends it to R. Any such map R→I has the form r↦ri for i equal to its value at one. Define a larger extension on C+Rb by g′(c+rb)=g(c)+ri.

If c+rb=c′+r′b, then (r−r′)b=c′−c lies in C. The extension equation gives (r−r′)i=g(c′−c), proving the displayed value independent of representatives. It is R-linear and extends g, contradicting maximality. Therefore C=B and f extends, proving injectivity. ∎

The sidedness is explicit: left ideals and expressions rb match left modules. Reversing module sides requires the corresponding opposite-ring statement.

## 4. Divisible groups and enough injectives

**Worked example 2.5.** Over Z, injective groups are exactly divisible groups. Every ideal is nZ. A homomorphism from nZ is determined by the image a of n, and extends to Z exactly when some b has nb=a. Baer's criterion therefore gives precisely divisibility by every positive n. Q and Q/Z are divisible and hence injective; Z is not, since one cannot be divided by two inside Z.

We now construct enough injectives without assuming that a resolution already exists. The group Q/Z detects every nonzero element of an abelian group M. On a nonzero cyclic subgroup of finite order d, send a generator to the class of one divided by d. On an infinite cyclic subgroup, send a generator to the nonzero class of one-half. Injectivity of Q/Z extends this nonzero map to M. Consequently evaluation embeds M into a product of copies of Q/Z, indexed by Hom_Z(M,Q/Z). Products of divisible groups are divisible by coordinatewise root choices, hence injective. This gives an injective abelian group I and an embedding j of the underlying group of any module M into I.

Define E=Hom_Z(R,I), with left R-action
$$(rf)(s)=f(sr).$$
It is a left action because applying r₂ and then r₁ gives evaluation at sr₁r₂. There is a natural correspondence
$$\operatorname{Hom}_R(N,E)\cong\operatorname{Hom}_{\mathbb Z}(UN,I).$$
Evaluation at one gives one direction. Its inverse sends h to the map n↦(r↦h(rn)); the formula proves R-linearity and that both composites are identities. Since forgetting modules to abelian groups preserves injections, injectivity of I makes E injective over R by this correspondence.

Finally embed M into E by m↦(r↦j(rm)). It is R-linear by the displayed action, and evaluation at one recovers j(m), so it is injective. Thus every left R-module embeds in an injective module. Repeating on the cokernel constructs the arrows needed for an injective resolution. No commutativity or Noetherian hypothesis on R was used.

## 5. Flatness has its own sided definition

A left module F is flat if tensoring an injection of right modules N′→N with F remains injective. Since tensor is right exact, this is equivalent to preserving every short exact sequence of right modules. For a commutative ring the usual unlabelled-side convention is available, but the general definition still explains which variable is being held fixed.

Every free left module is flat: tensoring with a direct sum of copies of R gives the corresponding direct sum of the right module's underlying abelian group. Direct sums preserve injections componentwise, with finite support ensuring well-defined elements. Direct summands of flat modules are flat, because an injection on the whole tensor direct sum restricts to each summand. Hence every projective module is flat by Theorem 2.1.

**Worked example 2.6.** Q is flat over Z because tensoring with Q is localisation at nonzero integers. The fraction criterion proves exactness: an element mapping to zero is killed by a nonzero denominator multiplier, which moves it into the kernel before localisation; injections remain injections by that same criterion. It is not projective. Every homomorphism Q→Z is zero, since the image of one must be divisible by every positive integer and hence zero, and then the image of each rational is zero as well. A map Q→a free abelian group is therefore zero in every coordinate. If Q were projective it would embed as a summand of a free abelian group, impossible for this nonzero group. Thus flatness does not imply projectivity.

The group Q/Z is injective but not flat. Tensor the injection Z→Z given by multiplication by n, for n≥2. After tensoring with Q/Z it is multiplication by n on Q/Z, whose kernel contains the nonzero class of one divided by n. It is not injective. Conversely Z is projective and flat but is not injective by nondivisibility. These examples separate all three properties with exact witnesses.

## 6. Split exact sequences and preserved information

All three functor behaviors preserve a split exact sequence without additional hypotheses. A split module sequence is isomorphic to inclusion and projection for a direct sum. Hom in either variable preserves the resulting finite product of hom groups, and tensor distributes over the direct sum. Thus the canonical splitting transports through the functor and makes its output exact.

The projective, injective and flat conditions concern the nonsplit sequences too. A proof that checks only split sequences therefore cannot establish any of these three universal properties. The cyclic integer examples supply nonsplit sequences where the distinctions become visible, while the free and coinduced constructions supply enough special objects to replace a general module by controlled ones.

A lifting property asks for existence of a factor or extension, rather than a preferred choice. The free-cover and injective-embedding constructions above make particular choices to prove availability. The later comparison theorem will explain why a derived functor can be independent of them up to the appropriate natural isomorphism; independence is not already supplied by the existence proof alone.

## 7. Exercises

### HA-02-01 — A summand lifts

Suppose P is a summand of a projective module Q. Prove P projective without assuming Q free.

<details><summary>Hint 1</summary>
Write inclusion i:P→Q and projection r:Q→P with ri=id.
</details>
<details><summary>Hint 2</summary>
Lift fr from Q, then restrict along i.
</details>
<details><summary>Solution</summary>
Given f:P→B and a surjection E→B, projectivity of Q lifts the map fr to h:Q→E. The composite hi:P→E maps to fri=f, so it is the required lift. The argument uses only the splitting and Q's lifting property. It does not select a unique lift or require P to have a basis. Thus summand inheritance holds for projectivity itself and yields the free-summand direction of the main characterisation as a special case.
</details>

### HA-02-02 — All surjections onto P

Show P is projective exactly when every surjection onto P splits.

<details><summary>Hint 1</summary>
The forward implication lifts id_P.
</details>
<details><summary>Hint 2</summary>
For the converse use a free surjection onto P and Theorem 2.1.
</details>
<details><summary>Solution</summary>
If P is projective, lifting its identity through a surjection supplies a section. Conversely choose the free cover of P. If every surjection onto P splits, this cover exhibits P as a summand of a free module. Theorem 2.1 makes it projective. Only one suitably chosen free surjection is needed for this converse; the assumed statement about all surjections certainly supplies it.
</details>

### HA-02-03 — A nonfree projective

For R=k×k, prove the summand eR with e=(1,0) cannot be a nonzero free module.

<details><summary>Hint 1</summary>
Apply the two central idempotents to the module.
</details>
<details><summary>Hint 2</summary>
A free basis gives copies of k over both factors.
</details>
<details><summary>Solution</summary>
The first factor of eR is one-dimensional over k and the second is zero. For a free module on a nonempty set, applying either field-factor idempotent gives a vector space with that same basis set, so neither factor is zero. The empty free basis would give the zero module, also not eR. Since eR is a summand of R it is projective, but none of these possible free modules is isomorphic to it.
</details>

### HA-02-04 — Why the local proof needs a finite kernel

In Theorem 2.3, show explicitly that the split kernel K is finitely generated.

<details><summary>Hint 1</summary>
A splitting gives a projection R^r→K.
</details>
<details><summary>Hint 2</summary>
Apply it to the standard basis vectors.
</details>
<details><summary>Solution</summary>
Let π:R^r→K be the direct-summand projection. Every element of K equals its own projection and hence is an R-linear combination of the finitely many π(e_i). They generate K. Nakayama can therefore be applied after K/𝔪K is shown zero. No theorem that every submodule of finite free is finite was used; that broader statement can fail over a non-Noetherian ring and would be an unjustified substitute here.
</details>

### HA-02-05 — A Baer extension

Let I be a divisible abelian group and let f:6Z→I send six to a. Construct an extension to Z.

<details><summary>Hint 1</summary>
Choose b with 6b=a.
</details>
<details><summary>Hint 2</summary>
A homomorphism from Z is determined by its value at one.
</details>
<details><summary>Solution</summary>
Divisibility supplies b∈I with 6b=a. Define the extension by k↦kb. On 6k it gives 6kb=ka=f(6k), so the restriction agrees. The extension may not be unique when I has nonzero elements killed by six: adding such an element to b changes the extension while preserving the restriction. Injectivity requires existence, not uniqueness of these extensions.
</details>

### HA-02-06 — The maximal-extension formula

In Baer's proof, verify that g(c)+ri is unchanged when c+rb is written using another pair c′,r′.

<details><summary>Hint 1</summary>
Subtract the two representations.
</details>
<details><summary>Hint 2</summary>
Use the extension equation on r−r′ in J.
</details>
<details><summary>Solution</summary>
Equality of representations gives (r−r′)b=c′−c∈C, so r−r′ belongs to J. The chosen extension satisfies (r−r′)i=g((r−r′)b)=g(c′−c). Rearranging gives g(c)+ri=g(c′)+r′i. This proves the formula defines a function on the enlarged submodule, after which additivity and scalar linearity follow directly. The well-definedness check is essential because the sum C+Rb need not be direct.
</details>

### HA-02-07 — A detecting character

For a nonzero element of finite order d in an abelian group M, explain how injectivity of Q/Z produces a map M→Q/Z nonzero at that element.

<details><summary>Hint 1</summary>
First define the map on its cyclic subgroup.
</details>
<details><summary>Hint 2</summary>
The class of one divided by d has exact order d.
</details>
<details><summary>Solution</summary>
Send the selected element to the class of one divided by d. The cyclic relation is respected and this class is nonzero because d≥2. Thus it defines a homomorphism on the cyclic subgroup. Divisibility makes Q/Z injective by Baer, so the map extends to M without changing its value there. This gives the required detector and proves injectivity of the product evaluation map used to embed M in an injective abelian group.
</details>

### HA-02-08 — Coinduced embedding

For the map M→Hom_Z(R,I), m↦(r↦j(rm)), prove R-linearity and injectivity.

<details><summary>Hint 1</summary>
Evaluate scalar linearity at an arbitrary s∈R.
</details>
<details><summary>Hint 2</summary>
Evaluate the resulting function at one to detect a zero image.
</details>
<details><summary>Solution</summary>
For r₀∈R, the function associated to r₀m takes s to j(sr₀m). The action of r₀ on the function associated to m also takes s to that value by its right-translation formula. Additivity is immediate from j, so the map is R-linear. If its function is zero, evaluating at one gives j(m)=0, and the original embedding j gives m=0. Thus it is a module embedding into the injective coinduced module, including for noncommutative R.
</details>

### HA-02-09 — Q cannot enter a free group

Prove every homomorphism Q→a free abelian group is zero, including when the free rank is infinite.

<details><summary>Hint 1</summary>
Compose with each integer coordinate projection.
</details>
<details><summary>Hint 2</summary>
A vector in a direct sum is zero when every coordinate is zero.
</details>
<details><summary>Solution</summary>
Each coordinate composite maps Q to Z and is zero by divisibility of the image of one, followed by the same argument for each rational. Thus every coordinate of every image vector vanishes, making the whole homomorphism zero. Infinite free rank causes no difficulty: coordinatewise equality still detects a vector and each vector has finite support. Hence no nonzero embedding of Q into a free abelian group can exist, disproving projectivity by the summand characterisation.
</details>

### HA-02-10 — Injective but nonflat

Exhibit a failure of flatness for Q/Z using the injection multiplication by three on Z.

<details><summary>Hint 1</summary>
Tensoring with Q/Z turns the map into multiplication by three.
</details>
<details><summary>Hint 2</summary>
The class of one-third is nonzero and killed by that operation.
</details>
<details><summary>Solution</summary>
Under Z⊗(Q/Z)≅Q/Z, the tensored injection becomes the endomorphism multiplying every class by three. It kills the nonzero class of one-third, so it is not injective. Therefore Q/Z is not flat, although divisibility proved it injective. This is a direct right-module injection over Z and hence meets the flatness definition, without using a derived Tor computation before Tor is defined.
</details>

### HA-02-11 — Split sequences

Why does checking Hom exactness only on split exact sequences not prove a module injective or projective?

<details><summary>Hint 1</summary>
All modules have the required Hom behaviour on direct-sum inclusions and projections.
</details>
<details><summary>Hint 2</summary>
A nonsplit sequence is needed to distinguish the lifting properties.
</details>
<details><summary>Solution</summary>
A split sequence is isomorphic to the standard direct-sum sequence, and Hom in either variable decomposes into the corresponding finite product. Its output is therefore split exact for every module. Injectivity and projectivity instead demand the same existence behavior for arbitrary inclusions and surjections. The nonsplit integer quotient sequence detects the failure for Z/n, whereas no split-sequence check could distinguish it. The universal quantifier over all short exact sequences is substantive.
</details>

### HA-02-12 — Enough objects, then resolutions

Explain the first two steps in constructing projective and injective resolutions of an arbitrary left R-module, identifying which existence theorem supplies each arrow.

<details><summary>Hint 1</summary>
For projectives repeat free covers of kernels.
</details>
<details><summary>Hint 2</summary>
For injectives repeat embeddings of cokernels.
</details>
<details><summary>Solution</summary>
Choose a free surjection P₀→M and then a free surjection P₁→its kernel. Composing the latter with kernel inclusion gives the next arrow and exactness at P₀. Dually embed M in I⁰ by the coinduced construction and embed its cokernel in I¹; composing quotient with this embedding gives exactness at I⁰. Repetition supplies the full sequences. This proves availability of resolutions but not independence of their later derived constructions, which requires the separate comparison and homotopy arguments.
</details>

## 8. Next connection

Surjections from projectives and embeddings into injectives now exist for every module. Tensor and Hom next receive their full typed constructions, before complexes and derived functors use these module classes to measure failures of exactness.
