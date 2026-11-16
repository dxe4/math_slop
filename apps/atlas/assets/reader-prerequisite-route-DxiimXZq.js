var e=`---
parent_id: book-algorithms-computation-proof-desk
matter_id: reader-prerequisite-route
title: "Reader Guide, Prerequisite Diagnostic, and Repair Routes"
license: CC BY-SA 4.0
---

# Reader Guide, Prerequisite Diagnostic, and Repair Routes

## The promise of this volume

This book teaches how to make a computational claim survive inspection. Its central objects are not only programs but specifications, representations, invariants, certificates, reductions, probability spaces, security games, transition systems, and trust boundaries. Every algorithm is asked four questions: what does it compute, why is the answer correct, what resource is counted, and what does the evidence not establish?

The manuscript is a first course, but “first” does not mean shallow. Part I constructs its proof language from examples and counterexamples. Parts II and III give a conventional algorithms-and-computation spine. Part IV shows how the same discipline governs codes, security, geometry, graphics, and quantum models. Part V turns claims into program logics, model checks, tool evidence, and a cumulative system dossier.

This guide describes the earlier 24-chapter arrangement. Use the [current twelve-chapter route](../../algorithms-computation-proof-desk.md) and its linked specialist readings to choose your reading order; the chapter numbers below belong to that earlier arrangement.

## Who can begin

You need secondary-school algebra, comfort reading small programs or pseudocode, and patience with quantified sentences. Calculus is not required for the main spine. Linear algebra is repaired locally before quantum states and graphics transforms. Probability begins with finite sample spaces. No proof course is assumed.

The same volume supports several paths:

- **Proof-first beginner:** Chapters 1–6, then 7–9. Write every quantifier and loop invariant.
- **Algorithms student:** Chapters 1–9, then 13. Add Chapters 10–12 when languages and reductions are new.
- **Theory route:** Chapters 1–4, 6, and 10–13; then 19–23 for semantics and verification.
- **Information and security route:** Chapters 1, 4, 6, 9, and 14–16. Keep source, channel, and adversary models separate.
- **Geometry, graphics, and quantum route:** Chapters 2, 4–6, 14, 17, and 18. Use the algebra repair below.
- **Verified systems route:** Chapters 1–3, 5, 10, 19–24. Finish with an independently checked certificate.

## Diagnostic

Attempt these without searching. Each answer is immediately below so the diagnostic teaches as well as routes.

1. Negate “every legal input has exactly one output.”

   **Answer.** Some legal input has either no output or at least two distinct outputs. If you wrote “every input does not,” repair quantifier negation in Chapter 1.

2. A function receives a list of length $n$. Is $n$ necessarily the bit length of its input?

   **Answer.** No. Element encodings and delimiters also count. Chapter 2 makes representation-dependent input size explicit.

3. State an induction hypothesis for $1+\\ldots+n=n(n+1)/2$.

   **Answer.** Assume the equality for one arbitrary fixed $n=k$, then prove it for $k+1$. Assuming the desired statement for all $n$ is circular; use Chapter 3.

4. Why are there $2^n$ binary words of length $n$?

   **Answer.** Each of $n$ positions has two independent choices, so the product rule gives $2$ multiplied $n$ times. Chapter 4 repairs counting and finite probability.

5. What is the difference between a test and a universal proof?

   **Answer.** A test establishes behavior on executed cases. A proof derives behavior for every input satisfying hypotheses. Chapter 1 classifies evidence; Chapter 24 combines both.

6. For a queue-based graph search, name one invariant.

   **Answer.** Every queued vertex is reachable from the start via its recorded parent chain. If program state feels informal, use Chapters 3, 5, and 7.

7. Is an algorithm observed at five milliseconds thereby $\\mathcal{O}(n)$?

   **Answer.** No. One timing is finite experimental evidence; $\\mathcal{O}(n)$ is an eventual bound under a declared size and operation model. Read Chapter 6.

8. Does a fast certificate checker imply a fast way to discover a certificate?

   **Answer.** Not known in general. Chapter 13 formalizes the P-versus-NP boundary without claiming a resolution.

9. If $P(A)=1/2$ and $P(B)=1/2$, is $P(A \\land B)=1/4$?

   **Answer.** Only under independence. Chapter 4 states conditional assumptions; Chapters 9 and 15 reuse them.

10. Can every $n$-bit string be compressed to fewer than $n$ bits losslessly?

    **Answer.** No: there are $2^n$ inputs but only $2^n-1$ shorter outputs. Chapter 15 connects counting to compression.

11. Is a cryptographic round-trip test evidence of secrecy?

    **Answer.** It tests correctness only. Secrecy needs an adversarial experiment. Read Chapters 14 and 16.

12. What is the sign of the orientation determinant for points $(0,0),(1,0),(1,1)$?

    **Answer.** Positive: the turn is counterclockwise. Chapter 17 derives this predicate and its numerical boundary.

13. Normalize the vector $(1,i)$ in $C^{2}$.

    **Answer.** Divide by $\\sqrt{2}$. Its squared norm is $1+1=2$. Use Chapter 18's local complex-vector route if this was unfamiliar.

14. What does a type-safety theorem normally exclude?

    **Answer.** Well-typed closed programs do not reach states classified as stuck by the semantics. It does not automatically prove termination or functional correctness. Chapters 19 and 20 explain the boundary.

15. What extra arguments turn a loop invariant into total correctness?

    **Answer.** Prove that each body execution from an invariant-and-guard state terminates, and supply a well-founded variant that strictly decreases across it. Read Chapter 21.

16. Does bounded model checking to depth 100 prove unbounded safety?

    **Answer.** Only if an independently established completeness bound is at most 100. Chapters 22 and 23 classify bounded evidence.

## Repair plans

If questions 1–5 were difficult, follow Chapters 1–4 in order and solve the first eight exercises before proceeding. If 6–8 were difficult, read Chapters 5–7 and trace the included standard-library programs on paper. If 9–11 were difficult, revisit finite probability in Chapter 4 before the randomness, coding, or cryptography chapters. If 12–13 were difficult, use the coordinate and complex-number mini-lessons at the start of Chapters 17–18. If 14–16 were difficult, read Chapter 19 before attempting proof assistants or model checking.

## How to work a chapter

First copy its contract: input domain, output relation, representation, and claim type. Second, reconstruct the central proof without looking. Third, run the dependency-free example and change one boundary case. Fourth, solve exercises in all four bands: notation, construction, proof/counterexample, transfer. Finally, write one sentence beginning “This evidence does not prove…”.

For code, preserve the language-level preconditions instead of silently coercing input. For randomized work, record seeds while distinguishing reproducibility from probability theory. For formal tools, list axioms and trusted components. For visuals, use the table or numerical alternative as part of the mathematical object.

## Instructor routes

A 12-week algorithms course can assign Chapters 1–9 and 13, sampling Chapters 10–12. A theory course can assign 1–4, 6, 10–13, 19, and 22. A computing-and-society module can use 1, 4, 9, and 14–18 to audit claims without pretending to cover specialist cryptography or quantum engineering. A verification course can use 1–3, 5, 10, and 19–24, with the final dossier as assessment.

The capstone rubric rewards claim precision, checker soundness, counterexample quality, reproducibility, and honest boundaries—not program size.
`;export{e as default};