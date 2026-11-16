var e=`---
id: visual-lab-quantity-division
title: "What Does This Quotient Measure?"
level: foundation
estimated_minutes: 100
license: CC BY-SA 4.0
---

# What does this quotient measure?

You have $3/4$ litre of juice. Someone says “two-thirds.” Do they mean take two-thirds of your juice, fill two-thirds-litre portions, or find the capacity of a jug that is two-thirds full? Those questions use the same two numbers. Their unknowns have different meanings.

This workshop develops fraction division from a multiplication question, then asks what changes when only complete portions count or some liquid is lost. Begin with whole-number multiplication, equivalent fractions, and fraction addition. The fraction multiplication and whole-portion notation used here are explained below. The [Everyday Number Sense course](#/item/course-everyday-number-sense) offers a preparation route.

Open [the live quantity-division workshop](#/labs?lab=visual-lab-quantity-division). Make a prediction before inspecting a result. Keep three records: what the unknown means, an equation it must satisfy, and the unit of the answer. The reading also stands on its own; all proofs, examples, and six tasks for independent work appear here. Allow about 25 minutes for the first investigation, 25 for the changed process, and 50 for the tasks and their solutions.

## Accessibility, keyboard, and print

Use Tab to move between native controls, arrow keys to change select choices, and ordinary typing to enter fractions; activate **Compare** to compute the case. The diagram, formula, and table have named horizontally scrollable regions. Their exact table and text alternatives give the same quantities, including the explicit ratio between litres and portion-equivalents. No dragging or animation is needed. Changing a mathematical input clears the old readout; changing the displayed volume unit converts the committed case. Notes last for the current session: copy or print them to keep them. Printing the live workshop includes the current computed case and notes. Printing this article includes all six solutions; it is not a learner-only handout.

## Guided investigation: four questions about the same liquid

### Take a fraction of the amount

Take $2/3$ of the $3/4$ litre. The unknown is an amount of liquid. Split each fourth-litre into three equal pieces: each new piece is $1/12$ litre. The original liquid contains nine such pieces. One-third of it is three pieces, or $1/4$ litre; two-thirds is six pieces, or $1/2$ litre. Thus

$$\\frac23\\times\\frac34=\\frac12.$$

The word “of” scales the specified amount. The reference whole is the available $3/4$ litre, rather than a full litre.

More generally, taking $1/v$ of $a/b$ splits every $1/b$ piece into $v$ smaller pieces, each of size $1/(bv)$. Taking $u$ such shares gives $au$ pieces of that size:

$$\\frac uv\\times\\frac ab=\\frac{au}{bv}.$$

Here $a,u$ are nonnegative whole numbers and $b,v$ are positive whole numbers. When $u>v$, this describes scaling to more than the original amount; it does not describe removing a part that is still inside it.

The live workshop's take-part and recover-the-whole views use a fraction $f$ with $0<f\\le1$. Taking a zero fraction is mathematically valid and gives zero, but lies outside that control window. Recovering a capacity from a zero fraction would not determine a unique capacity: the equation $0C=T$ has no solution for $T>0$ and every capacity satisfies it when $T=0$.

### Measure in portions of a specified size

How many $2/3$-litre portions does $3/4$ litre represent? Write $x$ for the number of **portion-equivalents**. The defining equation is

$$x\\times\\frac23=\\frac34.$$

One portion-equivalent means exactly $2/3$ litre. It is a measuring unit, so $x$ may be fractional even when the practical instruction later asks for complete portions. The solution is $x=9/8$, since

$$\\frac98\\times\\frac23=\\frac34.$$

There is enough for one complete portion. The liquid remaining is

$$\\frac34-\\frac23=\\frac1{12}\\text{ litre}.$$

The extra $1/8$ of a portion and the remaining $1/12$ litre name the same liquid in different units:

$$\\frac18\\times\\frac23=\\frac1{12}.$$

### Recover an unknown whole

The $3/4$ litre fills $2/3$ of a jug. What is the jug's capacity? If $C$ is its capacity in litres, then

$$\\frac23 C=\\frac34,\\qquad C=\\frac98.$$

The answer is $9/8$ **litres**. The preceding question also produced the number $9/8$, but there it counted portion-equivalents. A shared numerical calculation does not determine the unit or the unknown's role.

### Share among a specified number of people

Share the $3/4$ litre equally among six people. If each person's share is $y$ litres, then

$$6y=\\frac34,\\qquad y=\\frac18.$$

The result is $1/8$ litre per person. Six such shares reconstruct the original amount. Before calculating a division, decide whether the missing quantity is the number of groups, the size of a share, or the whole of which a known amount is a fraction.

## Why dividing fractions uses the reciprocal

Suppose the available amount is $T=a/b$ litres and each portion has size $s=c/d$ litres. Take $a\\ge0$ and $b,c,d>0$ to be whole numbers. Use $1/(bd)$ litre as a common small unit. Then

$$T=\\frac{ad}{bd},\\qquad s=\\frac{bc}{bd}.$$

The available amount contains $ad$ small units; one portion contains $bc$ of them. The number of portion-equivalents is therefore $ad/(bc)$. Its multiplication check is

$$\\frac{ad}{bc}\\times\\frac cd=\\frac ab.$$

Consequently

$$\\frac ab\\div\\frac cd=\\frac{ad}{bc}=\\frac ab\\times\\frac dc.$$

The reciprocal rule solves the product equation $xs=T$. It is not a choice made because the problem happens to contain fractions. The assumption $s>0$ ensures that there is a unique solution and that increasing the number of portions increases the amount used. Zero available liquid gives quotient zero. A zero-sized portion is excluded: counting such portions would not determine an answer to this measurement question.

## One amount, two aligned scales

For portions of size $2/3$ litre, mark two rulers with the same origin and positions. The upper ruler measures litres; the lower one measures portion-equivalents. Corresponding marks satisfy

$$\\text{litres}=\\frac23\\times\\text{portion-equivalents}.$$

| Liquid in litres | The same liquid in portion-equivalents |
| --- | --- |
| $0$ | $0$ |
| $1/3$ | $1/2$ |
| $2/3$ | $1$ |
| $3/4$ | $9/8$ |

The final mark lies one-eighth of a portion beyond the first complete portion. The rulers describe one amount through two choices of measuring unit. Changing the portion size changes the lower ruler's scale while preserving the amount marked on the litre ruler.

Changing from litres to millilitres multiplies both volume measurements by 1000. Here the available amount becomes $750$ ml and a portion becomes $2000/3$ ml. Their quotient stays

$$750\\div\\frac{2000}{3}=\\frac98.$$

In general $(1000T)/(1000s)=T/s$. Convert both quantities to the same volume unit before dividing. Keep $2000/3$ exact when checking the identity; rounding it to $667$ ml changes the declared portion size.

## From a quotient to complete portions

A full-portion count here means the greatest number of complete portions the liquid permits. Choosing to stop earlier is a different instruction. The maximum is a whole number $N$ satisfying

$$Ns\\le T<(N+1)s.$$

The left inequality says $N$ portions fit. The right says one more would not fit. This number is called the **floor** of $T/s$, written

$$N=\\left\\lfloor\\frac Ts\\right\\rfloor.$$

To rearrange an inequality, adding or subtracting the same amount on both sides preserves its direction. Multiplying or dividing both sides by the same **positive** number also preserves its direction, including whether it is strict. For example, $2u\\le3$ gives $u\\le3/2$, while $3<2u$ gives $3/2<u$, equivalently $u>3/2$. Dividing a positive gap by a positive number leaves a positive gap; this explains why the strict comparison remains strict. These rules will let you construct possible portion sizes from the two fit conditions.

For a nonnegative number, its floor is its whole-number part: $\\lfloor 21/4\\rfloor=\\lfloor5+1/4\\rfloor=5$. No estimation is involved. At an exact integer, the floor keeps that integer: $\\lfloor5\\rfloor=5$.

The remaining liquid is $R=T-Ns$. Subtracting $Ns$ from the two inequalities proves

$$0\\le R<s,\\qquad T=Ns+R.$$

The quotient's fractional part is $R/s$, a fraction of one portion. The remainder $R$ itself is measured in litres. Multiplying the fractional part by $s$ converts it back to liquid.

For example, with $T=7/8$ litre and $s=1/6$ litre,

$$\\frac Ts=\\frac{21}{4}=5+\\frac14,\\qquad
R=\\frac78-5\\left(\\frac16\\right)=\\frac1{24}\\text{ litre}.$$

The quarter names a quarter of a $1/6$-litre portion. A check using only common units writes the whole budget as $21/24=20/24+1/24$ litre.

## Change the process: when is liquid lost?

Now suppose $w\\ge0$ litres are lost. Every completed portion still delivers $s>0$ litres to its recipient. We use two stipulated ideal processes:

- **Once-only startup loss:** starting the process loses $w$ litres once, after which each completed portion uses $s$ litres.
- **Loss for every completed portion:** each completed portion uses $s+w$ litres, of which $s$ is delivered and $w$ is lost.

We attempt only complete portions and stop between portions; no incomplete final portion is poured. We also adopt a **no-start policy**: if a complete portion cannot be produced, do not start, deliver nothing, lose nothing, and retain all $T$ litres. These are assumptions about the process, not facts that can be inferred from the three numbers alone.

### A startup charge is paid only after deciding to start

At least one portion is possible exactly when $T\\ge s+w$. If that condition fails, $N=0$, loss is zero, and $R=T$. If it holds, first reserve $w$, then count portions of size $s$ from the usable amount $T-w$:

$$N_{\\mathrm{once}}=\\left\\lfloor\\frac{T-w}{s}\\right\\rfloor.$$

Both branches can be written compactly as

$$N_{\\mathrm{once}}=\\max\\left(0,\\left\\lfloor\\frac{T-w}{s}\\right\\rfloor\\right).$$

The floor is the greatest integer no larger than its input, including for negative inputs; the maximum then prevents a negative count. You can avoid negative calculations by using the two branches above.

If $N_{\\mathrm{once}}\\ge1$, the accounting identity is

$$T=N_{\\mathrm{once}}s+w+R,\\qquad 0\\le R<s.$$

If $N_{\\mathrm{once}}=0$, it is instead $T=R$. Subtracting $w$ in this branch would incorrectly charge a startup that never happened. In particular, $T<w$ does not produce a negative physical remainder.

### A repeated charge changes the cost of each portion

For the second process,

$$N_{\\mathrm{repeated}}=\\left\\lfloor\\frac{T}{s+w}\\right\\rfloor.$$

Its accounting identity and remainder bound are

$$T=N_{\\mathrm{repeated}}s+N_{\\mathrm{repeated}}w+R,
\\qquad 0\\le R<s+w.$$

The repeated-loss remainder may be at least $s$. It would fill another portion in a lossless process, but completing this operation would also require the accompanying loss $w$. After startup has already been paid in the first process, the corresponding bound is $R<s$. When startup has not been paid, its no-start remainder can also be at least $s$.

### Audit a complete budget

Use $T=7/8$ litre, $s=1/6$ litre, and $w=1/24$ litre. In twenty-fourths, these are 21 available units, four delivered units per portion, and one loss unit.

| Process | Complete portions | Delivered liquid | Total loss | Remaining liquid |
| --- | --- | --- | --- | --- |
| Once-only startup | $5$ | $5/6$ litre | $1/24$ litre | $0$ |
| Loss for each completed portion | $4$ | $2/3$ litre | $1/6$ litre | $1/24$ litre |

For startup, reserve one unit and divide the remaining twenty into five groups of four. For repeated loss, every completed portion consumes five units, so four portions consume twenty. The checks are

$$\\frac1{24}+5\\left(\\frac16\\right)=\\frac78,$$

$$4\\left(\\frac16\\right)+4\\left(\\frac1{24}\\right)+\\frac1{24}=\\frac78.$$

These losses are stipulated as exact. A measured physical spill would introduce an additional question about measurement uncertainty.

## Reverse the question: how much must you start with?

Suppose you want $n$ complete portions, where $n$ is a positive whole number. The once-only process requires at least

$$T_{\\mathrm{once}}=w+ns.$$

The repeated-loss process requires at least

$$T_{\\mathrm{repeated}}=n(s+w).$$

These thresholds are both sufficient, by following the process, and necessary, by adding all delivered liquid and required loss. Their difference is

$$T_{\\mathrm{repeated}}-T_{\\mathrm{once}}=(n-1)w.$$

Equality of required starting amounts occurs when $n=1$ or $w=0$. For a request of zero portions, the minimum starting amount is zero in both processes and no startup is performed. Do not substitute $n=0$ into the positive-request startup formula and charge an unnecessary $w$.

For six portions with $s=1/6$ and $w=1/24$, the minimum amounts are $25/24$ litre and $5/4$ litres. Their difference is $5/24$ litre. This is a comparison for a fixed requested output; the tasks below also ask what can be concluded for a fixed available amount.

## Six tasks: practice and changed problems

Write your own answer before consulting the separate solutions. A complete answer identifies the unknown, gives exact arithmetic or a proof, and checks units or liquid conservation. Tasks 2 and 5 revisit guided cases for practice; the other tasks change the data or ask you to construct and justify a rule. The questions ask for different kinds of reasoning; a decimal answer alone will leave several unfinished.

### 1. Write the equations before using the numbers

You have $5/6$ litre. For each request, name the unknown and its unit, write a multiplication equation that determines it, and solve:

- Take $3/5$ of the available liquid.
- Express the available liquid in $3/5$-litre portion-equivalents; also report complete portions and the liquid left.
- Find the capacity of a jug for which this available liquid is $3/5$ of its capacity.
- Share the available liquid equally among five people.

Two answers have the same numerical value. Explain why they answer different questions.

### 2. Practice: repair a report about the remainder

A report about $7/8$ litre and $1/6$-litre portions says: “There are $5+1/4$ portions, so after five full portions there is $1/4$ litre left.” Identify what is correct, locate the change of unit, and replace the report with a fully checked statement. Then report both original volume measurements in millilitres and verify that the portion quotient is preserved.

### 3. Construct every portion size that works

Keep $T=7/8$ litre. Find **all** positive portion sizes $s$ for which the maximum number of complete portions is exactly five, with no loss. Explain which endpoints belong to your answer. Give one allowed size and one excluded endpoint, and check their complete-portion counts.

### 4. Test a process boundary

Use $T=3/8$ litre, $s=1/6$ litre, and $w=1/24$ litre. For each loss process, give the complete count, delivered liquid, total loss, and remainder. Explain why the repeated-loss remainder does not permit another completed portion even if that remainder equals $s$.

Then keep $s,w$ fixed and change $T$ first to $1/5$ litre, then to $1/48$ litre. Apply the no-start policy explicitly. Finally set $T=s+w$: does the equality permit starting, and what happens in each process?

### 5. Practice: justify an exact minimum budget

With $s=1/6$ litre and $w=1/24$ litre, find the minimum starting amounts for six complete portions in the two processes. Prove the general minimum formulas for every positive whole number $n$, rather than only checking six. Determine exactly when the two minimum amounts agree, and explain the separate case of a request for zero portions.

### 6. Separate a count comparison from a remainder comparison

With $s=1/6$ litre and $w=1/24$ litre, construct an available amount $T$ for which both processes produce the same positive number of complete portions but leave different amounts of liquid. You may search in twenty-fourths of a litre. Show the full accounting.

Prove that the once-only process can never produce fewer complete portions than the repeated-loss process for any $T\\ge0$, $s>0$, $w\\ge0$. Does that proof also order the remainders? Compare your constructed example with the case $T=3/8$ litre, using the same $s=1/6$ litre and $w=1/24$ litre, to decide. Can the complete counts agree when $w>0$?

## Solutions

### Task 1: the unknown controls the interpretation

For the first request, the amount taken is $z=(3/5)(5/6)=1/2$ litre. Its defining product applies the fraction to the specified available amount.

For portion-equivalents $x$, the equation is $x(3/5)=5/6$, giving $x=25/18$. There is one complete portion and

$$R=\\frac56-\\frac35=\\frac7{30}\\text{ litre}.$$

The extra $7/18$ of a portion has liquid volume $(7/18)(3/5)=7/30$ litre. Thus $3/5+7/30=5/6$ litre.

For capacity $C$ in litres, $(3/5)C=5/6$, so $C=25/18$ litres. In the preceding request, $25/18$ measured a number of known-size portions; here it measures an unknown capacity in litres.

For each person's share $y$ in litres, $5y=5/6$, so $y=1/6$ litre per person. Five shares reconstruct $5/6$ litre.

### Task 2: convert the fractional portion back to liquid

The quotient $21/4=5+1/4$ is correct in portion-equivalents. Its fractional part $1/4$ names a fraction of a $1/6$-litre portion. The remaining liquid is

$$\\frac14\\times\\frac16=\\frac1{24}\\text{ litre}.$$

The checked report is: five complete $1/6$-litre portions deliver $5/6$ litre, with $1/24$ litre remaining; together these equal $7/8$ litre. Reporting $1/4$ litre would instead give $5/6+1/4=13/12$ litres, more than was available.

In millilitres, $T=875$ ml and $s=500/3$ ml. Their quotient is

$$875\\div\\frac{500}{3}=\\frac{21}{4}.$$

The remainder is $125/3$ ml, since $875-5(500/3)=125/3$. This equals $1000/24$ ml, the converted $1/24$ litre.

### Task 3: preserve both inequalities

Exactly five portions means $5s\\le7/8<6s$. The first inequality permits equality and gives $s\\le7/40$. The second must be strict because equality would allow a sixth portion; it gives $s>7/48$. Therefore all and only the sizes are

$$\\frac7{48}<s\\le\\frac7{40}\\quad\\text{litre}.$$

For example, $s=1/6$ lies inside the interval and gives five portions. At the included upper endpoint $s=7/40$, five portions use exactly $7/8$ litre. At the excluded lower endpoint $s=7/48$, six portions use exactly $7/8$ litre, so the count is six. Keeping the endpoint conditions is part of solving the construction problem.

### Task 4: preserve the process, including whether it starts

There are $9/24$ litres available. Startup uses $1/24$, leaving $8/24$ for two portions of $4/24$ each. Thus the once-only process delivers $1/3$ litre, loses $1/24$ litre, and leaves zero.

Each repeated-loss portion consumes $5/24$ litre. Only one fits: it delivers $1/6$ litre, loses $1/24$ litre, and leaves $4/24=1/6$ litre. Another completed portion would require $5/24$, so the remainder is insufficient. In both processes, delivered liquid plus loss plus remainder is $9/24$ litre.

The minimum amount for starting either process is $s+w=5/24$ litre. Since $1/5<5/24$, neither process starts when $T=1/5$. Both deliver zero, lose zero, and retain $1/5$ litre. The once-only remainder exceeds $s$ here, which is allowed because startup has not been paid.

At $T=1/48<w$, again neither starts. Both retain all $1/48$ litre, with zero loss. Subtracting $w$ would contradict the stipulated policy.

At the exact boundary $T=s+w=5/24$, both can start and complete one portion. Each delivers $1/6$ litre, loses $1/24$ litre, and leaves zero. The start condition includes equality.

### Task 5: prove both necessity and sufficiency

For six portions, once-only startup requires $1/24+6/6=25/24$ litre. Repeated loss requires $6(1/6+1/24)=30/24=5/4$ litres.

For a positive whole number $n$, any once-only production of $n$ portions delivers $ns$ litres and necessarily loses $w$, so $T\\ge ns+w$. Starting with exactly that amount completes the operation with zero remainder. This proves the minimum, including both directions. Likewise, every repeated-loss production requires $ns+nw$ litres, and exactly that amount suffices. Thus the two minima differ by $(n-1)w$.

Since $n\\ge1$ and $w\\ge0$, the minima agree exactly when $n=1$ or $w=0$. For a request of zero portions, no operation is required; zero initial liquid suffices and no loss occurs. The positive-request startup formula does not apply to that case.

### Task 6: the counts have an order; the remainders do not

Choose $T=1/2=12/24$ litre. Once-only startup reserves $1/24$ and makes two portions of $4/24$ each. The delivered liquid is $1/3$, the loss $1/24$, and the remainder $3/24=1/8$ litre. Repeated loss makes two portions consuming $10/24$ in total. It delivers $1/3$, loses $2/24=1/12$, and leaves $2/24=1/12$ litre. Both counts are two, despite $w>0$. Here the once-only remainder is larger.

To prove the general count ordering, suppose the repeated-loss process can make $n\\ge1$ portions. Then

$$w+ns\\le nw+ns=n(s+w)\\le T,$$

because $(n-1)w\\ge0$. The same $n$ portions are therefore feasible after once-only startup. If the repeated-loss count is zero, the once-only count is at least zero by definition. In all cases,

$$N_{\\mathrm{once}}\\ge N_{\\mathrm{repeated}}.$$

This argument compares feasible counts; it does not compare the amounts left after maximizing those counts. At $T=3/8$ in Task 4, once-only startup leaves zero while repeated loss leaves $1/6$ litre, so the once-only remainder is smaller. At $T=1/2$, it is larger. There is no universal ordering of remainders. A larger remainder can accompany fewer completed portions because some liquid remains unusable under the declared process.

## Sources, teaching choices, and continuation

[Hung-Hsi Wu, *Teaching Fractions According to the Common Core Standards*, printed pages 60–64](https://math.berkeley.edu/~wu/CCSS-Fractions.pdf), develops division through a multiplication equation, derives the reciprocal rule, and distinguishes a fractional number of pieces from the physical amount left. The common-unit argument and the linked loss-process tasks here provide one foundation route through those mathematical ideas.

[Sidney, Thompson, and Rivera (2019)](https://www-s3-live.kent.edu/s3fs-root/s3fs-public/file/1-s2.0-S0361476X18305290-main.pdf) randomly assigned 123 fifth- and sixth-grade pupils from one US school to four diagram conditions. Number-line support gave an advantage in accuracy and conceptual representations on their fraction-division task. The paper leaves benefits for learning in laboratories or classrooms and the best order of representations unresolved; its four subsequent story-generation and solving items showed no detected condition differences. This supports considering number-line representations, without establishing a learning benefit for this workshop or a general inferiority of area models.

The [IES fractions practice guide](https://ies.ed.gov/ncee/WWC/PracticeGuide/15/Published) rates its fraction-as-number and meaningful-computation recommendations as moderate evidence; its sharing/proportionality and conceptual ratio-strategy recommendations as minimal evidence. The prediction prompts, aligned scales, and changed-process sequence here are design choices informed by those connections. They have not been evaluated as a classroom intervention. A correct response to one item also does not by itself establish stable understanding; compare explanations across a fresh context and an altered process.

Continue with [the Foundations Workshop](#/item/exercise-foundations-workshop) to connect these ideas to recipe scaling, fixed and repeated charges, and floor-tile counts. Carry forward the habit that made this investigation work: specify the unknown, the unit, and the process before calculating.
`;export{e as default};