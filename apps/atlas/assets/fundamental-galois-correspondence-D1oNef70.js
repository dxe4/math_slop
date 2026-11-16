var e=`---
parent_id: book-galois-theory
chapter_id: fundamental-galois-correspondence
title: "The Fundamental Theorem of Galois Theory"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# The Fundamental Theorem of Galois Theory

A field tower and a subgroup diagram encode the same finite Galois extension in opposite directions. The correspondence is useful because a subgroup can be easier to classify than an intermediate field. Its theorem must still recover the actual embedded field, rather than only a field of the right degree or an abstract isomorphism class.

Read the [finite fixed-field theorem](automorphism-groups-artin.md) first. Throughout this chapter $E/F$ is finite, normal and separable, and $G=\\operatorname{Gal}(E/F)$. All intermediate fields lie in this fixed copy of $E$. All automorphisms fix $F$ pointwise. Removing these hypotheses can destroy the claimed bijection, as the real cubic and purely inseparable examples in the preceding chapter showed.

## 1. The two reversing operations

For an intermediate field $F\\subseteq K\\subseteq E$, put
$$H_K=\\operatorname{Gal}(E/K).$$
For a subgroup $H\\le G$, put
$$K_H=E^H.$$

The first is a subgroup because maps fixing $K$ are closed under composition and inverse. The second is a field by the fixed-field argument. If $K\\subseteq L$, then $H_L\\subseteq H_K$. If $H\\subseteq J$, then $K_J\\subseteq K_H$. These are statements about actual containments in the chosen ambient objects.

There are two immediate containments: $K\\subseteq E^{H_K}$, since every map in $H_K$ fixes every element of $K$; and $H\\subseteq\\operatorname{Gal}(E/E^H)$ by the definition of the fixed field. Equality is the substantive content. A useful proof strategy is to establish the containments first and then compare finite degrees or group orders.

**Lemma 5.1.** For any intermediate $K$, the extension $E/K$ is finite normal separable and $|\\operatorname{Gal}(E/K)|=[E:K]$.

*Proof.* The degree is finite by the tower law. Choose a polynomial over $F$ whose splitting field is $E$, as finite normality allows. The same roots generate $E$ over $K$, since $F\\subseteq K\\subseteq E$, so $E$ is also its splitting field over $K$ and is normal over $K$. A minimal polynomial over $K$ divides the corresponding separable minimal polynomial over $F$, making $E/K$ separable. The automorphism count now gives the stated order. ∎

An intermediate field need not itself be normal over $F$. The lemma concerns the extension from that field up to $E$, which is a different inclusion in the diagram.

## 2. The finite correspondence

**Theorem 5.2 (Fundamental theorem).** The maps $K\\mapsto\\operatorname{Gal}(E/K)$ and $H\\mapsto E^H$ are inverse inclusion-reversing bijections between the intermediate fields of $E/F$ and the subgroups of $G$. They satisfy
$$[E:K]=|\\operatorname{Gal}(E/K)|,\\qquad [K:F]=[G:\\operatorname{Gal}(E/K)],$$
and, equivalently,
$$[E:E^H]=|H|,\\qquad [E^H:F]=[G:H].$$

*Proof.* First $|G|=[E:F]$ because $E/F$ is finite Galois. Artin’s theorem gives $[E:E^G]=|G|$. Since $F\\subseteq E^G$, comparison with $[E:F]$ in the tower law forces $E^G=F$.

For an intermediate $K$, Lemma 5.1 gives $|H_K|=[E:K]$. Artin gives $[E:E^{H_K}]=|H_K|$. The already known inclusion $K\\subseteq E^{H_K}$ therefore has relative degree one and is equality. Conversely, for $H\\le G$, Artin’s theorem directly gives $\\operatorname{Gal}(E/E^H)=H$. Thus both composites are identity maps. Inclusion reversal was proved above, so they are inverse reversing bijections.

The upper degree formula is Lemma 5.1 or Artin’s theorem. Dividing $[E:F]=|G|$ by it gives the lower degree formula, since the tower law and Lagrange’s theorem describe the same quotient. ∎

A degree alone does not identify a field. Two different subgroups of the same order yield fields of the same degree, and the theorem distinguishes them through pointwise fixing. That distinction will be visible in both worked field lattices below.

## 3. Conjugation and normality

**Lemma 5.3 (Conjugating a fixed field).** For $\\sigma\\in G$ and $H\\le G$,
$$\\sigma(E^H)=E^{\\sigma H\\sigma^{-1}}.$$

*Proof.* If $a$ is fixed by every $h\\in H$, then
$$(\\sigma h\\sigma^{-1})(\\sigma(a))=\\sigma(h(a))=\\sigma(a).$$
Thus $\\sigma(E^H)\\subseteq E^{\\sigma H\\sigma^{-1}}$. Apply the same inclusion with $\\sigma^{-1}$ to obtain the reverse inclusion. ∎

**Theorem 5.4 (Normal subgroups and quotient groups).** Let $K=E^H$. Then $K/F$ is normal if and only if $H$ is normal in $G$. When these conditions hold, $K/F$ is finite Galois and restriction induces an isomorphism
$$G/H\\cong\\operatorname{Gal}(K/F).$$

*Proof.* If $K/F$ is normal, every $\\sigma\\in G$ preserves $K$ as a field. The conjugation lemma and the bijective correspondence give $\\sigma H\\sigma^{-1}=H$, hence normality of $H$.

Conversely suppose $H$ is normal. The conjugation lemma gives $\\sigma(K)=K$ for every $\\sigma\\in G$. Any $F$-embedding $\\tau:K\\to\\overline F$ extends through the finite extension $E/K$ to an embedding of $E$. Normality of $E/F$ makes that extension a member of $G$. Its restriction therefore preserves $K$, so $\\tau(K)=K$. The finite embedding criterion proves $K/F$ normal. It is separable because it is a subextension of the separable extension $E/F$.

Under these conditions restriction $G\\to\\operatorname{Gal}(K/F)$ is a homomorphism. Its kernel consists exactly of maps fixing $K$ pointwise, namely $H$. It is onto: any automorphism of $K$ extends to an embedding of $E$, which normality again turns into an automorphism of $E$. The first group isomorphism theorem gives the quotient isomorphism. ∎

Without normality, restriction of a member of $G$ can send $K$ to a different subfield and need not be an automorphism of $K$. Thus writing $G/H$ for a nonnormal subgroup is not a substitute for proving this hypothesis.

## 4. Intersections and generated objects

**Proposition 5.5.** For subgroups $H,J\\le G$ and intermediate fields $K,L$,
$$E^{\\langle H,J\\rangle}=E^H\\cap E^J,\\qquad
\\operatorname{Gal}(E/KL)=\\operatorname{Gal}(E/K)\\cap\\operatorname{Gal}(E/L).$$
Consequently the subgroup generated by the fixing groups of $K$ and $L$ corresponds to $K\\cap L$, while the intersection of those groups corresponds to their compositum $KL$.

*Proof.* An element fixed by both $H$ and $J$ is fixed by any product of their elements and inverses, so is fixed by the generated subgroup. The converse follows by containment. An automorphism fixes the field generated by $K$ and $L$ exactly when it fixes each field pointwise, proving the second equality. Apply the bijection to identify the corresponding generated fields and subgroups. ∎

The generated subgroup $\\langle H,J\\rangle$ cannot always be replaced by the set product $HJ$. A product of two subgroups is a subgroup only under an additional condition such as one being normal. The lattice statement itself requires no such extra assumption.

## 5. Three worked field lattices

**Example 5.6 (Every intermediate biquadratic field).** Let $E=\\mathbb Q(u,v)$ with $u=\\sqrt2$ and $v=\\sqrt3$. It has degree four and group $G=\\{1,a,b,ab\\}\\cong C_2\\times C_2$, where $a$ negates $u$ and $b$ negates $v$. The subgroups are precisely $\\{1\\}$, $\\langle a\\rangle$, $\\langle b\\rangle$, $\\langle ab\\rangle$ and $G$: any subgroup with two distinct nonidentity elements contains their product and is the whole group.

The corresponding fields are $E$, $\\mathbb Q(v)$, $\\mathbb Q(u)$, $\\mathbb Q(uv)$ and $\\mathbb Q$, respectively. Coefficient comparison in $1,u,v,uv$ identifies these fixed fields directly. The three quadratic fields are distinct, have pairwise intersection $\\mathbb Q$, and any two generate $E$. Every subgroup is normal because $G$ is abelian, so every intermediate extension over $\\mathbb Q$ is Galois. Completeness of the subgroup list proves no further intermediate field exists.

**Example 5.7 (The cubic splitting field).** Let $\\rho=\\sqrt[3]2$, let $\\omega$ be a primitive cube root of one, and let $E=\\mathbb Q(\\rho,\\omega)$. Its degree is six. Define $r$ by $r(\\rho)=\\omega\\rho$, $r(\\omega)=\\omega$, and let $s$ be complex conjugation, fixing $\\rho$ and sending $\\omega$ to $\\omega^2$. The first is an automorphism because the cubic minimal polynomial of $\\rho$ over $\\mathbb Q(\\omega)$ has all three roots in $E$, so the embedding-extension construction gives the displayed root substitution. The degrees show that minimal polynomial has degree three. The second is an automorphism because conjugation preserves the splitting field.

They satisfy $r^3=s^2=1$ and $srs=r^{-1}$. Their action on the three cubic roots gives six distinct permutations, exhausting the automorphism count. Thus $G\\cong S_3$. Its subgroup list consists of the identity subgroup, three order-two reflection subgroups, $\\langle r\\rangle$ of order three, and $G$.

The order-three subgroup fixes $\\mathbb Q(\\omega)$, a quadratic field, because it fixes $\\omega$ and Artin’s degree formula leaves no larger field. The subgroup generated by $s$ fixes $\\mathbb Q(\\rho)$, since it fixes $\\rho$ and its fixed field has degree three. Its two conjugate subgroups fix the other two cubic root fields $\\mathbb Q(\\omega\\rho)$ and $\\mathbb Q(\\omega^2\\rho)$. These three cubic fields are distinct and nonnormal over $\\mathbb Q$, since their subgroups are distinct and nonnormal in $S_3$. The ambient extension $E/\\mathbb Q$ remains normal. The example separates these two normality questions explicitly.

**Example 5.8 (One quadratic field in a cyclic quartic).** Let $\\zeta$ be a primitive fifth root of unity and $E=\\mathbb Q(\\zeta)$. Its polynomial $\\Phi_5(x)=x^4+x^3+x^2+x+1$ is irreducible: after replacing $x$ by $x+1$ it becomes $x^4+5x^3+10x^2+10x+5$, Eisenstein at five. Its four roots are powers of $\\zeta$ already in $E$, so the field is normal and separable of degree four.

The automorphism $\\sigma(\\zeta)=\\zeta^2$ has order four, as successive exponents are $1,2,4,3,1$ modulo five. Thus the group is cyclic of order four and has exactly one proper nontrivial subgroup, $\\langle\\sigma^2\\rangle$. This subgroup fixes $y=\\zeta+\\zeta^{-1}$. The relation $1+\\zeta+\\zeta^2+\\zeta^3+\\zeta^4=0$ gives $y^2+y-1=0$, which is irreducible over $\\mathbb Q$. Hence $\\mathbb Q(y)=\\mathbb Q(\\sqrt5)$ is quadratic and is exactly that subgroup's fixed field. The group classification proves it is the unique quadratic intermediate field, unlike the three quadratic fields of the biquadratic example.

## 6. Automorphisms of a nonnormal intermediate field

The quotient theorem has a useful refinement when $K/F$ is not normal. Some elements of $G$ still preserve $K$ as a set, and their restrictions account for its automorphisms.

**Theorem 5.9 (The normalizer formula).** If $K=E^H$, let
$$N_G(H)=\\{\\sigma\\in G:\\sigma H\\sigma^{-1}=H\\}.$$
Then restriction induces
$$\\operatorname{Aut}_F(K)\\cong N_G(H)/H.$$

*Proof.* The conjugation lemma and the correspondence show that $\\sigma(K)=K$ exactly when $\\sigma$ normalises $H$. Hence restriction is defined on $N_G(H)$ and has kernel $H$, the subgroup fixing $K$ pointwise. Any $F$-automorphism of $K$ extends to an embedding of $E$ into an algebraic closure. Since $E/F$ is normal, the extension belongs to $G$; since its restriction maps $K$ onto itself, it lies in $N_G(H)$. Restriction is therefore surjective onto $\\operatorname{Aut}_F(K)$. Finally $H$ is normal in its normalizer by definition, so the quotient is a group and the first isomorphism theorem applies. ∎

For $K=\\mathbb Q(\\rho)$ in the cubic splitting field, $H$ is the subgroup generated by the transposition fixing the real root. Its normalizer in $S_3$ is just $H$: a normalizing permutation must conjugate that transposition to itself, so it preserves its pair of moved letters and fixes the remaining letter. Thus $N_G(H)/H$ is trivial, recovering the absence of nonidentity rational automorphisms of the real cubic field.

For a normal intermediate extension the normalizer is the whole group, recovering $G/H$ from Theorem 5.4. The refined formula therefore locates exactly what changes when normality is missing: only the setwise stabiliser of the field can be restricted to automorphisms of that same field. Other elements of $G$ give isomorphisms to different conjugate subfields. The formula does not enlarge those maps into automorphisms of the original embedded field.

## Exercises

### Exercise 5.1 — The original base
<a id="galois-correspondence-ex-1"></a>

Prove E^G=F by comparing degrees, naming the containment used.

<details>
<summary>Hint</summary>

Every member of G fixes F; apply Artin and the finite Galois automorphism count.

</details>

<details>
<summary>Solution</summary>

F⊆E^G because G consists of F-automorphisms. Artin gives [E:E^G]=|G|, while the Galois hypotheses give |G|=[E:F]. Thus the tower law yields [E^G:F]=1, and E^G=F. Equal extension degrees alone would not identify unrelated subfields; the containment is essential.

</details>

### Exercise 5.2 — Relative Galois extension
<a id="galois-correspondence-ex-2"></a>

Explain why E/K is Galois for every intermediate K, even if K/F is not normal.

<details>
<summary>Hint</summary>

Use the same splitting polynomial over the larger base and divide separable minimal polynomials.

</details>

<details>
<summary>Solution</summary>

E is the splitting field of a polynomial over F, and over K the same roots still generate E. Thus E/K is normal. For α∈E, its minimal polynomial over K divides its separable minimal polynomial over F, hence is separable. Finite degree follows from the tower law. These properties concern E/K and impose no normality condition on K/F. In the cubic splitting example, E/Q(ρ) is Galois of degree two while Q(ρ)/Q is not normal.

</details>

### Exercise 5.3 — A degree dictionary
<a id="galois-correspondence-ex-3"></a>

If |G|=60 and |H|=12, find [E:E^H] and [E^H:F]. Does the calculation establish that E^H/F is normal?

<details>
<summary>Hint</summary>

Use order for the upper degree, index for the lower; normality needs conjugation.

</details>

<details>
<summary>Solution</summary>

Artin gives [E:E^H]=12. The tower law gives [E^H:F]=60/12=5. These numbers do not establish normality: H must also be normal in G. Subgroups of the same order can have different conjugation behavior in different groups, and degree five alone supplies no normality proof.

</details>

### Exercise 5.4 — Equal degree is not equality
<a id="galois-correspondence-ex-4"></a>

Give three distinct intermediate fields with the same degree in one finite Galois extension.

<details>
<summary>Hint</summary>

Use the three order-two subgroups in the biquadratic example.

</details>

<details>
<summary>Solution</summary>

In Q(√2,√3)/Q the fields Q(√2), Q(√3) and Q(√6) are all quadratic. They correspond to the three distinct subgroups of order two and are therefore distinct by the bijection. Directly, the basis 1,√2,√3,√6 shows that no one of these square roots belongs to either of the other quadratic spans. Equal degree gives equal subgroup orders, not equal subgroups or fields.

</details>

### Exercise 5.5 — Restriction kernel
<a id="galois-correspondence-ex-5"></a>

When K/F is normal, identify the kernel of G→Gal(K/F) and prove restriction is onto.

<details>
<summary>Hint</summary>

A kernel element fixes K pointwise. Extend a K-automorphism through E and use E/F normal.

</details>

<details>
<summary>Solution</summary>

Normality of K/F ensures every σ∈G maps K to itself, so restriction is defined as an automorphism of K. Its kernel is exactly the subgroup fixing every element of K, namely Gal(E/K). Any F-automorphism of K extends to an F-embedding of E into an algebraic closure by the finite extension lemma. Because E/F is normal, that extension maps E onto itself and is in G. Its restriction is the prescribed map, proving surjectivity.

</details>

### Exercise 5.6 — A nonnormal subgroup
<a id="galois-correspondence-ex-6"></a>

In the cubic splitting field, explain why the fixed field of a transposition subgroup is not normal over Q.

<details>
<summary>Hint</summary>

Conjugation by a three-cycle changes the transposition subgroup.

</details>

<details>
<summary>Solution</summary>

In S₃, conjugating (12) by (123) gives (23), so ⟨(12)⟩ is not normal. The normal-subgroup theorem then makes its degree-three fixed field nonnormal over Q. For the real transposition, that field is Q(ρ), which also fails normality directly because x³−2 has one real root there and two nonreal roots outside it. The containing splitting field is normal, but an intermediate extension need not be.

</details>

### Exercise 5.7 — An intersection field
<a id="galois-correspondence-ex-7"></a>

In Q(√2,√3), determine Q(√2)∩Q(√3) and their compositum using fixing groups.

<details>
<summary>Hint</summary>

The two distinct order-two subgroups generate the whole Klein four-group and intersect trivially.

</details>

<details>
<summary>Solution</summary>

The fixing subgroups are ⟨b⟩ and ⟨a⟩. Their generated subgroup is G, whose fixed field is Q, so the field intersection is Q. Their intersection is the identity subgroup, whose fixed field is E, so the compositum is all of Q(√2,√3). Both conclusions also follow by comparing coefficients in the basis, but the group calculation proves the lattice reversal directly.

</details>

### Exercise 5.8 — Why a set product is insufficient
<a id="galois-correspondence-ex-8"></a>

For H=⟨(12)⟩ and J=⟨(23)⟩ in S₃, show HJ is not a subgroup and compute ⟨H,J⟩.

<details>
<summary>Hint</summary>

List the four products. A subgroup order must divide six.

</details>

<details>
<summary>Solution</summary>

HJ={1,(12),(23),(123)}, using right-to-left composition. It has four elements, so Lagrange rules out being a subgroup of S₃. The generated subgroup includes both transpositions and their products; conjugating one by the other also supplies (13), so all transpositions are present and they generate S₃. Thus ⟨H,J⟩=S₃. Their fixed fields intersect in Q; using HJ as though it were a subgroup would not express a valid correspondence.

</details>

### Exercise 5.9 — A cyclic quartic lattice
<a id="galois-correspondence-ex-9"></a>

List every intermediate degree in Q(ζ₅)/Q and explain why there is only one field of each listed degree.

<details>
<summary>Hint</summary>

Classify subgroups of a cyclic group of order four.

</details>

<details>
<summary>Solution</summary>

C₄ has exactly the subgroups {1}, ⟨σ²⟩ and C₄, of orders one, two and four. Their fixed fields have degrees four, two and one over Q. They are Q(ζ₅), Q(√5) and Q, respectively. A cyclic group has exactly one subgroup for each divisor of its order: for order four this follows by checking whether a subgroup contains a generator, the unique element of order two, or neither. The correspondence therefore gives exactly one field of each listed degree.

</details>

### Exercise 5.10 — A forbidden intermediate degree
<a id="galois-correspondence-ex-10"></a>

Can a finite Galois extension of degree twelve have an intermediate field of degree five? Give two compatible reasons.

<details>
<summary>Hint</summary>

Compare the tower law with the index formula.

</details>

<details>
<summary>Solution</summary>

No. The tower law would give 12=[E:K]·5, impossible for an integer relative degree. Equivalently, the fixing subgroup would have index five in a group of order twelve, so would need order 12/5, also impossible. The reasons are two translations of the same degree/order dictionary. They rule out the field without needing to classify the full group.

</details>

### Exercise 5.11 — Galois intermediate fields in an abelian extension
<a id="galois-correspondence-ex-11"></a>

If G is abelian, prove every intermediate extension K/F is Galois. Must K be the fixed field of a cyclic subgroup?

<details>
<summary>Hint</summary>

Every subgroup of an abelian group is normal, but need not be cyclic.

</details>

<details>
<summary>Solution</summary>

For H=Gal(E/K), abelianity makes H normal, so the normal-subgroup theorem gives K/F normal. Separability and finiteness are inherited, proving it Galois. There is no cyclicity requirement on H. For instance in a multiquadratic extension with group C₂×C₂×C₂, a subgroup generated by two independent sign changes is a noncyclic Klein four-group, but its quadratic fixed field is still Galois over the base. Normality, rather than cyclicity, controls this conclusion.

</details>

### Exercise 5.12 — Recover the embedded field
<a id="galois-correspondence-ex-12"></a>

Let K,L be intermediate fields with Gal(E/K)=Gal(E/L). Prove K=L and explain why abstractly isomorphic fixing groups would not suffice.

<details>
<summary>Hint</summary>

Take the fixed field of the actual common subgroup. Revisit the three quadratic subfields.

</details>

<details>
<summary>Solution</summary>

The correspondence gives K=E^Gal(E/K) and L=E^Gal(E/L). Equality of the embedded subgroups makes these fixed sets equal, so K=L. Abstract isomorphism only identifies group structure; it does not specify which automorphisms act. The three order-two subgroups of a biquadratic group are all abstractly C₂ but fix three different quadratic fields. Thus the theorem classifies actual subgroups in G and actual subfields in E, rather than isomorphism classes alone.

</details>

## Summary

The finite Galois correspondence identifies intermediate fields with actual automorphism subgroups and reverses containment. Degrees become subgroup orders and indices; field composita become subgroup intersections. Normal intermediate extensions correspond exactly to normal subgroups, and restriction then produces quotient Galois groups. The next chapter uses these results to compute concrete root permutation groups instead of inferring them from polynomial degree alone.
`;export{e as default};