var e=`---
parent_id: book-algebraic-topology-chains-spaces
chapter_id: coefficients-and-kunneth
title: "Coefficients, Universal Coefficients and Kunneth"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Coefficients, Universal Coefficients and Kunneth

Changing coefficients can destroy a boundary map or make it invertible. A torsion class can disappear, while a new class appears one degree higher. The universal coefficient theorem states exactly how this happens. Kunneth organizes a related phenomenon for tensor products and products of spaces.

We prove the algebraic statements with their hypotheses visible. Throughout R is a principal ideal domain, C and D are nonnegative chain complexes of free R-modules, and G is any R-module. The general natural exact sequences require no finite generation. For the elementary proof of a splitting of Kunneth we impose bounded finite free complexes. The finite-CW product theorem consequently has a full proof here. Broader product comparisons are explained separately, rather than assumed from a product of group ranks.

The algebraic input is that a submodule of a free module over a PID is free. In the finite-rank case this is the same elimination underlying Smith normal form. It extends to arbitrary rank by ordering a free basis, selecting generators of successive leading-coefficient ideals, and reducing finite-support elements. Freeness of cycles and boundaries is precisely where the PID hypothesis enters.

## 1. Presentations define Tor and Ext

Every R-module M has a free presentation
$0\\to E\\xrightarrow{j}F\\to M\\to0,$
with E also free over a PID. Define
$\\operatorname{Tor}_1^R(M,G)=\\ker(E\\otimes G\\to F\\otimes G),$
$\\operatorname{Ext}^1_R(M,G)=
\\operatorname{coker}(\\operatorname{Hom}(F,G)\\to\\operatorname{Hom}(E,G)).$
The maps are induced by j.

These groups are independent of the chosen free presentation. Given a map of presented modules, lift its action to F by lifting each free basis vector to the other presentation. The restriction of that lift to E lands in the other E. Two such lifts differ by a map through the other E; this is a chain homotopy between their two-term resolution maps. Tensoring or applying Hom carries it to a chain homotopy, so the induced kernel or cokernel map is independent of the lift. Comparing presentations in both directions gives inverse canonical identifications.

For M=R/(a), a nonzero, use the resolution R--a→R. It gives
$R/(a)\\otimes G=G/aG,\\qquad
\\operatorname{Tor}_1(R/(a),G)=\\{g:ag=0\\},$
$\\operatorname{Ext}^1(R/(a),G)=G/aG.$
Free M has zero Tor and Ext, because it has the presentation with E=0. These explicit formulas will account for every cyclic example below.

## 2. Splitting chains, not homology by wishful thinking

Write Z_n=ker d_n and B_n=im d_{n+1}. There is a short exact sequence
$0\\to Z_n\\to C_n\\xrightarrow{d}B_{n-1}\\to0.$
Since B_{n-1} is free, choose one lift in C_n for each basis vector. This gives a module splitting
$C_n\\cong Z_n\\oplus B_{n-1}.$
In these coordinates the differential sends the second summand by its actual inclusion into Z_{n-1} and kills the first.

Thus the complex is a direct sum, degree by degree, of two-term free resolutions
$B_n\\longrightarrow Z_n$
in degrees n+1 and n, with cokernel H_n(C). This splitting is not canonical. It does not assert that B_n is a direct summand of Z_n: that would incorrectly force homology to be torsion-free. Only the different sequence with quotient B_{n-1} was split.

## 3. Universal coefficients in homology

**Theorem 13.1.** There is a natural exact sequence
$0\\to H_n(C)\\otimes G\\to H_n(C\\otimes G)
\\to\\operatorname{Tor}_1(H_{n-1}(C),G)\\to0.$
It splits as R-modules, in general without a splitting natural in C.

*Proof.* In the chosen decomposition C_n=Z_n direct-sum B_{n-1}, tensoring gives a complex whose degree-n homology has two contributions:
$\\operatorname{coker}(B_n\\otimes G\\to Z_n\\otimes G)$
and
$\\ker(B_{n-1}\\otimes G\\to Z_{n-1}\\otimes G).$
The first is H_n(C) tensor G by right exactness; the second is Tor by its defining free presentation. This proves a noncanonical direct-sum isomorphism.

The exact sequence itself does not depend on those choices. Its left map sends a cycle tensored with g to its tensor-chain class. Its right map uses the canonical quotient C_n→B_{n-1}; a tensor cycle maps into the displayed kernel, and boundaries map to zero. Exactness follows from the two summand calculation. All those defining maps commute with chain maps, proving naturality. $\\square$

Singular chains over R are free, so this theorem applies to arbitrary spaces with R-coefficients. For the integral version take R=Z. The Tor term belongs to the preceding homology degree; putting it in the same degree is a common indexing error.

## 4. Universal coefficients in cohomology

Let C^n=Hom_R(C_n,G), with delta phi=phi d.

**Theorem 13.2.** There is a natural exact sequence
$0\\to\\operatorname{Ext}^1_R(H_{n-1}(C),G)
\\to H^n(\\operatorname{Hom}(C,G))
\\to\\operatorname{Hom}_R(H_n(C),G)\\to0,$
again split without a generally natural choice in C.

*Proof.* Apply Hom to the same degreewise splitting. A cocycle restricts to a homomorphism on Z_n that kills B_n, hence to H_n. Conversely any homomorphism H_n→G extends from Z_n to C_n using the chosen split complement, so the restriction map is surjective.

A cohomology class restricting to zero on Z_n is represented by a map on the B_{n-1} complement. Changing it by a coboundary changes that map by the restriction of a homomorphism Z_{n-1}→G. The quotient is
$\\operatorname{coker}\\bigl(
\\operatorname{Hom}(Z_{n-1},G)\\to
\\operatorname{Hom}(B_{n-1},G)\\bigr),$
which is Ext from the presentation of H_{n-1}. The splitting constructs the direct-sum description, while restriction to cycles and the presentation comparison prove naturality of the exact sequence. $\\square$

If all chains are taken over a field F, every vector subspace splits and Ext vanishes in that category, giving H^n≈Hom_F(H_n,F). This is not the same statement as inserting the additive group F into the integral theorem. For example Ext_Z(Z/2,F2)=F2. Nor does a dual vector space canonically equal the original one.

## 5. The algebraic Kunneth sequence

The total tensor differential is
$d(c\\otimes e)=dc\\otimes e+(-1)^{|c|}c\\otimes de.$
Its square is zero: the two mixed terms have opposite signs and the two squares vanish.

**Theorem 13.3.** For the free nonnegative PID complexes specified above there is a natural exact sequence
$0\\to\\bigoplus_{p+q=n}H_p(C)\\otimes H_q(D)
\\to H_n(C\\otimes D)
\\to\\bigoplus_{p+q=n-1}\\operatorname{Tor}_1(H_p(C),H_q(D))
\\to0.$

*Proof.* Regard Z(C) as the graded cycle modules with zero differential, and the quotient Q_n=C_n/Z_n≈B_{n-1} likewise with zero differential. The sequence
$0→Z(C)→C→Q→0$
is degreewise split. Tensoring with D and totalizing therefore remains short exact in each degree.

Since each Z_p and B_p is free, tensoring it commutes with homology. Hence
$H_n(Z(C)\\otimes D)=
\\bigoplus_{p+q=n}Z_p(C)\\otimes H_q(D),$
and
$H_n(Q\\otimes D)=
\\bigoplus_{p+q=n-1}B_p(C)\\otimes H_q(D).$
The connecting map of the tensor sequence is the inclusion B_p→Z_p tensored with identity. To see this, lift b tensor z to c tensor z with dc=b and dz=0; its boundary is b tensor z.

The long exact sequence thus puts H_n(C tensor D) between the cokernel of those inclusions in total degree n and their kernel in total degree n-1. The former is the displayed tensor sum by right exactness; the latter is the displayed Tor sum by the free presentations B_p→Z_p→H_p(C). This proves exactness, and the canonical cycle and quotient maps prove naturality. $\\square$

Over a field the Tor terms vanish, giving the familiar direct tensor formula. Over a PID, merely multiplying Betti numbers loses possible Tor classes.

## 6. A complete finite splitting calculation

Assume now both complexes are bounded and finite free. Smith normal form on each inclusion B_n→Z_n decomposes a complex, noncanonically, into single free generators, two-term blocks
$T(a,r):\\quad R\\xrightarrow{a}R$
in degrees r+1,r, and contractible blocks where a is a unit. The single generators represent free homology; the nonunit blocks represent R/(a) in degree r.

Tensor distributes over this finite decomposition. Single generators only shift degrees. A contractible block remains contractible after tensoring: its contracting homotopy tensored with identity has mixed terms cancel under the tensor signs.

For two nonunit blocks, after changing one basis sign the relevant three-term complex is
$R\\xrightarrow{(-b,a)}R^2\\xrightarrow{(a,b)}R.$
Let g be a gcd of a,b, and write a=ga',b=gb' with a',b' relatively prime. Its bottom homology is R/(g). The kernel in the middle consists of multiples of (-b',a'): the equation a'x+b'y=0 and Bezout imply that divisibility. The incoming image is g times that generator, so middle homology is also R/(g). The top map is injective since a,b are nonzero in a domain.

These are exactly R/(a) tensor R/(b) in the bottom degree and Tor(R/(a),R/(b)) one degree above. Combining all blocks gives a splitting of Theorem 13.3 for bounded finite free complexes. Choices of bases and Smith forms explain why this proof does not produce a natural splitting. The general natural exact sequence was already proved without these finite assumptions; the finite assumption here is the scope of the supplied splitting proof.

## 7. Products of finite CW complexes

For finite CW complexes X,Y, the products of their open cells form a CW structure on X×Y. A characteristic product D^p×D^q is a ball with boundary
$(S^{p-1}×D^q)\\cup(D^p×S^{q-1})$.
With product orientations its boundary formula is
$\\partial(e^p\\times f^q)
=(\\partial e^p)\\times f^q+(-1)^p e^p\\times\\partial f^q.$
The sign comes from moving the outward normal of the second factor past p oriented tangent directions of the first. Naturality of the relative-cell connecting map identifies its attaching coefficients with these two terms. Thus cellular chains of the product are the total tensor complex.

The cellular theorem and Theorem 13.3 therefore prove the topological Kunneth exact sequence for finite CW complexes, with a noncanonical splitting from the finite calculation. This proof does not assume that arbitrary products have a finite product CW structure. Singular-chain product comparison extends the theorem much further, but the finite-CW case already covers the worked spaces here.

## 8. A chain-comparison tool used for products

We record the elementary filling principle behind later diagonal comparisons. Suppose a free augmented chain complex has chosen generators and each generator has an assigned augmented acyclic model complex containing the models of its boundary. Two augmentation-preserving chain maps into those models are chain homotopic.

The proof is induction on degree. If h is defined below degree n, then
$f(c)-g(c)-h(dc)$
is a cycle: applying d gives zero by the chain-map and previous homotopy identities. In degree zero its augmentation is zero. Acyclicity supplies an (n+1)-chain filling it; define that to be h(c) and extend linearly. This proves dh+hd=f-g.

For singular simplices the filling is performed in the universal standard simplex model before pushing forward. One must not assume that the image of a singular simplex is contractible. Standard simplex chains contract to a vertex by the straight-line prism homotopy. The tensor of two such complexes is also augmented-contractible: combine the first contraction with the second after projecting the first factor to its vertex; the mixed signs cancel.

The Alexander–Whitney map sends a product simplex to the sum of its projected front and back faces. The shuffle map triangulates a product simplex by all monotone lattice paths, with the permutation signs. Their boundary terms cancel internally, leaving exactly the tensor differential. Both composites and identities are carried by the corresponding universal simplex products. The filling argument therefore gives chain homotopies to the identities. This establishes the singular product comparison when that extension is desired. It also supplies a precise proof mechanism for the graded commutativity argument in the next chapter.

## 9. Worked examples

### Worked example 1 — RP2 with mod-two coefficients

Integral homology is H0=Z,H1=Z/2,H2=0. In degree two the tensor contribution is zero, but Tor(Z/2,F2)=F2, so H2(RP2;F2)=F2. In degree one, (Z/2) tensor F2=F2 and Tor(Z,F2)=0. The extra top class comes from the preceding torsion, not from an overlooked integral H2.

Integral cohomology instead has H1=0 and H2=Z/2: the latter is Ext(Z/2,Z). Homology and cohomology place this torsion in different degrees.

### Worked example 2 — Circle times projective plane

For S1×RP2, the integral Kunneth tensor terms give H0=Z,H1=Z direct-sum Z/2,H2=Z/2,H3=0. All Tor terms involving S1 vanish because its homology is free.

With F2 coefficients the dimensions are (1,2,2,1). Applying UCT to the integral product groups explains the top degree: Tor(H2,F2)=F2 produces H3 over F2. This is compatible with mod-two duality of a closed three-manifold, but duality was not needed to calculate it.

### Worked example 3 — Two torsion blocks

Take T(4,0) and T(6,0). Their tensor differential has bottom row (4,6) and top column (-6,4). The gcd is two. Thus its bottom and middle homology are both Z/2, and its top homology is zero. One Z/2 is the tensor product of Z/4 and Z/6, while the other is their Tor term. Omitting Tor loses an entire degree.

### Worked example 4 — Field duality with a warning about size

A finite-dimensional vector-space homology group F^r has dual dimension r, though no preferred basis identifies them. In contrast, for an infinite direct sum of copies of F, Hom sends finite-support vectors to arbitrary coordinate functionals, a product rather than a direct sum. The UCT field isomorphism is to that dual space; it does not license an unqualified identification with homology.

## Exercises

<a id="coefficients-and-kunneth-ex-1"></a>
### Exercise 13.1

Compute Tor_Z(Z/6,Z/4) and Ext_Z(Z/6,Z/4).

<details>
<summary>Hint 1</summary>

Use the multiplication-by-six resolution.

</details>

<details>
<summary>Hint 2</summary>

In Z/4, six acts as multiplication by two.

</details>

<details>
<summary>Full solution</summary>

Tor is the kernel of multiplication by two on Z/4, namely {0,2}≈Z/2. Ext is its cokernel, (Z/4)/2(Z/4)≈Z/2. These groups agree here but arise as different kernel and cokernel constructions.

</details>

<a id="coefficients-and-kunneth-ex-2"></a>
### Exercise 13.2

Why may 0→Z_n→C_n→B_n-1→0 be split while B_n→Z_n need not split?

<details>
<summary>Hint 1</summary>

The quotient in the first sequence is free.

</details>

<details>
<summary>Hint 2</summary>

The quotient in the second can have torsion.

</details>

<details>
<summary>Full solution</summary>

B_n-1 is a submodule of a free PID module and is free, so lifting a basis gives a section. In B_n→Z_n the quotient is H_n, which can be R/(a). For multiplication by a nonunit into R, that inclusion cannot have a complement yielding torsion inside a free module. The two sequences have different quotients.

</details>

<a id="coefficients-and-kunneth-ex-3"></a>
### Exercise 13.3

Compute UCT homology in degrees one and two for H0=Z,H1=Z/3,H2=0 with G=F3.

<details>
<summary>Hint 1</summary>

Use tensor in the same degree and Tor one degree below.

</details>

<details>
<summary>Hint 2</summary>

Three acts as zero on F3.

</details>

<details>
<summary>Full solution</summary>

Degree one has (Z/3) tensor F3=F3 and Tor(Z,F3)=0. Degree two has zero tensor term and Tor(Z/3,F3)=F3. Thus both groups are F3. Their origins differ, illustrating the degree shift.

</details>

<a id="coefficients-and-kunneth-ex-4"></a>
### Exercise 13.4

For the same integral homology, compute H1 and H2 cohomology with Z target.

<details>
<summary>Hint 1</summary>

Hom from a torsion group to Z is zero.

</details>

<details>
<summary>Hint 2</summary>

Ext(Z/3,Z)=Z/3.

</details>

<details>
<summary>Full solution</summary>

H1 has Ext(H0,Z)=0 and Hom(H1,Z)=0, so is zero. H2 has Ext(H1,Z)=Z/3 and Hom(H2,Z)=0, so is Z/3. Integral cohomology is therefore not just degreewise Hom of homology.

</details>

<a id="coefficients-and-kunneth-ex-5"></a>
### Exercise 13.5

Derive the tensor differential sign by requiring d²=0.

<details>
<summary>Hint 1</summary>

Expand both mixed terms.

</details>

<details>
<summary>Hint 2</summary>

Their exponents differ by one.

</details>

<details>
<summary>Full solution</summary>

For homogeneous c of degree p, d²(c tensor e) has mixed terms (-1)^(p-1)dc tensor de and (-1)^p dc tensor de, which cancel. The remaining terms contain d²c or d²e and vanish. Removing the sign would make the mixed terms add over general coefficients.

</details>

<a id="coefficients-and-kunneth-ex-6"></a>
### Exercise 13.6

Compute the tensor-block homology for T(2,0) tensor T(3,0).

<details>
<summary>Hint 1</summary>

The gcd is one.

</details>

<details>
<summary>Hint 2</summary>

Use the three-term block calculation.

</details>

<details>
<summary>Full solution</summary>

The bottom cokernel is Z/(2,3)=0. The middle kernel generator is (-3,2) and the incoming image is exactly that whole generator subgroup, so middle homology is zero. The top map is injective. Thus the entire tensor complex is acyclic, agreeing with both tensor and Tor of coprime cyclic groups being zero.

</details>

<a id="coefficients-and-kunneth-ex-7"></a>
### Exercise 13.7

State the finite assumptions under which this chapter proves a Kunneth splitting.

<details>
<summary>Hint 1</summary>

Separate the natural exact sequence from its block decomposition.

</details>

<details>
<summary>Hint 2</summary>

Smith normal form needs finite free modules in the supplied argument.

</details>

<details>
<summary>Full solution</summary>

The exact sequence is proved for nonnegative free complexes over a PID without finite generation. The explicit splitting proof here assumes bounded finite free complexes, decomposes their cycle-boundary inclusions by Smith form, and tensors elementary blocks. Finite CW complexes satisfy that scope. No natural choice of those decompositions is claimed.

</details>

<a id="coefficients-and-kunneth-ex-8"></a>
### Exercise 13.8

Compute integral homology of S1×S2.

<details>
<summary>Hint 1</summary>

Both factors have free homology.

</details>

<details>
<summary>Hint 2</summary>

There are no Tor contributions.

</details>

<details>
<summary>Full solution</summary>

The nonzero tensor terms give one Z in each degree 0,1,2,3. Every Tor term vanishes because all factor groups are free. Higher groups vanish. The product CW complex has cells in exactly those dimensions, consistent with the calculation.

</details>

<a id="coefficients-and-kunneth-ex-9"></a>
### Exercise 13.9

Why does choosing target group F2 not erase integral Ext?

<details>
<summary>Hint 1</summary>

The base ring remains Z.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the cyclic resolution directly.

</details>

<details>
<summary>Full solution</summary>

Over Z, Ext(Z/2,F2)=F2/2F2=F2 because two acts as zero. Only changing the entire chain/cochain category to vector spaces over F2 makes short exact vector-space sequences split and removes Ext in that category. The two operations are not the same.

</details>

<a id="coefficients-and-kunneth-ex-10"></a>
### Exercise 13.10

In the filling principle, why are universal simplex models used instead of the image of each singular simplex?

<details>
<summary>Hint 1</summary>

A continuous image of a contractible space need not be contractible.

</details>

<details>
<summary>Hint 2</summary>

A filling can be chosen before pushing forward.

</details>

<details>
<summary>Full solution</summary>

A singular simplex may wrap onto a noncontractible image, so its image-chain complex need not be acyclic. The standard simplex and its products are contractible and have explicit chain contractions. Construct the cycle filler there and push it through the singular maps; this proves the comparison without a false image-acyclicity assumption.

</details>

## Sources

Full algebraic proofs and finite-CW product arguments are supplied above. Primary references: [Hatcher, Algebraic Topology, Chapter 3 and its product appendices](https://pi.math.cornell.edu/~hatcher/AT/ATchapters.html), and [May, A Concise Course, Chapters 12, 13 and 17](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf). PID module structure is part of the algebra preparation; all additional finiteness assumptions used for the supplied Kunneth splitting are stated explicitly.

## Summary

Free PID chains split into cycle modules and lifted boundary modules, yielding natural UCT exact sequences with noncanonical splittings. A tensor short exact sequence proves the natural Kunneth sequence; finite Smith blocks give its explicit finite-free splitting. Product cells and the singular comparison connect this algebra to spaces. Tensor, Tor, Hom and Ext have different degrees and roles, and coefficient fields must be distinguished from integral target groups.
`;export{e as default};