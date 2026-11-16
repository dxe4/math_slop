# 6. Bases, dimension, and the right number of coordinates

**Prerequisites:** span, independence, elimination, and subspaces. **Goals:** prove that basis coordinates are unique; extract and extend bases; justify dimension; distinguish exact independence from numerical sensitivity.

## Coordinates require both enough vectors and no redundancy

A basis of a vector space V is a list of vectors that spans V and is linearly independent. Spanning says every vector has a description using the list. Independence says no vector has two descriptions. Both conditions matter: one arrow cannot describe every point of a plane, while three arrows in a plane provide redundant descriptions.

**The coordinate theorem.** If b₁,…,bₙ is a basis, every v has exactly one representation v=c₁b₁+⋯+cₙbₙ. Existence is spanning. For uniqueness, subtract two representations. Independence forces every coefficient difference to be zero. Conversely, if every vector has a unique representation, the list spans by existence; uniqueness of zero's representation forces independence. Thus “basis” and “a unique coordinate system” describe the same structure.

The ordered list matters. Interchanging b₁ and b₂ interchanges the first two coordinates. Coordinates are numbers relative to a chosen basis, not labels permanently attached to a geometric vector. The familiar standard basis e₁,…,eₙ of Rⁿ hides that choice because it makes coordinates look identical to the vector's usual entries.

## Worked example: extracting a basis in three dimensions

Let u=(1,1,0), v=(0,1,1), w=(1,2,1), and z=(1,0,−1). We have w=u+v and z=u−v, so all four vectors span the same space as u,v. Those first two are independent: the first coordinate of au+bv=0 gives a=0, and the third gives b=0.

Their span consists of (a,a+b,b), exactly the plane y=x+z. A basis is therefore (u,v), and the coordinates of (2,5,3) in that basis are (2,3). The point (2,4,3) is outside the plane and has no such coordinates. “Two basis vectors” means two independent degrees of freedom, even though each vector is stored with three entries.

In a larger example, place the candidate vectors in columns and eliminate. The original pivot columns form a basis for their span. This removes redundant vectors while preserving every possible combination. Keeping reduced pivot columns would generally produce a basis for a different geometric subspace.

### Laboratory: redundant coordinates are not unique

The target is fixed at (2,1). Blue and teal arrows are the standard basis; the violet arrow is their sum. Amber segments follow one three-term description of the target.

```mathviz
scene "One vector with infinitely many redundant descriptions";
domain -4 4;
range -4 4;
coordinates equal;
param t = 0 from -1 to 2;
vector first = (1,0) color blue;
vector second = (0,1) color teal;
vector redundant = (1,1) color violet;
segment step1 from (0,0) to (2-t,0) color amber;
segment step2 from (2-t,0) to (2-t,1-t) color amber;
segment step3 from (2-t,1-t) to (2,1) color amber;
point target = (2,1) color rose;
```

**Predict:** how can the path change while its endpoint stays fixed? **Manipulate:** try t=0, 1, and 2, then explore negative values. **Explain:** (2−t)e₁+(1−t)e₂+t(e₁+e₂)=(2,1). Subtract two coefficient triples to identify the dependence relation. **Transfer:** change the target to (−1,2) and edit all three segments accordingly. Then remove the redundant arrow and express why two coefficients now become unique.

## Why dimension is well-defined

Calling the number of basis vectors “dimension” requires proof that different bases have the same size. The key comparison is: if p independent vectors lie in the span of q vectors, then p≤q.

To prove it, express the p vectors as combinations of the q spanning vectors and arrange the coefficients in a q-by-p matrix C. If p>q, the homogeneous system Cc=0 has a free variable and a nonzero solution c. Substituting the coefficient expressions gives a nontrivial combination of the p original vectors equal to zero. This contradicts their independence. The q spanning vectors need not themselves be independent.

Now let B and D be bases of sizes p and q. Because B is independent and D spans, p≤q. Reversing the roles gives q≤p. Hence p=q, and dimension is independent of the chosen basis. This argument uses elimination from earlier chapters, not an assumption that all bases have equal size.

Two practical consequences follow in an n-dimensional space. Any independent list of n vectors is already a basis: a vector outside its span would create n+1 independent vectors, violating the comparison. Any spanning list of n vectors is also a basis: if dependent, one vector could be removed without changing the span, leaving n independent basis vectors inside a span of n−1 vectors. In both statements the ambient dimension must already be known.

## Extending a basis and working beyond a picture

