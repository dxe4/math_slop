
# Reader Guide

This L4 course connects kernel geometry to probability models for functions. Required preparation is [Gaussian vectors](../probability-models-proofs/gaussian-vectors-and-multivariate-normal.md), [Linear Algebra](#/books/linear-algebra-structure-proofs), and comfort with finite probability, calculus and inner products. The Mercer section explicitly names its stronger compact-operator, integration and equicontinuity inputs; later probability constructions link the extension and continuity theorems where used.

Chapters 1–5 develop function uncertainty, valid kernels, RKHS construction, representers, ridge and support-vector classification. Chapters 6–10 construct Gaussian coordinate laws and derive conditioning, logistic classification approximations, hyperparameter objectives and numerical sensitivity. Chapters 11–14 develop inducing methods, random features, distribution embeddings and integrated cases.

Read all fourteen chapters in order for the full course. A deterministic-learning route reads Chapters 1–5, then 10, 12 and 13. A probabilistic-regression route reads Chapters 1–3, 6–11 and 14, using Chapter 4 to compare ridge means. A distribution-comparison route reads Chapters 2–3 and 12–14. These routes share preparation but retain different targets rather than treating every kernel output as a posterior probability.

Every chapter contains at least three worked examples and ten exercises with two hints and full solutions. The final chapter adds three supported analytical projects. Definitions, proved statements and examples use a consecutive chapter-local numbered sequence. Existing heading and exercise identities remain independent of that presentation numbering.

Kernel validity, path regularity, RKHS membership, statistical identification and numerical accuracy are separate claims. The finite Gram condition constructs covariances; an extension theorem constructs coordinate laws; a continuity argument supplies a path version; Gaussian conditioning supplies a posterior under the stated likelihood. A low-rank prior changes that law, while a variational family approximates its posterior. Matching means or moment summaries does not equate those objects.

The earlier six kernel chapters in [Structured Probabilistic Learning](#/books/structured-probabilistic-learning) remain available with their original exercise identities. Their revised destinations are listed on that retained book's map. Its graph half is developed in [Probabilistic Graphical Models](#/books/probabilistic-graphical-models), which supplies complementary inference and latent-variable material. For sampling and generalisation theory, use the linked specialised books with their own preparation.
