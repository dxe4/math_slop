# 11. Least squares and conditioning

**Prerequisites:** column spaces, orthogonal projections, rank, and matrix multiplication.

**Learning goals:** derive least squares from geometry; solve an overdetermined system; distinguish existence from uniqueness; interpret residuals; and explain why stable algorithms matter for nearly dependent data.

## When exact equations disagree

Three measurements suggest that a response follows a straight line: at times 0, 1, and 2, its values are 1, 2, and 2. No line passes through all three points. Rejecting the model immediately would ignore measurement noise; choosing two points would arbitrarily discard information. Instead, choose the intercept c and slope m to minimize the sum of squared discrepancies.

Writing x=(c,m)ᵀ, our model is Ax≈b, where

```text
    [1  0]          [1]
A = [1  1],    b = [2].
    [1  2]          [2]
```

Generally, A has m rows and n columns, and we minimize F(x)=‖b−Ax‖² over ℝⁿ. Here the letter m in “m rows” is a dimension, not our line's slope. The residual r=b−Ax records observation minus prediction. Least squares measures vertical errors in this regression model, because the input times are treated as known exactly. It does not minimize perpendicular distances to the fitted line.

The vector Ax belongs to col(A). The problem therefore asks for the point in that subspace closest to b. Finite-dimensional orthogonal projection guarantees that the fitted vector exists and is unique. Its representation by coefficients x is unique precisely when A has independent columns.

## Why the normal equations work

Let x̂ satisfy Aᵀ(b−Ax̂)=0. This says the residual r is orthogonal to every column of A, and therefore to every vector Ah. For any coefficient change h,

‖b−A(x̂+h)‖² = ‖r−Ah‖² = ‖r‖²+‖Ah‖².

The cross term vanishes by orthogonality. No coefficient change decreases the error; equality occurs exactly when Ah=0. Conversely, if a minimizing residual had a nonzero component along some Ah, moving a sufficiently small distance in the appropriate direction would reduce its squared norm. Equivalently, differentiating ‖r−tAh‖² at t=0 gives −2rᵀAh=0 for every h.

Thus minimizers are exactly the solutions of the **normal equations**

AᵀAx̂=Aᵀb.

If A has full column rank, hᵀAᵀAh=‖Ah‖²>0 for every nonzero h. Consequently AᵀA is invertible and the minimizer is unique. Writing x̂=(AᵀA)⁻¹Aᵀb describes a mathematical relationship; numerical software should solve an appropriate system rather than explicitly forming this inverse.

## Worked example: fitting three observations

For our measurements, AᵀA has rows (3,3) and (3,5), while Aᵀb=(5,6)ᵀ. Subtracting the first normal equation from the second gives 2m=1. Substituting m=1/2 into 3c+3m=5 gives c=7/6.

The predictions are (7/6,5/3,13/6), and the residual is (−1/6,1/3,−1/6). Its entries sum to zero, so it is orthogonal to the constant column (1,1,1). Their time-weighted sum is 0·(−1/6)+1·(1/3)+2·(−1/6)=0, so it is also orthogonal to (0,1,2). The squared error is 1/36+1/9+1/36=1/6. These two orthogonality checks verify the answer without searching through possible lines.

## Laboratory: fitting is an optimization problem

**Predict:** for the default observations, will moving the intercept above 7/6 improve the fit if the slope stays at 1/2? Predict the signs of the three residuals.

```mathviz
scene "Edit a fitted line and its observations";
domain -1 4;
range -1 5;
coordinates equal;
param c = 1.1666666667 from -1 to 3;
param m = 0.5 from -1 to 2;
param h = 2 from 0 to 4;
fn fit(x) = c+m*x;
plot fit color blue;
point first = (0,1) color rose;
point second = (1,2) color rose;
point third = (2,h) color rose;
segment r1 from (0,c) to (0,1) color amber;
segment r2 from (1,c+m) to (1,2) color amber;
segment r3 from (2,c+2*m) to (2,h) color amber;
```

**Manipulate:** change c and m independently, then change the final observation h. The amber segments encode residual magnitudes, but the objective squares their lengths. Compare (c,m)=(1,1/2), (7/6,1/2), and (1,1).

**Explain:** calculate the squared error for each choice; a visual judgment alone cannot certify the minimum. Explain why the best line need not pass through a data point.

