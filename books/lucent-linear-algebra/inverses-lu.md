# 4. Inverses, elementary matrices, and LU factorization

**Prerequisites:** matrix multiplication, row reduction, pivots, and the equation Ax=b. **Learning goals:** decide when an inverse exists, explain the equivalences behind nonsingularity, compute an inverse by elimination, and reuse a factorization to solve several systems.

Allow 90–120 minutes, including the experiments and exercises. Keep paper nearby: predict a result before revealing it through a slider.

## Reversing a linear transformation

An inverse reverses a transformation for every input. For a square matrix A, an inverse B satisfies BA=AB=I; we write B=A⁻¹. Thus A⁻¹(Ax)=x and A(A⁻¹b)=b. The first equation recovers an input; the second guarantees that every proposed output can actually be reached.

Not every transformation can be reversed. The projection P=[1,0;0,0] sends both (2,3) and (2,−7) to (2,0). No function receiving only that output can determine which input occurred. Information was lost. This is why “undo the arrows in the picture” is insufficient: reversibility requires distinct inputs to remain distinct.

**Uniqueness proof.** If B and C are both inverses of A, then B=B(AC)=(BA)C=C. Associativity justifies changing parentheses; we never exchange the order of factors. Similarly, if A and B are invertible, the inverse of AB is B⁻¹A⁻¹: multiply in either order and cancel adjacent inverse pairs. Reversal changes the order of operations.

## Laboratory 1: undoing a shear

The shear A=[1,a;0,1] maps (x,y) to (x+ay,y). Its inverse subtracts ay from the first coordinate. Blue represents the original vector (1,1), amber its sheared image, and teal the partially recovered vector. At undo=1 the teal vector coincides with blue.

**Predict:** if a=−2, where does the amber tip land? Must reversing a negative shear move left or right?

```mathviz
scene "Reverse a shear without losing information";
domain -4 4;
range -2 3;
coordinates equal;
param a = 1 from -2 to 2;
param undo = 0.5 from 0 to 1;
vector original = (1,1) color blue;
vector sheared = (1+a,1) color amber;
vector recovered = (1+a-undo*a,1) color teal;
segment correction from (1+a,1) to (1+a-undo*a,1) color amber;
```

**Manipulate:** fix a, sweep undo from zero to one, then try both signs of a. Edit every vector and segment endpoint's second coordinate to 2 and replace every shear contribution a by 2*a. Why is changing only the displayed height mathematically wrong?

**Explain:** the inverse depends on the vector's second coordinate, not a fixed horizontal displacement. Verify [1,−a;0,1][1,a;0,1]=I. The experiment illustrates this identity; multiplication proves it for every vector.

## One theorem, several useful tests

For a real n×n matrix A, the following statements are equivalent:

1. A is invertible.
2. Ax=b has exactly one solution for every b∈ℝⁿ.
3. Ax=0 has only the zero solution.
4. A has a pivot in every column and every row.
5. The columns of A form a basis of ℝⁿ.
6. Row reduction takes A to I.

Here is a proof that makes the square hypothesis visible. If A is invertible, multiplying Ax=b by A⁻¹ gives the unique solution x=A⁻¹b. In particular, the homogeneous system has only the zero solution. A nonpivot column would create a free variable and a nonzero homogeneous solution, so all n columns contain pivots. There are exactly n rows, so every row also contains a pivot. The reduced echelon form is therefore I. This means the columns are independent and span ℝⁿ, hence form a basis. Conversely, a basis provides unique coordinates for every b, giving statement 2 and hence statement 3.

To close the remaining circle, let row reduction to I consist of elementary row operations. Each operation is multiplication on the left by an invertible elementary matrix Eᵢ. Therefore Eₖ⋯E₁A=I, and A=E₁⁻¹⋯Eₖ⁻¹. The product Eₖ⋯E₁ is a two-sided inverse of A.

**Boundary case:** the rectangular matrix [1;0] has independent columns and a trivial nullspace, but cannot produce (0,1). Independence and spanning coincide here only because the matrix is square.

## Worked example: compute an inverse by elimination

Take A=[2,1;1,1]. Reduce the augmented matrix [A | I], applying every row operation to both blocks:

```text
[ 2  1 | 1  0 ]    swap rows     [ 1  1 | 0  1 ]
[ 1  1 | 0  1 ]       →         [ 2  1 | 1  0 ]

R₂ ← R₂−2R₁                    [ 1  1 | 0   1 ]
                               [ 0 −1 | 1  −2 ]

R₂ ← −R₂; R₁ ← R₁−R₂          [ 1  0 |  1 −1 ]
                               [ 0  1 | −1  2 ]
```

