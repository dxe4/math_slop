var e=`---
parent_id: book-discrete-global-optimisation
matter_id: glossary-and-theorem-finder
title: "Glossary and Theorem Finder"
license: CC BY-SA 4.0
---

# Glossary and Theorem Finder

**Relaxation:** a problem containing the original feasible set, giving a minimization lower bound when the objective is consistent. **Incumbent:** a known feasible objective value, giving the upper bound in that convention. **Integer hull:** the convex hull of feasible integer points. **Valid cut:** an inequality satisfied by every retained feasible integer point. **Branching:** a partition whose children cover the parent's feasible alternatives.

**Global certificate:** a witness and coverage argument proving the requested bound or optimum on a declared domain. **Proof log:** a retained representation from which the witness logic can be replayed in its arithmetic model. **Separation:** either finding a violated valid inequality or proving membership relative to a specified family. A failed search for a cut is not automatically an exact separation result.

The current chapter links are given in the [book overview](../../discrete-global-optimisation.md). The certificate chapter links the full retained software and capstone sources. Read each theorem with its explicit integrality, boundedness, closure, convexity and arithmetic hypotheses. The dedicated new chapters will enter this finder only once their sources exist.
`;export{e as default};