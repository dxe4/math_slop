var e=`---
parent_id: book-types-proofs-construction
matter_id: solutions
title: "Exercise and Project Solutions"
license: CC BY-SA 4.0
---

# Exercise and Project Solutions

These solutions show decisive reasoning for exercises across the chapters. They are organized by chapter and preserve the claim-status conventions used throughout the book. Where chapters contain inline solutions, these entries restate them compactly.

---

## The Brouwer--Heyting--Kolmogorov reading

1. **Give BHK evidence for $A \\to (B \\to A)$ and describe the data flow.**

   The evidence is $\\lambda a.\\, \\lambda b.\\, a$. Given evidence $a$ for $A$, the outer lambda returns a method that ignores any evidence $b$ for $B$ and returns $a$. The $A$-evidence is stored and returned unchanged.

2. **Show that $(A \\to B) \\to (\\neg B \\to \\neg A)$ is intuitionistically valid by giving explicit evidence.**

   The evidence is $\\lambda f.\\, \\lambda g.\\, \\lambda a.\\, g(f(a))$. Given $f : A \\to B$ and $g : B \\to \\bot$ and $a : A$, we form $f(a) : B$ and apply $g$ to obtain contradiction. The composition is explicit.

3. **Explain why $\\neg\\neg(A \\lor \\neg A)$ is constructively valid even though $A \\lor \\neg A$ is not.**

   Suppose $h : (A \\lor \\neg A) \\to \\bot$. We must produce contradiction. From $h$, define $k : A \\to \\bot$ by $k(a) = h(\\operatorname{inl}(a))$. Then $\\operatorname{inr}(k) : A \\lor \\neg A$, and $h(\\operatorname{inr}(k))$ is contradiction. The key is that the right injection $\\operatorname{inr}(k)$ can be formed from the assumption that $h$ refutes disjunction, without deciding $A$.

4. **Give a decidable proposition other than numeric equality, and explain the decision procedure.**

   "A given finite list of natural numbers is sorted" is decidable. Compare adjacent elements; if every adjacent pair is in nondecreasing order, the list is sorted. The procedure terminates because the list is finite, and it returns a definite yes or no.

---

## Natural deduction as construction rules

1. **Give a natural deduction derivation of $A \\times B \\vdash B \\times A$ with explicit term.**

   Assume $p : A \\times B$. By \${\\times}E_{2}$, $\\pi_{2}(p) : B$. By \${\\times}E_{1}$, $\\pi_{1}(p) : A$. By \${\\times}I$, $(\\pi_{2}(p), \\pi_{1}(p)) : B \\times A$. Discharge $p$ by \${\\to}I$:

   $$\\lambda p.\\, (\\pi_{2}(p), \\pi_{1}(p)) : (A \\times B) \\to (B \\times A).$$

2. **Derive $A \\to B, B \\to C \\vdash A \\to C$ with explicit term.**

   Assume $f : A \\to B$ and $g : B \\to C$. To show $A \\to C$, assume $x : A$. Then $f(x) : B$ by \${\\to}E$, and $g(f(x)) : C$ by \${\\to}E$. Discharge $x$, then $f$ and $g$:

   $$\\lambda f.\\, \\lambda g.\\, \\lambda x.\\, g(f(x)) : (A \\to B) \\to (B \\to C) \\to (A \\to C).$$

3. **Show that $A + B \\to C$ is equivalent to $(A \\to C) \\times (B \\to C)$ by giving both directions.**

   Forward: assume $h : A + B \\to C$. Define $f = \\lambda a.\\, h(\\operatorname{inl}(a)) : A \\to C$ and $g = \\lambda b.\\, h(\\operatorname{inr}(b)) : B \\to C$. Then $(f, g) : (A \\to C) \\times (B \\to C)$.

   Backward: assume $(f, g) : (A \\to C) \\times (B \\to C)$. Define $h = \\lambda s.\\, \\operatorname{case}(s; x.\\, f(x); y.\\, g(y)) : A + B \\to C$.

4. **Explain why the following is invalid: from $\\vdash A \\lor B$, derive $\\vdash A$.**

   The elimination rule for disjunction requires a common type $C$ derivable from both $A$ and $B$. Taking $C = A$ fails in the right branch, where $y : B$ does not yield $A$ without additional assumptions. This is the constructive distinction between knowing $A \\lor B$ and knowing which side holds.

---

## Simply typed lambda calculus

1. **Give a well-typed term for $1 \\to A \\to A$ and show the derivation.**

   The term is $\\lambda u.\\, \\lambda x.\\, x$. Derivation: assume $u : 1$ and $x : A$. Then $x : A$ by $(var)$. Discharge $x$ by \${\\to}I$, then $u$ by \${\\to}I$. The unit argument is ignored.

2. **Give a well-typed term for $(A \\to B) \\to (C \\to A) \\to (C \\to B)$.**

   $\\lambda f.\\, \\lambda g.\\, \\lambda x.\\, f(g(x))$. Assume $f : A \\to B$, $g : C \\to A$, $x : C$. Then $g(x) : A$ and $f(g(x)) : B$.

3. **Explain why $\\lambda x.\\, x\\,x$ is not well-typed in $\\lambda^{\\to}$.**

   For $x\\,x$ to be well-typed, $x$ must have type $A \\to B$ and also type $A$. This requires $A = A \\to B$, which has no finite solution in the simple type system. Self-application is ruled out by the stratification of types.

4. **Give a term for $A \\to B \\to A \\times B$ and describe its computational behavior.**

   $\\lambda a.\\, \\lambda b.\\, (a, b)$. It takes evidence for $A$ and $B$ and pairs them. This is the \${\\times}I$ rule as a function.

---

## Reduction, preservation, and normalization

1. **Reduce $(\\lambda x.\\, (x, x))\\,u$ one step and state the type of the result, assuming $u : A$.**

   $(u, u) : A \\times A$. The beta redex is replaced by the pair, and both components have type $A$.

2. **Show that $\\lambda x.\\, \\lambda y.\\, x$ is in normal form.**

   The term is a lambda abstraction whose body is a lambda abstraction whose body is a variable. There are no applications, projections, or case analyses, so no reduction rule applies. It is in normal form.

3. **Trace the reduction of $\\operatorname{case}(\\operatorname{inl}(a); x.\\, (x, x); y.\\, y)$ where $a:A$ and the scrutinee has type $A+(A\\times A)$.**

   The outer term is a case analysis on $\\operatorname{inl}(a)$. By the sum reduction rule, it reduces to $(a, a) : A \\times A$. No further reductions apply if $a$ is a variable or normal form.

4. **Explain why adding a primitive fixed-point operator $\\operatorname{fix}:(A\\to A)\\to A$ with $\\operatorname{fix}(f)\\to f(\\operatorname{fix}(f))$ breaks strong normalization.**

   With a primitive $\\operatorname{fix}:(A\\to A)\\to A$ and rule $\\operatorname{fix}(f)\\to f(\\operatorname{fix}(f))$, take $f=\\lambda x.x$. Unfolding and beta reduction form a repeatable two-step cycle, so strong normalization fails.

---

## Curry--Howard: precise scope

1. **State the logic and calculus matched by the basic Curry--Howard correspondence.**

   Intuitionistic propositional natural deduction and the simply typed lambda calculus ($\\lambda^{\\to}$).

2. **What calculus corresponds to classical natural deduction with double negation elimination?**

   A lambda calculus with control operators, such as $\\lambda\\mu$-calculus or a calculus with call/cc. The classical principle corresponds to continuation manipulation.

3. **Explain why a proof using the axiom of choice may not extract to a useful program.**

   The axiom of choice, in its full set-theoretic form, asserts the existence of a choice function without constructing it. In type theory, the type-theoretic version is constructive (it unpacks an existing witness), but the set-theoretic version may introduce noncomputational content.

4. **Give an example of a proposition that is classically provable but does not correspond to an inhabited type in $\\lambda^{\\to}$.**

   $A \\lor \\neg A$ for arbitrary $A$. It is classically valid but not intuitionistically provable, so it has no inhabitant in $\\lambda^{\\to}$.

---

## Dependent function and pair types

1. **Give the type of a function that returns the head of a nonempty vector. The type should ensure the vector is nonempty.**

   $\\Pi n : \\mathbb{N}.\\, \\Pi v : \\operatorname{Vec}(A, \\operatorname{succ}(n)).\\, A$. The length is $\\operatorname{succ}(n)$, which excludes zero.

2. **Construct an inhabitant of $\\Sigma n : \\mathbb{N}.\\, (n > 5) \\times (n < 10)$.**

   $(7, (p_{7}, q_{7}))$ where $p_{7}$ is evidence that $7 > 5$ and $q_{7}$ is evidence that $7 < 10$. Any $n \\in \\{6, 7, 8, 9\\}$ works.

3. **Explain why $\\Pi x : A.\\, B(x)$ generalizes $A \\to B$.**

   When $B(x)$ is a constant type $B$ not depending on $x$, the dependent function type becomes $A \\to B$. The rules collapse to the ordinary function rules.

4. **Give a term of type $\\Sigma f : (A \\to A).\\, \\Pi x : A.\\, \\Pi y : A.\\, (x = y) \\to (f(x) = f(y))$.**

   Take $f=\\lambda x.x$, the identity on $A$. For $p:x=y$, the same proof establishes $f(x)=f(y)$. The pair is $(\\lambda x.x,\\lambda x.\\lambda y.\\lambda p.p)$.

---

## Identity types and equality

1. **State the difference between definitional and propositional equality for $(\\lambda x.\\, x)\\,u$ and $u$.**

   $(\\lambda x.\\, x)\\,u$ reduces to $u$ by beta reduction, so they are definitionally equal. The type checker recognizes this automatically. A propositional equality would require an explicit proof term, but here none is needed.

2. **Give a propositional equality proof that $0 + n =_{\\mathbb{N}} n$ for all $n : \\mathbb{N}$, using the recursive definition $0 + n = n$ and $\\operatorname{succ}(m) + n = \\operatorname{succ}(m + n)$.**

   Because $0+n$ computes to $n$, reflexivity gives the requested proposition: $\\lambda n.\\operatorname{refl}_n : \\Pi n:\\mathbb N.\\,(0+n=_{\\mathbb N}n)$. By contrast, $m+0=m$ requires induction under the stated recursion equations.

3. **Explain why function extensionality is not provable from $J$ alone.**

   In standard intensional Martin-Löf type theory, function extensionality is not derivable from the basic identity rules alone; that nonderivability is a metatheoretic model result, not a conclusion obtained merely by inspecting reflexivity. It may be added as an axiom or derived from univalence through weak function extensionality.

4. **Define transport for a family $B : A \\to \\text{Type}$ and prove that $\\operatorname{transport}^{B}(\\operatorname{refl}_{a}, t) = t$.**

   Use the motive $C(x,y,p)\\equiv B(x)\\to B(y)$ and reflexivity branch $d\\equiv\\lambda z.\\lambda u.u$, and define $\\operatorname{transport}^B(p,t)\\equiv J_C(d,a,b,p)(t)$. At $p=\\operatorname{refl}_a$, the computation rule reduces this term to $t$.

---

## Universes and paradox control

1. **Explain why $\\operatorname{Type}_{i} : \\operatorname{Type}_{i}$ would enable a paradox.**

   In a dependent system with sufficiently expressive product formation, $\\operatorname{Type}_i:\\operatorname{Type}_i$ enables the impredicative self-application in Girard's paradox and yields inconsistency. This is not a literal Russell membership construction; the product-closure hypotheses matter.

2. **In a cumulative system, if $A:\\operatorname{Type}_2$ and $B:\\operatorname{Type}_1$ are the only supplied level judgments, what is the smallest universe guaranteed to contain $A\\to B$?**

   The maximum supplied level is $\\operatorname{Type}_2$, after lifting $B$ by cumulativity. A particular $A$ might also live lower, so this is the smallest guaranteed level, not necessarily its least possible one.

3. **State the difference between cumulative and noncumulative universe hierarchies.**

   In a cumulative hierarchy, if $A : \\operatorname{Type}_{i}$, then $A : \\operatorname{Type}_{i+1}$ automatically. In a noncumulative hierarchy, $A : \\operatorname{Type}_{i}$ does not imply $A : \\operatorname{Type}_{i+1}$; an explicit lifting operation is needed.

4. **Why is universe polymorphism not the same as having a single universe?**

   Universe polymorphism parameterizes definitions over levels, but each instantiation uses a specific level from the hierarchy. It does not collapse the hierarchy into a single self-containing universe. The paradox-avoiding structure remains intact.

---

## A constructive theorem: a larger prime

1. **Apply the construction to $n = 7$. Compute $N$, find its least prime divisor, and verify it exceeds $7$.**

   $N = 7! + 1 = 5041$. Factoring: $5041 = 71 \\times 71$. The least divisor greater than $1$ is $71$, which is prime and $71 > 7$.

2. **Explain why the least divisor of any integer $N > 1$ is prime.**

   Let $p$ be the least divisor of $N$ greater than $1$. If $p = ab$ with $1 < a < p$, then $a$ divides $N$ and $1 < a < p$, contradicting minimality. Hence $p$ has no proper divisor and is prime.

3. **Is the construction efficient? What is its time complexity?**

   The literal upward search can test at most $N-1=n!$ candidates. Testing only through $\\lfloor\\sqrt N\\rfloor$ and returning $N$ if none divides uses $O(\\sqrt N)$ divisibility tests. Computing $n!$ takes at most $n$ multiplications, including the edge case $n=0$. Operand size reaches $\\Theta(n\\log n)$ bits for growing $n$; a bit-complexity claim must also name arithmetic algorithms and the encoding of $n$.

4. **Give a constructive proof that there are infinitely many primes, phrased as a method that, given any finite list of primes, produces a prime not in the list.**

   Given primes $p_{1}, \\dots, p_{k}$, let $N = p_{1} \\cdots p_{k} + 1$. Let $p$ be the least divisor of $N$ greater than $1$. Then $p$ is prime. If $p = p_{i}$ for some $i$, then $p_{i}$ divides both $p_{1} \\cdots p_{k}$ and $N$, so it divides $1$, impossible. Hence $p$ is not in the list.

---

## A classical existence proof without branch information

1. **Explain why the proof does not directly return one named pair.**

   The proof branches on whether $r = (\\sqrt{2})^{\\sqrt{2}}$ is rational. It does not decide this proposition. Excluded middle guarantees that one branch works, but the proof as written does not identify which.

2. **State the Gelfond--Schneider theorem and explain how it resolves the case.**

   The Gelfond--Schneider theorem states that if $\\alpha$ is algebraic with $\\alpha\\ne0,1$ and $\\beta$ is algebraic and irrational, then every value of $\\alpha^\\beta$ is transcendental. Thus the positive real value $(\\sqrt2)^{\\sqrt2}$ is transcendental and Case 2 holds.

3. **Give a constructive proof that there exist irrational $a, b$ with $a^{b}$ rational, using a different pair.**

   Take $a = \\sqrt{2}$ and $b = \\log_{\\sqrt{2}}(3)$. Then $a^{b} = 3$, which is rational. It remains to show that $b$ is irrational. If $b = p/q$ in lowest terms, then $(\\sqrt{2})^{p/q} = 3$, so $2^{p/(2q)} = 3$, so $2^{p} = 3^{2q}$. The left side is a power of $2$ and the right side is a power of $3$, so both must be $1$, implying $p = 0$, contradiction. Hence $b$ is irrational.

4. **Distinguish a proof that does not decide a case, independence from a theory, and a uniform undecidable problem.**

   The first describes information absent from one argument. Independence is relative to a named theory. Algorithmic undecidability normally means no single algorithm decides every input in a specified family. None follows just because one proof branches; here Gelfond--Schneider settles the particular rationality question.

---

## Choice principles are setting-sensitive

1. **Explain why projecting a dependent witness is not automatically the full set-theoretic axiom of choice.**

   The dependent premise $\\Pi x : A.\\, \\Sigma y : B.\\, R(x, y)$ already supplies a witness for each $x$. Projection merely unpacks data. Set-theoretic AC may involve families where nonemptiness is given propositionally (without witness), or quotient structures where canonical representatives do not exist.

2. **State the difference between countable choice and dependent choice.**

   Countable choice (AC$_{\\omega}$) asserts a choice sequence for every sequence of nonempty sets. Dependent choice (DC) allows the choice at step $n$ to depend on the choices at previous steps. DC is stronger than AC$_{\\omega}$.

3. **Why is unique choice often constructively acceptable?**

   If for every $x$ there is a unique $y$ with $R(x, y)$, then the witness is canonical. No arbitrary selection is needed; the uniqueness condition determines $y$ from $x$.

4. **In which foundations is the type-theoretic choice principle a theorem rather than an axiom?**

   In Martin-Löf type theory and the Calculus of Inductive Constructions (as implemented in Coq), the type-theoretic version of choice is provable from the rules of the system. It is not an axiom because the witnesses are already present in the types.

---

## Constructive real-number boundaries

1. **State the constructive definition of a Cauchy real and explain why a modulus is required.**

   A constructive Cauchy real can be presented as a rational sequence with a modulus $\\mu:\\mathbb Q^+\\to\\mathbb N$ satisfying $|x_m-x_n|<\\epsilon$ for $m,n\\ge\\mu(\\epsilon)$. A classically read or truncated existential $N$ does not supply this function; in a witness-bearing foundation, a proof of the quantified Cauchy condition may itself provide it.

2. **Explain why the least upper bound property is not constructively valid for arbitrary bounded sets.**

   The least upper bound of a bounded set may not be computable without additional information. Constructively, one can construct the supremum of a sequence with a known rate of convergence, but not of an arbitrary set.

3. **Give a constructive version of the intermediate value theorem.**

   If $f : [a, b] \\to \\mathbb{R}$ is continuous and $f(a) < 0 < f(b)$, and $f$ has a **uniform modulus of continuity**, then for every $\\epsilon > 0$, there exists $c \\in [a, b]$ with $|f(c)| < \\epsilon$. A root may not be exactly computable, but approximations are.

4. **Why is equality of reals not decidable in general?**

   Exact equality may require infinite information. Moduli let us approximate $|x-y|$ to any requested error and sometimes certify a separated inequality, but do not uniformly decide equality or every strict threshold case.

---

## Proof assistant trust map

1. **List the components of the trusted computing base for a kernel-checked theorem.**

   The checking computation trusts the kernel implementation, type theory and conversion rules, declared axioms, and execution stack. Rechecked proof terms are evidence rather than trusted code. Confidence in the intended result separately requires auditing the statement, definitions, and opaque imported declarations.

2. **Explain why a kernel-checked theorem does not certify that the formal statement matches the informal problem.**

   The formal statement is a syntactic object in the type theory. Its connection to the informal mathematical claim is established by human judgment in defining the encoding. The kernel checks the formal proof, not the adequacy of the encoding.

3. **What is the role of the elaborator, and why is it not part of the trusted base in most designs?**

   The elaborator translates user syntax into kernel terms. It is not trusted because the kernel independently checks the elaborated term. If the elaborator produces an incorrect term, the kernel rejects it.

4. **How can the trusted base be reduced?**

   By verifying the kernel in another system, by using independent proof checkers, by minimizing axioms, by auditing definitions and libraries, and by running on verified hardware and compilers.
`;export{e as default};