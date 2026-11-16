# 5. Subspaces and the four spaces of a matrix

**Prerequisites:** linear combinations, matrix multiplication, and elimination. **Goals:** test a subspace; find and interpret all four fundamental spaces; distinguish an output restriction from an input ambiguity; justify rank–nullity.

## A space that keeps its algebra

A subspace of Rⁿ is a subset on which vector addition and scalar multiplication still work without leaving the subset. Precisely, W is a subspace when it contains zero and, for every u, v in W and real scalars a, b, it contains au+bv. This compact test includes both closure conditions. The scalars may be negative or zero; checking only positive combinations tests something weaker.

The span of any list is a subspace: adding combinations or multiplying one by a scalar produces another combination. A line through the origin is therefore a subspace, including lines with negative slope. A line missing the origin is not. A circle centered at the origin also fails: it usually excludes zero, and doubling a point leaves the circle. Shape alone is insufficient; the defining operations decide.

**Worked test.** Let W={(x,y,z): x−2y+z=0}. Zero satisfies the equation. If u and v satisfy it, the left side evaluated at au+bv equals a times its value at u plus b times its value at v, hence zero. Thus W is a subspace. Replacing the right side by 1 destroys this argument: zero no longer belongs. That new set is an affine plane, a translated subspace useful in solving nonhomogeneous systems.

## Columns describe what comes out

For an m-by-n matrix A, multiplication is a map Rⁿ→Rᵐ. Its column space, Col(A), is the span of its columns inside Rᵐ. The equation Ax=b is solvable exactly when b belongs to Col(A), because Ax is the combination of columns with coefficients x₁,…,xₙ. This is a statement about possible outputs.

The null space, Null(A)={x in Rⁿ: Ax=0}, describes invisible inputs. It is a subspace since A(au+bv)=aAu+bAv. If x₀ solves Ax=b, all solutions are exactly x₀+Null(A): adding a null vector preserves the output, and subtracting two solutions gives a null vector. A unique solution is possible exactly when the null space contains only zero, provided a solution exists.

### Laboratory: when an output direction disappears

The columns below are (1,0) and (2,k). Their coefficients are s and t. Read the rose point as an output, not a third column.

```mathviz
scene "Two columns and their reachable outputs";
domain -5 5;
range -5 5;
coordinates equal;
param k = 1 from -1 to 1;
param s = 1 from -2 to 2;
param t = 1 from -1 to 1;
vector first = (1,0) color blue;
vector second = (2,k) color teal;
point output = (s+2*t,k*t) color rose;
segment contribution from (s,0) to (s+2*t,k*t) color amber;
```

**Predict:** which outputs become impossible when k=0? **Manipulate:** vary both coefficients at k=1, then edit the parameter's initial value to zero and run the scene. **Explain:** when k≠0, solve t=y/k and s=x−2y/k for an arbitrary target (x,y). When k=0, every output has second coordinate zero. Slider ranges display only a bounded sample of the span. **Transfer:** replace the second column by (2k,k). Determine which values of k give a line and which give a plane, using algebra before editing the picture.

## Rows, perpendicularity, and the other two spaces

The row space Row(A) lies in Rⁿ, the same space as the inputs. The left null space Null(Aᵀ) lies in Rᵐ. A superscript T means transpose: interchange rows and columns. The word “left” comes from yᵀA=0, equivalent to Aᵀy=0.

For real vectors define u·v=Σuᵢvᵢ. Perpendicular means this dot product is zero. The ith entry of Ax is the dot product of row i with x. Consequently Null(A) consists exactly of vectors perpendicular to every row, and hence to every vector in the row space. Similarly Null(Aᵀ) consists exactly of vectors perpendicular to the column space. These are equivalences, not merely one-way observations.

This gives two different restrictions. Row-space directions detect an input; null-space directions cannot affect the result. Column-space directions are achievable outputs; left-null-space vectors impose consistency tests. In particular, if y is in Null(Aᵀ), every solvable right side satisfies y·b=0.

### Worked example: all four spaces

Consider A with rows (1,2,0), (0,0,1), (1,2,1). Subtracting row one and row two from row three gives a zero row. There are two pivots, in columns one and three.

- **Column space:** use the original pivot columns (1,0,1) and (0,1,1). Their combinations are (a,b,a+b), so the column space is the plane z=x+y.
- **Row space:** the nonzero reduced rows (1,2,0) and (0,0,1) form a basis. Its vectors have the form (a,2a,b).
- **Null space:** solving x₁+2x₂=0 and x₃=0 gives x=t(−2,1,0).
- **Left null space:** Aᵀy=0 gives y₁+y₃=0 and y₂+y₃=0, hence y=t(−1,−1,1).

