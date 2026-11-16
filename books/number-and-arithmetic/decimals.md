
# Decimals

A ruler can measure less than one metre and a bill can charge less than one
pound. Decimal notation extends place value to the right of the ones place:
tenths, hundredths, thousandths and smaller equal units. Its advantage is
that every neighbouring place still differs by a factor of ten. Decimal
arithmetic therefore uses the same exchanges as whole-number arithmetic,
provided equal-valued places are aligned and the units are tracked.

Read [Fractions](fractions.md) before starting. You should know that equivalent
fractions describe the same value, addition requires equal part sizes, and
multiplication can scale a quantity. This chapter uses nonnegative terminating
decimals, which have only finitely many written digits after the decimal point.
It introduces repeating decimals only to explain why not every fraction has
a terminating description. No claim about measured data being exact is implied
by writing several decimal places.

## Place value continues past one

**Definition 5.1 (Decimal places).** The decimal point separates the ones
place from the tenths place. The first place to its right counts tenths,
the next hundredths, then thousandths. Each place has one tenth the value
of the place immediately to its left.

For example,

$$3.47=3+\frac4{10}+\frac7{100}=\frac{347}{100}.$$

The four represents four tenths, or forty hundredths, and the seven represents
seven hundredths. The number is read “three point four seven” or “three and
forty-seven hundredths”. Saying the digits after the point individually helps
avoid confusing $3.47$ with $3.047$. A zero before the point in $0.6$ makes
the absence of whole units clear; it is a useful writing convention.

**Worked example 5.2 (A length in different units).** A strip has length
$2.35$ metres. This means two metres, three tenths of a metre and five
hundredths of a metre. Since one metre contains one hundred centimetres,
its length is $200+30+5=235$ centimetres. This is a change of unit, not a
change in physical length. The numerical value becomes larger because a
centimetre is a smaller unit. Do not compare “235” and “2.35” as lengths
without retaining their units.

Zeros at the right of a terminating decimal do not change its value:
$0.6=0.60=0.600$. Six tenths are sixty hundredths or six hundred
thousandths. But a zero inserted between nonzero digits changes place:
$0.06$ is six hundredths, one tenth of six tenths. The role of a zero
is determined by its position, not by a general instruction to ignore zeros.

## Comparing decimals

To compare two nonnegative decimals, align their points and append trailing
zeros if useful. Compare the whole-number parts first, then tenths,
hundredths and later places. At the first different place, the larger digit
gives the larger number. This works because all later places together cannot
compensate for a full unit at the first differing place.

**Worked example 5.3 (More digits need not mean more value).** Compare
$0.8,0.75,0.805$. Write them as $0.800,0.750,0.805$.
The middle number has seven tenths while the others have eight, so it is
smallest. Between $0.800$ and $0.805$, the first difference occurs at
thousandths: zero versus five. Thus

$$0.75<0.8<0.805.$$

Comparing the digit strings as the whole numbers $8,75,805$ would use the
wrong place values. A decimal point is not a label separating two independent
whole-number counts.

The number line supports the same comparison. Between zero and one, divide
the interval into ten equal gaps to mark tenths. Subdivide one gap into ten
for hundredths, and again for thousandths. The point $0.805$ lies just to
the right of $0.800$, not near eight hundred and five. A drawing may be
too small to distinguish nearby values; the exact place-value comparison
still applies.

## Addition and subtraction use equal places

Align decimal points so that ones join ones, tenths join tenths, and so on.
Append trailing zeros to supply missing places. Then perform the same
exchanges as for whole numbers: ten hundredths become one tenth, and ten
tenths become one whole. Keep the decimal point between the ones and tenths
of the result.

**Worked example 5.4 (A decimal sum).** Compute $2.75+0.68$.
Five hundredths plus eight hundredths give thirteen hundredths, or one tenth
and three hundredths. Seven tenths plus six tenths plus the exchanged tenth
give fourteen tenths, or one whole and four tenths. The whole units then
sum to three. Hence $2.75+0.68=3.43$. Equivalently, count hundredths:
$275+68=343$ hundredths, or $3.43$.

For subtraction, $4.2-1.85$ is $4.20-1.85$.
Exchange one tenth into ten hundredths, and if necessary one whole into ten
tenths, just as in whole-number subtraction. An alternative is to subtract
hundredths: $420-185=235$, giving $2.35$.
The common-denominator explanation shows why decimal-point alignment matters:
adding or subtracting a tenth directly from a hundredth would combine unlike
pieces without converting them.

Money supplies convenient examples because a pound contains one hundred pence,
but the mathematical rules are not rules only for money. $£1.50$ and
$£1.5$ represent the same amount, while receipts usually show two decimal
places by convention. Measurements may follow different recording conventions.
A number's value and the chosen display precision are separate matters.

## Multiplication tracks the size of the pieces

To multiply terminating decimals, first express them as whole numbers of
tenths, hundredths or another decimal unit. Multiply those whole-number
counts and then identify the unit of their product. This explains the familiar
rule of counting the total number of decimal places across the two factors;
it also keeps that rule connected to a numerical meaning.

