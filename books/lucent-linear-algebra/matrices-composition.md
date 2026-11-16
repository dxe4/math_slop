# 3. Matrices as maps, and why order matters

**Prerequisites:** linear combinations and elimination. **Time:** two study sessions plus laboratories. **After this chapter:** you should be able to read a matrix as a transformation, calculate compatible products, and explain composition geometrically.

## Columns tell you where the basic directions go

An m-by-n matrix has m rows and n columns. It defines a function from Rⁿ to Rᵐ: an input has n coordinates, and an output has m. Multiplying A by a column vector x means taking a linear combination of A's columns, with the entries of x as coefficients.

For example, let

```text
    [ 1  2  -1 ]
A = [ 0  3   4 ].
```

Its input is a vector in R³ and its output belongs to R². The rule is A(x,y,z)=(x+2y−z,3y+4z). The same rule written by columns is x(1,0)+y(2,3)+z(−1,4). Reading by rows describes each output measurement; reading by columns describes how the input directions contribute.

**Worked example: a rectangular map.** For the input (2,−1,1), the row formulas give (2−2−1,−3+4)=(−1,1). The column calculation gives 2(1,0)−(2,3)+(−1,4), again (−1,1). The three column vectors live in the output space R², even though the input has three coordinates. A matrix need not be square to define a meaningful transformation.

The standard input vector eⱼ has 1 in position j and zeros elsewhere. Consequently Aeⱼ is precisely column j of A. Knowing the images of all the standard basis vectors determines the whole map, because x=x₁e₁+⋯+xₙeₙ. This observation is the bridge between a geometric action and a table of numbers.

## Linearity is a promise about combinations

A map T:Rⁿ→Rᵐ is linear when T(u+v)=T(u)+T(v) and T(cu)=cT(u) for all vectors u,v and real scalars c. Equivalently, T preserves all linear combinations. Every matrix map is linear: expanding A(cu+dv) coordinate by coordinate yields cAu+dAv.

Conversely, every linear map between these coordinate spaces is represented by a matrix. Put T(e₁),…,T(eₙ) in the columns of A. Then linearity gives T(x)=∑xⱼT(eⱼ)=Ax. This is a proof of existence, and the forced column values also prove uniqueness for the standard coordinates.

Linearity forces T(0)=0, since T(0)=T(0+0)=T(0)+T(0). The converse is false: T(x,y)=(x²,y) fixes the origin but fails T(2,0)=2T(1,0). A translation T(x,y)=(x+1,y) is also not linear, since it moves the origin. Later, homogeneous coordinates can represent affine transformations with larger matrices, but that does not make translation a linear map of the original R².

### Laboratory: rebuild a map from its columns

**Predict.** The matrix has rows (a,b) and (c,d). Where do e₁ and e₂ go? Write the image of (x,y) before opening the controls. The sliders p and q select the input's x and y coordinates.

```mathviz
scene "The transformed grid is determined by two columns";
domain -6 6;
range -6 6;
coordinates equal;
param a = 1 from -2 to 2;
param b = 1 from -2 to 2;
param c = 0 from -2 to 2;
param d = 1 from -2 to 2;
param p = 1 from -2 to 2;
param q = 1 from -2 to 2;
transform A = (a,b,c,d);
vector input = (p,q) color rose;
vector output = (a*p+b*q,c*p+d*q) color amber;
```

**Manipulate.** Start with the shear shown. Change p while holding q fixed. Then set a=0,b=−1,c=1,d=0 to make a quarter-turn. Finally set a=1,b=2,c=0,d=0 and inspect the collapsed grid.

**Explain.** The columns are (a,c) and (b,d), not the two written rows. The output is x times the first column plus y times the second. Explain why the final setting loses information: every output has second coordinate zero, and distinct inputs can share the same first output coordinate. The original input arrow is shown alongside the transformed output; it is a reference, not an extra transformed basis vector.

## Composition determines matrix multiplication

Suppose B maps Rⁿ to Rᵖ and A maps Rᵖ to Rᵐ. Applying B and then A gives x↦A(Bx), represented by AB. Thus an m-by-p matrix times a p-by-n matrix produces an m-by-n matrix. The inner dimensions must match because the output of the first operation is the input of the second. Read the action from right to left.

Column j of AB must equal A times column j of B, since that column records what happens to eⱼ. Entrywise, (AB)ᵢⱼ=∑ₖAᵢₖBₖⱼ. This is the familiar row-times-column rule, now derived from composition rather than imposed as a mysterious recipe.

