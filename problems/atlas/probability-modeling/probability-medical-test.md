# A positive test

*Difficulty 3 of 5 · [Probability modeling](index.md) · exercise 2 of 15*

A condition affects 1% of people. A test is positive for 90% of affected people and 5% of unaffected people. Given a positive test, what is the probability the person has the condition?

<details>
<summary>Hint 1</summary>

Imagine 10,000 people

</details>

<details>
<summary>Hint 2</summary>

Count true positives and false positives

</details>

<details>
<summary>Worked solution</summary>

Among $10{,}000$ people, about $100$ have the condition and $90$ of them test positive. Of the $9{,}900$ unaffected people, $5\%$ or $495$ test positive. Thus there are $585$ positives, of which $90$ are affected. The conditional probability is $90/585=6/39=2/13\approx15.4\%$. High sensitivity does not overcome a low base rate and many false positives.

**Answer.** $2/13$, approximately $15.4\%$.

</details>

*Tags: Bayes rule, base rate, conditional probability*
