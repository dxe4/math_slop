
# Problem solving can be taught without reducing it to a mnemonic

## The problem with problem-solving mnemonics

Many curricula present problem solving as a sequence of steps: read, underline key words, choose an operation, solve, check. Such mnemonics can help learners organise their work, but they risk replacing mathematical thinking with pattern matching. A learner who underlines "altogether" and always adds, or "left" and always subtracts, will fail on problems where the same words signal different structures. Problem solving is not the execution of a fixed recipe; it is the coordination of mathematical knowledge, strategic reasoning, and metacognitive monitoring.

This chapter examines evidence-based approaches to teaching problem solving, works a complete example from formulation through generalisation, and argues that heuristics are prompts for thinking, not algorithms guaranteed to produce solutions.

## Evidence on teaching problem solving

The US Institute of Education Sciences practice guide assigns evidence ratings to individual recommendations rather than one effect size to “problem-solving instruction.” It rates monitoring and reflecting on the problem-solving process as strong evidence, teaching multiple strategies as moderate evidence, and preparing problems and using them instructionally as minimal evidence; the studies behind the multiple-strategy recommendation have inconsistent outcomes. The Education Endowment Foundation's 2017 mathematics guidance is a separate synthesis for its own context. These guides support recommendation-specific design and monitoring, but they do not establish one consensus comparison in which explicit instruction plus reflection always beats unfacilitated practice, nor does “moderate evidence” mean a moderate effect size.

It is important to read this evidence with care. A statistically significant average effect in a controlled trial does not mean that every learner in every setting will benefit equally. Implementation fidelity, teacher knowledge, and prior mathematical understanding all moderate the outcome. The guidance is a starting point for design, not a guarantee.

## A worked example: maximising area

**Problem:** A rectangle has perimeter $34$ and integer side lengths. Which dimensions maximise area?

**Step 1: Understand the goal.**

We are to find positive integers $a$ and $b$ such that $2a+2b=34$ and the area $ab$ is as large as possible.

**Step 2: Represent the constraint.**

Dividing the perimeter equation by $2$ gives $a+b=17$. The area is $ab$. We seek integer pairs $(a,b)$ with $a+b=17$ that maximise $ab$.

**Step 3: Generate and organise cases.**

Since $a$ and $b$ are positive integers and $a+b=17$, the possible pairs are:

$$(1,16),\ (2,15),\ (3,14),\ (4,13),\ (5,12),\ (6,11),\ (7,10),\ (8,9).$$

(We stop at $(8,9)$ because the pairs are symmetric: $(9,8)$ gives the same area as $(8,9)$.)

**Step 4: Compute and compare.**

The areas are:

$$1\cdot 16=16,\ 2\cdot 15=30,\ 3\cdot 14=42,\ 4\cdot 13=52,$$
$$5\cdot 12=60,\ 6\cdot 11=66,\ 7\cdot 10=70,\ 8\cdot 9=72.$$

The maximum area is $72$, achieved at $8\times 9$.

**Step 5: Verify and generalise.**

The table suggests that area increases as the factors become closer. Is this always true? For fixed sum $S=a+b$, the area is

$$ab=a(S-a)=Sa-a^{2}.$$

This is a quadratic in $a$ opening downward, with vertex at $a=S/2$. The maximum occurs when $a=b=S/2$. For $S=17$, the maximum at $a=b=8.5$ is not achievable with integers, so the nearest integers, $8$ and $9$, give the maximum integer area.

Alternatively, using the identity

$$ab=\left(\frac{a+b}{2}\right)^{2}-\left(\frac{a-b}{2}\right)^{2},$$

we see that for fixed sum $a+b$, the area is largest when $|a-b|$ is smallest. This algebraic explanation confirms the pattern observed in the table.

## Modelling metacognition: the teacher think-aloud

A teacher solving this problem in front of learners might verbalise:

- **Plan:** "I need to turn the perimeter into a constraint on the side lengths. Let me call the sides $a$ and $b$."
- **Monitor:** "I have eight pairs to check. I should organise them so I don't miss any or repeat. I'll list $a$ from $1$ to $8$."
- **Evaluate:** "The areas are increasing. Let me check my arithmetic: $7\times 10=70$, $8\times 9=72$. Yes. But is $8\times 9$ really the maximum, or could a non-integer pair do better?"
- **Generalise:** "The pattern says closer factors give larger area. Can I prove that without checking every pair?"

This planned think-aloud exposes decisions and checks that a polished solution can hide. A teacher who already knows the result should not pretend otherwise: say that the demonstration reconstructs a possible solution route. The proposal is to make mathematical choices discussable; what learners infer from the performance remains a question for their responses.

## Common errors in problem-solving instruction

**The keyword trap.** Teaching learners to map words to operations---"altogether means add"---produces correct answers on routine problems but fails on non-routine ones. A problem that asks "How many more apples does Alice have than Bob?" uses "more" but requires subtraction. The repair is to teach learners to represent the situation mathematically before choosing an operation.

**The template trap.** Providing a fixed problem-solving template---"draw a diagram, make a table, guess and check"---can become procedural itself. The repair is to discuss why a particular representation was chosen and what alternatives were considered.

**The answer-first trap.** Rushing to the numerical answer and only then asking "does this make sense?" misses the opportunity to develop monitoring habits. The repair is to ask for an estimate before computation and a justification after.

## Worked problem: an invariant proves impossibility

An eight-by-eight board loses its top-left and bottom-right squares. Can the remaining board be covered by two-square dominoes, each covering two edge-adjacent squares? A search for placements might produce many near-solutions, but failure to find one would not prove impossibility. The strategic question is which feature every legal placement preserves.

Colour the original board like a chessboard. There are thirty-two squares of each colour. Edge-adjacent squares always have opposite colours, so every domino covers one of each. The two removed opposite-corner squares have the same colour: their row-plus-column sums have the same parity. The remaining board therefore has thirty squares of one colour and thirty-two of the other. Any domino covering would cover equal counts, contradicting the imbalance. No such covering exists.

The colouring is useful because it turns a geometric arrangement problem into a counting obstruction. The proof does not depend on the order of placements, and it covers every possible arrangement. It also identifies a limit: equal colour counts are necessary, not generally sufficient, for arbitrary shapes to be domino-tileable. A region could contain disconnected components each with its own imbalance even if the total counts balance. The invariant rules out some boards without solving every tiling question.

For contrast, remove the two adjacent leftmost squares in the top row. A covering exists: pair all squares horizontally in the original board and omit the domino consisting of those two squares. The remaining thirty-one dominoes give an explicit witness. This contrast separates impossibility by an invariant from existence by construction. A picture of an attempted covering without complete coverage would establish neither.

In a fictional lesson, a learner repeatedly rearranges dominoes. A useful prompt might ask what every domino has in common under a two-colouring. That is a substantial strategic hint: record it rather than claiming that the learner independently discovered the invariant. Another learner might immediately cite “opposite corners” without explanation. Ask why those corners share a colour and why every placement must preserve balance. The goal is the warrant, not recognition of a famous puzzle.

## Worked problem: organise integer constraints before calculating

A box contains only three-unit and five-unit tokens, with total value twenty-four units. Which nonnegative counts are possible? Let $a$ count the three-unit tokens and $b$ the five-unit tokens. The constraint is $3a+5b=24$. Nonnegativity gives $0\leq b\leq4$. Reducing the equation modulo three gives $2b\equiv0\pmod3$, so $b$ must be divisible by three. Within the bound, only zero and three remain. They yield $a=8$ and $a=3$ respectively. Thus the possible count pairs are eight and zero, or three and three.

A table of all five possible values of $b$ would also be complete and valid. The modular argument is a strategy for pruning cases, not an obligatory superior method. It becomes more valuable when the total is large, while a short table may make the exhaustive reasoning clearer for a beginner. Ask which method the current numbers make efficient and why the proposed list cannot omit a solution.

