
# Powers, Roots, and Scale: From Patterns to Reliable Calculation

<!-- euler-course-route -->

## Current course route

Use the [course page](#/courses/atlas-powers-roots-scale) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

Why does a folded sheet become thick so quickly? How can $0.00000042$ be made
readable? What number has square $50$? Powers and roots answer all three
questions. They compress repeated multiplication, undo it, and describe scale.

This self-contained mini-course is for explorer and secondary learners. It
assumes arithmetic with fractions and signed numbers, but every new convention
is rebuilt from patterns. You may use a calculator in Units 5–8; calculator
keystrokes never replace an estimate or an explanation.

## Entry diagnostic

Try these before Unit 1:

1. Evaluate $3\cdot3\cdot3\cdot3$.
2. Decide whether $-2^2$ and $(-2)^2$ are equal.
3. Find the positive number whose square is 81.
4. Write $0.00045$ as $4.5$ times a power of ten.
5. Estimate whether $\sqrt{50}$ lies nearer 5, 7, or 10.

The answers are 81; no, they are $-4$ and $4$ under the usual order of
operations; 9; $4.5\times10^{-4}$; and 7 because $7^2=49$. Use the gentler
route if place value or inverse operations are uncertain, and the core route
if only notation needs repair.

## What you will be able to do

By the end, you should be able to:

1. read and evaluate powers while distinguishing the base from the exponent;
2. derive and apply exponent laws with their conditions attached;
3. explain zero, negative, and rational exponents;
4. interpret roots as inverse questions and simplify radicals safely;
5. write, compare, and calculate with scientific notation;
6. estimate roots and powers without pretending an approximation is exact;
7. diagnose common errors and check answers by inverse operations; and
8. use powers in scale, geometry, growth, and a small dependency-free program.

## Notation and accessibility

This course writes $a^n$ for “a to the power $n$.” A screen reader or speaker
can read $3^4$ as “three to the fourth power.” The expression $\sqrt{25}$ means
the principal square root of 25 and is printed mathematically as $\sqrt{25}$.
Likewise, $\sqrt[3]{8}$ means $\sqrt[3]{8}$. Text versions accompany every described
diagram; colour, position, and animation are never the only carriers of meaning.

Parentheses matter. $(-3)^2$ has base $-3$; $-3^2$ means the negative of $3^2$
under the usual order of operations. Whenever a signed base is intended, this
course shows parentheses.

Keep an **exact value** such as $3\sqrt{2}$ separate from an **approximation** such as
$4.24$. We use $=$ only between equal quantities and $\approx$ for “approximately.”

## Route through the course

- **Core route:** Units 1–6, Practice A–C, and the final checkpoint.
- **Gentler route:** perform each “say–table–picture” activity before symbols.
- **Extension route:** include proofs, interval bounds, code, and projects.
- **Diagnostic route:** start with the error clinic, then revisit named units.

Record three things beside each problem: an estimate, the exact calculation if
one exists, and a check. That ledger turns an answer into evidence.

---

# Unit 1 — Powers package repeated multiplication

## 1.1 One quantity, several representations

The product

$5 \times 5 \times 5 \times 5$

has four equal factors. Power notation packages it as $5^4$.

- $5$ is the **base**, the factor being repeated.
- $4$ is the **exponent** (or index), the number of factors.
- $5^4 = 625$ is the **value**.

| Words | Repeated product | Power | Value |
|---|---|---:|---:|
| six squared | $6 \times 6$ | $6^2$ | 36 |
| two cubed | $2 \times 2 \times 2$ | $2^3$ | 8 |
| three to the fifth | $3 \times 3 \times 3 \times 3 \times 3$ | $3^5$ | 243 |

The names **square** and **cube** come from geometry. A square of side $s$ has
area $s^2$; a cube of edge $s$ has volume $s^3$. Higher powers need no
higher-dimensional picture to be useful.

### Text-described visual: a doubling strip

Imagine six boxes labelled step 0 through step 5. They contain respectively
$1, 2, 4, 8, 16, 32$ counters. Each arrow says “multiply by 2.” The box at step
$n$ contains $2^n$ counters. A tactile alternative is to arrange actual counters
in six groups; a nonvisual alternative is exactly the ordered list above.

Notice that step 0 contains one counter. We will justify $2^0=1$ in Unit 3.

## 1.2 A power is not multiplication by the exponent

$4^3$ is $4 \times 4 \times 4 = 64$, not $4 \times 3 = 12$. Exponent notation records a
repeated operation in the same way that multiplication packages repeated
addition:

- $4 + 4 + 4 = 3 \times 4$ packages repeated addition;
- $4 \times 4 \times 4 = 4^3$ packages repeated multiplication.

The order matters: $2^5=32$, while $5^2=25$. In general, $a^b$ and $b^a$ are
different.

## 1.3 Signs and parentheses

With $(-2)^4$, four negative factors occur. Pairing them gives a positive value:

$(-2)^4 = (-2)(-2)(-2)(-2) = 16$.

With $(-2)^3$, one negative factor remains unpaired:

$(-2)^3 = -8$.

Therefore a negative base raised to a positive whole-number exponent is positive
when the exponent is even and negative when it is odd.

But $-2^4 = -(2^4) = -16$. Exponentiation is performed before the leading
negation. If the base is negative, write parentheses.

## 1.4 Order of operations

Powers are evaluated before multiplication and addition unless grouping changes
the order.

**Worked example 1.** Evaluate $3 + 2 \times 5^2$.

First $5^2=25$; then $2\times 25=50$; then $3+50=53$.

**Worked example 2.** Compare $(3+2)^2$ and $3+2^2$.

$(3+2)^2=5^2=25$, whereas $3+2^2=3+4=7$. A square does not drift through an
addition sign.

## Practice A — Read, represent, evaluate

Try these before reading the solutions.

1. Write $7 \times 7 \times 7$ as a power and identify its base and exponent.
2. Expand $4^5$ as a repeated product, then evaluate it.
3. Which is larger, $2^6$ or $6^2$? By how much?
4. Evaluate $(-3)^4$, $(-3)^5$, $-3^4$, and $-(-3)^4$.
5. Evaluate $18 - 2^3 \times 2$.
6. A square has side 12 cm. Write its area as a power and evaluate it with units.
7. A cube has edge 0.5 m. Find its volume. Why is the answer smaller than 0.5?
8. Explain in words why $10^4$ is not 40.

### Solutions A

1. $7^3$; base 7, exponent 3.
2. $4\times 4\times 4\times 4\times 4=1024$.
3. $2^6=64$ and $6^2=36$; the first is larger by 28.
4. $81, -243, -81, -81$. In the final two expressions the outer minus is not
   part of the squared base.
5. Power first: $18-8\times 2=18-16=2$.
6. $12^2=144\text{ cm}^{2}$. The squared unit is part of the answer.
7. $(0.5)^3=0.125\text{ m}^{3}$. Multiplying by a positive number below 1 makes a positive
   quantity smaller.
8. $10^4$ means four factors of 10: $10\times 10\times 10\times 10=10,000$. It does not mean
   $10\times 4$.

---

# Unit 2 — Exponent laws are counting laws

The laws in this unit are not arbitrary shortcuts. Expand the powers and count
factors. The restrictions beside each law are part of the law.

## 2.1 Multiplying powers with the same base

$2^3 \times 2^4 = (2\times 2\times 2)(2\times 2\times 2\times 2) = 2^7$.

There are three factors followed by four more, so there are seven altogether.
For positive whole-number exponents—and later for all integer exponents where
defined—

$a^m \times a^n = a^{m+n}$.

This law needs the **same base**. $2^3\times 5^3$ has matching exponents, not matching
bases; Unit 2.4 handles that different pattern.

## 2.2 Dividing powers with the same nonzero base

Cancel equal nonzero factors:

$5^6 / 5^2 = (5\times 5\times 5\times 5\times 5\times 5)/(5\times 5) = 5^4$.

Thus, when $a\ne 0$,

$a^m / a^n = a^{m-n}$.

The condition $a\ne 0$ prevents division by zero. If $m<n$, the result has a
negative exponent; Unit 3 explains it.

## 2.3 A power raised to a power

$(3^2)^4$ means four factors of $3^2$. Each supplies two factors of 3, giving
eight:

$(3^2)^4 = 3^{2\times 4} = 3^8$.

So $(a^m)^n=a^{mn}$. Here the exponents multiply; they do not add.

## 2.4 A power of a product or quotient

Distribute the exponent across multiplication:

$(2\times 7)^3 = (2\times 7)(2\times 7)(2\times 7) = 2^3\times 7^3$.

Hence $(ab)^n=a^n b^n$. Similarly, for $b\ne 0$,

$(a/b)^n = a^n/b^n$.

This works because multiplication can be regrouped. Addition cannot:

$(2+3)^2=25$, but $2^2+3^2=13$.

## 2.5 Choose a useful direction

Each law can compress or expand.

**Worked example 3.** Simplify $x^4 x^7 / x^3$, assuming $x\ne 0$.

$x^{4+7-3}=x^8$.

**Worked example 4.** Evaluate $8^3\times 5^3$ efficiently.

Matching exponents allow reversal of the product law:

$8^3\times 5^3=(8\times 5)^3=40^3=64,000$.

**Worked example 5.** Simplify $(3a^2b)^3$.

The outer exponent applies to every factor:

$3^3(a^2)^3b^3=27a^6b^3$.

## 2.6 Why checking one example is not a proof

Trying $m=2,n=3$ can reveal a false rule, but one success does not establish a
rule for every value. Expanding $a^m$ as $m$ factors and counting them gives the
general reason for positive whole exponents. Unit 3 extends the definitions so
the same laws remain consistent.

## Practice B — Laws with reasons

State the law you use and any nonzero condition.

1. Simplify $7^3\times 7^5$.
2. Simplify $p^{12}/p^5$ for $p\ne 0$.
3. Simplify $(y^3)^4$.
4. Expand $(4x^2)^3$.
5. Simplify $(6a^5b^2)/(3a^2b)$ for $a,b\ne 0$.
6. Evaluate $25^4\times 4^4$ without separately evaluating the large powers.
7. Find and repair the error: $z^5+z^2=z^7$.
8. Find and repair the error: $(r+s)^3=r^3+s^3$.
9. True or false for all real $a,b$: $(ab)^2=a^2b^2$? Explain.
10. A learner writes $(x^2)^3=x^5$. Use factor counting to respond.

### Solutions B

1. Same-base product: $7^{3+5}=7^8$.
2. Same-base quotient: $p^{12-5}=p^7$; $p\ne 0$ is required by the original
   quotient.
3. Power of a power: $y^{3\times 4}=y^{12}$.
4. Power of a product and power of a power: $4^3x^6=64x^6$.
5. Divide coefficients and subtract same-base exponents:
   $2a^{5-2}b^{2-1}=2a^3b$. The original expression requires $a,b\ne 0$.
6. $(25\times 4)^4=100^4=100,000,000$.
7. There is no same-base law for addition. The expression can factor as
   $z^2(z^3+1)$, but it is not generally $z^7$; at $z=1$, the two sides would be
   2 and 1.
8. Powers do not distribute over addition. Expanding gives
   $(r+s)^3=r^3+3r^2s+3rs^2+s^3$.
9. True. $(ab)^2=(ab)(ab)=aabb=a^2b^2$, using commutativity.
10. $(x^2)^3=(x\times x)(x\times x)(x\times x)$, which contains six factors of $x$, so it is
    $x^6$, not $x^5$.

---

# Unit 3 — Zero and negative exponents

## 3.1 Extending a pattern to exponent zero

For a nonzero base, move down a power table by dividing by the base:

| Power | Value for base 3 | Operation from row above |
|---:|---:|---|
| $3^3$ | 27 | — |
| $3^2$ | 9 | divide by 3 |
| $3^1$ | 3 | divide by 3 |
| $3^0$ | 1 | divide by 3 |

So $a^0=1$ for $a\ne 0$. The quotient law forces the same choice:

$a^m/a^m = 1$ but also $a^{m-m}=a^0$.

The condition matters. This argument divides by $a$; it says nothing about
$0^0$. In elementary work, treat $0^0$ as indeterminate or context-dependent,
not automatically 1. For every positive integer $n$, however, $0^n=0$.

## 3.2 Continuing below zero

Continue the base-3 table:

| Power | Value | Fraction form |
|---:|---:|---:|
| $3^0$ | 1 | 1 |
| $3^{-1}$ | $1/3$ | $1/3$ |
| $3^{-2}$ | $1/9$ | $1/3^2$ |
| $3^{-3}$ | $1/27$ | $1/3^3$ |

For $a\ne 0$ and positive whole number $n$,

$a^{-n}=1/a^n$.

A negative exponent does **not** make the value negative. It takes a reciprocal.
For example, $2^{-4}=1/16$, while $(-2)^{-3}=-1/8$ because the base itself is
negative and the exponent 3 is odd.

## 3.3 Moving factors across a fraction bar

Since $x^{-3}=1/x^3$, a negative exponent can be rewritten positively:

$(a^{-2} b^3)/(c^{-1}) = (b^3/a^2) \times c = cb^3/a^2$,

provided $a,b,c$ satisfy the original domain restrictions ($a\ne 0$ and $c\ne 0$;
$b$ may be zero here).

Do not erase domain information after simplifying. The expression $x^2/x^2$
simplifies to 1 only where the original is defined, namely $x\ne 0$.

## 3.4 Reciprocal bases

$(2/5)^{-3} = (5/2)^3 = 125/8$.

Taking the reciprocal swaps numerator and denominator. Then apply the positive
power. A useful check is magnitude: since $2/5$ lies between 0 and 1, a negative
power should be greater than 1.

## Practice C — Extend without losing conditions

1. Evaluate $9^0$, $(-9)^0$, and $0^5$.
2. Rewrite $5^{-3}$ as a fraction and evaluate it.
3. Evaluate $(3/4)^{-2}$.
4. Simplify $x^7/x^{10}$ for $x\ne 0$, using a positive exponent in the answer.
5. Simplify $(2a^{-3}b^2)/(4b^{-1})$ with positive exponents, stating conditions.
6. Order $2^{-2}$, $2^0$, and $2^3$ from least to greatest.
7. Diagnose: “A negative exponent means a negative answer, so $10^{-2}=-100$.”
8. Why does the quotient proof of $a^0=1$ exclude $a=0$?
9. An expression simplifies from $(t-1)/(t-1)$ to 1. What value must remain
   excluded?
10. Find an integer $k$ such that $4^k=1/64$.

### Solutions C

1. $9^0=1$, $(-9)^0=1$, and $0^5=0$. The zero-exponent rule is for nonzero
   bases.
2. $5^{-3}=1/5^3=1/125$.
3. $(4/3)^2=16/9$.
4. $x^{7-10}=x^{-3}=1/x^3$, with $x\ne 0$.
5. Coefficients give $1/2$; $a^{-3}$ becomes $1/a^3$, and dividing by $b^{-1}$
   contributes $b$: the result is $b^3/(2a^3)$. The original requires
   $a\ne 0,b\ne 0$.
6. $2^{-2}=1/4 < 2^0=1 < 2^3=8$.
7. The minus belongs to the exponent and means reciprocal:
   $10^{-2}=1/10^2=0.01$, a positive number.
8. It starts with $a^m/a^m=1$; when $a=0$ and $m>0$, this is $0/0$, which is
   undefined.
9. $t=1$ remains excluded because it made the original denominator zero.
10. $4^{-3}=1/4^3=1/64$, so $k=-3$.

---

# Unit 4 — Roots undo whole-number powers

## 4.1 Square roots answer an inverse question

The **principal square root** $\sqrt{A}$ is the nonnegative number whose square is
$A$. Thus $\sqrt{49}=7$ because $7^2=49$ and the principal root is nonnegative.

This does not mean the equation $x^2=49$ has only one solution. Both $7$ and
$-7$ square to 49, so

$x^2=49$ has solutions $x=\pm 7$.

Keep the two statements separate:

- $\sqrt{49}=7$ (one principal root);
- if $x^2=49$, then $x=7$ or $x=-7$ (two equation solutions).

Over the real numbers, $\sqrt{A}$ is defined only for $A\ge 0$. No real number squares
to a negative number. Complex numbers later extend this system.

## 4.2 Cube roots preserve signs

The cube root $\sqrt[3]{A}$ is the real number whose cube is $A$.

$\sqrt[3]{-125}=-5$ because $(-5)^3=-125$.

Odd powers preserve the sign, so every real number has one real cube root.
Even roots and odd roots therefore have different real-number domains.

## 4.3 Perfect powers and roots between integers

Useful square landmarks are

$0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144$.

Because $7^2=49 < 50 < 64=8^2$,

$7 < \sqrt{50} < 8$.

This interval is already meaningful. A decimal calculator value should agree
with it.

### Text-described visual: square-area staircase

Imagine nested squares with side lengths 1, 2, 3, and 4. Their areas are 1, 4,
9, and 16 square units. A fifth shape of area 10 lies after the 3-by-3 square
but before the 4-by-4 square, so its side $\sqrt{10}$ lies between 3 and 4. The exact
nonvisual equivalent is the inequality $3^2<10<4^2$.

## 4.4 Simplifying radicals by extracting perfect powers

Factor a radicand into a perfect square and a remainder:

$\sqrt{72} = \sqrt{36\times 2} = \sqrt{36} \times \sqrt{2} = 6\sqrt{2}$.

For nonnegative real $a,b$, $\sqrt{ab}=\sqrt{a}\sqrt{b}$. The nonnegative restriction makes the
real square roots defined and keeps signs controlled.

Similarly,

$\sqrt[3]{54} = \sqrt[3]{27\times 2} = 3\sqrt[3]{2}$.

A simplified radical is exact. $6\sqrt{2}$ is not “unfinished”; it names the number
without rounding.

## 4.5 Combining like radicals

$3\sqrt{5}+2\sqrt{5}=5\sqrt{5}$, just as $3x+2x=5x$. But $\sqrt{2}+\sqrt{3}$ cannot be combined this way.

First simplify:

$\sqrt{12}+\sqrt{27} = 2\sqrt{3}+3\sqrt{3}=5\sqrt{3}$.

## 4.6 A subtle identity: $\sqrt{x^{2}}=|x|$

The principal square root is nonnegative. If $x=-4$, then

$\sqrt{x^{2}}=\sqrt{16}=4$, not $-4$. Therefore

$\sqrt{x^{2}}=|x|$ for real $x$.

For cube roots, $\sqrt[3]{x^{3}}=x$ because the odd root may be negative.

## Worked examples

**Worked example 6.** Simplify $\sqrt{180}$.

$180=36\times 5$, so $\sqrt{180}=6\sqrt{5}$. Check: $(6\sqrt{5})^2=36\times 5=180$.

**Worked example 7.** Solve $x^{2}=18$ exactly.

$x=\pm \sqrt{18}=\pm 3\sqrt{2}$. An approximation is $x\approx \pm 4.243$, but the exact answer is
$\pm 3\sqrt{2}$.

**Worked example 8.** A square has area 98 cm². Find its side.

If side $s\ge 0$, then $s^{2}=98$, so $s=\sqrt{98}=7\sqrt{2}\text{ cm}\approx 9.90\text{ cm}$. Geometry selects the
nonnegative solution.

## Practice D — Roots and radicals

1. Evaluate $\sqrt{121}$, $\sqrt[3]{216}$, and $\sqrt[3]{-64}$.
2. List all real solutions of $x^{2}=81$.
3. Between which consecutive integers does $\sqrt{70}$ lie? Prove the bounds.
4. Simplify $\sqrt{48}$, $\sqrt{200}$, and $\sqrt[3]{128}$.
5. Simplify $2\sqrt{12}+\sqrt{75}$.
6. Is $\sqrt{9}+\sqrt{16}=\sqrt{25}$? Explain using values and the general error.
7. Evaluate $\sqrt{(-11)^{2}}$ and state the general identity.
8. A cube has volume 250 cm³. Give its edge exactly and to one decimal place.
9. Solve $3x^{2}=75$ over the real numbers.
10. Explain why $\sqrt{-16}$ has no real value but $\sqrt[3]{-8}$ does.

### Solutions D

1. $11, 6, -4$ respectively.
2. $x=9$ and $x=-9$, written $x=\pm 9$.
3. $8^{2}=64<70<81=9^{2}$, so $8<\sqrt{70}<9$.
4. $\sqrt{48}=\sqrt{16\times 3}=4\sqrt{3}$; $\sqrt{200}=\sqrt{100\times 2}=10\sqrt{2}$;
   $\sqrt[3]{128}=\sqrt[3]{64\times 2}=4\sqrt[3]{2}$.
5. $2\sqrt{12}+\sqrt{75}=2(2\sqrt{3})+5\sqrt{3}=9\sqrt{3}$.
6. No: the left side is $3+4=7$, while the right side is 5. Square roots do
   not distribute over addition; only product identities under suitable
   conditions are available.
7. $11$; in general $\sqrt{x^{2}}=|x|$ for real $x$.
8. Edge $=\sqrt[3]{250}=5\sqrt[3]{2}\text{ cm}\approx 6.3\text{ cm}$, because $250=125\times 2$. Cubing about 6.3 gives a
   value near 250, the inverse check.
9. Divide by 3: $x^{2}=25$, so $x=\pm 5$.
10. Every real square is nonnegative, so none squares to -16. Odd powers can be
    negative; $(-2)^3=-8$, so $\sqrt[3]{-8}=-2$.

---

# Unit 5 — Rational exponents connect powers and roots

## 5.1 What must $a^{1/n}$ mean?

Suppose exponent laws are to remain true. Then

$(a^{1/n})^n = a^{(1/n)n}=a$.

So $a^{1/n}$ must be an $n$th root of $a$:

$a^{1/n}=\sqrt[n]{a}$.

For even $n$, use $a\ge 0$ in the real-number system. For odd $n$, negative $a$ is
allowed. In this foundation course, a rational exponent with an even
denominator is used only with a nonnegative real base.

Examples:

- $16^{1/2}=\sqrt{16}=4$;
- $27^{1/3}=\sqrt[3]{27}=3$;
- $(-32)^{1/5}=-2$.

## 5.2 Numerator is power; denominator is root

For suitable real $a$,

$a^{m/n} = (\sqrt[n]{a})^m = \sqrt[n]{a^m}$.

The denominator $n$ names the root; the numerator $m$ names the power.

**Worked example 9.** Evaluate $64^{2/3}$.

Take the cube root first: $\sqrt[3]{64}=4$; then square: $4^{2}=16$. Checking the other
order, $\sqrt[3]{64^{2}}=16$ as well, though the intermediate number is larger.

**Worked example 10.** Evaluate $81^{-3/4}$.

The negative sign requests a reciprocal:

$81^{-3/4}=1/81^{3/4}=1/(\sqrt[4]{81})^3=1/3^3=1/27$.

## 5.3 Domain care for negative bases

$(-8)^{1/3}=-2$ is a real number. But $(-8)^{1/2}$ is not real.

Equivalent-looking rational exponents can be treacherous if domain conventions
are ignored. For example, $2/6=1/3$, and a cube root of a negative exists, but
interpreting “sixth root first” would not be real. Reduce the fraction and state
the number system; do not use exponent-law transformations to smuggle an
undefined intermediate expression into real arithmetic.

## 5.4 Solving simple power equations

**Worked example 11.** Solve $x^{3/2}=8$ for $x\ge 0$.

Raise both sides to reciprocal exponent $2/3$:

$x=8^{2/3}=(\sqrt[3]{8})^2=4$.

Check in the original: $4^{3/2}=(\sqrt{4})^3=8$.

The stated domain is essential. More advanced equations may acquire or lose
solutions under even powers, so always substitute back.

## Practice E — Rational exponents

1. Rewrite $\sqrt{7}$ and $\sqrt[3]{11}$ using rational exponents.
2. Rewrite $x^{5/2}$ in radical notation for $x\ge 0$.
3. Evaluate $125^{2/3}$.
4. Evaluate $32^{3/5}$.
5. Evaluate $16^{-3/2}$.
6. State whether each is real: $(-27)^{1/3}$, $(-27)^{1/2}$, $(-16)^{3/4}$.
7. Solve $x^{1/3}=5$.
8. Solve $x^{3/2}=27$ for $x\ge 0$.
9. A learner says $a^{2/3}$ means “square, then divide by 3.” Repair the
   interpretation.
10. Explain why a calculator decimal for $7^{1/2}$ should be between 2 and 3.

### Solutions E

1. $7^{1/2}$ and $11^{1/3}$.
2. $(\sqrt{x})^5$, equivalently $\sqrt{x^5}$ under the stated nonnegative domain.
3. $(\sqrt[3]{125})^2=5^{2}=25$.
4. $(\sqrt[5]{32})^3=2^{3}=8$.
5. $1/16^{3/2}=1/(\sqrt{16})^3=1/64$.
6. $(-27)^{1/3}=-3$ is real. The other two are not real under the convention
   “take an even root of the base,” because their even roots require a
   nonnegative radicand.
7. Cube both sides: $x=125$; check $\sqrt[3]{125}=5$.
8. Raise to $2/3$: $x=27^{2/3}=9$; check $9^{3/2}=3^{3}=27$.
9. The denominator gives a root and numerator a power:
   $a^{2/3}=(\sqrt[3]{a})^{2}$, where defined.
10. $2^{2}=4<7<9=3^{2}$; square root preserves the order of nonnegative quantities,
    so $2<\sqrt{7}<3$.

---

# Unit 6 — Scientific notation and orders of magnitude

## 6.1 Place value is a power-of-ten system

In decimal notation,

$4,582 = 4\times 10^3 + 5\times 10^2 + 8\times 10^1 + 2\times 10^0$.

Moving one place left multiplies a place value by 10; moving right divides it by
10. Negative powers label places after the decimal point:

$0.037 = 3\times 10^{-2} + 7\times 10^{-3}$.

## 6.2 Standard scientific notation

A nonzero number is in **scientific notation** when written

$a \times 10^n$, where $1\le |a|<10$ and $n$ is an integer.

Examples:

- $52,000 = 5.2\times 10^4$;
- $0.00081 = 8.1\times 10^{-4}$;
- $-7,300,000 = -7.3\times 10^6$.

The coefficient condition makes the representation standard and reveals scale.
$52\times 10^3$ has the right value but is not normalized scientific notation.

### Text-described visual: decimal-point walk

For $0.0046 \to 4.6\times 10^{-3}$, imagine the decimal point taking three steps right to
make 4.6. The multiplying power must compensate with exponent -3. The full
text-only check is $10^{-3}=0.001$ and $4.6\times 0.001=0.0046$.

Avoid relying on “left means positive” as a bare slogan. Instead ask whether the
original number is large or small. A positive power of ten makes $4.6$ large; a
negative power makes it small.

## 6.3 Multiplying and dividing

Group coefficients and powers of ten separately.

**Worked example 12.**

$(3\times 10^5)(4\times 10^{-2}) = 12\times 10^3 = 1.2\times 10^4$.

The first result is exact but not normalized; shifting 12 to 1.2 raises the
power by one.

**Worked example 13.**

$(8.4\times 10^7)/(2.1\times 10^3) = (8.4/2.1)\times 10^{7-3}=4\times 10^4$.

## 6.4 Adding and subtracting

Exponent laws do not combine addition. First express both quantities using the
same power of ten.

$3.2\times 10^5 + 7.0\times 10^4$

$=3.2\times 10^5 + 0.70\times 10^5$

$=3.90\times 10^5$.

Writing $10^9$ by adding exponents would be wrong. Addition counts quantities at
the same place-value scale; it does not multiply them.

## 6.5 Order of magnitude and comparison

The exponent gives a rapid scale estimate. $6.1\times 10^8$ is about one thousand
times $6.1\times 10^5$ because their exponents differ by 3 and $10^3=1000$.

Be careful with coefficients. The ratio of $9\times 10^4$ to $2\times 10^3$ is
$(9/2)\times 10=45$, not merely 10.

An **order of magnitude** is commonly a factor-of-ten scale. Different fields
use slightly different rounding conventions near boundaries, so state whether
you mean the exponent in normalized notation or the nearest power of ten.

## 6.6 Calculator notation

Many calculators display `6.02E23`, meaning $6.02\times 10^{23}$. The $E$ does not mean
Euler’s number and does not mean multiply by 23. Enter the coefficient and the
dedicated exponent key if available; parentheses are important in denominators.

## Practice F — Scale fluency

1. Write $7,450,000$ in scientific notation.
2. Write $0.00000309$ in scientific notation.
3. Convert $-2.14\times 10^{-3}$ to ordinary decimal notation.
4. Normalize $63\times 10^5$.
5. Calculate $(2.5\times 10^6)(4\times 10^{-3})$.
6. Calculate $(9.6\times 10^{-8})/(3.2\times 10^{-2})$.
7. Calculate $5.8\times 10^7+6.0\times 10^6$.
8. Calculate $4.1\times 10^{-3}-7.0\times 10^{-4}$.
9. Approximately how many times as large is $8\times 10^9$ as $4\times 10^6$? Give the
   exact ratio too.
10. Diagnose: $(3\times 10^4)+(2\times 10^5)=5\times 10^9$.

### Solutions F

1. $7.45\times 10^6$.
2. $3.09\times 10^{-6}$.
3. $-0.00214$.
4. $6.3\times 10^6$.
5. $10\times 10^3=1\times 10^4=10,000$.
6. $3\times 10^{-8-(-2)}=3\times 10^{-6}$.
7. Convert the second addend: $5.8\times 10^7+0.60\times 10^7=6.4\times 10^7$.
8. $4.1\times 10^{-3}-0.7\times 10^{-3}=3.4\times 10^{-3}$.
9. Exact ratio $(8/4)\times 10^{9-6}=2\times 10^3=2000$; so it is two thousand times as
   large, a little more than three orders-of-magnitude scale if “nearest power”
   language is used.
10. Adding quantities requires a common power:
    $0.3\times 10^5+2\times 10^5=2.3\times 10^5$. Adding exponents would model multiplication,
    not addition.

---

# Unit 7 — Estimating powers and roots honestly

## 7.1 Bound first, then refine

To estimate $\sqrt{38}$, locate neighboring squares:

$6^{2}=36<38<49=7^{2}$, so $6<\sqrt{38}<7$.

Try 6.2: $6.2^{2}=38.44$, slightly high. Try 6.16:
$6.16^{2}=37.9456$, slightly low. Therefore

$6.16<\sqrt{38}<6.20$.

This bracket is stronger evidence than a long unexamined decimal.

## 7.2 A hand method: average a guess with its correction

For positive $N$, start with a positive guess $g$ for $\sqrt{N}$. Since the partner
that would make product $N$ is $N/g$, average them:

`new guess = (g + N/g)/2`.

For $N=10$, start $g=3$:

- correction partner $10/3\approx 3.3333$;
- new guess $(3+3.3333)/2\approx 3.1667$;
- repeat: $(3.1667+10/3.1667)/2\approx 3.1623$.

This is the Babylonian method, also an instance of Newton’s method. At this
level, use it as a recipe and verify by squaring; calculus later explains its
speed.

## 7.3 Estimating integer powers

Before calculating $19^4$, replace 19 by 20:

$20^4=(2\times 10)^4=16\times 10^4=160,000$.

Since $19<20$, the exact positive fourth power is below 160,000. Exact
calculation gives $130,321$, compatible with the estimate. Powers amplify
relative differences: replacing 19 by 20 changes the base about 5%, but the
fourth powers differ by much more than 5%.

## 7.4 Comparing powers without huge arithmetic

Compare $3^{20}$ and $9^9$. Rewrite with a common base:

$9^9=(3^{2})^9=3^{18}$.

Since $3>1$ and $20>18$, $3^{20}>3^{18}$. No large integer is needed.

For bases between 0 and 1, larger positive exponents make values smaller:

$(1/2)^5 < (1/2)^3$.

Say why; do not transfer the $a>1$ pattern blindly.

## 7.5 Rounding and reported precision

If a measured square area is given as $50.0\text{ cm}^{2}$, reporting a side as
$7.071067811865\ldots\text{ cm}$ invents precision. A suitable report might be $7.07\text{ cm}$,
depending on the measurement process. Exact $\sqrt{50}=5\sqrt{2}\text{ cm}$ describes the
mathematical model; measurement uncertainty belongs to the physical claim.

When a root is rounded, substitution will not return the input exactly. Report
the residual. For $\sqrt{38}\approx 6.16$, the square is $37.9456$, a residual of $-0.0544$.

## 7.6 Dependency-free JavaScript recipe

The following program brackets a positive square root and then refines it. It
uses only ordinary JavaScript. Copy it into a browser console or Node.js. Every
printed interval is a text alternative to a number-line visual.

```js
function bracketSquareRoot(n) {
  if (!Number.isFinite(n) || n < 0) {
    throw new RangeError("n must be a finite nonnegative number");
  }
  let low = 0;
  while ((low + 1) ** 2 <= n) low += 1;
  return { low, high: n === low ** 2 ? low : low + 1 };
}

function babylonianSquareRoot(n, steps = 6) {
  if (!Number.isFinite(n) || n <= 0) {
    throw new RangeError("n must be a finite positive number");
  }
  let guess = n >= 1 ? n / 2 : 1;
  const audit = [];
  for (let step = 1; step <= steps; step += 1) {
    guess = (guess + n / guess) / 2;
    audit.push({ step, guess, residual: guess ** 2 - n });
  }
  return audit;
}

const bracket = bracketSquareRoot(38);
const audit = babylonianSquareRoot(38, 6);
console.log({ bracket, audit, libraryValue: Math.sqrt(38) });
```

Audit questions:

1. Does every guess remain inside or near the initial integer bracket?
2. Does the absolute residual generally shrink?
3. What fails for a negative input, and why is rejecting it honest over the
   real numbers?
4. Floating-point output is approximate. Which claims were proved before the
   program ran, and which are only numerical observations?

## Practice G — Estimate and audit

1. Bound $\sqrt{115}$ between consecutive integers.
2. Decide whether $\sqrt{70}$ is closer to 8 or 9 by comparing a midpoint square.
3. Use one Babylonian update from $g=5$ to estimate $\sqrt{30}$.
4. Without full evaluation, compare $5^{12}$ and $25^5$.
5. Without decimals, order $(3/4)^2$, $(3/4)^3$, $(3/4)^4$.
6. Estimate $31^3$ using $30^3$, then state whether the exact value is above or
   below your estimate.
7. A calculator reports $\sqrt{2}\approx 1.41421356$. Give a quick squaring check using 1.4
   and 1.5 first.
8. A measured area is 200 m² to the nearest square metre. Explain why
   $\sqrt{200}=14.14213562\ldots m$ should not be reported with eight decimal places.

### Solutions G

1. $10^{2}=100<115<121=11^{2}$, so $10<\sqrt{115}<11$.
2. The midpoint is 8.5, and $8.5^{2}=72.25$. Since 70 is below 72.25, $\sqrt{70}<8.5$,
   so it is closer to 8.
3. $(5+30/5)/2=(5+6)/2=5.5$. Its square 30.25 is slightly high.
4. $25^5=(5^{2})^5=5^{10}$, so $5^{12}$ is larger.
5. Since each multiplication by $3/4$ makes a positive number smaller,
   $(3/4)^4<(3/4)^3<(3/4)^2$.
6. $30^3=27,000$; since 31 is greater than 30 and cubing is increasing for
   positive numbers, $31^3$ is above 27,000. The exact 29,791 is plausible.
7. $1.4^{2}=1.96<2<2.25=1.5^{2}$, so the root lies between 1.4 and 1.5. Squaring the
   longer decimal gives approximately 2, which supports—but does not make
   exact—the decimal.
8. The input itself has measurement uncertainty. Exact $10\sqrt{2}\,m$ is a model
   value; a practical report such as about 14.1 m should match the measurement
   precision and purpose.

---

# Unit 8 — Applications, modeling, and transfer

## 8.1 Area and volume scale differently

If every length of a shape is multiplied by scale factor $k$, areas multiply by
$k^{2}$ and volumes by $k^{3}$.

**Worked example 14.** A model cube’s edge is doubled.

Original volume $s^{3}$; new volume $(2s)^{3}=8s^{3}$. Doubling length makes eight times
the volume, not twice.

This is why similarly shaped animals, tanks, and models do not preserve all
physical behavior under resizing. A mathematical scale law is not by itself a
complete physical model; materials and forces may add assumptions.

## 8.2 Repeated multiplication models growth and decay

If a quantity starts at $P$ and is multiplied by factor $r$ each step, after
$n$ steps it is

$P r^n$.

For a 5% increase, $r=1.05$; for a 5% decrease, $r=0.95$.

**Worked example 15.** A culture has 200 cells and doubles every hour in an
idealized model. After 6 hours it has

$200\times 2^6=12,800$ cells.

This is conditional on the doubling model. Real cultures face limited space,
nutrients, measurement error, and uncertain rates. A formula calculates the
model consequence; it does not prove the assumptions.

## 8.3 Information and binary choices

$n$ independent yes/no choices create $2^n$ possible strings. For 8 binary
digits there are $2^8=256$ strings. If every string is allowed, this counting is
exact. Restrictions—such as a required parity bit—reduce the count.

## 8.4 Inverse design uses roots

**Worked example 16.** A square image needs 2,000,000 pixels. Approximately how
many pixels should each side have?

Side $=\sqrt{2},000,000 = \sqrt{2\times 10^6}=10^3\sqrt{2}\approx 1414$. A 1414-by-1414 image has
1,999,396 pixels; 1415-by-1415 has 2,002,225. The exact design choice depends on
whether the total is a minimum, maximum, or target.

## 8.5 Similarity and inverse-square reasoning

Some spreading quantities over a sphere are proportional to $1/r^{2}$ because the
sphere’s area is $4\pi r^{2}$. Doubling distance then divides an idealized intensity by
4. This geometric argument applies only when the source spreads uniformly in
three-dimensional space with no absorption or boundaries. The exponent encodes
geometry plus assumptions.

## 8.6 Capstone: a powers-and-scale evidence card

Choose one context:

- folded thickness;
- digital storage;
- square or cubic scale models;
- population growth under a stated fixed-factor model;
- a scientific measurement spanning at least four powers of ten.

Create a one-page evidence card containing:

1. the question and units;
2. a table with at least five inputs and outputs;
3. a power model with every symbol defined;
4. one exact calculation and one estimate;
5. an inverse question solved using a root;
6. a text-described visual or tactile construction;
7. one assumption that could fail;
8. one common wrong method and a counterexample;
9. a calculator or program check with a residual; and
10. a conclusion whose precision matches the inputs.

### Example capstone seed: folded paper

Suppose ideal paper thickness is $0.10\text{ mm}$ and each fold doubles thickness. The
model after $n$ folds is $T(n)=0.10\times 2^n mm$. At 10 folds,
$T(10)=102.4\text{ mm}$. To ask when thickness first exceeds 1 m, convert 1 m to
1000 mm and compare powers: $0.10\times 2^n>1000$, so $2^n>10,000$.
Since $2^{13}=8192$ and $2^{14}=16,384$, the ideal model first exceeds 1 m at 14
folds. Actual folding becomes physically impossible much earlier; that failure
boundary belongs on the card.

## Practice H — Mixed transfer

1. A square is enlarged by scale factor 3. By what factor do its perimeter and
   area change?
2. A cube is enlarged by scale factor 10. By what factor does volume change?
3. An ideal quantity starts at 80 and grows by 20% per step. Write its value
   after $n$ steps and find the value after 3 steps.
4. A quantity is multiplied by 0.8 each hour. Is this growth or decay? What
   fraction remains after 4 hours?
5. How many binary strings of length 12 are there?
6. An ideal inverse-square intensity is 90 units at distance 2 m. What is it at
   6 m, all else equal?
7. A square sensor must have at least 50,000 pixels. Find the smallest whole
   number of pixels per side.
8. A model predicts $3\times 10^5$ particles, while a measurement gives
   $2.7\times 10^5$. Find the absolute residual and the residual as a percentage of
   the prediction.

### Solutions H

1. Perimeter changes by factor 3; area by $3^{2}=9$.
2. Volume changes by $10^{3}=1000$.
3. $Q(n)=80(1.2)^n$; after 3 steps, $80\times 1.728=138.24$.
4. Decay, because the multiplier is between 0 and 1. The remaining fraction is
   $0.8^4=0.4096$, or 40.96%.
5. $2^{12}=4096$, assuming every position independently allows 0 or 1.
6. Distance is multiplied by 3, so intensity is divided by $3^{2}=9$: 10 units.
7. $223^{2}=49,729$ is too small; $224^{2}=50,176$ works. The smallest side is 224
   pixels.
8. Measurement minus prediction is $-0.3\times 10^5=-3\times 10^4$ particles. Relative to
   the prediction, $(-3\times 10^4)/(3\times 10^5)=-0.10$, or -10%. The measurement is 10%
   below the prediction.

---

# Error clinic — identify the broken bridge

Do not merely label these “wrong.” Name the tempting true rule, explain why it
does not apply, and give a check or counterexample.

| Claim | Diagnosis | Repair |
|---|---|---|
| $3^4=12$ | Confuses repeated multiplication with multiplication by exponent. | $3^4=3\times 3\times 3\times 3=81$. |
| $2^3+2^4=2^7$ | Same-base addition is not the product law. | Exact sum is $8+16=24$; factor as $2^3(1+2)$. |
| $(x^3)^2=x^5$ | Adds where a power of a power multiplies exponents. | Six factors give $x^6$. |
| $(a+b)^2=a^{2}+b^{2}$ | Product distribution does not extend across addition. | $(a+b)^2=a^{2}+2ab+b^{2}$. |
| $a^0=0$ | Extending repeated multiplication alone gives no zero-factor case. | Consistent quotient pattern gives $a^0=1$ for $a\ne 0$. |
| $4^{-2}=-16$ | Reads the exponent sign as the value’s sign. | $4^{-2}=1/4^{2}=1/16$. |
| $\sqrt{36}=\pm 6$ | Mixes principal-root notation with equation solving. | $\sqrt{36}=6$; if $x^{2}=36$, then $x=\pm 6$. |
| $\sqrt{x^{2}}=x$ | Forgets that principal square roots are nonnegative. | $\sqrt{x^{2}}=\vert x\vert $. |
| $\sqrt{9+16}=\sqrt{9}+\sqrt{16}$ | Square roots do not distribute over addition. | Left side is 5; right side is 7. |
| $0^0=1$ always | Applies a nonzero-base rule at an excluded base. | State the context; leave it undefined in elementary real arithmetic. |
| $5\times 10^{-3}=0.0050\ldots$ with endless certainty | Treats notation as measurement precision. | The number is exactly 0.005 mathematically; reported measurement precision needs context. |
| $2\times 10^3+4\times 10^5=6\times 10^8$ | Uses multiplication’s exponent rule for addition. | Use common scale: $0.02\times 10^5+4\times 10^5=4.02\times 10^5$. |

## Error-clinic rehearsal

For each claim below, write: (i) verdict, (ii) smallest useful counterexample or
derivation, and (iii) corrected statement.

1. $x^m x^n=x^{mn}$.
2. $(-5)^{\text{even}}$ is always negative because the base is negative.
3. $\sqrt{a}\sqrt{b}=\sqrt{a+b}$.
4. $a^{1/3}=a/3$.
5. The exponent in scientific notation tells the number of zeros.
6. If a calculator returns a decimal, the decimal is exact.

### Error-clinic responses

1. False: $2^{2}\times 2^{3}=4\times 8=32=2^5$, not $2^6$. Correct: add exponents when
   multiplying powers with the same base.
2. False: an even count of negative factors pairs to a positive result;
   $(-5)^{2k}>0$ for whole $k$ when the base is nonzero.
3. False: with $a=9,b=16$, the left is 12 and right is 5. For nonnegative
   $a,b$, the valid product relation is $\sqrt{a}\sqrt{b}=\sqrt{ab}$.
4. False: $8^{1/3}=2$, not $8/3$. The exponent $1/3$ means cube root.
5. Unreliable. Normalization and zeros inside the coefficient disrupt the
   slogan. The exponent records multiplication by a power of ten; place-value
   movement is the dependable method.
6. Usually false for irrational values and floating-point computation. Retain
   an exact form when possible, mark approximations with $\approx$, and report a
   bracket or residual.

---

# Final checkpoint

Complete without notes, then use the map after the solutions.

1. Evaluate $(-2)^6-2^5$.
2. Simplify $(3x^{-2}y^3)^2$ using positive exponents.
3. Simplify $a^7a^{-4}/a^2$ for $a\ne 0$.
4. Simplify $\sqrt{288}$.
5. Solve $x^{2}=72$ exactly over the real numbers.
6. Evaluate $243^{2/5}$.
7. Evaluate $64^{-2/3}$.
8. Write $0.000000709$ in scientific notation.
9. Calculate $(6\times 10^{-4})(3\times 10^7)$ in normalized scientific notation.
10. Calculate $4.6\times 10^8+8\times 10^7$.
11. Bound $\sqrt{150}$ between consecutive integers.
12. Compare $8^7$ and $4^{11}$ without evaluating either large integer.
13. A cube’s volume is 686 cm³. Give its edge exactly in simplified radical
    form and approximately to one decimal place.
14. A quantity starts at 500 and is multiplied by 1.03 each year. Write a model
    after $n$ years and identify one assumption.
15. Explain the difference between $\sqrt{25}=5$ and the solution of $x^{2}=25$.

## Final checkpoint solutions

1. $64-32=32$.
2. $9x^{-4}y^6=9y^6/x^4$, with the original requiring $x\ne 0$.
3. $a^{7-4-2}=a$ for $a\ne 0$.
4. $\sqrt{144\times 2}=12\sqrt{2}$.
5. $x=\pm \sqrt{72}=\pm 6\sqrt{2}$.
6. $243=3^5$, so $243^{2/5}=3^{2}=9$.
7. $1/64^{2/3}=1/(\sqrt[3]{64})^{2}=1/16$.
8. $7.09\times 10^{-7}$.
9. $18\times 10^3=1.8\times 10^4$.
10. $4.6\times 10^8+0.8\times 10^8=5.4\times 10^8$.
11. $12^{2}=144<150<169=13^{2}$, so $12<\sqrt{150}<13$.
12. $8^7=(2^{3})^7=2^{21}$; $4^{11}=(2^{2})^{11}=2^{22}$; therefore $4^{11}$ is twice
    $8^7$.
13. $686=343\times 2=7^{3}\times 2$, so the edge is $7\sqrt[3]{2}\text{ cm}\approx 8.8\text{ cm}$.
14. $Q(n)=500(1.03)^n$. One assumption is that the 3% multiplier remains fixed
    each year; others include consistently defined measurements and no added
    flows outside the model.
15. $\sqrt{25}$ denotes the one nonnegative principal square root, 5. The equation
    asks for every real number whose square is 25, namely $x=5$ and $x=-5$.

## Diagnostic map

- Errors on 1: revisit signs and parentheses in Unit 1.
- Errors on 2–3: revisit Units 2–3 and retain domain restrictions.
- Errors on 4–5 or 13: revisit Unit 4 and check by powering back.
- Errors on 6–7: revisit Unit 5’s numerator/denominator interpretation.
- Errors on 8–10: revisit Unit 6 and normalize only after calculating.
- Errors on 11–12: revisit Unit 7’s landmarks and common-base strategy.
- Errors on 14–15: revisit Unit 8 and the principal-root distinction.

Mastery does not mean speed. A strong response can explain the applicable law,
its conditions, and an independent check.

---

# Backward and forward connections

## Look backward

If reciprocal powers or signs feel unstable, first revisit the proposed topic
routes Fractions and ratios and
Signed numbers. Flexible magnitude comparison begins
at Number sense. These links are topic routes and remain
useful even before this course receives a catalog item.

## Continue forward

- Algebraic expressions uses exponent laws with
  variables and factoring.
- Exponentials and logarithms turns the
  exponent into a changing input and introduces the inverse logarithm.
- Estimation and error develops bounds, measurement
  uncertainty, and propagation more carefully.
- Functions makes power rules into input–output objects.
- The published [Exponential Model Audit](../articles/recipe-exponential-model-audit.md)
  applies multiplicative change with residual and extrapolation checks.

## One-page reference

For real quantities wherever each expression is defined:

| Idea | Reliable form | Conditions or warning |
|---|---|---|
| product, same base | $a^m a^n=a^{m+n}$ | not an addition rule |
| quotient, same base | $a^m/a^n=a^{m-n}$ | $a\ne 0$ |
| power of a power | $(a^m)^n=a^{mn}$ | multiply exponents |
| power of product | $(ab)^n=a^n b^n$ | does not extend to $a+b$ |
| zero exponent | $a^0=1$ | $a\ne 0$ |
| negative exponent | $a^{-n}=1/a^n$ | $a\ne 0$ |
| rational exponent | $a^{m/n}=(\sqrt[n]{a})^m$ | even root needs $a\ge 0$ over reals |
| principal root | $\sqrt{x^{2}}=\vert x\vert $ | $\sqrt{A}$ is nonnegative |
| scientific notation | $a\times 10^n$ | $1\le \vert a\vert <10$ |
| approximation | $exact value \approx decimal$ | bracket or report residual |

The durable habit is not memorizing this table in isolation. Rebuild a rule by
expanding factors, following an inverse operation, or checking scale. Powers and
roots then become a connected language rather than a collection of tricks.


<!-- retained-domain-clinic -->

## Additional domain clinic

This clinic keeps the arguments and complete exercises from the earlier compact route. Its [original course](#/courses/atlas-foundations-powers-roots-scale) remains available for earlier notes and study marks.


## Powers, roots, and scale: compact domain clinic

Powers are a compact language for repeated multiplication, roots reverse powers, and scientific notation lets the same ideas describe quantities from cell widths to planetary distances. The notation is short, but it carries conditions that are easy to hide. This course makes those conditions visible.

You should already be comfortable multiplying fractions and signed numbers. Keep a calculator nearby for checking estimates, but do the structural reasoning first.

### Before you begin: a four-question diagnostic

Try these without a calculator. The point is to choose a useful entry point, not
to earn a score.

1. Compute \((-3)(-3)(-3)\).
2. Compute \(3/4\div 2/5\).
3. Explain why \(5/0\) is not a number.
4. A square has side \(3\) cm. State its area with units.

The answers are \(-27\), \(15/8\), “division by zero cannot undo a
multiplication by zero uniquely,” and \(9\text{ cm}^2\). If the sign in the
first answer was uncertain, review signed multiplication before Sections 1–2.
If the second was uncertain, review reciprocals before negative exponents. If
the third was uncertain, keep a domain ledger beside every example in Sections
2–4. If the fourth lacked squared units, pause at the scale examples in Section
6. A learner who needs all four repairs can still use this course: work one
section at a time and check each worked example by expanding it.

### 1. A power names a base and an exponent

For a positive whole number \(n\),

\[
a^n=\underbrace{a\cdot a\cdots a}_{n\text{ factors}}.
\]

The number \(a\) is the **base** and \(n\) is the **exponent**. Thus \(3^4=3\cdot3\cdot3\cdot3=81\). The exponent counts factors; it is not a multiplier. In particular, \(3^4\ne3\cdot4\).

Parentheses determine the base. Compare

\[
(-2)^4=16,\qquad -2^4=-(2^4)=-16.
\]

In the first expression, the base is \(-2\). In the second, exponentiation applies to \(2\) before the leading negative sign.

#### Why the exponent laws take their familiar form

When bases match, joining two strings of factors gives

\[
a^m a^n=a^{m+n}
\]

for positive whole numbers \(m,n\). Likewise, grouping \(m\) copies of \(a^n\) gives

\[
(a^n)^m=a^{nm}.
\]

These are different operations on the exponents: multiplication of powers adds exponents, while a power of a power multiplies them.

If two factors are raised to the same positive whole power, they may be grouped factor by factor:

\[
(ab)^n=a^n b^n.
\]

For division, provided the denominator is nonzero,

\[
\left(\frac ab\right)^n=\frac{a^n}{b^n}.
\]

**Worked example.** Simplify \((2x^3)^2x^4\).

\[
(2x^3)^2x^4=2^2(x^3)^2x^4=4x^6x^4=4x^{10}.
\]

The exponent does not distribute over addition: \((a+b)^2\) is generally not \(a^2+b^2\). Expanding shows the missing term:

\[
(a+b)^2=a^2+2ab+b^2.
\]

Taking \(a=b=1\) is a quick counterexample: \(2^2=4\), whereas \(1^2+1^2=2\).

### 2. Zero and negative exponents are forced by consistency

Suppose \(a\ne0\). The quotient of equal powers is \(1\), but the quotient law suggests

\[
\frac{a^m}{a^m}=a^{m-m}=a^0.
\]

Therefore the consistent definition is

\[
a^0=1\qquad(a\ne0).
\]

The restriction matters: \(0^0\) is not assigned the ordinary algebraic value used here. Different advanced contexts sometimes adopt conventions for it, but no such convention licenses division by zero.

Similarly,

\[
1=\frac{a^m}{a^m}=a^{m-m}=a^m a^{-m},
\]

so

\[
a^{-m}=\frac1{a^m}\qquad(a\ne0).
\]

A negative exponent means **reciprocal**, not a negative result. For example,

\[
2^{-3}=\frac1{2^3}=\frac18,\qquad (-2)^{-3}=\frac1{(-2)^3}=-\frac18.
\]

With integer exponents, the main laws remain valid wherever every expression is defined:

\[
a^r a^s=a^{r+s},\quad \frac{a^r}{a^s}=a^{r-s},\quad (a^r)^s=a^{rs}.
\]

If an exponent is negative, the base cannot be zero. That domain check comes before simplification.

**Worked example.** Simplify

\[
\frac{6x^{-2}y^3}{3xy^{-1}}
\]

for \(x\ne0\) and \(y\ne0\).

Coefficients divide to \(2\). Subtract exponents on matching bases:

\[
2x^{-2-1}y^{3-(-1)}=2x^{-3}y^4=\frac{2y^4}{x^3}.
\]

The final form has positive exponents, but the original restrictions \(x\ne0\), \(y\ne0\) still belong to the statement.

### 3. Roots reverse whole-number powers

For \(a\ge0\), the symbol \(\sqrt a\) means the unique nonnegative number whose square is \(a\). It is called the **principal square root**. Thus \(\sqrt{25}=5\), not \(\pm5\).

The equation \(x^2=25\), however, has two real solutions: \(x=5\) and \(x=-5\). The symbol \(\sqrt{25}\) names one number; solving an equation asks for every number that satisfies it.

This distinction explains the identity

\[
\sqrt{x^2}=|x|,
\]

not \(x\) for every real \(x\). If \(x=-7\), then \(\sqrt{x^2}=\sqrt{49}=7=|x|\).

More generally, \(\sqrt[n]{a}\) is an **nth root**.

- If \(n\) is even, a real principal nth root requires \(a\ge0\) and is chosen nonnegative.
- If \(n\) is odd, every real \(a\) has exactly one real nth root, which has the same sign as \(a\).

For instance, \(\sqrt[3]{-8}=-2\), while \(\sqrt{-8}\) is not a real number.

#### Simplifying roots without changing their value

Factor out perfect powers:

\[
\sqrt{72}=\sqrt{36\cdot2}=6\sqrt2.
\]

For nonnegative \(a,b\),

\[
\sqrt{ab}=\sqrt a\sqrt b.
\]

The nonnegative condition protects the statement in real arithmetic. There is no matching addition law: \(\sqrt{a+b}\ne\sqrt a+\sqrt b\) in general. With \(a=b=1\), the two sides are \(\sqrt2\) and \(2\).

**Worked example.** Solve \((x-3)^2=20\).

Taking square roots of an equation requires both signs:

\[
|x-3|=\sqrt{20}=2\sqrt5,
\]

so

\[
x=3+2\sqrt5\quad\text{or}\quad x=3-2\sqrt5.
\]

Substitution confirms both solutions.

### 4. Rational exponents connect powers and roots

For a positive real base \(a\), the exponent \(1/n\) is defined to be the unique positive principal nth root of \(a\). With that sign choice, the power-of-a-power law works:

\[
(a^{1/n})^n=a.
\]

Therefore

\[
a^{1/n}=\sqrt[n]{a}
\]

and, for integers \(m\) and positive integers \(n\),

\[
a^{m/n}=\sqrt[n]{a^m}=(\sqrt[n]{a})^m.
\]

For example,

\[
16^{3/4}=(\sqrt[4]{16})^3=2^3=8.
\]

Using positive bases makes every rational exponent unambiguous and preserves all usual exponent laws. Real negative bases require more care. Some rational exponents work, such as

\[
(-8)^{1/3}=-2,
\]

but \((-8)^{1/2}\) is not real. Worse, the same rational number can have different-looking fractions: \(1/3=2/6\), yet an unreduced even root of a negative number is not real. At this level, reduce the fraction and interpret negative-base rational powers through an odd root only when that real interpretation is defined. Do not apply positive-base laws mechanically across undefined expressions.

Zero is another boundary case. A positive rational power of zero is zero. A zero exponent is left outside the ordinary definition \(a^0=1\) because that definition assumed \(a\ne0\). A negative power of zero would require division by zero and is undefined.

**Worked example.** Evaluate \(27^{-2/3}\).

The negative sign requests a reciprocal:

\[
27^{-2/3}=\frac1{27^{2/3}}
=\frac1{(\sqrt[3]{27})^2}
=\frac1{3^2}=\frac19.
\]

### 5. Estimating roots and powers

An exact radical can still be located without a calculator. Since

\[
7^2=49<50<64=8^2,
\]

we know \(7<\sqrt{50}<8\). To refine the estimate, test decimals:

\[
7.07^2=49.9849<50,
\qquad
7.08^2=50.1264>50.
\]

Hence \(7.07<\sqrt{50}<7.08\). This bracket is more informative than an unexplained calculator display because it certifies the interval containing the value.

Powers can be estimated by comparison too. Since \(2^{10}=1024\), it is useful to remember that \(2^{10}\) is close to \(10^3\). Then

\[
2^{30}=(2^{10})^3\approx(10^3)^3=10^9.
\]

The exact value is a little larger than one billion because \(1024>1000\).

### 6. Scientific notation and orders of magnitude

A nonzero decimal is in **scientific notation** when written

\[
c\times10^k,
\]

where \(1\le |c|<10\) and \(k\) is an integer. Moving the decimal point left increases the exponent; moving it right decreases the exponent:

\[
4{,}720{,}000=4.72\times10^6,
\qquad
0.000081=8.1\times10^{-5}.
\]

Scientific notation separates the significant part \(c\) from the scale \(10^k\). Multiplication and division then use exponent laws:

\[
(3\times10^5)(2\times10^{-3})=6\times10^2=600,
\]

\[
\frac{8.4\times10^7}{2.1\times10^3}=4\times10^4.
\]

For addition, first express both quantities at the same power of ten:

\[
3.2\times10^5+7.0\times10^4
=3.2\times10^5+0.70\times10^5
=3.90\times10^5.
\]

Adding exponents here would be a category error; exponent addition belongs to multiplication.

An **order of magnitude** comparison focuses on powers of ten. A quantity near \(10^8\) is about three orders of magnitude larger than one near \(10^5\), because their ratio is near \(10^3\). The coefficient still matters for precise comparison. For example, \(9\times10^5\) and \(1.1\times10^6\) lie on opposite sides of a power-of-ten boundary but differ by only a factor of about \(1.22\), not a factor of ten.

#### Scale factors in length, area, and volume

If every length of a shape is multiplied by \(s\), then areas are multiplied by \(s^2\) and volumes by \(s^3\). This follows from units as well as geometry. A rectangle with sides \(L,W\) has area \(LW\); scaling both gives

\[
(sL)(sW)=s^2LW.
\]

A box gains three factors of \(s\), so its volume gains \(s^3\).

**Worked example.** A model cube has edge length \(2\) cm. A larger cube is built at scale factor \(5\). Its edge is \(10\) cm, its surface area is multiplied by \(5^2=25\), and its volume is multiplied by \(5^3=125\). Multiplying the original volume \(2^3=8\) cm\(^3\) by \(125\) gives \(1000\) cm\(^3\), which agrees with \(10^3\).

### 7. A reliable problem-solving routine

When an expression contains powers or roots, use this order.

1. **Identify each base.** Parentheses decide whether a sign, fraction, or product belongs to the base.
2. **Record restrictions.** Negative exponents exclude zero. Even real roots require nonnegative radicands.
3. **Choose the law that matches the operation.** Multiplication of like bases adds exponents; a power of a power multiplies them.
4. **Separate exact work from approximation.** Keep \(3\sqrt2\) exact until a decimal is actually needed.
5. **Check scale and sign.** A reciprocal of a number larger than one should be smaller than one. An even power cannot be negative.
6. **Test the result.** Substitute solutions into the original equation and compare a decimal answer with bounding powers.

### 8. Common errors and repairs

**Error: treating the exponent as a coefficient.**  
Repair: expand one small case. \(5^3=5\cdot5\cdot5\), not \(5\cdot3\).

**Error: forgetting that exponentiation precedes a leading sign.**  
Repair: write the base explicitly. \(-4^2=-(4^2)\), while \((-4)^2\) has base \(-4\).

**Error: distributing a power or root over a sum.**  
Repair: test \(1+1\). Valid distribution laws concern products under stated conditions, not sums.

**Error: writing \(a^{-n}=-a^n\).**  
Repair: translate the negative exponent immediately as \(1/a^n\).

**Error: writing \(\sqrt{x^2}=x\).**  
Repair: remember that a principal square root is nonnegative, so the result is \(|x|\).

**Error: losing solutions after taking a square root.**  
Repair: distinguish the number \(\sqrt a\) from the equation \(u^2=a\), whose real solutions are \(u=\pm\sqrt a\) when \(a>0\).

**Error: combining scientific-notation exponents during addition.**  
Repair: align the powers of ten first, just as decimal places are aligned in ordinary addition.

### 9. Practice

1. Evaluate \((-3)^4\), \(-3^4\), and \(3^{-4}\).
2. Simplify \((x^2y^{-1})^3/(xy^{-2})\), stating restrictions.
3. Explain why \(a^0=1\) requires \(a\ne0\).
4. Simplify \(\sqrt{180}\) and bracket it between consecutive integers.
5. Solve \((2x+1)^2=12\) exactly.
6. Evaluate \(81^{3/4}\) and \(32^{-2/5}\).
7. Compute \((6.0\times10^{-4})(3.5\times10^7)\) in scientific notation.
8. A photograph is enlarged so every length is \(1.5\) times as large. By what factor does its area change? What would be the volume factor for a geometrically similar solid?

### 10. Solutions

1. \((-3)^4=81\). In \(-3^4\), the power is evaluated before the leading sign, so the result is \(-81\). Finally, \(3^{-4}=1/3^4=1/81\).
2. For \(x\ne0\), \(y\ne0\),
   \[
   \frac{(x^2y^{-1})^3}{xy^{-2}}
   =\frac{x^6y^{-3}}{xy^{-2}}
   =x^5y^{-1}=\frac{x^5}{y}.
   \]
3. The consistency argument uses \(a^m/a^m=1\). If \(a=0\), this quotient is division by zero, so the argument is invalid. The ordinary integer-power definition therefore states \(a^0=1\) only for nonzero \(a\).
4. \(180=36\cdot5\), so \(\sqrt{180}=6\sqrt5\). Because \(13^2=169<180<196=14^2\), it lies between \(13\) and \(14\).
5. From \((2x+1)^2=12\), obtain \(2x+1=\pm\sqrt{12}=\pm2\sqrt3\). Hence \(x=(-1+2\sqrt3)/2\) or \(x=(-1-2\sqrt3)/2\).
6. \(81^{3/4}=(\sqrt[4]{81})^3=3^3=27\). Also \(32^{-2/5}=1/(\sqrt[5]{32})^2=1/2^2=1/4\).
7. Multiply coefficients and add exponents: \(6.0\cdot3.5=21.0\) and \(-4+7=3\). Normalize \(21.0\times10^3\) to \(2.10\times10^4\).
8. Area changes by \(1.5^2=2.25\). A similar solid's volume would change by \(1.5^3=3.375\).

### Final task — scale claim audit

Choose one claim involving repeated growth, area or volume scaling,
scientific notation, or an inverse power. Produce:

1. the original quantities with units;
2. an estimate made before exact calculation;
3. an exact expression with every domain restriction;
4. a decimal approximation with stated precision;
5. an inverse-operation check;
6. one plausible wrong method and the smallest example that exposes it.

For example, compare how the side length, surface area, and volume of a cube
change under one scale factor. A complete audit explains why the exponents
are \(1,2,3\) rather than merely reporting calculator outputs.

### Where to go next

Powers and roots support polynomial algebra, geometry, scientific measurement, and exponential models. Before moving on, make sure you can state the domain restriction attached to every negative exponent or even root. Then study exponential growth and logarithms, where a variable moves into the exponent and scale becomes the central object rather than a convenient notation.
