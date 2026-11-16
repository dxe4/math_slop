
# Ratio and Proportion

A drink contains one part concentrate for every four parts water. A map uses
one centimetre for every hundred metres on the ground. A shop labels the
price per kilogram. All three describe a multiplicative comparison: how much
of one quantity accompanies another. Ratio and proportion make these
comparisons explicit and explain when multiplying both quantities by the
same factor is justified.

Read [Fractions](fractions.md) and [Decimals](decimals.md) first. You should
be able to take a fraction of an amount, divide by a positive quantity,
and keep track of units. This chapter uses nonnegative quantities and
positive scale factors or divisors where division is required. A statement
of proportion includes an assumption that the same relationship continues
when the scale changes; a real situation must justify that assumption.

## A ratio names an ordered comparison

**Definition 6.1 (Ratio).** A ratio $a:b$, read “$a$ to $b$”, compares
specified quantities in a stated order. When both quantities use the same
unit, a common positive scale factor can be removed without changing the
comparison. Thus $2:8=1:4$ as ratios of like quantities.

Always name the quantities and their order. Red to blue of $2:3$ means
there are two red parts for every three blue parts. Blue to red is $3:2$,
a different comparison. Multiplying both parts by four gives eight red
parts and twelve blue parts, preserving the red-to-blue ratio. Adding four
to each instead gives $6:7$, which changes the ratio. Equal additions
preserve a difference, whereas equal scale factors preserve a ratio.

The word “part” describes one common-sized unit in the comparison; it need
not mean one litre, one spoon or one object. A ratio can be realised at
different scales. However, physical constraints may restrict the scale:
if a recipe uses volumes that can be divided, fractional litres are possible;
if it counts indivisible beads, every resulting bead count must remain a
whole number.

**Worked example 6.2 (A ratio is not a fraction of the whole).** A drink
uses concentrate to water in ratio $1:4$. One litre of concentrate and four
litres of water make five litres in an ideal model where volumes add.
Concentrate is therefore $1/5$ of the complete drink, and water is $4/5$.
The fraction $1/4$ instead compares concentrate directly with water. It is
not the concentrate fraction of the total. When the comparison changes,
its denominator changes too.

For a same-unit ratio $a:b$ with $a+b>0$, the first quantity is the
fraction $a/(a+b)$ of the combined amount. This formula follows by taking
$a+b$ equal parts altogether. It should not be used for unlike units:
three hours and five kilometres do not make eight parts of one total.
Rates involving different units need a different interpretation.

## Share a total using common parts

**Worked example 6.3 (Divide a length in a ratio).** A ribbon of length
$35$ centimetres is cut into two pieces in ratio $2:5$. There are seven
common parts altogether, so each part has length $35\div7=5$
centimetres. The pieces are $2\times5=10$ centimetres and
$5\times5=25$ centimetres. Their total is $35$ centimetres and their
ratio simplifies from $10:25$ to $2:5$, checking both requirements.

Dividing the total by two or five separately would not implement the stated
ratio. First find the number of common parts, then one part's size, then
each requested amount. The same method handles three or more quantities.
For a $2:3:4$ share of $72$ counters, there are nine parts of eight,
giving $16,24,32$ counters respectively. Their sum and ratio both check.

A proposed total may be incompatible with an exact ratio of whole objects.
For red to blue beads in ratio $2:3$, the total comes in groups of five.
A total of twenty beads permits eight red and twelve blue. A total of
nineteen does not permit an exact whole-bead allocation at that ratio.
Rounding one colour would change the ratio; the correct conclusion is that
the stated constraints cannot all hold exactly.

## Proportion means scaling together

**Definition 6.4 (Direct proportion).** Two quantities are directly
proportional over a specified set of allowed values when one equals a fixed
constant times the other. Doubling one then doubles the other, and scaling
one by any permitted positive factor scales the other by the same factor.

A constant price per kilogram gives cost proportional to mass, if there
is no fixed charge or quantity discount. A table of a few observations
can suggest this model, but does not guarantee that a seller uses it for
every quantity. State where the constant-price assumption applies.

**Worked example 6.5 (A table with a constant rate).** Apples cost $£2.40$
per kilogram, with no other charges and fractional kilogram quantities
permitted. The costs are $£2.40$ for one kilogram, $£4.80$ for two,
and $£1.20$ for half a kilogram. For $3.5$ kilograms the cost is
$3.5\times£2.40=£8.40$. Dividing the total by $3.5$ kilograms
returns the constant rate $£2.40$ per kilogram. Cost and mass scale together;
the rate remains fixed.

