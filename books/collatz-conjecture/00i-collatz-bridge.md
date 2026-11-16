# A concise starting toolkit {#sec-collatz-bridge}

This elective assumes school arithmetic and algebra and a willingness to read short proofs. Programming is optional. This bridge reviews the notation and evidence standards used in the first chapters, while later chapters introduce local congruence, probability and graph ideas. The separate research toolkit states its more advanced preparation. Skim familiar material and work the examples where a distinction is new.

## Numbers and arithmetic essentials {#sec-foundation-arithmetic}

The positive integers are $1,2,3,\ldots$; the integers also include $0$ and
negatives. Addition combines, subtraction measures signed change,
multiplication scales, and integer quotient with remainder counts complete equal groups plus what remains. General rational division can also produce a noninteger quotient. For
integers $a$ and positive $b$, unique integers $q,r$ satisfy

$$
a=bq+r,\qquad 0\le r<b.
$$

The integer $a$ is even when its remainder after division by $2$ is $0$, and odd
when it is $1$. Python writes the remainder as `a % 2` and integer division as
`a // 2`.

```python
def parity(number: int) -> str:
    """Return the parity label of an integer."""
    return "even" if number % 2 == 0 else "odd"

for value in range(1, 7):
    print(value, parity(value))
```

<figure id="fig-primer-number-line">
<img src="figures/foundation-number-line.png" alt="A number line shows addition as rightward motion, subtraction as leftward motion, and absolute distance as an unsigned segment." style="width:88%">

<figcaption>

Figure 1: Arithmetic and distance are represented as directed motion on a number line.

</figcaption>
</figure>

## Fractions, ratios, and rates {#sec-foundation-rationals}

A fraction $a/b$ requires $b\ne0$. Ratios compare quantities; percentages are
ratios out of $100$. Collatz data often report a proportion of starting values,
but a proportion in a finite sample is not a probability theorem or a statement
about every integer. Keep exact counts beside any decimal summary.

## Algebra as reversible bookkeeping {#sec-foundation-algebra}

A variable names a quantity. An equation asserts equality, and applying the
same reversible operation to both sides preserves its solutions. Powers
abbreviate repeated multiplication. Collatz orbit segments produce affine
formulas such as

$$
\frac{3^r n+B}{2^k}.
$$

The symbols $k,r,B$ must be tied to an exact parity word before this expression
says anything about a particular orbit. Later chapters derive the formula one
step at a time.

## Geometry and coordinates {#sec-foundation-geometry}

A graph may mean a plotted curve, but in discrete mathematics it can also mean
vertices joined by edges. A Collatz functional graph draws an arrow from each
integer to its next value. Coordinates used in a figure are a layout choice;
they do not add geometric distance to the integer problem. Chapter 6 builds
inverse graphs and explains where a tree picture can be misleading.

## Functions and iteration {#sec-foundation-functions}

A function assigns one output to each allowed input. Iteration feeds the output
back as the next input. If $T$ is a function, then
$T^2(n)=T(T(n))$ and $T^k$ means $k$ repeated applications, not an ordinary
power of the number $T(n)$. A function's domain is part of its definition;
changing from positive integers to all integers or to p-adic integers changes
the problem.

<figure id="fig-primer-functions">
<img src="figures/foundation-function-families.png" alt="Faceted plots compare linear, quadratic, absolute-value, reciprocal, and piecewise functions, including intercepts and a domain exclusion." style="width:91%">

<figcaption>

Figure 2: Several familiar function families provide a reference before the book turns to discrete iteration.

</figcaption>
</figure>

## Powers, logarithms, and scale {#sec-foundation-transcendentals}

Powers record repeated multiplication. A logarithm reverses exponentiation:
$\log_a x=y$ means $a^y=x$. It also converts products into sums,
$\log(xy)=\log x+\log y$. Collatz heuristics use logarithms to compare repeated
multipliers without overflowing a numerical scale. A negative average log
multiplier in a model is evidence about that model, not a proof about every
deterministic orbit.

## Statements, quantifiers, and proof {#sec-foundation-proof}

The Collatz conjecture says: **for every** positive integer $n$, **there exists**
a step count $k$ such that $T^k(n)=1$. The order matters; $k$ may depend on $n$.
Checking many starting values proves a bounded statement, not this universal
one. One nonconvergent orbit would disprove the conjecture.

An implication is equivalent to its contrapositive, not to its converse. A
theorem follows from definitions and stated assumptions by proof. A finite
verification certifies a declared range. A heuristic predicts through a model.
An open conjecture is not known proved or disproved. These labels never merge.

<figure id="fig-primer-logic">
<img src="figures/foundation-logic-table.png" alt="Truth table compares an implication, its converse, and its contrapositive across all four truth-value assignments." style="width:86%">