**Transfer:** derive the optimum for arbitrary h. The same normal equations give m=(h−1)/2 and c=(9−h)/6. Enter these values for two different observations and check residual orthogonality. A slider experiment illustrates this formula; it does not prove it for every h.

## Dependence and a misleading slogan

“More equations than unknowns means no solution” is false: an overdetermined system can be consistent. “Least squares always has unique coefficients” is also false. Take A with rows (1,1), (2,2), and (3,3), and b=(1,2,3). Every x=(t,1−t) gives an exact fit. Predictions are unique even though the coefficients are not.

More generally, if x̂ minimizes the error, every x̂+z with z∈ker(A) gives the same prediction. Conversely, two minimizers differ by a kernel vector, by the Pythagorean identity above. Independence is therefore a substantive modeling requirement: indistinguishable features cannot have uniquely determined separate effects.

## Small residuals can hide unstable coefficients

Consider the invertible matrix Aε with rows (1,1) and (0,ε), for ε>0. The data b=(2,0) give x=(2,0). Changing the data to (2,δ) changes the exact solution to

xδ=(2−δ/ε, δ/ε).

Both fits have zero residual, but their coefficient difference has norm √2|δ|/ε. Nearly parallel columns allow large coefficient changes whose effects almost cancel. A small residual certifies agreement with the supplied data; it does not certify accuracy relative to noisy or rounded data.

```mathviz
scene "Nearly dependent columns amplify data changes";
domain -3 7;
range -5 5;
coordinates equal;
param eps = 0.2 from 0.05 to 1;
param noise = 0.1 from -0.2 to 0.2;
fn coefficients(x) = 2-x;
plot coefficients color amber;
point original = (2,0) color blue;
point changed = (2-noise/eps,noise/eps) color rose;
segment difference from (2,0) to (2-noise/eps,noise/eps) color teal;
```

**Predict:** halving ε with δ fixed should do what to the distance between the coefficient points? These axes show coefficient space, not observation space.

**Manipulate:** the controls eps and noise represent ε and δ. Halve ε repeatedly, then reverse δ. Keep ε positive. At δ=0, notice that every ε gives the same coefficients, although sensitivity still changes.

**Explain:** substitute the displayed coefficients into both original equations. Explain why agreement with the data and sensitivity to changes are different questions.

**Transfer:** replace the first equation by x₁+2x₂=2. Derive the new coefficient change and edit the point formula and reference line. Which column relation becomes nearly dependent?

## Conditioning versus algorithms

For full-column-rank A, its largest and smallest singular values measure the greatest and least stretching of unit coefficient vectors. Define κ₂(A)=σ_max/σ_min. A large ratio means that some coefficient directions are weakly constrained. Later chapters construct these singular values in detail. Here the relevant algebra is that AᵀA has eigenvalues σ_i², so

κ₂(AᵀA)=κ₂(A)².

Forming normal equations can therefore magnify numerical difficulties. QR factorization, developed next, solves least squares using orthogonal transformations without squaring this condition number. QR cannot remove sensitivity already inherent in the measurements. Scaling columns to comparable units can help numerical representation, but does not supply missing information. Also, for inconsistent systems the relative sensitivity of coefficients depends on the residual and data geometry, not solely on κ₂(A); avoid treating one number as a universal error guarantee.

## Exercises

1. **Foundation:** calculate the squared error of c=1, m=1/2 for the original data. Compare it with 1/6.
2. **Foundation:** fit one constant to b=(1,2,6,7). Find the residual and its norm squared.
3. **Core:** for A with rows (1,0), (0,1), (1,1), (1,−1), and b=(1,2,2,0), compute the least-squares coefficients and verify Aᵀr=0.
4. **Core:** prove ker(AᵀA)=ker(A). What does this say about uniqueness?
5. **Core:** for the dependent-column example above, describe all minimizers when b=(1,0,0).
6. **Core:** in the sensitivity example, use ε=0.01 and δ=0.001. Compute the coefficient change and compare its norm with the data-change norm.
7. **Stretch:** a fitted model includes a constant column. Prove that its residuals sum to zero. Explain why this conclusion can fail without that column.
8. **Stretch:** if A is square and invertible, show that least squares gives A⁻¹b. Does this guarantee stable coefficients?