Thus A⁻¹=[1,−1;−1,2]. For b=(3,2), the input is (1,1); substitution gives A(1,1)=(3,2). If the left block cannot become I, the matrix has no inverse. Continuing to manipulate the right block does not repair that failure.

An elementary matrix is obtained by performing one row operation on I. Swapping rows undoes itself; multiplying a row by c≠0 is reversed by multiplying by 1/c; adding m times one row to another is reversed by adding −m times that row. This explains why elimination preserves solution sets.

## Worked example: store elimination as LU

Explicitly finding an inverse is usually unnecessary when solving Ax=b. Instead, store elimination and reuse it. Consider

```text
A = [2 1]     L = [1 0]     U = [2 1]
    [4 3]         [2 1]         [0 1]
```

Elimination subtracts twice row 1 from row 2. Hence E=[1,0;−2,1] gives EA=U, and A=E⁻¹U=LU. The elimination multiplier +2 appears below the diagonal of L. L reconstructs what elimination removed.

To solve Ax=(5,11), first solve Ly=(5,11) by **forward substitution**: y₁=5 and 2y₁+y₂=11, so y₂=1. Then solve Ux=y by **back substitution**: x₂=1 and 2x₁+x₂=5, so x₁=2. Substitution confirms A(2,1)=(5,11).

For another right-hand side, keep L and U and repeat only these triangular solves. For dense n×n matrices, elimination costs on the order of n³ arithmetic operations, while each pair of triangular solves costs on the order of n². That difference matters when many measurements share the same coefficient matrix.

## Laboratory 2: factorization is composition

Blue is x=(p,q), amber is Ux=(2p+q,q), and teal is LUx=(2p+q,4p+3q). The connecting segments identify stages, not additional linear maps.

**Predict:** for x=(0,1), calculate both intermediate and final vectors before moving the sliders.

```mathviz
scene "Apply U first and then L";
domain -8 8;
range -8 8;
coordinates equal;
param p = 1 from -1 to 1;
param q = 1 from -1 to 1;
vector input = (p,q) color blue;
vector upper = (2*p+q,q) color amber;
vector output = (2*p+q,4*p+3*q) color teal;
segment firststage from (p,q) to (2*p+q,q) color amber;
segment secondstage from (2*p+q,q) to (2*p+q,4*p+3*q) color violet;
```

**Manipulate:** test the two standard basis vectors, then set p=−q/2. To display ULx instead, change the intermediate arrow `upper` to Lx=`(p,2*p+q)` and the output to `(4*p+q,2*p+q)`. Update the first segment's endpoint to Lx and the second segment's endpoints to Lx and ULx. The intermediate stage must agree with the new factor order.

**Explain:** why does exchanging the factor order change the answer? Why do agreement on both standard basis vectors and linearity prove LU=A for every input?

## Pivoting: zero is a warning about the algorithm

The invertible matrix A=[0,2;1,3] has a zero first pivot. Swap its rows using P=[0,1;1,0]. Then PA=[1,3;0,2]=U, so PA=LU with L=I. To solve Ax=b, solve Ly=Pb and then Ux=y: the same permutation must act on the right-hand side.

Partial pivoting chooses an available entry of largest absolute value in the current column. It avoids dividing by a needlessly tiny pivot and generally improves numerical reliability, although it does not cure an intrinsically sensitive system. In larger factorizations, later row swaps also exchange the already recorded multiplier entries in L. The identity to check is PA=LU, using the implementation's stated permutation convention.

## Exercises

1. **Foundation:** find the inverse of diag(3,−2), and solve Ax=(6,8).
2. **Foundation:** explain why [1,2;2,4] is not invertible using a nonzero vector.
3. **Core:** invert [1,2;3,7] by row operations and verify your answer.
4. **Core:** use the displayed LU factors to solve Ax=(1,1).
5. **Core:** factor [0,2;1,3] with pivoting and solve Ax=(4,7).
6. **Core:** prove that the inverse of an invertible lower triangular matrix is lower triangular.
7. **Stretch:** give rectangular A and B with BA=I but AB≠I; explain the lost square hypothesis.
8. **Stretch:** for Aε=[ε,1;1,1], explain the large multiplier without pivoting and how a swap changes it when 0<ε<1.
9. **Core.** Using the displayed L and U for A=[2,1;4,3], solve Ax=(0,1), then use linearity and the earlier solution for (5,11) to solve Ax=(15,31).
10. **Stretch.** Let A be m-by-n and suppose both a left inverse L and a right inverse R exist. Prove that m=n and L=R, using rank or basis comparison.

