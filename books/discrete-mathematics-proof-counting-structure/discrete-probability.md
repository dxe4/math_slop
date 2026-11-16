
# Discrete Probability

Counting describes how many objects satisfy a condition. Probability adds a rule for choosing an object and asks how much of that rule's weight falls on the desired objects. When every object has the same weight, a probability is a ratio of counts. When weights differ, the underlying set alone does not determine the answer.

This chapter asks how a finite random choice can support a rigorous conclusion. We will begin by specifying the outcomes and their weights, then examine how information changes probabilities. We will distinguish independent events from events that cannot occur together. Finally, indicators will turn complicated counts into sums, and an averaging argument will prove that certain deterministic objects exist.

The required preparation is finite sets, functions, finite sums, elementary proof, and [Counting by Bijection, Decomposition, and Inclusion–Exclusion](counting-bijections-inclusion-exclusion.md). In particular, $\binom nk$ counts unordered $k$-element subsets of an $n$-element set. No calculus or measure theory is used. Every probability space in this chapter is finite, so every sum is finite and rearranging sums requires no convergence theorem.

The modeling question comes before calculation: what exactly is chosen, and with what probabilities? A correct formula used on the wrong sample space gives the wrong answer. Conversely, a carefully stated model often makes the calculation almost inevitable.

## Outcomes, events and weights

**Definition 8.1 (Finite probability space).** A finite probability space consists of a nonempty finite set $\Omega$, called the *sample space*, and numbers $p(\omega)\ge0$ for $\omega\in\Omega$ satisfying

$$
\sum_{\omega\in\Omega}p(\omega)=1.
$$

An *outcome* is an element of $\Omega$. An *event* is a subset $A\subseteq\Omega$, and its probability is

$$
\mathbb P(A)=\sum_{\omega\in A}p(\omega).
$$

The *support* is the set of outcomes with strictly positive weight. An outcome with weight zero may be present in the written sample space, but contributes nothing to any event probability.

A *uniform* model assigns $p(\omega)=1/|\Omega|$ to every outcome. Only in that case does the definition immediately give

$$
\mathbb P(A)=\frac{|A|}{|\Omega|}.
$$

For instance, a uniform choice of an ordered pair from $\{1,\ldots,6\}^2$ models two independent fair dice. It does not make the possible sums $2,\ldots,12$ equally likely: some sums arise from more pairs than others. If outcomes are grouped together, their weights must be added, not replaced by a new assumption of equal likelihood.

**Proposition 8.2 (Basic probability rules).** For events in a finite probability space, $\mathbb P(\varnothing)=0$, $\mathbb P(\Omega)=1$, and

$$
\mathbb P(A^c)=1-\mathbb P(A).
$$

If $A\subseteq B$, then $\mathbb P(A)\le\mathbb P(B)$. For any two events,

$$
\mathbb P(A\cup B)=\mathbb P(A)+\mathbb P(B)-\mathbb P(A\cap B).
$$

For any finite list $A_1,\ldots,A_r$,

$$
\mathbb P\left(\bigcup_{i=1}^r A_i\right)
\le\sum_{i=1}^r\mathbb P(A_i).
$$

The last inequality is the *union bound*; it does not require independence.

*Proof.* The empty sum is zero, and the total of all outcome weights is one. The disjoint decomposition $\Omega=A\cup A^c$ gives the complement rule. If $A\subseteq B$, then $\mathbb P(B)=\mathbb P(A)+\mathbb P(B\setminus A)$, and the second term is nonnegative. For the two-event union, adding the probabilities counts weights in the intersection twice, so subtracting the intersection once counts every weight exactly once. Finally, in the sum of the probabilities of $A_1,\ldots,A_r$, each outcome in their union contributes its nonnegative weight at least once. In the probability of the union it contributes exactly once. Summing that comparison proves the union bound. ∎

**Example 8.3 (A random procedure with nonuniform outcomes).** Box $M$ contains one gold token and one white token. Box $N$ contains three individually labeled gold tokens and one white token. Choose a box with probability $1/2$ each, then choose uniformly among the tokens in that box. What is the probability of choosing gold?

Use six outcomes, each recording both the box and the particular token. Each token in $M$ has probability $(1/2)(1/2)=1/4$, and each token in $N$ has probability $(1/2)(1/4)=1/8$. These six weights sum to $2/4+4/8=1$. The gold event contains the gold token in $M$ and the three gold tokens in $N$, so

