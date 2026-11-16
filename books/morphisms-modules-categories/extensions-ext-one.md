
# Extensions and Ext¹

An exact sequence can fail to split even when its endpoint modules are simple to describe. Ext¹ does more than signal that failure: it classifies exact extensions with their specified endpoint maps. The group operation is a pullback-and-quotient construction, not a direct sum of the middle modules.

Read [Tor and Ext](derived-functors-tor-ext.md), [module exactness](modules-linear-algebra-over-a-ring.md) and pullbacks and pushouts from the introductory category book. R is an associative unital ring, and all modules are left R-modules. An extension has fixed modules M,N and exact sequence 0→N→E→M→0. Equivalence means a map of such sequences inducing the identity on both endpoints. These hypotheses are retained in every classification statement.

## 1. Equivalence retains the endpoint maps

Write an extension as (E,i,p). A map t:E→E′ with ti=i′ and p′t=p is automatically an isomorphism. If t(e)=0, then p(e)=0, so e=i(n), and injectivity of i′ gives n=0. For any e′, lift p′(e′) to e in E; their difference e′−t(e) belongs to im i′ and can be corrected by adding an element of im i to e. Thus t is onto and injective.

The equivalence relation therefore identifies only compatible middle-module isomorphisms. Isomorphic middle modules with different inclusions or quotient maps can represent different extensions. A splitting is a section M→E of p, equivalently a retraction E→N of i. The split extension is the direct sum with its standard inclusion and projection.

## 2. Ext¹ as a presentation quotient

Choose a projective surjection P→M with kernel j:K→P, and extend it to a projective resolution. A degree-one Hom cocycle on P₁ kills the image of P₂, hence descends uniquely through the surjection P₁→K. Coboundaries are restrictions of maps P→N. Consequently
$$\operatorname{Ext}^1_R(M,N)
\cong\frac{\operatorname{Hom}_R(K,N)}
{\{h\circ j:h:P\to N\}}.$$
This is an isomorphism of abelian groups with the Ext defined in the previous chapter. It does not require K projective. Existence of the remaining resolution supplies the cocycle description and comparison independence already proved.

Given f:K→N, construct
$$E_f=(N\oplus P)/\{(f(k),-j(k)):k\in K\}.$$
The relation set is a submodule, the image of a linear map. Define inclusion n↦[(n,0)] and projection [(n,p)]↦the image of p in M. The inclusion is injective: a relation with second coordinate zero has k=0 by injectivity of j. Projection is well-defined and onto. If p=j(k), the quotient relation gives [(n,p)]=[(n+f(k),0)], proving its kernel is exactly the included N. Thus this is an actual extension.

## 3. Every extension comes from a cocycle

**Theorem 7.1 (Extension classification).** The construction f↦E_f induces a natural bijection between Ext¹_R(M,N) and equivalence classes of extensions of M by N. The zero class corresponds exactly to split extensions.

*Proof.* Given (E,i,p), lift P→M to s:P→E by projectivity. The composite sj lands in ker p, so there is a unique f:K→N with if=sj. The map (n,x)↦i(n)+s(x) kills the defining relations and gives E_f→E fixing endpoints. It is an isomorphism by the preceding elementary argument. Thus every extension is obtained.

If s changes to s+ih for a map h:P→N, f changes to f+hj. Conversely when g=f+hj, the map [(n,x)]↦[(n−h(x),x)] gives an isomorphism E_f→E_g: a defining relation maps to (g(k),−j(k)), so it is well-defined, with inverse using plus h. It fixes the endpoints. Hence the cokernel class determines an extension class.

If two extensions are equivalent, transport a chosen lift s along the equivalence. Its difference from the other chosen lift lands in the kernel N and equals ih. Restricting to K shows the two f maps differ by hj. This proves injectivity of the correspondence.

A split extension admits s equal to its section composed with P→M, which gives f=0. Conversely if f=hj, subtract ih from the canonical lift P→E_f. The resulting map kills K and therefore factors through M, supplying a section. This proves the zero-class criterion.

Finally a comparison map between projective resolutions restricts on their augmentation kernels. Composing f with that restriction is exactly the cocycle comparison in Ext, and is also obtained by composing the extension lift s with the degree-zero comparison. Thus the correspondence agrees with the canonical change-of-resolution isomorphisms and is independent of the chosen presentation. Naturality in endpoint maps is made explicit below. ∎

No middle-module decomposition was used in the classification proof. The projective source supplied a lift, the kernel supplied its obstruction and the pushout quotient built the exact sequence representing it.

## 4. Baer sum matches addition

