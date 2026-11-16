var e=`---
parent_id: book-number-and-arithmetic
chapter_id: powers-roots
title: "Powers and Roots"
level: foundation
license: CC BY-SA 4.0
---

# Powers and Roots

A square array with seven rows of seven counters contains forty-nine counters.
A cube built from four layers, each a four-by-four array, contains sixty-four
unit cubes. Repeated multiplication occurs often enough to deserve a short
notation. Powers record the repeated factors, while roots recover a factor
size when the repeated product is known. The challenge is to keep the
operation distinct from ordinary multiplication or repeated addition.

Read [Multiplication and Division](multiplication-division.md),
[Fractions](fractions.md) and [Negative Numbers](negative-numbers.md).
You should be able to distinguish a product from a sum, work with positive
fractions, and use brackets with signed numbers. Most examples use whole
numbers. Square roots are the nonnegative roots of nonnegative numbers;
there is no need for complex numbers in this chapter.

## A power counts repeated factors

**Definition 9.1 (Positive integer power).** For a number $a$ and a positive
whole number $n$, the power $a^n$ is the product of $n$ copies of $a$.
The number $a$ is the base and $n$ the exponent. Thus $a^1=a$ and
$a^3=a\\times a\\times a$.

The exponent counts factors, not an amount to multiply the base by.
$3^4=3\\times3\\times3\\times3=81$, whereas $3\\times4=12$.
The expressions describe different operations. The powers $a^2$ and $a^3$
are called the square and cube of $a$, reflecting their array and box
interpretations when $a$ is a length or a whole-number count of unit steps.

**Worked example 9.2 (An array and a box).** A square grid has six unit
cells along each side. Its cell count is $6^2=36$. A box has three unit
cubes along each of its three directions. One layer contains $3^2=9$
cubes, and three layers contain $3^3=27$. Writing $6\\times2$ or
$3\\times3$ for the respective counts would record too few factors.
The geometry tells us which quantities multiply.

Powers of ten express place value compactly: $10^1=10$,
$10^2=100$, $10^3=1000$. A numeral $5070$ can be described as
five thousands plus seven tens, or $5\\times10^3+7\\times10$.
The exponent three in $10^3$ explains the thousand-sized unit. It is
not an extra digit in the numeral $10$.

## Regroup products before inventing a rule

**Proposition 9.3 (Products of powers).** For positive whole numbers $m,n$,

$$a^m\\times a^n=a^{m+n},\\qquad (a^m)^n=a^{mn}.$$

*Reason.* The first expression joins a list of $m$ factors with a list
of $n$ identical factors, giving $m+n$. In the second expression there
are $n$ groups, each containing $m$ factors, giving $mn$ in total.
Associativity permits regrouping without changing the product. ∎

The same-base requirement matters for the first rule. It does not claim
$2^3\\times5^4$ equals a power obtained by adding three and four while
ignoring the bases. Nor can a product rule be transferred unchanged to a
sum: $2^2+2^3=4+8=12$, which is not $2^5=32$.
When uncertain, expand a small example into its actual factors.

For nonzero $a$ and positive $m\\ge n$, cancelling shared factors gives
$a^m\\div a^n=a^{m-n}$. When $m=n$, the quotient is one, so we
extend the notation by defining $a^0=1$ for $a\\ne0$.
For positive $n$, define $a^{-n}=1/a^n$ when $a\\ne0$.
These conventions extend the same-base multiplication patterns to these
cases. This elementary chapter leaves $0^0$ unassigned; a negative exponent
of zero would require division by zero and is also excluded.

**Worked example 9.4 (A negative exponent is a reciprocal).**
$2^{-3}=1/2^3=1/8$. The negative sign belongs to the exponent,
so it does not mean a negative answer or three factors of minus two.
In contrast, $(-2)^3=-8$ has a negative base enclosed in brackets.
The expression $-2^2$ conventionally means $-(2^2)=-4$, while
$(-2)^2=4$. Brackets state whether the sign belongs to the repeated base.
Writing the intermediate product reveals which meaning is intended.

## A square root reverses a nonnegative square

**Definition 9.5 (Square root).** For $b\\ge0$, its square root
$\\sqrt b$ is the nonnegative number whose square is $b$.
In particular, $\\sqrt0=0$, $\\sqrt1=1$ and $\\sqrt{49}=7$.

Both $7$ and $-7$ square to forty-nine, but the square-root symbol names
only the nonnegative one. The equation $x^2=49$ therefore has two signed
solutions, while $\\sqrt{49}$ has one specified value. This distinction
prevents an unnecessary plus-or-minus sign from being attached to the value
of the root symbol itself.

Whole numbers that are squares of whole numbers are called perfect squares:
$0,1,4,9,16,25,36,49,64,81,100,\\ldots$. A square need not have a
whole-number root if its area is not one of those values. For example,
a square of area two has a positive side length between one and two.
That side is denoted $\\sqrt2$. Its exact notation does not require a
terminating decimal representation.

**Worked example 9.6 (An unknown square side).** A square has area
$81$ square centimetres. Its side is $\\sqrt{81}=9$ centimetres,
because $9\\times9=81$. The area unit is square centimetres and the
side unit centimetres. A proposed side of $40.5$ centimetres obtained
by halving the area would not satisfy the multiplication relation. Taking
a square root reverses squaring, not doubling.

The cube root of a nonnegative number similarly asks for a nonnegative
factor whose cube gives it. The cube root of $27$ is $3$ because
$3\\times3\\times3=27$. Signed cube roots are also possible, but
are not needed for the measurement examples here. A root's order tells
how many repeated factors to recover; it is not a divisor applied to
the number under the root.

## Bounds are useful when a root is not a familiar square

For nonnegative numbers, increasing a number increases its square. One
reason is that if $y>x\\ge0$, then
$y^2-x^2=(y-x)(y+x)>0$. Thus consecutive square values locate roots:
$36<50<64$ implies $6<\\sqrt{50}<8$, and using $49<50<64$
tightens that to $7<\\sqrt{50}<8$.

**Worked example 9.7 (A decimal bound rather than a guessed equality).**
Since $1.4^2=1.96<2$ and $1.5^2=2.25>2$,
$1.4<\\sqrt2<1.5$. A calculator's finite decimal can refine an
approximation, but $1.4$ is not exactly the root: squaring it does not
return two. State a bound or use $\\approx$ when an exact value is
not supplied. The exact expression $\\sqrt2$ remains useful even before
a decimal approximation is chosen.

Square roots do not distribute over addition. For example,
$\\sqrt{9+16}=\\sqrt{25}=5$, whereas
$\\sqrt9+\\sqrt{16}=3+4=7$. An operation's name does not entitle us
to apply it separately to parts of a sum. A small counterexample can
reject a proposed universal shortcut immediately.

## Order of operations expresses the structure

In $3+2^3\\times4$, first form the power, then the product, then the
sum: $3+8\\times4=35$. Brackets override that grouping when a
different expression is intended. Thus $(3+2)^3\\times4=500$.
These conventions make an unbracketed expression readable in one agreed
way; they do not claim that changing the grouping preserves its value.
When presenting a new problem, add brackets where they help reveal the
meaning rather than turning notation into a guessing exercise.

Powers and roots are especially useful in measurement, where length,
area and volume involve different numbers of factors. A length scale of
two gives an area scale of $2^2=4$ and a volume scale of $2^3=8$.
The next chapter develops the units that accompany those different
quantities. Keep their names attached before comparing the numerical values.

## Large and small quantities with powers of ten

A large count can be written as a convenient factor times a power of ten.
For example, $4\\,500\\,000=4.5\\times10^6$.
The factor $4.5$ says four and a half million-sized units, and the exponent
six identifies the size of those units. This is an exact change of notation
when all digits of the original number are retained. If the original count
was only approximate, changing its notation does not remove that uncertainty.

For a small number, the reciprocal powers have an equally concrete meaning:
$10^{-1}=1/10$, $10^{-2}=1/100$ and $10^{-3}=1/1000$.
Thus $0.0045=4.5\\times10^{-3}$ is four and a half thousandths.
In scientific notation, a positive nonzero value is conventionally written
with a factor at least one and below ten, followed by an integer power of
ten. The convention gives one consistent scale description rather than a
new numerical value. Zero can simply remain zero.

**Worked example 9.8 (Check a scale by expanding it).** A length is stated
as $6.2\\times10^{-2}$ metres. Since the power represents one hundredth,
the length is $6.2/100=0.062$ metres. There are one hundred centimetres
per metre, so it is also $6.2$ centimetres. Writing $620$ metres would
replace the negative exponent by a positive one, changing the length by a
large factor. Expanding the power into its fraction makes the intended scale
visible before any unit conversion is performed.

Square-root checks also connect exact notation to scale. If someone proposes
$\\sqrt{81}=40.5$, the number is too large even before an exact square
is computed: forty is already much greater than nine, whose square is
eighty-one. A root estimate should be assessed by squaring it, just as a
quotient is assessed by multiplying it back by the divisor. The inverse
operation explains the check and keeps a root from being confused with a
simple division by its order.

## Worked example: enlarging a square changes two directions

Draw a square made from three rows of three small tiles. It contains nine
tiles. Enlarge the drawing so that each side is twice as long, keeping the
same tile size. The new square has six rows of six tiles and contains
thirty-six tiles. Its side length doubled, but its tile count multiplied
by four because both the number of rows and the number of columns doubled.

One way to see the factor four without calculating is to split the enlarged
square along its middle horizontal and vertical lines. Four copies of the
original square fit exactly, with no overlap. This explains why area scales
with the square of a length factor. A box has three directions instead:
doubling its length, width and height allows two layers of four old boxes,
giving eight copies altogether.

Roots reverse the corresponding question. A square containing thirty-six
unit tiles has side length six units, since six equal rows of six account
for the whole square. Dividing thirty-six by two would not recover a side;
the exponent counts multiplying directions, not a divisor to use afterward.
Likewise, a cube containing sixty-four unit cubes has four along each edge,
because four layers each contain sixteen. Naming the geometric quantity
first makes the power or root operation meaningful rather than a symbol
rule to memorize in isolation.

## Worked example: count the stages in repeated doubling

Start with one tile. After one doubling there are two tiles; after
two doublings there are four; after three there are eight. After four
doublings there are sixteen. The starting arrangement is stage zero, not
stage one. Counting it as a doubling would shift every later answer.

The exponent records how many factors of two have been applied. It
does not record how many numbers appear in the written list, because
the list includes the starting value. To check a claim of thirty-two
tiles after five doublings, work backward by halving: sixteen, eight, four,
two, one. Five reversals recover the starting amount. This check connects
powers with repeated multiplication and its inverse operation without requiring
a memorized table of large powers. If the starting amount were three
tiles instead, the same five doublings would give three groups of thirty-two,
not the power of two alone; the initial quantity remains part of
the model.

## Exercises

### Exercise 9.1
<a id="powers-roots-ex-1"></a>

Expand and evaluate $4^3$. Compare it with $4\\times3$.

<details><summary>Hint 1</summary>

The exponent counts copies of the base in a product.

</details>
<details><summary>Hint 2</summary>

There are three factors of four.

</details>
<details><summary>Solution</summary>

$4^3=4\\times4\\times4=64$, while $4\\times3=12$.
Repeated multiplication and multiplication by the exponent are different
operations.

</details>

### Exercise 9.2
<a id="powers-roots-ex-2"></a>

Write one million as a power of ten.

<details><summary>Hint 1</summary>

Begin with $10^3=1000$ and continue multiplying by ten.

</details>
<details><summary>Hint 2</summary>

A million has six zeros after its leading one in decimal whole-number notation.

</details>
<details><summary>Solution</summary>

$1\\,000\\,000=10^6$. Six factors of ten produce the million-sized
place-value unit.

</details>

### Exercise 9.3
<a id="powers-roots-ex-3"></a>

Simplify $3^2\\times3^4$ as one power, explaining the exponent.

<details><summary>Hint 1</summary>

Both factors use the same base.

</details>
<details><summary>Hint 2</summary>

Count all repeated factors after joining the two products.

</details>
<details><summary>Solution</summary>

There are two plus four copies of three, so the result is $3^6$.
The exponents add because the factor lists concatenate; the bases stay
three.

</details>

### Exercise 9.4
<a id="powers-roots-ex-4"></a>

Simplify $(2^3)^2$ and compare it with $2^{3+2}$.

<details><summary>Hint 1</summary>

A squared product contains two copies of the whole inner product.

</details>
<details><summary>Hint 2</summary>

There are two groups of three factors of two.

</details>
<details><summary>Solution</summary>

$(2^3)^2=2^6=64$. In contrast $2^{3+2}=2^5=32$.
For a power raised to a power, the factor count multiplies rather than adds.

</details>

### Exercise 9.5
<a id="powers-roots-ex-5"></a>

Evaluate $5^0$ and $5^{-2}$.

<details><summary>Hint 1</summary>

Five is nonzero, so the zero and negative exponent conventions apply.

</details>
<details><summary>Hint 2</summary>

A negative exponent takes the reciprocal of the corresponding positive power.

</details>
<details><summary>Solution</summary>

$5^0=1$ and $5^{-2}=1/5^2=1/25$. The negative exponent does
not make the value negative.

</details>

### Exercise 9.6
<a id="powers-roots-ex-6"></a>

Compare $(-3)^2$ and $-3^2$.

<details><summary>Hint 1</summary>

Brackets determine whether the sign is part of the base.

</details>
<details><summary>Hint 2</summary>

Without brackets the power is formed before the leading minus is applied.

</details>
<details><summary>Solution</summary>

$(-3)^2=(-3)\\times(-3)=9$, while $-3^2=-(3\\times3)=-9$.
The expressions have different structures, so their different values are
consistent.

</details>

### Exercise 9.7
<a id="powers-roots-ex-7"></a>

Find $\\sqrt{64}$ and all signed integer solutions of $x^2=64$.

<details><summary>Hint 1</summary>

The square-root symbol selects a nonnegative value.

</details>
<details><summary>Hint 2</summary>

A negative number and its positive opposite have the same square.

</details>
<details><summary>Solution</summary>

$\\sqrt{64}=8$. The equation has solutions $x=8$ and $x=-8$,
since both square to sixty-four. The root symbol itself does not name two
values.

</details>

### Exercise 9.8
<a id="powers-roots-ex-8"></a>

Locate $\\sqrt{30}$ between consecutive whole numbers.

<details><summary>Hint 1</summary>

Look for perfect squares immediately below and above thirty.

</details>
<details><summary>Hint 2</summary>

Twenty-five and thirty-six are squares.

</details>
<details><summary>Solution</summary>

Since $5^2=25<30<36=6^2$, the nonnegative root satisfies
$5<\\sqrt{30}<6$. This is a bound, not an exact decimal value.

</details>

### Exercise 9.9
<a id="powers-roots-ex-9"></a>

A cube has volume $125$ cubic centimetres. Find its side length.

<details><summary>Hint 1</summary>

The volume multiplies the side by itself three times.

</details>
<details><summary>Hint 2</summary>

Find a positive number whose cube is one hundred and twenty-five.

</details>
<details><summary>Solution</summary>

The side is five centimetres because $5^3=125$.
The unit changes from cubic centimetres for volume to centimetres for
length; dividing one hundred and twenty-five by three would not invert
cubing.

</details>

### Exercise 9.10
<a id="powers-roots-ex-10"></a>

Use a numerical example to refute $\\sqrt{a+b}=\\sqrt a+\\sqrt b$
for all nonnegative $a,b$.

<details><summary>Hint 1</summary>

Choose numbers with familiar individual roots and a familiar sum root.

</details>
<details><summary>Hint 2</summary>

Nine and sixteen sum to twenty-five.

</details>
<details><summary>Solution</summary>

With $a=9,b=16$, the left side is $\\sqrt{25}=5$ and the
right side is $3+4=7$. One permitted counterexample disproves the
claimed rule for all inputs.

</details>

## Summary and next connection

A power records a number of repeated factors, and factor counting explains
its product rules. Zero and negative exponents need a nonzero base.
A square root selects the nonnegative inverse of squaring; an equation
can have an additional negative solution. Bounds distinguish approximations
from exact roots. Units next help interpret lengths, areas, volumes and rates.
`;export{e as default};