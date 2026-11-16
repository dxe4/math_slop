var e=`---
parent_id: book-types-proofs-construction
chapter_id: a-classical-existence-proof-without-branch-information
title: "A classical existence proof without branch information"
level: graduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# A classical existence proof without branch information

This chapter presents a famous example that separates classical and constructive existence proofs. The statement has a classical proof by cases that does not decide which case holds, and therefore does not directly compute a witness. We analyze the proof, identify the information gap, and compare it with the constructive standard from Chapter 9.

## The theorem

**Theorem 17.1.** There exist irrational positive real numbers $a$ and $b$ such that $a^b$ is rational.

## The classical proof

Let $r = (\\sqrt{2})^{\\sqrt{2}}$.

**Case 1:** If $r$ is rational, take $a = b = \\sqrt{2}$. Then $a$ and $b$ are irrational, and $a^b = r$ is rational.

**Case 2:** If $r$ is irrational, take $a = r$ and $b = \\sqrt{2}$. Then $a$ is irrational by assumption, $b$ is irrational, and

$$a^b = ((\\sqrt{2})^{\\sqrt{2}})^{\\sqrt{2}} = (\\sqrt{2})^{\\sqrt{2} \\cdot \\sqrt{2}} = (\\sqrt{2})^2 = 2,$$

which is rational.

By excluded middle, either $r$ is rational or it is not. In both cases, we have found irrational $a, b$ with $a^b$ rational.

## The information gap

The proof establishes existence but does not identify which pair $(a, b)$ satisfies the theorem. It branches on whether $r$ is rational, a proposition that may not be decidable with current knowledge. The proof as written does not return a named pair.

This is not a claim that the rationality of $r$ is forever unknowable. It is a claim about the information supplied by this particular proof. A different proof, or a decision procedure for the rationality of $r$, could close the gap.

In fact, the Gelfond-Schneider theorem implies that $(\\sqrt{2})^{\\sqrt{2}}$ is transcendental, hence irrational. So Case 2 is the actual one, and $a = (\\sqrt{2})^{\\sqrt{2}}$, $b = \\sqrt{2}$ is a valid witness. But the classical proof does not establish this; it relies on excluded middle.

## Comparison with constructive existence

A constructive proof of the same theorem would require an explicit pair $(a, b)$ and verifications that $a$ is irrational, $b$ is irrational, and $a^b$ is rational. The classical proof above does not meet this standard.

The BHK reading from Chapter 1 demands that evidence for $\\exists x.\\, P(x)$ include a witness and a proof that the witness satisfies $P$. The classical proof provides neither directly; it provides a case analysis that guarantees one of two candidates works.

## Common errors

**Error: treating the classical proof as constructive.** The proof uses excluded middle on a potentially undecided proposition. This is not valid in intuitionistic logic.

**Error: claiming the proof shows the rationality of $r$ is unknowable.** The proof does not establish unknowability. It establishes existence without deciding the case. The Gelfond-Schneider theorem decides the case, but it is a separate result.

**Error: conflating "exists" in classical and constructive senses.** Classical existence is weaker: it may not supply a witness. Constructive existence is stronger: it always supplies a witness and verification.

## Practice exercises

### Exercise 1
Explain why the proof does not directly return one named pair.

**Solution.** The proof branches on whether $r = (\\sqrt{2})^{\\sqrt{2}}$ is rational. It does not decide this proposition. Excluded middle guarantees that one branch works, but the proof as written does not identify which.

### Exercise 2
State the Gelfond-Schneider theorem and explain how it resolves the case.

**Solution.** The Gelfond--Schneider theorem states that if $\\alpha$ is algebraic with $\\alpha\\neq0,1$ and $\\beta$ is algebraic and irrational, then every value of $\\alpha^\\beta$ is transcendental. Here $\\alpha=\\sqrt2$ and $\\beta=\\sqrt2$ satisfy the hypotheses, so the positive real value $(\\sqrt2)^{\\sqrt2}$ is transcendental, hence irrational. Case 2 holds.

### Exercise 3
Give a constructive proof that there exist irrational $a, b$ with $a^b$ rational, using a different pair.

**Solution.** Take $a = \\sqrt{2}$ and $b = \\log_{\\sqrt{2}}(3)$. Then $a^b = 3$, which is rational. It remains to show that $b$ is irrational. If $b = p/q$ in lowest terms, then $(\\sqrt{2})^{p/q} = 3$, so $2^{p/(2q)} = 3$, so $2^p = 3^{2q}$. The left side is a power of 2 and the right side is a power of 3, so both must be 1, implying $p = 0$, contradiction. Hence $b$ is irrational.

### Exercise 4
Explain the difference between "the proof does not decide the case," independence from a specified theory, and undecidability of a uniform decision problem.

**Solution.** "Does not decide" describes the information missing from this particular argument. Independence means that a sentence can be neither proved nor refuted in a named theory, assuming that theory is consistent; it is relative to the theory. Algorithmic undecidability normally concerns a family of inputs for which no single algorithm decides every instance. One cannot infer either stronger claim merely because one proof branches without choosing a side. Here Gelfond--Schneider settles the rationality of $r$, while the displayed elementary proof does not.

## Chapter summary

The classical proof that irrational $a, b$ exist with $a^b$ rational uses excluded middle without deciding its branch proposition. It guarantees existence without identifying a witness. This illustrates the information gap between classical and constructive existence. A separate theorem (Gelfond--Schneider) closes the gap, but the elementary proof alone does not.

**Backward pointers:** This chapter contrasts with Chapter 9, "A constructive theorem: a larger prime," which gave an explicit algorithm and witness. The BHK reading from Chapter 1 motivates the demand for witness-bearing evidence.

**Forward pointers:** Chapter 11, "Choice principles are setting-sensitive," examines other principles whose classical and constructive forms differ in information content. Chapter 12, "Constructive real-number boundaries," discusses the constructive status of real exponentiation.
`;export{e as default};