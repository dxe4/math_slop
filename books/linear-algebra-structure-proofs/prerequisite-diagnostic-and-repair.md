
# Prerequisite Diagnostic and Repair Routes

Required preparation is [Lucent Linear Algebra, Chapters 1–16](#/books/lucent-linear-algebra/course-guide), or equivalent university linear algebra, together with elementary proof. The diagnostic locates gaps within that preparation; it does not replace the full route. [Linear Algebra Before the Machinery](#/articles/linear-algebra-first-encounter) is optional geometric reading.

Attempt these without notes. The aim is to locate a repair, not to assign a label.

## Diagnostic

1. Negate: “for every $v$ there exists $a$ such that $P(v,a)$.”
2. Prove $A \subseteq B$ and $B \subseteq A$ imply $A=B$.
3. Solve $x+y=2$, $2x+2y=4$, and describe every solution.
4. Multiply a $2\times 3$ matrix by a $3\times 1$ column and explain the output type.
5. Explain why composition order reverses in matrix multiplication.
6. Decide whether $\{(x,y,z):x+y=1\}$ is a subspace.
7. Decide whether $(1,0),(1,1)$ spans $\mathbb{R}^2$ and whether it is independent.
8. State the difference between injective and surjective.
9. Compute kernel and image of $(x,y)\to (x+y,0)$.
10. Give a real $2\times 2$ matrix with no real eigenvalue.
11. Factor $t^3-t$ and state over which familiar fields the factorization is valid.
12. Prove by induction that $1+\ldots+n=n(n+1)/2$.
13. Explain the difference between exact zero and a floating result $10^{-12}$.
14. State what extra structure is needed before “perpendicular” has meaning.
15. Distinguish a theorem from its converse with an example.
16. Find the determinant and eigenvalues of $\begin{pmatrix}2 & 1 \\ 0 & 3\end{pmatrix}$.

## Answers and diagnosis

1. “There exists $v$ such that for every $a$, not $P(v,a)$.” If quantifier order moved incorrectly, repair logic and proof language.
2. For any $x$, membership in either set implies membership in the other; extensionality gives equality. If the arbitrary element is missing, practice elementwise set proofs.
3. The equations are dependent; all solutions are $(x,y)=(t,2-t)$. If only one solution appeared, review free variables and geometric solution sets.
4. The result is a $2\times 1$ column. Each output is a row–column combination. If dimensions were guessed, practice typed composition.
5. $ABx=A(Bx)$: the right factor acts first. This is essential throughout Chapters 5–7.
6. No: it excludes zero. It is affine. Repair homogeneous versus inhomogeneous constraints.
7. Yes to both: the determinant is one, or solve the coefficient relation. Review span versus independence if these were conflated.
8. Injective means equal outputs force equal inputs; surjective means every codomain element is reached.
9. Kernel is $\operatorname{span}((1,-1))$; image is $\operatorname{span}((1,0))$.
10. $\begin{pmatrix}0 & -1 \\ 1 & 0\end{pmatrix}$ has characteristic polynomial $t^2+1$.
11. $t(t-1)(t+1)$ over every field, though factors can coincide in characteristic two. If the characteristic caveat is surprising, begin with Chapter 1’s field audit.
12. Add $n+1$ to the inductive formula and factor $(n+1)(n+2)/2$. Repair base case, hypothesis, and successor step separately.
13. Exact zero is an algebraic predicate; a small computed value is norm-, scale-, data-, and error-model dependent.
14. An inner product (or another declared orthogonality structure). Bare vector spaces have no angle.
15. “Invertible implies injective” has converse for square finite-dimensional linear maps, but not for arbitrary functions between different sets. Always audit the domain.
16. Determinant six; eigenvalues two and three because the matrix is triangular.

## Repair routes

- Missed 1, 2, 12, or 15: use `logic-proofs`, `mathematical-language`, and induction material before Chapter 2.
- Missed 3, 4, 5, 9, or 16: repair the relevant material in [Lucent Linear Algebra, Chapters 1–16](#/books/lucent-linear-algebra/course-guide) before using this proof/reference volume.
- Missed 6–8: begin here but budget extra retrieval work in Chapters 1–5.
- Missed 10 or 11: continue, but read every field-boundary box and work the positive-characteristic exercises.
- Missed 13: pair this book with the numerical linear-algebra volume; do not interpret exact theorems as tolerances.
- Missed 14: read Chapters 17–19 as a new structure, not as notation for earlier results.

A score is less informative than the pattern. Repair one dependency, retake only its questions, then begin the linked chapter.
