
# Counting, Conditioning, and Bayes' Rule

Observation changes the relevant probability law. If a card is known to be red, black cards no longer belong to the live possibility set; if a diagnostic test is positive, the frequencies of disease and nondisease cases among positive results both matter. **Conditioning** makes this change of information mathematical.

This chapter first develops finite counting as a way to construct probabilities under justified symmetry. It then proves the multiplication rule, total-probability formula, Bayes' rule, and odds form. Throughout, the decisive step is identifying the population after the information is known.

The local prerequisite is [Event Models, Sigma-Algebras, and Probability Axioms](event-models-and-axioms.md), especially disjoint unions and finite uniform laws.

## 1. Counting begins with a representation

Counting is not probability, but in a finite uniform model it converts event cardinalities into probabilities. The outcome representation must be chosen before the count.

**Sum rule.** If a finite set is a disjoint union $A\cup B$, then

$\lvert A\cup B\rvert =\lvert A\rvert +\lvert B\rvert$.

**Product rule.** If a construction has $m$ possible first choices and, for every first choice, $n$ possible second choices, then it has $mn$ ordered outcomes.

More generally, if stage $i$ always has $n_{i}$ choices after every permitted earlier history, the number of histories is $\prod_{i} n_{i}$. If the number of later choices depends on the history, split into cases or count leaves of the decision tree; blindly multiplying averages is not valid.

### Ordered selection without replacement

The number of ordered length-$k$ sequences drawn without replacement from $n$ distinct objects is

$(n)_{k}=n(n-1)...(n-k+1)=n!/(n-k)!$.

Every unordered $k$-element subset appears in $k!$ orders, so

$C(n,k)=\binom{n}{k}=n!/[k!(n-k)!]$.

This division is justified by a constant-size fibre: the map that forgets order has exactly $k!$ ordered preimages over every $k$-element subset.

### Worked count: exactly two repeated digits

How many four-digit strings use exactly two distinct digits, each appearing twice? Choose the two digits in $\binom{10}{2}=45$ ways. For a chosen pair $\{a,b\}$, choose the two positions occupied by $a$; the other two contain $b$. This gives $\binom{4}{2}=6$ arrangements, so the total is $270$.

The strings include leading zero because the object is a string, not a four-digit integer. Changing the object changes the answer.

## 2. Conditional probability is a new probability law

Let $(\Omega ,F,P)$ be a probability space and let $B$ be an event with $\mathbb{P}(B)>0$. The **conditional probability of $A$ given $B$** is

$\mathbb{P}(A \mid B)=\mathbb{P}(A\cap B)/\mathbb{P}(B)$.

The denominator renormalises the mass surviving inside $B$. For fixed $B$, the function

$\mathbb{P}_{B}(A)=\mathbb{P}(A \mid B)$

is itself a probability measure on $(\Omega ,F)$:

- $\mathbb{P}_{B}(\Omega )=\mathbb{P}(B)/\mathbb{P}(B)=1$;
- $\mathbb{P}_{B}(A)\ge 0$;
- if the $A_{n}$ are disjoint, then so are $A_{n}\cap B$, so countable additivity passes through the numerator.

Thus conditioning is not a special-purpose fraction. It replaces the original law by an information-updated law.

### Worked table

In a group of 100 devices, 30 are from line $L$; 12 devices fail, including 9 from $L$. Then

$\mathbb{P}(\mathrm{fail} \mid L)=9/30=0.30$,

whereas

$\mathbb{P}(L \mid \mathrm{fail})=9/12=0.75$.

The same intersection count appears in both numerators, but the reference populations differ. Reversing the conditioning bar changes the question.

## 3. The multiplication rule builds joint events

Rearranging the definition gives

$\mathbb{P}(A\cap B)=\mathbb{P}(B)\mathbb{P}(A \mid B)$

whenever $\mathbb{P}(B)>0$. Symmetrically,

$\mathbb{P}(A\cap B)=\mathbb{P}(A)\mathbb{P}(B \mid A)$

when $\mathbb{P}(A)>0$.

For events $A_{1},...,A_{n}$, repeated use gives the **chain rule**

$\mathbb{P}(\cap_{i=1}^{n} A_{i})$

