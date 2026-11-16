
# Independence

## When information does not change a probability

Two experiments can occur far apart and still share a cause. Two events can concern the same physical object and nevertheless be independent under a particular law. Independence is a numerical property of a joint probability model, not a conclusion from the appearance of the story.

The defining equality says that the probability of both events is the product of their probabilities. When conditioning is possible, this means learning one event does not change the probability of the other. For a collection of events, however, checking every pair is not enough: information about several events together can reveal something that no single event reveals alone.

This chapter uses [conditional probability and Bayes](conditional-probability-bayes.md). We define independence, derive its complement rules, construct product models and distinguish pairwise, mutual and conditional independence. Every multiplication of probabilities will identify the assumption that justifies it. These distinctions support the repeated-trial distributions in Chapter 8 and the limit theorems later.

## Two-event independence

**Definition 5.1 (Independent events).** Events $A,B$ are independent if
$$
P(A\cap B)=P(A)P(B).
$$

The definition remains meaningful when one event has probability zero. It does not require division. If $P(B)>0$, dividing proves that independence is equivalent to $P(A\mid B)=P(A)$. If $P(A)>0$, it is likewise equivalent to $P(B\mid A)=P(B)$. The condition is symmetric even when one particular verbal description sounds directional.

An event of probability zero is independent of every event, since both sides of the defining equality are zero. An event of probability one is also independent of every event: its complement has probability zero, so intersecting with it changes no probability. These statements concern probability, not a claim that the corresponding sets must literally be empty or whole.

**Proposition 5.2 (Complement rules).** If $A$ and $B$ are independent, then $A$ and $B^c$, $A^c$ and $B$, and $A^c$ and $B^c$ are independent.

*Proof.* The disjoint split of $A$ gives
$$
P(A\cap B^c)=P(A)-P(A\cap B)
=P(A)(1-P(B))=P(A)P(B^c).
$$
Interchanging $A,B$ proves the second statement. Applying the first result again to the independent pair $A^c,B$ proves the third. ∎

**Example 5.3 (Replacement changes the joint law).** A box has two red and two blue counters, and two draws are uniform without replacement. Let $A$ mean the first draw is red and $B$ mean the second is red. Symmetry gives $P(A)=P(B)=1/2$, but
$$
P(A\cap B)=\frac24\frac13=\frac16\ne\frac14.
$$
Thus the events are dependent. In conditional form, $P(B\mid A)=1/3$, smaller than its original marginal probability $1/2$.

With replacement and independent remixing, both draws use the original four counters and $P(A\cap B)=(1/2)^2=1/4$, giving independence. Each draw's marginal law can remain unchanged while the joint law changes. Marginal probabilities alone never determine independence.

Disjoint events with positive probabilities are dependent: their intersection probability is zero while the product is positive. “Cannot happen together” is therefore very different from “independent”. At the other extreme, an event is independent of itself only if $P(A)=P(A)^2$, which forces $P(A)$ to be zero or one.

## More than two events

**Definition 5.4 (Mutual and pairwise independence).** Events $A_1,\ldots,A_n$ are mutually independent if every nonempty subcollection satisfies
$$
P\left(\bigcap_{i\in S}A_i\right)=\prod_{i\in S}P(A_i),
\qquad \varnothing\ne S\subseteq\{1,\ldots,n\}.
$$
They are pairwise independent if this equality is required only for two-element subcollections.

For three events, mutual independence requires the three pair equalities and the triple equality. Single-event conditions hold automatically. A correct triple equality alone is also insufficient, since it does not imply the pair equalities. Definitions that say “all events multiply” must specify all subcollections rather than only the full collection.

**Example 5.5 (Pairwise independence without mutual independence).** Toss two independent fair coins and record bits $X,Y$ equal to one for heads and zero for tails. Let $A$ mean $X=1$, $B$ mean $Y=1$, and $C$ mean the bits differ. The four equally likely records give:

| $X$ | $Y$ | $A$ | $B$ | $C$ |
| --- | --- | --- | --- | --- |
| $0$ | $0$ | false | false | false |
| $0$ | $1$ | false | true | true |
| $1$ | $0$ | true | false | true |
| $1$ | $1$ | true | true | false |

Each event has probability $1/2$, and each pair intersection contains one record, with probability $1/4$. Thus the events are pairwise independent. But their triple intersection is empty: if both bits are one, they do not differ. Its probability zero is not $(1/2)^3=1/8$. Mutual independence fails.

