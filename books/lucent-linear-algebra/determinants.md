# 9. Determinants, orientation, and volume

**Prerequisites:** matrix multiplication, linear independence, elimination, and bases. **Learning goals:** interpret a determinant as signed volume; calculate determinants using structure; justify the elementary-operation rules; connect determinants with invertibility. Allow two study sessions, including the experiments and exercises.

## A number measuring what a transformation does to space

The columns u and v of a two-by-two matrix A are the images of the coordinate basis vectors. Consequently, A sends the unit square to the parallelogram with vertices 0, u, u+v, and v. We seek one number describing its area, with a sign that distinguishes the two possible orientations.

For u=(a,c) and v=(b,d), that number is

det A = ad−bc.

Its absolute value is area. Its sign is positive when the ordered pair u,v has the same orientation as the standard basis, and negative when orientation is reversed. Zero means that the parallelogram collapses into a line or point. Signed area is a property of an **ordered** pair: swapping the columns changes the sign, even though the geometric region remains the same.

Determinants require square matrices. A three-by-two matrix maps a square into a parallelogram in three-dimensional space, but it does not have a determinant. Later, a Gram matrix will let us calculate the area of such a parallelogram without confusing the dimensions of the map.

## Laboratory 1: shear changes shape while preserving area

**Predict.** The columns below are (2,0) and (h,1.5). Before moving h, predict whether the area, perimeter, and orientation will change. Explain your area prediction using base times perpendicular height.

```mathviz
scene "Shear: same area, different shape";
domain -4 6;
range -3 4;
coordinates equal;
param h = 0.5 from -3 to 3;
transform A = (2,h,0,1.5);
vector u = (2,0) color blue;
vector v = (h,1.5) color teal;
segment top from (h,1.5) to (2+h,1.5) color amber;
segment right from (2,0) to (2+h,1.5) color amber;
```

**Manipulate.** Compare h=0, h=2, and h=−2. Edit every occurrence of the height 1.5 in the transformation, vector v, and boundary segments, then predict the new determinant before running the scene.

**Explain.** The determinant is 2·1.5−h·0=3. The sloping side gets longer, but its perpendicular height remains 1.5. Length and area are different quantities.

**Transfer.** Replace u by (3,0) and v by (h,−2). What area and orientation result? The area is 6 and the determinant is −6, independently of h. Every occurrence of a changed coordinate must be edited: the scene is an explicit mathematical construction.

## The definition that works in every dimension

For an n-by-n matrix, define its determinant to be the unique function of its columns that is multilinear, alternating, and equal to 1 on the identity matrix. Multilinear means linear in each column **while all other columns are fixed**. Alternating means the value is zero whenever two columns agree; together with multilinearity this implies that swapping two columns reverses the sign.

Existence is supplied by the permutation formula: sum, over all permutations σ of 1,…,n, the product a_(σ(1),1)…a_(σ(n),n), multiplied by the sign of σ. The sign is +1 for an even number of pairwise swaps and −1 for an odd number. Uniqueness follows by expanding each column in the standard basis. Terms with repeated basis vectors vanish; the remaining terms are signed permutations of the identity. This definition fixes all higher-dimensional signs without relying on a picture.

Geometrically, |det A| measures the n-dimensional volume of the parallelepiped spanned by A's columns. The same construction explains why a singular transformation has zero n-dimensional volume, even when its image contains many nonzero vectors.

## Calculation rules, with reasons

Three elementary operations make determinants computationally useful:

1. Swapping two rows or columns multiplies the determinant by −1.
2. Multiplying one row or column by k multiplies the determinant by k.
3. Adding a multiple of one row or column to another leaves the determinant unchanged.

For the third column rule, multilinearity writes the new determinant as the old determinant plus k times a determinant with two identical columns. The extra term is zero. The row rules follow from det(Aᵀ)=det A, which follows by pairing each permutation with its inverse in the formula.

A triangular matrix has determinant equal to the product of its diagonal entries. Elimination therefore calculates a determinant efficiently: track swaps and row scalings, eliminate below the diagonal, and multiply the pivots. Adding a row multiple needs no correction. Multiplying the **whole** n-by-n matrix by k multiplies its determinant by kⁿ, because all n rows are scaled.

## Worked example 1: orientation and composition

Take A with rows (2,1) and (1,−1). Its determinant is −3. The image of a region of area 5 has area 15, and orientation reverses. Now let B have rows (1,2) and (0,1). Its determinant is 1: it is a shear. Multiplying gives AB with rows (2,5) and (1,1), whose determinant is 2−5=−3. The shear changes shape before A acts, but contributes no area scaling.

