var e=`---
parent_id: book-automata-computability-complexity
matter_id: reader-guide
title: "Reader Guide and Conventions"
level: advanced-undergraduate
license: "CC BY-SA 4.0"
---

# Reader Guide and Conventions

The level is L3, advanced undergraduate. Bring ordinary mathematical proof, sets, relations, induction, finite graphs, counting and asymptotic cost analysis from Mathematics for Computer Science. The book introduces automata and computation models from their definitions. Its algebraic and logical descriptions are developed after concrete machines, and its complexity theory depends on explicit earlier simulation and encoding results.

Alphabets are finite, with a nonempty input alphabet whenever countably infinitely many words or arbitrarily long inputs are used. The empty word remains a genuine input. Automata are complete when complemented; epsilon moves and missing transitions are named separately. Nondeterministic acceptance means existence of a finite accepting run, not a random branch or a promise that every branch succeeds. A grammar's epsilon-production conventions and start-symbol restrictions accompany its normal-form theorems.

Specialised word structures may have an empty position domain when the word is empty. The logic chapter states that specialised semantics explicitly and handles the empty run in its translations. It does not transfer generic first-order completeness assumptions about nonempty domains without qualification. Finite tree-automata results use a finite ranked alphabet. Numeric leaves and named-variable records in a concrete constant folder are data-bearing syntax and are not automatically a finite ranked alphabet or finite-state transducer.

Turing machines have finite descriptions, effective parsing and specified malformed-code behaviour. Output, rejecting halt and divergence are distinct. Partial-function enumerations state their output normalisation. Parameterisation writes a wrapper without waiting for its eventual run. A mapping reduction is total and preserves both signs; a complexity reduction additionally bounds construction time and output length.

Time and work space are measured under the declared tape model, counting input-head information where configurations require it. Savitch stores one recursion branch and reuses its workspace. Cook–Levin compiles a polynomially clocked computation, and the QBF reduction uses a single recursive formula occurrence. Cited hierarchy, PCP, aperiodic-language and oracle theorems are named inputs; an explanatory outline is not called a full proof. Unresolved standard class separations remain unresolved.

Use the stable exercise anchors when recording a question. Read the complete prompt before opening hints. Full solutions are model answers and may be used for learning, but copying a revealed argument is not an unseen independent attempt or a grade. Preserved code is inert source material in this authoring checkpoint; its existence does not assert a successful execution. The promise/MAX-3SAT continuation retains exact task labels, cases, keys and feedback in back matter.

The source is Draft and requires independent mathematical, exercise and editorial review. No PDF was created or duplicated. Previous source resources and release histories remain intact, so old notes and direct links keep their original targets.
`;export{e as default};