var e=`---
parent_id: book-algebra-from-stories
chapter_id: equivalent-expressions
title: "Equivalent Expressions"
level: foundation
estimated_minutes: 150
license: CC BY-SA 4.0
---

# Equivalent Expressions {#section-1-equivalent-expressions}

<a id="section-1-when-different-symbols-mean-the-same-thing"></a>
## When different symbols mean the same thing {#section-3-when-different-symbols-mean-the-same-thing}

In **Formulas from Science** we rearranged equations to isolate one variable, keeping track of values for which a division was allowed. Here we make that agreement precise. Choose a **common domain**: the allowed inputs at which both expressions are defined. Two expressions are **equivalent on that domain** when they have the same value for every input in it. Unless a story or a denominator restricts the inputs, this chapter uses real numbers. Recognising equivalence lets us simplify, compare, and solve while preserving those restrictions.

<a id="section-5-testing-equivalence-by-substitution"></a>
## Testing equivalence by substitution {#section-7-testing-equivalence-by-substitution}

Choose an input in the common domain and evaluate both expressions. If they differ, that one counterexample proves the expressions are not equivalent on the domain. Agreement at several inputs checks only those inputs; it does not establish agreement everywhere. A justified algebraic identity, such as the distributive property, supplies the reason for a universal claim.

**Example.** Are $3(x + 2)$ and $3x + 6$ equivalent?

Test with $x = 0$: $3(0 + 2) = 6$ and $3(0) + 6 = 6$. Agree.
Test with $x = 5$: $3(5 + 2) = 21$ and $3(5) + 6 = 21$. Agree.
Test with $x = -1$: $3(-1 + 2) = 3$ and $3(-1) + 6 = 3$. Agree.

These expressions are equivalent by the distributive property.

**Example.** Are $x^{2}$ and $2x$ equivalent?

Test with $x = 3$: $3^{2} = 9$ and $2(3) = 6$. They differ, so the expressions are not equivalent.

<a id="section-21-equivalence-and-safe-equation-steps"></a>
## Equivalence and safe equation steps {#section-23-equivalence-and-safe-equation-steps}

An expression identity says that two values agree at every input in a stated domain. An equation asks which inputs make an equality true. A reversible equation step preserves that solution set: adding or subtracting the same defined expression on both sides can be undone; multiplying or dividing both sides by a nonzero number can also be undone.

Cancellation needs its own domain check. For example,

$$\\frac{x(x+2)}{x}=x+2 \\qquad (x\\ne 0).$$

The denominator requires $x\\ne0$, and division by that nonzero factor justifies the cancellation. The simplified expression is also defined at $x=0$, but that extra input was not in the original expression's domain. Do not silently add it.

When an equation contains a factor that might be zero, keep that case. The equation $x(x-2)=0$ has solutions $x=0$ and $x=2$: one of its factors must be zero. Cancelling $x$ would keep only $x=2$ and lose a valid solution. Cancellation is reversible only after restricting to $x\\ne0$ and treating $x=0$ separately.

Some steps preserve old solutions but introduce new candidates. Starting from $x=-2$ and squaring both sides gives $x^2=4$. That new equation has candidates $x=-2$ and $x=2$, because $(x-2)(x+2)=0$. Substituting into the original equation keeps $-2$ and rejects $2$. Squaring therefore needs an original-equation check; it is not a reversible step on all real numbers.

These are short claim–reason–counterexample arguments: name the claim and domain, give the rule that licenses it, and use a counterexample when a proposed general rule fails. Numerical agreement can check a calculation; the stated rule and its conditions justify the full claim.

<a id="section-37-collecting-like-terms"></a>
## Collecting like terms {#section-39-collecting-like-terms}

An expression such as $4x + 7y - 2x + 3y$ contains four terms but only two distinct kinds: $x$-terms and $y$-terms. We **collect like terms** by adding their coefficients.

$$4x + 7y - 2x + 3y = (4 - 2)x + (7 + 3)y = 2x + 10y.$$

**Definition 7.1 (like terms).** Like terms are terms that contain exactly the same variables raised to exactly the same powers. Their coefficients may differ.

<a id="section-45-worked-example-collecting-with-negatives"></a>
### Worked example: collecting with negatives {#section-47-worked-example-collecting-with-negatives}

Simplify $5a - 3b - 8a + 6b$.

Group the $a$-terms and $b$-terms:

$$(5a - 8a) + (-3b + 6b) = -3a + 3b.$$

We can factor out 3 if desired: $3(-a + b)$ or $3(b - a)$.

<a id="section-55-expanding-brackets"></a>
## Expanding brackets {#section-57-expanding-brackets}

Expanding removes parentheses by applying the distributive property.

**Example.** Expand $2(x + 3y - 4)$.

$$2(x + 3y - 4) = 2x + 6y - 8.$$

**Example.** Expand $-3(2a - b)$.

$$-3(2a - b) = -6a + 3b.$$

Be careful with the negative sign: $-3 \\times (-b) = +3b$.

<a id="section-69-common-error-sign-mistakes"></a>
### Common error: sign mistakes {#section-71-common-error-sign-mistakes}

When expanding $-2(x - 5)$, a common mistake is $-2x - 10$. The correct expansion is $-2x + 10$ because $-2 \\times (-5) = +10$.

<a id="section-73-factorising"></a>
## Factorising {#section-75-factorising}

Factorising is the reverse of expanding: we write an expression as a product of simpler expressions.

**Example.** Factorise $6x + 9$.

The greatest common factor of 6 and 9 is 3:

$$6x + 9 = 3(2x + 3).$$

**Example.** Factorise $x^{2} + 5x$.

Both terms contain $x$:

$$x^{2} + 5x = x(x + 5).$$

**Example.** Factorise $12a^{2}b - 8ab^{2}$.

The greatest common factor of 12 and 8 is 4. Both terms contain $a$ and $b$. The lowest power of $a$ is $a^{1}$; the lowest power of $b$ is $b^{1}$. So the common factor is $4ab$:

$$12a^{2}b - 8ab^{2} = 4ab(3a - 2b).$$

Check by expanding: $4ab \\times 3a = 12a^{2}b$ and $4ab \\times (-2b) = -8ab^{2}$.

<a id="section-97-the-difference-of-two-squares"></a>
## The difference of two squares {#section-99-the-difference-of-two-squares}

A special pattern appears frequently:

$$a^{2} - b^{2} = (a + b)(a - b).$$

**Example.** Factorise $x^{2} - 9$.

$$x^{2} - 9 = x^{2} - 3^{2} = (x + 3)(x - 3).$$

**Example.** Expand $(2x + 5)(2x - 5)$.

$$(2x + 5)(2x - 5) = (2x)^{2} - 5^{2} = 4x^{2} - 25.$$

<a id="section-111-practice-exercises"></a>
## identities, forms and domains {#section-279-further-development-identities-forms-and-domains}

<a id="section-281-a-value-an-identity-and-an-equation-are-different-claim"></a>
## A value, an identity and an equation are different claims {#section-283-a-value-an-identity-and-an-equation-are-different-claim}

The word “equal” can describe a particular calculation or a rule that works throughout a domain. At $x=2$, the expressions $x+2$ and $2x$ both have value 4. This is a true numerical equality at that input. It does not make the expressions equivalent over the real numbers: at $x=1$, their values are 3 and 2.

An **identity on a domain** asserts agreement at every allowed input. For example, $3(x+2)=3x+6$ is an identity on the real numbers because distributivity applies to every real $x$. The equation $x+2=2x$, in contrast, asks which inputs make an equality true. Subtracting $x$ gives the one solution $x=2$. A pair of expressions may therefore agree somewhere without defining the same rule everywhere.

This distinction helps us read a page of algebra. In a chain such as $2(x+3)+x=2x+6+x=3x+6$, each equality is an identity justified by a rule. In a solution chain such as $3x+6=18$, then $3x=12$, then $x=4$, the equations are different conditions with the same solution set. Chapter 1 explained the reversible actions behind that second chain. Here our main task is to understand why expression identities are valid and useful.

A claim must include the domain on which it is being compared. The formulas $x/x$ and 1 have the same value for every nonzero real $x$. Only the second formula is defined at zero. Saying that their values agree on the common domain is correct; saying that the first expression can be evaluated at every real input is not.

<a id="section-291-why-collecting-terms-works"></a>
## Why collecting terms works {#section-293-why-collecting-terms-works}

Collecting like terms is the distributive property read backwards. For every real $x$,

$$4x+7x=(4+7)x=11x.$$

The two addends share the factor $x$, so the coefficients can be added. Likewise $4x-7x=(4-7)x=-3x$. A negative result is a coefficient, not an instruction to remove the letter. If $x=-2$, the last expression has value 6, agreeing with $4(-2)-7(-2)=-8+14$.

The shared factor must really be the same. The terms $x$ and $x^2$ do not generally have one common quantity whose coefficients are both 1. The proposed simplification $x+x^2=2x^2$ fails at $x=2$, because the values are 6 and 8. However, we can factor the actual common factor $x$:

$$x+x^2=x(1+x).$$

This is a different operation from collecting the two terms into one power. Expanding the factored form recovers $x+x^2$ for every real $x$, including zero.

For two variables, regard their roles separately. In $2a+3b+5a-b$, combine the $a$-terms to get $7a$ and the $b$-terms to get $2b$. Unless an additional relation between $a$ and $b$ has been supplied, replacing $7a+2b$ by $9a$ would assert $b=a$ without justification. An expression can be fully useful with more than one term; “simplify” does not mean “force everything into one term.”

<a id="section-307-worked-example-record-signs-as-part-of-terms"></a>
### Worked example: record signs as part of terms {#section-309-worked-example-record-signs-as-part-of-terms}

Consider

$$8u-3v-(5u-2v)+4.$$

The subtraction before the brackets applies to their whole value. Multiplication by $-1$ gives $-(5u-2v)=-5u+2v$. Thus the expression becomes

$$8u-3v-5u+2v+4=3u-v+4.$$

At $u=2,v=3$, the original value is $16-9-(10-6)+4=7$, and the final value is $6-3+4=7$. This numerical check is useful for detecting a sign error. The reason for the identity at all real $u,v$ is the distributive step followed by grouping the shared factors.

<a id="section-319-a-rectangle-explains-a-product-of-two-sums"></a>
## A rectangle explains a product of two sums {#section-321-a-rectangle-explains-a-product-of-two-sums}

Take a rectangle with sides $x+3$ and $x+2$ length units, first with $x>0$ so every piece in the description has positive length. Split the first side into lengths $x$ and 3, and the second into $x$ and 2. The four smaller rectangles have areas $x^2$, $2x$, $3x$ and 6 square units. Their combined area is

$$(x+3)(x+2)=x^2+2x+3x+6=x^2+5x+6.$$

A text description of the same diagram is a two-by-two table: row lengths $x,3$, column lengths $x,2$, and each cell equal to its row length times its column length. All four cells are needed. Keeping only $x^2$ and 6 would leave out two strips of the rectangle.

The picture motivates the four terms, but its positive-length interpretation does not describe negative $x$. To justify the identity for every real $x$, use distributivity:

$$(x+3)(x+2)=x(x+2)+3(x+2)=x^2+2x+3x+6.$$

Every step is licensed by real arithmetic, so the identity holds beyond the inputs represented by the picture. The domain of a geometric story and the domain of an algebraic identity can differ. State which claim you are making instead of silently extending the picture.

<a id="section-333-worked-example-a-square-has-two-cross-terms"></a>
### Worked example: a square has two cross terms {#section-335-worked-example-a-square-has-two-cross-terms}

A square with side $u+v$, for positive lengths $u,v$, splits into one $u$-by-$u$ square, two $u$-by-$v$ rectangles and one $v$-by-$v$ square. Consequently,

$$(u+v)^2=u^2+uv+vu+v^2=u^2+2uv+v^2.$$

The two middle products come from different pieces even though their areas are equal. The algebraic expansion follows the same multiplication rule for arbitrary real $u,v$. At $u=3,v=2$, the square has area 25; the terms give $9+12+4=25$. The shorter expression $u^2+v^2$ would give 13 and miss both strips.

There are cases where the shorter and longer expressions happen to agree, such as $v=0$. That does not rescue the general claim. A universal identity must handle every allowed pair, while a counterexample needs only one pair where it fails.

<a id="section-343-factoring-makes-shared-structure-visible"></a>
## Factoring makes shared structure visible {#section-345-factoring-makes-shared-structure-visible}

Expanding and factoring describe the same expression in different forms. To factor $18a^2b+12ab^2$, notice that both terms contain a coefficient divisible by 6 and at least one factor of each letter. Pulling out $6ab$ gives

$$18a^2b+12ab^2=6ab(3a+2b).$$

The check is structural: multiply $6ab$ by each term inside. This gives $18a^2b$ and $12ab^2$, exactly the original addends. The identity remains true when $a=0$ or $b=0$, because both sides then have value zero. Factoring itself did not divide the final statement's domain by a variable.

A factored form need not be unique. The expression $6x+12$ can be written as $6(x+2)$, $3(2x+4)$ or $-6(-x-2)$. All are identities over the real numbers. The first exposes the greatest positive integer factor of the two coefficients, while the others can be useful for a different purpose. There is no need to declare the other correct forms false just because a particular convention was requested.

If a problem asks for an expression in a chosen form, distinguish that presentation requirement from mathematical equivalence. For instance, $2(3x+6)$ is equivalent to $6x+12$, but it has not extracted the full common integer factor from the remaining bracket. Expanding checks equality; inspecting the remaining coefficients checks whether the requested factoring step is finished.

<a id="section-355-deriving-the-difference-of-squares-identity"></a>
## Deriving the difference-of-squares identity {#section-357-deriving-the-difference-of-squares-identity}

The difference-of-squares rule is another consequence of the four-product expansion:

$$(a+b)(a-b)=a^2-ab+ba-b^2.$$

Real multiplication is commutative, so $ab=ba$ and the middle terms cancel. Therefore $(a+b)(a-b)=a^2-b^2$ for every real $a,b$. The minus sign in the second bracket is essential; replacing it by a plus sign would make the middle terms add.

For example,

$$(3x+2)(3x-2)=9x^2-4.$$

The two middle products are $-6x$ and $6x$, whose sum is zero. This explains the shortcut rather than merely naming it. It also explains why a sum of squares does not follow the same rule. With $a=3,b=1$, $a^2+b^2=10$, whereas $(a+b)(a-b)=8$. The proposed sum-of-squares identity fails at that pair.

A picture of a large square with a smaller square removed can suggest the difference of areas when $a>b>0$. Its cut-and-rearrange interpretation has positive-length assumptions. The algebraic derivation above supplies the wider real-number identity, including equality, negative inputs and zero. A useful representation can have a narrower story than the formula it helps us discover.

<a id="section-371-factoring-a-fraction-keeps-its-exclusions"></a>
## Factoring a fraction keeps its exclusions {#section-373-factoring-a-fraction-keeps-its-exclusions}

Consider the expression

$$R(x)=\\frac{x^2-9}{x-3}.$$

The denominator requires $x\\ne3$. On that domain the difference-of-squares identity gives

$$R(x)=\\frac{(x-3)(x+3)}{x-3}=x+3.$$

The cancellation is multiplication by the reciprocal of the nonzero factor $x-3$. At $x=3$ that reciprocal does not exist, and the original expression has the undefined form $0/0$. The expression $x+3$ alone has a value there, but the simplification must retain the original exclusion.

This matters even when a simplified form is used in a later question. If we solve $R(x)=8$, the retained domain is $x\\ne3$ and the simplified equation gives $x=5$. Substitution in the original yields $(25-9)/(5-3)=16/2=8$. If instead the target were 6, the simplified equation would give $x=3$, which the domain excludes. The original problem then has no solution. A candidate from a simplified formula is not permission to redefine its original denominator.

Cancellation across addition is a different and invalid move. For $x\\ne0$,

$$\\frac{x+6}{x}=\\frac{x}{x}+\\frac6x=1+\\frac6x.$$

We cannot cancel the $x$ in only the first addend and then discard the denominator under 6. At $x=2$, the original value is 4, agreeing with $1+6/2$. Replacing the expression by the constant 7 would fail at that input. The distributive law for division divides every addend by the common nonzero denominator.

<a id="section-391-when-a-small-number-of-checks-can-settle-a-restricted-c"></a>
## When a small number of checks can settle a restricted claim {#section-393-when-a-small-number-of-checks-can-settle-a-restricted-c}

Several agreeing values do not prove an unrestricted identity. There is an important qualification: a finite check can be a proof when a separate argument shows that it covers all possibilities in a precisely restricted class.

Suppose we already know that two expressions have the forms $ax+b$ and $cx+d$, with fixed real coefficients. If they agree at $x=0$, then $b=d$. If they also agree at $x=1$, then $a+b=c+d$, so subtracting the equal constants gives $a=c$. Both coefficients now agree, and therefore the expressions agree for every real $x$. The proof uses the known linear forms and real-arithmetic rules, not an expectation that two successful tests will probably continue.

Without the restriction to those forms, the conclusion fails. Compare $x+2$ with $x+2+x(x-1)$. At zero and one the extra product is zero, so both checks agree. At $x=2$, the first value is 4 and the second is 6. The new term changes the rule outside the two checked inputs.

A table containing only the pairs $(0,2)$ and $(1,3)$ cannot tell us by itself whether the intended formula was the linear one or this different one. A graph drawn through two plotted points has the same limitation unless straightness is part of the model. The question “What kind of rule has been assumed?” is therefore part of a proof, rather than an optional comment after it.

<a id="section-401-splitting-a-zero-case-before-dividing"></a>
## Splitting a zero case before dividing {#section-403-splitting-a-zero-case-before-dividing}

Consider the equation

$(x-2)(x+1)=5(x-2),\\qquad x\\in\\mathbb R.$

Both sides have a factor $x-2$, but it may be zero. A complete solution can handle two cases. If $x=2$, both sides are zero, so this is a solution. If $x\\ne2$, division by the nonzero common factor gives $x+1=5$, hence $x=4$. The original sides at $x=4$ are $2\\cdot5=10$ and $5\\cdot2=10$, so that candidate also works.

The cases “$x=2$” and “$x\\ne2$” cover every real input. In the second case the equation steps are reversible, so there are no other solutions there. Together they give exactly the two solutions 2 and 4. Simply cancelling the factor at the start would have lost the first.

We can also subtract the right side first and factor:

$(x-2)\\bigl((x+1)-5\\bigr)=0,\\qquad (x-2)(x-4)=0.$

Over the real numbers a zero product has a zero factor: if the first factor were nonzero, dividing by it would force the second to be zero. The two linear conditions again give $x=2$ or $x=4$. This argument is a way of preserving exceptional cases; it does not require a general method for solving quadratic equations.

Factoring an expression and cancelling a factor have different contracts. The identity $(x-2)(x+1)-5(x-2)=(x-2)(x-4)$ holds for every real $x$, including 2. Dividing by $x-2$ is permitted only in the case where it is nonzero. Keeping those statements distinct prevents a correct identity from licensing an invalid equation step.

<a id="section-419-choose-a-form-for-the-question-being-asked"></a>
## Choose a form for the question being asked {#section-421-choose-a-form-for-the-question-being-asked}

Equivalent forms can display different information. For $A(x)=(x+3)(x+2)=x^2+5x+6$, the product form displays two side lengths in the rectangle story, and the expanded form displays how the area depends on powers of $x$. Neither is universally “simpler.” To evaluate at $x=7$, the product gives $10\\cdot9=90$ with little writing; the expanded form gives $49+35+6=90$ and is equally correct.

In a price model, the expanded form may make a fixed charge easier to read. Suppose the stated count-domain is $n=1,2,3,\\ldots$ and a supplier's charge in pounds is $3(2n+5)-2(n-1)$. Expanding gives $4n+17$. This shows a constant increase of £4 when the count rises by one. The formal value at zero would be £17, but zero is outside the stated ordering domain; calling that value an actual zero-order bill would add an unsupported business rule.

Finally, distinguish an expression identity from the conditions needed to use it. The identity $x^2-9=(x-3)(x+3)$ has no real-input exclusions. Dividing it by $x-3$ creates an exclusion. Taking the product form as a geometric area creates length restrictions. Solving an equation made from it selects particular inputs. A clear explanation records each change of question, so equivalent writing does not conceal a change of meaning.

<a id="section-427-practice-extensions"></a>

## Summary

<a id="section-273-looking-back-and-forward"></a>
This chapter focused on equivalence: testing it, creating it through expansion, and recovering it through factorisation. We collected like terms, handled negative signs carefully, and recognised the difference of two squares.

In the next chapter, **Simplification Strategies**, we will combine these skills into a systematic approach. We will learn when to expand, when to factorise, and how to simplify complex expressions step by step without losing terms or signs.

<a id="section-277-further-development-identities-forms-and-domains"></a>

<a id="section-561-summary"></a>
Equivalent expressions agree for every input in their stated common domain. Expansion and factorisation give general reasons for agreement; substitution can check a case or supply a counterexample, and cancelled denominators retain their exclusions.

**Where next.** Continue with [Algebra and Functions](/books/library-book-algebra-and-functions/) to study expressions, equations and functions at the next level. Use its stated preparation to choose your starting chapter.

<!-- Linked resource: library:book-algebra-and-functions -->

## Exercises {#section-113-practice-exercises}

<a id="section-113-exercise-1"></a>
### Exercise 1 {#section-115-exercise-1}
Simplify $7m + 4n - 3m + 2n$.

<details>
<summary>Hint 1</summary>

**Hint.** Group terms only when their letter parts agree.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Collect the two m contributions and the two n contributions separately.

</details>

<details>
<summary>Solution</summary>

**Solution.** Collect like terms:

$$(7m - 3m) + (4n + 2n) = 4m + 6n.$$

</details>

<a id="section-138-exercise-2"></a>
### Exercise 2 {#section-140-exercise-2}
Expand $-4(3x - 2y + 5)$.

<details>
<summary>Hint 1</summary>

**Hint.** The negative multiplier applies to every term inside the bracket.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Track each product sign before combining anything.

</details>

<details>
<summary>Solution</summary>

**Solution.**

$$-4(3x - 2y + 5) = -12x + 8y - 20.$$

</details>

<a id="section-163-exercise-3"></a>
### Exercise 3 {#section-165-exercise-3}
Factorise $15p + 25q$.

<details>
<summary>Hint 1</summary>

**Hint.** Find a positive common numerical factor.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Divide each term by that same factor to identify the bracket.

</details>

<details>
<summary>Solution</summary>

**Solution.** The greatest common factor is 5:

$$15p + 25q = 5(3p + 5q).$$

</details>

<a id="section-188-exercise-4"></a>
### Exercise 4 {#section-190-exercise-4}
Factorise $x^{2} - 16$.

<details>
<summary>Hint 1</summary>

**Hint.** Recognize the subtraction of two squares.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Write sixteen as a square and use the sum-and-difference factors.

</details>

<details>
<summary>Solution</summary>

**Solution.** This is a difference of squares:

$$x^{2} - 16 = (x + 4)(x - 4).$$

</details>

<a id="section-213-exercise-5"></a>
### Exercise 5 {#section-215-exercise-5}
Show that $(x + 2)^{2}$ is not equivalent to $x^{2} + 4$ by choosing a suitable test value.

<details>
<summary>Hint 1</summary>

**Hint.** A universal equivalence can be disproved by one permitted input.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Choose a nonzero input and evaluate the original square as a whole, including its cross term.

</details>

<details>
<summary>Solution</summary>

**Solution.** Test with $x = 1$:
- $(1 + 2)^{2} = 3^{2} = 9$.
- $1^{2} + 4 = 5$.

Since $9 \\neq 5$, the expressions are not equivalent. The correct expansion is $(x + 2)^{2} = x^{2} + 4x + 4$.

</details>

<a id="section-240-exercise-6"></a>
### Exercise 6 {#section-242-exercise-6}
A rectangle has length $(2x + 3)$ metres and width $(x + 1)$ metres, where $x$ is a dimensionless real number. State the allowed values of $x$. Write and simplify an expression for its perimeter, then factorise the result.

<details>
<summary>Hint 1</summary>

**Hint.** Lengths of both sides must be positive.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Intersect the two side-length restrictions, then add two lengths and two widths and collect like terms.

</details>

<details>
<summary>Solution</summary>

**Solution.** Both lengths must be positive: $2x+3>0$ requires $x>-3/2$, and $x+1>0$ requires $x>-1$. Together they give the story's domain $x>-1$.

The perimeter in metres is

$$P = 2(2x + 3) + 2(x + 1) = 4x + 6 + 2x + 2 = 6x + 8.$$

Factorising gives $P=2(3x+4)$ metres. The distributive property establishes the equality of these expressions throughout $x>-1$.

Check with the allowed input $x=2$: the length is 7 metres and the width 3 metres, so the perimeter is 20 metres. The formula gives $6(2)+8=20$ metres as well. This checks that input; the identity above justifies all allowed inputs.

</details>

<a id="section-271-looking-back-and-forward"></a>

<a id="section-429-practice-extensions"></a>
### Exercise 7 — AS-07-E07 — compare claims over a domain {#section-433-as-07-e07-compare-claims-over-a-domain}

Let $A(t)=(t+4)(t-4)$, $B(t)=t^2-16$ and $D(t)=(t-4)^2$, with real input $t$. Prove that $A$ and $B$ are equivalent over this domain. Give a counterexample to equivalence of $B$ and $D$, then find every real input at which their values do agree. Explain why that agreement does not establish equivalence over the real numbers.

<details>
<summary>Hint 1</summary>

**Hint.** Expand the two products without choosing a numerical input.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For the equality of B and D, solve the resulting equation; a single agreement is different from an identity.

</details>



<a id="section-450-as-07-e08-simplify-and-retain-the-excluded-input"></a>
### Exercise 8 — AS-07-E08 — simplify and retain the excluded input {#section-452-as-07-e08-simplify-and-retain-the-excluded-input}

Let $R(x)=(x^2-4)/(x-2)$. State its domain and simplify it without enlarging that domain. Is it the same all-real-input rule as $S(x)=x+2$? Solve $R(x)=5$ and check in the original expression. What happens to the candidate obtained from $R(x)=4$?

<details>
<summary>Hint 1</summary>

**Hint.** Record the forbidden denominator value before cancellation.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Cancel a common factor only on that domain, and test every solved candidate against the original denominator.

</details>



<a id="section-469-as-07-e09-read-a-supplier-s-charge-in-two-forms"></a>
### Exercise 9 — AS-07-E09 — read a supplier's charge in two forms {#section-471-as-07-e09-read-a-supplier-s-charge-in-two-forms}

For positive whole count $n$, a supplier states a charge in pounds of $C_1(n)=3(2n+5)-2(n-1)$. Another description is $C_2(n)=4n+17$, and a third is $C_3(n)=4(n+17)$. Determine which descriptions are equivalent on the ordering domain, using a general reason and a counterexample where needed. Find the allowed count that gives a £45 charge under $C_1$. Explain what $4n+17$ says about increasing an allowed order by one, and what it does not establish about an order of zero.

<details>
<summary>Hint 1</summary>

**Hint.** Expand each proposed description on the stated count domain.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use coefficient comparison for a general equality and one permitted order for a counterexample; retain the restriction at zero.

</details>



<a id="section-488-solutions-to-practice-extensions"></a>

<a id="section-535-a-further-practice-problem"></a>
<a id="section-535-exercise-10"></a>
### Exercise 10 {#section-537-exercise-10}
<a id="equivalent-expressions-ex-10"></a>

For real $x>0$, let $A(x)=(x+4)(x+1)-x(x+3)$. Find an equivalent simplified expression on this domain, solve $A(x)=12$, and check the permitted solution in the original products.

<details>
<summary>Hint 1</summary>

**Hint.** Expand each product separately before applying the subtraction between them.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Collect the remaining like terms, solve the resulting linear equation, and retain the domain restriction.

</details>
<details>
<summary>Solution</summary>

**Solution.** Expanding gives $A(x)=(x^2+5x+4)-(x^2+3x)=2x+4$ for every $x>0$. Subtraction applies to both terms of the second bracket. The equation $A(x)=12$ is therefore equivalent, on the same domain, to $2x+4=12$. It gives $2x=8$ and $x=4$, which is positive and hence permitted. In the original expression, $A(4)=(8)(5)-(4)(7)=40-28=12$. The cancellation of the quadratic terms is an algebraic identity, not an inference from this single check.

</details>

<a id="section-559-summary"></a>

## Solutions {#section-490-solutions-to-practice-extensions}

<a id="section-490-as-07-e07-solution"></a>
### AS-07-E07 — solution {#section-492-as-07-e07-solution}

<details>
<summary>Solution</summary>

**Solution.**

Distributivity gives $A(t)=t^2-4t+4t-16=t^2-16=B(t)$ for every real $t$. No division or root is used, so no real inputs need excluding.

At $t=0$, $B(0)=-16$, while $D(0)=16$, disproving equivalence on the real domain. To find their coincidences, expand $D(t)=t^2-8t+16$ and solve $t^2-16=t^2-8t+16$. Subtracting $t^2$ gives $-16=-8t+16$; subtracting 16 and dividing by $-8$ gives $t=4$. All steps are reversible, and both values at 4 are zero. Thus 4 is the only coincidence. Agreement at one input cannot replace the every-input requirement for equivalence.

</details>

<a id="section-503-as-07-e08-solution"></a>
### AS-07-E08 — solution {#section-505-as-07-e08-solution}

<details>
<summary>Solution</summary>

**Solution.**

The denominator requires $x\\ne2$. On that domain, $x^2-4=(x-2)(x+2)$, so $R(x)=x+2$ after cancellation of the nonzero factor $x-2$. The expressions agree on their common domain $\\mathbb R\\setminus\\{2\\}$. However, $S$ is defined at 2 and $R$ is not, so they do not have the same domain as rules on all real inputs.

For $R(x)=5$, the retained-domain equation gives $x+2=5$, hence $x=3$. It is allowed and checks as $(3^2-4)/(3-2)=5/1=5$. For target 4 the simplified equation gives $x=2$, which is excluded. Therefore the original equation $R(x)=4$ has no solution. Assigning the simplified value at 2 would change the original rule.

</details>

<a id="section-516-as-07-e09-solution"></a>
### AS-07-E09 — solution {#section-518-as-07-e09-solution}

<details>
<summary>Solution</summary>

**Solution.**

Expanding gives $C_1(n)=6n+15-2n+2=4n+17=C_2(n)$. Distributivity proves agreement for every real input, and in particular for every positive whole count in the ordering domain. Their equivalence does not rest on testing several orders.

The third description expands to $4n+68$ and is not equivalent. At the allowed count $n=1$, $C_1(1)=3(7)-2(0)=21$, while $C_3(1)=72$. For a £45 charge, solve $4n+17=45$, giving $4n=28$ and $n=7$. It is allowed; the original expression checks as $3(19)-2(6)=57-12=45$ pounds.

For consecutive allowed counts, $C_2(n+1)-C_2(n)=4$, so adding one kit increases this modelled charge by £4. Although the formula has formal value 17 at zero, the ordering domain excludes zero. It does not establish that the supplier accepts such an order or issues an actual £17 zero-order bill.

</details>



<a id="section-533-a-further-practice-problem"></a>
`;export{e as default};