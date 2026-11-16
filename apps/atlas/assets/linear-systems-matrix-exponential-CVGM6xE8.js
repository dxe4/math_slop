var e=`---
parent_id: book-ode-first-course
chapter_id: linear-systems-matrix-exponential
title: "Linear Systems and the Matrix Exponential"
level: undergraduate
license: CC BY-SA 4.0
---

# Linear Systems and the Matrix Exponential

A scalar state is insufficient when several quantities influence one another. Two connected tanks need two amounts; a second-order mechanical equation needs both position and velocity. A linear system packages these coupled rates into a matrix. The matrix exponential plays the role of the scalar exponential, but multiplication order becomes essential.

Read the earlier ODE chapters on linear equations and existence. Additional preparation now enters from the L2 [Lucent linear algebra book](/books/lucent-linear-algebra/): matrices and composition, inverses and LU, eigenvalues, diagonalization, and complex eigenvalues. Their stable chapter identities are matrices-composition, inverses-lu, eigenvalues, diagonalization, and complex-eigenvalues. The matrix-exponential construction is developed here and does not presuppose its treatment in Lucent's later dynamics capstone.

## Systems and constant matrices

**Definition 13.1 (Constant linear system).** For a fixed real \\(n\\times n\\) matrix \\(A\\) and a continuous vector function \\(g:I\\to\\mathbb R^n\\), a constant-coefficient linear system is
\\[
 x'=Ax+g(t).
\\]
A solution has continuously differentiable components and satisfies every component equation. It is homogeneous when \\(g=0\\).

The word constant refers to \\(A\\), not to the solution. The forcing \\(g\\) may vary with time. The independent variable ranges over an interval, and all component values are specified at the same initial time.

A second-order scalar equation \\(y''+py'+qy=r(t)\\) becomes a first-order system by setting \\(x_1=y\\), \\(x_2=y'\\):
\\[
 \\begin{pmatrix}x_1\\\\x_2\\end{pmatrix}'
 =
 \\begin{pmatrix}0&1\\\\-q&-p\\end{pmatrix}
 \\begin{pmatrix}x_1\\\\x_2\\end{pmatrix}
 +\\begin{pmatrix}0\\\\r(t)\\end{pmatrix}.
\\]
Both initial position and initial velocity are now components of one initial state. This conversion preserves the original equation and its initial data.

## A matrix size bound

For a vector use \\(\\|x\\|_\\infty=\\max_i|x_i|\\). For a matrix define the maximum row-sum norm
\\[
 \\|A\\|_\\infty=\\max_i\\sum_j|a_{ij}|.
\\]
Directly,
\\(\\|Ax\\|_\\infty\\le\\|A\\|_\\infty\\|x\\|_\\infty\\).
This inequality controls every component at once.

**Lemma 13.2 (Product estimate).** For square matrices of the same size,
\\(\\|AB\\|_\\infty\\le\\|A\\|_\\infty\\|B\\|_\\infty\\).

**Proof.** For each row \\(i\\),
\\[
 \\sum_j|(AB)_{ij}|
 \\le\\sum_j\\sum_k|a_{ik}||b_{kj}|
 =\\sum_k|a_{ik}|\\sum_j|b_{kj}|
 \\le\\|B\\|_\\infty\\sum_k|a_{ik}|.
\\]
Taking the maximum row proves the estimate. Repetition gives
\\(\\|A^k\\|_\\infty\\le\\|A\\|_\\infty^k\\). \\(\\square\\)

A norm is a way to measure size, not a change in the equation. If components have different physical units, choose compatible scales before comparing their sizes. A statement about immediate growth in one norm need not hold in every other norm.

## Defining and differentiating the exponential

**Definition 13.3 (Matrix exponential).** For any real \\(t\\), set
\\[
 e^{tA}=\\sum_{k=0}^{\\infty}\\frac{t^kA^k}{k!},
 \\qquad A^0=I.
\\]

**Theorem 13.4 (Convergence and derivative).** The series converges absolutely and uniformly for \\(t\\) in every bounded interval. Its sum is differentiable and
\\[
 \\frac d{dt}e^{tA}=Ae^{tA}=e^{tA}A,\\qquad e^{0A}=I.
\\]

**Proof.** On \\(|t|\\le T\\), the norm of the \\(k\\)-th term is bounded by \\(T^k\\|A\\|_\\infty^k/k!\\), whose scalar sum is finite. Tails therefore tend uniformly to zero, so each entry has a continuous uniform limit. The derivative series is bounded by
\\[
 \\sum_{k=1}^{\\infty}\\frac{kT^{k-1}\\|A\\|_\\infty^k}{k!}
 =\\|A\\|_\\infty e^{T\\|A\\|_\\infty}.
\\]
To justify differentiation, let \\(S_N\\) be the partial sums and \\(V\\) the uniform limit of their derivatives. The identity \\(S_N(t)=I+\\int_0^t S_N'(s)ds\\) passes to the uniform limit entry by entry. Thus the limit is \\(I+\\int_0^t V(s)ds\\), and the fundamental theorem gives derivative \\(V\\). Shifting the series index identifies \\(V=Ae^{tA}\\). Every power of \\(A\\) commutes with \\(A\\), proving the other order too. \\(\\square\\)

The derivative rule did not follow from pretending a matrix was a scalar. It followed from a norm bound and a limit argument. This distinction matters for products involving different matrices.

**Theorem 13.5 (Group and inverse rules).** For all real \\(s,t\\),
\\[
 e^{sA}e^{tA}=e^{(s+t)A},\\qquad
 (e^{tA})^{-1}=e^{-tA}.
\\]

**Proof.** Absolute convergence permits multiplication and regrouping of the two series: the sum of the norms of their termwise products is at most \\(e^{|s|\\|A\\|}e^{|t|\\|A\\|}\\). Terms with total degree \\(m\\) combine as
\\[
 A^m\\sum_{j=0}^m\\frac{s^jt^{m-j}}{j!(m-j)!}
 =\\frac{(s+t)^mA^m}{m!}
\\]
by the binomial theorem. Summing gives the group rule. Put \\(s=-t\\) to obtain both inverse products equal to \\(I\\). \\(\\square\\)

## Solving the initial-value problem

**Theorem 13.6 (Homogeneous and forced formulas).** For constant \\(A\\), continuous \\(g\\) on \\(I\\), and \\(t_0\\in I\\), the unique solution with \\(x(t_0)=x_0\\) is
\\[
 x(t)=e^{(t-t_0)A}x_0+
 \\int_{t_0}^{t}e^{(t-s)A}g(s)\\,ds.
\\]

**Proof.** If \\(x\\) is a solution, differentiate the product \\(e^{-(t-t_0)A}x(t)\\). Commutation with \\(A\\) cancels the homogeneous terms, leaving \\(e^{-(t-t_0)A}g(t)\\). Integrating gives a necessary formula, and multiplying by the inverse yields the displayed expression using the group rule. Conversely, define \\(v=x_0+\\int_{t_0}^t e^{-(s-t_0)A}g(s)ds\\) and \\(x=e^{(t-t_0)A}v\\). The ordinary product rule and fundamental theorem verify \\(x'=Ax+g\\) and the initial value. Every candidate solution has this formula, proving uniqueness. \\(\\square\\)

This is a direct existence proof for constant linear systems. It does not require a general systems existence theorem. On an unbounded coefficient interval, the same formula exists at every finite time, although its size may grow rapidly.

## Computing by structure

If \\(A=SDS^{-1}\\), with \\(S\\) invertible and \\(D\\) diagonal, then \\(A^k=SD^kS^{-1}\\). Substituting into the convergent series proves
\\[
 e^{tA}=S\\,\\operatorname{diag}(e^{t\\lambda_1},\\ldots,e^{t\\lambda_n})S^{-1}.
\\]
An eigenvector \\(v\\) with eigenvalue \\(\\lambda\\) gives the solution \\(e^{\\lambda t}v\\). When there is an eigenbasis, the initial vector decomposes into these independent modes.

Not every matrix has an eigenbasis. If \\(A=\\lambda I+N\\) and \\(N^m=0\\), then the commuting binomial expansion gives
\\[
 e^{tA}=e^{\\lambda t}\\sum_{j=0}^{m-1}\\frac{t^jN^j}{j!}.
\\]
Polynomial factors therefore belong naturally to repeated, defective cases. Merely writing a sum of eigenvectors would miss some initial states.

For commuting matrices \\(A,B\\), the same absolutely convergent binomial argument proves \\(e^{t(A+B)}=e^{tA}e^{tB}\\). Without \\(AB=BA\\), the binomial coefficients no longer describe the matrix powers, so this rule is unavailable. Similarly a time-dependent matrix \\(A(t)\\) cannot generally be solved by simply exponentiating its integral. Different times can contribute noncommuting matrices.

## Worked example 13.1: two coupled amounts

Consider
\\[
 x'=-2x+y,\\qquad y'=x-2y,\\qquad (x(0),y(0))=(3,1).
\\]
The matrix has eigenvector \\((1,1)\\) with eigenvalue \\(-1\\), and \\((1,-1)\\) with eigenvalue \\(-3\\). Since \\((3,1)=2(1,1)+(1,-1)\\),
\\[
 x(t)=2e^{-t}+e^{-3t},\\qquad
 y(t)=2e^{-t}-e^{-3t}.
\\]
Differentiating verifies both equations and the initial values.

For \\(t\\ge0\\), \\(y=e^{-t}(2-e^{-2t})>0\\), and \\(x>0\\). The total amount is \\(x+y=4e^{-t}\\); the difference is \\(x-y=2e^{-3t}\\). Redistribution equalizes the two amounts faster than the total leaks away. The eigenvectors reveal two physically different mechanisms.

The state approaches zero, but it does not reach zero at a finite time. Invertibility of \\(e^{tA}\\) shows that a nonzero initial vector cannot be mapped to zero by a finite-time homogeneous evolution.

## Worked example 13.2: decay with transient growth

Let
\\[
 A=\\begin{pmatrix}-1&4\\\\0&-1\\end{pmatrix}
 =-I+N,\\qquad N^2=0.
\\]
Hence
\\[
 e^{tA}=e^{-t}\\begin{pmatrix}1&4t\\\\0&1\\end{pmatrix}.
\\]
For initial vector \\((0,1)\\), the solution is \\((4te^{-t},e^{-t})\\). Both eigenvalues are negative, and both components eventually decay.

At \\(t=1/2\\), however, its Euclidean norm is \\(\\sqrt5\\,e^{-1/2}>1\\), the initial norm. To verify the strict inequality, square it: \\(5/e>1\\). The exponential series gives \\(e<3<5\\), so no rounded approximation is needed.

The upper component receives input from the lower before both decay. Negative eigenvalues describe eventual decay, but do not guarantee monotonic decrease of every chosen norm. The factor \\(t\\) in the defective solution is essential to this explanation.

## Worked example 13.3: persistent forcing changes the limit

Take
\\[
 x'=-x+1,\\qquad y'=-2y+2,\\qquad (x(0),y(0))=(4,-1).
\\]
The constant equilibrium is \\((1,1)\\). Subtracting it gives homogeneous scalar equations, so
\\[
 x(t)=1+3e^{-t},\\qquad y(t)=1-2e^{-2t}.
\\]
Each derivative and initial value checks directly. The solution tends to \\((1,1)\\), rather than to zero, because the forcing persists.

The vector formula yields the same result: \\(e^{tA}\\) is diagonal with entries \\(e^{-t}\\), \\(e^{-2t}\\), and the forcing integral has components \\(1-e^{-t}\\), \\(1-e^{-2t}\\). Writing this integral explicitly also checks the coefficient two in the second forcing term. A scalar integrating factor applied componentwise agrees with the matrix method because this matrix is diagonal.

## A useful size estimate

The defining series and product bound give
\\(\\|e^{tA}\\|_\\infty\\le e^{|t|\\|A\\|_\\infty}\\).
This estimate proves finiteness and supplies a safe upper bound, but can be very pessimistic for a stable matrix.

If a sharper estimate
\\(\\|e^{tA}\\|\\le Me^{-\\alpha t}\\) for \\(t\\ge0\\), with \\(M\\ge1\\), \\(\\alpha>0\\), is independently established in a compatible norm, and \\(\\|g(t)\\|\\le G\\), then variation of constants gives
\\[
 \\|x(t)\\|\\le Me^{-\\alpha t}\\|x_0\\|+
 \\frac{MG}{\\alpha}(1-e^{-\\alpha t})
 \\quad(t\\ge0).
\\]
The proof is simply the triangle inequality inside the forcing integral, followed by integrating the positive exponential kernel. Persistent bounded forcing need not yield convergence to zero.

## Volume change and the trace

The exponential formula also gives an exact geometric invariant:
\\[
 \\det(e^{tA})=e^{t\\operatorname{tr}A}.
\\]
To prove it without assuming that \\(A\\) is diagonalizable, put \\(\\Phi(t)=e^{tA}\\). It is invertible by the group law. Multilinearity of the determinant gives \\(\\det(I+hB)=1+h\\operatorname{tr}B+O(h^2)\\): the linear contributions select one diagonal entry, while every other nonconstant term has at least two factors of \\(h\\). Factor \\(\\Phi(t+h)\\) by \\(\\Phi(t)\\) and apply this identity to its first-order increment. The derivative of the determinant is therefore
\\[
 (\\det\\Phi)'=(\\det\\Phi)\\operatorname{tr}(\\Phi^{-1}\\Phi')
 =(\\det\\Phi)\\operatorname{tr}A.
\\]
Here \\(\\Phi'=A\\Phi\\), and trace is invariant under similarity, as follows by expanding \\(\\operatorname{tr}(BC)=\\operatorname{tr}(CB)\\). The scalar initial condition is determinant one at zero, giving the formula by the first-order linear theorem.

Thus a homogeneous linear flow multiplies oriented volume by a positive factor. It cannot collapse a nonzero volume to zero at a finite time, even if every trajectory tends to the origin as time grows. Positive time trace controls net volume growth, not every individual direction: one direction can expand while another contracts faster. For a planar saddle with eigenvalues one and minus two, the area factor is \\(e^{-t}\\), although the unstable direction grows. For a trace-zero shear, area remains constant while shapes become increasingly elongated. Volume preservation is therefore not the same as preservation of lengths or angles.

For a forced constant system, the time-to-time map is affine: its linear part is the same exponential and its remaining term is a common translation determined by the input. Comparing two initial states cancels that translation. Their difference therefore follows the homogeneous flow, and the same determinant controls volumes of families of initial states at a fixed later time. This conclusion does not assert conservation of the system's mechanical energy; it concerns the geometry of the state map and survives any common continuous forcing.

## Why a changing matrix needs an ordered evolution

The constant-matrix theorem must not be applied to a time-dependent matrix by simply inserting its entrywise integral into the exponential. For a piecewise constant example, use \\(A\\) during the first unit of time and \\(B\\) during the second. Matching the state continuously at the switch gives the endpoint map \\(e^Be^A\\), with the later operation on the left. Reversing the schedule gives \\(e^Ae^B\\). These maps can differ.

Take \\(A=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}\\) and \\(B=\\begin{pmatrix}0&0\\\\1&0\\end{pmatrix}\\). Each squares to zero, so direct multiplication gives \\(e^Be^A=\\begin{pmatrix}1&1\\\\1&2\\end{pmatrix}\\). But \\((A+B)^2=I\\), hence \\(e^{A+B}=\\cosh(1)I+\\sinh(1)(A+B)\\), whose diagonal entries are equal. It is not the same map. Both schedules have the same entrywise matrix integral; the missing information is the order of noncommuting actions. This is a piecewise classical evolution, with one-sided derivatives at the switching time. The constant-coefficient formula remains exact on each piece, while a general changing-coefficient theory needs its own ordered construction.

## Exercises

### Exercise 13.1 {#linear-systems-matrix-exponential-ex-1}

Convert \\(y''+3y'+2y=\\cos t\\), \\(y(0)=1\\), \\(y'(0)=-1\\), to a first-order system.

<details><summary>Hint 1</summary>
Use position and velocity as separate components.
</details>
<details><summary>Hint 2</summary>
Solve the original equation for the second derivative.
</details>
<details><summary>Solution</summary>
Set \\(x_1=y\\), \\(x_2=y'\\). Then \\(x_1'=x_2\\), \\(x_2'=-2x_1-3x_2+\\cos t\\), with initial vector \\((1,-1)\\). Thus \\(A=\\begin{pmatrix}0&1\\\\-2&-3\\end{pmatrix}\\) and \\(g=(0,\\cos t)\\). Recovering \\(y=x_1\\) reverses the conversion.
</details>

### Exercise 13.2 {#linear-systems-matrix-exponential-ex-2}

Compute \\(e^{tA}\\) for \\(A=\\operatorname{diag}(2,-3)\\).

<details><summary>Hint 1</summary>
Every power of a diagonal matrix is diagonal.
</details>
<details><summary>Hint 2</summary>
Sum each diagonal entry as a scalar exponential series.
</details>
<details><summary>Solution</summary>
We have \\(A^k=\\operatorname{diag}(2^k,(-3)^k)\\), including the identity at \\(k=0\\). Therefore \\(e^{tA}=\\operatorname{diag}(e^{2t},e^{-3t})\\). A homogeneous initial vector \\((a,b)\\) evolves to \\((ae^{2t},be^{-3t})\\).
</details>

### Exercise 13.3 {#linear-systems-matrix-exponential-ex-3}

Compute the exponential of \\(A=\\begin{pmatrix}0&2\\\\0&0\\end{pmatrix}\\).

<details><summary>Hint 1</summary>
Compute \\(A^2\\).
</details>
<details><summary>Hint 2</summary>
All terms after the first power then vanish.
</details>
<details><summary>Solution</summary>
Since \\(A^2=0\\), \\(e^{tA}=I+tA=\\begin{pmatrix}1&2t\\\\0&1\\end{pmatrix}\\). The resulting solution is \\(x=x_0+2ty_0\\), \\(y=y_0\\). This example has zero eigenvalues but may grow linearly.
</details>

### Exercise 13.4 {#linear-systems-matrix-exponential-ex-4}

For \\(A=\\begin{pmatrix}0&-2\\\\2&0\\end{pmatrix}\\), derive the exponential from its powers.

<details><summary>Hint 1</summary>
Here \\(A^2=-4I\\).
</details>
<details><summary>Hint 2</summary>
Separate even and odd powers into cosine and sine series.
</details>
<details><summary>Solution</summary>
The even terms sum to \\(\\cos(2t)I\\), and odd terms to \\(\\sin(2t)A/2\\). Thus \\(e^{tA}=\\begin{pmatrix}\\cos2t&-\\sin2t\\\\\\sin2t&\\cos2t\\end{pmatrix}\\). Multiplying shows it preserves Euclidean length, so trajectories are circles or the zero equilibrium.
</details>

### Exercise 13.5 {#linear-systems-matrix-exponential-ex-5}

Solve \\(x'=-2x+y\\), \\(y'=x-2y\\) with initial vector \\((1,3)\\).

<details><summary>Hint 1</summary>
Use the same two eigenvectors as Worked example 13.1.
</details>
<details><summary>Hint 2</summary>
Now \\((1,3)=2(1,1)-(1,-1)\\).
</details>
<details><summary>Solution</summary>
The solution is \\(x=2e^{-t}-e^{-3t}\\), \\(y=2e^{-t}+e^{-3t}\\). Its initial vector is \\((1,3)\\), and each eigenmode solves the homogeneous system. Their sum therefore solves it, with uniqueness supplied by Theorem 13.6.
</details>

### Exercise 13.6 {#linear-systems-matrix-exponential-ex-6}

For \\(A=\\begin{pmatrix}-2&3\\\\0&-2\\end{pmatrix}\\), solve with initial vector \\((1,2)\\).

<details><summary>Hint 1</summary>
Split \\(A=-2I+N\\) with \\(N^2=0\\).
</details>
<details><summary>Hint 2</summary>
Multiply \\(e^{-2t}(I+tN)\\) by the initial vector.
</details>
<details><summary>Solution</summary>
The exponential is \\(e^{-2t}\\begin{pmatrix}1&3t\\\\0&1\\end{pmatrix}\\). Hence \\(x=e^{-2t}(1+6t)\\), \\(y=2e^{-2t}\\). The polynomial factor cannot be omitted despite the single repeated eigenvalue.
</details>

### Exercise 13.7 {#linear-systems-matrix-exponential-ex-7}

Prove a nonzero homogeneous solution cannot become exactly zero at a finite time.

<details><summary>Hint 1</summary>
Express the state using the exponential.
</details>
<details><summary>Hint 2</summary>
Multiply by its inverse if the later vector is zero.
</details>
<details><summary>Solution</summary>
If \\(e^{(T-t_0)A}x_0=0\\), multiplication by \\(e^{-(T-t_0)A}\\) gives \\(x_0=0\\). Therefore a nonzero initial state remains nonzero at every finite time, although its norm may tend to zero as time tends to infinity.
</details>

### Exercise 13.8 {#linear-systems-matrix-exponential-ex-8}

Show that \\(A=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}\\) and \\(B=\\begin{pmatrix}0&0\\\\1&0\\end{pmatrix}\\) do not commute.

<details><summary>Hint 1</summary>
Multiply in both orders.
</details>
<details><summary>Hint 2</summary>
Compare the diagonal entries.
</details>
<details><summary>Solution</summary>
We obtain \\(AB=\\operatorname{diag}(1,0)\\) and \\(BA=\\operatorname{diag}(0,1)\\). They differ, so the commuting-exponential rule is unavailable. Indeed the coefficient of \\(t^2\\) in \\(e^{tA}e^{tB}\\) is \\(AB\\), while that in \\(e^{t(A+B)}\\) is \\((AB+BA)/2\\), which differs.
</details>

### Exercise 13.9 {#linear-systems-matrix-exponential-ex-9}

Solve \\(x'=-x+2\\), \\(y'=-3y+6\\), with zero initial vector.

<details><summary>Hint 1</summary>
The constant equilibrium is \\((2,2)\\).
</details>
<details><summary>Hint 2</summary>
Subtract the equilibrium before solving.
</details>
<details><summary>Solution</summary>
The solution is \\(x=2(1-e^{-t})\\), \\(y=2(1-e^{-3t})\\). Both start at zero, and differentiation gives the stated forced equations. The different decay rates describe the approach to the same equilibrium level.
</details>

### Exercise 13.10 {#linear-systems-matrix-exponential-ex-10}

Evaluate the maximum row-sum norm of \\(A=\\begin{pmatrix}-1&4\\\\2&-3\\end{pmatrix}\\), and give the general exponential bound.

<details><summary>Hint 1</summary>
Take absolute values before adding a row.
</details>
<details><summary>Hint 2</summary>
Both row sums happen to be equal.
</details>
<details><summary>Solution</summary>
Both absolute row sums are five, so \\(\\|A\\|_\\infty=5\\). The series estimate gives \\(\\|e^{tA}\\|_\\infty\\le e^{5|t|}\\). This is a guaranteed upper bound, not the exact growth rate or a classification of stability.
</details>

### Exercise 13.11 {#linear-systems-matrix-exponential-ex-11}

If \\(\\|e^{tA}\\|\\le2e^{-3t}\\), \\(t\\ge0\\), and \\(\\|g(t)\\|\\le6\\), derive a bound for the forced solution.

<details><summary>Hint 1</summary>
Use variation of constants with a compatible norm.
</details>
<details><summary>Hint 2</summary>
Integrate \\(12e^{-3(t-s)}\\) from zero to \\(t\\).
</details>
<details><summary>Solution</summary>
We obtain \\(\\|x(t)\\|\\le2e^{-3t}\\|x_0\\|+4(1-e^{-3t})\\). The constant four is \\(MG/\\alpha=2\\cdot6/3\\). This proves a bounded response, not convergence to zero under arbitrary persistent forcing.
</details>

### Exercise 13.12 {#linear-systems-matrix-exponential-ex-12}

For \\(A=\\begin{pmatrix}-1&4\\\\0&-1\\end{pmatrix}\\), \\(x_0=(0,1)\\), show explicitly that negative eigenvalues do not force monotonic Euclidean decay.

<details><summary>Hint 1</summary>
Use the formula \\((4te^{-t},e^{-t})\\).
</details>
<details><summary>Hint 2</summary>
Compare its squared norm at \\(t=1/2\\) with the initial squared norm.
</details>
<details><summary>Solution</summary>
The initial squared norm is one. At \\(t=1/2\\), it is \\(e^{-1}(4+1)=5/e>1\\). Both eigenvalues equal \\(-1\\), so the solution eventually decays, but its norm has exceeded its initial value. The coupling creates transient growth through the factor \\(t\\).
</details>

## Sources

Original exposition. Primary references are Gerald Teschl's [Ordinary Differential Equations and Dynamical Systems, Chapter 3](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode) and Jiří Lebl's [Notes on Diffy Qs, systems and matrix exponentials](https://www.jirka.org/diffyqs/html/diffyqs.html). The Lucent linear algebra dynamics capstone and Atlas Linear Systems and Phase Geometry are retained local seed readings, not replaced or copied here.

## Summary

The matrix exponential is a convergent power series with a proved derivative, group law, and inverse. It gives every homogeneous solution and, through variation of constants, every forced solution of a constant linear system. Eigenvectors simplify computation when an eigenbasis exists; nilpotent factors explain defective cases and transient growth. The next chapter uses this machinery to classify the complete real planar linear phase portrait.
`;export{e as default};