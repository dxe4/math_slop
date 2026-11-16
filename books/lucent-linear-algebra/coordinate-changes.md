# 7. Coordinates and change of basis

**Prerequisites:** bases, matrix multiplication, inverses, and linear transformations. **Time:** two study sessions plus exercises.

**Learning goals:** distinguish a vector from its coordinates; translate between bases; compute the matrix of an operator in a new basis; explain why a picture can stay fixed while its numerical description changes.

## A vector is not its address

Imagine marking a point on the floor and then rotating the coordinate axes. The point stays put. Its coordinates change because the measuring directions change. Moving the point while keeping the axes fixed is a different operation.

An **ordered basis** B = (b₁,…,bₙ) of a vector space V supplies a unique expression

```text
v = c₁b₁ + ⋯ + cₙbₙ.
```

The column [v]ᴮ = (c₁,…,cₙ) is the coordinate vector of v relative to B. Throughout this chapter, tuples used in matrix calculations denote columns. The order matters: exchanging b₁ and b₂ exchanges the first two coordinates. A basis need not be perpendicular or consist of unit vectors.

Why is the expression unique? Spanning supplies at least one expression. If both c and d describe v, subtracting gives Σ(cᵢ−dᵢ)bᵢ = 0. Independence forces every cᵢ−dᵢ to vanish. These two properties explain why a dependent spanning list cannot provide unambiguous coordinates.

In ℝⁿ we already have the standard basis E. Put the standard-coordinate columns of the new basis into a matrix:

```text
P = [ b₁  ⋯  bₙ ].
[v]ᴱ = P[v]ᴮ,                  [v]ᴮ = P⁻¹[v]ᴱ.
```

Read the first formula as “combine the new basis vectors.” The second solves for the combination coefficients. P is invertible precisely because its columns form a basis. Attach source and destination bases to your calculation before choosing P or P⁻¹.

## Worked example: an oblique coordinate system

Take b₁ = (1,0), b₂ = (1,1), and v = (3,2). Solving

```text
c₁(1,0) + c₂(1,1) = (c₁+c₂,c₂) = (3,2)
```

gives c₂ = 2 and c₁ = 1. Thus [v]ᴮ = (1,2), although [v]ᴱ = (3,2). The matrices are

```text
P = [1  1]       P⁻¹ = [1 −1].
    [0  1]             [0  1]
```

The coefficient 1 does not mean the point lies one standard horizontal unit from the vertical axis. It specifies one copy of b₁ after the contribution from b₂ is accounted for. Coordinates are combination coefficients, not automatically perpendicular projections.

### Laboratory: change the basis, preserve the point

Here b₁ = (1,0), b₂ = (s,1), and v = (u,w). The teal arrow is b₂; blue and amber segments build (u−sw)b₁ + wb₂. The rose point stays at v when only s changes. Every displayed basis is valid: its determinant is 1.

```mathviz
scene "One point, changing oblique coordinates";
domain -6 6;
range -4 4;
coordinates equal;
param s = 1 from -1.5 to 1.5;
param u = 3 from -3 to 3;
param w = 2 from -2 to 2;
vector b_one = (1,0) color violet;
vector b_two = (s,1) color teal;
segment first_part from (0,0) to (u-s*w,0) color blue;
segment second_part from (u-s*w,0) to (u,w) color amber;
point v = (u,w) color rose;
```

**Predict:** with u = 3 and w = 2, what happens to the first B-coordinate as s increases from 0 to 1? **Manipulate:** move s, then try w = −1. **Explain:** write [v]ᴮ = (u−sw,w) and use it to explain both observations, including any reversed segment. **Transfer:** edit b₂ to (s,2); derive the new coordinates before updating the two segment expressions. They become (u−sw/2,w/2).

## Rotation: an active motion or a new description?

For a counterclockwise angle θ, let

```text
b₁ = (cos θ, sin θ),       b₂ = (−sin θ, cos θ).
P = [cos θ  −sin θ],       P⁻¹ = [ cos θ  sin θ].
    [sin θ   cos θ]               [−sin θ  cos θ]
```

The inverse is the transpose because these columns are perpendicular unit vectors. Consequently a fixed v = (u,w) has coordinates

```text
[v]ᴮ = (u cos θ + w sin θ, −u sin θ + w cos θ).
```

This is a clockwise rotation of its *coordinate pair*. It does not mean v moved clockwise. By contrast, P[v]ᴱ gives the standard coordinates of the vector obtained by actively rotating v counterclockwise.

At θ = π/2, the new axes are b₁ = (0,1), b₂ = (−1,0). For v = (3,2), [v]ᴮ = (2,−3): two steps along b₁ and minus three along b₂ reach the original point.

### Laboratory: rotated axes around a fixed vector