The column-space condition b₃=b₁+b₂ is precisely the left-null test (−1,−1,1)·b=0. For b=(3,4,7), all solutions are (3−2t,t,4). For b=(3,4,8), there is no solution. The same matrix can therefore give infinitely many solutions or none, depending on the right side.

**Common error:** pivot columns of the reduced matrix generally do not span the original column space. Row operations preserve row space and null space, but transform the column space. Use reduction to locate pivot indices, then return to the original columns.

## Rank counts independent directions

Rank r is the number of pivots. The nonzero reduced rows are independent because their leading entries occupy different columns, so the row space has dimension r. The original pivot columns are also independent: an invertible sequence of row operations preserves column relations. Every nonpivot column is a combination of pivot columns in reduced form, and reversing the operations preserves that combination. Thus column rank also equals r.

For Ax=0 there are n−r free variables. Set one free variable to 1 and the others to zero to obtain a special solution for each. Every solution is their combination, and these solutions are independent because their free coordinates recover the coefficients. Therefore

dim Null(A)=n−r, and rank(A)+dim Null(A)=n.

This is rank–nullity: the input has n independent directions, of which r affect distinguishable outputs and n−r disappear. Applying the same argument to Aᵀ, whose rank is also r, gives dim Null(Aᵀ)=m−r. Chapter 6 develops dimension independently of elimination; Chapter 8 extends this reasoning to general linear maps.

### Laboratory: travelling without changing the output

Here A has rows (1,2) and (2,4). Both its input and output spaces happen to be R²; the picture overlays them for comparison. The rose point is an input, the teal point its output, and the amber segment lies in one solution set.

```mathviz
scene "A whole line of inputs has one output";
domain -5 5;
range -5 5;
coordinates equal;
param h = 0 from -2 to 2;
vector row = (1,2) color blue;
vector kernel = (-2,1) color amber;
segment fibre from (-3.8,2.4) to (4.2,-1.6) color amber;
point input = (0.2-2*h,0.4+h) color rose;
point output = (1,2) color teal;
```

**Predict:** will moving h change either output coordinate? **Manipulate:** move h through positive and negative values. Edit the output formula to `(0.2-2*h+2*(0.4+h),2*(0.2-2*h)+4*(0.4+h))` to verify the cancellation computationally. **Explain:** the input is (0.2,0.4)+h(−2,1), and A(−2,1)=0. **Transfer:** find a parallel line of inputs whose output is (2,4), then edit both displayed points and the fibre segment. For example, use input `(0.4-2*h,0.8+h)`, output `(2,4)`, and segment endpoints `(-3.6,2.8)` and `(4.4,-1.2)`. Explain why this affine line is not itself a subspace.

## Exercises

1. **Foundation.** Classify each subset of R²: y=3x; y=3x+1; xy=0. For each failure give a specific violated subspace condition.
2. **Foundation.** For A with rows (1,2,3) and (0,1,1), state the ambient dimensions of its four spaces before calculating anything.
3. **Core.** Find bases for all four spaces of the matrix in Exercise 2 and check all four dimensions.
4. **Core.** For the worked 3-by-3 example, solve Ax=(1,−2,−1) and determine whether Ax=(1,−2,0) is consistent.
5. **Core.** Prove that two solution sets of Ax=b and Ax=c are either disjoint or identical.
6. **Core.** A 4-by-7 matrix has rank 3. Find both nullities. Can every b in R⁴ occur? Can a consistent system have a unique solution?
7. **Stretch.** Prove that the intersection of two subspaces is a subspace. Give two subspaces whose union is not a subspace.
8. **Stretch.** Explain why checking a left-null-space basis is enough to decide consistency, using the four-space dimension counts.
9. **Core.** For B with rows (1,0,2,−1),(0,1,3,2),(1,1,5,1), solve Bx=(2,−1,1) completely and state a basis for each null space.
10. **Stretch.** If R=EA with E invertible, prove Null(Rᵀ)=E⁻ᵀNull(Aᵀ). Explain why this is consistent with the changed column space.

<details>
<summary>Hints</summary>

1. Test zero, then add (1,0) and (0,1) where relevant. 2. Columns have two entries; inputs have three. 3. Solve the homogeneous equations with x₃ free. 4. Apply the condition b₃=b₁+b₂. 5. Apply A to a point in the intersection. 6. Use n−r and m−r separately. 7. Closure must hold simultaneously in both sets. 8. Every column is perpendicular to the left null space; compare dimensions of the resulting spaces.

9. **Hint 1:** the third equation is the sum of the first two. **Hint 2:** choose x₃=s,x₄=t and solve the two remaining equations.
10. **Hint 1:** transpose R=EA to obtain Rᵀ=AᵀEᵀ. **Hint 2:** set z=Eᵀy and solve for y.