<figcaption>

Figure 3: A complete finite truth table separates implication from its converse.

</figcaption>
</figure>

## Sequences, data, and finite computation {#sec-foundation-computation}

An orbit is a sequence $n,T(n),T^2(n),\ldots$. A finite program must state its
map convention, start, step budget, stopping condition, and outcome. If the
budget ends first, the honest result is “unresolved within this budget,” not
“divergent.” Data summaries must retain censored or unresolved cases.

```python
def bounded_doubling(start: int, steps: int) -> list[int]:
    """Return a finite sequence start, 2*start, ..., after a step budget."""
    if start <= 0 or steps < 0:
        raise ValueError("start must be positive and steps nonnegative")
    values = [start]
    for _ in range(steps):
        values.append(2 * values[-1])
    return values

print(bounded_doubling(3, 5))
```

This elementary loop demonstrates iteration and a finite work limit. Code can
certify the returned list; it does not prove a statement about an infinite
sequence.

## Continuing with Collatz {#the-collatz-handoff}

The standard map on positive integers is

$$
T(n)=\begin{cases}
n/2,&n\text{ even},\\
3n+1,&n\text{ odd}.
\end{cases}
$$

The code is a literal translation. Integer division is exact on the even
branch because the branch condition has already established divisibility by
$2$.

```python
def collatz_step(number: int) -> int:
    """Return one standard Collatz step for a positive integer."""
    if number <= 0:
        raise ValueError("number must be positive")
    return number // 2 if number % 2 == 0 else 3 * number + 1

value = 6
for _ in range(8):
    print(value)
    value = collatz_step(value)
print(value)
```

Chapter 1 fixes all map conventions and Chapter 2 defines orbit statistics.
You are ready if you can follow the two branches, read a quantifier, and keep a
finite experiment separate from a universal proof.

## Worked bridge: a remainder is relative to a divisor

Divide twenty-three by six. Three complete groups use eighteen and leave five, so the quotient is three and the remainder five. Four groups would require twenty-four, too many. The remainder condition says both that the remainder is nonnegative and that it is less than the divisor. Merely finding an expression as a multiple plus another integer would not determine the quotient uniquely: twenty-three is also two sixes plus eleven, but eleven is not the permitted remainder.

For a negative input, the same convention remains meaningful. Negative five is twice negative three plus one, so on division by two its quotient is negative three and remainder one. It is therefore odd. Negative five is also twice negative two minus one, but a remainder of negative one violates the declared interval. Distinguish this integer remainder convention from a programming language that truncates division toward zero; a translation must match the mathematical definition rather than inherit a different convention silently.

Uniqueness has a short proof. Suppose two permitted quotient-remainder pairs represent the same integer. Subtract their equations. The divisor times the difference of the quotients equals the difference of the remainders. That remainder difference has absolute value smaller than the positive divisor. The only multiple of the divisor in that interval is zero. Thus the quotients agree and then the remainders agree. This argument explains why parity is unambiguous for every integer.

The Collatz conjecture nevertheless uses positive integers. Extending a parity definition to negative inputs does not extend the conjecture's domain. A definition can be useful in a larger setting while a theorem or open assertion remains restricted. That separation will matter when later chapters compare integer, residue and 2-adic state spaces.

## Worked bridge: distinguish iteration, ordinary powers and the clock

For the standard map, starting at six gives six, three, ten, five, sixteen, eight, four, two, one. Number the first state by time zero. The first transition reaches three at time one; time two reaches ten. The displayed trace has nine states and eight transitions. An initial state is information even though no update has yet occurred. If a loop is allowed zero updates, it still has an initial state to report.

The notation for two iterations is composition: apply the map once and feed its output back. It does not square the first output. At input six, two standard Collatz iterations give ten, whereas the square of the first output is nine. The difference is mathematical rather than stylistic. A program that squares a value in place of applying the branch rule implements a different map.

A familiar map makes the distinction especially clear. Let a function send a real input to its square. Applying that function twice produces the fourth power of the original input. Squaring the function's name is often used to denote composition in dynamics, while squaring its value is an arithmetic operation; here the expressions happen to agree in form only after the particular function is substituted. The Collatz map provides no such coincidence. Use the composition symbol or state the convention whenever ambiguity is possible.

A clock also changes under compression. For the standard trace from six, the segment three to ten to five uses two transitions. The shortcut convention turns it into three to five, using one transition. The retained values are compatible with the original orbit, but the time labels differ. A data column labeled “steps” cannot be compared across conventions without knowing how those transitions were counted.

These small checks establish only the displayed trace and notation. They provide no bound on how long an arbitrary positive start takes, and they do not justify treating a finite budget as an assertion of nonconvergence.

