var e=`---
parent_id: book-number-and-arithmetic
chapter_id: fractions
title: "Fractions"
level: foundation
license: CC BY-SA 4.0
---

# Fractions

Three friends share two identical loaves equally. Counting whole loaves does
not describe each share, but cutting each loaf into three equal pieces does:
each friend receives two thirds of one loaf. Fractions extend whole-number
arithmetic so that equal parts and non-whole shares can be named precisely.
They also compare quantities and describe points on the number line.

Read [Multiplication and Division](multiplication-division.md) first. You
should understand equal groups, division with a positive divisor, and the
meaning of a remainder. Here the whole is one specified unit, denominators
are positive whole numbers, and numerators are nonnegative whole numbers.
Negative fractions are introduced later. Keep the unit fixed when comparing
or adding: one half of a large cake need not equal one half of a small cake.

## Equal parts of one specified whole

**Definition 4.1 (Fraction).** For a positive whole number $b$, the fraction
$1/b$ is one of $b$ equal parts of one unit. The fraction $a/b$ is $a$
copies of that part. The upper number $a$ is the numerator and the lower
number $b$ the denominator.

The denominator describes the size of each part, while the numerator counts
how many such parts are taken. Three quarters means three pieces of size one
quarter. Dividing a cake into four unequal pieces does not make each piece
one quarter. Equality is a condition on amount, not merely on how many cut
pieces are visible.

Fractions can exceed one. Seven quarters comprise one whole of four quarters
and three further quarters. Thus $7/4=1+3/4$, often written as the mixed
number $1\\frac34$. A mixed number means addition of its whole and fractional
parts, not multiplication. Fractions with numerator at least the denominator
are often called improper fractions; their values are perfectly valid numbers.
A fraction with a nonnegative numerator smaller than its positive denominator
is called a proper fraction.

**Worked example 4.2 (Two loaves among three people).** Divide each loaf into
three equal parts. The two loaves provide six thirds, and each friend receives
two thirds. The share is $2/3$ of one loaf. Three friends each receiving two
thirds use $3\\times(2/3)=6/3=2$ loaves, checking that the whole supply
is accounted for. There are no leftover pieces, even though the share is not
a whole number of loaves. Dividing the numerator by the denominator describes
the same sharing operation: $2\\div3=2/3$.

A number line gives a representation independent of pictures of food. Divide
the unit interval from zero to one into $b$ equal gaps. Each gap has length
$1/b$; taking $a$ such steps locates $a/b$. For $a>b$, continue beyond
one using the same gap length. The unit interval must stay the same length
across the fractions being compared.

## Different descriptions of one value

**Proposition 4.3 (Equivalent fractions).** Multiplying the numerator and
denominator by the same positive whole number preserves a fraction's value:

$$\\frac ab=\\frac{a\\times k}{b\\times k}\\qquad(k>0).$$

*Reason.* Split every original part into $k$ equal smaller parts. The whole
now has $b\\times k$ parts and the selected amount has $a\\times k$ of them.
The selected quantity has not changed, only the size of the counting pieces.
This also works when the selected amount spans several wholes. ∎

Conversely, if a positive whole number divides both numerator and denominator,
dividing both by it simplifies the description. For example,
$6/8=3/4$ because pairs of eighths form quarters. A fraction is in simplest
terms when its numerator and denominator have no common whole-number factor
larger than one. Simplest terms are convenient but do not give the fraction
a different or more correct numerical value.

**Worked example 4.4 (Comparison with a common part).** Compare $2/3$ and
$3/5$. Split thirds into fifths of a third, and fifths into thirds of a fifth,
so both amounts can be counted in fifteenths:

$$\\frac23=\\frac{10}{15},\\qquad\\frac35=\\frac9{15}.$$

Ten pieces of the same positive size exceed nine, hence $2/3>3/5$.
A larger denominator alone does not make a larger fraction. With the same
numerator one, increasing the denominator makes each part smaller:
$1/5<1/3$. With the same denominator, increasing the numerator makes the
amount larger. When both change, use a common comparison rather than comparing
digits independently.

For nonnegative fractions $a/b,c/d$ with positive denominators, the common
denominator $bd$ gives numerators $ad$ and $bc$. Thus compare $ad$ with
$bc$. This explains cross multiplication as a common-part comparison.
Positivity of the denominators is part of this elementary argument; later
signed fractions require attention to order when multiplying by a negative.

## Addition and subtraction need like-sized parts

When the denominators already agree, add or subtract the numbers of parts:

$$\\frac ab+\\frac cb=\\frac{a+c}{b}.$$

For subtraction in this nonnegative chapter, require $a\\ge c$, giving
$a/b-c/b=(a-c)/b$. The part size remains $1/b$.
Two fifths plus one fifth is three fifths, not three tenths: combining amounts
does not automatically subdivide every piece again.

**Worked example 4.5 (Adding different-sized parts).** Find $1/2+1/3$.
Replace both by sixths: $1/2=3/6$ and $1/3=2/6$. The sum is
$3/6+2/6=5/6$. The proposed shortcut $(1+1)/(2+3)=2/5$ fails even a
scale check: $2/5$ is less than $1/2$, whereas adding a positive third
must give more than a half. The common denominator makes the units of the
parts agree before they are counted together.

For $3/4-1/6$, twelfths work: $9/12-2/12=7/12$.
The denominator need not be the product if a smaller common multiple is
available. To add quarters and eighths, eighths already work, so there is
no need to use thirty-seconds. A valid larger common denominator still gives
the same value after simplification; the smaller one simply makes arithmetic
shorter.

## Multiplication takes a part of an amount

Multiplying a positive amount by $1/2$ takes half that amount, so multiplication
does not always enlarge a quantity. Multiplying by three halves means taking
three copies of a half of it. Whole-number equal groups have extended to
scaling by an amount that can itself be fractional.

**Worked example 4.6 (A fraction of a fraction).** A strip is divided into
four equal sections, and three sections are selected, giving $3/4$ of the
strip. Divide every section into three equal smaller pieces. The complete
strip now contains twelve equal pieces and the selected region contains nine.
Taking two thirds of the selected region takes six of those twelve pieces,
so

$$\\frac23\\times\\frac34=\\frac6{12}=\\frac12.$$

The general fraction product is $a/b\\times c/d=ac/(bd)$:
divide the whole into $bd$ equal cells, with $d$ groups across and $b$
subdivisions within each original part. Counting the selected cells supplies
$ac$ pieces. If a fraction exceeds one, work across enough copies of the
whole; the equal-part reasoning is unchanged.

## Division asks for the missing factor

To divide a nonnegative amount by a positive fraction, ask how many copies of
that fraction make the amount. One whole contains three thirds; two wholes
contain six thirds. Thus $2\\div(1/3)=6$. A smaller group size can give a
larger group count, so division does not always make a number smaller.

For a fraction $c/d$ with $c,d>0$, its reciprocal is $d/c$, and their
product is one. Consequently

$$\\frac ab\\div\\frac cd=\\frac ab\\times\\frac dc.$$

The result passes the missing-factor check: multiplying it by $c/d$ cancels
that factor's reciprocal and returns $a/b$. For example,
$(3/4)\\div(1/2)=3/2$: three halves of a half-unit comprise three quarters
of the original unit. Whether that quotient means one complete portion plus
some left over, or one and a half freely divisible portions, depends on the
question. A divisor of zero remains excluded: zero has no reciprocal.

## Simplifying products while preserving the operation

A product can often be simplified before large numerators and denominators
are formed. For example,

$$\\frac{14}{15}\\times\\frac{25}{21}
=\\frac{2\\times7\\times5\\times5}{3\\times5\\times3\\times7}
=\\frac{10}{9}.$$

The factor seven appears once above and once below the full fraction, as
does one factor five. Removing a shared positive factor means dividing both
the whole numerator and the whole denominator by it. The value is preserved
by the equivalent-fraction rule. This is often called cancelling factors;
it is not permission to cross out matching digits wherever they appear.

For instance, $12/18$ simplifies by a common factor of six, not by erasing
the digit one. Erasing those digits would produce $2/8=1/4$, which differs
from the correct $2/3$. Likewise, the expression $(2+3)/3$ equals $5/3$;
it does not become $2+1=3$ by cancelling the threes across an addition.
The entire numerator must share the divisor before a common-factor exchange
can apply. A useful check is to compare sizes: $5/3$ is below two, while
three is above it.

A second useful check is to name the unit whole whenever a story changes it.
Suppose a basket initially contains twelve apples and one quarter is eaten.
Nine apples remain. One third of the remaining basket is three apples,
which is one quarter of the original twelve. The phrase “one third” now
uses nine as its reference whole. Treating every fraction in a multi-stage
story as a fraction of the original supply would give a different operation.
Writing the successive amounts and their reference wholes prevents that
confusion. In this example, the combined retained amount taken at the second
stage is $(1/3)\\times(3/4)=1/4$ of the original basket.

Before starting the practice, choose a quick estimate for each answer. Adding
two positive fractions should give more than either addend. Subtracting a
smaller positive amount should give less than the starting amount. Taking a
fraction below one of a positive quantity should shrink it, while dividing
by a positive fraction below one counts smaller units and gives a larger
numerical quotient. These checks depend on the stated signs and inequalities;
they are not rules for every multiplication or division. They help detect
a misplaced reciprocal, a changed reference whole or an incorrectly combined
denominator before the detailed arithmetic is revisited.

## Worked example: the reference whole must stay visible

Two identical strips each represent one whole metre. Half of the first
strip is fifty centimetres. Half of the second strip is also fifty
centimetres, so these halves can be compared or added as equal-length pieces.
If a third strip is two metres long, half of that strip is
one metre. The word half is the same, but the reference whole
has changed and the actual length has doubled.

This explains a common mistake in sharing problems. Receiving half of a
small cake and half of a large cake does not guarantee equal portions
unless the cakes have equal size. A fraction describes a relationship
to its declared whole. To compare the actual amounts, first put them
in common units, such as centimetres for strips or a specified mass
for ingredients. When a diagram changes its whole between pictures, label
that change explicitly. Equal fraction names alone do not establish equal
physical amounts, while equal fractions of the same whole do.

## Exercises

### Exercise 4.1
<a id="fractions-ex-1"></a>

A bar is cut into five equal pieces and three are taken. Name the fraction
and explain what each number means.

<details><summary>Hint 1</summary>

Identify the total number of equal parts in one bar.

</details>
<details><summary>Hint 2</summary>

The numerator counts selected parts.

</details>
<details><summary>Solution</summary>

The fraction is $3/5$. The denominator five says that each piece is one
fifth of the bar; the numerator three says that three such pieces are taken.
Equal-sized pieces are essential to this description.

</details>

### Exercise 4.2
<a id="fractions-ex-2"></a>

Express $9/4$ as a whole number plus a proper fraction.

<details><summary>Hint 1</summary>

Four quarters make one whole.

</details>
<details><summary>Hint 2</summary>

Separate eight quarters from the ninth.

</details>
<details><summary>Solution</summary>

$9/4=8/4+1/4=2+1/4=2\\frac14$. This is the same value in a
mixed-number description; the space between two and one quarter means their
sum, not their product.

</details>

### Exercise 4.3
<a id="fractions-ex-3"></a>

Simplify $12/18$ and justify the exchange of parts.

<details><summary>Hint 1</summary>

Find a positive whole-number factor shared by twelve and eighteen.

</details>
<details><summary>Hint 2</summary>

Group eighteenth-pieces into groups of six.

</details>
<details><summary>Solution</summary>

Dividing numerator and denominator by six gives $12/18=2/3$.
Six eighteenth-pieces form one third; twelve eighteenth-pieces therefore form
two thirds. The selected amount is unchanged.

</details>

### Exercise 4.4
<a id="fractions-ex-4"></a>

Which is larger, $3/4$ or $5/8$?

<details><summary>Hint 1</summary>

Count both quantities in eighths of the same whole.

</details>
<details><summary>Hint 2</summary>

Each quarter contains two eighths.

</details>
<details><summary>Solution</summary>

$3/4=6/8$, and six eighths exceed five eighths. Hence $3/4>5/8$.
The comparison assumes the same unit whole; different cake sizes would need
additional information.

</details>

### Exercise 4.5
<a id="fractions-ex-5"></a>

Compute $2/5+1/4$ using a common denominator.

<details><summary>Hint 1</summary>

Twentieths can describe both fractions.

</details>
<details><summary>Hint 2</summary>

Two fifths are eight twentieths, and one quarter is five twentieths.

</details>
<details><summary>Solution</summary>

$2/5+1/4=8/20+5/20=13/20$. The numerator thirteen counts parts
of size one twentieth. Adding denominators would combine unlike part sizes
without first converting them.

</details>

### Exercise 4.6
<a id="fractions-ex-6"></a>

Compute $5/6-1/4$ and check by addition.

<details><summary>Hint 1</summary>

Use twelfths for both fractions.

</details>
<details><summary>Hint 2</summary>

Subtract three twelfths from ten twelfths.

</details>
<details><summary>Solution</summary>

$5/6-1/4=10/12-3/12=7/12$. The check is
$7/12+1/4=7/12+3/12=10/12=5/6$, returning the starting amount.

</details>

### Exercise 4.7
<a id="fractions-ex-7"></a>

Find three fifths of twenty counters.

<details><summary>Hint 1</summary>

First split twenty into five equal groups.

</details>
<details><summary>Hint 2</summary>

Take three of the groups of four.

</details>
<details><summary>Solution</summary>

One fifth of twenty is $20\\div5=4$. Three fifths give
$3\\times4=12$ counters. Equivalently $(3/5)\\times20=60/5=12$.
The answer is smaller than twenty because the scale factor lies below one.

</details>

### Exercise 4.8
<a id="fractions-ex-8"></a>

Compute $(2/3)\\times(5/8)$ and simplify.

<details><summary>Hint 1</summary>

Multiply the numerators and the denominators separately.

</details>
<details><summary>Hint 2</summary>

The resulting ten twenty-fourths can be grouped in pairs.

</details>
<details><summary>Solution</summary>

The product is $10/24=5/12$, dividing numerator and denominator by two.
It is less than $5/8$, as expected when taking two thirds of that positive
amount.

</details>

### Exercise 4.9
<a id="fractions-ex-9"></a>

How many quarter-litre portions can be poured from three litres, with no
loss and complete portions only?

<details><summary>Hint 1</summary>

One litre supplies four quarter-litre portions.

</details>
<details><summary>Hint 2</summary>

Divide the amount available by the amount in one portion.

</details>
<details><summary>Solution</summary>

$3\\div(1/4)=3\\times4=12$ complete portions. The check is
$12\\times(1/4)=3$ litres. Dividing by a fraction here increases the
numerical result because it counts smaller units.

</details>

### Exercise 4.10
<a id="fractions-ex-10"></a>

Calculate $(3/5)\\div(2/3)$ and check by multiplication.

<details><summary>Hint 1</summary>

Use the reciprocal of the positive divisor.

</details>
<details><summary>Hint 2</summary>

The reciprocal of two thirds is three halves.

</details>
<details><summary>Solution</summary>

$(3/5)\\div(2/3)=(3/5)\\times(3/2)=9/10$.
Multiplying back gives $(9/10)\\times(2/3)=18/30=3/5$,
so the quotient has the required missing-factor property.

</details>

## Summary and next connection

A fraction counts equal parts of a fixed unit. Equivalent fractions change
the piece size and count without changing the amount. Addition and subtraction
require common-sized pieces; multiplication scales an amount, and division
finds a missing factor using a nonzero reciprocal. Decimal notation gives
another description of fractions whose denominators are powers of ten.
`;export{e as default};