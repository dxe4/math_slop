var e=`---
parent_id: book-number-and-arithmetic
chapter_id: units-measurement
title: "Units and Measurement"
level: foundation
license: CC BY-SA 4.0
---

# Units and Measurement

“Three” might count people, measure metres, or record hours. A measurement
has a numerical value and a unit; together they name the quantity. Changing
the unit changes the numerical value without changing the object measured.
This chapter makes that distinction explicit and develops conversions,
elapsed time, rates and simple statements of measurement uncertainty.

Read [Decimals](decimals.md), [Ratio and Proportion](ratio-proportion.md)
and [Powers and Roots](powers-roots.md). You should be able to multiply
by powers of ten, interpret a quotient's units and distinguish lengths
from areas. The examples use specified metric conversion relationships
and ordinary clock arithmetic. They do not assume that every measured
number is exact or that a ruler's divisions automatically determine its
full accuracy.

## Choose the quantity before the instrument

**Definition 10.1 (Measurement).** A measurement compares a quantity with
a specified unit of the same kind. Its numerical value tells how many
copies or fractions of that unit describe the quantity.

A metre measures length, a square metre area, a litre volume, a kilogram
mass, and a second time. These are different kinds of quantity. One cannot
add three metres to four kilograms and call the result seven of one
common unit. A unit label is part of the meaning of a number, not an
optional decoration to restore after the arithmetic.

Counting and measuring also differ. A box may contain exactly twelve
whole counters. A measured ribbon length may be near twelve centimetres,
with uncertainty from locating its ends and reading the instrument.
A calculation can be exact within a stated model even though the
measurements supplied to that calculation are approximate.

**Worked example 10.2 (Start at the zero mark).** A ribbon's left end
lies at the $2$ centimetre mark of a ruler and its right end at the
$9.4$ centimetre mark. Its length is $9.4-2=7.4$ centimetres,
not $9.4$ centimetres. The marks record positions relative to the ruler's
zero; the length is the interval between the two end positions. If the
ruler's edge is damaged, aligning an end with another known mark and
subtracting still implements the same comparison.

Choose an instrument suited to the scale. A metre stick may measure a
table but not resolve a tiny scratch. A kitchen scale may measure a bag
of flour but not an individual grain reliably. Repeating a reading can
reveal variation, but repetition alone does not rule out a consistently
misaligned zero or another systematic error.

## Convert by describing equal quantities

The conversions used here are exact unit definitions:

- $1$ metre equals $100$ centimetres and $1000$ millimetres;
- $1$ kilometre equals $1000$ metres;
- $1$ kilogram equals $1000$ grams;
- $1$ litre equals $1000$ millilitres;
- $1$ minute equals $60$ seconds, and $1$ hour equals $60$ minutes.

The time relationships show why not every unit conversion is a power of
ten. A decimal part of an hour is not the same number of minutes after
the point. Half an hour is thirty minutes, so $1.5$ hours is one hour
thirty minutes, not one hour five minutes.

**Worked example 10.3 (One quantity, two descriptions).** Convert
$2.35$ kilograms to grams. Each kilogram contains one thousand grams,
so the mass is $2.35\\times1000=2350$ grams. Reversing the conversion,
$2350\\div1000=2.35$ kilograms. The numerical count increases when
smaller units are used. The mass is unchanged. An answer of $0.00235$
grams would become smaller in both numerical value and unit size, which
cannot describe the original mass.

A conversion factor can be read as a ratio equal to one:
$100\\text{ cm}/(1\\text{ m})$. Multiplying a length in metres by
that ratio changes its unit description to centimetres. At this level it
is enough to say what equal-sized collection is being exchanged, but the
ratio method helps track the direction when a calculation contains several
conversions.

Do not convert between different kinds of quantity without an additional
relationship. A litre is a volume and a kilogram a mass. A material's
mass for a given volume depends on its density and conditions; one litre
of an arbitrary substance cannot simply be renamed one kilogram. Unit
names that often appear together do not make their quantities identical.

## Squared and cubed units change differently

A square centimetre is the area of a square one centimetre on each side.
A square metre is one hundred centimetres on each side, so it contains
$100\\times100=10\\,000$ square centimetres. Converting area from
square metres to square centimetres therefore uses a factor of ten
thousand, not one hundred. Both dimensions contribute a length conversion.

**Worked example 10.4 (A rectangle in two units).** A rectangle measures
$2$ metres by $0.5$ metres, so its area is one square metre.
In centimetres its sides are $200$ and $50$, giving area
$200\\times50=10\\,000$ square centimetres. The two area calculations
agree after using the squared conversion. Writing $100$ square centimetres
would convert only one of the two factors and understate the area.

A cubic metre similarly contains $100^3=1\\,000\\,000$ cubic
centimetres. A cubic centimetre is also one millilitre, while one litre
is one thousand cubic centimetres. These relationships compare volume
units with volume units. The side-length, area and volume factors are
respectively one, two and three repetitions of the length conversion.
A unit exponent tells what kind of quantity is being measured.

## Time intervals cross boundaries

Clock times identify positions in a day; elapsed times measure intervals.
To find the interval from $10{:}45$ to $12{:}10$ on the same day,
count fifteen minutes to eleven, sixty to twelve, then ten more, giving
eighty-five minutes or one hour twenty-five minutes. Subtracting the written
minute fields as though they were ordinary decimal places would be unreliable.

For a journey from $23{:}40$ to $00{:}15$ the next day, count twenty
minutes to midnight and fifteen afterwards, giving thirty-five minutes.
The date relation is part of the information. With no date or statement
that the end is the next occurrence, the pair of clock labels alone does
not uniquely determine an elapsed interval.

**Worked example 10.5 (A decimal duration).** Convert $2.25$ hours to
hours and minutes. The whole part is two hours, while $0.25$ hour is
one quarter of sixty minutes, or fifteen minutes. Thus the duration is
two hours fifteen minutes. In minutes it is $2.25\\times60=135$.
Both descriptions refer to the same interval; $2{:}25$ would describe
a different duration if read as two hours twenty-five minutes.

## Rates retain numerator and denominator units

A speed of $6$ kilometres per hour means six kilometres for every hour
at the stated constant rate. In metres per minute this is
$6000\\div60=100$ metres per minute. Both the distance unit and
the time unit change. Converting only kilometres to metres would give
metres per hour, which is an intermediate result rather than the requested
unit.

For a constant rate, distance equals speed times time. A person walking
at $100$ metres per minute for eight minutes covers $800$ metres
under that model. The units explain the result: metres per minute times
minutes leaves metres. If the person stops or changes speed, the
constant-rate assumption no longer describes every instant; the question
must specify an average or a more detailed model.

## Describe an uncertainty assumption explicitly

Suppose a length was rounded to the nearest centimetre using an agreed tie
rule. A displayed reading of $12$ centimetres then corresponds to values
within half a centimetre of twelve. It is safe to state an enclosing range
from $11.5$ to $12.5$ centimetres, allowing endpoints for the bound.
This statement describes rounding alone. Instrument calibration, alignment
and a poorly defined edge could contribute additional uncertainty.

A range is not a claim that the true value is equally likely everywhere
inside it. Nor does a displayed extra zero prove greater accuracy:
$12.0=12$ numerically, while the recording convention may communicate
an intended precision if the measurement method is supplied. Keep the
numerical statement and the evidence about measurement quality separate.

Before calculating from measurements, write their units and any stated
bounds. Estimate the result's scale, carry the units through conversions,
and report only the detail the model supports. A beautifully precise
number with the wrong dimension does not answer the question.

## Worked example: change the unit without changing the strip

A strip is two metres long. Mark centimetres along it and the endpoint is
two hundred centimetres from the start. Mark millimetres instead and it is
two thousand millimetres away. The larger numerical value does not describe
a longer strip: smaller units require more copies to cover the same length.
Before comparing measurements, either put them in the same unit or compare
the complete quantities with their unit labels attached.

Now consider a square whose side is two metres. Its area is four square
metres. In centimetres each side measures two hundred, so the square contains
forty thousand square centimetres. Multiplying the numerical area four by
one hundred would give the wrong conversion. One square metre contains a
hundred rows of a hundred square-centimetre cells, so its area conversion
factor is ten thousand.

The language keeps the two calculations separate. A metre is a length unit;
a square metre is an area unit. Drawing even a small labelled grid explains
why the conversion factor must be applied in two directions for area.
This is also a useful final check on a numerical answer: count the multiplying
lengths and retain their units through the calculation. A result intended to
measure a surface should not finish with a bare length unit.

## Exercises

### Exercise 10.1
<a id="units-measurement-ex-1"></a>

A pencil extends from ruler mark $1.5$ centimetres to $14$ centimetres.
Find its length.

<details><summary>Hint 1</summary>

The marks give endpoint positions, not both lengths from the pencil's start.

</details>
<details><summary>Hint 2</summary>

Subtract the smaller endpoint reading from the larger one.

</details>
<details><summary>Solution</summary>

The length is $14-1.5=12.5$ centimetres. Reading fourteen as the
length would include the unused interval before the pencil's left endpoint.

</details>

### Exercise 10.2
<a id="units-measurement-ex-2"></a>

Convert $3.6$ metres to centimetres and millimetres.

<details><summary>Hint 1</summary>

One metre contains one hundred centimetres.

</details>
<details><summary>Hint 2</summary>

One metre also contains one thousand millimetres.

</details>
<details><summary>Solution</summary>

$3.6$ metres equals $360$ centimetres and $3600$ millimetres.
Using smaller units increases the numerical count while preserving the
physical length.

</details>

### Exercise 10.3
<a id="units-measurement-ex-3"></a>

Express $750$ millilitres in litres.

<details><summary>Hint 1</summary>

One thousand millilitres make one litre.

</details>
<details><summary>Hint 2</summary>

Divide the millilitre count by one thousand.

</details>
<details><summary>Solution</summary>

$750\\div1000=0.75$ litres. This is three quarters of a litre,
consistent with seven hundred and fifty being three quarters of one thousand.

</details>

### Exercise 10.4
<a id="units-measurement-ex-4"></a>

Convert $1.5$ hours into minutes.

<details><summary>Hint 1</summary>

Separate one whole hour from half an hour.

</details>
<details><summary>Hint 2</summary>

Each hour contains sixty minutes.

</details>
<details><summary>Solution</summary>

One hour is sixty minutes and half an hour thirty, so the total is
ninety minutes. Equivalently $1.5\\times60=90$. The decimal point
does not separate hours from a whole-number count of minutes.

</details>

### Exercise 10.5
<a id="units-measurement-ex-5"></a>

Find the elapsed time from $14{:}50$ to $16{:}05$ on the same day.

<details><summary>Hint 1</summary>

Use whole-hour landmarks.

</details>
<details><summary>Hint 2</summary>

Count ten minutes, then sixty, then five.

</details>
<details><summary>Solution</summary>

The interval is $10+60+5=75$ minutes, or one hour fifteen minutes.
The stated same-day condition fixes which occurrence of each clock time
is meant.

</details>

### Exercise 10.6
<a id="units-measurement-ex-6"></a>

How many square centimetres are in $2$ square metres?

<details><summary>Hint 1</summary>

Both length factors in an area receive the conversion by one hundred.

</details>
<details><summary>Hint 2</summary>

One square metre contains ten thousand square centimetres.

</details>
<details><summary>Solution</summary>

$2$ square metres equals $20\\,000$ square centimetres.
Multiplying by one hundred would convert only one dimension and would
not be an area conversion.

</details>

### Exercise 10.7
<a id="units-measurement-ex-7"></a>

Convert $12$ kilometres per hour to metres per minute.

<details><summary>Hint 1</summary>

First change the distance to metres.

</details>
<details><summary>Hint 2</summary>

Twelve thousand metres in sixty minutes gives a per-minute rate by division.

</details>
<details><summary>Solution</summary>

$12$ kilometres per hour is $12\\,000\\div60=200$ metres per
minute. Both numerator and denominator units have been converted.

</details>

### Exercise 10.8
<a id="units-measurement-ex-8"></a>

Can $4$ metres and $3$ kilograms be added to give $7$ metres?
Explain the problem with that statement.

<details><summary>Hint 1</summary>

Check whether the quantities are of the same kind.

</details>
<details><summary>Hint 2</summary>

A mass is not a collection of length units.

</details>
<details><summary>Solution</summary>

No. The terms measure different kinds of quantity, so the proposed addition
has no common metre unit. An extra physical relationship would be needed
to relate them; the numerals alone do not supply one.

</details>

### Exercise 10.9
<a id="units-measurement-ex-9"></a>

A length is recorded as $8$ centimetres after rounding to the nearest
centimetre. Give an enclosing range accounting only for that rounding.

<details><summary>Hint 1</summary>

Neighbouring whole-centimetre readings are one centimetre apart.

</details>
<details><summary>Hint 2</summary>

Half of that gap lies on each side of eight.

</details>
<details><summary>Solution</summary>

An enclosing range is $7.5$ to $8.5$ centimetres, allowing endpoints
for the bound. Actual endpoint inclusion depends on the tie rule. This
range accounts only for rounding and does not assert that all other
measurement errors are absent.

</details>

### Exercise 10.10
<a id="units-measurement-ex-10"></a>

A container holds one litre of an unspecified liquid. Can its mass be
reported as one kilogram from that information alone?

<details><summary>Hint 1</summary>

Identify the kind of quantity named by each unit.

</details>
<details><summary>Hint 2</summary>

Different materials can have different masses for the same volume.

</details>
<details><summary>Solution</summary>

No. A litre measures volume and a kilogram mass. The liquid's density
and relevant conditions would be needed to convert a volume into a mass.
A numerical unit exchange alone cannot change one kind of quantity into
another.

</details>

## Summary and next connection

A measurement includes both numerical value and unit. Convert equal
quantities using explicit factors, square or cube length conversions for
area or volume, and treat time units by their actual ratios. Rates have
two unit roles, while rounding bounds describe only a specified part of
uncertainty. Geometry next applies these units to perimeter, area and
simple composite shapes.
`;export{e as default};