The general theorem is det(AB)=det A det B. To prove it, regard the columns of B as variables and apply A to each. The resulting determinant is alternating and multilinear in those columns, so uniqueness says it equals a constant times det B. Setting B=I identifies that constant as det A. This proof covers singular matrices as well as invertible ones.

## Worked example 2: a three-dimensional calculation

Let C have rows (1,2,0), (2,5,1), and (0,1,3). Subtract twice row 1 from row 2, obtaining rows (1,2,0), (0,1,1), and (0,1,3). Subtract row 2 from row 3 to obtain the triangular matrix with rows (1,2,0), (0,1,1), and (0,0,2). Both operations preserve the determinant, so det C=1·1·2=2.

Its columns span a parallelepiped of volume 2. Because the determinant is nonzero, all three columns are independent. More generally, A is invertible exactly when det A≠0. Independent columns allow elimination to produce n nonzero pivots, giving a nonzero determinant after the tracked corrections. Dependent columns give determinant zero by multilinearity. Also, det(A⁻¹)=1/det A follows from AA⁻¹=I and the product theorem.

## Laboratory 2: finding the boundary between orientations

**Predict.** The columns are u=(a,1), v=(1,b). Identify the algebraic condition for collapse before trying sliders. Is a=0 by itself enough?

```mathviz
scene "Crossing through a singular transformation";
domain -5 5;
range -5 5;
coordinates equal;
param a = 1.5 from -2 to 2;
param b = 1 from -2 to 2;
transform A = (a,1,1,b);
vector u = (a,1) color blue;
vector v = (1,b) color teal;
segment top from (1,b) to (a+1,1+b) color amber;
segment side from (a,1) to (a+1,1+b) color amber;
```

**Manipulate.** Hold a=1 and move b through 1. Then hold a=−1 and move b through −1. Find a zero determinant with no zero column.

**Explain.** The determinant ab−1 changes sign when ab crosses 1. At collapse the columns are dependent. At a=0, the determinant is −1 for every b, despite the zero entry.

**Transfer.** Fix a=2 and derive the value of b giving area 3 with each orientation. The equations 2b−1=3 and 2b−1=−3 give b=2 and b=−1.

## A misconception worth testing

Determinants are not additive as functions of whole matrices. For two-by-two identity matrices, det(I+I)=det(2I)=4, whereas det I+det I=2. Multilinearity applies to one row or column at a time. Similarly, determinant 1 does not mean every length is preserved: diag(2,1/2) preserves area but stretches one coordinate direction and contracts the other.

## Exercises

1. **Foundation.** Calculate the determinant and area for columns (3,1) and (−1,2). State the orientation.
2. **Foundation.** A three-by-three matrix has determinant 5. Find the determinant after swapping two rows, then doubling one row, then adding four times a different row to it.
3. **Foundation.** Give an invertible two-by-two matrix with determinant −1 that does not preserve lengths.
4. **Core.** Calculate the determinant of the matrix with rows (2,1,0), (0,3,1), and (1,0,2), showing your operations or expansion.
5. **Core.** For columns (t,1) and (1,t), determine all t giving singularity, positive orientation, and negative orientation.
6. **Core.** If A is four-by-four with determinant −2, find det(3A), det(A²), and det(A⁻¹).
7. **Stretch.** Prove directly that adding k times column j to a distinct column i preserves the determinant.
8. **Stretch.** A linear map in three dimensions sends a cube of volume 8 to a parallelepiped of volume 12. What can you determine about its determinant, invertibility, and the volume scaling of its inverse?
9. **Core.** For A with rows (1,2),(2,4) and B with rows (0,−1),(1,0), compute AB, its determinant, its image, and its kernel. Explain why zero determinant does not imply the zero map.
10. **Stretch.** Let F:(Rⁿ)ⁿ→R be alternating and multilinear with F(e₁,…,eₙ)=0. Prove F is identically zero by basis expansion, and explain how this includes the singular-A case in the product proof.

<details>
<summary>Hints</summary>

1. Put the vectors into columns before using ad−bc.
2. Track one multiplier for each operation.
3. Consider diagonal matrices with entries of unequal absolute value.
4. Expand along the first row, or eliminate using the first pivot.
5. Factor t²−1 and inspect intervals separated by its zeros.
6. There are four scaled rows, and determinants multiply under composition.
7. Expand in column i; examine the extra determinant.
8. Volume supplies the absolute value, but not the orientation.

