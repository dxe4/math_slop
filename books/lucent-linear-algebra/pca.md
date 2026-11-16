# 18. Principal components and low-rank models

## Purpose and preparation

A table with a thousand columns need not contain a thousand independent patterns. Principal component analysis, or PCA, chooses orthogonal directions along which centered observations vary most. Those same directions give optimal linear reconstructions under squared Euclidean error. Understanding both descriptions prevents PCA from becoming a button pressed without a model.

Use the preceding chapters on projections, symmetric matrices, and singular values. By the end of this chapter you should be able to calculate a small PCA by hand, justify the variance objective, connect it to matrix approximation, and assess whether the resulting directions answer the scientific question. Allow two sessions, with time to write an interpretation of the experiments.

## Centering determines the question

Arrange N observations of d features as rows of a matrix Y. Let μ be the vector of column means and let X contain the centered rows xᵢ = yᵢ − μ. Then the rows of X sum to zero. For N > 1 the sample covariance matrix is

C = XᵀX/(N − 1).

It is d × d, symmetric, and positive semidefinite. Its diagonal entries are sample feature variances; off-diagonal entries measure signed joint variation. The denominator N − 1 is the usual sample convention. Dividing by N instead rescales every eigenvalue equally and leaves principal directions unchanged.

For a unit direction w in feature space, observation i has centered coordinate xᵢ·w. These coordinates already have mean zero, so their sample variance is

wᵀCw = ‖Xw‖²/(N − 1).

PCA seeks a unit w maximizing this expression. The unit constraint matters: without it, scaling w could make variance arbitrarily large. Centering matters too: without centering, the method approximates directions from the coordinate origin rather than deviations from the average observation.

## Why an eigenvector maximizes variance

Choose an orthonormal eigenbasis q₁, …, q_d of C with λ₁ ≥ … ≥ λ_d ≥ 0. Write any unit w as Σaⱼqⱼ, where Σaⱼ² = 1. Then

wᵀCw = Σλⱼaⱼ² ≤ λ₁Σaⱼ² = λ₁.

Equality holds for q₁. Restricting to directions perpendicular to q₁ gives q₂ next, and repeating produces principal directions. If eigenvalues tie, the best subspace may be well defined while the individual axes within it are not unique. Even a unique direction is defined only up to sign: q and −q describe the same line.

For k orthonormal directions in a matrix W, the score table is XW and its reconstruction is XWWᵀ. Returning to the original units and origin requires adding μ to every reconstructed row. A principal component score is a coordinate, not a newly discovered physical cause.

## Worked example: four observations

Consider observations (13, 21), (11, 23), (9, 17), and (7, 19). Their mean is (10, 20), so their centered coordinates are (3, 1), (1, 3), (−1, −3), and (−3, −1). Direct multiplication gives

C = [[20/3, 4], [4, 20/3]].

The principal directions are q₁ = (1, 1)/√2 and q₂ = (1, −1)/√2, with eigenvalues 32/3 and 8/3. The first direction explains (32/3)/(40/3) = 80% of the total sample variance. Projecting onto q₁ gives centered reconstructions (2, 2), (2, 2), (−2, −2), and (−2, −2). Adding the mean gives (12, 22), (12, 22), (8, 18), and (8, 18).

Each observation incurs squared error 2; the total is 8. This number equals (N − 1)λ₂. The discarded component still contains real differences between observations. Calling those differences “noise” would require evidence beyond PCA itself.

## Experiment: choose the reconstruction line

The blue points are centered observations. Teal points are their projections, amber segments show residuals, and the rose arrow sets the candidate direction. The `spread` slider changes the data while preserving its zero mean. Its default reproduces the worked example. The reusable score functions keep projections and residuals connected to the data.

```mathviz
scene "A principal line balances four reconstruction errors";
domain -4 4;
range -4 4;
coordinates equal;
param theta = 0.4 from 0 to 3.141593;
param spread = 1 from -3 to 3;
fn scorea(x) = 3*cos(x)+spread*sin(x);
fn scoreb(x) = spread*cos(x)+3*sin(x);
point a = (3, spread) color blue;
point b = (spread, 3) color blue;
point c = (-spread, -3) color blue;
point d = (-3, -spread) color blue;
vector direction = (3*cos(theta), 3*sin(theta)) color rose;
point pa = (scorea(theta)*cos(theta), scorea(theta)*sin(theta)) color teal;
point pb = (scoreb(theta)*cos(theta), scoreb(theta)*sin(theta)) color teal;
point pc = (-scoreb(theta)*cos(theta), -scoreb(theta)*sin(theta)) color teal;
point pd = (-scorea(theta)*cos(theta), -scorea(theta)*sin(theta)) color teal;
segment ra from (3, spread) to (scorea(theta)*cos(theta), scorea(theta)*sin(theta)) color amber;
segment rb from (spread, 3) to (scoreb(theta)*cos(theta), scoreb(theta)*sin(theta)) color amber;
segment rc from (-spread, -3) to (-scoreb(theta)*cos(theta), -scoreb(theta)*sin(theta)) color amber;
segment rd from (-3, -spread) to (-scorea(theta)*cos(theta), -scorea(theta)*sin(theta)) color amber;
```