Now add the condition that the box contains exactly six tokens. Then $a+b=6$. Substituting $a=6-b$ into the value equation gives eighteen plus twice $b$ equal to twenty-four, so $b=3$ and $a=3$. This condition removes the eight-token solution. If the condition were exactly five tokens instead, substitution would require twice $b$ equal to nine, impossible for an integer. An approximate decimal count would not repair the problem, because token counts are integral.

The teaching point is how formulation constrains later operations. Bounds, congruences, and a count equation each preserve different information about the situation. An answer must satisfy all of them, not simply one convenient equation. In a fictional response that reports one pair, ask whether the question requested one example or every possibility. The follow-up concerns completeness, not arithmetic speed. As elsewhere, the classroom proposal has no claimed empirical outcome.

## Worked problem: a model determines the rounding decision

A fictional excursion has eighty-three travellers. Each vehicle has twenty passenger seats. How many vehicles are required? Under the assumptions that every traveller needs a seat, no vehicle exceeds capacity, and all vehicles are available with the same capacity, the number must be an integer at least the quotient of eighty-three by twenty. Four vehicles seat only eighty, so they are insufficient. Five seat one hundred and suffice. The minimal answer is five, established by a lower bound and a feasible construction.

The quotient four and fifteen hundredths is a useful intermediate quantity, not a fractional vehicle recommendation. The reasoning is not simply “always round division up.” If the question instead asks how many complete twenty-person teams can be formed, the answer is four, with three people left over. If it asks average travellers per vehicle after hiring five vehicles, the answer is sixteen and six tenths. The same numbers support different operations because the required output has changed.

Additional conditions can change the model. If one seat per vehicle must be reserved for a guide not included in the eighty-three, the effective traveller capacity is nineteen, and five vehicles still suffice because four seat only seventy-six. If each vehicle must have at least eighteen travellers, five would require at least ninety, so no arrangement satisfies both the minimum and the twenty-seat maximum for eighty-three travellers. This is an infeasibility result, not a reason to force a rounded answer.

A teacher can ask learners to state a lower bound, exhibit an allocation, and identify which assumption makes upward rounding appropriate. An allocation such as seventeen, seventeen, seventeen, sixteen, and sixteen supplies a concrete five-vehicle witness under the original assumptions. Real excursions involve access, safety, staffing and other constraints; those are outside this simplified mathematical model unless specified. The case is fictional and offers no advice about actual transport provision.

## When a heuristic becomes a mathematical argument

“Try a table,” “work backwards,” and “look for an invariant” are search prompts. They do not themselves establish a result. A table proves completeness only when its range covers every allowed case and each entry is checked. Working backwards gives a solution only when each reversed step is valid or the candidate is checked forward. An invariant proves impossibility only when every legal move preserves it and the target violates it. Turning a heuristic into an argument requires these warrants.

Instruction can make that conversion explicit. After finding a candidate, ask what remains unproved: existence, optimality, uniqueness, or completeness of a list. The rectangle problem needs optimality. The adjacent-square tiling needs a complete construction. The opposite-corner board needs an obstruction. The token problem needs exhaustive integer cases. The vehicle problem needs both a lower bound and feasibility. Calling all of these steps “check your answer” conceals their different mathematical roles.

A teacher can also choose to supply a representation to reduce search demands while retaining the proof target. Providing the checkerboard colouring removes the strategy-selection challenge but leaves the invariant argument to construct. Providing the token equation removes formulation but leaves integer reasoning. State that support openly. The resulting work can still be demanding; it simply supplies different evidence from an unprompted solution. None of these distinctions establishes that one scaffolding policy is best for every learner or task.

## Practice exercises

### Exercise 1

A learner is taught that "fewer than" always means subtract. They encounter the problem: "Alice has $12$ apples, which is $5$ fewer than Bob. How many does Bob have?" Predict the error and design a repair.

**Hint 1.** Translate who has fewer before choosing an operation.

**Hint 2.** Check the proposed answer against the comparison sentence.

