var e=`---
parent_id: book-measure-and-integration
matter_id: notation-and-limit-conventions
title: "Notation and Limit Conventions"
level: graduate
license: CC BY-SA 4.0
---

# Notation and Limit Conventions

A measure space is \\((X,\\Sigma,\\mu)\\). A measurable set belongs to \\(\\Sigma\\), and a null set is measurable with measure zero. A statement holds almost everywhere when it holds outside a measurable null set. Completion refers to measurability of subsets of null sets, not convergence of metric Cauchy sequences.

The indicator of \\(E\\) is \\(1_E\\). Nonnegative extended values are permitted when explicitly stated. No formula assigns a value to infinity minus infinity. Signed integrals require a definition distinguishing finite integrability from a one-sided extended value.

Increasing means nondecreasing unless strict increase is specified. The arrows \\(E_n\\uparrow E\\) and \\(E_n\\downarrow E\\) include both set inclusion and the stated union or intersection. Limits of integrals always name the convergence theorem and its hypotheses.

Use a convergence statement with its domain and measure visible: changing the measure can change which points are negligible and which functions are integrable. A later chapter always states any added finiteness or regularity assumptions at the point where its proof uses them.
`;export{e as default};