An independent list can be extended to a basis of a finite-dimensional space. Start with any finite spanning list. Inspect its vectors one at a time, adjoining a vector only when it lies outside the current span. Each addition preserves independence: a dependence with a nonzero coefficient on the new vector would express it using the old ones. At the end every spanning-list vector is included or expressible, so the resulting list spans the entire space.

**Worked example in R⁴.** The set W={(a,b,a,b): a,b real} has basis u=(1,0,1,0), v=(0,1,0,1). It is a two-dimensional subspace of a four-dimensional space. Add d=(0,0,1,0) and e=(0,0,0,1). If αu+βv+γd+δe=0, the first two coordinates give α=β=0; the last two then give γ=δ=0. The four vectors are independent and hence form a basis of R⁴.

For a concrete coordinate calculation,

(2,−1,5,3)=2u−v+3d+4e.

The first two basis vectors control the paired-coordinate structure; the last two independently correct the third and fourth entries. No drawing of four perpendicular arrows is required. Definition, coordinate equations, and dimension carry the argument. A two-dimensional projection may help exploration but can hide distinct vectors, so it cannot certify independence in R⁴.

The zero space {0} deserves special attention. Its basis is the empty list, and its dimension is zero. The list containing the zero vector is dependent, because 1·0=0 is already a nontrivial relation.

### Laboratory: independent can still be numerically delicate

Take b₁=(1,0), b₂=(1,k), with k>0. They are independent, but representing the fixed target (1,1) requires coefficients 1−1/k and 1/k. The long contributions nearly cancel when k is small.

```mathviz
scene "A valid basis can require large cancelling coordinates";
domain -5 5;
range -5 5;
coordinates equal;
param k = 0.5 from 0.2 to 2;
vector first = (1,0) color blue;
vector second = (1,k) color teal;
vector contribution = (1-1/k,0) color amber;
segment correction from (1-1/k,0) to (1,1) color violet;
point target = (1,1) color rose;
```

**Predict:** as k decreases, will the coordinates approach zero or grow? **Manipulate:** compare k=2, 1, 0.5, and 0.2. **Explain:** the second coordinate equation forces k·c₂=1, then c₁+c₂=1. Independence remains exact for every allowed k; numerical sensitivity increases continuously. **Transfer:** for target (1,1+ε), calculate the coordinate change (−ε/k,ε/k). Explain why a tiny input error can become a large coordinate error. The slider excludes zero because the formula would divide by zero; analyse that singular case separately.

## Misconception: entries are not dimension

The plane from the first example has dimension two, although its vectors have three entries. A vector space of polynomials may have finite dimension even though its elements are functions defined at infinitely many inputs. Dimension counts independent linear choices. It does not count entries in an arbitrary representation, visual axes on a screen, or possible elements of the space.

## Exercises

1. **Foundation.** Does {(1,2),(2,4)} form a basis of R²? Does it form a basis of its own span? Give a basis for that span.
2. **Foundation.** Find coordinates of (5,1) in the ordered basis ((1,1),(1,−1)). Verify by substitution.
3. **Core.** Extract a basis from (1,0,1), (2,0,2), (0,1,1), (1,1,2), keeping the original order when possible.
4. **Core.** Extend the independent vector (1,1,1) to a basis of R³ using two standard basis vectors, and prove independence.
5. **Core.** Find coordinates of (a,b,c,d) in the R⁴ basis constructed above. Characterise W using those coordinates.
6. **Core.** Prove that a proper subspace of an n-dimensional space has dimension at most n−1.
7. **Stretch.** Let U,W be finite-dimensional subspaces. Prove dim(U+W)=dim U+dim W−dim(U∩W) by extending a basis of their intersection.
8. **Stretch.** For b₁=(1,0), b₂=(1,k), compare coordinates of (1,1) and (1,1.001) when k=0.001. Does the result imply dependence?
9. **Core.** Let U={z=0} and W={y=z} in R³. Find a basis of U∩W and an adapted basis of U+W, then express (2,3,4) in that combined basis.
10. **Stretch.** Prove that every vector in U+W has a unique decomposition u+w with u∈U,w∈W if and only if U∩W={0}.

<details>
<summary>Hints</summary>

1. Compare the second vector with the first. 2. Solve c₁+c₂=5 and c₁−c₂=1. 3. Identify exact column relations. 4. Try e₁ and e₂ and inspect the third coordinate. 5. Write the combination entry by entry. 6. Extend a basis of the subspace. 7. Use the shared intersection vectors only once in a spanning list for U+W; prove that list independent. 8. The changes are (−ε/k,ε/k), and k is nonzero.

