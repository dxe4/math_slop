
# Computing Galois Groups of Cubics and Quartics

A degree-three polynomial does not automatically have Galois group S₃, and a quartic can realise several different transitive groups. To compute a group, we combine irreducibility, root permutations, discriminants, resolvents and actual field degrees. Each ingredient answers a different question. This chapter treats separable polynomials over a field F, with characteristic different from two; the numerical examples are over Q.

Required preparation is the [finite correspondence](fundamental-theorem-galois-theory.md), the alternating and symmetric groups, and irreducibility methods from the algebra book. All Galois groups are those of splitting fields over the stated base. A polynomial's degree, a root field's degree and its splitting field's degree must be kept separate.

## 1. Irreducibility is transitivity

**Theorem 6.1.** If a nonconstant separable polynomial f∈F[x] has splitting field E, then f is irreducible over F if and only if Gal(E/F) acts transitively on its roots.

*Proof.* If f is irreducible, any two roots α,β define an F-isomorphism F(α)→F(β). Extend it to an embedding of E into an algebraic closure. Normality of E makes that extension an automorphism of E, sending α to β. Thus the action is transitive.

Conversely, the orbit of a root α lies among the roots of its minimal polynomial over F. Transitivity puts every root of f in that orbit, so the minimal polynomial has at least deg f distinct roots. It also divides f. Thus its degree equals deg f and f is a scalar multiple of that irreducible polynomial. ∎

Since the roots generate E, the action is faithful. Consequently an irreducible separable polynomial of degree n gives a transitive subgroup of S_n. It does not yet specify which subgroup. In particular its order is divisible by n by orbit–stabiliser, but may be much larger than n.

## 2. Discriminant and permutation parity

**Definition 6.2.** For a monic separable polynomial with roots α₁,…,αₙ, choose an ordering and put
$$\delta=\prod_{i<j}(\alpha_i-\alpha_j),\qquad D=\delta^2.$$
The square D is independent of ordering and lies in F, since it is a symmetric polynomial in the roots. It is the discriminant. It is nonzero by separability.

A transposition reverses the sign of δ: swapping the two selected roots negates their difference and exchanges all other affected factors in pairs. Since transpositions generate the symmetric group, any root permutation σ satisfies σ(δ)=sgn(σ)δ.

**Theorem 6.3 (Square discriminant criterion).** In characteristic different from two, the Galois group is contained in A_n if and only if D is a square in F.

*Proof.* If every automorphism is even, δ is fixed by the full group and hence lies in F by the fixed-field theorem. Thus D=δ² is a square. Conversely, if D=a² with a∈F, then (δ−a)(δ+a)=0 in the splitting field, so δ=±a∈F. Every automorphism therefore fixes δ. Since δ≠0 and 2≠0, an odd permutation would send it to the different element −δ, a contradiction. ∎

The nonzero and characteristic assumptions are used explicitly. With repeated roots δ is zero, which is a square without controlling the permutations. In characteristic two the sign distinction disappears.

For a depressed cubic x³+px+q, direct expansion gives
$$D=-4p^3-27q^2.$$
One algebraic way to obtain the formula is the resultant with the derivative 3x²+p. Its Sylvester determinant is
$$
\det\begin{pmatrix}
1&0&p&q&0\\
0&1&0&p&q\\
3&0&p&0&0\\
0&3&0&p&0\\
0&0&3&0&p
\end{pmatrix}=4p^3+27q^2.
$$
For a monic cubic this resultant is −D, as multiplying f′ at its three roots gives one minus sign for each of three unordered root pairs. This proves the displayed discriminant formula. The formula remains an identity in any characteristic, though its application to a depressed form can require division by three when removing a quadratic term.

## 3. The cubic decision

**Theorem 6.4.** For an irreducible separable cubic over F with characteristic different from two, the Galois group is A₃≅C₃ if the discriminant is a square, and S₃ otherwise.

*Proof.* A transitive subgroup of S₃ has order divisible by three, hence order three or six by Lagrange. The unique order-three subgroup is A₃. The square discriminant criterion distinguishes precisely whether the group lies in A₃. ∎

**Example 6.5 (A full symmetric cubic).** For f=x³−2, Eisenstein at two proves irreducibility. Its discriminant is −27·4=−108, not a rational square since it is negative. Thus the group is S₃ and the splitting field has degree six. This agrees with the independent field computation E=Q(∛2,ω), where the real cubic adjunction has degree three and the nonreal cube root of unity adds degree two. The discriminant argument determines the abstract permutation group; the tower calculation identifies a concrete field realising it.

