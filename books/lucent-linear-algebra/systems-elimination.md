# 2. Linear systems: existence, freedom, and elimination

**Prerequisites:** vectors and linear combinations. **Time:** two or three study sessions. **After this chapter:** you should be able to reduce an augmented matrix, classify its solutions, and describe every solution with parameters.

## A system asks several questions at once

A linear equation in x₁,…,xₙ has the form a₁x₁+⋯+aₙxₙ=b, with fixed real coefficients. The variables occur only to the first power and are not multiplied together. Thus 2x−3y=7 is linear, but xy=7 and y=sin(x) are not. A linear system requires all its equations to hold simultaneously.

In two variables, an equation with at least one nonzero coefficient describes a line. Two such lines can intersect once, be parallel and distinct, or coincide. These correspond to one solution, no solutions, and infinitely many solutions. In three variables, nondegenerate equations describe planes; their common intersection may be a point or a line, among other possibilities. Geometry suggests the possibilities, but a systematic algebraic method also works with a thousand variables.

### Laboratory: intersection is a simultaneous condition

**Predict.** The blue equation below is y=mx+1; the teal equation is y=x+b. Predict how all three solution possibilities arise as m and b vary. Which two possibilities remain when m=1? What happens near m=1 when b≠1?

```mathviz
scene "One intersection, no intersection, or a whole line";
domain -6 6;
range -5 7;
coordinates equal;
param m = 0 from 0 to 2;
param b = 0 from -1 to 2;
fn first(x) = m*x+1;
fn second(x) = x+b;
plot first color blue;
plot second color teal;
```

**Manipulate.** Try m=0,b=0; m=1,b=0; and m=1,b=1. Set b=0 and bring m close to 1. Edit the viewing domain to search for an intersection that has left the screen.

**Explain.** Equality of the two y values gives (m−1)x=b−1. If m≠1, this determines exactly one x. If m=1, the remaining statement is either 0=0 or a contradiction. A missing on-screen intersection does not establish inconsistency: for m=0.99,b=0, the intersection is (100,100).

## Encoding the system without losing its meaning

For x+y=3 and 2x−y=0, the augmented matrix is

```text
[ 1   1 | 3 ]
[ 2  -1 | 0 ]
```

The vertical divider separates coefficients from right-hand sides. Column positions retain their meaning even when entries are zero. An omitted zero can silently change the entire problem.

Three elementary row operations preserve the solution set: exchange two rows; multiply a row by a nonzero scalar; add a multiple of one row to another. Each has an inverse operation. This reversibility is the reason solutions are preserved. For example, replacing equation 2 by equation 2 minus twice equation 1 cannot remove a solution, because every old solution satisfies the new equation. It cannot introduce a spurious solution either, because adding twice equation 1 recovers equation 2.

Multiplying a row by zero is excluded: it destroys a constraint and cannot be reversed. Likewise, subtracting an equation from itself and simply replacing it by zero is not the allowed operation involving a different row.

**Worked example: solve and verify.** Apply R₂←R₂−2R₁:

```text
[ 1   1 |  3 ]
[ 0  -3 | -6 ]
```

The second equation gives y=2; the first gives x=1. Alternatively divide row 2 by −3, then subtract it from row 1, obtaining the identity coefficient matrix with right side (1,2). Finally check the original equations: 1+2=3 and 2·1−2=0. A correct reduction solves the original system, not merely the last displayed matrix.

### Laboratory: equations change while their common solution stays

**Predict.** Replace the second equation 2x−y=0 by itself minus t times x+y=3. Which point must remain on both lines for every t?

```mathviz
scene "A reversible row operation preserves the intersection";
domain -4 5;
range -3 6;
coordinates equal;
param t = 0 from 0 to 2;
fn first(x) = 3-x;
fn changed(x) = ((2-t)*x+3*t)/(1+t);
plot first color blue;
plot changed color teal;
point solution = (1,2) color rose;
```

**Manipulate.** Move t continuously from 0 to 2. At the endpoint, identify which variable has disappeared from the second equation. Read the solution from the horizontal line and the unchanged first line.

**Explain.** The changed equation is (2−t)x−(1+t)y=−3t. Its line rotates through (1,2). The rows are changing descriptions of the constraints; the unknown vector is not being transformed. Here 1+t never vanishes, so expressing the line as a graph is safe throughout the slider range.

