
# Capstone: Categorical Proofs

This project studies one construction from several categorical directions: the elements of an abelian group killed by a fixed integer. Its representable description classifies natural operations; two adjunctions explain its exactness behaviour; a Chinese-remainder decomposition supplies natural projections. A final counterexample shows why matching objectwise group structures is weaker than a natural isomorphism.

Read [Yoneda](yoneda-lemma.md), [adjunctions](adjunctions.md), [monads](monads-algebras.md) and abelian-group quotients from the algebra book. Fix an integer n≥2. All groups in this chapter are abelian and written additively. Ab_n is the full subcategory of Ab consisting of groups B with nB=0, and I is its inclusion. No complexes, resolutions or spectral sequences are assumed. The retained earlier advanced categorical project has its own source and scope; this new capstone uses only the categorical methods actually developed here.

## 1. The construction and its arrow action

For A∈Ab define T_n(A)=A[n]={a∈A:na=0}. This is a subgroup: sums and negatives remain killed by n. A homomorphism f:A→B restricts to a homomorphism T_n(f):A[n]→B[n] because nf(a)=f(na)=0. Restrictions preserve identities and composites, so T_n is a functor Ab→Ab_n.

There is another functor L_n(A)=A/nA, also with values in Ab_n. A homomorphism induces a quotient map [a]↦[f(a)], well-defined because f sends nA into nB. Its identity and composition laws follow on every coset representative. The quotient and subgroup constructions have different arrow formulas, although finite examples can give isomorphic groups.

For the rest of the project distinguish the Ab_n-valued functors from their underlying-set versions. Representability below concerns a Set-valued functor on Ab, while an algebraic natural transformation must additionally have homomorphism components. We will prove when the set-valued classification already supplies that extra property.

## 2. A cyclic group represents torsion elements

Let C_n=Z/nZ, with its distinguished class of one. A homomorphism C_n→A is determined by the image a of that class, and the relation requires na=0. Conversely any such a defines [k]↦ka, independent of representative because n kills a. Thus
$$\operatorname{Hom}_{\mathbf{Ab}}(C_n,A)\cong U(A[n]).$$
This is natural in A: postcomposition with f sends the selected element a to f(a), exactly the action of the torsion functor. The universal element is the class of one in C_n, which itself is killed by n.

Covariant Yoneda now classifies all natural endomorphisms of this underlying-set functor by elements of C_n. If the universal element maps to [k], the component at A must send a to ka: apply naturality to the homomorphism selecting a. Conversely multiplication by k commutes with every homomorphism and preserves n-torsion. Different residues give different operations at C_n, and integers differing by a multiple of n act identically on every A[n].

Each classified operation is a group homomorphism on A[n], so the same list also classifies the algebraic natural endomorphisms of T_n. This is a conclusion in this example, not an automatic property of Set-valued natural transformations in arbitrary algebraic categories.

A natural operation is invertible exactly when k is a unit modulo n. If gcd(k,n)=1, Bézout gives an integer l with lk congruent to one modulo n, and multiplication by l is a natural inverse on every A[n]. Conversely its component on C_n must be bijective, forcing the class of k to generate that cyclic group. Thus natural automorphisms are indexed precisely by the units of Z/nZ.

## 3. Two adjunctions around one inclusion

**Theorem 13.1.** There are adjunctions L_n⊣I⊣T_n.

*Proof.* For B∈Ab_n, every homomorphism A→IB kills nA because f(na)=nf(a)=0. It therefore factors uniquely through A/nA. Conversely every map from the quotient composes to a map A→IB. Coset evaluation proves the assignments inverse and natural, giving L_n⊣I.

Every map IB→A has image in A[n], since every source element is killed by n. Restricting its codomain gives a unique map B→T_nA, and inclusion gives the inverse construction. These assignments are natural by restriction and composition, proving I⊣T_n. ∎

For the first adjunction, the unit is the quotient A→A/nA and the counit at B is its canonical quotient isomorphism, since nB=0. For the second, the unit identifies B with B[n], and the counit is inclusion A[n]→A. These formulas verify which comparison is invertible and fit the full-faithfulness of I on both sides.

The composite I L_n is an idempotent monad on Ab. Quotienting A/nA again changes nothing, so its multiplication is an isomorphism. Its algebras identify with the full subcategory of groups already killed by n, in agreement with the idempotent-monad theorem. The dual subgroup construction is idempotent too: taking n-torsion inside an already n-torsion group returns that group. The two constructions nevertheless need not agree on a general A.

## 4. Limits, colimits and a precise exactness boundary