**Worked example 5.5 (A price calculation).** Each item costs $£1.25$ and
four are bought. The total is $4\times125=500$ pence, or $£5.00$.
For a numerical example with two decimal factors,

$$1.2\times0.3=\frac{12}{10}\times\frac3{10}
=\frac{36}{100}=0.36.$$

The digits twelve and three produce thirty-six, but the denominator one
hundred determines the point's location. The answer should be less than
$1.2$, because the scale factor $0.3$ is below one. This prediction rejects
$3.6$ before any written rule is checked.

Multiplication by ten moves each digit's value one place higher:
$3.47\times10=34.7$. Dividing by ten moves each value one place lower:
$3.47\div10=0.347$. One can describe this as shifting digits relative
to the point; the number is changing in value by a factor of ten, rather
than the point physically pushing digits around without explanation.

## Division can change both units together

Division asks for a missing factor. To calculate $4.8\div0.6$, convert
both amounts into tenths: forty-eight tenths contain eight groups of six
tenths. The quotient is eight. In symbols,

$$4.8\div0.6=48\div6=8.$$

Multiplying both the available amount and the group size by the same positive
factor preserves the number of groups. The general quotient identity is
$(a\times k)\div(b\times k)=a\div b$ for $b,k>0$.
Scaling only the divisor would instead change the question.

For $0.84\div0.07$, scale both by one hundred and obtain
$84\div7=12$. The check $12\times0.07=0.84$ recovers the original
amount. A long-division method is one way to obtain a decimal quotient, but
the missing-factor relation remains the definition and the most dependable
interpretation of the result.

## Exact decimals, approximations and repeating expansions

A terminating decimal names an exact fraction: $0.125=125/1000=1/8$.
A measured length written $0.125$ metres may nevertheless be approximate,
because the instrument and recording process can have error. Digits alone
do not tell you whether a value was defined exactly or measured imperfectly.
Use $=$ for an exact equality and $\approx$ for a stated approximation.

The fraction $1/3$ does not equal $0.33$, because three copies of $0.33$
make $0.99$, not one. Long division continues to produce threes, yielding
the repeating expansion written $0.333\ldots$ or $0.\overline3$.
The finite approximation $0.33$ is below one third by $1/300$.
An ellipsis indicating an infinite repeating pattern is different from
arbitrarily stopping after a few digits. This chapter does not require
computations with general infinite expansions; it requires keeping exact
fractions distinct from finite rounded representations.

## Rounding states how much detail is retained

Rounding to the nearest tenth selects the nearest number written in whole
tenths. For a nonnegative exact value, compare its position with the halfway
point between the neighbouring tenths. In this book, an exact halfway case
rounds upward. That convention must be stated because other applications
can use different tie rules.

For $2.37$, the neighbouring tenths are $2.3$ and $2.4$ and their
halfway point is $2.35$. Since $2.37$ is above that midpoint, it rounds
to $2.4$. The rounding error is $2.4-2.37=0.03$. For $2.34$,
the nearer tenth is $2.3$, with error $0.04$. Every number rounded to
the nearest tenth differs from its rounded value by at most $0.05$:
that is half the gap between adjacent tenths. This is an absolute error
bound in the original units, not a percentage guarantee.

Rounding each intermediate amount can change a final total. Two exact lengths
of $1.24$ metres add to $2.48$ metres, which rounds to $2.5$ metres
to the nearest tenth. Rounding each first gives $1.2+1.2=2.4$ metres,
a different result. Retain exact fractions or sufficient digits through a
calculation and round at the requested stage, stating what has been rounded.
A calculator display does not automatically tell you whether intermediate
rounding has already occurred.

The same care applies to an answer copied from a ruler: extra written zeros
can make equal numerical values look different, but cannot improve the
instrument's accuracy. To explain a measurement's uncertainty, state how it
was obtained and the error model being used rather than inferring a promise
from the number of displayed decimal places alone.

For practice, explain a decimal calculation twice: once using its place
names and once using a fraction with denominator ten, one hundred or one
thousand. The two explanations should name the same amount. If an answer
changes when a harmless trailing zero is appended, the method has probably
used the length of the written numeral in place of its value. If a decimal
sum is smaller than both positive addends, or a product by a factor below
one is larger than the starting positive amount, return to the units and
the size prediction before repeating a remembered written rule.

## Exercises

### Exercise 5.1
<a id="decimals-ex-1"></a>

Write $4.206$ in expanded place-value form.

<details><summary>Hint 1</summary>

Identify the tenths, hundredths and thousandths separately.

</details>
<details><summary>Hint 2</summary>

The zero records no hundredths in the standard decimal description.

</details>
<details><summary>Solution</summary>

$4.206=4+2/10+0/100+6/1000$. The two represents two tenths
and the six six thousandths. Omitting the middle zero from the numeral
would move the six into the hundredths place.

</details>

### Exercise 5.2
<a id="decimals-ex-2"></a>