Blue and amber segments show the two basis contributions. Their meeting point changes; the rose endpoint does not. Equal axis scales are essential for interpreting the right angles correctly.

```mathviz
scene "Rotating the measuring directions";
domain -5 5;
range -5 5;
coordinates equal;
param theta = 0 from -3.141592653589793 to 3.141592653589793;
param u = 3 from -3 to 3;
param w = 2 from -3 to 3;
vector b_one = (cos(theta),sin(theta)) color violet;
vector b_two = (-sin(theta),cos(theta)) color teal;
segment first_part from (0,0) to ((u*cos(theta)+w*sin(theta))*cos(theta),(u*cos(theta)+w*sin(theta))*sin(theta)) color blue;
segment second_part from ((u*cos(theta)+w*sin(theta))*cos(theta),(u*cos(theta)+w*sin(theta))*sin(theta)) to (u,w) color amber;
point v = (u,w) color rose;
```

**Predict:** when θ reaches π/2, which contribution points downward, if any? **Manipulate:** explore positive and negative θ; type a precise angle in the code if needed. **Explain:** calculate the two coefficients and reconstruct v. At π/2 the second coefficient is negative, but its contribution points right, not down. **Transfer:** add an actively rotated point `(u*cos(theta)-w*sin(theta),u*sin(theta)+w*cos(theta))`; explain why it moves while v stays fixed.

## The same operator in another basis

Let T: V → V be linear, and let A be its matrix in E. To operate on B-coordinates, translate to E, apply A, then translate back:

```text
[v]ᴮ ──P──▶ [v]ᴱ ──A──▶ [T(v)]ᴱ ──P⁻¹──▶ [T(v)]ᴮ.
```

Reading the composition from right to left gives the new matrix

```text
C = P⁻¹AP.
```

Matrices related this way are **similar**. Similarity describes one operator in two coordinate systems. It is not a claim that the entries look similar, or that A and C have the same effect on a bare numerical column whose basis is left unspecified.

### Worked example: a stretch seen obliquely

Let T(x,y) = (2x,y), so A = diag(2,1), and use the oblique basis from the first example. Multiplication gives

```text
AP = [2  2],       C = P⁻¹AP = [2  1].
     [0  1]                       [0  1]
```

Check columns directly: T(b₁) = 2b₁, while T(b₂) = (2,1) = b₁+b₂. The columns of C must therefore be (2,0) and (1,1).

For our v, C(1,2) = (4,2), and translating back gives P(4,2) = (6,2) = T(3,2). The off-diagonal entry in C comes from the coordinate system. It does not create an additional physical shear.

Similarity also preserves eigenvalues. If Az = λz with z ≠ 0, then c = P⁻¹z is nonzero and Cc = P⁻¹APc = P⁻¹Az = λc. The eigenvector's coordinates change; its eigenvalue and underlying direction do not.

For a map between different spaces, one may choose different bases for inputs and outputs. The formula becomes Q⁻¹AP, where P translates input coordinates and Q translates output coordinates. This is not generally similarity.

## Exercises

1. **Foundation.** In B = ((1,0),(1,1)), find [(−2,3)]ᴮ and reconstruct the vector.
2. **Foundation.** For B = ((2,0),(1,3)), find P, P⁻¹, and [(5,6)]ᴮ.
3. **Core.** Rotate the measuring axes by π/2. Find the new coordinates of (−1,4). Separately find its active counterclockwise rotation in standard coordinates.
4. **Core.** For A = diag(3,2) and P = [[1,s],[0,1]], calculate C = P⁻¹AP. Check its second column geometrically.
5. **Core.** Explain and correct: “The coordinates changed from (3,2) to (1,2), so the vector moved two units left.”
6. **Core.** A map has standard matrix diag(2,3). Its input basis matrix is P = [[1,1],[0,1]] and its output basis matrix is Q = diag(2,1). Find its matrix in these bases.
7. **Stretch.** Prove C² = P⁻¹A²P and extend to positive integer powers. What does this say about repeated applications of an operator?
8. **Stretch.** In the oblique basis ((1,0),(1,1)), derive the squared Euclidean length of a vector with coordinates (a,b). Why is a²+b² usually wrong?
9. **Core.** For T(x,y)=(x,y,x+y), input basis ((1,1),(1,−1)), and output basis ((1,0,1),(0,1,1),(0,0,1)), find the representing matrix and check its action on the B-coordinate column (2,1).
10. **Stretch.** Let P be the synthesis matrix of a basis of Rⁿ. Prove that G=PᵀP is symmetric and positive definite. Show that cᵀGd is the Euclidean inner product of the represented vectors.

<details>
<summary>Hints</summary>