$$
\mathbb P(\text{gold})=\frac14+3\cdot\frac18=\frac58.
$$

Counting four gold tokens among six tokens and reporting $4/6$ would describe another experiment: choosing uniformly from all six tokens after pooling the boxes. The stated procedure chooses boxes uniformly, which gives more weight to each token in the smaller box. The sample space and the selection rule must agree.

## Conditioning on information

**Definition 8.4 (Conditional probability).** If $B$ is an event with $\mathbb P(B)>0$, define

$$
\mathbb P(A\mid B)=\frac{\mathbb P(A\cap B)}{\mathbb P(B)}.
$$

This is the probability of $A$ after retaining only outcomes in $B$ and dividing their weights by the total retained weight. Conditional probability given a probability-zero event is not defined by this formula.

The rescaled weights really form a probability model on $B$: they are nonnegative and sum to $\mathbb P(B)/\mathbb P(B)=1$. In a uniform original model, conditioning produces the familiar ratio $|A\cap B|/|B|$ when $B$ is nonempty. In a nonuniform model, original relative weights remain relevant; conditioning does not make the retained outcomes equally likely.

Rearranging the definition gives the multiplication rule

$$
\mathbb P(A\cap B)=\mathbb P(A\mid B)\mathbb P(B),
\qquad \mathbb P(B)>0.
$$

This is a general conditional rule, not an independence assumption. The order of information matters: $\mathbb P(A\mid B)$ and $\mathbb P(B\mid A)$ have different denominators and usually different values.

