
# Begin with an explicit mathematical goal

## From vague ambitions to precise targets

A lesson that begins with "Today we will learn fractions" leaves too much undefined. Which fractions? What operation? What does "learn" mean---recall a definition, execute an algorithm, explain a connection, or solve a novel problem? Vague goals make task selection arbitrary and assessment unfocused. In contrast, an explicit mathematical goal names the object, the operation, and the evidence that would show understanding.

This chapter examines what makes a goal usable for instruction, shows how to align tasks and assessments with that goal, and diagnoses common failures of goal clarity. The central claim is that a well-stated goal is a contract between teacher and learner: it says what mathematics is at stake and what success looks like.

## The anatomy of a usable goal

A usable goal has three components:

1. **Mathematical object.** What is being studied? This might be a concept (ratio, derivative, equivalence relation), a procedure (solving linear equations, completing the square), or a process (conjecturing, generalising, proving).

2. **Operation or relation.** What will the learner do with the object? Compare, construct, justify, transform, classify, estimate, or model?

3. **Evidence.** What observable behaviour would convince a reasonable observer that the learner has met the goal?

For example:

> Learners will compare positive fractions by constructing a common unit, and justify the comparison with a number line or equivalent fractions.

Here the object is positive fractions, the operation is comparison by common unit, and the evidence is a justified comparison using a specified representation.

Compare this with the weaker goal "Learners will understand fractions." The object is named, but the operation and evidence are absent. A teacher using the weaker goal cannot distinguish between a learner who can shade $\frac{3}{4}$ of a circle and a learner who can explain why $\frac{3}{4}=\frac{6}{8}$ using the multiplicative identity. Both might be counted as "understanding," yet they demand different instruction and reveal different knowledge.

## Aligning tasks with goals

Once the goal is explicit, task selection becomes a design problem rather than a search problem. The task must make the goal visible. If the goal is to justify fraction comparison, then a task that asks only for the larger of two fractions is insufficient; it must also ask for the reasoning.

Consider the comparison of $\frac{5}{8}$ and $\frac{2}{3}$.

A task aligned with the goal above might read:

> Which is larger, $\frac{5}{8}$ or $\frac{2}{3}$? Show two methods: one using equivalent fractions and one using a number line. Explain why both methods must give the same answer.

This task requires the learner to construct a common unit (denominator $24$), represent the comparison on a number line, and connect the two representations. It assesses the stated goal directly.

A misaligned task might read:

> Cross-multiply to compare $\frac{5}{8}$ and $\frac{2}{3}$.

This task assesses a procedure, not the goal. A learner might execute correctly---$5\cdot 3=15$, $2\cdot 8=16$, so $\frac{2}{3}>\frac{5}{8}$---without understanding why the procedure works, when it is valid, or how it connects to the meaning of fraction comparison.

## Deriving the cross-multiplication rule

The rule $a/b < c/d$ iff $ad < bc$ is valid for positive denominators, and its derivation reveals the goal that a cross-multiplication task obscures. Starting from

$$\frac{a}{b}<\frac{c}{d},$$

multiply both sides by the positive quantity $bd$:

$$ad < bc.$$

Each step preserves the inequality because $b>0$ and $d>0$. The derivation makes visible that:

- the rule depends on the denominators being positive;
- it is a consequence of the order axioms, not an arbitrary trick;
- it is equivalent to constructing a common denominator $bd$ and comparing the numerators $ad$ and $bc$.

If the goal is procedural fluency alone, cross-multiplication is efficient. If the goal is conceptual understanding, the derivation is essential. A teacher who confuses the two goals risks teaching a trick that learners misapply when denominators are negative or unknown in sign.

## Common errors in goal setting

**The activity trap.** A teacher designs an engaging lesson---building paper aeroplanes, measuring flight distances, computing averages---and only afterwards asks what mathematics the activity teaches. The activity becomes the goal, and the mathematics becomes incidental. The repair is to state the goal first and then choose or adapt the activity so that the mathematics is unavoidable.

**The coverage trap.** A teacher lists every standard in a unit and treats each as a separate goal. "Simplify fractions, add fractions, subtract fractions, multiply fractions, divide fractions" is a checklist, not a learning trajectory. The repair is to identify the central mathematical idea---for example, that fractions are numbers that can be decomposed and recomposed---and let the operations serve that idea.