1. Solve c₁+c₂ = −2 and c₂ = 3.
2. Solve 2c₁+c₂ = x and 3c₂ = y.
3. A passive coordinate change uses P⁻¹; an active rotation uses P.
4. Multiply AP before premultiplying by P⁻¹.
5. Identify which basis labels are missing.
6. Follow the input-to-output translation diagram with Q at the end.
7. Insert P P⁻¹ between successive factors A.
8. Reconstruct the standard coordinates first.

9. **Hint 1:** columns are the images of input basis vectors expressed in the output basis. **Hint 2:** the output coordinates of (r,s,t) are (r,s,t−r−s).
10. **Hint 1:** transpose the product. **Hint 2:** cᵀGc=‖Pc‖² and P is invertible.

</details>

<details>
<summary>Detailed solutions</summary>

1. The coordinates are (−5,3). Indeed −5(1,0)+3(1,1) = (−2,3).
2. P = [[2,1],[0,3]] and P⁻¹ = [[1/2,−1/6],[0,1/3]]. Thus c₂ = 2, c₁ = 3/2; reconstructing gives (3,0)+(2,6) = (5,6).
3. New coordinates are (4,1), because 4(0,1)+1(−1,0) = (−1,4). Active rotation instead produces (−4,−1). These answers describe different operations.
4. P⁻¹ = [[1,−s],[0,1]], giving C = [[3,s],[0,2]]. The second basis vector (s,1) maps to (3s,2) = s(1,0)+2(s,1), so its B-coordinate column is (s,2).
5. The premise is consistent with [v]ᴱ = (3,2) and [v]ᴮ = (1,2), with v unchanged. To infer motion, both coordinate pairs must refer to the same fixed basis. In B, (1,2) reconstructs to (3,2).
6. AP = [[2,2],[0,3]], and Q⁻¹AP = [[1,1],[0,3]]. As a check, the second input basis vector (1,1) maps to (2,3), which has output coordinates (1,3) relative to ((2,0),(0,1)).
7. C² = (P⁻¹AP)(P⁻¹AP) = P⁻¹A²P. Induction then gives Cᵏ = P⁻¹AᵏP for every positive integer k. Repeated evolution is independent of how we record coordinates; translation is needed only before and after the entire sequence.
8. Standard coordinates are (a+b,b), so the squared length is (a+b)²+b² = a²+2ab+2b². The formula a²+b² presupposes an orthonormal basis. For example, (0,1) in this basis represents (1,1), whose squared length is 2, not 1.

9. The images are (1,1,2) and (1,−1,0), with C-coordinate columns (1,1,0) and (1,−1,0). The matrix has rows (1,1),(1,−1),(0,0). It sends (2,1) to (3,1,0), which reconstructs to (3,1,4). The original input reconstructs to (3,1), and T(3,1)=(3,1,4).
10. Gᵀ=(PᵀP)ᵀ=PᵀP=G. For any nonzero c, invertibility gives Pc≠0, so cᵀGc=(Pc)ᵀ(Pc)>0. For represented vectors v=Pc,w=Pd, their dot product is (Pc)ᵀ(Pd)=cᵀGd. This also explains why raw coordinate dot products require an orthonormal basis.

</details>

**Ready to continue:** reconstruct a vector before and after a basis change, explain the order in P⁻¹AP, and distinguish a changed description from a changed vector. These habits make eigenvector bases and diagonalization meaningful rather than mysterious matrix recipes.

## Definitions and the coordinate map

**Definition 7.1 (Synthesis and coordinate maps).** For an ordered basis B=(b₁,…,bₙ) of V, its synthesis map S_B:Rⁿ→V sends c to ∑cᵢbᵢ. Its coordinate map K_B:V→Rⁿ sends v to [v]ᴮ. These are inverse functions. In a coordinate ambient space, the matrix P with columns bᵢ represents S_B relative to standard coordinates.

**Theorem 7.2 (Coordinates preserve linear structure).** Both S_B and K_B are linear bijections.

*Proof.* S_B(αc+βd)=αS_B(c)+βS_B(d) by distributing the finite sum. Spanning makes it surjective and independence makes it injective. For arbitrary u,v∈V, their coordinate columns satisfy S_B(a[u]ᴮ+b[v]ᴮ)=au+bv. Uniqueness of coordinates gives [au+bv]ᴮ=a[u]ᴮ+b[v]ᴮ, proving linearity of K_B. The defining reconstruction identities prove that the two maps are inverses. ∎

This theorem explains why abstract vectors can be calculated with columns. It does not identify the vector with a particular column independently of a basis. Different coordinate maps provide different numerical descriptions, all preserving addition and scalar multiplication. A polynomial, for example, can have coefficient coordinates in one basis and sampled-value coordinates in another, while remaining the same function.

**Definition 7.3 (Transition matrix).** For ordered bases B,C of the same n-dimensional space, the transition matrix M_C←B is the matrix satisfying [v]ᶜ=M_C←B[v]ᴮ for every v. Its jth column is [bⱼ]ᶜ.

