
# Proof teaching coordinates examples and necessity

## The gap between examples and proof

Examples can suggest, illustrate, and convince. Finitely many successful instances do not prove a universal claim on an infinite domain unless an argument establishes that those instances exhaust all relevant cases. On a finite domain, a complete checked enumeration can itself be a proof. Checking that the sum of the first $n$ odd positive integers is $n^{2}$ for $n=1,2,3,4,5$ increases confidence; it does not establish the statement for all positive integers. The transition from empirical observation to deductive certainty is one of the most difficult shifts in mathematical learning, and it is a central responsibility of mathematics teaching.

This chapter examines why examples are insufficient, how visual and algebraic proofs can converge on the same reason, and what teachers can do to help learners experience proof as explanatory rather than merely verificatory.

## Why examples cannot close the gap

Consider the conjecture: the sum of the first $n$ odd positive integers is $n^{2}$.

For $n=1$: $1=1^{2}$.

For $n=2$: $1+3=4=2^{2}$.

For $n=3$: $1+3+5=9=3^{2}$.

For $n=4$: $1+3+5+7=16=4^{2}$.

The pattern is compelling. A learner who stops here, however, has not proved the statement. A counterexample to a different conjecture shows why vigilance matters: the polynomial $n^{2}+n+41$ yields primes for $n=0,1,2,\dots,39$, but fails at $n=40$ because $40^{2}+40+41=1681=41^{2}$. A pattern that holds for forty cases may fail at the forty-first.

The educational challenge is not merely to tell learners that examples are insufficient. It is to help them see what kind of argument would be sufficient, and why it carries a different epistemic status.

## Visual proof: growing a square

Imagine an $n\times n$ square made of unit squares. To grow it to an $(n+1)\times(n+1)$ square, we add an L-shaped border. How many unit squares are in that border?

The border consists of:
- $n$ squares along the top row,
- $n$ squares along the right column,
- $1$ square in the top-right corner.

Total: $2n+1$. But $2n+1$ is exactly the $(n+1)$-st odd positive integer. Therefore:

$$(n+1)^{2}=n^{2}+(2n+1).$$

Starting from $1^{2}=1$ and repeatedly adding the next odd integer generates every square. The visual proof makes the algebraic step concrete: the L-shape is the geometric counterpart of the algebraic term $2n+1$.

## Algebraic proof by induction

Mathematical induction formalises the same growth.

**Base case:** For $n=1$, the sum is $1$, and $1^{2}=1$. The statement holds.

**Inductive step:** Assume the statement holds for some positive integer $k$:

$$1+3+5+\cdots+(2k-1)=k^{2}.$$

Add the next odd integer, $2k+1$, to both sides:

$$1+3+5+\cdots+(2k-1)+(2k+1)=k^{2}+2k+1=(k+1)^{2}.$$

Thus, if the statement holds for $k$, it holds for $k+1$. By the principle of mathematical induction, it holds for all positive integers $n$.

## Connecting the proofs

The visual proof and the inductive proof are not separate performances. They converge on the same reason: the step from $n^{2}$ to $(n+1)^{2}$ requires adding $2n+1$, which is the next odd number. In the visual proof, $2n+1$ is the L-shaped border. In the inductive proof, $2n+1$ is the algebraic term added to $k^{2}$.

A teacher should ask learners to link the two: "Where does the $2k+1$ in the algebra appear in the picture?" The answer---the two arms of the L plus the corner---makes the connection explicit. Connecting the two representations and identifying their common structure supplies evidence about understanding this proof. It does not exclude memorisation or establish transfer to every induction problem; a changed claim and an explanation of the induction principle can investigate those further questions.

## Common errors in proof teaching

**The authority trap.** A teacher presents a proof as a finished product, leaving learners to verify steps without understanding why the proof was structured that way. The repair is to reveal the problem-solving process: "I needed to connect $k^{2}$ to $(k+1)^{2}$. What term would bridge them?"