$=\mathbb{P}(A_{1})\mathbb{P}(A_{2} \mid A_{1})\mathbb{P}(A_{3} \mid A_{1}\cap A_{2})...\mathbb{P}(A_{n} \mid \cap_{i<n}A_{i})$,

provided each conditioning event used has positive probability.

### Worked draw without replacement

Five red and three blue tokens are mixed; draw three without replacement. The probability of red, then blue, then red is

$(5/8)(3/7)(4/6)=5/28$.

The numerators and denominators update because the composition changes. Treating the draws as independent would incorrectly use $(5/8)(3/8)(5/8)$.

The probability of exactly two red tokens can be counted without order:

$\binom{5}{2}\binom{3}{1}/\binom{8}{3}=30/56=15/28$.

Both methods are valid because both specify the same uniform physical model and count the intended event consistently.

## 4. Total probability separates pathways to evidence

Events $H_{1},...,H_{k}$ form a **partition** if they are pairwise disjoint and their union is $\Omega$. If $\mathbb{P}(H_{i})>0$, then for every event $E$,

$\mathbb{P}(E)=\sum_{i=1}^{k} \mathbb{P}(E \mid H_{i})\mathbb{P}(H_{i})$.

**Proof.** The events $E\cap H_{i}$ are disjoint and their union is $E$. Additivity and the multiplication rule give

$\mathbb{P}(E)=\sum_{i}\mathbb{P}(E\cap H_{i})=\sum_{i}\mathbb{P}(E \mid H_{i})\mathbb{P}(H_{i})$. `□`

This is the **law of total probability**. It computes the overall evidence rate by averaging group-specific evidence rates using group prevalences.

### Worked reliability mixture

A supplier provides 60% of components from plant $A$ and 40% from plant $B$. Failure rates are 1% and 4%. The overall failure probability is

$0.01(0.60)+0.04(0.40)=0.022$.

An unweighted average $(0.01+0.04)/2$ would describe a different supplier mix.

## 5. Bayes' rule reverses a conditional direction

For a hypothesis $H$ and evidence $E$ with positive probabilities,

$\mathbb{P}(H \mid E)=\mathbb{P}(E \mid H)\mathbb{P}(H)/\mathbb{P}(E)$.

Substituting the total-probability denominator for a partition $H_{1},...,H_{k}$ gives

$\mathbb{P}(H_{j} \mid E)=\mathbb{P}(E \mid H_{j})\mathbb{P}(H_{j}) / \sum_{i} \mathbb{P}(E \mid H_{i})\mathbb{P}(H_{i})$.

The factors have distinct roles:

- $\mathbb{P}(H_{j})$ is the **prior probability** or base rate;
- $\mathbb{P}(E \mid H_{j})$ is the likelihood of the observed evidence under that hypothesis;
- $\mathbb{P}(E)$ normalises across all routes to the evidence;
- $\mathbb{P}(H_{j} \mid E)$ is the posterior probability under the stated model.

### Worked diagnostic calculation

Suppose disease prevalence is 1%, sensitivity is 90%, and the false-positive rate is 5%. For a positive result $+$,

$\mathbb{P}(D\cap +)=0.01\cdot 0.90=0.009$,

$\mathbb{P}(D^{c}\cap +)=0.99\cdot 0.05=0.0495$.

Therefore

$\mathbb{P}(D \mid +)=0.009/(0.009+0.0495)=2/13\approx 0.154$.

High sensitivity does not imply that most positive results are true positives when the condition is rare. The false-positive rate acts on a much larger nondiseased population.

The calculation assumes the stated rates apply to the tested population and that the recorded test protocol matches the validation protocol. Bayes' theorem cannot repair population shift or measurement bias.

## 6. Odds isolate the evidential multiplier

For an event $H$ with probability strictly between zero and one, its **odds** are

$O(H)=\mathbb{P}(H)/\mathbb{P}(H^{c})$.

For evidence $E$ with $\mathbb{P}(E\mid H)>0$ and $\mathbb{P}(E\mid H^c)>0$, Bayes' rule for $H$ and $H^{c}$ yields

$O(H \mid E)=O(H)\cdot [\mathbb{P}(E \mid H)/\mathbb{P}(E \mid H^{c})]$.

The ratio

$LR(E)=\mathbb{P}(E \mid H)/\mathbb{P}(E \mid H^{c})$