9. **Core.** Fit a single constant to observations 0, 2, 3 with respective positive weights 2, 1, 1. Find the weighted residual sum and minimum weighted squared error.
10. **Stretch.** Prove that the fitted-vector map b↦p(b) is linear even when least-squares coefficient vectors are not unique. Include the case A=0 and distinguish this map from an arbitrary choice of minimizing coefficients.

<details>
<summary>Hints</summary>

1. Write all three predictions before squaring. 2. Differentiate a quadratic or project onto (1,1,1,1). 3. The two columns are orthogonal. 4. Multiply AᵀAz=0 on the left by zᵀ. 5. Only the sum of the coefficients is observable. 6. Use √2|δ|/ε. 7. Use residual orthogonality. 8. A zero objective is globally minimal.


9. **Hint 1.** Minimize 2c²+(2−c)²+(3−c)². **Hint 2.** Complete the square, or set the weighted sum of residuals to zero.
10. **Hint 1.** Choose orthonormal columns Q spanning col(A). **Hint 2.** Show p(b)=QQᵀb; if the column space is zero, use its zero projector.

</details>

<details>
<summary>Full solutions</summary>

1. Predictions are (1,3/2,2), so r=(0,1/2,0) and F=1/4. This exceeds 1/6 by 1/12; passing through two observations does not minimize the squared error.
2. The constant is the mean, 16/4=4. Residuals (−3,−2,2,3) sum to zero, establishing orthogonality. Their squared norm is 9+4+4+9=26.
3. AᵀA=diag(3,3), and Aᵀb=(3,4). Hence x̂=(1,4/3). Predictions are (1,4/3,7/3,−1/3), giving r=(0,2/3,−1/3,1/3). Column dot products are 0−1/3+1/3=0 and 2/3−1/3−1/3=0.
4. Az=0 immediately implies AᵀAz=0. Conversely, AᵀAz=0 implies 0=zᵀAᵀAz=‖Az‖², so Az=0. Thus AᵀA is invertible exactly when A has independent columns, precisely the condition for unique coefficients for every b.
5. Write s=x₁+x₂. Minimize (1−s)²+4s²+9s²=1−2s+14s², whose derivative vanishes at s=1/14. Every (t,1/14−t) minimizes. The fitted vector is always (1,2,3)/14.
6. The change is (−0.1,0.1), with norm √2/10≈0.1414. The data-change norm is 0.001, giving amplification 100√2≈141.4. The example shows large absolute amplification even though both residuals vanish.
7. Orthogonality to the constant column gives (1,…,1)ᵀr=Σr_i=0. Without that column take A=(1,0)ᵀ and b=(0,1)ᵀ. The optimum coefficient is zero, and r=(0,1) has sum 1.
8. Set x=A⁻¹b; then Ax=b and F=0. Invertibility makes this coefficient vector unique. It does not bound sensitivity: Aε is invertible for every positive ε, yet the amplification in the preceding example grows without bound as ε→0.


9. The objective is 4c²−10c+13=4(c−5/4)²+27/4. Thus the unique fitted constant is 5/4. Residuals are −5/4, 3/4, 7/4 and their weighted sum is 2(−5/4)+3/4+7/4=0. The minimum weighted squared error is 27/4. These weights specify the chosen error metric; their presence does not by itself supply a probabilistic uncertainty model.
10. The closest fitted vector is the orthogonal projection onto col(A), so p(b)=QQᵀb. Multiplication by the fixed matrix QQᵀ is linear, proving p(αb+βd)=αp(b)+βp(d). If A=0, col(A)={0} and p is the zero map, still linear. Nonunique coefficient vectors differ by ker(A); choosing a different kernel vector for different data could make that chosen coefficient rule nonlinear, without affecting the unique linear fitted-vector map.

</details>

## Completing the least-squares argument without differentiation

The normal equations can be characterised using only finite algebra. This matters because the least-squares conclusion does not depend on assuming a calculus course. It also identifies exactly which statements require independent columns and which remain true when the design is rank deficient.

**Theorem 11.1 (All minimisers and their predictions).** Let A be any real m×n matrix and b∈ℝᵐ. A vector x minimises ‖b−Ax‖² if and only if Aᵀ(b−Ax)=0. At least one minimiser exists. All minimisers have the same fitted vector, and if x₀ is one minimiser the full coefficient set is x₀+ker(A).