**Predict:** Which line minimizes the sum of squared residual lengths? **Manipulate:** Compare θ = 0, π/4, and π/2, then change `spread` from 1 to −1 and to zero. **Explain:** Every residual is perpendicular to its reconstruction line. Pythagoras splits each observation's squared length into retained and discarded parts, so maximizing the retained sum minimizes the discarded sum. **Transfer:** Explain why moving all original observations by (100, −50) leaves centered principal directions unchanged but moves their reconstruction line.

## From covariance to the SVD

Write X = UΣVᵀ. Then C = VΣᵀΣVᵀ/(N − 1). The columns of V are principal directions, the nonzero covariance eigenvalues are σⱼ²/(N − 1), and the score table XV is UΣ. Centering imposes rank(X) ≤ min(N − 1, d). With twenty observations and a hundred features, no more than nineteen principal directions can have nonzero observed variance.

For an arbitrary matrix X and a nonnegative integer k, the Eckart–Young theorem states that retaining its largest k singular values gives a matrix Xₖ of rank at most k minimizing both the Frobenius error and the spectral error over all such matrices. If k exceeds the rank, retain all nonzero singular values. The optimal errors are

‖X − Xₖ‖_F² = Σⱼ₌ₖ₊₁ʳσⱼ²; ‖X − Xₖ‖₂ = σₖ₊₁,

where the next singular value is zero if k ≥ r. The Frobenius norm is the square root of the sum of squared entries; the spectral norm is the largest unit-input stretch. Do not confuse their different error formulas. Ties at the cutoff can make the approximation nonunique. The theorem optimizes these norms without imposing nonnegative entries, sparsity, or other constraints a particular application may need.

As a worked higher-dimensional example, suppose a centered data matrix has singular values 8, 3, and 1. A rank-one approximation has squared Frobenius error 10 and retains 64/74 of total squared variation. Rank two reduces that error to 1 and retains 73/74. Its spectral error is 1, compared with 3 for rank one. Whether that extra direction is worth keeping depends on the purpose and measurement uncertainty.

## Experiment: variance is an objective, not a visual guess

For the four-point dataset, a direction (cos θ, sin θ) has variance 20/3 + 4sin(2θ). This graph makes the optimization explicit. The parameter t selects a candidate direction; the blue curve contains all candidates.

```mathviz
scene "Variance along every candidate direction";
domain 0 3.141593;
range 0 12;
param t = 0.4 from 0 to 3.141593;
fn variance(x) = 20/3+4*sin(2*x);
plot variance color blue;
point candidate = (t, variance(t)) color rose;
```

**Predict:** Find the maximum before moving t. **Manipulate:** Check the variance at π/4, 3π/4, and zero. Edit the formula to 5, modeling covariance 5I. **Explain:** The constant objective gives no preferred direction; a displayed eigenvector would be one arbitrary choice. **Transfer:** Replace the covariance entries by C₁₁ = 9, C₂₂ = 1, C₁₂ = 0 and derive the new function before editing the scene.

## Interpretation and validation

Scaling changes the problem. Measuring one feature in millimeters rather than meters multiplies its variance by a million and can rotate principal directions. Standardizing each nonconstant feature to unit sample variance is appropriate when relative variation is the intended question; it can also overemphasize a noisy low-variance measurement. State the units and justify the choice.

PCA is sensitive to outliers because squared distances grow quickly. High explained variance does not guarantee class separation, causal importance, or good future predictions. Estimate centering, scaling, and principal directions from training data only, then apply those same transformations to validation observations. Refitting on the combined dataset leaks information across the evaluation boundary.

**Counterexample:** Four centered points (1, 0), (−1, 0), (0, 1), (0, −1) have covariance (2/3)I. Every line explains half the total variance. There is no uniquely “correct” first axis to discover, despite what a numerical routine may display.