is the **likelihood ratio**. Posterior odds equal prior odds times the evidence multiplier. At the boundary, if only $\mathbb{P}(E\mid H)$ is zero, the posterior probability is zero; if only $\mathbb{P}(E\mid H^c)$ is zero, it is one. If both are zero, $\mathbb{P}(E)=0$ and these event-conditioned posterior probabilities are undefined.

For the diagnostic example, prior odds are $1:99$, and the positive likelihood ratio is $0.90/0.05=18$. Posterior odds are $18:99=2:11$, corresponding to posterior probability $2/(2+11)=2/13$.

With several observations, multiplying likelihood ratios is valid only under an appropriate conditional-independence model. Reusing correlated evidence as though it were independent double-counts information.

## 7. Conditioning can create or destroy dependence

Let two fair coin tosses have head events $H_{1}$ and $H_{2}$. Under the ordinary product model,

$\mathbb{P}(H_{1}\cap H_{2})=1/4=\mathbb{P}(H_{1})\mathbb{P}(H_{2})$,

so they are independent. Now condition on $E=H_{1}\cup H_{2}$, the event that at least one head occurred. The three remaining equally likely outcomes are $HT,TH,HH$. Hence

$\mathbb{P}(H_{1} \mid E)=\mathbb{P}(H_{2} \mid E)=2/3$,

but

$\mathbb{P}(H_{1}\cap H_{2} \mid E)=1/3\ne 4/9$.

The head events become dependent after conditioning. Knowing the first toss was not a head makes the second certain to be a head within the conditioned population.

This is a simple **selection effect**: filtering on a common consequence can associate otherwise independent causes. Conversely, variables dependent in a mixture can become independent after conditioning on the group that generated them. Dependence is always relative to a law and information state.

## 8. Zero-probability conditioning needs more machinery

The elementary formula $\mathbb{P}(A \mid B)=\mathbb{P}(A\cap B)/\mathbb{P}(B)$ is undefined when $\mathbb{P}(B)=0$. One cannot cancel the zero or assign an arbitrary value while preserving the intended meaning.

Continuous probability often asks for a conditional law such as “the law of $X$ given $Y=y$,” even though $\mathbb{P}(Y=y)=0$. Later chapters construct **regular conditional distributions** or conditional densities under hypotheses that make them available. These objects are defined through integration identities and are generally determined only up to null sets. The finite ratio remains the correct starting point, but not the final theory.

### Limiting windows are model-dependent

One might try to define conditioning on $Y=y$ by shrinking neighbourhoods around $y$. Different shapes or parameterisations can lead to different limits unless regularity controls them. A limit must be proved and its approximation scheme stated; “condition on an exact continuous value” is not automatically a legal fraction.

## 9. Sequential evidence and stopping

Suppose evidence pieces $E_{1},...,E_{n}$ are observed in order. The joint likelihood under $H$ factors by the chain rule:

$\mathbb{P}(E_{1},...,E_{n} \mid H)=\prod_{i=1}^{n} \mathbb{P}(E_{i} \mid E_{1},...,E_{i-1},H)$.

Only when the evidence pieces are conditionally independent given $H$ does this simplify to $\prod_{i}\mathbb{P}(E_{i} \mid H)$. The same must hold under competing hypotheses before separate likelihood ratios multiply.

Choosing when to stop collecting evidence can also change the sampling distribution of a reported statistic. Bayesian posterior odds based on a fully specified likelihood may remain coherent under certain stopping rules, while frequentist error guarantees can depend on the sampling plan. The relevant lesson here is narrower: record the sequential data-generating and stopping mechanism rather than treating a final table as context-free.

## 10. A conditioning audit

Before accepting a conditional argument, ask:

1. Which event is the new reference population?
2. Is its probability positive for the elementary ratio being used?
3. Are numerator and denominator counted in the same outcome representation?
4. Does an unordered count accidentally replace an ordered experiment, or vice versa?
5. Are all routes to the evidence represented in the total-probability denominator?
6. Are prevalence and likelihood being kept distinct?
7. Has conditioning changed an independence relation?
8. Are repeated likelihood factors justified by conditional independence?
9. Does the evidence protocol apply to the target population?

## Additional conditioning arguments