**Result 7.4 (Composition and inversion of transitions).** For three bases B,C,D,

M_D←B=M_D←C M_C←B, M_B←C=(M_C←B)⁻¹.

*Proof.* Applying the two coordinate translations in succession sends [v]ᴮ first to [v]ᶜ and then to [v]ᴰ. Their product therefore equals the direct translation on every coordinate vector, hence on each standard basis vector, proving matrix equality. Translating from B to C and back fixes every column, so the products in both orders are identity matrices. ∎

The arrow labels are a practical way to prevent an inverse mistake. Adjacent labels must match, just as intermediate vector-space dimensions must match in matrix composition. “From B to C” and “columns are B vectors written in C” are two descriptions of the same matrix, not competing conventions.

## Worked example 3: a map between different spaces

Let T:R²→R³ be T(x,y)=(x,y,x+y). Use input basis B=((1,1),(1,−1)) and output basis C=((1,0,1),(0,1,1),(0,0,1)). We seek the matrix that accepts B-coordinate columns and produces C-coordinate columns.

First verify that C is a basis: a general combination of its members is (a,b,a+b+c). Every standard vector (r,s,t) therefore has the unique C-coordinate column (r,s,t−r−s). This proof supplies both spanning and independence.

Now apply T to the input basis vectors. T(1,1)=(1,1,2), whose C-coordinates are (1,1,0). T(1,−1)=(1,−1,0), whose C-coordinates are (1,−1,0). Thus the desired 3-by-2 matrix has rows (1,1),(1,−1),(0,0).

Check a non-basis input. The standard vector v=(3,1) has B-coordinates (2,1), since 2(1,1)+(1,−1)=(3,1). The new matrix sends (2,1) to (3,1,0). Synthesizing in C gives (3,1,4), precisely T(3,1). The zero final coordinate says that every output lies in the span of the first two C vectors; it does not say the standard third output coordinate is zero.

In standard coordinates T has matrix A with rows (1,0),(0,1),(1,1). The input synthesis matrix P has rows (1,1),(1,−1), and the output synthesis matrix Q has rows (1,0,0),(0,1,0),(1,1,1). The formula Q⁻¹AP yields exactly the matrix constructed from images. This is a change of domain and codomain coordinates, with different matrix sizes. Calling it similarity would obscure that difference.

## Similarity preserves structure, not every numerical formula

**Theorem 7.5 (The same operator in two bases).** For an operator T:V→V, if A is its matrix in basis E and P translates B coordinates into E coordinates, its B matrix is C=P⁻¹AP. Consequently P maps Null(C) bijectively to Null(A), and C and A have the same rank and nullity.

*Proof.* Reconstruct the input in E, apply A, and translate the result back to B; this gives the stated formula. From PC=AP, Cc=0 is equivalent to A(Pc)=0 because P is invertible. Thus P restricts to a bijection of the kernels. Similarly PCc=A(Pc) identifies the image spaces under P, so image dimensions agree. A linear bijection preserves the size of a basis, proving both dimension assertions. ∎

The kernel vectors have changed coordinate columns, while their underlying vectors have not changed. Rank and nullity are therefore properties of the operator rather than accidents of its representation. Later, determinant and eigenvalues will provide further quantities preserved by similarity.

Lengths require more care. If P is not orthogonal, it need not preserve the ordinary coordinate dot product. For c=[v]ᴮ and d=[w]ᴮ in Rⁿ, the actual Euclidean inner product is

v·w=(Pc)ᵀ(Pd)=cᵀ(PᵀP)d.

The matrix G=PᵀP is called the Gram matrix of the basis. Its entries are bᵢ·bⱼ. This formula is derived by reconstruction, so it remains valid for oblique and non-unit basis vectors. Only when G=I does the ordinary coordinate formula cᵀd give the original Euclidean inner product.

For B=((1,0),(1,1)), G has rows (1,1),(1,2). A coordinate vector (0,1) therefore has squared length two, while (1,−1) has squared length one. Comparing raw coordinate entries across bases without their measurement rule can turn a fixed length into an apparent change. The projection chapter will use orthonormal coordinates because their Gram matrix is I, making algebra and geometry agree particularly simply.

A useful final habit is to annotate every column in a calculation with its basis. If an equality combines [v]ᴮ and [v]ᶜ without a transition, stop and reconstruct both sides. Many apparent matrix paradoxes disappear as soon as the missing coordinate labels are restored.

## Summary

Coordinates are produced by a linear bijection determined by an ordered basis. Transition matrices compose according to their source and destination labels. An operator changes by similarity when both ends use the same new basis, while a map between different spaces uses two independent translations. Geometry requires the basis Gram matrix unless the coordinates are orthonormal. The next chapter applies these ideas to polynomials and other vector spaces.