## Exercises

1. **Foundation.** Center (2, 1), (4, 1), and (6, 1), and compute their sample covariance.
2. **Foundation.** What fraction of variance do two components retain when covariance eigenvalues are 9, 3, and 2?
3. **Core.** Derive the variance function 20/3 + 4sin(2θ) used in the second experiment.
4. **Core.** Reconstruct the original observation (13, 21) using only q₂ in the worked example. Calculate its squared error.
5. **Core.** Prove that centering N rows forces rank at most N − 1.
6. **Core.** A matrix has singular values 5, 4, 2, 1. Give the optimal rank-two Frobenius and spectral errors.
7. **Stretch.** Prove the reconstruction/variance equivalence for any orthogonal projector P.
8. **Stretch.** Construct two features for which changing one feature's unit changes the first principal direction. Explain the modeling consequence.

9. **Core.** Six centered observations have covariance eigenvalues 12, 3, 1. When two components are retained, find the explained-variance fraction, total squared reconstruction error, Frobenius reconstruction error and spectral error of the centered data-matrix approximation.
10. **Stretch.** Fix a linear subspace L with orthogonal projector P. Prove that among affine planes a+L, the sum of squared distances of observations yᵢ is minimised exactly when the affine plane contains their mean μ. Explain why several choices of a can represent the same optimal affine plane.

<details><summary>Hints</summary>

1. Only the first coordinate varies. 2. Sum eigenvalues. 3. Expand wᵀCw and use 2sin θ cos θ = sin(2θ). 4. Center, project, and restore the mean. 5. Find a nonzero left-null vector. 6. Distinguish squared error from error. 7. Apply Pythagoras row by row. 8. A diagonal covariance matrix is enough.


9. **Hint 1.** Covariance uses denominator N−1=5. **Hint 2.** Data singular values square to five times the covariance eigenvalues; distinguish a squared sum from its square root.
10. **Hint 1.** Write yᵢ=μ+xᵢ with Σxᵢ=0 and express distance to a+L using I−P. **Hint 2.** Expand the sum of squares; the mixed term sums to zero.

</details>

<details><summary>Full solutions</summary>

1. The mean is (4, 1), and centered rows are (−2, 0), (0, 0), (2, 0). Their cross-product matrix is diag(8, 0); dividing by N − 1 = 2 gives diag(4, 0).
2. The retained fraction is (9 + 3)/(9 + 3 + 2) = 6/7, approximately 85.7%.
3. Multiplication gives (20/3)cos²θ + 8sin θ cos θ + (20/3)sin²θ. Using the two identities produces 20/3 + 4sin(2θ).
4. The centered row is (3, 1), whose q₂ score is √2. Its projection is (1, −1), and the restored observation is (11, 19). The error is (2, 2), with squared norm 8. The first component instead had squared error 2 for this observation.
5. The all-ones vector in ℝᴺ satisfies 1ᵀX = 0 because each column sums to zero. Thus the left nullspace has dimension at least one. Rank–nullity applied to Xᵀ gives rank(X) ≤ N − 1.
6. The squared Frobenius error is 2² + 1² = 5, so the Frobenius error is √5. The spectral error is the next singular value, 2.
7. Since P is symmetric and idempotent, Px is perpendicular to (I − P)x. Therefore ‖x‖² = ‖Px‖² + ‖(I − P)x‖². Sum over centered observations. Total squared length is fixed, so maximizing retained length is exactly minimizing reconstruction error; dividing by N − 1 converts retained length to total retained sample variance.
8. Start with centered points (2, 0), (−2, 0), (0, 1), (0, −1), whose covariance is diag(8/3, 2/3), so the first direction is horizontal. Multiply the second feature by 10. Covariance becomes diag(8/3, 200/3), and the first direction is vertical. The data's underlying observations did not change, but the Euclidean error metric did; units or standardization must therefore be justified.


9. The retained fraction is (12+3)/(12+3+1)=15/16. Discarding the last component gives total squared reconstruction error (6−1)·1=5, so the Frobenius error is √5. The next data singular value is √(5·1)=√5, also the spectral error in this one-discarded-mode case. In general the two norms differ when several modes are discarded; their equality here follows from there being only one nonzero discarded singular value.
10. Put xᵢ=yᵢ−μ and c=(I−P)(μ−a). The distance residual is (I−P)xᵢ+c. Summing its squared norm gives Σ‖(I−P)xᵢ‖²+N‖c‖² because Σxᵢ=0 cancels the cross term. The minimum occurs exactly when c=0, equivalently μ−a∈L, or μ∈a+L. Offsets a differing by a vector of L represent the same affine set. Thus nonuniqueness of that representative does not mean a collection of distinct best parallel affine planes.