**Proposition 2.1 (Bayes with a countable hypothesis partition).** Let $(H_i)_{i\ge1}$ be a measurable partition, omit its zero-probability cells, and suppose $P(E)>0$. Then
$P(H_j\mid E)=P(E\mid H_j)P(H_j)/\sum_iP(E\mid H_i)P(H_i)$.

*Proof.* The intersections $E\cap H_i$ are disjoint and exhaust $E$ apart from omitted null cells. Countable additivity identifies their summed mass with the denominator. Each positive-cell intersection equals its conditional likelihood times its prior. Dividing the corresponding numerator by the positive denominator proves the formula. A likelihood may be zero; a cell prior used as an elementary conditioning event may not. ∎

### Worked Example 2.2: uncertain urn type and ordered evidence

An urn is type A with probability $1/3$ and type B with probability $2/3$. Type A contains three red and one blue ball; type B contains one red and three blue. Two balls are drawn without replacement. After observing red followed by blue, find the posterior type probability.

The likelihood under type A is $(3/4)(1/3)=1/4$, while under type B it is $(1/4)(3/3)=1/4$. The evidence probability is therefore $(1/3)(1/4)+(2/3)(1/4)=1/4>0$. Bayes gives posterior probability $1/3$ for A: this evidence does not distinguish the types.

After observing two reds, the likelihoods instead are $(3/4)(2/3)=1/2$ under A and zero under B. The evidence has positive probability $1/6$, and the posterior is one for A. “Both samples contain red” would be too coarse a description to explain the difference. The data record and the without-replacement mechanism determine the likelihood.

### Worked Example 2.3: a biased host protocol

A prize is uniformly placed behind doors one, two and three. The player chooses door one. A knowledgeable host opens a losing unchosen door, choosing door three with probability $r\in[0,1]$ when the prize is behind door one. If door three is opened, what is the chance the prize is behind door two?

The opening likelihoods under prize locations one, two and three are $r,1,0$. Total probability gives $P(E)=(r+1)/3$, which is positive throughout the stated parameter range. Hence $P(H_2\mid E)=1/(1+r)$.

The posterior varies from one to one half as $r$ ranges from zero to one; at the fair-choice value $r=1/2$, it equals two thirds. The prior placement model has remained unchanged. What changes is the evidence mechanism: observing the same opened door means something different under different host protocols.

This is a general lesson for selected observations. A conditional calculation must include how the observation became available, not merely the labels appearing in its final record.

### Worked Example 2.4: selection can reverse a comparison

Two methods are used in two difficulty groups. In an easier group, method A succeeds on $9/10$ and method B on $80/100$ cases. In a harder group, A succeeds on $20/100$ and B on $1/10$. Thus A has the greater observed success fraction within each group.

Pooling the counts gives A success fraction $29/110$, while B has $81/110$. The pooled ordering reverses because A was used mostly on harder cases and B mostly on easier cases. These fractions define a finite empirical probability model if one selects a case uniformly from the corresponding recorded group; no independence or causal assignment claim is needed for the arithmetic.

To compare methods under a common difficulty mixture, choose an explicit common weight, such as one half for each group. The weighted success rates become $(0.9+0.2)/2=0.55$ for A and $(0.8+0.1)/2=0.45$ for B. The question answered by this standardised comparison differs from the question answered by pooling the original records.

## 11. Exercises with complete solutions

### 1. Product-rule passwords

**Exercise 2.1**
<a id="counting-conditioning-and-bayes-ex-1"></a>

How many length-six strings use uppercase English letters in the first two positions and decimal digits in the final four positions, with repetition allowed?

<details>
<summary>Hint 1</summary>

Treat each position as a separate choice under the stated repetition rule.

</details>
<details>
<summary>Hint 2</summary>

Multiply the two letter counts and four digit counts.

</details>
<details>
<summary>Solution</summary>

**Solution.** Each of the first two positions has $26$ choices and each remaining position has $10$. The product rule gives

$26^{2}\cdot 10^{4}=6,760,000$.


</details>

### 2. Ordered versus unordered selection

**Exercise 2.2**
<a id="counting-conditioning-and-bayes-ex-2"></a>

From eight people, how many ways are there to choose a chair, treasurer, and secretary? How many three-person committees?

<details>
<summary>Hint 1</summary>

Decide whether exchanging selected people changes the object.

</details>
<details>
<summary>Hint 2</summary>

Role assignments are ordered; committees identify all permutations of the same subset.

