
# Sequences, Series, and the Binomial Theorem

## From individual terms to general statements

A row of seats might contain three more seats than the row before it. A repeated scaling might make each length half the previous length. Expanding successive powers of a binomial produces rows of coefficients with another kind of pattern. All three situations involve quantities indexed by whole numbers, but spotting a few terms is only the beginning. We want formulas whose index ranges are clear, sums that include exactly the intended terms, and proofs that cover every allowed index.

This chapter introduces sequences, finite arithmetic and geometric sums, a simple infinite geometric series, and mathematical induction. It ends by proving the binomial theorem for every nonnegative integer exponent. Required preparation is the algebra of powers from [Surds and Indices](surds-indices.md), multiplication of polynomials from [Polynomials and the Factor Theorem](polynomials-factor-theorem.md), and exponential patterns from [Exponential Functions](exponential-functions.md). [Logarithms](logarithms.md) are useful when finding how many multiplicative steps meet a threshold, though the main proofs below do not depend on them.

All terms and parameters are real unless an integer restriction is stated. We use $\mathbb N_0=\{0,1,2,\ldots\}$ and $\mathbb N=\{1,2,3,\ldots\}$. Naming the starting index matters: the first five terms of a sequence indexed from zero end at index four, not index five.

## Sequences are functions with specified indices

**Definition 12.1 (Sequence).** A real sequence is a function from a specified set of consecutive integer indices into $\mathbb R$. An infinite sequence usually has domain $\mathbb N$ or $\mathbb N_0$; a finite sequence might have domain $\{1,\ldots,N\}$ for a fixed positive integer $N$. We write $a_n$ for the value at index $n$.

Thus $a_n=2n+1$ for $n\in\mathbb N_0$ describes $1,3,5,7,\ldots$, whereas the same formula for $n\in\mathbb N$ starts at $3$. A sequence is a function, but its domain is discrete. The real function $f(x)=2x+1$ also has values at $x=1/2$ or $x=\sqrt2$; the sequence indexed by $\mathbb N_0$ has no terms at those indices. Joining plotted sequence points by a line can suggest a pattern, but does not change the index set.

An explicit formula gives a term directly from its index. A recurrence gives a new term from earlier terms and needs initial data. For instance,

$$
a_0=4,\qquad a_{n+1}=2a_n+1\quad(n\in\mathbb N_0)
$$

produces $4,9,19,39,\ldots$. Starting instead at $a_0=1$ produces $1,3,7,15,\ldots$, although the recurrence is unchanged. To generate a well-defined sequence, specify enough starting values for the recurrence being used.

A short displayed list does not prove a unique continuation. The rule $a_n=n$ and the rule $b_n=n+(n-1)(n-2)(n-3)$ agree at $n=1,2,3$, yet $a_4=4$ and $b_4=10$. A problem that asks for a general term must give a rule or an assumption about the type of sequence, not merely insist that one visible pattern must continue.

**Definition 12.2 (Arithmetic and geometric sequences).** An arithmetic sequence indexed from one satisfies $a_{n+1}=a_n+d$ for every $n\ge1$, with fixed common difference $d$. Its terms are

$$
a_n=a_1+(n-1)d\qquad(n\ge1).
$$

A geometric sequence satisfies $a_{n+1}=r a_n$ for every $n\ge1$, with fixed multiplier $r$. Its terms are

$$
a_n=a_1r^{n-1}\qquad(n\ge1).
$$

The arithmetic formula follows by adding $d$ exactly $n-1$ times; the geometric formula follows by multiplying by $r$ exactly $n-1$ times. These statements can also be proved by the induction method introduced below. Here $r^0=1$ means the empty product in the first-term formula, including when $r=0$. In that case the sequence is $a_1,0,0,\ldots$. Defining a geometric sequence by multiplication includes this case without asking for undefined ratios such as $0/0$.

If consecutive terms are nonzero, the quotient $a_{n+1}/a_n$ identifies $r$. Negative multipliers are allowed: $6,-3,3/2,-3/4,\ldots$ is geometric with $r=-1/2$. The sequence $1,4,9,16,\ldots$, defined by $a_n=n^2$, is neither arithmetic nor geometric: its successive differences are $3,5,7,\ldots$ and its first two ratios are $4$ and $9/4$. Checking a pattern against a definition is stronger than relying on its visual appearance.

## Summation notation and arithmetic totals

