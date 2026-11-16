var e=`---
parent_id: book-matrix-computation-applications
matter_id: references
title: "References and Further Reading"
license: CC BY-SA 4.0
---

# References and Further Reading

This bibliography identifies standard comparison texts, historical sources, and current research directions. The book is written under CC BY-SA 4.0; standard definitions and algorithmic conventions belong to shared practice. References are included for further reading, historical context, alternative treatments, and broader coverage.

A named result or study is a retrieval convention, not a complete history. Numerical ideas are often the product of long development across institutions, software libraries, and application domains; a modern statement may differ sharply from an early source.

## Dense numerical linear algebra

- Golub, G. H., & Van Loan, C. F. (2013). *Matrix Computations* (4th ed.). Johns Hopkins University Press. ISBN 9781421407944. https://doi.org/10.56021/9781421407944. The standard reference for matrix factorizations, eigenvalue algorithms, and least-squares methods. Chapters on LU, QR, SVD, and the symmetric eigenproblem parallel the core of this book.
- Stewart, G. W. (1998). *Matrix Algorithms, Volume I: Basic Decompositions*. SIAM. ISBN 9780898714142. https://doi.org/10.1137/1.9781611971408. A careful treatment of LU, QR, and related factorizations with attention to implementation details.
- Stewart, G. W. (2001). *Matrix Algorithms, Volume II: Eigensystems*. SIAM. ISBN 9780898715033. https://doi.org/10.1137/1.9780898718058. A companion volume focusing on eigenvalue computations, perturbation theory, and the QR algorithm.
- Higham, N. J. (2002). *Accuracy and Stability of Numerical Algorithms* (2nd ed.). SIAM. ISBN 9780898715217. https://doi.org/10.1137/1.9780898718027. The definitive reference for rounding-error analysis, condition numbers, and backward stability of matrix algorithms.

These texts use different notational conventions and proof styles. Comparison is most useful when those conventions are recorded rather than blended.

## Iterative methods and preconditioning

- Saad, Y. (2003). *Iterative Methods for Sparse Linear Systems* (2nd ed.). SIAM. ISBN 9780898715347. https://doi.org/10.1137/1.9780898718003. A comprehensive treatment of Krylov subspace methods, preconditioning techniques, and sparse matrix formats.
- Greenbaum, A. (1997). *Iterative Methods for Solving Linear Systems*. SIAM. ISBN 9780898713961. https://doi.org/10.1137/1.9781611970937. A focused introduction to CG, GMRES, and related methods with convergence analysis.
- Trefethen, L. N., & Embree, M. (2005). *Spectra and Pseudospectra: The Behavior of Nonnormal Matrices and Operators*. Princeton University Press. ISBN 9780691119465. The definitive treatment of pseudospectra, nonnormality, and transient behavior.

## Matrix functions and structured matrices

- Higham, N. J. (2008). *Functions of Matrices: Theory and Computation*. SIAM. ISBN 9780898716467. https://doi.org/10.1137/1.9780898717778. A systematic treatment of matrix functions, the matrix exponential, and condition estimation.
- Demmel, J. W. (1997). *Applied Numerical Linear Algebra*. SIAM. ISBN 9780898713893. https://doi.org/10.1137/1.9781611971446. A course-oriented text connecting theory to practice, with material on parallel algorithms and performance modeling.

## Randomized and large-scale methods

- Halko, N., Martinsson, P. G., & Tropp, J. A. (2011). "Finding structure with randomness: Probabilistic algorithms for constructing approximate matrix decompositions." *SIAM Review*, 53(2), 217--288. https://doi.org/10.1137/090771806. The foundational survey of randomized range finding and randomized SVD.
- Woodruff, D. P. (2014). "Sketching as a tool for numerical linear algebra." *Foundations and Trends in Theoretical Computer Science*, 10(1--2), 1--157. https://doi.org/10.1561/0400000060. A comprehensive treatment of sketching methods for least squares, regression, and low-rank approximation.

## Tensor decompositions

- Kolda, T. G., & Bader, B. W. (2009). "Tensor decompositions and applications." *SIAM Review*, 51(3), 455--500. https://doi.org/10.1137/07070111X. A widely cited survey of CP, Tucker, and related decompositions with applications.

## Mixed-precision and verified computing

- Higham, N. J., & Mary, T. (2019). "A new approach to probabilistic rounding error analysis." *SIAM Journal on Scientific Computing*, 41(5), A2815--A2835. https://doi.org/10.1137/18M1226312. Develops probabilistic rounding-error assumptions and bounds, with motivating discussion of low-precision computation.
- Rump, S. M. (2010). "Verification methods: Rigorous results using floating-point arithmetic." *Acta Numerica*, 19, 287--449. https://doi.org/10.1017/S096249291000005X. A survey of interval arithmetic and verified linear algebra solvers.

## Historical attribution checklist

Every historical or priority claim should record:

1. a classification as contemporary exposition, secondary history, translated primary source, or primary source;
2. verified author, title, edition, publisher or archive, and stable locator;
3. a note explaining whether the citation supports provenance, formulation, evidence, example, or broader context;
4. a check that modern terminology is not projected unchanged backward;
5. independent review of culturally broad claims and disputed priority.

## Reading-route recommendations

For a deeper treatment of dense factorizations and eigenvalue algorithms, proceed to Golub and Van Loan or Stewart's two volumes. For iterative methods and preconditioning, Saad provides the most comprehensive coverage. For nonnormality and pseudospectra, Trefethen and Embree is the natural next step. For matrix functions, Higham (2008) is the standard reference. For randomized algorithms, the survey by Halko, Martinsson, and Tropp is the natural continuation. For verified computing, Rump's survey provides the theoretical and practical foundations.

## Citation policy for contributors

Paraphrase sources and cite the job they perform. Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard. Direct quotations require exact locators and license or fair-use review. When sources disagree, record the disagreement. When provenance is unknown, label it unknown rather than inventing a clean lineage.
`;export{e as default};