</details>
<details>
<summary>Solution</summary>

**Solution.** The offices are distinct, so order by role matters: $(8)_{3}=8\cdot 7\cdot 6=336$. A committee has no roles, so it is an unordered subset: $\binom{8}{3}=56$. Each committee corresponds to $3! =6$ office assignments.


</details>

### 3. Pascal's identity

**Exercise 2.3**
<a id="counting-conditioning-and-bayes-ex-3"></a>

Prove $\binom{n}{k}=\binom{n-1}{k}+\binom{n-1}{k-1}$ by counting.

<details>
<summary>Hint 1</summary>

Distinguish one of the n objects.

</details>
<details>
<summary>Hint 2</summary>

Partition k-subsets according to whether they include that object.

</details>
<details>
<summary>Solution</summary>

**Solution.** Fix one distinguished object. A $k$-subset either excludes it, giving $\binom{n-1}{k}$ choices, or includes it, leaving $k-1$ objects to choose from the other $n-1$, giving $\binom{n-1}{k-1}$. The cases are disjoint and exhaustive, so the counts add.


</details>

### 4. Exactly one ace

**Exercise 2.4**
<a id="counting-conditioning-and-bayes-ex-4"></a>

Five cards are drawn uniformly without replacement from a standard 52-card deck. Find the probability of exactly one ace.

<details>
<summary>Hint 1</summary>

Count unordered hands rather than ordered deals.

</details>
<details>
<summary>Hint 2</summary>

Choose one ace and four nonaces, then divide by all five-card hands.

</details>
<details>
<summary>Solution</summary>

**Solution.** Choose one of the four aces and four of the 48 nonaces. Divide by all five-card subsets:

$P=\binom{4}{1}\binom{48}{4}/\binom{52}{5}$.

This hypergeometric count treats hands as unordered; every hand is equally likely under the standard deal.


</details>

### 5. Reverse the condition

**Exercise 2.5**
<a id="counting-conditioning-and-bayes-ex-5"></a>

In a class, 24 students study algebra, 15 study programming, and 10 study both, among 40 total. Find $\mathbb{P}(\mathrm{programming} \mid \mathrm{algebra})$ and $\mathbb{P}(\mathrm{algebra} \mid \mathrm{programming})$.

<details>
<summary>Hint 1</summary>

Both numerators count students studying both subjects.

</details>
<details>
<summary>Hint 2</summary>

Use the subject after the conditioning bar as each denominator.

</details>
<details>
<summary>Solution</summary>

**Solution.** The first denominator is the 24 algebra students, so the probability is $10/24=5/12$. The second denominator is the 15 programming students, giving $10/15=2/3$. The common intersection does not make the two conditionals equal.


</details>

### 6. Multiplication rule

**Exercise 2.6**
<a id="counting-conditioning-and-bayes-ex-6"></a>

Suppose $\mathbb{P}(A)=0.4$ and $\mathbb{P}(B \mid A)=0.25$. Find $\mathbb{P}(A\cap B)$.

<details>
<summary>Hint 1</summary>

Rearrange the defining conditional probability identity.

</details>
<details>
<summary>Hint 2</summary>

Multiply the positive conditioning-event probability by the conditional probability.

</details>
<details>
<summary>Solution</summary>

**Solution.** The multiplication rule gives $\mathbb{P}(A\cap B)=\mathbb{P}(A)\mathbb{P}(B \mid A)=0.4\cdot 0.25=0.10$.


</details>

### 7. Three-step chain

**Exercise 2.7**
<a id="counting-conditioning-and-bayes-ex-7"></a>

An urn has four red and six blue balls. Three balls are drawn without replacement. Find the probability all are red.

<details>
<summary>Hint 1</summary>

Follow the changing urn composition along the all-red path.

</details>
<details>
<summary>Hint 2</summary>

After each red draw both the red count and total count decrease by one.

</details>
<details>
<summary>Solution</summary>

**Solution.** Apply the chain rule along the red path:

$(4/10)(3/9)(2/8)=1/30$.

Equivalently, $\binom{4}{3}/\binom{10}{3}=4/120=1/30$.


</details>

### 8. Total probability

**Exercise 2.8**
<a id="counting-conditioning-and-bayes-ex-8"></a>

