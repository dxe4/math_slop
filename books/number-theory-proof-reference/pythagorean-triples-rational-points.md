
# Pythagorean Triples and Rational Points

A rational line gives a formula for circle points; integer coprimality turns that formula into a classification of right triangles. We prove both directions and the uniqueness claims. Then we classify triangles with a fixed leg and explain why primitive triangles and scaled descendants have different counting rules.

The opening parametrisation adapts the earlier combined Pythagorean/sums-of-squares reading, which remains intact with its original identity, questions, census and source listing. The separate sums-of-squares chapter now owns Gaussian arithmetic and the two-square and four-square theorems. Here preparation is gcd, prime factorisation, parity and rational algebra. A positive triangle has two positive legs and a positive hypotenuse; axes are allowed only in the explicitly stated rational-circle problem.

## 1. Prove every part of the primitive parametrisation

Begin with positive integers $x,y,z$ satisfying $x^2+y^2=z^2$ and $\gcd(x,y,z)=1$. The coordinates are pairwise coprime: a prime dividing any two divides the square of the third and hence the third. Both legs cannot be odd, because their squared sum would be two modulo four; both cannot be even by primitiveness. Relabel so that $x$ is odd and $y$ even. Then $z$ is odd as well.

The positive integers
$$r=(z-x)/2,\qquad s=(z+x)/2$$
satisfy $rs=(y/2)^2$. A common divisor of $r,s$ divides both their sum $z$ and difference $x$, so it is one. By unique prime factorization in the ordinary integers, every prime exponent in each of two coprime factors of a square is even. Hence $r=n^2$ and $s=m^2$ for unique positive integers $m>n$. Their gcd is one, and $z=m^2+n^2$ odd forces opposite parity. This proves the claimed necessity without assuming that a rational circle parametrization is already primitive.

Conversely, take $m>n>0$ with gcd one and opposite parity. Expansion proves the equation, and $m^2-n^2$ is positive and odd. If an odd prime divides both this leg and $2mn$, it divides $m$ or $n$ and the difference of their squares, hence both parameters, a contradiction. The prime two cannot divide the odd leg. Thus the legs are coprime and the triple primitive. This also shows that its even leg $2mn$ is divisible by four.

The parameters are recovered uniquely from the odd leg:
$$m^2=(z+x)/2,\qquad n^2=(z-x)/2.$$
The positive square roots are unique. Sorting the legs by numerical size does not destroy this recovery, because parity still identifies the odd one. Two different permitted parameter pairs therefore cannot become the same positive triangle merely because leg order is ignored.

The restrictions explain distinct failure mechanisms. A common divisor $d$ of $m,n$ contributes a factor $d^2$ to all three coordinates. If the parameters are coprime but both odd, both legs and the hypotenuse are even. In that case the even leg has exactly one factor of two, so the common factor is exactly two. Removing the condition $m>n$ instead changes the sign or order convention; allowing $n=0$ creates an axis point rather than a positive-leg triangle.

The rational geometry fits this arithmetic exactly. For a rational circle point $(u,v)\ne(-1,0)$, its slope from $(-1,0)$ is $t=v/(u+1)$. Substitution into the circle gives the second intersection
$$u=\frac{1-t^2}{1+t^2},\qquad v=\frac{2t}{1+t^2}.$$
For the positive primitive triple normalized by $z$, that slope is $y/(z+x)=n/m$ in lowest terms. Its interval $0<t<1$ encodes the choice of positive odd leg. Other rational slopes describe other quadrants and axes; the missing point $(-1,0)$ is the exceptional point used to start the construction.


## 2. The rational parametrisation is a bijection with one exception

Let $t$ be any rational number. Substitution shows that

$$u(t)=\frac{1-t^2}{1+t^2},\qquad v(t)=\frac{2t}{1+t^2}$$