The **unitary method** first finds the amount for one unit, then multiplies
by the requested number of units. If six identical notebooks cost $£9$
at a fixed per-notebook price, one costs $£9\div6=£1.50$, and ten
cost $£15$. This is also an equivalent-ratio calculation:
six notebooks to nine pounds scales by $1/6$ to one notebook to
one and a half pounds, then by ten to the desired purchase.

## Rates compare different kinds of quantity

**Definition 6.6 (Rate).** A rate is a quotient of quantities that records
how much of the numerator quantity occurs per unit of the denominator
quantity. Its units must be retained, such as pounds per kilogram or
kilometres per hour.

At a constant speed of sixty kilometres per hour, a vehicle travels thirty
kilometres in half an hour. The distance is speed times time; the time is
distance divided by speed when the speed is positive. If a journey changes
speed or includes stops, one constant-speed relation for the whole route
may be an average description rather than a moment-by-moment fact.

**Worked example 6.7 (Compare pack prices).** A pack of six rolls costs
$£4.20$, while a pack of nine costs $£5.85$. The first unit price is
$£4.20\div6=£0.70$ per roll, and the second is
$£5.85\div9=£0.65$ per roll. The larger pack is cheaper by five
pence per roll, though its total bill is larger. If both packs are bought,
add costs and roll counts before dividing:

$$\frac{£4.20+£5.85}{6+9\text{ rolls}}
=\frac{£10.05}{15\text{ rolls}}=£0.67\text{ per roll}.$$

The simple average of $70$ pence and $65$ pence is $67.5$ pence, which
gives equal weight to the two packs rather than to each of the fifteen rolls.
Multiplying the combined unit price by fifteen must recover the complete
bill. This check explains why the weighted comparison matters.

## Scale drawings require matching units

A scale of $1:100$ means one unit on the drawing corresponds to one
hundred of the same units in the object. Three centimetres on such a plan
represent three hundred centimetres, or three metres. Writing “three hundred
metres” would combine a scale calculation with an unjustified change of unit.
Convert explicitly before or after applying the scale.

A map stated as one centimetre for every two kilometres gives the same
kind of comparison, but uses different named units on its two sides.
Converting two kilometres to two hundred thousand centimetres gives the
dimensionless length scale $1:200\,000$. If all drawing lengths are doubled
while the represented region stays the same, its linear scale changes.
The map cannot be enlarged and still carry its old printed numerical scale
without correction.

Length scale and area scale are different. A rectangle whose two side
lengths both double has four times the area, because the number of units
across and down both doubles. Multiplying every length by three multiplies
its rectangular area by nine. The linear ratio does not apply unchanged
to quantities built from two lengths.

## Situations that are not direct proportion

A taxi charges a fixed $£3$ plus $£2$ per kilometre. A two-kilometre
journey costs $£7$ and a four-kilometre journey $£11$, so doubling the
distance does not double the total cost. The distance-dependent part is
proportional, but the complete bill includes a starting charge. Similarly,
a bulk discount can change a per-item price, and a cooking process may not
remain physically unchanged when every ingredient is multiplied by a large
factor. A ratio calculation describes the declared model; it does not
supply missing physical assumptions.

To use proportion responsibly, name the paired quantities, state their units,
identify the fixed ratio or rate, and say which values the model permits.
After computing, check both the requested comparison and any total or
whole-object constraints. An attractive number that violates one of those
conditions is not a solution of the original problem.

## Exercises

### Exercise 6.1
<a id="ratio-proportion-ex-1"></a>

Simplify red to blue of $12:18$ and state the blue-to-red ratio.

<details><summary>Hint 1</summary>

Both parts share a positive factor of six.

</details>
<details><summary>Hint 2</summary>

Reversing the named quantities reverses the order of the ratio.

</details>
<details><summary>Solution</summary>

Red to blue simplifies to $2:3$. Blue to red is $3:2$.
Dividing both quantities by six preserves their relative scale; swapping
their order changes which quantity is being compared first.

</details>

### Exercise 6.2
<a id="ratio-proportion-ex-2"></a>

A drink uses concentrate to water in ratio $2:7$. What fraction of the
complete drink is concentrate, assuming volumes add?

<details><summary>Hint 1</summary>

Count the common parts in the total, not just the water.

</details>
<details><summary>Hint 2</summary>

There are two concentrate parts and seven water parts.

</details>
<details><summary>Solution</summary>

There are nine parts altogether, of which two are concentrate, so the
fraction is $2/9$. The fraction $2/7$ would compare concentrate with
water and would use a different denominator.

</details>

### Exercise 6.3
<a id="ratio-proportion-ex-3"></a>

Share forty-eight counters in ratio $5:3$.

<details><summary>Hint 1</summary>

Find the number of common parts.

</details>
<details><summary>Hint 2</summary>

Eight parts share the total equally before the two amounts are built.