</details>

## Readiness check

Explain the difference between a principal direction, a score, and a reconstructed observation. Then state exactly what “optimal” means for a rank-k approximation, including its norm and the set of allowed competitors.

## Optional clinic: does the best error identify one matrix?

This optional untimed continuation sits outside the chapter's original two-session allocation. Its completion time has not been calibrated. The preceding Eckart–Young statement is correct: truncated SVD supplies a minimizing matrix for each stated norm. We now ask for the **whole set of minimizers**, and test a separate requirement on their outputs.

### State the norm, shape, units, and competitors

Use fixed normalized Euclidean input and output coordinates. Gains and error values below are dimensionless, and the normalization stays fixed across candidates. If starting with physical quantities, choose and declare reference units before using these Euclidean norms; changing those units changes the optimization problem.

Our first matrix is a linear map from \(\mathbb R^2\) to \(\mathbb R^2\):

\[
X=\begin{pmatrix}3&0\\0&1\end{pmatrix}.
\]

The competitors are **all real \(2\times2\) matrices \(Y\) with rank at most one**. This includes the zero matrix. We do not initially require a competitor to be diagonal or to have the same output line as a truncated SVD.

For an error matrix \(E=X-Y\), the spectral norm measures the largest error on a unit input:

\[
\|E\|_2=\max_{\|z\|_2=1}\|Ez\|_2.
\]

The Frobenius norm aggregates all entrywise errors:

\[
\|E\|_F^2=\sum_{i,j}E_{ij}^2.
\]

These are two different objectives, even when their minimum values happen to agree.

In the earlier PCA setting, centered \(X\) has shape \(N\times d\), and \(W\) has shape \(d\times k\) with \(W^TW=I_k\). Its reconstruction \(XWW^T\) has shape \(N\times d\) and imposes the extra requirement of orthogonal projection in feature space. The current example concerns arbitrary rank-bounded matrices, as permitted in the chapter's general approximation theorem. This particular diagonal \(X\) is a normalized \(2\times2\) linear map, not a claim to be a centered data table. Keep the broader competitor class visible throughout the argument.

### Predict before reading the optimizer proof

The singular values of \(X\) are \(3>1>0\), so there is a strict gap. For the displayed family

\[
Y_a=\begin{pmatrix}a&0\\0&0\end{pmatrix},
\]

compare \(a=2,5/2,3,4\). Predict which choices minimize spectral error and which minimize Frobenius error. Does a strict singular gap force the same unique matrix under both objectives? State whether a claim about the displayed family already proves a claim about **all** rank-at-most-one competitors. Record your reasoning before moving the control or reading the proof below.

### Compare both objectives at the same coefficient

The horizontal axis is the retained coefficient \(a\) in \(Y_a\); the vertical axis is a matrix error norm in the fixed normalized units. This is an error-versus-coefficient graph, not a drawing of a matrix, an eigendirection, or observed data. Blue is spectral error; teal is Frobenius error. The rose vertical connector joins their current values at the same \(a\). Its length is the difference between two objective values, **not** the norm of a residual vector.

```mathviz
scene "Two errors for a rank-one choice";
domain 1 5;
range 0.8 2.5;
coordinates free;
param a=2.5 from 1 to 5;
fn spectral(x)=(abs(3-x)+1+abs(abs(3-x)-1))/2;
fn frobenius(x)=sqrt((3-x)^2+1);
plot spectral color blue;
plot frobenius color teal;
segment selected from (a,spectral(a)) to (a,frobenius(a)) color rose;
measure spectral_value=spectral(a);
measure frobenius_value=frobenius(a);

```

**Manipulate →** Start at \(a=5/2\), compare the two readouts, then check \(a=2,3,4\) and an outside value such as \(1\). **Explain →** Decide whether the same minimum error value identifies the same set of minimizing matrices. At \(a=3\), the connector has zero length because the objectives agree; the two readouts still describe two objectives. **Prove →** Establish the lower bound and complete optimizer classification below. The control only samples \(Y_a\) for \(1\le a\le5\); those samples do not prove that no other real rank-at-most-one matrix can do better.

### A norm comparison that works for both matrix shapes