**The evidence trap.** A teacher states a conceptual goal but assesses only computation. "Learners will understand the distributive property" is tested by $3(4+5)=27$. A learner who memorises the pattern $a(b+c)=ab+ac$ without understanding why it holds may pass the test while failing the goal. The repair is to design evidence that requires explanation, connection, or transfer.

## A design protocol

The following protocol, adapted from lesson-study practice, can be used to refine vague goals into usable ones:

1. Write the initial goal in one sentence.
2. Underline the mathematical object.
3. Circle the verb: what will learners do?
4. Ask: what could a learner do that would convince me they have met this goal?
5. If the answer is vague, rewrite the goal with a more specific operation and evidence.
6. Design one task that makes the evidence observable.
7. Predict three learner responses: one fully meeting the goal, one partially meeting it, and one missing it.

Step 7 is particularly powerful. Predicting responses forces the teacher to operationalise the goal. If the teacher cannot predict what a partial response looks like, the goal is still too vague.

## Worked goal contract: distinguish additive and multiplicative change

The cases below are fictional planning examples, not records of measured teaching effects. Begin with the vague goal “understand proportion.” A more usable target is: given a table with positive inputs, distinguish a constant ratio from a constant difference, identify which property the context requires, and justify the conclusion with an invariant or counterexample. The object is a relation between quantities; the operation is classification; the evidence is an explicit invariant and an account of the contextual assumption.

Consider a table pairing two, four, and six kilograms with prices seven, fourteen, and twenty-one pounds. All three price-to-mass ratios equal three and a half pounds per kilogram. Under a constant unit-price model the rule is proportional. A second table pairs the same masses with eleven, eighteen, and twenty-five pounds. Each two-kilogram increase still adds seven pounds, but the ratios are five and a half, four and a half, and twenty-five sixths. They are unequal. The affine rule is three and a half times the mass plus four, which can represent a fixed delivery charge. The constant difference between successive displayed outputs does not establish direct proportion.

A complete explanation names what is held constant and its units. The rate has units of pounds per kilogram; the fixed charge has units of pounds. Adding the fixed charge to the rate would be dimensionally meaningless, whereas adding it to the rate multiplied by mass is appropriate. The zero-input value can distinguish these two formulas, but a price context may restrict actual orders to positive masses. Discussing the formula at zero is an extension of the model, not evidence that a shop sells a zero-kilogram delivery.

Predicted responses support different next questions. “Both are proportional because they go up by seven” misses the distinction between constant increment and constant ratio; ask for the price of one kilogram under each proposed rule. “Only the first is proportional because the ratios match” meets the table-classification part, but still needs the constant-unit-price assumption for extrapolation. “The first fits a proportional model on the displayed rows; the second fits a rate plus a fixed charge” states both mathematical classifications while keeping model choice explicit. These are descriptions of responses, not fixed levels of learner ability.

The assessment can permit a written calculation, a spoken explanation with recorded quantities, or an accessible table. Supplying the ratios in advance would remove part of the operation being assessed. That support may be appropriate during instruction, but the evidence contract must then say that selecting and calculating the invariant was scaffolded.

## Worked goal contract: equations and transformed domains

Suppose the target is solving rational equations over the real numbers while preserving their domains. Give the equation $(x^2-1)/(x-1)=2$. Before any cancellation, its domain excludes one. On that domain, factorisation permits cancellation and gives $x+1=2$. The transformed equation has the candidate solution one, but this candidate is excluded by the original denominator. The original solution set is empty.

A numerical answer of one can arise from several paths: a learner may have cancelled correctly but forgotten the domain, may think cancellation defines the original expression at the missing point, or may have copied a familiar pattern. The task should therefore request the original domain, an account of each transformation, and a check against the original equation. The mathematical evidence is not a ritual line saying “check answer”; it is the explicit observation that the denominator vanishes at the candidate.