satisfy $u^2+v^2=1$. The denominator is positive, so it never vanishes over the rationals. Conversely, if a rational circle point differs from $(-1,0)$, put $t=v/(u+1)$. Then

$$1+t^2=\frac{(u+1)^2+v^2}{(u+1)^2}=\frac2{u+1},$$

and substitution recovers $u(t)=u,v(t)=v$. Thus every rational point except $(-1,0)$ occurs once, with its slope supplying the inverse map. The excluded point is genuinely absent: $u(t)=-1$ would give $1-t^2=-1-t^2$, or $1=-1$. If desired, a formal parameter called infinity can be assigned that missing point; it is a notation for the vertical line, not a rational number to substitute into a fraction.

The parameter values $0,1,-1$ give the other three axis points $(1,0),(0,1),(0,-1)$. Positive coordinates require $0<t<1$. Reversing the sign of $t$ reflects across the horizontal axis. Replacing a nonzero $t$ by its reciprocal negates the first coordinate and preserves the second. These statements follow directly from the rational formulas, so sign and quadrant conventions can be tracked before clearing denominators.

Clearing denominators is not always primitive. If $t=n/m$ in lowest terms with $m>0$, the displayed coordinates have denominator $m^2+n^2$, but the three numerators can still share a factor of two when $m,n$ are odd. The greatest common divisor of the resulting triple is one for opposite-parity parameters and exactly two for coprime odd parameters. To prove the latter assertion, an odd common prime would divide both parameters as in Section 1; meanwhile $2mn$ has exactly one factor of two. Thus rational reduction of the slope and primitive reduction of the triangle are separate operations.

### Worked example: recover the slope as well as the triangle

For $(20,21,29)$, put the odd leg in the first coordinate to obtain $(21/29,20/29)$. Its slope from $(-1,0)$ is $(20/29)/(50/29)=2/5$. The recovered parameter pair is $(m,n)=(5,2)$, which gives odd leg twenty-one, even leg twenty and hypotenuse twenty-nine. If instead the circle point is $(20/29,21/29)$, its slope is $3/7$; those coprime odd parameters produce $(40,42,58)$ before primitive reduction. Both descriptions give the same triangle after swapping legs, but only the parity convention singles out its canonical Euclid pair.

## 3. A fixed even leg has a factor-partition classification

A primitive triangle's even leg is divisible by four. Conversely every positive multiple $L$ of four is the even leg of at least one primitive triangle: take $m=L/2,n=1$. The first parameter is even, so the pair is coprime and opposite parity.

For the exact classification set $N=L/2$. The possible parameters are precisely the factor pairs $mn=N$ with $m>n>0$ and $\gcd(m,n)=1$. Since $N$ is even, the coprimality condition forces its entire power of two into one factor and makes the other factor odd; opposite parity is automatic. Each other prime power in $N$ must likewise be assigned entirely to one factor. Splitting a prime's power between the two factors would introduce a common divisor.

Let $s$ be the number of distinct primes dividing $N$. There are $2^s$ ordered assignments of its prime-power blocks. Interchanging the two factors pairs these assignments without a fixed point, since equal coprime factors would both be one but $N$ is even. Exactly one in each pair has $m>n$. Hence the number of primitive triangles with this specified even leg is $2^{s-1}$. This count treats the even leg as fixed; it does not count scaled nonprimitive triangles with the same leg.

### Worked example: every primitive triangle with even leg sixty

Here $N=30$ has three distinct prime factors, so there are four parameter pairs: $(30,1),(15,2),(10,3),(6,5)$. Their other legs and hypotenuses are respectively $(899,901),(221,229),(91,109),(11,61)$. Every resulting triangle has even leg sixty and is primitive. The classification proves that none is missing, regardless of their very different sizes. A search restricting the hypotenuse to one hundred would find only the last and would answer a different bounded question.

The factor method is exact but not a general claim of efficient discovery. Factoring a large leg may be difficult. Once its complete prime factorisation is supplied, however, the finite assignment rule proves the count and gives every triangle. A list of examples and a completeness argument are distinct outputs.