For any real \(m\times n\) matrix \(E\) and unit vector \(z\in\mathbb R^n\), its output \(Ez\) lies in \(\mathbb R^m\). Rowwise Cauchy–Schwarz gives

\[
\begin{aligned}
\|Ez\|_2^2&=\sum_i\left(\sum_jE_{ij}z_j\right)^2\\
&\leq\sum_i\left(\sum_jE_{ij}^2\right)\|z\|_2^2\\
&=\|E\|_F^2.
\end{aligned}
\]

Taking the maximum over unit inputs proves \(\|E\|_2\leq\|E\|_F\). We will use this comparison to prove global Frobenius uniqueness, rather than merely compare a few diagonal candidates.

### Prove the global spectral lower bound

For any real \(2\times2\) competitor of rank at most one, rank–nullity supplies a unit \(w=(w_1,w_2)^T\) in \(\ker Y\). Therefore

\[
\|X-Y\|_2^2\geq\|(X-Y)w\|_2^2
=\|Xw\|_2^2,
\]

\[
\|Xw\|_2^2=9w_1^2+w_2^2=1+8w_1^2\geq1.
\]

The candidate \(Y_3=\operatorname{diag}(3,0)\) has residual \(\operatorname{diag}(0,1)\) and attains error one. Thus the global optimal spectral error is exactly one, including competitors outside the displayed family.

### Find every spectral minimizer

Suppose \(\|X-Y\|_2\leq1\). The lower-bound calculation forces every unit kernel vector to have \(w_1=0\), so its possible unit values are **\(\pm e_2\)**. Either sign gives \(Ye_2=0\). Rank zero is impossible at this error, since \(\|X-0\|_2=3\); consequently \(\ker Y=\operatorname{span}\{e_2\}\).

Write \(Ye_1=(a,b)^T\). For \(E=X-Y\),

\[
Ee_1=(3-a,-b)^T,
\]

\[
Ee_2=e_2.
\]

The defining operator inequality holds for every input, not only unit inputs. Apply it to \(e_2+h e_1\) for every real \(h\):

\[
-2bh+\big((3-a)^2+b^2-1\big)h^2\leq0.
\]

Here the coefficient \(c=(3-a)^2+b^2-1\) is finite. If \(b\ne0\), choose \(\varepsilon>0\) with \(\varepsilon|c|<|b|\), and choose \(h\) of magnitude \(\varepsilon\) with the opposite sign to \(b\). Then

\[
\begin{aligned}
-2bh+ch^2&\geq2|b|\varepsilon-|c|\varepsilon^2\\
&>|b|\varepsilon>0,
\end{aligned}
\]

contradicting the inequality. Hence \(b=0\). This argument uses finite algebraic inequalities; it needs no differentiation or limit theorem.

We have proved that every spectral minimizer is diagonal, rather than imposing diagonality as a competitor restriction. Its error is

\[
\|X-Y_a\|_2=\max(|3-a|,1).
\]

It is at most one exactly when \(2\leq a\leq4\). Conversely every such \(Y_a\) has rank one and error one. The complete set of global spectral minimizers is therefore

\[
Y=\operatorname{diag}(a,0),
\]

\[
2\leq a\leq4.
\]

A strict singular gap did not make this optimizer set a singleton.

### Prove the unique Frobenius choice

For every allowed competitor,

\[
\|X-Y\|_F\geq\|X-Y\|_2\geq1.
\]

The candidate \(Y_3\) attains Frobenius error one. Every Frobenius minimizer must consequently also be spectral-optimal, and so belongs to the complete interval just proved. On that interval,

\[
\|X-Y_a\|_F^2=1+(3-a)^2.
\]

Equality to one forces \(a=3\). Thus \(Y_3\) is the **unique global Frobenius minimizer**, while infinitely many matrices attain the same optimal spectral error. This is uniqueness over the entire declared competitor class.

The exact comparison checks are:

- At \(a=1\) or \(5\): spectral error \(2\), Frobenius error \(\sqrt5\).
- At \(a=2\) or \(4\): spectral error \(1\), Frobenius error \(\sqrt2\).
- At \(a=5/2\): spectral error \(1\), Frobenius error \(\sqrt5/2\).
- At \(a=3\): both error values are \(1\).

Both optimal error values happen to be one here. In larger examples with several discarded singular values, the Frobenius and spectral optimal values can themselves differ, as the chapter's formulas show. An error value, a minimizing matrix, and a complete optimizer set are distinct answers.