**The ritual trap.** Learners treat proof as a formal exercise: write "Assume $P(k)$," manipulate symbols, write "Therefore $P(k+1)$." They may execute correctly without knowing what $P(k)$ means. The repair is to ask learners to state the inductive hypothesis in words and to check it against a specific case.

**The example neglect trap.** A teacher jumps to proof without letting learners generate examples and conjectures. The repair is to begin with exploration: compute sums, look for patterns, make a conjecture, and only then ask how to be certain.

## Proof as explanation, not just verification

A proof can verify that a statement is true, but its deeper value is often explanatory: it shows *why* the statement is true. The visual proof of the sum of odd integers explains why the sum is a square: the odd integers are exactly the borders that grow a square. An algebraic proof by induction verifies the statement for all $n$ but may feel less explanatory to a learner who has not connected the inductive step to the visual growth.

Different proofs of the same theorem can have different explanatory virtues. The identity

$$1+3+\cdots+(2n-1)=n^{2}$$

can also be proved by writing two copies in opposite orders. Each of the $n$ columns then sums to $2n$, so twice the original sum is $2n^2$ and the sum is $n^2$. This avoids an incorrect pair count when $n$ is odd. Each proof highlights a different structural feature.

## Worked proof workshop: a finite classification can be exhaustive

Ask which remainders an integer square can have on division by four. Testing the squares of a few large integers might suggest zero and one, but a proof must explain why all other cases are excluded. Every integer is even or odd. An even integer has the form twice an integer; its square is a multiple of four. An odd integer has the form twice an integer plus one; expanding its square gives four times an integer plus one. Thus only zero and one occur. Both are attained, by zero and one respectively, so the classification is exact.

This proof uses two cases to cover infinitely many integers because each case represents an entire definitional class. It is not the number of lines that makes the argument deductive. The critical step is the coverage statement: every integer belongs to one of the two classes. A table of remainders zero, one, two, three modulo four would also work, provided it states that congruent integers have congruent squares. The table then checks an exhaustive quotient of the infinite domain rather than a few arbitrary instances.

A fictional learner says, “Examples never prove anything, so the remainder table cannot be a proof.” Ask which step extends each row to every integer in its remainder class. If an integer equals four times another plus a fixed remainder, expansion shows that its square has the same remainder as the square of that remainder. The four classes exhaust the integers by the division algorithm. This is the missing warrant that turns a finite table into a universal argument.

As an application, no integer square has remainder two modulo four. Therefore an equation requiring a square to equal four times an integer plus two has no integer solution. The conclusion is domain-sensitive: a real square can equal two, so removing “integer” invalidates the obstruction. Proof teaching should include that domain check rather than associating the notation of squares with the same conclusion everywhere.

The proposed classroom contrast respects examples while distinguishing their roles. An instance can supply a witness, illustrate a mechanism, or belong to an exhaustive case split. A finite sample can also remain merely suggestive. The teaching conjecture is to ask learners to name which role their examples play; no intervention effect is claimed here.

## Worked proof workshop: locate the broken induction link

A familiar false argument claims that every finite group of horses has the same colour. The base case of one horse is true. For a group of one more than a fixed number, remove the last horse and invoke the hypothesis on the remaining group; remove the first and invoke it again. The two subgroups are said to share a horse, forcing their colours to agree. The conclusion is false, so at least one purported step must fail.

Inspect the first transition, from a group of one to a group of two. The two one-horse subgroups are disjoint. There is no shared horse linking their colours. For groups of at least three, the overlapping-subgroup argument would be valid conditional on the corresponding hypothesis, but the transition from one to two is absent. A true base case and a step that works only later do not establish the claimed induction chain.

The mathematical repair is not to add more checking without identifying the gap. One could state a step valid for groups of size at least three, but then a base case for size two would be required, and that premise is false in general. The induction framework has not produced a paradox; the proposed proof omitted the condition needed for its overlap assertion.

Now compare a valid induction for divisibility of $n^3-n$ by three for every nonnegative integer. At zero the value is zero. The difference between the value at $k+1$ and at $k$ is $3k^2+3k$, a multiple of three. Therefore divisibility at $k$ implies divisibility at $k+1$ for every nonnegative $k$, including the first transition. The induction hypothesis is a statement about divisibility, and the step explicitly preserves it.

