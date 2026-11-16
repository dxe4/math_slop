
# Prerequisite Diagnostic and Repair Routes

This diagnostic routes study; it does not ration access. Work without software, label each response `secure`, `partial`, or `not yet`, and show the reasoning. A correct unsupported guess is `partial` because later chapters depend on auditable arguments.

## Diagnostic

### A. Linear algebra and geometry

1. For \(A=\begin{bmatrix}2 & 1 \\ 1 & 2\end{bmatrix}\), compute its eigenvalues and decide whether \(x^{\mathsf T} A x\) is strictly convex.

2. Solve \(Ax=b\) for \(A=\begin{bmatrix}1 & 1 \\ 1 & 1\end{bmatrix}\) and \(b=(2,2)^{\mathsf T}\). Is the solution unique? What happens for \(b=(2,3)^{\mathsf T}\)?

3. Let \(C=\{x \in \mathbb{R}^{2}: x_1+x_2=1\}\). Find the point of \(C\) nearest the origin and state the orthogonality condition.

4. If \(B\) is \(4 \times 3\), give the shapes of \(Bx\), \(B^{\mathsf T} y\), and \(B^{\mathsf T} B\) for compatible column vectors.

5. Explain why a large condition number can make a small residual compatible with a substantial solution error.

### B. Multivariable calculus and inequalities

6. Compute the gradient and Hessian of \(f(x,y)=(x-1)^{2}+3(x+y)^{2}\).

7. For differentiable \(f\), write the directional derivative at \(x\) in direction \(d\). What condition on \(d\) makes it a strict descent direction when \(\nabla f(x)\) is nonzero?

8. Minimize \(x^{2}+y^{2}\) subject to \(x+y=1\) by substitution and by a multiplier. Reconcile the multiplier sign with your Lagrangian convention.

9. Give a function with a stationary point that is not a local minimum, and one with a unique local and global minimum because of strict convexity.

10. State the triangle inequality and Cauchy–Schwarz inequality. Use them to show \(\lvert a^{\mathsf T} x\rvert \le \lVert a\rVert_2 \lVert x\rVert_2\).

### C. Convexity and proof

11. Show directly from the definition that \(f(x)=x^{2}\) is convex.

12. Is the set \(\{x: \lVert x\rVert_2 \ge 1\}\) convex? Supply two points and their midpoint as evidence.

13. If \(f\) is convex and differentiable, what first-order inequality relates \(f(y)\) to \(f(x)\) and \(\nabla f(x)\)?

14. Give a convex function that is not differentiable at its minimizer and identify its subdifferential there.

15. Explain the logical difference between “every local minimizer is global” and “the minimizer is unique.”

### D. Discrete structure and bounds

16. Encode “exactly one of \(z_1,z_2,z_3\) is selected” using binary variables and one linear equality.

17. Minimize \(x\) subject to \(x \ge 1/2\) and \(x\) integer. State the continuous relaxation optimum, integer optimum, and additive integrality gap.

18. For minimization, a relaxation has value \(L=7\) and a feasible integer point has value \(U=10\). Which is the lower bound, which is the upper bound, and what can be concluded?

19. A branch-and-bound node has lower bound \(12\), while the incumbent value is \(11\). Why may the node close? What changes if the alleged lower bound came from an unverified floating computation?

20. Explain why rounding a feasible point of a continuous relaxation may violate an equality constraint.

### E. Numerical computation and evidence

21. Central differences use \([f(x+h)-f(x-h)]/(2h)\). Why is the smallest representable positive \(h\) usually a poor choice?

22. Distinguish an absolute tolerance from a relative tolerance. Give a scale on which \(10^{-6}\) absolute residual is weak evidence.

23. A linear solver reports success. Name three quantities or conditions you would record before trusting a Newton step based on its output.

24. A program prints lower bound \(3.1415926\). What additional facts are needed before calling it a certified lower bound?

25. Explain the difference between ordinary floating evaluation of an interval endpoint and outward rounding.

26. A deterministic replay obtains a different branch tree but the same optimum. Is the original proof log replayed? What might explain the difference?

## Answer notes

1. The eigenvalues are \(3\) and \(1\). Both are positive, so \(A\) is positive definite. Since the Hessian of \(x^{\mathsf T} A x\) is \(2A\), the quadratic is strictly convex.

2. The first system reduces to \(x_1+x_2=2\), so it has infinitely many solutions. The second right-hand side is inconsistent because identical rows cannot produce distinct entries. Rank determines existence and uniqueness.

3. Symmetry or a multiplier gives \((1/2,1/2)\). Its displacement from the origin is parallel to the normal \((1,1)\) and orthogonal to every feasible direction \((t,-t)\).

4. With \(x \in \mathbb{R}^{3}\) and \(y \in \mathbb{R}^{4}\), the shapes are \(4 \times 1\), \(3 \times 1\), and \(3 \times 3\).

5. A residual measures the equation after multiplication by the matrix. An ill-conditioned inverse can amplify a small residual in sensitive directions; an error bound also needs matrix scale and conditioning.

6. \(\nabla f=(2(x-1)+6(x+y), 6(x+y))^{\mathsf T}\) and the Hessian is \(\begin{bmatrix}8 & 6 \\ 6 & 6\end{bmatrix}\).

