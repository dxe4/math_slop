var e=`---
id: recipe-design-accessible-math-lesson
title: "Design an Accessible Mathematics Lesson: One Pattern, Many Ways In"
license: CC BY-SA 4.0
---

# Design an Accessible Mathematics Lesson

**Before reading.** No prior reading is required.

This recipe builds a complete lesson around a growing tile pattern while showing how to make the mathematics available through objects, words, a table, and symbols. It assumes no formal notation: every symbol is introduced before it is used. A learner may point, speak, type, arrange counters, or write. The mathematical goal remains the same.

Accessibility is not “make the task easier.” It is the craft of removing barriers that are irrelevant to the goal while keeping the important reasoning. If the goal is to find and justify a growth rule, perfect drawing, rapid handwriting, colour perception, mouse control, and decoding an unexplained formula should not be hidden entrance exams.

CAST's guidance on [clarifying mathematical notation and symbols](https://udlguidelines.cast.org/representation/language-symbols/text-notation-symbols/) recommends supporting access to notation with alternatives and explicit connections. The National Council of Teachers of Mathematics states in its [access and equity position](https://www.nctm.org/Standards-and-Positions/Position-Statements/Access-and-Equity-in-Mathematics-Education/) that high expectations and access to meaningful mathematics belong together. These principles guide the design; they do not prescribe one format for every learner.

## The mathematical destination

Imagine a row of joined square tables. One chair fits at each short end, and one chair fits along the top and bottom of every table.

- With one table, there are 4 chairs.
- With two joined tables, there are 6 chairs.
- With three joined tables, there are 8 chairs.

The lesson asks:

> How many chairs surround any number of tables in one straight row, and how can you convince someone your rule always works?

The rule is “double the number of tables, then add two.” Later we write this compactly as $c = 2t + 2$, where $t$ means the number of tables and $c$ means the number of chairs. The letters are names for varying quantities, not mysterious objects.

## Step 1: specify goal and non-goals

**Goal.** Learners describe a relation between two changing quantities, extend it, and justify a general rule by identifying what grows and what stays fixed.

**Evidence.** A learner can predict an unshown case, explain the two parts of the rule, and check that the rule agrees with at least two known cases.

**Non-goals for this lesson.** Accurate freehand drawing, colour naming, memorising the word *coefficient*, manipulating algebra without meaning, and speed.

Naming non-goals prevents accidental assessment. A shaky drawing can contain a sound generalisation. A polished graph can conceal a copied rule.

## Step 2: offer equivalent descriptions

Provide the pattern in at least three forms. They must carry the same information, not be unrelated decorations.

### Objects or raised pieces

Use square cards, magnetic tiles, or tactile squares in a row. Use identical counters for chairs. A learner who cannot see the arrangement can trace the outer boundary and count: one counter at each end, plus one above and one below each table.

### Exact text description

> Place identical square tables edge to edge in one horizontal row. Adjacent tables share an edge, and no chair is placed on a shared edge. Put one chair along the top and one along the bottom of each table. Put one additional chair at the left end of the row and one at the right end.

This text is a mathematical alternative, not image-caption filler. It names orientation, adjacency, the no-chair condition, and all counted objects.

### Numerical table

| Number of tables | Number of chairs |
|---:|---:|
| 1 | 4 |
| 2 | 6 |
| 3 | 8 |
| 4 | 10 |

If a digital diagram uses colour, also use shape or labels. Mark tables \`T1\`, \`T2\`, … and chairs with circles; never make “blue versus green” the only distinction.

## Step 3: let learners notice before naming

Ask questions with several response modes:

1. Build or describe the case with four tables.
2. What changes when one table is added?
3. Which chairs can be grouped in a way that works for every row length?
4. Predict the chairs for ten tables. Explain without drawing all ten if you can.

A learner might say “add two each time.” That is a valid recursive description: it tells how to get the next case. Press for a direct description too: for ten tables, twenty chairs lie along the long sides and two lie at the ends, so there are 22.

Allow a learner to respond by arranging counters, dictating a sentence, selecting a row in an accessible table, or typing. Require the reasoning, not one motor action.

## Step 4: connect representations explicitly

Do not merely display an object, table, and equation. Point to the correspondence.

In $c = 2t + 2$:

- $t$ names how many tables are in the row;
- multiplying by 2 counts one top and one bottom chair per table;
- the final $+2$ counts the two end chairs;
- $c$ names the resulting chair count;
- the equals sign says the two descriptions name the same number.

Check cases:

- one table: $2\\cdot 1+2=4$;
- three tables: $2\\cdot 3+2=8$;
- ten tables: $2\\cdot 10+2=22$.

Here the centred dot in $2\\cdot 3$ means multiplication. The compact writing $2t$ also means $2$ multiplied by $t$.

The table shows that each step in the left column adds 1 while each step in the right column adds 2. The object shows *why* the change is 2. The equation predicts any case without building all earlier cases.

## Step 5: include a tempting wrong rule

A learner proposes $c=4t$: four chairs per table. It works for one table. Why does it fail later?

When two tables join, the touching sides are internal, so chairs cannot remain along those shared edges. For two tables, $4t=8$, but the arrangement has 6 chairs. A single agreeing case cannot identify a rule.

Another proposal is $c=2t+1$. Test one table: it predicts 3 instead of 4. Testing both a small known case and a distant case is an accessible habit of verification.

### Boundary cases

What should happen for zero tables? The physical story may contain no row and therefore no end chairs, giving zero chairs. The formula gives $2\\cdot 0+2=2$. Thus the formula was derived for positive whole numbers of tables. Mathematics has not failed; its stated domain matters.

What about tables in a ring? There are no exposed ends, so the rule becomes $c=2t$ under the same chair convention. What about an L-shape? Corners and shared edges must be reconsidered. Changing the arrangement changes the model.

## Step 6: design for keyboard and assistive technology

For a digital version:

- put every action in the ordinary tab order;
- use buttons named “Add one table,” “Remove one table,” and “Reset to one table” rather than an unlabeled canvas click;
- keep a text status such as “4 tables; 10 chairs; change from previous row: plus 2”;
- expose the full data table as HTML, not pixels inside a canvas;
- let arrow keys move through a data table according to the platform's established pattern, but do not replace native controls with a novel shortcut;
- retain a visible focus indicator;
- announce discrete changes, not a stream of decorative animation frames;
- if movement illustrates construction, honour the user's reduced-motion preference and provide an immediate state change;
- do not rely on drag-and-drop; provide add, remove, and position controls.

If a canvas cannot load, the exact text description, controls, equation, and table should still support prediction and checking. The alternative is part of the instrument, not an apology after failure.

## Step 7: manage language without erasing precision

Preteach only words needed for the mathematical relation: *row*, *joined*, *end*, *each*, *total*, and *rule*. Pair a word with an action or example. A multilingual learner may discuss a conjecture in a familiar language and then connect key terms across languages.

Avoid vague phrases such as “move it over” or “obviously.” Say which quantity changes and by how much. At the same time, do not require a paragraph when pointing to “two per table” and “two ends” demonstrates the full decomposition.

Screen-reader-friendly linear mathematics can read:

> c equals two times t, plus two. t is the number of tables; c is the number of chairs.

The spatial object and the linear sentence complement each other.

## Step 8: check understanding in more than one direction

### Worked example: forward and inverse chair counts

### Forward question

How many chairs fit around 25 tables?

**Worked answer.** There are two side chairs per table, $2\\cdot 25=50$, and two end chairs. Total: $50+2=52$.

### Inverse question

A row has 42 chairs. How many tables could it contain?

**Worked answer without assumed algebra.** Remove the two end chairs, leaving 40. Pair the remaining chairs into top-and-bottom pairs, one pair per table. $40\\div 2=20$, so there are 20 tables.

**Symbolic check.** Starting from $42=2t+2$, subtract 2 to obtain $40=2t$, then divide both sides by 2: $t=20$.

### Classification question

Which chair totals are possible: 11, 18, 31, 50?

**Answer.** For a positive whole number of tables, $2t$ is even and adding 2 remains even. Thus 11 and 31 are impossible. For 18, remove 2 and halve: 8 tables. For 50: 24 tables. The parity—whether a number is even or odd—is an invariant consequence of the rule.

### Transfer question

A row of triangles has one counter at each end and three counters for every triangle. Write a rule after defining your letters.

**Answer.** Let $n$ be the number of triangles and $q$ the number of counters. Then $q=3n+2$. The story changed the “per object” rate from 2 to 3 while keeping two fixed ends.

## An accessibility audit before teaching

Ask:

- Can the task be perceived through exact text and numbers without colour or sight?
- Can it be operated without a mouse, precise dragging, or rapid movement?
- Is every new symbol defined in words and connected to a quantity?
- Can learners express the same reasoning by speech, objects, text, or symbols?
- Have I preserved the central generalisation and justification?
- Does the table use headers and a sensible reading order?
- Is feedback specific—“your rule matches cases 1 and 2 but predicts 12 rather than 10 for case 4”—rather than merely red/green?
- Have I tested the alternative route rather than assuming it is equivalent?
- Have I asked learners who use access tools about the design instead of treating a checklist as their voice?

Accommodations remain individual. High contrast helps many people but does not replace a tactile or text route; spoken explanation helps many people but does not replace captions or readable notation. Accessibility testing includes disabled learners and actual assistive technology.

## Exercises with hints and complete solutions

### Exercise 1: Colour-only fraction task
<a id="design-accessible-math-lesson-ex-1"></a>

Original: “Which red slice is larger than the blue slice?” The unlabeled pie images use different-sized wholes.

<details><summary>Hint 1</summary>

A fraction comparison requires a specified common whole.

</details>
<details><summary>Hint 2</summary>

Provide equal-length strips, exact labels and a common subdivision instead of relying on colour.

</details>
<details><summary>Solution</summary>

State: “Compare three eighths of a unit strip with two fifths of an equal-length unit strip.” Three eighths, written $3/8$, means three of eight equal parts of the whole; $2/5$ means two of five equal parts. Label each part, use distinct line patterns as well as optional colour, provide the endpoints in a number table, and offer physical strips. Cut each eighth into five equal subparts and each fifth into eight equal subparts. Both strips now use fortieths:

$3/8=15/40$, $2/5=16/40$, so $2/5>3/8$. The greater-than sign points from the larger value on its left toward the smaller value on its right.

The redesign also repairs the mathematical ambiguity: comparisons require the same whole.

</details>

### Exercise 2: Mouse-only graph task
<a id="design-accessible-math-lesson-ex-2"></a>

Original: “Drag the point until the line has slope 2.”

<details><summary>Hint 1</summary>

Preserve the slope target while changing how coordinates can be entered.

</details>
<details><summary>Hint 2</summary>

Expose both point coordinates and the two coordinate differences in a text table.

</details>
<details><summary>Solution</summary>

Define slope as vertical change divided by horizontal change. Add keyboard buttons for horizontal and vertical coordinate changes, numeric input boxes, and a table listing the two points and both changes. A text status might say: “Points (0,1) and (3,7). Horizontal change 3; vertical change 6; slope 6 divided by 3 equals 2.” The learner can achieve and verify the same goal without dragging.

</details>

## Source and uncertainty note

CAST's UDL Guidelines are a design framework, and NCTM's statement is a professional position; neither guarantees that a particular adaptation works for a particular learner. Accessibility standards, assistive technologies, local legal duties, and learner preferences evolve. This lesson therefore treats access as an iterative design-and-test process. Mathematical equivalence must be checked too: if an alternative supplies the pattern's rule while the primary task asks learners to discover it, the routes are not equivalent.

## Where next

Use the misconception recipe to build contrasts that reveal reasoning without adding avoidable access barriers. *Teaching for Mathematical Understanding* extends the lesson into progressions, assessment, and task selection. The proof and problem-solving teaching course develops ways to fade representation supports while preserving explanation and learner agency.
`;export{e as default};