Ab_n has small limits and colimits computed in Ab. For limits, use the subgroup of the objectwise product satisfying compatibility; multiplying each coordinate by n gives zero, so the subgroup is still killed by n. For colimits, use the quotient of the direct sum by the diagram relations. That direct sum is killed by n, hence so is its quotient. The same mapping proofs work in the full subcategory. Thus I preserves these constructions.

The right adjoint T_n preserves limits, including kernels. The left adjoint L_n preserves colimits, including cokernels. The opposite preservation need not hold.

**Worked example 13.2.** Start with the exact sequence from Z into Z by multiplication by n, followed by reduction to C_n. Taking T_n gives zero, zero and C_n. The last map is not onto, so T_n does not preserve this cokernel. Taking L_n gives C_n, C_n and C_n, with maps zero and identity. It has the required cokernel behaviour, but its first map is not injective, so L_n has not preserved the original kernel inclusion. Both failures hold for every n≥2.

These are proofs using the specified maps, not just comparisons of group sizes. They show exactly where the two adjoints lose information. The names left and right refer to the hom-set correspondence; exactness requires specifying which limits or colimits a functor preserves.

For finitely generated A, an abelian-group decomposition makes the object values concrete. A free integer summand contributes zero to T_n and C_n to L_n. A cyclic summand of order d contributes a cyclic group of order gcd(d,n) to each. The torsion subgroup is generated by the class of d divided by that gcd, while the quotient is reduction modulo the gcd. These formulas use the chosen cyclic generators and do not assert naturality of an identification between the two outputs.

## 5. Objectwise equality of types does not give naturality

**Worked example 13.3.** Restrict the source category to finite abelian groups. Classification shows T_n(A) and L_n(A) are isomorphic for every object A, since their cyclic summands have the same orders. Nevertheless the two functors are not naturally isomorphic.

Take q:C_(n²)→C_n to be reduction. The n-torsion of C_(n²) consists of multiples of n, so T_n(q) is the zero map. But L_n(q) is an isomorphism: after quotienting by n-times elements, both source and target are canonically C_n and q is identity on the residue of one. If α:T_n⇒L_n were a natural isomorphism, its square for q would have zero on the side containing T_n(q) and an isomorphism on the side containing L_n(q) and the invertible source component. Since C_n is nonzero, that is impossible.

For n=2, this is the elementary map C₄→C₂: the element two in the source kernel maps to zero, while its quotient generator maps to the nonzero target generator. The example proves failure for every possible family of objectwise isomorphisms, not merely for one inconvenient choice of generators. Naturality imposes information about arrows that is absent from an invariant-factor list.

## 6. A natural Chinese-remainder decomposition

**Worked example 13.4.** Put n=12. For every A, define
$$A[12]\longrightarrow A[3]\oplus A[4],\qquad
 a\longmapsto(4a,9a).$$
The first output is killed by three and the second by four. The inverse sends (u,v) to u+v, which is killed by twelve. Applying the inverse after the displayed map gives thirteen times a, equal to a because twelve kills it. In the other order, four fixes u and kills v, while nine kills u and fixes v, using their respective torsion relations. Hence these are inverse homomorphisms.

They are natural: every homomorphism commutes with multiplication by four and nine and with addition. The coefficients are orthogonal selectors modulo twelve: each is idempotent, their product is zero and their sum is one modulo twelve. Thus the same CRT arithmetic constructs a decomposition of a whole functor, rather than merely of the particular cyclic group C₁₂.

For general coprime r,s, choose selectors e_r equal to one modulo r and zero modulo s, and e_s with the reverse residues. On A[rs], their actions give a natural isomorphism to A[r]⊕A[s], with inverse addition. The Bézout/CRT equations make every composite identity exactly as in the worked case. Changing an integer selector by a multiple of rs changes no component, so the natural maps depend on its residue, not on an arbitrary integer representative.

The natural-endomorphism classification predicts these projections: they are the idempotents in the residue ring. This connects a universal element, its scalar operations and an object decomposition with one consistent set of maps.

## 7. The project dossier

Prepare a proof dossier for a fixed n and a selection of finite abelian groups and homomorphisms. Include the definition of both functors on maps, the representing cyclic group with its universal element, both adjunction correspondences, and a preservation statement with its hypothesis. Every displayed arrow must have a source and target.

The dossier should contain a positive and a negative naturality result. A CRT decomposition supplies the positive one, with explicit selector coefficients. The reduction C_(n²)→C_n supplies the negative one, proving no natural isomorphism between the two finite-group functors can exist. State why componentwise group isomorphisms do not answer that second question.

For each universal claim, record its existence formula and uniqueness argument separately. For example, selecting an n-torsion element gives a homomorphism from C_n, while the cyclic generator makes that homomorphism unique. In an adjunction, the restriction or quotient formula gives one direction and the factorisation equation proves its inverse. These are mathematical certificates of the claims; no executable checker or observed program output replaces them.