**Worked example: compatible rectangular maps.** Use A from above and let

```text
    [ 1   0 ]
B = [ 0   1 ].
    [ 1  -1 ]
```

Here B(s,t)=(s,t,s−t), followed by A, gives (s+2t−(s−t),3t+4(s−t))=(3t,4s−t). Therefore AB has rows (0,3) and (4,−1). Checking columns: A(1,0,1)=(0,4), and A(0,1,−1)=(3,−1). This product describes a map R²→R² even though its middle step passes through R³.

The reversed product BA is also defined in this example but is 3-by-3. It acts on a different space, so there is no reason even to compare its entries with AB. Sometimes only one product is defined: a 2-by-3 matrix can multiply a 3-by-4 matrix, while the reverse product is impossible.

## Noncommutativity is visible motion

Let R(x,y)=(−y,x) rotate through 90 degrees counterclockwise, and let H(x,y)=(x+sy,y) shear horizontally. Direct substitution gives

```text
       [ 0  -1 ]          [ s  -1 ]
RH  =  [ 1   s ],    HR = [ 1   0 ].
```

For s=1 and input e₂, RH gives (−1,1), whereas HR gives (−1,0). Both calculations are valid; they describe different ordered actions. A rotation changes which direction the subsequent shear treats as horizontal.

### Laboratory: shear, rotate, and reverse the order

**Predict.** With input (1,1) and s=1, compute both final outputs on paper. Will the outputs always differ when s≠0?

```mathviz
scene "Composition remembers the order of operations";
domain -6 6;
range -6 6;
coordinates equal;
param s = 1 from -2 to 2;
param p = 1 from -2 to 2;
param q = 1 from -2 to 2;
vector input = (p,q) color blue;
vector shear_then_rotate = (-q,p+s*q) color teal;
vector rotate_then_shear = (s*p-q,p) color rose;
segment shear_step from (p,q) to (p+s*q,q) color amber;
segment rotate_step from (p+s*q,q) to (-q,p+s*q) color teal;
```

**Manipulate.** Vary s and then choose inputs on each coordinate axis. Set s=0. Edit the second composite formula to intentionally reverse one sign, then use a basis-vector input to diagnose the error.

**Explain.** The difference RH(x,y)−HR(x,y) is (−sx,sy). For s≠0 it vanishes only at the zero input. For s=0, H is the identity and the two orders agree everywhere. The connecting segments indicate successive endpoints; they are not a claim that the physical path of a rotating point is straight.

## Algebraic rules, with their limits

Compatible matrix multiplication is associative: (AB)C=A(BC). Both sides apply C, then B, then A to every vector. Equality on all standard basis vectors proves the matrices equal. Products distribute over sums whenever dimensions permit. The identity Iₙ fixes every vector in Rⁿ, so AIₙ=A and IₘA=A for an m-by-n matrix A.

Cancellation and zero products require care. Let P(x,y)=(x,0) and Q(x,y)=(0,y). Both maps are nonzero, but PQ maps every vector to zero. A product AB=0 therefore does not imply A=0 or B=0. Also, P(1,0)=P(1,7), so applying the same matrix to two vectors can erase their difference. Inverses, developed next, identify when cancellation becomes legitimate.

## Exercises

1. **Foundation.** For A with rows (2,−1,0) and (1,3,4), state its input and output spaces and calculate A(1,2,−1).
2. **Foundation.** A linear map sends (1,0) to (2,3) and (0,1) to (−1,4). Find its matrix and its value at (3,−2).
3. **Core.** Decide whether T(x,y)=(x+y,2y) and S(x,y)=(x+y+1,2y) are linear. Prove each verdict.
4. **Core.** If A is 3-by-2, B is 2-by-4, and C is 4-by-3, give the dimensions of AB, BC, CA, and ABC. Is BA defined?
5. **Core.** Compute both products for R with rows (0,−1),(1,0) and H with rows (1,2),(0,1). Test them on (1,−1).
6. **Core.** Find nonzero 2-by-2 matrices P,Q such that PQ=0. Explain which directions each preserves or discards.
7. **Stretch.** Prove that two linear maps Rⁿ→Rᵐ agreeing on every standard basis vector agree everywhere. Explain why linearity is necessary.
8. **Stretch.** For A and B in the rectangular worked example, calculate BA and find a nonzero vector that BA sends to zero.
9. **Core.** Let A have rows (1,2),(0,1) and B have rows (3,0),(1,4). Calculate AB as a sum of two column-row outer products and verify its action on (2,−1).
10. **Stretch.** Suppose P:Rᵐ→Rᵖ is linear and injective. Prove that PA=PB implies A=B for any m-by-n matrices A,B. Show that the conclusion can fail when P is not injective.