**Definition 12.3 (Finite sum and partial sum).** If $m\le n$ are integers, then

$$
\sum_{k=m}^{n}a_k=a_m+a_{m+1}+\cdots+a_n.
$$

There are $n-m+1$ terms. The index $k$ is local to the sum: replacing it consistently by $j$ leaves the number unchanged. For a sequence indexed from one, its $n$th partial sum is $S_n=\sum_{k=1}^n a_k$. We also put $S_0=0$, the empty sum.

The limits of a sum determine which terms are included. For instance $\sum_{k=2}^5(3k-1)$ contains four terms, not five. A parameter outside the summation index remains fixed: in $\sum_{k=1}^n c k$, the same $c$ multiplies every term. Distributing and regrouping finite sums gives

$$
\sum_{k=1}^n(ca_k+b_k)=c\sum_{k=1}^n a_k+\sum_{k=1}^n b_k.
$$

This is just distributivity applied to a finite list; it requires no limiting argument.

**Theorem 12.4 (Arithmetic sum).** If $a_k=a_1+(k-1)d$ for $k\ge1$, then for every integer $n\ge1$,

$$
S_n=\frac n2(a_1+a_n)
=\frac n2\bigl(2a_1+(n-1)d\bigr).
$$

*Proof.* Write the same finite sum in forward and reverse order:

$$
S_n=a_1+a_2+\cdots+a_n,
\qquad S_n=a_n+a_{n-1}+\cdots+a_1.
$$

At position $k$ the paired terms have sum

$$
a_k+a_{n+1-k}
=\bigl(a_1+(k-1)d\bigr)+\bigl(a_1+(n-k)d\bigr)
=2a_1+(n-1)d=a_1+a_n.
$$

Adding the two displayed sums therefore gives $2S_n=n(a_1+a_n)$. Division by $2$ proves the first formula, and substitution for $a_n$ proves the second. This proof works for odd $n$ too: we have paired two copies of the sum, so a middle term simply appears twice. ∎

**Example 12.5 (Rows and the number of additions).** A small theatre has $14$ seats in its first row, with $3$ more seats in each subsequent row, and $18$ rows. Find the last row and the total number of seats.

The index is the row number, from $1$ to $18$. Thus $a_1=14$, $d=3$, and $a_{18}=14+17\cdot3=65$. There are seventeen increases between the first and eighteenth rows. Applying Theorem 12.4 gives

$$
S_{18}=\frac{18}{2}(14+65)=9\cdot79=711.
$$

So the last row contains $65$ seats and the theatre contains $711$ seats. The units distinguish a single row count from the total. Replacing seventeen increases by eighteen would overcount every term formula by one increment and give a wrong total.

## Finite geometric sums

**Theorem 12.6 (Geometric sum, including the exceptional multiplier).** Let $a,r\in\mathbb R$ and let $n\ge1$ be an integer. With the empty-power convention in Definition 12.2,

$$
S_n=a+ar+\cdots+ar^{n-1}
=\begin{cases}
\displaystyle\frac{a(1-r^n)}{1-r},&r\ne1,\\[6pt]
na,&r=1.
\end{cases}
$$

*Proof.* Multiply the finite sum by $r$ to obtain

$$
rS_n=ar+ar^2+\cdots+ar^n.
$$

Subtracting cancels each intermediate term and gives $S_n-rS_n=a-ar^n$. If $r\ne1$, divide by the nonzero number $1-r$ to get the stated quotient. If $r=1$, division is unavailable; instead, the original sum consists of $n$ copies of $a$, giving $na$. No restriction on the size or sign of $r$ was used in the finite calculation. ∎

The numerator has $r^n$, although the last included term has exponent $n-1$. The extra exponent arises from the shifted sum in the proof. The equivalent form $a(r^n-1)/(r-1)$ is also valid when $r\ne1$; changing both signs leaves the quotient unchanged. Changing only one sign does not.

**Example 12.7 (Alternation in a finite total).** Find the first six terms and their sum for the geometric sequence with $a_1=48$ and $r=-1/2$.

Multiplying successively gives $48,-24,12,-6,3,-3/2$. The first term has exponent zero, so the sixth term has exponent five. Since $r\ne1$, the sum is

$$
S_6=\frac{48(1-(-1/2)^6)}{1-(-1/2)}
=\frac{48(1-1/64)}{3/2}
=\frac{63}{2}.
$$