A fictional learner who writes “assume the result, therefore it follows” may know the vocabulary without the dependency. Ask them to point to where the hypothesis is used and which input values the step covers. These prompts investigate the proof's structure. A learner could answer correctly on this example yet need support with another induction domain, such as trees or strong induction; the evidence should remain local.

## Worked proof workshop: generic geometry needs a generic warrant

Take a triangle in the Euclidean plane and the claim that its interior angles sum to a straight angle. A drawn triangle alone is not a universal proof. A generic construction can be: through one vertex draw the line parallel to the opposite side. The other two triangle sides are transversals. Alternate interior angles identify the two angles at the other vertices with the corresponding angles at the chosen vertex along the parallel. Together with the original vertex angle they form a straight angle, so the three interior angles sum to one hundred eighty degrees.

The argument uses Euclidean parallel-line properties. It does not follow merely because one diagram looks straight or because measured angles add approximately to the target. Its generality comes from applying the same construction and theorem to an arbitrary nondegenerate Euclidean triangle. A triangle's orientation, apparent size, or whether it is acute is irrelevant to those properties. An obtuse example can help reveal whether the proof has silently relied on an acute-looking prototype, but the new example alone is not the source of universality.

The domain is substantial. On a sphere, the corresponding geodesic triangle can have angle sum greater than one hundred eighty degrees. A triangle formed by two quarter-meridians from the equator to the north pole and the quarter-equator between them has three right angles. This does not refute the Euclidean theorem, because its geometric assumptions differ. It does refute a careless statement that every triangle in every geometry has the same angle sum.

A fictional learner argues that the Euclidean result is “proved by drawing a line.” Ask what relation the new line must satisfy and which theorem transfers the angles. Drawing an arbitrary line through the vertex would not provide the same equalities. Another learner may give a complete verbal account without a polished diagram; the proof can still be valid if the construction and dependencies are clear. A diagram is a carrier of an argument, not an automatic warrant and not a forbidden form of proof.

This workshop connects accessible response modes to mathematical standards. A tactile diagram or spoken construction can preserve the parallel relation and angle dependencies. A description that simply states the desired sum would supply the conclusion without the argument. The mathematical goal determines which information access must preserve.

## Judging a proof without reducing it to a template

A useful response record separates the statement, domain, assumptions, chain of reasons, and conclusion. Ask whether the argument covers an arbitrary allowed case or exhausts the domain, whether each inference follows under the stated assumptions, and whether existence or a boundary case has been smuggled in. The same questions apply to symbolic, visual and verbal arguments. A formal-looking proof with a missing premise should not receive a stronger judgement than a complete generic explanation in ordinary language.

Proof teaching also needs a distinction between finding and checking an argument. A learner can verify a supplied proof while needing substantial help to construct one. A teacher can supply a lemma, a diagram or an induction target, leaving meaningful reasoning for the learner. Record those supports rather than presenting the result as independent discovery. Conversely, a failed construction attempt may contain a valuable lemma or counterexample even if it does not establish the theorem.

These proposals give criteria for mathematical validity and more precise instructional evidence. They do not show that one proof-teaching sequence yields a measured improvement, nor that every learner experiences a proof as explanatory in the same way. Subsequent responses can investigate both comprehension and transfer without confusing a checkmark with graded evidence of mastery.

## Practice exercises

### Exercise 1

A learner conjectures that $n^{2}-n+41$ is prime for all positive integers $n$ after checking $n=1,2,3,4,5$. Exhibit a counterexample and explain what it teaches about the role of examples.

**Hint 1.** Choose an input making the polynomial a visible product.

**Hint 2.** One counterexample refutes universality without being the smallest.

**Solution.** For $n=41$, we have $41^{2}-41+41=41^{2}=1681$, which is composite ($41\times 41$). This exhibits a counterexample; no claim that it is the smallest is needed. A smallest-counterexample claim would also require ruling out every smaller allowed input. One counterexample already shows that a pattern holding for many cases does not guarantee universality. The polynomial was chosen precisely because it produces primes for a long initial run, making it a classic illustration of the gap between empirical evidence and proof.