## Pivots separate determined variables from free ones

A row echelon matrix has all zero rows at the bottom, and the first nonzero entry of each nonzero row lies to the right of the first nonzero entry in the row above. Those leading entries are pivots. Entries below a pivot are zero. Reduced row echelon form, or RREF, additionally makes each pivot equal to 1 and makes it the only nonzero entry in its column.

Gaussian elimination produces echelon form; back substitution then finds solutions. Continuing above the pivots produces RREF, making the solution structure especially transparent. Different valid operation sequences give the same RREF, although the intermediate matrices can differ.

A variable corresponding to a pivot in the coefficient part is a pivot variable. Every other variable is free. A free variable may take any real value independently; the pivot variables then follow from the equations, provided the system is consistent. A row [0 … 0 | c] with c≠0 means 0=c and makes the entire system inconsistent.

**Worked example: infinitely many solutions in R³.** Consider

```text
x + y + z = 2
2x + 2y + 2z = 4
x - y + z = 0.
```

Subtract twice row 1 from row 2, and subtract row 1 from row 3. Row 2 becomes zero; row 3 becomes [0 −2 0 | −2]. Exchange these rows, divide row 2 by −2, and subtract row 2 from row 1. The result is

```text
[ 1  0  1 | 1 ]
[ 0  1  0 | 1 ]
[ 0  0  0 | 0 ].
```

Thus z=t is free, y=1, and x=1−t. Every solution is (1−t,1,t), or equivalently (1,1,0)+t(−1,0,1). This is a line in R³, even though there were three equations: one equation was redundant. Substitution proves that every proposed t works; the reduction proves that no other solutions exist.

If the second right-hand side were changed from 4 to 5, the very first elimination would produce [0 0 0 | 1]. That system would have no solution. Counting equations and unknowns alone never decides consistency or uniqueness.

## The structure behind the calculation

For a consistent system with n variables and r coefficient pivots, there are n−r free parameters. If there are no free parameters, the solution is unique. If there is at least one, there are infinitely many real solutions. There cannot be exactly two: given distinct solutions p and q, every p+t(q−p) is also a solution. Substituting into each linear equation proves this directly.

The associated homogeneous system replaces every right-hand side by zero. It is always consistent because the zero vector solves it. If p solves the original system and h solves the homogeneous one, p+h solves the original system. Conversely, if q and p both solve the original system, q−p solves the homogeneous system. Therefore all solutions have the form

**one particular solution + every homogeneous solution.**

The line in the preceding example has exactly this form. Later, the collection of homogeneous solutions will be called a null space. This distinction matters: a nonhomogeneous solution set usually does not contain zero and is usually not a subspace.

## Exercises

1. **Foundation.** Write the augmented matrix for x−2z=4, 3y+z=1, keeping the variable order x,y,z.
2. **Foundation.** Solve x+2y=5 and 3x−y=1 by elimination and verify in both original equations.
3. **Core.** Find all solutions of x+y+z=2 and 2x+2y+2z=4. Describe the geometric solution set.
4. **Core.** Classify x+2y=3, 2x+4y=c for every real c.
5. **Core.** A system has RREF rows [1 0 2 −1 | 3] and [0 1 −1 4 | 2]. Give its full vector-parametric solution.
6. **Core.** Explain why multiplying an equation by zero can introduce false solutions. Give a one-variable counterexample.
7. **Stretch.** Prove that a real linear system cannot have exactly two distinct solutions.
8. **Stretch.** Can three equations in four unknowns have a unique solution? Can four equations in three unknowns have one? Justify rather than relying on a slogan.
9. **Core.** Classify x+y=2 and x+(1+k)y=2+h for every real k,h, giving all solutions in each case.
10. **Stretch.** Let p solve Ax=b. Prove that choosing a different particular solution q produces the same set p+Null(A)=q+Null(A), without assuming that A is square.

<details>
<summary>Hints — use these before the solutions</summary>

1. A missing variable has coefficient zero. 2. Subtract three times the first row from the second. 3. Only one independent constraint survives. 4. Eliminate x in the second row. 5. Name the third and fourth coordinates s,t. 6. Compare x=1 with 0=0. 7. Test p+t(q−p). 8. Count the maximum possible coefficient pivots, then construct a consistent overdetermined example.