Adding directly gives $48-24+12-6+3-3/2=63/2$, in agreement. Alternating signs do not prevent use of the finite formula. By contrast, if the multiplier had been $1$, the sum would be $6\cdot48$, found from the separate case rather than a quotient with zero denominator.

## What an infinite geometric series means

A sequence lists terms; a series concerns their sums. An infinite series is not a finite addition with a hidden last term. We ask whether its finite partial sums approach one fixed real number.

**Definition 12.8 (Sum of an infinite series).** We write $\sum_{k=0}^{\infty}a r^k=S$ if the partial sums $S_n=\sum_{k=0}^{n-1}a r^k$ approach $S$ as $n$ grows. Here “approach” means that for every chosen positive tolerance $\varepsilon$, all sufficiently large $n$ satisfy $|S-S_n|<\varepsilon$.

This definition makes the number of included terms explicit: $S_n$ contains $n$ terms indexed from $0$ to $n-1$. The symbol $\infty$ describes unbounded indices, not a real number that can be substituted into a finite formula.

**Theorem 12.9 (Infinite geometric sum and remainder).** If $|r|<1$, then for every real $a$,

$$
\sum_{k=0}^{\infty}ar^k=\frac{a}{1-r},
\qquad
\frac{a}{1-r}-S_n=\frac{ar^n}{1-r}.
$$

In particular, the absolute remainder is $|a|\,|r|^n/|1-r|$.

*Proof.* Since $|r|<1$, we have $r\ne1$, so the finite sum formula applies. Subtracting $S_n=a(1-r^n)/(1-r)$ from $a/(1-r)$ gives the stated exact remainder. We now justify that it approaches zero.

The standard geometric limit property is $q^n\to0$ for $0\le q<1$. Here is an elementary justification of the property. If $q=0$, it is immediate for $n\ge1$. If $0<q<1$, put $h=1/q-1>0$, so $q=1/(1+h)$. Repeated multiplication gives $(1+h)^n\ge1+nh$: it is true for $n=1$, and multiplication by $1+h$ takes $1+nh$ to $1+(n+1)h+nh^2\ge1+(n+1)h$. Hence

$$
0<q^n\le\frac{1}{1+nh}.
$$

Given any positive tolerance, choosing $n$ large enough makes the right side smaller than it; this uses the ordinary property that positive integer multiples of $h$ eventually exceed any prescribed real number. Thus $q^n\to0$. Taking $q=|r|$ makes the absolute remainder tend to zero after multiplication by the fixed constant $|a|/|1-r|$. This proves the series sum according to Definition 12.8. ∎

The hypothesis $|r|<1$ belongs to the infinite result, not to the finite formula. For a nonzero $a$, a series with $|r|\ge1$ cannot converge: if $S_n$ approached $S$, then its difference $S_n-S_{n-1}$ would approach zero, since $|S_n-S_{n-1}|\le|S_n-S|+|S_{n-1}-S|$. But that difference is $ar^{n-1}$, whose magnitude is at least $|a|$ when $|r|\ge1$. This contradiction includes $r=1$ and $r=-1$. The exceptional zero sequence, with $a=0$, has sum zero for every multiplier; a convergence claim must not forget that case.

**Example 12.10 (A sum with a guaranteed error).** Let $S=3+1+1/3+1/9+\cdots$. Find its sum and determine how many initial terms guarantee an error below $1/100$.

Here $a=3$ and $r=1/3$, so $S=3/(1-1/3)=9/2$. After $n$ terms, the exact remainder is

$$
S-S_n=\frac{9}{2}\left(\frac13\right)^n.
$$

For $n=5$ this is $9/(2\cdot243)=1/54>1/100$. For $n=6$ it is $9/(2\cdot729)=1/162<1/100$. Each further term divides the remainder by $3$, so six terms suffice, and five do not. This is a guarantee from a remainder formula, not a guess based on a calculator displaying similar decimals.

## Induction: a base and a general step

**Principle 12.11 (Mathematical induction).** To prove a statement $P(n)$ for every integer $n\ge n_0$, prove $P(n_0)$ and prove that for every integer $k\ge n_0$, the assumption $P(k)$ implies $P(k+1)$.

The base starts the argument. The general implication carries it from any allowed stage to the next, so it reaches every integer at or beyond the base. The inductive assumption is local: in the step, assume the claim at an arbitrary $k$ and derive the claim at $k+1$. It is not permission to assume the desired claim at $k+1$. Checking ten numerical cases establishes ten statements; it does not establish the general implication.