7. The directional derivative is \(\nabla f(x)^{\mathsf T} d\). It is strict descent to first order when this inner product is negative.

8. Substitution gives \(x^{2}+(1-x)^{2}\), minimized at \(x=y=1/2\). With \(L=x^{2}+y^{2}+\lambda(x+y-1)\), stationarity gives \(2x+\lambda=2y+\lambda=0\); thus \(\lambda=-1\). Using \(L=f-\lambda h\) reverses the reported multiplier sign without changing the point.

9. \(f(x)=x^{3}\) has a stationary point at zero that is not a local minimum. \(g(x)=x^{2}\) is strictly convex and has the unique global minimizer zero.

10. \(\lVert u+v\rVert \le \lVert u\rVert+\lVert v\rVert\) and \(\lvert u^{\mathsf T} v\rvert \le \lVert u\rVert \lVert v\rVert\). The requested inequality is Cauchy–Schwarz with \(u=a\) and \(v=x\).

11. For \(0\le \theta\le 1\), expanding shows \(\theta x^{2}+(1-\theta)y^{2}-[\theta x+(1-\theta)y]^{2}=\theta(1-\theta)(x-y)^{2}\ge 0\).

12. No. The points \((1,0)\) and \((-1,0)\) belong to the set, but their midpoint \((0,0)\) does not.

13. \(f(y) \ge f(x)+\nabla f(x)^{\mathsf T}(y-x)\) for all points in the convex domain.

14. \(f(x)=\lvert x\rvert\) is convex and minimized at zero, where its subdifferential is \([-1,1]\).

15. Convexity can make every local minimizer global while allowing many minimizers, as for a constant function. Uniqueness needs an additional property such as strict convexity on the feasible set.

16. Require \(z_i \in \{0,1\}\) and \(z_1+z_2+z_3=1\).

17. The relaxation optimum is \(1/2\); the integer optimum is \(1\); the additive gap is \(1-1/2=1/2\).

18. \(L=7\) is a lower bound and \(U=10\) an upper bound, so the unknown optimum lies in \([7,10]\). The current absolute gap is at most \(3\); neither endpoint alone proves optimality.

19. No descendant can beat value \(11\) if \(12\) is a valid lower bound, so the node may close. If rounding could have raised the computed value above the true relaxation optimum, pruning is unsafe until the lower-bound property is verified or conservatively repaired.

20. Independent component rounding does not preserve coupled equations. For example \((1/2,1/2)\) satisfies \(x+y=1\), while rounding both halves upward yields \((1,1)\).

21. Nearby floating values can round to the same or nearly the same number, causing cancellation; division by a tiny \(h\) amplifies rounding error. A step sweep should reveal a useful middle regime.

22. Absolute tolerance bounds a residual in its native scale; relative tolerance compares it to a named reference scale. An absolute residual \(10^{-6}\) can be weak when data and objectives are near \(10^{-12}\), because the residual is then enormous relatively.

23. Record a scaled residual, conditioning or factorization warning, and whether the computed direction satisfies the intended descent or KKT model. Also record data type, pivoting, and regularization.

24. One needs the precise mathematical relaxation, verified feasibility of any dual witness, rounding direction, error enclosure, and a reproducible link between printed data and the problem. Decimal appearance alone proves nothing about direction.

25. Ordinary endpoint computations round to the nearest representable value and can shrink the true range. Outward rounding forces lower endpoints down and upper endpoints up so the mathematical image remains enclosed.

26. The optimum agrees, but the original execution was not replayed step for step. Tie breaking, iteration order, nondeterministic parallelism, arithmetic differences, or tolerance changes may alter the tree. A certificate checker may still validate both trees independently.

## Repair routes

If Questions 1–5 were difficult, repair linear algebra before Chapters 3, 5, 7, or 8. Practice range/null-space distinctions, orthogonal projection, positive definiteness, and residual-versus-error reasoning. Draw dimensions beside every product.

If Questions 6–10 were difficult, review multivariable differentiation, Taylor models, norms, equality-constrained multipliers, and sign conventions before Chapters 4–9. Work quadratic examples until gradients, Hessians, directional derivatives, and curvature have geometric meanings.

If Questions 11–15 were difficult, read Chapters 1–3 slowly. Prove convexity from both the segment definition and supporting inequalities. Maintain separate entries for existence, globality, and uniqueness; none follows automatically from the others.

If Questions 16–20 were difficult, use [Discrete and Global Optimisation](#/books/discrete-global-optimisation), beginning with its integer formulations and relaxations after practicing binary encodings and lower/upper-bound direction. Then read its polyhedral, branching and cutting chapters with a hand-drawn tree. At every node write the domain, relaxation, lower bound, incumbent, and closure reason.

If Questions 21–26 were difficult, read [automatic differentiation](../optimization-backprop-from-scratch/reverse-mode-adjoint-backprop.md) and the certificate and verified-software readings in [Discrete and Global Optimisation](#/books/discrete-global-optimisation) before making certified claims. Practice scale-aware residuals, step sweeps, exact fixtures, directed rounding, deterministic serialization, and independent replay.

Two or more `not yet` marks in one section suggest completing its repair before relying on that section’s later chapters. Mixed `partial` marks usually permit parallel study. Re-run the diagnostic after duality and sensitivity, and again before the nonconvex global continuation; record improvements in reasoning, not merely remembered answers.