Explain why $0.40=0.4$ but $0.04\ne0.4$.

<details><summary>Hint 1</summary>

Convert each decimal into hundredths.

</details>
<details><summary>Hint 2</summary>

Four tenths contain forty hundredths.

</details>
<details><summary>Solution</summary>

$0.40=40/100=4/10=0.4$, whereas $0.04=4/100$.
Forty hundredths and four hundredths are different amounts. A trailing zero
can preserve value; moving a nonzero digit changes its place value.

</details>

### Exercise 5.3
<a id="decimals-ex-3"></a>

Put $1.09,1.9,1.095$ in increasing order.

<details><summary>Hint 1</summary>

Write all three with three places after the point.

</details>
<details><summary>Hint 2</summary>

Compare $1.090,1.900,1.095$ from left to right.

</details>
<details><summary>Solution</summary>

The order is $1.09<1.095<1.9$. The last number has nine tenths,
while the others have zero tenths. Between the smaller two, five thousandths
exceed zero thousandths after their equal hundredths.

</details>

### Exercise 5.4
<a id="decimals-ex-4"></a>

Compute $3.68+0.57$ and explain the exchanges.

<details><summary>Hint 1</summary>

Add hundredths first.

</details>
<details><summary>Hint 2</summary>

Fifteen hundredths supply an extra tenth.

</details>
<details><summary>Solution</summary>

Eight plus seven hundredths give fifteen hundredths, leaving five hundredths
and one tenth. Six plus five plus one tenths give twelve tenths, leaving
two tenths and one whole. The total is $4.25$.

</details>

### Exercise 5.5
<a id="decimals-ex-5"></a>

Compute $5-2.37$ and check by addition.

<details><summary>Hint 1</summary>

Write five as $5.00$ or as five hundred hundredths.

</details>
<details><summary>Hint 2</summary>

Subtract $237$ hundredths from $500$ hundredths.

</details>
<details><summary>Solution</summary>

$500-237=263$ hundredths, so the difference is $2.63$.
Adding back gives $2.37+2.63=5.00$, confirming the subtraction in
the original units.

</details>

### Exercise 5.6
<a id="decimals-ex-6"></a>

Compute $0.6\times0.4$ using fractions.

<details><summary>Hint 1</summary>

Both factors count tenths.

</details>
<details><summary>Hint 2</summary>

Multiplying the two denominators gives one hundred.

</details>
<details><summary>Solution</summary>

$(6/10)\times(4/10)=24/100=0.24$.
The result is smaller than $0.6$ because multiplication by $0.4$
takes four tenths of the starting amount.

</details>

### Exercise 5.7
<a id="decimals-ex-7"></a>

Find $7.2\div0.8$ and check in the original decimals.

<details><summary>Hint 1</summary>

Scale both numbers into whole counts of tenths.

</details>
<details><summary>Hint 2</summary>

Calculate $72\div8$.

</details>
<details><summary>Solution</summary>

The quotient is nine, since $72\div8=9$.
The original check is $9\times0.8=7.2$. Scaling both the dividend
and divisor preserved the number of groups.

</details>

### Exercise 5.8
<a id="decimals-ex-8"></a>

Express $0.375$ as a fraction in simplest terms.

<details><summary>Hint 1</summary>

Three written decimal places give thousandths.

</details>
<details><summary>Hint 2</summary>

Both $375$ and $1000$ are divisible by $125$.

</details>
<details><summary>Solution</summary>

$0.375=375/1000=3/8$. Dividing numerator and denominator by $125$
changes the part description but not the value. Both equalities are exact.

</details>

### Exercise 5.9
<a id="decimals-ex-9"></a>

Is $1/3=0.333$ exact? Explain without relying on a calculator display.

<details><summary>Hint 1</summary>

Multiply the proposed decimal by three.

</details>
<details><summary>Hint 2</summary>

Three thirds must give exactly one.

</details>
<details><summary>Solution</summary>

No: $3\times0.333=0.999$, which is less than one. Thus $0.333$
is a finite approximation below $1/3$. The infinite repeating expansion
$0.333\ldots$ is different from that finite numeral.

</details>

### Exercise 5.10
<a id="decimals-ex-10"></a>

A ribbon has length $1.08$ metres. Express that same length in centimetres.

<details><summary>Hint 1</summary>

One metre equals one hundred centimetres.

</details>
<details><summary>Hint 2</summary>

Eight hundredths of a metre are eight centimetres.

</details>
<details><summary>Solution</summary>

$1.08$ metres equals $100+8=108$ centimetres. The unit becomes one
hundred times smaller, so the numerical count of units becomes one hundred
times larger; the ribbon itself has not changed.

</details>

## Summary and next connection

Decimal places continue the factor-of-ten pattern beyond the ones place.
Align equal places when adding or subtracting, and track fractional units
when multiplying or dividing. Trailing zeros can preserve value; a longer
decimal need not be larger. Keep exact fractions distinct from finite
approximations and numerical values distinct from their units. Ratio and
proportion next compare quantities through equal scale factors.