9. **Hint 1:** subtract the first equation from the second. **Hint 2:** split into k≠0 and k=0 before dividing.
10. **Hint 1:** show q−p is homogeneous. **Hint 2:** translate any p+h into q plus another homogeneous vector.

</details>

<details>
<summary>Worked solutions</summary>

1. The rows are [1 0 −2 | 4] and [0 3 1 | 1]. The zero entries preserve the positions of y and x respectively.
2. R₂−3R₁ gives −7y=−14, hence y=2. Then x=5−4=1. Checking: 1+2·2=5 and 3·1−2=1, so the unique solution is (1,2).
3. Subtracting twice the first equation from the second gives 0=0. Let y=s,z=t; then x=2−s−t. The solution set is (2,0,0)+s(−1,1,0)+t(−1,0,1), a plane in R³. Both direction vectors are independent, and every pair s,t satisfies the original equations.
4. Elimination gives 0=c−6. If c≠6 there are no solutions. If c=6, let y=t and x=3−2t; there are infinitely many. No value of c gives a unique solution because the coefficient rows remain dependent.
5. With x₃=s,x₄=t, the equations give x₁=3−2s+t and x₂=2+s−4t. Thus x=(3,2,0,0)+s(−2,1,1,0)+t(1,−4,0,1). Independent choices of s,t give every solution exactly once.
6. The equation x=1 has one solution. Multiplying by zero gives 0=0, satisfied by every real x, including x=7. The lost constraint cannot be recovered, so this is not an elementary row operation.
7. Let p≠q solve every equation a·x=b. For any real t, a·[p+t(q−p)]=b+t(b−b)=b. Distinct t give distinct vectors because q−p≠0. Hence two distinct solutions generate infinitely many, contradicting “exactly two.”
8. Three rows provide at most three pivots, so a consistent system with four variables has at least one free variable; an inconsistent one has no solutions. Unique is impossible. Four equations in three unknowns can have a unique solution: x=1,y=2,z=3,x+y+z=6. The last equation is redundant, while the first three determine all variables.

9. Subtraction gives ky=h. If k≠0, y=h/k and x=2−h/k, a unique solution. If k=0,h≠0, the equation 0=h is contradictory. If k=h=0, the equations coincide and all solutions are (2−t,t), t∈R. Substitution confirms each stated solution, while the reduced equation rules out all other cases.
10. Since Aq=Ap=b, A(q−p)=0. For h∈Null(A), write p+h=q+[h−(q−p)]. The bracket is homogeneous by linearity, giving inclusion in q+Null(A). Interchanging p,q gives the reverse inclusion. Thus the sets coincide for every matrix shape.

</details>

**Exit check.** Given a completed reduction, you should be able to explain both why every listed vector solves the original equations and why the list is exhaustive. The next chapter packages coefficients as a linear map.

## Definitions and a complete solution theorem

**Definition 2.1 (Equivalent systems).** Two systems in the same ordered variables are equivalent if they have exactly the same solution set. Equivalent does not mean that corresponding equations have the same graphs or coefficients. A row operation changes individual constraints while preserving their common solutions.

The variable order is part of the encoding. In a system with variables x,y,z, the row [1,0,−2 | 4] means x−2z=4. Reinterpreting its columns as z,y,x changes the equation unless every part of the problem is relabelled consistently. A row exchange is harmless because equations are imposed simultaneously. A column exchange changes the variable positions and must therefore be recorded.

**Result 2.2 (Reversible operations preserve and reflect solutions).** Each elementary row operation takes a system to an equivalent one.

*Proof.* Exchanging equations leaves their simultaneous truth unchanged. Multiplication of one equation by a nonzero scalar preserves truth and can be undone by division. For a row addition, suppose row i is replaced by row i plus c times a distinct row j. Every solution of the old equations satisfies the new equation. Conversely, a solution of the new system still satisfies unchanged row j, so subtracting c times that equation recovers old row i. Thus the solution implications hold in both directions. A finite sequence preserves equivalence by applying this argument repeatedly. ∎