**Example 6.6 (A cyclic cubic).** For f=x³−3x+1, a rational root would be ±1. The values are −1 and 3, so no rational root exists and the cubic is irreducible. Its discriminant is −4(−3)³−27=108−27=81, a rational square. The group is A₃ and the splitting field has degree three. Therefore adjoining any one root already supplies the splitting field. This conclusion comes from the automorphism count after the group calculation; it is not an assertion that every cubic root field is normal.

## 4. The quartic resolvent as an action on partitions

Let
$$f=x^4+ax^3+bx^2+cx+d$$
be separable, with roots α₁,…,α₄. Form three pair sums
$$u_1=\alpha_1\alpha_2+\alpha_3\alpha_4,\quad
u_2=\alpha_1\alpha_3+\alpha_2\alpha_4,\quad
u_3=\alpha_1\alpha_4+\alpha_2\alpha_3.$$
These are three numbers attached to the three partitions of four roots into two unordered pairs.

Their differences factor, for example
$$u_1-u_2=(\alpha_1-\alpha_4)(\alpha_2-\alpha_3).$$
The analogous factorizations show all three values are distinct because f is separable. Permuting the four roots permutes the three partitions. This defines a surjection π:S₄→S₃. Its kernel is
$$V=\{1,(12)(34),(13)(24),(14)(23)\}\cong C_2\times C_2.$$
Indeed those four permutations fix every partition; a transposition exchanges two partitions and a three-cycle cycles all three, proving surjectivity and hence kernel order four.

**Definition 6.7 (Cubic resolvent).** The polynomial with the three pair sums as roots is
$$R(y)=y^3-by^2+(ac-4d)y-(a^2d+c^2-4bd).$$
To obtain the coefficients, expand the sum, pair-product sum and product of the three u-values and collect the elementary symmetric sums of the α-values. They give b, ac−4d and a²d+c²−4bd, respectively. Thus R belongs to F[y], and its splitting field lies in E. The permutation group induced on its roots is π(G), where G=Gal(E/F).

More precisely restriction from G onto the Galois group of the resolvent splitting field is surjective by the finite normal-subgroup theorem, since that splitting field is normal over F. Its faithful root action is exactly π(G). Therefore factorisation of R determines whether π(G) is trivial, order two, or transitive of order three or six. We have converted a quartic question into a cubic action while retaining a kernel that still needs to be determined.

## 5. The quartic decision and its last ambiguity

**Theorem 6.8.** Assume f is an irreducible separable quartic and char F≠2. Then:

- If R is irreducible and D is a square, G=A₄.
- If R is irreducible and D is not a square, G=S₄.
- If R splits completely over F, G=V.
- If R has exactly one root in F and an irreducible quadratic factor, G is C₄ or the dihedral group D₈ of order eight. A further degree or root-field calculation distinguishes them.

*Proof.* Transitivity gives 4∣|G|. If R is irreducible, its image π(G) is transitive on three points. Parity of a permutation in S₄ equals parity of its image under π: the two sign homomorphisms agree on transpositions and hence on their generated group. Thus if D is square, G≤A₄ and π(G)=A₃. The order of G is divisible by both four and three and divides twelve, so it is twelve and G=A₄.

If D is not square and R is irreducible, π(G)=S₃. Its kernel is a subgroup of V, so |G| is six times one, two or four. Divisibility by four leaves twelve or twenty-four. An order-twelve subgroup of S₄ would have index two and must be A₄: the quotient map to C₂ sends every conjugate transposition to the same value, which must be nontrivial since transpositions generate S₄; its kernel is therefore exactly the even permutations. That would contradict nonsquare discriminant. Hence |G|=24 and G=S₄.

If R splits, π(G) is trivial, so G≤V. Transitivity forces its order to be divisible by four, hence G=V.

In the remaining factorisation case, π(G) has order two. Its inverse image in S₄ has order eight and is the symmetry group of a square respecting the fixed partition, isomorphic to D₈. The transitive subgroup G has order four or eight. At order eight it is this whole group. At order four it cannot be a transitive Klein four-group with nontrivial image: a transitive action of a group of order four is regular, so every nonidentity element acts without a fixed point; the three involutions of a Klein four-group would then have to be exactly the three double transpositions, giving V and trivial image. Thus the order-four possibility is C₄. ∎

The theorem does not resolve C₄ versus D₈ merely by observing a rational resolvent root. A cyclic quartic root field is already normal and contains all roots; the dihedral case needs a quadratic extension of a degree-four root field to split. Determining that extra degree is one practical way to finish the calculation.

## 6. Three quartics with different groups

