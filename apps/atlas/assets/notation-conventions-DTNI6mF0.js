var e=`---
parent_id: book-probability-theory-measure-martingales
matter_id: notation-conventions
title: "Notation and Conventions"
license: CC BY-SA 4.0
---

# Notation and Conventions

A probability space is written $(\\Omega,\\mathcal F,P)$. Equalities between conditional expectations are almost-sure equalities of versions. A filtration is increasing, and adaptedness is always relative to its stated filtration. Stopped sigma-algebras have their ordinary event-intersection definition; discrete and continuous stopping arguments are distinguished.

The symbol $\\Rightarrow$ denotes weak convergence of laws against bounded continuous tests. Convergence in probability, almost-sure convergence and convergence in an Lp norm are separate statements. Uniform integrability concerns absolute tails, not merely a bound on first moments. A family of laws is tight when one compact set captures all but an arbitrary small mass uniformly over the family.

Characteristic functions use $E\\exp(itX)$. Logarithmic moment-generating functions use $\\log E\\exp(\\theta X)$ on their actual finiteness domain. All logarithms in the large-deviation chapter are natural, including those in its relative entropy. Infinite rates and logarithms of zero use extended-real conventions as stated there.

A kernel acts on functions by integration and on measures by pushforward integration. Total variation between probabilities is $\\sup_A|\\mu(A)-\\nu(A)|$, so its largest value is one. Some references double this convention. A global minorization constant is always strictly positive; local or small-set assumptions are not substituted for it.

Standard Borel spaces are measurably isomorphic to Borel subsets of a Polish space, and the real-line encoding theorem used in Chapter 2 is explicitly imported. Polish spaces are separable and completely metrizable. The Prokhorov theorem proved in Chapter 8 uses both properties. Brownian path laws live on continuous-function spaces with uniform convergence on compact intervals, rather than on an unspecified larger path sigma-algebra.
`;export{e as default};