</details>
<details><summary>Solution</summary>

There are $5+3=8$ parts, each containing $48\div8=6$ counters.
The shares are $30$ and $18$. They sum to $48$ and simplify to
ratio $5:3$, checking both requirements.

</details>

### Exercise 6.4
<a id="ratio-proportion-ex-4"></a>

Can nineteen indivisible beads be split exactly into red and blue counts
in ratio $2:3$?

<details><summary>Hint 1</summary>

Exact whole-bead groups contain five common parts altogether.

</details>
<details><summary>Hint 2</summary>

Nineteen is not a multiple of five.

</details>
<details><summary>Solution</summary>

No. Five equal parts would each contain $19/5=3.8$ beads. The red
share would be $2\times3.8=7.6$ and the blue share $3\times3.8=11.4$,
which are not whole-bead counts. Rounding them would change the exact ratio.

</details>

### Exercise 6.5
<a id="ratio-proportion-ex-5"></a>

Four identical notebooks cost $£6$ at a fixed unit price. What do seven
cost, with no other charges?

<details><summary>Hint 1</summary>

Find the price for one notebook first.

</details>
<details><summary>Hint 2</summary>

Divide six pounds by four, then multiply by seven.

</details>
<details><summary>Solution</summary>

One costs $£1.50$, so seven cost $7\times£1.50=£10.50$.
The calculation uses the stated constant unit price; a fixed delivery charge
would need to be added separately.

</details>

### Exercise 6.6
<a id="ratio-proportion-ex-6"></a>

Compare five rolls for $£3.50$ with eight rolls for $£5.20$ by unit price.

<details><summary>Hint 1</summary>

Use pence per roll for both packs.

</details>
<details><summary>Hint 2</summary>

Divide each pack's total pence by its roll count.

</details>
<details><summary>Solution</summary>

The first costs $350\div5=70$ pence per roll; the second costs
$520\div8=65$ pence per roll. The second is five pence cheaper per
roll, while its full purchase price is higher.

</details>

### Exercise 6.7
<a id="ratio-proportion-ex-7"></a>

A plan uses scale $1:200$. What actual length is represented by four
centimetres?

<details><summary>Hint 1</summary>

The ratio compares lengths in the same unit.

</details>
<details><summary>Hint 2</summary>

Multiply four centimetres by two hundred, then convert to metres.

</details>
<details><summary>Solution</summary>

The length is $800$ centimetres, or eight metres. The scale multiplication
does not itself change centimetres into metres; that conversion uses one
hundred centimetres per metre.

</details>

### Exercise 6.8
<a id="ratio-proportion-ex-8"></a>

At a constant speed of twelve kilometres per hour, how far is travelled
in a quarter of an hour?

<details><summary>Hint 1</summary>

Distance equals speed times elapsed time under the stated constant-speed model.

</details>
<details><summary>Hint 2</summary>

A quarter of an hour is one quarter of the time used in the rate.

</details>
<details><summary>Solution</summary>

The distance is $12\times(1/4)=3$ kilometres. Multiplying the time
by one quarter also multiplies the distance by one quarter when the speed
remains fixed.

</details>

### Exercise 6.9
<a id="ratio-proportion-ex-9"></a>

A taxi costs $£3$ plus $£2$ per kilometre. Compare the bills for one
and two kilometres. Are total cost and distance directly proportional?

<details><summary>Hint 1</summary>

Include the starting charge in both bills.

</details>
<details><summary>Hint 2</summary>

Direct proportion would double the complete bill when distance doubles.

</details>
<details><summary>Solution</summary>

One kilometre costs $£5$ and two cost $£7$. Seven is not twice five,
so the complete cost is not directly proportional to distance. The fixed
starting charge prevents that scaling relationship.

</details>

### Exercise 6.10
<a id="ratio-proportion-ex-10"></a>

A rectangle has sides three and five centimetres. Both side lengths are
tripled. Find the original and new areas and compare their ratio.

<details><summary>Hint 1</summary>

Calculate area as length times width.

</details>
<details><summary>Hint 2</summary>

Both factors in the area calculation receive a factor of three.

</details>
<details><summary>Solution</summary>

The original area is $3\times5=15$ square centimetres. The new sides
are nine and fifteen centimetres, giving area $135$ square centimetres.
The new area is nine times the old, because $3\times3=9$. The
length scale is three, while the area scale is nine.

</details>

## Summary and next connection

A ratio names ordered quantities, while a fraction of a combined whole
uses their total in its denominator. Equivalent ratios scale every part
by the same factor. Direct proportion requires a fixed multiplicative
relationship; rates include their units, and fixed charges can break that
relationship. The next chapter uses a standard comparison base of one hundred
to develop percentages and percentage changes.