### Exercise 2

Prove by induction that the sum of the first $n$ positive integers is $\frac{n(n+1)}{2}$. Then give a visual proof using a triangular array of dots.

**Hint 1.** State a base case and a step covering every successor.

**Hint 2.** Two matching dot triangles form a rectangle.

**Solution.**

**Inductive proof:**

Base case: $n=1$ gives $1=\frac{1\cdot 2}{2}$.

Assume $1+2+\cdots+k=\frac{k(k+1)}{2}$. Add $k+1$ to both sides:

$$1+2+\cdots+k+(k+1)=\frac{k(k+1)}{2}+(k+1)=\frac{k(k+1)+2(k+1)}{2}=\frac{(k+1)(k+2)}{2}.$$

Thus the statement holds for $k+1$, and by induction for all $n$.

**Visual proof:** Arrange $n$ rows of dots, with $1$ dot in the first row, $2$ in the second, ..., $n$ in the $n$-th. This forms a triangle. Make a copy, rotate it $180^{\circ}$, and fit the two together. The result is an $n\times(n+1)$ rectangle with $n(n+1)$ dots. Since the rectangle comprises two identical triangles, each triangle has $\frac{n(n+1)}{2}$ dots.

### Exercise 3

A learner says, "I checked ten cases, so I'm pretty sure it's true. Why do I need a proof?" Respond in a way that respects the learner's intuition while explaining the necessity of proof.

**Hint 1.** Respect conjecturing while identifying the unverified cases.

**Hint 2.** Separate confidence from a warrant covering the entire domain.

**Solution.** Checking cases is a powerful way to discover patterns and build confidence. Many famous conjectures were found this way. But mathematics aims for certainty, not just high probability. A statement that is true for ten cases, or a million cases, might fail at the next case. Proof is what turns a pattern into knowledge. Moreover, a good proof explains *why* the pattern holds, which can reveal connections to other ideas and suggest new questions. Checking selected cases establishes those instances and can suggest a general explanation. A proof warrants the stated generality, though not every proof is equally explanatory for every reader.

### Exercise 4

Explain why the statement "For all integers $n$, if $n^{2}$ is even then $n$ is even" cannot be proved by examples alone, and give a proof by contraposition.

**Hint 1.** Write an arbitrary odd integer in a definitional form.

**Hint 2.** The contrapositive has the same truth conditions as the original implication.

**Solution.** The statement is universal over infinitely many integers, so no finite set of examples can cover all cases. A single unchecked odd integer with an even square would falsify the statement, and examples give no assurance that such an integer does not exist.

**Proof by contraposition.** Assume $n$ is odd. Then $n=2k+1$ for some integer $k$, and

$$n^{2}=(2k+1)^{2}=4k^{2}+4k+1=2(2k^{2}+2k)+1,$$

which is odd. Therefore, if $n$ is odd, $n^{2}$ is odd. By contrapositive, if $n^{2}$ is even, $n$ is even.

### Exercise 5 {#proof-teaching-exercise-5}

Prove that every integer square has remainder zero or one modulo four. Explain why two generic cases suffice while two numerical examples do not.

**Hint 1.** Every integer is even or odd.

**Hint 2.** Expand each general form and retain an integer multiplier.

**Solution.** If $n=2k$, then $n^2=4k^2$. If $n=2k+1$, then $n^2=4(k^2+k)+1$. In both cases the parenthesised multiplier is an integer. Every integer has one of these forms, so the cases exhaust the domain. Zero and one each occur, for instance at inputs zero and one. Two isolated calculations lack the coverage argument; the generic forms provide it. A finite case split can therefore prove an infinite-domain claim when each case represents all members of its class.

### Exercise 6 {#proof-teaching-exercise-6}

Identify the precise failure in the same-colour horses induction. Why does checking the base case alone not protect an induction argument?

**Hint 1.** Inspect the transition from one object to two.