The example is not an exceptional physical paradox. It follows exactly from the stated four-outcome law. Knowing either bit alone leaves the difference event at probability one-half; knowing both determines it completely.

For a mutually independent collection, replacing any chosen events by their complements preserves mutual independence. To prove it, start with an intersection involving one complemented event, subtract its uncomplemented intersection from the same intersection without that event, and factor using mutual independence. Repeat for each complemented event. This yields
$$
P\left(\bigcap_{i\in S}A_i\cap\bigcap_{j\in T}A_j^c\right)
=\prod_{i\in S}P(A_i)\prod_{j\in T}(1-P(A_j))
$$
for disjoint index sets $S,T$.

## Building product models

Independence can be constructed rather than merely checked. Suppose experiment $i$ has a finite outcome space $\Omega_i$ and probabilities $p_i(\omega_i)$. On the joint space of ordered records $(\omega_1,\ldots,\omega_n)$, assign probability
$$
p(\omega_1,\ldots,\omega_n)=\prod_{i=1}^n p_i(\omega_i).
$$

**Proposition 5.6 (Finite product construction).** These weights define a probability law. Events restricting separate coordinates multiply according to their individual probabilities.

*Proof.* Every product is nonnegative. Repeatedly summing one coordinate at a time gives
$$
\sum_{\omega_1,\ldots,\omega_n}\prod_i p_i(\omega_i)
=\prod_i\left(\sum_{\omega_i}p_i(\omega_i)\right)=1.
$$
For coordinate events $\omega_i\in B_i$, restrict the same sums to $B_i$. The result is the product of the corresponding event probabilities. Taking $B_i=\Omega_i$ for unrestricted coordinates proves the statement for every subcollection. ∎

This proves mutual independence in the constructed model. It does not prove that physical trials meet the construction. Shared equipment, changing conditions, sampling without replacement and feedback can all require another joint law.

**Example 5.7 (A prescribed repeated-trial pattern).** Suppose five trials are mutually independent, each with success probability $p=0.3$. A particular pattern with three successes and two failures has probability
$$
p^3(1-p)^2=(0.3)^3(0.7)^2=0.01323.
$$
The order of the three successes does not affect this product because all five trials have the same success probability. There are $\binom53=10$ such patterns, so exactly three successes has probability $0.1323$.

If the trials remain independent but have different success probabilities, different placements can have different probabilities. If they have the same marginal success probability but are dependent, even the product for a prescribed pattern can fail. The fixed number of trials, mutual independence and common $p$ are separate assumptions.

## Conditional independence

**Definition 5.8 (Independence within an event).** For $P(H)>0$, events $A,B$ are conditionally independent given $H$ if
$$
P(A\cap B\mid H)=P(A\mid H)P(B\mid H).
$$
For a finite positive-probability partition, conditional independence given the partition means this equality holds within every cell.

This definition applies ordinary independence to a conditional law. It does not imply unconditional independence, and unconditional independence need not survive conditioning. Changing the information changes the joint law in which the equality is assessed.

**Example 5.9 (A shared latent state).** Return to the hypothetical item-inspection model from Chapter 4. Defect probability is $0.02$; a signal is positive with probability $0.90$ for defective items and $0.10$ otherwise. Now assume two signals are independent conditional on defect status, both within $D$ and within $D^c$. Then
$$
P(++\mid D)=0.9^2=0.81,\qquad
P(++\mid D^c)=0.1^2=0.01.
$$
Total probability gives $P(++)=0.02(0.81)+0.98(0.01)=0.026$, and Bayes gives
$$
P(D\mid++)=\frac{0.0162}{0.026}=\frac{81}{130}.
$$

Each signal individually has positive probability $0.116$. Unconditional independence would predict joint positive probability $(0.116)^2=0.013456$, not $0.026$. The signals are dependent before defect status is known because they share that latent state. Multiplying their marginal positive probabilities would therefore be wrong. Multiplying their within-state likelihoods was justified only by the explicit conditional-independence assumption.

Conditional dependence can arise even from independent coordinates. For the two fair bits in Example 5.5, conditioning on equality leaves only $00$ and $11$. Each bit is still one with conditional probability $1/2$, but both are one with conditional probability $1/2$, not $1/4$. Once equality is known, learning one bit determines the other.

