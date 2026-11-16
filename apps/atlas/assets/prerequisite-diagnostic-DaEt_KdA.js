var e=`---
parent_id: book-probability-theory-measure-martingales
matter_id: prerequisite-diagnostic
title: "Prerequisite Diagnostic"
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic

Try the following questions before reading Chapter 1. These are preparation problems, not a placement grade. A gap points to a prerequisite reading rather than an instruction to memorize a theorem name.

## Countable additivity and continuity

If events decrease to the empty set, why do their probabilities tend to zero? Disjointify the increasing complements, apply countable additivity and subtract their probabilities from one. Finiteness of total mass is essential to that subtraction. Review measure continuity if the argument is unfamiliar.

## Product integration

If independent integrable real variables X and Y are given, why is their product integrable and why does its expectation factor? Their joint law is the product of their marginals. Tonelli first gives the product of absolute first moments as a finite integral, then Fubini factors the signed integral. Independence without checking integrability would not license arbitrary signed infinite expressions.

## Almost-sure and first-mean convergence

Let X n be n times the indicator of a uniform variable falling below one over n. It converges to zero almost surely, because each strictly positive uniform value eventually leaves those intervals. Its expectation remains one. Thus almost-sure convergence alone does not imply first-mean convergence. Uniform integrability, established in Chapter 4, identifies the missing control.

## Orthogonal Gaussian coordinates

If a centred jointly Gaussian pair has zero covariance, why are its coordinates independent? Its joint characteristic function splits into the product of the two marginal characteristic functions. Uniqueness gives the product law. Without joint Gaussianity this implication fails; a symmetric variable and its square can be uncorrelated yet dependent.

## Radon-Nikodym

If an integrable X is given and G is a sub-sigma-algebra, which measure on G is used to construct its conditional expectation? Send an event A to the integral of X over A. Its signed finite measure is absolutely continuous with respect to the restricted probability. Radon-Nikodym gives a G-measurable density, and the defining event integrals identify that density up to null sets. Chapter 10 develops the details and consequences.

## Compactness versus boundedness

Why do point masses at the unit coordinate vectors in an infinite-dimensional Hilbert space fail to be uniformly tight, despite their uniformly bounded norms? No compact set contains infinitely many of those mutually separated vectors. A uniformly tight family would need one compact set containing every vector once the allowed omitted mass is below one. This is impossible. Review compactness and the distinction between norm-bounded and totally bounded sets before Chapter 8.
`;export{e as default};