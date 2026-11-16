var e=`---
parent_id: book-statistical-learning-generalization
matter_id: references
title: "References and Further Reading"
license: CC BY-SA 4.0
---

# References and Further Reading {#section-1-references-and-further-reading}

This bibliography identifies standard comparison texts, historical sources, and current research directions. The book is written under CC BY-SA 4.0; standard definitions and learning-theoretic conventions belong to shared practice. References are included for further reading, historical context, alternative treatments, and broader coverage.

A named result or study is a retrieval convention, not a complete history. Statistical learning ideas are often the product of long development across statistics, computer science, and optimization; a modern statement may differ sharply from an early source.

<a id="section-5-foundational-texts"></a>
## Foundational texts {#section-7-foundational-texts}

- Vapnik, V. N. (1998). *Statistical Learning Theory*. Wiley. A comprehensive treatment of VC dimension, uniform convergence, and structural risk minimization. The notation and proof style differ from modern presentations.
- Vapnik, V. N. (2000). *The Nature of Statistical Learning Theory* (2nd ed.). Springer. A shorter, more accessible companion to the 1998 volume with emphasis on the philosophical motivation for the learning framework.
- Mohri, M., Rostamizadeh, A., & Talwalkar, A. (2018). *Foundations of Machine Learning* (2nd ed.). MIT Press. A modern graduate text covering Rademacher complexity, stability, online learning, and support vector machines with full proofs and careful hypotheses.
- Shalev-Shwartz, S., & Ben-David, S. (2014). *Understanding Machine Learning: From Theory to Algorithms*. Cambridge University Press. A broad first-course treatment with extensive algorithmic content, PAC learning, VC theory, and regularization.

These texts use different notational conventions and proof styles. Comparison is most useful when those conventions are recorded rather than blended.

<a id="section-14-concentration-empirical-processes-and-nonparametric-sta"></a>
## Concentration, empirical processes, and nonparametric statistics {#section-16-concentration-empirical-processes-and-nonparametric-sta}

- Boucheron, S., Lugosi, G., & Massart, P. (2013). *Concentration Inequalities: A Nonasymptotic Theory of Independence*. Oxford University Press. The standard reference for Hoeffding, Bernstein, McDiarmid, and Talagrand inequalities with applications to learning.
- Devroye, L., Gyorfi, L., & Lugosi, G. (1996). *A Probabilistic Theory of Pattern Recognition*. Springer. A rigorous treatment of classification with extensive coverage of VC theory, metric entropy, and nearest-neighbor methods.
- van der Vaart, A. W., & Wellner, J. A. (1996). *Weak Convergence and Empirical Processes: With Applications to Statistics*. Springer. A detailed reference for empirical process theory, Glivenko–Cantelli classes, and Donsker theorems.

<a id="section-20-stability-regularization-and-optimization"></a>
## Stability, regularization, and optimization {#section-22-stability-regularization-and-optimization}

- Bousquet, O., & Elisseeff, A. (2002). "Stability and generalization." *Journal of Machine Learning Research*, 2, 499--526. The paper that established uniform stability as a generalization tool for regularized empirical risk minimization.
- Hastie, T., Tibshirani, R., & Friedman, J. (2009). *The Elements of Statistical Learning* (2nd ed.). Springer. A practical companion with extensive treatment of regularization, cross-validation, and model selection.
- Boyd, S., & Vandenberghe, L. (2004). *Convex Optimization*. Cambridge University Press. The standard reference for convex optimization, Lagrangian duality, and interior-point methods.

<a id="section-26-online-learning-and-sequential-prediction"></a>
## Online learning and sequential prediction {#section-28-online-learning-and-sequential-prediction}

- Cesa-Bianchi, N., & Lugosi, G. (2006). *Prediction, Learning, and Games*. Cambridge University Press. A comprehensive treatment of online learning, regret minimization, prediction with expert advice, and game-theoretic learning.
- Littlestone, N., & Warmuth, M. K. (1994). "The weighted majority algorithm." *Information and Computation*, 108(2), 212--261. A foundational paper on exponential weights and expert advice.

<a id="section-31-distribution-shift-robustness-and-fairness"></a>
## Distribution shift, robustness, and fairness {#section-33-distribution-shift-robustness-and-fairness}

- Ben-David, S., Blitzer, J., Crammer, K., Kulesza, A., Pereira, F., & Wortman Vaughan, J. (2010). "A theory of learning from different domains." *Machine Learning*, 79, 151--175. A PAC-style treatment of domain adaptation with divergence measures between source and target distributions.
- Hardt, M., Price, E., & Srebro, N. (2016). "Equality of opportunity in supervised learning." *Advances in Neural Information Processing Systems*, 29. A widely cited treatment of group error-rate criteria and post-processing tradeoffs.
- Barocas, S., Hardt, M., & Narayanan, A. (2023). *Fairness and Machine Learning: Limitations and Opportunities*. MIT Press; open-access edition at fairmlbook.org. A text on fairness criteria, calibration, and subgroup performance with extensive references.

<a id="section-37-historical-attribution-checklist"></a>
## Historical attribution checklist {#section-39-historical-attribution-checklist}

Every historical or priority claim should record:

1. a classification as contemporary exposition, secondary history, translated primary source, or primary source;
2. verified author, title, edition, publisher or archive, and stable locator;
3. a note explaining whether the citation supports provenance, formulation, evidence, example, or broader context;
4. a check that modern terminology is not projected unchanged backward;
5. careful comparison of primary sources for culturally broad claims and disputed priority.

<a id="section-47-reading-route-recommendations"></a>
## Reading-route recommendations {#section-49-reading-route-recommendations}

For a deeper treatment of concentration inequalities and empirical processes, proceed to Boucheron, Lugosi, and Massart or van der Vaart and Wellner. For algorithmic learning theory, Shalev-Shwartz and Ben-David provide extensive algorithmic content. For online learning and sequential prediction, Cesa-Bianchi and Lugosi is the natural next step. For distribution shift and robustness, Ben-David et al. and the DRO literature extend the basic framework. For fairness and calibration, Barocas, Hardt, and Narayanan provide a thorough modern treatment.

<a id="section-51-citation-policy-for-contributors"></a>
## Citation policy for contributors {#section-53-citation-policy-for-contributors}

Paraphrase sources and cite the job they perform. Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard. Direct quotations require exact locators and license or fair-use review. When sources disagree, record the disagreement. When provenance is unknown, label it unknown rather than inventing a clean lineage.
`;export{e as default};