9. **Hint 1:** compute the two columns of AB separately. **Hint 2:** factor the output as a scalar times (1,2).
10. **Hint 1:** expand every argument in the standard basis. **Hint 2:** repeated-index terms vanish, and permutation terms are signed copies of the specified zero value.

</details>

<details>
<summary>Complete solutions</summary>

1. The matrix has rows (3,−1), (1,2), so det=3·2−(−1)·1=7. Its parallelogram has area 7 and positive orientation.
2. Swapping gives −5, doubling gives −10, and the row addition leaves −10. The fact that the destination row was previously doubled changes nothing about the addition rule.
3. diag(2,−1/2) has determinant −1. It sends (1,0) to (2,0), doubling that vector's length, so it fails to preserve lengths.
4. Expansion gives 2(3·2−1·0)−1(0·2−1·1)=12+1=13. Thus the columns are independent and span volume 13.
5. The determinant is (t−1)(t+1). It vanishes at t=±1, is positive for t<−1 or t>1, and is negative for −1<t<1. At t=−1 the columns are negatives of each other; at t=1 they coincide.
6. det(3A)=3⁴(−2)=−162; det(A²)=(−2)²=4; det(A⁻¹)=−1/2. The inverse exists because det A≠0.
7. Write column i as c_i+kc_j. Multilinearity gives det(c₁,…,c_i,…,c_n)+k det(c₁,…,c_j,…,c_n), where the second matrix also retains its original column j. Its repeated columns make the second term zero.
8. The absolute determinant is 12/8=3/2. Its sign cannot be recovered from unsigned volume. Either sign is nonzero, so the map is invertible. The inverse scales volume by 2/3 and has determinant either 2/3 or −2/3, with the same sign as the original determinant.

9. AB has rows (2,−1),(4,−2), so det(AB)=−4+4=0. Its output is (2x−y)(1,2), giving image span{(1,2)} and kernel {(x,y):y=2x}=span{(1,2)}. The nonzero output AB(1,0)=(2,4) proves it is not the zero map; its determinant vanishes because its image has no two-dimensional area.
10. Expand each vⱼ=∑bᵢⱼeᵢ. In the resulting finite sum, repeated basis indices give zero by alternation. Every remaining term is a scalar times F on a permutation of the standard basis, which is ±F(e₁,…,eₙ)=0. Hence every term vanishes. For F(v₁,…,vₙ)=det[Av₁ … Avₙ], the normalization value is det A; if this is zero, the same argument proves all such output determinants vanish without dividing by det A.

</details>

## Labelled determinant results and a complete product proof

**Definition 9.1 (Alternating multilinear form).** A real-valued function F(v₁,…,vₙ) of n vectors in Rⁿ is multilinear if it is linear in each vector while all other arguments are fixed. It is alternating if F is zero whenever two arguments are equal. No assumption that F(e₁,…,eₙ)=1 is included in this definition.

The absence of normalization is essential in the product proof. A function formed by applying a singular A to every argument can vanish identically, so dividing by its value at the standard basis would be invalid. Instead we prove a scalar-multiple statement that includes the zero function.

**Lemma 9.2 (Swapping two arguments reverses sign).** For an alternating multilinear F, interchanging any two arguments changes the sign of its value.

*Proof.* Hold all other arguments fixed. Put u+v in both selected positions. Alternation gives zero. Expanding in these two positions gives four terms. The terms with u in both positions and v in both positions are zero. The remaining terms are F with u,v in the two orders, so their sum is zero. Thus one is the negative of the other. This argument applies to any pair of positions. ∎

**Theorem 9.3 (Uniqueness by basis expansion, without normalization).** Every alternating multilinear F:(Rⁿ)ⁿ→R satisfies

F(v₁,…,vₙ)=F(e₁,…,eₙ) det[v₁ … vₙ].

*Proof.* Write vⱼ=∑ᵢ₌₁ⁿbᵢⱼeᵢ. Repeated multilinearity expands F into the finite sum over all index choices i₁,…,iₙ:

∑ b_(i₁,1)⋯b_(iₙ,n) F(eᵢ₁,…,eᵢₙ).