**Solution.** A keyword-based response could subtract: $12-5=7$. That response is consistent with the proposed rule, but an actual learner might instead have misread who has fewer. Ask for their interpretation before attributing the cause. The repair is to use a bar model or equation: $A=B-5$, so $12=B-5$, hence $B=17$. The teacher should ask: "Who has more, Alice or Bob? If Alice has fewer, can Bob have fewer too?" This forces attention to the relationship, not the word.

### Exercise 2

Solve the following problem using the plan-monitor-evaluate framework, and identify where a learner might get stuck.

> The sum of three consecutive integers is $48$. What are the integers?

**Hint 1.** Represent all three integers from one parameter.

**Hint 2.** Verify consecutiveness as well as the sum.

**Solution.**

**Plan:** Let the integers be $n$, $n+1$, $n+2$. Their sum is $3n+3=48$.

**Monitor:** Solve $3n+3=48$. Subtract $3$: $3n=45$. Divide by $3$: $n=15$. The integers are $15,16,17$.

**Evaluate:** Check: $15+16+17=48$. Yes. Also check that they are consecutive: $16-15=1$, $17-16=1$.

A learner might get stuck at the planning stage by trying to guess three numbers rather than representing them algebraically. Another might write $n+(n+1)+(n+2)=48$ but make an arithmetic error in solving. A third might find $n=15$ but forget to list all three integers, answering "$15$" instead of "$15,16,17$."

### Exercise 3

Explain why the algebraic identity $ab=((a+b)/2)^{2}-((a-b)/2)^{2}$ proves that for fixed sum, area is maximised when $a=b$.

**Hint 1.** Hold the sum term fixed and inspect the squared difference.

**Hint 2.** Separate the real optimum from an integer restriction.

**Solution.** For fixed sum $S=a+b$, the term $((a+b)/2)^{2}=(S/2)^{2}$ is constant. The area $ab$ is therefore equal to a constant minus $((a-b)/2)^{2}$. Since $((a-b)/2)^{2}$ is always non-negative, subtracting it reduces the area. The reduction is smallest---in fact, zero---when $a-b=0$, that is, when $a=b$. Therefore the maximum area occurs when the sides are equal. This proof is more powerful than the table because it applies to all real numbers, not just integers.

### Exercise 4

A teacher gives learners the mnemonic "Please Excuse My Dear Aunt Sally" (PEMDAS) for order of operations. A learner computes $8-3+2$ as $8-(3+2)=3$. Diagnose the error and discuss whether the mnemonic is responsible.

**Hint 1.** Addition and subtraction share precedence.

**Hint 2.** Reading an incorrect result does not uniquely establish its cause.

**Solution.** One possible explanation is interpreting PEMDAS as “addition before subtraction” because $A$ comes before $S$. The displayed work alone does not establish that cause. In fact, addition and subtraction have equal precedence and are evaluated left to right. The mnemonic is partly responsible because it suggests a hierarchy that does not exist between operations of equal precedence. The repair is to teach that addition and subtraction are inverse operations at the same level, and that the correct reading of $8-3+2$ is $(8-3)+2=7$. A more accurate representation is grouping: terms are separated by $+$ and $-$, so $8-3+2$ is $8+(-3)+2$.

### Exercise 5 {#teaching-problem-solving-exercise-5}

Prove that an eight-by-eight board with opposite-corner squares removed cannot be covered by edge-adjacent dominoes. State why unsuccessful search is insufficient.

**Hint 1.** Colour the board with alternating colours.

**Hint 2.** Count what each legal domino must cover.

**Solution.** Opposite corners have the same colour. Removing them leaves thirty squares of that colour and thirty-two of the other. Every domino covers exactly one of each, so any covering would require equal colour counts, a contradiction. A finite list of failed arrangements does not cover every possible arrangement unless exhaustiveness is proved. The colouring argument supplies the universal obstruction directly. A drawing should identify the colour convention and removed squares so that the counts can be checked rather than accepted from the picture alone.

### Exercise 6 {#teaching-problem-solving-exercise-6}