**Theorem 8.5 (Total probability and Bayes' rule).** Let $B_1,\ldots,B_r$ be pairwise disjoint events whose union is $\Omega$, with $\mathbb P(B_i)>0$ for every $i$. Then

$$
\mathbb P(A)=\sum_{i=1}^r
\mathbb P(A\mid B_i)\mathbb P(B_i).
$$

If also $\mathbb P(A)>0$, then for each $j$,

$$
\mathbb P(B_j\mid A)
=\frac{\mathbb P(A\mid B_j)\mathbb P(B_j)}
{\sum_{i=1}^r\mathbb P(A\mid B_i)\mathbb P(B_i)}.
$$

*Proof.* The sets $A\cap B_i$ partition $A$. Adding their probabilities and using the multiplication rule gives the first equation. For the second, the definition of conditional probability gives $\mathbb P(B_j\mid A)=\mathbb P(A\cap B_j)/\mathbb P(A)$. Substitute the multiplication rule in the numerator and the first equation in the denominator. All denominators are nonzero by the hypotheses. ∎

If a partition contains a probability-zero part, it can be omitted from these sums. Its contribution to $\mathbb P(A)$ is zero, but writing an undefined conditional probability multiplied by zero is not a legitimate substitute for omitting it.

**Example 8.6 (Which box supplied the gold token?).** Return to Example 8.3. Given that the selected token is gold, what is the probability that it came from $N$?

Let $G$ denote gold and let $N$ also denote the event that box $N$ was chosen. We have $\mathbb P(N)=1/2$, $\mathbb P(G\mid N)=3/4$, and $\mathbb P(G)=5/8$. Therefore

$$
\mathbb P(N\mid G)
=\frac{\mathbb P(G\mid N)\mathbb P(N)}{\mathbb P(G)}
=\frac{(3/4)(1/2)}{5/8}=\frac35.
$$

Before seeing the token, the two boxes were equally likely. Gold is more common in $N$, so observing gold increases its conditional probability to $3/5$. This is different from $3/4$, which describes gold after the box has already been specified. The denominator $5/8$ accounts for every way the observation could have occurred.

## Independence is not disjointness

**Definition 8.7 (Independence).** Events $A$ and $B$ are *independent* if

$$
\mathbb P(A\cap B)=\mathbb P(A)\mathbb P(B).
$$

Events $A_1,\ldots,A_r$ are *mutually independent* if the corresponding product equation holds for every nonempty subcollection. Merely checking all pairs establishes pairwise independence, which can be weaker when there are three or more events.

**Proposition 8.8 (Information and exclusion).** If $\mathbb P(B)>0$, then $A$ and $B$ are independent exactly when $\mathbb P(A\mid B)=\mathbb P(A)$. If $A$ and $B$ are disjoint, they are independent exactly when at least one of them has probability zero.

*Proof.* Under the positive-denominator condition, divide or multiply the defining equation for independence by $\mathbb P(B)$ to obtain the first equivalence. For disjoint events, $\mathbb P(A\cap B)=0$. The independence equation therefore holds exactly when $\mathbb P(A)\mathbb P(B)=0$, which for nonnegative real probabilities means that at least one is zero. ∎

Thus two disjoint events of positive probability are dependent: observing one rules out the other. Independent events can overlap. On a fair die, let $A=\{2,4,6\}$ and $B=\{3,6\}$. Their probabilities are $1/2$ and $1/3$, while the intersection $\{6\}$ has probability $1/6$, so they are independent. Independence is a property of the probability model, not a statement that two sets do not intersect or that two descriptions sound unrelated.

When several random choices are specified to be independent, the model assigns a product of weights to each sequence of choices. This justifies multiplying probabilities of events involving separate coordinates. Drawing without replacement generally has a different model: earlier draws change the available objects, so subsequent conditional probabilities change.

## Counting a uniform model

**Example 8.9 (Sampling without replacement).** Eight labelled cards contain five green cards and three orange cards. Choose uniformly among all three-card subsets. Find the probability of exactly two green cards.

There are $\binom83=56$ possible subsets. A favourable subset is formed uniquely by choosing two of the five green cards and one of the three orange cards, giving $\binom52\binom31=30$ favourable subsets. Thus

$$
\mathbb P(\text{exactly two green})
=\frac{\binom52\binom31}{\binom83}=\frac{15}{28}.
$$

We can also draw three cards in order without replacement, choosing each remaining card uniformly. Every ordered triple of distinct cards then has probability $1/(8\cdot7\cdot6)$. Each three-card subset has exactly $3!$ orderings, so this procedure induces the stated uniform subset model.

Counting ordered favourable triples gives the same answer. Choose the position of the orange card in $3$ ways, its identity in $3$ ways, and the ordered green cards in $5\cdot4$ ways. The resulting probability is $180/336=15/28$. Mixing the unordered numerator $30$ with the ordered denominator $336$ would count incompatible objects.

The successive color events are not independent. The first card is green with probability $5/8$, whereas the probability that the second is green given that the first was green is $4/7$. Both the count and this changing conditional probability describe the same without-replacement model.

**Theorem 8.10 (A binomial counting model).** Let $n\ge1$ be an integer. Suppose $n$ mutually independent trials each have success probability $p$, where $0<p<1$. If $X$ counts successes, then for $0\le k\le n$,

$$
\mathbb P(X=k)=\binom nk p^k(1-p)^{n-k}.
$$

*Proof.* Fix a particular set of $k$ successful positions. Mutual independence gives probability $p^k(1-p)^{n-k}$ for exactly that success-and-failure pattern. There are $\binom nk$ choices of successful positions, and different patterns are disjoint events. Adding their equal probabilities proves the formula. ∎

At $p=0$, $X=0$ with probability one; at $p=1$, $X=n$ with probability one. These cases can be described directly without ambiguous expressions involving $0^0$. For $n=0$, there are no trials and the count is zero. The theorem's product factors require independence, while the binomial coefficient counts positions. When $p\ne1/2$, the binary strings need not all have the same probability, even though patterns with a fixed number of successes do.

## Indicators and expectation

**Definition 8.11 (Random variable, expectation and indicator).** A real random variable on a finite probability space is a function $X:\Omega\to\mathbb R$. Its expectation is the weighted average

$$
\mathbb E[X]=\sum_{\omega\in\Omega}p(\omega)X(\omega).
$$

The *indicator* $I_A$ of an event $A$ equals $1$ on $A$ and $0$ elsewhere. Directly from the definition,

$$
\mathbb E[I_A]=\sum_{\omega\in A}p(\omega)=\mathbb P(A).
$$

An expectation is a number, not necessarily one of the variable's possible values. It may be fractional even when the variable counts objects. Nor must the expectation be the most likely value. Its role is an average over the specified model.

**Theorem 8.12 (Linearity of expectation).** Let $X_1,\ldots,X_r$ be real random variables on the same finite probability space, and let $a_1,\ldots,a_r$ be real constants. Then

$$
\mathbb E\left[\sum_{i=1}^r a_iX_i\right]
=\sum_{i=1}^r a_i\mathbb E[X_i].
$$

No independence hypothesis is required.

*Proof.* Substitute the definition and rearrange finite sums:

$$
\begin{aligned}
\mathbb E\left[\sum_{i=1}^r a_iX_i\right]
&=\sum_{\omega\in\Omega}p(\omega)
\sum_{i=1}^r a_iX_i(\omega)\\
&=\sum_{i=1}^r a_i
\sum_{\omega\in\Omega}p(\omega)X_i(\omega)\\
&=\sum_{i=1}^r a_i\mathbb E[X_i].
\end{aligned}
$$

Only distributivity and the rearrangement of finitely many real terms were used. ∎

If $X$ counts how many events $A_1,\ldots,A_r$ occur, then $X=\sum_i I_{A_i}$ and

$$
\mathbb E[X]=\sum_i\mathbb P(A_i).
$$

The events may overlap or depend strongly on each other. Linearity asks for each individual event probability, not a description of every possible simultaneous occurrence. This often makes expectation much easier to calculate than the full distribution of a count.

**Example 8.13 (A count with dependent indicators).** In the three-card sample from Example 8.9, let $X$ count green cards. Use the equivalent ordered-draw model and let $I_j$ indicate that draw $j$ is green, for $j=1,2,3$.

Every labeled card is equally likely to occupy each position. Consequently $\mathbb P(I_j=1)=5/8$ for every $j$, and

$$
\mathbb E[X]=\mathbb E[I_1+I_2+I_3]
=3\cdot\frac58=\frac{15}{8}.
$$

The first two indicators are dependent, as the conditional probability $4/7$ from the previous example shows. That dependence changes joint probabilities but does not affect this sum of expectations. The value $15/8$ is not an attainable number of green cards; it lies between possible counts and records their weighted average. Computing all four probabilities for counts $0,1,2,3$ would also work, but is unnecessary for the expectation.

## From an average to an existing object

**Theorem 8.14 (Finite averaging and zero-defect existence).** A real random variable on a finite probability space has some positive-weight outcome with $X\le\mathbb E[X]$ and some positive-weight outcome with $X\ge\mathbb E[X]$. If $Y$ is nonnegative and integer-valued, then

$$
\mathbb P(Y=0)\ge1-\mathbb E[Y].
$$

In particular, $\mathbb E[Y]<1$ guarantees a positive-weight outcome with $Y=0$.

*Proof.* The support is finite and nonempty. Let its minimum and maximum values of $X$ be $m$ and $M$. For each positive-weight outcome, $m\le X(\omega)\le M$. Multiplying by weights and summing gives $m\le\mathbb E[X]\le M$. Outcomes attaining $m$ and $M$ establish the two existence claims.

For the second statement, integer-valued nonnegative $Y$ is at least one whenever it is not zero. Thus

$$
\mathbb E[Y]
=\sum_{\omega}p(\omega)Y(\omega)
\ge\sum_{\omega:Y(\omega)\ge1}p(\omega)
=\mathbb P(Y\ge1).
$$

Taking complements gives the displayed inequality. If the expectation is strictly less than one, the lower bound is positive, so at least one outcome of positive weight has no defects. ∎

The integer condition matters. The constant variable $Y=1/2$ has expectation below one but never equals zero. The strict inequality also matters: $Y=1$ always has expectation one and never vanishes. Failure to prove an expectation below one says only that this particular argument has not established success; it is not a proof of nonexistence.

**Example 8.15 (Avoiding collisions by a first-moment argument).** Assign each of four labeled objects independently and uniformly to one of twelve labels. Let $Y$ count unordered pairs of objects receiving the same label.

There are $\binom42=6$ pairs. For any fixed pair, after one object's label is chosen, the other matches it with probability $1/12$. Its collision indicator therefore has expectation $1/12$. Linearity gives

$$
\mathbb E[Y]=\binom42\frac1{12}=\frac12.
$$

The zero-defect theorem proves that a collision-free assignment exists and gives $\mathbb P(Y=0)\ge1/2$. The different pair events do not need to be independent for this calculation.

Here an exact count is also simple: collision-free assignments number $12\cdot11\cdot10\cdot9$, out of $12^4$ assignments, giving probability $55/96$. That is indeed at least $1/2$. The expectation argument supplied a useful lower bound without counting all successful assignments.

For $n$ objects and $m$ positive integer labels, the same proof gives expected collision count $\binom n2/m$. Thus $m>\binom n2$ is a sufficient condition for the argument to guarantee success. It is not necessary: four objects can certainly receive different labels from five labels, although $\binom42/5>1$. A sufficient condition should not be mistaken for an exact threshold.

The probabilistic method ends with a deterministic statement: at least one assignment has the required property. Positive probability does not by itself describe an efficient procedure for finding it or show that most assignments work. More advanced applications use the same logic for complicated forbidden configurations. The local [Probabilistic and Extremal Methods](probabilistic-extremal-methods.md) continues in that direction; its graph and Ramsey arguments are not required here.

## Exercises

### Exercise 8.1
<a id="discrete-probability-ex-1"></a>

Let $\Omega=\{a,b,c,d\}$ have weights $t,2t,3t,4t$, respectively. Determine $t$. For $A=\{a,c\}$ and $B=\{b,c\}$, compute $\mathbb P(A)$, $\mathbb P(B)$, $\mathbb P(A\cup B)$ and $\mathbb P(A\mid B)$.

<details>
<summary>Hint 1</summary>

The four weights must sum to one.

</details>
<details>
<summary>Hint 2</summary>

Find the intersection explicitly before forming the conditional-probability ratio.

</details>
<details>
<summary>Solution</summary>

The sum is $10t$, so $t=1/10$. Hence $\mathbb P(A)=4/10=2/5$ and $\mathbb P(B)=5/10=1/2$. Their union is $\{a,b,c\}$, with probability $6/10=3/5$. Their intersection is $\{c\}$, with probability $3/10$. Because $\mathbb P(B)>0$, the conditional probability is $(3/10)/(1/2)=3/5$. Counting two outcomes in $A$ and dividing by four would be wrong because the model is not uniform.

</details>

### Exercise 8.2
<a id="discrete-probability-ex-2"></a>

Two independent fair six-sided dice are rolled. A learner treats the eleven possible sums as equally likely. Find the probabilities of sums $2$ and $7$ and explain the modeling error.

<details>
<summary>Hint 1</summary>

Use ordered pairs of die values as the uniform outcomes.

</details>
<details>
<summary>Hint 2</summary>

Count how many ordered pairs produce each requested sum.

</details>
<details>
<summary>Solution</summary>

There are $36$ equally likely ordered pairs. Only $(1,1)$ gives sum $2$, so its probability is $1/36$. The pairs $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$ give sum $7$, so its probability is $6/36=1/6$. The sum is a function of the original outcome. Grouping outcomes by this function gives groups of different sizes and therefore different total weights; it does not produce eleven uniform outcomes.

</details>

### Exercise 8.3
<a id="discrete-probability-ex-3"></a>

An urn contains four black and two white labeled balls. Draw two uniformly without replacement. Find the probability that the second is white given that the first is black, and then the probability that the first is black given that the second is white.

<details>
<summary>Hint 1</summary>

After a black first draw, five balls remain, including both white balls.

</details>
<details>
<summary>Hint 2</summary>

Compute the joint probability and divide by the marginal probability of a white second draw for the reverse conditional.

</details>
<details>
<summary>Solution</summary>

Write $B_1$ for a black first draw and $W_2$ for a white second draw. Since $\mathbb P(B_1)=4/6>0$, $\mathbb P(W_2\mid B_1)=2/5$. Thus $\mathbb P(B_1\cap W_2)=(4/6)(2/5)=4/15$. Each labeled ball is equally likely to occupy the second position, so $\mathbb P(W_2)=2/6=1/3>0$. The reverse conditional is therefore $(4/15)/(1/3)=4/5$. The different answers arise because the conditioning events and their denominators differ.

</details>

### Exercise 8.4
<a id="discrete-probability-ex-4"></a>

Box $A$ is chosen with probability $1/3$ and contains two red tokens and one blue token. Box $B$ is chosen with probability $2/3$ and contains one red token and three blue tokens. A token is drawn uniformly from the chosen box. Given that it is red, find the probability that the box was $A$.

<details>
<summary>Hint 1</summary>

First calculate the total probability of red by splitting according to the chosen box.

</details>
<details>
<summary>Hint 2</summary>

The numerator for the reverse conditional is the joint probability of choosing $A$ and then red.

</details>
<details>
<summary>Solution</summary>

The red probability is $(1/3)(2/3)+(2/3)(1/4)=2/9+1/6=7/18$. It is positive, so conditioning on red is defined. The joint probability of $A$ and red is $2/9$, giving $\mathbb P(A\mid\text{red})=(2/9)/(7/18)=4/7$. The value $2/3$ is the chance of red after choosing $A$; it is not the requested reverse conditional. Both box-selection probabilities must be included.

</details>

### Exercise 8.5
<a id="discrete-probability-ex-5"></a>

Prove that disjoint events are independent exactly when at least one has probability zero. Then give an example of independent events of positive probability whose intersection is nonempty.

<details>
<summary>Hint 1</summary>

For disjoint events the intersection probability is zero; substitute that into the independence equation.

</details>
<details>
<summary>Hint 2</summary>

For an overlapping example, use the two separate outcomes in a pair of independent fair coin flips.

</details>
<details>
<summary>Solution</summary>

If $A\cap B=\varnothing$, independence says $0=\mathbb P(A)\mathbb P(B)$. Since probabilities are nonnegative, this holds exactly when one factor is zero. For the example, use the four equally likely outcomes $HH,HT,TH,TT$. Let $A$ mean that the first flip is heads and $B$ that the second is heads. Each has probability $1/2$, and their intersection $\{HH\}$ has probability $1/4=(1/2)(1/2)$. Thus they are independent while overlapping. Independence permits joint occurrence; disjointness forbids it.

</details>

### Exercise 8.6
<a id="discrete-probability-ex-6"></a>

Choose uniformly a four-element subset of a ten-element set, six of whose elements are designated special. Find the probability of choosing exactly three special elements and the expected number of special elements chosen.

<details>
<summary>Hint 1</summary>

For the probability, count choices of special and nonspecial elements separately.

</details>
<details>
<summary>Hint 2</summary>

For the expectation, use one inclusion indicator for each of the six special elements.

</details>
<details>
<summary>Solution</summary>

The probability is

$$
\frac{\binom63\binom41}{\binom{10}4}
=\frac{80}{210}=\frac8{21}.
$$

For a fixed special element, the number of subsets containing it is $\binom93$, so its inclusion probability is $\binom93/\binom{10}4=4/10$. Summing six inclusion indicators gives expected special count $6(4/10)=12/5$. The indicators need not be independent: they share the constraint that only four total elements are chosen. Linearity still applies.

</details>

### Exercise 8.7
<a id="discrete-probability-ex-7"></a>

Five mutually independent trials each succeed with probability $2/5$. Find the probability of exactly two successes and the expected number of successes. Identify where independence is used.

<details>
<summary>Hint 1</summary>

There are $\binom52$ choices for the successful positions.

</details>
<details>
<summary>Hint 2</summary>

Compute expectation as a sum of the five success indicators rather than summing over all possible totals.

</details>
<details>
<summary>Solution</summary>

The exact-two probability is

$$
\binom52\left(\frac25\right)^2\left(\frac35\right)^3
=\frac{216}{625}.
$$

Independence justifies multiplying the five success-and-failure probabilities for each pattern. For the expectation, each trial's indicator has mean $2/5$, so the total has expectation $5(2/5)=2$. This second calculation uses linearity, which would remain valid for dependent trials with the same individual success probabilities. The exact-two distribution generally would not remain the same.

</details>

### Exercise 8.8
<a id="discrete-probability-ex-8"></a>

Choose a permutation $\pi$ of $\{1,\ldots,n\}$ uniformly, where $n\ge2$. An adjacent increase occurs at position $i$ if $\pi(i)<\pi(i+1)$. Find the expected number of adjacent increases. For $n=3$, show that the two increase events are not independent.

<details>
<summary>Hint 1</summary>

For each fixed position, swapping its two entries pairs an increase with a decrease.

</details>
<details>
<summary>Hint 2</summary>

For $n=3$, both increases occur precisely when all three entries are in increasing order.

</details>
<details>
<summary>Solution</summary>

Let $I_i$ indicate an increase at position $i$, for $1\le i<n$. Swapping the two entries is a bijection between permutations with an increase there and those with a decrease there. Entries are distinct, so there is no equality case. Thus $\mathbb E[I_i]=1/2$, and linearity gives expected total $(n-1)/2$. When $n=3$, each of the two events has probability $1/2$, but their intersection consists only of permutation $123$, with probability $1/6$. Since $1/6\ne1/4$, they are dependent. The expectation argument did not require otherwise.

</details>

### Exercise 8.9
<a id="discrete-probability-ex-9"></a>

Choose uniformly from the four bit pairs $00,01,10,11$. Let $A$ mean that the first bit is $1$, $B$ that the second bit is $1$, and $C$ that the bits differ. Show that these events are pairwise independent but not mutually independent.

<details>
<summary>Hint 1</summary>

List the outcomes in each event and each pairwise intersection.

</details>
<details>
<summary>Hint 2</summary>

Compare the triple intersection probability with the product of all three marginal probabilities.

</details>
<details>
<summary>Solution</summary>

Every event contains two outcomes and has probability $1/2$. The pairwise intersections are $A\cap B=\{11\}$, $A\cap C=\{10\}$, and $B\cap C=\{01\}$, each of probability $1/4$. Thus every pair is independent. But the triple intersection is empty, since two bits both equal to $1$ cannot differ. Its probability is zero, whereas $\mathbb P(A)\mathbb P(B)\mathbb P(C)=1/8$. Mutual independence requires the product rule for the triple as well, so it fails. Checking pairs alone does not justify a three-factor product.

</details>

### Exercise 8.10
<a id="discrete-probability-ex-10"></a>

A finite set $V$ has a specified collection of $100$ eight-element subsets. Colour every element independently red or blue with probability $1/2$ each. Prove that some colouring makes none of the specified subsets monochromatic. Give an explicit positive lower bound on the probability of success, without assuming independence between the subsets' monochromatic events.

<details>
<summary>Hint 1</summary>

For a fixed eight-element subset, count the all-red and all-blue colourings among its possible color patterns.

</details>
<details>
<summary>Hint 2</summary>

Let a nonnegative integer variable count monochromatic specified subsets, then apply the zero-defect bound.

</details>
<details>
<summary>Solution</summary>

For any fixed specified subset, its eight independent color choices have $2^8$ equally likely patterns. Exactly two are monochromatic, so its bad-event probability is $2/2^8=1/128$. Let $Y$ count the monochromatic specified subsets. By indicator linearity,

$$
\mathbb E[Y]=100\cdot\frac1{128}=\frac{25}{32}<1.
$$

Therefore $\mathbb P(Y=0)\ge1-25/32=7/32>0$. Some deterministic colouring consequently has no monochromatic specified subset. Different subsets may overlap, so their bad events need not be independent. The proof used independence only within a fixed subset to calculate its colour-pattern probability, and linearity when adding the bad-event indicators.

</details>

## Sources

This chapter's exposition, proofs, worked examples and exercises are original. The local [Probabilistic and Extremal Methods](probabilistic-extremal-methods.md) is a continuation for the indicator and existence ideas, rather than a prerequisite. Further primary course-text treatments are Eric Lehman, F. Thomson Leighton and Albert R. Meyer, *Mathematics for Computer Science*, MIT OpenCourseWare, Fall 2010: [Chapter 14: Events and Probability Spaces](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/resources/mit6_042jf10_chap14/), [Chapter 15: Conditional Probability](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/resources/mit6_042jf10_chap15/), [Chapter 16: Independence](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/resources/mit6_042jf10_chap16/), and [Chapter 18: Expectation](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/resources/mit6_042jf10_chap18/). These primary-source resource pages were consulted on 13 November 2026; no passages or exercises have been copied.

## Summary

Finite probability begins with outcomes and nonnegative weights summing to one; equal-weight counting is an important special case. Conditioning retains an event of positive probability and renormalises its weights, while independence says that learning one event does not change the probability of the other when that conditional is defined. Disjoint positive-probability events are dependent. Counting models must keep ordering, replacement and selection weights consistent. Indicators express counts as sums, and linearity of expectation works even for dependent indicators. Finally, an expected nonnegative integer defect count below one proves that a defect-free outcome exists. The next chapter, [Graphs, Trees and Connectivity](graphs-trees-connectivity.md), supplies a new family of finite structures to which counting and probability can be applied.
