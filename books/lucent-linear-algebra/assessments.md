# Assessment studio: compute, explain, test, and model

These assessments are original problems designed to connect the course's ideas. Attempt them with paper before opening a hint. A correct numerical answer earns only the calculation marks; a requested explanation, hypothesis, or counterexample earns separate marks. State your matrix dimensions, show enough intermediate steps to make your reasoning checkable, and distinguish an exact identity from numerical evidence.

Each checkpoint is worth 100 marks and is intended for 75–90 minutes. The cumulative examination is worth 100 marks and is intended for 120–150 minutes. Those timings are suggestions, not measured norms. For self-study, record an untimed attempt first and use a different problem later to test fluency. A suggested mastery target is at least 80% overall and a correct explanation of every missed conceptual question after revision.

**Required work for the selected undergraduate core.** Complete Checkpoint 1 after chapter 8, Checkpoint 2 after chapter 12, and all six cumulative-examination questions after chapter 20. The sole required core synthesis is [Chapter 20's complete synthetic calibration and validation reference](dynamics-capstone.md#a-complete-synthetic-validation-reference), including its data, generator, held-out errors, exact-solution verification, numerical refinement, sensitivity calculation, failure case and 100-point rubric. The visual Investigations A and B below are both optional extensions for this selection; neither replaces a checkpoint, an examination question or the Chapter 20 synthesis.

The Chapter 20 project uses 8–12 hours within the course guide's existing 20–40-hour assessment-and-revision allowance; the checkpoint and examination first attempts are included there too. The selected core's total remains the existing 140–180-hour planning estimate. Prompts and worked solutions are public: attempt-before-opening and any timed conditions are voluntary self-study conventions, while saved work and self-review checkmarks do not constitute automatically graded or independently verified evidence.

## Checkpoint 1: systems, spaces, and coordinates

Complete this checkpoint after chapter 8.

1. **A rectangular-space investigation, 30 marks.** Let A=[1 2 0; 0 1 1; 1 3 1]. Find its reduced row echelon form and rank (6). Give bases for N(A), C(A), C(Aᵀ), and N(Aᵀ), stating each ambient space (12). Solve Ax=(3,2,5) (6). State the necessary and sufficient condition on b=(b₁,b₂,b₃) for Ax=b to be consistent, and justify it using the left null space (6).
2. **Coordinates of one map, 25 marks.** Let B=((1,1),(1,−1)), let x=(4,2), and let T have standard matrix A=[2 1;1 2]. Find [x]ᴮ (5), the matrix [T]ᴮ (10), and T(x) by both coordinate routes (5). Explain what stays fixed when the basis changes (5).
3. **Reusable elimination, 25 marks.** Find an LU factorization of M=[2 1;4 3] with unit diagonal in L (10). Use it to solve Mz=(1,5) (10). Explain why N=[0 1;1 1] cannot be eliminated by the same no-swap first-pivot procedure, although N is invertible (5).
4. **A map on polynomials, 20 marks.** Let D:P₂→P₁ differentiate real polynomials. Use the ordered bases (1,t,t²) and (1,t). Find its matrix (5), kernel and image (5), and verify rank–nullity (5). Explain why replacing D(p) by D(p)+1 would destroy linearity (5).

<details>
<summary>Checkpoint 1: hints</summary>

1. Subtract the first two rows from the third. One free variable remains. A left-null vector is a relation among rows; it must also annihilate a consistent right-hand side.
2. The basis matrix sends coordinate lists to standard vectors. Apply T to each basis vector to construct the new matrix.
3. The multiplier eliminating the lower-left entry is 2. Store that multiplier in L, then use forward and backward substitution.
4. Differentiate the three domain basis elements separately. A linear map always sends zero to zero.

</details>

<details>
<summary>Checkpoint 1: full solutions and marking evidence</summary>

1. The third row is the sum of the first two. Subtracting 2R₂ from R₁ after eliminating R₃ gives R=[1 0 −2;0 1 1;0 0 0], so rank(A)=2. The homogeneous equations are x₁=2x₃ and x₂=−x₃, giving N(A)=span{(2,−1,1)} in R³. Pivot columns 1 and 2 of the original matrix give C(A)=span{(1,0,1),(2,1,3)} in R³. Nonzero RREF rows give C(Aᵀ)=span{(1,0,−2),(0,1,1)} in R³. The row relation gives N(Aᵀ)=span{(−1,−1,1)} in R³. The dimensions are 1,2,2,1, as rank–nullity predicts. For b=(3,2,5), choose x₃=s; then x₂=2−s and x₁=−1+2s. Every solution is (−1,2,0)+s(2,−1,1), with real s. A general b is consistent exactly when b₃=b₁+b₂, equivalently (−1,−1,1)·b=0. Necessity follows by multiplying Ax=b by that left-null row. Sufficiency follows because, under this relation, the third equation repeats the first two and those can always be solved. A dimension count without a basis does not earn all basis marks.
2. Write x=c₁(1,1)+c₂(1,−1). The equations c₁+c₂=4 and c₁−c₂=2 give [x]ᴮ=(3,1). T(1,1)=3(1,1), while T(1,−1)=(1,−1), so [T]ᴮ=diag(3,1). In B coordinates the output is (9,1), which converts to 9(1,1)+(1,−1)=(10,8). Direct multiplication A(4,2) also gives (10,8). The vector, map, and resulting output are fixed mathematical objects; their numerical coordinate descriptions change with the ordered basis. If P=[1 1;1 −1], the relation is [T]ᴮ=P⁻¹AP.
3. L=[1 0;2 1] and U=[2 1;0 1], and multiplying verifies LU=M. Solve Ly=(1,5): y₁=1 and 2y₁+y₂=5, hence y=(1,3). Then Uz=y gives z₂=3 and 2z₁+3=1, so z=(−1,3). Direct substitution gives Mz=(1,5). For N the initial pivot is zero, so the first elimination multiplier would require division by zero. Swap the rows before eliminating: PN=[1 1;0 1] is already upper triangular. Its determinant is nonzero; an unavailable pivot in one ordering is not evidence of singularity.
4. D(1)=0, D(t)=1, D(t²)=2t, so the matrix is [0 1 0;0 0 2]. The kernel consists of constant polynomials and has basis {1}; the image is all P₁, with basis {1,t}. Thus nullity 1 plus rank 2 equals dim(P₂)=3. The modified map sends the zero polynomial to the constant polynomial 1, violating a necessary condition for linearity. This failure is already enough; no search through general polynomials is needed.

</details>

## Checkpoint 2: geometry, fitting, and numerical judgement

Complete this checkpoint after chapter 12.

1. **Fit and factor, 35 marks.** Fit y=α+βt to (−1,1),(0,0),(1,2) by least squares. Write A and b, derive the normal equations, and find α and β (15). Compute the fitted vector, residual, and squared error, then verify Aᵀr=0 (10). Give a thin QR factorization and solve the same problem through R (10).
2. **Nearest point in a plane, 25 marks.** Let S=span{(1,1,0),(0,0,1)} and b=(2,0,3). Find the projection p and residual r (10). Write the projection matrix P (5), and prove p is the unique nearest point to b in S without differentiating a distance function (10).
3. **Area is not sensitivity, 20 marks.** For M≥1 let A=diag(M,1/M). Find its determinant and Euclidean condition number κ₂(A)=‖A‖₂‖A⁻¹‖₂ (10). Explain why determinant 1 does not imply that solving Ax=b is insensitive to changes in b (5). Give an explicit small perturbation of b that is amplified by a factor M in x (5).
4. **Why a hypothesis matters, 20 marks.** Prove that AᵀA is invertible when the columns of A are independent (10). Give a rank-deficient matrix whose least-squares coefficient vector is not unique, and describe all minimizers for one specified b (10).

<details>
<summary>Checkpoint 2: hints</summary>

1. The design columns are (1,1,1) and (−1,0,1); they are orthogonal. The residual is observed minus fitted.
2. The spanning vectors are perpendicular but not both unit length. Compare b−s with the perpendicular decomposition (b−p)+(p−s).
3. A diagonal map stretches one axis and contracts the other. Compute the largest stretch of both A and A⁻¹.
4. Relate xᵀAᵀAx to ‖Ax‖². Duplicate columns create a direction in coefficient space that changes no fitted value.

</details>

<details>
<summary>Checkpoint 2: full solutions and marking evidence</summary>

1. A=[1 −1;1 0;1 1], b=(1,0,2), AᵀA=diag(3,2), and Aᵀb=(3,1). Thus α=1 and β=1/2. The fitted vector is (1/2,1,3/2), so r=(1/2,−1,1/2) and ‖r‖²=1/4+1+1/4=3/2. Its dot product with the first column is 1/2−1+1/2=0; with the second it is −1/2+1/2=0. Set q₁=(1,1,1)/√3 and q₂=(−1,0,1)/√2. Then Q=[q₁ q₂] and R=diag(√3,√2), with QᵀQ=I and QR=A. Qᵀb=(√3,1/√2), so R(α,β)=Qᵀb again gives (1,1/2). The remaining residual is perpendicular to the model space; it has not been made zero by changing algorithms.
2. Projecting onto the orthogonal spanning vectors gives p=((b·(1,1,0))/2)(1,1,0)+3(0,0,1)=(1,1,3). Then r=(1,−1,0), which is perpendicular to both spanning vectors. The matrix is P=[1/2 1/2 0;1/2 1/2 0;0 0 1]. For every s∈S, p−s∈S and r⊥S, so ‖b−s‖²=‖r+(p−s)‖²=‖r‖²+‖p−s‖². This is minimized uniquely at s=p, with minimum squared distance 2. Showing a right angle in a diagram supports the argument but does not replace this identity.
3. det(A)=M(1/M)=1. For a unit vector (u,v), ‖A(u,v)‖²=M²u²+M⁻²v²≤M², with equality at (1,0). Thus ‖A‖₂=M. Interchanging the diagonal entries gives ‖A⁻¹‖₂=M and κ₂(A)=M². A unit area can become a very thin, long region, so its area says little about its smallest width. If δb=(0,ε), then δx=A⁻¹δb=(0,Mε), giving absolute amplification M. For b=(M,0), x=(1,0), the relative amplification ratio is M²: the relative input change is |ε|/M and the relative output change is M|ε|.
4. If AᵀAx=0, multiplying by xᵀ gives ‖Ax‖²=0, so Ax=0. Independent columns imply x=0. Therefore the square matrix AᵀA has trivial kernel and is invertible. For the counterexample take A=[1 1;0 0] and b=(2,1). The squared residual is (x₁+x₂−2)²+1, minimized exactly when x₁+x₂=2. Every pair (s,2−s) is a minimizer. The fitted vector (2,0) and residual (0,1) are unique, although the coefficient pair is not.

</details>

## Cumulative examination

1. **An unavailable eigenbasis, 15 marks.** For A=[2 1;0 2], find the eigenvalues and all eigenvectors (5). Decide whether A is diagonalizable (5). Derive a formula for Aⁿ for positive integers n (5).
2. **A quadratic form, 15 marks.** Orthogonally diagonalize C=[2 1;1 2] (5). Use the result to describe xᵀCx=1, including its principal directions and semiaxis lengths (5), and prove C is positive definite (5).
3. **A rectangular map, 20 marks.** Let A=[3 0 0;0 1 0]. Give one full SVD with dimensions (5), its pseudoinverse (5), and every solution of Ax=(6,2), identifying the minimum-norm one (5). Give a best rank-one approximation and its Frobenius error (5).
4. **What PCA keeps, 20 marks.** The observations are (2,1),(−2,−1),(1,2),(−1,−2). Compute their mean and sample covariance, using denominator n−1 (5). Find the first principal direction (5), the proportion of variance it explains (5), and the total squared reconstruction error when every observation is projected onto that direction (5).
5. **A probabilistic evolution, 15 marks.** A column probability vector evolves by pₖ₊₁=Ppₖ with P=[0.8 0.3;0.2 0.7]. Find the stationary distribution and an exact expression for pₖ when p₀=(1,0) (10). Give a column-stochastic counterexample showing that the existence of a stationary distribution alone does not guarantee convergence (5).
6. **A continuous evolution, 15 marks.** Solve x′=Bx with B=[−1 −2;2 −1] and x(0)=(1,0) (5). Verify the solution by differentiation (5). State what happens to its direction and norm as time increases, and connect this to the eigenvalues (5).

<details>
<summary>Cumulative examination: hints</summary>

1. Write A=2I+N, where N²=0, and use the binomial expansion.
2. Try the directions (1,1) and (1,−1), then normalize them.
3. Include the unused third input direction in V. The pseudoinverse maps outputs back with reciprocal nonzero stretches.
4. Symmetry makes the mean zero. The covariance's equal diagonal entries suggest diagonal principal directions.
5. On the probability line, write pₖ=(qₖ,1−qₖ); then qₖ₊₁=0.3+0.5qₖ.
6. Separate the scalar decay from a rotation through angle 2t.

</details>

<details>
<summary>Cumulative examination: full solutions and marking evidence</summary>

1. The characteristic polynomial is (2−λ)². Solving (A−2I)v=0 gives v₂=0, so all eigenvectors are nonzero multiples of (1,0). There is only one independent eigenvector in a two-dimensional space, hence no eigenbasis and no diagonalization. With N=[0 1;0 0], all powers Nʲ for j≥2 vanish. Therefore Aⁿ=2ⁿI+n2ⁿ⁻¹N=[2ⁿ n2ⁿ⁻¹;0 2ⁿ] for n≥1. A⁰=I separately. Repeated eigenvalues alone do not cause the failure: the matrix 2I has the same characteristic polynomial and every nonzero vector is an eigenvector.
2. Let q₁=(1,1)/√2, q₂=(1,−1)/√2, and Q=[q₁ q₂]. Then QᵀQ=I and C=Q diag(3,1)Qᵀ. In coordinates u=q₁·x and v=q₂·x, the level set is 3u²+v²=1. Its semiaxis along q₁ has length 1/√3; along q₂ it has length 1. For nonzero x, the coordinate pair (u,v) is nonzero, so xᵀCx=3u²+v²>0. The principal direction with the larger eigenvalue has the shorter ellipse axis at this fixed level.
3. One full SVD is U=I₂, Σ=[3 0 0;0 1 0] of size 2×3, and V=I₃. The pseudoinverse is A⁺=[1/3 0;0 1;0 0], of size 3×2. Every solution is x=(2,2,s), s∈R. Its squared norm is 8+s², uniquely minimized at s=0, agreeing with A⁺(6,2). Retaining the first singular term gives A₁=[3 0 0;0 0 0]. Its Frobenius error is 1, the square root of the sum of squares of discarded singular values. The second input direction is completely lost by this approximation even though the overall error is small relative to the leading stretch.
4. The mean is zero. Summing outer products gives [10 8;8 10], so the sample covariance is (1/3)[10 8;8 10]. Its eigenvectors are q₁=(1,1)/√2 and q₂=(1,−1)/√2, with eigenvalues 6 and 2/3. The first direction therefore explains 6/(6+2/3)=9/10 of the variance. Each observation has perpendicular coordinate of magnitude 1/√2, so each squared reconstruction error is 1/2 and the total is 2. Equivalently, (n−1)λ₂=3(2/3)=2. Choosing the direction's negative gives exactly the same principal line and reconstructions.
5. Solving Pπ=π and π₁+π₂=1 gives π=(0.6,0.4). The scalar recurrence yields qₖ−0.6=0.5(qₖ₋₁−0.6), hence pₖ=(0.6,0.4)+0.5ᵏ(0.4,−0.4). The second term tends to zero. For the counterexample take S=[0 1;1 0]. It has stationary distribution (1/2,1/2), but from (1,0) the sequence alternates between (1,0) and (0,1). This irreducible chain has period 2; aperiodicity is missing. The original P has strictly positive entries, satisfying the finite-state irreducibility and aperiodicity conditions used in the course.
6. The solution is x(t)=e⁻ᵗ(cos(2t),sin(2t)). Differentiation gives e⁻ᵗ(−cos(2t)−2sin(2t),2cos(2t)−sin(2t)), exactly Bx(t), and x(0)=(1,0). Its norm is e⁻ᵗ, tending to zero, while its direction rotates counterclockwise at angular speed 2. The eigenvalues −1±2i record decay through the negative real part and angular oscillation through the imaginary part. A numerical trajectory should approximate this curve; it does not establish the exact identity.

</details>

## Visual capstone: from an observation to a defensible model

For an optional visual extension, choose either investigation below. Submit a short written report, the editable source program, exact calculations where available, and a log of changes you made after testing a prediction. A polished animation without a correct mathematical argument cannot earn the explanation marks. The visual should expose a meaningful choice or failure case, and the report should remain understandable without running it.

### Investigation A: a moving coordinate frame for data

The four sample points come from the PCA examination question. The teal arrow defines a unit direction u=(cos θ,sin θ), and the amber segments join each observation to its orthogonal projection onto that line. The program writes the projection formula (u·x)u in scalar coordinates.

```mathviz
scene "Find the line that loses the least information";
domain -3 3;
range -3 3;
coordinates equal;
param theta = 0.3 from -1.57 to 1.57;
vector direction = (2.5*cos(theta),2.5*sin(theta)) color teal;
point a = (2,1) color rose;
point b = (-2,-1) color rose;
point c = (1,2) color rose;
point d = (-1,-2) color rose;
segment errora from (2,1) to ((2*cos(theta)+sin(theta))*cos(theta),(2*cos(theta)+sin(theta))*sin(theta)) color amber;
segment errorb from (-2,-1) to ((-2*cos(theta)-sin(theta))*cos(theta),(-2*cos(theta)-sin(theta))*sin(theta)) color amber;
segment errorc from (1,2) to ((cos(theta)+2*sin(theta))*cos(theta),(cos(theta)+2*sin(theta))*sin(theta)) color amber;
segment errord from (-1,-2) to ((-cos(theta)-2*sin(theta))*cos(theta),(-cos(theta)-2*sin(theta))*sin(theta)) color amber;
```

**Predict:** choose the minimizing angle before moving the slider. **Manipulate:** compare a horizontal line, the line of slope 1, and its perpendicular. **Explain:** derive the total squared residual E(θ)=10−8sin(2θ); it has minimum 2 and maximum 18. **Transfer:** replace one observation, recalculate the mean, and update every point and projection formula. Explain why projecting uncentred observations solves a different problem from fitting a line through the sample mean.

Your report must compute the revised covariance, find its largest eigenvalue and a corresponding unit eigenvector, and compare a symbolic prediction with the visual. Include a counterexample to the claim that scaling one measurement unit never changes PCA. One possible choice rescales the horizontal coordinate by a factor of 10; justify the changed covariance rather than relying on the apparent aspect ratio of the graph.

### Investigation B: how quickly does a population forget its start?

For P=[1−a b;a 1−b], take 0<a,b<1 and probability vector (q,1−q). Its stationary first coordinate is q*=b/(a+b), and the error after positive k steps is (1−a−b)ᵏ(q₀−q*). The scene displays the initial distribution, the current distribution, and the stationary point separately on the probability line. The exponent is a positive integer because the control n starts at 1 and is rounded down; this avoids the undefined scalar expression 0⁰ when a+b=1.

```mathviz
scene "A two-state chain approaches equilibrium";
domain -0.15 1.15;
range -0.15 1.15;
coordinates equal;
param a = 0.2 from 0.05 to 0.95;
param b = 0.3 from 0.05 to 0.95;
param start = 1 from 0 to 1;
param n = 1 from 1 to 20;
segment probabilities from (0,1) to (1,0) color teal;
point initial = (start,1-start) color blue;
point equilibrium = (b/(a+b),a/(a+b)) color amber;
point current = (b/(a+b)+(1-a-b)^floor(n)*(start-b/(a+b)),a/(a+b)-(1-a-b)^floor(n)*(start-b/(a+b))) color rose;
```

**Predict:** determine whether approach to equilibrium will alternate when a+b>1. **Manipulate:** test sums below, equal to, and above 1, using integer n. **Explain:** relate sign and magnitude of 1−a−b to the observations and handle the initial step separately when that eigenvalue is zero. **Transfer:** choose a target tolerance and derive the number of steps required from a logarithmic inequality when 0<|1−a−b|<1. The lower bounds on a and b keep the displayed stationary formula defined; they are not a theorem about all stochastic matrices.

Your report must give a complete parameter choice that reaches a specified tolerance, a second choice that converges much more slowly, and the periodic boundary example a=b=1 analyzed on paper. State whether the tolerance concerns one coordinate, Euclidean norm, or total variation distance. If you extend the slider bounds to include zero, update or remove formulas that divide by a+b and explain any newly nonunique stationary distributions.

### Marking rubric for either investigation

| Criterion | Marks | Evidence required |
| --- | --- | --- |
| Mathematical formulation | 20 | State objects, dimensions, units or conventions, and every necessary assumption. |
| Derivation and verification | 25 | Derive the central result, check at least two exact cases, and verify a claimed optimum or limit. |
| Meaningful interaction | 20 | Parameters test a stated prediction; labels and equal geometric scales make the comparison intelligible. |
| Failure case and transfer | 20 | Analyze a counterexample or degeneracy and explain how the model changes for new data. |
| Reproducibility and communication | 15 | Include runnable source, written conclusions, a correction log, and a description readable without the visual. |

For a partner review, have someone change one input without telling you which. Use the theorem and the program together to diagnose the effect. Then exchange roles. Finish by writing one claim your visual suggests but your report has not proved; identifying that boundary is part of competent mathematical modeling.

## Where next

For a proof-focused continuation, use [Finite-Dimensional Linear Algebra: Structure and Proof](#/books/linear-algebra-structure-proofs), stable book ID `book-linear-algebra-structure-proofs`. Begin after the computational and geometric core through Chapter 16 and the linked proof preparation in that book; its more abstract tail names further preparation at the point of use.

For algorithms, conditioning and finite-precision methods, use [Matrix Computation in Practice: Structure, Error, and Scale](#/books/matrix-computation-applications), stable book ID `book-matrix-computation-applications`. The least-squares, QR, eigenvalue and SVD chapters here provide its first-course matrix preparation. Exact algebraic identities and numerically stable implementations answer related questions with different error contracts.

The [Inference from linear data](inference-linear-data.md) unit collects the four optional clinics from Chapters 17–20 and adds connecting worked examples and exercises. It is an optional continuation rather than an additional requirement of the selected core or the Chapter 20 calibration dossier. The original chapter locations remain available for earlier reading links and saved work.