Machines $A$, $B$, and $C$ make 20%, 30%, and 50% of a product. Their defect rates are 1%, 2%, and 5%. Find the overall defect rate.

<details>
<summary>Hint 1</summary>

The machine labels form a partition of production.

</details>
<details>
<summary>Hint 2</summary>

Weight each defect rate by its production fraction.

</details>
<details>
<summary>Solution</summary>

**Solution.** The machine labels partition production. Therefore

$\mathbb{P}(D)=0.20(0.01)+0.30(0.02)+0.50(0.05)=0.033$.

The overall defect rate is 3.3%.


</details>

### 9. Bayes after a defect

**Exercise 2.9**
<a id="counting-conditioning-and-bayes-ex-9"></a>

Using Exercise 8, find the probability a defective product came from machine $C$.

<details>
<summary>Hint 1</summary>

Use the defect rate calculated in Exercise 8 as the evidence denominator.

</details>
<details>
<summary>Hint 2</summary>

The numerator is the production fraction for C times its defect rate.

</details>
<details>
<summary>Solution</summary>

**Solution.** Bayes' rule gives

$\mathbb{P}(C \mid D)=\mathbb{P}(D \mid C)\mathbb{P}(C)/\mathbb{P}(D)=0.05\cdot 0.50/0.033=25/33\approx 0.758$.

Machine $C$ produces half of all items but more than three quarters of defects because its defect rate is higher.


</details>

### 10. Conditional complement

**Exercise 2.10**
<a id="counting-conditioning-and-bayes-ex-10"></a>

For $\mathbb{P}(B)>0$, prove $\mathbb{P}(A^{c} \mid B)=1-\mathbb{P}(A \mid B)$.

<details>
<summary>Hint 1</summary>

Partition B using A and its complement.

</details>
<details>
<summary>Hint 2</summary>

Divide the resulting probability identity by the positive probability of B.

</details>
<details>
<summary>Solution</summary>

**Solution.** Inside $B$, the events $A\cap B$ and $A^{c}\cap B$ are disjoint and partition $B$. Thus

$\mathbb{P}(A\cap B)+\mathbb{P}(A^{c}\cap B)=\mathbb{P}(B)$.

Divide by the positive $\mathbb{P}(B)$.


</details>

### 11. Conditional law additivity

**Exercise 2.11**
<a id="counting-conditioning-and-bayes-ex-11"></a>

For fixed $B$ with $\mathbb{P}(B)>0$, prove countable additivity of $\mathbb{P}_{B}(A)=\mathbb{P}(A \mid B)$.

<details>
<summary>Hint 1</summary>

Intersect every disjoint event with the fixed conditioning event.

</details>
<details>
<summary>Hint 2</summary>

Apply countable additivity to the numerator before dividing.

</details>
<details>
<summary>Solution</summary>

**Solution.** If the $A_{n}$ are pairwise disjoint, then $A_{n}\cap B$ are also pairwise disjoint. Hence

$\mathbb{P}_{B}(\cup_{n}A_{n})=\mathbb{P}((\cup_{n}A_{n})\cap B)/\mathbb{P}(B)$

$=\mathbb{P}(\cup_{n}(A_{n}\cap B))/\mathbb{P}(B)=\sum_{n}\mathbb{P}(A_{n}\cap B)/\mathbb{P}(B)=\sum_{n}\mathbb{P}_{B}(A_{n})$.


</details>

### 12. Conditioning destroys independence

**Exercise 2.12**
<a id="counting-conditioning-and-bayes-ex-12"></a>

Two fair dice are rolled. Let $A$ be “the first die is 6,” $B$ be “the second die is 6,” and $E=A\cup B$. Compute the conditional quantities that show $A$ and $B$ are not independent given $E$.

<details>
<summary>Hint 1</summary>

List the ordered dice outcomes remaining after selection.

</details>
<details>
<summary>Hint 2</summary>

Compare the conditional intersection probability with the product of the two conditional marginals.

</details>
<details>
<summary>Solution</summary>

**Solution.** The event $E$ has $11$ equally likely ordered outcomes. Six have first die 6, six have second die 6, and one has both. Thus

$\mathbb{P}(A \mid E)=\mathbb{P}(B \mid E)=6/11$, while $\mathbb{P}(A\cap B \mid E)=1/11$.