## What independence permits and what it does not

Independence often allows probabilities of intersections to factor, but it does not allow probabilities of unions to be multiplied. For independent $A,B$, the union probability is still $P(A)+P(B)-P(A)P(B)$. The complement of a union can be useful because the complementary failure events are independent as well.

Independence of observations is stronger than observing a small empirical association. A finite record cannot establish an exact factorisation for every relevant event. A modelling argument, experimental design or an appropriate probabilistic construction must support the assumption.

Finally, identical distribution and independence describe different features. Identically distributed variables have the same marginal law; independent variables have a factorised joint law. Reusing one random bit as every trial gives identical marginals and extreme dependence. These distinctions will be made explicit for random variables in the next chapter.

## Exercises

### Exercise 5.1
<a id="independence-ex-1"></a>

Events have $P(A)=0.4$, $P(B)=0.3$ and $P(A\cap B)=0.12$. Check independence and calculate $P(A\cup B)$.

<details><summary>Hint 1</summary>

Compare the intersection with the product of the marginal probabilities.

</details>
<details><summary>Hint 2</summary>

Independence does not turn a union into a product.

</details>
<details><summary>Solution</summary>

Since $0.4(0.3)=0.12$, the events are independent. Their union probability is $0.4+0.3-0.12=0.58$. The product describes both events, while the addition formula with overlap describes at least one. Confusing those event operations would answer a different question.

</details>

### Exercise 5.2
<a id="independence-ex-2"></a>

Prove that two disjoint events with positive probabilities cannot be independent. Can disjointness and independence coexist if one probability is zero?

<details><summary>Hint 1</summary>

A disjoint intersection has probability zero.

</details>
<details><summary>Hint 2</summary>

Compare zero with the product of the two probabilities.

</details>
<details><summary>Solution</summary>

With both probabilities positive, their product is positive and cannot equal the zero intersection probability. Thus independence fails. If one event has probability zero, the product and the intersection probability are both zero, so independence does hold. The positive-probability qualification is essential to the first conclusion.

</details>

### Exercise 5.3
<a id="independence-ex-3"></a>

For independent events with probabilities $0.2$ and $0.5$, find the probability of neither event and exactly one event.

<details><summary>Hint 1</summary>

Their complements are independent as well.

</details>
<details><summary>Hint 2</summary>

Exactly one is the disjoint union of $A\cap B^c$ and $A^c\cap B$.

</details>
<details><summary>Solution</summary>

Neither has probability $(0.8)(0.5)=0.4$. Exactly one has probability $(0.2)(0.5)+(0.8)(0.5)=0.5$. Both has probability $0.1$, so the three disjoint categories sum to one. The complementary products follow from independence, not from disjointness alone.

</details>

### Exercise 5.4
<a id="independence-ex-4"></a>

Four mutually independent trials have success probability $1/4$. Find the probabilities of no success, at least one success and the specific pattern success-failure-success-failure.

<details><summary>Hint 1</summary>

Use a complement for at least one success.

</details>
<details><summary>Hint 2</summary>

A prescribed pattern needs no binomial coefficient.

</details>
<details><summary>Solution</summary>

No success has probability $(3/4)^4=81/256$, so at least one has probability $175/256$. The specified pattern has probability $(1/4)(3/4)(1/4)(3/4)=9/256$. A binomial coefficient would count several placements of successes and would answer a different event than the prescribed pattern.

</details>

### Exercise 5.5
<a id="independence-ex-5"></a>

Using the fair-bit table in the chapter, verify the pairwise independence of $A,B,C$ and show which mutual-independence condition fails.

<details><summary>Hint 1</summary>

Each individual event contains two of the four outcomes.

</details>
<details><summary>Hint 2</summary>

Each pair contains one outcome, while the triple contains none.

</details>
<details><summary>Solution</summary>

Each marginal probability is $1/2$, and each pair intersection is $1/4=(1/2)^2$, proving pairwise independence. The triple intersection has probability zero, which differs from $(1/2)^3=1/8$. Therefore the collection is not mutually independent. Checking all pairs is genuinely weaker than checking every subcollection.

</details>

### Exercise 5.6
<a id="independence-ex-6"></a>

Let one fair bit $X$ be used as the outcome of every trial: $X_1=X_2=\cdots=X$. Are the trials identically distributed? Are the first two independent?

<details><summary>Hint 1</summary>