The capstone is complete when its diagrams commute by the stated equations and its noncommuting candidate is disproved by the explicit reduction map. It is not a claim of independent review or a graded learner result. The exercises below develop all the required arguments with staged support.

## 8. Exercises

### CAT-13-01 — A cyclic torsion group

Compute A[6] for A=C₁₈, identifying its actual elements and a generator.

<details><summary>Hint 1</summary>
Solve 6a congruent to zero modulo eighteen.
</details>
<details><summary>Hint 2</summary>
The residue a must be divisible by three.
</details>
<details><summary>Solution</summary>
The elements are the residues zero, three, six, nine, twelve and fifteen. They form the cyclic subgroup generated by three, which has order six. The condition follows because eighteen divides six a exactly when three divides a. Thus A[6] is abstractly C₆, but the inclusion into C₁₈ is the map sending its chosen generator to three, not to one. Retaining that inclusion is necessary when comparing later maps.
</details>

### CAT-13-02 — A representing map

For a∈A[n], prove that [k]↦ka defines the unique homomorphism C_n→A selecting a.

<details><summary>Hint 1</summary>
Two representatives differ by a multiple of n.
</details>
<details><summary>Hint 2</summary>
The class of one generates the entire source.
</details>
<details><summary>Solution</summary>
If k′−k is a multiple of n, then (k′−k)a=0, proving representative independence. Addition of residue classes maps to addition of the corresponding multiples, so it is a homomorphism. Every residue is an integer multiple of one, and a homomorphism must preserve such multiples. Hence its value at one forces its value everywhere, proving uniqueness. These are the existence and uniqueness clauses of the representation.
</details>

### CAT-13-03 — Natural automorphisms for twelve

List the natural automorphisms of T₁₂ and give each inverse multiplier.

<details><summary>Hint 1</summary>
Use the units modulo twelve.
</details>
<details><summary>Hint 2</summary>
Square each of the four candidate residues.
</details>
<details><summary>Solution</summary>
The unit residues are one, five, seven and eleven. Their squares are all one modulo twelve, so each operation is its own inverse on every group killed by twelve. Every other residue fails to generate C₁₂ and therefore cannot give an invertible component there. Yoneda's classification shows that no additional natural automorphisms are missed by considering these scalar operations.
</details>

### CAT-13-04 — Restriction adjunction

For B killed by n and f:B→A, prove that f factors uniquely through A[n] as a homomorphism.

<details><summary>Hint 1</summary>
Compute n times f(b).
</details>
<details><summary>Hint 2</summary>
The factor map has the same values with a smaller codomain.
</details>
<details><summary>Solution</summary>
We have nf(b)=f(nb)=0, so every value lies in A[n]. Restricting the codomain gives a homomorphism B→A[n] whose composite with inclusion is f. The inclusion is injective, so no other factor can have different values. This gives one adjunction direction, and composing any homomorphism B→A[n] with inclusion gives the inverse direction. Restriction commutes with maps of both groups, proving naturality.
</details>

### CAT-13-05 — Quotient adjunction

For B killed by n and f:A→B, prove the unique factorisation through A/nA and identify its formula.

<details><summary>Hint 1</summary>
Every n-multiple belongs to the kernel.
</details>
<details><summary>Hint 2</summary>
Use coset representatives and the quotient map's surjectivity.
</details>
<details><summary>Solution</summary>
Since f(na)=nf(a)=0, the subgroup nA is killed. Define the factor on a+nA by f(a). Changing representatives adds an n-multiple and hence does not change the value. It preserves addition and composes with the quotient to f. Every coset has a representative, so this equation determines the map uniquely. This is the other adjunction and differs from restricting a map's image to a subgroup.
</details>

### CAT-13-06 — Exactness failure

Apply T₂ to the exact sequence Z→Z→C₂ with first map multiplication by two. Which preservation fails?

<details><summary>Hint 1</summary>
The integers have no nonzero elements killed by two.
</details>
<details><summary>Hint 2</summary>
Every element of C₂ is killed by two.
</details>
<details><summary>Solution</summary>
The resulting three groups are zero, zero and C₂, with zero maps. The final map is not onto and cannot be the cokernel of the first zero-to-zero map, whose cokernel is zero. Thus T₂ fails to preserve that cokernel. It remains a right adjoint preserving limits, so no contradiction occurs. The failure is about the outgoing universal quotient, not about kernels.
</details>

### CAT-13-07 — The reduction square

For n=3, describe T₃ and L₃ on q:C₉→C₃ and prove the natural-isomorphism obstruction directly.