**Example 6.9 (A dihedral quartic).** For f=x⁴−2, Eisenstein at two gives irreducibility. Its resolvent is R=y³+8y=y(y²+8), with one rational root. The splitting field is Q(α,i), α=2^(1/4)>0. The first adjunction has degree four, and this real field omits i; the second has degree two. Thus the splitting degree is eight and the group is D₈. The rational resolvent root narrowed the group, while the real/nonreal adjunction settled the remaining ambiguity.

**Example 6.10 (A cyclic quartic).** For Φ₅=x⁴+x³+x²+x+1, the previous chapter proved irreducibility and splitting degree four. Its resolvent is
$$R=y^3-y^2-3y+2=(y-2)(y^2+y-1).$$
The quadratic discriminant five is not a rational square, so there is exactly one rational resolvent root. The alternatives are C₄ or D₈; the degree-four splitting field chooses C₄. Explicitly ζ↦ζ² generates the order-four automorphism group. This example shows why the resolvent's linear factor alone is insufficient.

**Example 6.11 (A full symmetric quartic).** Take f=x⁴−x−1. Modulo two it becomes x⁴+x+1, with no root in F₂. The only monic irreducible quadratic over F₂ is x²+x+1, whose square is x⁴+x²+1, not the reduction of f. A reducible monic quartic with no linear factor would be a product of irreducible quadratics, so this proves the reduction irreducible. Gauss’s lemma therefore proves f irreducible over Q.

Its resolvent is R=y³+4y−1. The rational-root candidates ±1 give 4 and −6, so R is irreducible. Its discriminant as a quartic is −283. Here is a direct formula check: for x⁴+qx+r, the derivative is 4x³+q. At a derivative root s, f(s)=r+3qs/4. The product over the three derivative roots is r³−27q⁴/256, since their sum and pair-product sum are zero and their product is −q/4. Multiplying by 4⁴ gives resultant(f′,f)=256r³−27q⁴. The degree-product sign is positive, and for a monic quartic the discriminant is the same resultant. Taking q=r=−1 gives −256−27=−283. It is nonsquare over Q, so G=S₄. The full splitting degree is twenty-four, even though each individual root has degree four.

## Exercises

### Exercise 6.1 — Irreducible does not mean symmetric
<a id="galois-cubic-quartic-ex-1"></a>

Compute the group of x³−3x+1 over Q and state its splitting degree.

<details>
<summary>Hint 1</summary>

Check rational roots and the square discriminant criterion.

</details>

<details>
<summary>Hint 2</summary>

After irreducibility, calculate −4p³−27q² for p=−3 and q=1. A square discriminant puts the transitive group inside A₃.

</details>

<details>
<summary>Solution</summary>

The only rational-root candidates are ±1 and neither vanishes. The cubic is irreducible. Its discriminant is 81, a square, so the group is A₃≅C₃. Normality and separability of the splitting field give degree equal to group order, namely three. Irreducible degree three alone would have permitted S₃ as well.

</details>

### Exercise 6.2 — Another symmetric cubic
<a id="galois-cubic-quartic-ex-2"></a>

Find the Galois group of x³−3 over Q.

<details>
<summary>Hint 1</summary>

Use Eisenstein at three and the depressed-cubic discriminant.

</details>

<details>
<summary>Hint 2</summary>

The discriminant is negative. In a rational field a negative number is never a square, so the transitive cubic group cannot be A₃.

</details>

<details>
<summary>Solution</summary>

Eisenstein at three proves irreducibility. The discriminant is −27·9=−243, which is not a rational square. Hence the transitive group is S₃ and the splitting field has degree six. Concretely adjoining a real cube root gives degree three and adjoining a nonreal cube root of unity doubles it.

</details>

### Exercise 6.3 — Faithful root action
<a id="galois-cubic-quartic-ex-3"></a>

Explain why the root action of a splitting-field group is faithful, and why the same argument would not apply to an arbitrary larger field containing the roots.

<details>
<summary>Hint 1</summary>

Use the generation clause in the definition of a splitting field.

</details>

<details>
<summary>Hint 2</summary>

An automorphism fixing the roots fixes every polynomial and quotient expression generated by them. Add an independent square root to see why a larger ambient field can have a kernel.

</details>

<details>
<summary>Solution</summary>

A splitting field is generated over F by the roots. An F-automorphism fixing them all therefore fixes every rational expression in them and is the identity. In a larger field, other elements may not be generated by these roots. For example Q(√2,√3) contains all roots of x²−2, but changing the sign of √3 fixes both of those roots and is not the identity. Minimal generation is what makes the action faithful.

</details>