The reverse implication is the part most often omitted in informal calculations. It prevents an operation that only produces necessary conditions from being mistaken for an equivalent system. Squaring an equation, for example, can create additional solutions in other algebra problems. Linear elimination avoids that problem because its permitted operations come with explicit inverses.

**Theorem 2.3 (Classification from echelon form).** For a real system with n variables, an echelon form has no solutions if it contains a row [0 … 0 | c] with c≠0. Otherwise, if its coefficient part has r pivots, all solutions are parameterized uniquely by n−r arbitrary real free-variable values. In particular the system has exactly one solution when r=n and infinitely many when r<n.

*Proof.* A contradiction row cannot be satisfied. Without such a row, assign arbitrary real values to the variables in nonpivot columns. Start at the last nonzero row. Its pivot coefficient is nonzero, so that equation determines its pivot variable uniquely using the free variables and any already determined variables to its right. Continue upwards. Each step is possible and unique, proving that every free assignment produces exactly one solution. Conversely, any solution has some free-variable values, and back substitution forces the pivot values just constructed. If there is a free variable, changing it changes the solution's corresponding coordinate, producing infinitely many distinct solutions. Reversible row operations transfer this classification to the original system. ∎

This theorem explains why parameters should be independent. An expression using two symbols s,t with an unstated relation between them is not yet a free parameterization. Conversely, assigning the same parameter to two genuinely free variables omits most solutions. Choosing free coordinates directly avoids both errors, because each parameter has its own coordinate that can be recovered from the resulting vector.

## Worked example 3: a parameter changes the classification

Consider the system

x+y+z=2, x+2y+3z=3, 2x+3y+(4+k)z=5+h,

where k and h are fixed real data. The unknowns remain x,y,z. The parameter values k,h describe a family of different systems.

Subtract row one from row two to obtain y+2z=1. Subtract twice row one from row three to obtain y+(2+k)z=1+h. Subtract the new second row from the new third row. The last equation is kz=h. No division has occurred, so this calculation is valid for every k, including zero.

If k≠0, there is one solution. It has z=h/k, y=1−2h/k, and x=1+h/k. Substituting into the original third equation gives 2(1+h/k)+3(1−2h/k)+(4+k)h/k=5+h, as required. The other equations check equally directly.

If k=0 and h≠0, the last row states 0=h and there are no solutions. If k=h=0, the last row vanishes. Now z=t is free, y=1−2t, and x=1+t. The complete solution set is (1,1,0)+t(1,−2,1).

The cases cannot be merged by writing h/k and then setting k=0. Dividing by a symbolic expression silently assumes that expression is nonzero. A reliable calculation separates the zero case before division. This habit is central in later eigenvalue calculations and parameter-dependent rank problems.

## Homogeneous directions and affine geometry

**Result 2.4 (Translation of the homogeneous solution set).** If a system Ax=b has a particular solution p, then its solution set is exactly {p+h:Ah=0}.

*Proof.* Linearity gives A(p+h)=Ap+Ah=b whenever Ah=0. Conversely, if Aq=b, then A(q−p)=b−b=0, so q=p+(q−p) has the stated form. Neither direction assumes that A is square or that the solution is unique. ∎

The expression “particular solution” means a single chosen solution, with no claim that it is preferred. Choosing another particular solution q gives the same affine set because q−p is homogeneous. Directions belong to the homogeneous system; the translated location depends on b.

For the final case of the worked example, the direction (1,−2,1) is invisible to every left-hand side when k=0. The vector (1,1,0) fixes the location of the solution line. Zero is not on that line because it fails x+y+z=2. A direction space can be a subspace even when the solution set it translates is not.

An elimination answer should therefore report more than a final row array. Name the contradiction if inconsistent; name the free variables if consistent; translate the rows into formulas; and verify the formulas in the original system. These steps expose sign errors and ensure that a visually plausible parameterization has not omitted a constraint or an entire family of solutions.

## Summary

Elimination replaces constraints by equivalent constraints through reversible operations. A contradiction row decides inconsistency; otherwise free coordinates give an exhaustive and unique parameterization. Every nonempty solution set is a particular solution translated by the homogeneous directions. Parameter-dependent coefficients require separate treatment before division. Matrices will now package these equations into maps whose columns reveal the same existence and freedom questions.
