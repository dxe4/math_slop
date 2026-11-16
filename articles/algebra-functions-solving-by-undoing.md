
# Solving by undoing

A number goes into a machine. The machine multiplies it by three, then adds four. The number coming out is twenty-five. What went in?

You can try numbers until one works. A more dependable method reads the machine backwards: remove the last action first, then remove the action before it. Subtract four from twenty-five to get twenty-one. Divide twenty-one by three to get seven. Check by going forwards: three times seven is twenty-one, and adding four gives twenty-five.

This is a first encounter at **School foundations (L0)**. You need addition, subtraction, multiplication and division by a nonzero number. The [Substitution and equations refresher](../apps/unhurried/refresh/algebra/index.html) supplies a short warm-up. By the end, you should be able to turn an arithmetic instruction into a simple equation, undo its actions in the right order, and check the result in the original instruction.

## Giving the hidden number a name

Instead of drawing a box for the hidden input, give it the name $x$. A letter here is a label for the number we want to find. The machine's instruction becomes

$$3x+4=25.$$

The expression $3x$ means three times $x$. The equals sign says that the complete expression on its left and the number on its right have the same value. It does not mean “do the next calculation”. Solving means finding the values of $x$ that make the stated equality true.

The rule applies its operations in a definite order. First multiply the input by three. Then add four. In particular, $3x+4$ is different from $3(x+4)$, which says to add four before multiplying. The brackets change the machine. Reading the expression accurately is therefore part of solving it, rather than a separate matter of tidying notation.

## Undo the last action first

An **inverse action** reverses a previous action on the numbers under discussion. Subtracting four reverses adding four. Dividing by three reverses multiplying by three. If the forward route is “multiply, then add”, the backward route is “subtract, then divide”.

One way to remember the order is getting dressed: shoes go on after socks, so shoes come off before socks. In the same way, the addition sits outside the multiplication in $3x+4$. Remove that addition before trying to recover the input to the multiplication.

We can record the backward route while keeping an equality on every line:

$$3x+4=25,$$
$$3x+4-4=25-4,$$
$$3x=21,$$
$$x=7.$$

We subtracted the same number from both sides. We then divided both sides by three. Those actions preserve equality. They are also reversible: adding four reverses the first, and multiplying by three reverses the second. That is why the new equation has exactly the same solutions as the old one. We have not simply made the expression look smaller.

The number used for division must be nonzero. Dividing by zero is not an available arithmetic operation. Nor can every forward action be uniquely undone: multiplying any number by zero gives zero, so knowing that output does not reveal the input. The undoing method works here because each particular action has a valid reverse.

## Worked example: the price of identical notebooks

A shop charges £2 for each notebook and a fixed £3 delivery charge. An order costs £17 altogether. How many notebooks were ordered? Assume the order contains a whole number of these identical notebooks and no other charges.

Let $n$ be the number of notebooks. The notebooks cost $2n$ pounds, and delivery adds three pounds, so

$$2n+3=17.$$

Remove the fixed charge first: $17-3=14$. This leaves the money paid for notebooks. Each costs £2, so $14\div2=7$. Written as equations, the same reasoning is

$$2n=14,\qquad n=7.$$

Check the answer in the original story. Seven notebooks cost £14. Adding delivery gives £17, exactly the stated bill. Seven is a nonnegative whole number, so it also fits the meaning of “number of notebooks”. An arithmetic result alone would not settle a story if it gave an impossible number of objects or used the wrong units.

The delivery charge is added once. Writing $2(n+3)=17$ would describe another story, one in which three extra notebooks were included in the multiplied quantity. The position of the brackets matters because it determines what the charge applies to.

## A common wrong turn

For $3x+4=25$, dividing the right side by three and then subtracting four gives $25/3-4$, which is not seven. The problem is that this backward route reverses the actions in their original order rather than their opposite order.

It is valid to divide the *whole equation* by three, but then every term on the left must be divided too:

$$x+\frac43=\frac{25}{3}.$$

Subtracting $4/3$ then gives $x=21/3=7$. This works, but introduces fractions unnecessarily. “Undo the last action first” chooses a convenient valid route; it does not claim that every other route is forbidden.

## Exercises

### Exercise 1
<a id="deep-dive-algebra-functions-solving-by-undoing-ex-1"></a>
A machine adds three to its input, then multiplies the result by four. Its output is twenty-eight. Find the input and write an equation that describes this particular machine.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Which action happened last? Begin by reversing that action on the output.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Keep brackets around the result of adding three when writing the forward instruction.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

The forward equation is $4(x+3)=28$. Dividing both sides by four gives $x+3=7$. Subtracting three gives $x=4$. Checking forwards, four plus three is seven, and four times seven is twenty-eight. The different equation $4x+3=28$ would describe multiplication before addition and would not represent the stated machine.

</details>

### Exercise 2
<a id="deep-dive-algebra-functions-solving-by-undoing-ex-2"></a>
A learner solves $5x-6=19$ by adding six only to the left side, obtaining $5x=19$ and then $x=19/5$. Explain the mistake, find the correct answer, and check it.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The equals sign compares two values. What happens to that comparison if only one value is increased?

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Undo subtraction by adding the same amount to both sides before dividing.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

Adding six only on the left does not preserve equality. Add six to both sides: $5x-6+6=19+6$, so $5x=25$. Divide both sides by five to obtain $x=5$. The original expression then gives $5\times5-6=25-6=19$, as required. The proposed $19/5$ instead gives $19-6=13$, so it fails the original equation.

</details>

## Continue into the book

The central idea is reversible equality: reverse the machine's actions, keep both sides equal, and check the original statement. The next article, [Functions as machines and graphs](#/articles/algebra-functions-functions-as-machines-and-graphs), looks at what happens when the same machine accepts many inputs.

For the fuller school-algebra treatment, continue to [Expressions, Laws, and Factorising](#/books/algebra-and-functions/expressions-laws-factorising) and [Linear Equations, Inequalities, and Systems](#/books/algebra-and-functions/linear-equations-inequalities-systems) in **Algebra and Functions**. Those chapters supply the longer development beyond this single undoing idea.
