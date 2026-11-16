# Return to linear algebra: compute the whole eigenspace

These public tasks extend [Eigenvalues and eigenvectors](eigenvalues.md). They are unassessed written self-study, with public solutions and a descriptive rubric. They do not create Practice attempts, machine-verified proofs or qualified human grades.

For a later return, use a blank page after a gap and record the actual date, previous exposure and help. Looking up the eigenspace or solution changes the attempt to supported study. A new matrix here is not guaranteed to be unseen to a particular learner.

## Eigenspace multiplicity return

Work over ℝ. The characteristic polynomial is p_A(λ)=det(λI−A). An eigenspace is a kernel and contains zero; eigenvectors are its nonzero vectors. The problem is to describe the full kernel, not only exhibit an arrow that works.

```exercise
{"id":"euler-eigenspace-parameter-return","type":"written","prompt":"For real t, let A_t have rows (2+t,t,0), (−t,2−t,0), (0,0,−1). Compute its characteristic polynomial and all its eigenspaces for every t. Compare algebraic and geometric multiplicities, identify the exceptional parameter, and decide exactly when an eigenvector basis exists. Show why a drawing at a few parameter values cannot settle the full claim.","hints":["The upper-left block of λI−A_t has determinant (λ−2−t)(λ−2+t)+t². Keep t symbolic.","For eigenvalue 2 the kernel equations reduce to t(x+y)=0 and z=0. Treat t=0 separately before dividing by t."],"rubric":["Derives p_A(λ)=(λ−2)²(λ+1) without assuming triangularity","Describes E_2 as a plane at t=0 and a line otherwise","Finds E_−1=span{(0,0,1)} for every real t","Distinguishes the fixed algebraic multiplicities from the changing kernel dimension","Justifies the eigenvector-basis conclusion and treats negative as well as positive nonzero t"],"solution":"Expanding the block determinant gives $p_A(λ)=[(λ−2−t)(λ−2+t)+t²](λ+1)=(λ−2)²(λ+1)$. The algebraic multiplicities are two for 2 and one for −1. For (A_t−2I)(x,y,z)=0, the equations are t(x+y)=0, −t(x+y)=0 and −3z=0. If t=0, E_2={(x,y,0)}=span{(1,0,0),(0,1,0)}, of dimension two. If t≠0, E_2={(x,−x,0)}=span{(1,−1,0)}, of dimension one. For eigenvalue −1, the first two equations are (3+t)x+ty=0 and −tx+(3−t)y=0. Adding them gives 3(x+y)=0; substituting y=−x gives 3x=0. Thus x=y=0 while z is free, so E_−1=span{(0,0,1)}. At t=0 the three standard basis vectors form an eigenvector basis. Otherwise all eigenvectors lie on the two displayed eigenlines, whose span has dimension two, so they cannot form a basis of ℝ³. The equations prove the classification for every real parameter, including arbitrarily small and negative nonzero t; finite rendered samples cannot do so.","transfer":"On a later return, a linear map B sends (x,y,z) to (3x+z,3y,3z). Construct its matrix, characteristic polynomial and full eigenspace, and decide whether it has an eigenvector basis. Then change the first output to 3x, leaving the other outputs unchanged. Compare the two maps. Does a triple characteristic root force its eigenspace to have dimension either one or three?","transferSolution":"B has rows (3,0,1),(0,3,0),(0,0,3), so p_B(λ)=(λ−3)³. Its kernel equation (B−3I)(x,y,z)=(z,0,0)=0 says z=0, with x,y arbitrary. Therefore E_3=span{(1,0,0),(0,1,0)}, of dimension two, although the root has algebraic multiplicity three. There are no other eigenvalues. Every eigenvector lies in this plane, so no eigenvector basis of ℝ³ exists. Removing the z term gives 3I, with the same characteristic polynomial but E_3=ℝ³ and the standard eigenvector basis. Thus geometric multiplicity can take the intermediate value two; a repeated root alone determines neither a unique direction nor enough directions for a basis. Zero belongs to both kernels, but is not an eigenvector."}
```

## Eigenspace feedback and repair

<details>
<summary>Use after an attempt: check the kernel before counting directions</summary>

- **The diagonal was read as if A_t were triangular.** It is generally not triangular. Compute the two-by-two determinant; the t² terms cancel. A shortcut needs its own structural hypothesis.
- **Division by t discarded the exceptional case.** Split t=0 and t≠0 first. The root multiplicity stays fixed while the kernel equation changes rank.
- **One eigenvector was presented as the entire answer.** Solve for every free variable. In the changed task, a whole two-dimensional plane is required.
- **A triple root was assigned three independent eigenvectors.** Algebraic multiplicity counts polynomial roots. Geometric multiplicity counts the dimension of a kernel; compute it separately.
- **An almost preserved direction was accepted.** Exact kernel equations, including their parameter cases, determine eigenvectors. Near-parallel plotted arrows cannot establish an equality.

Compare the rubric against the first response, retain the missing equations and then revise. Complete reference calculations support self-review; accepting a proof or assigning a grade requires an actual appropriately qualified reviewer.

</details>

Return to [Systems and row reduction](systems-elimination.md) for kernel calculations and [Bases and dimension](bases-dimension.md) for the basis criterion. Revisit [Eigenvalues](eigenvalues.md) before using [Diagonalization and dynamics](diagonalization.md).