**Example 12.12 (A complete induction proof).** Prove $1+3+\cdots+(2n-1)=n^2$ for every integer $n\ge1$.

The base $n=1$ says $1=1^2$, which is true. For the step, let $k\ge1$ be arbitrary and assume $\sum_{j=1}^k(2j-1)=k^2$. The next partial sum is the previous one plus the term with index $k+1$:

$$
\sum_{j=1}^{k+1}(2j-1)
=\sum_{j=1}^{k}(2j-1)+(2(k+1)-1)
=k^2+2k+1=(k+1)^2.
$$

This is precisely the claim at $k+1$. Both the base and the general step hold, so induction proves the formula for every integer $n\ge1$. The argument identifies the new term before simplifying, which prevents a common error of adding $2k-1$ a second time.

## Pascal's identity and binomial coefficients

**Definition 12.13 (Factorial and binomial coefficient).** For an integer $n\ge1$, set $n!=1\cdot2\cdots n$, and set $0!=1$. For integers $n\ge0$ and $0\le j\le n$, define

$$
\binom nj=\frac{n!}{j!(n-j)!}.
$$

In particular, $\binom n0=\binom nn=1$. The lower index indicates a choice of $j$ positions from $n$ positions, when a counting interpretation is useful. Here the factorial formula alone suffices for the algebraic proof. There are no factorials of negative integers in this definition.