If two indices coincide, alternation makes that term zero. The surviving choices contain each index from 1 through n exactly once, so are permutations σ. Lemma 9.2 shows that F(e_σ(1),…,e_σ(n))=sgn(σ)F(e₁,…,eₙ). The parity sign is well-defined, as in the permutation formula defining determinant. Factoring out F(e₁,…,eₙ) leaves exactly the permutation formula for det B, where B has columns vⱼ. This proves the assertion even when the factored scalar is zero. No division has occurred. ∎

For n=1 the sum has one term and the assertion is simply linearity on R. If one includes zero-by-zero matrices, the standard convention is det I₀=1 and the product identity is immediate. The substantive proof below concerns every positive integer n.

**Theorem 9.4 (Determinant of a product).** For every pair of real n-by-n matrices A,B, including singular matrices,

det(AB)=det A det B.

*Proof.* Fix A and define F(v₁,…,vₙ)=det[Av₁ … Avₙ]. Each map v↦Av is linear, so determinant multilinearity makes F multilinear in each original argument. If two arguments agree, their A-images agree, so F is alternating. Its value at (e₁,…,eₙ) is det[Ae₁ … Aeₙ]=det A because these are the columns of A.

Apply Theorem 9.3 to the columns b₁,…,bₙ of B. It gives F(b₁,…,bₙ)=det A det B. But the columns of AB are Ab₁,…,Abₙ, so the left side is det(AB). This proves the identity. Neither A nor B was assumed invertible. In particular det A=0 causes the entire function F to be zero by the same expansion theorem; it does not create an omitted exceptional case. ∎

The original short argument above is now fully justified: “uniqueness” means that every alternating multilinear function is a scalar multiple of determinant, rather than only the uniqueness of a normalized function. Keeping these two statements distinct avoids a hidden division by det A.

## Worked example 3: a singular factor and a nonzero image

Let A have rows (1,2),(2,4), and let B have rows (0,−1),(1,0), a quarter-turn. A is singular because its second row is twice its first. Direct multiplication gives AB with rows (2,−1),(4,−2). Its determinant is 2(−2)−(−1)4=0.

The product theorem predicts the same answer from det A=0 and det B=1. Yet AB is not the zero matrix: it sends (1,0) to (2,4). Zero determinant means zero two-dimensional area scaling, rather than zero output for every input. The image is the line spanned by (1,2), and the input line satisfying 2x−y=0 is discarded.

Before B acts, A discards the line x+2y=0. The quarter-turn rotates input directions before they reach A, so the discarded input line changes, while the one-dimensional output image remains the same. This illustrates why determinant multiplicativity records volume scaling but does not describe all directional information.

A square of area one becomes a line segment or a collapsed parallelogram under the singular product. It may have nonzero length, so a statement about lost area cannot be transferred to length. In three dimensions a singular map may similarly retain an entire plane while sending all three-dimensional volumes to zero.

## Further consequences and their limits

**Result 9.5 (Similarity preserves determinant).** If P is invertible, det(P⁻¹AP)=det A.

*Proof.* Multiplicativity gives det(P⁻¹AP)=det(P⁻¹)det A det P. From P⁻¹P=I we obtain det(P⁻¹)det P=1. Therefore the product reduces to det A. ∎

A coordinate change can alter the matrix entries while describing the same linear operator. The reciprocal volume factors from the two coordinate translations cancel. This is the determinant counterpart of rank invariance from the coordinate chapter.

**Result 9.6 (Dependent columns have zero determinant).** If the columns of A are dependent, det A=0.

*Proof.* A zero column gives zero by linearity in that column. Otherwise use a nontrivial dependence to express some column as a combination of the others. Expand in that column. Each term has a column repeated in two positions and is zero by alternation. Thus their sum is zero. ∎

The converse can be proved by elimination as above. It must not be inferred from a picture of a particular projection. Elimination works in arbitrary dimension and tracks determinant changes through reversible row operations.

Determinant is a useful exact certificate of nonsingularity, but its magnitude alone does not measure numerical sensitivity. The diagonal matrix diag(1000,0.001) has determinant one while scaling different directions by very different factors. The identity also has determinant one, yet treats those directions equally. Area scaling records the product of directional effects; it can hide a large stretch compensated by a large contraction. Later singular values will separate those effects.

## Summary

Determinant is the normalized alternating multilinear measure of oriented volume. Basis expansion proves the scalar-multiple uniqueness statement needed for multiplicativity, including every singular case. Row operations provide efficient calculation, and nonzero determinant characterizes invertibility for square matrices. Determinant does not by itself measure lengths or numerical sensitivity; orthogonality and projection next provide tools for those questions.
