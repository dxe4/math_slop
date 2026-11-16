var e=`---
parent_id: book-information-theory
chapter_id: joint-conditional-entropy
title: "Joint and Conditional Entropy"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Joint and Conditional Entropy

Preparation is Chapter 1, joint mass functions and conditional probability. This L3 chapter proves the chain rule before using entropy as a measure of information.

## A joint law is the starting point

Let $X$ take values in a finite alphabet $\\mathcal X$ and $Y$ in a finite alphabet $\\mathcal Y$. Their joint mass function is $p(x,y)$, with marginals $p_X(x)=\\sum_y p(x,y)$ and $p_Y(y)=\\sum_xp(x,y)$. We discard zero-probability conditioning events when defining conditional laws. For $p_Y(y)>0$,
$$
p(x\\mid y)=\\frac{p(x,y)}{p_Y(y)}.
$$
The formula describes an entire probability vector for each admissible observation $y$. Different observations can produce very different vectors. An average over these conditional distributions is the conditional entropy:
$$
H(X\\mid Y)=\\sum_{y:p_Y(y)>0}p_Y(y)H(p_{X\\mid y}).
$$
Equivalently it is $E[-\\log_2p(X\\mid Y)]$, where expectation uses the joint law. Terms with zero joint probability contribute zero; no realised pair has to take the logarithm of an undefined conditional probability.

This distinction between a function of $y$ and its average matters. The number $H(X\\mid Y=y)$ concerns one observation, whereas $H(X\\mid Y)$ is an average experiment performed before knowing which observation occurs. Conditional entropy is nonnegative for finite alphabets. The analogous claim for continuous differential entropy will fail, because a density is not a probability mass.

The joint entropy is $H(X,Y)=-\\sum_{x,y}p(x,y)\\log_2p(x,y)$. Treating a pair as one symbol gives all the elementary entropy bounds from the previous chapter. In particular, $H(X,Y)\\le\\log_2(|\\mathcal X||\\mathcal Y|)$, with equality only for the uniform joint law on the full product.

## The chain rule, with its hypotheses visible

**Theorem 2.1 (finite chain rule).** For finite-valued random variables,
$$
H(X,Y)=H(Y)+H(X\\mid Y)=H(X)+H(Y\\mid X).
$$

**Proof.** On every pair of positive joint mass, $p(x,y)=p_Y(y)p(x\\mid y)$. Taking negative logarithms and then expectation separates the sum into the marginal entropy of $Y$ and the average conditional entropy of $X$. All sums are finite, so exchanging their order causes no integrability problem. Interchanging the variable names proves the second equality. ∎

Repeated application gives
$$
H(X_1,\\ldots,X_n)=\\sum_{i=1}^n H(X_i\\mid X_1,\\ldots,X_{i-1}).
$$
The first term means the ordinary entropy $H(X_1)$. This identity counts each uncertainty once. Adding all the marginal entropies instead generally counts shared information repeatedly.

There is a corresponding conditional chain rule:
$$
H(X,Y\\mid Z)=H(X\\mid Z)+H(Y\\mid X,Z).
$$
Prove the ordinary chain rule inside each positive-probability conditional law given $Z=z$, then average over $z$. The result uses finite alphabets throughout. It does not require that the variables are independent, that the support is rectangular, or that every possible triple has positive probability.

One may regard the formula as a sequential description experiment. First describe $X$ using whatever is already known, then describe the uncertainty in $Y$ that remains. This is an interpretation of the entropy identity; a concrete description scheme still needs the coding results in later chapters.

## Why conditioning reduces entropy on average

For each $x$, the unconditional law is the mixture
$$
p_X(x)=\\sum_y p_Y(y)p(x\\mid y).
$$
Concavity of entropy, established in Chapter 1, gives
$$
H(X)\\ge\\sum_y p_Y(y)H(X\\mid Y=y)=H(X\\mid Y).
$$
Applying the same argument within each conditional law given $Z=z$ proves
$$
H(X\\mid Z)\\ge H(X\\mid Y,Z).
$$
This proof shows precisely why the inequality is averaged. Each conditional vector is one component of a mixture; a component can have greater entropy than the mixture even though their weighted average cannot.

For example, let $P(Y=1)=1/10$, let $X=0$ surely when $Y=0$, and let $X$ be a fair bit when $Y=1$. Then $P(X=1)=1/20$, so $H(X)=h_2(1/20)$, where
$$
h_2(t)=-t\\log_2t-(1-t)\\log_2(1-t).
$$
The rare observation $Y=1$ raises the conditional entropy to one bit. Nevertheless $H(X\\mid Y)=1/10$ bit is below $h_2(1/20)$. Learning can reveal that the current case is harder than expected.

Strict concavity also supplies the equality condition. Equality $H(X\\mid Y)=H(X)$ holds exactly when the positive-weight conditional vectors $p_{X\\mid y}$ are identical. Their common vector must be $p_X$, which is precisely independence of $X$ and $Y$. Conditional equality $H(X\\mid Y,Z)=H(X\\mid Z)$ means conditional independence within each positive-probability stratum of $Z$.

Combining this inequality with the chain rule gives subadditivity:
$$
H(X,Y)\\le H(X)+H(Y),
$$
with equality exactly for independence. For a sequence, joint entropy is at most the sum of marginal entropies. Pairwise independence is insufficient to turn this into equality for three or more variables.

## Functions, recoverability and information loss

If $Y=f(X)$ is deterministic, then $H(Y\\mid X)=0$ and
$$
H(X)=H(Y)+H(X\\mid Y).
$$
Thus a deterministic transformation cannot increase finite entropy. This statement concerns a fixed function and no additional random input. Randomly adding a new independent bit changes the experiment and can certainly increase entropy.

The equality $H(X\\mid Y)=0$ has a strong finite-alphabet interpretation: for each $y$ with positive marginal mass, the conditional law of $X$ is a point mass. Choosing that point defines a function $g$ with $X=g(Y)$ almost surely. Conversely, such a recovering function makes the conditional entropy zero.

Consequently $H(f(X))=H(X)$ exactly when $X$ can be recovered from $f(X)$ on the positive-probability support. The function need not be globally one-to-one on impossible inputs. The qualification “on the support” is what makes the theorem correct for models with structural zeros.

The joint law of $(X,f(X))$ has the same entropy as $X$. Recording a deterministic checksum together with a message does not create source uncertainty. It can still help detect corruption after transmission, because the channel changes which recorded pairs are possible at the receiver.

## Independence beyond pairs

Take independent fair bits $A,B$ and define $C=A\\mathbin{\\oplus}B$, addition modulo two. Each of $A,B,C$ has one bit of entropy. Every pair is uniform on four values, so all three pairs are independent. Yet the triple has only four possible values and entropy two bits: knowing any two determines the third.

In the chain rule, $H(A,B,C)=H(A)+H(B\\mid A)+H(C\\mid A,B)=1+1+0$. The three marginal entropies sum to three. Pairwise independence says nothing about the final conditional entropy after *two* variables have been observed.

This example is also a warning about language such as “the information in $C$.” Information is relative to another variable or collection. The bit $C$ says nothing about $A$ by itself, but reveals $A$ exactly when $B$ is already known. Next chapter develops mutual information as the amount of average uncertainty removed by an observation.

## Conditioning is a probability operation

Conditional entropy depends on the joint law, not merely on two marginal histograms. Two fair bits can be identical, independent, or connected through noise, while retaining the same marginals. The corresponding conditional entropies are zero, one, and an intermediate value.

When data are selected, conditional laws must reflect the selection. An entropy computed among accepted observations describes the accepted population. It is not automatically the uncertainty in the original source. Likewise, replacing a latent variable by an estimated label introduces a new random variable, whose joint distribution must be specified.

For finite samples, conditional plug-in entropy also requires a clear convention for empty cells. A cell with no observations has empirical weight zero and contributes nothing, but this does not establish that the true conditional law in that cell is deterministic. Model uncertainty and uncertainty under a chosen model are distinct.

The optional Unhurried article on [joint entropy](/articles/information-theory-joint-entropy/) gives a visual companion. The present definitions, equality conditions and counterexample are the mathematical route needed for the next chapter.

## Several observations and an accounting identity

For three variables, expand the same joint entropy in two orders:
$$
H(X,Y,Z)=H(Z)+H(X\\mid Z)+H(Y\\mid X,Z)
$$
and
$$
H(X,Y,Z)=H(Y,Z)+H(X\\mid Y,Z).
$$
Such expansions let us compare experiments without assuming any variables are independent. For example, the reduction from observing $Y$ after already observing $Z$ is
$$
H(X\\mid Z)-H(X\\mid Y,Z)\\ge0.
$$
Averaging separately inside each stratum is essential. It would be incorrect to condition the first term on one population and the second on a different selected population.

There is also a useful upper bound on this reduction. By the conditional chain rule,
$$
H(X\\mid Z)-H(X\\mid Y,Z)
=H(Y\\mid Z)-H(Y\\mid X,Z)
\\le H(Y\\mid Z).
$$
An observation cannot remove more uncertainty about $X$ than its own residual uncertainty after $Z$. In particular a binary observation removes at most one bit on average. It can nevertheless determine a rare, highly surprising case; the bound concerns a weighted average over all outcomes.

If a binary questionnaire is conducted sequentially, each response removes at most one bit after all preceding answers. Repeating the inequality shows that $k$ binary answers remove at most $k$ bits. An adaptive question still has a binary answer conditional on its past, so adaptivity does not evade this bound. Actual question lengths may vary by outcome, which is why expected-length decision trees need the prefix-coding argument of Chapter 6.

These identities also distinguish two kinds of redundancy. Repeating the *same* measured bit adds zero joint entropy, because it is recoverable from the first recording. Taking a second independent noisy measurement can add uncertainty to the record while reducing uncertainty about the latent quantity. Which entropy is relevant depends on whether the recorded data or the latent source is being described.

## Worked example 2.1: A correlated pair

Let $X$ be fair and let $N$ be independent with $P(N=1)=1/4$. Set $Y=X\\oplus N$. The joint masses on $(0,0),(0,1),(1,0),(1,1)$ are $3/8,1/8,1/8,3/8$. Both marginals are fair. Given either value of $Y$, the probability that $X$ differs from it is $1/4$, so $H(X\\mid Y)=h_2(1/4)$. The chain rule gives $H(X,Y)=1+h_2(1/4)$ bits. This is below two but above one: the pair is partly redundant without being deterministic.

## Worked example 2.2: A coarse measurement

Let $X$ be uniform on $\\{0,1,2,3,4,5,6,7\\}$ and record only $Y=\\lfloor X/2\\rfloor$. Then $Y$ is uniform on four values, so $H(Y)=2$. Within each fibre there are two equally likely possibilities, so $H(X\\mid Y)=1$. Since $H(Y\\mid X)=0$, the identity $3=2+1$ accounts for all the uncertainty. Recording also the parity $R=X\\bmod2$ restores the original value through $X=2Y+R$. Here $Y$ and $R$ are independent, although deterministic components of the same source need not generally be independent.

## Worked example 2.3: Rare observations can raise entropy

In the rare-case model above, $P(X=1)=0.05$, so the original uncertainty is $h_2(0.05)$ bits. Observing $Y=0$ reduces it to zero; observing $Y=1$ raises it to one. Averaging gives $0.9(0)+0.1(1)=0.1$. The chain rule also yields $H(X,Y)=h_2(0.1)+0.1$. One must not substitute the largest conditional entropy into the average inequality. Its proof compares an average of component entropies with the entropy of their mixture.

## How much uncertainty comes from hiding a mixture label?

Let a finite selector choose one of several source laws, and then draw a symbol from the selected law. The joint chain rule can be expanded by revealing the selector first or the symbol first. Rearranging gives
$$
H(X)-H(X\\mid B)=H(B)-H(B\\mid X).
$$
The left side is the difference between entropy of the mixed source and average entropy when its label is known. The right side identifies its source: uncertainty about the hidden selector that is resolved by seeing the symbol.

Both conditional entropies are finite and nonnegative. Hence the increase caused by hiding the label is at least zero and at most the selector entropy. Concavity gives the lower inequality; the chain-rule identity gives the upper one. Neither bound permits replacing the average with the largest component entropy.

At the lower equality, the symbol and selector are independent. Every positive-weight component must therefore be the same source law. Hiding a label that makes no change to the data distribution adds no uncertainty.

At the upper equality, the selector is recoverable from the symbol almost surely. Component supports must be disjoint apart from zero-probability cells. In that case an observed symbol tells the receiver which component generated it, so all selector uncertainty appears in the mixed source entropy.

Consider a fair selector between a deterministic zero source and a fair binary source. The mixed symbol has probabilities three-quarters and one-quarter. Average component entropy is one-half bit, while selector entropy is one bit. The increase is binary entropy at one-quarter minus one-half, strictly between zero and one. Observing a one identifies the fair component, but observing a zero leaves the label uncertain.

This accounting also explains a coding distinction. If both parties already know the selector, they can use the appropriate conditional description. If only the sender knows it, the receiver cannot decode a label-dependent codebook without another convention. Sending the selector explicitly can cost more than the uncertainty it actually contributes to the mixed symbol, especially when component distributions overlap strongly.

The identity requires no assumption that the selector is a causal mechanism in a scientific population. It is a joint probability model. A statistical mixture fitted after observing data may be a useful representation, but its latent label is not automatically an observed group or an independently established biological category.

The next chapter names the common entropy reduction in this identity as mutual information. Deriving it first from conditional laws keeps its interpretation attached to a specified pair of random variables, rather than treating “the information in a label” as an absolute number independent of the experiment.

## Conditioning can create dependence between independent variables

Take two independent fair bits X and Y and record their exclusive-or as Z. Before Z is known, the joint distribution is uniform over four pairs, so mutual information between X and Y is zero. Conditional on either value of Z, exactly two pairs remain equally likely. Knowing X then determines Y, while Y alone remains a fair bit. Conditional mutual information between X and Y given Z is therefore one bit.

This does not contradict the theorem that conditioning reduces entropy on average. That theorem compares the entropy of a fixed variable before and after adding information. Mutual information is a difference of two entropies, and both terms change when a conditioning variable is added. Here conditioning on the joint effect Z creates an association. The example also shows why a claim that all conditioning decreases every form of information is false. Conditional independence assumptions must specify the conditioning sigma-field; unconditional independence is not automatically preserved after observing a shared function.

## Exercises

### Exercise 2.1
<a id="joint-conditional-entropy-ex-1"></a>

Let $X,Y$ be independent and uniform on alphabets of sizes three and four. Find all three entropies in the chain rule.

<details>
<summary>Hint 1</summary>

Count the possible pairs.

</details>
<details>
<summary>Hint 2</summary>

Independence makes every conditional law equal to its marginal.

</details>
<details>
<summary>Solution</summary>

Each of the twelve pairs has mass $1/12$, hence $H(X,Y)=\\log_2 12$. Also $H(X)=\\log_2 3$ and $H(Y\\mid X)=\\log_2 4=2$. Their sum is $\\log_2 12$, as required.

</details>

### Exercise 2.2
<a id="joint-conditional-entropy-ex-2"></a>

Prove that $H(X,Y)\\ge H(X)$ and characterise equality.

<details>
<summary>Hint 1</summary>

Use the second term in the chain rule.

</details>
<details>
<summary>Hint 2</summary>

A finite entropy is zero exactly for a point mass.

</details>
<details>
<summary>Solution</summary>

The chain rule gives $H(X,Y)-H(X)=H(Y\\mid X)\\ge0$. Equality means that every positive-weight conditional law of $Y$ given $X=x$ is a point mass. Selecting its unique value defines $f$ with $Y=f(X)$ almost surely. Conversely any such function makes that conditional entropy zero.

</details>

### Exercise 2.3
<a id="joint-conditional-entropy-ex-3"></a>

For $X$ uniform on four values and $Y=X\\bmod2$, compute $H(X\\mid Y)$ and $H(Y\\mid X)$.

<details>
<summary>Hint 1</summary>

Find the two fibres.

</details>
<details>
<summary>Hint 2</summary>

Each fibre has two equally likely source values.

</details>
<details>
<summary>Solution</summary>

$Y$ is fair, so $H(Y)=1$, while $H(X)=2$. Given $Y$, two source values remain equally likely, hence $H(X\\mid Y)=1$. Given $X$, parity is fixed, so $H(Y\\mid X)=0$. Both orders of the chain rule give joint entropy two.

</details>

### Exercise 2.4
<a id="joint-conditional-entropy-ex-4"></a>

Show that a constant conditioning variable changes no entropy.

<details>
<summary>Hint 1</summary>

There is only one positive-probability stratum.

</details>
<details>
<summary>Hint 2</summary>

Write its conditional law.

</details>
<details>
<summary>Solution</summary>

If $Y=y_0$ surely, then $P(X=x\\mid Y=y_0)=P(X=x)$. The defining average for $H(X\\mid Y)$ has the single term $H(X)$ with weight one. Thus $H(X\\mid Y)=H(X)$; this also follows because a constant variable is independent of every $X$.

</details>

### Exercise 2.5
<a id="joint-conditional-entropy-ex-5"></a>

Explain why $H(X\\mid Y=y)\\le H(X)$ is not a valid general theorem.

<details>
<summary>Hint 1</summary>

Use the rare-case model.

</details>
<details>
<summary>Hint 2</summary>

Compare a fair conditional bit with its heavily biased marginal.

</details>
<details>
<summary>Solution</summary>

In that model $H(X)=h_2(1/20)<1$, but $H(X\\mid Y=1)=1$ and the conditioning event has positive probability $1/10$. Thus the pointwise inequality fails. The valid averaged inequality uses both observations, giving $H(X\\mid Y)=1/10\\le h_2(1/20)$.

</details>

### Exercise 2.6
<a id="joint-conditional-entropy-ex-6"></a>

For the XOR triple, calculate $H(A\\mid C)$ and $H(A\\mid B,C)$.

<details>
<summary>Hint 1</summary>

Inspect the four equally likely pairs $(A,B)$.

</details>
<details>
<summary>Hint 2</summary>

Solve the XOR equation when both other values are known.

</details>
<details>
<summary>Solution</summary>

For each value of $C$, $A$ is still fair, so $H(A\\mid C)=1$. Given $B,C$, the relation $A=B\\oplus C$ determines $A$, so $H(A\\mid B,C)=0$. Information supplied by $B$ therefore depends on what has already been observed.

</details>

### Exercise 2.7
<a id="joint-conditional-entropy-ex-7"></a>

Prove the conditional chain rule directly from joint probabilities.

<details>
<summary>Hint 1</summary>

Factor the conditional joint mass given $Z=z$.

</details>
<details>
<summary>Hint 2</summary>

Average the ordinary finite calculation over $z$.

</details>
<details>
<summary>Solution</summary>

For each positive $p_Z(z)$, write $p(x,y\\mid z)=p(x\\mid z)p(y\\mid x,z)$ on positive joint cells. Taking negative logarithms and expectation in this conditional law gives $H(X,Y\\mid Z=z)=H(X\\mid Z=z)+H(Y\\mid X,Z=z)$. Weighting by $p_Z(z)$ and summing gives the asserted identity. Zero-weight strata do not enter.

</details>

### Exercise 2.8
<a id="joint-conditional-entropy-ex-8"></a>

If $H(X)=H(Y)=1$ and $H(X,Y)=3/2$, find both conditional entropies. Must the variables be independent?

<details>
<summary>Hint 1</summary>

Subtract the marginal terms.

</details>
<details>
<summary>Hint 2</summary>

Independence requires joint entropy equal to their sum.

</details>
<details>
<summary>Solution</summary>

Both $H(X\\mid Y)$ and $H(Y\\mid X)$ equal $1/2$ by the chain rule. They are smaller than the corresponding marginal entropies. Independence would instead give joint entropy two, so the variables are dependent. The entropy data need not specify a unique joint law.

</details>

### Exercise 2.9
<a id="joint-conditional-entropy-ex-9"></a>

Show that a deterministic function preserves entropy precisely when it is recoverable on the source support.

<details>
<summary>Hint 1</summary>

Apply the chain rule to $(X,f(X))$.

</details>
<details>
<summary>Hint 2</summary>

Use the zero conditional entropy characterisation.

</details>
<details>
<summary>Solution</summary>

Since $H(f(X)\\mid X)=0$, the joint entropy is $H(X)$. Its other decomposition is $H(f(X))+H(X\\mid f(X))$. Equality of the first two entropies is therefore equivalent to zero final term, equivalent to a function $g$ with $g(f(X))=X$ almost surely. Values outside the positive-probability support are irrelevant.

</details>

### Exercise 2.10
<a id="joint-conditional-entropy-ex-10"></a>

Does replacing $X$ by $(X,R)$, with an independent fair bit $R$, contradict entropy reduction under functions?

<details>
<summary>Hint 1</summary>

Identify the input of the relevant function.

</details>
<details>
<summary>Hint 2</summary>

The extra bit was not a deterministic function of $X$.

</details>
<details>
<summary>Solution</summary>

No. The enlarged random variable has entropy $H(X)+1$ because $R$ is independent. The map from $(X,R)$ to $X$ reduces entropy by one, as the deterministic-function theorem predicts. There is no deterministic map of $X$ alone that generates a new independent fair bit under this fixed probability model.

</details>

## Summary

Joint entropy describes the law of a tuple. Its chain rule separates marginal and residual uncertainty. Conditioning reduces entropy on average, equality is independence, and zero conditional entropy means almost-sure recoverability. These statements require joint laws and finite-alphabet hypotheses.
`;export{e as default};