# Linear algebra: a course in structure, geometry, and models

Linear algebra studies what happens when quantities combine by addition and scaling. The same operation can mix colors, turn a coordinate grid, fit a straight line to measurements, evolve a population, or differentiate a polynomial. This course develops the ideas connecting those examples. You will learn to calculate, explain why calculations work, and identify when a plausible method is inappropriate.

This is a written university first course with executable diagrams. Reading, proof, computation, and independent practice carry the argument. The diagrams give you another way to ask a question: change an input, watch what survives, and then explain the observation using a definition or theorem. A convincing picture is a reason to investigate; a proof establishes the claim for all cases covered by its assumptions.

## Preparation and how to study

You need arithmetic with fractions, elementary algebra, graphs of lines, and enough confidence to rearrange an equation. The refresher course supplies these foundations and introduces mathematical implication and counterexamples. The integral-functional exercise in chapter 8 has a short point-of-use preparation box on continuous integrals, linearity, constants and odd cancellation; it does not require an entire integration course at entry. Most algebraic sections in chapters 1–19 use no calculus. The spectral-theorem proof in chapter 16, the continuous-time examples in chapter 15, and the heat ODE exercise in chapter 19 use elementary differentiation. Chapter 20 uses derivatives and the exponential function and can be taken after the calculus chapters on differential equations. Complex arithmetic is introduced when it is needed in chapter 15.

Treat a chapter as two or three study sessions. First read the opening explanation and reproduce one worked example without looking. Next do each visual investigation, including its written prediction. Finally attempt the exercises with the solutions closed. The labels **foundation**, **core**, and **stretch** indicate the kind of preparation expected; they are not numerical grades or automated judgements.

For every incorrect answer, record the first unsupported step, the correction, and one new example on which the corrected method works. Reattempt a problem after a day and again after a week. Read a solution only after you can say precisely where your own attempt stopped. If the algebra is correct but the explanation is vague, complete the explanation before moving on.

The intended workload is roughly 140–180 hours, depending on your starting point: about 40 hours reading and reproducing examples, 60–80 hours on exercises, 20 hours on visual investigations and coding, and 20–40 hours on assessment and revision. These are planning estimates for this course, not measured completion times. A motivated learner can stretch the sequence over a longer period without changing its order.