<details>
<summary>Hints</summary>

1. Undo each coordinate scaling.
2. Find two dependent columns.
3. Subtract three times the first row from the second.
4. Solve Ly=b before Ux=y.
5. Permute b along with A.
6. Solve Ax=eⱼ column by column using forward substitution.
7. Embed a line in a plane, then project back.
8. Compare the ratios 1/ε and ε.

9. **Hint 1:** solve the lower triangular system first. **Hint 2:** write (15,31)=3(5,11)−2(0,1).
10. **Hint 1:** a left inverse forces independent columns, while a right inverse forces spanning. **Hint 2:** compare dimensions and then calculate L(AR)=(LA)R.

</details>

<details>
<summary>Full worked solutions</summary>

1. A⁻¹=diag(1/3,−1/2), because both products with A are I. Multiplication gives x=(2,−4); checking yields (6,8).
2. Multiplication gives A(−2,1)=(0,0). If an inverse existed, applying it would imply (−2,1)=0, a contradiction.
3. Start with [1,2 | 1,0;3,7 | 0,1]. After R₂←R₂−3R₁, the second row is [0,1 | −3,1]. Then R₁←R₁−2R₂ gives [1,0 | 7,−2]. Thus A⁻¹=[7,−2;−3,1]. The product AA⁻¹ has entries (7−6,−2+2;21−21,−6+7), which form I.
4. Forward substitution gives y₁=1, y₂=1−2=−1. Back substitution gives x₂=−1 and x₁=(1−(−1))/2=1. Hence x=(1,−1); A times this vector is (1,1).
5. P=[0,1;1,0], L=I, U=[1,3;0,2]. Since Pb=(7,4), first y=(7,4), then 2x₂=4 and x₁+3x₂=7. Thus x=(1,2), which produces (4,7).
6. In column j of A⁻¹, solve Ax=eⱼ. The first j−1 right-hand entries vanish. Forward substitution inductively gives x₁=⋯=xⱼ₋₁=0, since every diagonal entry is nonzero. Thus all inverse entries above the diagonal vanish.
7. Let A=[1;0] and B=[1,0]. Then BA=[1], the identity on ℝ, while AB=[1,0;0,0] is a projection on ℝ². A reaches only one axis; B discards the second coordinate.
8. Without swapping, the multiplier is 1/ε and the next pivot is 1−1/ε. Swapping gives PAε=[1,1;ε,1], multiplier ε, and next pivot 1−ε. Therefore L=[1,0;ε,1] and U=[1,1;0,1−ε]. The much smaller multiplier avoids the large intermediate terms, although as ε approaches 1 the matrix itself approaches singularity.

9. Ly=(0,1) gives y=(0,1). Ux=y gives x₂=1 and 2x₁+1=0, so x=(−1/2,1). The old solution for (5,11) is (2,1), so the requested solution is 3(2,1)−2(−1/2,1)=(7,1). Direct substitution gives A(7,1)=(15,31).
10. Independent n columns in Rᵐ imply n≤m, while n spanning columns imply m≤n; hence m=n. Associativity gives L=L Iₘ=L(AR)=(LA)R=IₙR=R. Thus the common matrix is a two-sided inverse.

</details>

**Exit check:** explain separately what an inverse means, why elimination finds it, and why triangular factors are often a better computational tool.

## Definitions and reversible products

**Definition 4.1 (One-sided inverses).** If A is m-by-n, a left inverse is an n-by-m matrix L with LA=Iₙ. A right inverse is an n-by-m matrix R with AR=Iₘ. A two-sided inverse satisfies both conditions. For rectangular matrices these are different requests.

**Result 4.2 (Meaning of one-sided inverses).** A left inverse exists precisely when the columns of A are independent. A right inverse exists precisely when the columns of A span Rᵐ.

*Proof.* If LA=Iₙ and Ax=0, applying L gives x=0, proving independent columns. Conversely, if the columns are independent, elimination has a pivot in every column. Its RREF has Iₙ in the first n rows and zero rows below. Write EA for this RREF, where E is the invertible product of the elementary row-operation matrices. Taking the first n rows of E as L gives LA=Iₙ. If AR=Iₘ, each b=A(Rb) is in the column space. Conversely, if the columns span Rᵐ, choose for each standard eⱼ a vector rⱼ with Arⱼ=eⱼ. Assemble these as the columns of R to obtain AR=Iₘ. ∎

