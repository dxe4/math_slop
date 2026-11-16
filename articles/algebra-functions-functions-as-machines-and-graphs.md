
# Functions as machines and graphs

Suppose a number machine doubles its input and then adds one. Feed it zero and it returns one. Feed it three and it returns seven. The instruction stays the same while the input changes. A **function** is a dependable assignment of this kind: each allowed input has exactly one output.

This article is at **School foundations (L0)**. It introduces its notation using arithmetic and a small table. The [Substitution and equations refresher](../apps/unhurried/refresh/algebra/index.html) reviews putting a number into an instruction; the [Coordinates and slope refresher](../apps/unhurried/refresh/coordinates/index.html) explains how to locate ordered pairs. You do not need to know algebraic rearrangement or graph transformations before starting. The aim is to recognise a table, a formula and a graph as ways of describing the same assignment.

## What makes the assignment a function?

The word “allowed” matters. Imagine that our machine accepts only the four whole numbers zero, one, two and three. This list is its **domain**. Its rule produces the following table:

| Input | Output |
| ---: | ---: |
| 0 | 1 |
| 1 | 3 |
| 2 | 5 |
| 3 | 7 |

Every allowed input appears once and has one output. This table therefore describes a function on its announced domain. The outputs it actually produces, here one, three, five and seven, form its **range**.

Two different inputs are allowed to have the same output. A machine that always returns five is still a function: each input receives one definite answer. What is forbidden is assigning two different outputs to the same input. A table saying that input two gives both five and nine would not describe a function unless some extra information distinguished the two inputs.

A real machine can malfunction or behave randomly. The mathematical function describes the exact assignment we have specified, rather than every possible physical behaviour of a box. If the output also depends on a setting, we must fix that setting or include it as part of the input. Otherwise “input two” does not give enough information to determine the answer.

## A short notation for the same rule

Give the function a name, say $f$. Write $f(3)$ for its output when the input is three. The brackets identify the input; they do not ask us to multiply a number called $f$ by three. Our doubling-and-adding instruction can be written

$$f(x)=2x+1.$$

The letter $x$ stands for whichever allowed input we choose. The expression $2x$ means two times that input. To find $f(3)$, replace $x$ by three everywhere in the instruction: $f(3)=2\times3+1=7$.

The formula alone does not specify that our first machine accepts only four inputs. We must keep the domain statement too. We could build a different function using the same formula on every nonnegative whole number. That function would accept four and return nine. The first function has no assigned output at four because four is outside its domain. Extending a domain is a new specification, not a consequence of drawing a longer table.

## Worked example: reading the graph of the finite machine

Draw two perpendicular number lines meeting at zero. The horizontal line records inputs. The vertical line records outputs. An **ordered pair** such as $(2,5)$ says “horizontal coordinate two, vertical coordinate five”. The order matters: $(5,2)$ is usually another location.

The graph of our four-input function consists of the points

$$(0,1),\quad(1,3),\quad(2,5),\quad(3,7).$$

To place $(2,5)$, move two units horizontally from zero and then five units vertically. This point records exactly the same assignment as the table row saying that input two has output five. To read an output from the graph, locate the input on the horizontal axis and find the recorded point above that input.

The four points lie along a straight line, but the function's graph is just those four points. Joining them with solid segments would add points at inputs such as one half. Those inputs are not in the announced domain. If instead we announce that every real number is allowed and use the same formula, its graph is the whole corresponding straight line. A picture must preserve the specified inputs rather than quietly inventing additional ones.

For a numerical function, this also explains the **vertical-line test**. A vertical line chooses one input coordinate. Two different points of the graph on that line would assign two different outputs to the same input. That cannot happen for a function. An allowed input must have one point; an input outside the domain has none.

## A table can suggest more than it proves

Suppose someone gives only the first three rows, without stating the rule or the domain. “Double and add one” fits them, but so does a rule that gives those three outputs and returns one hundred at input three. The observed table does not force the next row.

There are two different situations to keep separate. If a table is declared to be the complete definition on a finite domain, its listed assignments settle the function. If the table is a sample from an unknown larger domain, further outputs require information about the rule. Recognising a simple pattern is a useful conjecture; it is not a guarantee about an unspecified machine.

The distinction also limits graphs drawn from samples. A few plotted points can display observed values without determining what happens between them. Asking which points are part of the definition prevents a neat-looking line from making an unsupported mathematical claim.

## Exercises

### Exercise 1
<a id="deep-dive-algebra-functions-functions-as-machines-and-graphs-ex-1"></a>
The allowed inputs are zero, one and two. A table assigns outputs four, four and six respectively. Is this a function? Give its range and its graph points.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Check outputs one input at a time. Repeated outputs are different from two outputs for one input.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

List each graph point with input first. A range lists the distinct outputs without repetition.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

It is a function because every allowed input has exactly one output. The repeated output four is permitted. The range is the two-number set consisting of four and six. Its graph consists of $(0,4)$, $(1,4)$ and $(2,6)$. No extra points between these are included because the domain contains only the three stated inputs.

</details>

### Exercise 2
<a id="deep-dive-algebra-functions-functions-as-machines-and-graphs-ex-2"></a>
A machine accepts only the inputs one and two. Its graph is declared to contain $(1,3)$, $(2,5)$ and $(2,8)$. Explain why this is not a function. Give two different ways to repair the assignments without changing the domain.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Look for points with the same first coordinate but different second coordinates.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Each allowed input needs one output. Decide which conflicting assignment to remove.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

Input two has both output five and output eight. Thus the assignment violates the exactly-one-output requirement. One repair keeps $(1,3)$ and $(2,5)$ and removes $(2,8)$. Another keeps $(1,3)$ and $(2,8)$ and removes $(2,5)$. Both repaired graphs assign exactly one output to each of the two allowed inputs. Neither is forced by the original conflicting information; a choice or further specification is needed.

</details>

## Continue into the book

A function is the assignment; its table, notation and graph are descriptions of that assignment. Keep its domain visible, allow repeated outputs, and demand one output for each allowed input. The [Functions, Domains, and Graphs chapter](#/books/algebra-and-functions/functions-domain-graphs) develops these distinctions more fully, while [Straight Lines and Linear Models](#/books/algebra-and-functions/straight-lines-linear-models) studies the straight-line case.

The earlier [Function Machines Before Formulas](#/articles/functions-before-formulas) gives further puzzles. It is optional enrichment, rather than preparation for this arithmetic-level introduction. Once the assignment idea is comfortable, the [Functions and composition refresher](../apps/unhurried/refresh/functions/index.html) and [Transforming graphs](#/articles/algebra-functions-transforming-graphs) provide the next, L1 step.