But $(6/11)^{2}=36/121\ne 11/121=1/11$, so conditional independence fails.


</details>

### 13. Dependence caused by mixing

**Exercise 2.13**
<a id="counting-conditioning-and-bayes-ex-13"></a>

A group label $G$ is equally likely to be 0 or 1. Conditional on $G=0$, both binary variables $X,Y$ equal 0; conditional on $G=1$, both equal 1. Are $X$ and $Y$ independent unconditionally? Are they independent given $G$?

<details>
<summary>Hint 1</summary>

Compute a marginal and joint probability by averaging over the group.

</details>
<details>
<summary>Hint 2</summary>

Within each group the variables are constants, which still satisfy factorisation.

</details>
<details>
<summary>Solution</summary>

**Solution.** Unconditionally, $\mathbb{P}(X=1)=\mathbb{P}(Y=1)=1/2$ and $\mathbb{P}(X=1,Y=1)=1/2$, not $1/4$, so they are dependent. Given either value of $G$, both variables are constants. Constant variables satisfy the conditional factorisation, so they are conditionally independent given $G$. The mixture creates the marginal dependence.


</details>

### 14. Three doors

**Exercise 2.14**
<a id="counting-conditioning-and-bayes-ex-14"></a>

A prize is uniformly hidden behind one of three doors. A player chooses door 1. A host who knows the prize opens one unchosen losing door, choosing uniformly if both are available. If the host opens door 3, find the posterior probability the prize is behind door 2.

<details>
<summary>Hint 1</summary>

Write the host-opening likelihood separately under each prize location.

</details>
<details>
<summary>Hint 2</summary>

Use the specified random host choice when the prize is behind the chosen door.

</details>
<details>
<summary>Solution</summary>

**Solution.** Let $H_{i}$ mean the prize is behind door $i$, and $E$ mean the host opens door 3. Then

$\mathbb{P}(E \mid H_{1})=1/2$, $\mathbb{P}(E \mid H_{2})=1$, and $\mathbb{P}(E \mid H_{3})=0$,

with each prior $1/3$. Therefore

$\mathbb{P}(H_{2} \mid E)=(1)(1/3)/[(1/2)(1/3)+(1)(1/3)]=2/3$.

The host protocol is part of the likelihood; without it the answer is not determined.


</details>

### 15. Odds update

**Exercise 2.15**
<a id="counting-conditioning-and-bayes-ex-15"></a>

A hypothesis has prior probability $0.2$. Evidence has likelihood ratio $6$. Find posterior probability.

<details>
<summary>Hint 1</summary>

Convert probability to odds before applying the multiplier.

</details>
<details>
<summary>Hint 2</summary>

Convert the resulting odds back by dividing them by one plus themselves.

</details>
<details>
<summary>Solution</summary>

**Solution.** Prior odds are $0.2/0.8=1/4$. Multiply by $6$ to get posterior odds $3/2$. Odds $3:2$ correspond to probability $3/(3+2)=0.6$.


</details>

### 16. Sequential drawing

**Exercise 2.16**
<a id="counting-conditioning-and-bayes-ex-16"></a>

An urn has three red and two blue balls. Given that the first draw without replacement is red, find the probability the second is blue.

<details>
<summary>Hint 1</summary>

Update the urn after the observed first red ball.

</details>
<details>
<summary>Hint 2</summary>

The remaining blue count is unchanged while the total count decreases.

</details>
<details>
<summary>Solution</summary>

**Solution.** After the observed red draw, two red and two blue balls remain. Thus the conditional probability is $2/4=1/2$. Equivalently,

$\mathbb{P}(R_{1}\cap B_{2})/\mathbb{P}(R_{1})=[(3/5)(2/4)]/(3/5)=1/2$.


</details>

### 17. Partition proof with a zero-probability cell

**Exercise 2.17**
<a id="counting-conditioning-and-bayes-ex-17"></a>

Why does the finite formula $\mathbb{P}(E)=\sum_{i}\mathbb{P}(E \mid H_{i})\mathbb{P}(H_{i})$ need modification in notation when some partition cell has probability zero?

<details>
<summary>Hint 1</summary>

Check where the elementary conditional probability is defined.

</details>
<details>
<summary>Hint 2</summary>

A null cell contributes zero intersection mass without requiring an undefined conditional.

</details>
<details>
<summary>Solution</summary>