<details>
<summary>Hints — attempt the calculations first</summary>

1. Count columns before multiplying. 2. Images of basis vectors are columns. 3. Expand combinations for T; evaluate S at zero. 4. Adjacent inner dimensions must match. 5. Substitute s=2 in the derived formulas. 6. Use projections onto the coordinate axes. 7. Expand an arbitrary vector in the standard basis; then compare with a nonlinear example. 8. Multiply B by each column of A, or solve Ax=0 first.

9. **Hint 1:** pair column k of A with row k of B. **Hint 2:** compare the final product on the given input with A(Bx).
10. **Hint 1:** apply P to each column of A−B. **Hint 2:** for failure, use projection onto the first coordinate and put a nonzero difference in its discarded direction.

</details>

<details>
<summary>Worked solutions</summary>

1. A:R³→R². The output is (2·1−2,1+3·2+4·(−1))=(0,3).
2. The matrix has rows (2,−1) and (3,4). The image of (3,−2) is 3(2,3)−2(−1,4)=(8,1).
3. T has matrix rows (1,1),(0,2), so it preserves combinations: each output coordinate is a fixed linear combination of inputs. S(0,0)=(1,0), so S is not linear.
4. AB is 3-by-4; BC is 2-by-3; CA is 4-by-2; ABC is 3-by-3. BA is undefined because B has four columns while A has three rows. Both parenthesisations of ABC are defined and have the same result.
5. RH has rows (0,−1),(1,2), giving RH(1,−1)=(1,−1). HR has rows (2,−1),(1,0), giving HR(1,−1)=(3,1). The unequal outputs demonstrate unequal matrices.
6. Take P with rows (1,0),(0,0), and Q with rows (0,0),(0,1). Q discards the x component and preserves the y component. P then discards that remaining y component, so PQ=0 although neither factor is zero.
7. For x=∑xⱼeⱼ, linearity gives T(x)=∑xⱼT(eⱼ)=∑xⱼS(eⱼ)=S(x). Without linearity the conclusion fails: on R, T(x)=x and S(x)=x² agree at the sole standard basis vector 1 but disagree at 2.
8. BA has rows (1,2,−1), (0,3,4), and (1,−1,−5). Solve Ax=0: 3y+4z=0 allows z=3,y=−4, and x+2y−z=0 gives x=11. Thus (11,−4,3) is nonzero and A sends it to zero, hence so does BA. Direct multiplication gives 11−8−3=0, −12+12=0, and 11+4−15=0.

9. The outer products have rows (3,0),(0,0) and (2,8),(1,4). Thus AB has rows (5,8),(1,4). It sends (2,−1) to (2,−2). Separately B(2,−1)=(6,−2) and A(6,−2)=(2,−2), agreeing with composition.
10. From PA=PB, every column d of A−B satisfies Pd=0. Injectivity says d=0, so every corresponding column agrees and A=B. If P has rows (1,0),(0,0), take A=0 and B with rows (0,0),(1,0). Then PB=0=PA although B≠A, because the image of B is discarded by P.

</details>

**Exit check.** Explain matrix multiplication using images of basis vectors before quoting the row-times-column rule. State the domain and codomain whenever you compose two transformations.

## Definitions and results for matrix maps

**Definition 3.1 (Matrix representation in standard coordinates).** For a real m-by-n matrix A, the associated map T_A:Rⁿ→Rᵐ is T_A(x)=Ax. Its jth column is T_A(eⱼ). The domain and codomain are part of the description; the entries alone do not justify multiplying arbitrary vectors or composing arbitrary maps.

**Theorem 3.2 (Matrices and linear maps correspond).** Every real m-by-n matrix determines a linear map Rⁿ→Rᵐ, and every such linear map has exactly one representing matrix in the standard bases.

*Proof.* Write the columns of A as a₁,…,aₙ. For arbitrary x,y and scalars c,d, A(cx+dy)=∑(cxⱼ+dyⱼ)aⱼ=c∑xⱼaⱼ+d∑yⱼaⱼ=cAx+dAy. Conversely, if T is linear, use x=∑xⱼeⱼ to obtain T(x)=∑xⱼT(eⱼ). Taking T(eⱼ) as the columns constructs a representing matrix. Any representing matrix must have exactly these columns because multiplication by eⱼ selects column j, proving uniqueness. ∎