Given extensions E₁,E₂ of the same M by N, form their pullback
$$F=\{(e_1,e_2):p_1(e_1)=p_2(e_2)\}.$$
It maps onto M and has kernel N⊕N. Quotient F by the submodule {(i₁(n),−i₂(n)):n∈N}. Its kernel becomes the quotient of N⊕N by the antidiagonal, identified with N through addition. The resulting extension is the Baer sum.

To verify its class, choose lifts s₁,s₂ from the same P. They give a lift (s₁,s₂):P→F. On K its kernel values are (f₁,f₂), and the quotient adds them. Hence the new obstruction is f₁+f₂. The classification identifies the Baer sum with ordinary addition in the cokernel above, proving that it is well-defined, associative and commutative. The split class is identity. Pushing an extension along minus identity on N gives its inverse, corresponding to −f.

**Worked example 7.2.** There are two abelian extensions of C₂ by C₂. The nonzero class is C₄ with kernel inclusion sending one to two and quotient reduction modulo two. Adding it to itself gives the zero class and thus the split V₄ extension. Directly, the pullback consists of pairs in C₄² having equal parity. Quotient by the antidiagonal kernel generated by (2,2). Every remaining element has order dividing two: an odd pair doubles to (2,2), now zero, and even pairs already double to zero. The quotient has four elements and is V₄. This computes the Baer operation using its actual maps, rather than taking the direct product of two middle groups.

## 5. Pullback and pushout give naturality

For a map u:M′→M, pull back E along u. Its middle module consists of pairs (e,m′) with p(e)=u(m′). Projection onto M′ is surjective because p is, and its kernel is the same N. This gives the contravariant map in the first endpoint.

For v:N→N′, push out the kernel inclusion: use (N′⊕E) modulo relations (v(n),−i(n)). The map onto M comes from p and its kernel is the copy of N′ by the same quotient argument used for E_f. This is the covariant map in the second endpoint. It does not require v to be injective or surjective.

At the fixed presentation, pushout replaces f by vf. Pullback uses a comparison lift P′→P for u and replaces f by its composite on the kernels. These are exactly the derived Ext maps. They respect addition because addition of obstruction homomorphisms is preserved by composition. Identity and composition laws also follow from the cokernel formula and resolution comparison. Thus the extension bijection is a natural isomorphism of the resulting abelian-group functors.

The constructions classify extensions of modules, where the middle object is an additive module and the endpoint action is fixed. Group extensions with nonabelian middle groups require a specified group action and a different cocycle equation; the separate group-cohomology chapter supplies that setting. The shared word “extension” does not identify the two classifications without those additional data.

## 6. Cyclic quotients in explicit generators

**Worked example 7.3.** Take M=Z/m for m≥2 and any abelian N. Use P=Z,K=mZ. A map K→N is determined by a=f(m), and restrictions from P give the multiples mN. Thus Ext¹_Z(Z/m,N)=N/mN. In E_f, let x be a lift of the quotient generator. The relation is mx=a in the included N. Replacing x by x+b changes a by mb, exactly the quotient relation on the parameter.

For N=Z and m=2, a=0 gives Z⊕C₂, while a=1 gives Z with kernel inclusion multiplication by two and quotient reduction. This reproduces the nonsplit integer sequence from its obstruction class. For N=C_n the parameter group is C_gcd(m,n); a presentation for its middle module has a kernel generator y with ny=0 and a lift x with mx=ay. The endpoint maps remain part of the presentation.

**Worked example 7.4.** For extensions of C₄ by Z, the four classes are a modulo four. The middle group has presentation with relation 4x=ay, so its abstract type is Z⊕Z/gcd(4,a), with a zero torsion factor omitted. Both a=1 and a=3 give an infinite cyclic middle group, but they are distinct extension classes.

For a=1, choose its generator t=x, with kernel generator y=4t and quotient t↦1 modulo four. For a=3, write x=3t,y=4t, giving quotient t↦3 modulo four. An isomorphism fixing the kernel must take t to t, because it must preserve 4t in a torsion-free group. That map does not commute with the two quotient maps. Thus no endpoint-fixing equivalence exists, despite the same middle-module type. Allowing an automorphism of the quotient would pose a different classification problem.

## 7. Automorphisms and transformations of an extension

The automorphisms of a fixed extension inducing identities on N and M form Hom_R(M,N). Given h:M→N, define t_h(e)=e+i h p(e). It fixes the kernel and quotient, and t_(−h) is its inverse since pi=0. Addition of h corresponds to composition of these automorphisms.

Conversely if t fixes the endpoints, t−id has image in i(N) and kills i(N). First factor it through i, then through the quotient p. This gives a unique h with t−id=i h p. Thus every such automorphism is obtained. This extra symmetry information is not the Ext¹ class itself: the class records which extension, while Hom records its automorphisms with endpoints fixed.

