var e=`---
parent_id: book-logic-foundations-proof-reference
chapter_id: large-cardinals
title: "Large Cardinals"
level: advanced-undergraduate
estimated_minutes: 210
license: CC BY-SA 4.0
---

# Large Cardinals

Large cardinal axioms assert the existence of cardinals with properties so strong that they cannot be proved in ZFC alone. Many familiar axioms form a robust implication and consistency-strength hierarchy, but the broader landscape is only partially ordered and depends on the comparison notion. This chapter introduces inaccessible, measurable, and strongly compact cardinals and explains their role in consistency proofs and forcing.

## Inaccessible cardinals

**Definition 15.1 (strong limit).** A cardinal $\\kappa$ is a *strong limit* if for every $\\lambda < \\kappa$, $2^\\lambda < \\kappa$.

**Definition 15.2 (regular).** A cardinal $\\kappa$ is *regular* if it cannot be expressed as a sum of fewer than $\\kappa$ many cardinals each smaller than $\\kappa$. Equivalently, $\\text{cf}(\\kappa) = \\kappa$.

**Definition 15.3 (inaccessible).** An uncountable cardinal $\\kappa$ is *(strongly) inaccessible* if it is regular and a strong limit.

**Theorem 15.4.** If $\\kappa$ is inaccessible, then $V_\\kappa \\models \\text{ZFC}$.

**Proof sketch.** The cumulative hierarchy $V_\\kappa$ satisfies all ZFC axioms because $\\kappa$ is regular (ensuring replacement) and a strong limit (ensuring power set stays below $\\kappa$). The axiom of choice holds in $V_\\kappa$ because it holds in $V$.

**Consistency boundary.** ZFC + “there exists an inaccessible cardinal” proves $\\text{Con}(\\text{ZFC})$. By Gödel’s second incompleteness theorem, ZFC cannot prove the existence of inaccessible cardinals (assuming ZFC is consistent). Thus the existence of inaccessibles is a genuine strengthening.

## Measurable cardinals

**Definition 15.5 (filter on a cardinal).** A *filter* on $\\kappa$ is a collection $F \\subseteq \\mathcal{P}(\\kappa)$ closed under supersets and finite intersections, with $\\emptyset \\notin F$ and $\\kappa \\in F$.

**Definition 15.6 (ultrafilter).** An *ultrafilter* is a maximal filter; equivalently, for every $A \\subseteq \\kappa$, either $A \\in U$ or $\\kappa \\setminus A \\in U$.

**Definition 15.7 ($\\kappa$-complete).** A filter $F$ is *$\\kappa$-complete* if it is closed under intersections of fewer than $\\kappa$ many sets.

**Definition 15.8 (measurable cardinal).** An uncountable cardinal $\\kappa$ is *measurable* if there exists a nonprincipal $\\kappa$-complete ultrafilter on $\\kappa$.

**Theorem 15.9.** Every measurable cardinal is inaccessible.

**Proof sketch.** First, nonprincipality together with $\\kappa$-completeness makes $U$ *uniform*: a set of size $<\\kappa$ is omitted because the intersection of the complements of its singletons is in $U$. If $\\kappa$ were the union of $\\lambda<\\kappa$ small sets, all their complements would lie in $U$ and their intersection would be empty, contradicting $\\kappa$-completeness; hence $\\kappa$ is regular. For the strong-limit step, if $\\kappa$ injected into $\\mathcal P(\\lambda)$ for some $\\lambda<\\kappa$, the ultrafilter decides each of the $\\lambda$ coordinates. Intersecting those $\\lambda$ decisions gives a $U$-large fiber containing at most one point, contradicting uniformity. Thus $2^\\lambda<\\kappa$.

## Strongly compact cardinals

**Definition 15.10 (strongly compact; filter formulation).** An uncountable regular cardinal $\\kappa$ is *strongly compact* if every $\\kappa$-complete filter on any set can be extended to a $\\kappa$-complete ultrafilter. This is one standard equivalent formulation.

**Definition 15.11 (weakly compact).** A cardinal $\\kappa$ is *weakly compact* if it is inaccessible and satisfies certain compactness properties for $L_{\\kappa\\kappa}$ logic, or equivalently if it has the tree property and is inaccessible.

**Theorem 15.12.** Every strongly compact cardinal is measurable.

Apply the definition to the co-small filter

$$F=\\{A\\subseteq\\kappa:|\\kappa\\setminus A|<\\kappa\\}.$$

Regularity makes $F$ $\\kappa$-complete. Any ultrafilter extending it omits every singleton, so the resulting $\\kappa$-complete ultrafilter is nonprincipal and $\\kappa$ is measurable. The cofinite filter would not suffice: intersecting countably many cofinite sets can have infinite complement.

## Large cardinals and forcing

Preservation depends on both the large-cardinal property and the forcing notion; broad slogans about c.c.c. or proper forcing have exceptions. Collapsing the cardinal destroys the property, while carefully prepared forcing can preserve much stronger features.

**Theorem 15.13 (Lévy–Solovay).** Small forcing (forcing of size $< \\kappa$) preserves the measurability of $\\kappa$.

**Proof architecture.** Let $j:V\\to N$ be the ultrapower embedding derived from a measure on $\\kappa$. For forcing $\\mathbb P$ of size $<\\kappa$, one may represent it inside $V_\\kappa$, so $j(\\mathbb P)=\\mathbb P$ and the same generic lifts the embedding to $j^*:V[G]\\to N[G]$. The lifted embedding yields a measure in the extension by

$$U^*=\\{X\\subseteq\\kappa\\text{ in }V[G]:\\kappa\\in j^*(X)\\}.$$

Checking that the lift exists and that $U^*$ is a $\\kappa$-complete ultrafilter is the substantive part of the Lévy--Solovay argument. For small forcing one must also prove the stronger generated-filter conclusion: every $X\\subseteq\\kappa$ in $V[G]$ contains a member of $U$ or its complement contains a member of $U$. Thus the filter generated by the ground-model measure $U$ is already the extended ultrafilter $U^*$ and decides the new subsets as well as the old ones.

## Common errors

**Error: overlooking direct implication.** Every measurable cardinal is directly provably inaccessible, as the uniformity argument above shows. This implication also yields a consistency-strength comparison, but the two kinds of statement should be recorded separately.

**Error: assuming measurability survives passage to $L$.** Scott's theorem implies that $L$ has no cardinal that is measurable *in $L$*. A cardinal measurable in the ambient universe $V$ may remain a cardinal of $L$, but its $V$-measure need not belong to $L$ or measure all constructible subsets there in the required internal sense.

**Error: using large cardinal axioms as ordinary theorems.** A large cardinal axiom is an additional assumption. A proof that uses it produces a conditional theorem: “If there exists a measurable cardinal, then ...”

## Practice exercises

**Exercise 1.** Show that $\\aleph_\\omega$ is not inaccessible.

**Solution.** $\\aleph_\\omega = \\bigcup_{n < \\omega} \\aleph_n$. This expresses $\\aleph_\\omega$ as a countable union of smaller cardinals, so $\\text{cf}(\\aleph_\\omega) = \\omega < \\aleph_\\omega$. Hence $\\aleph_\\omega$ is not regular, so not inaccessible.

**Exercise 2.** Prove that if $\\kappa$ is inaccessible, then $|V_\\kappa| = \\kappa$.

**Solution.** By transfinite induction on $\\alpha < \\kappa$, $|V_\\alpha| < \\kappa$. For successor stages, $|V_{\\alpha+1}| = 2^{|V_\\alpha|} < \\kappa$ since $\\kappa$ is a strong limit. For limit stages, $|V_\\lambda| = \\sup_{\\alpha < \\lambda} |V_\\alpha| < \\kappa$ since $\\kappa$ is regular. Hence $|V_\\kappa| = \\sup_{\\alpha < \\kappa} |V_\\alpha| \\leq \\kappa$. Since $\\kappa \\subseteq V_\\kappa$, equality holds.

**Exercise 3.** What supply of inaccessible cardinals follows below a measurable cardinal, and why does it not give a proper class?

**Solution.** A measurable $\\kappa$ is Mahlo; in particular, inaccessible cardinals are unbounded below $\\kappa$ (one standard proof uses a normal measure derived from the ultrapower). This produces a set of inaccessibles bounded by $\\kappa$. Iterating facts *inside* $V_\\kappa$ never produces cardinals above $\\kappa$, so one measurable cardinal does not imply a proper class of inaccessibles.

**Exercise 4.** Explain why ZFC cannot prove “there exists an inaccessible cardinal.”

**Solution.** If ZFC proved the existence of an inaccessible, then ZFC would prove $\\text{Con}(\\text{ZFC})$, since $V_\\kappa \\models \\text{ZFC}$ for inaccessible $\\kappa$. This contradicts Gödel’s second incompleteness theorem, assuming ZFC is consistent.

**Exercise 5.** Let $\\kappa$ be strongly compact. Show that the compactness theorem holds for $L_{\\kappa\\kappa}$: if every subset of size $< \\kappa$ of a theory in $L_{\\kappa\\kappa}$ has a model, then the whole theory has a model.

**Solution.** Let $I=\\mathcal P_\\kappa(T)$, the set of subtheories of size $<\\kappa$, and choose a model $M_s\\models s$ for each $s\\in I$. On $I$, the sets $X_a=\\{s:a\\subseteq s\\}$ for $a\\in\\mathcal P_\\kappa(T)$ generate a $\\kappa$-complete fine filter: the intersection of fewer than $\\kappa$ generators contains the generator indexed by their union. Extend it to a $\\kappa$-complete ultrafilter $U$. For every $\\varphi\\in T$, $X_{\\{\\varphi\\}}\\in U$, so $M_s\\models\\varphi$ for $U$-almost every $s$. The $L_{\\kappa\\kappa}$ form of Łoś's theorem, whose conjunction and quantifier steps use $\\kappa$-completeness, gives $\\prod_s M_s/U\\models T$.

## Looking backward and forward

This chapter used the forcing machinery from “Forcing” to discuss preservation of large cardinal properties, and the model-theoretic compactness from “Model Theory” to characterize strong compactness. The next chapter, “Descriptive Set Theory”, studies definable subsets of Polish spaces and their connections to large cardinals and determinacy.
`;export{e as default};