**Selected undergraduate core.** Read the main lessons in chapters 1–20 and complete their Foundation and Core exercises. Complete both [checkpoints and the cumulative examination](assessments.md), then use [Chapter 20's complete synthetic calibration and validation reference](dynamics-capstone.md#a-complete-synthetic-validation-reference) as the sole required core synthesis. Its public data, generator, exact and numerical checks, sensitivity calculation, failure case and 100-point rubric supply the complete reference. Stretch exercises, explicitly optional clinics, return-task companions, and assessment-studio Investigations A and B are optional extensions for this selected core.

Reserve 8–12 hours for the Chapter 20 synthesis within the existing 20–40 hours for assessment and revision. The two 75–90-minute checkpoints and the 120–150-minute examination take 4.5–5.5 hours for first attempts, also inside that allowance; use the remaining time for marking, correction and delayed returns. Optional Investigations A and B add no required work to this selection. The complete core remains a 140–180-hour planning estimate, not a measured workload or a qualification.

## A fifteen-week route

| Week | Chapters | Evidence of understanding |
| --- | --- | --- |
| 1 | 1: Vectors and combinations; 2: Systems and row reduction | Explain a solution as both a point and a linear combination. |
| 2 | 3: Matrices and composition; 4: Inverses and LU | Check dimensions and solve several right-hand sides using a factorization. |
| 3 | 5: Subspaces and four spaces | Find bases for all four spaces of a rectangular matrix. |
| 4 | 6: Bases and dimension; 7: Coordinate changes | Distinguish changing a vector from changing its description. |
| 5 | 8: General linear maps; first checkpoint | Give a proof in a polynomial space as well as a numerical example. |
| 6 | 9: Determinants; 10: Orthogonality | Connect signed volume to rank and projection to perpendicular error. |
| 7 | 11: Least squares and conditioning | Fit data and distinguish approximation error from sensitivity. |
| 8 | 12: Gram–Schmidt and QR; second checkpoint | Derive a thin QR factorization and solve a least-squares problem. |
| 9 | 13: Eigenvalues; 14: Diagonalization | Decide whether an eigenbasis exists before using one. |
| 10 | 15: Complex eigenvalues; 16: Symmetric matrices | Explain rotations and prove why symmetry gives orthogonal eigenspaces. |
| 11 | 17: Singular values and pseudoinverse | Interpret a rectangular map through orthogonal input and output directions. |
| 12 | 18: PCA and low-rank models | Centre data, identify a principal direction, and quantify information discarded. |
| 13 | 19: Networks and Markov chains | Identify a modeling convention and check convergence assumptions. |
| 14 | 20: Linear differential systems and capstone | Compare exact predictions with numerical simulation. |
| 15 | Assessment studio and revision | Complete the cumulative examination and revise the Chapter 20 synthesis; Investigations A and B are optional. |

For a twelve-week term, pair weeks 3–4, 7–8, and 13–14. For a gentler self-study route, give each substantive chapter one week and allow two extra weeks for assessments.

## The mathematical contract

Unless stated otherwise, scalars are real numbers, vectors are columns, and matrices act on the left. A matrix with m rows and n columns maps Rⁿ to Rᵐ. We write a small matrix as `[1 2; 3 4]`, where semicolons separate rows. Aᵀ is the transpose, I is an identity matrix of the appropriate size, and ‖x‖ is the Euclidean norm when no other norm is specified. A complex inner product uses conjugation; chapter 15 makes that change explicit.

A linear map must preserve both addition and scalar multiplication. A translation can preserve the shape of a grid while failing linearity because it moves zero. An eigenvector must be nonzero. An inverse exists only for a square matrix of full rank. Least-squares solutions always exist in finite-dimensional Euclidean space, but their coefficient vectors need not be unique. Learning to retain such hypotheses is one of the main goals of the course.

Most displayed geometry lives in two dimensions so that directions, lengths, and intersections are directly visible. Proofs and written problems extend to three, four, and arbitrary finite dimensions. A picture of two independent arrows does not establish a theorem about every list of vectors. Conversely, a four-dimensional vector is no less concrete than a two-dimensional one: it is an ordered list on which the same algebra operates.

## Your first editable experiment: two knobs, one output

Let u=(1,1) and v=(1,−1). The coefficients a and b produce au+bv=(a+b,a−b). The teal and amber arrows are the two scaled contributions; the rose arrow is their sum.

```mathviz
scene "Build a vector from two contributions";
domain -5 5;
range -5 5;
coordinates equal;
param a = 1 from -2 to 2;
param b = 1 from -2 to 2;
vector first = (a,a) color teal;
vector second = (b,-b) color amber;
vector result = (a+b,a-b) color rose;
segment translated from (a,a) to (a+b,a-b) color amber;
```

**Predict:** which coefficients should make the output point straight upwards? **Manipulate:** test your values, then try to reach (3,1). **Explain:** solve a+b=3 and a−b=1 and relate each equation to one coordinate. **Transfer:** replace the second arrow by (2b,2b). Which target vectors become impossible to reach, and why?

For the original arrows, b=−a puts the output on the vertical axis: (0,2a). It points straight upwards exactly when a>0 as well; a=0 gives the zero vector, and a<0 points downwards. Reaching (3,1) requires a=2, b=1. For the edited arrows the output is (a+2b,a+2b), always on one line. No amount of dragging reaches (3,1). A small change in a program has exposed the distinction between a two-dimensional span and a one-dimensional span.

## Learn to code mathematical experiments

Each visual has an editable source program. Start by changing constants, then add a parameter, then change a formula. The language uses ordinary expressions with explicit multiplication: write `2*x`, not `2x`. `^` means exponentiation. Names such as `sin`, `cos`, `sqrt`, `exp`, and `ln` evaluate scalar functions. A `vector` draws an arrow from zero; a `segment` joins two points; a `parametric` statement traces a curve.

The next scene illustrates a map A=[1 k;0 1]. It shows an entire grid through `transform`, and independently computes the image of a selected vector through its coordinate formula. Seeing those agree is a useful check that your matrix entries are in the intended order.

```mathviz
scene "Write the coordinates of a shear";
domain -5 5;
range -5 5;
coordinates equal;
param k = 1 from -2 to 2;
param p = 1 from -2 to 2;
param q = 1 from -2 to 2;
transform A = (1,k,0,1);
vector input = (p,q) color amber;
vector output = (p+k*q,q) color rose;
```

**Predict:** which arrows are unchanged for every value of k? **Manipulate:** vary k for an arrow on the horizontal axis, then for an arrow above it. **Explain:** calculate A(x,y) and identify the condition for A(x,y)=(x,y). **Transfer:** edit the map to [1 0;k 1], and update the output formula before running it.

The horizontal axis is fixed by every original shear. For a particular nonzero k, equality requires y=0. The transposed shear fixes the vertical axis instead. The source is a small model you can inspect, modify, and reproduce; it is not an algebra system that has inferred the output formula for you. Later investigations introduce animated parameters, direction fields, and numerical trajectories. Numerical trajectories approximate an equation and require a step-size check.

## Assessment and learning outcomes

By the end you should be able to solve and classify linear systems; interpret rank, kernel, and image; move between bases; use projection and QR for fitting; connect eigenstructure with evolution; distinguish eigendecomposition from SVD; and communicate the assumptions behind a model. You should also be able to turn a mathematical claim into a visual experiment with a prediction, a parameter that tests that prediction, and an algebraic explanation.

The [assessment studio](assessments.md) supplies the two required checkpoints and cumulative examination. The required capstone is the [Chapter 20 synthetic calibration and validation project](dynamics-capstone.md#a-complete-synthetic-validation-reference), using its own 100-point rubric; Investigations A and B in the studio remain optional. A suggested portfolio weighting is 25% chapter exercises, 15% first checkpoint, 15% second checkpoint, 25% cumulative examination, and 20% for that Chapter 20 capstone. The chapters provide separate hints and worked solutions; attempting work before opening these public models is a voluntary self-study convention. These materials support self-assessment or optional reader marking. They do not award a credential or independently verify mastery.

## Sources and scope

The subject coverage was checked against the official [MIT 18.06SC syllabus](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/syllabus/) and its [resource index](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/). Our chapters 1–8 correspond broadly to systems and fundamental spaces, chapters 9–15 to geometry and eigenstructure, and chapters 16–20 to spectral methods and applications. This is an original sequence with original explanations and exercises, not an MIT course or an institutional endorsement. We include introductory pseudoinverses, PCA, networks, and dynamics; a full treatment of Jordan form, numerical eigensolvers, Fourier analysis, and infinite-dimensional spectral theory belongs to a later course.

The visual emphasis also takes inspiration from Grant Sanderson’s [explanation of span](https://www.3blue1brown.com/lessons/span/) and [explanation of eigenvectors](https://www.3blue1brown.com/lessons/eigenvalues/). Here the learner additionally controls the examples, edits their programs, and completes a sustained written sequence of proofs and problems. Those references provide complementary presentations, not prerequisites or substitutes for the work in this course.

## Where next

For a proof-focused continuation, use [Finite-Dimensional Linear Algebra: Structure and Proof](#/books/linear-algebra-structure-proofs), stable book ID `book-linear-algebra-structure-proofs`. Begin after the computational and geometric core through Chapter 16 and the linked proof preparation in that book; its more abstract tail names further preparation at the point of use.

For algorithms, conditioning and finite-precision methods, use [Matrix Computation in Practice: Structure, Error, and Scale](#/books/matrix-computation-applications), stable book ID `book-matrix-computation-applications`. The least-squares, QR, eigenvalue and SVD chapters here provide its first-course matrix preparation. Exact algebraic identities and numerically stable implementations answer related questions with different error contracts.

The [Inference from linear data](inference-linear-data.md) unit collects the four optional clinics from Chapters 17–20 and adds connecting worked examples and exercises. It is an optional continuation rather than an additional requirement of the selected core or the Chapter 20 calibration dossier. The original chapter locations remain available for earlier reading links and saved work.