A pushout can turn a nonsplit extension into a split one. Push the nonzero class of Ext¹_Z(C₂,Z) along Z→Q. Its parameter one becomes zero in Q/2Q, since Q is divisible. The pushed-out extension therefore splits by the proved criterion. This is also consistent with injectivity of Q and vanishing of Ext¹(C₂,Q), giving the same conclusion through two explicit descriptions.

Splicing two compatible short exact sequences gives a length-two exact sequence. Relating equivalence classes of such longer sequences to higher Ext and its product requires additional comparison arguments. The present proof establishes the degree-one classification and Baer law fully; no higher Yoneda-product theorem is being inferred from notation alone.

## 8. Exercises

### HA-07-01 — Exact pushout sequence

For E_f, prove its included copy of N is injective and identify its quotient by that copy.

<details><summary>Hint 1</summary>
A relation with zero P-coordinate has j(k)=0.
</details>
<details><summary>Hint 2</summary>
After removing N, the remaining quotient is P/j(K).
</details>
<details><summary>Solution</summary>
If [(n,0)] is zero, the pair equals (f(k),−j(k)) for some k. Injectivity of j makes k=0 and then n=0. Quotienting by the copy of N leaves P modulo j(K), which is M by its presentation. The induced projection from E_f is onto, and a class with P-coordinate j(k) equals a class from N by the defining relation. This proves the complete short exact sequence with its actual maps.
</details>

### HA-07-02 — Changing the lift

If s′=s+ih in the classification proof, compute the new obstruction map on K.

<details><summary>Hint 1</summary>
Restrict both lifts along j.
</details>
<details><summary>Hint 2</summary>
Use injectivity of i to compare the resulting maps to N.
</details>
<details><summary>Solution</summary>
We have s′j=sj+ihj=i(f+hj). Hence the new obstruction is f+hj. Its class in Hom(K,N) modulo restrictions from P agrees with the old class. This is why arbitrary projective lifts give the same extension invariant, while a chosen representative f can change. The quotient in the Ext formula exactly removes this change-of-lift freedom.
</details>

### HA-07-03 — Split classes

Construct a section of E_f→M when f=hj for some h:P→N.

<details><summary>Hint 1</summary>
Start from the canonical lift x↦[(0,x)].
</details>
<details><summary>Hint 2</summary>
Subtract the included h(x) to kill j(K).
</details>
<details><summary>Solution</summary>
The map x↦[(-h(x),x)] sends j(k) to [(-f(k),j(k))], which is zero by the defining relation. It therefore descends to M=P/j(K). Its composite with E_f→M is identity because the P-coordinate still projects to the original quotient class. Thus it is a section. This proves splitting from the coboundary representative with an actual formula, rather than only identifying its abstract zero class.
</details>

### HA-07-04 — A cyclic parameter group

Compute Ext¹_Z(C₆,C₁₅) and explain the parameter relation.

<details><summary>Hint 1</summary>
It is C₁₅ modulo six times that group.
</details>
<details><summary>Hint 2</summary>
Changing a lift adds six times a kernel element.
</details>
<details><summary>Solution</summary>
The subgroup of six-multiples has five elements, so the quotient has order three and is C₃. A parameter a specifies six times a chosen quotient lift as a times the kernel generator. Replacing that lift by a kernel element changes the parameter by a six-multiple. Thus the three residue classes in that quotient classify the endpoint-fixed extensions, rather than the fifteen possible displayed parameter values separately.
</details>

### HA-07-05 — Baer identity and inverse

Use the obstruction model to identify the identity and inverse of an extension class under Baer sum.

<details><summary>Hint 1</summary>
Baer sum corresponds to addition of maps K→N.
</details>
<details><summary>Hint 2</summary>
Use zero and negation in the cokernel group.
</details>
<details><summary>Solution</summary>
The zero obstruction gives the split extension and adding it changes no cokernel class. Negating an obstruction gives its additive inverse, realised by pushing the extension along minus identity of N. The pullback-and-quotient computation sends their sum to zero, so the resulting extension splits. These conclusions follow through the proved identification with an abelian group, which also supplies associativity and commutativity of the geometric construction.
</details>

### HA-07-06 — Same middle group

For the a=1 and a=3 extensions of C₄ by Z, explain why reversing the quotient generator changes the classification question.

<details><summary>Hint 1</summary>
The original equivalence requires the identity on C₄.
</details>
<details><summary>Hint 2</summary>
The two quotient maps on a middle generator are one and three.
</details>
<details><summary>Solution</summary>
The residue three is minus one modulo four, an automorphism of C₄. Permitting that endpoint automorphism can align the two quotient maps, but the definition of extension equivalence fixes the quotient by its identity map. Under that stricter requirement a middle isomorphism preserving the kernel cannot change its quotient value from one to three. Thus the two Ext classes remain different. Classifying middle groups up to abstract isomorphism forgets this endpoint data and gives fewer distinctions.
</details>