## 4. A fixed odd leg has a second factor classification

Fix an odd integer $L>1$. In Euclid's formula it is the odd leg exactly when

$$L=m^2-n^2=(m-n)(m+n).$$

Put $r=m-n$ and $s=m+n$. These are positive odd integers with $r<s$. Their gcd is one: a common divisor divides $2m$ and $2n$, and being odd must divide both coprime parameters. Conversely, for a coprime factor pair $rs=L$ with $r<s$, set

$$m=(s+r)/2,\qquad n=(s-r)/2.$$

These are positive integers. Their sum is the odd integer $s$, so they have opposite parity. Any common divisor divides both $r$ and $s$, hence is one. They therefore give a primitive triangle with odd leg $L$. The construction is reversible, so no ambiguity is hidden in the factor count.

Assigning the prime-power blocks of $L$ to the two coprime factors, then identifying the interchange, gives $2^{\omega(L)-1}$ possibilities, where $\omega(L)$ denotes the number of distinct prime factors. There is no positive triangle with odd leg one: its only factor pair would have $r=s=1$ and give $n=0$. This is why the hypothesis $L>1$ appears before using the counting formula.

### Worked example: odd leg forty-five

The coprime factor pairs of forty-five are $(1,45)$ and $(5,9)$. The pair $(3,15)$ is excluded because its gcd is three. The permitted pairs give parameters $(23,22)$ and $(7,2)$, so the two primitive triangles are $(45,1012,1013)$ and $(45,28,53)$. The common odd leg has only two primitive companions even though there are further nonprimitive triangles with that leg. Again the full factor classification supplies completeness.

## 5. Primitive reduction and arbitrary scaling

For any positive triangle let $d=\gcd(x,y)$. Since $d^2$ divides $z^2$, prime-factor valuations imply $d\mid z$. Dividing all coordinates by $d$ gives a primitive triangle. Conversely, multiplying a primitive triangle by a positive integer $d$ produces coordinate gcd exactly $d$. Hence the primitive ancestor and scale are uniquely recoverable, even if the legs were first sorted by size.

It follows that triangles with fixed hypotenuse $H$ split into disjoint families indexed by primitive hypotenuses $c$ dividing $H$. For every primitive triangle of hypotenuse $c$, multiply by $H/c$. Conversely primitive reduction of any triangle with hypotenuse $H$ recovers such a divisor. If two constructions produced the same sorted triangle, unique primitive reduction would recover the same primitive triangle and the same divisor. This is the proof of disjointness.

For $H=65$, the relevant primitive hypotenuses are five, thirteen and sixty-five. At five the parameters are $(2,1)$, and at thirteen they are $(3,2)$. At sixty-five they are $(8,1)$ and $(7,4)$; listing the squares with $m^2+n^2=65$ and $m>n>0$ proves completeness. Scaling the first two gives $(39,52,65)$ and $(25,60,65)$; the last two give $(16,63,65)$ and $(33,56,65)$. These are all four sorted positive triangles with this hypotenuse. Merely listing the two primitive triangles would omit valid scaled descendants.

Changing the parameter pair by a common factor $d$ scales the Euclid triple by $d^2$. Arbitrary triangle scaling can be any positive integer, so these are different operations. For example $2(3,4,5)$ is a triangle, but it does not arise from multiplying the canonical parameters $(2,1)$ by an integer. This distinction explains why a parametrisation stated only for primitive triangles needs an additional scale parameter for all triangles.

## 6. Finite enumeration has a proof of its bounds

To enumerate primitive triangles with hypotenuse at most a positive bound $B$, use $m>n\ge1$ and $m^2+n^2\le B$. Necessarily $m^2<B$, so only finitely many positive $m$ occur. For each such $m$, require $1\le n<m$, $n^2\le B-m^2$, coprimality and opposite parity. Section 1 proves that every resulting row is primitive and every admissible triangle has exactly one row after parity identifies the odd leg. No floating-point equality is involved.