In the square case either property forces n pivots, and the equivalence theorem above gives a two-sided inverse. The square hypothesis is doing real work. An embedding of a line in a plane can be undone on its image but cannot produce every plane vector. A projection onto a line can produce every desired line value but cannot remember the discarded coordinate.

**Result 4.3 (Inverse of a product).** For invertible square A and B of the same size, (AB)⁻¹=B⁻¹A⁻¹.

*Proof.* Associativity gives (B⁻¹A⁻¹)(AB)=B⁻¹(A⁻¹A)B=I and (AB)(B⁻¹A⁻¹)=A(BB⁻¹)A⁻¹=I. Both identities are needed in the definition. The factors were never commuted. ∎

A useful analogy is a reversible sequence of actions: remove the last action first. The formula is not a special exception to a scalar rule. Scalar multiplication hides the order because scalars commute. Matrices reveal the order already present in composition.

## Worked example 3: several right sides and one factorization

Let A have rows (2,1),(4,3), with L and U as above. Suppose two measurements give b=(5,11) and c=(0,1). Instead of forming A⁻¹, solve with the same factors.

For b, Ly=b gives y=(5,1), and Ux=y gives x=(2,1). For c, forward substitution gives z₁=0 and 2z₁+z₂=1, hence z=(0,1). Back substitution gives w₂=1 and 2w₁+w₂=0, so w=(−1/2,1). Direct multiplication gives Aw=(0,1), checking the second solve.

Linearity now supplies a third answer at almost no cost. For right side 3b−2c=(15,31), the solution is 3x−2w=(7,1). Indeed A(7,1)=(15,31). This is a statement about combining solutions of systems sharing the same coefficient matrix; it would not be justified if the measurements came from different matrices.

We can also store the two solves as columns. Let the right-side matrix have columns b,c and the solution matrix have columns x,w. Then AX=[b c]. Forward and back substitution work column by column. This perspective explains why the augmented inverse calculation [A | I] computes all n basis right-side solves simultaneously.

The inverse for this example is the matrix with rows (3/2,−1/2),(−2,1). Multiplying it by b or c agrees with the factorization answers. The two methods describe the same algebra, but factoring avoids constructing and storing a separate matrix when only a few right sides are needed.

## Triangular structure and uniqueness

**Definition 4.4 (Unit lower triangular matrix).** A square matrix is lower triangular if all entries above the diagonal vanish, and unit lower triangular if its diagonal entries are all one. Upper triangular has the reversed zero pattern.

**Result 4.5 (Uniqueness of an unpermuted LU factorization).** If an invertible square matrix satisfies A=LU=L′U′, where L,L′ are unit lower triangular and U,U′ are upper triangular, then L=L′ and U=U′.

*Proof.* Each unit lower triangular factor is invertible: forward substitution solves Lx=b uniquely for every b, because each diagonal coefficient is one. Thus U=L⁻¹A and U′=L′⁻¹A are products of invertible matrices and are also invertible. Rearranging gives L′⁻¹L=U′U⁻¹. The left side is unit lower triangular; the right side is upper triangular. Products preserve triangular form, and forward or back substitution shows inverses do as well. A matrix that is both lower and upper triangular is diagonal. Since the left side has diagonal entries one, this common matrix is I. Multiplying back yields L=L′ and U=U′. ∎

The normalization of L matters. Without fixing its diagonal, a diagonal scaling could be moved from one factor to the other. The permutation also matters: this theorem compares factorizations with the same row order. A pivoting algorithm records PA=LU, and changing P changes the problem being factored.

A zero pivot therefore has two interpretations that must be separated. It may mean the current row order is unsuitable, as in the invertible example with leading entry zero. After all possible pivot choices have been exhausted, it may instead reveal genuine rank loss. Reporting “division by zero” without distinguishing these cases confuses an algorithmic obstacle with a property of the transformation.

Numerical arithmetic adds a further distinction. Exact nonzero pivots establish algebraic invertibility. Very small pivots can make a particular elimination order unreliable in finite precision, while an intrinsically sensitive matrix can remain difficult even under good pivoting. The exact identities LA=I or PA=LU specify what is being computed; an error analysis describes how accurately a numerical implementation realizes those identities.

## Summary

An inverse reverses a square linear map on every input and output. Elementary matrices explain why elimination constructs it, while LU records elimination for reuse across right sides. One-sided inverses distinguish independence from spanning, and pivoting distinguishes a poor row order from genuine rank loss. These ideas lead naturally to the spaces that record attainable outputs and invisible input directions.