**Solution.** The elementary conditional $\mathbb{P}(E \mid H_{i})$ is undefined when $\mathbb{P}(H_{i})=0$. The identity can instead sum only over positive-probability cells; zero-probability intersections satisfy $\mathbb{P}(E\cap H_{i})=0$ and contribute nothing. One must not write an undefined conditional and then multiply it by zero.


</details>

### 18. Conditioning on an exact continuous value

**Exercise 2.18**
<a id="counting-conditioning-and-bayes-ex-18"></a>

If $Y$ is uniform on $[0,1]$, why is $\mathbb{P}(A \mid Y=1/2)$ not defined by the elementary event ratio?

<details>
<summary>Hint 1</summary>

Find the probability of the singleton conditioning event.

</details>
<details>
<summary>Hint 2</summary>

A regular conditional version is a different construction from an event ratio.

</details>
<details>
<summary>Solution</summary>

**Solution.** The event $\{Y=1/2\}$ has probability zero, so both the numerator $\mathbb{P}(A\cap \{Y=1/2\})$ and denominator are zero. The ratio is $0/0$, which is undefined. A conditional density or regular conditional distribution may provide a meaningful version under additional structure, but it is not obtained by ordinary division.


</details>

### 19. Derive total probability for countably many cells

**Exercise 2.19**
<a id="counting-conditioning-and-bayes-ex-19"></a>

Let $(H_{i})_{i\ge 1}$ be a countable measurable partition with each $\mathbb{P}(H_{i})>0$. Prove $\mathbb{P}(E)=\sum_{i}\mathbb{P}(E \mid H_{i})\mathbb{P}(H_{i})$.

<details>
<summary>Hint 1</summary>

Intersect the evidence with every partition cell.

</details>
<details>
<summary>Hint 2</summary>

The intersections are countably disjoint and exhaust the evidence.

</details>
<details>
<summary>Solution</summary>

**Solution.** The events $E\cap H_{i}$ are pairwise disjoint and their union is $E$. Countable additivity gives

$\mathbb{P}(E)=\sum_{i}\mathbb{P}(E\cap H_{i})$.

For every $i$, the multiplication rule rewrites the summand as $\mathbb{P}(E \mid H_{i})\mathbb{P}(H_{i})$.


</details>

### 20. Repair the prosecutor's fallacy

**Exercise 2.20**
<a id="counting-conditioning-and-bayes-ex-20"></a>

An analyst says, “Only one person in a million would match this evidence if innocent, so the probability the defendant is innocent is one in a million.” Identify the reversed conditional.

<details>
<summary>Hint 1</summary>

Write both the stated and the claimed quantities using conditioning bars.

</details>
<details>
<summary>Hint 2</summary>

Bayes needs base rates and every route to the evidence, not just one false-match likelihood.

</details>
<details>
<summary>Solution</summary>

**Solution.** The stated quantity is $\mathbb{P}(\mathrm{match} \mid \mathrm{innocent})$. The conclusion concerns $\mathbb{P}(\mathrm{innocent} \mid \mathrm{match})$. Bayes' rule shows that the latter also depends on the prior prevalence of possible sources, the probability of a match under guilt, the search or selection procedure, and alternative routes to the evidence. The two conditionals are not interchangeable.


</details>

## Sources

For probability spaces, laws, integration and independence, see Rick Durrett, *Probability: Theory and Examples*, fifth edition, chapters 1–2, available on the [author's official Duke page](https://sites.math.duke.edu/~rtd/PTE/pte.html). The earlier undergraduate route is Blitzstein and Hwang, *Introduction to Probability*, linked from [Harvard Stat 110](https://stat110.hsites.harvard.edu/). The additional examples and proofs in this chapter are original developments of these standard topics.

## 12. Summary and forward route

Counting supports a probability calculation only after the outcome representation and equal-likelihood model are justified. Conditioning renormalises the law inside an observed event. The multiplication rule builds joint paths; total probability sums all routes to evidence; Bayes' rule reverses a conditional direction; likelihood ratios update odds. Conditioning can change dependence, and zero-probability conditions require a later, more general construction.

The next chapter, [Independence, Product Models, and Repeated Trials](independence-and-product-models.md), makes factorisation an explicit model property and separates pairwise, mutual, and conditional independence.
