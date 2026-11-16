
# Prerequisite Diagnostic and Repair Routes

## Entrance preparation for the elementary primary route

The entrance requirement is school algebra and proof basics, with [Introduction to Proof](#/books/introduction-to-proof) as the preparation text. Fractions, integer arithmetic, expanding polynomials, elementary inequalities and functions are sufficient to begin. Euclid, modular arithmetic and finite groups of units are taught in the primary chapters; they are diagnostic topics for choosing a starting point rather than additional admission requirements.

Sections A–E below diagnose that elementary spine. Their original prompts and answers are preserved. In the current order, continued fractions are Chapter 13 and arithmetic functions are Chapter 15; the older chapter numbers inside the retained diagnostic describe its earlier edition. Section F's convergence/asymptotic questions and Section G's ideal/class-group questions are additional graduate-continuation preparation, outside the elementary entrance requirement. Section H's elliptic prompt is likewise for the retained advanced reading; the elementary cryptography chapter develops its finite probability and polynomial tools directly.

Use the current eighteen-chapter reader guide to choose the primary route. The retained analytic/algebraic route-selection notes below do not turn those advanced prerequisites into requirements for beginning Elementary Number Theory. Formal polynomial differentiation in prime-power lifting is a finite binomial calculation, not a calculus prerequisite.

## Retained diagnostic and additional preparation

## How to use the diagnostic

Work without a calculator or solution key. For each prompt, write the claim type and one checkable certificate. Stop after forty-five minutes. The purpose is to choose a route, not earn a grade.

Score two points for a correct result with decisive reasoning, one for a correct result without a complete reason, and zero for an unsupported or incorrect answer. The section scores diagnose different skills; do not collapse them into a single verdict.

## A. Logic and proof structure

**A1.** Negate: “For every integer $n>1$, there exists a prime $p$ dividing $n$.”

**A2.** Prove the contrapositive of “if $n^{2}$ is even, then $n$ is even.”

**A3.** Explain why checking one million values cannot prove a universal assertion over all integers.

**A4.** State the missing ingredient in a descent argument that produces a “simpler” solution.

**Answers.** A1: some $n>1$ has no prime divisor. A2: if $n$ is odd, $n=2k+1$ and its square is odd. A3: untested integers remain; a theorem or exhaustive finite reduction is required. A4: specify a positive-integer measure that strictly decreases while the new object remains an allowed solution.

**Repair route.** A score below six: read Chapter 1 through the proof-audit checklist, then redo Exercises 4, 7, 14, and 16. The Math Atlas logic-and-proofs course is the longer repair.

## B. Divisibility and Euclid

**B1.** Find quotient and canonical remainder when $-47$ is divided by $6$.

**B2.** Compute $\gcd(84,30)$ and a Bezout identity.

**B3.** Decide whether $84x+30y=15$ has integer solutions.

**B4.** Give a counterexample to cancellation in a composite modulus.

**Answers.** B1: $-47=6(-8)+1$. B2: gcd $6$; for example $6=3*30-84$. B3: no, because $6$ does not divide $15$. B4: $2*1\equiv 2*4 \bmod 6$, while $1$ is not congruent to $4$.

**Repair route.** A score below six: Chapters 2 and 4, with the extended-Euclid investigation completed on paper before programming.

## C. Factorization and valuations

**C1.** Factor $756$ and compute $v_{2}(756),v_{3}(756)$.

**C2.** Find $v_{5}(100!)$.

**C3.** Find the least positive $m$ making $540m$ a square.

**C4.** Explain why $6\mid 2*3$ does not contradict Euclid's lemma.

**Answers.** C1: $756=2^{2}*3^{3}*7$, so values $2,3$. C2: $20+4=24$. C3: $m=15$. C4: Euclid's lemma requires a prime divisor or a coprime-factor hypothesis; $6$ is composite.

**Repair route.** A score below six: Chapter 3, especially the logical order “Euclid lemma before uniqueness before exponent vectors.”

## D. Congruences and finite groups

**D1.** Solve $12x\equiv 18 \bmod 30$ and state the number of classes.

**D2.** Solve $x\equiv 4 \bmod 6$, $x\equiv 10 \bmod 15$.

**D3.** Find the order of $2 \bmod 15$.

**D4.** State what passing a base-two Fermat test proves.

**Answers.** D1: six classes, $x\equiv 4 \bmod 5$, represented by $4,9,14,19,24,29$. D2: $x\equiv 10 \bmod 30$. D3: order four. D4: only probable-prime evidence for that base; failure proves composite, success does not prove prime.

**Repair route.** A score below six: Chapters 4–6. Keep a “unit?” column beside every exponent reduction.

## E. Algebra and functions

**E1.** Factor $x^{2}-5x+6$ and solve it modulo $7$.

**E2.** For $f(x)=x^{3}+2x$, compute $f'(x)$ and the first-order expansion at $a+pt$ modulo $p^{2}$.

**E3.** Evaluate $[2;3,1,4]$.

**E4.** State the difference between pointwise multiplication and Dirichlet convolution.

**Answers.** E1: $(x-2)(x-3)$, roots $2,3$. E2: derivative $3x^{2}+2$; expansion $f(a)+pt f'(a) \bmod p^{2}$. E3: $43/19$. E4: pointwise uses $f(n)g(n)$; convolution sums $f(d)g(n/d)$ over divisors.

**Repair route.** Below six: review polynomial algebra, then Chapters 6, 11, and 14. For Hensel lifting, use Chapter 6, Section 3 to expand each integer monomial $(a+pt)^j$ by the binomial theorem and check that terms beyond the linear term are divisible by $p^2$. This is the formal polynomial derivative used in E2; no analytic limit is required. Introductory calculus is optional wider support.

## F. Inequalities and asymptotics

**F1.** Distinguish $F=\mathcal{O}(G)$ from $F\sim G$.

**F2.** For a positive integer $N$, bound $\sum_{n>N}1/n^{2}$ using an integral.

**F3.** Explain why $\pi(x)\sim x/\log x$ does not bound every individual prime gap by $2\log x$.

**F4.** State a safe half-plane for absolute convergence of $\zeta(s)$.

**Answers.** F1: big-O is an eventual constant bound; asymptotic equivalence means ratio tends to one. F2: for positive integer $N$, monotonicity gives $\sum_{n>N}1/n^{2}\le\int_{N}^{\infty}x^{-2}\,dx=1/N$. F3: a cumulative density theorem does not control every short interval. F4: $\operatorname{Re}(s)>1$.

**Repair route.** Below six: the sequences-and-series and asymptotic-notation resources, then Chapters 15, 17, and 18.

## G. Structural algebra

**G1.** List the units of $\mathbb{Z}[i]$.

**G2.** Explain the difference between an irreducible element and a prime element.

**G3.** What does the ideal class group measure?

**G4.** State why $\mathbb{Z}[\sqrt{5}]$ is not the full integer ring of $Q(\sqrt{5})$.

**Answers.** G1: $\pm 1,\pm i$. G2: irreducible forbids nonunit factorization; prime means divisibility of a product forces divisibility of a factor. G3: failure of fractional ideals to be principal. G4: the integral element $(1+\sqrt{5})/2$ is missing.

**Repair route.** Below six: first take the Abstract Algebra structures-and-quotients route, then Chapters 19–20.

## H. Claim and computation audit

**H1.** What does a nontrivial factor of $n$ certify?

**H2.** What does a PDF hash certify?

**H3.** Why is a correct RSA exponentiation map not automatically secure encryption?

**H4.** What must be checked before adding points on a short Weierstrass curve over a finite field?

**Answers.** H1: compositeness. H2: byte identity, not mathematical truth. H3: a scheme also needs randomized encoding, a security game, assumptions, and implementation protections. H4: field characteristic, nonsingular discriminant, point membership, and exceptional group-law cases.

**Repair route.** Below six: Chapter 22 and the Number Theory/Cryptography visual laboratory. Do not deploy educational code.

## Route selection

- Scores of six or more in A–F: begin sequentially and use chapter summaries for fast retrieval.
- Weak A or B: start at Chapter 1 regardless of total score.
- Strong elementary skills but weak G: take the analytic route or pause before Chapter 19 for algebra repair.
- Weak F: postpone Chapters 13 and 15–18 until calculus and convergence notation are repaired.
- Weak H: attach a claim ledger to every computational project.

Reattempt only the missed sections after repair. Improvement on a structurally similar question is better evidence than memorizing these answers.