### HA-07-07 — An extension automorphism

Verify that t_h=id+i h p has inverse id−i h p.

<details><summary>Hint 1</summary>
The square of i h p is zero because pi=0.
</details>
<details><summary>Hint 2</summary>
Expand the two composites using additive composition.
</details>
<details><summary>Solution</summary>
Their composite is id minus the square of i h p, and that square contains pi and is zero. The reverse composite is the same. Also pt_h=p and t_hi=i, so both maps fix the endpoints. This verifies an actual compatible automorphism, and addition of two h maps corresponds to composition because the same cross term vanishes. Every such automorphism is recovered by factoring its difference from identity.
</details>

### HA-07-08 — Pullback exactness

For u:M′→M, prove the pullback extension projects onto M′ and has kernel N.

<details><summary>Hint 1</summary>
Lift u(m′) along the original surjection.
</details>
<details><summary>Hint 2</summary>
Pairs over zero have first coordinate in the original kernel.
</details>
<details><summary>Solution</summary>
For any m′, surjectivity of p provides e with p(e)=u(m′), so (e,m′) is a preimage in the pullback. A pair projecting to zero has p(e)=0 and is uniquely (i(n),0). Thus the new kernel is exactly N with its inherited inclusion. These statements do not require u injective or surjective and prove the extension used for contravariant naturality.
</details>

### HA-07-09 — A split pushout

Why does pushing the nonsplit integer extension of C₂ by Z along Z→Q give a split sequence?

<details><summary>Hint 1</summary>
Its obstruction parameter is one in Z/2Z before pushing out.
</details>
<details><summary>Hint 2</summary>
In Q the element one is twice one-half.
</details>
<details><summary>Solution</summary>
Pushout applies the endpoint map to the obstruction parameter. Its new class lies in Q/2Q and is zero because one equals twice one-half. The proved zero-class criterion supplies a section and hence splitting. Equivalently Q is injective, so every extension by it splits. The parameter argument identifies how that particular nonzero integer class becomes zero under the actual covariant Ext map.
</details>

### HA-07-10 — Projectives and splitting

Prove that if M is projective, every extension of M by any N splits, and connect this to Ext¹.

<details><summary>Hint 1</summary>
Lift id_M through the extension surjection.
</details>
<details><summary>Hint 2</summary>
The classification sends split extensions to zero.
</details>
<details><summary>Solution</summary>
Projectivity supplies a section M→E of p, so each extension is equivalent to the direct-sum extension. The classification therefore gives Ext¹(M,N)=0 for all N, consistent with the length-zero projective resolution. Conversely the previous chapter proved that this universal vanishing forces projectivity. The extension interpretation turns the derived criterion into exactly the original lifting property.
</details>

### HA-07-11 — Adding two cyclic classes

For Ext¹_Z(C₅,Z) identify the Baer sum of parameters two and four, and distinguish it from adding middle-module orders.

<details><summary>Hint 1</summary>
The parameter group is Z/5.
</details>
<details><summary>Hint 2</summary>
Add representatives, then reduce modulo five.
</details>
<details><summary>Solution</summary>
The sum is parameter six, equivalent to one modulo five. The resulting extension has relation five x=y after a compatible change of lift, and its middle group is infinite cyclic. There is no operation of adding group orders here, since these middle groups are infinite and their abstract types already fail to distinguish the nonzero parameters. The sum is defined by the endpoint-preserving pullback and kernel addition, whose class is the sum in the proved cokernel model.
</details>

### HA-07-12 — Resolution independence

Explain why restricting a projective comparison to the augmentation kernels gives the same change of obstruction as composing the lift into E.

<details><summary>Hint 1</summary>
Both constructions start from P′→P lifting id_M.
</details>
<details><summary>Hint 2</summary>
Restrict s composed with that degree-zero map along K′.
</details>
<details><summary>Solution</summary>
The degree-zero comparison sends K′ into K by the augmentation equation. Restricting the composed lift P′→P→E therefore yields i times f composed with that kernel map. This is exactly the cocycle transported by the projective comparison in the Ext quotient. Homotopic comparison choices give the same class by the previous chapter. Thus the extension correspondence uses the canonical derived identification across resolutions, rather than depending on one convenient free presentation.
</details>

## 9. Next connection

Ext¹ now classifies exact module extensions, with natural maps and Baer addition proved from projective lifts. Group cohomology next applies resolution methods to invariants and crossed homomorphisms, retaining the prescribed action needed when middle extension groups need not be abelian.
