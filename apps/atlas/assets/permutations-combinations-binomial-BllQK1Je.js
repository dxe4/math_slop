var e=`---
parent_id: book-discrete-mathematics-proof-counting-structure
chapter_id: permutations-combinations-binomial
title: "Permutations, Combinations, and Binomial Coefficients"
level: undergraduate
license: CC BY-SA 4.0
---

# Permutations, Combinations, and Binomial Coefficients

## Decide what the outcome remembers

A museum has nine volunteers and needs three people for a display team. Choosing a team is different from assigning a guide, a photographer, and a recorder. The first outcome remembers membership; the second remembers who holds each role. A third question might allow the same person to perform several tasks. All three questions mention nine people and three choices, but they count different sets.

This chapter turns that distinction into reliable formulas. We derive permutations and combinations from explicit descriptions, prove identities by classifying subsets, and prove the binomial theorem in two ways. We then distinguish repeated-symbol arrangements from unordered selections with repetition. Restrictions belong to the definition of the counted objects: a formula valid for distinct objects or unlimited supplies need not survive when those assumptions change.

## Preparation and conventions

The prerequisite is [Introduction to Proof](/books/library-book-introduction-to-proof/), particularly its work on [sets](/books/library-book-introduction-to-proof/sets/), [functions](/books/library-book-introduction-to-proof/functions/), and [induction](/books/library-book-introduction-to-proof/induction/). The preceding chapter, [Counting by Bijection, Decomposition, and Inclusion–Exclusion](counting-bijections-inclusion-exclusion.md), supplies the sum and product rules and the principle that a bijection preserves a finite count. We use those principles while developing the formulas in more detail here.

All sets being counted are finite. Write $\\mathbb N_0=\\{0,1,2,\\ldots\\}$ and $[n]=\\{1,\\ldots,n\\}$, with $[0]=\\varnothing$. The notation $|A|$ means the number of elements of $A$. An empty list is one object, and an empty product equals one. Define $0!=1$ and, for positive integers $n$, define $n!=n(n-1)\\cdots1$. These conventions record the unique way to make no choices; they are necessary for formulas at the boundaries.

Before counting, say when two outcomes are equal. Are the positions labeled? Are the objects distinct? Can a choice repeat? Is only a collection of multiplicities remembered? Those questions determine the set before any arithmetic begins. A quotient of two integers is a justified count only after we explain why the descriptions have been grouped into equally sized classes.

## Ordered selections without repetition

**Definition 2.1 (Ordered selection and permutation).** An ordered $k$-selection from a set $A$ is a list $(a_1,\\ldots,a_k)$ of distinct members of $A$. A permutation of an $n$-element set is such a list of length $n$, containing every member exactly once. Write $P(n,k)$ for the number of ordered $k$-selections from an $n$-element set.

Equivalently, an ordered selection is an injective function from the position set $[k]$ to $A$. This explains both parts of the definition: positions are distinguishable, and injectivity prevents reuse of an object. A permutation can also be described as a bijection from the position set onto $A$. After an ordering of $A$ is fixed, this agrees with the usual view of a permutation as a bijection of a set to itself.

**Theorem 2.2 (Ordered-selection count).** For integers $0\\le k\\le n$,

$$
P(n,k)=n(n-1)\\cdots(n-k+1)=\\frac{n!}{(n-k)!}.
$$

In particular, there are $n!$ permutations of $n$ distinct objects. If $k>n$, no ordered selection without repetition exists, so $P(n,k)=0$.

*Proof.* After $i$ positions have been filled, exactly $i$ distinct objects have been used. Every partial selection therefore has $n-i$ choices for the next position. The product rule gives the displayed product for $k$ positions. Cancelling the final $(n-k)!$ factors of $n!$ gives the quotient. For $k=0$, the product is empty and counts the unique empty list. For $k>n$, distinct entries in $k$ positions would require more than $n$ available objects, which is impossible. ∎

Without the distinctness condition, each of $k$ positions independently chooses from all $n$ objects, giving $n^k$ when $n\\ge1$. A code may repeat a symbol even though an assignment of distinct office holders cannot repeat a person. When the alphabet is empty, there are no positive-length words and one length-zero word; these cases can be stated directly without relying on an ambiguous numerical use of $0^0$.

### Worked example 2.3 (Roles and a team)

Return to the nine volunteers. Assign a guide, photographer, and recorder, with different volunteers holding the three roles. The positions are the named roles, so there are

$$
P(9,3)=9\\cdot8\\cdot7=504
$$

assignments. A particular assignment is recovered uniquely by reading those three roles in the stated order. Swapping the guide and photographer changes the outcome.

If the outcome remembers only the three-person team, each team has $3!=6$ assignments of its members to the roles. Thus there are $504/6=84$ teams. This division is valid because every team has exactly six role assignments. If one person could hold several roles, there would instead be $9^3=729$ assignments, and forgetting the roles would not group them into classes of constant size: a single-person team and a three-person team have different numbers of descriptions.

## Why unordered selection introduces a factorial

**Theorem 2.4 (Equal-fibre division).** Let $X,Y$ be finite sets, and let $\\pi:X\\to Y$ be onto. If each $y\\in Y$ has exactly $q$ preimages, where $q$ is a fixed positive integer, then

$$
|X|=q|Y|.
$$

*Proof.* The sets $\\pi^{-1}(\\{y\\})$ partition $X$: every element has exactly one image, so it belongs to one fibre and no other. The sum rule gives $|X|=\\sum_{y\\in Y}q=q|Y|$. ∎

The word “fixed” is the crucial hypothesis. Forgetting information is often onto, but its fibres need not be equally large. One may divide by a factorial only when every retained outcome has that same number of ordered descriptions. The theorem explains the familiar division rule while identifying exactly what must be checked in a new problem.

**Definition 2.5 (Combination and binomial coefficient).** For $n\\in\\mathbb N_0$ and $0\\le k\\le n$, a $k$-combination is a $k$-element subset of an $n$-element set. Its number is denoted $\\binom nk$. For integer $k<0$ or $k>n$, define $\\binom nk=0$.

**Theorem 2.6 (Subset count).** For $0\\le k\\le n$,

$$
\\binom nk=\\frac{n!}{k!(n-k)!}.
$$

*Proof.* Map every ordered $k$-selection to its set of entries. This map is onto the $k$-subsets. Each such subset has exactly $k!$ orderings by Theorem 2.2, so equal-fibre division gives $P(n,k)=k!\\binom nk$. Substitute the formula for $P(n,k)$ and divide by the positive integer $k!$. The argument includes $k=0$: both the empty list and the empty subset are unique. ∎

In particular, $\\binom n0=\\binom nn=1$. An impossible subset size gives zero by the counting definition, not by substituting a negative integer into a factorial. The factorial quotient is a formula on $0\\le k\\le n$; the zero convention extends the binomial notation beyond that range.

## Subsets give identities and restriction methods

**Theorem 2.7 (Complement symmetry and Pascal's identity).** For integers $0\\le k\\le n$,

$$
\\binom nk=\\binom n{n-k}.
$$

For $n\\ge1$ and every integer $k$,

$$
\\binom nk=\\binom{n-1}k+\\binom{n-1}{k-1}.
$$

*Proof.* Complementation maps a $k$-subset of a fixed $n$-element set to an $(n-k)$-subset. Taking the complement again returns the original subset, so this map is a bijection, proving symmetry.

For Pascal's identity, distinguish one element $a$ of the ground set. Every $k$-subset either omits $a$, in which case it is a $k$-subset of the other $n-1$ elements, or contains $a$, in which case removing $a$ leaves a $(k-1)$-subset of those other elements. Both correspondences are bijections. The two classes are disjoint and exhaustive, so their counts add. At boundary or impossible values of $k$, the same classification has empty classes exactly where the zero convention says it does. ∎

Pascal's identity constructs each row of binomial coefficients from the previous row, beginning with $\\binom00=1$. Its proof does more than supply an arithmetic shortcut: it teaches a useful way to handle a restriction by distinguishing an element and separating mutually exclusive cases. Complementation similarly translates a difficult large subset choice into a smaller omitted subset choice.

### Worked example 2.8 (Exact and minimum representation)

A group contains six experienced staff and four new staff. How many four-person teams contain exactly two new staff? How many contain at least one new member?

For exactly two new staff, choose two from the four new people and two from the six experienced people:

$$
\\binom42\\binom62=6\\cdot15=90.
$$

The pair of selected subsets determines one team uniquely, and every qualifying team gives one such pair. Multiplication is therefore justified. We do not add a further factor for ordering team members, because the outcome is an unordered team.

For at least one new member, count all four-person teams and remove those consisting entirely of experienced staff:

$$
\\binom{10}4-\\binom64=210-15=195.
$$

This complement counts teams with one, two, three, or four new members, including each once. Trying to choose one new member first and then any three remaining people would count some teams more often than others: a team with three new members would have three choices for which one was designated first. The restriction changes the fibre sizes, so that proposed description cannot be used without correction.

## The binomial theorem from choices and from induction

**Theorem 2.9 (Binomial theorem).** For every integer $n\\ge0$, the following identity of polynomials in commuting variables $a,b$ holds:

$$
(a+b)^n=\\sum_{k=0}^n\\binom nk a^{n-k}b^k.
$$

Consequently it holds after substituting any real values for $a,b$. Zeroth powers here are the constant polynomial one, and the zeroth power of the whole polynomial is also one.

*Combinatorial proof.* Write the left side as a product of $n$ labeled factors $(a+b)$. Distributivity produces one term for each choice of either $a$ or $b$ from every factor. A term with $k$ copies of $b$ and $n-k$ copies of $a$ becomes $a^{n-k}b^k$, since the variables commute. Such a choice is specified uniquely by the $k$ factor positions contributing $b$, so there are $\\binom nk$ choices. Grouping like monomials gives the identity. When $n=0$, there is one empty choice and its contribution is the constant one, so the proof includes the base case. ∎

*Algebraic proof by induction.* For $n=0$, both polynomials equal one. Suppose the identity holds for some $n\\ge0$, and multiply its right side by $a+b$. The endpoint monomials are $a^{n+1}$ and $b^{n+1}$, each with coefficient one. For an interior exponent $1\\le k\\le n$, the monomial $a^{n+1-k}b^k$ receives coefficient $\\binom nk$ from multiplication by $a$, and coefficient $\\binom n{k-1}$ from multiplication by $b$. Pascal's identity makes their sum $\\binom{n+1}k$. Together with the two endpoint coefficients, these are exactly the coefficients in the claimed formula for $n+1$. If $n=0$, there are no interior terms and the multiplication gives $a+b$ directly. Thus induction proves the theorem for every nonnegative integer $n$. ∎

The proofs explain the same coefficients in different ways. The first treats expansion terms as choices indexed by subsets; the second shows how the coefficients propagate under multiplication. Neither proof requires derivatives or infinite series. The nonnegative integer exponent is a hypothesis: fractional and negative powers do not generally have a finite expansion of this form.

### Worked example 2.10 (Extracting a coefficient with signs)

Find the coefficient of $x^3$ in $(2-3x)^6$ without expanding the entire polynomial.

To obtain degree three, exactly three of the six factors must contribute $-3x$, while the other three contribute two. Thus the relevant term is

$$
\\binom63 2^3(-3x)^3=20\\cdot8\\cdot(-27)x^3=-4320x^3.
$$

The coefficient is negative $4320$. The choice count alone is twenty; it must be multiplied by the numerical contributions from the selected terms. Since three negative factors are used, the sign is negative. The degree condition is what identifies the index: in a different expression such as $(2-x^2)^6$, choosing three nonconstant terms would give degree six instead of degree three.

**Corollary 2.11 (Row sums and marked subsets).** For $n\\ge0$,

$$
\\sum_{k=0}^n\\binom nk=2^n.
$$

For $n\\ge1$,

$$
\\sum_{k=0}^n(-1)^k\\binom nk=0,
\\qquad
\\sum_{k=0}^n k\\binom nk=n2^{n-1}.
$$

*Proof.* Substituting $a=b=1$ into the binomial theorem proves the row sum. Substituting $a=1,b=-1$ proves the alternating sum for positive $n$. At $n=0$, that alternating sum is one, which is why the stated zero identity excludes it.

For the final identity, count pairs $(S,s)$ where $S$ is a subset of $[n]$ and $s\\in S$ is distinguished. Grouping by $|S|=k$ gives $\\sum_k k\\binom nk$. Alternatively, choose $s$ in $n$ ways and then choose any subset of the remaining $n-1$ elements to join it, in $2^{n-1}$ ways. Both constructions describe the same pairs uniquely. ∎

These identities retain their counting meaning. The row sum counts all subsets grouped by size. The alternating identity also has a bijective explanation: toggling one fixed element pairs each even-sized subset with one odd-sized subset. A fixed element exists when $n\\ge1$, but not for the empty ground set. The exceptional case therefore has both an algebraic and a combinatorial explanation.

## Repeated symbols: fix the multiplicities first

**Definition 2.12 (Multiset and multiplicities).** Given $r\\ge1$ distinct labeled types, a multiset of total size $n$ records nonnegative integer multiplicities $m_1,\\ldots,m_r$ with $m_1+\\cdots+m_r=n$. Copies of one type are indistinguishable; different types remain distinct. An arrangement of that multiset is a word whose positions are ordered and whose type multiplicities are exactly the given numbers.

A multiset and its arrangements are different objects. The multiset containing two copies of $A$ and one of $B$ has three arrangements, $AAB$, $ABA$, and $BAA$. If only multiplicities are remembered, all three describe one object. Fixing the multiplicities before counting arrangements makes the size of this forgetful fibre constant.

**Theorem 2.13 (Fixed-multiplicity arrangements).** If $m_1,\\ldots,m_r\\in\\mathbb N_0$ sum to $n$, then the number of words with those multiplicities is

$$
\\frac{n!}{m_1!m_2!\\cdots m_r!}.
$$

*Proof.* Temporarily label each of the $n$ copies, making every copy distinct. There are $n!$ labeled arrangements. Erasing the temporary labels maps these arrangements onto the visible words. For any fixed word, the labels of type one can be assigned to its $m_1$ positions in $m_1!$ ways, independently of the $m_2!$ assignments for type two, and so on. Every visible word therefore has exactly $\\prod_i m_i!$ preimages. Equal-fibre division proves the formula. Zero multiplicities contribute $0!=1$, and when $n=0$ the formula counts the unique empty word. ∎

The quotient is called a multinomial coefficient. One can also obtain it by successively choosing which $m_1$ positions contain the first type, which $m_2$ of the remaining positions contain the second, and so on. The product of binomial coefficients telescopes to the same quotient. The same position choices show why this number is the coefficient of $x_1^{m_1}\\cdots x_r^{m_r}$ in $(x_1+\\cdots+x_r)^n$.

### Worked example 2.14 (A repeated-letter restriction)

How many distinct arrangements are there of the letters in TATTOO? How many have the two copies of $O$ adjacent?

There are six positions with three copies of $T$, two of $O$, and one of $A$. Thus the total is

$$
\\frac{6!}{3!2!1!}=60.
$$

For adjacent copies of $O$, replace the pair by one block $OO$. Arrange the five units $T,T,T,A,OO$, giving $5!/3!=20$ words. Expanding the unique block recovers exactly one original word, and every word with adjacent copies of $O$ has exactly one such block. Hence this is a bijection, not just a suggestive abbreviation. The nonadjacent count is $60-20=40$.

The block argument used the fact that there are exactly two copies of $O$. With three copies and a requirement that at least one pair be adjacent, choosing a pair to merge can describe a run of three in more than one way. The uniqueness of the code would need to be reconsidered. A familiar block technique is valid only when its encoding is unambiguous.

## Choosing a multiset with unlimited supplies

**Theorem 2.15 (Stars and bars).** For integers $n\\ge0$ and $r\\ge1$, the number of nonnegative integer solutions of

$$
m_1+\\cdots+m_r=n
$$

is $\\binom{n+r-1}{r-1}$. Equivalently, this counts size-$n$ multisets from $r$ distinct labeled types with unlimited supplies.

*Proof.* Encode a multiplicity vector by $n$ identical stars and $r-1$ identical bars. The number of stars before the first bar is $m_1$, between successive bars is the next multiplicity, and after the last bar is $m_r$. Bars may be adjacent or occur at either end, allowing zero multiplicities. Reading segment sizes reverses the encoding, so it is a bijection. A string of length $n+r-1$ is determined by its $r-1$ bar positions, giving the binomial count. For $r=1$ there are no bars and one possible vector; for $n=0$ there are only bars and again one vector. ∎

For positive multiplicities, subtract one from each variable. If $n\\ge r$, the resulting nonnegative total is $n-r$, so the count is $\\binom{n-1}{r-1}$; if $n<r$, it is zero. More generally, prescribed lower bounds $m_i\\ge\\ell_i\\ge0$ are handled by $y_i=m_i-\\ell_i$. With $L=\\sum_i\\ell_i$, the count is zero for $n<L$ and otherwise $\\binom{n-L+r-1}{r-1}$. These substitutions are bijections because the fixed lower bounds can be subtracted and restored uniquely.

Upper bounds are different: unrestricted bar placement does not enforce them. Finite stock, such as at most two copies of one type, requires removing the forbidden solutions or using another encoding. Labelled types are another hypothesis. Distributing objects into four named boxes is not the same as recording an unordered partition into at most four parts. The later chapter on integer partitions studies that different equality rule.

### Worked example 2.16 (An unlimited supply and one upper bound)

A shop sells four distinct types of card, with unlimited copies of each. How many size-six selections are possible if order is ignored? How many use every type? Separately, how many use at most two copies of the first type, with no minimum requirements?

Writing $m_i$ for the number of cards of type $i$, the unrestricted equation is $m_1+\\cdots+m_4=6$, so there are $\\binom93=84$ selections. To use every type, subtract one of each, leaving total two and giving $\\binom53=10$ selections.

For the separate upper-bound question, remove selections with $m_1\\ge3$. Subtracting three from $m_1$ leaves a nonnegative equation with total three, so the forbidden count is $\\binom63=20$. The answer is $84-20=64$. The cases using every type and using at most two of the first type are different questions; the subtraction in the last calculation starts from all eighty-four selections, not from the ten positive-multiplicity selections.

## Mistakes that reveal a model mismatch

“Order does not matter” is not by itself permission to divide by the length factorial. The ordered words $AA,AB,BA,BB$ become three multisets after order is forgotten. Their fibre sizes are one, two, and one. Dividing four by $2!$ gives two, an incorrect count. Unrestricted multisets require a multiplicity model, while fixed-multiplicity arrangements admit the factorial division proved above.

Likewise, distinguish a code from a positive integer written in digits. A length-six decimal code may begin with zero; a six-digit positive integer may not. The first position then has a different choice count, and choosing it affects the later choices when repetition is forbidden. A restriction should be reflected in the construction, not patched by an unexplained percentage at the end.

Finally, rotations, reflections, and unlabelled boxes change what equality means. This chapter's word positions are labeled in linear order, and its types or recipients are distinguishable. Counting necklaces up to rotation or partitions into unlabelled parts requires a new model. Small examples can expose a faulty formula, but a complete count rests on the specified bijection, partition, or equal-fibre argument.

## Exercises

### Exercise 2.1
<a id="permutations-combinations-binomial-ex-1"></a>

From eight distinct symbols, count length-four words with repetition allowed, length-four words without repetition, and four-element subsets. Explain which count can be obtained by dividing an ordered count by $4!$. What is each corresponding count when the requested length or subset size is zero?

<details>
<summary>Hint 1</summary>

**Hint.** Decide whether each successive position retains all eight choices or loses choices already used.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Forgetting order gives equally sized fibres only for lists of distinct selected symbols. The empty choice is itself one object.

</details>
<details>
<summary>Solution</summary>

**Solution.** With repetition there are $8^4=4096$ words. Without repetition there are $P(8,4)=8\\cdot7\\cdot6\\cdot5=1680$. The subset count is $\\binom84=1680/4!=70$, because each four-element subset has exactly twenty-four orderings. The repeated-word count cannot be divided by twenty-four to count unrestricted multisets: repeated symbols produce different numbers of orderings. In each zero-size case there is exactly one object, respectively the empty word, the empty ordered selection, or the empty subset.

</details>

### Exercise 2.2
<a id="permutations-combinations-binomial-ex-2"></a>

How many six-digit positive integers have no repeated digit? Explain why the first and second positions have the same number of choices for different reasons.

<details>
<summary>Hint 1</summary>

**Hint.** Zero is forbidden only in the first position; thereafter it is available unless already used.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** After selecting a nonzero first digit, nine of the ten digits remain. Each later position loses one more available digit.

</details>
<details>
<summary>Solution</summary>

**Solution.** The first digit has nine choices because zero is excluded. The second has nine choices because one digit has been used, while zero is now allowed. The remaining counts are eight, seven, six, and five. Their product is $9\\cdot9\\cdot8\\cdot7\\cdot6\\cdot5=136080$. Every valid integer has exactly one such digit sequence. Starting with ten choices would count shorter integers represented with a leading zero, which are outside the requested set.

</details>

### Exercise 2.3
<a id="permutations-combinations-binomial-ex-3"></a>

A group has four specialists and six general members, all distinct. Count four-person committees containing at least two specialists. State disjoint cases that justify your sum.

<details>
<summary>Hint 1</summary>

**Hint.** Partition committees by their exact number of specialists rather than marking two specialists inside an otherwise unrestricted committee.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The possible specialist counts are two, three, and four. In each case choose the remaining members from the six general members.

</details>
<details>
<summary>Solution</summary>

**Solution.** The disjoint counts are $\\binom42\\binom62=90$, $\\binom43\\binom61=24$, and $\\binom44\\binom60=1$. Therefore the total is $115$. Every committee has exactly one of these specialist counts, and each is determined by its specialist and general-member subsets. Choosing a distinguished pair of specialists first would overcount committees with three or four specialists by different factors, so it would not directly count the requested objects.

</details>

### Exercise 2.4
<a id="permutations-combinations-binomial-ex-4"></a>

For integers $0\\le k\\le n$, prove

$$
\\sum_{j=k}^{n}\\binom jk=\\binom{n+1}{k+1}
$$

by classifying subsets according to their largest element.

<details>
<summary>Hint 1</summary>

**Hint.** Start with the $(k+1)$-subsets of $[n+1]$. Such a subset is nonempty and has a unique largest member.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** If its largest element is $j+1$, choose its other $k$ elements from the first $j$ integers. Determine the possible values of $j$.

</details>
<details>
<summary>Solution</summary>

**Solution.** A $(k+1)$-subset has largest element between $k+1$ and $n+1$. Write that element as $j+1$, where $k\\le j\\le n$. Removing it gives a $k$-subset of $[j]$, and conversely every such subset becomes a unique qualifying set after $j+1$ is appended. There are $\\binom jk$ sets in that class. The classes are disjoint and exhaustive because every nonempty finite subset has exactly one largest element. Summing their sizes proves the identity, including $k=0$, where each class contains one singleton.

</details>

### Exercise 2.5
<a id="permutations-combinations-binomial-ex-5"></a>

Find the coefficient of $x^4$ in $(1-2x)^7$ and the coefficient of $x^5$ in $(x^2+1)^6$. Justify the relevant index or its absence without expanding either whole polynomial.

<details>
<summary>Hint 1</summary>

**Hint.** Track the degree contributed by each choice of a nonconstant term.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The first product contributes one power of $x$ per selected nonconstant factor; the second contributes two. Check the parity of the requested degree.

</details>
<details>
<summary>Solution</summary>

**Solution.** In the first polynomial, choose $-2x$ from exactly four of seven factors. The coefficient is $\\binom74(-2)^4=35\\cdot16=560$. In the second polynomial, every expansion term has degree $2j$ for some integer $0\\le j\\le6$. No such degree equals five, so its coefficient is zero. Selecting five nonconstant terms there would create degree ten, not degree five; the binomial index counts factor choices rather than automatically equalling the final exponent.

</details>

### Exercise 2.6
<a id="permutations-combinations-binomial-ex-6"></a>

For integers $0\\le r\\le k\\le n$, prove

$$
\\binom nk\\binom kr=\\binom nr\\binom{n-r}{k-r}
$$

by counting pairs of nested subsets.

<details>
<summary>Hint 1</summary>

**Hint.** Specify pairs $(R,K)$ with $R\\subseteq K\\subseteq[n]$, $|R|=r$, and $|K|=k$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Count by choosing $K$ first, and then by choosing $R$ first. In the second construction the extra elements of $K$ lie outside $R$.

</details>
<details>
<summary>Solution</summary>

**Solution.** Choosing $K$ first gives $\\binom nk$ possibilities, and then choosing $R$ inside it gives $\\binom kr$. Choosing $R$ first gives $\\binom nr$ possibilities. Its complement has $n-r$ elements, from which the other $k-r$ members of $K$ are chosen in $\\binom{n-r}{k-r}$ ways. Both constructions give each nested pair exactly once, so their products agree. The hypotheses ensure that all subset sizes are permitted; boundary cases such as $r=0$ use the unique empty subset.

</details>

### Exercise 2.7
<a id="permutations-combinations-binomial-ex-7"></a>

Count the distinct arrangements of the letters in LEVEL. How many begin and end with $L$? Treat identical letters as indistinguishable and explain any factorial divisions.

<details>
<summary>Hint 1</summary>

**Hint.** Record the multiplicity of each letter, rather than treating all five copies as distinct.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** If both endpoints are $L$, those copies are fixed and only the three interior positions remain to be filled.

</details>
<details>
<summary>Solution</summary>

**Solution.** There are two copies of $L$, two of $E$, and one of $V$. The total is $5!/(2!2!)=30$. Each visible word has exactly $2!2!$ temporary labellings, justifying the quotient. Fixing both endpoints as $L$ leaves the interior multiset $E,E,V$, with $3!/2!=3$ arrangements. There is no additional factor for swapping the endpoint copies, because the copies are indistinguishable and the visible endpoints are already fixed.

</details>

### Exercise 2.8
<a id="permutations-combinations-binomial-ex-8"></a>

There are five distinct types of token, each with unlimited supply. Count unordered selections of seven tokens: (a) without further restrictions; (b) using every type; (c) using every type and at most two copies of each type.

<details>
<summary>Hint 1</summary>

**Hint.** Use five multiplicities summing to seven. For positive multiplicities, first place one of every type.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** In part (c), after the first copy of each type is placed, each type can receive at most one additional token. Choose which types get the two remaining tokens.

</details>
<details>
<summary>Solution</summary>

**Solution.** Part (a) gives $\\binom{11}4=330$ by stars and bars. In (b), subtracting one from every multiplicity leaves total two, giving $\\binom64=15$. In (c), the two remaining tokens must go to different types, since no type can exceed two in all. Choosing those two types gives $\\binom52=10$. Applying unrestricted stars and bars to part (c) would also count the five possibilities where one type receives both extra tokens and reaches multiplicity three.

</details>

### Exercise 2.9
<a id="permutations-combinations-binomial-ex-9"></a>

A proposed method counts size-two multisets from two types $A,B$ by counting ordered words and dividing by $2!$. List the words and the multisets, identify every fibre of the forgetful map, and explain the failure. Give the correct count for $r\\ge1$ types.

<details>
<summary>Hint 1</summary>

**Hint.** Compare how many distinct orderings a repeated pair and a pair of different types have.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The correct general count is a stars-and-bars count with total two and $r$ multiplicities, not a fixed-multiplicity word count.

</details>
<details>
<summary>Solution</summary>

**Solution.** The ordered words are $AA,AB,BA,BB$. The visible multisets are $AA$, $AB$, and $BB$, whose fibres are respectively $\\{AA\\}$, $\\{AB,BA\\}$, and $\\{BB\\}$. Their sizes are one, two, and one, so equal-fibre division by two is invalid. It gives two instead of the correct three. For $r$ types, stars and bars gives $\\binom{r+1}{r-1}=\\binom{r+1}2$. This equals $r+\\binom r2$, also obtained by separating repeated pairs from pairs of distinct types.

</details>

### Exercise 2.10
<a id="permutations-combinations-binomial-ex-10"></a>

Distribute ten identical counters among four labeled boxes. The first box must contain at least two, the second at least one, and the third at most three; the fourth has no further restriction. Find the number of distributions with all conditions satisfied.

<details>
<summary>Hint 1</summary>

**Hint.** Remove the mandatory counters from the first two boxes before counting the residual nonnegative solutions.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Count residual solutions with no upper restriction, then remove those putting at least four counters into the third box by subtracting four there.

</details>
<details>
<summary>Solution</summary>

**Solution.** Write $y_1=x_1-2$ and $y_2=x_2-1$. The equation becomes $y_1+y_2+x_3+x_4=7$, with all variables nonnegative and $x_3\\le3$. Ignoring that upper bound gives $\\binom{10}3=120$ solutions. Forbidden solutions have $x_3\\ge4$; replacing $x_3$ by $z_3=x_3-4$ gives a nonnegative equation with total three, counted by $\\binom63=20$. Thus the required count is $120-20=100$. The shifts are reversible, and each forbidden residual solution is removed once. Labelled boxes are essential: exchanging box contents is generally a different distribution.

</details>

## Sources

This chapter's prose, worked examples, and ten exercises are original and licensed CC BY-SA 4.0. The preceding local chapter, [Counting by Bijection, Decomposition, and Inclusion–Exclusion](counting-bijections-inclusion-exclusion.md), introduces the product rule, equal-block division, binomial coefficients, and multisets in a broader survey. The present chapter develops those shared classical tools with complete proofs and additional restrictions; it does not claim them as new results.

For a complementary author-written treatment, see Oscar Levin, *Discrete Mathematics: An Open Introduction*, fourth edition, [3.4, Combinations and Permutations](https://discrete.openmathbooks.org/dmoi4/sec_counting-combperm.html), [3.5, Counting Multisets](https://discrete.openmathbooks.org/dmoi4/sec_counting-multisets.html), and [3.6, Combinatorial Proofs](https://discrete.openmathbooks.org/dmoi4/sec_comb-proofs.html). OpenStax, *Algebra and Trigonometry 2e*, [13.5, Counting Principles](https://openstax.org/books/algebra-and-trigonometry-2e/pages/13-5-counting-principles), offers further introductory comparison. These verified links provide parallel reading; no distinctive examples, exercises, or wording have been copied. This chapter uses British spelling.

## Summary

An ordered selection without repetition has $n!/(n-k)!$ outcomes; forgetting order divides by $k!$ because each $k$-subset has exactly that many orderings. Complementation and a distinguished element prove symmetry and Pascal's identity. Those subset counts become coefficients in the binomial theorem, whose distributive-choice and induction proofs explain both the formula and its boundary cases.

Fixed-multiplicity words and unrestricted multisets require different constructions. Temporary labels justify the multinomial quotient, while stars and bars counts nonnegative multiplicities for labeled types with unlimited supply. Lower bounds can be shifted away, but upper bounds and changes in what counts as equal require further reasoning. In [Pigeonhole and Double Counting](pigeonhole-double-counting.md), we will use these precise descriptions to force repetitions and prove identities by counting one finite set in two ways.
`;export{e as default};