The competitor distinction also has a concrete consequence. If we additionally required \(Y=XP\) for a rank-one orthogonal projector \(P\), then an optimal \(Y_a\) would give

\[
P=X^{-1}Y_a=\operatorname{diag}(a/3,0).
\]

Idempotence forces \(a/3\) to be zero or one; inside the optimal interval only \(a=3\) remains. Silently restricting to orthogonal reconstructions would therefore change the optimizer set. The earlier PCA discussion and the arbitrary-matrix result are consistent.

### Keep the zero-error and rank-zero exceptions

If the discarded singular value is changed to zero, \(X_0=\operatorname{diag}(3,0)\) itself has rank one. It is an admissible exact approximation. The minimum error is zero in either norm, and zero norm of \(X_0-Y\) forces \(Y=X_0\). More generally, if the rank bound already permits the exact matrix, it is the unique zero-error minimizer in either norm, including zero singular values tied at a cutoff.

With rank bound zero, \(Y=0\) is the only competitor, even if the error is positive. For the original \(X\), its spectral error is three and Frobenius error is \(\sqrt{10}\). Rank zero was included in the main rank-at-most-one class, but was not optimal there. Do not turn the positive-tail example into a claim that spectral approximation is always nonunique or that every tied cutoff is nonunique.

### Independent changed task: a rectangular optimizer disk and an output condition

Keep the same normalized Euclidean convention, but change the output space from \(\mathbb R^2\) to \(\mathbb R^3\). Define three output vectors

\[
u_1=(1,2,2)^T/3,
\]

\[
u_2=(2,1,-2)^T/3,
\]

\[
u_3=(2,-2,1)^T/3,
\]

and the \(3\times2\) map

\[
A=[3u_1,u_2]
=\begin{pmatrix}1&2/3\\2&1/3\\2&-2/3\end{pmatrix}.
\]

The competitors are **all real \(3\times2\) matrices \(Y\) of rank at most one**. This is written work outside the scalar controls above.

1. Verify the output vectors are orthonormal and find the singular values of \(A\).
2. Find the optimal spectral error and **all** matrices attaining it. Do not assume the scalar interval from the square example is still the whole answer.
3. Find the Frobenius minimizer and prove or disprove its global uniqueness.
4. The original map satisfies the exact output condition \(u_3^TA=0\). Must every spectral-optimal surrogate satisfy \(u_3^TY=0\)? Produce an exact violating matrix if the condition does not follow. Explain how explicitly imposing the condition changes the competitor class.

<details><summary>Hints for the changed task</summary>

1. Compute numerator dot products and \(A^TA\). The vectors \(u_i\) live in the output space; \(e_1,e_2\) below live in the two-dimensional input space.
2. Use a unit kernel vector of \(Y\). At optimal error, determine what happens to \(e_2\), including both possible signs of a unit kernel vector. Expand \(Ye_1=s u_1+q u_2+t u_3\), and test the operator inequality at \(e_2+h e_1\) for both signs of small \(h\).
3. Once the residual columns are orthogonal, compute their lengths and the sum of their squared lengths. Use the global norm comparison, not only a comparison within a guessed family.
4. Test \(u_3^TY\) separately. Try \((s,t)=(3,1)\) only after deriving the admissible optimizer region.

</details>

<details><summary>Full reasoned answer to the changed task</summary>

**Basis and lower bound.** Each numerator has squared length nine. The three pairwise numerator dot products are \(2+2-4=0\), \(2-4+2=0\), and \(4-2-2=0\); hence the \(u_i\) form an orthonormal output basis. The two columns of \(A\) are orthogonal with lengths three and one, so

\[
A^TA=\operatorname{diag}(9,1).
\]

The singular values are \(3,1\). Any allowed \(Y\) has a unit input vector \(w\in\ker Y\). Then

\[
\|A-Y\|_2^2\geq\|Aw\|_2^2=1+8w_1^2\geq1.
\]

The candidate \([3u_1,0]\) attains spectral error one, so this is the global optimum.

**Complete optimizer set.** If the error is at most one, the lower bound forces the unit kernel vectors to be \(\pm e_2\), and \(Ye_2=0\). Rank zero is again impossible since \(\|A\|_2=3\). Write

\[
Ye_1=s u_1+q u_2+t u_3.
\]

The residual \(E=A-Y\) has columns

\[
Ee_1=(3-s)u_1-q u_2-t u_3,
\]

\[
Ee_2=u_2.
\]