The theorem is stronger than checking that a formula sends zero to zero. Consider T(x,y)=(xy,0). It fixes zero, yet T((1,0)+(0,1))=(1,0), while T(1,0)+T(0,1)=(0,0). No matrix represents this rule on all R². A table of values can disprove linearity with one counterexample; proving linearity requires arbitrary inputs or a theorem that supplies the universal step.

**Theorem 3.3 (Composition rule).** If B is p-by-n and A is m-by-p, then the unique matrix representing T_A∘T_B is AB, with entries (AB)ᵢⱼ=∑ₖ₌₁ᵖaᵢₖbₖⱼ.

*Proof.* The jth column of the composite matrix is T_A(T_B(eⱼ))=A bⱼ, where bⱼ is column j of B. Its ith entry is the dot product of row i of A with bⱼ, giving the formula. For arbitrary x, linearity then gives A(Bx)=∑xⱼA bⱼ=(AB)x. Thus checking the columns proves the rule for every input. ∎

This proof also explains why entrywise multiplication does not represent composition. Each intermediate coordinate contributes to an output coordinate, so those contributions must be summed. An entrywise product has a different meaning and, for rectangular matrices of different shapes, may not even have an entry to pair with every factor.

**Result 3.4 (Associativity without changing order).** For compatible A,B,C, the identity (AB)C=A(BC) holds.

*Proof.* For every x, ((AB)C)x=(AB)(Cx)=A(B(Cx))=A((BC)x)=(A(BC))x. These steps apply the composition rule. In particular the two matrices agree on each standard basis vector and therefore have equal corresponding columns. ∎

There is no commutation in this argument. It removes ambiguity in parentheses while preserving the order of the actions. That is why a long product can be evaluated in whichever grouping is computationally convenient, but cannot generally be rearranged. For instance, a product of a 100-by-2, a 2-by-100, and a 100-by-1 matrix is much cheaper when the rightmost pair is multiplied first, though both groupings represent exactly the same map.

## Worked example 3: noncancellation through a projection

Let P have rows (1,0),(0,0), and let A have rows (1,2),(3,4), while B has rows (1,2),(8,9). Then PA and PB both have rows (1,2),(0,0). Thus PA=PB even though A≠B.

Track the information rather than just multiplying. The difference A−B has rows (0,0),(−5,−5). It sends every input to the vertical axis. P discards that entire axis, so P(A−B)=0. Equality after P says only that the difference is invisible to P. It does not say the difference was zero.

For x=(1,0), Ax=(1,3) and Bx=(1,8), but both become (1,0) after projection. For x=(1,−1), Ax=Bx=(−1,−1); agreement at this particular input does not rescue cancellation. A matrix identity must hold at every input, while an equality for a single vector may have several independent explanations.

There is a precise positive statement. If P is injective, PA=PB does imply A=B: each column difference lies in the kernel of P and must vanish. In the square case an inverse provides the same argument algebraically by multiplying on the left. The missing hypothesis is a property of the map through which information passes, not a convention about symbols.

## Two decompositions of a product

The row-column formula can also be read as a sum of simple matrices. If A is m-by-p and B is p-by-n, write aₖ for column k of A and rₖ for row k of B. Then

AB=a₁r₁+⋯+aₚrₚ.

To verify this, inspect entry (i,j): the kth outer product contributes aᵢₖbₖⱼ, and summing gives precisely the product formula. Each outer product sends x to aₖ(rₖx): first measure a scalar with rₖ, then place that scalar along direction aₖ. The full map adds these contributions.

For A with rows (1,2),(0,1) and B with rows (3,0),(1,4), the first outer product has rows (3,0),(0,0), and the second has rows (2,8),(1,4). Their sum has rows (5,8),(1,4). This provides an independent way to check a row-times-column calculation and a useful interpretation of intermediate channels.

Before any matrix calculation, label the spaces. If the columns of B are input-coordinate effects in Rᵖ, the rows of A must accept exactly p entries. If the physical quantities also have units, those must match at the intermediate stage. Matrix dimensions prevent many formal mistakes; they do not by themselves guarantee that a physical model combines compatible measurements.

## Summary

A matrix represents a linear map by recording the images of basis vectors in its columns. Matrix multiplication follows from composition, with dimensions identifying the intermediate space and rightmost factors acting first. Associativity preserves order; commutativity and cancellation need additional hypotheses. The next chapter studies inverses, which identify when a square transformation preserves enough information to be reversed.
