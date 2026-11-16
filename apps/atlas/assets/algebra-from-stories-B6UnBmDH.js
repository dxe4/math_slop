var e=`---
id: book-algebra-from-stories
title: "Algebra from Stories: Unknowns, Rules, and Function Machines"
level: foundation
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Algebra from Stories: Unknowns, Rules, and Function Machines

Algebra is arithmetic with room for a number not yet known or a pattern that can change. The letters are labels, not a new kind of number. Begin with the story, then compress it into symbols.

## 1. A letter can hold a place

A café charges £2 for delivery plus £3 per sandwich. For $s$ sandwiches, the cost is

$C = 3s + 2$.

Read it in action order: multiply the sandwich count by £3, then add £2. If $s = 4$, then $C = 3 \\times 4 + 2 = 14$ pounds.

Here $s$ varies, while 3 and 2 are fixed. $C$ depends on $s$. A letter used this way is a **variable**. In a question such as $3s+2=14$, the same letter is an **unknown** whose value is to be found. The expression $3s+2$ is a rule; it is not asking for a solution by itself.

**Misconception:** $3s$ does not mean the two-digit number “3s,” and it does not mean $3+s$. Adjacent number and letter mean multiplication.

Expressions can look different but agree. In $2(x + 3)$, there are two groups of $x+3$, so

$2(x + 3) = 2x + 6$.

Draw two identical boxes, each containing one $x$ token and three counters. The drawing makes the distributive rule visible.

## 2. An equation is a claim of balance

Suppose a taxi fare was £17: £5 fixed charge plus £3 per mile. The equation is

$3m + 5 = 17$.

Think of a balance scale. Remove £5 from both sides:

$3m = 12$.

Share both sides into three equal groups:

$m = 4$.

Check in the original story: $3 \\times 4 + 5 = 17$. A solution is a value that makes the original claim true.

Doing “the same thing to both sides” preserves equality, provided the operation is defined. To keep the transformed equation equivalent to the original, the step must also be reversible on the working domain. Adding the same number and multiplying by a nonzero number are reversible; division by zero is never defined. Squaring both sides preserves a true equality but is not reversible over the reals, so it can introduce extra candidate solutions. It is clearest to say what undoes the current action: subtract 5 to undo adding 5; divide by 3 to undo multiplying by 3.

For $4 - 2x = 10$, subtract 4 to obtain $-2x = 6$, then divide by $-2$: $x = -3$. Checking prevents the common sign error: $4 - 2(-3) = 4 + 6 = 10$.

## 3. Tables reveal a function

A function is a rule assigning exactly one output to each allowed input. The café rule makes this table, including its algebraic extension to zero sandwiches:

| Sandwiches $s$ | Cost $C = 3s + 2$ |
|---:|---:|
| 0 | 2 |
| 1 | 5 |
| 2 | 8 |
| 4 | 14 |

The output rises by 3 whenever the input rises by 1. That constant change is the slope or rate. The algebraic value at input zero, 2, is the intercept; it does not describe an actual order.

Plot the pairs $(s,C)$ on squared paper. They lie on a straight line, but the real café accepts only positive whole sandwich counts. A drawn line between points can suggest half a sandwich even when the situation does not permit one. The **domain** is the set of allowed inputs, and context helps choose it.

**Misconception:** a function is not necessarily a formula. A timetable, lookup table, or “person → birth date” rule can be a function. But “person → phone number” may assign several outputs, so it needs a more careful definition.

## 4. Work between representations

Story, expression, table, graph, and equation show different features.

Consider a tank holding 50 litres and draining 4 litres per minute:

- Story: start at 50, lose 4 each minute.
- Rule: $V = 50 - 4t$.
- Table: at $t = 0, 5, 10$, volume is $50,30,10$.
- Graph: a descending straight line.
- Question “When is 18 litres left?”: $50 - 4t = 18$.

Solving gives $-4t = -32$, so $t = 8$ minutes. The model should stop at $t = 12.5$, when the volume reaches zero; afterward the formula predicts negative water, which is mathematically calculable but physically wrong.

## 5. A home function experiment

Choose a straight-sided container. Add equal scoops of water and mark the height after each scoop. Your input is scoop count; output is water height.

1. Make a two-column table.
2. Plot the points.
3. Decide whether equal scoops create roughly equal height changes.
4. Predict one unmeasured height.
5. Explain measurement errors: unequal scoops, thick marks, or a container that widens.

A widening bowl usually produces a curve because each scoop spreads across a larger area. Functions describe both straight and curved relationships.

## Worked comparison: two plans

Plan A costs £10 plus £2 per visit: $A(v) = 10 + 2v$.
Plan B costs £4 per visit: $B(v) = 4v$.

They cost the same when $10 + 2v = 4v$. Subtract $2v$: $10 = 2v$, so $v = 5$. At fewer than five visits, B is cheaper; above five, A is cheaper. At exactly five, both cost £20.

## Practice

1. Translate: “seven less than twice a number $n$.”
2. Expand $3(y + 4)$.
3. Solve and check: $5x + 7 = 27$.
4. A candle is 24 cm tall and burns 2 cm each hour. Give a rule, state a sensible time domain, and find its height after 7 hours.
5. Is “whole number → its positive factors” a function under the definition above? Explain.
6. For $f(x)=2x-1$, complete outputs for inputs $-1,0,3$.

## Answers

1. $2n-7$. “Seven less than” means subtract 7 from the doubled number.
2. $3y+12$.
3. Subtract 7, then divide by 5: $x=4$; check $5(4)+7=27$.
4. $h=24-2t$; after 7 hours, $h=10$ cm. If time is modeled continuously, a sensible physical domain is $0\\le t\\le 12$ hours; if observations occur only hourly, use the whole numbers from 0 through 12.
5. Not as stated: 6 has several outputs, including 1, 2, 3, and 6. It could be a function into **sets** of factors.
6. $f(-1)=-3$, $f(0)=-1$, $f(3)=5$.

### Reader’s checkpoint

Invent a fixed-charge-plus-rate story. Express it as a rule, a four-row table, and a graph. Ask and solve one equation about it, then state which inputs make sense.
`;export{e as default};