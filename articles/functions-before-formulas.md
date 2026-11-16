
# Function Machines Before Formulas

A function is a dependable assignment: choose one allowed input and the rule gives exactly one output. It may be a machine, a table, a sentence, a route through a maze, or a formula. This first encounter starts with actions and teaches every symbol it uses.

## 1. The mystery machine

Imagine a box with a slot marked **in** and a window marked **out**. Four trials give:

| Input | Output |
|---:|---:|
| 0 | 3 |
| 1 | 5 |
| 4 | 11 |
| 10 | 23 |

One possible rule is “double the input, then add 3.” Check it: input 4 doubles to 8, and adding 3 gives 11.

We can name the input $x$. The letter is only an empty label for whichever number enters. We can name the whole rule $f$, and write

$$f(x) = 2x + 3$$

Read this as “the output of rule $f$ at input $x$ equals twice $x$, plus 3.” Side-by-side $2x$ means $2 \times x$. At input 10, $f(10)=2\times 10+3=23$.

Did the four trials prove that this is the hidden rule? No. A mischievous machine could follow $2x+3$ for those four inputs and give 999 at input 2. Finite evidence can suggest a rule, but a stated rule tells us what must happen at every allowed input.

### Experiment: invent rival rules

Find two rules that agree with the small table

| Input | Output |
|---:|---:|
| 0 | 0 |
| 1 | 1 |
| 2 | 4 |

The simple guess is “square the input”: multiply it by itself. But “square the input when it is 0, 1, or 2; otherwise output 17” also fits. Pattern spotting needs both imagination and honesty about what the data determine.

## 2. What makes an assignment a function?

The rule “whole number → its double” is a function: each whole number has one double. The rule “student → month of birth” is a function if each student has one recorded month. Two students may share an output; that is allowed.

The assignment “person → phone number” may fail to be a function because one person can have several phone numbers. We could repair it by saying “person in this class → the one emergency number recorded on this form.” A precise input set and a precise output rule matter.

There are two different failures:

- an allowed input receives no output;
- an allowed input receives more than one output.

Either failure breaks the function promise. Many inputs sharing one output does **not** break it.

The set of allowed inputs is the **domain**. For “give the number of letters in an English weekday name,” the domain could be the seven weekdays. For “share 12 biscuits equally among $n$ people,” zero people is not an allowed input. A formula can be typable at an input that a story forbids, or impossible at an input the story mentions. Always state the domain.

## 3. Three views of one rule

Suppose a game starts you with 5 points and awards 3 points per star. Let $s$ be the number of stars. Then the score rule is

$$P(s)=5+3s$$

The same function has several views:

- words: begin at 5, add 3 per star;
- table: $(0,5)$, $(1,8)$, $(2,11)$, $(3,14)$;
- arrow machine: $s \to multiply by 3 \to add 5 \to P$;
- graph: plot input horizontally and output vertically;
- formula: $P(s)=5+3s$.

Each view makes something easier. The story explains what is meaningful. The table gives exact cases. The graph reveals overall shape. The formula makes calculation compact.

A graph passes the **vertical-line test** when no vertical line meets it more than once. Why? A vertical line fixes one input. Two intersections would give that input two outputs. A sideways circle fails: many vertical lines meet it twice.

In the game, only whole nonnegative star counts make sense. Connecting the graph’s dots with a line can help reveal a trend, but the connecting points do not describe attainable scores such as 9.5 points for 1.5 stars.

## 4. Run a machine backward

Our mystery machine doubles, then adds 3. Suppose its output is 17. What input entered?

Work backward and undo actions in reverse order:

$$17 \to subtract 3 \to 14 \to divide by 2 \to 7$$

So input 7 produces output 17. The backward rule is called an **inverse** when it works as a genuine function on the relevant outputs.

Not every machine can be cleanly reversed. The squaring machine sends both 3 and −3 to 9 because $3\times 3=9$ and $(-3)\times (-3)=9$. If the backward question is “what input produced 9?”, it has two answers. The reverse assignment is not a function unless we restrict the original domain, for example to nonnegative inputs. On that restricted domain, the inverse sends 9 to 3.

This is the first important counterexample: having a forward function does not guarantee a backward function. Repeated outputs lose information.

## 5. Join machines

Let machine $f$ double an input and add 3. Let machine $g$ take the absolute distance from zero: it removes a negative sign if present. We write this distance with bars: $|-4|=4$ and $|4|=4$.

For input −5:

1. $f$ gives $2\times (-5)+3=-7$;
2. $g$ gives $|-7|=7$.

The joined rule “do $f$, then $g$” outputs 7. Order matters. Doing $g$ first gives 5, then $f$ gives 13. Machine chains behave like instructions: “put on socks then shoes” is not the same as “shoes then socks.”

Mathematicians write the joined rule as $g(f(x))$. The inner instruction $f(x)$ happens first. Parentheses mark its output as the input to $g$.

### Worked chain

**Worked example.**

Let $p$ add 4 and let $q$ triple. At input 2,

- add then triple: $q(p(2))=q(6)=18$;
- triple then add: $p(q(2))=p(6)=10$.