### Exercise 6.4 — Distinct resolvent values
<a id="galois-cubic-quartic-ex-4"></a>

Factor u₁−u₂ and u₁−u₃ and explain why a separable quartic has a separable cubic resolvent.

<details>
<summary>Hint 1</summary>

Group the four products by their common root factors.

</details>

<details>
<summary>Hint 2</summary>

For the second difference, use (α₁−α₃)(α₂−α₄). Separability means each factor is nonzero; irreducibility is a different question.

</details>

<details>
<summary>Solution</summary>

Expansion gives u₁−u₂=(α₁−α₄)(α₂−α₃) and u₁−u₃=(α₁−α₃)(α₂−α₄). Similarly u₂−u₃=(α₁−α₂)(α₃−α₄). All factors are nonzero when the quartic roots are distinct, so the three u-values are pairwise distinct. They are exactly the resolvent roots, hence the resolvent is separable. This does not by itself prove the resolvent irreducible.

</details>

### Exercise 6.5 — A split resolvent
<a id="galois-cubic-quartic-ex-5"></a>

Find the group of f=x⁴−10x²+1 over Q, proving irreducibility as well as factoring the resolvent.

<details>
<summary>Hint 1</summary>

Use the root √2+√3 and recover both square roots from it.

</details>

<details>
<summary>Hint 2</summary>

From θ and θ⁻¹ recover √3=(θ+θ⁻¹)/2 and √2=(θ−θ⁻¹)/2. This proves degree four before using the resolvent.

</details>

<details>
<summary>Solution</summary>

Let θ=√2+√3. Then θ⁻¹=√3−√2, so θ generates Q(√2,√3), of degree four. It satisfies θ⁴−10θ²+1=0; hence f is its minimal polynomial and is irreducible. The resolvent is y³+10y²−4y−40=(y+10)(y−2)(y+2), which splits completely over Q. The theorem gives the transitive Klein four-group V. The original field is already the splitting field, since the four roots are ±√2±√3.

</details>

### Exercise 6.6 — Resolve the dihedral ambiguity
<a id="galois-cubic-quartic-ex-6"></a>

For x⁴−3, determine the resolvent and decide between C₄ and D₈.

<details>
<summary>Hint 1</summary>

Use Eisenstein and then adjoin i to the positive real fourth-root field.

</details>

<details>
<summary>Hint 2</summary>

The real root field has degree four. Since it is a subfield of the reals, adjoining i really doubles its degree and supplies every root.

</details>

<details>
<summary>Solution</summary>

Eisenstein at three gives an irreducible quartic. Its resolvent is y³+12y=y(y²+12), with one rational root. Put α=3^(1/4)>0. Q(α) has degree four and is real, so it omits i. All roots lie in Q(α,i) and their ratios recover i, making this the splitting field. Its degree is eight, hence the group is D₈ rather than C₄.

</details>

### Exercise 6.7 — Square discriminant implication
<a id="galois-cubic-quartic-ex-7"></a>

If an irreducible quartic has square discriminant and irreducible resolvent, determine its group and splitting degree.

<details>
<summary>Hint 1</summary>

Combine the order divisibility by four and three with containment in A₄.

</details>

<details>
<summary>Hint 2</summary>

The image on three pair partitions has order divisible by three. Meanwhile G lies in A₄ and has order divisible by four.

</details>

<details>
<summary>Solution</summary>

Irreducibility gives a transitive subgroup G≤S₄, so four divides its order. Square discriminant gives G≤A₄. The resolvent's irreducibility makes its image transitive on three partitions, so three divides |G|. Hence twelve divides |G| while |G| divides twelve, forcing G=A₄. The splitting degree equals twelve. The hypotheses do not merely distinguish a square discriminant; the irreducible resolvent excludes V.

</details>

### Exercise 6.8 — The kernel of the partition action
<a id="galois-cubic-quartic-ex-8"></a>

Verify that every double transposition fixes all three pair partitions, and use surjectivity to show no further kernel elements exist.

<details>
<summary>Hint 1</summary>

Track the partitions rather than individual letters, and use the first isomorphism theorem.

</details>

<details>
<summary>Hint 2</summary>

A transposition and a three-cycle induce generators of S₃. The kernel therefore has order 24/6, matching the four elements already found.

</details>

<details>
<summary>Solution</summary>

For example (12)(34) preserves {12|34}, exchanges the two pairs within {13|24}, and exchanges the pairs within {14|23}; each unordered partition is unchanged. The other two double transpositions behave likewise. A transposition induces a transposition of the three partitions and a three-cycle induces a three-cycle, generating S₃. Thus the image has order six, so the kernel has order 24/6=4. The identity and the three verified double transpositions exhaust it.

