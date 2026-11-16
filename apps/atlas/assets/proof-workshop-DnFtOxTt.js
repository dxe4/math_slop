var e=`---
parent_id: book-introduction-to-proof
chapter_id: proof-workshop
title: "Proof Workshop"
level: undergraduate
license: CC BY-SA 4.0
---

# Proof Workshop

Knowing the names of proof methods is different from completing a proof. A problem may ask you to construct an object, justify that a process ends, rule out a proposed classification or show that two descriptions define the same set. Choosing a method requires reading those obligations first. The method is a means of meeting them, not a label attached to an unexplained calculation.

This workshop brings together the earlier chapters on logic, induction, sets, functions, divisibility and cardinality. Use [Reading and Writing Mathematics](reading-writing-mathematics.md) whenever a proposed inference is unclear. Each worked example below includes a complete argument, a plausible failure and a repair. The final project model shows how to assemble a theorem statement, motivation, proof, example, limitation and reflection without claiming a new research result.

## Choosing a method from the conclusion

For a universal conditional, fix an arbitrary object satisfying the hypotheses and ask what the conclusion means by definition. For an existence claim, look for a construction and verify every requirement. For uniqueness, compare an arbitrary candidate with the proposed one. For a universal claim that appears false, seek a counterexample inside its stated domain. A failed search is not a proof, but a successful counterexample is a complete disproof of that universal statement.

Induction is appropriate when objects are indexed by integers and a later case can be connected to earlier ones. It is not a way to extend an observed numerical pattern without providing that connection. Contradiction is useful when the negation offers a strong object to work with, such as a finite list allegedly containing every prime or a complete enumeration of infinitely many sequences. The contradiction must violate a declared assumption or an established fact; an inconvenient expression is not a contradiction.

**Definition 12.1 (A complete workshop argument).** A complete workshop argument declares its domain and hypotheses, states the exact claim, justifies its inferences and returns to the requested conclusion. When the task also asks for an example or a limitation, those are separate obligations. An example illustrates the theorem; it does not replace its universal argument.

Keep a short dependency list during discovery. If a proof uses the existence of a prime divisor, check whether that result has already been established. If an argument depends on choosing a fraction in lowest terms, state that choice and why its denominator is nonzero. This habit turns a collection of familiar gestures into a proof whose dependencies can be followed.

## Worked example (Strong induction and prime factors)

**Theorem 12.2 (Existence of prime factorisation).** Every integer $n\\ge2$ is a product of one or more primes.

*Proof.* We use strong induction. The base case $n=2$ holds because two is prime. Fix an integer $k\\ge2$ and suppose every integer $j$ with $2\\le j\\le k$ is a product of primes. Consider $k+1$. If it is prime, its one-factor expression proves the claim. Otherwise it is composite, so $k+1=ab$ for integers $a,b$ with $1<a<k+1$ and $1<b<k+1$. Thus $2\\le a,b\\le k$. The induction hypothesis supplies a prime product for each factor. Multiplying those finite products gives a prime product for $k+1$. Strong induction proves the claim for every $n\\ge2$. ∎

A flawed attempt says “factor $k+1$ into $a$ and $b$, and use the result for $k+1$ to factor them.” That invokes the very case still being proved. The repair is not the phrase “by induction” but the explicit inequalities placing each factor among the smaller cases. Another flawed attempt overlooks the prime case, where no factorisation into two smaller positive integers greater than one is available.

The statement proves existence only. It does not yet prove that two prime products for the same integer have the same factors. That uniqueness assertion needs further reasoning. Notice also that the theorem excludes one: the product here contains at least one prime, whereas the conventional empty product equals one. Stating the convention avoids treating an omitted endpoint as a contradiction.

For a concrete illustration, seventy-two can be split as eight times nine, and those smaller factors split into primes. This checks that the construction can be followed in one case. The induction argument, rather than that example, is what covers an arbitrary integer.

## Worked example (An irrationality proof and its hidden choices)

**Theorem 12.3.** The positive real square root of two is irrational.

*Proof.* Suppose instead that $\\sqrt2=p/q$ for integers $p,q$ with $q>0$ and with no common factor greater than one. Such a lowest-terms representation can be chosen for any rational number. Squaring and multiplying by $q^2$ gives $p^2=2q^2$, so $p^2$ is even. The parity result proved earlier implies that $p$ is even; write $p=2r$ for an integer $r$. Substitution gives $4r^2=2q^2$, hence $q^2=2r^2$. Thus $q^2$ is even and consequently $q$ is even. Both $p$ and $q$ are divisible by two, contradicting their lowest-terms choice. Therefore $\\sqrt2$ is irrational. ∎

The proof makes two choices that must not disappear during revision. The denominator is nonzero, so multiplication and division are legitimate. The fraction is in lowest terms, so a common factor really contradicts an assumption. Without that latter condition, concluding that numerator and denominator are both even would merely tell us that the fraction had not yet been reduced.

A proposed critique might say “the argument is wrong because a rational number has many fraction representations.” The observation is true but does not defeat the proof. It is enough that one representation can be chosen with the stated property. A useful critique identifies an inference that fails under the actual assumptions, rather than objecting to a fact the proof already handles.

The argument also shows why an appealing picture is insufficient. A diagonal drawn across a unit square suggests a length but does not decide whether that length is a quotient of integers. The arithmetic contradiction answers precisely that question. A decimal approximation supplies neither a terminating description of all its digits nor a proof about all possible fractions.

## Worked example (Six people and an exhaustive alternative)

Assume acquaintance is a symmetric relation between distinct people: for every pair, either they know one another or they do not. No claim about real social behaviour beyond this two-way classification is needed.

**Theorem 12.4.** Among six people, there are either three who are pairwise acquainted or three who are pairwise unacquainted.

*Proof.* Choose one person $A$. There are five other people. At least three of them are acquainted with $A$, or at least three are unacquainted with $A$: if each category contained at most two, together they would contain at most four people.

First suppose $A$ knows three people $B,C,D$. If any pair among $B,C,D$ knows one another, that pair together with $A$ forms three pairwise acquaintances. If no pair does, then $B,C,D$ themselves are three pairwise unacquainted people.

Now suppose instead that $A$ does not know three people $B,C,D$. If any pair among them does not know one another, that pair together with $A$ forms three pairwise unacquainted people. If every pair among them is acquainted, then $B,C,D$ form three pairwise acquaintances. These cases cover all possibilities, proving the theorem. ∎

A common incomplete proof handles only the first main case and says that it is enough because acquaintance and nonacquaintance are interchangeable. That symmetry can be used, but it should be identified precisely. Replacing every pair's classification by its opposite exchanges the two conclusions and preserves the assumptions. The expanded proof above spells out the second case so that no reader has to guess what “similarly” refers to.

Another attempted shortcut says that three people sharing an acquaintance must all know one another. The theorem does not assume that acquaintance is transitive. Its proof examines their mutual pairs instead. That examination supplies the alternative which the shortcut loses.

## Worked example (A diagonal construction)

Let $\\mathbb N=\\{1,2,3,\\ldots\\}$, and let $X$ be the set of all functions from $\\mathbb N$ to $\\{0,1\\}$. An element of $X$ is an infinite binary sequence, with one specified value at every positive integer.

**Theorem 12.5 (Cantor’s diagonal method).** There is no enumeration $f_1,f_2,f_3,\\ldots$ containing every element of $X$.

*Proof.* Suppose such an enumeration exists. Define $g:\\mathbb N\\to\\{0,1\\}$ by $g(n)=1-f_n(n)$. Each value is either zero or one, so $g$ is an element of $X$. For each positive integer $k$, the functions $g$ and $f_k$ differ at the input $k$, because $g(k)=1-f_k(k)\\ne f_k(k)$. Hence $g\\ne f_k$ for every $k$. This contradicts the claim that the enumeration contains every element of $X$. ∎

The construction defeats an arbitrary proposed complete list, not merely a list chosen badly. It also produces a legitimate member of the set being listed. Those are different requirements: inventing a sequence containing the symbol two would not contradict a list of binary sequences, because it would leave the specified set.

The seed argument for real numbers uses the same idea with decimal expansions. One chooses for each listed real in $[0,1]$ a decimal expansion without an infinite tail of nines, and chooses the diagonal digits to be one or two, always different from the corresponding listed digit. The new decimal has no ambiguous trailing-nine representation, differs from every listed number and lies strictly between zero and one. The convention about expansions is essential; comparing two written strings without controlling alternative representations would leave a gap. The binary-function proof avoids that representational issue by comparing functions at an input directly.

## Worked example (Increasing or decreasing subsequences)

**Theorem 12.6 (Erdős–Szekeres).** If $n$ is a positive integer, every sequence of $n^2+1$ distinct real numbers contains a strictly increasing or a strictly decreasing subsequence of length at least $n+1$.

*Proof.* Write the sequence as $a_1,\\ldots,a_{n^2+1}$. For each position $i$, let $I_i$ be the greatest length of a strictly increasing subsequence ending at $a_i$, and let $D_i$ be the corresponding greatest decreasing length. These maxima exist because only finitely many subsequences of a finite sequence end at a given position, and the one-term subsequence is always available.

Suppose, for a contradiction, that both kinds of length are at most $n$ at every position. Then every pair $(I_i,D_i)$ belongs to $\\{1,\\ldots,n\\}^2$, which contains $n^2$ pairs. We show that different positions give different pairs. If $i<j$, distinctness of the real entries gives either $a_i<a_j$ or $a_i>a_j$. In the first case, append $a_j$ to a longest increasing subsequence ending at $a_i$, obtaining $I_j\\ge I_i+1$. In the second case, the analogous decreasing construction gives $D_j\\ge D_i+1$. Thus the pairs differ in at least one coordinate.

We have placed $n^2+1$ distinct pairs in a set containing only $n^2$ pairs, which is impossible. Therefore at least one of the assumed bounds fails, giving the required subsequence. ∎

This is a construction inside a contradiction: the numbers attached to positions expose why a forbidden configuration cannot fit. A flawed proof comparing only neighbouring entries would find a run rather than a subsequence; nonadjacent selected positions are allowed. Another flaw is to omit distinctness of the real entries. A constant sequence has neither kind of strictly monotone subsequence of length two, so the hypothesis matters.

## A model project: classification with a sharp condition

**Question.** For which integers $n$ is $n^2-1$ divisible by eight? Small examples suggest that parity matters. The project should turn that observation into an exact classification and should explain both directions.

**Theorem 12.7.** For an integer $n$, eight divides $n^2-1$ if and only if $n$ is odd.

*Proof.* If $n$ is odd, write $n=2k+1$ with integer $k$. Then $n^2-1=4k(k+1)$. Among two consecutive integers $k,k+1$, one is even, so $k(k+1)=2r$ for an integer $r$. Consequently $n^2-1=8r$, proving divisibility by eight.

Conversely, if $n$ is even, its square is even and $n^2-1$ is odd. Any multiple of eight is even. Hence an even integer cannot satisfy the divisibility condition. Since every integer is even or odd, satisfying the condition forces $n$ to be odd. This proves both directions. ∎

For an example with a negative input, $n=-3$ gives $n^2-1=8$. Nothing in the witness argument required a positive input. A stronger proposed conclusion, divisibility by sixteen for every odd integer, fails already at $n=3$, where the value is eight. That counterexample identifies a limit of the conclusion without undermining the theorem proved.

The decisive step was recognising the even factor among two consecutive integers. This explains why direct expansion was useful and why an isolated list of squares was not enough. A project reflection should identify that reasoning choice, not invent a claim about how long another learner took or how effective the lesson was. The example, counterexample and reflection help someone understand the proof; they do not count as additional independent proofs of its universal claim.

## Choosing a manageable next project

A good first project combines two familiar tools while keeping its dependencies short. Classify when a finite sum is odd, construct a bijection between two sets, or prove a termination statement with a decreasing positive-integer quantity. Write the theorem before preparing an attractive diagram. Then test whether a missing endpoint, zero divisor or empty set invalidates the stated scope.

More advanced projects remain available in the original [Project: Prove a New Result](../functions-equations-proof/project-prove-a-new-result.md). Its exponential functional-equation argument uses differentiability at zero to obtain differentiability everywhere and then a first-order differential equation; the positivity and nonvanishing steps remain part of that argument. Its other proposed directions use continuity for functional equations, generating functions for Catalan recurrences, or differential equations and compact level sets for the Lotka–Volterra system. Those are later projects with additional preparation, not hidden requirements for this chapter.

The original [Advanced Proof Techniques and Synthesis](../functions-equations-proof/advanced-proof-techniques-synthesis.md) also retains its analysis constructions and its gamma–zeta integral proof on the stated half-plane. That proof's absolute-integrability justification and nonvanishing condition are essential dependencies, not details which an elementary workshop can suppress. Here the prime, diagonal and finite combinatorial arguments provide complete projects using the preparation already taught.

## Exercises

### Exercise 12.1
<a id="proof-workshop-ex-1"></a>

Prove by induction that $\\sum_{j=1}^n j^3=(n(n+1)/2)^2$ for every positive integer $n$. State the base case and the exact use of the induction hypothesis.

<details><summary>Hint 1</summary>

Separate the last cube from the sum with one additional term.

</details>
<details><summary>Hint 2</summary>

After substitution, factor out $(k+1)^2/4$ and inspect the remaining quadratic.

</details>
<details><summary>Solution</summary>

For $n=1$, both sides equal one. Suppose the identity holds for some positive integer $k$. Then the sum through $k+1$ equals $(k(k+1)/2)^2+(k+1)^3$ by the induction hypothesis applied to the first $k$ terms. Factoring gives $(k+1)^2(k^2+4k+4)/4=(k+1)^2(k+2)^2/4$, which is exactly $((k+1)(k+2)/2)^2$. Thus the truth of the identity at an arbitrary $k$ implies its truth at $k+1$. Induction proves it for every positive integer. The substitution does not assume the desired identity at $k+1$; it uses only the established formula for the shorter initial sum.

</details>

### Exercise 12.2
<a id="proof-workshop-ex-2"></a>

Prove that there are infinitely many primes. Your proof may use Theorem 12.2, but must explain why the new integer need not itself be prime.

<details><summary>Hint 1</summary>

Assume there is a complete finite list and form its product plus one.

</details>
<details><summary>Hint 2</summary>

Use a prime divisor of the new integer, rather than asserting that the new integer is prime.

</details>
<details><summary>Solution</summary>

Suppose the primes form a complete finite list $p_1,\\ldots,p_k$. The list is nonempty because two is prime. Let $N=p_1\\cdots p_k+1$, which is an integer greater than one. Theorem 12.2 supplies a prime divisor $q$ of $N$. If $q=p_i$ for some listed prime, it divides both $N$ and $p_1\\cdots p_k$, so it divides their difference one. A prime cannot divide one, a contradiction. Therefore $q$ is a prime absent from the allegedly complete list, and no such list exists. The integer $N$ may be composite; the argument needs only one of its prime divisors, whose existence has been justified.

</details>

### Exercise 12.3
<a id="proof-workshop-ex-3"></a>

Construct a bijection from $\\mathbb N=\\{1,2,\\ldots\\}$ to $\\mathbb Z$, and prove injectivity and surjectivity separately.

<details><summary>Hint 1</summary>

List zero first, then alternate positive and negative integers.

</details>
<details><summary>Hint 2</summary>

Treat the images zero, positive and negative as disjoint cases when proving uniqueness of an input.

</details>
<details><summary>Solution</summary>

Define $f(1)=0$, $f(2m)=m$ for positive integers $m$, and $f(2m+1)=-m$ for positive integers $m$. These cases partition the positive integers. The output zero occurs only at input one. If an output is positive $m$, its only possible input is $2m$; if it is negative $-m$ with positive $m$, its only possible input is $2m+1$. Thus equal outputs have equal inputs, proving injectivity. Every integer is either zero, a positive $m$, or a negative $-m$, and the displayed inputs give a preimage in each case, proving surjectivity. The convention that $\\mathbb N$ starts at one is part of this construction; a different convention would require a corresponding change of formula.

</details>

### Exercise 12.4
<a id="proof-workshop-ex-4"></a>

Show that the number six in Theorem 12.4 cannot be replaced by five. Describe an acquaintance pattern for five people with neither three mutual acquaintances nor three mutual strangers, and justify both absences.

<details><summary>Hint 1</summary>

Arrange five people cyclically and let each know exactly its two neighbours.

</details>
<details><summary>Hint 2</summary>

The complement of a cycle of length five is another cycle of length five; you may also check the two neighbours of each person directly.

</details>
<details><summary>Solution</summary>

Label the people $0,1,2,3,4$ cyclically. Declare two distinct people acquainted exactly when their labels differ by one modulo five. For any chosen person, its two acquaintances are not acquainted with one another: their labels differ by two modulo five. Thus no triple can be mutually acquainted, because choosing any member of such a triple would require its two neighbours to know one another. The two people unacquainted with a chosen person have labels two steps forward and two steps backward; those labels differ by one modulo five, so those two people know one another. Hence no triple can be mutually unacquainted either. The pattern satisfies symmetry and gives the required counterexample on five people.

</details>

### Exercise 12.5
<a id="proof-workshop-ex-5"></a>

Prove that the set of all functions $\\mathbb N\\to\\{2,7\\}$ cannot be enumerated. Explain why your new function belongs to the same set.

<details><summary>Hint 1</summary>

At the nth input, choose the other permitted value from the nth listed function.

</details>
<details><summary>Hint 2</summary>

For a value equal to two or seven, subtracting it from nine switches to the other allowed value.

</details>
<details><summary>Solution</summary>

Suppose $f_1,f_2,\\ldots$ enumerates every function from $\\mathbb N$ to $\\{2,7\\}$. Define $g(n)=9-f_n(n)$. If the listed diagonal value is two, the new value is seven, and if it is seven, the new value is two. Thus $g$ is a function from the required domain to the required codomain. For every positive integer $k$, $g(k)\\ne f_k(k)$, so $g\\ne f_k$. Consequently $g$ is absent from the supposedly exhaustive list, a contradiction. Membership and disagreement are both necessary: using a new symbol outside the codomain would not produce a missing member of the set under discussion.

</details>

### Exercise 12.6
<a id="proof-workshop-ex-6"></a>

Classify the positive integers $n$ for which the triangular number $T_n=n(n+1)/2$ is odd. Prove that your classification covers every positive integer.

<details><summary>Hint 1</summary>

Separate the four possible residues of n modulo four.

</details>
<details><summary>Hint 2</summary>

Cancel the factor two in each residue case before deciding the parity of the product.

</details>
<details><summary>Solution</summary>

Write $n=4q+r$ with $r\\in\\{0,1,2,3\\}$ and a nonnegative integer $q$, excluding the unused case $n=0$. For $r=0$, $T_n=2q(4q+1)$ is even. For $r=1$, $T_n=(4q+1)(2q+1)$ is odd because both factors are odd. For $r=2$, $T_n=(2q+1)(4q+3)$ is also odd. For $r=3$, $T_n=(4q+3)(2q+2)$ is even. The division algorithm places every positive integer in exactly one of these residue classes. Therefore $T_n$ is odd exactly when $n\\equiv1$ or $2\\pmod4$. This is both a necessity and a sufficiency proof, not merely a pattern observed in early triangular numbers.

</details>

### Exercise 12.7
<a id="proof-workshop-ex-7"></a>

Prove that six divides $n^3-n$ for every integer $n$, including negative integers and zero. Identify the separate reasons for factors two and three.

<details><summary>Hint 1</summary>

Factor the expression into three consecutive integers.

</details>
<details><summary>Hint 2</summary>

Use parity and residues modulo three; explain why divisibility by two and three together implies divisibility by six here.

</details>
<details><summary>Solution</summary>

We have $n^3-n=(n-1)n(n+1)$. Among three consecutive integers at least one is even, so the product is even. They represent all three residue classes modulo three, so one is divisible by three, making the product $3k$ for some integer $k$. Since $3k$ is even and three is odd, $k$ must be even: if it were odd, the product of two odd integers would be odd. Thus $k=2r$ for an integer $r$, and the product is $6r$. The parity and residue arguments apply to every integer, not just positive ones; at zero the expression is zero, which is also a multiple of six.

</details>

### Exercise 12.8
<a id="proof-workshop-ex-8"></a>

Critique the following induction argument: “Any group of n objects has a single colour. It is true for one object. For k+1 objects, the first k share a colour and the last k share a colour. Their overlap makes the two colours equal.” Locate the exact failing step and explain why simply adding more successful examples would not repair it.

<details><summary>Hint 1</summary>

Examine the first attempted induction step rather than assuming the overlap is nonempty.

</details>
<details><summary>Hint 2</summary>

When k equals one, the first and last one-element groups have no shared object.

</details>
<details><summary>Solution</summary>

At the step from one object to two, the two one-object subgroups are disjoint. They need not have the same colour, so there is no common object's colour forcing agreement. A red object and a blue object give an explicit counterexample to the claimed two-object conclusion. For $k\\ge2$, the indicated subgroups have $k-1$ common objects, so the overlap reasoning would connect their colours if the induction hypothesis held. But the needed starting claim for two objects is false, and the first step is invalid. Checking additional single-colour examples proves only those examples; it neither repairs the missing implication nor makes the universal two-object claim true. A satisfactory critique identifies the empty overlap and supplies the defeating two-colour case.

</details>

### Exercise 12.9
<a id="proof-workshop-ex-9"></a>

Let $f:\\mathbb Z\\to\\mathbb R$ satisfy $f(m+n)=f(m)+f(n)$ for all integers $m,n$. Prove that there is a real constant c with $f(n)=cn$ for every integer n. Verify the converse and explain why no continuity assumption is needed on this domain.

<details><summary>Hint 1</summary>

Find f at zero, then use repeated addition starting from f at one.

</details>
<details><summary>Hint 2</summary>

Use $n+(-n)=0$ to cover the negative integers after proving the nonnegative case.

</details>
<details><summary>Solution</summary>

Putting $m=n=0$ gives $f(0)=2f(0)$ and hence $f(0)=0$. Let $c=f(1)$. Induction on nonnegative integers gives $f(n)=nc$: the zero case holds, and $f(k+1)=f(k)+f(1)=kc+c=(k+1)c$. For a positive integer $n$, the identity $0=f(0)=f(n)+f(-n)$ yields $f(-n)=-nc$, so the same formula covers negative integers. Conversely, for any real c the rule $f(n)=cn$ satisfies $f(m+n)=c(m+n)=cm+cn$. Every integer is obtained from one by finitely many additions and a possible sign change, so the algebraic equation alone determines all values. This does not establish the analogous classification on the real domain; extending from rational to arbitrary real inputs is a different problem.

</details>

### Exercise 12.10
<a id="proof-workshop-ex-10"></a>

Write a complete short project proving $n^2\\ge n$ for every integer n. Include a theorem, proof, example, limitation and explanation of the decisive step. Provide a criterion by which another student could check your submission.

<details><summary>Hint 1</summary>

Factor the difference and separate integers at least one from integers at most zero.

</details>
<details><summary>Hint 2</summary>

For a limitation, test a real input strictly between zero and one; it is outside the integer domain.

</details>
<details><summary>Solution</summary>

A model theorem is: for every integer $n$, $n^2\\ge n$, with equality exactly at zero and one. To prove it, write $n^2-n=n(n-1)$. If $n\\ge1$, both factors are nonnegative. If $n\\le0$, both are nonpositive and their product is nonnegative. Every integer belongs to one of these cases, so the inequality follows. The product is zero exactly when $n=0$ or $n=1$. For example, $n=-2$ gives $4\\ge-2$. The domain cannot be replaced by all real numbers: at $x=1/2$, $x^2=1/4<x$. The decisive step is the integer-domain split, which leaves no input between zero and one. A checking criterion is whether the submission states integrality, covers both exhaustive cases, justifies the product signs, checks its example and supplies a genuine counterexample to the enlarged domain. Each item has been exhibited here, so the criterion is accompanied by a complete model rather than an unspecified personal response.

</details>

## Sources

This chapter develops the project structure in Euler's [Project: Prove a New Result](../functions-equations-proof/project-prove-a-new-result.md) and the elementary proof arguments in [Advanced Proof Techniques and Synthesis](../functions-equations-proof/advanced-proof-techniques-synthesis.md). Their source files and their higher-level mathematical examples remain available with their stated hypotheses. Richard Hammack's author-hosted [*Book of Proof*](https://richardhammack.github.io/BookOfProof/index.html), especially its chapters on direct proof, contradiction, induction and cardinality, is a benchmark and further-reading route. The elementary arguments and model exercise solutions are developed in full here, with the local Euler material above providing their starting points.

## Summary

Choose methods by the conclusion's obligations, and combine them only when every connection is justified. Strong induction needs smaller cases, contradiction needs an actual impossibility, construction needs membership and verification, and a diagonal argument must defeat an arbitrary complete list. A finished project states its theorem, proves it, checks an example and identifies a real limitation. When discussing another student’s proof, locate the first unsupported step and suggest a precise repair. The [LaTeX and Typesetting appendix](back-matter/latex-and-typesetting.md) explains how to present the resulting structure without confusing a well-formatted page with a correct proof.
`;export{e as default};