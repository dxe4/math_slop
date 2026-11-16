var e=`---
parent_id: book-probability-models-proofs
matter_id: prerequisite-diagnostic-and-repair
title: "Prerequisite Diagnostic and Repair Routes"
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic and Repair Routes

## How to use the diagnostic

Work without notes and show enough reasoning that you can locate the first missing move. Allow about ninety minutes, but stop a question after five unproductive minutes and mark it for repair. The diagnostic measures preparation, not mathematical potential. A reader may begin Chapters 1–5 while repairing calculus or integration; uncertainty about sets, functions, and quantifiers should be repaired first because those ideas form the grammar of probability.

For each answer, record one of three states:

- **secure:** the argument is correct and you can explain why each step is licensed;
- **recoverable:** you recognize the method after reading the first line of the answer;
- **repair:** the objects, quantifiers, or required method were unclear.

The pattern matters more than the total. Questions 1–12 test the language used from the first page. Questions 13–20 support counting and discrete laws. Questions 21–30 support continuous laws, expectation, and limits. Questions 31–36 test whether you distinguish a model assumption from a mathematical consequence.

## Sets, functions, and proof language

1. Prove the set identity $A \\cap (B \\cup C)=(A \\cap B) \\cup (A \\cap C)$ by element chasing.
2. If $A \\subseteq B$, prove that $B=A \\cup (B \\setminus A)$ and that the union is disjoint.
3. Negate the statement: “For every $\\varepsilon>0$, there exists $N$ such that for every $n\\ge N$, $\\lvert a_{n}-L\\rvert <\\varepsilon$.”
4. Decide whether the implication “$x^{2}=y^{2}$ implies $x=y$” is true for real numbers. If false, repair it in two different ways.
5. Let $f:S\\to T$ and $B \\subseteq T$. Prove $(f^{-1}(B))^{c}=f^{-1}(B^{c})$, with complements taken in the appropriate ambient sets.
6. For sets $A_{1},A_{2},...$, state De Morgan's law for the complement of their countable union and prove both inclusions.
7. Give a function $f:R\\to R$ that is neither injective nor surjective, and justify both failures.
8. Suppose $f$ and $g$ are nonnegative functions on a set and $f(x)\\le g(x)$ for every $x$. What extra information is needed before the symbols $\\int f \\le \\int g$ form a valid conclusion?
9. Prove by contradiction that $\\sqrt{2}$ is irrational. Identify exactly where parity is used.
10. State the difference between proving $P$ implies $Q$, proving its converse, and proving its contrapositive.
11. A relation $\\sim$ is defined on integers by $a\\sim b$ when $a-b$ is divisible by $3$. Verify reflexivity, symmetry, and transitivity.
12. Explain why a finite union of finite sets is finite, and why that argument does not establish that a countable union of finite sets is finite.

## Counting, algebra, and discrete structure

13. How many length-five binary strings contain exactly two ones? Derive the answer rather than listing strings.
14. From ten distinct objects, how many ordered triples without replacement can be formed? How many unordered triples?
15. Prove the binomial identity $\\sum_{k=0}^{n} \\binom{n}{k}=2^{n}$ by a counting argument.
16. Compute $\\sum_{k=0}^{n} r^{k}$ for $r\\ne 1$. Explain what happens at $r=1$.
17. Determine for which real $r$ the infinite series $\\sum_{k=0}^{\\infty} r^{k}$ converges and prove the value of its sum.
18. Solve the recurrence $a_{n+1}=r a_{n}+c$ with given $a_{0}$, first for $r\\ne 1$ and then for $r=1$.
19. Show that if nonnegative numbers $p_{1},...,p_{m}$ sum to one, then at least one is at least $1/m$ and at least one is at most $1/m$.
20. Expand $(x+y)^{4}$ and explain the combinatorial meaning of the coefficient of $x^{2}y^{2}$.

## Calculus, sequences, and integration

21. Differentiate $\\log(1+\\exp(t))$ and determine whether the function is convex.
22. Find the maximum of $x(1-x)$ on $[0,1]$, including endpoint checks.
23. Evaluate $\\int_{0}^{\\infty} \\lambda \\exp(-\\lambda x) dx$ and state every restriction on $\\lambda$.
24. Use integration by parts to evaluate $\\int_{0}^{\\infty} x \\lambda \\exp(-\\lambda x) dx$ for $\\lambda>0$.
25. Let $f(x)=x^{2}$ on $[0,1]$. Compute its average value and distinguish that number from the midpoint value $f(1/2)$.
26. Prove that every monotone increasing real sequence bounded above converges.
27. Give a bounded sequence that does not converge and compute its $\\limsup$ and $\\liminf$.
28. If $a_{n}\\to a$ and $b_{n}\\to b$, prove $a_{n}+b_{n}\\to a+b$ directly from the epsilon definition.
29. Explain why pointwise convergence of functions need not preserve integrals by analyzing $f_{n}(x)=n$ on $[0,1/n]$ and $0$ elsewhere on $[0,1]$.
30. For $g(x,y)=x^{2}+2xy+3y^{2}$, compute the gradient and Hessian. Decide whether the Hessian is positive definite.

## Model and ambiguity judgment

31. A die has faces labelled 1 through 6. Does that description imply that every face has probability $1/6$? State a sufficient model assumption.
32. Two events each have probability $1/2$. Does that determine the probability of their intersection? Give the full possible range and examples attaining its endpoints.
33. A simulation produces a relative frequency $0.503$ after one million trials. List three logically different claims this observation does **not** prove.
34. A nonnegative function $f$ integrates to one over the real line. What additional declarations turn $f$ into a probability density model for a random quantity?
35. A sequence satisfies $\\mathbb{E}[X_{n}]=0$ for every $n$. Does it follow that $X_{n}\\to 0$ in probability? Give a counterexample.
36. An event has probability zero. Must it be empty? Answer separately for a finite uniform model and for a continuous model on $[0,1]$.

## Complete answers

### Answers 1–12: sets and proof

1. Let $x$ belong to the left side. Then $x \\in A$ and either $x \\in B$ or $x \\in C$; hence $x$ belongs to $A \\cap B$ or to $A \\cap C$, so it belongs to the right side. Reversing these implications proves the other inclusion. Equality follows from the two inclusions.

2. Every $x \\in B$ either belongs to $A$ or does not. In the first case $x \\in A$; in the second $x \\in B \\setminus A$, so $B$ is contained in the displayed union. Both pieces are subsets of $B$, giving the reverse inclusion. Their intersection is empty because membership in $B \\setminus A$ includes nonmembership in $A$.

3. The negation is: “There exists $\\varepsilon>0$ such that for every $N$, there exists $n\\ge N$ with $\\lvert a_{n}-L\\rvert \\ge \\varepsilon$.” Every quantifier reverses and the strict inequality becomes its complement. This is the standard form for proving failure of convergence.

4. It is false: $1^{2}=(-1)^{2}$ but $1\\ne -1$. One repair is “$x^{2}=y^{2}$ implies $x=y$ or $x=-y$.” Another is to add $x\\ge 0$ and $y\\ge 0$, after which the nonnegative square root gives $x=y$.

5. An element $s$ lies in $(f^{-1}(B))^{c}$ precisely when $s \\in S$ and $f(s)$ is not in $B$. That is equivalent to $f(s) \\in T \\setminus B=B^{c}$, hence to $s \\in f^{-1}(B^{c})$. The complement on the left is in $S$; the complement inside the inverse image is in $T$.

6. The law is $(\\cup_{n} A_{n})^{c}=\\cap_{n} A_{n}^{c}$. If $x$ is outside the union, it belongs to no $A_{n}$, so it belongs to every $A_{n}^{c}$. Conversely, membership in every complement means membership in no $A_{n}$, hence nonmembership in the union.

7. For example, $f(x)=x^{2}+1$ is not injective because $f(1)=f(-1)$. It is not surjective onto $R$ because no negative real, nor any real below $1$, is an output. A formula alone would not answer the question without the declared domain and codomain.

8. One needs a measure space, measurability of the functions, and a meaning for the integrals. For nonnegative measurable functions, monotonicity of the Lebesgue integral gives the inequality even if the right side is infinite. For signed or improper integrals, existence conditions must be checked rather than inferred from notation.

9. Suppose $\\sqrt{2}=a/b$ in lowest terms with integers $a,b$ and $b\\ne 0$. Then $a^{2}=2b^{2}$, so $a^{2}$ is even and therefore $a$ is even; write $a=2c$. Substitution gives $b^{2}=2c^{2}$, so $b$ is even. Thus $a$ and $b$ share factor $2$, contradicting lowest terms. Parity is used in the lemma that an integer with even square is even.

10. $P\\Rightarrow Q$ says every case satisfying $P$ satisfies $Q$. Its converse is $Q\\Rightarrow P$ and may have a different truth value. Its contrapositive is $not Q\\Rightarrow not P$ and is logically equivalent to the original implication.

11. Reflexivity: $a-a=0$ is divisible by $3$. Symmetry: if $a-b=3k$, then $b-a=3(-k)$. Transitivity: if $a-b=3k$ and $b-c=3l$, then $a-c=3(k+l)$. Thus the relation partitions the integers into three residue classes.

12. For finitely many finite sets, add their finite cardinalities; overlaps can only reduce the union's size. In a countable union the number of summands is no longer finite. Indeed, $N=\\cup_{n\\ge 1}\\{n\\}$ is a countable union of one-element sets and is infinite.

### Answers 13–20: discrete preparation

13. Choose the two positions occupied by ones: $\\binom{5}{2}=5!/(2!3!)=10$. Once those positions are chosen, every other position must contain zero.

14. The ordered count is $10*9*8=720$: choose the first, second, and third entries successively. Every unordered triple has $3! =6$ orderings, so the unordered count is $720/6=\\binom{10}{3}=120$.

15. Count all subsets of an $n$-element set. There are $2^{n}$ because each element is independently either included or excluded. Partitioning the same subsets by their size gives $\\binom{n}{0}+...+\\binom{n}{n}$. Equality follows because both expressions count the same finite set.

16. Multiply $S_{n}=1+r+...+r^{n}$ by $1-r$ to get $(1-r)S_{n}=1-r^{n+1}$. Thus $S_{n}=(1-r^{n+1})/(1-r)$ for $r\\ne 1$. At $r=1$, division by $1-r$ is invalid and the original sum equals $n+1$.

17. If $\\lvert r\\rvert <1$, then $r^{n+1}\\to 0$; taking the limit in the finite-sum formula gives $1/(1-r)$. If $\\lvert r\\rvert \\ge 1$, the terms $r^{k}$ do not tend to zero, which is necessary for series convergence. Therefore convergence occurs exactly for $\\lvert r\\rvert <1$.

18. For $r\\ne 1$, iteration gives $a_{n}=r^{n} a_{0}+c \\sum_{k=0}^{n-1}r^{k}=r^{n} a_{0}+c(1-r^{n})/(1-r)$. For $r=1$, each step adds $c$, so $a_{n}=a_{0}+nc$. Direct substitution checks both formulas.

19. If every $p_{i}<1/m$, summing yields $\\sum_{i} p_{i}<1$, a contradiction. If every $p_{i}>1/m$, summing yields a value greater than one. Hence the two asserted indices exist; equality throughout is possible.

20. The expansion is $x^{4}+4x^{3}y+6x^{2}y^{2}+4xy^{3}+y^{4}$. To create $x^{2}y^{2}$ from four factors $(x+y)$, choose the two factors that contribute $x$; there are $\\binom{4}{2}=6$ choices.

### Answers 21–30: analysis preparation

21. The derivative is $\\exp(t)/(1+\\exp(t))$. Differentiating again gives $\\exp(t)/(1+\\exp(t))^{2}>0$, so the function is strictly convex on $R$.

22. The derivative is $1-2x$, which vanishes at $x=1/2$; the second derivative is $-2$, so this interior point is a strict maximum. Endpoint values are zero and the interior value is $1/4$, hence the global maximum on the closed interval is $1/4$.

23. For $\\lambda>0$, an antiderivative is $-\\exp(-\\lambda x)$, so the improper integral is $\\lim_{b\\to \\infty}[1-\\exp(-\\lambda b)]=1$. For $\\lambda=0$ the integrand is zero and does not normalize a density; for $\\lambda<0$ it grows exponentially and the improper integral diverges.

24. Take $u=x$ and $dv=\\lambda \\exp(-\\lambda x)dx$, so $v=-\\exp(-\\lambda x)$. The boundary term $[-x \\exp(-\\lambda x)]_{0}^{\\infty}$ is zero, and the remaining integral is $\\int_{0}^{\\infty} \\exp(-\\lambda x)dx=1/\\lambda$. The limit $x \\exp(-\\lambda x)\\to 0$ uses $\\lambda>0$.

25. The average value is $\\int_{0}^{1} x^{2} dx/(1-0)=1/3$. The midpoint value is $1/4$. Averaging outputs over an interval is generally not the same as evaluating the function at the average input; equality would require additional structure, such as affinity.

26. Let $L=\\sup_{n} a_{n}$, which exists by completeness because the set of terms is nonempty and bounded above. For every $\\varepsilon>0$, $L-\\varepsilon$ is not an upper bound, so some $a_{N}>L-\\varepsilon$. Monotonicity gives $L-\\varepsilon<a_{N}\\le a_{n}\\le L$ for every $n\\ge N$; hence $\\lvert a_{n}-L\\rvert <\\varepsilon$.

27. Take $a_{n}=(-1)^{n}$. It is bounded and fails to converge because its even subsequence is constantly $1$ while its odd subsequence is constantly $-1$. Its $\\limsup$ is $1$ and its $\\liminf$ is $-1$.

28. Given $\\varepsilon>0$, choose $N_{1}$ so that $\\lvert a_{n}-a\\rvert <\\varepsilon/2$ for $n\\ge N_{1}$, and $N_{2}$ similarly for $b_{n}$. For $n\\ge \\max(N_{1},N_{2})$, the triangle inequality gives $\\lvert (a_{n}+b_{n})-(a+b)\\rvert \\le \\lvert a_{n}-a\\rvert +\\lvert b_{n}-b\\rvert <\\varepsilon$.

29. For each fixed $x>0$, eventually $x>1/n$, so $f_{n}(x)=0$; at $x=0$ the stated definition may be assigned zero without affecting integrals. Thus $f_{n}\\to 0$ pointwise almost everywhere. Nevertheless $\\int_{0}^{1} f_{n}(x)dx=n(1/n)=1$ for every $n$. Pointwise convergence alone does not license exchanging limit and integral.

30. The gradient is $(2x+2y,2x+6y)^{T}$ and the Hessian is $[[2,2],[2,6]]$. Its leading principal minors are $2>0$ and $12-4=8>0$, so it is positive definite. Equivalently, the quadratic form is $2u^{2}+4uv+6v^{2}=2(u+v)^{2}+4v^{2}>0$ for nonzero $(u,v)$.

### Answers 31–36: model judgment

31. Labels alone say nothing about the probabilities. A sufficient assumption is that the die is modeled so that each of the six faces has probability $1/6$; a physical symmetry argument is evidence for choosing that model, not a consequence of the labels.

32. The intersection can range from zero to $1/2$. The lower bound follows from $\\mathbb{P}(A \\cup B)\\le 1$, which gives $\\mathbb{P}(A \\cap B)\\ge \\mathbb{P}(A)+\\mathbb{P}(B)-1=0$; the upper bound follows from $A \\cap B \\subseteq A$. Disjoint half-events attain zero, while $A=B$ attains $1/2$. Independence would give $1/4$, but it was not assumed.

33. It does not prove that the modeled success probability is exactly $0.503$; it does not prove that successive trials are independent or correctly implemented; and it does not prove a limit theorem or an error bound for every sample size. It is finite evidence about one run of one implementation. Other valid answers include failure to establish physical fairness or pseudorandom quality.

34. Declare a measurable sample space for the random quantity, use a reference measure—typically Lebesgue measure on $R$—and define probabilities by $\\mathbb{P}(X \\in A)=\\int_{A} f(x)dx$ for measurable $A$. Nonnegativity and unit integral then make this a probability law. One should also distinguish the law of $X$ from a particular construction of $X$ on an underlying outcome space.

35. No. Let $X_{n}$ equal $-1$ and $1$ with probability $1/2$ each, using the same law for every $n$. Then $\\mathbb{E}[X_{n}]=0$, but $\\mathbb{P}(\\lvert X_{n}\\rvert >1/2)=1$ for every $n$, so convergence to zero in probability fails. An expectation identity does not control concentration without more information.

36. In a finite uniform model every singleton has positive probability, so a probability-zero event contains no outcomes and is empty. Under the uniform law on $[0,1]$, every singleton has probability zero although it is nonempty. Probability zero means null under the declared measure, not logical impossibility.

## Repair map

If Questions 1–7 or 10–12 are marked repair, pause before Chapter 1. Review set operations, inverse images, domains and codomains, equivalence relations, quantifier negation, direct proof, contradiction, and two-inclusion proofs. Then redo Questions 1, 3, 5, and 6 from definitions. These moves recur in sigma-algebra arguments; memorizing probability formulas will not compensate for them.

If Questions 13–20 are unstable, study finite counting, binomial coefficients, geometric sums, and first-order recurrences. You may read \`event-models-and-axioms\` while repairing them, but complete the repair before \`counting-conditioning-and-bayes\` and \`discrete-laws-and-generating-functions\`. Derive formulas by describing what is counted rather than starting from factorial notation.

If Questions 21–25 or 30 are unstable, repair differentiation, constrained maxima, improper integrals, integration by parts, and quadratic forms before \`continuous-laws-and-change-of-variables\`. Chapters 1–5 require little calculus. Use that interval to restore these skills rather than postponing the whole book.

If Questions 26–29 are unstable, review completeness of the real numbers, epsilon proofs, subsequences, $\\limsup$, and interchange-of-limit counterexamples. This repair becomes urgent before \`expectation-integration-and-moments\` and essential before \`modes-of-convergence-and-uniform-integrability\`, the laws of large numbers, and central limit theorems.

If Questions 31–36 are unstable, begin the book rather than leaving it. These questions diagnose exactly the habits Chapters 1–4 are designed to build. Maintain the space, information, and dependence ledgers described in the reader guide. For every numerical answer, write one preceding sentence beginning “Under the model in which...”

Readers preparing mainly for statistics or machine learning should additionally ensure Questions 21, 22, 29, 30, and 35 are secure. Readers preparing for randomized algorithms should prioritize Questions 13–20, 28, and 32. Readers preparing for stochastic processes should make Questions 1–12, 26–29, and 36 fully secure.

Repeat the diagnostic after Chapters 5, 10, and 15. Improvement is visible not only in speed but in better declarations: ambient sets, governing laws, exact quantifiers, existence conditions, and named licences for limit operations.
`;export{e as default};