</details>

<details>
<summary>Worked solutions</summary>

1. The first is span{(1,3)}. The second excludes zero. For xy=0, the vectors (1,0) and (0,1) belong but their sum (1,1) does not, so closure under addition fails.
2. Column and left null spaces lie in R². Row and null spaces lie in R³. Ambient dimension is not the dimension of the particular subspace.
3. Rank is 2. Column basis: (1,0),(2,1). Row basis: (1,2,3),(0,1,1). Setting x₃=t gives x₂=−t and x₁=−t, so null basis: (−1,−1,1). The left null space is {0}, with empty basis. Dimensions are respectively 2,2,1,0.
4. The first system is consistent, with solutions (1−2t,t,−2). The second is inconsistent because 0≠1+(−2). It fails the left-null test independently of any attempted elimination.
5. If z lies in both, then Az=b and Az=c, so b=c. The equations, and hence their solution sets, coincide. If no such z exists the sets are disjoint. Empty solution sets cause no exception.
6. Nullity is 7−3=4; left nullity is 4−3=1. The column space has dimension 3 inside R⁴, so some outputs are impossible. Every consistent system has four free parameters and cannot have a unique solution.
7. Zero belongs to both spaces. If u,v belong to both, so does au+bv by applying closure in each space. Their intersection is therefore a subspace. The two coordinate axes have union xy=0, which fails Exercise 1's addition test.
8. Being perpendicular to a basis implies being perpendicular to every combination of that basis. Thus the test describes Null(Aᵀ)⊥, which contains Col(A). Its dimension is m−(m−r)=r, the same as Col(A), so they coincide. Here the identity dim W⊥=m−dim W follows by solving the independent equations given by a basis of W; it uses the rank–nullity calculation above.

9. With x₃=s,x₄=t, the first equations give x₁=2−2s+t and x₂=−1−3s−2t. The third holds because 1=2+(−1). Thus all solutions are (2,−1,0,0)+s(−2,−3,1,0)+t(1,−2,0,1). The two direction vectors form a null-space basis by their free coordinates. Solving Bᵀy=0 gives y₁=−y₃ and y₂=−y₃, so the left null-space basis is (−1,−1,1).
10. A vector y satisfies Rᵀy=0 exactly when AᵀEᵀy=0, equivalently Eᵀy=z∈Null(Aᵀ). Invertibility gives y=E⁻ᵀz, proving the equality of sets. Since (E⁻ᵀz)·(Ew)=z·w, the transformed left-null vectors remain perpendicular to transformed column vectors.

</details>

## Definitions and invariance under elimination

**Definition 5.1 (Ambient space and subspace dimension).** An ambient space is the space in which the vectors under discussion live. The dimension of a subspace is the number of vectors in any basis for that subspace. These numbers answer different questions. For an m-by-n matrix, the null space has ambient dimension n, but its own dimension can be anything from zero to n.

Naming the ambient space first prevents misleading comparisons. A two-dimensional column space in R⁵ and a two-dimensional row space in R⁷ have the same dimension but contain vectors of different sizes. They cannot be equated as sets. The equality of row rank and column rank compares numbers of independent directions, rather than identifying the directions themselves.

**Result 5.2 (What row operations preserve).** If R=EA, where E is an invertible m-by-m matrix, then Null(R)=Null(A), Row(R)=Row(A), and Col(R)=E Col(A). Moreover, column relations are preserved with their coefficients: ∑cⱼRⱼ=0 if and only if ∑cⱼAⱼ=0.

*Proof.* Rx=0 means EAx=0, equivalent to Ax=0 after applying E⁻¹. Every row of EA is a combination of rows of A, giving Row(R)⊆Row(A). Applying A=E⁻¹R gives the reverse inclusion. The equality Col(R)=E Col(A) follows from Rx=E(Ax) as x ranges over Rⁿ. Finally, ∑cⱼRⱼ=E(∑cⱼAⱼ), and invertibility of E makes this vanish precisely when the original combination vanishes. ∎

This separates a preserved set from a transformed set. The null space is literally the same subset of input space after row reduction. The column space generally moves inside the output space. However, its dependence coefficients remain the same, so the positions of pivot columns identify independent original columns. These are the exact reasons for the instruction “use original pivot columns.”

## Worked example 2: reduction can move the column space

Take A with rows (1,2),(1,2),(0,0). Its two columns are (1,1,0) and (2,2,0), so its column space is the line spanned by (1,1,0). Subtracting row one from row two gives R with rows (1,2),(0,0),(0,0). The reduced column space is the horizontal line spanned by (1,0,0), a different line in R³.