*Proof.* Set r=b−Ax and choose any h∈ℝⁿ. Expanding a square gives F(x+th)−F(x)=−2t rᵀAh+t²‖Ah‖². If d=rᵀAh were nonzero, then q=‖Ah‖² would be positive and the choice t=d/q would make the difference −d²/q<0. Hence a minimiser has rᵀAh=0 for every h, equivalent to Aᵀr=0. Conversely, if these dot products vanish, F(x+h)=F(x)+‖Ah‖²≥F(x), so x is a minimiser.

Choose an orthonormal basis Q for col(A), and let p=QQᵀb. The vector p lies in col(A), so some x₀ satisfies Ax₀=p; the residual b−p is perpendicular to every column, proving existence. For any other minimiser x, the earlier square identity gives F(x)=F(x₀)+‖A(x−x₀)‖². Equal minimum values force A(x−x₀)=0. Conversely, adding any kernel vector changes no prediction or error. ∎

The theorem's existence argument is geometric, not an assumption that AᵀA must be invertible. It also explains why a singular normal matrix is not proof that least squares has failed. The observable prediction remains determined even when a feature description has redundant coefficients.

**Definition 11.2 (Weighted least squares).** For positive weights w₁,…,wₘ, choose x to minimise the weighted sum Σwᵢ(bᵢ−(Ax)ᵢ)². If W is their diagonal matrix and D has diagonal entries √wᵢ, this objective is ‖Db−DAx‖².

Applying Theorem 11.1 to DA gives AᵀWAx=AᵀWb. Since D is invertible, DA has the same kernel as A, so positive weighting changes the metric on observations without changing which coefficient directions are structurally invisible. Zero weights would instead delete information and need a separate discussion. A positive weight is a modeling choice about the relative cost of errors; calling it an inverse variance would require an independently justified noise model.

### Worked example 2: three observations with unequal importance

Fit a constant c to 1, 3, 8 with weights 1, 2, 1. The weighted normal equation is 4c=1+2·3+8=15, so c=15/4. Direct completion gives

F(c)=(1−c)²+2(3−c)²+(8−c)²=4(c−15/4)²+107/4.

The residuals are −11/4, −3/4, 17/4; their weighted sum is zero. Their ordinary unweighted sum is 3/4, which need not vanish because the fitting metric changed. The unweighted mean is four, so the two legitimate optimization questions give different answers. The completed square proves that 107/4 is attained and no smaller weighted error is possible.

### Worked example 3: unavoidable misfit and nonunique coefficients

Let A have rows (1,2), (2,4), (0,0), and b=(1,0,3). Only c=x₁+2x₂ affects the prediction, which is (c,2c,0). The objective is

F(x)=(1−c)²+4c²+9=5(c−1/5)²+49/5.

Every coefficient vector satisfying x₁+2x₂=1/5 minimises, so x=(1/5−2t,t), t∈ℝ. Every one predicts (1/5,2/5,0), with residual (4/5,−2/5,3). Dotting that residual with the two columns gives zero in both cases. The third observation cannot be fitted because its design row is zero, while the first two observations impose one compromise on the single observable combination. These are two different sources of difficulty: unavoidable residual and coefficient nonuniqueness.

In later singular-value coordinates, one can select a minimum-norm member of this affine family. That selection supplies a geometric convention, not new measurement information. Keeping the full family visible now prevents a later pseudoinverse formula from being misread as a proof that the chosen coefficient vector is the generating truth.

## Sources

These additional explanations and examples are original. For complementary primary teaching material see Gilbert Strang, MIT OpenCourseWare, [Projection Matrices and Least Squares](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/least-squares-determinants-and-eigenvalues/projection-matrices-and-least-squares/), consulted 13 November 2026.

## Summary

Least squares projects the observation vector onto the column space. Residual orthogonality, the normal equations and minimisation are equivalent even for dependent columns. Predictions are unique; coefficients form a translate of the kernel and are unique only at full column rank. Positive observation weights alter the metric while preserving the kernel. A small residual concerns data agreement, whereas conditioning concerns sensitivity to changed data. QR next solves the fitting problem using orthonormal coordinates and triangular algebra.