Compare a second equation with the same left side equal to three. Cancellation gives the candidate two, which is allowed. Substitution gives three on the left, so two is the unique solution. This contrast keeps the algebraic manipulation almost unchanged while varying the decisive restriction. A learner who rejects every candidate because a denominator occurs has not met the target either. The goal is conditional equivalence, not a blanket prohibition on cancellation.

One can formalise the contract by saying that two equations are equivalent relative to a specified set when they have the same solutions within that set. Cancellation here is valid relative to the real numbers other than one. It is not an assertion that the original rational expression and the polynomial are identical as functions with their usual full domains. Their values agree at every allowed input, while only the polynomial is defined at the missing point.

This example also identifies a limit of verbal goals. “Simplify rational expressions” and “solve rational equations” are related but distinct operations. A response may simplify an expression correctly on its domain and still fail to carry the domain through equation solving. State both requirements if both are intended. Introducing them does not prove that any particular lesson sequence will produce durable transfer; that remains a teaching conjecture to be investigated through later work.

## Worked goal contract: universal and existential evidence

Take the target “justify a claim about sums of consecutive integers.” That target still hides a quantifier. For positive integers, ask whether every odd number greater than one is the sum of two consecutive positive integers. Let the odd number be twice an integer plus one. Because it exceeds one, that integer is at least one. The number is the sum of that integer and its successor. This proves the universal statement while making positivity explicit.

Now change the question to whether there exists an even number that is a sum of two consecutive integers. Write consecutive integers as an arbitrary integer and its successor. Their sum is twice the first plus one, which is odd. Thus no such even number exists. Several examples of odd sums would not prove nonexistence of an even sum; the symbolic argument exhausts every consecutive pair. In contrast, one concrete odd sum suffices to establish that some odd number has the property. The required evidence changes with the quantifier.

The domain matters again if the first question includes all positive odd numbers rather than those greater than one. The number one cannot be a sum of two consecutive positive integers: the smallest such pair is one and two, whose sum is three. If zero is allowed as a nonnegative integer, zero plus one supplies the missing case. A teacher should not accept a proof that silently changes “positive” to “nonnegative.” A constructive formula is useful precisely because its boundary can be checked.

An aligned rubric can distinguish a valid example, a generic representation with a missing boundary, and a complete proof. It should not reward symbolic notation merely for looking formal. A spoken argument that every consecutive pair consists of two equal copies of the smaller number and one extra has the same generality as the algebra. Conversely, a page of calculations at selected inputs remains finite evidence, however fluent the computation.

The resulting goal contract is precise: identify the quantifier and domain, supply the corresponding witness or general argument, and verify the boundary. A follow-up can vary one condition at a time. Moving from positive to nonnegative integers is especially informative because it changes one boundary case without requiring a new technique.

## Goals remain revisable without becoming retrospective excuses

A written goal should help choose evidence before inspecting the responses. Otherwise a teacher can make almost any activity look successful by redefining success afterwards. If the intended goal was distinguishing proportional from affine models, a lively discussion and accurate arithmetic are useful observations but do not replace evidence of that distinction. If the intended goal was constructing a universal argument, checking ten cases does not become proof because many learners stopped there.

Revision is nevertheless legitimate. A lesson may reveal an unanticipated prerequisite, such as identifying the referent whole or understanding negative inputs. Record the original target, what the work actually showed, and the mathematical reason for the next target. This preserves the distinction between changing a plan responsively and claiming that the original objective was achieved. It also avoids portraying every partial response as failure: correctly identifying a domain restriction may be substantial progress even when the final equation remains unsolved.

The proposed contracts are planning devices, not psychometric scales. They do not supply validated cut scores or causal evidence that publishing objectives improves attainment. Their purpose is to make professional reasoning inspectable: what mathematical claim is at stake, which response could support it, and which uncertainty remains. Later chapters on formative assessment and educational evidence develop the separate questions of inference quality and intervention effects.

## Practice exercises

### Exercise 1

Rewrite the vague goal "Learners will understand linear functions" into a usable goal with object, operation, and evidence.

**Hint 1.** Specify one relation within the broad topic.

**Hint 2.** Require evidence connecting its parameters to the chosen context.

**Solution.** A usable goal might be:

> Learners will interpret the slope and intercept of a linear function in a realistic context, and predict the output for a given input by explaining how the rate of change and initial value contribute.

