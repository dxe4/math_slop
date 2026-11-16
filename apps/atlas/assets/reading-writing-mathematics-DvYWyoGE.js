var e=`---
parent_id: book-introduction-to-proof
chapter_id: reading-writing-mathematics
title: "Reading and Writing Mathematics"
level: undergraduate
license: CC BY-SA 4.0
---

# Reading and Writing Mathematics

A mathematical sentence can be short because it asks the reader to supply a great deal. The sentence “the sum is even” may hide the declaration of two integers, the definition of evenness, two existential witnesses, an algebraic calculation and an appeal to closure under addition. Reading successfully means recovering those obligations. Writing successfully means giving another reader enough information to recover them without guessing. These are two directions of the same activity.

This chapter assumes the earlier work on statements, quantifiers, direct proof, cases, induction, sets and functions. It does not assume that an unexplained calculation counts as a proof. You will learn to annotate a statement, locate the first unsupported inference, repair a claim without changing its intended domain silently, and revise a discovery draft into an argument another student can examine. The [Proof Workshop](proof-workshop.md) then combines these habits in longer problems.

## Reading a statement in five passes

**Definition 11.1 (A statement's reading record).** A reading record identifies the objects, hypotheses, quantifiers, conclusion and dependencies of a mathematical statement. These five entries describe what the statement actually says; they are not a substitute for establishing that it is true.

Begin with objects. Is a letter an integer, a real number, a set, a function or an index? The same symbol can participate in different operations in different contexts. The expression “divide by $a$” has different consequences if $a$ is a nonzero real number, an arbitrary integer or a matrix. A declaration of type determines which definitions and operations are available. If the source has omitted the declaration, record that omission before choosing a convenient interpretation.

Next list the hypotheses separately from the conclusion. In “if $n$ is an odd integer, then $n^2$ is odd,” integrality and oddness are assumptions. Oddness of the square is the goal. It is a mistake to start by writing the square as an odd number and then derive the hypothesis, unless every implication is reversed and justified. A conditional statement supplies permission to assume its antecedent during its proof, not permission to assume its conclusion.

Then expand the quantifiers, including those hidden in familiar words. “The function is injective” refers to every pair of inputs in its domain. “There is a largest element” asks for an element belonging to the set which dominates every element of that set. “Bounded above” does not require the upper bound itself to belong to the set. These are different obligations even when an informal sketch makes them look similar.

Finally write the exact conclusion and list dependencies. A proof of existence must produce or establish an object. A uniqueness claim must rule out a second possibility. A set equality requires both inclusions. A claimed classification needs necessity and sufficiency. Dependencies include definitions as well as named theorems: saying that an integer has a prime divisor is an appeal to a result, not an explanation merely because the result feels familiar.

The five passes need not become five paragraphs in a finished proof. They are a way of discovering where a paragraph needs explanation. Once an assumption has been declared and its use is clear, it need not be repeated at every line. The purpose is to make dependence visible, not to make a simple argument unreadable through repetition.

## Worked example (Expanding an elementary proof)

**Theorem 11.2 (Sum of two even integers).** If $m$ and $n$ are even integers, then $m+n$ is even.

*Proof.* Because $m$ is even, there is an integer $a$ such that $m=2a$. Because $n$ is even, there is an integer $b$ such that $n=2b$. Consequently,

$$m+n=2a+2b=2(a+b).$$

The sum $a+b$ is an integer. Thus $a+b$ is a witness satisfying the definition of evenness for $m+n$, and $m+n$ is even. ∎

The objects are integers throughout. The two witnesses need different names: writing both numbers as $2a$ would silently assume the numbers were equal. The distributive law explains the displayed equality, and closure of the integers under addition ensures that the proposed witness has the required type. None of these facts follows merely from the appearance of the digit two in a calculation.

Here is a critique of a compressed attempt: “Both numbers contain a two, so their sum contains a two.” The sentence gestures towards factorisation but does not distinguish a factor from a decimal digit. For example, the decimal numeral twelve contains no digit two in some other numeral systems, while its evenness is unchanged. The repair is to exhibit the integer witness in the definition. The short finished proof above does exactly that without discussing representations unnecessarily.

A useful reading question is whether each hypothesis really entered the proof. If only one summand were even, the argument could not introduce both witnesses. Indeed, two and three provide a counterexample to the proposed stronger claim. This shows why removing a hypothesis must be a mathematical decision, not a stylistic deletion.

## Translation, truth and permissible repair

Words and symbols should check one another. Consider the sentence “the sum of the squares of two real numbers is at most the square of their sum.” Its literal translation is

$$a^2+b^2\\le(a+b)^2\\qquad(a,b\\in\\mathbb R).$$

Expansion shows that the displayed inequality is equivalent to $ab\\ge0$. Thus the unrestricted verbal claim is false: the inputs one and negative one refute it. A repair must say what has changed. One correct version assumes that $a$ and $b$ are nonnegative. A more exact version states that the inequality holds if and only if their product is nonnegative. The latter includes the case where both numbers are negative and the cases where at least one is zero.

Do not conceal this repair by adding the hypothesis only inside the proof. A theorem statement claiming all real inputs followed by a proof beginning “suppose both inputs are positive” has proved a different statement. Readers need to know whether the conclusion was weakened, the hypotheses strengthened or the proof replaced. Keeping those possibilities separate makes correction an intelligible mathematical act.

For an absolute-value example, the statement $|x-3|<0.2$ means $2.8<x<3.2$ when $x$ is real. If $x$ is complex, the same absolute-value notation describes a disk rather than a real interval. No amount of confident prose can remove the need to state the domain. Translation preserves meaning only after the objects and their operations have been fixed.

## Worked example (A counterexample and a complete repair)

A proposed theorem says that $\\sqrt{x^2}=x$ for every real $x$. A proposed proof says that squaring both sides gives $x^2=x^2$, so the original equality follows.

**Critique.** Squaring a real equality preserves truth, but the converse implication is not generally valid. The real numbers two and negative two have the same square without being equal. In the proposed theorem, $x=-2$ gives $\\sqrt{(-2)^2}=2\\ne-2$. The calculation after squaring has lost the sign condition.

**Theorem 11.3 (Principal square root of a square).** For every real $x$, $\\sqrt{x^2}=|x|$.

*Proof.* The principal square root of a nonnegative real number is its nonnegative square root. If $x\\ge0$, then $x$ is nonnegative and its square is $x^2$, so $\\sqrt{x^2}=x=|x|$. If $x<0$, then $-x>0$ and $(-x)^2=x^2$, so $\\sqrt{x^2}=-x=|x|$. These cases cover every real input. ∎

This repair preserves the full real domain and changes the right-hand side. Alternatively, restricting the original claim to $x\\ge0$ would also make it true. State which repair you intend. The proof makes its dependency on the definition of principal square root visible, covers zero explicitly and explains why the two cases are exhaustive. It establishes an identity; checking the input negative two only refuted the earlier claim.

## Quantifier order is dependence information

For a real sequence $(a_n)_{n\\ge1}$, the phrase “bounded above” means that there exists one real number $M$ such that $a_n\\le M$ for every positive integer $n$. The bound is selected once for the whole sequence. The much weaker sentence “for each $n$ there is an $M$ with $a_n\\le M$” allows the bound to change with the chosen index. Every real sequence satisfies that weaker sentence by choosing $M=a_n$.

The same distinction explains a familiar statement about convergence. In the usual definition, for every positive tolerance $\\varepsilon$ there is a threshold $N$ such that all terms with $n\\ge N$ lie within that tolerance of the proposed limit. The threshold may depend on the tolerance. Requiring one threshold to work for every positive tolerance forces every term beyond it to equal the proposed limit exactly. To see this, if a later term had positive distance $d$ from the limit, the tolerance $d/2$ would defeat the claim.

You do not need a course in analysis to read that dependence. The logical structure already tells you which choices may use previously specified information. A witness chosen before an input cannot secretly be defined using that input. A proof that changes the order of these choices needs a separate justification.

**Definition 11.4 (Dependency check).** A dependency check asks, for each introduced witness or construction, which previously fixed objects it may depend on. An existence proof fails if its proposed object requires information that the statement does not permit it to use.

This check also helps with counterexamples. To negate “for every real $x$ there is an integer $n>x$,” choose a real $x$ for which every integer satisfies $n\\le x$. Both quantifiers change type and the comparison is negated. Whether that negation is true is a separate question from whether it is the correct logical negation.

## Worked example (Reading and repairing a set proof)

Suppose $A,B,C$ are subsets of a common set $U$. A student claims that $A\\cap(B\\cup C)=(A\\cap B)\\cup(A\\cap C)$ and writes: “Take $x$ in the left side. Then $x$ is in both intersections. The result follows.”

**Critique.** Membership in $B\\cup C$ means membership in at least one of $B,C$, not necessarily both. The attempt also proves only one inclusion, whereas equality requires both. A correct theorem has been given an incorrect argument.

**Theorem 11.5 (Intersection distributes over union).** For subsets $A,B,C$ of $U$,

$$A\\cap(B\\cup C)=(A\\cap B)\\cup(A\\cap C).$$

*Proof.* Let $x\\in A\\cap(B\\cup C)$. Then $x\\in A$, and either $x\\in B$ or $x\\in C$. In the first case $x\\in A\\cap B$, and in the second $x\\in A\\cap C$. In either case $x\\in(A\\cap B)\\cup(A\\cap C)$. This proves the first inclusion.

Conversely, suppose $x\\in(A\\cap B)\\cup(A\\cap C)$. Then $x$ lies in at least one of those intersections. Either alternative gives $x\\in A$ and gives membership in at least one of $B,C$. Thus $x\\in A\\cap(B\\cup C)$. This proves the reverse inclusion and hence equality. ∎

The repair uses an arbitrary element, not a representative element chosen because it is convenient. It does not assume the sets are nonempty; an implication with impossible membership assumptions is harmless. A diagram can suggest the identity, but the element argument explains why every possible membership pattern obeys it.

## From discovery notes to a finished argument

A discovery draft often runs backwards. You want a conclusion, ask what would imply it, expand an expression and try a different route. Those notes are valuable. Their order need not be the order in which another reader should meet the proof. Keep the exploration, but write a separate final argument beginning with the actual hypotheses and proceeding through justified steps to the stated conclusion.

For a contrapositive proof, announce the change of viewpoint. To prove that an integer with an even square is even, assume instead that the integer is odd, introduce an integer witness and show that its square is odd. Finishing with a reminder about the contrapositive connects the argument to the original goal. A reader should not have to infer that connection from a string of odd-number calculations.

Introduce notation before using it, and use it consistently. If $A$ is an $n$ by $n$ matrix over a field and $b$ is a column vector of length $n$, then the claim that an invertible $A$ gives a unique solution to $Ax=b$ is meaningful. Merely writing “$A$ is invertible, therefore the system has a solution” leaves the system and the type of its unknown undeclared. Existence can be shown by substituting $A^{-1}b$; uniqueness requires an argument as well. You can understand the writing obligation before learning determinant theory.

A lemma is a result used to establish another result; a corollary is a consequence drawn from a result already proved. Neither word measures the difficulty of the argument. Choose labels to show the structure of the explanation. References should identify the result being used and confirm that its hypotheses apply. A citation to a whole book is not a reason why a discontinuous function has the conclusion of a theorem about continuous functions.

Definitions deserve the same care. A definition gives a determinate condition for membership in a class of objects, but does not necessarily provide an algorithm deciding that condition in finite time. Evenness has a simple decision procedure on a given integer. Not every mathematical property does. Distinguishing a precise definition from an effective procedure prevents an unnecessary and false demand on the definition of a more complicated concept.

Finally, revise prose without silently strengthening its mathematical claims. Replace “obvious” with the missing reason when the reason is important. Keep the domains and exceptional cases even when they make a sentence longer. A polished page with an unjustified inference is still an incomplete argument. A rough page with a visible gap is often easier to improve because the mathematical work still needed has been identified honestly.

## Exercises

### Exercise 11.1
<a id="reading-writing-mathematics-ex-1"></a>

Negate “for every real $x$ there is an integer $n$ with $n>x$,” and explain which objects the negation asks you to find.

<details><summary>Hint 1</summary>

Negate the outer universal quantifier first.

</details>
<details><summary>Hint 2</summary>

The negation of a strict greater-than comparison is a less-than-or-equal comparison.

</details>
<details><summary>Solution</summary>

The negation is: there exists a real $x$ such that every integer $n$ satisfies $n\\le x$. It asks for a single real upper bound on all integers, rather than a different real number for each integer. The outer universal becomes existential, the inner existential becomes universal, and $n>x$ becomes $n\\le x$. The original claim is true by the unboundedness of the integers, so its negation is false, but that truth assessment is distinct from the logical task of forming the negation.

</details>

### Exercise 11.2
<a id="reading-writing-mathematics-ex-2"></a>

A rectangle has side lengths known to lie in $[11.9,12.1]$ cm and $[4.9,5.1]$ cm. Give a guaranteed area interval and explain whether it is a probability statement.

<details><summary>Hint 1</summary>

Check the signs of every endpoint before multiplying bounds.

</details>
<details><summary>Hint 2</summary>

For positive factors the smallest and largest products occur at the corresponding endpoints.

</details>
<details><summary>Solution</summary>

Both side intervals contain only positive values. If the lengths are $l,w$, multiplication preserves the relevant inequalities, giving $11.9(4.9)\\le lw\\le12.1(5.1)$. These endpoint products are $58.31$ and $61.71$, so the area lies in $[58.31,61.71]$ square centimetres. The endpoint choices are permitted, so without further information neither endpoint can be improved. This is a deterministic consequence of the supplied length bounds. No distribution of measurement errors has been supplied, so it does not assert a probability or a confidence level.

</details>

### Exercise 11.3
<a id="reading-writing-mathematics-ex-3"></a>

Write a linear, finished proof of: if an integer $n$ has an even square, then $n$ is even. Identify where integrality enters.

<details><summary>Hint 1</summary>

Use the contrapositive and the definition of an odd integer.

</details>
<details><summary>Hint 2</summary>

After squaring $2k+1$, exhibit an integer witness for oddness.

</details>
<details><summary>Solution</summary>

We prove the contrapositive. Suppose the integer $n$ is odd. There is an integer $k$ such that $n=2k+1$. Therefore $n^2=4k^2+4k+1=2(2k^2+2k)+1$. The quantity $2k^2+2k$ is an integer by closure under addition and multiplication, so the square is odd. Thus an odd integer cannot have an even square. Since every integer is either even or odd, an integer whose square is even must be even. Integrality licenses the parity alternatives, the witness $k$ and the closure claim; the argument is not a statement about arbitrary real numbers called even informally.

</details>

### Exercise 11.4
<a id="reading-writing-mathematics-ex-4"></a>

Define boundedness above for a real sequence indexed by the positive integers. Give a bounded example and prove that $a_n=n$ is not bounded above.

<details><summary>Hint 1</summary>

The upper bound must be chosen before the arbitrary index.

</details>
<details><summary>Hint 2</summary>

Given a proposed real bound, use the unboundedness of the positive integers to exceed it.

</details>
<details><summary>Solution</summary>

The sequence is bounded above if there exists a real $M$ such that $a_n\\le M$ for every positive integer $n$. The sequence $a_n=1-1/n$ has upper bound one, because $1/n>0$ and hence $a_n<1$. For $a_n=n$, let $M$ be any proposed real upper bound. There is a positive integer $n>M$ by the Archimedean property, so $a_n=n>M$, contradicting the requirement. Since this defeats every proposed $M$, the sequence is unbounded above. A largest term is not required in the bounded example: its stated bound is never attained.

</details>

### Exercise 11.5
<a id="reading-writing-mathematics-ex-5"></a>

A student writes “if $a^2=b^2$, dividing by $a-b$ gives $a+b=0$.” State the missing condition and give a complete classification of the real solutions of $a^2=b^2$.

<details><summary>Hint 1</summary>

Move both squares to one side and factor before dividing.

</details>
<details><summary>Hint 2</summary>

A zero product over the real numbers has at least one zero factor; keep both alternatives.

</details>
<details><summary>Solution</summary>

The proposed division needs $a-b\\ne0$, which the hypothesis does not provide. In fact $(a,b)=(1,1)$ satisfies the hypothesis and makes that division undefined. Factoring gives $(a-b)(a+b)=0$. Over the real numbers this holds if and only if $a-b=0$ or $a+b=0$, so the solutions are exactly $a=b$ or $a=-b$. Conversely either alternative plainly gives equal squares. When $a=b$, one must not cancel the zero factor; when $a\\ne b$, division is allowed and yields the second alternative. This argument both identifies the gap and supplies necessity and sufficiency.

</details>

### Exercise 11.6
<a id="reading-writing-mathematics-ex-6"></a>

Let $A$ be an invertible square matrix over a field and let $b$ be a compatible column vector. Write existence and uniqueness arguments for $Ax=b$ without invoking a determinant.

<details><summary>Hint 1</summary>

Propose an explicit vector using the inverse and verify it by substitution.

</details>
<details><summary>Hint 2</summary>

For uniqueness, start with an arbitrary vector solving the equation and multiply by the inverse.

</details>
<details><summary>Solution</summary>

Write $A$ as an $n$ by $n$ matrix over a field $\\mathbb F$, with $b\\in\\mathbb F^n$. Define $x_0=A^{-1}b$. Then $Ax_0=AA^{-1}b=Ib=b$, so a solution exists. If $x\\in\\mathbb F^n$ is any solution, multiplying $Ax=b$ on the left by $A^{-1}$ gives $x=A^{-1}b=x_0$. Thus every solution equals the constructed one, proving uniqueness. This uses only the defining two-sided inverse identities and matrix associativity. The model explanation must contain the dimensions, the witness and the argument that no other solution is possible; simply naming the inverse is not all three.

</details>

### Exercise 11.7
<a id="reading-writing-mathematics-ex-7"></a>

For positive integers $m>1$, repeatedly replace $m$ by $\\lfloor m/2\\rfloor$, stopping when the value is one. Prove termination, and explain why strict decrease alone would not suffice for a process on positive real numbers.

<details><summary>Hint 1</summary>

Show that each performed step remains a positive integer and strictly lowers the current value.

</details>
<details><summary>Hint 2</summary>

Compare integer descent with repeatedly halving the positive real number one.

</details>
<details><summary>Solution</summary>

For every integer $m>1$, we have $m\\ge2$, so $1\\le\\lfloor m/2\\rfloor<m$. Consequently each performed step stays inside the positive integers and strictly decreases the current value. An infinite such run would be an infinite strictly decreasing sequence of positive integers, contradicting their well-ordering. Therefore the process must reach the only positive integer at which the rule stops, namely one. On positive real numbers, the values $1,1/2,1/4,\\ldots$ decrease forever while remaining positive. Thus the well-ordered integer domain, not the phrase “strictly decreasing” by itself, provides the termination argument.

</details>

### Exercise 11.8
<a id="reading-writing-mathematics-ex-8"></a>

For real $x\\ge0$, justify the identity $\\sqrt{x^2+1}-x=1/(\\sqrt{x^2+1}+x)$. Explain why the second form can be preferable in finite-precision arithmetic for large $x$, without claiming an error bound not supplied by the problem.

<details><summary>Hint 1</summary>

Multiply by the conjugate and establish that its denominator cannot vanish.

</details>
<details><summary>Hint 2</summary>

Compare subtraction of nearby positive values with addition of them.

</details>
<details><summary>Solution</summary>

For $x\\ge0$, $\\sqrt{x^2+1}>x$, so $\\sqrt{x^2+1}+x$ is positive. Multiplying numerator and denominator by this sum gives numerator $(x^2+1)-x^2=1$, proving the identity on the stated domain. For large $x$, the two positive quantities in the original subtraction are close relative to their sizes. Rounding them before subtraction can therefore leave a small difference with poor relative accuracy. The second form adds them and then takes a reciprocal, avoiding that particular cancellation. This qualitative explanation does not bound all errors: intermediate overflow, the square-root computation and the arithmetic format still matter. An exact algebraic identity is not a universal numerical guarantee.

</details>

### Exercise 11.9
<a id="reading-writing-mathematics-ex-9"></a>

A supplied affine model predicts $y=ax+b$. Every observation is taken at the same input $x=c$. Explain precisely what combination of the two parameters can be determined from exact observations, and exhibit different parameters with identical predictions at that input.

<details><summary>Hint 1</summary>

At the observed input, substitute $c$ before deciding what information the data contain.

</details>
<details><summary>Hint 2</summary>

Change the slope by a real amount and compensate by a corresponding change in the intercept.

</details>
<details><summary>Solution</summary>

Every exact observation constrains only $ac+b$. If they are consistent with a common output $d$, then the compatible parameter pairs satisfy $ac+b=d$. For any real $t$, the pair $(a+t,b-tc)$ gives $(a+t)c+(b-tc)=ac+b$, so it predicts the same output at every observed input. Choosing any nonzero $t$ produces a different slope and hence a different parameter pair. Thus these observations can determine the combined value $ac+b$, but not the two parameters separately. If exact outputs at that same input disagree, no pair fits the supplied exact model; the conclusion is incompatibility rather than a uniquely identified pair.

</details>

### Exercise 11.10
<a id="reading-writing-mathematics-ex-10"></a>

A program checks a formula at every integer from one through one million. Write a precise conclusion it supports, then explain what is still required to assert the formula for every positive integer. Give a model critique rather than only saying that more work is needed.

<details><summary>Hint 1</summary>

Distinguish the finite tested domain from the infinite proposed domain.

</details>
<details><summary>Hint 2</summary>

Ask what a proof by induction would have to add beyond a list of successful cases.

</details>
<details><summary>Solution</summary>

Subject to a correct program, faithful input translation and suitable arithmetic, the computation establishes the formula at each of the specified million inputs. It does not examine larger integers. A universal conclusion needs an additional argument, such as a proof of a base case and a valid implication from an arbitrary case to its successor. The million successful checks supply no such implication automatically. A model critique is: “The computed evidence covers the finite interval stated. The extension to every positive integer is unsupported because no step connects an arbitrary untested input with established facts. Supply that step or restrict the conclusion to the tested interval.” On a genuinely finite domain that was exhausted, the same form of complete checking could suffice, with the computational qualifications still explicit.

</details>

## Sources

This chapter develops the mathematical examples and reading protocol in Euler's [Read mathematics actively](../mathematical-toolkit/read-mathematics-actively.md) and [Mathematical Writing](../mathematical-toolkit/mathematical-writing.md), whose source files remain available. Their analysis illustrations, including the differentiability conditions in the stationary-point contrapositive and the Mean Value Theorem argument for monotonicity, retain their original hypotheses; they are further reading after the corresponding calculus results, not additional assumptions for the elementary arguments here. Richard Hammack's [*Book of Proof*, author-hosted contents and text](https://richardhammack.github.io/BookOfProof/index.html) provides a comparison route through direct proof, contrapositive, mathematical writing, functions and induction. The treatment combines new explanations with the local Euler material listed above; the external book is a benchmark and further-reading source.

## Summary

Read by identifying objects, assumptions, quantifiers, conclusions and dependencies. Write by declaring the same information in an order another reader can follow. A counterexample defeats a universal claim, while an identity needs a general argument; a repaired theorem must announce its changed hypotheses or conclusion. Keep witnesses within their permitted dependencies, preserve domains during algebra, and distinguish a numerical observation from the statement it actually supports. In [Proof Workshop](proof-workshop.md), these habits turn a collection of techniques into complete arguments with examples, limits and explicit reasons.
`;export{e as default};