<details><summary>Hint 1</summary>
The source torsion consists of multiples of three.
</details>
<details><summary>Hint 2</summary>
The quotient map after dividing by three-times elements still sends one to one.
</details>
<details><summary>Solution</summary>
T₃(C₉) is {0,3,6}, and reduction sends all three to zero in C₃. Hence T₃(q)=0. The quotient C₉/3C₉ is C₃, and L₃(q) identifies it isomorphically with C₃. A natural isomorphism would make this isomorphism composed with an invertible source component equal to a zero map. Since the groups are nonzero, that is impossible. The contradiction rules out every componentwise choice at once.
</details>

### CAT-13-08 — Verify selectors

Prove multiplication by four and nine gives the two complementary projections on A[12].

<details><summary>Hint 1</summary>
Compute their squares, product and sum modulo twelve.
</details>
<details><summary>Hint 2</summary>
A multiple of twelve acts as zero on this group.
</details>
<details><summary>Solution</summary>
Four squared differs from four by twelve, and nine squared differs from nine by seventy-two, so both actions are idempotent. Their product is thirty-six and acts as zero. Their sum is thirteen and acts as identity. The images are killed by three and four respectively. Conversely four fixes every element killed by three and nine fixes every element killed by four, so the images are exactly those subgroups. The projection equations and addition then prove the direct-sum decomposition.
</details>

### CAT-13-09 — A general coprime decomposition

For n=rs with gcd(r,s)=1, prove A[r]∩A[s]=0 and show every element of A[rs] is a sum from those subgroups.

<details><summary>Hint 1</summary>
Use a Bézout combination for one.
</details>
<details><summary>Hint 2</summary>
Choose selector residues with the two required congruences.
</details>
<details><summary>Solution</summary>
An element killed by both r and s is killed by every integer combination of them, including one, so it is zero. Choose selectors e_r,e_s with sum one modulo rs, with e_r divisible by s and e_s divisible by r. Then e_ra is killed by r and e_sa by s, and their sum is a for a∈A[rs]. The trivial intersection makes this sum unique. The integer-multiple formulas commute with every homomorphism, so the decomposition is natural.
</details>

### CAT-13-10 — Idempotent reflection

Explain why the monad A↦A/nA is idempotent and identify the groups on which its unit is invertible.

<details><summary>Hint 1</summary>
The quotient is already killed by n.
</details>
<details><summary>Hint 2</summary>
The unit's kernel is nA.
</details>
<details><summary>Solution</summary>
The subgroup of n-multiples in A/nA is zero, so applying the quotient again gives the same group canonically. The monad multiplication is therefore invertible. The unit A→A/nA is always onto and is injective exactly when nA=0. Thus its fixed full subcategory is Ab_n, matching the algebras of the idempotent monad. This does not identify the separate subgroup construction with the quotient functor.
</details>

### CAT-13-11 — A free summand distinguishes functors

Compute T_n(Z⊕C_d) and L_n(Z⊕C_d), and explain why they cannot be naturally isomorphic on all abelian groups.

<details><summary>Hint 1</summary>
The free summand contributes differently.
</details>
<details><summary>Hint 2</summary>
It already suffices to evaluate on Z alone.
</details>
<details><summary>Solution</summary>
The torsion value is C_gcd(d,n), while the quotient value is C_n⊕C_gcd(d,n). The free integer direction has no n-torsion but has a nonzero quotient modulo n. On Z alone, the two outputs are zero and C_n, which are not isomorphic for n≥2. Thus even objectwise isomorphism fails on all Ab. Restriction to finite groups removes that simple obstruction but still leaves the arrow-based obstruction proved in the chapter.
</details>

### CAT-13-12 — What the certificate contains

List the data needed to prove a proposed functorial decomposition is natural, beyond matching the orders of its finite group values.

<details><summary>Hint 1</summary>
There must be actual component homomorphisms with actual inverses.
</details>
<details><summary>Hint 2</summary>
Every source homomorphism supplies a naturality square.
</details>
<details><summary>Solution</summary>
Specify each component's source, target and formula, prove it is a homomorphism, construct its inverse and verify both composite equations. Then prove the naturality equation for an arbitrary source homomorphism, using its actual action on elements or a universal property. Matching finite orders or invariant factors proves none of those equations by itself. The CRT selector formulas provide such a complete positive certificate, while the reduction map supplies a negative certificate against the unrelated torsion/quotient identification.
</details>

## 9. Further routes

The capstone finishes the introductory route with complete universal and naturality proofs. Continue through the monoidal and abelian navigation readings to the retained sources and their later expanded books. The original advanced spectral-sequence project remains a separate reading requiring complexes, derived functors and the stated acyclicity hypotheses; it is not silently used as preparation for this first categorical course.