A hand enumeration can keep exact squared integers and compare them with $B$. If a square-root notation is used to describe the upper bound on $n$, its intended meaning is the largest integer whose square does not exceed $B-m^2$. The correctness argument is a finite integer inequality, not a numerical rounding convention.

The earlier retained combined reading contains a full primitive census up to five hundred, with its original reference listing and project obligations. That source remains a distinct companion. This chapter gives the mathematical completeness and deduplication argument; it makes no claim to have rerun the census or its listing. Repeated hypotenuses represent different triangles and must be retained, whereas a repeated sorted coordinate triple is a duplicate. The uniqueness theorem explains the difference before any implementation chooses a data structure.

## 7. Rational circle points compose by a proved rule

The parametrised points also encode rational rotations. Associate to a point $(u,v)$ on the unit circle the linear map sending $(x,y)$ to $(ux-vy,vx+uy)$. Expanding the two squared coordinates shows that it preserves $x^2+y^2$, and its determinant is $u^2+v^2=1$. Its inverse uses $(u,-v)$, so rational coordinates give an invertible map with rational coefficients. Conversely every matrix of the displayed form preserving the unit norm has its first column on the unit circle, and the slope formula recovers its rational parameter except at the identified missing point.

Composing the maps attached to $(u,v)$ and $(u',v')$ produces the point $(uu'-vv',uv'+vu')$. Its norm is one by direct multiplication, and its coordinates are rational. Thus rational circle points form a group under this explicitly stated operation, with identity $(1,0)$ and inverse $(u,-v)$. This is a conclusion about the points and maps, rather than an assumption that a geometric picture already supplies the algebra.

For finite slope parameters $t,s$ with $ts\ne1$, substituting the rational formulas and taking the slope of the resulting point gives

$$t\mathbin{\star}s=\frac{t+s}{1-ts}.$$

The computation can be checked without trigonometry: put both first and second product coordinates over $(1+t^2)(1+s^2)$, then use the inverse slope $v/(u+1)$ and cancel the common factor $1-ts$. If $ts=1$, the product point is instead $(-1,0)$, the missing slope-chart point. For example $t=s=1$ represents two quarter-turn maps; their product has that missing point as first column. Treating the displayed fractional rule as defined for every rational pair would therefore omit a real group element and divide by zero.

This construction connects the rational parametrisation with a familiar operation while keeping its domain honest. The group is on all rational circle points. One finite rational chart omits a point, so its coordinate rule must acquire an exceptional branch. This is the same mathematical distinction as primitive classification versus arbitrary scaling: a formula is complete only after its admissible inputs, omitted cases and inverse construction are stated.

## Exercises

### ENT11-01. Recover the canonical parameters

Find the Euclid parameters of the primitive triangle $(8,15,17)$.

**Hint 1.** The odd leg is fifteen.

**Hint 2.** Use $m^2=(z+x)/2$ and $n^2=(z-x)/2$ with that odd leg.

<details><summary>Full solution</summary>

The squares are $(17+15)/2=16$ and $(17-15)/2=1$, giving $(m,n)=(4,1)$. They are coprime and opposite parity. Their formula yields odd leg fifteen and even leg eight. Positive square-root uniqueness shows this is the canonical pair, independently of the initial numerical ordering of the legs.

</details>

### ENT11-02. A slope with odd numerator and denominator

Use $t=1/3$ to produce a primitive triangle and explain why clearing denominators first gives a nonprimitive triple.

**Hint 1.** The raw numerators are $3^2-1,2\cdot3,3^2+1$.

**Hint 2.** Both parameters are odd and coprime.

<details><summary>Full solution</summary>

