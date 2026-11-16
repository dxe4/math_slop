
# References, Reading Routes, and Attribution Guide

This technical-review bibliography records intellectual routes. Bibliographic identity and the stated topic fit of the entries below were checked against author, publisher, journal, or institutional records in a bounded AI source audit. The audit does not establish exhaustive theorem-level attribution, historical priority, originality, license clearance, or qualified human review. No source below is implied to endorse Math Atlas, and inclusion does not imply that its text or exercises were copied.

## Linear algebra, matrix analysis, and numerical foundations

- Gilbert Strang. *Linear Algebra and Its Applications*. 4th ed., Cengage, 2006. [Author's book page](https://math.mit.edu/~gs/books/books.html). A geometric route through linear maps, least squares, eigenvalues, and matrix computation.
- Gilbert Strang. *Introduction to Linear Algebra*. 6th ed., Wellesley-Cambridge Press, 2023. [Author's sixth-edition page](https://math.mit.edu/~gs/linearalgebra/). A second geometric route with current treatments of singular values and optimization.
- Gene H. Golub and Charles F. Van Loan. *Matrix Computations*. 4th ed., Johns Hopkins University Press, 2013. [Publisher DOI](https://doi.org/10.56021/9781421407944). A deeper reference for factorizations, least squares, conditioning, and numerical algorithms.
- Lloyd N. Trefethen and David Bau III. *Numerical Linear Algebra*. SIAM, 1997. [Publisher DOI](https://doi.org/10.1137/1.9780898719574). A concise conceptual route through QR, SVD, conditioning, and stable computation.
- Nicholas J. Higham. *Accuracy and Stability of Numerical Algorithms*. 2nd ed., SIAM, 2002. [Publisher DOI](https://doi.org/10.1137/1.9780898718027). A reference for floating arithmetic, conditioning, backward error, and stable formula design.
- Roger A. Horn and Charles R. Johnson. *Matrix Analysis*. 2nd ed., Cambridge University Press, 2012 print edition. [Publisher DOI](https://doi.org/10.1017/CBO9781139020411). A comprehensive matrix-theoretic reference for spectral and norm results used at the edge of this volume.

The Math Atlas companion *Linear Algebra: Structure and Proof* is the internal route when a reader needs full proofs of vector-space, spectral, projection, and factorization results rather than the application-focused summaries here.

## Convex analysis and optimization

- Stephen Boyd and Lieven Vandenberghe. *Convex Optimization*. Cambridge University Press, 2004. [Authors' book page](https://web.stanford.edu/~boyd/cvxbook/). A broad route through convex sets and functions, duality, optimality conditions, and algorithms.
- R. Tyrrell Rockafellar. *Convex Analysis*. Princeton University Press, 1970; paperback reissue 1997. [Publisher page](https://press.princeton.edu/books/paperback/9780691015866/convex-analysis). A foundational reference for conjugacy, subgradients, duality, and convex structure.
- Yurii Nesterov. *Introductory Lectures on Convex Optimization: A Basic Course*. Kluwer, 2004. [Publisher DOI](https://doi.org/10.1007/978-1-4419-8853-9). A route through first-order methods and complexity analysis.
- Dimitri P. Bertsekas. *Nonlinear Programming*. 3rd ed., Athena Scientific, 2016. [Author's book page](https://faculty.engineering.asu.edu/bertsekas/books/). A reference spanning constrained optimality and numerical methods.
- Amir Beck. *First-Order Methods in Optimization*. SIAM/MOS, 2017. [Publisher DOI](https://doi.org/10.1137/1.9781611974997). A modern route through gradient, proximal, projected, and accelerated methods.
- Neal Parikh and Stephen Boyd. “Proximal Algorithms.” *Foundations and Trends in Optimization* 1(3):127–239, 2014. [Publisher DOI](https://doi.org/10.1561/2400000003). A focused route through proximal maps, splitting, and operator viewpoints.
- Bernhard Schölkopf, Ralf Herbrich, and Alexander J. Smola. “A Generalized Representer Theorem.” *Computational Learning Theory*, LNCS 2111, 416–426, Springer, 2001. [Publisher DOI](https://doi.org/10.1007/3-540-44581-1_27). Theorem 1 supplies a general source for the representer result used in the RKHS section.

The chapter develops its elementary finite-dimensional arguments and explicitly marks imported theorem boundaries. These sources supply fuller proofs and alternative conventions, especially for Lagrangians, dual objectives, representer results, and proximal scaling.

## Probability, statistics, and learning theory

- David Williams. *Probability with Martingales*. Cambridge University Press, 1991. [Publisher DOI](https://doi.org/10.1017/CBO9780511813658). A rigorous route to conditional expectation and adapted stochastic processes.
- Larry Wasserman. *All of Statistics: A Concise Course in Statistical Inference*. Springer, 2004. [Publisher DOI](https://doi.org/10.1007/978-0-387-21736-9). A compact statistical route useful for distinguishing estimation and prediction claims from optimization claims.
- Trevor Hastie, Robert Tibshirani, and Jerome Friedman. *The Elements of Statistical Learning: Data Mining, Inference, and Prediction*. 2nd ed., Springer, 2009; corrected 12th printing, 2017. [Author's book page](https://hastie.su.domains/ElemStatLearn/). A broad statistical-learning reference connecting models, regularization, and evaluation.
- Shai Shalev-Shwartz and Shai Ben-David. *Understanding Machine Learning: From Theory to Algorithms*. Cambridge University Press, 2014. [Publisher DOI](https://doi.org/10.1017/CBO9781107298019). A route to generalization, empirical risk minimization, and learning-theoretic guarantees.
- Martin Anthony and Peter L. Bartlett. *Neural Network Learning: Theoretical Foundations*. Cambridge University Press, 1999. [Publisher DOI](https://doi.org/10.1017/CBO9780511624216). A deeper learning-theory route for capacity questions outside this volume's scope.

The probability, statistical inference, and statistical-learning Math Atlas volumes should be used for theorem-complete internal routes. An expectation identity in this book is not intended to replace a treatment of sampling, convergence, uncertainty, or generalization.

## Automatic differentiation and differentiable programming

- Andreas Griewank and Andrea Walther. *Evaluating Derivatives: Principles and Techniques of Algorithmic Differentiation*. 2nd ed., SIAM, 2008. [Publisher DOI](https://doi.org/10.1137/1.9780898717761). A comprehensive reference for forward and reverse accumulation, implementation choices, and higher derivatives.
- Barak A. Pearlmutter. “Fast Exact Multiplication by the Hessian.” *Neural Computation* 6(1):147–160, 1994. [Publisher DOI](https://doi.org/10.1162/neco.1994.6.1.147). The paper derives an exact, efficient Hessian-vector-product procedure.
- Atilim Gunes Baydin, Barak A. Pearlmutter, Alexey Andreyevich Radul, and Jeffrey Mark Siskind. “Automatic Differentiation in Machine Learning: a Survey.” *Journal of Machine Learning Research* 18(153):1–43, 2018. [Journal page](https://jmlr.org/papers/v18/17-468.html). A broad orientation to AD modes and machine-learning uses.

Terms such as “backpropagation” and “reverse accumulation” have histories spanning control, sensitivity analysis, numerical analysis, and neural computation. A responsible history is distributed rather than a single-inventor story. The release citation audit must distinguish priority claims, rediscoveries, naming conventions, and modern software practice.

## Neural networks and deep learning

- Ian Goodfellow, Yoshua Bengio, and Aaron Courville. *Deep Learning*. MIT Press, 2016. [Publisher page](https://mitpress.mit.edu/9780262035613/deep-learning/). A broad reference for networks, optimization, regularization, and architectures.
- Simon Haykin. *Neural Networks and Learning Machines*. 3rd ed., Pearson, 2009. [Publisher page](https://www.pearson.com/en-us/subject-catalog/p/neural-networks-and-learningmachines/P200000003278). A wider historical and signal-processing perspective.
- Christopher M. Bishop. *Pattern Recognition and Machine Learning*. Springer, 2006. [Publisher page](https://link.springer.com/book/9780387310732). A probabilistic route through regression, classification, kernels, and latent-variable models.
- Kevin P. Murphy. *Machine Learning: A Probabilistic Perspective*. MIT Press, 2012. [Publisher page](https://mitpress.mit.edu/9780262018029/machine-learning/). A broad connection between probabilistic modeling and machine-learning algorithms.
- Kevin P. Murphy. *Probabilistic Machine Learning: An Introduction*. MIT Press, 2022. [Author's book page](https://probml.github.io/pml-book/book1.html). An introductory modern route through probabilistic machine learning.
- Kevin P. Murphy. *Probabilistic Machine Learning: Advanced Topics*. MIT Press, 2023. [Author's book page](https://probml.github.io/pml-book/book2.html). An advanced continuation covering latent-variable, deep generative, and sequential models.
- Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun. “Delving Deep into Rectifiers: Surpassing Human-Level Performance on ImageNet Classification.” *ICCV*, 1026–1034, 2015. [Publisher DOI](https://doi.org/10.1109/ICCV.2015.123). Section 2.2 derives the rectifier-aware initialization cited in the initialization chapter.
- Tsung-Yi Lin, Priya Goyal, Ross Girshick, Kaiming He, and Piotr Dollár. “Focal Loss for Dense Object Detection.” *ICCV*, 2980–2988, 2017. [Publisher DOI](https://doi.org/10.1109/ICCV.2017.324). Section 3 defines the focal modulation used in the loss chapter.
- Nontawat Charoenphakdee, Jayakorn Vongkulbhisal, Nuttapong Chairatanakul, and Masashi Sugiyama. “On Focal Loss for Class-Posterior Probability Estimation: A Theoretical Perspective.” *CVPR*, 5202–5211, 2021. [Publisher DOI](https://doi.org/10.1109/CVPR46437.2021.00516). This supports the stated boundary between focal optimization and estimation of the original posterior.

Architectural practices evolve faster than the mathematical core. This volume deliberately derives a small set of mechanisms and audits their assumptions instead of presenting a chronology of currently popular systems.

## Reproducible computation and evidence

- David L. Donoho, Arian Maleki, Inam Ur Rahman, Morteza Shahram, and Victoria Stodden. “Reproducible Research in Computational Harmonic Analysis.” *Computing in Science & Engineering* 11(1):8–18, 2009. [Publisher DOI](https://doi.org/10.1109/MCSE.2009.15). This supports executable research compendia and the distinction between a reported result and the code, data, and process needed to regenerate it.
- Victoria Stodden. “Enabling Reproducible Research: Licensing for Scientific Innovation.” *International Journal of Communications Law and Policy* 13:22–48, Winter 2009. [Author-hosted article](https://stodden.net/papers/ijclp-STODDEN-2009.pdf). This supplies the legal and licensing part of the reproducibility route.
- Randall J. LeVeque, Ian M. Mitchell, and Victoria Stodden. “Reproducible Research for Scientific Computing: Tools and Strategies for Changing the Culture.” *Computing in Science & Engineering* 14(4):13–17, 2012. [Publisher DOI](https://doi.org/10.1109/MCSE.2012.38). This supports computational tools, disclosure practices, obstacles, policy, and cultural change.
- Victoria Stodden, Marcia McNutt, David H. Bailey, Ewa Deelman, Yolanda Gil, Brooks Hanson, Michael A. Heroux, John P. A. Ioannidis, and Michela Taufer. “Enhancing Reproducibility for Computational Methods.” *Science* 354(6317):1240–1241, 2016. [Publisher DOI](https://doi.org/10.1126/science.aah6168). This gives concrete disclosure and citation principles for data, code, and workflows.
- National Academies of Sciences, Engineering, and Medicine. *Reproducibility and Replicability in Science*. National Academies Press, 2019. [Publisher DOI](https://doi.org/10.17226/25303). This supplies cross-disciplinary terminology and recommendations.

The internal pipeline chapter treats provenance, immutable splits, preprocessing state, random streams, environment records, tests, and typed failures as parts of a mathematical experiment record.

## Attribution policy for the finished edition

The final bibliography should satisfy six checks.

1. **Claim proximity:** a historical, priority, or borrowed-definition claim cites the relevant source near the claim.
2. **Primary-source distinction:** when priority matters, a survey is not silently used as if it were the original record.
3. **Edition precision:** theorem or page references name the edition actually consulted.
4. **Status precision:** an informal note, preprint, peer-reviewed paper, textbook, and software documentation are not presented as the same evidence type.
5. **License separation:** a mathematical fact may be restated, while copied prose, diagrams, data, and code obey their licenses and attribution terms.
6. **Historical restraint:** eponymous names are search handles, not complete accounts of discovery or contribution.

The bibliographic identities and stated topic fit above were checked in the bounded source audit recorded for this technical-review edition. Theorem-by-theorem provenance, disputed historical priority, originality, copyright and license clearance, qualified human review, and final release approval remain separate gates. This guide does not certify them.