Each marginal probability of one is still $1/2$.

</details>
<details><summary>Hint 2</summary>

The event that both first trials equal one is just the event $X=1$.

</details>
<details><summary>Solution</summary>

All trials have the same fair Bernoulli marginal law, so they are identically distributed. But $P(X_1=1,X_2=1)=1/2$, while the product of the two marginal probabilities is $1/4$. They are dependent. A model can therefore have identical distributions without independent repetition.

</details>

### Exercise 5.7
<a id="independence-ex-7"></a>

Two fair bits are independent. Given that they agree, compute the conditional probabilities that the first is one, the second is one and both are one. Are they conditionally independent?

<details><summary>Hint 1</summary>

The agreement event leaves $00$ and $11$ with equal conditional probabilities.

</details>
<details><summary>Hint 2</summary>

Compare the conditional joint probability with the product of the two conditional marginals.

</details>
<details><summary>Solution</summary>

Each individual conditional probability is $1/2$, and the probability both are one is also $1/2$. This is not the product $1/4$, so conditional independence fails. The original independence referred to the unconditioned joint law; restricting to agreement changed that law.

</details>

### Exercise 5.8
<a id="independence-ex-8"></a>

A latent state $H$ has probability $1/2$. Given $H$, two signals are independently positive with probability $0.8$ each; given $H^c$, they are independently positive with probability $0.2$ each. Compute a signal's marginal positive probability and the joint positive probability.

<details><summary>Hint 1</summary>

Use total probability separately for one signal and for the pair.

</details>
<details><summary>Hint 2</summary>

Square the within-state probabilities for the joint event, not the marginal probability.

</details>
<details><summary>Solution</summary>

A signal is positive with probability $(1/2)(0.8)+(1/2)(0.2)=0.5$. Both are positive with probability $(1/2)(0.64)+(1/2)(0.04)=0.34$. Since $0.34\ne0.5^2$, the signals are not unconditionally independent. Their dependence is consistent with the explicitly assumed independence inside each latent state.

</details>

### Exercise 5.9
<a id="independence-ex-9"></a>

Prove that if an event is independent of itself, its probability is zero or one.

<details><summary>Hint 1</summary>

The intersection of an event with itself is the same event.

</details>
<details><summary>Hint 2</summary>

Solve $p=p^2$ for a real probability $p$.

</details>
<details><summary>Solution</summary>

Independence gives $P(A)=P(A)^2$. Setting $p=P(A)$ yields $p(1-p)=0$, so $p=0$ or $p=1$. Conversely either value satisfies the defining equality, so the condition is exact. An event with an uncertain probability strictly between zero and one cannot be an independent repetition of itself.

</details>

### Exercise 5.10
<a id="independence-ex-10"></a>

Three independent trials have success probabilities $1/2,1/3,1/5$. Find the probability of success-failure-success and explain why multiplying by three does not give exactly two successes.

<details><summary>Hint 1</summary>

Each position has its own success or failure probability.

</details>
<details><summary>Hint 2</summary>

List the other two-success patterns and compare their weights.

</details>
<details><summary>Solution</summary>

Success-failure-success has probability $(1/2)(2/3)(1/5)=1/15$. The other patterns have probabilities $(1/2)(1/3)(4/5)=2/15$ and $(1/2)(1/3)(1/5)=1/30$. Their sum is $7/30$, whereas three times the first pattern's probability is $1/5=6/30$. The patterns are not equally likely, so their actual probabilities must be added.

</details>

## Sources

The proofs, examples and exercises are newly written. A complementary primary source is Grinstead and Snell, [*Introduction to Probability*](https://math.dartmouth.edu/~prob/prob/prob.pdf), Chapter 4 and the independent-trial discussions in Chapter 5, official CHANCE Project text, consulted 13 November 2026. The distinction between marginal and conditional assumptions develops Euler's retained [Probability: Models Before Formulas](../../course-texts/atlas-probability-models.md).

## Summary

Independence is a factorisation of joint probabilities. It is symmetric, survives taking complements, and differs from disjointness. Mutual independence checks every subcollection; pairwise independence alone can miss dependence revealed by combined information.

Product models construct independent coordinates, while conditional independence belongs to a specified conditional law and need not hold unconditionally. Identical marginal laws are another separate property. [Random variables and distributions](random-variables-distributions.md) now turns outcome records into numerical quantities while retaining these assumptions.