The raw triple is $(8,6,10)$, with gcd two. Dividing gives $(4,3,5)$. The normalized rational circle point is $(4/5,3/5)$; after exchanging coordinates so the odd leg comes first, its canonical slope is $(4/5)/(1+3/5)=1/2$, giving parameters $(2,1)$. Lowest terms of the original rational slope did not guarantee primitive integer coordinates after the quadratic denominator was cleared.

</details>

### ENT11-03. The even leg is divisible by four

Prove this for every primitive triangle and show that every positive multiple of four occurs.

**Hint 1.** In $2mn$, one parameter is even.

**Hint 2.** For leg $L$, try $m=L/2,n=1$.

<details><summary>Full solution</summary>

Opposite parity makes $mn$ even, so $4\mid2mn$. Conversely if $4\mid L$, the pair $(L/2,1)$ consists of an even integer at least two and one, hence is coprime, positive and opposite parity. Its even leg is $L$ and the classification proves primitiveness. Thus divisibility by four is both necessary and sufficient for an integer to occur as a primitive even leg.

</details>

### ENT11-04. Classify even leg twelve

Find every primitive triangle with even leg twelve.

**Hint 1.** Classify the coprime factor pairs of six.

**Hint 2.** Retain the pair with parameters three and two as well as six and one.

<details><summary>Full solution</summary>

The pairs are $(6,1)$ and $(3,2)$, giving $(35,12,37)$ and $(5,12,13)$. Both are primitive. Since six has two distinct prime factors, the factor-partition count gives two possibilities, agreeing with the exhaustive list. Nonprimitive examples with even leg twelve, such as $(9,12,15)$, lie outside this classification and do not constitute a missing parameter pair.

</details>

### ENT11-05. Classify odd leg fifteen

Find every primitive triangle with odd leg fifteen.

**Hint 1.** Use the coprime pairs $(1,15)$ and $(3,5)$.

**Hint 2.** Recover the half-sum and half-difference parameters.

<details><summary>Full solution</summary>

The pair $(1,15)$ gives $(m,n)=(8,7)$ and triangle $(15,112,113)$. The pair $(3,5)$ gives $(4,1)$ and triangle $(15,8,17)$. Both factor pairs are coprime, and they exhaust the unordered factorizations of fifteen. The count $2^{2-1}=2$ therefore matches the two constructed primitive triangles.

</details>

### ENT11-06. A common parameter factor

If $m=du,n=dv$ with $u,v$ coprime and opposite parity, determine the gcd of the three generated coordinates.

**Hint 1.** Factor $d^2$ from all three expressions.

**Hint 2.** The remaining triple is primitive by the theorem.

<details><summary>Full solution</summary>

The coordinates are $d^2(u^2-v^2),d^2(2uv),d^2(u^2+v^2)$. The inner triple has gcd one, so the coordinate gcd is exactly $d^2$. This gives a squared scale for common parameter scaling. It does not imply that every nonprimitive triangle has a square coordinate gcd: arbitrary triangle scaling adds an independent positive factor.

</details>

### ENT11-07. Uniqueness of primitive reduction

Prove that a positive triangle cannot have two different primitive ancestors with different positive integer scales.

**Hint 1.** The coordinate gcd of a scaled primitive triple equals its scale.

**Hint 2.** Divide the given triangle by that uniquely determined gcd.

<details><summary>Full solution</summary>

If $(x,y,z)=d(a,b,c)$ with primitive $(a,b,c)$, taking the coordinate gcd gives $d$. Any second primitive factorisation therefore has the same scale. Dividing every coordinate recovers the same primitive triangle, up to whichever leg-order convention was allowed. This argument also proves the disjointness of families indexed by divisors of a fixed hypotenuse.

</details>

### ENT11-08. A divisibility obstruction

Prove that at least one coordinate of every integer Pythagorean triple is divisible by five.

**Hint 1.** Nonzero square residues modulo five are one and four.

**Hint 2.** Add two such residues and compare with the allowed nonzero residues.