The chains agree at some special inputs only if an equation forces them to. In this example $3(x+4)=3x+4$ would require 12=4, which never happens. They never agree.

## 6. Move a familiar graph without redrawing from scratch

Start with the squaring rule $g(x)=x^{2}$, meaning $x\times x$. Its smallest output is 0 at input 0. Now consider

$$f(x)=(x-2)^{2}+1$$

The inside becomes zero at input 2, so the smallest output is 1 there. The old bottom point $(0,0)$ has moved to $(2,1)$: two steps right and one up.

The sign inside can feel backward. Replacing $x$ by $x-2$ moves the feature right because $x$ must reach 2 before the inside reaches zero. Test anchor points rather than memorising a slogan.

If we put a negative multiplier outside, $-(x-2)^{2}+1$, every output relative to the horizontal axis changes sign before the final upward shift. The bowl turns upside down and its highest point is $(2,1)$.

Setting the outside multiplier to zero creates a useful boundary case: $0\times (x-2)^{2}+1=1$ for every input. The graph is a horizontal line. A transformation rule should explain degenerate cases, not quietly exclude them.

## 7. A function can be given in pieces

A parcel service charges £4 for parcels up to 2 kilograms and £2 for each kilogram beyond 2. One rule is not enough unless we use cases:

- if weight is at most 2 kg, cost is £4;
- if weight is above 2 kg, cost is $4+2(w-2)$ pounds.

At exactly 2 kg, the first case applies and costs £4. Just above 2 kg, the second is just above £4. The boundary words “at most” and “above” decide whether a point is included.

A piecewise rule is still one function if every allowed input is assigned exactly one output. Cases may meet, jump, or leave a hole. What matters first is the assignment promise.

## A no-code algorithm

You can evaluate any machine chain with an inspectable procedure:

```text
procedure evaluate_chain(input, ordered_rules):
    value := input
    for each rule in ordered_rules:
        if value is not allowed by rule:
            report "undefined"
        value := rule(value)
    return value
```

If there are $n$ rules and each takes one basic calculation, the procedure uses $n$ steps: its time grows in direct proportion to the chain length. It stores one current value, so its extra memory stays constant.

## Practice lab

<a id="deep-dive-functions-before-formulas-ex-1"></a>

### Exercise 1

1. A machine adds 6 and then doubles. Complete outputs for inputs 0, 3, and −4.

<details>
<summary>Hint 1</summary>

The machine performs two actions in a fixed order.
</details>

<details>
<summary>Hint 2</summary>

Add six to each input before doubling; reversing the actions gives a different rule.
</details>

<details>
<summary>Solution</summary>

Add then double: $(0+6)\times 2=12$, $(3+6)\times 2=18$, and $(-4+6)\times 2=4$. This differs from “double then add 6.”

</details>

<a id="deep-dive-functions-before-formulas-ex-2"></a>

### Exercise 2

2. Write a different machine that gives the same three outputs as “input squared” at inputs 0, 1, and 2, but disagrees at input 3.

<details>
<summary>Hint 1</summary>

Agreement at three inputs does not determine every output of a function.
</details>

<details>
<summary>Hint 2</summary>

Keep the three required outputs and define a different value at an input the table did not specify.
</details>

<details>
<summary>Solution</summary>

For example: square the input when it is 0, 1, or 2, and output 100 otherwise. It gives 100 rather than 9 at input 3. Many answers work; that is the point about finite evidence.

</details>

### Further exercises

3. Is “book → author” always a function? Give a precise repair if necessary.
4. The rule $T(c)=2c+5$ gives an output of 21. Reverse the actions to find $c$.
5. The squaring rule is restricted to inputs from 0 upward. Find the reverse outputs for 0, 4, 25, and 2. (For 2, a decimal estimate is enough.)
6. Let $a$ subtract 1 and $b$ square. Calculate $b(a(3))$ and $a(b(3))$.
7. For $f(x)=(x+3)^{2}-2$, locate the lowest point without drawing every point.
8. A cinema charges £8 for ages below 16 and £12 for ages 16 and above. State the cost at ages 15, 16, and 21. Explain why the boundary is unambiguous.

## Solutions


3. Not always: a book can have several authors. “Book in this shelf → its ordered list of credited authors” is a function whose outputs are lists. Alternatively restrict to single-author books.
4. From 21 subtract 5 to get 16, then divide by 2 to get $c=8$. Check $2\times 8+5=21$.
5. The reverse gives 0, 2, 5, and about 1.414. Restricting to nonnegative inputs removes the negative alternatives.
6. $a(3)=2$, then $b(2)=4$. In the other order, $b(3)=9$, then $a(9)=8$. Order changes the result.
7. The inside $x+3$ is zero at $x=-3$; squaring is then 0, so the lowest output is −2. The point is $(-3,-2)$.
8. The costs are £8, £12, and £12. Age 16 belongs only to “16 and above”; the cases neither overlap nor leave a gap.

## Where next?

You now have the central promise: one output per allowed input. Continue to a full algebra course to connect function views with equations, inequalities, factors, exponents, and models. In the live transformation observatory, use the exact table alongside the picture and ask three questions every time: which inputs are allowed, where is the output zero, and which features survive the change?
