var e=`---
id: course-foundations-powers-roots-scale
title: "Powers, Roots, and Scale: Compact Domain Clinic"
level: foundation
estimated_minutes: 150
license: CC-BY-4.0
---

# Powers, Roots, and Scale: Compact Domain Clinic

<!-- euler-course-route -->

## Current course route

The compact clinic is now included in [Powers, Roots, and Scale](/courses/atlas-powers-roots-scale/). This original source remains available for its earlier notes and study steps.

Powers are a compact language for repeated multiplication, roots reverse powers, and scientific notation lets the same ideas describe quantities from cell widths to planetary distances. The notation is short, but it carries conditions that are easy to hide. This course makes those conditions visible.

You should already be comfortable multiplying fractions and signed numbers. Keep a calculator nearby for checking estimates, but do the structural reasoning first.

## Before you begin: a four-question diagnostic

Try these without a calculator. The point is to choose a useful entry point, not
to earn a score.

1. Compute \\((-3)(-3)(-3)\\).
2. Compute \\(3/4\\div 2/5\\).
3. Explain why \\(5/0\\) is not a number.
4. A square has side \\(3\\) cm. State its area with units.

The answers are \\(-27\\), \\(15/8\\), “division by zero cannot undo a
multiplication by zero uniquely,” and \\(9\\text{ cm}^2\\). If the sign in the
first answer was uncertain, review signed multiplication before Sections 1–2.
If the second was uncertain, review reciprocals before negative exponents. If
the third was uncertain, keep a domain ledger beside every example in Sections
2–4. If the fourth lacked squared units, pause at the scale examples in Section
6. A learner who needs all four repairs can still use this course: work one
section at a time and check each worked example by expanding it.

## 1. A power names a base and an exponent

For a positive whole number \\(n\\),

\\[
a^n=\\underbrace{a\\cdot a\\cdots a}_{n\\text{ factors}}.
\\]

The number \\(a\\) is the **base** and \\(n\\) is the **exponent**. Thus \\(3^4=3\\cdot3\\cdot3\\cdot3=81\\). The exponent counts factors; it is not a multiplier. In particular, \\(3^4\\ne3\\cdot4\\).

Parentheses determine the base. Compare

\\[
(-2)^4=16,\\qquad -2^4=-(2^4)=-16.
\\]

In the first expression, the base is \\(-2\\). In the second, exponentiation applies to \\(2\\) before the leading negative sign.

### Why the exponent laws take their familiar form

When bases match, joining two strings of factors gives

\\[
a^m a^n=a^{m+n}
\\]

for positive whole numbers \\(m,n\\). Likewise, grouping \\(m\\) copies of \\(a^n\\) gives

\\[
(a^n)^m=a^{nm}.
\\]

These are different operations on the exponents: multiplication of powers adds exponents, while a power of a power multiplies them.

If two factors are raised to the same positive whole power, they may be grouped factor by factor:

\\[
(ab)^n=a^n b^n.
\\]

For division, provided the denominator is nonzero,

\\[
\\left(\\frac ab\\right)^n=\\frac{a^n}{b^n}.
\\]

**Worked example.** Simplify \\((2x^3)^2x^4\\).

\\[
(2x^3)^2x^4=2^2(x^3)^2x^4=4x^6x^4=4x^{10}.
\\]

The exponent does not distribute over addition: \\((a+b)^2\\) is generally not \\(a^2+b^2\\). Expanding shows the missing term:

\\[
(a+b)^2=a^2+2ab+b^2.
\\]

Taking \\(a=b=1\\) is a quick counterexample: \\(2^2=4\\), whereas \\(1^2+1^2=2\\).

## 2. Zero and negative exponents are forced by consistency

Suppose \\(a\\ne0\\). The quotient of equal powers is \\(1\\), but the quotient law suggests

\\[
\\frac{a^m}{a^m}=a^{m-m}=a^0.
\\]

Therefore the consistent definition is

\\[
a^0=1\\qquad(a\\ne0).
\\]

The restriction matters: \\(0^0\\) is not assigned the ordinary algebraic value used here. Different advanced contexts sometimes adopt conventions for it, but no such convention licenses division by zero.

Similarly,

\\[
1=\\frac{a^m}{a^m}=a^{m-m}=a^m a^{-m},
\\]

so

\\[
a^{-m}=\\frac1{a^m}\\qquad(a\\ne0).
\\]

A negative exponent means **reciprocal**, not a negative result. For example,

\\[
2^{-3}=\\frac1{2^3}=\\frac18,qquad (-2)^{-3}=\\frac1{(-2)^3}=-\\frac18.
\\]

With integer exponents, the main laws remain valid wherever every expression is defined:

\\[
a^r a^s=a^{r+s},\\quad \\frac{a^r}{a^s}=a^{r-s},\\quad (a^r)^s=a^{rs}.
\\]

If an exponent is negative, the base cannot be zero. That domain check comes before simplification.

**Worked example.** Simplify

\\[
\\frac{6x^{-2}y^3}{3xy^{-1}}
\\]

for \\(x\\ne0\\) and \\(y\\ne0\\).

Coefficients divide to \\(2\\). Subtract exponents on matching bases:

\\[
2x^{-2-1}y^{3-(-1)}=2x^{-3}y^4=\\frac{2y^4}{x^3}.
\\]

The final form has positive exponents, but the original restrictions \\(x\\ne0\\), \\(y\\ne0\\) still belong to the statement.

## 3. Roots reverse whole-number powers

For \\(a\\ge0\\), the symbol \\(\\sqrt a\\) means the unique nonnegative number whose square is \\(a\\). It is called the **principal square root**. Thus \\(\\sqrt{25}=5\\), not \\(\\pm5\\).

The equation \\(x^2=25\\), however, has two real solutions: \\(x=5\\) and \\(x=-5\\). The symbol \\(\\sqrt{25}\\) names one number; solving an equation asks for every number that satisfies it.

This distinction explains the identity

\\[
\\sqrt{x^2}=|x|,
\\]

not \\(x\\) for every real \\(x\\). If \\(x=-7\\), then \\(\\sqrt{x^2}=\\sqrt{49}=7=|x|\\).

More generally, \\(\\sqrt[n]{a}\\) is an **nth root**.

- If \\(n\\) is even, a real principal nth root requires \\(a\\ge0\\) and is chosen nonnegative.
- If \\(n\\) is odd, every real \\(a\\) has exactly one real nth root, which has the same sign as \\(a\\).

For instance, \\(\\sqrt[3]{-8}=-2\\), while \\(\\sqrt{-8}\\) is not a real number.

### Simplifying roots without changing their value

Factor out perfect powers:

\\[
\\sqrt{72}=\\sqrt{36\\cdot2}=6\\sqrt2.
\\]

For nonnegative \\(a,b\\),

\\[
\\sqrt{ab}=\\sqrt a\\sqrt b.
\\]

The nonnegative condition protects the statement in real arithmetic. There is no matching addition law: \\(\\sqrt{a+b}\\ne\\sqrt a+\\sqrt b\\) in general. With \\(a=b=1\\), the two sides are \\(\\sqrt2\\) and \\(2\\).

**Worked example.** Solve \\((x-3)^2=20\\).

Taking square roots of an equation requires both signs:

\\[
|x-3|=\\sqrt{20}=2\\sqrt5,
\\]

so

\\[
x=3+2\\sqrt5\\quad\\text{or}\\quad x=3-2\\sqrt5.
\\]

Substitution confirms both solutions.

## 4. Rational exponents connect powers and roots

For a positive real base \\(a\\), the exponent \\(1/n\\) is defined to be the unique positive principal nth root of \\(a\\). With that sign choice, the power-of-a-power law works:

\\[
(a^{1/n})^n=a.
\\]

Therefore

\\[
a^{1/n}=\\sqrt[n]{a}
\\]

and, for integers \\(m\\) and positive integers \\(n\\),

\\[
a^{m/n}=\\sqrt[n]{a^m}=(\\sqrt[n]{a})^m.
\\]

For example,

\\[
16^{3/4}=(\\sqrt[4]{16})^3=2^3=8.
\\]

Using positive bases makes every rational exponent unambiguous and preserves all usual exponent laws. Real negative bases require more care. Some rational exponents work, such as

\\[
(-8)^{1/3}=-2,
\\]

but \\((-8)^{1/2}\\) is not real. Worse, the same rational number can have different-looking fractions: \\(1/3=2/6\\), yet an unreduced even root of a negative number is not real. At this level, reduce the fraction and interpret negative-base rational powers through an odd root only when that real interpretation is defined. Do not apply positive-base laws mechanically across undefined expressions.

Zero is another boundary case. A positive rational power of zero is zero. A zero exponent is left outside the ordinary definition \\(a^0=1\\) because that definition assumed \\(a\\ne0\\). A negative power of zero would require division by zero and is undefined.

**Worked example.** Evaluate \\(27^{-2/3}\\).

The negative sign requests a reciprocal:

\\[
27^{-2/3}=\\frac1{27^{2/3}}
=\\frac1{(\\sqrt[3]{27})^2}
=\\frac1{3^2}=\\frac19.
\\]

## 5. Estimating roots and powers

An exact radical can still be located without a calculator. Since

\\[
7^2=49<50<64=8^2,
\\]

we know \\(7<\\sqrt{50}<8\\). To refine the estimate, test decimals:

\\[
7.07^2=49.9849<50,
\\qquad
7.08^2=50.1264>50.
\\]

Hence \\(7.07<\\sqrt{50}<7.08\\). This bracket is more informative than an unexplained calculator display because it certifies the interval containing the value.

Powers can be estimated by comparison too. Since \\(2^{10}=1024\\), it is useful to remember that \\(2^{10}\\) is close to \\(10^3\\). Then

\\[
2^{30}=(2^{10})^3\\approx(10^3)^3=10^9.
\\]

The exact value is a little larger than one billion because \\(1024>1000\\).

## 6. Scientific notation and orders of magnitude

A nonzero decimal is in **scientific notation** when written

\\[
c\\times10^k,
\\]

where \\(1\\le |c|<10\\) and \\(k\\) is an integer. Moving the decimal point left increases the exponent; moving it right decreases the exponent:

\\[
4{,}720{,}000=4.72\\times10^6,
\\qquad
0.000081=8.1\\times10^{-5}.
\\]

Scientific notation separates the significant part \\(c\\) from the scale \\(10^k\\). Multiplication and division then use exponent laws:

\\[
(3\\times10^5)(2\\times10^{-3})=6\\times10^2=600,
\\]

\\[
\\frac{8.4\\times10^7}{2.1\\times10^3}=4\\times10^4.
\\]

For addition, first express both quantities at the same power of ten:

\\[
3.2\\times10^5+7.0\\times10^4
=3.2\\times10^5+0.70\\times10^5
=3.90\\times10^5.
\\]

Adding exponents here would be a category error; exponent addition belongs to multiplication.

An **order of magnitude** comparison focuses on powers of ten. A quantity near \\(10^8\\) is about three orders of magnitude larger than one near \\(10^5\\), because their ratio is near \\(10^3\\). The coefficient still matters for precise comparison. For example, \\(9\\times10^5\\) and \\(1.1\\times10^6\\) lie on opposite sides of a power-of-ten boundary but differ by only a factor of about \\(1.22\\), not a factor of ten.

### Scale factors in length, area, and volume

If every length of a shape is multiplied by \\(s\\), then areas are multiplied by \\(s^2\\) and volumes by \\(s^3\\). This follows from units as well as geometry. A rectangle with sides \\(L,W\\) has area \\(LW\\); scaling both gives

\\[
(sL)(sW)=s^2LW.
\\]

A box gains three factors of \\(s\\), so its volume gains \\(s^3\\).

**Worked example.** A model cube has edge length \\(2\\) cm. A larger cube is built at scale factor \\(5\\). Its edge is \\(10\\) cm, its surface area is multiplied by \\(5^2=25\\), and its volume is multiplied by \\(5^3=125\\). Multiplying the original volume \\(2^3=8\\) cm\\(^3\\) by \\(125\\) gives \\(1000\\) cm\\(^3\\), which agrees with \\(10^3\\).

## 7. A reliable problem-solving routine

When an expression contains powers or roots, use this order.

1. **Identify each base.** Parentheses decide whether a sign, fraction, or product belongs to the base.
2. **Record restrictions.** Negative exponents exclude zero. Even real roots require nonnegative radicands.
3. **Choose the law that matches the operation.** Multiplication of like bases adds exponents; a power of a power multiplies them.
4. **Separate exact work from approximation.** Keep \\(3\\sqrt2\\) exact until a decimal is actually needed.
5. **Check scale and sign.** A reciprocal of a number larger than one should be smaller than one. An even power cannot be negative.
6. **Test the result.** Substitute solutions into the original equation and compare a decimal answer with bounding powers.

## 8. Common errors and repairs

**Error: treating the exponent as a coefficient.**  
Repair: expand one small case. \\(5^3=5\\cdot5\\cdot5\\), not \\(5\\cdot3\\).

**Error: forgetting that exponentiation precedes a leading sign.**  
Repair: write the base explicitly. \\(-4^2=-(4^2)\\), while \\((-4)^2\\) has base \\(-4\\).

**Error: distributing a power or root over a sum.**  
Repair: test \\(1+1\\). Valid distribution laws concern products under stated conditions, not sums.

**Error: writing \\(a^{-n}=-a^n\\).**  
Repair: translate the negative exponent immediately as \\(1/a^n\\).

**Error: writing \\(\\sqrt{x^2}=x\\).**  
Repair: remember that a principal square root is nonnegative, so the result is \\(|x|\\).

**Error: losing solutions after taking a square root.**  
Repair: distinguish the number \\(\\sqrt a\\) from the equation \\(u^2=a\\), whose real solutions are \\(u=\\pm\\sqrt a\\) when \\(a>0\\).

**Error: combining scientific-notation exponents during addition.**  
Repair: align the powers of ten first, just as decimal places are aligned in ordinary addition.

## 9. Practice

1. Evaluate \\((-3)^4\\), \\(-3^4\\), and \\(3^{-4}\\).
2. Simplify \\((x^2y^{-1})^3/(xy^{-2})\\), stating restrictions.
3. Explain why \\(a^0=1\\) requires \\(a\\ne0\\).
4. Simplify \\(\\sqrt{180}\\) and bracket it between consecutive integers.
5. Solve \\((2x+1)^2=12\\) exactly.
6. Evaluate \\(81^{3/4}\\) and \\(32^{-2/5}\\).
7. Compute \\((6.0\\times10^{-4})(3.5\\times10^7)\\) in scientific notation.
8. A photograph is enlarged so every length is \\(1.5\\) times as large. By what factor does its area change? What would be the volume factor for a geometrically similar solid?

## 10. Solutions

1. \\((-3)^4=81\\). In \\(-3^4\\), the power is evaluated before the leading sign, so the result is \\(-81\\). Finally, \\(3^{-4}=1/3^4=1/81\\).
2. For \\(x\\ne0\\), \\(y\\ne0\\),
   \\[
   \\frac{(x^2y^{-1})^3}{xy^{-2}}
   =\\frac{x^6y^{-3}}{xy^{-2}}
   =x^5y^{-1}=\\frac{x^5}{y}.
   \\]
3. The consistency argument uses \\(a^m/a^m=1\\). If \\(a=0\\), this quotient is division by zero, so the argument is invalid. The ordinary integer-power definition therefore states \\(a^0=1\\) only for nonzero \\(a\\).
4. \\(180=36\\cdot5\\), so \\(\\sqrt{180}=6\\sqrt5\\). Because \\(13^2=169<180<196=14^2\\), it lies between \\(13\\) and \\(14\\).
5. From \\((2x+1)^2=12\\), obtain \\(2x+1=\\pm\\sqrt{12}=\\pm2\\sqrt3\\). Hence \\(x=(-1+2\\sqrt3)/2\\) or \\(x=(-1-2\\sqrt3)/2\\).
6. \\(81^{3/4}=(\\sqrt[4]{81})^3=3^3=27\\). Also \\(32^{-2/5}=1/(\\sqrt[5]{32})^2=1/2^2=1/4\\).
7. Multiply coefficients and add exponents: \\(6.0\\cdot3.5=21.0\\) and \\(-4+7=3\\). Normalize \\(21.0\\times10^3\\) to \\(2.10\\times10^4\\).
8. Area changes by \\(1.5^2=2.25\\). A similar solid's volume would change by \\(1.5^3=3.375\\).

## Final task — scale claim audit

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
are \\(1,2,3\\) rather than merely reporting calculator outputs.

## Where to go next

Powers and roots support polynomial algebra, geometry, scientific measurement, and exponential models. Before moving on, make sure you can state the domain restriction attached to every negative exponent or even root. Then study exponential growth and logarithms, where a variable moves into the exponent and scale becomes the central object rather than a convenient notation.
`;export{e as default};