<details><summary>Full solution</summary>

If none of the coordinates were divisible by five, each square would be one or four modulo five. The sums of two such residues are two, zero or three, none equal to one or four. This contradicts the triangle equation. Primitiveness is unnecessary, so the obstruction also applies to all scaled triangles. It asserts divisibility of some coordinate, not necessarily a leg.

</details>

### ENT11-09. The missing rational point

Prove that $(-1,0)$ is not produced by a finite rational parameter, and identify the points produced by $0,1,-1$.

**Hint 1.** Equate the first-coordinate formula with minus one.

**Hint 2.** Substitute the three finite parameters directly.

<details><summary>Full solution</summary>

The equation $(1-t^2)/(1+t^2)=-1$ would give $1=-1$, impossible. The other parameters give $(1,0),(0,1),(0,-1)$ respectively. Thus all four axis points are accounted for, with exactly one missing from the finite-slope chart. The inverse slope $v/(u+1)$ is defined at every other rational circle point, proving that there are no further omissions.

</details>

### ENT11-10. Complete an enumeration bound

For primitive triangles with hypotenuse at most one hundred, give a complete bound on $m$ and the exact conditions on $n$ for each $m$.

**Hint 1.** Since $n\ge1$, one has $m^2<100$.

**Hint 2.** Include coprimality and parity as well as the norm bound.

<details><summary>Full solution</summary>

Use $2\le m\le9$. For each $m$, take the integers $1\le n<m$ satisfying $n^2\le100-m^2$, $\gcd(m,n)=1$ and opposite parity. Each pair produces one primitive triangle by the converse theorem. Every permitted triangle supplies one such pair by the recovery formulas, so the bound is exhaustive. Sorting legs does not merge distinct canonical pairs because their unique recovery uses parity rather than numerical size.

</details>

### ENT11-11. All triangles with hypotenuse twenty-five

Classify primitive and nonprimitive positive triangles with hypotenuse twenty-five.

**Hint 1.** The primitive ancestor's hypotenuse divides twenty-five.

**Hint 2.** Solve the primitive parameter norm equations at five and twenty-five.

<details><summary>Full solution</summary>

At five, parameters $(2,1)$ give $(3,4,5)$ and scale five gives $(15,20,25)$. At twenty-five, the only permitted pair is $(4,3)$, giving $(7,24,25)$. The divisor one has no positive triangle. To see completeness of the norm equation at twenty-five, $m\le4$ and $n<m$ leave only the square pair sixteen and nine. Thus there are exactly two sorted positive triangles, one primitive and one scaled.

</details>

### ENT11-12. Parametrise another rational circle

Suppose $a,b$ are rational and $a^2+b^2=N>0$. Derive the second intersection of $x^2+y^2=N$ with the line $y=b+t(x-a)$ for rational finite slope $t$.

**Hint 1.** Put $x=a+h,y=b+th$.

**Hint 2.** The known root is $h=0$; factor it out of the resulting quadratic.

<details><summary>Full solution</summary>

Substitution gives $h(2a+2bt+(1+t^2)h)=0$. The second root is $h=-2(a+bt)/(1+t^2)$, producing rational coordinates $x=a+h,y=b+th$. If $a+bt=0$, the root is repeated and the line is tangent; there is then no distinct second point. The vertical line is absent from this finite-slope chart and must be handled separately. The construction requires the given rational point; it does not prove that every circle of positive rational radius-squared has one.

</details>

## Closing summary

The rational slope map has a proved inverse and one precisely identified exceptional point. Integer gcd and parity impose the exact primitive parameter conditions. Coprime factor partitions classify a fixed even or odd leg, while unique primitive reduction classifies arbitrary scaling and fixed hypotenuses. Completeness of a finite enumeration follows from the same theorem and integer bounds, independently of running any listing. The full earlier source and its exercise/census identities remain available as a retained companion.