## Worked bridge: an infinite proved family still need not cover the domain

Every positive power of two reaches one under the standard map. To prove this, write a start as two raised to a nonnegative integer exponent. If the exponent is positive, the start is even and one step reduces the exponent by one. Repeating this argument exactly that many times reaches the zeroth power, which is one. At exponent zero the start is already one, so zero transitions are required. This is a complete proof for an infinite family, including its boundary case.

The family is unbounded: choosing a large exponent gives a start exceeding any prescribed finite bound. Yet it does not contain every positive integer. Three, five and seven are not powers of two. A proof covering arbitrarily large starts is therefore weaker than a proof covering all starts. The phrase “arbitrarily large” says there are successful inputs beyond each bound, not that every input beyond that bound is successful.

There is a second useful quantifier distinction. For each power of two, some finite transition count works, but there is no one fixed count that suffices for every power of two. A start with exponent larger than the proposed count still exceeds one at that time. The successful time depends on the input. Thus “for every input there exists a time” is different from “there exists a time that works for every input.” The Collatz assertion has the first order of quantifiers.

Finite computation has another scope: a complete audit of every start in a declared interval can establish success throughout that interval, under its arithmetic and coverage conditions. It does not become the infinite-family proof above, and neither statement alone covers every positive integer. A useful evidence record names the domain actually established and leaves all other inputs outside its conclusion.

## Bridge exercises with full support

The questions below are mathematical reading tasks. The code earlier in the chapter remains source notation; no execution or independent computation is reported here.

<div class="exercise" id="collatz-bridge-remainder">
<p class="exercise-title"><strong>Exercise 1</strong></p>

Find the quotient and remainder when thirty-one is divided by seven, and explain why quotient three with remainder ten is not the required pair.

<details class="hint"><summary>Hint 1</summary>

A remainder must be smaller than the positive divisor.

</details>

<details class="hint"><summary>Hint 2</summary>

Compare four groups and five groups of seven.

</details>

<details class="solution"><summary>Solution</summary>

Four groups use twenty-eight and leave three, so the pair is four and three. Five groups use thirty-five and exceed the input. The proposed pair three and ten represents the same integer, but ten is not less than seven. The permitted remainder interval, not the equation alone, selects the quotient.

</details>

</div>

<div class="exercise" id="collatz-bridge-negative-parity">
<p class="exercise-title"><strong>Exercise 2</strong></p>

State the quotient and permitted remainder for negative seven divided by two, and identify its parity.

<details class="hint"><summary>Hint 1</summary>

Use a nonnegative remainder below two.

</details>

<details class="hint"><summary>Hint 2</summary>

A negative quotient may need to be one lower than truncation toward zero suggests.

</details>

<details class="solution"><summary>Solution</summary>

Negative seven equals twice negative four plus one. The quotient is negative four and remainder one, so it is odd. Twice negative three minus one is another equality but uses an inadmissible negative remainder. This extends the parity definition, not the positive-integer Collatz conjecture.

</details>

</div>

<div class="exercise" id="collatz-bridge-composition">
<p class="exercise-title"><strong>Exercise 3</strong></p>

At input five, compare two standard Collatz iterations with the square of the first output.

<details class="hint"><summary>Hint 1</summary>

The odd branch first gives sixteen.

</details>

<details class="hint"><summary>Hint 2</summary>

Apply the even branch to sixteen for composition.

</details>

<details class="solution"><summary>Solution</summary>

The first output is sixteen. A second map application gives eight. Squaring the first output gives two hundred fifty-six. They are different operations, so a formula or program must distinguish composition from arithmetic exponentiation. Neither finite value states anything about all starting integers.

</details>

</div>

<div class="exercise" id="collatz-bridge-state-count">
<p class="exercise-title"><strong>Exercise 4</strong></p>

A trace contains its start and exactly twelve further states, with each adjacent pair one update apart. How many transitions are recorded? What remains at a zero-transition budget?

<details class="hint"><summary>Hint 1</summary>

Count gaps rather than entries.

</details>

<details class="hint"><summary>Hint 2</summary>

An initial state does not require an update.

</details>

<details class="solution"><summary>Solution</summary>

Thirteen recorded states have twelve adjacent gaps, hence twelve transitions. With zero transitions the trace contains only the initial state. A budget exhausted there means no update was performed; it cannot be reported as evidence that an orbit fails to reach one, and a start already equal to one has already met the target.

</details>

</div>

<div class="exercise" id="collatz-bridge-odd-integrality">
<p class="exercise-title"><strong>Exercise 5</strong></p>

Prove that the shortcut odd branch $(3n+1)/2$ is an integer when $n$ is odd.