**Lemma 12.14 (Pascal's identity).** For integers $n\ge1$ and $1\le j\le n$,

$$
\binom n{j-1}+\binom nj=\binom{n+1}j.
$$

*Proof.* Put both factorial expressions over the denominator $j!(n+1-j)!$. All its factorial arguments are nonnegative in the stated range. Then

$$
\begin{aligned}
\binom n{j-1}+\binom nj
&=\frac{n!j}{j!(n+1-j)!}
 +\frac{n!(n+1-j)}{j!(n+1-j)!}\\
&=\frac{n!(n+1)}{j!(n+1-j)!}
=\frac{(n+1)!}{j!((n+1)-j)!}
=\binom{n+1}j.
\end{aligned}
$$

This proves the identity for the interior entries. The edge entries in each row remain $1$ by Definition 12.13. ∎

Starting with the row $1$ for $n=0$, write $1$ at each edge and add neighbouring entries to obtain the next row. This gives the rows $1,1$, then $1,2,1$, then $1,3,3,1$, then $1,4,6,4,1$. Pascal's identity explains the construction for every row, rather than only for the few rows shown. The factorial formula also gives the symmetry $\binom nj=\binom n{n-j}$ by exchanging the two denominator factors.

## The finite binomial theorem

**Theorem 12.15 (Binomial theorem).** For all real $x,y$ and every nonnegative integer $n$,

$$
(x+y)^n=\sum_{j=0}^n\binom nj x^{n-j}y^j.
$$

This is a finite polynomial identity. A factor with exponent zero is the empty product $1$, even when its base is zero; this is the polynomial convention needed when evaluating the constant terms. Thus at $n=0$ both sides are the constant polynomial $1$.

*Proof by induction on $n$.* For the base $n=0$, the sum has the single term $\binom00x^0y^0=1$, equal to the left side under the stated convention.

For the inductive step, let $k\ge0$ be an arbitrary integer, and assume the identity holds at exponent $k$ for all real $x,y$. Multiply it by $x+y$ and distribute:

$$
\begin{aligned}
(x+y)^{k+1}
&=x\sum_{j=0}^k\binom kj x^{k-j}y^j
 +y\sum_{j=0}^k\binom kj x^{k-j}y^j\\
&=\sum_{j=0}^k\binom kj x^{k+1-j}y^j
 +\sum_{j=0}^k\binom kj x^{k-j}y^{j+1}.
\end{aligned}
$$

In the second sum put $i=j+1$. Its new index runs from $1$ to $k+1$, and its terms become $\binom k{i-1}x^{k+1-i}y^i$. Rename $i$ to $j$ after this change. The first sum supplies the edge term $x^{k+1}$ at $j=0$; the second supplies the edge term $y^{k+1}$ at $j=k+1$. For every interior $j$ with $1\le j\le k$, the coefficient of $x^{k+1-j}y^j$ is

$$
\binom kj+\binom k{j-1}=\binom{k+1}j
$$

by Pascal's identity. If $k=0$ there are no interior indices, and the same calculation gives simply $x+y$. For all $k\ge0$, the two edge coefficients equal $1=\binom{k+1}0=\binom{k+1}{k+1}$. Hence the entire expression is

$$
\sum_{j=0}^{k+1}\binom{k+1}j x^{k+1-j}y^j,
$$

which is exactly the identity at exponent $k+1$. Induction proves the theorem for every integer $n\ge0$. ∎

This theorem does not assert a finite expansion for a negative or fractional exponent. For example, replacing $n$ by $1/2$ in a four-term pattern is not licensed by the proof. Infinite binomial expansions require further definitions and convergence conditions; they are outside the present statement.

**Example 12.16 (Signs and coefficients).** Expand $(2x-1)^4$ and find the coefficient of $x^2$.

Use the theorem with the two terms $2x$ and $-1$. The coefficient row is $1,4,6,4,1$, so

$$
\begin{aligned}
(2x-1)^4
&=(2x)^4+4(2x)^3(-1)+6(2x)^2(-1)^2\\
&\quad+4(2x)(-1)^3+(-1)^4\\
&=16x^4-32x^3+24x^2-8x+1.
\end{aligned}
$$

Thus the requested coefficient is $24$, not $6$: the factor $2^2$ contributes as well as the binomial coefficient. At $x=0$ both forms give $1$, and at $x=1$ the expansion gives $16-32+24-8+1=1$, matching $(2-1)^4$. These checks help catch arithmetic slips; the theorem supplies the identity for every real $x$.

## Exercises

Specify the index range in every formula. For infinite sums, identify the multiplier and check the condition on its magnitude before using a sum formula.

### Exercise 12.1
<a id="sequences-series-binomial-theorem-ex-1"></a>

For $a_0=2$ and $a_{n+1}=3a_n-1$ for $n\ge0$, find the first four terms. Explain why the recurrence without $a_0$ would not determine them.

<details>
<summary>Hint 1</summary>

The first four indices are $0,1,2,3$. Start with the given value before applying the recurrence.

</details>
<details>
<summary>Hint 2</summary>

Compute each new term by tripling the preceding one and subtracting one. Compare with a different choice of $a_0$.

</details>
<details>
<summary>Solution</summary>

The first four terms are $a_0=2$, $a_1=3(2)-1=5$, $a_2=3(5)-1=14$, and $a_3=3(14)-1=41$. The recurrence describes how to move forward, but it does not choose the initial value. For example, starting at $a_0=1$ gives $1,2,5,14,\ldots$, a different sequence obeying the same recurrence. Initial data therefore belong to the definition of this particular sequence.

</details>

### Exercise 12.2
<a id="sequences-series-binomial-theorem-ex-2"></a>

An arithmetic sequence indexed from one has $a_4=11$ and $a_{10}=29$. Find $d$, $a_1$, and an explicit formula for $a_n$.

<details>
<summary>Hint 1</summary>

There are six increments from index four to index ten.

</details>
<details>
<summary>Hint 2</summary>

Use $a_{10}-a_4=6d$ and then $a_4=a_1+3d$.

</details>
<details>
<summary>Solution</summary>

Subtracting the two known terms gives $29-11=6d$, so $d=3$. Then $11=a_1+3\cdot3$, giving $a_1=2$. Therefore $a_n=2+3(n-1)=3n-1$ for every integer $n\ge1$. Substitution at $n=4$ gives $11$, and at $n=10$ gives $29$, so the formula meets both given conditions. The six increments, rather than either index alone, determine the difference.

</details>

### Exercise 12.3
<a id="sequences-series-binomial-theorem-ex-3"></a>

Evaluate $\sum_{k=4}^{20}(2k+1)$ and state the number of terms.

<details>
<summary>Hint 1</summary>

Find the values of the summand at the two endpoint indices. They form an arithmetic list.

</details>
<details>
<summary>Hint 2</summary>

There are $20-4+1$ terms. Use their average endpoint value times their number.

</details>
<details>
<summary>Solution</summary>

The first included value is $2(4)+1=9$, the last is $2(20)+1=41$, and the common difference is $2$. There are $17$ terms. Their sum is $17(9+41)/2=17\cdot25=425$. The lower index is four, so the expression does not include the earlier values $3,5,7$. Keeping the actual endpoints avoids applying a first-twenty-terms formula to the wrong list.

</details>

### Exercise 12.4
<a id="sequences-series-binomial-theorem-ex-4"></a>

A geometric sequence has $a_1=5$ and $r=2$. Find $a_8$ and $S_8$. Then find $S_8$ when $r=1$ with the same first term.

<details>
<summary>Hint 1</summary>

The eighth term contains seven multiplications by the multiplier. The sum includes eight terms.

</details>
<details>
<summary>Hint 2</summary>

Use $a_8=5\cdot2^7$ and the finite geometric sum formula. Treat $r=1$ separately.

</details>
<details>
<summary>Solution</summary>

For $r=2$, the eighth term is $5\cdot128=640$. The sum is $S_8=5(1-2^8)/(1-2)=5\cdot255=1275$. These are different quantities: $640$ is one term and $1275$ adds all eight. When $r=1$, every term is $5$, so $S_8=8\cdot5=40$. Substituting $r=1$ into the quotient formula would create zero divided by zero and is not a valid calculation.

</details>

### Exercise 12.5
<a id="sequences-series-binomial-theorem-ex-5"></a>

Find $\sum_{k=0}^{\infty}8(-1/3)^k$. Give an exact expression for the error after the first $n$ terms and its absolute value.

<details>
<summary>Hint 1</summary>

The multiplier is negative, but its magnitude is less than one.

</details>
<details>
<summary>Hint 2</summary>

Use $S=8/(1+1/3)$ and $S-S_n=8(-1/3)^n/(1+1/3)$.

</details>
<details>
<summary>Solution</summary>

Since $|-1/3|<1$, the infinite geometric theorem applies and gives $S=8/(4/3)=6$. With $n$ terms indexed $0$ through $n-1$, the remainder is $S-S_n=6(-1/3)^n$. Its absolute value is $6/3^n$. The sign alternates: even partial-sum counts lie below the sum and odd counts lie above it. In both cases the magnitude tends to zero, which is the convergence needed for the infinite sum.

</details>

### Exercise 12.6
<a id="sequences-series-binomial-theorem-ex-6"></a>

A proposed argument assigns the sum $1+2+4+8+\cdots$ the value $1/(1-2)=-1$. Explain the invalid step and find its first $n$ terms' sum correctly.

<details>
<summary>Hint 1</summary>

Separate the finite geometric identity from the infinite sum theorem and compare their hypotheses.

</details>
<details>
<summary>Hint 2</summary>

The finite formula gives $(1-2^n)/(1-2)$. The factor $2^n$ cannot be discarded as $n$ grows.

</details>
<details>
<summary>Solution</summary>

The finite sum is $S_n=(1-2^n)/(1-2)=2^n-1$. It grows beyond every bound, so it does not approach $-1$ or any other real number. The proposed argument uses an infinite geometric formula whose hypothesis $|r|<1$ fails at $r=2$. The finite formula remains valid; passing to an infinite sum requires a limiting argument, and here the power term grows rather than approaching zero.

</details>

### Exercise 12.7
<a id="sequences-series-binomial-theorem-ex-7"></a>

Prove by induction that $\sum_{j=1}^n j=n(n+1)/2$ for every integer $n\ge1$.

<details>
<summary>Hint 1</summary>

Check the claim at $n=1$. For the step, add the new term $k+1$ to the assumed sum at $k$.

</details>
<details>
<summary>Hint 2</summary>

Factor $k(k+1)/2+(k+1)$ to obtain the expression required at index $k+1$.

</details>
<details>
<summary>Solution</summary>

At $n=1$, the left side is $1$ and the right side is $1\cdot2/2=1$. For an arbitrary integer $k\ge1$, assume $\sum_{j=1}^k j=k(k+1)/2$. Then $\sum_{j=1}^{k+1}j=k(k+1)/2+(k+1)=(k+1)(k+2)/2$. This is exactly the required formula with $n=k+1$. Since the base holds and the general implication has been proved, induction establishes the identity for all integers $n\ge1$.

</details>

### Exercise 12.8
<a id="sequences-series-binomial-theorem-ex-8"></a>

Calculate $\binom63$ and use Pascal's identity to obtain $\binom73$ from two entries in row six. State the entries you use.

<details>
<summary>Hint 1</summary>

Use the factorial definition to calculate the central entry in row six.

</details>
<details>
<summary>Hint 2</summary>

Pascal's identity gives $\binom73=\binom62+\binom63$. Compute the remaining row-six entry.

</details>
<details>
<summary>Solution</summary>

The definition gives $\binom63=6!/(3!3!)=(6\cdot5\cdot4)/(3\cdot2\cdot1)=20$. Also $\binom62=6!/(2!4!)=6\cdot5/2=15$. Pascal's identity therefore gives $\binom73=15+20=35$. The two contributing row-six entries have lower indices two and three; the next row's index three is not obtained by doubling a single entry.

</details>

### Exercise 12.9
<a id="sequences-series-binomial-theorem-ex-9"></a>

Expand $(x-2)^5$ using the binomial theorem. Explain how the sign of each term is determined.

<details>
<summary>Hint 1</summary>

Use the two terms $x$ and $-2$ with the row $1,5,10,10,5,1$.

</details>
<details>
<summary>Hint 2</summary>

The general term is $\binom5j x^{5-j}(-2)^j$, so odd $j$ give negative contributions.

</details>
<details>
<summary>Solution</summary>

The theorem gives $x^5+5x^4(-2)+10x^3(-2)^2+10x^2(-2)^3+5x(-2)^4+(-2)^5$. Evaluating the powers yields $x^5-10x^4+40x^3-80x^2+80x-32$. Each sign comes from $(-2)^j$: it is positive for even $j$ and negative for odd $j$. At $x=2$ the expansion is $32-160+320-320+160-32=0$, agreeing with $(2-2)^5$; the binomial proof establishes the identity for all real $x$.

</details>

### Exercise 12.10
<a id="sequences-series-binomial-theorem-ex-10"></a>

Use the binomial theorem to prove $\sum_{j=0}^n\binom nj=2^n$ for all integers $n\ge0$. Why does the sum have $n+1$ entries?

<details>
<summary>Hint 1</summary>

Choose simple values of the two real variables so that every power in the binomial expansion becomes one.

</details>
<details>
<summary>Hint 2</summary>

Set $x=y=1$. Count integers from zero through $n$, including both endpoints.

</details>
<details>
<summary>Solution</summary>

The binomial theorem at $x=y=1$ says $(1+1)^n=\sum_{j=0}^n\binom nj1^{n-j}1^j$. Every power equals one, so the right side is $\sum_{j=0}^n\binom nj$ and the left side is $2^n$. This includes $n=0$, where both sides equal one. There are $n+1$ lower indices $0,1,\ldots,n$. Thus a power with exponent $n$ has $n+1$ entries in its coefficient row, even when later substitution causes some numerical terms to coincide.

</details>

## Summary

A sequence is a function with an explicit integer index set; a recurrence also needs initial data. Arithmetic sequences add a fixed difference, while geometric sequences multiply by a fixed factor. Finite sum formulas follow from pairing or cancellation and require careful term counts. The geometric quotient has a separate case at multiplier one. An infinite geometric sum means a limit of partial sums, and the remainder formula justifies the result when the multiplier's magnitude is less than one.

Induction joins a proved base to a general next-step implication. Pascal's factorial identity then supplies the interior coefficients needed for the full induction proof of the finite binomial theorem. These methods complete the book's passage from arithmetic laws to formulas with explicit hypotheses. They also prepare for calculus, where sequences and limits receive a broader treatment, and for further algebra, where polynomial identities and proof by induction appear repeatedly.

## Sources and acknowledgements

The sequence and finite-sum starting points were informed by Euler's existing `modules/textbooks/shared_foundations/00h-sequences-data-computation.qmd`. That module remains available with its wider treatment of data and computation. The explanations, developed examples, exercises, remainder argument, and binomial induction here are newly written for this chapter.

For further practice, see Jay Abramson et al., *Algebra and Trigonometry 2e*, OpenStax, [13.2 Arithmetic Sequences](https://openstax.org/books/algebra-and-trigonometry-2e/pages/13-2-arithmetic-sequences), [13.3 Geometric Sequences](https://openstax.org/books/algebra-and-trigonometry-2e/pages/13-3-geometric-sequences), [13.4 Series and Their Notations](https://openstax.org/books/algebra-and-trigonometry-2e/pages/13-4-series-and-their-notations), and [13.6 Binomial Theorem](https://openstax.org/books/algebra-and-trigonometry-2e/pages/13-6-binomial-theorem), consulted 13 November 2026. The linked OpenStax text is licensed CC BY-NC-SA 4.0; it is cited for further reading, and no text or figures are reproduced here. This Euler chapter is licensed CC BY-SA 4.0.