**Hint 2.** The alleged overlap must actually exist.

**Solution.** For a two-horse group, removing the first or last leaves disjoint singleton groups. No horse lies in both, so their colours need not agree. The asserted induction step therefore fails at the first transition. A true base case proves only that starting case; induction also requires a valid implication from every covered case to its successor. The overlap argument works only at later sizes conditional on a hypothesis that has not been established. Adding the missing two-horse base case would require a false assertion rather than repairing the proof.

### Exercise 7 {#proof-teaching-exercise-7}

Prove by induction that three divides $n^3-n$ for all nonnegative integers. Identify exactly where the induction hypothesis is used.

**Hint 1.** Subtract the expression at $k$ from the one at $k+1$.

**Hint 2.** A sum of multiples of three remains a multiple of three.

**Solution.** At zero the expression is zero. Assume $k^3-k=3m$ for an integer $m$. Expansion gives $(k+1)^3-(k+1)=(k^3-k)+3k^2+3k=3(m+k^2+k)$. The final multiplier is an integer, proving the next case. The hypothesis supplies the first term's divisibility; the difference contributes another multiple of three. The step works for every nonnegative $k$, including zero, so induction covers the whole stated domain. The result for negative integers can be added separately using the sign change, rather than silently extending this induction domain.

### Exercise 8 {#proof-teaching-exercise-8}

A learner measures five Euclidean triangles and reports angle sums close to one hundred eighty degrees. State what this evidence supports and supply the missing general argument.

**Hint 1.** Measurement has both sampling and precision limits.

**Hint 2.** Draw a parallel through one vertex to the opposite side.

**Solution.** The measurements support an approximate pattern in the five instances, subject to drawing and measuring error. They do not establish every exact triangle sum. Through a vertex, construct the parallel to the opposite side. Alternate interior angles transfer the other two vertex angles to the chosen vertex, where the three angles make a straight angle. This proves the claim for an arbitrary nondegenerate Euclidean triangle using Euclidean parallel properties. State that geometric setting; a spherical geodesic triangle is outside the theorem's hypotheses.

### Exercise 9 {#proof-teaching-exercise-9}

A correct parity proof is given orally without algebraic notation. What should a teacher inspect before judging its generality? Give both a sufficient account and an insufficient one.

**Hint 1.** Format and scope are different properties.

**Hint 2.** Check the domain represented by a pairing account.

**Solution.** Inspect whether the learner covers arbitrary allowed inputs and supplies a valid reason. “Each positive odd collection consists of pairs and one leftover; two leftovers form another pair” proves the positive-count version. “Three plus five is eight, so it always works” is insufficient for the universal claim. If the target includes all integer signs, require an extension such as arbitrary odd integers being twice integers plus one. An oral explanation can supply that extension. The judgement should follow the warrant and domain rather than whether symbols appear on paper.

### Exercise 10 {#proof-teaching-exercise-10}

A teacher supplies the induction hypothesis and the required difference identity, and a learner completes a valid proof. What can be credited, and what further evidence would investigate independent construction?

**Hint 1.** Verification and completion are substantive but scaffolded.

**Hint 2.** A changed claim can require choosing the missing structure.

**Solution.** Credit the learner's valid use of the supplied hypothesis, integer closure, base case and conclusion to the extent actually shown. Record the two prompts; the work does not establish independent selection of the induction structure or discovery of the identity. A related new divisibility claim with no supplied difference can investigate those choices, with access supports maintained. Failure there would not erase the earlier valid reasoning, and success would still be evidence about specified tasks rather than a permanent global proof level. No empirical teaching effect follows from either record alone.

## Looking backward and forward

The previous chapter, *Problem solving can be taught without reducing it to a mnemonic*, showed how to structure mathematical inquiry without replacing thinking with recipes. Proof supplies a warrant for the claimed generality and can generate further questions about hypotheses, methods and extensions. It need not end inquiry. The next chapter, *Formative assessment is an inference process*, examines how teachers gather evidence about whether learners have reached that endpoint---or any other instructional goal.