Object: linear function (specifically slope and intercept). Operation: interpret and predict. Evidence: an explanation that connects the parameters to the context.

### Exercise 2

A teacher states the goal: "Learners will solve quadratic equations." Design a task that assesses procedural fluency, and a second task that assesses conceptual understanding of the same goal. Explain how the two tasks differ in what they reveal.

**Hint 1.** Solving and modelling are different operations.

**Hint 2.** Check which algebraic roots are permitted by the rectangle domain.

**Solution.**

Procedural fluency task: Solve $2x^{2}-5x-3=0$ by any method.

This reveals whether the learner can execute factoring, the quadratic formula, or completing the square. It does not reveal whether the learner knows why the methods work or when each is most efficient.

Related structural task: For $x>3$, a rectangle has area $2x^{2}-5x-3$ and one side length $x-3$. Find the other side length and justify the factorisation. Then explain why the roots of the polynomial do not describe nondegenerate rectangles in this domain.

Factoring gives $(x-3)(2x+1)$, so the other side is $2x+1$. Both sides are positive for $x>3$. The polynomial roots are three and negative one half; neither belongs to that domain. This task investigates factorisation and the model's restrictions, but alone it does not assess solving a quadratic equation. To align with the original goal, also ask for all real roots of the displayed polynomial equation and a justification using the zero-product property. The two settings must be distinguished rather than silently treating every algebraic root as a physical rectangle.

### Exercise 3

Explain why the rule "cross multiply and see which product is bigger" can be a misconception if taught without derivation, and give a numerical example where a learner might misapply it.

**Hint 1.** Multiplying an inequality by a negative quantity reverses its direction.

**Hint 2.** Compute the sign of the product of the denominators.

**Solution.** For nonzero denominators, multiplying $a/b<c/d$ by $bd$ preserves the direction when $bd>0$ and reverses it when $bd<0$. Therefore the inequality is equivalent to $ad<bc$ if the denominators have the same sign, and to $ad>bc$ if they have opposite signs. For example, compare $1/(-2)$ with $1/3$. Here $bd=-6<0$, so the correct equivalent inequality is $1\cdot3>1\cdot(-2)$; indeed $3>-2$, and $-1/2<1/3$. A memorized rule that always reads the cross-products in the original direction would reach the wrong conclusion.

### Exercise 4

A unit plan lists the following goals for one week: (a) add fractions with like denominators, (b) add fractions with unlike denominators, (c) subtract fractions, (d) simplify fractions, (e) convert mixed numbers. Identify the coverage trap, and propose a single central goal that unifies the week.

**Hint 1.** Find a common meaning beneath the listed procedures.

**Hint 2.** Make the common measuring unit part of the evidence.

**Solution.** The coverage trap is that each operation is treated as a separate skill, obscuring the underlying idea that fractions are quantities that can be decomposed and recomposed only when expressed in common units. A central goal might be:

> Learners will interpret fraction addition and subtraction as combining or removing quantities measured in the same unit, and will justify renaming fractions as finding an equivalent measure in a larger or smaller unit.

This goal makes the operations consequences of a single concept rather than isolated procedures.

### Exercise 5 {#begin-with-explicit-goals-exercise-5}

Rewrite “learn proportional reasoning” as a goal distinguishing a proportional price rule from a fixed charge plus a unit rate. Supply a contrast and the expected justification.

**Hint 1.** Keep the unit rate the same in both rules.

**Hint 2.** Compare ratios, not only equal input increments.

**Solution.** A usable goal is to classify each price model, compute its invariant, and explain the fixed charge in units of money. For masses two and four, prices six and twelve fit the proportional rule of three pounds per kilogram. Prices eleven and seventeen fit the same rate plus a five-pound charge; their ratios to mass differ. The equal six-pound increment is common to both, so it cannot distinguish direct proportion. The expected evidence names the constant ratio in the first case and its failure in the second. Extrapolating beyond the rows still requires a model premise.

### Exercise 6 {#begin-with-explicit-goals-exercise-6}

Solve $(x^2-4)/(x-2)=4$ over the reals. Explain what evidence a goal about domain-preserving transformations should require.

**Hint 1.** State the forbidden input before cancelling.