Applying its operator bound to \(e_2+h e_1\), for every real \(h\), gives

\[
-2qh+\big((3-s)^2+q^2+t^2-1\big)h^2\leq0.
\]

If \(q\ne0\), the opposite-sign \(h\) argument proved above applies with the finite coefficient \(c=(3-s)^2+q^2+t^2-1\), making the left side strictly positive. Thus \(q=0\). The residual columns are now orthogonal, with squared lengths \((3-s)^2+t^2\) and one. Therefore

\[
\|A-Y\|_2=\max\!\left(\sqrt{(3-s)^2+t^2},1\right).
\]

The complete spectral optimizer set is

\[
Y=[s u_1+t u_3,0],
\]

\[
(3-s)^2+t^2\leq1.
\]

This is a disk of coefficient pairs, rather than the square example's interval. Conversely every pair in this disk gives spectral error one. Since \(s\geq2\) in the disk, its first column is nonzero and its matrix has rank one, as required.

**Frobenius choice.** Every competitor has Frobenius error at least its spectral error, hence at least one. The candidate \([3u_1,0]\) attains one. Any Frobenius minimizer is consequently in the complete spectral disk, where

\[
\|A-Y\|_F^2=1+(3-s)^2+t^2.
\]

Equality to one forces \((s,t)=(3,0)\). This proves that \([3u_1,0]\) is the unique global Frobenius minimizer.

**Output condition.** Orthogonality gives \(u_3^TA=(0,0)\), but for a spectral minimizer

\[
u_3^TY=(t,0).
\]

Choose \((s,t)=(3,1)\). The resulting matrix is

\[
Y=\begin{pmatrix}5/3&0\\4/3&0\\7/3&0\end{pmatrix}.
\]

It has rank one. Its residual columns are \(-u_3\) and \(u_2\), two orthonormal vectors; therefore \((A-Y)^T(A-Y)=I_2\), its spectral error is one, and its Frobenius error is \(\sqrt2\). Yet \(u_3^TY=(1,0)\ne0\). On unit input \(e_1\), the surrogate introduces an output component of one along \(u_3\), although the original map has no component along that direction.

Thus a best spectral error does not by itself preserve the exact output condition. If the condition is explicitly required, it restricts the optimizer disk to \(t=0\), leaving the interval \(2\leq s\leq4\). The Frobenius center remains allowed. A structural condition is an additional modeling requirement, not a consequence of the numerical value of an optimal error.

</details>

For norm conventions and best low-rank approximation context, see Daniel Kressner's [EPFL Lecture 1](https://www.epfl.ch/labs/anchp/wp-content/uploads/2018/10/lecture1-slides.pdf), PDF pages 18 and 23–24. The interval and disk classifications above supply the specific claims used here; the zero-error and rank-zero qualifications are part of their scope.

## Core development: proving the low-rank approximation bounds

The full norm-dependent optimiser clinic is in [Inference from linear data](inference-linear-data.md). The main theorem about optimal errors can be proved with finite-dimensional orthogonality and rank, rather than treated as a property of a numerical routine. Its competitor class is all matrices of rank at most k of the same shape; extra sign, sparsity or entry constraints would change the theorem.

**Theorem 18.1 (Eckart–Young error bounds).** Let X be a real N×d matrix with positive singular values σ₁≥⋯≥σᵣ>0. Retaining its largest k singular terms gives a rank-at-most-k matrix Xₖ. For 0≤k<r, every matrix B of rank at most k satisfies

‖X−B‖₂≥σₖ₊₁, ‖X−B‖_F²≥Σⱼ₌ₖ₊₁ʳσⱼ²,

and Xₖ attains both bounds. For k≥r, the optimum is X itself with zero error.

*Proof of the spectral bound.* In the input space, let E=span{v₁,…,vₖ₊₁}. Its dimension is k+1. Rank–nullity gives dim ker(B)≥d−k, so E∩ker(B) contains a nonzero vector by the dimension formula for subspaces. Choose a unit w there. Expanding it in the displayed right singular directions gives ‖Xw‖²≥σₖ₊₁², while Bw=0. Hence ‖X−B‖₂≥‖(X−B)w‖≥σₖ₊₁. The truncated difference has precisely the discarded singular terms, whose largest stretch is σₖ₊₁, proving attainability.

*Proof of the Frobenius bound.* Let L be the row space of B, of dimension ℓ≤k, with orthogonal projector P. Each row of X(I−P) belongs to L⊥, while each row of XP−B belongs to L. Rowwise Pythagoras therefore gives