<details class="hint"><summary>Hint 1</summary>

Represent an arbitrary odd integer using an integer parameter.

</details>

<details class="hint"><summary>Hint 2</summary>

Expand before dividing.

</details>

<details class="solution"><summary>Solution</summary>

Write $n=2q+1$ for an integer $q$. Then $3n+1=6q+4=2(3q+2)$, so division by two is exact. For positive $n$, the result is positive as well. The argument applies to every allowed odd input, unlike checking several examples. It does not say that the quotient is odd; for $n=1$ it is two.

</details>

</div>

<div class="exercise" id="collatz-bridge-equation-domain">
<p class="exercise-title"><strong>Exercise 6</strong></p>

Solve $(n-1)x=n-1$ over the real numbers, considering the parameter $n$. Explain the excluded step in cancelling $n-1$.

<details class="hint"><summary>Hint 1</summary>

Separate the case when the common factor vanishes.

</details>

<details class="hint"><summary>Hint 2</summary>

Division by a nonzero factor preserves equivalence; division by zero is undefined.

</details>

<details class="solution"><summary>Solution</summary>

If $n\ne1$, divide by the nonzero factor to obtain the unique solution $x=1$. If $n=1$, both sides are zero for every real $x$, so every real is a solution. Cancelling without stating the condition loses an entire parameter case. Domain and nonzero hypotheses belong to the argument, even when a numerical example hides them.

</details>

</div>

<div class="exercise" id="collatz-bridge-powers-two">
<p class="exercise-title"><strong>Exercise 7</strong></p>

Prove that the standard orbit of $2^r$ first reaches one at time $r$ for a nonnegative integer $r$.

<details class="hint"><summary>Hint 1</summary>

Track the exponent after each halving.

</details>

<details class="hint"><summary>Hint 2</summary>

Before time $r$ the exponent is still positive.

</details>

<details class="solution"><summary>Solution</summary>

At time $j\le r$ the value is $2^{r-j}$, proved by induction on $j$ using the even branch while $j<r$. At time $r$ it is one. At every earlier time it exceeds one, so the arrival is first. For $r=0$ the initial value is already one and the first arrival time is zero. This proves the claim for the family without claiming that all integers are powers of two.

</details>

</div>

<div class="exercise" id="collatz-bridge-quantifier-order">
<p class="exercise-title"><strong>Exercise 8</strong></p>

Explain why the powers-of-two result does not supply one finite time by which every start in that family reaches one.

<details class="hint"><summary>Hint 1</summary>

A proposed common time can be compared with a larger exponent.

</details>

<details class="hint"><summary>Hint 2</summary>

Choose the exponent one greater than the proposed time.

</details>

<details class="solution"><summary>Solution</summary>

If the proposed common time is a nonnegative integer K, the start with exponent K plus one first reaches one at time K plus one, which is later. Thus no common finite time covers the entire family. Each individual start still has a finite successful time. This is an explicit counterexample to interchanging the two quantifiers, not a counterexample to individual convergence.

</details>

</div>

<div class="exercise" id="collatz-bridge-censored">
<p class="exercise-title"><strong>Exercise 9</strong></p>

A bounded orbit calculation records no one in its first one hundred transitions. State the strongest conclusion warranted by those records alone.

<details class="hint"><summary>Hint 1</summary>

Name the exact observed prefix.

</details>

<details class="hint"><summary>Hint 2</summary>

Do not infer what an unobserved next step will do.

</details>

<details class="solution"><summary>Solution</summary>

Provided the trace and convention are correct, the start has not reached one by time one hundred. Its total stopping time is greater than one hundred or infinite; the record does not decide which. A status such as unresolved within the budget retains that distinction. Recording infinity or a completed stopping time of one hundred would add a conclusion absent from the evidence.

</details>

</div>

<div class="exercise" id="collatz-bridge-evidence-labels">
<p class="exercise-title"><strong>Exercise 10</strong></p>

Classify a proved powers-of-two argument, a complete finite-range certificate and a prediction from independent parity bits. Explain which establishes the full conjecture.

<details class="hint"><summary>Hint 1</summary>

Identify the domain and assumptions of each claim.

</details>

<details class="hint"><summary>Hint 2</summary>

A model theorem can be rigorous within its own model.

</details>

<details class="solution"><summary>Solution</summary>

The first is a theorem for an infinite specified family. The second is a bounded mathematical/computational claim whose coverage and arithmetic evidence must match its interval. The third is a heuristic for Collatz unless a transfer theorem is supplied, though its probability calculation can be a theorem about the independent-bit model. None, by its stated scope alone, establishes success for every positive integer. The full conjecture remains a separate universal assertion.

</details>

</div>