**Hint 2.** The transformed equation can have a candidate outside that domain.

**Solution.** The original domain excludes two. On that domain factorisation and cancellation give $x+2=4$, whose only candidate is two. Since it is excluded, there are no solutions. The evidence should include the domain, the relative equivalence of the cancelled equation on that domain, and rejection of the candidate for the explicit denominator reason. An answer of “no solution” without this reasoning supports a weaker inference; it could have been guessed. An answer of two shows that the supplied work did not preserve the original domain, without determining why.

### Exercise 7 {#begin-with-explicit-goals-exercise-7}

A task asks whether some positive integer square ends in six. A second asks which final decimal digits an integer square can have. Explain why the evidence requirements differ, and solve both.

**Hint 1.** One witness suffices for an existential statement.

**Hint 2.** Every integer has one of ten remainders modulo ten.

**Solution.** Four squared is sixteen, giving the requested witness. To classify every final digit, examine the possible remainders zero through nine. Squaring them gives final digits zero, one, four, nine, six, five, six, nine, four, one. Thus the possible digits are zero, one, four, five, six, and nine, each actually attained by an entry. This finite argument proves a universal classification because every integer is represented by exactly one of the exhaustive remainder classes; it is not merely a list of arbitrary examples. A goal should specify whether constructing a witness or establishing exhaustive coverage is required.

### Exercise 8 {#begin-with-explicit-goals-exercise-8}

A learner factors a quadratic correctly but gives only one of its two real roots. Design a follow-up that investigates solution completeness without presuming the cause of the omission.

**Hint 1.** Ask what the zero-product property says about both factors.

**Hint 2.** Include a repeated-root comparison.

**Solution.** Present $(x-2)(x+5)=0$ and ask for every real solution with a reason that no others occur. The answers are two and negative five: a product of real numbers is zero exactly when at least one factor is zero. Then compare $(x-2)^2=0$, which has only two as a distinct root. Ask the learner to explain why the first has two distinct roots and the second one. This can distinguish an omitted factor, a repeated-root convention, or an incomplete reading, but no single predicted explanation should be recorded as established before the follow-up response.

### Exercise 9 {#begin-with-explicit-goals-exercise-9}

A lesson targets interpreting slope in units, but its final task supplies the slope and asks learners to plot points. Explain the alignment gap and propose a replacement.

**Hint 1.** Identify which operation the supplied value has already performed.

**Hint 2.** Require both a quotient and its contextual meaning.

**Solution.** Plotting a supplied rule can show coordinate fluency without interpreting the rate. Instead give a tank volume of twelve litres at minute two and twenty-four litres at minute five, with an explicitly constant filling rate. Ask for the rate and its meaning. The volume increase is twelve litres over three minutes, so the rate is four litres per minute: each extra minute adds four litres under the model. This addresses the goal. It does not by itself assess interpreting the intercept, which would require a further question and a domain discussion.

### Exercise 10 {#begin-with-explicit-goals-exercise-10}

During a lesson on comparing fractions, several learners correctly compute products but cannot identify the original whole. What should a revised next goal say, and what must the teacher avoid claiming about the original goal?

**Hint 1.** Name the prerequisite that the responses leave uncertain.

**Hint 2.** Keep the original intended evidence separate from the new plan.

**Solution.** A next goal might require learners to identify a common referent whole, express two fractions as quantities of that whole, and justify which quantity is greater with a shared unit. Supply matched-whole and changed-whole cases so the referent matters. Record that the original work showed successful product calculations but did not yet establish the intended quantity comparison. Do not retrospectively claim complete understanding merely because arithmetic was correct, and do not claim every learner lacks the prerequisite. The revision is an instructional response to limited evidence, not an empirical finding that the new approach will necessarily succeed.

## Looking backward and forward

The previous chapter, *Mathematical proficiency is braided*, argued that understanding, fluency, reasoning, strategy, and disposition must develop together. Explicit goals are the mechanism by which a teacher ensures that no strand is neglected. The next chapter, *Representations are tools, not decorations*, shows how the choice of representation makes certain mathematical relationships visible and others invisible---a choice that should be governed by the goal, not by habit or aesthetics.