9. **Hint 1:** impose both plane equations at once. **Hint 2:** extend their common x-axis direction separately in each plane.
10. **Hint 1:** subtract two decompositions. **Hint 2:** a nonzero common vector gives two decompositions of zero.

</details>

<details>
<summary>Worked solutions</summary>

1. The second vector is twice the first, so the list is dependent and is a basis of neither space. Its span is a line with basis {(1,2)}; the list also fails to span R².
2. Adding the equations gives c₁=3; subtracting gives c₂=2. Indeed 3(1,1)+2(1,−1)=(5,1).
3. Keep (1,0,1) and (0,1,1). The second candidate is twice the first; the fourth is the sum of the two kept vectors. Their first and second entries prove independence. Their span is the plane z=x+y.
4. The ordered list ((1,1,1),e₁,e₂) works. In a(1,1,1)+be₁+ce₂=0, the third entry gives a=0, then the first two give b=c=0. Three independent vectors in R³ form a basis.
5. Coordinates are (a,b,c−a,d−b), since αu+βv+γd+δe=(α,β,α+γ,β+δ). Membership in W is equivalent to the final two coordinates being zero.
6. If a basis of the subspace already had n vectors, it would be a basis of the whole space, contradicting proper containment. Since basis size is an integer at most n, it is at most n−1. For n=0 there is no proper subspace.
7. Let z₁,…,zₖ be an intersection basis. Extend it by u₁,…,uₚ to a basis of U and by w₁,…,w_q to a basis of W. The combined list z,u,w spans U+W. In a dependence, the combination of w vectors lies in U and W, hence in span(z). Independence of the W basis forces every w coefficient zero; independence of the U basis then forces the rest zero. Its length is k+p+q=(k+p)+(k+q)−k, proving the identity.
8. The first coordinate pair is (−999,1000); the second is (−1000,1001). A vertical target change of 0.001 changes each coordinate by magnitude 1. The basis remains independent because k≠0. Large sensitivity concerns stable computation, not exact uniqueness.

9. The intersection has y=z=0, so basis ((1,0,0)). Adjoin (0,1,0) in U and (0,1,1) in W. A combination is (a,b+c,c), so zero forces c=b=a=0 and the list is independent; it spans R³ by taking c=z,b=y−z,a=x. Coordinates of (2,3,4) are (2,−1,4).
10. Existence follows from the definition of U+W. If u+w=u′+w′, then u−u′=w′−w lies in U∩W. A trivial intersection forces equal corresponding parts. Conversely, if z≠0 belongs to the intersection, zero has decompositions 0+0 and z+(−z), with distinct parts in the required spaces. Thus uniqueness fails.

</details>

## Definitions and the exchange mechanism

**Definition 6.1 (Coordinates relative to a basis).** If B=(b₁,…,bₙ) is an ordered basis of V, the B-coordinate vector of v is the unique column c satisfying v=∑cᵢbᵢ. Coordinates are defined only for vectors in V and only after the ordered basis has been fixed.

This definition applies to a basis of a proper subspace as readily as to the entire ambient space. For a plane in R³ with a two-vector basis, its coordinates have two entries even though its vectors have three standard entries. Asking for plane coordinates of a vector outside the plane has no answer; adding a third arbitrary number would change the coordinate system rather than solve the original request.

**Lemma 6.2 (One-vector exchange).** Suppose s₁,…,s_q spans V and u=∑aᵢsᵢ with aⱼ≠0. Replacing sⱼ by u leaves a spanning list of V.

*Proof.* Solve the displayed relation for sⱼ:

sⱼ=(1/aⱼ)u−∑ᵢ≠ⱼ(aᵢ/aⱼ)sᵢ.

Thus every old generator lies in the span of the new list. Every vector of V was a combination of old generators, so substitution expresses it using the new list. Conversely every member of the new list lies in V, giving equality of spans. ∎

**Theorem 6.3 (Independent vectors can enter a spanning list).** If u₁,…,u_p is independent and s₁,…,s_q spans V, then p≤q, and a sequence of exchanges produces a spanning list containing all uᵢ.

*Proof.* Since u₁ is nonzero, its expression in the s list has a nonzero coefficient; exchange that generator for u₁. Suppose exchanges have produced a spanning list beginning u₁,…,u_j, followed by q−j remaining generators. Express uⱼ₊₁ in that list. Some coefficient on a remaining generator must be nonzero; otherwise uⱼ₊₁ would belong to span{u₁,…,u_j}, contradicting independence. Exchange at such a position. Continuing inserts one independent vector at each step. There cannot be a further independent vector after all q positions have been filled, so p≤q. ∎