Both matrices have rank one. Both have null space span{(−2,1)}, because each output depends only on x₁+2x₂. Their row spaces also agree, each being span{(1,2)}. Thus equal rank does not mean equal column space, and equal null space does not mean the two maps have identical outputs.

Now solve Ax=(3,3,0). The equation is x₁+2x₂=3, giving x=(3−2t,t). Row reduction must also transform the right side: subtracting its first coordinate from its second gives (3,0,0), which belongs to Col(R). If we reduced A but left the right side as (3,3,0), we would incorrectly declare inconsistency. An augmented matrix keeps this transformation synchronized.

For the original A, the left null equations require y₁+y₂=0, with y₃ free. A basis is (1,−1,0),(0,0,1). The consistency conditions are therefore b₁−b₂=0 and b₃=0, exactly the description of its column line. For R the left null space is instead spanned by (0,1,0),(0,0,1). Both left nullities are two, but the tests apply to differently represented right sides.

## A proof that row rank equals column rank

**Theorem 5.3 (Rank agreement).** For a real m-by-n matrix A with r pivots, the row space and column space both have dimension r.

*Proof.* Reduce A to RREF R. Its r nonzero rows span its row space. They are independent because in a combination of these rows, the entry in each pivot column is exactly the coefficient of that pivot row. Hence all coefficients must vanish for a zero combination. Row-space invariance gives dimension r for Row(A).

The pivot columns of R are distinct standard-coordinate vectors in the first r row positions, so are independent. Every other column has entries only in those positions and is the combination of pivot columns with those entries as coefficients. Thus the pivot columns form a basis of Col(R). By the column-relation assertion in Result 5.2, the corresponding original columns are independent and span Col(A), giving dimension r. ∎

Nothing in this argument assumes square shape. Zero rows and nonpivot columns measure different deficits because m and n may differ. The zero matrix has r=0; its row and column spaces have empty bases, while both null spaces are their entire ambient spaces. The same formulas cover this boundary case without inventing a pivot or including the zero vector in a basis.

**Result 5.4 (Null-space basis from free coordinates).** In a homogeneous system with n variables and r pivots, the n−r special solutions obtained by setting one free coordinate to one and the others to zero form a basis of Null(A).

*Proof.* Back substitution makes every pivot coordinate a linear combination of the free coordinates. Therefore a solution with free values t₁,…,tₙ₋ᵣ is the same linear combination of the special solutions. This proves spanning. In a zero combination of special solutions, inspect each free coordinate: it equals the coefficient of its corresponding special solution. All coefficients are therefore zero, proving independence. ∎

This proof identifies why the special solutions are naturally independent. Their pivot entries may look complicated and need not resemble perpendicular vectors. Their free entries already provide a visible identity matrix that recovers every coefficient.

## Worked example 3: a rectangular map with both deficits

Let B have rows (1,0,2,−1), (0,1,3,2), and (1,1,5,1). Its third row is the sum of the first two, so reduction produces two nonzero rows and rank two. The first two columns are independent original pivot columns, namely (1,0,1) and (0,1,1). Hence Col(B) is the plane of outputs satisfying b₃=b₁+b₂.

The row space has basis (1,0,2,−1),(0,1,3,2) inside R⁴. To find the null space, set x₃=s and x₄=t. Then x₁=−2s+t and x₂=−3s−2t. Thus a basis is (−2,−3,1,0),(1,−2,0,1). These two vectors are independent because their third and fourth coordinates recover their coefficients.

The left null space has basis (−1,−1,1), and its single test is exactly the output-plane equation. A right side b=(2,−1,1) passes the test. One particular solution is (2,−1,0,0), and all solutions are this vector plus arbitrary combinations of the two null-space basis vectors. The right side (2,−1,2) fails the test and has no solution.

The four dimensions are 2,2,2,1 for column space, row space, null space, and left null space respectively. The input account is 4=2+2, while the output account is 3=2+1. Losing two input directions and missing one output direction are compatible properties of the same map. There is no single “number of missing dimensions” until the relevant ambient space has been specified.

These spaces are descriptions of exact linear structure. In data analysis, nearly dependent rows may be treated as dependent at a stated tolerance, but that is an additional numerical decision. The exact definitions here neither choose a tolerance nor convert a small entry to zero automatically.

## Summary

Column space records attainable outputs, null space records invisible inputs, row space records input measurements, and left null space records consistency tests. Elimination preserves row and null spaces while transforming the column and left null spaces. Pivot and free-coordinate arguments prove both rank agreement and rank–nullity. Bases and dimension will next describe these ideas independently of a particular matrix calculation.