‖X−B‖_F²=‖X(I−P)‖_F²+‖XP−B‖_F²≥‖X‖_F²−‖XP‖_F².

Complete the right singular vectors to an orthonormal input basis and pad their squared singular values by zeros. Put αⱼ=‖Pvⱼ‖². Each αⱼ lies in [0,1]. If w₁,…,wℓ is an orthonormal basis of L, then αⱼ=Σᵢ(wᵢᵀvⱼ)²; summing over the complete v basis gives Σⱼαⱼ=ℓ≤k.

Expansion in those same orthonormal bases gives ‖XP‖_F²=Σⱼσⱼ²αⱼ. For completeness, XP=Σᵢ(Xwᵢ)wᵢᵀ; the cross terms in its squared Frobenius norm vanish by orthogonality of the wᵢ. Substituting the singular expansion of each Xwᵢ yields the asserted sum.

When k≥1, decreasing order of σⱼ² gives Σⱼσⱼ²αⱼ≤Σⱼ₌₁ᵏσⱼ². Indeed the weight after index k is at most Σⱼ₌₁ᵏ(1−αⱼ); moving that weight to the first k entries cannot decrease the weighted sum, since every earlier value is at least every later one. More explicitly, the tail is at most σₖ²Σⱼ₌₁ᵏ(1−αⱼ), which is at most the weighted deficit Σⱼ₌₁ᵏσⱼ²(1−αⱼ). For k=0 the row space is zero, so XP=0 and the same conclusion is immediate.

Thus ‖X−B‖_F²≥Σⱼ₌ₖ₊₁ʳσⱼ². Choosing P onto the first k right singular directions and B=XP=Xₖ makes the perpendicular splitting and weighted bound equalities. This proves attainability. If k≥r, choosing B=X makes either norm zero, and no norm can be negative. ∎

The spectral proof finds a direction any low-rank competitor must miss. The Frobenius proof accounts for all squared error through an orthogonal splitting and a finite allocation of at most k projection weights. They are different arguments because the two objectives measure different things.

### Worked example 3: reconstructing a centred table along a coordinate axis

Use observations (2,0),(−2,0),(0,1),(0,−1). Their mean is zero and their covariance is diag(8/3,2/3). The horizontal direction captures the larger variance. Projection gives reconstructed rows (2,0),(−2,0),(0,0),(0,0), whose total squared error is two. This equals (N−1)λ₂=3·(2/3). The retained fraction is (8/3)/(10/3)=4/5.

If the second feature is instead recorded in units three times as small, its numerical coordinates multiply by three. The covariance becomes diag(8/3,6), so the vertical direction is now principal, retaining fraction 6/(8/3+6)=9/13. Changing units changed the Euclidean metric on the feature table. The theorem still solves the stated problem exactly, but the modeller must decide whether that problem represents the intended comparisons.

### Worked example 4: a tied retained direction

For the matrix X=diag(3,3,1), rank-one approximation has optimal spectral error three and squared Frobenius error ten. For any unit vector q in span{e₁,e₂}, the matrix B=3qqᵀ has rank one. In an orthonormal basis beginning with q and its perpendicular partner in that plane, the difference X−B has diagonal entries 0,3,1. Its errors are therefore three and √10 for every such q.

There are infinitely many optimal directions even for the Frobenius objective because the cutoff splits a tied singular value. This is different from merely changing q to −q: many genuinely different rank-one matrices occur. The data determine an optimal family rather than one privileged axis. In contrast, when a cutoff separates strictly different singular values, the principal subspace at that cutoff is determined even if a basis within a retained tied subspace is not.

## Sources

The additional proof and examples are original. Complementary primary background is Sheldon Axler, [*Linear Algebra Done Right*, fourth edition](https://linear.axler.net/LADR4e.pdf), its singular-value and approximation treatment, consulted 13 November 2026. The retained earlier clinic includes its separate norm-convention and low-rank references.

## Summary

PCA first centers the data and states a feature metric. Eigenvectors of the covariance maximise retained variance, and orthogonal projection converts that objective into reconstruction error. The SVD proves exact optimal errors among all rank-at-most-k matrices in both Frobenius and spectral norms. A kernel direction supplies the spectral lower bound, while row-space projection supplies the Frobenius bound. Ties can produce multiple best subspaces or matrices, and changing units changes the optimization question. An optimal numerical approximation does not by itself identify physical causes or certify recovery of an unknown truth.