This gives a second proof of the comparison underlying dimension. It shows not merely that enough generators exist, but how to replace them without losing coverage. The coefficient chosen for division must be nonzero. Choosing it from a remaining generator ensures that previously inserted independent vectors are not removed.

The same argument treats a zero-dimensional space correctly. An independent list there must be empty. A spanning list may contain redundant zero vectors, but exchanging cannot insert a nonzero vector because none belongs to the space.

## Worked example 3: adapt a basis to two intersecting planes

Let U={(x,y,z):z=0} and W={(x,y,z):y=z}. Both are planes in R³. We seek their intersection, their sum, and bases displaying how they fit together.

A vector in both must have z=0 and y=z, hence y=0. Therefore U∩W is the x-axis, with basis z₁=(1,0,0). Extend it in U by u₁=(0,1,0). Extend it in W by w₁=(0,1,1). The pairs (z₁,u₁) and (z₁,w₁) are bases for the respective planes by direct coordinate comparison.

The combined list (z₁,u₁,w₁) is independent: in a z₁+b u₁+c w₁=(a,b+c,c)=0, the third coordinate gives c=0, then the second gives b=0, and the first gives a=0. It therefore forms a basis of R³. In particular U+W=R³, although neither plane alone fills R³.

For v=(2,3,4), solving (a,b+c,c)=(2,3,4) gives coordinates (2,−1,4). Hence v=(2,−1,0)+(0,4,4), a sum of one vector from each plane. This decomposition is not unique: for every t, shifting t z₁ from the second term to the first gives another pair with the same sum. Coordinate uniqueness in the combined basis and nonuniqueness of a U-plus-W decomposition are compatible, because the latter permits the common direction to be allocated twice.

Counting gives dim(U+W)=3=2+2−1. The subtracted one is the dimension of the shared directions. Without subtracting the intersection, simply adding dimensions counts those directions twice. When the intersection is {0}, this ambiguity disappears and each vector of U+W has a unique decomposition into one U part and one W part.

## A dimension formula with its full argument

**Theorem 6.4 (Dimension of a sum).** For finite-dimensional subspaces U,W of a common vector space,

dim(U+W)=dim U+dim W−dim(U∩W).

*Proof.* Choose a basis z₁,…,z_k of the intersection and extend it by u₁,…,u_p to a basis of U and by w₁,…,w_q to a basis of W. The combined list z,u,w spans U+W because every U and W component has an expression in its corresponding basis.

For independence, suppose a combination of the combined list is zero. Rearranging puts the combination of w vectors equal to a combination of z and u vectors. The former is in W and the latter is in U, so their common value belongs to U∩W and is a combination of the z vectors. This produces a dependence involving only the basis z,w of W; therefore all w coefficients vanish. The original relation then involves only the basis z,u of U, so all remaining coefficients vanish. The combined list is a basis, with k+p+q vectors. Since dim U=k+p and dim W=k+q, the formula follows. ∎

The theorem includes containment as a useful check. If U⊆W, then U∩W=U and U+W=W, and the formula reduces to dim W=dim U+dim W−dim U. If the spaces have only zero in common, it reduces to addition of their dimensions. These checks do not prove the theorem, but they test whether its terms have been interpreted correctly.

## Choosing a basis for the question

A basis can be mathematically valid yet awkward for a task. The standard basis makes stored coordinates simple. A basis adapted to a subspace makes membership simple. An orthonormal basis, introduced later, makes lengths and projections simple. Eigenvector bases, when available, make repeated transformations simple. Each choice reorganizes the same linear structure around a different question.

For the planes above, a generic basis of R³ would not visibly identify their common line. The adapted basis begins with that line, then adds the distinct directions. In its coordinates, membership in U means the final coordinate is zero; membership in W means the middle coordinate is zero. This is a concrete example of a good coordinate choice converting a geometric condition into a simple coefficient condition.

Do not confuse convenience with existence. A valid basis requires exact spanning and independence, not a visually tidy diagram. Nor does a large coordinate imply a large vector without information about the basis geometry. Nearly parallel basis vectors can require large cancelling coefficients, as the laboratory demonstrated. The next chapter treats coordinate translation as a linear map so that these distinctions can be calculated systematically.

## Summary

A basis gives both existence and uniqueness of coordinates. Exchange compares independent and spanning lists and proves that dimension is well-defined. Extending intersection bases explains the dimension formula for sums and identifies when decomposition is unique. The next chapter studies how coordinate columns change when the underlying vector stays fixed.