</details>

### Exercise 6.9 — Why characteristic two is excluded
<a id="galois-cubic-quartic-ex-9"></a>

Identify the exact step in the square discriminant proof that fails in characteristic two.

<details>
<summary>Hint 1</summary>

Compare δ and −δ, even when δ is nonzero.

</details>

<details>
<summary>Hint 2</summary>

The implication from a fixed Vandermonde product to even permutations requires a nonzero δ to differ from −δ.

</details>

<details>
<summary>Solution</summary>

The argument that an odd permutation cannot fix δ uses −δ≠δ for nonzero δ. In characteristic two these values coincide. Thus the sign action on the Vandermonde product no longer distinguishes even and odd root permutations. The familiar square discriminant criterion cannot be imported unchanged merely because the polynomial remains separable.

</details>

### Exercise 6.10 — A reducible cubic
<a id="galois-cubic-quartic-ex-10"></a>

Find the Galois group of (x−1)(x²−2) over Q and explain why the irreducible cubic decision does not apply.

<details>
<summary>Hint 1</summary>

Its splitting field is generated by √2, and one root is fixed by every automorphism.

</details>

<details>
<summary>Hint 2</summary>

The splitting field is Q(√2), not a degree-three field. The rational root is its own orbit.

</details>

<details>
<summary>Solution</summary>

The roots are 1,√2,−√2, giving splitting field Q(√2) and group C₂. Its nonidentity map swaps the two irrational roots and fixes 1. The root action is not transitive because the polynomial is reducible. The theorem allowing only A₃ or S₃ assumes irreducibility, so there is no contradiction with the order-two group.

</details>

### Exercise 6.11 — What a rational resolvent root proves
<a id="galois-cubic-quartic-ex-11"></a>

Explain why the same resolvent factorisation pattern can occur for splitting fields of degree four and eight, giving explicit quartics.

<details>
<summary>Hint 1</summary>

Compare Φ₅ and x⁴−2, and distinguish root degree from splitting degree.

</details>

<details>
<summary>Hint 2</summary>

An order-two image under the partition action leaves room for a kernel of order two or four. Compute the splitting-field degree in both examples.

</details>

<details>
<summary>Solution</summary>

For Φ₅ the resolvent is (y−2)(y²+y−1), while for x⁴−2 it is y(y²+8). Both have exactly one rational root and an irreducible quadratic factor. Their partition images therefore both have order two. Yet Q(ζ₅) is already a splitting field of degree four, giving C₄, whereas Q(2^(1/4),i) has degree eight, giving D₈. The factorisation determines the image in S₃ but leaves different possible kernels in V.

</details>

### Exercise 6.12 — Full symmetric quartic checklist
<a id="galois-cubic-quartic-ex-12"></a>

For x⁴−x−1, list the separate mathematical facts establishing S₄, and explain why no numerical root plot is needed.

<details>
<summary>Hint 1</summary>

Identify irreducibility, the resolvent and parity as separate obligations.

</details>

<details>
<summary>Hint 2</summary>

The three obligations are irreducibility of the quartic, irreducibility of the resolvent, and a nonsquare discriminant. They determine transitivity, the partition image and parity respectively.

</details>

<details>
<summary>Solution</summary>

The reduction x⁴+x+1 over F₂ has no linear factor and is not the square of the only irreducible quadratic, proving irreducibility over F₂ and hence Q. The cubic resolvent y³+4y−1 has no rational root, so is irreducible. The quartic discriminant is −283, a nonsquare. The quartic decision theorem then gives S₄ and splitting degree twenty-four. Each input is an exact factorisation or field calculation. A root plot could illustrate reality or approximate positions, but it would not establish irreducibility, exact discriminant square class or the permutation group.

</details>

## Sources

J. S. Milne’s author-hosted [Fields and Galois Theory](https://www.jmilne.org/math/CourseNotes/FT.pdf) provides complementary primary reading on Galois groups, discriminants and equations of small degree. The calculations and proofs here are original exposition. The retained [Euler correspondence seed](../algebra-patterns-structure/galois-groups-correspondence.md) keeps its earlier mathematical material and learner identities.

## Summary

An irreducible separable polynomial gives a faithful transitive root action. The discriminant detects parity when the characteristic is not two. For cubics these facts determine the group completely; for quartics the resolvent describes an action on three pair partitions, leaving a genuine C₄/D₈ ambiguity in one case. Concrete splitting-field degrees finish that case. The next chapter continues with finite fields, where Frobenius supplies a canonical root permutation.