Give a covering when the two adjacent leftmost top-row squares are removed instead. Explain why the existence proof differs from the impossibility proof.

**Hint 1.** Begin with a horizontal covering of the full board.

**Hint 2.** Remove exactly the domino occupying the deleted pair.

**Solution.** Pair columns one with two, three with four, five with six, and seven with eight in every row. This covers the full board by thirty-two horizontal dominoes. Remove the first pair in the top row; the remaining thirty-one cover precisely the remaining squares without overlap. One complete construction proves existence. The opposite-corner problem instead requires ruling out every construction, which the colour imbalance accomplishes. The logical demand changes with the claim, even though both tasks use the same board and pieces.

### Exercise 7 {#teaching-problem-solving-exercise-7}

Find every nonnegative integer solution of $3a+5b=30$. Explain why your list is complete.

**Hint 1.** Bound $b$ using nonnegativity.

**Hint 2.** Reduce the equation modulo three.

**Solution.** Nonnegativity gives $0\leq b\leq6$. Modulo three, twice $b$ must be zero, so $b$ is a multiple of three. The only choices are zero, three, and six. Substitution yields $(a,b)=(10,0),(5,3),(0,6)$. Each pair satisfies the equation and bounds. Every solution must have one of the three permitted values of $b$, so none are omitted. Supplying only one pair would answer an existence question but not this exhaustive classification.

### Exercise 8 {#teaching-problem-solving-exercise-8}

Seventy-one objects are packed into boxes holding at most twelve each. Find the minimum number of boxes, then answer how many full twelve-object sets can be formed. Explain the different rounding directions.

**Hint 1.** Capacity and complete-group counting ask different questions.

**Hint 2.** Compare five and six boxes with the total.

**Solution.** Five boxes hold only sixty objects, while six hold seventy-two, so six are necessary and sufficient. An allocation with five full boxes and eleven objects in the sixth witnesses sufficiency. Only five complete twelve-object sets can be formed, with eleven left over; six complete sets would require seventy-two objects. Upward rounding answers the capacity question, downward rounding the complete-set question. Neither direction follows from division alone without interpreting the output constraint.

### Exercise 9 {#teaching-problem-solving-exercise-9}

A teacher supplies the token equation before learners solve it. Which problem-solving evidence has been scaffolded away, and what meaningful evidence can remain?

**Hint 1.** Distinguish formulation from solving an already formulated constraint.

**Hint 2.** Completeness still needs an argument.

**Solution.** Selecting variables and translating the value context into an equation have been supplied. Learners may still bound integer counts, choose a modular or tabular strategy, find candidates, check them, and establish that the list is exhaustive. Those are substantive mathematical achievements. Record the equation prompt so the work is not later described as independent formulation. To investigate formulation separately, give a changed context without the equation while preserving accessible language and notation. No claim that one scaffold always improves learning follows from this analysis.

### Exercise 10 {#teaching-problem-solving-exercise-10}

For the fixed-sum rectangle problem, identify what a table, a feasible pair, and a balancing proof each establish. Explain why “I checked my answer” is underspecified.

**Hint 1.** Existence and optimality are different obligations.

**Hint 2.** A table needs an exhaustive range to prove a maximum.

**Solution.** A feasible pair establishes that at least one rectangle satisfies the constraints and has the stated area. A complete table of all unordered positive integer pairs, with correct products, establishes the integer maximum. A partial table only compares its listed cases. A balancing proof shows that any pair with a gap of at least two can improve, forcing an optimum to the nearest equal pair. “Checked” could refer merely to recomputing a product, verifying the perimeter, or proving optimality. State which obligation the evidence actually meets before choosing the next teaching question.

## Looking backward and forward

The previous chapter, *Learning progressions are hypotheses*, described how learners develop increasingly powerful ways of reasoning. Problem solving is the arena in which those ways of reasoning are tested and integrated. The next chapter, *Proof teaching coordinates examples and necessity*, examines a special case of problem solving: how to move from empirical observation to deductive certainty, and why examples alone are never sufficient.
